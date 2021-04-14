import DatasFuncBY from "../../../DatasFuncBY";
import FishConfig from "../../../Configs/FishConfig";
import FishTools from "../../../Tools/FishTools";
import BulletData from "../../../BuyuStaticData/BulletData";
import MessageNamesBY from "../../../MessageNamesBY";
import FishManager from "../FishCom/FishManager";
import Extension from "../../../../../Tools/Extension";
import BuYuConfig from "../../../Configs/BuYuConfig";
import MessageCenter from "../../../../../MVCFramework/MessageCenter";
import FishPoolManager from "../../../FishPools/FishPoolManager";
import NodeUtil from "../../../../../Tools/NodeUtil";
import GoldPool from "../../../FishPools/Pools/GoldPool";
import Global from "../../../../../Global/Global";
export default class Bullet {

    rootNode: cc.Node;
    private dirX: number;
    private dirY: number;
    isUsing = false;
    private time = 0;
    private angle = 0;
    private bulletSpeedX = 0;
    private bulletSpeedY = 0;
    private screenH = 360;
    private screenW = 640;
    private datas: BulletData;
    private id: number
    private bulletType: number;
    private isDouble: number = -1;
    seatId: number
    private creatUIPos: number
    lockFishId: string
    private transImgNode: cc.Node
    boxPointArr = new Array<cc.Node>()
    maxCnt = 10
    curCnt = 0
    public Creat(bulletinfo: BulletData, node: cc.Node) {
        this.screenH = cc.winSize.height / 2;
        this.screenW = cc.winSize.width / 2;
        this.datas = bulletinfo;
        this.rootNode = node;
        this.bulletSpeedX = BuYuConfig.bulletSpeed * this.screenW / 640;
        this.bulletSpeedY = BuYuConfig.bulletSpeed * this.screenH / 360;
        //  cc.log("speed", this.bulletSpeedX, this.bulletSpeedY)
        this.id = this.datas.bulletID;
        this.seatId = this.datas.seatid;
        this.creatUIPos = DatasFuncBY.intance().fGetUIPos(this.datas.seatid);
        if (!(this.creatUIPos >= 1 && this.creatUIPos <= 4)) {
            cc.error("子弹创建的初始ui位置错误!!!!")
        }
        this.lockFishId = this.datas.LockFishID.toString()
        this.dirX = this.datas.dirX;
        this.dirY = this.datas.dirY;
        let roomIdFrom0 = DatasFuncBY.intance().fGetEnterRoomIdFrom0();
        this.bulletType = BuYuConfig.GetPtType(roomIdFrom0, this.datas.bulletType / 100)
        cc.log("bulletType", roomIdFrom0, this.bulletType, this.datas.bulletType)
        //  this.bulletType = bulletinfo.bulletType;

        this.isDouble = bulletinfo.isdouble;
        this.transImgNode = Extension.SearchNode(this.rootNode, "ImgNode")
        this.Init();
        if (this.datas.time >= 0) {
            this.Update(this.datas.time / 1000);
        }
        //画线用 暂时没做
        MessageCenter.SendMessage(MessageNamesBY.BYBulletHasCreate, {
            data: bulletinfo
        })
    }
    Update(dt) {
        if (Global.isHide) return;
        this.time += dt;
        this.Move(dt);
    }
    private Init() {
        this.isUsing = true;
        this.time = 0;
        this.angle = 0;
        this.SetAngle();
        this.SetBulletSprite();
        this.InitUI();
    }
    private SetAngle() {
        this.angle = Math.atan2(-this.dirY, this.dirX) * (180 / Math.PI)
    }
    private InitUI() {
        let startPos = FishConfig.GetBulletCreatePos(this.creatUIPos)
        this.rootNode.setPosition(startPos);

        for (let i = 0; i < 4; i++) {
            let name = "Point" + (i + 1)
            let node = Extension.SearchNode(this.transImgNode, name)
            this.boxPointArr[i] = node
            let widget = node.getComponent(cc.Widget)
            widget.updateAlignment()
            node.active = BuYuConfig.showAABBBox;
        }
    }
    private Move(dt) {
        if (this.IsLockFish()) {
            let fishPos = FishManager.Instance.GetFishPos(this.lockFishId)
            if (!fishPos) {
                this.ClearLock()
                this.MoveNoLock(dt)
            } else {
                let fishPos_2 = new cc.Vec2(fishPos.x, fishPos.y)
                this.MoveWithLock(dt, fishPos_2)
            }
        } else {
            this.MoveNoLock(dt)
        }
    }
    public IsLockFish() {
        return this.lockFishId != ""
    }
    public ClearLock() {
        this.lockFishId = ""
    }
    private MoveNoLock(dt) {
        let pos = this.rootNode.position

        if (Math.abs(pos.x) > this.screenW || Math.abs(pos.y) > this.screenH) {
            this.Recycle();
            return
        }

        let linePos = new cc.Vec2(pos.x + this.bulletSpeedX * dt * this.dirX, pos.y + this.bulletSpeedY * dt * this.dirY)

        let newPosX = linePos.x
        let newPosY = linePos.y


        while (Math.abs(newPosX) > this.screenW || Math.abs(newPosY) > this.screenH) {
            if (Math.abs(newPosX) > this.screenW) {
                newPosX = 2 * this.screenW * this.GetDirUnitX() - newPosX
                this.ChangeDirX()
                this.SetAngle()
            }
            if (Math.abs(newPosY) > this.screenH) {
                newPosY = 2 * this.screenH * this.GetDirUnitY() - newPosY
                this.ChangeDirY()
                this.SetAngle()
            }
            this.curCnt++
        }
        this.rootNode.setPosition(new cc.Vec2(newPosX, newPosY));
        this.rootNode.angle = - this.angle
        if (this.curCnt > this.maxCnt) {
            this.Recycle();
            return;
        }
    }
    private MoveWithLock(dt, fishPos: cc.Vec2) {
        let pos = new cc.Vec2(this.rootNode.position.x, this.rootNode.position.y)
        let unitDir = FishTools.Vec2DirUnit(fishPos, pos)
        let linePos = new cc.Vec2(pos.x + this.bulletSpeedX * dt * unitDir.x, pos.y + this.bulletSpeedY * dt * unitDir.y)

        let newPosX = linePos.x
        let newPosY = linePos.y

        this.rootNode.setPosition(new cc.Vec2(newPosX, newPosY))
        let angle = Math.atan2(-unitDir.y, unitDir.x) * (180 / Math.PI)
        this.rootNode.angle = - angle
    }
    private ChangeDirX() {
        this.dirX *= -1
    }

    private ChangeDirY() {
        this.dirY *= -1
    }
    private GetDirUnitX() {
        if (this.dirX >= 0) {
            return 1
        } else {
            return -1
        }
    }

    private GetDirUnitY() {
        if (this.dirY >= 0) {
            return 1
        } else {
            return -1
        }
    }
    public Recycle() {
        if (this.isUsing) {
            this.time = 1
            this.isUsing = false;
            // this.rootNode.active = false;
            FishPoolManager.Instance.putBullet(this.rootNode);
        }
    }
    public GetBoxPointArrAR(): Array<cc.Vec2> {
        let res = new Array<cc.Vec2>()
        for (let i = 0; i < 4; i++) {
            let transPoint = this.boxPointArr[i]
            let pos = transPoint.parent.convertToWorldSpaceAR(transPoint.position)
            res.push(new cc.Vec2(pos.x, pos.y))
        }
        return res;
    }
    private SetBulletSprite() {


        let name = "BY_ZD_1"
        if (this.bulletType > 0 && this.bulletType <= 4) {

            if (this.isDouble == -1) {
                name = "BY_ZD_1"
            } else {
                name = "BY_ZD_1.1"
            }
        } else if (this.bulletType > 4 && this.bulletType < 8) {
            if (this.isDouble == -1) {
                name = "BY_ZD_2"
            } else {
                name = "BY_ZD_2.1"
            }

        } else {
            if (this.isDouble == -1) {
                name = "BY_ZD_3"
            } else {
                name = "BY_ZD_3.1"
            }
        }
        NodeUtil.SetSpriteFrame(this.transImgNode.getComponent(cc.Sprite), BuYuConfig.Atlas.BuYu, name)
    }
    public AABBRes(status: number): void {
        // cc.log("status", status)
        if (this.lockFishId == "") {
            //没撞上
            if (status == 0) {
            } else if (status == 1) {
                this.Recycle()
            }
        } else {
            //0 鱼还存在, 但是未发生碰撞
            //-1 锁定的鱼已经死亡,无法碰撞
            //1 碰上了锁定的鱼
            if (status == -1) {
                this.ClearLock()
            } else if (status == 0) {

            } else if (status == 1) {
                this.Recycle()
            }
        }



    }



















}
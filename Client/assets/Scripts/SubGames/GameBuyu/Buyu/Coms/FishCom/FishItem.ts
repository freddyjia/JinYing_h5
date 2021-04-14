import Extension from "../../../../../Tools/Extension";
import FishCreatData from "../../../BuyuStaticData/FishCreatData";
import BuYuConfig from "../../../Configs/BuYuConfig";
import FishPoolManager from "../../../FishPools/FishPoolManager";
import FishTouchEventManager from "../PanelTouch/FishTouchEventManager";
import FishTools from "../../../Tools/FishTools";
import PathMgr, { GroupDataNew, NewGroupData, PathInfo, PathLinearInterpolator } from "../../../Tools/PathMgr";
import ActionRed from "./ActionRed";
import ActionMove from "./ActionRot";
import ActionSkin from "./ActionSkin";

export default class FishItem {
    //初始皮肤 最好加一个 
    //针对UI----1路径位置 2被打颜色变化，3皮肤变化，4角度变化，5死亡旋转, 
    //生命周期完结， 死亡检测 ，出屏检测
    public node: cc.Node;
    public isUsing: boolean;
    private FishData: FishCreatData;


    public isDead: boolean;

    private fishID: string | number;

    public isZhy: boolean = false;//是否是组合鱼
    private fishIdInGroup: number = 0;
    public fishKey: string = "";
    private fishPath: PathLinearInterpolator;
    private pathInfo: PathInfo = new PathInfo();
    private zhyFishgroup: NewGroupData;
    private groupData: GroupDataNew;
    private swimTime: number = 0;
    public FishConfigIndex: number = 0;


    public fishSkinIndex: number = 0;
    private fishConfig: any;
    private ringType: number = -1;
    private Offset: cc.Vec2 = new cc.Vec2(0, 0);
    public CenterPos: cc.Vec3 = new cc.Vec3(0, 0, 0)
    private zhyConfig: any;

    private multiple: number = -1;//鱼的等级 用来比较层级

    private deadDuring = 2;
    private timeDead = 0;

    private RingNode: cc.Node;
    private BoxNode: cc.Node;
    private SwimingNode: cc.Node;
    private SwimYYNode: cc.Node;
    private boxPointArr = new Array<cc.Node>();

    private actionSkin: ActionSkin = new ActionSkin();
    private actionRot: ActionMove = new ActionMove();
    private actionRed: ActionRed = new ActionRed();
    private isfirstAni: boolean = false;
    private isAnOk: boolean = false;
    private zhyGroupMark: number;
    public DeadFuncback: (fish: FishItem) => void;
    //isInv 视角是否反转
    public Creat(data: FishCreatData, node: cc.Node, isInv: boolean) {
        this.node = node;
        this.node.setScale(cc.v2(-1, 1))
        this.SwimingNode = Extension.SearchNode(this.node, "Swim");
        this.SwimYYNode = Extension.SearchNode(this.node, "SwimYY");
        this.RingNode = Extension.SearchNode(this.node, "Ring");
        this.BoxNode = Extension.SearchNode(this.node, "Box");
        this.node.active = true;
        this.FishData = data;
        this.isUsing = true;
        this.isDead = false;
        this.isfirstAni = true;
        this.isAnOk = false;

        ///----------------
        this.isZhy = data.iszhy;
        this.zhyGroupMark = data.zhyGroupMark;
        this.fishKey = data.fishKey;
        this.fishPath = PathMgr.intence().GetPath(data.pathId, isInv);
        this.zhyFishgroup = PathMgr.intence().GetGroupDatas(data.groupsId);
        this.groupData = this.zhyFishgroup.GroupDataArray[data.groupId];
        this.swimTime = data.swimTime;
        this.zhyConfig = data.zhyConfig;
        if (this.isZhy) {
            this.fishSkinIndex = Number(data.zhyFishKey);
            this.FishConfigIndex = data.groupsId;
        }
        else {
            this.fishSkinIndex = this.groupData.FishIndex;
        }
        this.fishConfig = FishTools.GetAConfig(this.fishSkinIndex);
        this.multiple = BuYuConfig.GetMultiple(this.fishSkinIndex);
        //获取鱼后面特效的
        if (this.isZhy) {
            this.ringType = data.zhyConfig['ringType'];
            let configOffsetArr: Array<number> = data.zhyConfig["offerXY"];
            this.Offset = new cc.Vec2(configOffsetArr[0], configOffsetArr[1])
        } else {
            if (this.fishConfig["ringType"] != -1) {
                this.ringType = this.fishConfig["ringType"];
            }
        }
        this.InitFish();
    }
    private InitFish() {
        this.FillSkin();
        this.InitBox();
        if (this.ringType != -1) {
            this.CreatRing();
        }
        if (this.groupData.ActionUnite) {
            this.CreatYIWang();
        }
        this.actionSkin.Init(this.SwimingNode, this.SwimYYNode, this.fishSkinIndex);
        this.actionRot.Init(this.node, this.swimTime);
        this.actionRed.Init(this.SwimingNode);
    }
    private FillSkin() {
        let spriteName = "10000 ";
        let skinPath = BuYuConfig.FishSpritePath + this.fishSkinIndex;
        Extension.DirGetAbSprite(this.SwimingNode.getComponent(cc.Sprite), skinPath, spriteName, () => {
            this.SwimYYNode.getComponent(cc.Sprite).spriteFrame = this.SwimingNode.getComponent(cc.Sprite).spriteFrame
            this.node.width = this.SwimingNode.width;
            this.node.height = this.SwimingNode.height;
        })
    }
    private InitBox() {
        let boxSize = PathMgr.intence().GetFishBoxSize(this.fishSkinIndex);
        this.BoxNode.width = boxSize.x;
        this.BoxNode.height = boxSize.y;

        let boxOff = PathMgr.intence().GetFishBoxOff(this.fishSkinIndex);
        this.BoxNode.setPosition(boxOff);
        for (let i = 0; i < 4; i++) {
            let name = "Point" + (i + 1)
            let node = Extension.SearchNode(this.BoxNode, name)
            this.boxPointArr[i] = node
            let widget = node.getComponent(cc.Widget)
            widget.updateAlignment()
        }
        this.BoxNode.active = BuYuConfig.showAABBBox;
    }
    private CreatRing() {
        let ringnode = FishPoolManager.Instance.GetRingObj(this.ringType);
        let ringScale = 1;
        let offsetX = 0;
        let offsetY = 0;
        if (this.isZhy) {
            ringScale = this.zhyConfig.ringScale / this.groupData.FishScaling;
            offsetX = this.zhyConfig.ringOffset[1];
            offsetY = this.zhyConfig.ringOffset[2];
        } else {
            ringScale = this.fishConfig["ringScale"];
            offsetX = this.fishConfig["ringOffsetX"];
            offsetY = this.fishConfig["ringOffsetY"];
        }
      //  ringnode.scale = ringScale;
        ringnode.parent = this.RingNode.getChildByName("RingPoint");
        ringnode.setPosition(new cc.Vec2(offsetX, offsetY));
    }
    private CreatYIWang() {
        let yiwangNode = FishPoolManager.Instance.GetYiWang();
        let tarScale = 0.5
        yiwangNode.scaleX = -tarScale
        yiwangNode.scaleY = tarScale
        let offsetX = this.fishConfig.ywdjOffsetX
        let offsetY = this.fishConfig.ywdjOffsetY
        yiwangNode.setPosition(new cc.Vec2(offsetX, offsetY));
        yiwangNode.active = true;
        yiwangNode.parent = this.RingNode.getChildByName("ywdjPoint");
    }
    //设置死亡
    public SetIsDead() {
        this.isUsing = false;
        this.isDead = true;
    }
    public Update(dt) {
        //生命周期完结
        if (this.swimTime > 1) {
            this.SetIsDead();
            this.node.active = false;
            this.destroySelf();
            return;
        }
        //射击死亡
        if (this.isDead && !this.isUsing) {
            //5死亡旋转, 
            this.doAnim();
            return;
        }
        //存活状态
        this.fishPath.SetPathInfo(this.swimTime, this.pathInfo);
        this.swimTime += dt * this.GetTimeSpeed();
        this.MoveFish();
        this.actionSkin.Update(dt);
        this.actionRot.UpdateRot(this.pathInfo.rot);
        this.actionRed.updateColor(dt);

        //ring旋转\

        let node = this.RingNode.getChildByName("RingPoint")
        if (node.childrenCount > 0) {
            node.children[0].getChildByName("ForGround").angle += 2;
            // cc.log("ringnode", )
        }


    }
    public destroySelf() {
        if (this.RingNode.getChildByName("ywdjPoint").childrenCount > 0)
            FishPoolManager.Instance.PutYiWang(this.RingNode.getChildByName("ywdjPoint").children[0])
        if (this.RingNode.getChildByName("RingPoint").childrenCount > 0)
            FishPoolManager.Instance.PotRingObj(this.ringType, this.RingNode.getChildByName("RingPoint").children[0])
        this.SwimingNode.getComponent(cc.Sprite).spriteFrame = null;
        this.SwimYYNode.getComponent(cc.Sprite).spriteFrame = null;
        this.DeadFuncback(this);
    }
    public destroySelfWithOutCall() {
        if (this.RingNode.getChildByName("ywdjPoint").childrenCount > 0)
            FishPoolManager.Instance.PutYiWang(this.RingNode.getChildByName("ywdjPoint").children[0])
        if (this.RingNode.getChildByName("RingPoint").childrenCount > 0)
            FishPoolManager.Instance.PotRingObj(this.ringType, this.RingNode.getChildByName("RingPoint").children[0])
        this.SwimingNode.getComponent(cc.Sprite).spriteFrame = null;
        this.SwimYYNode.getComponent(cc.Sprite).spriteFrame = null;
    }
    private doAnim() {
        if (this.isfirstAni) {
            //清除锁定的鱼
            FishTouchEventManager.Instance.FishDead(this.fishKey);
            this.isfirstAni = false;
        }
        if (this.isAnOk) {
            this.destroySelf();
            return;
        }


        if (this.timeDead < this.deadDuring) {
            let arr1 = [0, 1, 2]
            let arr2 = [0, 1, 2]
            let arr3 = [0, -1, -2, -3, -4]
            let perTime = 0.05
            let perAngle = 22.5
            this.timeDead = this.timeDead + BuYuConfig.FrameTime
            let timeTotal = this.timeDead % (perTime * 8)
            let timeLess = this.timeDead % perTime
            let index = Math.ceil(timeTotal / perTime)

            let arr: Array<number> = null
            if (index < 3) {
                arr = arr1
            } else if (index >= 3 && index < 5) {
                index = index - 2
                arr = arr2
            } else {
                index = index - 4
                arr = arr3
            }

            if (index >= arr.length) {
                index = arr.length - 1
            }

            let last = arr[index]
            let next = 0
            if (index < arr.length) {
                next = arr[index]
            } else {
                next = arr[index + 1]
            }
            let angle = last * perAngle * (1 - timeLess / perTime) + next * perAngle * (timeLess / perTime)
            this.node.angle = - angle
        } else {
            this.isAnOk = true;
        }

    }
    private MoveFish() {
        let groupOff = new cc.Vec2(this.zhyFishgroup.FrontPosition.x, this.zhyFishgroup.FrontPosition.y)
        let fishGroupPos = this.groupData.PosList[this.fishIdInGroup]
        let groupFishOff = new cc.Vec2(fishGroupPos.x, fishGroupPos.y)
        let position = new cc.Vec2(this.pathInfo.posX + groupOff.x + groupFishOff.x + this.Offset.x,
            this.pathInfo.posY + groupOff.y + groupFishOff.y + this.Offset.y)
        this.node.setPosition(position);
        this.CenterPos = new cc.Vec3(this.pathInfo.posX + groupOff.x + groupFishOff.x, this.pathInfo.posY + groupOff.y + groupFishOff.y, 0)
    }

    public ShowRed() {
        this.actionRed.ShowRed();
    }
    private GetTimeSpeed(): number {
        return (20 / this.fishPath.m_MaxDistance) * this.pathInfo.timeScaling * this.groupData.SpeedScaling;
    }

    //碰撞检测用---------------------------
    public GetBoxPoint1(): cc.Vec2 {
        let pos = this.BoxNode.convertToWorldSpaceAR(this.boxPointArr[1].position)
        return new cc.Vec2(pos.x, pos.y);
    }
    public GetBoxPoint2(): cc.Vec2 {
        let pos = this.BoxNode.convertToWorldSpaceAR(this.boxPointArr[0].position)
        return new cc.Vec2(pos.x, pos.y);
    }
    public GetBoxPoint3(): cc.Vec2 {
        let pos = this.BoxNode.convertToWorldSpaceAR(this.boxPointArr[3].position)
        return new cc.Vec2(pos.x, pos.y);
    }
    public GetBoxPoint4(): cc.Vec2 {
        let pos = this.BoxNode.convertToWorldSpaceAR(this.boxPointArr[2].position)
        return new cc.Vec2(pos.x, pos.y);
    }
    public GetZHYGroupMark(): number {
        return this.zhyGroupMark;
    }
    public GetMultiple(): number {
        return this.multiple;
    }
    public checkOut(): boolean {
        let screenH = cc.winSize.height / 2;
        let screenW = cc.winSize.width / 2;
        if (this.CenterPos.x < -screenW) return true;
        if (this.CenterPos.x > screenW) return true;
        if (this.CenterPos.y > screenH) return true;
        if (this.CenterPos.y < -screenH) return true;
        return false
    }
}
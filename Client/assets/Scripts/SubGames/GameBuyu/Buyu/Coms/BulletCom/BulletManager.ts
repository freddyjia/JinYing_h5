import { SheetBuleetBack, SyncBullet } from "../../../../../Protos/BuYu";
import DatasFuncBY from "../../../DatasFuncBY";
import ShootBullet from "../../../BuyuStaticData/BulletData";
import Bullet from "./Bullet";
import FishManager from "../FishCom/FishManager";
import BYTouchData from "../../../BuyuStaticData/BYTouchData";
import FishConfig from "../../../Configs/FishConfig";
import BuYuConfig from "../../../Configs/BuYuConfig";
import YuWangManager from "../YuWangCom/YuWangManager";
import FishTouchEventManager from "../PanelTouch/FishTouchEventManager";
import { AABBData } from "../../../BuyuStaticData/AABBData";
import FishPoolManager from "../../../FishPools/FishPoolManager";
import Global from "../../../../../Global/Global";
import MessageCenter from "../../../../../MVCFramework/MessageCenter";
import MessageNamesBY from "../../../MessageNamesBY";
import AudioManager from "../../../../../Manager/AudioManager";
import TimerManager from "../../../../../Components/TimerManager";

export default class BulletManager {
    node: cc.Node;
    bulletCopy: cc.Node;
    bullets: Bullet[];
    mybulletCount: number = 0;
    static _instance: BulletManager;
    private aabbData = new AABBData();
    private aabbAc: (aabbData: AABBData) => number
    public static get Instance(): BulletManager {
        if (!this._instance) {
            this._instance = new BulletManager();
        }
        return this._instance;
    }
    public Init(): void {
        this.bullets = [];
        this.node = cc.find("Canvas/FishNode/FishScene/Panel/BulletContent");
        this.setAAbb();
    }
    public UpdataFunc(dt) {
        if (!this.bullets) return;
        if (this.bullets.length < 1) return;
        // cc.log("在弹", this.bullets.length)
        this.bullets.forEach(bullet => {
            if (bullet.isUsing == true) {
                bullet.Update(dt);
                this.aabbData.bulletNode = bullet.rootNode;
                this.aabbData.pointArrAR = bullet.GetBoxPointArrAR()
                this.aabbData.lockFishKey = bullet.lockFishId;
                this.aabbData.bulletSeatId = bullet.seatId;
                let status = this.aabbAc(this.aabbData)
                bullet.AABBRes(status);
                if (status == 1) {
                    let index = this.bullets.indexOf(bullet);
                    if (bullet.seatId == DatasFuncBY.intance().fGetMSeatId()) {
                        this.mybulletCount--;
                    }
                    if (index != -1) {
                        this.bullets.splice(index, 1);

                    }
                } else if (status == 0 && DatasFuncBY.intance().fGetLockStatus() == true && FishTouchEventManager.Instance.SelfHasLock()) {
                    //   cc.log("更换锁定鱼")
                    if (bullet.seatId == DatasFuncBY.intance().fGetMSeatId())
                        bullet.lockFishId = FishTouchEventManager.Instance.selfLockFishKey;
                }
            }
        });
    }
    private setAAbb() {
        let aabbAc = (aabbData: AABBData) => {
            let bulletNode: cc.Node = aabbData.bulletNode
            let lockFishKey: string = aabbData.lockFishKey
            let isme: boolean = false;
            if (lockFishKey == "-1" || lockFishKey == "") {
                let fishKey = FishManager.Instance.AABBNoLock(aabbData)
                if (fishKey != "") {

                    if (aabbData.bulletSeatId == DatasFuncBY.intance().fGetMSeatId()) {
                        FishManager.Instance.ShowRed(fishKey)
                        isme = true;
                    }
                    YuWangManager.Instance.CreatYuWang(new cc.Vec2(bulletNode.position.x, bulletNode.position.y), isme)
                }
                //没撞上
                if (fishKey == "") {
                    return 0
                }
                return 1
            } else {
                let status = FishManager.Instance.AABBWithLock(aabbData);
                //0 鱼还存在, 但是未发生碰撞
                //-1 锁定的鱼已经死亡,无法碰撞
                //1 碰上了锁定的鱼
                if (status == -1) {
                    cc.error("没有鱼")
                } else if (status == 0) {

                } else if (status == 1) {
                    if (aabbData.bulletSeatId == DatasFuncBY.intance().fGetMSeatId()) {
                        FishManager.Instance.ShowRed(aabbData.lockFishKey);
                        isme = true;
                    }
                    YuWangManager.Instance.CreatYuWang(new cc.Vec2(bulletNode.position.x, bulletNode.position.y), isme)
                }
                return status
            }


        }
        this.aabbAc = aabbAc;
    }
    private CreatBullet(info: ShootBullet, isAsync: boolean = false) {
        let bulletNode = FishPoolManager.Instance.getBullet();

        bulletNode.parent = this.node;
        bulletNode.active = true;
        let bullet: Bullet = new Bullet();
        bullet.Creat(info, bulletNode);
        AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.by_shoot);
        //   cc.log("子弹")
        this.bullets.push(bullet)
    }
    public CreatOtherBullet(shootInfo: SheetBuleetBack): void {
        //服务器与客户端时间差 
       
      
            let info: ShootBullet = new ShootBullet();
            info.SetData(shootInfo.bulletID, shootInfo.bulletGold, shootInfo.seatid, shootInfo.LockFishID, BuYuConfig.bulletSpeed, shootInfo.dirX, shootInfo.dirY, 0, shootInfo.type);
            if (this.CheckMseatId() == true) {
                info.SetdirY(-1 * shootInfo.dirY)
            }
            this.CreatBullet(info);
    

    }
    public InitGameBullet(bulletinfos: SyncBullet) {
        for (let i = 0; i < bulletinfos.bullets.length; i++) {
            let shootInfo = bulletinfos.bullets[i];
            let info: ShootBullet = new ShootBullet();
            info.SetData(shootInfo.bulletID, shootInfo.bulletType, shootInfo.seatid, shootInfo.LockFishID, BuYuConfig.bulletSpeed, shootInfo.dirX, shootInfo.dirY, shootInfo.time, shootInfo.type);
            if (this.CheckMseatId() == true) {
                info.SetdirY(-1 * info.dirY);
            }
            this.CreatBullet(info, true);
        }
    }
    public CreatMbullet(res: any) {
        let byTouchData: BYTouchData = res.data;
        let uiPos: cc.Vec2 = byTouchData.evt.uiPos
        let localFishId = byTouchData.fishKey
        let mSeatId = DatasFuncBY.intance().fGetMSeatId()
        let creatUIPos = FishConfig.GetBulletCreatePos(DatasFuncBY.intance().fGetUIPos(mSeatId))
        let newVec = new cc.Vec2(uiPos.x - creatUIPos.x, uiPos.y - creatUIPos.y)
        let vecLen = Math.sqrt(newVec.x * newVec.x + newVec.y * newVec.y)
        let unitX = newVec.x / vecLen;
        let unitY = newVec.y / vecLen;
        if (unitY < 0) unitY = 0;
        let speed = DatasFuncBY.intance().fGetBulletSpeed(mSeatId);
        let info: ShootBullet = new ShootBullet();



        let type: number = DatasFuncBY.intance().fGetPTType(mSeatId);
        let roomIdFrom0 = DatasFuncBY.intance().fGetEnterRoomIdFrom0();

        let bulletvalue = BuYuConfig.BYRoomRateNum[roomIdFrom0][type - 1] * 100;


        //如果金币小于房间限制   return; 
        if (Global.PlayerInfo.PlayerCurrency.Gold < bulletvalue) {
            MessageCenter.SendMessage(MessageNamesBY.FishBtnAutoClick);
            MessageCenter.SendMessage(MessageNamesBY.FishBtnLockClick);
            return;
        }
        if (this.mybulletCount > 30) return;
        this.mybulletCount++;
        let isdouble: number = 1;
        info.SetData(0, bulletvalue, mSeatId, localFishId, speed, unitX, unitY, 0, isdouble);
        this.CreatBullet(info);

    }

    //检查自己的座位号是不是大于2 大于2要反转
    private CheckMseatId(): boolean {
        let isInv = DatasFuncBY.intance().fGetMSeatId() > 2
        if (isInv) {
            return true;
        } else {
            return false;
        }
    }
    public HideGame() {
        this.bullets.forEach(bullet => {
            bullet.Recycle();
        });
        this.bullets = [];
        this.mybulletCount = 0;
    }

}
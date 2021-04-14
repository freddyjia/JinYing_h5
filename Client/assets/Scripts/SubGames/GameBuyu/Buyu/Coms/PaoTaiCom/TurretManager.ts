import TimerManager from "../../../../../Components/TimerManager";
import Global from "../../../../../Global/Global";
import { BuYuPlayerInfo, PlayerJoin, PlayerLeave, PTUpDown, SheetBuleetBack, SpecialDead, SyncBullet } from "../../../../../Protos/BuYu";
import Util from "../../../../../Tools/Util";
import BYTouchData from "../../../BuyuStaticData/BYTouchData";
import BuYuConfig from "../../../Configs/BuYuConfig";
import FishConfig from "../../../Configs/FishConfig";
import DatasFuncBY from "../../../DatasFuncBY";
import FishTools from "../../../Tools/FishTools";
import FishItem from "../FishCom/FishItem";
import FishManager from "../FishCom/FishManager";
import TurretItem from "./TurretItem";

export default class TurretManager {
    public ClickAdd_SubCallback: (isadd: boolean) => void;
    private node: cc.Node;
    private PTItems: TurretItem[];
    private roomIdFrom0: number = 0;
    static _Instance: TurretManager;
    private SelfPosSP: cc.Node;
    public static get Instance() {
        if (this._Instance == null) {
            this._Instance = new TurretManager();
        }
        return this._Instance;
    }

    public Init() {
        this.node = cc.find("Canvas/FishNode/FishScene/Panel/PTContent");
        this.SelfPosSP = cc.find("SelfPosSp", this.node);
        this.InitPaoTai();
        cc.log("炮台", this.node)
    }
    //设置加减

    //玩家进入更新炮台显示内容
    public InitRoomInfo(playerInfos: BuYuPlayerInfo[]) {
        this.roomIdFrom0 = DatasFuncBY.intance().fGetEnterRoomIdFrom0();
        for (let i = 0; i < playerInfos.length; i++) {
            let playerinfo: BuYuPlayerInfo = playerInfos[i];
            this.PlayerUpdata(playerinfo);
        }
    }
    //游戏中玩家进入
    public PlayerEnter(PlayerJoin: PlayerJoin) {
        cc.log("玩家进入", PlayerJoin.playerInfos);
        this.PlayerUpdata(PlayerJoin.playerInfos);
    }
    public PlayLeave(PlayerleaveInfo: PlayerLeave) {
        if (PlayerleaveInfo.playerId != PlayerleaveInfo.playerId) {
            cc.log("其他玩家离开")
            let index = DatasFuncBY.intance().fGetUIPos(PlayerleaveInfo.seatid) - 1;
            let PTItem: TurretItem = this.PTItems[index];
            PTItem.PlayerLeave();
        }
    }
    //根据数据 更新各炮台方向
    public UpTurretDix(SyncBullet: SyncBullet) {
        for (let i = 0; i < SyncBullet.bullets.length; i++) {
            let bulletinfo = SyncBullet.bullets[i];
            let UIPos = DatasFuncBY.intance().fGetUIPos(bulletinfo.seatid);
            let dirX = bulletinfo.dirX;
            let dirY = bulletinfo.dirY;
            let UIindex = UIPos - 1;
            let PTitem = this.PTItems[UIindex];
            PTitem.Shoot(dirX, dirY)
        }
    }
    public sheetBackFunc(bullet: SheetBuleetBack) {
        let UIPos = DatasFuncBY.intance().fGetUIPos(bullet.seatid);
        // cc.log("bullet", bullet.LockFishID)
        let dirX = bullet.dirX;
        let dirY = bullet.dirY;
        if (bullet.LockFishID != -1) {
            let fish: FishItem = FishManager.Instance.FindFishIsUsing(bullet.LockFishID);
            if (fish) {
                let creatUIPos = FishConfig.GetBulletCreatePos(DatasFuncBY.intance().fGetUIPos(bullet.seatid))
                let newVec = new cc.Vec2(fish.CenterPos.x - creatUIPos.x, fish.CenterPos.y - creatUIPos.y)
                let vecLen = Math.sqrt(newVec.x * newVec.x + newVec.y * newVec.y)
                dirX = newVec.x / vecLen
                dirY = newVec.y / vecLen
                if (DatasFuncBY.intance().fGetMSeatId() > 2) {
                    dirY = -1 * dirY;
                }
            }
        }

        let UIindex = UIPos - 1;
        let PTitem = this.PTItems[UIindex];
        if (bullet.seatid != DatasFuncBY.intance().fGetMSeatId())
            PTitem.Shoot(dirX, dirY);



        PTitem.SetPlayerGold(bullet.playerGold);
    }

    public SpecialFishDead(res: SpecialDead) {
        let UIPos = DatasFuncBY.intance().fGetUIPos(res.seatid);
        let UIindex = UIPos - 1;
        let PTitem = this.PTItems[UIindex];
        cc.log("pt", UIindex, "打掉特殊鱼群");
    }
    //------------------------------------------------私有函数---------------------------------------------------------------------------------------------
    //初始化四个炮台
    private InitPaoTai() {
        this.PTItems = [];
        for (let i = 1; i < 5; i++) {
            let ptnode = cc.find("Ptnode" + i, this.node)
            let ptItem = new TurretItem();
            ptItem.Init(ptnode, i);
            this.PTItems.push(ptItem);

        }
    }
    private PlayerUpdata(playerInfo: BuYuPlayerInfo) {
        let PTitem: TurretItem = null;
        let bulletValue = BuYuConfig.GetBulletValue(this.roomIdFrom0, playerInfo.ptType)
        let index = 0;
        if (Global.PlayerInfo.playerId == playerInfo.playerId) {
            let mUIPos = DatasFuncBY.intance().fGetMUIPos();
            index = mUIPos - 1;
            cc.log("我的炮台的位置", index);
            PTitem = this.PTItems[index];
            PTitem.SetClickCallBack(this.ClickAdd_SubCallback);
            PTitem.PlayerEnter(true, playerInfo);


            this.SelfPosSP.active = true;
            let posX = BuYuConfig.PTPoints[index][0];
            let posY = BuYuConfig.PTPoints[index][1] + 150;
            this.SelfPosSP.setPosition(new cc.Vec2(posX, posY));
            TimerManager.GetInstance().CallActionDelay(() => {
                this.SelfPosSP.active = false;
            }, 3);

        } else {
            let PlayerUIPos = DatasFuncBY.intance().fGetUIPos(playerInfo.seatid);
            index = PlayerUIPos - 1;
            cc.log("其他炮台的位置", index);
            PTitem = this.PTItems[index];
            PTitem.PlayerEnter(false, playerInfo);
        }
        PTitem.CurrentType = BuYuConfig.GetPtType(this.roomIdFrom0, bulletValue)
        cc.log("bulletValue", PTitem.CurrentType)
        PTitem.ChangeType(bulletValue);
        //炮台子弹数值
        PTitem.SetPlayerGold(playerInfo.gold);

    }
    public UpdatePlayerGold(seatid: number, gold: number) {
        cc.log("更新金币", seatid, gold)

        let UIPos = DatasFuncBY.intance().fGetUIPos(seatid);
        let UIindex = UIPos - 1;
        let PTitem = this.PTItems[UIindex];
        PTitem.SetPlayerGold(gold);

    }
    public UpdatePlayerTopGold(seatid: number, gold: number) {
        let UIPos = DatasFuncBY.intance().fGetUIPos(seatid);
        let UIindex = UIPos - 1;
        let PTitem = this.PTItems[UIindex];
        PTitem.setGoldTopPool(gold);
    }
    public ReqShoot(req: any) {
        let byTouchData: BYTouchData = req.data;
        let uiPos: cc.Vec2 = byTouchData.evt.uiPos;
        let localFishId = byTouchData.fishKey
        let fishPos = FishManager.Instance.FindFishPosIsUsing(localFishId)
        if (fishPos) {
            uiPos = fishPos
        }
        let mSeatId = DatasFuncBY.intance().fGetMSeatId();
        let creatUIPos = FishConfig.GetBulletCreatePos(DatasFuncBY.intance().fGetUIPos(mSeatId))
        let newVec = new cc.Vec2(uiPos.x - creatUIPos.x, uiPos.y - creatUIPos.y)
        let vecLen = Math.sqrt(newVec.x * newVec.x + newVec.y * newVec.y)
        let unitX = newVec.x / vecLen;
        let unitY = newVec.y / vecLen;
        if (unitY < 0) unitY = 0;
        let index = DatasFuncBY.intance().fGetMUIPos() - 1;
        let ptItem = this.PTItems[index]
        ptItem.LocalPlayerShoot(unitX, unitY, localFishId)
    }
    public AddMPtType() {
        let PTitem: TurretItem = this.GetMyPTItem();
        let currentType = PTitem.CurrentType;
        currentType++;
        if (currentType > 10)
            currentType = 1;
        DatasFuncBY.intance().fAddPtType(currentType);
    }
    public SubMPtType() {
        let PTitem: TurretItem = this.GetMyPTItem();
        let currentType = PTitem.CurrentType;
        currentType--;
        if (currentType < 1)
            currentType = 10;
        DatasFuncBY.intance().fSubPtType(currentType);
    }

    public GetMyPTItem(): TurretItem {
        let mUIPos = DatasFuncBY.intance().fGetMUIPos();
        let index = mUIPos - 1;
        let PTitem = this.PTItems[index];
        return PTitem;
    }
    public ChangePtType(seat: number, type: number) {
        for (let i = 0; i < this.PTItems.length; i++) {
            let ptitem = this.PTItems[i];
            if (ptitem.seatId == seat) {
                ptitem.CurrentType = type;
                let pttype = BuYuConfig.GetBulletValue(this.roomIdFrom0, type)
                ptitem.ChangeType(pttype);
            }
        }
    }
    public GetPTType(seatId) {
        for (let i = 0; i < this.PTItems.length; i++) {
            let ptitem = this.PTItems[i];
            if (ptitem.seatId == seatId) {
                return ptitem.CurrentType;
            }
        }
    }
    public GetPTDoubleType(seatId) {
        for (let i = 0; i < this.PTItems.length; i++) {
            let ptitem = this.PTItems[i];
            if (ptitem.seatId == seatId) {
                return ptitem.DoubleType;
            }
        }
    }

    public HideGame() {
        this.InitPaoTai();
    }
}

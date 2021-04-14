import UpdateBeat from "../../../Manager/UpdateBeat";
import { AppearFishInfo, AsycFishInfo, BulletBoom, FishBossTip, PlayerJoin, PlayerLeave, PTUpDownBack, RoomInfo, SheetBuleetBack, SpecialDead, SyncBullet } from "../../../Protos/BuYu";
import BulletManager from "./Coms/BulletCom/BulletManager";
import FishManager from "./Coms/FishCom/FishManager";
import FishPoolManager from "../FishPools/FishPoolManager";
import FishScene from "./FishScene";
import FishTouchEventManager, { FishScreenEvt } from "./Coms/PanelTouch/FishTouchEventManager";
import TurretManager from "./Coms/PaoTaiCom/TurretManager";
import YuWangManager from "./Coms/YuWangCom/YuWangManager";
import LockFishManager from "./Coms/PanelTouch/LockFishManager";
import DatasFuncBY from "../DatasFuncBY";
import FishDieSpineManager from "./Coms/SpineCom/FishDieSpineManager";
import Coinmanager from "./Coms/CoinCom/CoinManager";
import TimerManager from "../../../Components/TimerManager";

export default class FishGame {
    scene: FishScene;
    Alive: boolean = false;
    GameStart: boolean = false;
    public static _instance: FishGame;
    constructor() {
        UpdateBeat.GetInstance().Add((deltaTime) => {
            this.UpdateFunc(deltaTime);
        });
    }
    public static get Instance(): FishGame {
        if (!this._instance) {
            this._instance = new FishGame();
        }
        return this._instance;
    }
    Init() {
        if (!this.scene) {
            this.scene = new FishScene();
            this.scene.Init();
            this.scene.LoadSuc = () => {
                this.InitManagers();
                this.Alive = true;
                cc.log("初始完毕")
                let winSize = cc.winSize;//获取当前游戏窗口大小
                cc.log("--当前游戏窗口大小  w:" + winSize.width + "   h:" + winSize.height);

                let viewSize = cc.view.getFrameSize();
                cc.log("--视图边框尺寸：w:" + viewSize.width + "  h:" + viewSize.height);

                let canvasSize = cc.view.getCanvasSize();//视图中canvas尺寸
                cc.log("--视图中canvas尺寸  w:" + canvasSize.width + "  H:" + canvasSize.height);

                let visibleSize = cc.view.getVisibleSize();
                cc.log("--视图中窗口可见区域的尺寸 w:" + visibleSize.width + "   h:" + visibleSize.height);

                let designSize = cc.view.getDesignResolutionSize();
                cc.log("--设计分辨率：" + designSize.width + "    h: " + designSize.height);

                cc.log("--当前节点的尺寸 w:" + this.scene.buyuScene.width + "   h:" + this.scene.buyuScene.height);
            }
        }



    }
    public HideFishScene() {
        this.GameStart = false;
        this.scene.HideFishScene();

        this.ResetScence()
    }
    public ResetScence() {
        BulletManager.Instance.HideGame();
        FishManager.Instance.HideGame();
        YuWangManager.Instance.HideGame();
        FishDieSpineManager.Instance.HideGame();
        Coinmanager.Instance.HideGame();
        TurretManager.Instance.HideGame();
    }
    public ShowFishScene() {
        this.GameStart = true;
        this.scene.ShowFishScene();
    }
    private InitManagers() {
        //炮台管理
        FishPoolManager.Instance.Init();
        TurretManager.Instance.Init();
        TurretManager.Instance.ClickAdd_SubCallback = (isadd: boolean) => {
            if (isadd) this.AddPtType();
            else this.SubPtType();
        }
        //子弹管理
        BulletManager.Instance.Init();
        FishManager.Instance.Init();
        FishTouchEventManager.Instance.Init();
        YuWangManager.Instance.Init();
        LockFishManager.Instance.Init();
        FishDieSpineManager.Instance.Init();
        Coinmanager.Instance.Init();
    }
    UpdateFunc(deltaTime) {
        if (!this.Alive || !this.GameStart) return;
        BulletManager.Instance.UpdataFunc(deltaTime);
        FishManager.Instance.UpdataFunc(deltaTime); (deltaTime);
        FishTouchEventManager.Instance.UpdataFunc(deltaTime);
        YuWangManager.Instance.UpdataFunc(deltaTime);
        LockFishManager.Instance.UpdataFunc(deltaTime);
        FishDieSpineManager.Instance.UpdataFunc(deltaTime);
        Coinmanager.Instance.UpdataFunc(deltaTime);
        //   cc.log("捕鱼scene-----deltaTime")
    }
    //收到RoomInfo消息 初始化炮台
    public InitRoomInfo(roomInfo: RoomInfo) {
        TurretManager.Instance.InitRoomInfo(roomInfo.playerInfos);
    }
    //收到玩家进入消息 更新炮台
    public PlayerEnterGame(PlayerJoin: PlayerJoin) {
        TurretManager.Instance.PlayerEnter(PlayerJoin)
    }
    //收到玩家离开消息 更新炮台
    public PlayerLeave(leaveinfo: PlayerLeave) {
        TurretManager.Instance.PlayLeave(leaveinfo);
    }
    //同步场景中的子弹
    public SyncBulletHandler(SyncBullet: SyncBullet) {
        //1:更新炮台的信息（数值,方向）
        TurretManager.Instance.UpTurretDix(SyncBullet);
        //2：子弹管理更新界面子弹
        BulletManager.Instance.InitGameBullet(SyncBullet);
    }
    public SheetBuleetBack(shootBulletBack: SheetBuleetBack) {
        if (shootBulletBack.seatid != DatasFuncBY.intance().fGetMSeatId()) {


            let timevalue = DatasFuncBY.intance().fGetCountTime() / 1000;
            let fishTime = Number(shootBulletBack.serverTime) / 1000;
            let localtime = new Date().getTime() / 1000;

            let tempfishtime = (fishTime + timevalue);
            let dealy = tempfishtime - localtime;
            cc.log("dealybullet", dealy)
            if (dealy < 0) dealy = 0;
            TimerManager.GetInstance().CallActionDelay(() => {
                BulletManager.Instance.CreatOtherBullet(shootBulletBack);
                LockFishManager.Instance.OtherShoot(shootBulletBack);
                TurretManager.Instance.sheetBackFunc(shootBulletBack);
            }, dealy)

        }

    }
    public BulletBoomHandler(bulletboom: BulletBoom) {
        //鱼死亡
        Coinmanager.Instance.FishDead(bulletboom);
        FishDieSpineManager.Instance.FishDead(bulletboom);
    }
    public InitAsycFish(asycFish: AsycFishInfo) {
        FishManager.Instance.AsycFishInfo(asycFish);
    }
    public AppearFish(fishinfo: AppearFishInfo) {
        FishManager.Instance.AppearFishInfo(fishinfo)
    }
    public SpecialDeadBack(res: SpecialDead) {
        FishDieSpineManager.Instance.SpecialFishDead(res);
        Coinmanager.Instance.SpecialFishDead(res);
        TurretManager.Instance.SpecialFishDead(res);
    }
    public ReqShoot(req: any) {
        TurretManager.Instance.ReqShoot(req);
        BulletManager.Instance.CreatMbullet(req);
        LockFishManager.Instance.SelfShoot(req);
    }
    public FishBossTip(msg: FishBossTip) {
        FishManager.Instance.FishBossTip(msg);
        FishDieSpineManager.Instance.FishBossTip(msg);
    }
    public AddPtType() {
        TurretManager.Instance.AddMPtType();
    }
    public SubPtType() {
        TurretManager.Instance.SubMPtType();
    }
    public PTUpDownBack(msgBody: PTUpDownBack) {
        let seat = msgBody.seatid;
        let type = msgBody.PtType;
        TurretManager.Instance.ChangePtType(seat, type)
    }
}
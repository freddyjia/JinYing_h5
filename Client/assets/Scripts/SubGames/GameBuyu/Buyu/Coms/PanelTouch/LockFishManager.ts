import { SheetBuleetBack } from "../../../../../Protos/BuYu";
import BYTouchData from "../../../BuyuStaticData/BYTouchData";
import DatasFuncBY from "../../../DatasFuncBY";
import LockItem from "./LockItem";

export default class LockFishManager {
    private static _instance: LockFishManager;
    private Panel: cc.Node;
    private UILock: LockItem[];
    public static get Instance() {
        if (this._instance == null) {
            this._instance = new LockFishManager();
        }
        return this._instance;
    }
    public Init() {
        this.Panel = cc.find("Canvas/FishNode/FishScene/Panel/LockPanel");
        this.UILock = [];
        for (let i = 1; i < 5; i++) {
            let lockUI = cc.find(i.toString(), this.Panel);
            let lockItem = new LockItem();
            lockItem.Init(lockUI);
            lockItem.uiPos = i;
            this.UILock.push(lockItem);
        }
    }
    public OtherShoot(msg: SheetBuleetBack) {
        let lockfish = msg.LockFishID.toString();
        let UIpos = DatasFuncBY.intance().fGetUIPos(msg.seatid) - 1;
        if (lockfish != "" && lockfish != "-1") {
            this.UILock[UIpos].lockFish = lockfish;
            this.UILock[UIpos].isUsing = true;
            this.UILock[UIpos].count = 0;
        } else {
            this.UILock[UIpos].ClearLock();
        }
    }
    public UpdataFunc(dt) {
        for (let i = 0; i < this.UILock.length; i++) {
            this.UILock[i].Update(dt);
        }
    }
    public SelfShoot(req: any) {
        let byTouchData: BYTouchData = req.data;
        let lockfish = byTouchData.fishKey;
        let UIpos = DatasFuncBY.intance().fGetMUIPos() - 1;
        cc.log("lock----------", lockfish, UIpos)
        if (lockfish != "") {
            this.UILock[UIpos].lockFish = lockfish;
            this.UILock[UIpos].isUsing = true;
            this.UILock[UIpos].count = 0;
        } else {
            this.UILock[UIpos].ClearLock();
        }

    }
    public ClearSelfLockLine() {
        let UIpos = DatasFuncBY.intance().fGetMUIPos() - 1;
        this.UILock[UIpos].ClearLock();
    }
    public HasFishDead(fish: string) {
        for (let i = 0; i < this.UILock.length; i++) {
            if (this.UILock[i].lockFish == fish) {
                this.UILock[i].ClearLock();
            }
        }
    }
}
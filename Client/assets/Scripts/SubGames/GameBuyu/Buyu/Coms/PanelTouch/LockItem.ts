import DatasFuncBY from "../../../DatasFuncBY";
import FishManager from "../FishCom/FishManager";
import FishTools from "../../../Tools/FishTools";

export default class LockItem {
    isUsing: boolean = false;
    lockFish: string;
    node: cc.Node;
    uiPos: number;
    private transLine: cc.Node
    private LookIcon: cc.Node;
    public count = 0;
    public Init(node: cc.Node) {
        this.node = node;
        this.transLine = cc.find("LockLine", this.node);
        this.LookIcon = cc.find("Lockicon", this.node)
    }
    public Update(dt) {
        if (this.count > 1) {
            this.ClearLock();
            return;
        }
        if (this.isUsing && this.lockFish) {
            this.count = this.count + dt;
            this.UpdateLockline(this.lockFish)
        }
    }
    private UpdateLockline(lockFish) {
        if (!FishTools.ExitFishKey(lockFish)) {
            this.ClearLock()
            return
        }
        let fish = FishManager.Instance.FindFishIsUsing(lockFish);
        if (!fish) {
            this.ClearLock();
            return;
        }
        let len = 0;
        let fishPos1 = FishManager.Instance.GetFishPosAR(lockFish);
        if (fishPos1) {
            let fishPos = new cc.Vec2(fishPos1.x, fishPos1.y);
            let IContoNode = this.node.convertToNodeSpaceAR(fishPos);
            this.LookIcon.setPosition(IContoNode);
            this.LookIcon.active = true;
            let curPosAR1 = this.node.convertToWorldSpaceAR(this.transLine.position);
            let curPosAR = new cc.Vec2(curPosAR1.x, curPosAR1.y);
            len = FishTools.Vec2Dis(fishPos, curPosAR)
            let unitDir = FishTools.Vec2DirUnit(fishPos, curPosAR)
            let rot = 0
            if (this.uiPos <= 2) {
                rot = 90 - Math.atan2(unitDir.y, unitDir.x) * (180 / Math.PI)
            } else if (this.uiPos == 3) {
                rot = Math.atan2(unitDir.y, unitDir.x) * (180 / Math.PI) + 90
            } else if (this.uiPos == 4) {
                rot = Math.atan2(unitDir.y, unitDir.x) * (180 / Math.PI) + 270
            }
            this.transLine.angle = - rot
        } else {
            this.ClearLock()
        }
        this.transLine.height = len;
    }
    public ClearLock() {
        this.lockFish = "";
        this.transLine.height = 0;
        this.isUsing = false;
        this.LookIcon.active = false;
        this.count = 0;
    }
}
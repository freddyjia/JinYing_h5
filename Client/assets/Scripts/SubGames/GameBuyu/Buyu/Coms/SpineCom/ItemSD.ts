import Util from "../../../../../Tools/Util";
import BuYuConfig from "../../../Configs/BuYuConfig";
import FishTools from "../../../Tools/FishTools";

export default class ItemSD {
    public trans: cc.Node;
    private TotalTime: number = 2;
    private time: number = 0;
    private createPos2: cc.Vec2;
    private createPos1: cc.Vec2;
    doneAction: (zp: ItemSD) => void;

    public Creat(pos1, pos2, node) {
        this.trans = node;

        this.createPos1 = pos1;
        this.createPos2 = pos2;
        this.initUI()
        this.time = 0;
    }
    private initUI() {
        let temp = new cc.Vec2(this.createPos2.x - this.createPos1.x, this.createPos2.y - this.createPos1.y)
        let angle = Math.atan2(temp.y, temp.x) * (180 / Math.PI);
        this.trans.angle = angle;

        this.trans.setPosition(new cc.Vec2((this.createPos1.x + this.createPos2.x) / 2, (this.createPos1.y + this.createPos2.y) / 2));
        this.trans.scaleX = FishTools.Vec2Len(temp) / 400
        let spine = this.trans.getComponent(sp.Skeleton);
        Util.PlaySpineEffect(spine, null, "1", true, false)
    }
    public Updata(dt) {

        this.time = this.time + BuYuConfig.FrameTime;
        if (this.time > this.TotalTime) {
            cc.log("闪电Sd", this.trans.active)
            this.doneAction(this);
        }
    }
}
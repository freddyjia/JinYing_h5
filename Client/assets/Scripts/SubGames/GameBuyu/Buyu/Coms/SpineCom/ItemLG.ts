import Util from "../../../../../Tools/Util";
import BuYuConfig from "../../../Configs/BuYuConfig";

export default class ItemLG {
    public node: cc.Node;
    private TotalTime: number = 2;
    private time = 0;
    public doneAction: (item) => void;
    public Creat(node: cc.Node, pos: cc.Vec3) {
        this.node = node;
        this.node.active = true;
        this.node.setPosition(pos);
        this.time = 0;
        let spine = this.node.getComponent(sp.Skeleton)
        Util.PlaySpineEffect(spine, null, "1", true, false)
    }
    public Updata(dt) {
        this.time += BuYuConfig.FrameTime;
        if (this.time > this.TotalTime) {
            cc.log("播放完成")
            this.doneAction(this);
        }
    }
}
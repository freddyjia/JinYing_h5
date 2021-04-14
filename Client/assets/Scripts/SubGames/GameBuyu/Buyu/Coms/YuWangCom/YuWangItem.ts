import Global from "../../../../../Global/Global";
import NodeUtil from "../../../../../Tools/NodeUtil";
import { XTweenCurv, XTweenCurvType } from "../../../../../Tools/XTween/Base/XTweenCurv";
import BuYuConfig from "../../../Configs/BuYuConfig";
import FishConfig from "../../../Configs/FishConfig";

export default class YuWangItem {

    /*固定值*/
    private aliveTime = 1;
    private startScale = 0.5;
    private tarScale = 1;
    private scaleSpeed = 2;

    public node: cc.Node;
    private Point: cc.Node;
    private creatPos: cc.Vec2;
    public isUsing: boolean = false;
    private curScale = 0;
    private scaleTime = 0;
    private scaleProgress = 0;
    private time = 0;
    public YuwangDone: (yw: YuWangItem) => void;
    public Creat(node: cc.Node, creatPos: cc.Vec2, isme: boolean) {
        this.node = node;
        this.creatPos = creatPos;
        this.isUsing = true;
        this.time = 0;
        this.curScale = 0;
        this.scaleProgress = 0;
        this.scaleTime = 0;
        this.node.active = true;

        let newPos = new cc.Vec2(this.creatPos.x + Math.random() * FishConfig.yuwangMaxRange, this.creatPos.y + Math.random() * FishConfig.yuwangMaxRange)
        this.node.setPosition(newPos);
        let bg: cc.Sprite = node.getChildByName("Point").getChildByName("Bg").getComponent(cc.Sprite);

        if (isme) {
            NodeUtil.SetSpriteFrame(bg, BuYuConfig.Atlas.Yuwang1)
        } else {
            NodeUtil.SetSpriteFrame(bg, BuYuConfig.Atlas.Yuwang2)
        }
    }
    public Update(dt) {
        if (Global.isHide) return;
        if (!this.isUsing) return;
        this.time += FishConfig.FixedTime;
        if (this.time > this.aliveTime) {
            this.Recycle();
            this.YuwangDone(this);
        }
        if (this.isUsing) {
            this.DoScale();
        }
    }
    private Recycle() {
        if (this.isUsing) {
            this.isUsing = false
            this.node.active = false
        }
    }

    private DoScale() {
        if (this.scaleProgress < 1) {
            this.scaleTime += FishConfig.FixedTime * this.scaleSpeed;
            this.scaleProgress = XTweenCurv.GetProgress(XTweenCurvType.OutBounce, this.scaleTime);
            let len = (this.tarScale - this.startScale) * this.scaleProgress;
            this.curScale = this.startScale + len;
            this.node.scale = this.curScale;
        }
    }
} 
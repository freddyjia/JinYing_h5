import FishConfig from "../../../Configs/FishConfig";

export default class ActionRed {
    private node: cc.Node;
    private colorR = 1 * 255
    private colorG = 1 * 255
    private colorB = 1 * 255
    private minColorG = 0.2 * 255
    private minColorB = 0.2 * 255
    private curColorG = 0
    private curColorB = 0
    private colorTmp: cc.Color = new cc.Color()
    private redTime: number = 0;
    public Init(node: cc.Node) {
        this.node = node;
        this.redTime = 0;
        this.colorTmp.setR(255)
        this.colorTmp.setG(255)
        this.colorTmp.setB(255)
        this.colorTmp.setA(255)
        this.node.color = this.colorTmp;
    }
    updateColor(dt) {
        if (this.redTime <= 0)
            return;
        this.redTime -= FishConfig.FixedTime / 0.2;
        this.curColorG = (this.colorG - this.minColorG) * (1 - this.redTime) + this.minColorG
        this.curColorB = (this.colorB - this.minColorB) * (1 - this.redTime) + this.minColorB
        this.colorTmp.setR(this.node.color.getR())
        this.colorTmp.setG(this.curColorG)
        this.colorTmp.setB(this.curColorB)
        this.colorTmp.setA(this.node.color.getA())
        this.node.color = this.colorTmp
    }
    public ShowRed() {
        this.redTime = 1;
        this.curColorG = this.colorG;
        this.curColorB = this.colorB;
    }

}

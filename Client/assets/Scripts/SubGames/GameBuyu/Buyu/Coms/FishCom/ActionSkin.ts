import Extension from "../../../../../Tools/Extension";
import BuYuConfig from "../../../Configs/BuYuConfig";

export default class ActionSkin {
    private node: cc.Node;
    private nodeYY: cc.Node;
    private curSpriteTime: number = 0;
    private switchSpriteTime: number = 0.1; //切换动画的时长
    private curSpriteIdx = 0;
    private skinindex: number | string = 0;
    public Init(node: cc.Node, nodeYY: cc.Node, skinindex: string | number) {
        this.node = node;
        this.nodeYY = nodeYY;
        this.skinindex = skinindex;
    }
    public Update(dt) {
        this.curSpriteTime += 0.02;
        //切换皮肤
        if (this.curSpriteTime > this.switchSpriteTime) {
            this.curSpriteIdx++
            if (this.curSpriteIdx >= 8) {
                this.curSpriteIdx = 0
            }
            let spriteName = 10000 + this.curSpriteIdx + "";
            let skinPath = BuYuConfig.FishSpritePath + this.skinindex;
            Extension.DirGetAbSprite(this.node.getComponent(cc.Sprite), skinPath, spriteName, () => {
                this.nodeYY.getComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame
            })
            Extension.DirGetAbSprite(this.node.getComponent(cc.Sprite), skinPath, spriteName, () => {
                this.nodeYY.getComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame
            })
            this.curSpriteTime = 0;
        }

    }
}
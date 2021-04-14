import Extension from "../../../../../Tools/Extension";
import BuYuConfig from "../../../Configs/BuYuConfig";
import { ZPPara } from "../../../Tools/FishTools";

export default class ItemZP {

    private transGoldParent: cc.Node;
    rootNode: cc.Node;
    private tranSp: cc.Node;
    private sp1: sp.Skeleton;
    private imgTitle: cc.Sprite;
    private goldNum: number;
    private zhyFishIndex: any;
    private fishindex: number;
    private spaceingX = 35;
    private time: number = 0;
    private zpPara: ZPPara;
    private goldShowState: boolean = false;
    private curAngle: number = 0;
    private lerpAngleSpeed: number = 60;
    private lerpDir: number = 1;

    private maxAngle = 10;
    private minAngle = -10;
    ArrIndex: number = 0;
    UIindex: number = 0;

    doneAction: (zp: ItemZP) => void;
    public Creat(node: cc.Node, fishindex: number, zhyindex, zpPara: ZPPara, gold: number, ArrIndex: number, UIindex: number) {
        this.rootNode = node;
        this.goldNum = gold / 100;
        this.zhyFishIndex = zhyindex;
        this.spaceingX = 35;
        this.time = 0;
        this.zpPara = zpPara;
        this.goldShowState = false;
        this.curAngle = 0;
        this.fishindex = fishindex;
        this.ArrIndex = ArrIndex;
        this.UIindex = UIindex;
        this.tranSp = Extension.SearchNode(this.rootNode, "ZP_Ske")
        this.sp1 = this.tranSp.children[0].getComponent(sp.Skeleton)
        this.transGoldParent = Extension.SearchNode(this.rootNode, "ZP_Gold")
        this.imgTitle = Extension.SearchSprite(this.rootNode, "ZP_Title")
        this.setGold();


        let name = BuYuConfig.GetName(this.fishindex)
        // if (this.zhyFishIndex != -1) {
        //     name = BuYuConfig.GetName(this.zhyFishIndex)
        // }

        Extension.DirGetAbSprite(this.imgTitle, BuYuConfig.Atlas.BuYu, name)
        this.goldShowState = false;
        this.transGoldParent.active = (this.goldShowState)
        this.sp1.timeScale = Number(this.zpPara.zpTimeScale)
    }
    private setGold() {
        let strContent = (this.goldNum).toString()
        let oriLen = this.transGoldParent.childrenCount
        let needLen = strContent.length
        for (let i = 1; i <= oriLen; i++) {
            let child = this.transGoldParent.children[i - 1]
            child.setPosition(new cc.Vec2(999999, 0))
        }
        for (let i = oriLen + 1; i <= needLen; i++) {
            let trans = cc.instantiate(this.transGoldParent.children[0])
            trans.parent = (this.transGoldParent)
        }
        let totalLen = (needLen - 1) * this.spaceingX
        for (let i = 1; i <= needLen; i++) {
            let child = (this.transGoldParent).children[i - 1]
            child.setPosition(new cc.Vec2((i - 1) * this.spaceingX - totalLen / 2, 0))
            if (!child.active) {
                child.active = (true)
            }
            let render = child.getComponent(cc.Sprite)
            let pngPath = BuYuConfig.FontAtlas.win
            Extension.DirGetAbSprite(render, pngPath, strContent[i - 1])
        }
    }
    Updata(dt) {
        this.time += BuYuConfig.FrameTime;
        if (this.time > this.zpPara.zpDuring) {
            this.doneAction(this);
            return;
        } else {
            this.doAnim();
        }

    }
    private doAnim() {
        if (this.time > this.zpPara.hideGoldDuring) {
            if (!this.goldShowState) {
                this.goldShowState = true
                this.transGoldParent.active = (this.goldShowState)
            }
            this.LerpAngle()
        }
    }
    private LerpAngle() {
        this.curAngle = this.curAngle + this.lerpAngleSpeed * this.lerpDir * BuYuConfig.FrameTime
        if (this.curAngle >= this.maxAngle) {
            this.curAngle = this.maxAngle
            this.lerpDir = -1
        } else if (this.curAngle <= this.minAngle) {
            this.curAngle = this.minAngle
            this.lerpDir = 1
        }
        this.transGoldParent.angle = this.curAngle
    }
}
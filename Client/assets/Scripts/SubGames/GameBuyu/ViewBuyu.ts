import Global from "../../Global/Global";
import View from "../../MVCFramework/View";
import Extension from "../../Tools/Extension";
import Util from "../../Tools/Util";
import XTween from "../../Tools/XTween/XTween";
import BuYuConfig from "./Configs/BuYuConfig";

export default class ViewBuyu extends View {

    public ChangePTtype: (isadd: boolean) => void;
    private BtnAuto: cc.Button;
    private BtnLock: cc.Button;

    private effAuto: sp.Skeleton;
    private effLock: sp.Skeleton;


    private leftBtns: cc.Node;
    public isShowLeft: boolean = false;
    private startValue: cc.Vec2 = new cc.Vec2(528.2, -187);
    private endValue: cc.Vec2 = new cc.Vec2(903, -187);
    private BtnHide: cc.Node;

    private FishHelp: cc.Node;
    private fishIcon1: cc.Node;
    private fishIcon2: cc.Node;
    private content: cc.Node;

    public OnAwake() {
        this.BtnAuto = this.FindTransform("BtnAuto").getComponent(cc.Button);
        this.BtnLock = this.FindTransform("BtnLockFish").getComponent(cc.Button);
        this.effAuto = Extension.SearchNode(this.BtnAuto.node, "effect").children[0].getComponent(sp.Skeleton);
        this.effLock = Extension.SearchNode(this.BtnLock.node, "effect").children[0].getComponent(sp.Skeleton);
        this.leftBtns = this.FindTransform("LeafBtns");
        this.BtnHide = this.FindTransform("BtnHide");
        this.FishHelp = this.FindTransform("FishHelp");
        this.fishIcon1 = this.FindTransform("FishIcon1");
        this.fishIcon2 = this.FindTransform("FishIcon2");
        this.content = this.FindTransform("fishKinds");
        this.InitFishkind();

    }
    public OnAdapt() {
        this.content.getComponent(cc.Widget).top = Global.adapt;
        this.content.getComponent(cc.Widget).bottom = Global.adapt;
        this.content.getComponent(cc.Widget).left = Global.adapt;
        this.content.getComponent(cc.Widget).right = Global.adapt;
    }
    public Exit() {
        this.effAuto.node.parent.active = false;
        this.effLock.node.parent.active = false;
        this.leftBtns.setPosition(this.endValue)
        this.isShowLeft = false;
        this.BtnHide.scaleX = 1;
    }
    public ShowAutoSheet(isAuto: boolean) {
        this.effAuto.node.parent.active = isAuto
        if (isAuto)
            Util.PlaySpineEffect(this.effAuto, null, "1", true, false)
    }
    public ShowLockFish(isLock: boolean) {
        this.effLock.node.parent.active = isLock;
        if (isLock)
            Util.PlaySpineEffect(this.effLock, null, "1", true, false);
    }
    public ShowOrHideLeft(bool: boolean) {
        this.isShowLeft = bool;
        if (this.isShowLeft) {
            let moveshow = XTween.DoMove(this.leftBtns, this.endValue, this.startValue, 0.2);
            moveshow.Play();
            this.BtnHide.scaleX = -1;
        } else {
            this.BtnHide.scaleX = 1;
            let movehide = XTween.DoMove(this.leftBtns, this.startValue, this.endValue, 0.2);
            movehide.Play();

        }
    }
    public FishKindShow(bool: boolean) {
        this.FishHelp.active = bool;
    }
    private InitFishkind() {
        let config = BuYuConfig.FishsNames;
        for (let i = 0; i < config.length; i++) {
            let item = config[i] as FishIcon;
            if (item.id < 24 || item.id > 30) {
                let title = item.multiple + "倍";
                let spriteName = "10000";
                cc.log("item.id", item.id)
                let skinPath = BuYuConfig.FishSpritePath + item.id.toString();
                let fishicon = cc.instantiate(this.fishIcon1);
                fishicon.parent = this.content;
                fishicon.active = true;
                let img = fishicon.getChildByName("fish").getComponent(cc.Sprite);
                cc.log("i哦哦美国", img)
                Extension.DirGetAbSprite(img, skinPath, spriteName, () => {
                    if (img.node.width > 150) {
                        let scale = 150 / img.node.width;
                        img.node.width = 150;
                        img.node.setScale(scale, scale)
                    }
                })
                fishicon.getChildByName("title").getComponent(cc.Label).string = title;
            }
            if (item.id == 27 || item.id == 28 || item.id == 29 || item.id == 30) {
                let title = item.multiple + "倍";
                let spriteName = "10000";
                if (item.id == 27) {
                    spriteName = "BY_YL_50";
                }
                else if (item.id == 28) {
                    spriteName = "BY_YL_50-1";
                }
                else if (item.id == 29) {
                    spriteName = "BY_YL_60";
                }
                else if (item.id == 30) {
                    spriteName = "BY_YL_80";
                }
                let skinPath = BuYuConfig.FishHelpPath;
                let fishicon = cc.instantiate(this.fishIcon1);
                fishicon.parent = this.content;
                fishicon.active = true;
                let img = fishicon.getChildByName("fish").getComponent(cc.Sprite);

                Extension.DirGetAbSprite(img, skinPath, spriteName, () => {
                    if (img.node.width > 150) {
                        let scale = 150 / img.node.width;
                        img.node.width = 150;
                        img.node.setScale(scale, scale)
                    }
                })
                fishicon.getChildByName("title").getComponent(cc.Label).string = title;
            }

        }
        this.CreatYiwang()
        this.CreatQuanPingZhaDan();
        this.CreatLeiLong();
        this.CreatBoss()

    }
    private CreatYiwang() {
        let skinPath = BuYuConfig.FishHelpPath;
        let title = "一网打尽"
        let tile1 = "带有这个标志的鱼死亡时,所有带有此标志的鱼死亡";
        let spriteName = "ywdj";
        let fishicon = cc.instantiate(this.fishIcon2);
        fishicon.getChildByName("title1").getComponent(cc.Label).string = tile1;
        fishicon.getChildByName("title").getComponent(cc.Label).string = title;
        fishicon.parent = this.content;
        fishicon.active = true;
        let img = fishicon.getChildByName("fish").getComponent(cc.Sprite);
        Extension.DirGetAbSprite(img, skinPath, spriteName, () => {
            if (img.node.width > 150) {
                let scale = 150 / img.node.width;
                img.node.width = 150;
                img.node.setScale(scale, scale)
            }
        })
    }
    private CreatQuanPingZhaDan() {
        let config = BuYuConfig.FishsNames;
        let item = config[24] as FishIcon;
        let skinPath = BuYuConfig.FishSpritePath + item.id.toString();
        let title = item.text;
        let tile1 = "全屏炸弹：打爆全屏炸弹后，除boss外其他鱼全部被捕获";
        let spriteName = "10000";
        let fishicon = cc.instantiate(this.fishIcon2);
        fishicon.getChildByName("title1").getComponent(cc.Label).string = tile1;
        fishicon.getChildByName("title").getComponent(cc.Label).string = title;
        fishicon.parent = this.content;
        fishicon.active = true;
        let img = fishicon.getChildByName("fish").getComponent(cc.Sprite);
        Extension.DirGetAbSprite(img, skinPath, spriteName, () => {
            if (img.node.width > 150) {
                let scale = 150 / img.node.width;
                img.node.width = 150;
                img.node.setScale(scale, scale)
            }
        })
    }
    private CreatLeiLong() {
        let config = BuYuConfig.FishsNames;
        let item = config[25] as FishIcon;
        let skinPath = BuYuConfig.FishSpritePath + item.id.toString();
        let title = item.text;
        let tile1 = "雷银龙： 打爆雷银龙后，会捕获在他周围弱小的鱼";
        let spriteName = "10000";
        let fishicon = cc.instantiate(this.fishIcon2);
        fishicon.getChildByName("title1").getComponent(cc.Label).string = tile1;
        fishicon.getChildByName("title").getComponent(cc.Label).string = title;
        fishicon.parent = this.content;
        fishicon.active = true;
        let img = fishicon.getChildByName("fish").getComponent(cc.Sprite);
        Extension.DirGetAbSprite(img, skinPath, spriteName, () => {
            if (img.node.width > 150) {
                let scale = 150 / img.node.width;
                img.node.width = 150;
                img.node.setScale(scale, scale)
            }
        })


    }
    private CreatBoss() {
        let config = BuYuConfig.FishsNames;
        let item = config[26] as FishIcon;
        let skinPath = BuYuConfig.FishSpritePath + item.id.toString();
        let title = item.text;
        let tile1 = "雷银龙： 打爆雷银龙后，会捕获在他周围弱小的鱼";
        let spriteName = "10000";
        let fishicon = cc.instantiate(this.fishIcon2);
        fishicon.getChildByName("title1").getComponent(cc.Label).string = tile1;
        fishicon.getChildByName("title").getComponent(cc.Label).string = title;
        fishicon.parent = this.content;
        fishicon.active = true;
        let img = fishicon.getChildByName("fish").getComponent(cc.Sprite);
        Extension.DirGetAbSprite(img, skinPath, spriteName, () => {
            if (img.node.width > 150) {
                let scale = 150 / img.node.width;
                img.node.width = 150;
                img.node.setScale(scale, scale)
            }
        })

    }



}
export interface FishIcon {
    id: number,
    name: string,
    offerXY: number[],
    multiple: number,
    yyOffset: {},
    isShock: number,
    text: string
}
import SpriteUtil from "../Tools/SpriteUtil";
import { CardColor, CardSize } from "../Protos/LongHuDou";
import ccC from "../Tools/ccC";
import Global from "../Global/Global";
import Res from "../Global/Res";

//import SpriteUtil from "../Tools/SpriteUtil";

const { ccclass, property } = cc._decorator;


@ccclass
export default class Poker {
    //牌值
    private value: CardSize;
    //牌色
    private color: CardColor;
    //牌背部节点
    private cardBack: cc.Node;
    private cardJoker: cc.Node;
    private cardNormal: cc.Node;
    private cardFlower: cc.Node;
    public cardNode: cc.Node;
    //鬼牌
    private cardJokerIcon: cc.Sprite;
    private cardJokerText: cc.Sprite;

    //花牌
    private cardNumF: cc.Sprite;
    private cardColorF: cc.Sprite;
    private cardBigColorF: cc.Sprite;


    //非花牌
    private cardNum: cc.Sprite;
    private cardColor: cc.Sprite;
    private cardBigColor: cc.Sprite;

    private cardOriginalPos: cc.Vec2;
    private cardAction: cc.Action;

    //牌真实权重大小
    public cardWeight: number;

    //
    public Init(_node: cc.Node, _color: CardColor = CardColor.Block, _cardVal: CardSize = CardSize.C10, showBack: boolean = true) {
        this.value = _cardVal;
        this.cardWeight = this.value;
        this.color = _color;
        this.cardNode = _node;
        this.cardBack = _node.getChildByName("cardBack");

        this.cardFlower = _node.getChildByName("flower");
        this.cardOriginalPos = _node.position;

        this.cardJoker = _node.getChildByName("joker");
        this.cardNormal = _node.getChildByName("normal");

        this.cardJokerIcon = this.cardJoker.getChildByName("cardJokerIcon").getComponent(cc.Sprite);;
        this.cardJokerText = this.cardJoker.getChildByName("cardJoker").getComponent(cc.Sprite);

        this.cardNumF = this.cardFlower.getChildByName("cardNum").getComponent(cc.Sprite);
        this.cardColorF = this.cardFlower.getChildByName("cardColor").getComponent(cc.Sprite);
        this.cardBigColorF = this.cardFlower.getChildByName("cardBigColor").getComponent(cc.Sprite);

        this.cardNum = this.cardNormal.getChildByName("cardNum").getComponent(cc.Sprite);
        this.cardColor = this.cardNormal.getChildByName("cardColor").getComponent(cc.Sprite);
        this.cardBigColor = this.cardNormal.getChildByName("cardBigColor").getComponent(cc.Sprite);
        this.cardAction = null;
        this.DrawCard(_color, _cardVal);
    }

    public HideBack() {
        this.cardBack.active = false;
    }

    public GetOriginalPos() {
        return this.cardOriginalPos;
    }


    //重置扑克
    public ResetPoker(showPork: boolean = false) {
        this.cardNode.stopAction(this.cardAction);
        this.cardNode.scale = 0.45;
        this.cardNode.rotation = 0;
        this.cardNode.position = this.cardOriginalPos;
        this.cardNode.active = showPork;
        this.cardBack.active = true;
    }
    public SetCardScale(val) {
        this.cardNode.scale = val;
    }

    //
    public DrawCard(_color: CardColor, _cardVal: CardSize) {
        this.cardFlower.active = false;
        this.cardJoker.active = false;
        this.cardNormal.active = false;

        this.cardWeight = _cardVal;
        let altasPath: string = Res.Atlas.Pokers;

        if (_cardVal <= 10 || _cardVal == 14 || _cardVal == 15) {
            this.cardNormal.active = true;
            SpriteUtil.LoadSpriteByAtlas(this.cardNum, altasPath, _color % 2 == 1 ? "Poker_B_" + _cardVal : "Poker_R_" + _cardVal);
            SpriteUtil.LoadSpriteByAtlas(this.cardColor, altasPath, "Poker_Color_" + _color);
            SpriteUtil.LoadSpriteByAtlas(this.cardBigColor, altasPath, "Poker_Color_" + _color);
        }
        else if (_cardVal > 10 && _cardVal < 14) {
            this.cardFlower.active = true;
            SpriteUtil.LoadSpriteByAtlas(this.cardNumF, altasPath, _color % 2 == 1 ? "Poker_B_" + _cardVal : "Poker_R_" + _cardVal);
            SpriteUtil.LoadSpriteByAtlas(this.cardColorF, altasPath, "Poker_Color_" + _color);
            SpriteUtil.LoadSpriteByAtlas(this.cardBigColorF, altasPath, "Poker_RB_" + _color + "_" + _cardVal);
        }
        else {
            this.cardJoker.active = true;
            if (_cardVal == CardSize.CBIG) {
                SpriteUtil.LoadSpriteByAtlas(this.cardJokerIcon, altasPath, "Poker_JokerR_17");
                SpriteUtil.LoadSpriteByAtlas(this.cardJokerText, altasPath, "Poker_JokerL_17");
            }
            else {
                SpriteUtil.LoadSpriteByAtlas(this.cardJokerIcon, altasPath, "Poker_JokerR_16");
                SpriteUtil.LoadSpriteByAtlas(this.cardJokerText, altasPath, "Poker_JokerL_16");
            }
        }
        this.cardBack.active = true;
    }

    public FlyTo(duration: number, targetPos: cc.Vec2, callback: (data: any) => void, delay: number) {
        this.cardNode.active = true;
        this.Move(duration, targetPos, callback, delay);
    }

    //
    public Move(duration: number, targetPos: cc.Vec2, callback: (data: any) => void, delay: number) {
        this.cardAction = cc.sequence(cc.delayTime(delay), cc.moveTo(duration, targetPos).easing(cc.easeIn(duration)), finished);
        var finished = cc.callFunc(function (target: cc.Node) {
            if (callback != null) {
                if (Global.showLog == true)
                    cc.log("移动完牌回调事件############");
                callback(this.cardNode);
            }
        }, this.cardNode);//动作完成后会给玩家加100分//

        this.cardNode.runAction(this.cardAction);
    }
}
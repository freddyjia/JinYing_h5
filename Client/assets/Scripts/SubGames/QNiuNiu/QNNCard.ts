import Extension from "../../Tools/Extension";
import QNNConfig from "./QNNConfig";
import XTween from "../../Tools/XTween/XTween";
import QNNCardConfigHelp from "./QNNCardConfigHelp";
import Util from "../../Tools/Util";
import QNNDatasFunc from "./QNNDatasFunc";
import MessageCenter from "../../MVCFramework/MessageCenter";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import QNNClickCardData from "./QNNClickCardData";
import Vec2 = cc.Vec2;

export default class QNNCard {


    private datasFunc: QNNDatasFunc

    private key: string
    private trans: cc.Node
    private transBack: cc.Node
    private imgNumCmp: cc.Sprite
    private imgSelectMark: cc.Sprite
    private transNormalPoker: cc.Node
    private tranJokerPoker: cc.Node
    private imgNormalNum: cc.Sprite
    private imgNormalColor: cc.Sprite
    private imgNormalBigColor: cc.Sprite
    private imgNormalJQK: cc.Sprite
    private imgJoker: cc.Sprite
    private imgJokerBig: cc.Sprite
    private btnCard: cc.Button
    private indexInArr: number

    private canClick: boolean


    public GetKey() {
        return this.key
    }

    public BtnCard(outside: QNNCard) {

        if (!this.canClick) {
            return
        }

        //outside.imgSelectMark.node.active = (true)

        let clickDatas = new QNNClickCardData()
        clickDatas.cardKey = outside.key
        clickDatas.indexForm0 = outside.indexInArr
        outside.datasFunc.fClickCard(clickDatas)

        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNClickCard)


    }


    public FlushImgNum(key) {
        QNNCardConfigHelp.GetCardNumSprite(this.imgNumCmp, key)
    }

    public FlushImgColor(key) {

        if (QNNCardConfigHelp.IsJoker(key)) {
            this.transNormalPoker.active = (false)
            this.tranJokerPoker.active = (true)

            QNNCardConfigHelp.GetCardTypeSprite(this.imgJoker, key)
            QNNCardConfigHelp.GetCardColorSprite(this.imgNormalBigColor, key)
        } else if (QNNCardConfigHelp.IsJQK(key)) {
            this.transNormalPoker.active = (true)
            this.tranJokerPoker.active = (false)

            this.imgNormalBigColor.node.active = (false)
            this.imgNormalJQK.node.active = (true)

            QNNCardConfigHelp.GetCardTypeSprite(this.imgNormalColor, key)
            QNNCardConfigHelp.GetCardColorSprite(this.imgNormalJQK, key)
        } else {
            this.transNormalPoker.active = (true)
            this.tranJokerPoker.active = (false)

            this.imgNormalBigColor.node.active = (true)
            this.imgNormalJQK.node.active = (false)

            QNNCardConfigHelp.GetCardTypeSprite(this.imgNormalColor, key)
            QNNCardConfigHelp.GetCardColorSprite(this.imgNormalBigColor, key)


        }


    }

    private _ResetCard(key) {
        if (key == null) {
            key = "14_4"
        }
        this.key = key
        this.FlushImgNum(key)
        this.FlushImgColor(key)
    }


    public ShowFront() {
        this.transBack.active = (false)
    }

    public ShowBack() {
        this.transBack.active = (true)
    }

    public SetSelectStatus(select) {
        this.imgSelectMark.node.active = (select)
    }

    public Construction(trans: cc.Node, datasFunc: QNNDatasFunc, id: number, key: string = "14_4", indexInArr: number = -1) {
        this.datasFunc = datasFunc

        this.indexInArr = indexInArr

        this.key = key

        this.trans = trans
        this.transBack = Extension.SearchNode(trans, "Back")
        this.imgNumCmp = Extension.SearchSprite(trans, "ImgNum")
        this.imgSelectMark = Extension.SearchSprite(trans, "ImgSelectMark")


        this.transNormalPoker = Extension.SearchNode(trans, "NormalPoker")
        this.tranJokerPoker = Extension.SearchNode(trans, "JokerPoker")
        this.imgNormalNum = Extension.SearchSprite(this.transNormalPoker, "ImgNum").getComponent(cc.Sprite)
        this.imgNormalColor = Extension.SearchSprite(this.transNormalPoker, "ImgColor").getComponent(cc.Sprite)
        this.imgNormalBigColor = Extension.SearchSprite(this.transNormalPoker, "ImgBigColor").getComponent(cc.Sprite)
        this.imgNormalJQK = Extension.SearchSprite(this.transNormalPoker, "ImgJQK").getComponent(cc.Sprite)

        this.imgJoker = Extension.SearchSprite(this.tranJokerPoker, "ImgJoker").getComponent(cc.Sprite)
        this.imgJokerBig = Extension.SearchSprite(this.tranJokerPoker, "ImgBigJoker").getComponent(cc.Sprite)


        this.btnCard = Extension.SearchBtn(trans, "BtnCard")
        Util.SetClickAction(this.btnCard, () => {
            this.BtnCard(this)
        })

        this._ResetCard(key)


        this.ShowBack()

        this.SetSelectStatus(false)

        return this

    }

    public ResetCard(key) {
        if (key == null) {
            key = "14_4"
        }
        this._ResetCard(key)
    }

    public StandCard(toPosY: number) {
        let oriPos = this.trans.position
        let offsetPosY = QNNConfig.niuCardStandPosY
        let toPos = new Vec2(oriPos.x, toPosY)
        XTween.DoMove(this.trans, null, toPos, 0.1).Play()
    }

    public GetTrans() {
        return this.trans
    }

    public ResetPos(pos: cc.Vec2) {
        this.trans.position = pos
    }

    public SetActiveState(active) {
        this.trans.active = active
    }

    public SetCanClick(canClick) {
        this.canClick = canClick
    }

}

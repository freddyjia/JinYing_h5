import QNNDatasFunc from "./QNNDatasFunc";
import Extension from "../../Tools/Extension";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import {GameStatus, PushAction, PushRoomInitData, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import Bezier from "../../Tools/Bezier";
import XTween from "../../Tools/XTween/XTween";
import QNNCard from "./QNNCard";
import MessageCenter from "../../MVCFramework/MessageCenter";
import {XTweenCurvType} from "../../Tools/XTween/Base/XTweenCurv";
import Vec2 = cc.Vec2;
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";
import { timeStamp } from "console";

let g_gameScale:number = 0.7;

export default class QNNCardPanelSubView implements IQNNMsg {

    private static normalPlayerCardScale = 0.6 * g_gameScale;
    private static localPlayerCardScale = 0.82*g_gameScale

    private static BezierCenterPosConfig = new Array<cc.Vec2>(
        new Vec2(50, 200),
        new Vec2(200, 300),
        new Vec2(100, 500),
        new Vec2(100, 500),
        new Vec2(200, 300),
    )


    private hasFanpaiPosArr = new Array<number>()

    private static cardWith = 139 * 0.6 * g_gameScale
    private datasFunc: QNNDatasFunc;
    private trans: cc.Node;
    private posForm0CardArr = new Array<Array<QNNCard>>()   //0~4
    private localPlayerFanpaiCardArr = new Array<QNNCard>()
    private transPlayerArr: Array<cc.Node> = new Array<cc.Node>()
    private fapaiTimerIdArr = new Array<string>()


    private GetCardFinalPosX(tarNode: cc.Node, cardIndexInArr: number, pos: number): number {
        let spaceX = -50*g_gameScale

        // let inputContent = this.inputTestEditBox.string
        // if (inputContent == "") {
        //     spaceX = 5
        // } else {
        //     spaceX = Number(inputContent)
        // }


        if (pos == 1) {
            spaceX = 38.5*g_gameScale
        }
        return tarNode.position.x + (cardIndexInArr - 2) * (QNNCardPanelSubView.cardWith + spaceX);
    }

    private FapaiNoAnim() {
        let isViewer = this.datasFunc.fGIsByStander()
        if (isViewer) {
            return
        }
        for (let pos = 1; pos <= 5; pos++) {     //从1～5号位依次发牌

            if (!this.datasFunc.fIsAbsPosJoinCurGame(pos)) {
                continue
            }

            for (let i = 0; i < 5; i++) {
                let card = this.posForm0CardArr[pos - 1][i]
                card.ShowBack()
                card.SetSelectStatus(false)
                let node = card.GetTrans()
                card.SetActiveState(true)
                let tarNode = this.transPlayerArr[pos - 1]
                let tarPosY = tarNode.position.y;
                let finalPosX = this.GetCardFinalPosX(tarNode, i, pos)
                node.position = new cc.Vec3(finalPosX, tarPosY, 0)

                if (pos == 1) {
                    node.scale = QNNCardPanelSubView.localPlayerCardScale
                }

                card.SetCanClick(false)

            }

        }

    }

    private FapaiAnimPlay() {
        let isViewer = this.datasFunc.fGIsByStander()
        if (isViewer) {
            return
        }
        let delayTime = 0
        for (let pos = 1; pos <= 5; pos++) {     //从1～5号位依次发牌

            if (!this.datasFunc.fIsAbsPosJoinCurGame(pos)) {
                continue
            }
            for (let i = 0; i < 5; i++) {
                let card = this.posForm0CardArr[pos - 1][i]
                card.SetCanClick(false)
            }

            delayTime += 0.45
            let anim = () => {
                let groupDelay = 0
                for (let i = 0; i < 5; i++) {
                    let fGroupDelayMove = () => {
                        let card = this.posForm0CardArr[pos - 1][i]

                        card.ShowBack()
                        card.SetSelectStatus(false)
                        let node = card.GetTrans()
                        card.SetActiveState(true)
                        let b = node.getComponent(Bezier)
                        if (b == null) {
                            b = node.addComponent(Bezier)
                        }
                        let tarNode = this.transPlayerArr[pos - 1]
                        let tarPosX = this.GetCardFinalPosX(tarNode, 0, pos)
                        let tarPosY = tarNode.position.y;
                        let finalPosX = this.GetCardFinalPosX(tarNode, i, pos)
                        let centerPosX = QNNCardPanelSubView.BezierCenterPosConfig[pos - 1].x
                        let centerPosY = QNNCardPanelSubView.BezierCenterPosConfig[pos - 1].y
                        let fBezierOk = (parm: any, tarNode: cc.Node) => {
                            XTween.DoMove(tarNode, null, new Vec2(finalPosX, tarPosY), 0.3).Play()
                        }
                        if (pos == 1) {
                            let startScale = new Vec2(QNNCardPanelSubView.normalPlayerCardScale, QNNCardPanelSubView.normalPlayerCardScale)
                            let endScale = new Vec2(QNNCardPanelSubView.localPlayerCardScale, QNNCardPanelSubView.localPlayerCardScale)
                            XTween.DoScale(node, startScale, endScale, 0.3).Play()
                        }
                        b.SetMoveTrail(0, 0, centerPosX, centerPosY, tarPosX, tarPosY, 2, null, fBezierOk)
                    }
                    groupDelay += 0.06
                    let timerIdGroupDelay = Extension.DelayCall(() => {
                        fGroupDelayMove()
                    }, groupDelay)
                    this.fapaiTimerIdArr.push(timerIdGroupDelay)
                }
            }
            let timerId = Extension.DelayCall(() => {
                anim();
            }, delayTime, null)
            this.fapaiTimerIdArr.push(timerId)

        }

    }

    private AnimShowCard(pos: number) {

        for (let val of this.hasFanpaiPosArr) {
            if (val == pos) {
                return
            }
        }

        this.hasFanpaiPosArr.push(pos)

        let dealInfo = this.datasFunc.fGetDealInfoByPos(pos)
        if (dealInfo == null) {
            if(Global.showLog == true)
                cc.error("没有结算信息， 但是却要显示玩家的牌")
            return
        }
        for (let i = 0; i < 5; i++) {
            let card = this.posForm0CardArr[pos - 1][i]
            card.ResetCard(dealInfo.cards[i].cardSize + "_" + dealInfo.cards[i].cardColor)
        }

        let noStartPosY = this.posForm0CardArr[pos - 1][0].GetTrans().position.y

        let finalPos = new Array<cc.Vec2>()
        let tMoveLeftTime = 0.2
        for (let i = 1; i < 5; i++) {       //第0张不用刷新位置
            let card = this.posForm0CardArr[pos - 1][i]
            let node = card.GetTrans()
            let curPos = node.position
            finalPos.push(curPos)
            XTween.DoMove(card.GetTrans(), null, this.posForm0CardArr[pos - 1][0].GetTrans().position, tMoveLeftTime, 1, false, XTweenCurvType.Liner, null).Play()
        }
        let fDelayShowSp = () => {

            for (let i = 0; i < 5; i++) {
                let card = this.posForm0CardArr[pos - 1][i]
                if (this.datasFunc.fShouldStandCard(pos, card.GetKey())) {
                    card.StandCard(noStartPosY + 35*g_gameScale)
                }
            }

            MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNNeedShowCardRes, {
                pos: pos
            })
        }
        let timerIdShowSp = Extension.DelayCall(() => {
            fDelayShowSp()
        }, tMoveLeftTime + 0.3)
        // this.fapaiTimerIdArr.push(timerIdShowSp)


        let fMoveBack = () => {
            let card0 = this.posForm0CardArr[pos - 1][0]
            card0.ShowFront()
            for (let i = 1; i < 5; i++) {
                let card = this.posForm0CardArr[pos - 1][i]
                XTween.DoMove(card.GetTrans(), null, finalPos[i - 1], tMoveLeftTime).Play()
                card.ShowFront()
            }
        }
        let timerId = Extension.DelayCall(() => {
            fMoveBack()
        }, tMoveLeftTime)
        this.fapaiTimerIdArr.push(timerId)
    }

    private AnimLocalPlayerShowCard() {
        let pos = 1
        let dealInfo = this.datasFunc.fGetDealInfoByPos(pos)
        if (dealInfo == null) {
            if(Global.showLog == true)
                cc.error("没有结算信息， 但是却要显示玩家的牌")
            return
        }
        for (let i = 0; i < 5; i++) {
            let card = this.posForm0CardArr[pos - 1][i]
            card.ResetCard(dealInfo.cards[i].cardSize + "_" + dealInfo.cards[i].cardColor)
        }

        for (let i = 0; i < 5; i++) {
            let localScaleX = QNNCardPanelSubView.localPlayerCardScale
            let oneScaleTime = 0.2
            let card = this.posForm0CardArr[0][i]
            XTween.DoScale(card.GetTrans(), null, new Vec2(0, localScaleX), oneScaleTime).Play()

            let scaleShow = () => {
                card.SetCanClick(true)
                card.ShowFront()
                XTween.DoScale(card.GetTrans(), null, new Vec2(localScaleX, localScaleX), oneScaleTime).Play()
            }
            let timerId1 = Extension.DelayCall(scaleShow, oneScaleTime)
            this.fapaiTimerIdArr.push(timerId1)
        }

    }

    private FlushPlayerCardByPos(pos: number) {
        if (!this.datasFunc.fIsAbsPosJoinCurGame(pos)) {
            return
        }
        let dealInfo = this.datasFunc.fGetDealInfoByPos(pos)
        if (dealInfo == null) {
            return
        }
        if (pos == 1) {
            this.AnimLocalPlayerShowCard()
        } else {
            this.AnimShowCard(pos)
        }
    }

    private FlushPlayerCard() {
        for (let pos = 1; pos <= 5; pos++) {
            this.FlushPlayerCardByPos(pos)
        }
    }

    private Clear() {
        for (let arr of this.posForm0CardArr) {
            for (let card of arr) {
                card.SetActiveState(false)
                let bezier = card.GetTrans().getComponent(Bezier)
                if (bezier != null) {
                    card.GetTrans().removeComponent(bezier)
                }
            }
        }
        for (let card of this.localPlayerFanpaiCardArr) {
            card.SetActiveState(false)
        }
    }

    private FlushPlayerCardByUId(uId) {
        for (let pos = 1; pos <= 5; pos++) {
            if (pos == this.datasFunc.fGetLocalPlayerPos()) {
                continue
            }
            let tmpUId = this.datasFunc.fPos2UId(pos)
            if (uId == tmpUId) {
                this.FlushPlayerCardByPos(pos)
                return
            }
        }
    }

    private ClearHasFapaiPosArr() {
        let len = this.hasFanpaiPosArr.length
        for (let i = 0; i < len; i++) {
            this.hasFanpaiPosArr.shift()
        }
    }

    private AllPlayerFanpai() {
        for (let i = 1; i <= 5; i++) {
            let bNeedFanpai = true
            for (let val of this.hasFanpaiPosArr) {
                if (val == i) {
                    bNeedFanpai = false
                    break
                }
            }
            if (bNeedFanpai) {
                if (i == 1) {
                    this.LocalPlayerTanpaiToNewPos()
                } else {
                    this.FlushPlayerCardByPos(i)
                }

            }
        }
    }

    private LocalPlayerTanpaiToNewPos() {

        let pos = 1
        for (let val of this.hasFanpaiPosArr) {
            if (val == pos) {
                return
            }
        }

        this.hasFanpaiPosArr.push(pos)

        let dealInfo = this.datasFunc.fGetDealInfoByPos(pos)
        if (dealInfo == null) {
            if(Global.showLog == true)
                cc.error("没有结算信息， 但是却要显示玩家的牌")
            return
        }
        for (let val of this.posForm0CardArr[0]) {
            val.SetActiveState(false)
        }
        let originPos = this.posForm0CardArr[0][0].GetTrans().position;
        let noStandPosY = originPos.y//-130.2

        for (let i = 0; i < this.localPlayerFanpaiCardArr.length; i++) {
            let card = this.localPlayerFanpaiCardArr[i]
            card.ResetPos(new Vec2(card.GetTrans().position.x, noStandPosY))
            card.SetActiveState(true)
            let key = dealInfo.cards[i].cardSize + "_" + dealInfo.cards[i].cardColor
            card.ResetCard(key)
            card.ShowFront()
            if (this.datasFunc.fShouldStandCard(1, card.GetKey())) {
                card.StandCard(noStandPosY + 35)
            }
        }

        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNNeedShowCardRes, {
            pos: 1
        })

        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNLocalPlayerHasFanpai)

    }

    private PushRoomInitData(msgbody: PushRoomInitData) {
        this.Exit()
        if (msgbody.status == GameStatus.Start) {
        } else if (msgbody.status == GameStatus.DisPlay) {
        } else if (msgbody.status == GameStatus.GrapBank) {
            this.FapaiNoAnim()
        } else if (msgbody.status == GameStatus.EnsureBank) {
            this.FapaiNoAnim()
        } else if (msgbody.status == GameStatus.Bet) {
            this.FapaiNoAnim()
        } else if (msgbody.status == GameStatus.Deal) {
            this.FapaiNoAnim()
            this.AnimLocalPlayerShowCard()
        } else if (msgbody.status == GameStatus.Settlement) {
            this.FapaiNoAnim()
            this.AllPlayerFanpai()
        } else if (msgbody.status == GameStatus.Stop) {
            this.AllPlayerFanpai()
        }
    }


    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
            this.Clear()
        } else if (msgbody.status == GameStatus.DisPlay) {

        } else if (msgbody.status == GameStatus.GrapBank) {
            this.FapaiAnimPlay()
        } else if (msgbody.status == GameStatus.EnsureBank) {
            this.ClearHasFapaiPosArr()
        } else if (msgbody.status == GameStatus.Bet) {
            this.ClearHasFapaiPosArr()
        } else if (msgbody.status == GameStatus.Deal) {
            this.ClearHasFanpaiArr()
            this.AnimLocalPlayerShowCard()
        } else if (msgbody.status == GameStatus.Settlement) {
            this.AllPlayerFanpai()
        } else if (msgbody.status == GameStatus.Stop) {
            this.ClearHasFanpaiArr()
        }

    }

    private ClickCardHappen() {
        for (let i = 0; i < 5; i++) {
            let card = this.posForm0CardArr[0][i]
            card.SetSelectStatus(this.datasFunc.fIsIndexCardSelect(i))
        }
    }

    private QNNTestClick(msgBody: any) {
        let val1 = msgBody.val1
        let val2 = msgBody.val2


        // this.AllPlayerFanpai()  //动画发牌

        this.FapaiNoAnim()      //无动画直接发牌

    }

    private PushAction(msgbody: PushAction) {
        if (msgbody.status == GameStatus.Start) {
        } else if (msgbody.status == GameStatus.DisPlay) {

        } else if (msgbody.status == GameStatus.GrapBank) {

        } else if (msgbody.status == GameStatus.EnsureBank) {
        } else if (msgbody.status == GameStatus.Bet) {

        } else if (msgbody.status == GameStatus.Deal) {
            this.FlushPlayerCardByUId(msgbody.playerId)
        } else if (msgbody.status == GameStatus.Settlement) {

        } else if (msgbody.status == GameStatus.Stop) {

        }
    }

    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
            this.PushRoomInitData(msgBody as PushRoomInitData)
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerInfo) {
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerLeave) {

        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNActionRes) {
        } else if (msg == MessageNamesQNiuNiu.QNNPushAction) {
            this.PushAction(msgBody as PushAction)
        } else if (msg == MessageNamesQNiuNiu.QNNPlayerEnterSlot) {
        } else if (msg == MessageNamesQNiuNiu.QNNTestClick) {
            this.QNNTestClick(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNFlushPlayerCard) {
            this.FlushPlayerCard()
        } else if (msg == MessageNamesQNiuNiu.QNNClickCard) {
            this.ClickCardHappen()
        } else if (msg == MessageNamesQNiuNiu.QNNClickFanpai) {
            this.LocalPlayerTanpaiToNewPos()
        }
    }


//-@param trans UnityEngine.Transform
    public Construction(trans: cc.Node, datas, datasFunc: QNNDatasFunc) {

        this.datasFunc = datasFunc

        this.trans = trans

        for (let i = 0; i < 5; i++) {
            this.posForm0CardArr[i] = new Array<QNNCard>()
        }

        for (let i = 0; i < 5; i++) {
            for (let k = 0; k < 5; k++) {
                let transCard = Extension.SearchNode(trans, "P" + (i * 5 + k + 1))
                transCard.scale = QNNCardPanelSubView.normalPlayerCardScale
                transCard.active = false
                let card = new QNNCard().Construction(transCard, datasFunc, -1, null, k)
                this.posForm0CardArr[i].push(card)
            }
        }

        for (let i = 1; i <= 5; i++) {
            let transCard = Extension.SearchNode(trans, "F" + i)
            transCard.active = false
            let card = new QNNCard().Construction(transCard, datasFunc, -1, null, i)
            this.localPlayerFanpaiCardArr.push(card)
        }

        for (let i = 0; i < 5; i++) {
            let tmpTrans = Extension.SearchNode(trans, "Player" + (i + 1))
            this.transPlayerArr.push(tmpTrans)
        }


        return this

    }


    private ClearHasFanpaiArr() {
        for (let i = 0; i < this.hasFanpaiPosArr.length; i++) {
            this.hasFanpaiPosArr.shift()
        }
    }

    public Exit() {
        this.ClearHasFanpaiArr()
        this.Clear()
        this.ClearHasFapaiPosArr()
    }


}

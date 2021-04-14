import QNNDatasFunc from "./QNNDatasFunc";
import Extension from "../../Tools/Extension";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import XTween from "../../Tools/XTween/XTween";
import {XTweenCurvType} from "../../Tools/XTween/Base/XTweenCurv";
import {Random} from "../../Tools/Random";
import {DealInfo, GameStatus, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import MessageCenter from "../../MVCFramework/MessageCenter";
import AudioManager from "../../Manager/AudioManager";
import QNNConfig from "./QNNConfig";
import Global from "../../Global/Global";
import Vec2 = cc.Vec2;
import instantiate = cc.instantiate;

export default class QNNFlyGold implements IQNNMsg {


    private datasFunc: QNNDatasFunc
    private trans: cc.Node
    private transPlayerArr: Array<cc.Node> = new Array<cc.Node>()
    private allGoldNodeArr = new Array<cc.Node>()
    private tAllTimerIds = new Array<string>()


    private transFirstGold: cc.Node

    private fRandomX() {
        let x = Math.random() * 45
        return x
    }

    private fRandomY() {
        let y = Math.random() * 45
        return y
    }


    private getGoldIndex = 0

    private getAGold(): cc.Node {
        let node = this.allGoldNodeArr[this.getGoldIndex]
        this.getGoldIndex++
        return node
    }


    private FlyGoldPos2Pos(msgBody, okcallBack: (par1: number, par2: number, parm3: number) => void = null) { //par1:fromPos  par2:toPos     parm3:飞行好的金币

        let fromPos = msgBody.fromPos - 1
        let toPos = msgBody.toPos - 1

        if (fromPos < 0 || toPos < 0) {
            return
        }
        if (fromPos == toPos) {
            return
        }

        let fDelayPlaySound = () => {
            AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.SoundFlyGold)
        }
        let soundTimerId = Extension.DelayCall(() => {
            fDelayPlaySound()
        }, 1.5)
        this.tAllTimerIds.push(soundTimerId)

        this.trans.active = true

        let outside = this

        let createPoint = this.transPlayerArr[fromPos]
        if (createPoint == null) {
            if (Global.showLog == true)
                cc.error("飞金币数据错误！！！ fromPos=", fromPos)
        }
        let tNoFly = new Array<cc.Node>()
        let maxGold = 70
        for (let i = 0; i < maxGold; i++) {
            let x = this.fRandomX();
            let y = this.fRandomY()

            let node = this.getAGold()
            node.position = new cc.Vec3(x + createPoint.position.x, y + createPoint.position.y, 0)
            node.active = false
            tNoFly.push(node)
        }


        let moveCnt = 0
        let moveOkLeftCnt = maxGold
        let fCreateAndMove = () => {
            for (let i = 0; i < 10; i++) {
                let flyTimeBase = Math.random() * 0.45 + 0.3
                let rect = tNoFly.shift()
                rect.active = true

                let fStartMove = () => {

                    moveCnt++
                    if (tNoFly.length >= 10 && moveCnt % 10 == 0) {
                        fCreateAndMove()
                    }

                    let newX = outside.fRandomX()
                    let newY = outside.fRandomY()
                    let tarTransPoint = outside.transPlayerArr[toPos]
                    let tarPosX = tarTransPoint.x
                    let tarPosY = tarTransPoint.y
                    let flyTime = Math.sqrt((tarPosX - rect.x) * (tarPosX - rect.x) + (tarPosY - rect.y) * (tarPosY - rect.y)) / 1450 * 0.04 + flyTimeBase
                    let fCallback = () => {
                        rect.active = false
                        Extension.ClearXTween(rect)
                        moveOkLeftCnt--
                        if (moveOkLeftCnt <= 0) {
                            if (Global.showLog == true)
                                cc.log("moveCnt ok hahaha");
                        }
                        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNFlyGoldArrivalPlayer, {
                            fromPos: msgBody.fromPos,
                            toPos: msgBody.toPos,
                            leftCnt: moveOkLeftCnt
                        })
                        if (okcallBack != null) {
                            okcallBack(msgBody.fromPos, msgBody.toPos, moveOkLeftCnt)
                        }

                    }
                    XTween.DoMove(rect, null, new Vec2(tarPosX + newY, tarPosY + newX), flyTime, 1, false, XTweenCurvType.Liner, fCallback).Play()


                }
                let aGoldStartMoveDe = Random.RangeInt(5, 20) / 100
                let timerId1 = Extension.DelayCall(() => {
                    fStartMove()
                }, aGoldStartMoveDe)
                outside.tAllTimerIds.push(timerId1)
            }

        }

        fCreateAndMove()

    }


    private StopFlyGold() {
        this.getGoldIndex = 0

        let len = this.tAllTimerIds.length
        for (let i = 0; i < len; i++) {
            let timerId = this.tAllTimerIds.shift()
            Extension.CancelDelayCall(timerId)
        }

        for (let val of this.allGoldNodeArr) {
            val.active = false
        }
    }

    private GetDealInfo(pos: number): DealInfo | null {
        let bankerPos = this.datasFunc.fGetBankerPos()
        if (!this.datasFunc.fIsAbsPosJoinCurGame(pos)) {
            return null
        }

        if (pos == bankerPos) {
            return null
        }

        let dealInfo = this.datasFunc.fGetDealInfoByPos(pos)
        if (dealInfo == null) {
            return null
        }
        return dealInfo
    }

    private GetNeedFlyPlayerCnt(isWinner: boolean): number {
        let cnt = 0
        for (let pos = 1; pos <= 5; pos++) {
            let dealInfo = this.GetDealInfo(pos)
            if (dealInfo == null) {
                continue
            }
            if (isWinner) {
                if (dealInfo.playResult > 0) {
                    cnt++
                }
            } else {
                if (dealInfo.playResult <= 0) {
                    cnt++
                }
            }

        }
        return cnt
    }

    private GetWinnerCnt(): number {
        return this.GetNeedFlyPlayerCnt(true)
    }

    private GetFailerCnt(): number {
        return this.GetNeedFlyPlayerCnt(false)
    }

    private FlyWinner(okCallback: () => void = null) {
        let bankerPos = this.datasFunc.fGetBankerPos()
        for (let pos = 1; pos <= 5; pos++) {
            let dealInfo = this.GetDealInfo(pos)
            if (dealInfo == null) {
                continue
            }

            if (dealInfo.playResult > 0) {
                this.FlyGoldPos2Pos({
                    fromPos: bankerPos,
                    toPos: pos,
                    notEnterQueue: true
                }, null)
            }
        }
        let fDelayOk = () => {
            if (okCallback != null) {
                okCallback()
            }
        }
        let timerId = Extension.DelayCall(fDelayOk, 2)
        this.tAllTimerIds.push(timerId)
    }

    private FlyFailer(okCallback: () => void = null) {
        let bankerPos = this.datasFunc.fGetBankerPos()

        for (let pos = 1; pos <= 5; pos++) {
            let dealInfo = this.GetDealInfo(pos)
            if (dealInfo == null) {
                continue
            }

            if (dealInfo.playResult <= 0) {
                this.FlyGoldPos2Pos({
                    fromPos: pos,
                    toPos: bankerPos,
                    notEnterQueue: true
                }, null)
            }
        }


        let fDelayOk = () => {
            if (okCallback != null) {
                okCallback()
            }
        }
        let timerId = Extension.DelayCall(fDelayOk, 2)
        this.tAllTimerIds.push(timerId)

    }


    private ServerNeedFlyGold() {

        this.StopFlyGold()

        for (let i = 0; i < this.tAllTimerIds.length; i++) {
            let timerId = this.tAllTimerIds.shift()
            Extension.CancelDelayCall(timerId)
        }

        let winCnt = this.GetWinnerCnt()
        let failCnt = this.GetFailerCnt()

        let allOkCallback = () => {
            MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNWinOrLossGoldAnim)
        }

        if (winCnt > 0 && failCnt == 0) {
            this.FlyWinner(allOkCallback)
        } else if (winCnt > 0 && failCnt > 0) {
            // let flyWinOkcallback = () => {
            //     this.FlyFailer(allOkCallback)
            // }
            // this.FlyWinner(flyWinOkcallback)


            let flyFailOkcallback = () => {
                this.FlyWinner(allOkCallback)
            }
            this.FlyFailer(flyFailOkcallback)

        } else if (winCnt == 0 && failCnt > 0) {
            this.FlyFailer(allOkCallback)
        }


    }


    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
        } else if (msgbody.status == GameStatus.DisPlay) {
            this.StopFlyGold()
        } else if (msgbody.status == GameStatus.GrapBank) {
            this.StopFlyGold()
        } else if (msgbody.status == GameStatus.EnsureBank) {
            this.StopFlyGold()
        } else if (msgbody.status == GameStatus.Bet) {
            this.StopFlyGold()
        } else if (msgbody.status == GameStatus.Deal) {

        } else if (msgbody.status == GameStatus.Settlement) {

        } else if (msgbody.status == GameStatus.Stop) {

        }

    }


    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNFlyGoldPos2Pos) {
            this.FlyGoldPos2Pos(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNServerNeedFlyGold) {
            this.ServerNeedFlyGold()
        }
    }


    public Construction(trans, datas, datasFunc) {

        this.datasFunc = datasFunc
        this.trans = trans

        let panel = Extension.SearchNode(trans, "Panel")

        for (let i = 0; i < 5; i++) {
            let tmpTrans = Extension.SearchNode(trans, "Player" + (i + 1))
            this.transPlayerArr.push(tmpTrans)
        }

        this.transFirstGold = Extension.SearchNode(panel, "Glod")

        for (let i = 0; i < panel.childrenCount; i++) {
            let childNode = panel.children[i]
            if (childNode.name == "Glod") {
                childNode.active = false
                this.allGoldNodeArr.push(childNode)
            }
        }
        if (this.allGoldNodeArr.length < 400) {
            for (let i = 0; i < 400; i++) {
                let tmpTrans = instantiate(this.transFirstGold)
                tmpTrans.active = false
                tmpTrans.name == "Glod"
                tmpTrans.parent = panel
                this.allGoldNodeArr.push(tmpTrans)
            }
        }

        return this

    }

    private Clear() {

        this.StopFlyGold()

        for (let node of this.allGoldNodeArr) {
            node.active = false
        }
    }

    public Exit() {
        this.Clear()
    }


}
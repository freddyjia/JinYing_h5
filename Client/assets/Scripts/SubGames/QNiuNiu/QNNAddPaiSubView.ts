import QNNDatasFunc from "./QNNDatasFunc";
import Extension from "../../Tools/Extension";
import Util from "../../Tools/Util";
import AtlasFont from "../../Tools/AtlasFont";
import QNNConfig from "./QNNConfig";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import {GameStatus, PushRoomInitData, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import AudioManager from "../../Manager/AudioManager";
import MessageCenter from "../../MVCFramework/MessageCenter";

export default class QNNAddPaiSubView implements IQNNMsg {


    private datasFunc: QNNDatasFunc
    private trans: cc.Node
    private transTimerPoint: cc.Node
    private imgImgFont: cc.Label
    private btnFanpai: cc.Button
    private addPointArr = new Array<cc.Label>()
    private transLocalPanel: cc.Node
    private timerId: string

    private SetTransLocalPanelActive(active: boolean) {
        let finalStatus = true
        if (active) {
            let isReady = this.datasFunc.fIsReadyJoin(1)
            finalStatus = isReady
        } else {
            finalStatus = false
        }

        this.transLocalPanel.active = finalStatus
    }


    public Construction(trans, datas, datasFunc) {

        this.datasFunc = datasFunc
        this.trans = trans
        this.transTimerPoint = Extension.SearchNode(trans, "ImgFont")
        this.imgImgFont = Extension.SearchTxt(trans, "ImgFont")
        this.transLocalPanel = Extension.SearchNode(trans, "LocalPanel")

        this.btnFanpai = Extension.SearchBtn(trans, "BtnFanpai")
        Util.SetClickAction(this.btnFanpai, () => {
            this.BtnFanpai(this)
        })

        for (let i = 0; i < 4; i++) {
            let TextPoint = Extension.SearchTxt(trans, "TextPoint" + (i + 1))
            TextPoint.string = ''
            this.addPointArr[i] = TextPoint
        }


        trans.active = false

        return this

    }

    public BtnFanpai(outside: QNNAddPaiSubView) {
        outside.datasFunc.fReqFanpai()
        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNClickFanpai)
    }

    private ClickCard() {
        this.ClearTextPoint();
        
        let sum = 0
        let setIndex = 0
        for (let val of this.datasFunc.fGetAllSizeTypeByClickSort()) {
            let sizeType = val
            sum += sizeType
            this.addPointArr[setIndex].string = sizeType.toString()
            setIndex++
        }

        if (sum > 0) {
            this.addPointArr[3].string = (sum.toString())
        }
    }

    private AnimPlay(msgBody) {

        if (this.datasFunc.fGIsByStander()) {
            return
        }

        if (!this.datasFunc.fIsAbsPosJoinCurGame(1)) {
            return
        }

        this.ClearTextPoint();

        this.trans.active = true
        this.SetTransLocalPanelActive(true)

        let totalLeftTime = msgBody.waitTime
        this.trans.active = true

        this.transTimerPoint.active = false

        let outside = this
        if (totalLeftTime > 0) {
            this.transTimerPoint.active = true
            this.imgImgFont.string = totalLeftTime.toString();
        }


        let fFlushLeftTime = () => {
            totalLeftTime = totalLeftTime - 1

            if (totalLeftTime > 0) {
                this.imgImgFont.string = totalLeftTime.toString();
            }

            if (totalLeftTime <= 3 && totalLeftTime > 0) {
                AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.SoundTimeLeft)
            }

            if (totalLeftTime <= 0) {
                outside.transTimerPoint.active = false
                outside.trans.active = false
            }
        }
        this.timerId = Extension.DelayCall(fFlushLeftTime, 1, null, totalLeftTime, 1, false)

    }

    private CancleTimer() {
        this.SetTransLocalPanelActive(false)
        Extension.CancelDelayCall(this.timerId)
    }

    private PushRoomInitData(msgbody: PushRoomInitData) {
        if (msgbody.status == GameStatus.Start) {
        } else if (msgbody.status == GameStatus.DisPlay) {
        } else if (msgbody.status == GameStatus.GrapBank) {
        } else if (msgbody.status == GameStatus.EnsureBank) {
        } else if (msgbody.status == GameStatus.Bet) {
        } else if (msgbody.status == GameStatus.Deal) {
            this.AnimPlay(msgbody)
        } else if (msgbody.status == GameStatus.Settlement) {
            this.trans.active = false
        } else if (msgbody.status == GameStatus.Stop) {
        }
    }

    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
            this.CancleTimer()
        } else if (msgbody.status == GameStatus.DisPlay) {

        } else if (msgbody.status == GameStatus.GrapBank) {

        } else if (msgbody.status == GameStatus.EnsureBank) {
        } else if (msgbody.status == GameStatus.Bet) {

        } else if (msgbody.status == GameStatus.Deal) {
            this.AnimPlay(msgbody)
        } else if (msgbody.status == GameStatus.Settlement) {
            this.trans.active = false
        } else if (msgbody.status == GameStatus.Stop) {

        }

    }


    public PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNClickCard) {
            this.ClickCard()
        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
            this.PushRoomInitData(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNLocalPlayerHasFanpai) {
            this.SetTransLocalPanelActive(false)
        }
    }

    public Exit() {
        this.ClearTextPoint();
    }

    private ClearTextPoint()
    {
        for (let i = 0; i < this.addPointArr.length; i++){
            this.addPointArr[i].string = ''
        }
    }
}
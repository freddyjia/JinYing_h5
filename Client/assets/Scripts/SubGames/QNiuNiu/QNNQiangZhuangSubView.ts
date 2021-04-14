import QNNDatasFunc from "./QNNDatasFunc";
import Extension from "../../Tools/Extension";
import {GameStatus, PushRoomInitData, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import QNNQiangZhuangItem from "./QNNQiangZhuangItem";
import AudioManager from "../../Manager/AudioManager";
import QNNConfig from "./QNNConfig";

export default class QNNQiangZhuangSubView implements IQNNMsg {


    private btnsPanel: cc.Node
    private datasFunc: QNNDatasFunc;


    private trans: cc.Node
    private transTimerPoint: cc.Node
    private imgImgFont: cc.Label
    private transBtnsPanel: cc.Node
    private btnArr = new Array<cc.Button>()


    private SetBtnActive(active: boolean) {
        let finalStatus = true
        if (active) {
            let isReady = this.datasFunc.fIsReadyJoin(1)
            finalStatus = isReady
        } else {
            finalStatus = false
        }

        this.transBtnsPanel.active = finalStatus
    }

    public AnimPlay(msgBody, bFromInit: boolean) {


        //joker todo
        // let selfUId = this.datasFunc.fGetLocalPlayerUId()
        // let bIsSelfJoin = this.datasFunc.fCheckIsPlayerQiangzhuang(selfUId)
        // if (!bIsSelfJoin) {
        //     return
        // }

        AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.SoundStartQiangzhuang)

        let totalLeftTime = msgBody.waitTime
        let showClock = totalLeftTime > 0
        this.trans.active = true

        this.transTimerPoint.active = showClock
        this.SetBtnActive(false)

        let outside = this
        if (totalLeftTime > 0) {
            this.imgImgFont.string = totalLeftTime.toString();

            if (bFromInit) {
                for (let playerInfo of msgBody.players) {
                    if (playerInfo.playerId == this.datasFunc.fGetLocalPlayerUId()) {
                        if (playerInfo.grapMutiple == -1) {
                            this.SetBtnActive(true)
                            this.FlushBtns(msgBody)
                        }
                    }
                }
            } else {
                this.SetBtnActive(true)
                this.FlushBtns(msgBody)
            }
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
                this.trans.active = false
                outside.transTimerPoint.active = false
                this.SetBtnActive(true)
            }
        }
        Extension.DelayCall(fFlushLeftTime, 1, null, totalLeftTime, 1, false)

    }

    private FlushBtns(msgbody) {
        new QNNQiangZhuangItem().Construction(this.btnArr[0].node, 0, this.datasFunc)
        for (let k = 0; k < msgbody.mutiple.length; k++) {
            new QNNQiangZhuangItem().Construction(this.btnArr[k + 1].node, msgbody.mutiple[k], this.datasFunc)
        }
    }

    private Qiangzhuang(msgbody, bFromInit: boolean) {

        if (this.datasFunc.fGIsByStander()) {
            return
        }

        if (!this.datasFunc.fIsAbsPosJoinCurGame(1)) {
            return
        }


        this.trans.active = true
        this.AnimPlay(msgbody, bFromInit)
    }

    private LocalClickQiangzhuang() {
        this.SetBtnActive(false)
    }

    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
        } else if (msgbody.status == GameStatus.DisPlay) {

        } else if (msgbody.status == GameStatus.GrapBank) {
            this.Qiangzhuang(msgbody, false)
        } else if (msgbody.status == GameStatus.EnsureBank) {
            this.trans.active = false
        } else if (msgbody.status == GameStatus.Bet) {

        } else if (msgbody.status == GameStatus.Deal) {

        } else if (msgbody.status == GameStatus.Settlement) {

        } else if (msgbody.status == GameStatus.Stop) {

        }

    }

    private PushRoomInitData(msgbody: PushRoomInitData) {
        if (msgbody.status == GameStatus.GrapBank) {

            this.Qiangzhuang(msgbody, true)

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

        } else if (msg == MessageNamesQNiuNiu.QNNLocalClickQiangzhuang) {
            this.LocalClickQiangzhuang()
        }
    }


    public Construction(trans: cc.Node, datas, datasFunc: QNNDatasFunc) {

        this.datasFunc = datasFunc

        this.trans = trans
        this.transTimerPoint = Extension.SearchNode(trans, "TimerPoint")
        this.imgImgFont = Extension.SearchTxt(trans, "ImgFont")
        this.transBtnsPanel = Extension.SearchNode(trans, "BtnsPanel")
        for (let i = 0; i < 4; i++) {
            let btn = Extension.SearchBtn(trans, "Btn" + (i + 1))
            btn.node.active = false
            this.btnArr.push(btn)
        }


        this.trans.active = false


        return this

    }

    Exit(): void {
    }


}
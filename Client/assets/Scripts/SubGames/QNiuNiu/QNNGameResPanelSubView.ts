import QNNDatasFunc from "./QNNDatasFunc";
import {GameStatus, PushRoomInitData, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import Extension from "../../Tools/Extension";
import MessageCenter from "../../MVCFramework/MessageCenter";
import QNNConfig from "./QNNConfig";
import AudioManager from "../../Manager/AudioManager";

export default class QNNGameResPanelSubView implements IQNNMsg {

    private datasFunc: QNNDatasFunc
    private trans

    private transWinSpinePoint: cc.Node
    private transFailSpinePoint: cc.Node

    private spWin: sp.Skeleton
    private spFail: sp.Skeleton

    private delayFlyGoldTimerIdArr = new Array<string>()

    private pos: number

    private ShowSpine() {

        let dealInfo = this.datasFunc.fGetDealInfoByPos(this.pos)
        if (dealInfo == null) {
            return
        }
        this.trans.active = true

        let winGold = Number(dealInfo.playResult)
        if (winGold > 0) {
            this.transWinSpinePoint.active = true
            this.transFailSpinePoint.active = false
            this.spWin.setAnimation(0, "1", false)
            AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.SoundWin)

        } else {
            this.transWinSpinePoint.active = false
            this.transFailSpinePoint.active = true
            this.spFail.setAnimation(0, "1", false)
            AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.SoundLose)
        }


        let fDelayFlyGold = () => {
            MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNServerNeedFlyGold)
        }
        let timerId = Extension.DelayCall(() => {
            fDelayFlyGold()
        }, 1.5)
        this.delayFlyGoldTimerIdArr.push(timerId)


    }

    private HideSpine() {
        this.trans.active = false
        this.transWinSpinePoint.active = false
        this.transFailSpinePoint.active = false
    }




    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
            this.HideSpine()
        } else if (msgbody.status == GameStatus.DisPlay) {

        } else if (msgbody.status == GameStatus.GrapBank) {

        } else if (msgbody.status == GameStatus.EnsureBank) {
        } else if (msgbody.status == GameStatus.Bet) {

        } else if (msgbody.status == GameStatus.Deal) {
        } else if (msgbody.status == GameStatus.Settlement) {
            this.ShowSpine()
        } else if (msgbody.status == GameStatus.Stop) {

        }

    }

    private PushRoomInitData(msgbody: PushRoomInitData) {
        this.trans.active = false
        if (msgbody.status == GameStatus.Start) {
        } else if (msgbody.status == GameStatus.DisPlay) {
        } else if (msgbody.status == GameStatus.GrapBank) {
        } else if (msgbody.status == GameStatus.EnsureBank) {
        } else if (msgbody.status == GameStatus.Bet) {
        } else if (msgbody.status == GameStatus.Deal) {
        } else if (msgbody.status == GameStatus.Settlement) {
            this.ShowSpine()
        } else if (msgbody.status == GameStatus.Stop) {
        }
    }


    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
            this.PushRoomInitData(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerInfo) {
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerLeave) {

        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNActionRes) {
        } else if (msg == MessageNamesQNiuNiu.QNNPushAction) {

        }
    }

    public Construction(trans: cc.Node, datas, datasFunc: QNNDatasFunc) {

        this.pos = 1


        this.datasFunc = datasFunc
        this.trans = trans

        this.transFailSpinePoint = Extension.SearchNode(trans, "FailSpinePoint")
        this.transWinSpinePoint = Extension.SearchNode(trans, "WinSpinePoint")
        this.spWin = this.transWinSpinePoint.getComponent(sp.Skeleton)
        this.spFail = this.transFailSpinePoint.getComponent(sp.Skeleton)

        this.transFailSpinePoint.active = false
        this.transWinSpinePoint.active = false


        this.trans.active = (false)

        return this

    }

    private _Exit() {
        this.trans.active = (false)
    }

    Exit(): void {
    }


}
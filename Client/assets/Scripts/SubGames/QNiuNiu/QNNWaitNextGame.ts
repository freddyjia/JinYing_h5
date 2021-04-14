import QNNDatasFunc from "./QNNDatasFunc";
import Extension from "../../Tools/Extension";
import {GameStatus, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";

export default class QNNWaitNextGame implements IQNNMsg {


    private trans
    private transWaitSpinePoint
    private datasFunc: QNNDatasFunc


    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
            this.Check(false)
        } else if (msgbody.status == GameStatus.DisPlay) {
            this.Check(false)
        } else if (msgbody.status == GameStatus.GrapBank) {
        } else if (msgbody.status == GameStatus.EnsureBank) {
        } else if (msgbody.status == GameStatus.Bet) {
        } else if (msgbody.status == GameStatus.Deal) {
        } else if (msgbody.status == GameStatus.Settlement) {
        } else if (msgbody.status == GameStatus.Stop) {

        }

    }


    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
            this.Check(true)
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerInfo) {
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerLeave) {

        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNActionRes) {
        } else if (msg == MessageNamesQNiuNiu.QNNPushAction) {

        }
    }

    public Construction(trans: cc.Node, datas, datasFunc: QNNDatasFunc) {

        this.datasFunc = datasFunc

        this.trans = trans
        this.transWaitSpinePoint = Extension.SearchNode(trans, "WaitSpinePoint")


        return this

    }

    public Check(isFromInit: boolean) {


        if (isFromInit) {
            if (this.datasFunc.fGIsByStander()) {
                this.Show()
                return
            }
        }


        let status = this.datasFunc.fGetFinalRoomStatus()
        if (status == GameStatus.Start) {
            this.Hide()
        } else if (status == GameStatus.Stop) {

        } else {
            if (isFromInit) {
                if (this.datasFunc.fIsAbsPosJoinCurGame(1)) {
                    this.Hide()
                } else {
                    this.Show()
                }
            } else {
                if (status == GameStatus.DisPlay) {
                    if (this.datasFunc.fIsAbsPosJoinCurGame(1)) {
                        this.Hide()
                    } else {
                        this.Show()
                    }
                }
            }
        }

    }

    public Show() {
        this.trans.active = true
    }

    private Hide() {
        this.trans.active = false
    }

    Exit(): void {
    }


}
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import {
    GameStatus,
    PushPlayerInfo,
    PushPlayerLeave,
    PushRoomInitData,
    PushRoomStatus
} from "../../Protos/QiangZhuangNiuNiu";
import {QNNDatasGameStart} from "./Common/QNNCommon";
import MessageCenter from "../../MVCFramework/MessageCenter";


class DatasInOrOffQueue {
    public msgBodyLeave: PushPlayerLeave
    public msgBodyEnter: PushPlayerInfo
}

export default class QNNPlayerInOrOffMgr implements IQNNMsg {

    private isGoldFlying = false
    private queue = new Array<DatasInOrOffQueue>()


    private AddData(msgbody1: PushPlayerLeave, msgbody2: PushPlayerInfo) {
        let datas = new DatasInOrOffQueue()
        datas.msgBodyLeave = msgbody1
        datas.msgBodyEnter = msgbody2
        this.queue.push(datas)
    }

    private ExecuteNow() {
        let len = this.queue.length
        for (let i = 0; i < len; i++) {
            let datas = this.queue.shift()
            let isLeave = datas.msgBodyLeave != null
            if (isLeave) {
                MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNPushPlayerLeave, datas.msgBodyLeave)
            } else {
                MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNPushPlayerInfo, datas.msgBodyEnter)
            }
        }
    }

    private GameStartAnim(msgBody: QNNDatasGameStart) {
        let leftSecond = msgBody.leftSecond
        if (leftSecond <= 2) {
            this.isGoldFlying = false
            this.ExecuteNow()
        }
    }

    private NiuTouHappen() {
        this.isGoldFlying = false
        this.ExecuteNow()
    }

    private QiangzhuangHappen() {
        this.isGoldFlying = false
        this.ExecuteNow()
    }

    private PlayAskLeave(msgBody: PushPlayerLeave) {
        this.AddData(msgBody, null)
        if (!this.isGoldFlying) {
            this.ExecuteNow()
        }
    }

    private PlayAskEnter(msgBody: PushPlayerInfo) {
        this.AddData(null, msgBody)
        if (!this.isGoldFlying) {
            this.ExecuteNow()
        }
    }

    private SetIsGoldFlying() {
        this.isGoldFlying = true
    }

    private PushRoomStatus(msgbody: PushRoomStatus) {
        let status = msgbody.status
        if (status == GameStatus.DisPlay) {
            this.NiuTouHappen()
        } else if (status == GameStatus.GrapBank) {
            this.QiangzhuangHappen()
        }
    }

    private PushRoomInitData(msgbody: PushRoomInitData) {
        let status = msgbody.status
        if (status == GameStatus.DisPlay) {
            this.NiuTouHappen()
        } else if (status == GameStatus.GrapBank) {
            this.QiangzhuangHappen()
        }
    }


    public Construction() {
        this.isGoldFlying = false
        this.queue = new Array<DatasInOrOffQueue>()

        return this
    }

    Exit(): void {
        this.isGoldFlying = false
        this.queue = new Array<DatasInOrOffQueue>()
    }

    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
            this.PushRoomInitData(msgBody as PushRoomInitData)
        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNPlayAskLeave) {
            this.PlayAskLeave(msgBody as PushPlayerLeave)
        } else if (msg == MessageNamesQNiuNiu.QNNFlyGoldHappen) {
            this.SetIsGoldFlying()
        } else if (msg == MessageNamesQNiuNiu.QNNGameStartAnimPlay) {
            this.GameStartAnim(msgBody as QNNDatasGameStart)
        } else if (msg == MessageNamesQNiuNiu.QNNPlayAskEnter) {
            this.PlayAskEnter(msgBody as PushPlayerInfo)
        }
    }

}
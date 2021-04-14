import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import {GameStatus, PushRoomInitData, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import QNNDatasFunc from "./QNNDatasFunc";
import Extension from "../../Tools/Extension";
import AudioManager from "../../Manager/AudioManager";
import QNNConfig from "./QNNConfig";

export default class QNNCardResSubView implements IQNNMsg {

    private datasFunc: QNNDatasFunc;
    private trans: cc.Node;
    private spineBeisuArrFromPos0 = new Array<sp.Skeleton>()
    private spineNiuXArrFromPos0 = new Array<sp.Skeleton>()

    private transPlayerArr: Array<cc.Node> = new Array<cc.Node>()

    public Construction(trans: cc.Node, datas, datasFunc: QNNDatasFunc) {
        this.datasFunc = datasFunc

        this.trans = trans


        for (let i = 0; i < 5; i++) {
            let tmpTrans = Extension.SearchNode(trans, "Player" + (i + 1))
            this.transPlayerArr.push(tmpTrans)
            let spBeishu = Extension.SearchNode(tmpTrans, "BeishuPoint").getComponent(sp.Skeleton)
            let spPaixing = Extension.SearchNode(tmpTrans, "PaixingPoint").getComponent(sp.Skeleton)
            this.spineBeisuArrFromPos0.push(spBeishu)
            this.spineNiuXArrFromPos0.push(spPaixing)
        }

        return this
    }

    private QNNTestClick(msgBody: any) {
        let val1 = msgBody.val1
        let val2 = msgBody.val2

        // let nodeBeishu = this.spineBeisuArrFromPos0[4].node
        // let oriPosY = nodeBeishu.position.y
        // nodeBeishu.position = new Vec2(Number(val1), oriPosY)

    }

    private NeedShowCardRes(msgBody: any) {

        if (this.datasFunc.fGIsByStander()) {
            return
        }

        let pos = msgBody.pos

        let dealInfo = this.datasFunc.fGetDealInfoByPos(pos)
        if (dealInfo == null) {
            return
        }
        let niuX = dealInfo.result
        let niuMutiple = dealInfo.niuMutiple

        //炸弹和五花牛动画和服务器对不上
        if (niuX == 11) {
            niuX = 12
        } else if (niuX == 12) {
            niuX = 11
        }

        this.transPlayerArr[pos - 1].active = true

        this.spineNiuXArrFromPos0[pos - 1].setAnimation(0, "px" + niuX, false)
        this.spineBeisuArrFromPos0[pos - 1].setAnimation(0, niuMutiple.toString(), false)


        let tSoundConfig = QNNConfig.Audio
        let soundKey = tSoundConfig["VoiceNiu" + niuX.toString()]
        if (soundKey != null) {
            AudioManager.GetInstance().SoundPlay(soundKey)
        }

    }

    private Clear() {
        for (let val of this.transPlayerArr) {
            val.active = false
        }
    }

    private PushRoomInitData(msgbody: PushRoomInitData) {
        this.Clear()
    }

    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
            this.Clear()
        } else if (msgbody.status == GameStatus.DisPlay) {
            this.Clear()
        } else if (msgbody.status == GameStatus.GrapBank) {
            this.Clear()
        } else if (msgbody.status == GameStatus.EnsureBank) {
            this.Clear()
        } else if (msgbody.status == GameStatus.Bet) {
            this.Clear()
        } else if (msgbody.status == GameStatus.Deal) {
        } else if (msgbody.status == GameStatus.Settlement) {
        } else if (msgbody.status == GameStatus.Stop) {
            this.Clear()
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
        } else if (msg == MessageNamesQNiuNiu.QNNPlayerEnterSlot) {
        } else if (msg == MessageNamesQNiuNiu.QNNFlushPlayerCard) {
        } else if (msg == MessageNamesQNiuNiu.QNNClickCard) {
        } else if (msg == MessageNamesQNiuNiu.QNNTestClick) {
            this.QNNTestClick(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNNeedShowCardRes) {
            this.NeedShowCardRes(msgBody)
        }
    }

    public Exit() {
        this.Clear()
    }


}
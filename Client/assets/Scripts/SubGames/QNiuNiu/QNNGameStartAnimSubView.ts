import QNNDatasFunc from "./QNNDatasFunc";
import AudioManager from "../../Manager/AudioManager";
import QNNConfig from "./QNNConfig";
import Extension from "../../Tools/Extension";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import {GameStatus, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import MessageCenter from "../../MVCFramework/MessageCenter";

export default class QNNGameStartAnimSubView implements IQNNMsg {

    private datasFunc: QNNDatasFunc;

    private trans: cc.Node;

    private transTimerPoint: cc.Node
    private imgImgFont: cc.Label
    private transSpinePoint2: cc.Node;
    private spSpinePoint2: sp.Skeleton;

    private AnimPlay(msgBody: PushRoomStatus) {

        let totalLeftTime = msgBody.waitTime
        let showClock = totalLeftTime > 0
        this.trans.active = true

        this.transTimerPoint.active = showClock
        this.transSpinePoint2.active = false

        if (showClock){
            this.imgImgFont.string = totalLeftTime.toString();
        }

        let outside = this

        let fFlushLeftTime = () => {
            totalLeftTime = totalLeftTime - 1

            MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNGameStartAnimPlay, {
                leftSecond : totalLeftTime
            })


            if (totalLeftTime > 0) {
                this.imgImgFont.string = totalLeftTime.toString();
            }

            if (totalLeftTime <= 3 && totalLeftTime > 0) {
                AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.SoundTimeLeft)
            }

            if (totalLeftTime <= 0) {
                outside.transTimerPoint.active = false
                outside.transSpinePoint2.active = true
                outside.spSpinePoint2.node.active = true
                this.spSpinePoint2.setAnimation(0, "1", false)
            }
        }
        Extension.DelayCall(fFlushLeftTime, 1, null, totalLeftTime, 1, false)

    }

    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
            this.AnimPlay(msgbody)
        } else if (msgbody.status == GameStatus.DisPlay) {

        } else if (msgbody.status == GameStatus.GrapBank) {

        } else if (msgbody.status == GameStatus.EnsureBank) {
            this.trans.active = false
        } else if (msgbody.status == GameStatus.Bet) {

        } else if (msgbody.status == GameStatus.Deal) {

        } else if (msgbody.status == GameStatus.Settlement) {

        } else if (msgbody.status == GameStatus.Stop) {

        }

    }

    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
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

        this.trans.active = (false)

        this.transTimerPoint = Extension.SearchNode(trans, "TimerPoint")
        this.imgImgFont = Extension.SearchTxt(trans, "ImgFont")
        this.transSpinePoint2 = Extension.SearchNode(trans, "SpinePoint2")
        this.spSpinePoint2 = Extension.SearchNode(trans, "Spine").getComponent(sp.Skeleton)

        this.spSpinePoint2.setCompleteListener(()=>{
            this.trans.active = false
        })

        return this

    }

    Exit(): void {
    }


}
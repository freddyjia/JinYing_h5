import QNNDatasFunc from "./QNNDatasFunc";
import UploadAnalytics from "../../Tools/UploadAnalytics";
import AudioManager from "../../Manager/AudioManager";
import QNNConfig from "./QNNConfig";
import Util from "../../Tools/Util";
import Global from "../../Global/Global";
import MessageCenter from "../../MVCFramework/MessageCenter";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";

export default class QNNTouzhuItem {


    private mutiple

    private datasFunc: QNNDatasFunc;
    private trans: cc.Node;
    private btn: cc.Button


    public Construction(trans: cc.Node, mutiple: number, datasFunc: QNNDatasFunc) {

        this.datasFunc = datasFunc

        this.mutiple = mutiple


        this.trans = trans


        this.btn = trans.getComponent(cc.Button)
        Util.SetClickAction(this.btn, () => {
            this.BtnZhuCnt(this)
        })

        this.trans.active = true

    }

    public BtnZhuCnt(outside: QNNTouzhuItem) {
        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNLocalClickZhu, {mutiple: outside.mutiple})
        this.datasFunc.fReqTouzhu(outside.mutiple)
        UploadAnalytics.UploadAnalyticsEvent("QZNN", "QZNN xiazhu." + (outside.mutiple).toString())

        let soundKey = "Add" + (outside.mutiple).toString()
        let bIsMen = Util.GetGenderByName(Global.PlayerInfo.headImageUrl)
        let soundPath = null
        let volume = 1
        if (bIsMen) {
            soundPath = QNNConfig.Audio.Man[soundKey]
            volume = 2
        } else {
            soundPath = QNNConfig.Audio.Woman[soundKey]
        }
        if (soundPath) {
            AudioManager.GetInstance().SoundPlayWithVolume(soundPath, false, volume)
        }

    }

}
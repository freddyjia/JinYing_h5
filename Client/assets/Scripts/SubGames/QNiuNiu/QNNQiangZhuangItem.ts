import QNNConfig from "./QNNConfig";
import QNNDatasFunc from "./QNNDatasFunc";
import UploadAnalytics from "../../Tools/UploadAnalytics";
import Global from "../../Global/Global";
import AudioManager from "../../Manager/AudioManager";
import Util from "../../Tools/Util";
import MessageCenter from "../../MVCFramework/MessageCenter";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";

export default class QNNQiangZhuangItem {

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
            this.BtnZhuangCnt(this)
        })

        this.trans.active = true

    }

    public BtnZhuangCnt(outside: QNNQiangZhuangItem) {
        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNLocalClickQiangzhuang, {mutiple: outside.mutiple})
        outside.datasFunc.fReqQiangZhuang(outside.mutiple)
        UploadAnalytics.UploadAnalyticsEvent("QZNN", "QZNN qz." + (outside.mutiple).toString())


        let soundKey = "Call" + (outside.mutiple).toString()
        let bIsMen = Util.GetGenderByName(Global.PlayerInfo.headImageUrl)
        let soundPath = ""
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
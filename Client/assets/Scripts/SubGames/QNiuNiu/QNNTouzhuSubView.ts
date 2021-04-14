import QNNDatasFunc from "./QNNDatasFunc";
import AudioManager from "../../Manager/AudioManager";
import Extension from "../../Tools/Extension";
import QNNConfig from "./QNNConfig";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import {GameStatus, PushRoomInitData, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import QNNTouzhuItem from "./QNNTouzhuItem";

export default class QNNTouzhuSubView implements IQNNMsg {

    private datasFunc: QNNDatasFunc;

    private trans: cc.Node;
    private btnsPanel: cc.Node;
    private transSelfNotZhuangPanel: cc.Node
    private transSelfIsZhuangPanel: cc.Node
    private imgImgFont1: cc.Label
    private imgImgFont2: cc.Label
    private btnArr = new Array<cc.Button>()


    private SetBtnActive(active: boolean) {
        let finalStatus = true
        if (active) {
            let isReady = this.datasFunc.fIsReadyJoin(1)
            finalStatus = isReady
        } else {
            finalStatus = false
        }

        this.btnsPanel.active = finalStatus
    }

    public AnimPlay(msgBody, bFromInit: boolean) {

        AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.SoundTouzhu)

        let totalLeftTime = msgBody.waitTime
        this.trans.active = true

        this.transSelfNotZhuangPanel.active = false
        this.transSelfIsZhuangPanel.active = false

        let tarImgFont = this.datasFunc.fGetLocalPlayerUId() == this.datasFunc.fGetBankerId() ? this.imgImgFont1 : this.imgImgFont2

        let outside = this
        if (totalLeftTime > 0) {

            tarImgFont.string = totalLeftTime.toString();
            tarImgFont.node.active = true
            tarImgFont.node.parent.active = true

            if (bFromInit) {

                for (let playerInfo of msgBody.players) {
                    if (playerInfo.playerId == this.datasFunc.fGetLocalPlayerUId()) {
                        if (playerInfo.mutiple != null && playerInfo.mutiple == 0) {
                            if (msgBody.mutiple != null && msgBody.mutiple.length > 0) {
                                this.SetBtnActive(true)
                                outside.FlushBtns(msgBody)
                            }
                        }
                    }
                }
            } else {
                if (msgBody.mutiple != null && msgBody.mutiple.length > 0) {
                    this.SetBtnActive(true)
                    outside.FlushBtns(msgBody)
                }
            }
        }


        let fFlushLeftTime = () => {
            totalLeftTime = totalLeftTime - 1

            if (totalLeftTime > 0) {
                tarImgFont.string = totalLeftTime.toString();
            }

            if (totalLeftTime <= 3 && totalLeftTime > 0) {
                AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.SoundTimeLeft)
            }

            if (totalLeftTime <= 0) {
                this.trans.active = false
                tarImgFont.node.active = false
                tarImgFont.node.parent.active = false
                this.SetBtnActive(false)
            }
        }
        Extension.DelayCall(fFlushLeftTime, 1, null, totalLeftTime, 1, false)

    }

    private FlushBtns(msgbody: PushRoomStatus) {
        for (let k = 0; k < msgbody.mutiple.length; k++) {
            new QNNTouzhuItem().Construction(this.btnArr[k].node, msgbody.mutiple[k], this.datasFunc)
        }
    }


    private TouZhu(msgbody, bFromInit: boolean) {


        if (this.datasFunc.fGIsByStander()) {
            return
        }

        if (!this.datasFunc.fIsAbsPosJoinCurGame(1)) {
            return
        }

        this.trans.active = true
        this.AnimPlay(msgbody, bFromInit)
    }

    private LocalClickZhu() {
        this.SetBtnActive(false)
    }


    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
        } else if (msgbody.status == GameStatus.DisPlay) {

        } else if (msgbody.status == GameStatus.GrapBank) {

        } else if (msgbody.status == GameStatus.EnsureBank) {

        } else if (msgbody.status == GameStatus.Bet) {
            this.TouZhu(msgbody, false)
        } else if (msgbody.status == GameStatus.Deal) {
            this.trans.active = false
        } else if (msgbody.status == GameStatus.Settlement) {

        } else if (msgbody.status == GameStatus.Stop) {

        }
    }

    private PushRoomInitData(msgbody: PushRoomInitData) {
        if (msgbody.status == GameStatus.Bet) {
            this.TouZhu(msgbody, true)
        }
    }

    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
            this.PushRoomInitData(msgBody as PushRoomInitData)
        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNLocalClickZhu) {
            this.LocalClickZhu()
        }
    }


    public Construction(trans: cc.Node, datas, datasFunc: QNNDatasFunc) {

        this.datasFunc = datasFunc

        this.trans = trans;


        this.transSelfIsZhuangPanel = Extension.SearchNode(trans, "SelfIsZhuangPanel")
        this.transSelfNotZhuangPanel = Extension.SearchNode(trans, "SelfNotZhuangPanel")
        this.imgImgFont1 = Extension.SearchTxt(trans, "ImgFont1")
        this.imgImgFont2 = Extension.SearchTxt(trans, "ImgFont2")
        this.btnsPanel = Extension.SearchNode(trans, "BtnsPanel")

        for (let i = 0; i < 4; i++) {
            let btn = Extension.SearchBtn(this.btnsPanel, "Btn" + (i + 1))
            btn.node.active = false
            this.btnArr.push(btn)
        }


        this.trans.active = false


        return this

    }

    Exit(): void {
    }


}
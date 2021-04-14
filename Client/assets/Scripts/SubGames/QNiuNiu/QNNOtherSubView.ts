import QNNDatasFunc from "./QNNDatasFunc";
import Extension from "../../Tools/Extension";
import MessageCenter from "../../MVCFramework/MessageCenter";
import Util from "../../Tools/Util";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import QNNTstData from "./QNNTstData";
import MessageNames from "../../Modules/MessageNames";
import QNNConfig from "./QNNConfig";
import Dialog from "../../Tools/Dialog";
import {GameTypeMgr} from "../../Global/GameTypeMgr";
import UploadAnalytics from "../../Tools/UploadAnalytics";
import {GameStatus, PushRoomInitData} from "../../Protos/QiangZhuangNiuNiu";

export default class QNNOtherSubView implements IQNNMsg {


    private datasFunc: QNNDatasFunc
    private trans: cc.Node
    private btnExit: cc.Button
    private btnHelp: cc.Button

    private inputTestEditBox1: cc.EditBox
    private inputTestEditBox2: cc.EditBox
    private btnSendInput: cc.Button
    private txtScore: cc.Label


    private transTestSendInputPanel: cc.Node


    public Construction(trans, datas, datasFunc) {

        this.datasFunc = datasFunc
        this.trans = trans

        this.inputTestEditBox1 = Extension.SearchNode(trans, "TestEditBox1").getComponent(cc.EditBox)
        this.inputTestEditBox2 = Extension.SearchNode(trans, "TestEditBox2").getComponent(cc.EditBox)

        this.txtScore = Extension.SearchTxt(trans, "TxtScore")

        this.btnSendInput = Extension.SearchBtn(trans, "BtnSendInput")
        Util.SetClickAction(this.btnSendInput, () => {
            this.BtnSendInput(this)
        })

        this.btnExit = Extension.SearchBtn(trans, "BtnExit")
        Util.SetClickAction(this.btnExit, () => {
            this.BtnExit()
        })

        this.btnHelp = Extension.SearchBtn(trans, "BtnHelp")
        Util.SetClickAction(this.btnHelp, () => {
            this.BtnHelp()
        })

        this.transTestSendInputPanel = Extension.SearchNode(trans, "TestSendInputPanel")
        this.transTestSendInputPanel.active = QNNConfig.useEditorModel


        trans.active = (true)

        return this

    }

    private BtnSendInput(outside: QNNOtherSubView) {
        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNTestClick, {
            val1: outside.inputTestEditBox1.string,
            val2: outside.inputTestEditBox2.string,
        })
    }

    public BtnExit() {

        if (!QNNConfig.useEditorModel) {

            let needShowDialog = false

            let isJoinCurGame = this.datasFunc.fIsAbsPosJoinCurGame(1)
            if (isJoinCurGame) {
                let finalStatus = this.datasFunc.fGetFinalRoomStatus()
                if (
                    finalStatus == GameStatus.Start
                    || finalStatus == GameStatus.Settlement
                    || finalStatus == GameStatus.Stop
                ) {

                } else {
                    needShowDialog = true
                }
            }

            if (needShowDialog) {
                Dialog.ShowWithYesNo("退出游戏后直接由笨笨的机器人托管操作哦~", () => {
                    MessageCenter.SendMessage(MessageNames.ExitSmallGame)
                }, null)
            } else {
                MessageCenter.SendMessage(MessageNames.ExitSmallGame)
            }


            // MessageCenter.SendMessage(MessageNames.ExitSmallGame)

            return
        }


        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNWinOrLossGoldAnim)  //飘金币

        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNServerNeedFlyGold)

        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNFlyGoldPos2Pos, {fromPos: 1, toPos: 2, notEnterQueue: true})  //飞金币
        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNFlyGoldPos2Pos, {fromPos: 1, toPos: 3, notEnterQueue: true})  //飞金币


        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNPushRoomStatus,QNNTstData.PushRoomStatus3())      //抢庄 确定玩家参与


        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNNeedShowCardRes, {      //显示玩家的niu x
        //     pos: 1
        // })

        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNPushRoomStatus,QNNTstData.PushRoomStatus10()) //确定庄家


        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNPushRoomStatus,QNNTstData.PushRoomStatus3()) //抢庄 确定玩家参与


        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNWinOrLossGoldAnim) //输赢金币动画


        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNPushRoomStatus, QNNTstData.PushRoomStatus22()) //抢庄 飘金币



        // MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNWinOrLossGoldAnim)//头像飘字




    }


    public BtnHelp() {
        if (!QNNConfig.useEditorModel) {
            MessageCenter.SendMessage(MessageNames.OpenGameRule, {
                gameType: GameTypeMgr.Config.Qiangzhuangniuniu,
                callBack: null
            })
            return
        }

        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNPushRoomStatus, QNNTstData.PushRoomStatus20())  //发牌结算

    }

    private PushRoomInitData(msgbody: PushRoomInitData) {
        this.txtScore.string = "底分: " + (msgbody.baseCoin / 100).toString()
    }

    public PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
            this.PushRoomInitData(msgBody as PushRoomInitData)
        }
    }

    public Exit() {
        this.txtScore.string = ""
    }


}
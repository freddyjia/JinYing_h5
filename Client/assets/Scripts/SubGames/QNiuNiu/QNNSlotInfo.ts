import QNNDatasFunc from "./QNNDatasFunc";
import {GameStatus, IPlayerInfo, PushAction, PushPlayerLeave, PushRoomStatus} from "../../Protos/QiangZhuangNiuNiu";
import Extension from "../../Tools/Extension";
import MessageCenter from "../../MVCFramework/MessageCenter";
import MessageNames from "../../Modules/MessageNames";
import QNNConfig from "./QNNConfig";
import Util from "../../Tools/Util";
import QNNHelp from "./QNNHelp";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import AtlasFont from "../../Tools/AtlasFont";
import XTween from "../../Tools/XTween/XTween";
import {XTweenCurvType} from "../../Tools/XTween/Base/XTweenCurv";
import {ViewRoleNodeSlotData} from "../../Modules/Views/ViewRoleInfo";
import Global from "../../Global/Global";
import Vec2 = cc.Vec2;

class PointEnum {
    public static trans = "trans"
    public static txtGoldNumText = "txtGoldNumText"
    public static txtUserName = "txtUserName"
    public static txtTxtUserName = "txtTxtUserName"
    public static transZhuangEffPanel = "transZhuangEffPanel"
    public static imgTouZhuCnt = "imgTouZhuCnt"
    public static imgZhuangCnt = "imgZhuangCnt"
    public static transRandomSelctZhuang = "transRandomSelctZhuang"
    public static transWinOrLossGoldPanel = "transWinOrLossGoldPanel"
    public static txtWin = "txtWin"
    public static txtLose = "txtLose"
    public static transHeadSplash = "transHeadSplash"
    public static transHeadMark = "transHeadMark"

}

export default class QNNSlotInfo implements IQNNMsg {


    private uId: string | null
    private arrPos: number      //在数组的下标
    private uiPos: number
    private pos: number      //服务器上的位置
    private relativeAbsPos: number   //在布局中相对本地玩家的偏移 （1～5）

    private trans: cc.Node
    private txtGoldNumText: cc.Label
    private txtUserName: cc.Label
    private txtTxtUserName: cc.Label
    private transZhuangEffPanel: cc.Node;
    private transZhuangEffSp: cc.Node;
    private imgTouZhuCnt: cc.Sprite
    private imgZhuangCnt: cc.Sprite
    private transRandomSelctZhuang: cc.Node
    private transWinOrLossGoldPanel: cc.Node
    private txtWin:cc.Label
    private txtLose:cc.Label
    private transWinOrLossGoldContent: cc.Node
    private winOrLossGoldAtlasFont: AtlasFont
    private transHeadSplash: cc.Node
    private imgHeadBox: cc.Sprite
    private imgHeadIcon: cc.Sprite
    private txtTxtWorldPos: cc.Label
    private btnHead: cc.Button
    private transHeadMark: cc.Node
    private transRoleInfoPoint: cc.Node


    private datasFunc: QNNDatasFunc
    private transOffsetPos: number
    private gold
    private head
    private headBg
    private name: string
    private province: string
    private city: string
    private isBanker: boolean

    private winOrLossGoldStartPos: cc.Vec2 = new Vec2(0, 73)
    private flyGoldTimerIdArr = new Array<string>()

    public GetUId() {
        return this.uId
    }

    public GetTrans() {
        return this.trans
    }

    private IsLocalPlayer(): boolean {
        return this.uId == this.datasFunc.fGetLocalPlayerUId()
    }


    private SetPointActiveState(pointEnum: string, activeState: boolean) {
        if (pointEnum == PointEnum.trans) {
            this.trans.active = (activeState)
        } else if (pointEnum == PointEnum.txtGoldNumText) {
            this.txtGoldNumText.node.active = (activeState)
        } else if (pointEnum == PointEnum.txtUserName) {
            this.txtUserName.node.active = (activeState)
        } else if (pointEnum == PointEnum.txtTxtUserName) {
            this.txtTxtUserName.node.active = (activeState)
        } else if (pointEnum == PointEnum.transZhuangEffPanel) {
            this.transZhuangEffPanel.active = (activeState)
        } else if (pointEnum == PointEnum.imgTouZhuCnt) {
            this.imgTouZhuCnt.node.active = (activeState)
        } else if (pointEnum == PointEnum.imgZhuangCnt) {
            this.imgZhuangCnt.node.active = (activeState)
        } else if (pointEnum == PointEnum.transRandomSelctZhuang) {
            this.transRandomSelctZhuang.active = activeState
        } else if (pointEnum == PointEnum.transWinOrLossGoldPanel) {
            this.transWinOrLossGoldPanel.active = activeState
        } else if (pointEnum == PointEnum.transHeadSplash) {
            this.transHeadSplash.active = activeState
        } else if (pointEnum == PointEnum.transHeadMark) {
            //this.transHeadMark.active = activeState
        }else if (pointEnum == PointEnum.txtWin) {
            this.txtWin.node.active = activeState
        }else if (pointEnum == PointEnum.txtLose) {
            this.txtLose.node.active = activeState
        }
    }

    public Construction(trans, arrPos, datasFunc: QNNDatasFunc) {

        this.datasFunc = datasFunc


        this.trans = trans
        this.arrPos = arrPos
        this.uiPos = arrPos + 1

        this.txtGoldNumText = Extension.SearchTxt(trans, "GoldNumText")
        this.txtUserName = Extension.SearchTxt(trans, "UserName")
        this.txtTxtUserName = Extension.SearchTxt(trans, "TxtUserName")
        this.transZhuangEffPanel = Extension.SearchNode(trans, "ZhuangEffPanel")
        this.imgTouZhuCnt = Extension.SearchSprite(trans, "TouZhuCnt")
        this.imgZhuangCnt = Extension.SearchSprite(trans, "ZhuangCnt")
        this.transRandomSelctZhuang = Extension.SearchNode(trans, "RandomSelctZhuang")
        this.transWinOrLossGoldPanel = Extension.SearchNode(trans, "WinOrLossGoldPanel")
        this.txtWin = Extension.SearchTxt(trans, "WinText");
        this.txtLose = Extension.SearchTxt(trans, "LoseText");
        this.transZhuangEffSp = Extension.SearchNode(trans, "ZhuangSpinePoint")
        //this.transZhuangEffSp = Extension.SearchNode(trans, "ZhuangSpinePoint").getComponent(sp.Skeleton)
        this.transHeadSplash = Extension.SearchNode(trans, "HeadSplash")
        this.transRoleInfoPoint = Extension.SearchNode(trans, "roleInfoPoint")

        this.SetPointActiveState(PointEnum.transRandomSelctZhuang, false)
        this.SetPointActiveState(PointEnum.transWinOrLossGoldPanel, false)


        this.imgHeadBox = Extension.SearchSprite(trans, "HeadBox")
        this.imgHeadIcon = Extension.SearchSprite(trans, "HeadIcon")
        this.txtTxtWorldPos = Extension.SearchTxt(trans, "TxtWorldPos")

        this.transHeadMark = Extension.SearchNode(trans, "HeadMask")

        this.btnHead = Extension.SearchBtn(trans, "BtnHead")
        Util.SetClickAction(this.btnHead, () => {
            this.BtnHeadIcon(this)
        })

        if (this.uiPos == 1) {
            this.winOrLossGoldStartPos = new Vec2(15, 73)
        }

    }

    public SetRandomZhuangMarkActive(state) {
        this.SetPointActiveState(PointEnum.transRandomSelctZhuang, state)
    }

    public BtnHeadIcon(outside: QNNSlotInfo) {

        let datas = new ViewRoleNodeSlotData()

        let pos = outside.uiPos
        if (Global.showLog == true)
            cc.log(pos)
        if (pos == 1) {
            return
        }

        datas.name = outside.name
        datas.location = outside.province + outside.city
        datas.gold = outside.gold
        datas.head = outside.head
        datas.headBox = outside.headBg
        datas.slotParent = outside.transRoleInfoPoint.parent
        datas.slot = outside.transRoleInfoPoint

        MessageCenter.SendMessage(MessageNames.OpenRoleInfoBySlot, datas)

    }

    public FlushProvince(province: string) {
        this.txtTxtWorldPos.string = province
    }

    public FlushName(name) {

        if (QNNConfig.useEditorModel) {
            this.txtTxtUserName.string = this.uId
        } else {
            this.txtUserName.string = name
            this.txtTxtUserName.string = name
        }

    }

    public FlushGold(gold) {
        this.gold = gold
        this.txtGoldNumText.string = Util.formatGoldText(Number(gold))
    }

    public FlushIsJusge(isBanker) {
        this.isBanker = isBanker
        this.SetPointActiveState(PointEnum.transZhuangEffPanel, isBanker)
    }

    public FlushHead(head: string) {
        Extension.DirGetAbSprite(this.imgHeadIcon, QNNConfig.headAtlas, head)
    }

    public FlushHeadBox(headbox: string) {
        // Extension.DirGetAbSprite(this.imgHeadBox, QNNConfig.headAtlas, headbox)
    }

    public FlushTouzhuCnt(cnt) {

        if (this.datasFunc.fGIsByStander()) {
            this.SetPointActiveState(PointEnum.imgTouZhuCnt, false)
            return
        }


        if (this.isBanker) {
            this.SetPointActiveState(PointEnum.imgTouZhuCnt, false)
            this.SetPointActiveState(PointEnum.imgZhuangCnt, true)
            return
        }

        this.SetPointActiveState(PointEnum.imgTouZhuCnt, true)
        this.SetPointActiveState(PointEnum.imgZhuangCnt, false)


        if (cnt <= 0) {
            this.imgTouZhuCnt.node.active = (false)
            return
        }
        if (!this.isBanker) {
            let spriteName = "QZNN_x" + cnt.toString()
            let forgroundAtlas = QNNConfig.atlas
            let forgroundSpriteName = spriteName
            Extension.DirGetAbSprite(this.imgTouZhuCnt, forgroundAtlas, forgroundSpriteName, () => {
                this.imgTouZhuCnt.node.active = true
            })
        }
    }

    public FlushZhuangCnt(cnt) {

        if (this.datasFunc.fGIsByStander()) {
            this.SetPointActiveState(PointEnum.imgZhuangCnt, false)
            return
        }


        this.SetPointActiveState(PointEnum.imgTouZhuCnt, false)
        this.SetPointActiveState(PointEnum.imgZhuangCnt, true)

        let spriteName = "QZNN_1F"
        if (cnt == 2) {
            spriteName = 'QZNN_2F'
        } else if (cnt == 4) {
            spriteName = 'QZNN_3F'
        } else if (cnt == 0) {
            spriteName = 'QZNN_BQ'
        }

        let forgroundSpriteName = spriteName
        Extension.DirGetAbSprite(this.imgZhuangCnt, QNNConfig.atlas, forgroundSpriteName)
    }

    private ResetOnGameRestart() {
        this.SetPointActiveState(PointEnum.imgTouZhuCnt, false)
        this.SetPointActiveState(PointEnum.imgZhuangCnt, false)
        this.SetPointActiveState(PointEnum.transHeadSplash, false)
        this.SetPointActiveState(PointEnum.transZhuangEffPanel, false)
    }

    public PlayerEnter(playerInfo: IPlayerInfo) {

        this.ResetOnGameRestart()


        this.uId = playerInfo.playerId
        this.transOffsetPos = playerInfo.pos
        this.gold = playerInfo.gold
        this.head = playerInfo.head
        this.headBg = playerInfo.headbox
        this.name = playerInfo.name
        this.province = playerInfo.province
        this.city = playerInfo.city
        this.isBanker = playerInfo.isBanker
        this.pos = playerInfo.pos
        this.relativeAbsPos = QNNHelp.AbsPosToRelativePos(playerInfo.pos, this.datasFunc.fGetLocalPlayerPos())

        MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNPlayerEnterSlot, {
            uId: this.uId,
            pos: this.pos,
            relativeAbsPos: this.relativeAbsPos,
            notEnterQueue: true,
        })

        this.SetPointActiveState(PointEnum.trans, true)

        this.FlushProvince(this.province)
        this.FlushName(this.name)
        this.FlushGold(this.gold)
        this.FlushHead(this.head)
        this.FlushHeadBox(this.headBg)
        this.FlushIsJusge(this.isBanker)

        if (playerInfo.mutiple != null) {
            this.FlushTouzhuCnt(playerInfo.mutiple)
        }

        this.SetPointActiveState(PointEnum.imgZhuangCnt, this.datasFunc.fGetBankerId() == this.uId)

        this.FlushTouzhuCnt(-1)

        this.CheckActive()

    }

    private LocalClickQiangzhuang(msgBody: any) {
        if (this.IsLocalPlayer()) {
            this.SetPointActiveState(PointEnum.imgZhuangCnt, false)
            let mutiple = msgBody.mutiple
            this.FlushZhuangCnt(mutiple);
        }
    }

    private LocalClickQiangzhu(msgBody: any) {
        if (this.IsLocalPlayer()) {
            let mutiple = msgBody.mutiple
            this.FlushTouzhuCnt(mutiple);
        }
    }

    private Qiangzhuang(msgBody: PushAction) {
        let mutiple = msgBody.multiple
        if (msgBody.playerId == this.uId) {
            this.FlushZhuangCnt(mutiple);
        }
    }

    private RandomZhuangAnimOk(msgBody: any) {
        let uId = msgBody.uId
        this.SetPointActiveState(PointEnum.imgZhuangCnt, this.uId == uId)
        if (this.uId == uId) {
            this.SetPointActiveState(PointEnum.transZhuangEffPanel, true)
            //this.transZhuangEffSp.setAnimation(0, "1", false)

        }
    }

    private WinOrLossGoldAnim() {
        let dealInfo = this.datasFunc.fGetDealInfoByPos(this.uiPos)
        if (dealInfo == null) {
            return
        }
        let offsetY = 10
        // if (this.uiPos == 1) {
        //     offsetY = 90
        // }

        let fOkCallback = () => {
            this.SetPointActiveState(PointEnum.transWinOrLossGoldPanel, true)
            let startPos = this.winOrLossGoldStartPos
            let bounceOutTime = 0.3
            XTween.DoMove(this.transWinOrLossGoldPanel, startPos, new Vec2(startPos.x, startPos.y + offsetY), bounceOutTime, 1, false, XTweenCurvType.BounceOut).Play()

            let fDelayHide = () => {
                this.SetPointActiveState(PointEnum.transWinOrLossGoldPanel, false)
            }
            let timerId = Extension.DelayCall(() => {
                fDelayHide()
            }, bounceOutTime + 1)
            this.flyGoldTimerIdArr.push(timerId)
        }

        let winGold = Number(dealInfo.playResult);
        let resultStr = Util.formatGoldText(winGold);
        let showWinGold = winGold > 0;
        this.SetPointActiveState(PointEnum.txtWin, showWinGold);
        this.SetPointActiveState(PointEnum.txtLose, !showWinGold);

        if (showWinGold){
            this.txtWin.string = resultStr;
        }else{
            this.txtLose.string = resultStr;
        }

        fOkCallback();
        
        this.FlushGold(dealInfo.gold)
    }

    private RandomZhuang(zhuangUId, randomUIdArr: Array<string>) {
        this.SetPointActiveState(PointEnum.transZhuangEffPanel, false)
    }

    private PushPlayerLeave(msgBody: PushPlayerLeave) {
        // this.SetPointActiveState(PointEnum.trans, false)
        // this.SetPointActiveState(PointEnum.)
    }

    private FlyGoldArrivalPlayer(datas) {
        let toPos = datas.toPos
        let leftCnt = datas.leftCnt
        if (toPos == this.uiPos) {
            let active = leftCnt > 0
            this.SetPointActiveState(PointEnum.transHeadSplash, active)
        }
    }

    private PushAction(msgBody: PushAction) {
        if (msgBody.status == GameStatus.GrapBank) {
            this.Qiangzhuang(msgBody)
        } else if (msgBody.status == GameStatus.Bet) {
            this.ServerFlushZhu(msgBody)
        }

    }

    private ServerFlushZhu(msgBody: PushAction) {
        if (this.uId == msgBody.playerId && this.uId != this.datasFunc.fGetBankerId()) {
            this.FlushTouzhuCnt(msgBody.multiple)
        }
    }

    private CheckActive() {

        if (!this.datasFunc.fIsPosInRoom(this.uiPos)) {
            this.SetPointActiveState(PointEnum.trans, false)
            return
        }

        let uiPos = this.uiPos
        let isReady = this.datasFunc.fIsReadyJoin(uiPos)
        if (isReady) {
            this.SetPointActiveState(PointEnum.trans, true)
            this.SetPointActiveState(PointEnum.transHeadMark, false)
        } else {
            if (this.datasFunc.fPos2UId(this.uiPos) != null) {
                this.SetPointActiveState(PointEnum.trans, true)
                this.SetPointActiveState(PointEnum.transHeadMark, true)
            } else {
                this.SetPointActiveState(PointEnum.trans, false)
            }
        }

    }


    private QNNTestClick(msgbody) {
        let val1 = msgbody.val1
        let val2 = msgbody.val2
        this.WinOrLossGoldAnim()
    }

    private GameStatus_Settlement(msgbody: PushRoomStatus) {
        this.SetPointActiveState(PointEnum.imgTouZhuCnt, false)
        this.SetPointActiveState(PointEnum.imgZhuangCnt, false)
    }

    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
            this.ResetOnGameRestart()
            this.CheckActive()
            this.SetPointActiveState(PointEnum.transZhuangEffPanel, false)
            this.SetPointActiveState(PointEnum.transRandomSelctZhuang, false)
            this.SetPointActiveState(PointEnum.transHeadSplash, false)
        } else if (msgbody.status == GameStatus.DisPlay) {
            this.ResetOnGameRestart()
            this.SetPointActiveState(PointEnum.transZhuangEffPanel, false)
            this.SetPointActiveState(PointEnum.transRandomSelctZhuang, false)
            this.SetPointActiveState(PointEnum.transHeadSplash, false)
        } else if (msgbody.status == GameStatus.GrapBank) {
            this.ResetOnGameRestart()
            this.CheckActive()
            this.SetPointActiveState(PointEnum.imgZhuangCnt, false)
            this.SetPointActiveState(PointEnum.transRandomSelctZhuang, false)
            this.SetPointActiveState(PointEnum.transHeadSplash, false)
        } else if (msgbody.status == GameStatus.EnsureBank) {
        } else if (msgbody.status == GameStatus.Bet) {
            this.SetPointActiveState(PointEnum.transRandomSelctZhuang, false)
            this.SetPointActiveState(PointEnum.transHeadSplash, false)
        } else if (msgbody.status == GameStatus.Deal) {
            this.SetPointActiveState(PointEnum.transRandomSelctZhuang, false)
            this.SetPointActiveState(PointEnum.transHeadSplash, false)
        } else if (msgbody.status == GameStatus.Settlement) {
            this.GameStatus_Settlement(msgbody)
        } else if (msgbody.status == GameStatus.Stop) {
            this.CheckActive()
        }
    }

    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNLocalClickQiangzhuang) {
            this.LocalClickQiangzhuang(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNLocalClickZhu) {
            this.LocalClickQiangzhu(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNPushAction) {
            this.PushAction(msgBody as PushAction)
        } else if (msg == MessageNamesQNiuNiu.QNNRandomZhuangAnimOk) {
            this.RandomZhuangAnimOk(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNWinOrLossGoldAnim) {
            this.WinOrLossGoldAnim()
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerLeave) {
            this.PushPlayerLeave(msgBody as PushPlayerLeave)
        } else if (msg == MessageNamesQNiuNiu.QNNFlyGoldArrivalPlayer) {
            this.FlyGoldArrivalPlayer(msgBody)
        } else if (msg == MessageNamesQNiuNiu.QNNTestClick) {
            this.QNNTestClick(msgBody)
        }
    }

    Exit(): void {
    }

}
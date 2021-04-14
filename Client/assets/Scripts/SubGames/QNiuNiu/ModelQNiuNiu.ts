import Model from "../../MVCFramework/Model";
import Global from "../../Global/Global";
import {
    ActionReq,
    ChatReq,
    DealInfo,
    GameStatus,
    IDealInfo,
    IPlayerInfo,
    PushAction,
    PushPlayerInfo,
    PushPlayerLeave,
    PushRoomInitData,
    PushRoomStatus
} from "../../Protos/QiangZhuangNiuNiu";
import TCPNetwork, {TCPSessionID} from "../../Network/Socket/TCPNetwork";
import {GameTypeMgr} from "../../Global/GameTypeMgr";
import {FiveNiuMsgDefine} from "../../Protos/MessageDefine_FiveNiu";
import {ActionRes} from "../../Protos/ZhaJinHua";
import QNNPrintProto from "./QNNPrintProto";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import QNNConfig from "./QNNConfig";
import QNNTstData from "./QNNTstData";
import QNNClickCardData from "./QNNClickCardData";
import QNNCardConfigHelp from "./QNNCardConfigHelp";
import Extension from "../../Tools/Extension";
import QNNHelp from "./QNNHelp";

class PlayerUIdAndPos {
    public uId: string = ""
    public pos: number = 0     //这个是相对本地玩家的pos
    public oriPos: number = 0   //这个是服务器上的位置\

}


export default class ModelQNiuNiu extends Model {


    private allPlayerUIdAndPosArr = new Array<PlayerUIdAndPos>(
        new PlayerUIdAndPos(), new PlayerUIdAndPos(),
        new PlayerUIdAndPos(), new PlayerUIdAndPos(),
        new PlayerUIdAndPos(),
    )
    private joinPlayerUIdArr = new Array<string>()
    private myUId: string
    private myPos: number
    private dealInfoArr: IDealInfo[]
    private clickCardArr = new Array<QNNClickCardData>()
    private bankerUId: string = ""
    private finalRoomStatus: number
    private isByStander = false

    public Init() {

        this.myUId = Global.PlayerInfo.playerId
        for (let i = 0; i < 5; i++) {
            this.clickCardArr.push(new QNNClickCardData())
        }

        this.PushRoomInitData()
        this.PushRoomStatus()
        this.ActionRes()
        this.PushAction()
        this.PushPlayerInfo()
        this.PushPlayerLeave()

    }


    private PlayerEnter(playerInfo: IPlayerInfo) {

        let datas = new PlayerUIdAndPos()
        datas.uId = playerInfo.playerId
        datas.oriPos = playerInfo.pos
        datas.pos = QNNHelp.AbsPosToRelativePos(playerInfo.pos, this.myPos)
        this.allPlayerUIdAndPosArr[datas.oriPos] = datas
    }

    private PlayerLeave(uId: string) {
        for (let val of this.allPlayerUIdAndPosArr) {
            if (val.uId == uId) {
                this.allPlayerUIdAndPosArr[val.oriPos] = new PlayerUIdAndPos()
            }
        }
    }


    public PushRoomInitData() {    //11001
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType, TCPSessionID.Hall, FiveNiuMsgDefine.MSG_FIVENIU_INIT, (datas) => {
            let rsp: PushRoomInitData = PushRoomInitData.decode(datas)
            QNNPrintProto.PushRoomInitData(rsp)

            this.finalRoomStatus = rsp.status
            this.isByStander = rsp.isByStander

            if (rsp.dealInfo != null) {
                this.dealInfoArr = rsp.dealInfo
            }

            for (let player of rsp.players) {

                if (player.isBanker) {
                    this.bankerUId = player.playerId
                }

                if (player.playerId == this.myUId) {
                    this.myPos = player.pos
                }

            }

            for (let player of rsp.players) {

                this.PlayerEnter(player)
                if (player.isPlay) {
                    this.joinPlayerUIdArr.push(player.playerId)
                }
            }


            this.SendMessage(MessageNamesQNiuNiu.QNNPushRoomInitData, rsp)
        })
    }

    public PushRoomStatus() {  //推送房间状态    //11004
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType, TCPSessionID.Hall, FiveNiuMsgDefine.MSG_PUSH_FIVENIU_ROOMSTATUS, (datas) => {
            let rsp: PushRoomStatus = PushRoomStatus.decode(datas)
            QNNPrintProto.PushRoomStatus(rsp)

            this.finalRoomStatus = rsp.status

            if (rsp.status == GameStatus.DisPlay) {
                this.isByStander = false
                Extension.ClearArr(this.joinPlayerUIdArr)
                for (let val of rsp.joinPlayerId) {
                    this.joinPlayerUIdArr.push(val)
                }
            }

            //抢庄时刻，确定房间的所有人。
            if (rsp.status == GameStatus.GrapBank) {
                Extension.ClearArr(this.joinPlayerUIdArr)
                for (let val of rsp.joinPlayerId) {
                    this.joinPlayerUIdArr.push(val)
                }
            }

            if (rsp.status == GameStatus.EnsureBank) {
                this.bankerUId = rsp.bankerId
            }

            if (rsp.status == GameStatus.Deal) {
                this.ClearClickCard()
                this.dealInfoArr = rsp.dealInfo
            }

            this.SendMessage(MessageNamesQNiuNiu.QNNPushRoomStatus, rsp)
        })
    }

    public ActionRes() {       //11005
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType, TCPSessionID.Hall, FiveNiuMsgDefine.MSG_FIVENIU_ACTION, (datas) => {
            let rsp: ActionRes = ActionRes.decode(datas)
            QNNPrintProto.ActionRes(rsp)
            this.SendMessage(MessageNamesQNiuNiu.QNNActionRes, rsp)
        })
    }

    public PushAction() {  //11006
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType, TCPSessionID.Hall, FiveNiuMsgDefine.MSG_PUSH_FIVENIU_ACTION, (datas) => {
            let rsp: PushAction = PushAction.decode(datas)
            QNNPrintProto.PushAction(rsp)
            this.SendMessage(MessageNamesQNiuNiu.QNNPushAction, rsp)
        })
    }


    public PushPlayerInfo() {  //11002
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType, TCPSessionID.Hall, FiveNiuMsgDefine.MSG_PUSH_FIVENIU_PLAYERINFO, (datas) => {
            let rsp: PushPlayerInfo = PushPlayerInfo.decode(datas)
            QNNPrintProto.PushPlayerInfo(rsp)

            this.PlayerEnter(rsp.player)

            this.SendMessage(MessageNamesQNiuNiu.QNNPlayAskEnter, rsp.player)
        })
    }

    public PushPlayerLeave() { //11003
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType, TCPSessionID.Hall, FiveNiuMsgDefine.MSG_PUSH_FIVENIU_PLAYER_LEAVE, (datas) => {
            let rsp: PushPlayerLeave = PushPlayerLeave.decode(datas)
            QNNPrintProto.PushPlayerLeave(rsp)

            this.PlayerLeave(rsp.playerId)

            this.SendMessage(MessageNamesQNiuNiu.QNNPlayAskLeave, rsp)
        })
    }

    private ActionReq(status, multiple = 0) {

        if (QNNConfig.useEditorModel) {
            return
        }

        let req: ActionReq = ActionReq.create()
        req.status = status
        req.multiple = multiple
        let reqData = ActionReq.encode(req).finish();
        QNNPrintProto.ActionReq(req)
        TCPNetwork.GetInstance().SendOneWayWithGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType, TCPSessionID.Hall, FiveNiuMsgDefine.MSG_FIVENIU_ACTION, reqData)
    }


    public Req_QiangZhuang(mutiple) {
        this.ActionReq(GameStatus.GrapBank, mutiple)
    }

    public Req_Touzhu(mutiple) {
        this.ActionReq(GameStatus.Bet, mutiple)
    }

    public Req_Fanpai() {
        this.ActionReq(GameStatus.Deal)
    }

    public Req_Chat(chatId) {
        let req = ChatReq.create()
        req.chatId = chatId
        TCPNetwork.GetInstance().SendOneWayWithGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType, TCPSessionID.Hall, FiveNiuMsgDefine.MSG_FIVENIU_CHAT, req)
    }

//////////////////////////////////////////////////////
    public GetLocalPlayerPos() {
        if (QNNConfig.useEditorModel) {
            return 1
        }
        return this.myPos
    }

    public GetLocalPlayerUId() {
        if (QNNConfig.useEditorModel) {
            return QNNConfig.editorLocalPlayerId
        }
        return this.myUId
    }


    ///////////////测试方法  --  start
    public Test_QNNPushPlayerInfo(datas: PushPlayerInfo) {
        let uId = datas.player.playerId
        let data = new PlayerUIdAndPos()
        data.uId = uId
        data.pos = datas.player.pos
        this.joinPlayerUIdArr.push(uId)
        this.allPlayerUIdAndPosArr.push(data)
    }

    public Test_QNNPushRoomInitData(datas: PushRoomInitData) {
        let uId = datas.players[0].playerId
        let data = new PlayerUIdAndPos()
        data.uId = uId
        data.pos = datas.players[0].pos
        this.joinPlayerUIdArr.push(uId)
        this.allPlayerUIdAndPosArr.push(data)
    }

    ///////////////测试方法  --  end


    public IsUIdJoinCurGame(uId: string): boolean {
        if (QNNConfig.useEditorModel) {
            return true
        }
        for (let val of this.joinPlayerUIdArr) {
            if (val == uId)
                return true
        }
        return false
    }

    public IsReadyJoin(pos: number): boolean {
        if (QNNConfig.useEditorModel) {
            return true
        }
        let status = this.GetFinalRoomStatus()
        if (status == GameStatus.GrapBank
            || status == GameStatus.DisPlay
            || status == GameStatus.EnsureBank
            || status == GameStatus.Bet
            || status == GameStatus.Deal
            || status == GameStatus.Settlement
        ) {
            if (!this.IsAbsPosJoinCurGame(pos)) {
                return false
            }
        }
        return true
    }

    public IsAbsPosJoinCurGame(pos: number): boolean {
        if (QNNConfig.useEditorModel) {
            return true
        }
        let tarUId = this.Pos2UId(pos)
        if (tarUId == null) {
            return false
        }
        for (let uId of this.joinPlayerUIdArr) {
            if (uId == tarUId)
                return true
        }
        return false
    }

    public Pos2UId(pos: number): string | null {        //pos是相对本地玩家的pos
        let tarUId: string | null = null

        for (let val of this.allPlayerUIdAndPosArr) {

            if (val.pos == pos) {
                tarUId = val.uId
                break
            }
        }
        return tarUId
    }

    public IsPosInRoom(pos: number): boolean {
        let tarUId = this.Pos2UId(pos)
        return tarUId != null
    }


    public GetDealInfoByPos(pos: number): DealInfo | null {
        if (QNNConfig.useEditorModel) {
            let tarUId = this.Pos2UId(pos)
            if (this.IsAbsPosJoinCurGame(pos) && tarUId != null) {
                let datas = QNNTstData.PushRoomStatus20()
                for (let val of datas.dealInfo) {
                    if (val.playerId == tarUId) {
                        return val as DealInfo
                    }
                }
            }
            return null
        }

        let tarUId = this.Pos2UId(pos)
        if (tarUId != null) {
            for (let val of this.dealInfoArr) {
                if (val.playerId == tarUId) {
                    return val as DealInfo
                }
            }
        }
        return null
    }

    public HasNiu(pos: number, cardKey: string): boolean {
        let dealInfo = this.GetDealInfoByPos(pos)
        if (dealInfo == null) {
            return false
        }
        if (dealInfo.niucards != null) {
            return dealInfo.niucards.length > 0
        }
        return false
    }

    public ShouldStandCard(pos: number, cardKey: string): boolean {
        if (!this.HasNiu(pos, cardKey)) {
            return false
        }
        let dealInfo = this.GetDealInfoByPos(pos)
        for (let val of dealInfo.niucards) {
            let niuCardKey = val.cardSize + "_" + val.cardColor
            if (niuCardKey == cardKey) {
                return false
            }
        }
        return true
    }

    public GetBankerId(): string {
        if (QNNConfig.useEditorModel) {
            return QNNConfig.editorLocalPlayerId
        }
        return this.bankerUId
    }

    public GetBankerPos(): number {
        if (QNNConfig.useEditorModel) {
            return 1
        }

        let bankerPos = -1
        for (let i = 1; i <= 5; i++) {
            if (this.Pos2UId(i) == this.bankerUId) {
                bankerPos = i
                break
            }
        }

        return bankerPos
    }

    public PosInGame(pos: number): boolean {
        for (let info of this.allPlayerUIdAndPosArr) {
            if (info.pos == pos) {
                return true
            }
        }
        return false
    }

    private ClearClickCard() {
        for (let val of this.clickCardArr) {
            val.Reset()
        }

    }

    private Clear() {
        this.ClearClickCard()
        this.allPlayerUIdAndPosArr = new Array<PlayerUIdAndPos>(
            new PlayerUIdAndPos(), new PlayerUIdAndPos(),
            new PlayerUIdAndPos(), new PlayerUIdAndPos(),
            new PlayerUIdAndPos(),
        )
        this.joinPlayerUIdArr = new Array<string>()
        this.dealInfoArr = null
        this.isByStander = false
    }

    private finalClickCardShowIndex = 0

    public ClickCard(datas: QNNClickCardData) {
        ++this.finalClickCardShowIndex
        datas.showIndex = this.finalClickCardShowIndex
        let index = datas.indexForm0
        let oldData = this.clickCardArr[index]
        if (!oldData.selectStatus) {//没有被选中
            if (this.GetClickCardCnt() < 3) {   //<3个添加选中
                datas.selectStatus = true
                this.clickCardArr[index] = datas
            }
        } else {  // 选中， 取消选中
            oldData.selectStatus = false
        }
    }

    public GetClickCardCnt(): number {
        let cnt = 0
        for (let val of this.clickCardArr) {
            if (val.selectStatus) {
                cnt++
            }
        }
        return cnt
    }

    public IsIndexCardSelect(indexForm0): boolean {
        return this.clickCardArr[indexForm0].selectStatus
    }

    public GetAllSizeTypeByClickSort(): Array<number> { //按照点击的顺序 返回sizeType
        let arr = new Array<number>()
        let arrHasSelect = new Array<any>()
        let hasClick = false
        for (let val of this.clickCardArr) {
            if (val.selectStatus) {
                hasClick = true
                arrHasSelect.push({
                    key: val.cardKey,
                    showIndex: val.showIndex,
                    sizeType: QNNCardConfigHelp.GetCardSizeType(val.cardKey),
                })
            }
        }
        if (hasClick) {
            arrHasSelect.sort((a, b) => {
                return a.showIndex - b.showIndex
            })
            for (let val of arrHasSelect) {
                arr.push(val.sizeType)
            }
        }
        return arr
    }

    public GIsByStander(): boolean {
        return this.isByStander
    }

    public GetFinalRoomStatus(): number {
        return this.finalRoomStatus
    }

    public Exit() {
        this.Clear()
    }

}
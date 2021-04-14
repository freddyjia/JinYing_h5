import QNNDatasFunc from "./QNNDatasFunc";
import Extension from "../../Tools/Extension";
import QNNSlotInfo from "./QNNSlotInfo";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import {
    GameStatus,
    IPlayerInfo,
    PushPlayerInfo,
    PushPlayerLeave,
    PushRoomInitData,
    PushRoomStatus
} from "../../Protos/QiangZhuangNiuNiu";
import QNNHelp from "./QNNHelp";
import AudioManager from "../../Manager/AudioManager";
import QNNConfig from "./QNNConfig";
import {Random} from "../../Tools/Random";
import Toast from "../../Tools/Toast";
import MessageCenter from "../../MVCFramework/MessageCenter";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class QNNSlotMgr implements IQNNMsg {

    private tPosToTarTrans = new Array<cc.Node>()
    private idToPlayerMsgInfo = {}
    private tAllUId: Array<string> = new Array<string>()
    private allPlayersTrans: Array<cc.Node> = new Array<cc.Node>()
    private arrPosToSlotInfo: Array<QNNSlotInfo> = new Array<QNNSlotInfo>()


    private trans: cc.Node;
    private datasFunc: QNNDatasFunc;


    private get_localPlayerPos() {
        return this.datasFunc.fGetLocalPlayerPos()
    }


    private _InitAllSlot() {
        for (let i = 0; i < 5; i++) {
            let trans = this.allPlayersTrans[i]
            trans.active = (false)
            let slotInfo = new QNNSlotInfo()
            slotInfo.Construction(trans, i, this.datasFunc)
            this.arrPosToSlotInfo[i] = slotInfo
        }
    }

    //-@param this ZJHPlayerSlotMgr
    private _AddNewPlayer(playerInfo: IPlayerInfo) {
        let pos = playerInfo.pos
        let playerId = playerInfo.playerId
        let relativeAbsPos = QNNHelp.AbsPosToRelativePos(playerInfo.pos, this.datasFunc.fGetLocalPlayerPos())
        let slotInfo = this.arrPosToSlotInfo[relativeAbsPos - 1]
        if (!slotInfo) {
            if(Global.showLog == true)
                cc.error('zjh _AddNewPlayer没有找到玩家的具体slotInfo！！！playerInfo.pos=' + (playerInfo.pos).toString() + '  offsetPos=' + (relativeAbsPos).toString())
            return
        }
        let slotUId = slotInfo.GetUId()
        if (slotUId == playerInfo.playerId) {
            if(Global.showLog == true)
                cc.warn('zjh 注意原来的位置上还有人，pos=' + (playerInfo.pos).toString())
        }
        slotInfo.PlayerEnter(playerInfo)
        let newUId = playerInfo.playerId
        this.idToPlayerMsgInfo[newUId] = slotInfo
        this.tAllUId.push(newUId)
    }

    private _InitAllPlayersInCreate(rsp: PushRoomInitData) {
        for (let val of rsp.players) {
            this._AddNewPlayer(val)
        }
    }

    private NotifyAll(msg: string, msgBody: any) {
        for (let val of this.arrPosToSlotInfo) {
            if (val.GetUId() != null) {
                val.PlayAnim(msg, msgBody)
            }
        }
    }

    private totalTime = 4
    private randomTimeInterval = 0.1
    private slowRandomTimeInterval = 0.2
    private tRandomZhuangTimerId: Array<string> = new Array<string>()
    private lastRandomFirstVal: string = ""
    private lastRandomEndVal: string = ""


    private RandomArr(t: Array<string>): Array<string> {
        if (t.length == 2) {
            if (
                (this.lastRandomFirstVal == t[0] && this.lastRandomEndVal == t[1])
                ||
                (this.lastRandomFirstVal == t[1] && this.lastRandomEndVal == t[0])
            ) {

            } else {
                this.lastRandomFirstVal = t[0]
                this.lastRandomEndVal = t[1]
            }
            return new Array<string>(this.lastRandomFirstVal, this.lastRandomEndVal)
        }
        let tab = new Array<string>()
        let tmpCopyT = new Array<string>()
        for (let val of t) {
            tmpCopyT.push(val)
        }
        while (tmpCopyT.length > 0) {
            let totalLen = tmpCopyT.length
            let n = Random.RangeInt(0, totalLen)
            if (tmpCopyT[n]) {
                let val = tmpCopyT[n]
                tab.push(val)
                tmpCopyT.splice(n, 1)
            }
        }
        return tab
    }

    private HideAllRandomZhuang() {
        for (let val of this.arrPosToSlotInfo) {
            val.SetRandomZhuangMarkActive(false)
        }
    }


    private fSelectOne(uId) {
        this.HideAllRandomZhuang()
        this.idToPlayerMsgInfo[uId].SetRandomZhuangMarkActive(true)
    }

    private _RandomZhuang(randomUIdArr: Array<string>, okCallback: () => void) {
        for (let val of this.tRandomZhuangTimerId) {
            Extension.CancelDelayCall(val)
        }
        Extension.ClearArr(this.tRandomZhuangTimerId)
        let timer = 0
        let outside = this
        let newT = outside.RandomArr(randomUIdArr)


        let repeatCnt = 10
        let curRepeatCnt = 0
        let tmpTimerId2 = Extension.DelayCall(() => {

            let delayTime = timer > 0.75 * outside.totalTime ? outside.slowRandomTimeInterval : outside.randomTimeInterval
            timer = timer + delayTime
            AudioManager.GetInstance().SoundPlay(QNNConfig.Audio.RandomSelectZhuang)

            let newDelayTime = timer > 0.75 * outside.totalTime ? outside.slowRandomTimeInterval : outside.randomTimeInterval
            let tmpTimerId1 = Extension.DelayCall(() => {
                if (newT.length == 0) {
                    newT = outside.RandomArr(randomUIdArr)
                }
                let tmpUId = newT.shift()
                outside.fSelectOne(tmpUId)
                ++curRepeatCnt
                if (curRepeatCnt >= repeatCnt) {
                    Extension.ClearArr(this.tRandomZhuangTimerId)
                    okCallback()
                }
            }, newDelayTime, null, repeatCnt)
            this.tRandomZhuangTimerId.push(tmpTimerId1)


        }, 0.5, null)
        outside.tRandomZhuangTimerId.push(tmpTimerId2)

    }

    private StopRandom(){
        let len = this.tRandomZhuangTimerId.length
        for(let i=0;i<len;i++){
            let timeId = this.tRandomZhuangTimerId.shift()
            Extension.CancelDelayCall(timeId)
        }
    }

    private RandomZhuang(zhuangUId, randomUIdArr: Array<string>) {
        if (randomUIdArr.length > 1) {
            MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNBlockQueue, {
                dynamicExecuteTime:1.7,
            })
            this._RandomZhuang(randomUIdArr, () => {

            })
            let fDelay = ()=>{
                this.StopRandom()
                this.fSelectOne(zhuangUId)
                MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNRandomZhuangAnimOk, {
                    uId: zhuangUId,
                    notEnterQueue: true,
                })
            }
            Extension.DelayCall(fDelay,1)
        } else {
            MessageCenter.SendMessage(MessageNamesQNiuNiu.QNNRandomZhuangAnimOk, {uId: zhuangUId, notEnterQueue: true})
        }

    }

    private AnimFapai(msgbody: PushRoomStatus) {
        if(Global.showLog == true)
        {
            cc.log("AnimFapai");
            cc.log(msgbody.dealInfo[0]);
        }
        
    }

    private PushPlayerLeave(msgBody: PushPlayerLeave) {
        let uId = msgBody.playerId
        let tmpTAllUId: Array<string> = new Array<string>()
        for (let val of this.tAllUId) {
            if (uId == val)
                continue
            tmpTAllUId.push(val)
        }
        this.tAllUId = tmpTAllUId
    }

    private PushRoomStatus(msgbody: PushRoomStatus) {
        if (msgbody.status == GameStatus.Start) {
        } else if (msgbody.status == GameStatus.DisPlay) {

        } else if (msgbody.status == GameStatus.GrapBank) {

        } else if (msgbody.status == GameStatus.EnsureBank) {
            if (msgbody.playerId.length > 0) {
                this.RandomZhuang(msgbody.bankerId, msgbody.playerId)
            }
        } else if (msgbody.status == GameStatus.Bet) {

        } else if (msgbody.status == GameStatus.Deal) {
            this.AnimFapai(msgbody)
        } else if (msgbody.status == GameStatus.Settlement) {

        } else if (msgbody.status == GameStatus.Stop) {

        }
    }

    PlayAnim(msg: string, msgBody: any): void {
        if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
            this._InitAllPlayersInCreate(msgBody as PushRoomInitData)
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerInfo) {
            this._AddNewPlayer(msgBody as IPlayerInfo)
        } else if (msg == MessageNamesQNiuNiu.QNNPushPlayerLeave) {
            this.PushPlayerLeave(msgBody as PushPlayerLeave)
        } else if (msg == MessageNamesQNiuNiu.QNNPushRoomStatus) {
            this.PushRoomStatus(msgBody as PushRoomStatus)
        } else if (msg == MessageNamesQNiuNiu.QNNActionRes) {
            if(Global.showLog == true)
                cc.log("MessageNamesQNiuNiu.QNNActionRes");
        } else if (msg == MessageNamesQNiuNiu.QNNPushAction) {

        }

        this.NotifyAll(msg, msgBody)


    }

    public Construction(trans: cc.Node, datas, datasFunc: QNNDatasFunc): QNNSlotMgr {

        Extension.ClearArr(this.tPosToTarTrans)
        Extension.ClearArr(this.tAllUId)


        this.datasFunc = datasFunc

        this.trans = trans

        let tmepTable = new Array<cc.Node>()
        for (let i = 0; i < 5; i++) {
            let tmpTrans = Extension.SearchNode(trans, "Player" + (i + 1))
            tmepTable[i] = tmpTrans
            tmpTrans.active = (false)
        }
        this.allPlayersTrans = tmepTable

        this._InitAllSlot()

        return this

    }

    Exit(): void {
    }


}
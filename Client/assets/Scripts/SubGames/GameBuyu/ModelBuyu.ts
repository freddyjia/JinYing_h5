import TimerManager from "../../Components/TimerManager";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import Global from "../../Global/Global";
import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";

import { AppearFishInfo, AsycFishInfo, BulletBoom, ChangeTable, FishBossTip, PlayerJoin, PlayerLeave, PTUpDown, PTUpDownBack, reqRoomInfo, RoomInfo, rspRoomInfo, SheetBuleet, SheetBuleetBack, SpecialDead, SyncBullet } from "../../Protos/BuYu";
import { BuYuMsgDefine } from "../../Protos/MessageDefine_BuYu";
import Extension from "../../Tools/Extension";
import BuYuConfig from "./Configs/BuYuConfig";
import MessageNamesBY from "./MessageNamesBY";
import FishTools from "./Tools/FishTools";
class SeatInfo {
    public seatId: number
    public seatUiPos: number
    public uId: string

}
export default class ModelBuYu extends Model {
    //炮台玩家金币
    private seatidLeftGold: Array<number> = [0, 0, 0, 0, 0];
    //炮台类型
    private seatPTType: Array<number> = [1, 1, 1, 1, 1];
    //roomID
    private roomID = 0;
    private myUId: string = '';
    //自己的seatId
    private mySeatId: number = 4;
    private enterRoomIdFrom0 = 0;
    private seatInfoArr = new Array<SeatInfo>()
    public isAutoStatus = false;
    public isLockStatus = false;
    private serverTime: number;
    private CountTime: number;
    private Time: Date;
    public Init() {
        this.RspRoomInfo();
        this.RoomInfo();
        this.PlayerJoin();
        this.PlayerLeave();
        this.SyncBullet();
        this.SheetBuleetBack();
        this.BulletBoom();
        this.AsycFishInfo();
        this.AppearFishInfo();
        this.SpecialDead();
        this.PTUpDownBack();
        this.FishBossTip();
        this.Time = new Date();

    }
    private RspRoomInfo() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_REQ_ROOM_INFO, (datas) => {
            cc.log("@@@@@ RspRoomInfo")
            this.CountTime = 0;
            let rsp: rspRoomInfo = rspRoomInfo.decode(datas)
            for (let i = 0; i < rsp.playerInfos.length; i++) {
                let info = rsp.playerInfos[i]
                let seatId = info.seatid
                this.seatidLeftGold[seatId] = info.gold
                this.seatPTType[seatId] = info.ptType
            }
            this.SendMessage(MessageNamesBY.RspRoomInfo, rsp)
        })
    }
    private RoomInfo() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_ROOM_INFO, (datas) => {

            this.CountTime = 0;
            let rsp: RoomInfo = RoomInfo.decode(datas)
            this.enterRoomIdFrom0 = rsp.RoomID - 8000
            for (let i = 0; i < rsp.playerInfos.length; i++) {
                let playerInfo = rsp.playerInfos[i]
                if (playerInfo.playerId == Global.PlayerInfo.playerId) {
                    this.myUId = playerInfo.playerId;
                    this.mySeatId = playerInfo.seatid;
                }
                let seatId = playerInfo.seatid;
                this.seatidLeftGold[seatId] = playerInfo.gold;
                this.seatPTType[seatId] = playerInfo.ptType;

            }

            for (let i = 0; i < rsp.playerInfos.length; i++) {
                let playerInfo = rsp.playerInfos[i]
                this.PlayerEnter(playerInfo.playerId, playerInfo.seatid)
                // this.FlshBulletSpeed(playerInfo.speed, playerInfo.seatid)
            }
            if (this.mySeatId == -1) {
                // cc.error("严重错误!!!! 没有找到玩家自己的座位!!!!!!")
            }
            this.serverTime = Number(rsp.serverTime);

            this.CountTime = new Date().getTime() - this.serverTime;
            cc.log("@@@@@ RoomInfo", new Date().getTime(), this.serverTime, this.CountTime)
            //  cc.log("serverTime", rsp.serverTime, this.Time.getTime())
            this.SendMessage(MessageNamesBY.RoomInfo, rsp)
            // TimerManager.GetInstance().CallActionDelay(() => {
            //     this.CountTime += BuYuConfig.FrameTime;
            //     cc.log("CountTime", this.CountTime)
            // }, BuYuConfig.FrameTime, null, 100000000000000000, BuYuConfig.FrameTime)
        })
    }
    private PlayerJoin() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_Player_Join, (datas) => {
            // cc.error("@@@@@ PlayerJoin")
            let rsp: PlayerJoin = PlayerJoin.decode(datas)
            let seatId = rsp.playerInfos.seatid
            this.seatidLeftGold[seatId] = rsp.playerInfos.gold
            this.seatPTType[seatId] = rsp.playerInfos.ptType
            this.PlayerEnter(rsp.playerInfos.playerId, rsp.playerInfos.seatid)
            // this.FlshBulletSpeed(rsp.playerInfos.speed, rsp.playerInfos.seatid)
            this.SendMessage(MessageNamesBY.PlayerJoin, rsp)
        })
    }
    private PlayerLeave() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_Player_Leave, (datas) => {
            // cc.error("@@@@@ PlayerLeave")
            let rsp: PlayerLeave = PlayerLeave.decode(datas)
            this.SendMessage(MessageNamesBY.PlayerLeave, rsp)
        })
    }
    private SyncBullet() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_SyncBullets, (datas) => {

            let rsp: SyncBullet = SyncBullet.decode(datas)
            // cc.error("@@@@@ SyncBullet", rsp)
            this.SendMessage(MessageNamesBY.SyncBullet, rsp)

        })
    }
    private SheetBuleetBack() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_Sheet_BulletBack, (datas) => {
            // cc.error("@@@@@ SheetBuleetBack")
            let rsp: SheetBuleetBack = SheetBuleetBack.decode(datas)

            this.seatidLeftGold[rsp.seatid] = rsp.playerGold
            // if (this.mySeatId == rsp.seatid) {
            //     cc.log("我的射击")
            //     this.SendMessage(MessageNamesBY.SheetBuleetBack, rsp)
            // }


            //   cc.log("最后锁定。。。", rsp.LockFishID)
            this.SendMessage(MessageNamesBY.SheetBuleetBack, rsp)



        })
    }

    private PlayerEnter(uId: string, seatId: number) {
        for (let val of this.seatInfoArr) {
            if (val.uId == uId) {
                val.seatId = seatId
                val.seatUiPos = this.GetUIPos(seatId)
                return
            }
        }
        let data = new SeatInfo()
        data.uId = uId
        data.seatId = seatId
        data.seatUiPos = this.GetUIPos(seatId)
        this.seatInfoArr.push(data)
    }
    private BulletBoom() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_Bullet_Boom, (datas) => {
            // cc.error("@@@@@ BulletBoom")
            let rsp: BulletBoom = BulletBoom.decode(datas)
            let seatId = rsp.seatid
            this.seatidLeftGold[seatId] = rsp.playerGold
            this.SendMessage(MessageNamesBY.BulletBoom, rsp)
        })
    }
    private AsycFishInfo() {

        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_ASYC_Fish, (datas) => {
            // cc.error("@@@@@ AsycFishInfo")
            let rsp: AsycFishInfo = AsycFishInfo.decode(datas)

            this.SendMessage(MessageNamesBY.AsycFishInfo, rsp)
        })

    }
    private AppearFishInfo() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_appear_Fish, (datas) => {
            // cc.error("@@@@@ AppearFishInfo")
            let rsp: AppearFishInfo = AppearFishInfo.decode(datas)

            this.SendMessage(MessageNamesBY.AppearFishInfo, rsp)

        })
    }

    private SpecialDead() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_SpecialDead, (datas) => {
            // cc.error("@@@@@ SpecialDead")
            let rsp: SpecialDead = SpecialDead.decode(datas)
            this.SendMessage(MessageNamesBY.SpecialDead, rsp)
        })
    }
    public SheetBuleet(angle: number, dirX: number, dirY: number, LockFishID: number) {
        let req: SheetBuleet = SheetBuleet.create()
        let newLockFishKey = -1
        if (FishTools.ExitFishKey(LockFishID)) {
            newLockFishKey = Number(LockFishID)
        }
        req.angle = Extension.FormatNumber(angle, 2)
        req.dirX = Extension.FormatNumber(dirX, 2)
        req.dirY = Extension.FormatNumber(dirY, 2)
        req.LockFishID = newLockFishKey
        let reqData = SheetBuleet.encode(req).finish()
        TCPNetwork.GetInstance().SendOneWayWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_REQ_Sheet_Bullet, reqData)
    }
    public ReqChangePT(currentType: number) {
        let req: PTUpDown = PTUpDown.create()
        req.PtType = currentType;
        let reqData = PTUpDown.encode(req).finish()
        TCPNetwork.GetInstance().SendOneWayWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_REQ_PTUpDown, reqData)
    }
    public ReqChangeTable() {
        let req = ChangeTable.create()
        let reqData = ChangeTable.encode(req).finish()
        TCPNetwork.GetInstance().SendWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_REQ_Change_Table, reqData, () => {
            cc.log("换桌子")
            this.SendMessage(MessageNamesBY.ChangeTable)
        })
    }
    private PTUpDownBack() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_PTUpDown, (datas) => {
            cc.error("@@@@@ PTUpDownBack")
            let rsp: PTUpDownBack = PTUpDownBack.decode(datas)
            this.seatPTType[rsp.seatid] = rsp.PtType
            this.SendMessage(MessageNamesBY.PTUpDownBack, rsp)
        })
    }

    private FishBossTip() {
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.BY.gameType, TCPSessionID.Hall, BuYuMsgDefine.MSG_BuYu_PUSH_Tip, (datas) => {
            cc.error("@@@@@ FishBossTip")
            let rsp: FishBossTip = FishBossTip.decode(datas)
            this.SendMessage(MessageNamesBY.FishBossTip, rsp)

        })
    }

    //炮台位置转换 返回UI对应index 1,2,3,4
    public GetUIPos(seatId: number) {
        if (this.mySeatId <= 2) {
            return seatId;
        }
        return 5 - seatId;
    }
    public GetEnterRoomIdFrom0(): number {
        return this.enterRoomIdFrom0;
    }
    public GetRoomInfo() {
        let req = reqRoomInfo.create()
        req.RoomID = this.roomID
        let reqData = reqRoomInfo.encode(req).finish();
        return reqData;
    }
    public SetRoomID(id: number) {
        this.roomID = id;
    }
    public PaySucc() {
        let gold = Global.PlayerInfo.PlayerCurrency.Gold
        let seatId = this.GetMSeatId()
        this.seatidLeftGold[seatId] = gold
    }
    public GetMSeatId() {
        return this.mySeatId
    }
    public Exit() {
        this.seatPTType = [1, 1, 1, 1, 1];
        this.seatInfoArr = [];
        this.isLockStatus = false;
        this.isAutoStatus = false;
    }
    public UId2UIPos(uId: string) {
        let uiPos = -1
        for (let i = 0; i < this.seatInfoArr.length; i++) {
            let info = this.seatInfoArr[i]
            if (info.uId == uId) {
                return info.seatUiPos
            }
        }
        if (uiPos == -1) {
            // cc.error("严重错误!! uId没有找到uiPos!!!")
        }
        return uiPos;
    }
    public GetSheetDelayTime() {
        let speedLevel = this.GetBulletSpeed(this.mySeatId)
        let delay = 0.2
        if (speedLevel == 1) {
            delay = 0.21
        } else if (speedLevel == 2) {
            delay = 0.15
        } else if (speedLevel == 3) {
            delay = 0.10
        }
        return delay;
    }
    public GetBulletSpeed(seatId: number) {
        return BuYuConfig.bulletSpeed
    }
    public LockStatusChange(bool) {
        this.isLockStatus = bool
    }

    public AutoStatusChange(bool) {
        this.isAutoStatus = bool
    }

    public GetLockStatus(): boolean {
        return this.isLockStatus
    }

    public GetAutoStatus(): boolean {
        return this.isAutoStatus
    }
    public GetClientTime(): number {
        return this.Time.getTime();
    }
    public GetServerTime(): number {
        return this.serverTime;
    }
    public GetCountTime(): number {
        return this.CountTime;
    }
    public getLeftGold(seatID): number {
        return this.seatidLeftGold[seatID]
    }


}

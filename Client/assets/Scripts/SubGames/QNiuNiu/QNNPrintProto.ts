import {
    ActionReq,
    ActionRes,
    GameStatus,
    PushAction,
    PushPlayerInfo,
    PushPlayerLeave,
    PushRoomInitData,
    PushRoomStatus
} from "../../Protos/QiangZhuangNiuNiu";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class QNNPrintProto {

    private static allowPrintProto = true
    private static allowPrintLog = true

    private static log(content: string) {
        if (QNNPrintProto.allowPrintLog) {
            if(Global.showLog == true)
                cc.log(content)
        }
    }

    private static PrintProto(msgBody: any) {
        if (QNNPrintProto.allowPrintProto) {
            if(Global.showLog == true)
                cc.log(msgBody);
        }
    }

    private static fGameStatus(status: GameStatus): string {
        let content = ""
        if (status == GameStatus.Start) {
            content = "  开始 "
        } else if (status == GameStatus.DisPlay) {
            content = "  播放 "
        } else if (status == GameStatus.GrapBank) {
            content = "  抢庄 "
        } else if (status == GameStatus.EnsureBank) {
            content = "  定庄 "
        } else if (status == GameStatus.Bet) {
            content = "  押注 "
        } else if (status == GameStatus.Deal) {
            content = "  发牌 ,请求摊牌"
        } else if (status == GameStatus.Settlement) {
            content = "  结算 "
        } else if (status == GameStatus.Stop) {
            content = "  开局停止 "
        }
        return content
    }

    public static PushRoomInitData(rsp: PushRoomInitData) {
        let content = "初始化信息" + QNNPrintProto.fGameStatus(rsp.status)
        QNNPrintProto.log(content)
        QNNPrintProto.PrintProto(rsp)
    }

    public static PushRoomStatus(rsp: PushRoomStatus) {
        let content = "推送房间状态" + QNNPrintProto.fGameStatus(rsp.status)
        QNNPrintProto.log(content)
        QNNPrintProto.PrintProto(rsp)
    }

    public static ActionRes(rsp: ActionRes) {
        let content = "玩家操作返回 " + rsp.success + " tip=" + rsp.tips
        QNNPrintProto.log(content)
        QNNPrintProto.PrintProto(rsp)
    }

    public static PushAction(rsp: PushAction) {
        let content = "推送玩家动作" + QNNPrintProto.fGameStatus(rsp.status)
        content = content + "   uId=" + rsp.playerId
        QNNPrintProto.log(content)
        QNNPrintProto.PrintProto(rsp)
    }

    public static PushPlayerInfo(rsp: PushPlayerInfo) {
        let content = "推送玩家信息 uId=" + rsp.player.playerId
        QNNPrintProto.log(content)
        QNNPrintProto.PrintProto(rsp)
    }

    public static PushPlayerLeave(rsp: PushPlayerLeave) {
        let content = "推送玩家离开 uId=" + rsp.playerId
        QNNPrintProto.log(content)
        QNNPrintProto.PrintProto(rsp)
    }

    public static ActionReq(req: ActionReq) {
        let content = "玩家请求操作 status=" + this.fGameStatus(req.status) + "  multiple" + req.multiple.toString()
        QNNPrintProto.log(content)
        QNNPrintProto.PrintProto(req)
    }

}
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import Global from "../../Global/Global";
import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { EmptyReq } from "../../Protos/Common";
import { ObTiYuMsgDefine } from "../../Protos/MessageDefine_ObTiYu";
import { LoginThirdGameReq, LoginThirdGameRsp } from "../../Protos/ObTiYu";
import UploadAnalytics from "../../Tools/UploadAnalytics";
import MessageNamesObTiYu from "./MessageNamesObTiYu";

export default class ModelObTiYu extends Model {
    readonly gameType: number = GameTypeMgr.Config.OBTiYu.gameType;
    public webViewURL: string = "";
    private platform: string = "pc";
    public Init() {
        this.AddListenTCP();
    }

    AddListenTCP() {
        cc.log("live监听..")
        TCPNetwork.GetInstance().ListenMsgWithGameType(this.gameType, TCPSessionID.Hall, ObTiYuMsgDefine.MSG_ObTiYu_PUSH_ROOM_INFO, (data) => {
            cc.log("liveData", data)
            this.reqLoginThirdGame();
        })
    }
    public reqLoginThirdGame() {
        cc.log("IP-----", Global.selfIPAddress)
        let req = LoginThirdGameReq.create();

        if (UploadAnalytics.GetPlatform() == "Editor") {
            this.platform = "pc";
        } else {
            this.platform = UploadAnalytics.GetPlatform();
        }
        req.platform = this.platform.toLocaleLowerCase();
        if (Global.isRelease == true)
            req.ip = Global.selfIPAddress;
        else
            req.ip = "127.0.0.1";

        cc.log("reqData", req)
        let reqData = LoginThirdGameReq.encode(req).finish();

        TCPNetwork.GetInstance().SendWithGameType(this.gameType, TCPSessionID.Hall, ObTiYuMsgDefine.MSG_ObTiYu_LOGIN_THIRD_GAME, reqData,
            (data) => {
                let resData = LoginThirdGameRsp.decode(data);
                this.webViewURL = resData.gameUrl;
                this.SendMessage(MessageNamesObTiYu.OpenObTiYuView)
            },
            (err) => {
                cc.error("err", err)
            });
    }
    public reqLoginObTiYu() {
        let req = EmptyReq.create();
        let senddata = EmptyReq.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall, ObTiYuMsgDefine.MSG_ObTiYu_LOGIN_ROOM, senddata);
    }


}
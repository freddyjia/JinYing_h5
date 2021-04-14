import { GameTypeMgr } from "../../Global/GameTypeMgr";
import Global from "../../Global/Global";
import LocalStorageKey from "../../Global/LocalStorageKey";
import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { EmptyReq } from "../../Protos/Common";
import { LoginThirdGameReq, LoginThirdGameRsp } from "../../Protos/LiveVideo";
import { LiveVideoMsgDefine } from "../../Protos/MessageDefine_LiveVideo";
import MessageNamesLiveVideo from "./MessageNamesLiveVideo";

export default class ModelLiveVideo extends Model {
    readonly gameType: number = GameTypeMgr.Config.LiveVideo.gameType;
    public webViewURL:string="";
    public Init() {
        this.AddListenTCP();
    }
    public Clean() {


    }
    AddListenTCP() {
        cc.log("live监听..")
        TCPNetwork.GetInstance().ListenMsgWithGameType(this.gameType,TCPSessionID.Hall, LiveVideoMsgDefine.MSG_LiveVideo_PUSH_ROOM_INFO, (data) => {
            cc.log("liveData", data)
            this.reqLoginThirdGame();
        })
    }
    public reqLoginThirdGame() {
        cc.log("IP-----", Global.selfIPAddress)
        let req = LoginThirdGameReq.create();
        if (Global.isRelease == true)
            req.ip = Global.selfIPAddress;
        else
            req.ip = "127.0.0.1";

        req.platform = cc.sys.platform.toString();
        cc.log("reqData", req)
        let reqData = LoginThirdGameReq.encode(req).finish();

        TCPNetwork.GetInstance().SendWithGameType(this.gameType,TCPSessionID.Hall, LiveVideoMsgDefine.MSG_LiveVideo_LOGIN_THIRD_GAME, reqData,
            (data) => {
                let resData = LoginThirdGameRsp.decode(data);
                this.webViewURL=resData.gameUrl;
                this.SendMessage(MessageNamesLiveVideo.OpenLiveVideoShow)
            },
            (err) => {
                cc.error("err", err)
            });
    }
    public reqLoginLiveVideo() {
        let req = EmptyReq.create();
        let senddata = EmptyReq.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall, LiveVideoMsgDefine.MSG_LiveVideo_LOGIN_ROOM, senddata);
    }
}
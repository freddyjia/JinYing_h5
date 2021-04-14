import Model from "../../MVCFramework/Model";
import HttpRequest from "../../Network/Http/HttpRequest";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { LoginReq, LoginRes, GameStatusInfo } from "../../Protos/Login";
import MD5 from "../../Tools/MD5";
import { LoginMsgDefine, PingMsgDefine, GameCommonMsgDefine, PlayerRoleMsgDefine, CommonMsgDefine, HallMsgDefine } from "../../Protos/MessageDefine";
import TimerManager from "../../Components/TimerManager";
import { PingReq } from "../../Protos/Ping";
import Dialog from "../../Tools/Dialog";
import Global from "../../Global/Global";
import { KickoutToLogin } from "../../Protos/RedBlackBattle";
import { PlayerInfoRes } from "../../Protos/PlayerRole";
import Res from "../../Global/Res";
import MessageNames from "../MessageNames";
import OpenNetworkingUI from "../../Tools/OpenNetworkingUI";
import Toast from "../../Tools/Toast";
import { Random } from "../../Tools/Random";
import LocalStorageKey from "../../Global/LocalStorageKey";
import { CommonUpTipsRes } from "../../Protos/Common";
import ConstStr from "../../Global/ConstStr";
import ccC from "../../Tools/ccC";
import { PushChannelAsset } from "../../Protos/HallData";

export default class ModelLogin extends Model {
    private access_token: string;
    private userid: string;//用于tcp handshake
    private socketHosts: Array<string>;
    private tryHallIPIndex: number = 0;
    private socketPort: string;
    private lastPingResTime: number;
    private date = new Date();
    private pingTimer;
    private pingCheckerTimer;
    private haveShowLogOut: boolean;
    private haveDsiconnectTCPSession: boolean;
    private lastSendPingTime;

    private InitLocalStorge() {
        if (localStorage.getItem(LocalStorageKey.Deviceid) == null) {
            localStorage.setItem(LocalStorageKey.Deviceid, this.GenDeviceID());
        }

        let loginPhone = localStorage.getItem(LocalStorageKey.LoginPhone);
        if (loginPhone == null) {
            localStorage.setItem(LocalStorageKey.LoginPhone, "");
        }

        let loginPassword = localStorage.getItem(LocalStorageKey.LoginPassword);
        if (loginPassword == null) {
            localStorage.setItem(LocalStorageKey.LoginPassword, "");
        }

        let rememberAccount = localStorage.getItem(LocalStorageKey.RememberAccount);
        if (rememberAccount == null) {
            localStorage.setItem(LocalStorageKey.RememberAccount, "1");
        }

        let loginUid = localStorage.getItem(LocalStorageKey.LoginUid);
        if (loginUid == null) {
            localStorage.setItem(LocalStorageKey.LoginUid, "");
        }
    }

    public Init() {
        this.InitLocalStorge();

        TCPNetwork.GetInstance().Init(TCPSessionID.Hall);
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, GameCommonMsgDefine.MSG_KICK_OUT_TO_LOGIN, (data) => {
            if (Global.showLog == true)
                cc.error("玩家踢出登录界面");
            let res = KickoutToLogin.decode(data);
            Global.LogOut("被强制返回登录界面:" + res.tips);
            Toast.Show("被强制返回登录界面:" + res.tips);
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, PlayerRoleMsgDefine.SM_PUSH_ROLE_DATA, (data) => {
            if (Global.showLog == true)
                cc.error("玩家个人信息推送");
            let res = PlayerInfoRes.decode(data);
            cc.log("res  " + res);
           
            Global.SetPlayerInfo(
                res.playerInfo.playerID.toString(),
                res.playerInfo.username,
                res.playerInfo.headImageUrl,
                res.playerInfo.mobileNum,
                res.playerInfo.vipLv,
                res.playerInfo.nameSign,
                res.playerInfo.isFirstChargePackage,
                res.playerInfo.headbox == null ? Res.DefaultHeadBoxSprite : res.playerInfo.headbox,
                res.playerInfo.isChangeName,
                res.playerInfo.leaderID,
                res.playerInfo.totalCharge
            )
            this.SendMessage(MessageNames.SyncPlayerInfo);
            this.SendMessage(MessageNames.UploadLeaderId);
            //TODO:保存信息到本地

        });


        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, LoginMsgDefine.MSG_GAME_STATUS_RESPONSE, (data) => {
            let res = GameStatusInfo.decode(data);
            this.SendMessage(MessageNames.GameStatusResponseUpdate, res)
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, CommonMsgDefine.SM_SEND_COMMON_UPPER_TIPS, (data) => {
            let res = CommonUpTipsRes.decode(data);
            Toast.Show(res.tips);
        })
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, HallMsgDefine.MSG_PUSH_CHANNEL_ASSET, (data) => {

            let res = PushChannelAsset.decode(data);
            let datares = JSON.parse(res.channelAsset);
            Global.SetVipChannelAsset(datares["delayPaoMaDeng"],
                datares["iMServerAddress"],
                datares["replaceChart"],
                datares["isSpecialChannel"],
                datares["delaySurprise"],
                datares["isChangeYuantoGold"],
                datares["guideGameType"],
                datares["delayExchange"],
                datares["customerServiceAddress"],
                datares["promoterLink"],
                datares["delayKeFu"],
                datares["changeGameCode"],
                datares["isMailOnlyShowCT"],
                datares["removeSubGame"],
                datares["officialWebsite"],
                datares["changeAppName"],
                datares["delayDeleteSeting"],
                datares["delayShowDaiLi"],
                datares["guideGame"],
                datares["channelName"],
                datares["delayTuiGuangYuan"]
            )
            cc.log("8057地址", Global.VIpChannelAsset.iMServerAddress)
        })
    }
    //--------------------------> Http

    private CheckPhone(phoneNum): boolean {
        let reg = new RegExp(/^1[34578]\d{9}$/);
        if (phoneNum.length == 0 || reg.test(phoneNum) == false) {
            Toast.Show("请输入正确的手机号码");
            return false;
        }
        return true;
    }

    public LoginFormal(phoneNum: string, password: string, verifyCode: string) {

        if (this.CheckPhone(phoneNum) == false)
            return;

        this.RequestHttpLogin(phoneNum, "", "", password, verifyCode, () => {
            localStorage.setItem(LocalStorageKey.LoginPhone, phoneNum);
            localStorage.setItem(LocalStorageKey.LoginPassword, password);
        }, () => {
            Toast.Show("网络请求错误");
        });
    }

    public OneKeyLogin() {
        //this.RequestHttpLogin(phoneNum,"","",password,verifyCode);
        //检查userid 密码 是否存在，有的话就登录userid 密码，否则用deviceid注册
        if (localStorage.getItem(LocalStorageKey.LoginUid).length > 0) {
            this.RequestHttpLogin("", "", localStorage.getItem(LocalStorageKey.LoginUid),
                localStorage.getItem(LocalStorageKey.LoginPassword), "", () => {

                }, () => {
                    Toast.Show("网络请求错误");
                });
        }
        else {
            this.RequestHttpLogin("", this.GenDeviceID(), "", "", "", () => {
                localStorage.setItem(LocalStorageKey.LoginPassword, "");
            }, () => {
                Toast.Show("网络请求错误");
            });
        }
    }

    private GenDeviceID() {
        return Date.now().toString() + Random.RangeInt(0, 10000).toString();
    }

    //登录服Http ip
    public EditorLogin(ip: string, port: string, userid: string, deviceid: string) {
        let protocol = document.location.protocol;
        if (Global.showLog == true)
            cc.error("------->protocol  " + protocol);

        if (userid.length == 0) {
            deviceid = this.GenDeviceID();//Date.now().toString();
        }
        else {
            deviceid = localStorage.getItem(LocalStorageKey.Deviceid);
        }

        let url = protocol + "//" + ip + ":" + port;
        Global.loginAddress = url;

        this.RequestHttpLogin("", deviceid, userid, "", "", () => {

        }, () => {

        });
    }

    private RequestHttpLogin(mobilenum, deviceid, userid, password, smsCode, successCallback, failcallback) {

        let ipDic: { [name: string]: string } = {};
        ipDic["ip"] = Global.selfIPAddress;
        ipDic["country"] = "";
        ipDic["timezone"] = "";
        ipDic["city"] = "";

        let postParm: { [name: string]: string | number | { [name: string]: string } } = {};
        postParm["appid"] = "sharpknife";
        postParm["type"] = 0;
        postParm["promoid"] = 1;
        postParm["mobilenum"] = mobilenum;
        postParm["deviceid"] = deviceid;
        // cc.error("*******send userid " + username + " deviceid " + deviceid);
        postParm["userid"] = userid;
        postParm["password"] = password;
        postParm["ip"] = ipDic;
        postParm["smsCode"] = smsCode;
        postParm["channel"] = Global.channel;

        // cc.error("postParm " + postParm);

        OpenNetworkingUI.Show();

        // let protocol = document.location.protocol;
        // cc.error("------->protocol  " + protocol);

        HttpRequest.Post(Global.GetLoginPath(), postParm, (data) => {

            // OpenNetworkingUI.Hide();
            /**
             * {
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyYTgxMjNlOS00NDdlLTQ1ZmEtOTJkMC1hMjI1NTU2ZDFjZWYiLCJpYXQiOjE1NDgzMzIxMTQsInN1YiI6ImtvbGE0eG1lbiIsImlzcyI6ImtsMzIxLmNvbSIsImFpZCI6InNuYWtlIiwidWlkIjoiNDUzNSIsInR0IjoiYWNjZXNzIiwiZXhwIjoxNTQ4MzQyOTE0fQ.DeHS7wD2yMNP129xXegQFsuspA1xqYBf7Zy9u5L5XUk",
        "server": "{\"hall\":false,\"host\":\"192.168.9.103\",\"httpPort\":0,\"id\":\"192.168.9.103_1876\",\"mutipleIpList\":[\"192.168.9.103\"],\"port\":1876,\"type\":0}",
        "maskid": "abcc",
        "type": 0,
        "userid": "4535",
        "userinfo": "",
        "username": "KL-4535"
    }
             * 
             */
            if (Global.showLog == true)
                cc.error("HttpRequest data " + data);

            let jsonData = JSON.parse(data);
            if (jsonData["errcode"] != null) {
                Toast.Show("登录失败:" + jsonData["errmsg"]);
                OpenNetworkingUI.Hide();
            }
            else {
                this.access_token = jsonData["access_token"];
                this.userid = jsonData["userid"];
                let deviceidRes = jsonData["deviceid"];
                if (deviceidRes == null) {
                    deviceidRes = "";
                }
                localStorage.setItem(LocalStorageKey.Deviceid, deviceidRes);

                let serverJson = JSON.parse(jsonData["server"]);
                this.socketHosts = serverJson["mutipleIpList"];
                this.socketPort = serverJson["webSocketPort"];

                localStorage.setItem(LocalStorageKey.LoginUid, this.userid);

                this.ConnectTCPAndLoginHall(successCallback);
            }

        }, (err) => {
            Toast.Show("网络请求失败");
            failcallback();
            OpenNetworkingUI.Hide();
            cc.error("err =============== " + err);
        }, 10000);
    }

    private ConnectTCPAndLoginHall(successCallback) {
        let index = this.tryHallIPIndex % this.socketHosts.length;

        TCPNetwork.GetInstance().SetUidToker(TCPSessionID.Hall, this.userid, this.access_token);
        TCPNetwork.GetInstance().Connect(TCPSessionID.Hall, this.socketHosts[index], this.socketPort, () => {

            this.LoginHall(() => {
                OpenNetworkingUI.Hide();
                successCallback();
                this.SendMessage(MessageNames.RequeseHallData, null);
            }, () => {
                OpenNetworkingUI.Hide();
                cc.error("login fail");
            });
            this.InitPing();

        }, (errmsg) => {
            OpenNetworkingUI.Hide();
            cc.error("fail " + errmsg);
            // funcFail(errmsg);
            Toast.Show("登录失败:" + errmsg);
            this.tryHallIPIndex++;
            index = this.tryHallIPIndex % this.socketHosts.length;
            TCPNetwork.GetInstance().RefreshIPAndPort(TCPSessionID.Hall, this.socketHosts[index], this.socketPort);
        });
    }

    public ChangePsd(mobilenum, password, confirmPwd, smsCode, successCallback, failcallback) {

        let postParm: { [name: string]: string | number | { [name: string]: string } } = {};
        postParm["phoneNo"] = mobilenum;
        postParm["password"] = password;
        postParm["checkCode"] = smsCode;
        postParm["confirmPassword"] = confirmPwd;
        postParm["channel"] = Global.channel;

        HttpRequest.Post(Global.GetResetPasswordPath(), postParm, (data) => {

            // OpenNetworkingUI.Hide();
            if (Global.showLog == true)
                cc.error("HttpRequest data " + data);

            let jsonData = JSON.parse(data);
            if (jsonData["errcode"] != null) {
                Toast.Show("修改密码失败:" + jsonData["errmsg"]);
                OpenNetworkingUI.Hide();
                failcallback();
            }
            else {
                localStorage.setItem(LocalStorageKey.LoginUid, jsonData["userid"]);
                localStorage.setItem(LocalStorageKey.LoginPhone, mobilenum);
                localStorage.setItem(LocalStorageKey.LoginPassword, password);

                this.SendMessage(MessageNames.RegisterSucess);
                successCallback();
            }

        }, (err) => {
            Toast.Show("网络请求失败");
            failcallback();
            OpenNetworkingUI.Hide();
            cc.error("err =============== " + err);
        }, 10000);
    }

    public Register(mobilenum, password, confirmPwd, smsCode, successCallback, failcallback) {
        if (Global.showLog == true)
            cc.error("mobilenum  " + mobilenum + " password " + password + " confirmPwd " + confirmPwd
                + " smsCode " + smsCode);

        let ipDic: { [name: string]: string } = {};
        ipDic["ip"] = Global.selfIPAddress;
        ipDic["country"] = "";
        ipDic["timezone"] = "";
        ipDic["city"] = "";

        let postParm: { [name: string]: string | number | { [name: string]: string } } = {};
        postParm["appid"] = "sharpknife";
        postParm["type"] = 0;
        postParm["promoid"] = 1;
        postParm["mobilenum"] = mobilenum;
        postParm["password"] = password;
        postParm["ip"] = ipDic;
        postParm["smsCode"] = smsCode;
        postParm["confirmPwd"] = confirmPwd;
        postParm["channel"] = Global.channel;
        postParm["deviceid"] = this.GenDeviceID();

        HttpRequest.Post(Global.GetRegPath(), postParm, (data) => {

            // OpenNetworkingUI.Hide();
            if (Global.showLog == true)
                cc.error("HttpRequest data " + data);

            let jsonData = JSON.parse(data);
            if (jsonData["errcode"] != null) {
                Toast.Show("注册失败:" + jsonData["errmsg"]);
                OpenNetworkingUI.Hide();
                failcallback();
            }
            else {
                this.access_token = jsonData["access_token"];
                this.userid = jsonData["userid"];

                let serverJson = JSON.parse(jsonData["server"]);
                this.socketHosts = serverJson["mutipleIpList"];
                this.socketPort = serverJson["webSocketPort"];

                localStorage.setItem(LocalStorageKey.LoginUid, this.userid);
                localStorage.setItem(LocalStorageKey.LoginPhone, mobilenum);
                localStorage.setItem(LocalStorageKey.LoginPassword, password);

                this.SendMessage(MessageNames.RegisterSucess);

                this.ConnectTCPAndLoginHall(successCallback);

            }

        }, (err) => {
            Toast.Show("网络请求失败");
            failcallback();
            OpenNetworkingUI.Hide();
            cc.error("err =============== " + err);
        }, 10000);
    }

    public RefreshToken() {
        let userid = localStorage.getItem(LocalStorageKey.LoginUid);
        let password = localStorage.getItem(LocalStorageKey.LoginPassword);

        let ipDic: { [name: string]: string } = {};
        ipDic["ip"] = Global.selfIPAddress;
        ipDic["country"] = "";
        ipDic["timezone"] = "";
        ipDic["city"] = "";

        let postParm: { [name: string]: string | number | { [name: string]: string } } = {};
        postParm["appid"] = "sharpknife";
        postParm["type"] = 0;
        postParm["promoid"] = 1;
        postParm["mobilenum"] = "";
        postParm["deviceid"] = "";
        postParm["userid"] = userid;
        postParm["password"] = password;
        postParm["ip"] = ipDic;
        postParm["smsCode"] = "";
        postParm["channel"] = Global.channel;

        HttpRequest.Post(Global.GetLoginPath(), postParm, (data) => {

            if (Global.showLog == true)
                cc.error("HttpRequest data " + data);

            let jsonData = JSON.parse(data);
            if (jsonData["errcode"] != null) {
                Toast.Show("重连失败:" + jsonData["errmsg"]);
                OpenNetworkingUI.Hide();
            }
            else {
                this.access_token = jsonData["access_token"];
                this.userid = jsonData["userid"];

                let serverJson = JSON.parse(jsonData["server"]);
                this.socketHosts = serverJson["mutipleIpList"];
                this.socketPort = serverJson["webSocketPort"];

                TCPNetwork.GetInstance().SetUidToker(TCPSessionID.Hall, this.userid, this.access_token);
                TCPNetwork.GetInstance().ReConnectWhenHandShakeFail(TCPSessionID.Hall);
            }

        }, (err) => {
            Toast.Show("网络请求失败");
        }, 10000);
    }

    public RefreshGateIp() {
        this.tryHallIPIndex++;
        let index = this.tryHallIPIndex % this.socketHosts.length;
        TCPNetwork.GetInstance().RefreshIPAndPort(TCPSessionID.Hall, this.socketHosts[index], this.socketPort);
    }

    private GetLoginHallReqData(): LoginReq {
        let platform = "h5";
        let req = LoginReq.create();
        req.uid = this.userid;
        req.token = this.access_token;
        req.platform = platform;
        req.clientVersion = Global.gameVersion;
        req.appVersion = 1;
        req.packageName = "h5" + Global.channel;
        req.channelId = Global.channel;

        let deviceid = localStorage.getItem(LocalStorageKey.Deviceid);
        if (deviceid == null) {
            deviceid = "";
        }

        let ipDic: { [name: string]: string } = {};
        ipDic["ip"] = Global.selfIPAddress;
        let ipJsonStr = JSON.stringify(ipDic);

        req.ip = ipJsonStr;
        req.mac = deviceid;

        console.log("GetLoginHallReqData channelId " + req.channelId + " ip " + req.ip + " req.mac " + req.mac);

        req.osTime = this.date.getDate().toString();
        let md5 = new MD5();
        req.md5String = md5.rstr_md5(req.uid + req.token + req.platform + req.clientVersion + req.appVersion + req.osTime);
        req.isH5 = true;
        return req;
    }

    public LoginHall(successCallback, failCallback) {
        let req = this.GetLoginHallReqData();
        let senddata = LoginReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, LoginMsgDefine.MSG_LOGIN_HALL, senddata, (data) => {
            if (Global.showLog == true)
                cc.error("LoginHall success");
            successCallback();
            if (Global.showLog == true)
                cc.error("setItem loginUid " + this.userid);
            localStorage.setItem("loginUid", this.userid);
        }, (errMsg) => {
            failCallback(errMsg);
            if (Global.showLog == true)
                cc.error("LoginHall failed errMsg " + errMsg);
        }, true);
    }

    private SendPing(funcSuccess) {
        let req = PingReq.create();
        req.timestamp = this.date.getDate();
        let senddata = PingReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, PingMsgDefine.MSG_PING, senddata, (data) => {
            funcSuccess();
        }, (errmsg) => {

        }, true);

    }

    // private ResetPingChecker()
    // {
    //     this.lastPingResTime = this.date.getDate();
    //     this.haveShowLogOut = false;
    //     this.haveDsiconnectTCPSession = false;
    // }

    public InitPing() {
        TimerManager.GetInstance().DeleteTimer(this.pingTimer);
        TimerManager.GetInstance().DeleteTimer(this.pingCheckerTimer);

        this.lastSendPingTime = Date.now();

        this.pingTimer = TimerManager.GetInstance().CallActionDelay(() => {
            let timeNow = Date.now()
            if (timeNow - this.lastSendPingTime > 3000) {
                this.SendPing(() => {
                    // this.ResetPingChecker();
                });
                this.lastSendPingTime = timeNow;
            }

        }, 5, null, -1, 5, true);

        // this.pingCheckerTimer = TimerManager.GetInstance().CallActionDelay(()=>{
        //     //大于50秒没收到ping回复，就询问是否返回登录界面
        //     if(this.date.getDate() - this.lastPingResTime > 50 && this.haveShowLogOut == false)
        //     {
        //         this.haveShowLogOut = true;
        //         Dialog.ShowWithYesNo(ConstStr.ShouldLogout,()=>{
        //             Global.LogOut();
        //         },()=>{

        //         });
        //     }

        //     //大于这个时间就断开连接，让底层触发重连
        //     if(this.date.getDate() - this.lastPingResTime > 11 && this.haveDsiconnectTCPSession == false)
        //     {
        //         this.haveDsiconnectTCPSession = true;
        //         TCPNetwork.GetInstance().Disconnect(TCPSessionID.Hall);
        //         //发送一个ping来触发重连
        //         this.SendPing(()=>{});
        //     }
        // },1,null,-1,1,true);

        // this.lastPingResTime = this.date.getDate();

    }

    public SendReConnectMsg() {
        TCPNetwork.GetInstance().SetUidToker(TCPSessionID.Hall, this.userid, this.access_token);
        let req = this.GetLoginHallReqData();
        let senddata = LoginReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, LoginMsgDefine.MSG_LOGIN_HALL, senddata, (data) => {
            let res = LoginRes.decode(data);
            if (res.success == true) {
                this.SendMessage(MessageNames.ReconnectSocketSuccess)
                TCPNetwork.GetInstance().ResendHangOnMsg(TCPSessionID.Hall);
            }
            else {
                Toast.Show("网络重连失败，返回登录界面");
                Global.LogOut();
            }
        }, () => {
            TimerManager.GetInstance().CallActionDelay(() => {
                this.SendReConnectMsg();
            }, 1);
        }, true);
    }




}
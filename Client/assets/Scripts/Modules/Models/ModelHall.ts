import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { CurrencyMsgDefine, HallMsgDefine, VipMsgDefine, MailMsgDefine, PlayerRoleMsgDefine } from "../../Protos/MessageDefine";
import { SyncCurrencyRes, CurrencyRefreshType, CurrencyStruct } from "../../Protos/Sign";
import Global from "../../Global/Global";
import MessageNames from "../MessageNames";
import { HallDataRes, HallDataReq, GameData, ADData, PushChannelAsset } from "../../Protos/HallData";
import { VipInfoListPush } from "../../Protos/Vip";
import { MailRes, MailModifyRes } from "../../Protos/Mail";
import { ZhuCeSongJinPush, XinShouJinAndStepPush, AnnounReadPointPush, HeadFrameListPush, BatteryListPush, BankruptcyREQ, BankruptcyRsp, BankruptcyRemainREQ, BankruptcyRemainRsp, GetSafeBoxInfoRsp, XinShouJinREQ } from "../../Protos/PlayerRole";
import Dialog, { DialogType } from "../../Tools/Dialog";
import TIPS from "../../Global/Tips";



export default class ModelHall extends Model {

    public GameData: Array<GameData> = [];
    public ADData: Array<ADData>;
    public ChannelAsset: string;
    public noviceStep: number = 0;
    public reliefTimes: number = 0;
    public allLeftGold: number = 0;
    public hasZhuCeSong: boolean;
    public hasRedPoint: boolean;

    public Init() {
        this.noviceStep = 0;
        this.reliefTimes = 0;
        this.allLeftGold = 0;
        this.hasRedPoint = false;

        this.InitHallData();

        //return;


        //     TCPNetwork:GetInstance():ListenMsg(TCPSessionID.Hall,MessageDefine_pb.MSG_PUSH_CHANNEL_ASSET,function(data)
        //     local res = DeSerializes(HallData_pb.PushChannelAsset(),data,MessageDefine_pb.MSG_PUSH_CHANNEL_ASSET)
        //     --PlayerPrefs.DeleteAll()
        //     logWarn("渠道相关------->>>"..tostring(res.channelAsset))
        //     if not string.isNullOrEmpty(res.channelAsset) then
        //         PlayerPrefs.SetString("channelVersion",res.channelAsset)
        //         self:SetChannelInfo(res.channelAsset)
        //     else
        //         self:SetDefaultChannelInfo()
        //     end
        //     ChannelMgr.SetCleanChannelSetting()
        // end)





        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, VipMsgDefine.MSG_PUSH_VIP_INFO_UPDATE, (data) => {
            let res = VipInfoListPush.decode(data);
            Global.PlayerInfo.vipLv = res.vipLevel;
            this.SendMessage(MessageNames.SyncPlayerInfo)
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, MailMsgDefine.SM_PUSH_MAIL_DATA, (data) => {
            let res = MailRes.decode(data);
            //this.SendMessage(MessageNames.PushMailData, res.mailList);
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, MailMsgDefine.SM_UPDATE_MAIL_DATA, (data) => {
            let res = MailModifyRes.decode(data);
            //this.SendMessage(MessageNames.UpdateMailList, res);
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, CurrencyMsgDefine.SM_SYNC_CURRENCY, (data) => {
            //   cc.error("CurrencyMsgDefine.SM_SYNC_CURRENCY");
            let res = SyncCurrencyRes.decode(data);
            this.ReceiveCurrencyData(res.curStruct);

            let refreshType = res.refreshType;
            for (let i = 0; i < res.curStruct.length; i++) {
                let currency = res.curStruct[i];
                if (currency.curType == 1) {
                    if (refreshType == CurrencyRefreshType.REFRESH_TYPE_RECHAGE) {
                        this.SendMessage(MessageNames.GoldUpdate, true)
                    }
                    else {
                        this.SendMessage(MessageNames.GoldUpdate, false)
                    }

                    break;
                }
            }
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, HallMsgDefine.MSG_PUSH_HALL_DATA, (data) => {
            if (Global.showLog == true)
                cc.log("########################## 收到大厅推送的数据");
            this.ADData = [];
            this.GameData = [];
            let res = HallDataRes.decode(data);
            cc.log(res);
            for (let i = 0; i < res.gamedata.length; i++) {
                this.GameData.push(res.gamedata[i] as GameData);
            }
            if (res.addata != null) {
                for (let i = 0; i < res.addata.length; i++) {
                    this.ADData.push(res.addata[i] as ADData);
                }
            }

            this.GameData.sort((a, b) => {
                if (a.order < b.order)
                    return -1;
                else
                    return 1;
            });

            this.ADData.sort((a, b) => {
                if (a.order < b.order)
                    return -1;
                else
                    return 1;
            });

            this.SendMessage(MessageNames.OpenViewHall);
        });

        // 接收服务器主动推送是否显示注册送金
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, PlayerRoleMsgDefine.MSM_PUSH_ZhuCeSongJin, (data) => {
            let res = ZhuCeSongJinPush.decode(data);
            this.hasZhuCeSong = res.hasZhuCeSong;
            this.SendMessage(MessageNames.UpdateRewardRegister);
        });

        // 接收公告红点推送
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_PUSH_ANNOUN_RED_POINT, (data) => {
            let res = AnnounReadPointPush.decode(data);
            this.hasRedPoint = res.hasRedPoint;
            this.SendMessage(MessageNames.UpdateAnnounceRedPoint, res.hasRedPoint);
        });

        // 接收头像框
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_PUSH_HEAD_FRAME_LIST, (data) => {
            let res = HeadFrameListPush.decode(data);
            for (let i = 0; i < res.headFrameList.length; i++) {
                Global.PlayerInfo.HeadBoxIdList.push(res.headFrameList[i] + 2);
            }
        });

        // 接收炮台
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_PUSH_BATTERY_LIST, (data) => {
            let res = BatteryListPush.decode(data);
            Global.PlayerInfo.GunIdList = [];
            for (let i = 0; i < res.batteryList.length; i++) {
                Global.PlayerInfo.GunIdList.push(res.batteryList[i]);
            }
        });

        // 接收保险箱信息
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_SAFE_BOX_GET_BOX_INFO, (data) => {
            let res = GetSafeBoxInfoRsp.decode(data);
            this.SendMessage(MessageNames.UpdateHallSafeBoxGold, res.money);
        });
    }

    public RequestHallData() {
        let req = HallDataReq.create();
        let senddata = HallDataReq.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall, HallMsgDefine.MSG_PUSH_HALL_DATA, senddata);
    }

    // 请求救济金
    public ReqRelief() {
        let req = BankruptcyREQ.create();
        let reqData = BankruptcyREQ.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_REQ_Bankruptcy, reqData,
            (data) => {
                let resData = BankruptcyRsp.decode(data);
                if (resData.success) {
                    Dialog.ShowJustYesButton(DialogType.Normal, "救济金", resData.tip, TIPS.YES, null);

                    this.ReqReliefTimes();
                }
                else {
                    if (resData.failType == 1) {
                        Dialog.ShowWithYesNoContent(DialogType.Normal, "救济金", "请先注册正式账号才可领取！", TIPS.YES, TIPS.NO, () => {
                            this.SendMessage(MessageNames.OpenRegisterPhone, 1);
                        }, null);
                    }
                    else {
                        Dialog.ShowJustYesButton(DialogType.Normal, "救济金", resData.tip, TIPS.YES, null);
                    }
                }
            },
            (err) => {

            });
    }

    // 请求救济金次数
    public ReqReliefTimes() {
        let req = BankruptcyRemainREQ.create();
        let reqData = BankruptcyRemainREQ.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_REQ_Bankruptcy_Remain, reqData,
            (data) => {
                let resData = BankruptcyRemainRsp.decode(data);
                this.reliefTimes = resData.remain;
                this.allLeftGold = resData.allRemainGold;
                this.SendMessage(MessageNames.UpdateReliefTimes);
            },
            (err) => {

            }, true);
    }

    public GetPromoterQRCodeAddress() {

        let address = null;
        if (this.ADData != null) {
            this.ADData.forEach(adData => {
                if (adData.functionType == 4) {
                    address = adData.scriptH5;
                }
            });
        }

        if (address == null || address.length == 0) {
            //  address = "http://192.168.9.79:7456";
        }
        cc.log("获取二维码", address)
        return address;
    }

    public ReceiveCurrencyData(msg: CurrencyStruct[]) {
        for (let i = 0; i < msg.length; i++) {
            let currency = msg[i];
            if (currency.curType == 0) {
                Global.PlayerInfo.PlayerCurrency.RedEnvelops = Number(currency.count);
            }
            else if (currency.curType == 1) {
                Global.PlayerInfo.PlayerCurrency.Gold = Number(currency.count);
            }
            else if (currency.curType == 2) {
                Global.PlayerInfo.PlayerCurrency.SafeBox = Number(currency.count);
            }
            else if (currency.curType == 3) {
                Global.PlayerInfo.PlayerCurrency.Integration = Number(currency.count);
            }
        }

        this.SendMessage(MessageNames.SyncCurrencyRes);
    }

    InitHallData() {
        this.GameData = [];

        let gamedata = new GameData();
        gamedata.playType = 12;
        gamedata.order = 1;
        gamedata.single = false;
        gamedata.isH5Open = false;
        this.GameData.push(gamedata);

        gamedata = new GameData();
        gamedata.playType = 13;
        gamedata.order = 2;
        gamedata.single = false;
        gamedata.isH5Open = false;
        this.GameData.push(gamedata);

        gamedata = new GameData();
        gamedata.playType = 14;
        gamedata.order = 3;
        gamedata.single = false;
        gamedata.isH5Open = false;
        this.GameData.push(gamedata);

        gamedata = new GameData();
        gamedata.playType = 15;
        gamedata.order = 4;
        gamedata.single = false;
        gamedata.isH5Open = false;
        this.GameData.push(gamedata);

        //buyu
        gamedata = new GameData();
        gamedata.playType = 3;
        gamedata.order = 5;
        gamedata.single = true;
        gamedata.isH5Open = true;
        this.GameData.push(gamedata);

        gamedata = new GameData();
        gamedata.playType = 4;
        gamedata.order = 6;
        gamedata.single = false;
        gamedata.isH5Open = true;
        this.GameData.push(gamedata);

        gamedata = new GameData();
        gamedata.playType = 8;
        gamedata.order = 7;
        gamedata.single = false;
        gamedata.isH5Open = true;
        this.GameData.push(gamedata);

        //lhd
        // gamedata = new GameData();
        // gamedata.playType = 8;
        // gamedata.order = 7;
        // gamedata.single = true;
        // gamedata.isH5Open = true;
        // this.GameData.push(gamedata);

        this.ADData = [];

        let adData = new ADData();
        adData.adId = 1;
        adData.adPic = "1";
        adData.functionType = 0;
        adData.isHaveFunction = false;
        this.ADData.push(adData);

        adData = new ADData();
        adData.adId = 2;
        adData.adPic = "1";
        adData.functionType = 0;
        adData.isHaveFunction = false;
        this.ADData.push(adData);

        adData = new ADData();
        adData.adId = 3;
        adData.adPic = "1";
        adData.functionType = 0;
        adData.isHaveFunction = false;
        this.ADData.push(adData);

    }
}

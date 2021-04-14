import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { PayClientMsgDefine } from "../../Protos/MessageDefine";
import { RechargeListResponse, AccountGetMoneyResponse, RechargeListRequest, RechargeProxyRefreshRes, RechargeRequest, RechargeResponse, ResProxyServerInfo } from "../../Protos/Pay";
import MessageNames from "../MessageNames";
import Global from "../../Global/Global";
import Toast from "../../Tools/Toast";
import TimerManager from "../../Components/TimerManager";
import ccC from "../../Tools/ccC";
import { EmptyReq } from "../../Protos/Common";

export default class ModelPay extends Model {
    public isInBlackList: boolean = false;
    // private topPriorityChannelType:number;
    private chargeTimerID;
    public rechargeList: RechargeListResponse;
    public rechargeProxyRefreshRes: RechargeProxyRefreshRes;
    // private successRechargeback;
    public lastPayMoney: number;
    public lastRechargeUrl: string;
    //vip支付
    public VipPayUrl: ResProxyServerInfo;
    public Init() {
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, PayClientMsgDefine.MSG_RSP_ACCOUNTGETMONEY, (data) => {
            let res = AccountGetMoneyResponse.decode(data);
            this.SendMessage(MessageNames.PayServerGetMoney, res);
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, PayClientMsgDefine.MSG_REQ_RECHARGE, (data) => {
            this.SendMessage(MessageNames.HidePayLoading);
            let res = RechargeResponse.decode(data);
            cc.log("res", res)
            if (Global.showLog == true)
                cc.error("res.isSuccess  " + res.isSuccess);
            if (res.isSuccess == true) {
                this.lastRechargeUrl = res.rechargeUrl;
                this.SendMessage(MessageNames.OpenPayURL);
            }
            else {
                Toast.Show(res.tips);
                // this.lastRechargeUrl = "http://www.baidu.com";
                // this.SendMessage(MessageNames.OpenPayURL);
            }

            TimerManager.GetInstance().DeleteTimer(this.chargeTimerID);
        });
    }

    public Req_List(successback: () => void) {
        // if(this.rechargeList != null)
        // {
        //     successback();
        //     return;
        // }
        cc.log("Req_List")
        let req = RechargeListRequest.create();
        let sendData = RechargeListRequest.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, PayClientMsgDefine.MSG_REQ_RECHARGE_LIST, sendData, (data) => {
            cc.log("rechargeList", data)
            let res = RechargeListResponse.decode(data);
            this.rechargeList = res;
            cc.log("rechargeList", this.rechargeList)
            this.isInBlackList = res.rechargeInfo.length > 0 ? false : true;
            successback();
            // if(this.isInBlackList == false)
            //     this.topPriorityChannelType = res.rechargeInfo[0].channelType;
            // this.SendMessage(MessageNames.ServerOpenPay,res);
        }, (err) => {

        });
    }

    public Req_FlushProxyList(successCallback: () => void) {
        let req = RechargeListRequest.create();
        let sendData = RechargeListRequest.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, PayClientMsgDefine.MSG_REQ_REFRESH_PROXY, sendData, (data) => {
            this.rechargeProxyRefreshRes = RechargeProxyRefreshRes.decode(data);
            successCallback();
            // this.SendMessage(MessageNames.PayFlushProxyList,res);
        }, (err) => {

        });
    }

    public Req_Pay(channelType, money) {
        this.lastPayMoney = money;
        if (Global.showLog == true)
            cc.error("money  " + money + " channelType " + channelType);
        // this.successRechargeback = successback;
        let req = RechargeRequest.create();
        req.chargeMoney = money;
        req.channelType = channelType;
        req.clientIp = Global.selfIPAddress;
        let sendData = RechargeRequest.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall, PayClientMsgDefine.MSG_REQ_RECHARGE, sendData);

        this.SendMessage(MessageNames.ShowPayLoading, channelType)

        this.chargeTimerID = TimerManager.GetInstance().CallActionDelay(() => {
            this.SendMessage(MessageNames.HidePayLoading);
            Toast.Show("请求支付超时，请重新尝试");
        }, 10);
    }

    //vip充值请求
    public Req_VipChargeIPandPort(successCallback: () => void) {
        let req = EmptyReq.create();
        let senddata = EmptyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, PayClientMsgDefine.MSG_REQ_CHARGE_CHAT_SERVER_INFO, senddata,
            (data) => {
                this.VipPayUrl = ResProxyServerInfo.decode(data);
                successCallback();
            },
            (err) => {

            }
        )

    }
}

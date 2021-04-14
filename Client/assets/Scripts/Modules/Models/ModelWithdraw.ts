import Model from "../../MVCFramework/Model";
import { GetZhiFuBaoInfoReq, GetZhiFuBaoInfoRsp, GetBankCardInfoReq, GetBankCardInfoRsp, BangZhiFuBaoReq, BangZhiFuBaoRsp, BangBankCardReq, BangBankCardRsp, TakeMoneyReq, TakeMoneyRsp, GetCanUseBankInfoReq, GetCanUseBankInfoRsp, IBankInfoPro, GetWithdrawPassageReq, GetTakeMoneyRecordRsp, ITakeMoneyRecord, GetWithdrawPassageRsp, GetTakeMoneyRecordReq, TakeMoneyRecord } from "../../Protos/Withdraw";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { WithdrawMsgDefine } from "../../Protos/MessageDefine";
import MessageNames from "../MessageNames";
import Toast from "../../Tools/Toast";
import Dialog, { DialogType } from "../../Tools/Dialog";
import TIPS from "../../Global/Tips";

export default class ModelWithdraw extends Model 
{
    aliAccount:string;
    aliName:string;
    hasBindAli:boolean;

    bankAccount:string;
    bankUserName:string;
    bankIdCard:string;
    bankKaihuhang:string;
    bankKaihuAddress:string;
    bankZhihang:string;
    bankTel:string;
    bankId:number;
    hasBindBank:boolean;
    

    BankInfoList:IBankInfoPro[];
    withdrawRecordData:TakeMoneyRecord[];

    public Init()
    {

    }

    // 请求支付宝信息
    public ReqAliInfo()
    {
        let req = GetZhiFuBaoInfoReq.create();
        let reqData = GetZhiFuBaoInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, WithdrawMsgDefine.MSG_REQ_GET_ZHIFUBO_INFO_Withdraw, reqData,
        (data)=>
        {
            let resData = GetZhiFuBaoInfoRsp.decode(data);
            this.aliAccount = resData.account;
            this.aliName = resData.name;

            if (this.aliAccount==null || this.aliAccount.length == 0)
                this.hasBindAli = false;
            else
                this.hasBindAli = true;

            this.SendMessage(MessageNames.UpdateAliInfo);
        },
        (err)=>{

        });
    }

    // 请求银行卡信息
    public ReqBankInfo()
    {
        let req = GetBankCardInfoReq.create();
        let reqData = GetBankCardInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, WithdrawMsgDefine.MSG_REQ_GET_BANKCA_INFO_Withdraw, reqData,
        (data)=>
        {
            let resData = GetBankCardInfoRsp.decode(data);
            this.bankAccount = resData.account;
            this.bankUserName = resData.name;
            this.bankIdCard = resData.idCard;
            this.bankKaihuhang = resData.kaihuhang;
            this.bankKaihuAddress = resData.kaihuAddress;
            this.bankZhihang = resData.bankName;
            this.bankTel = resData.tel;
            this.bankId = resData.bankId;

            if (this.bankAccount==null || this.bankAccount.length == 0)
                this.hasBindBank = false;
            else
                this.hasBindBank = true;


            this.SendMessage(MessageNames.UpdateBankInfo);

        },
        (err)=>{

        });
    }

    // 请求绑定支付宝
    public ReqBindAli(account:string, name:string, successFun:()=>void)
    {
        let req = BangZhiFuBaoReq.create();
        req.account = account;
        req.name = name;
        let reqData = BangZhiFuBaoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, WithdrawMsgDefine.MSG_REQ_BIND_ZHIFUBO_Withdraw, reqData,
        (data)=>
        {
            let resData = BangZhiFuBaoRsp.decode(data);
            if (resData.success)
            {
                Toast.Show("绑定成功！");

                this.aliAccount = account;
                this.aliName = name;
                this.hasBindAli = true;

                if (successFun != null)
                    successFun();

                this.SendMessage(MessageNames.UpdateAliInfo);
            }
            else
            {
                Toast.Show(resData.tip);
            }
        },
        (err)=>{

        });
    }

    // 请求绑定银行卡
    public ReqBindBank(req:BangBankCardReq, successFun:()=>void)
    {
        let reqData = BangBankCardReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, WithdrawMsgDefine.MSG_REQ_BIND_BANKCA_Withdraw, reqData,
        (data)=>
        {
            let resData = BangBankCardRsp.decode(data);
            if (resData.success)
            {
                Toast.Show("绑定成功！");
                this.bankAccount = req.account;
                this.bankUserName = req.name;
                this.bankIdCard = req.idCard;
                this.bankKaihuhang = req.kaihuhang;
                this.bankKaihuAddress = req.kaihuAddress;
                this.bankZhihang = req.bankName;
                this.bankTel = req.tel;
                this.bankId = req.bankId;
                this.hasBindBank = true;
    
                if (successFun != null)
                    successFun();
    
                this.SendMessage(MessageNames.UpdateBankInfo);
            }
            else
            {
                Toast.Show(resData.tip);
            }
        },
        (err)=>{

        });
    }

    // 请求提现
    public ReqWithdraw(req:TakeMoneyReq, successFun:()=>void)
    {
        let reqData = TakeMoneyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, WithdrawMsgDefine.MSG_REQ_TAKE_MONEY_Withdraw, reqData,
        (data)=>
        {
            let resData = TakeMoneyRsp.decode(data);
            if (resData.success)
            {
                if (successFun != null)
                    successFun();

                this.SendMessage(MessageNames.UpdateWithdraw);

                Dialog.ShowJustYesButton(DialogType.Normal, "兑换成功", "兑换成功，请留意账户，若有疑问请联系客服！",TIPS.YES,null);
            }
            else
            {
                Toast.Show(resData.tip);
            }
        },
        (err)=>{

        });
    }

    // 请求可以使用的银行
    public ReqCanUseBankInfoReq()
    {
        let req = GetCanUseBankInfoReq.create();
        let reqData = GetCanUseBankInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, WithdrawMsgDefine.MSG_REQ_GET_CAN_USE_BANK_INFOS_Withdraw, reqData,
        (data)=>
        {
            let resData = GetCanUseBankInfoRsp.decode(data);
            this.BankInfoList = resData.bankInfos;
            this.SendMessage(MessageNames.UpdateWithdrawBankList);
        },
        (err)=>{

        });
    }

    // 请求是否有支付宝通道和银行通道
    public ReqPassage()
    {
        let req = GetWithdrawPassageReq.create();
        let reqData = GetWithdrawPassageReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, WithdrawMsgDefine.MSG_REQ_GET_WITHDRAW_PASSAGE, reqData,
        (data)=>
        {
            let resData = GetWithdrawPassageRsp.decode(data);
            this.SendMessage(MessageNames.UpdateWithdrawPassage, resData);
        },
        (err)=>{

        });
    }

    // 请求兑换记录
    public ReqWithdrawRecord()
    {
        let req = GetTakeMoneyRecordReq.create();
        let reqData = GetTakeMoneyRecordReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, WithdrawMsgDefine.MSG_REQ_TAKE_MONEY_RECORD_Withdraw, reqData,
        (data)=>
        {
            let resData = GetTakeMoneyRecordRsp.decode(data);
            this.withdrawRecordData = resData.takeMoneyRecord;
            this.SendMessage(MessageNames.UpdateWithdrawRecord);
        },
        (err)=>{

        });
    }

    public GetBankIdByBankName(name:string)
    {
        for(let i = 0; i < this.BankInfoList.length; i++)
        {
            if (this.BankInfoList[i].bankName == name)
                return this.BankInfoList[i].bankId;
        }

        return 0;
    }
}

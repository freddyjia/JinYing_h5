import Model from "../../MVCFramework/Model";
import { GetSafeBoxInfoReq, GetSafeBoxInfoRsp, SaveMoneyToSaveBoxMoneyReq, SaveMoneyToSaveBoxMoneyRsp, TakeOutSafeBoxMoneyReq, TakeOutSafeBoxMoneyRsp } from "../../Protos/PlayerRole";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { PlayerRoleMsgDefine } from "../../Protos/MessageDefine";
import MessageNames from "../MessageNames";
import Toast from "../../Tools/Toast";

export default class ModelSafeBox extends Model 
{
    safeGold:number;

    public Init()
    {
        this.safeGold = 0;
    }

    // 获取保险箱的保险金额
    public RequestGetSafeBoxInfo()
    {
        let req = GetSafeBoxInfoReq.create();
        let reqData = GetSafeBoxInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PlayerRoleMsgDefine.MSG_SAFE_BOX_GET_BOX_INFO, 
        reqData,
        (data)=>{
            let resData = GetSafeBoxInfoRsp.decode(data);
            this.safeGold = resData.money;
            this.SendMessage(MessageNames.UpdateSafeBoxGold);
            this.SendMessage(MessageNames.UpdateHallSafeBoxGold, this.safeGold);
        },
        (err)=>{

        });
    }

    // 存钱到保险箱
    public RequestDepositGold(gold:number, callSuccess:()=>void, callFailed:()=>void)
    {
        let req = SaveMoneyToSaveBoxMoneyReq.create();
        req.money = gold;
        let reqData = SaveMoneyToSaveBoxMoneyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PlayerRoleMsgDefine.MSG_SAFE_BOX_SAVE_BOX_MONEY, 
        reqData,
        (data)=>{
            let resData = SaveMoneyToSaveBoxMoneyRsp.decode(data);
            if (resData.success)
            {
                this.safeGold += gold;
                if (callSuccess != null)
                    callSuccess();
            }
            else
            {
                if (callFailed != null)
                    callFailed();

                Toast.Show(resData.tip);
            }
        },
        (err)=>{

        });
    }

    // 从保险箱取钱
    public RequestWithdrawalsGold(gold:number, callSuccess:()=>void, callFailed:()=>void)
    {
        let req = TakeOutSafeBoxMoneyReq.create();
        req.money = gold;
        let reqData = TakeOutSafeBoxMoneyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PlayerRoleMsgDefine.MSG_SAFE_BOX_TAKE_OUT_BOX_MONEY, 
        reqData,
        (data)=>{
            let resData = TakeOutSafeBoxMoneyRsp.decode(data);
            if (resData.success)
            {
                this.safeGold -= gold;
                if (callSuccess != null)
                    callSuccess();
            }
            else
            {
                if (callFailed != null)
                    callFailed();

                Toast.Show(resData.tip);
            }
        },
        (err)=>{

        });
    }
}

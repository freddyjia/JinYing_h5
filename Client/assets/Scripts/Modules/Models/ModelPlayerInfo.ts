import Model from "../../MVCFramework/Model";
import HttpRequest from "../../Network/Http/HttpRequest";
import Toast from "../../Tools/Toast";
import { ModifyPlayerNameReq, DefaultPlayerRoleOptionRes, ModifyPlayerHeadReq, ChangeHeadBox, ZhuCeSongJinREQ, ZhuCeSongJinRsp, BindingMoblieNumeReq, BindingMoblieNumeRes } from "../../Protos/PlayerRole";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { PlayerRoleMsgDefine } from "../../Protos/MessageDefine";
import MessageNames from "../MessageNames";
import Global from "../../Global/Global";

export default class ModelPlayerInfo extends Model 
{
    public Init()
    {
        // TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall,PlayerRoleMsgDefine.MSG_BINDING_MOBILE_NUM,(data)=>{
        //     let res = DefaultPlayerRoleOptionRes.decode(data); 
        //     Toast.Show(res.tips);
        // });
    }

    public ChangePassword(phone,verifyCode,password,confirmPassword,callback)
    {
        let data :{[key:string]:string} = {};
        data["phoneNo"] = phone;
        data["checkCode"] = verifyCode;
        data["password"] = password;
        data["confirmPassword"] = confirmPassword;

        HttpRequest.Post(Global.GetResetPasswordPath(),data,()=>{
            callback(data);
        },(err)=>{
            Toast.Show(err);
        },10000);
    }

    // public Register(accountId, phone, verifyCode, password, confirmPassword, callback)
    // {
    //     let data :{[key:string]:string} = {};
    //     data["userId"] = accountId;
    //     data["phoneNo"] = phone; 
    //     data["checkCode"] = verifyCode; 
    //     data["password"] = password; 
    //     data["confirmPassword"] = confirmPassword; 

    //     let url = "";
    //     if(Global.PlayerInfo.playerId.length > 0)
    //     {
    //         url = Global.GetBindPath();
    //     }
    //     else
    //     {
    //         url = Global.GetRegPath();
    //     }

    //     HttpRequest.Post(url,data,()=>{
    //         callback(data);
    //     },(err)=>{
    //         Toast.Show(err);
    //     },5000);
    // }

    private CheckPhone(phoneNum):boolean
    {
        let reg = new RegExp(/^1[34578]\d{9}$/);
        if (phoneNum.length == 0 || reg.test(phoneNum)==false)
        {
            Toast.Show("请输入正确的手机号码");
            return false;
        }
        return true;
    }

    public RequestSMSCode(phone, succCallback,failCallback)
    {
        if(this.CheckPhone(phone) == false)
            return;

        let data :{[key:string]:string} = {};
        data["phoneNo"] = phone; 
        HttpRequest.Post(Global.GetSmsPath(),data,(ret)=>{
            succCallback(ret);
        },(err)=>{
            Toast.Show(err);
            failCallback(err);
        },10000);
    }

    public ChangeNickname(name,sucessCallback:()=>void)
    {
        let req = ModifyPlayerNameReq.create();
        req.newName = name;
        let senddata = ModifyPlayerNameReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall,PlayerRoleMsgDefine.MSG_MODIFY_NICKNAME,senddata,(data)=>{
            let res = DefaultPlayerRoleOptionRes.decode(data);
            Toast.Show(res.tips);
            if(res.success)
            {
                if(sucessCallback != null)
                    sucessCallback();
            }
        },(errMsg)=>{
            
        },true);
    }

    public ChangeHeadImage(imgName)
    {
        let req = ModifyPlayerHeadReq.create();
        req.newHeadId = imgName
        let senddata = ModifyPlayerHeadReq.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall,PlayerRoleMsgDefine.MSG_MODIFY_HEAD_INFO,senddata);
    }

    public ChangeHeadBox(imgName)
    {
        let req = ChangeHeadBox.create();
        req.headbox = imgName;
        let senddata = ChangeHeadBox.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall,PlayerRoleMsgDefine.MSG_CHANGE_HEAD_BOX,senddata);
    }

    public ReqGetRegisterGold()
    {
        let req = ZhuCeSongJinREQ.create();
        let senddata = ZhuCeSongJinREQ.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall,PlayerRoleMsgDefine.MSG_REQ_ZhuCeSongJin,senddata,(data)=>{
            let res = ZhuCeSongJinRsp.decode(data); 
            if(res.success)
            {
                this.SendMessage(MessageNames.UpdateRewardRegister,false);
            }
            else
            {
                Toast.Show(res.tip);
            }
        },(errMsg)=>{
            
        },true);
    }

    public BindingMoblieNumeReq(mobileNum, pwd, confirmPwd, checkCode, succCallback)
    {
        let req = BindingMoblieNumeReq.create();
        req.mobileNum = mobileNum;
        req.pwd = pwd;
        req.confirmPwd = confirmPwd;
        req.checkCode = checkCode;
        let senddata = BindingMoblieNumeReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall,PlayerRoleMsgDefine.MSG_BINDING_MOBILE_NUM,senddata,(data)=>{
            let res = BindingMoblieNumeRes.decode(data); 
            if(res.isSuc)
            {
                Toast.Show("注册成功");
                if(succCallback != null)
                {
                    succCallback();
                }
            }
            else
            {
                Toast.Show(res.failTips);
            }
        },(errMsg)=>{
            
        });
    }

}

import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { CurrencyMsgDefine, HallMsgDefine, VipMsgDefine, MailMsgDefine, PlayerRoleMsgDefine } from "../../Protos/MessageDefine";
import Global from "../../Global/Global";
import MessageNames from "../MessageNames";
import { HallDataRes, HallDataReq, GameData, ADData } from "../../Protos/HallData";
import { ZhuCeSongJinPush, XinShouJinAndStepPush, AnnounReadPointPush, HeadFrameListPush, BatteryListPush, BankruptcyREQ, BankruptcyRsp, BankruptcyRemainREQ, BankruptcyRemainRsp, GetSafeBoxInfoRsp, XinShouJinREQ, XinShouUpStepREQ, XinShouUpStepRsp, XinShouJinRsp } from "../../Protos/PlayerRole";
import Dialog, { DialogType } from "../../Tools/Dialog";
import TIPS from "../../Global/Tips";
import TimerManager from "../../Components/TimerManager";
import Toast from "../../Tools/Toast";


export default class ModelGuide extends Model
{
    public noviceStep:number;
    public noviceMoney:number;
    public canGetXinShouJin:boolean;
    public ChangeTipFinish:boolean;
    public FingerFinish:boolean;
    public NoviceGoldFinish:boolean;
    public RewardRegisterFinish:boolean;

    public Init()
    {
        this.FingerFinish = false;
        this.NoviceGoldFinish = false;
        this.ChangeTipFinish = false;

        this.canGetXinShouJin = null;
        this.noviceStep = null;
        this.noviceMoney = 0;
       
        // 接收服务器推送是否可以领取新手金和已经上传完成的新手步骤
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall,PlayerRoleMsgDefine.MSM_PUSH_XinShouJinAndStep,(data)=>{
            let res = XinShouJinAndStepPush.decode(data);
            var step;
            if (res.step.length == 0){
                step = 0;
            }else{
                step = res.step[res.step.length-1];
            }
            this.noviceMoney = res.money;
            
            if(this.canGetXinShouJin == null){
                this.canGetXinShouJin = res.canGetXinShouJin;
                if(this.canGetXinShouJin){
                    this.ReqNoviceGold();
                }
            }
            if(this.noviceStep == null){
                this.noviceStep = step;
                if(this.noviceStep == 0){
                    this.canGetXinShouJin = true;
                }
                this.SendMessage(MessageNames.UpdateHallGuide); // H5版中，在未打开HallView之前已经收到这条推送。
            }
        });
    }

    public CheckGuide(){
        //无配置，暂时写死
        if(this.noviceStep == null){
            return;
        }else if(this.noviceStep == 0){
            if(this.canGetXinShouJin && this.NoviceGoldFinish == false){
                this.SendMessage(MessageNames.OpenNoviceGold,this.noviceMoney);
            }
        }else if(this.noviceStep == 1){
            if(this.ChangeTipFinish == false){
                this.SendMessage(MessageNames.OpenFinger, "change");
            }
        }else if(this.noviceStep == 2){
            if(this.FingerFinish == false){
                this.SendMessage(MessageNames.OpenFinger, "finger");
            }
        }
    }

    public CheckOpenRewardRegister(){
        if(this.noviceStep > 2 && !this.RewardRegisterFinish){
            this.SendMessage(MessageNames.OpenRewardRegister);
            this.RewardRegisterFinish = true;
        }
    }

    //上传完成的新手步骤
    public ReqUploadGuideStep(){
        let req = XinShouUpStepREQ.create();
        req.step = this.noviceStep;
        let sendData = XinShouUpStepREQ.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_REQ_UP_XinShouJin,sendData);
    }

    public GetNoviceGold(){
        this.NoviceGoldFinish = true;
        this.canGetXinShouJin = false;
        this.noviceStep++;
        this.ReqUploadGuideStep();
        this.SendMessage(MessageNames.PlayNoviceGoldAni);
    }

    public ReqNoviceGold()
    {
        let req = XinShouJinREQ.create();
        let senddata = XinShouJinREQ.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall,PlayerRoleMsgDefine.MSG_REQ_XinShouJin,senddata);        
    }
  
    public EnterGameFirstTime(){
        //成功进入游戏后
        this.noviceStep++;
        this.ReqUploadGuideStep();
    }

}

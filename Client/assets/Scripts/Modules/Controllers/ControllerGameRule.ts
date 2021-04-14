import Controller from "../../MVCFramework/Controller";
import ViewGameRule from "../Views/ViewGameRule";
import { ViewNames, ModelNames } from "../MVCRegister";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { GameCommonMsgDefine } from "../../Protos/MessageDefine";
import MessageNames from "../MessageNames";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ControllerGameRule extends Controller {
    view:ViewGameRule;

    //初始化操作
    public Init(){

    }

    public Open(param){
        if(this.view==null){
            this.view = this.GetView(ViewNames.ViewGameRule) as ViewGameRule;
            this.view.SetOnClick("BtnRuleExit",()=>{
                this.view.Hide();
            });
            this.view.SetOnClick("maskBtn",()=>{
                this.view.Hide();
            });
        }
        this.view.Show(()=>{
            this.view.SetRuleContent(param.gameType,param.subType);
        }); 
    }

    //接收消息
    public OnReceiveMessage(msg, msgBody){
        if(msg==MessageNames.OpenGameRule){
            this.Open(msgBody);
        }
        else if(msg == MessageNames.KickOutSmallGame)
        {
            if(this.view != null && this.view.isShow == true)
                this.view.Hide();
        }
    }
}

import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { BrocastMsgDefine } from "../../Protos/MessageDefine";
import { BrocastPushText } from "../../Protos/Brocast";
import MessageNames from "../MessageNames";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class ModelPaoMaDeng extends Model 
{
    public Init()
    {
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall,BrocastMsgDefine.MSG_Send_TEXT_Brocast,(data)=>{
            
            let res = BrocastPushText.decode(data);
            if(Global.showLog == true)
                cc.error("跑马灯 " + res.content);
            this.SendMessage(MessageNames.CheckPaoMaDeng,res);
        });
    }
}

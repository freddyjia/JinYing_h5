import Model from "../../MVCFramework/Model";
import { ClientGMCommand } from "../../Protos/GM";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { GMCmdMsgDefine } from "../../Protos/MessageDefine";

export default class ModelGM extends Model 
{
    public Send(command)
    {
        let req = ClientGMCommand.create();
        req.command = command;
        let senddata = ClientGMCommand.encode(req).finish();
        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall,GMCmdMsgDefine.CLIENT_GM_COMMAND,senddata);
    }
    
}

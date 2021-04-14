import Model from "../../MVCFramework/Model";
import { AnnounInfo, GetAnnounInfoRsp, GetAnnounInfoReq, ReaAnnounInfoReq, ReaAnnounInfoRsp } from "../../Protos/PlayerRole";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { PlayerRoleMsgDefine } from "../../Protos/MessageDefine";
import MessageNames from "../MessageNames";

// 邮件Model
export default class ModelAnnounce extends Model 
{
    announceInfoList:AnnounInfo[];

    public Init()
    {
        this.announceInfoList = [];

        // let info = new AnnounInfo();
        // info.title = "该文章内容翻译自Visual";
        // info.content = "该文章内容翻译自Visual Studio Code 快捷键Mac 版Mac 键盘符号说明⌘ == Command ... Mac 键盘符号说明 该文章内容翻译自Visual Studio Code 快捷键Mac 版Mac 键盘符号说明⌘ == Command ... Mac 键盘符号说明 该文章内容翻译自Visual Studio Code 快捷键Mac 版Mac 键盘符号说明⌘ == Command ... Mac 键盘符号说明 该文章内容翻译自Visual Studio Code 快捷键Mac 版Mac 键盘符号说明⌘ == Command ... Mac 键盘符号说明 ";
        // info.timeMs = "1605851965000";
        // info.read = true;
        // info.sendPlayerName = "运营团队";
        // info.id = "1200";
        // this.announceInfoList.push(info);
    }

    public Clean()
    {
        
    }

    //获取公告信息
    public ReqAnnounceInfo()
    {
        let req = GetAnnounInfoReq.create();
        let reqData = GetAnnounInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_ANNOUN_GET_INFO, reqData,
        (data)=>{
            let resData = GetAnnounInfoRsp.decode(data);
            this.announceInfoList = resData.announInfo;
            this.SendMessage(MessageNames.UpdateAnnounce);
        },
        (err)=>{

        });
    }

    //阅读公告
    public ReqReadAnnounce(id:string)
    {
        let req = ReaAnnounInfoReq.create();
        req.id = id;
        let reqData = ReaAnnounInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall, PlayerRoleMsgDefine.MSG_ANNOUN_READ, reqData,
        (data)=>{
            let resData = ReaAnnounInfoRsp.decode(data);

            let ann = this.GetAnnounceById(id);
            ann.read = true;
            let hasAllRead = true;
            for (let i = 0; i < this.announceInfoList.length; i++)
            {
                if (this.announceInfoList[i].read == false)
                {
                    hasAllRead = false;
                    break;
                }
            }
            if (hasAllRead)
                this.SendMessage(MessageNames.UpdateAnnounceRedPoint,false);

            this.SendMessage(MessageNames.UpdateAnnounce);
        },
        (err)=>{
        });
    }

    public GetAnnounceById(id:string)
    {
        for (let i = 0; i < this.announceInfoList.length; i++)
        {
            if (id == this.announceInfoList[i].id)
            {
                return this.announceInfoList[i];
            }
        }
    }
}

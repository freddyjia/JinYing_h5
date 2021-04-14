import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { RankingListReq } from "../../Protos/GameCommon";
import { RankingListRes } from "../../Protos/GameCommon";
import ViewOnlinePlayer from "../Views/ViewOnlinePlayer";

import Toast from "../../Tools/Toast";
import { ViewNames } from "../MVCRegister";

//在线人数排行榜
export default class ControllerOnlinePlayer extends Controller
{
    private _View: ViewOnlinePlayer;
    public Init()
    {

    }
    
    //消息接收
    public OnReceiveMessage(msg:string,msgBody:any)
    { 
        if(msg == MessageNames.OpenSmallGameRank)
        {    
            let msgID = msgBody as number;
            let req = RankingListReq.create();
            let senddata = RankingListReq.encode(req).finish();
            TCPNetwork.GetInstance().Send(TCPSessionID.Hall,msgID,senddata,(data)=>{
               
                let resData = RankingListRes.decode(data);
                if(this._View == null)
                {
                    this._View = this.GetView(ViewNames.ViewOnlinePlayer) as ViewOnlinePlayer;
                    this._View.SetOnClick("close",()=>{
                        this._View.Hide();
                    })
                    this._View.AddDependentRes("SubGames/DvT/Prefabs/DvsT/UIOnlinePlayerItem");
                }
                this._View.Show(()=>{
                    this._View.RefreshPlayer(resData);
                });
            },(errMsg)=>{
                Toast.Show(errMsg.toString());
            });

        }
    }
}

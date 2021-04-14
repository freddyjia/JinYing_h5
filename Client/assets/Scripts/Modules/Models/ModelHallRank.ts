import Model from "../../MVCFramework/Model";
import { GetRankingReq, GetRankingRes, GetRankInfoReq, GetRankInfoRes } from "../../Protos/Ranking";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { RankMsgDefine } from "../../Protos/MessageDefine";
import MessageNames from "../MessageNames";

export default class ModelHallRank extends Model 
{
 
    public rankingDatas:{[rankType:number]:GetRankingRes} = {};
    public rankInfoRes:GetRankInfoRes;
    // --1 财富榜 2 今日所赢金币 3 今日所赢局数
    public GetRankListData(type:number)
    {
        
        let req = GetRankingReq.create();
        req.rankType = type;
        req.serialNum = this.rankingDatas[type] == null ? 0 : this.rankingDatas[type].serialNum;
        // cc.error("type  " + type + " req.serialNum " + req.serialNum);
        let sendData = GetRankingReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall,RankMsgDefine.CM_GET_RANK_LIST_DATA,sendData,
            (data)=>{
                let res = GetRankingRes.decode(data);
                this.rankingDatas[res.rankType] = res;
                // successCallback();
                this.SendMessage(MessageNames.RefreshHallRank);
            },
            (err)=>{});
    }

    public GetExistRankInfo()
    {
        let req = GetRankInfoReq.create();
        let sendData = GetRankInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall,RankMsgDefine.CM_GET_RANK_INFO_DATA,sendData,
            (data)=>{
                let res = GetRankInfoRes.decode(data);
                this.rankInfoRes = res;
            },
            (err)=>{});
    }


}

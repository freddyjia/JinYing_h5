import Model from "../../MVCFramework/Model";
import { LevelInfo, GetLevelInfoRes, GetMinePlayersInfoReq, GetMinePlayersInfoRes, GetMinePerformanceInfoResp, GetMineDayIncomeInfo, MineDayIncomeInfoResp, GetMinePromoteInfoRes, GetMineRewardsInfoRes, GetTakeRewardsInfoReq, GetTakeRewardsInfoRes, ApplyDepositReq, ApplyDepositRes, UploadLeaderIDReq, UploadLeaderIDRes } from "../../Protos/Promoter";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { PromoterMsgDefine, PingMsgDefine } from "../../Protos/MessageDefine";
import { PingRes } from "../../Protos/Ping";
import { EmptyReq } from "../../Protos/Common";
import Toast from "../../Tools/Toast";
import Global from "../../Global/Global";
import ccC from "../../Tools/ccC";

export default class ModelPromoter extends Model 
{
    curLevelExp:number;
    leaderId:string;
    levelInfoList:LevelInfo[];

    currentTime:number = 0;

    public Init()
    {
        this.Clean();
        this.ListenMsg();
        this.ParseClipboardContent();
    }

    public Clean()
    {
        this.curLevelExp = 0;
        this.leaderId = "";
        this.levelInfoList = [];
        this.CleanCache();
    }

    public CleanCache()
    {

    }

    public ParseClipboardContent()
    {
        let leaderID = window["playerId"];
        if (leaderID!=null && leaderID !=undefined)
        {
            this.leaderId = leaderID;
        }
    }

    public ListenMsg()
    {
        TCPNetwork.GetInstance().ListenMsg( 
        TCPSessionID.Hall, 
        PingMsgDefine.MSG_PING,
        (data)=>
        {
            let res = PingRes.decode(data);
            this.currentTime = Number(res.currentTime);
        });
    }

    //获取推广员全部等级信息21001
    public RequestGetLevelInfo(successCallback:(data:any)=>void)
    {
        if (this.levelInfoList.length > 0)
        {
            if (successCallback != null) 
            {
                successCallback({
                    "curLevelExp":this.curLevelExp,
                    "levelInfos":this.levelInfoList
                });
            }
            return;
        }

        let req = EmptyReq.create();
        let reqData = EmptyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_LEVEL_INFO, 
        reqData,
        (data)=>
        {
            let resData = GetLevelInfoRes.decode(data);
            this.levelInfoList = resData.levelInfos; 

            if (successCallback != null) 
            {
                successCallback({
                    "curLevelExp":this.curLevelExp,
                    "levelInfos":this.levelInfoList
                });
            }
        },
        ()=>
        {

        });
    }

    //获取我的玩家信息21002
    public RequestMinePlayersInfo(dateKey:string, pageIndex:number, successCallback:(data)=>void)
    {
        let req = GetMinePlayersInfoReq.create();
        req.dateKey = dateKey;
        req.pageIndex = pageIndex;
        let reqData = GetMinePlayersInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_PLAYERS_INCOME_INFO, 
        reqData,
        (data)=>
        {
            let resData = GetMinePlayersInfoRes.decode(data);
            if (successCallback != null) 
            {
                successCallback(resData);
            }
        },
        ()=>
        {

        });
    }

    //获取我的业绩信息21003
    public RequestMinePerformanceInfo(successCallback:(data)=>void)
    {
        let req = EmptyReq.create();
        let reqData = EmptyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_INCOME_INFO, 
        reqData,
        (data)=>
        {
            let resData = GetMinePerformanceInfoResp.decode(data);
            this.curLevelExp = Number(resData.curLevelExp);

            if (successCallback != null) 
            {
                successCallback(resData);
            }
        },
        ()=>
        {

        });
    }

    // 获取我的天业绩信息21005
    public RequestDayPerformanceInfo(pageIndex:number, successCallback:(data)=>void)
    {
        let req = GetMineDayIncomeInfo.create();
        req.pageIndex = pageIndex;
        let reqData = GetMineDayIncomeInfo.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_DAY_INCOME_INFO, 
        reqData,
        (data)=>
        {
            let resData = MineDayIncomeInfoResp.decode(data);

            resData.incomeDayInfoList.sort((t1, t2)=>{
                if (t1.date > t2.date) return -1;
                return 1;
            })

            if (successCallback != null) 
            {
                
                successCallback(resData);
            }
        },
        ()=>
        {

        });
    }

    //获取我的推广信息21006
    public RequestGetMinePromoteInfo(successCallback:(data)=>void)
    {
        let req = EmptyReq.create();
        let reqData = EmptyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_MINE_TEAM_INFO, 
        reqData,
        (data)=>
        {
            let resData = GetMinePromoteInfoRes.decode(data);
            if (successCallback != null) 
            {
                successCallback(resData);
            }
        },
        ()=>
        {

        });
    }

    //获取我的奖励信息21007
    public RequestGetMineRewardsInfo(successCallback:(data)=>void)
    {
        let req = EmptyReq.create();
        let reqData = EmptyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_REWARDS_INFO, 
        reqData,
        (data)=>
        {
            let resData = GetMineRewardsInfoRes.decode(data);
            if (successCallback != null) 
            {
                successCallback(resData);
            }
        },
        ()=>
        {

        });
    }

    //获取领取奖励信息21008
    public RequestGetTakeRewardsInfo(pageIndex:number, successCallback:(data)=>void)
    {
        let req = GetTakeRewardsInfoReq.create();
        req.pageIndex = pageIndex;
        let reqData = GetTakeRewardsInfoReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_APPLY_DEPOSIT_RECORD, 
        reqData,
        (data)=>
        {
            let resData = GetTakeRewardsInfoRes.decode(data);

            resData.takeRewardInfos.sort((t1, t2)=>{
                if (t1.date > t2.date) return -1;
                return 1;
            })

            if (successCallback != null) 
            {
                successCallback(resData);
            }
        },
        ()=>
        {

        });
    }

    // 申请提现21009
    public RequestApplyDeposit(depositNum:number, successCallback:(data)=>void)
    {
        let req = ApplyDepositReq.create();
        req.depositNum = depositNum*100;
        let reqData = ApplyDepositReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_APPLY_DEPOSIT, 
        reqData,
        (data)=>
        {
            let resData = ApplyDepositRes.decode(data);
            if (resData.success)
            {
                Toast.Show("申请提现成功");

                this.curLevelExp = resData.curLevelExp;

                if (successCallback != null) 
                {
                    successCallback(resData);
                }
            }
            else
            {
                Toast.Show(resData.tip);
            }
        },
        ()=>
        {

        });
    }

    //上传上级玩家ID 21010
    public UploadLeaderID()
    {
        return ;
        if(Global.showLog == true)
            cc.log("上传上级玩家ID：", this.leaderId);

        if (this.leaderId==null || this.leaderId.length == 0)
            return;

        let jsonStr = "{\"leaderId\":" + this.leaderId + "}";

        let req = UploadLeaderIDReq.create();
        req.leaderPlayerId = jsonStr;
        let reqData = UploadLeaderIDReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(
        TCPSessionID.Hall, 
        PromoterMsgDefine.MSG_REQ_UPLOAD_LEADER_ID, 
        reqData,
        (data)=>
        {
            if(Global.showLog == true)
                cc.log("上传成功：",this.leaderId);

            let resData = UploadLeaderIDRes.decode(data);
            if (resData.success)
            {
                Global.PlayerInfo.leaderID = resData.leaderId;
            }
        },
        ()=>
        {
            cc.error("上传上级玩家ID失败");
        });
    }

    public GetAllLevelsInfo()
    {
        return this.levelInfoList;
    }

    public GetCurLevelInfo()
    {
        for (let i = 0; i < this.levelInfoList.length; i++)
        {
            let levelInfo = this.levelInfoList[i];
            if (this.curLevelExp >= levelInfo.areaMin && this.curLevelExp <= levelInfo.areaMax)
            {
                let rets:any[] = [];
                rets.push(levelInfo);
                rets.push(this.curLevelExp);
                return rets;
            }
        }

        let rets:any[] = [];
        rets.push(this.levelInfoList[0]);
        rets.push(this.curLevelExp);
        return rets;
    }

    public GetNextLevelInfo()
    {
        let nextIndx = 0;
        for (let idx = 0; idx < this.levelInfoList.length; idx++)
        {
            let levelInfo = this.levelInfoList[idx];
            if (this.curLevelExp >= levelInfo.areaMin && this.curLevelExp <= levelInfo.areaMax)
            {
                nextIndx = idx;
                break;
            }
        }

        return this.levelInfoList[nextIndx+1];
    }

    public GetDateKey()
    {
        let date = new Date();
        let time = date.getTime();
        if (this.currentTime > 0)
        {
            time = this.currentTime;
        }
        date.setTime(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let monthStr = month >= 10 ? month : "0" + month;
        let day = date.getDate();
        let dayStr = day >= 10 ? day : "0" + day;
        let dateKey = year + '-' + monthStr + '-' + dayStr;
        return dateKey;
    }
}

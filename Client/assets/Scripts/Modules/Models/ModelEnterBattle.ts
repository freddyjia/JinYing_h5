import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { HallMsgDefine, GameCommonMsgDefine } from "../../Protos/MessageDefine";
import { PushMatchResult, OpenPlayListRes } from "../../Protos/HallData";
import MessageNames from "../MessageNames";
import { PushAlreadyGame, KickoutRoom, PlayInfo, IPlayInfo, PlayGameReq, CancelMatch } from "../../Protos/GameCommon";
import Dialog, { DialogType } from "../../Tools/Dialog";
import TIPS from "../../Global/Tips";
import Toast from "../../Tools/Toast";
import { CommonUpTipsRes, EmptyReq } from "../../Protos/Common";
import Global from "../../Global/Global";


export default class ModelEnterBattle extends Model 
{
    public pushMatchResult:PushMatchResult; 
    private matchFinish:boolean;
    public playInfoDic:{[playType:number]:Array<PlayInfo>};
    private playingPlayType:number;
    private playingPlayId:number;

    public Init()
    {
        // let gameId = 0;
        // this.playInfoDic = {};

        // let arr = new Array<PlayInfo>();
        // for (let i = 1; i <= 3; i++)
        // {
        //     let pi = new PlayInfo();
        //     pi.playType = 4;
        //     pi.playId = gameId++;
        //     arr.push(pi);
        // }
        // this.playInfoDic[4] = arr;

        // arr = new Array<PlayInfo>();
        // for (let i = 1; i <= 4; i++)
        // {
        //     let pi = new PlayInfo();
        //     pi.playType = 8;
        //     pi.playId = gameId++;
        //     arr.push(pi);
        // }
        // this.playInfoDic[8] = arr;
        // return;
        
        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall,HallMsgDefine.MSG_PUSH_MATCH_RESULT,(data)=>{
            let res = PushMatchResult.decode(data);
            this.pushMatchResult = res;
            this.SendMessage(MessageNames.PushMatchingResult);
            this.matchFinish = true;
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall,GameCommonMsgDefine.MSG_ALREADY_PLAY_GAME,(data)=>{
            let res = PushAlreadyGame.decode(data);
            if(Global.showLog == true)
                cc.error("还有没有结束的小游戏");
            Dialog.ShowWithYesNoContent(DialogType.Normal,"确认",res.tips,TIPS.YES,TIPS.NO,()=>{
                this.SendMessage(MessageNames.OpenSmallGameWithId, res.playInfo)
            },()=>{});
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall,GameCommonMsgDefine.MSG_KICK_OUT_GAME_ROOM,(data)=>{

            let res = KickoutRoom.decode(data);
            let tips = res.tips;

            if(tips.length > 0)
            {
                Toast.Show(tips);
            }
            else
            {
                // Toast.Show("您已被踢出房间");
            }
            
            this.SendMessage(MessageNames.KickOutSmallGame);
            this.SendMessage(MessageNames.ExitSmallGame);
        });

        TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall,HallMsgDefine.MSG_OPEN_PLAY_LIST_REQ,(data)=>{
            let res = OpenPlayListRes.decode(data);
            this.SetPlayInfo(res.playInfo);
        });

    }

    private SetPlayInfo(playInfoData:IPlayInfo[])
    {
        this.playInfoDic = {};
        for(let i = 0;i<playInfoData.length;i++)
        {
            // cc.error("playInfoData[i].playId " + playInfoData[i].playType + " playInfoData[i].playId " + playInfoData[i].playId);
            let playInfo = playInfoData[i];
            if(this.playInfoDic[playInfo.playType] == null)
            {
                this.playInfoDic[playInfo.playType] = [];
            }
            this.playInfoDic[playInfo.playType].push(playInfo as PlayInfo);
        }
        for(let playType in this.playInfoDic)
        {
            this.playInfoDic[playType].sort((a,b)=>{
                return a.playId - b.playId
            });
        }
    }

    public RequestPlayGame(playType:number, playId:number,funcSuccess,funcFail)
    {
        this.matchFinish = false;
        let req = PlayGameReq.create();
        req.playType = playType;
        req.playId = playId;
        this.playingPlayType = playType;
        this.playingPlayId = playId;

        let senddata = PlayGameReq.encode(req).finish();

        TCPNetwork.GetInstance().Send(TCPSessionID.Hall,HallMsgDefine.MSG_PLAY_GAME,senddata,(data)=>{
            let res = CommonUpTipsRes.decode(data);
            if(Global.showLog == true)
                cc.log(res.tips);
            if(res.success == true)
            {
                funcSuccess();
            }
            else
            {
                funcFail(res.tips);
                Toast.Show(res.tips);
            }
        },(errMsg)=>{
            funcFail(errMsg);
        });
    }

    public RequestRoomTypeList(successCallback)
    {
        if(this.playInfoDic != null)
        {
            successCallback();
            return;
        }

        let req = EmptyReq.create();
        let senddata = EmptyReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall,HallMsgDefine.MSG_OPEN_PLAY_LIST_REQ,senddata,(data)=>{
            let res = OpenPlayListRes.decode(data);
            this.SetPlayInfo(res.playInfo);
            successCallback();
        },(errMsg)=>{
            
        });
    }

    public SendEnter(msgID,extraDataFunc)
    {
        // cc.error("SendEnter " + msgID);
        let req = EmptyReq.create();
        let senddata = EmptyReq.encode(req).finish();
        if(extraDataFunc != null)
        {
            senddata = extraDataFunc();
        }

        TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall,msgID,senddata);
    }

    public SendExit(msgID,funcSuccess)
    {
        let senddata = null;
        if(this.matchFinish == false)
        {
            let req = CancelMatch.create();
            req.playType = this.playingPlayType;
            req.playId = this.playingPlayId;
            senddata = CancelMatch.encode(req).finish();
            TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall,HallMsgDefine.MSG_CANCEL_PLAY,senddata);
        }
        else
        {
            let req = EmptyReq.create();
            senddata = EmptyReq.encode(req).finish();
            TCPNetwork.GetInstance().SendOneWay(TCPSessionID.Hall,msgID,senddata);
        }

        funcSuccess();
    }
    
}

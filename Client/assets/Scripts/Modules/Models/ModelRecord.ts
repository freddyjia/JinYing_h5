import Model from "../../MVCFramework/Model";
import { CardInfo } from "../../Protos/LongHuDou";
import { HistoryRecord } from "../../Protos/LongHuDou";
import { HistoryCardInfo } from "../../Protos/LongHuDou";
import {  PushBattleSettlementRes } from "../../Protos/LongHuDou";

import {RBCardType, RBHistoryRecord, RBBattleState, IUserBetRedBlack, UserBetRedBlack, RBBetArea, RBRoleInfo, WinStatus } from "../../Protos/RedBlackBattle";
import {IHistoryCardInfo,IRBBetAreaInfo,BetRedBlackReq, RBSeatInfo, UpdateRBRoomDataRes, PushUserBetRedBlackRes,   PushRBBattleSettlementRes ,InitRBRoomDataRes, RBBetAreaInfo} from "../../Protos/RedBlackBattle";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import MessageNames from "../MessageNames";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

///红黑龙虎的历史纪录记录model
export default class ModelRecord extends Model 
{
    public playerGameCount :number ;
    public leftWinCount :number ;
    public rightWinCount :number; ;
    public heCount :number ;
    public wouldBeInitUI:Boolean;
    public leftWinRate:number;
    public rightWinRate:number;
    public rGameType:number;
    public  list20Game:Array<number> = [];
    public victoryList:Array<any> = [];
    public historyRecordLHList:Array<HistoryCardInfo> = [];
    public cardInfoList:Array<IHistoryCardInfo> = [];
 
    public Init()
    {
        this.wouldBeInitUI = true;
        this.list20Game = [];
        this.cardInfoList = [];  
        this.victoryList = [];
        this.historyRecordLHList= [];

        this.leftWinCount = 0;
        this.rightWinCount = 0;
        this.heCount = 0;
        this.playerGameCount = 0;
        this.leftWinRate = 0;
        this.rightWinRate = 0;
    }

    ///
    public ParseRedBlackData(historys:RBHistoryRecord)
    {  
        if(Global.showLog == true)
            cc.error("红黑数据已经来了---------------------------------");
        this.rGameType = GameTypeMgr.Config.RedBlack.gameType;
        this.list20Game = [];
        this.cardInfoList = [];  
        this.victoryList = [];


        this.leftWinCount = 0;
        this.rightWinCount = 0;
        this.heCount = 0;
        this.playerGameCount = 0;
        historys.victoryList.reverse().forEach(element => {
            if(this.list20Game.length>=20)
            {
                return;
            }
            this.list20Game[this.list20Game.length] = element;
        }); 

        historys.cardInfoList.reverse().forEach(element => {
 
            this.cardInfoList [this.cardInfoList .length] = element;
        }); 
 
        let count = this.cardInfoList.length - 20;
     
        for (let index = 0; index < count; index++) {
            this.cardInfoList.splice(this.cardInfoList.length-1,1);
        }

        historys.victoryList.reverse().forEach(elemnt=>{
            this.victoryList.push(elemnt);
            switch(elemnt)
            {
                case WinStatus.BlackWinStatus:
                    this.leftWinCount +=1;
                break;
                case WinStatus.RedWinStatus:
                    this.rightWinCount +=1;
                break;
                case WinStatus.EqualWinStatus:
                    this.heCount +=1;
                break;
            }
            this.playerGameCount+=1;            
        });
        this.leftWinRate = historys.blackWinningRate;
        this.rightWinRate = historys.redWinningRate;
    }
    
    ///
    public ParseLonghuData(historys:HistoryRecord)
    {   
        if(Global.showLog == true)
            cc.error("龙虎数据已经来了---------------------------------");
        this.rGameType = GameTypeMgr.Config.LongHuDou.gameType;
        this.leftWinCount = 0;
        this.rightWinCount = 0;
        this.heCount = 0;
        this.playerGameCount = 0;
        this.victoryList = [];

    

        this.list20Game = [];
        this.cardInfoList = [];  
        this.victoryList = [];
        this.historyRecordLHList= [];

        historys.recordArray.forEach(element => {
            this.historyRecordLHList[this.historyRecordLHList.length] = element;
        });

        let count =  this.historyRecordLHList.length -10;
        
        for (let index = 0; index < count; index++) {
            this.historyRecordLHList.splice(0,1);
        }

        //服务器 最新的战绩都在屁股后面 所以从后面取 把最新的放在第一个
        historys.victoryList.reverse().forEach(element => {
            switch(element)
            {
                case WinStatus.BlackWinStatus:
                    this.leftWinCount +=1;
                break;
                case WinStatus.RedWinStatus:
                    this.rightWinCount +=1;
                break;
                case WinStatus.EqualWinStatus:
                    this.heCount +=1;
                break;
            }
            this.playerGameCount+=1; 

            if(this.list20Game.length>=20)
            {
                return;
            }
            this.list20Game[this.list20Game.length] = element;
        }); 

        historys.victoryList.reverse().forEach(element=>{
            this.victoryList.push(element);
        });
 
        this.leftWinRate = historys.blackWinningRate;
        this.rightWinRate = historys.redWinningRate;
        //cc.error( this.leftWinRate+"$$$$$$$$$$$$"+ this.rightWinRate);
    }

    ///
    public UpdateDragVsTigerRecord(data:PushBattleSettlementRes)
    {
        if( this.rGameType != GameTypeMgr.Config.LongHuDou.gameType)
        {
            return;
        }
        if(data.updateRecord.isClear)
        {
            this.Init();
        }

        let recordData = data.updateRecord;
        this.list20Game.unshift(data.winState);
        if( recordData.newRecord)
        {
            this.historyRecordLHList[this.historyRecordLHList.length] = recordData.newRecord;
            this.victoryList.push(recordData.newWinStatus);
        }

        let count =  this.historyRecordLHList.length -10;
        
        for (let index = 0; index < count; index++) {
            this.historyRecordLHList.splice(0,1);
        }

        this.leftWinRate = recordData.blackWinningRate;
        this.rightWinRate = recordData.redWinningRate;

        switch(data.updateRecord.newWinStatus)
        {
            case WinStatus.BlackWinStatus:
                this.leftWinCount +=1;
            break;
            case WinStatus.RedWinStatus:
                this.rightWinCount +=1;
            break;
            case WinStatus.EqualWinStatus:
                this.heCount +=1;
            break;
        }
        this.playerGameCount++;
    }   

    ///
    public UpdateRedVsBlackRecord(data:PushRBBattleSettlementRes)
    {
        if( this.rGameType != GameTypeMgr.Config.RedBlack.gameType)
        {
            return;
        }
        if(data.updateRecord.isClear)
        {
            this.Init();
        }

        if( this.rGameType != GameTypeMgr.Config.RedBlack.gameType)
        {
            return;
        }
        let recordData = data.updateRecord;
        this.list20Game.unshift(recordData.newWinStatus);
        this.cardInfoList.unshift(recordData.newCardInfo);
        let count = this.cardInfoList.length - 20;
     
        for (let index = 0; index < count; index++) {
            this.cardInfoList.splice(this.cardInfoList.length-1,1);
        }

        this.leftWinRate = recordData.blackWinningRate;
        this.rightWinRate = recordData.redWinningRate;

        if(recordData)
        {
            this.victoryList.push(recordData.newWinStatus);
        }
 

        switch(data.updateRecord.newWinStatus)
        {
            case WinStatus.BlackWinStatus:
                this.leftWinCount +=1;
            break;
            case WinStatus.RedWinStatus:
                this.rightWinCount +=1;
            break;
            case WinStatus.EqualWinStatus:
                this.heCount +=1;
            break;
        }
        this.playerGameCount++;
    }

}
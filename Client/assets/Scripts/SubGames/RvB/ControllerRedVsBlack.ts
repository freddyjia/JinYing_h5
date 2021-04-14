 import { ChangeBattleStateRes,IRBRoleInfo, RBBattleState, IUserBetRedBlack, UserBetRedBlack, RBBetArea, RBRoleInfo, IInitRBRoomDataRes,
    InitRBRoomDataRes,RBHistoryRecord,HistoryCardInfo,IHistoryCardInfo 

} from "../../Protos/RedBlackBattle";
import ViewRedVsBlack from "./ViewRedVsBlack";
import ModelRedVsBlack from "./ModelRedVsBlack";
import ViewRedVsBlackRecord from "./ViewRedVsBlackRecord";
import { Random } from "../../Tools/Random";
import Global from "../../Global/Global";
import AudioManager from "../../Manager/AudioManager";
import TimerManager from "../../Components/TimerManager";
import Dialog, { DialogType }  from "../../Tools/Dialog";
import Util from "../../Tools/Util";
import UploadAnalytics from "../../Tools/UploadAnalytics";
import ConstStr from "../../Global/ConstStr";
import Toast from "../../Tools/Toast";
import View from "../../MVCFramework/View";
import { ViewNames, MVCRegister } from "../../Modules/MVCRegister";
import { RedBlackMsgDefine } from "../../Protos/MessageDefine_RedBlack";
import Controller from "../../MVCFramework/Controller";
import SmallGameData from "../../Modules/Models/SmallGameData";
import MessageNames from "../../Modules/MessageNames";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import { PlayInfo } from "../../Protos/GameCommon";
import ModelRecord from "../../Modules/Models/ModelRecord";
import { RedVsBlackConfig } from "./RedVsBlackConfig";
import { DragonVsTigerConfig } from "../DVT/DragonVsTigerConfig";
import ccC from "../../Tools/ccC";
 
export default class ControllerRedVsBlack extends Controller
{    
   
    //龙虎界面
    private _View: ViewRedVsBlack ;
 
    //红黑走势记录
    private _ViewTrendRecord: ViewRedVsBlackRecord ;
    //龙虎信息模块。
    private _Model:ModelRedVsBlack;
    //
    private _ModelRec:ModelRecord;
    //玩家id
    private playerID:string;
    //初始化数据信息 。
    private  myRoleInfo:RBRoleInfo;
    //开发阶段。
    private gameInitRoomDataRes:InitRBRoomDataRes;  
    //计时器列表
    private timerIDsArray:Array<string> = [];
    //
    private  dataInited:boolean;
    private requestTime:any;
    private reqCoinNumber:any;
    //接下来的钱？
    private nextGold:number;

    private   chipTypeArray:Array<number> = [100,1000,5000,10000,50000];
    //
    public Init()
    {
        this._Model = this.GetModel("ModelRedVsBlack") as ModelRedVsBlack;
        this._ModelRec = this.GetModel("ModelRecord") as ModelRecord;
    }

    //消息接收
    public OnReceiveMessage(msg:string,msgBody:any)
    { 
        if(msg == MessageNames.RedVsBlackInitSmallGame)
        {   
            let smallGameData = new SmallGameData();
            smallGameData.SetGameType(GameTypeMgr.Config.RedBlack.gameType);
            smallGameData.SetEnterMsgID(RedBlackMsgDefine.MSG_GAME_LOGIN_RED_BLACK);
            smallGameData.SetExitMsgID(RedBlackMsgDefine.MSG_REDBLACK_LEAVE_REQ);

             
            smallGameData.SetEnterFunc((playInfo:PlayInfo)=>{
                this.OpenRedBlack(playInfo);
            });

            smallGameData.SetExitFunc(()=>{
                this.ExitRedBlackGame();
            });
            smallGameData.SetCurrencyUpdateFunc((isRefresh:boolean)=>{
                if(this._View != null && this._View.isShow == true)
                {
                    if(Global.showLog == true)
                        cc.error("充值引起的金币变化SetCurrencyUpdateFunc"+ Global.PlayerInfo.PlayerCurrency.Gold);

                    if(this._Model.roleInfo == null)
                    {
                        return;
                    }
                    if(isRefresh == true)
                    {
                        this._Model.roleInfo.gold = ( Global.PlayerInfo.PlayerCurrency.Gold).toString();
                        //充值引起的金币变化
                    }
                    else
                    { 
                        if(this._Model.gameState == RBBattleState.BetState)
                        {

                            this.nextGold = 0;
                            this._Model.roleInfo.gold = ( Global.PlayerInfo.PlayerCurrency.Gold).toString();
                        }
                        else
                        {
                            this.nextGold = Global.PlayerInfo.PlayerCurrency.Gold;
                        }
                    }

                    let betNumber = this._View.UpdateViewGold(Global.PlayerInfo.PlayerCurrency.Gold);
                    if(betNumber!=null)
                    {
                        this.reqCoinNumber = betNumber*100;
                    }
                   // this._View.playerGold.string = Util.formatGoldText( Global.PlayerInfo.PlayerCurrency.Gold );
                   if(this._Model.gameState ==  RBBattleState.BetState)
                   {
                        this._View.UpdatePlayerGold(Global.PlayerInfo.PlayerCurrency.Gold);
                   }
                }
            });

            if(Global.showLog == true)
                cc.log("這條消息我已經發出去了");
            this.SendMessage(MessageNames.InitSmallGame,smallGameData);
        }
        else if(msg == MessageNames.RedVsBlackPushRoomInitData)
        {
            this.myRoleInfo = msgBody.myRoleInfo as RBRoleInfo;
            this.gameInitRoomDataRes =msgBody as InitRBRoomDataRes;
            let  gameHistory =msgBody.historyRecord as RBHistoryRecord;
            this._ModelRec.ParseRedBlackData( gameHistory  );

            if(this._View != null)
            {
                this._View.InitMyPlayerInfo( this.myRoleInfo );
                this._View.InitPlayerArrayList(  this._Model.seatArray );
                this._View.RefreshMyBetInfo(this._Model);
                this._View.InitlizeDesktopState(this._Model);
                this.UpdateViewRecData();
                this._View.RefreshMark(this._Model);
                this._View.TrendOK();
                this._View.RefreshShenSuan(this._Model);
                if(Global.PlayerInfo.PlayerCurrency.Gold>0)
                {
                    this.reqCoinNumber = this.chipTypeArray[0];
                }
            }
        }
        else if(msg == MessageNames.RedVsBlackStateChange)
        {
            if(this._View == null)
            {
                return;
            }
            let res: ChangeBattleStateRes = msgBody as ChangeBattleStateRes;
            this._View.DisableBetPanel(res.battleState == RBBattleState.BetState);

         
            let number =  this._View.DisableBetButton(res.battleState == RBBattleState.BetState,Global.PlayerInfo.PlayerCurrency.Gold);
            this.reqCoinNumber = number;
            //this.DeleteAllTimer();
            
            switch(res.battleState)
            {
                case RBBattleState.WaitingStartState:
                    this._View.WaitStartState();
                break;
                case RBBattleState.BetState:
                    //this.DeleteAllTimer();
                    this._View.StartBettingState(res.countDown);
                break;
                case RBBattleState.StopBetState:
                    this._View.StopBettingState(()=>{

                    });
                break;
                case RBBattleState.SettlementState:
                    //this._View.SettleMentWork(this._Model);
                break;
                case RBBattleState.WaitingNextGame:
                    this._View.TimerCountDown(res.countDown);    
                break;
            }
        }
        else if(msg == MessageNames.RedVsBlackRoomDataChange)
        {
            if(this._View == null)
            {
                return;
            }
            this._View.InitPlayerArrayList(this._Model.seatArray);
        }
        else if(msg == MessageNames.RedVsBlackUpdateOtherGuyBetInfo)
        {
            if(this._View == null)
            {
                return;
            }
            let chipByOtherArray:Array<Array<UserBetRedBlack>> = msgBody;
            this.DelayShowBet(chipByOtherArray,1);
            this._View.RefreshMyBetInfo(this._Model);
        }
        else if(msg == MessageNames.RedVsBlackSeatPlayerBet)
        {
            if(this._View == null)
            {
                return;
            }
            let messgeArray = msgBody;
            let userBet:UserBetRedBlack = msgBody[1];
            let isGodBet:boolean = msgBody[2];
            
            let delay = Random.RangeFloat(0,1);
            Util.PerformWithDelay(delay,()=>{
                this._View.ShowPlayerBetChip(this._Model.roleInfo.playerId,userBet.playerId,userBet,this._Model,isGodBet);
                this._View.RefreshMyBetInfo(this._Model,isGodBet);
            },this.timerIDsArray,false);
        }
        else if(msg == MessageNames.RedVsBlackBetSuccess)
        {
            let betInfo = msgBody ;
            let ShowPlayerBetChip: UserBetRedBlack = new  UserBetRedBlack();
            ShowPlayerBetChip.playerId = this._Model.roleInfo.playerId;
            ShowPlayerBetChip.gold = this._Model.roleInfo.gold;
            ShowPlayerBetChip.betArea = betInfo[0];
            ShowPlayerBetChip.chipType = betInfo[1];

            this._View.MyPlayerLocalBetAnimation(ShowPlayerBetChip);
            this._View.RefreshMyBetInfo(this._Model);
        }
        else if(msg == MessageNames.RedVsBlackBetSettlement)
        {


            if(this._View == null)
            {
                return;
            }

            this._View.SettleMentWork(this._Model,()=>{
                
 
            });

            this._ModelRec.UpdateRedVsBlackRecord(this._Model.settlementData);
            Util.PerformWithDelay(5.0,()=>{

                this._View.UpdatePlayerGold(Global.PlayerInfo.PlayerCurrency.Gold);
                this.UpdateViewRecData(false);
                this.SendMessage(MessageNames.UpdateRecord);
            }); 
        }
    }


    public UpdateViewRecData(needDelay:boolean = false)
    {   
        if(needDelay)
        {
            Util.PerformWithDelay(3,()=>{
                this._View.Refresh20GameResult(this._ModelRec.list20Game);
                this._View.Refresh9GamePaixing(this._ModelRec.cardInfoList);
            },this.timerIDsArray,true)
        }
        else
        {
            this._View.Refresh20GameResult(this._ModelRec.list20Game);
            this._View.Refresh9GamePaixing(this._ModelRec.cardInfoList);
        }
    }

     //延迟显示筹码。
     public DelayShowBet(betList:Array<Array<UserBetRedBlack>>,leftTime:number)
     {
         let intervalTime = 0.2;
         let intervalNum = betList.length;
         let maxTime = leftTime/intervalNum *2;
         if(intervalNum == 1)
         {
             maxTime = intervalNum;
         }
         if(maxTime > intervalTime)
         {
             intervalTime = Random.RangeInt(intervalTime,maxTime);
         }
         let betData = betList[0];

        

         Util.RemoveArray(betList,betData);
         if(betData != null)
         {  
            betData.forEach(element => {   
                this._View.ShowPlayerBetChip(Global.PlayerInfo.playerId,
                    element.playerId,element,this._Model,false
                );
            });
         }
       
         AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.SoundBet1)

         leftTime -= intervalTime;
         if(betList.length > 0)
         {
             let timerId =  TimerManager.GetInstance().CallActionDelay(()=>{
                 this.DelayShowBet(betList,leftTime);
             },intervalTime);
             this.timerIDsArray.push(timerId);
         }
         return;
     }
    

    private OpenRedBlack(playInfo:PlayInfo)
    { 
        if(this._View == null){
                this._View = this.GetView(ViewNames.ViewRedVsBlack) as ViewRedVsBlack;
              
                this._View.SetOnClick("return",()=>{ 
                      if(this._Model.myTotalBet>0)
                      {
                          Dialog.ShowWithYesNoContent(DialogType.length,"提示",ConstStr.ExitLongHu,"确定","取消",()=>{
                            if(Global.showLog == true)
                              cc.error("退出-----------------");
                            this.Exit();
                          },()=>{   
                                  
                              }
                          );
                      }
                      else
                      {
                          this.Exit();
                      }
                  });

                this._View.SetOnClick("charge",()=>{
                    this.SendMessage(MessageNames.OpenPay);
                    if(Global.showLog == true)
                        cc.log("打开充值界面=====");
                });

                this._View.SetOnClick("myplayerhead",()=>{
                    if(Global.showLog == true)
                        cc.log("打开我的头像界面=====");
                });

                this._View.SetOnClick("trend",()=>{
                    if(Global.showLog == true)
                        cc.log("打开趋势界面=====");
                    let gameType = GameTypeMgr.Config.RedBlack.gameType;
                    this.SendMessage(MessageNames.OpengameRecord , gameType);
                });

                this._View.SetOnClick("tip",()=>{
                    if(Global.showLog == true)
                        cc.log("打开玩法提示界面=====");
                    this.SendMessage(MessageNames.OpenGameRule,{gameType:GameTypeMgr.Config.RedBlack,callBack:null});
                });

                this._View.SetOnClick("online",()=>{
                    if(Global.showLog == true)
                        cc.log("打开在线玩家列表界面=====");
                   this.SendMessage(MessageNames.OpenSmallGameRank,RedBlackMsgDefine.MSG_COMMON_RANK_LIST);
                });
                this._View.SetOnClick("myplayerhead",()=>{
                    if(Global.showLog == true)
                        cc.log("打开玩家信息界面=====");
                });

                this._View.SetOnClick("betOnHe",()=>{
                    //測試代碼
                    this.IWantBet(RBBetArea.MultipleArea);
                });

                this._View.SetOnClick("betOnLong",()=>{
                    this.IWantBet(RBBetArea.BlackArea);
                     
                });

                this._View.SetOnClick("betOnHu",()=>{
                    this.IWantBet(RBBetArea.RedArea);   
                });
                
                for (let index = 1; index <= 5; index++) {

                    let val:number = index;
           
                    this._View.SetOnClick("betC"+index,(button:cc.Button,data:any)=>{
                        if(Global.showLog == true)
                            cc.log("玩家点击了===="+val);
                        this.reqCoinNumber = this.chipTypeArray[index-1];
                        this._View.ShowingEffect(button);
                    });
                }
            }
            if(Global.PlayerInfo.PlayerCurrency.Gold>0)
            {
                this.reqCoinNumber = this.chipTypeArray[0];
            }
            this._View.Show(()=>{
                this._View.DisableBetPanel(false);
                this._View.Reset();
                this._View.ResetAllPoker();
                this.SendMessage(MessageNames.EnterSmallGameFinish,GameTypeMgr.Config.RedBlack.gameType);
            });
    }

    private IWantBet(betarea:any)
    { 
        if(this._Model.baseLimit > (new Number( Global.PlayerInfo.PlayerCurrency)))
        {    
            Toast.Show("余额"+(this._Model.baseLimit/100)+"以上才可以下注，请您充值" );
            return;
        }

        if(this._Model.myTotalBet[betarea]+this.reqCoinNumber> this._Model.myMostAreaCoinLimit[betarea] )
        {
            Toast.Show(ConstStr.BetAreaLimit);
            return;
        }
        
        this.requestTime = UploadAnalytics.GetMillSecondTimestamp();
        this._Model.SendMyBet(betarea,this.reqCoinNumber,this.requestTime);
    }

    private Exit()
    {
        this.SendMessage(MessageNames.ExitSmallGame);

    }

    private DeleteAllTimer()
    {
        this.timerIDsArray.forEach((element)=>{
            TimerManager.GetInstance().DeleteTimer(element);
        });
    }
    
    /**
     *  CloseLongHu
    */
    private  ExitRedBlackGame() {
        this.SendMessage(MessageNames.HideRoleInfo);

        AudioManager.GetInstance().SoundPause(RedVsBlackConfig.Audio.BgMusic);
        this.DeleteAllTimer();
        this.dataInited = false;
        TimerManager.GetInstance().ClearAllButKeepLive();
        this.timerIDsArray = [];
        //this._View.DeleteTimer();
        this._View.Hide();
    }
}
 
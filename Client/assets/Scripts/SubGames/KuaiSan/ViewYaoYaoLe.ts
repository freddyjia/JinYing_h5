import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import { YaoYaoLeConfig } from "./YaoYaoLeConfig";
import TimerManager from "../../Components/TimerManager";
import AudioManager from "../../Manager/AudioManager";
import SpriteUtil from "../../Tools/SpriteUtil"
import { Random } from "../../Tools/Random";
import Global from "../../Global/Global";
import XTween from "../../Tools/XTween/XTween";
import { XTweenCurvType } from "../../Tools/XTween/Base/XTweenCurv";
import ccC from "../../Tools/ccC";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewYaoYaoLe extends View 
{ 
    PanelTrendMaskTf:cc.Node;
    DeskDT:cc.Node;
    GameBgDT:cc.Node;
    Bottom:cc.Node;
    PlayerselfName:cc.Label;
    PlayerselfGold:cc.Label;
    playerIcon:cc.Node;
    PanelTrend:cc.Node;
    SpineChip:cc.Node;
    TimerTf:cc.Node;
    TimerText:cc.Label;
    KuaiSanSpineNewestResult:cc.Node;
    Player:{[nodeName:string]:cc.Node}={};
    SeatNoBody:{[nodeName:string]:cc.Node}={};
    SeatHead:{[nodeName:string]:cc.Node}={};
    GoldItem:{[nodeName:string]:cc.Node}={};
    PlayerGoldTxt:{[nodeName:string]:cc.Label}={};
    PlayerNameTxt1:cc.Label;
    PlayerNameTxt2:cc.Label;
    InfoShowPoint:{[nodeName:string]:cc.Node}={};
    BtnBetNum:{[nodeName:string]:cc.Node}={};
    ChipItem:{[nodeName:string]:cc.Node}={};
    BetArea:{[nodeName:string]:cc.Node}={};
    BetChipArea:{[nodeName:string]:cc.Node}={};
    BetAreaWin:{[nodeName:string]:cc.Sprite}={};
    Feixingxing:{[nodeName:string]:cc.Node}={};
    FeixingxingOriPos:{[nodeName:string]:any}={};
    BetAreaAllGold:{[nodeName:string]:cc.Label}={};
    BetAreaMyGold:{[nodeName:string]:cc.Label}={};
    ShenSuanZiMark:{[nodeName:string]:cc.Node}={};
    BtnBetImage:{[nodeName:string]:cc.Sprite}={};
    SeatWinSpine:{[nodeName:string]:sp.Skeleton}={};
    WinGoldAnimation:{[nodeName:string]:cc.Node}={};
    MyselfWinGoldAnimation:cc.Node;
    MyselfWinSpine:sp.Skeleton;
    MyselfWinGoldText:cc.Label;
    MyselfLoseText:cc.Label;
    WinGoldText:{[nodeName:string]:cc.Label}={};
    LoseGoldText:{[nodeName:string]:cc.Label}={};
    TrendItem:{[nodeName:string]:cc.Node}={};
    ResultPanel:cc.Node;
    ResultBottom:cc.Node;
    ResultPointText:cc.Label;
    ResultTypeImg:cc.Sprite;
    ResultType1:cc.Sprite;
    ResultType2:cc.Sprite;
    pointDesc:cc.Node;
    ResultSpine:sp.Skeleton;
    resultItem1:cc.Sprite;
    resultItem2:cc.Sprite;
    resultItem3:cc.Sprite;
    DealerHandSai:cc.Node;
    HandSai1:cc.Sprite;
    HandSai2:cc.Sprite;
    HandSai3:cc.Sprite;
    PreStarContent:cc.Node;
    SpineWaitForNextRound:sp.Skeleton;
    SpineStartBet:sp.Skeleton;
    SpineStopBet:sp.Skeleton;
    DealerSpine:sp.Skeleton;
    ChipTf:cc.Node;
    ObserveTf:cc.Node;
    PlayersPanelTf:cc.Node;
    public goodBet=[];
    public betPanelAniList=[];
    public getChipHeadAniList=[];
    chipZIndex=0;    //筹码渲染顺序

    y=[[],[],[],[],[],[],[],[],[],[]];
    //更新入座玩家信息
    public OnAwake()
    {
    //   ccC.log("先找到所有组件");
      this.PanelTrendMaskTf=this.FindTransform("PanelTrendMaskTf");
      this.DeskDT=this.FindTransform("DeskDT");
      this.GameBgDT=this.FindTransform("GameBgDT");
      this.Bottom=this.FindTransform("Bottom");
      this.PlayerselfName=this.FindTransform("MyNickName").getComponent(cc.Label);
      this.PlayerselfGold=this.FindTransform("MyGold").getComponent(cc.Label);
      this.playerIcon=this.FindTransform("MyHead");
      this.PanelTrend=this.FindTransform("PanelTrend");

      this.MyselfWinGoldAnimation=this.FindTransform("MyselfWinGoldAnimation")
      this.MyselfWinSpine=this.FindTransform("MyselfWinSpine").getComponent(sp.Skeleton);
      this.MyselfWinGoldText = this.MyselfWinGoldAnimation.getChildByName("WinText").getComponent(cc.Label);
      this.MyselfLoseText = this.MyselfWinGoldAnimation.getChildByName("LoseText").getComponent(cc.Label);
      this.SpineWaitForNextRound=this.FindTransform("SpineWaitForNextRound").getComponent(sp.Skeleton);
      this.SpineStartBet = this.FindTransform("SpineStartBet").getComponent(sp.Skeleton);
      this.SpineStopBet = this.FindTransform("SpineStopBet").getComponent(sp.Skeleton);
      this.DealerSpine=this.FindTransform("DealerSpine").getComponent(sp.Skeleton);
      this.SpineChip=this.FindTransform("SpineChip");
      this.TimerTf=this.FindTransform("TimeDown");
      this.TimerText=this.FindTransform("TimeTex").getComponent(cc.Label);
      this.ChipTf=this.FindTransform("Chip");
      this.KuaiSanSpineNewestResult=this.FindTransform("TrendSpine");
      this.PreStarContent=this.FindTransform("PreStarContent");

      this.ObserveTf=this.FindTransform("Observe");
      this.PlayersPanelTf=this.FindTransform("PlayersPanel");
      this.ResultPanel=this.FindTransform("ResultPanel");
      this.ResultBottom = this.FindTransform("ResultBottom");
      this.ResultTypeImg = this.FindTransform("ResultType").getComponent(cc.Sprite);
      this.ResultType1 = this.FindTransform("ResultType1").getComponent(cc.Sprite);
      this.ResultType2 = this.FindTransform("ResultType2").getComponent(cc.Sprite);
      this.pointDesc = this.FindTransform("pointDesc")
      this.ResultPointText=this.FindTransform("ResultPoint").getComponent(cc.Label);
      this.ResultSpine=this.FindTransform("ResultSpine").getComponent(sp.Skeleton);

      this.resultItem1=this.FindTransform("resultItem1").getComponent(cc.Sprite);
      this.resultItem2=this.FindTransform("resultItem2").getComponent(cc.Sprite);
      this.resultItem3=this.FindTransform("resultItem3").getComponent(cc.Sprite);
      this.DealerHandSai=this.FindTransform("DealerHandSai");
      this.HandSai1=this.FindTransform("HandSai1").getComponent(cc.Sprite)
      this.HandSai2=this.FindTransform("HandSai2").getComponent(cc.Sprite)
      this.HandSai3=this.FindTransform("HandSai3").getComponent(cc.Sprite)
      let betTf=this.FindTransform("BetArea");

      //快三投注
      for(let i=1;i<11;i++){
          let objBezier=this.FindTransform("Feixingxing"+i);
          this.FeixingxingOriPos["FeixingxingOriPos"+i]={x:objBezier.position.x,y:objBezier.position.y};
          this.Feixingxing["Feixingxing"+i]=this.FindTransform("Feixingxing"+i);
          this.BetArea["BetArea"+i]=this.FindTransform("BetArea"+i);
          this.BetChipArea["BetChipArea"+i]=this.FindTransform("BetChipArea"+i);
          this.BetAreaWin["BetAreaWin"+i]=this.FindTransform("BetAreaWin"+i).getComponent(cc.Sprite);
          this.BetAreaAllGold["BetAreaAllGold"+i]= this.FindTransform("BetAreaAllGold"+i).getComponent(cc.Label);
          this.BetAreaMyGold["BetAreaMyGold"+i]=this.FindTransform("BetAreaMyGold"+i).getComponent(cc.Label);
          this.ShenSuanZiMark["ShenSuanZi"+i]=this.FindTransform("ShenSuanZi"+i)
          let betBtnTf=this.FindTransform("BetAreaBtn"+i);
          this.BtnBetImage["BtnBetImage"+i]=betBtnTf.getComponent(cc.Sprite);
      }
      //下注筹码按钮和筹码
      for(var i=1;i<6;i++){
          this.BtnBetNum["BtnBetNum"+i]=this.FindTransform("BtnBetNum"+i);
          this.ChipItem["ChipItem"+i]=this.FindTransform("ChipItem"+i);
      } 

      //座位席玩家
      for(let i=1;i<7;i++){

        this.Player["Player"+i]=this.FindTransform("Player"+i);
        this.SeatNoBody["SeatNoBody"+i]=this.FindTransform("SeatNoBody"+i);
        this.SeatHead["SeatHead"+i]=this.FindTransform("SeatHead"+i);
        this.GoldItem["GoldItem"+i]=this.FindTransform("GoldItem"+i);
        this.PlayerGoldTxt["PlayerGoldTxt"+i]=this.FindTransform("PlayerGoldTxt"+i).getComponent(cc.Label);
        this.PlayerNameTxt1=this.FindTransform("PlayerNameTxt1").getComponent(cc.Label);
        this.PlayerNameTxt2=this.FindTransform("PlayerNameTxt2").getComponent(cc.Label);
        this.InfoShowPoint["InfoShowPoint"+i]=this.FindTransform("InfoShowPoint"+i);
        let winGoldAnimation=this.FindTransform("WinGoldAnimation"+i);      
        this.WinGoldAnimation["WinGoldAnimation"+i]=winGoldAnimation;
        this.WinGoldText["WinText"+i]=this.FindTransform("WinText"+i).getComponent(cc.Label);
        this.LoseGoldText["LoseText"+i]=this.FindTransform("LoseText"+i).getComponent(cc.Label);
        this.SeatWinSpine["PlayerWin"+i]=this.FindTransform("PlayerWin"+i).getComponent(sp.Skeleton);
        this.y[0].unshift(this.FindTransform("GoldItem"+i));
        this.betPanelAniList[i-1]=false;
      }
      //走势
      for(let i=1;i<11;i++){
          this.TrendItem["TrendItem"+i]=this.FindTransform("TrendItem"+i);
      }
      this.InitInfo();
   }
   public selectBetNumIndex; //当前选择的下注筹码中的第几个
   public betTime ;
   public isBetStatus ;    //当前游戏桌是否是下注状态
   public timerIds;          //所有的Timer的id
   public chipSlot=[];        //用于存放每个筹码区域里的筹码对象
   public chipPool;           //筹码对象池,里面存放的是未被使用的筹码
   public seatPlayers=[];            //上座玩家信息
   ChipSlot:{[nodeName:string]:cc.Node}={};
   public InitInfo()
   {
    //    ccC.log("初始化一些数组");
       this.selectBetNumIndex=1;   
       this.betTime=0;
       this.isBetStatus=false;
       this.timerIds=[];
       this.chipSlot=[[],[],[],[],[],[],[],[],[],[]];
       this.chipPool=[[],[],[],[],[]];
       this.seatPlayers=[];
   }
   public playId
   public SetPlayId(xxx){
       this.playId=xxx
   }
   
   public OnShowView()
   {      
       //cc.log(1312121);
       this.ShowInitPanel();
       this.ShowPanelAfterGetData(false);
       AudioManager.GetInstance().BGMPlay(YaoYaoLeConfig.Audio.SoundBgm);
       //下注时玩家头像抖动动画列表
       this.betPanelAniList=[];
       //玩家收筹码时头像涨动动画列表
       this.getChipHeadAniList=[];
       //神算子在9个下注区域下注的情况
       this.goodBet=[false,false,false,false,false,false,false,false,false,false];
       //设置摇摇乐或超级快三的界面

       if(this.playId==9001){
        //    ccC.log("打开摇摇乐");
       }
       else{
        //    ccC.log("打开快三");          
           this.ResultTypeImg.node.active=false;
           this.ResultType1.node.active=true;
           this.ResultType2.node.active=true;
           this.resultItem3.node.active=true;
           this.HandSai3.node.active=true;          
           for(let i=1;i<11;i++){
               this.BetArea["BetArea"+i].active=true;
           }
       }
    //    ccC.log("ViewYaoYaoLe OnShowView");
   }

   public ShowInitPanel(){
    //    ccC.log("ShowInitPanel");
       Util.PlaySpineEffect(this.DealerSpine,null,"1",true,false);
       if(this.playId==9001){

       }
       else{
           for(let i=1;i<11;i++){
               this.BetAreaMyGold["BetAreaMyGold"+i].string="";
               this.BetAreaAllGold["BetAreaAllGold"+i].string="";
               this.ShenSuanZiMark["ShenSuanZi"+i].active=false;

           }            
       }
       for(let q=1;q<11;q++){
           this.Feixingxing["Feixingxing"+q].active=false;
       }
       this.TimerTf.active=false;
       this.PanelTrend.active=false;
       for(let m=1;m<7;m++){
           this.WinGoldAnimation["WinGoldAnimation"+m].active=false;          
       }
       this.MyselfWinGoldAnimation.active=false;
       this.PanelTrendMaskTf.active=false;
       this.PreStarContent.active=true;
       this.DeskDT.active=false;
       this.GameBgDT.active=false;
       this.ResetInitUI();
   }

   public ShowPanelAfterGetData(hasInit){
       this.PlayersPanelTf.active=hasInit;
   }

   public isFirstTimeEnter;
   public OnHideView()
   {
       this.DeleteAllTimer();
       this.DelBetTimer();
       this.isFirstTimeEnter=null;
    //    ccC.log("ViewYaoYaoLe OnHideView");
   }
   
   public OnFocus()
   {
    //    ccC.log("ViewYaoYaoLe OnFocus");
   }
   
   public OnDisFocus()
   {
    //    ccC.log("ViewYaoYaoLe OnDisFocus");
   }
   
   public OnDestroy()
   {
    //    ccC.log("ViewYaoYaoLe OnDestroy");
   }
   
   public firstTouch;
   public hasOverTouch
   //服务端状态变成预备开始状态
   public StartNewRound(){
       this.DeleteAllTimer();
       this.SetWaitForNextRoundVisible(false);
       for(let i=1;i<7;i++){
           this.WinGoldAnimation["WinGoldAnimation"+i].active=false;
       }
       this.MyselfWinGoldAnimation.active=false;
       this.Show3DPanel(true);
    //    ccC.log("摇骰子!!!");
       Util.PlaySpineEffect(this.DealerSpine,null,"8",false,false);
       this.PlayDealerNormal(true);
    //    TimerManager.GetInstance().CallActionDelay(()=>{
    //        this.FinishYaoSaiMotion();
    //    },2,null,0,this.timerIds);
       AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.SoundYaoSai);
       let randomNum = Random.Range();
       if(randomNum<0.333){
           this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceYaoSai1);
       }
       else if(randomNum<0.666){
           this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceYaoSai2);
       }
       else{
           this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceYaoSai3);
       }
       this.firstTouch==true;    //第一次摸荷官
       this.hasOverTouch=false;  //本轮荷官已经播放过动作7，不会再播放动作6
   }

   //完成摇骰动作后执行的事件
//    public FinishYaoSaiMotion(){
//        ccC.log("完成摇骰动作后执行的事件")
//        this.PlayDealerNormal(true);
//    }

   //是否显示3D界面
   public Show3DPanel(isShow){
       if(isShow==true){
           this.PreStarContent.active=false;
           this.DeskDT.active=true;
           this.GameBgDT.active=true;
       }
       else{
           this.PreStarContent.active=true;
           this.DeskDT.active=false;
           this.GameBgDT.active=false;
       }
       this.ResetInitUI();
       if(isShow==true){
           TimerManager.GetInstance().CallActionDelay(()=>{
               let tmpTrans=this.DealerSpine.node;
               let dealerCurv=[0,-2.602692E-05,-9.918709E-05,-0.0002120997,-0.0003573837,-0.0005276585,-0.0007155432,-0.0009136567,-0.001114618,-0.001311047,-0.001495562,-0.001660783,-0.001799328,-0.001903818,-0.00196687,-0.001981104,-0.001939139,-0.001833595,-0.00165709,-0.001402244,-0.001061675,-0.0006280035,-9.384754E-05,0.0005481718,0.001305438,0.002185332,0.00319523,0.004342519,0.005634577,0.007078785,0.008682521,0.01045317,0.01239812,0.01452473,0.01684041,0.01935251,0.02206843,0.02499555,0.02814125,0.03151289,0.03511789,0.03896361,0.04305742,0.04740672,0.05201889,0.05690128,0.06206131,0.06750635,0.07324377,0.07928096,0.08562531,0.09228417,0.09926493,0.106575,0.1142217,0.1222126,0.1305548,0.1392558,0.148323,0.1577638,0.1675856,0.1777957,0.1884015,0.1994793,0.2116008,0.2248506,0.2391775,0.25453,0.2708566,0.288106,0.3062267,0.3251674,0.3448765,0.3653027,0.3863947,0.4081008,0.4303699,0.4531503,0.4763907,0.5000398,0.524046,0.5483581,0.5729245,0.5976938,0.6226146,0.6476355,0.6727051,0.6977721,0.7227849,0.747692,0.7724423,0.7969841,0.8212662,0.8452372,0.8688453,0.8920395,0.9147682,0.9369799,0.9586235,0.9796473,1];
               let xt=XTween.DoMove(tmpTrans,new cc.Vec2(0,166),new cc.Vec2(0,-115),0.28,1,false,null,null,null);
               xt.SetCustomCurv(dealerCurv);
               xt.Play();
           },0.2,null,0,this.timerIds);    
           TimerManager.GetInstance().CallActionDelay(()=>{
               let tmpTrans1=this.DealerSpine.node;
               let dealerCurv1=[0,0.02013665,0.04049374,0.060992,0.08155213,0.1020948,0.1225409,0.1428109,0.1628257,0.1825059,0.2017723,0.2205456,0.2387465,0.2562957,0.273114,0.289122,0.3042404,0.318807,0.3332668,0.3476189,0.3618615,0.375993,0.3900117,0.403916,0.4177043,0.4313748,0.4449258,0.4583559,0.4716633,0.4848463,0.4979032,0.5108326,0.5236325,0.5363016,0.548838,0.5612401,0.5735061,0.5856347,0.5976239,0.6094723,0.621178,0.6327397,0.6441553,0.6554234,0.6665425,0.6775105,0.6883261,0.6989875,0.7094932,0.7198412,0.7300303,0.7400585,0.7499243,0.759626,0.7691619,0.7785305,0.78773,0.7967587,0.8056151,0.8142974,0.8228041,0.8311334,0.8392837,0.8472534,0.8550407,0.8626441,0.8700619,0.8772924,0.884334,0.891185,0.8978437,0.9043085,0.9105778,0.9166498,0.9225231,0.9281958,0.9336663,0.9389329,0.9439941,0.9488481,0.9534934,0.9579282,0.9621509,0.9661598,0.9699532,0.9735296,0.9768873,0.9800246,0.9829398,0.9856313,0.9880975,0.9903366,0.9923471,0.9941272,0.9956754,0.9969899,0.9980692,0.9989114,0.9995152,0.9998786,1];
               let xt1=XTween.DoMove(tmpTrans1,new cc.Vec2(0,-115),new cc.Vec2(0,166),0.47,1,false,null,null,null);
               xt1.SetCustomCurv(dealerCurv1);
               xt1.Play();                        
           },1.8,null,0,this.timerIds);  
           TimerManager.GetInstance().CallActionDelay(()=>{
               let xt4=XTween.DoMove(this.DeskDT,new cc.Vec2(0,-77),new cc.Vec2(0,-211),0.3);
               let xt2=XTween.DoScale(this.DeskDT,cc.Vec2.ONE,new cc.Vec2(1.5,0.4),0.3,1,false,XTweenCurvType.InSine);
               xt4.Play();
               xt2.Play();                   
           },0.26,null,0,this.timerIds);  
           TimerManager.GetInstance().CallActionDelay(()=>{
               let xt3=XTween.DoScale(this.DeskDT,new cc.Vec2(1.5,0.4),cc.Vec2.ONE,0.5,1,false,XTweenCurvType.OutSine);
               let xt5=XTween.DoMove(this.DeskDT,new cc.Vec2(0,-211),new cc.Vec2(0,-77),0.3);
               xt5.Play();
               xt3.Play(); 
           },1.8,null,0,this.timerIds);  
           TimerManager.GetInstance().CallActionDelay(()=>{
               this.Show3DPanel(false);  
           },2.2,null,0,this.timerIds); 
       }
   }
   //服务端状态变成开始下注
   public StartBet(statusLeftTime){
       this.ShowClock(statusLeftTime,true);
       Util.PlaySpineEffect(this.SpineStartBet,null,"1",false);
       AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.VoiceStartBet);
       let goldNum=Math.floor(Number(Global.PlayerInfo.PlayerCurrency.Gold)/100);
       this.UpdateBetNumBtns(goldNum);
       this.SetBetAreaClickEnabled(true);
   }

   //进入游戏初始化状态的时候，更新桌上下注筹码和数据
   public UpdateBetAreaView(allBetInfo,myBetInfo,godBet){
    //    ccC.log("进入游戏初始化状态的时候，更新桌上下注筹码和数据");  
       if(this.playId==9001){

       }
       else{
           for(let i=0;i<allBetInfo.length;i++)
           {      
               let betInfo=allBetInfo[i];
               this.CreateChipsByGold(Number(betInfo/100),i);               
               if(betInfo/100>0)
               {
                   this.BetAreaAllGold["BetAreaAllGold"+(i+1)].string=String(betInfo/100);  
               }
               else{
                   this.BetAreaAllGold["BetAreaAllGold"+(i+1)].string=String();  
               }
                
               let myInfo = myBetInfo[i];
               if(myInfo==0){
                   this.BetAreaMyGold["BetAreaMyGold"+(i+1)].string=String();
               }
               else
               {
                   this.BetAreaMyGold["BetAreaMyGold"+(i+1)].string=String(myInfo/100);
               }                                                                                           
           }                  
       }
       this.goodBet=godBet;
   }

   //根据金额大小在指定的位置生成筹码堆
   private CreateChipsByGold(gold,index){
       let chipCount = 0;
       if(gold==0){
           return;
       }
       else if(gold<=1000){
           chipCount = 4;
       }
       else if(gold<=5000){
           chipCount = 6;
       }
       else if(gold<=10000){
           chipCount = 10;
       }
       else{
           chipCount = 12;
       }
       let rectTrans;
       if(this.playId==9001){

       }
       else{
           rectTrans=this.BetChipArea["BetChipArea"+(index+1)];
       }
       for(let i=0;i<chipCount;i++){
           let chipIndex=Random.RangeInt(0,3);
           let chipItem=this.CreateCoin(chipIndex);
           this.InsertToChipSlot(index,chipItem);  
           let chipNewPos=rectTrans.convertToWorldSpaceAR(new cc.Vec2(Random.RangeFloat(-rectTrans.width/2,rectTrans.width/2),Random.RangeFloat(-rectTrans.height/2,rectTrans.height/2)));
           chipNewPos=chipItem.parent.convertToNodeSpaceAR(chipNewPos);       
           chipItem.position=chipNewPos;
       }
   }

   public StopBet(){
    //    ccC.log("停止下注");
       this.EnableBetNumBtns(false);
       this.SetBetAreaClickEnabled(false);
       Util.PlaySpineEffect(this.SpineStopBet,null,"1",false);
       AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.SoundStopBet);
       TimerManager.GetInstance().CallActionDelay(()=>{
           AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.VoiceStopBet);
       },0.4,null,0,this.timerIds,false);
   }
   private roundResult;
   private winResultArr;
   private allBetInfo;
   private myBetInfo;
   private trendList;

   //结算中途进入游戏或重连
   public EnterGameDuringDeal(roundResult,seatPlayers,winResultArr,allBetInfo,myBetInfo,trendList,statusLeftTime)
   {
      this.roundResult = roundResult;
      this.seatPlayers = seatPlayers;
      this.winResultArr = winResultArr;
      this.allBetInfo = allBetInfo;
      this.myBetInfo = myBetInfo;
      this.trendList = trendList;
    //   ccC.log("结算中途进入游戏或重连");
      if(statusLeftTime>=5)
      { 
          this.Step2();        
      }
      else if(statusLeftTime>=3)
      {
          this.UpdateResultTrend(this.trendList)
          this.Step3()
      }
      else
      {
          this.UpdateResultTrend(this.trendList);
      }
   }

   //开始开牌流程
   public StartDeal(roundResult,seatPlayers,winResultArr,allBetInfo,myBetInfo,trendList){
       this.roundResult=roundResult;
       this.seatPlayers = seatPlayers;
       this.winResultArr = winResultArr;
       this.allBetInfo = allBetInfo;
       this.myBetInfo = myBetInfo;
       this.trendList = trendList;
    //    ccC.log(seatPlayers);
    //    ccC.log("开奖结果：",this.roundResult.rewardPoint.point1,this.roundResult.rewardPoint.point2,this.roundResult.rewardType1,this.roundResult.rewardType2);
       this.Step1();
   }

   //开奖动画
   public Step1(){
       Util.PlaySpineEffect(this.DealerSpine,null,"4",false,false);
       this.PlayDealerNormal(true);
       TimerManager.GetInstance().CallActionDelay(()=>{
           this.DealerHandSai.active=true;
       },0.5,null,0,this.timerIds);
       let saiSpriteName1="YSL_TZ_"+this.roundResult.rewardPoint.point1;
       let saiSpriteName2="YSL_TZ_"+this.roundResult.rewardPoint.point2;
       SpriteUtil.LoadSpriteByAtlas(this.HandSai1,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,saiSpriteName1);
       SpriteUtil.LoadSpriteByAtlas(this.HandSai2,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,saiSpriteName2);
       let saiSpriteName3;
       if(this.playId!=9001){
           saiSpriteName3="YSL_TZ_"+this.roundResult.rewardPoint.point3;
           SpriteUtil.LoadSpriteByAtlas(this.HandSai3,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,saiSpriteName3);
       }
       TimerManager.GetInstance().CallActionDelay(()=>{
           this.DealerHandSai.active=false;
           this.ResultPanel.active=true;
           this.DealerHandSai.active=false;         
           Util.PlaySpineEffect(this.ResultSpine,null,"1",false,false);
           AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.SoundOpenSai);        
           XTween.DoMove(this.ResultSpine.node, new cc.Vec2(0,153),cc.Vec2.ZERO,0.3);  
           let xtween2=XTween.DoScale(this.ResultSpine.node,cc.Vec2.ZERO,cc.Vec2.ONE,0.3);   
           this.fOnComplete();      
           xtween2.Play();
           this.ResultBottom.active=false;
           this.resultItem1.node.active=false;
           this.resultItem2.node.active=false;
           this.resultItem3.node.active=false;
           SpriteUtil.LoadSpriteByAtlas(this.resultItem1,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,saiSpriteName1);
           SpriteUtil.LoadSpriteByAtlas(this.resultItem2,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,saiSpriteName2);
           if(this.playId!=9001){
               SpriteUtil.LoadSpriteByAtlas(this.resultItem3,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,saiSpriteName3);
           }
           TimerManager.GetInstance().CallActionDelay(()=>{
               this.Step2();
           },3.2,null,0,this.timerIds);
       },1.4,null,0,this.timerIds);
   }

   public fOnComplete(){
       TimerManager.GetInstance().CallActionDelay(()=>{
           this.ShowResultSai();
       },0.2,null,0,this.timerIds);
       Util.PlaySpineEffect(this.ResultSpine,null,"2",false,false);
       TimerManager.GetInstance().CallActionDelay(()=>{
           this.ResultPanel.active=false;
       },2.5,null,0,this.timerIds);    
   }

   public ShowResultSai(){
    //    ccC.log("显示骰子结果大小");
       this.resultItem1.node.active=true;
       this.resultItem2.node.active=true;
       let totalPoint;
       if(this.playId==9001){

       }
       else{
           this.resultItem3.node.active=true;
           totalPoint=this.roundResult.rewardPoint.point1 + this.roundResult.rewardPoint.point2 + this.roundResult.rewardPoint.point3;
           let spriteName1,spriteName2;
           if(totalPoint<=10){               
               spriteName1 = "YSL_JS_XAIO2"
           }
           else{
               spriteName1 = "YSL_JS_DA2";
           }
           if(totalPoint%2==0){
               spriteName2 = "YSL_JS_SHUANG"
           }
           else{
               spriteName2 = "YSL_JS_DAN"
           }
           SpriteUtil.LoadSpriteByAtlas(this.ResultType1,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,spriteName1);
           SpriteUtil.LoadSpriteByAtlas(this.ResultType2,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,spriteName2);
           AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio["VoicePoint"+this.roundResult.rewardPoint.point1]);
           TimerManager.GetInstance().CallActionDelay(()=>{
               AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio["VoicePoint"+this.roundResult.rewardPoint.point2]);
           },0.8,null,0,this.timerIds);
           TimerManager.GetInstance().CallActionDelay(()=>{
               AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio["VoicePoint"+this.roundResult.rewardPoint.point3]);
           },1.6,null,0,this.timerIds);
       }
       this.ResultBottom.active=true;
       this.ResultPointText.string=totalPoint;
   }

   //播放中奖区域特效
   public Step2()
   {
    //    ccC.log("播放中奖区域特效");
       this.UpdateResultTrend(this.trendList)
       let areaWinList=[];
       this.BetAreaWin["BetAreaWin"+this.roundResult.rewardPoint.point1].node.active=true;
       areaWinList.push(this.BetAreaWin["BetAreaWin"+this.roundResult.rewardPoint.point1]);
       if(this.roundResult.rewardPoint.point2!=this.roundResult.rewardPoint.point1)
       {
           this.BetAreaWin["BetAreaWin"+this.roundResult.rewardPoint.point2].node.active=true;
           areaWinList.push(this.BetAreaWin["BetAreaWin"+this.roundResult.rewardPoint.point2]);
       }
       if(this.roundResult.rewardPoint.point3!=this.roundResult.rewardPoint.point1&&this.roundResult.rewardPoint.point3!=this.roundResult.rewardPoint.point2){
           this.BetAreaWin["BetAreaWin"+this.roundResult.rewardPoint.point3].node.active=true;
           areaWinList.push(this.BetAreaWin["BetAreaWin"+this.roundResult.rewardPoint.point3]);
       }
       this.BetAreaWin["BetAreaWin"+this.roundResult.bigType].node.active=true;
       areaWinList.push(this.BetAreaWin["BetAreaWin"+this.roundResult.bigType]);
       this.BetAreaWin["BetAreaWin"+this.roundResult.singleType].node.active=true;
       areaWinList.push(this.BetAreaWin["BetAreaWin"+this.roundResult.singleType]);  
       
       for(let i=0;i<areaWinList.length;i++){
           TimerManager.GetInstance().CallActionDelay(()=>{
               areaWinList[i].node.opacity=100;
           },0.5,null,0,this.timerIds);
           TimerManager.GetInstance().CallActionDelay(()=>{
               areaWinList[i].node.opacity=255;
           },1.0,null,0,this.timerIds);
           TimerManager.GetInstance().CallActionDelay(()=>{
               areaWinList[i].node.opacity=100;
           },1.5,null,0,this.timerIds);
           TimerManager.GetInstance().CallActionDelay(()=>{
               areaWinList[i].node.opacity=255;
           },1.8,null,0,this.timerIds);             
       }  
       this.betTimerHandler = TimerManager.GetInstance().CallActionDelay(()=>
       {
           this.Step3(); 
           for(let i=0;i<areaWinList.length;i++){
               areaWinList[i].node.active=false;
           }  
       },2,null,0,this.timerIds); 
   }

   //飞筹码到赢家
   public Step3()
   {
       //所有上座玩家是否下注
       let allSeatPlayerHasBet = [false,false,false,false,false,false];
       //分发给所有下注该门的玩家
       for(let i=0;i<10;i++)
       {
           let isAreaWin=false;     //该下注区域是否中奖
           if(this.playId==9001){

           }
           else{
               if((i+1)==this.roundResult.bigType||(i+1)==this.roundResult.singleType||(i+1)==this.roundResult.rewardPoint.point1||(i+1)==this.roundResult.rewardPoint.point2 || (i+1)==this.roundResult.rewardPoint.point3 ){
                   isAreaWin=true;
               }
           }
           if(isAreaWin)
           {
               //所有下注的玩家信息，0-5为0到5号座位玩家，6为自己，7为旁观玩家
               let allSeatBetInfo = [0,0,0,0,0,0,0,0];
               for(let m=0;m<this.seatPlayers.length;m++){  
                   if(this.seatPlayers[m].playerId!=null){
                       let betNum=this.seatPlayers[m].betGold[i];
                       if(betNum>0){
                           allSeatBetInfo[this.seatPlayers[m].index]=betNum;
                           allSeatPlayerHasBet[this.seatPlayers[m].index]=true;
                       }                                           
                   }
               }
               allSeatBetInfo[6]=this.myBetInfo[i];
               //上座玩家和自己在该门下注总的总金额
               let exceptOtherGold = 0;
               for(let n=0;n<7;n++){
                   exceptOtherGold = exceptOtherGold + allSeatBetInfo[n];            
               }
               allSeatBetInfo[7] = this.allBetInfo[i] - exceptOtherGold;
               //暂时没想到比较好的分配筹码方式，先用平均分配
               let betMemberArr=[];
               for(let q=0;q<allSeatBetInfo.length;q++){
                   if(allSeatBetInfo[q]>0){
                       betMemberArr.push({index:q,gold:allSeatBetInfo[q]});
                   }
               }
               let chipCount=Math.floor(this.chipSlot[i].length/betMemberArr.length);
               let leftCount=this.chipSlot[i].length;
               for(let n=0;n<betMemberArr.length;n++){
                   let needMoveCount;
                   if((n+1)==betMemberArr.length){
                       needMoveCount=leftCount;
                   }
                   else{
                       needMoveCount=chipCount;
                   }
                   for(let m=0;m<needMoveCount;m++){
                       let chipItem=Util.RemoveArray(this.chipSlot[i],0);              
                       let chipIndex=Number(chipItem[0].name);
                       this.chipPool[chipIndex-1].push(chipItem[0]);
                       let toNo:cc.Node;                  
                       if(betMemberArr[n].index<=5){
                           toNo=this.SeatHead["SeatHead"+(betMemberArr[n].index+1)];
                       }
                       else if(betMemberArr[n].index==6){
                           toNo=this.playerIcon;
                       }
                       else{
                           toNo=this.ObserveTf;
                       }
                       let chipPos=chipItem[0].position;
                       let chipNewPos=chipItem[0].parent.convertToNodeSpaceAR(toNo.parent.convertToWorldSpaceAR(toNo.position));
                       this.ChipFly(chipItem[0],chipPos,chipNewPos,false,Random.RangeFloat(0.05,0.2),XTweenCurvType.InBack,false,null,()=>{                           
                           this.ChipScaleTween(chipItem[0],0.2,1.2,1);
                           chipItem[0].active=false;
                       });
                       leftCount=leftCount-1;
                   }
               } 
           }  
           else
           {                 
               for(let q=0;q<this.seatPlayers.length;q++){                   
                   if(this.seatPlayers[q].playerId!=null){
                       let betNum=this.seatPlayers[q].betGold[i];               
                       if(betNum>0){
                           allSeatPlayerHasBet[this.seatPlayers[q].index]=true;
                       }
                   }
               }
               let moveCount=this.chipSlot[i].length;
               for(let w=0;w<moveCount;w++)
               {
                   let chipItem=Util.RemoveArray(this.chipSlot[i],0);
                   let chipIndex=Number(chipItem[0].name);
                   this.chipPool[chipIndex-1].push(chipItem[0]);
                   let chipPos=chipItem[0].position;
                   let chipNewPos=chipItem[0].parent.convertToNodeSpaceAR(this.ObserveTf.parent.convertToWorldSpaceAR(this.ObserveTf.position));
                   this.ChipFly(chipItem[0],chipPos,chipNewPos,false,Random.RangeFloat(0.05,0.2),XTweenCurvType.InBack,false,null,()=>{                                          
                       this.ChipScaleTween(chipItem[0],0.2,1.2,1);
                       chipItem[0].active=false;
                   });
               }
           }         
       }
       TimerManager.GetInstance().CallActionDelay(()=>{
           AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.SoundTakeChip);
           this.Step4(allSeatPlayerHasBet);
       },0.8,null,0,this.timerIds);
   }

   //输赢钱飘字
   public Step4(allSeatPlayerHasBet){
       this.PlayerselfGold.string=Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
       for(let i=0;i<allSeatPlayerHasBet.length;i++){
           if(allSeatPlayerHasBet[i]){
               let seatIndex=i+1;
               this.WinGoldAnimation["WinGoldAnimation"+seatIndex].active=true;
               this.WinGoldAnimation["WinGoldAnimation"+seatIndex].getComponent(cc.Animation).play();
               let content:string;
               if(this.winResultArr.seatWinInfo[i]>=0){
                   content="+"+(this.winResultArr.seatWinInfo[i]/100);
               }
               else{
                   content=String(this.winResultArr.seatWinInfo[i]/100);
               }
               this.WinGoldText["WinText"+seatIndex].string=content;
               this.LoseGoldText["LoseText"+seatIndex].string=content;
               if(this.winResultArr.seatWinInfo[i]>0){
                   this.WinGoldText["WinText"+seatIndex].node.active=true;
                   this.LoseGoldText["LoseText"+seatIndex].node.active=false;
                   Util.PlaySpineEffect(this.SeatWinSpine["PlayerWin"+seatIndex],null,"1",false)
               }
               else{
                   this.WinGoldText["WinText"+seatIndex].node.active=false;
                   this.LoseGoldText["LoseText"+seatIndex].node.active=true;
               }
           }
       }
       let myBetTotal=0;
       for(let m=0;m<this.myBetInfo.length;m++){
           myBetTotal=myBetTotal+this.myBetInfo[m];
       }
       if(myBetTotal>0){
           this.MyselfWinGoldAnimation.active=true;
           this.MyselfWinGoldAnimation.getComponent(cc.Animation).play();
           let content;
           if(this.winResultArr.meWinInfo>0){
               content="+"+this.winResultArr.meWinInfo/100;
           }
           else{
               content=this.winResultArr.meWinInfo/100;
           }    
        //    this.MyselfWinGoldText.node.position=new cc.Vec2(-540,0);
        //    this.MyselfLoseText.node.position=new cc.Vec2(-540,0);
           this.MyselfWinGoldText.string=content;
           this.MyselfLoseText.string=content;
           if(this.winResultArr.meWinInfo>0){
               this.MyselfWinGoldText.node.active=true;
               this.MyselfLoseText.node.active=false;
               Util.PlaySpineEffect(this.MyselfWinSpine,null,"1",false);
               Util.PlaySpineEffect(this.DealerSpine,null,"5",false,false);
               this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceMotion5);
               this.PlayDealerNormal(true);
           }
           else{
               this.MyselfWinGoldText.node.active=false;
               this.MyselfLoseText.node.active=true;
           }
       }
   }

   public ResetInitUI(){
       this.DealerSpine.node.position=new cc.Vec2(0,166);
       this.ResultPanel.active=false;
       this.DealerHandSai.active=false;
   }
   //播放待机状态
   public PlayDealerNormal(isPlayDefault)
   {
       if(isPlayDefault==true)
       {
           TimerManager.GetInstance().CallActionDelay(()=>{
               Util.PlaySpineEffect(this.DealerSpine,null,"1",true,false);
           },2.2,null,0,this.timerIds);
       }
       else
       {
           if(Number(this.TimerText.string)==13||Number(this.TimerText.string)==7)
           {
               let randomNum=Random.RangeInt(1,10);
               if(randomNum<=3){
                   let randomNum2=Random.RangeInt(1,3);
                   let randomNum3=Random.RangeInt(1,3);
                   if(randomNum2==1){
                       Util.PlaySpineEffect(this.DealerSpine,null,"2",false,false);
                       if(randomNum3==1){
                           this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceMotion2);
                       }
                       else{
                           this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceMotion1_2);
                       }
                   }
                   else{
                       Util.PlaySpineEffect(this.DealerSpine,null,"3",false,false);
                       if(randomNum3==1){
                           this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceMotion3);
                       }
                       else{
                           this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceMotion1_1);
                       }
                   }
                   this.PlayDealerNormal(true);
               }
           }
       }  
   }

   //触摸荷官促发动作
   public TouchDealer(){
       if(this.DealerSpine.animation=="1"||this.DealerSpine.animation=="2"||this.DealerSpine.animation=="3"){
           if(this.firstTouch==true){
               this.PlayTouchDealer(1);
               this.firstTouch=false;
           }
           else{
               if(this.hasOverTouch==true){
                   //如果已触发过动作7，则不会再触发动作6
                   let randomNum=Random.Range();
                   if(randomNum<0.2){
                       this.PlayTouchDealer(2);
                   }
               }
               else{
                   //30%概率触发动作6，20%概率触发动作7
                   let randomNum=Random.Range();
                   if(randomNum<0.3){
                       this.PlayTouchDealer(1);
                   }
                   else if(randomNum<0.5){
                       this.PlayTouchDealer(2);
                       this.hasOverTouch=true;
                   }
               }
           }
       }
   }

   //播放触摸荷官动作和声音,touchType 1表示动作6，2表示动作7
   public PlayTouchDealer(touchType:number){
       if(touchType==1){
           Util.PlaySpineEffect(this.DealerSpine,null,"6",false,false);
           let randomNum=Random.RangeInt(1,2);
           if(randomNum==1){
               this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceTouch1);
           }
           else{
               this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceTouch2);
           }
           this.PlayDealerNormal(true);
       }
       else{
           Util.PlaySpineEffect(this.DealerSpine,null,"7",false,false);
           let randomNum=Random.RangeInt(1,2);
           if(randomNum==1){
               this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceTouch3);
           }
           else{
               this.PlayDealerSound(YaoYaoLeConfig.Audio.VoiceTouch4);
           }
           this.PlayDealerNormal(true);
       }
   }


   private stopSoundName;
   //播放荷官音效
   public PlayDealerSound(soundPath){
    //    ccC.log("播放荷官音效");
       AudioManager.GetInstance().SoundPlay(soundPath);
   }
 
   //更新入座玩家信息
   public UpdateSeatView(seatData)
   {
    //    ccC.log("更新入座玩家信息");
       for(let i=1;i<7;i++)
       {          
           this.SeatNoBody["SeatNoBody"+i].active=true;
           this.SeatHead["SeatHead"+i].active=false;
           this.GoldItem["GoldItem"+i].active=false;
       }
       for(let i=0;i<seatData.length;i++){
           if(seatData[i]!=null&&seatData[i].playerId!=""){
                let headImage= this.SeatHead["SeatHead"+(seatData[i].index+1)].getChildByName("HeadMask").getChildByName("Head").getComponent(cc.Sprite);
                Util.SetHeadNetIcon(headImage,seatData[i].headImageUrl);
               // let headBoxImage= this.SeatHead["SeatHead"+(seatData[i].index+1)].getChildByName("HeadBox").getComponent(cc.Sprite);
               // Util.SetHeadBox(headBoxImage,seatData[i].headBox);
                this.SeatNoBody["SeatNoBody"+(seatData[i].index+1)].active=false;
                this.SeatHead["SeatHead"+(seatData[i].index+1)].active=true;
                this.GoldItem["GoldItem"+(seatData[i].index+1)].active=true;
                this.PlayerGoldTxt["PlayerGoldTxt"+(seatData[i].index+1)].string=Util.formatGoldText(seatData[i].gold);
                if(seatData[i].index==0){
                    this.PlayerNameTxt1.string=seatData[i].userName;
                }      
                else if(seatData[i].index==1){
                    this.PlayerNameTxt2.string=seatData[i].userName;
                }               
           }
       }     
   }
   //根据下注的位置返回下注区域筹码的scale值
   public GetChipMaxScale(betIndex)
   {
       let maxScale;
       if(this.playId==9001){
           maxScale=1.2;
       }
       else{
           if(betIndex>=1&&betIndex<=3)
           {
               maxScale=1.1;
           }
           else if(betIndex>=4&&betIndex<=6){
               maxScale=1.2;
           }
           else{
               maxScale=1;
           }
       }
       return maxScale; 
   }
   public GetChipNormalScale(betIndex){
       let normalScale;
       if(this.playId==9001){
           normalScale=1;
       }
       else{
           if(betIndex>=1&&betIndex<=3)
           {
               normalScale=0.9;
           }
           else if(betIndex>=4&&betIndex<=6){
               normalScale=1;
           }
           else{
               normalScale=0.8;
           }
       }
       return normalScale; 
   }

   public ChipFly(
        chipItem:cc.Node,
        fromNode:cc.Vec2,
        toNode:cc.Vec2, 
        isMe:boolean, 
        delay:number,
        easeType:XTweenCurvType,
        hasFollowScaleTween:boolean,
        scaleTweenParameter:any,
        completeCallback:any)
        {
            let fromNodes=fromNode;
            let toNodes=toNode;
            let delayTime=delay;
            chipItem.position=fromNode;
            let easeTypes=easeType;
            if(easeTypes!=null){
                easeTypes=easeType;
            }
            else{
                easeTypes=XTweenCurvType.OutCirc;
            }
            let toPos=this.GetTargetPos(toNodes);
            let dis= Math.sqrt((fromNodes.x-toPos.x)*(fromNodes.x-toPos.x)+(fromNodes.y-toPos.y)*(fromNodes.y-toPos.y))/0.0138;
            let baseTime=Random.RangeFloat(0.54,0.62);
            if(easeType==XTweenCurvType.InBack){
                baseTime=baseTime+0.3;
            }
            let disTime= dis/10000*0.032;
            let moveTime;
            if(isMe==true){
                moveTime=(baseTime+disTime)*0.5;
            }
            else{
                moveTime=(baseTime+disTime)*0.5;
            }
            if(hasFollowScaleTween==true){
                this.ChipScaleTween(chipItem,moveTime,0.7,scaleTweenParameter);
            }
            let tweener=XTween.DoMove(chipItem,fromNodes,toNodes,moveTime);
            tweener.SetFinishCallback(()=>{
                if(completeCallback!=null){
                    completeCallback();
                }
            });
            tweener.SetDelay(delayTime);
            tweener.Play();
   }

   //获取下注区域筹码零散位置
   public GetTargetPos(toNode:cc.Vec2){
       let rectTrans=toNode;
       let xOffset=Random.RangeFloat(-rectTrans.x*0.4,rectTrans.x*0.4);
       let yOffset=Random.RangeFloat(-rectTrans.y*0.4,rectTrans.y*0.35);
       let newPos=new cc.Vec2(rectTrans.x+xOffset,rectTrans.y+yOffset);
       return newPos;
   }
   //筹码
   public InsertToChipSlot(idx,objCoin)
   {    
       if(this.chipSlot[idx]==null){
           this.chipSlot[idx]=[];
       }
       this.chipSlot[idx].push(objCoin);
       //槽位筹码数量超过一定值，最下面的筹码放回到筹码对象池里
       if(this.chipSlot[idx].length>YaoYaoLeConfig.Const.MAX_CHIP_NUM_PER_SLOT){
           let needRemoveChip=Util.RemoveArray(this.chipSlot[idx],0);
           needRemoveChip[0].active=false;
           let chipName= Number(needRemoveChip[0].name);
           this.chipPool[chipName-1].push(needRemoveChip[0]);
        //    ccC.log("槽位筹码数量超过一定值，最下面的筹码放回到筹码对象池里");
       }
   }
   public FlyXingXing(index)
   {
    //    ccC.log("飞星星")
       index+=1;
       this.Feixingxing["Feixingxing"+index].active=true;
       let centerList;
       let markPos;
       let timeScale;
  
       if(this.playId==9001){

       }
       else{
           markPos=this.ShenSuanZiMark["ShenSuanZi"+index];
           centerList=YaoYaoLeConfig.Const.flyXingxingCenterKuaiSanList;
           if(index==1){
               timeScale=0.8;
           }
           else if(index==2){
               timeScale=0.9;
           }
           else if(index==3){
               timeScale=1.0;
           }
           else if(index==4){
               timeScale=0.9;
           }
           else if(index==5){
               timeScale=1.0;
           }
           else if(index==6){
               timeScale=1.1;
           }
           else if(index==7){
               timeScale=0.7;
           }
           else if(index==8){
               timeScale=0.8;
           }
           else if(index==9){
               timeScale=0.9;
           }
           else{
               timeScale=1;
           }
       }
       this.Feixingxing["Feixingxing"+index].position=markPos;
       let feixingxingRec=this.Feixingxing["Feixingxing"+index];
       feixingxingRec.position=new cc.Vec2(this.FeixingxingOriPos["FeixingxingOriPos"+index].x,this.FeixingxingOriPos["FeixingxingOriPos"+index].y);
       let chipPos=feixingxingRec.parent.convertToNodeSpaceAR(feixingxingRec.parent.convertToWorldSpaceAR(feixingxingRec.position));               
    //    let chipNewPos=markPos.convertToWorldSpaceAR(markPos.position);
    //    chipNewPos=feixingxingRec.parent.convertToNodeSpaceAR(chipNewPos);
       let chipNewPos=markPos.convertToWorldSpaceAR(this.BetChipArea["BetChipArea"+index].position);
       chipNewPos=feixingxingRec.parent.convertToNodeSpaceAR(chipNewPos);
       let xt1=XTween.DoMove(feixingxingRec,chipPos,chipNewPos,timeScale,1,false,XTweenCurvType.InSine);           
       xt1.SetFinishCallback(()=>{
            this.Feixingxing["Feixingxing"+index].active=false;
            this.ShenSuanZiMark["ShenSuanZi"+index].active=true;
       });
       xt1.Play();
   }
   //自己下注成功，更新设置已下注的金额;betIndex 1黑桃，2红心。。。。;coin 本次下注成功的金额

   public SetBetText(betIndex, myBetInfo,allBet,myLeftGold)
   {
    //    ccC.log("自己下注成功，更新设置已下注的金额");
       let TextMyBetGold;
       let TextAllBetGold;
       if(this.playId==9001)
       {

       }
       else
       {            
            TextMyBetGold = this.BetAreaMyGold['BetAreaMyGold'+betIndex];
            TextAllBetGold = this.BetAreaAllGold['BetAreaAllGold'+betIndex];   
       }
       TextMyBetGold.string=myBetInfo[betIndex-1]/100;
       if(allBet/100>0){
            TextAllBetGold.string=allBet/100;
       }
       else{
            TextAllBetGold.string="";
       }
       let totalBetGold = 0;
       for(let i=0;i<myBetInfo.length;i++)
       {
           if(myBetInfo[i]==true)
           {             
               totalBetGold=totalBetGold+myBetInfo[i];
           }
           else{            
               totalBetGold=totalBetGold+0;
           }  
       }
       for(let i=YaoYaoLeConfig.Const.GoldPerBet.length;i>0;i--)
       {
           let betCoin = YaoYaoLeConfig.Const.GoldPerBet[i-1];
           if(myLeftGold<betCoin*100)
           {
               this.EnableBetNumBtn(false,(i));
               if(this.selectBetNumIndex==(i))
               {
                   this.BetNumSelect(i-1);
               }               
           }       
       }   
   }
  // 打开或关闭指定下标的投注按钮
    public EnableBetNumBtn(qwe,i)
    {
        let btn = this.BtnBetNum["BtnBetNum"+(i)].getComponent(cc.Button);
        let trans=btn.node;
        btn.interactable=qwe;
        if(qwe==true){
            trans.opacity=255;
            if(i==this.selectBetNumIndex){
                trans.setScale(1.1,1.1);
                this.SpineChip.active=true;
                this.SpineChip.position=trans.position;
            }
            else{
                trans.setScale(1.0,1.0);
            }
        } 
        else{
            trans.opacity=100;
            trans.setScale(1,1)                  
        }      
    }
    //更新可选择的投注按钮
    public UpdateBetNumBtns(restGold){
        // ccC.log("更新可选择的投注按钮");
        // ccC.log(YaoYaoLeConfig.Const.GoldPerBet.length);
        if(restGold!=0){
            restGold=restGold;
        }
        else{
            restGold=0;
        }
        let canBet=false;
        if(this.selectBetNumIndex==0){
            this.selectBetNumIndex=YaoYaoLeConfig.Const.GoldPerBet.length;
        }
        for(let i=YaoYaoLeConfig.Const.GoldPerBet.length;i>0;i--){
            let interactable;
            if(restGold>=YaoYaoLeConfig.Const.GoldPerBet[i-1]){
                interactable=true;                      
            } 
            else{
                interactable=false;
            }
            this.EnableBetNumBtn(interactable,(i));
            if(interactable==true){
                canBet=true;
            }
            if(interactable==false&&this.selectBetNumIndex==(i))
            {
                this.BetNumSelect(i);
            }                           
        }
        if(canBet==true)
        {
            if(this.selectBetNumIndex<1){
                this.BetNumSelect(1);
            }
        }
    }

    //desc 打开或关闭所有投注按钮;enable: 打开或关闭所有投注按钮
    public EnableBetNumBtns(enable){
        for(let i=1;i<6;i++){
            this.EnableBetNumBtn(enable,i);
        }
        if(enable==true){
            if(this.selectBetNumIndex<=0){
                this.BetNumSelect(1);
            }
        }
        else{
            this.SpineChip.active=false;
        }
    }

    //设置下注区域是否能点击
    public SetBetAreaClickEnabled(canClick){
        if(this.playId==9001){

        }
        else{
            for(let i=1;i<11;i++){
                this.BetArea["BetArea"+i].getChildByName("BetAreaBtn"+i).getComponent(cc.Button).node.active=canClick;
            }
        }
    }

    //选中某个投注按钮
    public BetNumSelect(betNumIdx)
    {
        if(betNumIdx==this.selectBetNumIndex){
            return;
        }
        if(betNumIdx<1){
            this.SpineChip.active=false;
        }
        this.selectBetNumIndex=betNumIdx;
        for(let i=1;i<6;i++){
            let trans =this.BtnBetNum["BtnBetNum"+i]
            if(i==betNumIdx){
                trans.setScale(1.1,1.1);
                let btn=this.BtnBetNum["BtnBetNum"+betNumIdx].getComponent(cc.Button);
                btn.node.opacity=255;
                this.SpineChip.active=true;
                this.SpineChip.position=this.BtnBetNum["BtnBetNum"+betNumIdx].position;
            }
            else{
                 trans.setScale(1,1);
            }
        }
    }

    // 创建一个可以飞行的Coin
    public CreateCoin(index)
    {
        let chipItem:cc.Node=this.chipPool[index][0];
        if(chipItem==null){
            chipItem=cc.instantiate(this.ChipItem["ChipItem"+(index+1)]);
            this.ChipTf.addChild(chipItem);
            let randomAngle = Random.RangeInt(-30,30);
            chipItem.rotation=randomAngle;
        }
        else{
            Util.RemoveArray(this.chipPool[index],0)
        }
        chipItem.active=true;
        chipItem.name=String(index+1);
        chipItem.zIndex = this.chipZIndex++;
        return chipItem;       
    }
 
//清理桌面和数据
    public CleanUpDeskAndData(){
        // ccC.log("清理桌面和数据");
        this.DeleteAllTimer();
        this.DelBetTimer();
        this.chipZIndex = 0;
        this.TimerTf.active=false;    
        if(this.playId==9001){
            for(let i=1;i<11;i++){
                this.BetAreaMyGold["BetAreaMyGold"+i].string="";
                this.BetAreaAllGold["BetAreaAllGold"+i].string="";
                this.ShenSuanZiMark["ShenSuanZi"+i].active=false;
                this.BetAreaWin["BetAreaWin"+i].node.active=false;
            }
        }
        else{
            for(let i=1;i<11;i++){
                this.BetAreaMyGold["BetAreaMyGold"+i].string="";
                this.BetAreaAllGold["BetAreaAllGold"+i].string="";
                this.ShenSuanZiMark["ShenSuanZi"+i].active=false;
                this.BetAreaWin["BetAreaWin"+i].node.active=false;
            }
        }
        for(let i=0;i<this.seatPlayers.length;i++){
            if(this.seatPlayers[i].playerId!=null){
                this.seatPlayers[i].betGold=[0,0,0,0,0,0,0,0,0,0];
            }
        }

        for(let i=0;i<10;i++){
            while (this.chipSlot[i].length>0) {        
                let objCoin=Util.RemoveArray(this.chipSlot[i],0);
                objCoin[0].active=false;
                let chipName=Number(objCoin[0].name);
                this.chipPool[chipName-1].push(objCoin[0]);   
            }
        }
      
        for(let i=0;i<5;i++){
            for(let m=0;m<this.chipPool[i].length;m++){
                if(this.chipPool[i][m].active==true){
                    this.chipPool[i][m].active=false;
                }
            }
        }
        //神算子在10个下注区域下注的情况
        this.goodBet=[false,false,false,false,false,false,false,false,false,false];
    }

    public ShowClock(duration,isBet){
        // ccC.log("显示倒计时");
        let betTime=duration;
        this.isBetStatus=true;
        this.TimerTf.active=true;
        this.TimerText.string=String(betTime);
        this.betTime=betTime;       
        this.StartTimer(isBet);
    }
//duration: 持续时间;tips: 倒计时旁边显示的文字;desc 显示倒计时时钟
    public ExitGame(){
        this.DeleteAllTimer();
        this.DelBetTimer();
    }
//删除所有的Timer
    public DeleteAllTimer(){
        for (let i=0;i<this.timerIds.length;i++){
            TimerManager.GetInstance().DeleteTimer(this.timerIds[i]);
        }
        this.timerIds=[];
    }
    public betTimerHandler;
    //开始倒计时
    public StartTimer(isBet){
        // ccC.log("开始倒计时");
        this.DelBetTimer();
        this.betTimerHandler = TimerManager.GetInstance().CallActionDelay(()=>{
            this.betTime=this.betTime-1;
            if(isBet){
                if(this.betTime<=3&&this.betTime>0)
                {
                    AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.SoundCountDown);
                }                 
            }
            this.TimerText.string=this.betTime;
            if(this.betTime<0){
                this.betTime=0;
                this.isBetStatus=false;
                this.TimerTf.active=false;
                this.DelBetTimer();
            }      
            this.PlayDealerNormal(false);
        },1,null,-1,1,false);
    }
    //删除记时器
    public DelBetTimer(){
        if(this.betTimerHandler!=null&&this.betTimerHandler!=0)
        {
            TimerManager.GetInstance().DeleteTimer(this.betTimerHandler);
            this.betTimerHandler=null;
        }
    }
    //更新胜负走势数据显示
    public UpdateResultTrend(trendList){
        if(this.playId==9001){
        }
        else{
            this.UpdateKuaiSanTrend(trendList);
        }
    }

    public UpdateKuaiSanTrend(trendList){
        // cc.log("显示长度");
        // cc.log(trendList.length);
        if(trendList.length==0){
            this.KuaiSanSpineNewestResult.active=false;
        }
        else{
            this.KuaiSanSpineNewestResult.active=true;
        }
        for(let i=0;i<10;i++){
            if((i+1)>trendList.length)
            {
                this.TrendItem["TrendItem"+(i+1)].active=false;
            }
            else{
                this.TrendItem["TrendItem"+(i+1)].active=true;
                let touZi1=this.TrendItem["TrendItem"+(i+1)].getChildByName("touZi1").getComponent(cc.Sprite);
                let touZi2=this.TrendItem["TrendItem"+(i+1)].getChildByName("touZi2").getComponent(cc.Sprite);
                let touZi3=this.TrendItem["TrendItem"+(i+1)].getChildByName("touZi3").getComponent(cc.Sprite);
                SpriteUtil.LoadSpriteByAtlas(touZi1,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,"YSL_SZ_"+trendList[i].rewardPoint.point1);
                SpriteUtil.LoadSpriteByAtlas(touZi2,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,"YSL_SZ_"+trendList[i].rewardPoint.point2);
                SpriteUtil.LoadSpriteByAtlas(touZi3,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,"YSL_SZ_"+trendList[i].rewardPoint.point3); 
                let result1=this.TrendItem["TrendItem"+(i+1)].getChildByName("Result1").getComponent(cc.Sprite);
                let result2=this.TrendItem["TrendItem"+(i+1)].getChildByName("Result2").getComponent(cc.Sprite);
                let spriteName1;
                let spriteName2;
                let totalPoint;
                totalPoint=trendList[i].rewardPoint.point1+trendList[i].rewardPoint.point2+trendList[i].rewardPoint.point3
                if(totalPoint<=10){
                    spriteName1="YSL_LD_XIAO2"
                }
                else{
                    spriteName1="YSL_LD_DA2"
                }
                if((totalPoint%2)==0){
                    spriteName2="YSL_LD_SHAUNG"
                }
                else{
                    spriteName2="YSL_LD_DAN"
                }
                SpriteUtil.LoadSpriteByAtlas(result1,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,spriteName1);
                SpriteUtil.LoadSpriteByAtlas(result2,YaoYaoLeConfig.Altas.YaoYaoLeAtlas,spriteName2);
                let pointText=this.TrendItem["TrendItem"+(i+1)].getChildByName("PointTxt").getComponent(cc.Label);
                pointText.string=totalPoint+"点";
            }
        }   
    }

    public SetWaitForNextRoundVisible(isShow){
        // ccC.log("是否播放等待动画");        
        if(isShow==true){
            Util.PlaySpineEffect(this.SpineWaitForNextRound,null,"1",true,false);
        }
        else{
            this.SpineWaitForNextRound.node.active=false;
        }
    }

    //显示胜负走势
    public ShowResultTrend(){
        if(this.playId==9001){

        }
        else
        {
            let isShow = this.PanelTrend.active
            if(isShow==false){
                this.PanelTrend.active=true;
                this.PanelTrendMaskTf.active=true;
            } 
            else{
                this.PanelTrend.active=false;
                this.PanelTrendMaskTf.active=false;
            }       
        }
    }

    //其他玩家下注表现,playerBetData里的seatIndex等于-1表示其他在线玩家，其他表示上座玩家
    public YaoYaoLePlayerBet(playerBetData,leftTime){
        if(leftTime!=0){
            leftTime=leftTime;
        }
        else{
            leftTime=1;
        }
        let intervalNum=playerBetData.length;
        let intervalTime=0.2;
        let maxTime=leftTime/intervalNum*2;
        if(intervalNum==1){
            maxTime=leftTime;
        } 
        if(maxTime<intervalTime){
            let tempTime = maxTime;
            maxTime = intervalTime;
            intervalTime = tempTime;
        }
        intervalTime=Random.RangeFloat(intervalTime,maxTime);
        let betData=Util.RemoveArray(playerBetData,0)
        let shakeTf = this.ObserveTf;
        let fromNode=this.ObserveTf;
        if(betData[0].seatIndex>=0){
            fromNode=this.SeatHead["SeatHead"+(betData[0].seatIndex+1)];
            this.PlayBetTween(fromNode,betData[0].seatIndex<3,betData.seatIndex);
        }
        else{
            this.PlayBetTween(shakeTf,true,-1);
        }
        let currentTimesTotalBet=0; //本次下注总额
        for(let i=0;i<10;i++){
            if(betData[0].betData[i]!=null&&betData[0].betData[i]>0)
            {
                if(betData[0].seatIndex==0){
                    if(this.goodBet[i]==false){
                        this.goodBet[i]=true;
                        this.FlyXingXing(i);
                    }
                }               
                let currentBetNum = Number(this.BetAreaAllGold["BetAreaAllGold"+(i+1)].string);
                let toNode = this.BetChipArea["BetChipArea"+(i+1)];    
                this.SetOtherPlayerBetText(i+1,currentBetNum*100+betData[0].betData[i]);
                currentTimesTotalBet=currentTimesTotalBet+betData[0].betData[i];
                let chipIndexList=this.GetChipItemByNum(betData[0].betData[i],null);
                for(let m=0;m<chipIndexList.length;m++){
                    let objCoin=this.CreateCoin(chipIndexList[m]);  
                    this.InsertToChipSlot(i,objCoin);               
                    let normalScale=this.GetChipNormalScale(m);
                    let maxScale=this.GetChipMaxScale(m);
                    let chipPos=objCoin.parent.convertToNodeSpaceAR(fromNode.parent.convertToWorldSpaceAR(fromNode.position));                    
                    let chipNewPos=toNode.convertToWorldSpaceAR(new cc.Vec2(Random.RangeFloat(-toNode.width/2,toNode.width/2),Random.RangeFloat(-toNode.height/2,toNode.height/2)));
                    chipNewPos=objCoin.parent.convertToNodeSpaceAR(chipNewPos);
                    this.ChipFly(objCoin,chipPos,chipNewPos,false,0,null,true,maxScale,()=>{
                        this.ChipScaleTween(objCoin,0.2,maxScale,normalScale);
                    });                    
                }
            }
        }
        if(betData[0].seatIndex>=0){
            let leftGold=Number(this.PlayerGoldTxt["PlayerGoldTxt"+(betData[0].seatIndex+1)].string);
            this.PlayerGoldTxt["PlayerGoldTxt"+(betData[0].seatIndex+1)].string=String(((leftGold*100-currentTimesTotalBet)/100).toFixed(2));
            AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.SoundBet1);
        }
        else{
            AudioManager.GetInstance().SoundPlay(YaoYaoLeConfig.Audio.SoundBet1);
        }
        leftTime=leftTime-intervalTime;
        if(playerBetData.length>0){
            TimerManager.GetInstance().CallActionDelay(()=>{
                this.YaoYaoLePlayerBet(playerBetData,leftTime);
            },0.2,null,0,this.timerIds); 
        }
    }

    //玩家下注时抖动动画 direct表示方向，true为左边的座位，false为右边的座位
    public PlayBetTween(targetTf:cc.Node,direct:boolean,tweenPlayeId:number){
        let recordPos=targetTf.position;
        let offset=null;
        if(this.betPanelAniList[tweenPlayeId]){
            return;
        }
        else{
            this.betPanelAniList[tweenPlayeId]=true;
             
            if(tweenPlayeId==-1){
                offset=new cc.Vec2(-450,309);
            }
            else{
                if(direct==true){
                    offset=new cc.Vec2(20,0);
                }
                else{
                    offset=new cc.Vec2(-20,0);
                }
            }
            // let xt1=XTween.DoMove(targetTf,targetTf.position,offset,0.12,1,false,XTweenCurvType.InSine);           
            // xt1.SetFinishCallback(()=>{
            //     let backTween=XTween.DoMove(targetTf,offset,recordPos,0.12,1,false,XTweenCurvType.OutSine);
            //     this.betPanelAniList[tweenPlayeId]=false;
            //     backTween.Play();
            // });
            // xt1.Play();
            let xt2=XTween.DoScale(targetTf,cc.Vec2.ONE,new cc.Vec2(1.2,1.2),0.12,1,false,XTweenCurvType.InSine);
            xt2.SetFinishCallback(()=>{
                this.betPanelAniList[tweenPlayeId]=false;
                let backSacle=XTween.DoScale(targetTf,new cc.Vec2(1.2,1.2),cc.Vec2.ONE,0.12,1,false,XTweenCurvType.OutSine);
                backSacle.Play();
            });
            xt2.Play();                       
        }         
    }
    //设置其他玩家下注时更新下注区域的下注总额
    public SetOtherPlayerBetText(betIndex,totalNum){
        let TextAllBetGold;
        if(this.playId==9001){

        }
        else{
            TextAllBetGold=this.BetAreaAllGold["BetAreaAllGold"+betIndex]
        }
        TextAllBetGold.string=String(totalNum/100);
    }

    //玩家自己上座时下注表现
    public YaoYaoLeMySeatBet(betData){
        // ccC.log("玩家自己上座时下注表现");
        let fromNode=this.SeatHead["SeatHead"+(betData.seatIndex+1)];
        let shakeTf=this.SeatHead["SeatHead"+(betData.seatIndex+1)];
        this.PlayBetTween(shakeTf,betData.seatIndex+1<4,betData.seatIndex+1);
        // ccC.log(betData);
        for(let i=0;i<10;i++){
            if(betData.betData[i]>0){
                if(betData.seatIndex+1==1){
                    if(this.goodBet[i]==false){
                        this.goodBet[i]=true;
                        this.FlyXingXing(i);
                        // cc.log("玩家自己飞星星");
                        // cc.log(this.goodBet[i]);
                    }
                }
                let toNode=this.BetChipArea["BetChipArea"+(i+1)];          
                if(this.playId==9001){

                }
                else{
                    toNode=this.BetChipArea["BetChipArea"+(i+1)];
                }
                let chipIndexList=this.GetChipItemByNum(betData.betData[i],null);
                for(let m=0;m<chipIndexList.length;m++){
                    let objCoin=this.CreateCoin(chipIndexList[m]);
                    this.InsertToChipSlot(i,objCoin);
                    let normalScale=this.GetChipNormalScale(m);
                    let maxScale=this.GetChipMaxScale(m);
                    let chipPos=objCoin.parent.convertToNodeSpaceAR(fromNode.parent.convertToWorldSpaceAR(fromNode.position));                    
                    let chipNewPos=toNode.convertToWorldSpaceAR(new cc.Vec2(Random.RangeFloat(-toNode.width/2,toNode.width/2),Random.RangeFloat(-toNode.height/2,toNode.height/2)));
                    chipNewPos=objCoin.parent.convertToNodeSpaceAR(chipNewPos);
                    this.ChipFly(objCoin,chipPos,chipNewPos,false,0,null,false,maxScale,()=>{      
                        this.ChipScaleTween(objCoin,0.2,maxScale,normalScale);
                    });      
                }
                let leftGold=Number(this.PlayerGoldTxt["PlayerGoldTxt"+(betData.seatIndex+1)].string);//Util.formatGoldText((leftGold*100-betData.betData[m])/100)//this.PlayerselfGold.string;
                this.PlayerGoldTxt["PlayerGoldTxt"+(betData.seatIndex+1)].string=Util.formatGoldText((leftGold*100-betData.betData[i]));
            }
        }
    }
    public ChipScaleTween(chipItem:cc.Node,duration:number,fromScale:number,toScale:number){
        let tweener=XTween.DoScale(chipItem,new cc.Vec2(1.1,1.1),new cc.Vec2(0.9,0.9),duration,1,false,XTweenCurvType.InSine);
        tweener.Play();    
    }

    //根据下注的金额来确定下注的是哪些筹码
    public GetChipItemByNum(betNum,chipIndexList){
        if(chipIndexList!=null){
            chipIndexList=chipIndexList;
        }
        else{
            chipIndexList=[];
        }
        
        let hasGetChip=false;
        for(let indx=YaoYaoLeConfig.Const.GoldPerBet.length;indx>0;indx--){
            if(betNum>=YaoYaoLeConfig.Const.GoldPerBet[indx-1]*100){
                betNum=betNum-YaoYaoLeConfig.Const.GoldPerBet[indx-1]*100;
                chipIndexList.push(indx-1);
                if(chipIndexList.length>=2){
                    return chipIndexList;
                }
                hasGetChip=true;
                break;
            }
        }
        if(betNum>0){
            if(hasGetChip){
                this.GetChipItemByNum(betNum,chipIndexList);
            }
            else{
                // ccC.log("服务器发来的下注金额有小数，无法转换成对应的筹码");
            }
        }
        return chipIndexList;
    }
}
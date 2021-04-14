import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import {YaoyapleMsgDefine} from "../../Protos/MessageDefine_YaoYaoLe";
import {RoomInfo, SitInfoPush, BetPushInfos,ClearingInfoPush,StepInfoPush, BetReq, BetRsp, RewardType_KS, RewardPoint_YYL, RewardType_YYL} from "../../Protos/Yaoyaole";
import Global from "../../Global/Global";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import { YaoYaoLeConfig } from "./YaoYaoLeConfig";
import MessageNamesYaoYaoLe from "./MessageNamesYaoYaoLe";
import Util from "../../Tools/Util";
import { Random } from "../../Tools/Random";
import ControllerYaoYaoLe from "./ControllerYaoYaoLe";
import Toast from "../../Tools/Toast";
import ccC from "../../Tools/ccC";

export default class ModelYaoYaoLe extends Model {

    private control:ControllerYaoYaoLe;

    public statusLeftTime;
    public isYaoYaoLe;
    public mySeatIndex;
    public players=[];
    public seatPlayers=[];
    public roundResult=[];//服务器推送的开奖结果
    public winResultArr={seatWinInfo:[],meWinInfo:0,isMePlayed:false,bankerWinInfo:0};
    public allBetInfo:number[]=[]; //所有玩家分别在10门下注区域的金额
    public myBetInfo :number[]=[]; //自己分别在10门下注区域的金额
    public myBetNotConfirm=[[],[],[],[],[],[],[],[],[],[]];//自己在4门单次下注的集合，尚未得到后台确认下注成功的下注额，单位：分
    public godBet:boolean[]=[];//神算子在4门下注的情况
    public trendList=[]; //胜负走势
    public curBetStatus;
    public baseLimit;
    public betCoinLimit;
    public roundBetCoinLimit;
    public roundResultCache;
     
    public isMePlayed:boolean;

    public Init()
    { 
        this.curBetStatus=YaoYaoLeConfig.GameStatus.None
        this.ChuShiHua();
        if(Global.showLog == true)
            cc.log("接收服务器发来的初始化数据");
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.YaoYaoLe.gameType,TCPSessionID.Hall,YaoyapleMsgDefine.MSG_Yaoyaple_PUSH_ROOM_INFO,(data)=>{
            //cc.log(99999999999);
            let res =RoomInfo.decode(data);
            if(res.playType==1){
                this.isYaoYaoLe==true;
            }
            else{
                this.isYaoYaoLe==false;
            }
            this.nextRoundClean();
            Global.PlayerInfo.PlayerCurrency.Gold=Number(res.myPlayerInfo.gold);
            this.mySeatIndex=-1;
            this.seatPlayers=[];
            for(let i=0;i<res.sitPlayerInfo.length;i++){
                let tempTab={playerId:"",userName:"",headImageUrl:"",headBox:"",vipLv:1,gold:"",province:"",city:"",index:0,betGold:[]};
                if(res.sitPlayerInfo[i].yaoYaoLePlayerInfo){
                    // cc.log(res.sitPlayerInfo[i].yaoYaoLePlayerInfo);
                    tempTab.playerId=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.playerId;
                    tempTab.userName=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.userName;
                    tempTab.headImageUrl=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.headImageUrl;
                    tempTab.headBox=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.headbox;
                    tempTab.vipLv=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.vipLv;
                    tempTab.gold=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.gold;
                    tempTab.province=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.province;
                    tempTab.city=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.city;
                    if(res.sitPlayerInfo[i].yaoYaoLePlayerInfo.playerId==Global.PlayerInfo.playerId){
                        this.mySeatIndex=res.sitPlayerInfo[i].index;
                    }
                }
                tempTab.index=res.sitPlayerInfo[i].index;
                tempTab.betGold=[0,0,0,0,0,0,0,0,0,0];
                this.seatPlayers[i]=tempTab;
            }
            let trendTemp=[];
            let roundResults;
            if(res.playType==1){
                roundResults=res.roundResult_YYLList;
            }
            else{
                roundResults=res.roundResult_KSList;
            }
            for(let i=0;i<roundResults.length;i++){
                let oneRoundResult={rewardPoint:"",rewardType1:"",rewardType2:"",bigType:"",singleType:""};
                oneRoundResult.rewardPoint = roundResults[i].rewardPoint;
                if(res.playType==1){
                    oneRoundResult.rewardType1=roundResults[i].rewardType1;
                    oneRoundResult.rewardType2=roundResults[i].rewardType2;
                }
                else{
                    oneRoundResult.bigType = roundResults[i].bigType
                    oneRoundResult.singleType = roundResults[i].singleType
                }
                trendTemp.push(oneRoundResult);
            }
            this.roundResult=trendTemp[0];
            this.roundResultCache=null;//暂存本轮的输赢结果数据，等到结算状态再赋值给输赢趋势列表
            if(res.step==YaoYaoLeConfig.GameStatus.Deal){
                this.roundResultCache=Util.RemoveArray(trendTemp,0);//this.roundResultCache=
                this.roundResultCache=this.roundResultCache[0];
            }
            this.trendList=trendTemp;
            this.curBetStatus=res.step;
            this.statusLeftTime=res.remainTimeSec;
            for(let i=0;i<res.playerBetInfos.length;i++)
            {
                for(let k=0;k<this.seatPlayers.length;k++){
                    if(this.seatPlayers[k].playerId!=null&&this.seatPlayers[k].playerId==res.playerBetInfos[i].playerId){
                        for(let m=0;m<res.playerBetInfos[i].betInfo.length;m++){
                            if(res.playerBetInfos[i].betInfo[m].playType==1){

                            }
                            else{
                                this.seatPlayers[k].betGold[res.playerBetInfos[i].betInfo[m].ksGoldInfo.rewardType_KS-1]=this.addGold(res.playerBetInfos[i].betInfo[m].ksGoldInfo.gold);
                            }
                        }
                        break;
                    }
                }
                for(let q=0;q<res.playerBetInfos[i].betInfo.length;q++){
                    if(res.playerBetInfos[i].betInfo[q].playType==1){
                                             
                    }
                    else{
                        this.allBetInfo[res.playerBetInfos[i].betInfo[q].ksGoldInfo.rewardType_KS-1]=this.allBetInfo[res.playerBetInfos[i].betInfo[q].ksGoldInfo.rewardType_KS-1]+this.addGold(res.playerBetInfos[i].betInfo[q].ksGoldInfo.gold);
                        if(res.playerBetInfos[i].isShenSuanzi==true){
                            this.godBet[res.playerBetInfos[i].betInfo[q].ksGoldInfo.rewardType_KS-1]=true;
                        }
                    } 
                }
            }    
            if(res.myPlayerBetInfo!=null){
                for(let x=0;x<res.myPlayerBetInfo.betInfo.length;x++){
                    if(res.myPlayerBetInfo.betInfo[x].playType==1){
                        
                    }
                    else{
                        this.myBetInfo[res.myPlayerBetInfo.betInfo[x].ksGoldInfo.rewardType_KS-1]=this.myBetInfo[res.myPlayerBetInfo.betInfo[x].ksGoldInfo.rewardType_KS-1]+this.addGold(res.myPlayerBetInfo.betInfo[x].ksGoldInfo.gold);
                    }
                }
            }        
            if(res.step==YaoYaoLeConfig.GameStatus.Deal){
                this.winResultArr={seatWinInfo:[0,0,0,0,0,0],meWinInfo:(res.clearingInfoPush.myWinGold),isMePlayed:res.clearingInfoPush.meIsBet,bankerWinInfo:(res.clearingInfoPush.masterWinGold)};
                //没下注或没人在座位上,这里就没有数据
                for(let i=0;i<res.clearingInfoPush.sitPlayerWinInfos.length;i++){
                    this.winResultArr.seatWinInfo[res.clearingInfoPush.sitPlayerWinInfos[i].index]=res.clearingInfoPush.sitPlayerWinInfos[i].winGold;
                }
                this.isMePlayed=res.clearingInfoPush.meIsBet;
            }
            this.baseLimit= res.betBaseLimit;
            this.betCoinLimit=res.betCoinLimit;
            this.roundBetCoinLimit=res.roundBetCoinLimit;
            //cc.log(888888888888);
            this.SendMessage(MessageNamesYaoYaoLe.InitYYLRoomData);
        });

        //服务器推送游戏状态
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.YaoYaoLe.gameType,TCPSessionID.Hall,YaoyapleMsgDefine.MSG_Yaoyaple_PUSH_STEP_INFO,(data)=>{
            let res=StepInfoPush.decode(data);
            this.curBetStatus=res.step;
            this.statusLeftTime=res.remainTimeSec;
            this.SendMessage(MessageNamesYaoYaoLe.YaoYaoLeStatusChange);
        });

        //推送下注信息
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.YaoYaoLe.gameType,TCPSessionID.Hall,YaoyapleMsgDefine.MSG_Yaoyaple_PUSH_BETS_INFO,(data)=>{
            let res=BetPushInfos.decode(data);
            let betData=[0,0,0,0,0,0,0,0,0,0];//本次下注所有玩家在不同位置下注的信息，除了上座玩家和自己
            let tempAllPlayerBetData=[];      //分割后的其他玩家下注的信息
            let seatBetData=[];               //所有上座玩家本次的下注信息
            let tempSeatBetData=[];           //分割后的下注信息
            for(let i=0;i<res.playerBetInfos.length;i++){
                let isSeatData = false;       //该数据表示是否是上座玩家的数据
                for(let m=0;m<this.seatPlayers.length;m++){
                    if(this.seatPlayers[m].playerId!=null&&this.seatPlayers[m].playerId==res.playerBetInfos[i].playerId){
                        for(let n=0;n<res.playerBetInfos[i].betInfo.length;n++){
                            if(res.playerBetInfos[i].betInfo[n].playType==1){                                

                            }
                            else{
                                 let totalGold=this.addGold(res.playerBetInfos[i].betInfo[n].ksGoldInfo.gold);
                                 this.seatPlayers[m].betGold[res.playerBetInfos[i].betInfo[n].ksGoldInfo.rewardType_KS-1]=this.seatPlayers[m].betGold[res.playerBetInfos[i].betInfo[n].ksGoldInfo.rewardType_KS-1]+totalGold;                                 
                            }
                        }
                        isSeatData = true;
                        this.seatPlayers[m].gold=res.playerBetInfos[i].gold;
                        this.AddBetToTable(this.seatPlayers[m].index,res.playerBetInfos[i],seatBetData);
                        break;
                    }
                }
                if(isSeatData==false){
                    for(let x=0;x<res.playerBetInfos[i].betInfo.length;x++){
                        if(res.playerBetInfos[i].betInfo[x].playType==1){

                        }
                        else{
                            let totalGold=this.addGold(res.playerBetInfos[i].betInfo[x].ksGoldInfo.gold);
                            betData[res.playerBetInfos[i].betInfo[x].ksGoldInfo.rewardType_KS-1]=betData[res.playerBetInfos[i].betInfo[x].ksGoldInfo.rewardType_KS-1]+totalGold;                           
                        }
                    }
                }
                for(let y=0;y<res.playerBetInfos[i].betInfo.length;y++){
                    if(res.playerBetInfos[i].betInfo[y].playType==1){

                    }
                    else{
                        let totalGold=this.addGold(res.playerBetInfos[i].betInfo[y].ksGoldInfo.gold);
                        this.allBetInfo[res.playerBetInfos[i].betInfo[y].ksGoldInfo.rewardType_KS-1]=this.allBetInfo[res.playerBetInfos[i].betInfo[y].ksGoldInfo.rewardType_KS-1]+totalGold;
                    }
                }
            }
            //对每个上座玩家的数据进行加工处理，所有的区域的下注分割成若干次下注信息
            for(let i=0;i<seatBetData.length;i++){
                let hasBetData=[];
                for(let m=0;m<seatBetData[i].betGold.length;m++){
                    if(seatBetData[i].betGold[m]>0){                        
                        hasBetData.push({betkey:m,betVal:seatBetData[i].betGold[m]});
                    }
                }
                let minIncludeArea =1;
                let maxIncludeArea = 1
                if(hasBetData.length<=3){
                    maxIncludeArea=1;
                }
                else if(hasBetData.length<=5){
                    minIncludeArea=2
                    maxIncludeArea=3;
                }
                else{
                    minIncludeArea=2;
                    maxIncludeArea=4;
                }
                while(true){
                    let newBetData = [0,0,0,0,0,0,0,0,0,0];
                    let randomNum=Random.RangeInt(minIncludeArea,maxIncludeArea);
                    for(let i=0;i<randomNum;i++){
                        let randomIndex=Random.RangeInt(0,hasBetData.length-1);
                        let oneBetData=Util.RemoveArray(hasBetData,randomIndex)
                        newBetData[oneBetData[0].betkey]=oneBetData[0].betVal;
                        if(hasBetData.length==0){
                            break;
                        }                       
                    }
                    tempSeatBetData.push({seatIndex:seatBetData[i].seatIndex,betData:newBetData});
                    if(hasBetData.length==0){
                        break;
                    }
                }
            }
            //对其他玩家的数据进行加工处理，所有的区域的下注分割成若干次下注信息
            let hasBetData=[];
            for(let i=0;i<betData.length;i++){
                if(betData[i]>0){
                    hasBetData.push({betkey:i,betVal:betData[i]});
                }
            }
            if(hasBetData.length>0){
                let minIncludeArea =1
                let maxIncludeArea = 0
                if(hasBetData.length<=3){
                    maxIncludeArea=1;
                }
                else if(hasBetData.length<=5){
                    minIncludeArea=2
                    maxIncludeArea=3;
                }
                else{
                    minIncludeArea=2;
                    maxIncludeArea=4;
                }
                while(true){
                    let newBetData=[0,0,0,0,0,0,0,0,0,0];
                    let randomNum=Random.RangeInt(minIncludeArea,maxIncludeArea);
                    for(let q=0;q<randomNum;q++){
                        let randomIndex=Random.RangeInt(0,hasBetData.length-1);
                        let oneBetData=Util.RemoveArray(hasBetData,randomIndex);
                        newBetData[oneBetData[0].betkey]=oneBetData[0].betVal;
                        if(hasBetData.length==0){
                            break;
                        }                        
                    }
                    tempAllPlayerBetData.push({seatIndex:-1,betData:newBetData});
                    if(hasBetData.length==0){
                        break;
                    }
                }
            }
            if(Global.showLog == true)
                cc.log("接收到摇摇乐推送下注信息");
            this.SendMessage(MessageNamesYaoYaoLe.YaoYaoLePlayerBet,{seatBetData:tempSeatBetData,allPlayerBetData:tempAllPlayerBetData});
        });

        //服务器推送发牌信息和赢钱结果
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.YaoYaoLe.gameType,TCPSessionID.Hall,YaoyapleMsgDefine.MSG_Yaoyaple_PUSH_CLEARING_INFO,(data)=>{
            let res =ClearingInfoPush.decode(data);
            // cc.log("接收到结果信息:"+String(res));
            this.roundResultCache=[];//暂存本轮的输赢结果数据，等到结算状态再赋值给输赢趋势列表         
            if(res.playType==1){

            } 
            else{
                this.roundResultCache.rewardPoint = res.roundResult_KS.rewardPoint;
                this.roundResultCache.bigType = res.roundResult_KS.bigType;
                this.roundResultCache.singleType = res.roundResult_KS.singleType;
            }
            this.roundResult=this.roundResultCache;
            this.winResultArr={seatWinInfo:[0,0,0,0,0,0],meWinInfo:(res.myWinGold),isMePlayed:(res.meIsBet),bankerWinInfo:(res.masterWinGold)};
            //没下注或没人在座位上,这里就没有数据
            for(let i=0;i<res.sitPlayerWinInfos.length;i++){
                this.winResultArr.seatWinInfo[res.sitPlayerWinInfos[i].index]=res.sitPlayerWinInfos[i].winGold;
            }
            this.isMePlayed=res.meIsBet;
            this.SendMessage(MessageNamesYaoYaoLe.YaoYaoLeDeal);
        });

        //服务器上座信息
        TCPNetwork.GetInstance().ListenMsgWithGameType(GameTypeMgr.Config.YaoYaoLe.gameType,TCPSessionID.Hall,YaoyapleMsgDefine.MSG_Yaoyaple_PUSH__SIT_INFO,(data)=>{
            let res=SitInfoPush.decode(data);
            this.mySeatIndex=-1;
            this.seatPlayers=[];
            for(let i=0;i<res.sitPlayerInfo.length;i++){
                let tempTab={playerId:"",userName:"",headImageUrl:"",headBox:"",vipLv:1,gold:"",province:"",city:"",index:0,betGold:[]};
                if(res.sitPlayerInfo[i].yaoYaoLePlayerInfo){
                    tempTab.playerId=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.playerId;
                    tempTab.userName=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.userName;
                    tempTab.headImageUrl=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.headImageUrl;
                    tempTab.headBox=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.headbox;
                    tempTab.vipLv=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.vipLv;
                    tempTab.gold=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.gold;
                    tempTab.province=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.province;
                    tempTab.city=res.sitPlayerInfo[i].yaoYaoLePlayerInfo.city;
                    if(res.sitPlayerInfo[i].yaoYaoLePlayerInfo.playerId==Global.PlayerInfo.playerId){
                        this.mySeatIndex=res.sitPlayerInfo[i].index;
                    }
                }            
                tempTab.index=res.sitPlayerInfo[i].index;               
                tempTab.betGold=[0,0,0,0,0,0,0,0,0,0];
                this.seatPlayers[i]=tempTab;
            }             
            this.SendMessage(MessageNamesYaoYaoLe.YaoYaoLeChangeSeat);
        });
    }

    private addGold(goldList){
        let totalGold=0;
        for(let i=0;i<goldList.length;i++){
            totalGold=totalGold+goldList[i]
        }
        return totalGold;
    }
    private AddBetToTable(seatIndex,betInfo,tab){
        let hasAdd = false;
        for(let i=0;i<tab.length;i++){
            if(seatIndex==tab[i].seatIndex){
                for(let m=0;m<betInfo.betInfo.length;m++){
                    if(betInfo.betInfo[m].playType==1){

                    }
                    else{
                        let totalGold=this.addGold(betInfo.betInfo[m].ksGoldInfo.gold);
                        tab[i].betGold[betInfo.betInfo[m].ksGoldInfo.rewardType_KS-1]=tab[i].betGold[betInfo.betInfo[m].ksGoldInfo.rewardType_KS-1]+totalGold;                    
                    }
                }
                hasAdd=true;
                break;
            }           
        }
        if(hasAdd==false){
            let tempBetInfo=[0,0,0,0,0,0,0,0,0,0];
            for(let n=0;n<betInfo.betInfo.length;n++){
                if(betInfo.betInfo[n].playType==1){
                     
                }
                else{
                    let totalGold=this.addGold(betInfo.betInfo[n].ksGoldInfo.gold);
                    tempBetInfo[betInfo.betInfo[n].ksGoldInfo.rewardType_KS-1]=tempBetInfo[betInfo.betInfo[n].ksGoldInfo.rewardType_KS-1]+totalGold;
                }
            }
            tab.push({seatIndex:seatIndex,betGold:tempBetInfo});
        }
    }
    public playInfo;
    public playType;
    public playId;

    public SaveGameInfo(msgBody){
        this.playInfo=msgBody.playInfo;
        this.playType=msgBody.playType;
        this.playId=msgBody.playId;     
    }

    //请求下注
    public BetReq(index,money,callSuccess,callFailed){
        let req=BetReq.create();
        if(this.isYaoYaoLe==true){

        }
        else{
            req.playType=2;
            req.rewardType_KS=index;
        }
        req.gold=money;
        let sendData=BetReq.encode(req).finish();
        //发送网络消息给服务器，协议号 MessageDefine_YaoYaoLe_pb.MSG_Yaoyaple_REQ_ADDCHIP 协议体 Yaoyaole_pb.BetReq
        TCPNetwork.GetInstance().SendWithGameType(GameTypeMgr.Config.YaoYaoLe.gameType,TCPSessionID.Hall,YaoyapleMsgDefine.MSG_Yaoyaple_REQ_ADDCHIP,sendData,(data)=>{
             let res=BetRsp.decode(data);
             if(res.success){                            
                 if(callSuccess!=null){
                    callSuccess();
                 }
             }
             else{
                if(callFailed!=null){
                    callFailed();
                 }
                 Toast.Show(res.tip);
             }
        },()=>{},true);
    }

    public ChuShiHua(){
         this.players=[];
         this.seatPlayers=[];
         this.roundResult=[];
         this.winResultArr={seatWinInfo:[],meWinInfo:0,isMePlayed:false,bankerWinInfo:0};
         this.allBetInfo=[0,0,0,0,0,0,0,0,0,0];
         this.myBetInfo=[0,0,0,0,0,0,0,0,0,0];
         this.myBetNotConfirm=[[],[],[],[],[],[],[],[],[],[]];
         this.godBet=[false,false,false,false,false,false,false,false,false,false]
         this.trendList=[];
         this.curBetStatus=YaoYaoLeConfig.GameStatus.None;
         this.statusLeftTime=0;
         this.mySeatIndex=-1;
         this.isYaoYaoLe=false;
    }
    //下一轮要清理的数据
    public nextRoundClean(){
        this.allBetInfo=[0,0,0,0,0,0,0,0,0,0];  //所有玩家分别在4门下注区域的金额
        this.myBetInfo=[0,0,0,0,0,0,0,0,0,0];   //自己分别在4门下注区域的金额
        this.myBetNotConfirm=[[],[],[],[],[],[],[],[],[],[]];  //自己在4门单次下注的集合，尚未得到后台确认下注成功的下注额，单位：分
        this.godBet=[false,false,false,false,false,false,false,false,false,false];  //神算子在4门下注的情况
    }     
}
import Model from "../../MVCFramework//Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import TCPSession from "../../Network/Socket/TCPSession";
import { GameTypeMgr } from "../../Global/GameTypeMgr";

import { LongHuMsgDefine } from "../../Protos/MessageDefine_LongHu";

import {ChangeBattleStateRes,LHDRoleInfo,GameState, InitRoomDataRes, BetArea, BetReq, SeatInfo, UpdateRoomDataRes, PushUserBetRes, BetAreaInfo, IBetAreaInfo, IUserBet, PushBattleSettlementRes, UserBet, BetRes } from "../../Protos/LongHuDou";

import MessageNames from "../../Modules/MessageNames";
import Global from "../../Global/Global";
 
import Toast from "../../Tools/Toast";
import ConstStr from "../../Global/ConstStr";
import { CommonTipsRes, CommonUpTipsRes } from "../../Protos/Common";
import Util from "../../Tools/Util";
import { Random } from "../../Tools/Random";
import ccC from "../../Tools/ccC";



export default class ModelDragonVsTiger extends Model
{ 
    public seatArray:Array<SeatInfo> = [];
    public seatNewBetArray:Array<IUserBet> = [];
    public godBetArray:Array<boolean> = [];
    //基础数据限制
    private _roleInfo: LHDRoleInfo;
    
    public get roleInfo() {
        return this._roleInfo;
    }
       
    public set roleInfo(name: LHDRoleInfo) {
        this._roleInfo = name;
    }
    
    //基础数据限制
    private _bigBet: number;
    public get bigBet() {
        return this._bigBet;
    }

    public set bigBet(name: number) {
        this._bigBet = name;
    }

      //基础数据限制
    private _countDown: number;

    public get countDownTime() {
        return this._countDown;
    }
  
    public set countDownTime(name: number) {
        this._countDown = name;
    }

    //基础数据限制
    private _baseLimit: number;

    public get baseLimit() {
        return this._baseLimit;
    }
   
    public set baseLimit(name: number) {
        this._baseLimit = name;
    }
   
    //下注上限
    private _mostCoinLimit: number;
    public get mostCoinLimit() {
        return this._mostCoinLimit;
    }
   
    public set mostCoinLimit(limit: number) {
        this._mostCoinLimit = name;
    }
 
    private _gameState:GameState;
    public get gameState() {
        return this._gameState;
    }
   
    public set gameState(gs: GameState) {
        this._gameState = gs;
    }

    //三个区域的个人下注上限
    private _myMostCoinLimit:Array<number>  ;

    public get myMostAreaCoinLimit() {
        return this._myMostCoinLimit;
    }
   
    public set myMostAreaCoinLimit(array: Array<number>) {
        this._myMostCoinLimit = array;
    }

    //初始化房间数据
    private  _initRoomData:InitRoomDataRes;
    public get initRoomData() {
        return this._initRoomData;
    }

    //我的总下注//
    private _myTotalBet: number;
    private _totalBetOnTableArea:Array<number> = [];

    public get myTotalBet() {
        return this._myTotalBet;
    }
    
    public set myTotalBet(name: number) {
        this._myTotalBet = name;
    }


    public get totalBetOnTableArea() {
        return this._totalBetOnTableArea;
    }
    
    public set totalBetOnTableArea(ar: Array<number>) {
        this._totalBetOnTableArea = ar;
    }

    //初始化信息数据 监听//
    public Init()
    { 
        //ccC.error("model监听事件");

        let gameType = GameTypeMgr.Config.LongHuDou.gameType;
        TCPNetwork.GetInstance().ListenMsgWithGameType(gameType,TCPSessionID.Hall,LongHuMsgDefine.MSG_PUSH_LONGHU_INIT,(data)=>{
            let res = InitRoomDataRes.decode(data);
            this.initRoomData = res;
            this.UpdateBattleState(res.state, res.waitTime);
            this.ParseBetLimit(res);
            this.ParseInitBetInfo(res);
            this.ParseInitSeatInfo(res);
            this.ParseMyRoleInitInfo(res);
            //ccC.error("初始化房间信息------------");
            this.SendMessage(MessageNames.DragonVsTigerPushRoomInitData,res);
        });

        TCPNetwork.GetInstance().ListenMsgWithGameType(gameType,TCPSessionID.Hall,LongHuMsgDefine.MSG_PUSH_LONGHU_STATE,(data)=>{  
            let res = ChangeBattleStateRes.decode(data);
            this.UpdateBattleState(res.battleState,res.hasCountDown? res.countDown:0);
            //数据做下清理//
            switch(res.battleState)
            {
                case GameState.WaitingStartState:
                case GameState.SettlementState:
                    this.myTotalBet = 0; 
                    for(let index = 1;index<=3;index++)
                    {
                        this._myAreaDropCoin[index] = 0;
                    }
                break;
                case GameState.BetState:
                    for(let index = 1;index<3;index++)
                    {
                        this.godBetArray[index] = false;
                    }
                break;
            }
            this.SendMessage(MessageNames.DragonVsTigerStateChange,res);
        });

        //房间数据改变//
        TCPNetwork.GetInstance().ListenMsgWithGameType(gameType,TCPSessionID.Hall,LongHuMsgDefine.MSG_UPDATE_LONGHU_ROOM,(data)=>{  
            let res = UpdateRoomDataRes.decode(data);
            this.UpdateMySeat(res);
            this.SendMessage(MessageNames.DragonVsTigerRoomDataChange,res);
        });

        //更新其他人下注信息
        TCPNetwork.GetInstance().ListenMsgWithGameType(gameType,TCPSessionID.Hall,LongHuMsgDefine.MSG_PUSH_LONGHU_OTHER_BET,(data)=>{  
            let res = PushUserBetRes.decode(data);


            //ccC.error(res);

            this.ParseOtherBetInfo(res.betAreaInfoList);
            this.ParseBetListNotify( res.betList );
         
        });

        TCPNetwork.GetInstance().ListenMsgWithGameType(gameType,TCPSessionID.Hall,LongHuMsgDefine.MSG_PUSH_LONGHU_SETTLEMENT,(data)=>{  
            let res = PushBattleSettlementRes.decode(data);
            
            this.ParseSettleMentData(res);
            this.SendMessage(MessageNames.DTBetSettlement)
        });
    }


    public settlementData:PushBattleSettlementRes;
    public ParseSettleMentData(data:PushBattleSettlementRes)
    {
        this.settlementData = data;
    }

    public AddMyDropCoin(betArea:BetArea,betCount:number)
    {
        if(this.myAreaDropCoin[betArea] + betCount > this.myMostAreaCoinLimit[betArea] )
        {
            return false;
        }
        this.myTotalBet += betCount;
        this.myAreaDropCoin[betArea] += betCount;
        return true;
    }

    
    //解析下注通知//
    public ParseBetListNotify(betList: IUserBet[])
    { 
        let noSeatPlayer:Array<IUserBet> = [...betList];
        this.seatNewBetArray = [];//上座玩家下注信息
        
        // betList.forEach((element)=>{
        //     cc.error(element.chipType+"   #####@@@@@@@@@@@@@@@@@chipType");
        // });
        betList.forEach((element)=>{
            this.seatArray.forEach((elementSeat)=>{
                if(elementSeat.roleInfo!=null&&element.playerId == elementSeat.roleInfo.playerId)
                {
                  
                    this.seatNewBetArray.push(element);                    
                }
            });
        });

        this.seatNewBetArray.forEach((elementX)=>
        {
            Util.RemoveArray(noSeatPlayer,elementX);//排除掉不需要的上座玩家元素//
        });   
 
        let totalBet:Array<number>  = [];
        for (let index = 1; index <= 3; index++) {
            totalBet[index] = 0;
            for (let index2 = 0; index2 < noSeatPlayer.length; index2++) {
                const element = noSeatPlayer[index2];
                if(element.betArea == index)//在当前区域下注的非座位玩家(散户)
                {
                    //当前桌面他人下注
                    totalBet[index] += element.chipType;
                }
            }
        }
 

        let chipTypeArray:Array<number> = [100,1000,5000,10000,50000];
        let chipByOtherArray:Array<Array<UserBet>> = [];
        for (let index = 1; index <= 3; index++) {//根据区域划分//
            let totalCountInArea =  totalBet[index];       

            for(let k = chipTypeArray.length -1; k>=0 ;k--)
            {
                let chipCount = Math.floor(totalCountInArea/chipTypeArray[k]);

                for(let chip = 1;chip<= chipCount;chip++)
                {   
                    if(chipByOtherArray[index] == null)
                    { 
                        chipByOtherArray[index] = [];//没有就申请//
                    }

                    let modelChip = UserBet.create();
                    modelChip.betArea = index;
                    modelChip.playerId = "";
                    modelChip.gold = "0";
                    modelChip.chipType = chipTypeArray[k];
                    chipByOtherArray[index].push(modelChip);//在这里面压入一个筹码
                }
                totalCountInArea -= chipCount*chipTypeArray[k];

                //最大长度限制一下---------------------//
                let maxLen = 3;
                //挑选要显示的//
                let num = Random.RangeInt(1,10);   
                if(num<=2)
                {
                    maxLen = 2;
                }
                else if(num<=5)
                {
                    maxLen = 1;
                }

                let mTemp:Array<UserBet> = [];

                if(chipByOtherArray[index] == null)
                {
                    //ccC.error(index + "的筹码暂时不存在---------------------------");
                    continue;
                }

                if(chipByOtherArray[index].length>maxLen){
                    for (let len = 0; len < maxLen; len++) {
                        mTemp[len] = chipByOtherArray[index][len];     
                    }                     
                    chipByOtherArray[index] = mTemp;
                }
            }
        }

        let NewChipByOtherArray = [];
        if(chipByOtherArray.length > 0)
        {
            let minIncludeArea = 1;
            let maxIncludeArea = 0;
            if(chipByOtherArray.length<=2)
            {
                maxIncludeArea = 1;
            }
            else
            {
                maxIncludeArea = 2;
            }
        


            chipByOtherArray.forEach(ele=>{
                let newList = [];
                ele.forEach(betInfo=>{
                    newList.push(betInfo);
                })

                NewChipByOtherArray[NewChipByOtherArray.length] = newList;
            });
        }

        //上座玩家下注判断
        for (let index = 0; index < this.seatNewBetArray.length; index++) {
            let isGodBet = false;
            let seatBetInfo =  this.seatNewBetArray[index] ;

            if(this.seatArray[1]!=null && this.seatArray[1].hasPlayer)
            {
                if(this.seatArray[1].roleInfo.playerId == seatBetInfo.playerId)
                {
                    isGodBet = true;
                    this.godBetArray[seatBetInfo.betArea] = true;
                }
            }

            let array:Array<any> = [];
            array[1] = seatBetInfo;
            array[2] = isGodBet;       
            this.SendMessage(MessageNames.DragonVsTigerSeatPlayerBet,array);
        }
        //新的数据//
        this.SendMessage(MessageNames.UpdateOtherGuyBetInfo,NewChipByOtherArray);
    }
    
    public BrokenArray(array:any[])
    {
        let comp = []
        while(array.length>0)
        {
            let data = Util.RemoveArray(array,Random.RangeInt(0,array.length-1));
            if(data!=0)
            {
                comp[comp.length] = data;
            }
        }
        return comp;
    }


    public set initRoomData(array: InitRoomDataRes) {
        this._initRoomData = array;
    }
   
    //
    private ParseInitSeatInfo(res)
    {
        let index = 1;
        res.seatInfoList.forEach((element)=>{
            this.seatArray[index] = element;
            index++;
        });
    } 

    //座位数据更新
    public UpdateMySeat(list:UpdateRoomDataRes)
    { 
        list.seatInfoList.forEach((element)=>{
            this.seatArray[element.seatId+1] = element;
        });
    }

    //下注时间
    private  betTime:number;
    //我的区域下注动作
    public SendMyBet(betArea:BetArea,betType:number,requestTime:number)
    { 
       // cc.error("SendMyBet@@@开始向服务器发送消息");


        if(this.baseLimit > Global.PlayerInfo.PlayerCurrency.Gold)
        {
            Toast.Show("余额"+(this.baseLimit/100)+"以上才可以下注，请您充值" );
            return;
        }
        let gameType = GameTypeMgr.Config.LongHuDou.gameType;
        let req = BetReq.create();
        req.areaType = betArea;
        req.chipType = betType;

        let sendData = BetReq.encode(req).finish();
        //ccC.error("开始向服务器发送消息");
        let infoArray:Array<any> = [];
        infoArray[0] = betArea;
        infoArray[1] = betType;
        let isClientDo =  this.AddMyDropCoin(betArea,betType);
        if(isClientDo)
        {
            this.SendMessage(MessageNames.DTBetSuccess,infoArray);
        }


        ///cc.error("开始向服务器发送消息");
        TCPNetwork.GetInstance().SendWithGameType(gameType,TCPSessionID.Hall,LongHuMsgDefine.MSG_LONGHU_BET_REQ,sendData,(data)=>{
            // let res =  CommonUpTipsRes.decode(data);
            let res = BetRes.decode(data);
    
            if(res.success)
            {
                //ccC.error("成功返回----------------------");
                let isGodBet = false;
                if(this.initRoomData !=null)
                {
                    if(this.seatArray!=null && this.seatArray[1].hasPlayer 
                        &&this.seatArray[1].roleInfo.playerId == Global.PlayerInfo.playerId)
                    {
                        isGodBet = true;
                        this.godBetArray[betArea] = true;
                    }
                }
                
            }
            else
            {
                if(isClientDo)
                {
                    this.myTotalBet -= betType;
                    this.myAreaDropCoin[betArea] -= betType;
                }
 
                Toast.Show(res.tips);
            }
        },(err:string)=>{
            // ccC.error("彻底失败----------------------");
            // ccC.error(err);
        },true);
    }

    //下注金额拆分
    public ParseBetLimit(res:any)
    {
        this.myMostAreaCoinLimit = [];
        this.myMostAreaCoinLimit [1] = res.huCoinLimit;
        this.myMostAreaCoinLimit [2] = res.longCoinLimit;
        this.myMostAreaCoinLimit [3] = res.drawCoinLimit;

        this._baseLimit = res.betBaseLimit;
        this._bigBet = res.bigBet;
    }

    //更新牌桌游戏状态
    public UpdateBattleState(gameSta:GameState,countDown:number)
    {
        this.gameState = gameSta;
        //ccC.error("model更新状态gameState" + this.gameState );
        this.countDownTime = countDown;
    }

    //解析我的玩家信息
    public ParseMyRoleInitInfo(res:any)
    {
        this._roleInfo = res.myRoleInfo as LHDRoleInfo;
    }
    //
    public ParseMyBetInfo(selfBetInfo: IBetAreaInfo[])
    {
        //ccC.error(selfBetInfo);
        selfBetInfo.forEach(element=>{
            let ele = element as BetAreaInfo; 

            this._myTotalBet += Number(ele.betCount)  ;
            //下注区域是虎龙和
            this._myAreaDropCoin[ele.areaType] = this._myAreaDropCoin[ele.areaType] + Number(ele.betCount); 
        });
    }
    
    //
    public ParseOtherBetInfo(betAreaInfoList: IBetAreaInfo[])
    {
        betAreaInfoList.forEach(element=>{
            let ele = element as BetAreaInfo; 
            this._totalBetOnTableArea[ele.areaType]  = Number(ele.betCount);
            this.godBetArray [ele.areaType]  =  ele.betByClever;
        });
    }

    //解析下注信息
    public ParseInitBetInfo(res:InitRoomDataRes)
    {
        this._myAreaDropCoin = [];//在各個區域放下的籌碼
        this._myTotalBet = 0;
        this.godBetArray = []
        this._totalBetOnTableArea = [];
        for(let index = 1;index<=3;index++)
        {
            this.godBetArray [index] = false;
            this._myAreaDropCoin[index] = 0;
        }

        this.ParseOtherBetInfo(res.betAreaInfoList);
        this.ParseMyBetInfo(res.selfBetInfo);

        // ccC.error("解析下注信息ParseInitBetInfo");

        // ccC.error( this.godBetArray);
    }

    //三个区域的个人總下注 
    private _myAreaDropCoin: Array<number>  ;

    public get myAreaDropCoin() {
        return this._myAreaDropCoin;
    }
    
    public set myAreaDropCoin(array: Array<number>) {
        this._myAreaDropCoin = array;
    }
}

import Model from "../../MVCFramework/Model";
import { PlayInfo } from "../../Protos/GameCommon";
import { CardColor, CardSize } from "../../Protos/PokerInfo";
import { SingleAreaInfo, NiuNiuType, BetResult, BRNNRecord, ReadyBankerInfo, BRNNMember, PushRoomInitData, SettlementRoleInfo, BullPushState, BullPushBetInfo, CardInfo, BullBankerListReq, BullBankerListRes, BRNNSUBRecord, BullPushDeal, PushBankerInfo, PushSeatInfo, BullBetReq, BullBetRes, BullBankerReq, BullBankerRes, BullCancelBankerReq, BullCancelBankerRes } from "../../Protos/BaiRenNiuNiu";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import { BaiRenNiuNiuMsgDefine } from "../../Protos/MessageDefine_BaiRenNiuNiu";
import Global from "../../Global/Global";
import BullConfig from "./BullConfig";
import MessageNames from "../../Modules/MessageNames";
import MessageNamesBull from "./MessageNamesBull";
import { Random } from "../../Tools/Random";
import Toast from "../../Tools/Toast";
import ccC from "../../Tools/ccC";

class BullPlayerInfo
{
    userId:number = 0;          //玩家ID
    userName:string = "";       //玩家名称
    gold:number = 0;            //玩家拥有的金币
    userType:number = 0;        //用户类型 0 普通玩家 1 上位  2 庄家 3 申请上庄
    seatIndex:number = 0;       //上座座位号，0 未上座
    iconURL:string = "";        //头像位置
    isRobot:boolean = false;    //是否机器人
    bankerBetGold:number = 0;   //作为庄家押的金币s
    
    
}

export class BullSeatPlayerInfo
{
    index:number;
    member:BRNNMember;
    betGold:number[];
}

export class BullBanker
{
    playerId:string = "-1";     //玩家ID
    userName:string = "";       //玩家名称
    headImageUrl:string = "";   //头像位置
    headBox:string = "";        //玩家头像
    vipLv:number = 0;           //玩家头像框
    gold:number = 6;            //玩家拥有的金币
    bankerTimes:number = 0;     //连庄次数
    isRobot:boolean = true;     //是否机器人
    bankerCoin:number = 0;      //上庄需要的金币下限
    isOffBanker:boolean;
}

export enum BullBetStatus
{
    StartBet = 1,
    StopBet = 2,
    Deal = 3,
    Finish = 4,
    None = 5,
}

export class CardInfoCustom extends CardInfo
{
    color:CardColor;
    size:CardSize;
    isNiu:boolean = false;
}

export class BullSingleAreaInfo
{
    index:number;
    cardInfoArr:CardInfoCustom[];
    niuniuType:NiuNiuType;
    mutiple:number;
    result:number;
    selfResult:number;
}

export class BullRoundResult
{
    index:number;
    blnWin:boolean;
}

export class SeatBetData
{
    seatIndex:number;
    betGold:number[];
}

export class SpliceSeatBetData
{
    seatIndex:number;
    betGold:number[][];
}

export class BullPlayerBetData
{
    seatBetData:SpliceSeatBetData[];
    allPlayerBetData:number[][];
}

export default class ModelBull extends Model
{
    playInfo:PlayInfo;
    seatPlayers:BullSeatPlayerInfo[];
    singleAreaArr:BullSingleAreaInfo[];         //服务器发牌信息
    winResultArr:BetResult[];                   //赢钱结果
    allBetInfo:number[];                        //所有玩家分别在4门下注区域的金额
    myBetInfo:number[];                         //自己分别在4门下注区域的金额
    myBetNotConfirm:number[][];                 //自己在4门单次下注的集合，尚未得到后台确认下注成功的下注额，单位：分
    godBet:boolean[];                           //神算子在4门下注的情况
    trendList:BullRoundResult[][];               //胜负走势
    reqToBeBankerList:ReadyBankerInfo[];        //请求上庄列表
    banker:BullBanker;                          //当前上庄的玩家
    bankerTimes:number;                         //上庄次数
    isFirstRecieveBetState:boolean;             //是否第一次接受赌局状态
    curBetStatus:BullBetStatus;                 //
    statusLeftTime:number;
    maxMutiple:number;                          //最大赔率
    mySeatIndex:number;                         //玩家自己是座位的index，如果没上座就为-1
    isMePlayed:boolean;
    roundResultCache:BullRoundResult[];
    betCoinLimit:number;
    roundBetCoinLimit:number;
    baseLimit:number;
    settlementRoleInfo:SettlementRoleInfo[];

    readonly gameType:number = GameTypeMgr.Config.Bull.gameType;

    public Init()
    {
        this.Clean();

        this.ListenMsg();
    }

    public Clean()
    {
        this.seatPlayers = [];
        this.singleAreaArr = [new BullSingleAreaInfo(),new BullSingleAreaInfo(),new BullSingleAreaInfo(),new BullSingleAreaInfo(),new BullSingleAreaInfo()];
        this.winResultArr = [];
        this.allBetInfo = [0,0,0,0];
        this.myBetInfo = [0,0,0,0];
        this.myBetNotConfirm = [[],[],[],[]];
        this.godBet = [false,false,false,false];
        this.trendList = [];
        this.reqToBeBankerList = [];
        this.banker = new BullBanker();
        this.curBetStatus = BullBetStatus.None;
        this.statusLeftTime = 0;
        this.maxMutiple = 0;
        this.mySeatIndex = -1;
        this.isMePlayed = false;
        this.roundResultCache = [];
        this.betCoinLimit = 0;
        this.roundBetCoinLimit = 0;
        this.baseLimit = 0;
        this.settlementRoleInfo = [];
    }

    public nextRoundClean()
    {
        this.allBetInfo = [0,0,0,0];
        this.myBetInfo = [0,0,0,0];
        this.myBetNotConfirm = [[],[],[],[]];
        this.godBet = [false,false,false,false];
    }

    public SaveGameInfo(playInfo:any)
    {
        this.playInfo = playInfo as PlayInfo;
    }

    public ListenMsg()
    {
        //接收服务器发来的初始化数据
        TCPNetwork.GetInstance().ListenMsgWithGameType(
        this.gameType, 
        TCPSessionID.Hall, 
        BaiRenNiuNiuMsgDefine.MSG_PUSH_ROOM_INIT_DATA,
        (data)=>
        {
            let res = PushRoomInitData.decode(data);

            this.nextRoundClean();
            this.mySeatIndex = -1;
            this.seatPlayers = [];

            // 席位上的玩家
            for (let i = 0; i < res.seatInfo.length; i++)
            {
                let bullSeatPlayerInfo = new BullSeatPlayerInfo();
                bullSeatPlayerInfo.index = res.seatInfo[i].index;
                bullSeatPlayerInfo.member = res.seatInfo[i].member as BRNNMember;
                bullSeatPlayerInfo.betGold = [];
                this.seatPlayers.push(bullSeatPlayerInfo);

                if (res.seatInfo[i].member != null)
                {
                    if (res.seatInfo[i].member.playerId == Global.PlayerInfo.playerId)
                    {
                        this.mySeatIndex = res.seatInfo[i].index;
                    }
                }
            }

            // 庄家
            this.banker.isRobot = res.isSystemBanker;
            if (this.banker.isRobot)
            {
                this.banker.playerId = "-1";
            }
            else
            {
                this.banker.playerId = res.banker.member.playerId;
                this.banker.userName = res.banker.member.userName;
                this.banker.headImageUrl = res.banker.member.headImageUrl;
                this.banker.headBox = res.banker.member.headbox;
                this.banker.vipLv = res.banker.member.vipLv;
                this.banker.gold = Number(res.banker.member.gold);
                this.banker.bankerTimes = res.banker.bankerTimes;
                //self.banker.bankerCoin = res.banker.bankerCoin;
                this.banker.isOffBanker = res.banker.isOffBanker;
            }

            // 走势
            this.trendList = [];
            for (let k = 0; k < res.records.length; k++)
            {
                let oneRoundResult:BullRoundResult[] = [];
                for (let l = 0; l < res.records[k].indexRecord.length; l++)
                {
                    let oneRecord = res.records[k].indexRecord[l];
                    let roundResult = new BullRoundResult();
                    roundResult.index = oneRecord.index;
                    roundResult.blnWin = oneRecord.blnWin;
                    oneRoundResult[oneRecord.index-1] = roundResult;
                } 
                this.trendList.push(oneRoundResult);
            }

            this.curBetStatus = res.status;
            this.statusLeftTime = res.waitTime;
            this.maxMutiple = res.maxMutiple;

            res.betInfos.forEach(betInfo => {
                if (betInfo.index > 0)
                {
                    this.allBetInfo[betInfo.index-1] = Number(betInfo.betTotal);
                    this.godBet[betInfo.index-1] = betInfo.betByClever;
                }
            });

            this.isMePlayed = false;
            for (let i = 0; i < res.selfBetInfo.length; i++)
            {
                if (res.selfBetInfo[i].index == 0)
                    continue;

                let betNum = Number(res.selfBetInfo[i].betTotal);
                this.myBetInfo[res.selfBetInfo[i].index-1] = betNum;

                if (betNum!=undefined && betNum > 0)
                {
                    this.isMePlayed = true;
                }
            } 

            this.roundResultCache = null;
            if (res.status == BullBetStatus.Deal)
            {
                //暂存本轮的输赢结果数据，等到结算状态再赋值给输赢趋势列表
                this.roundResultCache = [];
                for (let k = 0; k < res.singleArea.length; k++)
                {
                    let singleInfo = res.singleArea[k];
                    let tempTab = new BullSingleAreaInfo();
                    let cardInfoArr = [new CardInfoCustom(),new CardInfoCustom(),new CardInfoCustom(),new CardInfoCustom(),new CardInfoCustom()];

                    tempTab.index = singleInfo.index;
                    for (let i = 0; i < singleInfo.cardInfo.length; i++)
                    {
                        let cardInfo = singleInfo.cardInfo[i];
                        cardInfoArr[i].id = cardInfo.id;
                        cardInfoArr[i].color = cardInfo.cardColor;
                        cardInfoArr[i].size = cardInfo.cardSize;
                        cardInfoArr[i].isNiu = false;
                        if (singleInfo.niuniuType != BullConfig.NiuNiuType.WUNIU)
                        {
                            let isNiu = true;
                            for (let j = 0; j < singleInfo.niucards.length; j++)
                            {
                                if (cardInfoArr[i].id == singleInfo.niucards[j].id)
                                {
                                    isNiu = false;
                                    break;
                                }
                            }
                            cardInfoArr[i].isNiu = isNiu;
                        }
                    }
                    tempTab.cardInfoArr = cardInfoArr;
                    tempTab.niuniuType = singleInfo.niuniuType;
                    tempTab.mutiple = singleInfo.mutiple;
                    tempTab.result = singleInfo.result;
                    this.singleAreaArr[singleInfo.index] = tempTab;

                    if (singleInfo.index != 0)
                    {
                        let value = this.roundResultCache[singleInfo.index-1];
                        if (value==null || value==undefined)
                        {
                            let roundResult = new BullRoundResult();
                            roundResult.index = singleInfo.index-1;
                            roundResult.blnWin = singleInfo.result == 2;
                            this.roundResultCache[singleInfo.index-1] = roundResult;
                        }
                        else
                        {
                            this.roundResultCache[singleInfo.index-1].index = singleInfo.index-1;
                            this.roundResultCache[singleInfo.index-1].blnWin = singleInfo.result == 2;
                        }
                    }
                }
            }

            // 这里服务器不推每门玩家自己的输赢金额，所以自己计算(抽水前金额）
            if (Global.PlayerInfo.playerId == this.banker.playerId)
            {
                for (let i = 0; i < 4; i++)
                {
                    if (this.allBetInfo[i] != 0)
                    {
                        if (this.singleAreaArr[i+1].result == 1)
                        {
                            this.singleAreaArr[i+1].selfResult = this.singleAreaArr[0].mutiple * this.allBetInfo[i];
                        }
                        else
                        {
                            this.singleAreaArr[i+1].selfResult = -1 * this.singleAreaArr[i+1].mutiple * this.allBetInfo[i];
                        }
                    }
                    else
                    {
                        this.singleAreaArr[i+1].selfResult = null;
                    }
                }
            }
            else
            {
                for (let i = 0; i < 4; i++)
                {
                    if (this.myBetInfo[i] != 0)
                    {
                        if (this.singleAreaArr[i+1].result == 2)
                        {
                            this.singleAreaArr[i+1].selfResult = this.singleAreaArr[i+1].mutiple * this.myBetInfo[i];
                        }
                        else
                        {
                            this.singleAreaArr[i+1].selfResult = -1 * this.singleAreaArr[0].mutiple * this.myBetInfo[i];
                        }
                    }
                    else
                    {
                        this.singleAreaArr[i+1].selfResult = null;
                    }
                }
            }

            this.winResultArr = res.betResult as BetResult[];

            //先减去结算的输赢金额，等飘金币时再加回来
            for(let k = 0; k < this.seatPlayers.length; k++)
            {
                for (let k1 = 0; k1 < this.winResultArr.length; k1++)
                {
                    if (this.seatPlayers[k].member.playerId == this.winResultArr[k1].playerId)
                    {
                        let gold = Number(this.seatPlayers[k].member.gold);
                        this.seatPlayers[k].member.gold = (gold - this.winResultArr[k1].extractGold).toString();
                        break;
                    }
                }
            }
            if (!this.banker.isRobot)
            {
                for(let k = 0; k < this.winResultArr.length; k++)
                {
                    if (this.winResultArr[k].playerId == this.banker.playerId)
                    {
                        this.banker.gold = Number(this.winResultArr[k].gold) - this.winResultArr[k].extractGold;
                        break;
                    }
                }
            }

            this.betCoinLimit = res.betCoinLimit;
            this.roundBetCoinLimit = res.roundBetCoinLimit;
            this.baseLimit = res.baseLimit;
            this.settlementRoleInfo = res.settlementRoleInfo as SettlementRoleInfo[];

            this.SendMessage(MessageNamesBull.BullChangeBanker);
            this.SendMessage(MessageNamesBull.InitBullRoomData);
        });


        //服务器推送状态结果
        TCPNetwork.GetInstance().ListenMsgWithGameType(
        this.gameType, 
        TCPSessionID.Hall, 
        BaiRenNiuNiuMsgDefine.MSG_PUSH_STATE,
        (data)=>
        {
            let res = BullPushState.decode(data);
            this.curBetStatus = res.status;
            this.statusLeftTime = res.duration;
            this.SendMessage(MessageNamesBull.BullStatusChange);
        });


        //推送下注信息
        TCPNetwork.GetInstance().ListenMsgWithGameType(
        this.gameType, 
        TCPSessionID.Hall, 
        BaiRenNiuNiuMsgDefine.MSG_PUSH_BET_INFO,
        (data)=>
        {
            let res = BullPushBetInfo.decode(data);
            
            //本次下注所有玩家在不同位置下注的信息，除了上座玩家和自己
            let betData = [0,0,0,0];
            //分割后的其他玩家下注的信息
            let tempAllPlayerBetData:number[][] = [];
            //所有上座玩家本次的下注信息
            let seatBetData:SeatBetData[] = [];
            //分割后的下注信息
            let tempSeatBetData:SpliceSeatBetData[] = [];

            for (let i in res.playerBet)
            {
                let onceBetInfo = res.playerBet[i];
                //表示该数据是否是上座玩家的数据
                let isSeatData = false;
                for (let k = 0; k < this.seatPlayers.length; k++)
                {
                    let seatInfo = this.seatPlayers[k];
                    if (seatInfo.member!=null && seatInfo.member.playerId == onceBetInfo.playerId)
                    {
                        let originGold = this.seatPlayers[k].betGold[onceBetInfo.betIndex-1];
                        if (originGold==null || originGold==undefined) originGold = 0;
                        this.seatPlayers[k].betGold[onceBetInfo.betIndex-1] = originGold + onceBetInfo.gold;

                        isSeatData = true;
                        this.seatPlayers[k].member.gold = (Number(seatInfo.member.gold) - onceBetInfo.gold).toString();

                        let hasAdd = false;
                        for(let k1 = 0; k1 < seatBetData.length; k1++)
                        {
                            if (seatInfo.index == seatBetData[k1].seatIndex)
                            {
                                seatBetData[k1].betGold[onceBetInfo.betIndex-1] += onceBetInfo.gold;
                                hasAdd = true;
                                break;
                            }
                        }
                        if (hasAdd == false)
                        {
                            let tempBetInfo = [0,0,0,0];
                            tempBetInfo[onceBetInfo.betIndex-1] = onceBetInfo.gold;
                            let data =  new SeatBetData();
                            data.seatIndex = seatInfo.index;
                            data.betGold = tempBetInfo;
                            seatBetData.push(data);
                        }

                        break;
                    }
                }

                if (isSeatData == false)
                {
                    betData[onceBetInfo.betIndex-1] += onceBetInfo.gold;
                }
            }

            //对每个上座玩家的数据进行加工处理，所有的区域的下注分割成若干次下注信息
            for (let l = 0; l < seatBetData.length; l++)
            {
                let oneSeatBetData = seatBetData[l];
                let tempOneSeatBetData = new SpliceSeatBetData();
                tempOneSeatBetData.seatIndex = oneSeatBetData.seatIndex;
                tempOneSeatBetData.betGold = [];
                let hasBetData:number[][] = [];

                for (let k = 0; k < oneSeatBetData.betGold.length; k++)
                {
                    if (oneSeatBetData.betGold[k] > 0)
                    {
                        hasBetData.push([k,oneSeatBetData.betGold[k]]);
                    }
                }

                let minIncludeArea = 1;
                let maxIncludeArea = 1;
                if (hasBetData.length <= 2)
                {
                    maxIncludeArea = 1;
                }
                else
                {
                    maxIncludeArea = 1;
                }

                while(true)
                {
                    let newBetData = [0,0,0,0];
                    let randomNum = Random.RangeInt(minIncludeArea, maxIncludeArea+1);
                    for (let i = 0; i < randomNum; i++)
                    {
                        let randomIndex = Random.RangeInt(0, hasBetData.length);
                        let oneBetData = hasBetData.splice(randomIndex, 1)[0];
                        newBetData[oneBetData[0]] = oneBetData[1];
                        if (hasBetData.length == 0)
                        {
                            break;
                        }
                    }
                    tempOneSeatBetData.betGold.push(newBetData);
                    if (hasBetData.length == 0)
                    {
                        break;
                    }
                }
                tempSeatBetData.push(tempOneSeatBetData);
            }

            //对其他玩家的数据进行加工处理，所有的区域的下注分割成若干次下注信息
            let hasBetData:number[][] = [];
            for (let k = 0; k < betData.length; k++)
            {
                if (betData[k]>0)
                {
                    hasBetData.push([k, betData[k]]);
                }
            }
            if (hasBetData.length > 0)
            {
                let minIncludeArea = 1;
                let maxIncludeArea = 0;
                if (hasBetData.length <= 2) maxIncludeArea = 1;
                else maxIncludeArea = 2;

                while(true)
                {
                    let newBetData = [0,0,0,0];
                    let randomNum = Random.RangeInt(minIncludeArea, maxIncludeArea+1);
                    for (let i = 1; i <= randomNum; i++)
                    {
                        let randomIndex = Random.RangeInt(0, hasBetData.length);
                        let oneBetData = hasBetData.splice(randomIndex, 1)[0];
                        newBetData[oneBetData[0]] = oneBetData[1];
                        if (hasBetData.length == 0)
                        {
                            break;
                        } 
                    }
                    tempAllPlayerBetData.push(newBetData);
                    if (hasBetData.length == 0)
                    {
                        break;
                    } 
                }
            }

            res.betInfo.forEach(betInfo => {
                this.allBetInfo[betInfo.index-1] = Number(betInfo.betTotal);
            });

            let bullPlayerBetData = new BullPlayerBetData();
            bullPlayerBetData.seatBetData = tempSeatBetData;
            bullPlayerBetData.allPlayerBetData = tempAllPlayerBetData;
            this.SendMessage(MessageNamesBull.BullPlayerBet, bullPlayerBetData);
        });

        //服务器推送发牌信息和赢钱结果
        TCPNetwork.GetInstance().ListenMsgWithGameType(
        this.gameType, 
        TCPSessionID.Hall, 
        BaiRenNiuNiuMsgDefine.MSG_PUSH_DEAL,
        (data)=>
        {
            if(Global.showLog == true)
                cc.log("接收到发牌信息");

            let res = BullPushDeal.decode(data);

            //暂存本轮的输赢结果数据，等到结算状态再赋值给输赢趋势列表
            this.roundResultCache = [];
            for (let k = 0; k < res.singleArea.length; k++)
            {
                let singleInfo = res.singleArea[k];
                let tempTab = new BullSingleAreaInfo();
                let cardInfoArr = [new CardInfoCustom(),new CardInfoCustom(),new CardInfoCustom(),new CardInfoCustom(),new CardInfoCustom()];

                tempTab.index = singleInfo.index;
                for (let i = 0; i < singleInfo.cardInfo.length; i++)
                {
                    let cardInfo = singleInfo.cardInfo[i];
                    cardInfoArr[i].id = cardInfo.id;
                    cardInfoArr[i].color = cardInfo.cardColor;
                    cardInfoArr[i].size = cardInfo.cardSize;
                    cardInfoArr[i].isNiu = false;
                    if (singleInfo.niuniuType != BullConfig.NiuNiuType.WUNIU)
                    {
                        let isNiu = true;
                        for (let j = 0; j < singleInfo.niucards.length; j++)
                        {
                            if (cardInfoArr[i].id == singleInfo.niucards[j].id)
                            {
                                isNiu = false;
                                break;
                            }
                        }
                        cardInfoArr[i].isNiu = isNiu;
                    }
                }
                tempTab.cardInfoArr = cardInfoArr;
                tempTab.niuniuType = singleInfo.niuniuType;
                tempTab.mutiple = singleInfo.mutiple;
                tempTab.result = singleInfo.result;
                this.singleAreaArr[singleInfo.index] = tempTab;

                if (singleInfo.index != 0)
                {
                    let value = this.roundResultCache[singleInfo.index-1];
                    if (value==null || value==undefined)
                    {
                        let roundResult = new BullRoundResult();
                        roundResult.index = singleInfo.index-1;
                        roundResult.blnWin = singleInfo.result == 2;
                        this.roundResultCache[singleInfo.index-1] = roundResult;
                    }
                    else
                    {
                        this.roundResultCache[singleInfo.index-1].index = singleInfo.index-1;
                        this.roundResultCache[singleInfo.index-1].blnWin = singleInfo.result == 2;
                    }
                }
            }
 
            // 这里服务器不推每门玩家自己的输赢金额，所以自己计算(抽水前金额）
            if (Global.PlayerInfo.playerId == this.banker.playerId)
            {
                for (let i = 0; i < 4; i++)
                {
                    if (this.allBetInfo[i] != 0)
                    {
                        if (this.singleAreaArr[i+1].result == 1)
                        {
                            this.singleAreaArr[i+1].selfResult = this.singleAreaArr[0].mutiple * this.allBetInfo[i];
                        }
                        else
                        {
                            this.singleAreaArr[i+1].selfResult = -1 * this.singleAreaArr[i+1].mutiple * this.allBetInfo[i];
                        }
                    }
                    else
                    {
                        this.singleAreaArr[i+1].selfResult = null;
                    }
                }
            }
            else
            {
                for (let i = 0; i < 4; i++)
                {
                    if (this.myBetInfo[i] != 0)
                    {
                        if (this.singleAreaArr[i+1].result == 2)
                        {
                            this.singleAreaArr[i+1].selfResult = this.singleAreaArr[i+1].mutiple * this.myBetInfo[i];
                        }
                        else
                        {
                            this.singleAreaArr[i+1].selfResult = -1 * this.singleAreaArr[0].mutiple * this.myBetInfo[i];
                        }
                    }
                    else
                    {
                        this.singleAreaArr[i+1].selfResult = null;
                    }
                }
            }

            this.winResultArr = res.betResult as BetResult[];

            this.settlementRoleInfo = res.settlementRoleInfo as SettlementRoleInfo[];
            this.isMePlayed = res.isMePlayed;

            this.SendMessage(MessageNamesBull.BullDeal);
        });

        //服务器推送庄家更变信息
        TCPNetwork.GetInstance().ListenMsgWithGameType(
        this.gameType, 
        TCPSessionID.Hall, 
        BaiRenNiuNiuMsgDefine.MSG_PUSH_BANKER,
        (data)=>
        {
            if(Global.showLog == true)
                cc.log("庄家变更");
            let res = PushBankerInfo.decode(data);
            let lastRoundIsMeBanker = false;
            let thisRoundIsMeBanker = false;

            if (this.banker.playerId == Global.PlayerInfo.playerId)
            {
                lastRoundIsMeBanker = true;
            }
            this.banker.isRobot = res.isSystemBanker;
            if (this.banker.isRobot)
            {
                this.banker.playerId = "-1";
            }
            else
            {
                this.banker.playerId = res.bankerInfo.member.playerId;
                this.banker.userName = res.bankerInfo.member.userName;
                this.banker.headImageUrl = res.bankerInfo.member.headImageUrl;
                this.banker.headBox = res.bankerInfo.member.headbox;
                this.banker.vipLv = res.bankerInfo.member.vipLv;
                this.banker.gold = Number(res.bankerInfo.member.gold);
                this.banker.bankerTimes = res.bankerInfo.bankerTimes;
                this.banker.isOffBanker = res.bankerInfo.isOffBanker;
                if (this.banker.playerId == Global.PlayerInfo.playerId)
                {
                    thisRoundIsMeBanker = true;
                }
            }

            if (lastRoundIsMeBanker && !thisRoundIsMeBanker)
            {
                this.SendMessage(MessageNamesBull.BullReqBankerStatusChange, BullConfig.ConstNiuNiu.REQ_BANKER_STATUS.bankerDown);
            }
            else if (!lastRoundIsMeBanker && thisRoundIsMeBanker)
            {
                this.BullReqBankerList();
            }
            this.SendMessage(MessageNamesBull.BullChangeBanker);
        });


        // 服务器上座信息
        TCPNetwork.GetInstance().ListenMsgWithGameType(
        this.gameType, 
        TCPSessionID.Hall, 
        BaiRenNiuNiuMsgDefine.MSG_PUSH_SEAT,
        (data)=>
        {
            if(Global.showLog == true)
                cc.log("接收到上座信息变更 ");

            let res = PushSeatInfo.decode(data);

            this.mySeatIndex = -1;
            this.seatPlayers = [];
            for(let k = 0; k < res.seatInfo.length; k++)
            {
                let seatMember = res.seatInfo[k];
                let bullSeatPlayerInfo = new BullSeatPlayerInfo();
                bullSeatPlayerInfo.index = seatMember.index;
                bullSeatPlayerInfo.member = seatMember.member as BRNNMember;
                bullSeatPlayerInfo.betGold = [];
                this.seatPlayers.push(bullSeatPlayerInfo);

                if (seatMember.member != null)
                {
                    if (seatMember.member.playerId == Global.PlayerInfo.playerId)
                    {
                        this.mySeatIndex = seatMember.index;
                    }
                }
            }

            this.SendMessage(MessageNamesBull.BullChangeSeat);
        });
    }

    // 请求上庄列表
    public BullReqBankerList()
    {
        let req = BullBankerListReq.create();
        let reqData = BullBankerListReq.encode(req).finish();
        TCPNetwork.GetInstance().SendWithGameType(this.gameType, TCPSessionID.Hall, BaiRenNiuNiuMsgDefine.MSG_BANKER_LIST_REQ, reqData,
        (data)=>
        {
            if(Global.showLog == true)
                cc.log("返回请求上庄列表");

            let resData = BullBankerListRes.decode(data);
            this.reqToBeBankerList = resData.readyBankers;

            this.SendMessage(MessageNamesBull.BullBankListRes);
        },
        (err)=>
        {
        });
    }

    //请求下注
    public BullBetReq(index:number, money:number, callSuccess:()=>void=null, callFailed:()=>void=null)
    {
        let req = BullBetReq.create();
        req.index = index;
        req.money = money;
        let reqData = BullBetReq.encode(req).finish();
        TCPNetwork.GetInstance().SendWithGameType(this.gameType, TCPSessionID.Hall, BaiRenNiuNiuMsgDefine.MSG_BET_REQ, reqData,
        (data)=>
        {
            let resData = BullBetRes.decode(data);
            if (resData.isSuccess)
            {
                if (callSuccess != null) callSuccess();
            }
            else
            {
                if (callFailed != null) callFailed();

                Toast.Show(resData.tips);
            }
        },
        (err)=>
        {
        }, true);
    }

    //请求上庄
    public BullReqBanker()
    {
        let req = BullBankerReq.create();
        let reqData = BullBankerReq.encode(req).finish();
        TCPNetwork.GetInstance().SendWithGameType(this.gameType, TCPSessionID.Hall, BaiRenNiuNiuMsgDefine.MSG_BANKER_REQ, reqData,
        (data)=>
        {
            let resData = BullBankerRes.decode(data);
            if (resData.isSuccess)
            {
                this.SendMessage(MessageNamesBull.BullReqBankerStatusChange, BullConfig.ConstNiuNiu.REQ_BANKER_STATUS.bankerUp);
                this.BullReqBankerList();
            }
            else
            {
                Toast.Show(resData.tips);
            }
        },
        (err)=>
        {
        }, true);
    }

    //请求取消上庄
    public BullReqCancelBanker()
    {
        let req = BullCancelBankerReq.create();
        let reqData = BullCancelBankerReq.encode(req).finish();
        TCPNetwork.GetInstance().SendWithGameType(this.gameType, TCPSessionID.Hall, BaiRenNiuNiuMsgDefine.MSG_CANCEL_BANKER, reqData,
        (data)=>
        {
            let resData = BullCancelBankerRes.decode(data);
            if (resData.isSuccess)
            {
                if (resData.tips!=null && resData.tips.length>0)
                {
                    Toast.Show(resData.tips);
                }
                else
                {
                    Toast.Show("申请下庄成功");
                }

                //如果自己是庄家，本轮还没结束，所以取消上庄成功但自己还是庄家
                if (this.banker.playerId == Global.PlayerInfo.playerId)
                {
                    this.banker.isOffBanker = true;
                    this.SendMessage(MessageNamesBull.BullReqBankerStatusChange, BullConfig.ConstNiuNiu.REQ_BANKER_STATUS.preDown);
                }
                else
                {
                    this.SendMessage(MessageNamesBull.BullReqBankerStatusChange, BullConfig.ConstNiuNiu.REQ_BANKER_STATUS.bankerDown);
                    this.BullReqBankerList();
                }
            }
            else
            {
                Toast.Show(resData.tips);
            }
        },
        (err)=>
        {
        }, true);
    }

    //判定指定的ID是不是庄家
    public IsBanker(playerId:string)
    {
        return this.banker.playerId == playerId;
    }
}

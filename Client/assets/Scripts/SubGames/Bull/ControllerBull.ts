import Controller from "../../MVCFramework/Controller";
import MessageNames from "../../Modules/MessageNames";
import ModelBull, { BullBetStatus, BullPlayerBetData, SeatBetData } from "./ModelBull";
import ViewBull from "./ViewBull";
import { ModelNames, ViewNames } from "../../Modules/MVCRegister";
import MessageNamesBull from "./MessageNamesBull";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import BullConfig from "./BullConfig";
import SmallGameData from "../../Modules/Models/SmallGameData";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import { BaiRenNiuNiuMsgDefine } from "../../Protos/MessageDefine_BaiRenNiuNiu";
import TimerManager from "../../Components/TimerManager";
import Util from "../../Tools/Util";
import Global from "../../Global/Global";
import Dialog, { DialogType } from "../../Tools/Dialog";
import ConstStr from "../../Global/ConstStr";
import TIPS from "../../Global/Tips";
import { IntegralExchangeTable } from "../../Protos/Vip";
import AudioManager from "../../Manager/AudioManager";
import Toast from "../../Tools/Toast";
import { ViewRoleNodeSlotData } from "../../Modules/Views/ViewRoleInfo";
import ViewBullSettlement from "./ViewBullSettlement";
import ccC from "../../Tools/ccC";
import ViewBullTrend from "./ViewBullTrend";
import ViewBullBankerList from "./ViewBullBankerList";

export default class ControllerBull extends Controller
{
    private view:ViewBull;
    private viewTrend:ViewBullTrend;
    private viewBankerList:ViewBullBankerList;
    private viewSettlement:ViewBullSettlement;

    private model:ModelBull;

    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelBull) as ModelBull;
    }

    public Clean()
    {
        
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNamesBull.InitBullRoomData)
        {
            this.InitBullRoomData();
        }
        else if (msg == MessageNamesBull.BullStatusChange)
        {
            this.BullStatusChange();
        }
        else if (msg == MessageNamesBull.BullPlayerBet)
        {
            this.BullPlayerBet(msgBody);
        }
        else if (msg == MessageNamesBull.BullDeal)
        {
            this.BullDeal();
        }
        else if (msg == MessageNamesBull.BullBankListRes)
        {
            this.BullBankListRes();
        }
        else if (msg == MessageNamesBull.BullReqBankerStatusChange)
        {
            this.BullReqBankerStatusChange(msgBody);
        }
        else if (msg == MessageNamesBull.BullChangeBanker)
        {
            this.UpdateBankerView();
        }
        else if (msg == MessageNamesBull.BullChangeSeat)
        {
            this.UpdateSeatView();
        }
        else if (msg == MessageNamesBull.BullInitSmallGame)
        {
            this.BullInitSmallGame();
        }
    }

    public InitBullRoomData()
    {
        // 这里再清理一遍是为了重连回来进入这个方法时先把原来的界面整理一遍
        this.view.CleanUpDeskAndData();

        // 用于判断是否是重连回来的
        this.view.isFirstTimeEnter = this.view.isFirstTimeEnter == null;
        if (this.model.curBetStatus == BullBetStatus.StartBet)
        {
            this.view.SetWaitForNextRoundVisible(false);
            this.view.ShowClock(this.model.statusLeftTime, 1, true);

            let goldNum = Math.floor(Global.PlayerInfo.PlayerCurrency.Gold/100);
            let myBetTotal = 0;
            for(let i = 0; i < 4; i++)
            {
                myBetTotal += this.model.myBetInfo[i];
            }
            this.view.UpdateBetNumBtns(goldNum, this.model.maxMutiple, this.model.banker, myBetTotal/100); 
            this.view.SetBetAreaClickEnabled(true);
            this.view.UpdateBetAreaView(this.model.allBetInfo, this.model.myBetInfo, this.model.godBet);
            this.view.playerGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold, false);
        }
        else if (this.model.curBetStatus == BullBetStatus.StopBet)
        {
            this.view.EnableBetNumBtns(false);
            this.view.SetBetAreaClickEnabled(false);
            this.view.UpdateBetAreaView(this.model.allBetInfo, this.model.myBetInfo, this.model.godBet);
            this.view.SetWaitForNextRoundVisible(this.view.isFirstTimeEnter);
            this.view.playerGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold, false);
        }
        else if (this.model.curBetStatus == BullBetStatus.Deal)
        {
            if(Global.showLog == true)
            {
                cc.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                cc.log("檢查錯誤，重新進入游戲是否發現多發了一次牌");
            }
            

            this.view.EnableBetNumBtns(false);
            this.view.SetBetAreaClickEnabled(false);
            this.view.UpdateBetAreaView(this.model.allBetInfo, this.model.myBetInfo, this.model.godBet);
            this.view.SetWaitForNextRoundVisible(this.view.isFirstTimeEnter);
            this.view.EnterGameDuringDeal(this.model.singleAreaArr, this.model.seatPlayers, this.model.winResultArr, this.model.allBetInfo, this.model.myBetInfo, this.model.statusLeftTime);
            
            if (!this.view.isFirstTimeEnter)
            {
                let myBetTotal = 0;
                for (let i = 0;  i < 4; i++)
                {
                    myBetTotal += this.model.myBetInfo[i];
                }
                if (myBetTotal == 0)
                {
                    this.view.playerGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold, false);
                }
            }
        }
        else if (this.model.curBetStatus == BullBetStatus.Finish)
        {
            this.view.SetWaitForNextRoundVisible(this.view.isFirstTimeEnter);
            this.view.EnableBetNumBtns(false);
            this.view.SetBetAreaClickEnabled(false);
            this.view.playerGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold, false);
        }

        this.view.UpdateSeatView(this.model.seatPlayers);
        this.view.UpdateBankerView(this.model.banker);
        this.view.ShowPanelAfterGetData(true);
        this.model.BullReqBankerList();
    }

    public BullStatusChange()
    {
        if (this.model.curBetStatus == BullBetStatus.StartBet)
        {
            //有个重连回来上局牌不清BUG很难重现，这里再清一次
            this.view.CleanUpDeskAndData();
            this.view.StartNewRound(this.model.statusLeftTime, this.model.maxMutiple, this.model.banker);
        }
        else if (this.model.curBetStatus == BullBetStatus.StopBet)
        {
            this.view.StopBet();
        }
        else if (this.model.curBetStatus == BullBetStatus.Deal)
        {
            this.view.Deal();
        }
        else if (this.model.curBetStatus == BullBetStatus.Finish)
        {
            if (this.model.roundResultCache != null)
            {
                this.model.trendList.push(this.model.roundResultCache);
                this.model.roundResultCache = null;
            }
            if (this.model.isMePlayed)
            {
                AudioManager.GetInstance().BGMPlay(BullConfig.Music.SoundBgm);

                this.ShowSettlementView(this.model.settlementRoleInfo, this.model.statusLeftTime);
            }

            if (this.viewTrend && this.viewTrend.isShow)
            {
                this.viewTrend.UpdateResultTrend(this.model.trendList);
            }

            this.view.RoundFinish(this.model.statusLeftTime);
            this.model.nextRoundClean();
        }
    }

    public BullPlayerBet(param:any)
    {
        let bullPlayerBetData = param as BullPlayerBetData;
        if (bullPlayerBetData.allPlayerBetData.length > 0)
        {
            this.view.BullPlayerBet(7, bullPlayerBetData.allPlayerBetData);
        }

        if (bullPlayerBetData.seatBetData.length > 0)
        {
            bullPlayerBetData.seatBetData.forEach(element => {
                this.view.BullPlayerBet(element.seatIndex, element.betGold)
            });  
        }
    }

    public BullDeal()
    {
        this.view.StartDeal(this.model.singleAreaArr, this.model.seatPlayers, this.model.winResultArr, this.model.allBetInfo, this.model.myBetInfo);
    }

    public BullBankListRes()
    {
        if (this.view!=null && this.view.isShow)
        {
            this.view.UpdateBullBankList(this.model.reqToBeBankerList, this.model.banker);
        }

        if (this.viewBankerList && this.viewBankerList.isShow)
        {
            this.viewBankerList.UpdateBullBankList(this.model.reqToBeBankerList, this.model.banker);
        }
    }

    public BullReqBankerStatusChange(param:any)
    {
        this.view.ReqBankerStatusChange(param);

        if (this.viewBankerList && this.viewBankerList.isShow)
        {
            this.viewBankerList.ReqBankerStatusChange(param);
        }
    }

    public UpdateBankerView()
    {
        if (this.view ==null || this.view.isShow==false) return;

        this.view.UpdateBankerView(this.model.banker);
    }

    public UpdateSeatView()
    {
        this.view.UpdateSeatView(this.model.seatPlayers);
    }

    public BullInitSmallGame()
    {
        let smallGameData = new SmallGameData();
        smallGameData.SetGameType(GameTypeMgr.Config.Bull.gameType);
        smallGameData.SetEnterMsgID(BaiRenNiuNiuMsgDefine.MSG_GAME_LOGIN_BAI_REN_NIU);
        smallGameData.SetExitMsgID(BaiRenNiuNiuMsgDefine.MSG_LEAVE_REQ);
        smallGameData.SetEnterFunc((playInfo:any)=>{
            this.model.SaveGameInfo(playInfo);
            this.OpenBullView();
        })
        smallGameData.SetExitFunc(() => {
            this.ExitFunc();
        });
        smallGameData.SetCurrencyUpdateFunc(isRefresh => {
            if (this.view!=null && this.view.isShow)
            {
                if (isRefresh == false)
                    return;

                this.view.playerGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold, false);
                if (this.model.curBetStatus == BullBetStatus.StartBet)
                {
                    let goldNum = Math.floor(Global.PlayerInfo.PlayerCurrency.Gold/100);
                    let myBetTotal = 0;
                    for(let i = 0; i < 4; i++)
                    {
                        myBetTotal += this.model.myBetInfo[i];
                    }
                    this.view.UpdateBetNumBtns(goldNum, this.model.maxMutiple, this.model.banker, myBetTotal/100);
                }

                for (let k = 0; k < this.model.seatPlayers.length; k++)
                {
                    let seatInfo = this.model.seatPlayers[k];
                    if (seatInfo.member.playerId == Global.PlayerInfo.playerId)
                    {
                        let currentMoney = Global.PlayerInfo.PlayerCurrency.Gold;
                        this.view.SeatGoldTextDic["SeatGoldText"+seatInfo.index].string = Util.formatGoldText(currentMoney, false);
                        this.model.seatPlayers[k].member.gold = currentMoney.toString();
                        break;
                    }
                }
            }
        });
        this.SendMessage(MessageNames.InitSmallGame, smallGameData);
    }

    public OpenBullView()
    {
        if(this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewBull) as ViewBull;

            this.view.SetOnClick("BtnBack", (btn, data)=>{
                this.OnClickBtnBack();
            })

            // 注册点击下注区域事件
            for (let i = 1; i <= 4; i++)
            {
                this.view.SetOnClick("BtnBet"+i, ()=>{
                    this.OnBtnBetClicked(i);
                })
            }
            
            // 注册点击玩家事件
            // for (let i = 0; i <= 5; i++)
            // {
            //     this.view.SetOnClick("BtnPlayer"+i, ()=>{
            //         let seatData = this.model.seatPlayers[i];
            //         if (seatData !=null && seatData != undefined)
            //         {
            //             if (seatData.member == null) return;

            //             let InfoShowPoint = this.view.InfoShowPointDic["InfoShowPoint"+i];
            //             let datas = new  ViewRoleNodeSlotData();
                     
            //             datas.name = seatData.member.userName;
            //             datas.location = seatData.member.province+seatData.member.city;
            //             datas.gold = seatData.member.gold;
            //             datas.head =  seatData.member.headImageUrl;
            //             datas.headBox = seatData.member.headbox;
                
            //             datas.slot = InfoShowPoint;
            //             datas.slotParent = InfoShowPoint.parent;

            //             this.SendMessage(MessageNames.OpenRoleInfoBySlot, datas);
            //         }
            //     })
            // }

            //注册点击换筹码事件
            for (let i = 1; i <= 5; i++)
            {
                this.view.SetOnClick("BtnBetNum"+i, ()=>{
                    this.view.BetNumSelect(i);
                })
            }

            //注册点击上庄列表按钮事件
            this.view.SetOnClick("BtnReqBankerList", ()=>{
                this.ShowBullBankerList();
                this.model.BullReqBankerList();
            })

            this.view.SetOnClick("BtnQuitBankerList", ()=>{
                this.ShowBullBankerList();
                this.model.BullReqBankerList();
            })

            //胜负走势按钮
            this.view.SetOnClick("BtnTrend", ()=>{
                this.ShowBullTrend();
            })

            //玩家列表按钮
            this.view.SetOnClick("Observe",()=>{
                this.SendMessage(MessageNames.OpenSmallGameRank, BaiRenNiuNiuMsgDefine.MSG_COMMON_RANK_LIST);
            })

            //充值按钮
            this.view.SetOnClick("BtnRecharge", ()=>{
                this.SendMessage(MessageNames.OpenPay);
            })

            //规则按钮
            this.view.SetOnClick("BtnHelp", ()=>{
                this.SendMessage(MessageNames.OpenGameRule,{ gameType: GameTypeMgr.Config.Bull, callBack: null });
            })
        }

        this.view.SetPlayId(this.model.playInfo.playId);
        this.view.Show(()=>{
            this.SendMessage(MessageNames.EnterSmallGameFinish,GameTypeMgr.Config.Bull.gameType);
            this.view.UpdatePlayerInfoView();
        });
    }

    public OnClickBtnBack()
    {
        let myBetTotal = 0;
        for (let i = 0; i < 4; i++)
        {
            myBetTotal += this.model.myBetInfo[i];
        }
        if (myBetTotal > 0)
        {
            Dialog.ShowWithYesNoContent(DialogType.Normal, "确  认", ConstStr.ExitBull, TIPS.YES, TIPS.NO,()=>{
                this.Exit();
            }, null);
            return;
        }
        
        if (this.model.banker.playerId == Global.PlayerInfo.playerId)
        {
            Dialog.ShowWithYesNoContent(DialogType.Normal, "确  认", ConstStr.ExitInBanker, TIPS.YES, TIPS.NO,()=>{
                this.Exit();
            }, null);
            return;
        }

        let hasReqBanker = false;
        for (let k = 0; k < this.model.reqToBeBankerList.length; k++)
        {
            if (this.model.reqToBeBankerList[k].playerId == Global.PlayerInfo.playerId)
            {
                hasReqBanker = true;
                break;
            }
        }
        if (hasReqBanker)
        {
            Dialog.ShowWithYesNoContent(DialogType.Normal, "确  认", ConstStr.ExitInReqBanker, TIPS.YES, TIPS.NO,()=>{
                this.Exit();
            }, null);
            return;
        }

        this.Exit();
    }

    //黑红梅方四个框框的点击投注事件
    //黑红梅方四个框的index 值 1.黑桃，2，红桃 3，梅花 4，方块
    public OnBtnBetClicked(index:number)
    {
        if (this.model.curBetStatus != BullBetStatus.StartBet)
            return;

        if (this.model.IsBanker(Global.PlayerInfo.playerId))
            return;

        if (this.model.baseLimit > Global.PlayerInfo.PlayerCurrency.Gold)
        {
            let limitGold = this.model.baseLimit/100;
            Toast.Show("需要"+limitGold+"金币才可以游戏，您的金币余额不足")
            return;
        }

        let curIndex = this.view.selectBetNumIndex;
        if (curIndex <= 0)
        {
            Toast.Show("已达下注上限");
            return;
        }

        let coins = BullConfig.ConstNiuNiu.GoldPerBet;
        let coin = coins[curIndex];

        //检测是否达到下注上限
        let myPreBetTotal = 0;
        let allPreBetTotal = 0;
        for (let i = 1; i <= 4; i++)
        {
            myPreBetTotal += this.model.myBetInfo[i-1];
            allPreBetTotal += this.model.allBetInfo[i-1];
        }

        if ((myPreBetTotal+coin*100)>this.model.betCoinLimit || (allPreBetTotal+coin*100)>this.model.roundBetCoinLimit)
        {
            Toast.Show("下注达到上限");
            return;
        }

        let fromNode = this.view.BtnBetNumDic["BtnBetNum"+curIndex];
        let toNode = this.view.BetAreaDic["BetArea"+index];
        let objCoin = this.view.CreateCoin(this.view.selectBetNumIndex);
        this.view.InsertToChipSlot(index, objCoin);
        this.view.ChipFly(objCoin, fromNode, toNode, 0, null, true, 1.2, ()=>{
            this.view.ChipScaleTween(objCoin, 0.2, 1);
        });

        //更新下注金额
        let seatMember = this.model.seatPlayers[0];
        if (seatMember!=null && seatMember.index==0 && seatMember.member!=null && seatMember.member.playerId==Global.PlayerInfo.playerId)
        {
            if (!this.model.godBet[index-1])
            {
                this.model.godBet[index-1] = true;
                this.view.FlyXingXing(index-1);
            }
        }

        //下注成功后更新自己的下注总额
        this.model.myBetInfo[index-1] += coin*100;
        this.model.myBetNotConfirm[index-1].push(coin*100);
        let curAllBetTotal = Number(this.view.TextAllBetGoldDic["TextAllBetGold"+index].string) || 0;
        let allBetTotal = curAllBetTotal*100 + coin*100;
        let myLeftGold = Number(Global.PlayerInfo.PlayerCurrency.Gold) - coin*100;
        this.view.SetBetText(index, this.model.myBetInfo, allBetTotal, this.model.banker.playerId, this.model.maxMutiple, myLeftGold);
        this.view.playerGold.string = Util.formatGoldText(myLeftGold, false);

        //自己投注成功的回调
        this.model.BullBetReq(index, coin*100, 
        ()=>
        {
            this.model.myBetNotConfirm[index-1].shift();
            this.view.playerGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold, false);

            if (this.model.mySeatIndex != -1)
            {
                let betData = [0,0,0,0];
                betData[index-1] = coin*100;
                let myBetSeatData = new SeatBetData();
                myBetSeatData.seatIndex = this.model.mySeatIndex;
                myBetSeatData.betGold = betData;
                this.view.BullMySeatBet(myBetSeatData);
            }
        },
        ()=>
        {
            let failBetNum = this.model.myBetNotConfirm[index-1].shift();
            this.model.myBetInfo[index-1] -= failBetNum;
            let indexAllBet = this.model.allBetInfo[index-1];
            let myLeftGold = Global.PlayerInfo.PlayerCurrency.Gold;
            this.view.SetBetText(index, this.model.myBetInfo, indexAllBet, this.model.banker.playerId, this.model.maxMutiple, myLeftGold);
            this.view.playerGold.string = Util.formatGoldText(myLeftGold, false);

            let myBetTotal = 0;
            for (let i = 0; i < 4; i++)
            {
                myBetTotal += this.model.myBetInfo[i];
            }
            if (myBetTotal < BullConfig.ConstNiuNiu.HeavyBet)
            {
                AudioManager.GetInstance().BGMPlay(BullConfig.Music.SoundBgm);
            }
        });
    }

    public ExitFunc()
    {
        this.SendMessage(MessageNames.HideRoleInfo);
        this.view.ExitBull();
        this.view.Hide();
        TimerManager.GetInstance().ClearAllButKeepLive();
    }

    public Exit()
    {
        this.SendMessage(MessageNames.ExitSmallGame);
    }

    public ShowSettlementView(settlementRoleInfo, statusLeftTime)
    {
        if (this.viewSettlement == null)
        {
            this.viewSettlement = this.GetView(ViewNames.ViewBullSettlement) as ViewBullSettlement;

            this.viewSettlement.SetOnClick("SettleContinueBtn", ()=>{
                this.viewSettlement.Hide();
            })
        }

        this.viewSettlement.Show(()=>{
            this.viewSettlement.UpdateView(settlementRoleInfo, statusLeftTime);
        })
    }

    public ShowBullTrend()
    {
        if (this.viewTrend == null)
        {
            this.viewTrend = this.GetView(ViewNames.ViewBullTrend) as ViewBullTrend;

            this.viewTrend.SetOnClick("BtnClose", ()=>{
                this.viewTrend.Hide();
            });
        }

        this.viewTrend.Show(()=>{
            this.viewTrend.UpdateResultTrend(this.model.trendList);
        });
    }

    public ShowBullBankerList()
    {
        if (this.viewBankerList == null)
        {
            this.viewBankerList = this.GetView(ViewNames.ViewBullBankerList) as ViewBullBankerList;

            this.viewBankerList.SetOnClick("BtnClose", ()=>{
                this.viewBankerList.Hide();
            });

            this.viewBankerList.SetOnClick("BtnReqBanker", ()=>{
                this.viewBankerList.BtnReqBanker.active = false;
                this.viewBankerList.BtnReqBankerGray.active = true;
                this.model.BullReqBanker();
            })

            this.viewBankerList.SetOnClick("BtnQuitBanker", ()=>{
                this.viewBankerList.BtnQuitBanker.active = false;
                this.viewBankerList.BtnQuitBankerGray.active = true;
                this.model.BullReqCancelBanker();
            })
        }

        this.viewBankerList.Show(()=>{
            this.viewBankerList.InitView();
            this.viewBankerList.UpdateBullBankList(this.model.reqToBeBankerList, this.model.banker);
        });
    }
}

import Controller from "../../MVCFramework/Controller";
import ViewYaoYaoLe from "./ViewYaoYaoLe";
import MessageNames from "../../Modules/MessageNames";
import ModelYaoYaoLe from "./ModelYaoYaoLe";
import { ViewNames, ModelNames } from "../../Modules/MVCRegister";
import MessageNamesYaoYaoLe from "../KuaiSan/MessageNamesYaoYaoLe";
import SmallGameData from "../../Modules/Models/SmallGameData";
import Dialog, { DialogType } from "../../Tools/Dialog";
import ConstStr from "../../Global/ConstStr";
import TIPS from "../../Global/Tips";
import { YaoYaoLeConfig } from "./YaoYaoLeConfig";
import Global from "../../Global/Global";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import { YaoyapleMsgDefine } from "../../Protos/MessageDefine_YaoYaoLe";
import TimerManager from "../../Components/TimerManager";
import { PlayInfo } from "../../Protos/HallData";
import Util from "../../Tools/Util";
import MessageCenter from "../../MVCFramework/MessageCenter";
import { Random } from "../../Tools/Random";
import UploadAnalytics from "../../Tools/UploadAnalytics";
import { ViewRoleInfoData, ViewRoleNodeSlotData } from "../../Modules/Views/ViewRoleInfo";
import Toast from "../../Tools/Toast";
import ccC from "../../Tools/ccC";
const { ccclass, property } = cc._decorator;

@ccclass
export default class ControllerYaoYaoLe extends Controller {
    private view: ViewYaoYaoLe;
    private model: ModelYaoYaoLe;
    public Init() {
        this.model = this.GetModel(ModelNames.ModelYaoYaoLe) as ModelYaoYaoLe;

    }
    public Clean() {

    }
    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNamesYaoYaoLe.InitYYLRoomData) {
            this.InitYYLRoomData();
        }
        else if (msg == MessageNamesYaoYaoLe.YaoYaoLeStatusChange) {
            this.YaoYaoLeStatusChange();
        }
        else if (msg == MessageNamesYaoYaoLe.YaoYaoLePlayerBet) {
            if (msgBody.allPlayerBetData.length > 0) {
                this.view.YaoYaoLePlayerBet(msgBody.allPlayerBetData, 0);
            }
            if (msgBody.seatBetData.length > 0) {
                this.view.YaoYaoLePlayerBet(msgBody.seatBetData, 0);
            }
        }
        else if (msg == MessageNamesYaoYaoLe.YaoYaoLeDeal) {
            this.YaoYaoLeDeal();
        }
        else if (msg == MessageNamesYaoYaoLe.YaoYaoLeChangeSeat) {
            this.view.UpdateSeatView(this.model.seatPlayers);
        }
        else if (msg == MessageNamesYaoYaoLe.YaoYaoLeInitSmallGame) {
            let smallGameData = new SmallGameData();
            smallGameData.SetGameType(GameTypeMgr.Config.YaoYaoLe.gameType);
            smallGameData.SetEnterMsgID(YaoyapleMsgDefine.MSG_GAME_LOGIN_YAO_YAO_LE);
            smallGameData.SetExitMsgID(YaoyapleMsgDefine.MSG_Yaoyaple_REQ_LEAVE_ROOM);
            smallGameData.SetEnterFunc((playInfo: PlayInfo) => {
                this.model.SaveGameInfo(playInfo);
                this.OpenYaoYaoLeView();
            });
            smallGameData.SetExitFunc(() => {
                this.ExitFunc();
            });
            smallGameData.SetCurrencyUpdateFunc((isRefresh: boolean) => {
                if (this.view != null && this.view.isShow == true) {
                    if (isRefresh == true) {
                        this.view.PlayerselfGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
                        if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.StartBet) {
                            let goldNum = Number(Global.PlayerInfo.PlayerCurrency.Gold) / 100;
                            this.view.UpdateBetNumBtns(goldNum);
                        }
                        for (let i = 0; i < this.model.seatPlayers.length; i++) {
                            if (this.model.seatPlayers[i].playerId == Global.PlayerInfo.playerId) {
                                let currentMoney = Number(Global.PlayerInfo.PlayerCurrency.Gold);
                                this.view.PlayerGoldTxt["PlayerGoldTxt" + this.model.seatPlayers[i].index].string = String(currentMoney / 100);
                                this.model.seatPlayers[i].gold = currentMoney;
                                break;
                            }
                        }
                    }
                }
            });
            this.SendMessage(MessageNames.InitSmallGame, smallGameData);
        }
    }

    //游戏台状态发生改变
    public YaoYaoLeStatusChange() {
        if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.PreStartBet) {
            if (Global.showLog == true)
                cc.log("YYL_" + this.model.playId);
            //有个重连回来上局牌不清BUG很难重现，这里再清一次
            this.view.CleanUpDeskAndData();
            this.view.StartNewRound();
            this.model.nextRoundClean();
        }
        else if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.StartBet) {
            this.view.StartBet(this.model.statusLeftTime);
            this.view.SetWaitForNextRoundVisible(false);
        }
        else if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.StopBet) {
            this.view.StopBet();
        }
        else if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.Deal) {
            //this.view.Deal();
        }
    }
    //服务器发牌数据
    public YaoYaoLeDeal() {
        if (Global.showLog == true)
            cc.log("服务器发牌数据");
        if (this.model.roundResultCache != null) {
            this.model.trendList.unshift(this.model.roundResultCache);
            this.model.roundResultCache = null;
        }
        this.view.StartDeal(this.model.roundResult, this.model.seatPlayers, this.model.winResultArr, this.model.allBetInfo, this.model.myBetInfo, this.model.trendList);
    }
    public OpenYaoYaoLeView() {
        if (this.view == null) {
            if (Global.showLog == true)
                cc.log("准备打开摇摇乐");
            this.view = this.GetView(ViewNames.ViewYaoYaoLe) as ViewYaoYaoLe;
            this.view.SetOnClick("BtnBackHall", () => {
                let myBetTotal = 0;
                for (let i = 0; i < 10; i++) {
                    myBetTotal = myBetTotal + this.model.myBetInfo[i];
                }
                if (myBetTotal > 0) {
                    Dialog.ShowWithYesNoContent(DialogType.Normal, "确认", ConstStr.ExitBull, TIPS.YES, TIPS.NO, () => {
                        this.Exit();
                    }, () => { });
                    return;
                }
                this.Exit();
            });
            //注册点击下注区域事件
            for (let i = 1; i < 11; i++) {
                // let us:number = i;
                this.view.SetOnClick("BetAreaBtn" + i, () => {
                    this.OnBtnBetClicked(i);
                    if (Global.showLog == true)
                        cc.log("点击第" + i + "玩家");
                });
            }
            //注册点击玩家事件
            for (let i = 1; i < 7; i++) {
                let us: number = i;
                this.view.SetOnClick("SeatHead" + i, () => {
                    let seatData = this.GetSeatDataByIndex(i);
                    if (seatData != null) {
                        let datas = new ViewRoleNodeSlotData();
                        datas.name = seatData.userName;
                        datas.gold = seatData.gold;
                        datas.head = seatData.headImageUrl;
                        datas.headBox = seatData.headBox;
                        datas.location = seatData.province + seatData.city;
                        datas.slot = this.view.InfoShowPoint["InfoShowPoint" + us];
                        datas.slotParent = this.view.InfoShowPoint["InfoShowPoint" + us].parent;
                        MessageCenter.SendMessage(MessageNames.OpenRoleInfoBySlot, datas);
                    }
                    if (Global.showLog == true)
                        cc.log("点击第" + us + "玩家");
                });
            }
            //注册点击换筹码事件
            for (let i = 1; i < 6; i++) {
                let us: number = i;
                this.view.SetOnClick("BtnBetNum" + i, () => {
                    if (Global.showLog == true)
                        cc.log("点击第" + us + "下注按钮");
                    this.view.BetNumSelect(us);
                });
            }
            //牌路走势按钮
            this.view.SetOnClick("BtnHistory", () => {
                this.view.ShowResultTrend();
            });
            this.view.SetOnClick("TrendTouchArea", () => {
                this.view.ShowResultTrend();
            });
            //在线玩家按钮
            this.view.SetOnClick("Observe", () => {
                if (Global.showLog == true)
                    cc.log("打开在线玩家列表");
                this.SendMessage(MessageNames.OpenSmallGameRank, YaoyapleMsgDefine.MSG_COMMON_RANK_LIST);
            });
            //商城充值按钮
            this.view.SetOnClick("BtnPay", () => {
                if (Global.showLog == true)
                    cc.log("打开商城充值界面");
                this.SendMessage(MessageNames.OpenPay, null);
            });
            //规则按钮
            this.view.SetOnClick("BtnGameRule", () => {
                if (Global.showLog == true)
                    cc.log("打开规则界面");
                this.SendMessage(MessageNames.OpenGameRule, { gameType: GameTypeMgr.Config.YaoYaoLe, subType: 2, callBack: null });
            });
            //点击荷官触发事件
            this.view.SetOnClick("DealerTouchArea", () => {
                if (Global.showLog == true)
                    cc.log("点击荷官");
                if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.StartBet) {
                    this.view.TouchDealer();
                }
            });
        }
        this.view.Show(() => {
            this.SendMessage(MessageNames.EnterSmallGameFinish, GameTypeMgr.Config.YaoYaoLe.gameType);
            this.UpdatePlayerInfo();
            this.view.SetPlayId(this.model.playId);
        });
    }


    //玩家进入房间初始化游戏数据
    public InitYYLRoomData() {
        //cc.log(79789789789);
        this.view.ShowPanelAfterGetData(true);
        //这里再清理一遍是为了重连回来进入这个方法时先把原来的界面整理一遍
        this.view.CleanUpDeskAndData();
        if (Global.showLog == true)
            cc.log(this.view.isBetStatus);
        this.view.Show3DPanel(false);
        this.view.UpdateResultTrend(this.model.trendList);
        //用于判断是否是重连回来的
        if (this.view.isFirstTimeEnter == null) {
            this.view.isFirstTimeEnter = true;
        }
        else {
            this.view.isFirstTimeEnter = false;
        }
        if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.PreStartBet) {
            this.view.SetWaitForNextRoundVisible(true);
            this.view.EnableBetNumBtns(false)
            this.view.SetBetAreaClickEnabled(false)
            this.view.PlayerselfGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
            this.view.firstTouch = true;
            this.view.hasOverTouch = false;
        }
        else if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.StartBet) {
            this.view.SetWaitForNextRoundVisible(false);
            this.view.ShowClock(this.model.statusLeftTime, true);
            let goldNum = Math.floor(Number((Global.PlayerInfo.PlayerCurrency.Gold) / 100));
            this.view.UpdateBetNumBtns(goldNum);
            this.view.SetBetAreaClickEnabled(true);
            this.view.UpdateBetAreaView(this.model.allBetInfo, this.model.myBetInfo, this.model.godBet);
            this.view.PlayerselfGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
        }
        else if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.StartBet) {
            this.view.EnableBetNumBtns(false);
            this.view.SetBetAreaClickEnabled(false);
            this.view.UpdateBetAreaView(this.model.allBetInfo, this.model.myBetInfo, this.model.godBet);
            this.view.SetWaitForNextRoundVisible(this.view.isFirstTimeEnter);
            this.view.PlayerselfGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
        }
        else if (this.model.curBetStatus == YaoYaoLeConfig.GameStatus.Deal) {
            this.view.EnableBetNumBtns(false);
            this.view.SetBetAreaClickEnabled(false);
            this.view.UpdateBetAreaView(this.model.allBetInfo, this.model.myBetInfo, this.model.godBet);
            this.view.SetWaitForNextRoundVisible(this.view.isFirstTimeEnter);
            if (this.view.isFirstTimeEnter == false) {
                let myBetTotal = 0;
                for (let i = 0; i < 10; i++) {
                    myBetTotal = myBetTotal + this.model.myBetInfo[i];
                }
                if (myBetTotal == 0) {
                    this.view.PlayerselfGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
                }
            }
            if (this.model.roundResultCache != null) {
                this.model.trendList.unshift(this.model.roundResultCache);
            }
            this.view.EnterGameDuringDeal(this.model.roundResult, this.model.seatPlayers, this.model.winResultArr, this.model.allBetInfo, this.model.myBetInfo, this.model.trendList, this.model.statusLeftTime);
        }
        this.view.UpdateSeatView(this.model.seatPlayers);

    }

    //接收消息
    public OnBtnBetClicked(index) {
        if (this.view.isBetStatus == false) {
            return;
        }
        if (this.model.curBetStatus != YaoYaoLeConfig.GameStatus.StartBet) {
            return;
        }
        if (this.model.baseLimit > Number(this.view.PlayerselfGold.string) * 100) {
            let limitGold = this.model.baseLimit / 100;
            Toast.Show("需要" + limitGold + "金币才可以游戏，您的金币余额不足");
            return;
        }
        let curIndex = this.view.selectBetNumIndex;
        if (curIndex <= 0) {
            Toast.Show("已达下注上限");
            return;
        }
        let coins = YaoYaoLeConfig.Const.GoldPerBet;
        let coin = coins[curIndex - 1]
        //检测是否达到下注上限
        let myPreBetTotal = 0;
        let allPreBetTotal = 0;
        for (let i = 0; i < 10; i++) {
            myPreBetTotal = myPreBetTotal + this.model.myBetInfo[i]
            allPreBetTotal = allPreBetTotal + this.model.allBetInfo[i]
        }
        if ((myPreBetTotal + coin * 100) > this.model.betCoinLimit || allPreBetTotal + coin * 100 > this.model.roundBetCoinLimit) {
            Toast.Show("下注达到上限");
            return;
        }
        let fromNode: cc.Node = this.view.BtnBetNum["BtnBetNum" + curIndex];
        let toNode: cc.Node
        toNode = this.view.BetChipArea["BetChipArea" + index];
        let objCoin = this.view.CreateCoin(this.view.selectBetNumIndex - 1);
        let normalScale = this.view.GetChipNormalScale(index);
        let maxScale = this.view.GetChipMaxScale(index);
        let chipPos = objCoin.parent.convertToNodeSpaceAR(fromNode.parent.convertToWorldSpaceAR(fromNode.position));
        let chipNewPos = toNode.convertToWorldSpaceAR(new cc.Vec2(Random.RangeFloat(-toNode.width / 2, toNode.width / 2), Random.RangeFloat(-toNode.height / 2, toNode.height / 2)));
        chipNewPos = objCoin.parent.convertToNodeSpaceAR(chipNewPos);
        this.view.ChipFly(objCoin, chipPos, chipNewPos, true, 0.1, null, true, maxScale, () => {
            this.view.ChipScaleTween(objCoin, 0.2, maxScale, normalScale);
        });
        this.view.InsertToChipSlot(index - 1, objCoin)
        //更新下注金额
        if (this.model.seatPlayers[0] != null && this.model.seatPlayers[0].index == 0 && this.model.seatPlayers[0].playerId == Global.PlayerInfo.playerId) {
            if (this.model.godBet[index - 1] == false) {
                this.model.godBet[index - 1] = true;
                this.view.FlyXingXing(index - 1);
            }
        }
        this.model.myBetInfo[index - 1] = this.model.myBetInfo[index - 1] + coin * 100;
        this.model.myBetNotConfirm[index - 1].unshift(coin * 100);
        this.model.allBetInfo[index - 1] = this.model.allBetInfo[index - 1] + coin * 100;
        let currentBetNum;
        currentBetNum = Number(this.view.BetAreaAllGold["BetAreaAllGold" + index].string);
        let allBetNum = currentBetNum * 100 + coin * 100;
        let leftGold = Number(this.view.PlayerselfGold.string) - coin;
        this.view.SetBetText(index, this.model.myBetInfo, allBetNum, leftGold * 100);
        this.view.PlayerselfGold.string = Util.formatGoldText(leftGold * 100);
        // cc.log(111111111111);  
        // cc.log(leftGold*100);   
        this.model.BetReq(index, coin * 100, () => {
            this.myselfSuccessBetCallback(index, coin, curIndex);
        }, () => {
            this.myselfFailBetCallback(index);
        });
    }

    private betTimestamp;
    private betReturnTimestamp;
    private useTime;

    public myselfSuccessBetCallback(index, coin, curIndex) {
        Util.RemoveArray(this.model.myBetNotConfirm[index - 1], 0);
        this.betReturnTimestamp = UploadAnalytics.GetMillSecondTimestamp();
        this.useTime = this.betReturnTimestamp - this.betTimestamp;
        if (this.model.mySeatIndex != -1) {
            let betData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            betData[index - 1] = coin * 100;
            let myBetSeatData = { seatIndex: this.model.mySeatIndex, betData: betData };
            this.view.YaoYaoLeMySeatBet(myBetSeatData);
        }
    }

    public myselfFailBetCallback(index) {
        if (Global.showLog == true)
            cc.log("下注失败");
        let failBetNum = Util.RemoveArray(this.model.myBetNotConfirm[index - 1], 0);
        this.model.myBetInfo[index - 1] = this.model.myBetInfo[index - 1] - failBetNum[0];
        this.model.allBetInfo[index - 1] = this.model.allBetInfo[index - 1] - failBetNum[0];
        let leftMoney = Number(this.view.PlayerselfGold.string) * 100 + failBetNum[0];
        let currentBetNum;
        currentBetNum = Number(this.view.BetAreaAllGold["BetAreaAllGold" + index].string);
        let allBetNum = currentBetNum * 100 - failBetNum[0] * 100;
        this.view.SetBetText(index, this.model.myBetInfo, allBetNum, leftMoney);
        this.view.PlayerselfGold.string = Util.formatGoldText(leftMoney);
    }
    public UpdatePlayerInfo() {
        if (this.view != null && this.view.isShow == true) {
            if (Global.showLog == true)
                cc.log("初始化玩家信息");
            this.view.PlayerselfName.string = Global.PlayerInfo.username;
            this.view.PlayerselfGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
            let headImage = this.view.playerIcon.getChildByName("HeadMask").getChildByName("Head").getComponent(cc.Sprite);
            Util.SetHeadNetIcon(headImage, Global.PlayerInfo.headImageUrl);
            let headBoxImage = this.view.playerIcon.getChildByName("HeadBox").getComponent(cc.Sprite);
            Util.SetHeadBox(headBoxImage, Global.PlayerInfo.headboxImage);
        }
    }

    public GetSeatDataByIndex(index) {
        for (let i = 0; i < this.model.seatPlayers.length; i++) {
            if (this.model.seatPlayers[i].index == index - 1) {
                let seatMoney = Number(this.view.PlayerGoldTxt["PlayerGoldTxt" + index].string)
                this.model.seatPlayers[i].gold = seatMoney * 100;
                return this.model.seatPlayers[i];
            }
        }
        if (Global.showLog == true)
            cc.log("找不到上座玩家信息在该位置：", index);
        return null;
    }
    public Exit() {
        this.SendMessage(MessageNames.ExitSmallGame);
    }
    private ExitFunc() {
        this.SendMessage(MessageNames.HideRoleInfo);
        this.view.ExitGame();
        this.view.Hide();
        TimerManager.GetInstance().ClearAllButKeepLive();
    }
}

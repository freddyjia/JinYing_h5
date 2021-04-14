import Controller from "../../MVCFramework/Controller";
import SmallGameData from "../../Modules/Models/SmallGameData";
import MessageNames from "../../Modules/MessageNames";
import { MVCRegister } from "../../Modules/MVCRegister";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import { LongHuMsgDefine } from "../../Protos/MessageDefine_LongHu";
import { PlayInfo } from "../../Protos/HallData";
import ModelRecord from "../../Modules/Models/ModelRecord";
import Global from "../../Global/Global";
import AudioManager from "../../Manager/AudioManager";
import TimerManager from "../../Components/TimerManager";
import Dialog, { DialogType } from "../../Tools/Dialog";
import Util from "../../Tools/Util";
import UploadAnalytics from "../../Tools/UploadAnalytics";
import { GMCmdMsgDefine } from "../../Protos/MessageDefine";
import ConstStr from "../../Global/ConstStr";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import TCPSession from "../../Network/Socket/TCPSession";
import Toast from "../../Tools/Toast";
import { Random } from "../../Tools/Random";
import View from "../../MVCFramework/View";
import { ViewNames } from "../../Modules/MVCRegister";

import ViewDragonVsTigerRecord from "./ViewDragonVsTigerRecord";
import ViewDragonVsTiger from "./ViewDragonVsTiger";
import { ChangeBattleStateRes, LHDRoleInfo, GameState, UserBet, IUserBet, BetArea, InitRoomDataRes, HistoryRecord } from "../../Protos/LongHuDou";
import ModelDragonVsTiger from "./ModelDragonVsTiger";
import { DragonVsTigerConfig } from "./DragonVsTigerConfig";
import ccC from "../../Tools/ccC";


export default class ControllerDragonVsTiger extends Controller {
    //龙虎界面
    private _View: ViewDragonVsTiger;
    //
    private _ViewTrendRecord: ViewDragonVsTigerRecord;

    //龙虎信息模块。
    private _Model: ModelDragonVsTiger;
    //
    private _ModelRec: ModelRecord;
    //玩家ID。
    private playerID: string;
    //初始化数据信息 。
    private myRoleInfo: LHDRoleInfo;
    //开发阶段。
    private gameInitRoomDataRes: InitRoomDataRes;
    //
    private timerIDsArray: Array<string> = [];
    //
    private dataInited: boolean;
    //接下来的钱？
    private nextGold: number;
    private requestTime: any;
    private reqCoinNumber: any;
    private chipTypeArray: Array<number> = [100, 1000, 5000, 10000, 50000];
    //
    public Init() {
        this._Model = this.GetModel("ModelDragonVsTiger") as ModelDragonVsTiger;
        this._ModelRec = this.GetModel("ModelRecord") as ModelRecord;

    }

    //消息接收
    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNames.DragonVsTigerInitSmallGame) {
            let smallGameData = new SmallGameData();
            smallGameData.SetGameType(GameTypeMgr.Config.LongHuDou.gameType);
            smallGameData.SetEnterMsgID(LongHuMsgDefine.MSG_GAME_LOGIN_LONG_HU);
            smallGameData.SetExitMsgID(LongHuMsgDefine.MSG_LONGHU_LEAVE_REQ);

            smallGameData.SetEnterFunc((playInfo: PlayInfo) => {
                if (Global.showLog == true)
                    cc.log("EnterFunc");
                this.OpenLongHu(playInfo);
            });

            smallGameData.SetExitFunc(() => {
                if (Global.showLog == true)
                    cc.log("ExitFunc");
                this.ExitLongHuGame();
            });

            smallGameData.SetCurrencyUpdateFunc((isRefresh: boolean) => {
                if (this._View != null && this._View.isShow == true) {
                    if (Global.showLog == true)
                        cc.error("充值引起的金币变化SetCurrencyUpdateFunc" + Global.PlayerInfo.PlayerCurrency.Gold);


                    //cc.error("充值引起的金币变化SetCurrencyUpdateFunc"+ Global.PlayerInfo.PlayerCurrency.Gold);

                    if (this._Model.roleInfo == null) {
                        return;
                    }
                    if (isRefresh == true) {


                        this._Model.roleInfo.gold = (Global.PlayerInfo.PlayerCurrency.Gold).toString();
                        if (Global.showLog == true)
                            cc.error("@@@@@@@@@@" + this._Model.roleInfo.gold);

                        //充值引起的金币变化
                    }
                    else {
                        if (this._Model.gameState == GameState.BetState) {
                            this.nextGold = 0;
                            this._Model.roleInfo.gold = (Global.PlayerInfo.PlayerCurrency.Gold).toString();
                        }
                        else {
                            this.nextGold = Global.PlayerInfo.PlayerCurrency.Gold;
                        }
                        if (Global.showLog == true) {
                            cc.error("########" + this.nextGold);
                            cc.error("########" + this._Model.roleInfo.gold);
                        }

                    }

                    let betNumber = this._View.UpdateViewGold(Global.PlayerInfo.PlayerCurrency.Gold);
                    if (betNumber != null) {
                        this.reqCoinNumber = betNumber * 100;
                    }
                    if (this._Model.gameState == GameState.BetState) {
                        this._View.UpdatePlayerGold(Global.PlayerInfo.PlayerCurrency.Gold);
                    }

                    //this._View.playerGold.string = Util.formatGoldText( Global.PlayerInfo.PlayerCurrency.Gold );
                }
            });

            this.SendMessage(MessageNames.InitSmallGame, smallGameData);
        }
        else if (msg == MessageNames.DragonVsTigerPushRoomInitData) {
            this.myRoleInfo = msgBody.myRoleInfo as LHDRoleInfo;
            this.gameInitRoomDataRes = msgBody as InitRoomDataRes;
            let gameHistory = msgBody.historyRecord as HistoryRecord;
            this._ModelRec.ParseLonghuData(gameHistory);

            if (this._View != null) {
                this._View.InitMyPlayerInfo(this.myRoleInfo);
                this._View.RefreshPlayerArrayList(this._Model.seatArray);
                this._View.Refresh20GameResult(this._ModelRec.list20Game);
                this._View.RefreshMyBetInfo(this._Model);
                this._View.InitlizeDesktopState(this._Model);
                this._View.TrendOK();
                this._View.RefreshMark(this._Model);
                this._View.RefreshShenSuan(this._Model);

                if (Global.PlayerInfo.PlayerCurrency.Gold > 0) {
                    this.reqCoinNumber = this.chipTypeArray[0];
                }
            }
        }
        else if (msg == MessageNames.DragonVsTigerStateChange) {
            let res: ChangeBattleStateRes = msgBody as ChangeBattleStateRes;

            this._View.DisableBetPanel(res.battleState == GameState.BetState);
            let number = this._View.DisableBetButton(res.battleState == GameState.BetState, Global.PlayerInfo.PlayerCurrency.Gold);
            this.reqCoinNumber = number;


            switch (res.battleState) {
                case GameState.WaitingStartState:
                    this._View.WaitStartState();
                    break;
                case GameState.BetState:
                    this._View.StartBettingState(res.countDown);
                    break;
                case GameState.StopBetState:
                    this._View.StopBettingState(() => {

                    });
                    break;
                case GameState.SettlementState:
                    //this._View.SettleMentWork(this._Model);
                    break;
                case GameState.WaitingNextGame:
                    this._View.TimerCountDown(res.countDown);
                    break;
            }
        }
        else if (msg == MessageNames.DragonVsTigerRoomDataChange) {
            this._View.RefreshPlayerArrayList(this._Model.seatArray);
        }
        else if (msg == MessageNames.UpdateOtherGuyBetInfo) {
            let chipByOtherArray: Array<Array<UserBet>> = msgBody;
            this.DelayShowBet(chipByOtherArray, 1);
            this._View.RefreshMyBetInfo(this._Model);
        }
        else if (msg == MessageNames.DragonVsTigerSeatPlayerBet) {
            let messgeArray = msgBody;
            let userBet: IUserBet = msgBody[1];
            let isGodBet: boolean = msgBody[2];

            let delay = Random.RangeFloat(0.1, 1);
            Util.PerformWithDelay(delay, () => {
                this._View.ShowPlayerBetChip(this._Model.roleInfo.playerId, userBet.playerId, userBet, this._Model, isGodBet);
                this._View.RefreshMyBetInfo(this._Model, isGodBet);
            }, this.timerIDsArray, false);

        }
        else if (msg == MessageNames.DTBetSuccess) {
            let betInfo = msgBody;
            let ShowPlayerBetChip: UserBet = UserBet.create();
            ShowPlayerBetChip.playerId = this._Model.roleInfo.playerId;
            ShowPlayerBetChip.gold = this._Model.roleInfo.gold;
            ShowPlayerBetChip.betArea = betInfo[0];
            ShowPlayerBetChip.chipType = betInfo[1];

            this._View.MyPlayerLocalBetAnimation(ShowPlayerBetChip);
            this._View.RefreshMyBetInfo(this._Model);
        }
        else if (msg == MessageNames.DTBetSettlement) {
            this._View.SettleMentWork(this._Model, () => {

            });

            this._ModelRec.UpdateDragVsTigerRecord(this._Model.settlementData);

            Util.PerformWithDelay(3.2, () => {

                this._View.UpdatePlayerGold(Global.PlayerInfo.PlayerCurrency.Gold);
                this._View.Refresh20GameResult(this._ModelRec.list20Game);
                this.SendMessage(MessageNames.UpdateRecord);

            }, this.timerIDsArray, false);
        }

    }

    //延迟显示筹码。
    public DelayShowBet(betList: Array<Array<UserBet>>, leftTime: number) {
        let intervalTime = 0.2;
        let intervalNum = betList.length;
        let maxTime = leftTime / intervalNum * 2;
        if (intervalNum == 1) {
            maxTime = intervalNum;
        }
        if (maxTime > intervalTime) {
            intervalTime = Random.RangeFloat(intervalTime, maxTime);
        }
        let betData = betList[0];
        Util.RemoveArray(betList, betData);
        if (betData != null)
            betData.forEach(element => {
                this._View.ShowPlayerBetChip(this._Model.roleInfo.playerId,
                    element.playerId, element, this._Model, false
                );

                // if (element.chipType == 100 || element.chipType == 1000)  
                //     AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.Sound_bet_small)
                // else
                //     AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.SoundBet1)
            });
        AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.SoundBet1)
        leftTime -= intervalTime;
        if (betList.length > 0) {
            let timerId = TimerManager.GetInstance().CallActionDelay(() => {
                this.DelayShowBet(betList, leftTime);
            }, intervalTime);
            this.timerIDsArray.push(timerId);
        }
        return;
    }

    private OpenLongHu(playInfo: PlayInfo) {
        if (this._View == null) {
            this._View = this.GetView(ViewNames.ViewDvsT) as ViewDragonVsTiger;

            this._View.SetOnClick("return", () => {
                if (this._Model.myTotalBet > 0) {
                    Dialog.ShowWithYesNoContent(DialogType.length, "提示", ConstStr.ExitLongHu, "确定", "取消", () => {
                        if (Global.showLog == true)
                            cc.error("退出-----------------");
                        this.Exit();
                    }, () => {

                    }
                    );
                }
                else {
                    this.Exit();
                }
            });

            this._View.SetOnClick("charge", () => {
                if (Global.showLog == true)
                    cc.log("打开充值界面=====");

                this.SendMessage(MessageNames.OpenPay);

            });

            this._View.SetOnClick("myplayerhead", () => {
                if (Global.showLog == true)
                    cc.log("打开我的头像界面=====");
            });

            this._View.SetOnClick("trend", () => {
                if (Global.showLog == true)
                    cc.log("打开趋势界面=====");
                let gameType = GameTypeMgr.Config.LongHuDou.gameType;
                this.SendMessage(MessageNames.OpengameRecord, gameType);
            });

            this._View.SetOnClick("tip", () => {
                if (Global.showLog == true)
                    cc.error("打开玩法提示界面=====");
                this.SendMessage(MessageNames.OpenGameRule, { gameType: GameTypeMgr.Config.LongHuDou, callBack: null });
            });

            this._View.SetOnClick("online", () => {

                if (Global.showLog == true)
                    cc.log("打开在线玩家列表界面=====");

                this.SendMessage(MessageNames.OpenSmallGameRank, LongHuMsgDefine.MSG_COMMON_RANK_LIST);
            });
            this._View.SetOnClick("myplayerhead", () => {
                if (Global.showLog == true)
                    cc.log("打开玩家信息界面=====");
            });

            this._View.SetOnClick("betOnHe", () => {
                // if(Global.showLog == true)
                //     cc.error("betOnHe");
                //測試代碼
                this.IWantBet(BetArea.DrawArea);
            });

            this._View.SetOnClick("betOnLong", () => {
                // if(Global.showLog == true)
                //     cc.error("betOnLong");

                this.IWantBet(BetArea.LongArea);

            });

            this._View.SetOnClick("betOnHu", () => {
                // if(Global.showLog == true)
                //     cc.error("betOnHu");

                this.IWantBet(BetArea.HuArea);
            });

            for (let index = 1; index <= 5; index++) {

                let val: number = index;

                this._View.SetOnClick("betC" + index, (button: cc.Button, data: any) => {
                    if (Global.showLog == true)
                        cc.log("玩家点击了====" + val);
                    this.reqCoinNumber = this.chipTypeArray[index - 1];
                    this._View.ShowingEffect(button);
                });
            }
        }
        if (Global.PlayerInfo.PlayerCurrency.Gold > 0) {
            this.reqCoinNumber = this.chipTypeArray[0];
        }
        this._View.Show(() => {

            if (Global.showLog == true)
                cc.error("%%%%%%%%%%%%%%%%%%%%%%1");
            this._View.DisableBetPanel(false);
            this._View.Reset();
            this._View.ResetAllPoker();
            this.SendMessage(MessageNames.EnterSmallGameFinish, GameTypeMgr.Config.LongHuDou.gameType);
        });
    }

    private IWantBet(betarea: BetArea) {
        // if(Global.showLog == true)
        //     cc.error("IWantBet1");
        if (this._Model.baseLimit > (new Number(Global.PlayerInfo.PlayerCurrency))) {
            Toast.Show("余额" + (this._Model.baseLimit / 100) + "以上才可以下注，请您充值");
            return;
        }

        if (this._Model.myTotalBet[betarea] + this.reqCoinNumber > this._Model.myMostAreaCoinLimit[betarea]) {
            Toast.Show(ConstStr.BetAreaLimit);
            return;
        }

        this.requestTime = UploadAnalytics.GetMillSecondTimestamp();
        // if(Global.showLog == true)
        //     cc.error("IWantBet2"+this.requestTime);

        this._Model.SendMyBet(betarea, this.reqCoinNumber, this.requestTime);
    }

    private Exit() {
        this.SendMessage(MessageNames.ExitSmallGame);
    }

    private DeleteAllTimer() {
        this.timerIDsArray.forEach((element) => {
            TimerManager.GetInstance().DeleteTimer(element);
        });
    }

    /**
     *  CloseLongHu
    */
    private ExitLongHuGame() {
        if (Global.showLog == true)
            cc.error("ExitLongHuGame-------------------------------------");
        this.SendMessage(MessageNames.HideRoleInfo);

        AudioManager.GetInstance().SoundPause(DragonVsTigerConfig.Audio.BgMusic);
        TimerManager.GetInstance().ClearAllButKeepLive();

        this.DeleteAllTimer();
        this.dataInited = false;
        this.timerIDsArray = [];
        this._View.DeleteTimer();
        this._View.Hide();
    }
}

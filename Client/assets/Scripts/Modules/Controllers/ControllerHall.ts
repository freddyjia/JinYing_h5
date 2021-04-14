import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import { ViewNames, ModelNames } from "../MVCRegister";
import ModelHall from "../Models/ModelHall";
import { GameData } from "../../Protos/HallData";
import { PlayInfo, PushAlreadyGame } from "../../Protos/GameCommon";
import Global from "../../Global/Global";
import Dialog, { DialogType } from "../../Tools/Dialog";
import ConstStr from "../../Global/ConstStr";
import Util from "../../Tools/Util";
import SmallGameData from "../Models/SmallGameData";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import ModelEnterBattle from "../Models/ModelEnterBattle";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { GameStatusInfo } from "../../Protos/Login";
import Toast from "../../Tools/Toast";
import ViewHall from "../Views/Hall/ViewHall";
import ModelHallRank from "../Models/ModelHallRank";
import ModelSafeBox from "../Models/ModelSafeBox";
import ModelPaoMaDeng from "../Models/ModelPaoMaDeng";
import TIPS from "../../Global/Tips";
import MessageCenter from "../../MVCFramework/MessageCenter";

export default class ControllerHall extends Controller {
    private view: ViewHall;
    private model: ModelHall;
    private modelSafeBox: ModelSafeBox;
    private modelEnterBattle: ModelEnterBattle;
    private modelHallRank: ModelHallRank;
    private modelPaoMaDeng: ModelPaoMaDeng;
    private smallGameDatas: { [key: string]: SmallGameData } = {};
    private currentGameType: number;

    public Init() {
        this.model = this.GetModel(ModelNames.ModelHall) as ModelHall;
        this.modelEnterBattle = this.GetModel(ModelNames.ModelEnterBattle) as ModelEnterBattle;
        this.modelHallRank = this.GetModel(ModelNames.ModelHallRank) as ModelHallRank;
        this.modelSafeBox = this.GetModel(ModelNames.ModelSafeBox) as ModelSafeBox;
        this.modelPaoMaDeng = this.GetModel(ModelNames.ModelPaoMaDeng) as ModelPaoMaDeng;
        this.GetModel(ModelNames.ModelPay);
        this.currentGameType = GameTypeMgr.Config.None.gameType;
    }

    public Clean() {

    }

    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNames.OpenViewHall) {
            this.ShowHallView();
        }
        else if (msg == MessageNames.RequeseHallData) {
            this.model.RequestHallData();
        }
        else if (msg == MessageNames.SyncPlayerInfo) {
            this.UpdatePlayerInfo();
        }
        else if (msg == MessageNames.UpdateRewardRegister) {
            this.UpdateRewardRegister();
        }
        // else if (msg == MessageNames.PushHallData)
        // {

        // }
        else if (msg == MessageNames.GameStatusResponseUpdate) {
            //小游戏流程相关
            this.GameStatusResponseUpdate(msg, msgBody);
        }
        else if (msg == MessageNames.PushMatchingResult) {
            //小游戏流程相关
            this.PushMatchingResult(msg, msgBody);
        }
        else if (msg == MessageNames.InitSmallGame) {
            //小游戏流程相关
            this.InitSmallGame(msg, msgBody);
        }
        else if (msg == MessageNames.ExitSmallGame) {
            //小游戏流程相关
            this.ExitSmallGame();
        }
        else if (msg == MessageNames.ReMatching) {
            //小游戏流程相关
            let pushMatchResult = this.modelEnterBattle.pushMatchResult;
            this.Rematching(pushMatchResult.playType, pushMatchResult.playId);
        }
        else if (msg == MessageNames.OpenSmallGameWithId) {
            //小游戏流程相关
            this.OpenSmallGameWithId(msgBody.playType, msgBody.playId);
        }
        else if (msg == MessageNames.EnterSmallGameFinish) {
            //小游戏流程相关
            let playType = msgBody as number;
            let smallGameData = this.smallGameDatas[playType];
            smallGameData.haveEnterSmallGameFinish = true;
            this.CheckAndSendEnter(playType);
        }
        else if (msg == MessageNames.UpdateAnnounceRedPoint) {
            if (this.view != null && this.view.isShow) {
                this.view.ShowAnnounceRedPoint(msgBody);
            }
        }
        else if (msg == MessageNames.UpdateReliefTimes) {
            if (this.view != null)
                this.view.UpdateReliefTimes(this.model.allLeftGold);
        }
        else if (msg == MessageNames.GoldUpdate) {
            if (this.currentGameType != GameTypeMgr.Config.None.gameType) {
                this.smallGameDatas[this.currentGameType].currencyUpdateFunc(msgBody);
            }
        }
        else if (msg == MessageNames.SyncCurrencyRes) {
            if (this.view != null) {
                this.view.UpdateCurrency();
            }
        }
        else if (msg == MessageNames.UpdateHallSafeBoxGold) {
            this.view.UpdateSafeBoxGold(msgBody);
        }
        else if (msg == MessageNames.ReconnectSocketSuccess) {
            this.modelSafeBox.RequestGetSafeBoxInfo();
        }
        else if (msg == MessageNames.OpenFullScreenQRCode) {
            if (msgBody != null)
                this.view.OpenFullScreenQRCode(msgBody);
        } else if (msg == MessageNames.OpenActivityPanel) {
            this.GotoAct(msgBody)
        }
    }

    //小游戏相关------>
    private InitSmallGame(msg, msgBody) {
        cc.error("@@@@@@@@@@@ InitSmallGame")
        let smallGameData = msgBody as SmallGameData;
        if (smallGameData.gameType != null) {
            this.smallGameDatas[smallGameData.gameType] = smallGameData;
        }
    }

    private CheckAndSendEnter(playType: number) {
        // cc.error("CheckAndSendEnter");
        let smallGameData = this.smallGameDatas[playType];
        if (smallGameData.haveMatchingFinish == true && smallGameData.haveEnterSmallGameFinish == true)
            this.modelEnterBattle.SendEnter(smallGameData.enterMsgID, smallGameData.extraDataFunc);
    }

    private GameStatusResponseUpdate(msg, msgBody) {
        let gameStatus = msgBody as GameStatusInfo;
        if (gameStatus.isGameStatus == true) {
            //如果不在小游戏，就不用重连小游戏了
            if (this.currentGameType == GameTypeMgr.Config.None.gameType) {
                return;
            }
            //重连小游戏
            // let smallGameData = this.smallGameDatas[gameStatus.playType];
            // this.modelEnterBattle.SendEnter(smallGameData.enterMsgID,smallGameData.extraDataFunc);
            this.CheckAndSendEnter(gameStatus.playType);
        }
        else {
            if (this.currentGameType != GameTypeMgr.Config.None.gameType) {
                let smallGameData = this.smallGameDatas[this.currentGameType];
                this.ExitFunc(smallGameData);
                Dialog.ShowJustYesButton(DialogType.Normal, "提示", "本局游戏已经结束,返回大厅", "好的", () => { });
            }
        }
    }

    private PushMatchingResult(msg, msgBody) {
        let pushMatchResult = this.modelEnterBattle.pushMatchResult;
        if (pushMatchResult.isSuccess == true) {
            let playType = pushMatchResult.playType;
            let smallGameData = this.smallGameDatas[playType];
            smallGameData.haveMatchingFinish = true;
            this.CheckAndSendEnter(playType);
            // let smallGameData = this.smallGameDatas[playType];
            // this.modelEnterBattle.SendEnter(smallGameData.enterMsgID,smallGameData.extraDataFunc);
        }
        else {
            Dialog.ShowWithYesNoContent(DialogType.Normal, "提示", "匹配失败，是否重新匹配？", "确定", "取消", () => {
                this.Rematching(pushMatchResult.playType, pushMatchResult.playId);
            }, () => {
                this.ExitFunc(this.smallGameDatas[pushMatchResult.playType]);
            });
        }
    }

    private Rematching(playType, playId) {
        this.modelEnterBattle.RequestPlayGame(playType, playId, () => {
            //do nothing
        }, () => {
            if (playType == GameTypeMgr.Config.ZJH.gameType) {
                Toast.Show("没有找到合适的房间");
            }
            this.ExitSmallGame();
        });
    }

    private ExitFunc(smallGameData: SmallGameData) {
        this.SetCurrentGameType(GameTypeMgr.Config.None.gameType);
        smallGameData.exitFunc();
        smallGameData.haveEnterSmallGameFinish = false;
        smallGameData.haveMatchingFinish = false;
    }

    private ExitSmallGame() {
        if (this.currentGameType != GameTypeMgr.Config.None.gameType) {
            let smallGameData = this.smallGameDatas[this.currentGameType];
            this.modelEnterBattle.SendExit(smallGameData.exitMsgID, () => {
                this.ExitFunc(smallGameData);
            });
        }
    }

    public OpenSmallGameWithId(playType: number, playId: number, extra: any = null) {
        if (Global.showLog == true)
            cc.error("OpenSmallGameWithId playType  " + playType + " playId " + playId);
        let playInfo = null;
        for (let i = 0; i < this.modelEnterBattle.playInfoDic[playType].length; i++) {
            if (this.modelEnterBattle.playInfoDic[playType][i].playId == playId) {
                //cc.error("set playInfoDic  " + playId);
                playInfo = this.modelEnterBattle.playInfoDic[playType][i];
                break;
            }
        }

        if (playInfo.limit > Global.PlayerInfo.PlayerCurrency.Gold) {
            Dialog.ShowWithYesNo(Util.StringFormat(ConstStr.LessCoin, Util.formatGoldText(playInfo.limit)), () => {
                this.SendMessage(MessageNames.OpenPay);
            }, () => {

            });
        }
        else {
            let info = {
                playType: playType,
                playId: playId,
                playInfo: playInfo
            }

            if (this.smallGameDatas[playInfo.playType] == null) {
                let messageName = GameTypeMgr.GetMessageName(playInfo.playType);
                this.SendMessage(messageName, info);
            }

            let smallGameData = this.smallGameDatas[info.playType];
            if (smallGameData == null) {
                cc.error("请 playType " + info.playType + "  发送消息 MessageNames.InitSmallGame  ");
                return;
            }

            if (smallGameData.Check() == false) {
                return;
            }
            this.modelEnterBattle.RequestPlayGame(info.playType, info.playId, () => {
                this.SetCurrentGameType(info.playType);
                smallGameData.enterFunc(info);
            }, () => { });
        }
    }

    private SetCurrentGameType(gameType) {
        this.currentGameType = gameType;
        TCPNetwork.GetInstance().SetCurrentGameType(TCPSessionID.Hall, gameType);
    }

    //<-------小游戏相关

    public ShowHallView() {
        if (this.view == null) {
            this.view = this.GetView(ViewNames.ViewHall) as ViewHall;

            // 用户信息
            this.view.SetOnClick("BtnPlayerInfo", (button, data) => {
                this.SendMessage(MessageNames.OpenPlayerInfo);
            });

            // 打开GM
            this.view.SetOnClick("BtnOpenGM", (button, data) => {
                this.SendMessage(MessageNames.ShowGM);
            });

            // 打开资源界面
            this.view.SetOnClick("Gold", (button, data) => {
                this.SendMessage(MessageNames.OpenPay);
            });

            // 打开保险箱
            this.view.SetOnClick("SaveBox", (button, data) => {
                this.SendMessage(MessageNames.OpenSafeBox);
            });
            this.view.SetOnClick("BtnSaveBox", (button, data) => {
                this.SendMessage(MessageNames.OpenSafeBox);
            });

            // 救济金 
            this.view.SetOnClick("BtnJiuJiJin", (button, data) => {
                cc.log("救济金")
                this.model.ReqRelief();
            });

            // 打开邮件
            this.view.SetOnClick("BtnEmail", (button, data) => {
                this.SendMessage(MessageNames.OpenAnnounce);
            });

            // VIP返利
            this.view.SetOnClick("BtnFanLi", (button, data) => {
                this.SendMessage(MessageNames.OpenVip);
            });

            // 排行
            // this.view.SetOnClick("BtnOpenHallRank",(button, data)=>{
            //     this.SendMessage(MessageNames.OpenHallRank);
            // });

            // 客服
            this.view.SetOnClick("CustomerServiceBtn", (button, data) => {
                this.SendMessage(MessageNames.OpenCustomservice, { "hasLogin": true, "serviceType": 1 });
            });

            // 兑换
            this.view.SetOnClick("BtnWithdraw", (button, data) => {
                // if (Global.PlayerInfo.phone==null || Global.PlayerInfo.phone.length == 0)
                // {
                //     Dialog.ShowWithYesNoContent(DialogType.Normal, "兑换", "请先注册正式账号！", TIPS.YES, TIPS.NO, 
                //     ()=>{
                //         this.SendMessage(MessageNames.OpenRegisterPhone, 1);
                //     }, null);
                // }
                // else
                {
                    this.SendMessage(MessageNames.OpenWithdraw);
                }
            });
            //活动
            this.view.SetOnClick("BtnActivity", (button, data) => {

                this.SendMessage(MessageNames.OpenActivityHall);
            })

            // 推广员
            this.view.SetOnClick("BtnPromoter", (button, data) => {
                cc.log("打开推广员");
                this.SendMessage(MessageNames.OpenUIPromoter);
            });

            // 注册送金 
            this.view.SetOnClick("BtnRegister", (button, data) => {
                this.SendMessage(MessageNames.OpenRewardRegister);
            });

            // 充值
            this.view.SetOnClick("BtnRecharge", (button, data) => {
                this.SendMessage(MessageNames.OpenPay);
            });

            // 从小游戏界面返回到主界面动画
            this.view.SetOnClick("BtnBack", (button, data) => {
                this.view.PlayHallEnterAnimation();
            });

            // 点击大厅的小游戏
            this.view.ClickBtnOpen = (itemData: GameData) => {
                this.view.fCheckAndOpenSmallGameList(itemData.playType)
            };

            this.view.SetOnClick("BtnGameHelp", () => {
                if (this.view.currentSelectSubGameType == GameTypeMgr.Config.None.gameType)
                    return;

                for (const key in GameTypeMgr.Config) {
                    if (GameTypeMgr.Config[key].gameType == this.view.currentSelectSubGameType) {
                        this.SendMessage(MessageNames.OpenGameRule, { gameType: GameTypeMgr.Config[key], callBack: null });
                        break;
                    }
                }
            })

            // 快速进入游戏
            this.view.fCheckAndOpenSmallGameList = (playType: number) => {
                cc.log("小游戏", playType)
                let playInfos = this.modelEnterBattle.playInfoDic[playType];
                if (playInfos == null || playInfos == undefined || playInfos.length == 0)
                    return;

                this.modelEnterBattle.RequestRoomTypeList(() => {
                    let isDirectEnter = true;
                    let playInfos = this.modelEnterBattle.playInfoDic[playType];
                    if (playInfos != null && playInfos.length > 1)
                        isDirectEnter = false;

                    if (isDirectEnter)
                        this.OpenSmallGameWithId(playType, playInfos[0].playId);
                    else
                        this.view.FlushHallGameRooms(playInfos, isDirectEnter, playType);
                });
            };

            // 点击二级界面的房间
            this.view.fClickGameRoomItem = (playInfo: PlayInfo) => {
           
                this.OpenSmallGameWithId(playInfo.playType, playInfo.playId);
            };
        }

        this.view.Show(() => {
            this.modelSafeBox.RequestGetSafeBoxInfo();
            this.UpdatePlayerInfo();
            this.UpdateRewardRegister();
            this.view.ShowAnnounceRedPoint(this.model.hasRedPoint);
            this.RefreshWithHallData();
        });
    }

    public RefreshWithHallData() {
        if (this.model.GameData.length > 0) {
            this.view.UpdateHallGames(this.model.GameData);
        }

        if (this.model.ADData.length > 0) {
            this.view.UpdateHallAdItems(this.model.ADData);
        }
    }

    public UpdatePlayerInfo() {
        if (this.view != null && this.view.isShow) {
            this.view.UpdatePlayerInfo();
        }
    }

    public UpdateRewardRegister() {
        // if (this.view == null || this.view.isShow == false)
        //     return;

        // this.view.RewardRegisterBtn.active = this.model.hasZhuCeSong;
        // this.view.UpdateBindMark();
    }
    public GotoAct(eventType: number) {
        switch (eventType) {
            case 1:
                this.SendMessage(MessageNames.OpenPay)
                break;
            case 2:
                this.SendMessage(MessageNames.OpenPay)
                break;
            case 3:
                this.SendMessage(MessageNames.OpenPay)
                break;
            case 4:
                cc.log("buyu", this.model.GameData);
                let gameTypes: number[] = []
                // for (let i = 0; i < this.model.GameData.length; i++) {
                //     gameTypes.push(this.model.GameData[i].playType);
                // }
                // if (gameTypes.indexOf(GameTypeMgr.Config.BY.gameType) < 0) {
                //     Toast.Show("游戏尚未开启");
                // } else {
                this.view.fCheckAndOpenSmallGameList(GameTypeMgr.Config.BY.gameType);
                //  }
                break;
            case 5:
                this.SendMessage(MessageNames.OpenVip)
                break;
            case 6:
                this.SendMessage(MessageNames.OpenVip)
                break;

        }
    }
}

import TimerManager from "../../Components/TimerManager";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import Global from "../../Global/Global";
import MessageNames from "../../Modules/MessageNames";
import SmallGameData from "../../Modules/Models/SmallGameData";
import { ModelNames, ViewNames } from "../../Modules/MVCRegister";
import Controller from "../../MVCFramework/Controller";
import { PlayInfo } from "../../Protos/HallData";
import { BuYuMsgDefine } from "../../Protos/MessageDefine_BuYu";
import DatasFuncBY from "./DatasFuncBY";
import PathMgr from "./Tools/PathMgr";
import FishConfig from "./Configs/FishConfig";
import FishGame from "./Buyu/FishGame";
import MessageNamesBY from "./MessageNamesBY";
import ModelBuYu from "./ModelBuyu";
import ViewBuyu from "./ViewBuyu";
import TurretManager from "./Buyu/Coms/PaoTaiCom/TurretManager";
import AudioManager from "../../Manager/AudioManager";
import BuYuConfig from "./Configs/BuYuConfig";
import { Random } from "../../Tools/Random";
import Dialog from "../../Tools/Dialog";
import ModelEnterBattle from "../../Modules/Models/ModelEnterBattle";

export default class ControllerBuyu extends Controller {
    private model: ModelBuYu;
    private view: ViewBuyu;
    public Init() {
        this.model = this.GetModel(ModelNames.ModelBY) as ModelBuYu;
        this.InitDataFunc();
        this.InitFishGame();
    }
    private InitFishGame() {
        FishGame.Instance.Init();
    }
    private InitDataFunc() {
        DatasFuncBY.intance().fGetMSeatId = () => {
            return this.model.GetMSeatId()
        }
        DatasFuncBY.intance().fUId2UIPos = (uId: string) => {
            return this.model.UId2UIPos(uId)
        }
        DatasFuncBY.intance().fGetUIPos = (seatId: number) => {
            return this.model.GetUIPos(seatId)
        }
        DatasFuncBY.intance().fGetMUIPos = () => {
            let seatId = this.model.GetMSeatId()
            return this.model.GetUIPos(seatId)
        }
        DatasFuncBY.intance().fGetBulletSpeed = (seatId: number) => {
            return this.model.GetBulletSpeed(seatId)
        }
        DatasFuncBY.intance().fGetMSheetDelayTime = () => {
            return this.model.GetSheetDelayTime()
        }
        DatasFuncBY.intance().fSheetBuleet = (angle: number, dirX: number, dirY: number, LockFishID: number) => {
            return this.model.SheetBuleet(angle, dirX, dirY, LockFishID)
        }
        DatasFuncBY.intance().fGetLockStatus = () => {
            return this.model.GetLockStatus()
        }
        DatasFuncBY.intance().fGetAutoStatus = () => {
            return this.model.GetAutoStatus()
        }
        DatasFuncBY.intance().fGetEnterRoomIdFrom0 = () => {
            return this.model.GetEnterRoomIdFrom0()
        }
        DatasFuncBY.intance().fGetPTType = (seatUIPos: number) => {
            return TurretManager.Instance.GetPTType(seatUIPos)
        }
        DatasFuncBY.intance().fGetPTDoubleType = (seatUIPos: number) => {
            return TurretManager.Instance.GetPTDoubleType(seatUIPos)
        }
        DatasFuncBY.intance().fAddPtType = (type) => {
            this.model.ReqChangePT(type)
        }
        DatasFuncBY.intance().fSubPtType = (type) => {
            this.model.ReqChangePT(type)
        }
        DatasFuncBY.intance().fGetClientTime = () => {
            return this.model.GetClientTime()
        }
        DatasFuncBY.intance().fGetServerTime = () => {
            return this.model.GetServerTime()
        }
        DatasFuncBY.intance().fGetCountTime = () => {
            return this.model.GetCountTime();
        }


    }
    public OnReceiveMessage(msg: string, msgBody: any) {
        // console.log("捕鱼msg------", msg)
        switch (msg) {
            case MessageNames.ReMatching:
                break;
            case MessageNamesBY.ReqChangeTable:
                break;
            case MessageNamesBY.BuYuInitSmallGame:
                this.EnterInit();
                break;
            case MessageNamesBY.RoomInfo:
                FishGame.Instance.InitRoomInfo(msgBody);
                break;
            case MessageNamesBY.PlayerJoin:
                FishGame.Instance.PlayerEnterGame(msgBody)
                break;
            case MessageNamesBY.PlayerLeave:
                FishGame.Instance.PlayerLeave(msgBody)
                break;
            case MessageNamesBY.SyncBullet:
                FishGame.Instance.SyncBulletHandler(msgBody)
                break;
            case MessageNamesBY.SheetBuleetBack:
                FishGame.Instance.SheetBuleetBack(msgBody);
                break;
            case MessageNamesBY.BulletBoom:
                FishGame.Instance.BulletBoomHandler(msgBody)
                break;
            case MessageNamesBY.AsycFishInfo:
                FishGame.Instance.InitAsycFish(msgBody)
                break;
            case MessageNamesBY.AppearFishInfo:
                FishGame.Instance.AppearFish(msgBody)
                break;
            case MessageNamesBY.SpecialDead:
                FishGame.Instance.SpecialDeadBack(msgBody);
                break;
            case MessageNamesBY.BYToushScreen:
                //请求发射子弹
                FishGame.Instance.ReqShoot(msgBody);
                break;
            case MessageNamesBY.FishBossTip:
                FishGame.Instance.FishBossTip(msgBody)
                break;
            case MessageNamesBY.PTUpDownBack:
                FishGame.Instance.PTUpDownBack(msgBody)
                break;
            case MessageNamesBY.ChangeTable:

                let modelEnterBattle = this.GetModel(ModelNames.ModelEnterBattle) as ModelEnterBattle;
                let index = this.model.GetEnterRoomIdFrom0() - 1;
                cc.log("房间", index, modelEnterBattle.playInfoDic[GameTypeMgr.Config.BY.gameType])
                let limit = modelEnterBattle.playInfoDic[GameTypeMgr.Config.BY.gameType][index].limit;
                if (Global.PlayerInfo.PlayerCurrency.Gold < limit[0]) {
                    Dialog.ShowWithYesNo("您的金币数量低于了最低限制，是否充值", () => {
                        this.model.SendMessage(MessageNames.OpenPay);
                    }, null)
                } else {
                    FishGame.Instance.ResetScence();
                    this.SendMessage(MessageNames.ReMatching)
                }
                break;
            case MessageNamesBY.FishBtnAutoClick:

                this.model.AutoStatusChange(false);
                this.view.ShowLockFish(false);
                break;
            case MessageNamesBY.FishBtnLockClick:
                this.model.LockStatusChange(false);
                this.view.ShowAutoSheet(false)
                break;

        }
    }
    private EnterInit() {
        let smallGameData = new SmallGameData();
        smallGameData.SetGameType(GameTypeMgr.Config.BY.gameType);
        smallGameData.SetEnterMsgID(BuYuMsgDefine.MSG_BuYu_REQ_ROOM_INFO, () => {
            return this.model.GetRoomInfo()
        });
        smallGameData.SetExitMsgID(BuYuMsgDefine.MSG_BuYu_REQ_LEAVE_ROOM);
        smallGameData.SetEnterFunc((playInfo: PlayInfo) => {
            this.model.SetRoomID(playInfo.playId)
            this.OpenBY();
        });
        smallGameData.SetExitFunc(() => {
            this.ExitFunc();
        });
        smallGameData.SetCurrencyUpdateFunc((isRefresh: boolean) => {
            if (this.view != null && this.view.isShow == true) {
                if (isRefresh == true) {
                    //充值引起的金币变化
                    this.model.PaySucc()
                } else {

                }
            }
        });
        if (!FishConfig.useTestModel) {
            this.SendMessage(MessageNames.InitSmallGame, smallGameData);
        }
    }
    private OpenBY() {
        PathMgr.intence().Init((succ: boolean) => {
            if (succ) {
                this._CreateView();
            }
        })
    }
    private _CreateView() {
        if (!this.view) {
            this.view = this.GetView(ViewNames.ViewBY) as ViewBuyu;
            this.AddBtnSEvent();
            let random = Random.RangeInt(1, 3)
            let bgmkey = "by" + random + "bgm"
            AudioManager.GetInstance().BGMPlay(BuYuConfig.Audio[bgmkey]);
        }
        FishGame.Instance.ShowFishScene();
        this.view.Show(() => {
            if (Global.showLog == true)
                cc.log("buyu2场景加载完毕！！");
            if (!FishConfig.useTestModel) {
                this.SendMessage(MessageNames.EnterSmallGameFinish, GameTypeMgr.Config.BY.gameType);
            }
        })

    }
    private AddBtnSEvent() {
        this.view.SetOnClick("BtnAuto", (btn, data) => {
            this.model.AutoStatusChange(!this.model.isAutoStatus);
            let isAuto = this.model.GetAutoStatus();
            this.view.ShowAutoSheet(isAuto);
            if (isAuto && this.view.isShowLeft) {
                this.view.ShowOrHideLeft(false);
            }
        })
        this.view.SetOnClick("BtnLockFish", (btn, data) => {
            this.model.LockStatusChange(!this.model.isLockStatus);
            let isLock = this.model.GetLockStatus();
            this.view.ShowLockFish(isLock);
            if (isLock && this.view.isShowLeft) {
                this.view.ShowOrHideLeft(false);
            }
        })
        this.view.SetOnClick("BtnFishType", (btn, data) => {
            this.view.FishKindShow(true);
        })
        this.view.SetOnClick("Close", (btn, data) => {
            this.view.FishKindShow(false);
        })
        this.view.SetOnClick("BtnBack", (btn, data) => {

            Dialog.ShowWithYesNo("土豪哥哥，不多玩一会儿吗？", () => {
                this.SendMessage(MessageNames.ExitSmallGame);
            }, null)

        })
        this.view.SetOnClick("BtnSetting", (btn, data) => {
            this.SendMessage(MessageNames.OpenViewSetting)
        })
        this.view.SetOnClick("BtnChange", (btn, data) => {
            this.model.ReqChangeTable();
            this.StopAutoLockAndShoot();
        })
        this.view.SetOnClick("BtnHide", (btn, data) => {
            if (this.view.isShowLeft) {
                this.view.ShowOrHideLeft(false);
            } else {
                this.StopAutoLockAndShoot();
                this.view.ShowOrHideLeft(true);
            }

        })
        this.view.SetOnClick("BtnRecharge", (btn, data) => {
            this.model.SendMessage(MessageNames.OpenPay);
            this.StopAutoLockAndShoot();
        })
    }
    private ExitFunc() {
        if (this.view || this.view.isShow) {
            this.view.Exit();
        }
        FishGame.Instance.HideFishScene();
        this.model.Exit();
        TimerManager.GetInstance().ClearAllButKeepLive();
        this.view.Exit();
        this.view.Hide();
    }
    private StopAutoLockAndShoot() {
        this.model.AutoStatusChange(false);
        this.model.LockStatusChange(false);
        this.view.ShowAutoSheet(false);
        this.view.ShowLockFish(false);
    }
}
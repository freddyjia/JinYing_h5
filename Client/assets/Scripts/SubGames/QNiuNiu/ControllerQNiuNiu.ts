import Controller from "../../MVCFramework/Controller";
import ModelQNiuNiu from "./ModelQNiuNiu";
import {ModelNames} from "../../Modules/MVCRegister";
import QNNDatasFunc from "./QNNDatasFunc";
import MessageNames from "../../Modules/MessageNames";
import MessageNamesQNiuNiu from "./MessageNamesQNiuNiu";
import SmallGameData from "../../Modules/Models/SmallGameData";
import {GameTypeMgr} from "../../Global/GameTypeMgr";
import {PlayInfo} from "../../Protos/HallData";
import {FiveNiuMsgDefine} from "../../Protos/MessageDefine_FiveNiu";
import TimerManager from "../../Components/TimerManager";
import ViewQNN from "./ViewQNN";
import QNNCmdQueue from "./QNNCmdQueue";
import QNNConfig from "./QNNConfig";
import QNNClickCardData from "./QNNClickCardData";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class ControllerQNiuNiu extends Controller {


    private model: ModelQNiuNiu;
    private view: ViewQNN;
    private playInfo;


    public Init() {
        //-@type ModelZJH
        this.model = this.GetModel(ModelNames.ModelQNiuNiu) as ModelQNiuNiu;
        QNNCmdQueue.Init()

    }

    public AddCmd(msg, msgBody, view) {
        QNNCmdQueue.AddCmd(msg, msgBody, view)
    }


    public OnReceiveMessage(msg: string, msgBody: any) {

        if (msg == MessageNamesQNiuNiu.ServerOpenQNiuNiu) {
            this.OpenQNN()
        } else if (msg == MessageNamesQNiuNiu.QNNExit) {
            this.SendMessage(MessageNames.ExitSmallGame)
        } else if (msg == MessageNamesQNiuNiu.QNNInitSmallGame) {
            let smallGameData = new SmallGameData()
            smallGameData.SetGameType(GameTypeMgr.Config.Qiangzhuangniuniu.gameType)
            smallGameData.SetEnterMsgID(FiveNiuMsgDefine.MSG_GAME_LOGIN_FIVE_NIU)
            smallGameData.SetExitMsgID(FiveNiuMsgDefine.MSG_GAME_LOGOUT_FIVE_NIU)
            smallGameData.SetEnterFunc((playInfo: PlayInfo) => {
                this.playInfo = playInfo;
                this.OpenQNN();
            });
            smallGameData.SetExitFunc(() => {
                this.ExitFunc();
            });
            smallGameData.SetCurrencyUpdateFunc((isRefresh: boolean) => {
                if (this.view != null && this.view.isShow == true) {
                    if (isRefresh == true) {
                        //充值引起的金币变化
                    } else {

                    }
                }
            });

            this.SendMessage(MessageNames.InitSmallGame, smallGameData)
        } else {
            this.AddCmd(msg, msgBody, this.view)
        }

        //////一下消息只用于保存数据到model 测试数据
        if (QNNConfig.useEditorModel) {
            if (msg == MessageNamesQNiuNiu.QNNPushPlayerInfo) {
                this.model.Test_QNNPushPlayerInfo(msgBody)
            } else if (msg == MessageNamesQNiuNiu.QNNPushRoomInitData) {
                this.model.Test_QNNPushRoomInitData(msgBody)
            }
        }


    }

    private _CreateView() {
        if (!this.view) {
            this.view = this.GetView("ViewQNN") as ViewQNN
        }
        let outSide = this
        this.view.Show(() => {

            let datasFunc: QNNDatasFunc = new QNNDatasFunc();
            datasFunc.fExitRoom = () => {
                this.SendMessage(MessageNames.ExitSmallGame)
            }
            datasFunc.fGetLocalPlayerPos = () => {
                return outSide.model.GetLocalPlayerPos()
            }
            datasFunc.fGetLocalPlayerUId = () => {
                return outSide.model.GetLocalPlayerUId()
            }
            datasFunc.fReqQiangZhuang = (mutiple) => {
                outSide.model.Req_QiangZhuang(mutiple)
            }
            datasFunc.fReqTouzhu = (mutiple) => {
                outSide.model.Req_Touzhu(mutiple)
            }


            datasFunc.fIsUIdJoinCurGame = (uId: string) => {
                return outSide.model.IsUIdJoinCurGame(uId)
            }
            datasFunc.fIsReadyJoin = (pos: number) => {
                return outSide.model.IsReadyJoin(pos)
            }
            datasFunc.fIsAbsPosJoinCurGame = (pos: number) => {
                return outSide.model.IsAbsPosJoinCurGame(pos)
            }
            datasFunc.fPos2UId = (pos: number) => {
                return outSide.model.Pos2UId(pos)
            }
            datasFunc.fIsPosInRoom = (pos: number) => {
                return outSide.model.IsPosInRoom(pos)
            }
            datasFunc.fGetDealInfoByPos = (pos: number) => {
                return outSide.model.GetDealInfoByPos(pos)
            }
            datasFunc.fGetBankerId = () => {
                return outSide.model.GetBankerId()
            }
            datasFunc.fGetBankerPos = () => {
                return outSide.model.GetBankerPos()
            }
            datasFunc.fPosInGame = (pos: number) => {
                return outSide.model.PosInGame(pos)
            }
            datasFunc.fClickCard = (datas: QNNClickCardData) => {
                return outSide.model.ClickCard(datas)
            }
            datasFunc.fGetClickCardCnt = () => {
                return outSide.model.GetClickCardCnt()
            }
            datasFunc.fIsIndexCardSelect = (indexForm0: number) => {
                return outSide.model.IsIndexCardSelect(indexForm0)
            }
            datasFunc.fGetAllSizeTypeByClickSort = () => {
                return outSide.model.GetAllSizeTypeByClickSort()
            }
            datasFunc.fShouldStandCard = (pos: number, cardKey: string) => {
                return outSide.model.ShouldStandCard(pos, cardKey)
            }
            datasFunc.fHasNiu = (pos: number, cardKey: string) => {
                return outSide.model.HasNiu(pos, cardKey)
            }
            datasFunc.fReqFanpai = () => {
                return outSide.model.Req_Fanpai()
            }
            datasFunc.fGetFinalRoomStatus = () => {
                return outSide.model.GetFinalRoomStatus()
            }
            datasFunc.fGIsByStander = () => {
                return outSide.model.GIsByStander()
            }


            this.view.Construction(this.view.node, null, datasFunc)

            QNNCmdQueue.LoadRoomOk()

            if(Global.showLog == true)
                cc.log("qnn场景加载完毕！！");

            // let playId = this.playInfo || this.playInfo.playId || ""
            // UploadAnalytics.UploadAnalyticsScreen("ZJH_" + playId)

            if (!QNNConfig.useEditorModel) {
                this.SendMessage(MessageNames.EnterSmallGameFinish, GameTypeMgr.Config.Qiangzhuangniuniu.gameType);
            }


        });
    }

    public OpenQNN() {
        this._CreateView()
    }

//-退出逻辑
    public ExitFunc() {
        if (this.view || this.view.isShow) {
            this.view.Exit()
        }
        QNNCmdQueue.Clear()

        this.model.Exit()
        TimerManager.GetInstance().ClearAllButKeepLive()
        this.view.Hide()
    }

    public Clean() {
        this.view = null
        QNNCmdQueue.Clear()
    }

    public ReMatching() {
        this.model.Clean()
        this.SendMessage(MessageNames.ReMatching)
    }

}
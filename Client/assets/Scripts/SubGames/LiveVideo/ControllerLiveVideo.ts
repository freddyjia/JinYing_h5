import { GameTypeMgr } from "../../Global/GameTypeMgr";
import AudioManager from "../../Manager/AudioManager";
import MessageNames from "../../Modules/MessageNames";
import SmallGameData from "../../Modules/Models/SmallGameData";
import { ModelNames, ViewNames } from "../../Modules/MVCRegister";
import Controller from "../../MVCFramework/Controller";
import { LiveVideoMsgDefine } from "../../Protos/MessageDefine_LiveVideo";
import MessageNamesLiveVideo from "./MessageNamesLiveVideo";
import ModelLiveVideo from "./ModelLiveVideo";
import ViewLiveVideo from "./ViewLiveVideo";

export default class ControllerLiveVideo extends Controller {
    private model: ModelLiveVideo;
    private view: ViewLiveVideo;
    public Init() {
        this.model = this.GetModel(ModelNames.ModelLiveVideo) as ModelLiveVideo;

    }
    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNamesLiveVideo.LiveVideoInitSmallGame) {
            this.LiveVideoInitSmallGame()
        } else if (msg == MessageNamesLiveVideo.OpenLiveVideoShow) {
            this.ShowWebView();
        }
    }
    private LiveVideoInitSmallGame() {
        let smallGameData = new SmallGameData();
        smallGameData.SetGameType(GameTypeMgr.Config.LiveVideo.gameType);
        smallGameData.SetEnterMsgID(LiveVideoMsgDefine.MSG_LiveVideo_LOGIN_ROOM);
        smallGameData.SetExitMsgID(LiveVideoMsgDefine.MSG_LiveVideo_LEAVE_ROOM);
        smallGameData.SetEnterFunc((playInfo: any) => {
            cc.log("playerInfo", playInfo)
            this.model.reqLoginLiveVideo();
            // this.ShowHallView();
        })
        smallGameData.SetExitFunc(() => {
            this.ExitFunc();
        });
        smallGameData.SetCurrencyUpdateFunc(isRefresh => {

        });
        this.SendMessage(MessageNames.InitSmallGame, smallGameData);
    }
    private ShowWebView() {
        if (this.view == null) {
            this.view = this.GetView(ViewNames.ViewLiveVideo) as ViewLiveVideo;
        }
        this.view.SetOnClick("BtnBack", (btn, data) => {
            this.OnClickBtnBack();
        })
        this.view.Show(() => {
            this.view.SetOpacity();
            this.view.SetWebViewURL(this.model.webViewURL);
            cc.log("打开视讯面板-----1",this.model.webViewURL)
        })

    }
    public OnClickBtnBack() {
        this.SendMessage(MessageNames.ExitSmallGame);
    }
    private ExitFunc() {
        this.SendMessage(MessageNames.HideRoleInfo);
        this.view.ExitLiveVideo();
        this.view.Hide();
    }


}

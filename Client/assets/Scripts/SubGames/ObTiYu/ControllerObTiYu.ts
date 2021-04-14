import { GameTypeMgr } from "../../Global/GameTypeMgr";
import MessageNames from "../../Modules/MessageNames";
import SmallGameData from "../../Modules/Models/SmallGameData";
import { ModelNames, ViewNames } from "../../Modules/MVCRegister";
import Controller from "../../MVCFramework/Controller";
import { ObTiYuMsgDefine } from "../../Protos/MessageDefine_ObTiYu";
import MessageNamesObTiYu from "./MessageNamesObTiYu";
import ModelObTiYu from "./ModelObTiYu";
import ViewObTiYu from "./ViewObTiYu";

export default class ControllerObTiyu extends Controller {
    private view: ViewObTiYu;
    private model: ModelObTiYu;
    public Init() {
        this.model = this.GetModel(ModelNames.ModelObTiYu) as ModelObTiYu;
    }
    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNamesObTiYu.OBTiYuInitSmallGame) {
            this.ObTiYuInitSmallGame();
        } else if (msg == MessageNamesObTiYu.OpenObTiYuView) {
            this.showObTiYuView();
        }
    }
    private showObTiYuView() {
        if (this.view == null) {
            this.view = this.GetView(ViewNames.ViewObTiYu) as ViewObTiYu;
        }
        this.view.SetOnClick("BtnBack", (btn, data) => {
            this.OnClickBtnBack();
        })
        this.view.Show(() => {
            this.view.SetOpacity();

            this.view.SetWebViewURL(this.model.webViewURL);
            cc.log("打开OBTiYU-----", this.model.webViewURL)
        })
    }
    public OnClickBtnBack() {
        this.SendMessage(MessageNames.ExitSmallGame);
    }
    private ObTiYuInitSmallGame() {
        let smallGameData = new SmallGameData();
        smallGameData.SetGameType(GameTypeMgr.Config.OBTiYu.gameType);
        smallGameData.SetEnterMsgID(ObTiYuMsgDefine.MSG_ObTiYu_LOGIN_ROOM);
        smallGameData.SetExitMsgID(ObTiYuMsgDefine.MSG_ObTiYu_LEAVE_ROOM);
        smallGameData.SetEnterFunc((playInfo: any) => {
            this.model.reqLoginObTiYu();
        })
        smallGameData.SetExitFunc(() => {
            this.ExitFunc();
        });
        smallGameData.SetCurrencyUpdateFunc(isRefresh => {

        });
        this.SendMessage(MessageNames.InitSmallGame, smallGameData);
    }
    private ExitFunc() {
        this.SendMessage(MessageNames.HideRoleInfo);
        this.view.ExitObTiYu();
        this.view.Hide();
    }
}

import { GameTypeMgr } from "../../Global/GameTypeMgr";
import Global from "../../Global/Global";
import Controller from "../../MVCFramework/Controller";
import MessageCenter from "../../MVCFramework/MessageCenter";
import Model from "../../MVCFramework/Model";
import MessageNamesBY from "../../SubGames/BuYu/MessageNamesBY";
import MessageNames from "../MessageNames";
import ModelActivity from "../Models/ModelActivity";
import { ControllerNames, ModelNames, ViewNames } from "../MVCRegister";
import ViewActivity from "../Views/ViewActivity";

export default class ControllerActivity extends Controller {
    public view: ViewActivity;
    public model: ModelActivity;
    public
    //以下是可以重写的函数
    public Init() {
        this.model = this.GetModel(ModelNames.ModelActivity) as ModelActivity;

    }
    //重写函数
    public OnReceiveMessage(msg: string, msgBody: any) {
        cc.log("-----------------")
        if (msg == MessageNames.OpenActivityHall) {
            this.OpenActivityView()
        }

    }
    private OpenActivityView() {
        if (this.view == null) {
            this.view = this.GetView(ViewNames.ViewActivity) as ViewActivity;

            this.view.SetOnClick("exitBtn", () => {
                this.view.Hide();
            });

            this.view.SetOnClick("ActivityBtn1", () => {
                this.model.currentBtnIndx = 1;
                this.view.ShowCurrentActivity(1);
            })
            this.view.SetOnClick("ActivityBtn2", () => {
                this.model.currentBtnIndx = 2;
                this.view.ShowCurrentActivity(2);
            })
            this.view.SetOnClick("ActivityBtn3", () => {
                this.model.currentBtnIndx = 3;
                this.view.ShowCurrentActivity(3);
            })
            this.view.SetOnClick("ActivityBtn4", () => {
                this.model.currentBtnIndx = 4;
                this.view.ShowCurrentActivity(4);
            })
            this.view.SetOnClick("ActivityBtn5", () => {
                this.model.currentBtnIndx = 5;
                this.view.ShowCurrentActivity(5);
            })
            this.view.SetOnClick("ActivityContentBtn", (btn, data) => {
                cc.log("ActivityContentBtn", this.model.currentBtnIndx, ViewActivity.baseContentImagePath)
                let eventType = ViewActivity.baseContentImagePath[this.model.currentBtnIndx].funType;
                if (eventType == 4) {
                    this.view.Hide();
                }
                MessageCenter.SendMessage(MessageNames.OpenActivityPanel, eventType)
            })



        }
        this.view.Show(() => {
            if (Global.PlayerInfo.totalCharge > 0) {
                this.model.currentBtnIndx = 2;
                this.view.ShowCurrentActivity(2);
            } else {
                this.model.currentBtnIndx = 1;
                this.view.ShowCurrentActivity(1);
            }
        })
    }


}
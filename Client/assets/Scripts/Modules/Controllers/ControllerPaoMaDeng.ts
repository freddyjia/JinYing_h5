import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import ViewPaoMaDeng from "../Views/ViewPaoMaDeng";
import { ViewNames, ModelNames } from "../MVCRegister";
import ViewMarqueeContent from "../Views/ViewMarqueeContent";
import MessageCenter from "../../MVCFramework/MessageCenter";
// import ModelPaoMaDeng from "../Models/ModelPaoMaDeng";

export default class ControllerPaoMaDeng extends Controller {
    private view: ViewPaoMaDeng;
    private viewContent: ViewMarqueeContent;

    // private model:ModelPaoMaDeng;
    public Init() {
        // this.model = this.GetModel(ModelNames.ModelPaoMaDeng) as ModelPaoMaDeng;
    }

    public Clean() {

    }

    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNames.CheckPaoMaDeng) {
            if (this.view == null) {
                this.view = this.GetView(ViewNames.ViewPaoMaDeng) as ViewPaoMaDeng;

                this.view.SetOnClick("LabelContent", () => {
                    this.ShowMarqueeContentView(this.view.LabelContent.string);
                })
               
            }
            this.view.Show(() => {
                this.view.AddText(msgBody);
            });
        }
        else if (msg == MessageNames.OpenFullScreenQRCode) {
            if (this.view != null && this.view.isShow == true) {
                this.view.ActivePaoMaDengObj(false);
            }
        }
        else if (msg == MessageNames.HideFullScreenQRCode) {
            if (this.view != null && this.view.isShow == true) {
                this.view.ActivePaoMaDengObj(true);
            }
        }
    }


    public ShowMarqueeContentView(content: string) {
        if (this.viewContent == null) {
            this.viewContent = this.GetView(ViewNames.ViewMarqueeContent) as ViewMarqueeContent;

            this.viewContent.SetOnClick("ButtonClose", () => {
                this.viewContent.Hide();
            });

            this.viewContent.SetOnClick("LabelUrl", () => {
                cc.sys.openURL("http://cacscan.680el.com/jp/officeOrPromoter");
            })
        }

        this.viewContent.Show(() => {
            this.viewContent.UpdateView(content, "");
        });
    }
}

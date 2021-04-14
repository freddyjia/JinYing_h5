import Controller from "../../MVCFramework/Controller";
import ModelAnnounce from "../Models/ModelAnnounce";
import ViewAnnounce from "../Views/ViewAnnounce";
import { ViewNames, ModelNames } from "../MVCRegister";
import MessageNames from "../MessageNames";
import { AnnounInfo } from "../../Protos/PlayerRole";
import ViewAnnounceContent from "../Views/ViewAnnounceContent";

// 邮件Controller
export default class ControllerAnnounce extends Controller
{
    model:ModelAnnounce;
    view:ViewAnnounce;
    viewContent:ViewAnnounceContent;

    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelAnnounce) as ModelAnnounce;
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if (msg == MessageNames.OpenAnnounce)
        {
            this.OpenAnnounce();
        }
        else if (msg == MessageNames.UpdateAnnounce)
        {
            if (this.view != null)
                this.view.UpdateAnnounce(this.model.announceInfoList);
        }
    }

    public OpenAnnounce()
    {
        if (this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewAnnounce) as ViewAnnounce;

            this.view.SetOnClick("exitBtn", (button, data)=>{
                this.view.Hide();
            });

            // 阅读
            this.view.ClickItemAction = (info:AnnounInfo)=>{
                this.view.UpdateSelectItem(info);
                this.ShowContentView(info);
                this.model.ReqReadAnnounce(info.id);
            }
        }

        this.view.Show(()=>{
            this.model.ReqAnnounceInfo();
        });
    }

    private ShowContentView(info:AnnounInfo)
    {
        if (this.viewContent == null)
        {
            this.viewContent = this.GetView(ViewNames.ViewAnnounceContent) as ViewAnnounceContent;

            this.viewContent.SetOnClick("exitBtn", (button, data)=>{
                this.viewContent.Hide();
            });
        }

        this.viewContent.Show(()=>{
            this.viewContent.UpdateContent(info);
        });
    }
}

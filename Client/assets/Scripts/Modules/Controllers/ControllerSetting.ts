import Controller from "../../MVCFramework/Controller";
import ViewSetting from "../Views/ViewSetting";
import MessageNames from "../MessageNames";
import { ViewNames } from "../MVCRegister";

export default class ControllerSetting extends Controller 
{
    view:ViewSetting;

    public Init()
    {
        
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if (msg == MessageNames.OpenViewSetting)
        {
            this.OpenViewSetting();
        }
    }

    public OpenViewSetting()
    {
        if (this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewSetting) as ViewSetting;
        }

        this.view.Show(()=>{

        });
    }

}

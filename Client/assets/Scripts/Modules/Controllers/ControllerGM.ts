import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import ViewGM from "../Views/ViewGM";
import ModelGM from "../Models/ModelGM";
import { ModelNames, ViewNames } from "../MVCRegister";
import Toast from "../../Tools/Toast";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class ControllerGM extends Controller 
{
    private view:ViewGM;
    private model:ModelGM;
    public Init()
    {
        if(Global.showLog == true)
        cc.log("ControllerTest1 Init");
        this.model = this.GetModel(ModelNames.ModelGM) as ModelGM;
    }

    public Clean()
    {
        
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.ShowGM)
        {
            if(this.view == null)
            {
                this.view = this.GetView(ViewNames.ViewGM) as ViewGM;
                this.view.SetOnClick("ButtonSend",()=>{
                    this.model.Send(this.view.EditBoxGM.string);
                    Toast.Show(this.view.EditBoxGM.string);
                });

                this.view.SetOnClick("ButtonClose",()=>{
                    this.view.Hide();
                });

            }
            this.view.Show(()=>{
                
            });
        }
    }
}

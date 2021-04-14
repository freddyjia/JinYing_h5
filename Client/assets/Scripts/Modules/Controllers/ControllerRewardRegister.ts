import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import ViewRewardRegister from "../Views/ViewRewardRegister";
import { ViewNames, ModelNames } from "../MVCRegister";
import ModelHall from "../Models/ModelHall";

export default class ControllerRewardRegister extends Controller 
{
    view:ViewRewardRegister;
    hallModel:ModelHall;

    public Init()
    {
        this.hallModel = this.GetModel(ModelNames.ModelHall) as ModelHall;
    }

    public OnReceiveMessage(msg:string, msgBody:any)
    {
        if (msg == MessageNames.OpenRewardRegister)
        {
            if(this.hallModel.hasZhuCeSong){
                this.OpenRewardRegisterView();
            }
        }
        else if(msg == MessageNames.HideRewardRegister){
            if(this.view != null){
                this.view.Hide();
            }
        }
    }

    public OpenRewardRegisterView()
    {
        if (this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewRewardRegister) as ViewRewardRegister;

            this.view.SetOnClick("exitBtn", (btn, data)=>{
                this.view.Hide();
            })

            this.view.SetOnClick("registerBtn", (btn, data)=>{
                this.view.Hide();
                this.SendMessage(MessageNames.OpenRegisterPhone, 1);
            })
        }

        this.view.Show(()=>{
            
        })
    }
}
import Controller from "../../MVCFramework/Controller";
import ViewSafeBox from "../Views/ViewSafeBox";
import ModelSafeBox from "../Models/ModelSafeBox";
import { ModelNames, ViewNames } from "../MVCRegister";
import MessageNames from "../MessageNames";
import Toast from "../../Tools/Toast";


export default class ControllerSafeBox extends Controller 
{
    view:ViewSafeBox;
    model:ModelSafeBox;

    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelSafeBox) as ModelSafeBox;
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if (msg == MessageNames.OpenSafeBox)
        {
            this.OpenModelSafeBox();
        }
        else if (msg == MessageNames.SyncCurrencyRes)
        {
            if (this.view != null && this.view.isShow)
                this.view.UpdateSafeBoxGold(this.model.safeGold);
        }
    }

    public OpenModelSafeBox()
    {
        if (this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewSafeBox) as ViewSafeBox;

            this.view.SetOnClick("exitBtn", (btn, data)=>{
                this.view.Hide();
            })

            this.view.SetOnClick("resetBtn", (btn, data)=>{
                this.view.ResetToOriginalStatus();
                this.view.OnSliderValueChangeEvent();
            })

            this.view.SetOnClick("depositOptionBtn", (btn, data)=>{
                this.view.OptionBtnClick(1);
            })

            this.view.SetOnClick("withdrawalsOptionBtn", (btn, data)=>{
                this.view.OptionBtnClick(2);
            })

            this.view.SetOnClick("maxBtn", (btn, data)=>{
                this.view.SetSliderMaxValue();
            })

            this.view.SetOnClick("depositBtn", (btn, data)=>{
                let changeGold = this.view.GetChangeGold();
                if (changeGold <= 0)
                {
                    Toast.Show("请输入存取金额");
                    return;
                }
                this.model.RequestDepositGold(
                changeGold, 
                ()=>
                {
                    Toast.Show("成功存款" + changeGold/100 + "元");

                    this.view.ResetToOriginalStatus();
                    this.view.OnSliderValueChangeEvent();
                },
                ()=>
                {

                })
            })

            this.view.SetOnClick("withdrawalsBtn", (btn, data)=>{
                let changeGold = this.view.GetChangeGold();
                if (changeGold <= 0)
                {
                    Toast.Show("请输入取款金额");
                    return;
                }
                this.model.RequestWithdrawalsGold(
                changeGold, 
                ()=>
                {
                    Toast.Show("成功取款" + changeGold/100 + "元");

                    this.view.ResetToOriginalStatus();
                    this.view.OnSliderValueChangeEvent();
                },
                ()=>
                {

                })
            })
        }

        this.view.Show(()=>{
            //this.model.RequestGetSafeBoxInfo();
            this.view.UpdateSafeBoxGold(0);
        });
    }
}

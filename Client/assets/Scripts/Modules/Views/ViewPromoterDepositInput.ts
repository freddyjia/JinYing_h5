import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";

export default class ViewPromoterDepositInput extends View 
{
    TextInput:cc.Label;
    TextMax:cc.Label;

    maxNumber:number;
    sureCallback:(data)=>void

    public SetViewData(maxNumber:number, sureCallback:(data)=>void)
    {
        this.maxNumber = Math.floor(maxNumber/100);
        this.sureCallback = sureCallback;
    }

    public OnAwake()
    {
        this.TextInput = this.FindTransform("TextInput").getComponent(cc.Label);
        this.TextMax = this.FindTransform("TextMax").getComponent(cc.Label);

        let Buttons = this.FindTransform("Buttons");
        for (let i = 0; i <= 9; i++)
        {
            Util.SetClickAction(cc.find("Press"+i, Buttons).getComponent(cc.Button), ()=>{
                this.OnPressClicked(i);
            });
        };

        let PressMax = this.FindTransform("PressMax").getComponent(cc.Button);
        Util.SetClickAction(PressMax, ()=>{
            this.OnPressMaxClicked();
        });

        let PressDel = this.FindTransform("PressDel").getComponent(cc.Button);
        Util.SetClickAction(PressDel, ()=>{
            this.OnPressDelClicked();
        });

        let PressClear = this.FindTransform("PressClear").getComponent(cc.Button);
        Util.SetClickAction(PressClear, ()=>{
            this.OnPressClearClicked();
        });
    }

    public OnShowView()
    {
        this.TextInput.string = "0";
        this.TextMax.string = this.maxNumber.toString();
    }

    public OnPressClicked(number:number)
    {
        let text = this.TextInput.string;
        let num = Number(text) || 0;
        if (num <= 0)
        {
            if (number > this.maxNumber) this.TextInput.string = "0";
            else this.TextInput.string = number.toString();
        }
        else
        {
            text = text + number;
            num = Number(text);
            if (num > this.maxNumber) this.TextInput.string = this.maxNumber.toString();
            else this.TextInput.string = text;
        }
    }

    public OnPressMaxClicked()
    {
        this.TextInput.string = this.maxNumber.toString();
    }

    public OnPressDelClicked()
    {
        let text = this.TextInput.string;
        if (text.length == 1)
        {
            this.TextInput.string = "0";
        }
        else
        {
            text = text.substr(0, text.length-1);
            this.TextInput.string = text;
        }
    }

    public OnPressClearClicked()
    {
        this.TextInput.string = "0";
    }

    public GetInputNumber()
    {
        return Number(this.TextInput.string) || 0;
    }
}

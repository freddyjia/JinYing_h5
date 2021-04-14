import View from "../../MVCFramework/View";
import TimerManager from "../../Components/TimerManager";
import Util from "../../Tools/Util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewRegisterPhone extends View 
{
    Title1:cc.Node;
    Title2:cc.Node;
    InputPhoneNum:cc.EditBox;
    InputVerifyCode:cc.EditBox;
    InputNewPassword:cc.EditBox;
    VerifyNewPassword:cc.EditBox;

    VerifyWaiting:cc.Node;
    VerifyWaitingText:cc.Label;
    BtnVerify:cc.Button;
    BtnRegister:cc.Node;
    BtnModify:cc.Node;

    registerType:number;
    waitingCount:number;
    waitingTimerId:string="";
    InputPhoneNumString:string="";
    InputVerifyCodeString:string="";

    public OnAwake()
    {
        this.RemoveMaskClick();

        this.Title1 = this.FindTransform("Title1");
        this.Title2 = this.FindTransform("Title2");

        this.InputPhoneNum = this.FindTransform("InputPhoneNum").getComponent(cc.EditBox);
        this.InputVerifyCode = this.FindTransform("InputVerifyCode").getComponent(cc.EditBox);
        this.InputNewPassword = this.FindTransform("InputNewPassword").getComponent(cc.EditBox);
        this.VerifyNewPassword = this.FindTransform("VerifyNewPassword").getComponent(cc.EditBox);

        this.VerifyWaiting = this.FindTransform("VerifyWaiting");
        this.VerifyWaitingText = this.FindTransform("VerifyWaitingText").getComponent(cc.Label);

        this.BtnVerify = this.FindTransform("BtnVerify").getComponent(cc.Button);
        this.BtnRegister = this.FindTransform("BtnRegister");
        this.BtnModify = this.FindTransform("BtnModify");

        let reg = new RegExp(/^[0-9]*$/);

        Util.AddEditTextChangedEvent(this.InputPhoneNum, (text:string, box, data)=>{
            if (reg.test(text))
            {
                this.InputPhoneNumString = text;
                this.InputPhoneNum.string = text;
            }
            else
            {
                this.InputPhoneNum.string = this.InputPhoneNumString;
            }
        })

        Util.AddEditTextChangedEvent(this.InputVerifyCode, (text:string, box, data)=>{
            if (reg.test(text))
            {
                this.InputVerifyCodeString = text;
                this.InputVerifyCode.string = text;
            }
            else
            {
                this.InputVerifyCode.string = this.InputVerifyCodeString;
            }
        })
    }

    public SetViewData(registerType:number)
    {
        this.registerType = registerType;
    }

    public OnShowView()
    {
        this.BtnVerify.node.active = true;
        this.VerifyWaiting.active = false;
        TimerManager.GetInstance().DeleteTimer(this.waitingTimerId);

        let isRegister = this.registerType == 1 || this.registerType == 3;
        this.Title1.active = isRegister;
        this.BtnRegister.active = isRegister;
        this.Title2.active = !isRegister;
        this.BtnModify.active = !isRegister;

        this.InputPhoneNumString = "";
        this.InputVerifyCodeString = "";
    }

    public OnHideView()
    {
        this.BtnVerify.node.active = true;
        this.VerifyWaiting.active = false;
        TimerManager.GetInstance().DeleteTimer(this.waitingTimerId);
    }

    public OpenWaitingText()
    {
        this.BtnVerify.node.active = false;
        this.VerifyWaiting.active = true;
        this.waitingCount = 60;
        this.VerifyWaitingText.string = this.waitingCount + "S";

        TimerManager.GetInstance().DeleteTimer(this.waitingTimerId);
        this.waitingTimerId = TimerManager.GetInstance().CallActionDelay((obj)=>{
            this.waitingCount--;
            if (this.waitingCount <= 0)
            {
                this.BtnVerify.node.active = true;
                this.VerifyWaiting.active = false;
            }
            else
            {
                this.VerifyWaitingText.string = this.waitingCount + "S";
            }
        }, 1, null, 61, 1, false);
    }
}

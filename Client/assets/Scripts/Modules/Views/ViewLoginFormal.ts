import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import LocalStorageKey from "../../Global/LocalStorageKey";
import TimerManager from "../../Components/TimerManager";
import Global from "../../Global/Global";

export default class ViewLoginFormal extends View 
{
    public InputPhoneNum:cc.EditBox;
    public InputPassword:cc.EditBox;
    public InputVerify:cc.EditBox;
    private BtnRemember:cc.Button;
    private BtnVerify:cc.Button;
    private SpriteSelect:cc.Node;
    private VerifyWaiting:cc.Node;
    private VerifyWaitingText:cc.Label;
    private LabelVersion:cc.Label;
    private PhoneLoginPanel:cc.Node;

    private timerID;

    public OnAwake()
    {
        this.InputPhoneNum = this.FindTransform("InputPhoneNum").getComponent(cc.EditBox);
        this.InputPassword = this.FindTransform("InputPassword").getComponent(cc.EditBox);
        this.InputVerify = this.FindTransform("InputVerify").getComponent(cc.EditBox);

        this.BtnRemember = this.FindTransform("BtnRemember").getComponent(cc.Button);
        this.BtnVerify = this.FindTransform("BtnVerify").getComponent(cc.Button);
        this.SpriteSelect = this.FindTransform("SpriteSelect");

        this.VerifyWaiting = this.FindTransform("VerifyWaiting");
        this.VerifyWaitingText = this.FindTransform("VerifyWaitingText").getComponent(cc.Label);

        this.LabelVersion = this.FindTransform("LabelVersion").getComponent(cc.Label);

        this.PhoneLoginPanel = this.FindTransform("PhoneLoginPanel");

        Util.SetClickAction(this.BtnRemember,()=>{
            let rememberAccount = localStorage.getItem(LocalStorageKey.RememberAccount)
            
            if(rememberAccount == "1")
            {
                rememberAccount = "0";
                this.SpriteSelect.active = false;
            }
            else
            {
                rememberAccount = "1";
                this.SpriteSelect.active = true;
            }
            localStorage.setItem(LocalStorageKey.RememberAccount,rememberAccount);
        });
    }

    public RefreshEditbox()
    {
        let loginPhone = localStorage.getItem(LocalStorageKey.LoginPhone);
        let loginPassword = localStorage.getItem(LocalStorageKey.LoginPassword);
        let rememberAccount = localStorage.getItem(LocalStorageKey.RememberAccount);

        if(rememberAccount == "1")
        {
            this.InputPhoneNum.string = loginPhone;
            this.InputPassword.string = loginPassword;
            this.SpriteSelect.active = true;
        }
        else
        {
            this.InputPhoneNum.string = "";
            this.InputPassword.string = "";
            this.SpriteSelect.active = false;
        }
    }

    public OnShowView()
    {
        this.RefreshEditbox(); 
        this.ShowPhoneLoginView(false);
        this.LabelVersion.string = "Version:" + Global.gameVersion;
    }

    public OnHideView()
    {
        TimerManager.GetInstance().DeleteTimer(this.timerID);
        this.VerifyWaiting.active = false;
        this.BtnVerify.node.active = true;
    }

    public StartCountDown()
    {
        let time = 60;

        this.VerifyWaiting.active = true;
        this.BtnVerify.node.active = false;
        this.VerifyWaitingText.string = time.toString();

        this.timerID = TimerManager.GetInstance().CallActionDelay(()=>{
            time--;
            this.VerifyWaitingText.string = time.toString();
            if(time == 0)
            {
                this.VerifyWaiting.active = false;
                this.BtnVerify.node.active = true;
            }
        },1,null,60);
    }

    public ShowPhoneLoginView(show:boolean)
    {
        if (show)
        {
            let window = cc.find("Window", this.PhoneLoginPanel);
            window.scaleX = 0.8;
            window.scaleY = 0.8;
            let action = cc.sequence(cc.scaleTo(0.08,1.1),cc.scaleTo(0.08,1));
            window.runAction(action);   
        }
        this.PhoneLoginPanel.active = show;
    }
}

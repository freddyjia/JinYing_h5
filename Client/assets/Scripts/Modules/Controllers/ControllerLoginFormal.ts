import Controller from "../../MVCFramework/Controller";
import ModelLogin from "../Models/ModelLogin";
import { ModelNames, ViewNames } from "../MVCRegister";
import MessageNames from "../MessageNames";
import ViewLoginFormal from "../Views/ViewLoginFormal";
import ModelPlayerInfo from "../Models/ModelPlayerInfo";
import Global from "../../Global/Global";
import LocalStorageKey from "../../Global/LocalStorageKey";
import Toast from "../../Tools/Toast";
import TimerManager from "../../Components/TimerManager";
import OpenNetworkingUI from "../../Tools/OpenNetworkingUI";

export default class ControllerLoginFormal extends Controller 
{
    private modelLogin:ModelLogin;
    private modelPlayerInfo:ModelPlayerInfo;
    private view:ViewLoginFormal;
    public Init()
    {
        this.modelLogin = this.GetModel(ModelNames.ModelLogin) as ModelLogin;
        this.modelPlayerInfo = this.GetModel(ModelNames.ModelPlayerInfo) as ModelPlayerInfo;
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.OpenViewLoginFormal)
        {
            let autoLogin = msgBody;
            this.ShowView(autoLogin);
        }
        else if(msg == MessageNames.RegisterSucess)
        {
            this.view.RefreshEditbox();
        }
        else if (msg == MessageNames.LoginShowRegisterPhone)
        {
            if (this.view)
                this.view.ShowPhoneLoginView(true);
        }
    }

    private ShowView(autoLogin:boolean)
    {
        if(this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewLoginFormal) as ViewLoginFormal;

            this.view.SetOnClick("BtnClose",()=>{
                this.view.ShowPhoneLoginView(false);
            })

            this.view.SetOnClick("BtnLogin",()=>{
                this.modelLogin.LoginFormal(
                    this.view.InputPhoneNum.string,
                    this.view.InputPassword.string,
                    this.view.InputVerify.string
                    );
                if(localStorage.getItem(LocalStorageKey.RememberAccount) == "1")
                {
                    localStorage.setItem(LocalStorageKey.LoginPhone,this.view.InputPhoneNum.string);
                    localStorage.setItem(LocalStorageKey.LoginPassword,this.view.InputPassword.string);
                }
            });

            this.view.SetOnClick("BtnRegister",()=>{
                this.view.ShowPhoneLoginView(false);
                this.SendMessage(MessageNames.OpenRegisterPhone,3);
            });

            this.view.SetOnClick("BtnVerify",()=>{
                this.modelPlayerInfo.RequestSMSCode(this.view.InputPhoneNum.string,
                ()=>{
                    Toast.Show("请求验证码成功");
                    this.view.StartCountDown();
                },()=>{

                });
            });

            this.view.SetOnClick("BtnOneKeyLogin",()=>{
                this.modelLogin.OneKeyLogin();
            });

            this.view.SetOnClick("BtnForgetPsd",()=>{
                this.view.ShowPhoneLoginView(false);
                this.SendMessage(MessageNames.OpenRegisterPhone,2);
            });

            this.view.SetOnClick("BtnCustomerService",()=>{
                this.SendMessage(MessageNames.OpenCustomservice,{"hasLogin":false,"serviceType":1});
            });

            this.view.SetOnClick("BtnPhoneLogin", ()=>{
                this.view.ShowPhoneLoginView(true);
            });
        }

        this.view.Show(()=>{
            if(localStorage.getItem(LocalStorageKey.LoginUid).length > 0 && autoLogin == true)
            {
                OpenNetworkingUI.Show();
                TimerManager.GetInstance().CallActionDelay(()=>{
                    this.modelLogin.OneKeyLogin();
                },0.5);
            }
        });
    }

}

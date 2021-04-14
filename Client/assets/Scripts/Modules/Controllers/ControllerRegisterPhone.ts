import Controller from "../../MVCFramework/Controller";
import ViewRegisterPhone from "../Views/ViewRegisterPhone";
import ModelPlayerInfo from "../Models/ModelPlayerInfo";
import { ModelNames, ViewNames } from "../MVCRegister";
import MessageNames from "../MessageNames";
import Global from "../../Global/Global";
import Toast from "../../Tools/Toast";
import Dialog, { DialogType } from "../../Tools/Dialog";
import LocalStorageKey from "../../Global/LocalStorageKey";
import ModelLogin from "../Models/ModelLogin";
import ccC from "../../Tools/ccC";

export default class ControllerRegisterPhone extends Controller 
{
    view:ViewRegisterPhone;
    model:ModelPlayerInfo;
    modelLogin:ModelLogin;

    registerType:any; //1.大厅绑定  2.修改密码  3.登陆界面注册
    openRegisterViewFromPromoter:boolean;

    public Init()
    {
        this.openRegisterViewFromPromoter = false;

        this.model = this.GetModel(ModelNames.ModelPlayerInfo) as ModelPlayerInfo;
        this.modelLogin = this.GetModel(ModelNames.ModelLogin) as ModelLogin;
    }

    public OnReceiveMessage(msg:string, msgBody:any)
    {
        if (msg == MessageNames.OpenRegisterPhone)
        {
            this.openRegisterViewFromPromoter = false;
            this.registerType = msgBody;

            this.OpenRegisterView();
        }
        else if(msg == MessageNames.RegisterSucess)
        {
            if(this.view != null && this.view.isShow == true)
                this.view.Hide();
        }
        else if (msg == MessageNames.OpenRegisterPhoneFromPromoter)
        {
            this.openRegisterViewFromPromoter = true;
            this.registerType = 1;
            this.OpenRegisterView();
        }
    }

    public OpenRegisterView()
    {
        if (this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewRegisterPhone) as ViewRegisterPhone;

            this.view.SetOnClick("exitBtn", (btn, data)=>{
                this.view.Hide();
                this.SendMessage(MessageNames.LoginShowRegisterPhone);
            })
            
            // this.view.SetOnClick("maskBtn", (btn, data)=>{
            //     this.view.Hide();
            // })
            this.view.onHideViewCallback = ()=>{
                this.SendMessage(MessageNames.LoginShowRegisterPhone);
            };

            this.view.SetOnClick("BtnRegister", (btn, data)=>{
                this.OnConfirmClick();
            });

            this.view.SetOnClick("BtnModify", (btn, data)=>{
                this.OnConfirmClick();
            });

            this.view.SetOnClick("BtnVerify", (btn, data)=>{
                let phoneNumber = this.view.InputPhoneNum.string;
                let reg = new RegExp(/^1[34578]\d{9}$/);
                if (phoneNumber.length == 0 || reg.test(phoneNumber)==false)
                {
                    Toast.Show("请输入正确的手机号码");
                    return;
                }

                //this.view.BtnVerify.interactable = false;
                let url = "";
                this.model.RequestSMSCode(phoneNumber,
                (data:string)=>{
                    if (data == null || data.length == 0)
                    {
                        this.view.BtnVerify.interactable = true;
                        Dialog.ShowJustYesButton(DialogType.Normal, "错  误", "获取验证码出错", "确定", null);
                        return;
                    }
                    if (data == "TOKEN_FAILED")
                    {
                        this.view.BtnVerify.interactable = true;
                        return;
                    }
                    if(Global.showLog == true)
                        cc.error("datadatadatadata"  + data);
                    
                    let result = JSON.parse(data);
                    let errcode = result["errcode"];
                    if (errcode != null && errcode != 0)
                    {
                        Dialog.ShowJustYesButton(DialogType.Normal, "错  误", result["errmsg"], "确定", ()=>{
                            this.view.BtnVerify.interactable = true;
                            this.view.InputVerifyCode.string = "";
                        });
                    }
                    else
                    {
                        this.view.OpenWaitingText();
                        this.view.BtnVerify.interactable = true;
                        Toast.Show("获取验证码成功");
                    }
                },
                ()=>{

                })
            });
        }

        this.view.SetViewData(this.registerType);
        this.view.Show(()=>{

        })
    }

    public ShowGuider()
    {

    }

    public OnConfirmClick()
    {
        let phoneNo = this.view.InputPhoneNum.string;
        let checkCode = this.view.InputVerifyCode.string;
        let password = this.view.InputNewPassword.string;
        let confirmPassword = this.view.VerifyNewPassword.string;

        let reg = new RegExp(/^1[34578]\d{9}$/);
        if (phoneNo.length==0 || reg.test(phoneNo)==false)
        {
            Toast.Show("请输入正确的手机号码");
            this.view.InputPhoneNum.string = "";
            return;
        }

        if (checkCode.length==0)
        {
            Toast.Show("请输入验证码");
            return;
        }

        if (password.length == 0 || confirmPassword.length == 0)
        {
            Toast.Show("请设置密码");
            return;
        }

        if (password.length < 5 || confirmPassword.length < 5)
        {
            Toast.Show("新密码不符合规则，请重新设定");
            this.view.InputNewPassword.string = "";
            this.view.VerifyNewPassword.string = "";
            return;
        }

        if (password != confirmPassword)
        {
            Toast.Show("新密码两次输入不一致，请重新输入");
            this.view.InputNewPassword.string = "";
            this.view.VerifyNewPassword.string = "";
            return;
        }

        if (this.registerType == 1)
        {
            this.model.BindingMoblieNumeReq(phoneNo, password, confirmPassword, checkCode, ()=>{
                Global.PlayerInfo.phone = phoneNo;
                Global.PlayerInfo.password = password;
                localStorage.setItem(LocalStorageKey.LoginPhone,phoneNo);
                localStorage.setItem(LocalStorageKey.LoginPassword,password);
                this.OnBindingMoblieNumeRes();
            })
        }
        else if(this.registerType == 2)
        {
            this.modelLogin.ChangePsd(phoneNo,password,confirmPassword,checkCode,()=>{
                Toast.Show("修改密码成功！");
                localStorage.setItem(LocalStorageKey.LoginPhone,phoneNo);
                localStorage.setItem(LocalStorageKey.LoginPassword,password);
            },()=>{});
        }
        else if(this.registerType == 3)
        {
            this.modelLogin.Register(phoneNo,password,confirmPassword,checkCode,()=>{
                Toast.Show("注册成功！");
                localStorage.setItem(LocalStorageKey.LoginPhone,phoneNo);
                localStorage.setItem(LocalStorageKey.LoginPassword,password);
            },()=>{});
        }
    }

    public OnBindingMoblieNumeRes()
    {
        this.SendMessage(MessageNames.CloseRegisterPhonePanel);
        this.model.ReqGetRegisterGold();
        this.view.Hide();
        this.ShowGuider();

        this.SendMessage(MessageNames.UpdateLoginList);
        this.SendMessage(MessageNames.SyncPlayerInfo);

        if (this.openRegisterViewFromPromoter)
        {
            this.SendMessage(MessageNames.RefreshPromoterView);
        }
    }
}

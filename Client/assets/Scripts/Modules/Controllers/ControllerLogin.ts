import Global from "../../Global/Global";
import LocalStorageKey from "../../Global/LocalStorageKey";
import { FullScreenJS } from "../../JsTool/FullScreen";
import Controller from "../../MVCFramework/Controller";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import Toast from "../../Tools/Toast";
import { XTweenCurvType } from "../../Tools/XTween/Base/XTweenCurv";
import { XTweenerGroupAddMode } from "../../Tools/XTween/Base/XTweenerGroup";
import XTween from "../../Tools/XTween/XTween";
import MessageNames from "../MessageNames";
import ModelLogin from "../Models/ModelLogin";
import { ModelNames, ViewNames } from "../MVCRegister";
import ViewLogin from "../Views/ViewLogin";


export default class ControllerLogin extends Controller
{
    private fullscrenn:boolean = false;
    private view:ViewLogin;
    private model:ModelLogin;
    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelLogin) as ModelLogin;
        if(Global.isRelease == false && Global.haveAddKeyCode == false)
        {
            Global.haveAddKeyCode = true;
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,(event)=>{
                switch(event.keyCode) {
                    case cc.macro.KEY.a:
                        cc.log('--------------------------->>>>>> Press a ');
                        TCPNetwork.GetInstance().Disconnect(TCPSessionID.Hall);
                        Toast.Show("强制断线");
                        break;
                    case cc.macro.KEY.s:
                        cc.log('--------------------------->>>>>> Press s ');
                        Global.LogOut();
                        Toast.Show("强制登出");
                        break;
                }
            });
        }

    }

    public Clean()
    {

    }

    private EditorLogin(){
        cc.error("ButtonLogin");
        localStorage.setItem(LocalStorageKey.LoginIP,this.view.EditBoxIP.string);
        localStorage.setItem(LocalStorageKey.LoginPort,this.view.EditBoxPort.string);
        this.model.EditorLogin(
            this.view.EditBoxIP.string,
            this.view.EditBoxPort.string,
            this.view.EditBoxUserID.string,
            this.view.EditBoxDeviceID.string,
        );
    }

    private EditorLoginWithNewUser(){
        this.view.EditBoxUserID.string = ""
        this.EditorLogin()
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {

        if(msg == MessageNames.OpenViewLogin)
        {
            let ouside = this
            if(this.view == null)
            {
                this.view = this.GetView(ViewNames.ViewLogin) as ViewLogin;
                this.view.SetOnClick("ButtonLogin",()=>{
                    ouside.EditorLogin()
                });


                this.view.SetOnClick("ButtonNewUserLogin",()=>{
                    ouside.EditorLoginWithNewUser()
                });

                this.view.SetOnClick("BtnCustomerService",()=>{
                    cc.error("--------- 浏览器类型："+cc.sys.browserType);
                    if (this.fullscrenn == false)
                    {
                        this.fullscrenn = true;
                        FullScreenJS.launchFullScreen();
                        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                        cc.view.setDesignResolutionSize(720,1280,cc.ResolutionPolicy.FIXED_WIDTH);
                    }
                    else
                    {
                        this.fullscrenn = false;
                        FullScreenJS.cancelFullScreen();
                    }
                });
            }

            this.view.Show(()=>{

                if(localStorage.getItem(LocalStorageKey.LoginIP) == null)
                {
                    localStorage.setItem(LocalStorageKey.LoginIP,this.view.EditBoxIP.string);
                    localStorage.setItem(LocalStorageKey.LoginPort,this.view.EditBoxPort.string);
                }
                this.view.EditBoxIP.string = localStorage.getItem(LocalStorageKey.LoginIP);
                this.view.EditBoxPort.string = localStorage.getItem(LocalStorageKey.LoginPort);
                this.view.EditBoxDeviceID.string = localStorage.getItem(LocalStorageKey.Deviceid);

                let tweener1 = XTween.DoRotate(this.view.EditBoxIP.node,null,90,3,1,false,XTweenCurvType.Liner,()=>{
                    cc.error("1111");
                },0);

                let tweener2 = XTween.DoValueArray(this.view.EditBoxIP.node,(value:Array<number>)=>{
                    this.view.EditBoxIP.fontColor = new cc.Color(value[0],value[1],value[2]);
                },[0,0,0],[255,255,255],3);
                tweener2.Play();

                let group = XTween.CreateXTweenerGroup();
                group.AddTweener(tweener1,XTweenerGroupAddMode.Queue);
                group.AddTweener(tweener2,XTweenerGroupAddMode.Parallel);
                // group.AddObserverObj(this.view.EditBoxIP.node);
                group.SetFinishCallback(
                    ()=>{cc.error("222");}
                );

                let action = XTween.GetTweenerAction(1,()=>{
                    cc.error("action action action");
                });

                group.AddTweener(action,XTweenerGroupAddMode.Queue);

                let tweener3 = XTween.DoScale(this.view.EditBoxIP.node,null,new cc.Vec2(2,2),3,1,false,XTweenCurvType.Liner,()=>{
                    cc.error("333");
                },0);

                let tweener4 = XTween.DoScale(this.view.EditBoxIP.node,new cc.Vec2(2,2),new cc.Vec2(0.5,0.5),3,-1,true,XTweenCurvType.Liner,()=>{
                    cc.error("444");
                },0);

                let group2 = XTween.CreateXTweenerGroup();
                group2.AddTweener(tweener3,XTweenerGroupAddMode.Queue);
                group2.AddTweener(tweener4,XTweenerGroupAddMode.Queue);
                group2.SetFinishCallback(
                    ()=>{cc.error("55");}
                );
                group2.AddObserverObj(this.view.EditBoxIP.node);
                group.AddTweener(group2,XTweenerGroupAddMode.Queue);

            });
        }
        else if(msg == MessageNames.ReconnectSocketFail)
        {
            this.model.RefreshGateIp();
        }
        else if(msg == MessageNames.SendReConnectMsg)
        {
            this.model.SendReConnectMsg();
        }
        else if(msg == MessageNames.ReGetToken)
        {
            this.model.RefreshToken();
        }
        else if(msg == MessageNames.LegendLogin)
        {
            this.model.GetTokenTest();
            // this.model.LegendGetUserData(window["token"]);
        }
    }
}
import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import ViewCustomService from "../Views/ViewCustomService";
import { ViewNames } from "../MVCRegister";
import Toast from "../../Tools/Toast";
import { ClipboardJS } from "../../JsTool/ClipboardJS";
import Global from "../../Global/Global";
import TimerManager from "../../Components/TimerManager";

export default class ControllerCustomService extends Controller 
{
    private view:ViewCustomService;

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.OpenCustomservice)
        {
            let hasLogin = msgBody["hasLogin"];
            let serviceType = msgBody["serviceType"];
            this.ShowView(hasLogin,serviceType);
        }
    }

    private ShowView(hasLogin,serviceType)
    {
        if(this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewCustomService) as ViewCustomService;
            this.view.SetOnClick("BtnCopy",()=>{
                let success = ClipboardJS.Copy(Global.PlayerInfo.playerId);
                if(success == true)
                {
                    Toast.Show("ID复制成功!");
                    this.view.idCopySuccessLabel.active = true;
                    TimerManager.GetInstance().DeleteTimer(this.view.copyTimerid);
                    this.view.copyTimerid = TimerManager.GetInstance().CallActionDelay(()=>{
                        this.view.idCopySuccessLabel.active = false;
                    },3);
                }
                else
                {
                    Toast.Show("复制失败，请手动输入");
                }
            });

            this.view.SetOnClick("BtnTalk", ()=>{
                this.view.SetState(1);
            });

            // let node:cc.Node;
            // node.convertToWorldSpace()

            this.view.SetOnClick("Close",()=>{
                this.view.Hide();
            });
        }
        this.view.Show(()=>{
            this.view.Refresh(hasLogin,serviceType);
        });
    }

}

import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import ViewPlayerInfo from "../Views/ViewPlayerInfo";
import { ViewNames, ModelNames } from "../MVCRegister";
import ModelPlayerInfo from "../Models/ModelPlayerInfo";
import Toast from "../../Tools/Toast";
import Global from "../../Global/Global";
import Util from "../../Tools/Util";
import ViewChangeHead from "../Views/ViewChangeHead";
import { ClipboardJS } from "../../JsTool/ClipboardJS";
export default class ControllerPlayerInfo extends Controller 
{
    private viewPlayerInfo:ViewPlayerInfo;
    private viewChangeHead:ViewChangeHead;
    private model:ModelPlayerInfo;
    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelPlayerInfo) as ModelPlayerInfo;
    }

    public Clean()
    {
        
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.OpenPlayerInfo)
        {
            this.OpenPlayerInfo();
        }
        else if(msg == MessageNames.SyncPlayerInfo)
        {
            if(this.viewPlayerInfo != null && this.viewPlayerInfo.isShow == true)
                this.SetPlayerInfo();
        }
    }

    private OpenPlayerInfo()
    {
        if(this.viewPlayerInfo == null)
            {
                this.viewPlayerInfo = this.GetView(ViewNames.ViewPlayerInfo) as ViewPlayerInfo;

                this.viewPlayerInfo.SetOnClick("BtnChangeHead",()=>{
                    this.OpenChangeHeadView();
                });

                this.viewPlayerInfo.SetOnClick("BtnChangeName",()=>{
                    this.viewPlayerInfo.viewChangeName.active = true;
                });

                this.viewPlayerInfo.SetOnClick("BtnCopyID",()=>{
                
                    let success = ClipboardJS.Copy(Global.PlayerInfo.playerId);
                    if(success == true)
                    {
                        Toast.Show("您的账号已经复制");
                    }
                    else
                    {
                        Toast.Show("复制失败，请手动输入");
                    }
                });

                this.viewPlayerInfo.SetOnClick("BtnLogout",()=>{
                    Global.LogOut();
                });

                this.viewPlayerInfo.SetOnClick("BtnRegister",()=>{
                    this.SendMessage(MessageNames.OpenRegisterPhone, 1)
                });

                this.viewPlayerInfo.SetOnClick("BtnSettings",()=>{
                    this.SendMessage(MessageNames.OpenViewSetting)
                });

                this.viewPlayerInfo.SetOnClick("Close",()=>{
                    this.viewPlayerInfo.Hide();
                });

                this.viewPlayerInfo.SetOnClick("CloseNickName",()=>{
                    this.viewPlayerInfo.editBox.string = "";
                    this.viewPlayerInfo.viewChangeName.active = false;
                });

                this.viewPlayerInfo.SetOnClick("btnMask",()=>{
                    this.viewPlayerInfo.editBox.string = "";
                    this.viewPlayerInfo.viewChangeName.active = false;
                });

                this.viewPlayerInfo.SetOnClick("BtnConfirm",()=>{
                    if(this.viewPlayerInfo.editBox.string.length <= 0)
                    {
                        Toast.Show("请输入想要修改的昵称");
                    }
                    else
                    {
                        this.model.ChangeNickname(this.viewPlayerInfo.editBox.string,()=>{
                            this.viewPlayerInfo.viewChangeName.active = false;
                        });
                    }
                });
            }
            this.viewPlayerInfo.Show(()=>{
                this.SetPlayerInfo();
            });
    }

    private SetPlayerInfo()
    {
        cc.error("@@@@@ SetPlayerInfo:=>  "+ JSON.stringify(Global.PlayerInfo));
        this.viewPlayerInfo.textName.string = Global.PlayerInfo.username;
        Util.SetHeadNetIcon(this.viewPlayerInfo.imgHead,Global.PlayerInfo.headImageUrl);
        //Util.SetHeadBox(this.viewPlayerInfo.imgHeadBox,Global.PlayerInfo.headboxImage);
        this.viewPlayerInfo.textAccountID.string = Global.PlayerInfo.playerId;
        this.viewPlayerInfo.textCurrency.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
        let hasPhone = Global.PlayerInfo.phone.length > 0;
        if(hasPhone == true)
        {
            this.viewPlayerInfo.textPhoneNumber.string = Global.PlayerInfo.phone.substr(0,3) + "****" + Global.PlayerInfo.phone.substr(7,4);
        }
        else
        {
            this.viewPlayerInfo.textPhoneNumber.string = "未绑定手机号";
        }
        //this.viewPlayerInfo.phoneNumber.active = hasPhone;
        //this.viewPlayerInfo.btnChangeName.active = !Global.PlayerInfo.nickNameChanged;
        let openRegisterBtn = true;
        if(Global.PlayerInfo.phone.length != 0)
        {
            openRegisterBtn = false;
        }
        this.viewPlayerInfo.btnRegister.active = openRegisterBtn;

    }

    private OpenChangeHeadView()
    {
        if(this.viewChangeHead == null)
        {
            this.viewChangeHead = this.GetView(ViewNames.ViewChangeHead) as ViewChangeHead;

            this.viewChangeHead.SetOnClick("Close",()=>{
                this.viewChangeHead.Hide();
            });

            this.viewChangeHead.onHideViewCallback = ()=>{
                if(Global.PlayerInfo.headImageUrl != this.viewChangeHead.currentHeadImgName)
                {
                    this.model.ChangeHeadImage(this.viewChangeHead.currentHeadImgName);
                }

                if(Global.PlayerInfo.headboxImage != this.viewChangeHead.currentHeadFrameName)
                {
                    this.model.ChangeHeadBox(this.viewChangeHead.currentHeadFrameName);
                }
            };
        }
        this.viewChangeHead.Show(()=>{
            Util.SetHeadNetIcon(this.viewChangeHead.ImgHead,Global.PlayerInfo.headImageUrl);
            Util.SetHeadBox(this.viewChangeHead.ImgHeadBox,Global.PlayerInfo.headboxImage);
        });
    }

}

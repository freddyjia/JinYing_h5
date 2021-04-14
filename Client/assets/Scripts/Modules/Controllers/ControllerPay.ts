import Controller from "../../MVCFramework/Controller";
import ViewPay from "../Views/ViewPay";
import ModelPay from "../Models/ModelPay";
import { ModelNames, ViewNames } from "../MVCRegister";
import MessageNames from "../MessageNames";
import Toast from "../../Tools/Toast";
import { JSOpenUrl } from "../../JsTool/JSOpenUrl";
import Dialog, { DialogType } from "../../Tools/Dialog";
import Util from "../../Tools/Util";
import ccC from "../../Tools/ccC";
import ViewPaySuccess from "../Views/ViewPaySuccess";
import AudioManager from "../../Manager/AudioManager";
import Res from "../../Global/Res";
import TimerManager from "../../Components/TimerManager";
import Global from "../../Global/Global";
import { UploadHeadImage } from "../../Protos/PlayerRole";
import UploadIMG from "../../Tools/UploadIMG";

export default class ControllerPay extends Controller {
    private view: ViewPay;
    private viewPaySuccess: ViewPaySuccess;
    private model: ModelPay;
    public Init() {
        this.model = this.GetModel(ModelNames.ModelPay) as ModelPay;
    }

    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNames.OpenPay) {
            this.model.Req_List(() => {
                this.ShowView();
            });
        }
        else if (msg == MessageNames.ShowPayLoading) {
            this.view.ShowMaskPay(msgBody);
        }
        else if (msg == MessageNames.HidePayLoading) {
            this.view.HideMaskPay();
        }
        else if (msg == MessageNames.OpenPayURL) {
            let url = this.model.lastRechargeUrl;
            if (window["payInIFrame"] == "1") {
                this.view.ShowPayWebview(url);
            }
            else {
                Dialog.ShowWithYesNo("即将跳转到支付页面\n充值金额:" + this.model.lastPayMoney + "元", () => {
                    // JSOpenUrl.Open(this.model.lastRechargeUrl);
                    Util.OpenUrl(url);
                }, () => {

                });
            }

        }
        else if (msg == MessageNames.PayServerGetMoney) {
            if (Global.showLog == true)
                cc.error("充值到账");
            // Dialog.ShowJustYesButton(DialogType.Normal,"","充值成功!","",()=>{});
            // if(this.view != null && this.view.isShow == true)
            // {
            //     this.view.ShowPaySuccessEffect();
            // }
            this.ShowPaySuccessView();
        }

    }

    private ShowPaySuccessView() {
        if (this.viewPaySuccess == null) {
            this.viewPaySuccess = this.GetView(ViewNames.ViewPaySuccess) as ViewPaySuccess;
        }
        this.viewPaySuccess.Show();
        AudioManager.GetInstance().SoundPlay(Res.Audios.SoundSuccessCharge);
        TimerManager.GetInstance().CallActionDelay(() => {
            this.viewPaySuccess.Hide();
        }, 3);
    }

    private ShowView() {
        if (this.view == null) {
            this.view = this.GetView(ViewNames.ViewPay) as ViewPay;
            this.view.SetOnClick("Close", () => {
                this.view.Hide();
            });
            this.view.SetOnClick("ClosewebView", () => {
                this.model.lastRechargeUrl = "";
                window["payInIFrame"] = "";
                this.view.HidePayWebview();
            });

            // this.view.payCallback = (money,channelType)=>{
            //     this.model.Req_Pay(money,channelType,()=>{});
            // };

            this.view.flushCallback = () => {
                this.model.Req_FlushProxyList(() => {
                    Toast.Show("刷新成功");
                    this.view.FlushVip(this.model.rechargeProxyRefreshRes.proxyInfo);
                });
            };
            this.view.VipChargeCallback = (porxyid) => {


                //上传图片
                UploadIMG.openLocalFile((file) => {
                    cc.log("打开本地文件")

                    let node1: cc.Node = new cc.Node();
                    let ss = node1.addComponent(cc.Sprite)
                    node1.parent = this.view.node;
                    UploadIMG.showImage(file, ss)
                })

                cc.log("点击充值-----", porxyid)
                this.model.Req_VipChargeIPandPort(() => {
                    let url = "?ip=" + this.model.VipPayUrl.proxyChargeIp + "&port=" + this.model.VipPayUrl.proxyChargePort + "&selfId=" + Global.PlayerInfo.playerId + "&headUrl=" + Global.PlayerInfo.headImageUrl + "&proxyId=" + porxyid;
                    let chargeUrl = Global.VIpChannelAsset.iMServerAddress + url;
                    this.model.lastRechargeUrl = chargeUrl;
                    window["payInIFrame"] = "1";
                    this.SendMessage(MessageNames.OpenPayURL);
                    cc.log("点击充值", chargeUrl);
                })
            }

            this.view.clickChargeCallback = (channelType, money) => {
                this.model.Req_Pay(channelType, money);
            };

        }
        this.view.Show(() => {
            this.view.SetRechargeList(this.model.rechargeList);
        });
    }

}

import Controller from "../../MVCFramework/Controller";
import Toast from "../../Tools/Toast";
import MessageNames from "../MessageNames";
import ModelVip from "../Models/ModelVip";
import { ModelNames, ViewNames } from "../MVCRegister";
import ViewVip from "../Views/Vip/ViewVip";

export default class ControllerVip extends Controller {
    public view: ViewVip;
    public model: ModelVip;
    public currentBtnindex: Number = 0;
    //重写父类
    public Init() {
        this.model = this.GetModel(ModelNames.ModelVip) as ModelVip;
    }
    //重写父类
    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNames.OpenVip) {
            this.model.Req_VipListInfo(() => {
                this.ShowVipView();
            })
            //申请数据 ----》打开view
        } else if (msg == MessageNames.VipUpdateVipDate) {
            this.view.ShowVipInfo(this.model.VipInfoList, this.model.isVip)
        } else if (msg == MessageNames.VipUpdateRebateDetail) {
            this.view.ShowMingXiPanel(this.currentBtnindex, this.model.Xima_info)
        }
        else if (msg == MessageNames.VIPUpdateReceivingRecords) {
            this.view.ShowMingXiPanel(this.currentBtnindex, this.model.Xima_getInfo)
        }
    }
    private ShowVipView() {
        if (this.view == null) {
            this.view = this.GetView(ViewNames.ViewVip) as ViewVip;
            //关闭按钮
            this.view.SetOnClick("Close_btn", () => {
                this.view.Hide();
            })
            this.view.SetOnClick("Close_btn_Detail", () => {
                this.currentBtnindex = 0;
                this.view.HideMingXiPanel();
            })
            this.view.SetOnClick("Detail_btn", () => {
                this.model.Req_DetailInfo_FanDian_Get();

            })
            this.view.SetOnClick("FanDianLingQuMingXi", () => {
                this.currentBtnindex = 0;
                this.model.Req_DetailInfo_FanDian_Get();
            })
            this.view.SetOnClick("XiMaFanDianMingXi", () => {
                this.currentBtnindex = 1;
                this.model.Req_DetailInfo_FanDian();
            })
            this.view.SetOnClick("Recharge_btn", () => {
                this.model.SendMessage(MessageNames.OpenPay);
            })
            this.view.SetOnClick("JiHuoVip_btn", () => {
                this.model.SendMessage(MessageNames.OpenPay);
            })

            this.view.SetOnClick("LingquFanDian_btn", () => {
                this.model.Req_EXCHANGE_INTEGRAL(() => {
                }, (err) => {
                    cc.log(err);
                    Toast.Show(err);
                })
            })
        }
        this.view.Show(() => {
            this.view.ShowVipInfo(this.model.VipInfoList, this.model.isVip);
        })

    }

}
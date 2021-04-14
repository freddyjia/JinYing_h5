import ccC from "../../../Tools/ccC";
import SpriteUtil from "../../../Tools/SpriteUtil";
import Toast from "../../../Tools/Toast";
import Util from "../../../Tools/Util";
import ContentItem from "./ContentItem";

export default class ContentItemNormal extends ContentItem {
    private clickChargeCallback: (money: number) => void;
    public SetClickChargeCallback(clickChargeCallback: (money: number) => void) {
        this.clickChargeCallback = clickChargeCallback;
    }

    // private GetTitleName():string
    // {
    //     if(this.rechargeInfo.channelType == ChannelType.PROXY)
    //     {
    //         return 'Vip';
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.ZHIFUBAO)
    //     {
    //         return "zfb";
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.WEIXIN)
    //     {
    //         return "WxPay";
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.QQPAY)
    //     {
    //         return "QQPay";
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.YINLIAN)
    //     {
    //         return "yhk";
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.JINDONG)
    //     {
    //         return "jd";
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.BIGZHIFUBAO)
    //     {
    //         return "zfb";
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.DIANKA)
    //     {
    //         return "dianka";
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.BIGWEIXIN)
    //     {
    //         return "WxPay";
    //     }
    //     else if(this.rechargeInfo.channelType == ChannelType.YUNSHANFU)
    //     {
    //         return "yunsanfu";
    //     }
    // }



    protected OnInit() {
        // let ImgChargeTypeTitle = this.dicNode["ImgChargeTypeTitle"].getComponent(cc.Sprite);
        // NodeUtil.SetSpriteFrame(ImgChargeTypeTitle,"MainGame/Atlas/pay",this.GetTitleName());

        let ImageTopBG = this.dicNode["ImageTopBG"].getComponent(cc.Sprite);
        cc.log(ImageTopBG)
        let path = "MainGame/Textures/Pay/" + this.GetBannerString();
        cc.log("path", path)
        // ccC.loadRes(path,
        //     cc.SpriteFrame,
        //     (err: Error, res: cc.SpriteFrame) => {
        //         if (err) {
        //             cc.error("err  " + err.message || err);
        //             return;
        //         }
        //         ImageTopBG.spriteFrame = res;
        //     });
        SpriteUtil.LoadSpriteByPath(ImageTopBG, path)

        let LayoutNormal = this.dicNode["LayoutNormal"];
        let InputMoney = this.dicNode["InputMoney"].getComponent(cc.EditBox);

        // cc.error("this.rechargeInfo.chargeMoney  " + this.rechargeInfo.chargeMoney.length);
        let payItem = this.dicNode["PayItem"];
        for (let i = 0; i < this.rechargeInfo.chargeMoney.length; i++) {
            let chargeMoney = this.rechargeInfo.chargeMoney[i];
            let node = cc.instantiate(payItem);
            node.active = true;
            node.parent = LayoutNormal;
            // payItem.position = cc.Vec2.ZERO;

            let Label = cc.find("BtnAmount/Label", node).getComponent(cc.Label);
            Label.string = chargeMoney.toString();
            let BtnAmount = cc.find("BtnAmount", node).getComponent(cc.Button);
            Util.SetClickAction(BtnAmount, () => {
                InputMoney.string = chargeMoney.toString();
            });
        }

        if (this.rechargeInfo.chargeMoney.length > 8) {
            let ImgCommonChargeTip = this.dicNode["ImgCommonChargeTip"];
            ImgCommonChargeTip.active = false;
            LayoutNormal.y = 20;
        }

        let BtnClear = this.dicNode["BtnClear"].getComponent(cc.Button);
        Util.SetClickAction(BtnClear, () => {
            InputMoney.string = "";
        });

        let BtnCharge = this.dicNode["BtnCharge"].getComponent(cc.Button);
        Util.SetClickAction(BtnCharge, () => {

            // cc.error("1111  " + parseInt(InputMoney.string));

            if (InputMoney.string.length == 0 || parseInt(InputMoney.string) == 0) {
                Toast.Show("请输入正确的金额");
                return;
            }
            let money = parseInt(InputMoney.string);
            this.clickChargeCallback(money);

        });
    }



    public OnSelect() {

    }
}

import { ChannelType } from "../../../Protos/Pay";
import Util from "../../../Tools/Util";

export default class MenuItem {
    public node: cc.Node;
    private BtnSelect: cc.Button;
    private BtnUnSelect: cc.Button;
    private TextSelect: cc.Label;
    private TextUnSelect: cc.Label;
    private channelType: number;

    public SetNode(node: cc.Node, channelType: number, onclickCallback: (channelType: number) => void) {
        this.node = node;
        this.BtnSelect = cc.find("BtnSelect", node).getComponent(cc.Button);
        this.BtnUnSelect = cc.find("BtnUnSelect", node).getComponent(cc.Button);
        this.TextSelect = cc.find("Text", this.BtnSelect.node).getComponent(cc.Label);
        this.TextUnSelect = cc.find("Text", this.BtnUnSelect.node).getComponent(cc.Label);

        this.channelType = channelType;
        this.SetTextSprite(this.TextSelect, true);
        this.SetTextSprite(this.TextUnSelect, false);

        Util.SetClickAction(this.BtnSelect, () => {
            onclickCallback(this.channelType);
        });

        Util.SetClickAction(this.BtnUnSelect, () => {
            onclickCallback(this.channelType);
        });
    }

    private GetSpriteName(select: boolean) {
        if (this.channelType == ChannelType.PROXY) {
            //return select ? 'CZ_xz_VIP' : 'CZ_wxz_vip';
            return "VIP专业充值";
        }
        else if (this.channelType == ChannelType.ZHIFUBAO) {
            //return select ? 'CZ_xz_zhifubaochongzhi' : 'CZ_wxz_zhifubaochongzhi';
            return "支付宝充值";
        }
        else if (this.channelType == ChannelType.WEIXIN) {
            //return select ? 'CZ_xz_weixinchongzhi' : 'CZ_wxz_weixinchongzhi';
            return "微信充值";
        }
        else if (this.channelType == ChannelType.QQPAY) {
            //return select ? 'CZ_xz_qqqianbao' : 'CZ_wxz_qqqianbao';
            return "QQ钱包";
        }
        else if (this.channelType == ChannelType.YINLIAN) {
            //return select ? 'CZ_xz_yinhangka' : 'CZ_wxz_yinhangka';
            return "银行卡充值";
        }
        else if (this.channelType == ChannelType.JINDONG) {
            //return select ? 'CZ_xz_jingdong' : 'CZ_wxz_jingdong';
            return "京东钱包";
        }
        else if (this.channelType == ChannelType.BIGZHIFUBAO) {
            //return select ? 'CZ_xz_dae' : 'CZ_wxz_dae';
            return "大额支付宝";
        }
        else if (this.channelType == ChannelType.DIANKA) {
            //return select ? 'CZ_xz_dianka' : 'CZ_wxz_dianka';
            return "点卡充值";
        }
        else if (this.channelType == ChannelType.BIGWEIXIN) {
            //return select ? 'CZ_wxz_dae_1' : 'CZ_wxz_dae_2';
            return "大额微信支付";
        }
        else if (this.channelType == ChannelType.YUNSHANFU) {
            //return select ? 'CZ_BTN_HYSF' : 'CZ_BTN_LYSF';
            return "云闪付充值";
        }
    }

    private SetTextSprite(sprite: cc.Label, select: boolean) {
        sprite.string = this.GetSpriteName(select);
        //NodeUtil.SetSpriteFrame(sprite,"MainGame/Atlas/pay",this.GetSpriteName(select));
    }

    public SetSelect(select: boolean) {
        if (select == true) {
            this.BtnSelect.node.active = true;
            this.BtnUnSelect.node.active = false;
        }
        else {
            this.BtnSelect.node.active = false;
            this.BtnUnSelect.node.active = true;
        }
    }
}
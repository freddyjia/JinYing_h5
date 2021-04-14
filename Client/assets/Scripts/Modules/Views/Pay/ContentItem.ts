import { ChannelType, IRechargeInfo } from "../../../Protos/Pay";
import NodeUtil from "../../../Tools/NodeUtil";

export default class ContentItem {
    public node: cc.Node;
    protected rechargeInfo: IRechargeInfo;
    protected dicNode: { [name: string]: cc.Node };
    public Init(node: cc.Node, rechargeInfo: IRechargeInfo) {
        this.node = node;
        this.rechargeInfo = rechargeInfo;
        this.dicNode = NodeUtil.GetNodeDic(node, null);
        this.OnInit();
    }
    public OnSelect() {

    }

    protected OnInit() {

    }
    public GetBannerString() {
        if (this.rechargeInfo.channelType == ChannelType.PROXY) {
            return 'Vip';
        }
        else if (this.rechargeInfo.channelType == ChannelType.ZHIFUBAO) {
            return "zfb";
        }
        else if (this.rechargeInfo.channelType == ChannelType.WEIXIN) {
            return "WxPay";
        }
        else if (this.rechargeInfo.channelType == ChannelType.QQPAY) {
            return "QQPay";
        }
        else if (this.rechargeInfo.channelType == ChannelType.YINLIAN) {
            return "yhk";
        }
        else if (this.rechargeInfo.channelType == ChannelType.JINDONG) {
            return "jd";
        }
        else if (this.rechargeInfo.channelType == ChannelType.BIGZHIFUBAO) {
            return "zfb";
        }
        else if (this.rechargeInfo.channelType == ChannelType.DIANKA) {
            return "dianka";
        }
        else if (this.rechargeInfo.channelType == ChannelType.BIGWEIXIN) {
            return "WxPay";
        }
        else if (this.rechargeInfo.channelType == ChannelType.YUNSHANFU) {
            return "yunsanfu";
        }
        else {
            return "Vip";
        }
    }
}
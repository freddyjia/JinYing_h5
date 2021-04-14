import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import { RechargeListResponse, ChannelType, RechargeInfo, IRechargeInfo, IProxyInfo, ProxyInfo, ChargeType } from "../../Protos/Pay";
import NodeUtil from "../../Tools/NodeUtil";
import ContentItem from "./Pay/ContentItem";
import ContentItemVip from "./Pay/ContentItemVip";
import ContentItemIM from "./Pay/ContentItemIM";
import MenuItem from "./Pay/MenuItem";
import ContentItemNormal from "./Pay/ContentItemNormal";

export default class ViewPay extends View {
    // public payCallback:(money,channelType)=>void;
    public flushCallback: () => void;
    public clickChargeCallback: (channelType, money) => void;
    public VipChargeCallback: (proxyId) => void;

    private ContentIM: cc.Node;//unity同步得充值方法 (vip专业充值)
    private ContentVip: cc.Node;
    private ContentNormal: cc.Node;

    private BtnItem: cc.Node;
    public WebNode: cc.Node;
    private scrollViewContent: cc.Node;
    private BtnMask: cc.Button;
    public WebView: cc.WebView;
    private RightContent: cc.Node;
    private MaskPay: cc.Node;
    private SpritePayType: cc.Sprite;
    // private PaySuccessSpine:sp.Skeleton;
    // private LayoutVip:cc.Node;

    private rechargeList: RechargeListResponse;
    private menuItems: Array<MenuItem> = [];
    private contentItems: Array<ContentItem> = [];
    private currentSelectIndex = -1;

    private contentItemVip: ContentItemVip;
    private contentItemIM: ContentItemIM;
    private contentItemNormol: ContentItemNormal;

    public OnAwake() {

        this.ContentIM = this.FindTransform("ContentIM");
        this.ContentVip = this.FindTransform("ContentVip");
        this.ContentNormal = this.FindTransform("ContentNormal");


        this.BtnItem = this.FindTransform("BtnItem");
        this.WebNode = this.FindTransform("WebNode");
        this.scrollViewContent = this.FindTransform("scrollViewContent");
        this.BtnMask = this.FindTransform("BtnMask").getComponent(cc.Button);
        this.WebView = this.FindTransform("WebView").getComponent(cc.WebView);
        this.RightContent = this.FindTransform("RightContent");
        this.MaskPay = this.FindTransform("MaskPay");
        this.SpritePayType = this.FindTransform("SpritePayType").getComponent(cc.Sprite);
        // this.PaySuccessSpine = this.FindTransform("PaySuccessSpine").getComponent(sp.Skeleton);
        // this.LayoutVip = this.FindTransform("LayoutVip");
        cc.log("this.RightContent ", this.RightContent)
        Util.SetClickAction(this.BtnMask, () => {
            this.WebNode.active = false;
        });
    }
    //-------------------------------------继续逻辑
    private CleanChangeList() {
        //清楚左侧按钮
        for (let i = 0; i < this.menuItems.length; i++) {
            this.menuItems[i].node.destroy();
        }
        //清除右侧按钮
        for (let i = 0; i < this.contentItems.length; i++) {
            this.contentItems[i].node.destroy();
        }
        this.menuItems = [];
        this.contentItems = [];
        this.currentSelectIndex = -1;
    }
    private GetMenuItem(rechargeInfo: IRechargeInfo): MenuItem {
        let menuItem = new MenuItem();
        let btnItem = cc.instantiate(this.BtnItem);
        btnItem.active = true;
        btnItem.parent = this.scrollViewContent;
        let index = this.menuItems.length;
        menuItem.SetNode(btnItem, rechargeInfo.channelType, () => {
            this.SetSelectIndex(index);
        });
        return menuItem;
    }
    private BulidChargeMnue() {
        this.scrollViewContent.setContentSize(new cc.Size(260, 120 + (this.rechargeList.rechargeInfo.length - 1) * 110));
        cc.log("this.rechargeList.rechargeInfo", this.rechargeList.rechargeInfo)
        for (let i = 0; i < this.rechargeList.rechargeInfo.length; i++) {
            let rechargeInfo = this.rechargeList.rechargeInfo[i];
            //----------------->>>>>>>>MenuItem
            let menuItem = this.GetMenuItem(rechargeInfo);
            this.menuItems.push(menuItem);
            //----------------->>>>>>>>contentitem
            let contentItem: ContentItem = null;
            let contentNode = null;
            cc.log("rechargeInfo.channelType", i)
            switch (rechargeInfo.channelType) {
                case ChannelType.PROXY:
                    cc.log("vip")
                    contentNode = cc.instantiate(this.ContentIM);
                    contentItem = this.CreatContentItemIM();
                    //  this.contentItemIM = contentItem as ContentItemIM;
                    break;
                case ChannelType.ZHIFUBAO:
                    cc.log("支付宝")
                    contentNode = cc.instantiate(this.ContentNormal);
                    contentItem = this.CreatZHIFUBAO();
                    //  this.contentItemNormol = contentItem as ContentItemNormal;
                    break;
                case ChannelType.WEIXIN:
                    contentNode = cc.instantiate(this.ContentNormal);
                    contentItem = this.CreatWeChat();
                    //    this.contentItemNormol = contentItem as ContentItemNormal;
                    cc.log("微信")
                    break;
                case ChannelType.YINLIAN:
                    contentNode = cc.instantiate(this.ContentNormal);
                    contentItem = this.CreatYinHang();
                    //   this.contentItemNormol = contentItem as ContentItemNormal;
                    cc.log("银行")
                    break;
            }

            if (contentNode != null) {
                contentNode.parent = this.RightContent;
                contentNode.position = cc.Vec2.ZERO;
                contentItem.Init(contentNode, rechargeInfo);
                this.contentItems.push(contentItem);
                cc.error("this.contentItems.push  " + i);
            }
        }

    }
    public CreatContentItemIM(): ContentItemIM {
        let contentItem: ContentItem = null;
        contentItem = new ContentItemIM();
        (contentItem as ContentItemIM).SetOnClickFlushCallback(() => {
            this.flushCallback();
        });
        (contentItem as ContentItemIM).SetonClickChargeCallback((proxyId: string) => {
            this.VipChargeCallback(proxyId);
        });
        return contentItem as ContentItemIM;
    }
    private CreatZHIFUBAO(): ContentItemNormal {
        let contentItem: ContentItem = null;
        contentItem = new ContentItemNormal();
        (contentItem as ContentItemNormal).SetClickChargeCallback((money) => {
            this.clickChargeCallback(ChannelType.ZHIFUBAO, money);
        });
        return contentItem as ContentItemNormal;
    }
    private CreatWeChat(): ContentItemNormal {
        let contentItem: ContentItem = null;
        contentItem = new ContentItemNormal();
        (contentItem as ContentItemNormal).SetClickChargeCallback((money) => {
            this.clickChargeCallback(ChannelType.WEIXIN, money);
        });
        return contentItem as ContentItemNormal;
    }
    private CreatYinHang(): ContentItemNormal {
        let contentItem: ContentItem = null;
        contentItem = new ContentItemNormal();
        (contentItem as ContentItemNormal).SetClickChargeCallback((money) => {
            this.clickChargeCallback(ChannelType.WEIXIN, money);
        });
        return contentItem as ContentItemNormal;
    }


    public SetRechargeList(rechargeList: RechargeListResponse) {
        this.CleanChangeList();
        this.rechargeList = rechargeList;
        this.BulidChargeMnue();
        cc.log("this.contentItems.length", this.contentItems.length)
        if (this.contentItems.length > 0)
            this.SetSelectIndex(0);
    }

    // public ShowPaySuccessEffect()
    // {
    // this.PaySuccessSpine.node.active = true;
    // this.PaySuccessSpine.animation = "1";
    // TimerManager.GetInstance().CallActionDelay(()=>{
    //     this.PaySuccessSpine.node.active = false;
    // },3);
    // }

    public ShowPayWebview(url: string) {
        cc.log("显示充值", url)
        this.WebNode.active = true;
        this.WebView.url = url;
    }
    public HidePayWebview() {
        this.WebNode.active = false;
        this.WebView.url = "";
    }

    public FlushVip(proxyInfo: IProxyInfo[]) {
        if (this.contentItemVip != null) {
            this.contentItemVip.Flush(proxyInfo);
        }
        if (this.contentItemIM != null) {
            this.contentItemIM.Flush(proxyInfo);
        }
    }

    private SetSelectIndex(index) {
        if (this.currentSelectIndex == index)
            return;

        if (this.currentSelectIndex != -1) {
            this.menuItems[this.currentSelectIndex].SetSelect(false);
            this.contentItems[this.currentSelectIndex].node.active = false;
        }
        this.currentSelectIndex = index;
        cc.log("设置新鲜事", this.contentItems[this.currentSelectIndex].node.active)
        this.contentItems[this.currentSelectIndex].node.active = true;
        this.menuItems[this.currentSelectIndex].SetSelect(true);
        this.contentItems[this.currentSelectIndex].OnSelect();
    }

    public HideMaskPay() {
        this.MaskPay.active = false;
    }

    public ShowMaskPay(channelType) {
        this.MaskPay.active = true;
        let icon = "PayIconVip";
        if (channelType == ChannelType.PROXY) {
            icon = 'PayIconVip';
        }
        else if (channelType == ChannelType.ZHIFUBAO) {
            icon = 'PayIconZhifubao';
        }
        else if (channelType == ChannelType.WEIXIN) {
            icon = 'PayIconWeChat';
        }
        else if (channelType == ChannelType.QQPAY) {
            icon = 'PayIconQQ';
        }
        else if (channelType == ChannelType.YINLIAN) {
            icon = 'PayIconVip';
        }
        else if (channelType == ChannelType.JINDONG) {
            icon = 'PayIconVip';
        }
        else if (channelType == ChannelType.BIGZHIFUBAO) {
            icon = 'PayIconZhifubao';
        }
        else if (channelType == ChannelType.DIANKA) {
            icon = 'PayIconVip';
        }
        else if (channelType == ChannelType.BIGWEIXIN) {
            icon = 'PayIconZhifubao';
        }
        else if (channelType == ChannelType.YUNSHANFU) {
            icon = 'PayIconVip';
        }

        NodeUtil.SetSpriteFrame(this.SpritePayType, "MainGame/Textures/Pay/" + icon);
    }

    public OnShowView() {

    }

    public OnHideView() {

        //this.CleanChangeList();
    }
}





//代理官方充值


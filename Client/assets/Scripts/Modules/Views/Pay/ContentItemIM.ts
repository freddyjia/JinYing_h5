import Global from "../../../Global/Global";
import MessageCenter from "../../../MVCFramework/MessageCenter";
import { ChargeType, IProxyInfo } from "../../../Protos/Pay";
import ccC from "../../../Tools/ccC";
import NodeUtil from "../../../Tools/NodeUtil";
import { Random } from "../../../Tools/Random";
import Util from "../../../Tools/Util";
import MessageNames from "../../MessageNames";
import ContentItem from "./ContentItem";

export default class ContentItemIM extends ContentItem {
    private proxyInfoNodes: Array<cc.Node> = [];
    private payItem: cc.Node;
    private parent: cc.Node;

    private tag: cc.Node;
    private typeIcon: cc.Node;
    private star: cc.Node;
    private btnkefu: cc.Button;

    private onClickFlushCallback: () => void;
    private onClickChargeCallback: (proxyId: string) => void;
    protected OnInit() {
        cc.log("itmeIinit")
        this.payItem = this.dicNode["PayItem"];
        this.parent = this.dicNode["LayoutIM"];
        this.tag = this.dicNode["tag"];
        this.typeIcon = this.dicNode["typeIcon"];
        this.star = this.dicNode["star"];
        this.btnkefu = this.dicNode["btnKefu"].getComponent(cc.Button)
        this.Flush(this.rechargeInfo.proxyInfo);
    }
    public OnSelect() {

    }
    public SetOnClickFlushCallback(onClickFlushCallback: () => void) {
        this.onClickFlushCallback = onClickFlushCallback;
    }
    public SetonClickChargeCallback(onClickChargeCallback: (proxyId: string) => void) {
        this.onClickChargeCallback = onClickChargeCallback;
    }
    public Flush(proxyInfos: IProxyInfo[]) {
        this.CleanScrollerView();
        this.CreatPayItem(proxyInfos);
    }
    private CleanScrollerView() {
        for (let i = 0; i < this.proxyInfoNodes.length; i++) {
            this.proxyInfoNodes[i].destroy();
        }
        this.proxyInfoNodes = [];
    }
    private CreatPayItem(proxyInfos: IProxyInfo[]) {
        for (let i = 0; i < proxyInfos.length; i++) {
            let proxyInfo: IProxyInfo = proxyInfos[i];
            let node = cc.instantiate(this.payItem);
            this.UpdateItem(node, proxyInfo);
            this.proxyInfoNodes.push(node);
            node.active = true;
            node.parent = this.parent;
            cc.log("payitem" + i)
        }

    }
    private UpdateItem(node: cc.Node, proxyInfo: IProxyInfo) {
        cc.log("item-----", proxyInfo)

        let ButtonCopy = cc.find("Content/BtnCopyCharge", node).getComponent(cc.Button);
        Util.SetClickAction(ButtonCopy, () => {
            this.onClickChargeCallback(proxyInfo.proxyId)
        })
        Util.SetClickAction(this.btnkefu, () => {
            MessageCenter.SendMessage(MessageNames.OpenCustomservice, { "hasLogin": true, "serviceType": 1 });
        });

        let ImgHead = cc.find("Content/Head/HeadMask/ImgHead", node).getComponent(cc.Sprite);
        if (proxyInfo.imageUrl != "")
            this.LoadHeadImg(proxyInfo.imageUrl, ImgHead)
        else {
            let Randhead: string = "GYZY_TX_W_" + Random.RangeInt(1, 5).toString();
            Util.SetHeadNetIcon(ImgHead, Randhead);
        }


        let title = cc.find("Content/Text", node).getComponent(cc.Label);
        title.string = proxyInfo.proxyName;


        //刷新标签------------------------------
        let LayoutTag = cc.find("Content/tagIconview/LayoutTag", node);
        if (proxyInfo.tag) {
            for (let j = 0; j < proxyInfo.tag.length; j++) {
                let tagitem = cc.instantiate(this.tag);
                let tagtext = tagitem.getChildByName("tagtext").getComponent(cc.Label);
                tagtext.string = proxyInfo.tag[j];
                tagitem.active = true;
                tagitem.parent = LayoutTag;
            }
            LayoutTag.active = true;
        }
        //刷新充值方式-------------------------------
        if (proxyInfo.chargeType && proxyInfo.chargeType.length != 0) {
            let LayoutType = cc.find("Content/chargeTypeIconview/LayoutChargeType", node);
            for (let m = 0; m < proxyInfo.chargeType.length; m++) {
                let chargetypeItem = cc.instantiate(this.typeIcon);
                let ImageTopBG = chargetypeItem.getComponent(cc.Sprite);
                chargetypeItem.active = true;
                chargetypeItem.parent = LayoutType;
                let spriteName = "ChargeType_" + proxyInfo.chargeType[m];
                cc.log("支付支持", spriteName)
                NodeUtil.SetSpriteFrame(ImageTopBG, "MainGame/Atlas/vippay", spriteName);
            }
            LayoutType.active = true;
        }
        //刷新星星---------------------------------------
        let startCount = proxyInfo.starLevel / 10;
        let starLayout = cc.find("Content/starview/LayoutStar", node)
        for (let i = 0; i < startCount; i++) {
            let starItem = starLayout.getChildByName("star" + i).getChildByName("lightstart");
            if (i <= startCount) {
                starItem.active = true;
            } else {
                starItem.active = false;
            }
        }
        starLayout.active = true;
    }


    private LoadHeadImg(path, sprite: cc.Sprite) {
        ccC.loadWebImage(path, (err, res) => {
            if (err) {
                cc.log(err);
                return;
            }
            let frame = new cc.SpriteFrame(res);
            sprite.spriteFrame = frame;
            //cc.log(res)
        })
        //   return;
    }

}
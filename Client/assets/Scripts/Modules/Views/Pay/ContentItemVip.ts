import Global from "../../../Global/Global";
import { ClipboardJS } from "../../../JsTool/ClipboardJS";
import { IProxyInfo } from "../../../Protos/Pay";
import NodeUtil from "../../../Tools/NodeUtil";
import Toast from "../../../Tools/Toast";
import Util from "../../../Tools/Util";
import ContentItem from "./ContentItem";

export default class ContentItemVip extends ContentItem {
    private parent;
    private proxyInfoNodes: Array<cc.Node> = []; //充值渠道 node集合
    private onClickFlushCallback: () => void;
    protected OnInit() {
        let BtnFlush = this.dicNode["BtnFlush"].getComponent(cc.Button);
        Util.SetClickAction(BtnFlush, () => {
            this.onClickFlushCallback();
        });
        let LabelID = this.dicNode["LabelMyID"].getComponent(cc.Label);
        LabelID.string = Global.PlayerInfo.playerId;

        let ButtonCopy = this.dicNode["ButtonCopy"].getComponent(cc.Button);
        Util.SetClickAction(ButtonCopy, () => {
            let success = ClipboardJS.Copy(Global.PlayerInfo.playerId);
            if (success == true) {
                Toast.Show("ID复制成功!");
            }
            else {
                Toast.Show("复制失败");
            }
        });

        this.parent = this.dicNode["LayoutVip"];
        this.Flush(this.rechargeInfo.proxyInfo);
    }

    public OnSelect() {

    }

    public SetOnClickFlushCallback(onClickFlushCallback: () => void) {
        this.onClickFlushCallback = onClickFlushCallback;
    }

    public Flush(proxyInfos: IProxyInfo[]) {
        // cc.error("proxyInfos " + proxyInfos.length);
        let payItem = this.dicNode["PayItem"];

        for (let i = 0; i < this.proxyInfoNodes.length; i++) {
            this.proxyInfoNodes[i].destroy();
        }
        this.proxyInfoNodes = [];
        for (let i = 0; i < proxyInfos.length; i++) {
            let proxyInfo = proxyInfos[i];
            let node = cc.instantiate(payItem);
            this.proxyInfoNodes.push(node);
            node.active = true;
            node.parent = this.parent;
            let SpriteType = cc.find("Content/SpriteType", node).getComponent(cc.Sprite);
            let BtnCopyID = cc.find("Content/BtnCopyID", node).getComponent(cc.Button);
            let LabelID = cc.find("Content/LabelID", node).getComponent(cc.Label);
            let PayTimeContent = cc.find("Content/PayTimeContent", node).getComponent(cc.Label);
            let AlignLabel = cc.find("AlignLabel", PayTimeContent.node).getComponent(cc.Widget);
            let PerTimeContent = cc.find("Content/PerTimeContent", node).getComponent(cc.Label);
            let PercentContent = cc.find("Content/PercentContent", node).getComponent(cc.Label);
            let copytext = cc.find("text", BtnCopyID.node).getComponent(cc.Sprite);
            LabelID.string = proxyInfo.proxyNo;
            PayTimeContent.string = proxyInfo.chargeTime.toString();
            PerTimeContent.string = proxyInfo.useTime.toString();
            PercentContent.string = proxyInfo.successRate + "%";
            TimerManager.GetInstance().CallActionDelay(() => {
                AlignLabel.updateAlignment();
            }, 0.1);


            Util.SetClickAction(BtnCopyID, () => {
                let success = ClipboardJS.Copy(proxyInfo.proxyNo);
                if (success == true) {
                    Toast.Show("复制成功!");
                }
                else {
                    Toast.Show("复制失败");
                }
            });
            if (proxyInfo.weiOrQq == "0") {
                //微信
                NodeUtil.SetSpriteFrame(SpriteType, "MainGame/Atlas/pay", "CZ_WEIXING");
                NodeUtil.SetSpriteFrame(copytext, "MainGame/Atlas/pay", "CZ_BTN_fuzhiweixin");
            }
            else {
                //qq
                NodeUtil.SetSpriteFrame(SpriteType, "MainGame/Atlas/pay", "CZ_ICON_QQ");
                NodeUtil.SetSpriteFrame(copytext, "MainGame/Atlas/pay", "CZ_BTN_fzqq");
            }

            let ImgHuabei = cc.find("Content/ImgHuabei", node);
            if (proxyInfo.isSupportHuaBei == true) {
                ImgHuabei.active = true;
            }
            else {
                ImgHuabei.active = false;
            }
        }
    }
}
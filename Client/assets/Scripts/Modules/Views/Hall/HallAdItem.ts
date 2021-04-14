import Util from "../../../Tools/Util";
import Global from "../../../Global/Global";
import QRCodeComponent from "../../../Components/QRCodeComponent";
import MessageCenter from "../../../MVCFramework/MessageCenter";
import MessageNames from "../../MessageNames";
import { ClipboardJS } from "../../../JsTool/ClipboardJS";
import Toast from "../../../Tools/Toast";
import { ADData } from "../../../Protos/HallData";
import NodeUtil from "../../../Tools/NodeUtil";

export default class HallAdItem {
    public gameObject: cc.Node;

    private adImage: cc.Sprite;
    private btnOpen: cc.Button;
    private AdQRCode: QRCodeComponent;
    private AdQRCodeBg: cc.Node;
    private AdQRCodeBtn: cc.Button;
    private PromoterAdQRCode: QRCodeComponent;
    private PromoterAdQRCodeBg: cc.Node;
    private PromoterAdQRCodeBtn: cc.Button;

    private adData: ADData;
    private QRCodeWord: string;
    private CheckAndOpenSmallGameListCallback: (playType: number) => void;

    private ADAtlas = "MainGame/Textures/ADs/";

    public Init(item: cc.Node) {
        this.gameObject = item;

        this.adImage = cc.find("adImage", this.gameObject).getComponent(cc.Sprite);
        this.btnOpen = cc.find("adImage", this.gameObject).getComponent(cc.Button);
        this.AdQRCodeBg = cc.find("AdQRCodeBg", this.gameObject);
        this.AdQRCode = cc.find("AdQRCode", this.AdQRCodeBg).getComponent(QRCodeComponent);
        this.AdQRCodeBtn = cc.find("AdQRCodeBtn", this.gameObject).getComponent(cc.Button);
        this.PromoterAdQRCodeBg = cc.find("PromoterAdQRCodeBg", this.gameObject);
        this.PromoterAdQRCode = cc.find("PromoterAdQRCode", this.PromoterAdQRCodeBg).getComponent(QRCodeComponent);
        this.PromoterAdQRCodeBtn = cc.find("PromoterAdQRCodeBtn", this.gameObject).getComponent(cc.Button);
        Util.SetClickAction(this.btnOpen, (btn: cc.Button, data: any) => {
            this.BtnClick();
        });
        // Util.SetClickAction(this.AdQRCodeBtn, (btn: cc.Button, data: any) => {
        //     MessageCenter.SendMessage(MessageNames.OpenFullScreenQRCode, this.QRCodeWord);
        // });
        Util.SetClickAction(this.PromoterAdQRCodeBtn, (btn: cc.Button, data: any) => {
            MessageCenter.SendMessage(MessageNames.OpenUIPromoter);
        });
    }

    public SetCheckAndOpenSmallGameListCallback(callback: (playType: number) => void) {
        this.CheckAndOpenSmallGameListCallback = callback;
    }

    public Update(adData: ADData) {
        this.adData = adData;
        cc.log("广告", adData.adPic)
        let spriteName = this.ADAtlas + "ad_" + adData.adPic;
        NodeUtil.SetSpriteFrame(this.adImage, spriteName);
        // --复制网址
        if (adData.functionType == 1) {
            this.PromoterAdQRCodeBg.active = false;
            this.PromoterAdQRCodeBtn.node.active = false;
            this.AdQRCodeBg.active = true;
            this.AdQRCodeBtn.node.active = true;

            var timestamp = Date.now();
            var newWebAddress = adData.scriptH5 + "?=" + timestamp;
            this.QRCodeWord = newWebAddress;
            cc.log("QRCodeWord", this.QRCodeWord)
            this.AdQRCode.Gen(newWebAddress);
        }
        else if (adData.functionType == 2) {
            //   --二维码功能
            this.PromoterAdQRCodeBg.active = false;
            this.PromoterAdQRCodeBtn.node.active = false;
            this.AdQRCodeBg.active = false;
            this.AdQRCodeBtn.node.active = false;
        }
        else if (adData.functionType == 3) {
            //--快速加入
            this.PromoterAdQRCodeBg.active = false;
            this.PromoterAdQRCodeBtn.node.active = false;
            this.AdQRCodeBg.active = false;
            this.AdQRCodeBtn.node.active = false;
        }
        else if (adData.functionType == 4) {
            this.PromoterAdQRCodeBg.active = true;
            this.PromoterAdQRCodeBtn.node.active = true;
            this.AdQRCodeBg.active = false;
            this.AdQRCodeBtn.node.active = false;

            var newWebAddress = adData.scriptH5 + "?t=" + Date.now() + "&playerId=" +
                Global.PlayerInfo.playerId;
            this.QRCodeWord = newWebAddress;
            this.PromoterAdQRCode.Gen(newWebAddress);
        }
        else if (adData.functionType == 5) {
            //-推广员广告引导,点击跳转到推广界面
            this.PromoterAdQRCodeBg.active = false;
            this.PromoterAdQRCodeBtn.node.active = false;
            this.AdQRCodeBg.active = false;
            this.AdQRCodeBtn.node.active = false;
        }
        else if (adData.functionType == 6) {
            //--广告引导,点击跳转到VIP界面
            this.PromoterAdQRCodeBg.active = false;
            this.PromoterAdQRCodeBtn.node.active = false;
            this.AdQRCodeBg.active = false;
            this.AdQRCodeBtn.node.active = false;
        } else {
            // ---跳转 充值
            this.PromoterAdQRCodeBg.active = false;
            this.PromoterAdQRCodeBtn.node.active = false;
            this.AdQRCodeBg.active = false;
            this.AdQRCodeBtn.node.active = false;
        }
    }

    public BtnClick() {
        if (!this.adData.isHaveFunction)
            return;
        cc.log("功能type", this.adData.functionType)
        if (this.adData.functionType == 1) {
            // 复制官网地址
            let date = new Date();
            let newWebAddress = this.adData.scriptH5 + "?t=" + Math.floor(date.getTime() * 0.001);
            let success = ClipboardJS.Copy(newWebAddress);
            if (success) {
                Toast.Show("官网链接已复制，记得保存到备忘录或推荐给好友哦~");
            }
            else {
                Toast.Show("复制失败");
            }
        }
        else if (this.adData.functionType == 2) {
            // 功能尚未开放
            Toast.Show("功能尚未开放");
        }
        else if (this.adData.functionType == 3) {
            // 快速加入
            var playType = Number(this.adData.scriptH5);
            if (this.CheckAndOpenSmallGameListCallback != null)
                this.CheckAndOpenSmallGameListCallback(playType);
        }
        else if (this.adData.functionType == 5) {
            // 进入推广员
            MessageCenter.SendMessage(MessageNames.OpenUIPromoter);
        } else if (this.adData.functionType == 6) {
            MessageCenter.SendMessage(MessageNames.OpenVip);
            //打开vip
        } else if (this.adData.functionType == 7) {
            MessageCenter.SendMessage(MessageNames.OpenPay);
            //充值商店
        }
    }
}

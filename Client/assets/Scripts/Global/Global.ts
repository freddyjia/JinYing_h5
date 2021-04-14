import MVCFramework from "../MVCFramework/MVCFramework";
import MessageCenter from "../MVCFramework/MessageCenter";
import MessageNames from "../Modules/MessageNames";
import TCPNetwork from "../Network/Socket/TCPNetwork";
import TimerManager from "../Components/TimerManager";
import TCPSendTaskManager from "../Network/Socket/TCPSendTaskManager";
import XTweenUpdater from "../Tools/XTween/Base/XTweenUpdater";

class PlayerInfo {
    public playerId = "";
    public username = "";
    public headImageUrl = "";
    public phone = "";
    public vipLv = 0;
    public nameSign = "";
    public isFirstChargePackage = false;
    public headboxImage = "";
    public nickNameChanged = false;
    public leaderID = "";
    public password = "";
    public totalCharge = 0;

    public PlayerCurrency = {
        Gold: 0,
        RedEnvelops: 0,
        Integration: 0,
        SafeBox: 0,
    };

    public HeadBoxIdList = [1, 2];

    public GunIdList = [];

    public Set(playerId, username, headImageUrl, phone, vipLv, nameSign, isFirstChargePackage,
        headboxImage, nickNameChanged, leaderID, totalCharge) {
        this.playerId = playerId;
        this.username = username;
        this.headImageUrl = headImageUrl;
        this.phone = phone;
        this.vipLv = vipLv;
        this.nameSign = nameSign;
        this.isFirstChargePackage = isFirstChargePackage;
        this.headboxImage = headboxImage;
        this.nickNameChanged = nickNameChanged;
        this.leaderID = leaderID;
        this.totalCharge = totalCharge;
    }
}
class VipChannelAsset {
    // {"delayPaoMaDeng":0,"iMServerAddress":"http://103.17.92.75:9000/h5/im/client/web-mobile/index.html","replaceChart":"","isSpecialChannel":1,"delaySurprise":0,
    // "isChangeYuantoGold":0,"guideGameType":"","delayExchange":0,
    // "customerServiceAddress":"https://chat.meiqia.cn/widget/standalone.html?eid=c2778ab683606b30b6f21923497b5d08&groupid=6b8240cef9a494c2a06f34e82b61a6bf&fallback=2",
    // "promoterLink":"http://103.17.92.44:40104","delayKeFu":0,
    // "changeGameCode":"","isMailOnlyShowCT":0,"removeSubGame":"","officialWebsite":"http://103.17.92.44:40104",
    // "changeAppName":"","delayDeleteSeting":0,"delayShowDaiLi":0,"guideGame":3,"channelName":"jyios_android_officeTest","delayTuiGuangYuan":0}
    delayPaoMaDeng = 0;
    iMServerAddress = "";
    replaceChart = "";
    isSpecialChannel = 0;
    delaySurprise = 0;
    isChangeYuantoGold = 0;
    guideGameType = "";
    delayExchange = 0;
    customerServiceAddress = "";
    promoterLink = "";
    delayKeFu = 0;
    changeGameCode = "";
    isMailOnlyShowCT = 0;
    removeSubGame = "";
    officialWebsite = ""
    changeAppName = "";
    delayDeleteSeting = ""
    delayShowDaiLi = 0;
    guideGame = 0;
    channelName = "";
    delayTuiGuangYuan = 0;
    public Set(delayPaoMaDeng, iMServerAddress, replaceChart, isSpecialChannel, delaySurprise, isChangeYuantoGold, guideGameType,
        delayExchange, customerServiceAddress, promoterLink, delayKeFu, changeGameCode, isMailOnlyShowCT, removeSubGame, officialWebsite, changeAppName,
        delayDeleteSeting, delayShowDaiLi, guideGame, channelName, delayTuiGuangYuan) {
        this.delayPaoMaDeng = delayPaoMaDeng;
        this.iMServerAddress = iMServerAddress;
        this.replaceChart = replaceChart;
        this.isSpecialChannel = isSpecialChannel;
        this.delaySurprise = delaySurprise;
        this.isChangeYuantoGold = isChangeYuantoGold;
        this.guideGameType = guideGameType;
        this.delayExchange = delayExchange;
        this.customerServiceAddress = customerServiceAddress;
        this.promoterLink = promoterLink;
        this.delayKeFu = delayKeFu;
        this.changeGameCode = changeGameCode;
        this.isMailOnlyShowCT = isMailOnlyShowCT;
        this.removeSubGame = removeSubGame;
        this.officialWebsite = officialWebsite;
        this.changeAppName = changeAppName;
        this.delayDeleteSeting = delayDeleteSeting;
        this.delayShowDaiLi = delayShowDaiLi;
        this.guideGame = guideGame;
        this.channelName = channelName;
        this.delayTuiGuangYuan = delayTuiGuangYuan;

    }
}

export default class Global {

    public static isRelease = false;
    public static showLog = true;
    public static showGM = false;
    public static adapt = 0;

    public static selfIPAddress = "127.0.0.1";
    public static loginAddress = "";
    public static haveAddKeyCode = false;

    public static channel = "defaultH5";
    public static gameVersion = "1.0";

    public static isHide: boolean = false;

    public static GetLoginPath(): string {
        //return this.loginAddress + "/login";
        return this.loginAddress + "/h5login";
    }

    public static GetFilterPath(): string {
        return this.loginAddress + "/ipfilter";
    }

    public static GetLegendLoginPath(): string {
        return this.loginAddress + "/legendlogin";
    }

    public static GetRegPath(): string {
        return this.loginAddress + "/h5reg";
    }

    public static GetSmsPath(): string {
        return this.loginAddress + "/smscheck";
    }

    public static GetResetPasswordPath(): string {
        return this.loginAddress + "/resetpassword";
    }

    public static PlayerInfo: PlayerInfo = new PlayerInfo();
    public static SetPlayerInfo(playerId, username, headImageUrl, phone, vipLv, nameSign, isFirstChargePackage,
        headboxImage, nickNameChanged, leaderID, totalCharge) {
        this.PlayerInfo.Set(playerId, username, headImageUrl, phone, vipLv, nameSign, isFirstChargePackage,
            headboxImage, nickNameChanged, leaderID, totalCharge);
    }
    public static VIpChannelAsset: VipChannelAsset = new VipChannelAsset()
    public static SetVipChannelAsset(delayPaoMaDeng, iMServerAddress, replaceChart, isSpecialChannel, delaySurprise, isChangeYuantoGold, guideGameType,
        delayExchange, customerServiceAddress, promoterLink, delayKeFu, changeGameCode, isMailOnlyShowCT, removeSubGame, officialWebsite, changeAppName,
        delayDeleteSeting, delayShowDaiLi, guideGame, channelName, delayTuiGuangYuan) {
        this.VIpChannelAsset.Set(delayPaoMaDeng, iMServerAddress, replaceChart, isSpecialChannel, delaySurprise, isChangeYuantoGold, guideGameType,
            delayExchange, customerServiceAddress, promoterLink, delayKeFu, changeGameCode, isMailOnlyShowCT, removeSubGame, officialWebsite, changeAppName,
            delayDeleteSeting, delayShowDaiLi, guideGame, channelName, delayTuiGuangYuan);

    }

    public static RefreshPlayerCurrency(type, num) {
        if (type == 0) {
            this.PlayerInfo.PlayerCurrency.RedEnvelops = num;
        }
        else if (type == 1) {
            this.PlayerInfo.PlayerCurrency.Gold = num;
        }
        else if (type == 3) {
            this.PlayerInfo.PlayerCurrency.Integration = num;
        }
    }

    public static ClearPlayerInfo() {
        this.PlayerInfo = new PlayerInfo();
    }

    public static LogOut(tips: string = null) {
        if (Global.showLog == true)
            cc.error("LogOut");

        this.ClearPlayerInfo();
        MVCFramework.Clean();
        MVCFramework.Init();
        XTweenUpdater.GetInstance().Clear();

        TCPSendTaskManager.GetInstance().Clean();
        TCPNetwork.GetInstance().Clean();
        TimerManager.GetInstance().ClearAll();
        if (Global.isRelease == true) {
            MessageCenter.SendMessage(MessageNames.OpenViewLoginFormal, false);
        }
        else {
            MessageCenter.SendMessage(MessageNames.OpenViewLogin, null);
        }

    }
}


import { ViewNames } from "./MVCRegister";

export default class ViewConfigs {
    private static dicViewConfigs: { [viewName: string]: ViewConfigData } = {};

    public static Init() {
        this.dicViewConfigs = {};

        //------------>  在这里添加 viewconfig
        this.dicViewConfigs[ViewNames.ViewLogin] = new ViewConfigData(ViewNames.ViewLogin, LayerOrderNum.UINormal, "MainGame/Prefabs/UILogin", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewLoginFormal] = new ViewConfigData(ViewNames.ViewLoginFormal, LayerOrderNum.UINormal, "MainGame/Prefabs/UILoginFormal", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewHall] = new ViewConfigData(ViewNames.ViewHall, LayerOrderNum.UINormal, "MainGame/Prefabs/UIHall", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewPaoMaDeng] = new ViewConfigData(ViewNames.ViewPaoMaDeng, LayerOrderNum.UITopper, "MainGame/Prefabs/UIPaoMaDeng", LoadingStyle.None);
        this.dicViewConfigs[ViewNames.ViewSetting] = new ViewConfigData(ViewNames.ViewSetting, LayerOrderNum.UIPopup, "MainGame/Prefabs/UISetting", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewCustomService] = new ViewConfigData(ViewNames.ViewCustomService, LayerOrderNum.UIPopup, "MainGame/Prefabs/UICustomerService", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewNoviceGold] = new ViewConfigData(ViewNames.ViewNoviceGold, LayerOrderNum.UIPopup, "MainGame/Prefabs/ViewNoviceGold", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewGuide] = new ViewConfigData(ViewNames.ViewGuide, LayerOrderNum.UIPopup, "MainGame/Prefabs/ViewGuide", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewDialogNormal] = new ViewConfigData(ViewNames.ViewDialogNormal, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIDialogNormal", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewToast] = new ViewConfigData(ViewNames.ViewToast, LayerOrderNum.UITop, "MainGame/Prefabs/UIToast", LoadingStyle.None);
        this.dicViewConfigs[ViewNames.ViewGM] = new ViewConfigData(ViewNames.ViewGM, LayerOrderNum.UITop, "MainGame/Prefabs/UIGM", LoadingStyle.None);
        this.dicViewConfigs[ViewNames.ViewOpenNetworking] = new ViewConfigData(ViewNames.ViewOpenNetworking, LayerOrderNum.UITop, "MainGame/Prefabs/UIOpenNetworking", LoadingStyle.None);
        this.dicViewConfigs[ViewNames.ViewPlayerInfo] = new ViewConfigData(ViewNames.ViewPlayerInfo, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIPlayerInfo", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewChangeHead] = new ViewConfigData(ViewNames.ViewChangeHead, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIChangeHead", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewAnnounce] = new ViewConfigData(ViewNames.ViewAnnounce, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIAnnounce", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewAnnounceContent] = new ViewConfigData(ViewNames.ViewAnnounceContent, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIAnnounceContent", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewGameRule] = new ViewConfigData(ViewNames.ViewGameRule, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIGameRule", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewSafeBox] = new ViewConfigData(ViewNames.ViewSafeBox, LayerOrderNum.UIPopup, "MainGame/Prefabs/UISafeBox", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewPay] = new ViewConfigData(ViewNames.ViewPay, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIPay", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewVip] = new ViewConfigData(ViewNames.ViewVip, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIVip", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewActivity] = new ViewConfigData(ViewNames.ViewActivity, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIActivity", LoadingStyle.PopWindow);

        this.dicViewConfigs[ViewNames.ViewPaySuccess] = new ViewConfigData(ViewNames.ViewPaySuccess, LayerOrderNum.UITop, "MainGame/Prefabs/UIPaySuccess", LoadingStyle.None);
        this.dicViewConfigs[ViewNames.ViewWithdraw] = new ViewConfigData(ViewNames.ViewWithdraw, LayerOrderNum.UIPopup, "MainGame/Prefabs/WithDraw/UIWithdraw", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewBindBank] = new ViewConfigData(ViewNames.ViewBindBank, LayerOrderNum.UIPopup, "MainGame/Prefabs/WithDraw/UIBindBank", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewBindAli] = new ViewConfigData(ViewNames.ViewBindAli, LayerOrderNum.UIPopup, "MainGame/Prefabs/WithDraw/UIBindAli", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewWithdrawRecord] = new ViewConfigData(ViewNames.ViewWithdrawRecord, LayerOrderNum.UIPopup, "MainGame/Prefabs/WithDraw/UIWithdrawRecord", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewHallRank] = new ViewConfigData(ViewNames.ViewHallRank, LayerOrderNum.UIPopup, "MainGame/Prefabs/ViewHallRank", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewRegisterPhone] = new ViewConfigData(ViewNames.ViewRegisterPhone, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIRegisterPhone", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewRewardRegister] = new ViewConfigData(ViewNames.ViewRewardRegister, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIRewardRegister", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewRoleInfo] = new ViewConfigData(ViewNames.ViewRoleInfo, LayerOrderNum.UITop, "MainGame/Prefabs/ViewRoleInfo", LoadingStyle.None);
        this.dicViewConfigs[ViewNames.ViewPromoter] = new ViewConfigData(ViewNames.ViewPromoter, LayerOrderNum.UINormal, "MainGame/Prefabs/Promoter/UIPromoter", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewPromoterRule] = new ViewConfigData(ViewNames.ViewPromoterRule, LayerOrderNum.UIPopup, "MainGame/Prefabs/Promoter/UIRule", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewPromotionNumber] = new ViewConfigData(ViewNames.ViewPromotionNumber, LayerOrderNum.UIPopup, "MainGame/Prefabs/Promoter/UIPromotionNumber", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewPromoterDepositInput] = new ViewConfigData(ViewNames.ViewPromoterDepositInput, LayerOrderNum.UIPopup, "MainGame/Prefabs/Promoter/UIDepositInput", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewDayEarnings] = new ViewConfigData(ViewNames.ViewDayEarnings, LayerOrderNum.UIPopup, "MainGame/Prefabs/Promoter/UIDayEarnings", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewPromoterBigQrCode] = new ViewConfigData(ViewNames.ViewPromoterBigQrCode, LayerOrderNum.UIPopup, "MainGame/Prefabs/Promoter/UIBigQrCode", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewDayTax] = new ViewConfigData(ViewNames.ViewDayTax, LayerOrderNum.UIPopup, "MainGame/Prefabs/Promoter/UIDayTax", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewPromoterLevel] = new ViewConfigData(ViewNames.ViewPromoterLevel, LayerOrderNum.UIPopup, "MainGame/Prefabs/Promoter/UILevel", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewMarqueeContent] = new ViewConfigData(ViewNames.ViewMarqueeContent, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIMarqueeContent", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewAppTips] = new ViewConfigData(ViewNames.ViewAppTips, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIAppTips", LoadingStyle.PopWindow);

        this.dicViewConfigs[ViewNames.ViewOnlinePlayer] = new ViewConfigData(ViewNames.ViewOnlinePlayer, LayerOrderNum.UIPopup, "MainGame/Prefabs/UIOnlinePlayer", LoadingStyle.PopWindow);

        //KuaiSan
        this.dicViewConfigs[ViewNames.ViewYaoYaoLe] = new ViewConfigData(ViewNames.ViewYaoYaoLe, LayerOrderNum.UINormal, "SubGames/YaoYaoLe/Prefabs/ViewKuaiSan", LoadingStyle.FullScreen);
        //zjh
        this.dicViewConfigs[ViewNames.ViewZJH] = new ViewConfigData(ViewNames.ViewZJH, LayerOrderNum.UINormal, "SubGames/ZJH/UI/Prefab/ViewZJH", LoadingStyle.FullScreen);
        //龙虎
        this.dicViewConfigs[ViewNames.ViewDvsT] = new ViewConfigData(ViewNames.ViewDvsT, LayerOrderNum.UINormal, "SubGames/DvT/Prefabs/UIDragonVsTiger", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewDragonVsTigerRecord] = new ViewConfigData(ViewNames.ViewDragonVsTigerRecord, LayerOrderNum.UIPopup, "SubGames/DvT/Prefabs/UIDragonVsTigerRecord", LoadingStyle.PopWindow);
        //qnn
        this.dicViewConfigs[ViewNames.ViewQNN] = new ViewConfigData(ViewNames.ViewZJH, LayerOrderNum.UINormal, "SubGames/QNN/Prefabs/UIQNN", LoadingStyle.FullScreen);
        //斗地主相关
        this.dicViewConfigs[ViewNames.ViewDouDiZhu] = new ViewConfigData(ViewNames.ViewDouDiZhu, LayerOrderNum.UINormal, "SubGames/Doudizhu/UI/Prefab/ViewDoudizhu", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewDouDiZhuResult] = new ViewConfigData(ViewNames.ViewDouDiZhuResult, LayerOrderNum.UIPopup, "SubGames/Doudizhu/UI/Prefab/ViewDouDiZhuResult", LoadingStyle.PopWindow);
        //bull
        this.dicViewConfigs[ViewNames.ViewBull] = new ViewConfigData(ViewNames.ViewBull, LayerOrderNum.UINormal, "SubGames/Bull/Prefabs/UIBull", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewBullTrend] = new ViewConfigData(ViewNames.ViewBullTrend, LayerOrderNum.UIPopup, "SubGames/Bull/Prefabs/UIBullTrend", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewBullBankerList] = new ViewConfigData(ViewNames.ViewBullBankerList, LayerOrderNum.UIPopup, "SubGames/Bull/Prefabs/UIBullBankerList", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewBullSettlement] = new ViewConfigData(ViewNames.ViewBullSettlement, LayerOrderNum.UIPopup, "SubGames/Bull/Prefabs/UIBullSettlement", LoadingStyle.PopWindow);
        // r&b
        this.dicViewConfigs[ViewNames.ViewRedVsBlack] = new ViewConfigData(ViewNames.ViewRedVsBlack, LayerOrderNum.UINormal, "SubGames/RvB/Prefabs/UIRedVsBlack", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.ViewRedVsBlackrRecord] = new ViewConfigData(ViewNames.ViewRedVsBlackrRecord, LayerOrderNum.UIPopup, "SubGames/RvB/Prefabs/UIRedVsBlackRecord", LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewBY] = new ViewConfigData(ViewNames.ViewBY, LayerOrderNum.UINormal, "SubGames/BuYu/UI/Prefab/ViewBuYu", LoadingStyle.FullScreen);
        this.dicViewConfigs[ViewNames.FishScene] = new ViewConfigData(ViewNames.FishScene, LayerOrderNum.UINormal, "SubGames/BuYu/UI/Prefab/FishScene", LoadingStyle.FullScreen);
       
        //真人视讯
        this.dicViewConfigs[ViewNames.ViewLiveVideo] = new ViewConfigData(ViewNames.ViewLiveVideo, LayerOrderNum.UINormal, "SubGames/LiveVideo/Prefabs/UILiveVideo", LoadingStyle.FullScreen);
        //ob体育
        this.dicViewConfigs[ViewNames.ViewObTiYu] = new ViewConfigData(ViewNames.ViewObTiYu, LayerOrderNum.UINormal, "SubGames/ObTiYu/Prefabs/UIObTiYu", LoadingStyle.FullScreen);

    }

    public static GetViewConfig(viewName) {
        return this.dicViewConfigs[viewName];
    }
}

//表数据里面的layer字段值
/**
 * UITopper 和 UITop 特性一样，只是层级高一级
 */
export enum LayerOrderNum {
    UINormal = 1,
    UIPopup = 2,
    UITop = 3,
    UITopper = 4,
}

//界面加载显示形式
export enum LoadingStyle {
    FullScreen = 1,//全屏带加载条
    PopWindow = 2,//弹窗加载
    None = 3//不带加载,通常为top层所用
}

export class ViewConfigData {
    public viewName: string;
    public layer: LayerOrderNum;
    public prefabPath: string;
    public loadingStyle: LoadingStyle;

    /**
     * 
     * @param viewName viewName
     * @param layer 层级
     * @param prefabPath prefabPath
     * @param loadingStyle 是否显示加载界面，一般资源量多的需要显示加载界面
     */
    constructor(viewName: string, layer: LayerOrderNum, prefabPath: string, loadingStyle: LoadingStyle) {
        this.viewName = viewName;
        this.layer = layer;
        this.prefabPath = prefabPath;
        this.loadingStyle = loadingStyle;
    }
}

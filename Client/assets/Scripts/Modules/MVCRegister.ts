import Model from "../MVCFramework/Model";
import View from "../MVCFramework/View";
import Controller from "../MVCFramework/Controller";
import MessageNames from "./MessageNames";
import ControllerHall from "./Controllers/ControllerHall";
import ModelHall from "./Models/ModelHall";
import ModelLogin from "./Models/ModelLogin";
import ViewLogin from "./Views/ViewLogin";
import ControllerLogin from "./Controllers/ControllerLogin";
import ModelEnterBattle from "./Models/ModelEnterBattle";
import ControllerDialogNormal from "./Controllers/ControllerDialogNormal";
import ViewDialogNormal from "./Views/ViewDialogNormal";
import ViewToast from "./Views/ViewToast";
import ControllerToast from "./Controllers/ControllerToast";
import ModelGM from "./Models/ModelGM";
import ViewGM from "./Views/ViewGM";
import ControllerGM from "./Controllers/ControllerGM";
import ViewHall from "./Views/Hall/ViewHall";
import ViewOpenNetworking from "./Views/ViewOpenNetworking";
import ControllerOpenNetworking from "./Controllers/ControllerOpenNetworking";
import ControllerOnlinePlayer from "./Controllers/ControllerOnlinePlayer";
import ModelRecord from "./Models/ModelRecord";
import ViewOnlinePlayer from "./Views/ViewOnlinePlayer";
import ModelAnnounce from "./Models/ModelAnnounce";
import ViewAnnounce from "./Views/ViewAnnounce";
import ControllerAnnounce from "./Controllers/ControllerAnnounce";
import ViewGameRule from "./Views/ViewGameRule";
import ControllerGameRule from "./Controllers/ControllerGameRule";
import ViewChangeHead from "./Views/ViewChangeHead";
import ControllerPlayerInfo from "./Controllers/ControllerPlayerInfo";
import ModelPlayerInfo from "./Models/ModelPlayerInfo";
import ViewPlayerInfo from "./Views/ViewPlayerInfo";
import ViewSetting from "./Views/ViewSetting";
import ControllerSetting from "./Controllers/ControllerSetting";
import ViewCustomService from "./Views/ViewCustomService";
import ControllerCustomService from "./Controllers/ControllerCustomService";
import ModelSafeBox from "./Models/ModelSafeBox";
import ViewSafeBox from "./Views/ViewSafeBox";
import ControllerSafeBox from "./Controllers/ControllerSafeBox";
import ViewPay from "./Views/ViewPay";
import ControllerPay from "./Controllers/ControllerPay";
import ModelPay from "./Models/ModelPay";
import ControllerRecord from "./Controllers/ControllerRecord";
import ModelWithdraw from "./Models/ModelWithdraw";
import ViewWithdraw from "./Views/ViewWithdraw";
import ControllerWithdraw from "./Controllers/ControllerWithdraw";
import ViewBindBank from "./Views/ViewBindBank";
import ModelHallRank from "./Models/ModelHallRank";
import ViewHallRank from "./Views/ViewHallRank";
import ControllerHallRank from "./Controllers/ControllerHallRank";
import ViewBindAli from "./Views/ViewBindAli";
import ModelBull from "../SubGames/Bull/ModelBull";
import ViewBull from "../SubGames/Bull/ViewBull";
import ControllerBull from "../SubGames/Bull/ControllerBull";
import ViewWithdrawRecord from "./Views/ViewWithdrawRecord";
import ViewRegisterPhone from "./Views/ViewRegisterPhone";
import ControllerRegisterPhone from "./Controllers/ControllerRegisterPhone";
import ViewRewardRegister from "./Views/ViewRewardRegister";
import ControllerRewardRegister from "./Controllers/ControllerRewardRegister";
import MessageNamesBull from "../SubGames/Bull/MessageNamesBull";
import ViewLoginFormal from "./Views/ViewLoginFormal";
import ControllerLoginFormal from "./Controllers/ControllerLoginFormal";
import ModelQNiuNiu from "../SubGames/QNiuNiu/ModelQNiuNiu";
import ControllerQNiuNiu from "../SubGames/QNiuNiu/ControllerQNiuNiu";
import ViewQNN from "../SubGames/QNiuNiu/ViewQNN";
import MessageNamesQNiuNiu from "../SubGames/QNiuNiu/MessageNamesQNiuNiu";
import ModelDragonVsTiger from "../SubGames/DVT/ModelDragonVsTiger";
import ViewDragonVsTiger from "../SubGames/DVT/ViewDragonVsTiger";
import ViewDragonVsTigerRecord from "../SubGames/DVT/ViewDragonVsTigerRecord";
import ControllerDragonVsTiger from "../SubGames/DVT/ControllerDragonVsTiger";
import ModelPaoMaDeng from "./Models/ModelPaoMaDeng";
import ViewPaoMaDeng from "./Views/ViewPaoMaDeng";
import ControllerPaoMaDeng from "./Controllers/ControllerPaoMaDeng";
import ViewRoleInfo from "./Views/ViewRoleInfo";
import ControllerRoleInfo from "./Controllers/ControllerRoleInfo";
import ViewBullSettlement from "../SubGames/Bull/ViewBullSettlement";
import ViewPromoter from "./Views/ViewPromoter";
import ControllerPromoter from "./Controllers/ControllerPromoter";
import ModelPromoter from "./Models/ModelPromoter";
import ViewPromoterRule from "./Views/ViewPromoterRule";
import ViewPromotionNumber from "./Views/ViewPromotionNumber";
import ViewPromoterDepositInput from "./Views/ViewPromoterDepositInput";
import ViewDayEarnings from "./Views/ViewDayEarnings";
import ViewPromoterBigQrCode from "./Views/ViewPromoterBigQrCode";
import ViewDayTax from "./Views/ViewDayTax";
import ViewPromoterLevel from "./Views/ViewPromoterLevel";
import ViewPaySuccess from "./Views/ViewPaySuccess";
import ViewMarqueeContent from "./Views/ViewMarqueeContent";
import ViewAppTips from "./Views/ViewAppTips";
import ViewGuide from "./Views/ViewGuide";
import ViewNoviceGold from "./Views/ViewNoviceGold";
import ModelGuide from "./Models/ModelGuide";
import ControllerGuide from "./Controllers/ControllerGuide";
import ViewBullTrend from "../SubGames/Bull/ViewBullTrend";
import ViewBullBankerList from "../SubGames/Bull/ViewBullBankerList";
import ViewAnnounceContent from "./Views/ViewAnnounceContent";
// import ModelBY from "../SubGames/BuYu/ModelBY";
// import ViewBY from "../SubGames/BuYu/ViewBY";
// import ControllerBY from "../SubGames/BuYu/ControllerBY";
// import MessageNamesBY from "../SubGames/BuYu/MessageNamesBY";
import ControllerRedVsBlack from "../SubGames/RvB/ControllerRedVsBlack";
import ModelRedVsBlack from "../SubGames/RvB/ModelRedVsBlack";
import ViewRedVsBlackRecord from "../SubGames/RvB/ViewRedVsBlackRecord";
import ViewRedVsBlack from "../SubGames/RvB/ViewRedVsBlack";
import ModelYaoYaoLe from "../SubGames/KuaiSan/ModelYaoYaoLe";
import ViewYaoYaoLe from "../SubGames/KuaiSan/ViewYaoYaoLe";
import ControllerYaoYaoLe from "../SubGames/KuaiSan/ControllerYaoYaoLe";
import MessageNamesYaoYaoLe from "../SubGames/KuaiSan/MessageNamesYaoYaoLe";

import ModelLiveVideo from "../SubGames/LiveVideo/ModelLiveVideo";
import ViewLiveVideo from "../SubGames/LiveVideo/ViewLiveVideo";
import MessageNamesLiveVideo from "../SubGames/LiveVideo/MessageNamesLiveVideo";
import ControllerLiveVideo from "../SubGames/LiveVideo/ControllerLiveVideo";
import ModelObTiYu from "../SubGames/ObTiYu/ModelObTiYu";
import ViewObTiYu from "../SubGames/ObTiYu/ViewObTiYu";
import MessageNamesObTiYu from "../SubGames/ObTiYu/MessageNamesObTiYu";
import ControllerObTiyu from "../SubGames/ObTiYu/ControllerObTiYu";
import ModelVip from "./Models/ModelVip";
import ControllerVip from "./Controllers/ControllerVip";
import ViewVip from "./Views/Vip/ViewVip";
import ModelActivity from "./Models/ModelActivity";
import ViewActivity from "./Views/ViewActivity";
import ControllerActivity from "./Controllers/ControllerActivity";
import ModelBuYu from "../SubGames/GameBuyu/ModelBuyu";
import ViewBuyu from "../SubGames/GameBuyu/ViewBuyu";
import ControllerBuyu from "../SubGames/GameBuyu/ControllerBuyu";
import MessageNamesBY from "../SubGames/GameBuyu/MessageNamesBY";
import FishScene from "../SubGames/GameBuyu/Buyu/FishScene";


//---------->>>>> ModelNames
export class ModelNames {
    public static ModelDragonVsTiger = "ModelDragonVsTiger";
    public static ModelLogin = "ModelLogin";
    public static ModelHall = "ModelHall";
    public static ModelPaoMaDeng = "ModelPaoMaDeng";
    public static ModelEnterBattle = "ModelEnterBattle";
    public static ModelGM = "ModelGM";
    public static ModelZJH = "ModelZJH";
    public static ModelRedVsBlack = "ModelRedVsBlack";
    public static ModelRecord = "ModelRecord";
    public static ModelYaoYaoLe = "ModelYaoYaoLe";
    public static ModelQNiuNiu = "ModelQNiuNiu";
    public static ModelPlayerInfo = "ModelPlayerInfo";
    public static ModelAnnounce = "ModelAnnounce";
    public static ModelPay = "ModelPay";
    public static ModelSafeBox = "ModelSafeBox";
    public static ModelWithdraw = "ModelWithdraw";
    public static ModelHallRank = "ModelHallRank";
    public static ModelRoleInfo = "ModelRoleInfo";
    public static ModelPromoter = "ModelPromoter";

    // 斗地主
    public static ModelDouDiZhu = "ModelDouDiZhu";
    public static ModelBull = "ModelBull";

    //新手
    public static ModelGuide = "ModelGuide";

    public static ModelBY = "ModelBY";
    //真人视讯
    public static ModelLiveVideo = "ModelLiveVideo";
    //ob体育
    public static ModelObTiYu = "ModelObTiYu";
    //VIP
    public static ModelVip = "ModelVip";
    //活动
    public static ModelActivity = "ModelActivity";

}

//---------->>>>> ViewNames
export class ViewNames {
    public static ViewLogin = "ViewLogin";
    public static ViewLoginFormal = "ViewLoginFormal";
    public static ViewHall = "ViewHall";
    public static ViewPaoMaDeng = "ViewPaoMaDeng";
    public static ViewDvsT = "ViewDvsT";
    public static ViewSetting = "ViewSetting";
    public static ViewCustomService = "ViewCustomService";
    public static ViewYaoYaoLe = "ViewYaoYaoLe";
    public static ViewDialogNormal = "ViewDialogNormal";
    public static ViewToast = "ViewToast";
    public static ViewGM = "ViewGM";
    public static ViewZJH = "ViewZJH";
    public static ViewQNN = "ViewQNN";
    public static ViewRoleInfo = "ViewRoleInfo";
    public static ViewOpenNetworking = "ViewOpenNetworking";
    public static ViewOnlinePlayer = "ViewOnlinePlayer";
    public static ViewPlayerInfo = "ViewPlayerInfo";
    public static ViewChangeHead = "ViewChangeHead";
    public static ViewAnnounce = "ViewAnnounce";
    public static ViewAnnounceContent = "ViewAnnounceContent";
    public static ViewGameRule = "ViewGameRule";
    public static ViewSafeBox = "ViewSafeBox";
    public static ViewPay = "ViewPay";
    public static ViewWithdraw = "ViewWithdraw";
    public static ViewBindBank = "ViewBindBank";
    public static ViewHallRank = "ViewHallRank";
    public static ViewBindAli = "ViewBindAli";
    public static ViewWithdrawRecord = "ViewWithdrawRecord";
    public static ViewRegisterPhone = "ViewRegisterPhone";
    public static ViewRewardRegister = "ViewRewardRegister";

    // 斗地主相关
    public static ViewDouDiZhu = "ViewDouDiZhu";
    public static ViewDouDiZhuResult = "ViewDouDiZhuResult";
    // 斗地主结束

    public static ViewRedVsBlack = "ViewRedVsBlack";
    public static ViewDragonVsTigerRecord = "ViewDragonVsTigerRecord";
    public static ViewRedVsBlackrRecord = "ViewRedVsBlackrRecord";

    public static ViewBull = "ViewBull";
    public static ViewBullTrend = "ViewBullTrend";
    public static ViewBullBankerList = "ViewBullBankerList";
    public static ViewBullSettlement = "ViewBullSettlement";

    public static ViewPaySuccess = "ViewPaySuccess";

    //推广员
    public static ViewPromoter = "ViewPromoter";
    public static ViewPromoterRule = "ViewPromoterRule";
    public static ViewPromotionNumber = "ViewPromotionNumber";
    public static ViewPromoterDepositInput = "ViewPromoterDepositInput";
    public static ViewDayEarnings = "ViewDayEarnings";
    public static ViewPromoterBigQrCode = "ViewPromoterBigQrCode";
    public static ViewDayTax = "ViewDayTax";
    public static ViewPromoterLevel = "ViewPromoterLevel";

    public static ViewMarqueeContent = "ViewMarqueeContent";
    public static ViewAppTips = "ViewAppTips";

    //新手
    public static ViewGuide = "ViewGuide";
    public static ViewNoviceGold = "ViewNoviceGold";

    public static ViewBY = "ViewBY";
    //真人视讯
    public static ViewLiveVideo = "ViewLiveVideo";
    //ob体育
    public static ViewObTiYu = "ViewObTiYu";
    //Vip
    public static ViewVip = "ViewVip";
    //活动
    public static ViewActivity = "ViewActivity";

    public static FishScene = "BYScene";

}

//---------->>>>> ControllerNames
export class ControllerNames {
    public static ControllerTest1 = "ControllerTest1";
    public static ControllerTest2 = "ControllerTest2";
    public static ControllerTestPop1 = "ControllerTestPop1";
    public static ControllerTestTop1 = "ControllerTestTop1";
    public static ControllerTest3 = "ControllerTest3";
    public static ControllerLogin = "ControllerLogin";
    public static ControllerLoginFormal = "ControllerLoginFormal";
    public static ControllerHall = "ControllerHall";
    public static ControllerPaoMaDeng = "ControllerPaoMaDeng";
    public static ControllerDragonVsTiger = "ControllerDragonVsTiger";
    public static ControllerYaoYaoLe = "ControllerYaoYaoLe";
    public static ControllerDialogNormal = "ControllerDialogNormal";
    public static ControllerToast = "ControllerToast";
    public static ControllerGM = "ControllerGM";
    public static ControllerZJH = "ControllerZJH";
    public static ControllerQNiuNiu = "ControllerQNiuNiu";
    public static ControllerRoleInfo = "ControllerRoleInfo";
    public static ControllerOpenNetworking = "ControllerOpenNetworking";

    public static ControllerOnlinePlayer = "ControllerOnlinePlayer";
    public static ControllerSetting = "ControllerSetting";
    public static ControllerCustomService = "ControllerCustomService";
    public static ControllerPlayerInfo = "ControllerPlayerInfo";
    public static ControllerAnnounce = "ControllerAnnounce";
    public static ControllerGameRule = "ControllerGameRule";
    public static ControllerPay = "ControllerPay";
    public static ControllerRedVsBlack = "ControllerRedVsBlack";

    // 斗地主
    public static ControllerDouDiZhu = "ControllerDouDiZhu";
    // public static ControllerDouDiZhuResult = "ControllerDouDiZhuResult";
    // 斗地主结束

    //新手
    public static ControllerGuide = "ControllerGuide";

    public static ControllerSafeBox = "ControllerSafeBox";
    public static ControllerRecord = "ControllerRecord";

    public static ControllerWithdraw = "ControllerWithdraw";
    public static ControllerHallRank = "ControllerHallRank";
    public static ControllerRegisterPhone = "ControllerRegisterPhone";
    public static ControllerRewardRegister = "ControllerRewardRegister";

    public static ControllerBull = "ControllerBull";

    public static ControllerPromoter = "ControllerPromoter";

    public static ControllerBY = "ControllerBY";

    public static ControllerLiveVideo = "ControllerLiveVideo";
    public static ControllerObTiYu = "ControllerObTiYu";

    //Vip
    public static ControllerVip = "ControllerVip";
    //活动
    public static ControllerActivity = "ControllerActivity";

}

export class MVCRegister {
    public static AddModels() {
        this.dicModels = {};

        //---------->>>>> Register Models HERE

        this.dicModels[ModelNames.ModelLogin] = () => {
            return new ModelLogin();
        };
        this.dicModels[ModelNames.ModelHall] = () => {
            return new ModelHall();
        };
        this.dicModels[ModelNames.ModelPaoMaDeng] = () => {
            return new ModelPaoMaDeng();
        };
        this.dicModels[ModelNames.ModelEnterBattle] = () => {
            return new ModelEnterBattle();
        };
        this.dicModels[ModelNames.ModelGM] = () => {
            return new ModelGM();
        };
        this.dicModels[ModelNames.ModelPlayerInfo] = () => {
            return new ModelPlayerInfo();
        };
        this.dicModels[ModelNames.ModelAnnounce] = () => {
            return new ModelAnnounce();
        };
        this.dicModels[ModelNames.ModelPay] = () => {
            return new ModelPay();
        };
        this.dicModels[ModelNames.ModelSafeBox] = () => {
            return new ModelSafeBox();
        };
        this.dicModels[ModelNames.ModelWithdraw] = () => {
            return new ModelWithdraw();
        };
        this.dicModels[ModelNames.ModelHallRank] = () => {
            return new ModelHallRank();
        };
        this.dicModels[ModelNames.ModelDragonVsTiger] = () => {
            return new ModelDragonVsTiger();
        };
        this.dicModels[ModelNames.ModelRecord] = () => {
            return new ModelRecord();
        };
        this.dicModels[ModelNames.ModelSafeBox] = () => {
            return new ModelSafeBox();
        };
        this.dicModels[ModelNames.ModelBull] = () => {
            return new ModelBull();
        };
        this.dicModels[ModelNames.ModelQNiuNiu] = () => {
            return new ModelQNiuNiu();
        };
        this.dicModels[ModelNames.ModelPromoter] = () => {
            return new ModelPromoter();
        };
        //新手
        this.dicModels[ModelNames.ModelGuide] = () => {
            return new ModelGuide();
        };
        this.dicModels[ModelNames.ModelBY] = () => {
            return new ModelBuYu();
        };
        this.dicModels[ModelNames.ModelRedVsBlack] = () => {
            return new ModelRedVsBlack();
        };
        this.dicModels[ModelNames.ModelYaoYaoLe] = () => {
            return new ModelYaoYaoLe();
        };
        this.dicModels[ModelNames.ModelLiveVideo] = () => {
            return new ModelLiveVideo();
        }
        this.dicModels[ModelNames.ModelObTiYu] = () => {
            return new ModelObTiYu();
        }
        this.dicModels[ModelNames.ModelVip] = () => {
            return new ModelVip();
        }
        this.dicModels[ModelNames.ModelActivity] = () => {
            return new ModelActivity();
        }
    }

    public static AddViews() {
        this.dicViews = {};

        //---------->>>>> Register Views HERE

        this.dicViews[ViewNames.ViewLogin] = () => {
            return new ViewLogin();
        };
        this.dicViews[ViewNames.ViewLoginFormal] = () => {
            return new ViewLoginFormal();
        };
        this.dicViews[ViewNames.ViewHall] = () => {
            return new ViewHall();
        };
        this.dicViews[ViewNames.ViewPaoMaDeng] = () => {
            return new ViewPaoMaDeng();
        };
        this.dicViews[ViewNames.ViewSetting] = () => {
            return new ViewSetting();
        };
        this.dicViews[ViewNames.ViewCustomService] = () => {
            return new ViewCustomService();
        };
        this.dicViews[ViewNames.ViewDialogNormal] = () => {
            return new ViewDialogNormal();
        };
        this.dicViews[ViewNames.ViewToast] = () => {
            return new ViewToast();
        };
        this.dicViews[ViewNames.ViewGM] = () => {
            return new ViewGM();
        };
        this.dicViews[ViewNames.ViewOpenNetworking] = () => {
            return new ViewOpenNetworking();
        };
        this.dicViews[ViewNames.ViewPlayerInfo] = () => {
            return new ViewPlayerInfo();
        };
        this.dicViews[ViewNames.ViewChangeHead] = () => {
            return new ViewChangeHead();
        };
        this.dicViews[ViewNames.ViewAnnounce] = () => {
            return new ViewAnnounce();
        };
        this.dicViews[ViewNames.ViewAnnounceContent] = () => {
            return new ViewAnnounceContent();
        };
        this.dicViews[ViewNames.ViewPay] = () => {
            return new ViewPay();
        };
        this.dicViews[ViewNames.ViewPaySuccess] = () => {
            return new ViewPaySuccess();
        };
        this.dicViews[ViewNames.ViewSafeBox] = () => {
            return new ViewSafeBox();
        };
        this.dicViews[ViewNames.ViewWithdraw] = () => {
            return new ViewWithdraw();
        };
        this.dicViews[ViewNames.ViewBindBank] = () => {
            return new ViewBindBank();
        };
        this.dicViews[ViewNames.ViewHallRank] = () => {
            return new ViewHallRank();
        };
        this.dicViews[ViewNames.ViewBindAli] = () => {
            return new ViewBindAli();
        };
        this.dicViews[ViewNames.ViewWithdrawRecord] = () => {
            return new ViewWithdrawRecord();
        };
        this.dicViews[ViewNames.ViewRegisterPhone] = () => {
            return new ViewRegisterPhone();
        };
        this.dicViews[ViewNames.ViewRewardRegister] = () => {
            return new ViewRewardRegister();
        };
        this.dicViews[ViewNames.ViewSafeBox] = () => {
            return new ViewSafeBox();
        };
        this.dicViews[ViewNames.ViewDvsT] = () => {
            return new ViewDragonVsTiger();
        };
        this.dicViews[ViewNames.ViewOnlinePlayer] = () => {
            return new ViewOnlinePlayer();
        };
        this.dicViews[ViewNames.ViewGameRule] = () => {
            return new ViewGameRule();
        };
        this.dicViews[ViewNames.ViewDragonVsTigerRecord] = () => {
            return new ViewDragonVsTigerRecord();
        };
        this.dicViews[ViewNames.ViewSafeBox] = () => {
            return new ViewSafeBox();
        };
        this.dicViews[ViewNames.ViewBull] = () => {
            return new ViewBull();
        };
        this.dicViews[ViewNames.ViewBullTrend] = () => {
            return new ViewBullTrend();
        };
        this.dicViews[ViewNames.ViewBullBankerList] = () => {
            return new ViewBullBankerList();
        };
        this.dicViews[ViewNames.ViewBullSettlement] = () => {
            return new ViewBullSettlement();
        };
        this.dicViews[ViewNames.ViewQNN] = () => {
            return new ViewQNN();
        };
        this.dicViews[ViewNames.ViewRoleInfo] = () => {
            return new ViewRoleInfo();
        };
        this.dicViews[ViewNames.ViewPromoter] = () => {
            return new ViewPromoter();
        };
        this.dicViews[ViewNames.ViewPromoterRule] = () => {
            return new ViewPromoterRule();
        };
        this.dicViews[ViewNames.ViewPromotionNumber] = () => {
            return new ViewPromotionNumber();
        };
        this.dicViews[ViewNames.ViewPromoterDepositInput] = () => {
            return new ViewPromoterDepositInput();
        };
        this.dicViews[ViewNames.ViewDayEarnings] = () => {
            return new ViewDayEarnings();
        };
        this.dicViews[ViewNames.ViewPromoterBigQrCode] = () => {
            return new ViewPromoterBigQrCode();
        };
        this.dicViews[ViewNames.ViewDayTax] = () => {
            return new ViewDayTax();
        };
        this.dicViews[ViewNames.ViewPromoterLevel] = () => {
            return new ViewPromoterLevel();
        };
        this.dicViews[ViewNames.ViewMarqueeContent] = () => {
            return new ViewMarqueeContent();
        };
        this.dicViews[ViewNames.ViewAppTips] = () => {
            return new ViewAppTips();
        };

        //新手
        this.dicViews[ViewNames.ViewGuide] = () => {
            return new ViewGuide();
        };
        this.dicViews[ViewNames.ViewNoviceGold] = () => {
            return new ViewNoviceGold();
        };
        this.dicViews[ViewNames.ViewBY] = () => {
            return new ViewBuyu();
        };

        //红黑
        this.dicViews[ViewNames.ViewRedVsBlack] = () => {
            return new ViewRedVsBlack();
        };
        this.dicViews[ViewNames.ViewRedVsBlackrRecord] = () => {
            return new ViewRedVsBlackRecord();
        };

        //超级快三
        this.dicViews[ViewNames.ViewYaoYaoLe] = () => {
            return new ViewYaoYaoLe();
        };
        //真人视讯
        this.dicViews[ViewNames.ViewLiveVideo] = () => {
            return new ViewLiveVideo();
        }
        this.dicViews[ViewNames.ViewObTiYu] = () => {
            return new ViewObTiYu();
        }
        this.dicViews[ViewNames.ViewVip] = () => {
            return new ViewVip();
        }
        this.dicViews[ViewNames.ViewActivity] = () => {
            return new ViewActivity();
        }
        this.dicViews[ViewNames.FishScene] = () => {
            return new FishScene();
        }

    }

    public static AddControllers() {
        this.dicControllers = {};
        //---------->>>>> Register Controllers HERE

        this.dicControllers[ControllerNames.ControllerLogin] = () => {
            return new ControllerLogin();
        };
        this.dicControllers[ControllerNames.ControllerLoginFormal] = () => {
            return new ControllerLoginFormal();
        };
        this.dicControllers[ControllerNames.ControllerHall] = () => {
            return new ControllerHall();
        };
        this.dicControllers[ControllerNames.ControllerPaoMaDeng] = () => {
            return new ControllerPaoMaDeng();
        };
        this.dicControllers[ControllerNames.ControllerSetting] = () => {
            return new ControllerSetting();
        };
        this.dicControllers[ControllerNames.ControllerCustomService] = () => {
            return new ControllerCustomService();
        };
        this.dicControllers[ControllerNames.ControllerDialogNormal] = () => {
            return new ControllerDialogNormal();
        };
        this.dicControllers[ControllerNames.ControllerToast] = () => {
            return new ControllerToast();
        };
        this.dicControllers[ControllerNames.ControllerGM] = () => {
            return new ControllerGM();
        };
        this.dicControllers[ControllerNames.ControllerOpenNetworking] = () => {
            return new ControllerOpenNetworking();
        };
        this.dicControllers[ControllerNames.ControllerPlayerInfo] = () => {
            return new ControllerPlayerInfo();
        };
        this.dicControllers[ControllerNames.ControllerAnnounce] = () => {
            return new ControllerAnnounce();
        };
        this.dicControllers[ControllerNames.ControllerGameRule] = () => {
            return new ControllerGameRule();
        };

        this.dicControllers[ControllerNames.ControllerSafeBox] = () => {
            return new ControllerSafeBox();
        };
        this.dicControllers[ControllerNames.ControllerPay] = () => {
            return new ControllerPay();
        };
        this.dicControllers[ControllerNames.ControllerWithdraw] = () => {
            return new ControllerWithdraw();
        };
        this.dicControllers[ControllerNames.ControllerHallRank] = () => {
            return new ControllerHallRank();
        };
        this.dicControllers[ControllerNames.ControllerRegisterPhone] = () => {
            return new ControllerRegisterPhone();
        };
        this.dicControllers[ControllerNames.ControllerRewardRegister] = () => {
            return new ControllerRewardRegister();
        };
        this.dicControllers[ControllerNames.ControllerDragonVsTiger] = () => {
            return new ControllerDragonVsTiger();
        };
        this.dicControllers[ControllerNames.ControllerOnlinePlayer] = () => {
            return new ControllerOnlinePlayer();
        };
        this.dicControllers[ControllerNames.ControllerRecord] = () => {
            return new ControllerRecord();
        };
        this.dicControllers[ControllerNames.ControllerBull] = () => {
            return new ControllerBull();
        };
        this.dicControllers[ControllerNames.ControllerQNiuNiu] = () => {
            return new ControllerQNiuNiu();
        };
        this.dicControllers[ControllerNames.ControllerRoleInfo] = () => {
            return new ControllerRoleInfo();
        };
        this.dicControllers[ControllerNames.ControllerPromoter] = () => {
            return new ControllerPromoter();
        };
        //新手
        this.dicControllers[ControllerNames.ControllerGuide] = () => {
            return new ControllerGuide();
        };
        this.dicControllers[ControllerNames.ControllerBY] = () => {
            return new ControllerBuyu();
        };
        this.dicControllers[ControllerNames.ControllerRedVsBlack] = () => {
            return new ControllerRedVsBlack();
        };
        this.dicControllers[ControllerNames.ControllerYaoYaoLe] = () => {
            return new ControllerYaoYaoLe();
        };
        //真人视讯 
        this.dicControllers[ControllerNames.ControllerLiveVideo] = () => {
            return new ControllerLiveVideo();
        }
        //obTY
        this.dicControllers[ControllerNames.ControllerObTiYu] = () => {
            return new ControllerObTiyu();
        }
        //Vip
        this.dicControllers[ControllerNames.ControllerVip] = () => {
            return new ControllerVip();
        }
        this.dicControllers[ControllerNames.ControllerActivity] = () => {
            return new ControllerActivity();
        }
    }

    public static AddControllerMsgs() {
        this.dicControllerMsgListening = {};

        //---------->>>>> Register Listening Messages HERE

        this.dicControllerMsgListening[ControllerNames.ControllerLogin] = [
            MessageNames.OpenViewLogin,
            MessageNames.ReconnectSocketFail,
            MessageNames.SendReConnectMsg,
            MessageNames.ReGetToken,
            MessageNames.LegendLogin
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerLoginFormal] = [
            MessageNames.OpenViewLoginFormal,
            MessageNames.RegisterSucess,
            MessageNames.LoginShowRegisterPhone,
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerSetting] = [
            MessageNames.OpenViewSetting
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerCustomService] = [
            MessageNames.OpenCustomservice
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerHall] = [
            MessageNames.OpenViewHall,
            // MessageNames.PushHallData,
            MessageNames.RequeseHallData,
            MessageNames.SyncPlayerInfo,
            MessageNames.UpdateRewardRegister,
            MessageNames.UpdateAnnounceRedPoint,
            MessageNames.UpdateReliefTimes,
            MessageNames.GoldUpdate,
            MessageNames.SyncCurrencyRes,
            MessageNames.UpdateHallSafeBoxGold,
            MessageNames.ReconnectSocketSuccess,
            MessageNames.OpenFullScreenQRCode,
            MessageNames.OpenAppTipsView,
            MessageNames.UpdateHallGuide,
            MessageNames.OpenActivityPanel,

            //小游戏相关 --->
            MessageNames.PushMatchingResult,
            MessageNames.ReMatching,
            MessageNames.GameStatusResponseUpdate, //用于小游戏重连
            MessageNames.InitSmallGame,
            MessageNames.ExitSmallGame,
            MessageNames.GoldUpdate,
            MessageNames.EnterSmallGameFinish,
            MessageNames.OpenSmallGameWithId
            //<----小游戏相关

        ];

        this.dicControllerMsgListening[ControllerNames.ControllerPaoMaDeng] = [
            MessageNames.CheckPaoMaDeng,
            MessageNames.OpenFullScreenQRCode,
            MessageNames.HideFullScreenQRCode
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerDialogNormal] = [
            MessageNames.ShowDialog
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerToast] = [
            MessageNames.ShowToastUI
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerGM] = [
            MessageNames.ShowGM
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerOpenNetworking] = [
            MessageNames.OpenNetworkLoading
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerPlayerInfo] = [
            MessageNames.OpenPlayerInfo,
            MessageNames.SyncPlayerInfo
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerAnnounce] = [
            MessageNames.OpenAnnounce,
            MessageNames.UpdateAnnounce
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerGameRule] = [
            MessageNames.OpenGameRule,
            MessageNames.KickOutSmallGame
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerDragonVsTiger] = [
            MessageNames.OpenDragonVsTiger
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerDragonVsTiger] = [
            MessageNames.OpenDragonVsTiger,
            MessageNames.DragonVsTigerInitSmallGame,
            MessageNames.DragonVsTigerPushRoomInitData,
            MessageNames.DragonVsTigerStateChange,
            MessageNames.DragonVsTigerRoomDataChange,
            MessageNames.UpdateOtherGuyBetInfo,
            MessageNames.DragonVsTigerSeatPlayerBet,
            MessageNames.DTBetSuccess,
            MessageNames.DTBetSettlement,
            MessageNames.DTShenSuan
        ];
        this.dicControllerMsgListening[ControllerNames.ControllerRedVsBlack] = [
            MessageNames.RedVsBlackPushRoomInitData,
            MessageNames.RedVsBlackInitSmallGame,
            MessageNames.RedVsBlackStateChange,
            MessageNames.RedVsBlackRoomDataChange,
            MessageNames.RedVsBlackSeatPlayerBet,
            MessageNames.RedVsBlackUpdateOtherGuyBetInfo,
            MessageNames.RedVsBlackBetSuccess,
            MessageNames.RedVsBlackBetSettlement,
            MessageNames.RBShenSuan
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerOnlinePlayer] = [
            MessageNames.OpenSmallGameRank
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerQNiuNiu] = [
            MessageNamesQNiuNiu.ServerOpenQNiuNiu,
            MessageNamesQNiuNiu.QNNExit,
            MessageNamesQNiuNiu.QNNInitSmallGame,
            MessageNamesQNiuNiu.QNNHeadScale,
            MessageNamesQNiuNiu.QNNHeadSplash,

            MessageNamesQNiuNiu.QNNPushRoomInitData,
            MessageNamesQNiuNiu.QNNPushPlayerInfo,
            MessageNamesQNiuNiu.QNNPushPlayerLeave,
            MessageNamesQNiuNiu.QNNPushRoomStatus,
            MessageNamesQNiuNiu.QNNActionRes,
            MessageNamesQNiuNiu.QNNPushAction,

            MessageNamesQNiuNiu.QNNLocalClickQiangzhuang,
            MessageNamesQNiuNiu.QNNLocalClickZhu,
            MessageNamesQNiuNiu.QNNRandomZhuangAnimOk,
            MessageNamesQNiuNiu.QNNPlayerEnterSlot,
            MessageNamesQNiuNiu.QNNTestClick,
            MessageNamesQNiuNiu.QNNFlushPlayerCard,
            MessageNamesQNiuNiu.QNNFlyGoldPos2Pos,
            MessageNamesQNiuNiu.QNNWinOrLossGoldAnim,
            MessageNamesQNiuNiu.QNNServerNeedFlyGold,
            MessageNamesQNiuNiu.QNNFlyGoldArrivalPlayer,
            MessageNamesQNiuNiu.QNNNeedShowCardRes,
            MessageNamesQNiuNiu.QNNClickCard,
            MessageNamesQNiuNiu.QNNClickFanpai,
            MessageNamesQNiuNiu.QNNLocalPlayerHasFanpai,
            MessageNamesQNiuNiu.QNNBlockQueue,
            MessageNamesQNiuNiu.QNNPlayerHasFanpai,
            MessageNamesQNiuNiu.QNNExitBtnClick,
            MessageNamesQNiuNiu.QNNHelpBtnClick,
            MessageNamesQNiuNiu.QNNFlushIsJusge,
            MessageNamesQNiuNiu.QNNPlayAskLeave,
            MessageNamesQNiuNiu.QNNPlayAskEnter,
            MessageNamesQNiuNiu.QNNFlyGoldHappen,
            MessageNamesQNiuNiu.QNNGameStartAnimPlay,
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerBull] = [
            MessageNames.OpenViewBull,
            MessageNamesBull.InitBullRoomData,
            MessageNamesBull.BullStatusChange,
            MessageNamesBull.BullPlayerBet,
            MessageNamesBull.BullDeal,
            MessageNamesBull.BullBankListRes,
            MessageNamesBull.BullReqBankerStatusChange,
            MessageNamesBull.BullChangeBanker,
            MessageNamesBull.BullChangeSeat,
            MessageNamesBull.BullInitSmallGame,
            MessageNamesBull.PushKickOutRoom,
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerSafeBox] = [
            MessageNames.OpenSafeBox,
            MessageNames.SyncCurrencyRes
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerPay] = [
            MessageNames.OpenPay,
            MessageNames.PayServerGetMoney,
            MessageNames.ShowPayLoading,
            MessageNames.HidePayLoading,
            MessageNames.PayFlushProxyList,
            MessageNames.OpenPayURL
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerWithdraw] = [
            MessageNames.OpenWithdraw,
            MessageNames.UpdateWithdraw,
            MessageNames.UpdateWithdrawPassage,
            MessageNames.UpdateAliInfo,
            MessageNames.UpdateBankInfo,
            MessageNames.UpdateWithdrawBankList,
            MessageNames.UpdateWithdrawRecord
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerHallRank] = [
            MessageNames.OpenHallRank,
            MessageNames.ServerOpenHallRank,
            MessageNames.RefreshHallRank
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerRegisterPhone] = [
            MessageNames.OpenRegisterPhone,
            MessageNames.OpenRegisterPhoneFromPromoter,
            MessageNames.CloseRegisterPhonePanel,
            MessageNames.RegisterSucess
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerRewardRegister] = [
            MessageNames.OpenRewardRegister,
            MessageNames.HideRewardRegister
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerRecord] = [
            MessageNames.OpengameRecord,
            MessageNames.UpdateRecord
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerRoleInfo] = [
            MessageNames.OpenRoleInfo,
            MessageNames.HideRoleInfo,
            MessageNames.OpenRoleInfoBySlot
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerPromoter] = [
            MessageNames.OpenUIPromoter,
            MessageNames.OpenUIPromoterRegisterTips,
            MessageNames.UploadLeaderId,
            MessageNames.RefreshPromoterView,
            MessageNames.RefreshPromoterQRCode,
            MessageNames.ShowBigQrCodeView,
        ];

        //新手引导
        this.dicControllerMsgListening[ControllerNames.ControllerGuide] = [
            MessageNames.CheckGuide,
            MessageNames.CheckOpenRewardRegister,
            MessageNames.UploadGuideAdvance,
            MessageNames.OpenNoviceGold,
            MessageNames.PlayNoviceGoldAni,
            MessageNames.CanCloseNoviceGoldAni,
            MessageNames.OpenFinger
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerBY] = [
            MessageNamesBY.ServerOpenBY,
            MessageNamesBY.ServerAllowRematchBY,
            MessageNamesBY.BuYuInitSmallGame,
            MessageNamesBY.ExitBY,

            MessageNamesBY.RoomInfo,
            MessageNamesBY.RspRoomInfo,
            MessageNamesBY.PlayerJoin,
            MessageNamesBY.PlayerLeave,
            MessageNamesBY.AsycFishInfo,
            MessageNamesBY.AppearFishInfo,
            MessageNamesBY.LeaveRoomReq,
            MessageNamesBY.SheetBuleet,
            MessageNamesBY.SheetBuleetBack,
            MessageNamesBY.SyncBullet,
            MessageNamesBY.BulletBoom,
            MessageNamesBY.FishBossTip,
            MessageNamesBY.FireReq,
            MessageNamesBY.FireRsp,
            MessageNamesBY.BulletGoldBack,
            MessageNamesBY.reqRoomInfo,
            MessageNamesBY.SpeedUpDownBack,
            MessageNamesBY.FishGoldAnim,
            MessageNamesBY.PTUpDownBack,

            MessageNamesBY.FishDieAnimOk,
            MessageNamesBY.FishTestPos,
            MessageNamesBY.SpecialDead,
            MessageNamesBY.ReqChangeTable,
            MessageNamesBY.ChangeTable,
            MessageNamesBY.FishDead,
            MessageNamesBY.FishRecycle,
            MessageNamesBY.FishBtnAutoClick,
            MessageNamesBY.FishBtnLockClick,
            MessageNamesBY.BYToushScreen,
            MessageNamesBY.BYSendPTPosAR,
            MessageNamesBY.BYBulletHasCreate,
            MessageNamesBY.BYTestSend,
        ];

        this.dicControllerMsgListening[ControllerNames.ControllerYaoYaoLe] = [
            MessageNamesYaoYaoLe.YaoYaoLeInitSmallGame,
            MessageNamesYaoYaoLe.InitYYLRoomData,
            MessageNamesYaoYaoLe.YaoYaoLeStatusChange,
            MessageNamesYaoYaoLe.YaoYaoLePlayerBet,
            MessageNamesYaoYaoLe.YaoYaoLeRechargeSuccess,
            MessageNamesYaoYaoLe.PushKickOutRoom,
            MessageNamesYaoYaoLe.YaoYaoLeDeal,
            MessageNamesYaoYaoLe.YaoYaoLeChangeSeat
        ];
        this.dicControllerMsgListening[ControllerNames.ControllerLiveVideo] = [
            MessageNamesLiveVideo.LiveVideoInitSmallGame,
            MessageNamesLiveVideo.OpenLiveVideoShow
        ];
        this.dicControllerMsgListening[ControllerNames.ControllerObTiYu] = [
            MessageNamesObTiYu.OBTiYuInitSmallGame,
            MessageNamesObTiYu.OpenObTiYuView
        ]

        this.dicControllerMsgListening[ControllerNames.ControllerVip] = [
            MessageNames.OpenVip,
            MessageNames.VipUpdateVipDate,
            MessageNames.VipUpdateRebateDetail,
            MessageNames.VIPUpdateReceivingRecords

        ];
        this.dicControllerMsgListening[ControllerNames.ControllerActivity] = [
            MessageNames.OpenActivityHall,

        ];
    }

    //--------->  以下内容框架调用
    public static dicModels: { [modeName: string]: () => Model } = {};
    public static dicViews: { [viewName: string]: () => View } = {};
    public static dicControllers: { [controllerName: string]: () => Controller } = {};
    public static dicControllerMsgListening: { [controllerName: string]: Array<string> } = {};

    public static Init() {
        this.AddModels();
        this.AddViews();
        this.AddControllers();
        this.AddControllerMsgs();
    }
}

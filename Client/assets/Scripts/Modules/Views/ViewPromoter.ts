import View from "../../MVCFramework/View";
import { SynStandCardsData } from "../../Protos/ChessRoomBase";
import Util from "../../Tools/Util";
import AudioManager from "../../Manager/AudioManager";
import { LevelInfo, GetMinePerformanceInfoResp, ITakeRewardInfo, TakeRewardInfo, GetTakeRewardsInfoRes, GetMineRewardsInfoRes, RewardState } from "../../Protos/Promoter";
import Res from "../../Global/Res";
import NodeUtil from "../../Tools/NodeUtil";
import QRCodeComponent from "../../Components/QRCodeComponent";
import Global from "../../Global/Global";
import TimerManager from "../../Components/TimerManager";
import XTween from "../../Tools/XTween/XTween";
import TIPS from "../../Global/Tips";
import ListView, { ListViewScrollStyle, Cell } from "../../Components/ListView";
import { PromoterMsgDefine } from "../../Protos/MessageDefine";

let PromoterAtlas = "MainGame/Atlas/Promoter";

let Level2WDSYIcon = {
    [1]: 'TGY_WDSY_SXS',
    [2]: 'TGY_WDSY_CJTG',
    [3]: 'TGY_WDSY_GJTG',
    [4]: 'TGY_WDSY_ZSTG',
    [5]: 'TGY_WDSY_ZJ',
    [6]: 'TGY_WDSY_HHR',
}

let ButtonForeImageNames = [
    ["tab_texti_select_wodetuiguangma", "tab_texti_unselect_wodetuiguangma"],
    ["tab_texti_select_tuiguanggaikuang", "tab_texti_unselect_tuiguanggaikuang"],
    ["tab_texti_select_lingqushouy ", "tab_texti_unselect_lingqushouy "],
];

let IsRegister = () => {
    let phone = Global.PlayerInfo.phone || "";
    if (phone.length >= 11)
        return true;
    return false;
};

let IsPromoter = () => {
    let phone = Global.PlayerInfo.phone || "";
    if (phone.length >= 11)
        return true;

    let leaderID = Number(Global.PlayerInfo.leaderID) || 0;
    if (leaderID > 0)
        return true;

    return false;
};
///////////////////////////////////////////////////////////////////////////////
//基类
///////////////////////////////////////////////////////////////////////////////
class ViewPage {
    node: cc.Node;

    public Init(node: cc.Node) {
        this.node = node;
    }

    public Hide() {
        this.node.active = false;
    }

    public Show() {
        this.node.active = true;
    }

    public Update(viewData: any) {

    }

    public OnHideView() {

    }

    public Clean() {

    }
}
///////////////////////////////////////////////////////////////////////////////
//我的推广码
///////////////////////////////////////////////////////////////////////////////
class ViewPromoterCode extends ViewPage {
    Contect: cc.Node;
    Register: cc.Node;
    ImageQrCode: QRCodeComponent;
    ImageText: cc.Node;
    NodeShrink: cc.Node;

    UnRegister: cc.Node;
    ImgTextTips: cc.Node;

    timerID: string;
    showNodeShrink: boolean;
    viewData: any;

    GetQrCodeAddress: () => string;


    public Init(node: cc.Node) {
        super.Init(node);
        this.Contect = cc.find("Content", node);
        this.Register = cc.find("Register", this.Contect);
        this.ImageQrCode = cc.find("QrCodeBG/ImageQrCode", this.Register).getComponent(QRCodeComponent);
        this.ImageText = cc.find("ImageText", this.Register);
        this.NodeShrink = cc.find("NodeShrink", this.Contect);

        this.UnRegister = cc.find("UnRegister", this.Contect);
        this.ImgTextTips = cc.find("ImageText", this.UnRegister);

        let BtnShrink = cc.find("Content/CodeButtons/BtnShrink", node).getComponent(cc.Button);
        Util.SetClickAction(BtnShrink, () => { this.OnBtnShrinkClicked() });

        this.showNodeShrink = true;
        this.NodeShrink.active = this.showNodeShrink;
        this.NodeShrink.scale = 1;

        let ImageTextWidget = this.ImageText.getComponent(cc.Widget);
        let screenRate = cc.view.getFrameSize().width / cc.view.getFrameSize().height;
        if (screenRate > 2) {

        }
        else {

        }
    }

    public Show() {
        super.Show();

        let register = IsPromoter();
        cc.log("注册信息", Global.PlayerInfo)
        this.Register.active = register;
        this.UnRegister.active = !register;

        if (this.showNodeShrink) {
            this.timerID = TimerManager.GetInstance().CallActionDelay(() => {
                this.DoScale(new cc.Vec2(0, 1), () => {
                    this.showNodeShrink = false;
                    this.NodeShrink.active = false;
                })
            }, 5, null, 1, 0, false);
        }

        if (register == false) {
            XTween.DoScale(this.ImgTextTips, null, new cc.Vec2(0.95, 0.95), 1, -1, true).Play();
        }
        this.Update(null);
    }

    public Update(viewData: any) {
        this.viewData = viewData;
        let date = new Date();
        let curTime = Math.floor(date.getTime() / 1000);
        let newWebAddress = this.GetQrCodeAddress();
        newWebAddress = newWebAddress + "?t=" + curTime + "&playerId=" + Global.PlayerInfo.playerId;
        cc.log("加载二维码",newWebAddress)
        this.ImageQrCode.Gen(newWebAddress);
    }

    public OnBtnShrinkClicked() {
        TimerManager.GetInstance().DeleteTimer(this.timerID);

        this.showNodeShrink = !this.showNodeShrink;
        if (this.showNodeShrink)
            this.NodeShrink.active = this.showNodeShrink;

        let targetScale = this.showNodeShrink ? new cc.Vec2(1, 1) : new cc.Vec2(0, 1);
        this.DoScale(targetScale, () => {
            this.NodeShrink.active = this.showNodeShrink;
        })

        if (this.showNodeShrink) {
            this.timerID = TimerManager.GetInstance().CallActionDelay(() => {
                this.DoScale(new cc.Vec2(0, 1), () => {
                    this.showNodeShrink = false;
                    this.NodeShrink.active = false;
                })
            }, 5, null, 1, 0, false);
        }
    }

    public DoScale(endValue: cc.Vec2, callback: () => void) {
        let xt = XTween.DoScale(this.NodeShrink, null, endValue, 0.1);
        xt.SetFinishCallback(callback);
        xt.Play();
    }

    public OnHideView() {
        TimerManager.GetInstance().DeleteTimer(this.timerID);
    }
}
///////////////////////////////////////////////////////////////////////////////
//推广概况
///////////////////////////////////////////////////////////////////////////////
class ViewRewards extends ViewPage {
    Content: cc.Node;
    Register: cc.Node;
    UnRegister: cc.Node;
    ImgLevelName: cc.Sprite;
    TextWeekEarnings: cc.Label;
    TextDayEarnings: cc.Label;
    TextPlayerNum: cc.Label;
    SpineLevel: sp.Skeleton;
    TextExp: cc.Label;
    ExpProgrses: cc.ProgressBar;

    requestData: boolean;
    viewData: any;

    RequestMinePerformanceInfo: (callback: (data) => void) => void;
    GetCurLevelInfoCallback: () => any;

    public Init(node: cc.Node) {
        super.Init(node);
        this.Content = cc.find("Content", node)
        this.Register = cc.find("Register", this.Content);
        this.UnRegister = cc.find("UnRegister", this.Content);
        this.ImgLevelName = NodeUtil.SearchSprite(this.Register, "ImgLevelName");
        this.TextWeekEarnings = NodeUtil.SearchLabel(this.Register, "TextWeekEarnings");
        this.TextDayEarnings = NodeUtil.SearchLabel(this.Register, "TextDayEarnings");
        this.TextPlayerNum = NodeUtil.SearchLabel(this.Register, "TextPlayerNum");
        this.SpineLevel = NodeUtil.SearchChild(this.Register, "SpineLevel").getComponent(sp.Skeleton);
        this.TextExp = NodeUtil.SearchLabel(this.Register, "TextExp");
        this.ExpProgrses = NodeUtil.SearchChild(this.Register, "ExpProgrses").getComponent(cc.ProgressBar);
    }

    public Show() {
        super.Show();

        let register = IsPromoter();
        this.Register.active = register;
        this.UnRegister.active = !register;

        if (!register) return;

        this.RequestMinePerformanceInfo((viewData) => {
            this.requestData = true;
            this.Update(viewData);
        })
    }

    public Update(data) {
        this.viewData = data;

        let viewData = data as GetMinePerformanceInfoResp;
        let rets = this.GetCurLevelInfoCallback();
        cc.log("rests", rets)
        let levelInfo = rets[0] as LevelInfo;
        let curLevelExp = rets[1] as number;

        let getFontSize = (text: string) => {
            let fontSize = 30;
            let len = text.length;
            if (len <= 8) fontSize = 40;
            else if (len > 8 && len <= 10) fontSize = 35;
            return fontSize;
        }

        let text = Util.formatGoldText(viewData.performanceToday, false) + "元";
        this.TextWeekEarnings.string = text;
        this.TextWeekEarnings.fontSize = getFontSize(text);

        text = Util.formatGoldText(viewData.incomeToday, false) + "元";
        this.TextDayEarnings.string = text;
        this.TextDayEarnings.fontSize = getFontSize(text);

        this.TextPlayerNum.string = viewData.oneLevelSubordinatesNum + "人";

        NodeUtil.SetSpriteFrame(this.ImgLevelName, PromoterAtlas, Level2WDSYIcon[levelInfo.level])

        Util.PlaySpineEffect(this.SpineLevel, null, levelInfo.level.toString(), true, false);

        this.TextExp.string = Math.floor(curLevelExp / 100) + "/" + Math.floor(levelInfo.areaMax / 100);
        this.ExpProgrses.progress = curLevelExp / levelInfo.areaMax;
    }

    public Clean() {
        this.requestData = false;
        this.TextExp.string = "0/0";
        this.ExpProgrses.progress = 0;
    }
}
///////////////////////////////////////////////////////////////////////////////
//领取收益
///////////////////////////////////////////////////////////////////////////////
class ViewTakeRewardsItem extends Cell {
    Bg: cc.Node;
    TextDate: cc.Label;
    TextDepositNum: cc.Label;
    ImageStateZZCL: cc.Node;
    ImageStateYZZ: cc.Node;

    public static Create(node: cc.Node) {
        let item = new ViewTakeRewardsItem();
        item.Init(node);
        return item;
    }

    public Init(node: cc.Node) {
        this.content = node;

        this.Bg = cc.find("Bg", node);
        this.TextDate = cc.find("TextDate", node).getComponent(cc.Label);
        this.TextDepositNum = cc.find("TextDepositNum", node).getComponent(cc.Label);
        this.ImageStateZZCL = cc.find("ImageStateZZCL", node);
        this.ImageStateYZZ = cc.find("ImageStateYZZ", node);
    }

    public Update(itemData: TakeRewardInfo, index: number) {
        let show = false;
        if (itemData != null && itemData != undefined)
            show = true;

        this.content.active = show;
        this.Bg.active = index % 2 != 0;

        this.TextDate.string = Util.FormatDate(new Date(itemData.date));
        this.TextDepositNum.string = Util.formatGoldText(itemData.depositNum, false) + "元";

        if (itemData.state == RewardState.Issued) {
            this.ImageStateZZCL.active = false;
            this.ImageStateYZZ.active = true;
        }
        else {
            this.ImageStateZZCL.active = true;
            this.ImageStateYZZ.active = false;
        }
    }
}

class ViewTakeRewards extends ViewPage {
    Content: cc.Node;
    Register: cc.Node;
    UnRegister: cc.Node;
    TextTotalRewards: cc.Label;
    TextDeposited: cc.Label;
    TextCanDeposit: cc.Label;

    NodeListView: cc.Node;
    RewardsListView: ListView;
    RewardsItemCopy: cc.Node;
    Scrollbar: cc.Scrollbar;

    NodeNull: cc.Node;

    curPageIdx: number;
    totalPageIdx: number;
    requestData: boolean;
    viewData: GetMineRewardsInfoRes;
    cellDataList: TakeRewardInfo[] = [];

    RequestGetTakeRewardsInfo: (pageIdx: number, callback: (data) => void) => void;
    RequestGetMineRewardsInfo: (callback: (data) => void) => void;

    public Init(node: cc.Node) {
        super.Init(node);
        this.Content = cc.find("Content", node)
        this.Register = cc.find("Register", this.Content);
        this.UnRegister = cc.find("UnRegister", this.Content);
        this.TextTotalRewards = NodeUtil.SearchLabel(this.Register, "TextTotalRewards");
        this.TextDeposited = NodeUtil.SearchLabel(this.Register, "TextDeposited");
        this.TextCanDeposit = NodeUtil.SearchLabel(this.Register, "TextCanDeposit");

        this.NodeListView = cc.find("NodeListView", this.Register);
        this.RewardsListView = NodeUtil.SearchChild(this.Register, "RewardsListView").getComponent(ListView);
        this.RewardsItemCopy = NodeUtil.SearchChild(this.Register, "RewardsItemCopy");
        this.Scrollbar = NodeUtil.SearchChild(this.Register, "scrollBar").getComponent(cc.Scrollbar);

        this.NodeNull = NodeUtil.SearchChild(this.Register, "NodeNull");

        this.CreateListView();
    }

    public CreateListView() {
        cc.log("RewardsListView",this.RewardsListView)
        this.RewardsListView.Init(
            ListViewScrollStyle.Top,
            (row: number) => {
                return 53;
            },
            () => {
                return this.cellDataList.length;
            },
            () => {
                let nodeItem = cc.instantiate(this.RewardsItemCopy) as cc.Node;
                nodeItem.active = true;

                let item = ViewTakeRewardsItem.Create(nodeItem);
                return item;
            },
            (cell: Cell) => {
                let item = cell as ViewTakeRewardsItem;
                item.Update(this.cellDataList[item.row], item.row + 1);
            }
        )

        this.RewardsListView.SetVerticalScrollBar(this.Scrollbar);

        this.RewardsListView.SetScrollBottomCallback(() => {
            this.RewardsListView.SetScrollToBottomShouldCallback(false);

            if (this.curPageIdx < this.totalPageIdx) {
                this.RequestGetTakeRewardsInfo(this.curPageIdx + 1, (respData) => {
                    this.curPageIdx++;
                    this.HandleResp(respData);
                })
            }
        })
    }

    public HandleResp(data: any) {
        let respData = data as GetTakeRewardsInfoRes;
        this.totalPageIdx = respData.totalPage;
        if (this.totalPageIdx <= 0)
            this.totalPageIdx = 1;

        let enabled = this.curPageIdx < this.totalPageIdx;
        this.RewardsListView.SetScrollToBottomShouldCallback(enabled);

        respData.takeRewardInfos.forEach(element => {
            this.cellDataList.push(element);
        });

        this.UpdateListView();
    }

    public UpdateListView() {
        let empty = this.cellDataList.length == 0;
        this.NodeNull.active = empty;
        this.NodeListView.active = !empty;
        this.RewardsListView.Refresh();
    }

    public RefreshListView(cellData: TakeRewardInfo) {
        this.cellDataList.unshift(cellData);

        let totalPage = Math.ceil(this.cellDataList.length / 10);
        if (totalPage > this.totalPageIdx) {
            this.totalPageIdx = totalPage;
        }

        this.UpdateListView();
        this.RewardsListView.GetScrollView().scrollToTop();
    }

    public Show() {
        super.Show();

        let register = IsPromoter();
        this.Register.active = true;
        this.UnRegister.active = false;
        this.RewardsListView.SetScrollToBottomShouldCallback(false);

        if (register == false) {
            let respData = new GetTakeRewardsInfoRes();
            respData.totalPage = 0;
            respData.takeRewardInfos = [];
            this.HandleResp(respData);

            let viewData = new GetMineRewardsInfoRes();
            viewData.totalReward = 0;
            viewData.totalDeposited = 0;
            viewData.canDeposit = 0;
            this.Update(viewData);

            return;
        }

        if (this.cellDataList.length == 0) {
            this.RequestGetTakeRewardsInfo(1, (respData) => {
                this.HandleResp(respData);
            })
        }

        if (this.requestData) {
            this.Update(this.viewData)
            return;
        }

        this.RequestGetMineRewardsInfo((viewData) => {
            this.requestData = true;
            this.Update(viewData);
        })
    }

    public Update(viewData: any) {
        this.viewData = viewData as GetMineRewardsInfoRes;

        this.TextTotalRewards.string = Util.formatGoldText(this.viewData.totalReward, false);
        this.TextDeposited.string = Util.formatGoldText(this.viewData.totalDeposited, false);
        this.TextCanDeposit.string = Util.formatGoldText(this.viewData.canDeposit, false);
    }

    public Clean() {
        this.requestData = false;
        this.curPageIdx = 1;
        this.totalPageIdx = 1;
        this.cellDataList = [];
        this.RewardsListView.GetScrollView().scrollToTop();
        this.NodeNull.active = true;
        this.NodeListView.active = false;
    }
}
///////////////////////////////////////////////////////////////////////////////
//主界面逻辑
///////////////////////////////////////////////////////////////////////////////
export default class ViewPromoter extends View {
    viewPromoter: ViewPromoterCode;
    viewRewards: ViewRewards;
    viewTakeRewards: ViewTakeRewards;
    views: ViewPage[];

    NodePages: cc.Node;
    NodeButtons: cc.Node;
    EnterAnimation: cc.Node;
    enterSpine: sp.Skeleton;

    buttonImages: cc.Sprite[];
    buttonForeImages: cc.Sprite[];

    // 数据
    curTabIdx: number;
    curLevelExp: number;
    levelInfos: LevelInfo[];
    soundId_1: number;


    public CreateViews() {
        this.viewPromoter = new ViewPromoterCode();
        this.viewRewards = new ViewRewards();
        this.viewTakeRewards = new ViewTakeRewards();

        this.views = [];
        this.views.push(this.viewPromoter);
        this.views.push(this.viewRewards);
        this.views.push(this.viewTakeRewards);
    }

    public OnAwake() {
        this.NodePages = this.FindTransform("NodePages");
        this.NodeButtons = this.FindTransform("NodeButtons");

        this.viewPromoter.Init(cc.find("ViewPromoter", this.NodePages));
        this.viewRewards.Init(cc.find("ViewRewards", this.NodePages));
        this.viewTakeRewards.Init(cc.find("ViewTakeRewards", this.NodePages));
        this.viewTakeRewards.node.active = false;

        this.EnterAnimation = this.FindTransform("EnterAnimation");
        let EnterAnimationBtn = this.FindTransform("EnterAnimationBtn");
        this.enterSpine = this.FindTransform("pdk_xuanguan").getComponent(sp.Skeleton);
        Util.SetClickAction(EnterAnimationBtn.getComponent(cc.Button), () => {
            AudioManager.GetInstance().SoundStop(this.soundId_1);
            this.EnterAnimation.active = false;
        })

        this.buttonImages = [];
        this.buttonForeImages = [];
        for (let i = 1; i <= 3; i++) {
            let button = this.FindTransform("BtnPage" + i);
            this.buttonImages.push(cc.find("ButtonBg", button).getComponent(cc.Sprite));
            this.buttonForeImages.push(cc.find("ButtonBg/Text", button).getComponent(cc.Sprite));
        }

        //todo
    }

    public SetViewData(viewData: any) {
        this.curLevelExp = viewData["curLevelExp"];
        this.levelInfos = viewData["levelInfos"];
    }

    public OnShowView() {
        AudioManager.GetInstance().SoundPlay(Res.Audios.SoundPromoterEnter, false, (audioId) => {
            this.soundId_1 = audioId;
        });

        this.EnterAnimation.active = true;
        Util.PlaySpineEffect(this.enterSpine, () => {
            this.EnterAnimation.active = false;
        }, "1", false, false);

        this.views.forEach(view => {
            view.Clean();
        });

        this.curTabIdx = 1;
        this.ShowPageView(1);
    }

    public OnHideView() {
        this.views.forEach(view => {
            view.OnHideView();
        });
    }

    public OnTabClicked(idx: number) {
        if (this.curTabIdx == idx)
            return;

        this.curTabIdx = idx;
        this.ShowPageView(idx);
    }

    public ShowPageView(idx: number) {
        this.views.forEach(view => {
            view.Hide();
        });

        this.ChangeButtonState(idx);
        this.views[idx - 1].Show();
    }

    public ChangeButtonState(idx: number) {
        for (let i = 1; i <= 3; i++) {
            let btnImage = this.buttonImages[i - 1];
            let btnForeImage = this.buttonForeImages[i - 1];

            if (i == idx) {
                //cc.log(ButtonForeImageNames[i-1][0])
                NodeUtil.SetSpriteFrame(btnImage, Res.Atlas.Commons, "tab_select");
                NodeUtil.SetSpriteFrame(btnForeImage, PromoterAtlas, ButtonForeImageNames[i - 1][0]);
            }
            else {
                NodeUtil.SetSpriteFrame(btnImage, Res.Atlas.Commons, "tab_unselect");
                NodeUtil.SetSpriteFrame(btnForeImage, PromoterAtlas, ButtonForeImageNames[i - 1][1]);
                cc.log(ButtonForeImageNames[i - 1][1])
            }
        }
    }

    public RefreshPromoterQRCode() {
        this.viewPromoter.Update(this.viewPromoter.viewData);
    }
}

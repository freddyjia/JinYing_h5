import View from "../../MVCFramework/View";
import XTween from "../../Tools/XTween/XTween";
import { XTweenCurvType } from "../../Tools/XTween/Base/XTweenCurv";
import XTweenerGroup, { XTweenerGroupAddMode } from "../../Tools/XTween/Base/XTweenerGroup";
import Util from "../../Tools/Util";
import { BullBanker, BullSeatPlayerInfo, BullSingleAreaInfo, CardInfoCustom, BullRoundResult, SeatBetData } from "./ModelBull";
import BullConfig from "./BullConfig";
import Global from "../../Global/Global";
import Res from "../../Global/Res";
import { Random } from "../../Tools/Random";
import { BetResult, BRNNRecord, ReadyBankerInfo } from "../../Protos/BaiRenNiuNiu";
import Bezier from "../../Tools/Bezier";
import { PokerItem } from "../Common/PokerCommon";
import NodeUtil from "../../Tools/NodeUtil";
import TimerManager from "../../Components/TimerManager";
import AudioManager from "../../Manager/AudioManager";
import XTweener from "../../Tools/XTween/Base/XTweener";
import ccC from "../../Tools/ccC";

export default class ViewBull extends View 
{
    ContentPanel:cc.Node;

    GameBg:cc.Sprite;
    DeskImage:cc.Sprite;
    playerName:cc.Label;
    playerGold:cc.Label;
    playerIcon:cc.Node;
    MyselfWinSpine:sp.Skeleton;
    MyselfWinGoldText:cc.Label;
    MyselfLoseGoldText:cc.Label;
    MyselfWinGoldAnimation:cc.Node;

    pokesTf:cc.Node;
    pokerItemTemp:cc.Node;
    PokeBanker:cc.Node;
    SpineStartBet:sp.Skeleton;
    SpineStopBet:sp.Skeleton;
    SpineWaitForNextRound:sp.Skeleton;
    TimerTf:cc.Node;
    TimerText:cc.Label;
    ImgTip:cc.Sprite;
    ChipTf:cc.Node;
    ObserveTf:cc.Node;

    BankerHead:cc.Node;
    TextTimesLabelTf:cc.Label;
    TextContinueBankerTimes:cc.Label;
    TextBankerGoldNum:cc.Label;
    BankerGoldTf:cc.Node;
    TextBankerName:cc.Label;
    BankerWinGoldText:cc.Label;
    BankerLoseGoldText:cc.Label;
    BankerWinSpine:sp.Skeleton;
    BankerWinGoldAnimation:cc.Node;

    BtnReqBankerList:cc.Node;
    BtnQuitBankerList:cc.Node;

    PlayersPanelTf:cc.Node;
    BankerContentTf:cc.Node;
    SpineChip:sp.Skeleton;

    SeatPlayerName0:cc.Label;
    SeatPlayerName1:cc.Label;

    // 投注
    BetItemDic:{[nodeName:string]:cc.Node} = {};
    BetAreaDic:{[nodeName:string]:cc.Node} = {};
    betEffectDic:{[nodeName:string]:cc.Node} = {};
    BetAreaWinDic:{[nodeName:string]:sp.Skeleton} = {};
    TextAllBetGoldDic:{[nodeName:string]:cc.Label} = {};
    TextMyBetGoldDic:{[nodeName:string]:cc.Label} = {};
    PokeDic:{[nodeName:string]:cc.Node} = {};
    ShensuanziMarkDic:{[nodeName:string]:cc.Node} = {};
    FeixingxingDic:{[nodeName:string]:Bezier} = {};
    FeixingxingOriPosDic:{[nodeName:string]:cc.Vec3} = {};
    FeixingxingCenterDic:{[nodeName:string]:cc.Node} = {};
    WinInfoDic:{[nodeName:string]:cc.Label} = {};
    LoseInfoDic:{[nodeName:string]:cc.Label} = {};
    NoInfoDic:{[nodeName:string]:cc.Sprite} = {};
    BtnBetImageDic:{[nodeName:string]:cc.Sprite} = {};

    // 发牌的贝塞尔曲线中间位置
    SpinePokerPointDic:{[nodeName:string]:sp.Skeleton} = {};
    SpinePokerPointMultipleDic:{[nodeName:string]:sp.Skeleton} = {};
    PokerPointDic:{[nodeName:string]:cc.Sprite} = {};
    PokerPointMultipleDic:{[nodeName:string]:cc.Sprite} = {};
    PokerPointBgDic:{[nodeName:string]:cc.Sprite} = {};
    BtnBetNumDic:{[nodeName:string]:cc.Node} = {};
    ChipItemDic:{[nodeName:string]:cc.Node} = {};
    centerPosiList:cc.Vec3[] = [];

    // 座位席玩家
    BtnPlayerDic:{[nodeName:string]:cc.Node} = {};
    SeatContentDic:{[nodeName:string]:cc.Node} = {};
    SeatHeadDic:{[nodeName:string]:cc.Node} = {};
    SeatNoBodyDic:{[nodeName:string]:cc.Node} = {};
    SeatCoinsDic:{[nodeName:string]:cc.Node} = {};
    SeatGoldTextDic:{[nodeName:string]:cc.Label} = {};
    WinGoldAnimationDic:{[nodeName:string]:cc.Node} = {};
    WinGoldTextDic:{[nodeName:string]:cc.Label} = {};
    LoseGoldTextDic:{[nodeName:string]:cc.Label} = {};
    SeatWinSpineDic:{[nodeName:string]:sp.Skeleton} = {};

    CanvasScale:number;
    step:number;
    selectBetNumIndex:number;
    forceExit:boolean;
    pingTimeCounter:number;
    betTime:number;
    allPoke:PokerItem[];
    timerIds:string[];
    chipSlot:cc.Node[][];
    chipPool:cc.Node[][];
    dealTotalTime:number;
    stepTime:number[];
    playId:number;

    //下注时玩家头像抖动动画列表
    betPanelAniList:{[nodeName:string]:boolean};
    //玩家收筹码时头像涨动动画列表
    getChipHeadAniList:{[nodeName:string]:boolean};
    //神算子在4门下注的情况
    godBet:boolean[];

    banker:BullBanker;
    betTimerHandler:string;
    isFirstTimeEnter:boolean = null;
    betAreaCanClick:boolean;

    singleAreaArr:BullSingleAreaInfo[];
    seatPlayers:BullSeatPlayerInfo[];
    winResultArr:BetResult[];
    allBetInfo:number[];
    myBetInfo:number[];

    bezierList:Bezier[];

    // 筹码渲染顺序
    chipZIndex = 0;

    readonly CARD_PAD:number = 23;
    readonly PICKUP_PAD:number = 6;
    readonly COIN_LIMIT:number = 100;
    readonly ONLIEN_TIME_LIMIT:number = 60*3;
    readonly PING_TIME_COUNTER:number = 20;
    readonly PlayerPanelAnimationOffset:number = 22;
    readonly PlayerPanelAnimationTime:number = 0.12;
    readonly PlayerPanelAnimationScale = new cc.Vec2(1.1, 1.1);

    public OnAwake()
    {
        this.ContentPanel = this.FindTransform("ContentPanel");

        let bottomTf = this.FindTransform("Bottom");
        this.playerName = NodeUtil.SearchLabel(bottomTf, "TextMyName");
        this.playerGold = NodeUtil.SearchLabel(bottomTf, "TextMyGold");
        this.playerIcon = this.FindTransform("MyselfInfo");
        this.MyselfWinSpine = this.FindTransform("MyselfWinSpine").getComponent(sp.Skeleton);

        let MyselfWinGoldAnimation = this.FindTransform("MyselfWinGoldAnimation");
        this.MyselfWinGoldAnimation = MyselfWinGoldAnimation;
        this.MyselfWinGoldText = NodeUtil.SearchLabel(MyselfWinGoldAnimation, "WinText");
        this.MyselfLoseGoldText = NodeUtil.SearchLabel(MyselfWinGoldAnimation, "LoseText");

        this.pokesTf = this.FindTransform("Pokes");
        this.pokerItemTemp = NodeUtil.SearchChild(this.pokesTf, "PokerItem");
        this.PokeBanker = this.FindTransform("PokeBanker");
        this.SpineWaitForNextRound = this.FindTransform("SpineWaitForNextRound").getComponent(sp.Skeleton);
        this.SpineStartBet = this.FindTransform("SpineStartBet").getComponent(sp.Skeleton);
        this.SpineStopBet = this.FindTransform("SpineStopBet").getComponent(sp.Skeleton);
        this.TimerTf = this.FindTransform("Timer");
        this.TimerText = NodeUtil.SearchLabel(this.TimerTf, "TextTimer");
        this.ImgTip = this.FindTransform("ImgTip").getComponent(cc.Sprite);
        this.ChipTf = this.FindTransform("Chip");
        this.ObserveTf = this.FindTransform("Observe");

        this.BankerHead = this.FindTransform("BankerHead");
        this.TextBankerGoldNum = this.FindTransform("TextGoldNum").getComponent(cc.Label);
        this.BankerGoldTf = this.FindTransform("BankerGold");
        this.TextBankerName = this.FindTransform("TextBankerName").getComponent(cc.Label);
        this.BankerWinGoldAnimation = this.FindTransform("BankerWinGoldAnimation");
        this.BankerWinGoldText = NodeUtil.SearchLabel(this.BankerWinGoldAnimation, "WinText");
        this.BankerLoseGoldText = NodeUtil.SearchLabel(this.BankerWinGoldAnimation, "LoseText");
        this.BankerWinSpine = this.FindTransform("BankerWinSpine").getComponent(sp.Skeleton);

        this.BtnReqBankerList = this.FindTransform("BtnReqBankerList");
        this.BtnQuitBankerList = this.FindTransform("BtnQuitBankerList");

        this.PlayersPanelTf = this.FindTransform("PlayersPanel");
        this.BankerContentTf = this.FindTransform("Banker");
        this.SpineChip = this.FindTransform("SpineChip").getComponent(sp.Skeleton);

        let betTf = this.FindTransform("Bet");
        let PokesPointTf = this.FindTransform("PokesPoint");
        for (let i = 1; i <= 4; i++)
        {
            this.BetItemDic["BetItem"+i] = cc.find("BetItem"+i,betTf);
            this.BetAreaDic["BetArea"+i] = this.FindTransform("BetArea"+i);
            this.betEffectDic["betEffect"+i] = this.FindTransform("betEffect"+i);
            this.BetAreaWinDic["BetAreaWin"+i] = this.FindTransform("BetAreaWin"+i).getComponent(sp.Skeleton);
            this.TextAllBetGoldDic["TextAllBetGold"+i] = NodeUtil.SearchLabel(betTf,"TextAllBetGold"+i);
            this.TextMyBetGoldDic["TextMyBetGold"+i] = this.FindTransform("TextMyBetGold"+i).getComponent(cc.Label);
            this.PokeDic["Poke"+i] = NodeUtil.SearchChild(this.pokesTf, "Poke"+i);
            this.ShensuanziMarkDic["ShensuanziMark"+i] = this.FindTransform("ShensuanziMark"+i);

            let Feixingxing = this.FindTransform("Feixingxing"+i);
            let bezier = Feixingxing.getComponent(Bezier);
            if (bezier == null)
                bezier = Feixingxing.addComponent(Bezier);
            this.FeixingxingDic["Feixingxing"+i] = bezier;
            this.FeixingxingOriPosDic["FeixingxingOriPos"+i] = new cc.Vec3(Feixingxing.position.x,Feixingxing.position.y, 0);
            this.FeixingxingCenterDic["FeixingxingCenter"+i] = this.FindTransform("FeixingxingCenter"+i);

            // 获取每门我自己的胜负输赢展示物件
            // 赢了
            this.WinInfoDic["WinInfo"+i] = this.FindTransform("WinInfo"+i).getComponent(cc.Label);
            // 输了
            this.LoseInfoDic["LoseInfo"+i] = this.FindTransform("LoseInfo"+i).getComponent(cc.Label);
            // 没有投注
            this.NoInfoDic["NoInfo"+i] = this.FindTransform("NoInfo"+i).getComponent(cc.Sprite);

            let iTemp = i;
            let BtnBet = this.FindTransform("BtnBet" + i);
            /*
            BtnBet.on(cc.Node.EventType.TOUCH_START, (event)=>{
                if (this.betAreaCanClick) this.betEffectDic["betEffect"+iTemp].active = true;
            }, BtnBet);
            BtnBet.on(cc.Node.EventType.TOUCH_END, (event)=>{
                if (this.betAreaCanClick) this.betEffectDic["betEffect"+iTemp].active = false;
            }, BtnBet);
            */

            this.BtnBetImageDic["BtnBetImage"+i] = BtnBet.getComponent(cc.Sprite);
        }

        // 发牌的贝塞尔曲线中间位置
        for (let i = 1; i <= 5; i++)
        {
            this.SpinePokerPointDic["SpinePokerPoint"+i] = cc.find("SpinePokerPoint"+i, PokesPointTf).getComponent(sp.Skeleton);
            this.SpinePokerPointMultipleDic["SpinePokerPointMultiple"+i] = cc.find("SpinePokerPointMultiple"+i, PokesPointTf).getComponent(sp.Skeleton);
            this.PokerPointDic["PokerPoint"+i] = cc.find("PokerPoint"+i, PokesPointTf).getComponent(cc.Sprite);
            this.PokerPointMultipleDic["PokerPointMultiple"+i] = cc.find("PokerPointMultiple"+i,PokesPointTf).getComponent(cc.Sprite);
            this.PokerPointBgDic["PokerPointBg"+i] = this.FindTransform("PokerPointBg"+i).getComponent(cc.Sprite);
            this.BtnBetNumDic["BtnBetNum"+i] = this.FindTransform("BtnBetNum"+i);
            this.ChipItemDic["ChipItem"+i] = this.FindTransform("ChipItem"+i);

            this.centerPosiList = [];
            this.centerPosiList.push(this.FindTransform("centerPosi"+i).position);
        }

        //座位席玩家
        for (let i = 0; i <= 5; i++)
        {
            this.BtnPlayerDic["BtnPlayer"+i] = this.FindTransform("BtnPlayer"+i);
            this.SeatContentDic["SeatContent"+i] = this.FindTransform("SeatContent"+i);
            this.SeatHeadDic["SeatHead"+i] = this.FindTransform("SeatHead"+i);
            this.SeatNoBodyDic["SeatNoBody"+i] = this.FindTransform("SeatNoBody"+i);
            this.SeatCoinsDic["SeatCoins"+i] = this.FindTransform("SeatCoins"+i);
            this.SeatGoldTextDic["SeatGoldText"+i] = this.FindTransform("SeatGoldText"+i).getComponent(cc.Label);
            let winGoldAnimation = this.FindTransform("WinGoldAnimation"+i);
            this.WinGoldAnimationDic["WinGoldAnimation"+i] = winGoldAnimation;
            this.WinGoldTextDic["WinGoldText"+i] = NodeUtil.SearchLabel(winGoldAnimation, "WinText");
            this.LoseGoldTextDic["LoseGoldText"+i] = NodeUtil.SearchLabel(winGoldAnimation, "LoseText");
            this.SeatWinSpineDic["SeatWinSpine"+i] = this.FindTransform("SeatWinSpine"+i).getComponent(sp.Skeleton);
        }

        this.SeatPlayerName0 = this.FindTransform("SeatPlayerName0").getComponent(cc.Label);
        this.SeatPlayerName1 = this.FindTransform("SeatPlayerName1").getComponent(cc.Label);

        this.InitInfo();
    }

    public OnAdapt()
    {
        this.ContentPanel.getComponent(cc.Widget).top = Global.adapt;
    }

    public InitInfo()
    {
        let UICanvas = cc.find("Canvas");
        this.CanvasScale = UICanvas.scaleX;
        this.step = 1;
        //当前选择的下注筹码中的第几个
        this.selectBetNumIndex = 1;
        this.forceExit = false;
        this.pingTimeCounter = 20;
        this.betTime = 0;
        //所有的扑克item
        this.allPoke = [];
        this.bezierList = [];
        //所有的Timer的id
        this.timerIds = [];
        //用于存放每个筹码区域里的筹码对象
        this.chipSlot = [[],[],[],[]];
        //筹码对象池,里面存放的是未被使用的筹码
        this.chipPool = [[],[],[],[],[]];
        //上座玩家信息
        this.seatPlayers = [];
        //发牌和结算的总时间，应和服务器从开始发牌状态到结束状态的时间长度保持一致
        this.dealTotalTime = 17;   
        //每步执行前延迟执行的时间，服务器发过来的剩余时间可以算出已经流逝了多少时间，流逝的时间超过该步前的时间总和，则不播放前面的动画
        this.stepTime = [
            0.4,0.4,0.4,0.4,1.2, 
            0.9,0.9,0.9,0.9,1.2,
            2,1.2,0.8,0.8
        ];
    }

    public CleanUpDeskAndData()
    {
        this.DeleteAllTimer();
        this.DelBetTimer();

        this.chipZIndex = 0;

        this.TimerTf.active = false;
        for (let k = 0; k < this.allPoke.length; k++)
        {
            this.allPoke[k].SetVisible(false);
        }
        
        for (let i = 1; i <= 5; i++)
        {
            this.SpinePokerPointDic["SpinePokerPoint"+i].node.active = false;
            this.SpinePokerPointMultipleDic["SpinePokerPointMultiple"+i].node.active = false;
            this.PokerPointBgDic["PokerPointBg"+i].node.active = false;
            this.PokerPointDic["PokerPoint"+i].node.active = false;
            this.PokerPointMultipleDic["PokerPointMultiple"+i].node.active = false;
        }

        for (let i = 1; i <= 4; i++)
        {
            this.WinInfoDic["WinInfo"+i].node.active = false;
            this.LoseInfoDic["LoseInfo"+i].node.active = false;
            this.NoInfoDic["NoInfo"+i].node.active = false;
            this.TextMyBetGoldDic["TextMyBetGold"+i].string = "";
            this.TextAllBetGoldDic["TextAllBetGold"+i].string = "";
            this.ShensuanziMarkDic["ShensuanziMark"+i].active = false;
            this.betEffectDic["betEffect"+i].active = false;
        }

        for (let i = 0; i < this.seatPlayers.length; i++)
        {
            if (this.seatPlayers[i].member && this.seatPlayers[i].member.playerId!=null)
            {
                this.seatPlayers[i].betGold = [0,0,0,0];
            }
        }

        for (let i = 0; i < 4; i++)
        {
            while(this.chipSlot[i].length > 0)
            {
                let objCoin = this.chipSlot[i].shift();
                objCoin.active = false;
                let chipName = Number(objCoin.name);
                this.chipPool[chipName].push(objCoin);
            }
        }

        for (let i = 0; i < 5; i++)
        {
            for (let k = 0; k < this.chipPool[i].length; k++)
            {
                this.chipPool[i][k].active = false;
            }
        }

        this.godBet = [false,false,false,false];
    }

    public DeleteAllTimer()
    {
        for (let k in this.timerIds)
        {
            TimerManager.GetInstance().DeleteTimer(this.timerIds[k]);
        }
        this.timerIds = [];
    }

    public DelBetTimer()
    {
        if (this.betTimerHandler!=null && this.betTimerHandler.length > 0)
        {
            TimerManager.GetInstance().DeleteTimer(this.betTimerHandler);
            this.betTimerHandler = null;
        }
    }

    public SetPlayId(playId:number)
    {
        this.playId = playId;
    }

    public OnShowView()
    {
        AudioManager.GetInstance().BGMPlay(BullConfig.Music.SoundBgm);

        this.ShowInitPanel();
        this.ShowPanelAfterGetData(false);

        this.betPanelAniList = {};
        this.getChipHeadAniList = {};
        this.godBet = [false,false,false,false];
    }

    public OnHideView()
    {
        this.DeleteAllTimer();
        this.DelBetTimer();
        this.isFirstTimeEnter = null;

        AudioManager.GetInstance().BGMStop();
    }

    public OnDestroy()
    {
        AudioManager.GetInstance().BGMStop();
    }

    public ExitBull()
    {
        AudioManager.GetInstance().SoundAllPause();

        this.DeleteAllTimer();
        this.DelBetTimer();
        this.DeleteAllPoke();
    }

    public DeleteAllPoke()
    {
        //Destroy所有的扑克item
        for (let i = this.allPoke.length-1; i>=0; i--)
        {
            this.allPoke[i].Destroy();
        }
        this.allPoke = [];
        this.bezierList = [];
    }

    public ShowInitPanel()
    {
        for (let i = 1; i <= 5; i++)
        {
            this.SpinePokerPointDic["SpinePokerPoint"+i].node.active = false;
            this.SpinePokerPointMultipleDic["SpinePokerPointMultiple"+i].node.active = false;
            this.PokerPointBgDic["PokerPointBg"+i].node.active = false;
            this.PokerPointDic["PokerPoint"+i].node.active = false;
            this.PokerPointMultipleDic["PokerPointMultiple"+i].node.active = false;
        }

        for (let i = 1; i <= 4; i++)
        {
            this.WinInfoDic["WinInfo"+i].node.active = false;
            this.LoseInfoDic["LoseInfo"+i].node.active = false;
            this.NoInfoDic["NoInfo"+i].node.active = false;
            this.TextMyBetGoldDic["TextMyBetGold"+i].string = "";
            this.TextAllBetGoldDic["TextAllBetGold"+i].string = "";
            this.ShensuanziMarkDic["ShensuanziMark"+i].active = false;
            this.FeixingxingDic["Feixingxing"+i].node.active = false;
        }

        this.TimerTf.active = false;

        for (let i = 0; i <= 5; i++)
        {
            this.WinGoldAnimationDic["WinGoldAnimation"+i].active = false;
        }
        this.MyselfWinGoldAnimation.active = false;
        this.BankerWinGoldAnimation.active = false;
    }

    public ShowPanelAfterGetData(hasInit:boolean)
    {
        this.PlayersPanelTf.active = hasInit;
        this.BankerContentTf.active = hasInit;
    }

    public UpdateBetNumBtns(restGold:number, maxMutiple:number, bankerInfo:BullBanker, myBetTotal:number)
    {
        if (restGold == undefined)
            restGold = 0;
        restGold = restGold - myBetTotal*(maxMutiple-1);

        let canBet = false;

        if (this.selectBetNumIndex == 0)
        {
            this.selectBetNumIndex = 5;
        }

        for (let i = 5; i > 0; i--)
        {
            let interactable = false;
            if (bankerInfo.playerId == Global.PlayerInfo.playerId)
                interactable = false;
            else
                interactable = restGold >= BullConfig.ConstNiuNiu.GoldPerBet[i]*maxMutiple;

            this.EnableBetNumBtn(interactable, i);

            if (interactable)
                canBet = true;

            if (interactable == false && this.selectBetNumIndex == i)
            {
                this.BetNumSelect(i - 1);
            }
        }

        if (canBet)
        {
            if (this.selectBetNumIndex < 1)
                this.BetNumSelect(1);
        }
    }

    /**
     * 打开或关闭所有投注按钮
     * @param enable 
     */
    public EnableBetNumBtns(enable:boolean)
    {
        for (let i = 1; i <= 5; i++)
        {
            this.EnableBetNumBtn(enable, i);
        }

        if (enable)
        {
            if (this.selectBetNumIndex <= 0)
                this.BetNumSelect(1);
        }
        else
        {
            this.SpineChip.node.active = false;
        }
    }

    /**
     * 打开或关闭指定下标的投注按钮
     */
    public EnableBetNumBtn(enable:boolean, i:number)
    {
        let btnNode = this.BtnBetNumDic["BtnBetNum"+i]
        let btn = btnNode.getComponent(cc.Button);
        let btnImg = btnNode.getComponent(cc.Sprite);

        btn.interactable = enable;

        if (enable)
        {
            if (i == this.selectBetNumIndex)
            {
                btnNode.scale = 1.1;
                btnImg.node.color = new cc.Color(255,255,255,255);
                this.SpineChip.node.active = true;
                NodeUtil.FollowPosition(this.SpineChip.node, btnNode);
                let pos = this.SpineChip.node.position;
                this.SpineChip.node.position = new cc.Vec3(pos.x, pos.y-4, 0);
            }
            else
            {
                btnNode.scale = 1;
                btnImg.node.color = new cc.Color(255,255,255,255);
            }
        }
        else
        {
            btnNode.scale = 1;
            btnImg.node.color = new cc.Color(133,133,133,255);
        }
    }

    /**
     * 选中某个投注按钮
     * @param betNumIdx 
     */
    public BetNumSelect(betNumIdx:number)
    {
        if (betNumIdx == this.selectBetNumIndex)
            return;

        if (betNumIdx < 1)
        {
            this.SpineChip.node.active = false;
        }

        this.selectBetNumIndex = betNumIdx;

        for (let i = 1; i <= 5; i++)
        {
            let btnNode = this.BtnBetNumDic["BtnBetNum"+i];
            let btnImg = btnNode.getComponent(cc.Button);

            if (i == betNumIdx)
            {
                btnNode.scale = 1.1;
                btnImg.node.color = new cc.Color(255,255,255,255);
                this.SpineChip.node.active = true;
                NodeUtil.FollowPosition(this.SpineChip.node, btnNode);
                this.SpineChip.node.position.y += -4;
            }
            else
            {
                btnNode.scale = 1;
            }
        } 
    }

    //更新庄家信息
    public UpdateBankerView(bankerInfo:BullBanker)
    {
        this.banker = bankerInfo;

        let headImage = cc.find("HeadMask/Head",this.BankerHead).getComponent(cc.Sprite);
        let headBoxImage = cc.find("HeadBox",this.BankerHead).getComponent(cc.Sprite);

        if (bankerInfo.isRobot)
        {
            Util.SetHeadNetIcon(headImage, null);
            Util.SetHeadBox(headBoxImage, Res.DefaultHeadBoxSprite);

            this.TextBankerGoldNum.string = "88888888";
            this.TextBankerName.string = "系统庄家";
        }
        else
        {
            Util.SetHeadNetIcon(headImage, bankerInfo.headImageUrl);
            Util.SetHeadBox(headBoxImage, bankerInfo.headBox);
            this.TextBankerGoldNum.string = Util.formatGoldText(bankerInfo.gold, false);
            this.TextBankerName.string = bankerInfo.userName;
        }
    }

    public SetWaitForNextRoundVisible(isShow:boolean)
    {
        if (isShow)
        {
            Util.PlaySpineEffect(this.SpineWaitForNextRound, null, "1", true, false);
        }
        else
        {
            this.SpineWaitForNextRound.node.active = false;
        }
    }

    public ShowClock(duration:number,tipsType:number,isBet:boolean)
    {
        let betTime = duration;
        this.TimerTf.active = true;
        this.TimerText.string = betTime.toString();
        let tipImgName = "";

        if (tipsType == 1)
        {
            tipImgName = "text_tip_bet";
        }
        else
        {
            tipImgName = "text_tip_rest";
        }

        NodeUtil.SetSpriteFrame(this.ImgTip, BullConfig.Atlas.bullAtlas, tipImgName);

        this.betTime = betTime;
        this.StartTimer(isBet);
    }

    public StartTimer(isBet:boolean)
    {
        this.DelBetTimer();
        this.betTimerHandler = TimerManager.GetInstance().CallActionDelay((obj)=>{
            this.betTime--;
            if (isBet)
            {
                if (this.betTime <= 3 && this.betTime >= 0)
                {
                    AudioManager.GetInstance().SoundPlay(BullConfig.Music.SoundCountDown);
                }
            }
            this.TimerText.string = this.betTime.toString();
            if (this.betTime < 0)
            {
                this.betTime = 0;
                this.TimerTf.active = false;
                this.DelBetTimer();
            }
        }, 1, null, -1, 1, false);
    }

    public SetBetAreaClickEnabled(canClick:boolean)
    {
        this.betAreaCanClick = canClick;
        /*
        for (let i = 1; i<=4; i++)
        {
            this.BtnBetImageDic["BtnBetImage"+i].getComponent(cc.Button).interactable = canClick;
        }
        */
    }

    // 进入游戏初始化状态的时候，更新桌上下注筹码和数据
    public UpdateBetAreaView(allBetInfo:number[],myBetInfo:number[],godBet:boolean[])
    {
        for (let i = 0; i < allBetInfo.length; i++)
        {
            let betNum = allBetInfo[i];
            this.TextAllBetGoldDic["TextAllBetGold"+(i+1)].string = (betNum/100).toString();
            this.CreateChipsByGold(betNum/100, i+1);
        }
        for (let i = 0; i < myBetInfo.length; i++)
        {
            let myBetNum = myBetInfo[i];
            if (myBetNum == 0)
            {
                this.TextMyBetGoldDic["TextMyBetGold"+(i+1)].string = "";
            }
            else
            {
                this.TextMyBetGoldDic["TextMyBetGold"+(i+1)].string = (myBetNum/100).toString();
            }
        }
        for (let i = 1; i <= 4; i++)
        {
            this.ShensuanziMarkDic["ShensuanziMark"+i].active = godBet[i-1];
        }
        this.godBet = godBet;
    }

    // 根据金额大小在指定的位置生成筹码堆
    public CreateChipsByGold(gold:number, index:number)
    {
        let chipCount = 0;
        if (gold == 0) return;
        else if (gold <= 1000) chipCount = 3;
        else if (gold <= 10000) chipCount = 5;
        else if (gold <= 20000) chipCount = 10;
        else chipCount = 15;

        let BetArea = this.BetAreaDic["BetArea" + index];
        let originalPos = BetArea.position;
        let size = BetArea.getContentSize();

        for (let i = 1; i <= chipCount; i++)
        {
            let chipIndex = Random.RangeInt(1, 4);
            let chipItem = this.CreateCoin(chipIndex);
            this.InsertToChipSlot(index, chipItem);
            let xOffset = Random.RangeFloat(-size.width*0.4, size.width*0.4);
            let yOffset = Random.RangeFloat(-size.height*0.4, size.height*0.35);
            NodeUtil.FollowPosition(chipItem, BetArea);
            chipItem.position = new cc.Vec3(chipItem.position.x+xOffset, chipItem.position.y+yOffset, 0);
        }
    }

    public CreateCoin(index:number):cc.Node
    {
        if (index <= 0) return;
        let chipItem = this.chipPool[index-1][0];
        if (chipItem == null)
        {
            chipItem = cc.instantiate(this.ChipItemDic["ChipItem"+index]);
            chipItem.parent = this.ChipTf;
            let randomAngle = Random.RangeInt(-30, 31);
            chipItem.angle = randomAngle;
        }
        else
        {
            this.chipPool[index-1].shift();
        }
        chipItem.active = true;
        chipItem.name = (index-1).toString();
        chipItem.zIndex = this.chipZIndex++;
        return chipItem;
    }


    public InsertToChipSlot(idx:number, objCoin:cc.Node)
    {
        if (this.chipSlot[idx-1] == null || this.chipSlot[idx-1] == undefined)
        {
            this.chipSlot[idx-1] = [];
        }

        this.chipSlot[idx-1].push(objCoin);

        //槽位筹码数量超过一定值，最下面的筹码放回到筹码对象池里
        if (this.chipSlot[idx-1].length > BullConfig.ConstNiuNiu.MAX_CHIP_NUM_PER_SLOT)
        {
            let needRemoveChip = this.chipSlot[idx-1].shift();
            needRemoveChip.active = false;
            let chipName = Number(needRemoveChip.name);
            this.chipPool[chipName].push(needRemoveChip);
        }
    }

    // 开牌途中进入游戏
    public EnterGameDuringDeal(singleAreaArr,seatPlayers,winResultArr,allBetInfo,myBetInfo,leftTime)
    {
        this.singleAreaArr = singleAreaArr as BullSingleAreaInfo[];
        this.seatPlayers = seatPlayers as BullSeatPlayerInfo[];
        this.winResultArr = winResultArr as BetResult[];
        this.allBetInfo = allBetInfo as number[];
        this.myBetInfo = myBetInfo as number[];

        this.ReadyPoker();
        this.CalculateArriveWhichStep(leftTime);
    }

    public ReadyPoker()
    {
        for (let j = 0; j < 5; j++)
        {
            for (let i = 0; i < 5; i++)
            {
                let poke = this.allPoke[j*5+i]
                if (poke == null || poke == undefined)
                {
                    let tempPoke = cc.instantiate(this.pokerItemTemp);
                    let parent = null;
                    if (j == 0) parent = this.PokeBanker;
                    else parent = this.PokeDic["Poke"+j];
                    poke = PokerItem.CreatePoker(tempPoke, parent);
                    poke.node.scale = 0.45;
                    this.allPoke.push(poke);

                    let objBezier = poke.node;
                    let bezier = objBezier.getComponent(Bezier);
                    if (bezier == null)
                    {
                        bezier = objBezier.addComponent(Bezier);
                    }
                    this.bezierList.push(bezier);
                }

                //poke.SetPosition(new cc.Vec2(0,0));
                NodeUtil.FollowPosition(poke.node, this.pokerItemTemp);
                poke.SetVisible(true);

                let cardInfo = this.singleAreaArr[j].cardInfoArr[i];
                poke.UpdateView(cardInfo.id, cardInfo.color, cardInfo.size, false, cardInfo.isNiu);
            }
        }
    }

    //计算桌台状态运行到哪一步动画了
    public CalculateArriveWhichStep(leftTime:number)
    {
        let elapseTime = this.dealTotalTime - leftTime;
        let stepIndex = 1;
        let stepTotalTime = 0;
        let isBetAreaWin = false;

        for (let i = 0;  i < 4; i++)
        {
            let singleArea = this.singleAreaArr[i+1];
            if (singleArea.result == 2)
            {
                isBetAreaWin = true;
                break;
            }
        }

        for (let i = 0; i < this.stepTime.length; i++)
        {
            let addTime = this.stepTime[i];
            if ((i+1) == 11 && isBetAreaWin==false) 
                addTime = 0;

            stepTotalTime += addTime;
            if (stepTotalTime >= elapseTime)
            {
                stepIndex = i+2;
                break;
            }
            if (i == this.stepTime.length-1)
            {
                stepIndex = this.stepTime.length+1;
            }
        }

        if(Global.showLog == true)
            cc.log("中途进入游戏,剩余时间，流逝时间，在第几步开始运行：",leftTime,elapseTime,stepIndex);

        if (stepIndex <= 17)
        {
            this.layoutPreTween(stepIndex);
        }

        if (stepIndex == 1) this.Step1();
        else if (stepIndex == 2) this.Step2();
        else if (stepIndex == 3) this.Step3();
        else if (stepIndex == 4) this.Step4();
        else if (stepIndex == 5) this.Step5();
        else if (stepIndex == 6) this.Step6();
        else if (stepIndex == 7) this.Step7();
        else if (stepIndex == 8) this.Step8();
        else if (stepIndex == 9) this.Step9();
        else if (stepIndex == 10) this.Step10();
        else if (stepIndex == 11) this.Step11();
        else if (stepIndex == 12) this.Step12();
        else if (stepIndex == 13) this.Step13();
        else if (stepIndex == 14) this.Step14();
        else if (stepIndex == 15) this.Step15();
        else if (stepIndex == 16) this.Step16();
        else if (stepIndex == 17) this.Step17();
        else 
        {
            if(Global.showLog == true)
                cc.log("中途进入游戏没有找到该步骤的方法，index:",stepIndex);
        }
        
    }

    // 播放剩下动画前布好前面的动画完成后出现的画面
    public layoutPreTween(stepIndex:number)
    {
        //设置好前5副牌发完牌的位置
        if (stepIndex > 2)
        {
            let needSetNum=stepIndex-2;
            if (needSetNum > 5) needSetNum = 5;
            for (let index = 0; index < needSetNum; index++)
            {
                for (let i = 0; i < 5; i++)
                {
                    let poke = this.allPoke[index*5+i];
                    let toNode = null;

                    if (index == 0)
                    {
                        toNode = this.PokeBanker;
                    }
                    else
                    {
                        toNode = this.PokeDic["Poke"+index];
                    }

                    let worldPoint = toNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    let newPos = poke.node.parent.convertToNodeSpaceAR(worldPoint);
                    newPos.x += (i-2)*this.CARD_PAD;
                    poke.SetPosition(newPos);
                }
            }
        }

        //第7步是展开前4张牌，所以超过第7步就展开
        if (stepIndex > 7)
        {
            for (let i = 0; i < 5; i++)
            {
                for (let j = 0; j < 5; j++)
                {
                    if (j != 3)
                    {
                        this.allPoke[i*5+j].Back.active = false;
                    }
                }
            }
        }

        //第8步是展开第一个人的最后一张牌
        if (stepIndex > 8)
        {
            let needSetNum = stepIndex-8;
            if (needSetNum > 5) needSetNum = 5;
            for (let i = 0; i < needSetNum; i++)
            {
                this.allPoke[i*5+3].Back.active = false;
                this.ShowPokerPoint(i, this.singleAreaArr[i].niuniuType, 0, this.singleAreaArr[i].result==2);

                let list:PokerItem[] = [];
                for (let k = 0; k < 5; k++)
                {
                    list.push(this.allPoke[i*5+k]);
                }

                // 提牌
                for (let k = 0; k < 5; k++)
                {
                    if (list[k].isNiu)
                    {
                        let pokerReckTf = list[k].node;
                        pokerReckTf.position.y = pokerReckTf.position.y + 16;
                    }
                } 
            }
        } 

        //第14步是庄家赢，收取桌上赢的筹码
        if (stepIndex > 14)
        {
            for (let i = 1; i < 5; i++)
            {
                let singleArea = this.singleAreaArr[i];
                if (singleArea.result == 1)
                {
                    for (let k = this.chipSlot[i-1].length-1; k >= 0; k--)
                    {
                        let chipItem = this.chipSlot[i-1][k];
                        this.chipSlot[i-1].splice(k,1);
                        chipItem.active = false;
                        let chipIndex = Number(chipItem.name);
                        this.chipPool[chipIndex].push(chipItem);
                    }
                }
            }
        }

        // 第16步是庄家输，筹码从桌面上飞向玩家
        if (stepIndex > 16)
        {
            for (let i = 1; i < 5; i++)
            {
                while(true)
                {
                    let singleArea = this.singleAreaArr[i];
                    if (singleArea.result == 2)
                    {
                        if (this.chipSlot[i-1].length == 0)
                            break;

                        for (let k = this.chipSlot[i-1].length-1; k>=0; k--)
                        {
                            let chipItem = this.chipSlot[i-1][k];
                            this.chipSlot[i-1].splice(k,1);
                            chipItem.active = false;
                            let chipIndex = Number(chipItem.name);
                            this.chipPool[chipIndex].push(chipItem);
                        }
                    }
                    break;
                }
            }
        }
    }

    /**
     * 展示牛牛类型，并且播放音乐
     * @param idx           座位号（1 庄家，2，黑，3，红，4，梅，5，方
     * @param niuniuType    牛牛类型
     * @param delay         等待时长
     * @param isWin         是否闲家赢了
     * @param isPlaySpine 
     */
    public ShowPokerPoint(idx:number, niuniuType:number, delay:number, isWin:boolean, isPlaySpine:boolean=false)
    {
        Util.PerformWithDelay(delay, ()=>{
            if (isWin)
            {
                this.ShowWinEffect(idx);
            }
            if (isPlaySpine)
            {
                //这里因为美术动画的五花牛和炸弹数值搞反了，所以这里程序调换一下
                let myNiuniuType = niuniuType;
                if (myNiuniuType == BullConfig.NiuNiuType.ZHADAN)
                    myNiuniuType = 12;
                else if (myNiuniuType == BullConfig.NiuNiuType.WUHUANIU)
                    myNiuniuType = 11;

                Util.PlaySpineEffect(this.SpinePokerPointDic["SpinePokerPoint"+(idx+1)],null,"px"+myNiuniuType,false,false);
                Util.PlaySpineEffect(this.SpinePokerPointMultipleDic["SpinePokerPointMultiple"+(idx+1)],null,this.singleAreaArr[idx].mutiple.toString(),false,false);

                let niuVoiceKey = "VoiceNiu" + niuniuType;
                AudioManager.GetInstance().SoundPlay(BullConfig.Music[niuVoiceKey]);
            }
            else
            {
                let index = idx + 1;
                this.PokerPointBgDic["PokerPointBg"+index].node.active = true;
                this.PokerPointDic["PokerPoint"+index].node.active = true;
                this.PokerPointMultipleDic["PokerPointMultiple"+index].node.active = true;

                NodeUtil.SetSpriteFrame(this.PokerPointDic["PokerPoint"+index], BullConfig.Atlas.smallGameCommonsAtlas,BullConfig.Atlas.sprite+niuniuType);
                NodeUtil.SetSpriteFrame(this.PokerPointMultipleDic["PokerPointMultiple"+index], BullConfig.Atlas.smallGameCommonsAtlas, BullConfig.Atlas.multipleNiu+this.singleAreaArr[idx].mutiple);
                
                let bgName = "";
                if (niuniuType == BullConfig.NiuNiuType.WUNIU)
                    bgName = "BRNN_niu_di1";
                else
                    bgName = "BRNN_niu_di2"
                NodeUtil.SetSpriteFrame(this.PokerPointBgDic["PokerPointBg"+index], BullConfig.Atlas.smallGameCommonsAtlas, bgName);
            }

            if (idx > 0)
            {
                let index = idx + 1;
                if (this.singleAreaArr[idx].selfResult == null || this.singleAreaArr[idx].selfResult == undefined)
                {
                    this.WinInfoDic["WinInfo"+idx].node.active = false;
                    this.LoseInfoDic["LoseInfo"+idx].node.active = false;
                    this.NoInfoDic["NoInfo"+idx].node.active = true;
                }
                else
                {
                    if (this.singleAreaArr[idx].selfResult >= 0)
                    {
                        this.WinInfoDic["WinInfo"+idx].node.active = true;
                        this.LoseInfoDic["LoseInfo"+idx].node.active = false;
                        this.WinInfoDic["WinInfo"+idx].string = "+" + this.singleAreaArr[idx].selfResult/100;
                    }
                    else
                    {
                        this.WinInfoDic["WinInfo"+idx].node.active = false;
                        this.LoseInfoDic["LoseInfo"+idx].node.active = true;
                        this.LoseInfoDic["LoseInfo"+idx].string = "" + this.singleAreaArr[idx].selfResult/100;
                    }
                    this.NoInfoDic["NoInfo"+idx].node.active = false;
                }
            }
        }, this.timerIds);
    }

    public ShowWinEffect(idx:number)
    {

    }

    /**
     * 更新入座玩家信息
     * @param seatData 
     */
    public UpdateSeatView(seatData:BullSeatPlayerInfo[])
    {
        let noInfoSeat = [0,1,2,3,4,5];
        for (let i = 0; i < 6; i++)
        {
            let seatInfo = seatData[i];
            if (seatInfo != null && seatInfo.member!=null && seatInfo.member.playerId.length > 0)
            {
                let nodeSeatHead = this.SeatHeadDic["SeatHead"+seatInfo.index];
                let headImage = cc.find("HeadMask/Head", nodeSeatHead).getComponent(cc.Sprite);
                Util.SetHeadNetIcon(headImage, seatInfo.member.headImageUrl);
                let headBoxImage = cc.find("HeadBox", nodeSeatHead).getComponent(cc.Sprite);
                Util.SetHeadBox(headBoxImage, seatInfo.member.headbox); 

                this.SeatNoBodyDic["SeatNoBody"+seatInfo.index].active = false;
                this.SeatContentDic["SeatContent"+seatInfo.index].active = true;
                this.SeatGoldTextDic["SeatGoldText"+seatInfo.index].string = Util.formatGoldText(seatInfo.member.gold, false);

                if (seatInfo.index == 0)
                {
                    this.SeatPlayerName0.string = seatInfo.member.userName;
                }
                else if (seatInfo.index == 1)
                {
                    this.SeatPlayerName1.string = seatInfo.member.userName;
                }

                for (let k = 0; k < noInfoSeat.length; k++)
                {
                    if (noInfoSeat[k] == seatInfo.index)
                    {
                        noInfoSeat.splice(k, 1);
                        break;
                    }
                }
            }
        }

        for (let k = 0; k < noInfoSeat.length; k++)
        {
            this.SeatNoBodyDic["SeatNoBody"+noInfoSeat[k]].active = true;
            this.SeatContentDic["SeatContent"+noInfoSeat[k]].active = false;
        }
    }

    //其他玩家下注表现,seatIndex小于6表示上座玩家，等于7表示其他在线玩家
    public BullPlayerBet(seatIndex:number, playerBetData:number[][], leftTime:number=1)
    {
        let intervalNum = playerBetData.length;
        let intervalTime = 0.2;
        let maxTime = leftTime / intervalNum*2;
        if (intervalNum == 1) maxTime = leftTime;
        if (maxTime > intervalTime) intervalTime = Random.RangeFloat(intervalTime, maxTime);

        let betData = playerBetData.shift();
        let fromNode = this.ObserveTf;
        let shakeTf = this.ObserveTf;
        if (seatIndex < 6)
        {
            fromNode = this.SeatCoinsDic["SeatCoins"+seatIndex];
            shakeTf = this.SeatHeadDic["SeatHead"+seatIndex];
            this.PlayBetTween(shakeTf, seatIndex%2==0);
        }
        else
        {
            this.PlayBetTween(shakeTf, true);
        }

        let currentTimesTotalBet = 0;
        for (let k = 0; k < 4; k++)
        {
            if (betData[k] > 0)
            {
                if (seatIndex == 0)
                {
                    if (this.godBet[k] == false)
                    {
                        this.godBet[k] = true;
                        this.FlyXingXing(k);
                    }
                }

                let currentBetNum = Number(this.TextAllBetGoldDic["TextAllBetGold"+(k+1)].string) || 0;
                this.SetOtherPlayerBetText(k, currentBetNum*100+betData[k]);
                currentTimesTotalBet += betData[k];
                let toNode = this.BetAreaDic["BetArea"+(k+1)];
                let chipIndexList = this.GetChipItemByNum(betData[k], null);
                for (let l = 0; l < chipIndexList.length; l++)
                {
                    let chipIndex = chipIndexList[l];
                    let objCoin = this.CreateCoin(chipIndex)
                    this.InsertToChipSlot(k+1, objCoin);
                    this.ChipFly(objCoin, fromNode, toNode, 0, null, true, 1.2, (param)=>{
                        this.ChipScaleTween(objCoin, 0.2, 1)
                    })
                }
            }
        }

        if (seatIndex < 6)
        {
            let leftGold = Number(this.SeatGoldTextDic["SeatGoldText"+seatIndex].string) || 0;
            this.SeatGoldTextDic["SeatGoldText"+seatIndex].string = Util.formatGoldText(leftGold*100 - currentTimesTotalBet,false);
        }
        else
        {
            AudioManager.GetInstance().SoundPlay(BullConfig.Music.SoundBet1);
        }

        leftTime -= intervalTime;
        if (playerBetData.length > 0)
        {
            Util.PerformWithDelay(intervalTime, ()=>{
                this.BullPlayerBet(seatIndex, playerBetData, leftTime);
            },this.timerIds, true);
        }
    }

    /**
     * 玩家下注时抖动动画
     * @param targetTf 
     * @param direct 表示方向，true为左边的座位，false为右边的座位
     */
    public PlayBetTween(targetTf:cc.Node, direct:boolean)
    {
        let canPlay = this.betPanelAniList[targetTf.name] || false;
        if (canPlay) return;

        this.betPanelAniList[targetTf.name] = true;
        let offset = direct ? new cc.Vec2(this.PlayerPanelAnimationOffset,0) : new cc.Vec2(-this.PlayerPanelAnimationOffset,0);

        let endValue = new cc.Vec2(targetTf.position.x-offset.x, targetTf.position.y-offset.y);
        let xt2 = XTween.DoMove(targetTf, null, endValue, this.PlayerPanelAnimationTime,1,false,XTweenCurvType.InSine,()=>
        {
            let endValue2 = new cc.Vec2(targetTf.position.x+offset.x, targetTf.position.y+offset.y);
            let xt1 = XTween.DoMove(targetTf, null, endValue2, this.PlayerPanelAnimationTime,1,false,XTweenCurvType.OutSine,()=>
            {
                this.betPanelAniList[targetTf.name] = false;
            });
            xt1.SetShouldFinishCallbackWhenDisable();
            xt1.Play();
        })
        xt2.SetShouldFinishCallbackWhenDisable();
        xt2.Play();

        let xt5 = XTween.DoScale(targetTf, null, this.PlayerPanelAnimationScale, this.PlayerPanelAnimationTime, 1, false, XTweenCurvType.OutSine, ()=>{
            let xt4 = XTween.DoScale(targetTf, null, new cc.Vec2(1,1), this.PlayerPanelAnimationTime, 1, false, XTweenCurvType.InSine);
            xt4.Play();
        });
        xt5.SetShouldFinishCallbackWhenDisable();
        xt5.Play();
    }

    public FlyXingXing(index:number)
    {
        let feixingxing = this.FeixingxingDic["Feixingxing"+(index+1)];
        feixingxing.node.active = true;
        
        let centerX = BullConfig.ConstNiuNiu.flyXingxingCenterList[index+1].x;
        let centerY = BullConfig.ConstNiuNiu.flyXingxingCenterList[index+1].y;

        NodeUtil.FollowPosition(feixingxing.node, this.ShensuanziMarkDic["ShensuanziMark"+(index+1)]);
        let targetX = feixingxing.node.position.x;
        let targetY = feixingxing.node.position.y;
        feixingxing.node.position = this.FeixingxingOriPosDic["FeixingxingOriPos"+(index+1)];

        let timeScale = 2 - (index+1)*0.3;
        feixingxing.SetMoveTrail(feixingxing.node.position.x, feixingxing.node.position.y, centerX, centerY, targetX, targetY,timeScale, null, ()=>{
            this.FeixingxingDic["Feixingxing"+(index+1)].node.active = false;
            this.ShensuanziMarkDic["ShensuanziMark"+(index+1)].active = true;
        })
    }

    //设置其他玩家下注时更新下注区域的下注总额
    public SetOtherPlayerBetText(betIndex:number,totalNum:number)
    {
        let TextAllBetGold = this.TextAllBetGoldDic["TextAllBetGold"+(betIndex+1)];
        TextAllBetGold.string = totalNum>0 ? (totalNum/100).toString() : "";
    }

    //根据下注的金额来确定下注的是哪些筹码
    public GetChipItemByNum(betNum:number, chipIndexList:number[])
    {
        if (chipIndexList == null) chipIndexList = [];
        let hasGetChip = false;
        for (let index = 5; index >= 1; index--)
        {
            if (betNum >= BullConfig.ConstNiuNiu.GoldPerBet[index]*100)
            {
                betNum -= BullConfig.ConstNiuNiu.GoldPerBet[index]*100;
                chipIndexList.push(index);
                if (chipIndexList.length >= 2)
                    return chipIndexList;

                hasGetChip = true;
                break;
            }
        }

        if (betNum > 0)
        {
            if (hasGetChip)
            {
                this.GetChipItemByNum(betNum, chipIndexList);
            }
            else
            {
                if(Global.showLog == true)
                    cc.log("服务器发来的下注金额有小数，无法转换成对应的筹码");
            }
        }

        return chipIndexList;
    }

    public ChipFly(chipItem:cc.Node, fromNode:cc.Node, toNode:cc.Node, delay:number, easeType:any=XTweenCurvType.OutCirc, hasFollowScaleTween:boolean=false, scaleTweenParameter:number=null, completeCallback:(param:any)=>void=null,callBackParameter:any=null)
    {
        if(easeType == null) easeType = XTweenCurvType.OutCirc;

        delay = delay || 0;
        NodeUtil.FollowPosition(chipItem, fromNode);
        let fromPos = new cc.Vec2(chipItem.position.x, chipItem.position.y);
        NodeUtil.FollowPosition(chipItem, toNode);
        let toPos = new cc.Vec2(chipItem.position.x, chipItem.position.y);
        let offset = this.GetTargetOffset(toNode);
        toPos.x += offset.x;
        toPos.y += offset.y;
        chipItem.position = new cc.Vec3(fromPos.x, fromPos.y, 0);

        let dis = Math.sqrt((fromPos.x-toPos.x)*(fromPos.x-toPos.x) + (fromPos.y-toPos.y)*(fromPos.y-toPos.y))/this.CanvasScale;

        let baseTime = Random.RangeFloat(0.54, 0.62)
        if (easeType == XTweenCurvType.InBack) baseTime += 0.3;

        let disTime = dis/100*0.032;
        let moveTime = baseTime + disTime;

        if (hasFollowScaleTween) this.ChipScaleTween(chipItem, moveTime, scaleTweenParameter);

        let xt2 = XTween.DoMove(chipItem, fromPos, toPos, moveTime, 1, false, easeType, ()=>{
            if (completeCallback != null) completeCallback(callBackParameter);
        }, delay);
        xt2.Play();
    }

    //获取下注区域筹码零散位置
    public GetTargetPos(toNode:cc.Node)
    {
        let worldPoint = toNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
        let xOffset = Random.RangeFloat(-toNode.width*0.4, toNode.width*0.4);
        let yOffset = Random.RangeFloat(-toNode.height*0.4, toNode.height*0.35);
        worldPoint.x += xOffset;
        worldPoint.y += yOffset;
        return worldPoint;
    }

    public GetTargetOffset(toNode:cc.Node)
    {
        let xOffset = Random.RangeFloat(-toNode.width*0.4, toNode.width*0.4);
        let yOffset = Random.RangeFloat(-toNode.height*0.4, toNode.height*0.35);
        return new cc.Vec2(xOffset, yOffset);
    }

    public ChipScaleTween(chipItem:cc.Node, duration:number, toScale:number)
    {
        let xt2 = XTween.DoScale(chipItem, null, new cc.Vec2(toScale, toScale), duration, 1, false, XTweenCurvType.OutSine);
        xt2.Play();
    }

    // 服务端状态变成开始下注
    public StartNewRound(statusLeftTime:number,maxMutiple:number,bankerInfo:BullBanker)
    {
        this.DeleteAllTimer();
        this.SetWaitForNextRoundVisible(false);
        this.ShowClock(statusLeftTime, 1, true);
        Util.PlaySpineEffect(this.SpineStartBet);
        AudioManager.GetInstance().SoundPlay(BullConfig.Music.VoiceStartBet);

        let goldNum = Math.floor(Global.PlayerInfo.PlayerCurrency.Gold/100);
        this.UpdateBetNumBtns(goldNum, maxMutiple, bankerInfo, 0);
        this.SetBetAreaClickEnabled(true);

        for (let i = 0; i <= 5; i++)
        {
            this.WinGoldAnimationDic["WinGoldAnimation"+i].active = false;
        }

        this.MyselfWinGoldAnimation.active = false;
        this.BankerWinGoldAnimation.active = false;
    }

    //停止下注
    public StopBet()
    {
        this.EnableBetNumBtns(false);
        this.SetBetAreaClickEnabled(false);
        Util.PlaySpineEffect(this.SpineStopBet);
        AudioManager.GetInstance().SoundPlay(BullConfig.Music.SoundStopBet);

        Util.PerformWithDelay(0.4, ()=>{
            AudioManager.GetInstance().SoundPlay(BullConfig.Music.VoiceStopBet);
        }, this.timerIds, true)
    }

    // 发牌结算状态
    public Deal()
    {
        this.SetChipAndPokerSibling(false);
    }

    public SetChipAndPokerSibling(isChipUp)
    {
        let chipSibling = this.ChipTf.zIndex;
        let pokerSibling = this.pokesTf.zIndex;
        if (isChipUp)
        {
            if (chipSibling < pokerSibling)
            {
                this.ChipTf.zIndex = pokerSibling;
                this.pokesTf.zIndex = chipSibling;
            }
        }
        else
        {
            if (chipSibling > pokerSibling)
            {
                this.ChipTf.zIndex = pokerSibling;
                this.pokesTf.zIndex = chipSibling;
            }
        }
    }

    // 本轮结束，清理桌面，还原状态
    public RoundFinish(leftTime:number)
    {
        this.CleanUpDeskAndData();
        this.ShowClock(leftTime-1, 2, false);   
    }

    // 开始开牌流程
    public StartDeal(singleAreaArr,seatPlayers,winResultArr,allBetInfo,myBetInfo)
    {
        this.singleAreaArr = singleAreaArr;
        this.seatPlayers = seatPlayers;
        this.winResultArr = winResultArr;
        this.allBetInfo = allBetInfo;
        this.myBetInfo = myBetInfo;

        this.ReadyPoker();
        this.Step1();
    }

    public FaPaiStep(index:number)
    {
        let hasPlayShuffleSound = false;
        for (let i = 0; i < 5; i++)
        {
            let poke = this.allPoke[(index-1)*5+i];
            let bezier = this.bezierList[(index-1)*5+i];
            let toNode = null;
            if (index == 1) toNode = this.PokeBanker;
            else toNode = this.PokeDic["Poke"+(index-1)];

            let oriPos = poke.node.position;

            let worldPoint = toNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
            let toPos = poke.node.convertToNodeSpaceAR(worldPoint);
            worldPoint = poke.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
            toPos = this.pokerItemTemp.parent.convertToNodeSpaceAR(worldPoint);

            let centerX = BullConfig.ConstNiuNiu.centerPosiList[index].x
            let centerY = BullConfig.ConstNiuNiu.centerPosiList[index].y
            let targetX = toPos.x - 2*25
            let targetY = toPos.y

            let iTemp = i;
            let bezierTemp = bezier;
            Util.PerformWithDelay(i*0.03+0.1, ()=>{
                bezierTemp.SetMoveTrail(oriPos.x,oriPos.y,centerX,centerY,targetX,targetY,2,null,()=>{
                    poke.Back.active = iTemp == 3;
                    let tweener = XTween.DoMove(poke.node, null, new cc.Vec2(targetX+iTemp*this.CARD_PAD, targetY),0.2);
                    tweener.Play();
                    if (!hasPlayShuffleSound)
                    {
                        AudioManager.GetInstance().SoundPlay(BullConfig.Music.SoundShuffle);
                        hasPlayShuffleSound = true;
                    }
                })
            }, this.timerIds)
        }
    }

    //开最后一张牌通用方法,index表示第几门的牌,庄家为1，其他分别为2,3,4,5
    public OpenLastPoker(index:number)
    {
        let list:PokerItem[] = [];
        for (let i = 0; i < 5; i++)
        {
            list.push(this.allPoke[(index-1)*5+i]);
        }

        this.FoldUnFold(list, 0, 0.6, 4, index, true);
        this.ShowPokerPoint(index-1, this.singleAreaArr[index-1].niuniuType, 0.8, this.singleAreaArr[index-1].result==2, true);

        // 提牌
        for (let i = 0; i < 5; i++)
        {
            if (list[i].isNiu)
            {
                Util.PerformWithDelay(0.8, ()=>{
                    let oriPos = list[i].node.position;
                    let targetPos = new cc.Vec2(oriPos.x, oriPos.y+16);
                    let xt = XTween.DoMove(list[i].node, null, targetPos, 0.1, 1, false, XTweenCurvType.OutSine);
                    xt.Play();
                }, this.timerIds);
            }
        }
    }

    public FoldUnFold(pokeList:PokerItem[], delay:number, duration:number, hideIdx:number, pIdx:number, showLastPoke:boolean)
    {
        duration = duration || 0.3;
        hideIdx = hideIdx || pokeList.length;

        let toNode = null;
        if (pIdx == 1) toNode = this.PokeBanker;
        else  toNode = this.PokeDic["Poke"+(pIdx-1)];

        for (let i = 0; i < pokeList.length; i++)
        {
            let worldPoint = toNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
            let newPos = pokeList[i].node.parent.convertToNodeSpaceAR(worldPoint);
            pokeList[i].FoldUnFoldShowAll(newPos, duration, delay, new cc.Vec2(-2*25, 0));
        }
    }

    ////////////////////////////////////////////////////////////////////////////////

    //出现扑克牌整副牌，还没开始发牌，悬停在那里
    public Step1()
    {
        this.Step2();
    }

    //发第一个人的牌
    public Step2()
    {
        this.FaPaiStep(1);
        Util.PerformWithDelay(this.stepTime[0], ()=>{
            this.Step3();
        },this.timerIds);
    }

    //发第二个人的牌
    public Step3()
    {
        this.FaPaiStep(2);
        Util.PerformWithDelay(this.stepTime[1], ()=>{
            this.Step4();
        },this.timerIds);
    }

    //发第三个人的牌
    public Step4()
    {
        this.FaPaiStep(3);
        Util.PerformWithDelay(this.stepTime[2], ()=>{
            this.Step5();
        },this.timerIds);
    }

    //发第四个人的牌
    public Step5()
    {
        this.FaPaiStep(4);
        Util.PerformWithDelay(this.stepTime[3], ()=>{
            this.Step6();
        },this.timerIds);
    }

    //发第五个人的牌
    public Step6()
    {
        this.FaPaiStep(5);
        Util.PerformWithDelay(this.stepTime[4], ()=>{
            //发完牌后，筹码显示在扑克牌上面
            this.SetChipAndPokerSibling(true);
            this.Step8();
        },this.timerIds);
    }

    //展示前4张牌
    public Step7()
    {
        for (let i = 0; i < 5; i++)
        {
            let list:PokerItem[] = [];
            for (let j = 0; j < 5; j++)
            {
                list[j] = this.allPoke[i*5+j];
            }
            this.FoldUnFold(list, 0, 0.6, 4, i+1, false);
        }

        Util.PerformWithDelay(1.3, ()=>{
            this.Step8();
        }, this.timerIds);
    }

    // 开第一个人最后一张牌
    public Step8()
    {
        this.OpenLastPoker(1);
        Util.PerformWithDelay(this.stepTime[5], ()=>{
            this.Step9();
        },this.timerIds);
    }

    // 开第二个人最后一张牌
    public Step9()
    {
        this.OpenLastPoker(2);
        Util.PerformWithDelay(this.stepTime[6], ()=>{
            this.Step10();
        },this.timerIds);
    }

    // 开第三个人最后一张牌
    public Step10()
    {
        this.OpenLastPoker(3);
        Util.PerformWithDelay(this.stepTime[7], ()=>{
            this.Step11();
        },this.timerIds);
    }

    //开第四个人最后一张牌
    public Step11()
    {
        this.OpenLastPoker(4);
        Util.PerformWithDelay(this.stepTime[8], ()=>{
            this.Step12();
        },this.timerIds);
    }

    //开第五个人最后一张牌
    public Step12()
    {
        this.OpenLastPoker(5);
        Util.PerformWithDelay(this.stepTime[9], ()=>{
            this.Step13();
        },this.timerIds);
    }

    //若存在闲赢，则播放闲下注区域特效
    public Step13()
    {
        let isDelay = false;
        let winIndexList:number[] = [];
        for (let i = 1; i <= 4; i++)
        {
            let singleArea = this.singleAreaArr[i];
            if(singleArea.result == 2)
            {
                isDelay = true;
                winIndexList.push(i);
            }
        }

        if (isDelay)
        {
            for (let k = 0; k < winIndexList.length; k++)
            {
                let index = winIndexList[k];
                Util.PlaySpineEffect(this.BetAreaWinDic["BetAreaWin"+index],()=>{
                    Util.PlaySpineEffect(this.BetAreaWinDic["BetAreaWin"+index],null, "1");
                }, "1", false, false);
            }

            Util.PerformWithDelay(this.stepTime[10], ()=>{
                this.Step14();
            }, this.timerIds);
        }
        else
        {
            this.Step14();
        }
    }

    //庄家若有赢钱，则播放庄家收取筹码动画
    public Step14()
    {
        let isDelay = false;
        for (let i = 1; i < 5; i++)
        {
            let singleArea = this.singleAreaArr[i];
            if (singleArea.result == 1)
            {
                let toNode = this.BankerHead;
                for (let k = this.chipSlot[i-1].length-1; k>=0; k--)
                {
                    let iTemp = i;
                    let kTemp = k;
                    let chipItem = this.chipSlot[i-1][k];
                    this.ChipFly(chipItem, chipItem, toNode, Random.RangeFloat(0.05,0.2), XTweenCurvType.InBack, false, null, ()=>{
                        for (let m = 0; m < this.chipSlot[iTemp-1].length; m++)
                        {
                            if (this.chipSlot[iTemp-1][m] == chipItem)
                            {
                                this.chipSlot[iTemp-1].splice(m, 1);
                                break;
                            }
                        }
                        chipItem.active = false;
                        let chipIndex = Number(chipItem.name);
                        this.chipPool[chipIndex].push(chipItem);
                    })
                }
                isDelay = true;
            }
        }

        if (isDelay)
        {
            Util.PerformWithDelay(this.stepTime[11], ()=>{
                AudioManager.GetInstance().SoundPlay(BullConfig.Music.SoundTakeChip);
                this.Step15();
            }, this.timerIds);
        }
        else
        {
            this.Step15();
        }
    }
    
    //庄家若输钱，则播放庄家赔钱到桌面上
    public Step15()
    {
        let bankExistLose = false;
        for (let i = 1; i < 5; i++)
        {
            while(true)
            {
                let singleArea = this.singleAreaArr[i];
                if (singleArea.result == 2)
                {
                    if (this.chipSlot[i-1].length == 0)
                        break;

                    let fromNode = this.BankerHead;
                    let toNode = this.BetAreaDic["BetArea"+i];
                    let needCreatNum = 0;
                    if (this.chipSlot[i-1].length > 20) needCreatNum = Random.RangeInt(20, 26);
                    else needCreatNum = this.chipSlot[i-1].length;

                    for (let k = 1; k <= needCreatNum; k++)
                    {
                        let chipIndex = Random.RangeInt(1, 4);
                        let chipItem = this.CreateCoin(chipIndex);
                        this.InsertToChipSlot(i, chipItem);
                        this.ChipFly(chipItem, fromNode, toNode, Random.RangeFloat(0.05, 0.2));
                    }

                    bankExistLose = true;
                }
                break;
            }
        }

        if (bankExistLose)
        {
            Util.PerformWithDelay(this.stepTime[12], ()=>{
                this.Step16();
            })
        }
        else
        {
            this.Step17();
        }
    }

    //庄家输钱，筹码从桌面飞向玩家
    public Step16()
    {
        //分发给所有下注该门的玩家
        //所有下注的玩家信息，1-6为1到6号座位玩家，7为自己，8为旁观玩家
        for (let i = 1; i <= 4; i++)
        {
            let allSeatBetInfo = [0,0,0,0,0,0,0,0]; 
            
            for (let k = 0; k < this.seatPlayers.length; k++)
            {
                let seatInfo = this.seatPlayers[k];
                if (seatInfo.member != null && seatInfo.member.playerId!=undefined && seatInfo.member.playerId!=null && seatInfo.member.playerId.length > 0)
                {
                    let betNum = seatInfo.betGold[i-1];
                    if (betNum > 0) allSeatBetInfo[seatInfo.index] = betNum;
                }
            }

            allSeatBetInfo[6] = this.myBetInfo[i-1];

            //上座玩家和自己在该门下注总的总金额
            let exceptOtherGold = 0;
            for (let k = 1; k <= 7; k++)
            {
                exceptOtherGold += allSeatBetInfo[k-1]; 
            }
            allSeatBetInfo[7] = this.allBetInfo[i-1] - exceptOtherGold;

            //暂时没想到比较好的分配筹码方式，先用平均分配
            let betMemberArr:number[][] = [];
            for (let k = 0; k < allSeatBetInfo.length; k++)
            {
                let goldNum = allSeatBetInfo[k];
                if (goldNum > 0)
                {
                    betMemberArr.push([k+1, goldNum]);
                }
            }
            let chipCount = Math.floor((this.chipSlot[i-1].length)/(betMemberArr.length))
            let leftCount = this.chipSlot[i-1].length;
            for (let k = 0; k < betMemberArr.length; k++)
            {
                let needMoveCount = 0;
                if (k == betMemberArr.length-1)
                {
                    needMoveCount = leftCount;
                }
                else 
                {
                    needMoveCount = chipCount;
                }
                for (let m = 1; m <= needMoveCount; m++)
                {
                    let chipItem = this.chipSlot[i-1].shift();
                    let chipIndex = Number(chipItem.name);
                    this.chipPool[chipIndex].push(chipItem);

                    let toNode;
                    if (betMemberArr[k][0] <= 6)
                        toNode = this.SeatHeadDic["SeatHead"+(betMemberArr[k][0]-1)];
                    else if (betMemberArr[k][0] == 7)
                        toNode = this.playerIcon;
                    else
                        toNode = this.ObserveTf;

                    this.ChipFly(chipItem, chipItem, toNode, Random.RangeFloat(0.05,0.2),XTweenCurvType.InBack, false, null,()=>{
                        chipItem.active = false;
                        
                        if (this.getChipHeadAniList[toNode.name])
                            return
                        
                        this.getChipHeadAniList[toNode.name] = true;

                        let xt1 = XTween.DoScale(toNode, null, new cc.Vec2(1.2,1.2), 0.04, 1, true);
                        xt1.SetFinishCallback(()=>{
                            this.getChipHeadAniList[toNode.name] = false;
                        })
                        xt1.SetShouldFinishCallbackWhenDisable();
                        xt1.Play();
                    })
                    leftCount--;
                }
            }
        }

        Util.PerformWithDelay(this.stepTime[13],()=>{
            AudioManager.GetInstance().SoundPlay(BullConfig.Music.SoundTakeChip);
            this.Step17();
        },this.timerIds);
    }

    //显示上座玩家输赢飘字动画
    public Step17()
    {
        this.playerGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold, false);
        
        for (let l = 0; l < this.winResultArr.length; l++)
        {
            let betResult = this.winResultArr[l];
            for (let k = 0; k < this.seatPlayers.length; k++)
            {
                let v = this.seatPlayers[k];
                if (v.member != null && v.member.playerId == betResult.playerId)
                {
                    this.WinGoldAnimationDic["WinGoldAnimation"+v.index].active = true;

                    let content = "";
                    if (betResult.extractGold > 0)
                    {
                        content = "+" + Util.formatGoldText(betResult.extractGold,false);
                        this.WinGoldTextDic["WinGoldText"+v.index].node.active = true;
                        this.LoseGoldTextDic["LoseGoldText"+v.index].node.active = false;
                    }
                    else
                    {
                        content = Util.formatGoldText(betResult.extractGold, false);
                        this.WinGoldTextDic["WinGoldText"+v.index].node.active = false;
                        this.LoseGoldTextDic["LoseGoldText"+v.index].node.active = true;
                    }
                        
                    this.WinGoldTextDic["WinGoldText"+v.index].string = content;
                    this.LoseGoldTextDic["LoseGoldText"+v.index].string = content;

                    if (betResult.extractGold > 0)
                    {
                        Util.PlaySpineEffect(this.SeatWinSpineDic["SeatWinSpine"+v.index],null,"1",false,true);
                    }

                    this.SeatGoldTextDic["SeatGoldText"+v.index].string = Util.formatGoldText(betResult.gold,false);

                    this.FlyText(this.WinGoldAnimationDic["WinGoldAnimation"+v.index]);
                }
            }

            if (betResult.playerId == this.banker.playerId)
            {
                if (this.banker.playerId != "-1")
                {
                    let currentGold = Number(this.TextBankerGoldNum.string);
                    this.TextBankerGoldNum.string = Util.formatGoldText(currentGold*100 + betResult.extractGold, false);
                }
                this.BankerWinGoldAnimation.active = true;
                let content = "";
                if (betResult.extractGold > 0)
                    content = "+" + Util.formatGoldText(betResult.extractGold, false);
                else
                    content = Util.formatGoldText(betResult.extractGold, false);

                this.BankerWinGoldText.string =  content;
                this.BankerLoseGoldText.string = content;
                
                let win = betResult.extractGold > 0;
                this.BankerWinGoldText.node.active = win;
                this.BankerLoseGoldText.node.active = !win;

                if (betResult.extractGold > 0)
                {
                    Util.PlaySpineEffect(this.BankerWinSpine,null,"1",false,true);
                }

                this.FlyText(this.BankerWinGoldAnimation);
            }

            if (betResult.playerId == Global.PlayerInfo.playerId)
            {
                this.MyselfWinGoldAnimation.active = true;
                let content = "";
                if (betResult.extractGold > 0)
                    content = "+" + Util.formatGoldText(betResult.extractGold, false);
                else
                    content = Util.formatGoldText(betResult.extractGold, false);
                this.MyselfWinGoldText.string = content;
                this.MyselfLoseGoldText.string = content;

                let win = betResult.extractGold > 0;
                this.MyselfWinGoldText.node.active = win;
                this.MyselfLoseGoldText.node.active = !win;

                if (betResult.extractGold > 0)
                {
                    Util.PlaySpineEffect(this.MyselfWinSpine,null,"1",false,true);
                }

                this.FlyText(this.MyselfWinGoldAnimation);
            }
        }
    }

    //玩家自己的请求上庄状态改变
    public ReqBankerStatusChange(status:number)
    {
        if (status == BullConfig.ConstNiuNiu.REQ_BANKER_STATUS.bankerUp)
        {
            this.BtnReqBankerList.active = false;
            this.BtnQuitBankerList.active = true;
        }
        else if (status == BullConfig.ConstNiuNiu.REQ_BANKER_STATUS.bankerDown)
        {
            this.BtnReqBankerList.active = true;
            this.BtnQuitBankerList.active = false;
        }
        else
        {
            this.BtnReqBankerList.active = false;
            this.BtnQuitBankerList.active = true;
        }
    }

    public UpdatePlayerInfoView()
    {
        this.playerName.string = Global.PlayerInfo.username;
        this.playerGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold, false);
        
        let headImage = cc.find("HeadMask/Head", this.playerIcon).getComponent(cc.Sprite);
        Util.SetHeadNetIcon(headImage, Global.PlayerInfo.headImageUrl);
    }

    public SetBetText(betIndex, myBetInfo,allBet,bankerId,maxMutiple,myLeftGold)
    {
        let TextMyBetGold = this.TextMyBetGoldDic["TextMyBetGold"+betIndex];
        TextMyBetGold.string = (myBetInfo[betIndex-1]/100).toString();
        let TextAllBetGold = this.TextAllBetGoldDic["TextAllBetGold"+betIndex];
        TextAllBetGold.string = (allBet/100).toString();

        let totalBetGold = 0;
        myBetInfo.forEach(t => {
            totalBetGold += t;
        });
        if (bankerId != Global.PlayerInfo.playerId)
        {
            if (myLeftGold < (totalBetGold+BullConfig.ConstNiuNiu.GoldPerBet[1]*100)*(maxMutiple-1))
            {
                this.EnableBetNumBtns(false);
                this.selectBetNumIndex = 0;
            }
            else
            {
                for (let i = 5; i > 0; i--)
                {
                    let betCoin = BullConfig.ConstNiuNiu.GoldPerBet[i];
                    if ((myLeftGold-betCoin*100) < (totalBetGold+betCoin*100)*(maxMutiple-1))
                    {
                        this.EnableBetNumBtn(false, i);
                        if (this.selectBetNumIndex == i)
                        {
                            this.BetNumSelect(i-1);
                        }
                    }
                }
            }
        }
    }

    //玩家自己上座时下注表现
    public BullMySeatBet(betData:SeatBetData)
    {
        let fromNode = this.SeatCoinsDic["SeatCoins"+betData.seatIndex];
        let shakeTf = this.SeatHeadDic["SeatHead"+betData.seatIndex];
        this.PlayBetTween(shakeTf, betData.seatIndex%2==0);

        for (let k = 0; k < 4; k++)
        {
            if (betData.betGold[k] > 0)
            {
                if (betData.seatIndex == 0)
                {
                    if (this.godBet[k] == false)
                    {
                        this.godBet[k] = true;
                        this.FlyXingXing(k);
                    }
                }

                let toNode = this.BetAreaDic["BetArea"+(k+1)];
                let chipIndexList = this.GetChipItemByNum(betData.betGold[k], null);
                chipIndexList.forEach(chipIndex => {
                    let objCoin = this.CreateCoin(chipIndex);
                    this.InsertToChipSlot(k+1, objCoin);
                    this.ChipFly(objCoin, fromNode, toNode, 0, null, true, 1.2, ()=>{
                        this.ChipScaleTween(objCoin, 0.2, 1);
                    })
                });
            }

            let leftGold = Number(this.SeatGoldTextDic["SeatGoldText"+betData.seatIndex].string) || 0;
            this.SeatGoldTextDic["SeatGoldText"+betData.seatIndex].string = Util.formatGoldText(leftGold*100-betData.betGold[k],false);
        }
    }

    public FlyText(node:cc.Node)
    {
        let oriPos = node.position;
        let startPos = new cc.Vec2(oriPos.x, -30);
        let endPos = new cc.Vec2(oriPos.x, 30);
        let bounceOutTime = 0.3;
        let group = new XTweenerGroup();
        XTween.DoMove(node, startPos, endPos, bounceOutTime, 1, false, XTweenCurvType.BounceOut).Play();

        Util.PerformWithDelay(bounceOutTime+1, ()=>{
            node.active = false;
        }, this.timerIds, true);
    }

    //更新请求上庄列表
    public UpdateBullBankList(preBankerInfoArr:ReadyBankerInfo[], banker:BullBanker)
    {
        let includeMe = false;
        for (let i = 0; i < 10; i++)
        {
            let preBankerInfo = preBankerInfoArr[i];
            let isNull = (preBankerInfo == null || preBankerInfo == undefined);
            if (!isNull)
            {
                if (preBankerInfo.playerId == Global.PlayerInfo.playerId)
                {
                    includeMe = true;
                    break;
                } 
            }
        }

        if (banker.playerId == Global.PlayerInfo.playerId)
        {
            includeMe = true;
        }

        this.BtnReqBankerList.active = !includeMe;
        this.BtnQuitBankerList.active = includeMe;
    }
}

import View from "../../MVCFramework/View";
import { ViewNames } from "../../Modules/MVCRegister";
import Poker from "../../Components/Poker";
import CardColor from "../../Components/Poker";
import ViewGamePlayer from "../../Modules/Views/ViewGamePlayer";
import { Random } from "../../Tools/Random";
import Global from "../../Global/Global";
import XTweenerGroup, { XTweenerGroupAddMode } from "../../Tools/XTween/Base/XTweenerGroup";
import { XTweenCurvType } from "../../Tools/XTween/Base/XTweenCurv";
import XTween from "../../Tools/XTween/XTween";
import AudioManager from "../../Manager/AudioManager";
import TimerManager from "../../Components/TimerManager";
import ModelDragonVsTiger from "./ModelDragonVsTiger";
import Util from "../../Tools/Util";
import { BetArea, LHDRoleInfo, GameState, UserBet, IUserBet, PushBattleSettlementRes, CardInfo, SeatInfo } from "../../Protos/LongHuDou";
import SpriteUtil from "../../Tools/SpriteUtil";
import { DragonVsTigerConfig } from "./DragonVsTigerConfig";
import ccC from "../../Tools/ccC";



const { ccclass, property } = cc._decorator;

@ccclass
export default class ViewDragonVsTiger extends View {
    private _c: SpriteUtil;

    //常量
    private PlayerPanelAnimationTime: number = 0.12;
    //下注桌面特效
    private betEffectArray: Array<cc.Animation> = [];
    //服务器发过来的数据真实筹码值都是x100的//
    private chipTypeArray: Array<number> = [100, 1000, 5000, 10000, 50000];

    //正在禁用
    private disableBetPressBtn: boolean;
    private areaChipsCache: Array<Array<cc.Node>> = [];
    private playerArray: Array<ViewGamePlayer> = [];
    private trendObjArray: Array<cc.Sprite> = [];
    private betButtonArray: Array<cc.Button> = [];
    private chipNodeArray: Array<cc.Node> = [];
    private coinRectNodeArray: Array<cc.Widget> = [];
    private chipNameArray: Array<number> = [1, 10, 50, 100, 500];
    private betOnTableArrayButton: Array<cc.Button> = [];

    private betHeadPanelAnimation: Array<boolean> = [];
    private TimerID: Array<string> = [];
    private playerHead: cc.Sprite;
    private playerHeadBg: cc.Sprite;
    private playerHeadNode: cc.Node;
    private playerName: cc.Label;
    public playerGold: cc.Label;

    private playerVip: cc.Sprite;
    private vipLabel: cc.Label;
    private CardLeft: cc.Node;
    private CardRight: cc.Node;
    private leftPoker: Poker;
    private rightPoker: Poker;
    private middleBet: cc.Node;
    private huCoinRect: cc.Widget;
    private heCoinRect: cc.Widget;
    private longCoinRect: cc.Widget;
    private trendList: cc.Node;
    private clockNode: cc.Node;
    private countDownText: cc.Label;
    private startBetEff: sp.Skeleton;
    private stopBetEff: sp.Skeleton;
    private longhuEff: sp.Skeleton;
    private waitNextEff: sp.Skeleton;
    private tableEffhe: cc.Animation;
    private tableEffhu: cc.Animation;
    private tableEfflong: cc.Animation;
    private mywineffect: sp.Skeleton;
    private xiayiju: sp.Skeleton;
    private mybetNumber: cc.Node;
    private leftPosNode: cc.Node;
    private rightPosNode: cc.Node;
    private betTableButton: cc.Node;
    private onlineButton: cc.Button;
    private onlineButtonPos: cc.Vec3;
    private trendButton: cc.Button;
    private kaiPaiZhong: boolean = false;
    private BetCoinNode: cc.Node;
    private playerHeadNodePos: cc.Vec3;
    private xingxing: cc.Node;
    public OnAwake() {
        this.betEffectArray = [];
        this.leftPosNode = this.FindTransform("pokerSendpos1");
        this.playerHeadNode = this.FindTransform("headNode");
        this.rightPosNode = this.FindTransform("pokerSendpos2");
        this.xingxing = this.FindTransform("xingxing");
        this.xiayiju = this.FindTransform("dengdaixiayiju").getComponent(sp.Skeleton);
        this.startBetEff = this.FindTransform("kaishixiazhu").getComponent(sp.Skeleton);
        this.stopBetEff = this.FindTransform("tingzhixiazhu").getComponent(sp.Skeleton);
        this.longhuEff = this.FindTransform("longhuBattle").getComponent(sp.Skeleton);
        this.waitNextEff = this.FindTransform("dengdaixiayiju").getComponent(sp.Skeleton);
        this.tableEffhe = this.FindTransform("tableeffhe").getComponent(cc.Animation);
        this.tableEffhu = this.FindTransform("tableeffhu").getComponent(cc.Animation);
        this.tableEfflong = this.FindTransform("tableefflong").getComponent(cc.Animation);
        this.mybetNumber = this.FindTransform("mybetNumber"); 
        this.mywineffect = this.FindTransform("mywineffect").getComponent(sp.Skeleton);
        this.onlineButton = this.FindTransform("online").getComponent(cc.Button);
        this.trendButton = this.FindTransform("trend").getComponent(cc.Button);
        this.BetCoinNode = this.FindTransform("BetCoinNode");
        this.betEffectArray[1] = this.tableEffhu;
        this.betEffectArray[2] = this.tableEfflong;
        this.betEffectArray[3] = this.tableEffhe;

        this.betTableButton = this.FindTransform("betTableButton");
        this.chipNameArray.forEach((element) => {
            //从0开始写//
            this.chipNodeArray[this.chipNodeArray.length] = this.FindTransform("" + element);
        });

        //7个头像动画//---------------------
        for (let index = 0; index <= 7; index++) {
            this.betHeadPanelAnimation[index] = false;
        }

        for (let i = 1; i <= this.betTableButton.childrenCount; i++) {
            this.betOnTableArrayButton[i] = this.betTableButton.children[i - 1].getComponent(cc.Button);
        }

        this.leftPoker = new Poker();
        this.rightPoker = new Poker();
        this.CardLeft = this.FindTransform("leftCard");
        this.CardRight = this.FindTransform("rightCard");


        this.huCoinRect = this.FindTransform("betOnHuRect").getComponent(cc.Widget);
        this.heCoinRect = this.FindTransform("betOnHeRect").getComponent(cc.Widget);
        this.longCoinRect = this.FindTransform("betOnLongRect").getComponent(cc.Widget);
        this.countDownText = this.FindTransform("timeCount").getComponent(cc.Label);
        this.clockNode = this.FindTransform("clock");
        this.middleBet = this.FindTransform("middleBet");
        this.leftPoker.Init(this.CardLeft.getChildByName("poker"), 1, 10, false);
        this.rightPoker.Init(this.CardRight.getChildByName("poker"), 2, 11, false);

        let leftNode: cc.Node = this.FindTransform("leftPlayerNode");
        let rightNode: cc.Node = this.FindTransform("rightPlayerNode");
        this.trendList = this.FindTransform("trendlist");

        this.coinRectNodeArray[1] = this.huCoinRect;
        this.coinRectNodeArray[2] = this.longCoinRect;
        this.coinRectNodeArray[3] = this.heCoinRect;

        for (let index = 1; index <= 6; index++) {
            this.playerArray[index - 1] = new ViewGamePlayer();
            this.playerArray[index - 1].Init(this.FindTransform("playerl" + (index)));
        }
        for (let index = 1; index <= 5; index++) {
            this.betButtonArray[index - 1] = this.FindTransform("betC" + index).getComponent(cc.Button);
        }

        // this.playerVip = this.FindTransform("myvipIcon").getComponent(cc.Sprite);
        //this.vipLabel = this.FindTransform("vip").getComponent(cc.Label);
        this.playerHead = this.FindTransform("myplayerhead").getComponent(cc.Sprite);
        this.playerHeadBg = this.FindTransform("headBg").getComponent(cc.Sprite);
        this.playerGold = this.FindTransform("mymoney").getComponent(cc.Label);
        this.playerName = this.FindTransform("myname").getComponent(cc.Label);

        this.onlineButtonPos = this.onlineButton.node.position;
        this.playerHeadNodePos = this.playerHeadNode.position;

        this.trendButton.interactable = false;
    }

    public TrendOK() {
        this.trendButton.interactable = true;
    }

    //
    public ShowingEffect(btn: cc.Button) {
        let index = 0;
        this.betButtonArray.forEach((vv: cc.Button) => {
            if (btn == vv) {
                this.curPressChipIndex = index;
                cc.find("eff", vv.node).active = true;
            }
            else {
                cc.find("eff", vv.node).active = false;
            }
            index++;
        });
    }

    //桌面下注disable//
    public DisableBetPanel(enable: boolean) {
        this.betOnTableArrayButton.forEach((vv: cc.Button) => {
            vv.interactable = enable;
        });
    }

    curPressChipIndex: number = 0;
    //筹码按钮disable
    public DisableBetButton(enable: boolean, leftGold: number) {
        this.disableBetPressBtn = !enable;
        let index = 0;
        let number = 0;
        this.betButtonArray.forEach((vv: cc.Button) => {

            let chiptype = this.chipNameArray[index];
            let ok = enable && (leftGold / 100 - chiptype) >= 0;
            vv.interactable = ok;
            cc.find("eff", vv.node).active = false;
            //
            if (ok) {
                if (this.curPressChipIndex == index) {
                    cc.find("eff", vv.node).active = true;
                    number = this.chipTypeArray[index];
                }
            }
            index++;
        });
        return number;
    }

    public RefreshPlayerArrayList(seatList: SeatInfo[]) {
        for (let index = 0; index < seatList.length; index++) {
            const element = seatList[index];
        }
        for (let index = 1; index <= this.playerArray.length; index++) {
            this.playerArray[index - 1].RefreshByData(seatList[index]);
        }
    }

    public Refresh20GameResult(recordArray: Array<number>) {

        for (let index = 1; index <= 20; index++) {//20场比赛
            let trend: cc.Node = Util.GetOrCreateItem(this.trendList, index - 1);
            trend.active = false;
        };

        let id = 0;
        cc.log("recordArray", recordArray)
        for (let index = (recordArray.length < 20 ? recordArray.length - 1 : 19); index >= 0; index--) {
            const element = recordArray[index];

            let node = this.trendList.children[id];
            node.active = true;
            for (let k = 0; k < node.children.length; k++) {
                const E = node.children[k];
                E.active = element == k + 1;
            }
            id++;
        }
    }


    //
    public InitMyPlayerInfo(roleInfo: LHDRoleInfo) {
        if (roleInfo == null) {
            if (Global.showLog == true)
                cc.error("玩家信息为空--------------------");
            return;
        }

        this.playerName.string = roleInfo.userName;
        //   this.playerVip.node.active = roleInfo.vipLv > 0;
        this.playerGold.string = Util.formatGoldText(roleInfo.gold);

        if (roleInfo.headImageUrl != "") {
            Util.SetHeadNetIcon(this.playerHead, roleInfo.headImageUrl);
            Util.SetHeadBox(this.playerHeadBg, roleInfo.headbox);
        }
        //  this.vipLabel.string = "Vip-" + roleInfo.vipLv;
        this.ShowingEffect(this.betButtonArray[0]);

    }


    ///刷新下注信息。
    public RefreshMyBetInfo(model: ModelDragonVsTiger, isSeatPlayer: boolean = false) {
        //下注区域是虎龙和 ui节点顺序也是//

        for (let i = 0; i < this.mybetNumber.childrenCount; i++) {
            this.mybetNumber.children[i].getChildByName("myBetGold").getComponent(cc.Label).string = (model.myAreaDropCoin[i + 1] / 100) + "";
            this.mybetNumber.children[i].getChildByName("myBetGold").parent.active = model.myAreaDropCoin[i + 1] > 0;
        }

        for (let i = 0; i < this.middleBet.childrenCount; i++) {
            this.middleBet.children[i].active = model.totalBetOnTableArea[i + 1] > 0;
            let mark = this.middleBet.children[i].getChildByName("ShensuanziMark");
            //mark.active = false ;
            this.middleBet.children[i].getChildByName("totalbet").getComponent(cc.Label).string = (model.totalBetOnTableArea[i + 1] / 100) + "";
            if (isSeatPlayer)
                this.FlyXingXing(model.godBetArray, mark, i + 1);
        }
    }

    public RefreshMark(model: ModelDragonVsTiger) {
        for (let i = 0; i < this.middleBet.childrenCount; i++) {
            let mark = this.middleBet.children[i].getChildByName("ShensuanziMark");
            mark.active = model.godBetArray[i + 1];

            // cc.error("@@@@@@@@@@"+mark.active);
        }

    }

    public FlyXingXing(godBet: Array<boolean>, markNode: cc.Node, index: number) {
        if (markNode.active)
            return;
        const element = godBet[index];
        if (element == true) {
            let node = this.xingxing.children[index - 1];
            if (node.active == true)
                return;
            node.active = true;
            let pos = node.parent.convertToNodeSpaceAR(markNode.parent.convertToWorldSpaceAR(markNode.position));
            let moveTween = XTween.DoMove(node, node.position, pos, 0.6);
            moveTween.SetFinishCallback(() => {
                markNode.active = true;
                node.position = cc.Vec2.ZERO;
                node.active = false;
            });
            moveTween.Play();
        }
    }




    //初始化牌桌状态//
    public InitlizeDesktopState(model: ModelDragonVsTiger) {
        this.DisableBetPanel(model.gameState == GameState.BetState);
        this.DisableBetButton(model.gameState == GameState.BetState, Number(model.roleInfo.gold).valueOf());
        let createChip = false;

        switch (model.gameState) {
            case GameState.WaitingStartState:
                this.WaitStartState();
                break;
            case GameState.BetState:
                createChip = true;
                this.StartBettingState(model.countDownTime);
                break;
            case GameState.StopBetState:
                createChip = true;
                this.StopBettingState(() => {
                    if (Global.showLog == true)
                        cc.log("目前状态停止下注-----------");
                });
                break;
            case GameState.SettlementState:
                this.ShowWaitNextLoading();
                this.DeleteTimer();
            case GameState.WaitingNextGame:
                this.ShowWaitNextLoading();
                this.DeleteTimer();
                break;
        }

        if (createChip) {
            let index = 1;
            //桌面筹码数据列表拆分筹码//
            model.totalBetOnTableArea.forEach(element => {
                let betTotalCount = element;
                let betArea = index;

                let count = 0;
                for (let i = 5; i >= 1; i--) {
                    let chipNumber = this.chipTypeArray[i - 1];
                    let chipCount = Math.floor(betTotalCount / chipNumber);
                    betTotalCount -= chipNumber * chipCount;
                    this.SetChipPos(betArea, chipCount, chipNumber);

                    //cc.error(chipCount + "个筹码大小为" + chipNumber +"区域总筹码" + betTotalCount);
                    count += chipCount;
                }

                index++;
            });

        }
    }


    //服务器筹码在客户端的位置
    public RealChipIndex(chip: number) {
        return this.chipTypeArray.indexOf(chip);
    }

    //设置筹码区域//
    public SetChipPos(area: number, count: number, chiptype: number) {
        for (let index = 0; index < count; index++) {
            let chipNode = this.CreateChips(area, this.RealChipIndex(chiptype));
            let areaWidget = this.coinRectNodeArray[area];


            let chipPos = areaWidget.node.convertToWorldSpaceAR(new cc.Vec2(Random.RangeFloat(-areaWidget.node.width / 2, areaWidget.node.width / 2)
                , Random.RangeFloat(-areaWidget.node.height / 2, areaWidget.node.height / 2)));     //在高与宽之间----//
            if (chipNode == null) {
                if (Global.showLog == true)
                    cc.error("设置筹码为空----------------area= " + area + "  count= " + count + "chiptype= " + chiptype);
            }
            chipNode.position = this.BetCoinNode.convertToNodeSpaceAR(chipPos);
        }
    }

    //
    public GetRandomNum(Min, Max): number {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    //筹码区域+筹码类型 去缓存中取出  chipType是01234//
    public CreateChips(area: number, chipType: number) {
        if (this.areaChipsCache[area] == null) {
            this.areaChipsCache[area] = [];
        }


        let cointNode: cc.Node = null;
        let coinNodeTemplateCatched = this.chipNodeArray[chipType];

        if (coinNodeTemplateCatched == null) {
            if (Global.showLog == true) {
                cc.error(chipType);
                cc.error(this.chipNodeArray.length);
                cc.error("coinNodeTemplateCatched");
            }

            return;
        }

        for (let index = 0; index < this.areaChipsCache[area].length; index++) {
            cointNode = this.areaChipsCache[area][index];//缓存池中取出没有激活的元素
            if (cointNode.name.split("#")[1] == (chipType.toString()) && cointNode.active == false) {
                this.areaChipsCache[area].splice(index, 1);
                break;
            }
            //cc.error("名字不匹配则不要");
            cointNode = null;
        }

        if (cointNode == null)//在coinNode没取到的情况下//
        {
            cc.log("coinNodeTemplateCatched", coinNodeTemplateCatched)
            cointNode = cc.instantiate(coinNodeTemplateCatched);
            cointNode.name = area + "#" + chipType;
            // cc.error("&&&&&&&&" + cointNode.name);
            cointNode.setParent(this.BetCoinNode);//放入對應area的betrect下面//
        }
        cointNode.active = true;

        //cointNode.parent.setSiblingIndex(cointNode.parent.parent.childrenCount)
        cointNode.setSiblingIndex(cointNode.parent.childrenCount);
        this.areaChipsCache[area].push(cointNode);//节点的名字包含了筹码的大小信息//
        return cointNode;
    }


    //筹码币合并50
    public ChipsTrimExcess(area: number) {
        let openCount = 0;
        this.areaChipsCache[area].forEach((Element) => {
            if (Element.active) {
                openCount += 1;
            }

        });
        //超出50个的筹码隐藏起来//
        if (openCount > 50) {
            for (let i = 0; i < openCount - 50; i++) {
                for (let k = 0; k < this.areaChipsCache[area].length; k++) {
                    let node = this.areaChipsCache[area][k];
                    this.areaChipsCache[area][k].active = false;
                    this.areaChipsCache[area].splice(k, 1);
                    this.areaChipsCache[area].push(node);
                }
            }
        }
    }


    //重置
    public Reset() {
        for (let index = 0; index < this.xingxing.childrenCount; index++) {
            const element = this.xingxing.children[index];
            element.active = false;
        }

        this.DeleteTimer();
        this.xiayiju.node.active = false;
        this.clockNode.active = false;

        for (let i = 0; i < this.mybetNumber.childrenCount; i++) {
            this.mybetNumber.children[i].getChildByName("myBetGold").parent.active = false;
            this.mybetNumber.children[i].getChildByName("myBetGold").getComponent(cc.Label).string = "";
        }

        for (let i = 0; i < this.middleBet.childrenCount; i++) {
            this.middleBet.children[i].getChildByName("ShensuanziMark").parent.active = false;;
            //this.middleBet.children[i].getChildByName("ShensuanziMark").active = false;
        }


        this.playerHeadNode.position = this.playerHeadNodePos;
        this.playerHeadNode.scale = 1;
        this.betEffectArray.forEach((element) => {
            element.node.active = false;
        });

        this.TimerID.forEach(element => {
            TimerManager.GetInstance().DeleteTimer(element);
        });

        for (let index = 0; index < this.xingxing.childrenCount; index++) {
            this.xingxing.children[index].active = false;
            this.xingxing.children[index].position = cc.Vec2.ZERO;
        }
    }

    //重置所有扑克(左右) 默认隐藏。
    public ResetAllPoker() {
        this.leftPoker.ResetPoker();
        this.rightPoker.ResetPoker();
        this.leftPoker.SetCardScale(0.7)
        this.rightPoker.SetCardScale(0.7);
    }

    //等待开始状态
    public WaitStartState() {
        if (Global.showLog == true)
            cc.log("等待开始状态======================");
        this.clockNode.active = false;
        this.Reset();
        this.ResetAllPoker();

        Util.PlaySpineEffect(this.longhuEff, () => {
            if (Global.showLog == true)
                cc.log("播放完龙虎特效");
            this.longhuEff.node.active = false;
        }, "1");

        this.playerArray.forEach(Element => {
            Element.wineffect.node.active = false;
        });
        this.mywineffect.node.active = false;

        for (let i = 0; i < this.middleBet.childrenCount; i++) {
            this.middleBet.children[i].getChildByName("ShensuanziMark").active = false;;
        }
    }


    //开始下注状态
    public StartBettingState(time: number) {
        AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.VoiceStartBet);
        Util.PlaySpineEffect(this.startBetEff, () => {

        });
        this.TimerCountDown(time);

        this.ResetAllPoker();
        this.leftPoker.FlyTo(0.1, this.leftPosNode.position, () => {
            AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.SoundShuffleCard)
        }, 0);
        this.rightPoker.FlyTo(0.1, this.rightPosNode.position, () => {
            AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.SoundShuffleCard)
        }, 0.1);
    }

    //等待下一场
    public ShowWaitNextLoading() {
        Util.PlaySpineEffect(this.waitNextEff, () => {

        });
    }


    //停止下注状态
    public StopBettingState(callback: Function) {
        AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.VoiceStopBet);
        Util.PlaySpineEffect(this.stopBetEff, callback);
        this.DeleteTimer();
        this.leftPoker.FlyTo(0.1, this.leftPosNode.position, null, 0);
        this.rightPoker.FlyTo(0.1, this.rightPosNode.position, null, 0.1);
    }


    timerClockID: string = "";
    public TimerCountDown(timerLeft: number) {
        if (this.timerClockID != "") {
            TimerManager.GetInstance().DeleteTimer(this.timerClockID);
        }
        this.clockNode.active = timerLeft > 0;
        let time = timerLeft;
        this.timerClockID = TimerManager.GetInstance().CallActionDelay(() => {
            if (timerLeft <= 3) {
                AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.SoundCountDown);
            }
            this.countDownText.string = timerLeft + "";
            timerLeft--;
        }, 0, null, time + 1, 1, false);
    }


    public DeleteTimer() {
        this.clockNode.active = false;
        if (this.timerClockID != "") {
            TimerManager.GetInstance().DeleteTimer(this.timerClockID);
        }
    }


    //座位玩家下注
    public ShowPlayerBetChip(myPlayerId: string, otherPlayerId: string, seatBetInfo: any, model: ModelDragonVsTiger, isGodBet: boolean = false) {
        if (!this.isShow) {
            return;
        }
        if (isGodBet == false) {

        }

        if (Global.PlayerInfo.playerId == seatBetInfo.playerId) {

        }
        else {
            for (let index = 1; index <= model.seatArray.length - 1; index++) {
                const element = model.seatArray[index];
                if (element.roleInfo.playerId == otherPlayerId)// &&  (index-1) == 0测试代码
                {
                    this.BetAnimation(this.playerArray[element.seatId].notEmpty, seatBetInfo, null, index);
                    this.playerArray[element.seatId].RefreshGold(seatBetInfo.gold);
                    return;
                }
            }
            this.BetAnimation(this.onlineButton.node, seatBetInfo, null, 7);//非座位玩家下注//
        }
    }

    //偏移
    private offsetArray: Array<cc.Vec2> = [new cc.Vec2(0, 0), new cc.Vec2(20, 0), new cc.Vec2(-20, 0), new cc.Vec2(150, 0)];




    ///下注动画
    public BetAnimation(playerPanel: cc.Node, seatBetInfo: any, chipPos: cc.Vec2, PanelPlayAnimationID: number) {
        //cc.error(seatBetInfo.chipType+"#############");
        TimerManager.GetInstance().CallActionDelay(() => {
            let realIndex = this.RealChipIndex(seatBetInfo.chipType);
            if (realIndex == -1) {
                if (Global.showLog == true) {
                    cc.error(seatBetInfo);
                    cc.error(seatBetInfo.chipType);
                    cc.error(typeof (seatBetInfo.chipType));
                }

                return;
            }

            let betChip = this.CreateChips(seatBetInfo.betArea, this.RealChipIndex((seatBetInfo.chipType)));

            cc.error(betChip + "@@@@@@@@@@@");

            if (chipPos != null) {
                betChip.position = betChip.parent.convertToNodeSpaceAR(chipPos);
            }
            else {
                let pos = playerPanel.parent.convertToWorldSpaceAR(playerPanel.position);
                betChip.position = betChip.parent.convertToNodeSpaceAR(pos);
            }
            betChip.active = true;
            let betAreaRect = this.coinRectNodeArray[seatBetInfo.betArea];
            let areaNode = betAreaRect.node;

            let chipPosNew = areaNode.convertToWorldSpaceAR(new cc.Vec2(Random.RangeFloat(-betAreaRect.node.width / 2, betAreaRect.node.width / 2)
                , Random.RangeFloat(-betAreaRect.node.height / 2, betAreaRect.node.height / 2)));

            chipPosNew = betChip.parent.convertToNodeSpaceAR(chipPosNew);

            this.ChipFly(betChip, betChip.position, chipPosNew, 0, XTweenCurvType.OutCirc, true, 1.2, () => {
                this.ChipScaleTween(betChip, 0.2, 1);
            }, null);
        },
            this.PlayerPanelAnimationTime
        );


        if (this.betHeadPanelAnimation[PanelPlayAnimationID] == false) {
            this.betHeadPanelAnimation[PanelPlayAnimationID] = true;

            let recordPos = playerPanel.position;
            let offsetval = null;
            if (PanelPlayAnimationID >= 1 && PanelPlayAnimationID < 7) {
                offsetval = PanelPlayAnimationID % 2 == 1 ? this.offsetArray[1] : this.offsetArray[2];//135 左边 246右边
            }
            else if (PanelPlayAnimationID == 0) {
                offsetval = recordPos;
            }
            else {
                offsetval = new cc.Vec2(this.onlineButton.node.position.x + 20, this.onlineButton.node.position.y - 20);
            }

            let tweenMove = XTween.DoMove(playerPanel, playerPanel.position, offsetval, this.PlayerPanelAnimationTime, 1, false, XTweenCurvType.OutSine);

            tweenMove.SetFinishCallback(() => {
                let backTween = XTween.DoMove(playerPanel, offsetval, recordPos, this.PlayerPanelAnimationTime, 1, false, XTweenCurvType.OutSine);
                backTween.SetFinishCallback(() => {
                    this.betHeadPanelAnimation[PanelPlayAnimationID] = false;
                });
                backTween.Play();
            });
            tweenMove.Play();

            let tweenScale = XTween.DoScale(playerPanel, cc.Vec2.ONE, new cc.Vec2(1.1, 1.1), this.PlayerPanelAnimationTime, 1, false, XTweenCurvType.OutSine);
            tweenScale.SetFinishCallback(() => {
                let tweenScaleC = XTween.DoScale(playerPanel, new cc.Vec2(1.1, 1.1), cc.Vec2.ONE, this.PlayerPanelAnimationTime, 1, false, XTweenCurvType.OutSine);
                tweenScaleC.Play();
            });
            tweenScale.Play();
        }
        else {
            //cc.error("当前正在播放动画中------------");
        }
    }

    public RefreshShenSuan(model: ModelDragonVsTiger) {
    }

    public ChipFly(chipNode: cc.Node, from: cc.Vec2, to: cc.Vec2, delayTime: number, easeType: XTweenCurvType, hasFollowTween: boolean, scaleTweenParam: any, callBack: any, callBackParam: any) {
        let fromPos = from;
        let toPos = to;


        let delay = delayTime;
        chipNode.position = from;


        let dis = to.sub(from).mag();


        let baseTime = Random.RangeFloat(0.52, 0.62);

        if (XTweenCurvType.InBack == easeType) {
            baseTime += 0.3;
        }

        //这里先不管
        let moveTime = baseTime + Math.floor(dis / 100) * 0.032;

        if (hasFollowTween) {
            chipNode.scale = 0.9;
            this.ChipScaleTween(chipNode, baseTime, scaleTweenParam);
        }


        let tweener = XTween.DoMove(chipNode, fromPos, toPos, moveTime, 1, false, easeType);
        tweener.SetFinishCallback(() => {
            if (callBack != null) {
                callBack(callBackParam);
            }
        });
        tweener.SetDelay(delayTime);
        tweener.Play();

    }

    //
    public ChipScaleTween(chipNode: cc.Node, moveTime: number, scaleTweenParam: number) {
        let tweener = XTween.DoScale(chipNode, new cc.Vec2(chipNode.scaleX, chipNode.scaleY), new cc.Vec2(scaleTweenParam, scaleTweenParam), moveTime, 1, false, XTweenCurvType.InSine);
        tweener.Play();
    }

    private settleMentCallBack: any;
    ///
    public SettleMentWork(model: ModelDragonVsTiger, callBack: any) {
        let myWinGold = 0;

        let Data: PushBattleSettlementRes = model.settlementData;
        let myRoleInfo = null;
        if (Data.isMePlayed) {
            Data.settlementRoleInfo.forEach((settleInfo) => {
                if (settleInfo.playerId == model.roleInfo.playerId) {
                    myWinGold = settleInfo.resultGold;
                    myRoleInfo = settleInfo;
                }
            })
        }

        let settlementList = Data.seatSettlementInfoList;
        this.OpenCardState(Data.longCardInfo, Data.huCardInfo, Data.winState, false, () => {
            if (this.isShow == false) {
                return;
            }

            if (this.settleMentCallBack != null) {
                this.settleMentCallBack();
            }

            this.WinChipAnimation(Data, myWinGold, () => {
                if (this.isShow == false) {
                    return;
                }
                Data.seatSettlementInfoList.forEach(Element => {
                    let gold: Number = new Number(Element.winGold);
                    this.playerArray[Element.seatId].SettleAnimation(gold.valueOf());
                });

                if (myWinGold == null) {
                    if (Global.showLog == true)
                        cc.error("不关我自己的事情");
                    return;
                }
                let content = myWinGold >= 0 ? "+" + (Util.formatGoldText(myWinGold, false)) : "" + (Util.formatGoldText(myWinGold, false));

                let selfWinLabel = this.FindTransform("selfWinLabel").getComponent(cc.Label);
                let selfLoseLabel = this.FindTransform("selfLoseLabel").getComponent(cc.Label);
                selfWinLabel.string = "";
                selfLoseLabel.string = "";
                if (myWinGold >= 0) {
                    if (!model.settlementData.isMePlayed) {
                        return;
                    }
                    selfWinLabel.string = content;
                    selfWinLabel.node.active = true;
                    Util.PlaySpineEffect(this.mywineffect, () => {


                    });
                    let tweener = XTween.DoMove(selfWinLabel.node, new cc.Vec2(0, 10), new cc.Vec2(0, 55), 0.6, 1);
                    tweener.SetFinishCallback(() => {
                        Util.PerformWithDelay(1, () => {
                            selfWinLabel.node.active = false;
                        }, this.TimerID);
                    });

                    tweener.Play();
                }
                else {
                    selfLoseLabel.string = content;
                    selfLoseLabel.node.active = true;

                    let tweener = XTween.DoMove(selfLoseLabel.node, new cc.Vec2(0, 10), new cc.Vec2(0, 55), 0.6, 1);
                    tweener.SetFinishCallback(() => {
                        Util.PerformWithDelay(1, () => {
                            selfLoseLabel.node.active = false;
                        }, this.TimerID);
                    });

                    tweener.Play();

                }

            });
        });
    }

    //
    public MoveChipsToTarget(chipNode: cc.Node, movePos: cc.Vec2, overCall: any, overCallParam: any, hasFollowTween: boolean = true) {
        let from = chipNode.position;
        let to = movePos;
        let delayTime = Random.RangeFloat(0.05, 0.5);
        this.ChipFly(chipNode, from, to, delayTime, XTweenCurvType.InBack, hasFollowTween, null, () => {
            if (overCall != null) {
                overCall(overCallParam);
            }
            chipNode.active = false;
        }, null);

    }


    private ChipsSettlementAnimationRangMin = 0.35;
    private ChipsSettlementAnimationRangMax = 0.6;
    //结算筹码动画
    public WinChipAnimation(Data: PushBattleSettlementRes, playerWinGold: number, callBack: any) {
        let chipList: Array<cc.Node> = [];
        let chipCount = 0;
        let hasChip = false;
        this.areaChipsCache.forEach(chipArray => {
            chipArray.forEach(Element => {
                chipCount++;
                if (Element.active) {
                    hasChip = true;
                    chipList.push(Element);
                }
            })
        });

        let minCount = Math.floor(chipList.length * 0.05);
        let maxCount = Math.floor(chipList.length * 0.1);
        let index = 1;
        Data.seatSettlementInfoList.forEach(Element => {
            if (Element.winGold != "") {
                let winGold = new Number(Element.winGold).valueOf();


                let Count = Random.RangeInt(minCount, maxCount);

                for (let index = 0; index < Count; index++) {
                    let chipNode = chipList[0];
                    let headNode = this.playerArray[Element.seatId].headImageBg.node;
                    let pos = chipNode.parent.convertToNodeSpaceAR(headNode.parent.convertToWorldSpaceAR(headNode.position));
                    this.MoveChipsToTarget(chipNode, pos, (headNode) => {

                    }, headNode, false);
                    Util.RemoveArray(chipList, chipNode);
                }
                index++;
            }
        });

        if (playerWinGold > 0) {
            let Count = Random.RangeInt(minCount, maxCount);
            for (let index = 0; index < Count; index++) {
                let chipNode = chipList[0];
                let headNode = this.playerHeadBg.node;
                let pos = chipNode.parent.convertToNodeSpaceAR(headNode.parent.convertToWorldSpaceAR(headNode.position));

                this.MoveChipsToTarget(chipNode, pos, (headNode) => {


                }, headNode, false);
                Util.RemoveArray(chipList, chipNode);

            }
        }

        chipList.forEach(element => {
            let headNode = this.onlineButton.node;
            let pos = element.parent.convertToNodeSpaceAR(headNode.parent.convertToWorldSpaceAR(headNode.position));
            this.MoveChipsToTarget(element, pos, (headNode) => {
            }, headNode, false);
        });


        Util.PerformWithDelay(this.ChipsSettlementAnimationRangMax, callBack, this.TimerID, true);
        if (chipList.length > 0)
            AudioManager.GetInstance().SoundPlay(DragonVsTigerConfig.Audio.SoundTakeChip);
    }

    public WinDeskAreaEffect(winArea: any) {
        this.betEffectArray[winArea].node.active = true;
    }

    public GetWinAudio(point: number) {
        switch (point) {
            case 1:
                return DragonVsTigerConfig.Audio.VoiceWin1;
                break;
            case 2:
                return DragonVsTigerConfig.Audio.VoiceWin2;
                break;
            case 3:
                return DragonVsTigerConfig.Audio.VoiceWin3;
                break;
        }
        return "";
    }

    public GetPointAudio(point: number) {
        //cc.error("POINT IS -----------------"+point);
        switch (point) {
            case 1:
                return DragonVsTigerConfig.Audio.VoicePoint1;
                break;
            case 2:
                return DragonVsTigerConfig.Audio.VoicePoint2;
                break;
            case 3:
                return DragonVsTigerConfig.Audio.VoicePoint3;
                break;
            case 4:
                return DragonVsTigerConfig.Audio.VoicePoint4;
                break;

            case 5:
                return DragonVsTigerConfig.Audio.VoicePoint5;
                break;

            case 6:
                return DragonVsTigerConfig.Audio.VoicePoint6;
                break;
            case 7:
                return DragonVsTigerConfig.Audio.VoicePoint7;

                break;
            case 8:
                return DragonVsTigerConfig.Audio.VoicePoint8;
                break;
            case 9:
                return DragonVsTigerConfig.Audio.VoicePoint9;
                break;
            case 10:
                return DragonVsTigerConfig.Audio.VoicePoint10;
                break;
            case 11:
                return DragonVsTigerConfig.Audio.VoicePoint11;
                break;
            case 12:
                return DragonVsTigerConfig.Audio.VoicePoint12;
                break;
            case 13:
                return DragonVsTigerConfig.Audio.VoicePoint13;
                break;
        }

        return "";
    }

    ///
    public OpenCardState(data1: CardInfo, data2: CardInfo, winstate: number, luckyHit: any, callBack: any) {
        this.leftPoker.DrawCard(data1.color, data1.size);
        this.rightPoker.DrawCard(data2.color, data2.size);

        let group = XTween.CreateXTweenerGroup();
        group.AddObserverObj(this.node);

        this.OpenOnePoker(group, this.leftPoker);
        this.OpenOnePoker(group, this.rightPoker);


        group.SetFinishCallback(() => {

            this.WinDeskAreaEffect(winstate);

            TimerManager.GetInstance().CallActionDelay(() => {


            }, 0.8);

            Util.PerformWithDelay(0.8, () => {
                if (this.isShow == false) {
                    return;
                }
                AudioManager.GetInstance().SoundPlay(this.GetWinAudio(winstate))
            }, this.TimerID, true)

            Util.PerformWithDelay(1, () => {
                this.betEffectArray.forEach((element) => {
                    element.node.active = false;
                })

                if (callBack != null) {
                    callBack();
                }
            }, this.TimerID, true);

        });

        group.Play();
    }

    public OpenOnePoker(group: XTweenerGroup, poker: Poker) {

        let openCardAnimTime2 = 0.3;
        let scale1 = XTween.DoScale(poker.cardNode, new cc.Vec2(0.7, 0.7), new cc.Vec2(0.52, 0.52), openCardAnimTime2);

        group.AddTweener(scale1, XTweenerGroupAddMode.Queue);
        let tweenerAct1 = XTween.GetTweenerAction(0, () => {
            let str1 = "MainGame/Audios/GameAudio/Poker_Open";
            AudioManager.GetInstance().SoundPlay(str1);
        });

        group.AddTweener(tweenerAct1, XTweenerGroupAddMode.Queue);


        let xRotate = XTween.DoScale(poker.cardNode, new cc.Vec2(0.52, 0.52), new cc.Vec2(0, 0.52), openCardAnimTime2);
        group.AddTweener(xRotate, XTweenerGroupAddMode.Parallel);

        let tweenerAct2 = XTween.GetTweenerAction(0, () => {
            poker.HideBack();
        });

        group.AddTweener(tweenerAct2, XTweenerGroupAddMode.Queue);


        let xRotate2 = XTween.DoScale(poker.cardNode, new cc.Vec2(0, 0.52), new cc.Vec2(0.52, 0.52), openCardAnimTime2);
        group.AddTweener(xRotate2, XTweenerGroupAddMode.Queue);

        let scale2 = XTween.DoScale(poker.cardNode, new cc.Vec2(0.52, 0.52), new cc.Vec2(0.7, 0.7), openCardAnimTime2);
        group.AddTweener(scale2, XTweenerGroupAddMode.Queue);

        let tweenerAct3 = XTween.GetTweenerAction(0, () => {
            let point = 0;
            if (poker.cardWeight == 14) {
                point = 1;
            }
            else if (poker.cardWeight == 15) {
                point = 2;
            }
            else {
                point = poker.cardWeight;
            }

            AudioManager.GetInstance().SoundPlay(this.GetPointAudio(point))
        })

        group.AddTweener(tweenerAct3, XTweenerGroupAddMode.Queue);
    }

    public UpdatePlayerGold(gold: number) {
        this.playerGold.string = Util.formatGoldText(gold);
    }

    public UpdateViewGold(gold: number) {
        if (this.disableBetPressBtn) {
            return;
        }

        gold /= 100;
        let index = 0;
        this.betButtonArray.forEach(element => {

            element.interactable = this.chipNameArray[index] <= gold;
            index++;
        })

        for (let index = 0; index < this.betButtonArray.length; index++) {
            const element = this.betButtonArray[index];
            if (element.interactable && cc.find("eff", element.node).active) {
                return null;
            }
            cc.find("eff", element.node).active = false;
        }

        for (let i = this.chipNameArray.length - 1; i >= 0; i--) {
            const element = this.chipNameArray[i];


            if (element <= gold) {
                this.curPressChipIndex = i;

                cc.find("eff", this.betButtonArray[i].node).active = true;
                return element;
            }
        }
    }

    ///我自己玩家下注
    public MyPlayerLocalBetAnimation(seatBetInfo: any) {
        //this.playerGold.string = Util.formatGoldText(seatBetInfo.gold);

        let betNode: cc.Button = null;
        this.betButtonArray.forEach((vv: cc.Button) => {
            if (vv.node.name.substr(vv.node.name.length - 1, 1) == (this.chipNameArray.indexOf(seatBetInfo.chipType / 100) + 1).toString()) {
                betNode = vv;
            }
        }
        );
        if (betNode == null) {
            return;
        }
        else {
            for (let index = 0; index < this.playerArray.length; index++) {
                if (this.playerArray[index].seatInfo != null && seatBetInfo.playerId == this.playerArray[index].seatInfo.roleInfo.playerId) {
                    this.playerArray[index].RefreshGold(seatBetInfo.gold);
                }
            }
            this.BetAnimation(this.playerHeadNode, seatBetInfo, betNode.node.parent.convertToWorldSpaceAR(betNode.node.position), 0);
        }
    }

    public OnShowView() {
        AudioManager.GetInstance().BGMPlay(DragonVsTigerConfig.Audio.BgMusic);

        this.playerHeadNode.position = this.playerHeadNodePos;
        this.onlineButton.node.position = this.onlineButtonPos;
        this.playerHeadNode.scale = 1;
        this.onlineButton.node.scale = 1;
        this.playerArray.forEach((element) => {
            element.Reset();
        });
    }


    public OnHideView() {
        this.trendButton.interactable = false;
        if (this.kaiPaiZhong) {

        }
        this.mywineffect.node.active = false;
        this.playerArray.forEach((element) => {
            element.Reset();
        });

        let selfWinLabel = this.FindTransform("selfWinLabel").getComponent(cc.Label);
        let selfLoseLabel = this.FindTransform("selfLoseLabel").getComponent(cc.Label);
        selfWinLabel.string = "";
        selfLoseLabel.string = "";
        for (let index = 0; index < this.TimerID.length; index++) {
            TimerManager.GetInstance().DeleteTimer(this.TimerID[index]);
        }
        this.TimerID = [];
        this.playerHeadNode.position = this.playerHeadNodePos;
        this.onlineButton.node.position = this.onlineButtonPos;
        this.playerHeadNode.scale = 1;
        this.onlineButton.node.scale = 1;
        TimerManager.GetInstance().ClearAllButKeepLive();
        this.HideAllChip();

        for (let index = 0; index <= 7; index++) {
            this.betHeadPanelAnimation[index] = false;
        }
    }

    //隐藏所有筹码
    private HideAllChip() {
        this.areaChipsCache.forEach((element) => {
            element.forEach(
                (elementNode) => {
                    elementNode.active = false;
                })
        });
    }

}




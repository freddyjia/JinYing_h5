import ModelRedVsBlack from "./ModelRedVsBlack";
import MessageNames from "../../Modules/MessageNames";
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
import Util from "../../Tools/Util";
import SpriteUtil from "../../Tools/SpriteUtil";
import { RBSeatInfo, IHistoryCardInfo, RBCardType, IRBRoleInfo, RBBattleState, RBBetArea, RBRoleInfo, RBHistoryRecord } from "../../Protos/RedBlackBattle";
import { PushRBBattleSettlementRes } from "../../Protos/RedBlackBattle";
import { RedVsBlackConfig } from "./RedVsBlackConfig";
import ccC from "../../Tools/ccC";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ViewRedVsBlack extends View {
    //常量//
    private PlayerPanelAnimationTime: number = 0.12;
    private disableBetPressBtn: boolean;
    private areaChipsCache: Array<Array<cc.Node>> = [];
    private playerArray: Array<ViewGamePlayer> = [];
    private trendObjArray: Array<cc.Node> = [];
    private trendCardTypeArray: Array<cc.Sprite> = [];
    private betButtonArray: Array<cc.Button> = [];
    private chipNodeArray: Array<cc.Node> = [];
    private coinRectNodeArray: Array<cc.Widget> = [];

    private betOnTableArrayButton: Array<cc.Button> = [];
    private betEffectArray: Array<sp.Skeleton> = [];
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
    private middleBet: cc.Node;
    private huCoinRect: cc.Widget;
    private heCoinRect: cc.Widget;
    private longCoinRect: cc.Widget;
    private clockNode: cc.Node;
    private countDownText: cc.Label;
    private startBetEff: sp.Skeleton;
    private stopBetEff: sp.Skeleton;
    private longhuEff: sp.Skeleton;
    private waitNextEff: sp.Skeleton;
    private tableEffhe: sp.Skeleton;
    private tableEffhu: sp.Skeleton;
    private tableEfflong: sp.Skeleton;
    private mywineffect: sp.Skeleton;
    private mybetNumber: cc.Node;
    private leftPosNode: cc.Node;
    private rightPosNode: cc.Node;
    private betTableButton: cc.Node;
    private onlineButton: cc.Button;
    private trendButton: cc.Button;
    private curPressChipIndex: number = 0;
    private timerClockID: string = "";
    private redPokerist: Array<Poker> = [];
    private blackPokerList: Array<Poker> = [];
    private allPokerList: Array<Poker> = [];
    private chipNameArray: Array<number> = [1, 10, 50, 100, 500];
    private chipTypeArray: Array<number> = [100, 1000, 5000, 10000, 50000];//类型是筹码界面*10
    private groupLeft: sp.Skeleton;
    private groupRight: sp.Skeleton;
    private BetCoinNode: cc.Node;
    private playerHeadNodePos: cc.Vec2;
    private onlineButtonPos: cc.Vec2;
    private xingxing: cc.Node;
    public OnAwake() {
        this.betEffectArray = [];
        this.playerHeadNode = this.FindTransform("headNode");
        for (let index = 1; index <= 3; index++) {
            let poker = new Poker();
            poker.Init(this.FindTransform("leftCard").children[index - 1]);
            this.blackPokerList.push(poker);
            this.allPokerList.push(poker);
            poker = new Poker();
            poker.Init(this.FindTransform("rightCard").children[index - 1]);
            this.redPokerist.push(poker);
        }
        for (let index = 2; index >= 0; index--) {
            this.allPokerList.push(this.redPokerist[index]);
        }
        this.BetCoinNode = this.FindTransform("BetCoinNode");
        this.xingxing = this.FindTransform("xingxing");
        this.groupLeft = this.FindTransform("GroupLeft").getComponent(sp.Skeleton);
        this.groupRight = this.FindTransform("GroupRight").getComponent(sp.Skeleton);
        this.groupLeft.node.active = false;
        this.groupRight.node.active = false;
        this.startBetEff = this.FindTransform("kaishixiazhu").getComponent(sp.Skeleton);
        this.stopBetEff = this.FindTransform("tingzhixiazhu").getComponent(sp.Skeleton);
        this.longhuEff = this.FindTransform("longhuBattle").getComponent(sp.Skeleton);
        this.waitNextEff = this.FindTransform("dengdaixiayiju").getComponent(sp.Skeleton);
        this.tableEffhe = this.FindTransform("tableeffhe").getComponent(sp.Skeleton);
        this.tableEffhu = this.FindTransform("tableeffhu").getComponent(sp.Skeleton);
        this.tableEfflong = this.FindTransform("tableefflong").getComponent(sp.Skeleton);
        this.mybetNumber = this.FindTransform("mybetNumber");
        this.mywineffect = this.FindTransform("mywineffect").getComponent(sp.Skeleton);
        this.onlineButton = this.FindTransform("online").getComponent(cc.Button);
        this.trendButton = this.FindTransform("trend").getComponent(cc.Button);
        this.betEffectArray[1] = this.tableEffhu;
        this.betEffectArray[2] = this.tableEfflong;
        this.betEffectArray[3] = this.tableEffhe;

        this.betTableButton = this.FindTransform("betTableButton");
        this.chipNameArray.forEach((element) => {
            //从0开始写//
            this.chipNodeArray[this.chipNodeArray.length] = this.FindTransform("" + element);
        });

        this.CardLeft = this.FindTransform("leftCard");
        this.CardRight = this.FindTransform("rightCard");


        this.huCoinRect = this.FindTransform("betOnHuRect").getComponent(cc.Widget);
        this.heCoinRect = this.FindTransform("betOnHeRect").getComponent(cc.Widget);
        this.longCoinRect = this.FindTransform("betOnLongRect").getComponent(cc.Widget);
        this.countDownText = this.FindTransform("timeCount").getComponent(cc.Label);
        this.clockNode = this.FindTransform("clock");
        this.middleBet = this.FindTransform("middleBet");

        let leftNode: cc.Node = this.FindTransform("leftPlayerNode");
        let rightNode: cc.Node = this.FindTransform("rightPlayerNode");

        this.coinRectNodeArray[1] = this.huCoinRect;
        this.coinRectNodeArray[2] = this.longCoinRect;
        this.coinRectNodeArray[3] = this.heCoinRect;
        // this.playerVip = this.FindTransform("myvipIcon").getComponent(cc.Sprite);
        // this.vipLabel =  this.FindTransform("vip").getComponent(cc.Label);
        this.playerHead = this.FindTransform("myplayerhead").getComponent(cc.Sprite);
        this.playerHeadBg = this.FindTransform("headBg").getComponent(cc.Sprite);
        this.playerGold = this.FindTransform("mymoney").getComponent(cc.Label);
        this.playerName = this.FindTransform("myname").getComponent(cc.Label);


        //7个头像动画的状态(其他玩家+)//---------------------
        for (let index = 0; index <= 7; index++) {
            this.betHeadPanelAnimation[index] = false;
        }

        for (let i = 1; i <= this.betTableButton.childrenCount; i++) {
            this.betOnTableArrayButton[i] = this.betTableButton.children[i - 1].getComponent(cc.Button);
        }

        for (let index = 1; index <= 6; index++) {
            this.playerArray[index - 1] = new ViewGamePlayer();
            this.playerArray[index - 1].Init(this.FindTransform("playerl" + (index)));
        }
        for (let index = 1; index <= 5; index++) {
            this.betButtonArray[index - 1] = this.FindTransform("betC" + index).getComponent(cc.Button);
        }

        this.trendButton.interactable = false;
        this.onlineButtonPos = this.onlineButton.node.position;
        this.playerHeadNodePos = this.playerHeadNode.position;
    }

    //桌面下注disable//
    public DisableBetPanel(enable: boolean) {
        this.betOnTableArrayButton.forEach((vv: cc.Button) => {
            vv.interactable = enable;
        });
    }
    //初始化牌桌状态//
    public InitlizeDesktopState(model: ModelRedVsBlack) {
        this.DisableBetPanel(model.gameState == RBBattleState.BetState);
        this.DisableBetButton(model.gameState == RBBattleState.BetState, Number(model.roleInfo.gold).valueOf());
        let createChip = false;

        // cc.error(model.gameState);
        // switch(model.gameState)
        // {
        //     case GameState.WaitingStartState:
        //         cc.error("等待状态#####");
        //     break;
        //     case GameState.BetState:
        //         cc.error("下注状态#####");  
        //     break;
        //     case GameState.StopBetState:
        //         cc.error("停止下注状态#####");  
        //     break;
        //     case GameState.SettlementState:
        //         cc.error("结算状态#####");  
        //     break;
        //     case GameState.WaitingNextGame:
        //         cc.error("等待开始下一局#####");  
        //     break;
        // }


        switch (model.gameState) {
            case RBBattleState.WaitingStartState:
                this.WaitStartState();
                break;
            case RBBattleState.BetState:
                createChip = true;
                this.StartBettingState(model.countDownTime);
                break;
            case RBBattleState.StopBetState:
                createChip = true;
                this.StopBettingState(() => {
                    if (Global.showLog == true)
                        cc.log("目前状态停止下注-----------");
                });
                break;
            case RBBattleState.SettlementState:
                this.ShowWaitNextLoading();
                this.DeleteTimer();
            case RBBattleState.WaitingNextGame:
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
                for (let i = 5; i >= 1; i--) {
                    let chipNumber = this.chipTypeArray[i - 1];
                    let chipCount = Math.floor(betTotalCount / chipNumber);
                    betTotalCount -= chipNumber * chipCount;
                    this.SetChipPos(betArea, chipCount, chipNumber);
                }
                index++;
            });
        }
    }

    //座位玩家下注
    public ShowPlayerBetChip(myPlayerId: string, otherPlayerId: string, seatBetInfo: any, model: ModelRedVsBlack, isGodBet: boolean = false) {
        if (!this.isShow) {
            return;
        }
        if (isGodBet == false) {

        }
        if (myPlayerId == otherPlayerId) {
            //cc.error("我自己下注------------"+ this.playerGold.string);

            this.playerGold.string = Util.formatGoldText(seatBetInfo.gold);
            this.MyPlayerLocalBetAnimation(seatBetInfo);

            for (let index = 1; index <= model.seatArray.length - 1; index++) {
                const element = model.seatArray[index];
                if (element.hasPlayer && element.roleInfo.playerId == otherPlayerId) {
                    this.playerArray[element.seatId].RefreshGold(seatBetInfo.gold);
                }
            }
        }
        else {
            for (let index = 1; index <= model.seatArray.length - 1; index++) {
                const element = model.seatArray[index];
                if (element.hasPlayer && element.roleInfo.playerId == otherPlayerId)// &&  (index-1) == 0测试代码
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
    ///下注动画
    public BetAnimation(playerPanel: cc.Node, seatBetInfo: any, chipPos: cc.Vec2, PanelPlayAnimationID: number) {
        TimerManager.GetInstance().CallActionDelay(() => {
            let realIndex = this.RealChipIndex(seatBetInfo.chipType);
            if (realIndex == -1) {
                if (Global.showLog == true) {
                    cc.error(seatBetInfo);
                    cc.error(seatBetInfo.chipType);
                    cc.error(typeof (seatBetInfo.chipType));
                }


            }


            let betChip = this.CreateChips(seatBetInfo.betArea, this.RealChipIndex((seatBetInfo.chipType)));

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


            let chipPosNew = areaNode.convertToWorldSpaceAR(new cc.Vec2(Random.RangeFloat(-betAreaRect.node.width / 2 + 5, betAreaRect.node.width / 2 - 5)
                , Random.RangeFloat(-betAreaRect.node.height / 2 + 5, betAreaRect.node.height / 2 - 5)));

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
                // cc.error("out side PanelPlayAnimationID"+PanelPlayAnimationID);
                let backTween = XTween.DoMove(playerPanel, offsetval, recordPos, this.PlayerPanelAnimationTime, 1, false, XTweenCurvType.OutSine);
                backTween.SetFinishCallback(() => {
                    /// cc.error("PanelPlayAnimationID"+PanelPlayAnimationID);

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
    }



    public ChipFly(chipNode: cc.Node, from: cc.Vec2, to: cc.Vec2, delayTime: number, easeType: XTweenCurvType, hasFollowTween: boolean, scaleTweenParam: any, callBack: any, callBackParam: any) {
        let fromPos = from;
        let toPos = to;


        let delay = delayTime;
        chipNode.position = from;
        //let dis = from.
        let baseTime = Random.RangeFloat(0.35, 0.45);

        if (XTweenCurvType.InBack == easeType) {
            baseTime += 0.3;
        }
        let dis = to.sub(from).mag();

        //这里先不管
        let moveTime = baseTime + Math.floor(dis / 100) * 0.015;

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
    public settleMentCallBack: any;

    ///
    public SettleMentWork(model: ModelRedVsBlack, callBack: any) {
        let myWinGold = 0;
        if (model.settlementData.isMePlayed) {
            model.settlementData.settlementRoleInfo.forEach(element => {
                if (element.playerId == model.roleInfo.playerId) {
                    myWinGold = element.resultGold;
                }
            });
        }


        this.OpenCardStatus(model, () => {

            if (this.isShow == false) {
                return;
            }

            if (this.settleMentCallBack != null) {
                this.settleMentCallBack();
            }

            this.WinChipAnimation(model.settlementData, myWinGold, () => {
                if (this.isShow == false) {
                    return;
                }
                model.settlementData.seatSettlementInfoList.forEach(Element => {
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
                    let tweener = XTween.DoMove(selfWinLabel.node, new cc.Vec2(0, 10), new cc.Vec2(0, 60), 0.6, 1);
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

                    let tweener = XTween.DoMove(selfLoseLabel.node, new cc.Vec2(0, 10), new cc.Vec2(0, 60), 0.6, 1);
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



    public OpenCardStatus(model: ModelRedVsBlack, callBack: any) {
        this.waitNextEff.node.active = false;
        let group = XTween.CreateXTweenerGroup();
        group.AddObserverObj(this.node);

        //cc.error("做一些结算的事情..................................................");
        let index = 0;
        model.settlementData.blackSideCardGroup.cardInfoList.forEach(element => {
            this.blackPokerList[index++].DrawCard(element.color, element.size);

        });
        index = 0;
        model.settlementData.redSideCardGroup.cardInfoList.forEach(element => {
            this.redPokerist[index++].DrawCard(element.color, element.size);
        });


        this.OpenOnePokerNormalBlack(group, this.blackPokerList[0], XTweenerGroupAddMode.Queue);
        this.OpenOnePokerNormalBlack(group, this.blackPokerList[1], XTweenerGroupAddMode.Parallel);
        this.OpenOnePokerNormalRed(group, this.redPokerist[0], XTweenerGroupAddMode.Queue);
        this.OpenOnePokerNormalRed(group, this.redPokerist[1], XTweenerGroupAddMode.Parallel);
        this.OpenOneLastPoker(group, this.blackPokerList[2], XTweenerGroupAddMode.Queue, model.settlementData.blackSideCardGroup.cardType, this.groupLeft);
        this.OpenOneLastPoker(group, this.redPokerist[2], XTweenerGroupAddMode.Parallel, model.settlementData.redSideCardGroup.cardType, this.groupRight);

        group.SetFinishCallback(() => {
            this.WinDeskAreaEffect(model.settlementData.winState, model.settlementData.winLuckyArea, () => {
                if (callBack != null) {
                    callBack();
                }
            });
        });
        group.Play();
    }

    public OpenOnePokerNormalBlack(group: XTweenerGroup, poker: Poker, groupAddModel: XTweenerGroupAddMode) {
        let openCardAnimTime2 = 0.255;
        let xRotate = XTween.DoScale(poker.cardNode, new cc.Vec2(0.45, 0.45), new cc.Vec2(0, 0.45), openCardAnimTime2);
        group.AddTweener(xRotate, groupAddModel);

        if (groupAddModel == XTweenerGroupAddMode.Queue) {
            let tweenerAct = XTween.GetTweenerAction(0, () => {
                AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.SoundOpenCard);
            });
            group.AddTweener(tweenerAct, XTweenerGroupAddMode.Parallel)
        }


        let tweenerActHide = XTween.GetTweenerAction(0, () => {
            poker.HideBack();
        });

        group.AddTweener(tweenerActHide, XTweenerGroupAddMode.Queue);

        let xRotate2 = XTween.DoScale(poker.cardNode, new cc.Vec2(0, 0.45), new cc.Vec2(0.45, 0.45), openCardAnimTime2);
        group.AddTweener(xRotate2, groupAddModel);


    }


    public OpenOnePokerNormalRed(group: XTweenerGroup, poker: Poker, groupAddModel: XTweenerGroupAddMode) {
        let openCardAnimTime2 = 0.255;

        if (groupAddModel == XTweenerGroupAddMode.Queue) {
            let tweenerAct = XTween.GetTweenerAction(0, () => {
                //AudioManager.GetInstance().SoundPlay(LongHuDou.Audio.SoundOpenCard); 發出開拍呻吟
                AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.SoundOpenCard);

            });
            group.AddTweener(tweenerAct, XTweenerGroupAddMode.Queue)
        }

        let xRotate = XTween.DoScale(poker.cardNode, new cc.Vec2(0.45, 0.45), new cc.Vec2(0, 0.45), openCardAnimTime2);
        group.AddTweener(xRotate, groupAddModel);

        let tweenerActHide = XTween.GetTweenerAction(0, () => {
            poker.HideBack();
        });

        group.AddTweener(tweenerActHide, XTweenerGroupAddMode.Queue);

        let xRotate2 = XTween.DoScale(poker.cardNode, new cc.Vec2(0, 0.45), new cc.Vec2(0.45, 0.45), openCardAnimTime2);
        group.AddTweener(xRotate2, XTweenerGroupAddMode.Queue);
    }


    public OpenOneLastPoker(group: XTweenerGroup, poker: Poker, groupAddModel: XTweenerGroupAddMode, cardType: RBCardType, effect: sp.Skeleton) {
        let openCardAnimTime2 = 0.3;
        let tweenerAct1 = XTween.GetTweenerAction(0, () => {
            //AudioManager.GetInstance().SoundPlay(LongHuDou.Audio.SoundOpenCard);

            AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.SoundOpenCard);

        });

        group.AddTweener(tweenerAct1, XTweenerGroupAddMode.Queue);


        let scale1 = XTween.DoScale(poker.cardNode, new cc.Vec2(0.45, 0.45), new cc.Vec2(0.54, 0.54), openCardAnimTime2);

        group.AddTweener(scale1, XTweenerGroupAddMode.Queue);



        let xRotate = XTween.DoScale(poker.cardNode, new cc.Vec2(0.54, 0.54), new cc.Vec2(0, 0.54), openCardAnimTime2);
        group.AddTweener(xRotate, XTweenerGroupAddMode.Queue);

        let tweenerAct2 = XTween.GetTweenerAction(0, () => {
            poker.HideBack();
        });

        group.AddTweener(tweenerAct2, XTweenerGroupAddMode.Queue);


        let xRotate2 = XTween.DoScale(poker.cardNode, new cc.Vec2(0, 0), new cc.Vec2(0.54, 0.54), openCardAnimTime2);
        group.AddTweener(xRotate2, XTweenerGroupAddMode.Queue);

        let scale2 = XTween.DoScale(poker.cardNode, new cc.Vec2(0.54, 0.54), new cc.Vec2(0.45, 0.45), openCardAnimTime2);
        group.AddTweener(scale2, XTweenerGroupAddMode.Queue);

        let tweenerAct3 = XTween.GetTweenerAction(0, () => {
            //    cc.error("播放音樂特效-------------------");
            //    cc.error("播放牌特效");
            this.PlayEffect(cardType, effect);

            let voiceCardResultKey = this.GetCardType(cardType)
            AudioManager.GetInstance().SoundPlay(voiceCardResultKey)
        })

        group.AddTweener(tweenerAct3, groupAddModel);

    }

    public GetCardType(cardType: RBCardType) {
        switch (cardType) {
            case RBCardType.BaoziType:
                return RedVsBlackConfig.Audio.VoiceCardResult5;
                break;
            case RBCardType.JinhuaType:
                return RedVsBlackConfig.Audio.VoiceCardResult3;
                break;
            case RBCardType.JinshunType:
                return RedVsBlackConfig.Audio.VoiceCardResult4;
                break;
            case RBCardType.PairType:
                return RedVsBlackConfig.Audio.VoiceCardResult1;
                break;
            case RBCardType.SingleType:
                return RedVsBlackConfig.Audio.VoiceCardResult0;
                break;
            case RBCardType.ShunziType:
                return RedVsBlackConfig.Audio.VoiceCardResult2;
                break;
        }

        return "";
    }

    public PlayEffect(cardType: RBCardType, effect: sp.Skeleton) {
        let animationName = "";
        switch (cardType) {
            case RBCardType.BaoziType:
                animationName = "baozi";
                break;
            case RBCardType.JinhuaType:
                animationName = "jinhua";
                break;
            case RBCardType.JinshunType:
                animationName = "shunjin";
                break;
            case RBCardType.PairType:
                animationName = "duizi";
                break;
            case RBCardType.ShunziType:
                animationName = "shunzi";
                break;
            case RBCardType.SingleType:
                animationName = "danzhang";
                break;
        }

        Util.PlaySpineEffect(effect, () => {


        }, animationName);
    }

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

    //
    public ChipScaleTween(chipNode: cc.Node, moveTime: number, scaleTweenParam: number) {
        let tweener = XTween.DoScale(chipNode, new cc.Vec2(chipNode.scaleX, chipNode.scaleY), new cc.Vec2(scaleTweenParam, scaleTweenParam), moveTime, 1, false, XTweenCurvType.InSine);
        tweener.Play();
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

    //服务器筹码在客户端的位置
    public RealChipIndex(chip: number) {
        return this.chipTypeArray.indexOf(chip);
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
                //cc.error("缓存池中取出没有激活的元素@@@@"+cointNode.name);
                this.areaChipsCache[area].splice(index, 1);
                break;
            }
            cointNode = null;
        }

        if (cointNode == null)//在coinNode没取到的情况下//
        {
            cointNode = cc.instantiate(coinNodeTemplateCatched);
            cointNode.name = area + "#" + chipType;
            cointNode.setParent(this.BetCoinNode);//放入對應area的betrect下面//
        }
        cointNode.active = true;

        //cointNode.parent.setSiblingIndex(cointNode.parent.parent.childrenCount)
        cointNode.setSiblingIndex(cointNode.parent.childrenCount);

        this.areaChipsCache[area].push(cointNode);//节点的名字包含了筹码的大小信息//

        return cointNode;
    }



    //开始下注状态
    public StartBettingState(time: number) {
        AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.VoiceStartBet);

        this.waitNextEff.node.active = false;
        if (Global.showLog == true)
            cc.error("开始下注状态######");
        //AudioManager.
        Util.PlaySpineEffect(this.startBetEff, () => {


        });
        this.TimerCountDown(time);
        this.ResetAllPoker();


        this.redPokerist.forEach(element => {
            if (element.cardNode.active)
                return;

            let originalPos = element.cardNode.position;
            let startPos = new cc.Vec2(originalPos.x - 30, originalPos.y - 30);
            element.cardNode.position = startPos;
            element.FlyTo(0.1, originalPos, () => {
                AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.SoundShuffleCard)

            }, 0);
        });
        this.blackPokerList.forEach(element => {
            if (element.cardNode.active)
                return;

            let originalPos = element.cardNode.position;
            let startPos = new cc.Vec2(originalPos.x + 30, originalPos.y - 30);
            element.cardNode.position = startPos;
            element.FlyTo(0.1, originalPos, () => {
                AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.SoundShuffleCard)

            }, 0.1);
        });


    }


    //停止下注状态
    public StopBettingState(callback: Function) {
        AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.VoiceStopBet);

        this.waitNextEff.node.active = false;
        //AudioManager.GetInstance().SoundPlay()
        Util.PlaySpineEffect(this.stopBetEff, callback);
        this.DeleteTimer();


        this.redPokerist.forEach(element => {
            if (element.cardNode.active)
                return;

            let originalPos = element.cardNode.position;
            let startPos = new cc.Vec2(originalPos.x - 30, originalPos.y - 30);
            element.cardNode.position = startPos;
            element.FlyTo(0.1, originalPos, () => {

            }, 0);
        });
        this.blackPokerList.forEach(element => {
            if (element.cardNode.active)
                return;

            let originalPos = element.cardNode.position;
            let startPos = new cc.Vec2(originalPos.x + 30, originalPos.y - 30);
            element.cardNode.position = startPos;
            element.FlyTo(0.1, originalPos, () => {

            }, 0.2);
        });
    }

    public TimerCountDown(timerLeft: number) {
        if (this.timerClockID != "") {
            TimerManager.GetInstance().DeleteTimer(this.timerClockID);
        }
        this.clockNode.active = timerLeft > 0;
        let time = timerLeft;
        this.timerClockID = TimerManager.GetInstance().CallActionDelay(() => {
            if (timerLeft <= 3) {
                AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.SoundCountDown);
            }

            this.countDownText.string = timerLeft + "";
            //cc.error("时间----------------"+ this.countDownText.string);

            timerLeft--;
        }, 0, null, time + 1, 1, false);
    }

    //等待下一场
    public ShowWaitNextLoading() {
        this.waitNextEff.node.active = false;
        this.waitNextEff.node.active = true;
        // cc.error("ShowWaitNextLoading@@@@");
        // Util.PlaySpineEffect(this.waitNextEff,()=>{

        // });
    }


    //重置所有扑克(左右) 默认隐藏。
    public ResetAllPoker() {
        this.allPokerList.forEach(element => {
            element.ResetPoker();
        });
        this.groupLeft.node.active = false;
        this.groupRight.node.active = false;
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
                cc.log("播放完红黑特效");
        }, "animation", false, true);

        this.playerArray.forEach(Element => {
            Element.wineffect.node.active = false;
        });
        this.mywineffect.node.active = false;

        for (let i = 0; i < this.middleBet.childrenCount; i++) {
            this.middleBet.children[i].getChildByName("ShensuanziMark").active = false;;
        }
    }


    //重置
    public Reset() {
        this.DeleteTimer();
        this.waitNextEff.node.active = false;
        this.clockNode.active = false;

        for (let i = 0; i < this.mybetNumber.childrenCount; i++) {
            this.mybetNumber.children[i].getChildByName("myBetGold").parent.active = false;
            this.mybetNumber.children[i].getChildByName("myBetGold").getComponent(cc.Label).string = "";
        }

        for (let i = 0; i < this.middleBet.childrenCount; i++) {
            this.middleBet.children[i].getChildByName("ShensuanziMark").parent.active = false;;
        }

        this.betEffectArray.forEach((element) => {
            element.node.active = false;
        });

        for (let index = 0; index < this.xingxing.childrenCount; index++) {
            this.xingxing.children[index].active = false;
            this.xingxing.children[index].position = cc.Vec2.ZERO;
        }

    }

    //
    public InitMyPlayerInfo(roleInfo: RBRoleInfo) {
        if (roleInfo == null) {
            cc.error("玩家信息为空--------------------");
            return;
        }
        else {
            cc.error("玩家信息为 --------------------" + roleInfo.gold);

        }

        this.playerName.string = roleInfo.userName;
        // this.playerVip.node.active = roleInfo.vipLv>0;
        this.playerGold.string = Util.formatGoldText(roleInfo.gold);

        if (roleInfo.headImageUrl != "") {
            Util.SetHeadNetIcon(this.playerHead, roleInfo.headImageUrl);
            Util.SetHeadBox(this.playerHeadBg, roleInfo.headbox);
        }
        // this.vipLabel.string = "Vip-"+ roleInfo.vipLv;
        this.ShowingEffect(this.betButtonArray[0]);

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

    public InitPlayerArrayList(seatList: RBSeatInfo[]) {
        // if(Global.showLog == true)
        //     cc.error("InitPlayerArrayList##################");
        //cc.error(seatList);
        for (let index = 0; index < seatList.length; index++) {
            const element = seatList[index];
        }
        for (let index = 1; index <= this.playerArray.length; index++) {
            this.playerArray[index - 1].RefreshByData(seatList[index]);
        }
    }

    public WinDeskAreaEffect(winArea: any, winLuckyArea: boolean, callBack: any) {
        this.betEffectArray[winArea].node.active = true;
        this.betEffectArray[winArea].setAnimation(0, "1", true);

        if (winLuckyArea) {
            this.betEffectArray[3].node.active = true;
            this.betEffectArray[3].setAnimation(0, "1", true);
        }

        Util.PerformWithDelay(2, () => {
            for (let index = 1; index < this.betEffectArray.length; index++) {
                const element = this.betEffectArray[index];
                element.node.active = false;
            }
            if (callBack != null) {
                callBack();
            }
        });
    }

    paixingItemArray: Array<cc.Sprite> = [];

    public Refresh9GamePaixing(cardInfoList: Array<IHistoryCardInfo>) {
        let paixing = this.FindTransform("paixingitem");
        paixing.active = false;
        if (this.paixingItemArray.length < 9) {
            for (let index = 1; index <= 9; index++) {//20场比赛

                let pai: cc.Node = cc.instantiate(paixing);
                pai.parent = paixing.parent;
                this.paixingItemArray[index - 1] = cc.find("paixing", pai).getComponent(cc.Sprite);
            }
        }
        this.paixingItemArray.forEach(element => {
            element.node.parent.active = false;
        });

        for (let index = (cardInfoList.length < 9 ? cardInfoList.length - 1 : 8); index >= 0; index--) {
            const element = cardInfoList[index];
            if (element == null)
                continue;
            this.RefreshCardType(this.paixingItemArray[index], element.cardType);
        }
    }

    public TrendOK() {
        this.trendButton.interactable = true;
    }

    //
    public RefreshCardType(sprite: cc.Sprite, cardType: RBCardType) {
        if (sprite == null) {
            if (Global.showLog == true)
                cc.error("sprite empty");
            return;
        }

        let atlasPath = "SubGames/RvB/textures/TexureAtlas/RedVsBlackatlas";
        switch (cardType) {
            case RBCardType.BaoziType:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_baozi", () => { sprite.node.parent.active = true; });

                break;
            case RBCardType.JinhuaType:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_jinhua", () => { sprite.node.parent.active = true; });
                // sprite.node.parent.active = true;
                break;
            case RBCardType.JinshunType:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_shunjin", () => { sprite.node.parent.active = true; });
                //sprite.node.parent.active = true;
                break;
            case RBCardType.PairType:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_duizi", () => { sprite.node.parent.active = true; });
                //sprite.node.parent.active = true;
                break;
            case RBCardType.ShunziType:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_shunzi", () => { sprite.node.parent.active = true; });
                //sprite.node.parent.active = true;
                break;
            case RBCardType.SingleType:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_danzhang", () => { sprite.node.parent.active = true; });
                //sprite.node.parent.active = true;
                break;
        }
        sprite.node.parent.setSiblingIndex(sprite.node.parent.parent.childrenCount - 1);
    }

    //
    public Refresh20GameResult(recordArray: Array<number>) {
        let winstatus = this.FindTransform("wintoggle");
        winstatus.active = false;
        if (this.trendObjArray.length < 20) {
            for (let index = 1; index <= 20; index++) {//20场比赛
                let trend: cc.Node = cc.instantiate(winstatus);
                trend.parent = winstatus.parent;
                this.trendObjArray[index - 1] = trend;
            };
        }
        let id = 0;

        this.HideAllTrend();
        for (let index = (recordArray.length < 20 ? recordArray.length - 1 : 19); index >= 0; index--) {
            const element = recordArray[index];
            this.trendObjArray[id].active = true;
            this.trendObjArray[id].children[1].active = element == 2;
            this.trendObjArray[id].children[0].active = element == 1;
            id++;
        }
    }

    public OnShowView() {
        AudioManager.GetInstance().BGMPlay(RedVsBlackConfig.Audio.BgMusic);

        if (Global.showLog == true)
            cc.error("OnShowView###############");

        this.playerHeadNode.position = this.playerHeadNodePos;
        this.onlineButton.node.position = this.onlineButtonPos;
        this.playerHeadNode.scale = 1;
        this.onlineButton.node.scale = 1;
        this.playerArray.forEach((element) => {
            element.Reset();
        });
    }
    //
    public RefreshTrend(sprite: cc.Sprite, type: number) {
        if (sprite == null) {
            if (Global.showLog == true)
                cc.error("sprite empty");
            return;
        }
        // cc.error("输赢类型----------------"+type);

        let atlasPath = "SubGames/RvB/textures/TexureAtlas/RedVsBlackatlas";
        switch (type) {
            case 1:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_hongdian");
                sprite.node.active = true;
                break;
            case 3:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_zoushi_hongdian");
                sprite.node.active = true;
                break;
            case 2:
                SpriteUtil.LoadSpriteByAtlas(sprite, atlasPath, "HHDZ_heidian");
                sprite.node.active = true;
                break;
        }
        sprite.node.setSiblingIndex(sprite.node.parent.childrenCount - 1);

    }

    public RefreshShenSuan(model: ModelRedVsBlack) {
        //cc.errorcc.error("RefreshShenSuan#########");
        for (let i = 0; i < this.middleBet.childrenCount; i++) {
            let mark = this.middleBet.children[i].getChildByName("ShensuanziMark");
            mark.active = model.godBetArray[i + 1];

            if (Global.showLog == true)
                cc.error(mark.active);
        }
        //cc.error("RefreshShenSuan#########");

    }

    ///刷新下注信息。
    public RefreshMyBetInfo(model: ModelRedVsBlack, isSeatPlayer: boolean = false) {
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

    public RefreshMark(model: ModelRedVsBlack) {
        // for(let i=0;i <  this.middleBet.childrenCount;i++)
        // {
        //     let mark = this.middleBet.children[i].getChildByName("ShensuanziMark");
        //     mark.active = model.godBetArray[i+1] ;
        // }

    }

    public FlyXingXing(godBet: Array<boolean>, markNode: cc.Node, index: number) {
        if (markNode.active)
            return;
        //cc.error("FlyXingXing1");
        const element = godBet[index];
        if (element == true) {
            //cc.error(index+"FlyXingXing2");

            let node = this.xingxing.children[index - 1];
            if (node.active == true)
                return;

            //cc.error("FlyXingXing3");

            node.active = true;
            let pos = node.parent.convertToNodeSpaceAR(markNode.parent.convertToWorldSpaceAR(markNode.position));
            let time = pos.sub(node.position).mag() / 1000;
            let moveTween = XTween.DoMove(node, node.position, pos, 0.6);
            moveTween.SetFinishCallback(() => {
                //cc.error("FlyXingXing4");

                node.position = cc.Vec2.ZERO;
                node.active = false;
                markNode.active = true;
            });
            moveTween.Play();
        }
    }
    //隐藏所有趋势
    public HideAllTrend() {
        this.trendObjArray.forEach(element => {
            element.active = false;
        });
    }


    public DeleteTimer() {
        this.clockNode.active = false;
        if (this.timerClockID != "") {
            TimerManager.GetInstance().DeleteTimer(this.timerClockID);
        }
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

    private ChipsSettlementAnimationRangMin = 0.35;
    private ChipsSettlementAnimationRangMax = 0.6;
    //结算筹码动画
    public WinChipAnimation(Data: PushRBBattleSettlementRes, playerWinGold: number, callBack: any) {
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


            }, headNode, false)
        });

        if (hasChip) {
            //AudioManager.GetInstance().SoundPlay(LongHuDou.Audio.SoundTakeChip)
        }

        Util.PerformWithDelay(this.ChipsSettlementAnimationRangMax, callBack, this.TimerID, true);
        if (chipList.length > 0)
            AudioManager.GetInstance().SoundPlay(RedVsBlackConfig.Audio.SoundTakeChip);
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

    public OnHideView() {
        if (Global.showLog == true)
            cc.error("OnHideView###############");
        this.trendButton.interactable = false;
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
        TimerManager.GetInstance().ClearAllButKeepLive();
        this.playerHeadNode.scale = 1;
        this.onlineButton.node.scale = 1;
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
                    //cc.error("隐藏所有筹码");
                })
        });
    }
}




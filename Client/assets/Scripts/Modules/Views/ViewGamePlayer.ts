import MessageNames from "../MessageNames";
import { ViewNames } from "../MVCRegister";
import View from "../../MVCFramework/View";
import Poker from "../../Components/Poker";
import CardColor from "../../Components/Poker";
import Util from "../../Tools/Util";

import { LHDRoleInfo, SeatInfo, ILHDRoleInfo } from "../../Protos/LongHuDou";
import XTween from "../../Tools/XTween/XTween";
import { XTweenCurvType } from "../../Tools/XTween/Base/XTweenCurv";
import TimerManager from "../../Components/TimerManager";
import MessageCenter from "../../MVCFramework/MessageCenter";
import ViewRoleInfo, { ViewRoleInfoData, ViewRoleNodeSlotData } from "./ViewRoleInfo";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";
const { ccclass, property } = cc._decorator;
@ccclass
export default class ViewGamePlayer {

    public headImageBg: cc.Sprite;
    public notEmpty: cc.Node;
    public empty: cc.Node;
    public moneyBg: cc.Node;

    headImage: cc.Sprite;
    playerTag: cc.Sprite;
    playerNode: cc.Node;
    money: cc.Label;
    WinLabel: cc.Label;
    UserName: cc.Label;
    LoseLabel: cc.Label;
    playerBtn: cc.Button;
    wineffect: sp.Skeleton;
    emptyNodePos: cc.Vec2;
    notemptyNodePos: cc.Vec2;
    seatInfo: SeatInfo;
    slotPlayerInfonNode: cc.Node;
    private goldV: string = "";

    //节点初始化//
    public Init(node: cc.Node) {
        this.playerNode = node;
        this.notEmpty = node.getChildByName("notEmpty");
        this.moneyBg = node.getChildByName("moneyBg");
        this.empty = node.getChildByName("empty");
        this.slotPlayerInfonNode = node.getChildByName("playerInfoPoint");
        this.headImage = this.notEmpty.getChildByName("HeadMask").getChildByName("Head").getComponent(cc.Sprite);
        let moneyNode = node.getChildByName("moneyBg");
        this.money = moneyNode.getChildByName("money").getComponent(cc.Label);
        this.UserName = moneyNode.getChildByName("userName").getComponent(cc.Label);

        this.playerBtn = this.notEmpty.getChildByName("headBg").getComponent(cc.Button);
        cc.log("playerBtn", this.playerBtn)

        this.headImageBg = cc.find("headBg", this.notEmpty).getComponent(cc.Sprite);
        let SettleNode = node.getChildByName("Settle");

        this.WinLabel = SettleNode.getChildByName("WinLabel").getComponent(cc.Label);
        this.LoseLabel = SettleNode.getChildByName("LoseLabel").getComponent(cc.Label);

        this.WinLabel.string = "";
        this.LoseLabel.string = "";
        this.emptyNodePos = this.empty.position;
        this.notemptyNodePos = this.notEmpty.position;

        //名字六个字

        Util.SetClickAction(this.playerBtn, (button, customData) => {
            this.BtnHeadIcon();
        });

        this.wineffect = node.getChildByName("wineffect").getComponent(sp.Skeleton);
        this.wineffect.node.active = false;
    }

    ///数据刷新其他玩家头像。
    public RefreshByData(data: SeatInfo) {
        let roleInfo: ILHDRoleInfo;
        this.notEmpty.active = data.hasPlayer;
        this.moneyBg.active = data.hasPlayer;
        this.empty.active = data.hasPlayer == false;
        if (data.hasPlayer) {
            roleInfo = data.roleInfo;
            this.money.string = Util.formatGoldText(roleInfo.gold);
            this.goldV = roleInfo.gold;
            if (data.seatId == 0) {
                //cc.error(data.roleInfo.playerId+"神算子玩家一开始金币"+this.money.string);
            }
            Util.SetHeadNetIcon(this.headImage, roleInfo.headImageUrl);
            Util.SetHeadBox(this.headImageBg, roleInfo.headbox);
        }
        else {
            return;
        }
        this.WinLabel.string = "";
        this.LoseLabel.string = "";
        this.UserName.string = data.roleInfo.userName;
        this.seatInfo = data;
    }

    public Reset() {
        this.money.string = "";
        this.WinLabel.string = "";
        this.LoseLabel.string = "";
        this.wineffect.node.active = false;
        this.notEmpty.position = this.notemptyNodePos;
        this.notEmpty.scale = 1;
        //this.empty.position = this.emptyNodePos ;
        TimerManager.GetInstance().DeleteTimer(this.delayEffect);
    }
    //刷新玩家金币。//
    public RefreshGold(gold: number) {
        this.money.string = Util.formatGoldText(gold);
        this.goldV = gold + "";
    }


    public delayEffect = "";
    //结算动画//
    public SettleAnimation(gold: number) {
        cc.log("结算动画---")
        if (gold == 0) {
            return;
        }

        this.WinLabel.string = "";
        this.LoseLabel.string = "";
        let labelNode = null;
        if (gold > 0) {
            Util.PlaySpineEffect(this.wineffect, () => { }, "1"

            );
            this.WinLabel.string = "+" + Util.formatGoldText(gold, false);
            labelNode = this.WinLabel.node;
        }
        else {
            this.LoseLabel.string = "" + Util.formatGoldText(gold, false);;
            labelNode = this.LoseLabel.node;

        }
        labelNode.active = true;
        let tweener = XTween.DoMove(labelNode, new cc.Vec2(0, 0), new cc.Vec2(0, 20), 0.9, 1, false, XTweenCurvType.BounceOut);
        tweener.SetFinishCallback(() => {
            this.delayEffect = Util.PerformWithDelay(1, () => {
                labelNode.active = false;
            })
        });
        tweener.Play();
    }


    public BtnHeadIcon() {
        let datas = new ViewRoleNodeSlotData();
        if (this.seatInfo == null) {
            if (Global.showLog == true)
                cc.error("what the fuck seatInfo empty");
            return;
        }

        datas.name = this.seatInfo.roleInfo.userName;
        datas.location = this.seatInfo.roleInfo.province + this.seatInfo.roleInfo.city;
        datas.gold = this.goldV;
        datas.head = this.seatInfo.roleInfo.headImageUrl;
        datas.headBox = this.seatInfo.roleInfo.headbox;

        datas.slot = this.slotPlayerInfonNode;
        datas.slotParent = this.slotPlayerInfonNode.parent;

        MessageCenter.SendMessage(MessageNames.OpenRoleInfoBySlot, datas);
    }

    public Print() {
        if (Global.showLog == true)
            cc.error(this.notemptyNodePos);
        if (Global.showLog == true)
            cc.error(this.notEmpty);
    }
}
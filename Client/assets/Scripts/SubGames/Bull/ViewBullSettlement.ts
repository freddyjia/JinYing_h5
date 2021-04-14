import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import { SettlementRoleInfo, MemberListType } from "../../Protos/BaiRenNiuNiu";
import NodeUtil from "../../Tools/NodeUtil";
import Res from "../../Global/Res";
import BullConfig from "./BullConfig";
import AudioManager from "../../Manager/AudioManager";
import TimerManager from "../../Components/TimerManager";
import Global from "../../Global/Global";


class ViewBullSettlementItem
{
    public node:cc.Node;

    UserName:cc.Label;
    WinGoldNumText:cc.Label;
    LoseGoldNumText:cc.Label;

    readonly SpecialSprites = {
        [1]:"GYZY_shensuanzi",
        [2]:"GYZY_fuhao1",
        [3]:"GYZY_zhuang",
        [4]:"GYZY_zhuang",
        [5]:"",
    }

    public static Create(node:cc.Node)
    {
        let item = new ViewBullSettlementItem();
        item.Init(node);
        return item;
    }

    public Init(node:cc.Node)
    {
        this.node = node;

        this.UserName = cc.find("UserName",this.node).getComponent(cc.Label);
        this.WinGoldNumText = cc.find("WinGoldNumText",this.node).getComponent(cc.Label);
        this.LoseGoldNumText = cc.find("LoseGoldNumText",this.node).getComponent(cc.Label);
    }

    public Update(itemData:SettlementRoleInfo)
    {
        if (itemData.type == MemberListType.SystemBanker)
        {
            this.UserName.string = "系统庄家";
            this.SetWinOrLoseNum(itemData.resultGold>0, itemData.resultGold);
        }
        else
        {
            this.UserName.string = itemData.userName;
            this.SetWinOrLoseNum(itemData.resultGold>0, itemData.resultGold);
        }

        // if (itemData.type == MemberListType.Richer || itemData.type == MemberListType.Clever)
        // {

        // }
        // else if (itemData.type == MemberListType.PlayerBanker || itemData.type == MemberListType.SystemBanker)
        // {

        // }
        // else
        // {

        // }
    }

    public SetWinOrLoseNum(isWin:boolean, num:number)
    {
        if (isWin)
        {
            this.WinGoldNumText.string = "+" + Util.formatGoldText(num);
            this.LoseGoldNumText.string = "";
        }
        else
        {
            this.WinGoldNumText.string = "";
            this.LoseGoldNumText.string = Util.formatGoldText(num);
        }
    }
}


export default class ViewBullSettlement extends View 
{
    timeText:cc.Label;
    myselfSettleItemNode:cc.Node;
    bankerSettleItemNode:cc.Node;
    
    leftTime:number = 0;
    continueTimerId:string="";

    myselfSettleItem:ViewBullSettlementItem;
    bankerSettleItem:ViewBullSettlementItem;
    settlementItemList:ViewBullSettlementItem[];

    public OnAwake()
    {
        this.timeText = this.FindTransform("timeText").getComponent(cc.Label);
        this.myselfSettleItemNode = this.FindTransform("MyselfSettleItem");
        this.bankerSettleItemNode = this.FindTransform("BankerSettleItem");

        this.myselfSettleItem = ViewBullSettlementItem.Create(this.myselfSettleItemNode);
        this.bankerSettleItem = ViewBullSettlementItem.Create(this.bankerSettleItemNode);

        this.settlementItemList = [];
        for (let i = 2; i <= 4; i++)
        {
            let nodeItem = this.FindTransform("SettleItem"+i);
            this.settlementItemList.push(ViewBullSettlementItem.Create(nodeItem));
        }
    }

    public OnHideView()
    {
        this.DelBetTimer();
    }

    public UpdateView(settlementRoleInfo:any, waitTime:number)
    {
        for (let i = 0; i < this.settlementItemList.length; i++)
        {
            this.settlementItemList[i].node.active = false;
        }

        let normalInfoList = [];
        let infoList = settlementRoleInfo as SettlementRoleInfo[];
        //cc.log("infoList data:"+JSON.stringify(infoList));
        
        infoList.forEach(itemData => 
        {
            let normalPlayer = true;

            if (itemData.playerId == Global.PlayerInfo.playerId)
            {
                normalPlayer = false;
                this.UpdateWinOrLoseView(itemData, waitTime);
                this.myselfSettleItem.Update(itemData);
            }

            if (itemData.type == MemberListType.PlayerBanker || itemData.type == MemberListType.SystemBanker)
            {
                normalPlayer = false;
                this.bankerSettleItem.Update(itemData);
            }

            if (normalPlayer == true)
            {
                normalInfoList.push(itemData);
            }
        });

        for (let i = 0; i < normalInfoList.length; i++)
        {
            let settleItem = this.settlementItemList[i];
            if (settleItem)
            {
                settleItem.node.active = true;
                settleItem.Update(normalInfoList[i]);
            }
        }
    }

    public UpdateWinOrLoseView(data:SettlementRoleInfo, waitTime:number)
    {
        let isWin = data.resultGold >= 0;

        if (isWin)
        {
            AudioManager.GetInstance().SoundPlay(BullConfig.Music.SoundWin);
        }
        else
        {
            AudioManager.GetInstance().SoundPlay(BullConfig.Music.SoundLose);
        }

        if (data.resultGold > 0)
        {
            AudioManager.GetInstance().SoundPlay(BullConfig.Music.VoiceWaoW);
        }

        waitTime = waitTime || 0;
        if (waitTime <= 0) waitTime = 5;
        this.StartTimer(waitTime);
    }

    public StartTimer(waitTime:number)
    {
        this.DelBetTimer();
        this.leftTime = waitTime;
        this.timeText.string = waitTime.toString();
        this.continueTimerId = TimerManager.GetInstance().CallActionDelay(()=>{
            this.leftTime--;
            if (this.leftTime <= 0)
            {
                this.leftTime = 0;
                this.Hide();
                this.DelBetTimer();
            }
            this.timeText.string = this.leftTime.toString();
        }, 1, null, -1, 1, false);
    }

    public DelBetTimer()
    {
        TimerManager.GetInstance().DeleteTimer(this.continueTimerId);
        this.continueTimerId = "";
    }
}

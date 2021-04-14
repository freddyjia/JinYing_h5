import Global from "../../Global/Global";
import View from "../../MVCFramework/View";
import { ReadyBankerInfo } from "../../Protos/BaiRenNiuNiu";
import Util from "../../Tools/Util";
import BullConfig from "./BullConfig";
import { BullBanker } from "./ModelBull";

export default class ViewBullBankerList extends View 
{
    BtnReqBanker:cc.Node;
    BtnReqBankerGray:cc.Node;
    BtnQuitBanker:cc.Node;
    BtnQuitBankerGray:cc.Node;
    NoBankerTip:cc.Node;
    BankerRankTip:cc.Label;

    // 上庄列表item
    BankerListItemDic:{[nodeName:string]:cc.Node} = {};
    BankerListItemNameDic:{[nodeName:string]:cc.Label} = {};
    BankerListItemGoldDic:{[nodeName:string]:cc.Label} = {};


    public OnAwake()
    {
        this.BtnReqBanker = this.FindTransform("BtnReqBanker");
        this.BtnReqBankerGray = this.FindTransform("BtnReqBankerGray");
        this.BtnQuitBanker = this.FindTransform("BtnQuitBanker");
        this.BtnQuitBankerGray = this.FindTransform("BtnQuitBankerGray");

        // 上庄列表item
        for (let i = 1; i <= 10; i++)
        {
            let BankerListItem = this.FindTransform("BankerListItem"+i)
            this.BankerListItemDic["BankerListItem"+i] = BankerListItem;
            this.BankerListItemNameDic["BankerListItemName"+i] = cc.find("BankerListItemName",BankerListItem).getComponent(cc.Label);
            this.BankerListItemGoldDic["BankerListItemGold"+i] = cc.find("BankerListItemGold",BankerListItem).getComponent(cc.Label);
        }

        this.NoBankerTip = this.FindTransform("NoBankerTip");
        this.BankerRankTip = this.FindTransform("BankerRankTip").getComponent(cc.Label);

        this.BtnReqBankerGray.getComponent(cc.Sprite).setState(cc.Sprite.State.GRAY);
        cc.find("New Sprite",this.BtnReqBankerGray).getComponent(cc.Sprite).setState(cc.Sprite.State.GRAY);

        this.BtnQuitBankerGray.getComponent(cc.Sprite).setState(cc.Sprite.State.GRAY);
        cc.find("New Sprite",this.BtnQuitBankerGray).getComponent(cc.Sprite).setState(cc.Sprite.State.GRAY);
    }

    public InitView()
    {
        for (let i = 1; i <= 10; i++)
        {
            this.BankerListItemDic["BankerListItem"+i].active = false;
        }
        this.BtnReqBanker.active = false;
        this.BtnQuitBanker.active = false;
        this.BtnReqBankerGray.active = false;
        this.BtnQuitBankerGray.active = false;
        this.NoBankerTip.active = false;
        this.BankerRankTip.string = "";
    }

    //玩家自己的请求上庄状态改变
    public ReqBankerStatusChange(status:number)
    {
        if (status == BullConfig.ConstNiuNiu.REQ_BANKER_STATUS.bankerUp)
        {
            this.BtnReqBanker.active = false;
            this.BtnReqBankerGray.active = false;
            this.BtnQuitBanker.active = true;
            this.BtnQuitBankerGray.active = false;
        }
        else if (status == BullConfig.ConstNiuNiu.REQ_BANKER_STATUS.bankerDown)
        {
            this.BtnReqBanker.active = true;
            this.BtnReqBankerGray.active = false;
            this.BtnQuitBanker.active = false;
            this.BtnQuitBankerGray.active = false;
        }
        else
        {
            this.BtnReqBanker.active = false;
            this.BtnReqBankerGray.active = false;
            this.BtnQuitBanker.active = false;
            this.BtnQuitBankerGray.active = true;
        }
    }

    //更新请求上庄列表
    public UpdateBullBankList(preBankerInfoArr:ReadyBankerInfo[], banker:BullBanker)
    {
        let includeMe = false;
        let myBankerRank = 0;
        for (let i = 0; i < 10; i++)
        {
            let BankerListItem = this.BankerListItemDic["BankerListItem" + (i+1)];
            let preBankerInfo = preBankerInfoArr[i];
            if (preBankerInfo == null || preBankerInfo == undefined)
            {
                BankerListItem.active = false;
            }
            else
            {
                BankerListItem.active = true;
                this.BankerListItemNameDic["BankerListItemName"+(i+1)].string = preBankerInfo.userName;
                this.BankerListItemGoldDic["BankerListItemGold"+(i+1)].string = Util.formatGoldText(preBankerInfo.gold);
                if (preBankerInfo.playerId == Global.PlayerInfo.playerId)
                {
                    includeMe = true;
                    myBankerRank = i;
                } 
            }
        }

        if (preBankerInfoArr.length==0 && banker.playerId != Global.PlayerInfo.playerId)
        {
            this.NoBankerTip.active = true;
        }
        else
        {
            this.NoBankerTip.active = false;
        }

        if (includeMe)
        {
            this.BankerRankTip.string = "上庄成功，前面还有" + (myBankerRank) + "位玩家";
        }
        else
        {
            this.BankerRankTip.string = "";
        }

        let isOffBanker = false;
        if (banker.playerId == Global.PlayerInfo.playerId)
        {
            includeMe = true;
            isOffBanker = banker.isOffBanker;
        }
        if (isOffBanker)
        {
            this.BtnReqBanker.active = false;
            this.BtnReqBankerGray.active = false;
            this.BtnQuitBanker.active = false;
            this.BtnQuitBankerGray.active = true;
        }
        else
        {
            if (includeMe)
            {
                this.BtnReqBanker.active = false;
                this.BtnReqBankerGray.active = false;
                this.BtnQuitBanker.active = true;
                this.BtnQuitBankerGray.active = false;
            }
            else
            {
                this.BtnQuitBanker.active = false; 
                this.BtnQuitBankerGray.active = false;

                let gray = preBankerInfoArr.length >= 10;
                this.BtnReqBanker.active = !gray;
                this.BtnReqBankerGray.active = gray;
            }
        }
    }
}

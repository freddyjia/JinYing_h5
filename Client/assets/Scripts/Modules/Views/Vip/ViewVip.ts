import Global from "../../../Global/Global";
import Res from "../../../Global/Res";
import View from "../../../MVCFramework/View";
import { ExchangeIntegralRecord, ExchangeIntegralRecordPush, IntegralDetail, IntegralDetailPush, VipInfoListPush } from "../../../Protos/Vip";
import NodeUtil from "../../../Tools/NodeUtil";
import SpriteUtil from "../../../Tools/SpriteUtil";
import Util from "../../../Tools/Util";

export default class ViewVip extends View {
    public VipContent: cc.Node;
    public PointCountTxt: cc.Label;
    public UnVipContent: cc.Node;

    //左侧界面相关节点
    public VipLevel: cc.Sprite;
    public ViPText_AlreadyGet: cc.Label;
    public currentFD: cc.Label;
    public nextFD: cc.Label;
    public nextLevelTxt: cc.Label;

    public txt_eableGet: cc.Label;

    public UIMingXi: cc.Node;
    public NodeCellArray: cc.Node[] = [];
    public CellParent: cc.Node;
    public TitleFanD: cc.Node;
    public TitleXiMa: cc.Node;

    public btn_jihuo: cc.Node;
    public btn_recharge: cc.Node;
    public sprite_FanDianLingQuMingXi: cc.Sprite;
    public sprite_XiMaFanDianMingXi: cc.Sprite;

    private txt_fandian01: cc.Sprite;
    private txt_xima01: cc.Sprite;

    public ViprewardItem: cc.Node;

    public OnAwake() {
        // alreadyGetRebateCount: 0
        // currentRebateProportion: 1
        // interalValue: 0
        // nextLevelExp: 100
        // nextLevelRebateProportion: 1
        // vipExp: 0
        // vipLevel: 0
        this.VipContent = this.FindTransform("VipContent");
        this.UnVipContent = this.FindTransform("UnVipContent");
        this.VipLevel = this.FindTransform("img_level").getComponent(cc.Sprite);
        this.ViPText_AlreadyGet = this.FindTransform("txt_fandian").getComponent(cc.Label);
        this.nextLevelTxt = this.FindTransform("TopContentText").getComponent(cc.Label);
        this.currentFD = this.FindTransform("CurrentProportionCountTxt").getComponent(cc.Label);
        this.nextFD = this.FindTransform("NextLvProportionCountTxt").getComponent(cc.Label);
        this.txt_eableGet = this.FindTransform("txt_eableGet").getComponent(cc.Label);
        this.PointCountTxt = this.FindTransform("PointCountTxt").getComponent(cc.Label);
        this.btn_jihuo = this.FindTransform("JiHuoVip_btn");
        this.btn_recharge = this.FindTransform("Recharge_btn");
        //------明细------
        this.UIMingXi = this.FindTransform("UIMingXi");
        this.ViprewardItem = this.FindTransform("rewardItem");
        this.CellParent = cc.find("ScrollView/view/LayoutFandian", this.UIMingXi);
        this.TitleFanD = this.FindTransform("TitleFanD");
        this.TitleXiMa = this.FindTransform("TitleXiMa");
        this.sprite_FanDianLingQuMingXi = this.FindTransform("FanDianLingQuMingXi").getComponent(cc.Sprite);
        this.sprite_XiMaFanDianMingXi = this.FindTransform("XiMaFanDianMingXi").getComponent(cc.Sprite);
        this.txt_fandian01= this.FindTransform("FanDianLingQuMingXi").getChildByName("txt_fandian01").getComponent(cc.Sprite);
        this.txt_xima01= this.FindTransform("XiMaFanDianMingXi").getChildByName("txt_xima01").getComponent(cc.Sprite);
        this.UIMingXi.active = false;


    }
    public ShowVipInfo(vipInfo: VipInfoListPush, isVip: boolean = false) {
        cc.log("显示VIP数据", vipInfo, Global.PlayerInfo.vipLv);

        let level: string = "vip_" + vipInfo.vipLevel;
        //   let level: string = "vip_1";
        NodeUtil.SetSpriteFrame(this.VipLevel, "MainGame/Atlas/VIP", level);
        this.ViPText_AlreadyGet.string = (vipInfo.alreadyGetRebateCount / 100).toString();
        this.currentFD.string = (vipInfo.currentRebateProportion / 1000) * 100 + "%";
        this.nextFD.string = (vipInfo.nextLevelRebateProportion / 1000) * 100 + "%";
        this.PointCountTxt.string = (vipInfo.interalValue / 10000).toString();
        cc.log(this.currentFD.string, this.nextFD.string)
        this.nextLevelTxt.string = "再充值" + (vipInfo.nextLevelExp - vipInfo.vipExp) + "即可成为尊贵VIP" + (vipInfo.vipLevel + 1);
        if (isVip) {
            this.btn_recharge.active = true;
            this.btn_jihuo.active = false;
            this.VipContent.active = true;
            this.UnVipContent.active = false;
        }
        else {
            this.btn_jihuo.active = true;
            this.btn_recharge.active = false;
            this.VipContent.active = false;
            this.UnVipContent.active = true;
            this.SetUnVipContent(vipInfo.interalValue);
        }
    }
    //设置不是VIp得下部界面
    public SetUnVipContent(interalValue: number) {
        this.txt_eableGet.string = (interalValue / 10000).toString();
    }
    public ShowMingXiPanel(index: Number, data: IntegralDetailPush | ExchangeIntegralRecordPush, isshow = true) {
        this.CleanCells();
        this.UIMingXi.active = isshow;

        for (let i = 0; i < data.detailList.length; i++) {
            let ViprewardItem = cc.instantiate(this.ViprewardItem);
            ViprewardItem.active = true;
            ViprewardItem.parent = this.CellParent;
            let Text_time = cc.find("Text_time", ViprewardItem);
            let Text_event = cc.find("Text_event", ViprewardItem);
            let Text_fandian = cc.find("Text_fandian", ViprewardItem);

            if (index == 0) {
                let itemData: ExchangeIntegralRecord = data.detailList[i] as ExchangeIntegralRecord;
                Text_event.active = false;

                let date = new Date();
                date.setTime(itemData.evenTime * 1000)
                Text_time.getComponent(cc.Label).string = Util.FormatDate(date, "-", true);
                Text_fandian.getComponent(cc.Label).string = (itemData.gold / 100).toString();
            } else {
                let itemData: IntegralDetail = data.detailList[i] as IntegralDetail;
                let date = new Date();
                date.setTime(itemData.evenTime * 1000)
                Text_time.getComponent(cc.Label).string = Util.FormatDate(date, "-", true);

                Text_event.getComponent(cc.Label).string = VipIntegralEventType.IntegralEvent[itemData.eventType].integralEventDesc;
                cc.log('sss', itemData, itemData.eventIntegralChangeCount)
                Text_fandian.getComponent(cc.Label).string = (itemData.eventIntegralChangeCount / 10000).toString();
            }
            this.NodeCellArray.push(ViprewardItem);
        }

        if (index == 0) {
            NodeUtil.SetSpriteFrame(this.sprite_FanDianLingQuMingXi, Res.Atlas.Commons, "tab_select");
            NodeUtil.SetSpriteFrame(this.txt_fandian01,Res.Atlas.VIP,"txt_fandian02")
            NodeUtil.SetSpriteFrame(this.txt_xima01,Res.Atlas.VIP,"txt_xima01")
            NodeUtil.SetSpriteFrame(this.sprite_XiMaFanDianMingXi, Res.Atlas.Commons, "tab_unselect");
        
            this.TitleFanD.active = true;
            this.TitleXiMa.active = false;

        }
        else {
            NodeUtil.SetSpriteFrame(this.sprite_FanDianLingQuMingXi, Res.Atlas.Commons, "tab_unselect");
            NodeUtil.SetSpriteFrame(this.sprite_XiMaFanDianMingXi, Res.Atlas.Commons, "tab_select");
            NodeUtil.SetSpriteFrame(this.txt_fandian01,Res.Atlas.VIP,"txt_fandian01")
            NodeUtil.SetSpriteFrame(this.txt_xima01,Res.Atlas.VIP,"txt_xima02")
            this.TitleFanD.active = false;
            this.TitleXiMa.active = true;
        }
    }
    private CleanCells() {
        if (this.NodeCellArray && this.NodeCellArray.length > 0) {
            for (let i = 0; i < this.NodeCellArray.length; i++) {
                let cell: cc.Node = this.NodeCellArray[i];
                cell.destroy();
                cc.log("清除cell")
            }
        }
        this.NodeCellArray = [];
    }
    public HideMingXiPanel() {
        this.CleanCells();
        this.UIMingXi.active = false;
    }


}
class VipIntegralEventType {
    public static IntegralEvent = {
        [2]: { id: 2, integralEventDesc: "斗地主结算返点" },
        [4]: { id: 4, integralEventDesc: "飞禽走兽结算返点" },
        [5]: { id: 5, integralEventDesc: "龙虎斗结算返点" },
        [6]: { id: 6, integralEventDesc: "红黑大战结算返点" },
        [7]: { id: 7, integralEventDesc: "超级快三结算返点" },
        [8]: { id: 8, integralEventDesc: "百人牛牛结算返点" },
        [9]: { id: 9, integralEventDesc: "抢庄牛牛结算返点" },
        [20]: { id: 20, integralEventDesc: "老虎机结算返点" },
        [15]: { id: 15, integralEventDesc: "百家乐结算返点" },
        [3]: { id: 3, integralEventDesc: "炸金花结算返点" },
        [14]: { id: 14, integralEventDesc: "跑得快结算返点" },
    }
}


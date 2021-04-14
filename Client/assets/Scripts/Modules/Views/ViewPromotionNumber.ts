import View from "../../MVCFramework/View";
import { GetMinePromoteInfoRes } from "../../Protos/Promoter";

export default class ViewPromotionNumber extends View {
    TextTeamNum: cc.Label;
    TextPlayerNum: cc.Label;
    TextDailyAdd: cc.Label;
    TextDailyActive: cc.Label;

    viewData: any;

    public SetViewData(viewDta: any) {
        this.viewData = viewDta;
        cc.log("推广数据", this.viewData)
    }

    public OnAwake() {
        this.TextTeamNum = this.FindTransform("TextTeamNum").getComponent(cc.Label);
        this.TextPlayerNum = this.FindTransform("TextPlayerNum").getComponent(cc.Label);
        this.TextDailyAdd = this.FindTransform("TextDailyAdd").getComponent(cc.Label);
        this.TextDailyActive = this.FindTransform("TextDailyActive").getComponent(cc.Label);
    }

    public OnShowView() {
        let viewData = this.viewData as GetMinePromoteInfoRes;

        this.TextTeamNum.string = viewData.teamNum + '人';
        this.TextPlayerNum.string = viewData.directPlayerNum + '人';
        this.TextDailyAdd.string = viewData.dailyAdd + '人';
        this.TextDailyActive.string = viewData.activeNum + '人';
    }
}

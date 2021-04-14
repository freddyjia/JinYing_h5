import View from "../../MVCFramework/View";
import ListView, { Cell, ListViewScrollStyle } from "../../Components/ListView";
import { MineDayIncomeInfoResp, IncomeDayInfo } from "../../Protos/Promoter";
import Util from "../../Tools/Util";

class ViewPerformanceItem extends Cell {
    Bg: cc.Node;
    TextDate: cc.Label;
    TextDailyTotalPeformance: cc.Label;
    TextDailyTeamPeformance: cc.Label;
    TextDailyPeformance: cc.Label;

    public static Create(node: cc.Node) {
        let item = new ViewPerformanceItem();
        item.Init(node);
        return item;
    }

    public Init(node: cc.Node) {
        this.content = node;

        this.Bg = cc.find("Bg", node);
        this.TextDate = cc.find("TextDate", node).getComponent(cc.Label);
        this.TextDailyTotalPeformance = cc.find("TextDailyTotalPeformance", node).getComponent(cc.Label);
        this.TextDailyTeamPeformance = cc.find("TextDailyTeamPeformance", node).getComponent(cc.Label);
        this.TextDailyPeformance = cc.find("TextDailyPeformance", node).getComponent(cc.Label);
    }

    public Update(itemData: IncomeDayInfo, index: number) {
        this.Bg.active = index % 2 == 0;

        this.TextDate.string = Util.FormatDate(new Date(itemData.date));
        this.TextDailyTotalPeformance.string = Util.formatGoldText(itemData.incomeOneLevelToday, false);
        this.TextDailyTeamPeformance.string = Util.formatGoldText(itemData.incomeTwoAndThreeLevelToday, false);
        this.TextDailyPeformance.string = Util.formatGoldText(itemData.incomeToday, false);
    }
}

export default class ViewDayEarnings extends View {
    NodeListView: cc.Node;
    PeformanceListView: ListView;
    PeformanceItemCopy: cc.Node;
    NodeNull: cc.Node;
    Scrollbar: cc.Scrollbar;

    curPageIdx: number;
    totalPageIdx: number;
    cellDataList: IncomeDayInfo[];

    RequestDayPerformanceInfo: (pageIdx: number, callback: (data) => void) => void;

    viewData: string;

    public SetViewData(viewData: string) {
        this.viewData = viewData;
    }

    public OnAwake() {
        this.NodeNull = this.FindTransform("NodeNull");
        this.NodeListView = this.FindTransform("NodeListView");
        this.PeformanceItemCopy = this.FindTransform("PeformanceItemCopy");
        this.PeformanceListView = this.FindTransform("PeformanceListView").getComponent(ListView);
        //this.Scrollbar = this.FindTransform("Scrollbar").getComponent(cc.Scrollbar);

        this.CreateListView();
    }

    public CreateListView() {
        this.PeformanceListView.Init(
            ListViewScrollStyle.Top,
            (row: number) => {
                return 63;
            },
            () => {
                return this.cellDataList.length;
            },
            () => {
                let nodeItem = cc.instantiate(this.PeformanceItemCopy) as cc.Node;
                nodeItem.active = true;

                let item = ViewPerformanceItem.Create(nodeItem);
                return item;
            },
            (cell: Cell) => {
                let item = cell as ViewPerformanceItem;
                item.Update(this.cellDataList[item.row], item.row);
            }
        )

        //this.PeformanceListView.SetVerticalScrollBar(this.Scrollbar);

        this.PeformanceListView.SetScrollBottomCallback(() => {
            this.PeformanceListView.SetScrollToBottomShouldCallback(false);

            if (this.curPageIdx < this.totalPageIdx) {
                this.RequestDayPerformanceInfo(this.curPageIdx + 1, (respData) => {
                    this.curPageIdx++;
                    this.HandleResp(respData);
                })
            }
        })
    }

    public HandleResp(resData: any) {
        let data = resData as MineDayIncomeInfoResp;
        cc.log("resData",resData);
        this.totalPageIdx = data.totalPage;
        if (this.totalPageIdx <= 0)
            this.totalPageIdx = 1;

        let enabled = this.curPageIdx < this.totalPageIdx;
        this.PeformanceListView.SetScrollToBottomShouldCallback(enabled);

        resData.incomeDayInfoList.forEach(element => {
            this.cellDataList.push(element);
        });

        this.UpdateListView();
    }

    public UpdateListView() {
        let empty = this.cellDataList.length == 0;
        this.NodeNull.active = empty;
        this.NodeListView.active = !empty;
        this.PeformanceListView.Refresh();
    }

    public OnShowView() {
        this.curPageIdx = 1;
        this.totalPageIdx = 1;
        this.cellDataList = [];

        this.NodeNull.active = true;
        this.NodeListView.active = false;
        this.PeformanceListView.GetScrollView().scrollToTop();

        this.RequestDayPerformanceInfo(1, (respData) => {
            cc.log("收益",respData)
            this.HandleResp(respData);
        })
    }
}

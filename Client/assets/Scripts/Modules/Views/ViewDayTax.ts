import View from "../../MVCFramework/View";
import ListView, { Cell, ListViewScrollStyle } from "../../Components/ListView";
import Util from "../../Tools/Util";
import { GetMinePlayersInfoRes, SubordinateIncomeInfo } from "../../Protos/Promoter";
import TIPS from "../../Global/Tips";

let PageNum = 7;

let formatDate = (date: Date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let monthStr = month >= 10 ? month : "0" + month;
    let day = date.getDate();
    let dayStr = day >= 10 ? day : "0" + day;
    return monthStr + '月' + dayStr + '日';
}

let getDateKey = (date: Date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let monthStr = month >= 10 ? month : "0" + month;
    let day = date.getDate();
    let dayStr = day >= 10 ? day : "0" + day;
    return year + '-' + monthStr + '-' + dayStr;
}

class ViewPerformanceItem extends Cell {
    Bg: cc.Node;
    TextID: cc.Label;
    TextName: cc.Label;
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
        this.TextID = cc.find("TextID", node).getComponent(cc.Label);
        this.TextName = cc.find("TextName", node).getComponent(cc.Label);
        this.TextDailyTotalPeformance = cc.find("TextDailyTotalPeformance", node).getComponent(cc.Label);
        this.TextDailyTeamPeformance = cc.find("TextDailyTeamPeformance", node).getComponent(cc.Label);
        this.TextDailyPeformance = cc.find("TextDailyPeformance", node).getComponent(cc.Label);
    }

    public Update(itemData: any, index: number) {
        let data = itemData as SubordinateIncomeInfo;

        this.Bg.active = index % 2 == 0;
        this.TextID.string = data.subordinateId;
        this.TextName.string = data.subordinateName;
        this.TextDailyTotalPeformance.string = Util.formatGoldText(data.performanceForMeFromSubordinateId, false);
        this.TextDailyTeamPeformance.string = Util.formatGoldText(data.performanceFromSubordinateIdOneAndTwoLevel, false);
        this.TextDailyPeformance.string = Util.formatGoldText(data.incomeForMeToday, false);
    }
}

class ListViewData {
    curPage: number = 1;
    totalPage: number = 1;
    cellDataList: any[] = [];
    performanceAllToday: number = 0;
    incomeAllToday: number = 0;
    performanceOneLevelNum: number = 0;
}

export default class ViewDayTax extends View {
    TextDate: cc.Label;
    TextTaxTotal: cc.Label;
    TextTaxTotalReward: cc.Label;
    TextTotalNum: cc.Label;

    PeformanceItemCopy: cc.Node;
    NodeNull: cc.Node;

    DateSelectPanel: cc.Node;

    ListViews: ListView[];
    TextDateList: cc.Label[];
    Scrollbars: cc.Scrollbar[];
    NodeListViews: cc.Node[];

    curDateKey: string;
    dataMap: { [dateKey: string]: ListViewData } = {};
    curListViewId: number;
    dateList: Date[];

    RequestMinePlayersInfo: (dateKey, pageIdx, callback: (data) => void) => void;

    public SetViewData(viewData) {
        this.curDateKey = viewData;
    }

    public SaveViewData(viewData) {
        let data = viewData as GetMinePlayersInfoRes;
        let listViewData = this.dataMap[this.curDateKey];
        listViewData.totalPage = data.totalPage;
        listViewData.performanceOneLevelNum += data.performanceOneLevelNum;

        data.subordinateIncomeInfoList.forEach(element => {
            listViewData.cellDataList.push(element);
            listViewData.performanceAllToday += (element.performanceForMeFromSubordinateId + element.performanceFromSubordinateIdOneAndTwoLevel);
            listViewData.incomeAllToday += element.incomeForMeToday;
        });
    }

    public OnAwake() {
        this.TextDate = this.FindTransform("TextDate").getComponent(cc.Label);
        this.TextTaxTotal = this.FindTransform("TextTaxTotal").getComponent(cc.Label);
        this.TextTaxTotalReward = this.FindTransform("TextTaxTotalReward").getComponent(cc.Label);
        this.TextTotalNum = this.FindTransform("TextTotalNum").getComponent(cc.Label);

        this.PeformanceItemCopy = this.FindTransform("PeformanceItemCopy");
        this.NodeNull = this.FindTransform("NodeNull");

        let BtnSelect = this.FindTransform("BtnSelect").getComponent(cc.Button);
        Util.SetClickAction(BtnSelect, () => {
            this.DateSelectPanel.active = true;
        });

        this.DateSelectPanel = this.FindTransform("DateSelectPanel");
        let BtnDateMask = this.FindTransform("DateSelectMask").getComponent(cc.Button);
        Util.SetClickAction(BtnDateMask, () => {
            this.DateSelectPanel.active = false;
        });

        this.ListViews = [];
        this.TextDateList = [];
        this.Scrollbars = [];
        this.NodeListViews = [];

        for (let i = 1; i <= PageNum; i++) {
            let BtnDate = this.FindTransform("BtnDate" + i);
            this.TextDateList.push(cc.find("Text", BtnDate).getComponent(cc.Label));

            Util.SetClickAction(BtnDate.getComponent(cc.Button), () => {
                this.OnBtnDateClicked(i);
            });

            let NodeListView = this.FindTransform("NodeListView" + i);
            this.NodeListViews.push(NodeListView);

            let listView = cc.find("ListView", NodeListView).getComponent(ListView);
            this.ListViews.push(listView);

            // let scrollbar = cc.find("Scrollbar", NodeListView).getComponent(cc.Scrollbar);
            // this.Scrollbars.push(scrollbar);
        }

        this.CreateListView();
    }

    public CreateListView() {
        for (let i = 0; i < PageNum; i++) {
            let listViewJS = this.ListViews[i];
            listViewJS.Init(
                ListViewScrollStyle.Top,
                (row: number) => {
                    return 63;
                },
                () => {
                    let listViewData = this.dataMap[this.curDateKey];
                    if (listViewData) {
                        return listViewData.cellDataList.length;
                    }
                    return 0;
                },
                () => {
                    let nodeItem = cc.instantiate(this.PeformanceItemCopy) as cc.Node;
                    nodeItem.active = true;

                    let item = ViewPerformanceItem.Create(nodeItem);
                    return item;
                },
                (cell: Cell) => {
                    let item = cell as ViewPerformanceItem;
                    let listViewData = this.dataMap[this.curDateKey];
                    item.Update(listViewData.cellDataList[item.row], item.row);
                }
            );

            //listViewJS.SetVerticalScrollBar(this.Scrollbars[i]);

            listViewJS.SetScrollBottomCallback(() => {
                listViewJS.SetScrollToBottomShouldCallback(false);
                let viewData = this.dataMap[this.curDateKey];
                if (viewData.curPage < viewData.totalPage) {
                    cc.log("获取数据----1")
                    this.RequestMinePlayersInfo(this.curDateKey, viewData.curPage + 1, (respData) => {
                        cc.log("获取数据----3", respData)
                        viewData.curPage++;
                        this.SaveViewData(respData);
                        this.UpdateView();
                    })
                }
            })
        }
    }

    public OnShowView() {
        this.curListViewId = 0;
        this.dateList = [];
        this.dataMap = {};

        this.dataMap[this.curDateKey] = new ListViewData();

        let curDateArr = this.curDateKey.split('-');
        let year = Number(curDateArr[0]);
        let month = Number(curDateArr[1]);
        let day = Number(curDateArr[2]);
        let curDate = new Date(year, month - 1, day);


        for (let i = 1; i <= PageNum; i++) {
            let newTime = curDate.getTime() - (i - 1) * 24 * 3600 * 1000;
            let newDate = new Date(newTime);
            this.dateList.push(newDate);

            this.ListViews[i - 1].GetScrollView().scrollToTop();
        }

        this.InitDatesView();
        this.ShowListView(1);
        this.UpdateView();
        cc.log("获取数据----1")
        this.RequestMinePlayersInfo(this.curDateKey, 1, (respData) => {
            cc.log("获取数据----3", respData)
            this.SaveViewData(respData);
            this.UpdateView();
        })
    }

    public InitDatesView() {
        this.DateSelectPanel.active = false;

        for (let index = 0; index < this.dateList.length; index++) {
            this.TextDateList[index].string = formatDate(this.dateList[index]);

            if (index == 0) {
                this.TextDate.string = formatDate(this.dateList[index]);
            }
        }
    }

    public ShowListView(showIdx: number) {
        for (let i = 1; i <= PageNum; i++) {
            this.NodeListViews[i - 1].active = false;
        }
        this.NodeNull.active = true;
    }

    public UpdateView() {
        let listViewData = this.dataMap[this.curDateKey];
        let shouldCallback = true;

        if (listViewData.curPage > 1 && listViewData.curPage >= listViewData.totalPage) {
            shouldCallback = false;
        }
        this.ListViews[this.curListViewId].SetScrollToBottomShouldCallback(shouldCallback);

        this.TextTaxTotal.string = Util.formatGoldText(listViewData.performanceAllToday, false);
        this.TextTaxTotalReward.string = Util.formatGoldText(listViewData.incomeAllToday, false);
        this.TextTotalNum.string = listViewData.performanceOneLevelNum.toString();

        this.UpdateListView();
    }

    public UpdateListView() {
        let listViewData = this.dataMap[this.curDateKey];
        let empty = listViewData.cellDataList.length == 0;
        this.NodeNull.active = empty;
        this.NodeListViews[this.curListViewId].active = !empty;
        this.ListViews[this.curListViewId].Refresh();
    }

    public OnBtnDateClicked(idx: number) {
        let date = this.dateList[idx - 1];
        let dateKey = getDateKey(date);

        if (dateKey == this.curDateKey)
            return;

        this.TextDate.string = formatDate(date);
        this.DateSelectPanel.active = false;

        this.curListViewId = idx - 1;
        this.curDateKey = dateKey;

        this.ShowListView(idx);

        this.dataMap[this.curDateKey] = new ListViewData();

        this.RequestMinePlayersInfo(dateKey, 1, (respData) => {
            this.SaveViewData(respData);
            this.UpdateView();
        })
    }
}
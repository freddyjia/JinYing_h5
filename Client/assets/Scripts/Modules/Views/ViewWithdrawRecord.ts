import View from "../../MVCFramework/View";
import ListView, { ListViewScrollStyle, Cell } from "../../Components/ListView";
import { ITakeMoneyRecord, TakeMoneyRecord } from "../../Protos/Withdraw";
import Util from "../../Tools/Util";

class ViewWithdrawRecordItem extends Cell
{
    itemBg:cc.Node;
    timeText:cc.Label;
    goldNumText:cc.Label;
    statusCG:cc.Node;
    statusSB:cc.Node;
    statusCLZ:cc.Node;

    public static Create(node:cc.Node)
    {
        let item = new ViewWithdrawRecordItem();
        item.Init(node);
        return item;
    }

    public Init(node:cc.Node)
    {
        this.content = node;

        this.itemBg = cc.find("itemBg", node);
        this.statusCG = cc.find("statusCG", node);
        this.statusSB = cc.find("statusSB", node);
        this.statusCLZ = cc.find("statusCLZ", node);
        this.timeText = cc.find("timeText", node).getComponent(cc.Label);
        this.goldNumText = cc.find("goldNumText", node).getComponent(cc.Label);
    }

    public Update(recordData:ITakeMoneyRecord)
    {
        //this.itemBg.active = this.row%2==0;

        let date = new Date();
        date.setTime(Number(recordData.timeMs));
        this.timeText.string = Util.FormatDate(date);
        this.goldNumText.string = (recordData.money / 100).toFixed(2);

        if (recordData.status == 1)
        {
            this.statusCLZ.active = true;
            this.statusCG.active = false;
            this.statusSB.active = false;
        }
        else if (recordData.status == 2)
        {
            this.statusCLZ.active = false;
            this.statusCG.active = true;
            this.statusSB.active = false;
        }
        else
        {
            this.statusCLZ.active = false;
            this.statusCG.active = false;
            this.statusSB.active = true;
        }
    }
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewWithdrawRecord extends View 
{
    RecordListView:ListView;
    RecordListViewCopy:cc.Node;
    noRecordTip:cc.Node;

    countOfRows:number;
    withdrawRecordData:TakeMoneyRecord[];

    public OnAwake()
    {
        this.noRecordTip = this.FindTransform("noRecordTip");
        this.RecordListViewCopy = this.FindTransform("RecordListViewCopy");
        this.RecordListView = this.FindTransform("RecordListView").getComponent(ListView);

        this.CreateListView();
    }

    public CreateListView()
    {
        this.countOfRows = 0;
        this.RecordListView.Init(
            ListViewScrollStyle.Top,
            (row:number)=>
            {
                return 72;
            },
            ()=>
            {
                return this.countOfRows;
            },
            ()=>
            {
                let nodeItem = cc.instantiate(this.RecordListViewCopy) as cc.Node;
                nodeItem.active = true;

                let item = ViewWithdrawRecordItem.Create(nodeItem);
                return item;
            },
            (cell:Cell)=>
            {
                let item = cell as ViewWithdrawRecordItem;
                item.Update(this.withdrawRecordData[item.row]);
            }
        )
    }

    public OnShowView()
    {
        this.RecordListView.node.active = false;
        this.noRecordTip.active = true;
        this.withdrawRecordData = [];
    }

    public UpdateWithdrawRecord(withdrawRecordData:TakeMoneyRecord[])
    {
        this.withdrawRecordData = withdrawRecordData;
        this.countOfRows = withdrawRecordData.length;

        let emptyData = this.countOfRows == 0;
        this.noRecordTip.active = emptyData;
        this.RecordListView.node.active = !emptyData;

        this.RecordListView.Refresh();
    }
}

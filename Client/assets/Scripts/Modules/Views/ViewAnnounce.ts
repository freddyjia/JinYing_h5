import View from "../../MVCFramework/View";
import { AnnounInfo } from "../../Protos/PlayerRole";
import ListView, { ListViewScrollStyle, Cell } from "../../Components/ListView";
import Util from "../../Tools/Util";
import NodeUtil from "../../Tools/NodeUtil";


///////////////////////////////////////////////////////////////////////////////
// Item
class AnnounceItem extends Cell
{
    public node:cc.Node;
    private clickItemAction:(info:AnnounInfo)=>void;
    private itemData:AnnounInfo;

    bg_wd:cc.Node;
    bg_yd:cc.Node;
    title:cc.Label;
    title1:cc.Label;
    sender:cc.Label;
    time:cc.Label;
    time1:cc.Label;


    public static CreateItem(nodeItem:cc.Node)
    {
        let item = new AnnounceItem();
        item.Init(nodeItem);
        return item;
    }

    public Init(nodeItem:cc.Node)
    {
        this.node = nodeItem;
        this.content = nodeItem;

        this.bg_wd = cc.find("bg_wd",nodeItem);
        this.bg_yd = cc.find("bg_yd",nodeItem);

        this.title = NodeUtil.SearchLabel(nodeItem,"title");
        this.time = NodeUtil.SearchLabel(nodeItem,"time");  
        this.time1 = NodeUtil.SearchLabel(nodeItem,"time1");   
        this.title1 = NodeUtil.SearchLabel(nodeItem,"title1");   
        this.sender = NodeUtil.SearchLabel(nodeItem, "sender");

        let BtnItem = nodeItem.getComponent(cc.Button);
        Util.SetClickAction(BtnItem, (btn, data)=>{
            if (this.clickItemAction != null)
                this.clickItemAction(this.itemData);
        })
    }

    public SetClickItemAction(action:(info:AnnounInfo)=>void)
    {
        this.clickItemAction = action;
    }

    public Update(itemData:AnnounInfo, selected:boolean)
    {
        this.itemData = itemData;

        let read = itemData.read;
        this.bg_yd.active = read;
        this.bg_wd.active = !read;

        this.title.string = itemData.title;
        this.title1.string = itemData.title;
        this.sender.string = itemData.sendPlayerName;

        let date = new Date();
        date.setTime(Number(itemData.timeMs));
        this.time.string = Util.FormatDate(date);
        this.time1.string = Util.FormatDate(date);
    }
}

///////////////////////////////////////////////////////////////////////////////
// 邮件主逻辑
const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewAnnounce extends View 
{
    EmptyPanel:cc.Node;
    EmailListPanel:cc.Node;

    VScrollRect:cc.Node;
    AnnounceItemCopy:cc.Node;
    AnnounceListView:ListView;

    countOfRows:number;
    announceInfoList:AnnounInfo[];
    selectMap:{[idx:string]:boolean};
    public ClickItemAction:(info:AnnounInfo)=>void;

    public OnAwake()
    {
        this.EmptyPanel = this.FindTransform("EmptyPanel");
        this.EmailListPanel = this.FindTransform("EmailListPanel");
        this.VScrollRect = this.FindTransform("VScrollRect");
        this.AnnounceItemCopy = this.FindTransform("announceItem");

        let listView = this.VScrollRect.getComponent(ListView);
        listView.Init(
            ListViewScrollStyle.Top,
            (row:number)=>
            {
                return 140;
            },
            ()=>
            {
                return this.countOfRows;
            },
            ()=>
            {
                let nodeItem = cc.instantiate(this.AnnounceItemCopy) as cc.Node;
                nodeItem.active = true;

                let announceItem = AnnounceItem.CreateItem(nodeItem);
                announceItem.SetClickItemAction(this.ClickItemAction);

                return announceItem;
            },
            (cell:Cell)=>
            {
                let announceItem = cell as AnnounceItem;
                let selected = this.selectMap[this.announceInfoList[announceItem.row].id];
                if (selected == undefined)
                    selected = false;
                announceItem.Update(this.announceInfoList[announceItem.row], selected);

            }
        )
        this.AnnounceListView = listView;
    }

    public OnShowView()
    {
        this.selectMap = {};
    }

    public UpdateAnnounce(announceInfoList:AnnounInfo[])
    {
        this.selectMap = {};
        for (let i = 0; i < announceInfoList.length; i++)
        {
            this.selectMap[announceInfoList[i].id] = false;
        }

        this.countOfRows = announceInfoList.length;
        this.announceInfoList = announceInfoList;
        this.AnnounceListView.Refresh();

        let empty = announceInfoList.length <= 0;
        this.EmptyPanel.active = empty;
        this.EmailListPanel.active = !empty;
    }

    public UpdateSelectItem(info:AnnounInfo)
    {
        this.selectMap = {};
        this.selectMap[info.id] = true;
        this.AnnounceListView.Refresh();
    }
}

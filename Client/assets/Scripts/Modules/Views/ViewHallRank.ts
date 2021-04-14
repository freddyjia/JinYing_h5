import View from "../../MVCFramework/View";
import { GetRankingRes } from "../../Protos/Ranking";
import Util from "../../Tools/Util";
import NodeUtil from "../../Tools/NodeUtil";
import ListView, { ListViewScrollStyle, Cell } from "../../Components/ListView";
import Global from "../../Global/Global";

enum Ranktype
{
    TodayWinGold = 2,//今日财富榜
    TodayWinGameCnt = 3,//今日局数榜
}

export default class ViewHallRank extends View 
{
    private AllListViewPanel:cc.Node;
    private ListViewItem:cc.Node;
    private ListviewPanel:cc.Node;
    private BtnTodayWinGold:cc.Node;
    private BtnTodayWinGameCnt:cc.Node;

    private currentRanktype = -1;
    private btnRanktype:{[ranktype:number]:cc.Node} = {};

    private rankingDatas:{[rankType:number]:GetRankingRes} = {};
    private listviewPannels:{[rankType:number]:ListviewPanel} = {}

    public getRankingDataCallback:(ranktype)=>void;

    public OnAwake()
    {
        this.AllListViewPanel = this.FindTransform("AllListViewPanel");
        this.ListViewItem = this.FindTransform("ListViewItem");
        this.ListviewPanel = this.FindTransform("ListviewPanel");
        this.BtnTodayWinGold = this.FindTransform("BtnTodayWinGold");
        this.BtnTodayWinGameCnt = this.FindTransform("BtnTodayWinGameCnt");

        this.btnRanktype[Ranktype.TodayWinGold] = this.BtnTodayWinGold;
        this.btnRanktype[Ranktype.TodayWinGameCnt] = this.BtnTodayWinGameCnt;

        this.SetRanktypeBtn(Ranktype.TodayWinGold);
        this.SetRanktypeBtn(Ranktype.TodayWinGameCnt);

        this.SetRankTypeListviewPannel(Ranktype.TodayWinGold);
        this.SetRankTypeListviewPannel(Ranktype.TodayWinGameCnt);
    }

    public OnHideView()
    {
        // this.currentRanktype = -1;
    }

    public OnShowView()
    {
        this.SelectRankType(Ranktype.TodayWinGold);
    }

    private SetRanktypeBtn(ranktype)
    {
        Util.SetClickAction(cc.find("BtnSelect",this.btnRanktype[ranktype]).getComponent(cc.Button),()=>{
            this.SelectRankType(ranktype);
        });
        Util.SetClickAction(cc.find("BtnUnSelect",this.btnRanktype[ranktype]).getComponent(cc.Button),()=>{
            this.SelectRankType(ranktype);
        });
    }

    private SetRankTypeListviewPannel(ranktype)
    {
        let node = cc.instantiate(this.ListviewPanel);
        node.parent = this.AllListViewPanel;
        node.position = cc.Vec2.ZERO;
        let listviewPannel = new ListviewPanel();
        listviewPannel.Init(node,this.ListViewItem);
        this.listviewPannels[ranktype] = listviewPannel;
    }

    private SelectRanktypeButton(select,ranktype)
    {
        if(select == true)
        {
            cc.find("BtnSelect",this.btnRanktype[ranktype]).active = true;
            cc.find("BtnUnSelect",this.btnRanktype[ranktype]).active = false;
        }
        else
        {
            cc.find("BtnSelect",this.btnRanktype[ranktype]).active = false;
            cc.find("BtnUnSelect",this.btnRanktype[ranktype]).active = true;
        }
    }

    public RefreshRankingDatas(rankingDatas:{[rankType:number]:GetRankingRes})
    {
        this.rankingDatas = rankingDatas;
    }

    public RefreshListviewPannel()
    {
        this.listviewPannels[this.currentRanktype].RefreshData(this.rankingDatas[this.currentRanktype]);
    }

    public SelectRankType(rankType)
    {
        if(this.currentRanktype == rankType)
            return;
        this.SelectRanktypeButton(true,rankType);
        this.listviewPannels[rankType].node.active = true;

        if(this.currentRanktype != -1)
        {
            this.SelectRanktypeButton(false,this.currentRanktype);
            this.listviewPannels[this.currentRanktype].node.active = false;
        }
            
        this.currentRanktype = rankType;
        this.getRankingDataCallback(rankType);
        this.RefreshListviewPannel();
    }
}

class ListviewPanel
{
    public node:cc.Node;
    private listViewItem;
    private dicNode:{[name:string]:cc.Node} = null;
    private listView:ListView;
    private Bottom:cc.Node;
    private NoRankPosImg:cc.Node;
    private HeadIcon:cc.Sprite;
    private HeadBg:cc.Sprite;
    private TxtName:cc.Label;
    private TxtRankPosTop:cc.Label;
    private IconGold:cc.Node;
    private IconGameCnt:cc.Node;
    private TxtGold:cc.Label;
    private TxtRankPos:cc.Label;


    public Init(node,listViewItem)
    {
        this.node = node;
        this.listViewItem = listViewItem;
        this.dicNode = NodeUtil.GetNodeDic(this.node);

        this.Bottom = this.dicNode["Bottom"];
        this.NoRankPosImg = this.dicNode["NoRankPosImg"];
        this.HeadIcon = this.dicNode["HeadIcon"].getComponent(cc.Sprite);
        this.HeadBg = this.dicNode["HeadBg"].getComponent(cc.Sprite);
        this.TxtName = this.dicNode["TxtName"].getComponent(cc.Label);
        this.TxtRankPosTop = this.dicNode["TxtRankPosTop"].getComponent(cc.Label);
        this.IconGold = this.dicNode["IconGold"];
        this.IconGameCnt = this.dicNode["IconGameCnt"];
        this.TxtGold = this.dicNode["TxtGold"].getComponent(cc.Label);
        this.TxtRankPos = this.dicNode["TxtRankPos"].getComponent(cc.Label);
    }

    public RefreshData(rankData:GetRankingRes)
    {
        if(this.node.activeInHierarchy == false)
            return;

        if(rankData == null)
        {
            this.Bottom.active = false;
            return;
        }

        this.Bottom.active = true;
        if(this.listView == null)
        {
            this.listView = this.dicNode["ListView"].getComponent(ListView);
            this.listView.Init(
                //样式
                ListViewScrollStyle.Top,
                (row:number)=>{
                    //行高，可动态变化
                return 115;
            },()=>{
                //行数，可动态变化
                return rankData.rankUserList.length;
            },()=>{
                //返回一个新建的cell
                let cell = new CellRankItem();

                let listViewItemTest = cc.instantiate(this.listViewItem);
                cell.content = listViewItemTest;
                let dicNodeItem = NodeUtil.GetNodeDic(listViewItemTest);
                cell.BG123 = dicNodeItem["BG123"];
                cell.HeadIcon = dicNodeItem["HeadIcon"].getComponent(cc.Sprite);
                cell.HeadBg = dicNodeItem["HeadBg"].getComponent(cc.Sprite);
                cell.TxtName = dicNodeItem["TxtName"].getComponent(cc.Label);
                cell.TxtRankPosTop = dicNodeItem["TxtRankPosTop"].getComponent(cc.Label);
                cell.IconGold = dicNodeItem["IconGold"];
                cell.IconGameCnt = dicNodeItem["IconGameCnt"];
                cell.TxtGold = dicNodeItem["TxtGold"].getComponent(cc.Label);
                cell.TxtRankPos = dicNodeItem["TxtRankPos"].getComponent(cc.Label);

                if(rankData.rankType == Ranktype.TodayWinGold)
                {
                    cell.IconGold.active = true;
                    cell.IconGameCnt.active = false;
                }
                else
                {
                    cell.IconGold.active = false;
                    cell.IconGameCnt.active = true;
                }
                
                return cell;
            },(cell:Cell)=>{
                //每当要刷新cell的时候就会回调
                let data = rankData.rankUserList[cell.row];
                let cellRankItem = cell as CellRankItem;
                if(data.ranking > 3)
                {
                    cellRankItem.BG123.active = false;
                    cellRankItem.TxtRankPosTop.node.active = false;
                    cellRankItem.TxtRankPos.node.active = true;
                    cellRankItem.TxtRankPos.string = data.ranking.toString();
                }
                else
                {
                    cellRankItem.BG123.active = true;
                    cellRankItem.TxtRankPosTop.node.active = true;
                    cellRankItem.TxtRankPos.node.active = false;
                    cellRankItem.TxtRankPosTop.string = data.ranking.toString();
                }

                Util.SetHeadNetIcon(cellRankItem.HeadIcon,data.headImageUrl);
                Util.SetHeadBox(cellRankItem.HeadBg,data.headBox);
                cellRankItem.TxtName.string = data.username;
                if(rankData.rankType == Ranktype.TodayWinGold)
                {
                    cellRankItem.TxtGold.string = (parseInt(data.count) / 100).toString();
                }
                else
                {
                    cellRankItem.TxtGold.string = data.count;
                }
                
            });

        }

        this.listView.Refresh();

        if(rankData.selfRankData.ranking < 0 || rankData.selfRankData.ranking > 100)
        {
            this.NoRankPosImg.active = true;
        }
        else
        {
            this.NoRankPosImg.active = false;
            if(rankData.selfRankData.ranking == 1 || rankData.selfRankData.ranking == 2 || rankData.selfRankData.ranking == 3)
            {
                this.TxtRankPosTop.node.active = true;
                this.TxtRankPos.node.active = false;
                this.TxtRankPosTop.string = rankData.selfRankData.ranking.toString();
            }
            else
            {
                this.TxtRankPosTop.node.active = false;
                this.TxtRankPos.node.active = true;
                this.TxtRankPos.string = rankData.selfRankData.ranking.toString();
            }
        }

        Util.SetHeadNetIcon(this.HeadIcon,Global.PlayerInfo.headImageUrl);
        Util.SetHeadBox(this.HeadBg,Global.PlayerInfo.headboxImage);
        this.TxtName.string = Global.PlayerInfo.username;

        if(rankData.rankType == Ranktype.TodayWinGold)
        {
            this.IconGold.active = true;
            this.IconGameCnt.active = false;
        }
        else
        {
            this.IconGold.active = false;
            this.IconGameCnt.active = true;
        }

        if(rankData.rankType == Ranktype.TodayWinGold)
        {
            this.TxtGold.string = (parseInt(rankData.selfRankData.count) / 100).toString();
        }
        else
        {
            this.TxtGold.string = rankData.selfRankData.count;
        }

    }
}

class CellRankItem extends Cell
{
    public BG123:cc.Node;
    public HeadIcon:cc.Sprite;
    public HeadBg:cc.Sprite;
    public TxtName:cc.Label;
    public TxtRankPosTop:cc.Label;
    public IconGold:cc.Node;
    public IconGameCnt:cc.Node;
    public TxtGold:cc.Label;
    public TxtRankPos:cc.Label;

}

import View from "../../MVCFramework/View";
const { ccclass, property } = cc._decorator;
import ListView, { ListViewScrollStyle, Cell } from "../../Components/ListView";
import { RankingListRes, IRoleInfo, MemberListType } from "../../Protos/GameCommon";
import Util from "../../Tools/Util";
import CellPlayerRank from "./CellPlayerRank";
import SpriteUtil from "../../Tools/SpriteUtil";
import ccC from "../../Tools/ccC";
import TimerManager from "../../Components/TimerManager";
import Global from "../../Global/Global";



@ccclass
export default class ViewOnlinePlayer extends View {

    private listView: ListView;
    private contentList: cc.Node;
    private itemCopy: cc.Node;

    private playerData: RankingListRes;
    private isPlayerClever: boolean = false;
    private Number = 0;

    public OnAwake() {
        this.contentList = this.FindTransform("content");
        this.itemCopy = this.FindTransform("itemCopy");
    }

    //刷新玩家//
    public RefreshPlayer(resdata: any) {
        this.playerData = resdata as RankingListRes;

        if (resdata == null || this.playerData.rankingList == null) {
            return;
        }

        this.playerData.rankingList.sort((a: IRoleInfo, b: IRoleInfo) => {
            if (a.rankIndex > b.rankIndex) {
                return 1;
            }
            else if (a.rankIndex == b.rankIndex) {
                return 0;
            }
            else {
                return -1;
            }
        });


        if (this.playerData.rankingList[0] != null) {
            this.isPlayerClever = this.playerData.rankingList[0].type == MemberListType.Clever;
        }

        if (this.listView != null) {
            if (Global.showLog == true)
                cc.error("在线玩家行数-----------------" + this.playerData.rankingList.length);
            this.listView.Refresh();
            this.listView.ScrollToTop();
            return;
        }

        var self = this;

        if (self.contentList == null) {
            return;
        }

        self.listView = self.contentList.getComponent(ListView);
        self.listView.Init(
            //样式
            ListViewScrollStyle.Top,
            (row: number) => {
                //行高，可动态变化
                return 110;
            }, () => {
                //行数，可动态变化
                return self.playerData.rankingList.length;
            }, () => {
                //返回一个新建的cell
                let cell = new CellPlayerRank();

                let listViewItemTest = cc.instantiate(this.itemCopy);
                cell.content = listViewItemTest;
                cell.head = cc.find("PLAYER/HeadMask/Head", cell.content).getComponent(cc.Sprite);
                cell.headmask = cc.find("PLAYER/HeadMask", cell.content).getComponent(cc.Sprite);
                cell.headFrame = cc.find("PLAYER/headFrame", cell.content).getComponent(cc.Sprite);
                cell.jinbi = cc.find("GoldName/money", cell.content).getComponent(cc.Label);
                cell.huosheng = cc.find("huoshengPre/huosheng", cell.content).getComponent(cc.Label);
                cell.xiazhu = cc.find("xiazhuPre/xiazhu", cell.content).getComponent(cc.Label);
                cell.playerTag = cc.find("NewNode/playerTag", cell.content);
                cell.playerTagRich = cc.find("NewNode/playerTagRich", cell.content);
                cell.Rank = cc.find("NewNode/rankNum", cell.content).getComponent(cc.Label);
                cell.playerName = cc.find("GoldName/playerName", cell.content).getComponent(cc.Label);
                cell.normalBack = cc.find("back2", cell.content)
                return cell;
            }, (cell: Cell) => {
                //每当要刷新cell的时候就会回调
                let thecell = cell as CellPlayerRank;
                cc.log("cell", thecell.row)
                let data = self.playerData.rankingList[cell.row];
                if (data == null) {
                    thecell.content.active = false;
                    return;
                }
                thecell.content.active = true;

                thecell.playerName.string = data.userName;
                thecell.jinbi.string = Util.formatGoldText(data.gold);
                Util.SetHeadBox(thecell.headFrame, data.headbox);
                thecell.playerTag.active = false;
                thecell.playerTagRich.active = false;

                // thecell.Rank.node.active = false;
                // Util.SetHeadNetIcon(thecell.head,data.headImageUrl);
                // thecell.xiazhu.string =Util.formatGoldText( data.totalBet,false) ;
                // thecell.huosheng.string =""+ ( data.totalWin);
                // thecell.normalBack.active = cell.row>=2;

                if (this.isPlayerClever) {
                    if (cell.row == 0) {
                        thecell.playerTag.active = true;
                    }
                    else if (cell.row <= 5) {
                        thecell.playerTagRich.active = true;
                    }
                    else {
                        // thecell.Rank.string = "" + (cell.row+1);
                        // thecell.Rank.node.active = true;
                    }
                }
                else {
                    if (cell.row <= 4) {
                        thecell.playerTagRich.active = true;
                    }
                    else {
                        // thecell.Rank.string = "" + (cell.row+1);
                        // thecell.Rank.node.active = true;
                    }
                }
            });

        TimerManager.GetInstance().CallActionDelay(() => {
            self.listView.Refresh();
        }, 0.5);
    }
}
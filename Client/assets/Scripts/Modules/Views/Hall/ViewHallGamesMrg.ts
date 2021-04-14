import { GameData } from "../../../Protos/HallData";
import ViewHallMainGameInfoItem, { MainGameItem } from "./ViewHallMainGameInfoItem";

// 大厅小游戏管理器


export default class ViewHallGamesMrg 
{
    public node:cc.Node;
    private GameScroll:cc.ScrollView;
    private GameItemCopy:cc.Node;
    private ItemContainer:cc.Node;

    private viewHallMainGameInfoItems:MainGameItem[] = [];
    private checkAndOpenSmallGameListCallback:(gameData:GameData)=>void;

    public Init(scroll:cc.Node)
    {
        this.node = scroll;
        this.GameScroll = scroll.getComponent(cc.ScrollView);
        this.GameItemCopy = cc.find("Viewport/GameItemCopy", this.node);
        this.ItemContainer = cc.find("Viewport/Content", this.node);
    }

    public SetCheckAndOpenSmallGameListCallback(callback:(gameData:GameData)=>void)
    {
        this.checkAndOpenSmallGameListCallback = callback;
    }

    public Flush(itemsData:GameData[])
    {
        this.GameScroll.content.removeAllChildren();
        this.viewHallMainGameInfoItems = [];
        
        var index = 0;
        while(index < itemsData.length)
        {
            if (itemsData[index].single)
            {
                var datas:GameData[] = [itemsData[index]];
                index++;
                var item:ViewHallMainGameInfoItem = new ViewHallMainGameInfoItem();
                item.SetClickItemAction(this.checkAndOpenSmallGameListCallback);

                let copy = cc.instantiate(this.GameItemCopy);
                copy.parent = this.ItemContainer;
                copy.active = true;
                item.Init(copy);
                
                item.Update(true, datas, index, this.GameScroll.content, (hallMainGameItem:ViewHallMainGameInfoItem)=>{
                    for (let i = 0; i < hallMainGameItem.mainGameItems.length; i++)
                        this.viewHallMainGameInfoItems.push(hallMainGameItem.mainGameItems[i]);
                });
            }
            else
            {
                var datas:GameData[] = [];
                datas.push(itemsData[index]);
                if(index+1 < itemsData.length)
                {
                    datas.push(itemsData[index + 1]);
                    index += 2;
                }
                else
                {
                    index += 1;
                }
                
                var item:ViewHallMainGameInfoItem = new ViewHallMainGameInfoItem();
                item.SetClickItemAction(this.checkAndOpenSmallGameListCallback);

                let copy = cc.instantiate(this.GameItemCopy);
                copy.parent = this.ItemContainer;
                copy.active = true;
                item.Init(copy);

                item.Update(false, datas, index, this.GameScroll.content, (hallMainGameItem:ViewHallMainGameInfoItem)=>{
                    for (let i = 0; i < hallMainGameItem.mainGameItems.length; i++)
                        this.viewHallMainGameInfoItems.push(hallMainGameItem.mainGameItems[i]);
                });
            }
        }
    }

    public OpenGameBySwitch(transBtnOpen:cc.Node)
    {
        for (let i = 0; i < this.viewHallMainGameInfoItems.length; i++)
            this.viewHallMainGameInfoItems[i].OpenGameBySwitch(transBtnOpen);
    }

    public BeforeDownloading(playType:number)
    {
        for (let i = 0; i < this.viewHallMainGameInfoItems.length; i++)
            this.viewHallMainGameInfoItems[i].BeforeDownloading(playType);
    }

    public Downloading(playType:number, hasDownloadCnt:number, needUpdateFileCnt:number)
    {
        for (let i = 0; i < this.viewHallMainGameInfoItems.length; i++)
            this.viewHallMainGameInfoItems[i].Downloading(playType, hasDownloadCnt, needUpdateFileCnt);
    }

    public DownloadOk(playType:number)
    {
        for (let i = 0; i < this.viewHallMainGameInfoItems.length; i++)
            this.viewHallMainGameInfoItems[i].DownloadOk(playType);
    } 

    public DownloadFail(playType:number)
    {
        for (let i = 0; i < this.viewHallMainGameInfoItems.length; i++)
            this.viewHallMainGameInfoItems[i].DownloadFail(playType);
    } 
}

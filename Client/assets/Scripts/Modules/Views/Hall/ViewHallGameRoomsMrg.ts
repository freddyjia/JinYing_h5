import { GameData, PlayInfo } from "../../../Protos/HallData";
import ViewHallSubGameInfoItem from "./ViewHallGameRoomItem";
import Util from "../../../Tools/Util";

// 大厅小游戏管理器
export default class ViewHallGameRoomsMrg 
{
    private GameRoomsPanel:cc.Node;
    private ItemContainer:cc.Node;
    private GameItemCopy:cc.Node;
    
    private clickSubRoomSelectItemCallback:(gameData:PlayInfo)=>void;

    public Init(scroll:cc.Node)
    {
        this.GameRoomsPanel = scroll;
        this.ItemContainer = cc.find("Viewport/Content", this.GameRoomsPanel);
        this.GameItemCopy = cc.find("GameItemCopy", this.GameRoomsPanel);
    }

    public SetClickGameRoomItemCallback(callback:(gameData:PlayInfo)=>void)
    {
        this.clickSubRoomSelectItemCallback = callback;
    }

    public Flush(itemsData:PlayInfo[])
    {
        this.ItemContainer.removeAllChildren();

        for(let i = 0; i < itemsData.length; i++)
        {
            let nodeItem = cc.instantiate(this.GameItemCopy);
            nodeItem.active = true;
            this.ItemContainer.addChild(nodeItem, i);
            
            let subItem = new ViewHallSubGameInfoItem();
            subItem.SetClickItemCallback(this.clickSubRoomSelectItemCallback);
            subItem.Init(nodeItem);
            subItem.Update(itemsData[i], i);
        }
    }
}

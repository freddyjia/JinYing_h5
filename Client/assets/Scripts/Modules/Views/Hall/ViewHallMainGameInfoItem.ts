import Util from "../../../Tools/Util";
import { GameData } from "../../../Protos/HallData";
import Toast from "../../../Tools/Toast";
import NodeUtil from "../../../Tools/NodeUtil";
import HallGamesConfig from "../../../Config/HallGamesConfig";

// 大厅小游戏

export class MainGameItem 
{
    public node:cc.Node;
    private GameBg:cc.Sprite;
    private GameIcon:cc.Sprite;
    private TextGameName:cc.Sprite;
    private BtnOpen:cc.Button;

    private itemData:GameData;
    public clickAction:(itemData:GameData)=>void;

    private HallGamesAtlas = "MainGame/Atlas/HallGames";

    public Init(item:cc.Node)
    {
        this.node = item;
        this.GameBg = cc.find("GameBg", this.node).getComponent(cc.Sprite);
        this.GameIcon = cc.find("GameIcon", this.node).getComponent(cc.Sprite);
        this.TextGameName = cc.find("TextGameName", this.node).getComponent(cc.Sprite);
        this.BtnOpen = cc.find("GameBg", this.node).getComponent(cc.Button);

        Util.SetClickAction(this.BtnOpen, (button:cc.Button, data:any)=>{
            
            if(this.itemData.isH5Open == true)
            {
                if (this.clickAction != null)
                this.clickAction(this.itemData);
            }
            else
            {
                Toast.Show("此游戏尚未开放，敬请期待");
            }
            
        });
    }

    public Update(itemData:GameData)
    {
        this.itemData = itemData;

        cc.loader.loadRes(this.HallGamesAtlas, cc.SpriteAtlas, (err, atlas: cc.SpriteAtlas) => {
            if(err){
                cc.error(err.message || err)
            }else{
                let bgName = HallGamesConfig.GetBgSprite(itemData.playType);
                var frame = atlas.getSpriteFrame(bgName);
                if (frame) {
                    this.GameBg.spriteFrame = frame;
                }

                let iconName = HallGamesConfig.GetIconSprite(itemData.playType);
                var frame = atlas.getSpriteFrame(iconName);
                if (frame) {
                    this.GameIcon.spriteFrame = frame;
                }

                let gameName = HallGamesConfig.GetNameSprite(itemData.playType);
                var frame = atlas.getSpriteFrame(gameName);
                if (frame) {
                    this.TextGameName.spriteFrame = frame;
                }
            }
        });
    }

    public SetClickItemAction(action:(itemData:GameData)=>void)
    {
        this.clickAction = action;
    }

    public OpenGameBySwitch(transBtnOpen:cc.Node)
    {

    } 

    public BeforeDownloading(playType:number)
    {

    }

    public Downloading(playType:number, hasDownloadCnt:number, needUpdateFileCnt:number)
    {

    }

    public DownloadOk(playType:number)
    {

    } 

    public DownloadFail(playType:number)
    {

    } 
}

///////////////////////////////////////////////////////////////////////////////////////////////////
const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewHallMainGameInfoItem 
{
    public node:cc.Node =null;
    private BigNode:cc.Node =null;
    private SmallNode:cc.Node =null;

    public zOrder:number;
    public mainGameItems:MainGameItem[];
    private clickAction:(itemData:GameData)=>void;

    public SetClickItemAction(action:(itemData:GameData)=>void)
    {
        this.clickAction = action;
    }

    public Init(rootNode:cc.Node)
    {
        this.node = rootNode;
        this.BigNode = cc.find("BigNode", rootNode);
        this.SmallNode = cc.find("SmallNode", rootNode);
    }

    public Update(single:boolean, gameData:GameData[], zOrder:number, parent:cc.Node, finishCallback:(child:ViewHallMainGameInfoItem)=>void)
    {
        this.zOrder = zOrder;
        this.mainGameItems = [];

        this.BigNode.active = single;
        this.SmallNode.active = !single;
        
        if (single)
        {
            let NodeItem:cc.Node = cc.find("NodeItem1",this.BigNode);
            let mainGameItem:MainGameItem = new MainGameItem();
            mainGameItem.SetClickItemAction(this.clickAction);
            mainGameItem.Init(NodeItem);
            mainGameItem.Update(gameData[0]);

            this.mainGameItems.push(mainGameItem);

            finishCallback(this);
        }
        else
        {
            for (let i = 0; i < 2; i++)
            {
                var NodeItem:cc.Node = cc.find("NodeItem"+(i+1),this.SmallNode);
                NodeItem.active = false;
                
                if (i < gameData.length)
                {
                    NodeItem.active = true;
                    var mainGameItem:MainGameItem = new MainGameItem();
                    mainGameItem.SetClickItemAction(this.clickAction);
                    mainGameItem.Init(NodeItem);
                    mainGameItem.Update(gameData[i]);

                    this.mainGameItems.push(mainGameItem);
                }
            }

            finishCallback(this);
        }
    }
}

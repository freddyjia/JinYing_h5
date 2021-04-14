import HallGameRoomsConfig from "../../../Config/HallGameRoomsConfig";
import { PlayInfo } from "../../../Protos/HallData";
import NodeUtil from "../../../Tools/NodeUtil";
import Util from "../../../Tools/Util";

export default class ViewHallGameRoomItem 
{
    public node:cc.Node;
    private GameBg:cc.Sprite;
    private GameIcon:cc.Sprite;
    private TextGameName:cc.Sprite;
    private BtnOpen:cc.Button;

    private playInfo:PlayInfo;
    private clickItemCallback:(playInfo:PlayInfo)=>void

    public Init(node:cc.Node)
    {
        this.node = node;
        this.GameBg = cc.find("GameBG", this.node).getComponent(cc.Sprite);
        this.GameIcon = cc.find("GameIcon", this.node).getComponent(cc.Sprite);
        this.TextGameName = cc.find("TextGameName", this.node).getComponent(cc.Sprite);
        this.BtnOpen = cc.find("GameBG", this.node).getComponent(cc.Button);

        Util.SetClickAction(this.BtnOpen, (button:cc.Button, data:any)=>{
            if (this.clickItemCallback != null)
                this.clickItemCallback(this.playInfo);
        });
    }

    public SetClickItemCallback(callback:(playInfo:PlayInfo)=>void)
    {
        this.clickItemCallback = callback;
    }

    public Update(playInfo:PlayInfo, roomIdx:number)
    {
        this.playInfo = playInfo;
        
        let prefix = "MainGame/Textures/Hall/";
        let bgName = prefix + HallGameRoomsConfig.GetBgSprite(playInfo.playType, roomIdx);
        NodeUtil.SetSpriteFrame(this.GameBg, bgName);

        let iconName = prefix + HallGameRoomsConfig.GetIconSprite(playInfo.playType, roomIdx);
        NodeUtil.SetSpriteFrame(this.GameIcon, iconName);

        let gameName = prefix + HallGameRoomsConfig.GetNameSprite(playInfo.playType, roomIdx);
        NodeUtil.SetSpriteFrame(this.TextGameName, gameName);
    }
}

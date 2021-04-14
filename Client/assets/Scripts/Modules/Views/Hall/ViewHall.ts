import View from "../../../MVCFramework/View";
import ViewHallAdPaneltMrg from "./ViewHallAdPaneltMrg";
import ViewHallGamesMrg from "./ViewHallGamesMrg";
import { GameData, ADData, PlayInfo } from "../../../Protos/HallData";
import Util from "../../../Tools/Util";
import ViewHallGameRoomsMrg from "./ViewHallGameRoomsMrg";
import Global from "../../../Global/Global";
import VipInfo from "./VipInfo";
import AudioManager from "../../../Manager/AudioManager";
import NodeUtil from "../../../Tools/NodeUtil";
import XTween from "../../../Tools/XTween/XTween";
import Res from "../../../Global/Res";
import { XTweenCurvType } from "../../../Tools/XTween/Base/XTweenCurv";
import HallGameRoomsConfig from "../../../Config/HallGameRoomsConfig";
import { GameTypeMgr } from "../../../Global/GameTypeMgr";


export default class ViewHall extends View 
{
    ContentPanel:cc.Node;

    TextName:cc.Label;
    TextID:cc.Label;
    ImgHead:cc.Sprite;

    TextGold:cc.Label;
    TextSaveGold:cc.Label;

    ImgGameName:cc.Sprite;

    ADsPanel:cc.Node;
    AdContainer:cc.Node;
    GamesPanel:cc.Node;
    GameRoomsPanel:cc.Node;
    GameNamePanel:cc.Node;
    ButtonsPanel:cc.Node;

    AnnounceRedPoint:cc.Node;

    BtnOpenGM:cc.Node;

    ADsPanelStartPos:cc.Node;
    ADsPanelEndPos:cc.Node;
    GamesPanelStartPos:cc.Node;
    GamesPanelEndPos:cc.Node;
    GameRoomsPanelStartPos:cc.Node;
    GameRoomsPanelEndPos:cc.Node;
    ButtonsPanelStartPos:cc.Node;
    ButtonsPanelEndPos:cc.Node;
    GameNamePanelEndPos:cc.Node;
    GameNamePanelStartPos:cc.Node;

    BtnGameHelp:cc.Node;

    currentSelectSubGameType:number;

    viewHallAdPaneltMrg:ViewHallAdPaneltMrg;
    viewHallGamesMrg:ViewHallGamesMrg;
    viewHallGameRoomsMrg:ViewHallGameRoomsMrg;

    public ClickBtnOpen:(itemData:GameData)=>void;
    public fCheckAndOpenSmallGameList:(playType:number)=>void;
    public fClickGameRoomItem:(playInfo:PlayInfo)=>void;

    public OnAwake()
    {
        this.ContentPanel = this.FindTransform("ContentPanel");

        this.TextName = this.FindTransform("TextName").getComponent(cc.Label);
        this.TextID = this.FindTransform("TextID").getComponent(cc.Label);
        this.ImgHead = this.FindTransform("ImgHead").getComponent(cc.Sprite);

        this.TextGold = this.FindTransform("TextGold").getComponent(cc.Label);
        this.TextSaveGold = this.FindTransform("TextSaveGold").getComponent(cc.Label);

        this.ImgGameName = this.FindTransform("ImgGameName").getComponent(cc.Sprite);

        this.ADsPanel = this.FindTransform("ADsPanel");
        this.AdContainer = this.FindTransform("AdContainer");
        this.GamesPanel = this.FindTransform("GamesPanel");
        this.GameRoomsPanel = this.FindTransform("GameRoomsPanel");
        this.GameNamePanel = this.FindTransform("GameNamePanel");
        this.ButtonsPanel = this.FindTransform("ButtonsPanel");

        //位置
        this.ADsPanelStartPos = this.FindTransform("ADsPanelStartPos");
        this.ADsPanelEndPos = this.FindTransform("ADsPanelEndPos");
        this.GamesPanelStartPos = this.FindTransform("GamesPanelStartPos");
        this.GamesPanelEndPos = this.FindTransform("GamesPanelEndPos");
        this.GameRoomsPanelStartPos = this.FindTransform("GameRoomsPanelStartPos");
        this.GameRoomsPanelEndPos = this.FindTransform("GameRoomsPanelEndPos");
        this.ButtonsPanelStartPos = this.FindTransform("ButtonsPanelStartPos");
        this.ButtonsPanelEndPos = this.FindTransform("ButtonsPanelEndPos");
        this.GameNamePanelEndPos = this.FindTransform("GameNamePanelEndPos");
        this.GameNamePanelStartPos = this.FindTransform("GameNamePanelStartPos");

        this.AnnounceRedPoint = this.FindTransform("AnnounceRedPoint");

        this.BtnGameHelp = this.FindTransform("BtnGameHelp");

        this.BtnOpenGM = this.FindTransform("BtnOpenGM");
        this.BtnOpenGM.active = !Global.isRelease;

        // 大厅广告管理器
        this.viewHallAdPaneltMrg = new ViewHallAdPaneltMrg();
        this.viewHallAdPaneltMrg.Init(this.AdContainer);
        this.viewHallAdPaneltMrg.SetCheckAndOpenSmallGameListCallback(this.fCheckAndOpenSmallGameList);

        // 大厅小游戏管理器
        this.viewHallGamesMrg = new ViewHallGamesMrg();
        this.viewHallGamesMrg.Init(this.GamesPanel);
        this.viewHallGamesMrg.SetCheckAndOpenSmallGameListCallback(this.ClickBtnOpen);

        // 二级页面房间
        this.viewHallGameRoomsMrg = new ViewHallGameRoomsMrg();
        this.viewHallGameRoomsMrg.Init(this.GameRoomsPanel);
        this.viewHallGameRoomsMrg.SetClickGameRoomItemCallback(this.fClickGameRoomItem);
    }

    public OnAdapt()
    {
        this.ContentPanel.getComponent(cc.Widget).top = Global.adapt;
    }

    public OnShowView()
    {
       AudioManager.GetInstance().BGMPlay(Res.Audios.MusicHall);
       this.viewHallAdPaneltMrg.OnShowView();
    }

    public OnHideView()
    {
        this.viewHallAdPaneltMrg.OnHideView();
    }

    public OnDestroy()
    {

    }

    public UpdateHallGames(gameDatas:GameData[])
    {
        this.viewHallGamesMrg.Flush(gameDatas);
    }

    public UpdateHallAdItems(adDatas:ADData[])
    {
        this.viewHallAdPaneltMrg.Flush(adDatas);
    }

    public FlushHallGameRooms(playInfos:PlayInfo[], isDirectEnter:boolean, playType:number)
    {
        this.currentSelectSubGameType = playType;

        this.viewHallGameRoomsMrg.Flush(playInfos);
           
        if (isDirectEnter == false)
        {
            if (playType == GameTypeMgr.Config.BY.gameType)
            {
                this.BtnGameHelp.active = false;
            }

            let namePath = HallGameRoomsConfig.GetGameNameSpritePath(playType);
            NodeUtil.SetSpriteFrame(this.ImgGameName, namePath);

            this.PlayHallExitAnimation();
        }
    }
    
    public UpdatePlayerInfo()
    {
        this.TextName.string = Global.PlayerInfo.username;
        this.TextID.string = Global.PlayerInfo.playerId.toString();
        this.TextGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
        
        Util.SetHeadNetIcon(this.ImgHead, Global.PlayerInfo.headImageUrl);
        //this.VipLevel.string = VipInfo.Datas[Global.PlayerInfo.vipLv];
    }

    public UpdateBindMark()
    {
        // let isRegister = false;
        // if (Global.PlayerInfo.phone!=null && Global.PlayerInfo.phone.length > 0)
        //     isRegister = true;

        // this.BindMark.active = isRegister;
        // this.UnBindMark.active = !isRegister;
    }

    public UpdateReliefTimes(allLeftGold:number)
    {
        //this.LeftReliefNum.string = allLeftGold.toFixed(2);
    }

    public UpdateCurrency()
    {
        this.TextGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.Gold);
        this.TextSaveGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.SafeBox);
    }

    public UpdateSafeBoxGold(safeGold:number)
    {
        this.TextSaveGold.string = Util.formatGoldText(Global.PlayerInfo.PlayerCurrency.SafeBox);
    }

    public OpenFullScreenQRCode(url:string)
    {
        // this.QRCodePanel.active = true;
        // this.QRCodeImage.Gen(url);
    }

    public ShowAnnounceRedPoint(show:boolean)
    {
        this.AnnounceRedPoint.active = show;
    }

    public PlayHallEnterAnimation()
    {
        var duration = 0.3;

        this.ADsPanel.active = true;
        var adStartPos = this.ADsPanel.parent.convertToNodeSpaceAR(this.ADsPanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var asEndPos = this.ADsPanel.parent.convertToNodeSpaceAR(this.ADsPanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xAdPanel = XTween.DoMove(this.ADsPanel, adStartPos, asEndPos, duration); 
        xAdPanel.Play();

        this.GamesPanel.active = true;
        var gamesPanelStartPos = this.GamesPanel.parent.convertToNodeSpaceAR(this.GamesPanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var gamesPanelEndPos = this.GamesPanel.parent.convertToNodeSpaceAR(this.GamesPanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xGamesPanel = XTween.DoMove(this.GamesPanel, gamesPanelStartPos, gamesPanelEndPos, duration); 
        xGamesPanel.Play();

        var roomsStartPos = this.GameRoomsPanel.parent.convertToNodeSpaceAR(this.GameRoomsPanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var roomsEndPos = this.GameRoomsPanel.parent.convertToNodeSpaceAR(this.GameRoomsPanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xGamesRoomPanel = XTween.DoMove(this.GameRoomsPanel, roomsStartPos, roomsEndPos, duration); 
        xGamesRoomPanel.SetFinishCallback(()=>{
            this.GameRoomsPanel.active = false;
        })
        xGamesRoomPanel.Play();

        this.ButtonsPanel.active = true;
        var buttonsStartPos = this.ButtonsPanel.parent.convertToNodeSpaceAR(this.ButtonsPanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var buttonsEndPos = this.ButtonsPanel.parent.convertToNodeSpaceAR(this.ButtonsPanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xButtonsPanel = XTween.DoMove(this.ButtonsPanel, buttonsStartPos, buttonsEndPos, duration); 
        xButtonsPanel.Play();

        var namePanelStartPos = this.GameNamePanel.parent.convertToNodeSpaceAR(this.GameNamePanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var namePanelEndPos = this.GameNamePanel.parent.convertToNodeSpaceAR(this.GameNamePanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xGameNamePanel = XTween.DoMove(this.GameNamePanel, namePanelStartPos, namePanelEndPos, duration); 
        xGameNamePanel.SetFinishCallback(()=>{
            this.GameNamePanel.active = false;
        })
        xGameNamePanel.Play();
    }

    public PlayHallExitAnimation()
    {
        var duration = 0.3;

        var adStartPos = this.ADsPanel.parent.convertToNodeSpaceAR(this.ADsPanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var asEndPos = this.ADsPanel.parent.convertToNodeSpaceAR(this.ADsPanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xAdPanel = XTween.DoMove(this.ADsPanel, adStartPos, asEndPos, duration); 
        xAdPanel.SetFinishCallback(()=>{
            this.ADsPanel.active = false;
        })
        xAdPanel.Play();

        var gamesPanelStartPos = this.GamesPanel.parent.convertToNodeSpaceAR(this.GamesPanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var gamesPanelEndPos = this.GamesPanel.parent.convertToNodeSpaceAR(this.GamesPanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xGamesPanel = XTween.DoMove(this.GamesPanel, gamesPanelStartPos, gamesPanelEndPos, duration); 
        xAdPanel.SetFinishCallback(()=>{
            this.GamesPanel.active = false;
        })
        xGamesPanel.Play();

        this.GameRoomsPanel.active = true;
        var roomsStartPos = this.GameRoomsPanel.parent.convertToNodeSpaceAR(this.GameRoomsPanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var roomsEndPos = this.GameRoomsPanel.parent.convertToNodeSpaceAR(this.GameRoomsPanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xGamesRoomPanel = XTween.DoMove(this.GameRoomsPanel, roomsStartPos, roomsEndPos, duration); 
        xGamesRoomPanel.Play();

        var buttonsStartPos = this.ButtonsPanel.parent.convertToNodeSpaceAR(this.ButtonsPanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var buttonsEndPos = this.ButtonsPanel.parent.convertToNodeSpaceAR(this.ButtonsPanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xButtonsPanel = XTween.DoMove(this.ButtonsPanel, buttonsStartPos, buttonsEndPos, duration); 
        xButtonsPanel.SetFinishCallback(()=>{
            this.ButtonsPanel.active = false;
        })
        xButtonsPanel.Play();

        this.GameNamePanel.active = true;
        var namePanelStartPos = this.GameNamePanel.parent.convertToNodeSpaceAR(this.GameNamePanelStartPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        var namePanelEndPos = this.GameNamePanel.parent.convertToNodeSpaceAR(this.GameNamePanelEndPos.convertToWorldSpaceAR(cc.Vec2.ZERO));
        let xGameNamePanel = XTween.DoMove(this.GameNamePanel, namePanelStartPos, namePanelEndPos, duration); 
        xGameNamePanel.Play();
    }
}

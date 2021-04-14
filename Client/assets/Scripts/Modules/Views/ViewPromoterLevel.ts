import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import { LevelInfo } from "../../Protos/Promoter";
import NodeUtil from "../../Tools/NodeUtil";
import Res from "../../Global/Res";
import XTween from "../../Tools/XTween/XTween";
import { XTweenCurvType } from "../../Tools/XTween/Base/XTweenCurv";
import TIPS from "../../Global/Tips";

let PageWidth = 826;
let PageHeight = 260;

let Level2Icon = {
	[1]:'TGY_WDSY_SXS',
	[2]:'TGY_WDSY_CJTG',
	[3]:'TGY_WDSY_GJTG',
	[4]:'TGY_WDSY_ZSTG',
	[5]:'TGY_WDSY_ZJ',
	[6]:'TGY_WDSY_HHR',
}

let Level2XSIcon = {
	[1]:'TGY_sxssy',
	[2]:'TGY_cjsy',
	[3]:'TGY_gjsy',
	[4]:'TGY_zssy',
	[5]:'TGY_zjsy',
	[6]:'TGY_hhrsy',
}


class LevelPageView
{
    node:cc.Node;
    ImgLevel:cc.Sprite;
    ImgLevelName:cc.Sprite;
    ImgTaxTitle:cc.Sprite;
    TextTax1:cc.Label;
    TextTax2:cc.Label;
    TextTax3:cc.Label;
    SpineLevel:sp.Skeleton;

    public static Create(node:cc.Node)
    {
        let view = new LevelPageView();
        view.Init(node);
        return view;
    }

    public Init(node:cc.Node)
    {
        this.node = node;
        this.ImgLevel=NodeUtil.SearchSprite(node,"ImgLevel");
        this.ImgLevelName = NodeUtil.SearchSprite(node, "ImgLevelName");
        this.ImgTaxTitle = NodeUtil.SearchSprite(node, "ImgTaxTitle");
        this.TextTax1 = NodeUtil.SearchLabel(node, "TextTax1");
        this.TextTax2 = NodeUtil.SearchLabel(node, "TextTax2");
        this.TextTax3 = NodeUtil.SearchLabel(node, "TextTax3");
        this.SpineLevel = NodeUtil.SearchChild(node, "SpineLevel").getComponent(sp.Skeleton);
    }

    public Update(levelInfo:LevelInfo)
    {
        let level = levelInfo.level
      //  NodeUtil.SetSpriteFrame(this.ImgLevel, Res.Atlas.Promoter, "promoter_icon_"+level);
        NodeUtil.SetSpriteFrame(this.ImgLevelName, Res.Atlas.Promoter, Level2Icon[level]);
        Util.PlaySpineEffect(this.SpineLevel, null, levelInfo.level.toString(), true, false);
       // NodeUtil.SetSpriteFrame(this.ImgTaxTitle, Res.Atlas.Promoter, Level2XSIcon[level]);

        this.TextTax1.string = levelInfo.firstTaxRate+'%';
        this.TextTax2.string = levelInfo.secondTaxRate+'%';
        this.TextTax3.string = levelInfo.thirdaxRate+'%';

        this.ShowSpineLevel(true);

        Util.PlaySpineEffect(this.SpineLevel, null, level.toString(), true, false);
    }

    public ShowSpineLevel(show:boolean)
    {
        this.SpineLevel.node.active = show;
    }
}


export default class ViewPromoterLevel extends View 
{
    NodeUpgradeTips:cc.Node;
    ImgUpgradeTips1:cc.Node;
    ImgUpgradeTips2:cc.Node;
    TextUpgrade:cc.Label;
    ExpProgrses:cc.ProgressBar;
    TextExp:cc.Label;
    ImageCurIcon:cc.Sprite;
    ImgCurLevelName:cc.Sprite;
    NextLevelInfo:cc.Node;
    ImageNextIcon:cc.Sprite;
    ImgNextLevelName:cc.Sprite;
    ImageMineLevelLabel:cc.Node;
    LevelPageCopy:cc.Node;
    LevelPageContainer:cc.Node;
    BtnLeft:cc.Button;
    BtnRight:cc.Button;

    LevelPages:LevelPageView[];

    isMoving:boolean;
    curPageIdx:number;

    curLevelInfo:LevelInfo;
    curLevelExp:number;
    allLevelInfos:LevelInfo[];

    GetNextLevelInfo:()=>LevelInfo;

    public SetViewData(curLevelInfo, curExp, allLevelInfos)
    {
        this.curLevelInfo = curLevelInfo;
        this.curLevelExp = curExp;
        this.allLevelInfos = allLevelInfos;
    }

    public OnAwake()
    {
        this.NodeUpgradeTips = this.FindTransform("NodeUpgradeTips");
        this.ImgUpgradeTips1 = this.FindTransform("ImgUpgradeTips1");
        this.ImgUpgradeTips2 = this.FindTransform("ImgUpgradeTips2");
        this.TextUpgrade = this.FindTransform("TextUpgrade").getComponent(cc.Label);
        this.ExpProgrses = this.FindTransform("ExpProgrses").getComponent(cc.ProgressBar);
        this.TextExp = this.FindTransform("TextExp").getComponent(cc.Label);
        this.ImageCurIcon = this.FindTransform("ImageCurIcon").getComponent(cc.Sprite);
        this.ImgCurLevelName = this.FindTransform("ImgCurLevelName").getComponent(cc.Sprite);
        this.NextLevelInfo = this.FindTransform("NextLevelInfo");
        this.ImageNextIcon = this.FindTransform("ImageNextIcon").getComponent(cc.Sprite);
        this.ImgNextLevelName = this.FindTransform("ImgNextLevelName").getComponent(cc.Sprite);
        this.ImageMineLevelLabel = this.FindTransform("ImageMineLevelLabel");
        this.LevelPageCopy = this.FindTransform("LevelPageCopy");
        this.LevelPageContainer = this.FindTransform("LevelPageContainer");
        this.LevelPageContainer.setContentSize(PageWidth*6, PageHeight);

        this.LevelPages = [];
        for (let i = 1; i <= 6; i++)
        {
            let page = cc.instantiate(this.LevelPageCopy);
            page.parent = this.LevelPageContainer;
            page.active = true;
            this.LevelPages.push(LevelPageView.Create(page));
        }

        this.BtnLeft = this.FindTransform("BtnLeft").getComponent(cc.Button);
        this.BtnRight = this.FindTransform("BtnRight").getComponent(cc.Button);
        Util.SetClickAction(this.BtnLeft, ()=>{ this.OnBtnLeftClicked(); });
        Util.SetClickAction(this.BtnRight, ()=>{ this.OnBtnRightClicked(); });
    }

    public OnShowView()
    {
        this.isMoving = false;
        this.curPageIdx = 1;

        let nextLevelInfo = this.GetNextLevelInfo();
        let isMax = this.curLevelInfo.level >= this.allLevelInfos[this.allLevelInfos.length-1].level;
        this.NodeUpgradeTips.active = !isMax;
        this.NextLevelInfo.active = !isMax;

        if (!isMax)
        {
            let updateValue = this.curLevelInfo.areaMax - this.curLevelExp;
            this.TextUpgrade.string = Util.formatGoldText(updateValue, false);
        }

        this.ExpProgrses.progress = this.curLevelExp/this.curLevelInfo.areaMax;
        this.TextExp.string = Util.formatGoldText(this.curLevelExp, false) + "/" + Util.formatGoldText(this.curLevelInfo.areaMax, false);

        NodeUtil.SetSpriteFrame(this.ImageCurIcon, Res.Atlas.Promoter, "promoter_icon_"+this.curLevelInfo.level);
        NodeUtil.SetSpriteFrame(this.ImgCurLevelName, Res.Atlas.Promoter, Level2Icon[this.curLevelInfo.level]);

        if (nextLevelInfo != null)
        {
            NodeUtil.SetSpriteFrame(this.ImageNextIcon, Res.Atlas.Promoter, "promoter_icon_"+nextLevelInfo.level);
            NodeUtil.SetSpriteFrame(this.ImgNextLevelName, Res.Atlas.Promoter, Level2Icon[nextLevelInfo.level]);
        }

        for (let idx = 1; idx <= this.allLevelInfos.length; idx++)
        {
            let levelInfo = this.allLevelInfos[idx-1];
            if (levelInfo.level == this.curLevelInfo.level)
            {
                this.curPageIdx = idx;
            }
            this.LevelPages[idx-1].Update(levelInfo);
        }
        
       // this.LevelPageContainer.position = new cc.Vec2(-PageWidth*(2*this.curPageIdx-1)/2, 0);
        this.ImageMineLevelLabel.active = true;

        this.BtnLeft.node.active = this.curPageIdx > 1;
        this.BtnRight.node.active = this.curPageIdx < 6;
    }

    public OnBtnLeftClicked()
    {
        if (this.curPageIdx <= 1)
            return;

        if (this.isMoving)
            return;

        this.isMoving = true;

        this.LevelPages[this.curPageIdx-1].ShowSpineLevel(false);
        this.curPageIdx--;
        this.BtnLeft.node.active = this.curPageIdx > 1;
        this.BtnRight.node.active = this.curPageIdx < 6;

        let isMine = this.allLevelInfos[this.curPageIdx-1].level == this.curLevelInfo.level;
        this.ImageMineLevelLabel.active = isMine;

        this.MovePage(false);
    }

    public OnBtnRightClicked()
    {
        if (this.curPageIdx >= 6)
            return;

        if (this.isMoving)
            return;

        this.isMoving = true;

        this.LevelPages[this.curPageIdx-1].ShowSpineLevel(false);
        this.curPageIdx++;
        this.BtnLeft.node.active = this.curPageIdx > 1;
        this.BtnRight.node.active = this.curPageIdx < 6;

        let isMine = this.allLevelInfos[this.curPageIdx-1].level == this.curLevelInfo.level;
        this.ImageMineLevelLabel.active = isMine;

        this.MovePage(true);
    }

    public MovePage(isRight:boolean)
    {
        XTween.DoMove(this.LevelPageContainer, null, new cc.Vec2(-PageWidth*(2*this.curPageIdx-1)/2, 0), 0.2, 1, false, XTweenCurvType.EaseIn, ()=>{
            this.isMoving = false;
            this.LevelPages[this.curPageIdx-1].ShowSpineLevel(true);
        }).Play();
    }
}

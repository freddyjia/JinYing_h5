import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import {IHistoryCardInfo, HistoryCardInfo, RBCardType } from "../../Protos/RedBlackBattle";
import ViewGameRecord from "../../Modules/Views/ViewGameRecord";
import NodeUtil from "../../Tools/NodeUtil";
import SpriteUtil from "../../Tools/SpriteUtil";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";
export default class ViewRedVsBlackRecord extends ViewGameRecord
{
    private WinCount1:cc.Label;
    private WinCount2:cc.Label;
    private WinCount3:cc.Label;
    private WinCount4:cc.Label;
    private cardTypeList:Array<cc.Node> = [];
    private RecordDataPanel:cc.Node;
    public OnAwake()
    {
        super.OnAwake();
        this.RecordDataPanel = this.FindTransform("RecordDataPanel");

        for (let index = 0; index < this.RecordDataPanel.childrenCount; index++) {
            const element = this.RecordDataPanel.children[index];
            this.cardTypeList.push(element);
        }
        this.cardTypeList.reverse();
        this.WinCount1 = this.FindTransform("WinCount1").getComponent((cc.Label));
        this.WinCount2 = this.FindTransform("WinCount2").getComponent((cc.Label));
        this.WinCount3 = this.FindTransform("WinCount3").getComponent((cc.Label));
        this.WinCount4 = this.FindTransform("WinCount4").getComponent((cc.Label));
    }

    public SetPlayCount(leftCount:number, rightCount:number, peaceCount:number, playCount:number)
    {
        this.WinCount1.string = leftCount.toString();
        this.WinCount2.string = rightCount.toString();
        this.WinCount3.string = peaceCount.toString();
        this.WinCount4.string = playCount.toString();
    }

    //显示牌类型list。
    public ShowHHCardTypeList(cardInfoList:Array<IHistoryCardInfo>)
    {
 
        for (let index = 0; index < this.RecordDataPanel.childrenCount; index++) {
            const element = this.RecordDataPanel.children[index];
            element.active = false;
            for (let k = 0; k < element.childrenCount; k++) {
                const node = element.children[k];
                node.active = false;
            }
        }

        for (let index = cardInfoList.length -1; index >=0 ; index--) {
            const DATA = cardInfoList[index];

            for (let k = 0; k < this.cardTypeList[index].childrenCount; k++) {
                const node = this.cardTypeList[index].children[k];
                node.active = true;
            }
            this.cardTypeList[index].active = true;

            this.RefreshCardType(NodeUtil.SearchSprite( this.cardTypeList[index],"lucktxt")    ,DATA.cardType);
            NodeUtil.SearchChild(this.cardTypeList[index],"new").active =  (index == 0);

            let atlasPath = "SubGames/RvB/textures/TexureAtlas/RedVsBlackatlas";

            if( !DATA.luckyHit)
            {
                SpriteUtil.LoadSpriteByAtlas(NodeUtil.SearchSprite( this.cardTypeList[index],"bg"),atlasPath,"danzhangdi");
            }
            else
            {
                SpriteUtil.LoadSpriteByAtlas(NodeUtil.SearchSprite( this.cardTypeList[index],"bg"),atlasPath,"HHDZ_ZS_qiandi");
            }
        }
    }

    //
    public RefreshCardType(sprite:cc.Sprite,cardType:RBCardType)
    {
 
        if(sprite == null)
        {
            if(Global.showLog == true)
                cc.error("sprite empty");
            return;
        }

        let atlasPath = "SubGames/RvB/textures/TexureAtlas/RedVsBlackatlas";
        switch(cardType){
            case RBCardType.BaoziType:
            SpriteUtil.LoadSpriteByAtlas(sprite,atlasPath,"HHDZ_ZS_baozi");
 
            break;
            case RBCardType.JinhuaType:
            SpriteUtil.LoadSpriteByAtlas(sprite,atlasPath,"HHDZ_ZS_jinhua");
 
            break;
            case RBCardType.JinshunType:
            SpriteUtil.LoadSpriteByAtlas(sprite,atlasPath,"HHDZ_ZS_shunjin");
 
            break;
            case RBCardType.PairType:
            SpriteUtil.LoadSpriteByAtlas(sprite,atlasPath,"HHDZ_ZS_duizi");
 
            break;
            case RBCardType.ShunziType:
            SpriteUtil.LoadSpriteByAtlas(sprite,atlasPath,"HHDZ_ZS_shunzi");
 
            break;
            case RBCardType.SingleType:
            SpriteUtil.LoadSpriteByAtlas(sprite,atlasPath,"HHDZ_ZS_danzhang");
            break;
        }
    }
}
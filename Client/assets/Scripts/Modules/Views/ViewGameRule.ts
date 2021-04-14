import View from "../../MVCFramework/View";
import ListView, { ListViewScrollStyle, Cell } from "../../Components/ListView";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import { GameRuleConfig } from "../GameRuleConfig";
import TimerManager from "../../Components/TimerManager";
import XTween from "../../Tools/XTween/XTween";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewGameRule extends View{
    VScrollRect:cc.Node;
    private listView:ListView;
    private contentTf:cc.Node;
    private itemTemplate:cc.Node;

    public OnAwake()
    {
        this.VScrollRect = this.FindTransform("Scroll View");
        this.contentTf =  this.FindTransform("Content");
        this.itemTemplate=this.FindTransform("ItemTemplate0");     

    }

    public SetRuleContent(gameType,subType){
        let data;
        if(gameType==GameTypeMgr.Config.Bull){
            data=GameRuleConfig.Config.Bull;
        }
        else if(gameType==GameTypeMgr.Config.DouDiZhu){
            data=GameRuleConfig.Config.DouDiZhu;
        }
        else if(gameType==GameTypeMgr.Config.RedBlack){
            data=GameRuleConfig.Config.RedBlack;
        }
        else if(gameType==GameTypeMgr.Config.LongHuDou){
            data=GameRuleConfig.Config.LongHu;
        }
        else if(gameType==GameTypeMgr.Config.Qiangzhuangniuniu){
            data=GameRuleConfig.Config.QNiuNiu;
        }
        else if(gameType==GameTypeMgr.Config.BirdBeast){
            data=GameRuleConfig.Config.BirdBeast;
        }
        else if(gameType==GameTypeMgr.Config.YaoYaoLe){
            if(subType==1){
                data=GameRuleConfig.Config.YaoYaoLe;
            }
            else{
                data=GameRuleConfig.Config.ChaoJiKuaiSan;
            }  
        }
        else if(gameType==GameTypeMgr.Config.ZJH){
            data=GameRuleConfig.Config.ZhaJinHua;
        }
        else if(gameType==GameTypeMgr.Config.PaoDeKuai){
            data=GameRuleConfig.Config.PaoDeKuai;
        }
        let allItem=[];
        let childCount=this.contentTf.childrenCount;
        for(let i=0;i<childCount;i++){
            let childItem=this.contentTf.getChildByName("ItemTemplate"+i);
            // cc.log(childItem);
            childItem.active=false;
            let tab=this.GetItemTable(childItem);
            allItem.push({item:childItem,itemTable:tab})
        }
        for(let i=0;i<data.length;i++){
            let item;
            let itemTable;
            if(allItem[i]==null){
                let itemOb=cc.instantiate(this.itemTemplate);
                itemOb.name="ItemTemplate"+(i);
                this.contentTf.addChild(itemOb);
                item=itemOb;                
                itemTable=this.GetItemTable(item);
                allItem.push({item:item,itemTable:itemTable});
            }
            else{
                item=allItem[i].item;
                itemTable=allItem[i].itemTable;
            }
            item.active=true;
            let titleImageName=this.GetTitleImageName(data[i].titleType);
            itemTable.titleImage.string = titleImageName;
            //SpriteUtil.LoadSpriteByAtlas(itemTable.titleImage,Res.Atlas.Commons,titleImageName);
            itemTable.ruleText.string=data[i].content;
        }
        let totalHeight=0;
        let y=0;
        this.contentTf.opacity = 1;
        TimerManager.GetInstance().CallActionDelay(()=>{
            for(let m=0;m<allItem.length;m++){
                if(allItem[m].item.active==true){
                    allItem[m].item.position=new cc.Vec2(-315,-totalHeight);
                    // cc.log(allItem[m].item.position)
                    let itemHeight=allItem[m].item.getChildByName("RuleText").height+70;
                    totalHeight=totalHeight+itemHeight;  
                    // y+=allItem[m].item.getChildByName("RuleText").height+50;                                
                }
            }
            
            this.contentTf.height=totalHeight;//y+50;

            XTween.DoValue(this.contentTf,(value)=>{
                this.contentTf.opacity = value * 255;
            },0,1,0.3).Play();
        },0.5,null,0);  
    }

    public GetItemTable(item:cc.Node){
        let image=item.getChildByName("Image").getChildByName("TextTitle").getComponent(cc.Label);
        let text=item.getChildByName("RuleText").getComponent(cc.Label);
        let rectTrans=item;
        return {titleImage : image,ruleText : text,rectTf : rectTrans};
    }
    
    public GetTitleImageName(imageType){
        let name="";
        if(imageType==GameRuleConfig.TitleType.PaiXing){
            //name="GYZY_GZ_paixin"
            name="牌型"
        }
        else if(imageType==GameRuleConfig.TitleType.PaiXingBiJiao){
            //name = "GYZY_GZ_paixinbijiao"
            name = "牌型比较"
        }
        else if(imageType==GameRuleConfig.TitleType.JiBenGuiZe){
            //name = "GYZY_GZ_jibenguize"
            name = "基本规则"
        }
        else if(imageType==GameRuleConfig.TitleType.PeiLv){
            //name = "GYZY_GZ_peilv"
            name = "赔率"
        }
        else if(imageType==GameRuleConfig.TitleType.FaPai){
            //name = "GYZY_GZ_fapai"
            name = "发牌"
        }
        else if(imageType==GameRuleConfig.TitleType.JiaoDiZhu){
            //name = "GYZY_GZ_jiaodizhu"
            name = "叫地主"
        }
        else if(imageType==GameRuleConfig.TitleType.QiangDiZhu){
            //name = "GYZY_GZ_qiangdizhu"
            name = "抢地主"
        }
        else if(imageType==GameRuleConfig.TitleType.ChuPai){
            //name = "GYZY_GZ_chupai"
            name = "出牌"
        }
        else if(imageType==GameRuleConfig.TitleType.TouZhuQuYu){
            //name = "GYZY_GZ_touzhuquyu"
            name = "投注区域"
        }
        else if(imageType==GameRuleConfig.TitleType.ZuChengShuoMing){
            //name = "GYZY_GZ_zuchengshuoming"
            name = "组成说明"
        }
        else if(imageType==GameRuleConfig.TitleType.KaiJiang){
            //name = "GYZY_GZ_kaijiang"
            name = "开奖"
        }
        else if(imageType==GameRuleConfig.TitleType.YaoTou){
            //name = "GYZY_GZ_yaosha"
            name = "摇骰"
        }
        return name;

    }   
}

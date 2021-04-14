import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import { HistoryCardInfo } from "../../Protos/LongHuDou";
import ViewGameRecord from "../../Modules/Views/ViewGameRecord";
import NodeUtil from "../../Tools/NodeUtil";
import ccC from "../../Tools/ccC";

export default class ViewDragonVsTigerRecord extends ViewGameRecord
{
    private WinCount1:cc.Label;
    private WinCount2:cc.Label;
    private WinCount3:cc.Label;
    private WinCount4:cc.Label;
    private RecordDataPanel:cc.Node;
    public OnAwake()
    {
        super.OnAwake();
        this.RecordDataPanel = this.FindTransform("RecordDataPanel");
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

    public ShowLHRecordList(recordArray:Array<HistoryCardInfo>)
    {
        Util.PerformWithDelay(0.8,()=>{
            for (let index = 0; index <  this.RecordDataPanel.childrenCount; index++) {
                const element = this.RecordDataPanel.children[index];
                element.active = false;
            }
            for (let index = 0; index < recordArray.length; index++) {
                const data = recordArray[index];
                let winStatus = 1;
                let Item = Util.GetOrCreateItem(this.RecordDataPanel,index);
                for (let ii = 0; ii < Item.childrenCount; ii++) {
                    const element = Item.children[ii];
                    element.active = false;
                }
    
                if(data.longSize>data.huSize)
                {
                    winStatus = 2
                }
                else if(data.longSize == data.huSize)
                {
                    winStatus = 3;
                }
    
                let peace = cc.find("Peace",Item);
                let win = cc.find("Win",Item);
    
                if(winStatus != 3)
                {
                    win.active = true;
                    let LRT:cc.Toggle = cc.find("LongResult",win).getComponent((cc.Toggle));
                    let HRT:cc.Toggle = cc.find("HuResult",win).getComponent((cc.Toggle));
    
                    if(winStatus == 2)
                    {
                        LRT.check();
                        HRT.uncheck();
                    }
                    else
                    {
                        HRT.check();
                        LRT.uncheck();
                    }
                    let longPokerSize = cc.find("LongPokerSize",LRT.node.children[1]).getComponent((cc.Label));
                    let longLosePokerSize = cc.find("LoseSize",LRT.node.children[0]).getComponent((cc.Label));
    
                    let huPokerSize = cc.find("HuPokerSize",HRT.node.children[1]).getComponent((cc.Label));
                    let huLosePokerSize = cc.find("LoseSize",HRT.node.children[0]).getComponent((cc.Label));
                    longPokerSize.string = longLosePokerSize.string = data.longSize +"";
                    huPokerSize.string = huLosePokerSize.string = data.huSize +"";
    
                    peace.active = false;
                    win.active = true;
                }
                else
                { 
                    // cc.error("??????????????????peace");
                    //cc.error(Item);
                    let peacePokerText = NodeUtil.SearchLabel(peace,"PeacePokerSize") ; 
                    let PokerSize =  NodeUtil.SearchLabel(peace,"PokerSize") ;   
    
                    peacePokerText.string = data.longSize +"";
                    PokerSize.string = data.longSize +"";
    
                    peace.active = true;
                    win.active = false;              
                }
            }
        });
        

        // let index  =0;
        // recordArray.forEach((data)=>{
        //     //let index  = recordArray.indexOf(data);
           
        // });
    }
}
import View from "../../MVCFramework/View";
import { BullRoundResult } from "./ModelBull";

export default class ViewBullTrend extends View 
{
    TrendItemDic:{[nodeName:string]:cc.Node} = {};

    public OnAwake()
    {
        for (let i = 1; i <= 10; i++)
        {
            this.TrendItemDic["TrendItem"+i] = this.FindTransform("TrendItem"+i);
        }
    }

    // 更新胜负走势数据显示
    public UpdateResultTrend(trendList:BullRoundResult[][])
    {
        let showTrend = trendList.length > 0;

        for (let i = 1; i <= 10; i++)
        {
            let trendItem = this.TrendItemDic["TrendItem"+i];
            if (i > trendList.length)
            {
                trendItem.active = false;
            }
            else
            {
                trendItem.active = true;

                for (let k = 1; k <= 4; k++)
                {
                    let result = cc.find("Result"+k, trendItem);
                    let winNode = cc.find("Win", result);
                    let loseNode = cc.find("Lose", result);
                    
                    let win = trendList[trendList.length - i][k-1].blnWin;
                    winNode.active = win;
                    loseNode.active = !win;
                }
            }
        }
    }
}

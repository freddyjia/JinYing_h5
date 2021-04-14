import View from "../../MVCFramework/View";
import { BrocastPushText } from "../../Protos/Brocast";
import XTween from "../../Tools/XTween/XTween";
import { XTweenCurvType } from "../../Tools/XTween/Base/XTweenCurv";
import Util from "../../Tools/Util";
import TimerManager from "../../Components/TimerManager";


export default class ViewPaoMaDeng extends View 
{
    private speed = 150;
    private paddingSecs = 1;
    public LabelContent:cc.RichText;
    private Mask:cc.Node;
    private texts:string[] = [];
    private hideTimerID;
    private Content:cc.Node;

    public OnAwake()
    {
        this.LabelContent = this.FindTransform("LabelContent").getComponent(cc.RichText);
        this.Mask = this.FindTransform("Mask");
        this.Content = this.FindTransform("Content");
    }

    public OnShowView()
    {
        
    }

    public OnHideView()
    {
        this.Content.active = true;
    }

    private CheckStart()
    {
        if(this.texts.length == 1)
            this.Play();
    }

    public AddText(data:BrocastPushText)
    {
        TimerManager.GetInstance().DeleteTimer(this.hideTimerID);
        this.texts.push(data.content);
        this.CheckStart();
    }

    public Play()
    {
        let maskWidth = 1000;
        let perStringWidth = 8.5;
        let labelContentWidth = perStringWidth * this.texts[0].length;
        // this.LabelContent.node.x = this.Mask.width / 2;
        this.LabelContent.node.x = maskWidth / 2;
        this.LabelContent.string = this.texts[0];
        // let targetX = - this.Mask.width / 2 - this.LabelContent.node.width - 50;
        let targetX = - maskWidth / 2 - labelContentWidth - 50;
        let distance = -(targetX - maskWidth / 2);
        let duration = distance / this.speed;

        // cc.error("this.Mask.width " + this.Mask.width
        // + " this.LabelContent.string.length " + this.LabelContent.string.length 
        // + " this.LabelContent.node.width " + this.LabelContent.node.width);


        let tween = XTween.DoMove(this.LabelContent.node,this.LabelContent.node.position,new cc.Vec2(targetX,0),duration,1,false,XTweenCurvType.Liner,()=>{
            Util.RemoveArray(this.texts,0);
            if(this.texts.length > 0)
            {
                this.Play();
            }
            else
            {
                this.hideTimerID = TimerManager.GetInstance().CallActionDelay(()=>{this.Hide();},1,null,0,0,true);
            }
        },1);
        tween.SetShouldNotFinishWhenDisable();
        tween.Play();
    }

    public ActivePaoMaDengObj(active)
    {
        this.Content.active = active;
    }

}

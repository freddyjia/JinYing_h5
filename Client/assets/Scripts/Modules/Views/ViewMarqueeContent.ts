import View from "../../MVCFramework/View";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewMarqueeContent extends View
{
    LabelContent:cc.RichText;
    LabelUrl:cc.Label;

    public OnAwake()
    {
        this.LabelContent = this.FindTransform("LabelContent").getComponent(cc.RichText);
        this.LabelUrl = this.FindTransform("LabelUrl").getComponent(cc.Label);
    }

    public UpdateView(content:string, url:string)
    {
        this.LabelContent.string = content;
        this.LabelUrl.string = "唯一官网:http://www.jjdd321.com";
    }
}

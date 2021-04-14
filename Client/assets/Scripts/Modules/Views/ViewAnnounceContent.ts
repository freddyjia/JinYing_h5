import View from "../../MVCFramework/View";
import { AnnounInfo } from "../../Protos/PlayerRole";

export default class ViewAnnounceContent extends View 
{
    private TextTitle:cc.Label;
    private TextContent:cc.Label;

    public OnAwake()
    {
        this.TextTitle = this.FindTransform("TextTitle").getComponent(cc.Label);
        this.TextContent = this.FindTransform("TextContent").getComponent(cc.Label);
    }

    public UpdateContent(info:AnnounInfo)
    {
        let str = info.content.replace("\\n","\n");
        this.TextContent.string = str;
        this.TextTitle.string = info.title;
    }
}

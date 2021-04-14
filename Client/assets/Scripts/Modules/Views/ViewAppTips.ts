import View from "../../MVCFramework/View";

export enum AppTipsType
{
    GoToDownload = 1,   //前往官网下载
    CopyUrl = 2,        //复制官网
}

export default class ViewAppTips extends View 
{
    NodeDownload:cc.Node;
    NodeCopy:cc.Node;

    public OnAwake()
    {
        this.NodeDownload = this.FindTransform("NodeDownload");
        this.NodeCopy = this.FindTransform("NodeCopy");
    }

    public UpdateView(tipsType:Number)
    {
        if (tipsType == AppTipsType.GoToDownload)
        {
            this.NodeDownload.active = true;
            this.NodeCopy.active = false;
        }
        else
        {
            this.NodeDownload.active = false;
            this.NodeCopy.active = true;
        }
    }
}

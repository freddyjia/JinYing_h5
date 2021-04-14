import View from "../../MVCFramework/View";

export default class ViewGuide extends View 
{
    public static GuideFirstGameItem;
    public static GuideChangeButton;
    NodeRoot:cc.Node;
    ChangePanel:cc.Node;
    FingerPanel:cc.Node;
    FirstGame:cc.Button;

    public isShowing:boolean = false;

    public OnAwake()
    {
        this.NodeRoot = this.node;
        this.ChangePanel = this.FindTransform("ChangePanel");
        this.FingerPanel = this.FindTransform("FingerPanel");
        this.FirstGame = this.FindTransform("FirstGame").getComponent(cc.Button);
        this.Begin();
    }

    public Begin(){
        this.ChangePanel.active = true;
        this.FingerPanel.active = false;
    }

    public Change(){
        this.ChangePanel.active = false;
        this.FingerPanel.active = true;
    }

    public SetBottomBtnPos(){
        if(ViewGuide.GuideChangeButton != null){
            var targetPosInWorld = ViewGuide.GuideChangeButton.convertToWorldSpaceAR(cc.Vec2.ZERO);
            let x = targetPosInWorld.x - cc.winSize.width / 2;
            let y = targetPosInWorld.y - cc.winSize.height / 2;
            this.ChangePanel.setPosition(new cc.Vec2(x,y));
        }
    }

    public SetSmallGameAndFingerPos(){       
        if(ViewGuide.GuideFirstGameItem != null){
            var targetPosInWorld = ViewGuide.GuideFirstGameItem.convertToWorldSpaceAR(cc.Vec2.ZERO);
            let x = targetPosInWorld.x - cc.winSize.width / 2;
            let y = targetPosInWorld.y - cc.winSize.height / 2;

            //let x = targetPosInWorld.x - this.NodeRoot.getContentSize().width / 2;
            //let y = targetPosInWorld.y - this.NodeRoot.getContentSize().height / 2;
            this.FingerPanel.setPosition( new cc.Vec2(x,y));
        }
    }

    public SetScreenSize(){
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Mask").setContentSize(cc.winSize);
    }

    public OnShowView()
    {
        this.isShowing = true;
    }

    public OnHideView()
    {
        this.isShowing = false;
    }

    public OnDestroy()
    {
    }
}

import View from "../../MVCFramework/View";
import Res from "../../Global/Res";
import AudioManager from "../../Manager/AudioManager";

export default class ViewNoviceGold extends View 
{
    showGoldPanel:cc.Node;
    finishPanel:cc.Node;
    btnOpen:cc.Node;
    imgUnOpen:cc.Node;
    imgOpened:cc.Node;
    openAni:cc.Node;
    NoviceMoney:cc.Node;

    playBtnAniFinish:boolean;
    playSpineAniFinish:boolean;

    public isShowing:boolean = false;

    action:cc.Action;
    public OnAwake()
    {
        this.showGoldPanel = this.FindTransform("UnOpen");
        this.finishPanel = this.FindTransform("Open");
        this.btnOpen = this.FindTransform("btnOpen");
        this.imgUnOpen = this.FindTransform("imgUnOpen");
        this.imgOpened = this.FindTransform("imgOpened");
        this.openAni = this.FindTransform("openAni");
        this.NoviceMoney = this.FindTransform("NoviceMoney");

        this.playBtnAniFinish = false;
        this.playSpineAniFinish = false;
    }

    public StartOpenAni(){
        this.PlayAnimation();
        this.btnOpen.getComponent(cc.Button).interactable = false;
        this.btnOpen.runAction(
                cc.sequence(
                    cc.scaleBy(0.35, 0.1,1),
                    cc.flipX(true),cc.scaleBy(0.225,10,1),cc.scaleBy(0.175,0.1,1),
                    cc.flipX(false),cc.scaleBy(0.15,10,1),cc.scaleBy(0.125, 0.1,1),
                    cc.callFunc(()=>{AudioManager.GetInstance().SoundPlay(Res.Audios.Novice_reward);}),
                    cc.flipX(true),cc.scaleBy(0.1,10,1),cc.scaleBy(0.1,0.1,1),
                    cc.flipX(false),cc.scaleBy(0.09,10,1),cc.scaleBy(0.09, 0.1,1),
                    cc.flipX(true),cc.scaleBy(0.08,10,1),cc.scaleBy(0.08,0.1,1),
                    cc.flipX(false),cc.scaleBy(0.07,10,1),cc.scaleBy(0.07, 0.1,1),
                    cc.flipX(true),cc.scaleBy(0.06,10,1),cc.scaleBy(0.06,0.1,1),
                    cc.callFunc(()=>{this.playBtnAniFinish = true;}),
//                    cc.log("金币转完了",new Date().getTime());
                    cc.flipX(false),cc.scaleBy(0.05,10,1),cc.scaleBy(0.05, 0.1,1),
                    cc.flipX(true),cc.scaleBy(0.05,10,1),cc.scaleBy(0.05,0.1,1),
                    cc.flipX(false),cc.scaleBy(0.05,10,1),cc.scaleBy(0.05,0.1,1),
                    cc.flipX(true),cc.scaleBy(0.05,10,1),cc.scaleBy(0.05,0.1,1),
                    cc.flipX(false),cc.scaleBy(0.05,10,1),cc.scaleBy(0.05,0.1,1)
                )
        )
    }

    public SuccessGetNoviceMoney(){
        this.action = cc.repeatForever(
            cc.sequence(
                cc.delayTime(0.05),
                cc.callFunc(()=>{
                    if(this.playBtnAniFinish && this.playSpineAniFinish){
                        this.btnOpen.stopAllActions();
                        this.btnOpen.active = false;
                        this.node.stopAction(this.action);
                        this.SetFlipPanel();
                    }
                })
            )
        );

        this.node.runAction(this.action);
    }

    private PlayAnimation()
    {
        this.imgUnOpen.active = false;
        var spine:sp.Skeleton = this.openAni.getComponent('sp.Skeleton');
        this.openAni.active = true;
        spine.setAnimation(0, "1", true);
        this.openAni.runAction(cc.sequence(cc.delayTime(2.35),cc.callFunc(()=>{
            this.playSpineAniFinish = true;this.imgOpened.active = true;})));
    }

    SetFlipPanel(){
        this.showGoldPanel.runAction(
            cc.sequence(
                cc.scaleBy(0.15,0,1),
                cc.callFunc(()=>{
                    this.showGoldPanel.active = false;
                })
            )
        )
        this.finishPanel.active = true;
        this.finishPanel.setScale(0,0);
        this.finishPanel.runAction(
            cc.sequence(
                cc.delayTime(0.15),
                cc.callFunc(()=>{this.finishPanel.setScale(1,1);}),
                cc.flipX(true),cc.scaleBy(0.05,0.1,1),cc.flipX(false),cc.scaleBy(0.1,10,1)            
            )
        )
    }

    public SetScreenSize(){
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Mask").setContentSize(cc.winSize);
    }
    
    public SetUnClicked(name:string){
        let node = this.SeekNode(this.node,name);
        if(node)node.getComponent(cc.Button).interactable = false;
    }

    public SetMoneyNumber(num:number){
        this.NoviceMoney.getComponent(cc.Label).string = "￥"+ num + ".00"; 
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

    SeekNode(node:cc.Node, tar:string){
        for(var i = 0; i < node.children.length; i++){
            if(node.children[i].name == tar){
                return node.children[i];
            }else{
                this.SeekNode(node.children[i],tar);
            }
        }        
        return null;
    }
}

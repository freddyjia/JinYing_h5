import Res from "../Global/Res";
import AudioManager from "../Manager/AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ButtonListener extends cc.Component 
{
    private clickEventHandler:cc.Component.EventHandler;
    private button:cc.Button;
    private onclickCallback:(button:cc.Button,data:any)=>void;
    private audioName:string;

    public Init()
    {
        this.clickEventHandler = new cc.Component.EventHandler();
        this.clickEventHandler.target = this.node;
        this.clickEventHandler.component = "ButtonListener";
        this.clickEventHandler.handler = "OnClickCallback";
        
        this.button = this.node.getComponent(cc.Button);
        this.button.clickEvents = [];
        this.button.clickEvents.push(this.clickEventHandler);
    }

    public SetData(data:string)
    {
        this.clickEventHandler.customEventData = data;
    }

    public SetAudioName(audioName:string)
    {
    
        this.audioName = audioName;
    }

    public SetOnClickCallback(callback:(button:cc.Button,data:any)=>void)
    {
        this.onclickCallback = callback;
    }

    onLoad() 
    {
        
    }

    OnClickCallback(event:TouchEvent,customEventData:string)
    {
        if(this.onclickCallback != null)
        {
            this.onclickCallback(this.button,customEventData);

            if(this.audioName == null)
            {
                this.audioName = Res.Audios.SoundClick;
            }
            AudioManager.GetInstance().SoundPlay(this.audioName);
        }
    }
}

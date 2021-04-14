const {ccclass, property} = cc._decorator;

@ccclass
export default class ResizeComponent extends cc.Component {

    private Resize()
    {
        let canvas = cc.Canvas.instance;
        canvas.fitWidth = true;
        canvas.fitHeight = true;
        let frameWidth = cc.view.getFrameSize().width;
        let frameHeight = cc.view.getFrameSize().height;
        if(frameWidth / frameHeight > 16/9)
        {
            canvas.designResolution = new cc.Size(frameWidth / (frameHeight / 720),720);
        }
        else
        {
            canvas.designResolution = new cc.Size(1280,frameHeight/frameWidth * 1280);
        }
    }

    onLoad () {
        this.Resize();
        
        if(cc.sys.os != cc.sys.OS_ANDROID)
        {
            window.addEventListener("resize",()=>{
                this.Resize();
            });
        }
        
    }

}

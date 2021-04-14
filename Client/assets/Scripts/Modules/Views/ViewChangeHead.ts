import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import Global from "../../Global/Global";
import Res from "../../Global/Res";

export default class ViewChangeHead extends View 
{
    private BtnHeadImgSelect:cc.Button;
    private BtnHeadImgNotSelect:cc.Button;
    private BtnHeadFrameSelect:cc.Button;
    private BtnHeadFrameNotSelect:cc.Button;

    private currentState = -1;//0 是头像 1是头像框

    private BtnHeadImg:cc.Button;
    private BtnHeadFrame:cc.Button;
    private LayoutHeadImgs:cc.Node;
    private LayoutHeadFrames:cc.Node;

    public ImgHead:cc.Sprite;
    public ImgHeadBox:cc.Sprite;

    private HeadImgs:cc.Node;
    private HeadFrames:cc.Node;

    public currentHeadImgName;
    public currentHeadFrameName;

    private dicBtnHeadImg:{[name:string]:cc.Node} = {};
    private dicBtnHeadFrame:{[name:string]:cc.Node} = {};

    public OnAwake()
    {
        this.BtnHeadImgSelect = this.FindTransform("BtnHeadImgSelect").getComponent(cc.Button);
        this.BtnHeadImgNotSelect = this.FindTransform("BtnHeadImgNotSelect").getComponent(cc.Button);
        this.BtnHeadFrameSelect = this.FindTransform("BtnHeadFrameSelect").getComponent(cc.Button);
        this.BtnHeadFrameNotSelect = this.FindTransform("BtnHeadFrameNotSelect").getComponent(cc.Button);

        this.BtnHeadImg = this.FindTransform("BtnHeadImg").getComponent(cc.Button);
        this.BtnHeadFrame = this.FindTransform("BtnHeadFrame").getComponent(cc.Button);

        this.LayoutHeadImgs = this.FindTransform("LayoutHeadImgs");
        this.LayoutHeadFrames = this.FindTransform("LayoutHeadFrames");

        this.ImgHead = this.FindTransform("ImgHead").getComponent(cc.Sprite);
        this.ImgHeadBox = this.FindTransform("ImgHeadBox").getComponent(cc.Sprite);

        this.HeadImgs = this.FindTransform("HeadImgs");
        this.HeadFrames = this.FindTransform("HeadFrames");
        
        Util.SetClickAction(this.BtnHeadImgSelect,(button,data)=>{
            this.RefreshState(0);
        });

        Util.SetClickAction(this.BtnHeadImgNotSelect,(button,data)=>{
            this.RefreshState(0);
        });

        Util.SetClickAction(this.BtnHeadFrameSelect,(button,data)=>{
            this.RefreshState(1);
        });

        Util.SetClickAction(this.BtnHeadFrameNotSelect,(button,data)=>{
            this.RefreshState(1);
        });

        for(let i = 0;i<9;i++)
        {
            let node = cc.instantiate(this.BtnHeadImg.node);
            node.active = true;
            node.parent = this.LayoutHeadImgs;

            Util.SetHeadNetIcon(cc.find("SpriteImg",node).getComponent(cc.Sprite),Res.HeadImgSprite[i]);

            this.dicBtnHeadImg[Res.HeadImgSprite[i]] = node;

            Util.SetClickAction(node.getComponent(cc.Button),(button,data)=>{
                this.RefreshSelectHeadImg(Res.HeadImgSprite[i]);
            },null);
        }

        /*
        for(let i = 0;i<9;i++)
        {
            let node = cc.instantiate(this.BtnHeadFrame.node);
            node.active = true;
            node.parent = this.LayoutHeadFrames;
            // ccC.loadRes("MainGame/textures/Head/" + Res.HeadBoxSprite[i],cc.SpriteFrame,(err: Error, resource: any) => {
            //     cc.find("SpriteImg",node).getComponent(cc.Sprite).spriteFrame = resource;
            //     if(Global.PlayerInfo.HeadBoxIdList.length < i + 1)
            //     {
            //         cc.find("Lock",node).active = true;
            //     }
            // });

            Util.SetHeadBox(cc.find("SpriteImg",node).getComponent(cc.Sprite),Res.HeadBoxSprite[i]);

            if(Global.PlayerInfo.HeadBoxIdList.length < i + 1)
            {
                cc.find("Lock",node).active = true;
            }        

            // cc.error("set HeadBoxSprite " + Res.HeadBoxSprite[i]);
            this.dicBtnHeadFrame[Res.HeadBoxSprite[i]] = node;

            Util.SetClickAction(node.getComponent(cc.Button),(button,data)=>{
                if(Global.PlayerInfo.HeadBoxIdList.length < i + 1)
                {
                    return;
                }
                this.RefreshSelectHeadFrame(Res.HeadBoxSprite[i]);
            },null);
        }
        */

        this.RefreshState(0);
    }

    private RefreshSelectHeadImg(select)
    {
        // cc.error("RefreshSelectHeadImg  " + select);

        let node = this.dicBtnHeadImg[this.currentHeadImgName];
        // if(node == null)
        // {
        //     cc.error("RefreshSelectHeadImg node == null " + this.currentHeadImgName);
        // }
        cc.find("BGImgSelect",node).active = false;
        cc.find("BGImgNotSelect",node).active = true;

        this.currentHeadImgName = select;

        node = this.dicBtnHeadImg[this.currentHeadImgName];
        cc.find("BGImgSelect",node).active = true;
        cc.find("BGImgNotSelect",node).active = false;

        //Util.SetHeadNetIcon(this.ImgHead,this.currentHeadImgName);
                
    }

    private RefreshSelectHeadFrame(select)
    {
        return;
        let node = this.dicBtnHeadFrame[this.currentHeadFrameName];
        // if(node == null)
        // {
        //     cc.error("RefreshSelectHeadFrame node == null " + this.currentHeadFrameName);
        // }
        cc.find("IsOn",node).active = false;

        this.currentHeadFrameName = select == "default" ? "GYZY_TXK":select;

        node = this.dicBtnHeadFrame[this.currentHeadFrameName];
        cc.find("IsOn",node).active = true;

        Util.SetHeadBox(this.ImgHeadBox,this.currentHeadFrameName);
    }

    private RefreshState(state)
    {
        if(state == this.currentState)
            return;
        this.currentState = state;
        if(state == 0)
        {
            this.BtnHeadImgSelect.node.active = true;
            this.BtnHeadImgNotSelect.node.active = false;
            this.BtnHeadFrameSelect.node.active = false;
            this.BtnHeadFrameNotSelect.node.active = true;

            this.HeadImgs.active = true;
            this.HeadFrames.active = false;
        }
        else
        {
            this.BtnHeadImgSelect.node.active = false;
            this.BtnHeadImgNotSelect.node.active = true;
            this.BtnHeadFrameSelect.node.active = true;
            this.BtnHeadFrameNotSelect.node.active = false;

            this.HeadImgs.active = false;
            this.HeadFrames.active = true;
        }
    }

    public OnShowView()
    {
        this.RefreshState(0);

        this.currentHeadImgName = Global.PlayerInfo.headImageUrl;
        this.currentHeadFrameName = Global.PlayerInfo.headboxImage == "default" ? "GYZY_TXK":Global.PlayerInfo.headboxImage;

        this.RefreshSelectHeadImg(this.currentHeadImgName);
        this.RefreshSelectHeadFrame(this.currentHeadFrameName);
    }

    public OnHideView()
    {
        // this.hideCallback();
    }
}

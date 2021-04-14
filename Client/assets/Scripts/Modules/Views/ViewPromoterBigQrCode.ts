import View from "../../MVCFramework/View";
import QRCodeComponent from "../../Components/QRCodeComponent";
import Global from "../../Global/Global";
import XTween from "../../Tools/XTween/XTween";
import { XTweenCurvType } from "../../Tools/XTween/Base/XTweenCurv";
import { XTweenerGroupAddMode } from "../../Tools/XTween/Base/XTweenerGroup";
import Util from "../../Tools/Util";

export default class ViewPromoterBigQrCode extends View 
{
    ImageBigQrCode:QRCodeComponent;

    newWebAddress:string;

    public SetViewData(newWebAddress)
    {
        this.newWebAddress = newWebAddress;
    }

    public OnAwake()
    {
        this.ImageBigQrCode = this.FindTransform("ImageBigQrCode").getComponent(QRCodeComponent);
    }

    public OnShowView()
    {
        let date = new Date();
        let curTime = Math.floor(date.getTime()/1000);
        let newWebAddress = this.newWebAddress;
        newWebAddress = newWebAddress + "?t=" + curTime + "&playerId=" + Global.PlayerInfo.playerId;
        this.ImageBigQrCode.Gen(newWebAddress);

        /*
        let window = this.FindTransform("Window");
        let group = XTween.CreateXTweenerGroup();
        let xtScale = XTween.DoScale(window, new cc.Vec2(0.8,0.8), new cc.Vec2(1.1,1.1),0.15,1,false,XTweenCurvType.OutSine);
        group.AddTweener(xtScale, XTweenerGroupAddMode.Queue);

        xtScale = XTween.DoScale(window, new cc.Vec2(1.1,1.1), new cc.Vec2(1, 1), 0.15,1,false,XTweenCurvType.OutSine);
        group.AddTweener(xtScale, XTweenerGroupAddMode.Queue);

        group.Play();
        */
    }
}

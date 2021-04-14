import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class ViewPlayerInfo extends View 
{
    public imgHead:cc.Sprite;
    public imgHeadBox:cc.Sprite;
    public textName:cc.Label;
    public textAccountID:cc.Label;
    public textCurrency:cc.Label;
    public imgVip:cc.Sprite;
    public editBox:cc.EditBox;
    public viewChangeName:cc.Node;
    public textPhoneNumber:cc.Label;
    public phoneNumber:cc.Node;
    public btnChangeName:cc.Node;
    public btnRegister:cc.Node;


    public OnAwake()
    {
        if(Global.showLog == true)
            cc.log("ViewPlayerInfo OnAwake");

        this.imgHead = this.FindTransform("BtnHead").getComponent(cc.Sprite);
        this.imgHeadBox = this.FindTransform("ImgHeadBox").getComponent(cc.Sprite);
        this.textName = this.FindTransform("TextName").getComponent(cc.Label);
        this.textAccountID = this.FindTransform("TextAccountID").getComponent(cc.Label);
        this.textCurrency = this.FindTransform("CurrencyNum").getComponent(cc.Label);
        this.editBox = this.FindTransform("EditBox").getComponent(cc.EditBox);
        this.viewChangeName = this.FindTransform("ChangeNickName");
        this.textPhoneNumber = this.FindTransform("TextPhoneNumber").getComponent(cc.Label);
        this.phoneNumber = this.FindTransform("PhoneNumber");
        this.btnChangeName = this.FindTransform("BtnChangeName");
        this.btnRegister = this.FindTransform("BtnRegister");

        // this.imgVip = this.FindTransform("CurrencyNum").getComponent(cc.Label);

        Util.AddEditTextChangedEvent(this.editBox, (text:string, editBox, data)=>{
            let m = 0;
            let a = text.split("");
            for (let i = 0; i < a.length; i++)
            {
                if (a[i].charCodeAt(0) < 299) m++;
                else m += 2;
            }

            if (m <= 12)
            {
                this.editBox.string = text;
            }
            else
            {
                this.editBox.string = text.substr(0, text.length-1);
            }
        })
    }


}

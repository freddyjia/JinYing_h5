import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewBindAli extends View 
{
    aliNameInput:cc.EditBox;
    aliAccountInput:cc.EditBox;

    public OnAwake()
    {
        this.aliNameInput = this.FindTransform("aliNameInput").getComponent(cc.EditBox);
        this.aliAccountInput = this.FindTransform("aliAccountInput").getComponent(cc.EditBox);

        Util.AddEditTextChangedEvent(this.aliNameInput, (text:string, box, data)=>{
            this.aliNameInput.string = this.FilterSpecialChar(text);
        })
    }

    public OnShowView()
    {
        this.aliNameInput.string = "";
        this.aliAccountInput.string = "";
    }

    public FilterSpecialChar(text:string)
    {
        let finalStr = text.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
        finalStr = finalStr.replace("！","");
        finalStr = finalStr.replace("【","");
        finalStr = finalStr.replace("】","");
        finalStr = finalStr.replace("、","");
        finalStr = finalStr.replace("；","");
        finalStr = finalStr.replace("‘","");
        finalStr = finalStr.replace("’","");
        finalStr = finalStr.replace("：","");
        finalStr = finalStr.replace("“","");
        finalStr = finalStr.replace("”","");
        finalStr = finalStr.replace("，","");
        finalStr = finalStr.replace("。","");
        finalStr = finalStr.replace("—","");
        finalStr = finalStr.replace("《","");
        finalStr = finalStr.replace("》","");
        finalStr = finalStr.replace("？","");
        finalStr = finalStr.replace("…","");
        finalStr = finalStr.replace("￥","");
        finalStr = finalStr.replace("（","");
        finalStr = finalStr.replace("）","");
        return finalStr;
    }
}
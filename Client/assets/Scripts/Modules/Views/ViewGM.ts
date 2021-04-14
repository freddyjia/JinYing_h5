import View from "../../MVCFramework/View";

export default class ViewGM extends View 
{
    public EditBoxGM:cc.EditBox;
    public OnAwake()
    {
        this.EditBoxGM = this.FindTransform("EditBoxGM").getComponent(cc.EditBox);
    }
    
}

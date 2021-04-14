import View from "../../MVCFramework/View";

export default class ViewPaySuccess extends View 
{
    private PaySuccessEff:cc.Node;
    private PaySuccessEffTmp:cc.Node;
    // private Particle1:cc.ParticleSystem;
    public OnAwake()
    {
        // this.Particle1 = this.FindTransform("Particle1").getComponent(cc.ParticleSystem);
        this.PaySuccessEff = this.FindTransform("PaySuccessEff");
    }
    
    public OnShowView()
    {
        this.PaySuccessEffTmp = cc.instantiate(this.PaySuccessEff);
        this.PaySuccessEffTmp.parent = this.PaySuccessEff.parent;
        this.PaySuccessEffTmp.active = true;
    }

    public OnHideView()
    {
        this.PaySuccessEffTmp.destroy();
    }
}

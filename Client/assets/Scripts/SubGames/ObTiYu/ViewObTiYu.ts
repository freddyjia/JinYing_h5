import View from "../../MVCFramework/View";

export default class ViewObTiYu extends View {
    private BtnBack: cc.Node;
    private ObTiYubg: cc.Node;
    private ObTiYuwebView: cc.WebView;
    public OnAwake() {
        this.ObTiYuwebView = this.FindTransform("ObTiYuwebView").getComponent(cc.WebView);
        this.BtnBack = this.FindTransform("BtnBack");
        this.ObTiYubg = this.FindTransform("ObTiYubg");
        this.ObTiYuwebView.node.on('loaded', this.loadSueese, this);
        this.ObTiYuwebView.node.on('error', this.loadError, this);
    }
    private loadSueese(event) {
        cc.log("成功")
        this.ObTiYuwebView.node.opacity = 255;
        this.BtnBack.opacity = 255;
        this.ObTiYubg.opacity = 255;
    }
    loadError(event) {
        cc.log("失败", event)
    }
    public SetWebViewURL(url: string) {
        if (!this.ObTiYuwebView) return;
        this.ObTiYuwebView.url = url;
    }
    public ExitObTiYu() {
        if (!this.ObTiYuwebView) return;
        this.ObTiYuwebView.url = "";
    }
    public SetOpacity() {
        this.ObTiYuwebView.node.opacity = 0;
        this.BtnBack.opacity = 0;
        this.ObTiYubg.opacity = 0;
    }
}
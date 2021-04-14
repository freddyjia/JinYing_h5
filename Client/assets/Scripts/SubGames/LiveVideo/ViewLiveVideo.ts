import View from "../../MVCFramework/View";

export default class ViewLiveVideo extends View {
    private webView: cc.WebView;
    private BtnBack: cc.Node;
    private UIbg: cc.Node;
    public OnAwake() {
        this.webView = this.FindTransform("LivewebView").getComponent(cc.WebView);
        this.BtnBack = this.FindTransform("BtnBack");
        this.UIbg = this.FindTransform("UIbg");
        this.webView.node.on('loaded', this.loadSueese, this);
    }
    loadSueese(event) {
        this.webView.node.opacity = 255;
        this.BtnBack.opacity = 255;
        this.UIbg.opacity = 255;
    }
    public SetWebViewURL(url: string) {
        if (!this.webView) return;
        this.webView.url = url;
    }
    public ExitLiveVideo() {
        if (!this.webView) return;
        this.webView.url = "";
    }
    public SetOpacity() {
        this.webView.node.opacity = 0;
        this.BtnBack.opacity = 0;
        this.UIbg.opacity = 0;
    }

} 
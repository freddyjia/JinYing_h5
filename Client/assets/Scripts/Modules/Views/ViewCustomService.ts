import View from "../../MVCFramework/View";
import Global from "../../Global/Global";
import Util from "../../Tools/Util";

export default class ViewCustomService extends View 
{
    private currentState = -1;//0:常见问题 1:在线客服 2:vip客服


    private VScrollRect1:cc.Node;
    private VScrollRect2:cc.Node;

    private QuestionBtnSelect:cc.Button;
    private QuestionBtnUnSelect:cc.Button;

    private OnlineBtnSelect:cc.Button;
    private OnlineBtnUnSelect:cc.Button;

    private VipBtnSelect:cc.Button;
    private VipBtnUnSelect:cc.Button;

    private Close:cc.Button;
    private BtnCopy:cc.Button;

    private webviewPanel:cc.Node;
    private WebView:cc.WebView;
    private idLabel:cc.Label;

    public idCopySuccessLabel:cc.Node;
    public copyTimerid;

    private ScrollRects:cc.Node;


    private idPanel:cc.Node;

    public OnAwake()
    {
        this.VScrollRect1 = this.FindTransform("VScrollRect1");
        this.VScrollRect2 = this.FindTransform("VScrollRect2");

        this.QuestionBtnSelect = this.FindTransform("QuestionBtnSelect").getComponent(cc.Button);
        this.QuestionBtnUnSelect = this.FindTransform("QuestionBtnUnSelect").getComponent(cc.Button);
        this.OnlineBtnSelect = this.FindTransform("OnlineBtnSelect").getComponent(cc.Button);
        this.OnlineBtnUnSelect = this.FindTransform("OnlineBtnUnSelect").getComponent(cc.Button);
        this.VipBtnSelect = this.FindTransform("VipBtnSelect").getComponent(cc.Button);
        this.VipBtnUnSelect = this.FindTransform("VipBtnUnSelect").getComponent(cc.Button);

        this.Close = this.FindTransform("Close").getComponent(cc.Button);
        this.BtnCopy = this.FindTransform("BtnCopy").getComponent(cc.Button);
        
        this.webviewPanel = this.FindTransform("webviewPanel");
        this.WebView = this.FindTransform("WebView").getComponent(cc.WebView);
        this.idLabel = this.FindTransform("idLabel").getComponent(cc.Label);
        this.idCopySuccessLabel = this.FindTransform("idCopySuccessLabel");

        this.ScrollRects = this.FindTransform("ScrollRects");

        this.idPanel = this.FindTransform("idPanel");

        Util.SetClickAction(this.QuestionBtnSelect,()=>{
            this.SetState(0);
        });
        Util.SetClickAction(this.QuestionBtnUnSelect,()=>{
            this.SetState(0);
        });

        Util.SetClickAction(this.OnlineBtnSelect,()=>{
            this.SetState(1);
        });
        Util.SetClickAction(this.OnlineBtnUnSelect,()=>{
            this.SetState(1);
        });

        Util.SetClickAction(this.VipBtnSelect,()=>{
            this.SetState(2);
        });
        Util.SetClickAction(this.VipBtnUnSelect,()=>{
            this.SetState(2);
        });

        if(cc.sys.isMobile == true)
        {
            // this.WebView.node.scale = 0.5;
        }
        else
        {
            this.WebView.node.scale = 1;
            this.WebView.node.setContentSize(new cc.Size(734,536));
        }

    }

    public SetState(state)
    {
        if(this.currentState == state)
        {
            return;
        }

        this.currentState = state;

        if(this.currentState == 0)
        {
            // this.QuestionBtnSelect.node.active = true;
            // this.QuestionBtnUnSelect.node.active = false;

            // this.OnlineBtnSelect.node.active = false;
            // this.OnlineBtnUnSelect.node.active = true;

            // this.VipBtnSelect.node.active = false;
            // this.VipBtnUnSelect.node.active = true;

            this.ScrollRects.active = true;
            this.webviewPanel.active = false;

        }
        else if(this.currentState == 1)
        {
            // this.QuestionBtnSelect.node.active = false;
            // this.QuestionBtnUnSelect.node.active = true;

            // this.OnlineBtnSelect.node.active = true;
            // this.OnlineBtnUnSelect.node.active = false;

            // this.VipBtnSelect.node.active = false;
            // this.VipBtnUnSelect.node.active = true;

            this.ScrollRects.active = false;
            this.webviewPanel.active = true;

            this.WebView.url = "https://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=988167&configID=66893&jid=1660362974&info=userId%3D" 
            + Global.PlayerInfo.playerId +"%26name%3D" + Global.PlayerInfo.playerId + "%26memo%3D%E6%97%A0&s=1";
        }
        else if(this.currentState == 2)
        {
            // this.QuestionBtnSelect.node.active = false;
            // this.QuestionBtnUnSelect.node.active = true;

            // this.OnlineBtnSelect.node.active = false;
            // this.OnlineBtnUnSelect.node.active = true;

            // this.VipBtnSelect.node.active = true;
            // this.VipBtnUnSelect.node.active = false;

            this.ScrollRects.active = false;
            this.webviewPanel.active = true;
        }
    }

    public OnShowView()
    {
        this.SetState(0);
        this.idLabel.string = "ID:" + Global.PlayerInfo.playerId;
    }

    public Refresh(hasLogin,serviceType)
    {
        //this.idPanel.active = hasLogin;
        if(serviceType == 1)
        {
            this.VScrollRect1.active = true;
            this.VScrollRect2.active = false;
        }
        else
        {
            this.VScrollRect1.active = false;
            this.VScrollRect2.active = true;
        }
    }
}

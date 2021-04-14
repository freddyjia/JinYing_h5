import HallAdItem from "./HallAdItem";
import { ADData } from "../../../Protos/HallData";
import TimerManager from "../../../Components/TimerManager";

export default class ViewHallAdPaneltMrg {
    private AdPanel: cc.PageView;
    private AdItemCopy: cc.Node;
    private adDatas: ADData[] = [];
    private scrollTimerId: string = "";
    private currecntIndex: number = 0;
    private selectIndex: number = -1;
    private ToggleGroup: cc.Node;
    private Toggle: cc.Node;
    private Toggleitems: cc.Node[] = [];

    private CheckAndOpenSmallGameListCallback: (playType: number) => void;

    public Init(AdPanel: cc.Node) {
        this.AdPanel = AdPanel.getComponent(cc.PageView);
        this.ToggleGroup = cc.find("ToggleGroup", this.AdPanel.node.parent);
        this.Toggle = cc.find("ToggleGroup/Toggle", this.AdPanel.node.parent);
        this.AdItemCopy = cc.find("Content/AdItemCopy", this.AdPanel.node);
    }

    public SetCheckAndOpenSmallGameListCallback(callback: (playType: number) => void) {
        this.CheckAndOpenSmallGameListCallback = callback;
    }

    public Flush(adDatas: ADData[]) {
        this.adDatas = adDatas;
        this.AdPanel.removeAllPages();
        this.AdPanel.node.on('page-turning', this.TouchingTrun, this);
        this.ToggleGroup.removeAllChildren();
        cc.log("AdData", this.adDatas)
        for (let i = 0; i < adDatas.length; i++) {
            var item = cc.instantiate(this.AdItemCopy);
            item.active = true;
            this.AdPanel.addPage(item);
            var hallItem = new HallAdItem();
            hallItem.SetCheckAndOpenSmallGameListCallback(this.CheckAndOpenSmallGameListCallback);
            hallItem.Init(item);
            hallItem.Update(adDatas[i]);
        }


        this.AdPanel.scrollToPage(0, 0);
        if (adDatas.length > 1) {
            this.AutoScrollPage();
            //添加单选框
            this.CreatToggleGroup();
        }

    }
    private TouchingTrun(pageView: cc.PageView) {
        cc.log("当前index", this.AdPanel.getCurrentPageIndex())
        this.currecntIndex = this.AdPanel.getCurrentPageIndex();
        this.UpdateCurrentTog(this.currecntIndex);
    }
    //添加单选框
    private CreatToggleGroup() {
        this.Toggleitems = [];
        let togNum: number = this.adDatas.length;
        for (let i = 0; i < togNum; i++) {
            let newTog: cc.Node = cc.instantiate(this.Toggle);
            this.ToggleGroup.addChild(newTog);
            this.Toggleitems.push(newTog);
            newTog.on("toggle", this.ChangeToggle, this)
        }
        this.UpdateCurrentTog(this.currecntIndex);
    }
    private UpdateCurrentTog(index: number) {
        let ToggleSP: cc.Toggle = this.Toggleitems[index].getComponent(cc.Toggle);
        ToggleSP.isChecked = true;
    }
    private ChangeToggle(toggle: cc.Toggle) {
        cc.log("index", this.Toggleitems.indexOf(toggle.node))
        this.currecntIndex = this.Toggleitems.indexOf(toggle.node);
        this.UpdateCurrentTog(this.currecntIndex);
        this.AdPanel.scrollToPage(this.currecntIndex, 0.5);
    }

    public OnHideView() {
        TimerManager.GetInstance().DeleteTimer(this.scrollTimerId);
    }

    public OnShowView() {
        // if (this.adDatas.length > 1)
        //     this.AutoScrollPage();
    }

    private AutoScrollPage() {
        var curIdx = this.AdPanel.getCurrentPageIndex() + 1;
        if (curIdx >= this.adDatas.length)
            curIdx = 0;

        var adData = this.adDatas[curIdx];
        var delayTime = adData.showTime;
        if (adData.showTime <= 0)
            delayTime = 5;

        TimerManager.GetInstance().DeleteTimer(this.scrollTimerId);
        this.scrollTimerId = TimerManager.GetInstance().CallActionDelay((obj: any) => {
            this.currecntIndex = curIdx;
            this.UpdateCurrentTog(this.currecntIndex);
            this.AdPanel.scrollToPage(curIdx, 0.5);
            this.AutoScrollPage();
        }, delayTime);
    }
}
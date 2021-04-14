import View from "../../MVCFramework/View";
import LocalStorageKey from "../../Global/LocalStorageKey";
import Global from "../../Global/Global";

export default class ViewLogin extends View {
    public EditBoxIP: cc.EditBox;
    public EditBoxPort: cc.EditBox;
    public EditBoxUserID: cc.EditBox;
    public EditBoxDeviceID: cc.EditBox;
    public LabelVersion:cc.Label;


    public OnAwake() {
        this.EditBoxIP = this.FindTransform("EditBoxIP").getComponent(cc.EditBox);
        this.EditBoxPort = this.FindTransform("EditBoxPort").getComponent(cc.EditBox);
        this.EditBoxUserID = this.FindTransform("EditBoxUserID").getComponent(cc.EditBox);
        this.EditBoxDeviceID = this.FindTransform("EditBoxDeviceID").getComponent(cc.EditBox);

        this.LabelVersion = this.FindTransform("LabelVersion").getComponent(cc.Label);

        let uid = localStorage.getItem(LocalStorageKey.LoginUid);
        if (uid.length > 0) {
            this.EditBoxUserID.string = uid;
        }

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        cc.log(date.getFullYear(), date.getMonth(), date.getDate());

        let nowTime = date.getTime();
        nowTime -= 23 * 24 * 3600 * 1000;

        date.setTime(nowTime);
        cc.log("newDate:", date);
        cc.log(date.getFullYear(), date.getMonth(), date.getDate());
        cc.log(new Date(year + '-' + month + '-' + day));
    }

    public OnShowView() {
        this.LabelVersion.string = "Version:" + Global.gameVersion;
    }
}

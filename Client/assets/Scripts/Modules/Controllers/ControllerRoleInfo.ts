import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import ViewRoleInfo, {ViewRoleInfoData, ViewRoleNodeSlotData} from "../Views/ViewRoleInfo";
import {ViewNames} from "../MVCRegister";

export default class ControllerRoleInfo extends Controller {


    private view: ViewRoleInfo


    public OnReceiveMessage(msg: string, msgBody: any) {
        if (msg == MessageNames.OpenRoleInfo) {
            this.OpenView(msgBody as ViewRoleInfoData)
        } else if (msg == MessageNames.OpenRoleInfoBySlot) {
            if (this.view == null) {
                this.view = this.GetView(ViewNames.ViewRoleInfo) as ViewRoleInfo;
            }
            this.view.Show(() => {
                let ViewRoleNo
                this.view.Construction(this.view.node, null)
                this.view.FlushDataBySlot(msgBody as ViewRoleNodeSlotData);
            })
        } else if (msg == MessageNames.HideRoleInfo) {
            if (this.view && this.view.isShow) {
                this.view.Hide()
            }
        }
    }


    private OpenView(viewRoleInfoData) {
        if (this.view == null) {
            this.view = this.GetView(ViewNames.ViewRoleInfo) as ViewRoleInfo;
        }
        this.view.Show(() => {
            this.view.Construction(this.view.node, viewRoleInfoData)
        })
    }

}
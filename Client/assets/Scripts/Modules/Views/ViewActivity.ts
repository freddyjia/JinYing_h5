import ListView, { Cell, ListViewScrollStyle } from "../../Components/ListView";
import View from "../../MVCFramework/View";
import NodeUtil from "../../Tools/NodeUtil";
import SpriteUtil from "../../Tools/SpriteUtil";
import Util from "../../Tools/Util";

//////////////////////////////////////////////////////////////////////////////
// BankItemView

export default class ViewActivity extends View {
    public ActivityIMG: cc.Node; //宣传图及进入按钮 节点
    public ActivtyContent: cc.Node;//按钮列表节点

    public btnImgSelect: cc.Node[];
    public btnImgUnselect: cc.Node[];
    public txtselect: cc.Node[];
    public txtunselect: cc.Node[];

    public static baseContentImagePath = {
        [1]: { leftbtntxt: '新用户首充', pngPath: 'MainGame/Textures/Big/xyhsczs', funType: 1, lefttiptxt: '最高送11.5%' },
        [2]: { leftbtntxt: '每日首充', pngPath: 'MainGame/Textures/Big/mrczzs', funType: 2, lefttiptxt: '加赠+5.0%' },
        [3]: { leftbtntxt: '充值返利', pngPath: 'MainGame/Textures/Big/rechargeAds', funType: 3, lefttiptxt: '每笔都有返利' },
        [4]: { leftbtntxt: '捕鱼闯关', pngPath: 'MainGame/Textures/Big/bycgjz', funType: 4, lefttiptxt: '每日17802彩金' },
        [5]: { leftbtntxt: '洗码返点', pngPath: 'MainGame/Textures/Big/ximaAds', funType: 5, lefttiptxt: '' },
        [6]: { leftbtntxt: '新用户首充', pngPath: 'MainGame/Textures/Big/xyhsczs', funType: 6, lefttiptxt: '最高+11.5%' }
    }

    public OnAwake() {
        this.ActivityIMG = this.FindTransform("ActivityIMG");
        this.ActivtyContent = this.FindTransform("ActivtyContent");

        this.btnImgSelect = [];
        this.btnImgUnselect = [];
        this.txtselect = [];
        this.txtunselect = [];
        for (let i = 0; i < 5; i++) {
            let key = i + 1;
            this.btnImgSelect.push(this.FindTransform("ActivityBtn" + key).getChildByName("depositOptionBgSelect"));
            this.btnImgUnselect.push(this.FindTransform("ActivityBtn" + key).getChildByName("depositOptionBgUnSelect"));
            this.txtselect.push(this.FindTransform("ActivityBtn" + key).getChildByName("Textselect"));
            this.txtunselect.push(this.FindTransform("ActivityBtn" + key).getChildByName("Textunselect"));
        }
        this.RefreshActivityList();
    }
    //显示活动列表
    public RefreshActivityList() {
        for (let i = 0; i < 5; i++) {
            let txt_select = this.txtselect[i].getComponent(cc.Label);
            let txt_unselect = this.txtunselect[i].getComponent(cc.Label);
            let key = i + 1;
            txt_select.string = ViewActivity.baseContentImagePath[key].leftbtntxt;
            txt_unselect.string = ViewActivity.baseContentImagePath[key].leftbtntxt;
        }

    }
    public ChangeBtnStatus(btnIndex) {
        for (let i = 0; i < 5; i++) {
            let btnImgSelect = this.btnImgSelect[i];
            let btnImgUnselect = this.btnImgUnselect[i];
            let txt_select = this.txtselect[i];
            let txt_unselect = this.txtunselect[i];
            if (btnIndex == i + 1) {
                btnImgSelect.active = true;
                txt_select.active = true;
                btnImgUnselect.active = false;
                txt_unselect.active = false;
            } else {
                btnImgSelect.active = false;
                txt_select.active = false;
                btnImgUnselect.active = true;
                txt_unselect.active = true;
            }
        }
    }
    public ShowCurrentActivity(index) {

        this.ChangeBtnStatus(index);
        let sprite = this.ActivityIMG.getComponent(cc.Sprite);
        let eventType = ViewActivity.baseContentImagePath[index].funType;
        NodeUtil.SetSpriteFrame(sprite, ViewActivity.baseContentImagePath[index].pngPath);
    }

}





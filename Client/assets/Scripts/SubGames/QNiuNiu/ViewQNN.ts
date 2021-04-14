import View from "../../MVCFramework/View";
import AudioManager from "../../Manager/AudioManager";
import QNNConfig from "./QNNConfig";
import QNNFlyGold from "./QNNFlyGold";
import Extension from "../../Tools/Extension";
import QNNTouzhuSubView from "./QNNTouzhuSubView";
import QNNGameResPanelSubView from "./QNNGameResPanelSubView";
import QNNOtherSubView from "./QNNOtherSubView";
import QNNWaitNextGame from "./QNNWaitNextGame";
import QNNCardPanelSubView from "./QNNCardPanelSubView";
import QNNSlotMgr from "./QNNSlotMgr";
import QNNGameStartAnimSubView from "./QNNGameStartAnimSubView";
import QNNQiangZhuangSubView from "./QNNQiangZhuangSubView";
import QNNCardResSubView from "./QNNCardResSubView";
import QNNAddPaiSubView from "./QNNAddPaiSubView";
import MessageCenter from "../../MVCFramework/MessageCenter";
import MessageNames from "../../Modules/MessageNames";
import QNNPlayerInOrOffMgr from "./QNNPlayerInOrOffMgr";
import Global from "../../Global/Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewQNN extends View implements IQNNMsg {

    private trans: cc.Node;
    private ContentPanel:cc.Node;

    private allSubView = new Array<IQNNMsg>();
    private allViewMgr = new Array<IQNNMsg>();

    public OnAwake() {
        this.ContentPanel = this.FindTransform("ContentPanel");
    }

    public OnAdapt(){
        this.ContentPanel.getComponent(cc.Widget).top = Global.adapt;
    }

    public OnShowView() {
        AudioManager.GetInstance().BGMPlay(QNNConfig.Audio.SoundBgm)
    }

    public OnHideView() {

    }

    public OnActive() {

    }

    public OnDeactive() {

    }

    public OnDestroy() {

    }


    private delayShowFlyGoldTimerId


    public Construction(trans, datas, datasFunc) {

        this.trans = trans

        Extension.ClearArr(this.allSubView)

        this.allSubView.push(new QNNSlotMgr().Construction(Extension.SearchNode(trans, "PlayerMsgPanel"), datas, datasFunc))
        this.allSubView.push(new QNNGameStartAnimSubView().Construction(Extension.SearchNode(trans, "GameStartAnimPanel"), datas, datasFunc))
        this.allSubView.push(new QNNQiangZhuangSubView().Construction(Extension.SearchNode(trans, "QiangzhuangPanel"), datas, datasFunc))
        this.allSubView.push(new QNNTouzhuSubView().Construction(Extension.SearchNode(trans, "TouzhuViewPanel"), datas, datasFunc))
        this.allSubView.push(new QNNCardPanelSubView().Construction(Extension.SearchNode(trans, "CardPanel"), datas, datasFunc))
        this.allSubView.push(new QNNGameResPanelSubView().Construction(Extension.SearchNode(trans, "GameResPanel"), datas, datasFunc))
        this.allSubView.push(new QNNOtherSubView().Construction(Extension.SearchNode(trans, "OtherPanel"), datas, datasFunc))
        this.allSubView.push(new QNNAddPaiSubView().Construction(Extension.SearchNode(trans, "AddPaiPanel"), datas, datasFunc))
        this.allSubView.push(new QNNWaitNextGame().Construction(Extension.SearchNode(trans, "WaitNextGamePanel"), datas, datasFunc))
        this.allSubView.push(new QNNFlyGold().Construction(Extension.SearchNode(trans, "FlyGoldPanel"), datas, datasFunc))
        this.allSubView.push(new QNNCardResSubView().Construction(Extension.SearchNode(trans, "CardResPanel"), datas, datasFunc))


        Extension.ClearArr(this.allViewMgr)
        this.allViewMgr.push(new QNNPlayerInOrOffMgr().Construction())

    }

    public PlayAnim(msg, msgBody) {
        for (let i = 0; i < this.allViewMgr.length; i++) {
            this.allViewMgr[i].PlayAnim(msg, msgBody)
        }
        for (let i = 0; i < this.allSubView.length; i++) {
            this.allSubView[i].PlayAnim(msg, msgBody)
        }
    }


    public Exit() {
        for (let i = 0; i < this.allViewMgr.length; i++) {
            this.allViewMgr[i].Exit()
        }
        for (let i = 0; i < this.allSubView.length; i++) {
            this.allSubView[i].Exit()
        }
        MessageCenter.SendMessage(MessageNames.HideRoleInfo)
    }
}
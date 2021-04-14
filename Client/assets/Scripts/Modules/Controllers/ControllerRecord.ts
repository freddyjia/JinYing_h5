// CreateTime: 2018/5/4 11:44
// Desc: 走势图控制器    Record
import Controller from "../../MVCFramework/Controller";
import { RoleInfo } from "../../Protos/GameCommon";
import ModelRecord from "../Models/ModelRecord";
import { ModelNames, ViewNames } from "../MVCRegister";
import MessageNames from "../MessageNames";
import { GameTypeMgr } from "../../Global/GameTypeMgr";
import View from "../../MVCFramework/View";
import ViewGameRecord from "../Views/ViewGameRecord";
import ViewDragonVsTigerRecord from "../../SubGames/DVT/ViewDragonVsTigerRecord";
import ViewRedVsBlackRecord from "../../SubGames/RvB/ViewRedVsBlackRecord";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class ControllerRecord extends Controller
{
    //龙虎界面
    private _View0: ViewDragonVsTigerRecord;
    private _View1: ViewRedVsBlackRecord;
    private _Model: ModelRecord;
   // private ViewOnly: ViewGameRecord;
    

    //
    public Init()
    {
        this._Model = this.GetModel(ModelNames.ModelRecord) as ModelRecord;
    }

    //
    public OnReceiveMessage(msg,msgBody)
    {
        if(msg == MessageNames.OpengameRecord)
        {
            if(Global.showLog == true)
                cc.error("打開游戲 記錄。。。。。。");
            this.ShowRecord(msgBody);
        }
        else if (msg == MessageNames.UpdateRecord)
        {
            if(Global.showLog == true)
                cc.error("更新游戲 記錄。。。。。。");
            this.UpdateRecord(msgBody);
        }
        
        this._Model.wouldBeInitUI = false;
    }
    
    ///
    public ShowRecord(msgBody:any)
    {
        
        let viewName = "";
        if(msgBody ==GameTypeMgr.Config.LongHuDou.gameType)
        { 
            viewName = ViewNames.ViewDragonVsTigerRecord;
            if(this._View0 == null)
            {
               
                this._View0 = this.GetView(viewName) as ViewDragonVsTigerRecord;

                this._View0.SetOnClick("close",()=>{
                    this._View0.Hide();
                });
        
                this._View0.SetOnClick("xiaju1Btn",()=>{
                    this._View0.NextBlackWinAction();
        
                });
                this._View0.SetOnClick("xiaju2Btn",()=>{
                    this._View0.NextRedWinAction();
                });
            }
 
            this._View0.Show(()=>{
                this.ShowingRecordElement();
            });


        }
        else if(msgBody ==GameTypeMgr.Config.RedBlack.gameType)
        {
            viewName = ViewNames.ViewRedVsBlackrRecord;
            if(this._View1 == null)
            {
                this._View1 = this.GetView(viewName) as ViewRedVsBlackRecord;

                this._View1.SetOnClick("close",()=>{
                    this._View1.Hide();
                });
        
                this._View1.SetOnClick("xiaju1Btn",()=>{
                    this._View1.NextBlackWinAction();
        
                });
                this._View1.SetOnClick("xiaju2Btn",()=>{
                    this._View1.NextRedWinAction();
                });
            }
      

            this._View1.Show(()=>{
                this.ShowingRecordElement();
            });
        }
    }

    ///显示记录UI
    public ShowingRecordElement()
    {    
        if(this._Model.rGameType ==  GameTypeMgr.Config.RedBlack.gameType && this._View1!=null&& this._View1.isShow)
        {
            this._View1.Show20GameResult(this._Model.list20Game);
            this._View1.SetRateSlideValue(this._Model.leftWinRate,this._Model.rightWinRate);
            this._View1.SetPlayCount(this._Model.leftWinCount,this._Model.rightWinCount,this._Model.heCount,this._Model.playerGameCount);

            this._View1.ShowHHCardTypeList(this._Model.cardInfoList);
            this._View1.InitView(this._Model.victoryList );            
        }
        else if( this._View0!=null && this._View0.isShow)
        {
            this._View0.Show20GameResult(this._Model.list20Game);
            this._View0.SetRateSlideValue(this._Model.leftWinRate,this._Model.rightWinRate);
            this._View0.SetPlayCount(this._Model.leftWinCount,this._Model.rightWinCount,this._Model.heCount,this._Model.playerGameCount);

            this._View0.ShowLHRecordList(this._Model.historyRecordLHList);
            this._View0.InitView(this._Model.victoryList);
        }
    }

    ///
    public UpdateRecord(msgBody:any)
    { 
        if(Global.showLog == true)
            cc.error("UpdateRecord更新数据记录-------------------------------");
        this.ShowingRecordElement();
    }
}




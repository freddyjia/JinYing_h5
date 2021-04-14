import Controller from "../../MVCFramework/Controller";
import ViewHallRank from "../Views/ViewHallRank";
import ModelHallRank from "../Models/ModelHallRank";
import { ModelNames, ViewNames } from "../MVCRegister";
import MessageNames from "../MessageNames";
import Toast from "../../Tools/Toast";


export default class ControllerHallRank extends Controller 
{
    private view:ViewHallRank;
    private model:ModelHallRank;
    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelHallRank) as ModelHallRank;
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.OpenHallRank)
        {
            this.OpenView();
        }
        else if(msg == MessageNames.ServerOpenHallRank)
        {
            
        }
        else if(msg == MessageNames.SyncPlayerInfo)
        {
            
        }
        else if(msg == MessageNames.RefreshHallRank)
        {
            if(this.view != null && this.view.isShow == true)
            {
                this.view.RefreshRankingDatas(this.model.rankingDatas);
                this.view.RefreshListviewPannel();
            }
        }
    }

    private OpenView()
    {
        if(this.model.rankInfoRes == null)
        {
            this.model.GetExistRankInfo();
            return;
        }
        if(this.model.rankInfoRes.rankInfoList.length <= 0)
        {
            Toast.Show("排行榜未开放");
            return;
        }
        let ranktype = 2;
        this.model.GetRankListData(ranktype);

        if(this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewHallRank) as ViewHallRank;
            this.view.SetOnClick("Close",()=>{
                this.view.Hide();
            });
            this.view.getRankingDataCallback = (rantype)=>{
                this.model.GetRankListData(rantype);
            };
        }
        
        this.view.RefreshRankingDatas(this.model.rankingDatas);
        this.view.Show(()=>{
            
        });
    }
}

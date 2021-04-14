import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import { ViewNames, ModelNames } from "../MVCRegister";
import ModelGuide from "../Models/ModelGuide";
import ViewNoviceGold from "../Views/ViewNoviceGold";
import ViewGuide from "../Views/ViewGuide";
import Toast from "../../Tools/Toast";
import TimerManager from "../../Components/TimerManager";
import AudioManager from "../../Manager/AudioManager";
import Res from "../../Global/Res";

export default class ControllerGuide extends Controller
{
    public static GUIDE_FIRST_GAME_TYPE = 1;//1斗地主 2炸金花 4百人牛牛 7龙虎斗 8抢庄牛牛
    public static GUIDE_FIRST_GAME_ID = 1001;

    noviceGoldView:ViewNoviceGold;//新手金界面
    fingerView:ViewGuide;    //金手指界面
    model:ModelGuide;
    DoingGuideStepHideRewardRegister:boolean = false;
    AudioId_1;
    AudioId_2;

    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelGuide) as ModelGuide;
        this.DoingGuideStepHideRewardRegister = false;
    }

    public Clean()
    {
        
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.CheckGuide)
        {
            this.model.CheckGuide();
        }
        else if(msg == MessageNames.CheckOpenRewardRegister)
        {
            if(this.noviceGoldView != null && this.noviceGoldView.isShowing == true){
                return;
            }
            if(this.fingerView != null && this.fingerView.isShowing == true){
                return;
            }
            if(this.DoingGuideStepHideRewardRegister){
                return;
            }
            this.model.CheckOpenRewardRegister();
        }
        else if(msg == MessageNames.UploadGuideAdvance)
        {
            this.model.ReqUploadGuideStep();
        }
        else if(msg == MessageNames.OpenNoviceGold)
        {
            this.ShowNoviceGoldView(msgBody);
        }
        else if(msg == MessageNames.PlayNoviceGoldAni)
        {
            this.noviceGoldView.StartOpenAni();
        }
        else if(msg == MessageNames.OpenFinger){
            this.ShowFingerView(msgBody);
        }
    }

    public ShowNoviceGoldView(data){
        if(this.noviceGoldView == null){
            this.noviceGoldView = this.GetView(ViewNames.ViewNoviceGold) as ViewNoviceGold;

            this.noviceGoldView.SetOnClick("btnOpen",()=>{
                this.model.GetNoviceGold();
                this.noviceGoldView.SetUnClicked("btnOpen");
                this.noviceGoldView.SuccessGetNoviceMoney();
            });
            this.noviceGoldView.SetOnClick("btnClose", ()=>{
                this.noviceGoldView.SetUnClicked("btnClose");
                this.noviceGoldView.Hide();
                this.ShowFingerView("change");//新手兑换提示
                AudioManager.GetInstance().SoundPlay(Res.Audios.NoviceGuide_1,false,(id)=>{
                    this.AudioId_1 = id;
                });
            });
            this.noviceGoldView.SetOnClick("Mask", ()=>{});
        }
        this.noviceGoldView.Show(()=>{
            this.noviceGoldView.SetScreenSize();
            this.model.NoviceGoldFinish = true;
            this.noviceGoldView.SetMoneyNumber(data);
        },()=>{});
    }

     public ShowFingerView(step:any){
        if(this.fingerView == null){
            this.fingerView = this.GetView(ViewNames.ViewGuide) as ViewGuide;
            this.fingerView.SetOnClick("FirstGame",()=>{
                AudioManager.GetInstance().SoundStop(this.AudioId_2);
                this.SendMessage(MessageNames.HideRewardRegister);
                //t秒内禁止显示注册送金，t秒后不再禁止。
                this.DoingGuideStepHideRewardRegister = true;
                TimerManager.GetInstance().CallActionDelay(()=>{
                    this.DoingGuideStepHideRewardRegister = false;
                },1);

                this.RequestEnterGameWithID();
                this.model.EnterGameFirstTime();
                this.fingerView.Hide();
                this.model.FingerFinish = true;
            });
            this.fingerView.SetOnClick("btnOpen",()=>{
                this.model.noviceStep++;
                this.model.ReqUploadGuideStep();
                this.model.ChangeTipFinish = true;
                this.fingerView.Change();
                this.fingerView.SetSmallGameAndFingerPos();
                AudioManager.GetInstance().SoundStop(this.AudioId_1);
                AudioManager.GetInstance().SoundPlay(Res.Audios.NoviceGuide_2,false,(id)=>{
                    this.AudioId_2 = id;
                });
            });

            this.fingerView.SetOnClick("Mask", ()=>{});
        }
        if(step == "change"){
            this.fingerView.Show(()=>{
                this.fingerView.SetScreenSize();
                this.fingerView.SetBottomBtnPos();
            });
        }else if(step == "finger"){
            this.fingerView.Show(
                ()=>{
                    this.fingerView.SetScreenSize();
                    this.fingerView.Change();
                    this.fingerView.SetSmallGameAndFingerPos();
                },
                ()=>{}
            );
        }
    }

    public RequestEnterGameWithID(){
        //写死第一个game
        var playType = ControllerGuide.GUIDE_FIRST_GAME_TYPE;
        var playId = ControllerGuide.GUIDE_FIRST_GAME_ID;
        this.SendMessage(MessageNames.OpenSmallGameWithId, {playType:playType,playId:playId});
    }
}

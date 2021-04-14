import Controller from "../../MVCFramework/Controller";
import ViewPromoter from "../Views/ViewPromoter";
import MessageNames from "../MessageNames";
import { ViewNames, ModelNames } from "../MVCRegister";
import ModelPromoter from "../Models/ModelPromoter";
import ModelHall from "../Models/ModelHall";
import ViewPromoterRule from "../Views/ViewPromoterRule";
import ViewPromotionNumber from "../Views/ViewPromotionNumber";
import Global from "../../Global/Global";
import Dialog, { DialogType } from "../../Tools/Dialog";
import TIPS from "../../Global/Tips";
import ViewPromoterDepositInput from "../Views/ViewPromoterDepositInput";
import Toast from "../../Tools/Toast";
import { ApplyDepositRes } from "../../Protos/Promoter";
import ViewDayEarnings from "../Views/ViewDayEarnings";
import ViewPromoterBigQrCode from "../Views/ViewPromoterBigQrCode";
import ViewDayTax from "../Views/ViewDayTax";
import ViewPromoterLevel from "../Views/ViewPromoterLevel";
import ccC from "../../Tools/ccC";

export default class ControllerPromoter extends Controller
{
    view:ViewPromoter;
    viewRule:ViewPromoterRule;
    viewNumber:ViewPromotionNumber;
    viewDepositInput:ViewPromoterDepositInput;
    viewDay:ViewDayEarnings;
    viewBigQrCode:ViewPromoterBigQrCode;
    viewDayTax:ViewDayTax;
    viewLevel:ViewPromoterLevel;

    model:ModelPromoter;
    modelHall:ModelHall;

    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelPromoter) as ModelPromoter;
        this.modelHall = this.GetModel(ModelNames.ModelHall) as ModelHall;
    }

    public OnReceiveMessage(msg:string, msgBody:any)
    {
        if (msg == MessageNames.OpenUIPromoter)
        {
            this.model.RequestGetLevelInfo((data)=>{
                this.ShowPromoterView(data);
            });   
        }
        else if (msg == MessageNames.UploadLeaderId)
        {
            this.HandleUploadLeardID();
        }
        else if (msg == MessageNames.RefreshPromoterView)
        {
            this.HandleRefreshPromoterView();
        }
        else if (msg == MessageNames.RefreshPromoterQRCode)
        {
            if (this.view!=null && this.view.isShow)
                this.view.RefreshPromoterQRCode();
        }
        else if (msg == MessageNames.ShowBigQrCodeView)
        {
            this.ShowBigQrCodeView(msgBody);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // 显示推广主界面
    ///////////////////////////////////////////////////////////////////////////
    public ShowPromoterView(viewData:any)
    {
        if (this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewPromoter) as ViewPromoter;

            ///////////////////////////////////
            //主逻辑
            this.view.CreateViews();
            
            this.view.SetOnClick("BtnClose", ()=>{
                this.view.Hide();
            })

            for (let i = 1; i <= 3; i++)
            {
                this.view.SetOnClick("BtnPage"+i, ()=>{
                    this.view.OnTabClicked(i);
                })
            };

            ///////////////////////////////////
            //推广码
            this.view.SetOnClick("BtnRegist", ()=>{
                this.SendMessage(MessageNames.OpenRegisterPhoneFromPromoter);
            });

            this.view.SetOnClick("BtnRewards", ()=>{
                this.ShowRewardRuleView();
            });

            this.view.SetOnClick("BtnGM", ()=>{
                this.SendMessage(MessageNames.OpenCustomservice,{"hasLogin":true,"serviceType":2});
            });

            this.view.SetOnClick("BtnShowBigQR", ()=>{
                this.SendMessage(MessageNames.ShowBigQrCodeView, this.modelHall.GetPromoterQRCodeAddress());
            })

            this.view.viewPromoter.GetQrCodeAddress = ()=>{
                return this.modelHall.GetPromoterQRCodeAddress();
            };

            ///////////////////////////////////
            //推广概况
            this.view.SetOnClick("BtnLevelDetail", ()=>{
                this.ShowLevelView();
            })

            this.view.SetOnClick("BtnWeekEarningsDetail", ()=>{
                this.ShowDayTaxView();
            })

            this.view.SetOnClick("BtnDayEarningsDetail", ()=>{
                this.ShowDayEarningsView();
            })

            this.view.SetOnClick("BtnPlayersDetail", ()=>{
                this.ShowPromotionNumberView();
            })

            this.view.viewRewards.RequestMinePerformanceInfo = (callback:(data)=>void)=>
            {
                this.model.RequestMinePerformanceInfo(callback);
            };

            this.view.viewRewards.GetCurLevelInfoCallback = ()=>{
                return this.model.GetCurLevelInfo();
            };

            ///////////////////////////////////
            //领取收益
            this.view.viewTakeRewards.RequestGetTakeRewardsInfo = (pageIdx:number, callback:(data)=>void)=>{
                this.model.RequestGetTakeRewardsInfo(pageIdx, callback);
            };

            this.view.viewTakeRewards.RequestGetMineRewardsInfo = (callback:(data)=>void)=>{
                this.model.RequestGetMineRewardsInfo(callback);
            };

            this.view.SetOnClick("BtnDeposit", ()=>{
                let phone = Global.PlayerInfo.phone;
                if (phone.length < 11)
                {
                    Dialog.ShowWithYesNoContent(DialogType.Normal, "提示", "您还未注册正式账号，请先注册", TIPS.YES, TIPS.NO,()=>{
                        this.SendMessage(MessageNames.OpenRegisterPhoneFromPromoter);
                    }, null)

                    return;
                }

                this.ShowDepositInputView(
                    this.view.viewTakeRewards.viewData.canDeposit,
                    (data)=>{
                        let respData = data as ApplyDepositRes;
                        this.view.viewTakeRewards.Update(respData.infoRes);
                        this.view.viewTakeRewards.RefreshListView(respData.takeRewardInfos);
                    }
                );
            })
        }

        this.model.CleanCache();
        cc.log("viewData",viewData)
        this.view.SetViewData(viewData);
        this.view.Show();
    }

    ///////////////////////////////////////////////////////////////////////////
    // 收益规则
    ///////////////////////////////////////////////////////////////////////////
    public ShowRewardRuleView()
    {
        if (this.viewRule == null)
        {
            this.viewRule = this.GetView(ViewNames.ViewPromoterRule) as ViewPromoterRule;

            this.viewRule.SetOnClick("BtnClose", ()=>{
                this.viewRule.Hide();
            })
        }

        this.viewRule.Show();
    }

    ///////////////////////////////////////////////////////////////////////////
    // 推广人数
    ///////////////////////////////////////////////////////////////////////////
    public ShowPromotionNumberView()
    {
        if (this.viewNumber == null)
        {
            this.viewNumber = this.GetView(ViewNames.ViewPromotionNumber) as ViewPromotionNumber;

            this.viewNumber.SetOnClick("BtnClose", ()=>{
                this.viewNumber.Hide();
            })
        }

        this.model.RequestGetMinePromoteInfo((viewData)=>{
            this.viewNumber.SetViewData(viewData);
            this.viewNumber.Show();
        })
    }

    ///////////////////////////////////////////////////////////////////////////
    // 提现输入金额
    ///////////////////////////////////////////////////////////////////////////
    public ShowDepositInputView(maxNumber:number, sureCallback:(data)=>void)
    {
        if (this.viewDepositInput == null)
        {
            this.viewDepositInput = this.GetView(ViewNames.ViewPromoterDepositInput) as ViewPromoterDepositInput;

            this.viewDepositInput.SetOnClick("exitBtn", ()=>{
                cc.log("guanbi");
                this.viewDepositInput.Hide();
            })

            this.viewDepositInput.SetOnClick("BtnSure", ()=>{
                let num = this.viewDepositInput.GetInputNumber();
                if (num <= 0)
                {
                    Toast.Show("请输入大于0的数");
                    return;
                }

                this.model.RequestApplyDeposit(num, (respData)=>{
                    if (this.viewDepositInput.sureCallback!=null)
                    {
                        this.viewDepositInput.sureCallback(respData);
                    }

                    this.viewDepositInput.Hide();
                })
            })
        }

        this.viewDepositInput.SetViewData(maxNumber, sureCallback);
        this.viewDepositInput.Show();
    }

    ///////////////////////////////////////////////////////////////////////////
    // 日收益
    ///////////////////////////////////////////////////////////////////////////
    public ShowDayEarningsView()
    {
        if (this.viewDay == null)
        {
            this.viewDay = this.GetView(ViewNames.ViewDayEarnings) as ViewDayEarnings;

            this.viewDay.SetOnClick("BtnClose", ()=>{
                this.viewDay.Hide();
            });

            this.viewDay.RequestDayPerformanceInfo = (pageIdx, callback:(data)=>void)=>{
                this.model.RequestDayPerformanceInfo(pageIdx, callback);
            };
        }

        this.viewDay.SetViewData(this.model.GetDateKey());
        this.viewDay.Show();
    }

    ///////////////////////////////////////////////////////////////////////////
    // 二维码大图
    ///////////////////////////////////////////////////////////////////////////
    public ShowBigQrCodeView(newAddress)
    {
        if (this.viewBigQrCode == null)
        {
            this.viewBigQrCode = this.GetView(ViewNames.ViewPromoterBigQrCode) as ViewPromoterBigQrCode;

            this.viewBigQrCode.SetOnClick("BigQrCodeMask", ()=>{
                this.viewBigQrCode.Hide();
            })
        }
        this.viewBigQrCode.SetViewData(newAddress);
        this.viewBigQrCode.Show();
    }

    ///////////////////////////////////////////////////////////////////////////
    // 每日税收
    ///////////////////////////////////////////////////////////////////////////
    public ShowDayTaxView()
    {
        if (this.viewDayTax == null)
        {
            this.viewDayTax = this.GetView(ViewNames.ViewDayTax) as ViewDayTax;

            this.viewDayTax.SetOnClick("BtnClose", ()=>{
                this.viewDayTax.Hide();
            })

            this.viewDayTax.RequestMinePlayersInfo = (dateKey, pageIdx, callback:(data)=>void)=>{
                cc.log("获取数据---2");
                this.model.RequestMinePlayersInfo(dateKey, pageIdx, callback);
            };
        }

        this.viewDayTax.SetViewData(this.model.GetDateKey());
        this.viewDayTax.Show();
    }

    ///////////////////////////////////////////////////////////////////////////
    // 我的等级
    ///////////////////////////////////////////////////////////////////////////
    public ShowLevelView()
    {
        if (this.viewLevel == null)
        {
            this.viewLevel = this.GetView(ViewNames.ViewPromoterLevel) as ViewPromoterLevel;

            this.viewLevel.SetOnClick("BtnClose", ()=>{
                this.viewLevel.Hide();
            })

            this.viewLevel.GetNextLevelInfo = ()=>{
                return this.model.GetNextLevelInfo();
            }
        }

        let rets = this.model.GetCurLevelInfo();
        let allLevels = this.model.GetAllLevelsInfo();
        this.viewLevel.SetViewData(rets[0], rets[1], allLevels);
        this.viewLevel.Show();
    }

    public HandleUploadLeardID()
    {
        let leaderID = Global.PlayerInfo.leaderID;
        if(Global.showLog == true)
            cc.log("HandleUploadLeardID判断是否上级玩家ID：", leaderID);

        if (leaderID==null && leaderID.length == 0)
        {
            this.model.UploadLeaderID();
        }
        else
        {
            let leaderIDN = Number(leaderID) || 0;
            if (leaderIDN <= 0)
            {
                this.model.UploadLeaderID();
            }
        }
    }

    public HandleRefreshPromoterView()
    {
        if (this.view!=null && this.view.isShow)
        {
            this.view.ShowPageView(this.view.curTabIdx);
        }
    }
}
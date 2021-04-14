import Controller from "../../MVCFramework/Controller";
import ViewWithdraw from "../Views/ViewWithdraw";
import ModelWithdraw from "../Models/ModelWithdraw";
import { ModelNames, ViewNames } from "../MVCRegister";
import MessageNames from "../MessageNames";
import { GetWithdrawPassageRsp, TakeMoneyReq, BangBankCardReq } from "../../Protos/Withdraw";
import Toast from "../../Tools/Toast";
import ViewBindBank from "../Views/ViewBindBank";
import ViewBindAli from "../Views/ViewBindAli";
import Util from "../../Tools/Util";
import ViewWithdrawRecord from "../Views/ViewWithdrawRecord";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class ControllerWithdraw extends Controller 
{
    view:ViewWithdraw;
    model:ModelWithdraw;
    viewBindBank:ViewBindBank;
    viewBindAli:ViewBindAli;
    viewRecord:ViewWithdrawRecord;

    public Init()
    {
        this.model = this.GetModel(ModelNames.ModelWithdraw) as ModelWithdraw;
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if (msg == MessageNames.OpenWithdraw)
        {
            this.ShowWithdrawView();
        }
        else if (msg == MessageNames.UpdateWithdraw)
        {
            this.view.UpdateWithdraw();
        }
        else if (msg == MessageNames.UpdateWithdrawPassage)
        {
            this.view.UpdateWithdrawPassage(msgBody);

            let data = msgBody as GetWithdrawPassageRsp;
            if (data.hasBank)
            {
                this.model.ReqBankInfo();
                this.view.OptionBtnClick(2);
                this.view.passageContent.active = true;
            }
            else if (data.hasAli)
            {
                this.model.ReqAliInfo();
                this.view.OptionBtnClick(1);
                this.view.passageContent.active = true;
            }
            else
            {
                this.view.passageContent.active = false;
            }
        }
        else if (msg == MessageNames.UpdateAliInfo)
        {
            this.view.UpdateAliInfo(this.model.aliAccount);
        }
        else if (msg == MessageNames.UpdateBankInfo)
        {
            this.view.UpdateBankInfo(this.model.bankAccount);
        }
        else if (msg == MessageNames.UpdateWithdrawBankList)
        {
            if (this.viewBindBank!=null && this.viewBindBank.isShow)
            {
                this.viewBindBank.UpdateWithdrawBankList(this.model.BankInfoList);
            }
        }
        else if (msg == MessageNames.UpdateWithdrawRecord)
        {
            this.viewRecord.UpdateWithdrawRecord(this.model.withdrawRecordData);
        }
    }

    // 兑换主界面
    public ShowWithdrawView()
    {
        if (this.view == null)
        {
            this.view = this.GetView(ViewNames.ViewWithdraw) as ViewWithdraw;
            
            this.view.SetOnClick("exitBtn", (btn, data)=>{
                this.view.Hide();
            })

            this.view.SetOnClick("aliOptionBtn", (btn, data)=>{
                this.view.OptionBtnClick(1);
                this.model.ReqAliInfo();
            });

            this.view.SetOnClick("bankOptionBtn", (btn, data)=>{
                this.view.OptionBtnClick(2);
                this.model.ReqBankInfo();
            });

            this.view.SetOnClick("resetBtn", (btn, data)=>{
                this.view.ResetInputNum();
            });

            this.view.SetOnClick("maxBtn", (btn, data)=>{
                this.view.AddGoldToMax();
            });

            this.view.SetOnClick("btnAddNum1", (btn, data)=>{
                this.view.AddGoldNum(50);
            });

            this.view.SetOnClick("btnAddNum2", (btn, data)=>{
                this.view.AddGoldNum(100);
            });

            this.view.SetOnClick("btnAddNum3", (btn, data)=>{
                this.view.AddGoldNum(1000);
            });

            this.view.SetOnClick("btnAddNum4", (btn, data)=>{
                this.view.AddGoldNum(10000);
            });

            this.view.SetOnClick("bindAliBtn", (btn, data)=>{
                if (this.model.hasBindAli)
                {
                    Toast.Show("需要修改兑换信息请联系客服");
                }
                else
                {
                    this.ShowBindAliView();
                }
            });

            this.view.SetOnClick("bindBankBtn", (btn, data)=>{
                if (this.model.hasBindBank)
                {
                    Toast.Show("需要修改兑换信息请联系客服");
                }
                else
                {
                    this.ShowBindBankView();
                }
            });

            this.view.SetOnClick("withdrawalsBtn",(btn,data)=>{
                let optionIndex = this.view.optionIndex;
                if (optionIndex == 1)
                {
                    if (!this.model.hasBindAli)
                    {
                        Toast.Show("请绑定支付宝！")
                        return;
                    }
                }
                else
                {
                    if (!this.model.hasBindBank)
                    {
                        Toast.Show("请绑定银行卡！")
                        return;
                    }
                }
                
                if (this.view.changeNum == 0)
                {
                    Toast.Show("请输入或拖选兑换金额！");
                    return;
                }

                let account = "";
                let name = "";
                if (optionIndex == 1)
                {
                    account = this.model.aliAccount;
                    name = this.model.aliName;
                }
                else
                {
                    account = this.model.bankAccount;
                    name = this.model.bankUserName;
                }

                //cc.log("account:",account,"name:",name,"bankId:",this.model.bankId,"amount:",this.view.changeNum*100,"type:",optionIndex - 1);

                let req = TakeMoneyReq.create();
                req.account = account;
                req.name = name;
                req.bankId = this.model.bankId;
                req.amount = this.view.changeNum*100;
                req.type = optionIndex - 1;
                req.tel = this.model.bankTel;
                this.model.ReqWithdraw(req, null);
            });

            this.view.SetOnClick("withdrawRecordBtn", (btn, data)=>{
                this.ShowWithdrawRecordView();
            })
        }

        this.view.Show(()=>{
            this.model.ReqPassage();
        });
    }


    //////////////////////////////////////////////////////////////////////////////
    public ShowBindAliView()
    {
        if (this.viewBindAli == null)
        {
            this.viewBindAli = this.GetView(ViewNames.ViewBindAli) as ViewBindAli;

            this.viewBindAli.SetOnClick("exitBtn",(btn, data)=>{
                this.viewBindAli.Hide();
            });

            this.viewBindAli.SetOnClick("aliPanelBindBtn",(btn, data)=>{
                let account = this.viewBindAli.aliAccountInput.string;
                let isEmail = Util.IsRightEmail(account);
                let isMobile = Util.IsRightMobile(account);
                if (!isEmail && !isMobile)
                {
                    Toast.Show("账号格式输入有误，请重新输入！");
                    return;
                }

                let name = this.viewBindAli.aliNameInput.string;
                let isChineseName = this.IsAllChinese(name);
                if (!isChineseName)
                {
                    Toast.Show("实名制姓名格式输入有误，请重新输入！");
                    return;
                }

                this.model.ReqBindAli(account, name, ()=>{
                    this.viewBindAli.Hide();
                })
            })
        }

        this.viewBindAli.Show(()=>{
        });
    }

    //////////////////////////////////////////////////////////////////////////////
    // 绑定银行卡界面
    public ShowBindBankView()
    {
        if (this.viewBindBank == null)
        {
            this.viewBindBank = this.GetView(ViewNames.ViewBindBank) as ViewBindBank;

            this.viewBindBank.SetOnClick("exitBtn", (btn, data)=>{
                this.viewBindBank.Hide();
            })

            this.viewBindBank.SetOnClick("dropdown",(btn,data)=>{
                this.viewBindBank.ShowDropdownView(true);
            })

            this.viewBindBank.SetOnClick("bankPanelBindBtn",(btn,data)=>{
                let req = BangBankCardReq.create();
                
                // 检测银行卡号
                req.account = this.viewBindBank.bankAccountInput.string;
                if (req.account.length==0)
                {
                    Toast.Show("请输入银行卡号！");
                    return;
                }
                if (req.account.length < 16 || req.account.length > 19)
                {
                    Toast.Show("银行卡账号输入有误，请重新输入！");
                    return;
                }

                // 检测姓名
                req.name = this.viewBindBank.userNameInput.string;
                if (req.name.length == 0)
                {
                    Toast.Show("请输入姓名！");
                    return;
                }
                if (!this.IsAllChinese(req.name))
                {
                    Toast.Show("姓名输入有误，请重新输入！");
                    return;
                }

                req.idCard = "0";
                req.kaihuhang = this.viewBindBank.selectedBankName.string;
                if(req.kaihuhang.length == 0)
                {
                    Toast.Show("开户行不能为空！");
                    return;
                }

                req.kaihuAddress = "不填" + "省" + "不填" + "市";
                req.bankName = "不填";
                req.tel = "";
                req.bankId = this.model.GetBankIdByBankName(req.kaihuhang);

                this.model.ReqBindBank(req, ()=>{
                    this.viewBindBank.Hide();
                })
            })
        }

        this.viewBindBank.Show(()=>{
            this.model.ReqCanUseBankInfoReq();
        });
    }

    //////////////////////////////////////////////////////////////////////////////
    public ShowWithdrawRecordView()
    {
        if (this.viewRecord == null)
        {
            this.viewRecord = this.GetView(ViewNames.ViewWithdrawRecord) as ViewWithdrawRecord;

            this.viewRecord.SetOnClick("exitBtn",(btn, data)=>{
                this.viewRecord.Hide();
            })
        }

        this.viewRecord.Show(()=>{
            this.model.ReqWithdrawRecord();
        });
    }

    //////////////////////////////////////////////////////////////////////////////
    // 检测
    public IsAllChinese(name:string)
    {
        let reg = new RegExp(/^[\u4E00-\u9FA5]+$/);
        if (reg.test(name))
            return true;

        return false;
    }
}

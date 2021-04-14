import View from "../../MVCFramework/View";
import Global from "../../Global/Global";
import { InitRBRoomDataRes } from "../../Protos/RedBlackBattle";
import { GetWithdrawPassageRsp } from "../../Protos/Withdraw";
import Util from "../../Tools/Util";
import ChannelMgr from "../../Manager/ChannelMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewWithdraw extends View 
{
    optionIndex:number = 0;
    changeNum:number = 0;
    currentGold:number = 0;
    atLeastLeftNum:number = 0;
    allowWithdrawGold:number = 0;
    bankDetailNameList:string[];

    bankOptionBtn:cc.Node;
    bankOptionBgSelect:cc.Node;
    bankOptionTextSelect:cc.Node;
    bankOptionBgUnSelect:cc.Node;
    bankOptionTextUnSelect:cc.Node;

    aliOptionBtn:cc.Node;
    aliOptionBgSelect:cc.Node;
    aliOptionTextSelect:cc.Node;
    aliOptionBgUnSelect:cc.Node;
    aliOptionTextUnSelect:cc.Node;

    aliDesc:cc.Label;
    bankDesc:cc.Label;
    goldItemText:cc.Label;
    bindBankAccount:cc.Label;
    bindAliAccount:cc.Label;

    bindAli:cc.Node;
    bindBank:cc.Node;
    passageContent:cc.Node;

    inputField:cc.EditBox;


    public OnAwake()
    {
        this.bankOptionBtn = this.FindTransform("bankOptionBtn");
        this.bankOptionBgSelect = this.FindTransform("bankOptionBgSelect");
        this.bankOptionTextSelect = this.FindTransform("bankOptionTextSelect");
        this.bankOptionBgUnSelect = this.FindTransform("bankOptionBgUnSelect");
        this.bankOptionTextUnSelect = this.FindTransform("bankOptionTextUnSelect");

        this.aliOptionBtn = this.FindTransform("aliOptionBtn");
        this.aliOptionBgSelect = this.FindTransform("aliOptionBgSelect");
        this.aliOptionTextSelect = this.FindTransform("aliOptionTextSelect");
        this.aliOptionBgUnSelect = this.FindTransform("aliOptionBgUnSelect");
        this.aliOptionTextUnSelect = this.FindTransform("aliOptionTextUnSelect");

        this.aliDesc = this.FindTransform("aliDesc").getComponent(cc.Label);
        this.bankDesc = this.FindTransform("bankDesc").getComponent(cc.Label);
        this.goldItemText = this.FindTransform("goldItemText").getComponent(cc.Label);
        this.bindBankAccount = this.FindTransform("bindBankAccount").getComponent(cc.Label);
        this.bindAliAccount = this.FindTransform("bindAliAccount").getComponent(cc.Label);

        this.bindAli = this.FindTransform("bindAli");
        this.bindBank = this.FindTransform("bindBank");

        this.passageContent = this.FindTransform("passageContent");

        this.inputField = this.FindTransform("inputField").getComponent(cc.EditBox);
        Util.AddEditTextChangedEvent(this.inputField, (editBox, data)=>{
            if (this.inputField.string == "-")
            {
                this.inputField.string = "";
                return;
            }
            if (this.inputField.string == "")
            {
                this.changeNum = 0;
                return;
            }
            let inputValue = Number(this.inputField.string);
            if (inputValue <= 0)
            {
                this.inputField.string = "";
                this.changeNum = 0;
                return;
            }

            this.changeNum = inputValue;
            if (this.changeNum > this.allowWithdrawGold)
            {
                this.changeNum = this.allowWithdrawGold;
                this.inputField.string = this.changeNum.toString();
            }
        })

        this.InitInfo();
    }

    public InitInfo()
    {
        this.atLeastLeftNum = 10;
        this.bankDetailNameList = [];
        this.optionIndex = 0;
    }

    public OnShowView()
    {
        this.currentGold = Number(Global.PlayerInfo.PlayerCurrency.Gold);
        this.allowWithdrawGold = Math.floor(this.currentGold / 100 - this.atLeastLeftNum);

        if (this.allowWithdrawGold < 0)
            this.allowWithdrawGold = 0;

        this.goldItemText.string = (this.currentGold/100).toFixed(2);
        
        this.changeNum = 0;
    }

    public ResetInputNum()
    {
        this.inputField.string = "";
        this.changeNum = 0;
    }

    public OptionBtnClick(index:number)
    {
        if (this.optionIndex == index)
            return;

        this.optionIndex = index;

        let isAliBtn = this.optionIndex == 1;

        if(isAliBtn)
        {
            this.aliOptionBgSelect.active = true;
            this.aliOptionTextSelect.active = true;
            this.aliOptionBgUnSelect.active = false;
            this.aliOptionTextUnSelect.active = false;

            this.bankOptionBgSelect.active = false;
            this.bankOptionTextSelect.active = false;
            this.bankOptionBgUnSelect.active = true;
            this.bankOptionTextUnSelect.active = true;
        }
        else
        {
            this.aliOptionBgSelect.active = false;
            this.aliOptionTextSelect.active = false;
            this.aliOptionBgUnSelect.active = true;
            this.aliOptionTextUnSelect.active = true;

            this.bankOptionBgSelect.active = true;
            this.bankOptionTextSelect.active = true;
            this.bankOptionBgUnSelect.active = false;
            this.bankOptionTextUnSelect.active = false;
        }

        this.bindAli.active = isAliBtn;
        this.bindBank.active = !isAliBtn;
        this.bankDesc.node.active=!isAliBtn;
        this.aliDesc.node.active=isAliBtn;

        this.ResetInputNum();
    }

    public UpdateWithdraw()
    {
        this.currentGold = Number(Global.PlayerInfo.PlayerCurrency.Gold);
        this.allowWithdrawGold = Math.floor(this.currentGold/100 - this.atLeastLeftNum);

        if (this.allowWithdrawGold < 0)
            this.allowWithdrawGold = 0;

        this.goldItemText.string = (this.currentGold/100).toFixed(2);
        this.changeNum = 0;
        this.ResetInputNum();
    }

    public UpdateWithdrawPassage(passage:any)
    {
        let data = passage as GetWithdrawPassageRsp;
        this.aliOptionBtn.active = data.hasAli;
        this.bankOptionBtn.active = data.hasBank;
    }

    public UpdateAliInfo(aliAccount:string)
    {
        if (aliAccount==null || aliAccount.length == 0)
        {
            this.bindAliAccount.string = "未绑定支付宝账号";
        }
        else
        {
            this.bindAliAccount.string = aliAccount;
        }
        let finalStra="";
        if(ChannelMgr.IsQmxy06a()){
            //finalStra=string


        }
    }

    public UpdateBankInfo(bankAccount:string)
    {
        if (bankAccount==null || bankAccount.length == 0)
        {
            this.bindBankAccount.string = "未绑定银行卡账号";
        }
        else
        {
            this.bindBankAccount.string = bankAccount;
        }
    }

    public AddGoldToMax()
    {
        this.changeNum = this.allowWithdrawGold;
        this.inputField.string = this.changeNum.toString();
    }

    public AddGoldNum(num:number)
    {
        this.changeNum += num;
        if (this.changeNum > this.allowWithdrawGold)
            this.changeNum = this.allowWithdrawGold;
        
        this.inputField.string = this.changeNum.toString();
    }
}

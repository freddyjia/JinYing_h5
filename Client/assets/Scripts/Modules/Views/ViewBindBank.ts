import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import { IBankInfoPro } from "../../Protos/Withdraw";
import ListView, { ListViewScrollStyle, Cell } from "../../Components/ListView";


///////////////////////////////////////////////////////////////////////////////
// BankItemView
class BankItemView extends Cell
{
    bankName:cc.Label;
    btnItem:cc.Button;

    bankInfo:IBankInfoPro;
}


///////////////////////////////////////////////////////////////////////////////
const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewBindBank extends View 
{
    userNameInput:cc.EditBox;
    bankAccountInput:cc.EditBox;
    selectedBankName:cc.Label;
    DropdownContent:cc.Node;
    ListViewItemCopy:cc.Node;
    BankListView:cc.Node;

    countOfRows:number;
    BankInfoListView:ListView;
    bankInfoList:IBankInfoPro[];

    public OnAwake()
    {
        this.userNameInput = this.FindTransform("userNameInput").getComponent(cc.EditBox);
        this.bankAccountInput = this.FindTransform("bankAccountInput").getComponent(cc.EditBox);
        this.selectedBankName = this.FindTransform("selectedBankName").getComponent(cc.Label);
        this.DropdownContent = this.FindTransform("DropdownContent");
        this.ListViewItemCopy = this.FindTransform("ListViewItemCopy");
        this.BankListView = this.FindTransform("BankListView");

        this.CreateListView();

        Util.SetClickAction(this.FindTransform("DropdownContentMask").getComponent(cc.Button),(btn,data)=>{
            this.ShowDropdownView(false);
        })

        Util.AddEditTextChangedEvent(this.userNameInput, (text:string, box, data)=>{
            this.userNameInput.string = this.FilterSpecialChar(text);
        })

        Util.AddEditTextChangedEvent(this.bankAccountInput, (text:string, box, data)=>{
            
        })
    }

    public CreateListView()
    {
        this.countOfRows = 0;
        let listView = this.BankListView.getComponent(ListView);
        listView.Init(
            ListViewScrollStyle.Top,
            (row:number)=>
            {
                return 56;
            },
            ()=>
            {
                return this.countOfRows;
            },
            ()=>
            {
                let nodeItem = cc.instantiate(this.ListViewItemCopy) as cc.Node;
                nodeItem.active = true;

                let bankItem = new BankItemView();
                bankItem.content = nodeItem;
                bankItem.bankName = cc.find("bankName", nodeItem).getComponent(cc.Label);
                bankItem.btnItem = nodeItem.getComponent(cc.Button);
                Util.SetClickAction(bankItem.btnItem, (btn, data)=>{
                    this.ShowDropdownView(false);

                    this.selectedBankName.string = bankItem.bankInfo.bankName;
                });

                return bankItem;
            },
            (cell:Cell)=>
            {
                let bankItem = cell as BankItemView;
                bankItem.bankInfo = this.bankInfoList[bankItem.row];
                bankItem.bankName.string = bankItem.bankInfo.bankName;
            }
        )
        this.BankInfoListView = listView;
    }

    public OnShowView()
    {
        this.ShowDropdownView(false);

        this.userNameInput.string = "";
        this.bankAccountInput.string = "";
        this.selectedBankName.string = "";
    }

    public ShowDropdownView(show:boolean)
    {
        this.DropdownContent.active = show;
    }

    public UpdateWithdrawBankList(bankList:IBankInfoPro[])
    {
        this.bankInfoList = bankList;
        this.countOfRows = bankList.length;
        this.BankInfoListView.Refresh();
    }

    public FilterSpecialChar(text:string)
    {
        let finalStr = text.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
        finalStr = finalStr.replace("！","");
        finalStr = finalStr.replace("【","");
        finalStr = finalStr.replace("】","");
        finalStr = finalStr.replace("、","");
        finalStr = finalStr.replace("；","");
        finalStr = finalStr.replace("‘","");
        finalStr = finalStr.replace("’","");
        finalStr = finalStr.replace("：","");
        finalStr = finalStr.replace("“","");
        finalStr = finalStr.replace("”","");
        finalStr = finalStr.replace("，","");
        finalStr = finalStr.replace("。","");
        finalStr = finalStr.replace("—","");
        finalStr = finalStr.replace("《","");
        finalStr = finalStr.replace("》","");
        finalStr = finalStr.replace("？","");
        finalStr = finalStr.replace("…","");
        finalStr = finalStr.replace("￥","");
        finalStr = finalStr.replace("（","");
        finalStr = finalStr.replace("）","");
        return finalStr;
    }
}

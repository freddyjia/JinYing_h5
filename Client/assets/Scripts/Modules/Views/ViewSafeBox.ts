import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import Global from "../../Global/Global";
import ccC from "../../Tools/ccC";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewSafeBox extends View 
{
    depositOptionBgSelect:cc.Node;
    depositOptionImageSelect:cc.Node;
    depositOptionBgUnSelect:cc.Node;
    depositOptionImageUnSelect:cc.Node;

    withdrawalsOptionBgSelect:cc.Node;
    withdrawalsOptionImageSelect:cc.Node;
    withdrawalsOptionBgUnSelect:cc.Node;
    withdrawalsOptionImageUnSelect:cc.Node;

    goldItemText:cc.Label;
    safeItemText:cc.Label;
    sliderProgress:cc.Sprite;

    inputField:cc.EditBox;
    slider:cc.Slider;

    depositBtn:cc.Node;
    withdrawalsBtn:cc.Node;
    
    canChangeInputNum:boolean;
    canChangeSliderValue:boolean;
    changeNum:number;

    //存取款模式，1为存款，2为取款
    optionIndex:number; 

    currentGold:number;
    safeBoxGold:number;

    public OnAwake()
    {
        this.depositOptionBgSelect = this.FindTransform("depositOptionBgSelect");
        this.depositOptionImageSelect = this.FindTransform("depositOptionImageSelect");
        this.depositOptionBgUnSelect = this.FindTransform("depositOptionBgUnSelect");
        this.depositOptionImageUnSelect = this.FindTransform("depositOptionImageUnSelect");

        this.withdrawalsOptionBgSelect = this.FindTransform("withdrawalsOptionBgSelect");
        this.withdrawalsOptionImageSelect = this.FindTransform("withdrawalsOptionImageSelect");
        this.withdrawalsOptionBgUnSelect = this.FindTransform("withdrawalsOptionBgUnSelect");
        this.withdrawalsOptionImageUnSelect = this.FindTransform("withdrawalsOptionImageUnSelect");
        this.sliderProgress = this.FindTransform("SliderProgress").getComponent(cc.Sprite);

        this.goldItemText = this.FindTransform("goldItemText").getComponent(cc.Label);
        this.safeItemText = this.FindTransform("safeItemText").getComponent(cc.Label);

        this.inputField = this.FindTransform("inputField").getComponent(cc.EditBox);
        this.slider = this.FindTransform("Slider").getComponent(cc.Slider);

        this.depositBtn = this.FindTransform("depositBtn");
        this.withdrawalsBtn = this.FindTransform("withdrawalsBtn");

        Util.SetSliderValueChangeEvent(this.slider, (slider, data)=>{
            this.OnSliderValueChangeEvent();
        })

        Util.AddEditTextChangedEvent(this.inputField, (text, eidtBox, data)=>{
            this.OnEditorTextChangedEvent();
        });

        //todo
        this.AdjustSpecialChannel();
    }

    OnSliderValueChangeEvent()
    {
        this.canChangeSliderValue = false;
        let formNum = 0;
        let toNum = 0;
        if (this.optionIndex == 1)
        {
            formNum = this.currentGold / 100;
            toNum = this.safeBoxGold / 100;
        }
        else
        {
            formNum = this.safeBoxGold / 100;
            toNum = this.currentGold / 100;
        }

        if (this.canChangeInputNum)
        {
            this.changeNum = Math.floor(formNum*this.slider.progress);
        }

        formNum -= this.changeNum;
        toNum += this.changeNum;

        if (this.optionIndex == 1)
        {
            this.goldItemText.string = Util.formatGoldText(formNum*100,false);
            this.safeItemText.string = Util.formatGoldText(toNum*100,false);
        }
        else
        {
            this.goldItemText.string = Util.formatGoldText(toNum*100,false);
            this.safeItemText.string = Util.formatGoldText(formNum*100,false);
        }

        if (this.canChangeInputNum)
        {
            this.inputField.string = this.changeNum.toString();
        }

        this.canChangeInputNum = true;
        this.sliderProgress.fillStart = this.slider.progress;
    }

    OnEditorTextChangedEvent()
    {
        if (this.inputField.string == "_")
        {
            this.inputField.string = "";
            return;
        }
        if (this.inputField.string == "")
        {
            this.changeNum = 0;
            this.slider.progress = 0;
        }
        if (Number(this.inputField.string) <= 0)
        {
            this.inputField.string = "0";
            this.changeNum = 0;
            this.slider.progress = 0;
        }

        this.canChangeInputNum = false;

        let fromNum = 0;
        let toNum = 0;
        if (this.optionIndex == 1)
        {
            fromNum = this.currentGold / 100;
            toNum = this.safeBoxGold / 100;
        }
        else
        {
            fromNum = this.safeBoxGold / 100;
            toNum = this.currentGold / 100;
        }
        this.changeNum = Number(this.inputField.string);
        if (this.changeNum > fromNum)
        {
            this.changeNum = Math.floor(fromNum);
            this.inputField.string = this.changeNum.toString();

            if (this.canChangeSliderValue)
            {
                if (this.changeNum > 0)
                {
                    if (this.slider.progress >= 1)
                        this.canChangeInputNum = true;
                    else
                        this.slider.progress = 1;
                }
                else
                {
                    this.slider.progress = 0;
                }
            }
        }
        else
        {
            if (this.canChangeSliderValue)
            {
                if (Math.floor(fromNum) > 0)
                {
                    let sliderValue = this.changeNum / fromNum;
                    this.slider.progress = sliderValue;
                }
                else
                {
                    this.slider.progress = 0;
                }
            }
        }
        this.OnSliderValueChangeEvent();
        this.canChangeSliderValue = true;
        this.sliderProgress.fillStart = this.slider.progress;
    }

    public AdjustSpecialChannel()
    {

    }

    public OnShowView()
    {
        this.optionIndex = 0;
        this.OptionBtnClick(1);
        this.canChangeSliderValue = true;
        this.canChangeInputNum = true;
        this.changeNum = 0;
    }

    public OptionBtnClick(index:number)
    {
        if (this.optionIndex == index)
            return;

        this.optionIndex = index;
        this.slider.progress = 0;
        this.OnSliderValueChangeEvent();
        let isDepositBtn = this.optionIndex == 1;

        if (isDepositBtn)
        {
            this.slider.enabled = this.currentGold > 0;

            this.depositOptionBgSelect.active = true;
            this.depositOptionImageSelect.active = true;
            this.depositOptionBgUnSelect.active = false;
            this.depositOptionImageUnSelect.active = false;

            this.withdrawalsOptionBgSelect.active = false;
            this.withdrawalsOptionImageSelect.active = false;
            this.withdrawalsOptionBgUnSelect.active = true;
            this.withdrawalsOptionImageUnSelect.active = true;
        }
        else
        {
            this.slider.enabled = this.safeBoxGold > 0;

            this.depositOptionBgSelect.active = false;
            this.depositOptionImageSelect.active = false;
            this.depositOptionBgUnSelect.active = true;
            this.depositOptionImageUnSelect.active = true;

            this.withdrawalsOptionBgSelect.active = true;
            this.withdrawalsOptionImageSelect.active = true;
            this.withdrawalsOptionBgUnSelect.active = false;
            this.withdrawalsOptionImageUnSelect.active = false;
        }

        this.depositBtn.active = isDepositBtn;
        this.withdrawalsBtn.active = !isDepositBtn;
        this.ResetInputNum();
        this.sliderProgress.fillStart = this.slider.progress;
    }

    public ResetInputNum()
    {
        this.inputField.string = "";
    }

    public SetSliderMaxValue()
    {
        if (this.optionIndex == 1)
        {
            if (this.currentGold <= 0)
                return;
        }
        else
        {
            if (this.safeBoxGold <= 0)
                return;
        }

        this.slider.progress = 1;
        this.OnSliderValueChangeEvent();
        this.sliderProgress.fillStart = this.slider.progress;
    }

    public GetChangeGold()
    {
        return this.changeNum * 100;
    }

    public ResetToOriginalStatus()
    {
        this.slider.progress = 0;
        this.canChangeInputNum = true;
        this.ResetInputNum();
        this.sliderProgress.fillStart = this.slider.progress;
    }

    public UpdateSafeBoxGold(useless:number)
    {
        this.currentGold = Number(Global.PlayerInfo.PlayerCurrency.Gold);
        this.goldItemText.string = Util.formatGoldText(this.currentGold, false);
        this.safeBoxGold = Global.PlayerInfo.PlayerCurrency.SafeBox;
        this.safeItemText.string = Util.formatGoldText(this.safeBoxGold, false);
        this.ResetToOriginalStatus();

        if (this.optionIndex == 1)
        {
            this.slider.enabled = this.currentGold > 0;
        }
        else
        {
            this.slider.enabled = this.safeBoxGold > 0;
        }
    }
}
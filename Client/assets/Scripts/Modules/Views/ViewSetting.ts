import View from "../../MVCFramework/View";
import Util from "../../Tools/Util";
import AudioManager from "../../Manager/AudioManager";
import LocalStorageKey from "../../Global/LocalStorageKey";

export default class ViewSetting extends View 
{
    public SliderMusic:cc.Slider;
    public SliderEffect:cc.Slider;
    private closeBtn:cc.Button;
    private SliderMusicProgress:cc.Sprite;
    private SliderEffectProgress:cc.Sprite;

    public OnAwake()
    {
        this.SliderMusic = this.FindTransform("SliderMusic").getComponent(cc.Slider);
        this.SliderEffect = this.FindTransform("SliderEffect").getComponent(cc.Slider);
        this.closeBtn = this.FindTransform("Close").getComponent(cc.Button);
        this.SliderMusicProgress = this.FindTransform("SliderMusicProgress").getComponent(cc.Sprite);
        this.SliderEffectProgress = this.FindTransform("SliderEffectProgress").getComponent(cc.Sprite);

        Util.SetSliderValueChangeEvent(this.SliderMusic,(slider,data)=>{
            AudioManager.GetInstance().SetBgmVolume(slider.progress);
            this.SliderMusicProgress.fillRange = slider.progress;
        });

        Util.SetSliderValueChangeEvent(this.SliderEffect,(slider,data)=>{
            AudioManager.GetInstance().SetAudioVolume(slider.progress);
            this.SliderEffectProgress.fillRange = slider.progress;
        });

        Util.SetClickAction(this.closeBtn,()=>{
            this.Hide();
        });

    }

    public OnShowView()
    {
        let progress = parseFloat(localStorage.getItem(LocalStorageKey.BgmVolume));
        this.SliderMusic.progress = progress;
        this.SliderMusicProgress.fillRange = progress;

        progress = parseFloat(localStorage.getItem(LocalStorageKey.AudioVolume));
        this.SliderEffect.progress = progress;
        this.SliderEffectProgress.fillRange = progress;

    }
}

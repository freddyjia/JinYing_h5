export default class BullConfig {
    public static readonly ConstNiuNiu = {
        id:1,
        betMaxGold:0.2,
        inBattleGold:30000,
        winCommissionByBanker:0.08,
        seatNeetGold:150000,
        applyBankerNeetGold:500000,
        continueBankerNum:5,
        leaveBankerGold:150000,
        commissionAheadRatio:0.1,
        dayLoseMaxGold:100000000,
        applyBankerMaxGold:10000000,
        GoldPerBet:{
            [1]:1,
            [2]:10,
            [3]:50,
            [4]:100,
            [5]:500,
        },
        MAX_CHIP_NUM_PER_SLOT:40,   //每个筹码堆里最多只显示筹码的数量
        REQ_BANKER_STATUS:{
            bankerUp:1,     //请求上庄成功
            bankerDown:2,   //请求下庄成功
            preDown:3,      //自己是庄家，请求下庄成功但本轮还没结束，自己还是庄家
        },
        centerPosiList:{
            [1]:{x:0,y:160},
            [2]:{x:-136,y:600},
            [3]:{x:-64,y:600},
            [4]:{x:64,y:600},
            [5]:{x:136,y:600},
        },
        flyXingxingCenterList:{
            [1]:{x:87,y:24.7},
            [2]:{x:198.8,y:35},
            [3]:{x:320.4,y:43.8},
            [4]:{x:413.1,y:51.5},
        },
        HeavyBet:300000,    //重注值，达到这个值就播放特殊音效
    };

    public static Atlas={
        bullAtlas:"SubGames/Bull/Atlas/Bull",
        textureNoAtlas:"SubGames/Bull/TextureNoAtlas/",
        smallGameCommonsAtlas:"MainGame/Atlas/SmallGameCommons",
        sprite:"BRNN_niu_",
        multipleNiu:"BRNN_multiple",
        btnSprite:{
            enable:"BaiRenNiuNiu_BattleIcon_01",
            disable:"BaiRenNiuNiu_BattleIcon_07",
            selected:"BaiRenNiuNiu_BattleIcon_08"
        },
    };

    public static Message={
        chf1:"点击入座",
        chf2:"您正在玩游戏，请该局结束之后退出",
        chf3:"您当前是庄家，请下庄后退出游戏",
        chf4:"进入房间需要您的金币数达到%s",
        chf5:"上庄需要您的金币数达到%s",
        chf6:"上座需要您的金币数达到%s",
        chf7:"上庄至少需要%s",
    };

    public static RewardTotalNumImage={atlas:"UIs/Bull/UI/Texture/Atlas/number/number.png", sprite:"hr_%02d"};
    public static PokeCardImagesURL={atlas:"UIs/Bull/UI/Texture/Atlas/poke/poke.png", sprite:"%s"};
    public static BetButtonIcon={
        atlas:"UIs/Bull/UI/Texture/Atlas/button/button.png",
        sprite:{
            enable:"BaiRenNiuNiu_BattleIcon_01",
            disable:"BaiRenNiuNiu_BattleIcon_07",
            selected:"BaiRenNiuNiu_BattleIcon_08",
        },
    };
    public static Music={
        SoundBgm:"MainGame/Audios/GameAudio/Casino_bgm",
        SoundSpecialBgm:"MainGame/Audios/GameAudio/Special_bgm",
        SoundWin:"MainGame/Audios/GameAudio/Win_casino",
        SoundLose:"MainGame/Audios/GameAudio/Lose_casino",
        SoundCountDown:"MainGame/Audios/GameAudio/Count_down",
        SoundBet1:"MainGame/Audios/GameAudio/Start_bets1",
        SoundBet2:"MainGame/Audios/GameAudio/Start_bets2",
        SoundStopBet:"MainGame/Audios/GameAudio/Stop_bets",
        SoundTakeChip:"MainGame/Audios/GameAudio/Take_bets",
        SoundShuffle:"MainGame/Audios/GameAudio/Cattle_shuffle",
        VoiceStartBet:"MainGame/Audios/GameAudio/Voice_startbet",
        VoiceStopBet:"MainGame/Audios/GameAudio/Voice_stopbet",
        VoiceWaoW:"MainGame/Audios/GameAudio/Voice_waow",
        VoiceNiu0:"MainGame/Audios/GameAudio/Voice_nocow",
        VoiceNiu1:"MainGame/Audios/GameAudio/Voice_cow1",
        VoiceNiu2:"MainGame/Audios/GameAudio/Voice_cow2",
        VoiceNiu3:"MainGame/Audios/GameAudio/Voice_cow3",
        VoiceNiu4:"MainGame/Audios/GameAudio/Voice_cow4",
        VoiceNiu5:"MainGame/Audios/GameAudio/Voice_cow5",
        VoiceNiu6:"MainGame/Audios/GameAudio/Voice_cow6",
        VoiceNiu7:"MainGame/Audios/GameAudio/Voice_cow7",
        VoiceNiu8:"MainGame/Audios/GameAudio/Voice_cow8",
        VoiceNiu9:"MainGame/Audios/GameAudio/Voice_cow9",
        VoiceNiu10:"MainGame/Audios/GameAudio/Voice_cowcow",
        VoiceNiu11:"MainGame/Audios/GameAudio/Voice_zhadancow",
        VoiceNiu12:"MainGame/Audios/GameAudio/Voice_wuhuacow",
    };
    public static TrendIcon={atlas:"UIs/Bull/UI/Texture/Atlas/icon/icon.png", sprite:"pmd_%s"};
    public static CrownImage={atlas:"UIs/Atlas/Common.png", sprite:"no%s"};
    public static NiuNiuType={
        WUNIU:0,			//无牛
        NIUYI:1,			//牛一
        NIUER:2,			//牛二
        NIUSAN:3,			//牛三
        NIUSI:4,			//牛四
        NIUWU:5,			//牛五
        NIULIU:6,			//牛六
        NIUQI:7,			//牛七
        NIUBA:8,			//牛八
        NIUJIU:9,			//牛九
        NIUNIU:10,		    //牛牛
        ZHADAN:11,		    //炸弹
        WUHUANIU:12,		//五花牛
    };
}

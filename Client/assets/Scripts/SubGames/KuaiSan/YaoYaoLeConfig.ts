
export  class  YaoYaoLeConfig {
  public static  Const={
         GoldPerBet:[1,10,50,100,500],
         MAX_CHIP_NUM_PER_SLOT:40,
         REQ_BANKER_STATUS:{
            bankerUp:1,
            bankerDown:2,
            preDown:3,
         },
         HeavyBet:300000,
         flyXingxingCenterList:[
            {x:352,y:35},   //大
            {x:61,y:15},    //小
            {x:218,y:35},   //和
            {x:45,y:-82},   //豹子1
            {x:137,y:-34},  //豹子2
            {x:231,y:-34},  //豹子3
            {x:300,y:-34},  //豹子4
            {x:376,y:-34},  //豹子5
            {x:455,y:-34},  //豹子6
        ],
        flyXingxingCenterKuaiSanList:[
            {x:74,y:-50},   //一点
            {x:223,y:-6},   //两点
            {x:389,y:-6},   //三点
            {x:108,y:-93},  //四点
            {x:250,y:-44},  //五点
            {x:407,y:-44},  //六点
            {x:75,y:9},     //大
            {x:187,y:29},   //小
            {x:291,y:29},   //单
            {x:403,y:38},   //双
        ], 
        
    };
    public static GameStatus={
        PreStartBet:1,     //摇骰子阶段.
        StartBet:2,        //开始下注
        StopBet:3,         //停止下注
        Deal:4,            //开奖状态
        None:5             //无状态
    };
    public static Altas={
        YaoYaoLeAtlas : "SubGames/YaoYaoLe/UI/TexureAtlas/YYL",
        textureNoAtlas : "SubGames/YaoYaoLe/UI/TextureNoAtlas/",
        smallGameCommonsAtlas : "MainGame/UI/Texture/Atlas/SmallGameCommons.png",
    };
    public static Audio={
        SoundBgm : "SubGames/YaoYaoLe/Audios/yyl_bgm",
        SoundOpenSai : "SubGames/YaoYaoLe/Audios/reward_dice",
        SoundYaoSai : "SubGames/YaoYaoLe/Audios/roll_dice",
        SoundSpecialBgm : "MainGame/Audios/GameAudio/Special_bgm",
        SoundWin : "MainGame/Audios/GameAudio/Win_casino",
        SoundLose : "MainGame/Audios/GameAudio/Lose_casino",
        SoundCountDown : "MainGame/Audios/GameAudio/Count_down",
        SoundBet1 : "MainGame/Audios/GameAudio/Start_bets1",
        SoundBet2 : "MainGame/Audios/GameAudio/Start_bets2",
        SoundStopBet : "MainGame/Audios/GameAudio/Stop_bets",
        SoundTakeChip : "MainGame/Audios/GameAudio/Take_bets",
        VoicePoint1 : "SubGames/YaoYaoLe/Audios/Voice_1p",
        VoicePoint2 : "SubGames/YaoYaoLe/Audios/Voice_2p",
        VoicePoint3 : "SubGames/YaoYaoLe/Audios/Voice_3p",
        VoicePoint4 : "SubGames/YaoYaoLe/Audios/Voice_4p",
        VoicePoint5 : "SubGames/YaoYaoLe/Audios/Voice_5p",
        VoicePoint6 : "SubGames/YaoYaoLe/Audios/Voice_6p",
        VoicePoint7 : "SubGames/YaoYaoLe/Audios/Voice_7p",
        VoicePoint8 : "SubGames/YaoYaoLe/Audios/Voice_8p",
        VoicePoint9 : "SubGames/YaoYaoLe/Audios/Voice_9p",
        VoicePoint10 : "SubGames/YaoYaoLe/Audios/Voice_10p",
        VoicePoint11 : "SubGames/YaoYaoLe/Audios/Voice_11p",
        VoicePoint12 : "SubGames/YaoYaoLe/Audios/Voice_12p",
        VoiceDa : "SubGames/YaoYaoLe/Audios/Voice_dice_da",
        VoiceXiao : "SubGames/YaoYaoLe/Audios/Voice_dice_xiao",
        VoiceHe : "SubGames/YaoYaoLe/Audios/Voice_draw",
        VoiceBaoZi : "SubGames/YaoYaoLe/Audios/Voice_baozi",
        VoiceStartBet : "MainGame/Audios/GameAudio/Voice_startbet",
        VoiceStopBet : "MainGame/Audios/GameAudio/Voice_stopbet",
        VoiceWaoW : "MainGame/Audios/GameAudio/Voice_waow",
        VoiceTouch1 : "SubGames/YaoYaoLe/Audios/Voice_hd6-1",
        VoiceTouch2 : "SubGames/YaoYaoLe/Audios/Voice_hd6-2",
        VoiceTouch3 : "SubGames/YaoYaoLe/Audios/Voice_hd7-1",
        VoiceTouch4 : "SubGames/YaoYaoLe/Audios/Voice_hd7-2",
        VoiceYaoSai1 : "SubGames/YaoYaoLe/Audios/Voice_dice_yaosai1",
        VoiceYaoSai2 : "SubGames/YaoYaoLe/Audios/Voice_dice_yaosai2",
        VoiceYaoSai3 : "SubGames/YaoYaoLe/Audios/Voice_dice_yaosai3",
        VoiceMotion1_1 : "SubGames/YaoYaoLe/Audios/Voice_hd1-1",
        VoiceMotion1_2 : "SubGames/YaoYaoLe/Audios/Voice_hd1-2",
        VoiceMotion2 : "SubGames/YaoYaoLe/Audios/Voice_hd2",
        VoiceMotion3 : "SubGames/YaoYaoLe/Audios/Voice_hd3",
        VoiceMotion5 : "SubGames/YaoYaoLe/Audios/Voice_hd5",

    };
}

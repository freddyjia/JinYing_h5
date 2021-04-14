export default class QNNConfig {


    public static useEditorModel = false
    public static editorLocalPlayerId = "2190000022892"

    public static headAtlas = "MainGame/Atlas/Head"

    public static atlas = "SubGames/QNN/Atlas/QNN";
    logo2 = "SubGames/QNN/TextureNoAtlas/qnn_logo2";

    public static time = {

        QNNFirstCenterRoom: 0.5,
        QNNGameStartAnim: 5,           //播放游戏开始动画
        QNNShowQiangzhuang: 5,       //显示抢庄界面
        QNNXiazhuangBeishu: 0,
        QNNShowzhuangAnim: 4,
        QNNSureZhuangPlayer: 1,
        QNNShowTouzhuPanel: 5,
        QNNShowPlayerTouzhuCnt: 0,
        QNNFapai: 3,
        QNNNiuTouAnim: 2,
        QNNFanpai: 0,
        QNNFapaiNoAnim: 0,
        QNNTryFapai: 0,
        QNNShowNiuX: 0,
        QNNShowGameOver: 6,
        QNNAddNewPlayer: 0,
        QNNLocalPlayerActionRsp: 0,
        QNNFlushZhuangCnt: 0,
        QNNFlushGold: 0,
        QNNPlayerLeave: 0,
        QNNResetAllPayerCards: 0,
        QNNAllPlayerHasFanpai: 0,
        QNNAllPlayerFanpai: 0,
    };

    public static Audio = {
        SoundBgm: "SubGames/QNN/Audios/GrabCattle_bgm",
        SoundShuffle: "MainGame/Audios/GameAudio/Cattle_shuffle",  //发牌音效
        RandomSelectZhuang: "SubGames/QNN/Audios/Dealer_choose",
        SoundBankerDefine: "SubGames/QNN/Audios/Dealer_define",
        VoiceNiu0: "MainGame/Audios/GameAudio/Voice_nocow",
        VoiceNiu1: "MainGame/Audios/GameAudio/Voice_cow1",
        VoiceNiu2: "MainGame/Audios/GameAudio/Voice_cow2",
        VoiceNiu3: "MainGame/Audios/GameAudio/Voice_cow3",
        VoiceNiu4: "MainGame/Audios/GameAudio/Voice_cow4",
        VoiceNiu5: "MainGame/Audios/GameAudio/Voice_cow5",
        VoiceNiu6: "MainGame/Audios/GameAudio/Voice_cow6",
        VoiceNiu7: "MainGame/Audios/GameAudio/Voice_cow7",
        VoiceNiu8: "MainGame/Audios/GameAudio/Voice_cow8",
        VoiceNiu9: "MainGame/Audios/GameAudio/Voice_cow9",
        VoiceNiu10: "MainGame/Audios/GameAudio/Voice_cowcow",
        VoiceNiu11: "MainGame/Audios/GameAudio/Voice_wuhuacow",
        VoiceNiu12: "MainGame/Audios/GameAudio/Voice_zhadancow",
        SoundWin: "MainGame/Audios/GameAudio/Win_casino",
        SoundLose: "MainGame/Audios/GameAudio/Lose_casino",
        SoundFlyGold: "MainGame/Audios/GameAudio/Take_bets",
        SoundTimeLeft: "MainGame/Audios/GameAudio/Count_down",
        SoundStartQiangzhuang: "SubGames/QNN/Audios/Voice_nn_ksqz",
        SoundFanpai: "SubGames/QNN/Audios/Voice_nn_qtp",
        SoundTouzhu: "SubGames/QNN/Audios/Voice_nn_qxz",
        Man: {
            Talk1: "SubGames/QNN/Audios/_man/1",
            Talk2: "SubGames/QNN/Audios/_man/2",
            Talk3: "SubGames/QNN/Audios/_man/3",
            Talk4: "SubGames/QNN/Audios/_man/4",
            Talk5: "SubGames/QNN/Audios/_man/5",
            Talk6: "SubGames/QNN/Audios/_man/6",
            Add5: "SubGames/QNN/Audios/_man/add5",
            Add10: "SubGames/QNN/Audios/_man/add10",
            Add15: "SubGames/QNN/Audios/_man/add15",
            Add20: "SubGames/QNN/Audios/_man/add20",
            Call1: "SubGames/QNN/Audios/_man/call1",
            Call2: "SubGames/QNN/Audios/_man/call2",
            Call4: "SubGames/QNN/Audios/_man/call4",
            Call0: "SubGames/QNN/Audios/_man/notcall_1",
        },
        Woman: {
            Talk1: "SubGames/QNN/Audios/_woman/1",
            Talk2: "SubGames/QNN/Audios/_woman/2",
            Talk3: "SubGames/QNN/Audios/_woman/3",
            Talk4: "SubGames/QNN/Audios/_woman/4",
            Talk5: "SubGames/QNN/Audios/_woman/5",
            Talk6: "SubGames/QNN/Audios/_woman/6",
            Add5: "SubGames/QNN/Audios/_woman/add5",
            Add10: "SubGames/QNN/Audios/_woman/add10",
            Add15: "SubGames/QNN/Audios/_woman/add15",
            Add20: "SubGames/QNN/Audios/_woman/add20",
            Call1: "SubGames/QNN/Audios/_woman/call1",
            Call2: "SubGames/QNN/Audios/_woman/call2",
            Call4: "SubGames/QNN/Audios/_woman/call4",
            Call0: "SubGames/QNN/Audios/_woman/notcall_1",
        },
    };

    public static tLocalPlayerFanpai = {
        localScale: 0.7,
        startPosX: -76.4,
        posY: -216.7,
        cardSpace: 41.8,
    };

    public static niuCardStandPosY = 25;      //牛牌上移的距离
}
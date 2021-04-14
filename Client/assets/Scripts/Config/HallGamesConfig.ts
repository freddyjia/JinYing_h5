export default class HallGamesConfig
{
    public static Config = 
    {
        None:{
            gameType: -1,
            name:"",
            gameName:"",
            gameIcon:"",
            gameBg:"",
        },

        Main:{
            gameType: 0,
            name:"",
            gameName:"",
            gameIcon:"",
            gameBg:"",
        },

        DouDiZhu:{
            gameType: 1,
            name:"",
            gameName:"",
            gameIcon:"",
            gameBg:"",
        },

        ZJH:{
            gameType: 2,
            name:"",
            gameName:"",
            gameIcon:"",
            gameBg:"",
        },

        BY:{
            gameType: 3,
            name:"",
            gameName:"text_buyu",
            gameIcon:"icon_buyu",
            gameBg:"bg_b_1",
        },

        Bull:{
            gameType: 4,
            name:"",
            gameName:"text_brnn",
            gameIcon:"icon_brnn",
            gameBg:"bg_s_4",
        },

        RedBlack:{
            gameType: 5,
            name:"",
            gameName:"text_redblack",
            gameIcon:"icon_redblack",
            gameBg:"bg_s_1",
        },

        BirdBeast:{
            gameType: 6,
            name:"",
            gameName:"",
            gameIcon:"",
            gameBg:"",
        },

        LongHuDou:{
            gameType: 7,
            name:"",
            gameName:"text_longhudou",
            gameIcon:"icon_longhudou",
            gameBg:"bg_s_2",
        },

        Qiangzhuangniuniu:{
            gameType: 8,
            name:"",
            gameName:"text_qznn",
            gameIcon:"icon_qznn",
            gameBg:"bg_s_2",
        },

        YaoYaoLe:{
            gameType: 9,
            name:"",
            gameName:"text_cjks",
            gameIcon:"icon_cjks",
            gameBg:"bg_s_3",
        },

        LiuHeCai:{
            gameType: 10,
            name:"",
            gameName:"",
            gameIcon:"",
            gameBg:"",
        },

        PaoDeKuai:{
            gameType: 11,
            name:"",
            gameName:"",
            gameIcon:"",
            gameBg:"",
        },

        BY2:{
            gameType: 14,
            name:"",
            gameName:"",
            gameIcon:"",
            gameBg:"",
        },

        OBTiYu:{
            gameType: 15,
            name:"",
            gameName:"text_yiqiuchengming",
            gameIcon:"icon_yiqiuchengming",
            gameBg:"bg_s_1",
        },

        LiveVideo:{
            gameType: 17,
            name:"",
            gameName:"text_shixun",
            gameIcon:"icon_shixun",
            gameBg:"bg_s_2",
        },

        FuCai:{
            gameType: 18,
            name:"",
            gameName:"text_fucai",
            gameIcon:"icon_fucai",
            gameBg:"bg_s_4",
        },

        TouZhu:{
            gameType: 19,
            name:"",
            gameName:"text_touzhu",
            gameIcon:"icon_touzhu",
            gameBg:"bg_s_3",
        },
    }

    public static GetNameSprite(gameType:number)
    {
        for(let keyConfig in this.Config)
        {
            let config = this.Config[keyConfig];
            if(config.gameType == gameType)
            {
                return config.gameName;
            }
        }
        return "";
    }

    public static GetIconSprite(gameType:number)
    {
        for(let keyConfig in this.Config)
        {
            let config = this.Config[keyConfig];
            if(config.gameType == gameType)
            {
                return config.gameIcon;
            }
        }
        return "";
    }

    public static GetBgSprite(gameType:number)
    {
        for(let keyConfig in this.Config)
        {
            let config = this.Config[keyConfig];
            if(config.gameType == gameType)
            {
                return config.gameBg;
            }
        }
        return "";
    }
}

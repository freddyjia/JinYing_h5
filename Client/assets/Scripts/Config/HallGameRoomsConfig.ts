export default class HallGameRoomsConfig
{
    public static Config = 
    {
        BY:{
            gameType: 3,
            resDir: "by",
            rooms:[
                {name:"", gameName:"text_1", gameIcon:"icon_1", gameBg:"game_bg_1"},
                {name:"", gameName:"text_2", gameIcon:"icon_2", gameBg:"game_bg_2"},
                {name:"", gameName:"text_3", gameIcon:"icon_3", gameBg:"game_bg_3"},
                {name:"", gameName:"text_4", gameIcon:"icon_4", gameBg:"game_bg_4"},
                {name:"", gameName:"text_5", gameIcon:"icon_5", gameBg:"game_bg_5"},
            ]
        },

        Bull:{
            gameType: 4,
            resDir: "brnn",
            rooms:[
                {name:"一底分-最高奖励5倍", gameName:"text_1", gameIcon:"icon_1", gameBg:"game_bg_2"},
                {name:"一底分-最高奖励10倍", gameName:"text_2", gameIcon:"icon_2", gameBg:"game_bg_3"},
                {name:"百变场-最高奖励10倍", gameName:"text_3", gameIcon:"icon_3", gameBg:"game_bg_4"},
            ]
        },

        LongHuDou:{
            gameType: 7,
            resDir: "",
            rooms:[
                {name:"1底分", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"game_bg_1"},
                {name:"5底分", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"game_bg_2"},
                {name:"10底分", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"game_bg_3"},
                {name:"20底分", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"game_bg_4"},
            ]
        },

        Qiangzhuangniuniu:{
            gameType: 8,
            resDir: "qznn",
            rooms:[
                {name:"1底分", gameName:"text_1", gameIcon:"icon_1", gameBg:"game_bg_1"},
                {name:"5底分", gameName:"text_2", gameIcon:"icon_2", gameBg:"game_bg_2"},
                {name:"10底分", gameName:"text_3", gameIcon:"icon_3", gameBg:"game_bg_3"},
                {name:"20底分", gameName:"text_4", gameIcon:"icon_4", gameBg:"game_bg_4"},
            ]
        },

        YiQiuChengMing:{
            gameType: 12,
            resDir: "",
            rooms:[
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
            ]
        },

        FuCai:{
            gameType: 13,
            resDir: "",
            rooms:[
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
            ]
        },

        ShiXun:{
            gameType: 14,
            resDir: "",
            rooms:[
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
            ]
        },

        TouZhu:{
            gameType: 15,
            resDir: "",
            rooms:[
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
                {name:"", gameName:"text_buyu", gameIcon:"icon_buyu", gameBg:"bg_b_1"},
            ]
        },
    }

    public static GetNameSprite(gameType:number, roomIdx:number)
    {
        for(let keyConfig in this.Config)
        {
            let config = this.Config[keyConfig];
            if(config.gameType == gameType)
            {
                let roomInfo = config.rooms[roomIdx];
                return config.resDir + "/" + roomInfo.gameName;
            }
        }
        return "";
    }

    public static GetIconSprite(gameType:number, roomIdx:number)
    {
        for(let keyConfig in this.Config)
        {
            let config = this.Config[keyConfig];
            if(config.gameType == gameType)
            {
                let roomInfo = config.rooms[roomIdx];
                return config.resDir + "/" + roomInfo.gameIcon;
            }
        }
        return "";
    }

    public static GetBgSprite(gameType:number, roomIdx:number)
    {
        for(let keyConfig in this.Config)
        {
            let config = this.Config[keyConfig];
            if(config.gameType == gameType)
            {
                return config.rooms[roomIdx].gameBg;
            }
        }
        return "";
    }

    public static GetGameNameSpritePath(gameType:number)
    {
        for(let keyConfig in this.Config)
        {
            let config = this.Config[keyConfig];
            if(config.gameType == gameType)
            {
                let prefix = "MainGame/Textures/Hall/";
                return prefix + config.resDir + "/game_name";
            }
        }
        return "";
    }
}

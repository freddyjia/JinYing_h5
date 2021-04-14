import FishRotInfo from "../BuyuStaticData/FishRotInfo";

export default class FishConfig {


    public static useTestModel = false;
    public static FixedTime = 0.02
    public static atlas = 'SubGames/BuYu/UI/Texture/Atlas/BuYu'

    private static allFishConfig = [
        {
            id: 0,
            name: "xiaohuangyu",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "小黄鱼",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 10
        },
        {
            id: 1,
            name: "shadingyu",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "沙丁鱼",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 20
        },
        {
            id: 2,
            name: "xiaolvyu",
            offerXY: { x: 0, y: 0 },
            multiple: 3,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "小绿鱼",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 30
        },
        {
            id: 3,
            name: "jinyu",
            offerXY: { x: 0, y: 0 },
            multiple: 4,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "金鱼",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 40
        },
        {
            id: 4,
            name: "hetun",
            offerXY: { x: 0, y: 0 },
            multiple: 5,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "河豚",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 50
        },
        {
            id: 5,
            name: "shenxianyu",
            offerXY: { x: 0, y: 0 },
            multiple: 6,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "神仙鱼",
            fishType: 1,
            audio: "beauty_1.ogg",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 60
        },
        {
            id: 6,
            name: "haima",
            offerXY: { x: 0, y: 0 },
            multiple: 7,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "海马",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 70
        },
        {
            id: 7,
            name: "longxia",
            offerXY: { x: 0, y: 0 },
            multiple: 7,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "龙虾",
            fishType: 1,
            audio: "old_14",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 80
        },
        {
            id: 8,
            name: "hudieyu",
            offerXY: { x: 0, y: 0 },
            multiple: 8,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "蝴蝶鱼",
            fishType: 1,
            audio: "beauty_5.ogg",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 90
        },
        {
            id: 9,
            name: "xiaochouyu",
            offerXY: { x: 0, y: -10 },
            multiple: 9,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "小丑鱼",
            fishType: 1,
            audio: "beauty_4.ogg",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 100
        },
        {
            id: 10,
            name: "dinianyu",
            offerXY: { x: 0, y: 0 },
            multiple: 10,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "地鲶鱼",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 110
        },
        {
            id: 11,
            name: "diwangxie",
            offerXY: { x: 0, y: 0 },
            multiple: 12,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "帝王蟹",
            fishType: 1,
            audio: "old_0.ogg",
            yyOffset: { x: 0, y: -25, z: 0 },
            sortingOrder: 120
        },
        {
            id: 12,
            name: "feiyu",
            offerXY: { x: 0, y: 0 },
            multiple: 15,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "飞鱼",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 130
        },
        {
            id: 13,
            name: "haixing",
            offerXY: { x: 0, y: 0 },
            multiple: 18,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "海星",
            fishType: 1,
            audio: "beauty_12.ogg",
            yyOffset: { x: 0, y: -25, z: 0 },
            sortingOrder: 140
        },
        {
            id: 14,
            name: "dahaigui",
            offerXY: { x: 0, y: 0 },
            multiple: 20,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "大海龟",
            fishType: 1,
            audio: "old_1.ogg",
            yyOffset: { x: 0, y: -25, z: 0 },
            sortingOrder: 150
        },
        {
            id: 15,
            name: "jianyu",
            offerXY: { x: 0, y: 0 },
            multiple: 22,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "剑鱼",
            fishType: 1,
            audio: "old_14.ogg",
            yyOffset: { x: 0, y: -25, z: 0 },
            sortingOrder: 160
        },
        {
            id: 16,
            name: "shuimu",
            offerXY: { x: 0, y: 0 },
            multiple: 25,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "水母",
            fishType: 1,
            audio: "beauty_8.ogg",
            yyOffset: { x: 0, y: -25, z: 0 },
            sortingOrder: 170
        },
        {
            id: 17,
            name: "bianfuyu",
            offerXY: { x: 0, y: 0 },
            multiple: 30,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "蝙蝠鱼",
            fishType: 1,
            audio: "old_12.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 180
        },
        {
            id: 18,
            name: "dianmanyu",
            offerXY: { x: 0, y: 0 },
            multiple: 25,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "电鳗鱼",
            fishType: 1,
            audio: "old_3.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 190
        },
        {
            id: 19,
            name: "chuitouyu",
            offerXY: { x: -6, y: 0 },
            multiple: 35,
            isShock: 0,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "锤头鲨",
            fishType: 1,
            audio: "beauty_9.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 300
        },
        {
            id: 20,
            name: "shayu",
            offerXY: { x: -11, y: 0 },
            multiple: 50,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "鲨鱼",
            fishType: 1,
            audio: "beauty_7.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 310
        },
        {
            id: 21,
            name: "chuitouyu2",
            offerXY: { x: 0, y: 0 },
            multiple: 100,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "金锤头鲨",
            fishType: 1,
            audio: "beauty_10.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 390
        },
        {
            id: 22,
            name: "shayu2",
            offerXY: { x: 0, y: 0 },
            multiple: 80,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "金鲨鱼",
            fishType: 1,
            audio: "beauty_0.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 380
        },
        {
            id: 23,
            name: "meirenyu",
            offerXY: { x: 0, y: 0 },
            multiple: 60,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "美人鱼",
            fishType: 1,
            audio: "beauty_3.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 400
        },
        {
            id: 24,
            name: "quanpingzhadan",
            offerXY: { x: 0, y: 0 },
            multiple: 0,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "全屏炸弹",
            fishType: 3,
            audio: "old_8.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 470
        },
        {
            id: 25,
            name: "yinlong",
            offerXY: { x: 0, y: 0 },
            multiple: 0,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "银龙",
            fishType: 6,
            audio: "old_9.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 460
        },
        {
            id: 26,
            name: "yinlong",
            offerXY: { x: 0, y: 0 },
            multiple: 230,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "鲲",
            fishType: 1,
            audio: "beauty_11.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 440
        },
        {
            id: 27,
            name: "yinlong",
            offerXY: { x: 0, y: 0 },
            multiple: 50,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "组合鱼50",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 340
        },
        {
            id: 28,
            name: "yinlong",
            offerXY: { x: 0, y: 0 },
            multiple: 50,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "组合鱼50",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 350
        },
        {
            id: 29,
            name: "yinlong",
            offerXY: { x: 0, y: 0 },
            multiple: 60,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "组合鱼60",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 360
        },
        {
            id: 30,
            name: "yinlong",
            offerXY: { x: 0, y: 0 },
            multiple: 80,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "组合鱼80",
            fishType: 1,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 370
        },
        {
            id: 31,
            name: "yinlong",
            offerXY: { x: 0, y: 0 },
            multiple: 210,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "金蟾",
            fishType: 1,
            audio: "beauty_1.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 430
        },
        {
            id: 32,
            name: "yinlong",
            offerXY: { x: 0, y: 0 },
            multiple: 150,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "金锦鲤",
            fishType: 1,
            audio: "beauty_6.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 420
        },
        {
            id: 33,
            name: "yinlong",
            offerXY: { x: 90, y: 0 },
            multiple: 120,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "金魔鬼鱼",
            fishType: 1,
            audio: "beauty_13.ogg",
            yyOffset: { x: 78, y: -30, z: 0 },
            sortingOrder: 410
        },
        {
            id: 34,
            name: "baoxiangyuwang",
            offerXY: { x: 0, y: 0 },
            multiple: 0,
            isShock: 1,
            rotInfo: { id: null, localScale: 1, x: 0, y: 0, z: 0 },
            text: "宝箱鱼",
            fishType: 7,
            audio: "beauty_2.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 450
        },
        {
            id: 35,
            name: "xiaohuangyuwang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '1_1', localScale: 0.4, x: 0, y: 0, z: 0 },
            text: "小黄鱼王",
            fishType: 8,
            audio: "old_6.ogg",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 200
        },
        {
            id: 36,
            name: "shadingyuwang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '1_1', localScale: 0.4, x: 0, y: 0, z: 0 },
            text: "沙丁鱼王",
            fishType: 8,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 210
        },
        {
            id: 37,
            name: "xiaolvyuwang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '1_1', localScale: 0.4, x: 0, y: 0, z: 0 },
            text: "小绿鱼王",
            fishType: 8,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 220
        },
        {
            id: 38,
            name: "jinyuwang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '1_1', localScale: 0.5, x: 0, y: 0, z: 0 },
            text: "金鱼王",
            fishType: 8,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 230
        },
        {
            id: 39,
            name: "hetunwang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '1_1', localScale: 0.5, x: 0, y: 0, z: 0 },
            text: "河豚王",
            fishType: 8,
            audio: "old_7.ogg",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 240
        },
        {
            id: 40,
            name: "shenxianyuwang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '3_1', localScale: 0.6, x: 0, y: 0, z: 0 },
            text: "神仙鱼王",
            fishType: 8,
            audio: "old_14",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 250
        },
        {
            id: 41,
            name: "haimawang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '3_1', localScale: 0.5, x: 0, y: 0, z: 0 },
            text: "海马王",
            fishType: 8,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 260
        },
        {
            id: 42,
            name: "longxiawang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '3_1', localScale: 0.7, x: 0, y: 0, z: 0 },
            text: "龙虾王",
            fishType: 8,
            audio: "old_13.ogg",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 270
        },
        {
            id: 43,
            name: "hudieyuwang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '3_1', localScale: 0.6, x: 0, y: 0, z: 0 },
            text: "蝴蝶鱼王",
            fishType: 8,
            audio: "",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 280
        },
        {
            id: 44,
            name: "xiaochouyuwang",
            offerXY: { x: 0, y: 0 },
            multiple: 2,
            isShock: 1,
            rotInfo: { id: '3_1', localScale: 0.6, x: 0, y: 0, z: 0 },
            text: "小丑鱼王",
            fishType: 8,
            audio: "old_11.ogg",
            yyOffset: { x: 0, y: -20, z: 0 },
            sortingOrder: 290
        },
        {
            id: 45,
            name: "haiwang",
            offerXY: { x: 0, y: 0 },
            multiple: 320,
            isShock: 1,
            rotInfo: { id: null, localScale: 0.6, x: 0, y: 0, z: 0 },
            text: "海王",
            fishType: 5,
            audio: "old_12.ogg",
            yyOffset: { x: 0, y: -30, z: 0 },
            sortingOrder: 480
        },
    ]

    public static GetRotInfo(fishKey): FishRotInfo {
        let info = new FishRotInfo()
        for (let i = 0; i < FishConfig.allFishConfig.length; i++) {
            let config = FishConfig.allFishConfig[i]
            if (config.id == fishKey) {
                info.needRot = config.rotInfo.id != null
                info.offet = new cc.Vec2(0, 0)
                info.scale = config.rotInfo.localScale
                break
            }
        }
        return info
    }

    public static GetYYOffset(fishKey): cc.Vec2 {
        for (let i = 0; i < FishConfig.allFishConfig.length; i++) {
            let config = FishConfig.allFishConfig[i]
            if (config.id == fishKey) {
                return new cc.Vec2(config.yyOffset.x, config.yyOffset.y)
            }
        }
        cc.error("没有找到配置阴影信息!!!!")
        return new cc.Vec2(0, 0)
    }


    private static PTPoints = [
        { x: -250, y: -293 },
        { x: 250, y: -293 },
        { x: 250, y: 293 },
        { x: -250, y: 293 },
    ]


    public static GetBulletCreatePos(uiPos: number) {
        let idx = uiPos - 1
        let pos = FishConfig.PTPoints[idx]
        return new cc.Vec2(pos.x, pos.y)
    }


    public static yuwangMaxRange = 50;


    private static GoldPoints = [
        { x: -559, y: -324 },
        { x: 400, y: -324 },
        { x: 343, y: 335 },
        { x: -495, y: 335 },
    ]

    public static GetGoldPoint(uiPos: number) {
        let pos = FishConfig.GoldPoints[uiPos - 1]
        return new cc.Vec2(pos.x, pos.y)
    }


}
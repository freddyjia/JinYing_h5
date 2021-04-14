export default class BuYuConfig {

    public static readonly useTestModel = false
    public static readonly showAABBBox = false

    public static readonly testModelCreatFish = { GroupID: 2, GroupDataID: 0, PathIdx: 33, PosIdx: 0, FishTime: 0.5 }
    public static readonly ringType = { type1: 1, type2: 2, type3: 3, type4: 4, type5: 5, type6: 6, type7: 7, type8: 8 }
    public static readonly FishSpritePath: string = "SubGames/BuYu/UI/Texture/Atlas/";
    public static readonly FishHelpPath: string = "SubGames/BuYu/UI/Texture/Atlas/Buyuhelp";

    public static readonly fishIndexNum = 34
    public static readonly ScreenWidth = 1280
    public static readonly ScreenHeight = 720
    public static readonly bulletSpeed = 750
    public static readonly Frame = 50
    public static readonly FrameTime = 0.02
    public static readonly zhuanpan = 50
    public static readonly zidannum = 30
    public static readonly yuwangMaxRange = 50
    public static readonly FishParentPath = "UIRoot/Canvas/RoomPanel/Normal/ViewBuYu/Fishs"
    public static readonly FishDataPath = "SubGames/BuYu/Config/NewFishDatas.bytes"
    public static readonly Atlas = {
        BuYu: "SubGames/BuYu/UI/Texture/Atlas/BuYu",
        BuYuHelp: "SubGames/BuYu/UI/Texture/Atlas/BuYuHelpFishs",
        Yuwang1: "SubGames/BuYu/SpineEffect/jd_by_yuwang01/jd_by_yuwang01",
        Yuwang2: "SubGames/BuYu/SpineEffect/jd_by_yuwang02/jd_by_yuwang01",
    }
    public static readonly FontAtlas = {
        win: "SubGames/BuYu/UI/Texture/Atlas/BuYuFont1",
        fail: "SubGames/BuYu/UI/Texture/Atlas/BuYuFont2",
        ptUnitGold: "SubGames/BuYu/UI/Texture/Atlas/FishGoldFont1",
    }
    public static readonly soundFolder = "SubGames/BuYu/_Audio/"
    public static readonly FishsNames = [
        {
            id: 0,
            name: "xiaohuangyu",
            offerXY: [0, 0],
            multiple: 2,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 0,
            text: "小黄鱼"
        },
        {
            id: 1,
            name: "shadingyu",
            offerXY: [0, 0],
            multiple: 2,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 0,
            text: "沙丁鱼"
        },
        {
            id: 2,
            name: "xiaolvyu",
            offerXY: [0, 0],
            multiple: 3,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 0,
            text: "小绿鱼"
        },
        { id: 3, name: "jinyu", offerXY: [0, 0], multiple: 4, yyOffset: { x: 0, y: -20, z: 0 }, isShock: 0, text: "金鱼" },
        { id: 4, name: "hetun", offerXY: [0, 0], multiple: 6, yyOffset: { x: 0, y: -20, z: 0 }, isShock: 0, text: "河豚" },
        {
            id: 5,
            name: "shenxianyu",
            offerXY: [0, 0],
            multiple: 7,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 0,
            text: "神仙鱼"
        },
        { id: 6, name: "haima", offerXY: [0, 0], multiple: 8, yyOffset: { x: 0, y: -20, z: 0 }, isShock: 0, text: "海马" },
        { id: 7, name: "longxia", offerXY: [0, 0], multiple: 9, yyOffset: { x: 0, y: -20, z: 0 }, isShock: 0, text: "龙虾" },
        {
            id: 8,
            name: "hudieyu",
            offerXY: [0, 0],
            multiple: 12,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 0,
            text: "蝴蝶鱼"
        },
        {
            id: 9,
            name: "xiaochouyu",
            offerXY: [0, -10],
            multiple: 5,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 0,
            text: "小丑鱼"
        },
        {
            id: 10,
            name: "dinianyu",
            offerXY: [0, 0],
            multiple: 15,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 0,
            text: "地鲶鱼"
        },
        {
            id: 11,
            name: "diwangxie",
            offerXY: [0, 0],
            multiple: 18,
            yyOffset: { x: 0, y: -25, z: 0 },
            isShock: 0,
            text: "帝王蟹"
        },
        { id: 12, name: "feiyu", offerXY: [0, 0], multiple: 18, yyOffset: { x: 0, y: -20, z: 0 }, isShock: 0, text: "飞鱼" },
        {
            id: 13,
            name: "haixing",
            offerXY: [0, 0],
            multiple: 20,
            yyOffset: { x: 0, y: -25, z: 0 },
            isShock: 0,
            text: "海星"
        },
        {
            id: 14,
            name: "dahaigui",
            offerXY: [0, 0],
            multiple: 10,
            yyOffset: { x: 0, y: -25, z: 0 },
            isShock: 0,
            text: "大海龟"
        },
        { id: 15, name: "jianyu", offerXY: [0, 0], multiple: 30, yyOffset: { x: 0, y: -25, z: 0 }, isShock: 0, text: "剑鱼" },
        { id: 16, name: "shuimu", offerXY: [0, 0], multiple: 15, yyOffset: { x: 0, y: -25, z: 0 }, isShock: 0, text: "水母" },
        {
            id: 17,
            name: "bianfuyu",
            offerXY: [0, 0],
            multiple: 35,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 0,
            text: "蝙蝠鱼"
        },
        {
            id: 18,
            name: "dianmanyu",
            offerXY: [0, 0],
            multiple: 25,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 0,
            text: "电鳗鱼"
        },
        {
            id: 19,
            name: "chuitouyu",
            offerXY: [-6, 0],
            multiple: 40,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 0,
            text: "锤头鲨"
        },
        {
            id: 20,
            name: "shayu",
            offerXY: [-11, 0],
            multiple: 45,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "鲨鱼"
        },
        {
            id: 21,
            name: "chuitouyu2",
            offerXY: [0, 0],
            multiple: 50,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "金锤头鲨"
        },
        {
            id: 22,
            name: "shayu2",
            offerXY: [0, 0],
            multiple: 70,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "金鲨鱼"
        },
        {
            id: 23,
            name: "meirenyu",
            offerXY: [0, 0],
            multiple: "40-120",
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "美人鱼"
        },
        {
            id: 24,
            name: "quanpingzhadan",
            offerXY: [0, 0],
            multiple: 0,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "全屏炸弹"
        },
        {
            id: 25,
            name: "yinlong",
            offerXY: [0, 0],
            multiple: 20,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "银龙"
        },
        { id: 26, name: "kun", offerXY: [0, 0], multiple: 200, yyOffset: { x: 0, y: -30, z: 0 }, isShock: 1, text: "鲲" },
        {
            id: 27,
            name: "zuheyu50",
            offerXY: [0, 0],
            multiple: 50,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 1,
            text: "组合鱼50"
        },
        {
            id: 28,
            name: "zuheyu50",
            offerXY: [0, 0],
            multiple: 50,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 1,
            text: "组合鱼50"
        },
        {
            id: 29,
            name: "zuheyu60",
            offerXY: [0, 0],
            multiple: 60,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 1,
            text: "组合60"
        },
        {
            id: 30,
            name: "zuheyu80",
            offerXY: [0, 0],
            multiple: 80,
            yyOffset: { x: 0, y: -20, z: 0 },
            isShock: 1,
            text: "组合鱼80"
        },
        {
            id: 31,
            name: "jinchan",
            offerXY: [0, 0],
            multiple: 120,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "金蟾"
        },
        {
            id: 32,
            name: "jinjinli",
            offerXY: [0, 0],
            multiple: 100,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "金锦鲤"
        },
        {
            id: 33,
            name: "jinmoguiyu",
            offerXY: [90, 0],
            multiple: 80,
            yyOffset: { x: 0, y: -30, z: 0 },
            isShock: 1,
            text: "金魔鬼鱼"
        },
    ]
    public static readonly ZHYIds = [27, 28, 29, 30]
    public static readonly ZHYOffer = [
        [{
            fishindex: -1 + 18,
            offerXY: [0, 0],
            ringType: 1,
            ringScale: 0.8,
            FishScaling: 1,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 15,
            offerXY: [-150, 0],
            ringType: 2,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 15,
            offerXY: [150, 0],
            ringType: 2,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }], //27
        [{
            fishindex: -1 + 15,
            offerXY: [0, 0],
            ringType: 5,
            ringScale: 0.8,
            FishScaling: 1,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 5,
            offerXY: [-160, 0],
            ringType: 6,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 5,
            offerXY: [80, 100],
            ringType: 6,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        },
        {
            fishindex: -1 + 5,
            offerXY: [80, -100],
            ringType: 6, ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }], //28
        [{
            fishindex: -1 + 20,
            offerXY: [0, 0],
            ringType: 7,
            ringScale: 0.8,
            FishScaling: 1,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 18,
            offerXY: [-120, 120],
            ringType: 1,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 18,
            offerXY: [120, 120],
            ringType: 1,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 18,
            offerXY: [120, -120],
            ringType: 1,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 18,
            offerXY: [-120, -120],
            ringType: 1,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }], //29
        [{
            fishindex: -1 + 21,
            offerXY: [0, 0],
            ringType: 7,
            ringScale: 0.8,
            FishScaling: 1,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 18,
            offerXY: [-140, 100],
            ringType: 8,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 18,
            offerXY: [140, -100],
            ringType: 8,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 18,
            offerXY: [-140, -100],
            ringType: 8,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }, {
            fishindex: -1 + 18,
            offerXY: [140, 100],
            ringType: 8,
            ringScale: 0.8,
            FishScaling: 0.8,
            ringOffset: [0, 0]
        }], //30
    ]
    //美术给的资源名对不上，新建一个

    //子弹发射间隔
    public static readonly SheetDelayTime = 0.2
    //没有死亡动画的鱼
    public static readonly NoDeathAnim = [25]
    //鱼的动作
    public static readonly FishActionName = {
        youdong: "youdong",
        siwang: "siwang",
    }
    public static readonly Tips1 = "开启火力*2后，子弹消耗*2，将获得双倍击杀鱼的概率，是否开启？"
    public static readonly Tips2 = "检测到您的机子有卡顿，建议开启高性能模式,是否开启？"
    //炮台动画
    public static readonly RateAnimType = [
        //1,
        3,
        5,
    ]
    public static readonly RateAnimSmaillType = [
        1, 1, 1, 1, 1, 2, 2, 2, 2, 2
    ]

    //可射出子弹的价值
    public static readonly BYRoomRateNum = [
        [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
        [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
        [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    ]
    //炮台四个坐标
    public static readonly PTPoints = [
        [-250, -293],
        [250, -293],
        [250, 293],
        [-250, 293],
    ]
    //金币四个坐标
    public static readonly GoldPoints = [
        [-521.93, -324],
        [485, -324],
        [485, 335],
        [-521.93, 335],
    ]
    //你的位置 坐标
    public static readonly guildPostions = [
        [-250, -100],
        [250, -100],
        [-250, -100],
        [250, -100],
    ]
    public static readonly Audio = {
        by1bgm: "SubGames/BuYu/_Audio/by1bgm",
        by2bgm: "SubGames/BuYu/_Audio/by2bgm",
        by3bgm: "SubGames/BuYu/_Audio/by3bgm",
        by4bgm: "SubGames/BuYu/_Audio/by4bgm",
        by_gold1: "SubGames/BuYu/_Audio/by_gold1",
        by_gold2: "SubGames/BuYu/_Audio/by_gold2",
        by_gold3: "SubGames/BuYu/_Audio/by_gold3",
        by_Hit: "SubGames/BuYu/_Audio/by_Hit",
        by_shoot: "SubGames/BuYu/_Audio/by_shoot",
        by_tips: "SubGames/BuYu/_Audio/by_tips",
        by_zhuanpan: "SubGames/BuYu/_Audio/by_zhuanpan",
        by_boss: "SubGames/BuYu/_Audio/by_boss",
        by_shandian: "SubGames/BuYu/_Audio/by_shandian",
        yclx_bgm: "SubGames/BuYu/_Audio/yclx_bgm",
        by_yy: "SubGames/BuYu/_Audio/by_yy",
    }
    public static readonly FishBaseObjPath = "SubGames/BuYu/UI/UIPrefab/FishBaseObj.prefab"


    public static readonly ZPPos = [
        [new cc.Vec2(-244.0625, -132), new cc.Vec2(-452, -132)],
        [new cc.Vec2(244.0625, -132), new cc.Vec2(452, -132)],
        [new cc.Vec2(244.0625, 125), new cc.Vec2(452, 125)],
        [new cc.Vec2(-244.0625, 125), new cc.Vec2(-452, 125)],
    ]
    public static readonly FishNewPath = "SubGames/BuYu/SpineEffect/FishsNew/"
    public static readonly FishNewAnim = {
        [0]: 8,
        [1]: 8,
        [2]: 8,
        [3]: 8,
        [4]: 8,
        [5]: 8,
        [6]: 8,
        [7]: 8,
        [8]: 8,
        [9]: 8,
        [10]: 8,
        [11]: 8,
        [12]: 8,
        [13]: 8,
        [14]: 8,
        [15]: 8,
        [16]: 8,
        [17]: 8,
        [18]: 8,
        [19]: 8,
        [20]: 8,
        [21]: 16,
        [22]: 16,
        [23]: 8,
        [24]: 8,
        [25]: 16,
        [26]: 16,
        [27]: 0,
        [28]: 0,
        [29]: 0,
        [30]: 0,
        [31]: 16,
        [32]: 16,
        [33]: 16
    }
    public static readonly BuYuScene = "SubGames/BuYu/UI/UIPrefab/BuYuScene.prefab"
    public static readonly bullets = [
        "SubGames/BuYu/UI/UIPrefab/BY_ZD_1.prefab",
        "SubGames/BuYu/UI/UIPrefab/BY_ZD_2.prefab",
        "SubGames/BuYu/UI/UIPrefab/BY_ZD_3.prefab",
        "SubGames/BuYu/UI/UIPrefab/BY_ZD_4.prefab",
        "SubGames/BuYu/UI/UIPrefab/BY_ZD_5.prefab",
        "SubGames/BuYu/UI/UIPrefab/BY_ZD_6.prefab",
    ]
    public static readonly BY_JINBI = "SubGames/BuYu/UI/UIPrefab/buyu_jinbi.prefab" //单个金币特效
    public static readonly JD_BY_DaBaoZha = "SubGames/BuYu/UI/UIPrefab/jd_by_dabaozha.prefab" //大爆炸特效
    public static readonly JD_BY_XiaoBaoZha = "SubGames/BuYu/UI/UIPrefab/jd_by_xiaobaozha.prefab" //小爆炸特效
    public static readonly JD_BY_ywdj = "SubGames/BuYu/UI/UIPrefab/jd_by_ywdj.prefab" //一网打尽
    public static readonly jd_by_zhy = "SubGames/BuYu/UI/UIPrefab/jd_by_zhy.prefab" //组合鱼
    public static readonly JD_BY_shandian = "SubGames/BuYu/UI/UIPrefab/jd_by_shandian.prefab" //闪电
    public static readonly TextureNoAtlas = "SubGames/BuYu/TextureNoAtlas/"

    public static IsZHYGetIndex(groupId: number): number {
        for (let index in (BuYuConfig.ZHYIds)) {
            if (BuYuConfig.ZHYIds[index] == groupId) {
                return Number(index)
            }
        }
        return -1
    }

    public static GetGoldPoint(uiPos): cc.Vec2 {
        let pos = BuYuConfig.GoldPoints[uiPos - 1]
        return new cc.Vec2(pos[0], pos[1])
    }

    public static GetName(fishId): string {
        let name = ""
        for (let v of (BuYuConfig.FishsNames)) {
            if (v.id == fishId) {
                name = v.name
                break
            }
        }
        return name
    }
    public static GetMultiple(fishId: number): number {
        if (fishId == 23) {
            return 120
        }
        for (let v of (BuYuConfig.FishsNames)) {
            if (v.id == fishId) {
                let multiple = Number(v.multiple)
                return multiple
            }
        }
        return 0
    }
    public static GetBulletValue(roomIdFrom0: number, ptType: number): number {
        let arr = BuYuConfig.BYRoomRateNum[roomIdFrom0]
        let val = arr[ptType - 1]
        return val
    }
    public static GetPtType(roomIdFrom0: number, bulletvalue: number): number {
        let arr = BuYuConfig.BYRoomRateNum[roomIdFrom0];
        let index = arr.indexOf(bulletvalue);
        return index + 1;
    }
}

//游戏类型信息管理
export class GameTypeMgr {

    public static Config = {
        None: { gameType: -1, registerKey: "", smallGameName: "", messageName: "", roomTitle: "", scoreSpineAssetPath: "", backgroundSpineAssetPath: "" },

        Main: { gameType: 0, registerKey: "", smallGameName: "", messageName: "", roomTitle: "", scoreSpineAssetPath: "", backgroundSpineAssetPath: "" },

        DouDiZhu: {
            gameType: 1, registerKey: "/Res/SubGames/Doudizhu", smallGameName: "斗地主", messageName: "DouDiZhuInitSmallGame",
            roomTitle: "DT_BT_DDZ", scoreSpineAssetPath: "jd_tx_ddz_xuanguan/jd_tx_ddz_xuanguan_SkeletonData.asset", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "DouDiZhu_"
        },

        ZJH: {
            gameType: 2, registerKey: "/Res/SubGames/ZJH", smallGameName: "炸金花", messageName: "ZJHInitSmallGame",
            roomTitle: "XG_BT_ZJH", scoreSpineAssetPath: "jd_tx_zjh_xuanguan/jd_tx_zjh_xuanguan_SkeletonData.asset", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "ZJH_"
        },

        BY: {
            gameType: 3, registerKey: "/Res/SubGames/BuYu", smallGameName: "捕鱼", messageName: "BuYuInitSmallGame",
            roomTitle: "XG_BT_BY", scoreSpineAssetPath: "jd_tx_by_xuanguan/jd_tx_by_xuanguan_SkeletonData.asset", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "BY_"
        },

        Bull: {
            gameType: 4, registerKey: "/Res/SubGames/Bull", smallGameName: "百人牛牛", messageName: "BullInitSmallGame",
            roomTitle: "DT_BT_BRNN", scoreSpineAssetPath: "jd_tx_nn_xuanguan/jd_tx_nn_xuanguan_SkeletonData.asset", backgroundSpineAssetPath: "XG_BRNND_", staticIcon: "Bull_"
        },

        RedBlack: {
            gameType: 5, registerKey: "/Res/SubGames/RedBlack", smallGameName: "红黑大战", messageName: "RedBlackInitSmallGame",
            roomTitle: "", scoreSpineAssetPath: "", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "RedBlack_"
        },

        BirdBeast: {
            gameType: 6, registerKey: "/Res/SubGames/BirdBeast", smallGameName: "飞禽走兽", messageName: "BirdBeastInitSmallGame",
            roomTitle: "", scoreSpineAssetPath: "", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "BirdBeast_"
        },

        LongHuDou: {
            gameType: 7, registerKey: "/Res/SubGames/LongHuDou", smallGameName: "龙虎斗", messageName: "HuDouInitSmallGame",
            roomTitle: "", scoreSpineAssetPath: "", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "LongHuDou_"
        },

        Qiangzhuangniuniu: {
            gameType: 8, registerKey: "/Res/SubGames/QNiuNiu", smallGameName: "抢庄牛牛", messageName: "QNNInitSmallGame",
            roomTitle: "DT_BT_QZNN", scoreSpineAssetPath: "jd_tx_qznn_xuanguan/jd_tx_qznn_xuanguan_SkeletonData.asset", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "Qiangzhuangniuniu_"
        },

        YaoYaoLe: {
            gameType: 9, registerKey: "/Res/SubGames/YaoYaoLe", smallGameName: "摇摇乐", messageName: "YaoYaoLeInitSmallGame",
            roomTitle: "", scoreSpineAssetPath: "", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "YaoYaoLe_"
        },

        LiuHeCai: {
            gameType: 10, registerKey: "/Res/SubGames/LiuHeCai", smallGameName: "六合彩", messageName: "LiuHeCaiInitSmallGame",
            roomTitle: "", scoreSpineAssetPath: "", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "LiuHeCai_"
        },

        PaoDeKuai: {
            gameType: 11, registerKey: "/Res/SubGames/PaoDeKuai", smallGameName: "跑得快", messageName: "PaoDeKuaiInitSmallGame",
            roomTitle: "XG_BT_PDK", scoreSpineAssetPath: "jd_tx_pdk_xuanguan/jd_tx_pdk_xuanguan_SkeletonData.asset", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "PaoDeKuai_"
        },
        BY2: {
            gameType: 14, registerKey: "/Res/SubGames/BuYu2", smallGameName: "捕鱼", messageName: "BuYuInitSmallGame2",
            roomTitle: "XG_BT_HWBY", scoreSpineAssetPath: "jd_tx_hwby_xuanguan/jd_tx_hwby_xuanguan_SkeletonData.asset", backgroundSpineAssetPath: "XG_DDZD_", staticIcon: "BY_"
        },

        OBTiYu : {
            gameType : 15, registerKey : '/Res/SubGames/OBTiYu', smallGameName : '一球成名', messageName : 'OBTiYuInitSmallGame',
            roomTitle : '', scoreSpineAssetPath : '', backgroundSpineAssetPath : 'XG_DDZD_'
        },
        LiveVideo : {
            gameType : 17, registerKey : '/Res/SubGames/LiveVideo', smallGameName : '真人视讯', messageName : 'LiveVideoInitSmallGame',
            roomTitle : '', scoreSpineAssetPath : '', backgroundSpineAssetPath : 'XG_DDZD_'
        },
    }

    public static GetScoreSpineAssetPath(playType): string {
        for (let keyConfig in this.Config) {
            let config = this.Config[keyConfig];
            if (config.gameType == playType) {
                return config.scoreSpineAssetPath;
            }
        }
        return "";
    }

    /*
    获取消息号码
    */
    public static GetMessageName(playType): string {
        for (let keyConfig in this.Config) {
            let config = this.Config[keyConfig];
            if (config.gameType == playType) {
                return config.messageName;
            }
        }
        return "";
    }

    public static GetRoomTitle(playType): string {
        for (let keyConfig in this.Config) {
            let config = this.Config[keyConfig];
            if (config.gameType == playType) {
                return config.roomTitle;
            }
        }
        return "";
    }

    public static GetBackgroundSpineAssetPath(playType): string {
        for (let keyConfig in this.Config) {
            let config = this.Config[keyConfig];
            if (config.gameType == playType) {
                return config.backgroundSpineAssetPath;
            }
        }
        return "";
    }

    public static GetStaticIcon(playType): string {
        for (let keyConfig in this.Config) {
            let config = this.Config[keyConfig];
            if (config.gameType == playType) {
                return config.staticIcon;
            }
        }
        return "";
    }

}
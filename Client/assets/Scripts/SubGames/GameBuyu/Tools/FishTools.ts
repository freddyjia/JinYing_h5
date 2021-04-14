import Extension from "../../../Tools/Extension";
import FishDeadConfig from "../Configs/FishDeadConfig";

export default class FishTools {
    private static GOUtilStartIdx = new Array<number>();


    public static Vec2Len(vec: cc.Vec2): number {
        return Math.sqrt(vec.x * vec.x + vec.y * vec.y)
    }

    public static Vec2DirUnit(vec1: cc.Vec2, vec2: cc.Vec2): cc.Vec2 {
        let dir = new cc.Vec2(vec1.x - vec2.x, vec1.y - vec2.y)
        let len = FishTools.Vec2Len(dir)
        dir.x = dir.x / len
        dir.y = dir.y / len
        return dir
    }

    //两个点的距离
    public static Vec2Dis(vec1: cc.Vec2, vec2: cc.Vec2): number {
        let dir = new cc.Vec2(vec1.x - vec2.x, vec1.y - vec2.y)
        let len = FishTools.Vec2Len(dir)
        return len
    }

    public static InitGOUtil(gOUtilType) {
        FishTools.GOUtilStartIdx[gOUtilType] = 0
    }

    public static CreatGOUtilIdx(gOUtilType) {
        FishTools.GOUtilStartIdx[gOUtilType] = FishTools.GOUtilStartIdx[gOUtilType] + 1
        return FishTools.GOUtilStartIdx[gOUtilType]
    }

    public static Init(trans) {
        // FishTools.font1 =    Extension.SearchNode(trans,'ResCache/Text').getComponent(typeof(Text)).font
        // FishTools.font2 =    Extension.SearchNode(trans.'ResCache/Text2').getComponent(typeof(Text)).font
    }

    public static HideAllChild(parent) {
        let oriLen = parent.childrenCount
        for (let i = 0; i < oriLen; i++) {
            let child = parent.children[i]
            child.position = new cc.Vec2(999999, 0)
        }
    }


    public static SetSpriteFont(strContent, parent, pngPath, spaceingX, aliginCenter, baseScale = 1, noCenterOffset = 0) {
        let oriLen = parent.childrenCount
        let needLen = strContent.length
        for (let i = 0; i < oriLen; i++) {
            let child = parent.children[i]
            child.position = new cc.Vec2(999999, 0)
        }
        for (let i = oriLen; i < needLen; i++) {
            let trans = cc.instantiate(parent.children[0])
            trans.parent = (parent)
            trans.scale = baseScale
        }
        let totalLen = (needLen - 1) * spaceingX
        for (let i = 0; i < needLen; i++) {
            let child = parent.children[i]
            let position = new cc.Vec2(i * spaceingX + noCenterOffset, 0)
            if (aliginCenter) {
                position = new cc.Vec2(i * spaceingX - totalLen / 2, 0)
            }
            child.position = position
            if (!child.activeSelf) {
                child.active = (true)
            }
            let render = child.getComponent(cc.Sprite)
            Extension.DirGetAbSprite(render, pngPath, strContent[i])
        }
    }


    //判断鱼的key是否合法
    public static ExitFishKey(fishKey): boolean {

        if (fishKey == "") {
            return false
        }

        if (fishKey == "-1") {
            return false
        }

        if (fishKey == null) {
            return false
        }
        return true
    }

    public static GetAConfig(id) {
        for (let v of (FishDeadConfig.config)) {
            if (v.fishKey == id) {
                return v;
            }
        }
        cc.error("没有找多鱼死的配置表!!!")
    }

    public static CheckShake(deadConfig): ShakePara {
        let shakeStart = deadConfig.shakeStart / 1000
        let shakeOver = deadConfig.shakeOver / 1000
        let shakeSpeed = deadConfig.shakeSpeed
        let shakeRadius = deadConfig.shakeRadius
        let shakeDuring = shakeOver - shakeStart
        let hasShowShake = false
        if (shakeStart == -1) return null;
        let shakePare: ShakePara =
        {
            shakeSpeed: shakeSpeed,
            shakeDuring: shakeDuring,
            shakeRadius: shakeRadius
        }

        return shakePare;
    }
    public static CheckFlash(deadConfig) {
        //爆炸效果
        let flashStart = deadConfig.flashStart / 1000
        let flashTimeScale = deadConfig.flashTimeScale
        let flashScale = deadConfig.flashScale
        // @ts-ignore
        if (flashStart == -1) return null;
        let FlashPara: FlashPara =
        {
            flashTimeScale: flashTimeScale,
            flashScale: flashScale
        }
        cc.log("FlashPara", FlashPara)
        return FlashPara;
    }
    public static CheckFlash2(deadConfig) {
        //爆炸效果
        let flashStart = deadConfig.flash2Start / 1000
        let flashTimeScale = deadConfig.flash2TimeScale
        let flashScale = deadConfig.flash2Scale
        // @ts-ignore
        if (flashStart == -1) return null;
        let FlashPara: FlashPara =
        {
            flashTimeScale: flashTimeScale,
            flashScale: flashScale
        }
        cc.log("FlashPara", FlashPara)
        return FlashPara;
    }
    public static CheckZhuanPan(deadConfig) {

        let zpStart = deadConfig.zpStart / 1000
        let zpOver = deadConfig.zpOver / 1000
        let zpGoldStart = deadConfig.zpGoldStart / 1000
        let zpTimeScale = deadConfig.zpTimeScale
        let hideGoldDuring = zpGoldStart - zpStart
        let zpDuring = zpOver - zpStart
        if (zpStart == -1) return null;
        let zpPara: ZPPara = {
            zpTimeScale: zpTimeScale,
            hideGoldDuring: hideGoldDuring,
            zpDuring: zpDuring,
        }
        return zpPara;
    }
    public static CheckKLT(deadConfig) {
        let kltStart = deadConfig.kltStart / 1000
        let kltTimeScale = deadConfig.kltTimeScale
        let kltScale = deadConfig.kltScale
        if (kltStart == -1) {
            return null;
        }
        let kltPara: KLTPara = {
            kltStart: kltStart,
            kltTimeScale: kltTimeScale,
            kltScale: kltScale
        }
        return kltPara;

    }
    public static CheckCoin(deadConfig) {
        let goldStart = deadConfig.goldStart / 1000   //金币出现时间
        let goldCnt = deadConfig.goldCnt
        let goldRadius = deadConfig.goldRadius
        let goldFlyStart = deadConfig.goldFlyStart / 1000
        let goldMaxHight = deadConfig.goldMaxHight
        let goldFlySpeed = deadConfig.goldFlySpeed
        let goldJumpDuring = goldFlyStart - goldStart
        if (goldStart == -1) return null;
        let gold: GoldPara = {
            goldCnt: goldCnt,
            goldRadius: goldRadius,
            goldMaxHight: goldMaxHight,
            goldFlySpeed: goldFlySpeed,
            goldJumpDuring: goldJumpDuring
        }
        return gold;
    }


}
export interface GoldPara {
    goldCnt: number;
    goldRadius: number;
    goldMaxHight: number;
    goldFlySpeed: number;
    goldJumpDuring: number;
}

export interface KLTPara {
    kltStart: number;
    kltTimeScale: number;
    kltScale: number;
}
export interface ShakePara {
    shakeSpeed: number;
    shakeDuring: number;
    shakeRadius: number;
}
export interface FlashPara {
    flashTimeScale: number;
    flashScale: number;
}
export interface ZPPara {
    zpTimeScale: number;
    hideGoldDuring: number;
    zpDuring: number;
}
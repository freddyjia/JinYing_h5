import QNNConfig from "./QNNConfig";
import Extension from "../../Tools/Extension";
import qnncardconfig from "./qnncardconfig";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class QNNCardConfigHelp {

    private static atlas = "MainGame/Atlas/Pokers"

    public static GetCardSizeType(key) {
        if (!qnncardconfig.Config[key]) {
            if(Global.showLog == true)
                cc.log("抢庄牛牛获取GetCardSizeType 不存在！key=", key)
        }
        return qnncardconfig.Config[key].sizeType
    }

    public static GetCardNum(key) {
        if (!qnncardconfig.Config[key]) {
            if(Global.showLog == true)
                cc.log("抢庄牛牛获取numName 不存在！key=", key)
        }
        return qnncardconfig.Config[key].numName
    }


    public static GetCardColor(key) {
        if (!qnncardconfig.Config[key]) {
            if(Global.showLog == true)
                cc.log("抢庄牛牛获取cardPic 不存在！key=", key)
        }
        return qnncardconfig.Config[key].cardPic
    }

    public static GetCardTypeSprite(img:cc.Sprite,key:string):void {
        if (!qnncardconfig.Config[key]) {
            if(Global.showLog == true)
                cc.log("抢庄牛牛获取GetCardTypeSprite 不存在！key=", key)
        }

        let colorType = qnncardconfig.Config[key].colorType
        let colorTypeSpriteName = "Poker_Color_4"
        if (colorType == 3) {
            colorTypeSpriteName = "Poker_Color_3"
        } else if (colorType == 2) {
            colorTypeSpriteName = "Poker_Color_2"
        } else if (colorType == 1) {
            colorTypeSpriteName = "Poker_Color_1"
        } else if (colorType == 5) {
            if (key == "16_5") {
                colorTypeSpriteName = "Poker_JokerL_16"
            } else if (key == "17_5") {
                colorTypeSpriteName = "Poker_JokerL_17"
            } else {
                if(Global.showLog == true)
                    cc.log("严重错误呀，没有找到牌对应到花色，key=", key, "colorType=", colorType)
            }
        }
        Extension.DirGetAbSprite(img,QNNCardConfigHelp.atlas,colorTypeSpriteName)
    }


    public static GetCardNumSprite(img:cc.Sprite,key:string) {
        if (!qnncardconfig.Config[key]) {
            if(Global.showLog == true)
                cc.log("抢庄牛牛获取numName 不存在！key=", key)
        }
        Extension.DirGetAbSprite(img,QNNCardConfigHelp.atlas,qnncardconfig.Config[key].numName)
    }


    public static GetCardColorSprite(img:cc.Sprite,key:string) {
        if (!qnncardconfig.Config[key]) {
            if(Global.showLog == true)
                cc.log("抢庄牛牛获取cardPic 不存在！key=", key)
        }
        Extension.DirGetAbSprite(img,QNNCardConfigHelp.atlas,qnncardconfig.Config[key].cardPic)
    }

    private static tJKQId = new Array<string>(
        "11_4",
        "11_3",
        "11_2",
        "11_1",
        "12_4",
        "12_3",
        "12_2",
        "12_1",
        "13_4",
        "13_3",
        "13_2",
        "13_1",
    )

    public static IsJQK(key) {
        if (!qnncardconfig.Config[key]) {
            if(Global.showLog == true)
                cc.log("抢庄牛牛获取IsJQK 不存在！key=", key)
        }
        for (let k = 0; k < this.tJKQId.length; k++) {
            if (key == this.tJKQId[k]) {
                return true
            }
        }
        return false
    }

    public static IsJoker(key) {
        if (!qnncardconfig.Config[key]) {
            if(Global.showLog == true)
                cc.log("抢庄牛牛获取IsJoker 不存在！key=", key)
        }
        if (key == "16_5" || key == "17_5") {
            return true
        }
        return false
    }
}
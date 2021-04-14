import QNNCardConfigHelp from "./QNNCardConfigHelp";
import Extension from "../../Tools/Extension";

export default class QNNHelp {

    public static AbsPosToRelativePos(tarPos, localPlayerPos) {
        if (tarPos == localPlayerPos) {
            return 1
        }
        if (localPlayerPos == 1) {
            return tarPos
        } else if (localPlayerPos == 2) {
            if (tarPos == 1) {
                return 5
            } else if (tarPos == 2) {
                return 1
            } else if (tarPos == 3) {
                return 2
            } else if (tarPos == 4) {
                return 3
            } else if (tarPos == 5) {
                return 4
            }
        } else if (localPlayerPos == 3) {
            if (tarPos == 1) {
                return 4
            } else if (tarPos == 2) {
                return 5
            } else if (tarPos == 3) {
                return 1
            } else if (tarPos == 4) {
                return 2
            } else if (tarPos == 5) {
                return 3
            }
        } else if (localPlayerPos == 4) {
            if (tarPos == 1) {
                return 3
            } else if (tarPos == 2) {
                return 4
            } else if (tarPos == 3) {
                return 5
            } else if (tarPos == 4) {
                return 1
            } else if (tarPos == 5) {
                return 2
            }
        } else if (localPlayerPos == 5) {
            if (tarPos == 1) {
                return 2
            } else if (tarPos == 2) {
                return 3
            } else if (tarPos == 3) {
                return 4
            } else if (tarPos == 4) {
                return 5
            } else if (tarPos == 5) {
                return 1
            }
        }
    }

    public static FlushCard(trans, key) {
        if (key == null) {
            key = "14_4"
        }

        let transBack = Extension.SearchNode(trans, "Back")
        let imgNumCmp = Extension.SearchSprite(trans, "ImgNum")
        let imgSelectMark = Extension.SearchSprite(trans, "ImgSelectMark")


        let transNormalPoker = trans.Find("NormalPoker")
        let tranJokerPoker = trans.Find("JokerPoker")
        let imgNormalNum = trans.Find("NormalPoker/ImgNum").GetComponent("Image")
        let imgNormalColor = trans.Find("NormalPoker/ImgColor").GetComponent("Image")
        let imgNormalBigColor = trans.Find("NormalPoker/ImgBigColor").GetComponent("Image")
        let imgNormalJQK = trans.Find("NormalPoker/ImgJQK").GetComponent("Image")

        let imgJoker = trans.Find("JokerPoker/ImgJoker").GetComponent("Image")
        let imgJokerBig = trans.Find("JokerPoker/ImgBigJoker").GetComponent("Image")

        QNNCardConfigHelp.GetCardNumSprite(imgNumCmp, key)
        //imgNumCmp.SetNativeSize()


        if (QNNCardConfigHelp.IsJoker(key)) {
            transNormalPoker.active = (false)
            tranJokerPoker.active = (true)

            QNNCardConfigHelp.GetCardTypeSprite(imgJoker, key)
            QNNCardConfigHelp.GetCardColorSprite(imgNormalBigColor, key)
        } else if (QNNCardConfigHelp.IsJQK(key)) {
            transNormalPoker.active = (true)
            tranJokerPoker.active = (false)

            imgNormalBigColor.active = (false)
            imgNormalJQK.active = (true)

            QNNCardConfigHelp.GetCardTypeSprite(imgNormalColor, key)
            QNNCardConfigHelp.GetCardColorSprite(imgNormalJQK, key)
        } else {
            transNormalPoker.active = (true)
            tranJokerPoker.active = (false)

            imgNormalBigColor.active = (true)
            imgNormalJQK.active = (false)

            QNNCardConfigHelp.GetCardTypeSprite(imgNormalColor, key)
            QNNCardConfigHelp.GetCardColorSprite(imgNormalBigColor, key)


        }

    }
}
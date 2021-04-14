import Vec2 = cc.Vec2;
import Extension from "./Extension";
import XTweenObserver from "./XTween/Base/XTweenObserver";
import MessageNames from "../Modules/MessageNames";
import MessageCenter from "../MVCFramework/MessageCenter";
import ccC from "./ccC";
import Global from "../Global/Global";

export default class ObjsPool {


 private static abPool = {}//对想池内的物品字典列表{type={transform,...}}
    private static abIdDic = {}

    private static  savingPos =  new Vec2(-9999999, -9999999)

 private static registerIdMsg = {
    qnnCard : 'Assets/Res/SubGames/QNiuNiu/UI/UIPrefab/QNiuNiuCard.prefab', //抢庄牛牛牌
    qnnFlyGold : 'Assets/Res/SubGames/QNiuNiu/UI/UIPrefab/QNNFlyGold.prefab', //抢庄飞行的金币

    zjhCard : 'Assets/Res/SubGames/ZJH/UI/UIPrefab/ZJHCard.prefab', //炸金花牌

    bigGameEnter : 'Assets/Res/MainGame/UI/UIPrefab/ViewHall/HallGameBig.prefab', //大厅游戏入口 大个
    smallGameEnter : 'Assets/Res/MainGame/UI/UIPrefab/ViewHall/HallGameSmall.prefab', //大厅游戏入口 小个
}

//-@return UnityEngine.GameObject
public static GetObj(registerKey, callback:(err,node)=>void=null,rot=0, pos=Vec2.ZERO,parent=null) {
    if (!ObjsPool.abPool[registerKey]) {
        ObjsPool.abPool[registerKey] = {}
        ObjsPool.abIdDic[registerKey] = {}
    }
    let prefabPath = ObjsPool.registerIdMsg[registerKey]
    if (prefabPath != null) {
        if (ObjsPool.abPool[registerKey].length > 0) {
            let trans: cc.Node = ObjsPool.abPool[registerKey].shift
            ObjsPool.abIdDic[registerKey][trans.uuid] = null
            if (callback != null) {
                callback(null, trans)
            } else {
                Extension.DirGetAbObj(prefabPath, (tmpErr, tmpNode) => {
                    if (callback != null) {
                        let trans: cc.Node = tmpNode
                        if (parent != null) {
                            trans.parent = (parent)
                        }
                        trans.rotation = rot
                        trans.position = pos
                        trans.scale = 1
                        trans.active = (true)
                        callback(tmpErr, trans)
                    } else {
                        callback(tmpErr, null)
                    }
                })
            }
        }
    }
}

//-@param obj UnityEngine.GameObject
public static Recycle(registerKey:string, obj:cc.Node){
    if (! ObjsPool.abPool[registerKey]) {
        if(Global.showLog == true)
            cc.error('物体不是从ObjsPool中拿取的！！！')
        return
    }
    let transId = obj.uuid
    if (ObjsPool.abIdDic[registerKey][transId]!=null){
        return
    }
    let luaCmp = obj.getComponent(XTweenObserver)
    if (luaCmp!=null){
        obj.removeComponent(luaCmp);
    }


    obj.active=(false)
    obj.position = ObjsPool.savingPos
    obj.parent=null
    ObjsPool.abPool[registerKey].push(obj)
    ObjsPool.abIdDic[registerKey][transId] = transId
}

public static Clear(){
    MessageCenter.SendMessage(MessageNames.BeforeObjsPoolClear)
    for (let key in (ObjsPool.abPool)) {
        ObjsPool.abPool[key] = null
        ObjsPool.abIdDic[key] = null
    }
    ObjsPool.abPool = {}
    ObjsPool.abIdDic = {}
    MessageCenter.SendMessage(MessageNames.AfterObjsPoolClear)
}

}
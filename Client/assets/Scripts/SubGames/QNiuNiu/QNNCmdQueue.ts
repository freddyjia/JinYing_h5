import Extension from "../../Tools/Extension";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class QNNCmdQueue {
    private static initRoomOk = false

    private static timerId = null

    private static cmdTimeoutTimer = 2
    private static cmdQuaue: Array<any> = new Array<any>();
    private static lockCmd = false;
    private static lastExecuteCmdSeq = 0
    private static executeCmdSeq = 0
    private static executeCmdMard = null
    private static curDoingCmd = null

    public static Init() {
    }

    public static LoadRoomOk() {
        QNNCmdQueue.initRoomOk = true
        QNNCmdQueue.DoCmd()
    }

    public static AddCmd(msg, msgBody, view: IQNNMsg) {
        if (msg == null || msg == "") {
            if(Global.showLog == true)
                cc.log('static AddCmd 传入了一个空的msg')
        }
        //不进入消息队列
        if (msgBody && msgBody.notEnterQueue) {
            if(Global.showLog == true)
                cc.log('这条信息不进入消息队列！！！msg=', msg)
            view.PlayAnim(msg, msgBody)
            return
        }


        let dynamicExecuteTime = 0
        if (msgBody && msgBody.dynamicExecuteTime) {
            dynamicExecuteTime = msgBody.dynamicExecuteTime
        }
        let func = () => {
            view.PlayAnim(msg, msgBody)
        }
        QNNCmdQueue.cmdQuaue.push({
            func: func,
            cmdMark: msg,
            dynamicExecuteTime: dynamicExecuteTime
        })
        if (QNNCmdQueue.initRoomOk) {
            QNNCmdQueue.DoCmd()
        } else {
            if(Global.showLog == true)
                cc.log('QNiuNiuCmdQueue 场景未初始化完毕，锁定消息队列')
        }
    }

    public static DoCmd() {
        if (QNNCmdQueue.lockCmd) {
            if(Global.showLog == true)
                cc.log('上一条指令没有执行完！！！！！executeCmdMard=' + QNNCmdQueue.executeCmdMard.toString())
            return
        }
        if ((QNNCmdQueue.cmdQuaue).length > 0) {
            let cmd = QNNCmdQueue.cmdQuaue.shift()
            QNNCmdQueue.curDoingCmd = cmd
            QNNCmdQueue.executeCmdMard = cmd.cmdMark
            QNNCmdQueue.lastExecuteCmdSeq = QNNCmdQueue.executeCmdSeq
            QNNCmdQueue.executeCmdSeq = QNNCmdQueue.executeCmdSeq + 1
            let dynamicExecuteTime = cmd.dynamicExecuteTime
            cmd.func()
            if (dynamicExecuteTime > 0) {
                QNNCmdQueue.lockCmd = true
                let okCallback = () => {
                    Extension.CancelDelayCall(QNNCmdQueue.timerId)
                    QNNCmdQueue.lockCmd = false
                    QNNCmdQueue.DoCmd()
                }
                QNNCmdQueue.timerId = Extension.DelayCall(okCallback, dynamicExecuteTime, cmd, 1, null, true)
            } else {
                QNNCmdQueue.DoCmd()
            }
        } else {
            if(Global.showLog == true)
                cc.log('消息队列为空！！')
        }
    }

    public static Clear() {
        Extension.CancelDelayCall(QNNCmdQueue.timerId)
        QNNCmdQueue.cmdQuaue = new Array<any>();
        QNNCmdQueue.initRoomOk = false
        QNNCmdQueue.lockCmd = false
        QNNCmdQueue.lastExecuteCmdSeq = 0
        QNNCmdQueue.executeCmdSeq = 0
        QNNCmdQueue.executeCmdMard = null
        QNNCmdQueue.curDoingCmd = null
    }

    public static CheckCmdTimeout() {
        let check = null
        check = () => {
            if ((QNNCmdQueue.cmdQuaue.length) > 0) {
                if (QNNCmdQueue.lastExecuteCmdSeq == QNNCmdQueue.executeCmdSeq) {
                    if(Global.showLog == true)
                        cc.log('消息执行超时，executeCmdMard=' + QNNCmdQueue.executeCmdMard.toString())
                }
                QNNCmdQueue.lastExecuteCmdSeq = QNNCmdQueue.executeCmdSeq
            }
            Extension.DelayCall(check, QNNCmdQueue.cmdTimeoutTimer, 1)
        }
        Extension.DelayCall(check, QNNCmdQueue.cmdTimeoutTimer + 4, 1)
    }

}
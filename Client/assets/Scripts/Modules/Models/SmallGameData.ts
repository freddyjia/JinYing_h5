import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class SmallGameData 
{
    public gameType:number;
    public enterMsgID:number;
    public extraDataFunc;
    public exitMsgID:number;
    public enterFunc;
    public exitFunc;
    public currencyUpdateFunc;
    public haveMatchingFinish:boolean = false;
    //小游戏界面初始化完毕判断
    public haveEnterSmallGameFinish:boolean = false;

    public SetGameType(gameType)
    {
        this.gameType = gameType;
    }

    public SetEnterMsgID(msgID,extraDataFunc=null)
    {
        this.enterMsgID = msgID;
        this.extraDataFunc = extraDataFunc;
    }

    public SetExitMsgID(msgID)
    {
        this.exitMsgID = msgID;
    }

    public SetEnterFunc(func)
    {
        this.enterFunc = func;
    }

    public SetExitFunc(func)
    {
        this.exitFunc = func;
    }

    public SetCurrencyUpdateFunc(func:(isRefresh:boolean)=>void)
    {
        this.currencyUpdateFunc = func;
    }

    public Check()
    {
        let ret = true;
        if(this.gameType == null)
        {
            ret = false;
            if(Global.showLog == true)
                cc.error("请先调用 SetGameType");
        }
     
        if(this.enterMsgID == null)
        {
            ret = false;
            if(Global.showLog == true)
                cc.error("请先调用 SetEnterMsgID");
        }

        if(this.exitMsgID == null)
        {
            ret = false;
            if(Global.showLog == true)
                cc.error("请先调用 SetExitMsgID");
        }

        if(this.enterFunc == null)
        {
            ret = false;
            if(Global.showLog == true)
                cc.error("请先调用 SetEnterFunc");
        }

        if(this.exitFunc == null)
        {
            ret = false;
            if(Global.showLog == true)
                cc.error("请先调用 SetExitFunc");
        }

        if(this.currencyUpdateFunc == null)
        {
            ret = false;
            if(Global.showLog == true)
                cc.error("请先调用 SetCurrencyUpdateFunc");
        }

        return ret;
    }
}

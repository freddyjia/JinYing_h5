export default class MessageNamesBull 
{
    // 所有的小游戏相关内容
    public static  PushKickOutRoom = "PushKickOutRoom";
    // 百人牛牛
    public static InitBullRoomData = "InitBullRoomData";
    public static BullStatusChange = "BullStatusChange";
    public static BullPlayerBet = "BullPlayerBet";
    public static BullDeal = "BullDeal";
    public static BullBankListRes = "BullBankListRes";
    public static BullReqBankerStatusChange = "BullReqBankerStatusChange";    //自己请求上庄的状态改变
    public static BullChangeBanker = "BullChangeBanker";   //庄家变更
    public static BullChangeSeat = "BullChangeSeat";      //上座信息变更

    //外部会调用的消息
    public static BullInitSmallGame = "BullInitSmallGame";
  }
  
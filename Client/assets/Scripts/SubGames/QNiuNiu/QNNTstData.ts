import {
    DealInfo,
    PlayerInfo,
    PushAction,
    PushPlayerInfo,
    PushRoomInitData,
    PushRoomStatus
} from "../../Protos/QiangZhuangNiuNiu";
import QNNConfig from "./QNNConfig";

export default class QNNTstData {
    public static PushRoomInitData(): PushRoomInitData {
        let datas = new PushRoomInitData()
        datas.status = 8
        datas.waitTime = 0
        let playerData = new PlayerInfo()
        playerData.headbox = "default"
        playerData.name = "368636855f"
        playerData.city = "昆明"
        playerData.gold = "49994000"
        playerData.playerId = QNNConfig.editorLocalPlayerId
        playerData.province = "云南"
        playerData.isBanker = false
        playerData.grapMutiple = -1
        playerData.head = "GYZY_TX_M_4"
        playerData.pos = 1
        playerData.mutiple = 0
        playerData.isPlay = false
        playerData.head = "GYZY_TX_M_4"
        datas.players = new Array()
        datas.players.push(playerData)
        datas.baseCoin = 100
        datas["dynamicExecuteTime"] = 1
        return datas
    }

    public static PushPlayerInfo1() {
        let player = new PlayerInfo()
        player["isBanker"] = false;
        player["head"] = "GYZY_TX_W_1";
        player["province"] = "宁夏";
        player["city"] = "固原";
        player["mutiple"] = 0;
        player["headbox"] = "GYZY_HeadBox_2";
        player["gold"] = "10228";
        player["pos"] = 3;
        player["isPlay"] = false;
        player["vipLv"] = 0;
        player["grapMutiple"] = -1;
        player["name"] = "侥幸颖杰";
        player["playerId"] = "2190000000116"
        player["dynamicExecuteTime"] = 0.11
        let datas = new PushPlayerInfo()
        datas.player = player
        return datas
    }

    public static PushPlayerInfo2() {
        let player = new PlayerInfo()
        player["isBanker"] = false;
        player["head"] = "GYZY_TX_M_4";
        player["province"] = "河南";
        player["city"] = "灵宝";
        player["mutiple"] = 0;
        player["headbox"] = "GYZY_HeadBox_2";
        player["gold"] = "7138";
        player["pos"] = 4;
        player["isPlay"] = false;
        player["vipLv"] = 0;
        player["grapMutiple"] = -1;
        player["name"] = "帅气祺庭";
        player["playerId"] = "2190000001607"
        player["dynamicExecuteTime"] = 0.11
        let datas = new PushPlayerInfo()
        datas.player = player
        return datas
    }

    public static PushPlayerInfo3() {
        let player = new PlayerInfo()
        player["isBanker"] = false;
        player["head"] = "GYZY_TX_W_3";
        player["province"] = "河南";
        player["city"] = "荥阳";
        player["mutiple"] = 0;
        player["headbox"] = "GYZY_TXK";
        player["gold"] = "14684";
        player["pos"] = 2;
        player["isPlay"] = false;
        player["vipLv"] = 0;
        player["grapMutiple"] = -1;
        player["name"] = "天赐楠锐";
        player["playerId"] = "2190000000300"
        player["dynamicExecuteTime"] = 0.11
        let datas = new PushPlayerInfo()
        datas.player = player
        return datas
    }

    public static PushPlayerInfo4() {
        let player = new PlayerInfo()
        player["isBanker"] = false;
        player["head"] = "GYZY_TX_W_1";
        player["province"] = "广东";
        player["city"] = "河源";
        player["mutiple"] = 0;
        player["headbox"] = "GYZY_TXK";
        player["gold"] = "15300";
        player["pos"] = 5;
        player["isPlay"] = false;
        player["vipLv"] = 0;
        player["grapMutiple"] = -1;
        player["name"] = "幸运妍琳";
        player["playerId"] = "2190000000035"
        player["dynamicExecuteTime"] = 1
        let datas = new PushPlayerInfo()
        datas.player = player
        return datas
    }


    public static PushRoomStatus1(){
        let datas = new PushRoomStatus()
        datas.status = 1
        datas.waitTime = 3
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }


    public static PushRoomStatus3(){
        let datas = new PushRoomStatus()
        datas.status = 3
        datas.joinPlayerId = new Array(
            "2190000000035",
            "2190000000116",
            "2190000001607",
            "2190000022892",
            "2190000000300")
        datas.waitTime = 5
        datas.mutiple = new Array(1,2,4)

        // datas["dynamicExecuteTime"] = 0.11
        return datas
    }

    public static PushAction2(){
        let datas = new PushAction()
        datas.status = 3
        datas.multiple = 0
        datas.playerId = "2190000000300"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }
    public static PushAction3(){
        let datas = new PushAction()
        datas.status = 3
        datas.multiple = 2
        datas.playerId = "2190000000035"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }
    public static PushAction4(){
        let datas = new PushAction()
        datas.status = 3
        datas.multiple = 2
        datas.playerId = "2190000000116"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }
    public static PushAction5(){
        let datas = new PushAction()
        datas.status = 3
        datas.multiple = 4
        datas.playerId = "2190000001607"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }


    public static PushRoomStatus10(){
        let datas = new PushRoomStatus()
        datas.status = 4
        datas.playerId = new Array(
            "2190000000035",
            "2190000000116",
            "2190000001607",
            // "2190000022892",
            // "2190000000300"
            )
        datas.bankerId = "2190000022892"
        datas.mutiple = new Array(1,2,4)

        datas["dynamicExecuteTime"] = 0.5
        return datas
    }

    public static PushRoomStatus12(){
        let datas = new PushRoomStatus()
        datas.status = 5
        datas.waitTime = 5
        datas.mutiple = new Array(
            5,10,15,20
        )
        // datas["dynamicExecuteTime"] = 1
        return datas
    }


    /*{"status":5,"multiple":15,"playerId":"2190000000116"}*/
    public static PushAction15(){
        let datas = new PushAction()
        datas.status = 5
        datas.multiple = 15
        datas.playerId = "2190000000116"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }

    /*{"status":5,"multiple":10,"playerId":"2190000001607"}*/
    public static PushAction16(){
        let datas = new PushAction()
        datas.status = 5
        datas.multiple = 10
        datas.playerId = "2190000001607"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }

    /*{"status":5,"multiple":15,"playerId":"2190000000035"}*/
    public static PushAction17(){
        let datas = new PushAction()
        datas.status = 5
        datas.multiple = 15
        datas.playerId = "2190000000035"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }

    /*{"status":5,"multiple":5,"playerId":"2190000022892"}*/
    public static PushAction18(){
        let datas = new PushAction()
        datas.status = 5
        datas.multiple = 5
        datas.playerId = "2190000022892"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }

    /*{"status":5,"multiple":10,"playerId":"2190000001607"}*/
    public static PushAction19(){
        let datas = new PushAction()
        datas.status = 5
        datas.multiple = 10
        datas.playerId = "2190000001607"
        datas["dynamicExecuteTime"] = 0.11
        return datas
    }

    public static PushRoomStatus20(){
        // let datas = new PushRoomStatus()
        // datas.status = 6
        // datas.contineTime = 3
        // datas.waitTime = 8
        // datas.dealInfo = new DealInfo[5](
        //
        // )
        // datas.mutiple = new Array(
        //     5,10,15,20
        // )

        let datas = {
            "status": 6,
            "contineTime": 3,
            "waitTime": 8,
            "dealInfo": [
                {
                    "playerId": "2190000000035",  //pos = 5
                    "gold": "1230",
                    "niucards": [
                        {
                            "cardColor": 4,
                            "cardSize": 15,
                            "id": 49
                        },
                        {
                            "cardColor": 3,
                            "cardSize": 15,
                            "id": 50
                        },
                        {
                            "cardColor": 2,
                            "cardSize": 6,
                            "id": 15
                        }
                    ],
                    "cards": [
                        {
                            "cardColor": 4,
                            "cardSize": 15,
                            "id": 49
                        },
                        {
                            "cardColor": 3,
                            "cardSize": 12,
                            "id": 38
                        },
                        {
                            "cardColor": 3,
                            "cardSize": 3,
                            "id": 2
                        },
                        {
                            "cardColor": 3,
                            "cardSize": 15,
                            "id": 50
                        },
                        {
                            "cardColor": 2,
                            "cardSize": 6,
                            "id": 15
                        }
                    ],
                    "niuMutiple": 1,
                    "blnWin": false,
                    "playResult": -15300,
                    "result": 3
                },
                {
                    "playerId": "2190000000116",
                    "gold": "4560",
                    "blnWin": true,
                    "niuMutiple": 1,
                    "result": 0,
                    "playResult": -10228,
                    "cards": [
                        {
                            "cardColor": 1,
                            "cardSize": 4,
                            "id": 8
                        },
                        {
                            "cardColor": 2,
                            "cardSize": 15,
                            "id": 51
                        },
                        {
                            "cardColor": 2,
                            "cardSize": 5,
                            "id": 11
                        },
                        {
                            "cardColor": 2,
                            "cardSize": 12,
                            "id": 39
                        },
                        {
                            "cardColor": 4,
                            "cardSize": 9,
                            "id": 25
                        }
                    ]
                },
                {
                    "playerId": "2190000001607",
                    "gold": "-20",
                    "blnWin": false,
                    "niuMutiple": 1,
                    "result": 0,
                    "playResult": -7138,
                    "cards": [
                        {
                            "cardColor": 3,
                            "cardSize": 10,
                            "id": 30
                        },
                        {
                            "cardColor": 1,
                            "cardSize": 14,
                            "id": 48
                        },
                        {
                            "cardColor": 1,
                            "cardSize": 13,
                            "id": 44
                        },
                        {
                            "cardColor": 1,
                            "cardSize": 7,
                            "id": 20
                        },
                        {
                            "cardColor": 1,
                            "cardSize": 6,
                            "id": 16
                        }
                    ]
                },
                {
                    "playerId": "2190000022892",
                    "gold": "50030733",
                    "niucards": [
                        {
                            "cardColor": 2,
                            "cardSize": 9,
                            "id": 27
                        },
                        {
                            "cardColor": 4,
                            "cardSize": 3,
                            "id": 1
                        },
                        {
                            "cardColor": 4,
                            "cardSize": 8,
                            "id": 21
                        }
                    ],
                    "cards": [
                        {
                            "cardColor": 4,
                            "cardSize": 8,
                            "id": 21
                        },
                        {
                            "cardColor": 4,
                            "cardSize": 12,
                            "id": 37
                        },
                        {
                            "cardColor": 1,
                            "cardSize": 10,
                            "id": 32
                        },
                        {
                            "cardColor": 2,
                            "cardSize": 9,
                            "id": 27
                        },
                        {
                            "cardColor": 4,
                            "cardSize": 3,
                            "id": 1
                        }
                    ],
                    "niuMutiple": 3,
                    "blnWin": true,
                    "playResult": 36733,
                    "result": 10
                },
                {
                    "playerId": "2190000000300",
                    "gold": "8684",
                    "niucards": [
                        {
                            "cardColor": 1,
                            "cardSize": 3,
                            "id": 4
                        },
                        {
                            "cardColor": 3,
                            "cardSize": 8,
                            "id": 22
                        },
                        {
                            "cardColor": 1,
                            "cardSize": 9,
                            "id": 28
                        }
                    ],
                    "cards": [
                        {
                            "cardColor": 1,
                            "cardSize": 3,
                            "id": 4
                        },
                        {
                            "cardColor": 3,
                            "cardSize": 7,
                            "id": 18
                        },
                        {
                            "cardColor": 3,
                            "cardSize": 8,
                            "id": 22
                        },
                        {
                            "cardColor": 1,
                            "cardSize": 9,
                            "id": 28
                        },
                        {
                            "cardColor": 4,
                            "cardSize": 6,
                            "id": 13
                        }
                    ],
                    "niuMutiple": 1,
                    "blnWin": false,
                    "playResult": 6000,
                    "result": 3
                }
            ]
        }

        // datas["dynamicExecuteTime"] = 1
        return datas
    }


    public static PushRoomStatus22(){      //玩家 结算  Settlement
        let data = {"status":7,"waitTime":6}
        return data
    }


}





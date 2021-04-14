export default class DatasFuncBY {

    private static _intance

    public static intance(): DatasFuncBY {
        if (DatasFuncBY._intance == null) {
            DatasFuncBY._intance = new DatasFuncBY()
        }
        return DatasFuncBY._intance
    }

    public fGetMSeatId: () => number
    public fUId2UIPos: (uId: string) => number
    public fGetUIPos: (seatId: number) => number
    public fGetMUIPos: () => number
    public fGetBulletSpeed: (seatId: number) => number
    public fGetMSheetDelayTime: () => number
    public fSheetBuleet: (angle: number, dirX: number, dirY: number, LockFishID: number) => void
    public fGetLockStatus: () => boolean
    public fGetAutoStatus: () => boolean
    public fGetEnterRoomIdFrom0: () => number
    public fGetPlayerLeftGold: (seatUIPos: number) => number
    public fGetPTType: (seatUIPos: number) => number
    public fGetPTDoubleType: (seatUIPos: number) => number

    //增加炮台等级
    public fAddPtType: (type: number) => void
    //减少炮台等级
    public fSubPtType: (type: number) => void
    public fGetServerTime: () => number;
    public fGetClientTime: () => number;
    public fGetCountTime: () => number;
    //检查房间限制
}
export default class BulletData {
    bulletID: number;
    bulletType: number;
    seatid: number;
    LockFishID: number;
    speed: number;
    dirX: number;
    dirY: number;
    time: number; //服务器时间
    isdouble: number; //1 = 火力x2 - 1=火力回复正常
    SetData(bulletID, bulletType, seatid, LockFishID, speed, dirX, dirY, time, isdouble) {
        this.bulletID = bulletID;
        this.seatid = seatid;
        this.LockFishID = LockFishID;
        this.speed = speed;
        this.dirX = dirX;
        this.dirY = dirY;
        this.time = time;
        this.bulletType = bulletType;
        this.isdouble = isdouble;

    }
    SetdirY(dirY: number) {
        this.dirY = dirY;
    }
}

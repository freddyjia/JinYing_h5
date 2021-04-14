import FishBasePool from "../FishBasePool";
export default class BulletPool extends FishBasePool {
    private static _intance: BulletPool = null;
    public static intance() {
        if (!BulletPool._intance) {
            BulletPool._intance = new BulletPool()
        }
        return BulletPool._intance;
    }
}
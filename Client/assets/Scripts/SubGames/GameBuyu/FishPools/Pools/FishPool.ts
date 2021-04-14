import FishBasePool from "../FishBasePool";
export default class FishPool extends FishBasePool {
    private static _intance: FishPool = null;
    public static intance() {
        if (!FishPool._intance) {
            FishPool._intance = new FishPool()
        }
        return FishPool._intance;
    }
}
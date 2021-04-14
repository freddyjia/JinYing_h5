import FishBasePool from "../FishBasePool";
export default class GoldPool extends FishBasePool {
    private static _intance: GoldPool = null;
    public static intance() {
        if (!GoldPool._intance) {
            GoldPool._intance = new GoldPool()
        }
        return GoldPool._intance;
    }
}
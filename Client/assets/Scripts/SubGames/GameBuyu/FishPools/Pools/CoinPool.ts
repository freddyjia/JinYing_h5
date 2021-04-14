import FishBasePool from "../FishBasePool";
export default class CoinPool extends FishBasePool {
    private static _intance: CoinPool = null;
    public static intance() {
        if (!CoinPool._intance) {
            CoinPool._intance = new CoinPool()
        }
        return CoinPool._intance;
    }
}
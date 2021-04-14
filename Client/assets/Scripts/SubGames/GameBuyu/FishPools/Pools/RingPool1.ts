import FishBasePool from "../FishBasePool";
export default class RingPool1 extends FishBasePool {
    private static _intance: RingPool1 = null;
    public static intance() {
        if (!RingPool1._intance) {
            RingPool1._intance = new RingPool1()
        }
        return RingPool1._intance;
    }
}
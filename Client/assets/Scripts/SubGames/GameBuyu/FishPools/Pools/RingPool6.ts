import FishBasePool from "../FishBasePool";
export default class RingPool6 extends FishBasePool {
    private static _intance: RingPool6 = null;
    public static intance() {
        if (!RingPool6._intance) {
            RingPool6._intance = new RingPool6()
        }
        return RingPool6._intance;
    }
}
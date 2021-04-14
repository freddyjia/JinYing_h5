import FishBasePool from "../FishBasePool";
export default class RingPool7 extends FishBasePool {
    private static _intance: RingPool7 = null;
    public static intance() {
        if (!RingPool7._intance) {
            RingPool7._intance = new RingPool7()
        }
        return RingPool7._intance;
    }
}
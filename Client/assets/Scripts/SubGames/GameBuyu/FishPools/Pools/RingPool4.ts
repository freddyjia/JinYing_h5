import FishBasePool from "../FishBasePool";
export default class RingPool4 extends FishBasePool {
    private static _intance: RingPool4 = null;
    public static intance() {
        if (!RingPool4._intance) {
            RingPool4._intance = new RingPool4()
        }
        return RingPool4._intance;
    }
}
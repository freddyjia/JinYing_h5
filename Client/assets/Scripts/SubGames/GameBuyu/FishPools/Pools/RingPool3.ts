import FishBasePool from "../FishBasePool";
export default class RingPool3 extends FishBasePool {
    private static _intance: RingPool3 = null;
    public static intance() {
        if (!RingPool3._intance) {
            RingPool3._intance = new RingPool3()
        }
        return RingPool3._intance;
    }
}
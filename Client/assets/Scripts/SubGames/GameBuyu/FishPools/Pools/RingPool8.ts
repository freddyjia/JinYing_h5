import FishBasePool from "../FishBasePool";
export default class RingPool8 extends FishBasePool {
    private static _intance: RingPool8 = null;
    public static intance() {
        if (!RingPool8._intance) {
            RingPool8._intance = new RingPool8()
        }
        return RingPool8._intance;
    }
}
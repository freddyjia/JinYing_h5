import FishBasePool from "../FishBasePool";
export default class RingPool2 extends FishBasePool {
    private static _intance: RingPool2 = null;
    public static intance() {
        if (!RingPool2._intance) {
            RingPool2._intance = new RingPool2()
        }
        return RingPool2._intance;
    }
}
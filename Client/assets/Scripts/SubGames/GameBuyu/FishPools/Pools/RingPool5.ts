import FishBasePool from "../FishBasePool";
export default class RingPool5 extends FishBasePool {
    private static _intance: RingPool5 = null;
    public static intance() {
        if (!RingPool5._intance) {
            RingPool5._intance = new RingPool5()
        }
        return RingPool5._intance;
    }
}
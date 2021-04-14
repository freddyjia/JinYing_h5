import FishBasePool from "../FishBasePool";
export default class KLTPool extends FishBasePool {
    private static _intance: KLTPool = null;
    public static intance() {
        if (!KLTPool._intance) {
            KLTPool._intance = new KLTPool()
        }
        return KLTPool._intance;
    }
}
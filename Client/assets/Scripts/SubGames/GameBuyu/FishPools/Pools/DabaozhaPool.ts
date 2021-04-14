import FishBasePool from "../FishBasePool";
export default class DabaozhaPool extends FishBasePool {
    private static _intance: DabaozhaPool = null;
    public static intance() {
        if (!DabaozhaPool._intance) {
            DabaozhaPool._intance = new DabaozhaPool()
        }
        return DabaozhaPool._intance;
    }
}
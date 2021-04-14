import FishBasePool from "../FishBasePool";
export default class YuWangPool extends FishBasePool {
    private static _intance: YuWangPool = null;
    public static intance() {
        if (!YuWangPool._intance) {
            YuWangPool._intance = new YuWangPool()
        }
        return YuWangPool._intance;
    }
}
import FishBasePool from "../FishBasePool";
export default class YiWangPool extends FishBasePool {
    private static _intance: YiWangPool = null;
    public static intance() {
        if (!YiWangPool._intance) {
            YiWangPool._intance = new YiWangPool()
        }
        return YiWangPool._intance;
    }
}
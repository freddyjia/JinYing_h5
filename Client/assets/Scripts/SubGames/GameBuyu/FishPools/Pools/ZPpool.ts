import FishBasePool from "../FishBasePool";

export default class ZPpool extends FishBasePool {
    private static _intance: ZPpool = null;
    public static intance() {
        if (!ZPpool._intance) {
            ZPpool._intance = new ZPpool()
        }
        return ZPpool._intance;
    }
}
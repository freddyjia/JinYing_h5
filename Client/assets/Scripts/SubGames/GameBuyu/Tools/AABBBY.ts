export default class AABBBY {

    public static IsCollision(pointArrAR: Array<cc.Vec2>, p1: cc.Vec2, p2: cc.Vec2, p3: cc.Vec2, p4: cc.Vec2): boolean {
        for (let val of pointArrAR) {
            let p = val
            let res = AABBBY.IsPointInRectangle(p, p1, p2, p3, p4)
            if (res) {
                return true
            }
        }
        return false
    }
    public static IsPointInRectangle(p: cc.Vec2, p1: cc.Vec2, p2: cc.Vec2, p3: cc.Vec2, p4: cc.Vec2): boolean {
        let p1p2 = new cc.Vec2(p2.x - p1.x, p2.y - p1.y)
        let p2p3 = new cc.Vec2(p3.x - p2.x, p3.y - p2.y)
        let p3p4 = new cc.Vec2(p4.x - p3.x, p4.y - p3.y)
        let p4p1 = new cc.Vec2(p1.x - p4.x, p1.y - p4.y)

        let p1p = new cc.Vec2(p.x - p1.x, p.y - p1.y)
        let p2p = new cc.Vec2(p.x - p2.x, p.y - p2.y)
        let p3p = new cc.Vec2(p.x - p3.x, p.y - p3.y)
        let p4p = new cc.Vec2(p.x - p4.x, p.y - p4.y)

        let res1 = p1p2.cross(p1p) >= 0
        if (!res1) {
            return false
        }
        let res2 = p2p3.cross(p2p) >= 0
        if (!res2) {
            return false
        }
        let res3 = p3p4.cross(p3p) >= 0
        if (!res3) {
            return false
        }
        let res4 = p4p1.cross(p4p) >= 0
        if (!res4) {
            return false
        }
        return true

    }


}
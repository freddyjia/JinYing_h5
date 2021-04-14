
export default class ActionRot {
    private node: cc.Node;
    private isFristLerpAngle: boolean = true;
    public Init(node: cc.Node, rot: number) {
        this.node = node;
        this.isFristLerpAngle = true;
    }
    public UpdateRot(tarAngle) {
        if (this.isFristLerpAngle) {
            this.node.angle = -tarAngle
            this.isFristLerpAngle = false
            return
        }
        let startAngle = -this.node.angle
        let dir = -1
        if (tarAngle > 0) {
            dir = 1
        }
        let isOpp = startAngle * tarAngle < 0
        if (isOpp) {
            if (Math.abs(startAngle) < 60 && Math.abs(tarAngle) < 60) {
                startAngle -= dir * 360
            }
            startAngle += dir * 360
        }

        let totalAngle = tarAngle - startAngle
        if (Math.abs(totalAngle) > 0.5) {
            let finalAngle = startAngle + totalAngle * 0.04
            if (isOpp && Math.abs(finalAngle) > 180) {
                finalAngle -= dir * 360
            }
            this.node.angle = - finalAngle;
        }
    }
}
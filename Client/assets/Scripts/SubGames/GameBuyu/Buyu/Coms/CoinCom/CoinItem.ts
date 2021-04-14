import { Random } from "../../../../../Tools/Random";
import { XTweenCurv, XTweenCurvType } from "../../../../../Tools/XTween/Base/XTweenCurv";
import BuYuConfig from "../../../Configs/BuYuConfig";
import FishTools, { GoldPara } from "../../../Tools/FishTools";

export default class CoinItem {
    private tCustomCurv = [0, 0.04006654, 0.08232468, 0.1265492, 0.1725147, 0.219996, 0.2687679, 0.3186051, 0.3692822, 0.4205741, 0.4722555, 0.5241011, 0.5758857, 0.6273838, 0.6783705, 0.7286202, 0.7779078, 0.8260081, 0.8726957, 0.9177455, 0.960932, 1.00203, 1.040815, 1.07706, 1.110541, 1.141033, 1.16831, 1.192146, 1.212318, 1.228599, 1.240764, 1.248588, 1.251846, 1.249803, 1.241569, 1.227504, 1.207999, 1.183448, 1.15424, 1.120769, 1.083425, 1.042599, 0.9986846, 0.9520719, 0.9031527, 0.852319, 0.799962, 0.7464734, 0.6922449, 0.637668, 0.583134, 0.529035, 0.4757624, 0.4237075, 0.3732622, 0.3248178, 0.2787662, 0.2354989, 0.260772, 0.3123256, 0.3679786, 0.425882, 0.4841858, 0.541041, 0.5945982, 0.6430082, 0.6844215, 0.716989, 0.7388614, 0.7481891, 0.7426174, 0.7217296, 0.687864, 0.6433994, 0.5907138, 0.5321866, 0.4701962, 0.4071211, 0.3453399, 0.2872313, 0.2351739, 0.292824, 0.3724825, 0.4567454, 0.539196, 0.6134178, 0.6729941, 0.7115085, 0.7225754, 0.7162172, 0.7046957, 0.6887867, 0.6692655, 0.6469076, 0.6224887, 0.5967843, 0.5705699, 0.5446209, 0.519713, 0.4966216, 0.4857874]
    private time: number;
    private jumpTime: number = 0;
    private moveTime: number = 0;
    private hasShow: boolean;
    private isUsing: boolean;
    private timeTotalAnmi: number;
    private delayShow: number;
    private jumpDuring: number = 0.8;
    private move2SlotDuring: number;
    private staticWaitDuring: number;
    private createPos: cc.Vec2;
    public rootNode: cc.Node;
    private alpha: number = 255;
    private seatUIPos: number;
    private jumpStartPosY: number = 0;
    private jumpTarUpPosY: number;
    private move2SlotDir: cc.Vec2;
    private move2SlotSpeed: number;
    private slotUIPos: cc.Vec2;
    private move2SlotDis: number;
    public CoinDoneAni: (coin: CoinItem) => void;
    public Init(node: cc.Node, CoinPos: cc.Vec3, seatindex: number, goldPara: GoldPara, alpha: number, dealy: number) {
        this.rootNode = node;
        let r = goldPara.goldRadius || 0
        let rx = (Random.RangeFloat(0, 1) - 0.5) * 2 * r
        let ry = (Random.RangeFloat(0, 1) - 0.5) * 2 * r
        if (!goldPara.goldRadius) {
            rx = 0
            ry = 0
        }
        this.rootNode.scale = 1
        this.alpha = alpha;
        this.rootNode.opacity = this.alpha;
        this.createPos = new cc.Vec2(CoinPos.x + rx, CoinPos.y + ry);



        this.rootNode.setPosition(new cc.Vec2(this.createPos.x, this.createPos.y));

        this.delayShow = Random.RangeFloat(0, 1) * 0.3;
        this.staticWaitDuring = dealy;
        this.time = 0;
        this.rootNode.active = true;
        this.jumpTarUpPosY = goldPara.goldMaxHight;
        this.move2SlotSpeed = goldPara.goldFlySpeed;
        this.slotUIPos = BuYuConfig.GetGoldPoint(seatindex + 1);
        this.move2SlotDir = new cc.Vec2(this.slotUIPos.x - CoinPos.x, this.slotUIPos.y - CoinPos.y);
        this.move2SlotDis = FishTools.Vec2Len(this.move2SlotDir);
        this.move2SlotDuring = this.move2SlotDis / this.move2SlotSpeed;
        this.timeTotalAnmi = this.delayShow + this.jumpDuring + this.move2SlotDuring + this.staticWaitDuring;
    }
    private DoJump() {
      
        let curPosX = this.rootNode.position.x
        this.jumpTime = this.jumpTime + BuYuConfig.FrameTime
        let timeProcess = this.jumpTime / this.jumpDuring
        let process = XTweenCurv.GetProgress(XTweenCurvType.Liner, timeProcess, this.tCustomCurv)
        let len = (this.jumpTarUpPosY - this.jumpStartPosY) * process
        let newPosY = this.jumpStartPosY + len
        let newPos = new cc.Vec2(curPosX, newPosY + this.createPos.y)
        this.rootNode.setPosition(newPos)
    }

    private DoMove() {
        this.moveTime = this.moveTime + BuYuConfig.FrameTime//+ BuYuConfig.FrameTime
        let timeProcess = this.moveTime / this.move2SlotDuring
        let process = XTweenCurv.GetProgress(XTweenCurvType.Liner, timeProcess)
        let offset = new cc.Vec2(this.move2SlotDir.x * process, this.move2SlotDir.y * process)
        let newPos = new cc.Vec2(offset.x + this.createPos.x, offset.y + this.createPos.y)
        this.rootNode.setPosition(newPos)
    }
    public Update(dt: number) {

        this.time = this.time + BuYuConfig.FrameTime;
        if (this.time > this.timeTotalAnmi) {
            this.CoinDoneAni(this);
            return;
        }
        this.DoAnim()
    }

    private DoAnim() {

        if (this.time < this.delayShow) {
        } else if (this.time < this.delayShow + this.staticWaitDuring) {
            this.Show()
        } else if (this.time < this.delayShow + this.staticWaitDuring + this.jumpDuring) {
            this.DoJump()
        } else if (this.time > this.delayShow + this.staticWaitDuring + this.jumpDuring && this.time < this.delayShow + this.timeTotalAnmi) {
            this.DoMove()
        }
    }

    private Show() {
        this.rootNode.setPosition(new cc.Vec2(this.createPos.x, this.createPos.y))
    }


}
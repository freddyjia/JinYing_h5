import TimerManager from "../../../../../Components/TimerManager";
import { BuYuPlayerInfo, SheetBuleetBack } from "../../../../../Protos/BuYu";
import Extension from "../../../../../Tools/Extension";
import NodeUtil from "../../../../../Tools/NodeUtil";
import Util from "../../../../../Tools/Util";
import BulletData from "../../../BuyuStaticData/BulletData";
import BuYuConfig from "../../../Configs/BuYuConfig";
import DatasFuncBY from "../../../DatasFuncBY";
import FishTools from "../../../Tools/FishTools";

export default class TurretItem {
    private node: cc.Node;
    private WaitIMG: cc.Sprite;
    private PTNode: cc.Node;
    private BtnAdd: cc.Button;
    private BtnSub: cc.Button;
    private BtnAdd_Sub: cc.Node;
    private TextPTGold: cc.Node;
    private GoldText: cc.Node;
    private PT: cc.Node;
    private PTBG: cc.Node;
    private ClickCallBack: (isadd: boolean) => void;
    private uiPos: number = 0;
    private GoldTopPool: cc.Node;
    private SP_PT: sp.Skeleton;
    private SP_PT_YY: sp.Skeleton;
    //--------------
    public CurrentType: number = 0;
    public seatId: number = 0;
    public Gold: number = 0;
    public DoubleType: number = -1;//火力x2 -1=火力回复正常



    public Init(node: cc.Node, uiPos: number) {

        this.node = node;

        this.uiPos = uiPos;
        this.WaitIMG = cc.find("WaitImg", this.node).getComponent(cc.Sprite);
        this.PTNode = cc.find("PTNode", this.node);
        this.BtnAdd = cc.find("BtnAdd_Sub/Add", this.PTNode).getComponent(cc.Button);
        this.BtnSub = cc.find("BtnAdd_Sub/Sub", this.PTNode).getComponent(cc.Button);
        this.BtnAdd_Sub = cc.find("BtnAdd_Sub", this.PTNode);
        this.TextPTGold = Extension.SearchNode(this.node, "TextPTGold");
        this.GoldText = Extension.SearchNode(this.node, "GoldText");
        this.PT = Extension.SearchNode(this.node, "PT");
        this.PTBG = Extension.SearchNode(this.node, "BgSp");
        this.SP_PT = Extension.SearchNode(this.PTBG, "jd_hwby_paotai01").getComponent(sp.Skeleton)
        this.SP_PT_YY = Extension.SearchNode(this.PT, "jd_hwby_paotai01").getComponent(sp.Skeleton)
        this.GoldTopPool = Extension.SearchNode(this.node, "GoldTopPool");
        this.node.active = true;
        this.WaitIMG.node.active = true;
        this.PTNode.active = false;
        this.PT.angle = 0;
        this.PTBG.angle = 0;
        cc.log("角度", this.PT.angle)

    }
    public SetClickCallBack(callback: (isadd: boolean) => void) {
        this.ClickCallBack = callback;
    }
    public PlayerEnter(isSelf: boolean, info: BuYuPlayerInfo): void {
        cc.log("玩家进入", isSelf)
        this.CurrentType = info.ptType;
        this.seatId = info.seatid;
        this.Gold = info.gold;
        this.DoubleType = info.type;
        this.node.active = true;
        this.PTNode.active = true;
        this.WaitIMG.node.active = false;
        if (isSelf) {
            this.BtnAdd_Sub.active = true;
            Util.SetClickAction(this.BtnAdd, (btn: cc.Button, data: any) => {
                cc.log("zengjia", this.ClickCallBack)
                this.ClickCallBack(true);
            });
            Util.SetClickAction(this.BtnSub, (btn: cc.Button, data: any) => {
                this.ClickCallBack(false);
            });
        } else {
            this.BtnAdd_Sub.active = false;
        }
    }
    //设置炮台上子弹数值
    public SetStepValue(stelvalue: number) {
        let newValue = Util.formatGoldText(stelvalue * 100) //重新格式化一次
        let strContent = newValue.toString();
        let pngPath = BuYuConfig.FontAtlas.ptUnitGold
        let spaceingX = 19
        let aliginCenter = true
        let baseScale = 1
        let noCenterOffset = 0
        FishTools.SetSpriteFont(strContent, this.TextPTGold, pngPath, spaceingX, aliginCenter, baseScale, noCenterOffset);
    }
    public SetPlayerGold(gold: number) {
        let newValue = Util.formatGoldText(gold) //重新格式化一次
        let strContent = newValue.toString()
        let pngPath = BuYuConfig.FontAtlas.ptUnitGold
        let spaceingX = 19
        let aliginCenter = false
        let baseScale = 1
        let noCenterOffset = -54.3
        FishTools.SetSpriteFont(strContent, this.GoldText, pngPath, spaceingX, aliginCenter, baseScale, noCenterOffset);
    }
    public setGoldTopPool(seatid: number) {
        this.GoldTopPool.active = true;
        let newValue = Util.formatGoldText(seatid) //重新格式化一次
        let strContent = newValue.toString()
        let pngPath = BuYuConfig.FontAtlas.ptUnitGold
        let spaceingX = 19
        let aliginCenter = false
        let baseScale = 1
        let noCenterOffset = -54.3
        FishTools.SetSpriteFont(strContent, this.GoldTopPool, pngPath, spaceingX, aliginCenter, baseScale, noCenterOffset);
        TimerManager.GetInstance().CallActionDelay(() => {
            this.GoldTopPool.active = false;
        }, 0.5)
    }
    public ResetItem() {
        this.PTNode.active = false;
        this.WaitIMG.node.active = false;
        this.BtnAdd_Sub.active = false;
        this.node.active = false;
        this.CurrentType = 0;
    }
    //更新炮台指向-----
    public Shoot(dirX: number, dirY: number) {

        if (DatasFuncBY.intance().fGetMSeatId() > 2) {
            if (this.uiPos != DatasFuncBY.intance().fGetMUIPos()) {
                dirY *= -1
            }
        }
        let rot = Math.atan2(dirY, dirX) * (180 / Math.PI)
        if (this.uiPos <= 2) {
            rot = 90 - rot;
        } else {
            rot += 90;
        }
        this.PT.angle = - rot;
        this.PTBG.angle = -rot;
        this.PlaySpine();
        return rot;
    }
    public PlayerLeave() {
        this.node.active = true;
        this.PTNode.active = false;
        this.WaitIMG.node.active = true;
    }

    public LocalPlayerShoot(dirX: number, dirY: number, localFishId: string) {
        let rot = this.Shoot(dirX, dirY);
        let localSeatId = DatasFuncBY.intance().fGetMSeatId()
        if (localSeatId > 2) {
            dirY *= -1
        }
        let numLockFishId = -1
        if (FishTools.ExitFishKey(localFishId)) {
            numLockFishId = Number(localFishId)
        }
        //设计申请
        DatasFuncBY.intance().fSheetBuleet(rot, dirX, dirY, numLockFishId)
    }
    public ChangeType(type: number) {
        this.SetStepValue(type);
        this.PlaySpine();
    }
    private PlaySpine() {
        if (this.CurrentType > 0 && this.CurrentType <= 4) {
            Util.PlaySpineEffect(this.SP_PT, null, "2", false, false)
            Util.PlaySpineEffect(this.SP_PT_YY, null, "2", false, false)
        } else if (this.CurrentType > 4 && this.CurrentType < 8) {
            Util.PlaySpineEffect(this.SP_PT, null, "4", false, false)
            Util.PlaySpineEffect(this.SP_PT_YY, null, "4", false, false)
        } else {
            Util.PlaySpineEffect(this.SP_PT, null, "6", false, false)
            Util.PlaySpineEffect(this.SP_PT_YY, null, "6", false, false)
        }
    }
}
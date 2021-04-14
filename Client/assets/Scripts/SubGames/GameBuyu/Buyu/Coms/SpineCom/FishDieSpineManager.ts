import { BulletBoom, FishBossTip, SpecialDead } from "../../../../../Protos/BuYu";
import { Random } from "../../../../../Tools/Random";
import Util from "../../../../../Tools/Util";
import BuYuConfig from "../../../Configs/BuYuConfig";
import DatasFuncBY from "../../../DatasFuncBY";
import FishManager from "../FishCom/FishManager";
import FishPoolManager, { SpType } from "../../../FishPools/FishPoolManager";
import FishTools, { FlashPara, KLTPara, ShakePara } from "../../../Tools/FishTools";
import ItemLG from "./ItemLG";
import ItemSD from "./ItemSD";
import ItemZP from "./ItemZP";
import AudioManager from "../../../../../Manager/AudioManager";
import TimerManager from "../../../../../Components/TimerManager";

export default class FishDieSpineManager {
    public static _instance: FishDieSpineManager;
    private Spcontent: cc.Node;
    private ItemZPs: ItemZP[] = [];
    private ItemSDs: ItemSD[] = [];
    private ItemLGs: ItemLG[] = [];
    private FishBG: cc.Node;
    private timeShake: number = 0;
    private shakescleTime: number = 0;
    private shakePara: ShakePara = null;
    private isshake: boolean = false;

    private timeHailang: number = 0;
    private isHL: boolean = false;
    private startPosX: number = -1300;
    private HLNode: cc.Node;
    private textArr = [new cc.Vec3(-244.0625, -132), new cc.Vec3(-452, -132), new cc.Vec3(0, 0), new cc.Vec3(452, -132)]
    private textArr1 = [new cc.Vec3(-245, -132), new cc.Vec3(-452, -230), new cc.Vec3(0, 0), new cc.Vec3(452, -254)]

    private ZPPosUsing = [
        [-1, -1],
        [-1, -1],
        [-1, -1],
        [-1, -1]
    ]
    public static get Instance(): FishDieSpineManager {
        if (this._instance == null)
            this._instance = new FishDieSpineManager()
        return this._instance;
    }
    public Init() {
        this.Spcontent = cc.find("Canvas/FishNode/FishScene/Panel/SPContent");
        this.Spcontent.active = true;
        this.FishBG = cc.find("Canvas/FishNode/FishScene/GameBg")
        this.HLNode = FishPoolManager.Instance.getSPbyType(SpType.hailang);
        this.HLNode.parent = this.Spcontent;
        this.HLNode.setPosition(new cc.Vec2(-1300, 0))

        // for (let i = 0; i < this.textArr.length; i++) {
        //     let pos = this.textArr[i]
        //     this.CreatLG(pos);
        // }
        // let specilDeadPos: cc.Vec3[] = [];
        // specilDeadPos = this.textArr;
        // this.CreatSDs(specilDeadPos);

        // for (let i = 0; i < this.textArr1.length; i++) {
        //     let pos = this.textArr1[i]
        //     this.CreatLG(pos);
        // }
        // specilDeadPos = this.textArr1;
        // this.CreatSDs(specilDeadPos);
    }
    public FishDead(rsp: BulletBoom) {
        AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.by_Hit)
        if (rsp.isDead == false) return;
        let seatUIPos = DatasFuncBY.intance().fGetUIPos(rsp.seatid);
        let MUIPos = DatasFuncBY.intance().fGetMUIPos();
        let fish = FishManager.Instance.FindFishIsUsing(rsp.FishID);
        if (fish && fish.isUsing) {
            cc.log("鱼死亡", rsp.gold)
            if (fish.isZhy) {
                let zhygroup = fish.GetZHYGroupMark();

                for (let i = 0; i < FishManager.Instance.FishScript.length; i++) {
                    let fish = FishManager.Instance.FishScript[i];
                    if (fish.GetZHYGroupMark() == zhygroup) {
                        this.CreatDeadEvent(rsp.FishID, rsp.gold, seatUIPos, MUIPos, true);
                        fish.SetIsDead();
                    }
                }
            } else {
                this.CreatDeadEvent(rsp.FishID, rsp.gold, seatUIPos, MUIPos, false);
                fish.SetIsDead();
            }
            if (rsp.seatid == DatasFuncBY.intance().fGetMSeatId()) {
                AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.by_tips)
            }

            //派发死亡事件
            //鱼翻滚----
        }
    }
    public SpecialFishDead(rsp: SpecialDead) {
        //msgBody.type 1.一网打尽 2.全屏炸弹  3.局部炸弹
        cc.log("特殊鱼群死亡", rsp.FishIds, rsp);
        let seatUIPos = DatasFuncBY.intance().fGetUIPos(rsp.seatid);
        let MUIPos = DatasFuncBY.intance().fGetMUIPos();
        let specilDeadPos: cc.Vec3[] = [];
        for (let i = 0; i < rsp.FishIds.length; i++) {
            let deadFishId = rsp.FishIds[i];
            for (let i = 0; i < FishManager.Instance.FishScript.length; i++) {
                let fish = FishManager.Instance.FishScript[i];
                if (deadFishId.toString() == fish.fishKey) {
                    //鱼翻滚----
                    this.CreatDeadEvent(deadFishId, rsp.Golds[i], seatUIPos, MUIPos, false, rsp.type);
                    fish.SetIsDead();
                    this.CreatLG(fish.CenterPos);
                    specilDeadPos.push(fish.CenterPos);
                }
            }
        }
        AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.by_gold3);
        this.CreatSDs(specilDeadPos);
    }
    //播放boss来袭
    public FishBossTip(rsp: FishBossTip) {
        if (rsp.typeTips == 2) { //boss来袭
            TimerManager.GetInstance().CallActionDelay(() => {
                AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.by_boss)
                let spinenode = FishPoolManager.Instance.getSPbyType(SpType.spBossLaixi);
                spinenode.active = true;
                spinenode.parent = this.Spcontent;
                spinenode.setPosition(new cc.Vec2(0, 0))
                let spine = spinenode.getComponent(sp.Skeleton);
                Util.PlaySpineEffect(spine, () => {
                    FishPoolManager.Instance.PutSPbyType(SpType.spBossLaixi, spinenode, this.Spcontent)
                }, "1", false, true);
            }, 1)
        } else if (rsp.typeTips == 1) {//海浪 鱼潮
            AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.yclx_bgm);
            let spinenode = FishPoolManager.Instance.getSPbyType(SpType.yuchaolailin);
            spinenode.active = true;
            spinenode.parent = this.Spcontent;
            spinenode.setPosition(new cc.Vec2(0, 0))
            let spine = spinenode.getComponent(sp.Skeleton);
            Util.PlaySpineEffect(spine, () => {
                FishPoolManager.Instance.PutSPbyType(SpType.yuchaolailin, spinenode, this.Spcontent)
            }, "1", false, true);
            this.timeHailang = 0;
            this.isHL = true;
        }
    }
    public UpdataFunc(dt) {
        this.FlashShakeBG();//如果有颤抖效果
        this.CreatHL();
        if (this.ItemZPs.length > 0) {
            this.ItemZPs.forEach(zpItem => {
                zpItem.Updata(dt);
            });
        }

        if (this.ItemSDs.length > 0) {
            this.ItemSDs.forEach(sd => {
                sd.Updata(dt);
            });
        }
        if (this.ItemLGs.length > 0) {
            this.ItemLGs.forEach(lg => {
                lg.Updata(dt);
            });
        }

    }
    public HideGame() {
        this.ItemLGs.forEach(lg => {
            FishPoolManager.Instance.PutSPbyType(SpType.leidianguang, lg.node, this.Spcontent)
        });
        this.ItemLGs = [];
        this.ItemSDs.forEach(sd => {
            FishPoolManager.Instance.PutSPbyType(SpType.leidianguang, sd.trans, this.Spcontent)
        });
        this.ItemSDs = [];
        this.ItemZPs.forEach(zp => {
            FishPoolManager.Instance.PutSPbyType(SpType.leidianguang, zp.rootNode, this.Spcontent)
        });
        this.ItemZPs = [];
        this.timeShake = 0;
        this.shakescleTime = 0;
        this.shakePara = null;
        this.isshake = false;
        this.Spcontent.removeAllChildren();
        this.timeHailang = 0;
        this.isHL = false;
    }
    //创造雷光
    private CreatLG(fishpos: cc.Vec3) {
        if (!fishpos) return;
        let itemLG: ItemLG = new ItemLG();
        let LGNode = FishPoolManager.Instance.getSPbyType(SpType.leidianguang);
        LGNode.parent = this.Spcontent;
        itemLG.Creat(LGNode, fishpos);
        this.ItemLGs.push(itemLG);
        itemLG.doneAction = (itemLG: ItemLG) => {
            FishPoolManager.Instance.PutSPbyType(SpType.leidianguang, itemLG.node, this.Spcontent);
            let index = this.ItemLGs.indexOf(itemLG);
            this.ItemLGs.splice(index, 1)
            cc.log("清除", this.ItemLGs.length)
        }
    }
    private CreatSDs(vec3PosArr) {
        if (vec3PosArr.length <= 1) {
            return
        }
        let pairs = new Array<Array<number>>()
        let count = vec3PosArr.length
        let randomPos = new Array<cc.Vec3>()

        for (let i = 0; i < count; i++) {
            let index = Random.RangeInt(0, vec3PosArr.length)
            randomPos.push(vec3PosArr[index])
            vec3PosArr.splice(index, 1)
        }

        for (let i = 0; i < count - 1; i++) {
            let pair = new Array<number>()
            pair.push(i)
            pair.push(i + 1)
            pairs.push(pair)
        }
        let pair = new Array<number>()
        pair.push(0)
        pair.push(count - 1)
        pairs.push(pair)
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i]
            let ShanItem: ItemSD = new ItemSD();
            let trans = FishPoolManager.Instance.getSPbyType(SpType.shandian);
            trans.parent = this.Spcontent;
            trans.active = true;
            this.ItemSDs.push(ShanItem);
            ShanItem.doneAction = (sd: ItemSD) => {
                FishPoolManager.Instance.PutSPbyType(SpType.shandian, sd.trans, this.Spcontent);
                let index = this.ItemSDs.indexOf(sd);
                this.ItemSDs.splice(index, 1);
                cc.log("闪电数据", this.ItemSDs.length)
            }
            AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.by_shandian)
            if (randomPos[pair[0]] && randomPos[pair[1]]) {
                ShanItem.Creat(randomPos[pair[0]], randomPos[pair[1]], trans)
            } else {
                //   cc.error("闪电数据错误!!!!" + (randomPos[pair[0]]).toString() + " " + (randomPos[pair[1]]).toString())
                cc.error("闪电数据错误!!!!")
            }
        }
    }
    //posArr是特殊死亡时 对应鱼的位置集合
    //specialDeadType
    public CreatDeadEvent(fishID: number, goldNum = 0, seatUIPos = 1, MseatUIpos = 1, iszhy = false, specialDeadType = -1, posArr: cc.Vec2[] = null) {
        let fish = FishManager.Instance.FindFishIsUsing(fishID)
        let deadConfig = null;
        let fishdeadIndex = 0;
        if (!iszhy) {
            deadConfig = FishTools.GetAConfig(fish.fishSkinIndex)
            fishdeadIndex = fish.fishSkinIndex;
        } else {

            deadConfig = FishTools.GetAConfig(fish.FishConfigIndex)
            fishdeadIndex = fish.FishConfigIndex;

        }
        cc.log("鱼死亡", iszhy, fishdeadIndex)
        if (deadConfig && fish) {
            //屏幕抖动
            let shakePara = FishTools.CheckShake(deadConfig);
            if (shakePara != null) {
                this.doShake(shakePara)
            }
            //爆炸效果1
            let flashPara = FishTools.CheckFlash(deadConfig);
            if (flashPara != null) {
                this.doFlash(flashPara, fish.CenterPos)
            }
            //爆炸效果2
            let flashPara2 = FishTools.CheckFlash2(deadConfig);
            if (flashPara2 != null) {
                this.doFlash(flashPara, fish.CenterPos)
            }

            //转盘效果
            let zpPara = null;
            zpPara = FishTools.CheckZhuanPan(deadConfig);
            if (zpPara != null && specialDeadType != 2 && fish.fishSkinIndex != 24) {
                let zhyFishIndex = fish.GetZHYGroupMark()
                this.creatZP(fishdeadIndex, seatUIPos - 1, goldNum, zhyFishIndex, zpPara)
                AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.by_zhuanpan);
            }
            //骷髅头效果
            let kltPara = null;
            kltPara = FishTools.CheckKLT(deadConfig);
            if (kltPara != null) {
                cc.log("骷髅头效果")
                this.CreatKLT(kltPara, fish.CenterPos);
            }

        }

    }
    private creatZP(fishindex, curUIPos, gold, zhyFishIndex, zpPara) {
        let zp: ItemZP = new ItemZP();
        this.ItemZPs.push(zp);
        let node = FishPoolManager.Instance.GetZP();
        node.parent = this.Spcontent;
        node.active = true;
        let pos = null;
        let ZPPos = BuYuConfig.ZPPos[curUIPos];
        let arrindex = 0;
        if (this.ZPPosUsing[curUIPos][0] == -1) {//第一个格子有位置
            pos = ZPPos[0];
            arrindex = 0;
        }
        else {
            pos = ZPPos[1];
            arrindex = 1;
        }
        node.setPosition(pos);
        zp.Creat(node, fishindex, zhyFishIndex, zpPara, gold, arrindex, curUIPos);
        zp.doneAction = (zpitem) => {
            cc.log("播放完成")
            this.ZPPosUsing[zpitem.UIindex][zpitem.ArrIndex] = -1;
            FishPoolManager.Instance.PutZP(zpitem.rootNode);
            let index = this.ItemZPs.indexOf(zpitem);
            this.ItemZPs.splice(index, 1);
        }
    }
    private doShake(shakePara: ShakePara) {
        this.isshake = true;
        this.timeShake = 0;
        this.shakePara = shakePara;
        cc.log("屏幕抖动", shakePara.shakeDuring, shakePara.shakeRadius, shakePara.shakeSpeed)
    }
    private doFlash(flashPara: FlashPara, pos: cc.Vec3) {
        if (!pos) return;
        let node: cc.Node = FishPoolManager.Instance.getSPbyType(SpType.dabaozha);
        node.active = true;
        node.parent = this.Spcontent;
        node.scale = flashPara.flashScale;
        node.setPosition(pos);
        let anim = node.getComponent(sp.Skeleton);
        cc.log("大爆炸", node.active, node.position, anim)
        anim.timeScale = flashPara.flashTimeScale;
        Util.PlaySpineEffect(anim, () => {
            FishPoolManager.Instance.PutSPbyType(SpType.dabaozha, node);
        }, "1", false, true);
    }
    private CreatKLT(para: KLTPara, deadPos: cc.Vec3) {
        if (!deadPos) return;
        let klt = FishPoolManager.Instance.GetKLT();
        let spine = klt.getChildByName("images_klt").getComponent(sp.Skeleton);
        klt.parent = this.Spcontent;
        klt.setPosition(deadPos);
        klt.active = true;
        spine.timeScale = para.kltTimeScale;
        klt.scale = para.kltScale;
        Util.PlaySpineEffect(spine, () => {
            FishPoolManager.Instance.PutKLT(klt);
        }, "1", false, true)
    }
    private FlashShakeBG() {
        if (this.isshake) {
            this.timeShake += BuYuConfig.FrameTime * this.shakePara.shakeSpeed;
            if (this.timeShake <= this.shakePara.shakeDuring) {
                this.shakescleTime += BuYuConfig.FrameTime * this.shakePara.shakeSpeed;
                if (this.shakescleTime > 0.05)
                    this.shakescleTime = 0;
                let x = Random.RangeFloat(-1, 1) * this.shakePara.shakeRadius
                let y = Random.RangeFloat(-1, 1) * this.shakePara.shakeRadius
                cc.log("屏幕抖动-------------", x, y)
                this.FishBG.setPosition(new cc.Vec2(x, y))
            } else {
                this.timeShake = 0;
                this.shakePara = null;
                this.isshake = false;
                this.FishBG.setPosition(new cc.Vec2(0, 0));
            }
        }
    }
    private CreatHL() {
        if (this.isHL == false) return;
        this.timeHailang += BuYuConfig.FrameTime;
        if (this.timeHailang < 5) {
            cc.log("海浪----------------------------------------");
            let posx = this.HLNode.x + 50;
            this.HLNode.setPosition(posx);
        } else {
            this.timeHailang = 0;
            this.isHL = false;
            this.HLNode.setPosition(new cc.Vec2(-1300, 0))
        }
    }

}
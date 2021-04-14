import { AppearFishInfo, AsycFishInfo, BulletBoom, FishBossTip, SpecialDead } from "../../../../../Protos/BuYu";
import AABBBY from "../../../Tools/AABBBY";
import BuYuConfig from "../../../Configs/BuYuConfig";
import DatasFuncBY from "../../../DatasFuncBY";
import FishCreatData from "../../../BuyuStaticData/FishCreatData";
import FishPoolManager from "../../../FishPools/FishPoolManager";
import PathMgr from "../../../Tools/PathMgr";
import FishItem from "./FishItem";
import Extension from "../../../../../Tools/Extension";
import { AABBData } from "../../../BuyuStaticData/AABBData";
import Util from "../../../../../Tools/Util";
import TimerManager from "../../../../../Components/TimerManager";
export default class FishManager {
    private NodeParent: cc.Node;
    private Pool: FishPoolManager;

    static _instance: FishManager;
    private static zhyGroupMark = 0;

    ///鱼潮相关
    private taopaoDT = 0
    private curIsTaopao = false
    private taopaoDuring = 3
    private taopaoTimer = 0

    public FishScript: FishItem[];
    //--------------------鱼类缓存池

    public static get Instance() {
        if (this._instance == null) {
            this._instance = new FishManager();
        }
        return this._instance;
    }
    public Init() {
        this.FishScript = [];
        this.NodeParent = cc.find("Canvas/FishNode/FishScene/Panel/FishContent");
    }
    //产生异步鱼
    public AsycFishInfo(rsp: AsycFishInfo) {
        let data = new FishCreatData(rsp.FishID.toString(), rsp.GroupID, rsp.GroupDataID, rsp.PosIdx, rsp.PathIdx, rsp.FishTime + 0.01)
        this.CreateFish(data);
    }
    public AppearFishInfo(rsp: AppearFishInfo) {
        //服务器与客户端时间差 
        let timevalue = DatasFuncBY.intance().fGetCountTime() / 1000;
        let fishTime = Number(rsp.serverTime) / 1000;
        let localtime = new Date().getTime() / 1000;

        let tempfishtime = (fishTime + timevalue);
        let dealy = tempfishtime - localtime;
        cc.log("dealy", dealy)
        if (dealy < 0) dealy = 0;
        TimerManager.GetInstance().CallActionDelay(() => {
            let groups = PathMgr.intence().GetGroupDatas(rsp.GroupID)
            let starId = rsp.Startid;
            // cc.log("鱼的位置", rsp.serverTime)
            for (let i = 0; i < groups.GroupDataArray.length; i++) {
                let group = groups.GroupDataArray[i]
                for (let j = 0; j < group.FishNum; j++) {
                    let data = new FishCreatData(starId.toString(), rsp.GroupID, i, j, rsp.PathIdx, 0)
                    this.CreateFish(data)
                    starId++;
                }
            }
        }, dealy)




    }
    public FishBossTip(msg: FishBossTip) {
        if (msg.typeTips == 1)
            this.curIsTaopao = true;

    }
    //27-30特殊鱼群
    private CreateFish(data: FishCreatData) {
        let zhyIndex = BuYuConfig.IsZHYGetIndex(data.groupsId);
        //   cc.log("鱼zhyIndex", zhyIndex)
        if (zhyIndex != -1) {
            for (let config of BuYuConfig.ZHYOffer[zhyIndex]) {
                let zhyFishKey = config["fishindex"].toString()
                let newFishKey = (Number(data.fishKey).toString());
                let newData = data.Copy(newFishKey, data.groupsId, true, zhyFishKey, FishManager.zhyGroupMark, config)
                this.CreateAFish(newData);
            }
            FishManager.zhyGroupMark++;
        } else {
            this.CreateAFish(data);
        }
    }
    private CreateAFish(data: FishCreatData) {
        let fishnode = FishPoolManager.Instance.getFishObj();
        fishnode.parent = this.NodeParent;
        let isInv = DatasFuncBY.intance().fGetMSeatId() > 2;
        let fish = new FishItem();
        fish.Creat(data, fishnode, isInv);
        this.FishScript.push(fish);
        fishnode.active = true;
        this.SortFish();
        fish.DeadFuncback = (fish: FishItem) => {
            let index = this.FishScript.indexOf(fish);
            FishPoolManager.Instance.PutFishObj(fish.node);
            this.FishScript.splice(index, 1)
            //   cc.log("FishScriptxxx", this.FishScript)
        }
        //cc.log("FishScript", this.FishScript.length)
    }
    private SortFish() {
        this.FishScript.sort((a, b) => {
            return a.fishSkinIndex - b.fishSkinIndex
        })
        for (let i = 0; i < this.FishScript.length; i++) {
            let fish = this.FishScript[i];
            if (fish.isUsing == true) {
                let fishNode = fish.node;
                Extension.SetAsLastSibling(fishNode)
            }
        }
    }
    public GetFishPos(fishid: string): cc.Vec3 {
        // let zhypos = this.GetArrZhy(fishid);
        // if (zhypos != null) return zhypos;

        for (let i = 0; i < this.FishScript.length; i++) {
            let fishcc = this.FishScript[i];
            //是组合鱼还是单个鱼
            if (fishcc.isDead == false && fishcc.fishKey == fishid) {
                return fishcc.CenterPos;
            }
        }
        return null;
    }

    public GetFishPosAR(fishid: string): cc.Vec3 {
        for (let i = 0; i < this.FishScript.length; i++) {
            let fishcc = this.FishScript[i];
            //是组合鱼还是单个鱼
            if (fishcc.isDead == false && fishcc.fishKey == fishid) {
                return this.NodeParent.convertToWorldSpaceAR(fishcc.CenterPos);
            }
        }
        return null;
    }
    public UpdataFunc(dt) {
        if (this.curIsTaopao) {
            this.taopaoDT = 0.2
            this.taopaoTimer += BuYuConfig.FrameTime
            if (this.taopaoTimer > this.taopaoDuring) {
                this.taopaoTimer = 0
                this.taopaoDT = 0
                this.curIsTaopao = false
            }
        }
        if (!this.FishScript || this.FishScript.length < 1) return;
        this.FishScript.forEach(fish => {
            fish.Update(dt + this.taopaoDT);
        });
    }
    public AABBNoLock(aabbData: AABBData): string {
        let pointArrAR: Array<cc.Vec2> = aabbData.pointArrAR
        for (let i = this.FishScript.length - 1; i >= 0; i--) {
            let fish: FishItem = this.FishScript[i]
            if (fish.isUsing && !fish.isDead) {
                if (AABBBY.IsCollision(pointArrAR,
                    fish.GetBoxPoint1(), fish.GetBoxPoint2(),
                    fish.GetBoxPoint3(), fish.GetBoxPoint4()
                )) {
                    return fish.fishKey;
                }
            }
        }
        return ""
    }
    //带锁定的碰撞结果检测
    //0 鱼还存在, 但是未发生碰撞
    //-1 锁定的鱼已经死亡,无法碰撞
    //1 碰上了锁定的鱼
    public AABBWithLock(aabbData: AABBData): number {
        let pointArrAR: Array<cc.Vec2> = aabbData.pointArrAR
        let lockFishId: string = aabbData.lockFishKey
        let fish = this.FindFishIsUsing(lockFishId)
        if (!fish.isDead) {
            if (AABBBY.IsCollision(pointArrAR,
                fish.GetBoxPoint1(), fish.GetBoxPoint2(),
                fish.GetBoxPoint3(), fish.GetBoxPoint4()
            )) {
                return 1;
            } else {
                return 0;
            }
        }
        return -1;
    }
    public ShowRed(fishKey: string) {
        let fish = this.FindFishIsUsing(fishKey)
        if (fish && fish.isUsing) {
            if (fish.isZhy) {
                let zhyGroup = fish.GetZHYGroupMark()
                for (let i = this.FishScript.length - 1; i >= 0; i--) {
                    let fish = this.FishScript[i];
                    if (fish.GetZHYGroupMark() == zhyGroup) {
                        fish.ShowRed()
                    }
                }
            } else {
                fish.ShowRed()
            }
        }
    }

    public FindFishInPosAR(arPos: cc.Vec2): string {
        for (let i = this.FishScript.length - 1; i >= 0; i--) {
            let fish = this.FishScript[i]
            if (fish.isUsing && !fish.isDead) {
                if (AABBBY.IsPointInRectangle(arPos,
                    fish.GetBoxPoint1(), fish.GetBoxPoint2(),
                    fish.GetBoxPoint3(), fish.GetBoxPoint4()
                )) {
                    return fish.fishKey;
                }
            }
        }
        return ""
    }

    public FindFishIsUsing(fishKey: string | number): FishItem {
        for (let i = this.FishScript.length - 1; i >= 0; i--) {
            let fish = this.FishScript[i]
            if (fish.fishKey == fishKey.toString() && fish.isUsing) {
                return fish
            }
        }
        return null
    }
    //获取渔场等级最高的鱼
    public GetMaxMultipleFish(): string {
        let maxMultiple = 0
        let fishKey = ""
        for (let i = this.FishScript.length - 1; i >= 0; i--) {
            let fish = this.FishScript[i]
            if (fish.isUsing && !fish.isDead && !fish.checkOut()) {
                if (fish.GetMultiple() > maxMultiple) {
                    maxMultiple = fish.GetMultiple()
                    fishKey = fish.fishKey;
                }
            }
        }
        return fishKey;
    }
    public HideGame() {
        this.curIsTaopao = false;
        this.taopaoDuring = 3;
        this.taopaoDT = 0;
        this.taopaoTimer = 0;

        for (let i = 0; i < this.FishScript.length; i++) {
            let fish = this.FishScript[i]
            fish.destroySelfWithOutCall();
            FishPoolManager.Instance.PutFishObj(fish.node);
        }
        this.FishScript = [];
        cc.log("FishScript", this.FishScript.length)
    }
    //没有找到则返回空
    public FindFishPosIsUsing(fishKey: string | number): any {
        let fish = this.FindFishIsUsing(fishKey)
        if (!fish) {
            return null
        } else {
            return fish.node.position;
        }
    }



}
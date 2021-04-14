
import KLTPool from "./Pools/KLTPool";
import CoinPool from "./Pools/CoinPool";
import GoldPool from "./Pools/GoldPool";
import RingPool1 from "./Pools/RingPool1";
import RingPool2 from "./Pools/RingPool2";
import RingPool3 from "./Pools/RingPool3";
import RingPool4 from "./Pools/RingPool4";
import RingPool6 from "./Pools/RingPool6";
import RingPool7 from "./Pools/RingPool7";
import RingPool8 from "./Pools/RingPool8";
import YiWangPool from "./Pools/YiWangPool";
import YuWangPool from "./Pools/YuWangPool";
import SpDabaozha from "./Pools/DabaozhaPool";
import ZPpool from "./Pools/ZPpool";
import FishPool from "./Pools/FishPool";
import RingPool5 from "./Pools/RingPool5";
import BulletPool from "./Pools/BulletPool";
import DabaozhaPool from "./Pools/DabaozhaPool";


export enum SpType {
    spBossLaixi = 1,
    leidianguang = 2,
    yuchaolailin = 3,
    ywdj = 4,
    dabaozha = 5,
    shandian = 6,
    hailang = 7,

}
export default class FishPoolManager {
    static _instance: FishPoolManager;
    private FishPoolNode: cc.Node;
    private fishObj: cc.Node;
    private bullet: cc.Node;

    private spBossLaixi: cc.Node;
    private leidianguang: cc.Node;
    private yuchaolailin: cc.Node;
    private shandian: cc.Node;
    private hailang: cc.Node;

    public static get Instance() {
        if (this._instance == null) {
            this._instance = new FishPoolManager();
        }
        return this._instance;
    }
    public Init() {
        this.FishPoolNode = cc.find("Canvas/FishNode/FishScene/Panel/FishPool");
        cc.log("this.FishPoolNode ", this.FishPoolNode)
        //鱼
        this.fishObj = cc.find("FishObj", this.FishPoolNode);
        FishPool.intance().Init(this.fishObj);
        //bullet
        this.bullet = cc.find("bullet", this.FishPoolNode);
        cc.log("this.bullet", this.bullet)
        BulletPool.intance().Init(this.bullet);
        //coin
        let coin = cc.find("Coinitem", this.FishPoolNode);
        CoinPool.intance().Init(coin, 20);

        let gold = cc.find("goldsprite", this.FishPoolNode);
        GoldPool.intance().Init(gold);

        //鱼后面的圆盘效果
        let ring1 = cc.find("RingTypeNode/RingItem1", this.FishPoolNode);
        RingPool1.intance().Init(ring1);
        let ring2 = cc.find("RingTypeNode/RingItem2", this.FishPoolNode);
        RingPool2.intance().Init(ring2);
        let ring3 = cc.find("RingTypeNode/RingItem3", this.FishPoolNode);
        RingPool3.intance().Init(ring3);
        let ring4 = cc.find("RingTypeNode/RingItem4", this.FishPoolNode);
        RingPool4.intance().Init(ring4);
        let ring5 = cc.find("RingTypeNode/RingItem5", this.FishPoolNode);
        RingPool5.intance().Init(ring5);
        let ring6 = cc.find("RingTypeNode/RingItem6", this.FishPoolNode);
        RingPool6.intance().Init(ring6);
        let ring7 = cc.find("RingTypeNode/RingItem7", this.FishPoolNode);
        RingPool7.intance().Init(ring7);
        let ring8 = cc.find("RingTypeNode/RingItem8", this.FishPoolNode);
        RingPool8.intance().Init(ring8);
        let ywdj = cc.find("ywdjItem", this.FishPoolNode);
        YiWangPool.intance().Init(ywdj);
        let yuwang = cc.find("YW", this.FishPoolNode);
        cc.log("yuwang", yuwang)
        YuWangPool.intance().Init(yuwang);

        let spdabao = cc.find("spPool/jd_by_dabaozha", this.FishPoolNode);
        SpDabaozha.intance().Init(spdabao, 3);



        let ZPItem = cc.find("spPool/ZP", this.FishPoolNode);
        ZPpool.intance().Init(ZPItem);

        let KLT = cc.find("spPool/KltsCache", this.FishPoolNode);
        KLTPool.intance().Init(KLT);

        this.leidianguang = cc.find("spPool/jd_by_leidianguang", this.FishPoolNode);
        this.shandian = cc.find("spPool/jd_by_shandian", this.FishPoolNode);
        this.hailang = cc.find("spPool/spine_HL", this.FishPoolNode);
        this.spBossLaixi = cc.find("spPool/jd_by_bosslaixi", this.FishPoolNode);
        this.yuchaolailin = cc.find("spPool/jd_by_yuchaolailin", this.FishPoolNode)
    }
    public getFishObj(): cc.Node {
        return FishPool.intance().getNode();
    }
    public PutFishObj(node) {
        FishPool.intance().putNode(node)
    }
    public ClearPool() {
        BulletPool.intance().Clear();
        CoinPool.intance().Clear();
        DabaozhaPool.intance().Clear();
        FishPool.intance().Clear();
        GoldPool.intance().Clear();
        KLTPool.intance().Clear();


        RingPool1.intance().Clear();
        RingPool2.intance().Clear();
        RingPool3.intance().Clear();
        RingPool4.intance().Clear();
        RingPool5.intance().Clear();
        RingPool6.intance().Clear();
        RingPool7.intance().Clear();
        RingPool8.intance().Clear();

        YiWangPool.intance().Clear();
        YuWangPool.intance().Clear();
        ZPpool.intance().Clear();
    }
    public GetRingObj(type: number): cc.Node {
        switch (type) {
            case 1:
                return RingPool1.intance().getNode();
            case 2:
                return RingPool2.intance().getNode();
            case 3:
                return RingPool3.intance().getNode();
            case 4:
                return RingPool4.intance().getNode();
            case 5:
                return RingPool5.intance().getNode();
            case 6:
                return RingPool6.intance().getNode();
            case 7:
                return RingPool7.intance().getNode();
            case 8:
                return RingPool8.intance().getNode();

        }
    }
    public PotRingObj(type, node) {
        switch (type) {
            case 1:
                RingPool1.intance().putNode(node);
                break;
            case 2:
                RingPool2.intance().putNode(node);
                break;
            case 3:
                RingPool3.intance().putNode(node);
                break;
            case 4:
                RingPool4.intance().putNode(node);
                break;
            case 5:
                RingPool5.intance().putNode(node);
                break;
            case 6:
                RingPool6.intance().putNode(node);
                break;
            case 7:
                RingPool7.intance().putNode(node);
                break;
            case 8:
                RingPool8.intance().putNode(node);
                break;
        }
    }
    public GetYiWang(): cc.Node {
        return YiWangPool.intance().getNode();
    }
    public PutYiWang(node) {
        YiWangPool.intance().putNode(node);
    }
    public GetYuWangItem(): cc.Node {
        return YuWangPool.intance().getNode();
    }
    public PutYuWangItem(node) {
        YuWangPool.intance().putNode(node);
    }
    public getBullet() {
        return BulletPool.intance().getNode();
    }
    public putBullet(node: cc.Node) {
        BulletPool.intance().putNode(node);
    }
    public getSPbyType(type: number) {
        switch (type) {
            case SpType.dabaozha:
                return SpDabaozha.intance().getNode();
            case SpType.leidianguang:
                return cc.instantiate(this.leidianguang);
            case SpType.spBossLaixi:
                return cc.instantiate(this.spBossLaixi);
            case SpType.yuchaolailin:
                return cc.instantiate(this.yuchaolailin);
            case SpType.shandian:
                return cc.instantiate(this.shandian);
            case SpType.hailang:
                return cc.instantiate(this.hailang);
        }
    }
    public PutSPbyType(type: number, node: cc.Node = null, parent: cc.Node = null) {
        switch (type) {
            case SpType.dabaozha:
                SpDabaozha.intance().putNode(node);
                break;
            case SpType.leidianguang:
                cc.log("涮菜", parent, node)
                node.destroy();
                cc.log("涮菜111", parent)
                break;
            case SpType.spBossLaixi:
                node.destroy();
                break;
            case SpType.yuchaolailin:
                node.destroy();
                break;
            case SpType.shandian:
                node.destroy();
                break;
            case SpType.hailang:
                node.destroy();
                break;
        }
    }
    //转盘
    public GetZP() {
        return ZPpool.intance().getNode();
    }
    public PutZP(node) {
        ZPpool.intance().putNode(node);
    }
    //骷髅头
    public GetKLT() {
        return KLTPool.intance().getNode();
    }
    public PutKLT(node) {
        KLTPool.intance().putNode(node);
    }
    public GetCoin() {
        return CoinPool.intance().getNode();
    }
    public PutCoin(node) {
        CoinPool.intance().putNode(node);
    }
    public GetGold() {
        return GoldPool.intance().getNode();
    }
    public PutGold(node: cc.Node) {
        GoldPool.intance().putNode(node);
    }
}
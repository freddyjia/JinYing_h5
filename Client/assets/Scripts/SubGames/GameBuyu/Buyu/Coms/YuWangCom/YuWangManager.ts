import FishPoolManager from "../../../FishPools/FishPoolManager";
import YuWangItem from "./YuWangItem";

export default class YuWangManager {
    public static _instance: YuWangManager;
    private node: cc.Node;
    private ywArr: YuWangItem[];

    public static get Instance(): YuWangManager {
        if (this._instance == null) {
            this._instance = new YuWangManager()
        }
        return this._instance;
    }
    public Init() {
        this.ywArr = [];
        this.node = cc.find("Canvas/FishNode/FishScene/Panel/YWContent");
    }
    public UpdataFunc(dt) {
        if (this.ywArr && this.ywArr.length > 0) {
            for (let i = 0; i < this.ywArr.length; i++) {
                let yuwangItem = this.ywArr[i];
                yuwangItem.Update(dt);
            }
        }
    }
    public CreatYuWang(pos: cc.Vec2, isme: boolean) {
        let yuwangNode = FishPoolManager.Instance.GetYuWangItem()
        let yuwang: YuWangItem = new YuWangItem();
        yuwang.Creat(yuwangNode, pos, isme);
        this.ywArr.push(yuwang);
        yuwangNode.parent = this.node;
        yuwang.YuwangDone = (yw) => {
            //清楚渔网
            FishPoolManager.Instance.PutYuWangItem(yw.node)
            let index = this.ywArr.indexOf(yw);
            this.ywArr.splice(index, 1);
        }
    }
    public HideGame() {
        this.ywArr.forEach(yw => {
            FishPoolManager.Instance.PutYuWangItem(yw.node)
        });
        this.ywArr = [];
    }
}
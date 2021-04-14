import ccC from "../../../Tools/ccC";


export default class FishScene {
    buyuScene: cc.Node;
    LoadSuc: () => void;//捕鱼scene加载成功
    Init() {
     
        this.AddBYscene();
    }
    //实例化场景
    private AddBYscene() {
        let canvasNode = cc.find("Canvas/FishNode");
        cc.log("canvasNode", canvasNode)
        ccC.loadResProgress("SubGames/BuYu/UI/Prefab/FishScene", cc.Prefab,
            (completedCount: number, totalCount: number, item: any) => {
            },
            (err: Error, perfab: any) => {

                if (err != null) {
                    cc.log(err)
                }
                let node: cc.Node = cc.instantiate(perfab);
                node.parent = canvasNode;
                this.buyuScene = node;
                this.buyuScene.active = true;
                this.LoadSuc();
            });
            
    }
    public HideFishScene() {
        this.buyuScene.active = false;
    }
    public ShowFishScene() {
        if (this.buyuScene)
            this.buyuScene.active = true;
    }

}
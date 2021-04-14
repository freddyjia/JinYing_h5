export default class FishBasePool {
    private profab: cc.Node;
    private NodePool: cc.NodePool;
    public Init(profab: cc.Node, poolcount: number = 10) {
        this.profab = profab;
        this.NodePool = new cc.NodePool();
        for (let i = 0; i < poolcount; i++) {
            let node = cc.instantiate(profab);
            this.NodePool.put(node);
        }
    }
    public getNode(): cc.Node {
        let node = null;
        if (this.NodePool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            node = this.NodePool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            node = cc.instantiate(this.profab);
        }
        //  cc.log("池子大小", this.NodePool.size())
        return node;
    }
    public putNode(node: cc.Node) {
        this.NodePool.put(node);
    }
    public Clear() {
        this.NodePool.clear();
    }
}
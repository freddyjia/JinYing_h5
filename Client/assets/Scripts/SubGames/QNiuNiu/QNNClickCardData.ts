export default class QNNClickCardData {

    public indexForm0: number
    public selectStatus: boolean
    public cardKey: string
    public showIndex: number = -1  //越小表示越先被点击


    public Reset() {
        this.indexForm0 = -1
        this.selectStatus = false
        this.cardKey = ""
        this.showIndex = -1
    }


}
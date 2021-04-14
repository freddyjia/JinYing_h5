import QNNDatasFunc from "./QNNDatasFunc";

export default class QNNMatchingSubView  implements IQNNMsg {


    private trans
    private datasFunc: QNNDatasFunc

    PlayAnim(msg: string, msgBody: any): void {
    }

//-@param trans UnityEngine.Transform
    public Construction(trans, datas, datasFunc) {

        this.trans = trans
        this.datasFunc = datasFunc


        this.trans.active = (false)

    }


    public Show(msgBody) {
        this.trans.active = (true)
    }

    public Hide(msgBody) {
        this.trans.active = (false)
    }

    Exit(): void {
    }


}
import { FishScreenEvt } from "../Buyu/Coms/PanelTouch/FishTouchEventManager"

export default class BYTouchData {

    public readonly fishKey: string = ""
    public readonly evt: FishScreenEvt


    constructor(fishKey = "", evt: FishScreenEvt = null) {
        this.fishKey = fishKey
        this.evt = evt
    }

}
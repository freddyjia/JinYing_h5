import MessageCenter from "../../../../../MVCFramework/MessageCenter"
import DatasFuncBY from "../../../DatasFuncBY"
import FishManager from "../FishCom/FishManager"
import MessageNamesBY from "../../../MessageNamesBY"
import BYTouchData from "../../../BuyuStaticData/BYTouchData"
import FishItem from "../FishCom/FishItem"
import LockFishManager from "./LockFishManager"

export class FishScreenEvt {
    public isClick = false
    public isPress = false
    public okScreen = false
    public okRealAutoShoot = false
    public uiPos = null
    public arPos = null
    public realAutoShootPos: cc.Vec2 | null
}
export default class FishTouchEventManager {
    static _instance: FishTouchEventManager;
    private Panel: cc.Node;
    private touchPos: cc.Vec2;
    private touching = false;
    private nodeWidth = 0;
    private nodeHeight = 0;
    private evtInfo = new FishScreenEvt()


    private timeClick2Press = 0.2
    private pressTime = 0
    private realPressTime = 0
    private realAutoShootTime = 0
    private pressCnt = 0

    private isClick = false
    private isPress = false
    private okScreen = false
    private okRealAutoShoot = false
    private realAutoShootPos


    //锁鱼
    private mouseFinalPos: any
    public selfLockFishKey: string = ""

    public static get Instance(): FishTouchEventManager {
        if (this._instance == null) {
            this._instance = new FishTouchEventManager();
        }
        return this._instance;
    }
    public Init() {
        this.Panel = cc.find("Canvas/FishNode/FishScene/Panel/TouchPanel");
        if (!this.touchPos) {
            this.touchPos = new cc.Vec2(this.Panel.width / 2, this.Panel.height / 2)
        }
     
        this.nodeWidth = this.Panel.width;
        this.nodeHeight = this.Panel.height;
        cc.log("nodeWidth",this.nodeWidth,this.nodeHeight)
        this.Panel.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this)
        this.Panel.on(cc.Node.EventType.TOUCH_MOVE, this.onEventMove, this)
        this.Panel.on(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this)
        this.Panel.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this)
    }
    private onEventStart(event) {
        this.touchPos = event.getLocation()
        //   cc.log("positon",  this.touchPos)
        this.touching = true

        this.pressTime = 0
        this.realPressTime = 0
        this.isClick = false
        this.isPress = false
        this.okScreen = false
    }
    private onEventMove(event) {
        this.touchPos = event.getLocation();
        this.touching = true
    }
    private onEventCancel(event) {
        this.TouchOver()
    }

    private onEventEnd(event) {
        this.TouchOver()
    }
    private TouchOver() {
        cc.log("点击。。。。。")
        this.touching = false
        if (this.pressTime < this.timeClick2Press) {
            this.isClick = true
            this.isPress = false
            this.okScreen = true
        }
        this.pressCnt = 0
        this.pressTime = 0
        this.realPressTime = 0

        if (this.isClick || this.isPress) {
            this.okRealAutoShoot = true
            this.realAutoShootTime = 0
        }

    }
    public FishDead(fishid: string) {
        if (this.selfLockFishKey == fishid) {
            this.selfLockFishKey = "";
            cc.log("射击行为锁定鱼清零");
            LockFishManager.Instance.HasFishDead(fishid)
        }
    }
    public FishOver(fishId: string) {

    }
    public UpdataFunc(dt) {
        if (this.touchPos) {
            this.fScreenEvt(this.GetScreenEvt())
        }
        if (!DatasFuncBY.intance().fGetLockStatus()) {
            FishTouchEventManager.Instance.selfLockFishKey = "";
            LockFishManager.Instance.ClearSelfLockLine();
        }
        this.CheckScreen(dt, DatasFuncBY.intance().fGetMSheetDelayTime())
    }
    public fScreenEvt(evt: FishScreenEvt) {
        let isClick = evt.isClick
        let isPress = evt.isPress
        let okRealAutoShoot = evt.okRealAutoShoot
        if (isClick || isPress || okRealAutoShoot) {
            this.LocalPlayerShoot(evt)
        }
    }
    public LocalPlayerShoot(evt: FishScreenEvt) {
        let fishKey = FishManager.Instance.FindFishInPosAR(evt.arPos)
        let isInLockModel = DatasFuncBY.intance().fGetLockStatus()
        let isAutoShootModel = DatasFuncBY.intance().fGetAutoStatus()
        let isClick = evt.isClick
        let isPress = evt.isPress
        let okScreen = evt.okScreen
        let okAutoShoot = evt.okRealAutoShoot
        let realAutoShootPos = evt.realAutoShootPos
        let isRayFish = fishKey != ""
        let mousePosition = evt.arPos
        if (isClick || isPress) {
            if (!this.mouseFinalPos) {
                this.mouseFinalPos = evt.arPos
            }
        }
        //  cc.log("自动射击", okAutoShoot, isInLockModel, isAutoShootModel)
        if (isInLockModel && isAutoShootModel && isClick && isRayFish) {
            this.LockAutoClickFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (isInLockModel && isAutoShootModel && isClick && !isRayFish) {
            this.LockAutoClickAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (isInLockModel && isAutoShootModel && isPress && isRayFish) {
            this.LockAutoPressFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (isInLockModel && isAutoShootModel && isPress && !isRayFish) {
            this.LockAutoPressAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (isInLockModel && !isAutoShootModel && isClick && isRayFish) {
            this.LockUnAutoClickFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (isInLockModel && !isAutoShootModel && isClick && !isRayFish) {
            this.LockUnAutoClickAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (isInLockModel && !isAutoShootModel && isPress && isRayFish) {
            this.LockUnAutoPressFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (isInLockModel && !isAutoShootModel && isPress && !isRayFish) {
            this.LockUnAutoPressAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (!isInLockModel && isAutoShootModel && isClick && isRayFish) {
            this.UnLockAutoClickFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (!isInLockModel && isAutoShootModel && isClick && !isRayFish) {
            this.UnLockAutoClickAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (!isInLockModel && isAutoShootModel && isPress && isRayFish) {
            this.UnLockAutoPressFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (!isInLockModel && isAutoShootModel && isPress && !isRayFish) {
            this.UnLockAutoPressAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (!isInLockModel && !isAutoShootModel && isClick && isRayFish) {
            this.UnLockUnAutoClickFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (!isInLockModel && !isAutoShootModel && isClick && !isRayFish) {
            this.UnLockUnAutoClickAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (!isInLockModel && !isAutoShootModel && isPress && isRayFish) {
            this.UnLockUnAutoPressFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        } else if (!isInLockModel && !isAutoShootModel && isPress && !isRayFish) {
            this.UnLockUnAutoPressAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey)
        }
        if (!okAutoShoot) {
            return
        }
        //射击行为
        if (isInLockModel && isAutoShootModel) {
            cc.log("自动锁定", this.selfLockFishKey)
            if (!this.SelfHasLock()) {
                this.Lock2MaxFish()
            }
            if (this.SelfHasLock()) {
                this.Shoot(this.selfLockFishKey, this.evtInfo)
            }
        } else if (isInLockModel && !isAutoShootModel) {
            if (this.SelfHasLock()) {
                this.Shoot(this.selfLockFishKey, evt)
            } else {
                if ((isClick || isPress) && mousePosition) {
                    if (this.SelfHasLock()) {
                        this.Shoot(this.selfLockFishKey, evt)
                    } else {
                        this.Shoot("", evt)
                    }
                }
            }
        } else if (!isInLockModel && isAutoShootModel) {
            if (this.mouseFinalPos) {
                this.Shoot("", evt)
            }
        } else if (!isInLockModel && !isAutoShootModel) {
            if ((isClick || isPress) && this.mouseFinalPos) {
                this.Shoot("", evt)
            }
        }
    }
    private Shoot(fishKey: string, evt: FishScreenEvt) {
        if (this.SelfHasLock()) {
            let fish: FishItem = FishManager.Instance.FindFishIsUsing(this.selfLockFishKey);
            if (fish && fish.checkOut()) {
                this.selfLockFishKey = "";
                LockFishManager.Instance.ClearSelfLockLine();
                fishKey = "";
            }
        }
        let byTouchData = new BYTouchData(fishKey, evt);
        MessageCenter.SendMessage(MessageNamesBY.BYToushScreen, {
            data: byTouchData
        })
    }

    public GetScreenEvt(): FishScreenEvt {
        this.evtInfo.isClick = this.isClick
        this.evtInfo.isPress = this.isPress
        this.evtInfo.okScreen = this.okScreen
        this.evtInfo.okRealAutoShoot = this.okRealAutoShoot
        this.evtInfo.realAutoShootPos = this.realAutoShootPos
        this.evtInfo.uiPos = new cc.Vec2(this.touchPos.x - this.nodeWidth / 2, this.touchPos.y - this.nodeHeight / 2)
        this.evtInfo.arPos = new cc.Vec2(this.touchPos.x, this.touchPos.y)
        return this.evtInfo;
    }
    private CheckScreen(dt, SheetDelayTime) {
        this.isClick = false
        this.isPress = false
        this.okScreen = false
        this.okRealAutoShoot = false
        this.realAutoShootPos = null
        this.realAutoShootTime = this.realAutoShootTime + dt

        if (this.realAutoShootTime > SheetDelayTime) {
            this.okRealAutoShoot = true
            this.realAutoShootTime = 0
        }
        if (this.touching) {
            this.pressTime = this.pressTime + dt
            if (this.pressTime > this.timeClick2Press) {
                if (this.pressCnt == 0) {
                    this.pressCnt = 1
                    this.isPress = true
                    this.isClick = false
                    this.okScreen = true
                }
                this.realPressTime = this.realPressTime + dt
                if (this.realPressTime > SheetDelayTime) {
                    this.realPressTime = 0
                    this.pressCnt = this.pressCnt + 1
                    this.isClick = false
                    this.isPress = true
                    this.okScreen = true
                }
                this.realAutoShootPos = this.touchPos
            }
        }

        if (this.isClick || this.isPress) {
            this.okRealAutoShoot = true
            this.realAutoShootTime = 0
        }

    }
    public SelfHasLock() {

        return this.selfLockFishKey != "";
    }
    Lock2MaxFish() {
        let maxFishKey = FishManager.Instance.GetMaxMultipleFish();
        let pos = FishManager.Instance.GetFishPos(maxFishKey);
        if (pos != null) {
            this.selfLockFishKey = maxFishKey;
            this.touchPos = new cc.Vec2(pos.x, pos.y)
            this.evtInfo.arPos = new cc.Vec2(this.touchPos.x, this.touchPos.y)
        }
    }
    private LockAutoClickFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
        cc.log("自动锁定鱼")
        this.Change2LockFish(fishKey)
        if (!this.SelfHasLock()) {
            this.Lock2MaxFish()
        }
    }
    private LockAutoClickAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
        cc.log("自动锁定空间")
    }
    private LockAutoPressFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
        this.Change2LockFish(fishKey)
        if (!this.SelfHasLock()) {
            this.Lock2MaxFish()
        }
        cc.log("自动锁定鱼—长安")
    }
    private LockAutoPressAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
        cc.log("自动锁定空间—长安")
    }
    private LockUnAutoClickFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
        this.Change2LockFish(fishKey)
    }
    private LockUnAutoClickAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private LockUnAutoPressFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
        this.Change2LockFish(fishKey)
    }
    private LockUnAutoPressAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private UnLockAutoClickFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private UnLockAutoClickAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private UnLockAutoPressFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private UnLockAutoPressAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private UnLockUnAutoClickFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private UnLockUnAutoClickAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private UnLockUnAutoPressFish(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private UnLockUnAutoPressAir(isClick, isPress, okScreen, okAutoShoot, mousePosition, realAutoShootPos, fishKey) {
    }
    private Change2LockFish(fishKey: string) {
        cc.log("更改被锁定的鱼", fishKey)
        this.selfLockFishKey = fishKey;
    }

}
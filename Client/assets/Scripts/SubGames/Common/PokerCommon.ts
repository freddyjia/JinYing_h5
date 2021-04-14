import Res from "../../Global/Res";
//  import { CardInfo } from "../../Protos/DouDiZhu";
import NodeUtil from "../../Tools/NodeUtil";
import TimerManager from "../../Components/TimerManager";
import XTween from "../../Tools/XTween/XTween";
import Util from "../../Tools/Util";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";
// import { CardColor, CardSize } from "../../Protos/PokerInfo";

export class PokerItem {
    node: cc.Node;
    canSelect: boolean = true;
    originY: number = 0;

    hasSelected: boolean = false;
    offsetY: number = 40;
    imgBack: cc.Sprite;
    normalPanel: cc.Node;
    jokerPanel: cc.Node;
    imgJoker: cc.Sprite;
    imgJokerBig: cc.Sprite;
    Back: cc.Node;
    selected: cc.Node;
    timerIds: any[];
    // info: CardInfo;
    color:number;
    size:number;
    id:number;
    isNiu:boolean;
    touchMoved:boolean = false;

    private imgDic: { [name: string]: cc.Sprite } = {};
    private pokerItemName: string[] = ["imgNumber", "imgColor", "imgJQK", "imgBigColor"];
    /**
     * 创建一个新的 PokerItem 对象，并且会克隆一个新的对象，如果使用池的话，不要这么使用。
     * @param objPoker 复制对象
     * @param parent 父节点
     */
    static CreatePoker(objPoker: cc.Node, parent: cc.Node): PokerItem {
        let poker = new PokerItem();
        poker.Init(objPoker, parent, false);
        return poker;
    }

    static InitPoker(trans: cc.Node,parent:cc.Node = null): PokerItem {
        let poker = new PokerItem();
        poker.Init(trans,parent);
        return poker;
    }

    private Init(trans: cc.Node, parent: cc.Node = null, noCreate: boolean = true) {
        if (noCreate) {
            this.node = trans;
        } else {
            this.node = cc.instantiate(trans);
            
            this.node.setScale(cc.Vec2.ONE);
            this.node.setPosition(cc.Vec2.ZERO);
        }
        if(parent){
            this.node.setParent(parent)
        }
        this.hasSelected = false;
        this.offsetY = 20;
        this.node.active = true;
        this.touchMoved = false;
        this.normalPanel = NodeUtil.SearchChild(this.node, "NormalPoker");
        this.jokerPanel = NodeUtil.SearchChild(this.node, "JokerPoker");
        this.normalPanel.active = false;
        this.jokerPanel.active = false;
        this.imgJoker = NodeUtil.SearchSprite(this.jokerPanel, "ImgJoker");
        this.imgJokerBig = NodeUtil.SearchSprite(this.jokerPanel, "ImgBigJoker");
        for (let index = 0; index < 4; index++) {
            this.imgDic[this.pokerItemName[index]] = NodeUtil.SearchSprite(this.normalPanel, this.pokerItemName[index]);
        }
        this.Back = this.node.getChildByName("Back");
        this.selected = this.node.getChildByName("Selected");
        this.timerIds = [];
    }

    public ChangeTouchMoveStatus(status: boolean) {
        this.touchMoved = status;
        this.selected.active = status;
    }

    private ItemSelected(selected) {
        if (this.selected) {
            let targetPos;
            let pos = this.node.position;
            if (selected) {
                targetPos = new cc.Vec2(pos.x, this.originY + this.offsetY);
            } else {
                targetPos = new cc.Vec2(pos.x, this.originY);
            }
            this.node.setPosition(targetPos);
        }
        this.ChangeTouchMoveStatus(false);
    }

    public ChangeItemSelectedStatus(status) {
        this.hasSelected = status;
        this.ItemSelected(this.hasSelected);
    }

    public SetCanBeSelect(canSelect) {
        this.canSelect = canSelect;
        this.selected.active = !canSelect;
    }

    public SetVisible(visible) {
        if (this.node == null) {
            return;
        } else {
            this.node.active = visible;
        }
    }

    public SetPosition(pos: cc.Vec2) {
        if (this.node == null) return;
        this.node.setPosition(pos);
    }

    private SetName(name) {
        if (this.node == null) return;
        this.node.name = name;
    }

    public UpdateView(id:number, color: number,size: number, show: boolean = true, isNiu:boolean=false) {
        // if (info == null) {
        //     return;
        // }
        this.id = id;
        this.color = color;
        this.size = size;
        this.isNiu = isNiu;
        this.Back.active = !show;
        let imgStr = "Poker_";
        this.jokerPanel.active = size >= 16 ? true : false;
        this.normalPanel.active = size <= 15 ? true : false;

        this.SetName(`${id}-${color}-${size}`);
        let atlas = Res.Atlas.Pokers;
        if (size <= 15) {
            for (const key in this.imgDic) {
                let imgStr = "Poker_";
                if (this.imgDic.hasOwnProperty(key)) {
                    const element = this.imgDic[key];
                    switch (key) {
                        case this.pokerItemName[0]:
                            let colorStr = "R_";
                            if (color == 1 || color == 3) colorStr = "B_";
                            imgStr = `${imgStr}${colorStr}${size}`;
                            NodeUtil.SetSpriteFrame(element, atlas, imgStr);
                            break;
                        case this.pokerItemName[1]:
                            imgStr = `${imgStr}Color_${color}`;
                            NodeUtil.SetSpriteFrame(element, atlas, imgStr);
                            break;
                        case this.pokerItemName[2]:
                            imgStr = `${imgStr}${color}_${size}`;
                            if (size > 10 && size < 14) {
                                element.node.active = true;
                                NodeUtil.SetSpriteFrame(element, atlas, imgStr);
                            } else {
                                element.node.active = false;
                            }
                            break;
                        case this.pokerItemName[3]:
                            imgStr = `${imgStr}Color_${color}`;
                            if (size > 10 && size < 14) {
                                element.node.active = false;
                            } else {
                                element.node.active = true;
                                NodeUtil.SetSpriteFrame(element, atlas, imgStr);
                            }
                            break;
                    }
                }
            }
        } else {
            let lStr = `${imgStr}JokerL_${size}`;
            let rStr = `${imgStr}JokerR_${size}`;
            NodeUtil.SetSpriteFrame(this.imgJoker, atlas, lStr);
            NodeUtil.SetSpriteFrame(this.imgJokerBig, atlas, rStr);
        }
    }

    private MoveTo(duration: number, targetPos: cc.Vec2, delay: number = null, completeCallBack: () => void = null, easeType = null) {
        // TODO 需要在添加了 XTween 脚本之后继续修改
        let d = delay || 0;
        let ease = easeType || 0;
        // XTween.DoMove(this.node,null,targetPos,duration,1,false,ease,completeCallBack,d).Play()
        XTween.DoMoveWorldPos(this.node,targetPos,cc.Vec2.ZERO,duration,1,false,ease,completeCallBack,d).Play()
    }

    /**
     * 控制纸牌移动到指定位置
     * @param duration 动作持续时间
     * @param targetPos 目标位置，需要是世界座标
     * @param delay 延时
     * @param completeCallBack 结束回调
     * @param easeType 飞行动画效果
     */
    public Fly(duration: number, targetPos: cc.Vec2, delay: number = null, completeCallBack: () => void = null, easeType = null) {
        this.MoveTo(duration, targetPos, delay, completeCallBack, easeType);
    }

    public PickUp(pos: cc.Vec2, delay: number) {
        this.MoveTo(0.1, pos, delay);
    }

    /**
     * 
     * @param toPos 这是一个世界点，通过convertToWorldSpaceAR(cc.Vec2.ZERO)而来
     * @param duration 
     * @param delay 
     * @param offsetPos 
     */
    public FoldUnFoldShowAll(toPos: cc.Vec2, duration: number, delay: number, offsetPos:cc.Vec2) {
        let originPos = new cc.Vec2(this.node.position.x, this.node.position.y);
        delay = delay || 0;

        let finalPos = toPos;
        finalPos.x += offsetPos.x;
        finalPos.y += offsetPos.y;

        let moveTo = (duration: number, targetPos: cc.Vec2, delay: number = null, completeCallBack: () => void = null, easeType = null)=>{
            let d = delay || 0;
            let ease = easeType || 0;
            XTween.DoMove(this.node,null,targetPos,duration,1,false,ease,completeCallBack,d).Play()
        };

        moveTo(duration*0.5, finalPos, delay, ()=>
        {
            Util.PerformWithDelay(0.2, ()=>{
                this.Back.active = false;
                moveTo(duration*0.5, originPos, 0, null);
            }, this.timerIds, true);
        })
    }

    public Destroy()
    {
        for (let i in this.timerIds)
        {
            TimerManager.GetInstance().DeleteTimer(this.timerIds[i]);
        }
        this.timerIds = [];
    
        this.node.destroy();
        this.node = null;
    }

    public unuse(){
        if(Global.showLog == true)
            cc.error("在 put 的时候调用了 unuse 函数")
        this.node.parent = null
    }

    public ToString(){
        let str = ""
        if(this.id && this.color && this.size){
            let colorStr = ""
            switch(this.color){
                case 1:
                    colorStr = "黑桃"
                    break
                    case 2:
                    colorStr = "红桃"
                    break
                    case 3:
                    colorStr = "梅花"
                    break
                    case 4:
                    colorStr = "方块"
                    break
            }
            let sizeStr = this.size.toString()
            if(this.size>10){
                switch(this.size){
                    case 11:
                    sizeStr = "J"
                    break
                    case 12:
                    sizeStr = "Q"
                    break
                    case 13:
                    sizeStr = "K"
                    break
                    case 14:
                    sizeStr = "A"
                    break
                    case 15:
                    sizeStr = "2"
                    break
                    case 16:
                    sizeStr = "小王"
                    break
                    case 17:
                    sizeStr = "大王"
                    break
                }
            }
            str = `${colorStr}${sizeStr}`
        }
        return str
    }
}

export class PokerGamePlyerObjects {
    public root: cc.Node;
    public imgHead: cc.Sprite;
    public imgHeadBox: cc.Sprite;
    public textName: cc.Label;
    public imgVip: cc.Sprite;
    public imgDiZhu: cc.Node;
    public textPokerNum: cc.Label;
    public textGoldNum: cc.Label;
    public pokerPoint: cc.Node;
    // public pokerItem: cc.Node;
    public imgActionTip: cc.Sprite;
    public warning: cc.Node;
    public clockParent: cc.Node;
    public textClock: cc.Label;
    public displayPokerPoint: cc.Node;
    public displayPokerItem: cc.Node;
    public cardTypeEffect: sp.Skeleton;
    public specialEffect: sp.Skeleton;
    public imgTrusteeship: cc.Node;
    public pokerPosCalc: cc.Node;
    public originPokerAnchorPos: cc.Vec2;
    public defaultBoxSprite: cc.SpriteFrame;
    petNumEffectText: cc.Label;
    petEffectOriginPos: cc.Vec2;
    clockEffect: any;
    PlayerInfoViewPos: cc.Node;
    tuoGuanEffect: sp.Skeleton;
    locationText: cc.Label;
}

export class PokerItemController {
    // 这个属性用在插入新的手牌的时候的Y轴提高值
    private static readonly offsetY = 40;
    public static ResetPokerPos(handPokerItem: PokerItem[], offset) {
        let myPokerCount = handPokerItem.length;
        let middleSet = myPokerCount / 2 - 0.5;
        for (let index = 0; index < handPokerItem.length; index++) {
            const element = handPokerItem[index];
            let newPox = (index - middleSet) * offset;
            let targetPos = new cc.Vec2(newPox, 0);
            element.node.position = targetPos;
        }
    }

    /**
     * 将新的扑克牌插入到手牌当中
     * @param handPokerItem 手牌数组
     * @param itemList 需要插入手牌的数组
     * @param offset x轴间隔插值
     */
    public static AddHandPokers(handPokerItem: PokerItem[], itemList: PokerItem[], offset) {
        itemList.forEach(item => {
            let handCount = handPokerItem.length;
            let maxId = handPokerItem[0].id;
            let minId = handPokerItem[handCount - 1].id;
            let id = item.id;
            if (id > maxId) {
                item.node.setSiblingIndex(0);
                handPokerItem.unshift(item);
            } else if (id < minId) {
                item.node.setSiblingIndex(-1);
                handPokerItem.push(item);
            } else {
                for (let index = 0; index < handCount; index++) {
                    const element = handPokerItem[index];
                    if(id>element.id){
                        item.node.setSiblingIndex(index)
                        handPokerItem.splice(index,0,item)
                        break;
                    }
                }
            }
        });
        let handCount = handPokerItem.length
        let middleSet = handCount/2 - 0.5
        handPokerItem.forEach((item,index)=>{
            let newPox = (index - middleSet)*offset
            let newPoy = 0
            for (let index = 0; index < itemList.length; index++) {
                const element = itemList[index];
                if(element.id == item.id){
                    newPoy = newPoy+this.offsetY
                    break
                }
            }
            item.node.position = new cc.Vec2(newPox,newPoy)
        })
        TimerManager.GetInstance().CallActionDelay(()=>{
            for (let index = 0; index < itemList.length; index++) {
                const element = itemList[index];
                let originPos = element.node.position
                if(Global.showLog == true)
                    cc.error(`Current pos: ${originPos}, TargetPos: ${originPos.x} 0`)
                XTween.DoMove(element.node,originPos,new cc.Vec2(originPos.x,0),0.5).Play()
            }
        },1)
    }

    public static MoveToCenter(handPokerItem:PokerItem[],removeCardInfo:any[],offset){
        removeCardInfo.forEach((item,index)=>{
            let id = item['id']
            let handCount = handPokerItem.length
            for (let index = 0; index < handPokerItem.length; index++) {
                const element = handPokerItem[index];
                if(id == element.id){
                    handPokerItem.splice(index,1)
                    break
                }
            }
        })
        PokerItemController.ResetPokerPos(handPokerItem,offset)
    }
}

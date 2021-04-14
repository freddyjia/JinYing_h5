import { BulletBoom, SpecialDead } from "../../../../../Protos/BuYu";
import Util from "../../../../../Tools/Util";
import XTween from "../../../../../Tools/XTween/XTween";
import BuYuConfig from "../../../Configs/BuYuConfig";
import DatasFuncBY from "../../../DatasFuncBY";
import FishItem from "../FishCom/FishItem";
import FishManager from "../FishCom/FishManager";
import FishPoolManager from "../../../FishPools/FishPoolManager";
import FishTools, { GoldPara } from "../../../Tools/FishTools";
import CoinItem from "./CoinItem";
import AudioManager from "../../../../../Manager/AudioManager";
import TurretManager from "../PaoTaiCom/TurretManager";
import TimerManager from "../../../../../Components/TimerManager";

export default class Coinmanager {
    static _instance: Coinmanager;
    private goldnode: cc.Node;
    private labelnode: cc.Node;
    private coins: CoinItem[] = [];
    private spGolds: cc.Node[] = [];
    public static get Instance(): Coinmanager {
        if (!this._instance) {
            this._instance = new Coinmanager();
        }
        return this._instance;
    }
    public Init() {
        this.goldnode = cc.find("Canvas/FishNode/FishScene/Panel/GoldContent/GoldCon");
        this.labelnode = cc.find("Canvas/FishNode/FishScene/Panel/GoldContent/LableCon");
    }
    public FishDead(info: BulletBoom) {
        //  cc.log("info", info.FishID, info.gold, info.isDead, info.seatid, info.playerGold);
        if (!info.isDead) return;
        let fish = FishManager.Instance.FindFishIsUsing(info.FishID);
        if (fish) {
            let goldPara = this.GetGoldPara(fish);
            this.SetFishGold(info.gold, fish.CenterPos, info.seatid, info.playerGold);
            if (goldPara != null) {
                for (let i = 0; i < goldPara.goldCnt; i++) {
                    this.CreatCoin(fish.CenterPos, info.seatid, goldPara)
                }
            }
        }
    }
    public SpecialFishDead(res: SpecialDead) {
        let seatUIPos = DatasFuncBY.intance().fGetUIPos(res.seatid);
        let MUIPos = DatasFuncBY.intance().fGetMUIPos();
        let specilDeadPos: cc.Vec3[] = [];

        for (let i = 0; i < res.FishIds.length; i++) {
            let deadFishId = res.FishIds[i];
            for (let i = 0; i < FishManager.Instance.FishScript.length; i++) {
                let fish = FishManager.Instance.FishScript[i];

                if (deadFishId.toString() == fish.fishKey) {
                    //鱼翻滚----
                    let goldPara = this.GetGoldPara(fish);
                    if (goldPara != null) {
                        for (let i = 0; i < goldPara.goldCnt; i++) {
                            this.CreatCoin(fish.CenterPos, res.seatid, goldPara)
                        }
                    }
                }
            }
        }
    }
    private GetGoldPara(fish: FishItem): GoldPara {
        if (!fish) return;
        let deadConfig: any;
        if (!fish.isZhy) {
            deadConfig = FishTools.GetAConfig(fish.fishSkinIndex)

        } else {
            deadConfig = FishTools.GetAConfig(fish.FishConfigIndex)

        }
        let goldPara: GoldPara = null;
        goldPara = FishTools.CheckCoin(deadConfig);
        return goldPara;
    }

    public SetFishGold(gold: number, pos: cc.Vec3, seat: number, playerGold) {
        let pngPath = "";
        if (DatasFuncBY.intance().fGetMSeatId() != seat)
            pngPath = BuYuConfig.FontAtlas.fail;
        else
            pngPath = BuYuConfig.FontAtlas.win;
        let goldSprite = FishPoolManager.Instance.GetGold();
        this.spGolds.push(goldSprite);
        goldSprite.parent = this.labelnode;
        goldSprite.active = true;
        goldSprite.setPosition(pos)
        let newValue = Util.formatGoldText(gold) //重新格式化一次
        let strContent = newValue.toString()

        let spaceingX = 32;
        let aliginCenter = false
        let baseScale = 1
        let noCenterOffset = -54.3
        FishTools.SetSpriteFont(strContent, goldSprite, pngPath, spaceingX, aliginCenter, baseScale, noCenterOffset);
        goldSprite.scale = 0.8;
        let tweener = XTween.DoScale(goldSprite, new cc.Vec2(0.8, 0.8), new cc.Vec2(0, 0), 0.3, 1, false, 0, () => {
            let index = this.spGolds.indexOf(goldSprite);
            if (index != -1) {
                this.spGolds.splice(index, 1)
                FishPoolManager.Instance.PutGold(goldSprite)
                TurretManager.Instance.UpdatePlayerGold(seat, playerGold);
                TurretManager.Instance.UpdatePlayerTopGold(seat, gold);
            }
        }, 1);




        tweener.Play()

    }
    private CreatCoin(CoinPos: cc.Vec3, userSeat: number, goldPara: GoldPara) {
        let SeatIndex = DatasFuncBY.intance().fGetUIPos(userSeat) - 1;
        let coinnode = FishPoolManager.Instance.GetCoin();
        coinnode.parent = this.goldnode;
        let coin: CoinItem = new CoinItem();
        coin.Init(coinnode, CoinPos, SeatIndex, goldPara, 255, 0);
        this.coins.push(coin);
        coin.CoinDoneAni = (coin) => {
            FishPoolManager.Instance.PutCoin(coin.rootNode);
            let index = this.coins.indexOf(coin);
            this.coins.splice(index, 1)
        }
        let coinnode1 = FishPoolManager.Instance.GetCoin();
        coinnode1.parent = this.goldnode;
        let coin1: CoinItem = new CoinItem();
        coin1.Init(coinnode1, CoinPos, SeatIndex, goldPara, 125, 0.2);
        this.coins.push(coin1);
        AudioManager.GetInstance().SoundPlay(BuYuConfig.Audio.by_gold1);
        coin1.CoinDoneAni = (coin) => {
            FishPoolManager.Instance.PutCoin(coin.rootNode);
            let index = this.coins.indexOf(coin);
            this.coins.splice(index, 1)
        }
    }
    public UpdataFunc(dt) {
        if (this.coins.length < 1) return;
        this.coins.forEach(coin => {
            coin.Update(dt);
        });
    }
    public HideGame() {
        if (this.coins.length > 0)
            for (let i = 0; i < this.coins.length; i++) {
                FishPoolManager.Instance.PutCoin(this.coins[i].rootNode);

            }
        this.coins = [];

        if (this.spGolds.length > 0)
            for (let i = 0; i < this.spGolds.length; i++) {
                FishPoolManager.Instance.PutGold(this.spGolds[i]);
            }
        this.spGolds = [];
    }
}
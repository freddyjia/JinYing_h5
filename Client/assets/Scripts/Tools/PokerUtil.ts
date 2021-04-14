import { CardInfo } from "../Protos/DouDiZhu";
import { Random } from "./Random";
import Util from "./Util";
import { PokerItem } from "../SubGames/Common/PokerCommon";

export class PokerUtil {
    /**
     * 创建一副完整的扑克牌
     *
     * @param count 手牌张数,默认17张( 17 对应斗地主，16 对应跑得快( 3张A )，15 对应跑得快[ 1张A])
     * @returns 一副完整手牌
     */
    static CreateCompletePokers(count: number = 17): Array<CardInfo> {
        let pokerCount = count
        let completePokers: Array<CardInfo> = [];
        let index = 3;
        let specialCount = 3;
        while (index < 16) {
            switch (pokerCount) {
                case 15:
                    switch (index) {
                        case 15:
                            specialCount = 1;
                            break;
                        case 14:
                            specialCount = 1;
                            break;
                        case 13:
                            specialCount = 3;
                            break;
                        default:
                            specialCount = 4;
                            break;
                    }
                    break;
                case 16:
                    switch (index) {
                        case 15:
                            specialCount = 1;
                            break;
                        case 14:
                            specialCount = 3;
                        default:
                            specialCount = 4;
                            break;
                    }
                default:
                    specialCount = 4;
                    break;
            }
            for (let i = 1; i < specialCount+1; i++) {
                let cardInfo = new CardInfo();
                cardInfo.size = index;
                cardInfo.color = 5 - i;
                cardInfo.id = cardInfo.size == 3 ? i : (cardInfo.size - 3) * 4 + i;
                completePokers.push(cardInfo);
            }
            index += 1;
        }
        if (pokerCount > 16) {
            let small = new CardInfo();
            small.size = 16;
            small.color = 5;
            small.id = 53;
            completePokers.push(small);
            let big = new CardInfo();
            big.size = 17;
            big.color = 5;
            big.id = 54;
            completePokers.push(big);
        }
        this.SortPokerInfoArray(completePokers)
        return completePokers;
    }

    /**
     * 更具扑克牌的 ID 降序排列
     * @param pokerInfoList 扑克牌数据数组
     */
    static SortPokerInfoArray(pokerInfoList: Array<CardInfo>) {
        pokerInfoList.sort(
            (a: CardInfo, b: CardInfo): number => {
                // 排序规则，如果需要 a 排在 b 前面，则需要返回一个小于 0 的数值
                return b.id - a.id;
            }
        );
    }

    static SortPokerItemArray(itemList: PokerItem[]) {
        itemList.sort((a:PokerItem,b:PokerItem):number =>{
            return b.id - a.id
        })
    }

    /**
     * 创建手牌
     *
     * @param completePokers 一副完整的扑克牌，使用 CreateCompletePokers 生成
     * @returns 返回一个指定数量的纸牌数组
     */
    static CreateHandPokers(completePokers: Array<CardInfo>, num: number = 17): Array<CardInfo> {
        let resultList: CardInfo[] = [];
        let count = completePokers.length;
        for (let i = 0; i < num; i++) {
            let index = Random.RangeInt(0, count + 1);
            resultList.push(completePokers[index]);
            Util.RemoveArray(completePokers, index);
            count -= 1;
        }
        PokerUtil.SortPokerInfoArray(resultList);
        return resultList;
    }
}

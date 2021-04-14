import * as $protobuf from "protobufjs";
/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

    /** PlayerInfo playerId */
    playerId: string;

    /** PlayerInfo gold */
    gold?: (string|null);

    /** PlayerInfo head */
    head?: (string|null);

    /** PlayerInfo headbox */
    headbox?: (string|null);

    /** PlayerInfo vipLv */
    vipLv?: (number|null);
}

/** Represents a PlayerInfo. */
export class PlayerInfo implements IPlayerInfo {

    /**
     * Constructs a new PlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerInfo);

    /** PlayerInfo playerId. */
    public playerId: string;

    /** PlayerInfo gold. */
    public gold: string;

    /** PlayerInfo head. */
    public head: string;

    /** PlayerInfo headbox. */
    public headbox: string;

    /** PlayerInfo vipLv. */
    public vipLv: number;

    /**
     * Creates a new PlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerInfo instance
     */
    public static create(properties?: IPlayerInfo): PlayerInfo;

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @param m PlayerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerInfo;
}

/** GameStatus enum. */
export enum GameStatus {
    NORMAL = 1,
    FREE = 2
}

/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo playId */
    playId: number;

    /** RoomInfo status */
    status: GameStatus;

    /** RoomInfo freeTimes */
    freeTimes?: (number|null);

    /** RoomInfo baseScore */
    baseScore: number;

    /** RoomInfo baseScoreTimes */
    baseScoreTimes: number;

    /** RoomInfo baseScoreMaxTimes */
    baseScoreMaxTimes: number;
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomInfo);

    /** RoomInfo playId. */
    public playId: number;

    /** RoomInfo status. */
    public status: GameStatus;

    /** RoomInfo freeTimes. */
    public freeTimes: number;

    /** RoomInfo baseScore. */
    public baseScore: number;

    /** RoomInfo baseScoreTimes. */
    public baseScoreTimes: number;

    /** RoomInfo baseScoreMaxTimes. */
    public baseScoreMaxTimes: number;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfo instance
     */
    public static create(properties?: IRoomInfo): RoomInfo;

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param m RoomInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomInfo;
}

/** Properties of a PositionArr. */
export interface IPositionArr {

    /** PositionArr symbolId */
    symbolId?: (number[]|null);
}

/** Represents a PositionArr. */
export class PositionArr implements IPositionArr {

    /**
     * Constructs a new PositionArr.
     * @param [p] Properties to set
     */
    constructor(p?: IPositionArr);

    /** PositionArr symbolId. */
    public symbolId: number[];

    /**
     * Creates a new PositionArr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PositionArr instance
     */
    public static create(properties?: IPositionArr): PositionArr;

    /**
     * Encodes the specified PositionArr message. Does not implicitly {@link PositionArr.verify|verify} messages.
     * @param m PositionArr message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPositionArr, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PositionArr message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PositionArr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PositionArr;
}

/** Properties of a PositionInfo. */
export interface IPositionInfo {

    /** PositionInfo arrInfo */
    arrInfo?: (IPositionArr[]|null);
}

/** Represents a PositionInfo. */
export class PositionInfo implements IPositionInfo {

    /**
     * Constructs a new PositionInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPositionInfo);

    /** PositionInfo arrInfo. */
    public arrInfo: IPositionArr[];

    /**
     * Creates a new PositionInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PositionInfo instance
     */
    public static create(properties?: IPositionInfo): PositionInfo;

    /**
     * Encodes the specified PositionInfo message. Does not implicitly {@link PositionInfo.verify|verify} messages.
     * @param m PositionInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPositionInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PositionInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PositionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PositionInfo;
}

/** Properties of a LineInfo. */
export interface ILineInfo {

    /** LineInfo lineId */
    lineId: number;

    /** LineInfo count */
    count: number;

    /** LineInfo gold */
    gold: number;
}

/** Represents a LineInfo. */
export class LineInfo implements ILineInfo {

    /**
     * Constructs a new LineInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ILineInfo);

    /** LineInfo lineId. */
    public lineId: number;

    /** LineInfo count. */
    public count: number;

    /** LineInfo gold. */
    public gold: number;

    /**
     * Creates a new LineInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LineInfo instance
     */
    public static create(properties?: ILineInfo): LineInfo;

    /**
     * Encodes the specified LineInfo message. Does not implicitly {@link LineInfo.verify|verify} messages.
     * @param m LineInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILineInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LineInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LineInfo;
}

/** SettlementType enum. */
export enum SettlementType {
    SLOT_MAIN = 1,
    SLOT_BONUS = 2,
    SLOT_FREE = 3
}

/** Properties of a SettlementFreeData. */
export interface ISettlementFreeData {

    /** SettlementFreeData freeTimes */
    freeTimes: number;
}

/** Represents a SettlementFreeData. */
export class SettlementFreeData implements ISettlementFreeData {

    /**
     * Constructs a new SettlementFreeData.
     * @param [p] Properties to set
     */
    constructor(p?: ISettlementFreeData);

    /** SettlementFreeData freeTimes. */
    public freeTimes: number;

    /**
     * Creates a new SettlementFreeData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SettlementFreeData instance
     */
    public static create(properties?: ISettlementFreeData): SettlementFreeData;

    /**
     * Encodes the specified SettlementFreeData message. Does not implicitly {@link SettlementFreeData.verify|verify} messages.
     * @param m SettlementFreeData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISettlementFreeData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SettlementFreeData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SettlementFreeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SettlementFreeData;
}

/** Properties of a SettlementInfo. */
export interface ISettlementInfo {

    /** SettlementInfo type */
    type: SettlementType;

    /** SettlementInfo rewardGold */
    rewardGold?: (number|null);

    /** SettlementInfo lineList */
    lineList?: (ILineInfo[]|null);

    /** SettlementInfo bonusDataId */
    bonusDataId?: (number|null);

    /** SettlementInfo freeData */
    freeData?: (ISettlementFreeData|null);

    /** SettlementInfo isFreeSpinsEnd */
    isFreeSpinsEnd: boolean;

    /** SettlementInfo freeRewardGoldAll */
    freeRewardGoldAll: number;
}

/** Represents a SettlementInfo. */
export class SettlementInfo implements ISettlementInfo {

    /**
     * Constructs a new SettlementInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISettlementInfo);

    /** SettlementInfo type. */
    public type: SettlementType;

    /** SettlementInfo rewardGold. */
    public rewardGold: number;

    /** SettlementInfo lineList. */
    public lineList: ILineInfo[];

    /** SettlementInfo bonusDataId. */
    public bonusDataId: number;

    /** SettlementInfo freeData. */
    public freeData?: (ISettlementFreeData|null);

    /** SettlementInfo isFreeSpinsEnd. */
    public isFreeSpinsEnd: boolean;

    /** SettlementInfo freeRewardGoldAll. */
    public freeRewardGoldAll: number;

    /**
     * Creates a new SettlementInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SettlementInfo instance
     */
    public static create(properties?: ISettlementInfo): SettlementInfo;

    /**
     * Encodes the specified SettlementInfo message. Does not implicitly {@link SettlementInfo.verify|verify} messages.
     * @param m SettlementInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISettlementInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SettlementInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SettlementInfo;
}

/** SlotRoundStep enum. */
export enum SlotRoundStep {
    SLOT_INIT = 1,
    SLOT_SETTLEMENT = 2
}

/** Properties of a PushRoundResult. */
export interface IPushRoundResult {

    /** PushRoundResult isSuccess */
    isSuccess: boolean;

    /** PushRoundResult tips */
    tips?: (string|null);

    /** PushRoundResult roundStep */
    roundStep?: (SlotRoundStep|null);

    /** PushRoundResult symbolList */
    symbolList?: (IPositionInfo|null);

    /** PushRoundResult settlementInfo */
    settlementInfo?: (ISettlementInfo|null);
}

/** Represents a PushRoundResult. */
export class PushRoundResult implements IPushRoundResult {

    /**
     * Constructs a new PushRoundResult.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRoundResult);

    /** PushRoundResult isSuccess. */
    public isSuccess: boolean;

    /** PushRoundResult tips. */
    public tips: string;

    /** PushRoundResult roundStep. */
    public roundStep: SlotRoundStep;

    /** PushRoundResult symbolList. */
    public symbolList?: (IPositionInfo|null);

    /** PushRoundResult settlementInfo. */
    public settlementInfo?: (ISettlementInfo|null);

    /**
     * Creates a new PushRoundResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRoundResult instance
     */
    public static create(properties?: IPushRoundResult): PushRoundResult;

    /**
     * Encodes the specified PushRoundResult message. Does not implicitly {@link PushRoundResult.verify|verify} messages.
     * @param m PushRoundResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRoundResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRoundResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRoundResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRoundResult;
}

/** Properties of a SymbolTimes. */
export interface ISymbolTimes {

    /** SymbolTimes symbolId */
    symbolId: number;

    /** SymbolTimes count3 */
    count3: number;

    /** SymbolTimes count4 */
    count4: number;

    /** SymbolTimes count5 */
    count5: number;
}

/** Represents a SymbolTimes. */
export class SymbolTimes implements ISymbolTimes {

    /**
     * Constructs a new SymbolTimes.
     * @param [p] Properties to set
     */
    constructor(p?: ISymbolTimes);

    /** SymbolTimes symbolId. */
    public symbolId: number;

    /** SymbolTimes count3. */
    public count3: number;

    /** SymbolTimes count4. */
    public count4: number;

    /** SymbolTimes count5. */
    public count5: number;

    /**
     * Creates a new SymbolTimes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SymbolTimes instance
     */
    public static create(properties?: ISymbolTimes): SymbolTimes;

    /**
     * Encodes the specified SymbolTimes message. Does not implicitly {@link SymbolTimes.verify|verify} messages.
     * @param m SymbolTimes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISymbolTimes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SymbolTimes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SymbolTimes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SymbolTimes;
}

/** Properties of a PushRoomInfo. */
export interface IPushRoomInfo {

    /** PushRoomInfo playerInfo */
    playerInfo: IPlayerInfo;

    /** PushRoomInfo roomInfo */
    roomInfo: IRoomInfo;

    /** PushRoomInfo roundResult */
    roundResult?: (IPushRoundResult|null);

    /** PushRoomInfo symbolTimes */
    symbolTimes?: (ISymbolTimes[]|null);
}

/** Represents a PushRoomInfo. */
export class PushRoomInfo implements IPushRoomInfo {

    /**
     * Constructs a new PushRoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRoomInfo);

    /** PushRoomInfo playerInfo. */
    public playerInfo: IPlayerInfo;

    /** PushRoomInfo roomInfo. */
    public roomInfo: IRoomInfo;

    /** PushRoomInfo roundResult. */
    public roundResult?: (IPushRoundResult|null);

    /** PushRoomInfo symbolTimes. */
    public symbolTimes: ISymbolTimes[];

    /**
     * Creates a new PushRoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRoomInfo instance
     */
    public static create(properties?: IPushRoomInfo): PushRoomInfo;

    /**
     * Encodes the specified PushRoomInfo message. Does not implicitly {@link PushRoomInfo.verify|verify} messages.
     * @param m PushRoomInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRoomInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRoomInfo;
}

/** Properties of a PushRoundEnd. */
export interface IPushRoundEnd {

    /** PushRoundEnd roomInfo */
    roomInfo: IRoomInfo;

    /** PushRoundEnd roundStep */
    roundStep: SlotRoundStep;
}

/** Represents a PushRoundEnd. */
export class PushRoundEnd implements IPushRoundEnd {

    /**
     * Constructs a new PushRoundEnd.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRoundEnd);

    /** PushRoundEnd roomInfo. */
    public roomInfo: IRoomInfo;

    /** PushRoundEnd roundStep. */
    public roundStep: SlotRoundStep;

    /**
     * Creates a new PushRoundEnd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRoundEnd instance
     */
    public static create(properties?: IPushRoundEnd): PushRoundEnd;

    /**
     * Encodes the specified PushRoundEnd message. Does not implicitly {@link PushRoundEnd.verify|verify} messages.
     * @param m PushRoundEnd message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRoundEnd, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRoundEnd message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRoundEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRoundEnd;
}

/** Properties of a BonusPickRewardRequest. */
export interface IBonusPickRewardRequest {

    /** BonusPickRewardRequest index */
    index: number;
}

/** Represents a BonusPickRewardRequest. */
export class BonusPickRewardRequest implements IBonusPickRewardRequest {

    /**
     * Constructs a new BonusPickRewardRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IBonusPickRewardRequest);

    /** BonusPickRewardRequest index. */
    public index: number;

    /**
     * Creates a new BonusPickRewardRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BonusPickRewardRequest instance
     */
    public static create(properties?: IBonusPickRewardRequest): BonusPickRewardRequest;

    /**
     * Encodes the specified BonusPickRewardRequest message. Does not implicitly {@link BonusPickRewardRequest.verify|verify} messages.
     * @param m BonusPickRewardRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBonusPickRewardRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BonusPickRewardRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BonusPickRewardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BonusPickRewardRequest;
}

/** BonusRewardType enum. */
export enum BonusRewardType {
    BONUS_GLOD = 1,
    BONUS_COUNT = 2
}

/** Properties of a BonusReward. */
export interface IBonusReward {

    /** BonusReward rewardType */
    rewardType: BonusRewardType;

    /** BonusReward result */
    result: number;
}

/** Represents a BonusReward. */
export class BonusReward implements IBonusReward {

    /**
     * Constructs a new BonusReward.
     * @param [p] Properties to set
     */
    constructor(p?: IBonusReward);

    /** BonusReward rewardType. */
    public rewardType: BonusRewardType;

    /** BonusReward result. */
    public result: number;

    /**
     * Creates a new BonusReward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BonusReward instance
     */
    public static create(properties?: IBonusReward): BonusReward;

    /**
     * Encodes the specified BonusReward message. Does not implicitly {@link BonusReward.verify|verify} messages.
     * @param m BonusReward message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBonusReward, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BonusReward message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BonusReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BonusReward;
}

/** Properties of a BonusPickRewardPush. */
export interface IBonusPickRewardPush {

    /** BonusPickRewardPush optionResult */
    optionResult: boolean;

    /** BonusPickRewardPush reward */
    reward: IBonusReward;

    /** BonusPickRewardPush curPickTimes */
    curPickTimes: number;

    /** BonusPickRewardPush curerrorTimes */
    curerrorTimes?: (number|null);

    /** BonusPickRewardPush isEnd */
    isEnd: boolean;

    /** BonusPickRewardPush goldAll */
    goldAll: number;

    /** BonusPickRewardPush index */
    index: number;

    /** BonusPickRewardPush leftRewardList */
    leftRewardList?: (IBonusReward[]|null);
}

/** Represents a BonusPickRewardPush. */
export class BonusPickRewardPush implements IBonusPickRewardPush {

    /**
     * Constructs a new BonusPickRewardPush.
     * @param [p] Properties to set
     */
    constructor(p?: IBonusPickRewardPush);

    /** BonusPickRewardPush optionResult. */
    public optionResult: boolean;

    /** BonusPickRewardPush reward. */
    public reward: IBonusReward;

    /** BonusPickRewardPush curPickTimes. */
    public curPickTimes: number;

    /** BonusPickRewardPush curerrorTimes. */
    public curerrorTimes: number;

    /** BonusPickRewardPush isEnd. */
    public isEnd: boolean;

    /** BonusPickRewardPush goldAll. */
    public goldAll: number;

    /** BonusPickRewardPush index. */
    public index: number;

    /** BonusPickRewardPush leftRewardList. */
    public leftRewardList: IBonusReward[];

    /**
     * Creates a new BonusPickRewardPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BonusPickRewardPush instance
     */
    public static create(properties?: IBonusPickRewardPush): BonusPickRewardPush;

    /**
     * Encodes the specified BonusPickRewardPush message. Does not implicitly {@link BonusPickRewardPush.verify|verify} messages.
     * @param m BonusPickRewardPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBonusPickRewardPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BonusPickRewardPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BonusPickRewardPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BonusPickRewardPush;
}

/** Properties of a PushBonusNextStepData. */
export interface IPushBonusNextStepData {

    /** PushBonusNextStepData bonusId */
    bonusId: number;

    /** PushBonusNextStepData bonusMaxStep */
    bonusMaxStep: number;

    /** PushBonusNextStepData bonusStep */
    bonusStep: number;

    /** PushBonusNextStepData rewardOptionNum */
    rewardOptionNum: number;

    /** PushBonusNextStepData maxPickTimes */
    maxPickTimes: number;

    /** PushBonusNextStepData maxErrorTimes */
    maxErrorTimes?: (number|null);

    /** PushBonusNextStepData leftPickTimes */
    leftPickTimes: number;

    /** PushBonusNextStepData initData */
    initData?: (IBonusPickRewardPush[]|null);
}

/** Represents a PushBonusNextStepData. */
export class PushBonusNextStepData implements IPushBonusNextStepData {

    /**
     * Constructs a new PushBonusNextStepData.
     * @param [p] Properties to set
     */
    constructor(p?: IPushBonusNextStepData);

    /** PushBonusNextStepData bonusId. */
    public bonusId: number;

    /** PushBonusNextStepData bonusMaxStep. */
    public bonusMaxStep: number;

    /** PushBonusNextStepData bonusStep. */
    public bonusStep: number;

    /** PushBonusNextStepData rewardOptionNum. */
    public rewardOptionNum: number;

    /** PushBonusNextStepData maxPickTimes. */
    public maxPickTimes: number;

    /** PushBonusNextStepData maxErrorTimes. */
    public maxErrorTimes: number;

    /** PushBonusNextStepData leftPickTimes. */
    public leftPickTimes: number;

    /** PushBonusNextStepData initData. */
    public initData: IBonusPickRewardPush[];

    /**
     * Creates a new PushBonusNextStepData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushBonusNextStepData instance
     */
    public static create(properties?: IPushBonusNextStepData): PushBonusNextStepData;

    /**
     * Encodes the specified PushBonusNextStepData message. Does not implicitly {@link PushBonusNextStepData.verify|verify} messages.
     * @param m PushBonusNextStepData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushBonusNextStepData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushBonusNextStepData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushBonusNextStepData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushBonusNextStepData;
}

/** Properties of a BaseScoreTimeReq. */
export interface IBaseScoreTimeReq {

    /** BaseScoreTimeReq playId */
    playId: number;

    /** BaseScoreTimeReq baseScoreTimes */
    baseScoreTimes: number;
}

/** Represents a BaseScoreTimeReq. */
export class BaseScoreTimeReq implements IBaseScoreTimeReq {

    /**
     * Constructs a new BaseScoreTimeReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBaseScoreTimeReq);

    /** BaseScoreTimeReq playId. */
    public playId: number;

    /** BaseScoreTimeReq baseScoreTimes. */
    public baseScoreTimes: number;

    /**
     * Creates a new BaseScoreTimeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BaseScoreTimeReq instance
     */
    public static create(properties?: IBaseScoreTimeReq): BaseScoreTimeReq;

    /**
     * Encodes the specified BaseScoreTimeReq message. Does not implicitly {@link BaseScoreTimeReq.verify|verify} messages.
     * @param m BaseScoreTimeReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBaseScoreTimeReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BaseScoreTimeReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BaseScoreTimeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BaseScoreTimeReq;
}

/** Properties of a BaseScoreTimeResp. */
export interface IBaseScoreTimeResp {

    /** BaseScoreTimeResp isSuccess */
    isSuccess: boolean;
}

/** Represents a BaseScoreTimeResp. */
export class BaseScoreTimeResp implements IBaseScoreTimeResp {

    /**
     * Constructs a new BaseScoreTimeResp.
     * @param [p] Properties to set
     */
    constructor(p?: IBaseScoreTimeResp);

    /** BaseScoreTimeResp isSuccess. */
    public isSuccess: boolean;

    /**
     * Creates a new BaseScoreTimeResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BaseScoreTimeResp instance
     */
    public static create(properties?: IBaseScoreTimeResp): BaseScoreTimeResp;

    /**
     * Encodes the specified BaseScoreTimeResp message. Does not implicitly {@link BaseScoreTimeResp.verify|verify} messages.
     * @param m BaseScoreTimeResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBaseScoreTimeResp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BaseScoreTimeResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BaseScoreTimeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BaseScoreTimeResp;
}

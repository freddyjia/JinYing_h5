import * as $protobuf from "protobufjs";
/** RBBattleState enum. */
export enum RBBattleState {
    WaitingStartState = 1,
    BetState = 2,
    StopBetState = 3,
    SettlementState = 4,
    WaitingNextGame = 5
}

/** RBCardType enum. */
export enum RBCardType {
    SingleType = 0,
    PairType = 1,
    ShunziType = 2,
    JinhuaType = 3,
    JinshunType = 4,
    BaoziType = 5
}

/** RBBetArea enum. */
export enum RBBetArea {
    RedArea = 1,
    BlackArea = 2,
    MultipleArea = 3
}

/** Properties of a CardInfo. */
export interface ICardInfo {

    /** CardInfo id */
    id: number;

    /** CardInfo color */
    color: CardColor;

    /** CardInfo size */
    size: CardSize;
}

/** Represents a CardInfo. */
export class CardInfo implements ICardInfo {

    /**
     * Constructs a new CardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ICardInfo);

    /** CardInfo id. */
    public id: number;

    /** CardInfo color. */
    public color: CardColor;

    /** CardInfo size. */
    public size: CardSize;

    /**
     * Creates a new CardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CardInfo instance
     */
    public static create(properties?: ICardInfo): CardInfo;

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @param m CardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CardInfo;
}

/** Properties of a RBRoleInfo. */
export interface IRBRoleInfo {

    /** RBRoleInfo playerId */
    playerId: string;

    /** RBRoleInfo userName */
    userName: string;

    /** RBRoleInfo headImageUrl */
    headImageUrl: string;

    /** RBRoleInfo headbox */
    headbox: string;

    /** RBRoleInfo vipLv */
    vipLv: number;

    /** RBRoleInfo gold */
    gold: string;

    /** RBRoleInfo city */
    city?: (string|null);

    /** RBRoleInfo province */
    province?: (string|null);
}

/** Represents a RBRoleInfo. */
export class RBRoleInfo implements IRBRoleInfo {

    /**
     * Constructs a new RBRoleInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRBRoleInfo);

    /** RBRoleInfo playerId. */
    public playerId: string;

    /** RBRoleInfo userName. */
    public userName: string;

    /** RBRoleInfo headImageUrl. */
    public headImageUrl: string;

    /** RBRoleInfo headbox. */
    public headbox: string;

    /** RBRoleInfo vipLv. */
    public vipLv: number;

    /** RBRoleInfo gold. */
    public gold: string;

    /** RBRoleInfo city. */
    public city: string;

    /** RBRoleInfo province. */
    public province: string;

    /**
     * Creates a new RBRoleInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBRoleInfo instance
     */
    public static create(properties?: IRBRoleInfo): RBRoleInfo;

    /**
     * Encodes the specified RBRoleInfo message. Does not implicitly {@link RBRoleInfo.verify|verify} messages.
     * @param m RBRoleInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBRoleInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBRoleInfo;
}

/** Properties of a RBBetAreaInfo. */
export interface IRBBetAreaInfo {

    /** RBBetAreaInfo areaType */
    areaType: RBBetArea;

    /** RBBetAreaInfo betCount */
    betCount: string;

    /** RBBetAreaInfo betByClever */
    betByClever?: (boolean|null);
}

/** Represents a RBBetAreaInfo. */
export class RBBetAreaInfo implements IRBBetAreaInfo {

    /**
     * Constructs a new RBBetAreaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRBBetAreaInfo);

    /** RBBetAreaInfo areaType. */
    public areaType: RBBetArea;

    /** RBBetAreaInfo betCount. */
    public betCount: string;

    /** RBBetAreaInfo betByClever. */
    public betByClever: boolean;

    /**
     * Creates a new RBBetAreaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBBetAreaInfo instance
     */
    public static create(properties?: IRBBetAreaInfo): RBBetAreaInfo;

    /**
     * Encodes the specified RBBetAreaInfo message. Does not implicitly {@link RBBetAreaInfo.verify|verify} messages.
     * @param m RBBetAreaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBBetAreaInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBBetAreaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBBetAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBBetAreaInfo;
}

/** Properties of a RBCardGoup. */
export interface IRBCardGoup {

    /** RBCardGoup cardInfoList */
    cardInfoList?: (ICardInfo[]|null);

    /** RBCardGoup cardType */
    cardType: RBCardType;
}

/** Represents a RBCardGoup. */
export class RBCardGoup implements IRBCardGoup {

    /**
     * Constructs a new RBCardGoup.
     * @param [p] Properties to set
     */
    constructor(p?: IRBCardGoup);

    /** RBCardGoup cardInfoList. */
    public cardInfoList: ICardInfo[];

    /** RBCardGoup cardType. */
    public cardType: RBCardType;

    /**
     * Creates a new RBCardGoup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBCardGoup instance
     */
    public static create(properties?: IRBCardGoup): RBCardGoup;

    /**
     * Encodes the specified RBCardGoup message. Does not implicitly {@link RBCardGoup.verify|verify} messages.
     * @param m RBCardGoup message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBCardGoup, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBCardGoup message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBCardGoup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBCardGoup;
}

/** Properties of a HistoryCardInfo. */
export interface IHistoryCardInfo {

    /** HistoryCardInfo cardType */
    cardType: RBCardType;

    /** HistoryCardInfo luckyHit */
    luckyHit: boolean;

    /** HistoryCardInfo winStatus */
    winStatus: WinStatus;
}

/** Represents a HistoryCardInfo. */
export class HistoryCardInfo implements IHistoryCardInfo {

    /**
     * Constructs a new HistoryCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHistoryCardInfo);

    /** HistoryCardInfo cardType. */
    public cardType: RBCardType;

    /** HistoryCardInfo luckyHit. */
    public luckyHit: boolean;

    /** HistoryCardInfo winStatus. */
    public winStatus: WinStatus;

    /**
     * Creates a new HistoryCardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HistoryCardInfo instance
     */
    public static create(properties?: IHistoryCardInfo): HistoryCardInfo;

    /**
     * Encodes the specified HistoryCardInfo message. Does not implicitly {@link HistoryCardInfo.verify|verify} messages.
     * @param m HistoryCardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHistoryCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HistoryCardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HistoryCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HistoryCardInfo;
}

/** Properties of a RBHistoryRecord. */
export interface IRBHistoryRecord {

    /** RBHistoryRecord cardInfoList */
    cardInfoList?: (IHistoryCardInfo[]|null);

    /** RBHistoryRecord victoryList */
    victoryList?: (WinStatus[]|null);

    /** RBHistoryRecord redWinningRate */
    redWinningRate: number;

    /** RBHistoryRecord blackWinningRate */
    blackWinningRate: number;
}

/** Represents a RBHistoryRecord. */
export class RBHistoryRecord implements IRBHistoryRecord {

    /**
     * Constructs a new RBHistoryRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IRBHistoryRecord);

    /** RBHistoryRecord cardInfoList. */
    public cardInfoList: IHistoryCardInfo[];

    /** RBHistoryRecord victoryList. */
    public victoryList: WinStatus[];

    /** RBHistoryRecord redWinningRate. */
    public redWinningRate: number;

    /** RBHistoryRecord blackWinningRate. */
    public blackWinningRate: number;

    /**
     * Creates a new RBHistoryRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBHistoryRecord instance
     */
    public static create(properties?: IRBHistoryRecord): RBHistoryRecord;

    /**
     * Encodes the specified RBHistoryRecord message. Does not implicitly {@link RBHistoryRecord.verify|verify} messages.
     * @param m RBHistoryRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBHistoryRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBHistoryRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBHistoryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBHistoryRecord;
}

/** Properties of an UpdateRBHistoryRecord. */
export interface IUpdateRBHistoryRecord {

    /** UpdateRBHistoryRecord newWinStatus */
    newWinStatus: WinStatus;

    /** UpdateRBHistoryRecord newCardInfo */
    newCardInfo: IHistoryCardInfo;

    /** UpdateRBHistoryRecord redWinningRate */
    redWinningRate: number;

    /** UpdateRBHistoryRecord blackWinningRate */
    blackWinningRate: number;

    /** UpdateRBHistoryRecord isClear */
    isClear: boolean;
}

/** Represents an UpdateRBHistoryRecord. */
export class UpdateRBHistoryRecord implements IUpdateRBHistoryRecord {

    /**
     * Constructs a new UpdateRBHistoryRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IUpdateRBHistoryRecord);

    /** UpdateRBHistoryRecord newWinStatus. */
    public newWinStatus: WinStatus;

    /** UpdateRBHistoryRecord newCardInfo. */
    public newCardInfo: IHistoryCardInfo;

    /** UpdateRBHistoryRecord redWinningRate. */
    public redWinningRate: number;

    /** UpdateRBHistoryRecord blackWinningRate. */
    public blackWinningRate: number;

    /** UpdateRBHistoryRecord isClear. */
    public isClear: boolean;

    /**
     * Creates a new UpdateRBHistoryRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateRBHistoryRecord instance
     */
    public static create(properties?: IUpdateRBHistoryRecord): UpdateRBHistoryRecord;

    /**
     * Encodes the specified UpdateRBHistoryRecord message. Does not implicitly {@link UpdateRBHistoryRecord.verify|verify} messages.
     * @param m UpdateRBHistoryRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUpdateRBHistoryRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateRBHistoryRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UpdateRBHistoryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UpdateRBHistoryRecord;
}

/** Properties of a RBSeatInfo. */
export interface IRBSeatInfo {

    /** RBSeatInfo seatId */
    seatId: number;

    /** RBSeatInfo hasPlayer */
    hasPlayer: boolean;

    /** RBSeatInfo roleInfo */
    roleInfo?: (IRBRoleInfo|null);
}

/** Represents a RBSeatInfo. */
export class RBSeatInfo implements IRBSeatInfo {

    /**
     * Constructs a new RBSeatInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRBSeatInfo);

    /** RBSeatInfo seatId. */
    public seatId: number;

    /** RBSeatInfo hasPlayer. */
    public hasPlayer: boolean;

    /** RBSeatInfo roleInfo. */
    public roleInfo?: (IRBRoleInfo|null);

    /**
     * Creates a new RBSeatInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBSeatInfo instance
     */
    public static create(properties?: IRBSeatInfo): RBSeatInfo;

    /**
     * Encodes the specified RBSeatInfo message. Does not implicitly {@link RBSeatInfo.verify|verify} messages.
     * @param m RBSeatInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBSeatInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBSeatInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBSeatInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBSeatInfo;
}

/** Properties of a RBSeatSettlementInfo. */
export interface IRBSeatSettlementInfo {

    /** RBSeatSettlementInfo seatId */
    seatId: number;

    /** RBSeatSettlementInfo winGold */
    winGold: string;
}

/** Represents a RBSeatSettlementInfo. */
export class RBSeatSettlementInfo implements IRBSeatSettlementInfo {

    /**
     * Constructs a new RBSeatSettlementInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRBSeatSettlementInfo);

    /** RBSeatSettlementInfo seatId. */
    public seatId: number;

    /** RBSeatSettlementInfo winGold. */
    public winGold: string;

    /**
     * Creates a new RBSeatSettlementInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBSeatSettlementInfo instance
     */
    public static create(properties?: IRBSeatSettlementInfo): RBSeatSettlementInfo;

    /**
     * Encodes the specified RBSeatSettlementInfo message. Does not implicitly {@link RBSeatSettlementInfo.verify|verify} messages.
     * @param m RBSeatSettlementInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBSeatSettlementInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBSeatSettlementInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBSeatSettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBSeatSettlementInfo;
}

/** Properties of an InitRBRoomDataRes. */
export interface IInitRBRoomDataRes {

    /** InitRBRoomDataRes seatInfoList */
    seatInfoList?: (IRBSeatInfo[]|null);

    /** InitRBRoomDataRes historyRecord */
    historyRecord: IRBHistoryRecord;

    /** InitRBRoomDataRes betAreaInfoList */
    betAreaInfoList?: (IRBBetAreaInfo[]|null);

    /** InitRBRoomDataRes selfBetInfo */
    selfBetInfo?: (IRBBetAreaInfo[]|null);

    /** InitRBRoomDataRes myRoleInfo */
    myRoleInfo: IRBRoleInfo;

    /** InitRBRoomDataRes state */
    state: RBBattleState;

    /** InitRBRoomDataRes waitTime */
    waitTime: number;

    /** InitRBRoomDataRes bigBet */
    bigBet: number;

    /** InitRBRoomDataRes betBaseLimit */
    betBaseLimit: number;

    /** InitRBRoomDataRes redCoinLimit */
    redCoinLimit: number;

    /** InitRBRoomDataRes blackCoinLimit */
    blackCoinLimit: number;

    /** InitRBRoomDataRes luckyCoinLimit */
    luckyCoinLimit: number;
}

/** Represents an InitRBRoomDataRes. */
export class InitRBRoomDataRes implements IInitRBRoomDataRes {

    /**
     * Constructs a new InitRBRoomDataRes.
     * @param [p] Properties to set
     */
    constructor(p?: IInitRBRoomDataRes);

    /** InitRBRoomDataRes seatInfoList. */
    public seatInfoList: IRBSeatInfo[];

    /** InitRBRoomDataRes historyRecord. */
    public historyRecord: IRBHistoryRecord;

    /** InitRBRoomDataRes betAreaInfoList. */
    public betAreaInfoList: IRBBetAreaInfo[];

    /** InitRBRoomDataRes selfBetInfo. */
    public selfBetInfo: IRBBetAreaInfo[];

    /** InitRBRoomDataRes myRoleInfo. */
    public myRoleInfo: IRBRoleInfo;

    /** InitRBRoomDataRes state. */
    public state: RBBattleState;

    /** InitRBRoomDataRes waitTime. */
    public waitTime: number;

    /** InitRBRoomDataRes bigBet. */
    public bigBet: number;

    /** InitRBRoomDataRes betBaseLimit. */
    public betBaseLimit: number;

    /** InitRBRoomDataRes redCoinLimit. */
    public redCoinLimit: number;

    /** InitRBRoomDataRes blackCoinLimit. */
    public blackCoinLimit: number;

    /** InitRBRoomDataRes luckyCoinLimit. */
    public luckyCoinLimit: number;

    /**
     * Creates a new InitRBRoomDataRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InitRBRoomDataRes instance
     */
    public static create(properties?: IInitRBRoomDataRes): InitRBRoomDataRes;

    /**
     * Encodes the specified InitRBRoomDataRes message. Does not implicitly {@link InitRBRoomDataRes.verify|verify} messages.
     * @param m InitRBRoomDataRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInitRBRoomDataRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InitRBRoomDataRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InitRBRoomDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InitRBRoomDataRes;
}

/** Properties of an UpdateRBRoomDataRes. */
export interface IUpdateRBRoomDataRes {

    /** UpdateRBRoomDataRes seatInfoList */
    seatInfoList?: (IRBSeatInfo[]|null);
}

/** Represents an UpdateRBRoomDataRes. */
export class UpdateRBRoomDataRes implements IUpdateRBRoomDataRes {

    /**
     * Constructs a new UpdateRBRoomDataRes.
     * @param [p] Properties to set
     */
    constructor(p?: IUpdateRBRoomDataRes);

    /** UpdateRBRoomDataRes seatInfoList. */
    public seatInfoList: IRBSeatInfo[];

    /**
     * Creates a new UpdateRBRoomDataRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateRBRoomDataRes instance
     */
    public static create(properties?: IUpdateRBRoomDataRes): UpdateRBRoomDataRes;

    /**
     * Encodes the specified UpdateRBRoomDataRes message. Does not implicitly {@link UpdateRBRoomDataRes.verify|verify} messages.
     * @param m UpdateRBRoomDataRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUpdateRBRoomDataRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateRBRoomDataRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UpdateRBRoomDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UpdateRBRoomDataRes;
}

/** Properties of a ChangeBattleStateRes. */
export interface IChangeBattleStateRes {

    /** ChangeBattleStateRes battleState */
    battleState: RBBattleState;

    /** ChangeBattleStateRes hasCountDown */
    hasCountDown: boolean;

    /** ChangeBattleStateRes countDown */
    countDown?: (number|null);
}

/** Represents a ChangeBattleStateRes. */
export class ChangeBattleStateRes implements IChangeBattleStateRes {

    /**
     * Constructs a new ChangeBattleStateRes.
     * @param [p] Properties to set
     */
    constructor(p?: IChangeBattleStateRes);

    /** ChangeBattleStateRes battleState. */
    public battleState: RBBattleState;

    /** ChangeBattleStateRes hasCountDown. */
    public hasCountDown: boolean;

    /** ChangeBattleStateRes countDown. */
    public countDown: number;

    /**
     * Creates a new ChangeBattleStateRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeBattleStateRes instance
     */
    public static create(properties?: IChangeBattleStateRes): ChangeBattleStateRes;

    /**
     * Encodes the specified ChangeBattleStateRes message. Does not implicitly {@link ChangeBattleStateRes.verify|verify} messages.
     * @param m ChangeBattleStateRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChangeBattleStateRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeBattleStateRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChangeBattleStateRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChangeBattleStateRes;
}

/** Properties of a PushRBBattleSettlementRes. */
export interface IPushRBBattleSettlementRes {

    /** PushRBBattleSettlementRes redSideCardGroup */
    redSideCardGroup: IRBCardGoup;

    /** PushRBBattleSettlementRes blackSideCardGroup */
    blackSideCardGroup: IRBCardGoup;

    /** PushRBBattleSettlementRes winState */
    winState: WinStatus;

    /** PushRBBattleSettlementRes winLuckyArea */
    winLuckyArea?: (boolean|null);

    /** PushRBBattleSettlementRes seatSettlementInfoList */
    seatSettlementInfoList?: (IRBSeatSettlementInfo[]|null);

    /** PushRBBattleSettlementRes isMePlayed */
    isMePlayed: boolean;

    /** PushRBBattleSettlementRes updateRecord */
    updateRecord: IUpdateRBHistoryRecord;

    /** PushRBBattleSettlementRes settlementRoleInfo */
    settlementRoleInfo?: (ISettlementRoleInfo[]|null);
}

/** Represents a PushRBBattleSettlementRes. */
export class PushRBBattleSettlementRes implements IPushRBBattleSettlementRes {

    /**
     * Constructs a new PushRBBattleSettlementRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRBBattleSettlementRes);

    /** PushRBBattleSettlementRes redSideCardGroup. */
    public redSideCardGroup: IRBCardGoup;

    /** PushRBBattleSettlementRes blackSideCardGroup. */
    public blackSideCardGroup: IRBCardGoup;

    /** PushRBBattleSettlementRes winState. */
    public winState: WinStatus;

    /** PushRBBattleSettlementRes winLuckyArea. */
    public winLuckyArea: boolean;

    /** PushRBBattleSettlementRes seatSettlementInfoList. */
    public seatSettlementInfoList: IRBSeatSettlementInfo[];

    /** PushRBBattleSettlementRes isMePlayed. */
    public isMePlayed: boolean;

    /** PushRBBattleSettlementRes updateRecord. */
    public updateRecord: IUpdateRBHistoryRecord;

    /** PushRBBattleSettlementRes settlementRoleInfo. */
    public settlementRoleInfo: ISettlementRoleInfo[];

    /**
     * Creates a new PushRBBattleSettlementRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRBBattleSettlementRes instance
     */
    public static create(properties?: IPushRBBattleSettlementRes): PushRBBattleSettlementRes;

    /**
     * Encodes the specified PushRBBattleSettlementRes message. Does not implicitly {@link PushRBBattleSettlementRes.verify|verify} messages.
     * @param m PushRBBattleSettlementRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRBBattleSettlementRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRBBattleSettlementRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRBBattleSettlementRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRBBattleSettlementRes;
}

/** Properties of a BetRedBlackReq. */
export interface IBetRedBlackReq {

    /** BetRedBlackReq chipType */
    chipType: CommonChipType;

    /** BetRedBlackReq areaType */
    areaType: RBBetArea;
}

/** Represents a BetRedBlackReq. */
export class BetRedBlackReq implements IBetRedBlackReq {

    /**
     * Constructs a new BetRedBlackReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBetRedBlackReq);

    /** BetRedBlackReq chipType. */
    public chipType: CommonChipType;

    /** BetRedBlackReq areaType. */
    public areaType: RBBetArea;

    /**
     * Creates a new BetRedBlackReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetRedBlackReq instance
     */
    public static create(properties?: IBetRedBlackReq): BetRedBlackReq;

    /**
     * Encodes the specified BetRedBlackReq message. Does not implicitly {@link BetRedBlackReq.verify|verify} messages.
     * @param m BetRedBlackReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetRedBlackReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetRedBlackReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetRedBlackReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetRedBlackReq;
}

/** Properties of a BetRedBlackRes. */
export interface IBetRedBlackRes {

    /** BetRedBlackRes success */
    success: boolean;

    /** BetRedBlackRes tips */
    tips?: (string|null);
}

/** Represents a BetRedBlackRes. */
export class BetRedBlackRes implements IBetRedBlackRes {

    /**
     * Constructs a new BetRedBlackRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBetRedBlackRes);

    /** BetRedBlackRes success. */
    public success: boolean;

    /** BetRedBlackRes tips. */
    public tips: string;

    /**
     * Creates a new BetRedBlackRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetRedBlackRes instance
     */
    public static create(properties?: IBetRedBlackRes): BetRedBlackRes;

    /**
     * Encodes the specified BetRedBlackRes message. Does not implicitly {@link BetRedBlackRes.verify|verify} messages.
     * @param m BetRedBlackRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetRedBlackRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetRedBlackRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetRedBlackRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetRedBlackRes;
}

/** Properties of a UserBetRedBlack. */
export interface IUserBetRedBlack {

    /** UserBetRedBlack playerId */
    playerId: string;

    /** UserBetRedBlack chipType */
    chipType: CommonChipType;

    /** UserBetRedBlack betArea */
    betArea: RBBetArea;

    /** UserBetRedBlack gold */
    gold: string;
}

/** Represents a UserBetRedBlack. */
export class UserBetRedBlack implements IUserBetRedBlack {

    /**
     * Constructs a new UserBetRedBlack.
     * @param [p] Properties to set
     */
    constructor(p?: IUserBetRedBlack);

    /** UserBetRedBlack playerId. */
    public playerId: string;

    /** UserBetRedBlack chipType. */
    public chipType: CommonChipType;

    /** UserBetRedBlack betArea. */
    public betArea: RBBetArea;

    /** UserBetRedBlack gold. */
    public gold: string;

    /**
     * Creates a new UserBetRedBlack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserBetRedBlack instance
     */
    public static create(properties?: IUserBetRedBlack): UserBetRedBlack;

    /**
     * Encodes the specified UserBetRedBlack message. Does not implicitly {@link UserBetRedBlack.verify|verify} messages.
     * @param m UserBetRedBlack message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserBetRedBlack, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserBetRedBlack message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserBetRedBlack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserBetRedBlack;
}

/** Properties of a PushUserBetRedBlackRes. */
export interface IPushUserBetRedBlackRes {

    /** PushUserBetRedBlackRes betAreaInfoList */
    betAreaInfoList?: (IRBBetAreaInfo[]|null);

    /** PushUserBetRedBlackRes betList */
    betList?: (IUserBetRedBlack[]|null);
}

/** Represents a PushUserBetRedBlackRes. */
export class PushUserBetRedBlackRes implements IPushUserBetRedBlackRes {

    /**
     * Constructs a new PushUserBetRedBlackRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPushUserBetRedBlackRes);

    /** PushUserBetRedBlackRes betAreaInfoList. */
    public betAreaInfoList: IRBBetAreaInfo[];

    /** PushUserBetRedBlackRes betList. */
    public betList: IUserBetRedBlack[];

    /**
     * Creates a new PushUserBetRedBlackRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushUserBetRedBlackRes instance
     */
    public static create(properties?: IPushUserBetRedBlackRes): PushUserBetRedBlackRes;

    /**
     * Encodes the specified PushUserBetRedBlackRes message. Does not implicitly {@link PushUserBetRedBlackRes.verify|verify} messages.
     * @param m PushUserBetRedBlackRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushUserBetRedBlackRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushUserBetRedBlackRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushUserBetRedBlackRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushUserBetRedBlackRes;
}

/** Properties of a RBRoomExitReq. */
export interface IRBRoomExitReq {
}

/** Represents a RBRoomExitReq. */
export class RBRoomExitReq implements IRBRoomExitReq {

    /**
     * Constructs a new RBRoomExitReq.
     * @param [p] Properties to set
     */
    constructor(p?: IRBRoomExitReq);

    /**
     * Creates a new RBRoomExitReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBRoomExitReq instance
     */
    public static create(properties?: IRBRoomExitReq): RBRoomExitReq;

    /**
     * Encodes the specified RBRoomExitReq message. Does not implicitly {@link RBRoomExitReq.verify|verify} messages.
     * @param m RBRoomExitReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBRoomExitReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBRoomExitReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBRoomExitReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBRoomExitReq;
}

/** Properties of a RBRoomExitRes. */
export interface IRBRoomExitRes {

    /** RBRoomExitRes success */
    success: boolean;

    /** RBRoomExitRes errReason */
    errReason?: (string|null);
}

/** Represents a RBRoomExitRes. */
export class RBRoomExitRes implements IRBRoomExitRes {

    /**
     * Constructs a new RBRoomExitRes.
     * @param [p] Properties to set
     */
    constructor(p?: IRBRoomExitRes);

    /** RBRoomExitRes success. */
    public success: boolean;

    /** RBRoomExitRes errReason. */
    public errReason: string;

    /**
     * Creates a new RBRoomExitRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBRoomExitRes instance
     */
    public static create(properties?: IRBRoomExitRes): RBRoomExitRes;

    /**
     * Encodes the specified RBRoomExitRes message. Does not implicitly {@link RBRoomExitRes.verify|verify} messages.
     * @param m RBRoomExitRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBRoomExitRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBRoomExitRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBRoomExitRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBRoomExitRes;
}

/** Properties of a RBRankingListReq. */
export interface IRBRankingListReq {
}

/** Represents a RBRankingListReq. */
export class RBRankingListReq implements IRBRankingListReq {

    /**
     * Constructs a new RBRankingListReq.
     * @param [p] Properties to set
     */
    constructor(p?: IRBRankingListReq);

    /**
     * Creates a new RBRankingListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBRankingListReq instance
     */
    public static create(properties?: IRBRankingListReq): RBRankingListReq;

    /**
     * Encodes the specified RBRankingListReq message. Does not implicitly {@link RBRankingListReq.verify|verify} messages.
     * @param m RBRankingListReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBRankingListReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBRankingListReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBRankingListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBRankingListReq;
}

/** Properties of a RBRankingListRes. */
export interface IRBRankingListRes {

    /** RBRankingListRes rankingList */
    rankingList?: (IRBRoleInfo[]|null);
}

/** Represents a RBRankingListRes. */
export class RBRankingListRes implements IRBRankingListRes {

    /**
     * Constructs a new RBRankingListRes.
     * @param [p] Properties to set
     */
    constructor(p?: IRBRankingListRes);

    /** RBRankingListRes rankingList. */
    public rankingList: IRBRoleInfo[];

    /**
     * Creates a new RBRankingListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RBRankingListRes instance
     */
    public static create(properties?: IRBRankingListRes): RBRankingListRes;

    /**
     * Encodes the specified RBRankingListRes message. Does not implicitly {@link RBRankingListRes.verify|verify} messages.
     * @param m RBRankingListRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRBRankingListRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RBRankingListRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RBRankingListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RBRankingListRes;
}

/** CardColor enum. */
export enum CardColor {
    Spade = 1,
    Red = 2,
    Plum = 3,
    Block = 4,
    Evil = 5
}

/** CardSize enum. */
export enum CardSize {
    C3 = 3,
    C4 = 4,
    C5 = 5,
    C6 = 6,
    C7 = 7,
    C8 = 8,
    C9 = 9,
    C10 = 10,
    CJ = 11,
    CQ = 12,
    CK = 13,
    CA = 14,
    C2 = 15,
    CSMALL = 16,
    CBIG = 17
}

/** MemberListType enum. */
export enum MemberListType {
    Richer = 1,
    Clever = 2,
    PlayerBanker = 3,
    SystemBanker = 4,
    Common = 5
}

/** Properties of a RoleInfo. */
export interface IRoleInfo {

    /** RoleInfo playerId */
    playerId: string;

    /** RoleInfo userName */
    userName: string;

    /** RoleInfo headImageUrl */
    headImageUrl: string;

    /** RoleInfo headbox */
    headbox: string;

    /** RoleInfo vipLv */
    vipLv: number;

    /** RoleInfo gold */
    gold: string;

    /** RoleInfo totalWin */
    totalWin?: (number|null);

    /** RoleInfo totalBet */
    totalBet?: (number|null);

    /** RoleInfo type */
    type?: (MemberListType|null);

    /** RoleInfo rankIndex */
    rankIndex?: (number|null);
}

/** Represents a RoleInfo. */
export class RoleInfo implements IRoleInfo {

    /**
     * Constructs a new RoleInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoleInfo);

    /** RoleInfo playerId. */
    public playerId: string;

    /** RoleInfo userName. */
    public userName: string;

    /** RoleInfo headImageUrl. */
    public headImageUrl: string;

    /** RoleInfo headbox. */
    public headbox: string;

    /** RoleInfo vipLv. */
    public vipLv: number;

    /** RoleInfo gold. */
    public gold: string;

    /** RoleInfo totalWin. */
    public totalWin: number;

    /** RoleInfo totalBet. */
    public totalBet: number;

    /** RoleInfo type. */
    public type: MemberListType;

    /** RoleInfo rankIndex. */
    public rankIndex: number;

    /**
     * Creates a new RoleInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoleInfo instance
     */
    public static create(properties?: IRoleInfo): RoleInfo;

    /**
     * Encodes the specified RoleInfo message. Does not implicitly {@link RoleInfo.verify|verify} messages.
     * @param m RoleInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoleInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleInfo;
}

/** Properties of a RankingListReq. */
export interface IRankingListReq {
}

/** Represents a RankingListReq. */
export class RankingListReq implements IRankingListReq {

    /**
     * Constructs a new RankingListReq.
     * @param [p] Properties to set
     */
    constructor(p?: IRankingListReq);

    /**
     * Creates a new RankingListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankingListReq instance
     */
    public static create(properties?: IRankingListReq): RankingListReq;

    /**
     * Encodes the specified RankingListReq message. Does not implicitly {@link RankingListReq.verify|verify} messages.
     * @param m RankingListReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRankingListReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankingListReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RankingListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RankingListReq;
}

/** Properties of a RankingListRes. */
export interface IRankingListRes {

    /** RankingListRes rankingList */
    rankingList?: (IRoleInfo[]|null);
}

/** Represents a RankingListRes. */
export class RankingListRes implements IRankingListRes {

    /**
     * Constructs a new RankingListRes.
     * @param [p] Properties to set
     */
    constructor(p?: IRankingListRes);

    /** RankingListRes rankingList. */
    public rankingList: IRoleInfo[];

    /**
     * Creates a new RankingListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankingListRes instance
     */
    public static create(properties?: IRankingListRes): RankingListRes;

    /**
     * Encodes the specified RankingListRes message. Does not implicitly {@link RankingListRes.verify|verify} messages.
     * @param m RankingListRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRankingListRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankingListRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RankingListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RankingListRes;
}

/** Properties of a SettlementRoleInfo. */
export interface ISettlementRoleInfo {

    /** SettlementRoleInfo playerId */
    playerId: string;

    /** SettlementRoleInfo userName */
    userName?: (string|null);

    /** SettlementRoleInfo headImageUrl */
    headImageUrl?: (string|null);

    /** SettlementRoleInfo headbox */
    headbox?: (string|null);

    /** SettlementRoleInfo vipLv */
    vipLv?: (number|null);

    /** SettlementRoleInfo resultGold */
    resultGold: number;

    /** SettlementRoleInfo index */
    index: number;

    /** SettlementRoleInfo type */
    type: MemberListType;
}

/** Represents a SettlementRoleInfo. */
export class SettlementRoleInfo implements ISettlementRoleInfo {

    /**
     * Constructs a new SettlementRoleInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISettlementRoleInfo);

    /** SettlementRoleInfo playerId. */
    public playerId: string;

    /** SettlementRoleInfo userName. */
    public userName: string;

    /** SettlementRoleInfo headImageUrl. */
    public headImageUrl: string;

    /** SettlementRoleInfo headbox. */
    public headbox: string;

    /** SettlementRoleInfo vipLv. */
    public vipLv: number;

    /** SettlementRoleInfo resultGold. */
    public resultGold: number;

    /** SettlementRoleInfo index. */
    public index: number;

    /** SettlementRoleInfo type. */
    public type: MemberListType;

    /**
     * Creates a new SettlementRoleInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SettlementRoleInfo instance
     */
    public static create(properties?: ISettlementRoleInfo): SettlementRoleInfo;

    /**
     * Encodes the specified SettlementRoleInfo message. Does not implicitly {@link SettlementRoleInfo.verify|verify} messages.
     * @param m SettlementRoleInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISettlementRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SettlementRoleInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SettlementRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SettlementRoleInfo;
}

/** WinStatus enum. */
export enum WinStatus {
    RedWinStatus = 1,
    BlackWinStatus = 2,
    EqualWinStatus = 3
}

/** CommonChipType enum. */
export enum CommonChipType {
    CommonChip1 = 100,
    CommonChip10 = 1000,
    CommonChip50 = 5000,
    CommonChip100 = 10000,
    CommonChip500 = 50000,
    CommonChip1000 = 100000
}

/** Properties of a KickoutRoom. */
export interface IKickoutRoom {

    /** KickoutRoom tips */
    tips?: (string|null);
}

/** Represents a KickoutRoom. */
export class KickoutRoom implements IKickoutRoom {

    /**
     * Constructs a new KickoutRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IKickoutRoom);

    /** KickoutRoom tips. */
    public tips: string;

    /**
     * Creates a new KickoutRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KickoutRoom instance
     */
    public static create(properties?: IKickoutRoom): KickoutRoom;

    /**
     * Encodes the specified KickoutRoom message. Does not implicitly {@link KickoutRoom.verify|verify} messages.
     * @param m KickoutRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IKickoutRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KickoutRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns KickoutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): KickoutRoom;
}

/** Properties of a PushAlreadyGame. */
export interface IPushAlreadyGame {

    /** PushAlreadyGame tips */
    tips: string;

    /** PushAlreadyGame playInfo */
    playInfo: IPlayInfo;

    /** PushAlreadyGame extra */
    extra?: (string|null);
}

/** Represents a PushAlreadyGame. */
export class PushAlreadyGame implements IPushAlreadyGame {

    /**
     * Constructs a new PushAlreadyGame.
     * @param [p] Properties to set
     */
    constructor(p?: IPushAlreadyGame);

    /** PushAlreadyGame tips. */
    public tips: string;

    /** PushAlreadyGame playInfo. */
    public playInfo: IPlayInfo;

    /** PushAlreadyGame extra. */
    public extra: string;

    /**
     * Creates a new PushAlreadyGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushAlreadyGame instance
     */
    public static create(properties?: IPushAlreadyGame): PushAlreadyGame;

    /**
     * Encodes the specified PushAlreadyGame message. Does not implicitly {@link PushAlreadyGame.verify|verify} messages.
     * @param m PushAlreadyGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushAlreadyGame, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushAlreadyGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushAlreadyGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushAlreadyGame;
}

/** Properties of a KickoutToLogin. */
export interface IKickoutToLogin {

    /** KickoutToLogin tips */
    tips?: (string|null);
}

/** Represents a KickoutToLogin. */
export class KickoutToLogin implements IKickoutToLogin {

    /**
     * Constructs a new KickoutToLogin.
     * @param [p] Properties to set
     */
    constructor(p?: IKickoutToLogin);

    /** KickoutToLogin tips. */
    public tips: string;

    /**
     * Creates a new KickoutToLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KickoutToLogin instance
     */
    public static create(properties?: IKickoutToLogin): KickoutToLogin;

    /**
     * Encodes the specified KickoutToLogin message. Does not implicitly {@link KickoutToLogin.verify|verify} messages.
     * @param m KickoutToLogin message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IKickoutToLogin, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KickoutToLogin message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns KickoutToLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): KickoutToLogin;
}

/** Properties of a GameData. */
export interface IGameData {

    /** GameData playType */
    playType: number;

    /** GameData desc */
    desc: string;

    /** GameData icon */
    icon: string;

    /** GameData order */
    order: number;

    /** GameData single */
    single: boolean;

    /** GameData isOpen */
    isOpen: boolean;

    /** GameData showUpdate */
    showUpdate: boolean;

    /** GameData spineType */
    spineType: number;

    /** GameData spineStep */
    spineStep: number;

    /** GameData isH5Open */
    isH5Open?: (boolean|null);
}

/** Represents a GameData. */
export class GameData implements IGameData {

    /**
     * Constructs a new GameData.
     * @param [p] Properties to set
     */
    constructor(p?: IGameData);

    /** GameData playType. */
    public playType: number;

    /** GameData desc. */
    public desc: string;

    /** GameData icon. */
    public icon: string;

    /** GameData order. */
    public order: number;

    /** GameData single. */
    public single: boolean;

    /** GameData isOpen. */
    public isOpen: boolean;

    /** GameData showUpdate. */
    public showUpdate: boolean;

    /** GameData spineType. */
    public spineType: number;

    /** GameData spineStep. */
    public spineStep: number;

    /** GameData isH5Open. */
    public isH5Open: boolean;

    /**
     * Creates a new GameData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameData instance
     */
    public static create(properties?: IGameData): GameData;

    /**
     * Encodes the specified GameData message. Does not implicitly {@link GameData.verify|verify} messages.
     * @param m GameData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameData;
}

/** Properties of a ADData. */
export interface IADData {

    /** ADData adId */
    adId: number;

    /** ADData adPic */
    adPic: string;

    /** ADData order */
    order: number;

    /** ADData showTime */
    showTime: number;

    /** ADData isHaveFunction */
    isHaveFunction: boolean;

    /** ADData functionType */
    functionType?: (number|null);

    /** ADData script */
    script?: (string|null);

    /** ADData scriptH5 */
    scriptH5?: (string|null);
}

/** Represents a ADData. */
export class ADData implements IADData {

    /**
     * Constructs a new ADData.
     * @param [p] Properties to set
     */
    constructor(p?: IADData);

    /** ADData adId. */
    public adId: number;

    /** ADData adPic. */
    public adPic: string;

    /** ADData order. */
    public order: number;

    /** ADData showTime. */
    public showTime: number;

    /** ADData isHaveFunction. */
    public isHaveFunction: boolean;

    /** ADData functionType. */
    public functionType: number;

    /** ADData script. */
    public script: string;

    /** ADData scriptH5. */
    public scriptH5: string;

    /**
     * Creates a new ADData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ADData instance
     */
    public static create(properties?: IADData): ADData;

    /**
     * Encodes the specified ADData message. Does not implicitly {@link ADData.verify|verify} messages.
     * @param m ADData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IADData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ADData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ADData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ADData;
}

/** Properties of a HallDataReq. */
export interface IHallDataReq {
}

/** Represents a HallDataReq. */
export class HallDataReq implements IHallDataReq {

    /**
     * Constructs a new HallDataReq.
     * @param [p] Properties to set
     */
    constructor(p?: IHallDataReq);

    /**
     * Creates a new HallDataReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HallDataReq instance
     */
    public static create(properties?: IHallDataReq): HallDataReq;

    /**
     * Encodes the specified HallDataReq message. Does not implicitly {@link HallDataReq.verify|verify} messages.
     * @param m HallDataReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHallDataReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HallDataReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HallDataReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HallDataReq;
}

/** Properties of a HallDataRes. */
export interface IHallDataRes {

    /** HallDataRes gamedata */
    gamedata?: (IGameData[]|null);

    /** HallDataRes addata */
    addata?: (IADData[]|null);
}

/** Represents a HallDataRes. */
export class HallDataRes implements IHallDataRes {

    /**
     * Constructs a new HallDataRes.
     * @param [p] Properties to set
     */
    constructor(p?: IHallDataRes);

    /** HallDataRes gamedata. */
    public gamedata: IGameData[];

    /** HallDataRes addata. */
    public addata: IADData[];

    /**
     * Creates a new HallDataRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HallDataRes instance
     */
    public static create(properties?: IHallDataRes): HallDataRes;

    /**
     * Encodes the specified HallDataRes message. Does not implicitly {@link HallDataRes.verify|verify} messages.
     * @param m HallDataRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHallDataRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HallDataRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HallDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HallDataRes;
}

/** Properties of a PlayInfo. */
export interface IPlayInfo {

    /** PlayInfo playType */
    playType: number;

    /** PlayInfo playId */
    playId: number;

    /** PlayInfo desc */
    desc: string;

    /** PlayInfo baseScore */
    baseScore?: (number[]|null);

    /** PlayInfo limit */
    limit?: (number[]|null);

    /** PlayInfo limitDesc */
    limitDesc: string;

    /** PlayInfo res */
    res: string;

    /** PlayInfo isDirectEnter */
    isDirectEnter?: (boolean|null);

    /** PlayInfo subscript */
    subscript?: (string|null);
}

/** Represents a PlayInfo. */
export class PlayInfo implements IPlayInfo {

    /**
     * Constructs a new PlayInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayInfo);

    /** PlayInfo playType. */
    public playType: number;

    /** PlayInfo playId. */
    public playId: number;

    /** PlayInfo desc. */
    public desc: string;

    /** PlayInfo baseScore. */
    public baseScore: number[];

    /** PlayInfo limit. */
    public limit: number[];

    /** PlayInfo limitDesc. */
    public limitDesc: string;

    /** PlayInfo res. */
    public res: string;

    /** PlayInfo isDirectEnter. */
    public isDirectEnter: boolean;

    /** PlayInfo subscript. */
    public subscript: string;

    /**
     * Creates a new PlayInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayInfo instance
     */
    public static create(properties?: IPlayInfo): PlayInfo;

    /**
     * Encodes the specified PlayInfo message. Does not implicitly {@link PlayInfo.verify|verify} messages.
     * @param m PlayInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayInfo;
}

/** Properties of an OpenPlayListRes. */
export interface IOpenPlayListRes {

    /** OpenPlayListRes playInfo */
    playInfo?: (IPlayInfo[]|null);
}

/** Represents an OpenPlayListRes. */
export class OpenPlayListRes implements IOpenPlayListRes {

    /**
     * Constructs a new OpenPlayListRes.
     * @param [p] Properties to set
     */
    constructor(p?: IOpenPlayListRes);

    /** OpenPlayListRes playInfo. */
    public playInfo: IPlayInfo[];

    /**
     * Creates a new OpenPlayListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenPlayListRes instance
     */
    public static create(properties?: IOpenPlayListRes): OpenPlayListRes;

    /**
     * Encodes the specified OpenPlayListRes message. Does not implicitly {@link OpenPlayListRes.verify|verify} messages.
     * @param m OpenPlayListRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOpenPlayListRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpenPlayListRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OpenPlayListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OpenPlayListRes;
}

/** Properties of a PlayGameReq. */
export interface IPlayGameReq {

    /** PlayGameReq playType */
    playType: number;

    /** PlayGameReq playId */
    playId: number;

    /** PlayGameReq extra */
    extra?: (string|null);
}

/** Represents a PlayGameReq. */
export class PlayGameReq implements IPlayGameReq {

    /**
     * Constructs a new PlayGameReq.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayGameReq);

    /** PlayGameReq playType. */
    public playType: number;

    /** PlayGameReq playId. */
    public playId: number;

    /** PlayGameReq extra. */
    public extra: string;

    /**
     * Creates a new PlayGameReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayGameReq instance
     */
    public static create(properties?: IPlayGameReq): PlayGameReq;

    /**
     * Encodes the specified PlayGameReq message. Does not implicitly {@link PlayGameReq.verify|verify} messages.
     * @param m PlayGameReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayGameReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayGameReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayGameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayGameReq;
}

/** Properties of a PushMatchResult. */
export interface IPushMatchResult {

    /** PushMatchResult isSuccess */
    isSuccess: boolean;

    /** PushMatchResult tips */
    tips?: (string|null);

    /** PushMatchResult playType */
    playType?: (number|null);

    /** PushMatchResult playId */
    playId?: (number|null);
}

/** Represents a PushMatchResult. */
export class PushMatchResult implements IPushMatchResult {

    /**
     * Constructs a new PushMatchResult.
     * @param [p] Properties to set
     */
    constructor(p?: IPushMatchResult);

    /** PushMatchResult isSuccess. */
    public isSuccess: boolean;

    /** PushMatchResult tips. */
    public tips: string;

    /** PushMatchResult playType. */
    public playType: number;

    /** PushMatchResult playId. */
    public playId: number;

    /**
     * Creates a new PushMatchResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushMatchResult instance
     */
    public static create(properties?: IPushMatchResult): PushMatchResult;

    /**
     * Encodes the specified PushMatchResult message. Does not implicitly {@link PushMatchResult.verify|verify} messages.
     * @param m PushMatchResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushMatchResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushMatchResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushMatchResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushMatchResult;
}

/** Properties of a CancelMatch. */
export interface ICancelMatch {

    /** CancelMatch playType */
    playType: number;

    /** CancelMatch playId */
    playId: number;
}

/** Represents a CancelMatch. */
export class CancelMatch implements ICancelMatch {

    /**
     * Constructs a new CancelMatch.
     * @param [p] Properties to set
     */
    constructor(p?: ICancelMatch);

    /** CancelMatch playType. */
    public playType: number;

    /** CancelMatch playId. */
    public playId: number;

    /**
     * Creates a new CancelMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CancelMatch instance
     */
    public static create(properties?: ICancelMatch): CancelMatch;

    /**
     * Encodes the specified CancelMatch message. Does not implicitly {@link CancelMatch.verify|verify} messages.
     * @param m CancelMatch message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICancelMatch, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CancelMatch message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CancelMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CancelMatch;
}

/** Properties of a HallRankInfo. */
export interface IHallRankInfo {

    /** HallRankInfo rankPos */
    rankPos: number;

    /** HallRankInfo name */
    name: string;

    /** HallRankInfo vip */
    vip: number;

    /** HallRankInfo headUrl */
    headUrl: number;

    /** HallRankInfo gold */
    gold?: (number|null);

    /** HallRankInfo winGameCnt */
    winGameCnt?: (number|null);
}

/** Represents a HallRankInfo. */
export class HallRankInfo implements IHallRankInfo {

    /**
     * Constructs a new HallRankInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHallRankInfo);

    /** HallRankInfo rankPos. */
    public rankPos: number;

    /** HallRankInfo name. */
    public name: string;

    /** HallRankInfo vip. */
    public vip: number;

    /** HallRankInfo headUrl. */
    public headUrl: number;

    /** HallRankInfo gold. */
    public gold: number;

    /** HallRankInfo winGameCnt. */
    public winGameCnt: number;

    /**
     * Creates a new HallRankInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HallRankInfo instance
     */
    public static create(properties?: IHallRankInfo): HallRankInfo;

    /**
     * Encodes the specified HallRankInfo message. Does not implicitly {@link HallRankInfo.verify|verify} messages.
     * @param m HallRankInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHallRankInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HallRankInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HallRankInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HallRankInfo;
}

/** Properties of a Req_FlushHallRankList. */
export interface IReq_FlushHallRankList {

    /** Req_FlushHallRankList type */
    type: number;
}

/** Represents a Req_FlushHallRankList. */
export class Req_FlushHallRankList implements IReq_FlushHallRankList {

    /**
     * Constructs a new Req_FlushHallRankList.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_FlushHallRankList);

    /** Req_FlushHallRankList type. */
    public type: number;

    /**
     * Creates a new Req_FlushHallRankList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_FlushHallRankList instance
     */
    public static create(properties?: IReq_FlushHallRankList): Req_FlushHallRankList;

    /**
     * Encodes the specified Req_FlushHallRankList message. Does not implicitly {@link Req_FlushHallRankList.verify|verify} messages.
     * @param m Req_FlushHallRankList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_FlushHallRankList, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_FlushHallRankList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_FlushHallRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_FlushHallRankList;
}

/** Properties of a Rsp_FlushHallRankList. */
export interface IRsp_FlushHallRankList {

    /** Rsp_FlushHallRankList type */
    type: number;

    /** Rsp_FlushHallRankList infos */
    infos?: (IHallRankInfo[]|null);

    /** Rsp_FlushHallRankList selfRankPos */
    selfRankPos: number;
}

/** Represents a Rsp_FlushHallRankList. */
export class Rsp_FlushHallRankList implements IRsp_FlushHallRankList {

    /**
     * Constructs a new Rsp_FlushHallRankList.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_FlushHallRankList);

    /** Rsp_FlushHallRankList type. */
    public type: number;

    /** Rsp_FlushHallRankList infos. */
    public infos: IHallRankInfo[];

    /** Rsp_FlushHallRankList selfRankPos. */
    public selfRankPos: number;

    /**
     * Creates a new Rsp_FlushHallRankList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_FlushHallRankList instance
     */
    public static create(properties?: IRsp_FlushHallRankList): Rsp_FlushHallRankList;

    /**
     * Encodes the specified Rsp_FlushHallRankList message. Does not implicitly {@link Rsp_FlushHallRankList.verify|verify} messages.
     * @param m Rsp_FlushHallRankList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_FlushHallRankList, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_FlushHallRankList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_FlushHallRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_FlushHallRankList;
}

/** Properties of a ModuleStatus. */
export interface IModuleStatus {

    /** ModuleStatus moduleKey */
    moduleKey: string;

    /** ModuleStatus status */
    status: number;
}

/** Represents a ModuleStatus. */
export class ModuleStatus implements IModuleStatus {

    /**
     * Constructs a new ModuleStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IModuleStatus);

    /** ModuleStatus moduleKey. */
    public moduleKey: string;

    /** ModuleStatus status. */
    public status: number;

    /**
     * Creates a new ModuleStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModuleStatus instance
     */
    public static create(properties?: IModuleStatus): ModuleStatus;

    /**
     * Encodes the specified ModuleStatus message. Does not implicitly {@link ModuleStatus.verify|verify} messages.
     * @param m ModuleStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IModuleStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModuleStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ModuleStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ModuleStatus;
}

/** Properties of a PushModuleStatus. */
export interface IPushModuleStatus {

    /** PushModuleStatus moduleStatus */
    moduleStatus?: (IModuleStatus[]|null);

    /** PushModuleStatus skinId */
    skinId?: (string|null);
}

/** Represents a PushModuleStatus. */
export class PushModuleStatus implements IPushModuleStatus {

    /**
     * Constructs a new PushModuleStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IPushModuleStatus);

    /** PushModuleStatus moduleStatus. */
    public moduleStatus: IModuleStatus[];

    /** PushModuleStatus skinId. */
    public skinId: string;

    /**
     * Creates a new PushModuleStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushModuleStatus instance
     */
    public static create(properties?: IPushModuleStatus): PushModuleStatus;

    /**
     * Encodes the specified PushModuleStatus message. Does not implicitly {@link PushModuleStatus.verify|verify} messages.
     * @param m PushModuleStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushModuleStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushModuleStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushModuleStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushModuleStatus;
}

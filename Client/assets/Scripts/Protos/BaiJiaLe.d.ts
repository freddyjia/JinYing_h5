import * as $protobuf from "protobufjs";
/** GameState enum. */
export enum GameState {
    WaitingStartState = 1,
    BetState = 2,
    StopBetState = 3,
    DealState = 4,
    SettlementState = 5,
    WaitingNextGame = 6,
    WashCard = 7
}

/** Properties of a BaiJiaLeWinStatus. */
export interface IBaiJiaLeWinStatus {

    /** BaiJiaLeWinStatus isBrankerDouble */
    isBrankerDouble: boolean;

    /** BaiJiaLeWinStatus isPlayerDouble */
    isPlayerDouble: boolean;

    /** BaiJiaLeWinStatus isLuckSix */
    isLuckSix: boolean;

    /** BaiJiaLeWinStatus winState */
    winState: WinStatus;
}

/** Represents a BaiJiaLeWinStatus. */
export class BaiJiaLeWinStatus implements IBaiJiaLeWinStatus {

    /**
     * Constructs a new BaiJiaLeWinStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IBaiJiaLeWinStatus);

    /** BaiJiaLeWinStatus isBrankerDouble. */
    public isBrankerDouble: boolean;

    /** BaiJiaLeWinStatus isPlayerDouble. */
    public isPlayerDouble: boolean;

    /** BaiJiaLeWinStatus isLuckSix. */
    public isLuckSix: boolean;

    /** BaiJiaLeWinStatus winState. */
    public winState: WinStatus;

    /**
     * Creates a new BaiJiaLeWinStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BaiJiaLeWinStatus instance
     */
    public static create(properties?: IBaiJiaLeWinStatus): BaiJiaLeWinStatus;

    /**
     * Encodes the specified BaiJiaLeWinStatus message. Does not implicitly {@link BaiJiaLeWinStatus.verify|verify} messages.
     * @param m BaiJiaLeWinStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBaiJiaLeWinStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BaiJiaLeWinStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BaiJiaLeWinStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BaiJiaLeWinStatus;
}

/** BetArea enum. */
export enum BetArea {
    BrankerArea = 1,
    PlayerArea = 2,
    DrawArea = 3,
    BrankerDouble = 4,
    PlayerDouble = 5,
    LuckSix = 6
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

/** Properties of a BaiJiaLeRoleInfo. */
export interface IBaiJiaLeRoleInfo {

    /** BaiJiaLeRoleInfo playerId */
    playerId: string;

    /** BaiJiaLeRoleInfo userName */
    userName: string;

    /** BaiJiaLeRoleInfo headImageUrl */
    headImageUrl: string;

    /** BaiJiaLeRoleInfo headbox */
    headbox: string;

    /** BaiJiaLeRoleInfo vipLv */
    vipLv: number;

    /** BaiJiaLeRoleInfo gold */
    gold: string;

    /** BaiJiaLeRoleInfo city */
    city?: (string|null);

    /** BaiJiaLeRoleInfo province */
    province?: (string|null);
}

/** Represents a BaiJiaLeRoleInfo. */
export class BaiJiaLeRoleInfo implements IBaiJiaLeRoleInfo {

    /**
     * Constructs a new BaiJiaLeRoleInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBaiJiaLeRoleInfo);

    /** BaiJiaLeRoleInfo playerId. */
    public playerId: string;

    /** BaiJiaLeRoleInfo userName. */
    public userName: string;

    /** BaiJiaLeRoleInfo headImageUrl. */
    public headImageUrl: string;

    /** BaiJiaLeRoleInfo headbox. */
    public headbox: string;

    /** BaiJiaLeRoleInfo vipLv. */
    public vipLv: number;

    /** BaiJiaLeRoleInfo gold. */
    public gold: string;

    /** BaiJiaLeRoleInfo city. */
    public city: string;

    /** BaiJiaLeRoleInfo province. */
    public province: string;

    /**
     * Creates a new BaiJiaLeRoleInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BaiJiaLeRoleInfo instance
     */
    public static create(properties?: IBaiJiaLeRoleInfo): BaiJiaLeRoleInfo;

    /**
     * Encodes the specified BaiJiaLeRoleInfo message. Does not implicitly {@link BaiJiaLeRoleInfo.verify|verify} messages.
     * @param m BaiJiaLeRoleInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBaiJiaLeRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BaiJiaLeRoleInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BaiJiaLeRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BaiJiaLeRoleInfo;
}

/** Properties of a WinMsg. */
export interface IWinMsg {

    /** WinMsg betArea */
    betArea: BetArea;

    /** WinMsg winCount */
    winCount: string;
}

/** Represents a WinMsg. */
export class WinMsg implements IWinMsg {

    /**
     * Constructs a new WinMsg.
     * @param [p] Properties to set
     */
    constructor(p?: IWinMsg);

    /** WinMsg betArea. */
    public betArea: BetArea;

    /** WinMsg winCount. */
    public winCount: string;

    /**
     * Creates a new WinMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WinMsg instance
     */
    public static create(properties?: IWinMsg): WinMsg;

    /**
     * Encodes the specified WinMsg message. Does not implicitly {@link WinMsg.verify|verify} messages.
     * @param m WinMsg message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IWinMsg, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WinMsg message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns WinMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WinMsg;
}

/** Properties of a BetMsg. */
export interface IBetMsg {

    /** BetMsg betArea */
    betArea: BetArea;

    /** BetMsg betCount */
    betCount: string;
}

/** Represents a BetMsg. */
export class BetMsg implements IBetMsg {

    /**
     * Constructs a new BetMsg.
     * @param [p] Properties to set
     */
    constructor(p?: IBetMsg);

    /** BetMsg betArea. */
    public betArea: BetArea;

    /** BetMsg betCount. */
    public betCount: string;

    /**
     * Creates a new BetMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetMsg instance
     */
    public static create(properties?: IBetMsg): BetMsg;

    /**
     * Encodes the specified BetMsg message. Does not implicitly {@link BetMsg.verify|verify} messages.
     * @param m BetMsg message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetMsg, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetMsg message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetMsg;
}

/** Properties of a PlayerBetMsg. */
export interface IPlayerBetMsg {

    /** PlayerBetMsg playerId */
    playerId: string;

    /** PlayerBetMsg betList */
    betList?: (IBetMsg[]|null);

    /** PlayerBetMsg gold */
    gold: string;
}

/** Represents a PlayerBetMsg. */
export class PlayerBetMsg implements IPlayerBetMsg {

    /**
     * Constructs a new PlayerBetMsg.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerBetMsg);

    /** PlayerBetMsg playerId. */
    public playerId: string;

    /** PlayerBetMsg betList. */
    public betList: IBetMsg[];

    /** PlayerBetMsg gold. */
    public gold: string;

    /**
     * Creates a new PlayerBetMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerBetMsg instance
     */
    public static create(properties?: IPlayerBetMsg): PlayerBetMsg;

    /**
     * Encodes the specified PlayerBetMsg message. Does not implicitly {@link PlayerBetMsg.verify|verify} messages.
     * @param m PlayerBetMsg message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerBetMsg, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerBetMsg message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerBetMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerBetMsg;
}

/** Properties of a HistoryCardInfo. */
export interface IHistoryCardInfo {

    /** HistoryCardInfo brankerCards */
    brankerCards?: (number[]|null);

    /** HistoryCardInfo playerCards */
    playerCards?: (number[]|null);
}

/** Represents a HistoryCardInfo. */
export class HistoryCardInfo implements IHistoryCardInfo {

    /**
     * Constructs a new HistoryCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHistoryCardInfo);

    /** HistoryCardInfo brankerCards. */
    public brankerCards: number[];

    /** HistoryCardInfo playerCards. */
    public playerCards: number[];

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

/** Properties of a HistoryRecord. */
export interface IHistoryRecord {

    /** HistoryRecord victoryList */
    victoryList?: (IBaiJiaLeWinStatus[]|null);

    /** HistoryRecord brankerWinCount */
    brankerWinCount: number;

    /** HistoryRecord playerWinCount */
    playerWinCount: number;

    /** HistoryRecord drawCount */
    drawCount: number;

    /** HistoryRecord zhuangdui */
    zhuangdui: number;

    /** HistoryRecord xiandui */
    xiandui: number;
}

/** Represents a HistoryRecord. */
export class HistoryRecord implements IHistoryRecord {

    /**
     * Constructs a new HistoryRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IHistoryRecord);

    /** HistoryRecord victoryList. */
    public victoryList: IBaiJiaLeWinStatus[];

    /** HistoryRecord brankerWinCount. */
    public brankerWinCount: number;

    /** HistoryRecord playerWinCount. */
    public playerWinCount: number;

    /** HistoryRecord drawCount. */
    public drawCount: number;

    /** HistoryRecord zhuangdui. */
    public zhuangdui: number;

    /** HistoryRecord xiandui. */
    public xiandui: number;

    /**
     * Creates a new HistoryRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HistoryRecord instance
     */
    public static create(properties?: IHistoryRecord): HistoryRecord;

    /**
     * Encodes the specified HistoryRecord message. Does not implicitly {@link HistoryRecord.verify|verify} messages.
     * @param m HistoryRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHistoryRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HistoryRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HistoryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HistoryRecord;
}

/** Properties of an UpdateHistoryRecord. */
export interface IUpdateHistoryRecord {

    /** UpdateHistoryRecord newWinStatus */
    newWinStatus: IBaiJiaLeWinStatus;

    /** UpdateHistoryRecord brankerWinCount */
    brankerWinCount: number;

    /** UpdateHistoryRecord playerWinCount */
    playerWinCount: number;

    /** UpdateHistoryRecord drawCount */
    drawCount: number;

    /** UpdateHistoryRecord zhuangdui */
    zhuangdui: number;

    /** UpdateHistoryRecord xiandui */
    xiandui: number;

    /** UpdateHistoryRecord isClear */
    isClear: boolean;
}

/** Represents an UpdateHistoryRecord. */
export class UpdateHistoryRecord implements IUpdateHistoryRecord {

    /**
     * Constructs a new UpdateHistoryRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IUpdateHistoryRecord);

    /** UpdateHistoryRecord newWinStatus. */
    public newWinStatus: IBaiJiaLeWinStatus;

    /** UpdateHistoryRecord brankerWinCount. */
    public brankerWinCount: number;

    /** UpdateHistoryRecord playerWinCount. */
    public playerWinCount: number;

    /** UpdateHistoryRecord drawCount. */
    public drawCount: number;

    /** UpdateHistoryRecord zhuangdui. */
    public zhuangdui: number;

    /** UpdateHistoryRecord xiandui. */
    public xiandui: number;

    /** UpdateHistoryRecord isClear. */
    public isClear: boolean;

    /**
     * Creates a new UpdateHistoryRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateHistoryRecord instance
     */
    public static create(properties?: IUpdateHistoryRecord): UpdateHistoryRecord;

    /**
     * Encodes the specified UpdateHistoryRecord message. Does not implicitly {@link UpdateHistoryRecord.verify|verify} messages.
     * @param m UpdateHistoryRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUpdateHistoryRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateHistoryRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UpdateHistoryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UpdateHistoryRecord;
}

/** Properties of a SeatInfo. */
export interface ISeatInfo {

    /** SeatInfo seatId */
    seatId: number;

    /** SeatInfo hasPlayer */
    hasPlayer: boolean;

    /** SeatInfo roleInfo */
    roleInfo?: (IBaiJiaLeRoleInfo|null);
}

/** Represents a SeatInfo. */
export class SeatInfo implements ISeatInfo {

    /**
     * Constructs a new SeatInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISeatInfo);

    /** SeatInfo seatId. */
    public seatId: number;

    /** SeatInfo hasPlayer. */
    public hasPlayer: boolean;

    /** SeatInfo roleInfo. */
    public roleInfo?: (IBaiJiaLeRoleInfo|null);

    /**
     * Creates a new SeatInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SeatInfo instance
     */
    public static create(properties?: ISeatInfo): SeatInfo;

    /**
     * Encodes the specified SeatInfo message. Does not implicitly {@link SeatInfo.verify|verify} messages.
     * @param m SeatInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISeatInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SeatInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SeatInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SeatInfo;
}

/** Properties of a SeatSettlementInfo. */
export interface ISeatSettlementInfo {

    /** SeatSettlementInfo playerId */
    playerId: string;

    /** SeatSettlementInfo winMsgList */
    winMsgList?: (IWinMsg[]|null);

    /** SeatSettlementInfo winGold */
    winGold: string;

    /** SeatSettlementInfo allWinGold */
    allWinGold: string;

    /** SeatSettlementInfo gold */
    gold: string;
}

/** Represents a SeatSettlementInfo. */
export class SeatSettlementInfo implements ISeatSettlementInfo {

    /**
     * Constructs a new SeatSettlementInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISeatSettlementInfo);

    /** SeatSettlementInfo playerId. */
    public playerId: string;

    /** SeatSettlementInfo winMsgList. */
    public winMsgList: IWinMsg[];

    /** SeatSettlementInfo winGold. */
    public winGold: string;

    /** SeatSettlementInfo allWinGold. */
    public allWinGold: string;

    /** SeatSettlementInfo gold. */
    public gold: string;

    /**
     * Creates a new SeatSettlementInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SeatSettlementInfo instance
     */
    public static create(properties?: ISeatSettlementInfo): SeatSettlementInfo;

    /**
     * Encodes the specified SeatSettlementInfo message. Does not implicitly {@link SeatSettlementInfo.verify|verify} messages.
     * @param m SeatSettlementInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISeatSettlementInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SeatSettlementInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SeatSettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SeatSettlementInfo;
}

/** Properties of a RestCardsData. */
export interface IRestCardsData {

    /** RestCardsData restcardsIndex */
    restcardsIndex: number;

    /** RestCardsData redCardIndex */
    redCardIndex: number;
}

/** Represents a RestCardsData. */
export class RestCardsData implements IRestCardsData {

    /**
     * Constructs a new RestCardsData.
     * @param [p] Properties to set
     */
    constructor(p?: IRestCardsData);

    /** RestCardsData restcardsIndex. */
    public restcardsIndex: number;

    /** RestCardsData redCardIndex. */
    public redCardIndex: number;

    /**
     * Creates a new RestCardsData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RestCardsData instance
     */
    public static create(properties?: IRestCardsData): RestCardsData;

    /**
     * Encodes the specified RestCardsData message. Does not implicitly {@link RestCardsData.verify|verify} messages.
     * @param m RestCardsData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRestCardsData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RestCardsData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RestCardsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RestCardsData;
}

/** Properties of an UpdateRoomDataRes. */
export interface IUpdateRoomDataRes {

    /** UpdateRoomDataRes seatInfoList */
    seatInfoList?: (ISeatInfo[]|null);
}

/** Represents an UpdateRoomDataRes. */
export class UpdateRoomDataRes implements IUpdateRoomDataRes {

    /**
     * Constructs a new UpdateRoomDataRes.
     * @param [p] Properties to set
     */
    constructor(p?: IUpdateRoomDataRes);

    /** UpdateRoomDataRes seatInfoList. */
    public seatInfoList: ISeatInfo[];

    /**
     * Creates a new UpdateRoomDataRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateRoomDataRes instance
     */
    public static create(properties?: IUpdateRoomDataRes): UpdateRoomDataRes;

    /**
     * Encodes the specified UpdateRoomDataRes message. Does not implicitly {@link UpdateRoomDataRes.verify|verify} messages.
     * @param m UpdateRoomDataRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUpdateRoomDataRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateRoomDataRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UpdateRoomDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UpdateRoomDataRes;
}

/** Properties of a ChangeBattleStateRes. */
export interface IChangeBattleStateRes {

    /** ChangeBattleStateRes battleState */
    battleState: GameState;

    /** ChangeBattleStateRes hasCountDown */
    hasCountDown: boolean;

    /** ChangeBattleStateRes countDown */
    countDown?: (number|null);

    /** ChangeBattleStateRes totalTime */
    totalTime?: (number|null);

    /** ChangeBattleStateRes cardsData */
    cardsData?: (IRestCardsData|null);

    /** ChangeBattleStateRes isNeedBurningCard */
    isNeedBurningCard?: (boolean|null);

    /** ChangeBattleStateRes burningCardNum */
    burningCardNum?: (number|null);

    /** ChangeBattleStateRes fristCard */
    fristCard?: (ICardInfo|null);
}

/** Represents a ChangeBattleStateRes. */
export class ChangeBattleStateRes implements IChangeBattleStateRes {

    /**
     * Constructs a new ChangeBattleStateRes.
     * @param [p] Properties to set
     */
    constructor(p?: IChangeBattleStateRes);

    /** ChangeBattleStateRes battleState. */
    public battleState: GameState;

    /** ChangeBattleStateRes hasCountDown. */
    public hasCountDown: boolean;

    /** ChangeBattleStateRes countDown. */
    public countDown: number;

    /** ChangeBattleStateRes totalTime. */
    public totalTime: number;

    /** ChangeBattleStateRes cardsData. */
    public cardsData?: (IRestCardsData|null);

    /** ChangeBattleStateRes isNeedBurningCard. */
    public isNeedBurningCard: boolean;

    /** ChangeBattleStateRes burningCardNum. */
    public burningCardNum: number;

    /** ChangeBattleStateRes fristCard. */
    public fristCard?: (ICardInfo|null);

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

/** Properties of a PushBattleDealRes. */
export interface IPushBattleDealRes {

    /** PushBattleDealRes brankerCardInfo */
    brankerCardInfo?: (ICardInfo[]|null);

    /** PushBattleDealRes playerCardInfo */
    playerCardInfo?: (ICardInfo[]|null);

    /** PushBattleDealRes isPlayEffects */
    isPlayEffects: boolean;

    /** PushBattleDealRes cardsData */
    cardsData: IRestCardsData;
}

/** Represents a PushBattleDealRes. */
export class PushBattleDealRes implements IPushBattleDealRes {

    /**
     * Constructs a new PushBattleDealRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPushBattleDealRes);

    /** PushBattleDealRes brankerCardInfo. */
    public brankerCardInfo: ICardInfo[];

    /** PushBattleDealRes playerCardInfo. */
    public playerCardInfo: ICardInfo[];

    /** PushBattleDealRes isPlayEffects. */
    public isPlayEffects: boolean;

    /** PushBattleDealRes cardsData. */
    public cardsData: IRestCardsData;

    /**
     * Creates a new PushBattleDealRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushBattleDealRes instance
     */
    public static create(properties?: IPushBattleDealRes): PushBattleDealRes;

    /**
     * Encodes the specified PushBattleDealRes message. Does not implicitly {@link PushBattleDealRes.verify|verify} messages.
     * @param m PushBattleDealRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushBattleDealRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushBattleDealRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushBattleDealRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushBattleDealRes;
}

/** Properties of a PushBattleSettlementRes. */
export interface IPushBattleSettlementRes {

    /** PushBattleSettlementRes winState */
    winState: IBaiJiaLeWinStatus;

    /** PushBattleSettlementRes seatSettlementInfoList */
    seatSettlementInfoList?: (ISeatSettlementInfo[]|null);

    /** PushBattleSettlementRes isMePlayed */
    isMePlayed: boolean;

    /** PushBattleSettlementRes updateRecord */
    updateRecord: IUpdateHistoryRecord;

    /** PushBattleSettlementRes settlementRoleInfo */
    settlementRoleInfo?: (ISettlementRoleInfo[]|null);

    /** PushBattleSettlementRes ontherWinGold */
    ontherWinGold: string;

    /** PushBattleSettlementRes allWinGold */
    allWinGold: string;
}

/** Represents a PushBattleSettlementRes. */
export class PushBattleSettlementRes implements IPushBattleSettlementRes {

    /**
     * Constructs a new PushBattleSettlementRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPushBattleSettlementRes);

    /** PushBattleSettlementRes winState. */
    public winState: IBaiJiaLeWinStatus;

    /** PushBattleSettlementRes seatSettlementInfoList. */
    public seatSettlementInfoList: ISeatSettlementInfo[];

    /** PushBattleSettlementRes isMePlayed. */
    public isMePlayed: boolean;

    /** PushBattleSettlementRes updateRecord. */
    public updateRecord: IUpdateHistoryRecord;

    /** PushBattleSettlementRes settlementRoleInfo. */
    public settlementRoleInfo: ISettlementRoleInfo[];

    /** PushBattleSettlementRes ontherWinGold. */
    public ontherWinGold: string;

    /** PushBattleSettlementRes allWinGold. */
    public allWinGold: string;

    /**
     * Creates a new PushBattleSettlementRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushBattleSettlementRes instance
     */
    public static create(properties?: IPushBattleSettlementRes): PushBattleSettlementRes;

    /**
     * Encodes the specified PushBattleSettlementRes message. Does not implicitly {@link PushBattleSettlementRes.verify|verify} messages.
     * @param m PushBattleSettlementRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushBattleSettlementRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushBattleSettlementRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushBattleSettlementRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushBattleSettlementRes;
}

/** Properties of a BetReq. */
export interface IBetReq {

    /** BetReq betValue */
    betValue: number;

    /** BetReq areaType */
    areaType: BetArea;
}

/** Represents a BetReq. */
export class BetReq implements IBetReq {

    /**
     * Constructs a new BetReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBetReq);

    /** BetReq betValue. */
    public betValue: number;

    /** BetReq areaType. */
    public areaType: BetArea;

    /**
     * Creates a new BetReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetReq instance
     */
    public static create(properties?: IBetReq): BetReq;

    /**
     * Encodes the specified BetReq message. Does not implicitly {@link BetReq.verify|verify} messages.
     * @param m BetReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetReq;
}

/** Properties of a BetRes. */
export interface IBetRes {

    /** BetRes success */
    success: boolean;

    /** BetRes tips */
    tips?: (string|null);
}

/** Represents a BetRes. */
export class BetRes implements IBetRes {

    /**
     * Constructs a new BetRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBetRes);

    /** BetRes success. */
    public success: boolean;

    /** BetRes tips. */
    public tips: string;

    /**
     * Creates a new BetRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetRes instance
     */
    public static create(properties?: IBetRes): BetRes;

    /**
     * Encodes the specified BetRes message. Does not implicitly {@link BetRes.verify|verify} messages.
     * @param m BetRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetRes;
}

/** Properties of a PushUserBetRes. */
export interface IPushUserBetRes {

    /** PushUserBetRes otherPlayerBetList */
    otherPlayerBetList?: (IPlayerBetMsg[]|null);
}

/** Represents a PushUserBetRes. */
export class PushUserBetRes implements IPushUserBetRes {

    /**
     * Constructs a new PushUserBetRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPushUserBetRes);

    /** PushUserBetRes otherPlayerBetList. */
    public otherPlayerBetList: IPlayerBetMsg[];

    /**
     * Creates a new PushUserBetRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushUserBetRes instance
     */
    public static create(properties?: IPushUserBetRes): PushUserBetRes;

    /**
     * Encodes the specified PushUserBetRes message. Does not implicitly {@link PushUserBetRes.verify|verify} messages.
     * @param m PushUserBetRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushUserBetRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushUserBetRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushUserBetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushUserBetRes;
}

/** Properties of a PushBetInfos. */
export interface IPushBetInfos {

    /** PushBetInfos betAreaInfoList */
    betAreaInfoList?: (IPlayerBetMsg[]|null);

    /** PushBetInfos selfBetInfo */
    selfBetInfo?: (IPlayerBetMsg[]|null);
}

/** Represents a PushBetInfos. */
export class PushBetInfos implements IPushBetInfos {

    /**
     * Constructs a new PushBetInfos.
     * @param [p] Properties to set
     */
    constructor(p?: IPushBetInfos);

    /** PushBetInfos betAreaInfoList. */
    public betAreaInfoList: IPlayerBetMsg[];

    /** PushBetInfos selfBetInfo. */
    public selfBetInfo: IPlayerBetMsg[];

    /**
     * Creates a new PushBetInfos instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushBetInfos instance
     */
    public static create(properties?: IPushBetInfos): PushBetInfos;

    /**
     * Encodes the specified PushBetInfos message. Does not implicitly {@link PushBetInfos.verify|verify} messages.
     * @param m PushBetInfos message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushBetInfos, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushBetInfos message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushBetInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushBetInfos;
}

/** Properties of a RoomExitReq. */
export interface IRoomExitReq {
}

/** Represents a RoomExitReq. */
export class RoomExitReq implements IRoomExitReq {

    /**
     * Constructs a new RoomExitReq.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomExitReq);

    /**
     * Creates a new RoomExitReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomExitReq instance
     */
    public static create(properties?: IRoomExitReq): RoomExitReq;

    /**
     * Encodes the specified RoomExitReq message. Does not implicitly {@link RoomExitReq.verify|verify} messages.
     * @param m RoomExitReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomExitReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomExitReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomExitReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomExitReq;
}

/** Properties of a RoomExitRes. */
export interface IRoomExitRes {

    /** RoomExitRes success */
    success: boolean;

    /** RoomExitRes errReason */
    errReason?: (string|null);
}

/** Represents a RoomExitRes. */
export class RoomExitRes implements IRoomExitRes {

    /**
     * Constructs a new RoomExitRes.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomExitRes);

    /** RoomExitRes success. */
    public success: boolean;

    /** RoomExitRes errReason. */
    public errReason: string;

    /**
     * Creates a new RoomExitRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomExitRes instance
     */
    public static create(properties?: IRoomExitRes): RoomExitRes;

    /**
     * Encodes the specified RoomExitRes message. Does not implicitly {@link RoomExitRes.verify|verify} messages.
     * @param m RoomExitRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomExitRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomExitRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomExitRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomExitRes;
}

/** Properties of an AllRoomInfoReq. */
export interface IAllRoomInfoReq {

    /** AllRoomInfoReq type */
    type: number;
}

/** Represents an AllRoomInfoReq. */
export class AllRoomInfoReq implements IAllRoomInfoReq {

    /**
     * Constructs a new AllRoomInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IAllRoomInfoReq);

    /** AllRoomInfoReq type. */
    public type: number;

    /**
     * Creates a new AllRoomInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AllRoomInfoReq instance
     */
    public static create(properties?: IAllRoomInfoReq): AllRoomInfoReq;

    /**
     * Encodes the specified AllRoomInfoReq message. Does not implicitly {@link AllRoomInfoReq.verify|verify} messages.
     * @param m AllRoomInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAllRoomInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AllRoomInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AllRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AllRoomInfoReq;
}

/** Properties of an AllRoomInfo. */
export interface IAllRoomInfo {

    /** AllRoomInfo type */
    type: number;

    /** AllRoomInfo roomName */
    roomName: string;

    /** AllRoomInfo limitRed */
    limitRed: string;

    /** AllRoomInfo historyRecord */
    historyRecord: IHistoryRecord;

    /** AllRoomInfo maxPlayers */
    maxPlayers: number;

    /** AllRoomInfo currPlayers */
    currPlayers: number;

    /** AllRoomInfo roomBaseId */
    roomBaseId: number;

    /** AllRoomInfo restTime */
    restTime: number;

    /** AllRoomInfo totalTime */
    totalTime: number;

    /** AllRoomInfo currState */
    currState: GameState;

    /** AllRoomInfo isPrivate */
    isPrivate: boolean;

    /** AllRoomInfo seatInfoList */
    seatInfoList?: (ISeatInfo[]|null);
}

/** Represents an AllRoomInfo. */
export class AllRoomInfo implements IAllRoomInfo {

    /**
     * Constructs a new AllRoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IAllRoomInfo);

    /** AllRoomInfo type. */
    public type: number;

    /** AllRoomInfo roomName. */
    public roomName: string;

    /** AllRoomInfo limitRed. */
    public limitRed: string;

    /** AllRoomInfo historyRecord. */
    public historyRecord: IHistoryRecord;

    /** AllRoomInfo maxPlayers. */
    public maxPlayers: number;

    /** AllRoomInfo currPlayers. */
    public currPlayers: number;

    /** AllRoomInfo roomBaseId. */
    public roomBaseId: number;

    /** AllRoomInfo restTime. */
    public restTime: number;

    /** AllRoomInfo totalTime. */
    public totalTime: number;

    /** AllRoomInfo currState. */
    public currState: GameState;

    /** AllRoomInfo isPrivate. */
    public isPrivate: boolean;

    /** AllRoomInfo seatInfoList. */
    public seatInfoList: ISeatInfo[];

    /**
     * Creates a new AllRoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AllRoomInfo instance
     */
    public static create(properties?: IAllRoomInfo): AllRoomInfo;

    /**
     * Encodes the specified AllRoomInfo message. Does not implicitly {@link AllRoomInfo.verify|verify} messages.
     * @param m AllRoomInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAllRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AllRoomInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AllRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AllRoomInfo;
}

/** Properties of an AllRoomInfoRes. */
export interface IAllRoomInfoRes {

    /** AllRoomInfoRes roomInfoList */
    roomInfoList?: (IAllRoomInfo[]|null);
}

/** Represents an AllRoomInfoRes. */
export class AllRoomInfoRes implements IAllRoomInfoRes {

    /**
     * Constructs a new AllRoomInfoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IAllRoomInfoRes);

    /** AllRoomInfoRes roomInfoList. */
    public roomInfoList: IAllRoomInfo[];

    /**
     * Creates a new AllRoomInfoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AllRoomInfoRes instance
     */
    public static create(properties?: IAllRoomInfoRes): AllRoomInfoRes;

    /**
     * Encodes the specified AllRoomInfoRes message. Does not implicitly {@link AllRoomInfoRes.verify|verify} messages.
     * @param m AllRoomInfoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAllRoomInfoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AllRoomInfoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AllRoomInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AllRoomInfoRes;
}

/** Properties of an InitRoomDataRes. */
export interface IInitRoomDataRes {

    /** InitRoomDataRes seatInfoList */
    seatInfoList?: (ISeatInfo[]|null);

    /** InitRoomDataRes historyRecord */
    historyRecord: IHistoryRecord;

    /** InitRoomDataRes allPlayerBetMsgs */
    allPlayerBetMsgs?: (IPlayerBetMsg[]|null);

    /** InitRoomDataRes selfBetInfo */
    selfBetInfo?: (IPlayerBetMsg[]|null);

    /** InitRoomDataRes myRoleInfo */
    myRoleInfo: IBaiJiaLeRoleInfo;

    /** InitRoomDataRes state */
    state: GameState;

    /** InitRoomDataRes waitTime */
    waitTime: number;

    /** InitRoomDataRes bigBet */
    bigBet: number;

    /** InitRoomDataRes betBaseLimit */
    betBaseLimit: number;

    /** InitRoomDataRes betCoinLimit */
    betCoinLimit: number;

    /** InitRoomDataRes bankerCoinLimit */
    bankerCoinLimit: number;

    /** InitRoomDataRes playerCoinLimit */
    playerCoinLimit: number;

    /** InitRoomDataRes drawCoinLimit */
    drawCoinLimit: number;

    /** InitRoomDataRes bankerDoubleCoinLimit */
    bankerDoubleCoinLimit: number;

    /** InitRoomDataRes playerDoubleCoinLimit */
    playerDoubleCoinLimit: number;

    /** InitRoomDataRes lucksixLimit */
    lucksixLimit: number;

    /** InitRoomDataRes betCoins */
    betCoins?: (number[]|null);

    /** InitRoomDataRes roomName */
    roomName: string;

    /** InitRoomDataRes roomType */
    roomType: number;

    /** InitRoomDataRes cardsData */
    cardsData: IRestCardsData;

    /** InitRoomDataRes allTime */
    allTime: number;

    /** InitRoomDataRes isNeedBurningCard */
    isNeedBurningCard?: (boolean|null);

    /** InitRoomDataRes burningCardNum */
    burningCardNum?: (number|null);

    /** InitRoomDataRes fristCard */
    fristCard?: (ICardInfo|null);
}

/** Represents an InitRoomDataRes. */
export class InitRoomDataRes implements IInitRoomDataRes {

    /**
     * Constructs a new InitRoomDataRes.
     * @param [p] Properties to set
     */
    constructor(p?: IInitRoomDataRes);

    /** InitRoomDataRes seatInfoList. */
    public seatInfoList: ISeatInfo[];

    /** InitRoomDataRes historyRecord. */
    public historyRecord: IHistoryRecord;

    /** InitRoomDataRes allPlayerBetMsgs. */
    public allPlayerBetMsgs: IPlayerBetMsg[];

    /** InitRoomDataRes selfBetInfo. */
    public selfBetInfo: IPlayerBetMsg[];

    /** InitRoomDataRes myRoleInfo. */
    public myRoleInfo: IBaiJiaLeRoleInfo;

    /** InitRoomDataRes state. */
    public state: GameState;

    /** InitRoomDataRes waitTime. */
    public waitTime: number;

    /** InitRoomDataRes bigBet. */
    public bigBet: number;

    /** InitRoomDataRes betBaseLimit. */
    public betBaseLimit: number;

    /** InitRoomDataRes betCoinLimit. */
    public betCoinLimit: number;

    /** InitRoomDataRes bankerCoinLimit. */
    public bankerCoinLimit: number;

    /** InitRoomDataRes playerCoinLimit. */
    public playerCoinLimit: number;

    /** InitRoomDataRes drawCoinLimit. */
    public drawCoinLimit: number;

    /** InitRoomDataRes bankerDoubleCoinLimit. */
    public bankerDoubleCoinLimit: number;

    /** InitRoomDataRes playerDoubleCoinLimit. */
    public playerDoubleCoinLimit: number;

    /** InitRoomDataRes lucksixLimit. */
    public lucksixLimit: number;

    /** InitRoomDataRes betCoins. */
    public betCoins: number[];

    /** InitRoomDataRes roomName. */
    public roomName: string;

    /** InitRoomDataRes roomType. */
    public roomType: number;

    /** InitRoomDataRes cardsData. */
    public cardsData: IRestCardsData;

    /** InitRoomDataRes allTime. */
    public allTime: number;

    /** InitRoomDataRes isNeedBurningCard. */
    public isNeedBurningCard: boolean;

    /** InitRoomDataRes burningCardNum. */
    public burningCardNum: number;

    /** InitRoomDataRes fristCard. */
    public fristCard?: (ICardInfo|null);

    /**
     * Creates a new InitRoomDataRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InitRoomDataRes instance
     */
    public static create(properties?: IInitRoomDataRes): InitRoomDataRes;

    /**
     * Encodes the specified InitRoomDataRes message. Does not implicitly {@link InitRoomDataRes.verify|verify} messages.
     * @param m InitRoomDataRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInitRoomDataRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InitRoomDataRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InitRoomDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InitRoomDataRes;
}

/** Properties of a SitDownReq. */
export interface ISitDownReq {

    /** SitDownReq seatId */
    seatId: number;
}

/** Represents a SitDownReq. */
export class SitDownReq implements ISitDownReq {

    /**
     * Constructs a new SitDownReq.
     * @param [p] Properties to set
     */
    constructor(p?: ISitDownReq);

    /** SitDownReq seatId. */
    public seatId: number;

    /**
     * Creates a new SitDownReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SitDownReq instance
     */
    public static create(properties?: ISitDownReq): SitDownReq;

    /**
     * Encodes the specified SitDownReq message. Does not implicitly {@link SitDownReq.verify|verify} messages.
     * @param m SitDownReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISitDownReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SitDownReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SitDownReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SitDownReq;
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

import * as $protobuf from "protobufjs";
/** GameState enum. */
export enum GameState {
    WaitingStartState = 1,
    BetState = 2,
    StopBetState = 3,
    SettlementState = 4,
    WaitingNextGame = 5
}

/** BetArea enum. */
export enum BetArea {
    HuArea = 1,
    LongArea = 2,
    DrawArea = 3
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

/** Properties of a LHDRoleInfo. */
export interface ILHDRoleInfo {

    /** LHDRoleInfo playerId */
    playerId: string;

    /** LHDRoleInfo userName */
    userName: string;

    /** LHDRoleInfo headImageUrl */
    headImageUrl: string;

    /** LHDRoleInfo headbox */
    headbox: string;

    /** LHDRoleInfo vipLv */
    vipLv: number;

    /** LHDRoleInfo gold */
    gold: string;

    /** LHDRoleInfo city */
    city?: (string|null);

    /** LHDRoleInfo province */
    province?: (string|null);
}

/** Represents a LHDRoleInfo. */
export class LHDRoleInfo implements ILHDRoleInfo {

    /**
     * Constructs a new LHDRoleInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ILHDRoleInfo);

    /** LHDRoleInfo playerId. */
    public playerId: string;

    /** LHDRoleInfo userName. */
    public userName: string;

    /** LHDRoleInfo headImageUrl. */
    public headImageUrl: string;

    /** LHDRoleInfo headbox. */
    public headbox: string;

    /** LHDRoleInfo vipLv. */
    public vipLv: number;

    /** LHDRoleInfo gold. */
    public gold: string;

    /** LHDRoleInfo city. */
    public city: string;

    /** LHDRoleInfo province. */
    public province: string;

    /**
     * Creates a new LHDRoleInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LHDRoleInfo instance
     */
    public static create(properties?: ILHDRoleInfo): LHDRoleInfo;

    /**
     * Encodes the specified LHDRoleInfo message. Does not implicitly {@link LHDRoleInfo.verify|verify} messages.
     * @param m LHDRoleInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILHDRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LHDRoleInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LHDRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LHDRoleInfo;
}

/** Properties of a BetAreaInfo. */
export interface IBetAreaInfo {

    /** BetAreaInfo areaType */
    areaType: BetArea;

    /** BetAreaInfo betCount */
    betCount: string;

    /** BetAreaInfo betByClever */
    betByClever?: (boolean|null);
}

/** Represents a BetAreaInfo. */
export class BetAreaInfo implements IBetAreaInfo {

    /**
     * Constructs a new BetAreaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBetAreaInfo);

    /** BetAreaInfo areaType. */
    public areaType: BetArea;

    /** BetAreaInfo betCount. */
    public betCount: string;

    /** BetAreaInfo betByClever. */
    public betByClever: boolean;

    /**
     * Creates a new BetAreaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetAreaInfo instance
     */
    public static create(properties?: IBetAreaInfo): BetAreaInfo;

    /**
     * Encodes the specified BetAreaInfo message. Does not implicitly {@link BetAreaInfo.verify|verify} messages.
     * @param m BetAreaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetAreaInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetAreaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetAreaInfo;
}

/** Properties of a HistoryCardInfo. */
export interface IHistoryCardInfo {

    /** HistoryCardInfo longSize */
    longSize: number;

    /** HistoryCardInfo huSize */
    huSize: number;
}

/** Represents a HistoryCardInfo. */
export class HistoryCardInfo implements IHistoryCardInfo {

    /**
     * Constructs a new HistoryCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHistoryCardInfo);

    /** HistoryCardInfo longSize. */
    public longSize: number;

    /** HistoryCardInfo huSize. */
    public huSize: number;

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

    /** HistoryRecord winStatus */
    winStatus?: (WinStatus[]|null);

    /** HistoryRecord victoryList */
    victoryList?: (WinStatus[]|null);

    /** HistoryRecord redWinningRate */
    redWinningRate: number;

    /** HistoryRecord blackWinningRate */
    blackWinningRate: number;

    /** HistoryRecord recordArray */
    recordArray?: (IHistoryCardInfo[]|null);
}

/** Represents a HistoryRecord. */
export class HistoryRecord implements IHistoryRecord {

    /**
     * Constructs a new HistoryRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IHistoryRecord);

    /** HistoryRecord winStatus. */
    public winStatus: WinStatus[];

    /** HistoryRecord victoryList. */
    public victoryList: WinStatus[];

    /** HistoryRecord redWinningRate. */
    public redWinningRate: number;

    /** HistoryRecord blackWinningRate. */
    public blackWinningRate: number;

    /** HistoryRecord recordArray. */
    public recordArray: IHistoryCardInfo[];

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
    newWinStatus: WinStatus;

    /** UpdateHistoryRecord redWinningRate */
    redWinningRate: number;

    /** UpdateHistoryRecord blackWinningRate */
    blackWinningRate: number;

    /** UpdateHistoryRecord isClear */
    isClear: boolean;

    /** UpdateHistoryRecord newRecord */
    newRecord: IHistoryCardInfo;
}

/** Represents an UpdateHistoryRecord. */
export class UpdateHistoryRecord implements IUpdateHistoryRecord {

    /**
     * Constructs a new UpdateHistoryRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IUpdateHistoryRecord);

    /** UpdateHistoryRecord newWinStatus. */
    public newWinStatus: WinStatus;

    /** UpdateHistoryRecord redWinningRate. */
    public redWinningRate: number;

    /** UpdateHistoryRecord blackWinningRate. */
    public blackWinningRate: number;

    /** UpdateHistoryRecord isClear. */
    public isClear: boolean;

    /** UpdateHistoryRecord newRecord. */
    public newRecord: IHistoryCardInfo;

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
    roleInfo?: (ILHDRoleInfo|null);
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
    public roleInfo?: (ILHDRoleInfo|null);

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

    /** SeatSettlementInfo seatId */
    seatId: number;

    /** SeatSettlementInfo winGold */
    winGold: string;
}

/** Represents a SeatSettlementInfo. */
export class SeatSettlementInfo implements ISeatSettlementInfo {

    /**
     * Constructs a new SeatSettlementInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISeatSettlementInfo);

    /** SeatSettlementInfo seatId. */
    public seatId: number;

    /** SeatSettlementInfo winGold. */
    public winGold: string;

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

/** Properties of an InitRoomDataRes. */
export interface IInitRoomDataRes {

    /** InitRoomDataRes seatInfoList */
    seatInfoList?: (ISeatInfo[]|null);

    /** InitRoomDataRes historyRecord */
    historyRecord: IHistoryRecord;

    /** InitRoomDataRes betAreaInfoList */
    betAreaInfoList?: (IBetAreaInfo[]|null);

    /** InitRoomDataRes selfBetInfo */
    selfBetInfo?: (IBetAreaInfo[]|null);

    /** InitRoomDataRes myRoleInfo */
    myRoleInfo: ILHDRoleInfo;

    /** InitRoomDataRes state */
    state: GameState;

    /** InitRoomDataRes waitTime */
    waitTime: number;

    /** InitRoomDataRes bigBet */
    bigBet: number;

    /** InitRoomDataRes betBaseLimit */
    betBaseLimit: number;

    /** InitRoomDataRes longCoinLimit */
    longCoinLimit: number;

    /** InitRoomDataRes huCoinLimit */
    huCoinLimit: number;

    /** InitRoomDataRes drawCoinLimit */
    drawCoinLimit: number;

    /** InitRoomDataRes chipType */
    chipType?: (CommonChipType[]|null);

    /** InitRoomDataRes isShowAllIn */
    isShowAllIn?: (boolean|null);
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

    /** InitRoomDataRes betAreaInfoList. */
    public betAreaInfoList: IBetAreaInfo[];

    /** InitRoomDataRes selfBetInfo. */
    public selfBetInfo: IBetAreaInfo[];

    /** InitRoomDataRes myRoleInfo. */
    public myRoleInfo: ILHDRoleInfo;

    /** InitRoomDataRes state. */
    public state: GameState;

    /** InitRoomDataRes waitTime. */
    public waitTime: number;

    /** InitRoomDataRes bigBet. */
    public bigBet: number;

    /** InitRoomDataRes betBaseLimit. */
    public betBaseLimit: number;

    /** InitRoomDataRes longCoinLimit. */
    public longCoinLimit: number;

    /** InitRoomDataRes huCoinLimit. */
    public huCoinLimit: number;

    /** InitRoomDataRes drawCoinLimit. */
    public drawCoinLimit: number;

    /** InitRoomDataRes chipType. */
    public chipType: CommonChipType[];

    /** InitRoomDataRes isShowAllIn. */
    public isShowAllIn: boolean;

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

/** Properties of a PushBattleSettlementRes. */
export interface IPushBattleSettlementRes {

    /** PushBattleSettlementRes longCardInfo */
    longCardInfo: ICardInfo;

    /** PushBattleSettlementRes huCardInfo */
    huCardInfo: ICardInfo;

    /** PushBattleSettlementRes winState */
    winState: WinStatus;

    /** PushBattleSettlementRes seatSettlementInfoList */
    seatSettlementInfoList?: (ISeatSettlementInfo[]|null);

    /** PushBattleSettlementRes isMePlayed */
    isMePlayed: boolean;

    /** PushBattleSettlementRes updateRecord */
    updateRecord: IUpdateHistoryRecord;

    /** PushBattleSettlementRes settlementRoleInfo */
    settlementRoleInfo?: (ISettlementRoleInfo[]|null);
}

/** Represents a PushBattleSettlementRes. */
export class PushBattleSettlementRes implements IPushBattleSettlementRes {

    /**
     * Constructs a new PushBattleSettlementRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPushBattleSettlementRes);

    /** PushBattleSettlementRes longCardInfo. */
    public longCardInfo: ICardInfo;

    /** PushBattleSettlementRes huCardInfo. */
    public huCardInfo: ICardInfo;

    /** PushBattleSettlementRes winState. */
    public winState: WinStatus;

    /** PushBattleSettlementRes seatSettlementInfoList. */
    public seatSettlementInfoList: ISeatSettlementInfo[];

    /** PushBattleSettlementRes isMePlayed. */
    public isMePlayed: boolean;

    /** PushBattleSettlementRes updateRecord. */
    public updateRecord: IUpdateHistoryRecord;

    /** PushBattleSettlementRes settlementRoleInfo. */
    public settlementRoleInfo: ISettlementRoleInfo[];

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

    /** BetReq chipType */
    chipType?: (CommonChipType|null);

    /** BetReq areaType */
    areaType: BetArea;

    /** BetReq isAllIn */
    isAllIn?: (boolean|null);
}

/** Represents a BetReq. */
export class BetReq implements IBetReq {

    /**
     * Constructs a new BetReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBetReq);

    /** BetReq chipType. */
    public chipType: CommonChipType;

    /** BetReq areaType. */
    public areaType: BetArea;

    /** BetReq isAllIn. */
    public isAllIn: boolean;

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

    /** BetRes betMoney */
    betMoney?: (number|null);
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

    /** BetRes betMoney. */
    public betMoney: number;

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

/** Properties of a UserBet. */
export interface IUserBet {

    /** UserBet playerId */
    playerId: string;

    /** UserBet chipType */
    chipType?: (CommonChipType|null);

    /** UserBet betArea */
    betArea: BetArea;

    /** UserBet gold */
    gold: string;

    /** UserBet isAllIn */
    isAllIn: boolean;
}

/** Represents a UserBet. */
export class UserBet implements IUserBet {

    /**
     * Constructs a new UserBet.
     * @param [p] Properties to set
     */
    constructor(p?: IUserBet);

    /** UserBet playerId. */
    public playerId: string;

    /** UserBet chipType. */
    public chipType: CommonChipType;

    /** UserBet betArea. */
    public betArea: BetArea;

    /** UserBet gold. */
    public gold: string;

    /** UserBet isAllIn. */
    public isAllIn: boolean;

    /**
     * Creates a new UserBet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserBet instance
     */
    public static create(properties?: IUserBet): UserBet;

    /**
     * Encodes the specified UserBet message. Does not implicitly {@link UserBet.verify|verify} messages.
     * @param m UserBet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserBet, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserBet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserBet;
}

/** Properties of a PushUserBetRes. */
export interface IPushUserBetRes {

    /** PushUserBetRes betAreaInfoList */
    betAreaInfoList?: (IBetAreaInfo[]|null);

    /** PushUserBetRes betList */
    betList?: (IUserBet[]|null);
}

/** Represents a PushUserBetRes. */
export class PushUserBetRes implements IPushUserBetRes {

    /**
     * Constructs a new PushUserBetRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPushUserBetRes);

    /** PushUserBetRes betAreaInfoList. */
    public betAreaInfoList: IBetAreaInfo[];

    /** PushUserBetRes betList. */
    public betList: IUserBet[];

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

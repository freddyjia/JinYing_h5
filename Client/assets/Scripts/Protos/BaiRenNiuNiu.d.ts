import * as $protobuf from "protobufjs";
/** NiuNiuType enum. */
export enum NiuNiuType {
    WUNIU = 0,
    NIUYI = 1,
    NIUER = 2,
    NIUSAN = 3,
    NIUSI = 4,
    NIUWU = 5,
    NIULIU = 6,
    NIUQI = 7,
    NIUBA = 8,
    NIUJIU = 9,
    NIUNIU = 10,
    ZHADAN = 11,
    WUHUANIU = 12
}

/** Properties of a BRNNMember. */
export interface IBRNNMember {

    /** BRNNMember playerId */
    playerId: string;

    /** BRNNMember userName */
    userName: string;

    /** BRNNMember headImageUrl */
    headImageUrl: string;

    /** BRNNMember headbox */
    headbox: string;

    /** BRNNMember vipLv */
    vipLv: number;

    /** BRNNMember gold */
    gold: string;

    /** BRNNMember city */
    city?: (string|null);

    /** BRNNMember province */
    province?: (string|null);
}

/** Represents a BRNNMember. */
export class BRNNMember implements IBRNNMember {

    /**
     * Constructs a new BRNNMember.
     * @param [p] Properties to set
     */
    constructor(p?: IBRNNMember);

    /** BRNNMember playerId. */
    public playerId: string;

    /** BRNNMember userName. */
    public userName: string;

    /** BRNNMember headImageUrl. */
    public headImageUrl: string;

    /** BRNNMember headbox. */
    public headbox: string;

    /** BRNNMember vipLv. */
    public vipLv: number;

    /** BRNNMember gold. */
    public gold: string;

    /** BRNNMember city. */
    public city: string;

    /** BRNNMember province. */
    public province: string;

    /**
     * Creates a new BRNNMember instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BRNNMember instance
     */
    public static create(properties?: IBRNNMember): BRNNMember;

    /**
     * Encodes the specified BRNNMember message. Does not implicitly {@link BRNNMember.verify|verify} messages.
     * @param m BRNNMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBRNNMember, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BRNNMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BRNNMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BRNNMember;
}

/** Properties of a BRNNSeatInfo. */
export interface IBRNNSeatInfo {

    /** BRNNSeatInfo index */
    index: number;

    /** BRNNSeatInfo member */
    member?: (IBRNNMember|null);
}

/** Represents a BRNNSeatInfo. */
export class BRNNSeatInfo implements IBRNNSeatInfo {

    /**
     * Constructs a new BRNNSeatInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBRNNSeatInfo);

    /** BRNNSeatInfo index. */
    public index: number;

    /** BRNNSeatInfo member. */
    public member?: (IBRNNMember|null);

    /**
     * Creates a new BRNNSeatInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BRNNSeatInfo instance
     */
    public static create(properties?: IBRNNSeatInfo): BRNNSeatInfo;

    /**
     * Encodes the specified BRNNSeatInfo message. Does not implicitly {@link BRNNSeatInfo.verify|verify} messages.
     * @param m BRNNSeatInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBRNNSeatInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BRNNSeatInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BRNNSeatInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BRNNSeatInfo;
}

/** Properties of a BRNNBankerInfo. */
export interface IBRNNBankerInfo {

    /** BRNNBankerInfo member */
    member: IBRNNMember;

    /** BRNNBankerInfo bankerTimes */
    bankerTimes: number;

    /** BRNNBankerInfo isOffBanker */
    isOffBanker: boolean;
}

/** Represents a BRNNBankerInfo. */
export class BRNNBankerInfo implements IBRNNBankerInfo {

    /**
     * Constructs a new BRNNBankerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBRNNBankerInfo);

    /** BRNNBankerInfo member. */
    public member: IBRNNMember;

    /** BRNNBankerInfo bankerTimes. */
    public bankerTimes: number;

    /** BRNNBankerInfo isOffBanker. */
    public isOffBanker: boolean;

    /**
     * Creates a new BRNNBankerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BRNNBankerInfo instance
     */
    public static create(properties?: IBRNNBankerInfo): BRNNBankerInfo;

    /**
     * Encodes the specified BRNNBankerInfo message. Does not implicitly {@link BRNNBankerInfo.verify|verify} messages.
     * @param m BRNNBankerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBRNNBankerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BRNNBankerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BRNNBankerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BRNNBankerInfo;
}

/** Properties of a BRNNSUBRecord. */
export interface IBRNNSUBRecord {

    /** BRNNSUBRecord index */
    index: number;

    /** BRNNSUBRecord blnWin */
    blnWin: boolean;
}

/** Represents a BRNNSUBRecord. */
export class BRNNSUBRecord implements IBRNNSUBRecord {

    /**
     * Constructs a new BRNNSUBRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IBRNNSUBRecord);

    /** BRNNSUBRecord index. */
    public index: number;

    /** BRNNSUBRecord blnWin. */
    public blnWin: boolean;

    /**
     * Creates a new BRNNSUBRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BRNNSUBRecord instance
     */
    public static create(properties?: IBRNNSUBRecord): BRNNSUBRecord;

    /**
     * Encodes the specified BRNNSUBRecord message. Does not implicitly {@link BRNNSUBRecord.verify|verify} messages.
     * @param m BRNNSUBRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBRNNSUBRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BRNNSUBRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BRNNSUBRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BRNNSUBRecord;
}

/** Properties of a BRNNRecord. */
export interface IBRNNRecord {

    /** BRNNRecord indexRecord */
    indexRecord?: (IBRNNSUBRecord[]|null);
}

/** Represents a BRNNRecord. */
export class BRNNRecord implements IBRNNRecord {

    /**
     * Constructs a new BRNNRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IBRNNRecord);

    /** BRNNRecord indexRecord. */
    public indexRecord: IBRNNSUBRecord[];

    /**
     * Creates a new BRNNRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BRNNRecord instance
     */
    public static create(properties?: IBRNNRecord): BRNNRecord;

    /**
     * Encodes the specified BRNNRecord message. Does not implicitly {@link BRNNRecord.verify|verify} messages.
     * @param m BRNNRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBRNNRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BRNNRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BRNNRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BRNNRecord;
}

/** Properties of a BetInfo. */
export interface IBetInfo {

    /** BetInfo index */
    index: number;

    /** BetInfo betTotal */
    betTotal: string;

    /** BetInfo betByClever */
    betByClever?: (boolean|null);
}

/** Represents a BetInfo. */
export class BetInfo implements IBetInfo {

    /**
     * Constructs a new BetInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBetInfo);

    /** BetInfo index. */
    public index: number;

    /** BetInfo betTotal. */
    public betTotal: string;

    /** BetInfo betByClever. */
    public betByClever: boolean;

    /**
     * Creates a new BetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetInfo instance
     */
    public static create(properties?: IBetInfo): BetInfo;

    /**
     * Encodes the specified BetInfo message. Does not implicitly {@link BetInfo.verify|verify} messages.
     * @param m BetInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetInfo;
}

/** Properties of a CardInfo. */
export interface ICardInfo {

    /** CardInfo id */
    id: number;

    /** CardInfo cardColor */
    cardColor: CardColor;

    /** CardInfo cardSize */
    cardSize: CardSize;
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

    /** CardInfo cardColor. */
    public cardColor: CardColor;

    /** CardInfo cardSize. */
    public cardSize: CardSize;

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

/** Properties of a SingleAreaInfo. */
export interface ISingleAreaInfo {

    /** SingleAreaInfo index */
    index: number;

    /** SingleAreaInfo cardInfo */
    cardInfo?: (ICardInfo[]|null);

    /** SingleAreaInfo niuniuType */
    niuniuType: NiuNiuType;

    /** SingleAreaInfo mutiple */
    mutiple: number;

    /** SingleAreaInfo result */
    result: number;

    /** SingleAreaInfo niucards */
    niucards?: (ICardInfo[]|null);
}

/** Represents a SingleAreaInfo. */
export class SingleAreaInfo implements ISingleAreaInfo {

    /**
     * Constructs a new SingleAreaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISingleAreaInfo);

    /** SingleAreaInfo index. */
    public index: number;

    /** SingleAreaInfo cardInfo. */
    public cardInfo: ICardInfo[];

    /** SingleAreaInfo niuniuType. */
    public niuniuType: NiuNiuType;

    /** SingleAreaInfo mutiple. */
    public mutiple: number;

    /** SingleAreaInfo result. */
    public result: number;

    /** SingleAreaInfo niucards. */
    public niucards: ICardInfo[];

    /**
     * Creates a new SingleAreaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SingleAreaInfo instance
     */
    public static create(properties?: ISingleAreaInfo): SingleAreaInfo;

    /**
     * Encodes the specified SingleAreaInfo message. Does not implicitly {@link SingleAreaInfo.verify|verify} messages.
     * @param m SingleAreaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISingleAreaInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SingleAreaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SingleAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SingleAreaInfo;
}

/** Properties of a BetResult. */
export interface IBetResult {

    /** BetResult playerId */
    playerId: string;

    /** BetResult extractGold */
    extractGold: number;

    /** BetResult gold */
    gold?: (string|null);
}

/** Represents a BetResult. */
export class BetResult implements IBetResult {

    /**
     * Constructs a new BetResult.
     * @param [p] Properties to set
     */
    constructor(p?: IBetResult);

    /** BetResult playerId. */
    public playerId: string;

    /** BetResult extractGold. */
    public extractGold: number;

    /** BetResult gold. */
    public gold: string;

    /**
     * Creates a new BetResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetResult instance
     */
    public static create(properties?: IBetResult): BetResult;

    /**
     * Encodes the specified BetResult message. Does not implicitly {@link BetResult.verify|verify} messages.
     * @param m BetResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetResult;
}

/** Properties of a PushRoomInitData. */
export interface IPushRoomInitData {

    /** PushRoomInitData seatInfo */
    seatInfo?: (IBRNNSeatInfo[]|null);

    /** PushRoomInitData isSystemBanker */
    isSystemBanker: boolean;

    /** PushRoomInitData banker */
    banker?: (IBRNNBankerInfo|null);

    /** PushRoomInitData records */
    records?: (IBRNNRecord[]|null);

    /** PushRoomInitData status */
    status: number;

    /** PushRoomInitData waitTime */
    waitTime: number;

    /** PushRoomInitData maxMutiple */
    maxMutiple: number;

    /** PushRoomInitData betInfos */
    betInfos?: (IBetInfo[]|null);

    /** PushRoomInitData selfBetInfo */
    selfBetInfo?: (IBetInfo[]|null);

    /** PushRoomInitData singleArea */
    singleArea?: (ISingleAreaInfo[]|null);

    /** PushRoomInitData betResult */
    betResult?: (IBetResult[]|null);

    /** PushRoomInitData betCoinLimit */
    betCoinLimit: number;

    /** PushRoomInitData roundBetCoinLimit */
    roundBetCoinLimit: number;

    /** PushRoomInitData baseLimit */
    baseLimit: number;

    /** PushRoomInitData settlementRoleInfo */
    settlementRoleInfo?: (ISettlementRoleInfo[]|null);
}

/** Represents a PushRoomInitData. */
export class PushRoomInitData implements IPushRoomInitData {

    /**
     * Constructs a new PushRoomInitData.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRoomInitData);

    /** PushRoomInitData seatInfo. */
    public seatInfo: IBRNNSeatInfo[];

    /** PushRoomInitData isSystemBanker. */
    public isSystemBanker: boolean;

    /** PushRoomInitData banker. */
    public banker?: (IBRNNBankerInfo|null);

    /** PushRoomInitData records. */
    public records: IBRNNRecord[];

    /** PushRoomInitData status. */
    public status: number;

    /** PushRoomInitData waitTime. */
    public waitTime: number;

    /** PushRoomInitData maxMutiple. */
    public maxMutiple: number;

    /** PushRoomInitData betInfos. */
    public betInfos: IBetInfo[];

    /** PushRoomInitData selfBetInfo. */
    public selfBetInfo: IBetInfo[];

    /** PushRoomInitData singleArea. */
    public singleArea: ISingleAreaInfo[];

    /** PushRoomInitData betResult. */
    public betResult: IBetResult[];

    /** PushRoomInitData betCoinLimit. */
    public betCoinLimit: number;

    /** PushRoomInitData roundBetCoinLimit. */
    public roundBetCoinLimit: number;

    /** PushRoomInitData baseLimit. */
    public baseLimit: number;

    /** PushRoomInitData settlementRoleInfo. */
    public settlementRoleInfo: ISettlementRoleInfo[];

    /**
     * Creates a new PushRoomInitData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRoomInitData instance
     */
    public static create(properties?: IPushRoomInitData): PushRoomInitData;

    /**
     * Encodes the specified PushRoomInitData message. Does not implicitly {@link PushRoomInitData.verify|verify} messages.
     * @param m PushRoomInitData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRoomInitData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRoomInitData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRoomInitData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRoomInitData;
}

/** Properties of a BullBetReq. */
export interface IBullBetReq {

    /** BullBetReq index */
    index: number;

    /** BullBetReq money */
    money: number;
}

/** Represents a BullBetReq. */
export class BullBetReq implements IBullBetReq {

    /**
     * Constructs a new BullBetReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBullBetReq);

    /** BullBetReq index. */
    public index: number;

    /** BullBetReq money. */
    public money: number;

    /**
     * Creates a new BullBetReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullBetReq instance
     */
    public static create(properties?: IBullBetReq): BullBetReq;

    /**
     * Encodes the specified BullBetReq message. Does not implicitly {@link BullBetReq.verify|verify} messages.
     * @param m BullBetReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullBetReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullBetReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullBetReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullBetReq;
}

/** Properties of a BullBetRes. */
export interface IBullBetRes {

    /** BullBetRes isSuccess */
    isSuccess: boolean;

    /** BullBetRes tips */
    tips?: (string|null);
}

/** Represents a BullBetRes. */
export class BullBetRes implements IBullBetRes {

    /**
     * Constructs a new BullBetRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBullBetRes);

    /** BullBetRes isSuccess. */
    public isSuccess: boolean;

    /** BullBetRes tips. */
    public tips: string;

    /**
     * Creates a new BullBetRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullBetRes instance
     */
    public static create(properties?: IBullBetRes): BullBetRes;

    /**
     * Encodes the specified BullBetRes message. Does not implicitly {@link BullBetRes.verify|verify} messages.
     * @param m BullBetRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullBetRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullBetRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullBetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullBetRes;
}

/** Properties of a BullLeaveReq. */
export interface IBullLeaveReq {
}

/** Represents a BullLeaveReq. */
export class BullLeaveReq implements IBullLeaveReq {

    /**
     * Constructs a new BullLeaveReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBullLeaveReq);

    /**
     * Creates a new BullLeaveReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullLeaveReq instance
     */
    public static create(properties?: IBullLeaveReq): BullLeaveReq;

    /**
     * Encodes the specified BullLeaveReq message. Does not implicitly {@link BullLeaveReq.verify|verify} messages.
     * @param m BullLeaveReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullLeaveReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullLeaveReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullLeaveReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullLeaveReq;
}

/** Properties of a BullLeaveRes. */
export interface IBullLeaveRes {

    /** BullLeaveRes isSuccess */
    isSuccess: boolean;

    /** BullLeaveRes tips */
    tips?: (string|null);
}

/** Represents a BullLeaveRes. */
export class BullLeaveRes implements IBullLeaveRes {

    /**
     * Constructs a new BullLeaveRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBullLeaveRes);

    /** BullLeaveRes isSuccess. */
    public isSuccess: boolean;

    /** BullLeaveRes tips. */
    public tips: string;

    /**
     * Creates a new BullLeaveRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullLeaveRes instance
     */
    public static create(properties?: IBullLeaveRes): BullLeaveRes;

    /**
     * Encodes the specified BullLeaveRes message. Does not implicitly {@link BullLeaveRes.verify|verify} messages.
     * @param m BullLeaveRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullLeaveRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullLeaveRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullLeaveRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullLeaveRes;
}

/** Properties of a ReadyBankerInfo. */
export interface IReadyBankerInfo {

    /** ReadyBankerInfo playerId */
    playerId: string;

    /** ReadyBankerInfo userName */
    userName: string;

    /** ReadyBankerInfo gold */
    gold: string;
}

/** Represents a ReadyBankerInfo. */
export class ReadyBankerInfo implements IReadyBankerInfo {

    /**
     * Constructs a new ReadyBankerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IReadyBankerInfo);

    /** ReadyBankerInfo playerId. */
    public playerId: string;

    /** ReadyBankerInfo userName. */
    public userName: string;

    /** ReadyBankerInfo gold. */
    public gold: string;

    /**
     * Creates a new ReadyBankerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadyBankerInfo instance
     */
    public static create(properties?: IReadyBankerInfo): ReadyBankerInfo;

    /**
     * Encodes the specified ReadyBankerInfo message. Does not implicitly {@link ReadyBankerInfo.verify|verify} messages.
     * @param m ReadyBankerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReadyBankerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadyBankerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReadyBankerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReadyBankerInfo;
}

/** Properties of a BullBankerListReq. */
export interface IBullBankerListReq {
}

/** Represents a BullBankerListReq. */
export class BullBankerListReq implements IBullBankerListReq {

    /**
     * Constructs a new BullBankerListReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBullBankerListReq);

    /**
     * Creates a new BullBankerListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullBankerListReq instance
     */
    public static create(properties?: IBullBankerListReq): BullBankerListReq;

    /**
     * Encodes the specified BullBankerListReq message. Does not implicitly {@link BullBankerListReq.verify|verify} messages.
     * @param m BullBankerListReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullBankerListReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullBankerListReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullBankerListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullBankerListReq;
}

/** Properties of a BullBankerListRes. */
export interface IBullBankerListRes {

    /** BullBankerListRes bankerCoin */
    bankerCoin: number;

    /** BullBankerListRes readyBankers */
    readyBankers?: (IReadyBankerInfo[]|null);
}

/** Represents a BullBankerListRes. */
export class BullBankerListRes implements IBullBankerListRes {

    /**
     * Constructs a new BullBankerListRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBullBankerListRes);

    /** BullBankerListRes bankerCoin. */
    public bankerCoin: number;

    /** BullBankerListRes readyBankers. */
    public readyBankers: IReadyBankerInfo[];

    /**
     * Creates a new BullBankerListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullBankerListRes instance
     */
    public static create(properties?: IBullBankerListRes): BullBankerListRes;

    /**
     * Encodes the specified BullBankerListRes message. Does not implicitly {@link BullBankerListRes.verify|verify} messages.
     * @param m BullBankerListRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullBankerListRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullBankerListRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullBankerListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullBankerListRes;
}

/** Properties of a BullPushDeal. */
export interface IBullPushDeal {

    /** BullPushDeal singleArea */
    singleArea?: (ISingleAreaInfo[]|null);

    /** BullPushDeal betResult */
    betResult?: (IBetResult[]|null);

    /** BullPushDeal isMePlayed */
    isMePlayed: boolean;

    /** BullPushDeal settlementRoleInfo */
    settlementRoleInfo?: (ISettlementRoleInfo[]|null);
}

/** Represents a BullPushDeal. */
export class BullPushDeal implements IBullPushDeal {

    /**
     * Constructs a new BullPushDeal.
     * @param [p] Properties to set
     */
    constructor(p?: IBullPushDeal);

    /** BullPushDeal singleArea. */
    public singleArea: ISingleAreaInfo[];

    /** BullPushDeal betResult. */
    public betResult: IBetResult[];

    /** BullPushDeal isMePlayed. */
    public isMePlayed: boolean;

    /** BullPushDeal settlementRoleInfo. */
    public settlementRoleInfo: ISettlementRoleInfo[];

    /**
     * Creates a new BullPushDeal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullPushDeal instance
     */
    public static create(properties?: IBullPushDeal): BullPushDeal;

    /**
     * Encodes the specified BullPushDeal message. Does not implicitly {@link BullPushDeal.verify|verify} messages.
     * @param m BullPushDeal message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullPushDeal, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullPushDeal message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullPushDeal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullPushDeal;
}

/** Properties of a PlayerBetInfo. */
export interface IPlayerBetInfo {

    /** PlayerBetInfo playerId */
    playerId: string;

    /** PlayerBetInfo betIndex */
    betIndex: number;

    /** PlayerBetInfo gold */
    gold: number;
}

/** Represents a PlayerBetInfo. */
export class PlayerBetInfo implements IPlayerBetInfo {

    /**
     * Constructs a new PlayerBetInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerBetInfo);

    /** PlayerBetInfo playerId. */
    public playerId: string;

    /** PlayerBetInfo betIndex. */
    public betIndex: number;

    /** PlayerBetInfo gold. */
    public gold: number;

    /**
     * Creates a new PlayerBetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerBetInfo instance
     */
    public static create(properties?: IPlayerBetInfo): PlayerBetInfo;

    /**
     * Encodes the specified PlayerBetInfo message. Does not implicitly {@link PlayerBetInfo.verify|verify} messages.
     * @param m PlayerBetInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerBetInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerBetInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerBetInfo;
}

/** Properties of a BullPushBetInfo. */
export interface IBullPushBetInfo {

    /** BullPushBetInfo playerBet */
    playerBet?: (IPlayerBetInfo[]|null);

    /** BullPushBetInfo betInfo */
    betInfo?: (IBetInfo[]|null);
}

/** Represents a BullPushBetInfo. */
export class BullPushBetInfo implements IBullPushBetInfo {

    /**
     * Constructs a new BullPushBetInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBullPushBetInfo);

    /** BullPushBetInfo playerBet. */
    public playerBet: IPlayerBetInfo[];

    /** BullPushBetInfo betInfo. */
    public betInfo: IBetInfo[];

    /**
     * Creates a new BullPushBetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullPushBetInfo instance
     */
    public static create(properties?: IBullPushBetInfo): BullPushBetInfo;

    /**
     * Encodes the specified BullPushBetInfo message. Does not implicitly {@link BullPushBetInfo.verify|verify} messages.
     * @param m BullPushBetInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullPushBetInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullPushBetInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullPushBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullPushBetInfo;
}

/** Properties of a BullPushState. */
export interface IBullPushState {

    /** BullPushState status */
    status: number;

    /** BullPushState duration */
    duration: number;
}

/** Represents a BullPushState. */
export class BullPushState implements IBullPushState {

    /**
     * Constructs a new BullPushState.
     * @param [p] Properties to set
     */
    constructor(p?: IBullPushState);

    /** BullPushState status. */
    public status: number;

    /** BullPushState duration. */
    public duration: number;

    /**
     * Creates a new BullPushState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullPushState instance
     */
    public static create(properties?: IBullPushState): BullPushState;

    /**
     * Encodes the specified BullPushState message. Does not implicitly {@link BullPushState.verify|verify} messages.
     * @param m BullPushState message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullPushState, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullPushState message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullPushState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullPushState;
}

/** Properties of a BullPushPlayerLeave. */
export interface IBullPushPlayerLeave {

    /** BullPushPlayerLeave playerId */
    playerId: string;
}

/** Represents a BullPushPlayerLeave. */
export class BullPushPlayerLeave implements IBullPushPlayerLeave {

    /**
     * Constructs a new BullPushPlayerLeave.
     * @param [p] Properties to set
     */
    constructor(p?: IBullPushPlayerLeave);

    /** BullPushPlayerLeave playerId. */
    public playerId: string;

    /**
     * Creates a new BullPushPlayerLeave instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullPushPlayerLeave instance
     */
    public static create(properties?: IBullPushPlayerLeave): BullPushPlayerLeave;

    /**
     * Encodes the specified BullPushPlayerLeave message. Does not implicitly {@link BullPushPlayerLeave.verify|verify} messages.
     * @param m BullPushPlayerLeave message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullPushPlayerLeave, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullPushPlayerLeave message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullPushPlayerLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullPushPlayerLeave;
}

/** Properties of a BullBankerReq. */
export interface IBullBankerReq {
}

/** Represents a BullBankerReq. */
export class BullBankerReq implements IBullBankerReq {

    /**
     * Constructs a new BullBankerReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBullBankerReq);

    /**
     * Creates a new BullBankerReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullBankerReq instance
     */
    public static create(properties?: IBullBankerReq): BullBankerReq;

    /**
     * Encodes the specified BullBankerReq message. Does not implicitly {@link BullBankerReq.verify|verify} messages.
     * @param m BullBankerReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullBankerReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullBankerReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullBankerReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullBankerReq;
}

/** Properties of a BullBankerRes. */
export interface IBullBankerRes {

    /** BullBankerRes isSuccess */
    isSuccess: boolean;

    /** BullBankerRes tips */
    tips?: (string|null);
}

/** Represents a BullBankerRes. */
export class BullBankerRes implements IBullBankerRes {

    /**
     * Constructs a new BullBankerRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBullBankerRes);

    /** BullBankerRes isSuccess. */
    public isSuccess: boolean;

    /** BullBankerRes tips. */
    public tips: string;

    /**
     * Creates a new BullBankerRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullBankerRes instance
     */
    public static create(properties?: IBullBankerRes): BullBankerRes;

    /**
     * Encodes the specified BullBankerRes message. Does not implicitly {@link BullBankerRes.verify|verify} messages.
     * @param m BullBankerRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullBankerRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullBankerRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullBankerRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullBankerRes;
}

/** Properties of a BullCancelBankerReq. */
export interface IBullCancelBankerReq {
}

/** Represents a BullCancelBankerReq. */
export class BullCancelBankerReq implements IBullCancelBankerReq {

    /**
     * Constructs a new BullCancelBankerReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBullCancelBankerReq);

    /**
     * Creates a new BullCancelBankerReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullCancelBankerReq instance
     */
    public static create(properties?: IBullCancelBankerReq): BullCancelBankerReq;

    /**
     * Encodes the specified BullCancelBankerReq message. Does not implicitly {@link BullCancelBankerReq.verify|verify} messages.
     * @param m BullCancelBankerReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullCancelBankerReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullCancelBankerReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullCancelBankerReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullCancelBankerReq;
}

/** Properties of a BullCancelBankerRes. */
export interface IBullCancelBankerRes {

    /** BullCancelBankerRes isSuccess */
    isSuccess: boolean;

    /** BullCancelBankerRes tips */
    tips?: (string|null);
}

/** Represents a BullCancelBankerRes. */
export class BullCancelBankerRes implements IBullCancelBankerRes {

    /**
     * Constructs a new BullCancelBankerRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBullCancelBankerRes);

    /** BullCancelBankerRes isSuccess. */
    public isSuccess: boolean;

    /** BullCancelBankerRes tips. */
    public tips: string;

    /**
     * Creates a new BullCancelBankerRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullCancelBankerRes instance
     */
    public static create(properties?: IBullCancelBankerRes): BullCancelBankerRes;

    /**
     * Encodes the specified BullCancelBankerRes message. Does not implicitly {@link BullCancelBankerRes.verify|verify} messages.
     * @param m BullCancelBankerRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullCancelBankerRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullCancelBankerRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullCancelBankerRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullCancelBankerRes;
}

/** Properties of a PushBankerInfo. */
export interface IPushBankerInfo {

    /** PushBankerInfo isSystemBanker */
    isSystemBanker: boolean;

    /** PushBankerInfo bankerInfo */
    bankerInfo?: (IBRNNBankerInfo|null);
}

/** Represents a PushBankerInfo. */
export class PushBankerInfo implements IPushBankerInfo {

    /**
     * Constructs a new PushBankerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushBankerInfo);

    /** PushBankerInfo isSystemBanker. */
    public isSystemBanker: boolean;

    /** PushBankerInfo bankerInfo. */
    public bankerInfo?: (IBRNNBankerInfo|null);

    /**
     * Creates a new PushBankerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushBankerInfo instance
     */
    public static create(properties?: IPushBankerInfo): PushBankerInfo;

    /**
     * Encodes the specified PushBankerInfo message. Does not implicitly {@link PushBankerInfo.verify|verify} messages.
     * @param m PushBankerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushBankerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushBankerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushBankerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushBankerInfo;
}

/** Properties of a PushSeatInfo. */
export interface IPushSeatInfo {

    /** PushSeatInfo seatInfo */
    seatInfo?: (IBRNNSeatInfo[]|null);
}

/** Represents a PushSeatInfo. */
export class PushSeatInfo implements IPushSeatInfo {

    /**
     * Constructs a new PushSeatInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushSeatInfo);

    /** PushSeatInfo seatInfo. */
    public seatInfo: IBRNNSeatInfo[];

    /**
     * Creates a new PushSeatInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushSeatInfo instance
     */
    public static create(properties?: IPushSeatInfo): PushSeatInfo;

    /**
     * Encodes the specified PushSeatInfo message. Does not implicitly {@link PushSeatInfo.verify|verify} messages.
     * @param m PushSeatInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushSeatInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushSeatInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushSeatInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushSeatInfo;
}

/** Properties of a BullMemberListReq. */
export interface IBullMemberListReq {
}

/** Represents a BullMemberListReq. */
export class BullMemberListReq implements IBullMemberListReq {

    /**
     * Constructs a new BullMemberListReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBullMemberListReq);

    /**
     * Creates a new BullMemberListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullMemberListReq instance
     */
    public static create(properties?: IBullMemberListReq): BullMemberListReq;

    /**
     * Encodes the specified BullMemberListReq message. Does not implicitly {@link BullMemberListReq.verify|verify} messages.
     * @param m BullMemberListReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullMemberListReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullMemberListReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullMemberListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullMemberListReq;
}

/** Properties of a BullMemberListRes. */
export interface IBullMemberListRes {

    /** BullMemberListRes member */
    member?: (IBRNNMember[]|null);
}

/** Represents a BullMemberListRes. */
export class BullMemberListRes implements IBullMemberListRes {

    /**
     * Constructs a new BullMemberListRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBullMemberListRes);

    /** BullMemberListRes member. */
    public member: IBRNNMember[];

    /**
     * Creates a new BullMemberListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BullMemberListRes instance
     */
    public static create(properties?: IBullMemberListRes): BullMemberListRes;

    /**
     * Encodes the specified BullMemberListRes message. Does not implicitly {@link BullMemberListRes.verify|verify} messages.
     * @param m BullMemberListRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBullMemberListRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BullMemberListRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BullMemberListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BullMemberListRes;
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

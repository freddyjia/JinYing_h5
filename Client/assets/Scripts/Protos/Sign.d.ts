import * as $protobuf from "protobufjs";
/** SignStatus enum. */
export enum SignStatus {
    UNSIGN = 1,
    MISSED = 2,
    SIGNED = 3
}

/** Properties of a SignData. */
export interface ISignData {

    /** SignData day */
    day: number;

    /** SignData status */
    status: SignStatus;

    /** SignData isDouble */
    isDouble: boolean;

    /** SignData desc */
    desc: string;
}

/** Represents a SignData. */
export class SignData implements ISignData {

    /**
     * Constructs a new SignData.
     * @param [p] Properties to set
     */
    constructor(p?: ISignData);

    /** SignData day. */
    public day: number;

    /** SignData status. */
    public status: SignStatus;

    /** SignData isDouble. */
    public isDouble: boolean;

    /** SignData desc. */
    public desc: string;

    /**
     * Creates a new SignData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignData instance
     */
    public static create(properties?: ISignData): SignData;

    /**
     * Encodes the specified SignData message. Does not implicitly {@link SignData.verify|verify} messages.
     * @param m SignData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISignData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SignData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignData;
}

/** Properties of an OpenSignReq. */
export interface IOpenSignReq {
}

/** Represents an OpenSignReq. */
export class OpenSignReq implements IOpenSignReq {

    /**
     * Constructs a new OpenSignReq.
     * @param [p] Properties to set
     */
    constructor(p?: IOpenSignReq);

    /**
     * Creates a new OpenSignReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenSignReq instance
     */
    public static create(properties?: IOpenSignReq): OpenSignReq;

    /**
     * Encodes the specified OpenSignReq message. Does not implicitly {@link OpenSignReq.verify|verify} messages.
     * @param m OpenSignReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOpenSignReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpenSignReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OpenSignReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OpenSignReq;
}

/** Properties of an OpenSignRes. */
export interface IOpenSignRes {

    /** OpenSignRes signData */
    signData?: (ISignData[]|null);

    /** OpenSignRes record */
    record?: (string[]|null);

    /** OpenSignRes produce */
    produce: (number|Long);

    /** OpenSignRes joinNum */
    joinNum: (number|Long);
}

/** Represents an OpenSignRes. */
export class OpenSignRes implements IOpenSignRes {

    /**
     * Constructs a new OpenSignRes.
     * @param [p] Properties to set
     */
    constructor(p?: IOpenSignRes);

    /** OpenSignRes signData. */
    public signData: ISignData[];

    /** OpenSignRes record. */
    public record: string[];

    /** OpenSignRes produce. */
    public produce: (number|Long);

    /** OpenSignRes joinNum. */
    public joinNum: (number|Long);

    /**
     * Creates a new OpenSignRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenSignRes instance
     */
    public static create(properties?: IOpenSignRes): OpenSignRes;

    /**
     * Encodes the specified OpenSignRes message. Does not implicitly {@link OpenSignRes.verify|verify} messages.
     * @param m OpenSignRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOpenSignRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpenSignRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OpenSignRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OpenSignRes;
}

/** Properties of a SignReq. */
export interface ISignReq {

    /** SignReq day */
    day: number;
}

/** Represents a SignReq. */
export class SignReq implements ISignReq {

    /**
     * Constructs a new SignReq.
     * @param [p] Properties to set
     */
    constructor(p?: ISignReq);

    /** SignReq day. */
    public day: number;

    /**
     * Creates a new SignReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignReq instance
     */
    public static create(properties?: ISignReq): SignReq;

    /**
     * Encodes the specified SignReq message. Does not implicitly {@link SignReq.verify|verify} messages.
     * @param m SignReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISignReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SignReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignReq;
}

/** Properties of a SignRes. */
export interface ISignRes {

    /** SignRes isSuccess */
    isSuccess: boolean;

    /** SignRes tips */
    tips?: (string|null);

    /** SignRes rewards */
    rewards?: (ICurrencyStruct[]|null);
}

/** Represents a SignRes. */
export class SignRes implements ISignRes {

    /**
     * Constructs a new SignRes.
     * @param [p] Properties to set
     */
    constructor(p?: ISignRes);

    /** SignRes isSuccess. */
    public isSuccess: boolean;

    /** SignRes tips. */
    public tips: string;

    /** SignRes rewards. */
    public rewards: ICurrencyStruct[];

    /**
     * Creates a new SignRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignRes instance
     */
    public static create(properties?: ISignRes): SignRes;

    /**
     * Encodes the specified SignRes message. Does not implicitly {@link SignRes.verify|verify} messages.
     * @param m SignRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISignRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SignRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignRes;
}

/** CurrencyType enum. */
export enum CurrencyType {
    RedEnvelops = 0,
    Gold = 1,
    safeBox = 2,
    Integral = 3
}

/** Properties of a CurrencyStruct. */
export interface ICurrencyStruct {

    /** CurrencyStruct curType */
    curType: CurrencyType;

    /** CurrencyStruct count */
    count: string;
}

/** Represents a CurrencyStruct. */
export class CurrencyStruct implements ICurrencyStruct {

    /**
     * Constructs a new CurrencyStruct.
     * @param [p] Properties to set
     */
    constructor(p?: ICurrencyStruct);

    /** CurrencyStruct curType. */
    public curType: CurrencyType;

    /** CurrencyStruct count. */
    public count: string;

    /**
     * Creates a new CurrencyStruct instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CurrencyStruct instance
     */
    public static create(properties?: ICurrencyStruct): CurrencyStruct;

    /**
     * Encodes the specified CurrencyStruct message. Does not implicitly {@link CurrencyStruct.verify|verify} messages.
     * @param m CurrencyStruct message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICurrencyStruct, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CurrencyStruct message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CurrencyStruct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CurrencyStruct;
}

/** Properties of a SyncCurrencyRes. */
export interface ISyncCurrencyRes {

    /** SyncCurrencyRes curStruct */
    curStruct?: (ICurrencyStruct[]|null);

    /** SyncCurrencyRes refreshType */
    refreshType: CurrencyRefreshType;
}

/** Represents a SyncCurrencyRes. */
export class SyncCurrencyRes implements ISyncCurrencyRes {

    /**
     * Constructs a new SyncCurrencyRes.
     * @param [p] Properties to set
     */
    constructor(p?: ISyncCurrencyRes);

    /** SyncCurrencyRes curStruct. */
    public curStruct: ICurrencyStruct[];

    /** SyncCurrencyRes refreshType. */
    public refreshType: CurrencyRefreshType;

    /**
     * Creates a new SyncCurrencyRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncCurrencyRes instance
     */
    public static create(properties?: ISyncCurrencyRes): SyncCurrencyRes;

    /**
     * Encodes the specified SyncCurrencyRes message. Does not implicitly {@link SyncCurrencyRes.verify|verify} messages.
     * @param m SyncCurrencyRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISyncCurrencyRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncCurrencyRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SyncCurrencyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SyncCurrencyRes;
}

/** CurrencyRefreshType enum. */
export enum CurrencyRefreshType {
    REFRESH_TYPE_RECHAGE = 1,
    REFRESH_TYPE_HALL_COMMON = 2,
    REFRESH_TYPE_CACHE = 3,
    REFRESH_TYPE_GAME_COMMON = 4
}

/** Properties of a SyncHallToGameCurrencyRes. */
export interface ISyncHallToGameCurrencyRes {

    /** SyncHallToGameCurrencyRes curStruct */
    curStruct?: (ICurrencyStruct[]|null);
}

/** Represents a SyncHallToGameCurrencyRes. */
export class SyncHallToGameCurrencyRes implements ISyncHallToGameCurrencyRes {

    /**
     * Constructs a new SyncHallToGameCurrencyRes.
     * @param [p] Properties to set
     */
    constructor(p?: ISyncHallToGameCurrencyRes);

    /** SyncHallToGameCurrencyRes curStruct. */
    public curStruct: ICurrencyStruct[];

    /**
     * Creates a new SyncHallToGameCurrencyRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncHallToGameCurrencyRes instance
     */
    public static create(properties?: ISyncHallToGameCurrencyRes): SyncHallToGameCurrencyRes;

    /**
     * Encodes the specified SyncHallToGameCurrencyRes message. Does not implicitly {@link SyncHallToGameCurrencyRes.verify|verify} messages.
     * @param m SyncHallToGameCurrencyRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISyncHallToGameCurrencyRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncHallToGameCurrencyRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SyncHallToGameCurrencyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SyncHallToGameCurrencyRes;
}

import * as $protobuf from "protobufjs";
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

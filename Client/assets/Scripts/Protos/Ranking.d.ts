import * as $protobuf from "protobufjs";
/** Properties of a RankUserData. */
export interface IRankUserData {

    /** RankUserData playerID */
    playerID: (number|Long);

    /** RankUserData username */
    username: string;

    /** RankUserData headImageUrl */
    headImageUrl: string;

    /** RankUserData headBox */
    headBox: string;

    /** RankUserData vipLv */
    vipLv: number;

    /** RankUserData count */
    count: string;

    /** RankUserData ranking */
    ranking: number;
}

/** Represents a RankUserData. */
export class RankUserData implements IRankUserData {

    /**
     * Constructs a new RankUserData.
     * @param [p] Properties to set
     */
    constructor(p?: IRankUserData);

    /** RankUserData playerID. */
    public playerID: (number|Long);

    /** RankUserData username. */
    public username: string;

    /** RankUserData headImageUrl. */
    public headImageUrl: string;

    /** RankUserData headBox. */
    public headBox: string;

    /** RankUserData vipLv. */
    public vipLv: number;

    /** RankUserData count. */
    public count: string;

    /** RankUserData ranking. */
    public ranking: number;

    /**
     * Creates a new RankUserData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankUserData instance
     */
    public static create(properties?: IRankUserData): RankUserData;

    /**
     * Encodes the specified RankUserData message. Does not implicitly {@link RankUserData.verify|verify} messages.
     * @param m RankUserData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRankUserData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankUserData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RankUserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RankUserData;
}

/** Properties of a GetRankInfoReq. */
export interface IGetRankInfoReq {
}

/** Represents a GetRankInfoReq. */
export class GetRankInfoReq implements IGetRankInfoReq {

    /**
     * Constructs a new GetRankInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetRankInfoReq);

    /**
     * Creates a new GetRankInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRankInfoReq instance
     */
    public static create(properties?: IGetRankInfoReq): GetRankInfoReq;

    /**
     * Encodes the specified GetRankInfoReq message. Does not implicitly {@link GetRankInfoReq.verify|verify} messages.
     * @param m GetRankInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetRankInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetRankInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetRankInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetRankInfoReq;
}

/** Properties of a RankInfoData. */
export interface IRankInfoData {

    /** RankInfoData rankType */
    rankType: number;

    /** RankInfoData rankName */
    rankName: string;

    /** RankInfoData rankTypeText */
    rankTypeText: string;
}

/** Represents a RankInfoData. */
export class RankInfoData implements IRankInfoData {

    /**
     * Constructs a new RankInfoData.
     * @param [p] Properties to set
     */
    constructor(p?: IRankInfoData);

    /** RankInfoData rankType. */
    public rankType: number;

    /** RankInfoData rankName. */
    public rankName: string;

    /** RankInfoData rankTypeText. */
    public rankTypeText: string;

    /**
     * Creates a new RankInfoData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankInfoData instance
     */
    public static create(properties?: IRankInfoData): RankInfoData;

    /**
     * Encodes the specified RankInfoData message. Does not implicitly {@link RankInfoData.verify|verify} messages.
     * @param m RankInfoData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRankInfoData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankInfoData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RankInfoData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RankInfoData;
}

/** Properties of a GetRankInfoRes. */
export interface IGetRankInfoRes {

    /** GetRankInfoRes rankInfoList */
    rankInfoList?: (IRankInfoData[]|null);
}

/** Represents a GetRankInfoRes. */
export class GetRankInfoRes implements IGetRankInfoRes {

    /**
     * Constructs a new GetRankInfoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGetRankInfoRes);

    /** GetRankInfoRes rankInfoList. */
    public rankInfoList: IRankInfoData[];

    /**
     * Creates a new GetRankInfoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRankInfoRes instance
     */
    public static create(properties?: IGetRankInfoRes): GetRankInfoRes;

    /**
     * Encodes the specified GetRankInfoRes message. Does not implicitly {@link GetRankInfoRes.verify|verify} messages.
     * @param m GetRankInfoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetRankInfoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetRankInfoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetRankInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetRankInfoRes;
}

/** Properties of a GetRankingReq. */
export interface IGetRankingReq {

    /** GetRankingReq serialNum */
    serialNum: (number|Long);

    /** GetRankingReq rankType */
    rankType: number;
}

/** Represents a GetRankingReq. */
export class GetRankingReq implements IGetRankingReq {

    /**
     * Constructs a new GetRankingReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetRankingReq);

    /** GetRankingReq serialNum. */
    public serialNum: (number|Long);

    /** GetRankingReq rankType. */
    public rankType: number;

    /**
     * Creates a new GetRankingReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRankingReq instance
     */
    public static create(properties?: IGetRankingReq): GetRankingReq;

    /**
     * Encodes the specified GetRankingReq message. Does not implicitly {@link GetRankingReq.verify|verify} messages.
     * @param m GetRankingReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetRankingReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetRankingReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetRankingReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetRankingReq;
}

/** Properties of a GetRankingRes. */
export interface IGetRankingRes {

    /** GetRankingRes serialNum */
    serialNum: (number|Long);

    /** GetRankingRes rankType */
    rankType: number;

    /** GetRankingRes rankUserList */
    rankUserList?: (IRankUserData[]|null);

    /** GetRankingRes selfRankData */
    selfRankData: IRankUserData;
}

/** Represents a GetRankingRes. */
export class GetRankingRes implements IGetRankingRes {

    /**
     * Constructs a new GetRankingRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGetRankingRes);

    /** GetRankingRes serialNum. */
    public serialNum: (number|Long);

    /** GetRankingRes rankType. */
    public rankType: number;

    /** GetRankingRes rankUserList. */
    public rankUserList: IRankUserData[];

    /** GetRankingRes selfRankData. */
    public selfRankData: IRankUserData;

    /**
     * Creates a new GetRankingRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRankingRes instance
     */
    public static create(properties?: IGetRankingRes): GetRankingRes;

    /**
     * Encodes the specified GetRankingRes message. Does not implicitly {@link GetRankingRes.verify|verify} messages.
     * @param m GetRankingRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetRankingRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetRankingRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetRankingRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetRankingRes;
}

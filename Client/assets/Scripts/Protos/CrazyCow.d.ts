import * as $protobuf from "protobufjs";
/** Properties of a CrazyCowInfo. */
export interface ICrazyCowInfo {

    /** CrazyCowInfo rank */
    rank: number;

    /** CrazyCowInfo name */
    name: string;

    /** CrazyCowInfo score */
    score: number;
}

/** Represents a CrazyCowInfo. */
export class CrazyCowInfo implements ICrazyCowInfo {

    /**
     * Constructs a new CrazyCowInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ICrazyCowInfo);

    /** CrazyCowInfo rank. */
    public rank: number;

    /** CrazyCowInfo name. */
    public name: string;

    /** CrazyCowInfo score. */
    public score: number;

    /**
     * Creates a new CrazyCowInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CrazyCowInfo instance
     */
    public static create(properties?: ICrazyCowInfo): CrazyCowInfo;

    /**
     * Encodes the specified CrazyCowInfo message. Does not implicitly {@link CrazyCowInfo.verify|verify} messages.
     * @param m CrazyCowInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICrazyCowInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CrazyCowInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CrazyCowInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CrazyCowInfo;
}

/** Properties of a Req_CrazyCowRankList. */
export interface IReq_CrazyCowRankList {
}

/** Represents a Req_CrazyCowRankList. */
export class Req_CrazyCowRankList implements IReq_CrazyCowRankList {

    /**
     * Constructs a new Req_CrazyCowRankList.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_CrazyCowRankList);

    /**
     * Creates a new Req_CrazyCowRankList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_CrazyCowRankList instance
     */
    public static create(properties?: IReq_CrazyCowRankList): Req_CrazyCowRankList;

    /**
     * Encodes the specified Req_CrazyCowRankList message. Does not implicitly {@link Req_CrazyCowRankList.verify|verify} messages.
     * @param m Req_CrazyCowRankList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_CrazyCowRankList, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_CrazyCowRankList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_CrazyCowRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_CrazyCowRankList;
}

/** Properties of a Rsp_CrazyCowRankList. */
export interface IRsp_CrazyCowRankList {

    /** Rsp_CrazyCowRankList rankList */
    rankList?: (ICrazyCowInfo[]|null);
}

/** Represents a Rsp_CrazyCowRankList. */
export class Rsp_CrazyCowRankList implements IRsp_CrazyCowRankList {

    /**
     * Constructs a new Rsp_CrazyCowRankList.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_CrazyCowRankList);

    /** Rsp_CrazyCowRankList rankList. */
    public rankList: ICrazyCowInfo[];

    /**
     * Creates a new Rsp_CrazyCowRankList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_CrazyCowRankList instance
     */
    public static create(properties?: IRsp_CrazyCowRankList): Rsp_CrazyCowRankList;

    /**
     * Encodes the specified Rsp_CrazyCowRankList message. Does not implicitly {@link Rsp_CrazyCowRankList.verify|verify} messages.
     * @param m Rsp_CrazyCowRankList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_CrazyCowRankList, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_CrazyCowRankList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_CrazyCowRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_CrazyCowRankList;
}

/** Properties of a Req_CrazyCowMyScore. */
export interface IReq_CrazyCowMyScore {

    /** Req_CrazyCowMyScore name */
    name: string;

    /** Req_CrazyCowMyScore score */
    score: number;
}

/** Represents a Req_CrazyCowMyScore. */
export class Req_CrazyCowMyScore implements IReq_CrazyCowMyScore {

    /**
     * Constructs a new Req_CrazyCowMyScore.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_CrazyCowMyScore);

    /** Req_CrazyCowMyScore name. */
    public name: string;

    /** Req_CrazyCowMyScore score. */
    public score: number;

    /**
     * Creates a new Req_CrazyCowMyScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_CrazyCowMyScore instance
     */
    public static create(properties?: IReq_CrazyCowMyScore): Req_CrazyCowMyScore;

    /**
     * Encodes the specified Req_CrazyCowMyScore message. Does not implicitly {@link Req_CrazyCowMyScore.verify|verify} messages.
     * @param m Req_CrazyCowMyScore message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_CrazyCowMyScore, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_CrazyCowMyScore message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_CrazyCowMyScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_CrazyCowMyScore;
}

/** Properties of a Rsp_CrazyCowMyScore. */
export interface IRsp_CrazyCowMyScore {

    /** Rsp_CrazyCowMyScore success */
    success: boolean;

    /** Rsp_CrazyCowMyScore tip */
    tip: string;
}

/** Represents a Rsp_CrazyCowMyScore. */
export class Rsp_CrazyCowMyScore implements IRsp_CrazyCowMyScore {

    /**
     * Constructs a new Rsp_CrazyCowMyScore.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_CrazyCowMyScore);

    /** Rsp_CrazyCowMyScore success. */
    public success: boolean;

    /** Rsp_CrazyCowMyScore tip. */
    public tip: string;

    /**
     * Creates a new Rsp_CrazyCowMyScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_CrazyCowMyScore instance
     */
    public static create(properties?: IRsp_CrazyCowMyScore): Rsp_CrazyCowMyScore;

    /**
     * Encodes the specified Rsp_CrazyCowMyScore message. Does not implicitly {@link Rsp_CrazyCowMyScore.verify|verify} messages.
     * @param m Rsp_CrazyCowMyScore message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_CrazyCowMyScore, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_CrazyCowMyScore message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_CrazyCowMyScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_CrazyCowMyScore;
}

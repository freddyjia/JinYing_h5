import * as $protobuf from "protobufjs";
/** Properties of a Req_CommonEmpty. */
export interface IReq_CommonEmpty {
}

/** Represents a Req_CommonEmpty. */
export class Req_CommonEmpty implements IReq_CommonEmpty {

    /**
     * Constructs a new Req_CommonEmpty.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_CommonEmpty);

    /**
     * Creates a new Req_CommonEmpty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_CommonEmpty instance
     */
    public static create(properties?: IReq_CommonEmpty): Req_CommonEmpty;

    /**
     * Encodes the specified Req_CommonEmpty message. Does not implicitly {@link Req_CommonEmpty.verify|verify} messages.
     * @param m Req_CommonEmpty message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_CommonEmpty, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_CommonEmpty message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_CommonEmpty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_CommonEmpty;
}

/** Properties of a Rsp_CommonResult. */
export interface IRsp_CommonResult {

    /** Rsp_CommonResult result */
    result: boolean;

    /** Rsp_CommonResult tips */
    tips?: (string|null);
}

/** Represents a Rsp_CommonResult. */
export class Rsp_CommonResult implements IRsp_CommonResult {

    /**
     * Constructs a new Rsp_CommonResult.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_CommonResult);

    /** Rsp_CommonResult result. */
    public result: boolean;

    /** Rsp_CommonResult tips. */
    public tips: string;

    /**
     * Creates a new Rsp_CommonResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_CommonResult instance
     */
    public static create(properties?: IRsp_CommonResult): Rsp_CommonResult;

    /**
     * Encodes the specified Rsp_CommonResult message. Does not implicitly {@link Rsp_CommonResult.verify|verify} messages.
     * @param m Rsp_CommonResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_CommonResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_CommonResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_CommonResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_CommonResult;
}

/** Properties of a Req_Enter. */
export interface IReq_Enter {

    /** Req_Enter id */
    id: number;
}

/** Represents a Req_Enter. */
export class Req_Enter implements IReq_Enter {

    /**
     * Constructs a new Req_Enter.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_Enter);

    /** Req_Enter id. */
    public id: number;

    /**
     * Creates a new Req_Enter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_Enter instance
     */
    public static create(properties?: IReq_Enter): Req_Enter;

    /**
     * Encodes the specified Req_Enter message. Does not implicitly {@link Req_Enter.verify|verify} messages.
     * @param m Req_Enter message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_Enter, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_Enter message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_Enter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_Enter;
}

/** Properties of a Rsp_EnterSucc. */
export interface IRsp_EnterSucc {

    /** Rsp_EnterSucc roomInfo */
    roomInfo: IRoomInfo;
}

/** Represents a Rsp_EnterSucc. */
export class Rsp_EnterSucc implements IRsp_EnterSucc {

    /**
     * Constructs a new Rsp_EnterSucc.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_EnterSucc);

    /** Rsp_EnterSucc roomInfo. */
    public roomInfo: IRoomInfo;

    /**
     * Creates a new Rsp_EnterSucc instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_EnterSucc instance
     */
    public static create(properties?: IRsp_EnterSucc): Rsp_EnterSucc;

    /**
     * Encodes the specified Rsp_EnterSucc message. Does not implicitly {@link Rsp_EnterSucc.verify|verify} messages.
     * @param m Rsp_EnterSucc message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_EnterSucc, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_EnterSucc message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_EnterSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_EnterSucc;
}

/** Properties of a Rsp_Exit. */
export interface IRsp_Exit {

    /** Rsp_Exit uId */
    uId: string;

    /** Rsp_Exit tip */
    tip?: (string|null);
}

/** Represents a Rsp_Exit. */
export class Rsp_Exit implements IRsp_Exit {

    /**
     * Constructs a new Rsp_Exit.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_Exit);

    /** Rsp_Exit uId. */
    public uId: string;

    /** Rsp_Exit tip. */
    public tip: string;

    /**
     * Creates a new Rsp_Exit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_Exit instance
     */
    public static create(properties?: IRsp_Exit): Rsp_Exit;

    /**
     * Encodes the specified Rsp_Exit message. Does not implicitly {@link Rsp_Exit.verify|verify} messages.
     * @param m Rsp_Exit message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_Exit, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_Exit message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_Exit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_Exit;
}

/** Properties of a Rsp_Ting. */
export interface IRsp_Ting {

    /** Rsp_Ting id */
    id: string;

    /** Rsp_Ting tingData */
    tingData?: (ITingGroupInfo[]|null);
}

/** Represents a Rsp_Ting. */
export class Rsp_Ting implements IRsp_Ting {

    /**
     * Constructs a new Rsp_Ting.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_Ting);

    /** Rsp_Ting id. */
    public id: string;

    /** Rsp_Ting tingData. */
    public tingData: ITingGroupInfo[];

    /**
     * Creates a new Rsp_Ting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_Ting instance
     */
    public static create(properties?: IRsp_Ting): Rsp_Ting;

    /**
     * Encodes the specified Rsp_Ting message. Does not implicitly {@link Rsp_Ting.verify|verify} messages.
     * @param m Rsp_Ting message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_Ting, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_Ting message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_Ting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_Ting;
}

/** Properties of a Rsp_RoomInit. */
export interface IRsp_RoomInit {

    /** Rsp_RoomInit showAnim */
    showAnim: boolean;

    /** Rsp_RoomInit dice1 */
    dice1: number;

    /** Rsp_RoomInit dice2 */
    dice2: number;

    /** Rsp_RoomInit maxCardCnt */
    maxCardCnt: number;

    /** Rsp_RoomInit maxHandCardCnt */
    maxHandCardCnt: number;

    /** Rsp_RoomInit leftCardCnt */
    leftCardCnt: number;

    /** Rsp_RoomInit pointerId */
    pointerId?: (string|null);

    /** Rsp_RoomInit playerCards */
    playerCards?: (IRoomPlayerCardInfo[]|null);
}

/** Represents a Rsp_RoomInit. */
export class Rsp_RoomInit implements IRsp_RoomInit {

    /**
     * Constructs a new Rsp_RoomInit.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_RoomInit);

    /** Rsp_RoomInit showAnim. */
    public showAnim: boolean;

    /** Rsp_RoomInit dice1. */
    public dice1: number;

    /** Rsp_RoomInit dice2. */
    public dice2: number;

    /** Rsp_RoomInit maxCardCnt. */
    public maxCardCnt: number;

    /** Rsp_RoomInit maxHandCardCnt. */
    public maxHandCardCnt: number;

    /** Rsp_RoomInit leftCardCnt. */
    public leftCardCnt: number;

    /** Rsp_RoomInit pointerId. */
    public pointerId: string;

    /** Rsp_RoomInit playerCards. */
    public playerCards: IRoomPlayerCardInfo[];

    /**
     * Creates a new Rsp_RoomInit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_RoomInit instance
     */
    public static create(properties?: IRsp_RoomInit): Rsp_RoomInit;

    /**
     * Encodes the specified Rsp_RoomInit message. Does not implicitly {@link Rsp_RoomInit.verify|verify} messages.
     * @param m Rsp_RoomInit message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_RoomInit, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_RoomInit message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_RoomInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_RoomInit;
}

/** Properties of a Rsp_ForceTing. */
export interface IRsp_ForceTing {

    /** Rsp_ForceTing info */
    info?: (ITingInfo[]|null);
}

/** Represents a Rsp_ForceTing. */
export class Rsp_ForceTing implements IRsp_ForceTing {

    /**
     * Constructs a new Rsp_ForceTing.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_ForceTing);

    /** Rsp_ForceTing info. */
    public info: ITingInfo[];

    /**
     * Creates a new Rsp_ForceTing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_ForceTing instance
     */
    public static create(properties?: IRsp_ForceTing): Rsp_ForceTing;

    /**
     * Encodes the specified Rsp_ForceTing message. Does not implicitly {@link Rsp_ForceTing.verify|verify} messages.
     * @param m Rsp_ForceTing message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_ForceTing, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_ForceTing message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_ForceTing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_ForceTing;
}

/** Properties of a Rsp_SynTingData. */
export interface IRsp_SynTingData {

    /** Rsp_SynTingData tingData */
    tingData?: (ITingGroupInfo[]|null);
}

/** Represents a Rsp_SynTingData. */
export class Rsp_SynTingData implements IRsp_SynTingData {

    /**
     * Constructs a new Rsp_SynTingData.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_SynTingData);

    /** Rsp_SynTingData tingData. */
    public tingData: ITingGroupInfo[];

    /**
     * Creates a new Rsp_SynTingData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_SynTingData instance
     */
    public static create(properties?: IRsp_SynTingData): Rsp_SynTingData;

    /**
     * Encodes the specified Rsp_SynTingData message. Does not implicitly {@link Rsp_SynTingData.verify|verify} messages.
     * @param m Rsp_SynTingData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_SynTingData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_SynTingData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_SynTingData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_SynTingData;
}

/** Properties of a Rsp_GuoHu. */
export interface IRsp_GuoHu {

    /** Rsp_GuoHu info */
    info?: (IGuoHuInfo[]|null);
}

/** Represents a Rsp_GuoHu. */
export class Rsp_GuoHu implements IRsp_GuoHu {

    /**
     * Constructs a new Rsp_GuoHu.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_GuoHu);

    /** Rsp_GuoHu info. */
    public info: IGuoHuInfo[];

    /**
     * Creates a new Rsp_GuoHu instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_GuoHu instance
     */
    public static create(properties?: IRsp_GuoHu): Rsp_GuoHu;

    /**
     * Encodes the specified Rsp_GuoHu message. Does not implicitly {@link Rsp_GuoHu.verify|verify} messages.
     * @param m Rsp_GuoHu message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_GuoHu, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_GuoHu message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_GuoHu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_GuoHu;
}

/** Properties of a Req_SelectGap. */
export interface IReq_SelectGap {

    /** Req_SelectGap type */
    type: number;
}

/** Represents a Req_SelectGap. */
export class Req_SelectGap implements IReq_SelectGap {

    /**
     * Constructs a new Req_SelectGap.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_SelectGap);

    /** Req_SelectGap type. */
    public type: number;

    /**
     * Creates a new Req_SelectGap instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_SelectGap instance
     */
    public static create(properties?: IReq_SelectGap): Req_SelectGap;

    /**
     * Encodes the specified Req_SelectGap message. Does not implicitly {@link Req_SelectGap.verify|verify} messages.
     * @param m Req_SelectGap message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_SelectGap, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_SelectGap message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_SelectGap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_SelectGap;
}

/** Properties of a Rsp_SelectGap. */
export interface IRsp_SelectGap {

    /** Rsp_SelectGap result */
    result: boolean;

    /** Rsp_SelectGap tips */
    tips?: (string|null);
}

/** Represents a Rsp_SelectGap. */
export class Rsp_SelectGap implements IRsp_SelectGap {

    /**
     * Constructs a new Rsp_SelectGap.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_SelectGap);

    /** Rsp_SelectGap result. */
    public result: boolean;

    /** Rsp_SelectGap tips. */
    public tips: string;

    /**
     * Creates a new Rsp_SelectGap instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_SelectGap instance
     */
    public static create(properties?: IRsp_SelectGap): Rsp_SelectGap;

    /**
     * Encodes the specified Rsp_SelectGap message. Does not implicitly {@link Rsp_SelectGap.verify|verify} messages.
     * @param m Rsp_SelectGap message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_SelectGap, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_SelectGap message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_SelectGap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_SelectGap;
}

/** Properties of a Rsp_SelectGapTip. */
export interface IRsp_SelectGapTip {

    /** Rsp_SelectGapTip types */
    types?: (number[]|null);
}

/** Represents a Rsp_SelectGapTip. */
export class Rsp_SelectGapTip implements IRsp_SelectGapTip {

    /**
     * Constructs a new Rsp_SelectGapTip.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_SelectGapTip);

    /** Rsp_SelectGapTip types. */
    public types: number[];

    /**
     * Creates a new Rsp_SelectGapTip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_SelectGapTip instance
     */
    public static create(properties?: IRsp_SelectGapTip): Rsp_SelectGapTip;

    /**
     * Encodes the specified Rsp_SelectGapTip message. Does not implicitly {@link Rsp_SelectGapTip.verify|verify} messages.
     * @param m Rsp_SelectGapTip message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_SelectGapTip, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_SelectGapTip message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_SelectGapTip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_SelectGapTip;
}

/** Properties of a Rsp_GapTipBroadcast. */
export interface IRsp_GapTipBroadcast {

    /** Rsp_GapTipBroadcast gapInfoList */
    gapInfoList?: (IGapInfo[]|null);
}

/** Represents a Rsp_GapTipBroadcast. */
export class Rsp_GapTipBroadcast implements IRsp_GapTipBroadcast {

    /**
     * Constructs a new Rsp_GapTipBroadcast.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_GapTipBroadcast);

    /** Rsp_GapTipBroadcast gapInfoList. */
    public gapInfoList: IGapInfo[];

    /**
     * Creates a new Rsp_GapTipBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_GapTipBroadcast instance
     */
    public static create(properties?: IRsp_GapTipBroadcast): Rsp_GapTipBroadcast;

    /**
     * Encodes the specified Rsp_GapTipBroadcast message. Does not implicitly {@link Rsp_GapTipBroadcast.verify|verify} messages.
     * @param m Rsp_GapTipBroadcast message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_GapTipBroadcast, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_GapTipBroadcast message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_GapTipBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_GapTipBroadcast;
}

/** Properties of a Rsp_BuHua. */
export interface IRsp_BuHua {

    /** Rsp_BuHua buHua */
    buHua?: (IBuHuaNum[]|null);
}

/** Represents a Rsp_BuHua. */
export class Rsp_BuHua implements IRsp_BuHua {

    /**
     * Constructs a new Rsp_BuHua.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_BuHua);

    /** Rsp_BuHua buHua. */
    public buHua: IBuHuaNum[];

    /**
     * Creates a new Rsp_BuHua instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_BuHua instance
     */
    public static create(properties?: IRsp_BuHua): Rsp_BuHua;

    /**
     * Encodes the specified Rsp_BuHua message. Does not implicitly {@link Rsp_BuHua.verify|verify} messages.
     * @param m Rsp_BuHua message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_BuHua, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_BuHua message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_BuHua
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_BuHua;
}

/** Properties of a Rsp_AskChangeCards. */
export interface IRsp_AskChangeCards {

    /** Rsp_AskChangeCards cards */
    cards?: (number[]|null);
}

/** Represents a Rsp_AskChangeCards. */
export class Rsp_AskChangeCards implements IRsp_AskChangeCards {

    /**
     * Constructs a new Rsp_AskChangeCards.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_AskChangeCards);

    /** Rsp_AskChangeCards cards. */
    public cards: number[];

    /**
     * Creates a new Rsp_AskChangeCards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_AskChangeCards instance
     */
    public static create(properties?: IRsp_AskChangeCards): Rsp_AskChangeCards;

    /**
     * Encodes the specified Rsp_AskChangeCards message. Does not implicitly {@link Rsp_AskChangeCards.verify|verify} messages.
     * @param m Rsp_AskChangeCards message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_AskChangeCards, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_AskChangeCards message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_AskChangeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_AskChangeCards;
}

/** Properties of a Rsp_PutOrGetCard. */
export interface IRsp_PutOrGetCard {

    /** Rsp_PutOrGetCard isGet */
    isGet: boolean;

    /** Rsp_PutOrGetCard uId */
    uId: string;

    /** Rsp_PutOrGetCard card */
    card?: (number|null);

    /** Rsp_PutOrGetCard isHuaCard */
    isHuaCard?: (boolean|null);

    /** Rsp_PutOrGetCard isNeedPlayHua */
    isNeedPlayHua?: (boolean|null);

    /** Rsp_PutOrGetCard menuInfos */
    menuInfos?: (IMenuInfo[]|null);
}

/** Represents a Rsp_PutOrGetCard. */
export class Rsp_PutOrGetCard implements IRsp_PutOrGetCard {

    /**
     * Constructs a new Rsp_PutOrGetCard.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_PutOrGetCard);

    /** Rsp_PutOrGetCard isGet. */
    public isGet: boolean;

    /** Rsp_PutOrGetCard uId. */
    public uId: string;

    /** Rsp_PutOrGetCard card. */
    public card: number;

    /** Rsp_PutOrGetCard isHuaCard. */
    public isHuaCard: boolean;

    /** Rsp_PutOrGetCard isNeedPlayHua. */
    public isNeedPlayHua: boolean;

    /** Rsp_PutOrGetCard menuInfos. */
    public menuInfos: IMenuInfo[];

    /**
     * Creates a new Rsp_PutOrGetCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_PutOrGetCard instance
     */
    public static create(properties?: IRsp_PutOrGetCard): Rsp_PutOrGetCard;

    /**
     * Encodes the specified Rsp_PutOrGetCard message. Does not implicitly {@link Rsp_PutOrGetCard.verify|verify} messages.
     * @param m Rsp_PutOrGetCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_PutOrGetCard, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_PutOrGetCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_PutOrGetCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_PutOrGetCard;
}

/** Properties of a Rsp_MenuInfo. */
export interface IRsp_MenuInfo {

    /** Rsp_MenuInfo menuInfos */
    menuInfos?: (IMenuInfo[]|null);
}

/** Represents a Rsp_MenuInfo. */
export class Rsp_MenuInfo implements IRsp_MenuInfo {

    /**
     * Constructs a new Rsp_MenuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_MenuInfo);

    /** Rsp_MenuInfo menuInfos. */
    public menuInfos: IMenuInfo[];

    /**
     * Creates a new Rsp_MenuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_MenuInfo instance
     */
    public static create(properties?: IRsp_MenuInfo): Rsp_MenuInfo;

    /**
     * Encodes the specified Rsp_MenuInfo message. Does not implicitly {@link Rsp_MenuInfo.verify|verify} messages.
     * @param m Rsp_MenuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_MenuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_MenuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_MenuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_MenuInfo;
}

/** Properties of a Req_PutCard. */
export interface IReq_PutCard {

    /** Req_PutCard id */
    id: number;
}

/** Represents a Req_PutCard. */
export class Req_PutCard implements IReq_PutCard {

    /**
     * Constructs a new Req_PutCard.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_PutCard);

    /** Req_PutCard id. */
    public id: number;

    /**
     * Creates a new Req_PutCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_PutCard instance
     */
    public static create(properties?: IReq_PutCard): Req_PutCard;

    /**
     * Encodes the specified Req_PutCard message. Does not implicitly {@link Req_PutCard.verify|verify} messages.
     * @param m Req_PutCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_PutCard, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_PutCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_PutCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_PutCard;
}

/** Properties of a Rsp_CanPutCard. */
export interface IRsp_CanPutCard {

    /** Rsp_CanPutCard forceTing */
    forceTing: boolean;
}

/** Represents a Rsp_CanPutCard. */
export class Rsp_CanPutCard implements IRsp_CanPutCard {

    /**
     * Constructs a new Rsp_CanPutCard.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_CanPutCard);

    /** Rsp_CanPutCard forceTing. */
    public forceTing: boolean;

    /**
     * Creates a new Rsp_CanPutCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_CanPutCard instance
     */
    public static create(properties?: IRsp_CanPutCard): Rsp_CanPutCard;

    /**
     * Encodes the specified Rsp_CanPutCard message. Does not implicitly {@link Rsp_CanPutCard.verify|verify} messages.
     * @param m Rsp_CanPutCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_CanPutCard, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_CanPutCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_CanPutCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_CanPutCard;
}

/** Properties of a Rsp_PutCard. */
export interface IRsp_PutCard {

    /** Rsp_PutCard result */
    result: boolean;

    /** Rsp_PutCard tips */
    tips?: (string|null);

    /** Rsp_PutCard deleteId */
    deleteId?: (number|null);
}

/** Represents a Rsp_PutCard. */
export class Rsp_PutCard implements IRsp_PutCard {

    /**
     * Constructs a new Rsp_PutCard.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_PutCard);

    /** Rsp_PutCard result. */
    public result: boolean;

    /** Rsp_PutCard tips. */
    public tips: string;

    /** Rsp_PutCard deleteId. */
    public deleteId: number;

    /**
     * Creates a new Rsp_PutCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_PutCard instance
     */
    public static create(properties?: IRsp_PutCard): Rsp_PutCard;

    /**
     * Encodes the specified Rsp_PutCard message. Does not implicitly {@link Rsp_PutCard.verify|verify} messages.
     * @param m Rsp_PutCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_PutCard, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_PutCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_PutCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_PutCard;
}

/** Properties of a Rsp_Gameover. */
export interface IRsp_Gameover {

    /** Rsp_Gameover uId */
    uId: string;

    /** Rsp_Gameover cards */
    cards?: (number[]|null);
}

/** Represents a Rsp_Gameover. */
export class Rsp_Gameover implements IRsp_Gameover {

    /**
     * Constructs a new Rsp_Gameover.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_Gameover);

    /** Rsp_Gameover uId. */
    public uId: string;

    /** Rsp_Gameover cards. */
    public cards: number[];

    /**
     * Creates a new Rsp_Gameover instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_Gameover instance
     */
    public static create(properties?: IRsp_Gameover): Rsp_Gameover;

    /**
     * Encodes the specified Rsp_Gameover message. Does not implicitly {@link Rsp_Gameover.verify|verify} messages.
     * @param m Rsp_Gameover message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_Gameover, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_Gameover message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_Gameover
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_Gameover;
}

/** Properties of a Rsp_Result. */
export interface IRsp_Result {

    /** Rsp_Result hasNext */
    hasNext: boolean;

    /** Rsp_Result winId */
    winId?: (string|null);

    /** Rsp_Result hasEx */
    hasEx: boolean;

    /** Rsp_Result info */
    info: IRoundInfo;

    /** Rsp_Result maxFanName */
    maxFanName: string;

    /** Rsp_Result winCards */
    winCards: number;

    /** Rsp_Result huCard */
    huCard: number;
}

/** Represents a Rsp_Result. */
export class Rsp_Result implements IRsp_Result {

    /**
     * Constructs a new Rsp_Result.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_Result);

    /** Rsp_Result hasNext. */
    public hasNext: boolean;

    /** Rsp_Result winId. */
    public winId: string;

    /** Rsp_Result hasEx. */
    public hasEx: boolean;

    /** Rsp_Result info. */
    public info: IRoundInfo;

    /** Rsp_Result maxFanName. */
    public maxFanName: string;

    /** Rsp_Result winCards. */
    public winCards: number;

    /** Rsp_Result huCard. */
    public huCard: number;

    /**
     * Creates a new Rsp_Result instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_Result instance
     */
    public static create(properties?: IRsp_Result): Rsp_Result;

    /**
     * Encodes the specified Rsp_Result message. Does not implicitly {@link Rsp_Result.verify|verify} messages.
     * @param m Rsp_Result message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_Result, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_Result message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_Result;
}

/** Properties of a Rsp_OutRoom. */
export interface IRsp_OutRoom {

    /** Rsp_OutRoom result */
    result: boolean;

    /** Rsp_OutRoom tips */
    tips?: (string|null);
}

/** Represents a Rsp_OutRoom. */
export class Rsp_OutRoom implements IRsp_OutRoom {

    /**
     * Constructs a new Rsp_OutRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_OutRoom);

    /** Rsp_OutRoom result. */
    public result: boolean;

    /** Rsp_OutRoom tips. */
    public tips: string;

    /**
     * Creates a new Rsp_OutRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_OutRoom instance
     */
    public static create(properties?: IRsp_OutRoom): Rsp_OutRoom;

    /**
     * Encodes the specified Rsp_OutRoom message. Does not implicitly {@link Rsp_OutRoom.verify|verify} messages.
     * @param m Rsp_OutRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_OutRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_OutRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_OutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_OutRoom;
}

/** Properties of a Rsp_EnterRoom. */
export interface IRsp_EnterRoom {

    /** Rsp_EnterRoom result */
    result: boolean;

    /** Rsp_EnterRoom tips */
    tips?: (string|null);
}

/** Represents a Rsp_EnterRoom. */
export class Rsp_EnterRoom implements IRsp_EnterRoom {

    /**
     * Constructs a new Rsp_EnterRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_EnterRoom);

    /** Rsp_EnterRoom result. */
    public result: boolean;

    /** Rsp_EnterRoom tips. */
    public tips: string;

    /**
     * Creates a new Rsp_EnterRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_EnterRoom instance
     */
    public static create(properties?: IRsp_EnterRoom): Rsp_EnterRoom;

    /**
     * Encodes the specified Rsp_EnterRoom message. Does not implicitly {@link Rsp_EnterRoom.verify|verify} messages.
     * @param m Rsp_EnterRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_EnterRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_EnterRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_EnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_EnterRoom;
}

/** Properties of a Req_Round. */
export interface IReq_Round {
}

/** Represents a Req_Round. */
export class Req_Round implements IReq_Round {

    /**
     * Constructs a new Req_Round.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_Round);

    /**
     * Creates a new Req_Round instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_Round instance
     */
    public static create(properties?: IReq_Round): Req_Round;

    /**
     * Encodes the specified Req_Round message. Does not implicitly {@link Req_Round.verify|verify} messages.
     * @param m Req_Round message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_Round, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_Round message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_Round
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_Round;
}

/** Properties of a Rsp_Round. */
export interface IRsp_Round {

    /** Rsp_Round info */
    info?: (IRoundInfo[]|null);

    /** Rsp_Round totalScore */
    totalScore: string;

    /** Rsp_Round totalFan */
    totalFan: number;
}

/** Represents a Rsp_Round. */
export class Rsp_Round implements IRsp_Round {

    /**
     * Constructs a new Rsp_Round.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_Round);

    /** Rsp_Round info. */
    public info: IRoundInfo[];

    /** Rsp_Round totalScore. */
    public totalScore: string;

    /** Rsp_Round totalFan. */
    public totalFan: number;

    /**
     * Creates a new Rsp_Round instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_Round instance
     */
    public static create(properties?: IRsp_Round): Rsp_Round;

    /**
     * Encodes the specified Rsp_Round message. Does not implicitly {@link Rsp_Round.verify|verify} messages.
     * @param m Rsp_Round message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_Round, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_Round message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_Round
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_Round;
}

/** Properties of a Rsp_OpenLaizi. */
export interface IRsp_OpenLaizi {

    /** Rsp_OpenLaizi type */
    type: number;

    /** Rsp_OpenLaizi gLaiziInfo */
    gLaiziInfo?: (IGuangDongLaiziInfo|null);

    /** Rsp_OpenLaizi fLaiziInfo */
    fLaiziInfo?: (IFuzhouLaiziInfo|null);
}

/** Represents a Rsp_OpenLaizi. */
export class Rsp_OpenLaizi implements IRsp_OpenLaizi {

    /**
     * Constructs a new Rsp_OpenLaizi.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_OpenLaizi);

    /** Rsp_OpenLaizi type. */
    public type: number;

    /** Rsp_OpenLaizi gLaiziInfo. */
    public gLaiziInfo?: (IGuangDongLaiziInfo|null);

    /** Rsp_OpenLaizi fLaiziInfo. */
    public fLaiziInfo?: (IFuzhouLaiziInfo|null);

    /**
     * Creates a new Rsp_OpenLaizi instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_OpenLaizi instance
     */
    public static create(properties?: IRsp_OpenLaizi): Rsp_OpenLaizi;

    /**
     * Encodes the specified Rsp_OpenLaizi message. Does not implicitly {@link Rsp_OpenLaizi.verify|verify} messages.
     * @param m Rsp_OpenLaizi message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_OpenLaizi, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_OpenLaizi message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_OpenLaizi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_OpenLaizi;
}

/** Properties of a Rsp_SendLaizi. */
export interface IRsp_SendLaizi {

    /** Rsp_SendLaizi type */
    type: number;

    /** Rsp_SendLaizi gLaiziInfo */
    gLaiziInfo?: (IGuangDongLaiziInfo|null);

    /** Rsp_SendLaizi fLaiziInfo */
    fLaiziInfo?: (IFuzhouLaiziInfo|null);
}

/** Represents a Rsp_SendLaizi. */
export class Rsp_SendLaizi implements IRsp_SendLaizi {

    /**
     * Constructs a new Rsp_SendLaizi.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_SendLaizi);

    /** Rsp_SendLaizi type. */
    public type: number;

    /** Rsp_SendLaizi gLaiziInfo. */
    public gLaiziInfo?: (IGuangDongLaiziInfo|null);

    /** Rsp_SendLaizi fLaiziInfo. */
    public fLaiziInfo?: (IFuzhouLaiziInfo|null);

    /**
     * Creates a new Rsp_SendLaizi instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_SendLaizi instance
     */
    public static create(properties?: IRsp_SendLaizi): Rsp_SendLaizi;

    /**
     * Encodes the specified Rsp_SendLaizi message. Does not implicitly {@link Rsp_SendLaizi.verify|verify} messages.
     * @param m Rsp_SendLaizi message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_SendLaizi, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_SendLaizi message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_SendLaizi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_SendLaizi;
}

/** Properties of a Rsp_SendMa. */
export interface IRsp_SendMa {

    /** Rsp_SendMa maCardInfos */
    maCardInfos?: (IMaCardInfo[]|null);
}

/** Represents a Rsp_SendMa. */
export class Rsp_SendMa implements IRsp_SendMa {

    /**
     * Constructs a new Rsp_SendMa.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_SendMa);

    /** Rsp_SendMa maCardInfos. */
    public maCardInfos: IMaCardInfo[];

    /**
     * Creates a new Rsp_SendMa instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_SendMa instance
     */
    public static create(properties?: IRsp_SendMa): Rsp_SendMa;

    /**
     * Encodes the specified Rsp_SendMa message. Does not implicitly {@link Rsp_SendMa.verify|verify} messages.
     * @param m Rsp_SendMa message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_SendMa, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_SendMa message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_SendMa
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_SendMa;
}

/** Properties of a Rsp_OpenMa. */
export interface IRsp_OpenMa {

    /** Rsp_OpenMa info */
    info?: (IPlayerMaInfo[]|null);
}

/** Represents a Rsp_OpenMa. */
export class Rsp_OpenMa implements IRsp_OpenMa {

    /**
     * Constructs a new Rsp_OpenMa.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_OpenMa);

    /** Rsp_OpenMa info. */
    public info: IPlayerMaInfo[];

    /**
     * Creates a new Rsp_OpenMa instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_OpenMa instance
     */
    public static create(properties?: IRsp_OpenMa): Rsp_OpenMa;

    /**
     * Encodes the specified Rsp_OpenMa message. Does not implicitly {@link Rsp_OpenMa.verify|verify} messages.
     * @param m Rsp_OpenMa message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_OpenMa, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_OpenMa message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_OpenMa
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_OpenMa;
}

/** Properties of a Rsp_ChaHuaZhu. */
export interface IRsp_ChaHuaZhu {

    /** Rsp_ChaHuaZhu type */
    type: number;

    /** Rsp_ChaHuaZhu payId */
    payId: string;

    /** Rsp_ChaHuaZhu allPay */
    allPay: string;

    /** Rsp_ChaHuaZhu winners */
    winners?: (IChaHuaZhuInfo[]|null);
}

/** Represents a Rsp_ChaHuaZhu. */
export class Rsp_ChaHuaZhu implements IRsp_ChaHuaZhu {

    /**
     * Constructs a new Rsp_ChaHuaZhu.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_ChaHuaZhu);

    /** Rsp_ChaHuaZhu type. */
    public type: number;

    /** Rsp_ChaHuaZhu payId. */
    public payId: string;

    /** Rsp_ChaHuaZhu allPay. */
    public allPay: string;

    /** Rsp_ChaHuaZhu winners. */
    public winners: IChaHuaZhuInfo[];

    /**
     * Creates a new Rsp_ChaHuaZhu instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_ChaHuaZhu instance
     */
    public static create(properties?: IRsp_ChaHuaZhu): Rsp_ChaHuaZhu;

    /**
     * Encodes the specified Rsp_ChaHuaZhu message. Does not implicitly {@link Rsp_ChaHuaZhu.verify|verify} messages.
     * @param m Rsp_ChaHuaZhu message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_ChaHuaZhu, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_ChaHuaZhu message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_ChaHuaZhu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_ChaHuaZhu;
}

/** Properties of a Rsp_GangorEatBroadcast. */
export interface IRsp_GangorEatBroadcast {

    /** Rsp_GangorEatBroadcast type */
    type: number;

    /** Rsp_GangorEatBroadcast cardInfo */
    cardInfo?: (ICardGroupInfo|null);

    /** Rsp_GangorEatBroadcast gangGold */
    gangGold?: (number|null);

    /** Rsp_GangorEatBroadcast beGangInfo */
    beGangInfo?: (IBeGangInfo[]|null);

    /** Rsp_GangorEatBroadcast deleteIds */
    deleteIds?: (number[]|null);

    /** Rsp_GangorEatBroadcast menuInfo */
    menuInfo?: (IMenuInfo[]|null);

    /** Rsp_GangorEatBroadcast actionPlayerId */
    actionPlayerId?: (string|null);
}

/** Represents a Rsp_GangorEatBroadcast. */
export class Rsp_GangorEatBroadcast implements IRsp_GangorEatBroadcast {

    /**
     * Constructs a new Rsp_GangorEatBroadcast.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_GangorEatBroadcast);

    /** Rsp_GangorEatBroadcast type. */
    public type: number;

    /** Rsp_GangorEatBroadcast cardInfo. */
    public cardInfo?: (ICardGroupInfo|null);

    /** Rsp_GangorEatBroadcast gangGold. */
    public gangGold: number;

    /** Rsp_GangorEatBroadcast beGangInfo. */
    public beGangInfo: IBeGangInfo[];

    /** Rsp_GangorEatBroadcast deleteIds. */
    public deleteIds: number[];

    /** Rsp_GangorEatBroadcast menuInfo. */
    public menuInfo: IMenuInfo[];

    /** Rsp_GangorEatBroadcast actionPlayerId. */
    public actionPlayerId: string;

    /**
     * Creates a new Rsp_GangorEatBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_GangorEatBroadcast instance
     */
    public static create(properties?: IRsp_GangorEatBroadcast): Rsp_GangorEatBroadcast;

    /**
     * Encodes the specified Rsp_GangorEatBroadcast message. Does not implicitly {@link Rsp_GangorEatBroadcast.verify|verify} messages.
     * @param m Rsp_GangorEatBroadcast message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_GangorEatBroadcast, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_GangorEatBroadcast message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_GangorEatBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_GangorEatBroadcast;
}

/** Properties of a Rsp_HuBroadcast. */
export interface IRsp_HuBroadcast {

    /** Rsp_HuBroadcast type */
    type: number;

    /** Rsp_HuBroadcast huUId */
    huUId?: (string|null);

    /** Rsp_HuBroadcast outCardId */
    outCardId?: (number|null);

    /** Rsp_HuBroadcast isGetCard */
    isGetCard?: (boolean|null);

    /** Rsp_HuBroadcast isGangShangKaiHua */
    isGangShangKaiHua: boolean;

    /** Rsp_HuBroadcast huInfo */
    huInfo?: (IHuInfo[]|null);

    /** Rsp_HuBroadcast beHuInfo */
    beHuInfo?: (IBeHuInfo[]|null);

    /** Rsp_HuBroadcast isLastHu */
    isLastHu: boolean;
}

/** Represents a Rsp_HuBroadcast. */
export class Rsp_HuBroadcast implements IRsp_HuBroadcast {

    /**
     * Constructs a new Rsp_HuBroadcast.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_HuBroadcast);

    /** Rsp_HuBroadcast type. */
    public type: number;

    /** Rsp_HuBroadcast huUId. */
    public huUId: string;

    /** Rsp_HuBroadcast outCardId. */
    public outCardId: number;

    /** Rsp_HuBroadcast isGetCard. */
    public isGetCard: boolean;

    /** Rsp_HuBroadcast isGangShangKaiHua. */
    public isGangShangKaiHua: boolean;

    /** Rsp_HuBroadcast huInfo. */
    public huInfo: IHuInfo[];

    /** Rsp_HuBroadcast beHuInfo. */
    public beHuInfo: IBeHuInfo[];

    /** Rsp_HuBroadcast isLastHu. */
    public isLastHu: boolean;

    /**
     * Creates a new Rsp_HuBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_HuBroadcast instance
     */
    public static create(properties?: IRsp_HuBroadcast): Rsp_HuBroadcast;

    /**
     * Encodes the specified Rsp_HuBroadcast message. Does not implicitly {@link Rsp_HuBroadcast.verify|verify} messages.
     * @param m Rsp_HuBroadcast message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_HuBroadcast, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_HuBroadcast message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_HuBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_HuBroadcast;
}

/** Properties of a Req_ChangeCards. */
export interface IReq_ChangeCards {

    /** Req_ChangeCards cards */
    cards?: (number[]|null);
}

/** Represents a Req_ChangeCards. */
export class Req_ChangeCards implements IReq_ChangeCards {

    /**
     * Constructs a new Req_ChangeCards.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_ChangeCards);

    /** Req_ChangeCards cards. */
    public cards: number[];

    /**
     * Creates a new Req_ChangeCards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_ChangeCards instance
     */
    public static create(properties?: IReq_ChangeCards): Req_ChangeCards;

    /**
     * Encodes the specified Req_ChangeCards message. Does not implicitly {@link Req_ChangeCards.verify|verify} messages.
     * @param m Req_ChangeCards message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_ChangeCards, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_ChangeCards message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_ChangeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_ChangeCards;
}

/** Properties of a Rsp_ChangeCards. */
export interface IRsp_ChangeCards {

    /** Rsp_ChangeCards result */
    result: boolean;

    /** Rsp_ChangeCards tips */
    tips?: (string|null);
}

/** Represents a Rsp_ChangeCards. */
export class Rsp_ChangeCards implements IRsp_ChangeCards {

    /**
     * Constructs a new Rsp_ChangeCards.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_ChangeCards);

    /** Rsp_ChangeCards result. */
    public result: boolean;

    /** Rsp_ChangeCards tips. */
    public tips: string;

    /**
     * Creates a new Rsp_ChangeCards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_ChangeCards instance
     */
    public static create(properties?: IRsp_ChangeCards): Rsp_ChangeCards;

    /**
     * Encodes the specified Rsp_ChangeCards message. Does not implicitly {@link Rsp_ChangeCards.verify|verify} messages.
     * @param m Rsp_ChangeCards message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_ChangeCards, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_ChangeCards message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_ChangeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_ChangeCards;
}

/** Properties of a Req_SelectMenu. */
export interface IReq_SelectMenu {

    /** Req_SelectMenu type */
    type: number;

    /** Req_SelectMenu index */
    index?: (number|null);
}

/** Represents a Req_SelectMenu. */
export class Req_SelectMenu implements IReq_SelectMenu {

    /**
     * Constructs a new Req_SelectMenu.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_SelectMenu);

    /** Req_SelectMenu type. */
    public type: number;

    /** Req_SelectMenu index. */
    public index: number;

    /**
     * Creates a new Req_SelectMenu instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_SelectMenu instance
     */
    public static create(properties?: IReq_SelectMenu): Req_SelectMenu;

    /**
     * Encodes the specified Req_SelectMenu message. Does not implicitly {@link Req_SelectMenu.verify|verify} messages.
     * @param m Req_SelectMenu message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_SelectMenu, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_SelectMenu message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_SelectMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_SelectMenu;
}

/** Properties of a Rsp_SelectMenu. */
export interface IRsp_SelectMenu {

    /** Rsp_SelectMenu type */
    type: number;

    /** Rsp_SelectMenu result */
    result: boolean;

    /** Rsp_SelectMenu tips */
    tips?: (string|null);
}

/** Represents a Rsp_SelectMenu. */
export class Rsp_SelectMenu implements IRsp_SelectMenu {

    /**
     * Constructs a new Rsp_SelectMenu.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_SelectMenu);

    /** Rsp_SelectMenu type. */
    public type: number;

    /** Rsp_SelectMenu result. */
    public result: boolean;

    /** Rsp_SelectMenu tips. */
    public tips: string;

    /**
     * Creates a new Rsp_SelectMenu instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_SelectMenu instance
     */
    public static create(properties?: IRsp_SelectMenu): Rsp_SelectMenu;

    /**
     * Encodes the specified Rsp_SelectMenu message. Does not implicitly {@link Rsp_SelectMenu.verify|verify} messages.
     * @param m Rsp_SelectMenu message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_SelectMenu, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_SelectMenu message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_SelectMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_SelectMenu;
}

/** Properties of a Req_AutoPlay. */
export interface IReq_AutoPlay {

    /** Req_AutoPlay isAuto */
    isAuto: boolean;
}

/** Represents a Req_AutoPlay. */
export class Req_AutoPlay implements IReq_AutoPlay {

    /**
     * Constructs a new Req_AutoPlay.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_AutoPlay);

    /** Req_AutoPlay isAuto. */
    public isAuto: boolean;

    /**
     * Creates a new Req_AutoPlay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_AutoPlay instance
     */
    public static create(properties?: IReq_AutoPlay): Req_AutoPlay;

    /**
     * Encodes the specified Req_AutoPlay message. Does not implicitly {@link Req_AutoPlay.verify|verify} messages.
     * @param m Req_AutoPlay message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_AutoPlay, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_AutoPlay message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_AutoPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_AutoPlay;
}

/** Properties of a Rsp_AutoPlay. */
export interface IRsp_AutoPlay {

    /** Rsp_AutoPlay isAuto */
    isAuto: boolean;

    /** Rsp_AutoPlay playerId */
    playerId: string;
}

/** Represents a Rsp_AutoPlay. */
export class Rsp_AutoPlay implements IRsp_AutoPlay {

    /**
     * Constructs a new Rsp_AutoPlay.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_AutoPlay);

    /** Rsp_AutoPlay isAuto. */
    public isAuto: boolean;

    /** Rsp_AutoPlay playerId. */
    public playerId: string;

    /**
     * Creates a new Rsp_AutoPlay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_AutoPlay instance
     */
    public static create(properties?: IRsp_AutoPlay): Rsp_AutoPlay;

    /**
     * Encodes the specified Rsp_AutoPlay message. Does not implicitly {@link Rsp_AutoPlay.verify|verify} messages.
     * @param m Rsp_AutoPlay message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_AutoPlay, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_AutoPlay message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_AutoPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_AutoPlay;
}

/** Properties of a Req_SureGameOver. */
export interface IReq_SureGameOver {

    /** Req_SureGameOver iscontinue */
    iscontinue: boolean;
}

/** Represents a Req_SureGameOver. */
export class Req_SureGameOver implements IReq_SureGameOver {

    /**
     * Constructs a new Req_SureGameOver.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_SureGameOver);

    /** Req_SureGameOver iscontinue. */
    public iscontinue: boolean;

    /**
     * Creates a new Req_SureGameOver instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_SureGameOver instance
     */
    public static create(properties?: IReq_SureGameOver): Req_SureGameOver;

    /**
     * Encodes the specified Req_SureGameOver message. Does not implicitly {@link Req_SureGameOver.verify|verify} messages.
     * @param m Req_SureGameOver message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_SureGameOver, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_SureGameOver message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_SureGameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_SureGameOver;
}

/** Properties of a Rsq_SureGameOver. */
export interface IRsq_SureGameOver {

    /** Rsq_SureGameOver uId */
    uId: string;

    /** Rsq_SureGameOver result */
    result: boolean;

    /** Rsq_SureGameOver tips */
    tips: string;
}

/** Represents a Rsq_SureGameOver. */
export class Rsq_SureGameOver implements IRsq_SureGameOver {

    /**
     * Constructs a new Rsq_SureGameOver.
     * @param [p] Properties to set
     */
    constructor(p?: IRsq_SureGameOver);

    /** Rsq_SureGameOver uId. */
    public uId: string;

    /** Rsq_SureGameOver result. */
    public result: boolean;

    /** Rsq_SureGameOver tips. */
    public tips: string;

    /**
     * Creates a new Rsq_SureGameOver instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsq_SureGameOver instance
     */
    public static create(properties?: IRsq_SureGameOver): Rsq_SureGameOver;

    /**
     * Encodes the specified Rsq_SureGameOver message. Does not implicitly {@link Rsq_SureGameOver.verify|verify} messages.
     * @param m Rsq_SureGameOver message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsq_SureGameOver, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsq_SureGameOver message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsq_SureGameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsq_SureGameOver;
}

/** Properties of a Rsq_RoomSyn. */
export interface IRsq_RoomSyn {

    /** Rsq_RoomSyn playerStatus */
    playerStatus?: (IPlayerStatus[]|null);
}

/** Represents a Rsq_RoomSyn. */
export class Rsq_RoomSyn implements IRsq_RoomSyn {

    /**
     * Constructs a new Rsq_RoomSyn.
     * @param [p] Properties to set
     */
    constructor(p?: IRsq_RoomSyn);

    /** Rsq_RoomSyn playerStatus. */
    public playerStatus: IPlayerStatus[];

    /**
     * Creates a new Rsq_RoomSyn instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsq_RoomSyn instance
     */
    public static create(properties?: IRsq_RoomSyn): Rsq_RoomSyn;

    /**
     * Encodes the specified Rsq_RoomSyn message. Does not implicitly {@link Rsq_RoomSyn.verify|verify} messages.
     * @param m Rsq_RoomSyn message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsq_RoomSyn, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsq_RoomSyn message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsq_RoomSyn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsq_RoomSyn;
}

/** Properties of a Rsp_SynOtherCards. */
export interface IRsp_SynOtherCards {

    /** Rsp_SynOtherCards playerCards */
    playerCards?: (IPlayerCardInfo[]|null);
}

/** Represents a Rsp_SynOtherCards. */
export class Rsp_SynOtherCards implements IRsp_SynOtherCards {

    /**
     * Constructs a new Rsp_SynOtherCards.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_SynOtherCards);

    /** Rsp_SynOtherCards playerCards. */
    public playerCards: IPlayerCardInfo[];

    /**
     * Creates a new Rsp_SynOtherCards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_SynOtherCards instance
     */
    public static create(properties?: IRsp_SynOtherCards): Rsp_SynOtherCards;

    /**
     * Encodes the specified Rsp_SynOtherCards message. Does not implicitly {@link Rsp_SynOtherCards.verify|verify} messages.
     * @param m Rsp_SynOtherCards message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_SynOtherCards, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_SynOtherCards message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_SynOtherCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_SynOtherCards;
}

/** Properties of a Rsp_SynChangeCards. */
export interface IRsp_SynChangeCards {

    /** Rsp_SynChangeCards type */
    type: number;

    /** Rsp_SynChangeCards cardsData */
    cardsData?: (ISynStandCardsData[]|null);
}

/** Represents a Rsp_SynChangeCards. */
export class Rsp_SynChangeCards implements IRsp_SynChangeCards {

    /**
     * Constructs a new Rsp_SynChangeCards.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_SynChangeCards);

    /** Rsp_SynChangeCards type. */
    public type: number;

    /** Rsp_SynChangeCards cardsData. */
    public cardsData: ISynStandCardsData[];

    /**
     * Creates a new Rsp_SynChangeCards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_SynChangeCards instance
     */
    public static create(properties?: IRsp_SynChangeCards): Rsp_SynChangeCards;

    /**
     * Encodes the specified Rsp_SynChangeCards message. Does not implicitly {@link Rsp_SynChangeCards.verify|verify} messages.
     * @param m Rsp_SynChangeCards message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_SynChangeCards, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_SynChangeCards message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_SynChangeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_SynChangeCards;
}

/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

    /** PlayerInfo pos */
    pos: number;

    /** PlayerInfo id */
    id: string;

    /** PlayerInfo sex */
    sex: number;

    /** PlayerInfo name */
    name: string;

    /** PlayerInfo headUrl */
    headUrl: string;

    /** PlayerInfo vip */
    vip: number;

    /** PlayerInfo isJudge */
    isJudge: boolean;

    /** PlayerInfo gold */
    gold: number;
}

/** Represents a PlayerInfo. */
export class PlayerInfo implements IPlayerInfo {

    /**
     * Constructs a new PlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerInfo);

    /** PlayerInfo pos. */
    public pos: number;

    /** PlayerInfo id. */
    public id: string;

    /** PlayerInfo sex. */
    public sex: number;

    /** PlayerInfo name. */
    public name: string;

    /** PlayerInfo headUrl. */
    public headUrl: string;

    /** PlayerInfo vip. */
    public vip: number;

    /** PlayerInfo isJudge. */
    public isJudge: boolean;

    /** PlayerInfo gold. */
    public gold: number;

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

/** Properties of a PlayerStatus. */
export interface IPlayerStatus {

    /** PlayerStatus playerId */
    playerId: string;

    /** PlayerStatus status */
    status: number;
}

/** Represents a PlayerStatus. */
export class PlayerStatus implements IPlayerStatus {

    /**
     * Constructs a new PlayerStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerStatus);

    /** PlayerStatus playerId. */
    public playerId: string;

    /** PlayerStatus status. */
    public status: number;

    /**
     * Creates a new PlayerStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerStatus instance
     */
    public static create(properties?: IPlayerStatus): PlayerStatus;

    /**
     * Encodes the specified PlayerStatus message. Does not implicitly {@link PlayerStatus.verify|verify} messages.
     * @param m PlayerStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerStatus;
}

/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo name */
    name: string;

    /** RoomInfo score */
    score: number;

    /** RoomInfo playerCnt */
    playerCnt: number;

    /** RoomInfo playerInfo */
    playerInfo?: (IPlayerInfo[]|null);
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomInfo);

    /** RoomInfo name. */
    public name: string;

    /** RoomInfo score. */
    public score: number;

    /** RoomInfo playerCnt. */
    public playerCnt: number;

    /** RoomInfo playerInfo. */
    public playerInfo: IPlayerInfo[];

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

/** Properties of a TingGroupInfo. */
export interface ITingGroupInfo {

    /** TingGroupInfo num */
    num: number;

    /** TingGroupInfo id */
    id?: (number|null);

    /** TingGroupInfo fan */
    fan?: (number|null);
}

/** Represents a TingGroupInfo. */
export class TingGroupInfo implements ITingGroupInfo {

    /**
     * Constructs a new TingGroupInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ITingGroupInfo);

    /** TingGroupInfo num. */
    public num: number;

    /** TingGroupInfo id. */
    public id: number;

    /** TingGroupInfo fan. */
    public fan: number;

    /**
     * Creates a new TingGroupInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TingGroupInfo instance
     */
    public static create(properties?: ITingGroupInfo): TingGroupInfo;

    /**
     * Encodes the specified TingGroupInfo message. Does not implicitly {@link TingGroupInfo.verify|verify} messages.
     * @param m TingGroupInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITingGroupInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TingGroupInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TingGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TingGroupInfo;
}

/** Properties of a SuggestTingData. */
export interface ISuggestTingData {

    /** SuggestTingData canPutCards */
    canPutCards: number;

    /** SuggestTingData tingCard */
    tingCard?: (ITingGroupInfo[]|null);
}

/** Represents a SuggestTingData. */
export class SuggestTingData implements ISuggestTingData {

    /**
     * Constructs a new SuggestTingData.
     * @param [p] Properties to set
     */
    constructor(p?: ISuggestTingData);

    /** SuggestTingData canPutCards. */
    public canPutCards: number;

    /** SuggestTingData tingCard. */
    public tingCard: ITingGroupInfo[];

    /**
     * Creates a new SuggestTingData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SuggestTingData instance
     */
    public static create(properties?: ISuggestTingData): SuggestTingData;

    /**
     * Encodes the specified SuggestTingData message. Does not implicitly {@link SuggestTingData.verify|verify} messages.
     * @param m SuggestTingData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISuggestTingData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SuggestTingData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SuggestTingData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SuggestTingData;
}

/** Properties of a CardGroupInfo. */
export interface ICardGroupInfo {

    /** CardGroupInfo id */
    id?: (number|null);

    /** CardGroupInfo uId */
    uId?: (string|null);

    /** CardGroupInfo type */
    type?: (number|null);

    /** CardGroupInfo cards */
    cards?: (number[]|null);

    /** CardGroupInfo fromId */
    fromId?: (string|null);

    /** CardGroupInfo fromCardId */
    fromCardId?: (number|null);
}

/** Represents a CardGroupInfo. */
export class CardGroupInfo implements ICardGroupInfo {

    /**
     * Constructs a new CardGroupInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ICardGroupInfo);

    /** CardGroupInfo id. */
    public id: number;

    /** CardGroupInfo uId. */
    public uId: string;

    /** CardGroupInfo type. */
    public type: number;

    /** CardGroupInfo cards. */
    public cards: number[];

    /** CardGroupInfo fromId. */
    public fromId: string;

    /** CardGroupInfo fromCardId. */
    public fromCardId: number;

    /**
     * Creates a new CardGroupInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CardGroupInfo instance
     */
    public static create(properties?: ICardGroupInfo): CardGroupInfo;

    /**
     * Encodes the specified CardGroupInfo message. Does not implicitly {@link CardGroupInfo.verify|verify} messages.
     * @param m CardGroupInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICardGroupInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardGroupInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CardGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CardGroupInfo;
}

/** Properties of a RoomPlayerCardInfo. */
export interface IRoomPlayerCardInfo {

    /** RoomPlayerCardInfo uId */
    uId: string;

    /** RoomPlayerCardInfo tingInfo */
    tingInfo?: (ITingGroupInfo[]|null);

    /** RoomPlayerCardInfo mingIds */
    mingIds?: (number[]|null);

    /** RoomPlayerCardInfo handCnt */
    handCnt?: (number|null);

    /** RoomPlayerCardInfo husIds */
    husIds?: (number[]|null);

    /** RoomPlayerCardInfo puts */
    puts?: (number[]|null);

    /** RoomPlayerCardInfo isMing */
    isMing: boolean;

    /** RoomPlayerCardInfo eats */
    eats?: (ICardGroupInfo[]|null);

    /** RoomPlayerCardInfo cardId */
    cardId: number;
}

/** Represents a RoomPlayerCardInfo. */
export class RoomPlayerCardInfo implements IRoomPlayerCardInfo {

    /**
     * Constructs a new RoomPlayerCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomPlayerCardInfo);

    /** RoomPlayerCardInfo uId. */
    public uId: string;

    /** RoomPlayerCardInfo tingInfo. */
    public tingInfo: ITingGroupInfo[];

    /** RoomPlayerCardInfo mingIds. */
    public mingIds: number[];

    /** RoomPlayerCardInfo handCnt. */
    public handCnt: number;

    /** RoomPlayerCardInfo husIds. */
    public husIds: number[];

    /** RoomPlayerCardInfo puts. */
    public puts: number[];

    /** RoomPlayerCardInfo isMing. */
    public isMing: boolean;

    /** RoomPlayerCardInfo eats. */
    public eats: ICardGroupInfo[];

    /** RoomPlayerCardInfo cardId. */
    public cardId: number;

    /**
     * Creates a new RoomPlayerCardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomPlayerCardInfo instance
     */
    public static create(properties?: IRoomPlayerCardInfo): RoomPlayerCardInfo;

    /**
     * Encodes the specified RoomPlayerCardInfo message. Does not implicitly {@link RoomPlayerCardInfo.verify|verify} messages.
     * @param m RoomPlayerCardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomPlayerCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomPlayerCardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomPlayerCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomPlayerCardInfo;
}

/** Properties of a SynStandCardsData. */
export interface ISynStandCardsData {

    /** SynStandCardsData id */
    id: string;

    /** SynStandCardsData addCards */
    addCards?: (number[]|null);

    /** SynStandCardsData deleteCards */
    deleteCards?: (number[]|null);
}

/** Represents a SynStandCardsData. */
export class SynStandCardsData implements ISynStandCardsData {

    /**
     * Constructs a new SynStandCardsData.
     * @param [p] Properties to set
     */
    constructor(p?: ISynStandCardsData);

    /** SynStandCardsData id. */
    public id: string;

    /** SynStandCardsData addCards. */
    public addCards: number[];

    /** SynStandCardsData deleteCards. */
    public deleteCards: number[];

    /**
     * Creates a new SynStandCardsData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SynStandCardsData instance
     */
    public static create(properties?: ISynStandCardsData): SynStandCardsData;

    /**
     * Encodes the specified SynStandCardsData message. Does not implicitly {@link SynStandCardsData.verify|verify} messages.
     * @param m SynStandCardsData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISynStandCardsData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SynStandCardsData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SynStandCardsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SynStandCardsData;
}

/** Properties of a BuHuaPlayer. */
export interface IBuHuaPlayer {

    /** BuHuaPlayer uId */
    uId: string;

    /** BuHuaPlayer cards */
    cards?: (number[]|null);

    /** BuHuaPlayer huaCards */
    huaCards?: (number[]|null);
}

/** Represents a BuHuaPlayer. */
export class BuHuaPlayer implements IBuHuaPlayer {

    /**
     * Constructs a new BuHuaPlayer.
     * @param [p] Properties to set
     */
    constructor(p?: IBuHuaPlayer);

    /** BuHuaPlayer uId. */
    public uId: string;

    /** BuHuaPlayer cards. */
    public cards: number[];

    /** BuHuaPlayer huaCards. */
    public huaCards: number[];

    /**
     * Creates a new BuHuaPlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuHuaPlayer instance
     */
    public static create(properties?: IBuHuaPlayer): BuHuaPlayer;

    /**
     * Encodes the specified BuHuaPlayer message. Does not implicitly {@link BuHuaPlayer.verify|verify} messages.
     * @param m BuHuaPlayer message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBuHuaPlayer, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuHuaPlayer message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BuHuaPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BuHuaPlayer;
}

/** Properties of a BuHuaNum. */
export interface IBuHuaNum {

    /** BuHuaNum buahuaPlayers */
    buahuaPlayers?: (IBuHuaPlayer[]|null);
}

/** Represents a BuHuaNum. */
export class BuHuaNum implements IBuHuaNum {

    /**
     * Constructs a new BuHuaNum.
     * @param [p] Properties to set
     */
    constructor(p?: IBuHuaNum);

    /** BuHuaNum buahuaPlayers. */
    public buahuaPlayers: IBuHuaPlayer[];

    /**
     * Creates a new BuHuaNum instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuHuaNum instance
     */
    public static create(properties?: IBuHuaNum): BuHuaNum;

    /**
     * Encodes the specified BuHuaNum message. Does not implicitly {@link BuHuaNum.verify|verify} messages.
     * @param m BuHuaNum message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBuHuaNum, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuHuaNum message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BuHuaNum
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BuHuaNum;
}

/** Properties of a GuoHuInfo. */
export interface IGuoHuInfo {

    /** GuoHuInfo uId */
    uId: string;

    /** GuoHuInfo counts */
    counts: number;
}

/** Represents a GuoHuInfo. */
export class GuoHuInfo implements IGuoHuInfo {

    /**
     * Constructs a new GuoHuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IGuoHuInfo);

    /** GuoHuInfo uId. */
    public uId: string;

    /** GuoHuInfo counts. */
    public counts: number;

    /**
     * Creates a new GuoHuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuoHuInfo instance
     */
    public static create(properties?: IGuoHuInfo): GuoHuInfo;

    /**
     * Encodes the specified GuoHuInfo message. Does not implicitly {@link GuoHuInfo.verify|verify} messages.
     * @param m GuoHuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGuoHuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuoHuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GuoHuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GuoHuInfo;
}

/** Properties of a TingInfo. */
export interface ITingInfo {

    /** TingInfo uId */
    uId: string;

    /** TingInfo isTing */
    isTing: boolean;
}

/** Represents a TingInfo. */
export class TingInfo implements ITingInfo {

    /**
     * Constructs a new TingInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ITingInfo);

    /** TingInfo uId. */
    public uId: string;

    /** TingInfo isTing. */
    public isTing: boolean;

    /**
     * Creates a new TingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TingInfo instance
     */
    public static create(properties?: ITingInfo): TingInfo;

    /**
     * Encodes the specified TingInfo message. Does not implicitly {@link TingInfo.verify|verify} messages.
     * @param m TingInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITingInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TingInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TingInfo;
}

/** Properties of a MenuInfo. */
export interface IMenuInfo {

    /** MenuInfo types */
    types: number;

    /** MenuInfo isShow */
    isShow?: (boolean|null);

    /** MenuInfo gangInfo */
    gangInfo?: (ICardGroupInfo[]|null);

    /** MenuInfo chiInfo */
    chiInfo?: (ICardGroupInfo[]|null);

    /** MenuInfo pengInfo */
    pengInfo?: (ICardGroupInfo|null);

    /** MenuInfo suggestTing */
    suggestTing?: (ISuggestTingData[]|null);
}

/** Represents a MenuInfo. */
export class MenuInfo implements IMenuInfo {

    /**
     * Constructs a new MenuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMenuInfo);

    /** MenuInfo types. */
    public types: number;

    /** MenuInfo isShow. */
    public isShow: boolean;

    /** MenuInfo gangInfo. */
    public gangInfo: ICardGroupInfo[];

    /** MenuInfo chiInfo. */
    public chiInfo: ICardGroupInfo[];

    /** MenuInfo pengInfo. */
    public pengInfo?: (ICardGroupInfo|null);

    /** MenuInfo suggestTing. */
    public suggestTing: ISuggestTingData[];

    /**
     * Creates a new MenuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MenuInfo instance
     */
    public static create(properties?: IMenuInfo): MenuInfo;

    /**
     * Encodes the specified MenuInfo message. Does not implicitly {@link MenuInfo.verify|verify} messages.
     * @param m MenuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMenuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MenuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MenuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MenuInfo;
}

/** Properties of a RoundInfo. */
export interface IRoundInfo {

    /** RoundInfo fanName */
    fanName: string;

    /** RoundInfo fanCnt */
    fanCnt: number;
}

/** Represents a RoundInfo. */
export class RoundInfo implements IRoundInfo {

    /**
     * Constructs a new RoundInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoundInfo);

    /** RoundInfo fanName. */
    public fanName: string;

    /** RoundInfo fanCnt. */
    public fanCnt: number;

    /**
     * Creates a new RoundInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoundInfo instance
     */
    public static create(properties?: IRoundInfo): RoundInfo;

    /**
     * Encodes the specified RoundInfo message. Does not implicitly {@link RoundInfo.verify|verify} messages.
     * @param m RoundInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoundInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoundInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoundInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoundInfo;
}

/** Properties of a MaInfo. */
export interface IMaInfo {

    /** MaInfo card */
    card: number;

    /** MaInfo type */
    type: number;
}

/** Represents a MaInfo. */
export class MaInfo implements IMaInfo {

    /**
     * Constructs a new MaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMaInfo);

    /** MaInfo card. */
    public card: number;

    /** MaInfo type. */
    public type: number;

    /**
     * Creates a new MaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MaInfo instance
     */
    public static create(properties?: IMaInfo): MaInfo;

    /**
     * Encodes the specified MaInfo message. Does not implicitly {@link MaInfo.verify|verify} messages.
     * @param m MaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMaInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MaInfo;
}

/** Properties of a GuangDongLaiziInfo. */
export interface IGuangDongLaiziInfo {

    /** GuangDongLaiziInfo turnCard */
    turnCard?: (number|null);

    /** GuangDongLaiziInfo laiziCard */
    laiziCard: number;
}

/** Represents a GuangDongLaiziInfo. */
export class GuangDongLaiziInfo implements IGuangDongLaiziInfo {

    /**
     * Constructs a new GuangDongLaiziInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IGuangDongLaiziInfo);

    /** GuangDongLaiziInfo turnCard. */
    public turnCard: number;

    /** GuangDongLaiziInfo laiziCard. */
    public laiziCard: number;

    /**
     * Creates a new GuangDongLaiziInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuangDongLaiziInfo instance
     */
    public static create(properties?: IGuangDongLaiziInfo): GuangDongLaiziInfo;

    /**
     * Encodes the specified GuangDongLaiziInfo message. Does not implicitly {@link GuangDongLaiziInfo.verify|verify} messages.
     * @param m GuangDongLaiziInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGuangDongLaiziInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuangDongLaiziInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GuangDongLaiziInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GuangDongLaiziInfo;
}

/** Properties of a FuzhouLaiziInfo. */
export interface IFuzhouLaiziInfo {

    /** FuzhouLaiziInfo goldCard */
    goldCard: number;
}

/** Represents a FuzhouLaiziInfo. */
export class FuzhouLaiziInfo implements IFuzhouLaiziInfo {

    /**
     * Constructs a new FuzhouLaiziInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IFuzhouLaiziInfo);

    /** FuzhouLaiziInfo goldCard. */
    public goldCard: number;

    /**
     * Creates a new FuzhouLaiziInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FuzhouLaiziInfo instance
     */
    public static create(properties?: IFuzhouLaiziInfo): FuzhouLaiziInfo;

    /**
     * Encodes the specified FuzhouLaiziInfo message. Does not implicitly {@link FuzhouLaiziInfo.verify|verify} messages.
     * @param m FuzhouLaiziInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFuzhouLaiziInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FuzhouLaiziInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FuzhouLaiziInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FuzhouLaiziInfo;
}

/** Properties of a MaCardInfo. */
export interface IMaCardInfo {

    /** MaCardInfo uId */
    uId: string;

    /** MaCardInfo num */
    num: number;
}

/** Represents a MaCardInfo. */
export class MaCardInfo implements IMaCardInfo {

    /**
     * Constructs a new MaCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMaCardInfo);

    /** MaCardInfo uId. */
    public uId: string;

    /** MaCardInfo num. */
    public num: number;

    /**
     * Creates a new MaCardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MaCardInfo instance
     */
    public static create(properties?: IMaCardInfo): MaCardInfo;

    /**
     * Encodes the specified MaCardInfo message. Does not implicitly {@link MaCardInfo.verify|verify} messages.
     * @param m MaCardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMaCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MaCardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MaCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MaCardInfo;
}

/** Properties of a PlayerMaInfo. */
export interface IPlayerMaInfo {

    /** PlayerMaInfo uId */
    uId: string;

    /** PlayerMaInfo maInfos */
    maInfos?: (IMaInfo[]|null);
}

/** Represents a PlayerMaInfo. */
export class PlayerMaInfo implements IPlayerMaInfo {

    /**
     * Constructs a new PlayerMaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerMaInfo);

    /** PlayerMaInfo uId. */
    public uId: string;

    /** PlayerMaInfo maInfos. */
    public maInfos: IMaInfo[];

    /**
     * Creates a new PlayerMaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerMaInfo instance
     */
    public static create(properties?: IPlayerMaInfo): PlayerMaInfo;

    /**
     * Encodes the specified PlayerMaInfo message. Does not implicitly {@link PlayerMaInfo.verify|verify} messages.
     * @param m PlayerMaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerMaInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerMaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerMaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerMaInfo;
}

/** Properties of a ChaHuaZhuInfo. */
export interface IChaHuaZhuInfo {

    /** ChaHuaZhuInfo uId */
    uId: string;

    /** ChaHuaZhuInfo score */
    score: string;
}

/** Represents a ChaHuaZhuInfo. */
export class ChaHuaZhuInfo implements IChaHuaZhuInfo {

    /**
     * Constructs a new ChaHuaZhuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IChaHuaZhuInfo);

    /** ChaHuaZhuInfo uId. */
    public uId: string;

    /** ChaHuaZhuInfo score. */
    public score: string;

    /**
     * Creates a new ChaHuaZhuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChaHuaZhuInfo instance
     */
    public static create(properties?: IChaHuaZhuInfo): ChaHuaZhuInfo;

    /**
     * Encodes the specified ChaHuaZhuInfo message. Does not implicitly {@link ChaHuaZhuInfo.verify|verify} messages.
     * @param m ChaHuaZhuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChaHuaZhuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChaHuaZhuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChaHuaZhuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChaHuaZhuInfo;
}

/** Properties of a BeGangInfo. */
export interface IBeGangInfo {

    /** BeGangInfo id */
    id: string;

    /** BeGangInfo gold */
    gold: string;
}

/** Represents a BeGangInfo. */
export class BeGangInfo implements IBeGangInfo {

    /**
     * Constructs a new BeGangInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBeGangInfo);

    /** BeGangInfo id. */
    public id: string;

    /** BeGangInfo gold. */
    public gold: string;

    /**
     * Creates a new BeGangInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeGangInfo instance
     */
    public static create(properties?: IBeGangInfo): BeGangInfo;

    /**
     * Encodes the specified BeGangInfo message. Does not implicitly {@link BeGangInfo.verify|verify} messages.
     * @param m BeGangInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBeGangInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeGangInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BeGangInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BeGangInfo;
}

/** Properties of a BeHuInfo. */
export interface IBeHuInfo {

    /** BeHuInfo uId */
    uId: string;

    /** BeHuInfo loseGold */
    loseGold: string;
}

/** Represents a BeHuInfo. */
export class BeHuInfo implements IBeHuInfo {

    /**
     * Constructs a new BeHuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBeHuInfo);

    /** BeHuInfo uId. */
    public uId: string;

    /** BeHuInfo loseGold. */
    public loseGold: string;

    /**
     * Creates a new BeHuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeHuInfo instance
     */
    public static create(properties?: IBeHuInfo): BeHuInfo;

    /**
     * Encodes the specified BeHuInfo message. Does not implicitly {@link BeHuInfo.verify|verify} messages.
     * @param m BeHuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBeHuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeHuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BeHuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BeHuInfo;
}

/** Properties of a HuInfo. */
export interface IHuInfo {

    /** HuInfo uId */
    uId: string;

    /** HuInfo isReal */
    isReal: boolean;

    /** HuInfo getGold */
    getGold: string;
}

/** Represents a HuInfo. */
export class HuInfo implements IHuInfo {

    /**
     * Constructs a new HuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHuInfo);

    /** HuInfo uId. */
    public uId: string;

    /** HuInfo isReal. */
    public isReal: boolean;

    /** HuInfo getGold. */
    public getGold: string;

    /**
     * Creates a new HuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HuInfo instance
     */
    public static create(properties?: IHuInfo): HuInfo;

    /**
     * Encodes the specified HuInfo message. Does not implicitly {@link HuInfo.verify|verify} messages.
     * @param m HuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HuInfo;
}

/** Properties of a GapInfo. */
export interface IGapInfo {

    /** GapInfo uId */
    uId: string;

    /** GapInfo type */
    type: number;
}

/** Represents a GapInfo. */
export class GapInfo implements IGapInfo {

    /**
     * Constructs a new GapInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IGapInfo);

    /** GapInfo uId. */
    public uId: string;

    /** GapInfo type. */
    public type: number;

    /**
     * Creates a new GapInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GapInfo instance
     */
    public static create(properties?: IGapInfo): GapInfo;

    /**
     * Encodes the specified GapInfo message. Does not implicitly {@link GapInfo.verify|verify} messages.
     * @param m GapInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGapInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GapInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GapInfo;
}

/** Properties of a PlayerCardInfo. */
export interface IPlayerCardInfo {

    /** PlayerCardInfo playerId */
    playerId: string;

    /** PlayerCardInfo card */
    card?: (number[]|null);
}

/** Represents a PlayerCardInfo. */
export class PlayerCardInfo implements IPlayerCardInfo {

    /**
     * Constructs a new PlayerCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerCardInfo);

    /** PlayerCardInfo playerId. */
    public playerId: string;

    /** PlayerCardInfo card. */
    public card: number[];

    /**
     * Creates a new PlayerCardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerCardInfo instance
     */
    public static create(properties?: IPlayerCardInfo): PlayerCardInfo;

    /**
     * Encodes the specified PlayerCardInfo message. Does not implicitly {@link PlayerCardInfo.verify|verify} messages.
     * @param m PlayerCardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerCardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerCardInfo;
}

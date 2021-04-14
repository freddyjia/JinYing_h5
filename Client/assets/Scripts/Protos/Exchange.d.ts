import * as $protobuf from "protobufjs";
/** ExchangeType enum. */
export enum ExchangeType {
    BILL = 1,
    JD = 2,
    ENTITY = 3
}

/** ExchangeLimitType enum. */
export enum ExchangeLimitType {
    EXCHANGE_UNLIMIT = 1,
    EXCHANGE_DAY_LIMIT = 2
}

/** ExchangeStatus enum. */
export enum ExchangeStatus {
    SEND_ALEADY = 1,
    SEND_ING = 2,
    SEND_EXCEPTION = 3
}

/** Properties of an ExchangeData. */
export interface IExchangeData {

    /** ExchangeData exchangeId */
    exchangeId: number;

    /** ExchangeData exchangeType */
    exchangeType: ExchangeType;

    /** ExchangeData isShowStock */
    isShowStock: boolean;

    /** ExchangeData stock */
    stock: number;

    /** ExchangeData altasPath */
    altasPath: string;

    /** ExchangeData spriteName */
    spriteName: string;
}

/** Represents an ExchangeData. */
export class ExchangeData implements IExchangeData {

    /**
     * Constructs a new ExchangeData.
     * @param [p] Properties to set
     */
    constructor(p?: IExchangeData);

    /** ExchangeData exchangeId. */
    public exchangeId: number;

    /** ExchangeData exchangeType. */
    public exchangeType: ExchangeType;

    /** ExchangeData isShowStock. */
    public isShowStock: boolean;

    /** ExchangeData stock. */
    public stock: number;

    /** ExchangeData altasPath. */
    public altasPath: string;

    /** ExchangeData spriteName. */
    public spriteName: string;

    /**
     * Creates a new ExchangeData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeData instance
     */
    public static create(properties?: IExchangeData): ExchangeData;

    /**
     * Encodes the specified ExchangeData message. Does not implicitly {@link ExchangeData.verify|verify} messages.
     * @param m ExchangeData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExchangeData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExchangeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExchangeData;
}

/** Properties of an ExchangeRecord. */
export interface IExchangeRecord {

    /** ExchangeRecord id */
    id: number;

    /** ExchangeRecord desc */
    desc: string;

    /** ExchangeRecord priceDesc */
    priceDesc: string;

    /** ExchangeRecord phone */
    phone: string;

    /** ExchangeRecord address */
    address: string;

    /** ExchangeRecord status */
    status: ExchangeStatus;

    /** ExchangeRecord receiver */
    receiver: string;

    /** ExchangeRecord orderNo */
    orderNo?: (string|null);

    /** ExchangeRecord sendPlatformSuccess */
    sendPlatformSuccess?: (boolean|null);

    /** ExchangeRecord orderType */
    orderType?: (string|null);

    /** ExchangeRecord orderDate */
    orderDate?: (string|null);
}

/** Represents an ExchangeRecord. */
export class ExchangeRecord implements IExchangeRecord {

    /**
     * Constructs a new ExchangeRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IExchangeRecord);

    /** ExchangeRecord id. */
    public id: number;

    /** ExchangeRecord desc. */
    public desc: string;

    /** ExchangeRecord priceDesc. */
    public priceDesc: string;

    /** ExchangeRecord phone. */
    public phone: string;

    /** ExchangeRecord address. */
    public address: string;

    /** ExchangeRecord status. */
    public status: ExchangeStatus;

    /** ExchangeRecord receiver. */
    public receiver: string;

    /** ExchangeRecord orderNo. */
    public orderNo: string;

    /** ExchangeRecord sendPlatformSuccess. */
    public sendPlatformSuccess: boolean;

    /** ExchangeRecord orderType. */
    public orderType: string;

    /** ExchangeRecord orderDate. */
    public orderDate: string;

    /**
     * Creates a new ExchangeRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeRecord instance
     */
    public static create(properties?: IExchangeRecord): ExchangeRecord;

    /**
     * Encodes the specified ExchangeRecord message. Does not implicitly {@link ExchangeRecord.verify|verify} messages.
     * @param m ExchangeRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExchangeRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExchangeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExchangeRecord;
}

/** Properties of an ExchangeAddress. */
export interface IExchangeAddress {

    /** ExchangeAddress receiver */
    receiver: string;

    /** ExchangeAddress receiverPhone */
    receiverPhone: string;

    /** ExchangeAddress receiverAddress */
    receiverAddress: string;
}

/** Represents an ExchangeAddress. */
export class ExchangeAddress implements IExchangeAddress {

    /**
     * Constructs a new ExchangeAddress.
     * @param [p] Properties to set
     */
    constructor(p?: IExchangeAddress);

    /** ExchangeAddress receiver. */
    public receiver: string;

    /** ExchangeAddress receiverPhone. */
    public receiverPhone: string;

    /** ExchangeAddress receiverAddress. */
    public receiverAddress: string;

    /**
     * Creates a new ExchangeAddress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeAddress instance
     */
    public static create(properties?: IExchangeAddress): ExchangeAddress;

    /**
     * Encodes the specified ExchangeAddress message. Does not implicitly {@link ExchangeAddress.verify|verify} messages.
     * @param m ExchangeAddress message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExchangeAddress, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeAddress message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExchangeAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExchangeAddress;
}

/** Properties of an OpenExchangeReq. */
export interface IOpenExchangeReq {
}

/** Represents an OpenExchangeReq. */
export class OpenExchangeReq implements IOpenExchangeReq {

    /**
     * Constructs a new OpenExchangeReq.
     * @param [p] Properties to set
     */
    constructor(p?: IOpenExchangeReq);

    /**
     * Creates a new OpenExchangeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenExchangeReq instance
     */
    public static create(properties?: IOpenExchangeReq): OpenExchangeReq;

    /**
     * Encodes the specified OpenExchangeReq message. Does not implicitly {@link OpenExchangeReq.verify|verify} messages.
     * @param m OpenExchangeReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOpenExchangeReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpenExchangeReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OpenExchangeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OpenExchangeReq;
}

/** Properties of an OpenExchangeRes. */
export interface IOpenExchangeRes {

    /** OpenExchangeRes exchangeData */
    exchangeData?: (IExchangeData[]|null);

    /** OpenExchangeRes exchangeRecord */
    exchangeRecord?: (IExchangeRecord[]|null);
}

/** Represents an OpenExchangeRes. */
export class OpenExchangeRes implements IOpenExchangeRes {

    /**
     * Constructs a new OpenExchangeRes.
     * @param [p] Properties to set
     */
    constructor(p?: IOpenExchangeRes);

    /** OpenExchangeRes exchangeData. */
    public exchangeData: IExchangeData[];

    /** OpenExchangeRes exchangeRecord. */
    public exchangeRecord: IExchangeRecord[];

    /**
     * Creates a new OpenExchangeRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenExchangeRes instance
     */
    public static create(properties?: IOpenExchangeRes): OpenExchangeRes;

    /**
     * Encodes the specified OpenExchangeRes message. Does not implicitly {@link OpenExchangeRes.verify|verify} messages.
     * @param m OpenExchangeRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOpenExchangeRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpenExchangeRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OpenExchangeRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OpenExchangeRes;
}

/** Properties of an ExchangeReq. */
export interface IExchangeReq {

    /** ExchangeReq exchangeId */
    exchangeId: number;
}

/** Represents an ExchangeReq. */
export class ExchangeReq implements IExchangeReq {

    /**
     * Constructs a new ExchangeReq.
     * @param [p] Properties to set
     */
    constructor(p?: IExchangeReq);

    /** ExchangeReq exchangeId. */
    public exchangeId: number;

    /**
     * Creates a new ExchangeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeReq instance
     */
    public static create(properties?: IExchangeReq): ExchangeReq;

    /**
     * Encodes the specified ExchangeReq message. Does not implicitly {@link ExchangeReq.verify|verify} messages.
     * @param m ExchangeReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExchangeReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExchangeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExchangeReq;
}

/** Properties of an ExchangeRes. */
export interface IExchangeRes {

    /** ExchangeRes isSuccess */
    isSuccess: boolean;

    /** ExchangeRes tips */
    tips?: (string|null);

    /** ExchangeRes exchangeId */
    exchangeId?: (number|null);

    /** ExchangeRes stock */
    stock?: (number|null);
}

/** Represents an ExchangeRes. */
export class ExchangeRes implements IExchangeRes {

    /**
     * Constructs a new ExchangeRes.
     * @param [p] Properties to set
     */
    constructor(p?: IExchangeRes);

    /** ExchangeRes isSuccess. */
    public isSuccess: boolean;

    /** ExchangeRes tips. */
    public tips: string;

    /** ExchangeRes exchangeId. */
    public exchangeId: number;

    /** ExchangeRes stock. */
    public stock: number;

    /**
     * Creates a new ExchangeRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeRes instance
     */
    public static create(properties?: IExchangeRes): ExchangeRes;

    /**
     * Encodes the specified ExchangeRes message. Does not implicitly {@link ExchangeRes.verify|verify} messages.
     * @param m ExchangeRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExchangeRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExchangeRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExchangeRes;
}

/** Properties of an EditExchangeContactInfoReq. */
export interface IEditExchangeContactInfoReq {

    /** EditExchangeContactInfoReq exchangeAddress */
    exchangeAddress: IExchangeAddress;
}

/** Represents an EditExchangeContactInfoReq. */
export class EditExchangeContactInfoReq implements IEditExchangeContactInfoReq {

    /**
     * Constructs a new EditExchangeContactInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IEditExchangeContactInfoReq);

    /** EditExchangeContactInfoReq exchangeAddress. */
    public exchangeAddress: IExchangeAddress;

    /**
     * Creates a new EditExchangeContactInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EditExchangeContactInfoReq instance
     */
    public static create(properties?: IEditExchangeContactInfoReq): EditExchangeContactInfoReq;

    /**
     * Encodes the specified EditExchangeContactInfoReq message. Does not implicitly {@link EditExchangeContactInfoReq.verify|verify} messages.
     * @param m EditExchangeContactInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IEditExchangeContactInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EditExchangeContactInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns EditExchangeContactInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EditExchangeContactInfoReq;
}

/** Properties of an EditExchangeContactInfoRsp. */
export interface IEditExchangeContactInfoRsp {

    /** EditExchangeContactInfoRsp isSuccess */
    isSuccess: boolean;

    /** EditExchangeContactInfoRsp tips */
    tips?: (string|null);
}

/** Represents an EditExchangeContactInfoRsp. */
export class EditExchangeContactInfoRsp implements IEditExchangeContactInfoRsp {

    /**
     * Constructs a new EditExchangeContactInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IEditExchangeContactInfoRsp);

    /** EditExchangeContactInfoRsp isSuccess. */
    public isSuccess: boolean;

    /** EditExchangeContactInfoRsp tips. */
    public tips: string;

    /**
     * Creates a new EditExchangeContactInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EditExchangeContactInfoRsp instance
     */
    public static create(properties?: IEditExchangeContactInfoRsp): EditExchangeContactInfoRsp;

    /**
     * Encodes the specified EditExchangeContactInfoRsp message. Does not implicitly {@link EditExchangeContactInfoRsp.verify|verify} messages.
     * @param m EditExchangeContactInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IEditExchangeContactInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EditExchangeContactInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns EditExchangeContactInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EditExchangeContactInfoRsp;
}

import * as $protobuf from "protobufjs";
/** Properties of a IAPVerifyData. */
export interface IIAPVerifyData {

    /** IAPVerifyData uniqueId */
    uniqueId: string;

    /** IAPVerifyData payload */
    payload: string;

    /** IAPVerifyData userId */
    userId: (number|Long);
}

/** Represents a IAPVerifyData. */
export class IAPVerifyData implements IIAPVerifyData {

    /**
     * Constructs a new IAPVerifyData.
     * @param [p] Properties to set
     */
    constructor(p?: IIAPVerifyData);

    /** IAPVerifyData uniqueId. */
    public uniqueId: string;

    /** IAPVerifyData payload. */
    public payload: string;

    /** IAPVerifyData userId. */
    public userId: (number|Long);

    /**
     * Creates a new IAPVerifyData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IAPVerifyData instance
     */
    public static create(properties?: IIAPVerifyData): IAPVerifyData;

    /**
     * Encodes the specified IAPVerifyData message. Does not implicitly {@link IAPVerifyData.verify|verify} messages.
     * @param m IAPVerifyData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIAPVerifyData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a IAPVerifyData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IAPVerifyData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): IAPVerifyData;
}

/** Properties of a IAPVerifyResult. */
export interface IIAPVerifyResult {

    /** IAPVerifyResult uniqueId */
    uniqueId: string;

    /** IAPVerifyResult transactionId */
    transactionId: string;

    /** IAPVerifyResult itemId */
    itemId: string;

    /** IAPVerifyResult userId */
    userId: (number|Long);

    /** IAPVerifyResult orderTime */
    orderTime: (number|Long);
}

/** Represents a IAPVerifyResult. */
export class IAPVerifyResult implements IIAPVerifyResult {

    /**
     * Constructs a new IAPVerifyResult.
     * @param [p] Properties to set
     */
    constructor(p?: IIAPVerifyResult);

    /** IAPVerifyResult uniqueId. */
    public uniqueId: string;

    /** IAPVerifyResult transactionId. */
    public transactionId: string;

    /** IAPVerifyResult itemId. */
    public itemId: string;

    /** IAPVerifyResult userId. */
    public userId: (number|Long);

    /** IAPVerifyResult orderTime. */
    public orderTime: (number|Long);

    /**
     * Creates a new IAPVerifyResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IAPVerifyResult instance
     */
    public static create(properties?: IIAPVerifyResult): IAPVerifyResult;

    /**
     * Encodes the specified IAPVerifyResult message. Does not implicitly {@link IAPVerifyResult.verify|verify} messages.
     * @param m IAPVerifyResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIAPVerifyResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a IAPVerifyResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IAPVerifyResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): IAPVerifyResult;
}

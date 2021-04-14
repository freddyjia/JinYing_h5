import * as $protobuf from "protobufjs";
/** Properties of a VipInfoListPush. */
export interface IVipInfoListPush {

    /** VipInfoListPush vipLevel */
    vipLevel: number;

    /** VipInfoListPush vipExp */
    vipExp: (number|Long);

    /** VipInfoListPush nextLevelExp */
    nextLevelExp: (number|Long);

    /** VipInfoListPush interalValue */
    interalValue: (number|Long);

    /** VipInfoListPush alreadyGetRebateCount */
    alreadyGetRebateCount: (number|Long);

    /** VipInfoListPush currentRebateProportion */
    currentRebateProportion: (number|Long);

    /** VipInfoListPush nextLevelRebateProportion */
    nextLevelRebateProportion: (number|Long);
}

/** Represents a VipInfoListPush. */
export class VipInfoListPush implements IVipInfoListPush {

    /**
     * Constructs a new VipInfoListPush.
     * @param [p] Properties to set
     */
    constructor(p?: IVipInfoListPush);

    /** VipInfoListPush vipLevel. */
    public vipLevel: number;

    /** VipInfoListPush vipExp. */
    public vipExp: (number|Long);

    /** VipInfoListPush nextLevelExp. */
    public nextLevelExp: (number|Long);

    /** VipInfoListPush interalValue. */
    public interalValue: (number|Long);

    /** VipInfoListPush alreadyGetRebateCount. */
    public alreadyGetRebateCount: (number|Long);

    /** VipInfoListPush currentRebateProportion. */
    public currentRebateProportion: (number|Long);

    /** VipInfoListPush nextLevelRebateProportion. */
    public nextLevelRebateProportion: (number|Long);

    /**
     * Creates a new VipInfoListPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VipInfoListPush instance
     */
    public static create(properties?: IVipInfoListPush): VipInfoListPush;

    /**
     * Encodes the specified VipInfoListPush message. Does not implicitly {@link VipInfoListPush.verify|verify} messages.
     * @param m VipInfoListPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IVipInfoListPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VipInfoListPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns VipInfoListPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): VipInfoListPush;
}

/** Properties of an IntegralDetail. */
export interface IIntegralDetail {

    /** IntegralDetail evenTime */
    evenTime: (number|Long);

    /** IntegralDetail eventType */
    eventType: number;

    /** IntegralDetail eventIntegralChangeCount */
    eventIntegralChangeCount: number;
}

/** Represents an IntegralDetail. */
export class IntegralDetail implements IIntegralDetail {

    /**
     * Constructs a new IntegralDetail.
     * @param [p] Properties to set
     */
    constructor(p?: IIntegralDetail);

    /** IntegralDetail evenTime. */
    public evenTime: (number|Long);

    /** IntegralDetail eventType. */
    public eventType: number;

    /** IntegralDetail eventIntegralChangeCount. */
    public eventIntegralChangeCount: number;

    /**
     * Creates a new IntegralDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IntegralDetail instance
     */
    public static create(properties?: IIntegralDetail): IntegralDetail;

    /**
     * Encodes the specified IntegralDetail message. Does not implicitly {@link IntegralDetail.verify|verify} messages.
     * @param m IntegralDetail message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIntegralDetail, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IntegralDetail message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IntegralDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): IntegralDetail;
}

/** Properties of an IntegralDetailPush. */
export interface IIntegralDetailPush {

    /** IntegralDetailPush detailList */
    detailList?: (IIntegralDetail[]|null);
}

/** Represents an IntegralDetailPush. */
export class IntegralDetailPush implements IIntegralDetailPush {

    /**
     * Constructs a new IntegralDetailPush.
     * @param [p] Properties to set
     */
    constructor(p?: IIntegralDetailPush);

    /** IntegralDetailPush detailList. */
    public detailList: Array<IIntegralDetail>;

    /**
     * Creates a new IntegralDetailPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IntegralDetailPush instance
     */
    public static create(properties?: IIntegralDetailPush): IntegralDetailPush;

    /**
     * Encodes the specified IntegralDetailPush message. Does not implicitly {@link IntegralDetailPush.verify|verify} messages.
     * @param m IntegralDetailPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIntegralDetailPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IntegralDetailPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IntegralDetailPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): IntegralDetailPush;
}

/** Properties of an ExchangeIntegralRecord. */
export interface IExchangeIntegralRecord {

    /** ExchangeIntegralRecord evenTime */
    evenTime: (number|Long);

    /** ExchangeIntegralRecord gold */
    gold: number;
}

/** Represents an ExchangeIntegralRecord. */
export class ExchangeIntegralRecord implements IExchangeIntegralRecord {

    /**
     * Constructs a new ExchangeIntegralRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IExchangeIntegralRecord);

    /** ExchangeIntegralRecord evenTime. */
    public evenTime: (number|Long);

    /** ExchangeIntegralRecord gold. */
    public gold: number;

    /**
     * Creates a new ExchangeIntegralRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeIntegralRecord instance
     */
    public static create(properties?: IExchangeIntegralRecord): ExchangeIntegralRecord;

    /**
     * Encodes the specified ExchangeIntegralRecord message. Does not implicitly {@link ExchangeIntegralRecord.verify|verify} messages.
     * @param m ExchangeIntegralRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExchangeIntegralRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeIntegralRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExchangeIntegralRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExchangeIntegralRecord;
}

/** Properties of an ExchangeIntegralRecordPush. */
export interface IExchangeIntegralRecordPush {

    /** ExchangeIntegralRecordPush detailList */
    detailList?: (IExchangeIntegralRecord[]|null);
}

/** Represents an ExchangeIntegralRecordPush. */
export class ExchangeIntegralRecordPush implements IExchangeIntegralRecordPush {

    /**
     * Constructs a new ExchangeIntegralRecordPush.
     * @param [p] Properties to set
     */
    constructor(p?: IExchangeIntegralRecordPush);

    /** ExchangeIntegralRecordPush detailList. */
    public detailList: Array<IExchangeIntegralRecord>;

    /**
     * Creates a new ExchangeIntegralRecordPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeIntegralRecordPush instance
     */
    public static create(properties?: IExchangeIntegralRecordPush): ExchangeIntegralRecordPush;

    /**
     * Encodes the specified ExchangeIntegralRecordPush message. Does not implicitly {@link ExchangeIntegralRecordPush.verify|verify} messages.
     * @param m ExchangeIntegralRecordPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExchangeIntegralRecordPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeIntegralRecordPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExchangeIntegralRecordPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExchangeIntegralRecordPush;
}

/** Properties of an ExchangeIntegralGoldResult. */
export interface IExchangeIntegralGoldResult {

    /** ExchangeIntegralGoldResult isSuc */
    isSuc: boolean;

    /** ExchangeIntegralGoldResult tips */
    tips: string;

    /** ExchangeIntegralGoldResult record */
    record?: (IExchangeIntegralRecord|null);

    /** ExchangeIntegralGoldResult interalValue */
    interalValue?: (number|Long|null);

    /** ExchangeIntegralGoldResult alreadyGetRebateCount */
    alreadyGetRebateCount?: (number|Long|null);
}

/** Represents an ExchangeIntegralGoldResult. */
export class ExchangeIntegralGoldResult implements IExchangeIntegralGoldResult {

    /**
     * Constructs a new ExchangeIntegralGoldResult.
     * @param [p] Properties to set
     */
    constructor(p?: IExchangeIntegralGoldResult);

    /** ExchangeIntegralGoldResult isSuc. */
    public isSuc: boolean;

    /** ExchangeIntegralGoldResult tips. */
    public tips: string;

    /** ExchangeIntegralGoldResult record. */
    public record?: (IExchangeIntegralRecord|null);

    /** ExchangeIntegralGoldResult interalValue. */
    public interalValue: (number|Long);

    /** ExchangeIntegralGoldResult alreadyGetRebateCount. */
    public alreadyGetRebateCount: (number|Long);

    /**
     * Creates a new ExchangeIntegralGoldResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeIntegralGoldResult instance
     */
    public static create(properties?: IExchangeIntegralGoldResult): ExchangeIntegralGoldResult;

    /**
     * Encodes the specified ExchangeIntegralGoldResult message. Does not implicitly {@link ExchangeIntegralGoldResult.verify|verify} messages.
     * @param m ExchangeIntegralGoldResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExchangeIntegralGoldResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeIntegralGoldResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExchangeIntegralGoldResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExchangeIntegralGoldResult;
}

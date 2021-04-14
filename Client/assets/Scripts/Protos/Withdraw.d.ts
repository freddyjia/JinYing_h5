import * as $protobuf from "protobufjs";
/** Properties of a TakeMoneyReq. */
export interface ITakeMoneyReq {

    /** TakeMoneyReq amount */
    amount: number;

    /** TakeMoneyReq account */
    account: string;

    /** TakeMoneyReq type */
    type: number;

    /** TakeMoneyReq name */
    name: string;

    /** TakeMoneyReq bankId */
    bankId: number;

    /** TakeMoneyReq tel */
    tel: string;
}

/** Represents a TakeMoneyReq. */
export class TakeMoneyReq implements ITakeMoneyReq {

    /**
     * Constructs a new TakeMoneyReq.
     * @param [p] Properties to set
     */
    constructor(p?: ITakeMoneyReq);

    /** TakeMoneyReq amount. */
    public amount: number;

    /** TakeMoneyReq account. */
    public account: string;

    /** TakeMoneyReq type. */
    public type: number;

    /** TakeMoneyReq name. */
    public name: string;

    /** TakeMoneyReq bankId. */
    public bankId: number;

    /** TakeMoneyReq tel. */
    public tel: string;

    /**
     * Creates a new TakeMoneyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeMoneyReq instance
     */
    public static create(properties?: ITakeMoneyReq): TakeMoneyReq;

    /**
     * Encodes the specified TakeMoneyReq message. Does not implicitly {@link TakeMoneyReq.verify|verify} messages.
     * @param m TakeMoneyReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITakeMoneyReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeMoneyReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TakeMoneyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TakeMoneyReq;
}

/** Properties of a TakeMoneyRsp. */
export interface ITakeMoneyRsp {

    /** TakeMoneyRsp success */
    success: boolean;

    /** TakeMoneyRsp tip */
    tip: string;
}

/** Represents a TakeMoneyRsp. */
export class TakeMoneyRsp implements ITakeMoneyRsp {

    /**
     * Constructs a new TakeMoneyRsp.
     * @param [p] Properties to set
     */
    constructor(p?: ITakeMoneyRsp);

    /** TakeMoneyRsp success. */
    public success: boolean;

    /** TakeMoneyRsp tip. */
    public tip: string;

    /**
     * Creates a new TakeMoneyRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeMoneyRsp instance
     */
    public static create(properties?: ITakeMoneyRsp): TakeMoneyRsp;

    /**
     * Encodes the specified TakeMoneyRsp message. Does not implicitly {@link TakeMoneyRsp.verify|verify} messages.
     * @param m TakeMoneyRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITakeMoneyRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeMoneyRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TakeMoneyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TakeMoneyRsp;
}

/** Properties of a GetTakeMoneyRecordReq. */
export interface IGetTakeMoneyRecordReq {
}

/** Represents a GetTakeMoneyRecordReq. */
export class GetTakeMoneyRecordReq implements IGetTakeMoneyRecordReq {

    /**
     * Constructs a new GetTakeMoneyRecordReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetTakeMoneyRecordReq);

    /**
     * Creates a new GetTakeMoneyRecordReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetTakeMoneyRecordReq instance
     */
    public static create(properties?: IGetTakeMoneyRecordReq): GetTakeMoneyRecordReq;

    /**
     * Encodes the specified GetTakeMoneyRecordReq message. Does not implicitly {@link GetTakeMoneyRecordReq.verify|verify} messages.
     * @param m GetTakeMoneyRecordReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetTakeMoneyRecordReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetTakeMoneyRecordReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetTakeMoneyRecordReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetTakeMoneyRecordReq;
}

/** Properties of a TakeMoneyRecord. */
export interface ITakeMoneyRecord {

    /** TakeMoneyRecord timeMs */
    timeMs: string;

    /** TakeMoneyRecord money */
    money: number;

    /** TakeMoneyRecord type */
    type: number;

    /** TakeMoneyRecord account */
    account: string;

    /** TakeMoneyRecord status */
    status: number;

    /** TakeMoneyRecord resultDesc */
    resultDesc: string;

    /** TakeMoneyRecord serviceCharge */
    serviceCharge: string;

    /** TakeMoneyRecord realMoney */
    realMoney: string;
}

/** Represents a TakeMoneyRecord. */
export class TakeMoneyRecord implements ITakeMoneyRecord {

    /**
     * Constructs a new TakeMoneyRecord.
     * @param [p] Properties to set
     */
    constructor(p?: ITakeMoneyRecord);

    /** TakeMoneyRecord timeMs. */
    public timeMs: string;

    /** TakeMoneyRecord money. */
    public money: number;

    /** TakeMoneyRecord type. */
    public type: number;

    /** TakeMoneyRecord account. */
    public account: string;

    /** TakeMoneyRecord status. */
    public status: number;

    /** TakeMoneyRecord resultDesc. */
    public resultDesc: string;

    /** TakeMoneyRecord serviceCharge. */
    public serviceCharge: string;

    /** TakeMoneyRecord realMoney. */
    public realMoney: string;

    /**
     * Creates a new TakeMoneyRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeMoneyRecord instance
     */
    public static create(properties?: ITakeMoneyRecord): TakeMoneyRecord;

    /**
     * Encodes the specified TakeMoneyRecord message. Does not implicitly {@link TakeMoneyRecord.verify|verify} messages.
     * @param m TakeMoneyRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITakeMoneyRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeMoneyRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TakeMoneyRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TakeMoneyRecord;
}

/** Properties of a GetTakeMoneyRecordRsp. */
export interface IGetTakeMoneyRecordRsp {

    /** GetTakeMoneyRecordRsp takeMoneyRecord */
    takeMoneyRecord?: (ITakeMoneyRecord[]|null);
}

/** Represents a GetTakeMoneyRecordRsp. */
export class GetTakeMoneyRecordRsp implements IGetTakeMoneyRecordRsp {

    /**
     * Constructs a new GetTakeMoneyRecordRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IGetTakeMoneyRecordRsp);

    /** GetTakeMoneyRecordRsp takeMoneyRecord. */
    public takeMoneyRecord: ITakeMoneyRecord[];

    /**
     * Creates a new GetTakeMoneyRecordRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetTakeMoneyRecordRsp instance
     */
    public static create(properties?: IGetTakeMoneyRecordRsp): GetTakeMoneyRecordRsp;

    /**
     * Encodes the specified GetTakeMoneyRecordRsp message. Does not implicitly {@link GetTakeMoneyRecordRsp.verify|verify} messages.
     * @param m GetTakeMoneyRecordRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetTakeMoneyRecordRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetTakeMoneyRecordRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetTakeMoneyRecordRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetTakeMoneyRecordRsp;
}

/** Properties of a BangZhiFuBaoReq. */
export interface IBangZhiFuBaoReq {

    /** BangZhiFuBaoReq account */
    account: string;

    /** BangZhiFuBaoReq name */
    name: string;
}

/** Represents a BangZhiFuBaoReq. */
export class BangZhiFuBaoReq implements IBangZhiFuBaoReq {

    /**
     * Constructs a new BangZhiFuBaoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBangZhiFuBaoReq);

    /** BangZhiFuBaoReq account. */
    public account: string;

    /** BangZhiFuBaoReq name. */
    public name: string;

    /**
     * Creates a new BangZhiFuBaoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BangZhiFuBaoReq instance
     */
    public static create(properties?: IBangZhiFuBaoReq): BangZhiFuBaoReq;

    /**
     * Encodes the specified BangZhiFuBaoReq message. Does not implicitly {@link BangZhiFuBaoReq.verify|verify} messages.
     * @param m BangZhiFuBaoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBangZhiFuBaoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BangZhiFuBaoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BangZhiFuBaoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BangZhiFuBaoReq;
}

/** Properties of a BangZhiFuBaoRsp. */
export interface IBangZhiFuBaoRsp {

    /** BangZhiFuBaoRsp success */
    success: boolean;

    /** BangZhiFuBaoRsp tip */
    tip: string;
}

/** Represents a BangZhiFuBaoRsp. */
export class BangZhiFuBaoRsp implements IBangZhiFuBaoRsp {

    /**
     * Constructs a new BangZhiFuBaoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IBangZhiFuBaoRsp);

    /** BangZhiFuBaoRsp success. */
    public success: boolean;

    /** BangZhiFuBaoRsp tip. */
    public tip: string;

    /**
     * Creates a new BangZhiFuBaoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BangZhiFuBaoRsp instance
     */
    public static create(properties?: IBangZhiFuBaoRsp): BangZhiFuBaoRsp;

    /**
     * Encodes the specified BangZhiFuBaoRsp message. Does not implicitly {@link BangZhiFuBaoRsp.verify|verify} messages.
     * @param m BangZhiFuBaoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBangZhiFuBaoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BangZhiFuBaoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BangZhiFuBaoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BangZhiFuBaoRsp;
}

/** Properties of a GetZhiFuBaoInfoReq. */
export interface IGetZhiFuBaoInfoReq {
}

/** Represents a GetZhiFuBaoInfoReq. */
export class GetZhiFuBaoInfoReq implements IGetZhiFuBaoInfoReq {

    /**
     * Constructs a new GetZhiFuBaoInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetZhiFuBaoInfoReq);

    /**
     * Creates a new GetZhiFuBaoInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetZhiFuBaoInfoReq instance
     */
    public static create(properties?: IGetZhiFuBaoInfoReq): GetZhiFuBaoInfoReq;

    /**
     * Encodes the specified GetZhiFuBaoInfoReq message. Does not implicitly {@link GetZhiFuBaoInfoReq.verify|verify} messages.
     * @param m GetZhiFuBaoInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetZhiFuBaoInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetZhiFuBaoInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetZhiFuBaoInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetZhiFuBaoInfoReq;
}

/** Properties of a GetZhiFuBaoInfoRsp. */
export interface IGetZhiFuBaoInfoRsp {

    /** GetZhiFuBaoInfoRsp account */
    account: string;

    /** GetZhiFuBaoInfoRsp name */
    name: string;

    /** GetZhiFuBaoInfoRsp handlingFee */
    handlingFee: string;
}

/** Represents a GetZhiFuBaoInfoRsp. */
export class GetZhiFuBaoInfoRsp implements IGetZhiFuBaoInfoRsp {

    /**
     * Constructs a new GetZhiFuBaoInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IGetZhiFuBaoInfoRsp);

    /** GetZhiFuBaoInfoRsp account. */
    public account: string;

    /** GetZhiFuBaoInfoRsp name. */
    public name: string;

    /** GetZhiFuBaoInfoRsp handlingFee. */
    public handlingFee: string;

    /**
     * Creates a new GetZhiFuBaoInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetZhiFuBaoInfoRsp instance
     */
    public static create(properties?: IGetZhiFuBaoInfoRsp): GetZhiFuBaoInfoRsp;

    /**
     * Encodes the specified GetZhiFuBaoInfoRsp message. Does not implicitly {@link GetZhiFuBaoInfoRsp.verify|verify} messages.
     * @param m GetZhiFuBaoInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetZhiFuBaoInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetZhiFuBaoInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetZhiFuBaoInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetZhiFuBaoInfoRsp;
}

/** Properties of a BangBankCardReq. */
export interface IBangBankCardReq {

    /** BangBankCardReq account */
    account: string;

    /** BangBankCardReq name */
    name: string;

    /** BangBankCardReq idCard */
    idCard: string;

    /** BangBankCardReq kaihuhang */
    kaihuhang: string;

    /** BangBankCardReq kaihuAddress */
    kaihuAddress: string;

    /** BangBankCardReq bankName */
    bankName: string;

    /** BangBankCardReq tel */
    tel: string;

    /** BangBankCardReq bankId */
    bankId: number;
}

/** Represents a BangBankCardReq. */
export class BangBankCardReq implements IBangBankCardReq {

    /**
     * Constructs a new BangBankCardReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBangBankCardReq);

    /** BangBankCardReq account. */
    public account: string;

    /** BangBankCardReq name. */
    public name: string;

    /** BangBankCardReq idCard. */
    public idCard: string;

    /** BangBankCardReq kaihuhang. */
    public kaihuhang: string;

    /** BangBankCardReq kaihuAddress. */
    public kaihuAddress: string;

    /** BangBankCardReq bankName. */
    public bankName: string;

    /** BangBankCardReq tel. */
    public tel: string;

    /** BangBankCardReq bankId. */
    public bankId: number;

    /**
     * Creates a new BangBankCardReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BangBankCardReq instance
     */
    public static create(properties?: IBangBankCardReq): BangBankCardReq;

    /**
     * Encodes the specified BangBankCardReq message. Does not implicitly {@link BangBankCardReq.verify|verify} messages.
     * @param m BangBankCardReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBangBankCardReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BangBankCardReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BangBankCardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BangBankCardReq;
}

/** Properties of a BangBankCardRsp. */
export interface IBangBankCardRsp {

    /** BangBankCardRsp success */
    success: boolean;

    /** BangBankCardRsp tip */
    tip: string;
}

/** Represents a BangBankCardRsp. */
export class BangBankCardRsp implements IBangBankCardRsp {

    /**
     * Constructs a new BangBankCardRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IBangBankCardRsp);

    /** BangBankCardRsp success. */
    public success: boolean;

    /** BangBankCardRsp tip. */
    public tip: string;

    /**
     * Creates a new BangBankCardRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BangBankCardRsp instance
     */
    public static create(properties?: IBangBankCardRsp): BangBankCardRsp;

    /**
     * Encodes the specified BangBankCardRsp message. Does not implicitly {@link BangBankCardRsp.verify|verify} messages.
     * @param m BangBankCardRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBangBankCardRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BangBankCardRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BangBankCardRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BangBankCardRsp;
}

/** Properties of a GetBankCardInfoReq. */
export interface IGetBankCardInfoReq {
}

/** Represents a GetBankCardInfoReq. */
export class GetBankCardInfoReq implements IGetBankCardInfoReq {

    /**
     * Constructs a new GetBankCardInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetBankCardInfoReq);

    /**
     * Creates a new GetBankCardInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetBankCardInfoReq instance
     */
    public static create(properties?: IGetBankCardInfoReq): GetBankCardInfoReq;

    /**
     * Encodes the specified GetBankCardInfoReq message. Does not implicitly {@link GetBankCardInfoReq.verify|verify} messages.
     * @param m GetBankCardInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetBankCardInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetBankCardInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetBankCardInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetBankCardInfoReq;
}

/** Properties of a GetBankCardInfoRsp. */
export interface IGetBankCardInfoRsp {

    /** GetBankCardInfoRsp account */
    account: string;

    /** GetBankCardInfoRsp name */
    name: string;

    /** GetBankCardInfoRsp idCard */
    idCard: string;

    /** GetBankCardInfoRsp kaihuhang */
    kaihuhang: string;

    /** GetBankCardInfoRsp kaihuAddress */
    kaihuAddress: string;

    /** GetBankCardInfoRsp bankName */
    bankName: string;

    /** GetBankCardInfoRsp tel */
    tel: string;

    /** GetBankCardInfoRsp bankId */
    bankId: number;

    /** GetBankCardInfoRsp handlingFee */
    handlingFee: string;
}

/** Represents a GetBankCardInfoRsp. */
export class GetBankCardInfoRsp implements IGetBankCardInfoRsp {

    /**
     * Constructs a new GetBankCardInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IGetBankCardInfoRsp);

    /** GetBankCardInfoRsp account. */
    public account: string;

    /** GetBankCardInfoRsp name. */
    public name: string;

    /** GetBankCardInfoRsp idCard. */
    public idCard: string;

    /** GetBankCardInfoRsp kaihuhang. */
    public kaihuhang: string;

    /** GetBankCardInfoRsp kaihuAddress. */
    public kaihuAddress: string;

    /** GetBankCardInfoRsp bankName. */
    public bankName: string;

    /** GetBankCardInfoRsp tel. */
    public tel: string;

    /** GetBankCardInfoRsp bankId. */
    public bankId: number;

    /** GetBankCardInfoRsp handlingFee. */
    public handlingFee: string;

    /**
     * Creates a new GetBankCardInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetBankCardInfoRsp instance
     */
    public static create(properties?: IGetBankCardInfoRsp): GetBankCardInfoRsp;

    /**
     * Encodes the specified GetBankCardInfoRsp message. Does not implicitly {@link GetBankCardInfoRsp.verify|verify} messages.
     * @param m GetBankCardInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetBankCardInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetBankCardInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetBankCardInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetBankCardInfoRsp;
}

/** Properties of a BankInfoPro. */
export interface IBankInfoPro {

    /** BankInfoPro bankId */
    bankId: number;

    /** BankInfoPro bankName */
    bankName: string;
}

/** Represents a BankInfoPro. */
export class BankInfoPro implements IBankInfoPro {

    /**
     * Constructs a new BankInfoPro.
     * @param [p] Properties to set
     */
    constructor(p?: IBankInfoPro);

    /** BankInfoPro bankId. */
    public bankId: number;

    /** BankInfoPro bankName. */
    public bankName: string;

    /**
     * Creates a new BankInfoPro instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BankInfoPro instance
     */
    public static create(properties?: IBankInfoPro): BankInfoPro;

    /**
     * Encodes the specified BankInfoPro message. Does not implicitly {@link BankInfoPro.verify|verify} messages.
     * @param m BankInfoPro message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBankInfoPro, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BankInfoPro message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BankInfoPro
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BankInfoPro;
}

/** Properties of a GetCanUseBankInfoReq. */
export interface IGetCanUseBankInfoReq {
}

/** Represents a GetCanUseBankInfoReq. */
export class GetCanUseBankInfoReq implements IGetCanUseBankInfoReq {

    /**
     * Constructs a new GetCanUseBankInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetCanUseBankInfoReq);

    /**
     * Creates a new GetCanUseBankInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetCanUseBankInfoReq instance
     */
    public static create(properties?: IGetCanUseBankInfoReq): GetCanUseBankInfoReq;

    /**
     * Encodes the specified GetCanUseBankInfoReq message. Does not implicitly {@link GetCanUseBankInfoReq.verify|verify} messages.
     * @param m GetCanUseBankInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetCanUseBankInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetCanUseBankInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetCanUseBankInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetCanUseBankInfoReq;
}

/** Properties of a GetCanUseBankInfoRsp. */
export interface IGetCanUseBankInfoRsp {

    /** GetCanUseBankInfoRsp bankInfos */
    bankInfos?: (IBankInfoPro[]|null);
}

/** Represents a GetCanUseBankInfoRsp. */
export class GetCanUseBankInfoRsp implements IGetCanUseBankInfoRsp {

    /**
     * Constructs a new GetCanUseBankInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IGetCanUseBankInfoRsp);

    /** GetCanUseBankInfoRsp bankInfos. */
    public bankInfos: IBankInfoPro[];

    /**
     * Creates a new GetCanUseBankInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetCanUseBankInfoRsp instance
     */
    public static create(properties?: IGetCanUseBankInfoRsp): GetCanUseBankInfoRsp;

    /**
     * Encodes the specified GetCanUseBankInfoRsp message. Does not implicitly {@link GetCanUseBankInfoRsp.verify|verify} messages.
     * @param m GetCanUseBankInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetCanUseBankInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetCanUseBankInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetCanUseBankInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetCanUseBankInfoRsp;
}

/** Properties of a GetWithdrawPassageReq. */
export interface IGetWithdrawPassageReq {
}

/** Represents a GetWithdrawPassageReq. */
export class GetWithdrawPassageReq implements IGetWithdrawPassageReq {

    /**
     * Constructs a new GetWithdrawPassageReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetWithdrawPassageReq);

    /**
     * Creates a new GetWithdrawPassageReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetWithdrawPassageReq instance
     */
    public static create(properties?: IGetWithdrawPassageReq): GetWithdrawPassageReq;

    /**
     * Encodes the specified GetWithdrawPassageReq message. Does not implicitly {@link GetWithdrawPassageReq.verify|verify} messages.
     * @param m GetWithdrawPassageReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetWithdrawPassageReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetWithdrawPassageReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetWithdrawPassageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetWithdrawPassageReq;
}

/** Properties of a GetWithdrawPassageRsp. */
export interface IGetWithdrawPassageRsp {

    /** GetWithdrawPassageRsp hasAli */
    hasAli: boolean;

    /** GetWithdrawPassageRsp hasBank */
    hasBank: boolean;
}

/** Represents a GetWithdrawPassageRsp. */
export class GetWithdrawPassageRsp implements IGetWithdrawPassageRsp {

    /**
     * Constructs a new GetWithdrawPassageRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IGetWithdrawPassageRsp);

    /** GetWithdrawPassageRsp hasAli. */
    public hasAli: boolean;

    /** GetWithdrawPassageRsp hasBank. */
    public hasBank: boolean;

    /**
     * Creates a new GetWithdrawPassageRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetWithdrawPassageRsp instance
     */
    public static create(properties?: IGetWithdrawPassageRsp): GetWithdrawPassageRsp;

    /**
     * Encodes the specified GetWithdrawPassageRsp message. Does not implicitly {@link GetWithdrawPassageRsp.verify|verify} messages.
     * @param m GetWithdrawPassageRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetWithdrawPassageRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetWithdrawPassageRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetWithdrawPassageRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetWithdrawPassageRsp;
}

/** Properties of a withDrawCreateOrder. */
export interface IwithDrawCreateOrder {

    /** withDrawCreateOrder playerid */
    playerid: string;

    /** withDrawCreateOrder account */
    account: string;

    /** withDrawCreateOrder name */
    name: string;

    /** withDrawCreateOrder type */
    type: number;

    /** withDrawCreateOrder bankid */
    bankid: number;

    /** withDrawCreateOrder tel */
    tel: string;

    /** withDrawCreateOrder takeMoney */
    takeMoney: number;

    /** withDrawCreateOrder host */
    host: string;

    /** withDrawCreateOrder port */
    port: number;

    /** withDrawCreateOrder shenhe */
    shenhe: boolean;

    /** withDrawCreateOrder shouxufei */
    shouxufei: number;

    /** withDrawCreateOrder note */
    note: string;
}

/** Represents a withDrawCreateOrder. */
export class withDrawCreateOrder implements IwithDrawCreateOrder {

    /**
     * Constructs a new withDrawCreateOrder.
     * @param [p] Properties to set
     */
    constructor(p?: IwithDrawCreateOrder);

    /** withDrawCreateOrder playerid. */
    public playerid: string;

    /** withDrawCreateOrder account. */
    public account: string;

    /** withDrawCreateOrder name. */
    public name: string;

    /** withDrawCreateOrder type. */
    public type: number;

    /** withDrawCreateOrder bankid. */
    public bankid: number;

    /** withDrawCreateOrder tel. */
    public tel: string;

    /** withDrawCreateOrder takeMoney. */
    public takeMoney: number;

    /** withDrawCreateOrder host. */
    public host: string;

    /** withDrawCreateOrder port. */
    public port: number;

    /** withDrawCreateOrder shenhe. */
    public shenhe: boolean;

    /** withDrawCreateOrder shouxufei. */
    public shouxufei: number;

    /** withDrawCreateOrder note. */
    public note: string;

    /**
     * Creates a new withDrawCreateOrder instance using the specified properties.
     * @param [properties] Properties to set
     * @returns withDrawCreateOrder instance
     */
    public static create(properties?: IwithDrawCreateOrder): withDrawCreateOrder;

    /**
     * Encodes the specified withDrawCreateOrder message. Does not implicitly {@link withDrawCreateOrder.verify|verify} messages.
     * @param m withDrawCreateOrder message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IwithDrawCreateOrder, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a withDrawCreateOrder message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns withDrawCreateOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): withDrawCreateOrder;
}

/** Properties of a withDrawOrder. */
export interface IwithDrawOrder {

    /** withDrawOrder playerid */
    playerid: string;

    /** withDrawOrder orderID */
    orderID: string;

    /** withDrawOrder backGold */
    backGold: boolean;

    /** withDrawOrder amount */
    amount: number;

    /** withDrawOrder email */
    email: boolean;

    /** withDrawOrder content */
    content?: (string|null);

    /** withDrawOrder photoUrl */
    photoUrl?: (string|null);

    /** withDrawOrder sendPlayerName */
    sendPlayerName?: (string|null);

    /** withDrawOrder title */
    title?: (string|null);

    /** withDrawOrder toPlayerId */
    toPlayerId?: (string|null);
}

/** Represents a withDrawOrder. */
export class withDrawOrder implements IwithDrawOrder {

    /**
     * Constructs a new withDrawOrder.
     * @param [p] Properties to set
     */
    constructor(p?: IwithDrawOrder);

    /** withDrawOrder playerid. */
    public playerid: string;

    /** withDrawOrder orderID. */
    public orderID: string;

    /** withDrawOrder backGold. */
    public backGold: boolean;

    /** withDrawOrder amount. */
    public amount: number;

    /** withDrawOrder email. */
    public email: boolean;

    /** withDrawOrder content. */
    public content: string;

    /** withDrawOrder photoUrl. */
    public photoUrl: string;

    /** withDrawOrder sendPlayerName. */
    public sendPlayerName: string;

    /** withDrawOrder title. */
    public title: string;

    /** withDrawOrder toPlayerId. */
    public toPlayerId: string;

    /**
     * Creates a new withDrawOrder instance using the specified properties.
     * @param [properties] Properties to set
     * @returns withDrawOrder instance
     */
    public static create(properties?: IwithDrawOrder): withDrawOrder;

    /**
     * Encodes the specified withDrawOrder message. Does not implicitly {@link withDrawOrder.verify|verify} messages.
     * @param m withDrawOrder message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IwithDrawOrder, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a withDrawOrder message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns withDrawOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): withDrawOrder;
}

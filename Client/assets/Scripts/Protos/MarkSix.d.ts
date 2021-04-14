import * as $protobuf from "protobufjs";
/** MarkSixType enum. */
export enum MarkSixType {
    TeMa = 1,
    TeMa_LIANGMIAN = 2,
    SeBo = 3,
    ZhengMa = 4,
    ZongHe = 5,
    ZhengMa16 = 6,
    ZhengMaTe = 7,
    LianMa = 8,
    TeXiao = 9,
    TeWuXing = 10,
    LianBuZhong = 11,
    ShengXiaoLianZhong = 12,
    LianWeiPeng = 13
}

/** Properties of a LotteryItem. */
export interface ILotteryItem {

    /** LotteryItem order */
    order: number;

    /** LotteryItem number */
    number: number;

    /** LotteryItem shengxiao */
    shengxiao: string;

    /** LotteryItem isTeMa */
    isTeMa: boolean;

    /** LotteryItem wuxing */
    wuxing?: (string|null);
}

/** Represents a LotteryItem. */
export class LotteryItem implements ILotteryItem {

    /**
     * Constructs a new LotteryItem.
     * @param [p] Properties to set
     */
    constructor(p?: ILotteryItem);

    /** LotteryItem order. */
    public order: number;

    /** LotteryItem number. */
    public number: number;

    /** LotteryItem shengxiao. */
    public shengxiao: string;

    /** LotteryItem isTeMa. */
    public isTeMa: boolean;

    /** LotteryItem wuxing. */
    public wuxing: string;

    /**
     * Creates a new LotteryItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LotteryItem instance
     */
    public static create(properties?: ILotteryItem): LotteryItem;

    /**
     * Encodes the specified LotteryItem message. Does not implicitly {@link LotteryItem.verify|verify} messages.
     * @param m LotteryItem message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILotteryItem, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LotteryItem message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LotteryItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LotteryItem;
}

/** Properties of a LotteryRecord. */
export interface ILotteryRecord {

    /** LotteryRecord periodNo */
    periodNo: string;

    /** LotteryRecord item */
    item?: (ILotteryItem[]|null);
}

/** Represents a LotteryRecord. */
export class LotteryRecord implements ILotteryRecord {

    /**
     * Constructs a new LotteryRecord.
     * @param [p] Properties to set
     */
    constructor(p?: ILotteryRecord);

    /** LotteryRecord periodNo. */
    public periodNo: string;

    /** LotteryRecord item. */
    public item: ILotteryItem[];

    /**
     * Creates a new LotteryRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LotteryRecord instance
     */
    public static create(properties?: ILotteryRecord): LotteryRecord;

    /**
     * Encodes the specified LotteryRecord message. Does not implicitly {@link LotteryRecord.verify|verify} messages.
     * @param m LotteryRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILotteryRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LotteryRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LotteryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LotteryRecord;
}

/** Properties of a RequestJoinRoom. */
export interface IRequestJoinRoom {
}

/** Represents a RequestJoinRoom. */
export class RequestJoinRoom implements IRequestJoinRoom {

    /**
     * Constructs a new RequestJoinRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IRequestJoinRoom);

    /**
     * Creates a new RequestJoinRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestJoinRoom instance
     */
    public static create(properties?: IRequestJoinRoom): RequestJoinRoom;

    /**
     * Encodes the specified RequestJoinRoom message. Does not implicitly {@link RequestJoinRoom.verify|verify} messages.
     * @param m RequestJoinRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRequestJoinRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestJoinRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RequestJoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RequestJoinRoom;
}

/** Properties of a SuccessBetInfo. */
export interface ISuccessBetInfo {

    /** SuccessBetInfo markSixType */
    markSixType: MarkSixType;

    /** SuccessBetInfo betMoney */
    betMoney: number;

    /** SuccessBetInfo num */
    num?: (number[]|null);

    /** SuccessBetInfo betIndex */
    betIndex?: (number|null);

    /** SuccessBetInfo subType */
    subType?: (number|null);
}

/** Represents a SuccessBetInfo. */
export class SuccessBetInfo implements ISuccessBetInfo {

    /**
     * Constructs a new SuccessBetInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISuccessBetInfo);

    /** SuccessBetInfo markSixType. */
    public markSixType: MarkSixType;

    /** SuccessBetInfo betMoney. */
    public betMoney: number;

    /** SuccessBetInfo num. */
    public num: number[];

    /** SuccessBetInfo betIndex. */
    public betIndex: number;

    /** SuccessBetInfo subType. */
    public subType: number;

    /**
     * Creates a new SuccessBetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SuccessBetInfo instance
     */
    public static create(properties?: ISuccessBetInfo): SuccessBetInfo;

    /**
     * Encodes the specified SuccessBetInfo message. Does not implicitly {@link SuccessBetInfo.verify|verify} messages.
     * @param m SuccessBetInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISuccessBetInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SuccessBetInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SuccessBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SuccessBetInfo;
}

/** Properties of a BetLimitInfo. */
export interface IBetLimitInfo {

    /** BetLimitInfo markSixType */
    markSixType: MarkSixType;

    /** BetLimitInfo typeLimit */
    typeLimit: string;
}

/** Represents a BetLimitInfo. */
export class BetLimitInfo implements IBetLimitInfo {

    /**
     * Constructs a new BetLimitInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBetLimitInfo);

    /** BetLimitInfo markSixType. */
    public markSixType: MarkSixType;

    /** BetLimitInfo typeLimit. */
    public typeLimit: string;

    /**
     * Creates a new BetLimitInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetLimitInfo instance
     */
    public static create(properties?: IBetLimitInfo): BetLimitInfo;

    /**
     * Encodes the specified BetLimitInfo message. Does not implicitly {@link BetLimitInfo.verify|verify} messages.
     * @param m BetLimitInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetLimitInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetLimitInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetLimitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetLimitInfo;
}

/** Properties of a ResponseJoinRoom. */
export interface IResponseJoinRoom {

    /** ResponseJoinRoom record */
    record: ILotteryRecord;

    /** ResponseJoinRoom nextPreiodNo */
    nextPreiodNo: string;

    /** ResponseJoinRoom stopBetTime */
    stopBetTime?: (string|null);

    /** ResponseJoinRoom lotteryTime */
    lotteryTime?: (string|null);

    /** ResponseJoinRoom refreshTime */
    refreshTime: string;

    /** ResponseJoinRoom status */
    status: number;

    /** ResponseJoinRoom successBetInfo */
    successBetInfo?: (ISuccessBetInfo[]|null);

    /** ResponseJoinRoom baseLimit */
    baseLimit: string;

    /** ResponseJoinRoom betLimitInfo */
    betLimitInfo?: (IBetLimitInfo[]|null);

    /** ResponseJoinRoom betLimit */
    betLimit: string;

    /** ResponseJoinRoom betMinLimit */
    betMinLimit: string;
}

/** Represents a ResponseJoinRoom. */
export class ResponseJoinRoom implements IResponseJoinRoom {

    /**
     * Constructs a new ResponseJoinRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IResponseJoinRoom);

    /** ResponseJoinRoom record. */
    public record: ILotteryRecord;

    /** ResponseJoinRoom nextPreiodNo. */
    public nextPreiodNo: string;

    /** ResponseJoinRoom stopBetTime. */
    public stopBetTime: string;

    /** ResponseJoinRoom lotteryTime. */
    public lotteryTime: string;

    /** ResponseJoinRoom refreshTime. */
    public refreshTime: string;

    /** ResponseJoinRoom status. */
    public status: number;

    /** ResponseJoinRoom successBetInfo. */
    public successBetInfo: ISuccessBetInfo[];

    /** ResponseJoinRoom baseLimit. */
    public baseLimit: string;

    /** ResponseJoinRoom betLimitInfo. */
    public betLimitInfo: IBetLimitInfo[];

    /** ResponseJoinRoom betLimit. */
    public betLimit: string;

    /** ResponseJoinRoom betMinLimit. */
    public betMinLimit: string;

    /**
     * Creates a new ResponseJoinRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseJoinRoom instance
     */
    public static create(properties?: IResponseJoinRoom): ResponseJoinRoom;

    /**
     * Encodes the specified ResponseJoinRoom message. Does not implicitly {@link ResponseJoinRoom.verify|verify} messages.
     * @param m ResponseJoinRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IResponseJoinRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseJoinRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ResponseJoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ResponseJoinRoom;
}

/** Properties of a RequestAllOdds. */
export interface IRequestAllOdds {
}

/** Represents a RequestAllOdds. */
export class RequestAllOdds implements IRequestAllOdds {

    /**
     * Constructs a new RequestAllOdds.
     * @param [p] Properties to set
     */
    constructor(p?: IRequestAllOdds);

    /**
     * Creates a new RequestAllOdds instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestAllOdds instance
     */
    public static create(properties?: IRequestAllOdds): RequestAllOdds;

    /**
     * Encodes the specified RequestAllOdds message. Does not implicitly {@link RequestAllOdds.verify|verify} messages.
     * @param m RequestAllOdds message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRequestAllOdds, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestAllOdds message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RequestAllOdds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RequestAllOdds;
}

/** Properties of an OddsInfo. */
export interface IOddsInfo {

    /** OddsInfo markSixType */
    markSixType: MarkSixType;

    /** OddsInfo bo */
    bo?: (number|null);

    /** OddsInfo temaliangmiantype */
    temaliangmiantype?: (number|null);

    /** OddsInfo sebotype */
    sebotype?: (number|null);

    /** OddsInfo zonghetype */
    zonghetype?: (number|null);

    /** OddsInfo temawuxingtype */
    temawuxingtype?: (number|null);

    /** OddsInfo zhengma1to6 */
    zhengma1to6?: (number|null);

    /** OddsInfo zhengma1to6type */
    zhengma1to6type?: (number|null);

    /** OddsInfo lianmatype */
    lianmatype?: (number|null);

    /** OddsInfo zhengmate1to6 */
    zhengmate1to6?: (number|null);

    /** OddsInfo texiaotype */
    texiaotype?: (number|null);

    /** OddsInfo odds */
    odds: number;

    /** OddsInfo lianbuzhongtype */
    lianbuzhongtype?: (number|null);

    /** OddsInfo shengxiaolianzhongtype */
    shengxiaolianzhongtype?: (number|null);

    /** OddsInfo lianweipengtype */
    lianweipengtype?: (number|null);

    /** OddsInfo weitype */
    weitype?: (number|null);
}

/** Represents an OddsInfo. */
export class OddsInfo implements IOddsInfo {

    /**
     * Constructs a new OddsInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IOddsInfo);

    /** OddsInfo markSixType. */
    public markSixType: MarkSixType;

    /** OddsInfo bo. */
    public bo: number;

    /** OddsInfo temaliangmiantype. */
    public temaliangmiantype: number;

    /** OddsInfo sebotype. */
    public sebotype: number;

    /** OddsInfo zonghetype. */
    public zonghetype: number;

    /** OddsInfo temawuxingtype. */
    public temawuxingtype: number;

    /** OddsInfo zhengma1to6. */
    public zhengma1to6: number;

    /** OddsInfo zhengma1to6type. */
    public zhengma1to6type: number;

    /** OddsInfo lianmatype. */
    public lianmatype: number;

    /** OddsInfo zhengmate1to6. */
    public zhengmate1to6: number;

    /** OddsInfo texiaotype. */
    public texiaotype: number;

    /** OddsInfo odds. */
    public odds: number;

    /** OddsInfo lianbuzhongtype. */
    public lianbuzhongtype: number;

    /** OddsInfo shengxiaolianzhongtype. */
    public shengxiaolianzhongtype: number;

    /** OddsInfo lianweipengtype. */
    public lianweipengtype: number;

    /** OddsInfo weitype. */
    public weitype: number;

    /**
     * Creates a new OddsInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OddsInfo instance
     */
    public static create(properties?: IOddsInfo): OddsInfo;

    /**
     * Encodes the specified OddsInfo message. Does not implicitly {@link OddsInfo.verify|verify} messages.
     * @param m OddsInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOddsInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OddsInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OddsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OddsInfo;
}

/** Properties of a WuXingInfo. */
export interface IWuXingInfo {

    /** WuXingInfo wuxing */
    wuxing?: (number|null);

    /** WuXingInfo num */
    num?: (number[]|null);
}

/** Represents a WuXingInfo. */
export class WuXingInfo implements IWuXingInfo {

    /**
     * Constructs a new WuXingInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IWuXingInfo);

    /** WuXingInfo wuxing. */
    public wuxing: number;

    /** WuXingInfo num. */
    public num: number[];

    /**
     * Creates a new WuXingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WuXingInfo instance
     */
    public static create(properties?: IWuXingInfo): WuXingInfo;

    /**
     * Encodes the specified WuXingInfo message. Does not implicitly {@link WuXingInfo.verify|verify} messages.
     * @param m WuXingInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IWuXingInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WuXingInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns WuXingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WuXingInfo;
}

/** Properties of a ShengXiaoInfo. */
export interface IShengXiaoInfo {

    /** ShengXiaoInfo shengxiao */
    shengxiao?: (number|null);

    /** ShengXiaoInfo num */
    num?: (number[]|null);
}

/** Represents a ShengXiaoInfo. */
export class ShengXiaoInfo implements IShengXiaoInfo {

    /**
     * Constructs a new ShengXiaoInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IShengXiaoInfo);

    /** ShengXiaoInfo shengxiao. */
    public shengxiao: number;

    /** ShengXiaoInfo num. */
    public num: number[];

    /**
     * Creates a new ShengXiaoInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShengXiaoInfo instance
     */
    public static create(properties?: IShengXiaoInfo): ShengXiaoInfo;

    /**
     * Encodes the specified ShengXiaoInfo message. Does not implicitly {@link ShengXiaoInfo.verify|verify} messages.
     * @param m ShengXiaoInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IShengXiaoInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShengXiaoInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ShengXiaoInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ShengXiaoInfo;
}

/** Properties of a ResponseAllOdds. */
export interface IResponseAllOdds {

    /** ResponseAllOdds refreshTime */
    refreshTime: string;

    /** ResponseAllOdds temaOdds */
    temaOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds temaliangmianOdds */
    temaliangmianOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds seboOdds */
    seboOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds zhengmaOdds */
    zhengmaOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds zongheOdds */
    zongheOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds zhengma16Odds */
    zhengma16Odds?: (IOddsInfo[]|null);

    /** ResponseAllOdds zhengmateOdds */
    zhengmateOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds lianmaOdds */
    lianmaOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds texiaoOdds */
    texiaoOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds wuxingOdds */
    wuxingOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds wuxingInfo */
    wuxingInfo?: (IWuXingInfo[]|null);

    /** ResponseAllOdds shengxiaoInfo */
    shengxiaoInfo?: (IShengXiaoInfo[]|null);

    /** ResponseAllOdds lianbuzhongOdds */
    lianbuzhongOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds shengxiaolianzhongOdds */
    shengxiaolianzhongOdds?: (IOddsInfo[]|null);

    /** ResponseAllOdds lianweipengOdds */
    lianweipengOdds?: (IOddsInfo[]|null);
}

/** Represents a ResponseAllOdds. */
export class ResponseAllOdds implements IResponseAllOdds {

    /**
     * Constructs a new ResponseAllOdds.
     * @param [p] Properties to set
     */
    constructor(p?: IResponseAllOdds);

    /** ResponseAllOdds refreshTime. */
    public refreshTime: string;

    /** ResponseAllOdds temaOdds. */
    public temaOdds: IOddsInfo[];

    /** ResponseAllOdds temaliangmianOdds. */
    public temaliangmianOdds: IOddsInfo[];

    /** ResponseAllOdds seboOdds. */
    public seboOdds: IOddsInfo[];

    /** ResponseAllOdds zhengmaOdds. */
    public zhengmaOdds: IOddsInfo[];

    /** ResponseAllOdds zongheOdds. */
    public zongheOdds: IOddsInfo[];

    /** ResponseAllOdds zhengma16Odds. */
    public zhengma16Odds: IOddsInfo[];

    /** ResponseAllOdds zhengmateOdds. */
    public zhengmateOdds: IOddsInfo[];

    /** ResponseAllOdds lianmaOdds. */
    public lianmaOdds: IOddsInfo[];

    /** ResponseAllOdds texiaoOdds. */
    public texiaoOdds: IOddsInfo[];

    /** ResponseAllOdds wuxingOdds. */
    public wuxingOdds: IOddsInfo[];

    /** ResponseAllOdds wuxingInfo. */
    public wuxingInfo: IWuXingInfo[];

    /** ResponseAllOdds shengxiaoInfo. */
    public shengxiaoInfo: IShengXiaoInfo[];

    /** ResponseAllOdds lianbuzhongOdds. */
    public lianbuzhongOdds: IOddsInfo[];

    /** ResponseAllOdds shengxiaolianzhongOdds. */
    public shengxiaolianzhongOdds: IOddsInfo[];

    /** ResponseAllOdds lianweipengOdds. */
    public lianweipengOdds: IOddsInfo[];

    /**
     * Creates a new ResponseAllOdds instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseAllOdds instance
     */
    public static create(properties?: IResponseAllOdds): ResponseAllOdds;

    /**
     * Encodes the specified ResponseAllOdds message. Does not implicitly {@link ResponseAllOdds.verify|verify} messages.
     * @param m ResponseAllOdds message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IResponseAllOdds, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseAllOdds message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ResponseAllOdds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ResponseAllOdds;
}

/** Properties of a PingRes. */
export interface IPingRes {

    /** PingRes currentTime */
    currentTime: string;
}

/** Represents a PingRes. */
export class PingRes implements IPingRes {

    /**
     * Constructs a new PingRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPingRes);

    /** PingRes currentTime. */
    public currentTime: string;

    /**
     * Creates a new PingRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PingRes instance
     */
    public static create(properties?: IPingRes): PingRes;

    /**
     * Encodes the specified PingRes message. Does not implicitly {@link PingRes.verify|verify} messages.
     * @param m PingRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPingRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PingRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PingRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PingRes;
}

/** Properties of a RequstMarkSixRecord. */
export interface IRequstMarkSixRecord {
}

/** Represents a RequstMarkSixRecord. */
export class RequstMarkSixRecord implements IRequstMarkSixRecord {

    /**
     * Constructs a new RequstMarkSixRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IRequstMarkSixRecord);

    /**
     * Creates a new RequstMarkSixRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequstMarkSixRecord instance
     */
    public static create(properties?: IRequstMarkSixRecord): RequstMarkSixRecord;

    /**
     * Encodes the specified RequstMarkSixRecord message. Does not implicitly {@link RequstMarkSixRecord.verify|verify} messages.
     * @param m RequstMarkSixRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRequstMarkSixRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequstMarkSixRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RequstMarkSixRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RequstMarkSixRecord;
}

/** Properties of a ResponseMarkSixRecord. */
export interface IResponseMarkSixRecord {

    /** ResponseMarkSixRecord record */
    record?: (ILotteryRecord[]|null);
}

/** Represents a ResponseMarkSixRecord. */
export class ResponseMarkSixRecord implements IResponseMarkSixRecord {

    /**
     * Constructs a new ResponseMarkSixRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IResponseMarkSixRecord);

    /** ResponseMarkSixRecord record. */
    public record: ILotteryRecord[];

    /**
     * Creates a new ResponseMarkSixRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseMarkSixRecord instance
     */
    public static create(properties?: IResponseMarkSixRecord): ResponseMarkSixRecord;

    /**
     * Encodes the specified ResponseMarkSixRecord message. Does not implicitly {@link ResponseMarkSixRecord.verify|verify} messages.
     * @param m ResponseMarkSixRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IResponseMarkSixRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseMarkSixRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ResponseMarkSixRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ResponseMarkSixRecord;
}

/** Properties of a RequestMarkSixBetRecord. */
export interface IRequestMarkSixBetRecord {

    /** RequestMarkSixBetRecord periodNo */
    periodNo?: (string|null);
}

/** Represents a RequestMarkSixBetRecord. */
export class RequestMarkSixBetRecord implements IRequestMarkSixBetRecord {

    /**
     * Constructs a new RequestMarkSixBetRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IRequestMarkSixBetRecord);

    /** RequestMarkSixBetRecord periodNo. */
    public periodNo: string;

    /**
     * Creates a new RequestMarkSixBetRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestMarkSixBetRecord instance
     */
    public static create(properties?: IRequestMarkSixBetRecord): RequestMarkSixBetRecord;

    /**
     * Encodes the specified RequestMarkSixBetRecord message. Does not implicitly {@link RequestMarkSixBetRecord.verify|verify} messages.
     * @param m RequestMarkSixBetRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRequestMarkSixBetRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestMarkSixBetRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RequestMarkSixBetRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RequestMarkSixBetRecord;
}

/** Properties of an UnSettlementBetRecord. */
export interface IUnSettlementBetRecord {

    /** UnSettlementBetRecord periodNo */
    periodNo: string;

    /** UnSettlementBetRecord desc */
    desc: string;

    /** UnSettlementBetRecord odds */
    odds: string;

    /** UnSettlementBetRecord betMoney */
    betMoney: string;

    /** UnSettlementBetRecord wouldWinMoney */
    wouldWinMoney: string;
}

/** Represents an UnSettlementBetRecord. */
export class UnSettlementBetRecord implements IUnSettlementBetRecord {

    /**
     * Constructs a new UnSettlementBetRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IUnSettlementBetRecord);

    /** UnSettlementBetRecord periodNo. */
    public periodNo: string;

    /** UnSettlementBetRecord desc. */
    public desc: string;

    /** UnSettlementBetRecord odds. */
    public odds: string;

    /** UnSettlementBetRecord betMoney. */
    public betMoney: string;

    /** UnSettlementBetRecord wouldWinMoney. */
    public wouldWinMoney: string;

    /**
     * Creates a new UnSettlementBetRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnSettlementBetRecord instance
     */
    public static create(properties?: IUnSettlementBetRecord): UnSettlementBetRecord;

    /**
     * Encodes the specified UnSettlementBetRecord message. Does not implicitly {@link UnSettlementBetRecord.verify|verify} messages.
     * @param m UnSettlementBetRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUnSettlementBetRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnSettlementBetRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UnSettlementBetRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UnSettlementBetRecord;
}

/** Properties of a SettlementMarkSixRecord. */
export interface ISettlementMarkSixRecord {

    /** SettlementMarkSixRecord periodNo */
    periodNo: string;

    /** SettlementMarkSixRecord desc */
    desc: string;

    /** SettlementMarkSixRecord odds */
    odds: string;

    /** SettlementMarkSixRecord betMoney */
    betMoney: string;

    /** SettlementMarkSixRecord winResult */
    winResult: string;
}

/** Represents a SettlementMarkSixRecord. */
export class SettlementMarkSixRecord implements ISettlementMarkSixRecord {

    /**
     * Constructs a new SettlementMarkSixRecord.
     * @param [p] Properties to set
     */
    constructor(p?: ISettlementMarkSixRecord);

    /** SettlementMarkSixRecord periodNo. */
    public periodNo: string;

    /** SettlementMarkSixRecord desc. */
    public desc: string;

    /** SettlementMarkSixRecord odds. */
    public odds: string;

    /** SettlementMarkSixRecord betMoney. */
    public betMoney: string;

    /** SettlementMarkSixRecord winResult. */
    public winResult: string;

    /**
     * Creates a new SettlementMarkSixRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SettlementMarkSixRecord instance
     */
    public static create(properties?: ISettlementMarkSixRecord): SettlementMarkSixRecord;

    /**
     * Encodes the specified SettlementMarkSixRecord message. Does not implicitly {@link SettlementMarkSixRecord.verify|verify} messages.
     * @param m SettlementMarkSixRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISettlementMarkSixRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SettlementMarkSixRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SettlementMarkSixRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SettlementMarkSixRecord;
}

/** Properties of a ResponseMarkSixBetRecord. */
export interface IResponseMarkSixBetRecord {

    /** ResponseMarkSixBetRecord isSuccess */
    isSuccess: boolean;

    /** ResponseMarkSixBetRecord tips */
    tips?: (string|null);

    /** ResponseMarkSixBetRecord unsettlement */
    unsettlement?: (IUnSettlementBetRecord[]|null);

    /** ResponseMarkSixBetRecord settlement */
    settlement?: (ISettlementMarkSixRecord[]|null);

    /** ResponseMarkSixBetRecord periodNo */
    periodNo?: (string[]|null);
}

/** Represents a ResponseMarkSixBetRecord. */
export class ResponseMarkSixBetRecord implements IResponseMarkSixBetRecord {

    /**
     * Constructs a new ResponseMarkSixBetRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IResponseMarkSixBetRecord);

    /** ResponseMarkSixBetRecord isSuccess. */
    public isSuccess: boolean;

    /** ResponseMarkSixBetRecord tips. */
    public tips: string;

    /** ResponseMarkSixBetRecord unsettlement. */
    public unsettlement: IUnSettlementBetRecord[];

    /** ResponseMarkSixBetRecord settlement. */
    public settlement: ISettlementMarkSixRecord[];

    /** ResponseMarkSixBetRecord periodNo. */
    public periodNo: string[];

    /**
     * Creates a new ResponseMarkSixBetRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseMarkSixBetRecord instance
     */
    public static create(properties?: IResponseMarkSixBetRecord): ResponseMarkSixBetRecord;

    /**
     * Encodes the specified ResponseMarkSixBetRecord message. Does not implicitly {@link ResponseMarkSixBetRecord.verify|verify} messages.
     * @param m ResponseMarkSixBetRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IResponseMarkSixBetRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseMarkSixBetRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ResponseMarkSixBetRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ResponseMarkSixBetRecord;
}

/** Properties of a PushOpenStatus. */
export interface IPushOpenStatus {

    /** PushOpenStatus status */
    status: number;

    /** PushOpenStatus stopBetTime */
    stopBetTime?: (string|null);

    /** PushOpenStatus lotteryTime */
    lotteryTime?: (string|null);

    /** PushOpenStatus record */
    record?: (ILotteryRecord|null);

    /** PushOpenStatus nextPreiodNo */
    nextPreiodNo?: (string|null);
}

/** Represents a PushOpenStatus. */
export class PushOpenStatus implements IPushOpenStatus {

    /**
     * Constructs a new PushOpenStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IPushOpenStatus);

    /** PushOpenStatus status. */
    public status: number;

    /** PushOpenStatus stopBetTime. */
    public stopBetTime: string;

    /** PushOpenStatus lotteryTime. */
    public lotteryTime: string;

    /** PushOpenStatus record. */
    public record?: (ILotteryRecord|null);

    /** PushOpenStatus nextPreiodNo. */
    public nextPreiodNo: string;

    /**
     * Creates a new PushOpenStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushOpenStatus instance
     */
    public static create(properties?: IPushOpenStatus): PushOpenStatus;

    /**
     * Encodes the specified PushOpenStatus message. Does not implicitly {@link PushOpenStatus.verify|verify} messages.
     * @param m PushOpenStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushOpenStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushOpenStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushOpenStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushOpenStatus;
}

/** Properties of a PushOddsRefreshTime. */
export interface IPushOddsRefreshTime {

    /** PushOddsRefreshTime refreshTime */
    refreshTime: string;
}

/** Represents a PushOddsRefreshTime. */
export class PushOddsRefreshTime implements IPushOddsRefreshTime {

    /**
     * Constructs a new PushOddsRefreshTime.
     * @param [p] Properties to set
     */
    constructor(p?: IPushOddsRefreshTime);

    /** PushOddsRefreshTime refreshTime. */
    public refreshTime: string;

    /**
     * Creates a new PushOddsRefreshTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushOddsRefreshTime instance
     */
    public static create(properties?: IPushOddsRefreshTime): PushOddsRefreshTime;

    /**
     * Encodes the specified PushOddsRefreshTime message. Does not implicitly {@link PushOddsRefreshTime.verify|verify} messages.
     * @param m PushOddsRefreshTime message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushOddsRefreshTime, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushOddsRefreshTime message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushOddsRefreshTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushOddsRefreshTime;
}

/** Properties of a RequestLeaveMarkSix. */
export interface IRequestLeaveMarkSix {
}

/** Represents a RequestLeaveMarkSix. */
export class RequestLeaveMarkSix implements IRequestLeaveMarkSix {

    /**
     * Constructs a new RequestLeaveMarkSix.
     * @param [p] Properties to set
     */
    constructor(p?: IRequestLeaveMarkSix);

    /**
     * Creates a new RequestLeaveMarkSix instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestLeaveMarkSix instance
     */
    public static create(properties?: IRequestLeaveMarkSix): RequestLeaveMarkSix;

    /**
     * Encodes the specified RequestLeaveMarkSix message. Does not implicitly {@link RequestLeaveMarkSix.verify|verify} messages.
     * @param m RequestLeaveMarkSix message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRequestLeaveMarkSix, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestLeaveMarkSix message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RequestLeaveMarkSix
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RequestLeaveMarkSix;
}

/** Properties of a BetInfo. */
export interface IBetInfo {

    /** BetInfo num */
    num?: (number[]|null);

    /** BetInfo betIndex */
    betIndex?: (number|null);

    /** BetInfo odds */
    odds: number;

    /** BetInfo subType */
    subType?: (number|null);
}

/** Represents a BetInfo. */
export class BetInfo implements IBetInfo {

    /**
     * Constructs a new BetInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBetInfo);

    /** BetInfo num. */
    public num: number[];

    /** BetInfo betIndex. */
    public betIndex: number;

    /** BetInfo odds. */
    public odds: number;

    /** BetInfo subType. */
    public subType: number;

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

/** Properties of a RequestBet. */
export interface IRequestBet {

    /** RequestBet markSixType */
    markSixType: MarkSixType;

    /** RequestBet betMoney */
    betMoney: number;

    /** RequestBet betInfo */
    betInfo?: (IBetInfo[]|null);
}

/** Represents a RequestBet. */
export class RequestBet implements IRequestBet {

    /**
     * Constructs a new RequestBet.
     * @param [p] Properties to set
     */
    constructor(p?: IRequestBet);

    /** RequestBet markSixType. */
    public markSixType: MarkSixType;

    /** RequestBet betMoney. */
    public betMoney: number;

    /** RequestBet betInfo. */
    public betInfo: IBetInfo[];

    /**
     * Creates a new RequestBet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestBet instance
     */
    public static create(properties?: IRequestBet): RequestBet;

    /**
     * Encodes the specified RequestBet message. Does not implicitly {@link RequestBet.verify|verify} messages.
     * @param m RequestBet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRequestBet, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestBet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RequestBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RequestBet;
}

/** Properties of a ResponseBet. */
export interface IResponseBet {

    /** ResponseBet isSuccess */
    isSuccess: boolean;

    /** ResponseBet msg */
    msg?: (string|null);

    /** ResponseBet failType */
    failType?: (number|null);
}

/** Represents a ResponseBet. */
export class ResponseBet implements IResponseBet {

    /**
     * Constructs a new ResponseBet.
     * @param [p] Properties to set
     */
    constructor(p?: IResponseBet);

    /** ResponseBet isSuccess. */
    public isSuccess: boolean;

    /** ResponseBet msg. */
    public msg: string;

    /** ResponseBet failType. */
    public failType: number;

    /**
     * Creates a new ResponseBet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseBet instance
     */
    public static create(properties?: IResponseBet): ResponseBet;

    /**
     * Encodes the specified ResponseBet message. Does not implicitly {@link ResponseBet.verify|verify} messages.
     * @param m ResponseBet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IResponseBet, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseBet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ResponseBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ResponseBet;
}

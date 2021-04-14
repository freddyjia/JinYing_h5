import * as $protobuf from "protobufjs";
/** MailType enum. */
export enum MailType {
    SystemMail = 1,
    FriendMail = 2
}

/** Properties of an AttachmentItem. */
export interface IAttachmentItem {

    /** AttachmentItem name */
    name: string;

    /** AttachmentItem altasPath */
    altasPath: string;

    /** AttachmentItem spriteName */
    spriteName: string;

    /** AttachmentItem count */
    count: number;
}

/** Represents an AttachmentItem. */
export class AttachmentItem implements IAttachmentItem {

    /**
     * Constructs a new AttachmentItem.
     * @param [p] Properties to set
     */
    constructor(p?: IAttachmentItem);

    /** AttachmentItem name. */
    public name: string;

    /** AttachmentItem altasPath. */
    public altasPath: string;

    /** AttachmentItem spriteName. */
    public spriteName: string;

    /** AttachmentItem count. */
    public count: number;

    /**
     * Creates a new AttachmentItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttachmentItem instance
     */
    public static create(properties?: IAttachmentItem): AttachmentItem;

    /**
     * Encodes the specified AttachmentItem message. Does not implicitly {@link AttachmentItem.verify|verify} messages.
     * @param m AttachmentItem message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAttachmentItem, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttachmentItem message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AttachmentItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AttachmentItem;
}

/** Properties of an AttachmentStruct. */
export interface IAttachmentStruct {

    /** AttachmentStruct currency */
    currency?: (ICurrencyStruct[]|null);

    /** AttachmentStruct item */
    item?: (IAttachmentItem[]|null);
}

/** Represents an AttachmentStruct. */
export class AttachmentStruct implements IAttachmentStruct {

    /**
     * Constructs a new AttachmentStruct.
     * @param [p] Properties to set
     */
    constructor(p?: IAttachmentStruct);

    /** AttachmentStruct currency. */
    public currency: ICurrencyStruct[];

    /** AttachmentStruct item. */
    public item: IAttachmentItem[];

    /**
     * Creates a new AttachmentStruct instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttachmentStruct instance
     */
    public static create(properties?: IAttachmentStruct): AttachmentStruct;

    /**
     * Encodes the specified AttachmentStruct message. Does not implicitly {@link AttachmentStruct.verify|verify} messages.
     * @param m AttachmentStruct message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAttachmentStruct, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttachmentStruct message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AttachmentStruct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AttachmentStruct;
}

/** Properties of a Mail. */
export interface IMail {

    /** Mail id */
    id: (number|Long);

    /** Mail title */
    title: string;

    /** Mail content */
    content: string;

    /** Mail mailType */
    mailType: MailType;

    /** Mail isRead */
    isRead: boolean;

    /** Mail createTime */
    createTime: (number|Long);

    /** Mail isGetAttachment */
    isGetAttachment?: (boolean|null);

    /** Mail attachment */
    attachment?: (IAttachmentStruct|null);

    /** Mail headId */
    headId?: (number|null);

    /** Mail headImageUrl */
    headImageUrl?: (string|null);
}

/** Represents a Mail. */
export class Mail implements IMail {

    /**
     * Constructs a new Mail.
     * @param [p] Properties to set
     */
    constructor(p?: IMail);

    /** Mail id. */
    public id: (number|Long);

    /** Mail title. */
    public title: string;

    /** Mail content. */
    public content: string;

    /** Mail mailType. */
    public mailType: MailType;

    /** Mail isRead. */
    public isRead: boolean;

    /** Mail createTime. */
    public createTime: (number|Long);

    /** Mail isGetAttachment. */
    public isGetAttachment: boolean;

    /** Mail attachment. */
    public attachment?: (IAttachmentStruct|null);

    /** Mail headId. */
    public headId: number;

    /** Mail headImageUrl. */
    public headImageUrl: string;

    /**
     * Creates a new Mail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Mail instance
     */
    public static create(properties?: IMail): Mail;

    /**
     * Encodes the specified Mail message. Does not implicitly {@link Mail.verify|verify} messages.
     * @param m Mail message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMail, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Mail message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Mail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Mail;
}

/** Properties of a MailRes. */
export interface IMailRes {

    /** MailRes mailList */
    mailList?: (IMail[]|null);
}

/** Represents a MailRes. */
export class MailRes implements IMailRes {

    /**
     * Constructs a new MailRes.
     * @param [p] Properties to set
     */
    constructor(p?: IMailRes);

    /** MailRes mailList. */
    public mailList: IMail[];

    /**
     * Creates a new MailRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MailRes instance
     */
    public static create(properties?: IMailRes): MailRes;

    /**
     * Encodes the specified MailRes message. Does not implicitly {@link MailRes.verify|verify} messages.
     * @param m MailRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMailRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MailRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MailRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MailRes;
}

/** Properties of a MailModify. */
export interface IMailModify {

    /** MailModify id */
    id: (number|Long);

    /** MailModify isRead */
    isRead: boolean;

    /** MailModify isGetAttachment */
    isGetAttachment?: (boolean|null);
}

/** Represents a MailModify. */
export class MailModify implements IMailModify {

    /**
     * Constructs a new MailModify.
     * @param [p] Properties to set
     */
    constructor(p?: IMailModify);

    /** MailModify id. */
    public id: (number|Long);

    /** MailModify isRead. */
    public isRead: boolean;

    /** MailModify isGetAttachment. */
    public isGetAttachment: boolean;

    /**
     * Creates a new MailModify instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MailModify instance
     */
    public static create(properties?: IMailModify): MailModify;

    /**
     * Encodes the specified MailModify message. Does not implicitly {@link MailModify.verify|verify} messages.
     * @param m MailModify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMailModify, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MailModify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MailModify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MailModify;
}

/** Properties of a MailModifyRes. */
export interface IMailModifyRes {

    /** MailModifyRes addList */
    addList?: (IMail[]|null);

    /** MailModifyRes modifyList */
    modifyList?: (IMailModify[]|null);

    /** MailModifyRes removeList */
    removeList?: ((number|Long)[]|null);
}

/** Represents a MailModifyRes. */
export class MailModifyRes implements IMailModifyRes {

    /**
     * Constructs a new MailModifyRes.
     * @param [p] Properties to set
     */
    constructor(p?: IMailModifyRes);

    /** MailModifyRes addList. */
    public addList: IMail[];

    /** MailModifyRes modifyList. */
    public modifyList: IMailModify[];

    /** MailModifyRes removeList. */
    public removeList: (number|Long)[];

    /**
     * Creates a new MailModifyRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MailModifyRes instance
     */
    public static create(properties?: IMailModifyRes): MailModifyRes;

    /**
     * Encodes the specified MailModifyRes message. Does not implicitly {@link MailModifyRes.verify|verify} messages.
     * @param m MailModifyRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMailModifyRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MailModifyRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MailModifyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MailModifyRes;
}

/** Properties of a ReadMailReq. */
export interface IReadMailReq {

    /** ReadMailReq id */
    id: (number|Long);
}

/** Represents a ReadMailReq. */
export class ReadMailReq implements IReadMailReq {

    /**
     * Constructs a new ReadMailReq.
     * @param [p] Properties to set
     */
    constructor(p?: IReadMailReq);

    /** ReadMailReq id. */
    public id: (number|Long);

    /**
     * Creates a new ReadMailReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadMailReq instance
     */
    public static create(properties?: IReadMailReq): ReadMailReq;

    /**
     * Encodes the specified ReadMailReq message. Does not implicitly {@link ReadMailReq.verify|verify} messages.
     * @param m ReadMailReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReadMailReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadMailReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReadMailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReadMailReq;
}

/** Properties of a DeleteMailReq. */
export interface IDeleteMailReq {

    /** DeleteMailReq id */
    id?: ((number|Long)[]|null);
}

/** Represents a DeleteMailReq. */
export class DeleteMailReq implements IDeleteMailReq {

    /**
     * Constructs a new DeleteMailReq.
     * @param [p] Properties to set
     */
    constructor(p?: IDeleteMailReq);

    /** DeleteMailReq id. */
    public id: (number|Long)[];

    /**
     * Creates a new DeleteMailReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteMailReq instance
     */
    public static create(properties?: IDeleteMailReq): DeleteMailReq;

    /**
     * Encodes the specified DeleteMailReq message. Does not implicitly {@link DeleteMailReq.verify|verify} messages.
     * @param m DeleteMailReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDeleteMailReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteMailReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DeleteMailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DeleteMailReq;
}

/** Properties of a GetMailAttachmentReq. */
export interface IGetMailAttachmentReq {

    /** GetMailAttachmentReq id */
    id?: ((number|Long)[]|null);
}

/** Represents a GetMailAttachmentReq. */
export class GetMailAttachmentReq implements IGetMailAttachmentReq {

    /**
     * Constructs a new GetMailAttachmentReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetMailAttachmentReq);

    /** GetMailAttachmentReq id. */
    public id: (number|Long)[];

    /**
     * Creates a new GetMailAttachmentReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMailAttachmentReq instance
     */
    public static create(properties?: IGetMailAttachmentReq): GetMailAttachmentReq;

    /**
     * Encodes the specified GetMailAttachmentReq message. Does not implicitly {@link GetMailAttachmentReq.verify|verify} messages.
     * @param m GetMailAttachmentReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetMailAttachmentReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMailAttachmentReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetMailAttachmentReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetMailAttachmentReq;
}

/** Properties of a CommonMailResultRes. */
export interface ICommonMailResultRes {

    /** CommonMailResultRes success */
    success: boolean;

    /** CommonMailResultRes tips */
    tips: string;

    /** CommonMailResultRes attachment */
    attachment?: (IAttachmentStruct|null);
}

/** Represents a CommonMailResultRes. */
export class CommonMailResultRes implements ICommonMailResultRes {

    /**
     * Constructs a new CommonMailResultRes.
     * @param [p] Properties to set
     */
    constructor(p?: ICommonMailResultRes);

    /** CommonMailResultRes success. */
    public success: boolean;

    /** CommonMailResultRes tips. */
    public tips: string;

    /** CommonMailResultRes attachment. */
    public attachment?: (IAttachmentStruct|null);

    /**
     * Creates a new CommonMailResultRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommonMailResultRes instance
     */
    public static create(properties?: ICommonMailResultRes): CommonMailResultRes;

    /**
     * Encodes the specified CommonMailResultRes message. Does not implicitly {@link CommonMailResultRes.verify|verify} messages.
     * @param m CommonMailResultRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICommonMailResultRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommonMailResultRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CommonMailResultRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CommonMailResultRes;
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

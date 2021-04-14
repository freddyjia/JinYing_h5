import * as $protobuf from "protobufjs";
/** Properties of a ChatServerData. */
export interface IChatServerData {

    /** ChatServerData serverId */
    serverId: string;

    /** ChatServerData senderId */
    senderId: (number|Long);

    /** ChatServerData chatContent */
    chatContent: IChat;
}

/** Represents a ChatServerData. */
export class ChatServerData implements IChatServerData {

    /**
     * Constructs a new ChatServerData.
     * @param [p] Properties to set
     */
    constructor(p?: IChatServerData);

    /** ChatServerData serverId. */
    public serverId: string;

    /** ChatServerData senderId. */
    public senderId: (number|Long);

    /** ChatServerData chatContent. */
    public chatContent: IChat;

    /**
     * Creates a new ChatServerData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatServerData instance
     */
    public static create(properties?: IChatServerData): ChatServerData;

    /**
     * Encodes the specified ChatServerData message. Does not implicitly {@link ChatServerData.verify|verify} messages.
     * @param m ChatServerData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChatServerData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatServerData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChatServerData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChatServerData;
}

/** Properties of a Chat. */
export interface IChat {

    /** Chat senderID */
    senderID?: (number|Long|null);

    /** Chat receiverID */
    receiverID: (number|Long);

    /** Chat content */
    content: string;

    /** Chat time */
    time?: (number|Long|null);

    /** Chat isRead */
    isRead?: (boolean|null);
}

/** Represents a Chat. */
export class Chat implements IChat {

    /**
     * Constructs a new Chat.
     * @param [p] Properties to set
     */
    constructor(p?: IChat);

    /** Chat senderID. */
    public senderID: (number|Long);

    /** Chat receiverID. */
    public receiverID: (number|Long);

    /** Chat content. */
    public content: string;

    /** Chat time. */
    public time: (number|Long);

    /** Chat isRead. */
    public isRead: boolean;

    /**
     * Creates a new Chat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Chat instance
     */
    public static create(properties?: IChat): Chat;

    /**
     * Encodes the specified Chat message. Does not implicitly {@link Chat.verify|verify} messages.
     * @param m Chat message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChat, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Chat message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Chat;
}

/** Properties of a SendChatReq. */
export interface ISendChatReq {

    /** SendChatReq receiverID */
    receiverID: (number|Long);

    /** SendChatReq content */
    content: string;
}

/** Represents a SendChatReq. */
export class SendChatReq implements ISendChatReq {

    /**
     * Constructs a new SendChatReq.
     * @param [p] Properties to set
     */
    constructor(p?: ISendChatReq);

    /** SendChatReq receiverID. */
    public receiverID: (number|Long);

    /** SendChatReq content. */
    public content: string;

    /**
     * Creates a new SendChatReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendChatReq instance
     */
    public static create(properties?: ISendChatReq): SendChatReq;

    /**
     * Encodes the specified SendChatReq message. Does not implicitly {@link SendChatReq.verify|verify} messages.
     * @param m SendChatReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISendChatReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendChatReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SendChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SendChatReq;
}

/** Properties of a SendChatRes. */
export interface ISendChatRes {

    /** SendChatRes success */
    success: boolean;

    /** SendChatRes tips */
    tips?: (string|null);

    /** SendChatRes chat */
    chat?: (IChat|null);
}

/** Represents a SendChatRes. */
export class SendChatRes implements ISendChatRes {

    /**
     * Constructs a new SendChatRes.
     * @param [p] Properties to set
     */
    constructor(p?: ISendChatRes);

    /** SendChatRes success. */
    public success: boolean;

    /** SendChatRes tips. */
    public tips: string;

    /** SendChatRes chat. */
    public chat?: (IChat|null);

    /**
     * Creates a new SendChatRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendChatRes instance
     */
    public static create(properties?: ISendChatRes): SendChatRes;

    /**
     * Encodes the specified SendChatRes message. Does not implicitly {@link SendChatRes.verify|verify} messages.
     * @param m SendChatRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISendChatRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendChatRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SendChatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SendChatRes;
}

/** Properties of a ReadChatReq. */
export interface IReadChatReq {

    /** ReadChatReq playerID */
    playerID: (number|Long);
}

/** Represents a ReadChatReq. */
export class ReadChatReq implements IReadChatReq {

    /**
     * Constructs a new ReadChatReq.
     * @param [p] Properties to set
     */
    constructor(p?: IReadChatReq);

    /** ReadChatReq playerID. */
    public playerID: (number|Long);

    /**
     * Creates a new ReadChatReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadChatReq instance
     */
    public static create(properties?: IReadChatReq): ReadChatReq;

    /**
     * Encodes the specified ReadChatReq message. Does not implicitly {@link ReadChatReq.verify|verify} messages.
     * @param m ReadChatReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReadChatReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadChatReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReadChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReadChatReq;
}

/** Properties of a PushChatRes. */
export interface IPushChatRes {

    /** PushChatRes chat */
    chat?: (IChat[]|null);
}

/** Represents a PushChatRes. */
export class PushChatRes implements IPushChatRes {

    /**
     * Constructs a new PushChatRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPushChatRes);

    /** PushChatRes chat. */
    public chat: IChat[];

    /**
     * Creates a new PushChatRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushChatRes instance
     */
    public static create(properties?: IPushChatRes): PushChatRes;

    /**
     * Encodes the specified PushChatRes message. Does not implicitly {@link PushChatRes.verify|verify} messages.
     * @param m PushChatRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushChatRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushChatRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushChatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushChatRes;
}

/** Properties of a MarkReadChatReq. */
export interface IMarkReadChatReq {

    /** MarkReadChatReq playerID */
    playerID: (number|Long);
}

/** Represents a MarkReadChatReq. */
export class MarkReadChatReq implements IMarkReadChatReq {

    /**
     * Constructs a new MarkReadChatReq.
     * @param [p] Properties to set
     */
    constructor(p?: IMarkReadChatReq);

    /** MarkReadChatReq playerID. */
    public playerID: (number|Long);

    /**
     * Creates a new MarkReadChatReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MarkReadChatReq instance
     */
    public static create(properties?: IMarkReadChatReq): MarkReadChatReq;

    /**
     * Encodes the specified MarkReadChatReq message. Does not implicitly {@link MarkReadChatReq.verify|verify} messages.
     * @param m MarkReadChatReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMarkReadChatReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MarkReadChatReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MarkReadChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MarkReadChatReq;
}

/** Properties of a SendBroadcastReq. */
export interface ISendBroadcastReq {

    /** SendBroadcastReq content */
    content: string;
}

/** Represents a SendBroadcastReq. */
export class SendBroadcastReq implements ISendBroadcastReq {

    /**
     * Constructs a new SendBroadcastReq.
     * @param [p] Properties to set
     */
    constructor(p?: ISendBroadcastReq);

    /** SendBroadcastReq content. */
    public content: string;

    /**
     * Creates a new SendBroadcastReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendBroadcastReq instance
     */
    public static create(properties?: ISendBroadcastReq): SendBroadcastReq;

    /**
     * Encodes the specified SendBroadcastReq message. Does not implicitly {@link SendBroadcastReq.verify|verify} messages.
     * @param m SendBroadcastReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISendBroadcastReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendBroadcastReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SendBroadcastReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SendBroadcastReq;
}

/** BroadcastType enum. */
export enum BroadcastType {
    SystemType = 1,
    PlayerType = 2
}

/** Properties of a BroadcastData. */
export interface IBroadcastData {

    /** BroadcastData broadcastType */
    broadcastType: BroadcastType;

    /** BroadcastData playerID */
    playerID?: (number|Long|null);

    /** BroadcastData username */
    username?: (string|null);

    /** BroadcastData content */
    content: string;

    /** BroadcastData time */
    time: string;

    /** BroadcastData linkId */
    linkId?: (number|null);
}

/** Represents a BroadcastData. */
export class BroadcastData implements IBroadcastData {

    /**
     * Constructs a new BroadcastData.
     * @param [p] Properties to set
     */
    constructor(p?: IBroadcastData);

    /** BroadcastData broadcastType. */
    public broadcastType: BroadcastType;

    /** BroadcastData playerID. */
    public playerID: (number|Long);

    /** BroadcastData username. */
    public username: string;

    /** BroadcastData content. */
    public content: string;

    /** BroadcastData time. */
    public time: string;

    /** BroadcastData linkId. */
    public linkId: number;

    /**
     * Creates a new BroadcastData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BroadcastData instance
     */
    public static create(properties?: IBroadcastData): BroadcastData;

    /**
     * Encodes the specified BroadcastData message. Does not implicitly {@link BroadcastData.verify|verify} messages.
     * @param m BroadcastData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBroadcastData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BroadcastData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BroadcastData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BroadcastData;
}

/** Properties of a PushBroadcast. */
export interface IPushBroadcast {

    /** PushBroadcast broadcastdata */
    broadcastdata?: (IBroadcastData[]|null);
}

/** Represents a PushBroadcast. */
export class PushBroadcast implements IPushBroadcast {

    /**
     * Constructs a new PushBroadcast.
     * @param [p] Properties to set
     */
    constructor(p?: IPushBroadcast);

    /** PushBroadcast broadcastdata. */
    public broadcastdata: IBroadcastData[];

    /**
     * Creates a new PushBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushBroadcast instance
     */
    public static create(properties?: IPushBroadcast): PushBroadcast;

    /**
     * Encodes the specified PushBroadcast message. Does not implicitly {@link PushBroadcast.verify|verify} messages.
     * @param m PushBroadcast message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushBroadcast, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushBroadcast message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushBroadcast;
}

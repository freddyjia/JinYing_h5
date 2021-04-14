import * as $protobuf from "protobufjs";
/** SenderType enum. */
export enum SenderType {
    sys = 0,
    gm = 1,
    robotMsg = 2
}

/** Properties of a BrocastPush. */
export interface IBrocastPush {

    /** BrocastPush senderType */
    senderType: SenderType;

    /** BrocastPush name */
    name: string;

    /** BrocastPush timeMs */
    timeMs: string;

    /** BrocastPush vip */
    vip: number;

    /** BrocastPush contenStr1 */
    contenStr1: string;

    /** BrocastPush contenPhoto1 */
    contenPhoto1: string;

    /** BrocastPush contenStr2 */
    contenStr2: string;

    /** BrocastPush contenPhoto2 */
    contenPhoto2: string;

    /** BrocastPush contenStr3 */
    contenStr3: string;
}

/** Represents a BrocastPush. */
export class BrocastPush implements IBrocastPush {

    /**
     * Constructs a new BrocastPush.
     * @param [p] Properties to set
     */
    constructor(p?: IBrocastPush);

    /** BrocastPush senderType. */
    public senderType: SenderType;

    /** BrocastPush name. */
    public name: string;

    /** BrocastPush timeMs. */
    public timeMs: string;

    /** BrocastPush vip. */
    public vip: number;

    /** BrocastPush contenStr1. */
    public contenStr1: string;

    /** BrocastPush contenPhoto1. */
    public contenPhoto1: string;

    /** BrocastPush contenStr2. */
    public contenStr2: string;

    /** BrocastPush contenPhoto2. */
    public contenPhoto2: string;

    /** BrocastPush contenStr3. */
    public contenStr3: string;

    /**
     * Creates a new BrocastPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BrocastPush instance
     */
    public static create(properties?: IBrocastPush): BrocastPush;

    /**
     * Encodes the specified BrocastPush message. Does not implicitly {@link BrocastPush.verify|verify} messages.
     * @param m BrocastPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBrocastPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BrocastPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BrocastPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BrocastPush;
}

/** Properties of a BrocastPushText. */
export interface IBrocastPushText {

    /** BrocastPushText senderType */
    senderType: SenderType;

    /** BrocastPushText name */
    name: string;

    /** BrocastPushText timeMs */
    timeMs: string;

    /** BrocastPushText content */
    content: string;

    /** BrocastPushText vip */
    vip: number;
}

/** Represents a BrocastPushText. */
export class BrocastPushText implements IBrocastPushText {

    /**
     * Constructs a new BrocastPushText.
     * @param [p] Properties to set
     */
    constructor(p?: IBrocastPushText);

    /** BrocastPushText senderType. */
    public senderType: SenderType;

    /** BrocastPushText name. */
    public name: string;

    /** BrocastPushText timeMs. */
    public timeMs: string;

    /** BrocastPushText content. */
    public content: string;

    /** BrocastPushText vip. */
    public vip: number;

    /**
     * Creates a new BrocastPushText instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BrocastPushText instance
     */
    public static create(properties?: IBrocastPushText): BrocastPushText;

    /**
     * Encodes the specified BrocastPushText message. Does not implicitly {@link BrocastPushText.verify|verify} messages.
     * @param m BrocastPushText message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBrocastPushText, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BrocastPushText message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BrocastPushText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BrocastPushText;
}

/** Properties of a GamePushBrocastToHall. */
export interface IGamePushBrocastToHall {

    /** GamePushBrocastToHall sysBrocastType */
    sysBrocastType: number;

    /** GamePushBrocastToHall playerId */
    playerId: string;

    /** GamePushBrocastToHall snedPlayerIds */
    snedPlayerIds?: (string[]|null);

    /** GamePushBrocastToHall condition */
    condition: number;

    /** GamePushBrocastToHall niuniuResultType */
    niuniuResultType: number;

    /** GamePushBrocastToHall dealySeconds */
    dealySeconds?: (number|null);

    /** GamePushBrocastToHall paobei */
    paobei?: (number|null);

    /** GamePushBrocastToHall fishName */
    fishName?: (string|null);

    /** GamePushBrocastToHall otherParam */
    otherParam?: (string|null);
}

/** Represents a GamePushBrocastToHall. */
export class GamePushBrocastToHall implements IGamePushBrocastToHall {

    /**
     * Constructs a new GamePushBrocastToHall.
     * @param [p] Properties to set
     */
    constructor(p?: IGamePushBrocastToHall);

    /** GamePushBrocastToHall sysBrocastType. */
    public sysBrocastType: number;

    /** GamePushBrocastToHall playerId. */
    public playerId: string;

    /** GamePushBrocastToHall snedPlayerIds. */
    public snedPlayerIds: string[];

    /** GamePushBrocastToHall condition. */
    public condition: number;

    /** GamePushBrocastToHall niuniuResultType. */
    public niuniuResultType: number;

    /** GamePushBrocastToHall dealySeconds. */
    public dealySeconds: number;

    /** GamePushBrocastToHall paobei. */
    public paobei: number;

    /** GamePushBrocastToHall fishName. */
    public fishName: string;

    /** GamePushBrocastToHall otherParam. */
    public otherParam: string;

    /**
     * Creates a new GamePushBrocastToHall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamePushBrocastToHall instance
     */
    public static create(properties?: IGamePushBrocastToHall): GamePushBrocastToHall;

    /**
     * Encodes the specified GamePushBrocastToHall message. Does not implicitly {@link GamePushBrocastToHall.verify|verify} messages.
     * @param m GamePushBrocastToHall message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGamePushBrocastToHall, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamePushBrocastToHall message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GamePushBrocastToHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GamePushBrocastToHall;
}

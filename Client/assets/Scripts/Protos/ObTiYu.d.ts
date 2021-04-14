import * as $protobuf from "protobufjs";
/** Properties of a PushRoomInfo. */
export interface IPushRoomInfo {
}

/** Represents a PushRoomInfo. */
export class PushRoomInfo implements IPushRoomInfo {

    /**
     * Constructs a new PushRoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRoomInfo);

    /**
     * Creates a new PushRoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRoomInfo instance
     */
    public static create(properties?: IPushRoomInfo): PushRoomInfo;

    /**
     * Encodes the specified PushRoomInfo message. Does not implicitly {@link PushRoomInfo.verify|verify} messages.
     * @param m PushRoomInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRoomInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRoomInfo;
}

/** Properties of a LoginThirdGameReq. */
export interface ILoginThirdGameReq {

    /** LoginThirdGameReq platform */
    platform: string;

    /** LoginThirdGameReq ip */
    ip: string;
}

/** Represents a LoginThirdGameReq. */
export class LoginThirdGameReq implements ILoginThirdGameReq {

    /**
     * Constructs a new LoginThirdGameReq.
     * @param [p] Properties to set
     */
    constructor(p?: ILoginThirdGameReq);

    /** LoginThirdGameReq platform. */
    public platform: string;

    /** LoginThirdGameReq ip. */
    public ip: string;

    /**
     * Creates a new LoginThirdGameReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginThirdGameReq instance
     */
    public static create(properties?: ILoginThirdGameReq): LoginThirdGameReq;

    /**
     * Encodes the specified LoginThirdGameReq message. Does not implicitly {@link LoginThirdGameReq.verify|verify} messages.
     * @param m LoginThirdGameReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILoginThirdGameReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginThirdGameReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LoginThirdGameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LoginThirdGameReq;
}

/** Properties of a LoginThirdGameRsp. */
export interface ILoginThirdGameRsp {

    /** LoginThirdGameRsp gameUrl */
    gameUrl?: (string|null);
}

/** Represents a LoginThirdGameRsp. */
export class LoginThirdGameRsp implements ILoginThirdGameRsp {

    /**
     * Constructs a new LoginThirdGameRsp.
     * @param [p] Properties to set
     */
    constructor(p?: ILoginThirdGameRsp);

    /** LoginThirdGameRsp gameUrl. */
    public gameUrl: string;

    /**
     * Creates a new LoginThirdGameRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginThirdGameRsp instance
     */
    public static create(properties?: ILoginThirdGameRsp): LoginThirdGameRsp;

    /**
     * Encodes the specified LoginThirdGameRsp message. Does not implicitly {@link LoginThirdGameRsp.verify|verify} messages.
     * @param m LoginThirdGameRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILoginThirdGameRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginThirdGameRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LoginThirdGameRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LoginThirdGameRsp;
}

import * as $protobuf from "protobufjs";
/** Properties of a LoginReq. */
export interface ILoginReq {

    /** LoginReq uid */
    uid: string;

    /** LoginReq token */
    token: string;

    /** LoginReq platform */
    platform?: (string|null);

    /** LoginReq clientVersion */
    clientVersion?: (string|null);

    /** LoginReq phoneName */
    phoneName?: (string|null);

    /** LoginReq phoneModelNo */
    phoneModelNo?: (string|null);

    /** LoginReq ip */
    ip?: (string|null);

    /** LoginReq imei */
    imei?: (string|null);

    /** LoginReq mac */
    mac?: (string|null);

    /** LoginReq os */
    os?: (string|null);

    /** LoginReq appVersion */
    appVersion?: (number|null);

    /** LoginReq packageName */
    packageName?: (string|null);

    /** LoginReq osTime */
    osTime?: (string|null);

    /** LoginReq md5String */
    md5String?: (string|null);

    /** LoginReq channelId */
    channelId?: (string|null);

    /** LoginReq isH5 */
    isH5?: (boolean|null);
}

/** Represents a LoginReq. */
export class LoginReq implements ILoginReq {

    /**
     * Constructs a new LoginReq.
     * @param [p] Properties to set
     */
    constructor(p?: ILoginReq);

    /** LoginReq uid. */
    public uid: string;

    /** LoginReq token. */
    public token: string;

    /** LoginReq platform. */
    public platform: string;

    /** LoginReq clientVersion. */
    public clientVersion: string;

    /** LoginReq phoneName. */
    public phoneName: string;

    /** LoginReq phoneModelNo. */
    public phoneModelNo: string;

    /** LoginReq ip. */
    public ip: string;

    /** LoginReq imei. */
    public imei: string;

    /** LoginReq mac. */
    public mac: string;

    /** LoginReq os. */
    public os: string;

    /** LoginReq appVersion. */
    public appVersion: number;

    /** LoginReq packageName. */
    public packageName: string;

    /** LoginReq osTime. */
    public osTime: string;

    /** LoginReq md5String. */
    public md5String: string;

    /** LoginReq channelId. */
    public channelId: string;

    /** LoginReq isH5. */
    public isH5: boolean;

    /**
     * Creates a new LoginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginReq instance
     */
    public static create(properties?: ILoginReq): LoginReq;

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @param m LoginReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILoginReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LoginReq;
}

/** Properties of a LoginRes. */
export interface ILoginRes {

    /** LoginRes success */
    success: boolean;

    /** LoginRes errMsg */
    errMsg: string;
}

/** Represents a LoginRes. */
export class LoginRes implements ILoginRes {

    /**
     * Constructs a new LoginRes.
     * @param [p] Properties to set
     */
    constructor(p?: ILoginRes);

    /** LoginRes success. */
    public success: boolean;

    /** LoginRes errMsg. */
    public errMsg: string;

    /**
     * Creates a new LoginRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginRes instance
     */
    public static create(properties?: ILoginRes): LoginRes;

    /**
     * Encodes the specified LoginRes message. Does not implicitly {@link LoginRes.verify|verify} messages.
     * @param m LoginRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILoginRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LoginRes;
}

/** Properties of a Kick. */
export interface IKick {

    /** Kick reason */
    reason: string;
}

/** Represents a Kick. */
export class Kick implements IKick {

    /**
     * Constructs a new Kick.
     * @param [p] Properties to set
     */
    constructor(p?: IKick);

    /** Kick reason. */
    public reason: string;

    /**
     * Creates a new Kick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Kick instance
     */
    public static create(properties?: IKick): Kick;

    /**
     * Encodes the specified Kick message. Does not implicitly {@link Kick.verify|verify} messages.
     * @param m Kick message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IKick, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Kick message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Kick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Kick;
}

/** Properties of a ReConnect. */
export interface IReConnect {

    /** ReConnect playerID */
    playerID: (number|Long);
}

/** Represents a ReConnect. */
export class ReConnect implements IReConnect {

    /**
     * Constructs a new ReConnect.
     * @param [p] Properties to set
     */
    constructor(p?: IReConnect);

    /** ReConnect playerID. */
    public playerID: (number|Long);

    /**
     * Creates a new ReConnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReConnect instance
     */
    public static create(properties?: IReConnect): ReConnect;

    /**
     * Encodes the specified ReConnect message. Does not implicitly {@link ReConnect.verify|verify} messages.
     * @param m ReConnect message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReConnect, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReConnect message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReConnect;
}

/** Properties of a PlayerShouldReconnectBattle. */
export interface IPlayerShouldReconnectBattle {

    /** PlayerShouldReconnectBattle shouldReconnectBattle */
    shouldReconnectBattle: boolean;

    /** PlayerShouldReconnectBattle canReconnect */
    canReconnect?: (boolean|null);

    /** PlayerShouldReconnectBattle leftSeconds */
    leftSeconds?: (number|null);

    /** PlayerShouldReconnectBattle tips */
    tips?: (string|null);
}

/** Represents a PlayerShouldReconnectBattle. */
export class PlayerShouldReconnectBattle implements IPlayerShouldReconnectBattle {

    /**
     * Constructs a new PlayerShouldReconnectBattle.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerShouldReconnectBattle);

    /** PlayerShouldReconnectBattle shouldReconnectBattle. */
    public shouldReconnectBattle: boolean;

    /** PlayerShouldReconnectBattle canReconnect. */
    public canReconnect: boolean;

    /** PlayerShouldReconnectBattle leftSeconds. */
    public leftSeconds: number;

    /** PlayerShouldReconnectBattle tips. */
    public tips: string;

    /**
     * Creates a new PlayerShouldReconnectBattle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerShouldReconnectBattle instance
     */
    public static create(properties?: IPlayerShouldReconnectBattle): PlayerShouldReconnectBattle;

    /**
     * Encodes the specified PlayerShouldReconnectBattle message. Does not implicitly {@link PlayerShouldReconnectBattle.verify|verify} messages.
     * @param m PlayerShouldReconnectBattle message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerShouldReconnectBattle, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerShouldReconnectBattle message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerShouldReconnectBattle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerShouldReconnectBattle;
}

/** Properties of a ForceLogout. */
export interface IForceLogout {

    /** ForceLogout reason */
    reason?: (string|null);
}

/** Represents a ForceLogout. */
export class ForceLogout implements IForceLogout {

    /**
     * Constructs a new ForceLogout.
     * @param [p] Properties to set
     */
    constructor(p?: IForceLogout);

    /** ForceLogout reason. */
    public reason: string;

    /**
     * Creates a new ForceLogout instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForceLogout instance
     */
    public static create(properties?: IForceLogout): ForceLogout;

    /**
     * Encodes the specified ForceLogout message. Does not implicitly {@link ForceLogout.verify|verify} messages.
     * @param m ForceLogout message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IForceLogout, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ForceLogout message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ForceLogout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ForceLogout;
}

/** Properties of a ReconnectHallResult. */
export interface IReconnectHallResult {

    /** ReconnectHallResult success */
    success: boolean;

    /** ReconnectHallResult tips */
    tips?: (string|null);
}

/** Represents a ReconnectHallResult. */
export class ReconnectHallResult implements IReconnectHallResult {

    /**
     * Constructs a new ReconnectHallResult.
     * @param [p] Properties to set
     */
    constructor(p?: IReconnectHallResult);

    /** ReconnectHallResult success. */
    public success: boolean;

    /** ReconnectHallResult tips. */
    public tips: string;

    /**
     * Creates a new ReconnectHallResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReconnectHallResult instance
     */
    public static create(properties?: IReconnectHallResult): ReconnectHallResult;

    /**
     * Encodes the specified ReconnectHallResult message. Does not implicitly {@link ReconnectHallResult.verify|verify} messages.
     * @param m ReconnectHallResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReconnectHallResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReconnectHallResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReconnectHallResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReconnectHallResult;
}

/** Properties of a GameStatusInfo. */
export interface IGameStatusInfo {

    /** GameStatusInfo isGameStatus */
    isGameStatus: boolean;

    /** GameStatusInfo playType */
    playType?: (number|null);

    /** GameStatusInfo playId */
    playId?: (number|null);
}

/** Represents a GameStatusInfo. */
export class GameStatusInfo implements IGameStatusInfo {

    /**
     * Constructs a new GameStatusInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IGameStatusInfo);

    /** GameStatusInfo isGameStatus. */
    public isGameStatus: boolean;

    /** GameStatusInfo playType. */
    public playType: number;

    /** GameStatusInfo playId. */
    public playId: number;

    /**
     * Creates a new GameStatusInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameStatusInfo instance
     */
    public static create(properties?: IGameStatusInfo): GameStatusInfo;

    /**
     * Encodes the specified GameStatusInfo message. Does not implicitly {@link GameStatusInfo.verify|verify} messages.
     * @param m GameStatusInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameStatusInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameStatusInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameStatusInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameStatusInfo;
}

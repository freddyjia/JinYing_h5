import * as $protobuf from "protobufjs";
/** Properties of a MatchReq. */
export interface IMatchReq {

    /** MatchReq userId */
    userId: (number|Long);

    /** MatchReq playType */
    playType: number;

    /** MatchReq playId */
    playId: number;

    /** MatchReq hallIp */
    hallIp: string;

    /** MatchReq hallPort */
    hallPort: number;

    /** MatchReq clientIp */
    clientIp?: (string|null);

    /** MatchReq extra */
    extra?: (string|null);
}

/** Represents a MatchReq. */
export class MatchReq implements IMatchReq {

    /**
     * Constructs a new MatchReq.
     * @param [p] Properties to set
     */
    constructor(p?: IMatchReq);

    /** MatchReq userId. */
    public userId: (number|Long);

    /** MatchReq playType. */
    public playType: number;

    /** MatchReq playId. */
    public playId: number;

    /** MatchReq hallIp. */
    public hallIp: string;

    /** MatchReq hallPort. */
    public hallPort: number;

    /** MatchReq clientIp. */
    public clientIp: string;

    /** MatchReq extra. */
    public extra: string;

    /**
     * Creates a new MatchReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchReq instance
     */
    public static create(properties?: IMatchReq): MatchReq;

    /**
     * Encodes the specified MatchReq message. Does not implicitly {@link MatchReq.verify|verify} messages.
     * @param m MatchReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMatchReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MatchReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MatchReq;
}

/** Properties of a CancelMatchReq. */
export interface ICancelMatchReq {

    /** CancelMatchReq userId */
    userId: (number|Long);

    /** CancelMatchReq playType */
    playType: number;

    /** CancelMatchReq playId */
    playId: number;
}

/** Represents a CancelMatchReq. */
export class CancelMatchReq implements ICancelMatchReq {

    /**
     * Constructs a new CancelMatchReq.
     * @param [p] Properties to set
     */
    constructor(p?: ICancelMatchReq);

    /** CancelMatchReq userId. */
    public userId: (number|Long);

    /** CancelMatchReq playType. */
    public playType: number;

    /** CancelMatchReq playId. */
    public playId: number;

    /**
     * Creates a new CancelMatchReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CancelMatchReq instance
     */
    public static create(properties?: ICancelMatchReq): CancelMatchReq;

    /**
     * Encodes the specified CancelMatchReq message. Does not implicitly {@link CancelMatchReq.verify|verify} messages.
     * @param m CancelMatchReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICancelMatchReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CancelMatchReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CancelMatchReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CancelMatchReq;
}

/** Properties of a GameToMatchResultRes. */
export interface IGameToMatchResultRes {

    /** GameToMatchResultRes userId */
    userId?: ((number|Long)[]|null);

    /** GameToMatchResultRes playType */
    playType: number;

    /** GameToMatchResultRes playId */
    playId: number;

    /** GameToMatchResultRes isSuccess */
    isSuccess: boolean;
}

/** Represents a GameToMatchResultRes. */
export class GameToMatchResultRes implements IGameToMatchResultRes {

    /**
     * Constructs a new GameToMatchResultRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGameToMatchResultRes);

    /** GameToMatchResultRes userId. */
    public userId: (number|Long)[];

    /** GameToMatchResultRes playType. */
    public playType: number;

    /** GameToMatchResultRes playId. */
    public playId: number;

    /** GameToMatchResultRes isSuccess. */
    public isSuccess: boolean;

    /**
     * Creates a new GameToMatchResultRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameToMatchResultRes instance
     */
    public static create(properties?: IGameToMatchResultRes): GameToMatchResultRes;

    /**
     * Encodes the specified GameToMatchResultRes message. Does not implicitly {@link GameToMatchResultRes.verify|verify} messages.
     * @param m GameToMatchResultRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameToMatchResultRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameToMatchResultRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameToMatchResultRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameToMatchResultRes;
}

/** Properties of a MatchToHallResultRes. */
export interface IMatchToHallResultRes {

    /** MatchToHallResultRes userId */
    userId: (number|Long);

    /** MatchToHallResultRes isSuccess */
    isSuccess: boolean;

    /** MatchToHallResultRes tips */
    tips?: (string|null);

    /** MatchToHallResultRes gamePort */
    gamePort?: (number|null);

    /** MatchToHallResultRes readGameIp */
    readGameIp?: (string|null);

    /** MatchToHallResultRes playType */
    playType?: (number|null);

    /** MatchToHallResultRes playId */
    playId?: (number|null);
}

/** Represents a MatchToHallResultRes. */
export class MatchToHallResultRes implements IMatchToHallResultRes {

    /**
     * Constructs a new MatchToHallResultRes.
     * @param [p] Properties to set
     */
    constructor(p?: IMatchToHallResultRes);

    /** MatchToHallResultRes userId. */
    public userId: (number|Long);

    /** MatchToHallResultRes isSuccess. */
    public isSuccess: boolean;

    /** MatchToHallResultRes tips. */
    public tips: string;

    /** MatchToHallResultRes gamePort. */
    public gamePort: number;

    /** MatchToHallResultRes readGameIp. */
    public readGameIp: string;

    /** MatchToHallResultRes playType. */
    public playType: number;

    /** MatchToHallResultRes playId. */
    public playId: number;

    /**
     * Creates a new MatchToHallResultRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchToHallResultRes instance
     */
    public static create(properties?: IMatchToHallResultRes): MatchToHallResultRes;

    /**
     * Encodes the specified MatchToHallResultRes message. Does not implicitly {@link MatchToHallResultRes.verify|verify} messages.
     * @param m MatchToHallResultRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMatchToHallResultRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchToHallResultRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MatchToHallResultRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MatchToHallResultRes;
}

/** Properties of a PlayInfo. */
export interface IPlayInfo {

    /** PlayInfo userId */
    userId: (number|Long);

    /** PlayInfo isRobot */
    isRobot: boolean;

    /** PlayInfo hallIp */
    hallIp?: (string|null);

    /** PlayInfo hallPort */
    hallPort?: (number|null);
}

/** Represents a PlayInfo. */
export class PlayInfo implements IPlayInfo {

    /**
     * Constructs a new PlayInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayInfo);

    /** PlayInfo userId. */
    public userId: (number|Long);

    /** PlayInfo isRobot. */
    public isRobot: boolean;

    /** PlayInfo hallIp. */
    public hallIp: string;

    /** PlayInfo hallPort. */
    public hallPort: number;

    /**
     * Creates a new PlayInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayInfo instance
     */
    public static create(properties?: IPlayInfo): PlayInfo;

    /**
     * Encodes the specified PlayInfo message. Does not implicitly {@link PlayInfo.verify|verify} messages.
     * @param m PlayInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayInfo;
}

/** Properties of a MatchToGameStartReq. */
export interface IMatchToGameStartReq {

    /** MatchToGameStartReq playInfo */
    playInfo?: (IPlayInfo[]|null);

    /** MatchToGameStartReq playType */
    playType: number;

    /** MatchToGameStartReq playId */
    playId: number;

    /** MatchToGameStartReq matchIp */
    matchIp: string;

    /** MatchToGameStartReq matchPort */
    matchPort: number;

    /** MatchToGameStartReq extend */
    extend?: (string|null);
}

/** Represents a MatchToGameStartReq. */
export class MatchToGameStartReq implements IMatchToGameStartReq {

    /**
     * Constructs a new MatchToGameStartReq.
     * @param [p] Properties to set
     */
    constructor(p?: IMatchToGameStartReq);

    /** MatchToGameStartReq playInfo. */
    public playInfo: IPlayInfo[];

    /** MatchToGameStartReq playType. */
    public playType: number;

    /** MatchToGameStartReq playId. */
    public playId: number;

    /** MatchToGameStartReq matchIp. */
    public matchIp: string;

    /** MatchToGameStartReq matchPort. */
    public matchPort: number;

    /** MatchToGameStartReq extend. */
    public extend: string;

    /**
     * Creates a new MatchToGameStartReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchToGameStartReq instance
     */
    public static create(properties?: IMatchToGameStartReq): MatchToGameStartReq;

    /**
     * Encodes the specified MatchToGameStartReq message. Does not implicitly {@link MatchToGameStartReq.verify|verify} messages.
     * @param m MatchToGameStartReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMatchToGameStartReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchToGameStartReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MatchToGameStartReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MatchToGameStartReq;
}

/** Properties of a PushMatchGameFinish. */
export interface IPushMatchGameFinish {

    /** PushMatchGameFinish userId */
    userId?: ((number|Long)[]|null);

    /** PushMatchGameFinish playType */
    playType: number;

    /** PushMatchGameFinish playId */
    playId: number;
}

/** Represents a PushMatchGameFinish. */
export class PushMatchGameFinish implements IPushMatchGameFinish {

    /**
     * Constructs a new PushMatchGameFinish.
     * @param [p] Properties to set
     */
    constructor(p?: IPushMatchGameFinish);

    /** PushMatchGameFinish userId. */
    public userId: (number|Long)[];

    /** PushMatchGameFinish playType. */
    public playType: number;

    /** PushMatchGameFinish playId. */
    public playId: number;

    /**
     * Creates a new PushMatchGameFinish instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushMatchGameFinish instance
     */
    public static create(properties?: IPushMatchGameFinish): PushMatchGameFinish;

    /**
     * Encodes the specified PushMatchGameFinish message. Does not implicitly {@link PushMatchGameFinish.verify|verify} messages.
     * @param m PushMatchGameFinish message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushMatchGameFinish, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushMatchGameFinish message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushMatchGameFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushMatchGameFinish;
}

/** Properties of a GameToMatchGetRobotReq. */
export interface IGameToMatchGetRobotReq {

    /** GameToMatchGetRobotReq robotCount */
    robotCount: number;

    /** GameToMatchGetRobotReq gameIp */
    gameIp: string;

    /** GameToMatchGetRobotReq gamePort */
    gamePort: number;

    /** GameToMatchGetRobotReq roomId */
    roomId?: (number|null);

    /** GameToMatchGetRobotReq type */
    type?: (number|null);
}

/** Represents a GameToMatchGetRobotReq. */
export class GameToMatchGetRobotReq implements IGameToMatchGetRobotReq {

    /**
     * Constructs a new GameToMatchGetRobotReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGameToMatchGetRobotReq);

    /** GameToMatchGetRobotReq robotCount. */
    public robotCount: number;

    /** GameToMatchGetRobotReq gameIp. */
    public gameIp: string;

    /** GameToMatchGetRobotReq gamePort. */
    public gamePort: number;

    /** GameToMatchGetRobotReq roomId. */
    public roomId: number;

    /** GameToMatchGetRobotReq type. */
    public type: number;

    /**
     * Creates a new GameToMatchGetRobotReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameToMatchGetRobotReq instance
     */
    public static create(properties?: IGameToMatchGetRobotReq): GameToMatchGetRobotReq;

    /**
     * Encodes the specified GameToMatchGetRobotReq message. Does not implicitly {@link GameToMatchGetRobotReq.verify|verify} messages.
     * @param m GameToMatchGetRobotReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameToMatchGetRobotReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameToMatchGetRobotReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameToMatchGetRobotReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameToMatchGetRobotReq;
}

/** Properties of a MatchToGameReturnRobot. */
export interface IMatchToGameReturnRobot {

    /** MatchToGameReturnRobot playerId */
    playerId?: ((number|Long)[]|null);

    /** MatchToGameReturnRobot roomId */
    roomId?: (number|null);

    /** MatchToGameReturnRobot type */
    type?: (number|null);
}

/** Represents a MatchToGameReturnRobot. */
export class MatchToGameReturnRobot implements IMatchToGameReturnRobot {

    /**
     * Constructs a new MatchToGameReturnRobot.
     * @param [p] Properties to set
     */
    constructor(p?: IMatchToGameReturnRobot);

    /** MatchToGameReturnRobot playerId. */
    public playerId: (number|Long)[];

    /** MatchToGameReturnRobot roomId. */
    public roomId: number;

    /** MatchToGameReturnRobot type. */
    public type: number;

    /**
     * Creates a new MatchToGameReturnRobot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchToGameReturnRobot instance
     */
    public static create(properties?: IMatchToGameReturnRobot): MatchToGameReturnRobot;

    /**
     * Encodes the specified MatchToGameReturnRobot message. Does not implicitly {@link MatchToGameReturnRobot.verify|verify} messages.
     * @param m MatchToGameReturnRobot message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMatchToGameReturnRobot, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchToGameReturnRobot message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MatchToGameReturnRobot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MatchToGameReturnRobot;
}

/** Properties of a GameToMatchGiveBackRobot. */
export interface IGameToMatchGiveBackRobot {

    /** GameToMatchGiveBackRobot playerId */
    playerId?: ((number|Long)[]|null);
}

/** Represents a GameToMatchGiveBackRobot. */
export class GameToMatchGiveBackRobot implements IGameToMatchGiveBackRobot {

    /**
     * Constructs a new GameToMatchGiveBackRobot.
     * @param [p] Properties to set
     */
    constructor(p?: IGameToMatchGiveBackRobot);

    /** GameToMatchGiveBackRobot playerId. */
    public playerId: (number|Long)[];

    /**
     * Creates a new GameToMatchGiveBackRobot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameToMatchGiveBackRobot instance
     */
    public static create(properties?: IGameToMatchGiveBackRobot): GameToMatchGiveBackRobot;

    /**
     * Encodes the specified GameToMatchGiveBackRobot message. Does not implicitly {@link GameToMatchGiveBackRobot.verify|verify} messages.
     * @param m GameToMatchGiveBackRobot message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameToMatchGiveBackRobot, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameToMatchGiveBackRobot message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameToMatchGiveBackRobot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameToMatchGiveBackRobot;
}

/** Properties of a GameToHallBackHall. */
export interface IGameToHallBackHall {

    /** GameToHallBackHall playerId */
    playerId: (number|Long);

    /** GameToHallBackHall playType */
    playType: number;

    /** GameToHallBackHall gameIp */
    gameIp: string;

    /** GameToHallBackHall gamePort */
    gamePort: number;
}

/** Represents a GameToHallBackHall. */
export class GameToHallBackHall implements IGameToHallBackHall {

    /**
     * Constructs a new GameToHallBackHall.
     * @param [p] Properties to set
     */
    constructor(p?: IGameToHallBackHall);

    /** GameToHallBackHall playerId. */
    public playerId: (number|Long);

    /** GameToHallBackHall playType. */
    public playType: number;

    /** GameToHallBackHall gameIp. */
    public gameIp: string;

    /** GameToHallBackHall gamePort. */
    public gamePort: number;

    /**
     * Creates a new GameToHallBackHall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameToHallBackHall instance
     */
    public static create(properties?: IGameToHallBackHall): GameToHallBackHall;

    /**
     * Encodes the specified GameToHallBackHall message. Does not implicitly {@link GameToHallBackHall.verify|verify} messages.
     * @param m GameToHallBackHall message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameToHallBackHall, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameToHallBackHall message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameToHallBackHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameToHallBackHall;
}

/** Properties of a GameToHallLoginRoom. */
export interface IGameToHallLoginRoom {

    /** GameToHallLoginRoom playerId */
    playerId: (number|Long);

    /** GameToHallLoginRoom playType */
    playType: number;
}

/** Represents a GameToHallLoginRoom. */
export class GameToHallLoginRoom implements IGameToHallLoginRoom {

    /**
     * Constructs a new GameToHallLoginRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IGameToHallLoginRoom);

    /** GameToHallLoginRoom playerId. */
    public playerId: (number|Long);

    /** GameToHallLoginRoom playType. */
    public playType: number;

    /**
     * Creates a new GameToHallLoginRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameToHallLoginRoom instance
     */
    public static create(properties?: IGameToHallLoginRoom): GameToHallLoginRoom;

    /**
     * Encodes the specified GameToHallLoginRoom message. Does not implicitly {@link GameToHallLoginRoom.verify|verify} messages.
     * @param m GameToHallLoginRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameToHallLoginRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameToHallLoginRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameToHallLoginRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameToHallLoginRoom;
}

/** Properties of a GameSyncCurrency. */
export interface IGameSyncCurrency {

    /** GameSyncCurrency playerId */
    playerId: (number|Long);
}

/** Represents a GameSyncCurrency. */
export class GameSyncCurrency implements IGameSyncCurrency {

    /**
     * Constructs a new GameSyncCurrency.
     * @param [p] Properties to set
     */
    constructor(p?: IGameSyncCurrency);

    /** GameSyncCurrency playerId. */
    public playerId: (number|Long);

    /**
     * Creates a new GameSyncCurrency instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameSyncCurrency instance
     */
    public static create(properties?: IGameSyncCurrency): GameSyncCurrency;

    /**
     * Encodes the specified GameSyncCurrency message. Does not implicitly {@link GameSyncCurrency.verify|verify} messages.
     * @param m GameSyncCurrency message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameSyncCurrency, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameSyncCurrency message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameSyncCurrency
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameSyncCurrency;
}

/** Properties of a GameSyncSettlement. */
export interface IGameSyncSettlement {

    /** GameSyncSettlement playerId */
    playerId: (number|Long);

    /** GameSyncSettlement gameType */
    gameType: number;

    /** GameSyncSettlement settlement */
    settlement: number;
}

/** Represents a GameSyncSettlement. */
export class GameSyncSettlement implements IGameSyncSettlement {

    /**
     * Constructs a new GameSyncSettlement.
     * @param [p] Properties to set
     */
    constructor(p?: IGameSyncSettlement);

    /** GameSyncSettlement playerId. */
    public playerId: (number|Long);

    /** GameSyncSettlement gameType. */
    public gameType: number;

    /** GameSyncSettlement settlement. */
    public settlement: number;

    /**
     * Creates a new GameSyncSettlement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameSyncSettlement instance
     */
    public static create(properties?: IGameSyncSettlement): GameSyncSettlement;

    /**
     * Encodes the specified GameSyncSettlement message. Does not implicitly {@link GameSyncSettlement.verify|verify} messages.
     * @param m GameSyncSettlement message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameSyncSettlement, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameSyncSettlement message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameSyncSettlement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameSyncSettlement;
}

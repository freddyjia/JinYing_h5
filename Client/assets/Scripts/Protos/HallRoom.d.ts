import * as $protobuf from "protobufjs";
/** Properties of a H2R2HReload. */
export interface IH2R2HReload {

    /** H2R2HReload playerId */
    playerId: (number|Long);
}

/** Represents a H2R2HReload. */
export class H2R2HReload implements IH2R2HReload {

    /**
     * Constructs a new H2R2HReload.
     * @param [p] Properties to set
     */
    constructor(p?: IH2R2HReload);

    /** H2R2HReload playerId. */
    public playerId: (number|Long);

    /**
     * Creates a new H2R2HReload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns H2R2HReload instance
     */
    public static create(properties?: IH2R2HReload): H2R2HReload;

    /**
     * Encodes the specified H2R2HReload message. Does not implicitly {@link H2R2HReload.verify|verify} messages.
     * @param m H2R2HReload message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IH2R2HReload, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a H2R2HReload message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns H2R2HReload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): H2R2HReload;
}

/** Properties of a MatchRoomPlayer. */
export interface IMatchRoomPlayer {

    /** MatchRoomPlayer playerId */
    playerId: (number|Long);

    /** MatchRoomPlayer isRobot */
    isRobot: boolean;

    /** MatchRoomPlayer setCardPercentage */
    setCardPercentage: number;
}

/** Represents a MatchRoomPlayer. */
export class MatchRoomPlayer implements IMatchRoomPlayer {

    /**
     * Constructs a new MatchRoomPlayer.
     * @param [p] Properties to set
     */
    constructor(p?: IMatchRoomPlayer);

    /** MatchRoomPlayer playerId. */
    public playerId: (number|Long);

    /** MatchRoomPlayer isRobot. */
    public isRobot: boolean;

    /** MatchRoomPlayer setCardPercentage. */
    public setCardPercentage: number;

    /**
     * Creates a new MatchRoomPlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchRoomPlayer instance
     */
    public static create(properties?: IMatchRoomPlayer): MatchRoomPlayer;

    /**
     * Encodes the specified MatchRoomPlayer message. Does not implicitly {@link MatchRoomPlayer.verify|verify} messages.
     * @param m MatchRoomPlayer message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMatchRoomPlayer, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchRoomPlayer message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MatchRoomPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MatchRoomPlayer;
}

/** Properties of a H2RAutoMatch. */
export interface IH2RAutoMatch {

    /** H2RAutoMatch playType */
    playType: number;

    /** H2RAutoMatch roomType */
    roomType: string;

    /** H2RAutoMatch roomLevel */
    roomLevel: string;

    /** H2RAutoMatch baseScore */
    baseScore: number;

    /** H2RAutoMatch choushui */
    choushui: number;

    /** H2RAutoMatch maxGold */
    maxGold: (number|Long);

    /** H2RAutoMatch minGold */
    minGold: (number|Long);

    /** H2RAutoMatch player */
    player?: (IMatchRoomPlayer[]|null);

    /** H2RAutoMatch strategy */
    strategy?: (number[]|null);

    /** H2RAutoMatch endType */
    endType: number;

    /** H2RAutoMatch playId */
    playId: number;

    /** H2RAutoMatch configScript */
    configScript: string;
}

/** Represents a H2RAutoMatch. */
export class H2RAutoMatch implements IH2RAutoMatch {

    /**
     * Constructs a new H2RAutoMatch.
     * @param [p] Properties to set
     */
    constructor(p?: IH2RAutoMatch);

    /** H2RAutoMatch playType. */
    public playType: number;

    /** H2RAutoMatch roomType. */
    public roomType: string;

    /** H2RAutoMatch roomLevel. */
    public roomLevel: string;

    /** H2RAutoMatch baseScore. */
    public baseScore: number;

    /** H2RAutoMatch choushui. */
    public choushui: number;

    /** H2RAutoMatch maxGold. */
    public maxGold: (number|Long);

    /** H2RAutoMatch minGold. */
    public minGold: (number|Long);

    /** H2RAutoMatch player. */
    public player: IMatchRoomPlayer[];

    /** H2RAutoMatch strategy. */
    public strategy: number[];

    /** H2RAutoMatch endType. */
    public endType: number;

    /** H2RAutoMatch playId. */
    public playId: number;

    /** H2RAutoMatch configScript. */
    public configScript: string;

    /**
     * Creates a new H2RAutoMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns H2RAutoMatch instance
     */
    public static create(properties?: IH2RAutoMatch): H2RAutoMatch;

    /**
     * Encodes the specified H2RAutoMatch message. Does not implicitly {@link H2RAutoMatch.verify|verify} messages.
     * @param m H2RAutoMatch message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IH2RAutoMatch, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a H2RAutoMatch message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns H2RAutoMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): H2RAutoMatch;
}

/** Properties of a R2HAssignmentPlayers. */
export interface IR2HAssignmentPlayers {

    /** R2HAssignmentPlayers roomId */
    roomId: number;

    /** R2HAssignmentPlayers playType */
    playType: number;

    /** R2HAssignmentPlayers roomType */
    roomType: string;

    /** R2HAssignmentPlayers baseScore */
    baseScore: number;

    /** R2HAssignmentPlayers playerIds */
    playerIds?: ((number|Long)[]|null);

    /** R2HAssignmentPlayers scene */
    scene: number;
}

/** Represents a R2HAssignmentPlayers. */
export class R2HAssignmentPlayers implements IR2HAssignmentPlayers {

    /**
     * Constructs a new R2HAssignmentPlayers.
     * @param [p] Properties to set
     */
    constructor(p?: IR2HAssignmentPlayers);

    /** R2HAssignmentPlayers roomId. */
    public roomId: number;

    /** R2HAssignmentPlayers playType. */
    public playType: number;

    /** R2HAssignmentPlayers roomType. */
    public roomType: string;

    /** R2HAssignmentPlayers baseScore. */
    public baseScore: number;

    /** R2HAssignmentPlayers playerIds. */
    public playerIds: (number|Long)[];

    /** R2HAssignmentPlayers scene. */
    public scene: number;

    /**
     * Creates a new R2HAssignmentPlayers instance using the specified properties.
     * @param [properties] Properties to set
     * @returns R2HAssignmentPlayers instance
     */
    public static create(properties?: IR2HAssignmentPlayers): R2HAssignmentPlayers;

    /**
     * Encodes the specified R2HAssignmentPlayers message. Does not implicitly {@link R2HAssignmentPlayers.verify|verify} messages.
     * @param m R2HAssignmentPlayers message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IR2HAssignmentPlayers, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a R2HAssignmentPlayers message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns R2HAssignmentPlayers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): R2HAssignmentPlayers;
}

/** Properties of a H2RAssignmentPlayers. */
export interface IH2RAssignmentPlayers {

    /** H2RAssignmentPlayers roomId */
    roomId: number;

    /** H2RAssignmentPlayers playType */
    playType: number;

    /** H2RAssignmentPlayers baseScore */
    baseScore: number;

    /** H2RAssignmentPlayers roomType */
    roomType: string;

    /** H2RAssignmentPlayers players */
    players?: (IMatchRoomPlayer[]|null);

    /** H2RAssignmentPlayers strategy */
    strategy?: (number[]|null);

    /** H2RAssignmentPlayers scene */
    scene: number;
}

/** Represents a H2RAssignmentPlayers. */
export class H2RAssignmentPlayers implements IH2RAssignmentPlayers {

    /**
     * Constructs a new H2RAssignmentPlayers.
     * @param [p] Properties to set
     */
    constructor(p?: IH2RAssignmentPlayers);

    /** H2RAssignmentPlayers roomId. */
    public roomId: number;

    /** H2RAssignmentPlayers playType. */
    public playType: number;

    /** H2RAssignmentPlayers baseScore. */
    public baseScore: number;

    /** H2RAssignmentPlayers roomType. */
    public roomType: string;

    /** H2RAssignmentPlayers players. */
    public players: IMatchRoomPlayer[];

    /** H2RAssignmentPlayers strategy. */
    public strategy: number[];

    /** H2RAssignmentPlayers scene. */
    public scene: number;

    /**
     * Creates a new H2RAssignmentPlayers instance using the specified properties.
     * @param [properties] Properties to set
     * @returns H2RAssignmentPlayers instance
     */
    public static create(properties?: IH2RAssignmentPlayers): H2RAssignmentPlayers;

    /**
     * Encodes the specified H2RAssignmentPlayers message. Does not implicitly {@link H2RAssignmentPlayers.verify|verify} messages.
     * @param m H2RAssignmentPlayers message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IH2RAssignmentPlayers, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a H2RAssignmentPlayers message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns H2RAssignmentPlayers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): H2RAssignmentPlayers;
}

/** Properties of a R2HAssignmentResult. */
export interface IR2HAssignmentResult {

    /** R2HAssignmentResult roomId */
    roomId: number;

    /** R2HAssignmentResult playType */
    playType: number;

    /** R2HAssignmentResult baseScore */
    baseScore: number;

    /** R2HAssignmentResult roomType */
    roomType: string;

    /** R2HAssignmentResult players */
    players?: (IMatchRoomPlayer[]|null);

    /** R2HAssignmentResult result */
    result: boolean;

    /** R2HAssignmentResult tips */
    tips: string;

    /** R2HAssignmentResult isRoomNotExist */
    isRoomNotExist: boolean;

    /** R2HAssignmentResult sceneType */
    sceneType: number;
}

/** Represents a R2HAssignmentResult. */
export class R2HAssignmentResult implements IR2HAssignmentResult {

    /**
     * Constructs a new R2HAssignmentResult.
     * @param [p] Properties to set
     */
    constructor(p?: IR2HAssignmentResult);

    /** R2HAssignmentResult roomId. */
    public roomId: number;

    /** R2HAssignmentResult playType. */
    public playType: number;

    /** R2HAssignmentResult baseScore. */
    public baseScore: number;

    /** R2HAssignmentResult roomType. */
    public roomType: string;

    /** R2HAssignmentResult players. */
    public players: IMatchRoomPlayer[];

    /** R2HAssignmentResult result. */
    public result: boolean;

    /** R2HAssignmentResult tips. */
    public tips: string;

    /** R2HAssignmentResult isRoomNotExist. */
    public isRoomNotExist: boolean;

    /** R2HAssignmentResult sceneType. */
    public sceneType: number;

    /**
     * Creates a new R2HAssignmentResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns R2HAssignmentResult instance
     */
    public static create(properties?: IR2HAssignmentResult): R2HAssignmentResult;

    /**
     * Encodes the specified R2HAssignmentResult message. Does not implicitly {@link R2HAssignmentResult.verify|verify} messages.
     * @param m R2HAssignmentResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IR2HAssignmentResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a R2HAssignmentResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns R2HAssignmentResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): R2HAssignmentResult;
}

/** Properties of a R2HRemoveRoom. */
export interface IR2HRemoveRoom {

    /** R2HRemoveRoom roomServerId */
    roomServerId: number;

    /** R2HRemoveRoom roomId */
    roomId: number;
}

/** Represents a R2HRemoveRoom. */
export class R2HRemoveRoom implements IR2HRemoveRoom {

    /**
     * Constructs a new R2HRemoveRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IR2HRemoveRoom);

    /** R2HRemoveRoom roomServerId. */
    public roomServerId: number;

    /** R2HRemoveRoom roomId. */
    public roomId: number;

    /**
     * Creates a new R2HRemoveRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns R2HRemoveRoom instance
     */
    public static create(properties?: IR2HRemoveRoom): R2HRemoveRoom;

    /**
     * Encodes the specified R2HRemoveRoom message. Does not implicitly {@link R2HRemoveRoom.verify|verify} messages.
     * @param m R2HRemoveRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IR2HRemoveRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a R2HRemoveRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns R2HRemoveRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): R2HRemoveRoom;
}

/** Properties of a H2RJoinHall. */
export interface IH2RJoinHall {

    /** H2RJoinHall recievePlayerId */
    recievePlayerId: (number|Long);

    /** H2RJoinHall loginPlayerId */
    loginPlayerId: (number|Long);
}

/** Represents a H2RJoinHall. */
export class H2RJoinHall implements IH2RJoinHall {

    /**
     * Constructs a new H2RJoinHall.
     * @param [p] Properties to set
     */
    constructor(p?: IH2RJoinHall);

    /** H2RJoinHall recievePlayerId. */
    public recievePlayerId: (number|Long);

    /** H2RJoinHall loginPlayerId. */
    public loginPlayerId: (number|Long);

    /**
     * Creates a new H2RJoinHall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns H2RJoinHall instance
     */
    public static create(properties?: IH2RJoinHall): H2RJoinHall;

    /**
     * Encodes the specified H2RJoinHall message. Does not implicitly {@link H2RJoinHall.verify|verify} messages.
     * @param m H2RJoinHall message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IH2RJoinHall, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a H2RJoinHall message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns H2RJoinHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): H2RJoinHall;
}

/** Properties of a RoomEndPlayer. */
export interface IRoomEndPlayer {

    /** RoomEndPlayer playerId */
    playerId: (number|Long);

    /** RoomEndPlayer isRobot */
    isRobot: boolean;

    /** RoomEndPlayer score */
    score: (number|Long);
}

/** Represents a RoomEndPlayer. */
export class RoomEndPlayer implements IRoomEndPlayer {

    /**
     * Constructs a new RoomEndPlayer.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomEndPlayer);

    /** RoomEndPlayer playerId. */
    public playerId: (number|Long);

    /** RoomEndPlayer isRobot. */
    public isRobot: boolean;

    /** RoomEndPlayer score. */
    public score: (number|Long);

    /**
     * Creates a new RoomEndPlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomEndPlayer instance
     */
    public static create(properties?: IRoomEndPlayer): RoomEndPlayer;

    /**
     * Encodes the specified RoomEndPlayer message. Does not implicitly {@link RoomEndPlayer.verify|verify} messages.
     * @param m RoomEndPlayer message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomEndPlayer, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomEndPlayer message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomEndPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomEndPlayer;
}

/** Properties of a R2HRoomEnd. */
export interface IR2HRoomEnd {

    /** R2HRoomEnd roomId */
    roomId: number;

    /** R2HRoomEnd playType */
    playType: number;

    /** R2HRoomEnd baseScore */
    baseScore: number;

    /** R2HRoomEnd isGold */
    isGold: boolean;

    /** R2HRoomEnd roomEndPlayers */
    roomEndPlayers?: (IRoomEndPlayer[]|null);

    /** R2HRoomEnd sceneType */
    sceneType: number;

    /** R2HRoomEnd goldRoomType */
    goldRoomType: number;
}

/** Represents a R2HRoomEnd. */
export class R2HRoomEnd implements IR2HRoomEnd {

    /**
     * Constructs a new R2HRoomEnd.
     * @param [p] Properties to set
     */
    constructor(p?: IR2HRoomEnd);

    /** R2HRoomEnd roomId. */
    public roomId: number;

    /** R2HRoomEnd playType. */
    public playType: number;

    /** R2HRoomEnd baseScore. */
    public baseScore: number;

    /** R2HRoomEnd isGold. */
    public isGold: boolean;

    /** R2HRoomEnd roomEndPlayers. */
    public roomEndPlayers: IRoomEndPlayer[];

    /** R2HRoomEnd sceneType. */
    public sceneType: number;

    /** R2HRoomEnd goldRoomType. */
    public goldRoomType: number;

    /**
     * Creates a new R2HRoomEnd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns R2HRoomEnd instance
     */
    public static create(properties?: IR2HRoomEnd): R2HRoomEnd;

    /**
     * Encodes the specified R2HRoomEnd message. Does not implicitly {@link R2HRoomEnd.verify|verify} messages.
     * @param m R2HRoomEnd message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IR2HRoomEnd, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a R2HRoomEnd message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns R2HRoomEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): R2HRoomEnd;
}

/** Properties of a RoomEndRobot. */
export interface IRoomEndRobot {

    /** RoomEndRobot robotId */
    robotId: (number|Long);

    /** RoomEndRobot score */
    score: (number|Long);
}

/** Represents a RoomEndRobot. */
export class RoomEndRobot implements IRoomEndRobot {

    /**
     * Constructs a new RoomEndRobot.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomEndRobot);

    /** RoomEndRobot robotId. */
    public robotId: (number|Long);

    /** RoomEndRobot score. */
    public score: (number|Long);

    /**
     * Creates a new RoomEndRobot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomEndRobot instance
     */
    public static create(properties?: IRoomEndRobot): RoomEndRobot;

    /**
     * Encodes the specified RoomEndRobot message. Does not implicitly {@link RoomEndRobot.verify|verify} messages.
     * @param m RoomEndRobot message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomEndRobot, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomEndRobot message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomEndRobot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomEndRobot;
}

/** Properties of a R2HAIBack. */
export interface IR2HAIBack {

    /** R2HAIBack roomId */
    roomId: number;

    /** R2HAIBack playType */
    playType: number;

    /** R2HAIBack baseScore */
    baseScore: number;

    /** R2HAIBack robot */
    robot?: (IRoomEndRobot[]|null);

    /** R2HAIBack sceneType */
    sceneType: number;

    /** R2HAIBack goldRoomType */
    goldRoomType: string;
}

/** Represents a R2HAIBack. */
export class R2HAIBack implements IR2HAIBack {

    /**
     * Constructs a new R2HAIBack.
     * @param [p] Properties to set
     */
    constructor(p?: IR2HAIBack);

    /** R2HAIBack roomId. */
    public roomId: number;

    /** R2HAIBack playType. */
    public playType: number;

    /** R2HAIBack baseScore. */
    public baseScore: number;

    /** R2HAIBack robot. */
    public robot: IRoomEndRobot[];

    /** R2HAIBack sceneType. */
    public sceneType: number;

    /** R2HAIBack goldRoomType. */
    public goldRoomType: string;

    /**
     * Creates a new R2HAIBack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns R2HAIBack instance
     */
    public static create(properties?: IR2HAIBack): R2HAIBack;

    /**
     * Encodes the specified R2HAIBack message. Does not implicitly {@link R2HAIBack.verify|verify} messages.
     * @param m R2HAIBack message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IR2HAIBack, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a R2HAIBack message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns R2HAIBack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): R2HAIBack;
}

/** Properties of a R2HJoinRoom. */
export interface IR2HJoinRoom {

    /** R2HJoinRoom roleid */
    roleid: (number|Long);

    /** R2HJoinRoom sceneType */
    sceneType: number;

    /** R2HJoinRoom playId */
    playId: number;
}

/** Represents a R2HJoinRoom. */
export class R2HJoinRoom implements IR2HJoinRoom {

    /**
     * Constructs a new R2HJoinRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IR2HJoinRoom);

    /** R2HJoinRoom roleid. */
    public roleid: (number|Long);

    /** R2HJoinRoom sceneType. */
    public sceneType: number;

    /** R2HJoinRoom playId. */
    public playId: number;

    /**
     * Creates a new R2HJoinRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns R2HJoinRoom instance
     */
    public static create(properties?: IR2HJoinRoom): R2HJoinRoom;

    /**
     * Encodes the specified R2HJoinRoom message. Does not implicitly {@link R2HJoinRoom.verify|verify} messages.
     * @param m R2HJoinRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IR2HJoinRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a R2HJoinRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns R2HJoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): R2HJoinRoom;
}

/** Properties of a H2RBroadcast. */
export interface IH2RBroadcast {

    /** H2RBroadcast content */
    content: string;
}

/** Represents a H2RBroadcast. */
export class H2RBroadcast implements IH2RBroadcast {

    /**
     * Constructs a new H2RBroadcast.
     * @param [p] Properties to set
     */
    constructor(p?: IH2RBroadcast);

    /** H2RBroadcast content. */
    public content: string;

    /**
     * Creates a new H2RBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns H2RBroadcast instance
     */
    public static create(properties?: IH2RBroadcast): H2RBroadcast;

    /**
     * Encodes the specified H2RBroadcast message. Does not implicitly {@link H2RBroadcast.verify|verify} messages.
     * @param m H2RBroadcast message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IH2RBroadcast, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a H2RBroadcast message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns H2RBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): H2RBroadcast;
}

/** Properties of a R2HRoomMatchResult. */
export interface IR2HRoomMatchResult {

    /** R2HRoomMatchResult playType */
    playType: number;

    /** R2HRoomMatchResult baseScore */
    baseScore: number;

    /** R2HRoomMatchResult isGold */
    isGold: boolean;

    /** R2HRoomMatchResult playerIds */
    playerIds?: (IMatchRoomPlayer[]|null);

    /** R2HRoomMatchResult result */
    result: boolean;

    /** R2HRoomMatchResult tips */
    tips: string;

    /** R2HRoomMatchResult roomId */
    roomId: number;

    /** R2HRoomMatchResult goldType */
    goldType: string;

    /** R2HRoomMatchResult sceneType */
    sceneType: number;
}

/** Represents a R2HRoomMatchResult. */
export class R2HRoomMatchResult implements IR2HRoomMatchResult {

    /**
     * Constructs a new R2HRoomMatchResult.
     * @param [p] Properties to set
     */
    constructor(p?: IR2HRoomMatchResult);

    /** R2HRoomMatchResult playType. */
    public playType: number;

    /** R2HRoomMatchResult baseScore. */
    public baseScore: number;

    /** R2HRoomMatchResult isGold. */
    public isGold: boolean;

    /** R2HRoomMatchResult playerIds. */
    public playerIds: IMatchRoomPlayer[];

    /** R2HRoomMatchResult result. */
    public result: boolean;

    /** R2HRoomMatchResult tips. */
    public tips: string;

    /** R2HRoomMatchResult roomId. */
    public roomId: number;

    /** R2HRoomMatchResult goldType. */
    public goldType: string;

    /** R2HRoomMatchResult sceneType. */
    public sceneType: number;

    /**
     * Creates a new R2HRoomMatchResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns R2HRoomMatchResult instance
     */
    public static create(properties?: IR2HRoomMatchResult): R2HRoomMatchResult;

    /**
     * Encodes the specified R2HRoomMatchResult message. Does not implicitly {@link R2HRoomMatchResult.verify|verify} messages.
     * @param m R2HRoomMatchResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IR2HRoomMatchResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a R2HRoomMatchResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns R2HRoomMatchResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): R2HRoomMatchResult;
}

/** Properties of a H2RSendGm. */
export interface IH2RSendGm {

    /** H2RSendGm script */
    script: string;
}

/** Represents a H2RSendGm. */
export class H2RSendGm implements IH2RSendGm {

    /**
     * Constructs a new H2RSendGm.
     * @param [p] Properties to set
     */
    constructor(p?: IH2RSendGm);

    /** H2RSendGm script. */
    public script: string;

    /**
     * Creates a new H2RSendGm instance using the specified properties.
     * @param [properties] Properties to set
     * @returns H2RSendGm instance
     */
    public static create(properties?: IH2RSendGm): H2RSendGm;

    /**
     * Encodes the specified H2RSendGm message. Does not implicitly {@link H2RSendGm.verify|verify} messages.
     * @param m H2RSendGm message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IH2RSendGm, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a H2RSendGm message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns H2RSendGm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): H2RSendGm;
}

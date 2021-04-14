import * as $protobuf from "protobufjs";
/** Properties of a ChessRoleData. */
export interface IChessRoleData {

    /** ChessRoleData playerId */
    playerId: string;

    /** ChessRoleData sex */
    sex: number;

    /** ChessRoleData nickName */
    nickName: string;

    /** ChessRoleData roleIcon */
    roleIcon: string;

    /** ChessRoleData ip */
    ip: string;
}

/** Represents a ChessRoleData. */
export class ChessRoleData implements IChessRoleData {

    /**
     * Constructs a new ChessRoleData.
     * @param [p] Properties to set
     */
    constructor(p?: IChessRoleData);

    /** ChessRoleData playerId. */
    public playerId: string;

    /** ChessRoleData sex. */
    public sex: number;

    /** ChessRoleData nickName. */
    public nickName: string;

    /** ChessRoleData roleIcon. */
    public roleIcon: string;

    /** ChessRoleData ip. */
    public ip: string;

    /**
     * Creates a new ChessRoleData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChessRoleData instance
     */
    public static create(properties?: IChessRoleData): ChessRoleData;

    /**
     * Encodes the specified ChessRoleData message. Does not implicitly {@link ChessRoleData.verify|verify} messages.
     * @param m ChessRoleData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChessRoleData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChessRoleData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChessRoleData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChessRoleData;
}

/** Properties of a CoinBaseRoomLevelData. */
export interface ICoinBaseRoomLevelData {

    /** CoinBaseRoomLevelData levelName */
    levelName: string;

    /** CoinBaseRoomLevelData score */
    score: number;

    /** CoinBaseRoomLevelData minCoin */
    minCoin: number;

    /** CoinBaseRoomLevelData maxCoin */
    maxCoin: number;

    /** CoinBaseRoomLevelData onlinePlayers */
    onlinePlayers: number;
}

/** Represents a CoinBaseRoomLevelData. */
export class CoinBaseRoomLevelData implements ICoinBaseRoomLevelData {

    /**
     * Constructs a new CoinBaseRoomLevelData.
     * @param [p] Properties to set
     */
    constructor(p?: ICoinBaseRoomLevelData);

    /** CoinBaseRoomLevelData levelName. */
    public levelName: string;

    /** CoinBaseRoomLevelData score. */
    public score: number;

    /** CoinBaseRoomLevelData minCoin. */
    public minCoin: number;

    /** CoinBaseRoomLevelData maxCoin. */
    public maxCoin: number;

    /** CoinBaseRoomLevelData onlinePlayers. */
    public onlinePlayers: number;

    /**
     * Creates a new CoinBaseRoomLevelData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CoinBaseRoomLevelData instance
     */
    public static create(properties?: ICoinBaseRoomLevelData): CoinBaseRoomLevelData;

    /**
     * Encodes the specified CoinBaseRoomLevelData message. Does not implicitly {@link CoinBaseRoomLevelData.verify|verify} messages.
     * @param m CoinBaseRoomLevelData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICoinBaseRoomLevelData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CoinBaseRoomLevelData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CoinBaseRoomLevelData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CoinBaseRoomLevelData;
}

/** Properties of a CoinBaseRoomTypeData. */
export interface ICoinBaseRoomTypeData {

    /** CoinBaseRoomTypeData roomName */
    roomName: string;

    /** CoinBaseRoomTypeData levelData */
    levelData?: (ICoinBaseRoomLevelData[]|null);
}

/** Represents a CoinBaseRoomTypeData. */
export class CoinBaseRoomTypeData implements ICoinBaseRoomTypeData {

    /**
     * Constructs a new CoinBaseRoomTypeData.
     * @param [p] Properties to set
     */
    constructor(p?: ICoinBaseRoomTypeData);

    /** CoinBaseRoomTypeData roomName. */
    public roomName: string;

    /** CoinBaseRoomTypeData levelData. */
    public levelData: ICoinBaseRoomLevelData[];

    /**
     * Creates a new CoinBaseRoomTypeData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CoinBaseRoomTypeData instance
     */
    public static create(properties?: ICoinBaseRoomTypeData): CoinBaseRoomTypeData;

    /**
     * Encodes the specified CoinBaseRoomTypeData message. Does not implicitly {@link CoinBaseRoomTypeData.verify|verify} messages.
     * @param m CoinBaseRoomTypeData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICoinBaseRoomTypeData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CoinBaseRoomTypeData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CoinBaseRoomTypeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CoinBaseRoomTypeData;
}

/** Properties of a CoinRoomTypeData. */
export interface ICoinRoomTypeData {

    /** CoinRoomTypeData bigPlayName */
    bigPlayName: string;

    /** CoinRoomTypeData typeId */
    typeId: number;

    /** CoinRoomTypeData playName */
    playName: string;

    /** CoinRoomTypeData introduce */
    introduce: string;

    /** CoinRoomTypeData baseRooms */
    baseRooms?: (ICoinBaseRoomTypeData[]|null);
}

/** Represents a CoinRoomTypeData. */
export class CoinRoomTypeData implements ICoinRoomTypeData {

    /**
     * Constructs a new CoinRoomTypeData.
     * @param [p] Properties to set
     */
    constructor(p?: ICoinRoomTypeData);

    /** CoinRoomTypeData bigPlayName. */
    public bigPlayName: string;

    /** CoinRoomTypeData typeId. */
    public typeId: number;

    /** CoinRoomTypeData playName. */
    public playName: string;

    /** CoinRoomTypeData introduce. */
    public introduce: string;

    /** CoinRoomTypeData baseRooms. */
    public baseRooms: ICoinBaseRoomTypeData[];

    /**
     * Creates a new CoinRoomTypeData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CoinRoomTypeData instance
     */
    public static create(properties?: ICoinRoomTypeData): CoinRoomTypeData;

    /**
     * Encodes the specified CoinRoomTypeData message. Does not implicitly {@link CoinRoomTypeData.verify|verify} messages.
     * @param m CoinRoomTypeData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICoinRoomTypeData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CoinRoomTypeData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CoinRoomTypeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CoinRoomTypeData;
}

/** Properties of a CoinRoomBigTypeData. */
export interface ICoinRoomBigTypeData {

    /** CoinRoomBigTypeData typeData */
    typeData?: (ICoinRoomTypeData[]|null);
}

/** Represents a CoinRoomBigTypeData. */
export class CoinRoomBigTypeData implements ICoinRoomBigTypeData {

    /**
     * Constructs a new CoinRoomBigTypeData.
     * @param [p] Properties to set
     */
    constructor(p?: ICoinRoomBigTypeData);

    /** CoinRoomBigTypeData typeData. */
    public typeData: ICoinRoomTypeData[];

    /**
     * Creates a new CoinRoomBigTypeData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CoinRoomBigTypeData instance
     */
    public static create(properties?: ICoinRoomBigTypeData): CoinRoomBigTypeData;

    /**
     * Encodes the specified CoinRoomBigTypeData message. Does not implicitly {@link CoinRoomBigTypeData.verify|verify} messages.
     * @param m CoinRoomBigTypeData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICoinRoomBigTypeData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CoinRoomBigTypeData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CoinRoomBigTypeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CoinRoomBigTypeData;
}

/** Properties of a PushConstance. */
export interface IPushConstance {

    /** PushConstance roleData */
    roleData: IChessRoleData;

    /** PushConstance roomData */
    roomData: ICoinRoomBigTypeData;

    /** PushConstance countdown1 */
    countdown1: number;

    /** PushConstance countdown2 */
    countdown2: number;

    /** PushConstance countdown3 */
    countdown3: number;

    /** PushConstance countdown4 */
    countdown4: number;

    /** PushConstance countdown5 */
    countdown5: number;
}

/** Represents a PushConstance. */
export class PushConstance implements IPushConstance {

    /**
     * Constructs a new PushConstance.
     * @param [p] Properties to set
     */
    constructor(p?: IPushConstance);

    /** PushConstance roleData. */
    public roleData: IChessRoleData;

    /** PushConstance roomData. */
    public roomData: ICoinRoomBigTypeData;

    /** PushConstance countdown1. */
    public countdown1: number;

    /** PushConstance countdown2. */
    public countdown2: number;

    /** PushConstance countdown3. */
    public countdown3: number;

    /** PushConstance countdown4. */
    public countdown4: number;

    /** PushConstance countdown5. */
    public countdown5: number;

    /**
     * Creates a new PushConstance instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushConstance instance
     */
    public static create(properties?: IPushConstance): PushConstance;

    /**
     * Encodes the specified PushConstance message. Does not implicitly {@link PushConstance.verify|verify} messages.
     * @param m PushConstance message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushConstance, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushConstance message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushConstance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushConstance;
}

/** Properties of a Req_AutoMatch. */
export interface IReq_AutoMatch {

    /** Req_AutoMatch roomId */
    roomId: number;

    /** Req_AutoMatch playType */
    playType?: (number|null);
}

/** Represents a Req_AutoMatch. */
export class Req_AutoMatch implements IReq_AutoMatch {

    /**
     * Constructs a new Req_AutoMatch.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_AutoMatch);

    /** Req_AutoMatch roomId. */
    public roomId: number;

    /** Req_AutoMatch playType. */
    public playType: number;

    /**
     * Creates a new Req_AutoMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_AutoMatch instance
     */
    public static create(properties?: IReq_AutoMatch): Req_AutoMatch;

    /**
     * Encodes the specified Req_AutoMatch message. Does not implicitly {@link Req_AutoMatch.verify|verify} messages.
     * @param m Req_AutoMatch message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_AutoMatch, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_AutoMatch message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_AutoMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_AutoMatch;
}

/** Properties of a Rsq_AutoMatch. */
export interface IRsq_AutoMatch {

    /** Rsq_AutoMatch result */
    result: boolean;

    /** Rsq_AutoMatch tip */
    tip?: (string|null);
}

/** Represents a Rsq_AutoMatch. */
export class Rsq_AutoMatch implements IRsq_AutoMatch {

    /**
     * Constructs a new Rsq_AutoMatch.
     * @param [p] Properties to set
     */
    constructor(p?: IRsq_AutoMatch);

    /** Rsq_AutoMatch result. */
    public result: boolean;

    /** Rsq_AutoMatch tip. */
    public tip: string;

    /**
     * Creates a new Rsq_AutoMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsq_AutoMatch instance
     */
    public static create(properties?: IRsq_AutoMatch): Rsq_AutoMatch;

    /**
     * Encodes the specified Rsq_AutoMatch message. Does not implicitly {@link Rsq_AutoMatch.verify|verify} messages.
     * @param m Rsq_AutoMatch message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsq_AutoMatch, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsq_AutoMatch message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsq_AutoMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsq_AutoMatch;
}

/** Properties of a Rsq_EnterRoom. */
export interface IRsq_EnterRoom {

    /** Rsq_EnterRoom ip */
    ip: string;

    /** Rsq_EnterRoom port */
    port: number;
}

/** Represents a Rsq_EnterRoom. */
export class Rsq_EnterRoom implements IRsq_EnterRoom {

    /**
     * Constructs a new Rsq_EnterRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IRsq_EnterRoom);

    /** Rsq_EnterRoom ip. */
    public ip: string;

    /** Rsq_EnterRoom port. */
    public port: number;

    /**
     * Creates a new Rsq_EnterRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsq_EnterRoom instance
     */
    public static create(properties?: IRsq_EnterRoom): Rsq_EnterRoom;

    /**
     * Encodes the specified Rsq_EnterRoom message. Does not implicitly {@link Rsq_EnterRoom.verify|verify} messages.
     * @param m Rsq_EnterRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsq_EnterRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsq_EnterRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsq_EnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsq_EnterRoom;
}

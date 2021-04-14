import * as $protobuf from "protobufjs";
/** Properties of a BuYuPlayerInfo. */
export interface IBuYuPlayerInfo {

    /** BuYuPlayerInfo playerId */
    playerId: string;

    /** BuYuPlayerInfo seatid */
    seatid: number;

    /** BuYuPlayerInfo gold */
    gold: number;

    /** BuYuPlayerInfo ptType */
    ptType: number;

    /** BuYuPlayerInfo type */
    type: number;
}

/** Represents a BuYuPlayerInfo. */
export class BuYuPlayerInfo implements IBuYuPlayerInfo {

    /**
     * Constructs a new BuYuPlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBuYuPlayerInfo);

    /** BuYuPlayerInfo playerId. */
    public playerId: string;

    /** BuYuPlayerInfo seatid. */
    public seatid: number;

    /** BuYuPlayerInfo gold. */
    public gold: number;

    /** BuYuPlayerInfo ptType. */
    public ptType: number;

    /** BuYuPlayerInfo type. */
    public type: number;

    /**
     * Creates a new BuYuPlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuYuPlayerInfo instance
     */
    public static create(properties?: IBuYuPlayerInfo): BuYuPlayerInfo;

    /**
     * Encodes the specified BuYuPlayerInfo message. Does not implicitly {@link BuYuPlayerInfo.verify|verify} messages.
     * @param m BuYuPlayerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBuYuPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuYuPlayerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BuYuPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BuYuPlayerInfo;
}

/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo playerInfos */
    playerInfos?: (IBuYuPlayerInfo[]|null);

    /** RoomInfo serverTime */
    serverTime: string;

    /** RoomInfo RoomID */
    RoomID: number;
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomInfo);

    /** RoomInfo playerInfos. */
    public playerInfos: IBuYuPlayerInfo[];

    /** RoomInfo serverTime. */
    public serverTime: string;

    /** RoomInfo RoomID. */
    public RoomID: number;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfo instance
     */
    public static create(properties?: IRoomInfo): RoomInfo;

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param m RoomInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomInfo;
}

/** Properties of a PlayerJoin. */
export interface IPlayerJoin {

    /** PlayerJoin playerInfos */
    playerInfos: IBuYuPlayerInfo;
}

/** Represents a PlayerJoin. */
export class PlayerJoin implements IPlayerJoin {

    /**
     * Constructs a new PlayerJoin.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerJoin);

    /** PlayerJoin playerInfos. */
    public playerInfos: IBuYuPlayerInfo;

    /**
     * Creates a new PlayerJoin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerJoin instance
     */
    public static create(properties?: IPlayerJoin): PlayerJoin;

    /**
     * Encodes the specified PlayerJoin message. Does not implicitly {@link PlayerJoin.verify|verify} messages.
     * @param m PlayerJoin message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerJoin, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerJoin message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerJoin;
}

/** Properties of a PlayerLeave. */
export interface IPlayerLeave {

    /** PlayerLeave playerId */
    playerId: string;

    /** PlayerLeave seatid */
    seatid: number;
}

/** Represents a PlayerLeave. */
export class PlayerLeave implements IPlayerLeave {

    /**
     * Constructs a new PlayerLeave.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerLeave);

    /** PlayerLeave playerId. */
    public playerId: string;

    /** PlayerLeave seatid. */
    public seatid: number;

    /**
     * Creates a new PlayerLeave instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerLeave instance
     */
    public static create(properties?: IPlayerLeave): PlayerLeave;

    /**
     * Encodes the specified PlayerLeave message. Does not implicitly {@link PlayerLeave.verify|verify} messages.
     * @param m PlayerLeave message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerLeave, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerLeave message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerLeave;
}

/** Properties of an AsycFishInfo. */
export interface IAsycFishInfo {

    /** AsycFishInfo FishID */
    FishID: number;

    /** AsycFishInfo GroupID */
    GroupID: number;

    /** AsycFishInfo GroupDataID */
    GroupDataID: number;

    /** AsycFishInfo PathIdx */
    PathIdx: number;

    /** AsycFishInfo PosIdx */
    PosIdx: number;

    /** AsycFishInfo FishTime */
    FishTime: number;
}

/** Represents an AsycFishInfo. */
export class AsycFishInfo implements IAsycFishInfo {

    /**
     * Constructs a new AsycFishInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IAsycFishInfo);

    /** AsycFishInfo FishID. */
    public FishID: number;

    /** AsycFishInfo GroupID. */
    public GroupID: number;

    /** AsycFishInfo GroupDataID. */
    public GroupDataID: number;

    /** AsycFishInfo PathIdx. */
    public PathIdx: number;

    /** AsycFishInfo PosIdx. */
    public PosIdx: number;

    /** AsycFishInfo FishTime. */
    public FishTime: number;

    /**
     * Creates a new AsycFishInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AsycFishInfo instance
     */
    public static create(properties?: IAsycFishInfo): AsycFishInfo;

    /**
     * Encodes the specified AsycFishInfo message. Does not implicitly {@link AsycFishInfo.verify|verify} messages.
     * @param m AsycFishInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAsycFishInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AsycFishInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AsycFishInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AsycFishInfo;
}

/** Properties of an AppearFishInfo. */
export interface IAppearFishInfo {

    /** AppearFishInfo GroupID */
    GroupID: number;

    /** AppearFishInfo Startid */
    Startid: number;

    /** AppearFishInfo PathIdx */
    PathIdx: number;

    /** AppearFishInfo serverTime */
    serverTime: string;
}

/** Represents an AppearFishInfo. */
export class AppearFishInfo implements IAppearFishInfo {

    /**
     * Constructs a new AppearFishInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IAppearFishInfo);

    /** AppearFishInfo GroupID. */
    public GroupID: number;

    /** AppearFishInfo Startid. */
    public Startid: number;

    /** AppearFishInfo PathIdx. */
    public PathIdx: number;

    /** AppearFishInfo serverTime. */
    public serverTime: string;

    /**
     * Creates a new AppearFishInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AppearFishInfo instance
     */
    public static create(properties?: IAppearFishInfo): AppearFishInfo;

    /**
     * Encodes the specified AppearFishInfo message. Does not implicitly {@link AppearFishInfo.verify|verify} messages.
     * @param m AppearFishInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAppearFishInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AppearFishInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AppearFishInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AppearFishInfo;
}

/** Properties of a LeaveRoomReq. */
export interface ILeaveRoomReq {
}

/** Represents a LeaveRoomReq. */
export class LeaveRoomReq implements ILeaveRoomReq {

    /**
     * Constructs a new LeaveRoomReq.
     * @param [p] Properties to set
     */
    constructor(p?: ILeaveRoomReq);

    /**
     * Creates a new LeaveRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LeaveRoomReq instance
     */
    public static create(properties?: ILeaveRoomReq): LeaveRoomReq;

    /**
     * Encodes the specified LeaveRoomReq message. Does not implicitly {@link LeaveRoomReq.verify|verify} messages.
     * @param m LeaveRoomReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILeaveRoomReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LeaveRoomReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LeaveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LeaveRoomReq;
}

/** Properties of a LeaveRoomRsp. */
export interface ILeaveRoomRsp {

    /** LeaveRoomRsp success */
    success: boolean;

    /** LeaveRoomRsp tip */
    tip: string;
}

/** Represents a LeaveRoomRsp. */
export class LeaveRoomRsp implements ILeaveRoomRsp {

    /**
     * Constructs a new LeaveRoomRsp.
     * @param [p] Properties to set
     */
    constructor(p?: ILeaveRoomRsp);

    /** LeaveRoomRsp success. */
    public success: boolean;

    /** LeaveRoomRsp tip. */
    public tip: string;

    /**
     * Creates a new LeaveRoomRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LeaveRoomRsp instance
     */
    public static create(properties?: ILeaveRoomRsp): LeaveRoomRsp;

    /**
     * Encodes the specified LeaveRoomRsp message. Does not implicitly {@link LeaveRoomRsp.verify|verify} messages.
     * @param m LeaveRoomRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILeaveRoomRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LeaveRoomRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LeaveRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LeaveRoomRsp;
}

/** Properties of a SheetBuleet. */
export interface ISheetBuleet {

    /** SheetBuleet angle */
    angle: number;

    /** SheetBuleet dirX */
    dirX: number;

    /** SheetBuleet dirY */
    dirY: number;

    /** SheetBuleet LockFishID */
    LockFishID: number;
}

/** Represents a SheetBuleet. */
export class SheetBuleet implements ISheetBuleet {

    /**
     * Constructs a new SheetBuleet.
     * @param [p] Properties to set
     */
    constructor(p?: ISheetBuleet);

    /** SheetBuleet angle. */
    public angle: number;

    /** SheetBuleet dirX. */
    public dirX: number;

    /** SheetBuleet dirY. */
    public dirY: number;

    /** SheetBuleet LockFishID. */
    public LockFishID: number;

    /**
     * Creates a new SheetBuleet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SheetBuleet instance
     */
    public static create(properties?: ISheetBuleet): SheetBuleet;

    /**
     * Encodes the specified SheetBuleet message. Does not implicitly {@link SheetBuleet.verify|verify} messages.
     * @param m SheetBuleet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISheetBuleet, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SheetBuleet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SheetBuleet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SheetBuleet;
}

/** Properties of a SheetBuleetBack. */
export interface ISheetBuleetBack {

    /** SheetBuleetBack bulletID */
    bulletID: number;

    /** SheetBuleetBack seatid */
    seatid: number;

    /** SheetBuleetBack angle */
    angle: number;

    /** SheetBuleetBack LockFishID */
    LockFishID: number;

    /** SheetBuleetBack dirX */
    dirX: number;

    /** SheetBuleetBack dirY */
    dirY: number;

    /** SheetBuleetBack serverTime */
    serverTime: string;

    /** SheetBuleetBack bulletGold */
    bulletGold: number;

    /** SheetBuleetBack type */
    type: number;

    /** SheetBuleetBack playerGold */
    playerGold: number;
}

/** Represents a SheetBuleetBack. */
export class SheetBuleetBack implements ISheetBuleetBack {

    /**
     * Constructs a new SheetBuleetBack.
     * @param [p] Properties to set
     */
    constructor(p?: ISheetBuleetBack);

    /** SheetBuleetBack bulletID. */
    public bulletID: number;

    /** SheetBuleetBack seatid. */
    public seatid: number;

    /** SheetBuleetBack angle. */
    public angle: number;

    /** SheetBuleetBack LockFishID. */
    public LockFishID: number;

    /** SheetBuleetBack dirX. */
    public dirX: number;

    /** SheetBuleetBack dirY. */
    public dirY: number;

    /** SheetBuleetBack serverTime. */
    public serverTime: string;

    /** SheetBuleetBack bulletGold. */
    public bulletGold: number;

    /** SheetBuleetBack type. */
    public type: number;

    /** SheetBuleetBack playerGold. */
    public playerGold: number;

    /**
     * Creates a new SheetBuleetBack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SheetBuleetBack instance
     */
    public static create(properties?: ISheetBuleetBack): SheetBuleetBack;

    /**
     * Encodes the specified SheetBuleetBack message. Does not implicitly {@link SheetBuleetBack.verify|verify} messages.
     * @param m SheetBuleetBack message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISheetBuleetBack, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SheetBuleetBack message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SheetBuleetBack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SheetBuleetBack;
}

/** Properties of a SyncBulletData. */
export interface ISyncBulletData {

    /** SyncBulletData bulletID */
    bulletID: number;

    /** SyncBulletData bulletType */
    bulletType: number;

    /** SyncBulletData time */
    time: number;

    /** SyncBulletData seatid */
    seatid: number;

    /** SyncBulletData angle */
    angle: number;

    /** SyncBulletData LockFishID */
    LockFishID: number;

    /** SyncBulletData dirX */
    dirX: number;

    /** SyncBulletData dirY */
    dirY: number;

    /** SyncBulletData type */
    type: number;
}

/** Represents a SyncBulletData. */
export class SyncBulletData implements ISyncBulletData {

    /**
     * Constructs a new SyncBulletData.
     * @param [p] Properties to set
     */
    constructor(p?: ISyncBulletData);

    /** SyncBulletData bulletID. */
    public bulletID: number;

    /** SyncBulletData bulletType. */
    public bulletType: number;

    /** SyncBulletData time. */
    public time: number;

    /** SyncBulletData seatid. */
    public seatid: number;

    /** SyncBulletData angle. */
    public angle: number;

    /** SyncBulletData LockFishID. */
    public LockFishID: number;

    /** SyncBulletData dirX. */
    public dirX: number;

    /** SyncBulletData dirY. */
    public dirY: number;

    /** SyncBulletData type. */
    public type: number;

    /**
     * Creates a new SyncBulletData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncBulletData instance
     */
    public static create(properties?: ISyncBulletData): SyncBulletData;

    /**
     * Encodes the specified SyncBulletData message. Does not implicitly {@link SyncBulletData.verify|verify} messages.
     * @param m SyncBulletData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISyncBulletData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncBulletData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SyncBulletData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SyncBulletData;
}

/** Properties of a SyncBullet. */
export interface ISyncBullet {

    /** SyncBullet bullets */
    bullets?: (ISyncBulletData[]|null);
}

/** Represents a SyncBullet. */
export class SyncBullet implements ISyncBullet {

    /**
     * Constructs a new SyncBullet.
     * @param [p] Properties to set
     */
    constructor(p?: ISyncBullet);

    /** SyncBullet bullets. */
    public bullets: ISyncBulletData[];

    /**
     * Creates a new SyncBullet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncBullet instance
     */
    public static create(properties?: ISyncBullet): SyncBullet;

    /**
     * Encodes the specified SyncBullet message. Does not implicitly {@link SyncBullet.verify|verify} messages.
     * @param m SyncBullet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISyncBullet, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncBullet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SyncBullet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SyncBullet;
}

/** Properties of a BulletBoom. */
export interface IBulletBoom {

    /** BulletBoom bulletID */
    bulletID: number;

    /** BulletBoom FishID */
    FishID: number;

    /** BulletBoom isDead */
    isDead: boolean;

    /** BulletBoom gold */
    gold: number;

    /** BulletBoom seatid */
    seatid: number;

    /** BulletBoom playerId */
    playerId: string;

    /** BulletBoom playerGold */
    playerGold: number;
}

/** Represents a BulletBoom. */
export class BulletBoom implements IBulletBoom {

    /**
     * Constructs a new BulletBoom.
     * @param [p] Properties to set
     */
    constructor(p?: IBulletBoom);

    /** BulletBoom bulletID. */
    public bulletID: number;

    /** BulletBoom FishID. */
    public FishID: number;

    /** BulletBoom isDead. */
    public isDead: boolean;

    /** BulletBoom gold. */
    public gold: number;

    /** BulletBoom seatid. */
    public seatid: number;

    /** BulletBoom playerId. */
    public playerId: string;

    /** BulletBoom playerGold. */
    public playerGold: number;

    /**
     * Creates a new BulletBoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BulletBoom instance
     */
    public static create(properties?: IBulletBoom): BulletBoom;

    /**
     * Encodes the specified BulletBoom message. Does not implicitly {@link BulletBoom.verify|verify} messages.
     * @param m BulletBoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBulletBoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BulletBoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BulletBoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BulletBoom;
}

/** Properties of a SpecialDead. */
export interface ISpecialDead {

    /** SpecialDead FishIds */
    FishIds?: (number[]|null);

    /** SpecialDead Golds */
    Golds?: (number[]|null);

    /** SpecialDead type */
    type: number;

    /** SpecialDead seatid */
    seatid: number;
}

/** Represents a SpecialDead. */
export class SpecialDead implements ISpecialDead {

    /**
     * Constructs a new SpecialDead.
     * @param [p] Properties to set
     */
    constructor(p?: ISpecialDead);

    /** SpecialDead FishIds. */
    public FishIds: number[];

    /** SpecialDead Golds. */
    public Golds: number[];

    /** SpecialDead type. */
    public type: number;

    /** SpecialDead seatid. */
    public seatid: number;

    /**
     * Creates a new SpecialDead instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SpecialDead instance
     */
    public static create(properties?: ISpecialDead): SpecialDead;

    /**
     * Encodes the specified SpecialDead message. Does not implicitly {@link SpecialDead.verify|verify} messages.
     * @param m SpecialDead message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISpecialDead, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SpecialDead message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SpecialDead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SpecialDead;
}

/** Properties of a PTUpDown. */
export interface IPTUpDown {

    /** PTUpDown PtType */
    PtType: number;
}

/** Represents a PTUpDown. */
export class PTUpDown implements IPTUpDown {

    /**
     * Constructs a new PTUpDown.
     * @param [p] Properties to set
     */
    constructor(p?: IPTUpDown);

    /** PTUpDown PtType. */
    public PtType: number;

    /**
     * Creates a new PTUpDown instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PTUpDown instance
     */
    public static create(properties?: IPTUpDown): PTUpDown;

    /**
     * Encodes the specified PTUpDown message. Does not implicitly {@link PTUpDown.verify|verify} messages.
     * @param m PTUpDown message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPTUpDown, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PTUpDown message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PTUpDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PTUpDown;
}

/** Properties of a PTUpDownBack. */
export interface IPTUpDownBack {

    /** PTUpDownBack seatid */
    seatid: number;

    /** PTUpDownBack PtType */
    PtType: number;
}

/** Represents a PTUpDownBack. */
export class PTUpDownBack implements IPTUpDownBack {

    /**
     * Constructs a new PTUpDownBack.
     * @param [p] Properties to set
     */
    constructor(p?: IPTUpDownBack);

    /** PTUpDownBack seatid. */
    public seatid: number;

    /** PTUpDownBack PtType. */
    public PtType: number;

    /**
     * Creates a new PTUpDownBack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PTUpDownBack instance
     */
    public static create(properties?: IPTUpDownBack): PTUpDownBack;

    /**
     * Encodes the specified PTUpDownBack message. Does not implicitly {@link PTUpDownBack.verify|verify} messages.
     * @param m PTUpDownBack message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPTUpDownBack, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PTUpDownBack message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PTUpDownBack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PTUpDownBack;
}

/** Properties of a FishBossTip. */
export interface IFishBossTip {

    /** FishBossTip typeTips */
    typeTips: number;
}

/** Represents a FishBossTip. */
export class FishBossTip implements IFishBossTip {

    /**
     * Constructs a new FishBossTip.
     * @param [p] Properties to set
     */
    constructor(p?: IFishBossTip);

    /** FishBossTip typeTips. */
    public typeTips: number;

    /**
     * Creates a new FishBossTip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishBossTip instance
     */
    public static create(properties?: IFishBossTip): FishBossTip;

    /**
     * Encodes the specified FishBossTip message. Does not implicitly {@link FishBossTip.verify|verify} messages.
     * @param m FishBossTip message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFishBossTip, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishBossTip message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FishBossTip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FishBossTip;
}

/** Properties of a FireReq. */
export interface IFireReq {

    /** FireReq type */
    type: number;
}

/** Represents a FireReq. */
export class FireReq implements IFireReq {

    /**
     * Constructs a new FireReq.
     * @param [p] Properties to set
     */
    constructor(p?: IFireReq);

    /** FireReq type. */
    public type: number;

    /**
     * Creates a new FireReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FireReq instance
     */
    public static create(properties?: IFireReq): FireReq;

    /**
     * Encodes the specified FireReq message. Does not implicitly {@link FireReq.verify|verify} messages.
     * @param m FireReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFireReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FireReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FireReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FireReq;
}

/** Properties of a FireRsp. */
export interface IFireRsp {

    /** FireRsp type */
    type: number;

    /** FireRsp seatid */
    seatid: number;
}

/** Represents a FireRsp. */
export class FireRsp implements IFireRsp {

    /**
     * Constructs a new FireRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IFireRsp);

    /** FireRsp type. */
    public type: number;

    /** FireRsp seatid. */
    public seatid: number;

    /**
     * Creates a new FireRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FireRsp instance
     */
    public static create(properties?: IFireRsp): FireRsp;

    /**
     * Encodes the specified FireRsp message. Does not implicitly {@link FireRsp.verify|verify} messages.
     * @param m FireRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFireRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FireRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FireRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FireRsp;
}

/** Properties of a BulletGoldBack. */
export interface IBulletGoldBack {

    /** BulletGoldBack gold */
    gold: number;

    /** BulletGoldBack seatid */
    seatid: number;

    /** BulletGoldBack playerId */
    playerId: string;

    /** BulletGoldBack playerGold */
    playerGold: number;
}

/** Represents a BulletGoldBack. */
export class BulletGoldBack implements IBulletGoldBack {

    /**
     * Constructs a new BulletGoldBack.
     * @param [p] Properties to set
     */
    constructor(p?: IBulletGoldBack);

    /** BulletGoldBack gold. */
    public gold: number;

    /** BulletGoldBack seatid. */
    public seatid: number;

    /** BulletGoldBack playerId. */
    public playerId: string;

    /** BulletGoldBack playerGold. */
    public playerGold: number;

    /**
     * Creates a new BulletGoldBack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BulletGoldBack instance
     */
    public static create(properties?: IBulletGoldBack): BulletGoldBack;

    /**
     * Encodes the specified BulletGoldBack message. Does not implicitly {@link BulletGoldBack.verify|verify} messages.
     * @param m BulletGoldBack message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBulletGoldBack, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BulletGoldBack message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BulletGoldBack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BulletGoldBack;
}

/** Properties of a FishPos. */
export interface IFishPos {

    /** FishPos fishid */
    fishid: number;

    /** FishPos x */
    x: number;

    /** FishPos y */
    y: number;

    /** FishPos rotation */
    rotation: number;

    /** FishPos boxx */
    boxx: number;

    /** FishPos boxy */
    boxy: number;

    /** FishPos time */
    time: number;
}

/** Represents a FishPos. */
export class FishPos implements IFishPos {

    /**
     * Constructs a new FishPos.
     * @param [p] Properties to set
     */
    constructor(p?: IFishPos);

    /** FishPos fishid. */
    public fishid: number;

    /** FishPos x. */
    public x: number;

    /** FishPos y. */
    public y: number;

    /** FishPos rotation. */
    public rotation: number;

    /** FishPos boxx. */
    public boxx: number;

    /** FishPos boxy. */
    public boxy: number;

    /** FishPos time. */
    public time: number;

    /**
     * Creates a new FishPos instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishPos instance
     */
    public static create(properties?: IFishPos): FishPos;

    /**
     * Encodes the specified FishPos message. Does not implicitly {@link FishPos.verify|verify} messages.
     * @param m FishPos message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFishPos, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishPos message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FishPos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FishPos;
}

/** Properties of a bulletPos. */
export interface IbulletPos {

    /** bulletPos bulletId */
    bulletId: number;

    /** bulletPos x */
    x: number;

    /** bulletPos y */
    y: number;

    /** bulletPos rotation */
    rotation: number;
}

/** Represents a bulletPos. */
export class bulletPos implements IbulletPos {

    /**
     * Constructs a new bulletPos.
     * @param [p] Properties to set
     */
    constructor(p?: IbulletPos);

    /** bulletPos bulletId. */
    public bulletId: number;

    /** bulletPos x. */
    public x: number;

    /** bulletPos y. */
    public y: number;

    /** bulletPos rotation. */
    public rotation: number;

    /**
     * Creates a new bulletPos instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bulletPos instance
     */
    public static create(properties?: IbulletPos): bulletPos;

    /**
     * Encodes the specified bulletPos message. Does not implicitly {@link bulletPos.verify|verify} messages.
     * @param m bulletPos message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IbulletPos, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bulletPos message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns bulletPos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): bulletPos;
}

/** Properties of a FishPoss. */
export interface IFishPoss {

    /** FishPoss list */
    list?: (IFishPos[]|null);

    /** FishPoss list2 */
    list2?: (IbulletPos[]|null);
}

/** Represents a FishPoss. */
export class FishPoss implements IFishPoss {

    /**
     * Constructs a new FishPoss.
     * @param [p] Properties to set
     */
    constructor(p?: IFishPoss);

    /** FishPoss list. */
    public list: IFishPos[];

    /** FishPoss list2. */
    public list2: IbulletPos[];

    /**
     * Creates a new FishPoss instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishPoss instance
     */
    public static create(properties?: IFishPoss): FishPoss;

    /**
     * Encodes the specified FishPoss message. Does not implicitly {@link FishPoss.verify|verify} messages.
     * @param m FishPoss message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFishPoss, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishPoss message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FishPoss
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FishPoss;
}

/** Properties of a reqRoomInfo. */
export interface IreqRoomInfo {

    /** reqRoomInfo RoomID */
    RoomID: number;
}

/** Represents a reqRoomInfo. */
export class reqRoomInfo implements IreqRoomInfo {

    /**
     * Constructs a new reqRoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IreqRoomInfo);

    /** reqRoomInfo RoomID. */
    public RoomID: number;

    /**
     * Creates a new reqRoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqRoomInfo instance
     */
    public static create(properties?: IreqRoomInfo): reqRoomInfo;

    /**
     * Encodes the specified reqRoomInfo message. Does not implicitly {@link reqRoomInfo.verify|verify} messages.
     * @param m reqRoomInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IreqRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqRoomInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns reqRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): reqRoomInfo;
}

/** Properties of a rspRoomInfo. */
export interface IrspRoomInfo {

    /** rspRoomInfo playerInfos */
    playerInfos?: (IBuYuPlayerInfo[]|null);

    /** rspRoomInfo serverTime */
    serverTime: string;

    /** rspRoomInfo RoomID */
    RoomID: number;
}

/** Represents a rspRoomInfo. */
export class rspRoomInfo implements IrspRoomInfo {

    /**
     * Constructs a new rspRoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IrspRoomInfo);

    /** rspRoomInfo playerInfos. */
    public playerInfos: IBuYuPlayerInfo[];

    /** rspRoomInfo serverTime. */
    public serverTime: string;

    /** rspRoomInfo RoomID. */
    public RoomID: number;

    /**
     * Creates a new rspRoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns rspRoomInfo instance
     */
    public static create(properties?: IrspRoomInfo): rspRoomInfo;

    /**
     * Encodes the specified rspRoomInfo message. Does not implicitly {@link rspRoomInfo.verify|verify} messages.
     * @param m rspRoomInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IrspRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a rspRoomInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns rspRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): rspRoomInfo;
}

/** Properties of a ChangeTable. */
export interface IChangeTable {
}

/** Represents a ChangeTable. */
export class ChangeTable implements IChangeTable {

    /**
     * Constructs a new ChangeTable.
     * @param [p] Properties to set
     */
    constructor(p?: IChangeTable);

    /**
     * Creates a new ChangeTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeTable instance
     */
    public static create(properties?: IChangeTable): ChangeTable;

    /**
     * Encodes the specified ChangeTable message. Does not implicitly {@link ChangeTable.verify|verify} messages.
     * @param m ChangeTable message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChangeTable, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeTable message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChangeTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChangeTable;
}

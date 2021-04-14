import * as $protobuf from "protobufjs";
/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

    /** PlayerInfo pos */
    pos: number;

    /** PlayerInfo id */
    id: string;

    /** PlayerInfo sex */
    sex: number;

    /** PlayerInfo name */
    name: string;

    /** PlayerInfo headUrl */
    headUrl: string;

    /** PlayerInfo vip */
    vip: number;

    /** PlayerInfo isJudge */
    isJudge: boolean;

    /** PlayerInfo gold */
    gold: number;
}

/** Represents a PlayerInfo. */
export class PlayerInfo implements IPlayerInfo {

    /**
     * Constructs a new PlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerInfo);

    /** PlayerInfo pos. */
    public pos: number;

    /** PlayerInfo id. */
    public id: string;

    /** PlayerInfo sex. */
    public sex: number;

    /** PlayerInfo name. */
    public name: string;

    /** PlayerInfo headUrl. */
    public headUrl: string;

    /** PlayerInfo vip. */
    public vip: number;

    /** PlayerInfo isJudge. */
    public isJudge: boolean;

    /** PlayerInfo gold. */
    public gold: number;

    /**
     * Creates a new PlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerInfo instance
     */
    public static create(properties?: IPlayerInfo): PlayerInfo;

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @param m PlayerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerInfo;
}

/** Properties of a PlayerStatus. */
export interface IPlayerStatus {

    /** PlayerStatus playerId */
    playerId: string;

    /** PlayerStatus status */
    status: number;
}

/** Represents a PlayerStatus. */
export class PlayerStatus implements IPlayerStatus {

    /**
     * Constructs a new PlayerStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerStatus);

    /** PlayerStatus playerId. */
    public playerId: string;

    /** PlayerStatus status. */
    public status: number;

    /**
     * Creates a new PlayerStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerStatus instance
     */
    public static create(properties?: IPlayerStatus): PlayerStatus;

    /**
     * Encodes the specified PlayerStatus message. Does not implicitly {@link PlayerStatus.verify|verify} messages.
     * @param m PlayerStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerStatus;
}

/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo name */
    name: string;

    /** RoomInfo score */
    score: number;

    /** RoomInfo playerCnt */
    playerCnt: number;

    /** RoomInfo playerInfo */
    playerInfo?: (IPlayerInfo[]|null);
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomInfo);

    /** RoomInfo name. */
    public name: string;

    /** RoomInfo score. */
    public score: number;

    /** RoomInfo playerCnt. */
    public playerCnt: number;

    /** RoomInfo playerInfo. */
    public playerInfo: IPlayerInfo[];

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

/** Properties of a TingGroupInfo. */
export interface ITingGroupInfo {

    /** TingGroupInfo num */
    num: number;

    /** TingGroupInfo id */
    id?: (number|null);

    /** TingGroupInfo fan */
    fan?: (number|null);
}

/** Represents a TingGroupInfo. */
export class TingGroupInfo implements ITingGroupInfo {

    /**
     * Constructs a new TingGroupInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ITingGroupInfo);

    /** TingGroupInfo num. */
    public num: number;

    /** TingGroupInfo id. */
    public id: number;

    /** TingGroupInfo fan. */
    public fan: number;

    /**
     * Creates a new TingGroupInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TingGroupInfo instance
     */
    public static create(properties?: ITingGroupInfo): TingGroupInfo;

    /**
     * Encodes the specified TingGroupInfo message. Does not implicitly {@link TingGroupInfo.verify|verify} messages.
     * @param m TingGroupInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITingGroupInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TingGroupInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TingGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TingGroupInfo;
}

/** Properties of a SuggestTingData. */
export interface ISuggestTingData {

    /** SuggestTingData canPutCards */
    canPutCards: number;

    /** SuggestTingData tingCard */
    tingCard?: (ITingGroupInfo[]|null);
}

/** Represents a SuggestTingData. */
export class SuggestTingData implements ISuggestTingData {

    /**
     * Constructs a new SuggestTingData.
     * @param [p] Properties to set
     */
    constructor(p?: ISuggestTingData);

    /** SuggestTingData canPutCards. */
    public canPutCards: number;

    /** SuggestTingData tingCard. */
    public tingCard: ITingGroupInfo[];

    /**
     * Creates a new SuggestTingData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SuggestTingData instance
     */
    public static create(properties?: ISuggestTingData): SuggestTingData;

    /**
     * Encodes the specified SuggestTingData message. Does not implicitly {@link SuggestTingData.verify|verify} messages.
     * @param m SuggestTingData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISuggestTingData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SuggestTingData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SuggestTingData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SuggestTingData;
}

/** Properties of a CardGroupInfo. */
export interface ICardGroupInfo {

    /** CardGroupInfo id */
    id?: (number|null);

    /** CardGroupInfo uId */
    uId?: (string|null);

    /** CardGroupInfo type */
    type?: (number|null);

    /** CardGroupInfo cards */
    cards?: (number[]|null);

    /** CardGroupInfo fromId */
    fromId?: (string|null);

    /** CardGroupInfo fromCardId */
    fromCardId?: (number|null);
}

/** Represents a CardGroupInfo. */
export class CardGroupInfo implements ICardGroupInfo {

    /**
     * Constructs a new CardGroupInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ICardGroupInfo);

    /** CardGroupInfo id. */
    public id: number;

    /** CardGroupInfo uId. */
    public uId: string;

    /** CardGroupInfo type. */
    public type: number;

    /** CardGroupInfo cards. */
    public cards: number[];

    /** CardGroupInfo fromId. */
    public fromId: string;

    /** CardGroupInfo fromCardId. */
    public fromCardId: number;

    /**
     * Creates a new CardGroupInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CardGroupInfo instance
     */
    public static create(properties?: ICardGroupInfo): CardGroupInfo;

    /**
     * Encodes the specified CardGroupInfo message. Does not implicitly {@link CardGroupInfo.verify|verify} messages.
     * @param m CardGroupInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICardGroupInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardGroupInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CardGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CardGroupInfo;
}

/** Properties of a RoomPlayerCardInfo. */
export interface IRoomPlayerCardInfo {

    /** RoomPlayerCardInfo uId */
    uId: string;

    /** RoomPlayerCardInfo tingInfo */
    tingInfo?: (ITingGroupInfo[]|null);

    /** RoomPlayerCardInfo mingIds */
    mingIds?: (number[]|null);

    /** RoomPlayerCardInfo handCnt */
    handCnt?: (number|null);

    /** RoomPlayerCardInfo husIds */
    husIds?: (number[]|null);

    /** RoomPlayerCardInfo puts */
    puts?: (number[]|null);

    /** RoomPlayerCardInfo isMing */
    isMing: boolean;

    /** RoomPlayerCardInfo eats */
    eats?: (ICardGroupInfo[]|null);

    /** RoomPlayerCardInfo cardId */
    cardId: number;
}

/** Represents a RoomPlayerCardInfo. */
export class RoomPlayerCardInfo implements IRoomPlayerCardInfo {

    /**
     * Constructs a new RoomPlayerCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomPlayerCardInfo);

    /** RoomPlayerCardInfo uId. */
    public uId: string;

    /** RoomPlayerCardInfo tingInfo. */
    public tingInfo: ITingGroupInfo[];

    /** RoomPlayerCardInfo mingIds. */
    public mingIds: number[];

    /** RoomPlayerCardInfo handCnt. */
    public handCnt: number;

    /** RoomPlayerCardInfo husIds. */
    public husIds: number[];

    /** RoomPlayerCardInfo puts. */
    public puts: number[];

    /** RoomPlayerCardInfo isMing. */
    public isMing: boolean;

    /** RoomPlayerCardInfo eats. */
    public eats: ICardGroupInfo[];

    /** RoomPlayerCardInfo cardId. */
    public cardId: number;

    /**
     * Creates a new RoomPlayerCardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomPlayerCardInfo instance
     */
    public static create(properties?: IRoomPlayerCardInfo): RoomPlayerCardInfo;

    /**
     * Encodes the specified RoomPlayerCardInfo message. Does not implicitly {@link RoomPlayerCardInfo.verify|verify} messages.
     * @param m RoomPlayerCardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomPlayerCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomPlayerCardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomPlayerCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomPlayerCardInfo;
}

/** Properties of a SynStandCardsData. */
export interface ISynStandCardsData {

    /** SynStandCardsData id */
    id: string;

    /** SynStandCardsData addCards */
    addCards?: (number[]|null);

    /** SynStandCardsData deleteCards */
    deleteCards?: (number[]|null);
}

/** Represents a SynStandCardsData. */
export class SynStandCardsData implements ISynStandCardsData {

    /**
     * Constructs a new SynStandCardsData.
     * @param [p] Properties to set
     */
    constructor(p?: ISynStandCardsData);

    /** SynStandCardsData id. */
    public id: string;

    /** SynStandCardsData addCards. */
    public addCards: number[];

    /** SynStandCardsData deleteCards. */
    public deleteCards: number[];

    /**
     * Creates a new SynStandCardsData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SynStandCardsData instance
     */
    public static create(properties?: ISynStandCardsData): SynStandCardsData;

    /**
     * Encodes the specified SynStandCardsData message. Does not implicitly {@link SynStandCardsData.verify|verify} messages.
     * @param m SynStandCardsData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISynStandCardsData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SynStandCardsData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SynStandCardsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SynStandCardsData;
}

/** Properties of a BuHuaPlayer. */
export interface IBuHuaPlayer {

    /** BuHuaPlayer uId */
    uId: string;

    /** BuHuaPlayer cards */
    cards?: (number[]|null);

    /** BuHuaPlayer huaCards */
    huaCards?: (number[]|null);
}

/** Represents a BuHuaPlayer. */
export class BuHuaPlayer implements IBuHuaPlayer {

    /**
     * Constructs a new BuHuaPlayer.
     * @param [p] Properties to set
     */
    constructor(p?: IBuHuaPlayer);

    /** BuHuaPlayer uId. */
    public uId: string;

    /** BuHuaPlayer cards. */
    public cards: number[];

    /** BuHuaPlayer huaCards. */
    public huaCards: number[];

    /**
     * Creates a new BuHuaPlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuHuaPlayer instance
     */
    public static create(properties?: IBuHuaPlayer): BuHuaPlayer;

    /**
     * Encodes the specified BuHuaPlayer message. Does not implicitly {@link BuHuaPlayer.verify|verify} messages.
     * @param m BuHuaPlayer message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBuHuaPlayer, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuHuaPlayer message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BuHuaPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BuHuaPlayer;
}

/** Properties of a BuHuaNum. */
export interface IBuHuaNum {

    /** BuHuaNum buahuaPlayers */
    buahuaPlayers?: (IBuHuaPlayer[]|null);
}

/** Represents a BuHuaNum. */
export class BuHuaNum implements IBuHuaNum {

    /**
     * Constructs a new BuHuaNum.
     * @param [p] Properties to set
     */
    constructor(p?: IBuHuaNum);

    /** BuHuaNum buahuaPlayers. */
    public buahuaPlayers: IBuHuaPlayer[];

    /**
     * Creates a new BuHuaNum instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuHuaNum instance
     */
    public static create(properties?: IBuHuaNum): BuHuaNum;

    /**
     * Encodes the specified BuHuaNum message. Does not implicitly {@link BuHuaNum.verify|verify} messages.
     * @param m BuHuaNum message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBuHuaNum, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuHuaNum message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BuHuaNum
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BuHuaNum;
}

/** Properties of a GuoHuInfo. */
export interface IGuoHuInfo {

    /** GuoHuInfo uId */
    uId: string;

    /** GuoHuInfo counts */
    counts: number;
}

/** Represents a GuoHuInfo. */
export class GuoHuInfo implements IGuoHuInfo {

    /**
     * Constructs a new GuoHuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IGuoHuInfo);

    /** GuoHuInfo uId. */
    public uId: string;

    /** GuoHuInfo counts. */
    public counts: number;

    /**
     * Creates a new GuoHuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuoHuInfo instance
     */
    public static create(properties?: IGuoHuInfo): GuoHuInfo;

    /**
     * Encodes the specified GuoHuInfo message. Does not implicitly {@link GuoHuInfo.verify|verify} messages.
     * @param m GuoHuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGuoHuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuoHuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GuoHuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GuoHuInfo;
}

/** Properties of a TingInfo. */
export interface ITingInfo {

    /** TingInfo uId */
    uId: string;

    /** TingInfo isTing */
    isTing: boolean;
}

/** Represents a TingInfo. */
export class TingInfo implements ITingInfo {

    /**
     * Constructs a new TingInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ITingInfo);

    /** TingInfo uId. */
    public uId: string;

    /** TingInfo isTing. */
    public isTing: boolean;

    /**
     * Creates a new TingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TingInfo instance
     */
    public static create(properties?: ITingInfo): TingInfo;

    /**
     * Encodes the specified TingInfo message. Does not implicitly {@link TingInfo.verify|verify} messages.
     * @param m TingInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITingInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TingInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TingInfo;
}

/** Properties of a MenuInfo. */
export interface IMenuInfo {

    /** MenuInfo types */
    types: number;

    /** MenuInfo isShow */
    isShow?: (boolean|null);

    /** MenuInfo gangInfo */
    gangInfo?: (ICardGroupInfo[]|null);

    /** MenuInfo chiInfo */
    chiInfo?: (ICardGroupInfo[]|null);

    /** MenuInfo pengInfo */
    pengInfo?: (ICardGroupInfo|null);

    /** MenuInfo suggestTing */
    suggestTing?: (ISuggestTingData[]|null);
}

/** Represents a MenuInfo. */
export class MenuInfo implements IMenuInfo {

    /**
     * Constructs a new MenuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMenuInfo);

    /** MenuInfo types. */
    public types: number;

    /** MenuInfo isShow. */
    public isShow: boolean;

    /** MenuInfo gangInfo. */
    public gangInfo: ICardGroupInfo[];

    /** MenuInfo chiInfo. */
    public chiInfo: ICardGroupInfo[];

    /** MenuInfo pengInfo. */
    public pengInfo?: (ICardGroupInfo|null);

    /** MenuInfo suggestTing. */
    public suggestTing: ISuggestTingData[];

    /**
     * Creates a new MenuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MenuInfo instance
     */
    public static create(properties?: IMenuInfo): MenuInfo;

    /**
     * Encodes the specified MenuInfo message. Does not implicitly {@link MenuInfo.verify|verify} messages.
     * @param m MenuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMenuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MenuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MenuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MenuInfo;
}

/** Properties of a RoundInfo. */
export interface IRoundInfo {

    /** RoundInfo fanName */
    fanName: string;

    /** RoundInfo fanCnt */
    fanCnt: number;
}

/** Represents a RoundInfo. */
export class RoundInfo implements IRoundInfo {

    /**
     * Constructs a new RoundInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoundInfo);

    /** RoundInfo fanName. */
    public fanName: string;

    /** RoundInfo fanCnt. */
    public fanCnt: number;

    /**
     * Creates a new RoundInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoundInfo instance
     */
    public static create(properties?: IRoundInfo): RoundInfo;

    /**
     * Encodes the specified RoundInfo message. Does not implicitly {@link RoundInfo.verify|verify} messages.
     * @param m RoundInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoundInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoundInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoundInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoundInfo;
}

/** Properties of a MaInfo. */
export interface IMaInfo {

    /** MaInfo card */
    card: number;

    /** MaInfo type */
    type: number;
}

/** Represents a MaInfo. */
export class MaInfo implements IMaInfo {

    /**
     * Constructs a new MaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMaInfo);

    /** MaInfo card. */
    public card: number;

    /** MaInfo type. */
    public type: number;

    /**
     * Creates a new MaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MaInfo instance
     */
    public static create(properties?: IMaInfo): MaInfo;

    /**
     * Encodes the specified MaInfo message. Does not implicitly {@link MaInfo.verify|verify} messages.
     * @param m MaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMaInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MaInfo;
}

/** Properties of a GuangDongLaiziInfo. */
export interface IGuangDongLaiziInfo {

    /** GuangDongLaiziInfo turnCard */
    turnCard?: (number|null);

    /** GuangDongLaiziInfo laiziCard */
    laiziCard: number;
}

/** Represents a GuangDongLaiziInfo. */
export class GuangDongLaiziInfo implements IGuangDongLaiziInfo {

    /**
     * Constructs a new GuangDongLaiziInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IGuangDongLaiziInfo);

    /** GuangDongLaiziInfo turnCard. */
    public turnCard: number;

    /** GuangDongLaiziInfo laiziCard. */
    public laiziCard: number;

    /**
     * Creates a new GuangDongLaiziInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuangDongLaiziInfo instance
     */
    public static create(properties?: IGuangDongLaiziInfo): GuangDongLaiziInfo;

    /**
     * Encodes the specified GuangDongLaiziInfo message. Does not implicitly {@link GuangDongLaiziInfo.verify|verify} messages.
     * @param m GuangDongLaiziInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGuangDongLaiziInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuangDongLaiziInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GuangDongLaiziInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GuangDongLaiziInfo;
}

/** Properties of a FuzhouLaiziInfo. */
export interface IFuzhouLaiziInfo {

    /** FuzhouLaiziInfo goldCard */
    goldCard: number;
}

/** Represents a FuzhouLaiziInfo. */
export class FuzhouLaiziInfo implements IFuzhouLaiziInfo {

    /**
     * Constructs a new FuzhouLaiziInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IFuzhouLaiziInfo);

    /** FuzhouLaiziInfo goldCard. */
    public goldCard: number;

    /**
     * Creates a new FuzhouLaiziInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FuzhouLaiziInfo instance
     */
    public static create(properties?: IFuzhouLaiziInfo): FuzhouLaiziInfo;

    /**
     * Encodes the specified FuzhouLaiziInfo message. Does not implicitly {@link FuzhouLaiziInfo.verify|verify} messages.
     * @param m FuzhouLaiziInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFuzhouLaiziInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FuzhouLaiziInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FuzhouLaiziInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FuzhouLaiziInfo;
}

/** Properties of a MaCardInfo. */
export interface IMaCardInfo {

    /** MaCardInfo uId */
    uId: string;

    /** MaCardInfo num */
    num: number;
}

/** Represents a MaCardInfo. */
export class MaCardInfo implements IMaCardInfo {

    /**
     * Constructs a new MaCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMaCardInfo);

    /** MaCardInfo uId. */
    public uId: string;

    /** MaCardInfo num. */
    public num: number;

    /**
     * Creates a new MaCardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MaCardInfo instance
     */
    public static create(properties?: IMaCardInfo): MaCardInfo;

    /**
     * Encodes the specified MaCardInfo message. Does not implicitly {@link MaCardInfo.verify|verify} messages.
     * @param m MaCardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMaCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MaCardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MaCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MaCardInfo;
}

/** Properties of a PlayerMaInfo. */
export interface IPlayerMaInfo {

    /** PlayerMaInfo uId */
    uId: string;

    /** PlayerMaInfo maInfos */
    maInfos?: (IMaInfo[]|null);
}

/** Represents a PlayerMaInfo. */
export class PlayerMaInfo implements IPlayerMaInfo {

    /**
     * Constructs a new PlayerMaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerMaInfo);

    /** PlayerMaInfo uId. */
    public uId: string;

    /** PlayerMaInfo maInfos. */
    public maInfos: IMaInfo[];

    /**
     * Creates a new PlayerMaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerMaInfo instance
     */
    public static create(properties?: IPlayerMaInfo): PlayerMaInfo;

    /**
     * Encodes the specified PlayerMaInfo message. Does not implicitly {@link PlayerMaInfo.verify|verify} messages.
     * @param m PlayerMaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerMaInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerMaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerMaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerMaInfo;
}

/** Properties of a ChaHuaZhuInfo. */
export interface IChaHuaZhuInfo {

    /** ChaHuaZhuInfo uId */
    uId: string;

    /** ChaHuaZhuInfo score */
    score: string;
}

/** Represents a ChaHuaZhuInfo. */
export class ChaHuaZhuInfo implements IChaHuaZhuInfo {

    /**
     * Constructs a new ChaHuaZhuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IChaHuaZhuInfo);

    /** ChaHuaZhuInfo uId. */
    public uId: string;

    /** ChaHuaZhuInfo score. */
    public score: string;

    /**
     * Creates a new ChaHuaZhuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChaHuaZhuInfo instance
     */
    public static create(properties?: IChaHuaZhuInfo): ChaHuaZhuInfo;

    /**
     * Encodes the specified ChaHuaZhuInfo message. Does not implicitly {@link ChaHuaZhuInfo.verify|verify} messages.
     * @param m ChaHuaZhuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChaHuaZhuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChaHuaZhuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChaHuaZhuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChaHuaZhuInfo;
}

/** Properties of a BeGangInfo. */
export interface IBeGangInfo {

    /** BeGangInfo id */
    id: string;

    /** BeGangInfo gold */
    gold: string;
}

/** Represents a BeGangInfo. */
export class BeGangInfo implements IBeGangInfo {

    /**
     * Constructs a new BeGangInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBeGangInfo);

    /** BeGangInfo id. */
    public id: string;

    /** BeGangInfo gold. */
    public gold: string;

    /**
     * Creates a new BeGangInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeGangInfo instance
     */
    public static create(properties?: IBeGangInfo): BeGangInfo;

    /**
     * Encodes the specified BeGangInfo message. Does not implicitly {@link BeGangInfo.verify|verify} messages.
     * @param m BeGangInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBeGangInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeGangInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BeGangInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BeGangInfo;
}

/** Properties of a BeHuInfo. */
export interface IBeHuInfo {

    /** BeHuInfo uId */
    uId: string;

    /** BeHuInfo loseGold */
    loseGold: string;
}

/** Represents a BeHuInfo. */
export class BeHuInfo implements IBeHuInfo {

    /**
     * Constructs a new BeHuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBeHuInfo);

    /** BeHuInfo uId. */
    public uId: string;

    /** BeHuInfo loseGold. */
    public loseGold: string;

    /**
     * Creates a new BeHuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeHuInfo instance
     */
    public static create(properties?: IBeHuInfo): BeHuInfo;

    /**
     * Encodes the specified BeHuInfo message. Does not implicitly {@link BeHuInfo.verify|verify} messages.
     * @param m BeHuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBeHuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeHuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BeHuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BeHuInfo;
}

/** Properties of a HuInfo. */
export interface IHuInfo {

    /** HuInfo uId */
    uId: string;

    /** HuInfo isReal */
    isReal: boolean;

    /** HuInfo getGold */
    getGold: string;
}

/** Represents a HuInfo. */
export class HuInfo implements IHuInfo {

    /**
     * Constructs a new HuInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHuInfo);

    /** HuInfo uId. */
    public uId: string;

    /** HuInfo isReal. */
    public isReal: boolean;

    /** HuInfo getGold. */
    public getGold: string;

    /**
     * Creates a new HuInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HuInfo instance
     */
    public static create(properties?: IHuInfo): HuInfo;

    /**
     * Encodes the specified HuInfo message. Does not implicitly {@link HuInfo.verify|verify} messages.
     * @param m HuInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHuInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HuInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HuInfo;
}

/** Properties of a GapInfo. */
export interface IGapInfo {

    /** GapInfo uId */
    uId: string;

    /** GapInfo type */
    type: number;
}

/** Represents a GapInfo. */
export class GapInfo implements IGapInfo {

    /**
     * Constructs a new GapInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IGapInfo);

    /** GapInfo uId. */
    public uId: string;

    /** GapInfo type. */
    public type: number;

    /**
     * Creates a new GapInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GapInfo instance
     */
    public static create(properties?: IGapInfo): GapInfo;

    /**
     * Encodes the specified GapInfo message. Does not implicitly {@link GapInfo.verify|verify} messages.
     * @param m GapInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGapInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GapInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GapInfo;
}

/** Properties of a PlayerCardInfo. */
export interface IPlayerCardInfo {

    /** PlayerCardInfo playerId */
    playerId: string;

    /** PlayerCardInfo card */
    card?: (number[]|null);
}

/** Represents a PlayerCardInfo. */
export class PlayerCardInfo implements IPlayerCardInfo {

    /**
     * Constructs a new PlayerCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerCardInfo);

    /** PlayerCardInfo playerId. */
    public playerId: string;

    /** PlayerCardInfo card. */
    public card: number[];

    /**
     * Creates a new PlayerCardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerCardInfo instance
     */
    public static create(properties?: IPlayerCardInfo): PlayerCardInfo;

    /**
     * Encodes the specified PlayerCardInfo message. Does not implicitly {@link PlayerCardInfo.verify|verify} messages.
     * @param m PlayerCardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerCardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerCardInfo;
}

import * as $protobuf from "protobufjs";
/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

    /** PlayerInfo playerId */
    playerId: string;

    /** PlayerInfo gold */
    gold: string;

    /** PlayerInfo head */
    head: string;

    /** PlayerInfo headbox */
    headbox: string;

    /** PlayerInfo vipLv */
    vipLv: number;

    /** PlayerInfo isBanker */
    isBanker: boolean;

    /** PlayerInfo pos */
    pos: number;

    /** PlayerInfo name */
    name: string;

    /** PlayerInfo isPlay */
    isPlay: boolean;

    /** PlayerInfo grapMutiple */
    grapMutiple?: (number|null);

    /** PlayerInfo mutiple */
    mutiple?: (number|null);

    /** PlayerInfo city */
    city?: (string|null);

    /** PlayerInfo province */
    province?: (string|null);
}

/** Represents a PlayerInfo. */
export class PlayerInfo implements IPlayerInfo {

    /**
     * Constructs a new PlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerInfo);

    /** PlayerInfo playerId. */
    public playerId: string;

    /** PlayerInfo gold. */
    public gold: string;

    /** PlayerInfo head. */
    public head: string;

    /** PlayerInfo headbox. */
    public headbox: string;

    /** PlayerInfo vipLv. */
    public vipLv: number;

    /** PlayerInfo isBanker. */
    public isBanker: boolean;

    /** PlayerInfo pos. */
    public pos: number;

    /** PlayerInfo name. */
    public name: string;

    /** PlayerInfo isPlay. */
    public isPlay: boolean;

    /** PlayerInfo grapMutiple. */
    public grapMutiple: number;

    /** PlayerInfo mutiple. */
    public mutiple: number;

    /** PlayerInfo city. */
    public city: string;

    /** PlayerInfo province. */
    public province: string;

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

/** GameStatus enum. */
export enum GameStatus {
    Start = 1,
    DisPlay = 2,
    GrapBank = 3,
    EnsureBank = 4,
    Bet = 5,
    Deal = 6,
    Settlement = 7,
    Stop = 8
}

/** NiuNiuType enum. */
export enum NiuNiuType {
    WUNIU = 0,
    NIUYI = 1,
    NIUER = 2,
    NIUSAN = 3,
    NIUSI = 4,
    NIUWU = 5,
    NIULIU = 6,
    NIUQI = 7,
    NIUBA = 8,
    NIUJIU = 9,
    NIUNIU = 10,
    ZHADAN = 11,
    WUHUANIU = 12
}

/** Properties of a CardInfo. */
export interface ICardInfo {

    /** CardInfo id */
    id: number;

    /** CardInfo cardColor */
    cardColor: CardColor;

    /** CardInfo cardSize */
    cardSize: CardSize;
}

/** Represents a CardInfo. */
export class CardInfo implements ICardInfo {

    /**
     * Constructs a new CardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ICardInfo);

    /** CardInfo id. */
    public id: number;

    /** CardInfo cardColor. */
    public cardColor: CardColor;

    /** CardInfo cardSize. */
    public cardSize: CardSize;

    /**
     * Creates a new CardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CardInfo instance
     */
    public static create(properties?: ICardInfo): CardInfo;

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @param m CardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CardInfo;
}

/** Properties of a DealInfo. */
export interface IDealInfo {

    /** DealInfo playerId */
    playerId: string;

    /** DealInfo cards */
    cards?: (ICardInfo[]|null);

    /** DealInfo niucards */
    niucards?: (ICardInfo[]|null);

    /** DealInfo result */
    result: NiuNiuType;

    /** DealInfo blnWin */
    blnWin: boolean;

    /** DealInfo gold */
    gold: string;

    /** DealInfo niuMutiple */
    niuMutiple: number;

    /** DealInfo playResult */
    playResult: number;
}

/** Represents a DealInfo. */
export class DealInfo implements IDealInfo {

    /**
     * Constructs a new DealInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IDealInfo);

    /** DealInfo playerId. */
    public playerId: string;

    /** DealInfo cards. */
    public cards: ICardInfo[];

    /** DealInfo niucards. */
    public niucards: ICardInfo[];

    /** DealInfo result. */
    public result: NiuNiuType;

    /** DealInfo blnWin. */
    public blnWin: boolean;

    /** DealInfo gold. */
    public gold: string;

    /** DealInfo niuMutiple. */
    public niuMutiple: number;

    /** DealInfo playResult. */
    public playResult: number;

    /**
     * Creates a new DealInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DealInfo instance
     */
    public static create(properties?: IDealInfo): DealInfo;

    /**
     * Encodes the specified DealInfo message. Does not implicitly {@link DealInfo.verify|verify} messages.
     * @param m DealInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDealInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DealInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DealInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DealInfo;
}

/** Properties of a PushRoomInitData. */
export interface IPushRoomInitData {

    /** PushRoomInitData baseCoin */
    baseCoin: number;

    /** PushRoomInitData players */
    players?: (IPlayerInfo[]|null);

    /** PushRoomInitData status */
    status: GameStatus;

    /** PushRoomInitData waitTime */
    waitTime: number;

    /** PushRoomInitData mutiple */
    mutiple?: (number[]|null);

    /** PushRoomInitData dealInfo */
    dealInfo?: (IDealInfo[]|null);

    /** PushRoomInitData isByStander */
    isByStander?: (boolean|null);
}

/** Represents a PushRoomInitData. */
export class PushRoomInitData implements IPushRoomInitData {

    /**
     * Constructs a new PushRoomInitData.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRoomInitData);

    /** PushRoomInitData baseCoin. */
    public baseCoin: number;

    /** PushRoomInitData players. */
    public players: IPlayerInfo[];

    /** PushRoomInitData status. */
    public status: GameStatus;

    /** PushRoomInitData waitTime. */
    public waitTime: number;

    /** PushRoomInitData mutiple. */
    public mutiple: number[];

    /** PushRoomInitData dealInfo. */
    public dealInfo: IDealInfo[];

    /** PushRoomInitData isByStander. */
    public isByStander: boolean;

    /**
     * Creates a new PushRoomInitData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRoomInitData instance
     */
    public static create(properties?: IPushRoomInitData): PushRoomInitData;

    /**
     * Encodes the specified PushRoomInitData message. Does not implicitly {@link PushRoomInitData.verify|verify} messages.
     * @param m PushRoomInitData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRoomInitData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRoomInitData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRoomInitData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRoomInitData;
}

/** Properties of a PushPlayerInfo. */
export interface IPushPlayerInfo {

    /** PushPlayerInfo player */
    player: IPlayerInfo;
}

/** Represents a PushPlayerInfo. */
export class PushPlayerInfo implements IPushPlayerInfo {

    /**
     * Constructs a new PushPlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushPlayerInfo);

    /** PushPlayerInfo player. */
    public player: IPlayerInfo;

    /**
     * Creates a new PushPlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushPlayerInfo instance
     */
    public static create(properties?: IPushPlayerInfo): PushPlayerInfo;

    /**
     * Encodes the specified PushPlayerInfo message. Does not implicitly {@link PushPlayerInfo.verify|verify} messages.
     * @param m PushPlayerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushPlayerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushPlayerInfo;
}

/** Properties of a PushPlayerLeave. */
export interface IPushPlayerLeave {

    /** PushPlayerLeave playerId */
    playerId: string;
}

/** Represents a PushPlayerLeave. */
export class PushPlayerLeave implements IPushPlayerLeave {

    /**
     * Constructs a new PushPlayerLeave.
     * @param [p] Properties to set
     */
    constructor(p?: IPushPlayerLeave);

    /** PushPlayerLeave playerId. */
    public playerId: string;

    /**
     * Creates a new PushPlayerLeave instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushPlayerLeave instance
     */
    public static create(properties?: IPushPlayerLeave): PushPlayerLeave;

    /**
     * Encodes the specified PushPlayerLeave message. Does not implicitly {@link PushPlayerLeave.verify|verify} messages.
     * @param m PushPlayerLeave message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushPlayerLeave, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushPlayerLeave message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushPlayerLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushPlayerLeave;
}

/** Properties of a PushRoomStatus. */
export interface IPushRoomStatus {

    /** PushRoomStatus status */
    status: GameStatus;

    /** PushRoomStatus waitTime */
    waitTime: number;

    /** PushRoomStatus mutiple */
    mutiple?: (number[]|null);

    /** PushRoomStatus dealInfo */
    dealInfo?: (IDealInfo[]|null);

    /** PushRoomStatus contineTime */
    contineTime?: (number|null);

    /** PushRoomStatus playerId */
    playerId?: (string[]|null);

    /** PushRoomStatus bankerId */
    bankerId?: (string|null);

    /** PushRoomStatus joinPlayerId */
    joinPlayerId?: (string[]|null);

    /** PushRoomStatus players */
    players?: (IPlayerInfo[]|null);
}

/** Represents a PushRoomStatus. */
export class PushRoomStatus implements IPushRoomStatus {

    /**
     * Constructs a new PushRoomStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRoomStatus);

    /** PushRoomStatus status. */
    public status: GameStatus;

    /** PushRoomStatus waitTime. */
    public waitTime: number;

    /** PushRoomStatus mutiple. */
    public mutiple: number[];

    /** PushRoomStatus dealInfo. */
    public dealInfo: IDealInfo[];

    /** PushRoomStatus contineTime. */
    public contineTime: number;

    /** PushRoomStatus playerId. */
    public playerId: string[];

    /** PushRoomStatus bankerId. */
    public bankerId: string;

    /** PushRoomStatus joinPlayerId. */
    public joinPlayerId: string[];

    /** PushRoomStatus players. */
    public players: IPlayerInfo[];

    /**
     * Creates a new PushRoomStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRoomStatus instance
     */
    public static create(properties?: IPushRoomStatus): PushRoomStatus;

    /**
     * Encodes the specified PushRoomStatus message. Does not implicitly {@link PushRoomStatus.verify|verify} messages.
     * @param m PushRoomStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRoomStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRoomStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRoomStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRoomStatus;
}

/** Properties of an ActionReq. */
export interface IActionReq {

    /** ActionReq status */
    status: GameStatus;

    /** ActionReq multiple */
    multiple?: (number|null);
}

/** Represents an ActionReq. */
export class ActionReq implements IActionReq {

    /**
     * Constructs a new ActionReq.
     * @param [p] Properties to set
     */
    constructor(p?: IActionReq);

    /** ActionReq status. */
    public status: GameStatus;

    /** ActionReq multiple. */
    public multiple: number;

    /**
     * Creates a new ActionReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionReq instance
     */
    public static create(properties?: IActionReq): ActionReq;

    /**
     * Encodes the specified ActionReq message. Does not implicitly {@link ActionReq.verify|verify} messages.
     * @param m ActionReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ActionReq;
}

/** Properties of an ActionRes. */
export interface IActionRes {

    /** ActionRes success */
    success: boolean;

    /** ActionRes tips */
    tips?: (string|null);
}

/** Represents an ActionRes. */
export class ActionRes implements IActionRes {

    /**
     * Constructs a new ActionRes.
     * @param [p] Properties to set
     */
    constructor(p?: IActionRes);

    /** ActionRes success. */
    public success: boolean;

    /** ActionRes tips. */
    public tips: string;

    /**
     * Creates a new ActionRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionRes instance
     */
    public static create(properties?: IActionRes): ActionRes;

    /**
     * Encodes the specified ActionRes message. Does not implicitly {@link ActionRes.verify|verify} messages.
     * @param m ActionRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ActionRes;
}

/** Properties of a PushAction. */
export interface IPushAction {

    /** PushAction playerId */
    playerId: string;

    /** PushAction status */
    status: GameStatus;

    /** PushAction multiple */
    multiple?: (number|null);
}

/** Represents a PushAction. */
export class PushAction implements IPushAction {

    /**
     * Constructs a new PushAction.
     * @param [p] Properties to set
     */
    constructor(p?: IPushAction);

    /** PushAction playerId. */
    public playerId: string;

    /** PushAction status. */
    public status: GameStatus;

    /** PushAction multiple. */
    public multiple: number;

    /**
     * Creates a new PushAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushAction instance
     */
    public static create(properties?: IPushAction): PushAction;

    /**
     * Encodes the specified PushAction message. Does not implicitly {@link PushAction.verify|verify} messages.
     * @param m PushAction message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushAction, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushAction message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushAction;
}

/** Properties of a ChatReq. */
export interface IChatReq {

    /** ChatReq chatId */
    chatId: number;
}

/** Represents a ChatReq. */
export class ChatReq implements IChatReq {

    /**
     * Constructs a new ChatReq.
     * @param [p] Properties to set
     */
    constructor(p?: IChatReq);

    /** ChatReq chatId. */
    public chatId: number;

    /**
     * Creates a new ChatReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatReq instance
     */
    public static create(properties?: IChatReq): ChatReq;

    /**
     * Encodes the specified ChatReq message. Does not implicitly {@link ChatReq.verify|verify} messages.
     * @param m ChatReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChatReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChatReq;
}

/** Properties of a PushChat. */
export interface IPushChat {

    /** PushChat chatId */
    chatId: number;

    /** PushChat playerId */
    playerId: string;
}

/** Represents a PushChat. */
export class PushChat implements IPushChat {

    /**
     * Constructs a new PushChat.
     * @param [p] Properties to set
     */
    constructor(p?: IPushChat);

    /** PushChat chatId. */
    public chatId: number;

    /** PushChat playerId. */
    public playerId: string;

    /**
     * Creates a new PushChat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushChat instance
     */
    public static create(properties?: IPushChat): PushChat;

    /**
     * Encodes the specified PushChat message. Does not implicitly {@link PushChat.verify|verify} messages.
     * @param m PushChat message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushChat, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushChat message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushChat;
}

/** CardColor enum. */
export enum CardColor {
    Spade = 1,
    Red = 2,
    Plum = 3,
    Block = 4,
    Evil = 5
}

/** CardSize enum. */
export enum CardSize {
    C3 = 3,
    C4 = 4,
    C5 = 5,
    C6 = 6,
    C7 = 7,
    C8 = 8,
    C9 = 9,
    C10 = 10,
    CJ = 11,
    CQ = 12,
    CK = 13,
    CA = 14,
    C2 = 15,
    CSMALL = 16,
    CBIG = 17
}

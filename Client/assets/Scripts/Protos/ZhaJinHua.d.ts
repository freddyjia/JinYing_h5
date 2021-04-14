import * as $protobuf from "protobufjs";
/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

    /** PlayerInfo playerId */
    playerId: string;

    /** PlayerInfo gold */
    gold?: (string|null);

    /** PlayerInfo head */
    head?: (string|null);

    /** PlayerInfo headbox */
    headbox?: (string|null);

    /** PlayerInfo vipLv */
    vipLv?: (number|null);

    /** PlayerInfo isBanker */
    isBanker?: (boolean|null);

    /** PlayerInfo pos */
    pos?: (number|null);

    /** PlayerInfo name */
    name?: (string|null);

    /** PlayerInfo city */
    city?: (string|null);

    /** PlayerInfo province */
    province?: (string|null);

    /** PlayerInfo isPlay */
    isPlay?: (boolean|null);

    /** PlayerInfo isOpen */
    isOpen?: (boolean|null);

    /** PlayerInfo isGiveup */
    isGiveup?: (boolean|null);

    /** PlayerInfo isBattleFail */
    isBattleFail?: (boolean|null);

    /** PlayerInfo betMoney */
    betMoney?: (number|null);

    /** PlayerInfo isAuto */
    isAuto?: (boolean|null);

    /** PlayerInfo isAllIn */
    isAllIn?: (boolean|null);
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

    /** PlayerInfo city. */
    public city: string;

    /** PlayerInfo province. */
    public province: string;

    /** PlayerInfo isPlay. */
    public isPlay: boolean;

    /** PlayerInfo isOpen. */
    public isOpen: boolean;

    /** PlayerInfo isGiveup. */
    public isGiveup: boolean;

    /** PlayerInfo isBattleFail. */
    public isBattleFail: boolean;

    /** PlayerInfo betMoney. */
    public betMoney: number;

    /** PlayerInfo isAuto. */
    public isAuto: boolean;

    /** PlayerInfo isAllIn. */
    public isAllIn: boolean;

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
    EnsureBank = 2,
    PlayerAction = 3,
    Battle = 4,
    All = 5,
    Settlement = 6,
    Stop = 7
}

/** ActionType enum. */
export enum ActionType {
    Giveup = 1,
    Follow = 2,
    AllIn = 3,
    AllSelf = 4,
    AutoFollow = 5,
    Open = 6,
    Compare = 7,
    AddFollow = 8
}

/** ZhaJinHuaResultType enum. */
export enum ZhaJinHuaResultType {
    SingleType = 0,
    PairType = 1,
    ShunZiType = 2,
    JinHuaType = 3,
    JinShunType = 4,
    BaoZiType = 5
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

/** Properties of a CardResult. */
export interface ICardResult {

    /** CardResult cardInfo */
    cardInfo?: (ICardInfo[]|null);

    /** CardResult resultType */
    resultType: ZhaJinHuaResultType;
}

/** Represents a CardResult. */
export class CardResult implements ICardResult {

    /**
     * Constructs a new CardResult.
     * @param [p] Properties to set
     */
    constructor(p?: ICardResult);

    /** CardResult cardInfo. */
    public cardInfo: ICardInfo[];

    /** CardResult resultType. */
    public resultType: ZhaJinHuaResultType;

    /**
     * Creates a new CardResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CardResult instance
     */
    public static create(properties?: ICardResult): CardResult;

    /**
     * Encodes the specified CardResult message. Does not implicitly {@link CardResult.verify|verify} messages.
     * @param m CardResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICardResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CardResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CardResult;
}

/** Properties of a DealInfo. */
export interface IDealInfo {

    /** DealInfo playerId */
    playerId: string;

    /** DealInfo blnWin */
    blnWin: boolean;

    /** DealInfo gold */
    gold: string;

    /** DealInfo playResult */
    playResult: number;

    /** DealInfo cardResult */
    cardResult?: (ICardResult|null);
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

    /** DealInfo blnWin. */
    public blnWin: boolean;

    /** DealInfo gold. */
    public gold: string;

    /** DealInfo playResult. */
    public playResult: number;

    /** DealInfo cardResult. */
    public cardResult?: (ICardResult|null);

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

/** Properties of an ActionPlayerInfo. */
export interface IActionPlayerInfo {

    /** ActionPlayerInfo playerId */
    playerId: string;

    /** ActionPlayerInfo actionButton */
    actionButton?: (ActionType[]|null);
}

/** Represents an ActionPlayerInfo. */
export class ActionPlayerInfo implements IActionPlayerInfo {

    /**
     * Constructs a new ActionPlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IActionPlayerInfo);

    /** ActionPlayerInfo playerId. */
    public playerId: string;

    /** ActionPlayerInfo actionButton. */
    public actionButton: ActionType[];

    /**
     * Creates a new ActionPlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionPlayerInfo instance
     */
    public static create(properties?: IActionPlayerInfo): ActionPlayerInfo;

    /**
     * Encodes the specified ActionPlayerInfo message. Does not implicitly {@link ActionPlayerInfo.verify|verify} messages.
     * @param m ActionPlayerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionPlayerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ActionPlayerInfo;
}

/** Properties of a PushRoomInitData. */
export interface IPushRoomInitData {

    /** PushRoomInitData baseCoin */
    baseCoin: number;

    /** PushRoomInitData betItems */
    betItems?: (number[]|null);

    /** PushRoomInitData players */
    players?: (IPlayerInfo[]|null);

    /** PushRoomInitData status */
    status: GameStatus;

    /** PushRoomInitData waitTime */
    waitTime: number;

    /** PushRoomInitData totalReward */
    totalReward?: (string|null);

    /** PushRoomInitData dealInfo */
    dealInfo?: (IDealInfo[]|null);

    /** PushRoomInitData round */
    round?: (number|null);

    /** PushRoomInitData openMutiple */
    openMutiple?: (number|null);

    /** PushRoomInitData actionPlayerInfo */
    actionPlayerInfo?: (IActionPlayerInfo|null);

    /** PushRoomInitData betMutiple */
    betMutiple?: (number|null);

    /** PushRoomInitData totalRound */
    totalRound: number;

    /** PushRoomInitData currentPlayerId */
    currentPlayerId?: (string|null);

    /** PushRoomInitData coinUnit */
    coinUnit: string;

    /** PushRoomInitData totalWaitTime */
    totalWaitTime: number;

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

    /** PushRoomInitData betItems. */
    public betItems: number[];

    /** PushRoomInitData players. */
    public players: IPlayerInfo[];

    /** PushRoomInitData status. */
    public status: GameStatus;

    /** PushRoomInitData waitTime. */
    public waitTime: number;

    /** PushRoomInitData totalReward. */
    public totalReward: string;

    /** PushRoomInitData dealInfo. */
    public dealInfo: IDealInfo[];

    /** PushRoomInitData round. */
    public round: number;

    /** PushRoomInitData openMutiple. */
    public openMutiple: number;

    /** PushRoomInitData actionPlayerInfo. */
    public actionPlayerInfo?: (IActionPlayerInfo|null);

    /** PushRoomInitData betMutiple. */
    public betMutiple: number;

    /** PushRoomInitData totalRound. */
    public totalRound: number;

    /** PushRoomInitData currentPlayerId. */
    public currentPlayerId: string;

    /** PushRoomInitData coinUnit. */
    public coinUnit: string;

    /** PushRoomInitData totalWaitTime. */
    public totalWaitTime: number;

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

/** Properties of a BattleResult. */
export interface IBattleResult {

    /** BattleResult oriplayerId */
    oriplayerId: string;

    /** BattleResult tarplayerId */
    tarplayerId: string;

    /** BattleResult winPlayerId */
    winPlayerId: string;
}

/** Represents a BattleResult. */
export class BattleResult implements IBattleResult {

    /**
     * Constructs a new BattleResult.
     * @param [p] Properties to set
     */
    constructor(p?: IBattleResult);

    /** BattleResult oriplayerId. */
    public oriplayerId: string;

    /** BattleResult tarplayerId. */
    public tarplayerId: string;

    /** BattleResult winPlayerId. */
    public winPlayerId: string;

    /**
     * Creates a new BattleResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BattleResult instance
     */
    public static create(properties?: IBattleResult): BattleResult;

    /**
     * Encodes the specified BattleResult message. Does not implicitly {@link BattleResult.verify|verify} messages.
     * @param m BattleResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBattleResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BattleResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BattleResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BattleResult;
}

/** Properties of an AllResult. */
export interface IAllResult {

    /** AllResult playerId */
    playerId: string;

    /** AllResult isWin */
    isWin: boolean;
}

/** Represents an AllResult. */
export class AllResult implements IAllResult {

    /**
     * Constructs a new AllResult.
     * @param [p] Properties to set
     */
    constructor(p?: IAllResult);

    /** AllResult playerId. */
    public playerId: string;

    /** AllResult isWin. */
    public isWin: boolean;

    /**
     * Creates a new AllResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AllResult instance
     */
    public static create(properties?: IAllResult): AllResult;

    /**
     * Encodes the specified AllResult message. Does not implicitly {@link AllResult.verify|verify} messages.
     * @param m AllResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAllResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AllResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AllResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AllResult;
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

    /** PushRoomStatus round */
    round: number;

    /** PushRoomStatus totalReward */
    totalReward?: (string|null);

    /** PushRoomStatus bankerId */
    bankerId?: (string|null);

    /** PushRoomStatus joinPlayer */
    joinPlayer?: (IPlayerInfo[]|null);

    /** PushRoomStatus dealInfo */
    dealInfo?: (IDealInfo[]|null);

    /** PushRoomStatus actionPlayerInfo */
    actionPlayerInfo?: (IActionPlayerInfo|null);

    /** PushRoomStatus betMutiple */
    betMutiple?: (number|null);
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

    /** PushRoomStatus round. */
    public round: number;

    /** PushRoomStatus totalReward. */
    public totalReward: string;

    /** PushRoomStatus bankerId. */
    public bankerId: string;

    /** PushRoomStatus joinPlayer. */
    public joinPlayer: IPlayerInfo[];

    /** PushRoomStatus dealInfo. */
    public dealInfo: IDealInfo[];

    /** PushRoomStatus actionPlayerInfo. */
    public actionPlayerInfo?: (IActionPlayerInfo|null);

    /** PushRoomStatus betMutiple. */
    public betMutiple: number;

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

    /** ActionReq action */
    action: ActionType;

    /** ActionReq betMutiple */
    betMutiple?: (number|null);

    /** ActionReq battlePlayerId */
    battlePlayerId?: (string|null);

    /** ActionReq autoFollow */
    autoFollow?: (boolean|null);
}

/** Represents an ActionReq. */
export class ActionReq implements IActionReq {

    /**
     * Constructs a new ActionReq.
     * @param [p] Properties to set
     */
    constructor(p?: IActionReq);

    /** ActionReq action. */
    public action: ActionType;

    /** ActionReq betMutiple. */
    public betMutiple: number;

    /** ActionReq battlePlayerId. */
    public battlePlayerId: string;

    /** ActionReq autoFollow. */
    public autoFollow: boolean;

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

    /** ActionRes cardResult */
    cardResult?: (ICardResult|null);

    /** ActionRes actionPlayerInfo */
    actionPlayerInfo?: (IActionPlayerInfo|null);
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

    /** ActionRes cardResult. */
    public cardResult?: (ICardResult|null);

    /** ActionRes actionPlayerInfo. */
    public actionPlayerInfo?: (IActionPlayerInfo|null);

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

    /** PushAction player */
    player: IPlayerInfo;

    /** PushAction action */
    action: ActionType;

    /** PushAction totalReward */
    totalReward?: (string|null);

    /** PushAction battleResult */
    battleResult?: (IBattleResult|null);

    /** PushAction allResult */
    allResult?: (IAllResult|null);

    /** PushAction round */
    round?: (number|null);

    /** PushAction betMoney */
    betMoney?: (number|null);
}

/** Represents a PushAction. */
export class PushAction implements IPushAction {

    /**
     * Constructs a new PushAction.
     * @param [p] Properties to set
     */
    constructor(p?: IPushAction);

    /** PushAction player. */
    public player: IPlayerInfo;

    /** PushAction action. */
    public action: ActionType;

    /** PushAction totalReward. */
    public totalReward: string;

    /** PushAction battleResult. */
    public battleResult?: (IBattleResult|null);

    /** PushAction allResult. */
    public allResult?: (IAllResult|null);

    /** PushAction round. */
    public round: number;

    /** PushAction betMoney. */
    public betMoney: number;

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

/** Properties of a PushAIInfo. */
export interface IPushAIInfo {

    /** PushAIInfo des */
    des?: (string|null);

    /** PushAIInfo playerId */
    playerId?: (string|null);
}

/** Represents a PushAIInfo. */
export class PushAIInfo implements IPushAIInfo {

    /**
     * Constructs a new PushAIInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushAIInfo);

    /** PushAIInfo des. */
    public des: string;

    /** PushAIInfo playerId. */
    public playerId: string;

    /**
     * Creates a new PushAIInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushAIInfo instance
     */
    public static create(properties?: IPushAIInfo): PushAIInfo;

    /**
     * Encodes the specified PushAIInfo message. Does not implicitly {@link PushAIInfo.verify|verify} messages.
     * @param m PushAIInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushAIInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushAIInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushAIInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushAIInfo;
}

/** Properties of a PushChangeRoom. */
export interface IPushChangeRoom {
}

/** Represents a PushChangeRoom. */
export class PushChangeRoom implements IPushChangeRoom {

    /**
     * Constructs a new PushChangeRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IPushChangeRoom);

    /**
     * Creates a new PushChangeRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushChangeRoom instance
     */
    public static create(properties?: IPushChangeRoom): PushChangeRoom;

    /**
     * Encodes the specified PushChangeRoom message. Does not implicitly {@link PushChangeRoom.verify|verify} messages.
     * @param m PushChangeRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushChangeRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushChangeRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushChangeRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushChangeRoom;
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

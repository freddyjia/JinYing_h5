import * as $protobuf from "protobufjs";
/** MemberType enum. */
export enum MemberType {
    Banker = 1,
    Player = 2
}

/** PlayCardType enum. */
export enum PlayCardType {
    None = 0,
    Single = 1,
    Double = 2,
    Three = 3,
    SingleLine = 4,
    DoubleLine = 5,
    ThreeLine = 6,
    ThreeTakeOne = 7,
    ThreeTakeTwo = 8,
    ThreeTakeLine = 9,
    FourTakeOne = 10,
    FourTakeTwo = 11,
    FourTakeThree = 12,
    Bomb = 13
}

/** PaoDeKuaiActionType enum. */
export enum PaoDeKuaiActionType {
    CHU = 1,
    TRUSTEESHIP = 2,
    LEAVE = 3
}

/** CloseType enum. */
export enum CloseType {
    Normal = 1,
    CloseAll = 2,
    CloseSingle = 3,
    ReverseCloseed = 4,
    BeClosed = 5,
    Contract = 6
}

/** Properties of a CardInfo. */
export interface ICardInfo {

    /** CardInfo id */
    id: number;

    /** CardInfo color */
    color: CardColor;

    /** CardInfo size */
    size: CardSize;
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

    /** CardInfo color. */
    public color: CardColor;

    /** CardInfo size. */
    public size: CardSize;

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

/** Properties of a PaoDeKuaiMember. */
export interface IPaoDeKuaiMember {

    /** PaoDeKuaiMember playerID */
    playerID?: (string|null);

    /** PaoDeKuaiMember userName */
    userName?: (string|null);

    /** PaoDeKuaiMember headImageUrl */
    headImageUrl?: (string|null);

    /** PaoDeKuaiMember headbox */
    headbox?: (string|null);

    /** PaoDeKuaiMember vipLv */
    vipLv?: (number|null);

    /** PaoDeKuaiMember gold */
    gold?: (string|null);

    /** PaoDeKuaiMember index */
    index: number;

    /** PaoDeKuaiMember type */
    type?: (MemberType|null);

    /** PaoDeKuaiMember handcard */
    handcard?: (ICardInfo[]|null);

    /** PaoDeKuaiMember cardCount */
    cardCount?: (number|null);

    /** PaoDeKuaiMember isTrusteeship */
    isTrusteeship?: (boolean|null);

    /** PaoDeKuaiMember city */
    city?: (string|null);

    /** PaoDeKuaiMember province */
    province?: (string|null);

    /** PaoDeKuaiMember isShowCard */
    isShowCard?: (boolean|null);
}

/** Represents a PaoDeKuaiMember. */
export class PaoDeKuaiMember implements IPaoDeKuaiMember {

    /**
     * Constructs a new PaoDeKuaiMember.
     * @param [p] Properties to set
     */
    constructor(p?: IPaoDeKuaiMember);

    /** PaoDeKuaiMember playerID. */
    public playerID: string;

    /** PaoDeKuaiMember userName. */
    public userName: string;

    /** PaoDeKuaiMember headImageUrl. */
    public headImageUrl: string;

    /** PaoDeKuaiMember headbox. */
    public headbox: string;

    /** PaoDeKuaiMember vipLv. */
    public vipLv: number;

    /** PaoDeKuaiMember gold. */
    public gold: string;

    /** PaoDeKuaiMember index. */
    public index: number;

    /** PaoDeKuaiMember type. */
    public type: MemberType;

    /** PaoDeKuaiMember handcard. */
    public handcard: ICardInfo[];

    /** PaoDeKuaiMember cardCount. */
    public cardCount: number;

    /** PaoDeKuaiMember isTrusteeship. */
    public isTrusteeship: boolean;

    /** PaoDeKuaiMember city. */
    public city: string;

    /** PaoDeKuaiMember province. */
    public province: string;

    /** PaoDeKuaiMember isShowCard. */
    public isShowCard: boolean;

    /**
     * Creates a new PaoDeKuaiMember instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PaoDeKuaiMember instance
     */
    public static create(properties?: IPaoDeKuaiMember): PaoDeKuaiMember;

    /**
     * Encodes the specified PaoDeKuaiMember message. Does not implicitly {@link PaoDeKuaiMember.verify|verify} messages.
     * @param m PaoDeKuaiMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPaoDeKuaiMember, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PaoDeKuaiMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PaoDeKuaiMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PaoDeKuaiMember;
}

/** Properties of a PushPaoDeKuaiInit. */
export interface IPushPaoDeKuaiInit {

    /** PushPaoDeKuaiInit playType */
    playType: number;

    /** PushPaoDeKuaiInit playId */
    playId: number;

    /** PushPaoDeKuaiInit roomId */
    roomId: number;

    /** PushPaoDeKuaiInit member */
    member?: (IPaoDeKuaiMember[]|null);
}

/** Represents a PushPaoDeKuaiInit. */
export class PushPaoDeKuaiInit implements IPushPaoDeKuaiInit {

    /**
     * Constructs a new PushPaoDeKuaiInit.
     * @param [p] Properties to set
     */
    constructor(p?: IPushPaoDeKuaiInit);

    /** PushPaoDeKuaiInit playType. */
    public playType: number;

    /** PushPaoDeKuaiInit playId. */
    public playId: number;

    /** PushPaoDeKuaiInit roomId. */
    public roomId: number;

    /** PushPaoDeKuaiInit member. */
    public member: IPaoDeKuaiMember[];

    /**
     * Creates a new PushPaoDeKuaiInit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushPaoDeKuaiInit instance
     */
    public static create(properties?: IPushPaoDeKuaiInit): PushPaoDeKuaiInit;

    /**
     * Encodes the specified PushPaoDeKuaiInit message. Does not implicitly {@link PushPaoDeKuaiInit.verify|verify} messages.
     * @param m PushPaoDeKuaiInit message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushPaoDeKuaiInit, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushPaoDeKuaiInit message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushPaoDeKuaiInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushPaoDeKuaiInit;
}

/** Properties of a PlayCardInfo. */
export interface IPlayCardInfo {

    /** PlayCardInfo playCardType */
    playCardType: PlayCardType;

    /** PlayCardInfo cardInfo */
    cardInfo?: (ICardInfo[]|null);

    /** PlayCardInfo maxCardSize */
    maxCardSize?: (number|null);
}

/** Represents a PlayCardInfo. */
export class PlayCardInfo implements IPlayCardInfo {

    /**
     * Constructs a new PlayCardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayCardInfo);

    /** PlayCardInfo playCardType. */
    public playCardType: PlayCardType;

    /** PlayCardInfo cardInfo. */
    public cardInfo: ICardInfo[];

    /** PlayCardInfo maxCardSize. */
    public maxCardSize: number;

    /**
     * Creates a new PlayCardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayCardInfo instance
     */
    public static create(properties?: IPlayCardInfo): PlayCardInfo;

    /**
     * Encodes the specified PlayCardInfo message. Does not implicitly {@link PlayCardInfo.verify|verify} messages.
     * @param m PlayCardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayCardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayCardInfo;
}

/** Properties of a HandCard. */
export interface IHandCard {

    /** HandCard index */
    index: number;

    /** HandCard CardCount */
    CardCount: number;

    /** HandCard cardInfo */
    cardInfo?: (ICardInfo[]|null);
}

/** Represents a HandCard. */
export class HandCard implements IHandCard {

    /**
     * Constructs a new HandCard.
     * @param [p] Properties to set
     */
    constructor(p?: IHandCard);

    /** HandCard index. */
    public index: number;

    /** HandCard CardCount. */
    public CardCount: number;

    /** HandCard cardInfo. */
    public cardInfo: ICardInfo[];

    /**
     * Creates a new HandCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HandCard instance
     */
    public static create(properties?: IHandCard): HandCard;

    /**
     * Encodes the specified HandCard message. Does not implicitly {@link HandCard.verify|verify} messages.
     * @param m HandCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHandCard, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HandCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HandCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HandCard;
}

/** Properties of a PushHandCard. */
export interface IPushHandCard {

    /** PushHandCard perspective */
    perspective: boolean;

    /** PushHandCard handcard */
    handcard?: (IHandCard[]|null);

    /** PushHandCard firstPlayIndex */
    firstPlayIndex: number;
}

/** Represents a PushHandCard. */
export class PushHandCard implements IPushHandCard {

    /**
     * Constructs a new PushHandCard.
     * @param [p] Properties to set
     */
    constructor(p?: IPushHandCard);

    /** PushHandCard perspective. */
    public perspective: boolean;

    /** PushHandCard handcard. */
    public handcard: IHandCard[];

    /** PushHandCard firstPlayIndex. */
    public firstPlayIndex: number;

    /**
     * Creates a new PushHandCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushHandCard instance
     */
    public static create(properties?: IPushHandCard): PushHandCard;

    /**
     * Encodes the specified PushHandCard message. Does not implicitly {@link PushHandCard.verify|verify} messages.
     * @param m PushHandCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushHandCard, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushHandCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushHandCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushHandCard;
}

/** Properties of a PushCountDown. */
export interface IPushCountDown {

    /** PushCountDown index */
    index: number;

    /** PushCountDown countdown */
    countdown: number;

    /** PushCountDown countdownType */
    countdownType: PaoDeKuaiActionType;

    /** PushCountDown canPlay */
    canPlay?: (boolean|null);

    /** PushCountDown tips */
    tips?: (IPlayCardInfo[]|null);
}

/** Represents a PushCountDown. */
export class PushCountDown implements IPushCountDown {

    /**
     * Constructs a new PushCountDown.
     * @param [p] Properties to set
     */
    constructor(p?: IPushCountDown);

    /** PushCountDown index. */
    public index: number;

    /** PushCountDown countdown. */
    public countdown: number;

    /** PushCountDown countdownType. */
    public countdownType: PaoDeKuaiActionType;

    /** PushCountDown canPlay. */
    public canPlay: boolean;

    /** PushCountDown tips. */
    public tips: IPlayCardInfo[];

    /**
     * Creates a new PushCountDown instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushCountDown instance
     */
    public static create(properties?: IPushCountDown): PushCountDown;

    /**
     * Encodes the specified PushCountDown message. Does not implicitly {@link PushCountDown.verify|verify} messages.
     * @param m PushCountDown message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushCountDown, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushCountDown message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushCountDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushCountDown;
}

/** Properties of a PaoDeKuaiActionReq. */
export interface IPaoDeKuaiActionReq {

    /** PaoDeKuaiActionReq actionType */
    actionType: PaoDeKuaiActionType;

    /** PaoDeKuaiActionReq cardInfo */
    cardInfo?: (ICardInfo[]|null);

    /** PaoDeKuaiActionReq isTrusteeship */
    isTrusteeship?: (boolean|null);
}

/** Represents a PaoDeKuaiActionReq. */
export class PaoDeKuaiActionReq implements IPaoDeKuaiActionReq {

    /**
     * Constructs a new PaoDeKuaiActionReq.
     * @param [p] Properties to set
     */
    constructor(p?: IPaoDeKuaiActionReq);

    /** PaoDeKuaiActionReq actionType. */
    public actionType: PaoDeKuaiActionType;

    /** PaoDeKuaiActionReq cardInfo. */
    public cardInfo: ICardInfo[];

    /** PaoDeKuaiActionReq isTrusteeship. */
    public isTrusteeship: boolean;

    /**
     * Creates a new PaoDeKuaiActionReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PaoDeKuaiActionReq instance
     */
    public static create(properties?: IPaoDeKuaiActionReq): PaoDeKuaiActionReq;

    /**
     * Encodes the specified PaoDeKuaiActionReq message. Does not implicitly {@link PaoDeKuaiActionReq.verify|verify} messages.
     * @param m PaoDeKuaiActionReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPaoDeKuaiActionReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PaoDeKuaiActionReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PaoDeKuaiActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PaoDeKuaiActionReq;
}

/** Properties of a PaoDeKuaiActionRes. */
export interface IPaoDeKuaiActionRes {

    /** PaoDeKuaiActionRes isSuccess */
    isSuccess: boolean;

    /** PaoDeKuaiActionRes tips */
    tips: string;
}

/** Represents a PaoDeKuaiActionRes. */
export class PaoDeKuaiActionRes implements IPaoDeKuaiActionRes {

    /**
     * Constructs a new PaoDeKuaiActionRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPaoDeKuaiActionRes);

    /** PaoDeKuaiActionRes isSuccess. */
    public isSuccess: boolean;

    /** PaoDeKuaiActionRes tips. */
    public tips: string;

    /**
     * Creates a new PaoDeKuaiActionRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PaoDeKuaiActionRes instance
     */
    public static create(properties?: IPaoDeKuaiActionRes): PaoDeKuaiActionRes;

    /**
     * Encodes the specified PaoDeKuaiActionRes message. Does not implicitly {@link PaoDeKuaiActionRes.verify|verify} messages.
     * @param m PaoDeKuaiActionRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPaoDeKuaiActionRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PaoDeKuaiActionRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PaoDeKuaiActionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PaoDeKuaiActionRes;
}

/** Properties of an ActionTrusteeship. */
export interface IActionTrusteeship {

    /** ActionTrusteeship index */
    index: number;

    /** ActionTrusteeship isTrusteeship */
    isTrusteeship: boolean;
}

/** Represents an ActionTrusteeship. */
export class ActionTrusteeship implements IActionTrusteeship {

    /**
     * Constructs a new ActionTrusteeship.
     * @param [p] Properties to set
     */
    constructor(p?: IActionTrusteeship);

    /** ActionTrusteeship index. */
    public index: number;

    /** ActionTrusteeship isTrusteeship. */
    public isTrusteeship: boolean;

    /**
     * Creates a new ActionTrusteeship instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionTrusteeship instance
     */
    public static create(properties?: IActionTrusteeship): ActionTrusteeship;

    /**
     * Encodes the specified ActionTrusteeship message. Does not implicitly {@link ActionTrusteeship.verify|verify} messages.
     * @param m ActionTrusteeship message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionTrusteeship, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionTrusteeship message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionTrusteeship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ActionTrusteeship;
}

/** Properties of an ActionPlayCard. */
export interface IActionPlayCard {

    /** ActionPlayCard index */
    index: number;

    /** ActionPlayCard playCardType */
    playCardType: PlayCardType;

    /** ActionPlayCard cardInfo */
    cardInfo?: (ICardInfo[]|null);

    /** ActionPlayCard maxCardSize */
    maxCardSize?: (number|null);

    /** ActionPlayCard mutiple */
    mutiple?: (number|null);
}

/** Represents an ActionPlayCard. */
export class ActionPlayCard implements IActionPlayCard {

    /**
     * Constructs a new ActionPlayCard.
     * @param [p] Properties to set
     */
    constructor(p?: IActionPlayCard);

    /** ActionPlayCard index. */
    public index: number;

    /** ActionPlayCard playCardType. */
    public playCardType: PlayCardType;

    /** ActionPlayCard cardInfo. */
    public cardInfo: ICardInfo[];

    /** ActionPlayCard maxCardSize. */
    public maxCardSize: number;

    /** ActionPlayCard mutiple. */
    public mutiple: number;

    /**
     * Creates a new ActionPlayCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionPlayCard instance
     */
    public static create(properties?: IActionPlayCard): ActionPlayCard;

    /**
     * Encodes the specified ActionPlayCard message. Does not implicitly {@link ActionPlayCard.verify|verify} messages.
     * @param m ActionPlayCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionPlayCard, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionPlayCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionPlayCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ActionPlayCard;
}

/** Properties of a PushAction. */
export interface IPushAction {

    /** PushAction actionType */
    actionType: PaoDeKuaiActionType;

    /** PushAction trusteeship */
    trusteeship?: (IActionTrusteeship|null);

    /** PushAction playCard */
    playCard?: (IActionPlayCard|null);

    /** PushAction reqPlayerIndex */
    reqPlayerIndex?: (number|null);
}

/** Represents a PushAction. */
export class PushAction implements IPushAction {

    /**
     * Constructs a new PushAction.
     * @param [p] Properties to set
     */
    constructor(p?: IPushAction);

    /** PushAction actionType. */
    public actionType: PaoDeKuaiActionType;

    /** PushAction trusteeship. */
    public trusteeship?: (IActionTrusteeship|null);

    /** PushAction playCard. */
    public playCard?: (IActionPlayCard|null);

    /** PushAction reqPlayerIndex. */
    public reqPlayerIndex: number;

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

/** Properties of a PushFinalLandlordInfo. */
export interface IPushFinalLandlordInfo {

    /** PushFinalLandlordInfo banker */
    banker?: (number|null);

    /** PushFinalLandlordInfo cardInfo */
    cardInfo?: (ICardInfo|null);
}

/** Represents a PushFinalLandlordInfo. */
export class PushFinalLandlordInfo implements IPushFinalLandlordInfo {

    /**
     * Constructs a new PushFinalLandlordInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushFinalLandlordInfo);

    /** PushFinalLandlordInfo banker. */
    public banker: number;

    /** PushFinalLandlordInfo cardInfo. */
    public cardInfo?: (ICardInfo|null);

    /**
     * Creates a new PushFinalLandlordInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushFinalLandlordInfo instance
     */
    public static create(properties?: IPushFinalLandlordInfo): PushFinalLandlordInfo;

    /**
     * Encodes the specified PushFinalLandlordInfo message. Does not implicitly {@link PushFinalLandlordInfo.verify|verify} messages.
     * @param m PushFinalLandlordInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushFinalLandlordInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushFinalLandlordInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushFinalLandlordInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushFinalLandlordInfo;
}

/** Properties of a SettlementInfo. */
export interface ISettlementInfo {

    /** SettlementInfo index */
    index: number;

    /** SettlementInfo result */
    result: number;

    /** SettlementInfo closeType */
    closeType?: (CloseType|null);
}

/** Represents a SettlementInfo. */
export class SettlementInfo implements ISettlementInfo {

    /**
     * Constructs a new SettlementInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISettlementInfo);

    /** SettlementInfo index. */
    public index: number;

    /** SettlementInfo result. */
    public result: number;

    /** SettlementInfo closeType. */
    public closeType: CloseType;

    /**
     * Creates a new SettlementInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SettlementInfo instance
     */
    public static create(properties?: ISettlementInfo): SettlementInfo;

    /**
     * Encodes the specified SettlementInfo message. Does not implicitly {@link SettlementInfo.verify|verify} messages.
     * @param m SettlementInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISettlementInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SettlementInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SettlementInfo;
}

/** Properties of a PushSettlementInfo. */
export interface IPushSettlementInfo {

    /** PushSettlementInfo settlementInfo */
    settlementInfo?: (ISettlementInfo[]|null);

    /** PushSettlementInfo countdown */
    countdown: number;

    /** PushSettlementInfo handcard */
    handcard?: (IHandCard[]|null);
}

/** Represents a PushSettlementInfo. */
export class PushSettlementInfo implements IPushSettlementInfo {

    /**
     * Constructs a new PushSettlementInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushSettlementInfo);

    /** PushSettlementInfo settlementInfo. */
    public settlementInfo: ISettlementInfo[];

    /** PushSettlementInfo countdown. */
    public countdown: number;

    /** PushSettlementInfo handcard. */
    public handcard: IHandCard[];

    /**
     * Creates a new PushSettlementInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushSettlementInfo instance
     */
    public static create(properties?: IPushSettlementInfo): PushSettlementInfo;

    /**
     * Encodes the specified PushSettlementInfo message. Does not implicitly {@link PushSettlementInfo.verify|verify} messages.
     * @param m PushSettlementInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushSettlementInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushSettlementInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushSettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushSettlementInfo;
}

/** Properties of a PushKickOutRoom. */
export interface IPushKickOutRoom {
}

/** Represents a PushKickOutRoom. */
export class PushKickOutRoom implements IPushKickOutRoom {

    /**
     * Constructs a new PushKickOutRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IPushKickOutRoom);

    /**
     * Creates a new PushKickOutRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushKickOutRoom instance
     */
    public static create(properties?: IPushKickOutRoom): PushKickOutRoom;

    /**
     * Encodes the specified PushKickOutRoom message. Does not implicitly {@link PushKickOutRoom.verify|verify} messages.
     * @param m PushKickOutRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushKickOutRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushKickOutRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushKickOutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushKickOutRoom;
}

/** Properties of a PushRejoinInfo. */
export interface IPushRejoinInfo {

    /** PushRejoinInfo perspective */
    perspective: boolean;

    /** PushRejoinInfo member */
    member?: (IPaoDeKuaiMember[]|null);

    /** PushRejoinInfo playedCards */
    playedCards?: (ICardInfo[]|null);

    /** PushRejoinInfo playCard */
    playCard?: (IActionPlayCard|null);

    /** PushRejoinInfo canPlay */
    canPlay?: (boolean|null);

    /** PushRejoinInfo isTrusteeship */
    isTrusteeship?: (boolean|null);

    /** PushRejoinInfo firstPlayIndex */
    firstPlayIndex?: (number|null);
}

/** Represents a PushRejoinInfo. */
export class PushRejoinInfo implements IPushRejoinInfo {

    /**
     * Constructs a new PushRejoinInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushRejoinInfo);

    /** PushRejoinInfo perspective. */
    public perspective: boolean;

    /** PushRejoinInfo member. */
    public member: IPaoDeKuaiMember[];

    /** PushRejoinInfo playedCards. */
    public playedCards: ICardInfo[];

    /** PushRejoinInfo playCard. */
    public playCard?: (IActionPlayCard|null);

    /** PushRejoinInfo canPlay. */
    public canPlay: boolean;

    /** PushRejoinInfo isTrusteeship. */
    public isTrusteeship: boolean;

    /** PushRejoinInfo firstPlayIndex. */
    public firstPlayIndex: number;

    /**
     * Creates a new PushRejoinInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRejoinInfo instance
     */
    public static create(properties?: IPushRejoinInfo): PushRejoinInfo;

    /**
     * Encodes the specified PushRejoinInfo message. Does not implicitly {@link PushRejoinInfo.verify|verify} messages.
     * @param m PushRejoinInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushRejoinInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushRejoinInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushRejoinInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushRejoinInfo;
}

/** Properties of a PushBombReward. */
export interface IPushBombReward {

    /** PushBombReward settlementInfo */
    settlementInfo?: (ISettlementInfo[]|null);
}

/** Represents a PushBombReward. */
export class PushBombReward implements IPushBombReward {

    /**
     * Constructs a new PushBombReward.
     * @param [p] Properties to set
     */
    constructor(p?: IPushBombReward);

    /** PushBombReward settlementInfo. */
    public settlementInfo: ISettlementInfo[];

    /**
     * Creates a new PushBombReward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushBombReward instance
     */
    public static create(properties?: IPushBombReward): PushBombReward;

    /**
     * Encodes the specified PushBombReward message. Does not implicitly {@link PushBombReward.verify|verify} messages.
     * @param m PushBombReward message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushBombReward, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushBombReward message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushBombReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushBombReward;
}

/** Properties of a PushAITestInfo. */
export interface IPushAITestInfo {

    /** PushAITestInfo index */
    index: number;

    /** PushAITestInfo des */
    des?: (string|null);
}

/** Represents a PushAITestInfo. */
export class PushAITestInfo implements IPushAITestInfo {

    /**
     * Constructs a new PushAITestInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushAITestInfo);

    /** PushAITestInfo index. */
    public index: number;

    /** PushAITestInfo des. */
    public des: string;

    /**
     * Creates a new PushAITestInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushAITestInfo instance
     */
    public static create(properties?: IPushAITestInfo): PushAITestInfo;

    /**
     * Encodes the specified PushAITestInfo message. Does not implicitly {@link PushAITestInfo.verify|verify} messages.
     * @param m PushAITestInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushAITestInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushAITestInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushAITestInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushAITestInfo;
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

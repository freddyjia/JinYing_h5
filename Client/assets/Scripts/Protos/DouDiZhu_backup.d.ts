import * as $protobuf from "protobufjs";
/** MemberType enum. */
export enum MemberType {
    Landlord = 1,
    Farmer = 2
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
    ThreeTakeOneLine = 9,
    ThreeTakeTwoLine = 10,
    FourTakeOne = 11,
    FourTakeTwo = 12,
    Bomb = 13,
    KingBomb = 14
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

/** Properties of a DouDiZhuMember. */
export interface IDouDiZhuMember {

    /** DouDiZhuMember playerID */
    playerID?: (string|null);

    /** DouDiZhuMember userName */
    userName?: (string|null);

    /** DouDiZhuMember headImageUrl */
    headImageUrl?: (string|null);

    /** DouDiZhuMember headbox */
    headbox?: (string|null);

    /** DouDiZhuMember vipLv */
    vipLv?: (number|null);

    /** DouDiZhuMember gold */
    gold?: (string|null);

    /** DouDiZhuMember index */
    index: number;

    /** DouDiZhuMember type */
    type?: (MemberType|null);

    /** DouDiZhuMember handcard */
    handcard?: (ICardInfo[]|null);

    /** DouDiZhuMember cardCount */
    cardCount?: (number|null);

    /** DouDiZhuMember isTrusteeship */
    isTrusteeship?: (boolean|null);

    /** DouDiZhuMember isJiao */
    isJiao?: (boolean|null);
}

/** Represents a DouDiZhuMember. */
export class DouDiZhuMember implements IDouDiZhuMember {

    /**
     * Constructs a new DouDiZhuMember.
     * @param [p] Properties to set
     */
    constructor(p?: IDouDiZhuMember);

    /** DouDiZhuMember playerID. */
    public playerID: string;

    /** DouDiZhuMember userName. */
    public userName: string;

    /** DouDiZhuMember headImageUrl. */
    public headImageUrl: string;

    /** DouDiZhuMember headbox. */
    public headbox: string;

    /** DouDiZhuMember vipLv. */
    public vipLv: number;

    /** DouDiZhuMember gold. */
    public gold: string;

    /** DouDiZhuMember index. */
    public index: number;

    /** DouDiZhuMember type. */
    public type: MemberType;

    /** DouDiZhuMember handcard. */
    public handcard: ICardInfo[];

    /** DouDiZhuMember cardCount. */
    public cardCount: number;

    /** DouDiZhuMember isTrusteeship. */
    public isTrusteeship: boolean;

    /** DouDiZhuMember isJiao. */
    public isJiao: boolean;

    /**
     * Creates a new DouDiZhuMember instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DouDiZhuMember instance
     */
    public static create(properties?: IDouDiZhuMember): DouDiZhuMember;

    /**
     * Encodes the specified DouDiZhuMember message. Does not implicitly {@link DouDiZhuMember.verify|verify} messages.
     * @param m DouDiZhuMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDouDiZhuMember, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DouDiZhuMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DouDiZhuMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DouDiZhuMember;
}

/** Properties of a PushDouDiZhuInit. */
export interface IPushDouDiZhuInit {

    /** PushDouDiZhuInit playType */
    playType: number;

    /** PushDouDiZhuInit playId */
    playId: number;

    /** PushDouDiZhuInit roomId */
    roomId: number;

    /** PushDouDiZhuInit member */
    member?: (IDouDiZhuMember[]|null);
}

/** Represents a PushDouDiZhuInit. */
export class PushDouDiZhuInit implements IPushDouDiZhuInit {

    /**
     * Constructs a new PushDouDiZhuInit.
     * @param [p] Properties to set
     */
    constructor(p?: IPushDouDiZhuInit);

    /** PushDouDiZhuInit playType. */
    public playType: number;

    /** PushDouDiZhuInit playId. */
    public playId: number;

    /** PushDouDiZhuInit roomId. */
    public roomId: number;

    /** PushDouDiZhuInit member. */
    public member: IDouDiZhuMember[];

    /**
     * Creates a new PushDouDiZhuInit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushDouDiZhuInit instance
     */
    public static create(properties?: IPushDouDiZhuInit): PushDouDiZhuInit;

    /**
     * Encodes the specified PushDouDiZhuInit message. Does not implicitly {@link PushDouDiZhuInit.verify|verify} messages.
     * @param m PushDouDiZhuInit message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushDouDiZhuInit, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushDouDiZhuInit message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushDouDiZhuInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushDouDiZhuInit;
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

/** DouDiZhuActionType enum. */
export enum DouDiZhuActionType {
    JIAO = 1,
    QIANG = 2,
    CHU = 3,
    TRUSTEESHIP = 4,
    LEAVE = 5
}

/** Properties of a PushCountDown. */
export interface IPushCountDown {

    /** PushCountDown index */
    index: number;

    /** PushCountDown countdown */
    countdown: number;

    /** PushCountDown countdownType */
    countdownType: DouDiZhuActionType;

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
    public countdownType: DouDiZhuActionType;

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

/** Properties of a DouDiZhuActionReq. */
export interface IDouDiZhuActionReq {

    /** DouDiZhuActionReq actionType */
    actionType: DouDiZhuActionType;

    /** DouDiZhuActionReq jiao */
    jiao?: (boolean|null);

    /** DouDiZhuActionReq qiang */
    qiang?: (boolean|null);

    /** DouDiZhuActionReq cardInfo */
    cardInfo?: (ICardInfo[]|null);

    /** DouDiZhuActionReq isTrusteeship */
    isTrusteeship?: (boolean|null);
}

/** Represents a DouDiZhuActionReq. */
export class DouDiZhuActionReq implements IDouDiZhuActionReq {

    /**
     * Constructs a new DouDiZhuActionReq.
     * @param [p] Properties to set
     */
    constructor(p?: IDouDiZhuActionReq);

    /** DouDiZhuActionReq actionType. */
    public actionType: DouDiZhuActionType;

    /** DouDiZhuActionReq jiao. */
    public jiao: boolean;

    /** DouDiZhuActionReq qiang. */
    public qiang: boolean;

    /** DouDiZhuActionReq cardInfo. */
    public cardInfo: ICardInfo[];

    /** DouDiZhuActionReq isTrusteeship. */
    public isTrusteeship: boolean;

    /**
     * Creates a new DouDiZhuActionReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DouDiZhuActionReq instance
     */
    public static create(properties?: IDouDiZhuActionReq): DouDiZhuActionReq;

    /**
     * Encodes the specified DouDiZhuActionReq message. Does not implicitly {@link DouDiZhuActionReq.verify|verify} messages.
     * @param m DouDiZhuActionReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDouDiZhuActionReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DouDiZhuActionReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DouDiZhuActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DouDiZhuActionReq;
}

/** Properties of a DouDiZhuActionRes. */
export interface IDouDiZhuActionRes {

    /** DouDiZhuActionRes isSuccess */
    isSuccess: boolean;

    /** DouDiZhuActionRes tips */
    tips: string;
}

/** Represents a DouDiZhuActionRes. */
export class DouDiZhuActionRes implements IDouDiZhuActionRes {

    /**
     * Constructs a new DouDiZhuActionRes.
     * @param [p] Properties to set
     */
    constructor(p?: IDouDiZhuActionRes);

    /** DouDiZhuActionRes isSuccess. */
    public isSuccess: boolean;

    /** DouDiZhuActionRes tips. */
    public tips: string;

    /**
     * Creates a new DouDiZhuActionRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DouDiZhuActionRes instance
     */
    public static create(properties?: IDouDiZhuActionRes): DouDiZhuActionRes;

    /**
     * Encodes the specified DouDiZhuActionRes message. Does not implicitly {@link DouDiZhuActionRes.verify|verify} messages.
     * @param m DouDiZhuActionRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDouDiZhuActionRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DouDiZhuActionRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DouDiZhuActionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DouDiZhuActionRes;
}

/** Properties of an ActionJiaoRes. */
export interface IActionJiaoRes {

    /** ActionJiaoRes index */
    index: number;

    /** ActionJiaoRes isJiao */
    isJiao: boolean;

    /** ActionJiaoRes mutiple */
    mutiple: number;
}

/** Represents an ActionJiaoRes. */
export class ActionJiaoRes implements IActionJiaoRes {

    /**
     * Constructs a new ActionJiaoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IActionJiaoRes);

    /** ActionJiaoRes index. */
    public index: number;

    /** ActionJiaoRes isJiao. */
    public isJiao: boolean;

    /** ActionJiaoRes mutiple. */
    public mutiple: number;

    /**
     * Creates a new ActionJiaoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionJiaoRes instance
     */
    public static create(properties?: IActionJiaoRes): ActionJiaoRes;

    /**
     * Encodes the specified ActionJiaoRes message. Does not implicitly {@link ActionJiaoRes.verify|verify} messages.
     * @param m ActionJiaoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionJiaoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionJiaoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionJiaoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ActionJiaoRes;
}

/** Properties of an ActionQiangRes. */
export interface IActionQiangRes {

    /** ActionQiangRes index */
    index: number;

    /** ActionQiangRes isQiang */
    isQiang: boolean;

    /** ActionQiangRes mutiple */
    mutiple: number;
}

/** Represents an ActionQiangRes. */
export class ActionQiangRes implements IActionQiangRes {

    /**
     * Constructs a new ActionQiangRes.
     * @param [p] Properties to set
     */
    constructor(p?: IActionQiangRes);

    /** ActionQiangRes index. */
    public index: number;

    /** ActionQiangRes isQiang. */
    public isQiang: boolean;

    /** ActionQiangRes mutiple. */
    public mutiple: number;

    /**
     * Creates a new ActionQiangRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionQiangRes instance
     */
    public static create(properties?: IActionQiangRes): ActionQiangRes;

    /**
     * Encodes the specified ActionQiangRes message. Does not implicitly {@link ActionQiangRes.verify|verify} messages.
     * @param m ActionQiangRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionQiangRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionQiangRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionQiangRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ActionQiangRes;
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
    actionType: DouDiZhuActionType;

    /** PushAction jiao */
    jiao?: (IActionJiaoRes|null);

    /** PushAction qiang */
    qiang?: (IActionQiangRes|null);

    /** PushAction trusteeship */
    trusteeship?: (IActionTrusteeship|null);

    /** PushAction playCard */
    playCard?: (IActionPlayCard|null);
}

/** Represents a PushAction. */
export class PushAction implements IPushAction {

    /**
     * Constructs a new PushAction.
     * @param [p] Properties to set
     */
    constructor(p?: IPushAction);

    /** PushAction actionType. */
    public actionType: DouDiZhuActionType;

    /** PushAction jiao. */
    public jiao?: (IActionJiaoRes|null);

    /** PushAction qiang. */
    public qiang?: (IActionQiangRes|null);

    /** PushAction trusteeship. */
    public trusteeship?: (IActionTrusteeship|null);

    /** PushAction playCard. */
    public playCard?: (IActionPlayCard|null);

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

    /** PushFinalLandlordInfo landlordIndex */
    landlordIndex?: (number|null);

    /** PushFinalLandlordInfo cardInfo */
    cardInfo?: (ICardInfo[]|null);
}

/** Represents a PushFinalLandlordInfo. */
export class PushFinalLandlordInfo implements IPushFinalLandlordInfo {

    /**
     * Constructs a new PushFinalLandlordInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPushFinalLandlordInfo);

    /** PushFinalLandlordInfo landlordIndex. */
    public landlordIndex: number;

    /** PushFinalLandlordInfo cardInfo. */
    public cardInfo: ICardInfo[];

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

    /** PushSettlementInfo isSpring */
    isSpring: boolean;
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

    /** PushSettlementInfo isSpring. */
    public isSpring: boolean;

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
    member?: (IDouDiZhuMember[]|null);

    /** PushRejoinInfo cardInfo */
    cardInfo?: (ICardInfo[]|null);

    /** PushRejoinInfo playedCards */
    playedCards?: (ICardInfo[]|null);

    /** PushRejoinInfo playCard */
    playCard?: (IActionPlayCard|null);

    /** PushRejoinInfo canPlay */
    canPlay?: (boolean|null);

    /** PushRejoinInfo isTrusteeship */
    isTrusteeship?: (boolean|null);
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
    public member: IDouDiZhuMember[];

    /** PushRejoinInfo cardInfo. */
    public cardInfo: ICardInfo[];

    /** PushRejoinInfo playedCards. */
    public playedCards: ICardInfo[];

    /** PushRejoinInfo playCard. */
    public playCard?: (IActionPlayCard|null);

    /** PushRejoinInfo canPlay. */
    public canPlay: boolean;

    /** PushRejoinInfo isTrusteeship. */
    public isTrusteeship: boolean;

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

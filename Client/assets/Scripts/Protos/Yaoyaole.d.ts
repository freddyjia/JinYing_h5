import * as $protobuf from "protobufjs";
/** PlayType enum. */
export enum PlayType {
    YYL = 1,
    KUAI_SAN = 2
}

/** Step enum. */
export enum Step {
    saiziAnimationStep = 1,
    addChip = 2,
    maidinglishouStep = 3,
    settlement = 4
}

/** Properties of a YaoYaoLePlayerInfo. */
export interface IYaoYaoLePlayerInfo {

    /** YaoYaoLePlayerInfo playerId */
    playerId: string;

    /** YaoYaoLePlayerInfo userName */
    userName: string;

    /** YaoYaoLePlayerInfo headImageUrl */
    headImageUrl: string;

    /** YaoYaoLePlayerInfo headbox */
    headbox: string;

    /** YaoYaoLePlayerInfo vipLv */
    vipLv: number;

    /** YaoYaoLePlayerInfo gold */
    gold: string;

    /** YaoYaoLePlayerInfo city */
    city?: (string|null);

    /** YaoYaoLePlayerInfo province */
    province?: (string|null);
}

/** Represents a YaoYaoLePlayerInfo. */
export class YaoYaoLePlayerInfo implements IYaoYaoLePlayerInfo {

    /**
     * Constructs a new YaoYaoLePlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IYaoYaoLePlayerInfo);

    /** YaoYaoLePlayerInfo playerId. */
    public playerId: string;

    /** YaoYaoLePlayerInfo userName. */
    public userName: string;

    /** YaoYaoLePlayerInfo headImageUrl. */
    public headImageUrl: string;

    /** YaoYaoLePlayerInfo headbox. */
    public headbox: string;

    /** YaoYaoLePlayerInfo vipLv. */
    public vipLv: number;

    /** YaoYaoLePlayerInfo gold. */
    public gold: string;

    /** YaoYaoLePlayerInfo city. */
    public city: string;

    /** YaoYaoLePlayerInfo province. */
    public province: string;

    /**
     * Creates a new YaoYaoLePlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns YaoYaoLePlayerInfo instance
     */
    public static create(properties?: IYaoYaoLePlayerInfo): YaoYaoLePlayerInfo;

    /**
     * Encodes the specified YaoYaoLePlayerInfo message. Does not implicitly {@link YaoYaoLePlayerInfo.verify|verify} messages.
     * @param m YaoYaoLePlayerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IYaoYaoLePlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a YaoYaoLePlayerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns YaoYaoLePlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): YaoYaoLePlayerInfo;
}

/** Properties of a SitPlayerInfo. */
export interface ISitPlayerInfo {

    /** SitPlayerInfo index */
    index: number;

    /** SitPlayerInfo yaoYaoLePlayerInfo */
    yaoYaoLePlayerInfo: IYaoYaoLePlayerInfo;
}

/** Represents a SitPlayerInfo. */
export class SitPlayerInfo implements ISitPlayerInfo {

    /**
     * Constructs a new SitPlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISitPlayerInfo);

    /** SitPlayerInfo index. */
    public index: number;

    /** SitPlayerInfo yaoYaoLePlayerInfo. */
    public yaoYaoLePlayerInfo: IYaoYaoLePlayerInfo;

    /**
     * Creates a new SitPlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SitPlayerInfo instance
     */
    public static create(properties?: ISitPlayerInfo): SitPlayerInfo;

    /**
     * Encodes the specified SitPlayerInfo message. Does not implicitly {@link SitPlayerInfo.verify|verify} messages.
     * @param m SitPlayerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISitPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SitPlayerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SitPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SitPlayerInfo;
}

/** RewardType_KS enum. */
export enum RewardType_KS {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    DA = 7,
    XIAO = 8,
    DAN = 9,
    SHUANG = 10
}

/** RewardType_YYL enum. */
export enum RewardType_YYL {
    da = 1,
    xiao = 2,
    he = 3,
    baozhi1 = 4,
    baozhi2 = 5,
    baozhi3 = 6,
    baozhi4 = 7,
    baozhi5 = 8,
    baozhi6 = 9
}

/** Properties of a RewardPoint_KS. */
export interface IRewardPoint_KS {

    /** RewardPoint_KS point1 */
    point1: number;

    /** RewardPoint_KS point2 */
    point2: number;

    /** RewardPoint_KS point3 */
    point3: number;
}

/** Represents a RewardPoint_KS. */
export class RewardPoint_KS implements IRewardPoint_KS {

    /**
     * Constructs a new RewardPoint_KS.
     * @param [p] Properties to set
     */
    constructor(p?: IRewardPoint_KS);

    /** RewardPoint_KS point1. */
    public point1: number;

    /** RewardPoint_KS point2. */
    public point2: number;

    /** RewardPoint_KS point3. */
    public point3: number;

    /**
     * Creates a new RewardPoint_KS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RewardPoint_KS instance
     */
    public static create(properties?: IRewardPoint_KS): RewardPoint_KS;

    /**
     * Encodes the specified RewardPoint_KS message. Does not implicitly {@link RewardPoint_KS.verify|verify} messages.
     * @param m RewardPoint_KS message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRewardPoint_KS, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RewardPoint_KS message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RewardPoint_KS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RewardPoint_KS;
}

/** Properties of a RewardPoint_YYL. */
export interface IRewardPoint_YYL {

    /** RewardPoint_YYL point1 */
    point1: number;

    /** RewardPoint_YYL point2 */
    point2: number;
}

/** Represents a RewardPoint_YYL. */
export class RewardPoint_YYL implements IRewardPoint_YYL {

    /**
     * Constructs a new RewardPoint_YYL.
     * @param [p] Properties to set
     */
    constructor(p?: IRewardPoint_YYL);

    /** RewardPoint_YYL point1. */
    public point1: number;

    /** RewardPoint_YYL point2. */
    public point2: number;

    /**
     * Creates a new RewardPoint_YYL instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RewardPoint_YYL instance
     */
    public static create(properties?: IRewardPoint_YYL): RewardPoint_YYL;

    /**
     * Encodes the specified RewardPoint_YYL message. Does not implicitly {@link RewardPoint_YYL.verify|verify} messages.
     * @param m RewardPoint_YYL message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRewardPoint_YYL, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RewardPoint_YYL message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RewardPoint_YYL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RewardPoint_YYL;
}

/** Properties of a RoundResult_KS. */
export interface IRoundResult_KS {

    /** RoundResult_KS rewardPoint */
    rewardPoint: IRewardPoint_KS;

    /** RoundResult_KS bigType */
    bigType: RewardType_KS;

    /** RoundResult_KS singleType */
    singleType: RewardType_KS;
}

/** Represents a RoundResult_KS. */
export class RoundResult_KS implements IRoundResult_KS {

    /**
     * Constructs a new RoundResult_KS.
     * @param [p] Properties to set
     */
    constructor(p?: IRoundResult_KS);

    /** RoundResult_KS rewardPoint. */
    public rewardPoint: IRewardPoint_KS;

    /** RoundResult_KS bigType. */
    public bigType: RewardType_KS;

    /** RoundResult_KS singleType. */
    public singleType: RewardType_KS;

    /**
     * Creates a new RoundResult_KS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoundResult_KS instance
     */
    public static create(properties?: IRoundResult_KS): RoundResult_KS;

    /**
     * Encodes the specified RoundResult_KS message. Does not implicitly {@link RoundResult_KS.verify|verify} messages.
     * @param m RoundResult_KS message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoundResult_KS, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoundResult_KS message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoundResult_KS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoundResult_KS;
}

/** Properties of a RoundResult_YYL. */
export interface IRoundResult_YYL {

    /** RoundResult_YYL rewardPoint */
    rewardPoint: IRewardPoint_YYL;

    /** RoundResult_YYL rewardType1 */
    rewardType1: RewardType_YYL;

    /** RoundResult_YYL rewardType2 */
    rewardType2?: (RewardType_YYL|null);
}

/** Represents a RoundResult_YYL. */
export class RoundResult_YYL implements IRoundResult_YYL {

    /**
     * Constructs a new RoundResult_YYL.
     * @param [p] Properties to set
     */
    constructor(p?: IRoundResult_YYL);

    /** RoundResult_YYL rewardPoint. */
    public rewardPoint: IRewardPoint_YYL;

    /** RoundResult_YYL rewardType1. */
    public rewardType1: RewardType_YYL;

    /** RoundResult_YYL rewardType2. */
    public rewardType2: RewardType_YYL;

    /**
     * Creates a new RoundResult_YYL instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoundResult_YYL instance
     */
    public static create(properties?: IRoundResult_YYL): RoundResult_YYL;

    /**
     * Encodes the specified RoundResult_YYL message. Does not implicitly {@link RoundResult_YYL.verify|verify} messages.
     * @param m RoundResult_YYL message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoundResult_YYL, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoundResult_YYL message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoundResult_YYL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoundResult_YYL;
}

/** Properties of a BetGoldInfo_KS. */
export interface IBetGoldInfo_KS {

    /** BetGoldInfo_KS rewardType_KS */
    rewardType_KS: RewardType_KS;

    /** BetGoldInfo_KS gold */
    gold?: (number[]|null);
}

/** Represents a BetGoldInfo_KS. */
export class BetGoldInfo_KS implements IBetGoldInfo_KS {

    /**
     * Constructs a new BetGoldInfo_KS.
     * @param [p] Properties to set
     */
    constructor(p?: IBetGoldInfo_KS);

    /** BetGoldInfo_KS rewardType_KS. */
    public rewardType_KS: RewardType_KS;

    /** BetGoldInfo_KS gold. */
    public gold: number[];

    /**
     * Creates a new BetGoldInfo_KS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetGoldInfo_KS instance
     */
    public static create(properties?: IBetGoldInfo_KS): BetGoldInfo_KS;

    /**
     * Encodes the specified BetGoldInfo_KS message. Does not implicitly {@link BetGoldInfo_KS.verify|verify} messages.
     * @param m BetGoldInfo_KS message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetGoldInfo_KS, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetGoldInfo_KS message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetGoldInfo_KS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetGoldInfo_KS;
}

/** Properties of a BetGoldInfo_YYL. */
export interface IBetGoldInfo_YYL {

    /** BetGoldInfo_YYL rewardType_YYL */
    rewardType_YYL: RewardType_YYL;

    /** BetGoldInfo_YYL gold */
    gold?: (number[]|null);
}

/** Represents a BetGoldInfo_YYL. */
export class BetGoldInfo_YYL implements IBetGoldInfo_YYL {

    /**
     * Constructs a new BetGoldInfo_YYL.
     * @param [p] Properties to set
     */
    constructor(p?: IBetGoldInfo_YYL);

    /** BetGoldInfo_YYL rewardType_YYL. */
    public rewardType_YYL: RewardType_YYL;

    /** BetGoldInfo_YYL gold. */
    public gold: number[];

    /**
     * Creates a new BetGoldInfo_YYL instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetGoldInfo_YYL instance
     */
    public static create(properties?: IBetGoldInfo_YYL): BetGoldInfo_YYL;

    /**
     * Encodes the specified BetGoldInfo_YYL message. Does not implicitly {@link BetGoldInfo_YYL.verify|verify} messages.
     * @param m BetGoldInfo_YYL message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetGoldInfo_YYL, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetGoldInfo_YYL message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetGoldInfo_YYL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetGoldInfo_YYL;
}

/** Properties of a BetInfo. */
export interface IBetInfo {

    /** BetInfo playType */
    playType: PlayType;

    /** BetInfo ksGoldInfo */
    ksGoldInfo?: (IBetGoldInfo_KS|null);

    /** BetInfo yylGoldInfo */
    yylGoldInfo?: (IBetGoldInfo_YYL|null);
}

/** Represents a BetInfo. */
export class BetInfo implements IBetInfo {

    /**
     * Constructs a new BetInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBetInfo);

    /** BetInfo playType. */
    public playType: PlayType;

    /** BetInfo ksGoldInfo. */
    public ksGoldInfo?: (IBetGoldInfo_KS|null);

    /** BetInfo yylGoldInfo. */
    public yylGoldInfo?: (IBetGoldInfo_YYL|null);

    /**
     * Creates a new BetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetInfo instance
     */
    public static create(properties?: IBetInfo): BetInfo;

    /**
     * Encodes the specified BetInfo message. Does not implicitly {@link BetInfo.verify|verify} messages.
     * @param m BetInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetInfo;
}

/** Properties of a PlayerBetInfo. */
export interface IPlayerBetInfo {

    /** PlayerBetInfo playerId */
    playerId: string;

    /** PlayerBetInfo betInfo */
    betInfo?: (IBetInfo[]|null);

    /** PlayerBetInfo isShenSuanzi */
    isShenSuanzi: boolean;

    /** PlayerBetInfo gold */
    gold: number;
}

/** Represents a PlayerBetInfo. */
export class PlayerBetInfo implements IPlayerBetInfo {

    /**
     * Constructs a new PlayerBetInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerBetInfo);

    /** PlayerBetInfo playerId. */
    public playerId: string;

    /** PlayerBetInfo betInfo. */
    public betInfo: IBetInfo[];

    /** PlayerBetInfo isShenSuanzi. */
    public isShenSuanzi: boolean;

    /** PlayerBetInfo gold. */
    public gold: number;

    /**
     * Creates a new PlayerBetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerBetInfo instance
     */
    public static create(properties?: IPlayerBetInfo): PlayerBetInfo;

    /**
     * Encodes the specified PlayerBetInfo message. Does not implicitly {@link PlayerBetInfo.verify|verify} messages.
     * @param m PlayerBetInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerBetInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerBetInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerBetInfo;
}

/** Properties of a BetAreaInfo. */
export interface IBetAreaInfo {

    /** BetAreaInfo playType */
    playType: PlayType;

    /** BetAreaInfo rewardType_KS */
    rewardType_KS?: (RewardType_KS|null);

    /** BetAreaInfo rewardType_YYL */
    rewardType_YYL?: (RewardType_YYL|null);

    /** BetAreaInfo gold */
    gold: number;
}

/** Represents a BetAreaInfo. */
export class BetAreaInfo implements IBetAreaInfo {

    /**
     * Constructs a new BetAreaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IBetAreaInfo);

    /** BetAreaInfo playType. */
    public playType: PlayType;

    /** BetAreaInfo rewardType_KS. */
    public rewardType_KS: RewardType_KS;

    /** BetAreaInfo rewardType_YYL. */
    public rewardType_YYL: RewardType_YYL;

    /** BetAreaInfo gold. */
    public gold: number;

    /**
     * Creates a new BetAreaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetAreaInfo instance
     */
    public static create(properties?: IBetAreaInfo): BetAreaInfo;

    /**
     * Encodes the specified BetAreaInfo message. Does not implicitly {@link BetAreaInfo.verify|verify} messages.
     * @param m BetAreaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetAreaInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetAreaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetAreaInfo;
}

/** Properties of a PlayerOnlineInfo. */
export interface IPlayerOnlineInfo {

    /** PlayerOnlineInfo yaoYaoLePlayerInfo */
    yaoYaoLePlayerInfo: IYaoYaoLePlayerInfo;

    /** PlayerOnlineInfo addChipNum */
    addChipNum: number;

    /** PlayerOnlineInfo addChipGold */
    addChipGold: number;
}

/** Represents a PlayerOnlineInfo. */
export class PlayerOnlineInfo implements IPlayerOnlineInfo {

    /**
     * Constructs a new PlayerOnlineInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerOnlineInfo);

    /** PlayerOnlineInfo yaoYaoLePlayerInfo. */
    public yaoYaoLePlayerInfo: IYaoYaoLePlayerInfo;

    /** PlayerOnlineInfo addChipNum. */
    public addChipNum: number;

    /** PlayerOnlineInfo addChipGold. */
    public addChipGold: number;

    /**
     * Creates a new PlayerOnlineInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerOnlineInfo instance
     */
    public static create(properties?: IPlayerOnlineInfo): PlayerOnlineInfo;

    /**
     * Encodes the specified PlayerOnlineInfo message. Does not implicitly {@link PlayerOnlineInfo.verify|verify} messages.
     * @param m PlayerOnlineInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerOnlineInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerOnlineInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerOnlineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerOnlineInfo;
}

/** Properties of a MasterInfo. */
export interface IMasterInfo {

    /** MasterInfo index */
    index: number;

    /** MasterInfo playerOnlineInfo */
    playerOnlineInfo: IPlayerOnlineInfo;
}

/** Represents a MasterInfo. */
export class MasterInfo implements IMasterInfo {

    /**
     * Constructs a new MasterInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMasterInfo);

    /** MasterInfo index. */
    public index: number;

    /** MasterInfo playerOnlineInfo. */
    public playerOnlineInfo: IPlayerOnlineInfo;

    /**
     * Creates a new MasterInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MasterInfo instance
     */
    public static create(properties?: IMasterInfo): MasterInfo;

    /**
     * Encodes the specified MasterInfo message. Does not implicitly {@link MasterInfo.verify|verify} messages.
     * @param m MasterInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMasterInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MasterInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MasterInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MasterInfo;
}

/** Properties of a SitPlayerWinInfo. */
export interface ISitPlayerWinInfo {

    /** SitPlayerWinInfo index */
    index: number;

    /** SitPlayerWinInfo winGold */
    winGold: number;
}

/** Represents a SitPlayerWinInfo. */
export class SitPlayerWinInfo implements ISitPlayerWinInfo {

    /**
     * Constructs a new SitPlayerWinInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISitPlayerWinInfo);

    /** SitPlayerWinInfo index. */
    public index: number;

    /** SitPlayerWinInfo winGold. */
    public winGold: number;

    /**
     * Creates a new SitPlayerWinInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SitPlayerWinInfo instance
     */
    public static create(properties?: ISitPlayerWinInfo): SitPlayerWinInfo;

    /**
     * Encodes the specified SitPlayerWinInfo message. Does not implicitly {@link SitPlayerWinInfo.verify|verify} messages.
     * @param m SitPlayerWinInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISitPlayerWinInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SitPlayerWinInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SitPlayerWinInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SitPlayerWinInfo;
}

/** Properties of a SettlementRoleInfo. */
export interface ISettlementRoleInfo {

    /** SettlementRoleInfo playerId */
    playerId: string;

    /** SettlementRoleInfo userName */
    userName?: (string|null);

    /** SettlementRoleInfo headImageUrl */
    headImageUrl?: (string|null);

    /** SettlementRoleInfo headbox */
    headbox?: (string|null);

    /** SettlementRoleInfo vipLv */
    vipLv?: (number|null);

    /** SettlementRoleInfo resultGold */
    resultGold: number;

    /** SettlementRoleInfo index */
    index: number;
}

/** Represents a SettlementRoleInfo. */
export class SettlementRoleInfo implements ISettlementRoleInfo {

    /**
     * Constructs a new SettlementRoleInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISettlementRoleInfo);

    /** SettlementRoleInfo playerId. */
    public playerId: string;

    /** SettlementRoleInfo userName. */
    public userName: string;

    /** SettlementRoleInfo headImageUrl. */
    public headImageUrl: string;

    /** SettlementRoleInfo headbox. */
    public headbox: string;

    /** SettlementRoleInfo vipLv. */
    public vipLv: number;

    /** SettlementRoleInfo resultGold. */
    public resultGold: number;

    /** SettlementRoleInfo index. */
    public index: number;

    /**
     * Creates a new SettlementRoleInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SettlementRoleInfo instance
     */
    public static create(properties?: ISettlementRoleInfo): SettlementRoleInfo;

    /**
     * Encodes the specified SettlementRoleInfo message. Does not implicitly {@link SettlementRoleInfo.verify|verify} messages.
     * @param m SettlementRoleInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISettlementRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SettlementRoleInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SettlementRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SettlementRoleInfo;
}

/** Properties of a ClearingInfoPush. */
export interface IClearingInfoPush {

    /** ClearingInfoPush playType */
    playType: PlayType;

    /** ClearingInfoPush roundResult_KS */
    roundResult_KS?: (IRoundResult_KS|null);

    /** ClearingInfoPush roundResult_YYL */
    roundResult_YYL?: (IRoundResult_YYL|null);

    /** ClearingInfoPush sitPlayerWinInfos */
    sitPlayerWinInfos?: (ISitPlayerWinInfo[]|null);

    /** ClearingInfoPush meIsBet */
    meIsBet: boolean;

    /** ClearingInfoPush myWinGold */
    myWinGold: number;

    /** ClearingInfoPush settlementRoleInfo */
    settlementRoleInfo?: (ISettlementRoleInfo[]|null);

    /** ClearingInfoPush masterWinGold */
    masterWinGold: number;
}

/** Represents a ClearingInfoPush. */
export class ClearingInfoPush implements IClearingInfoPush {

    /**
     * Constructs a new ClearingInfoPush.
     * @param [p] Properties to set
     */
    constructor(p?: IClearingInfoPush);

    /** ClearingInfoPush playType. */
    public playType: PlayType;

    /** ClearingInfoPush roundResult_KS. */
    public roundResult_KS?: (IRoundResult_KS|null);

    /** ClearingInfoPush roundResult_YYL. */
    public roundResult_YYL?: (IRoundResult_YYL|null);

    /** ClearingInfoPush sitPlayerWinInfos. */
    public sitPlayerWinInfos: ISitPlayerWinInfo[];

    /** ClearingInfoPush meIsBet. */
    public meIsBet: boolean;

    /** ClearingInfoPush myWinGold. */
    public myWinGold: number;

    /** ClearingInfoPush settlementRoleInfo. */
    public settlementRoleInfo: ISettlementRoleInfo[];

    /** ClearingInfoPush masterWinGold. */
    public masterWinGold: number;

    /**
     * Creates a new ClearingInfoPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearingInfoPush instance
     */
    public static create(properties?: IClearingInfoPush): ClearingInfoPush;

    /**
     * Encodes the specified ClearingInfoPush message. Does not implicitly {@link ClearingInfoPush.verify|verify} messages.
     * @param m ClearingInfoPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClearingInfoPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClearingInfoPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClearingInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ClearingInfoPush;
}

/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo playType */
    playType: PlayType;

    /** RoomInfo roundResult_KSList */
    roundResult_KSList?: (IRoundResult_KS[]|null);

    /** RoomInfo roundResult_YYLList */
    roundResult_YYLList?: (IRoundResult_YYL[]|null);

    /** RoomInfo step */
    step: Step;

    /** RoomInfo remainTimeSec */
    remainTimeSec: number;

    /** RoomInfo playerBetInfos */
    playerBetInfos?: (IPlayerBetInfo[]|null);

    /** RoomInfo myPlayerBetInfo */
    myPlayerBetInfo?: (IPlayerBetInfo|null);

    /** RoomInfo myPlayerInfo */
    myPlayerInfo: IYaoYaoLePlayerInfo;

    /** RoomInfo sitPlayerInfo */
    sitPlayerInfo?: (ISitPlayerInfo[]|null);

    /** RoomInfo clearingInfoPush */
    clearingInfoPush?: (IClearingInfoPush|null);

    /** RoomInfo betBaseLimit */
    betBaseLimit: number;

    /** RoomInfo betCoinLimit */
    betCoinLimit: number;

    /** RoomInfo roundBetCoinLimit */
    roundBetCoinLimit: number;
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomInfo);

    /** RoomInfo playType. */
    public playType: PlayType;

    /** RoomInfo roundResult_KSList. */
    public roundResult_KSList: IRoundResult_KS[];

    /** RoomInfo roundResult_YYLList. */
    public roundResult_YYLList: IRoundResult_YYL[];

    /** RoomInfo step. */
    public step: Step;

    /** RoomInfo remainTimeSec. */
    public remainTimeSec: number;

    /** RoomInfo playerBetInfos. */
    public playerBetInfos: IPlayerBetInfo[];

    /** RoomInfo myPlayerBetInfo. */
    public myPlayerBetInfo?: (IPlayerBetInfo|null);

    /** RoomInfo myPlayerInfo. */
    public myPlayerInfo: IYaoYaoLePlayerInfo;

    /** RoomInfo sitPlayerInfo. */
    public sitPlayerInfo: ISitPlayerInfo[];

    /** RoomInfo clearingInfoPush. */
    public clearingInfoPush?: (IClearingInfoPush|null);

    /** RoomInfo betBaseLimit. */
    public betBaseLimit: number;

    /** RoomInfo betCoinLimit. */
    public betCoinLimit: number;

    /** RoomInfo roundBetCoinLimit. */
    public roundBetCoinLimit: number;

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

/** Properties of a BetReq. */
export interface IBetReq {

    /** BetReq playType */
    playType: PlayType;

    /** BetReq rewardType_KS */
    rewardType_KS?: (RewardType_KS|null);

    /** BetReq rewardType_YYL */
    rewardType_YYL?: (RewardType_YYL|null);

    /** BetReq gold */
    gold: number;
}

/** Represents a BetReq. */
export class BetReq implements IBetReq {

    /**
     * Constructs a new BetReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBetReq);

    /** BetReq playType. */
    public playType: PlayType;

    /** BetReq rewardType_KS. */
    public rewardType_KS: RewardType_KS;

    /** BetReq rewardType_YYL. */
    public rewardType_YYL: RewardType_YYL;

    /** BetReq gold. */
    public gold: number;

    /**
     * Creates a new BetReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetReq instance
     */
    public static create(properties?: IBetReq): BetReq;

    /**
     * Encodes the specified BetReq message. Does not implicitly {@link BetReq.verify|verify} messages.
     * @param m BetReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetReq;
}

/** Properties of a BetRsp. */
export interface IBetRsp {

    /** BetRsp success */
    success: boolean;

    /** BetRsp tip */
    tip: string;
}

/** Represents a BetRsp. */
export class BetRsp implements IBetRsp {

    /**
     * Constructs a new BetRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IBetRsp);

    /** BetRsp success. */
    public success: boolean;

    /** BetRsp tip. */
    public tip: string;

    /**
     * Creates a new BetRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetRsp instance
     */
    public static create(properties?: IBetRsp): BetRsp;

    /**
     * Encodes the specified BetRsp message. Does not implicitly {@link BetRsp.verify|verify} messages.
     * @param m BetRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetRsp;
}

/** Properties of a BetPushInfos. */
export interface IBetPushInfos {

    /** BetPushInfos playerBetInfos */
    playerBetInfos?: (IPlayerBetInfo[]|null);
}

/** Represents a BetPushInfos. */
export class BetPushInfos implements IBetPushInfos {

    /**
     * Constructs a new BetPushInfos.
     * @param [p] Properties to set
     */
    constructor(p?: IBetPushInfos);

    /** BetPushInfos playerBetInfos. */
    public playerBetInfos: IPlayerBetInfo[];

    /**
     * Creates a new BetPushInfos instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetPushInfos instance
     */
    public static create(properties?: IBetPushInfos): BetPushInfos;

    /**
     * Encodes the specified BetPushInfos message. Does not implicitly {@link BetPushInfos.verify|verify} messages.
     * @param m BetPushInfos message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetPushInfos, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetPushInfos message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetPushInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetPushInfos;
}

/** Properties of a StepInfoPush. */
export interface IStepInfoPush {

    /** StepInfoPush step */
    step: Step;

    /** StepInfoPush remainTimeSec */
    remainTimeSec: number;
}

/** Represents a StepInfoPush. */
export class StepInfoPush implements IStepInfoPush {

    /**
     * Constructs a new StepInfoPush.
     * @param [p] Properties to set
     */
    constructor(p?: IStepInfoPush);

    /** StepInfoPush step. */
    public step: Step;

    /** StepInfoPush remainTimeSec. */
    public remainTimeSec: number;

    /**
     * Creates a new StepInfoPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StepInfoPush instance
     */
    public static create(properties?: IStepInfoPush): StepInfoPush;

    /**
     * Encodes the specified StepInfoPush message. Does not implicitly {@link StepInfoPush.verify|verify} messages.
     * @param m StepInfoPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IStepInfoPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StepInfoPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns StepInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): StepInfoPush;
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

/** Properties of a SitInfoPush. */
export interface ISitInfoPush {

    /** SitInfoPush sitPlayerInfo */
    sitPlayerInfo?: (ISitPlayerInfo[]|null);
}

/** Represents a SitInfoPush. */
export class SitInfoPush implements ISitInfoPush {

    /**
     * Constructs a new SitInfoPush.
     * @param [p] Properties to set
     */
    constructor(p?: ISitInfoPush);

    /** SitInfoPush sitPlayerInfo. */
    public sitPlayerInfo: ISitPlayerInfo[];

    /**
     * Creates a new SitInfoPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SitInfoPush instance
     */
    public static create(properties?: ISitInfoPush): SitInfoPush;

    /**
     * Encodes the specified SitInfoPush message. Does not implicitly {@link SitInfoPush.verify|verify} messages.
     * @param m SitInfoPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISitInfoPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SitInfoPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SitInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SitInfoPush;
}

/** Properties of a kitOutpush. */
export interface IkitOutpush {
}

/** Represents a kitOutpush. */
export class kitOutpush implements IkitOutpush {

    /**
     * Constructs a new kitOutpush.
     * @param [p] Properties to set
     */
    constructor(p?: IkitOutpush);

    /**
     * Creates a new kitOutpush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns kitOutpush instance
     */
    public static create(properties?: IkitOutpush): kitOutpush;

    /**
     * Encodes the specified kitOutpush message. Does not implicitly {@link kitOutpush.verify|verify} messages.
     * @param m kitOutpush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IkitOutpush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a kitOutpush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns kitOutpush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): kitOutpush;
}

/** Properties of an OnlinePlayerInfoReq. */
export interface IOnlinePlayerInfoReq {
}

/** Represents an OnlinePlayerInfoReq. */
export class OnlinePlayerInfoReq implements IOnlinePlayerInfoReq {

    /**
     * Constructs a new OnlinePlayerInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IOnlinePlayerInfoReq);

    /**
     * Creates a new OnlinePlayerInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OnlinePlayerInfoReq instance
     */
    public static create(properties?: IOnlinePlayerInfoReq): OnlinePlayerInfoReq;

    /**
     * Encodes the specified OnlinePlayerInfoReq message. Does not implicitly {@link OnlinePlayerInfoReq.verify|verify} messages.
     * @param m OnlinePlayerInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOnlinePlayerInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OnlinePlayerInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OnlinePlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OnlinePlayerInfoReq;
}

/** Properties of an OnlinePlayerInfoRsp. */
export interface IOnlinePlayerInfoRsp {

    /** OnlinePlayerInfoRsp playerOnlineInfo */
    playerOnlineInfo?: (IPlayerOnlineInfo[]|null);
}

/** Represents an OnlinePlayerInfoRsp. */
export class OnlinePlayerInfoRsp implements IOnlinePlayerInfoRsp {

    /**
     * Constructs a new OnlinePlayerInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IOnlinePlayerInfoRsp);

    /** OnlinePlayerInfoRsp playerOnlineInfo. */
    public playerOnlineInfo: IPlayerOnlineInfo[];

    /**
     * Creates a new OnlinePlayerInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OnlinePlayerInfoRsp instance
     */
    public static create(properties?: IOnlinePlayerInfoRsp): OnlinePlayerInfoRsp;

    /**
     * Encodes the specified OnlinePlayerInfoRsp message. Does not implicitly {@link OnlinePlayerInfoRsp.verify|verify} messages.
     * @param m OnlinePlayerInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOnlinePlayerInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OnlinePlayerInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OnlinePlayerInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OnlinePlayerInfoRsp;
}

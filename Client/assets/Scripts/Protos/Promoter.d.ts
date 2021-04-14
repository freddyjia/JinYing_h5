import * as $protobuf from "protobufjs";
/** RewardState enum. */
export enum RewardState {
    UnIssue = 0,
    Issued = 1
}

/** Properties of a LevelInfo. */
export interface ILevelInfo {

    /** LevelInfo level */
    level: number;

    /** LevelInfo levelName */
    levelName: string;

    /** LevelInfo areaMin */
    areaMin: number;

    /** LevelInfo areaMax */
    areaMax: number;

    /** LevelInfo desc */
    desc: string;

    /** LevelInfo icon */
    icon: string;

    /** LevelInfo firstTaxRate */
    firstTaxRate: number;

    /** LevelInfo secondTaxRate */
    secondTaxRate: number;

    /** LevelInfo thirdaxRate */
    thirdaxRate: number;
}

/** Represents a LevelInfo. */
export class LevelInfo implements ILevelInfo {

    /**
     * Constructs a new LevelInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ILevelInfo);

    /** LevelInfo level. */
    public level: number;

    /** LevelInfo levelName. */
    public levelName: string;

    /** LevelInfo areaMin. */
    public areaMin: number;

    /** LevelInfo areaMax. */
    public areaMax: number;

    /** LevelInfo desc. */
    public desc: string;

    /** LevelInfo icon. */
    public icon: string;

    /** LevelInfo firstTaxRate. */
    public firstTaxRate: number;

    /** LevelInfo secondTaxRate. */
    public secondTaxRate: number;

    /** LevelInfo thirdaxRate. */
    public thirdaxRate: number;

    /**
     * Creates a new LevelInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LevelInfo instance
     */
    public static create(properties?: ILevelInfo): LevelInfo;

    /**
     * Encodes the specified LevelInfo message. Does not implicitly {@link LevelInfo.verify|verify} messages.
     * @param m LevelInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILevelInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LevelInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LevelInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LevelInfo;
}

/** Properties of a GetLevelInfoRes. */
export interface IGetLevelInfoRes {

    /** GetLevelInfoRes levelInfos */
    levelInfos?: (ILevelInfo[]|null);
}

/** Represents a GetLevelInfoRes. */
export class GetLevelInfoRes implements IGetLevelInfoRes {

    /**
     * Constructs a new GetLevelInfoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGetLevelInfoRes);

    /** GetLevelInfoRes levelInfos. */
    public levelInfos: ILevelInfo[];

    /**
     * Creates a new GetLevelInfoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetLevelInfoRes instance
     */
    public static create(properties?: IGetLevelInfoRes): GetLevelInfoRes;

    /**
     * Encodes the specified GetLevelInfoRes message. Does not implicitly {@link GetLevelInfoRes.verify|verify} messages.
     * @param m GetLevelInfoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetLevelInfoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetLevelInfoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetLevelInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetLevelInfoRes;
}

/** Properties of a GetMinePerformanceInfoResp. */
export interface IGetMinePerformanceInfoResp {

    /** GetMinePerformanceInfoResp performanceToday */
    performanceToday: number;

    /** GetMinePerformanceInfoResp incomeToday */
    incomeToday: number;

    /** GetMinePerformanceInfoResp oneLevelSubordinatesNum */
    oneLevelSubordinatesNum: number;

    /** GetMinePerformanceInfoResp curLevelExp */
    curLevelExp: (number|Long);
}

/** Represents a GetMinePerformanceInfoResp. */
export class GetMinePerformanceInfoResp implements IGetMinePerformanceInfoResp {

    /**
     * Constructs a new GetMinePerformanceInfoResp.
     * @param [p] Properties to set
     */
    constructor(p?: IGetMinePerformanceInfoResp);

    /** GetMinePerformanceInfoResp performanceToday. */
    public performanceToday: number;

    /** GetMinePerformanceInfoResp incomeToday. */
    public incomeToday: number;

    /** GetMinePerformanceInfoResp oneLevelSubordinatesNum. */
    public oneLevelSubordinatesNum: number;

    /** GetMinePerformanceInfoResp curLevelExp. */
    public curLevelExp: (number|Long);

    /**
     * Creates a new GetMinePerformanceInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMinePerformanceInfoResp instance
     */
    public static create(properties?: IGetMinePerformanceInfoResp): GetMinePerformanceInfoResp;

    /**
     * Encodes the specified GetMinePerformanceInfoResp message. Does not implicitly {@link GetMinePerformanceInfoResp.verify|verify} messages.
     * @param m GetMinePerformanceInfoResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetMinePerformanceInfoResp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMinePerformanceInfoResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetMinePerformanceInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetMinePerformanceInfoResp;
}

/** Properties of a GetMinePlayersInfoReq. */
export interface IGetMinePlayersInfoReq {

    /** GetMinePlayersInfoReq dateKey */
    dateKey: string;

    /** GetMinePlayersInfoReq pageIndex */
    pageIndex: number;
}

/** Represents a GetMinePlayersInfoReq. */
export class GetMinePlayersInfoReq implements IGetMinePlayersInfoReq {

    /**
     * Constructs a new GetMinePlayersInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetMinePlayersInfoReq);

    /** GetMinePlayersInfoReq dateKey. */
    public dateKey: string;

    /** GetMinePlayersInfoReq pageIndex. */
    public pageIndex: number;

    /**
     * Creates a new GetMinePlayersInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMinePlayersInfoReq instance
     */
    public static create(properties?: IGetMinePlayersInfoReq): GetMinePlayersInfoReq;

    /**
     * Encodes the specified GetMinePlayersInfoReq message. Does not implicitly {@link GetMinePlayersInfoReq.verify|verify} messages.
     * @param m GetMinePlayersInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetMinePlayersInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMinePlayersInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetMinePlayersInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetMinePlayersInfoReq;
}

/** Properties of a SubordinateIncomeInfo. */
export interface ISubordinateIncomeInfo {

    /** SubordinateIncomeInfo subordinateId */
    subordinateId: (number|Long);

    /** SubordinateIncomeInfo subordinateName */
    subordinateName: string;

    /** SubordinateIncomeInfo performanceForMeFromSubordinateId */
    performanceForMeFromSubordinateId: number;

    /** SubordinateIncomeInfo performanceFromSubordinateIdOneAndTwoLevel */
    performanceFromSubordinateIdOneAndTwoLevel: number;

    /** SubordinateIncomeInfo incomeForMeToday */
    incomeForMeToday: number;
}

/** Represents a SubordinateIncomeInfo. */
export class SubordinateIncomeInfo implements ISubordinateIncomeInfo {

    /**
     * Constructs a new SubordinateIncomeInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISubordinateIncomeInfo);

    /** SubordinateIncomeInfo subordinateId. */
    public subordinateId: (number|Long);

    /** SubordinateIncomeInfo subordinateName. */
    public subordinateName: string;

    /** SubordinateIncomeInfo performanceForMeFromSubordinateId. */
    public performanceForMeFromSubordinateId: number;

    /** SubordinateIncomeInfo performanceFromSubordinateIdOneAndTwoLevel. */
    public performanceFromSubordinateIdOneAndTwoLevel: number;

    /** SubordinateIncomeInfo incomeForMeToday. */
    public incomeForMeToday: number;

    /**
     * Creates a new SubordinateIncomeInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubordinateIncomeInfo instance
     */
    public static create(properties?: ISubordinateIncomeInfo): SubordinateIncomeInfo;

    /**
     * Encodes the specified SubordinateIncomeInfo message. Does not implicitly {@link SubordinateIncomeInfo.verify|verify} messages.
     * @param m SubordinateIncomeInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISubordinateIncomeInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubordinateIncomeInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SubordinateIncomeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SubordinateIncomeInfo;
}

/** Properties of a GetMinePlayersInfoRes. */
export interface IGetMinePlayersInfoRes {

    /** GetMinePlayersInfoRes totalPage */
    totalPage: number;

    /** GetMinePlayersInfoRes subordinateIncomeInfoList */
    subordinateIncomeInfoList?: (ISubordinateIncomeInfo[]|null);

    /** GetMinePlayersInfoRes performanceAllToday */
    performanceAllToday: number;

    /** GetMinePlayersInfoRes incomeAllToday */
    incomeAllToday: number;

    /** GetMinePlayersInfoRes performanceOneLevelNum */
    performanceOneLevelNum: number;
}

/** Represents a GetMinePlayersInfoRes. */
export class GetMinePlayersInfoRes implements IGetMinePlayersInfoRes {

    /**
     * Constructs a new GetMinePlayersInfoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGetMinePlayersInfoRes);

    /** GetMinePlayersInfoRes totalPage. */
    public totalPage: number;

    /** GetMinePlayersInfoRes subordinateIncomeInfoList. */
    public subordinateIncomeInfoList: ISubordinateIncomeInfo[];

    /** GetMinePlayersInfoRes performanceAllToday. */
    public performanceAllToday: number;

    /** GetMinePlayersInfoRes incomeAllToday. */
    public incomeAllToday: number;

    /** GetMinePlayersInfoRes performanceOneLevelNum. */
    public performanceOneLevelNum: number;

    /**
     * Creates a new GetMinePlayersInfoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMinePlayersInfoRes instance
     */
    public static create(properties?: IGetMinePlayersInfoRes): GetMinePlayersInfoRes;

    /**
     * Encodes the specified GetMinePlayersInfoRes message. Does not implicitly {@link GetMinePlayersInfoRes.verify|verify} messages.
     * @param m GetMinePlayersInfoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetMinePlayersInfoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMinePlayersInfoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetMinePlayersInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetMinePlayersInfoRes;
}

/** Properties of an IncomeDayInfo. */
export interface IIncomeDayInfo {

    /** IncomeDayInfo date */
    date: (number|Long);

    /** IncomeDayInfo incomeOneLevelToday */
    incomeOneLevelToday: number;

    /** IncomeDayInfo incomeTwoAndThreeLevelToday */
    incomeTwoAndThreeLevelToday: number;

    /** IncomeDayInfo incomeToday */
    incomeToday: number;
}

/** Represents an IncomeDayInfo. */
export class IncomeDayInfo implements IIncomeDayInfo {

    /**
     * Constructs a new IncomeDayInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IIncomeDayInfo);

    /** IncomeDayInfo date. */
    public date: (number|Long);

    /** IncomeDayInfo incomeOneLevelToday. */
    public incomeOneLevelToday: number;

    /** IncomeDayInfo incomeTwoAndThreeLevelToday. */
    public incomeTwoAndThreeLevelToday: number;

    /** IncomeDayInfo incomeToday. */
    public incomeToday: number;

    /**
     * Creates a new IncomeDayInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IncomeDayInfo instance
     */
    public static create(properties?: IIncomeDayInfo): IncomeDayInfo;

    /**
     * Encodes the specified IncomeDayInfo message. Does not implicitly {@link IncomeDayInfo.verify|verify} messages.
     * @param m IncomeDayInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIncomeDayInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IncomeDayInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IncomeDayInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): IncomeDayInfo;
}

/** Properties of a GetMineDayIncomeInfo. */
export interface IGetMineDayIncomeInfo {

    /** GetMineDayIncomeInfo pageIndex */
    pageIndex: number;
}

/** Represents a GetMineDayIncomeInfo. */
export class GetMineDayIncomeInfo implements IGetMineDayIncomeInfo {

    /**
     * Constructs a new GetMineDayIncomeInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IGetMineDayIncomeInfo);

    /** GetMineDayIncomeInfo pageIndex. */
    public pageIndex: number;

    /**
     * Creates a new GetMineDayIncomeInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMineDayIncomeInfo instance
     */
    public static create(properties?: IGetMineDayIncomeInfo): GetMineDayIncomeInfo;

    /**
     * Encodes the specified GetMineDayIncomeInfo message. Does not implicitly {@link GetMineDayIncomeInfo.verify|verify} messages.
     * @param m GetMineDayIncomeInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetMineDayIncomeInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMineDayIncomeInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetMineDayIncomeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetMineDayIncomeInfo;
}

/** Properties of a MineDayIncomeInfoResp. */
export interface IMineDayIncomeInfoResp {

    /** MineDayIncomeInfoResp totalPage */
    totalPage: number;

    /** MineDayIncomeInfoResp incomeDayInfoList */
    incomeDayInfoList?: (IIncomeDayInfo[]|null);
}

/** Represents a MineDayIncomeInfoResp. */
export class MineDayIncomeInfoResp implements IMineDayIncomeInfoResp {

    /**
     * Constructs a new MineDayIncomeInfoResp.
     * @param [p] Properties to set
     */
    constructor(p?: IMineDayIncomeInfoResp);

    /** MineDayIncomeInfoResp totalPage. */
    public totalPage: number;

    /** MineDayIncomeInfoResp incomeDayInfoList. */
    public incomeDayInfoList: IIncomeDayInfo[];

    /**
     * Creates a new MineDayIncomeInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MineDayIncomeInfoResp instance
     */
    public static create(properties?: IMineDayIncomeInfoResp): MineDayIncomeInfoResp;

    /**
     * Encodes the specified MineDayIncomeInfoResp message. Does not implicitly {@link MineDayIncomeInfoResp.verify|verify} messages.
     * @param m MineDayIncomeInfoResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMineDayIncomeInfoResp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MineDayIncomeInfoResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MineDayIncomeInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MineDayIncomeInfoResp;
}

/** Properties of a GetMinePromoteInfoRes. */
export interface IGetMinePromoteInfoRes {

    /** GetMinePromoteInfoRes teamNum */
    teamNum: number;

    /** GetMinePromoteInfoRes directPlayerNum */
    directPlayerNum: number;

    /** GetMinePromoteInfoRes dailyAdd */
    dailyAdd: number;

    /** GetMinePromoteInfoRes activeNum */
    activeNum: number;
}

/** 1、主要显示内容：团队人数、直属下级、今日新增人数、今日登陆人数 */
export class GetMinePromoteInfoRes implements IGetMinePromoteInfoRes {

    /**
     * Constructs a new GetMinePromoteInfoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGetMinePromoteInfoRes);

    /** GetMinePromoteInfoRes teamNum. */
    public teamNum: number;

    /** GetMinePromoteInfoRes directPlayerNum. */
    public directPlayerNum: number;

    /** GetMinePromoteInfoRes dailyAdd. */
    public dailyAdd: number;

    /** GetMinePromoteInfoRes activeNum. */
    public activeNum: number;

    /**
     * Creates a new GetMinePromoteInfoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMinePromoteInfoRes instance
     */
    public static create(properties?: IGetMinePromoteInfoRes): GetMinePromoteInfoRes;

    /**
     * Encodes the specified GetMinePromoteInfoRes message. Does not implicitly {@link GetMinePromoteInfoRes.verify|verify} messages.
     * @param m GetMinePromoteInfoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetMinePromoteInfoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMinePromoteInfoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetMinePromoteInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetMinePromoteInfoRes;
}

/** Properties of a GetMineRewardsInfoRes. */
export interface IGetMineRewardsInfoRes {

    /** GetMineRewardsInfoRes totalReward */
    totalReward: (number|Long);

    /** GetMineRewardsInfoRes totalDeposited */
    totalDeposited: (number|Long);

    /** GetMineRewardsInfoRes canDeposit */
    canDeposit: (number|Long);
}

/** Represents a GetMineRewardsInfoRes. */
export class GetMineRewardsInfoRes implements IGetMineRewardsInfoRes {

    /**
     * Constructs a new GetMineRewardsInfoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGetMineRewardsInfoRes);

    /** GetMineRewardsInfoRes totalReward. */
    public totalReward: (number|Long);

    /** GetMineRewardsInfoRes totalDeposited. */
    public totalDeposited: (number|Long);

    /** GetMineRewardsInfoRes canDeposit. */
    public canDeposit: (number|Long);

    /**
     * Creates a new GetMineRewardsInfoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMineRewardsInfoRes instance
     */
    public static create(properties?: IGetMineRewardsInfoRes): GetMineRewardsInfoRes;

    /**
     * Encodes the specified GetMineRewardsInfoRes message. Does not implicitly {@link GetMineRewardsInfoRes.verify|verify} messages.
     * @param m GetMineRewardsInfoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetMineRewardsInfoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMineRewardsInfoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetMineRewardsInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetMineRewardsInfoRes;
}

/** Properties of a GetTakeRewardsInfoReq. */
export interface IGetTakeRewardsInfoReq {

    /** GetTakeRewardsInfoReq pageIndex */
    pageIndex: number;
}

/** Represents a GetTakeRewardsInfoReq. */
export class GetTakeRewardsInfoReq implements IGetTakeRewardsInfoReq {

    /**
     * Constructs a new GetTakeRewardsInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetTakeRewardsInfoReq);

    /** GetTakeRewardsInfoReq pageIndex. */
    public pageIndex: number;

    /**
     * Creates a new GetTakeRewardsInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetTakeRewardsInfoReq instance
     */
    public static create(properties?: IGetTakeRewardsInfoReq): GetTakeRewardsInfoReq;

    /**
     * Encodes the specified GetTakeRewardsInfoReq message. Does not implicitly {@link GetTakeRewardsInfoReq.verify|verify} messages.
     * @param m GetTakeRewardsInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetTakeRewardsInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetTakeRewardsInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetTakeRewardsInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetTakeRewardsInfoReq;
}

/** Properties of a TakeRewardInfo. */
export interface ITakeRewardInfo {

    /** TakeRewardInfo date */
    date: (number|Long);

    /** TakeRewardInfo depositNum */
    depositNum: number;

    /** TakeRewardInfo state */
    state: RewardState;
}

/** Represents a TakeRewardInfo. */
export class TakeRewardInfo implements ITakeRewardInfo {

    /**
     * Constructs a new TakeRewardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ITakeRewardInfo);

    /** TakeRewardInfo date. */
    public date: (number|Long);

    /** TakeRewardInfo depositNum. */
    public depositNum: number;

    /** TakeRewardInfo state. */
    public state: RewardState;

    /**
     * Creates a new TakeRewardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeRewardInfo instance
     */
    public static create(properties?: ITakeRewardInfo): TakeRewardInfo;

    /**
     * Encodes the specified TakeRewardInfo message. Does not implicitly {@link TakeRewardInfo.verify|verify} messages.
     * @param m TakeRewardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITakeRewardInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeRewardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TakeRewardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TakeRewardInfo;
}

/** Properties of a GetTakeRewardsInfoRes. */
export interface IGetTakeRewardsInfoRes {

    /** GetTakeRewardsInfoRes totalPage */
    totalPage: number;

    /** GetTakeRewardsInfoRes takeRewardInfos */
    takeRewardInfos?: (ITakeRewardInfo[]|null);
}

/** Represents a GetTakeRewardsInfoRes. */
export class GetTakeRewardsInfoRes implements IGetTakeRewardsInfoRes {

    /**
     * Constructs a new GetTakeRewardsInfoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGetTakeRewardsInfoRes);

    /** GetTakeRewardsInfoRes totalPage. */
    public totalPage: number;

    /** GetTakeRewardsInfoRes takeRewardInfos. */
    public takeRewardInfos: ITakeRewardInfo[];

    /**
     * Creates a new GetTakeRewardsInfoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetTakeRewardsInfoRes instance
     */
    public static create(properties?: IGetTakeRewardsInfoRes): GetTakeRewardsInfoRes;

    /**
     * Encodes the specified GetTakeRewardsInfoRes message. Does not implicitly {@link GetTakeRewardsInfoRes.verify|verify} messages.
     * @param m GetTakeRewardsInfoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetTakeRewardsInfoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetTakeRewardsInfoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetTakeRewardsInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetTakeRewardsInfoRes;
}

/** Properties of an ApplyDepositReq. */
export interface IApplyDepositReq {

    /** ApplyDepositReq depositNum */
    depositNum: number;
}

/** Represents an ApplyDepositReq. */
export class ApplyDepositReq implements IApplyDepositReq {

    /**
     * Constructs a new ApplyDepositReq.
     * @param [p] Properties to set
     */
    constructor(p?: IApplyDepositReq);

    /** ApplyDepositReq depositNum. */
    public depositNum: number;

    /**
     * Creates a new ApplyDepositReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyDepositReq instance
     */
    public static create(properties?: IApplyDepositReq): ApplyDepositReq;

    /**
     * Encodes the specified ApplyDepositReq message. Does not implicitly {@link ApplyDepositReq.verify|verify} messages.
     * @param m ApplyDepositReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IApplyDepositReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyDepositReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ApplyDepositReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ApplyDepositReq;
}

/** Properties of an ApplyDepositRes. */
export interface IApplyDepositRes {

    /** ApplyDepositRes success */
    success: boolean;

    /** ApplyDepositRes tip */
    tip?: (string|null);

    /** ApplyDepositRes infoRes */
    infoRes?: (IGetMineRewardsInfoRes|null);

    /** ApplyDepositRes curLevelExp */
    curLevelExp?: (number|Long|null);

    /** ApplyDepositRes takeRewardInfos */
    takeRewardInfos?: (ITakeRewardInfo|null);
}

/** Represents an ApplyDepositRes. */
export class ApplyDepositRes implements IApplyDepositRes {

    /**
     * Constructs a new ApplyDepositRes.
     * @param [p] Properties to set
     */
    constructor(p?: IApplyDepositRes);

    /** ApplyDepositRes success. */
    public success: boolean;

    /** ApplyDepositRes tip. */
    public tip: string;

    /** ApplyDepositRes infoRes. */
    public infoRes?: (IGetMineRewardsInfoRes|null);

    /** ApplyDepositRes curLevelExp. */
    public curLevelExp: (number|Long);

    /** ApplyDepositRes takeRewardInfos. */
    public takeRewardInfos?: (ITakeRewardInfo|null);

    /**
     * Creates a new ApplyDepositRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyDepositRes instance
     */
    public static create(properties?: IApplyDepositRes): ApplyDepositRes;

    /**
     * Encodes the specified ApplyDepositRes message. Does not implicitly {@link ApplyDepositRes.verify|verify} messages.
     * @param m ApplyDepositRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IApplyDepositRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyDepositRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ApplyDepositRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ApplyDepositRes;
}

/** Properties of an UploadLeaderIDReq. */
export interface IUploadLeaderIDReq {

    /** UploadLeaderIDReq leaderPlayerId */
    leaderPlayerId: string;
}

/** Represents an UploadLeaderIDReq. */
export class UploadLeaderIDReq implements IUploadLeaderIDReq {

    /**
     * Constructs a new UploadLeaderIDReq.
     * @param [p] Properties to set
     */
    constructor(p?: IUploadLeaderIDReq);

    /** UploadLeaderIDReq leaderPlayerId. */
    public leaderPlayerId: string;

    /**
     * Creates a new UploadLeaderIDReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UploadLeaderIDReq instance
     */
    public static create(properties?: IUploadLeaderIDReq): UploadLeaderIDReq;

    /**
     * Encodes the specified UploadLeaderIDReq message. Does not implicitly {@link UploadLeaderIDReq.verify|verify} messages.
     * @param m UploadLeaderIDReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUploadLeaderIDReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UploadLeaderIDReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UploadLeaderIDReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UploadLeaderIDReq;
}

/** Properties of an UploadLeaderIDRes. */
export interface IUploadLeaderIDRes {

    /** UploadLeaderIDRes success */
    success: boolean;

    /** UploadLeaderIDRes leaderId */
    leaderId?: (string|null);
}

/** Represents an UploadLeaderIDRes. */
export class UploadLeaderIDRes implements IUploadLeaderIDRes {

    /**
     * Constructs a new UploadLeaderIDRes.
     * @param [p] Properties to set
     */
    constructor(p?: IUploadLeaderIDRes);

    /** UploadLeaderIDRes success. */
    public success: boolean;

    /** UploadLeaderIDRes leaderId. */
    public leaderId: string;

    /**
     * Creates a new UploadLeaderIDRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UploadLeaderIDRes instance
     */
    public static create(properties?: IUploadLeaderIDRes): UploadLeaderIDRes;

    /**
     * Encodes the specified UploadLeaderIDRes message. Does not implicitly {@link UploadLeaderIDRes.verify|verify} messages.
     * @param m UploadLeaderIDRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUploadLeaderIDRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UploadLeaderIDRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UploadLeaderIDRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UploadLeaderIDRes;
}

import * as $protobuf from "protobufjs";
/** Step enum. */
export enum Step {
    xiazhu = 1,
    jiesuan = 2
}

/** ShowAnimalEnum enum. */
export enum ShowAnimalEnum {
    notAnimalEnum = 0,
    yanzi = 1,
    gezi = 2,
    kongque = 3,
    laoying = 4,
    tuzi = 5,
    houzi = 6,
    xiongmao = 7,
    shizi = 8,
    jinsha = 9,
    yingsha = 10,
    tongchi = 11,
    tongpei = 12
}

/** addChipAnimalEnum enum. */
export enum addChipAnimalEnum {
    notAnimalEnum_addChip = 0,
    yanzi_addChip = 1,
    gezi_addChip = 2,
    kongque_addChip = 3,
    laoying_addChip = 4,
    tuzi_addChip = 5,
    houzi_addChip = 6,
    xiongmao_addChip = 7,
    shizi_addChip = 8,
    jinsha_addChip = 9,
    feiqin_addChip = 101,
    zoushou_addChip = 201
}

/** ResultBigType enum. */
export enum ResultBigType {
    notResultBigType = 0,
    feiqin = 1,
    zoushou = 2
}

/** Properties of a StepInfo. */
export interface IStepInfo {

    /** StepInfo step */
    step: Step;

    /** StepInfo remain */
    remain: number;
}

/** Represents a StepInfo. */
export class StepInfo implements IStepInfo {

    /**
     * Constructs a new StepInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IStepInfo);

    /** StepInfo step. */
    public step: Step;

    /** StepInfo remain. */
    public remain: number;

    /**
     * Creates a new StepInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StepInfo instance
     */
    public static create(properties?: IStepInfo): StepInfo;

    /**
     * Encodes the specified StepInfo message. Does not implicitly {@link StepInfo.verify|verify} messages.
     * @param m StepInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IStepInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StepInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns StepInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): StepInfo;
}

/** Properties of a SingleBetInfo. */
export interface ISingleBetInfo {

    /** SingleBetInfo animalEnum */
    animalEnum: addChipAnimalEnum;

    /** SingleBetInfo BetGold */
    BetGold: string;
}

/** Represents a SingleBetInfo. */
export class SingleBetInfo implements ISingleBetInfo {

    /**
     * Constructs a new SingleBetInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISingleBetInfo);

    /** SingleBetInfo animalEnum. */
    public animalEnum: addChipAnimalEnum;

    /** SingleBetInfo BetGold. */
    public BetGold: string;

    /**
     * Creates a new SingleBetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SingleBetInfo instance
     */
    public static create(properties?: ISingleBetInfo): SingleBetInfo;

    /**
     * Encodes the specified SingleBetInfo message. Does not implicitly {@link SingleBetInfo.verify|verify} messages.
     * @param m SingleBetInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISingleBetInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SingleBetInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SingleBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SingleBetInfo;
}

/** Properties of a PlayerBetInfo. */
export interface IPlayerBetInfo {

    /** PlayerBetInfo playerId */
    playerId: string;

    /** PlayerBetInfo singleBetInfo */
    singleBetInfo?: (ISingleBetInfo[]|null);

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

    /** PlayerBetInfo singleBetInfo. */
    public singleBetInfo: ISingleBetInfo[];

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

/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

    /** PlayerInfo playerId */
    playerId: string;

    /** PlayerInfo name */
    name?: (string|null);

    /** PlayerInfo headUrl */
    headUrl?: (string|null);

    /** PlayerInfo gold */
    gold?: (string|null);

    /** PlayerInfo headBox */
    headBox?: (string|null);

    /** PlayerInfo vipLevel */
    vipLevel: string;
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

    /** PlayerInfo name. */
    public name: string;

    /** PlayerInfo headUrl. */
    public headUrl: string;

    /** PlayerInfo gold. */
    public gold: string;

    /** PlayerInfo headBox. */
    public headBox: string;

    /** PlayerInfo vipLevel. */
    public vipLevel: string;

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

/** Properties of a MasterInfo. */
export interface IMasterInfo {

    /** MasterInfo playerInfo */
    playerInfo: IPlayerInfo;

    /** MasterInfo currentRoun */
    currentRoun: number;

    /** MasterInfo isRequestQuit */
    isRequestQuit: boolean;
}

/** Represents a MasterInfo. */
export class MasterInfo implements IMasterInfo {

    /**
     * Constructs a new MasterInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMasterInfo);

    /** MasterInfo playerInfo. */
    public playerInfo: IPlayerInfo;

    /** MasterInfo currentRoun. */
    public currentRoun: number;

    /** MasterInfo isRequestQuit. */
    public isRequestQuit: boolean;

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

/** Properties of an AreaBeyInfo. */
export interface IAreaBeyInfo {

    /** AreaBeyInfo animalEnum */
    animalEnum: addChipAnimalEnum;

    /** AreaBeyInfo totalBetGold */
    totalBetGold: string;
}

/** Represents an AreaBeyInfo. */
export class AreaBeyInfo implements IAreaBeyInfo {

    /**
     * Constructs a new AreaBeyInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IAreaBeyInfo);

    /** AreaBeyInfo animalEnum. */
    public animalEnum: addChipAnimalEnum;

    /** AreaBeyInfo totalBetGold. */
    public totalBetGold: string;

    /**
     * Creates a new AreaBeyInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AreaBeyInfo instance
     */
    public static create(properties?: IAreaBeyInfo): AreaBeyInfo;

    /**
     * Encodes the specified AreaBeyInfo message. Does not implicitly {@link AreaBeyInfo.verify|verify} messages.
     * @param m AreaBeyInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAreaBeyInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AreaBeyInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AreaBeyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AreaBeyInfo;
}

/** Properties of a ClearingInfo. */
export interface IClearingInfo {

    /** ClearingInfo firstIndex */
    firstIndex: number;

    /** ClearingInfo firstResultBigType */
    firstResultBigType: ResultBigType;

    /** ClearingInfo senondIndex */
    senondIndex: number;

    /** ClearingInfo myWinGold */
    myWinGold: number;

    /** ClearingInfo BankerWinGold */
    BankerWinGold: number;

    /** ClearingInfo settlementRoleInfo */
    settlementRoleInfo?: (ISettlementRoleInfo[]|null);

    /** ClearingInfo hasBet */
    hasBet: boolean;

    /** ClearingInfo betInfos */
    betInfos?: (IAreaBeyInfo[]|null);
}

/** Represents a ClearingInfo. */
export class ClearingInfo implements IClearingInfo {

    /**
     * Constructs a new ClearingInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IClearingInfo);

    /** ClearingInfo firstIndex. */
    public firstIndex: number;

    /** ClearingInfo firstResultBigType. */
    public firstResultBigType: ResultBigType;

    /** ClearingInfo senondIndex. */
    public senondIndex: number;

    /** ClearingInfo myWinGold. */
    public myWinGold: number;

    /** ClearingInfo BankerWinGold. */
    public BankerWinGold: number;

    /** ClearingInfo settlementRoleInfo. */
    public settlementRoleInfo: ISettlementRoleInfo[];

    /** ClearingInfo hasBet. */
    public hasBet: boolean;

    /** ClearingInfo betInfos. */
    public betInfos: IAreaBeyInfo[];

    /**
     * Creates a new ClearingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearingInfo instance
     */
    public static create(properties?: IClearingInfo): ClearingInfo;

    /**
     * Encodes the specified ClearingInfo message. Does not implicitly {@link ClearingInfo.verify|verify} messages.
     * @param m ClearingInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClearingInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClearingInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClearingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ClearingInfo;
}

/** Properties of a RoomInfoPush. */
export interface IRoomInfoPush {

    /** RoomInfoPush onlinePlayerInfos */
    onlinePlayerInfos?: (IPlayerInfo[]|null);

    /** RoomInfoPush masterInfo */
    masterInfo: IMasterInfo;

    /** RoomInfoPush last8Result */
    last8Result?: (ShowAnimalEnum[]|null);

    /** RoomInfoPush myInfo */
    myInfo: IPlayerInfo;

    /** RoomInfoPush betInfos */
    betInfos?: (IPlayerBetInfo[]|null);

    /** RoomInfoPush stepInfo */
    stepInfo: IStepInfo;

    /** RoomInfoPush clearingInfo */
    clearingInfo?: (IClearingInfo|null);

    /** RoomInfoPush lastRoundAnimalIndex */
    lastRoundAnimalIndex: number;

    /** RoomInfoPush betBaseLimit */
    betBaseLimit: number;

    /** RoomInfoPush roundBetCoinLimit */
    roundBetCoinLimit: number;

    /** RoomInfoPush bankerGoldLimit */
    bankerGoldLimit: number;

    /** RoomInfoPush animalKeyLimit_1 */
    animalKeyLimit_1?: (number|null);

    /** RoomInfoPush animalKeyLimit_2 */
    animalKeyLimit_2?: (number|null);

    /** RoomInfoPush animalKeyLimit_3 */
    animalKeyLimit_3?: (number|null);

    /** RoomInfoPush animalKeyLimit_4 */
    animalKeyLimit_4?: (number|null);

    /** RoomInfoPush animalKeyLimit_5 */
    animalKeyLimit_5?: (number|null);

    /** RoomInfoPush animalKeyLimit_6 */
    animalKeyLimit_6?: (number|null);

    /** RoomInfoPush animalKeyLimit_7 */
    animalKeyLimit_7?: (number|null);

    /** RoomInfoPush animalKeyLimit_8 */
    animalKeyLimit_8?: (number|null);

    /** RoomInfoPush animalKeyLimit_9 */
    animalKeyLimit_9?: (number|null);

    /** RoomInfoPush animalKeyLimit_101 */
    animalKeyLimit_101?: (number|null);

    /** RoomInfoPush animalKeyLimit_201 */
    animalKeyLimit_201?: (number|null);
}

/** Represents a RoomInfoPush. */
export class RoomInfoPush implements IRoomInfoPush {

    /**
     * Constructs a new RoomInfoPush.
     * @param [p] Properties to set
     */
    constructor(p?: IRoomInfoPush);

    /** RoomInfoPush onlinePlayerInfos. */
    public onlinePlayerInfos: IPlayerInfo[];

    /** RoomInfoPush masterInfo. */
    public masterInfo: IMasterInfo;

    /** RoomInfoPush last8Result. */
    public last8Result: ShowAnimalEnum[];

    /** RoomInfoPush myInfo. */
    public myInfo: IPlayerInfo;

    /** RoomInfoPush betInfos. */
    public betInfos: IPlayerBetInfo[];

    /** RoomInfoPush stepInfo. */
    public stepInfo: IStepInfo;

    /** RoomInfoPush clearingInfo. */
    public clearingInfo?: (IClearingInfo|null);

    /** RoomInfoPush lastRoundAnimalIndex. */
    public lastRoundAnimalIndex: number;

    /** RoomInfoPush betBaseLimit. */
    public betBaseLimit: number;

    /** RoomInfoPush roundBetCoinLimit. */
    public roundBetCoinLimit: number;

    /** RoomInfoPush bankerGoldLimit. */
    public bankerGoldLimit: number;

    /** RoomInfoPush animalKeyLimit_1. */
    public animalKeyLimit_1: number;

    /** RoomInfoPush animalKeyLimit_2. */
    public animalKeyLimit_2: number;

    /** RoomInfoPush animalKeyLimit_3. */
    public animalKeyLimit_3: number;

    /** RoomInfoPush animalKeyLimit_4. */
    public animalKeyLimit_4: number;

    /** RoomInfoPush animalKeyLimit_5. */
    public animalKeyLimit_5: number;

    /** RoomInfoPush animalKeyLimit_6. */
    public animalKeyLimit_6: number;

    /** RoomInfoPush animalKeyLimit_7. */
    public animalKeyLimit_7: number;

    /** RoomInfoPush animalKeyLimit_8. */
    public animalKeyLimit_8: number;

    /** RoomInfoPush animalKeyLimit_9. */
    public animalKeyLimit_9: number;

    /** RoomInfoPush animalKeyLimit_101. */
    public animalKeyLimit_101: number;

    /** RoomInfoPush animalKeyLimit_201. */
    public animalKeyLimit_201: number;

    /**
     * Creates a new RoomInfoPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfoPush instance
     */
    public static create(properties?: IRoomInfoPush): RoomInfoPush;

    /**
     * Encodes the specified RoomInfoPush message. Does not implicitly {@link RoomInfoPush.verify|verify} messages.
     * @param m RoomInfoPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoomInfoPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomInfoPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoomInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoomInfoPush;
}

/** Properties of a BetReq. */
export interface IBetReq {

    /** BetReq animalEnum */
    animalEnum: addChipAnimalEnum;

    /** BetReq betMoney */
    betMoney: number;
}

/** Represents a BetReq. */
export class BetReq implements IBetReq {

    /**
     * Constructs a new BetReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBetReq);

    /** BetReq animalEnum. */
    public animalEnum: addChipAnimalEnum;

    /** BetReq betMoney. */
    public betMoney: number;

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

/** Properties of a SingleReqBet. */
export interface ISingleReqBet {

    /** SingleReqBet animalEnum */
    animalEnum: addChipAnimalEnum;

    /** SingleReqBet betMoney */
    betMoney: number;
}

/** Represents a SingleReqBet. */
export class SingleReqBet implements ISingleReqBet {

    /**
     * Constructs a new SingleReqBet.
     * @param [p] Properties to set
     */
    constructor(p?: ISingleReqBet);

    /** SingleReqBet animalEnum. */
    public animalEnum: addChipAnimalEnum;

    /** SingleReqBet betMoney. */
    public betMoney: number;

    /**
     * Creates a new SingleReqBet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SingleReqBet instance
     */
    public static create(properties?: ISingleReqBet): SingleReqBet;

    /**
     * Encodes the specified SingleReqBet message. Does not implicitly {@link SingleReqBet.verify|verify} messages.
     * @param m SingleReqBet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISingleReqBet, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SingleReqBet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SingleReqBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SingleReqBet;
}

/** Properties of a BetMultiReq. */
export interface IBetMultiReq {

    /** BetMultiReq singleBet */
    singleBet?: (ISingleReqBet[]|null);
}

/** Represents a BetMultiReq. */
export class BetMultiReq implements IBetMultiReq {

    /**
     * Constructs a new BetMultiReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBetMultiReq);

    /** BetMultiReq singleBet. */
    public singleBet: ISingleReqBet[];

    /**
     * Creates a new BetMultiReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetMultiReq instance
     */
    public static create(properties?: IBetMultiReq): BetMultiReq;

    /**
     * Encodes the specified BetMultiReq message. Does not implicitly {@link BetMultiReq.verify|verify} messages.
     * @param m BetMultiReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetMultiReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetMultiReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetMultiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetMultiReq;
}

/** Properties of a BetMultiRsp. */
export interface IBetMultiRsp {

    /** BetMultiRsp success */
    success: boolean;

    /** BetMultiRsp tip */
    tip: string;
}

/** Represents a BetMultiRsp. */
export class BetMultiRsp implements IBetMultiRsp {

    /**
     * Constructs a new BetMultiRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IBetMultiRsp);

    /** BetMultiRsp success. */
    public success: boolean;

    /** BetMultiRsp tip. */
    public tip: string;

    /**
     * Creates a new BetMultiRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetMultiRsp instance
     */
    public static create(properties?: IBetMultiRsp): BetMultiRsp;

    /**
     * Encodes the specified BetMultiRsp message. Does not implicitly {@link BetMultiRsp.verify|verify} messages.
     * @param m BetMultiRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetMultiRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetMultiRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetMultiRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetMultiRsp;
}

/** Properties of a BetInfoPush. */
export interface IBetInfoPush {

    /** BetInfoPush playerBetInfo */
    playerBetInfo?: (IPlayerBetInfo[]|null);
}

/** Represents a BetInfoPush. */
export class BetInfoPush implements IBetInfoPush {

    /**
     * Constructs a new BetInfoPush.
     * @param [p] Properties to set
     */
    constructor(p?: IBetInfoPush);

    /** BetInfoPush playerBetInfo. */
    public playerBetInfo: IPlayerBetInfo[];

    /**
     * Creates a new BetInfoPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetInfoPush instance
     */
    public static create(properties?: IBetInfoPush): BetInfoPush;

    /**
     * Encodes the specified BetInfoPush message. Does not implicitly {@link BetInfoPush.verify|verify} messages.
     * @param m BetInfoPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBetInfoPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetInfoPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BetInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BetInfoPush;
}

/** Properties of an ApplyBankReq. */
export interface IApplyBankReq {
}

/** Represents an ApplyBankReq. */
export class ApplyBankReq implements IApplyBankReq {

    /**
     * Constructs a new ApplyBankReq.
     * @param [p] Properties to set
     */
    constructor(p?: IApplyBankReq);

    /**
     * Creates a new ApplyBankReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyBankReq instance
     */
    public static create(properties?: IApplyBankReq): ApplyBankReq;

    /**
     * Encodes the specified ApplyBankReq message. Does not implicitly {@link ApplyBankReq.verify|verify} messages.
     * @param m ApplyBankReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IApplyBankReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyBankReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ApplyBankReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ApplyBankReq;
}

/** Properties of an ApplyBankRsp. */
export interface IApplyBankRsp {

    /** ApplyBankRsp success */
    success: boolean;

    /** ApplyBankRsp tip */
    tip: string;
}

/** Represents an ApplyBankRsp. */
export class ApplyBankRsp implements IApplyBankRsp {

    /**
     * Constructs a new ApplyBankRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IApplyBankRsp);

    /** ApplyBankRsp success. */
    public success: boolean;

    /** ApplyBankRsp tip. */
    public tip: string;

    /**
     * Creates a new ApplyBankRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyBankRsp instance
     */
    public static create(properties?: IApplyBankRsp): ApplyBankRsp;

    /**
     * Encodes the specified ApplyBankRsp message. Does not implicitly {@link ApplyBankRsp.verify|verify} messages.
     * @param m ApplyBankRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IApplyBankRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyBankRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ApplyBankRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ApplyBankRsp;
}

/** Properties of a StepInfoPush. */
export interface IStepInfoPush {

    /** StepInfoPush stepInfo */
    stepInfo: IStepInfo;
}

/** Represents a StepInfoPush. */
export class StepInfoPush implements IStepInfoPush {

    /**
     * Constructs a new StepInfoPush.
     * @param [p] Properties to set
     */
    constructor(p?: IStepInfoPush);

    /** StepInfoPush stepInfo. */
    public stepInfo: IStepInfo;

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

/** Properties of a leaveRoomReq. */
export interface IleaveRoomReq {
}

/** Represents a leaveRoomReq. */
export class leaveRoomReq implements IleaveRoomReq {

    /**
     * Constructs a new leaveRoomReq.
     * @param [p] Properties to set
     */
    constructor(p?: IleaveRoomReq);

    /**
     * Creates a new leaveRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns leaveRoomReq instance
     */
    public static create(properties?: IleaveRoomReq): leaveRoomReq;

    /**
     * Encodes the specified leaveRoomReq message. Does not implicitly {@link leaveRoomReq.verify|verify} messages.
     * @param m leaveRoomReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IleaveRoomReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a leaveRoomReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns leaveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): leaveRoomReq;
}

/** Properties of a leaveRoomRsp. */
export interface IleaveRoomRsp {

    /** leaveRoomRsp success */
    success: boolean;
}

/** Represents a leaveRoomRsp. */
export class leaveRoomRsp implements IleaveRoomRsp {

    /**
     * Constructs a new leaveRoomRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IleaveRoomRsp);

    /** leaveRoomRsp success. */
    public success: boolean;

    /**
     * Creates a new leaveRoomRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns leaveRoomRsp instance
     */
    public static create(properties?: IleaveRoomRsp): leaveRoomRsp;

    /**
     * Encodes the specified leaveRoomRsp message. Does not implicitly {@link leaveRoomRsp.verify|verify} messages.
     * @param m leaveRoomRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IleaveRoomRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a leaveRoomRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns leaveRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): leaveRoomRsp;
}

/** Properties of a BankChangePush. */
export interface IBankChangePush {

    /** BankChangePush masterInfo */
    masterInfo: IMasterInfo;
}

/** Represents a BankChangePush. */
export class BankChangePush implements IBankChangePush {

    /**
     * Constructs a new BankChangePush.
     * @param [p] Properties to set
     */
    constructor(p?: IBankChangePush);

    /** BankChangePush masterInfo. */
    public masterInfo: IMasterInfo;

    /**
     * Creates a new BankChangePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BankChangePush instance
     */
    public static create(properties?: IBankChangePush): BankChangePush;

    /**
     * Encodes the specified BankChangePush message. Does not implicitly {@link BankChangePush.verify|verify} messages.
     * @param m BankChangePush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBankChangePush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BankChangePush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BankChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BankChangePush;
}

/** Properties of a PlayerLeavePush. */
export interface IPlayerLeavePush {

    /** PlayerLeavePush players */
    players?: (string[]|null);
}

/** Represents a PlayerLeavePush. */
export class PlayerLeavePush implements IPlayerLeavePush {

    /**
     * Constructs a new PlayerLeavePush.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerLeavePush);

    /** PlayerLeavePush players. */
    public players: string[];

    /**
     * Creates a new PlayerLeavePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerLeavePush instance
     */
    public static create(properties?: IPlayerLeavePush): PlayerLeavePush;

    /**
     * Encodes the specified PlayerLeavePush message. Does not implicitly {@link PlayerLeavePush.verify|verify} messages.
     * @param m PlayerLeavePush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerLeavePush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerLeavePush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerLeavePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerLeavePush;
}

/** Properties of a ClearingInfoPush. */
export interface IClearingInfoPush {

    /** ClearingInfoPush clearingInfo */
    clearingInfo: IClearingInfo;
}

/** Represents a ClearingInfoPush. */
export class ClearingInfoPush implements IClearingInfoPush {

    /**
     * Constructs a new ClearingInfoPush.
     * @param [p] Properties to set
     */
    constructor(p?: IClearingInfoPush);

    /** ClearingInfoPush clearingInfo. */
    public clearingInfo: IClearingInfo;

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

/** Properties of a quitBankerReq. */
export interface IquitBankerReq {
}

/** Represents a quitBankerReq. */
export class quitBankerReq implements IquitBankerReq {

    /**
     * Constructs a new quitBankerReq.
     * @param [p] Properties to set
     */
    constructor(p?: IquitBankerReq);

    /**
     * Creates a new quitBankerReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns quitBankerReq instance
     */
    public static create(properties?: IquitBankerReq): quitBankerReq;

    /**
     * Encodes the specified quitBankerReq message. Does not implicitly {@link quitBankerReq.verify|verify} messages.
     * @param m quitBankerReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IquitBankerReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a quitBankerReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns quitBankerReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): quitBankerReq;
}

/** Properties of a quitBankerRsp. */
export interface IquitBankerRsp {

    /** quitBankerRsp success */
    success: boolean;

    /** quitBankerRsp tip */
    tip: string;
}

/** Represents a quitBankerRsp. */
export class quitBankerRsp implements IquitBankerRsp {

    /**
     * Constructs a new quitBankerRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IquitBankerRsp);

    /** quitBankerRsp success. */
    public success: boolean;

    /** quitBankerRsp tip. */
    public tip: string;

    /**
     * Creates a new quitBankerRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns quitBankerRsp instance
     */
    public static create(properties?: IquitBankerRsp): quitBankerRsp;

    /**
     * Encodes the specified quitBankerRsp message. Does not implicitly {@link quitBankerRsp.verify|verify} messages.
     * @param m quitBankerRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IquitBankerRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a quitBankerRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns quitBankerRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): quitBankerRsp;
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

/** Properties of an onlinePlayerInfoReq. */
export interface IonlinePlayerInfoReq {
}

/** Represents an onlinePlayerInfoReq. */
export class onlinePlayerInfoReq implements IonlinePlayerInfoReq {

    /**
     * Constructs a new onlinePlayerInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IonlinePlayerInfoReq);

    /**
     * Creates a new onlinePlayerInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns onlinePlayerInfoReq instance
     */
    public static create(properties?: IonlinePlayerInfoReq): onlinePlayerInfoReq;

    /**
     * Encodes the specified onlinePlayerInfoReq message. Does not implicitly {@link onlinePlayerInfoReq.verify|verify} messages.
     * @param m onlinePlayerInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IonlinePlayerInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an onlinePlayerInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns onlinePlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): onlinePlayerInfoReq;
}

/** Properties of an onlinePlayerInfoRsp. */
export interface IonlinePlayerInfoRsp {

    /** onlinePlayerInfoRsp playerInfos */
    playerInfos?: (IPlayerInfo[]|null);
}

/** Represents an onlinePlayerInfoRsp. */
export class onlinePlayerInfoRsp implements IonlinePlayerInfoRsp {

    /**
     * Constructs a new onlinePlayerInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IonlinePlayerInfoRsp);

    /** onlinePlayerInfoRsp playerInfos. */
    public playerInfos: IPlayerInfo[];

    /**
     * Creates a new onlinePlayerInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns onlinePlayerInfoRsp instance
     */
    public static create(properties?: IonlinePlayerInfoRsp): onlinePlayerInfoRsp;

    /**
     * Encodes the specified onlinePlayerInfoRsp message. Does not implicitly {@link onlinePlayerInfoRsp.verify|verify} messages.
     * @param m onlinePlayerInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IonlinePlayerInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an onlinePlayerInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns onlinePlayerInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): onlinePlayerInfoRsp;
}

/** Properties of a wantBeBankerListReq. */
export interface IwantBeBankerListReq {
}

/** Represents a wantBeBankerListReq. */
export class wantBeBankerListReq implements IwantBeBankerListReq {

    /**
     * Constructs a new wantBeBankerListReq.
     * @param [p] Properties to set
     */
    constructor(p?: IwantBeBankerListReq);

    /**
     * Creates a new wantBeBankerListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns wantBeBankerListReq instance
     */
    public static create(properties?: IwantBeBankerListReq): wantBeBankerListReq;

    /**
     * Encodes the specified wantBeBankerListReq message. Does not implicitly {@link wantBeBankerListReq.verify|verify} messages.
     * @param m wantBeBankerListReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IwantBeBankerListReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a wantBeBankerListReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns wantBeBankerListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): wantBeBankerListReq;
}

/** Properties of a wantBeBankerListRsp. */
export interface IwantBeBankerListRsp {

    /** wantBeBankerListRsp playerInfos */
    playerInfos?: (IPlayerInfo[]|null);
}

/** Represents a wantBeBankerListRsp. */
export class wantBeBankerListRsp implements IwantBeBankerListRsp {

    /**
     * Constructs a new wantBeBankerListRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IwantBeBankerListRsp);

    /** wantBeBankerListRsp playerInfos. */
    public playerInfos: IPlayerInfo[];

    /**
     * Creates a new wantBeBankerListRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns wantBeBankerListRsp instance
     */
    public static create(properties?: IwantBeBankerListRsp): wantBeBankerListRsp;

    /**
     * Encodes the specified wantBeBankerListRsp message. Does not implicitly {@link wantBeBankerListRsp.verify|verify} messages.
     * @param m wantBeBankerListRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IwantBeBankerListRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a wantBeBankerListRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns wantBeBankerListRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): wantBeBankerListRsp;
}

/** MemberListType enum. */
export enum MemberListType {
    Richer = 1,
    Clever = 2,
    PlayerBanker = 3,
    SystemBanker = 4,
    Common = 5
}

/** Properties of a RoleInfo. */
export interface IRoleInfo {

    /** RoleInfo playerId */
    playerId: string;

    /** RoleInfo userName */
    userName: string;

    /** RoleInfo headImageUrl */
    headImageUrl: string;

    /** RoleInfo headbox */
    headbox: string;

    /** RoleInfo vipLv */
    vipLv: number;

    /** RoleInfo gold */
    gold: string;

    /** RoleInfo totalWin */
    totalWin?: (number|null);

    /** RoleInfo totalBet */
    totalBet?: (number|null);

    /** RoleInfo type */
    type?: (MemberListType|null);

    /** RoleInfo rankIndex */
    rankIndex?: (number|null);
}

/** Represents a RoleInfo. */
export class RoleInfo implements IRoleInfo {

    /**
     * Constructs a new RoleInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRoleInfo);

    /** RoleInfo playerId. */
    public playerId: string;

    /** RoleInfo userName. */
    public userName: string;

    /** RoleInfo headImageUrl. */
    public headImageUrl: string;

    /** RoleInfo headbox. */
    public headbox: string;

    /** RoleInfo vipLv. */
    public vipLv: number;

    /** RoleInfo gold. */
    public gold: string;

    /** RoleInfo totalWin. */
    public totalWin: number;

    /** RoleInfo totalBet. */
    public totalBet: number;

    /** RoleInfo type. */
    public type: MemberListType;

    /** RoleInfo rankIndex. */
    public rankIndex: number;

    /**
     * Creates a new RoleInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoleInfo instance
     */
    public static create(properties?: IRoleInfo): RoleInfo;

    /**
     * Encodes the specified RoleInfo message. Does not implicitly {@link RoleInfo.verify|verify} messages.
     * @param m RoleInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoleInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleInfo;
}

/** Properties of a RankingListReq. */
export interface IRankingListReq {
}

/** Represents a RankingListReq. */
export class RankingListReq implements IRankingListReq {

    /**
     * Constructs a new RankingListReq.
     * @param [p] Properties to set
     */
    constructor(p?: IRankingListReq);

    /**
     * Creates a new RankingListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankingListReq instance
     */
    public static create(properties?: IRankingListReq): RankingListReq;

    /**
     * Encodes the specified RankingListReq message. Does not implicitly {@link RankingListReq.verify|verify} messages.
     * @param m RankingListReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRankingListReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankingListReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RankingListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RankingListReq;
}

/** Properties of a RankingListRes. */
export interface IRankingListRes {

    /** RankingListRes rankingList */
    rankingList?: (IRoleInfo[]|null);
}

/** Represents a RankingListRes. */
export class RankingListRes implements IRankingListRes {

    /**
     * Constructs a new RankingListRes.
     * @param [p] Properties to set
     */
    constructor(p?: IRankingListRes);

    /** RankingListRes rankingList. */
    public rankingList: IRoleInfo[];

    /**
     * Creates a new RankingListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankingListRes instance
     */
    public static create(properties?: IRankingListRes): RankingListRes;

    /**
     * Encodes the specified RankingListRes message. Does not implicitly {@link RankingListRes.verify|verify} messages.
     * @param m RankingListRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRankingListRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankingListRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RankingListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RankingListRes;
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

    /** SettlementRoleInfo type */
    type: MemberListType;
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

    /** SettlementRoleInfo type. */
    public type: MemberListType;

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

/** WinStatus enum. */
export enum WinStatus {
    RedWinStatus = 1,
    BlackWinStatus = 2,
    EqualWinStatus = 3
}

/** CommonChipType enum. */
export enum CommonChipType {
    CommonChip1 = 100,
    CommonChip10 = 1000,
    CommonChip50 = 5000,
    CommonChip100 = 10000,
    CommonChip500 = 50000,
    CommonChip1000 = 100000
}

/** Properties of a KickoutRoom. */
export interface IKickoutRoom {

    /** KickoutRoom tips */
    tips?: (string|null);
}

/** Represents a KickoutRoom. */
export class KickoutRoom implements IKickoutRoom {

    /**
     * Constructs a new KickoutRoom.
     * @param [p] Properties to set
     */
    constructor(p?: IKickoutRoom);

    /** KickoutRoom tips. */
    public tips: string;

    /**
     * Creates a new KickoutRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KickoutRoom instance
     */
    public static create(properties?: IKickoutRoom): KickoutRoom;

    /**
     * Encodes the specified KickoutRoom message. Does not implicitly {@link KickoutRoom.verify|verify} messages.
     * @param m KickoutRoom message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IKickoutRoom, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KickoutRoom message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns KickoutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): KickoutRoom;
}

/** Properties of a PushAlreadyGame. */
export interface IPushAlreadyGame {

    /** PushAlreadyGame tips */
    tips: string;

    /** PushAlreadyGame playInfo */
    playInfo: IPlayInfo;

    /** PushAlreadyGame extra */
    extra?: (string|null);
}

/** Represents a PushAlreadyGame. */
export class PushAlreadyGame implements IPushAlreadyGame {

    /**
     * Constructs a new PushAlreadyGame.
     * @param [p] Properties to set
     */
    constructor(p?: IPushAlreadyGame);

    /** PushAlreadyGame tips. */
    public tips: string;

    /** PushAlreadyGame playInfo. */
    public playInfo: IPlayInfo;

    /** PushAlreadyGame extra. */
    public extra: string;

    /**
     * Creates a new PushAlreadyGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushAlreadyGame instance
     */
    public static create(properties?: IPushAlreadyGame): PushAlreadyGame;

    /**
     * Encodes the specified PushAlreadyGame message. Does not implicitly {@link PushAlreadyGame.verify|verify} messages.
     * @param m PushAlreadyGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushAlreadyGame, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushAlreadyGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushAlreadyGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushAlreadyGame;
}

/** Properties of a KickoutToLogin. */
export interface IKickoutToLogin {

    /** KickoutToLogin tips */
    tips?: (string|null);
}

/** Represents a KickoutToLogin. */
export class KickoutToLogin implements IKickoutToLogin {

    /**
     * Constructs a new KickoutToLogin.
     * @param [p] Properties to set
     */
    constructor(p?: IKickoutToLogin);

    /** KickoutToLogin tips. */
    public tips: string;

    /**
     * Creates a new KickoutToLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KickoutToLogin instance
     */
    public static create(properties?: IKickoutToLogin): KickoutToLogin;

    /**
     * Encodes the specified KickoutToLogin message. Does not implicitly {@link KickoutToLogin.verify|verify} messages.
     * @param m KickoutToLogin message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IKickoutToLogin, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KickoutToLogin message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns KickoutToLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): KickoutToLogin;
}

/** Properties of a GameData. */
export interface IGameData {

    /** GameData playType */
    playType: number;

    /** GameData desc */
    desc: string;

    /** GameData icon */
    icon: string;

    /** GameData order */
    order: number;

    /** GameData single */
    single: boolean;

    /** GameData isOpen */
    isOpen: boolean;

    /** GameData showUpdate */
    showUpdate: boolean;

    /** GameData spineType */
    spineType: number;

    /** GameData spineStep */
    spineStep: number;

    /** GameData isH5Open */
    isH5Open?: (boolean|null);
}

/** Represents a GameData. */
export class GameData implements IGameData {

    /**
     * Constructs a new GameData.
     * @param [p] Properties to set
     */
    constructor(p?: IGameData);

    /** GameData playType. */
    public playType: number;

    /** GameData desc. */
    public desc: string;

    /** GameData icon. */
    public icon: string;

    /** GameData order. */
    public order: number;

    /** GameData single. */
    public single: boolean;

    /** GameData isOpen. */
    public isOpen: boolean;

    /** GameData showUpdate. */
    public showUpdate: boolean;

    /** GameData spineType. */
    public spineType: number;

    /** GameData spineStep. */
    public spineStep: number;

    /** GameData isH5Open. */
    public isH5Open: boolean;

    /**
     * Creates a new GameData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameData instance
     */
    public static create(properties?: IGameData): GameData;

    /**
     * Encodes the specified GameData message. Does not implicitly {@link GameData.verify|verify} messages.
     * @param m GameData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameData;
}

/** Properties of a ADData. */
export interface IADData {

    /** ADData adId */
    adId: number;

    /** ADData adPic */
    adPic: string;

    /** ADData order */
    order: number;

    /** ADData showTime */
    showTime: number;

    /** ADData isHaveFunction */
    isHaveFunction: boolean;

    /** ADData functionType */
    functionType?: (number|null);

    /** ADData script */
    script?: (string|null);

    /** ADData scriptH5 */
    scriptH5?: (string|null);
}

/** Represents a ADData. */
export class ADData implements IADData {

    /**
     * Constructs a new ADData.
     * @param [p] Properties to set
     */
    constructor(p?: IADData);

    /** ADData adId. */
    public adId: number;

    /** ADData adPic. */
    public adPic: string;

    /** ADData order. */
    public order: number;

    /** ADData showTime. */
    public showTime: number;

    /** ADData isHaveFunction. */
    public isHaveFunction: boolean;

    /** ADData functionType. */
    public functionType: number;

    /** ADData script. */
    public script: string;

    /** ADData scriptH5. */
    public scriptH5: string;

    /**
     * Creates a new ADData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ADData instance
     */
    public static create(properties?: IADData): ADData;

    /**
     * Encodes the specified ADData message. Does not implicitly {@link ADData.verify|verify} messages.
     * @param m ADData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IADData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ADData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ADData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ADData;
}

/** Properties of a HallDataReq. */
export interface IHallDataReq {
}

/** Represents a HallDataReq. */
export class HallDataReq implements IHallDataReq {

    /**
     * Constructs a new HallDataReq.
     * @param [p] Properties to set
     */
    constructor(p?: IHallDataReq);

    /**
     * Creates a new HallDataReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HallDataReq instance
     */
    public static create(properties?: IHallDataReq): HallDataReq;

    /**
     * Encodes the specified HallDataReq message. Does not implicitly {@link HallDataReq.verify|verify} messages.
     * @param m HallDataReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHallDataReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HallDataReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HallDataReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HallDataReq;
}

/** Properties of a HallDataRes. */
export interface IHallDataRes {

    /** HallDataRes gamedata */
    gamedata?: (IGameData[]|null);

    /** HallDataRes addata */
    addata?: (IADData[]|null);
}

/** Represents a HallDataRes. */
export class HallDataRes implements IHallDataRes {

    /**
     * Constructs a new HallDataRes.
     * @param [p] Properties to set
     */
    constructor(p?: IHallDataRes);

    /** HallDataRes gamedata. */
    public gamedata: IGameData[];

    /** HallDataRes addata. */
    public addata: IADData[];

    /**
     * Creates a new HallDataRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HallDataRes instance
     */
    public static create(properties?: IHallDataRes): HallDataRes;

    /**
     * Encodes the specified HallDataRes message. Does not implicitly {@link HallDataRes.verify|verify} messages.
     * @param m HallDataRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHallDataRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HallDataRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HallDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HallDataRes;
}

/** Properties of a PlayInfo. */
export interface IPlayInfo {

    /** PlayInfo playType */
    playType: number;

    /** PlayInfo playId */
    playId: number;

    /** PlayInfo desc */
    desc: string;

    /** PlayInfo baseScore */
    baseScore?: (number[]|null);

    /** PlayInfo limit */
    limit?: (number[]|null);

    /** PlayInfo limitDesc */
    limitDesc: string;

    /** PlayInfo res */
    res: string;

    /** PlayInfo isDirectEnter */
    isDirectEnter?: (boolean|null);

    /** PlayInfo subscript */
    subscript?: (string|null);
}

/** Represents a PlayInfo. */
export class PlayInfo implements IPlayInfo {

    /**
     * Constructs a new PlayInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayInfo);

    /** PlayInfo playType. */
    public playType: number;

    /** PlayInfo playId. */
    public playId: number;

    /** PlayInfo desc. */
    public desc: string;

    /** PlayInfo baseScore. */
    public baseScore: number[];

    /** PlayInfo limit. */
    public limit: number[];

    /** PlayInfo limitDesc. */
    public limitDesc: string;

    /** PlayInfo res. */
    public res: string;

    /** PlayInfo isDirectEnter. */
    public isDirectEnter: boolean;

    /** PlayInfo subscript. */
    public subscript: string;

    /**
     * Creates a new PlayInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayInfo instance
     */
    public static create(properties?: IPlayInfo): PlayInfo;

    /**
     * Encodes the specified PlayInfo message. Does not implicitly {@link PlayInfo.verify|verify} messages.
     * @param m PlayInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayInfo;
}

/** Properties of an OpenPlayListRes. */
export interface IOpenPlayListRes {

    /** OpenPlayListRes playInfo */
    playInfo?: (IPlayInfo[]|null);
}

/** Represents an OpenPlayListRes. */
export class OpenPlayListRes implements IOpenPlayListRes {

    /**
     * Constructs a new OpenPlayListRes.
     * @param [p] Properties to set
     */
    constructor(p?: IOpenPlayListRes);

    /** OpenPlayListRes playInfo. */
    public playInfo: IPlayInfo[];

    /**
     * Creates a new OpenPlayListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenPlayListRes instance
     */
    public static create(properties?: IOpenPlayListRes): OpenPlayListRes;

    /**
     * Encodes the specified OpenPlayListRes message. Does not implicitly {@link OpenPlayListRes.verify|verify} messages.
     * @param m OpenPlayListRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOpenPlayListRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpenPlayListRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OpenPlayListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OpenPlayListRes;
}

/** Properties of a PlayGameReq. */
export interface IPlayGameReq {

    /** PlayGameReq playType */
    playType: number;

    /** PlayGameReq playId */
    playId: number;

    /** PlayGameReq extra */
    extra?: (string|null);
}

/** Represents a PlayGameReq. */
export class PlayGameReq implements IPlayGameReq {

    /**
     * Constructs a new PlayGameReq.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayGameReq);

    /** PlayGameReq playType. */
    public playType: number;

    /** PlayGameReq playId. */
    public playId: number;

    /** PlayGameReq extra. */
    public extra: string;

    /**
     * Creates a new PlayGameReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayGameReq instance
     */
    public static create(properties?: IPlayGameReq): PlayGameReq;

    /**
     * Encodes the specified PlayGameReq message. Does not implicitly {@link PlayGameReq.verify|verify} messages.
     * @param m PlayGameReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayGameReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayGameReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayGameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayGameReq;
}

/** Properties of a PushMatchResult. */
export interface IPushMatchResult {

    /** PushMatchResult isSuccess */
    isSuccess: boolean;

    /** PushMatchResult tips */
    tips?: (string|null);

    /** PushMatchResult playType */
    playType?: (number|null);

    /** PushMatchResult playId */
    playId?: (number|null);
}

/** Represents a PushMatchResult. */
export class PushMatchResult implements IPushMatchResult {

    /**
     * Constructs a new PushMatchResult.
     * @param [p] Properties to set
     */
    constructor(p?: IPushMatchResult);

    /** PushMatchResult isSuccess. */
    public isSuccess: boolean;

    /** PushMatchResult tips. */
    public tips: string;

    /** PushMatchResult playType. */
    public playType: number;

    /** PushMatchResult playId. */
    public playId: number;

    /**
     * Creates a new PushMatchResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushMatchResult instance
     */
    public static create(properties?: IPushMatchResult): PushMatchResult;

    /**
     * Encodes the specified PushMatchResult message. Does not implicitly {@link PushMatchResult.verify|verify} messages.
     * @param m PushMatchResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushMatchResult, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushMatchResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushMatchResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushMatchResult;
}

/** Properties of a CancelMatch. */
export interface ICancelMatch {

    /** CancelMatch playType */
    playType: number;

    /** CancelMatch playId */
    playId: number;
}

/** Represents a CancelMatch. */
export class CancelMatch implements ICancelMatch {

    /**
     * Constructs a new CancelMatch.
     * @param [p] Properties to set
     */
    constructor(p?: ICancelMatch);

    /** CancelMatch playType. */
    public playType: number;

    /** CancelMatch playId. */
    public playId: number;

    /**
     * Creates a new CancelMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CancelMatch instance
     */
    public static create(properties?: ICancelMatch): CancelMatch;

    /**
     * Encodes the specified CancelMatch message. Does not implicitly {@link CancelMatch.verify|verify} messages.
     * @param m CancelMatch message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICancelMatch, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CancelMatch message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CancelMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CancelMatch;
}

/** Properties of a HallRankInfo. */
export interface IHallRankInfo {

    /** HallRankInfo rankPos */
    rankPos: number;

    /** HallRankInfo name */
    name: string;

    /** HallRankInfo vip */
    vip: number;

    /** HallRankInfo headUrl */
    headUrl: number;

    /** HallRankInfo gold */
    gold?: (number|null);

    /** HallRankInfo winGameCnt */
    winGameCnt?: (number|null);
}

/** Represents a HallRankInfo. */
export class HallRankInfo implements IHallRankInfo {

    /**
     * Constructs a new HallRankInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHallRankInfo);

    /** HallRankInfo rankPos. */
    public rankPos: number;

    /** HallRankInfo name. */
    public name: string;

    /** HallRankInfo vip. */
    public vip: number;

    /** HallRankInfo headUrl. */
    public headUrl: number;

    /** HallRankInfo gold. */
    public gold: number;

    /** HallRankInfo winGameCnt. */
    public winGameCnt: number;

    /**
     * Creates a new HallRankInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HallRankInfo instance
     */
    public static create(properties?: IHallRankInfo): HallRankInfo;

    /**
     * Encodes the specified HallRankInfo message. Does not implicitly {@link HallRankInfo.verify|verify} messages.
     * @param m HallRankInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHallRankInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HallRankInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HallRankInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HallRankInfo;
}

/** Properties of a Req_FlushHallRankList. */
export interface IReq_FlushHallRankList {

    /** Req_FlushHallRankList type */
    type: number;
}

/** Represents a Req_FlushHallRankList. */
export class Req_FlushHallRankList implements IReq_FlushHallRankList {

    /**
     * Constructs a new Req_FlushHallRankList.
     * @param [p] Properties to set
     */
    constructor(p?: IReq_FlushHallRankList);

    /** Req_FlushHallRankList type. */
    public type: number;

    /**
     * Creates a new Req_FlushHallRankList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Req_FlushHallRankList instance
     */
    public static create(properties?: IReq_FlushHallRankList): Req_FlushHallRankList;

    /**
     * Encodes the specified Req_FlushHallRankList message. Does not implicitly {@link Req_FlushHallRankList.verify|verify} messages.
     * @param m Req_FlushHallRankList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReq_FlushHallRankList, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Req_FlushHallRankList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Req_FlushHallRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Req_FlushHallRankList;
}

/** Properties of a Rsp_FlushHallRankList. */
export interface IRsp_FlushHallRankList {

    /** Rsp_FlushHallRankList type */
    type: number;

    /** Rsp_FlushHallRankList infos */
    infos?: (IHallRankInfo[]|null);

    /** Rsp_FlushHallRankList selfRankPos */
    selfRankPos: number;
}

/** Represents a Rsp_FlushHallRankList. */
export class Rsp_FlushHallRankList implements IRsp_FlushHallRankList {

    /**
     * Constructs a new Rsp_FlushHallRankList.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_FlushHallRankList);

    /** Rsp_FlushHallRankList type. */
    public type: number;

    /** Rsp_FlushHallRankList infos. */
    public infos: IHallRankInfo[];

    /** Rsp_FlushHallRankList selfRankPos. */
    public selfRankPos: number;

    /**
     * Creates a new Rsp_FlushHallRankList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_FlushHallRankList instance
     */
    public static create(properties?: IRsp_FlushHallRankList): Rsp_FlushHallRankList;

    /**
     * Encodes the specified Rsp_FlushHallRankList message. Does not implicitly {@link Rsp_FlushHallRankList.verify|verify} messages.
     * @param m Rsp_FlushHallRankList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_FlushHallRankList, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_FlushHallRankList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_FlushHallRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_FlushHallRankList;
}

/** Properties of a ModuleStatus. */
export interface IModuleStatus {

    /** ModuleStatus moduleKey */
    moduleKey: string;

    /** ModuleStatus status */
    status: number;
}

/** Represents a ModuleStatus. */
export class ModuleStatus implements IModuleStatus {

    /**
     * Constructs a new ModuleStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IModuleStatus);

    /** ModuleStatus moduleKey. */
    public moduleKey: string;

    /** ModuleStatus status. */
    public status: number;

    /**
     * Creates a new ModuleStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModuleStatus instance
     */
    public static create(properties?: IModuleStatus): ModuleStatus;

    /**
     * Encodes the specified ModuleStatus message. Does not implicitly {@link ModuleStatus.verify|verify} messages.
     * @param m ModuleStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IModuleStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModuleStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ModuleStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ModuleStatus;
}

/** Properties of a PushModuleStatus. */
export interface IPushModuleStatus {

    /** PushModuleStatus moduleStatus */
    moduleStatus?: (IModuleStatus[]|null);

    /** PushModuleStatus skinId */
    skinId?: (string|null);
}

/** Represents a PushModuleStatus. */
export class PushModuleStatus implements IPushModuleStatus {

    /**
     * Constructs a new PushModuleStatus.
     * @param [p] Properties to set
     */
    constructor(p?: IPushModuleStatus);

    /** PushModuleStatus moduleStatus. */
    public moduleStatus: IModuleStatus[];

    /** PushModuleStatus skinId. */
    public skinId: string;

    /**
     * Creates a new PushModuleStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushModuleStatus instance
     */
    public static create(properties?: IPushModuleStatus): PushModuleStatus;

    /**
     * Encodes the specified PushModuleStatus message. Does not implicitly {@link PushModuleStatus.verify|verify} messages.
     * @param m PushModuleStatus message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushModuleStatus, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushModuleStatus message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushModuleStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushModuleStatus;
}

import * as $protobuf from "protobufjs";
/** DefaultButtonOption enum. */
export enum DefaultButtonOption {
    ButtonClose = 0,
    ButtonOpenUI = 1,
    ButtonSendScript = 2,
    ButtonCharge = 3
}

/** OpenUIType enum. */
export enum OpenUIType {
    OpenNone = 0,
    OpenRoleInfo = 1
}

/** Properties of a ChargeButtonData. */
export interface IChargeButtonData {

    /** ChargeButtonData goodsId */
    goodsId: string;

    /** ChargeButtonData name */
    name: string;

    /** ChargeButtonData number */
    number: number;

    /** ChargeButtonData price */
    price: (number|Long);
}

/** Represents a ChargeButtonData. */
export class ChargeButtonData implements IChargeButtonData {

    /**
     * Constructs a new ChargeButtonData.
     * @param [p] Properties to set
     */
    constructor(p?: IChargeButtonData);

    /** ChargeButtonData goodsId. */
    public goodsId: string;

    /** ChargeButtonData name. */
    public name: string;

    /** ChargeButtonData number. */
    public number: number;

    /** ChargeButtonData price. */
    public price: (number|Long);

    /**
     * Creates a new ChargeButtonData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChargeButtonData instance
     */
    public static create(properties?: IChargeButtonData): ChargeButtonData;

    /**
     * Encodes the specified ChargeButtonData message. Does not implicitly {@link ChargeButtonData.verify|verify} messages.
     * @param m ChargeButtonData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChargeButtonData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChargeButtonData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChargeButtonData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChargeButtonData;
}

/** Properties of a SendScriptButtonData. */
export interface ISendScriptButtonData {

    /** SendScriptButtonData scriptType */
    scriptType: number;

    /** SendScriptButtonData scriptContent */
    scriptContent: string;
}

/** Represents a SendScriptButtonData. */
export class SendScriptButtonData implements ISendScriptButtonData {

    /**
     * Constructs a new SendScriptButtonData.
     * @param [p] Properties to set
     */
    constructor(p?: ISendScriptButtonData);

    /** SendScriptButtonData scriptType. */
    public scriptType: number;

    /** SendScriptButtonData scriptContent. */
    public scriptContent: string;

    /**
     * Creates a new SendScriptButtonData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendScriptButtonData instance
     */
    public static create(properties?: ISendScriptButtonData): SendScriptButtonData;

    /**
     * Encodes the specified SendScriptButtonData message. Does not implicitly {@link SendScriptButtonData.verify|verify} messages.
     * @param m SendScriptButtonData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISendScriptButtonData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendScriptButtonData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SendScriptButtonData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SendScriptButtonData;
}

/** Properties of a DefaultButton. */
export interface IDefaultButton {

    /** DefaultButton option */
    option: DefaultButtonOption;

    /** DefaultButton buttonName */
    buttonName: string;

    /** DefaultButton openUiType */
    openUiType?: (OpenUIType|null);

    /** DefaultButton script */
    script?: (ISendScriptButtonData|null);

    /** DefaultButton chargeData */
    chargeData?: (IChargeButtonData|null);
}

/** Represents a DefaultButton. */
export class DefaultButton implements IDefaultButton {

    /**
     * Constructs a new DefaultButton.
     * @param [p] Properties to set
     */
    constructor(p?: IDefaultButton);

    /** DefaultButton option. */
    public option: DefaultButtonOption;

    /** DefaultButton buttonName. */
    public buttonName: string;

    /** DefaultButton openUiType. */
    public openUiType: OpenUIType;

    /** DefaultButton script. */
    public script?: (ISendScriptButtonData|null);

    /** DefaultButton chargeData. */
    public chargeData?: (IChargeButtonData|null);

    /**
     * Creates a new DefaultButton instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DefaultButton instance
     */
    public static create(properties?: IDefaultButton): DefaultButton;

    /**
     * Encodes the specified DefaultButton message. Does not implicitly {@link DefaultButton.verify|verify} messages.
     * @param m DefaultButton message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDefaultButton, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DefaultButton message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DefaultButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DefaultButton;
}

/** Properties of a CommonTipsRes. */
export interface ICommonTipsRes {

    /** CommonTipsRes tips */
    tips: string;

    /** CommonTipsRes buttonList */
    buttonList?: (IDefaultButton[]|null);
}

/** Represents a CommonTipsRes. */
export class CommonTipsRes implements ICommonTipsRes {

    /**
     * Constructs a new CommonTipsRes.
     * @param [p] Properties to set
     */
    constructor(p?: ICommonTipsRes);

    /** CommonTipsRes tips. */
    public tips: string;

    /** CommonTipsRes buttonList. */
    public buttonList: IDefaultButton[];

    /**
     * Creates a new CommonTipsRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommonTipsRes instance
     */
    public static create(properties?: ICommonTipsRes): CommonTipsRes;

    /**
     * Encodes the specified CommonTipsRes message. Does not implicitly {@link CommonTipsRes.verify|verify} messages.
     * @param m CommonTipsRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICommonTipsRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommonTipsRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CommonTipsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CommonTipsRes;
}

/** Properties of a CommonUpTipsRes. */
export interface ICommonUpTipsRes {

    /** CommonUpTipsRes success */
    success: boolean;

    /** CommonUpTipsRes tips */
    tips: string;
}

/** Represents a CommonUpTipsRes. */
export class CommonUpTipsRes implements ICommonUpTipsRes {

    /**
     * Constructs a new CommonUpTipsRes.
     * @param [p] Properties to set
     */
    constructor(p?: ICommonUpTipsRes);

    /** CommonUpTipsRes success. */
    public success: boolean;

    /** CommonUpTipsRes tips. */
    public tips: string;

    /**
     * Creates a new CommonUpTipsRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommonUpTipsRes instance
     */
    public static create(properties?: ICommonUpTipsRes): CommonUpTipsRes;

    /**
     * Encodes the specified CommonUpTipsRes message. Does not implicitly {@link CommonUpTipsRes.verify|verify} messages.
     * @param m CommonUpTipsRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICommonUpTipsRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommonUpTipsRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CommonUpTipsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CommonUpTipsRes;
}

/** Properties of a DefaultResultRes. */
export interface IDefaultResultRes {

    /** DefaultResultRes success */
    success: boolean;

    /** DefaultResultRes tips */
    tips: string;

    /** DefaultResultRes currencyPrice */
    currencyPrice?: (ICurrencyStruct[]|null);
}

/** Represents a DefaultResultRes. */
export class DefaultResultRes implements IDefaultResultRes {

    /**
     * Constructs a new DefaultResultRes.
     * @param [p] Properties to set
     */
    constructor(p?: IDefaultResultRes);

    /** DefaultResultRes success. */
    public success: boolean;

    /** DefaultResultRes tips. */
    public tips: string;

    /** DefaultResultRes currencyPrice. */
    public currencyPrice: ICurrencyStruct[];

    /**
     * Creates a new DefaultResultRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DefaultResultRes instance
     */
    public static create(properties?: IDefaultResultRes): DefaultResultRes;

    /**
     * Encodes the specified DefaultResultRes message. Does not implicitly {@link DefaultResultRes.verify|verify} messages.
     * @param m DefaultResultRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDefaultResultRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DefaultResultRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DefaultResultRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DefaultResultRes;
}

/** Properties of an EmptyReq. */
export interface IEmptyReq {
}

/** Represents an EmptyReq. */
export class EmptyReq implements IEmptyReq {

    /**
     * Constructs a new EmptyReq.
     * @param [p] Properties to set
     */
    constructor(p?: IEmptyReq);

    /**
     * Creates a new EmptyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EmptyReq instance
     */
    public static create(properties?: IEmptyReq): EmptyReq;

    /**
     * Encodes the specified EmptyReq message. Does not implicitly {@link EmptyReq.verify|verify} messages.
     * @param m EmptyReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IEmptyReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EmptyReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns EmptyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EmptyReq;
}

/** ExitType enum. */
export enum ExitType {
    EXIT_IMMEDIATELY = 1,
    EXIT_DELAY = 2
}

/** GameEventType enum. */
export enum GameEventType {
    INTERRAL_CHANGE_EVENT = 1
}

/** Properties of an IntegralChangeEvent. */
export interface IIntegralChangeEvent {

    /** IntegralChangeEvent eventUserId */
    eventUserId: (number|Long);

    /** IntegralChangeEvent eventIntegralChangeCount */
    eventIntegralChangeCount: number;
}

/** Represents an IntegralChangeEvent. */
export class IntegralChangeEvent implements IIntegralChangeEvent {

    /**
     * Constructs a new IntegralChangeEvent.
     * @param [p] Properties to set
     */
    constructor(p?: IIntegralChangeEvent);

    /** IntegralChangeEvent eventUserId. */
    public eventUserId: (number|Long);

    /** IntegralChangeEvent eventIntegralChangeCount. */
    public eventIntegralChangeCount: number;

    /**
     * Creates a new IntegralChangeEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IntegralChangeEvent instance
     */
    public static create(properties?: IIntegralChangeEvent): IntegralChangeEvent;

    /**
     * Encodes the specified IntegralChangeEvent message. Does not implicitly {@link IntegralChangeEvent.verify|verify} messages.
     * @param m IntegralChangeEvent message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIntegralChangeEvent, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IntegralChangeEvent message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IntegralChangeEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): IntegralChangeEvent;
}

/** Properties of an IntegralChangeEventData. */
export interface IIntegralChangeEventData {

    /** IntegralChangeEventData eventTime */
    eventTime: (number|Long);

    /** IntegralChangeEventData eventSecondType */
    eventSecondType: number;

    /** IntegralChangeEventData eventBiFirstChangeType */
    eventBiFirstChangeType: number;

    /** IntegralChangeEventData eventBiSecondChangeType */
    eventBiSecondChangeType: number;

    /** IntegralChangeEventData eventList */
    eventList?: (IIntegralChangeEvent[]|null);
}

/** Represents an IntegralChangeEventData. */
export class IntegralChangeEventData implements IIntegralChangeEventData {

    /**
     * Constructs a new IntegralChangeEventData.
     * @param [p] Properties to set
     */
    constructor(p?: IIntegralChangeEventData);

    /** IntegralChangeEventData eventTime. */
    public eventTime: (number|Long);

    /** IntegralChangeEventData eventSecondType. */
    public eventSecondType: number;

    /** IntegralChangeEventData eventBiFirstChangeType. */
    public eventBiFirstChangeType: number;

    /** IntegralChangeEventData eventBiSecondChangeType. */
    public eventBiSecondChangeType: number;

    /** IntegralChangeEventData eventList. */
    public eventList: IIntegralChangeEvent[];

    /**
     * Creates a new IntegralChangeEventData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IntegralChangeEventData instance
     */
    public static create(properties?: IIntegralChangeEventData): IntegralChangeEventData;

    /**
     * Encodes the specified IntegralChangeEventData message. Does not implicitly {@link IntegralChangeEventData.verify|verify} messages.
     * @param m IntegralChangeEventData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIntegralChangeEventData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IntegralChangeEventData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IntegralChangeEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): IntegralChangeEventData;
}

/** Properties of a GameReportEventToHall. */
export interface IGameReportEventToHall {

    /** GameReportEventToHall integralEventData */
    integralEventData: IIntegralChangeEventData;
}

/** Represents a GameReportEventToHall. */
export class GameReportEventToHall implements IGameReportEventToHall {

    /**
     * Constructs a new GameReportEventToHall.
     * @param [p] Properties to set
     */
    constructor(p?: IGameReportEventToHall);

    /** GameReportEventToHall integralEventData. */
    public integralEventData: IIntegralChangeEventData;

    /**
     * Creates a new GameReportEventToHall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameReportEventToHall instance
     */
    public static create(properties?: IGameReportEventToHall): GameReportEventToHall;

    /**
     * Encodes the specified GameReportEventToHall message. Does not implicitly {@link GameReportEventToHall.verify|verify} messages.
     * @param m GameReportEventToHall message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameReportEventToHall, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameReportEventToHall message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameReportEventToHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameReportEventToHall;
}

/** Properties of a GameReportMissionEventToHall. */
export interface IGameReportMissionEventToHall {

    /** GameReportMissionEventToHall missionType */
    missionType: number;

    /** GameReportMissionEventToHall playType */
    playType: number;

    /** GameReportMissionEventToHall playId */
    playId: number;

    /** GameReportMissionEventToHall param */
    param?: (string|null);

    /** GameReportMissionEventToHall playerId */
    playerId: (number|Long);
}

/** Represents a GameReportMissionEventToHall. */
export class GameReportMissionEventToHall implements IGameReportMissionEventToHall {

    /**
     * Constructs a new GameReportMissionEventToHall.
     * @param [p] Properties to set
     */
    constructor(p?: IGameReportMissionEventToHall);

    /** GameReportMissionEventToHall missionType. */
    public missionType: number;

    /** GameReportMissionEventToHall playType. */
    public playType: number;

    /** GameReportMissionEventToHall playId. */
    public playId: number;

    /** GameReportMissionEventToHall param. */
    public param: string;

    /** GameReportMissionEventToHall playerId. */
    public playerId: (number|Long);

    /**
     * Creates a new GameReportMissionEventToHall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameReportMissionEventToHall instance
     */
    public static create(properties?: IGameReportMissionEventToHall): GameReportMissionEventToHall;

    /**
     * Encodes the specified GameReportMissionEventToHall message. Does not implicitly {@link GameReportMissionEventToHall.verify|verify} messages.
     * @param m GameReportMissionEventToHall message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameReportMissionEventToHall, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameReportMissionEventToHall message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameReportMissionEventToHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GameReportMissionEventToHall;
}

/** CurrencyType enum. */
export enum CurrencyType {
    RedEnvelops = 0,
    Gold = 1,
    safeBox = 2,
    Integral = 3
}

/** Properties of a CurrencyStruct. */
export interface ICurrencyStruct {

    /** CurrencyStruct curType */
    curType: CurrencyType;

    /** CurrencyStruct count */
    count: string;
}

/** Represents a CurrencyStruct. */
export class CurrencyStruct implements ICurrencyStruct {

    /**
     * Constructs a new CurrencyStruct.
     * @param [p] Properties to set
     */
    constructor(p?: ICurrencyStruct);

    /** CurrencyStruct curType. */
    public curType: CurrencyType;

    /** CurrencyStruct count. */
    public count: string;

    /**
     * Creates a new CurrencyStruct instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CurrencyStruct instance
     */
    public static create(properties?: ICurrencyStruct): CurrencyStruct;

    /**
     * Encodes the specified CurrencyStruct message. Does not implicitly {@link CurrencyStruct.verify|verify} messages.
     * @param m CurrencyStruct message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICurrencyStruct, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CurrencyStruct message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CurrencyStruct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CurrencyStruct;
}

/** Properties of a SyncCurrencyRes. */
export interface ISyncCurrencyRes {

    /** SyncCurrencyRes curStruct */
    curStruct?: (ICurrencyStruct[]|null);

    /** SyncCurrencyRes refreshType */
    refreshType: CurrencyRefreshType;
}

/** Represents a SyncCurrencyRes. */
export class SyncCurrencyRes implements ISyncCurrencyRes {

    /**
     * Constructs a new SyncCurrencyRes.
     * @param [p] Properties to set
     */
    constructor(p?: ISyncCurrencyRes);

    /** SyncCurrencyRes curStruct. */
    public curStruct: ICurrencyStruct[];

    /** SyncCurrencyRes refreshType. */
    public refreshType: CurrencyRefreshType;

    /**
     * Creates a new SyncCurrencyRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncCurrencyRes instance
     */
    public static create(properties?: ISyncCurrencyRes): SyncCurrencyRes;

    /**
     * Encodes the specified SyncCurrencyRes message. Does not implicitly {@link SyncCurrencyRes.verify|verify} messages.
     * @param m SyncCurrencyRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISyncCurrencyRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncCurrencyRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SyncCurrencyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SyncCurrencyRes;
}

/** CurrencyRefreshType enum. */
export enum CurrencyRefreshType {
    REFRESH_TYPE_RECHAGE = 1,
    REFRESH_TYPE_HALL_COMMON = 2,
    REFRESH_TYPE_CACHE = 3,
    REFRESH_TYPE_GAME_COMMON = 4
}

/** Properties of a SyncHallToGameCurrencyRes. */
export interface ISyncHallToGameCurrencyRes {

    /** SyncHallToGameCurrencyRes curStruct */
    curStruct?: (ICurrencyStruct[]|null);
}

/** Represents a SyncHallToGameCurrencyRes. */
export class SyncHallToGameCurrencyRes implements ISyncHallToGameCurrencyRes {

    /**
     * Constructs a new SyncHallToGameCurrencyRes.
     * @param [p] Properties to set
     */
    constructor(p?: ISyncHallToGameCurrencyRes);

    /** SyncHallToGameCurrencyRes curStruct. */
    public curStruct: ICurrencyStruct[];

    /**
     * Creates a new SyncHallToGameCurrencyRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncHallToGameCurrencyRes instance
     */
    public static create(properties?: ISyncHallToGameCurrencyRes): SyncHallToGameCurrencyRes;

    /**
     * Encodes the specified SyncHallToGameCurrencyRes message. Does not implicitly {@link SyncHallToGameCurrencyRes.verify|verify} messages.
     * @param m SyncHallToGameCurrencyRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISyncHallToGameCurrencyRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncHallToGameCurrencyRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SyncHallToGameCurrencyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SyncHallToGameCurrencyRes;
}

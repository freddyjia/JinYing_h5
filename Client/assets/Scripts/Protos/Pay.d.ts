import * as $protobuf from "protobufjs";
/** Properties of a PayOrderRequest. */
export interface IPayOrderRequest {

    /** PayOrderRequest tradeNo */
    tradeNo: string;

    /** PayOrderRequest orderNo */
    orderNo: string;

    /** PayOrderRequest amount */
    amount: number;

    /** PayOrderRequest channelId */
    channelId: string;

    /** PayOrderRequest currencyType */
    currencyType?: (string | null);

    /** PayOrderRequest sdkUserId */
    sdkUserId?: (string | null);

    /** PayOrderRequest extraInfo */
    extraInfo?: (string | null);

    /** PayOrderRequest showInputMoney */
    showInputMoney?: (boolean | null);

    /** PayOrderRequest tradeNoNew */
    tradeNoNew?: (string | null);
}

/** Represents a PayOrderRequest. */
export class PayOrderRequest implements IPayOrderRequest {

    /**
     * Constructs a new PayOrderRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IPayOrderRequest);

    /** PayOrderRequest tradeNo. */
    public tradeNo: string;

    /** PayOrderRequest orderNo. */
    public orderNo: string;

    /** PayOrderRequest amount. */
    public amount: number;

    /** PayOrderRequest channelId. */
    public channelId: string;

    /** PayOrderRequest currencyType. */
    public currencyType: string;

    /** PayOrderRequest sdkUserId. */
    public sdkUserId: string;

    /** PayOrderRequest extraInfo. */
    public extraInfo: string;

    /** PayOrderRequest showInputMoney. */
    public showInputMoney: boolean;

    /** PayOrderRequest tradeNoNew. */
    public tradeNoNew: string;

    /**
     * Creates a new PayOrderRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PayOrderRequest instance
     */
    public static create(properties?: IPayOrderRequest): PayOrderRequest;

    /**
     * Encodes the specified PayOrderRequest message. Does not implicitly {@link PayOrderRequest.verify|verify} messages.
     * @param m PayOrderRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPayOrderRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PayOrderRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PayOrderRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): PayOrderRequest;
}

/** Properties of a PayOrderResponse. */
export interface IPayOrderResponse {

    /** PayOrderResponse success */
    success: boolean;
}

/** Represents a PayOrderResponse. */
export class PayOrderResponse implements IPayOrderResponse {

    /**
     * Constructs a new PayOrderResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IPayOrderResponse);

    /** PayOrderResponse success. */
    public success: boolean;

    /**
     * Creates a new PayOrderResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PayOrderResponse instance
     */
    public static create(properties?: IPayOrderResponse): PayOrderResponse;

    /**
     * Encodes the specified PayOrderResponse message. Does not implicitly {@link PayOrderResponse.verify|verify} messages.
     * @param m PayOrderResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPayOrderResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PayOrderResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PayOrderResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): PayOrderResponse;
}

/** Properties of a BeforePayRequest. */
export interface IBeforePayRequest {
}

/** Represents a BeforePayRequest. */
export class BeforePayRequest implements IBeforePayRequest {

    /**
     * Constructs a new BeforePayRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IBeforePayRequest);

    /**
     * Creates a new BeforePayRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeforePayRequest instance
     */
    public static create(properties?: IBeforePayRequest): BeforePayRequest;

    /**
     * Encodes the specified BeforePayRequest message. Does not implicitly {@link BeforePayRequest.verify|verify} messages.
     * @param m BeforePayRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBeforePayRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeforePayRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BeforePayRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): BeforePayRequest;
}

/** Properties of a BeforePayResponse. */
export interface IBeforePayResponse {

    /** BeforePayResponse canPay */
    canPay: boolean;

    /** BeforePayResponse serverId */
    serverId: string;

    /** BeforePayResponse orderNo */
    orderNo: string;
}

/** Represents a BeforePayResponse. */
export class BeforePayResponse implements IBeforePayResponse {

    /**
     * Constructs a new BeforePayResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IBeforePayResponse);

    /** BeforePayResponse canPay. */
    public canPay: boolean;

    /** BeforePayResponse serverId. */
    public serverId: string;

    /** BeforePayResponse orderNo. */
    public orderNo: string;

    /**
     * Creates a new BeforePayResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeforePayResponse instance
     */
    public static create(properties?: IBeforePayResponse): BeforePayResponse;

    /**
     * Encodes the specified BeforePayResponse message. Does not implicitly {@link BeforePayResponse.verify|verify} messages.
     * @param m BeforePayResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBeforePayResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeforePayResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BeforePayResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): BeforePayResponse;
}

/** Properties of a RechargeListRequest. */
export interface IRechargeListRequest {
}

/** Represents a RechargeListRequest. */
export class RechargeListRequest implements IRechargeListRequest {

    /**
     * Constructs a new RechargeListRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IRechargeListRequest);

    /**
     * Creates a new RechargeListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RechargeListRequest instance
     */
    public static create(properties?: IRechargeListRequest): RechargeListRequest;

    /**
     * Encodes the specified RechargeListRequest message. Does not implicitly {@link RechargeListRequest.verify|verify} messages.
     * @param m RechargeListRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRechargeListRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RechargeListRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RechargeListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): RechargeListRequest;
}

/** ChargeType enum. */
export enum ChargeType {
    P_ZHIFUBAO = 1,
    P_WECHAT = 2,
    P_CREDICARD = 3,
    P_FLOWER = 4,
    P_BANKCARD = 5
}

/** ChannelType enum. */
export enum ChannelType {
    PROXY = 0,
    ZHIFUBAO = 1,
    WEIXIN = 2,
    QQPAY = 3,
    YINLIAN = 4,
    JINDONG = 5,
    BIGZHIFUBAO = 6,
    DIANKA = 7,
    BIGWEIXIN = 8,
    YUNSHANFU = 9,
    PROXY_NORMAL = 10,
    S_ALI_PAY = 11,
    S_WECHAT_PAY = 12
}

/** Properties of a ProxyInfo. */
export interface IProxyInfo {

    /** ProxyInfo proxyId */
    proxyId?: (string | null);

    /** ProxyInfo imageUrl */
    imageUrl?: (string | null);

    /** ProxyInfo proxyName */
    proxyName: string;

    /** ProxyInfo chargeType */
    chargeType?: (ChargeType[] | null);

    /** ProxyInfo tag */
    tag?: (string[] | null);

    /** ProxyInfo isRecentPay */
    isRecentPay?: (boolean | null);

    /** ProxyInfo starLevel */
    starLevel?: (number | null);

    /** ProxyInfo evaluations */
    evaluations?: (number | null);
}

/** Represents a ProxyInfo. */
export class ProxyInfo implements IProxyInfo {

    /**
     * Constructs a new ProxyInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IProxyInfo);

    /** ProxyInfo proxyId. */
    public proxyId: string;

    /** ProxyInfo imageUrl. */
    public imageUrl: string;

    /** ProxyInfo proxyName. */
    public proxyName: string;

    /** ProxyInfo chargeType. */
    public chargeType: Array<ChargeType>;

    /** ProxyInfo tag. */
    public tag: Array<string>;

    /** ProxyInfo isRecentPay. */
    public isRecentPay: boolean;

    /** ProxyInfo starLevel. */
    public starLevel: number;

    /** ProxyInfo evaluations. */
    public evaluations: number;

    /**
     * Creates a new ProxyInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProxyInfo instance
     */
    public static create(properties?: IProxyInfo): ProxyInfo;

    /**
     * Encodes the specified ProxyInfo message. Does not implicitly {@link ProxyInfo.verify|verify} messages.
     * @param m ProxyInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IProxyInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProxyInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): ProxyInfo;
}

/** Properties of a NormalProxyInfo. */
export interface INormalProxyInfo {

    /** NormalProxyInfo proxyNo */
    proxyNo?: (string | null);

    /** NormalProxyInfo isSupportHuaBei */
    isSupportHuaBei?: (boolean | null);

    /** NormalProxyInfo weiOrQq */
    weiOrQq?: (string | null);

    /** NormalProxyInfo chargeTime */
    chargeTime?: (number | null);

    /** NormalProxyInfo successRate */
    successRate?: (number | null);

    /** NormalProxyInfo useTime */
    useTime?: (number | null);
}

/** Represents a NormalProxyInfo. */
export class NormalProxyInfo implements INormalProxyInfo {

    /**
     * Constructs a new NormalProxyInfo.
     * @param [p] Properties to set
     */
    constructor(p?: INormalProxyInfo);

    /** NormalProxyInfo proxyNo. */
    public proxyNo: string;

    /** NormalProxyInfo isSupportHuaBei. */
    public isSupportHuaBei: boolean;

    /** NormalProxyInfo weiOrQq. */
    public weiOrQq: string;

    /** NormalProxyInfo chargeTime. */
    public chargeTime: number;

    /** NormalProxyInfo successRate. */
    public successRate: number;

    /** NormalProxyInfo useTime. */
    public useTime: number;

    /**
     * Creates a new NormalProxyInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NormalProxyInfo instance
     */
    public static create(properties?: INormalProxyInfo): NormalProxyInfo;

    /**
     * Encodes the specified NormalProxyInfo message. Does not implicitly {@link NormalProxyInfo.verify|verify} messages.
     * @param m NormalProxyInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: INormalProxyInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NormalProxyInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns NormalProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): NormalProxyInfo;
}

/** Properties of an EvaluationReq. */
export interface IEvaluationReq {

    /** EvaluationReq orderId */
    orderId: string;

    /** EvaluationReq starLv */
    starLv: number;
}

/** Represents an EvaluationReq. */
export class EvaluationReq implements IEvaluationReq {

    /**
     * Constructs a new EvaluationReq.
     * @param [p] Properties to set
     */
    constructor(p?: IEvaluationReq);

    /** EvaluationReq orderId. */
    public orderId: string;

    /** EvaluationReq starLv. */
    public starLv: number;

    /**
     * Creates a new EvaluationReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EvaluationReq instance
     */
    public static create(properties?: IEvaluationReq): EvaluationReq;

    /**
     * Encodes the specified EvaluationReq message. Does not implicitly {@link EvaluationReq.verify|verify} messages.
     * @param m EvaluationReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IEvaluationReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EvaluationReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns EvaluationReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): EvaluationReq;
}

/** Properties of an EvaluationRes. */
export interface IEvaluationRes {

    /** EvaluationRes success */
    success: boolean;

    /** EvaluationRes tips */
    tips?: (string | null);
}

/** Represents an EvaluationRes. */
export class EvaluationRes implements IEvaluationRes {

    /**
     * Constructs a new EvaluationRes.
     * @param [p] Properties to set
     */
    constructor(p?: IEvaluationRes);

    /** EvaluationRes success. */
    public success: boolean;

    /** EvaluationRes tips. */
    public tips: string;

    /**
     * Creates a new EvaluationRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EvaluationRes instance
     */
    public static create(properties?: IEvaluationRes): EvaluationRes;

    /**
     * Encodes the specified EvaluationRes message. Does not implicitly {@link EvaluationRes.verify|verify} messages.
     * @param m EvaluationRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IEvaluationRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EvaluationRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns EvaluationRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): EvaluationRes;
}

/** Properties of a RechargeInfo. */
export interface IRechargeInfo {

    /** RechargeInfo channelType */
    channelType: ChannelType;

    /** RechargeInfo channelTypeDesc */
    channelTypeDesc: string;

    /** RechargeInfo res */
    res: string;

    /** RechargeInfo desc */
    desc: string;

    /** RechargeInfo chargeMoney */
    chargeMoney?: (number[] | null);

    /** RechargeInfo proxyInfo */
    proxyInfo?: (IProxyInfo[] | null);

    /** RechargeInfo sign */
    sign?: (string | null);

    /** RechargeInfo minChargeMoney */
    minChargeMoney?: (number | null);

    /** RechargeInfo isFix */
    isFix?: (boolean | null);

    /** RechargeInfo downloadaddress */
    downloadaddress?: (string | null);

    /** RechargeInfo normalProxyInfo */
    normalProxyInfo?: (INormalProxyInfo[] | null);
}

/** Represents a RechargeInfo. */
export class RechargeInfo implements IRechargeInfo {

    /**
     * Constructs a new RechargeInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IRechargeInfo);

    /** RechargeInfo channelType. */
    public channelType: ChannelType;

    /** RechargeInfo channelTypeDesc. */
    public channelTypeDesc: string;

    /** RechargeInfo res. */
    public res: string;

    /** RechargeInfo desc. */
    public desc: string;

    /** RechargeInfo chargeMoney. */
    public chargeMoney: Array<number>;

    /** RechargeInfo proxyInfo. */
    public proxyInfo: Array<IProxyInfo>;

    /** RechargeInfo sign. */
    public sign: string;

    /** RechargeInfo minChargeMoney. */
    public minChargeMoney: number;

    /** RechargeInfo isFix. */
    public isFix: boolean;

    /** RechargeInfo downloadaddress. */
    public downloadaddress: string;

    /** RechargeInfo normalProxyInfo. */
    public normalProxyInfo: Array<INormalProxyInfo>;

    /**
     * Creates a new RechargeInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RechargeInfo instance
     */
    public static create(properties ?: IRechargeInfo): RechargeInfo;

    /**
     * Encodes the specified RechargeInfo message. Does not implicitly {@link RechargeInfo.verify|verify} messages.
     * @param m RechargeInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRechargeInfo, w ?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RechargeInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RechargeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l ?: number): RechargeInfo;
}

/** Properties of a RechargeListResponse. */
export interface IRechargeListResponse {

    /** RechargeListResponse rechargeInfo */
    rechargeInfo?: (IRechargeInfo[] | null);
}

/** Represents a RechargeListResponse. */
export class RechargeListResponse implements IRechargeListResponse {

    /**
     * Constructs a new RechargeListResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IRechargeListResponse);

    /** RechargeListResponse rechargeInfo. */
    public rechargeInfo: Array<IRechargeInfo>;

    /**
     * Creates a new RechargeListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RechargeListResponse instance
     */
    public static create(properties ?: IRechargeListResponse): RechargeListResponse;

    /**
     * Encodes the specified RechargeListResponse message. Does not implicitly {@link RechargeListResponse.verify|verify} messages.
     * @param m RechargeListResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRechargeListResponse, w ?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RechargeListResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RechargeListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l ?: number): RechargeListResponse;
}

/** Properties of a RechargeRequest. */
export interface IRechargeRequest {

    /** RechargeRequest chargeMoney */
    chargeMoney: number;

    /** RechargeRequest channelType */
    channelType: ChannelType;

    /** RechargeRequest clientIp */
    clientIp: string;
}

/** Represents a RechargeRequest. */
export class RechargeRequest implements IRechargeRequest {

    /**
     * Constructs a new RechargeRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IRechargeRequest);

    /** RechargeRequest chargeMoney. */
    public chargeMoney: number;

    /** RechargeRequest channelType. */
    public channelType: ChannelType;

    /** RechargeRequest clientIp. */
    public clientIp: string;

    /**
     * Creates a new RechargeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RechargeRequest instance
     */
    public static create(properties?: IRechargeRequest): RechargeRequest;

    /**
     * Encodes the specified RechargeRequest message. Does not implicitly {@link RechargeRequest.verify|verify} messages.
     * @param m RechargeRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRechargeRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RechargeRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RechargeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): RechargeRequest;
}

/** Properties of a RechargeResponse. */
export interface IRechargeResponse {

    /** RechargeResponse isSuccess */
    isSuccess: boolean;

    /** RechargeResponse tips */
    tips?: (string | null);

    /** RechargeResponse rechargeUrl */
    rechargeUrl?: (string | null);

    /** RechargeResponse orderNo */
    orderNo?: (string | null);

    /** RechargeResponse orderCreateTime */
    orderCreateTime?: (string | null);
}

/** Represents a RechargeResponse. */
export class RechargeResponse implements IRechargeResponse {

    /**
     * Constructs a new RechargeResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IRechargeResponse);

    /** RechargeResponse isSuccess. */
    public isSuccess: boolean;

    /** RechargeResponse tips. */
    public tips: string;

    /** RechargeResponse rechargeUrl. */
    public rechargeUrl: string;

    /** RechargeResponse orderNo. */
    public orderNo: string;

    /** RechargeResponse orderCreateTime. */
    public orderCreateTime: string;

    /**
     * Creates a new RechargeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RechargeResponse instance
     */
    public static create(properties?: IRechargeResponse): RechargeResponse;

    /**
     * Encodes the specified RechargeResponse message. Does not implicitly {@link RechargeResponse.verify|verify} messages.
     * @param m RechargeResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRechargeResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RechargeResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RechargeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): RechargeResponse;
}

/** Properties of a RechargeProxyRefreshReq. */
export interface IRechargeProxyRefreshReq {
}

/** Represents a RechargeProxyRefreshReq. */
export class RechargeProxyRefreshReq implements IRechargeProxyRefreshReq {

    /**
     * Constructs a new RechargeProxyRefreshReq.
     * @param [p] Properties to set
     */
    constructor(p?: IRechargeProxyRefreshReq);

    /**
     * Creates a new RechargeProxyRefreshReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RechargeProxyRefreshReq instance
     */
    public static create(properties?: IRechargeProxyRefreshReq): RechargeProxyRefreshReq;

    /**
     * Encodes the specified RechargeProxyRefreshReq message. Does not implicitly {@link RechargeProxyRefreshReq.verify|verify} messages.
     * @param m RechargeProxyRefreshReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRechargeProxyRefreshReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RechargeProxyRefreshReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RechargeProxyRefreshReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): RechargeProxyRefreshReq;
}

/** Properties of an AccountGetMoneyResponse. */
export interface IAccountGetMoneyResponse {

    /** AccountGetMoneyResponse chargeMoney */
    chargeMoney: string;

    /** AccountGetMoneyResponse order */
    order?: (string | null);

    /** AccountGetMoneyResponse type */
    type?: (ChannelType | null);

    /** AccountGetMoneyResponse chargeRewardValue */
    chargeRewardValue?: (number | null);
}

/** Represents an AccountGetMoneyResponse. */
export class AccountGetMoneyResponse implements IAccountGetMoneyResponse {

    /**
     * Constructs a new AccountGetMoneyResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IAccountGetMoneyResponse);

    /** AccountGetMoneyResponse chargeMoney. */
    public chargeMoney: string;

    /** AccountGetMoneyResponse order. */
    public order: string;

    /** AccountGetMoneyResponse type. */
    public type: ChannelType;

    /** AccountGetMoneyResponse chargeRewardValue. */
    public chargeRewardValue: number;

    /**
     * Creates a new AccountGetMoneyResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountGetMoneyResponse instance
     */
    public static create(properties?: IAccountGetMoneyResponse): AccountGetMoneyResponse;

    /**
     * Encodes the specified AccountGetMoneyResponse message. Does not implicitly {@link AccountGetMoneyResponse.verify|verify} messages.
     * @param m AccountGetMoneyResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAccountGetMoneyResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountGetMoneyResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AccountGetMoneyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): AccountGetMoneyResponse;
}

/** Properties of a PayOrderConfirmReq. */
export interface IPayOrderConfirmReq {

    /** PayOrderConfirmReq order */
    order: string;
}

/** Represents a PayOrderConfirmReq. */
export class PayOrderConfirmReq implements IPayOrderConfirmReq {

    /**
     * Constructs a new PayOrderConfirmReq.
     * @param [p] Properties to set
     */
    constructor(p?: IPayOrderConfirmReq);

    /** PayOrderConfirmReq order. */
    public order: string;

    /**
     * Creates a new PayOrderConfirmReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PayOrderConfirmReq instance
     */
    public static create(properties?: IPayOrderConfirmReq): PayOrderConfirmReq;

    /**
     * Encodes the specified PayOrderConfirmReq message. Does not implicitly {@link PayOrderConfirmReq.verify|verify} messages.
     * @param m PayOrderConfirmReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPayOrderConfirmReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PayOrderConfirmReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PayOrderConfirmReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): PayOrderConfirmReq;
}

/** Properties of a RechargeProxyRefreshRes. */
export interface IRechargeProxyRefreshRes {

    /** RechargeProxyRefreshRes proxyInfo */
    proxyInfo?: (IProxyInfo[] | null);

    /** RechargeProxyRefreshRes normalProxyInfo */
    normalProxyInfo?: (INormalProxyInfo[] | null);
}

/** Represents a RechargeProxyRefreshRes. */
export class RechargeProxyRefreshRes implements IRechargeProxyRefreshRes {

    /**
     * Constructs a new RechargeProxyRefreshRes.
     * @param [p] Properties to set
     */
    constructor(p?: IRechargeProxyRefreshRes);

    /** RechargeProxyRefreshRes proxyInfo. */
    public proxyInfo: Array<IProxyInfo>;

    /** RechargeProxyRefreshRes normalProxyInfo. */
    public normalProxyInfo: Array<INormalProxyInfo>;

    /**
     * Creates a new RechargeProxyRefreshRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RechargeProxyRefreshRes instance
     */
    public static create(properties ?: IRechargeProxyRefreshRes): RechargeProxyRefreshRes;

    /**
     * Encodes the specified RechargeProxyRefreshRes message. Does not implicitly {@link RechargeProxyRefreshRes.verify|verify} messages.
     * @param m RechargeProxyRefreshRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRechargeProxyRefreshRes, w ?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RechargeProxyRefreshRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RechargeProxyRefreshRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l ?: number): RechargeProxyRefreshRes;
}

/** Properties of a IAPVerifyRequest. */
export interface IIAPVerifyRequest {

    /** IAPVerifyRequest uniqueId */
    uniqueId: string;

    /** IAPVerifyRequest payload */
    payload: string;
}

/** Represents a IAPVerifyRequest. */
export class IAPVerifyRequest implements IIAPVerifyRequest {

    /**
     * Constructs a new IAPVerifyRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IIAPVerifyRequest);

    /** IAPVerifyRequest uniqueId. */
    public uniqueId: string;

    /** IAPVerifyRequest payload. */
    public payload: string;

    /**
     * Creates a new IAPVerifyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IAPVerifyRequest instance
     */
    public static create(properties?: IIAPVerifyRequest): IAPVerifyRequest;

    /**
     * Encodes the specified IAPVerifyRequest message. Does not implicitly {@link IAPVerifyRequest.verify|verify} messages.
     * @param m IAPVerifyRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIAPVerifyRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a IAPVerifyRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IAPVerifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): IAPVerifyRequest;
}

/** Properties of a IAPVerifyResponse. */
export interface IIAPVerifyResponse {
}

/** Represents a IAPVerifyResponse. */
export class IAPVerifyResponse implements IIAPVerifyResponse {

    /**
     * Constructs a new IAPVerifyResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IIAPVerifyResponse);

    /**
     * Creates a new IAPVerifyResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IAPVerifyResponse instance
     */
    public static create(properties?: IIAPVerifyResponse): IAPVerifyResponse;

    /**
     * Encodes the specified IAPVerifyResponse message. Does not implicitly {@link IAPVerifyResponse.verify|verify} messages.
     * @param m IAPVerifyResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IIAPVerifyResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a IAPVerifyResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns IAPVerifyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): IAPVerifyResponse;
}

/** Properties of a NotifyIAPVerifyFinish. */
export interface INotifyIAPVerifyFinish {

    /** NotifyIAPVerifyFinish uniqueId */
    uniqueId: string;
}

/** Represents a NotifyIAPVerifyFinish. */
export class NotifyIAPVerifyFinish implements INotifyIAPVerifyFinish {

    /**
     * Constructs a new NotifyIAPVerifyFinish.
     * @param [p] Properties to set
     */
    constructor(p?: INotifyIAPVerifyFinish);

    /** NotifyIAPVerifyFinish uniqueId. */
    public uniqueId: string;

    /**
     * Creates a new NotifyIAPVerifyFinish instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NotifyIAPVerifyFinish instance
     */
    public static create(properties?: INotifyIAPVerifyFinish): NotifyIAPVerifyFinish;

    /**
     * Encodes the specified NotifyIAPVerifyFinish message. Does not implicitly {@link NotifyIAPVerifyFinish.verify|verify} messages.
     * @param m NotifyIAPVerifyFinish message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: INotifyIAPVerifyFinish, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NotifyIAPVerifyFinish message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns NotifyIAPVerifyFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): NotifyIAPVerifyFinish;
}

/** Properties of a CreateOrderReq. */
export interface ICreateOrderReq {

    /** CreateOrderReq playerId */
    playerId: (number | Long);

    /** CreateOrderReq chargeChannel */
    chargeChannel: string;

    /** CreateOrderReq rechargeMoney */
    rechargeMoney: number;

    /** CreateOrderReq orderNo */
    orderNo: string;

    /** CreateOrderReq orderName */
    orderName: string;

    /** CreateOrderReq chargeType */
    chargeType: number;

    /** CreateOrderReq clientIp */
    clientIp: string;

    /** CreateOrderReq extraInfo */
    extraInfo: string;

    /** CreateOrderReq hallIp */
    hallIp: string;

    /** CreateOrderReq hallport */
    hallport: number;

    /** CreateOrderReq seq */
    seq: number;
}

/** Represents a CreateOrderReq. */
export class CreateOrderReq implements ICreateOrderReq {

    /**
     * Constructs a new CreateOrderReq.
     * @param [p] Properties to set
     */
    constructor(p?: ICreateOrderReq);

    /** CreateOrderReq playerId. */
    public playerId: (number | Long);

    /** CreateOrderReq chargeChannel. */
    public chargeChannel: string;

    /** CreateOrderReq rechargeMoney. */
    public rechargeMoney: number;

    /** CreateOrderReq orderNo. */
    public orderNo: string;

    /** CreateOrderReq orderName. */
    public orderName: string;

    /** CreateOrderReq chargeType. */
    public chargeType: number;

    /** CreateOrderReq clientIp. */
    public clientIp: string;

    /** CreateOrderReq extraInfo. */
    public extraInfo: string;

    /** CreateOrderReq hallIp. */
    public hallIp: string;

    /** CreateOrderReq hallport. */
    public hallport: number;

    /** CreateOrderReq seq. */
    public seq: number;

    /**
     * Creates a new CreateOrderReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateOrderReq instance
     */
    public static create(properties?: ICreateOrderReq): CreateOrderReq;

    /**
     * Encodes the specified CreateOrderReq message. Does not implicitly {@link CreateOrderReq.verify|verify} messages.
     * @param m CreateOrderReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICreateOrderReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateOrderReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CreateOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): CreateOrderReq;
}

/** Properties of a CreateOrderRes. */
export interface ICreateOrderRes {

    /** CreateOrderRes playerId */
    playerId: (number | Long);

    /** CreateOrderRes isSuccess */
    isSuccess: boolean;

    /** CreateOrderRes tips */
    tips?: (string | null);

    /** CreateOrderRes rechargeUrl */
    rechargeUrl?: (string | null);

    /** CreateOrderRes orderNo */
    orderNo?: (string | null);

    /** CreateOrderRes tradeNo */
    tradeNo?: (string | null);

    /** CreateOrderRes rechargeMoney */
    rechargeMoney?: (number | null);

    /** CreateOrderRes seq */
    seq: number;

    /** CreateOrderRes chargeType */
    chargeType?: (number | null);

    /** CreateOrderRes chargeChannel */
    chargeChannel?: (string | null);
}

/** Represents a CreateOrderRes. */
export class CreateOrderRes implements ICreateOrderRes {

    /**
     * Constructs a new CreateOrderRes.
     * @param [p] Properties to set
     */
    constructor(p?: ICreateOrderRes);

    /** CreateOrderRes playerId. */
    public playerId: (number | Long);

    /** CreateOrderRes isSuccess. */
    public isSuccess: boolean;

    /** CreateOrderRes tips. */
    public tips: string;

    /** CreateOrderRes rechargeUrl. */
    public rechargeUrl: string;

    /** CreateOrderRes orderNo. */
    public orderNo: string;

    /** CreateOrderRes tradeNo. */
    public tradeNo: string;

    /** CreateOrderRes rechargeMoney. */
    public rechargeMoney: number;

    /** CreateOrderRes seq. */
    public seq: number;

    /** CreateOrderRes chargeType. */
    public chargeType: number;

    /** CreateOrderRes chargeChannel. */
    public chargeChannel: string;

    /**
     * Creates a new CreateOrderRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateOrderRes instance
     */
    public static create(properties?: ICreateOrderRes): CreateOrderRes;

    /**
     * Encodes the specified CreateOrderRes message. Does not implicitly {@link CreateOrderRes.verify|verify} messages.
     * @param m CreateOrderRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICreateOrderRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateOrderRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CreateOrderRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): CreateOrderRes;
}

/** Properties of a ReqProxyServerInfo. */
export interface IReqProxyServerInfo {
}

/** Represents a ReqProxyServerInfo. */
export class ReqProxyServerInfo implements IReqProxyServerInfo {

    /**
     * Constructs a new ReqProxyServerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IReqProxyServerInfo);

    /**
     * Creates a new ReqProxyServerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqProxyServerInfo instance
     */
    public static create(properties?: IReqProxyServerInfo): ReqProxyServerInfo;

    /**
     * Encodes the specified ReqProxyServerInfo message. Does not implicitly {@link ReqProxyServerInfo.verify|verify} messages.
     * @param m ReqProxyServerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqProxyServerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqProxyServerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqProxyServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): ReqProxyServerInfo;
}

/** Properties of a ResProxyServerInfo. */
export interface IResProxyServerInfo {

    /** ResProxyServerInfo success */
    success: boolean;

    /** ResProxyServerInfo proxyChargeIp */
    proxyChargeIp?: (string | null);

    /** ResProxyServerInfo proxyChargePort */
    proxyChargePort?: (number | null);

    /** ResProxyServerInfo tips */
    tips?: (string | null);
}

/** Represents a ResProxyServerInfo. */
export class ResProxyServerInfo implements IResProxyServerInfo {

    /**
     * Constructs a new ResProxyServerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IResProxyServerInfo);

    /** ResProxyServerInfo success. */
    public success: boolean;

    /** ResProxyServerInfo proxyChargeIp. */
    public proxyChargeIp: string;

    /** ResProxyServerInfo proxyChargePort. */
    public proxyChargePort: number;

    /** ResProxyServerInfo tips. */
    public tips: string;

    /**
     * Creates a new ResProxyServerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResProxyServerInfo instance
     */
    public static create(properties?: IResProxyServerInfo): ResProxyServerInfo;

    /**
     * Encodes the specified ResProxyServerInfo message. Does not implicitly {@link ResProxyServerInfo.verify|verify} messages.
     * @param m ResProxyServerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IResProxyServerInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResProxyServerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ResProxyServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): ResProxyServerInfo;
}

/** Properties of a ReqChargeRecord. */
export interface IReqChargeRecord {
}

/** Represents a ReqChargeRecord. */
export class ReqChargeRecord implements IReqChargeRecord {

    /**
     * Constructs a new ReqChargeRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IReqChargeRecord);

    /**
     * Creates a new ReqChargeRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqChargeRecord instance
     */
    public static create(properties?: IReqChargeRecord): ReqChargeRecord;

    /**
     * Encodes the specified ReqChargeRecord message. Does not implicitly {@link ReqChargeRecord.verify|verify} messages.
     * @param m ReqChargeRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReqChargeRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqChargeRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReqChargeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): ReqChargeRecord;
}

/** Properties of a ChargeRecord. */
export interface IChargeRecord {

    /** ChargeRecord proxyName */
    proxyName: string;

    /** ChargeRecord chargeMoney */
    chargeMoney: number;

    /** ChargeRecord orderNo */
    orderNo?: (string | null);

    /** ChargeRecord finishTime */
    finishTime?: (string | null);

    /** ChargeRecord startLevel */
    startLevel?: (number | null);

    /** ChargeRecord headIMG */
    headIMG?: (string | null);

    /** ChargeRecord proxyId */
    proxyId?: (string | null);
}

/** Represents a ChargeRecord. */
export class ChargeRecord implements IChargeRecord {

    /**
     * Constructs a new ChargeRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IChargeRecord);

    /** ChargeRecord proxyName. */
    public proxyName: string;

    /** ChargeRecord chargeMoney. */
    public chargeMoney: number;

    /** ChargeRecord orderNo. */
    public orderNo: string;

    /** ChargeRecord finishTime. */
    public finishTime: string;

    /** ChargeRecord startLevel. */
    public startLevel: number;

    /** ChargeRecord headIMG. */
    public headIMG: string;

    /** ChargeRecord proxyId. */
    public proxyId: string;

    /**
     * Creates a new ChargeRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChargeRecord instance
     */
    public static create(properties?: IChargeRecord): ChargeRecord;

    /**
     * Encodes the specified ChargeRecord message. Does not implicitly {@link ChargeRecord.verify|verify} messages.
     * @param m ChargeRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChargeRecord, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChargeRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChargeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): ChargeRecord;
}

/** Properties of a ResChargeRecord. */
export interface IResChargeRecord {

    /** ResChargeRecord records */
    records?: (IChargeRecord[] | null);
}

/** Represents a ResChargeRecord. */
export class ResChargeRecord implements IResChargeRecord {

    /**
     * Constructs a new ResChargeRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IResChargeRecord);

    /** ResChargeRecord records. */
    public records: Array<IChargeRecord>;

    /**
     * Creates a new ResChargeRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResChargeRecord instance
     */
    public static create(properties ?: IResChargeRecord): ResChargeRecord;

    /**
     * Encodes the specified ResChargeRecord message. Does not implicitly {@link ResChargeRecord.verify|verify} messages.
     * @param m ResChargeRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IResChargeRecord, w ?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResChargeRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ResChargeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader | Uint8Array), l ?: number): ResChargeRecord;
}

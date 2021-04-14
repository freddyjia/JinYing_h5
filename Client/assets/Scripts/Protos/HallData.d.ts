import * as $protobuf from "protobufjs";
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
    public gamedata:Array<IGameData>;

    /** HallDataRes addata. */
    public addata:Array<IADData>;

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
    public baseScore:Array<number>;

    /** PlayInfo limit. */
    public limit:Array<number>;

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
    public playInfo:Array<IPlayInfo>;

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
    public infos:Array<IHallRankInfo>;

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
    public moduleStatus:Array<IModuleStatus>;

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

/** Properties of a PushChannelAsset. */
export interface IPushChannelAsset {

    /** PushChannelAsset channelAsset */
    channelAsset: string;
}

/** Represents a PushChannelAsset. */
export class PushChannelAsset implements IPushChannelAsset {

    /**
     * Constructs a new PushChannelAsset.
     * @param [p] Properties to set
     */
    constructor(p?: IPushChannelAsset);

    /** PushChannelAsset channelAsset. */
    public channelAsset: string;

    /**
     * Creates a new PushChannelAsset instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushChannelAsset instance
     */
    public static create(properties?: IPushChannelAsset): PushChannelAsset;

    /**
     * Encodes the specified PushChannelAsset message. Does not implicitly {@link PushChannelAsset.verify|verify} messages.
     * @param m PushChannelAsset message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPushChannelAsset, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushChannelAsset message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PushChannelAsset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PushChannelAsset;
}

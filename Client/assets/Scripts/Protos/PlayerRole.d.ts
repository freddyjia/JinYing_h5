import * as $protobuf from "protobufjs";
/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

    /** PlayerInfo playerID */
    playerID: (number|Long);

    /** PlayerInfo username */
    username?: (string|null);

    /** PlayerInfo headImageUrl */
    headImageUrl?: (string|null);

    /** PlayerInfo vipLv */
    vipLv?: (number|null);

    /** PlayerInfo nameSign */
    nameSign?: (string|null);

    /** PlayerInfo isFirstChargePackage */
    isFirstChargePackage?: (boolean|null);

    /** PlayerInfo headbox */
    headbox?: (string|null);

    /** PlayerInfo isChangeName */
    isChangeName?: (boolean|null);

    /** PlayerInfo mobileNum */
    mobileNum?: (string|null);

    /** PlayerInfo leaderID */
    leaderID?: (number|Long|null);

    /** PlayerInfo totalCharge */
    totalCharge?: (string|null);

    /** PlayerInfo promoterTipFrequency */
    promoterTipFrequency?: (number|null);

    /** PlayerInfo bpromoterTipFrequency */
    bpromoterTipFrequency?: (number|null);
}

/** Represents a PlayerInfo. */
export class PlayerInfo implements IPlayerInfo {

    /**
     * Constructs a new PlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerInfo);

    /** PlayerInfo playerID. */
    public playerID: (number|Long);

    /** PlayerInfo username. */
    public username: string;

    /** PlayerInfo headImageUrl. */
    public headImageUrl: string;

    /** PlayerInfo vipLv. */
    public vipLv: number;

    /** PlayerInfo nameSign. */
    public nameSign: string;

    /** PlayerInfo isFirstChargePackage. */
    public isFirstChargePackage: boolean;

    /** PlayerInfo headbox. */
    public headbox: string;

    /** PlayerInfo isChangeName. */
    public isChangeName: boolean;

    /** PlayerInfo mobileNum. */
    public mobileNum: string;

    /** PlayerInfo leaderID. */
    public leaderID: (number|Long);

    /** PlayerInfo totalCharge. */
    public totalCharge: string;

    /** PlayerInfo promoterTipFrequency. */
    public promoterTipFrequency: number;

    /** PlayerInfo bpromoterTipFrequency. */
    public bpromoterTipFrequency: number;

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

/** Properties of a PlayerInfoRes. */
export interface IPlayerInfoRes {

    /** PlayerInfoRes playerInfo */
    playerInfo: IPlayerInfo;
}

/** Represents a PlayerInfoRes. */
export class PlayerInfoRes implements IPlayerInfoRes {

    /**
     * Constructs a new PlayerInfoRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerInfoRes);

    /** PlayerInfoRes playerInfo. */
    public playerInfo: IPlayerInfo;

    /**
     * Creates a new PlayerInfoRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerInfoRes instance
     */
    public static create(properties?: IPlayerInfoRes): PlayerInfoRes;

    /**
     * Encodes the specified PlayerInfoRes message. Does not implicitly {@link PlayerInfoRes.verify|verify} messages.
     * @param m PlayerInfoRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerInfoRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerInfoRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PlayerInfoRes;
}

/** Properties of a DefaultPlayerRoleOptionRes. */
export interface IDefaultPlayerRoleOptionRes {

    /** DefaultPlayerRoleOptionRes success */
    success: boolean;

    /** DefaultPlayerRoleOptionRes tips */
    tips: string;
}

/** Represents a DefaultPlayerRoleOptionRes. */
export class DefaultPlayerRoleOptionRes implements IDefaultPlayerRoleOptionRes {

    /**
     * Constructs a new DefaultPlayerRoleOptionRes.
     * @param [p] Properties to set
     */
    constructor(p?: IDefaultPlayerRoleOptionRes);

    /** DefaultPlayerRoleOptionRes success. */
    public success: boolean;

    /** DefaultPlayerRoleOptionRes tips. */
    public tips: string;

    /**
     * Creates a new DefaultPlayerRoleOptionRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DefaultPlayerRoleOptionRes instance
     */
    public static create(properties?: IDefaultPlayerRoleOptionRes): DefaultPlayerRoleOptionRes;

    /**
     * Encodes the specified DefaultPlayerRoleOptionRes message. Does not implicitly {@link DefaultPlayerRoleOptionRes.verify|verify} messages.
     * @param m DefaultPlayerRoleOptionRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDefaultPlayerRoleOptionRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DefaultPlayerRoleOptionRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DefaultPlayerRoleOptionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DefaultPlayerRoleOptionRes;
}

/** Properties of a ModifyPlayerNameReq. */
export interface IModifyPlayerNameReq {

    /** ModifyPlayerNameReq newName */
    newName: string;
}

/** Represents a ModifyPlayerNameReq. */
export class ModifyPlayerNameReq implements IModifyPlayerNameReq {

    /**
     * Constructs a new ModifyPlayerNameReq.
     * @param [p] Properties to set
     */
    constructor(p?: IModifyPlayerNameReq);

    /** ModifyPlayerNameReq newName. */
    public newName: string;

    /**
     * Creates a new ModifyPlayerNameReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModifyPlayerNameReq instance
     */
    public static create(properties?: IModifyPlayerNameReq): ModifyPlayerNameReq;

    /**
     * Encodes the specified ModifyPlayerNameReq message. Does not implicitly {@link ModifyPlayerNameReq.verify|verify} messages.
     * @param m ModifyPlayerNameReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IModifyPlayerNameReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModifyPlayerNameReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ModifyPlayerNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ModifyPlayerNameReq;
}

/** Properties of a ModifyPlayerHeadReq. */
export interface IModifyPlayerHeadReq {

    /** ModifyPlayerHeadReq newHeadId */
    newHeadId?: (string|null);

    /** ModifyPlayerHeadReq headImageUrl */
    headImageUrl?: (string|null);
}

/** Represents a ModifyPlayerHeadReq. */
export class ModifyPlayerHeadReq implements IModifyPlayerHeadReq {

    /**
     * Constructs a new ModifyPlayerHeadReq.
     * @param [p] Properties to set
     */
    constructor(p?: IModifyPlayerHeadReq);

    /** ModifyPlayerHeadReq newHeadId. */
    public newHeadId: string;

    /** ModifyPlayerHeadReq headImageUrl. */
    public headImageUrl: string;

    /**
     * Creates a new ModifyPlayerHeadReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModifyPlayerHeadReq instance
     */
    public static create(properties?: IModifyPlayerHeadReq): ModifyPlayerHeadReq;

    /**
     * Encodes the specified ModifyPlayerHeadReq message. Does not implicitly {@link ModifyPlayerHeadReq.verify|verify} messages.
     * @param m ModifyPlayerHeadReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IModifyPlayerHeadReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModifyPlayerHeadReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ModifyPlayerHeadReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ModifyPlayerHeadReq;
}

/** Properties of a GetPlayerInfoReq. */
export interface IGetPlayerInfoReq {

    /** GetPlayerInfoReq playerID */
    playerID: (number|Long);
}

/** Represents a GetPlayerInfoReq. */
export class GetPlayerInfoReq implements IGetPlayerInfoReq {

    /**
     * Constructs a new GetPlayerInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetPlayerInfoReq);

    /** GetPlayerInfoReq playerID. */
    public playerID: (number|Long);

    /**
     * Creates a new GetPlayerInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetPlayerInfoReq instance
     */
    public static create(properties?: IGetPlayerInfoReq): GetPlayerInfoReq;

    /**
     * Encodes the specified GetPlayerInfoReq message. Does not implicitly {@link GetPlayerInfoReq.verify|verify} messages.
     * @param m GetPlayerInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetPlayerInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetPlayerInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetPlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetPlayerInfoReq;
}

/** Properties of a SignNameReq. */
export interface ISignNameReq {

    /** SignNameReq sign */
    sign: string;
}

/** Represents a SignNameReq. */
export class SignNameReq implements ISignNameReq {

    /**
     * Constructs a new SignNameReq.
     * @param [p] Properties to set
     */
    constructor(p?: ISignNameReq);

    /** SignNameReq sign. */
    public sign: string;

    /**
     * Creates a new SignNameReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignNameReq instance
     */
    public static create(properties?: ISignNameReq): SignNameReq;

    /**
     * Encodes the specified SignNameReq message. Does not implicitly {@link SignNameReq.verify|verify} messages.
     * @param m SignNameReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISignNameReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignNameReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SignNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignNameReq;
}

/** Properties of an UploadHeadImage. */
export interface IUploadHeadImage {

    /** UploadHeadImage headImageData */
    headImageData: Uint8Array;
}

/** Represents an UploadHeadImage. */
export class UploadHeadImage implements IUploadHeadImage {

    /**
     * Constructs a new UploadHeadImage.
     * @param [p] Properties to set
     */
    constructor(p?: IUploadHeadImage);

    /** UploadHeadImage headImageData. */
    public headImageData: Uint8Array;

    /**
     * Creates a new UploadHeadImage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UploadHeadImage instance
     */
    public static create(properties?: IUploadHeadImage): UploadHeadImage;

    /**
     * Encodes the specified UploadHeadImage message. Does not implicitly {@link UploadHeadImage.verify|verify} messages.
     * @param m UploadHeadImage message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUploadHeadImage, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UploadHeadImage message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UploadHeadImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UploadHeadImage;
}

/** Properties of a ChangeHeadBox. */
export interface IChangeHeadBox {

    /** ChangeHeadBox headbox */
    headbox: string;
}

/** Represents a ChangeHeadBox. */
export class ChangeHeadBox implements IChangeHeadBox {

    /**
     * Constructs a new ChangeHeadBox.
     * @param [p] Properties to set
     */
    constructor(p?: IChangeHeadBox);

    /** ChangeHeadBox headbox. */
    public headbox: string;

    /**
     * Creates a new ChangeHeadBox instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeHeadBox instance
     */
    public static create(properties?: IChangeHeadBox): ChangeHeadBox;

    /**
     * Encodes the specified ChangeHeadBox message. Does not implicitly {@link ChangeHeadBox.verify|verify} messages.
     * @param m ChangeHeadBox message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IChangeHeadBox, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeHeadBox message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ChangeHeadBox
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ChangeHeadBox;
}

/** Properties of a GetSafeBoxInfoReq. */
export interface IGetSafeBoxInfoReq {
}

/** Represents a GetSafeBoxInfoReq. */
export class GetSafeBoxInfoReq implements IGetSafeBoxInfoReq {

    /**
     * Constructs a new GetSafeBoxInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetSafeBoxInfoReq);

    /**
     * Creates a new GetSafeBoxInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetSafeBoxInfoReq instance
     */
    public static create(properties?: IGetSafeBoxInfoReq): GetSafeBoxInfoReq;

    /**
     * Encodes the specified GetSafeBoxInfoReq message. Does not implicitly {@link GetSafeBoxInfoReq.verify|verify} messages.
     * @param m GetSafeBoxInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetSafeBoxInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetSafeBoxInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetSafeBoxInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetSafeBoxInfoReq;
}

/** Properties of a GetSafeBoxInfoRsp. */
export interface IGetSafeBoxInfoRsp {

    /** GetSafeBoxInfoRsp money */
    money: number;
}

/** Represents a GetSafeBoxInfoRsp. */
export class GetSafeBoxInfoRsp implements IGetSafeBoxInfoRsp {

    /**
     * Constructs a new GetSafeBoxInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IGetSafeBoxInfoRsp);

    /** GetSafeBoxInfoRsp money. */
    public money: number;

    /**
     * Creates a new GetSafeBoxInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetSafeBoxInfoRsp instance
     */
    public static create(properties?: IGetSafeBoxInfoRsp): GetSafeBoxInfoRsp;

    /**
     * Encodes the specified GetSafeBoxInfoRsp message. Does not implicitly {@link GetSafeBoxInfoRsp.verify|verify} messages.
     * @param m GetSafeBoxInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetSafeBoxInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetSafeBoxInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetSafeBoxInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetSafeBoxInfoRsp;
}

/** Properties of a TakeOutSafeBoxMoneyReq. */
export interface ITakeOutSafeBoxMoneyReq {

    /** TakeOutSafeBoxMoneyReq money */
    money: number;
}

/** Represents a TakeOutSafeBoxMoneyReq. */
export class TakeOutSafeBoxMoneyReq implements ITakeOutSafeBoxMoneyReq {

    /**
     * Constructs a new TakeOutSafeBoxMoneyReq.
     * @param [p] Properties to set
     */
    constructor(p?: ITakeOutSafeBoxMoneyReq);

    /** TakeOutSafeBoxMoneyReq money. */
    public money: number;

    /**
     * Creates a new TakeOutSafeBoxMoneyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeOutSafeBoxMoneyReq instance
     */
    public static create(properties?: ITakeOutSafeBoxMoneyReq): TakeOutSafeBoxMoneyReq;

    /**
     * Encodes the specified TakeOutSafeBoxMoneyReq message. Does not implicitly {@link TakeOutSafeBoxMoneyReq.verify|verify} messages.
     * @param m TakeOutSafeBoxMoneyReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITakeOutSafeBoxMoneyReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeOutSafeBoxMoneyReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TakeOutSafeBoxMoneyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TakeOutSafeBoxMoneyReq;
}

/** Properties of a TakeOutSafeBoxMoneyRsp. */
export interface ITakeOutSafeBoxMoneyRsp {

    /** TakeOutSafeBoxMoneyRsp success */
    success: boolean;

    /** TakeOutSafeBoxMoneyRsp tip */
    tip: string;
}

/** Represents a TakeOutSafeBoxMoneyRsp. */
export class TakeOutSafeBoxMoneyRsp implements ITakeOutSafeBoxMoneyRsp {

    /**
     * Constructs a new TakeOutSafeBoxMoneyRsp.
     * @param [p] Properties to set
     */
    constructor(p?: ITakeOutSafeBoxMoneyRsp);

    /** TakeOutSafeBoxMoneyRsp success. */
    public success: boolean;

    /** TakeOutSafeBoxMoneyRsp tip. */
    public tip: string;

    /**
     * Creates a new TakeOutSafeBoxMoneyRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TakeOutSafeBoxMoneyRsp instance
     */
    public static create(properties?: ITakeOutSafeBoxMoneyRsp): TakeOutSafeBoxMoneyRsp;

    /**
     * Encodes the specified TakeOutSafeBoxMoneyRsp message. Does not implicitly {@link TakeOutSafeBoxMoneyRsp.verify|verify} messages.
     * @param m TakeOutSafeBoxMoneyRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITakeOutSafeBoxMoneyRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TakeOutSafeBoxMoneyRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TakeOutSafeBoxMoneyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TakeOutSafeBoxMoneyRsp;
}

/** Properties of a SaveMoneyToSaveBoxMoneyReq. */
export interface ISaveMoneyToSaveBoxMoneyReq {

    /** SaveMoneyToSaveBoxMoneyReq money */
    money: number;
}

/** Represents a SaveMoneyToSaveBoxMoneyReq. */
export class SaveMoneyToSaveBoxMoneyReq implements ISaveMoneyToSaveBoxMoneyReq {

    /**
     * Constructs a new SaveMoneyToSaveBoxMoneyReq.
     * @param [p] Properties to set
     */
    constructor(p?: ISaveMoneyToSaveBoxMoneyReq);

    /** SaveMoneyToSaveBoxMoneyReq money. */
    public money: number;

    /**
     * Creates a new SaveMoneyToSaveBoxMoneyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SaveMoneyToSaveBoxMoneyReq instance
     */
    public static create(properties?: ISaveMoneyToSaveBoxMoneyReq): SaveMoneyToSaveBoxMoneyReq;

    /**
     * Encodes the specified SaveMoneyToSaveBoxMoneyReq message. Does not implicitly {@link SaveMoneyToSaveBoxMoneyReq.verify|verify} messages.
     * @param m SaveMoneyToSaveBoxMoneyReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISaveMoneyToSaveBoxMoneyReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SaveMoneyToSaveBoxMoneyReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SaveMoneyToSaveBoxMoneyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SaveMoneyToSaveBoxMoneyReq;
}

/** Properties of a SaveMoneyToSaveBoxMoneyRsp. */
export interface ISaveMoneyToSaveBoxMoneyRsp {

    /** SaveMoneyToSaveBoxMoneyRsp success */
    success: boolean;

    /** SaveMoneyToSaveBoxMoneyRsp tip */
    tip: string;
}

/** Represents a SaveMoneyToSaveBoxMoneyRsp. */
export class SaveMoneyToSaveBoxMoneyRsp implements ISaveMoneyToSaveBoxMoneyRsp {

    /**
     * Constructs a new SaveMoneyToSaveBoxMoneyRsp.
     * @param [p] Properties to set
     */
    constructor(p?: ISaveMoneyToSaveBoxMoneyRsp);

    /** SaveMoneyToSaveBoxMoneyRsp success. */
    public success: boolean;

    /** SaveMoneyToSaveBoxMoneyRsp tip. */
    public tip: string;

    /**
     * Creates a new SaveMoneyToSaveBoxMoneyRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SaveMoneyToSaveBoxMoneyRsp instance
     */
    public static create(properties?: ISaveMoneyToSaveBoxMoneyRsp): SaveMoneyToSaveBoxMoneyRsp;

    /**
     * Encodes the specified SaveMoneyToSaveBoxMoneyRsp message. Does not implicitly {@link SaveMoneyToSaveBoxMoneyRsp.verify|verify} messages.
     * @param m SaveMoneyToSaveBoxMoneyRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISaveMoneyToSaveBoxMoneyRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SaveMoneyToSaveBoxMoneyRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SaveMoneyToSaveBoxMoneyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SaveMoneyToSaveBoxMoneyRsp;
}

/** Properties of a GetAnnounInfoReq. */
export interface IGetAnnounInfoReq {
}

/** Represents a GetAnnounInfoReq. */
export class GetAnnounInfoReq implements IGetAnnounInfoReq {

    /**
     * Constructs a new GetAnnounInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetAnnounInfoReq);

    /**
     * Creates a new GetAnnounInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAnnounInfoReq instance
     */
    public static create(properties?: IGetAnnounInfoReq): GetAnnounInfoReq;

    /**
     * Encodes the specified GetAnnounInfoReq message. Does not implicitly {@link GetAnnounInfoReq.verify|verify} messages.
     * @param m GetAnnounInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetAnnounInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAnnounInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetAnnounInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetAnnounInfoReq;
}

/** Properties of an AnnounInfo. */
export interface IAnnounInfo {

    /** AnnounInfo title */
    title: string;

    /** AnnounInfo timeMs */
    timeMs: string;

    /** AnnounInfo sendPlayerName */
    sendPlayerName: string;

    /** AnnounInfo read */
    read: boolean;

    /** AnnounInfo id */
    id: string;

    /** AnnounInfo photoUrl */
    photoUrl: string;

    /** AnnounInfo content */
    content: string;
}

/** Represents an AnnounInfo. */
export class AnnounInfo implements IAnnounInfo {

    /**
     * Constructs a new AnnounInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IAnnounInfo);

    /** AnnounInfo title. */
    public title: string;

    /** AnnounInfo timeMs. */
    public timeMs: string;

    /** AnnounInfo sendPlayerName. */
    public sendPlayerName: string;

    /** AnnounInfo read. */
    public read: boolean;

    /** AnnounInfo id. */
    public id: string;

    /** AnnounInfo photoUrl. */
    public photoUrl: string;

    /** AnnounInfo content. */
    public content: string;

    /**
     * Creates a new AnnounInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AnnounInfo instance
     */
    public static create(properties?: IAnnounInfo): AnnounInfo;

    /**
     * Encodes the specified AnnounInfo message. Does not implicitly {@link AnnounInfo.verify|verify} messages.
     * @param m AnnounInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAnnounInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AnnounInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AnnounInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AnnounInfo;
}

/** Properties of a GetAnnounInfoRsp. */
export interface IGetAnnounInfoRsp {

    /** GetAnnounInfoRsp announInfo */
    announInfo?: (IAnnounInfo[]|null);
}

/** Represents a GetAnnounInfoRsp. */
export class GetAnnounInfoRsp implements IGetAnnounInfoRsp {

    /**
     * Constructs a new GetAnnounInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IGetAnnounInfoRsp);

    /** GetAnnounInfoRsp announInfo. */
    public announInfo: IAnnounInfo[];

    /**
     * Creates a new GetAnnounInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAnnounInfoRsp instance
     */
    public static create(properties?: IGetAnnounInfoRsp): GetAnnounInfoRsp;

    /**
     * Encodes the specified GetAnnounInfoRsp message. Does not implicitly {@link GetAnnounInfoRsp.verify|verify} messages.
     * @param m GetAnnounInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetAnnounInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAnnounInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetAnnounInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetAnnounInfoRsp;
}

/** Properties of a ReaAnnounInfoReq. */
export interface IReaAnnounInfoReq {

    /** ReaAnnounInfoReq id */
    id: string;
}

/** Represents a ReaAnnounInfoReq. */
export class ReaAnnounInfoReq implements IReaAnnounInfoReq {

    /**
     * Constructs a new ReaAnnounInfoReq.
     * @param [p] Properties to set
     */
    constructor(p?: IReaAnnounInfoReq);

    /** ReaAnnounInfoReq id. */
    public id: string;

    /**
     * Creates a new ReaAnnounInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReaAnnounInfoReq instance
     */
    public static create(properties?: IReaAnnounInfoReq): ReaAnnounInfoReq;

    /**
     * Encodes the specified ReaAnnounInfoReq message. Does not implicitly {@link ReaAnnounInfoReq.verify|verify} messages.
     * @param m ReaAnnounInfoReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReaAnnounInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReaAnnounInfoReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReaAnnounInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReaAnnounInfoReq;
}

/** Properties of a ReaAnnounInfoRsp. */
export interface IReaAnnounInfoRsp {
}

/** Represents a ReaAnnounInfoRsp. */
export class ReaAnnounInfoRsp implements IReaAnnounInfoRsp {

    /**
     * Constructs a new ReaAnnounInfoRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IReaAnnounInfoRsp);

    /**
     * Creates a new ReaAnnounInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReaAnnounInfoRsp instance
     */
    public static create(properties?: IReaAnnounInfoRsp): ReaAnnounInfoRsp;

    /**
     * Encodes the specified ReaAnnounInfoRsp message. Does not implicitly {@link ReaAnnounInfoRsp.verify|verify} messages.
     * @param m ReaAnnounInfoRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReaAnnounInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReaAnnounInfoRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReaAnnounInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReaAnnounInfoRsp;
}

/** RedPointType enum. */
export enum RedPointType {
    Announ = 0,
    Active_Reward = 1
}

/** Properties of an AnnounReadPointPush. */
export interface IAnnounReadPointPush {

    /** AnnounReadPointPush hasRedPoint */
    hasRedPoint?: (boolean|null);

    /** AnnounReadPointPush redPointType */
    redPointType?: (RedPointType|null);
}

/** Represents an AnnounReadPointPush. */
export class AnnounReadPointPush implements IAnnounReadPointPush {

    /**
     * Constructs a new AnnounReadPointPush.
     * @param [p] Properties to set
     */
    constructor(p?: IAnnounReadPointPush);

    /** AnnounReadPointPush hasRedPoint. */
    public hasRedPoint: boolean;

    /** AnnounReadPointPush redPointType. */
    public redPointType: RedPointType;

    /**
     * Creates a new AnnounReadPointPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AnnounReadPointPush instance
     */
    public static create(properties?: IAnnounReadPointPush): AnnounReadPointPush;

    /**
     * Encodes the specified AnnounReadPointPush message. Does not implicitly {@link AnnounReadPointPush.verify|verify} messages.
     * @param m AnnounReadPointPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAnnounReadPointPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AnnounReadPointPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AnnounReadPointPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AnnounReadPointPush;
}

/** Properties of a BankruptcyPush. */
export interface IBankruptcyPush {

    /** BankruptcyPush remain */
    remain: number;
}

/** Represents a BankruptcyPush. */
export class BankruptcyPush implements IBankruptcyPush {

    /**
     * Constructs a new BankruptcyPush.
     * @param [p] Properties to set
     */
    constructor(p?: IBankruptcyPush);

    /** BankruptcyPush remain. */
    public remain: number;

    /**
     * Creates a new BankruptcyPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BankruptcyPush instance
     */
    public static create(properties?: IBankruptcyPush): BankruptcyPush;

    /**
     * Encodes the specified BankruptcyPush message. Does not implicitly {@link BankruptcyPush.verify|verify} messages.
     * @param m BankruptcyPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBankruptcyPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BankruptcyPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BankruptcyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BankruptcyPush;
}

/** Properties of a BankruptcyREQ. */
export interface IBankruptcyREQ {
}

/** Represents a BankruptcyREQ. */
export class BankruptcyREQ implements IBankruptcyREQ {

    /**
     * Constructs a new BankruptcyREQ.
     * @param [p] Properties to set
     */
    constructor(p?: IBankruptcyREQ);

    /**
     * Creates a new BankruptcyREQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BankruptcyREQ instance
     */
    public static create(properties?: IBankruptcyREQ): BankruptcyREQ;

    /**
     * Encodes the specified BankruptcyREQ message. Does not implicitly {@link BankruptcyREQ.verify|verify} messages.
     * @param m BankruptcyREQ message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBankruptcyREQ, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BankruptcyREQ message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BankruptcyREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BankruptcyREQ;
}

/** Properties of a BankruptcyRsp. */
export interface IBankruptcyRsp {

    /** BankruptcyRsp success */
    success: boolean;

    /** BankruptcyRsp tip */
    tip: string;

    /** BankruptcyRsp failType */
    failType: number;
}

/** Represents a BankruptcyRsp. */
export class BankruptcyRsp implements IBankruptcyRsp {

    /**
     * Constructs a new BankruptcyRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IBankruptcyRsp);

    /** BankruptcyRsp success. */
    public success: boolean;

    /** BankruptcyRsp tip. */
    public tip: string;

    /** BankruptcyRsp failType. */
    public failType: number;

    /**
     * Creates a new BankruptcyRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BankruptcyRsp instance
     */
    public static create(properties?: IBankruptcyRsp): BankruptcyRsp;

    /**
     * Encodes the specified BankruptcyRsp message. Does not implicitly {@link BankruptcyRsp.verify|verify} messages.
     * @param m BankruptcyRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBankruptcyRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BankruptcyRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BankruptcyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BankruptcyRsp;
}

/** Properties of a BankruptcyRemainREQ. */
export interface IBankruptcyRemainREQ {
}

/** Represents a BankruptcyRemainREQ. */
export class BankruptcyRemainREQ implements IBankruptcyRemainREQ {

    /**
     * Constructs a new BankruptcyRemainREQ.
     * @param [p] Properties to set
     */
    constructor(p?: IBankruptcyRemainREQ);

    /**
     * Creates a new BankruptcyRemainREQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BankruptcyRemainREQ instance
     */
    public static create(properties?: IBankruptcyRemainREQ): BankruptcyRemainREQ;

    /**
     * Encodes the specified BankruptcyRemainREQ message. Does not implicitly {@link BankruptcyRemainREQ.verify|verify} messages.
     * @param m BankruptcyRemainREQ message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBankruptcyRemainREQ, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BankruptcyRemainREQ message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BankruptcyRemainREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BankruptcyRemainREQ;
}

/** Properties of a BankruptcyRemainRsp. */
export interface IBankruptcyRemainRsp {

    /** BankruptcyRemainRsp remain */
    remain: number;

    /** BankruptcyRemainRsp allRemainGold */
    allRemainGold: number;
}

/** Represents a BankruptcyRemainRsp. */
export class BankruptcyRemainRsp implements IBankruptcyRemainRsp {

    /**
     * Constructs a new BankruptcyRemainRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IBankruptcyRemainRsp);

    /** BankruptcyRemainRsp remain. */
    public remain: number;

    /** BankruptcyRemainRsp allRemainGold. */
    public allRemainGold: number;

    /**
     * Creates a new BankruptcyRemainRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BankruptcyRemainRsp instance
     */
    public static create(properties?: IBankruptcyRemainRsp): BankruptcyRemainRsp;

    /**
     * Encodes the specified BankruptcyRemainRsp message. Does not implicitly {@link BankruptcyRemainRsp.verify|verify} messages.
     * @param m BankruptcyRemainRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBankruptcyRemainRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BankruptcyRemainRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BankruptcyRemainRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BankruptcyRemainRsp;
}

/** Properties of a ServerGameReqBankruptyInfo. */
export interface IServerGameReqBankruptyInfo {

    /** ServerGameReqBankruptyInfo playerId */
    playerId: string;
}

/** Represents a ServerGameReqBankruptyInfo. */
export class ServerGameReqBankruptyInfo implements IServerGameReqBankruptyInfo {

    /**
     * Constructs a new ServerGameReqBankruptyInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IServerGameReqBankruptyInfo);

    /** ServerGameReqBankruptyInfo playerId. */
    public playerId: string;

    /**
     * Creates a new ServerGameReqBankruptyInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerGameReqBankruptyInfo instance
     */
    public static create(properties?: IServerGameReqBankruptyInfo): ServerGameReqBankruptyInfo;

    /**
     * Encodes the specified ServerGameReqBankruptyInfo message. Does not implicitly {@link ServerGameReqBankruptyInfo.verify|verify} messages.
     * @param m ServerGameReqBankruptyInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IServerGameReqBankruptyInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerGameReqBankruptyInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ServerGameReqBankruptyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ServerGameReqBankruptyInfo;
}

/** Properties of a ZhuCeSongJinPush. */
export interface IZhuCeSongJinPush {

    /** ZhuCeSongJinPush hasZhuCeSong */
    hasZhuCeSong: boolean;
}

/** Represents a ZhuCeSongJinPush. */
export class ZhuCeSongJinPush implements IZhuCeSongJinPush {

    /**
     * Constructs a new ZhuCeSongJinPush.
     * @param [p] Properties to set
     */
    constructor(p?: IZhuCeSongJinPush);

    /** ZhuCeSongJinPush hasZhuCeSong. */
    public hasZhuCeSong: boolean;

    /**
     * Creates a new ZhuCeSongJinPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ZhuCeSongJinPush instance
     */
    public static create(properties?: IZhuCeSongJinPush): ZhuCeSongJinPush;

    /**
     * Encodes the specified ZhuCeSongJinPush message. Does not implicitly {@link ZhuCeSongJinPush.verify|verify} messages.
     * @param m ZhuCeSongJinPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IZhuCeSongJinPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ZhuCeSongJinPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ZhuCeSongJinPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ZhuCeSongJinPush;
}

/** Properties of a ZhuCeSongJinREQ. */
export interface IZhuCeSongJinREQ {
}

/** Represents a ZhuCeSongJinREQ. */
export class ZhuCeSongJinREQ implements IZhuCeSongJinREQ {

    /**
     * Constructs a new ZhuCeSongJinREQ.
     * @param [p] Properties to set
     */
    constructor(p?: IZhuCeSongJinREQ);

    /**
     * Creates a new ZhuCeSongJinREQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ZhuCeSongJinREQ instance
     */
    public static create(properties?: IZhuCeSongJinREQ): ZhuCeSongJinREQ;

    /**
     * Encodes the specified ZhuCeSongJinREQ message. Does not implicitly {@link ZhuCeSongJinREQ.verify|verify} messages.
     * @param m ZhuCeSongJinREQ message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IZhuCeSongJinREQ, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ZhuCeSongJinREQ message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ZhuCeSongJinREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ZhuCeSongJinREQ;
}

/** Properties of a ZhuCeSongJinRsp. */
export interface IZhuCeSongJinRsp {

    /** ZhuCeSongJinRsp success */
    success: boolean;

    /** ZhuCeSongJinRsp tip */
    tip: string;

    /** ZhuCeSongJinRsp money */
    money: number;
}

/** Represents a ZhuCeSongJinRsp. */
export class ZhuCeSongJinRsp implements IZhuCeSongJinRsp {

    /**
     * Constructs a new ZhuCeSongJinRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IZhuCeSongJinRsp);

    /** ZhuCeSongJinRsp success. */
    public success: boolean;

    /** ZhuCeSongJinRsp tip. */
    public tip: string;

    /** ZhuCeSongJinRsp money. */
    public money: number;

    /**
     * Creates a new ZhuCeSongJinRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ZhuCeSongJinRsp instance
     */
    public static create(properties?: IZhuCeSongJinRsp): ZhuCeSongJinRsp;

    /**
     * Encodes the specified ZhuCeSongJinRsp message. Does not implicitly {@link ZhuCeSongJinRsp.verify|verify} messages.
     * @param m ZhuCeSongJinRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IZhuCeSongJinRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ZhuCeSongJinRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ZhuCeSongJinRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ZhuCeSongJinRsp;
}

/** Properties of a XinShouJinREQ. */
export interface IXinShouJinREQ {
}

/** Represents a XinShouJinREQ. */
export class XinShouJinREQ implements IXinShouJinREQ {

    /**
     * Constructs a new XinShouJinREQ.
     * @param [p] Properties to set
     */
    constructor(p?: IXinShouJinREQ);

    /**
     * Creates a new XinShouJinREQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XinShouJinREQ instance
     */
    public static create(properties?: IXinShouJinREQ): XinShouJinREQ;

    /**
     * Encodes the specified XinShouJinREQ message. Does not implicitly {@link XinShouJinREQ.verify|verify} messages.
     * @param m XinShouJinREQ message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IXinShouJinREQ, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XinShouJinREQ message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns XinShouJinREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): XinShouJinREQ;
}

/** Properties of a XinShouJinRsp. */
export interface IXinShouJinRsp {

    /** XinShouJinRsp success */
    success: boolean;

    /** XinShouJinRsp tip */
    tip: string;

    /** XinShouJinRsp money */
    money: number;
}

/** Represents a XinShouJinRsp. */
export class XinShouJinRsp implements IXinShouJinRsp {

    /**
     * Constructs a new XinShouJinRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IXinShouJinRsp);

    /** XinShouJinRsp success. */
    public success: boolean;

    /** XinShouJinRsp tip. */
    public tip: string;

    /** XinShouJinRsp money. */
    public money: number;

    /**
     * Creates a new XinShouJinRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XinShouJinRsp instance
     */
    public static create(properties?: IXinShouJinRsp): XinShouJinRsp;

    /**
     * Encodes the specified XinShouJinRsp message. Does not implicitly {@link XinShouJinRsp.verify|verify} messages.
     * @param m XinShouJinRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IXinShouJinRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XinShouJinRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns XinShouJinRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): XinShouJinRsp;
}

/** Properties of a XinShouUpStepREQ. */
export interface IXinShouUpStepREQ {

    /** XinShouUpStepREQ step */
    step: number;
}

/** Represents a XinShouUpStepREQ. */
export class XinShouUpStepREQ implements IXinShouUpStepREQ {

    /**
     * Constructs a new XinShouUpStepREQ.
     * @param [p] Properties to set
     */
    constructor(p?: IXinShouUpStepREQ);

    /** XinShouUpStepREQ step. */
    public step: number;

    /**
     * Creates a new XinShouUpStepREQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XinShouUpStepREQ instance
     */
    public static create(properties?: IXinShouUpStepREQ): XinShouUpStepREQ;

    /**
     * Encodes the specified XinShouUpStepREQ message. Does not implicitly {@link XinShouUpStepREQ.verify|verify} messages.
     * @param m XinShouUpStepREQ message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IXinShouUpStepREQ, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XinShouUpStepREQ message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns XinShouUpStepREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): XinShouUpStepREQ;
}

/** Properties of a XinShouUpStepRsp. */
export interface IXinShouUpStepRsp {

    /** XinShouUpStepRsp success */
    success: boolean;
}

/** Represents a XinShouUpStepRsp. */
export class XinShouUpStepRsp implements IXinShouUpStepRsp {

    /**
     * Constructs a new XinShouUpStepRsp.
     * @param [p] Properties to set
     */
    constructor(p?: IXinShouUpStepRsp);

    /** XinShouUpStepRsp success. */
    public success: boolean;

    /**
     * Creates a new XinShouUpStepRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XinShouUpStepRsp instance
     */
    public static create(properties?: IXinShouUpStepRsp): XinShouUpStepRsp;

    /**
     * Encodes the specified XinShouUpStepRsp message. Does not implicitly {@link XinShouUpStepRsp.verify|verify} messages.
     * @param m XinShouUpStepRsp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IXinShouUpStepRsp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XinShouUpStepRsp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns XinShouUpStepRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): XinShouUpStepRsp;
}

/** Properties of a XinShouJinAndStepPush. */
export interface IXinShouJinAndStepPush {

    /** XinShouJinAndStepPush step */
    step?: (number[]|null);

    /** XinShouJinAndStepPush canGetXinShouJin */
    canGetXinShouJin: boolean;

    /** XinShouJinAndStepPush money */
    money: number;
}

/** Represents a XinShouJinAndStepPush. */
export class XinShouJinAndStepPush implements IXinShouJinAndStepPush {

    /**
     * Constructs a new XinShouJinAndStepPush.
     * @param [p] Properties to set
     */
    constructor(p?: IXinShouJinAndStepPush);

    /** XinShouJinAndStepPush step. */
    public step: number[];

    /** XinShouJinAndStepPush canGetXinShouJin. */
    public canGetXinShouJin: boolean;

    /** XinShouJinAndStepPush money. */
    public money: number;

    /**
     * Creates a new XinShouJinAndStepPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XinShouJinAndStepPush instance
     */
    public static create(properties?: IXinShouJinAndStepPush): XinShouJinAndStepPush;

    /**
     * Encodes the specified XinShouJinAndStepPush message. Does not implicitly {@link XinShouJinAndStepPush.verify|verify} messages.
     * @param m XinShouJinAndStepPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IXinShouJinAndStepPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XinShouJinAndStepPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns XinShouJinAndStepPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): XinShouJinAndStepPush;
}

/** Properties of a BindingMoblieNumeReq. */
export interface IBindingMoblieNumeReq {

    /** BindingMoblieNumeReq mobileNum */
    mobileNum: string;

    /** BindingMoblieNumeReq pwd */
    pwd: string;

    /** BindingMoblieNumeReq confirmPwd */
    confirmPwd: string;

    /** BindingMoblieNumeReq checkCode */
    checkCode: string;
}

/** Represents a BindingMoblieNumeReq. */
export class BindingMoblieNumeReq implements IBindingMoblieNumeReq {

    /**
     * Constructs a new BindingMoblieNumeReq.
     * @param [p] Properties to set
     */
    constructor(p?: IBindingMoblieNumeReq);

    /** BindingMoblieNumeReq mobileNum. */
    public mobileNum: string;

    /** BindingMoblieNumeReq pwd. */
    public pwd: string;

    /** BindingMoblieNumeReq confirmPwd. */
    public confirmPwd: string;

    /** BindingMoblieNumeReq checkCode. */
    public checkCode: string;

    /**
     * Creates a new BindingMoblieNumeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BindingMoblieNumeReq instance
     */
    public static create(properties?: IBindingMoblieNumeReq): BindingMoblieNumeReq;

    /**
     * Encodes the specified BindingMoblieNumeReq message. Does not implicitly {@link BindingMoblieNumeReq.verify|verify} messages.
     * @param m BindingMoblieNumeReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBindingMoblieNumeReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BindingMoblieNumeReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BindingMoblieNumeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BindingMoblieNumeReq;
}

/** Properties of a BindingMoblieNumeRes. */
export interface IBindingMoblieNumeRes {

    /** BindingMoblieNumeRes isSuc */
    isSuc: boolean;

    /** BindingMoblieNumeRes mobileNum */
    mobileNum?: (string|null);

    /** BindingMoblieNumeRes pwd */
    pwd?: (string|null);

    /** BindingMoblieNumeRes failTips */
    failTips?: (string|null);
}

/** Represents a BindingMoblieNumeRes. */
export class BindingMoblieNumeRes implements IBindingMoblieNumeRes {

    /**
     * Constructs a new BindingMoblieNumeRes.
     * @param [p] Properties to set
     */
    constructor(p?: IBindingMoblieNumeRes);

    /** BindingMoblieNumeRes isSuc. */
    public isSuc: boolean;

    /** BindingMoblieNumeRes mobileNum. */
    public mobileNum: string;

    /** BindingMoblieNumeRes pwd. */
    public pwd: string;

    /** BindingMoblieNumeRes failTips. */
    public failTips: string;

    /**
     * Creates a new BindingMoblieNumeRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BindingMoblieNumeRes instance
     */
    public static create(properties?: IBindingMoblieNumeRes): BindingMoblieNumeRes;

    /**
     * Encodes the specified BindingMoblieNumeRes message. Does not implicitly {@link BindingMoblieNumeRes.verify|verify} messages.
     * @param m BindingMoblieNumeRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBindingMoblieNumeRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BindingMoblieNumeRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BindingMoblieNumeRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BindingMoblieNumeRes;
}

/** Properties of a HeadFrameListPush. */
export interface IHeadFrameListPush {

    /** HeadFrameListPush headFrameList */
    headFrameList?: (number[]|null);
}

/** Represents a HeadFrameListPush. */
export class HeadFrameListPush implements IHeadFrameListPush {

    /**
     * Constructs a new HeadFrameListPush.
     * @param [p] Properties to set
     */
    constructor(p?: IHeadFrameListPush);

    /** HeadFrameListPush headFrameList. */
    public headFrameList: number[];

    /**
     * Creates a new HeadFrameListPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeadFrameListPush instance
     */
    public static create(properties?: IHeadFrameListPush): HeadFrameListPush;

    /**
     * Encodes the specified HeadFrameListPush message. Does not implicitly {@link HeadFrameListPush.verify|verify} messages.
     * @param m HeadFrameListPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHeadFrameListPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeadFrameListPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HeadFrameListPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HeadFrameListPush;
}

/** Properties of a BatteryListPush. */
export interface IBatteryListPush {

    /** BatteryListPush batteryList */
    batteryList?: (number[]|null);
}

/** Represents a BatteryListPush. */
export class BatteryListPush implements IBatteryListPush {

    /**
     * Constructs a new BatteryListPush.
     * @param [p] Properties to set
     */
    constructor(p?: IBatteryListPush);

    /** BatteryListPush batteryList. */
    public batteryList: number[];

    /**
     * Creates a new BatteryListPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BatteryListPush instance
     */
    public static create(properties?: IBatteryListPush): BatteryListPush;

    /**
     * Encodes the specified BatteryListPush message. Does not implicitly {@link BatteryListPush.verify|verify} messages.
     * @param m BatteryListPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBatteryListPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BatteryListPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BatteryListPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BatteryListPush;
}

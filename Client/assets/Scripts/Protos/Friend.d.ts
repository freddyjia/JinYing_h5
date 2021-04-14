import * as $protobuf from "protobufjs";
/** FriendOnlineStatus enum. */
export enum FriendOnlineStatus {
    Online = 1,
    OnBattle = 2,
    Offline = 3
}

/** FriendStatus enum. */
export enum FriendStatus {
    Status_Apply = 1,
    Status_Friend = 2,
    Status_NoFriend = 3
}

/** Properties of a Friend. */
export interface IFriend {

    /** Friend playerID */
    playerID: (number|Long);

    /** Friend username */
    username: string;

    /** Friend headImageUrl */
    headImageUrl: string;

    /** Friend vipLv */
    vipLv: number;

    /** Friend status */
    status?: (FriendOnlineStatus|null);

    /** Friend gold */
    gold: (number|Long);

    /** Friend haveChat */
    haveChat?: (boolean|null);

    /** Friend friendStatus */
    friendStatus?: (FriendStatus|null);
}

/** Represents a Friend. */
export class Friend implements IFriend {

    /**
     * Constructs a new Friend.
     * @param [p] Properties to set
     */
    constructor(p?: IFriend);

    /** Friend playerID. */
    public playerID: (number|Long);

    /** Friend username. */
    public username: string;

    /** Friend headImageUrl. */
    public headImageUrl: string;

    /** Friend vipLv. */
    public vipLv: number;

    /** Friend status. */
    public status: FriendOnlineStatus;

    /** Friend gold. */
    public gold: (number|Long);

    /** Friend haveChat. */
    public haveChat: boolean;

    /** Friend friendStatus. */
    public friendStatus: FriendStatus;

    /**
     * Creates a new Friend instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Friend instance
     */
    public static create(properties?: IFriend): Friend;

    /**
     * Encodes the specified Friend message. Does not implicitly {@link Friend.verify|verify} messages.
     * @param m Friend message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFriend, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Friend message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Friend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Friend;
}

/** Properties of an ApplyFriend. */
export interface IApplyFriend {

    /** ApplyFriend playerID */
    playerID: (number|Long);

    /** ApplyFriend username */
    username: string;

    /** ApplyFriend headImageUrl */
    headImageUrl: string;

    /** ApplyFriend vipLv */
    vipLv: number;
}

/** Represents an ApplyFriend. */
export class ApplyFriend implements IApplyFriend {

    /**
     * Constructs a new ApplyFriend.
     * @param [p] Properties to set
     */
    constructor(p?: IApplyFriend);

    /** ApplyFriend playerID. */
    public playerID: (number|Long);

    /** ApplyFriend username. */
    public username: string;

    /** ApplyFriend headImageUrl. */
    public headImageUrl: string;

    /** ApplyFriend vipLv. */
    public vipLv: number;

    /**
     * Creates a new ApplyFriend instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyFriend instance
     */
    public static create(properties?: IApplyFriend): ApplyFriend;

    /**
     * Encodes the specified ApplyFriend message. Does not implicitly {@link ApplyFriend.verify|verify} messages.
     * @param m ApplyFriend message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IApplyFriend, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyFriend message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ApplyFriend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ApplyFriend;
}

/** Properties of a FriendListPush. */
export interface IFriendListPush {

    /** FriendListPush friendList */
    friendList?: (IFriend[]|null);

    /** FriendListPush applyList */
    applyList?: (IApplyFriend[]|null);

    /** FriendListPush recommandList */
    recommandList?: (IFriend[]|null);
}

/** Represents a FriendListPush. */
export class FriendListPush implements IFriendListPush {

    /**
     * Constructs a new FriendListPush.
     * @param [p] Properties to set
     */
    constructor(p?: IFriendListPush);

    /** FriendListPush friendList. */
    public friendList: IFriend[];

    /** FriendListPush applyList. */
    public applyList: IApplyFriend[];

    /** FriendListPush recommandList. */
    public recommandList: IFriend[];

    /**
     * Creates a new FriendListPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FriendListPush instance
     */
    public static create(properties?: IFriendListPush): FriendListPush;

    /**
     * Encodes the specified FriendListPush message. Does not implicitly {@link FriendListPush.verify|verify} messages.
     * @param m FriendListPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFriendListPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FriendListPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FriendListPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FriendListPush;
}

/** Properties of a FriendListModifyPush. */
export interface IFriendListModifyPush {

    /** FriendListModifyPush updateFriendList */
    updateFriendList?: (IFriend[]|null);

    /** FriendListModifyPush deleteFriendList */
    deleteFriendList?: ((number|Long)[]|null);

    /** FriendListModifyPush updateApplyList */
    updateApplyList?: (IApplyFriend[]|null);

    /** FriendListModifyPush deleteApplyIdList */
    deleteApplyIdList?: ((number|Long)[]|null);
}

/** Represents a FriendListModifyPush. */
export class FriendListModifyPush implements IFriendListModifyPush {

    /**
     * Constructs a new FriendListModifyPush.
     * @param [p] Properties to set
     */
    constructor(p?: IFriendListModifyPush);

    /** FriendListModifyPush updateFriendList. */
    public updateFriendList: IFriend[];

    /** FriendListModifyPush deleteFriendList. */
    public deleteFriendList: (number|Long)[];

    /** FriendListModifyPush updateApplyList. */
    public updateApplyList: IApplyFriend[];

    /** FriendListModifyPush deleteApplyIdList. */
    public deleteApplyIdList: (number|Long)[];

    /**
     * Creates a new FriendListModifyPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FriendListModifyPush instance
     */
    public static create(properties?: IFriendListModifyPush): FriendListModifyPush;

    /**
     * Encodes the specified FriendListModifyPush message. Does not implicitly {@link FriendListModifyPush.verify|verify} messages.
     * @param m FriendListModifyPush message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFriendListModifyPush, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FriendListModifyPush message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FriendListModifyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FriendListModifyPush;
}

/** Properties of a GetRecommandFriendReq. */
export interface IGetRecommandFriendReq {
}

/** Represents a GetRecommandFriendReq. */
export class GetRecommandFriendReq implements IGetRecommandFriendReq {

    /**
     * Constructs a new GetRecommandFriendReq.
     * @param [p] Properties to set
     */
    constructor(p?: IGetRecommandFriendReq);

    /**
     * Creates a new GetRecommandFriendReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRecommandFriendReq instance
     */
    public static create(properties?: IGetRecommandFriendReq): GetRecommandFriendReq;

    /**
     * Encodes the specified GetRecommandFriendReq message. Does not implicitly {@link GetRecommandFriendReq.verify|verify} messages.
     * @param m GetRecommandFriendReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetRecommandFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetRecommandFriendReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetRecommandFriendReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetRecommandFriendReq;
}

/** Properties of a GetRecommandFriendRes. */
export interface IGetRecommandFriendRes {

    /** GetRecommandFriendRes recommandList */
    recommandList?: (IFriend[]|null);
}

/** Represents a GetRecommandFriendRes. */
export class GetRecommandFriendRes implements IGetRecommandFriendRes {

    /**
     * Constructs a new GetRecommandFriendRes.
     * @param [p] Properties to set
     */
    constructor(p?: IGetRecommandFriendRes);

    /** GetRecommandFriendRes recommandList. */
    public recommandList: IFriend[];

    /**
     * Creates a new GetRecommandFriendRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRecommandFriendRes instance
     */
    public static create(properties?: IGetRecommandFriendRes): GetRecommandFriendRes;

    /**
     * Encodes the specified GetRecommandFriendRes message. Does not implicitly {@link GetRecommandFriendRes.verify|verify} messages.
     * @param m GetRecommandFriendRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGetRecommandFriendRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetRecommandFriendRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GetRecommandFriendRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GetRecommandFriendRes;
}

/** Properties of a DeleteFriendReq. */
export interface IDeleteFriendReq {

    /** DeleteFriendReq playerID */
    playerID: (number|Long);
}

/** Represents a DeleteFriendReq. */
export class DeleteFriendReq implements IDeleteFriendReq {

    /**
     * Constructs a new DeleteFriendReq.
     * @param [p] Properties to set
     */
    constructor(p?: IDeleteFriendReq);

    /** DeleteFriendReq playerID. */
    public playerID: (number|Long);

    /**
     * Creates a new DeleteFriendReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteFriendReq instance
     */
    public static create(properties?: IDeleteFriendReq): DeleteFriendReq;

    /**
     * Encodes the specified DeleteFriendReq message. Does not implicitly {@link DeleteFriendReq.verify|verify} messages.
     * @param m DeleteFriendReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDeleteFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteFriendReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DeleteFriendReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DeleteFriendReq;
}

/** Properties of a DeleteFriendRes. */
export interface IDeleteFriendRes {

    /** DeleteFriendRes isSuccess */
    isSuccess: boolean;

    /** DeleteFriendRes tips */
    tips?: (string|null);
}

/** Represents a DeleteFriendRes. */
export class DeleteFriendRes implements IDeleteFriendRes {

    /**
     * Constructs a new DeleteFriendRes.
     * @param [p] Properties to set
     */
    constructor(p?: IDeleteFriendRes);

    /** DeleteFriendRes isSuccess. */
    public isSuccess: boolean;

    /** DeleteFriendRes tips. */
    public tips: string;

    /**
     * Creates a new DeleteFriendRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteFriendRes instance
     */
    public static create(properties?: IDeleteFriendRes): DeleteFriendRes;

    /**
     * Encodes the specified DeleteFriendRes message. Does not implicitly {@link DeleteFriendRes.verify|verify} messages.
     * @param m DeleteFriendRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDeleteFriendRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteFriendRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DeleteFriendRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DeleteFriendRes;
}

/** Properties of a ProcessApplyFriendReq. */
export interface IProcessApplyFriendReq {

    /** ProcessApplyFriendReq playerID */
    playerID: (number|Long);

    /** ProcessApplyFriendReq blnAccept */
    blnAccept: boolean;
}

/** Represents a ProcessApplyFriendReq. */
export class ProcessApplyFriendReq implements IProcessApplyFriendReq {

    /**
     * Constructs a new ProcessApplyFriendReq.
     * @param [p] Properties to set
     */
    constructor(p?: IProcessApplyFriendReq);

    /** ProcessApplyFriendReq playerID. */
    public playerID: (number|Long);

    /** ProcessApplyFriendReq blnAccept. */
    public blnAccept: boolean;

    /**
     * Creates a new ProcessApplyFriendReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProcessApplyFriendReq instance
     */
    public static create(properties?: IProcessApplyFriendReq): ProcessApplyFriendReq;

    /**
     * Encodes the specified ProcessApplyFriendReq message. Does not implicitly {@link ProcessApplyFriendReq.verify|verify} messages.
     * @param m ProcessApplyFriendReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IProcessApplyFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProcessApplyFriendReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ProcessApplyFriendReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ProcessApplyFriendReq;
}

/** Properties of a ProcessApplyFriendRes. */
export interface IProcessApplyFriendRes {

    /** ProcessApplyFriendRes isSuccess */
    isSuccess: boolean;

    /** ProcessApplyFriendRes tips */
    tips?: (string|null);
}

/** Represents a ProcessApplyFriendRes. */
export class ProcessApplyFriendRes implements IProcessApplyFriendRes {

    /**
     * Constructs a new ProcessApplyFriendRes.
     * @param [p] Properties to set
     */
    constructor(p?: IProcessApplyFriendRes);

    /** ProcessApplyFriendRes isSuccess. */
    public isSuccess: boolean;

    /** ProcessApplyFriendRes tips. */
    public tips: string;

    /**
     * Creates a new ProcessApplyFriendRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProcessApplyFriendRes instance
     */
    public static create(properties?: IProcessApplyFriendRes): ProcessApplyFriendRes;

    /**
     * Encodes the specified ProcessApplyFriendRes message. Does not implicitly {@link ProcessApplyFriendRes.verify|verify} messages.
     * @param m ProcessApplyFriendRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IProcessApplyFriendRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProcessApplyFriendRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ProcessApplyFriendRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ProcessApplyFriendRes;
}

/** Properties of an ApplyFriendReq. */
export interface IApplyFriendReq {

    /** ApplyFriendReq playerID */
    playerID: (number|Long);
}

/** Represents an ApplyFriendReq. */
export class ApplyFriendReq implements IApplyFriendReq {

    /**
     * Constructs a new ApplyFriendReq.
     * @param [p] Properties to set
     */
    constructor(p?: IApplyFriendReq);

    /** ApplyFriendReq playerID. */
    public playerID: (number|Long);

    /**
     * Creates a new ApplyFriendReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyFriendReq instance
     */
    public static create(properties?: IApplyFriendReq): ApplyFriendReq;

    /**
     * Encodes the specified ApplyFriendReq message. Does not implicitly {@link ApplyFriendReq.verify|verify} messages.
     * @param m ApplyFriendReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IApplyFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyFriendReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ApplyFriendReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ApplyFriendReq;
}

/** Properties of an ApplyFriendRes. */
export interface IApplyFriendRes {

    /** ApplyFriendRes isSuccess */
    isSuccess: boolean;

    /** ApplyFriendRes tips */
    tips?: (string|null);
}

/** Represents an ApplyFriendRes. */
export class ApplyFriendRes implements IApplyFriendRes {

    /**
     * Constructs a new ApplyFriendRes.
     * @param [p] Properties to set
     */
    constructor(p?: IApplyFriendRes);

    /** ApplyFriendRes isSuccess. */
    public isSuccess: boolean;

    /** ApplyFriendRes tips. */
    public tips: string;

    /**
     * Creates a new ApplyFriendRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyFriendRes instance
     */
    public static create(properties?: IApplyFriendRes): ApplyFriendRes;

    /**
     * Encodes the specified ApplyFriendRes message. Does not implicitly {@link ApplyFriendRes.verify|verify} messages.
     * @param m ApplyFriendRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IApplyFriendRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyFriendRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ApplyFriendRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ApplyFriendRes;
}

/** Properties of a SearchUserReq. */
export interface ISearchUserReq {

    /** SearchUserReq playerID */
    playerID: (number|Long);
}

/** Represents a SearchUserReq. */
export class SearchUserReq implements ISearchUserReq {

    /**
     * Constructs a new SearchUserReq.
     * @param [p] Properties to set
     */
    constructor(p?: ISearchUserReq);

    /** SearchUserReq playerID. */
    public playerID: (number|Long);

    /**
     * Creates a new SearchUserReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchUserReq instance
     */
    public static create(properties?: ISearchUserReq): SearchUserReq;

    /**
     * Encodes the specified SearchUserReq message. Does not implicitly {@link SearchUserReq.verify|verify} messages.
     * @param m SearchUserReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISearchUserReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchUserReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SearchUserReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SearchUserReq;
}

/** Properties of a SearchUserRes. */
export interface ISearchUserRes {

    /** SearchUserRes isSuccess */
    isSuccess: boolean;

    /** SearchUserRes tips */
    tips?: (string|null);

    /** SearchUserRes searchUser */
    searchUser?: (IFriend|null);
}

/** Represents a SearchUserRes. */
export class SearchUserRes implements ISearchUserRes {

    /**
     * Constructs a new SearchUserRes.
     * @param [p] Properties to set
     */
    constructor(p?: ISearchUserRes);

    /** SearchUserRes isSuccess. */
    public isSuccess: boolean;

    /** SearchUserRes tips. */
    public tips: string;

    /** SearchUserRes searchUser. */
    public searchUser?: (IFriend|null);

    /**
     * Creates a new SearchUserRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchUserRes instance
     */
    public static create(properties?: ISearchUserRes): SearchUserRes;

    /**
     * Encodes the specified SearchUserRes message. Does not implicitly {@link SearchUserRes.verify|verify} messages.
     * @param m SearchUserRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISearchUserRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchUserRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SearchUserRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SearchUserRes;
}

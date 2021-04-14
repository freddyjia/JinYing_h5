import * as $protobuf from "protobufjs";
/** UseType enum. */
export enum UseType {
    UseMulti = 1,
    UseSingle = 2,
    DisabledUse = 3
}

/** Properties of an Item. */
export interface IItem {

    /** Item id */
    id: (number|Long);

    /** Item name */
    name: string;

    /** Item count */
    count: number;

    /** Item bagType */
    bagType: string;

    /** Item desc */
    desc: string;

    /** Item overdueDate */
    overdueDate?: (string|null);

    /** Item altasPath */
    altasPath: string;

    /** Item spriteName */
    spriteName: string;

    /** Item useType */
    useType: UseType;
}

/** Represents an Item. */
export class Item implements IItem {

    /**
     * Constructs a new Item.
     * @param [p] Properties to set
     */
    constructor(p?: IItem);

    /** Item id. */
    public id: (number|Long);

    /** Item name. */
    public name: string;

    /** Item count. */
    public count: number;

    /** Item bagType. */
    public bagType: string;

    /** Item desc. */
    public desc: string;

    /** Item overdueDate. */
    public overdueDate: string;

    /** Item altasPath. */
    public altasPath: string;

    /** Item spriteName. */
    public spriteName: string;

    /** Item useType. */
    public useType: UseType;

    /**
     * Creates a new Item instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Item instance
     */
    public static create(properties?: IItem): Item;

    /**
     * Encodes the specified Item message. Does not implicitly {@link Item.verify|verify} messages.
     * @param m Item message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IItem, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Item message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Item;
}

/** Properties of an ItemStruct. */
export interface IItemStruct {

    /** ItemStruct itemTemplateId */
    itemTemplateId: number;

    /** ItemStruct itemCount */
    itemCount: number;
}

/** Represents an ItemStruct. */
export class ItemStruct implements IItemStruct {

    /**
     * Constructs a new ItemStruct.
     * @param [p] Properties to set
     */
    constructor(p?: IItemStruct);

    /** ItemStruct itemTemplateId. */
    public itemTemplateId: number;

    /** ItemStruct itemCount. */
    public itemCount: number;

    /**
     * Creates a new ItemStruct instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ItemStruct instance
     */
    public static create(properties?: IItemStruct): ItemStruct;

    /**
     * Encodes the specified ItemStruct message. Does not implicitly {@link ItemStruct.verify|verify} messages.
     * @param m ItemStruct message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IItemStruct, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemStruct message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ItemStruct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemStruct;
}

/** Properties of a BagModifyItem. */
export interface IBagModifyItem {

    /** BagModifyItem itemId */
    itemId: (number|Long);

    /** BagModifyItem itemCount */
    itemCount: number;

    /** BagModifyItem overdueDate */
    overdueDate?: (string|null);
}

/** Represents a BagModifyItem. */
export class BagModifyItem implements IBagModifyItem {

    /**
     * Constructs a new BagModifyItem.
     * @param [p] Properties to set
     */
    constructor(p?: IBagModifyItem);

    /** BagModifyItem itemId. */
    public itemId: (number|Long);

    /** BagModifyItem itemCount. */
    public itemCount: number;

    /** BagModifyItem overdueDate. */
    public overdueDate: string;

    /**
     * Creates a new BagModifyItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BagModifyItem instance
     */
    public static create(properties?: IBagModifyItem): BagModifyItem;

    /**
     * Encodes the specified BagModifyItem message. Does not implicitly {@link BagModifyItem.verify|verify} messages.
     * @param m BagModifyItem message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBagModifyItem, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BagModifyItem message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BagModifyItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BagModifyItem;
}

/** Properties of a LoginPushItemsRes. */
export interface ILoginPushItemsRes {

    /** LoginPushItemsRes bagTypeList */
    bagTypeList?: (string[]|null);

    /** LoginPushItemsRes itemList */
    itemList?: (IItem[]|null);
}

/** Represents a LoginPushItemsRes. */
export class LoginPushItemsRes implements ILoginPushItemsRes {

    /**
     * Constructs a new LoginPushItemsRes.
     * @param [p] Properties to set
     */
    constructor(p?: ILoginPushItemsRes);

    /** LoginPushItemsRes bagTypeList. */
    public bagTypeList: string[];

    /** LoginPushItemsRes itemList. */
    public itemList: IItem[];

    /**
     * Creates a new LoginPushItemsRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginPushItemsRes instance
     */
    public static create(properties?: ILoginPushItemsRes): LoginPushItemsRes;

    /**
     * Encodes the specified LoginPushItemsRes message. Does not implicitly {@link LoginPushItemsRes.verify|verify} messages.
     * @param m LoginPushItemsRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILoginPushItemsRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginPushItemsRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LoginPushItemsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LoginPushItemsRes;
}

/** Properties of an UpdateItemsRes. */
export interface IUpdateItemsRes {

    /** UpdateItemsRes addList */
    addList?: (IItem[]|null);

    /** UpdateItemsRes updateList */
    updateList?: (IBagModifyItem[]|null);

    /** UpdateItemsRes removeList */
    removeList?: ((number|Long)[]|null);
}

/** Represents an UpdateItemsRes. */
export class UpdateItemsRes implements IUpdateItemsRes {

    /**
     * Constructs a new UpdateItemsRes.
     * @param [p] Properties to set
     */
    constructor(p?: IUpdateItemsRes);

    /** UpdateItemsRes addList. */
    public addList: IItem[];

    /** UpdateItemsRes updateList. */
    public updateList: IBagModifyItem[];

    /** UpdateItemsRes removeList. */
    public removeList: (number|Long)[];

    /**
     * Creates a new UpdateItemsRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateItemsRes instance
     */
    public static create(properties?: IUpdateItemsRes): UpdateItemsRes;

    /**
     * Encodes the specified UpdateItemsRes message. Does not implicitly {@link UpdateItemsRes.verify|verify} messages.
     * @param m UpdateItemsRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUpdateItemsRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateItemsRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UpdateItemsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UpdateItemsRes;
}

/** Properties of a UseItemReq. */
export interface IUseItemReq {

    /** UseItemReq itemId */
    itemId: (number|Long);

    /** UseItemReq count */
    count: number;

    /** UseItemReq param */
    param?: (string|null);
}

/** Represents a UseItemReq. */
export class UseItemReq implements IUseItemReq {

    /**
     * Constructs a new UseItemReq.
     * @param [p] Properties to set
     */
    constructor(p?: IUseItemReq);

    /** UseItemReq itemId. */
    public itemId: (number|Long);

    /** UseItemReq count. */
    public count: number;

    /** UseItemReq param. */
    public param: string;

    /**
     * Creates a new UseItemReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UseItemReq instance
     */
    public static create(properties?: IUseItemReq): UseItemReq;

    /**
     * Encodes the specified UseItemReq message. Does not implicitly {@link UseItemReq.verify|verify} messages.
     * @param m UseItemReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUseItemReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UseItemReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UseItemReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UseItemReq;
}

/** Properties of a UseItemRes. */
export interface IUseItemRes {

    /** UseItemRes itemId */
    itemId: (number|Long);

    /** UseItemRes success */
    success: boolean;

    /** UseItemRes tips */
    tips: string;

    /** UseItemRes addList */
    addList?: (IItem[]|null);
}

/** Represents a UseItemRes. */
export class UseItemRes implements IUseItemRes {

    /**
     * Constructs a new UseItemRes.
     * @param [p] Properties to set
     */
    constructor(p?: IUseItemRes);

    /** UseItemRes itemId. */
    public itemId: (number|Long);

    /** UseItemRes success. */
    public success: boolean;

    /** UseItemRes tips. */
    public tips: string;

    /** UseItemRes addList. */
    public addList: IItem[];

    /**
     * Creates a new UseItemRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UseItemRes instance
     */
    public static create(properties?: IUseItemRes): UseItemRes;

    /**
     * Encodes the specified UseItemRes message. Does not implicitly {@link UseItemRes.verify|verify} messages.
     * @param m UseItemRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUseItemRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UseItemRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UseItemRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UseItemRes;
}

/** Properties of an ItemTemplateInfo. */
export interface IItemTemplateInfo {

    /** ItemTemplateInfo name */
    name: string;

    /** ItemTemplateInfo count */
    count: number;

    /** ItemTemplateInfo desc */
    desc: string;

    /** ItemTemplateInfo overdueDate */
    overdueDate?: (string|null);

    /** ItemTemplateInfo altasPath */
    altasPath: string;

    /** ItemTemplateInfo spriteName */
    spriteName: string;
}

/** Represents an ItemTemplateInfo. */
export class ItemTemplateInfo implements IItemTemplateInfo {

    /**
     * Constructs a new ItemTemplateInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IItemTemplateInfo);

    /** ItemTemplateInfo name. */
    public name: string;

    /** ItemTemplateInfo count. */
    public count: number;

    /** ItemTemplateInfo desc. */
    public desc: string;

    /** ItemTemplateInfo overdueDate. */
    public overdueDate: string;

    /** ItemTemplateInfo altasPath. */
    public altasPath: string;

    /** ItemTemplateInfo spriteName. */
    public spriteName: string;

    /**
     * Creates a new ItemTemplateInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ItemTemplateInfo instance
     */
    public static create(properties?: IItemTemplateInfo): ItemTemplateInfo;

    /**
     * Encodes the specified ItemTemplateInfo message. Does not implicitly {@link ItemTemplateInfo.verify|verify} messages.
     * @param m ItemTemplateInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IItemTemplateInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemTemplateInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ItemTemplateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemTemplateInfo;
}

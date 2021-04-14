/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Item || ($protobuf.roots.Item = {});

/**
 * UseType enum.
 * @exports UseType
 * @enum {string}
 * @property {number} UseMulti=1 UseMulti value
 * @property {number} UseSingle=2 UseSingle value
 * @property {number} DisabledUse=3 DisabledUse value
 */
$root.UseType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "UseMulti"] = 1;
    values[valuesById[2] = "UseSingle"] = 2;
    values[valuesById[3] = "DisabledUse"] = 3;
    return values;
})();

$root.Item = (function() {

    /**
     * Properties of an Item.
     * @exports IItem
     * @interface IItem
     * @property {number|Long} id Item id
     * @property {string} name Item name
     * @property {number} count Item count
     * @property {string} bagType Item bagType
     * @property {string} desc Item desc
     * @property {string|null} [overdueDate] Item overdueDate
     * @property {string} altasPath Item altasPath
     * @property {string} spriteName Item spriteName
     * @property {UseType} useType Item useType
     */

    /**
     * Constructs a new Item.
     * @exports Item
     * @classdesc Represents an Item.
     * @implements IItem
     * @constructor
     * @param {IItem=} [p] Properties to set
     */
    function Item(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Item id.
     * @member {number|Long} id
     * @memberof Item
     * @instance
     */
    Item.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Item name.
     * @member {string} name
     * @memberof Item
     * @instance
     */
    Item.prototype.name = "";

    /**
     * Item count.
     * @member {number} count
     * @memberof Item
     * @instance
     */
    Item.prototype.count = 0;

    /**
     * Item bagType.
     * @member {string} bagType
     * @memberof Item
     * @instance
     */
    Item.prototype.bagType = "";

    /**
     * Item desc.
     * @member {string} desc
     * @memberof Item
     * @instance
     */
    Item.prototype.desc = "";

    /**
     * Item overdueDate.
     * @member {string} overdueDate
     * @memberof Item
     * @instance
     */
    Item.prototype.overdueDate = "";

    /**
     * Item altasPath.
     * @member {string} altasPath
     * @memberof Item
     * @instance
     */
    Item.prototype.altasPath = "";

    /**
     * Item spriteName.
     * @member {string} spriteName
     * @memberof Item
     * @instance
     */
    Item.prototype.spriteName = "";

    /**
     * Item useType.
     * @member {UseType} useType
     * @memberof Item
     * @instance
     */
    Item.prototype.useType = 1;

    /**
     * Creates a new Item instance using the specified properties.
     * @function create
     * @memberof Item
     * @static
     * @param {IItem=} [properties] Properties to set
     * @returns {Item} Item instance
     */
    Item.create = function create(properties) {
        return new Item(properties);
    };

    /**
     * Encodes the specified Item message. Does not implicitly {@link Item.verify|verify} messages.
     * @function encode
     * @memberof Item
     * @static
     * @param {IItem} m Item message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Item.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.id);
        w.uint32(18).string(m.name);
        w.uint32(24).int32(m.count);
        w.uint32(34).string(m.bagType);
        w.uint32(42).string(m.desc);
        if (m.overdueDate != null && m.hasOwnProperty("overdueDate"))
            w.uint32(50).string(m.overdueDate);
        w.uint32(58).string(m.altasPath);
        w.uint32(66).string(m.spriteName);
        w.uint32(72).int32(m.useType);
        return w;
    };

    /**
     * Decodes an Item message from the specified reader or buffer.
     * @function decode
     * @memberof Item
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Item} Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Item.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Item();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int64();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.count = r.int32();
                break;
            case 4:
                m.bagType = r.string();
                break;
            case 5:
                m.desc = r.string();
                break;
            case 6:
                m.overdueDate = r.string();
                break;
            case 7:
                m.altasPath = r.string();
                break;
            case 8:
                m.spriteName = r.string();
                break;
            case 9:
                m.useType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        if (!m.hasOwnProperty("bagType"))
            throw $util.ProtocolError("missing required 'bagType'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        if (!m.hasOwnProperty("altasPath"))
            throw $util.ProtocolError("missing required 'altasPath'", { instance: m });
        if (!m.hasOwnProperty("spriteName"))
            throw $util.ProtocolError("missing required 'spriteName'", { instance: m });
        if (!m.hasOwnProperty("useType"))
            throw $util.ProtocolError("missing required 'useType'", { instance: m });
        return m;
    };

    return Item;
})();

$root.ItemStruct = (function() {

    /**
     * Properties of an ItemStruct.
     * @exports IItemStruct
     * @interface IItemStruct
     * @property {number} itemTemplateId ItemStruct itemTemplateId
     * @property {number} itemCount ItemStruct itemCount
     */

    /**
     * Constructs a new ItemStruct.
     * @exports ItemStruct
     * @classdesc Represents an ItemStruct.
     * @implements IItemStruct
     * @constructor
     * @param {IItemStruct=} [p] Properties to set
     */
    function ItemStruct(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ItemStruct itemTemplateId.
     * @member {number} itemTemplateId
     * @memberof ItemStruct
     * @instance
     */
    ItemStruct.prototype.itemTemplateId = 0;

    /**
     * ItemStruct itemCount.
     * @member {number} itemCount
     * @memberof ItemStruct
     * @instance
     */
    ItemStruct.prototype.itemCount = 0;

    /**
     * Creates a new ItemStruct instance using the specified properties.
     * @function create
     * @memberof ItemStruct
     * @static
     * @param {IItemStruct=} [properties] Properties to set
     * @returns {ItemStruct} ItemStruct instance
     */
    ItemStruct.create = function create(properties) {
        return new ItemStruct(properties);
    };

    /**
     * Encodes the specified ItemStruct message. Does not implicitly {@link ItemStruct.verify|verify} messages.
     * @function encode
     * @memberof ItemStruct
     * @static
     * @param {IItemStruct} m ItemStruct message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemStruct.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.itemTemplateId);
        w.uint32(16).int32(m.itemCount);
        return w;
    };

    /**
     * Decodes an ItemStruct message from the specified reader or buffer.
     * @function decode
     * @memberof ItemStruct
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemStruct} ItemStruct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemStruct.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemStruct();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemTemplateId = r.int32();
                break;
            case 2:
                m.itemCount = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("itemTemplateId"))
            throw $util.ProtocolError("missing required 'itemTemplateId'", { instance: m });
        if (!m.hasOwnProperty("itemCount"))
            throw $util.ProtocolError("missing required 'itemCount'", { instance: m });
        return m;
    };

    return ItemStruct;
})();

$root.BagModifyItem = (function() {

    /**
     * Properties of a BagModifyItem.
     * @exports IBagModifyItem
     * @interface IBagModifyItem
     * @property {number|Long} itemId BagModifyItem itemId
     * @property {number} itemCount BagModifyItem itemCount
     * @property {string|null} [overdueDate] BagModifyItem overdueDate
     */

    /**
     * Constructs a new BagModifyItem.
     * @exports BagModifyItem
     * @classdesc Represents a BagModifyItem.
     * @implements IBagModifyItem
     * @constructor
     * @param {IBagModifyItem=} [p] Properties to set
     */
    function BagModifyItem(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BagModifyItem itemId.
     * @member {number|Long} itemId
     * @memberof BagModifyItem
     * @instance
     */
    BagModifyItem.prototype.itemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BagModifyItem itemCount.
     * @member {number} itemCount
     * @memberof BagModifyItem
     * @instance
     */
    BagModifyItem.prototype.itemCount = 0;

    /**
     * BagModifyItem overdueDate.
     * @member {string} overdueDate
     * @memberof BagModifyItem
     * @instance
     */
    BagModifyItem.prototype.overdueDate = "";

    /**
     * Creates a new BagModifyItem instance using the specified properties.
     * @function create
     * @memberof BagModifyItem
     * @static
     * @param {IBagModifyItem=} [properties] Properties to set
     * @returns {BagModifyItem} BagModifyItem instance
     */
    BagModifyItem.create = function create(properties) {
        return new BagModifyItem(properties);
    };

    /**
     * Encodes the specified BagModifyItem message. Does not implicitly {@link BagModifyItem.verify|verify} messages.
     * @function encode
     * @memberof BagModifyItem
     * @static
     * @param {IBagModifyItem} m BagModifyItem message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BagModifyItem.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.itemId);
        w.uint32(16).int32(m.itemCount);
        if (m.overdueDate != null && m.hasOwnProperty("overdueDate"))
            w.uint32(26).string(m.overdueDate);
        return w;
    };

    /**
     * Decodes a BagModifyItem message from the specified reader or buffer.
     * @function decode
     * @memberof BagModifyItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BagModifyItem} BagModifyItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BagModifyItem.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BagModifyItem();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.int64();
                break;
            case 2:
                m.itemCount = r.int32();
                break;
            case 3:
                m.overdueDate = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("itemId"))
            throw $util.ProtocolError("missing required 'itemId'", { instance: m });
        if (!m.hasOwnProperty("itemCount"))
            throw $util.ProtocolError("missing required 'itemCount'", { instance: m });
        return m;
    };

    return BagModifyItem;
})();

$root.LoginPushItemsRes = (function() {

    /**
     * Properties of a LoginPushItemsRes.
     * @exports ILoginPushItemsRes
     * @interface ILoginPushItemsRes
     * @property {Array.<string>|null} [bagTypeList] LoginPushItemsRes bagTypeList
     * @property {Array.<IItem>|null} [itemList] LoginPushItemsRes itemList
     */

    /**
     * Constructs a new LoginPushItemsRes.
     * @exports LoginPushItemsRes
     * @classdesc Represents a LoginPushItemsRes.
     * @implements ILoginPushItemsRes
     * @constructor
     * @param {ILoginPushItemsRes=} [p] Properties to set
     */
    function LoginPushItemsRes(p) {
        this.bagTypeList = [];
        this.itemList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginPushItemsRes bagTypeList.
     * @member {Array.<string>} bagTypeList
     * @memberof LoginPushItemsRes
     * @instance
     */
    LoginPushItemsRes.prototype.bagTypeList = $util.emptyArray;

    /**
     * LoginPushItemsRes itemList.
     * @member {Array.<IItem>} itemList
     * @memberof LoginPushItemsRes
     * @instance
     */
    LoginPushItemsRes.prototype.itemList = $util.emptyArray;

    /**
     * Creates a new LoginPushItemsRes instance using the specified properties.
     * @function create
     * @memberof LoginPushItemsRes
     * @static
     * @param {ILoginPushItemsRes=} [properties] Properties to set
     * @returns {LoginPushItemsRes} LoginPushItemsRes instance
     */
    LoginPushItemsRes.create = function create(properties) {
        return new LoginPushItemsRes(properties);
    };

    /**
     * Encodes the specified LoginPushItemsRes message. Does not implicitly {@link LoginPushItemsRes.verify|verify} messages.
     * @function encode
     * @memberof LoginPushItemsRes
     * @static
     * @param {ILoginPushItemsRes} m LoginPushItemsRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginPushItemsRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bagTypeList != null && m.bagTypeList.length) {
            for (var i = 0; i < m.bagTypeList.length; ++i)
                w.uint32(10).string(m.bagTypeList[i]);
        }
        if (m.itemList != null && m.itemList.length) {
            for (var i = 0; i < m.itemList.length; ++i)
                $root.Item.encode(m.itemList[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a LoginPushItemsRes message from the specified reader or buffer.
     * @function decode
     * @memberof LoginPushItemsRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginPushItemsRes} LoginPushItemsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginPushItemsRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPushItemsRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.bagTypeList && m.bagTypeList.length))
                    m.bagTypeList = [];
                m.bagTypeList.push(r.string());
                break;
            case 2:
                if (!(m.itemList && m.itemList.length))
                    m.itemList = [];
                m.itemList.push($root.Item.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return LoginPushItemsRes;
})();

$root.UpdateItemsRes = (function() {

    /**
     * Properties of an UpdateItemsRes.
     * @exports IUpdateItemsRes
     * @interface IUpdateItemsRes
     * @property {Array.<IItem>|null} [addList] UpdateItemsRes addList
     * @property {Array.<IBagModifyItem>|null} [updateList] UpdateItemsRes updateList
     * @property {Array.<number|Long>|null} [removeList] UpdateItemsRes removeList
     */

    /**
     * Constructs a new UpdateItemsRes.
     * @exports UpdateItemsRes
     * @classdesc Represents an UpdateItemsRes.
     * @implements IUpdateItemsRes
     * @constructor
     * @param {IUpdateItemsRes=} [p] Properties to set
     */
    function UpdateItemsRes(p) {
        this.addList = [];
        this.updateList = [];
        this.removeList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UpdateItemsRes addList.
     * @member {Array.<IItem>} addList
     * @memberof UpdateItemsRes
     * @instance
     */
    UpdateItemsRes.prototype.addList = $util.emptyArray;

    /**
     * UpdateItemsRes updateList.
     * @member {Array.<IBagModifyItem>} updateList
     * @memberof UpdateItemsRes
     * @instance
     */
    UpdateItemsRes.prototype.updateList = $util.emptyArray;

    /**
     * UpdateItemsRes removeList.
     * @member {Array.<number|Long>} removeList
     * @memberof UpdateItemsRes
     * @instance
     */
    UpdateItemsRes.prototype.removeList = $util.emptyArray;

    /**
     * Creates a new UpdateItemsRes instance using the specified properties.
     * @function create
     * @memberof UpdateItemsRes
     * @static
     * @param {IUpdateItemsRes=} [properties] Properties to set
     * @returns {UpdateItemsRes} UpdateItemsRes instance
     */
    UpdateItemsRes.create = function create(properties) {
        return new UpdateItemsRes(properties);
    };

    /**
     * Encodes the specified UpdateItemsRes message. Does not implicitly {@link UpdateItemsRes.verify|verify} messages.
     * @function encode
     * @memberof UpdateItemsRes
     * @static
     * @param {IUpdateItemsRes} m UpdateItemsRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateItemsRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.addList != null && m.addList.length) {
            for (var i = 0; i < m.addList.length; ++i)
                $root.Item.encode(m.addList[i], w.uint32(10).fork()).ldelim();
        }
        if (m.updateList != null && m.updateList.length) {
            for (var i = 0; i < m.updateList.length; ++i)
                $root.BagModifyItem.encode(m.updateList[i], w.uint32(18).fork()).ldelim();
        }
        if (m.removeList != null && m.removeList.length) {
            for (var i = 0; i < m.removeList.length; ++i)
                w.uint32(24).int64(m.removeList[i]);
        }
        return w;
    };

    /**
     * Decodes an UpdateItemsRes message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateItemsRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UpdateItemsRes} UpdateItemsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateItemsRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UpdateItemsRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.addList && m.addList.length))
                    m.addList = [];
                m.addList.push($root.Item.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.updateList && m.updateList.length))
                    m.updateList = [];
                m.updateList.push($root.BagModifyItem.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.removeList && m.removeList.length))
                    m.removeList = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.removeList.push(r.int64());
                } else
                    m.removeList.push(r.int64());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return UpdateItemsRes;
})();

$root.UseItemReq = (function() {

    /**
     * Properties of a UseItemReq.
     * @exports IUseItemReq
     * @interface IUseItemReq
     * @property {number|Long} itemId UseItemReq itemId
     * @property {number} count UseItemReq count
     * @property {string|null} [param] UseItemReq param
     */

    /**
     * Constructs a new UseItemReq.
     * @exports UseItemReq
     * @classdesc Represents a UseItemReq.
     * @implements IUseItemReq
     * @constructor
     * @param {IUseItemReq=} [p] Properties to set
     */
    function UseItemReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UseItemReq itemId.
     * @member {number|Long} itemId
     * @memberof UseItemReq
     * @instance
     */
    UseItemReq.prototype.itemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UseItemReq count.
     * @member {number} count
     * @memberof UseItemReq
     * @instance
     */
    UseItemReq.prototype.count = 0;

    /**
     * UseItemReq param.
     * @member {string} param
     * @memberof UseItemReq
     * @instance
     */
    UseItemReq.prototype.param = "";

    /**
     * Creates a new UseItemReq instance using the specified properties.
     * @function create
     * @memberof UseItemReq
     * @static
     * @param {IUseItemReq=} [properties] Properties to set
     * @returns {UseItemReq} UseItemReq instance
     */
    UseItemReq.create = function create(properties) {
        return new UseItemReq(properties);
    };

    /**
     * Encodes the specified UseItemReq message. Does not implicitly {@link UseItemReq.verify|verify} messages.
     * @function encode
     * @memberof UseItemReq
     * @static
     * @param {IUseItemReq} m UseItemReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseItemReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.itemId);
        w.uint32(16).int32(m.count);
        if (m.param != null && m.hasOwnProperty("param"))
            w.uint32(26).string(m.param);
        return w;
    };

    /**
     * Decodes a UseItemReq message from the specified reader or buffer.
     * @function decode
     * @memberof UseItemReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UseItemReq} UseItemReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseItemReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UseItemReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.int64();
                break;
            case 2:
                m.count = r.int32();
                break;
            case 3:
                m.param = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("itemId"))
            throw $util.ProtocolError("missing required 'itemId'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        return m;
    };

    return UseItemReq;
})();

$root.UseItemRes = (function() {

    /**
     * Properties of a UseItemRes.
     * @exports IUseItemRes
     * @interface IUseItemRes
     * @property {number|Long} itemId UseItemRes itemId
     * @property {boolean} success UseItemRes success
     * @property {string} tips UseItemRes tips
     * @property {Array.<IItem>|null} [addList] UseItemRes addList
     */

    /**
     * Constructs a new UseItemRes.
     * @exports UseItemRes
     * @classdesc Represents a UseItemRes.
     * @implements IUseItemRes
     * @constructor
     * @param {IUseItemRes=} [p] Properties to set
     */
    function UseItemRes(p) {
        this.addList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UseItemRes itemId.
     * @member {number|Long} itemId
     * @memberof UseItemRes
     * @instance
     */
    UseItemRes.prototype.itemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UseItemRes success.
     * @member {boolean} success
     * @memberof UseItemRes
     * @instance
     */
    UseItemRes.prototype.success = false;

    /**
     * UseItemRes tips.
     * @member {string} tips
     * @memberof UseItemRes
     * @instance
     */
    UseItemRes.prototype.tips = "";

    /**
     * UseItemRes addList.
     * @member {Array.<IItem>} addList
     * @memberof UseItemRes
     * @instance
     */
    UseItemRes.prototype.addList = $util.emptyArray;

    /**
     * Creates a new UseItemRes instance using the specified properties.
     * @function create
     * @memberof UseItemRes
     * @static
     * @param {IUseItemRes=} [properties] Properties to set
     * @returns {UseItemRes} UseItemRes instance
     */
    UseItemRes.create = function create(properties) {
        return new UseItemRes(properties);
    };

    /**
     * Encodes the specified UseItemRes message. Does not implicitly {@link UseItemRes.verify|verify} messages.
     * @function encode
     * @memberof UseItemRes
     * @static
     * @param {IUseItemRes} m UseItemRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseItemRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.itemId);
        w.uint32(16).bool(m.success);
        w.uint32(26).string(m.tips);
        if (m.addList != null && m.addList.length) {
            for (var i = 0; i < m.addList.length; ++i)
                $root.Item.encode(m.addList[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a UseItemRes message from the specified reader or buffer.
     * @function decode
     * @memberof UseItemRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UseItemRes} UseItemRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseItemRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UseItemRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.int64();
                break;
            case 2:
                m.success = r.bool();
                break;
            case 3:
                m.tips = r.string();
                break;
            case 4:
                if (!(m.addList && m.addList.length))
                    m.addList = [];
                m.addList.push($root.Item.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("itemId"))
            throw $util.ProtocolError("missing required 'itemId'", { instance: m });
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        return m;
    };

    return UseItemRes;
})();

$root.ItemTemplateInfo = (function() {

    /**
     * Properties of an ItemTemplateInfo.
     * @exports IItemTemplateInfo
     * @interface IItemTemplateInfo
     * @property {string} name ItemTemplateInfo name
     * @property {number} count ItemTemplateInfo count
     * @property {string} desc ItemTemplateInfo desc
     * @property {string|null} [overdueDate] ItemTemplateInfo overdueDate
     * @property {string} altasPath ItemTemplateInfo altasPath
     * @property {string} spriteName ItemTemplateInfo spriteName
     */

    /**
     * Constructs a new ItemTemplateInfo.
     * @exports ItemTemplateInfo
     * @classdesc Represents an ItemTemplateInfo.
     * @implements IItemTemplateInfo
     * @constructor
     * @param {IItemTemplateInfo=} [p] Properties to set
     */
    function ItemTemplateInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ItemTemplateInfo name.
     * @member {string} name
     * @memberof ItemTemplateInfo
     * @instance
     */
    ItemTemplateInfo.prototype.name = "";

    /**
     * ItemTemplateInfo count.
     * @member {number} count
     * @memberof ItemTemplateInfo
     * @instance
     */
    ItemTemplateInfo.prototype.count = 0;

    /**
     * ItemTemplateInfo desc.
     * @member {string} desc
     * @memberof ItemTemplateInfo
     * @instance
     */
    ItemTemplateInfo.prototype.desc = "";

    /**
     * ItemTemplateInfo overdueDate.
     * @member {string} overdueDate
     * @memberof ItemTemplateInfo
     * @instance
     */
    ItemTemplateInfo.prototype.overdueDate = "";

    /**
     * ItemTemplateInfo altasPath.
     * @member {string} altasPath
     * @memberof ItemTemplateInfo
     * @instance
     */
    ItemTemplateInfo.prototype.altasPath = "";

    /**
     * ItemTemplateInfo spriteName.
     * @member {string} spriteName
     * @memberof ItemTemplateInfo
     * @instance
     */
    ItemTemplateInfo.prototype.spriteName = "";

    /**
     * Creates a new ItemTemplateInfo instance using the specified properties.
     * @function create
     * @memberof ItemTemplateInfo
     * @static
     * @param {IItemTemplateInfo=} [properties] Properties to set
     * @returns {ItemTemplateInfo} ItemTemplateInfo instance
     */
    ItemTemplateInfo.create = function create(properties) {
        return new ItemTemplateInfo(properties);
    };

    /**
     * Encodes the specified ItemTemplateInfo message. Does not implicitly {@link ItemTemplateInfo.verify|verify} messages.
     * @function encode
     * @memberof ItemTemplateInfo
     * @static
     * @param {IItemTemplateInfo} m ItemTemplateInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemTemplateInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        w.uint32(16).int32(m.count);
        w.uint32(26).string(m.desc);
        if (m.overdueDate != null && m.hasOwnProperty("overdueDate"))
            w.uint32(34).string(m.overdueDate);
        w.uint32(42).string(m.altasPath);
        w.uint32(50).string(m.spriteName);
        return w;
    };

    /**
     * Decodes an ItemTemplateInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ItemTemplateInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemTemplateInfo} ItemTemplateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemTemplateInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemTemplateInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.name = r.string();
                break;
            case 2:
                m.count = r.int32();
                break;
            case 3:
                m.desc = r.string();
                break;
            case 4:
                m.overdueDate = r.string();
                break;
            case 5:
                m.altasPath = r.string();
                break;
            case 6:
                m.spriteName = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        if (!m.hasOwnProperty("altasPath"))
            throw $util.ProtocolError("missing required 'altasPath'", { instance: m });
        if (!m.hasOwnProperty("spriteName"))
            throw $util.ProtocolError("missing required 'spriteName'", { instance: m });
        return m;
    };

    return ItemTemplateInfo;
})();

module.exports = $root;

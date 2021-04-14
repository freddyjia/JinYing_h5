/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Mail || ($protobuf.roots.Mail = {});

/**
 * MailType enum.
 * @exports MailType
 * @enum {string}
 * @property {number} SystemMail=1 SystemMail value
 * @property {number} FriendMail=2 FriendMail value
 */
$root.MailType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "SystemMail"] = 1;
    values[valuesById[2] = "FriendMail"] = 2;
    return values;
})();

$root.AttachmentItem = (function() {

    /**
     * Properties of an AttachmentItem.
     * @exports IAttachmentItem
     * @interface IAttachmentItem
     * @property {string} name AttachmentItem name
     * @property {string} altasPath AttachmentItem altasPath
     * @property {string} spriteName AttachmentItem spriteName
     * @property {number} count AttachmentItem count
     */

    /**
     * Constructs a new AttachmentItem.
     * @exports AttachmentItem
     * @classdesc Represents an AttachmentItem.
     * @implements IAttachmentItem
     * @constructor
     * @param {IAttachmentItem=} [p] Properties to set
     */
    function AttachmentItem(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AttachmentItem name.
     * @member {string} name
     * @memberof AttachmentItem
     * @instance
     */
    AttachmentItem.prototype.name = "";

    /**
     * AttachmentItem altasPath.
     * @member {string} altasPath
     * @memberof AttachmentItem
     * @instance
     */
    AttachmentItem.prototype.altasPath = "";

    /**
     * AttachmentItem spriteName.
     * @member {string} spriteName
     * @memberof AttachmentItem
     * @instance
     */
    AttachmentItem.prototype.spriteName = "";

    /**
     * AttachmentItem count.
     * @member {number} count
     * @memberof AttachmentItem
     * @instance
     */
    AttachmentItem.prototype.count = 0;

    /**
     * Creates a new AttachmentItem instance using the specified properties.
     * @function create
     * @memberof AttachmentItem
     * @static
     * @param {IAttachmentItem=} [properties] Properties to set
     * @returns {AttachmentItem} AttachmentItem instance
     */
    AttachmentItem.create = function create(properties) {
        return new AttachmentItem(properties);
    };

    /**
     * Encodes the specified AttachmentItem message. Does not implicitly {@link AttachmentItem.verify|verify} messages.
     * @function encode
     * @memberof AttachmentItem
     * @static
     * @param {IAttachmentItem} m AttachmentItem message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttachmentItem.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        w.uint32(18).string(m.altasPath);
        w.uint32(26).string(m.spriteName);
        w.uint32(32).int32(m.count);
        return w;
    };

    /**
     * Decodes an AttachmentItem message from the specified reader or buffer.
     * @function decode
     * @memberof AttachmentItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AttachmentItem} AttachmentItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttachmentItem.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AttachmentItem();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.name = r.string();
                break;
            case 2:
                m.altasPath = r.string();
                break;
            case 3:
                m.spriteName = r.string();
                break;
            case 4:
                m.count = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("altasPath"))
            throw $util.ProtocolError("missing required 'altasPath'", { instance: m });
        if (!m.hasOwnProperty("spriteName"))
            throw $util.ProtocolError("missing required 'spriteName'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        return m;
    };

    return AttachmentItem;
})();

$root.AttachmentStruct = (function() {

    /**
     * Properties of an AttachmentStruct.
     * @exports IAttachmentStruct
     * @interface IAttachmentStruct
     * @property {Array.<ICurrencyStruct>|null} [currency] AttachmentStruct currency
     * @property {Array.<IAttachmentItem>|null} [item] AttachmentStruct item
     */

    /**
     * Constructs a new AttachmentStruct.
     * @exports AttachmentStruct
     * @classdesc Represents an AttachmentStruct.
     * @implements IAttachmentStruct
     * @constructor
     * @param {IAttachmentStruct=} [p] Properties to set
     */
    function AttachmentStruct(p) {
        this.currency = [];
        this.item = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AttachmentStruct currency.
     * @member {Array.<ICurrencyStruct>} currency
     * @memberof AttachmentStruct
     * @instance
     */
    AttachmentStruct.prototype.currency = $util.emptyArray;

    /**
     * AttachmentStruct item.
     * @member {Array.<IAttachmentItem>} item
     * @memberof AttachmentStruct
     * @instance
     */
    AttachmentStruct.prototype.item = $util.emptyArray;

    /**
     * Creates a new AttachmentStruct instance using the specified properties.
     * @function create
     * @memberof AttachmentStruct
     * @static
     * @param {IAttachmentStruct=} [properties] Properties to set
     * @returns {AttachmentStruct} AttachmentStruct instance
     */
    AttachmentStruct.create = function create(properties) {
        return new AttachmentStruct(properties);
    };

    /**
     * Encodes the specified AttachmentStruct message. Does not implicitly {@link AttachmentStruct.verify|verify} messages.
     * @function encode
     * @memberof AttachmentStruct
     * @static
     * @param {IAttachmentStruct} m AttachmentStruct message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttachmentStruct.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.currency != null && m.currency.length) {
            for (var i = 0; i < m.currency.length; ++i)
                $root.CurrencyStruct.encode(m.currency[i], w.uint32(10).fork()).ldelim();
        }
        if (m.item != null && m.item.length) {
            for (var i = 0; i < m.item.length; ++i)
                $root.AttachmentItem.encode(m.item[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an AttachmentStruct message from the specified reader or buffer.
     * @function decode
     * @memberof AttachmentStruct
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AttachmentStruct} AttachmentStruct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttachmentStruct.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AttachmentStruct();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.currency && m.currency.length))
                    m.currency = [];
                m.currency.push($root.CurrencyStruct.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.item && m.item.length))
                    m.item = [];
                m.item.push($root.AttachmentItem.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return AttachmentStruct;
})();

$root.Mail = (function() {

    /**
     * Properties of a Mail.
     * @exports IMail
     * @interface IMail
     * @property {number|Long} id Mail id
     * @property {string} title Mail title
     * @property {string} content Mail content
     * @property {MailType} mailType Mail mailType
     * @property {boolean} isRead Mail isRead
     * @property {number|Long} createTime Mail createTime
     * @property {boolean|null} [isGetAttachment] Mail isGetAttachment
     * @property {IAttachmentStruct|null} [attachment] Mail attachment
     * @property {number|null} [headId] Mail headId
     * @property {string|null} [headImageUrl] Mail headImageUrl
     */

    /**
     * Constructs a new Mail.
     * @exports Mail
     * @classdesc Represents a Mail.
     * @implements IMail
     * @constructor
     * @param {IMail=} [p] Properties to set
     */
    function Mail(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Mail id.
     * @member {number|Long} id
     * @memberof Mail
     * @instance
     */
    Mail.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Mail title.
     * @member {string} title
     * @memberof Mail
     * @instance
     */
    Mail.prototype.title = "";

    /**
     * Mail content.
     * @member {string} content
     * @memberof Mail
     * @instance
     */
    Mail.prototype.content = "";

    /**
     * Mail mailType.
     * @member {MailType} mailType
     * @memberof Mail
     * @instance
     */
    Mail.prototype.mailType = 1;

    /**
     * Mail isRead.
     * @member {boolean} isRead
     * @memberof Mail
     * @instance
     */
    Mail.prototype.isRead = false;

    /**
     * Mail createTime.
     * @member {number|Long} createTime
     * @memberof Mail
     * @instance
     */
    Mail.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Mail isGetAttachment.
     * @member {boolean} isGetAttachment
     * @memberof Mail
     * @instance
     */
    Mail.prototype.isGetAttachment = false;

    /**
     * Mail attachment.
     * @member {IAttachmentStruct|null|undefined} attachment
     * @memberof Mail
     * @instance
     */
    Mail.prototype.attachment = null;

    /**
     * Mail headId.
     * @member {number} headId
     * @memberof Mail
     * @instance
     */
    Mail.prototype.headId = 0;

    /**
     * Mail headImageUrl.
     * @member {string} headImageUrl
     * @memberof Mail
     * @instance
     */
    Mail.prototype.headImageUrl = "";

    /**
     * Creates a new Mail instance using the specified properties.
     * @function create
     * @memberof Mail
     * @static
     * @param {IMail=} [properties] Properties to set
     * @returns {Mail} Mail instance
     */
    Mail.create = function create(properties) {
        return new Mail(properties);
    };

    /**
     * Encodes the specified Mail message. Does not implicitly {@link Mail.verify|verify} messages.
     * @function encode
     * @memberof Mail
     * @static
     * @param {IMail} m Mail message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Mail.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.id);
        w.uint32(18).string(m.title);
        w.uint32(26).string(m.content);
        w.uint32(32).int32(m.mailType);
        w.uint32(40).bool(m.isRead);
        w.uint32(48).int64(m.createTime);
        if (m.isGetAttachment != null && m.hasOwnProperty("isGetAttachment"))
            w.uint32(56).bool(m.isGetAttachment);
        if (m.attachment != null && m.hasOwnProperty("attachment"))
            $root.AttachmentStruct.encode(m.attachment, w.uint32(66).fork()).ldelim();
        if (m.headId != null && m.hasOwnProperty("headId"))
            w.uint32(72).int32(m.headId);
        if (m.headImageUrl != null && m.hasOwnProperty("headImageUrl"))
            w.uint32(82).string(m.headImageUrl);
        return w;
    };

    /**
     * Decodes a Mail message from the specified reader or buffer.
     * @function decode
     * @memberof Mail
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Mail} Mail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Mail.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Mail();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int64();
                break;
            case 2:
                m.title = r.string();
                break;
            case 3:
                m.content = r.string();
                break;
            case 4:
                m.mailType = r.int32();
                break;
            case 5:
                m.isRead = r.bool();
                break;
            case 6:
                m.createTime = r.int64();
                break;
            case 7:
                m.isGetAttachment = r.bool();
                break;
            case 8:
                m.attachment = $root.AttachmentStruct.decode(r, r.uint32());
                break;
            case 9:
                m.headId = r.int32();
                break;
            case 10:
                m.headImageUrl = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("title"))
            throw $util.ProtocolError("missing required 'title'", { instance: m });
        if (!m.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: m });
        if (!m.hasOwnProperty("mailType"))
            throw $util.ProtocolError("missing required 'mailType'", { instance: m });
        if (!m.hasOwnProperty("isRead"))
            throw $util.ProtocolError("missing required 'isRead'", { instance: m });
        if (!m.hasOwnProperty("createTime"))
            throw $util.ProtocolError("missing required 'createTime'", { instance: m });
        return m;
    };

    return Mail;
})();

$root.MailRes = (function() {

    /**
     * Properties of a MailRes.
     * @exports IMailRes
     * @interface IMailRes
     * @property {Array.<IMail>|null} [mailList] MailRes mailList
     */

    /**
     * Constructs a new MailRes.
     * @exports MailRes
     * @classdesc Represents a MailRes.
     * @implements IMailRes
     * @constructor
     * @param {IMailRes=} [p] Properties to set
     */
    function MailRes(p) {
        this.mailList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MailRes mailList.
     * @member {Array.<IMail>} mailList
     * @memberof MailRes
     * @instance
     */
    MailRes.prototype.mailList = $util.emptyArray;

    /**
     * Creates a new MailRes instance using the specified properties.
     * @function create
     * @memberof MailRes
     * @static
     * @param {IMailRes=} [properties] Properties to set
     * @returns {MailRes} MailRes instance
     */
    MailRes.create = function create(properties) {
        return new MailRes(properties);
    };

    /**
     * Encodes the specified MailRes message. Does not implicitly {@link MailRes.verify|verify} messages.
     * @function encode
     * @memberof MailRes
     * @static
     * @param {IMailRes} m MailRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mailList != null && m.mailList.length) {
            for (var i = 0; i < m.mailList.length; ++i)
                $root.Mail.encode(m.mailList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a MailRes message from the specified reader or buffer.
     * @function decode
     * @memberof MailRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MailRes} MailRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MailRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.mailList && m.mailList.length))
                    m.mailList = [];
                m.mailList.push($root.Mail.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return MailRes;
})();

$root.MailModify = (function() {

    /**
     * Properties of a MailModify.
     * @exports IMailModify
     * @interface IMailModify
     * @property {number|Long} id MailModify id
     * @property {boolean} isRead MailModify isRead
     * @property {boolean|null} [isGetAttachment] MailModify isGetAttachment
     */

    /**
     * Constructs a new MailModify.
     * @exports MailModify
     * @classdesc Represents a MailModify.
     * @implements IMailModify
     * @constructor
     * @param {IMailModify=} [p] Properties to set
     */
    function MailModify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MailModify id.
     * @member {number|Long} id
     * @memberof MailModify
     * @instance
     */
    MailModify.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MailModify isRead.
     * @member {boolean} isRead
     * @memberof MailModify
     * @instance
     */
    MailModify.prototype.isRead = false;

    /**
     * MailModify isGetAttachment.
     * @member {boolean} isGetAttachment
     * @memberof MailModify
     * @instance
     */
    MailModify.prototype.isGetAttachment = false;

    /**
     * Creates a new MailModify instance using the specified properties.
     * @function create
     * @memberof MailModify
     * @static
     * @param {IMailModify=} [properties] Properties to set
     * @returns {MailModify} MailModify instance
     */
    MailModify.create = function create(properties) {
        return new MailModify(properties);
    };

    /**
     * Encodes the specified MailModify message. Does not implicitly {@link MailModify.verify|verify} messages.
     * @function encode
     * @memberof MailModify
     * @static
     * @param {IMailModify} m MailModify message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailModify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.id);
        w.uint32(16).bool(m.isRead);
        if (m.isGetAttachment != null && m.hasOwnProperty("isGetAttachment"))
            w.uint32(24).bool(m.isGetAttachment);
        return w;
    };

    /**
     * Decodes a MailModify message from the specified reader or buffer.
     * @function decode
     * @memberof MailModify
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MailModify} MailModify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailModify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MailModify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int64();
                break;
            case 2:
                m.isRead = r.bool();
                break;
            case 3:
                m.isGetAttachment = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("isRead"))
            throw $util.ProtocolError("missing required 'isRead'", { instance: m });
        return m;
    };

    return MailModify;
})();

$root.MailModifyRes = (function() {

    /**
     * Properties of a MailModifyRes.
     * @exports IMailModifyRes
     * @interface IMailModifyRes
     * @property {Array.<IMail>|null} [addList] MailModifyRes addList
     * @property {Array.<IMailModify>|null} [modifyList] MailModifyRes modifyList
     * @property {Array.<number|Long>|null} [removeList] MailModifyRes removeList
     */

    /**
     * Constructs a new MailModifyRes.
     * @exports MailModifyRes
     * @classdesc Represents a MailModifyRes.
     * @implements IMailModifyRes
     * @constructor
     * @param {IMailModifyRes=} [p] Properties to set
     */
    function MailModifyRes(p) {
        this.addList = [];
        this.modifyList = [];
        this.removeList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MailModifyRes addList.
     * @member {Array.<IMail>} addList
     * @memberof MailModifyRes
     * @instance
     */
    MailModifyRes.prototype.addList = $util.emptyArray;

    /**
     * MailModifyRes modifyList.
     * @member {Array.<IMailModify>} modifyList
     * @memberof MailModifyRes
     * @instance
     */
    MailModifyRes.prototype.modifyList = $util.emptyArray;

    /**
     * MailModifyRes removeList.
     * @member {Array.<number|Long>} removeList
     * @memberof MailModifyRes
     * @instance
     */
    MailModifyRes.prototype.removeList = $util.emptyArray;

    /**
     * Creates a new MailModifyRes instance using the specified properties.
     * @function create
     * @memberof MailModifyRes
     * @static
     * @param {IMailModifyRes=} [properties] Properties to set
     * @returns {MailModifyRes} MailModifyRes instance
     */
    MailModifyRes.create = function create(properties) {
        return new MailModifyRes(properties);
    };

    /**
     * Encodes the specified MailModifyRes message. Does not implicitly {@link MailModifyRes.verify|verify} messages.
     * @function encode
     * @memberof MailModifyRes
     * @static
     * @param {IMailModifyRes} m MailModifyRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailModifyRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.addList != null && m.addList.length) {
            for (var i = 0; i < m.addList.length; ++i)
                $root.Mail.encode(m.addList[i], w.uint32(10).fork()).ldelim();
        }
        if (m.modifyList != null && m.modifyList.length) {
            for (var i = 0; i < m.modifyList.length; ++i)
                $root.MailModify.encode(m.modifyList[i], w.uint32(18).fork()).ldelim();
        }
        if (m.removeList != null && m.removeList.length) {
            for (var i = 0; i < m.removeList.length; ++i)
                w.uint32(24).int64(m.removeList[i]);
        }
        return w;
    };

    /**
     * Decodes a MailModifyRes message from the specified reader or buffer.
     * @function decode
     * @memberof MailModifyRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MailModifyRes} MailModifyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailModifyRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MailModifyRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.addList && m.addList.length))
                    m.addList = [];
                m.addList.push($root.Mail.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.modifyList && m.modifyList.length))
                    m.modifyList = [];
                m.modifyList.push($root.MailModify.decode(r, r.uint32()));
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

    return MailModifyRes;
})();

$root.ReadMailReq = (function() {

    /**
     * Properties of a ReadMailReq.
     * @exports IReadMailReq
     * @interface IReadMailReq
     * @property {number|Long} id ReadMailReq id
     */

    /**
     * Constructs a new ReadMailReq.
     * @exports ReadMailReq
     * @classdesc Represents a ReadMailReq.
     * @implements IReadMailReq
     * @constructor
     * @param {IReadMailReq=} [p] Properties to set
     */
    function ReadMailReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReadMailReq id.
     * @member {number|Long} id
     * @memberof ReadMailReq
     * @instance
     */
    ReadMailReq.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReadMailReq instance using the specified properties.
     * @function create
     * @memberof ReadMailReq
     * @static
     * @param {IReadMailReq=} [properties] Properties to set
     * @returns {ReadMailReq} ReadMailReq instance
     */
    ReadMailReq.create = function create(properties) {
        return new ReadMailReq(properties);
    };

    /**
     * Encodes the specified ReadMailReq message. Does not implicitly {@link ReadMailReq.verify|verify} messages.
     * @function encode
     * @memberof ReadMailReq
     * @static
     * @param {IReadMailReq} m ReadMailReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMailReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.id);
        return w;
    };

    /**
     * Decodes a ReadMailReq message from the specified reader or buffer.
     * @function decode
     * @memberof ReadMailReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReadMailReq} ReadMailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMailReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReadMailReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    return ReadMailReq;
})();

$root.DeleteMailReq = (function() {

    /**
     * Properties of a DeleteMailReq.
     * @exports IDeleteMailReq
     * @interface IDeleteMailReq
     * @property {Array.<number|Long>|null} [id] DeleteMailReq id
     */

    /**
     * Constructs a new DeleteMailReq.
     * @exports DeleteMailReq
     * @classdesc Represents a DeleteMailReq.
     * @implements IDeleteMailReq
     * @constructor
     * @param {IDeleteMailReq=} [p] Properties to set
     */
    function DeleteMailReq(p) {
        this.id = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DeleteMailReq id.
     * @member {Array.<number|Long>} id
     * @memberof DeleteMailReq
     * @instance
     */
    DeleteMailReq.prototype.id = $util.emptyArray;

    /**
     * Creates a new DeleteMailReq instance using the specified properties.
     * @function create
     * @memberof DeleteMailReq
     * @static
     * @param {IDeleteMailReq=} [properties] Properties to set
     * @returns {DeleteMailReq} DeleteMailReq instance
     */
    DeleteMailReq.create = function create(properties) {
        return new DeleteMailReq(properties);
    };

    /**
     * Encodes the specified DeleteMailReq message. Does not implicitly {@link DeleteMailReq.verify|verify} messages.
     * @function encode
     * @memberof DeleteMailReq
     * @static
     * @param {IDeleteMailReq} m DeleteMailReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteMailReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.id.length) {
            for (var i = 0; i < m.id.length; ++i)
                w.uint32(8).int64(m.id[i]);
        }
        return w;
    };

    /**
     * Decodes a DeleteMailReq message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteMailReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DeleteMailReq} DeleteMailReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteMailReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DeleteMailReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.id && m.id.length))
                    m.id = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.id.push(r.int64());
                } else
                    m.id.push(r.int64());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return DeleteMailReq;
})();

$root.GetMailAttachmentReq = (function() {

    /**
     * Properties of a GetMailAttachmentReq.
     * @exports IGetMailAttachmentReq
     * @interface IGetMailAttachmentReq
     * @property {Array.<number|Long>|null} [id] GetMailAttachmentReq id
     */

    /**
     * Constructs a new GetMailAttachmentReq.
     * @exports GetMailAttachmentReq
     * @classdesc Represents a GetMailAttachmentReq.
     * @implements IGetMailAttachmentReq
     * @constructor
     * @param {IGetMailAttachmentReq=} [p] Properties to set
     */
    function GetMailAttachmentReq(p) {
        this.id = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetMailAttachmentReq id.
     * @member {Array.<number|Long>} id
     * @memberof GetMailAttachmentReq
     * @instance
     */
    GetMailAttachmentReq.prototype.id = $util.emptyArray;

    /**
     * Creates a new GetMailAttachmentReq instance using the specified properties.
     * @function create
     * @memberof GetMailAttachmentReq
     * @static
     * @param {IGetMailAttachmentReq=} [properties] Properties to set
     * @returns {GetMailAttachmentReq} GetMailAttachmentReq instance
     */
    GetMailAttachmentReq.create = function create(properties) {
        return new GetMailAttachmentReq(properties);
    };

    /**
     * Encodes the specified GetMailAttachmentReq message. Does not implicitly {@link GetMailAttachmentReq.verify|verify} messages.
     * @function encode
     * @memberof GetMailAttachmentReq
     * @static
     * @param {IGetMailAttachmentReq} m GetMailAttachmentReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMailAttachmentReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.id.length) {
            for (var i = 0; i < m.id.length; ++i)
                w.uint32(8).int64(m.id[i]);
        }
        return w;
    };

    /**
     * Decodes a GetMailAttachmentReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetMailAttachmentReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetMailAttachmentReq} GetMailAttachmentReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMailAttachmentReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetMailAttachmentReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.id && m.id.length))
                    m.id = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.id.push(r.int64());
                } else
                    m.id.push(r.int64());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GetMailAttachmentReq;
})();

$root.CommonMailResultRes = (function() {

    /**
     * Properties of a CommonMailResultRes.
     * @exports ICommonMailResultRes
     * @interface ICommonMailResultRes
     * @property {boolean} success CommonMailResultRes success
     * @property {string} tips CommonMailResultRes tips
     * @property {IAttachmentStruct|null} [attachment] CommonMailResultRes attachment
     */

    /**
     * Constructs a new CommonMailResultRes.
     * @exports CommonMailResultRes
     * @classdesc Represents a CommonMailResultRes.
     * @implements ICommonMailResultRes
     * @constructor
     * @param {ICommonMailResultRes=} [p] Properties to set
     */
    function CommonMailResultRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CommonMailResultRes success.
     * @member {boolean} success
     * @memberof CommonMailResultRes
     * @instance
     */
    CommonMailResultRes.prototype.success = false;

    /**
     * CommonMailResultRes tips.
     * @member {string} tips
     * @memberof CommonMailResultRes
     * @instance
     */
    CommonMailResultRes.prototype.tips = "";

    /**
     * CommonMailResultRes attachment.
     * @member {IAttachmentStruct|null|undefined} attachment
     * @memberof CommonMailResultRes
     * @instance
     */
    CommonMailResultRes.prototype.attachment = null;

    /**
     * Creates a new CommonMailResultRes instance using the specified properties.
     * @function create
     * @memberof CommonMailResultRes
     * @static
     * @param {ICommonMailResultRes=} [properties] Properties to set
     * @returns {CommonMailResultRes} CommonMailResultRes instance
     */
    CommonMailResultRes.create = function create(properties) {
        return new CommonMailResultRes(properties);
    };

    /**
     * Encodes the specified CommonMailResultRes message. Does not implicitly {@link CommonMailResultRes.verify|verify} messages.
     * @function encode
     * @memberof CommonMailResultRes
     * @static
     * @param {ICommonMailResultRes} m CommonMailResultRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommonMailResultRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tips);
        if (m.attachment != null && m.hasOwnProperty("attachment"))
            $root.AttachmentStruct.encode(m.attachment, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a CommonMailResultRes message from the specified reader or buffer.
     * @function decode
     * @memberof CommonMailResultRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CommonMailResultRes} CommonMailResultRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommonMailResultRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CommonMailResultRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            case 3:
                m.attachment = $root.AttachmentStruct.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        return m;
    };

    return CommonMailResultRes;
})();

/**
 * CurrencyType enum.
 * @exports CurrencyType
 * @enum {string}
 * @property {number} RedEnvelops=0 RedEnvelops value
 * @property {number} Gold=1 Gold value
 * @property {number} safeBox=2 safeBox value
 * @property {number} Integral=3 Integral value
 */
$root.CurrencyType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RedEnvelops"] = 0;
    values[valuesById[1] = "Gold"] = 1;
    values[valuesById[2] = "safeBox"] = 2;
    values[valuesById[3] = "Integral"] = 3;
    return values;
})();

$root.CurrencyStruct = (function() {

    /**
     * Properties of a CurrencyStruct.
     * @exports ICurrencyStruct
     * @interface ICurrencyStruct
     * @property {CurrencyType} curType CurrencyStruct curType
     * @property {string} count CurrencyStruct count
     */

    /**
     * Constructs a new CurrencyStruct.
     * @exports CurrencyStruct
     * @classdesc Represents a CurrencyStruct.
     * @implements ICurrencyStruct
     * @constructor
     * @param {ICurrencyStruct=} [p] Properties to set
     */
    function CurrencyStruct(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CurrencyStruct curType.
     * @member {CurrencyType} curType
     * @memberof CurrencyStruct
     * @instance
     */
    CurrencyStruct.prototype.curType = 0;

    /**
     * CurrencyStruct count.
     * @member {string} count
     * @memberof CurrencyStruct
     * @instance
     */
    CurrencyStruct.prototype.count = "";

    /**
     * Creates a new CurrencyStruct instance using the specified properties.
     * @function create
     * @memberof CurrencyStruct
     * @static
     * @param {ICurrencyStruct=} [properties] Properties to set
     * @returns {CurrencyStruct} CurrencyStruct instance
     */
    CurrencyStruct.create = function create(properties) {
        return new CurrencyStruct(properties);
    };

    /**
     * Encodes the specified CurrencyStruct message. Does not implicitly {@link CurrencyStruct.verify|verify} messages.
     * @function encode
     * @memberof CurrencyStruct
     * @static
     * @param {ICurrencyStruct} m CurrencyStruct message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CurrencyStruct.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.curType);
        w.uint32(18).string(m.count);
        return w;
    };

    /**
     * Decodes a CurrencyStruct message from the specified reader or buffer.
     * @function decode
     * @memberof CurrencyStruct
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CurrencyStruct} CurrencyStruct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CurrencyStruct.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CurrencyStruct();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.curType = r.int32();
                break;
            case 2:
                m.count = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("curType"))
            throw $util.ProtocolError("missing required 'curType'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        return m;
    };

    return CurrencyStruct;
})();

$root.SyncCurrencyRes = (function() {

    /**
     * Properties of a SyncCurrencyRes.
     * @exports ISyncCurrencyRes
     * @interface ISyncCurrencyRes
     * @property {Array.<ICurrencyStruct>|null} [curStruct] SyncCurrencyRes curStruct
     * @property {CurrencyRefreshType} refreshType SyncCurrencyRes refreshType
     */

    /**
     * Constructs a new SyncCurrencyRes.
     * @exports SyncCurrencyRes
     * @classdesc Represents a SyncCurrencyRes.
     * @implements ISyncCurrencyRes
     * @constructor
     * @param {ISyncCurrencyRes=} [p] Properties to set
     */
    function SyncCurrencyRes(p) {
        this.curStruct = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SyncCurrencyRes curStruct.
     * @member {Array.<ICurrencyStruct>} curStruct
     * @memberof SyncCurrencyRes
     * @instance
     */
    SyncCurrencyRes.prototype.curStruct = $util.emptyArray;

    /**
     * SyncCurrencyRes refreshType.
     * @member {CurrencyRefreshType} refreshType
     * @memberof SyncCurrencyRes
     * @instance
     */
    SyncCurrencyRes.prototype.refreshType = 1;

    /**
     * Creates a new SyncCurrencyRes instance using the specified properties.
     * @function create
     * @memberof SyncCurrencyRes
     * @static
     * @param {ISyncCurrencyRes=} [properties] Properties to set
     * @returns {SyncCurrencyRes} SyncCurrencyRes instance
     */
    SyncCurrencyRes.create = function create(properties) {
        return new SyncCurrencyRes(properties);
    };

    /**
     * Encodes the specified SyncCurrencyRes message. Does not implicitly {@link SyncCurrencyRes.verify|verify} messages.
     * @function encode
     * @memberof SyncCurrencyRes
     * @static
     * @param {ISyncCurrencyRes} m SyncCurrencyRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncCurrencyRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.curStruct != null && m.curStruct.length) {
            for (var i = 0; i < m.curStruct.length; ++i)
                $root.CurrencyStruct.encode(m.curStruct[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).int32(m.refreshType);
        return w;
    };

    /**
     * Decodes a SyncCurrencyRes message from the specified reader or buffer.
     * @function decode
     * @memberof SyncCurrencyRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SyncCurrencyRes} SyncCurrencyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncCurrencyRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SyncCurrencyRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.curStruct && m.curStruct.length))
                    m.curStruct = [];
                m.curStruct.push($root.CurrencyStruct.decode(r, r.uint32()));
                break;
            case 2:
                m.refreshType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("refreshType"))
            throw $util.ProtocolError("missing required 'refreshType'", { instance: m });
        return m;
    };

    return SyncCurrencyRes;
})();

/**
 * CurrencyRefreshType enum.
 * @exports CurrencyRefreshType
 * @enum {string}
 * @property {number} REFRESH_TYPE_RECHAGE=1 REFRESH_TYPE_RECHAGE value
 * @property {number} REFRESH_TYPE_HALL_COMMON=2 REFRESH_TYPE_HALL_COMMON value
 * @property {number} REFRESH_TYPE_CACHE=3 REFRESH_TYPE_CACHE value
 * @property {number} REFRESH_TYPE_GAME_COMMON=4 REFRESH_TYPE_GAME_COMMON value
 */
$root.CurrencyRefreshType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "REFRESH_TYPE_RECHAGE"] = 1;
    values[valuesById[2] = "REFRESH_TYPE_HALL_COMMON"] = 2;
    values[valuesById[3] = "REFRESH_TYPE_CACHE"] = 3;
    values[valuesById[4] = "REFRESH_TYPE_GAME_COMMON"] = 4;
    return values;
})();

$root.SyncHallToGameCurrencyRes = (function() {

    /**
     * Properties of a SyncHallToGameCurrencyRes.
     * @exports ISyncHallToGameCurrencyRes
     * @interface ISyncHallToGameCurrencyRes
     * @property {Array.<ICurrencyStruct>|null} [curStruct] SyncHallToGameCurrencyRes curStruct
     */

    /**
     * Constructs a new SyncHallToGameCurrencyRes.
     * @exports SyncHallToGameCurrencyRes
     * @classdesc Represents a SyncHallToGameCurrencyRes.
     * @implements ISyncHallToGameCurrencyRes
     * @constructor
     * @param {ISyncHallToGameCurrencyRes=} [p] Properties to set
     */
    function SyncHallToGameCurrencyRes(p) {
        this.curStruct = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SyncHallToGameCurrencyRes curStruct.
     * @member {Array.<ICurrencyStruct>} curStruct
     * @memberof SyncHallToGameCurrencyRes
     * @instance
     */
    SyncHallToGameCurrencyRes.prototype.curStruct = $util.emptyArray;

    /**
     * Creates a new SyncHallToGameCurrencyRes instance using the specified properties.
     * @function create
     * @memberof SyncHallToGameCurrencyRes
     * @static
     * @param {ISyncHallToGameCurrencyRes=} [properties] Properties to set
     * @returns {SyncHallToGameCurrencyRes} SyncHallToGameCurrencyRes instance
     */
    SyncHallToGameCurrencyRes.create = function create(properties) {
        return new SyncHallToGameCurrencyRes(properties);
    };

    /**
     * Encodes the specified SyncHallToGameCurrencyRes message. Does not implicitly {@link SyncHallToGameCurrencyRes.verify|verify} messages.
     * @function encode
     * @memberof SyncHallToGameCurrencyRes
     * @static
     * @param {ISyncHallToGameCurrencyRes} m SyncHallToGameCurrencyRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncHallToGameCurrencyRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.curStruct != null && m.curStruct.length) {
            for (var i = 0; i < m.curStruct.length; ++i)
                $root.CurrencyStruct.encode(m.curStruct[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SyncHallToGameCurrencyRes message from the specified reader or buffer.
     * @function decode
     * @memberof SyncHallToGameCurrencyRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SyncHallToGameCurrencyRes} SyncHallToGameCurrencyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncHallToGameCurrencyRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SyncHallToGameCurrencyRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.curStruct && m.curStruct.length))
                    m.curStruct = [];
                m.curStruct.push($root.CurrencyStruct.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return SyncHallToGameCurrencyRes;
})();

module.exports = $root;

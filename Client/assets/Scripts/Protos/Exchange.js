/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Exchange || ($protobuf.roots.Exchange = {});

/**
 * ExchangeType enum.
 * @exports ExchangeType
 * @enum {string}
 * @property {number} BILL=1 BILL value
 * @property {number} JD=2 JD value
 * @property {number} ENTITY=3 ENTITY value
 */
$root.ExchangeType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "BILL"] = 1;
    values[valuesById[2] = "JD"] = 2;
    values[valuesById[3] = "ENTITY"] = 3;
    return values;
})();

/**
 * ExchangeLimitType enum.
 * @exports ExchangeLimitType
 * @enum {string}
 * @property {number} EXCHANGE_UNLIMIT=1 EXCHANGE_UNLIMIT value
 * @property {number} EXCHANGE_DAY_LIMIT=2 EXCHANGE_DAY_LIMIT value
 */
$root.ExchangeLimitType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "EXCHANGE_UNLIMIT"] = 1;
    values[valuesById[2] = "EXCHANGE_DAY_LIMIT"] = 2;
    return values;
})();

/**
 * ExchangeStatus enum.
 * @exports ExchangeStatus
 * @enum {string}
 * @property {number} SEND_ALEADY=1 SEND_ALEADY value
 * @property {number} SEND_ING=2 SEND_ING value
 * @property {number} SEND_EXCEPTION=3 SEND_EXCEPTION value
 */
$root.ExchangeStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "SEND_ALEADY"] = 1;
    values[valuesById[2] = "SEND_ING"] = 2;
    values[valuesById[3] = "SEND_EXCEPTION"] = 3;
    return values;
})();

$root.ExchangeData = (function() {

    /**
     * Properties of an ExchangeData.
     * @exports IExchangeData
     * @interface IExchangeData
     * @property {number} exchangeId ExchangeData exchangeId
     * @property {ExchangeType} exchangeType ExchangeData exchangeType
     * @property {boolean} isShowStock ExchangeData isShowStock
     * @property {number} stock ExchangeData stock
     * @property {string} altasPath ExchangeData altasPath
     * @property {string} spriteName ExchangeData spriteName
     */

    /**
     * Constructs a new ExchangeData.
     * @exports ExchangeData
     * @classdesc Represents an ExchangeData.
     * @implements IExchangeData
     * @constructor
     * @param {IExchangeData=} [p] Properties to set
     */
    function ExchangeData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExchangeData exchangeId.
     * @member {number} exchangeId
     * @memberof ExchangeData
     * @instance
     */
    ExchangeData.prototype.exchangeId = 0;

    /**
     * ExchangeData exchangeType.
     * @member {ExchangeType} exchangeType
     * @memberof ExchangeData
     * @instance
     */
    ExchangeData.prototype.exchangeType = 1;

    /**
     * ExchangeData isShowStock.
     * @member {boolean} isShowStock
     * @memberof ExchangeData
     * @instance
     */
    ExchangeData.prototype.isShowStock = false;

    /**
     * ExchangeData stock.
     * @member {number} stock
     * @memberof ExchangeData
     * @instance
     */
    ExchangeData.prototype.stock = 0;

    /**
     * ExchangeData altasPath.
     * @member {string} altasPath
     * @memberof ExchangeData
     * @instance
     */
    ExchangeData.prototype.altasPath = "";

    /**
     * ExchangeData spriteName.
     * @member {string} spriteName
     * @memberof ExchangeData
     * @instance
     */
    ExchangeData.prototype.spriteName = "";

    /**
     * Creates a new ExchangeData instance using the specified properties.
     * @function create
     * @memberof ExchangeData
     * @static
     * @param {IExchangeData=} [properties] Properties to set
     * @returns {ExchangeData} ExchangeData instance
     */
    ExchangeData.create = function create(properties) {
        return new ExchangeData(properties);
    };

    /**
     * Encodes the specified ExchangeData message. Does not implicitly {@link ExchangeData.verify|verify} messages.
     * @function encode
     * @memberof ExchangeData
     * @static
     * @param {IExchangeData} m ExchangeData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.exchangeId);
        w.uint32(16).int32(m.exchangeType);
        w.uint32(24).bool(m.isShowStock);
        w.uint32(32).int32(m.stock);
        w.uint32(42).string(m.altasPath);
        w.uint32(50).string(m.spriteName);
        return w;
    };

    /**
     * Decodes an ExchangeData message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExchangeData} ExchangeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExchangeData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.exchangeId = r.int32();
                break;
            case 2:
                m.exchangeType = r.int32();
                break;
            case 3:
                m.isShowStock = r.bool();
                break;
            case 4:
                m.stock = r.int32();
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
        if (!m.hasOwnProperty("exchangeId"))
            throw $util.ProtocolError("missing required 'exchangeId'", { instance: m });
        if (!m.hasOwnProperty("exchangeType"))
            throw $util.ProtocolError("missing required 'exchangeType'", { instance: m });
        if (!m.hasOwnProperty("isShowStock"))
            throw $util.ProtocolError("missing required 'isShowStock'", { instance: m });
        if (!m.hasOwnProperty("stock"))
            throw $util.ProtocolError("missing required 'stock'", { instance: m });
        if (!m.hasOwnProperty("altasPath"))
            throw $util.ProtocolError("missing required 'altasPath'", { instance: m });
        if (!m.hasOwnProperty("spriteName"))
            throw $util.ProtocolError("missing required 'spriteName'", { instance: m });
        return m;
    };

    return ExchangeData;
})();

$root.ExchangeRecord = (function() {

    /**
     * Properties of an ExchangeRecord.
     * @exports IExchangeRecord
     * @interface IExchangeRecord
     * @property {number} id ExchangeRecord id
     * @property {string} desc ExchangeRecord desc
     * @property {string} priceDesc ExchangeRecord priceDesc
     * @property {string} phone ExchangeRecord phone
     * @property {string} address ExchangeRecord address
     * @property {ExchangeStatus} status ExchangeRecord status
     * @property {string} receiver ExchangeRecord receiver
     * @property {string|null} [orderNo] ExchangeRecord orderNo
     * @property {boolean|null} [sendPlatformSuccess] ExchangeRecord sendPlatformSuccess
     * @property {string|null} [orderType] ExchangeRecord orderType
     * @property {string|null} [orderDate] ExchangeRecord orderDate
     */

    /**
     * Constructs a new ExchangeRecord.
     * @exports ExchangeRecord
     * @classdesc Represents an ExchangeRecord.
     * @implements IExchangeRecord
     * @constructor
     * @param {IExchangeRecord=} [p] Properties to set
     */
    function ExchangeRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExchangeRecord id.
     * @member {number} id
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.id = 0;

    /**
     * ExchangeRecord desc.
     * @member {string} desc
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.desc = "";

    /**
     * ExchangeRecord priceDesc.
     * @member {string} priceDesc
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.priceDesc = "";

    /**
     * ExchangeRecord phone.
     * @member {string} phone
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.phone = "";

    /**
     * ExchangeRecord address.
     * @member {string} address
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.address = "";

    /**
     * ExchangeRecord status.
     * @member {ExchangeStatus} status
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.status = 1;

    /**
     * ExchangeRecord receiver.
     * @member {string} receiver
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.receiver = "";

    /**
     * ExchangeRecord orderNo.
     * @member {string} orderNo
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.orderNo = "";

    /**
     * ExchangeRecord sendPlatformSuccess.
     * @member {boolean} sendPlatformSuccess
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.sendPlatformSuccess = false;

    /**
     * ExchangeRecord orderType.
     * @member {string} orderType
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.orderType = "";

    /**
     * ExchangeRecord orderDate.
     * @member {string} orderDate
     * @memberof ExchangeRecord
     * @instance
     */
    ExchangeRecord.prototype.orderDate = "";

    /**
     * Creates a new ExchangeRecord instance using the specified properties.
     * @function create
     * @memberof ExchangeRecord
     * @static
     * @param {IExchangeRecord=} [properties] Properties to set
     * @returns {ExchangeRecord} ExchangeRecord instance
     */
    ExchangeRecord.create = function create(properties) {
        return new ExchangeRecord(properties);
    };

    /**
     * Encodes the specified ExchangeRecord message. Does not implicitly {@link ExchangeRecord.verify|verify} messages.
     * @function encode
     * @memberof ExchangeRecord
     * @static
     * @param {IExchangeRecord} m ExchangeRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(18).string(m.desc);
        w.uint32(26).string(m.priceDesc);
        w.uint32(34).string(m.phone);
        w.uint32(42).string(m.address);
        w.uint32(48).int32(m.status);
        w.uint32(58).string(m.receiver);
        if (m.orderNo != null && m.hasOwnProperty("orderNo"))
            w.uint32(66).string(m.orderNo);
        if (m.sendPlatformSuccess != null && m.hasOwnProperty("sendPlatformSuccess"))
            w.uint32(72).bool(m.sendPlatformSuccess);
        if (m.orderType != null && m.hasOwnProperty("orderType"))
            w.uint32(82).string(m.orderType);
        if (m.orderDate != null && m.hasOwnProperty("orderDate"))
            w.uint32(90).string(m.orderDate);
        return w;
    };

    /**
     * Decodes an ExchangeRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExchangeRecord} ExchangeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExchangeRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
                break;
            case 2:
                m.desc = r.string();
                break;
            case 3:
                m.priceDesc = r.string();
                break;
            case 4:
                m.phone = r.string();
                break;
            case 5:
                m.address = r.string();
                break;
            case 6:
                m.status = r.int32();
                break;
            case 7:
                m.receiver = r.string();
                break;
            case 8:
                m.orderNo = r.string();
                break;
            case 9:
                m.sendPlatformSuccess = r.bool();
                break;
            case 10:
                m.orderType = r.string();
                break;
            case 11:
                m.orderDate = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        if (!m.hasOwnProperty("priceDesc"))
            throw $util.ProtocolError("missing required 'priceDesc'", { instance: m });
        if (!m.hasOwnProperty("phone"))
            throw $util.ProtocolError("missing required 'phone'", { instance: m });
        if (!m.hasOwnProperty("address"))
            throw $util.ProtocolError("missing required 'address'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("receiver"))
            throw $util.ProtocolError("missing required 'receiver'", { instance: m });
        return m;
    };

    return ExchangeRecord;
})();

$root.ExchangeAddress = (function() {

    /**
     * Properties of an ExchangeAddress.
     * @exports IExchangeAddress
     * @interface IExchangeAddress
     * @property {string} receiver ExchangeAddress receiver
     * @property {string} receiverPhone ExchangeAddress receiverPhone
     * @property {string} receiverAddress ExchangeAddress receiverAddress
     */

    /**
     * Constructs a new ExchangeAddress.
     * @exports ExchangeAddress
     * @classdesc Represents an ExchangeAddress.
     * @implements IExchangeAddress
     * @constructor
     * @param {IExchangeAddress=} [p] Properties to set
     */
    function ExchangeAddress(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExchangeAddress receiver.
     * @member {string} receiver
     * @memberof ExchangeAddress
     * @instance
     */
    ExchangeAddress.prototype.receiver = "";

    /**
     * ExchangeAddress receiverPhone.
     * @member {string} receiverPhone
     * @memberof ExchangeAddress
     * @instance
     */
    ExchangeAddress.prototype.receiverPhone = "";

    /**
     * ExchangeAddress receiverAddress.
     * @member {string} receiverAddress
     * @memberof ExchangeAddress
     * @instance
     */
    ExchangeAddress.prototype.receiverAddress = "";

    /**
     * Creates a new ExchangeAddress instance using the specified properties.
     * @function create
     * @memberof ExchangeAddress
     * @static
     * @param {IExchangeAddress=} [properties] Properties to set
     * @returns {ExchangeAddress} ExchangeAddress instance
     */
    ExchangeAddress.create = function create(properties) {
        return new ExchangeAddress(properties);
    };

    /**
     * Encodes the specified ExchangeAddress message. Does not implicitly {@link ExchangeAddress.verify|verify} messages.
     * @function encode
     * @memberof ExchangeAddress
     * @static
     * @param {IExchangeAddress} m ExchangeAddress message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeAddress.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.receiver);
        w.uint32(18).string(m.receiverPhone);
        w.uint32(26).string(m.receiverAddress);
        return w;
    };

    /**
     * Decodes an ExchangeAddress message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeAddress
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExchangeAddress} ExchangeAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeAddress.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExchangeAddress();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.receiver = r.string();
                break;
            case 2:
                m.receiverPhone = r.string();
                break;
            case 3:
                m.receiverAddress = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("receiver"))
            throw $util.ProtocolError("missing required 'receiver'", { instance: m });
        if (!m.hasOwnProperty("receiverPhone"))
            throw $util.ProtocolError("missing required 'receiverPhone'", { instance: m });
        if (!m.hasOwnProperty("receiverAddress"))
            throw $util.ProtocolError("missing required 'receiverAddress'", { instance: m });
        return m;
    };

    return ExchangeAddress;
})();

$root.OpenExchangeReq = (function() {

    /**
     * Properties of an OpenExchangeReq.
     * @exports IOpenExchangeReq
     * @interface IOpenExchangeReq
     */

    /**
     * Constructs a new OpenExchangeReq.
     * @exports OpenExchangeReq
     * @classdesc Represents an OpenExchangeReq.
     * @implements IOpenExchangeReq
     * @constructor
     * @param {IOpenExchangeReq=} [p] Properties to set
     */
    function OpenExchangeReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new OpenExchangeReq instance using the specified properties.
     * @function create
     * @memberof OpenExchangeReq
     * @static
     * @param {IOpenExchangeReq=} [properties] Properties to set
     * @returns {OpenExchangeReq} OpenExchangeReq instance
     */
    OpenExchangeReq.create = function create(properties) {
        return new OpenExchangeReq(properties);
    };

    /**
     * Encodes the specified OpenExchangeReq message. Does not implicitly {@link OpenExchangeReq.verify|verify} messages.
     * @function encode
     * @memberof OpenExchangeReq
     * @static
     * @param {IOpenExchangeReq} m OpenExchangeReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenExchangeReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes an OpenExchangeReq message from the specified reader or buffer.
     * @function decode
     * @memberof OpenExchangeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OpenExchangeReq} OpenExchangeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenExchangeReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OpenExchangeReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return OpenExchangeReq;
})();

$root.OpenExchangeRes = (function() {

    /**
     * Properties of an OpenExchangeRes.
     * @exports IOpenExchangeRes
     * @interface IOpenExchangeRes
     * @property {Array.<IExchangeData>|null} [exchangeData] OpenExchangeRes exchangeData
     * @property {Array.<IExchangeRecord>|null} [exchangeRecord] OpenExchangeRes exchangeRecord
     */

    /**
     * Constructs a new OpenExchangeRes.
     * @exports OpenExchangeRes
     * @classdesc Represents an OpenExchangeRes.
     * @implements IOpenExchangeRes
     * @constructor
     * @param {IOpenExchangeRes=} [p] Properties to set
     */
    function OpenExchangeRes(p) {
        this.exchangeData = [];
        this.exchangeRecord = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * OpenExchangeRes exchangeData.
     * @member {Array.<IExchangeData>} exchangeData
     * @memberof OpenExchangeRes
     * @instance
     */
    OpenExchangeRes.prototype.exchangeData = $util.emptyArray;

    /**
     * OpenExchangeRes exchangeRecord.
     * @member {Array.<IExchangeRecord>} exchangeRecord
     * @memberof OpenExchangeRes
     * @instance
     */
    OpenExchangeRes.prototype.exchangeRecord = $util.emptyArray;

    /**
     * Creates a new OpenExchangeRes instance using the specified properties.
     * @function create
     * @memberof OpenExchangeRes
     * @static
     * @param {IOpenExchangeRes=} [properties] Properties to set
     * @returns {OpenExchangeRes} OpenExchangeRes instance
     */
    OpenExchangeRes.create = function create(properties) {
        return new OpenExchangeRes(properties);
    };

    /**
     * Encodes the specified OpenExchangeRes message. Does not implicitly {@link OpenExchangeRes.verify|verify} messages.
     * @function encode
     * @memberof OpenExchangeRes
     * @static
     * @param {IOpenExchangeRes} m OpenExchangeRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenExchangeRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.exchangeData != null && m.exchangeData.length) {
            for (var i = 0; i < m.exchangeData.length; ++i)
                $root.ExchangeData.encode(m.exchangeData[i], w.uint32(10).fork()).ldelim();
        }
        if (m.exchangeRecord != null && m.exchangeRecord.length) {
            for (var i = 0; i < m.exchangeRecord.length; ++i)
                $root.ExchangeRecord.encode(m.exchangeRecord[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an OpenExchangeRes message from the specified reader or buffer.
     * @function decode
     * @memberof OpenExchangeRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OpenExchangeRes} OpenExchangeRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenExchangeRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OpenExchangeRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.exchangeData && m.exchangeData.length))
                    m.exchangeData = [];
                m.exchangeData.push($root.ExchangeData.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.exchangeRecord && m.exchangeRecord.length))
                    m.exchangeRecord = [];
                m.exchangeRecord.push($root.ExchangeRecord.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return OpenExchangeRes;
})();

$root.ExchangeReq = (function() {

    /**
     * Properties of an ExchangeReq.
     * @exports IExchangeReq
     * @interface IExchangeReq
     * @property {number} exchangeId ExchangeReq exchangeId
     */

    /**
     * Constructs a new ExchangeReq.
     * @exports ExchangeReq
     * @classdesc Represents an ExchangeReq.
     * @implements IExchangeReq
     * @constructor
     * @param {IExchangeReq=} [p] Properties to set
     */
    function ExchangeReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExchangeReq exchangeId.
     * @member {number} exchangeId
     * @memberof ExchangeReq
     * @instance
     */
    ExchangeReq.prototype.exchangeId = 0;

    /**
     * Creates a new ExchangeReq instance using the specified properties.
     * @function create
     * @memberof ExchangeReq
     * @static
     * @param {IExchangeReq=} [properties] Properties to set
     * @returns {ExchangeReq} ExchangeReq instance
     */
    ExchangeReq.create = function create(properties) {
        return new ExchangeReq(properties);
    };

    /**
     * Encodes the specified ExchangeReq message. Does not implicitly {@link ExchangeReq.verify|verify} messages.
     * @function encode
     * @memberof ExchangeReq
     * @static
     * @param {IExchangeReq} m ExchangeReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.exchangeId);
        return w;
    };

    /**
     * Decodes an ExchangeReq message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExchangeReq} ExchangeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExchangeReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.exchangeId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("exchangeId"))
            throw $util.ProtocolError("missing required 'exchangeId'", { instance: m });
        return m;
    };

    return ExchangeReq;
})();

$root.ExchangeRes = (function() {

    /**
     * Properties of an ExchangeRes.
     * @exports IExchangeRes
     * @interface IExchangeRes
     * @property {boolean} isSuccess ExchangeRes isSuccess
     * @property {string|null} [tips] ExchangeRes tips
     * @property {number|null} [exchangeId] ExchangeRes exchangeId
     * @property {number|null} [stock] ExchangeRes stock
     */

    /**
     * Constructs a new ExchangeRes.
     * @exports ExchangeRes
     * @classdesc Represents an ExchangeRes.
     * @implements IExchangeRes
     * @constructor
     * @param {IExchangeRes=} [p] Properties to set
     */
    function ExchangeRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExchangeRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof ExchangeRes
     * @instance
     */
    ExchangeRes.prototype.isSuccess = false;

    /**
     * ExchangeRes tips.
     * @member {string} tips
     * @memberof ExchangeRes
     * @instance
     */
    ExchangeRes.prototype.tips = "";

    /**
     * ExchangeRes exchangeId.
     * @member {number} exchangeId
     * @memberof ExchangeRes
     * @instance
     */
    ExchangeRes.prototype.exchangeId = 0;

    /**
     * ExchangeRes stock.
     * @member {number} stock
     * @memberof ExchangeRes
     * @instance
     */
    ExchangeRes.prototype.stock = 0;

    /**
     * Creates a new ExchangeRes instance using the specified properties.
     * @function create
     * @memberof ExchangeRes
     * @static
     * @param {IExchangeRes=} [properties] Properties to set
     * @returns {ExchangeRes} ExchangeRes instance
     */
    ExchangeRes.create = function create(properties) {
        return new ExchangeRes(properties);
    };

    /**
     * Encodes the specified ExchangeRes message. Does not implicitly {@link ExchangeRes.verify|verify} messages.
     * @function encode
     * @memberof ExchangeRes
     * @static
     * @param {IExchangeRes} m ExchangeRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.exchangeId != null && m.hasOwnProperty("exchangeId"))
            w.uint32(24).int32(m.exchangeId);
        if (m.stock != null && m.hasOwnProperty("stock"))
            w.uint32(32).int32(m.stock);
        return w;
    };

    /**
     * Decodes an ExchangeRes message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExchangeRes} ExchangeRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExchangeRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            case 3:
                m.exchangeId = r.int32();
                break;
            case 4:
                m.stock = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isSuccess"))
            throw $util.ProtocolError("missing required 'isSuccess'", { instance: m });
        return m;
    };

    return ExchangeRes;
})();

$root.EditExchangeContactInfoReq = (function() {

    /**
     * Properties of an EditExchangeContactInfoReq.
     * @exports IEditExchangeContactInfoReq
     * @interface IEditExchangeContactInfoReq
     * @property {IExchangeAddress} exchangeAddress EditExchangeContactInfoReq exchangeAddress
     */

    /**
     * Constructs a new EditExchangeContactInfoReq.
     * @exports EditExchangeContactInfoReq
     * @classdesc Represents an EditExchangeContactInfoReq.
     * @implements IEditExchangeContactInfoReq
     * @constructor
     * @param {IEditExchangeContactInfoReq=} [p] Properties to set
     */
    function EditExchangeContactInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EditExchangeContactInfoReq exchangeAddress.
     * @member {IExchangeAddress} exchangeAddress
     * @memberof EditExchangeContactInfoReq
     * @instance
     */
    EditExchangeContactInfoReq.prototype.exchangeAddress = null;

    /**
     * Creates a new EditExchangeContactInfoReq instance using the specified properties.
     * @function create
     * @memberof EditExchangeContactInfoReq
     * @static
     * @param {IEditExchangeContactInfoReq=} [properties] Properties to set
     * @returns {EditExchangeContactInfoReq} EditExchangeContactInfoReq instance
     */
    EditExchangeContactInfoReq.create = function create(properties) {
        return new EditExchangeContactInfoReq(properties);
    };

    /**
     * Encodes the specified EditExchangeContactInfoReq message. Does not implicitly {@link EditExchangeContactInfoReq.verify|verify} messages.
     * @function encode
     * @memberof EditExchangeContactInfoReq
     * @static
     * @param {IEditExchangeContactInfoReq} m EditExchangeContactInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditExchangeContactInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.ExchangeAddress.encode(m.exchangeAddress, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes an EditExchangeContactInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof EditExchangeContactInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EditExchangeContactInfoReq} EditExchangeContactInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditExchangeContactInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EditExchangeContactInfoReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.exchangeAddress = $root.ExchangeAddress.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("exchangeAddress"))
            throw $util.ProtocolError("missing required 'exchangeAddress'", { instance: m });
        return m;
    };

    return EditExchangeContactInfoReq;
})();

$root.EditExchangeContactInfoRsp = (function() {

    /**
     * Properties of an EditExchangeContactInfoRsp.
     * @exports IEditExchangeContactInfoRsp
     * @interface IEditExchangeContactInfoRsp
     * @property {boolean} isSuccess EditExchangeContactInfoRsp isSuccess
     * @property {string|null} [tips] EditExchangeContactInfoRsp tips
     */

    /**
     * Constructs a new EditExchangeContactInfoRsp.
     * @exports EditExchangeContactInfoRsp
     * @classdesc Represents an EditExchangeContactInfoRsp.
     * @implements IEditExchangeContactInfoRsp
     * @constructor
     * @param {IEditExchangeContactInfoRsp=} [p] Properties to set
     */
    function EditExchangeContactInfoRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EditExchangeContactInfoRsp isSuccess.
     * @member {boolean} isSuccess
     * @memberof EditExchangeContactInfoRsp
     * @instance
     */
    EditExchangeContactInfoRsp.prototype.isSuccess = false;

    /**
     * EditExchangeContactInfoRsp tips.
     * @member {string} tips
     * @memberof EditExchangeContactInfoRsp
     * @instance
     */
    EditExchangeContactInfoRsp.prototype.tips = "";

    /**
     * Creates a new EditExchangeContactInfoRsp instance using the specified properties.
     * @function create
     * @memberof EditExchangeContactInfoRsp
     * @static
     * @param {IEditExchangeContactInfoRsp=} [properties] Properties to set
     * @returns {EditExchangeContactInfoRsp} EditExchangeContactInfoRsp instance
     */
    EditExchangeContactInfoRsp.create = function create(properties) {
        return new EditExchangeContactInfoRsp(properties);
    };

    /**
     * Encodes the specified EditExchangeContactInfoRsp message. Does not implicitly {@link EditExchangeContactInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof EditExchangeContactInfoRsp
     * @static
     * @param {IEditExchangeContactInfoRsp} m EditExchangeContactInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditExchangeContactInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes an EditExchangeContactInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof EditExchangeContactInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EditExchangeContactInfoRsp} EditExchangeContactInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditExchangeContactInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EditExchangeContactInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isSuccess"))
            throw $util.ProtocolError("missing required 'isSuccess'", { instance: m });
        return m;
    };

    return EditExchangeContactInfoRsp;
})();

module.exports = $root;

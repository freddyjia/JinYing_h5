/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.IAP || ($protobuf.roots.IAP = {});

$root.IAPVerifyData = (function() {

    /**
     * Properties of a IAPVerifyData.
     * @exports IIAPVerifyData
     * @interface IIAPVerifyData
     * @property {string} uniqueId IAPVerifyData uniqueId
     * @property {string} payload IAPVerifyData payload
     * @property {number|Long} userId IAPVerifyData userId
     */

    /**
     * Constructs a new IAPVerifyData.
     * @exports IAPVerifyData
     * @classdesc Represents a IAPVerifyData.
     * @implements IIAPVerifyData
     * @constructor
     * @param {IIAPVerifyData=} [p] Properties to set
     */
    function IAPVerifyData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * IAPVerifyData uniqueId.
     * @member {string} uniqueId
     * @memberof IAPVerifyData
     * @instance
     */
    IAPVerifyData.prototype.uniqueId = "";

    /**
     * IAPVerifyData payload.
     * @member {string} payload
     * @memberof IAPVerifyData
     * @instance
     */
    IAPVerifyData.prototype.payload = "";

    /**
     * IAPVerifyData userId.
     * @member {number|Long} userId
     * @memberof IAPVerifyData
     * @instance
     */
    IAPVerifyData.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new IAPVerifyData instance using the specified properties.
     * @function create
     * @memberof IAPVerifyData
     * @static
     * @param {IIAPVerifyData=} [properties] Properties to set
     * @returns {IAPVerifyData} IAPVerifyData instance
     */
    IAPVerifyData.create = function create(properties) {
        return new IAPVerifyData(properties);
    };

    /**
     * Encodes the specified IAPVerifyData message. Does not implicitly {@link IAPVerifyData.verify|verify} messages.
     * @function encode
     * @memberof IAPVerifyData
     * @static
     * @param {IIAPVerifyData} m IAPVerifyData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IAPVerifyData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uniqueId);
        w.uint32(18).string(m.payload);
        w.uint32(25).fixed64(m.userId);
        return w;
    };

    /**
     * Decodes a IAPVerifyData message from the specified reader or buffer.
     * @function decode
     * @memberof IAPVerifyData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IAPVerifyData} IAPVerifyData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IAPVerifyData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IAPVerifyData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uniqueId = r.string();
                break;
            case 2:
                m.payload = r.string();
                break;
            case 3:
                m.userId = r.fixed64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uniqueId"))
            throw $util.ProtocolError("missing required 'uniqueId'", { instance: m });
        if (!m.hasOwnProperty("payload"))
            throw $util.ProtocolError("missing required 'payload'", { instance: m });
        if (!m.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: m });
        return m;
    };

    return IAPVerifyData;
})();

$root.IAPVerifyResult = (function() {

    /**
     * Properties of a IAPVerifyResult.
     * @exports IIAPVerifyResult
     * @interface IIAPVerifyResult
     * @property {string} uniqueId IAPVerifyResult uniqueId
     * @property {string} transactionId IAPVerifyResult transactionId
     * @property {string} itemId IAPVerifyResult itemId
     * @property {number|Long} userId IAPVerifyResult userId
     * @property {number|Long} orderTime IAPVerifyResult orderTime
     */

    /**
     * Constructs a new IAPVerifyResult.
     * @exports IAPVerifyResult
     * @classdesc Represents a IAPVerifyResult.
     * @implements IIAPVerifyResult
     * @constructor
     * @param {IIAPVerifyResult=} [p] Properties to set
     */
    function IAPVerifyResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * IAPVerifyResult uniqueId.
     * @member {string} uniqueId
     * @memberof IAPVerifyResult
     * @instance
     */
    IAPVerifyResult.prototype.uniqueId = "";

    /**
     * IAPVerifyResult transactionId.
     * @member {string} transactionId
     * @memberof IAPVerifyResult
     * @instance
     */
    IAPVerifyResult.prototype.transactionId = "";

    /**
     * IAPVerifyResult itemId.
     * @member {string} itemId
     * @memberof IAPVerifyResult
     * @instance
     */
    IAPVerifyResult.prototype.itemId = "";

    /**
     * IAPVerifyResult userId.
     * @member {number|Long} userId
     * @memberof IAPVerifyResult
     * @instance
     */
    IAPVerifyResult.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * IAPVerifyResult orderTime.
     * @member {number|Long} orderTime
     * @memberof IAPVerifyResult
     * @instance
     */
    IAPVerifyResult.prototype.orderTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new IAPVerifyResult instance using the specified properties.
     * @function create
     * @memberof IAPVerifyResult
     * @static
     * @param {IIAPVerifyResult=} [properties] Properties to set
     * @returns {IAPVerifyResult} IAPVerifyResult instance
     */
    IAPVerifyResult.create = function create(properties) {
        return new IAPVerifyResult(properties);
    };

    /**
     * Encodes the specified IAPVerifyResult message. Does not implicitly {@link IAPVerifyResult.verify|verify} messages.
     * @function encode
     * @memberof IAPVerifyResult
     * @static
     * @param {IIAPVerifyResult} m IAPVerifyResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IAPVerifyResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uniqueId);
        w.uint32(18).string(m.transactionId);
        w.uint32(26).string(m.itemId);
        w.uint32(33).fixed64(m.userId);
        w.uint32(41).fixed64(m.orderTime);
        return w;
    };

    /**
     * Decodes a IAPVerifyResult message from the specified reader or buffer.
     * @function decode
     * @memberof IAPVerifyResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IAPVerifyResult} IAPVerifyResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IAPVerifyResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IAPVerifyResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uniqueId = r.string();
                break;
            case 2:
                m.transactionId = r.string();
                break;
            case 3:
                m.itemId = r.string();
                break;
            case 4:
                m.userId = r.fixed64();
                break;
            case 5:
                m.orderTime = r.fixed64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uniqueId"))
            throw $util.ProtocolError("missing required 'uniqueId'", { instance: m });
        if (!m.hasOwnProperty("transactionId"))
            throw $util.ProtocolError("missing required 'transactionId'", { instance: m });
        if (!m.hasOwnProperty("itemId"))
            throw $util.ProtocolError("missing required 'itemId'", { instance: m });
        if (!m.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: m });
        if (!m.hasOwnProperty("orderTime"))
            throw $util.ProtocolError("missing required 'orderTime'", { instance: m });
        return m;
    };

    return IAPVerifyResult;
})();

module.exports = $root;

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Currency || ($protobuf.roots.Currency = {});

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

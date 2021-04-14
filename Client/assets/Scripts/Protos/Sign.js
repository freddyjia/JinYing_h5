/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Sign || ($protobuf.roots.Sign = {});

/**
 * SignStatus enum.
 * @exports SignStatus
 * @enum {string}
 * @property {number} UNSIGN=1 UNSIGN value
 * @property {number} MISSED=2 MISSED value
 * @property {number} SIGNED=3 SIGNED value
 */
$root.SignStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "UNSIGN"] = 1;
    values[valuesById[2] = "MISSED"] = 2;
    values[valuesById[3] = "SIGNED"] = 3;
    return values;
})();

$root.SignData = (function() {

    /**
     * Properties of a SignData.
     * @exports ISignData
     * @interface ISignData
     * @property {number} day SignData day
     * @property {SignStatus} status SignData status
     * @property {boolean} isDouble SignData isDouble
     * @property {string} desc SignData desc
     */

    /**
     * Constructs a new SignData.
     * @exports SignData
     * @classdesc Represents a SignData.
     * @implements ISignData
     * @constructor
     * @param {ISignData=} [p] Properties to set
     */
    function SignData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SignData day.
     * @member {number} day
     * @memberof SignData
     * @instance
     */
    SignData.prototype.day = 0;

    /**
     * SignData status.
     * @member {SignStatus} status
     * @memberof SignData
     * @instance
     */
    SignData.prototype.status = 1;

    /**
     * SignData isDouble.
     * @member {boolean} isDouble
     * @memberof SignData
     * @instance
     */
    SignData.prototype.isDouble = false;

    /**
     * SignData desc.
     * @member {string} desc
     * @memberof SignData
     * @instance
     */
    SignData.prototype.desc = "";

    /**
     * Creates a new SignData instance using the specified properties.
     * @function create
     * @memberof SignData
     * @static
     * @param {ISignData=} [properties] Properties to set
     * @returns {SignData} SignData instance
     */
    SignData.create = function create(properties) {
        return new SignData(properties);
    };

    /**
     * Encodes the specified SignData message. Does not implicitly {@link SignData.verify|verify} messages.
     * @function encode
     * @memberof SignData
     * @static
     * @param {ISignData} m SignData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.day);
        w.uint32(16).int32(m.status);
        w.uint32(24).bool(m.isDouble);
        w.uint32(34).string(m.desc);
        return w;
    };

    /**
     * Decodes a SignData message from the specified reader or buffer.
     * @function decode
     * @memberof SignData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignData} SignData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.day = r.int32();
                break;
            case 2:
                m.status = r.int32();
                break;
            case 3:
                m.isDouble = r.bool();
                break;
            case 4:
                m.desc = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("day"))
            throw $util.ProtocolError("missing required 'day'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("isDouble"))
            throw $util.ProtocolError("missing required 'isDouble'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        return m;
    };

    return SignData;
})();

$root.OpenSignReq = (function() {

    /**
     * Properties of an OpenSignReq.
     * @exports IOpenSignReq
     * @interface IOpenSignReq
     */

    /**
     * Constructs a new OpenSignReq.
     * @exports OpenSignReq
     * @classdesc Represents an OpenSignReq.
     * @implements IOpenSignReq
     * @constructor
     * @param {IOpenSignReq=} [p] Properties to set
     */
    function OpenSignReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new OpenSignReq instance using the specified properties.
     * @function create
     * @memberof OpenSignReq
     * @static
     * @param {IOpenSignReq=} [properties] Properties to set
     * @returns {OpenSignReq} OpenSignReq instance
     */
    OpenSignReq.create = function create(properties) {
        return new OpenSignReq(properties);
    };

    /**
     * Encodes the specified OpenSignReq message. Does not implicitly {@link OpenSignReq.verify|verify} messages.
     * @function encode
     * @memberof OpenSignReq
     * @static
     * @param {IOpenSignReq} m OpenSignReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenSignReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes an OpenSignReq message from the specified reader or buffer.
     * @function decode
     * @memberof OpenSignReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OpenSignReq} OpenSignReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenSignReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OpenSignReq();
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

    return OpenSignReq;
})();

$root.OpenSignRes = (function() {

    /**
     * Properties of an OpenSignRes.
     * @exports IOpenSignRes
     * @interface IOpenSignRes
     * @property {Array.<ISignData>|null} [signData] OpenSignRes signData
     * @property {Array.<string>|null} [record] OpenSignRes record
     * @property {number|Long} produce OpenSignRes produce
     * @property {number|Long} joinNum OpenSignRes joinNum
     */

    /**
     * Constructs a new OpenSignRes.
     * @exports OpenSignRes
     * @classdesc Represents an OpenSignRes.
     * @implements IOpenSignRes
     * @constructor
     * @param {IOpenSignRes=} [p] Properties to set
     */
    function OpenSignRes(p) {
        this.signData = [];
        this.record = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * OpenSignRes signData.
     * @member {Array.<ISignData>} signData
     * @memberof OpenSignRes
     * @instance
     */
    OpenSignRes.prototype.signData = $util.emptyArray;

    /**
     * OpenSignRes record.
     * @member {Array.<string>} record
     * @memberof OpenSignRes
     * @instance
     */
    OpenSignRes.prototype.record = $util.emptyArray;

    /**
     * OpenSignRes produce.
     * @member {number|Long} produce
     * @memberof OpenSignRes
     * @instance
     */
    OpenSignRes.prototype.produce = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * OpenSignRes joinNum.
     * @member {number|Long} joinNum
     * @memberof OpenSignRes
     * @instance
     */
    OpenSignRes.prototype.joinNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new OpenSignRes instance using the specified properties.
     * @function create
     * @memberof OpenSignRes
     * @static
     * @param {IOpenSignRes=} [properties] Properties to set
     * @returns {OpenSignRes} OpenSignRes instance
     */
    OpenSignRes.create = function create(properties) {
        return new OpenSignRes(properties);
    };

    /**
     * Encodes the specified OpenSignRes message. Does not implicitly {@link OpenSignRes.verify|verify} messages.
     * @function encode
     * @memberof OpenSignRes
     * @static
     * @param {IOpenSignRes} m OpenSignRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenSignRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.signData != null && m.signData.length) {
            for (var i = 0; i < m.signData.length; ++i)
                $root.SignData.encode(m.signData[i], w.uint32(10).fork()).ldelim();
        }
        if (m.record != null && m.record.length) {
            for (var i = 0; i < m.record.length; ++i)
                w.uint32(18).string(m.record[i]);
        }
        w.uint32(24).int64(m.produce);
        w.uint32(32).int64(m.joinNum);
        return w;
    };

    /**
     * Decodes an OpenSignRes message from the specified reader or buffer.
     * @function decode
     * @memberof OpenSignRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OpenSignRes} OpenSignRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenSignRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OpenSignRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.signData && m.signData.length))
                    m.signData = [];
                m.signData.push($root.SignData.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.record && m.record.length))
                    m.record = [];
                m.record.push(r.string());
                break;
            case 3:
                m.produce = r.int64();
                break;
            case 4:
                m.joinNum = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("produce"))
            throw $util.ProtocolError("missing required 'produce'", { instance: m });
        if (!m.hasOwnProperty("joinNum"))
            throw $util.ProtocolError("missing required 'joinNum'", { instance: m });
        return m;
    };

    return OpenSignRes;
})();

$root.SignReq = (function() {

    /**
     * Properties of a SignReq.
     * @exports ISignReq
     * @interface ISignReq
     * @property {number} day SignReq day
     */

    /**
     * Constructs a new SignReq.
     * @exports SignReq
     * @classdesc Represents a SignReq.
     * @implements ISignReq
     * @constructor
     * @param {ISignReq=} [p] Properties to set
     */
    function SignReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SignReq day.
     * @member {number} day
     * @memberof SignReq
     * @instance
     */
    SignReq.prototype.day = 0;

    /**
     * Creates a new SignReq instance using the specified properties.
     * @function create
     * @memberof SignReq
     * @static
     * @param {ISignReq=} [properties] Properties to set
     * @returns {SignReq} SignReq instance
     */
    SignReq.create = function create(properties) {
        return new SignReq(properties);
    };

    /**
     * Encodes the specified SignReq message. Does not implicitly {@link SignReq.verify|verify} messages.
     * @function encode
     * @memberof SignReq
     * @static
     * @param {ISignReq} m SignReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.day);
        return w;
    };

    /**
     * Decodes a SignReq message from the specified reader or buffer.
     * @function decode
     * @memberof SignReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignReq} SignReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.day = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("day"))
            throw $util.ProtocolError("missing required 'day'", { instance: m });
        return m;
    };

    return SignReq;
})();

$root.SignRes = (function() {

    /**
     * Properties of a SignRes.
     * @exports ISignRes
     * @interface ISignRes
     * @property {boolean} isSuccess SignRes isSuccess
     * @property {string|null} [tips] SignRes tips
     * @property {Array.<ICurrencyStruct>|null} [rewards] SignRes rewards
     */

    /**
     * Constructs a new SignRes.
     * @exports SignRes
     * @classdesc Represents a SignRes.
     * @implements ISignRes
     * @constructor
     * @param {ISignRes=} [p] Properties to set
     */
    function SignRes(p) {
        this.rewards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SignRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof SignRes
     * @instance
     */
    SignRes.prototype.isSuccess = false;

    /**
     * SignRes tips.
     * @member {string} tips
     * @memberof SignRes
     * @instance
     */
    SignRes.prototype.tips = "";

    /**
     * SignRes rewards.
     * @member {Array.<ICurrencyStruct>} rewards
     * @memberof SignRes
     * @instance
     */
    SignRes.prototype.rewards = $util.emptyArray;

    /**
     * Creates a new SignRes instance using the specified properties.
     * @function create
     * @memberof SignRes
     * @static
     * @param {ISignRes=} [properties] Properties to set
     * @returns {SignRes} SignRes instance
     */
    SignRes.create = function create(properties) {
        return new SignRes(properties);
    };

    /**
     * Encodes the specified SignRes message. Does not implicitly {@link SignRes.verify|verify} messages.
     * @function encode
     * @memberof SignRes
     * @static
     * @param {ISignRes} m SignRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.rewards != null && m.rewards.length) {
            for (var i = 0; i < m.rewards.length; ++i)
                $root.CurrencyStruct.encode(m.rewards[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SignRes message from the specified reader or buffer.
     * @function decode
     * @memberof SignRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignRes} SignRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignRes();
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
                if (!(m.rewards && m.rewards.length))
                    m.rewards = [];
                m.rewards.push($root.CurrencyStruct.decode(r, r.uint32()));
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

    return SignRes;
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

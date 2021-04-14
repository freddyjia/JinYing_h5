/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.BaiRenNiuNiu || ($protobuf.roots.BaiRenNiuNiu = {});

/**
 * NiuNiuType enum.
 * @exports NiuNiuType
 * @enum {string}
 * @property {number} WUNIU=0 WUNIU value
 * @property {number} NIUYI=1 NIUYI value
 * @property {number} NIUER=2 NIUER value
 * @property {number} NIUSAN=3 NIUSAN value
 * @property {number} NIUSI=4 NIUSI value
 * @property {number} NIUWU=5 NIUWU value
 * @property {number} NIULIU=6 NIULIU value
 * @property {number} NIUQI=7 NIUQI value
 * @property {number} NIUBA=8 NIUBA value
 * @property {number} NIUJIU=9 NIUJIU value
 * @property {number} NIUNIU=10 NIUNIU value
 * @property {number} ZHADAN=11 ZHADAN value
 * @property {number} WUHUANIU=12 WUHUANIU value
 */
$root.NiuNiuType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "WUNIU"] = 0;
    values[valuesById[1] = "NIUYI"] = 1;
    values[valuesById[2] = "NIUER"] = 2;
    values[valuesById[3] = "NIUSAN"] = 3;
    values[valuesById[4] = "NIUSI"] = 4;
    values[valuesById[5] = "NIUWU"] = 5;
    values[valuesById[6] = "NIULIU"] = 6;
    values[valuesById[7] = "NIUQI"] = 7;
    values[valuesById[8] = "NIUBA"] = 8;
    values[valuesById[9] = "NIUJIU"] = 9;
    values[valuesById[10] = "NIUNIU"] = 10;
    values[valuesById[11] = "ZHADAN"] = 11;
    values[valuesById[12] = "WUHUANIU"] = 12;
    return values;
})();

$root.BRNNMember = (function() {

    /**
     * Properties of a BRNNMember.
     * @exports IBRNNMember
     * @interface IBRNNMember
     * @property {string} playerId BRNNMember playerId
     * @property {string} userName BRNNMember userName
     * @property {string} headImageUrl BRNNMember headImageUrl
     * @property {string} headbox BRNNMember headbox
     * @property {number} vipLv BRNNMember vipLv
     * @property {string} gold BRNNMember gold
     * @property {string|null} [city] BRNNMember city
     * @property {string|null} [province] BRNNMember province
     */

    /**
     * Constructs a new BRNNMember.
     * @exports BRNNMember
     * @classdesc Represents a BRNNMember.
     * @implements IBRNNMember
     * @constructor
     * @param {IBRNNMember=} [p] Properties to set
     */
    function BRNNMember(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BRNNMember playerId.
     * @member {string} playerId
     * @memberof BRNNMember
     * @instance
     */
    BRNNMember.prototype.playerId = "";

    /**
     * BRNNMember userName.
     * @member {string} userName
     * @memberof BRNNMember
     * @instance
     */
    BRNNMember.prototype.userName = "";

    /**
     * BRNNMember headImageUrl.
     * @member {string} headImageUrl
     * @memberof BRNNMember
     * @instance
     */
    BRNNMember.prototype.headImageUrl = "";

    /**
     * BRNNMember headbox.
     * @member {string} headbox
     * @memberof BRNNMember
     * @instance
     */
    BRNNMember.prototype.headbox = "";

    /**
     * BRNNMember vipLv.
     * @member {number} vipLv
     * @memberof BRNNMember
     * @instance
     */
    BRNNMember.prototype.vipLv = 0;

    /**
     * BRNNMember gold.
     * @member {string} gold
     * @memberof BRNNMember
     * @instance
     */
    BRNNMember.prototype.gold = "";

    /**
     * BRNNMember city.
     * @member {string} city
     * @memberof BRNNMember
     * @instance
     */
    BRNNMember.prototype.city = "";

    /**
     * BRNNMember province.
     * @member {string} province
     * @memberof BRNNMember
     * @instance
     */
    BRNNMember.prototype.province = "";

    /**
     * Creates a new BRNNMember instance using the specified properties.
     * @function create
     * @memberof BRNNMember
     * @static
     * @param {IBRNNMember=} [properties] Properties to set
     * @returns {BRNNMember} BRNNMember instance
     */
    BRNNMember.create = function create(properties) {
        return new BRNNMember(properties);
    };

    /**
     * Encodes the specified BRNNMember message. Does not implicitly {@link BRNNMember.verify|verify} messages.
     * @function encode
     * @memberof BRNNMember
     * @static
     * @param {IBRNNMember} m BRNNMember message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BRNNMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(18).string(m.userName);
        w.uint32(26).string(m.headImageUrl);
        w.uint32(34).string(m.headbox);
        w.uint32(40).int32(m.vipLv);
        w.uint32(50).string(m.gold);
        if (m.city != null && m.hasOwnProperty("city"))
            w.uint32(58).string(m.city);
        if (m.province != null && m.hasOwnProperty("province"))
            w.uint32(66).string(m.province);
        return w;
    };

    /**
     * Decodes a BRNNMember message from the specified reader or buffer.
     * @function decode
     * @memberof BRNNMember
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BRNNMember} BRNNMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BRNNMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BRNNMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.userName = r.string();
                break;
            case 3:
                m.headImageUrl = r.string();
                break;
            case 4:
                m.headbox = r.string();
                break;
            case 5:
                m.vipLv = r.int32();
                break;
            case 6:
                m.gold = r.string();
                break;
            case 7:
                m.city = r.string();
                break;
            case 8:
                m.province = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("userName"))
            throw $util.ProtocolError("missing required 'userName'", { instance: m });
        if (!m.hasOwnProperty("headImageUrl"))
            throw $util.ProtocolError("missing required 'headImageUrl'", { instance: m });
        if (!m.hasOwnProperty("headbox"))
            throw $util.ProtocolError("missing required 'headbox'", { instance: m });
        if (!m.hasOwnProperty("vipLv"))
            throw $util.ProtocolError("missing required 'vipLv'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return BRNNMember;
})();

$root.BRNNSeatInfo = (function() {

    /**
     * Properties of a BRNNSeatInfo.
     * @exports IBRNNSeatInfo
     * @interface IBRNNSeatInfo
     * @property {number} index BRNNSeatInfo index
     * @property {IBRNNMember|null} [member] BRNNSeatInfo member
     */

    /**
     * Constructs a new BRNNSeatInfo.
     * @exports BRNNSeatInfo
     * @classdesc Represents a BRNNSeatInfo.
     * @implements IBRNNSeatInfo
     * @constructor
     * @param {IBRNNSeatInfo=} [p] Properties to set
     */
    function BRNNSeatInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BRNNSeatInfo index.
     * @member {number} index
     * @memberof BRNNSeatInfo
     * @instance
     */
    BRNNSeatInfo.prototype.index = 0;

    /**
     * BRNNSeatInfo member.
     * @member {IBRNNMember|null|undefined} member
     * @memberof BRNNSeatInfo
     * @instance
     */
    BRNNSeatInfo.prototype.member = null;

    /**
     * Creates a new BRNNSeatInfo instance using the specified properties.
     * @function create
     * @memberof BRNNSeatInfo
     * @static
     * @param {IBRNNSeatInfo=} [properties] Properties to set
     * @returns {BRNNSeatInfo} BRNNSeatInfo instance
     */
    BRNNSeatInfo.create = function create(properties) {
        return new BRNNSeatInfo(properties);
    };

    /**
     * Encodes the specified BRNNSeatInfo message. Does not implicitly {@link BRNNSeatInfo.verify|verify} messages.
     * @function encode
     * @memberof BRNNSeatInfo
     * @static
     * @param {IBRNNSeatInfo} m BRNNSeatInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BRNNSeatInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        if (m.member != null && m.hasOwnProperty("member"))
            $root.BRNNMember.encode(m.member, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a BRNNSeatInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BRNNSeatInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BRNNSeatInfo} BRNNSeatInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BRNNSeatInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BRNNSeatInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.member = $root.BRNNMember.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        return m;
    };

    return BRNNSeatInfo;
})();

$root.BRNNBankerInfo = (function() {

    /**
     * Properties of a BRNNBankerInfo.
     * @exports IBRNNBankerInfo
     * @interface IBRNNBankerInfo
     * @property {IBRNNMember} member BRNNBankerInfo member
     * @property {number} bankerTimes BRNNBankerInfo bankerTimes
     * @property {boolean} isOffBanker BRNNBankerInfo isOffBanker
     */

    /**
     * Constructs a new BRNNBankerInfo.
     * @exports BRNNBankerInfo
     * @classdesc Represents a BRNNBankerInfo.
     * @implements IBRNNBankerInfo
     * @constructor
     * @param {IBRNNBankerInfo=} [p] Properties to set
     */
    function BRNNBankerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BRNNBankerInfo member.
     * @member {IBRNNMember} member
     * @memberof BRNNBankerInfo
     * @instance
     */
    BRNNBankerInfo.prototype.member = null;

    /**
     * BRNNBankerInfo bankerTimes.
     * @member {number} bankerTimes
     * @memberof BRNNBankerInfo
     * @instance
     */
    BRNNBankerInfo.prototype.bankerTimes = 0;

    /**
     * BRNNBankerInfo isOffBanker.
     * @member {boolean} isOffBanker
     * @memberof BRNNBankerInfo
     * @instance
     */
    BRNNBankerInfo.prototype.isOffBanker = false;

    /**
     * Creates a new BRNNBankerInfo instance using the specified properties.
     * @function create
     * @memberof BRNNBankerInfo
     * @static
     * @param {IBRNNBankerInfo=} [properties] Properties to set
     * @returns {BRNNBankerInfo} BRNNBankerInfo instance
     */
    BRNNBankerInfo.create = function create(properties) {
        return new BRNNBankerInfo(properties);
    };

    /**
     * Encodes the specified BRNNBankerInfo message. Does not implicitly {@link BRNNBankerInfo.verify|verify} messages.
     * @function encode
     * @memberof BRNNBankerInfo
     * @static
     * @param {IBRNNBankerInfo} m BRNNBankerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BRNNBankerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.BRNNMember.encode(m.member, w.uint32(10).fork()).ldelim();
        w.uint32(16).int32(m.bankerTimes);
        w.uint32(24).bool(m.isOffBanker);
        return w;
    };

    /**
     * Decodes a BRNNBankerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BRNNBankerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BRNNBankerInfo} BRNNBankerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BRNNBankerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BRNNBankerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.member = $root.BRNNMember.decode(r, r.uint32());
                break;
            case 2:
                m.bankerTimes = r.int32();
                break;
            case 3:
                m.isOffBanker = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("member"))
            throw $util.ProtocolError("missing required 'member'", { instance: m });
        if (!m.hasOwnProperty("bankerTimes"))
            throw $util.ProtocolError("missing required 'bankerTimes'", { instance: m });
        if (!m.hasOwnProperty("isOffBanker"))
            throw $util.ProtocolError("missing required 'isOffBanker'", { instance: m });
        return m;
    };

    return BRNNBankerInfo;
})();

$root.BRNNSUBRecord = (function() {

    /**
     * Properties of a BRNNSUBRecord.
     * @exports IBRNNSUBRecord
     * @interface IBRNNSUBRecord
     * @property {number} index BRNNSUBRecord index
     * @property {boolean} blnWin BRNNSUBRecord blnWin
     */

    /**
     * Constructs a new BRNNSUBRecord.
     * @exports BRNNSUBRecord
     * @classdesc Represents a BRNNSUBRecord.
     * @implements IBRNNSUBRecord
     * @constructor
     * @param {IBRNNSUBRecord=} [p] Properties to set
     */
    function BRNNSUBRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BRNNSUBRecord index.
     * @member {number} index
     * @memberof BRNNSUBRecord
     * @instance
     */
    BRNNSUBRecord.prototype.index = 0;

    /**
     * BRNNSUBRecord blnWin.
     * @member {boolean} blnWin
     * @memberof BRNNSUBRecord
     * @instance
     */
    BRNNSUBRecord.prototype.blnWin = false;

    /**
     * Creates a new BRNNSUBRecord instance using the specified properties.
     * @function create
     * @memberof BRNNSUBRecord
     * @static
     * @param {IBRNNSUBRecord=} [properties] Properties to set
     * @returns {BRNNSUBRecord} BRNNSUBRecord instance
     */
    BRNNSUBRecord.create = function create(properties) {
        return new BRNNSUBRecord(properties);
    };

    /**
     * Encodes the specified BRNNSUBRecord message. Does not implicitly {@link BRNNSUBRecord.verify|verify} messages.
     * @function encode
     * @memberof BRNNSUBRecord
     * @static
     * @param {IBRNNSUBRecord} m BRNNSUBRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BRNNSUBRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).bool(m.blnWin);
        return w;
    };

    /**
     * Decodes a BRNNSUBRecord message from the specified reader or buffer.
     * @function decode
     * @memberof BRNNSUBRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BRNNSUBRecord} BRNNSUBRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BRNNSUBRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BRNNSUBRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.blnWin = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("blnWin"))
            throw $util.ProtocolError("missing required 'blnWin'", { instance: m });
        return m;
    };

    return BRNNSUBRecord;
})();

$root.BRNNRecord = (function() {

    /**
     * Properties of a BRNNRecord.
     * @exports IBRNNRecord
     * @interface IBRNNRecord
     * @property {Array.<IBRNNSUBRecord>|null} [indexRecord] BRNNRecord indexRecord
     */

    /**
     * Constructs a new BRNNRecord.
     * @exports BRNNRecord
     * @classdesc Represents a BRNNRecord.
     * @implements IBRNNRecord
     * @constructor
     * @param {IBRNNRecord=} [p] Properties to set
     */
    function BRNNRecord(p) {
        this.indexRecord = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BRNNRecord indexRecord.
     * @member {Array.<IBRNNSUBRecord>} indexRecord
     * @memberof BRNNRecord
     * @instance
     */
    BRNNRecord.prototype.indexRecord = $util.emptyArray;

    /**
     * Creates a new BRNNRecord instance using the specified properties.
     * @function create
     * @memberof BRNNRecord
     * @static
     * @param {IBRNNRecord=} [properties] Properties to set
     * @returns {BRNNRecord} BRNNRecord instance
     */
    BRNNRecord.create = function create(properties) {
        return new BRNNRecord(properties);
    };

    /**
     * Encodes the specified BRNNRecord message. Does not implicitly {@link BRNNRecord.verify|verify} messages.
     * @function encode
     * @memberof BRNNRecord
     * @static
     * @param {IBRNNRecord} m BRNNRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BRNNRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.indexRecord != null && m.indexRecord.length) {
            for (var i = 0; i < m.indexRecord.length; ++i)
                $root.BRNNSUBRecord.encode(m.indexRecord[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BRNNRecord message from the specified reader or buffer.
     * @function decode
     * @memberof BRNNRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BRNNRecord} BRNNRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BRNNRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BRNNRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.indexRecord && m.indexRecord.length))
                    m.indexRecord = [];
                m.indexRecord.push($root.BRNNSUBRecord.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BRNNRecord;
})();

$root.BetInfo = (function() {

    /**
     * Properties of a BetInfo.
     * @exports IBetInfo
     * @interface IBetInfo
     * @property {number} index BetInfo index
     * @property {string} betTotal BetInfo betTotal
     * @property {boolean|null} [betByClever] BetInfo betByClever
     */

    /**
     * Constructs a new BetInfo.
     * @exports BetInfo
     * @classdesc Represents a BetInfo.
     * @implements IBetInfo
     * @constructor
     * @param {IBetInfo=} [p] Properties to set
     */
    function BetInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetInfo index.
     * @member {number} index
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.index = 0;

    /**
     * BetInfo betTotal.
     * @member {string} betTotal
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.betTotal = "";

    /**
     * BetInfo betByClever.
     * @member {boolean} betByClever
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.betByClever = false;

    /**
     * Creates a new BetInfo instance using the specified properties.
     * @function create
     * @memberof BetInfo
     * @static
     * @param {IBetInfo=} [properties] Properties to set
     * @returns {BetInfo} BetInfo instance
     */
    BetInfo.create = function create(properties) {
        return new BetInfo(properties);
    };

    /**
     * Encodes the specified BetInfo message. Does not implicitly {@link BetInfo.verify|verify} messages.
     * @function encode
     * @memberof BetInfo
     * @static
     * @param {IBetInfo} m BetInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(18).string(m.betTotal);
        if (m.betByClever != null && m.hasOwnProperty("betByClever"))
            w.uint32(24).bool(m.betByClever);
        return w;
    };

    /**
     * Decodes a BetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetInfo} BetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.betTotal = r.string();
                break;
            case 3:
                m.betByClever = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("betTotal"))
            throw $util.ProtocolError("missing required 'betTotal'", { instance: m });
        return m;
    };

    return BetInfo;
})();

$root.CardInfo = (function() {

    /**
     * Properties of a CardInfo.
     * @exports ICardInfo
     * @interface ICardInfo
     * @property {number} id CardInfo id
     * @property {CardColor} cardColor CardInfo cardColor
     * @property {CardSize} cardSize CardInfo cardSize
     */

    /**
     * Constructs a new CardInfo.
     * @exports CardInfo
     * @classdesc Represents a CardInfo.
     * @implements ICardInfo
     * @constructor
     * @param {ICardInfo=} [p] Properties to set
     */
    function CardInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CardInfo id.
     * @member {number} id
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.id = 0;

    /**
     * CardInfo cardColor.
     * @member {CardColor} cardColor
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.cardColor = 1;

    /**
     * CardInfo cardSize.
     * @member {CardSize} cardSize
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.cardSize = 3;

    /**
     * Creates a new CardInfo instance using the specified properties.
     * @function create
     * @memberof CardInfo
     * @static
     * @param {ICardInfo=} [properties] Properties to set
     * @returns {CardInfo} CardInfo instance
     */
    CardInfo.create = function create(properties) {
        return new CardInfo(properties);
    };

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @function encode
     * @memberof CardInfo
     * @static
     * @param {ICardInfo} m CardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.cardColor);
        w.uint32(24).int32(m.cardSize);
        return w;
    };

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CardInfo} CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
                break;
            case 2:
                m.cardColor = r.int32();
                break;
            case 3:
                m.cardSize = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("cardColor"))
            throw $util.ProtocolError("missing required 'cardColor'", { instance: m });
        if (!m.hasOwnProperty("cardSize"))
            throw $util.ProtocolError("missing required 'cardSize'", { instance: m });
        return m;
    };

    return CardInfo;
})();

$root.SingleAreaInfo = (function() {

    /**
     * Properties of a SingleAreaInfo.
     * @exports ISingleAreaInfo
     * @interface ISingleAreaInfo
     * @property {number} index SingleAreaInfo index
     * @property {Array.<ICardInfo>|null} [cardInfo] SingleAreaInfo cardInfo
     * @property {NiuNiuType} niuniuType SingleAreaInfo niuniuType
     * @property {number} mutiple SingleAreaInfo mutiple
     * @property {number} result SingleAreaInfo result
     * @property {Array.<ICardInfo>|null} [niucards] SingleAreaInfo niucards
     */

    /**
     * Constructs a new SingleAreaInfo.
     * @exports SingleAreaInfo
     * @classdesc Represents a SingleAreaInfo.
     * @implements ISingleAreaInfo
     * @constructor
     * @param {ISingleAreaInfo=} [p] Properties to set
     */
    function SingleAreaInfo(p) {
        this.cardInfo = [];
        this.niucards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SingleAreaInfo index.
     * @member {number} index
     * @memberof SingleAreaInfo
     * @instance
     */
    SingleAreaInfo.prototype.index = 0;

    /**
     * SingleAreaInfo cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof SingleAreaInfo
     * @instance
     */
    SingleAreaInfo.prototype.cardInfo = $util.emptyArray;

    /**
     * SingleAreaInfo niuniuType.
     * @member {NiuNiuType} niuniuType
     * @memberof SingleAreaInfo
     * @instance
     */
    SingleAreaInfo.prototype.niuniuType = 0;

    /**
     * SingleAreaInfo mutiple.
     * @member {number} mutiple
     * @memberof SingleAreaInfo
     * @instance
     */
    SingleAreaInfo.prototype.mutiple = 0;

    /**
     * SingleAreaInfo result.
     * @member {number} result
     * @memberof SingleAreaInfo
     * @instance
     */
    SingleAreaInfo.prototype.result = 0;

    /**
     * SingleAreaInfo niucards.
     * @member {Array.<ICardInfo>} niucards
     * @memberof SingleAreaInfo
     * @instance
     */
    SingleAreaInfo.prototype.niucards = $util.emptyArray;

    /**
     * Creates a new SingleAreaInfo instance using the specified properties.
     * @function create
     * @memberof SingleAreaInfo
     * @static
     * @param {ISingleAreaInfo=} [properties] Properties to set
     * @returns {SingleAreaInfo} SingleAreaInfo instance
     */
    SingleAreaInfo.create = function create(properties) {
        return new SingleAreaInfo(properties);
    };

    /**
     * Encodes the specified SingleAreaInfo message. Does not implicitly {@link SingleAreaInfo.verify|verify} messages.
     * @function encode
     * @memberof SingleAreaInfo
     * @static
     * @param {ISingleAreaInfo} m SingleAreaInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleAreaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(24).int32(m.niuniuType);
        w.uint32(32).int32(m.mutiple);
        w.uint32(40).int32(m.result);
        if (m.niucards != null && m.niucards.length) {
            for (var i = 0; i < m.niucards.length; ++i)
                $root.CardInfo.encode(m.niucards[i], w.uint32(50).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SingleAreaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SingleAreaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SingleAreaInfo} SingleAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleAreaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SingleAreaInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.niuniuType = r.int32();
                break;
            case 4:
                m.mutiple = r.int32();
                break;
            case 5:
                m.result = r.int32();
                break;
            case 6:
                if (!(m.niucards && m.niucards.length))
                    m.niucards = [];
                m.niucards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("niuniuType"))
            throw $util.ProtocolError("missing required 'niuniuType'", { instance: m });
        if (!m.hasOwnProperty("mutiple"))
            throw $util.ProtocolError("missing required 'mutiple'", { instance: m });
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return SingleAreaInfo;
})();

$root.BetResult = (function() {

    /**
     * Properties of a BetResult.
     * @exports IBetResult
     * @interface IBetResult
     * @property {string} playerId BetResult playerId
     * @property {number} extractGold BetResult extractGold
     * @property {string|null} [gold] BetResult gold
     */

    /**
     * Constructs a new BetResult.
     * @exports BetResult
     * @classdesc Represents a BetResult.
     * @implements IBetResult
     * @constructor
     * @param {IBetResult=} [p] Properties to set
     */
    function BetResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetResult playerId.
     * @member {string} playerId
     * @memberof BetResult
     * @instance
     */
    BetResult.prototype.playerId = "";

    /**
     * BetResult extractGold.
     * @member {number} extractGold
     * @memberof BetResult
     * @instance
     */
    BetResult.prototype.extractGold = 0;

    /**
     * BetResult gold.
     * @member {string} gold
     * @memberof BetResult
     * @instance
     */
    BetResult.prototype.gold = "";

    /**
     * Creates a new BetResult instance using the specified properties.
     * @function create
     * @memberof BetResult
     * @static
     * @param {IBetResult=} [properties] Properties to set
     * @returns {BetResult} BetResult instance
     */
    BetResult.create = function create(properties) {
        return new BetResult(properties);
    };

    /**
     * Encodes the specified BetResult message. Does not implicitly {@link BetResult.verify|verify} messages.
     * @function encode
     * @memberof BetResult
     * @static
     * @param {IBetResult} m BetResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.extractGold);
        if (m.gold != null && m.hasOwnProperty("gold"))
            w.uint32(26).string(m.gold);
        return w;
    };

    /**
     * Decodes a BetResult message from the specified reader or buffer.
     * @function decode
     * @memberof BetResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetResult} BetResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.extractGold = r.int32();
                break;
            case 3:
                m.gold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("extractGold"))
            throw $util.ProtocolError("missing required 'extractGold'", { instance: m });
        return m;
    };

    return BetResult;
})();

$root.PushRoomInitData = (function() {

    /**
     * Properties of a PushRoomInitData.
     * @exports IPushRoomInitData
     * @interface IPushRoomInitData
     * @property {Array.<IBRNNSeatInfo>|null} [seatInfo] PushRoomInitData seatInfo
     * @property {boolean} isSystemBanker PushRoomInitData isSystemBanker
     * @property {IBRNNBankerInfo|null} [banker] PushRoomInitData banker
     * @property {Array.<IBRNNRecord>|null} [records] PushRoomInitData records
     * @property {number} status PushRoomInitData status
     * @property {number} waitTime PushRoomInitData waitTime
     * @property {number} maxMutiple PushRoomInitData maxMutiple
     * @property {Array.<IBetInfo>|null} [betInfos] PushRoomInitData betInfos
     * @property {Array.<IBetInfo>|null} [selfBetInfo] PushRoomInitData selfBetInfo
     * @property {Array.<ISingleAreaInfo>|null} [singleArea] PushRoomInitData singleArea
     * @property {Array.<IBetResult>|null} [betResult] PushRoomInitData betResult
     * @property {number} betCoinLimit PushRoomInitData betCoinLimit
     * @property {number} roundBetCoinLimit PushRoomInitData roundBetCoinLimit
     * @property {number} baseLimit PushRoomInitData baseLimit
     * @property {Array.<ISettlementRoleInfo>|null} [settlementRoleInfo] PushRoomInitData settlementRoleInfo
     */

    /**
     * Constructs a new PushRoomInitData.
     * @exports PushRoomInitData
     * @classdesc Represents a PushRoomInitData.
     * @implements IPushRoomInitData
     * @constructor
     * @param {IPushRoomInitData=} [p] Properties to set
     */
    function PushRoomInitData(p) {
        this.seatInfo = [];
        this.records = [];
        this.betInfos = [];
        this.selfBetInfo = [];
        this.singleArea = [];
        this.betResult = [];
        this.settlementRoleInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushRoomInitData seatInfo.
     * @member {Array.<IBRNNSeatInfo>} seatInfo
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.seatInfo = $util.emptyArray;

    /**
     * PushRoomInitData isSystemBanker.
     * @member {boolean} isSystemBanker
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.isSystemBanker = false;

    /**
     * PushRoomInitData banker.
     * @member {IBRNNBankerInfo|null|undefined} banker
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.banker = null;

    /**
     * PushRoomInitData records.
     * @member {Array.<IBRNNRecord>} records
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.records = $util.emptyArray;

    /**
     * PushRoomInitData status.
     * @member {number} status
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.status = 0;

    /**
     * PushRoomInitData waitTime.
     * @member {number} waitTime
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.waitTime = 0;

    /**
     * PushRoomInitData maxMutiple.
     * @member {number} maxMutiple
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.maxMutiple = 0;

    /**
     * PushRoomInitData betInfos.
     * @member {Array.<IBetInfo>} betInfos
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.betInfos = $util.emptyArray;

    /**
     * PushRoomInitData selfBetInfo.
     * @member {Array.<IBetInfo>} selfBetInfo
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.selfBetInfo = $util.emptyArray;

    /**
     * PushRoomInitData singleArea.
     * @member {Array.<ISingleAreaInfo>} singleArea
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.singleArea = $util.emptyArray;

    /**
     * PushRoomInitData betResult.
     * @member {Array.<IBetResult>} betResult
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.betResult = $util.emptyArray;

    /**
     * PushRoomInitData betCoinLimit.
     * @member {number} betCoinLimit
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.betCoinLimit = 0;

    /**
     * PushRoomInitData roundBetCoinLimit.
     * @member {number} roundBetCoinLimit
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.roundBetCoinLimit = 0;

    /**
     * PushRoomInitData baseLimit.
     * @member {number} baseLimit
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.baseLimit = 0;

    /**
     * PushRoomInitData settlementRoleInfo.
     * @member {Array.<ISettlementRoleInfo>} settlementRoleInfo
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.settlementRoleInfo = $util.emptyArray;

    /**
     * Creates a new PushRoomInitData instance using the specified properties.
     * @function create
     * @memberof PushRoomInitData
     * @static
     * @param {IPushRoomInitData=} [properties] Properties to set
     * @returns {PushRoomInitData} PushRoomInitData instance
     */
    PushRoomInitData.create = function create(properties) {
        return new PushRoomInitData(properties);
    };

    /**
     * Encodes the specified PushRoomInitData message. Does not implicitly {@link PushRoomInitData.verify|verify} messages.
     * @function encode
     * @memberof PushRoomInitData
     * @static
     * @param {IPushRoomInitData} m PushRoomInitData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRoomInitData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.seatInfo != null && m.seatInfo.length) {
            for (var i = 0; i < m.seatInfo.length; ++i)
                $root.BRNNSeatInfo.encode(m.seatInfo[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).bool(m.isSystemBanker);
        if (m.banker != null && m.hasOwnProperty("banker"))
            $root.BRNNBankerInfo.encode(m.banker, w.uint32(26).fork()).ldelim();
        if (m.records != null && m.records.length) {
            for (var i = 0; i < m.records.length; ++i)
                $root.BRNNRecord.encode(m.records[i], w.uint32(34).fork()).ldelim();
        }
        w.uint32(40).int32(m.status);
        w.uint32(48).int32(m.waitTime);
        w.uint32(56).int32(m.maxMutiple);
        if (m.betInfos != null && m.betInfos.length) {
            for (var i = 0; i < m.betInfos.length; ++i)
                $root.BetInfo.encode(m.betInfos[i], w.uint32(66).fork()).ldelim();
        }
        if (m.selfBetInfo != null && m.selfBetInfo.length) {
            for (var i = 0; i < m.selfBetInfo.length; ++i)
                $root.BetInfo.encode(m.selfBetInfo[i], w.uint32(74).fork()).ldelim();
        }
        if (m.singleArea != null && m.singleArea.length) {
            for (var i = 0; i < m.singleArea.length; ++i)
                $root.SingleAreaInfo.encode(m.singleArea[i], w.uint32(82).fork()).ldelim();
        }
        if (m.betResult != null && m.betResult.length) {
            for (var i = 0; i < m.betResult.length; ++i)
                $root.BetResult.encode(m.betResult[i], w.uint32(90).fork()).ldelim();
        }
        w.uint32(96).int32(m.betCoinLimit);
        w.uint32(104).int32(m.roundBetCoinLimit);
        w.uint32(112).int32(m.baseLimit);
        if (m.settlementRoleInfo != null && m.settlementRoleInfo.length) {
            for (var i = 0; i < m.settlementRoleInfo.length; ++i)
                $root.SettlementRoleInfo.encode(m.settlementRoleInfo[i], w.uint32(122).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushRoomInitData message from the specified reader or buffer.
     * @function decode
     * @memberof PushRoomInitData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRoomInitData} PushRoomInitData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRoomInitData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRoomInitData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.seatInfo && m.seatInfo.length))
                    m.seatInfo = [];
                m.seatInfo.push($root.BRNNSeatInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.isSystemBanker = r.bool();
                break;
            case 3:
                m.banker = $root.BRNNBankerInfo.decode(r, r.uint32());
                break;
            case 4:
                if (!(m.records && m.records.length))
                    m.records = [];
                m.records.push($root.BRNNRecord.decode(r, r.uint32()));
                break;
            case 5:
                m.status = r.int32();
                break;
            case 6:
                m.waitTime = r.int32();
                break;
            case 7:
                m.maxMutiple = r.int32();
                break;
            case 8:
                if (!(m.betInfos && m.betInfos.length))
                    m.betInfos = [];
                m.betInfos.push($root.BetInfo.decode(r, r.uint32()));
                break;
            case 9:
                if (!(m.selfBetInfo && m.selfBetInfo.length))
                    m.selfBetInfo = [];
                m.selfBetInfo.push($root.BetInfo.decode(r, r.uint32()));
                break;
            case 10:
                if (!(m.singleArea && m.singleArea.length))
                    m.singleArea = [];
                m.singleArea.push($root.SingleAreaInfo.decode(r, r.uint32()));
                break;
            case 11:
                if (!(m.betResult && m.betResult.length))
                    m.betResult = [];
                m.betResult.push($root.BetResult.decode(r, r.uint32()));
                break;
            case 12:
                m.betCoinLimit = r.int32();
                break;
            case 13:
                m.roundBetCoinLimit = r.int32();
                break;
            case 14:
                m.baseLimit = r.int32();
                break;
            case 15:
                if (!(m.settlementRoleInfo && m.settlementRoleInfo.length))
                    m.settlementRoleInfo = [];
                m.settlementRoleInfo.push($root.SettlementRoleInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isSystemBanker"))
            throw $util.ProtocolError("missing required 'isSystemBanker'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("waitTime"))
            throw $util.ProtocolError("missing required 'waitTime'", { instance: m });
        if (!m.hasOwnProperty("maxMutiple"))
            throw $util.ProtocolError("missing required 'maxMutiple'", { instance: m });
        if (!m.hasOwnProperty("betCoinLimit"))
            throw $util.ProtocolError("missing required 'betCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("roundBetCoinLimit"))
            throw $util.ProtocolError("missing required 'roundBetCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("baseLimit"))
            throw $util.ProtocolError("missing required 'baseLimit'", { instance: m });
        return m;
    };

    return PushRoomInitData;
})();

$root.BullBetReq = (function() {

    /**
     * Properties of a BullBetReq.
     * @exports IBullBetReq
     * @interface IBullBetReq
     * @property {number} index BullBetReq index
     * @property {number} money BullBetReq money
     */

    /**
     * Constructs a new BullBetReq.
     * @exports BullBetReq
     * @classdesc Represents a BullBetReq.
     * @implements IBullBetReq
     * @constructor
     * @param {IBullBetReq=} [p] Properties to set
     */
    function BullBetReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullBetReq index.
     * @member {number} index
     * @memberof BullBetReq
     * @instance
     */
    BullBetReq.prototype.index = 0;

    /**
     * BullBetReq money.
     * @member {number} money
     * @memberof BullBetReq
     * @instance
     */
    BullBetReq.prototype.money = 0;

    /**
     * Creates a new BullBetReq instance using the specified properties.
     * @function create
     * @memberof BullBetReq
     * @static
     * @param {IBullBetReq=} [properties] Properties to set
     * @returns {BullBetReq} BullBetReq instance
     */
    BullBetReq.create = function create(properties) {
        return new BullBetReq(properties);
    };

    /**
     * Encodes the specified BullBetReq message. Does not implicitly {@link BullBetReq.verify|verify} messages.
     * @function encode
     * @memberof BullBetReq
     * @static
     * @param {IBullBetReq} m BullBetReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullBetReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).int32(m.money);
        return w;
    };

    /**
     * Decodes a BullBetReq message from the specified reader or buffer.
     * @function decode
     * @memberof BullBetReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullBetReq} BullBetReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullBetReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullBetReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.money = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: m });
        return m;
    };

    return BullBetReq;
})();

$root.BullBetRes = (function() {

    /**
     * Properties of a BullBetRes.
     * @exports IBullBetRes
     * @interface IBullBetRes
     * @property {boolean} isSuccess BullBetRes isSuccess
     * @property {string|null} [tips] BullBetRes tips
     */

    /**
     * Constructs a new BullBetRes.
     * @exports BullBetRes
     * @classdesc Represents a BullBetRes.
     * @implements IBullBetRes
     * @constructor
     * @param {IBullBetRes=} [p] Properties to set
     */
    function BullBetRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullBetRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof BullBetRes
     * @instance
     */
    BullBetRes.prototype.isSuccess = false;

    /**
     * BullBetRes tips.
     * @member {string} tips
     * @memberof BullBetRes
     * @instance
     */
    BullBetRes.prototype.tips = "";

    /**
     * Creates a new BullBetRes instance using the specified properties.
     * @function create
     * @memberof BullBetRes
     * @static
     * @param {IBullBetRes=} [properties] Properties to set
     * @returns {BullBetRes} BullBetRes instance
     */
    BullBetRes.create = function create(properties) {
        return new BullBetRes(properties);
    };

    /**
     * Encodes the specified BullBetRes message. Does not implicitly {@link BullBetRes.verify|verify} messages.
     * @function encode
     * @memberof BullBetRes
     * @static
     * @param {IBullBetRes} m BullBetRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullBetRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a BullBetRes message from the specified reader or buffer.
     * @function decode
     * @memberof BullBetRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullBetRes} BullBetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullBetRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullBetRes();
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

    return BullBetRes;
})();

$root.BullLeaveReq = (function() {

    /**
     * Properties of a BullLeaveReq.
     * @exports IBullLeaveReq
     * @interface IBullLeaveReq
     */

    /**
     * Constructs a new BullLeaveReq.
     * @exports BullLeaveReq
     * @classdesc Represents a BullLeaveReq.
     * @implements IBullLeaveReq
     * @constructor
     * @param {IBullLeaveReq=} [p] Properties to set
     */
    function BullLeaveReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new BullLeaveReq instance using the specified properties.
     * @function create
     * @memberof BullLeaveReq
     * @static
     * @param {IBullLeaveReq=} [properties] Properties to set
     * @returns {BullLeaveReq} BullLeaveReq instance
     */
    BullLeaveReq.create = function create(properties) {
        return new BullLeaveReq(properties);
    };

    /**
     * Encodes the specified BullLeaveReq message. Does not implicitly {@link BullLeaveReq.verify|verify} messages.
     * @function encode
     * @memberof BullLeaveReq
     * @static
     * @param {IBullLeaveReq} m BullLeaveReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullLeaveReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a BullLeaveReq message from the specified reader or buffer.
     * @function decode
     * @memberof BullLeaveReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullLeaveReq} BullLeaveReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullLeaveReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullLeaveReq();
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

    return BullLeaveReq;
})();

$root.BullLeaveRes = (function() {

    /**
     * Properties of a BullLeaveRes.
     * @exports IBullLeaveRes
     * @interface IBullLeaveRes
     * @property {boolean} isSuccess BullLeaveRes isSuccess
     * @property {string|null} [tips] BullLeaveRes tips
     */

    /**
     * Constructs a new BullLeaveRes.
     * @exports BullLeaveRes
     * @classdesc Represents a BullLeaveRes.
     * @implements IBullLeaveRes
     * @constructor
     * @param {IBullLeaveRes=} [p] Properties to set
     */
    function BullLeaveRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullLeaveRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof BullLeaveRes
     * @instance
     */
    BullLeaveRes.prototype.isSuccess = false;

    /**
     * BullLeaveRes tips.
     * @member {string} tips
     * @memberof BullLeaveRes
     * @instance
     */
    BullLeaveRes.prototype.tips = "";

    /**
     * Creates a new BullLeaveRes instance using the specified properties.
     * @function create
     * @memberof BullLeaveRes
     * @static
     * @param {IBullLeaveRes=} [properties] Properties to set
     * @returns {BullLeaveRes} BullLeaveRes instance
     */
    BullLeaveRes.create = function create(properties) {
        return new BullLeaveRes(properties);
    };

    /**
     * Encodes the specified BullLeaveRes message. Does not implicitly {@link BullLeaveRes.verify|verify} messages.
     * @function encode
     * @memberof BullLeaveRes
     * @static
     * @param {IBullLeaveRes} m BullLeaveRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullLeaveRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a BullLeaveRes message from the specified reader or buffer.
     * @function decode
     * @memberof BullLeaveRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullLeaveRes} BullLeaveRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullLeaveRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullLeaveRes();
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

    return BullLeaveRes;
})();

$root.ReadyBankerInfo = (function() {

    /**
     * Properties of a ReadyBankerInfo.
     * @exports IReadyBankerInfo
     * @interface IReadyBankerInfo
     * @property {string} playerId ReadyBankerInfo playerId
     * @property {string} userName ReadyBankerInfo userName
     * @property {string} gold ReadyBankerInfo gold
     */

    /**
     * Constructs a new ReadyBankerInfo.
     * @exports ReadyBankerInfo
     * @classdesc Represents a ReadyBankerInfo.
     * @implements IReadyBankerInfo
     * @constructor
     * @param {IReadyBankerInfo=} [p] Properties to set
     */
    function ReadyBankerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReadyBankerInfo playerId.
     * @member {string} playerId
     * @memberof ReadyBankerInfo
     * @instance
     */
    ReadyBankerInfo.prototype.playerId = "";

    /**
     * ReadyBankerInfo userName.
     * @member {string} userName
     * @memberof ReadyBankerInfo
     * @instance
     */
    ReadyBankerInfo.prototype.userName = "";

    /**
     * ReadyBankerInfo gold.
     * @member {string} gold
     * @memberof ReadyBankerInfo
     * @instance
     */
    ReadyBankerInfo.prototype.gold = "";

    /**
     * Creates a new ReadyBankerInfo instance using the specified properties.
     * @function create
     * @memberof ReadyBankerInfo
     * @static
     * @param {IReadyBankerInfo=} [properties] Properties to set
     * @returns {ReadyBankerInfo} ReadyBankerInfo instance
     */
    ReadyBankerInfo.create = function create(properties) {
        return new ReadyBankerInfo(properties);
    };

    /**
     * Encodes the specified ReadyBankerInfo message. Does not implicitly {@link ReadyBankerInfo.verify|verify} messages.
     * @function encode
     * @memberof ReadyBankerInfo
     * @static
     * @param {IReadyBankerInfo} m ReadyBankerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadyBankerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(18).string(m.userName);
        w.uint32(26).string(m.gold);
        return w;
    };

    /**
     * Decodes a ReadyBankerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ReadyBankerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReadyBankerInfo} ReadyBankerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadyBankerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReadyBankerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.userName = r.string();
                break;
            case 3:
                m.gold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("userName"))
            throw $util.ProtocolError("missing required 'userName'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return ReadyBankerInfo;
})();

$root.BullBankerListReq = (function() {

    /**
     * Properties of a BullBankerListReq.
     * @exports IBullBankerListReq
     * @interface IBullBankerListReq
     */

    /**
     * Constructs a new BullBankerListReq.
     * @exports BullBankerListReq
     * @classdesc Represents a BullBankerListReq.
     * @implements IBullBankerListReq
     * @constructor
     * @param {IBullBankerListReq=} [p] Properties to set
     */
    function BullBankerListReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new BullBankerListReq instance using the specified properties.
     * @function create
     * @memberof BullBankerListReq
     * @static
     * @param {IBullBankerListReq=} [properties] Properties to set
     * @returns {BullBankerListReq} BullBankerListReq instance
     */
    BullBankerListReq.create = function create(properties) {
        return new BullBankerListReq(properties);
    };

    /**
     * Encodes the specified BullBankerListReq message. Does not implicitly {@link BullBankerListReq.verify|verify} messages.
     * @function encode
     * @memberof BullBankerListReq
     * @static
     * @param {IBullBankerListReq} m BullBankerListReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullBankerListReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a BullBankerListReq message from the specified reader or buffer.
     * @function decode
     * @memberof BullBankerListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullBankerListReq} BullBankerListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullBankerListReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullBankerListReq();
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

    return BullBankerListReq;
})();

$root.BullBankerListRes = (function() {

    /**
     * Properties of a BullBankerListRes.
     * @exports IBullBankerListRes
     * @interface IBullBankerListRes
     * @property {number} bankerCoin BullBankerListRes bankerCoin
     * @property {Array.<IReadyBankerInfo>|null} [readyBankers] BullBankerListRes readyBankers
     */

    /**
     * Constructs a new BullBankerListRes.
     * @exports BullBankerListRes
     * @classdesc Represents a BullBankerListRes.
     * @implements IBullBankerListRes
     * @constructor
     * @param {IBullBankerListRes=} [p] Properties to set
     */
    function BullBankerListRes(p) {
        this.readyBankers = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullBankerListRes bankerCoin.
     * @member {number} bankerCoin
     * @memberof BullBankerListRes
     * @instance
     */
    BullBankerListRes.prototype.bankerCoin = 0;

    /**
     * BullBankerListRes readyBankers.
     * @member {Array.<IReadyBankerInfo>} readyBankers
     * @memberof BullBankerListRes
     * @instance
     */
    BullBankerListRes.prototype.readyBankers = $util.emptyArray;

    /**
     * Creates a new BullBankerListRes instance using the specified properties.
     * @function create
     * @memberof BullBankerListRes
     * @static
     * @param {IBullBankerListRes=} [properties] Properties to set
     * @returns {BullBankerListRes} BullBankerListRes instance
     */
    BullBankerListRes.create = function create(properties) {
        return new BullBankerListRes(properties);
    };

    /**
     * Encodes the specified BullBankerListRes message. Does not implicitly {@link BullBankerListRes.verify|verify} messages.
     * @function encode
     * @memberof BullBankerListRes
     * @static
     * @param {IBullBankerListRes} m BullBankerListRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullBankerListRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.bankerCoin);
        if (m.readyBankers != null && m.readyBankers.length) {
            for (var i = 0; i < m.readyBankers.length; ++i)
                $root.ReadyBankerInfo.encode(m.readyBankers[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BullBankerListRes message from the specified reader or buffer.
     * @function decode
     * @memberof BullBankerListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullBankerListRes} BullBankerListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullBankerListRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullBankerListRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bankerCoin = r.int32();
                break;
            case 2:
                if (!(m.readyBankers && m.readyBankers.length))
                    m.readyBankers = [];
                m.readyBankers.push($root.ReadyBankerInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bankerCoin"))
            throw $util.ProtocolError("missing required 'bankerCoin'", { instance: m });
        return m;
    };

    return BullBankerListRes;
})();

$root.BullPushDeal = (function() {

    /**
     * Properties of a BullPushDeal.
     * @exports IBullPushDeal
     * @interface IBullPushDeal
     * @property {Array.<ISingleAreaInfo>|null} [singleArea] BullPushDeal singleArea
     * @property {Array.<IBetResult>|null} [betResult] BullPushDeal betResult
     * @property {boolean} isMePlayed BullPushDeal isMePlayed
     * @property {Array.<ISettlementRoleInfo>|null} [settlementRoleInfo] BullPushDeal settlementRoleInfo
     */

    /**
     * Constructs a new BullPushDeal.
     * @exports BullPushDeal
     * @classdesc Represents a BullPushDeal.
     * @implements IBullPushDeal
     * @constructor
     * @param {IBullPushDeal=} [p] Properties to set
     */
    function BullPushDeal(p) {
        this.singleArea = [];
        this.betResult = [];
        this.settlementRoleInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullPushDeal singleArea.
     * @member {Array.<ISingleAreaInfo>} singleArea
     * @memberof BullPushDeal
     * @instance
     */
    BullPushDeal.prototype.singleArea = $util.emptyArray;

    /**
     * BullPushDeal betResult.
     * @member {Array.<IBetResult>} betResult
     * @memberof BullPushDeal
     * @instance
     */
    BullPushDeal.prototype.betResult = $util.emptyArray;

    /**
     * BullPushDeal isMePlayed.
     * @member {boolean} isMePlayed
     * @memberof BullPushDeal
     * @instance
     */
    BullPushDeal.prototype.isMePlayed = false;

    /**
     * BullPushDeal settlementRoleInfo.
     * @member {Array.<ISettlementRoleInfo>} settlementRoleInfo
     * @memberof BullPushDeal
     * @instance
     */
    BullPushDeal.prototype.settlementRoleInfo = $util.emptyArray;

    /**
     * Creates a new BullPushDeal instance using the specified properties.
     * @function create
     * @memberof BullPushDeal
     * @static
     * @param {IBullPushDeal=} [properties] Properties to set
     * @returns {BullPushDeal} BullPushDeal instance
     */
    BullPushDeal.create = function create(properties) {
        return new BullPushDeal(properties);
    };

    /**
     * Encodes the specified BullPushDeal message. Does not implicitly {@link BullPushDeal.verify|verify} messages.
     * @function encode
     * @memberof BullPushDeal
     * @static
     * @param {IBullPushDeal} m BullPushDeal message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullPushDeal.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.singleArea != null && m.singleArea.length) {
            for (var i = 0; i < m.singleArea.length; ++i)
                $root.SingleAreaInfo.encode(m.singleArea[i], w.uint32(10).fork()).ldelim();
        }
        if (m.betResult != null && m.betResult.length) {
            for (var i = 0; i < m.betResult.length; ++i)
                $root.BetResult.encode(m.betResult[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(24).bool(m.isMePlayed);
        if (m.settlementRoleInfo != null && m.settlementRoleInfo.length) {
            for (var i = 0; i < m.settlementRoleInfo.length; ++i)
                $root.SettlementRoleInfo.encode(m.settlementRoleInfo[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BullPushDeal message from the specified reader or buffer.
     * @function decode
     * @memberof BullPushDeal
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullPushDeal} BullPushDeal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullPushDeal.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullPushDeal();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.singleArea && m.singleArea.length))
                    m.singleArea = [];
                m.singleArea.push($root.SingleAreaInfo.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.betResult && m.betResult.length))
                    m.betResult = [];
                m.betResult.push($root.BetResult.decode(r, r.uint32()));
                break;
            case 3:
                m.isMePlayed = r.bool();
                break;
            case 4:
                if (!(m.settlementRoleInfo && m.settlementRoleInfo.length))
                    m.settlementRoleInfo = [];
                m.settlementRoleInfo.push($root.SettlementRoleInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isMePlayed"))
            throw $util.ProtocolError("missing required 'isMePlayed'", { instance: m });
        return m;
    };

    return BullPushDeal;
})();

$root.PlayerBetInfo = (function() {

    /**
     * Properties of a PlayerBetInfo.
     * @exports IPlayerBetInfo
     * @interface IPlayerBetInfo
     * @property {string} playerId PlayerBetInfo playerId
     * @property {number} betIndex PlayerBetInfo betIndex
     * @property {number} gold PlayerBetInfo gold
     */

    /**
     * Constructs a new PlayerBetInfo.
     * @exports PlayerBetInfo
     * @classdesc Represents a PlayerBetInfo.
     * @implements IPlayerBetInfo
     * @constructor
     * @param {IPlayerBetInfo=} [p] Properties to set
     */
    function PlayerBetInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerBetInfo playerId.
     * @member {string} playerId
     * @memberof PlayerBetInfo
     * @instance
     */
    PlayerBetInfo.prototype.playerId = "";

    /**
     * PlayerBetInfo betIndex.
     * @member {number} betIndex
     * @memberof PlayerBetInfo
     * @instance
     */
    PlayerBetInfo.prototype.betIndex = 0;

    /**
     * PlayerBetInfo gold.
     * @member {number} gold
     * @memberof PlayerBetInfo
     * @instance
     */
    PlayerBetInfo.prototype.gold = 0;

    /**
     * Creates a new PlayerBetInfo instance using the specified properties.
     * @function create
     * @memberof PlayerBetInfo
     * @static
     * @param {IPlayerBetInfo=} [properties] Properties to set
     * @returns {PlayerBetInfo} PlayerBetInfo instance
     */
    PlayerBetInfo.create = function create(properties) {
        return new PlayerBetInfo(properties);
    };

    /**
     * Encodes the specified PlayerBetInfo message. Does not implicitly {@link PlayerBetInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerBetInfo
     * @static
     * @param {IPlayerBetInfo} m PlayerBetInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerBetInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.betIndex);
        w.uint32(24).int32(m.gold);
        return w;
    };

    /**
     * Decodes a PlayerBetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerBetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerBetInfo} PlayerBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerBetInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerBetInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.betIndex = r.int32();
                break;
            case 3:
                m.gold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("betIndex"))
            throw $util.ProtocolError("missing required 'betIndex'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return PlayerBetInfo;
})();

$root.BullPushBetInfo = (function() {

    /**
     * Properties of a BullPushBetInfo.
     * @exports IBullPushBetInfo
     * @interface IBullPushBetInfo
     * @property {Array.<IPlayerBetInfo>|null} [playerBet] BullPushBetInfo playerBet
     * @property {Array.<IBetInfo>|null} [betInfo] BullPushBetInfo betInfo
     */

    /**
     * Constructs a new BullPushBetInfo.
     * @exports BullPushBetInfo
     * @classdesc Represents a BullPushBetInfo.
     * @implements IBullPushBetInfo
     * @constructor
     * @param {IBullPushBetInfo=} [p] Properties to set
     */
    function BullPushBetInfo(p) {
        this.playerBet = [];
        this.betInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullPushBetInfo playerBet.
     * @member {Array.<IPlayerBetInfo>} playerBet
     * @memberof BullPushBetInfo
     * @instance
     */
    BullPushBetInfo.prototype.playerBet = $util.emptyArray;

    /**
     * BullPushBetInfo betInfo.
     * @member {Array.<IBetInfo>} betInfo
     * @memberof BullPushBetInfo
     * @instance
     */
    BullPushBetInfo.prototype.betInfo = $util.emptyArray;

    /**
     * Creates a new BullPushBetInfo instance using the specified properties.
     * @function create
     * @memberof BullPushBetInfo
     * @static
     * @param {IBullPushBetInfo=} [properties] Properties to set
     * @returns {BullPushBetInfo} BullPushBetInfo instance
     */
    BullPushBetInfo.create = function create(properties) {
        return new BullPushBetInfo(properties);
    };

    /**
     * Encodes the specified BullPushBetInfo message. Does not implicitly {@link BullPushBetInfo.verify|verify} messages.
     * @function encode
     * @memberof BullPushBetInfo
     * @static
     * @param {IBullPushBetInfo} m BullPushBetInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullPushBetInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerBet != null && m.playerBet.length) {
            for (var i = 0; i < m.playerBet.length; ++i)
                $root.PlayerBetInfo.encode(m.playerBet[i], w.uint32(10).fork()).ldelim();
        }
        if (m.betInfo != null && m.betInfo.length) {
            for (var i = 0; i < m.betInfo.length; ++i)
                $root.BetInfo.encode(m.betInfo[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BullPushBetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BullPushBetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullPushBetInfo} BullPushBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullPushBetInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullPushBetInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerBet && m.playerBet.length))
                    m.playerBet = [];
                m.playerBet.push($root.PlayerBetInfo.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.betInfo && m.betInfo.length))
                    m.betInfo = [];
                m.betInfo.push($root.BetInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BullPushBetInfo;
})();

$root.BullPushState = (function() {

    /**
     * Properties of a BullPushState.
     * @exports IBullPushState
     * @interface IBullPushState
     * @property {number} status BullPushState status
     * @property {number} duration BullPushState duration
     */

    /**
     * Constructs a new BullPushState.
     * @exports BullPushState
     * @classdesc Represents a BullPushState.
     * @implements IBullPushState
     * @constructor
     * @param {IBullPushState=} [p] Properties to set
     */
    function BullPushState(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullPushState status.
     * @member {number} status
     * @memberof BullPushState
     * @instance
     */
    BullPushState.prototype.status = 0;

    /**
     * BullPushState duration.
     * @member {number} duration
     * @memberof BullPushState
     * @instance
     */
    BullPushState.prototype.duration = 0;

    /**
     * Creates a new BullPushState instance using the specified properties.
     * @function create
     * @memberof BullPushState
     * @static
     * @param {IBullPushState=} [properties] Properties to set
     * @returns {BullPushState} BullPushState instance
     */
    BullPushState.create = function create(properties) {
        return new BullPushState(properties);
    };

    /**
     * Encodes the specified BullPushState message. Does not implicitly {@link BullPushState.verify|verify} messages.
     * @function encode
     * @memberof BullPushState
     * @static
     * @param {IBullPushState} m BullPushState message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullPushState.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.status);
        w.uint32(16).int32(m.duration);
        return w;
    };

    /**
     * Decodes a BullPushState message from the specified reader or buffer.
     * @function decode
     * @memberof BullPushState
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullPushState} BullPushState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullPushState.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullPushState();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.status = r.int32();
                break;
            case 2:
                m.duration = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("duration"))
            throw $util.ProtocolError("missing required 'duration'", { instance: m });
        return m;
    };

    return BullPushState;
})();

$root.BullPushPlayerLeave = (function() {

    /**
     * Properties of a BullPushPlayerLeave.
     * @exports IBullPushPlayerLeave
     * @interface IBullPushPlayerLeave
     * @property {string} playerId BullPushPlayerLeave playerId
     */

    /**
     * Constructs a new BullPushPlayerLeave.
     * @exports BullPushPlayerLeave
     * @classdesc Represents a BullPushPlayerLeave.
     * @implements IBullPushPlayerLeave
     * @constructor
     * @param {IBullPushPlayerLeave=} [p] Properties to set
     */
    function BullPushPlayerLeave(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullPushPlayerLeave playerId.
     * @member {string} playerId
     * @memberof BullPushPlayerLeave
     * @instance
     */
    BullPushPlayerLeave.prototype.playerId = "";

    /**
     * Creates a new BullPushPlayerLeave instance using the specified properties.
     * @function create
     * @memberof BullPushPlayerLeave
     * @static
     * @param {IBullPushPlayerLeave=} [properties] Properties to set
     * @returns {BullPushPlayerLeave} BullPushPlayerLeave instance
     */
    BullPushPlayerLeave.create = function create(properties) {
        return new BullPushPlayerLeave(properties);
    };

    /**
     * Encodes the specified BullPushPlayerLeave message. Does not implicitly {@link BullPushPlayerLeave.verify|verify} messages.
     * @function encode
     * @memberof BullPushPlayerLeave
     * @static
     * @param {IBullPushPlayerLeave} m BullPushPlayerLeave message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullPushPlayerLeave.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        return w;
    };

    /**
     * Decodes a BullPushPlayerLeave message from the specified reader or buffer.
     * @function decode
     * @memberof BullPushPlayerLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullPushPlayerLeave} BullPushPlayerLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullPushPlayerLeave.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullPushPlayerLeave();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        return m;
    };

    return BullPushPlayerLeave;
})();

$root.BullBankerReq = (function() {

    /**
     * Properties of a BullBankerReq.
     * @exports IBullBankerReq
     * @interface IBullBankerReq
     */

    /**
     * Constructs a new BullBankerReq.
     * @exports BullBankerReq
     * @classdesc Represents a BullBankerReq.
     * @implements IBullBankerReq
     * @constructor
     * @param {IBullBankerReq=} [p] Properties to set
     */
    function BullBankerReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new BullBankerReq instance using the specified properties.
     * @function create
     * @memberof BullBankerReq
     * @static
     * @param {IBullBankerReq=} [properties] Properties to set
     * @returns {BullBankerReq} BullBankerReq instance
     */
    BullBankerReq.create = function create(properties) {
        return new BullBankerReq(properties);
    };

    /**
     * Encodes the specified BullBankerReq message. Does not implicitly {@link BullBankerReq.verify|verify} messages.
     * @function encode
     * @memberof BullBankerReq
     * @static
     * @param {IBullBankerReq} m BullBankerReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullBankerReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a BullBankerReq message from the specified reader or buffer.
     * @function decode
     * @memberof BullBankerReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullBankerReq} BullBankerReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullBankerReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullBankerReq();
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

    return BullBankerReq;
})();

$root.BullBankerRes = (function() {

    /**
     * Properties of a BullBankerRes.
     * @exports IBullBankerRes
     * @interface IBullBankerRes
     * @property {boolean} isSuccess BullBankerRes isSuccess
     * @property {string|null} [tips] BullBankerRes tips
     */

    /**
     * Constructs a new BullBankerRes.
     * @exports BullBankerRes
     * @classdesc Represents a BullBankerRes.
     * @implements IBullBankerRes
     * @constructor
     * @param {IBullBankerRes=} [p] Properties to set
     */
    function BullBankerRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullBankerRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof BullBankerRes
     * @instance
     */
    BullBankerRes.prototype.isSuccess = false;

    /**
     * BullBankerRes tips.
     * @member {string} tips
     * @memberof BullBankerRes
     * @instance
     */
    BullBankerRes.prototype.tips = "";

    /**
     * Creates a new BullBankerRes instance using the specified properties.
     * @function create
     * @memberof BullBankerRes
     * @static
     * @param {IBullBankerRes=} [properties] Properties to set
     * @returns {BullBankerRes} BullBankerRes instance
     */
    BullBankerRes.create = function create(properties) {
        return new BullBankerRes(properties);
    };

    /**
     * Encodes the specified BullBankerRes message. Does not implicitly {@link BullBankerRes.verify|verify} messages.
     * @function encode
     * @memberof BullBankerRes
     * @static
     * @param {IBullBankerRes} m BullBankerRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullBankerRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a BullBankerRes message from the specified reader or buffer.
     * @function decode
     * @memberof BullBankerRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullBankerRes} BullBankerRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullBankerRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullBankerRes();
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

    return BullBankerRes;
})();

$root.BullCancelBankerReq = (function() {

    /**
     * Properties of a BullCancelBankerReq.
     * @exports IBullCancelBankerReq
     * @interface IBullCancelBankerReq
     */

    /**
     * Constructs a new BullCancelBankerReq.
     * @exports BullCancelBankerReq
     * @classdesc Represents a BullCancelBankerReq.
     * @implements IBullCancelBankerReq
     * @constructor
     * @param {IBullCancelBankerReq=} [p] Properties to set
     */
    function BullCancelBankerReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new BullCancelBankerReq instance using the specified properties.
     * @function create
     * @memberof BullCancelBankerReq
     * @static
     * @param {IBullCancelBankerReq=} [properties] Properties to set
     * @returns {BullCancelBankerReq} BullCancelBankerReq instance
     */
    BullCancelBankerReq.create = function create(properties) {
        return new BullCancelBankerReq(properties);
    };

    /**
     * Encodes the specified BullCancelBankerReq message. Does not implicitly {@link BullCancelBankerReq.verify|verify} messages.
     * @function encode
     * @memberof BullCancelBankerReq
     * @static
     * @param {IBullCancelBankerReq} m BullCancelBankerReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullCancelBankerReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a BullCancelBankerReq message from the specified reader or buffer.
     * @function decode
     * @memberof BullCancelBankerReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullCancelBankerReq} BullCancelBankerReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullCancelBankerReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullCancelBankerReq();
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

    return BullCancelBankerReq;
})();

$root.BullCancelBankerRes = (function() {

    /**
     * Properties of a BullCancelBankerRes.
     * @exports IBullCancelBankerRes
     * @interface IBullCancelBankerRes
     * @property {boolean} isSuccess BullCancelBankerRes isSuccess
     * @property {string|null} [tips] BullCancelBankerRes tips
     */

    /**
     * Constructs a new BullCancelBankerRes.
     * @exports BullCancelBankerRes
     * @classdesc Represents a BullCancelBankerRes.
     * @implements IBullCancelBankerRes
     * @constructor
     * @param {IBullCancelBankerRes=} [p] Properties to set
     */
    function BullCancelBankerRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullCancelBankerRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof BullCancelBankerRes
     * @instance
     */
    BullCancelBankerRes.prototype.isSuccess = false;

    /**
     * BullCancelBankerRes tips.
     * @member {string} tips
     * @memberof BullCancelBankerRes
     * @instance
     */
    BullCancelBankerRes.prototype.tips = "";

    /**
     * Creates a new BullCancelBankerRes instance using the specified properties.
     * @function create
     * @memberof BullCancelBankerRes
     * @static
     * @param {IBullCancelBankerRes=} [properties] Properties to set
     * @returns {BullCancelBankerRes} BullCancelBankerRes instance
     */
    BullCancelBankerRes.create = function create(properties) {
        return new BullCancelBankerRes(properties);
    };

    /**
     * Encodes the specified BullCancelBankerRes message. Does not implicitly {@link BullCancelBankerRes.verify|verify} messages.
     * @function encode
     * @memberof BullCancelBankerRes
     * @static
     * @param {IBullCancelBankerRes} m BullCancelBankerRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullCancelBankerRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a BullCancelBankerRes message from the specified reader or buffer.
     * @function decode
     * @memberof BullCancelBankerRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullCancelBankerRes} BullCancelBankerRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullCancelBankerRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullCancelBankerRes();
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

    return BullCancelBankerRes;
})();

$root.PushBankerInfo = (function() {

    /**
     * Properties of a PushBankerInfo.
     * @exports IPushBankerInfo
     * @interface IPushBankerInfo
     * @property {boolean} isSystemBanker PushBankerInfo isSystemBanker
     * @property {IBRNNBankerInfo|null} [bankerInfo] PushBankerInfo bankerInfo
     */

    /**
     * Constructs a new PushBankerInfo.
     * @exports PushBankerInfo
     * @classdesc Represents a PushBankerInfo.
     * @implements IPushBankerInfo
     * @constructor
     * @param {IPushBankerInfo=} [p] Properties to set
     */
    function PushBankerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushBankerInfo isSystemBanker.
     * @member {boolean} isSystemBanker
     * @memberof PushBankerInfo
     * @instance
     */
    PushBankerInfo.prototype.isSystemBanker = false;

    /**
     * PushBankerInfo bankerInfo.
     * @member {IBRNNBankerInfo|null|undefined} bankerInfo
     * @memberof PushBankerInfo
     * @instance
     */
    PushBankerInfo.prototype.bankerInfo = null;

    /**
     * Creates a new PushBankerInfo instance using the specified properties.
     * @function create
     * @memberof PushBankerInfo
     * @static
     * @param {IPushBankerInfo=} [properties] Properties to set
     * @returns {PushBankerInfo} PushBankerInfo instance
     */
    PushBankerInfo.create = function create(properties) {
        return new PushBankerInfo(properties);
    };

    /**
     * Encodes the specified PushBankerInfo message. Does not implicitly {@link PushBankerInfo.verify|verify} messages.
     * @function encode
     * @memberof PushBankerInfo
     * @static
     * @param {IPushBankerInfo} m PushBankerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushBankerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSystemBanker);
        if (m.bankerInfo != null && m.hasOwnProperty("bankerInfo"))
            $root.BRNNBankerInfo.encode(m.bankerInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a PushBankerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushBankerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushBankerInfo} PushBankerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushBankerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushBankerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSystemBanker = r.bool();
                break;
            case 2:
                m.bankerInfo = $root.BRNNBankerInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isSystemBanker"))
            throw $util.ProtocolError("missing required 'isSystemBanker'", { instance: m });
        return m;
    };

    return PushBankerInfo;
})();

$root.PushSeatInfo = (function() {

    /**
     * Properties of a PushSeatInfo.
     * @exports IPushSeatInfo
     * @interface IPushSeatInfo
     * @property {Array.<IBRNNSeatInfo>|null} [seatInfo] PushSeatInfo seatInfo
     */

    /**
     * Constructs a new PushSeatInfo.
     * @exports PushSeatInfo
     * @classdesc Represents a PushSeatInfo.
     * @implements IPushSeatInfo
     * @constructor
     * @param {IPushSeatInfo=} [p] Properties to set
     */
    function PushSeatInfo(p) {
        this.seatInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushSeatInfo seatInfo.
     * @member {Array.<IBRNNSeatInfo>} seatInfo
     * @memberof PushSeatInfo
     * @instance
     */
    PushSeatInfo.prototype.seatInfo = $util.emptyArray;

    /**
     * Creates a new PushSeatInfo instance using the specified properties.
     * @function create
     * @memberof PushSeatInfo
     * @static
     * @param {IPushSeatInfo=} [properties] Properties to set
     * @returns {PushSeatInfo} PushSeatInfo instance
     */
    PushSeatInfo.create = function create(properties) {
        return new PushSeatInfo(properties);
    };

    /**
     * Encodes the specified PushSeatInfo message. Does not implicitly {@link PushSeatInfo.verify|verify} messages.
     * @function encode
     * @memberof PushSeatInfo
     * @static
     * @param {IPushSeatInfo} m PushSeatInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushSeatInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.seatInfo != null && m.seatInfo.length) {
            for (var i = 0; i < m.seatInfo.length; ++i)
                $root.BRNNSeatInfo.encode(m.seatInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushSeatInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushSeatInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushSeatInfo} PushSeatInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushSeatInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushSeatInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.seatInfo && m.seatInfo.length))
                    m.seatInfo = [];
                m.seatInfo.push($root.BRNNSeatInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushSeatInfo;
})();

$root.BullMemberListReq = (function() {

    /**
     * Properties of a BullMemberListReq.
     * @exports IBullMemberListReq
     * @interface IBullMemberListReq
     */

    /**
     * Constructs a new BullMemberListReq.
     * @exports BullMemberListReq
     * @classdesc Represents a BullMemberListReq.
     * @implements IBullMemberListReq
     * @constructor
     * @param {IBullMemberListReq=} [p] Properties to set
     */
    function BullMemberListReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new BullMemberListReq instance using the specified properties.
     * @function create
     * @memberof BullMemberListReq
     * @static
     * @param {IBullMemberListReq=} [properties] Properties to set
     * @returns {BullMemberListReq} BullMemberListReq instance
     */
    BullMemberListReq.create = function create(properties) {
        return new BullMemberListReq(properties);
    };

    /**
     * Encodes the specified BullMemberListReq message. Does not implicitly {@link BullMemberListReq.verify|verify} messages.
     * @function encode
     * @memberof BullMemberListReq
     * @static
     * @param {IBullMemberListReq} m BullMemberListReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullMemberListReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a BullMemberListReq message from the specified reader or buffer.
     * @function decode
     * @memberof BullMemberListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullMemberListReq} BullMemberListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullMemberListReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullMemberListReq();
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

    return BullMemberListReq;
})();

$root.BullMemberListRes = (function() {

    /**
     * Properties of a BullMemberListRes.
     * @exports IBullMemberListRes
     * @interface IBullMemberListRes
     * @property {Array.<IBRNNMember>|null} [member] BullMemberListRes member
     */

    /**
     * Constructs a new BullMemberListRes.
     * @exports BullMemberListRes
     * @classdesc Represents a BullMemberListRes.
     * @implements IBullMemberListRes
     * @constructor
     * @param {IBullMemberListRes=} [p] Properties to set
     */
    function BullMemberListRes(p) {
        this.member = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BullMemberListRes member.
     * @member {Array.<IBRNNMember>} member
     * @memberof BullMemberListRes
     * @instance
     */
    BullMemberListRes.prototype.member = $util.emptyArray;

    /**
     * Creates a new BullMemberListRes instance using the specified properties.
     * @function create
     * @memberof BullMemberListRes
     * @static
     * @param {IBullMemberListRes=} [properties] Properties to set
     * @returns {BullMemberListRes} BullMemberListRes instance
     */
    BullMemberListRes.create = function create(properties) {
        return new BullMemberListRes(properties);
    };

    /**
     * Encodes the specified BullMemberListRes message. Does not implicitly {@link BullMemberListRes.verify|verify} messages.
     * @function encode
     * @memberof BullMemberListRes
     * @static
     * @param {IBullMemberListRes} m BullMemberListRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BullMemberListRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.member != null && m.member.length) {
            for (var i = 0; i < m.member.length; ++i)
                $root.BRNNMember.encode(m.member[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BullMemberListRes message from the specified reader or buffer.
     * @function decode
     * @memberof BullMemberListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BullMemberListRes} BullMemberListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BullMemberListRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BullMemberListRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.member && m.member.length))
                    m.member = [];
                m.member.push($root.BRNNMember.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BullMemberListRes;
})();

/**
 * CardColor enum.
 * @exports CardColor
 * @enum {string}
 * @property {number} Spade=1 Spade value
 * @property {number} Red=2 Red value
 * @property {number} Plum=3 Plum value
 * @property {number} Block=4 Block value
 * @property {number} Evil=5 Evil value
 */
$root.CardColor = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Spade"] = 1;
    values[valuesById[2] = "Red"] = 2;
    values[valuesById[3] = "Plum"] = 3;
    values[valuesById[4] = "Block"] = 4;
    values[valuesById[5] = "Evil"] = 5;
    return values;
})();

/**
 * CardSize enum.
 * @exports CardSize
 * @enum {string}
 * @property {number} C3=3 C3 value
 * @property {number} C4=4 C4 value
 * @property {number} C5=5 C5 value
 * @property {number} C6=6 C6 value
 * @property {number} C7=7 C7 value
 * @property {number} C8=8 C8 value
 * @property {number} C9=9 C9 value
 * @property {number} C10=10 C10 value
 * @property {number} CJ=11 CJ value
 * @property {number} CQ=12 CQ value
 * @property {number} CK=13 CK value
 * @property {number} CA=14 CA value
 * @property {number} C2=15 C2 value
 * @property {number} CSMALL=16 CSMALL value
 * @property {number} CBIG=17 CBIG value
 */
$root.CardSize = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[3] = "C3"] = 3;
    values[valuesById[4] = "C4"] = 4;
    values[valuesById[5] = "C5"] = 5;
    values[valuesById[6] = "C6"] = 6;
    values[valuesById[7] = "C7"] = 7;
    values[valuesById[8] = "C8"] = 8;
    values[valuesById[9] = "C9"] = 9;
    values[valuesById[10] = "C10"] = 10;
    values[valuesById[11] = "CJ"] = 11;
    values[valuesById[12] = "CQ"] = 12;
    values[valuesById[13] = "CK"] = 13;
    values[valuesById[14] = "CA"] = 14;
    values[valuesById[15] = "C2"] = 15;
    values[valuesById[16] = "CSMALL"] = 16;
    values[valuesById[17] = "CBIG"] = 17;
    return values;
})();

/**
 * MemberListType enum.
 * @exports MemberListType
 * @enum {string}
 * @property {number} Richer=1 Richer value
 * @property {number} Clever=2 Clever value
 * @property {number} PlayerBanker=3 PlayerBanker value
 * @property {number} SystemBanker=4 SystemBanker value
 * @property {number} Common=5 Common value
 */
$root.MemberListType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Richer"] = 1;
    values[valuesById[2] = "Clever"] = 2;
    values[valuesById[3] = "PlayerBanker"] = 3;
    values[valuesById[4] = "SystemBanker"] = 4;
    values[valuesById[5] = "Common"] = 5;
    return values;
})();

$root.RoleInfo = (function() {

    /**
     * Properties of a RoleInfo.
     * @exports IRoleInfo
     * @interface IRoleInfo
     * @property {string} playerId RoleInfo playerId
     * @property {string} userName RoleInfo userName
     * @property {string} headImageUrl RoleInfo headImageUrl
     * @property {string} headbox RoleInfo headbox
     * @property {number} vipLv RoleInfo vipLv
     * @property {string} gold RoleInfo gold
     * @property {number|null} [totalWin] RoleInfo totalWin
     * @property {number|null} [totalBet] RoleInfo totalBet
     * @property {MemberListType|null} [type] RoleInfo type
     * @property {number|null} [rankIndex] RoleInfo rankIndex
     */

    /**
     * Constructs a new RoleInfo.
     * @exports RoleInfo
     * @classdesc Represents a RoleInfo.
     * @implements IRoleInfo
     * @constructor
     * @param {IRoleInfo=} [p] Properties to set
     */
    function RoleInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoleInfo playerId.
     * @member {string} playerId
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.playerId = "";

    /**
     * RoleInfo userName.
     * @member {string} userName
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.userName = "";

    /**
     * RoleInfo headImageUrl.
     * @member {string} headImageUrl
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.headImageUrl = "";

    /**
     * RoleInfo headbox.
     * @member {string} headbox
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.headbox = "";

    /**
     * RoleInfo vipLv.
     * @member {number} vipLv
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.vipLv = 0;

    /**
     * RoleInfo gold.
     * @member {string} gold
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.gold = "";

    /**
     * RoleInfo totalWin.
     * @member {number} totalWin
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.totalWin = 0;

    /**
     * RoleInfo totalBet.
     * @member {number} totalBet
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.totalBet = 0;

    /**
     * RoleInfo type.
     * @member {MemberListType} type
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.type = 1;

    /**
     * RoleInfo rankIndex.
     * @member {number} rankIndex
     * @memberof RoleInfo
     * @instance
     */
    RoleInfo.prototype.rankIndex = 0;

    /**
     * Creates a new RoleInfo instance using the specified properties.
     * @function create
     * @memberof RoleInfo
     * @static
     * @param {IRoleInfo=} [properties] Properties to set
     * @returns {RoleInfo} RoleInfo instance
     */
    RoleInfo.create = function create(properties) {
        return new RoleInfo(properties);
    };

    /**
     * Encodes the specified RoleInfo message. Does not implicitly {@link RoleInfo.verify|verify} messages.
     * @function encode
     * @memberof RoleInfo
     * @static
     * @param {IRoleInfo} m RoleInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(18).string(m.userName);
        w.uint32(26).string(m.headImageUrl);
        w.uint32(34).string(m.headbox);
        w.uint32(40).int32(m.vipLv);
        w.uint32(50).string(m.gold);
        if (m.totalWin != null && m.hasOwnProperty("totalWin"))
            w.uint32(64).int32(m.totalWin);
        if (m.totalBet != null && m.hasOwnProperty("totalBet"))
            w.uint32(72).int32(m.totalBet);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(80).int32(m.type);
        if (m.rankIndex != null && m.hasOwnProperty("rankIndex"))
            w.uint32(88).int32(m.rankIndex);
        return w;
    };

    /**
     * Decodes a RoleInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleInfo} RoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.userName = r.string();
                break;
            case 3:
                m.headImageUrl = r.string();
                break;
            case 4:
                m.headbox = r.string();
                break;
            case 5:
                m.vipLv = r.int32();
                break;
            case 6:
                m.gold = r.string();
                break;
            case 8:
                m.totalWin = r.int32();
                break;
            case 9:
                m.totalBet = r.int32();
                break;
            case 10:
                m.type = r.int32();
                break;
            case 11:
                m.rankIndex = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("userName"))
            throw $util.ProtocolError("missing required 'userName'", { instance: m });
        if (!m.hasOwnProperty("headImageUrl"))
            throw $util.ProtocolError("missing required 'headImageUrl'", { instance: m });
        if (!m.hasOwnProperty("headbox"))
            throw $util.ProtocolError("missing required 'headbox'", { instance: m });
        if (!m.hasOwnProperty("vipLv"))
            throw $util.ProtocolError("missing required 'vipLv'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return RoleInfo;
})();

$root.RankingListReq = (function() {

    /**
     * Properties of a RankingListReq.
     * @exports IRankingListReq
     * @interface IRankingListReq
     */

    /**
     * Constructs a new RankingListReq.
     * @exports RankingListReq
     * @classdesc Represents a RankingListReq.
     * @implements IRankingListReq
     * @constructor
     * @param {IRankingListReq=} [p] Properties to set
     */
    function RankingListReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RankingListReq instance using the specified properties.
     * @function create
     * @memberof RankingListReq
     * @static
     * @param {IRankingListReq=} [properties] Properties to set
     * @returns {RankingListReq} RankingListReq instance
     */
    RankingListReq.create = function create(properties) {
        return new RankingListReq(properties);
    };

    /**
     * Encodes the specified RankingListReq message. Does not implicitly {@link RankingListReq.verify|verify} messages.
     * @function encode
     * @memberof RankingListReq
     * @static
     * @param {IRankingListReq} m RankingListReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankingListReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RankingListReq message from the specified reader or buffer.
     * @function decode
     * @memberof RankingListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RankingListReq} RankingListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankingListReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RankingListReq();
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

    return RankingListReq;
})();

$root.RankingListRes = (function() {

    /**
     * Properties of a RankingListRes.
     * @exports IRankingListRes
     * @interface IRankingListRes
     * @property {Array.<IRoleInfo>|null} [rankingList] RankingListRes rankingList
     */

    /**
     * Constructs a new RankingListRes.
     * @exports RankingListRes
     * @classdesc Represents a RankingListRes.
     * @implements IRankingListRes
     * @constructor
     * @param {IRankingListRes=} [p] Properties to set
     */
    function RankingListRes(p) {
        this.rankingList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RankingListRes rankingList.
     * @member {Array.<IRoleInfo>} rankingList
     * @memberof RankingListRes
     * @instance
     */
    RankingListRes.prototype.rankingList = $util.emptyArray;

    /**
     * Creates a new RankingListRes instance using the specified properties.
     * @function create
     * @memberof RankingListRes
     * @static
     * @param {IRankingListRes=} [properties] Properties to set
     * @returns {RankingListRes} RankingListRes instance
     */
    RankingListRes.create = function create(properties) {
        return new RankingListRes(properties);
    };

    /**
     * Encodes the specified RankingListRes message. Does not implicitly {@link RankingListRes.verify|verify} messages.
     * @function encode
     * @memberof RankingListRes
     * @static
     * @param {IRankingListRes} m RankingListRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankingListRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.rankingList != null && m.rankingList.length) {
            for (var i = 0; i < m.rankingList.length; ++i)
                $root.RoleInfo.encode(m.rankingList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RankingListRes message from the specified reader or buffer.
     * @function decode
     * @memberof RankingListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RankingListRes} RankingListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankingListRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RankingListRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.rankingList && m.rankingList.length))
                    m.rankingList = [];
                m.rankingList.push($root.RoleInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RankingListRes;
})();

$root.SettlementRoleInfo = (function() {

    /**
     * Properties of a SettlementRoleInfo.
     * @exports ISettlementRoleInfo
     * @interface ISettlementRoleInfo
     * @property {string} playerId SettlementRoleInfo playerId
     * @property {string|null} [userName] SettlementRoleInfo userName
     * @property {string|null} [headImageUrl] SettlementRoleInfo headImageUrl
     * @property {string|null} [headbox] SettlementRoleInfo headbox
     * @property {number|null} [vipLv] SettlementRoleInfo vipLv
     * @property {number} resultGold SettlementRoleInfo resultGold
     * @property {number} index SettlementRoleInfo index
     * @property {MemberListType} type SettlementRoleInfo type
     */

    /**
     * Constructs a new SettlementRoleInfo.
     * @exports SettlementRoleInfo
     * @classdesc Represents a SettlementRoleInfo.
     * @implements ISettlementRoleInfo
     * @constructor
     * @param {ISettlementRoleInfo=} [p] Properties to set
     */
    function SettlementRoleInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SettlementRoleInfo playerId.
     * @member {string} playerId
     * @memberof SettlementRoleInfo
     * @instance
     */
    SettlementRoleInfo.prototype.playerId = "";

    /**
     * SettlementRoleInfo userName.
     * @member {string} userName
     * @memberof SettlementRoleInfo
     * @instance
     */
    SettlementRoleInfo.prototype.userName = "";

    /**
     * SettlementRoleInfo headImageUrl.
     * @member {string} headImageUrl
     * @memberof SettlementRoleInfo
     * @instance
     */
    SettlementRoleInfo.prototype.headImageUrl = "";

    /**
     * SettlementRoleInfo headbox.
     * @member {string} headbox
     * @memberof SettlementRoleInfo
     * @instance
     */
    SettlementRoleInfo.prototype.headbox = "";

    /**
     * SettlementRoleInfo vipLv.
     * @member {number} vipLv
     * @memberof SettlementRoleInfo
     * @instance
     */
    SettlementRoleInfo.prototype.vipLv = 0;

    /**
     * SettlementRoleInfo resultGold.
     * @member {number} resultGold
     * @memberof SettlementRoleInfo
     * @instance
     */
    SettlementRoleInfo.prototype.resultGold = 0;

    /**
     * SettlementRoleInfo index.
     * @member {number} index
     * @memberof SettlementRoleInfo
     * @instance
     */
    SettlementRoleInfo.prototype.index = 0;

    /**
     * SettlementRoleInfo type.
     * @member {MemberListType} type
     * @memberof SettlementRoleInfo
     * @instance
     */
    SettlementRoleInfo.prototype.type = 1;

    /**
     * Creates a new SettlementRoleInfo instance using the specified properties.
     * @function create
     * @memberof SettlementRoleInfo
     * @static
     * @param {ISettlementRoleInfo=} [properties] Properties to set
     * @returns {SettlementRoleInfo} SettlementRoleInfo instance
     */
    SettlementRoleInfo.create = function create(properties) {
        return new SettlementRoleInfo(properties);
    };

    /**
     * Encodes the specified SettlementRoleInfo message. Does not implicitly {@link SettlementRoleInfo.verify|verify} messages.
     * @function encode
     * @memberof SettlementRoleInfo
     * @static
     * @param {ISettlementRoleInfo} m SettlementRoleInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettlementRoleInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.userName != null && m.hasOwnProperty("userName"))
            w.uint32(18).string(m.userName);
        if (m.headImageUrl != null && m.hasOwnProperty("headImageUrl"))
            w.uint32(26).string(m.headImageUrl);
        if (m.headbox != null && m.hasOwnProperty("headbox"))
            w.uint32(34).string(m.headbox);
        if (m.vipLv != null && m.hasOwnProperty("vipLv"))
            w.uint32(40).int32(m.vipLv);
        w.uint32(56).int32(m.resultGold);
        w.uint32(64).int32(m.index);
        w.uint32(72).int32(m.type);
        return w;
    };

    /**
     * Decodes a SettlementRoleInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SettlementRoleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SettlementRoleInfo} SettlementRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettlementRoleInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SettlementRoleInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.userName = r.string();
                break;
            case 3:
                m.headImageUrl = r.string();
                break;
            case 4:
                m.headbox = r.string();
                break;
            case 5:
                m.vipLv = r.int32();
                break;
            case 7:
                m.resultGold = r.int32();
                break;
            case 8:
                m.index = r.int32();
                break;
            case 9:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("resultGold"))
            throw $util.ProtocolError("missing required 'resultGold'", { instance: m });
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    return SettlementRoleInfo;
})();

/**
 * WinStatus enum.
 * @exports WinStatus
 * @enum {string}
 * @property {number} RedWinStatus=1 RedWinStatus value
 * @property {number} BlackWinStatus=2 BlackWinStatus value
 * @property {number} EqualWinStatus=3 EqualWinStatus value
 */
$root.WinStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "RedWinStatus"] = 1;
    values[valuesById[2] = "BlackWinStatus"] = 2;
    values[valuesById[3] = "EqualWinStatus"] = 3;
    return values;
})();

/**
 * CommonChipType enum.
 * @exports CommonChipType
 * @enum {string}
 * @property {number} CommonChip1=100 CommonChip1 value
 * @property {number} CommonChip10=1000 CommonChip10 value
 * @property {number} CommonChip50=5000 CommonChip50 value
 * @property {number} CommonChip100=10000 CommonChip100 value
 * @property {number} CommonChip500=50000 CommonChip500 value
 * @property {number} CommonChip1000=100000 CommonChip1000 value
 */
$root.CommonChipType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[100] = "CommonChip1"] = 100;
    values[valuesById[1000] = "CommonChip10"] = 1000;
    values[valuesById[5000] = "CommonChip50"] = 5000;
    values[valuesById[10000] = "CommonChip100"] = 10000;
    values[valuesById[50000] = "CommonChip500"] = 50000;
    values[valuesById[100000] = "CommonChip1000"] = 100000;
    return values;
})();

$root.KickoutRoom = (function() {

    /**
     * Properties of a KickoutRoom.
     * @exports IKickoutRoom
     * @interface IKickoutRoom
     * @property {string|null} [tips] KickoutRoom tips
     */

    /**
     * Constructs a new KickoutRoom.
     * @exports KickoutRoom
     * @classdesc Represents a KickoutRoom.
     * @implements IKickoutRoom
     * @constructor
     * @param {IKickoutRoom=} [p] Properties to set
     */
    function KickoutRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * KickoutRoom tips.
     * @member {string} tips
     * @memberof KickoutRoom
     * @instance
     */
    KickoutRoom.prototype.tips = "";

    /**
     * Creates a new KickoutRoom instance using the specified properties.
     * @function create
     * @memberof KickoutRoom
     * @static
     * @param {IKickoutRoom=} [properties] Properties to set
     * @returns {KickoutRoom} KickoutRoom instance
     */
    KickoutRoom.create = function create(properties) {
        return new KickoutRoom(properties);
    };

    /**
     * Encodes the specified KickoutRoom message. Does not implicitly {@link KickoutRoom.verify|verify} messages.
     * @function encode
     * @memberof KickoutRoom
     * @static
     * @param {IKickoutRoom} m KickoutRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KickoutRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(10).string(m.tips);
        return w;
    };

    /**
     * Decodes a KickoutRoom message from the specified reader or buffer.
     * @function decode
     * @memberof KickoutRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {KickoutRoom} KickoutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KickoutRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.KickoutRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return KickoutRoom;
})();

$root.PushAlreadyGame = (function() {

    /**
     * Properties of a PushAlreadyGame.
     * @exports IPushAlreadyGame
     * @interface IPushAlreadyGame
     * @property {string} tips PushAlreadyGame tips
     * @property {IPlayInfo} playInfo PushAlreadyGame playInfo
     * @property {string|null} [extra] PushAlreadyGame extra
     */

    /**
     * Constructs a new PushAlreadyGame.
     * @exports PushAlreadyGame
     * @classdesc Represents a PushAlreadyGame.
     * @implements IPushAlreadyGame
     * @constructor
     * @param {IPushAlreadyGame=} [p] Properties to set
     */
    function PushAlreadyGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushAlreadyGame tips.
     * @member {string} tips
     * @memberof PushAlreadyGame
     * @instance
     */
    PushAlreadyGame.prototype.tips = "";

    /**
     * PushAlreadyGame playInfo.
     * @member {IPlayInfo} playInfo
     * @memberof PushAlreadyGame
     * @instance
     */
    PushAlreadyGame.prototype.playInfo = null;

    /**
     * PushAlreadyGame extra.
     * @member {string} extra
     * @memberof PushAlreadyGame
     * @instance
     */
    PushAlreadyGame.prototype.extra = "";

    /**
     * Creates a new PushAlreadyGame instance using the specified properties.
     * @function create
     * @memberof PushAlreadyGame
     * @static
     * @param {IPushAlreadyGame=} [properties] Properties to set
     * @returns {PushAlreadyGame} PushAlreadyGame instance
     */
    PushAlreadyGame.create = function create(properties) {
        return new PushAlreadyGame(properties);
    };

    /**
     * Encodes the specified PushAlreadyGame message. Does not implicitly {@link PushAlreadyGame.verify|verify} messages.
     * @function encode
     * @memberof PushAlreadyGame
     * @static
     * @param {IPushAlreadyGame} m PushAlreadyGame message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushAlreadyGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.tips);
        $root.PlayInfo.encode(m.playInfo, w.uint32(18).fork()).ldelim();
        if (m.extra != null && m.hasOwnProperty("extra"))
            w.uint32(26).string(m.extra);
        return w;
    };

    /**
     * Decodes a PushAlreadyGame message from the specified reader or buffer.
     * @function decode
     * @memberof PushAlreadyGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushAlreadyGame} PushAlreadyGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushAlreadyGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushAlreadyGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.tips = r.string();
                break;
            case 2:
                m.playInfo = $root.PlayInfo.decode(r, r.uint32());
                break;
            case 3:
                m.extra = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        if (!m.hasOwnProperty("playInfo"))
            throw $util.ProtocolError("missing required 'playInfo'", { instance: m });
        return m;
    };

    return PushAlreadyGame;
})();

$root.KickoutToLogin = (function() {

    /**
     * Properties of a KickoutToLogin.
     * @exports IKickoutToLogin
     * @interface IKickoutToLogin
     * @property {string|null} [tips] KickoutToLogin tips
     */

    /**
     * Constructs a new KickoutToLogin.
     * @exports KickoutToLogin
     * @classdesc Represents a KickoutToLogin.
     * @implements IKickoutToLogin
     * @constructor
     * @param {IKickoutToLogin=} [p] Properties to set
     */
    function KickoutToLogin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * KickoutToLogin tips.
     * @member {string} tips
     * @memberof KickoutToLogin
     * @instance
     */
    KickoutToLogin.prototype.tips = "";

    /**
     * Creates a new KickoutToLogin instance using the specified properties.
     * @function create
     * @memberof KickoutToLogin
     * @static
     * @param {IKickoutToLogin=} [properties] Properties to set
     * @returns {KickoutToLogin} KickoutToLogin instance
     */
    KickoutToLogin.create = function create(properties) {
        return new KickoutToLogin(properties);
    };

    /**
     * Encodes the specified KickoutToLogin message. Does not implicitly {@link KickoutToLogin.verify|verify} messages.
     * @function encode
     * @memberof KickoutToLogin
     * @static
     * @param {IKickoutToLogin} m KickoutToLogin message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KickoutToLogin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(10).string(m.tips);
        return w;
    };

    /**
     * Decodes a KickoutToLogin message from the specified reader or buffer.
     * @function decode
     * @memberof KickoutToLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {KickoutToLogin} KickoutToLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KickoutToLogin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.KickoutToLogin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return KickoutToLogin;
})();

$root.GameData = (function() {

    /**
     * Properties of a GameData.
     * @exports IGameData
     * @interface IGameData
     * @property {number} playType GameData playType
     * @property {string} desc GameData desc
     * @property {string} icon GameData icon
     * @property {number} order GameData order
     * @property {boolean} single GameData single
     * @property {boolean} isOpen GameData isOpen
     * @property {boolean} showUpdate GameData showUpdate
     * @property {number} spineType GameData spineType
     * @property {number} spineStep GameData spineStep
     * @property {boolean|null} [isH5Open] GameData isH5Open
     */

    /**
     * Constructs a new GameData.
     * @exports GameData
     * @classdesc Represents a GameData.
     * @implements IGameData
     * @constructor
     * @param {IGameData=} [p] Properties to set
     */
    function GameData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameData playType.
     * @member {number} playType
     * @memberof GameData
     * @instance
     */
    GameData.prototype.playType = 0;

    /**
     * GameData desc.
     * @member {string} desc
     * @memberof GameData
     * @instance
     */
    GameData.prototype.desc = "";

    /**
     * GameData icon.
     * @member {string} icon
     * @memberof GameData
     * @instance
     */
    GameData.prototype.icon = "";

    /**
     * GameData order.
     * @member {number} order
     * @memberof GameData
     * @instance
     */
    GameData.prototype.order = 0;

    /**
     * GameData single.
     * @member {boolean} single
     * @memberof GameData
     * @instance
     */
    GameData.prototype.single = false;

    /**
     * GameData isOpen.
     * @member {boolean} isOpen
     * @memberof GameData
     * @instance
     */
    GameData.prototype.isOpen = false;

    /**
     * GameData showUpdate.
     * @member {boolean} showUpdate
     * @memberof GameData
     * @instance
     */
    GameData.prototype.showUpdate = false;

    /**
     * GameData spineType.
     * @member {number} spineType
     * @memberof GameData
     * @instance
     */
    GameData.prototype.spineType = 0;

    /**
     * GameData spineStep.
     * @member {number} spineStep
     * @memberof GameData
     * @instance
     */
    GameData.prototype.spineStep = 0;

    /**
     * GameData isH5Open.
     * @member {boolean} isH5Open
     * @memberof GameData
     * @instance
     */
    GameData.prototype.isH5Open = false;

    /**
     * Creates a new GameData instance using the specified properties.
     * @function create
     * @memberof GameData
     * @static
     * @param {IGameData=} [properties] Properties to set
     * @returns {GameData} GameData instance
     */
    GameData.create = function create(properties) {
        return new GameData(properties);
    };

    /**
     * Encodes the specified GameData message. Does not implicitly {@link GameData.verify|verify} messages.
     * @function encode
     * @memberof GameData
     * @static
     * @param {IGameData} m GameData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        w.uint32(18).string(m.desc);
        w.uint32(26).string(m.icon);
        w.uint32(32).int32(m.order);
        w.uint32(40).bool(m.single);
        w.uint32(48).bool(m.isOpen);
        w.uint32(56).bool(m.showUpdate);
        w.uint32(64).int32(m.spineType);
        w.uint32(72).int32(m.spineStep);
        if (m.isH5Open != null && m.hasOwnProperty("isH5Open"))
            w.uint32(80).bool(m.isH5Open);
        return w;
    };

    /**
     * Decodes a GameData message from the specified reader or buffer.
     * @function decode
     * @memberof GameData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameData} GameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.desc = r.string();
                break;
            case 3:
                m.icon = r.string();
                break;
            case 4:
                m.order = r.int32();
                break;
            case 5:
                m.single = r.bool();
                break;
            case 6:
                m.isOpen = r.bool();
                break;
            case 7:
                m.showUpdate = r.bool();
                break;
            case 8:
                m.spineType = r.int32();
                break;
            case 9:
                m.spineStep = r.int32();
                break;
            case 10:
                m.isH5Open = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        if (!m.hasOwnProperty("icon"))
            throw $util.ProtocolError("missing required 'icon'", { instance: m });
        if (!m.hasOwnProperty("order"))
            throw $util.ProtocolError("missing required 'order'", { instance: m });
        if (!m.hasOwnProperty("single"))
            throw $util.ProtocolError("missing required 'single'", { instance: m });
        if (!m.hasOwnProperty("isOpen"))
            throw $util.ProtocolError("missing required 'isOpen'", { instance: m });
        if (!m.hasOwnProperty("showUpdate"))
            throw $util.ProtocolError("missing required 'showUpdate'", { instance: m });
        if (!m.hasOwnProperty("spineType"))
            throw $util.ProtocolError("missing required 'spineType'", { instance: m });
        if (!m.hasOwnProperty("spineStep"))
            throw $util.ProtocolError("missing required 'spineStep'", { instance: m });
        return m;
    };

    return GameData;
})();

$root.ADData = (function() {

    /**
     * Properties of a ADData.
     * @exports IADData
     * @interface IADData
     * @property {number} adId ADData adId
     * @property {string} adPic ADData adPic
     * @property {number} order ADData order
     * @property {number} showTime ADData showTime
     * @property {boolean} isHaveFunction ADData isHaveFunction
     * @property {number|null} [functionType] ADData functionType
     * @property {string|null} [script] ADData script
     * @property {string|null} [scriptH5] ADData scriptH5
     */

    /**
     * Constructs a new ADData.
     * @exports ADData
     * @classdesc Represents a ADData.
     * @implements IADData
     * @constructor
     * @param {IADData=} [p] Properties to set
     */
    function ADData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ADData adId.
     * @member {number} adId
     * @memberof ADData
     * @instance
     */
    ADData.prototype.adId = 0;

    /**
     * ADData adPic.
     * @member {string} adPic
     * @memberof ADData
     * @instance
     */
    ADData.prototype.adPic = "";

    /**
     * ADData order.
     * @member {number} order
     * @memberof ADData
     * @instance
     */
    ADData.prototype.order = 0;

    /**
     * ADData showTime.
     * @member {number} showTime
     * @memberof ADData
     * @instance
     */
    ADData.prototype.showTime = 0;

    /**
     * ADData isHaveFunction.
     * @member {boolean} isHaveFunction
     * @memberof ADData
     * @instance
     */
    ADData.prototype.isHaveFunction = false;

    /**
     * ADData functionType.
     * @member {number} functionType
     * @memberof ADData
     * @instance
     */
    ADData.prototype.functionType = 0;

    /**
     * ADData script.
     * @member {string} script
     * @memberof ADData
     * @instance
     */
    ADData.prototype.script = "";

    /**
     * ADData scriptH5.
     * @member {string} scriptH5
     * @memberof ADData
     * @instance
     */
    ADData.prototype.scriptH5 = "";

    /**
     * Creates a new ADData instance using the specified properties.
     * @function create
     * @memberof ADData
     * @static
     * @param {IADData=} [properties] Properties to set
     * @returns {ADData} ADData instance
     */
    ADData.create = function create(properties) {
        return new ADData(properties);
    };

    /**
     * Encodes the specified ADData message. Does not implicitly {@link ADData.verify|verify} messages.
     * @function encode
     * @memberof ADData
     * @static
     * @param {IADData} m ADData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ADData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.adId);
        w.uint32(18).string(m.adPic);
        w.uint32(24).int32(m.order);
        w.uint32(32).int32(m.showTime);
        w.uint32(40).bool(m.isHaveFunction);
        if (m.functionType != null && m.hasOwnProperty("functionType"))
            w.uint32(48).int32(m.functionType);
        if (m.script != null && m.hasOwnProperty("script"))
            w.uint32(58).string(m.script);
        if (m.scriptH5 != null && m.hasOwnProperty("scriptH5"))
            w.uint32(66).string(m.scriptH5);
        return w;
    };

    /**
     * Decodes a ADData message from the specified reader or buffer.
     * @function decode
     * @memberof ADData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ADData} ADData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ADData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ADData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.adId = r.int32();
                break;
            case 2:
                m.adPic = r.string();
                break;
            case 3:
                m.order = r.int32();
                break;
            case 4:
                m.showTime = r.int32();
                break;
            case 5:
                m.isHaveFunction = r.bool();
                break;
            case 6:
                m.functionType = r.int32();
                break;
            case 7:
                m.script = r.string();
                break;
            case 8:
                m.scriptH5 = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("adId"))
            throw $util.ProtocolError("missing required 'adId'", { instance: m });
        if (!m.hasOwnProperty("adPic"))
            throw $util.ProtocolError("missing required 'adPic'", { instance: m });
        if (!m.hasOwnProperty("order"))
            throw $util.ProtocolError("missing required 'order'", { instance: m });
        if (!m.hasOwnProperty("showTime"))
            throw $util.ProtocolError("missing required 'showTime'", { instance: m });
        if (!m.hasOwnProperty("isHaveFunction"))
            throw $util.ProtocolError("missing required 'isHaveFunction'", { instance: m });
        return m;
    };

    return ADData;
})();

$root.HallDataReq = (function() {

    /**
     * Properties of a HallDataReq.
     * @exports IHallDataReq
     * @interface IHallDataReq
     */

    /**
     * Constructs a new HallDataReq.
     * @exports HallDataReq
     * @classdesc Represents a HallDataReq.
     * @implements IHallDataReq
     * @constructor
     * @param {IHallDataReq=} [p] Properties to set
     */
    function HallDataReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new HallDataReq instance using the specified properties.
     * @function create
     * @memberof HallDataReq
     * @static
     * @param {IHallDataReq=} [properties] Properties to set
     * @returns {HallDataReq} HallDataReq instance
     */
    HallDataReq.create = function create(properties) {
        return new HallDataReq(properties);
    };

    /**
     * Encodes the specified HallDataReq message. Does not implicitly {@link HallDataReq.verify|verify} messages.
     * @function encode
     * @memberof HallDataReq
     * @static
     * @param {IHallDataReq} m HallDataReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HallDataReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a HallDataReq message from the specified reader or buffer.
     * @function decode
     * @memberof HallDataReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HallDataReq} HallDataReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HallDataReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HallDataReq();
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

    return HallDataReq;
})();

$root.HallDataRes = (function() {

    /**
     * Properties of a HallDataRes.
     * @exports IHallDataRes
     * @interface IHallDataRes
     * @property {Array.<IGameData>|null} [gamedata] HallDataRes gamedata
     * @property {Array.<IADData>|null} [addata] HallDataRes addata
     */

    /**
     * Constructs a new HallDataRes.
     * @exports HallDataRes
     * @classdesc Represents a HallDataRes.
     * @implements IHallDataRes
     * @constructor
     * @param {IHallDataRes=} [p] Properties to set
     */
    function HallDataRes(p) {
        this.gamedata = [];
        this.addata = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HallDataRes gamedata.
     * @member {Array.<IGameData>} gamedata
     * @memberof HallDataRes
     * @instance
     */
    HallDataRes.prototype.gamedata = $util.emptyArray;

    /**
     * HallDataRes addata.
     * @member {Array.<IADData>} addata
     * @memberof HallDataRes
     * @instance
     */
    HallDataRes.prototype.addata = $util.emptyArray;

    /**
     * Creates a new HallDataRes instance using the specified properties.
     * @function create
     * @memberof HallDataRes
     * @static
     * @param {IHallDataRes=} [properties] Properties to set
     * @returns {HallDataRes} HallDataRes instance
     */
    HallDataRes.create = function create(properties) {
        return new HallDataRes(properties);
    };

    /**
     * Encodes the specified HallDataRes message. Does not implicitly {@link HallDataRes.verify|verify} messages.
     * @function encode
     * @memberof HallDataRes
     * @static
     * @param {IHallDataRes} m HallDataRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HallDataRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gamedata != null && m.gamedata.length) {
            for (var i = 0; i < m.gamedata.length; ++i)
                $root.GameData.encode(m.gamedata[i], w.uint32(10).fork()).ldelim();
        }
        if (m.addata != null && m.addata.length) {
            for (var i = 0; i < m.addata.length; ++i)
                $root.ADData.encode(m.addata[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a HallDataRes message from the specified reader or buffer.
     * @function decode
     * @memberof HallDataRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HallDataRes} HallDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HallDataRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HallDataRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.gamedata && m.gamedata.length))
                    m.gamedata = [];
                m.gamedata.push($root.GameData.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.addata && m.addata.length))
                    m.addata = [];
                m.addata.push($root.ADData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return HallDataRes;
})();

$root.PlayInfo = (function() {

    /**
     * Properties of a PlayInfo.
     * @exports IPlayInfo
     * @interface IPlayInfo
     * @property {number} playType PlayInfo playType
     * @property {number} playId PlayInfo playId
     * @property {string} desc PlayInfo desc
     * @property {Array.<number>|null} [baseScore] PlayInfo baseScore
     * @property {Array.<number>|null} [limit] PlayInfo limit
     * @property {string} limitDesc PlayInfo limitDesc
     * @property {string} res PlayInfo res
     * @property {boolean|null} [isDirectEnter] PlayInfo isDirectEnter
     * @property {string|null} [subscript] PlayInfo subscript
     */

    /**
     * Constructs a new PlayInfo.
     * @exports PlayInfo
     * @classdesc Represents a PlayInfo.
     * @implements IPlayInfo
     * @constructor
     * @param {IPlayInfo=} [p] Properties to set
     */
    function PlayInfo(p) {
        this.baseScore = [];
        this.limit = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayInfo playType.
     * @member {number} playType
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.playType = 0;

    /**
     * PlayInfo playId.
     * @member {number} playId
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.playId = 0;

    /**
     * PlayInfo desc.
     * @member {string} desc
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.desc = "";

    /**
     * PlayInfo baseScore.
     * @member {Array.<number>} baseScore
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.baseScore = $util.emptyArray;

    /**
     * PlayInfo limit.
     * @member {Array.<number>} limit
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.limit = $util.emptyArray;

    /**
     * PlayInfo limitDesc.
     * @member {string} limitDesc
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.limitDesc = "";

    /**
     * PlayInfo res.
     * @member {string} res
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.res = "";

    /**
     * PlayInfo isDirectEnter.
     * @member {boolean} isDirectEnter
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.isDirectEnter = false;

    /**
     * PlayInfo subscript.
     * @member {string} subscript
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.subscript = "";

    /**
     * Creates a new PlayInfo instance using the specified properties.
     * @function create
     * @memberof PlayInfo
     * @static
     * @param {IPlayInfo=} [properties] Properties to set
     * @returns {PlayInfo} PlayInfo instance
     */
    PlayInfo.create = function create(properties) {
        return new PlayInfo(properties);
    };

    /**
     * Encodes the specified PlayInfo message. Does not implicitly {@link PlayInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayInfo
     * @static
     * @param {IPlayInfo} m PlayInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        w.uint32(16).int32(m.playId);
        w.uint32(26).string(m.desc);
        if (m.baseScore != null && m.baseScore.length) {
            for (var i = 0; i < m.baseScore.length; ++i)
                w.uint32(32).int32(m.baseScore[i]);
        }
        if (m.limit != null && m.limit.length) {
            for (var i = 0; i < m.limit.length; ++i)
                w.uint32(40).int32(m.limit[i]);
        }
        w.uint32(50).string(m.limitDesc);
        w.uint32(58).string(m.res);
        if (m.isDirectEnter != null && m.hasOwnProperty("isDirectEnter"))
            w.uint32(64).bool(m.isDirectEnter);
        if (m.subscript != null && m.hasOwnProperty("subscript"))
            w.uint32(74).string(m.subscript);
        return w;
    };

    /**
     * Decodes a PlayInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayInfo} PlayInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.playId = r.int32();
                break;
            case 3:
                m.desc = r.string();
                break;
            case 4:
                if (!(m.baseScore && m.baseScore.length))
                    m.baseScore = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.baseScore.push(r.int32());
                } else
                    m.baseScore.push(r.int32());
                break;
            case 5:
                if (!(m.limit && m.limit.length))
                    m.limit = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.limit.push(r.int32());
                } else
                    m.limit.push(r.int32());
                break;
            case 6:
                m.limitDesc = r.string();
                break;
            case 7:
                m.res = r.string();
                break;
            case 8:
                m.isDirectEnter = r.bool();
                break;
            case 9:
                m.subscript = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        if (!m.hasOwnProperty("limitDesc"))
            throw $util.ProtocolError("missing required 'limitDesc'", { instance: m });
        if (!m.hasOwnProperty("res"))
            throw $util.ProtocolError("missing required 'res'", { instance: m });
        return m;
    };

    return PlayInfo;
})();

$root.OpenPlayListRes = (function() {

    /**
     * Properties of an OpenPlayListRes.
     * @exports IOpenPlayListRes
     * @interface IOpenPlayListRes
     * @property {Array.<IPlayInfo>|null} [playInfo] OpenPlayListRes playInfo
     */

    /**
     * Constructs a new OpenPlayListRes.
     * @exports OpenPlayListRes
     * @classdesc Represents an OpenPlayListRes.
     * @implements IOpenPlayListRes
     * @constructor
     * @param {IOpenPlayListRes=} [p] Properties to set
     */
    function OpenPlayListRes(p) {
        this.playInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * OpenPlayListRes playInfo.
     * @member {Array.<IPlayInfo>} playInfo
     * @memberof OpenPlayListRes
     * @instance
     */
    OpenPlayListRes.prototype.playInfo = $util.emptyArray;

    /**
     * Creates a new OpenPlayListRes instance using the specified properties.
     * @function create
     * @memberof OpenPlayListRes
     * @static
     * @param {IOpenPlayListRes=} [properties] Properties to set
     * @returns {OpenPlayListRes} OpenPlayListRes instance
     */
    OpenPlayListRes.create = function create(properties) {
        return new OpenPlayListRes(properties);
    };

    /**
     * Encodes the specified OpenPlayListRes message. Does not implicitly {@link OpenPlayListRes.verify|verify} messages.
     * @function encode
     * @memberof OpenPlayListRes
     * @static
     * @param {IOpenPlayListRes} m OpenPlayListRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenPlayListRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playInfo != null && m.playInfo.length) {
            for (var i = 0; i < m.playInfo.length; ++i)
                $root.PlayInfo.encode(m.playInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an OpenPlayListRes message from the specified reader or buffer.
     * @function decode
     * @memberof OpenPlayListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OpenPlayListRes} OpenPlayListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenPlayListRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OpenPlayListRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playInfo && m.playInfo.length))
                    m.playInfo = [];
                m.playInfo.push($root.PlayInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return OpenPlayListRes;
})();

$root.PlayGameReq = (function() {

    /**
     * Properties of a PlayGameReq.
     * @exports IPlayGameReq
     * @interface IPlayGameReq
     * @property {number} playType PlayGameReq playType
     * @property {number} playId PlayGameReq playId
     * @property {string|null} [extra] PlayGameReq extra
     */

    /**
     * Constructs a new PlayGameReq.
     * @exports PlayGameReq
     * @classdesc Represents a PlayGameReq.
     * @implements IPlayGameReq
     * @constructor
     * @param {IPlayGameReq=} [p] Properties to set
     */
    function PlayGameReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayGameReq playType.
     * @member {number} playType
     * @memberof PlayGameReq
     * @instance
     */
    PlayGameReq.prototype.playType = 0;

    /**
     * PlayGameReq playId.
     * @member {number} playId
     * @memberof PlayGameReq
     * @instance
     */
    PlayGameReq.prototype.playId = 0;

    /**
     * PlayGameReq extra.
     * @member {string} extra
     * @memberof PlayGameReq
     * @instance
     */
    PlayGameReq.prototype.extra = "";

    /**
     * Creates a new PlayGameReq instance using the specified properties.
     * @function create
     * @memberof PlayGameReq
     * @static
     * @param {IPlayGameReq=} [properties] Properties to set
     * @returns {PlayGameReq} PlayGameReq instance
     */
    PlayGameReq.create = function create(properties) {
        return new PlayGameReq(properties);
    };

    /**
     * Encodes the specified PlayGameReq message. Does not implicitly {@link PlayGameReq.verify|verify} messages.
     * @function encode
     * @memberof PlayGameReq
     * @static
     * @param {IPlayGameReq} m PlayGameReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayGameReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        w.uint32(16).int32(m.playId);
        if (m.extra != null && m.hasOwnProperty("extra"))
            w.uint32(26).string(m.extra);
        return w;
    };

    /**
     * Decodes a PlayGameReq message from the specified reader or buffer.
     * @function decode
     * @memberof PlayGameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayGameReq} PlayGameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayGameReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayGameReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.playId = r.int32();
                break;
            case 3:
                m.extra = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        return m;
    };

    return PlayGameReq;
})();

$root.PushMatchResult = (function() {

    /**
     * Properties of a PushMatchResult.
     * @exports IPushMatchResult
     * @interface IPushMatchResult
     * @property {boolean} isSuccess PushMatchResult isSuccess
     * @property {string|null} [tips] PushMatchResult tips
     * @property {number|null} [playType] PushMatchResult playType
     * @property {number|null} [playId] PushMatchResult playId
     */

    /**
     * Constructs a new PushMatchResult.
     * @exports PushMatchResult
     * @classdesc Represents a PushMatchResult.
     * @implements IPushMatchResult
     * @constructor
     * @param {IPushMatchResult=} [p] Properties to set
     */
    function PushMatchResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushMatchResult isSuccess.
     * @member {boolean} isSuccess
     * @memberof PushMatchResult
     * @instance
     */
    PushMatchResult.prototype.isSuccess = false;

    /**
     * PushMatchResult tips.
     * @member {string} tips
     * @memberof PushMatchResult
     * @instance
     */
    PushMatchResult.prototype.tips = "";

    /**
     * PushMatchResult playType.
     * @member {number} playType
     * @memberof PushMatchResult
     * @instance
     */
    PushMatchResult.prototype.playType = 0;

    /**
     * PushMatchResult playId.
     * @member {number} playId
     * @memberof PushMatchResult
     * @instance
     */
    PushMatchResult.prototype.playId = 0;

    /**
     * Creates a new PushMatchResult instance using the specified properties.
     * @function create
     * @memberof PushMatchResult
     * @static
     * @param {IPushMatchResult=} [properties] Properties to set
     * @returns {PushMatchResult} PushMatchResult instance
     */
    PushMatchResult.create = function create(properties) {
        return new PushMatchResult(properties);
    };

    /**
     * Encodes the specified PushMatchResult message. Does not implicitly {@link PushMatchResult.verify|verify} messages.
     * @function encode
     * @memberof PushMatchResult
     * @static
     * @param {IPushMatchResult} m PushMatchResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushMatchResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.playType != null && m.hasOwnProperty("playType"))
            w.uint32(24).int32(m.playType);
        if (m.playId != null && m.hasOwnProperty("playId"))
            w.uint32(32).int32(m.playId);
        return w;
    };

    /**
     * Decodes a PushMatchResult message from the specified reader or buffer.
     * @function decode
     * @memberof PushMatchResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushMatchResult} PushMatchResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushMatchResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushMatchResult();
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
                m.playType = r.int32();
                break;
            case 4:
                m.playId = r.int32();
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

    return PushMatchResult;
})();

$root.CancelMatch = (function() {

    /**
     * Properties of a CancelMatch.
     * @exports ICancelMatch
     * @interface ICancelMatch
     * @property {number} playType CancelMatch playType
     * @property {number} playId CancelMatch playId
     */

    /**
     * Constructs a new CancelMatch.
     * @exports CancelMatch
     * @classdesc Represents a CancelMatch.
     * @implements ICancelMatch
     * @constructor
     * @param {ICancelMatch=} [p] Properties to set
     */
    function CancelMatch(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CancelMatch playType.
     * @member {number} playType
     * @memberof CancelMatch
     * @instance
     */
    CancelMatch.prototype.playType = 0;

    /**
     * CancelMatch playId.
     * @member {number} playId
     * @memberof CancelMatch
     * @instance
     */
    CancelMatch.prototype.playId = 0;

    /**
     * Creates a new CancelMatch instance using the specified properties.
     * @function create
     * @memberof CancelMatch
     * @static
     * @param {ICancelMatch=} [properties] Properties to set
     * @returns {CancelMatch} CancelMatch instance
     */
    CancelMatch.create = function create(properties) {
        return new CancelMatch(properties);
    };

    /**
     * Encodes the specified CancelMatch message. Does not implicitly {@link CancelMatch.verify|verify} messages.
     * @function encode
     * @memberof CancelMatch
     * @static
     * @param {ICancelMatch} m CancelMatch message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CancelMatch.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        w.uint32(16).int32(m.playId);
        return w;
    };

    /**
     * Decodes a CancelMatch message from the specified reader or buffer.
     * @function decode
     * @memberof CancelMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CancelMatch} CancelMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CancelMatch.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CancelMatch();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.playId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        return m;
    };

    return CancelMatch;
})();

$root.HallRankInfo = (function() {

    /**
     * Properties of a HallRankInfo.
     * @exports IHallRankInfo
     * @interface IHallRankInfo
     * @property {number} rankPos HallRankInfo rankPos
     * @property {string} name HallRankInfo name
     * @property {number} vip HallRankInfo vip
     * @property {number} headUrl HallRankInfo headUrl
     * @property {number|null} [gold] HallRankInfo gold
     * @property {number|null} [winGameCnt] HallRankInfo winGameCnt
     */

    /**
     * Constructs a new HallRankInfo.
     * @exports HallRankInfo
     * @classdesc Represents a HallRankInfo.
     * @implements IHallRankInfo
     * @constructor
     * @param {IHallRankInfo=} [p] Properties to set
     */
    function HallRankInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HallRankInfo rankPos.
     * @member {number} rankPos
     * @memberof HallRankInfo
     * @instance
     */
    HallRankInfo.prototype.rankPos = 0;

    /**
     * HallRankInfo name.
     * @member {string} name
     * @memberof HallRankInfo
     * @instance
     */
    HallRankInfo.prototype.name = "";

    /**
     * HallRankInfo vip.
     * @member {number} vip
     * @memberof HallRankInfo
     * @instance
     */
    HallRankInfo.prototype.vip = 0;

    /**
     * HallRankInfo headUrl.
     * @member {number} headUrl
     * @memberof HallRankInfo
     * @instance
     */
    HallRankInfo.prototype.headUrl = 0;

    /**
     * HallRankInfo gold.
     * @member {number} gold
     * @memberof HallRankInfo
     * @instance
     */
    HallRankInfo.prototype.gold = 0;

    /**
     * HallRankInfo winGameCnt.
     * @member {number} winGameCnt
     * @memberof HallRankInfo
     * @instance
     */
    HallRankInfo.prototype.winGameCnt = 0;

    /**
     * Creates a new HallRankInfo instance using the specified properties.
     * @function create
     * @memberof HallRankInfo
     * @static
     * @param {IHallRankInfo=} [properties] Properties to set
     * @returns {HallRankInfo} HallRankInfo instance
     */
    HallRankInfo.create = function create(properties) {
        return new HallRankInfo(properties);
    };

    /**
     * Encodes the specified HallRankInfo message. Does not implicitly {@link HallRankInfo.verify|verify} messages.
     * @function encode
     * @memberof HallRankInfo
     * @static
     * @param {IHallRankInfo} m HallRankInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HallRankInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.rankPos);
        w.uint32(18).string(m.name);
        w.uint32(24).int32(m.vip);
        w.uint32(32).int32(m.headUrl);
        if (m.gold != null && m.hasOwnProperty("gold"))
            w.uint32(40).int32(m.gold);
        if (m.winGameCnt != null && m.hasOwnProperty("winGameCnt"))
            w.uint32(48).int32(m.winGameCnt);
        return w;
    };

    /**
     * Decodes a HallRankInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HallRankInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HallRankInfo} HallRankInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HallRankInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HallRankInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rankPos = r.int32();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.vip = r.int32();
                break;
            case 4:
                m.headUrl = r.int32();
                break;
            case 5:
                m.gold = r.int32();
                break;
            case 6:
                m.winGameCnt = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rankPos"))
            throw $util.ProtocolError("missing required 'rankPos'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("vip"))
            throw $util.ProtocolError("missing required 'vip'", { instance: m });
        if (!m.hasOwnProperty("headUrl"))
            throw $util.ProtocolError("missing required 'headUrl'", { instance: m });
        return m;
    };

    return HallRankInfo;
})();

$root.Req_FlushHallRankList = (function() {

    /**
     * Properties of a Req_FlushHallRankList.
     * @exports IReq_FlushHallRankList
     * @interface IReq_FlushHallRankList
     * @property {number} type Req_FlushHallRankList type
     */

    /**
     * Constructs a new Req_FlushHallRankList.
     * @exports Req_FlushHallRankList
     * @classdesc Represents a Req_FlushHallRankList.
     * @implements IReq_FlushHallRankList
     * @constructor
     * @param {IReq_FlushHallRankList=} [p] Properties to set
     */
    function Req_FlushHallRankList(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_FlushHallRankList type.
     * @member {number} type
     * @memberof Req_FlushHallRankList
     * @instance
     */
    Req_FlushHallRankList.prototype.type = 0;

    /**
     * Creates a new Req_FlushHallRankList instance using the specified properties.
     * @function create
     * @memberof Req_FlushHallRankList
     * @static
     * @param {IReq_FlushHallRankList=} [properties] Properties to set
     * @returns {Req_FlushHallRankList} Req_FlushHallRankList instance
     */
    Req_FlushHallRankList.create = function create(properties) {
        return new Req_FlushHallRankList(properties);
    };

    /**
     * Encodes the specified Req_FlushHallRankList message. Does not implicitly {@link Req_FlushHallRankList.verify|verify} messages.
     * @function encode
     * @memberof Req_FlushHallRankList
     * @static
     * @param {IReq_FlushHallRankList} m Req_FlushHallRankList message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_FlushHallRankList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        return w;
    };

    /**
     * Decodes a Req_FlushHallRankList message from the specified reader or buffer.
     * @function decode
     * @memberof Req_FlushHallRankList
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_FlushHallRankList} Req_FlushHallRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_FlushHallRankList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_FlushHallRankList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    return Req_FlushHallRankList;
})();

$root.Rsp_FlushHallRankList = (function() {

    /**
     * Properties of a Rsp_FlushHallRankList.
     * @exports IRsp_FlushHallRankList
     * @interface IRsp_FlushHallRankList
     * @property {number} type Rsp_FlushHallRankList type
     * @property {Array.<IHallRankInfo>|null} [infos] Rsp_FlushHallRankList infos
     * @property {number} selfRankPos Rsp_FlushHallRankList selfRankPos
     */

    /**
     * Constructs a new Rsp_FlushHallRankList.
     * @exports Rsp_FlushHallRankList
     * @classdesc Represents a Rsp_FlushHallRankList.
     * @implements IRsp_FlushHallRankList
     * @constructor
     * @param {IRsp_FlushHallRankList=} [p] Properties to set
     */
    function Rsp_FlushHallRankList(p) {
        this.infos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_FlushHallRankList type.
     * @member {number} type
     * @memberof Rsp_FlushHallRankList
     * @instance
     */
    Rsp_FlushHallRankList.prototype.type = 0;

    /**
     * Rsp_FlushHallRankList infos.
     * @member {Array.<IHallRankInfo>} infos
     * @memberof Rsp_FlushHallRankList
     * @instance
     */
    Rsp_FlushHallRankList.prototype.infos = $util.emptyArray;

    /**
     * Rsp_FlushHallRankList selfRankPos.
     * @member {number} selfRankPos
     * @memberof Rsp_FlushHallRankList
     * @instance
     */
    Rsp_FlushHallRankList.prototype.selfRankPos = 0;

    /**
     * Creates a new Rsp_FlushHallRankList instance using the specified properties.
     * @function create
     * @memberof Rsp_FlushHallRankList
     * @static
     * @param {IRsp_FlushHallRankList=} [properties] Properties to set
     * @returns {Rsp_FlushHallRankList} Rsp_FlushHallRankList instance
     */
    Rsp_FlushHallRankList.create = function create(properties) {
        return new Rsp_FlushHallRankList(properties);
    };

    /**
     * Encodes the specified Rsp_FlushHallRankList message. Does not implicitly {@link Rsp_FlushHallRankList.verify|verify} messages.
     * @function encode
     * @memberof Rsp_FlushHallRankList
     * @static
     * @param {IRsp_FlushHallRankList} m Rsp_FlushHallRankList message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_FlushHallRankList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.infos != null && m.infos.length) {
            for (var i = 0; i < m.infos.length; ++i)
                $root.HallRankInfo.encode(m.infos[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(24).int32(m.selfRankPos);
        return w;
    };

    /**
     * Decodes a Rsp_FlushHallRankList message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_FlushHallRankList
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_FlushHallRankList} Rsp_FlushHallRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_FlushHallRankList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_FlushHallRankList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                if (!(m.infos && m.infos.length))
                    m.infos = [];
                m.infos.push($root.HallRankInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.selfRankPos = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("selfRankPos"))
            throw $util.ProtocolError("missing required 'selfRankPos'", { instance: m });
        return m;
    };

    return Rsp_FlushHallRankList;
})();

$root.ModuleStatus = (function() {

    /**
     * Properties of a ModuleStatus.
     * @exports IModuleStatus
     * @interface IModuleStatus
     * @property {string} moduleKey ModuleStatus moduleKey
     * @property {number} status ModuleStatus status
     */

    /**
     * Constructs a new ModuleStatus.
     * @exports ModuleStatus
     * @classdesc Represents a ModuleStatus.
     * @implements IModuleStatus
     * @constructor
     * @param {IModuleStatus=} [p] Properties to set
     */
    function ModuleStatus(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ModuleStatus moduleKey.
     * @member {string} moduleKey
     * @memberof ModuleStatus
     * @instance
     */
    ModuleStatus.prototype.moduleKey = "";

    /**
     * ModuleStatus status.
     * @member {number} status
     * @memberof ModuleStatus
     * @instance
     */
    ModuleStatus.prototype.status = 0;

    /**
     * Creates a new ModuleStatus instance using the specified properties.
     * @function create
     * @memberof ModuleStatus
     * @static
     * @param {IModuleStatus=} [properties] Properties to set
     * @returns {ModuleStatus} ModuleStatus instance
     */
    ModuleStatus.create = function create(properties) {
        return new ModuleStatus(properties);
    };

    /**
     * Encodes the specified ModuleStatus message. Does not implicitly {@link ModuleStatus.verify|verify} messages.
     * @function encode
     * @memberof ModuleStatus
     * @static
     * @param {IModuleStatus} m ModuleStatus message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModuleStatus.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.moduleKey);
        w.uint32(16).int32(m.status);
        return w;
    };

    /**
     * Decodes a ModuleStatus message from the specified reader or buffer.
     * @function decode
     * @memberof ModuleStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ModuleStatus} ModuleStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModuleStatus.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ModuleStatus();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.moduleKey = r.string();
                break;
            case 2:
                m.status = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("moduleKey"))
            throw $util.ProtocolError("missing required 'moduleKey'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    return ModuleStatus;
})();

$root.PushModuleStatus = (function() {

    /**
     * Properties of a PushModuleStatus.
     * @exports IPushModuleStatus
     * @interface IPushModuleStatus
     * @property {Array.<IModuleStatus>|null} [moduleStatus] PushModuleStatus moduleStatus
     * @property {string|null} [skinId] PushModuleStatus skinId
     */

    /**
     * Constructs a new PushModuleStatus.
     * @exports PushModuleStatus
     * @classdesc Represents a PushModuleStatus.
     * @implements IPushModuleStatus
     * @constructor
     * @param {IPushModuleStatus=} [p] Properties to set
     */
    function PushModuleStatus(p) {
        this.moduleStatus = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushModuleStatus moduleStatus.
     * @member {Array.<IModuleStatus>} moduleStatus
     * @memberof PushModuleStatus
     * @instance
     */
    PushModuleStatus.prototype.moduleStatus = $util.emptyArray;

    /**
     * PushModuleStatus skinId.
     * @member {string} skinId
     * @memberof PushModuleStatus
     * @instance
     */
    PushModuleStatus.prototype.skinId = "";

    /**
     * Creates a new PushModuleStatus instance using the specified properties.
     * @function create
     * @memberof PushModuleStatus
     * @static
     * @param {IPushModuleStatus=} [properties] Properties to set
     * @returns {PushModuleStatus} PushModuleStatus instance
     */
    PushModuleStatus.create = function create(properties) {
        return new PushModuleStatus(properties);
    };

    /**
     * Encodes the specified PushModuleStatus message. Does not implicitly {@link PushModuleStatus.verify|verify} messages.
     * @function encode
     * @memberof PushModuleStatus
     * @static
     * @param {IPushModuleStatus} m PushModuleStatus message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushModuleStatus.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.moduleStatus != null && m.moduleStatus.length) {
            for (var i = 0; i < m.moduleStatus.length; ++i)
                $root.ModuleStatus.encode(m.moduleStatus[i], w.uint32(10).fork()).ldelim();
        }
        if (m.skinId != null && m.hasOwnProperty("skinId"))
            w.uint32(18).string(m.skinId);
        return w;
    };

    /**
     * Decodes a PushModuleStatus message from the specified reader or buffer.
     * @function decode
     * @memberof PushModuleStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushModuleStatus} PushModuleStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushModuleStatus.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushModuleStatus();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.moduleStatus && m.moduleStatus.length))
                    m.moduleStatus = [];
                m.moduleStatus.push($root.ModuleStatus.decode(r, r.uint32()));
                break;
            case 2:
                m.skinId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushModuleStatus;
})();

module.exports = $root;

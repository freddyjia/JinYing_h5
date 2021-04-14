/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Yaoyaole || ($protobuf.roots.Yaoyaole = {});

/**
 * PlayType enum.
 * @exports PlayType
 * @enum {string}
 * @property {number} YYL=1 YYL value
 * @property {number} KUAI_SAN=2 KUAI_SAN value
 */
$root.PlayType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "YYL"] = 1;
    values[valuesById[2] = "KUAI_SAN"] = 2;
    return values;
})();

/**
 * Step enum.
 * @exports Step
 * @enum {string}
 * @property {number} saiziAnimationStep=1 saiziAnimationStep value
 * @property {number} addChip=2 addChip value
 * @property {number} maidinglishouStep=3 maidinglishouStep value
 * @property {number} settlement=4 settlement value
 */
$root.Step = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "saiziAnimationStep"] = 1;
    values[valuesById[2] = "addChip"] = 2;
    values[valuesById[3] = "maidinglishouStep"] = 3;
    values[valuesById[4] = "settlement"] = 4;
    return values;
})();

$root.YaoYaoLePlayerInfo = (function() {

    /**
     * Properties of a YaoYaoLePlayerInfo.
     * @exports IYaoYaoLePlayerInfo
     * @interface IYaoYaoLePlayerInfo
     * @property {string} playerId YaoYaoLePlayerInfo playerId
     * @property {string} userName YaoYaoLePlayerInfo userName
     * @property {string} headImageUrl YaoYaoLePlayerInfo headImageUrl
     * @property {string} headbox YaoYaoLePlayerInfo headbox
     * @property {number} vipLv YaoYaoLePlayerInfo vipLv
     * @property {string} gold YaoYaoLePlayerInfo gold
     * @property {string|null} [city] YaoYaoLePlayerInfo city
     * @property {string|null} [province] YaoYaoLePlayerInfo province
     */

    /**
     * Constructs a new YaoYaoLePlayerInfo.
     * @exports YaoYaoLePlayerInfo
     * @classdesc Represents a YaoYaoLePlayerInfo.
     * @implements IYaoYaoLePlayerInfo
     * @constructor
     * @param {IYaoYaoLePlayerInfo=} [p] Properties to set
     */
    function YaoYaoLePlayerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * YaoYaoLePlayerInfo playerId.
     * @member {string} playerId
     * @memberof YaoYaoLePlayerInfo
     * @instance
     */
    YaoYaoLePlayerInfo.prototype.playerId = "";

    /**
     * YaoYaoLePlayerInfo userName.
     * @member {string} userName
     * @memberof YaoYaoLePlayerInfo
     * @instance
     */
    YaoYaoLePlayerInfo.prototype.userName = "";

    /**
     * YaoYaoLePlayerInfo headImageUrl.
     * @member {string} headImageUrl
     * @memberof YaoYaoLePlayerInfo
     * @instance
     */
    YaoYaoLePlayerInfo.prototype.headImageUrl = "";

    /**
     * YaoYaoLePlayerInfo headbox.
     * @member {string} headbox
     * @memberof YaoYaoLePlayerInfo
     * @instance
     */
    YaoYaoLePlayerInfo.prototype.headbox = "";

    /**
     * YaoYaoLePlayerInfo vipLv.
     * @member {number} vipLv
     * @memberof YaoYaoLePlayerInfo
     * @instance
     */
    YaoYaoLePlayerInfo.prototype.vipLv = 0;

    /**
     * YaoYaoLePlayerInfo gold.
     * @member {string} gold
     * @memberof YaoYaoLePlayerInfo
     * @instance
     */
    YaoYaoLePlayerInfo.prototype.gold = "";

    /**
     * YaoYaoLePlayerInfo city.
     * @member {string} city
     * @memberof YaoYaoLePlayerInfo
     * @instance
     */
    YaoYaoLePlayerInfo.prototype.city = "";

    /**
     * YaoYaoLePlayerInfo province.
     * @member {string} province
     * @memberof YaoYaoLePlayerInfo
     * @instance
     */
    YaoYaoLePlayerInfo.prototype.province = "";

    /**
     * Creates a new YaoYaoLePlayerInfo instance using the specified properties.
     * @function create
     * @memberof YaoYaoLePlayerInfo
     * @static
     * @param {IYaoYaoLePlayerInfo=} [properties] Properties to set
     * @returns {YaoYaoLePlayerInfo} YaoYaoLePlayerInfo instance
     */
    YaoYaoLePlayerInfo.create = function create(properties) {
        return new YaoYaoLePlayerInfo(properties);
    };

    /**
     * Encodes the specified YaoYaoLePlayerInfo message. Does not implicitly {@link YaoYaoLePlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof YaoYaoLePlayerInfo
     * @static
     * @param {IYaoYaoLePlayerInfo} m YaoYaoLePlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    YaoYaoLePlayerInfo.encode = function encode(m, w) {
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
     * Decodes a YaoYaoLePlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof YaoYaoLePlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {YaoYaoLePlayerInfo} YaoYaoLePlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    YaoYaoLePlayerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.YaoYaoLePlayerInfo();
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

    return YaoYaoLePlayerInfo;
})();

$root.SitPlayerInfo = (function() {

    /**
     * Properties of a SitPlayerInfo.
     * @exports ISitPlayerInfo
     * @interface ISitPlayerInfo
     * @property {number} index SitPlayerInfo index
     * @property {IYaoYaoLePlayerInfo} yaoYaoLePlayerInfo SitPlayerInfo yaoYaoLePlayerInfo
     */

    /**
     * Constructs a new SitPlayerInfo.
     * @exports SitPlayerInfo
     * @classdesc Represents a SitPlayerInfo.
     * @implements ISitPlayerInfo
     * @constructor
     * @param {ISitPlayerInfo=} [p] Properties to set
     */
    function SitPlayerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SitPlayerInfo index.
     * @member {number} index
     * @memberof SitPlayerInfo
     * @instance
     */
    SitPlayerInfo.prototype.index = 0;

    /**
     * SitPlayerInfo yaoYaoLePlayerInfo.
     * @member {IYaoYaoLePlayerInfo} yaoYaoLePlayerInfo
     * @memberof SitPlayerInfo
     * @instance
     */
    SitPlayerInfo.prototype.yaoYaoLePlayerInfo = null;

    /**
     * Creates a new SitPlayerInfo instance using the specified properties.
     * @function create
     * @memberof SitPlayerInfo
     * @static
     * @param {ISitPlayerInfo=} [properties] Properties to set
     * @returns {SitPlayerInfo} SitPlayerInfo instance
     */
    SitPlayerInfo.create = function create(properties) {
        return new SitPlayerInfo(properties);
    };

    /**
     * Encodes the specified SitPlayerInfo message. Does not implicitly {@link SitPlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof SitPlayerInfo
     * @static
     * @param {ISitPlayerInfo} m SitPlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SitPlayerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(16).int32(m.index);
        $root.YaoYaoLePlayerInfo.encode(m.yaoYaoLePlayerInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a SitPlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SitPlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SitPlayerInfo} SitPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SitPlayerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SitPlayerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 2:
                m.index = r.int32();
                break;
            case 3:
                m.yaoYaoLePlayerInfo = $root.YaoYaoLePlayerInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("yaoYaoLePlayerInfo"))
            throw $util.ProtocolError("missing required 'yaoYaoLePlayerInfo'", { instance: m });
        return m;
    };

    return SitPlayerInfo;
})();

/**
 * RewardType_KS enum.
 * @exports RewardType_KS
 * @enum {string}
 * @property {number} ONE=1 ONE value
 * @property {number} TWO=2 TWO value
 * @property {number} THREE=3 THREE value
 * @property {number} FOUR=4 FOUR value
 * @property {number} FIVE=5 FIVE value
 * @property {number} SIX=6 SIX value
 * @property {number} DA=7 DA value
 * @property {number} XIAO=8 XIAO value
 * @property {number} DAN=9 DAN value
 * @property {number} SHUANG=10 SHUANG value
 */
$root.RewardType_KS = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "ONE"] = 1;
    values[valuesById[2] = "TWO"] = 2;
    values[valuesById[3] = "THREE"] = 3;
    values[valuesById[4] = "FOUR"] = 4;
    values[valuesById[5] = "FIVE"] = 5;
    values[valuesById[6] = "SIX"] = 6;
    values[valuesById[7] = "DA"] = 7;
    values[valuesById[8] = "XIAO"] = 8;
    values[valuesById[9] = "DAN"] = 9;
    values[valuesById[10] = "SHUANG"] = 10;
    return values;
})();

/**
 * RewardType_YYL enum.
 * @exports RewardType_YYL
 * @enum {string}
 * @property {number} da=1 da value
 * @property {number} xiao=2 xiao value
 * @property {number} he=3 he value
 * @property {number} baozhi1=4 baozhi1 value
 * @property {number} baozhi2=5 baozhi2 value
 * @property {number} baozhi3=6 baozhi3 value
 * @property {number} baozhi4=7 baozhi4 value
 * @property {number} baozhi5=8 baozhi5 value
 * @property {number} baozhi6=9 baozhi6 value
 */
$root.RewardType_YYL = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "da"] = 1;
    values[valuesById[2] = "xiao"] = 2;
    values[valuesById[3] = "he"] = 3;
    values[valuesById[4] = "baozhi1"] = 4;
    values[valuesById[5] = "baozhi2"] = 5;
    values[valuesById[6] = "baozhi3"] = 6;
    values[valuesById[7] = "baozhi4"] = 7;
    values[valuesById[8] = "baozhi5"] = 8;
    values[valuesById[9] = "baozhi6"] = 9;
    return values;
})();

$root.RewardPoint_KS = (function() {

    /**
     * Properties of a RewardPoint_KS.
     * @exports IRewardPoint_KS
     * @interface IRewardPoint_KS
     * @property {number} point1 RewardPoint_KS point1
     * @property {number} point2 RewardPoint_KS point2
     * @property {number} point3 RewardPoint_KS point3
     */

    /**
     * Constructs a new RewardPoint_KS.
     * @exports RewardPoint_KS
     * @classdesc Represents a RewardPoint_KS.
     * @implements IRewardPoint_KS
     * @constructor
     * @param {IRewardPoint_KS=} [p] Properties to set
     */
    function RewardPoint_KS(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RewardPoint_KS point1.
     * @member {number} point1
     * @memberof RewardPoint_KS
     * @instance
     */
    RewardPoint_KS.prototype.point1 = 0;

    /**
     * RewardPoint_KS point2.
     * @member {number} point2
     * @memberof RewardPoint_KS
     * @instance
     */
    RewardPoint_KS.prototype.point2 = 0;

    /**
     * RewardPoint_KS point3.
     * @member {number} point3
     * @memberof RewardPoint_KS
     * @instance
     */
    RewardPoint_KS.prototype.point3 = 0;

    /**
     * Creates a new RewardPoint_KS instance using the specified properties.
     * @function create
     * @memberof RewardPoint_KS
     * @static
     * @param {IRewardPoint_KS=} [properties] Properties to set
     * @returns {RewardPoint_KS} RewardPoint_KS instance
     */
    RewardPoint_KS.create = function create(properties) {
        return new RewardPoint_KS(properties);
    };

    /**
     * Encodes the specified RewardPoint_KS message. Does not implicitly {@link RewardPoint_KS.verify|verify} messages.
     * @function encode
     * @memberof RewardPoint_KS
     * @static
     * @param {IRewardPoint_KS} m RewardPoint_KS message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardPoint_KS.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.point1);
        w.uint32(16).int32(m.point2);
        w.uint32(24).int32(m.point3);
        return w;
    };

    /**
     * Decodes a RewardPoint_KS message from the specified reader or buffer.
     * @function decode
     * @memberof RewardPoint_KS
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RewardPoint_KS} RewardPoint_KS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardPoint_KS.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RewardPoint_KS();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.point1 = r.int32();
                break;
            case 2:
                m.point2 = r.int32();
                break;
            case 3:
                m.point3 = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("point1"))
            throw $util.ProtocolError("missing required 'point1'", { instance: m });
        if (!m.hasOwnProperty("point2"))
            throw $util.ProtocolError("missing required 'point2'", { instance: m });
        if (!m.hasOwnProperty("point3"))
            throw $util.ProtocolError("missing required 'point3'", { instance: m });
        return m;
    };

    return RewardPoint_KS;
})();

$root.RewardPoint_YYL = (function() {

    /**
     * Properties of a RewardPoint_YYL.
     * @exports IRewardPoint_YYL
     * @interface IRewardPoint_YYL
     * @property {number} point1 RewardPoint_YYL point1
     * @property {number} point2 RewardPoint_YYL point2
     */

    /**
     * Constructs a new RewardPoint_YYL.
     * @exports RewardPoint_YYL
     * @classdesc Represents a RewardPoint_YYL.
     * @implements IRewardPoint_YYL
     * @constructor
     * @param {IRewardPoint_YYL=} [p] Properties to set
     */
    function RewardPoint_YYL(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RewardPoint_YYL point1.
     * @member {number} point1
     * @memberof RewardPoint_YYL
     * @instance
     */
    RewardPoint_YYL.prototype.point1 = 0;

    /**
     * RewardPoint_YYL point2.
     * @member {number} point2
     * @memberof RewardPoint_YYL
     * @instance
     */
    RewardPoint_YYL.prototype.point2 = 0;

    /**
     * Creates a new RewardPoint_YYL instance using the specified properties.
     * @function create
     * @memberof RewardPoint_YYL
     * @static
     * @param {IRewardPoint_YYL=} [properties] Properties to set
     * @returns {RewardPoint_YYL} RewardPoint_YYL instance
     */
    RewardPoint_YYL.create = function create(properties) {
        return new RewardPoint_YYL(properties);
    };

    /**
     * Encodes the specified RewardPoint_YYL message. Does not implicitly {@link RewardPoint_YYL.verify|verify} messages.
     * @function encode
     * @memberof RewardPoint_YYL
     * @static
     * @param {IRewardPoint_YYL} m RewardPoint_YYL message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardPoint_YYL.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.point1);
        w.uint32(16).int32(m.point2);
        return w;
    };

    /**
     * Decodes a RewardPoint_YYL message from the specified reader or buffer.
     * @function decode
     * @memberof RewardPoint_YYL
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RewardPoint_YYL} RewardPoint_YYL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardPoint_YYL.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RewardPoint_YYL();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.point1 = r.int32();
                break;
            case 2:
                m.point2 = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("point1"))
            throw $util.ProtocolError("missing required 'point1'", { instance: m });
        if (!m.hasOwnProperty("point2"))
            throw $util.ProtocolError("missing required 'point2'", { instance: m });
        return m;
    };

    return RewardPoint_YYL;
})();

$root.RoundResult_KS = (function() {

    /**
     * Properties of a RoundResult_KS.
     * @exports IRoundResult_KS
     * @interface IRoundResult_KS
     * @property {IRewardPoint_KS} rewardPoint RoundResult_KS rewardPoint
     * @property {RewardType_KS} bigType RoundResult_KS bigType
     * @property {RewardType_KS} singleType RoundResult_KS singleType
     */

    /**
     * Constructs a new RoundResult_KS.
     * @exports RoundResult_KS
     * @classdesc Represents a RoundResult_KS.
     * @implements IRoundResult_KS
     * @constructor
     * @param {IRoundResult_KS=} [p] Properties to set
     */
    function RoundResult_KS(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoundResult_KS rewardPoint.
     * @member {IRewardPoint_KS} rewardPoint
     * @memberof RoundResult_KS
     * @instance
     */
    RoundResult_KS.prototype.rewardPoint = null;

    /**
     * RoundResult_KS bigType.
     * @member {RewardType_KS} bigType
     * @memberof RoundResult_KS
     * @instance
     */
    RoundResult_KS.prototype.bigType = 1;

    /**
     * RoundResult_KS singleType.
     * @member {RewardType_KS} singleType
     * @memberof RoundResult_KS
     * @instance
     */
    RoundResult_KS.prototype.singleType = 1;

    /**
     * Creates a new RoundResult_KS instance using the specified properties.
     * @function create
     * @memberof RoundResult_KS
     * @static
     * @param {IRoundResult_KS=} [properties] Properties to set
     * @returns {RoundResult_KS} RoundResult_KS instance
     */
    RoundResult_KS.create = function create(properties) {
        return new RoundResult_KS(properties);
    };

    /**
     * Encodes the specified RoundResult_KS message. Does not implicitly {@link RoundResult_KS.verify|verify} messages.
     * @function encode
     * @memberof RoundResult_KS
     * @static
     * @param {IRoundResult_KS} m RoundResult_KS message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoundResult_KS.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.RewardPoint_KS.encode(m.rewardPoint, w.uint32(10).fork()).ldelim();
        w.uint32(16).int32(m.bigType);
        w.uint32(24).int32(m.singleType);
        return w;
    };

    /**
     * Decodes a RoundResult_KS message from the specified reader or buffer.
     * @function decode
     * @memberof RoundResult_KS
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoundResult_KS} RoundResult_KS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoundResult_KS.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoundResult_KS();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rewardPoint = $root.RewardPoint_KS.decode(r, r.uint32());
                break;
            case 2:
                m.bigType = r.int32();
                break;
            case 3:
                m.singleType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rewardPoint"))
            throw $util.ProtocolError("missing required 'rewardPoint'", { instance: m });
        if (!m.hasOwnProperty("bigType"))
            throw $util.ProtocolError("missing required 'bigType'", { instance: m });
        if (!m.hasOwnProperty("singleType"))
            throw $util.ProtocolError("missing required 'singleType'", { instance: m });
        return m;
    };

    return RoundResult_KS;
})();

$root.RoundResult_YYL = (function() {

    /**
     * Properties of a RoundResult_YYL.
     * @exports IRoundResult_YYL
     * @interface IRoundResult_YYL
     * @property {IRewardPoint_YYL} rewardPoint RoundResult_YYL rewardPoint
     * @property {RewardType_YYL} rewardType1 RoundResult_YYL rewardType1
     * @property {RewardType_YYL|null} [rewardType2] RoundResult_YYL rewardType2
     */

    /**
     * Constructs a new RoundResult_YYL.
     * @exports RoundResult_YYL
     * @classdesc Represents a RoundResult_YYL.
     * @implements IRoundResult_YYL
     * @constructor
     * @param {IRoundResult_YYL=} [p] Properties to set
     */
    function RoundResult_YYL(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoundResult_YYL rewardPoint.
     * @member {IRewardPoint_YYL} rewardPoint
     * @memberof RoundResult_YYL
     * @instance
     */
    RoundResult_YYL.prototype.rewardPoint = null;

    /**
     * RoundResult_YYL rewardType1.
     * @member {RewardType_YYL} rewardType1
     * @memberof RoundResult_YYL
     * @instance
     */
    RoundResult_YYL.prototype.rewardType1 = 1;

    /**
     * RoundResult_YYL rewardType2.
     * @member {RewardType_YYL} rewardType2
     * @memberof RoundResult_YYL
     * @instance
     */
    RoundResult_YYL.prototype.rewardType2 = 1;

    /**
     * Creates a new RoundResult_YYL instance using the specified properties.
     * @function create
     * @memberof RoundResult_YYL
     * @static
     * @param {IRoundResult_YYL=} [properties] Properties to set
     * @returns {RoundResult_YYL} RoundResult_YYL instance
     */
    RoundResult_YYL.create = function create(properties) {
        return new RoundResult_YYL(properties);
    };

    /**
     * Encodes the specified RoundResult_YYL message. Does not implicitly {@link RoundResult_YYL.verify|verify} messages.
     * @function encode
     * @memberof RoundResult_YYL
     * @static
     * @param {IRoundResult_YYL} m RoundResult_YYL message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoundResult_YYL.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.RewardPoint_YYL.encode(m.rewardPoint, w.uint32(10).fork()).ldelim();
        w.uint32(16).int32(m.rewardType1);
        if (m.rewardType2 != null && m.hasOwnProperty("rewardType2"))
            w.uint32(24).int32(m.rewardType2);
        return w;
    };

    /**
     * Decodes a RoundResult_YYL message from the specified reader or buffer.
     * @function decode
     * @memberof RoundResult_YYL
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoundResult_YYL} RoundResult_YYL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoundResult_YYL.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoundResult_YYL();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rewardPoint = $root.RewardPoint_YYL.decode(r, r.uint32());
                break;
            case 2:
                m.rewardType1 = r.int32();
                break;
            case 3:
                m.rewardType2 = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rewardPoint"))
            throw $util.ProtocolError("missing required 'rewardPoint'", { instance: m });
        if (!m.hasOwnProperty("rewardType1"))
            throw $util.ProtocolError("missing required 'rewardType1'", { instance: m });
        return m;
    };

    return RoundResult_YYL;
})();

$root.BetGoldInfo_KS = (function() {

    /**
     * Properties of a BetGoldInfo_KS.
     * @exports IBetGoldInfo_KS
     * @interface IBetGoldInfo_KS
     * @property {RewardType_KS} rewardType_KS BetGoldInfo_KS rewardType_KS
     * @property {Array.<number>|null} [gold] BetGoldInfo_KS gold
     */

    /**
     * Constructs a new BetGoldInfo_KS.
     * @exports BetGoldInfo_KS
     * @classdesc Represents a BetGoldInfo_KS.
     * @implements IBetGoldInfo_KS
     * @constructor
     * @param {IBetGoldInfo_KS=} [p] Properties to set
     */
    function BetGoldInfo_KS(p) {
        this.gold = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetGoldInfo_KS rewardType_KS.
     * @member {RewardType_KS} rewardType_KS
     * @memberof BetGoldInfo_KS
     * @instance
     */
    BetGoldInfo_KS.prototype.rewardType_KS = 1;

    /**
     * BetGoldInfo_KS gold.
     * @member {Array.<number>} gold
     * @memberof BetGoldInfo_KS
     * @instance
     */
    BetGoldInfo_KS.prototype.gold = $util.emptyArray;

    /**
     * Creates a new BetGoldInfo_KS instance using the specified properties.
     * @function create
     * @memberof BetGoldInfo_KS
     * @static
     * @param {IBetGoldInfo_KS=} [properties] Properties to set
     * @returns {BetGoldInfo_KS} BetGoldInfo_KS instance
     */
    BetGoldInfo_KS.create = function create(properties) {
        return new BetGoldInfo_KS(properties);
    };

    /**
     * Encodes the specified BetGoldInfo_KS message. Does not implicitly {@link BetGoldInfo_KS.verify|verify} messages.
     * @function encode
     * @memberof BetGoldInfo_KS
     * @static
     * @param {IBetGoldInfo_KS} m BetGoldInfo_KS message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetGoldInfo_KS.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.rewardType_KS);
        if (m.gold != null && m.gold.length) {
            for (var i = 0; i < m.gold.length; ++i)
                w.uint32(16).int32(m.gold[i]);
        }
        return w;
    };

    /**
     * Decodes a BetGoldInfo_KS message from the specified reader or buffer.
     * @function decode
     * @memberof BetGoldInfo_KS
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetGoldInfo_KS} BetGoldInfo_KS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetGoldInfo_KS.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetGoldInfo_KS();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rewardType_KS = r.int32();
                break;
            case 2:
                if (!(m.gold && m.gold.length))
                    m.gold = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.gold.push(r.int32());
                } else
                    m.gold.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rewardType_KS"))
            throw $util.ProtocolError("missing required 'rewardType_KS'", { instance: m });
        return m;
    };

    return BetGoldInfo_KS;
})();

$root.BetGoldInfo_YYL = (function() {

    /**
     * Properties of a BetGoldInfo_YYL.
     * @exports IBetGoldInfo_YYL
     * @interface IBetGoldInfo_YYL
     * @property {RewardType_YYL} rewardType_YYL BetGoldInfo_YYL rewardType_YYL
     * @property {Array.<number>|null} [gold] BetGoldInfo_YYL gold
     */

    /**
     * Constructs a new BetGoldInfo_YYL.
     * @exports BetGoldInfo_YYL
     * @classdesc Represents a BetGoldInfo_YYL.
     * @implements IBetGoldInfo_YYL
     * @constructor
     * @param {IBetGoldInfo_YYL=} [p] Properties to set
     */
    function BetGoldInfo_YYL(p) {
        this.gold = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetGoldInfo_YYL rewardType_YYL.
     * @member {RewardType_YYL} rewardType_YYL
     * @memberof BetGoldInfo_YYL
     * @instance
     */
    BetGoldInfo_YYL.prototype.rewardType_YYL = 1;

    /**
     * BetGoldInfo_YYL gold.
     * @member {Array.<number>} gold
     * @memberof BetGoldInfo_YYL
     * @instance
     */
    BetGoldInfo_YYL.prototype.gold = $util.emptyArray;

    /**
     * Creates a new BetGoldInfo_YYL instance using the specified properties.
     * @function create
     * @memberof BetGoldInfo_YYL
     * @static
     * @param {IBetGoldInfo_YYL=} [properties] Properties to set
     * @returns {BetGoldInfo_YYL} BetGoldInfo_YYL instance
     */
    BetGoldInfo_YYL.create = function create(properties) {
        return new BetGoldInfo_YYL(properties);
    };

    /**
     * Encodes the specified BetGoldInfo_YYL message. Does not implicitly {@link BetGoldInfo_YYL.verify|verify} messages.
     * @function encode
     * @memberof BetGoldInfo_YYL
     * @static
     * @param {IBetGoldInfo_YYL} m BetGoldInfo_YYL message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetGoldInfo_YYL.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.rewardType_YYL);
        if (m.gold != null && m.gold.length) {
            for (var i = 0; i < m.gold.length; ++i)
                w.uint32(16).int32(m.gold[i]);
        }
        return w;
    };

    /**
     * Decodes a BetGoldInfo_YYL message from the specified reader or buffer.
     * @function decode
     * @memberof BetGoldInfo_YYL
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetGoldInfo_YYL} BetGoldInfo_YYL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetGoldInfo_YYL.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetGoldInfo_YYL();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rewardType_YYL = r.int32();
                break;
            case 2:
                if (!(m.gold && m.gold.length))
                    m.gold = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.gold.push(r.int32());
                } else
                    m.gold.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rewardType_YYL"))
            throw $util.ProtocolError("missing required 'rewardType_YYL'", { instance: m });
        return m;
    };

    return BetGoldInfo_YYL;
})();

$root.BetInfo = (function() {

    /**
     * Properties of a BetInfo.
     * @exports IBetInfo
     * @interface IBetInfo
     * @property {PlayType} playType BetInfo playType
     * @property {IBetGoldInfo_KS|null} [ksGoldInfo] BetInfo ksGoldInfo
     * @property {IBetGoldInfo_YYL|null} [yylGoldInfo] BetInfo yylGoldInfo
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
     * BetInfo playType.
     * @member {PlayType} playType
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.playType = 1;

    /**
     * BetInfo ksGoldInfo.
     * @member {IBetGoldInfo_KS|null|undefined} ksGoldInfo
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.ksGoldInfo = null;

    /**
     * BetInfo yylGoldInfo.
     * @member {IBetGoldInfo_YYL|null|undefined} yylGoldInfo
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.yylGoldInfo = null;

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
        w.uint32(8).int32(m.playType);
        if (m.ksGoldInfo != null && m.hasOwnProperty("ksGoldInfo"))
            $root.BetGoldInfo_KS.encode(m.ksGoldInfo, w.uint32(18).fork()).ldelim();
        if (m.yylGoldInfo != null && m.hasOwnProperty("yylGoldInfo"))
            $root.BetGoldInfo_YYL.encode(m.yylGoldInfo, w.uint32(26).fork()).ldelim();
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
                m.playType = r.int32();
                break;
            case 2:
                m.ksGoldInfo = $root.BetGoldInfo_KS.decode(r, r.uint32());
                break;
            case 3:
                m.yylGoldInfo = $root.BetGoldInfo_YYL.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        return m;
    };

    return BetInfo;
})();

$root.PlayerBetInfo = (function() {

    /**
     * Properties of a PlayerBetInfo.
     * @exports IPlayerBetInfo
     * @interface IPlayerBetInfo
     * @property {string} playerId PlayerBetInfo playerId
     * @property {Array.<IBetInfo>|null} [betInfo] PlayerBetInfo betInfo
     * @property {boolean} isShenSuanzi PlayerBetInfo isShenSuanzi
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
        this.betInfo = [];
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
     * PlayerBetInfo betInfo.
     * @member {Array.<IBetInfo>} betInfo
     * @memberof PlayerBetInfo
     * @instance
     */
    PlayerBetInfo.prototype.betInfo = $util.emptyArray;

    /**
     * PlayerBetInfo isShenSuanzi.
     * @member {boolean} isShenSuanzi
     * @memberof PlayerBetInfo
     * @instance
     */
    PlayerBetInfo.prototype.isShenSuanzi = false;

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
        if (m.betInfo != null && m.betInfo.length) {
            for (var i = 0; i < m.betInfo.length; ++i)
                $root.BetInfo.encode(m.betInfo[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(24).bool(m.isShenSuanzi);
        w.uint32(32).int32(m.gold);
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
                if (!(m.betInfo && m.betInfo.length))
                    m.betInfo = [];
                m.betInfo.push($root.BetInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.isShenSuanzi = r.bool();
                break;
            case 4:
                m.gold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("isShenSuanzi"))
            throw $util.ProtocolError("missing required 'isShenSuanzi'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return PlayerBetInfo;
})();

$root.BetAreaInfo = (function() {

    /**
     * Properties of a BetAreaInfo.
     * @exports IBetAreaInfo
     * @interface IBetAreaInfo
     * @property {PlayType} playType BetAreaInfo playType
     * @property {RewardType_KS|null} [rewardType_KS] BetAreaInfo rewardType_KS
     * @property {RewardType_YYL|null} [rewardType_YYL] BetAreaInfo rewardType_YYL
     * @property {number} gold BetAreaInfo gold
     */

    /**
     * Constructs a new BetAreaInfo.
     * @exports BetAreaInfo
     * @classdesc Represents a BetAreaInfo.
     * @implements IBetAreaInfo
     * @constructor
     * @param {IBetAreaInfo=} [p] Properties to set
     */
    function BetAreaInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetAreaInfo playType.
     * @member {PlayType} playType
     * @memberof BetAreaInfo
     * @instance
     */
    BetAreaInfo.prototype.playType = 1;

    /**
     * BetAreaInfo rewardType_KS.
     * @member {RewardType_KS} rewardType_KS
     * @memberof BetAreaInfo
     * @instance
     */
    BetAreaInfo.prototype.rewardType_KS = 1;

    /**
     * BetAreaInfo rewardType_YYL.
     * @member {RewardType_YYL} rewardType_YYL
     * @memberof BetAreaInfo
     * @instance
     */
    BetAreaInfo.prototype.rewardType_YYL = 1;

    /**
     * BetAreaInfo gold.
     * @member {number} gold
     * @memberof BetAreaInfo
     * @instance
     */
    BetAreaInfo.prototype.gold = 0;

    /**
     * Creates a new BetAreaInfo instance using the specified properties.
     * @function create
     * @memberof BetAreaInfo
     * @static
     * @param {IBetAreaInfo=} [properties] Properties to set
     * @returns {BetAreaInfo} BetAreaInfo instance
     */
    BetAreaInfo.create = function create(properties) {
        return new BetAreaInfo(properties);
    };

    /**
     * Encodes the specified BetAreaInfo message. Does not implicitly {@link BetAreaInfo.verify|verify} messages.
     * @function encode
     * @memberof BetAreaInfo
     * @static
     * @param {IBetAreaInfo} m BetAreaInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetAreaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        if (m.rewardType_KS != null && m.hasOwnProperty("rewardType_KS"))
            w.uint32(16).int32(m.rewardType_KS);
        if (m.rewardType_YYL != null && m.hasOwnProperty("rewardType_YYL"))
            w.uint32(24).int32(m.rewardType_YYL);
        w.uint32(32).int32(m.gold);
        return w;
    };

    /**
     * Decodes a BetAreaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BetAreaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetAreaInfo} BetAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetAreaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetAreaInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.rewardType_KS = r.int32();
                break;
            case 3:
                m.rewardType_YYL = r.int32();
                break;
            case 4:
                m.gold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return BetAreaInfo;
})();

$root.PlayerOnlineInfo = (function() {

    /**
     * Properties of a PlayerOnlineInfo.
     * @exports IPlayerOnlineInfo
     * @interface IPlayerOnlineInfo
     * @property {IYaoYaoLePlayerInfo} yaoYaoLePlayerInfo PlayerOnlineInfo yaoYaoLePlayerInfo
     * @property {number} addChipNum PlayerOnlineInfo addChipNum
     * @property {number} addChipGold PlayerOnlineInfo addChipGold
     */

    /**
     * Constructs a new PlayerOnlineInfo.
     * @exports PlayerOnlineInfo
     * @classdesc Represents a PlayerOnlineInfo.
     * @implements IPlayerOnlineInfo
     * @constructor
     * @param {IPlayerOnlineInfo=} [p] Properties to set
     */
    function PlayerOnlineInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerOnlineInfo yaoYaoLePlayerInfo.
     * @member {IYaoYaoLePlayerInfo} yaoYaoLePlayerInfo
     * @memberof PlayerOnlineInfo
     * @instance
     */
    PlayerOnlineInfo.prototype.yaoYaoLePlayerInfo = null;

    /**
     * PlayerOnlineInfo addChipNum.
     * @member {number} addChipNum
     * @memberof PlayerOnlineInfo
     * @instance
     */
    PlayerOnlineInfo.prototype.addChipNum = 0;

    /**
     * PlayerOnlineInfo addChipGold.
     * @member {number} addChipGold
     * @memberof PlayerOnlineInfo
     * @instance
     */
    PlayerOnlineInfo.prototype.addChipGold = 0;

    /**
     * Creates a new PlayerOnlineInfo instance using the specified properties.
     * @function create
     * @memberof PlayerOnlineInfo
     * @static
     * @param {IPlayerOnlineInfo=} [properties] Properties to set
     * @returns {PlayerOnlineInfo} PlayerOnlineInfo instance
     */
    PlayerOnlineInfo.create = function create(properties) {
        return new PlayerOnlineInfo(properties);
    };

    /**
     * Encodes the specified PlayerOnlineInfo message. Does not implicitly {@link PlayerOnlineInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerOnlineInfo
     * @static
     * @param {IPlayerOnlineInfo} m PlayerOnlineInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerOnlineInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.YaoYaoLePlayerInfo.encode(m.yaoYaoLePlayerInfo, w.uint32(10).fork()).ldelim();
        w.uint32(16).int32(m.addChipNum);
        w.uint32(24).int32(m.addChipGold);
        return w;
    };

    /**
     * Decodes a PlayerOnlineInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerOnlineInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerOnlineInfo} PlayerOnlineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerOnlineInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerOnlineInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.yaoYaoLePlayerInfo = $root.YaoYaoLePlayerInfo.decode(r, r.uint32());
                break;
            case 2:
                m.addChipNum = r.int32();
                break;
            case 3:
                m.addChipGold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("yaoYaoLePlayerInfo"))
            throw $util.ProtocolError("missing required 'yaoYaoLePlayerInfo'", { instance: m });
        if (!m.hasOwnProperty("addChipNum"))
            throw $util.ProtocolError("missing required 'addChipNum'", { instance: m });
        if (!m.hasOwnProperty("addChipGold"))
            throw $util.ProtocolError("missing required 'addChipGold'", { instance: m });
        return m;
    };

    return PlayerOnlineInfo;
})();

$root.MasterInfo = (function() {

    /**
     * Properties of a MasterInfo.
     * @exports IMasterInfo
     * @interface IMasterInfo
     * @property {number} index MasterInfo index
     * @property {IPlayerOnlineInfo} playerOnlineInfo MasterInfo playerOnlineInfo
     */

    /**
     * Constructs a new MasterInfo.
     * @exports MasterInfo
     * @classdesc Represents a MasterInfo.
     * @implements IMasterInfo
     * @constructor
     * @param {IMasterInfo=} [p] Properties to set
     */
    function MasterInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MasterInfo index.
     * @member {number} index
     * @memberof MasterInfo
     * @instance
     */
    MasterInfo.prototype.index = 0;

    /**
     * MasterInfo playerOnlineInfo.
     * @member {IPlayerOnlineInfo} playerOnlineInfo
     * @memberof MasterInfo
     * @instance
     */
    MasterInfo.prototype.playerOnlineInfo = null;

    /**
     * Creates a new MasterInfo instance using the specified properties.
     * @function create
     * @memberof MasterInfo
     * @static
     * @param {IMasterInfo=} [properties] Properties to set
     * @returns {MasterInfo} MasterInfo instance
     */
    MasterInfo.create = function create(properties) {
        return new MasterInfo(properties);
    };

    /**
     * Encodes the specified MasterInfo message. Does not implicitly {@link MasterInfo.verify|verify} messages.
     * @function encode
     * @memberof MasterInfo
     * @static
     * @param {IMasterInfo} m MasterInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MasterInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        $root.PlayerOnlineInfo.encode(m.playerOnlineInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a MasterInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MasterInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MasterInfo} MasterInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MasterInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MasterInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.playerOnlineInfo = $root.PlayerOnlineInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("playerOnlineInfo"))
            throw $util.ProtocolError("missing required 'playerOnlineInfo'", { instance: m });
        return m;
    };

    return MasterInfo;
})();

$root.SitPlayerWinInfo = (function() {

    /**
     * Properties of a SitPlayerWinInfo.
     * @exports ISitPlayerWinInfo
     * @interface ISitPlayerWinInfo
     * @property {number} index SitPlayerWinInfo index
     * @property {number} winGold SitPlayerWinInfo winGold
     */

    /**
     * Constructs a new SitPlayerWinInfo.
     * @exports SitPlayerWinInfo
     * @classdesc Represents a SitPlayerWinInfo.
     * @implements ISitPlayerWinInfo
     * @constructor
     * @param {ISitPlayerWinInfo=} [p] Properties to set
     */
    function SitPlayerWinInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SitPlayerWinInfo index.
     * @member {number} index
     * @memberof SitPlayerWinInfo
     * @instance
     */
    SitPlayerWinInfo.prototype.index = 0;

    /**
     * SitPlayerWinInfo winGold.
     * @member {number} winGold
     * @memberof SitPlayerWinInfo
     * @instance
     */
    SitPlayerWinInfo.prototype.winGold = 0;

    /**
     * Creates a new SitPlayerWinInfo instance using the specified properties.
     * @function create
     * @memberof SitPlayerWinInfo
     * @static
     * @param {ISitPlayerWinInfo=} [properties] Properties to set
     * @returns {SitPlayerWinInfo} SitPlayerWinInfo instance
     */
    SitPlayerWinInfo.create = function create(properties) {
        return new SitPlayerWinInfo(properties);
    };

    /**
     * Encodes the specified SitPlayerWinInfo message. Does not implicitly {@link SitPlayerWinInfo.verify|verify} messages.
     * @function encode
     * @memberof SitPlayerWinInfo
     * @static
     * @param {ISitPlayerWinInfo} m SitPlayerWinInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SitPlayerWinInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(16).int32(m.index);
        w.uint32(24).int32(m.winGold);
        return w;
    };

    /**
     * Decodes a SitPlayerWinInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SitPlayerWinInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SitPlayerWinInfo} SitPlayerWinInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SitPlayerWinInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SitPlayerWinInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 2:
                m.index = r.int32();
                break;
            case 3:
                m.winGold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("winGold"))
            throw $util.ProtocolError("missing required 'winGold'", { instance: m });
        return m;
    };

    return SitPlayerWinInfo;
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
        return m;
    };

    return SettlementRoleInfo;
})();

$root.ClearingInfoPush = (function() {

    /**
     * Properties of a ClearingInfoPush.
     * @exports IClearingInfoPush
     * @interface IClearingInfoPush
     * @property {PlayType} playType ClearingInfoPush playType
     * @property {IRoundResult_KS|null} [roundResult_KS] ClearingInfoPush roundResult_KS
     * @property {IRoundResult_YYL|null} [roundResult_YYL] ClearingInfoPush roundResult_YYL
     * @property {Array.<ISitPlayerWinInfo>|null} [sitPlayerWinInfos] ClearingInfoPush sitPlayerWinInfos
     * @property {boolean} meIsBet ClearingInfoPush meIsBet
     * @property {number} myWinGold ClearingInfoPush myWinGold
     * @property {Array.<ISettlementRoleInfo>|null} [settlementRoleInfo] ClearingInfoPush settlementRoleInfo
     * @property {number} masterWinGold ClearingInfoPush masterWinGold
     */

    /**
     * Constructs a new ClearingInfoPush.
     * @exports ClearingInfoPush
     * @classdesc Represents a ClearingInfoPush.
     * @implements IClearingInfoPush
     * @constructor
     * @param {IClearingInfoPush=} [p] Properties to set
     */
    function ClearingInfoPush(p) {
        this.sitPlayerWinInfos = [];
        this.settlementRoleInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClearingInfoPush playType.
     * @member {PlayType} playType
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.playType = 1;

    /**
     * ClearingInfoPush roundResult_KS.
     * @member {IRoundResult_KS|null|undefined} roundResult_KS
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.roundResult_KS = null;

    /**
     * ClearingInfoPush roundResult_YYL.
     * @member {IRoundResult_YYL|null|undefined} roundResult_YYL
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.roundResult_YYL = null;

    /**
     * ClearingInfoPush sitPlayerWinInfos.
     * @member {Array.<ISitPlayerWinInfo>} sitPlayerWinInfos
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.sitPlayerWinInfos = $util.emptyArray;

    /**
     * ClearingInfoPush meIsBet.
     * @member {boolean} meIsBet
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.meIsBet = false;

    /**
     * ClearingInfoPush myWinGold.
     * @member {number} myWinGold
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.myWinGold = 0;

    /**
     * ClearingInfoPush settlementRoleInfo.
     * @member {Array.<ISettlementRoleInfo>} settlementRoleInfo
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.settlementRoleInfo = $util.emptyArray;

    /**
     * ClearingInfoPush masterWinGold.
     * @member {number} masterWinGold
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.masterWinGold = 0;

    /**
     * Creates a new ClearingInfoPush instance using the specified properties.
     * @function create
     * @memberof ClearingInfoPush
     * @static
     * @param {IClearingInfoPush=} [properties] Properties to set
     * @returns {ClearingInfoPush} ClearingInfoPush instance
     */
    ClearingInfoPush.create = function create(properties) {
        return new ClearingInfoPush(properties);
    };

    /**
     * Encodes the specified ClearingInfoPush message. Does not implicitly {@link ClearingInfoPush.verify|verify} messages.
     * @function encode
     * @memberof ClearingInfoPush
     * @static
     * @param {IClearingInfoPush} m ClearingInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClearingInfoPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        if (m.roundResult_KS != null && m.hasOwnProperty("roundResult_KS"))
            $root.RoundResult_KS.encode(m.roundResult_KS, w.uint32(18).fork()).ldelim();
        if (m.roundResult_YYL != null && m.hasOwnProperty("roundResult_YYL"))
            $root.RoundResult_YYL.encode(m.roundResult_YYL, w.uint32(26).fork()).ldelim();
        if (m.sitPlayerWinInfos != null && m.sitPlayerWinInfos.length) {
            for (var i = 0; i < m.sitPlayerWinInfos.length; ++i)
                $root.SitPlayerWinInfo.encode(m.sitPlayerWinInfos[i], w.uint32(34).fork()).ldelim();
        }
        w.uint32(40).bool(m.meIsBet);
        w.uint32(48).int32(m.myWinGold);
        if (m.settlementRoleInfo != null && m.settlementRoleInfo.length) {
            for (var i = 0; i < m.settlementRoleInfo.length; ++i)
                $root.SettlementRoleInfo.encode(m.settlementRoleInfo[i], w.uint32(58).fork()).ldelim();
        }
        w.uint32(64).int32(m.masterWinGold);
        return w;
    };

    /**
     * Decodes a ClearingInfoPush message from the specified reader or buffer.
     * @function decode
     * @memberof ClearingInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClearingInfoPush} ClearingInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClearingInfoPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClearingInfoPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.roundResult_KS = $root.RoundResult_KS.decode(r, r.uint32());
                break;
            case 3:
                m.roundResult_YYL = $root.RoundResult_YYL.decode(r, r.uint32());
                break;
            case 4:
                if (!(m.sitPlayerWinInfos && m.sitPlayerWinInfos.length))
                    m.sitPlayerWinInfos = [];
                m.sitPlayerWinInfos.push($root.SitPlayerWinInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.meIsBet = r.bool();
                break;
            case 6:
                m.myWinGold = r.int32();
                break;
            case 7:
                if (!(m.settlementRoleInfo && m.settlementRoleInfo.length))
                    m.settlementRoleInfo = [];
                m.settlementRoleInfo.push($root.SettlementRoleInfo.decode(r, r.uint32()));
                break;
            case 8:
                m.masterWinGold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("meIsBet"))
            throw $util.ProtocolError("missing required 'meIsBet'", { instance: m });
        if (!m.hasOwnProperty("myWinGold"))
            throw $util.ProtocolError("missing required 'myWinGold'", { instance: m });
        if (!m.hasOwnProperty("masterWinGold"))
            throw $util.ProtocolError("missing required 'masterWinGold'", { instance: m });
        return m;
    };

    return ClearingInfoPush;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {PlayType} playType RoomInfo playType
     * @property {Array.<IRoundResult_KS>|null} [roundResult_KSList] RoomInfo roundResult_KSList
     * @property {Array.<IRoundResult_YYL>|null} [roundResult_YYLList] RoomInfo roundResult_YYLList
     * @property {Step} step RoomInfo step
     * @property {number} remainTimeSec RoomInfo remainTimeSec
     * @property {Array.<IPlayerBetInfo>|null} [playerBetInfos] RoomInfo playerBetInfos
     * @property {IPlayerBetInfo|null} [myPlayerBetInfo] RoomInfo myPlayerBetInfo
     * @property {IYaoYaoLePlayerInfo} myPlayerInfo RoomInfo myPlayerInfo
     * @property {Array.<ISitPlayerInfo>|null} [sitPlayerInfo] RoomInfo sitPlayerInfo
     * @property {IClearingInfoPush|null} [clearingInfoPush] RoomInfo clearingInfoPush
     * @property {number} betBaseLimit RoomInfo betBaseLimit
     * @property {number} betCoinLimit RoomInfo betCoinLimit
     * @property {number} roundBetCoinLimit RoomInfo roundBetCoinLimit
     */

    /**
     * Constructs a new RoomInfo.
     * @exports RoomInfo
     * @classdesc Represents a RoomInfo.
     * @implements IRoomInfo
     * @constructor
     * @param {IRoomInfo=} [p] Properties to set
     */
    function RoomInfo(p) {
        this.roundResult_KSList = [];
        this.roundResult_YYLList = [];
        this.playerBetInfos = [];
        this.sitPlayerInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomInfo playType.
     * @member {PlayType} playType
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.playType = 1;

    /**
     * RoomInfo roundResult_KSList.
     * @member {Array.<IRoundResult_KS>} roundResult_KSList
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.roundResult_KSList = $util.emptyArray;

    /**
     * RoomInfo roundResult_YYLList.
     * @member {Array.<IRoundResult_YYL>} roundResult_YYLList
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.roundResult_YYLList = $util.emptyArray;

    /**
     * RoomInfo step.
     * @member {Step} step
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.step = 1;

    /**
     * RoomInfo remainTimeSec.
     * @member {number} remainTimeSec
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.remainTimeSec = 0;

    /**
     * RoomInfo playerBetInfos.
     * @member {Array.<IPlayerBetInfo>} playerBetInfos
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.playerBetInfos = $util.emptyArray;

    /**
     * RoomInfo myPlayerBetInfo.
     * @member {IPlayerBetInfo|null|undefined} myPlayerBetInfo
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.myPlayerBetInfo = null;

    /**
     * RoomInfo myPlayerInfo.
     * @member {IYaoYaoLePlayerInfo} myPlayerInfo
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.myPlayerInfo = null;

    /**
     * RoomInfo sitPlayerInfo.
     * @member {Array.<ISitPlayerInfo>} sitPlayerInfo
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.sitPlayerInfo = $util.emptyArray;

    /**
     * RoomInfo clearingInfoPush.
     * @member {IClearingInfoPush|null|undefined} clearingInfoPush
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.clearingInfoPush = null;

    /**
     * RoomInfo betBaseLimit.
     * @member {number} betBaseLimit
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.betBaseLimit = 0;

    /**
     * RoomInfo betCoinLimit.
     * @member {number} betCoinLimit
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.betCoinLimit = 0;

    /**
     * RoomInfo roundBetCoinLimit.
     * @member {number} roundBetCoinLimit
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.roundBetCoinLimit = 0;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @function create
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo=} [properties] Properties to set
     * @returns {RoomInfo} RoomInfo instance
     */
    RoomInfo.create = function create(properties) {
        return new RoomInfo(properties);
    };

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} m RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        if (m.roundResult_KSList != null && m.roundResult_KSList.length) {
            for (var i = 0; i < m.roundResult_KSList.length; ++i)
                $root.RoundResult_KS.encode(m.roundResult_KSList[i], w.uint32(18).fork()).ldelim();
        }
        if (m.roundResult_YYLList != null && m.roundResult_YYLList.length) {
            for (var i = 0; i < m.roundResult_YYLList.length; ++i)
                $root.RoundResult_YYL.encode(m.roundResult_YYLList[i], w.uint32(26).fork()).ldelim();
        }
        w.uint32(32).int32(m.step);
        w.uint32(40).int32(m.remainTimeSec);
        if (m.playerBetInfos != null && m.playerBetInfos.length) {
            for (var i = 0; i < m.playerBetInfos.length; ++i)
                $root.PlayerBetInfo.encode(m.playerBetInfos[i], w.uint32(50).fork()).ldelim();
        }
        if (m.myPlayerBetInfo != null && m.hasOwnProperty("myPlayerBetInfo"))
            $root.PlayerBetInfo.encode(m.myPlayerBetInfo, w.uint32(58).fork()).ldelim();
        $root.YaoYaoLePlayerInfo.encode(m.myPlayerInfo, w.uint32(66).fork()).ldelim();
        if (m.sitPlayerInfo != null && m.sitPlayerInfo.length) {
            for (var i = 0; i < m.sitPlayerInfo.length; ++i)
                $root.SitPlayerInfo.encode(m.sitPlayerInfo[i], w.uint32(74).fork()).ldelim();
        }
        if (m.clearingInfoPush != null && m.hasOwnProperty("clearingInfoPush"))
            $root.ClearingInfoPush.encode(m.clearingInfoPush, w.uint32(82).fork()).ldelim();
        w.uint32(88).int32(m.betBaseLimit);
        w.uint32(96).int32(m.betCoinLimit);
        w.uint32(104).int32(m.roundBetCoinLimit);
        return w;
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                if (!(m.roundResult_KSList && m.roundResult_KSList.length))
                    m.roundResult_KSList = [];
                m.roundResult_KSList.push($root.RoundResult_KS.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.roundResult_YYLList && m.roundResult_YYLList.length))
                    m.roundResult_YYLList = [];
                m.roundResult_YYLList.push($root.RoundResult_YYL.decode(r, r.uint32()));
                break;
            case 4:
                m.step = r.int32();
                break;
            case 5:
                m.remainTimeSec = r.int32();
                break;
            case 6:
                if (!(m.playerBetInfos && m.playerBetInfos.length))
                    m.playerBetInfos = [];
                m.playerBetInfos.push($root.PlayerBetInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.myPlayerBetInfo = $root.PlayerBetInfo.decode(r, r.uint32());
                break;
            case 8:
                m.myPlayerInfo = $root.YaoYaoLePlayerInfo.decode(r, r.uint32());
                break;
            case 9:
                if (!(m.sitPlayerInfo && m.sitPlayerInfo.length))
                    m.sitPlayerInfo = [];
                m.sitPlayerInfo.push($root.SitPlayerInfo.decode(r, r.uint32()));
                break;
            case 10:
                m.clearingInfoPush = $root.ClearingInfoPush.decode(r, r.uint32());
                break;
            case 11:
                m.betBaseLimit = r.int32();
                break;
            case 12:
                m.betCoinLimit = r.int32();
                break;
            case 13:
                m.roundBetCoinLimit = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("step"))
            throw $util.ProtocolError("missing required 'step'", { instance: m });
        if (!m.hasOwnProperty("remainTimeSec"))
            throw $util.ProtocolError("missing required 'remainTimeSec'", { instance: m });
        if (!m.hasOwnProperty("myPlayerInfo"))
            throw $util.ProtocolError("missing required 'myPlayerInfo'", { instance: m });
        if (!m.hasOwnProperty("betBaseLimit"))
            throw $util.ProtocolError("missing required 'betBaseLimit'", { instance: m });
        if (!m.hasOwnProperty("betCoinLimit"))
            throw $util.ProtocolError("missing required 'betCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("roundBetCoinLimit"))
            throw $util.ProtocolError("missing required 'roundBetCoinLimit'", { instance: m });
        return m;
    };

    return RoomInfo;
})();

$root.BetReq = (function() {

    /**
     * Properties of a BetReq.
     * @exports IBetReq
     * @interface IBetReq
     * @property {PlayType} playType BetReq playType
     * @property {RewardType_KS|null} [rewardType_KS] BetReq rewardType_KS
     * @property {RewardType_YYL|null} [rewardType_YYL] BetReq rewardType_YYL
     * @property {number} gold BetReq gold
     */

    /**
     * Constructs a new BetReq.
     * @exports BetReq
     * @classdesc Represents a BetReq.
     * @implements IBetReq
     * @constructor
     * @param {IBetReq=} [p] Properties to set
     */
    function BetReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetReq playType.
     * @member {PlayType} playType
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.playType = 1;

    /**
     * BetReq rewardType_KS.
     * @member {RewardType_KS} rewardType_KS
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.rewardType_KS = 1;

    /**
     * BetReq rewardType_YYL.
     * @member {RewardType_YYL} rewardType_YYL
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.rewardType_YYL = 1;

    /**
     * BetReq gold.
     * @member {number} gold
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.gold = 0;

    /**
     * Creates a new BetReq instance using the specified properties.
     * @function create
     * @memberof BetReq
     * @static
     * @param {IBetReq=} [properties] Properties to set
     * @returns {BetReq} BetReq instance
     */
    BetReq.create = function create(properties) {
        return new BetReq(properties);
    };

    /**
     * Encodes the specified BetReq message. Does not implicitly {@link BetReq.verify|verify} messages.
     * @function encode
     * @memberof BetReq
     * @static
     * @param {IBetReq} m BetReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        if (m.rewardType_KS != null && m.hasOwnProperty("rewardType_KS"))
            w.uint32(16).int32(m.rewardType_KS);
        if (m.rewardType_YYL != null && m.hasOwnProperty("rewardType_YYL"))
            w.uint32(24).int32(m.rewardType_YYL);
        w.uint32(32).int32(m.gold);
        return w;
    };

    /**
     * Decodes a BetReq message from the specified reader or buffer.
     * @function decode
     * @memberof BetReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetReq} BetReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.rewardType_KS = r.int32();
                break;
            case 3:
                m.rewardType_YYL = r.int32();
                break;
            case 4:
                m.gold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return BetReq;
})();

$root.BetRsp = (function() {

    /**
     * Properties of a BetRsp.
     * @exports IBetRsp
     * @interface IBetRsp
     * @property {boolean} success BetRsp success
     * @property {string} tip BetRsp tip
     */

    /**
     * Constructs a new BetRsp.
     * @exports BetRsp
     * @classdesc Represents a BetRsp.
     * @implements IBetRsp
     * @constructor
     * @param {IBetRsp=} [p] Properties to set
     */
    function BetRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetRsp success.
     * @member {boolean} success
     * @memberof BetRsp
     * @instance
     */
    BetRsp.prototype.success = false;

    /**
     * BetRsp tip.
     * @member {string} tip
     * @memberof BetRsp
     * @instance
     */
    BetRsp.prototype.tip = "";

    /**
     * Creates a new BetRsp instance using the specified properties.
     * @function create
     * @memberof BetRsp
     * @static
     * @param {IBetRsp=} [properties] Properties to set
     * @returns {BetRsp} BetRsp instance
     */
    BetRsp.create = function create(properties) {
        return new BetRsp(properties);
    };

    /**
     * Encodes the specified BetRsp message. Does not implicitly {@link BetRsp.verify|verify} messages.
     * @function encode
     * @memberof BetRsp
     * @static
     * @param {IBetRsp} m BetRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a BetRsp message from the specified reader or buffer.
     * @function decode
     * @memberof BetRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetRsp} BetRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("tip"))
            throw $util.ProtocolError("missing required 'tip'", { instance: m });
        return m;
    };

    return BetRsp;
})();

$root.BetPushInfos = (function() {

    /**
     * Properties of a BetPushInfos.
     * @exports IBetPushInfos
     * @interface IBetPushInfos
     * @property {Array.<IPlayerBetInfo>|null} [playerBetInfos] BetPushInfos playerBetInfos
     */

    /**
     * Constructs a new BetPushInfos.
     * @exports BetPushInfos
     * @classdesc Represents a BetPushInfos.
     * @implements IBetPushInfos
     * @constructor
     * @param {IBetPushInfos=} [p] Properties to set
     */
    function BetPushInfos(p) {
        this.playerBetInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetPushInfos playerBetInfos.
     * @member {Array.<IPlayerBetInfo>} playerBetInfos
     * @memberof BetPushInfos
     * @instance
     */
    BetPushInfos.prototype.playerBetInfos = $util.emptyArray;

    /**
     * Creates a new BetPushInfos instance using the specified properties.
     * @function create
     * @memberof BetPushInfos
     * @static
     * @param {IBetPushInfos=} [properties] Properties to set
     * @returns {BetPushInfos} BetPushInfos instance
     */
    BetPushInfos.create = function create(properties) {
        return new BetPushInfos(properties);
    };

    /**
     * Encodes the specified BetPushInfos message. Does not implicitly {@link BetPushInfos.verify|verify} messages.
     * @function encode
     * @memberof BetPushInfos
     * @static
     * @param {IBetPushInfos} m BetPushInfos message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetPushInfos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerBetInfos != null && m.playerBetInfos.length) {
            for (var i = 0; i < m.playerBetInfos.length; ++i)
                $root.PlayerBetInfo.encode(m.playerBetInfos[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BetPushInfos message from the specified reader or buffer.
     * @function decode
     * @memberof BetPushInfos
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetPushInfos} BetPushInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetPushInfos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetPushInfos();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerBetInfos && m.playerBetInfos.length))
                    m.playerBetInfos = [];
                m.playerBetInfos.push($root.PlayerBetInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BetPushInfos;
})();

$root.StepInfoPush = (function() {

    /**
     * Properties of a StepInfoPush.
     * @exports IStepInfoPush
     * @interface IStepInfoPush
     * @property {Step} step StepInfoPush step
     * @property {number} remainTimeSec StepInfoPush remainTimeSec
     */

    /**
     * Constructs a new StepInfoPush.
     * @exports StepInfoPush
     * @classdesc Represents a StepInfoPush.
     * @implements IStepInfoPush
     * @constructor
     * @param {IStepInfoPush=} [p] Properties to set
     */
    function StepInfoPush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * StepInfoPush step.
     * @member {Step} step
     * @memberof StepInfoPush
     * @instance
     */
    StepInfoPush.prototype.step = 1;

    /**
     * StepInfoPush remainTimeSec.
     * @member {number} remainTimeSec
     * @memberof StepInfoPush
     * @instance
     */
    StepInfoPush.prototype.remainTimeSec = 0;

    /**
     * Creates a new StepInfoPush instance using the specified properties.
     * @function create
     * @memberof StepInfoPush
     * @static
     * @param {IStepInfoPush=} [properties] Properties to set
     * @returns {StepInfoPush} StepInfoPush instance
     */
    StepInfoPush.create = function create(properties) {
        return new StepInfoPush(properties);
    };

    /**
     * Encodes the specified StepInfoPush message. Does not implicitly {@link StepInfoPush.verify|verify} messages.
     * @function encode
     * @memberof StepInfoPush
     * @static
     * @param {IStepInfoPush} m StepInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StepInfoPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.step);
        w.uint32(16).int32(m.remainTimeSec);
        return w;
    };

    /**
     * Decodes a StepInfoPush message from the specified reader or buffer.
     * @function decode
     * @memberof StepInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {StepInfoPush} StepInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StepInfoPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.StepInfoPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.step = r.int32();
                break;
            case 2:
                m.remainTimeSec = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("step"))
            throw $util.ProtocolError("missing required 'step'", { instance: m });
        if (!m.hasOwnProperty("remainTimeSec"))
            throw $util.ProtocolError("missing required 'remainTimeSec'", { instance: m });
        return m;
    };

    return StepInfoPush;
})();

$root.LeaveRoomReq = (function() {

    /**
     * Properties of a LeaveRoomReq.
     * @exports ILeaveRoomReq
     * @interface ILeaveRoomReq
     */

    /**
     * Constructs a new LeaveRoomReq.
     * @exports LeaveRoomReq
     * @classdesc Represents a LeaveRoomReq.
     * @implements ILeaveRoomReq
     * @constructor
     * @param {ILeaveRoomReq=} [p] Properties to set
     */
    function LeaveRoomReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new LeaveRoomReq instance using the specified properties.
     * @function create
     * @memberof LeaveRoomReq
     * @static
     * @param {ILeaveRoomReq=} [properties] Properties to set
     * @returns {LeaveRoomReq} LeaveRoomReq instance
     */
    LeaveRoomReq.create = function create(properties) {
        return new LeaveRoomReq(properties);
    };

    /**
     * Encodes the specified LeaveRoomReq message. Does not implicitly {@link LeaveRoomReq.verify|verify} messages.
     * @function encode
     * @memberof LeaveRoomReq
     * @static
     * @param {ILeaveRoomReq} m LeaveRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LeaveRoomReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a LeaveRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof LeaveRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LeaveRoomReq} LeaveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LeaveRoomReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LeaveRoomReq();
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

    return LeaveRoomReq;
})();

$root.LeaveRoomRsp = (function() {

    /**
     * Properties of a LeaveRoomRsp.
     * @exports ILeaveRoomRsp
     * @interface ILeaveRoomRsp
     * @property {boolean} success LeaveRoomRsp success
     * @property {string} tip LeaveRoomRsp tip
     */

    /**
     * Constructs a new LeaveRoomRsp.
     * @exports LeaveRoomRsp
     * @classdesc Represents a LeaveRoomRsp.
     * @implements ILeaveRoomRsp
     * @constructor
     * @param {ILeaveRoomRsp=} [p] Properties to set
     */
    function LeaveRoomRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LeaveRoomRsp success.
     * @member {boolean} success
     * @memberof LeaveRoomRsp
     * @instance
     */
    LeaveRoomRsp.prototype.success = false;

    /**
     * LeaveRoomRsp tip.
     * @member {string} tip
     * @memberof LeaveRoomRsp
     * @instance
     */
    LeaveRoomRsp.prototype.tip = "";

    /**
     * Creates a new LeaveRoomRsp instance using the specified properties.
     * @function create
     * @memberof LeaveRoomRsp
     * @static
     * @param {ILeaveRoomRsp=} [properties] Properties to set
     * @returns {LeaveRoomRsp} LeaveRoomRsp instance
     */
    LeaveRoomRsp.create = function create(properties) {
        return new LeaveRoomRsp(properties);
    };

    /**
     * Encodes the specified LeaveRoomRsp message. Does not implicitly {@link LeaveRoomRsp.verify|verify} messages.
     * @function encode
     * @memberof LeaveRoomRsp
     * @static
     * @param {ILeaveRoomRsp} m LeaveRoomRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LeaveRoomRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a LeaveRoomRsp message from the specified reader or buffer.
     * @function decode
     * @memberof LeaveRoomRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LeaveRoomRsp} LeaveRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LeaveRoomRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LeaveRoomRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("tip"))
            throw $util.ProtocolError("missing required 'tip'", { instance: m });
        return m;
    };

    return LeaveRoomRsp;
})();

$root.SitInfoPush = (function() {

    /**
     * Properties of a SitInfoPush.
     * @exports ISitInfoPush
     * @interface ISitInfoPush
     * @property {Array.<ISitPlayerInfo>|null} [sitPlayerInfo] SitInfoPush sitPlayerInfo
     */

    /**
     * Constructs a new SitInfoPush.
     * @exports SitInfoPush
     * @classdesc Represents a SitInfoPush.
     * @implements ISitInfoPush
     * @constructor
     * @param {ISitInfoPush=} [p] Properties to set
     */
    function SitInfoPush(p) {
        this.sitPlayerInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SitInfoPush sitPlayerInfo.
     * @member {Array.<ISitPlayerInfo>} sitPlayerInfo
     * @memberof SitInfoPush
     * @instance
     */
    SitInfoPush.prototype.sitPlayerInfo = $util.emptyArray;

    /**
     * Creates a new SitInfoPush instance using the specified properties.
     * @function create
     * @memberof SitInfoPush
     * @static
     * @param {ISitInfoPush=} [properties] Properties to set
     * @returns {SitInfoPush} SitInfoPush instance
     */
    SitInfoPush.create = function create(properties) {
        return new SitInfoPush(properties);
    };

    /**
     * Encodes the specified SitInfoPush message. Does not implicitly {@link SitInfoPush.verify|verify} messages.
     * @function encode
     * @memberof SitInfoPush
     * @static
     * @param {ISitInfoPush} m SitInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SitInfoPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.sitPlayerInfo != null && m.sitPlayerInfo.length) {
            for (var i = 0; i < m.sitPlayerInfo.length; ++i)
                $root.SitPlayerInfo.encode(m.sitPlayerInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SitInfoPush message from the specified reader or buffer.
     * @function decode
     * @memberof SitInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SitInfoPush} SitInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SitInfoPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SitInfoPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.sitPlayerInfo && m.sitPlayerInfo.length))
                    m.sitPlayerInfo = [];
                m.sitPlayerInfo.push($root.SitPlayerInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return SitInfoPush;
})();

$root.kitOutpush = (function() {

    /**
     * Properties of a kitOutpush.
     * @exports IkitOutpush
     * @interface IkitOutpush
     */

    /**
     * Constructs a new kitOutpush.
     * @exports kitOutpush
     * @classdesc Represents a kitOutpush.
     * @implements IkitOutpush
     * @constructor
     * @param {IkitOutpush=} [p] Properties to set
     */
    function kitOutpush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new kitOutpush instance using the specified properties.
     * @function create
     * @memberof kitOutpush
     * @static
     * @param {IkitOutpush=} [properties] Properties to set
     * @returns {kitOutpush} kitOutpush instance
     */
    kitOutpush.create = function create(properties) {
        return new kitOutpush(properties);
    };

    /**
     * Encodes the specified kitOutpush message. Does not implicitly {@link kitOutpush.verify|verify} messages.
     * @function encode
     * @memberof kitOutpush
     * @static
     * @param {IkitOutpush} m kitOutpush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    kitOutpush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a kitOutpush message from the specified reader or buffer.
     * @function decode
     * @memberof kitOutpush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {kitOutpush} kitOutpush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    kitOutpush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.kitOutpush();
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

    return kitOutpush;
})();

$root.OnlinePlayerInfoReq = (function() {

    /**
     * Properties of an OnlinePlayerInfoReq.
     * @exports IOnlinePlayerInfoReq
     * @interface IOnlinePlayerInfoReq
     */

    /**
     * Constructs a new OnlinePlayerInfoReq.
     * @exports OnlinePlayerInfoReq
     * @classdesc Represents an OnlinePlayerInfoReq.
     * @implements IOnlinePlayerInfoReq
     * @constructor
     * @param {IOnlinePlayerInfoReq=} [p] Properties to set
     */
    function OnlinePlayerInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new OnlinePlayerInfoReq instance using the specified properties.
     * @function create
     * @memberof OnlinePlayerInfoReq
     * @static
     * @param {IOnlinePlayerInfoReq=} [properties] Properties to set
     * @returns {OnlinePlayerInfoReq} OnlinePlayerInfoReq instance
     */
    OnlinePlayerInfoReq.create = function create(properties) {
        return new OnlinePlayerInfoReq(properties);
    };

    /**
     * Encodes the specified OnlinePlayerInfoReq message. Does not implicitly {@link OnlinePlayerInfoReq.verify|verify} messages.
     * @function encode
     * @memberof OnlinePlayerInfoReq
     * @static
     * @param {IOnlinePlayerInfoReq} m OnlinePlayerInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OnlinePlayerInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes an OnlinePlayerInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof OnlinePlayerInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OnlinePlayerInfoReq} OnlinePlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OnlinePlayerInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OnlinePlayerInfoReq();
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

    return OnlinePlayerInfoReq;
})();

$root.OnlinePlayerInfoRsp = (function() {

    /**
     * Properties of an OnlinePlayerInfoRsp.
     * @exports IOnlinePlayerInfoRsp
     * @interface IOnlinePlayerInfoRsp
     * @property {Array.<IPlayerOnlineInfo>|null} [playerOnlineInfo] OnlinePlayerInfoRsp playerOnlineInfo
     */

    /**
     * Constructs a new OnlinePlayerInfoRsp.
     * @exports OnlinePlayerInfoRsp
     * @classdesc Represents an OnlinePlayerInfoRsp.
     * @implements IOnlinePlayerInfoRsp
     * @constructor
     * @param {IOnlinePlayerInfoRsp=} [p] Properties to set
     */
    function OnlinePlayerInfoRsp(p) {
        this.playerOnlineInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * OnlinePlayerInfoRsp playerOnlineInfo.
     * @member {Array.<IPlayerOnlineInfo>} playerOnlineInfo
     * @memberof OnlinePlayerInfoRsp
     * @instance
     */
    OnlinePlayerInfoRsp.prototype.playerOnlineInfo = $util.emptyArray;

    /**
     * Creates a new OnlinePlayerInfoRsp instance using the specified properties.
     * @function create
     * @memberof OnlinePlayerInfoRsp
     * @static
     * @param {IOnlinePlayerInfoRsp=} [properties] Properties to set
     * @returns {OnlinePlayerInfoRsp} OnlinePlayerInfoRsp instance
     */
    OnlinePlayerInfoRsp.create = function create(properties) {
        return new OnlinePlayerInfoRsp(properties);
    };

    /**
     * Encodes the specified OnlinePlayerInfoRsp message. Does not implicitly {@link OnlinePlayerInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof OnlinePlayerInfoRsp
     * @static
     * @param {IOnlinePlayerInfoRsp} m OnlinePlayerInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OnlinePlayerInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerOnlineInfo != null && m.playerOnlineInfo.length) {
            for (var i = 0; i < m.playerOnlineInfo.length; ++i)
                $root.PlayerOnlineInfo.encode(m.playerOnlineInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an OnlinePlayerInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof OnlinePlayerInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OnlinePlayerInfoRsp} OnlinePlayerInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OnlinePlayerInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OnlinePlayerInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerOnlineInfo && m.playerOnlineInfo.length))
                    m.playerOnlineInfo = [];
                m.playerOnlineInfo.push($root.PlayerOnlineInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return OnlinePlayerInfoRsp;
})();

module.exports = $root;

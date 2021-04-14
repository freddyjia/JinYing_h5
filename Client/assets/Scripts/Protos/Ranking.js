/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Ranking || ($protobuf.roots.Ranking = {});

$root.RankUserData = (function() {

    /**
     * Properties of a RankUserData.
     * @exports IRankUserData
     * @interface IRankUserData
     * @property {number|Long} playerID RankUserData playerID
     * @property {string} username RankUserData username
     * @property {string} headImageUrl RankUserData headImageUrl
     * @property {string} headBox RankUserData headBox
     * @property {number} vipLv RankUserData vipLv
     * @property {string} count RankUserData count
     * @property {number} ranking RankUserData ranking
     */

    /**
     * Constructs a new RankUserData.
     * @exports RankUserData
     * @classdesc Represents a RankUserData.
     * @implements IRankUserData
     * @constructor
     * @param {IRankUserData=} [p] Properties to set
     */
    function RankUserData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RankUserData playerID.
     * @member {number|Long} playerID
     * @memberof RankUserData
     * @instance
     */
    RankUserData.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RankUserData username.
     * @member {string} username
     * @memberof RankUserData
     * @instance
     */
    RankUserData.prototype.username = "";

    /**
     * RankUserData headImageUrl.
     * @member {string} headImageUrl
     * @memberof RankUserData
     * @instance
     */
    RankUserData.prototype.headImageUrl = "";

    /**
     * RankUserData headBox.
     * @member {string} headBox
     * @memberof RankUserData
     * @instance
     */
    RankUserData.prototype.headBox = "";

    /**
     * RankUserData vipLv.
     * @member {number} vipLv
     * @memberof RankUserData
     * @instance
     */
    RankUserData.prototype.vipLv = 0;

    /**
     * RankUserData count.
     * @member {string} count
     * @memberof RankUserData
     * @instance
     */
    RankUserData.prototype.count = "";

    /**
     * RankUserData ranking.
     * @member {number} ranking
     * @memberof RankUserData
     * @instance
     */
    RankUserData.prototype.ranking = 0;

    /**
     * Creates a new RankUserData instance using the specified properties.
     * @function create
     * @memberof RankUserData
     * @static
     * @param {IRankUserData=} [properties] Properties to set
     * @returns {RankUserData} RankUserData instance
     */
    RankUserData.create = function create(properties) {
        return new RankUserData(properties);
    };

    /**
     * Encodes the specified RankUserData message. Does not implicitly {@link RankUserData.verify|verify} messages.
     * @function encode
     * @memberof RankUserData
     * @static
     * @param {IRankUserData} m RankUserData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankUserData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        w.uint32(18).string(m.username);
        w.uint32(26).string(m.headImageUrl);
        w.uint32(34).string(m.headBox);
        w.uint32(40).int32(m.vipLv);
        w.uint32(50).string(m.count);
        w.uint32(56).int32(m.ranking);
        return w;
    };

    /**
     * Decodes a RankUserData message from the specified reader or buffer.
     * @function decode
     * @memberof RankUserData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RankUserData} RankUserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankUserData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RankUserData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerID = r.int64();
                break;
            case 2:
                m.username = r.string();
                break;
            case 3:
                m.headImageUrl = r.string();
                break;
            case 4:
                m.headBox = r.string();
                break;
            case 5:
                m.vipLv = r.int32();
                break;
            case 6:
                m.count = r.string();
                break;
            case 7:
                m.ranking = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerID"))
            throw $util.ProtocolError("missing required 'playerID'", { instance: m });
        if (!m.hasOwnProperty("username"))
            throw $util.ProtocolError("missing required 'username'", { instance: m });
        if (!m.hasOwnProperty("headImageUrl"))
            throw $util.ProtocolError("missing required 'headImageUrl'", { instance: m });
        if (!m.hasOwnProperty("headBox"))
            throw $util.ProtocolError("missing required 'headBox'", { instance: m });
        if (!m.hasOwnProperty("vipLv"))
            throw $util.ProtocolError("missing required 'vipLv'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        if (!m.hasOwnProperty("ranking"))
            throw $util.ProtocolError("missing required 'ranking'", { instance: m });
        return m;
    };

    return RankUserData;
})();

$root.GetRankInfoReq = (function() {

    /**
     * Properties of a GetRankInfoReq.
     * @exports IGetRankInfoReq
     * @interface IGetRankInfoReq
     */

    /**
     * Constructs a new GetRankInfoReq.
     * @exports GetRankInfoReq
     * @classdesc Represents a GetRankInfoReq.
     * @implements IGetRankInfoReq
     * @constructor
     * @param {IGetRankInfoReq=} [p] Properties to set
     */
    function GetRankInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetRankInfoReq instance using the specified properties.
     * @function create
     * @memberof GetRankInfoReq
     * @static
     * @param {IGetRankInfoReq=} [properties] Properties to set
     * @returns {GetRankInfoReq} GetRankInfoReq instance
     */
    GetRankInfoReq.create = function create(properties) {
        return new GetRankInfoReq(properties);
    };

    /**
     * Encodes the specified GetRankInfoReq message. Does not implicitly {@link GetRankInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetRankInfoReq
     * @static
     * @param {IGetRankInfoReq} m GetRankInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetRankInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetRankInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetRankInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetRankInfoReq} GetRankInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetRankInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetRankInfoReq();
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

    return GetRankInfoReq;
})();

$root.RankInfoData = (function() {

    /**
     * Properties of a RankInfoData.
     * @exports IRankInfoData
     * @interface IRankInfoData
     * @property {number} rankType RankInfoData rankType
     * @property {string} rankName RankInfoData rankName
     * @property {string} rankTypeText RankInfoData rankTypeText
     */

    /**
     * Constructs a new RankInfoData.
     * @exports RankInfoData
     * @classdesc Represents a RankInfoData.
     * @implements IRankInfoData
     * @constructor
     * @param {IRankInfoData=} [p] Properties to set
     */
    function RankInfoData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RankInfoData rankType.
     * @member {number} rankType
     * @memberof RankInfoData
     * @instance
     */
    RankInfoData.prototype.rankType = 0;

    /**
     * RankInfoData rankName.
     * @member {string} rankName
     * @memberof RankInfoData
     * @instance
     */
    RankInfoData.prototype.rankName = "";

    /**
     * RankInfoData rankTypeText.
     * @member {string} rankTypeText
     * @memberof RankInfoData
     * @instance
     */
    RankInfoData.prototype.rankTypeText = "";

    /**
     * Creates a new RankInfoData instance using the specified properties.
     * @function create
     * @memberof RankInfoData
     * @static
     * @param {IRankInfoData=} [properties] Properties to set
     * @returns {RankInfoData} RankInfoData instance
     */
    RankInfoData.create = function create(properties) {
        return new RankInfoData(properties);
    };

    /**
     * Encodes the specified RankInfoData message. Does not implicitly {@link RankInfoData.verify|verify} messages.
     * @function encode
     * @memberof RankInfoData
     * @static
     * @param {IRankInfoData} m RankInfoData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankInfoData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.rankType);
        w.uint32(18).string(m.rankName);
        w.uint32(26).string(m.rankTypeText);
        return w;
    };

    /**
     * Decodes a RankInfoData message from the specified reader or buffer.
     * @function decode
     * @memberof RankInfoData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RankInfoData} RankInfoData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankInfoData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RankInfoData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rankType = r.int32();
                break;
            case 2:
                m.rankName = r.string();
                break;
            case 3:
                m.rankTypeText = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rankType"))
            throw $util.ProtocolError("missing required 'rankType'", { instance: m });
        if (!m.hasOwnProperty("rankName"))
            throw $util.ProtocolError("missing required 'rankName'", { instance: m });
        if (!m.hasOwnProperty("rankTypeText"))
            throw $util.ProtocolError("missing required 'rankTypeText'", { instance: m });
        return m;
    };

    return RankInfoData;
})();

$root.GetRankInfoRes = (function() {

    /**
     * Properties of a GetRankInfoRes.
     * @exports IGetRankInfoRes
     * @interface IGetRankInfoRes
     * @property {Array.<IRankInfoData>|null} [rankInfoList] GetRankInfoRes rankInfoList
     */

    /**
     * Constructs a new GetRankInfoRes.
     * @exports GetRankInfoRes
     * @classdesc Represents a GetRankInfoRes.
     * @implements IGetRankInfoRes
     * @constructor
     * @param {IGetRankInfoRes=} [p] Properties to set
     */
    function GetRankInfoRes(p) {
        this.rankInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetRankInfoRes rankInfoList.
     * @member {Array.<IRankInfoData>} rankInfoList
     * @memberof GetRankInfoRes
     * @instance
     */
    GetRankInfoRes.prototype.rankInfoList = $util.emptyArray;

    /**
     * Creates a new GetRankInfoRes instance using the specified properties.
     * @function create
     * @memberof GetRankInfoRes
     * @static
     * @param {IGetRankInfoRes=} [properties] Properties to set
     * @returns {GetRankInfoRes} GetRankInfoRes instance
     */
    GetRankInfoRes.create = function create(properties) {
        return new GetRankInfoRes(properties);
    };

    /**
     * Encodes the specified GetRankInfoRes message. Does not implicitly {@link GetRankInfoRes.verify|verify} messages.
     * @function encode
     * @memberof GetRankInfoRes
     * @static
     * @param {IGetRankInfoRes} m GetRankInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetRankInfoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.rankInfoList != null && m.rankInfoList.length) {
            for (var i = 0; i < m.rankInfoList.length; ++i)
                $root.RankInfoData.encode(m.rankInfoList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GetRankInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetRankInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetRankInfoRes} GetRankInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetRankInfoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetRankInfoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.rankInfoList && m.rankInfoList.length))
                    m.rankInfoList = [];
                m.rankInfoList.push($root.RankInfoData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GetRankInfoRes;
})();

$root.GetRankingReq = (function() {

    /**
     * Properties of a GetRankingReq.
     * @exports IGetRankingReq
     * @interface IGetRankingReq
     * @property {number|Long} serialNum GetRankingReq serialNum
     * @property {number} rankType GetRankingReq rankType
     */

    /**
     * Constructs a new GetRankingReq.
     * @exports GetRankingReq
     * @classdesc Represents a GetRankingReq.
     * @implements IGetRankingReq
     * @constructor
     * @param {IGetRankingReq=} [p] Properties to set
     */
    function GetRankingReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetRankingReq serialNum.
     * @member {number|Long} serialNum
     * @memberof GetRankingReq
     * @instance
     */
    GetRankingReq.prototype.serialNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GetRankingReq rankType.
     * @member {number} rankType
     * @memberof GetRankingReq
     * @instance
     */
    GetRankingReq.prototype.rankType = 0;

    /**
     * Creates a new GetRankingReq instance using the specified properties.
     * @function create
     * @memberof GetRankingReq
     * @static
     * @param {IGetRankingReq=} [properties] Properties to set
     * @returns {GetRankingReq} GetRankingReq instance
     */
    GetRankingReq.create = function create(properties) {
        return new GetRankingReq(properties);
    };

    /**
     * Encodes the specified GetRankingReq message. Does not implicitly {@link GetRankingReq.verify|verify} messages.
     * @function encode
     * @memberof GetRankingReq
     * @static
     * @param {IGetRankingReq} m GetRankingReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetRankingReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.serialNum);
        w.uint32(16).int32(m.rankType);
        return w;
    };

    /**
     * Decodes a GetRankingReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetRankingReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetRankingReq} GetRankingReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetRankingReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetRankingReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.serialNum = r.int64();
                break;
            case 2:
                m.rankType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("serialNum"))
            throw $util.ProtocolError("missing required 'serialNum'", { instance: m });
        if (!m.hasOwnProperty("rankType"))
            throw $util.ProtocolError("missing required 'rankType'", { instance: m });
        return m;
    };

    return GetRankingReq;
})();

$root.GetRankingRes = (function() {

    /**
     * Properties of a GetRankingRes.
     * @exports IGetRankingRes
     * @interface IGetRankingRes
     * @property {number|Long} serialNum GetRankingRes serialNum
     * @property {number} rankType GetRankingRes rankType
     * @property {Array.<IRankUserData>|null} [rankUserList] GetRankingRes rankUserList
     * @property {IRankUserData} selfRankData GetRankingRes selfRankData
     */

    /**
     * Constructs a new GetRankingRes.
     * @exports GetRankingRes
     * @classdesc Represents a GetRankingRes.
     * @implements IGetRankingRes
     * @constructor
     * @param {IGetRankingRes=} [p] Properties to set
     */
    function GetRankingRes(p) {
        this.rankUserList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetRankingRes serialNum.
     * @member {number|Long} serialNum
     * @memberof GetRankingRes
     * @instance
     */
    GetRankingRes.prototype.serialNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GetRankingRes rankType.
     * @member {number} rankType
     * @memberof GetRankingRes
     * @instance
     */
    GetRankingRes.prototype.rankType = 0;

    /**
     * GetRankingRes rankUserList.
     * @member {Array.<IRankUserData>} rankUserList
     * @memberof GetRankingRes
     * @instance
     */
    GetRankingRes.prototype.rankUserList = $util.emptyArray;

    /**
     * GetRankingRes selfRankData.
     * @member {IRankUserData} selfRankData
     * @memberof GetRankingRes
     * @instance
     */
    GetRankingRes.prototype.selfRankData = null;

    /**
     * Creates a new GetRankingRes instance using the specified properties.
     * @function create
     * @memberof GetRankingRes
     * @static
     * @param {IGetRankingRes=} [properties] Properties to set
     * @returns {GetRankingRes} GetRankingRes instance
     */
    GetRankingRes.create = function create(properties) {
        return new GetRankingRes(properties);
    };

    /**
     * Encodes the specified GetRankingRes message. Does not implicitly {@link GetRankingRes.verify|verify} messages.
     * @function encode
     * @memberof GetRankingRes
     * @static
     * @param {IGetRankingRes} m GetRankingRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetRankingRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.serialNum);
        w.uint32(16).int32(m.rankType);
        if (m.rankUserList != null && m.rankUserList.length) {
            for (var i = 0; i < m.rankUserList.length; ++i)
                $root.RankUserData.encode(m.rankUserList[i], w.uint32(26).fork()).ldelim();
        }
        $root.RankUserData.encode(m.selfRankData, w.uint32(34).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a GetRankingRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetRankingRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetRankingRes} GetRankingRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetRankingRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetRankingRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.serialNum = r.int64();
                break;
            case 2:
                m.rankType = r.int32();
                break;
            case 3:
                if (!(m.rankUserList && m.rankUserList.length))
                    m.rankUserList = [];
                m.rankUserList.push($root.RankUserData.decode(r, r.uint32()));
                break;
            case 4:
                m.selfRankData = $root.RankUserData.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("serialNum"))
            throw $util.ProtocolError("missing required 'serialNum'", { instance: m });
        if (!m.hasOwnProperty("rankType"))
            throw $util.ProtocolError("missing required 'rankType'", { instance: m });
        if (!m.hasOwnProperty("selfRankData"))
            throw $util.ProtocolError("missing required 'selfRankData'", { instance: m });
        return m;
    };

    return GetRankingRes;
})();

module.exports = $root;

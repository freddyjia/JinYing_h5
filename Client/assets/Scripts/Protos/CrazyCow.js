/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.CrazyCow || ($protobuf.roots.CrazyCow = {});

$root.CrazyCowInfo = (function() {

    /**
     * Properties of a CrazyCowInfo.
     * @exports ICrazyCowInfo
     * @interface ICrazyCowInfo
     * @property {number} rank CrazyCowInfo rank
     * @property {string} name CrazyCowInfo name
     * @property {number} score CrazyCowInfo score
     */

    /**
     * Constructs a new CrazyCowInfo.
     * @exports CrazyCowInfo
     * @classdesc Represents a CrazyCowInfo.
     * @implements ICrazyCowInfo
     * @constructor
     * @param {ICrazyCowInfo=} [p] Properties to set
     */
    function CrazyCowInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CrazyCowInfo rank.
     * @member {number} rank
     * @memberof CrazyCowInfo
     * @instance
     */
    CrazyCowInfo.prototype.rank = 0;

    /**
     * CrazyCowInfo name.
     * @member {string} name
     * @memberof CrazyCowInfo
     * @instance
     */
    CrazyCowInfo.prototype.name = "";

    /**
     * CrazyCowInfo score.
     * @member {number} score
     * @memberof CrazyCowInfo
     * @instance
     */
    CrazyCowInfo.prototype.score = 0;

    /**
     * Creates a new CrazyCowInfo instance using the specified properties.
     * @function create
     * @memberof CrazyCowInfo
     * @static
     * @param {ICrazyCowInfo=} [properties] Properties to set
     * @returns {CrazyCowInfo} CrazyCowInfo instance
     */
    CrazyCowInfo.create = function create(properties) {
        return new CrazyCowInfo(properties);
    };

    /**
     * Encodes the specified CrazyCowInfo message. Does not implicitly {@link CrazyCowInfo.verify|verify} messages.
     * @function encode
     * @memberof CrazyCowInfo
     * @static
     * @param {ICrazyCowInfo} m CrazyCowInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CrazyCowInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.rank);
        w.uint32(18).string(m.name);
        w.uint32(24).int32(m.score);
        return w;
    };

    /**
     * Decodes a CrazyCowInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CrazyCowInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CrazyCowInfo} CrazyCowInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CrazyCowInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CrazyCowInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rank = r.int32();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.score = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rank"))
            throw $util.ProtocolError("missing required 'rank'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        return m;
    };

    return CrazyCowInfo;
})();

$root.Req_CrazyCowRankList = (function() {

    /**
     * Properties of a Req_CrazyCowRankList.
     * @exports IReq_CrazyCowRankList
     * @interface IReq_CrazyCowRankList
     */

    /**
     * Constructs a new Req_CrazyCowRankList.
     * @exports Req_CrazyCowRankList
     * @classdesc Represents a Req_CrazyCowRankList.
     * @implements IReq_CrazyCowRankList
     * @constructor
     * @param {IReq_CrazyCowRankList=} [p] Properties to set
     */
    function Req_CrazyCowRankList(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new Req_CrazyCowRankList instance using the specified properties.
     * @function create
     * @memberof Req_CrazyCowRankList
     * @static
     * @param {IReq_CrazyCowRankList=} [properties] Properties to set
     * @returns {Req_CrazyCowRankList} Req_CrazyCowRankList instance
     */
    Req_CrazyCowRankList.create = function create(properties) {
        return new Req_CrazyCowRankList(properties);
    };

    /**
     * Encodes the specified Req_CrazyCowRankList message. Does not implicitly {@link Req_CrazyCowRankList.verify|verify} messages.
     * @function encode
     * @memberof Req_CrazyCowRankList
     * @static
     * @param {IReq_CrazyCowRankList} m Req_CrazyCowRankList message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_CrazyCowRankList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a Req_CrazyCowRankList message from the specified reader or buffer.
     * @function decode
     * @memberof Req_CrazyCowRankList
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_CrazyCowRankList} Req_CrazyCowRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_CrazyCowRankList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_CrazyCowRankList();
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

    return Req_CrazyCowRankList;
})();

$root.Rsp_CrazyCowRankList = (function() {

    /**
     * Properties of a Rsp_CrazyCowRankList.
     * @exports IRsp_CrazyCowRankList
     * @interface IRsp_CrazyCowRankList
     * @property {Array.<ICrazyCowInfo>|null} [rankList] Rsp_CrazyCowRankList rankList
     */

    /**
     * Constructs a new Rsp_CrazyCowRankList.
     * @exports Rsp_CrazyCowRankList
     * @classdesc Represents a Rsp_CrazyCowRankList.
     * @implements IRsp_CrazyCowRankList
     * @constructor
     * @param {IRsp_CrazyCowRankList=} [p] Properties to set
     */
    function Rsp_CrazyCowRankList(p) {
        this.rankList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_CrazyCowRankList rankList.
     * @member {Array.<ICrazyCowInfo>} rankList
     * @memberof Rsp_CrazyCowRankList
     * @instance
     */
    Rsp_CrazyCowRankList.prototype.rankList = $util.emptyArray;

    /**
     * Creates a new Rsp_CrazyCowRankList instance using the specified properties.
     * @function create
     * @memberof Rsp_CrazyCowRankList
     * @static
     * @param {IRsp_CrazyCowRankList=} [properties] Properties to set
     * @returns {Rsp_CrazyCowRankList} Rsp_CrazyCowRankList instance
     */
    Rsp_CrazyCowRankList.create = function create(properties) {
        return new Rsp_CrazyCowRankList(properties);
    };

    /**
     * Encodes the specified Rsp_CrazyCowRankList message. Does not implicitly {@link Rsp_CrazyCowRankList.verify|verify} messages.
     * @function encode
     * @memberof Rsp_CrazyCowRankList
     * @static
     * @param {IRsp_CrazyCowRankList} m Rsp_CrazyCowRankList message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_CrazyCowRankList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.rankList != null && m.rankList.length) {
            for (var i = 0; i < m.rankList.length; ++i)
                $root.CrazyCowInfo.encode(m.rankList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_CrazyCowRankList message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_CrazyCowRankList
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_CrazyCowRankList} Rsp_CrazyCowRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_CrazyCowRankList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_CrazyCowRankList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.rankList && m.rankList.length))
                    m.rankList = [];
                m.rankList.push($root.CrazyCowInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_CrazyCowRankList;
})();

$root.Req_CrazyCowMyScore = (function() {

    /**
     * Properties of a Req_CrazyCowMyScore.
     * @exports IReq_CrazyCowMyScore
     * @interface IReq_CrazyCowMyScore
     * @property {string} name Req_CrazyCowMyScore name
     * @property {number} score Req_CrazyCowMyScore score
     */

    /**
     * Constructs a new Req_CrazyCowMyScore.
     * @exports Req_CrazyCowMyScore
     * @classdesc Represents a Req_CrazyCowMyScore.
     * @implements IReq_CrazyCowMyScore
     * @constructor
     * @param {IReq_CrazyCowMyScore=} [p] Properties to set
     */
    function Req_CrazyCowMyScore(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_CrazyCowMyScore name.
     * @member {string} name
     * @memberof Req_CrazyCowMyScore
     * @instance
     */
    Req_CrazyCowMyScore.prototype.name = "";

    /**
     * Req_CrazyCowMyScore score.
     * @member {number} score
     * @memberof Req_CrazyCowMyScore
     * @instance
     */
    Req_CrazyCowMyScore.prototype.score = 0;

    /**
     * Creates a new Req_CrazyCowMyScore instance using the specified properties.
     * @function create
     * @memberof Req_CrazyCowMyScore
     * @static
     * @param {IReq_CrazyCowMyScore=} [properties] Properties to set
     * @returns {Req_CrazyCowMyScore} Req_CrazyCowMyScore instance
     */
    Req_CrazyCowMyScore.create = function create(properties) {
        return new Req_CrazyCowMyScore(properties);
    };

    /**
     * Encodes the specified Req_CrazyCowMyScore message. Does not implicitly {@link Req_CrazyCowMyScore.verify|verify} messages.
     * @function encode
     * @memberof Req_CrazyCowMyScore
     * @static
     * @param {IReq_CrazyCowMyScore} m Req_CrazyCowMyScore message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_CrazyCowMyScore.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        w.uint32(16).int32(m.score);
        return w;
    };

    /**
     * Decodes a Req_CrazyCowMyScore message from the specified reader or buffer.
     * @function decode
     * @memberof Req_CrazyCowMyScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_CrazyCowMyScore} Req_CrazyCowMyScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_CrazyCowMyScore.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_CrazyCowMyScore();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.name = r.string();
                break;
            case 2:
                m.score = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        return m;
    };

    return Req_CrazyCowMyScore;
})();

$root.Rsp_CrazyCowMyScore = (function() {

    /**
     * Properties of a Rsp_CrazyCowMyScore.
     * @exports IRsp_CrazyCowMyScore
     * @interface IRsp_CrazyCowMyScore
     * @property {boolean} success Rsp_CrazyCowMyScore success
     * @property {string} tip Rsp_CrazyCowMyScore tip
     */

    /**
     * Constructs a new Rsp_CrazyCowMyScore.
     * @exports Rsp_CrazyCowMyScore
     * @classdesc Represents a Rsp_CrazyCowMyScore.
     * @implements IRsp_CrazyCowMyScore
     * @constructor
     * @param {IRsp_CrazyCowMyScore=} [p] Properties to set
     */
    function Rsp_CrazyCowMyScore(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_CrazyCowMyScore success.
     * @member {boolean} success
     * @memberof Rsp_CrazyCowMyScore
     * @instance
     */
    Rsp_CrazyCowMyScore.prototype.success = false;

    /**
     * Rsp_CrazyCowMyScore tip.
     * @member {string} tip
     * @memberof Rsp_CrazyCowMyScore
     * @instance
     */
    Rsp_CrazyCowMyScore.prototype.tip = "";

    /**
     * Creates a new Rsp_CrazyCowMyScore instance using the specified properties.
     * @function create
     * @memberof Rsp_CrazyCowMyScore
     * @static
     * @param {IRsp_CrazyCowMyScore=} [properties] Properties to set
     * @returns {Rsp_CrazyCowMyScore} Rsp_CrazyCowMyScore instance
     */
    Rsp_CrazyCowMyScore.create = function create(properties) {
        return new Rsp_CrazyCowMyScore(properties);
    };

    /**
     * Encodes the specified Rsp_CrazyCowMyScore message. Does not implicitly {@link Rsp_CrazyCowMyScore.verify|verify} messages.
     * @function encode
     * @memberof Rsp_CrazyCowMyScore
     * @static
     * @param {IRsp_CrazyCowMyScore} m Rsp_CrazyCowMyScore message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_CrazyCowMyScore.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a Rsp_CrazyCowMyScore message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_CrazyCowMyScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_CrazyCowMyScore} Rsp_CrazyCowMyScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_CrazyCowMyScore.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_CrazyCowMyScore();
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

    return Rsp_CrazyCowMyScore;
})();

module.exports = $root;

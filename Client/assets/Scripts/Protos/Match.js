/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Match || ($protobuf.roots.Match = {});

$root.MatchReq = (function() {

    /**
     * Properties of a MatchReq.
     * @exports IMatchReq
     * @interface IMatchReq
     * @property {number|Long} userId MatchReq userId
     * @property {number} playType MatchReq playType
     * @property {number} playId MatchReq playId
     * @property {string} hallIp MatchReq hallIp
     * @property {number} hallPort MatchReq hallPort
     * @property {string|null} [clientIp] MatchReq clientIp
     * @property {string|null} [extra] MatchReq extra
     */

    /**
     * Constructs a new MatchReq.
     * @exports MatchReq
     * @classdesc Represents a MatchReq.
     * @implements IMatchReq
     * @constructor
     * @param {IMatchReq=} [p] Properties to set
     */
    function MatchReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MatchReq userId.
     * @member {number|Long} userId
     * @memberof MatchReq
     * @instance
     */
    MatchReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MatchReq playType.
     * @member {number} playType
     * @memberof MatchReq
     * @instance
     */
    MatchReq.prototype.playType = 0;

    /**
     * MatchReq playId.
     * @member {number} playId
     * @memberof MatchReq
     * @instance
     */
    MatchReq.prototype.playId = 0;

    /**
     * MatchReq hallIp.
     * @member {string} hallIp
     * @memberof MatchReq
     * @instance
     */
    MatchReq.prototype.hallIp = "";

    /**
     * MatchReq hallPort.
     * @member {number} hallPort
     * @memberof MatchReq
     * @instance
     */
    MatchReq.prototype.hallPort = 0;

    /**
     * MatchReq clientIp.
     * @member {string} clientIp
     * @memberof MatchReq
     * @instance
     */
    MatchReq.prototype.clientIp = "";

    /**
     * MatchReq extra.
     * @member {string} extra
     * @memberof MatchReq
     * @instance
     */
    MatchReq.prototype.extra = "";

    /**
     * Creates a new MatchReq instance using the specified properties.
     * @function create
     * @memberof MatchReq
     * @static
     * @param {IMatchReq=} [properties] Properties to set
     * @returns {MatchReq} MatchReq instance
     */
    MatchReq.create = function create(properties) {
        return new MatchReq(properties);
    };

    /**
     * Encodes the specified MatchReq message. Does not implicitly {@link MatchReq.verify|verify} messages.
     * @function encode
     * @memberof MatchReq
     * @static
     * @param {IMatchReq} m MatchReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.userId);
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.playId);
        w.uint32(34).string(m.hallIp);
        w.uint32(40).int32(m.hallPort);
        if (m.clientIp != null && m.hasOwnProperty("clientIp"))
            w.uint32(50).string(m.clientIp);
        if (m.extra != null && m.hasOwnProperty("extra"))
            w.uint32(58).string(m.extra);
        return w;
    };

    /**
     * Decodes a MatchReq message from the specified reader or buffer.
     * @function decode
     * @memberof MatchReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MatchReq} MatchReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MatchReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.userId = r.int64();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.playId = r.int32();
                break;
            case 4:
                m.hallIp = r.string();
                break;
            case 5:
                m.hallPort = r.int32();
                break;
            case 6:
                m.clientIp = r.string();
                break;
            case 7:
                m.extra = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        if (!m.hasOwnProperty("hallIp"))
            throw $util.ProtocolError("missing required 'hallIp'", { instance: m });
        if (!m.hasOwnProperty("hallPort"))
            throw $util.ProtocolError("missing required 'hallPort'", { instance: m });
        return m;
    };

    return MatchReq;
})();

$root.CancelMatchReq = (function() {

    /**
     * Properties of a CancelMatchReq.
     * @exports ICancelMatchReq
     * @interface ICancelMatchReq
     * @property {number|Long} userId CancelMatchReq userId
     * @property {number} playType CancelMatchReq playType
     * @property {number} playId CancelMatchReq playId
     */

    /**
     * Constructs a new CancelMatchReq.
     * @exports CancelMatchReq
     * @classdesc Represents a CancelMatchReq.
     * @implements ICancelMatchReq
     * @constructor
     * @param {ICancelMatchReq=} [p] Properties to set
     */
    function CancelMatchReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CancelMatchReq userId.
     * @member {number|Long} userId
     * @memberof CancelMatchReq
     * @instance
     */
    CancelMatchReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CancelMatchReq playType.
     * @member {number} playType
     * @memberof CancelMatchReq
     * @instance
     */
    CancelMatchReq.prototype.playType = 0;

    /**
     * CancelMatchReq playId.
     * @member {number} playId
     * @memberof CancelMatchReq
     * @instance
     */
    CancelMatchReq.prototype.playId = 0;

    /**
     * Creates a new CancelMatchReq instance using the specified properties.
     * @function create
     * @memberof CancelMatchReq
     * @static
     * @param {ICancelMatchReq=} [properties] Properties to set
     * @returns {CancelMatchReq} CancelMatchReq instance
     */
    CancelMatchReq.create = function create(properties) {
        return new CancelMatchReq(properties);
    };

    /**
     * Encodes the specified CancelMatchReq message. Does not implicitly {@link CancelMatchReq.verify|verify} messages.
     * @function encode
     * @memberof CancelMatchReq
     * @static
     * @param {ICancelMatchReq} m CancelMatchReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CancelMatchReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.userId);
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.playId);
        return w;
    };

    /**
     * Decodes a CancelMatchReq message from the specified reader or buffer.
     * @function decode
     * @memberof CancelMatchReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CancelMatchReq} CancelMatchReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CancelMatchReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CancelMatchReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.userId = r.int64();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.playId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        return m;
    };

    return CancelMatchReq;
})();

$root.GameToMatchResultRes = (function() {

    /**
     * Properties of a GameToMatchResultRes.
     * @exports IGameToMatchResultRes
     * @interface IGameToMatchResultRes
     * @property {Array.<number|Long>|null} [userId] GameToMatchResultRes userId
     * @property {number} playType GameToMatchResultRes playType
     * @property {number} playId GameToMatchResultRes playId
     * @property {boolean} isSuccess GameToMatchResultRes isSuccess
     */

    /**
     * Constructs a new GameToMatchResultRes.
     * @exports GameToMatchResultRes
     * @classdesc Represents a GameToMatchResultRes.
     * @implements IGameToMatchResultRes
     * @constructor
     * @param {IGameToMatchResultRes=} [p] Properties to set
     */
    function GameToMatchResultRes(p) {
        this.userId = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameToMatchResultRes userId.
     * @member {Array.<number|Long>} userId
     * @memberof GameToMatchResultRes
     * @instance
     */
    GameToMatchResultRes.prototype.userId = $util.emptyArray;

    /**
     * GameToMatchResultRes playType.
     * @member {number} playType
     * @memberof GameToMatchResultRes
     * @instance
     */
    GameToMatchResultRes.prototype.playType = 0;

    /**
     * GameToMatchResultRes playId.
     * @member {number} playId
     * @memberof GameToMatchResultRes
     * @instance
     */
    GameToMatchResultRes.prototype.playId = 0;

    /**
     * GameToMatchResultRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof GameToMatchResultRes
     * @instance
     */
    GameToMatchResultRes.prototype.isSuccess = false;

    /**
     * Creates a new GameToMatchResultRes instance using the specified properties.
     * @function create
     * @memberof GameToMatchResultRes
     * @static
     * @param {IGameToMatchResultRes=} [properties] Properties to set
     * @returns {GameToMatchResultRes} GameToMatchResultRes instance
     */
    GameToMatchResultRes.create = function create(properties) {
        return new GameToMatchResultRes(properties);
    };

    /**
     * Encodes the specified GameToMatchResultRes message. Does not implicitly {@link GameToMatchResultRes.verify|verify} messages.
     * @function encode
     * @memberof GameToMatchResultRes
     * @static
     * @param {IGameToMatchResultRes} m GameToMatchResultRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameToMatchResultRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.userId != null && m.userId.length) {
            for (var i = 0; i < m.userId.length; ++i)
                w.uint32(8).int64(m.userId[i]);
        }
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.playId);
        w.uint32(32).bool(m.isSuccess);
        return w;
    };

    /**
     * Decodes a GameToMatchResultRes message from the specified reader or buffer.
     * @function decode
     * @memberof GameToMatchResultRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameToMatchResultRes} GameToMatchResultRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameToMatchResultRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameToMatchResultRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.userId && m.userId.length))
                    m.userId = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.userId.push(r.int64());
                } else
                    m.userId.push(r.int64());
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.playId = r.int32();
                break;
            case 4:
                m.isSuccess = r.bool();
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
        if (!m.hasOwnProperty("isSuccess"))
            throw $util.ProtocolError("missing required 'isSuccess'", { instance: m });
        return m;
    };

    return GameToMatchResultRes;
})();

$root.MatchToHallResultRes = (function() {

    /**
     * Properties of a MatchToHallResultRes.
     * @exports IMatchToHallResultRes
     * @interface IMatchToHallResultRes
     * @property {number|Long} userId MatchToHallResultRes userId
     * @property {boolean} isSuccess MatchToHallResultRes isSuccess
     * @property {string|null} [tips] MatchToHallResultRes tips
     * @property {number|null} [gamePort] MatchToHallResultRes gamePort
     * @property {string|null} [readGameIp] MatchToHallResultRes readGameIp
     * @property {number|null} [playType] MatchToHallResultRes playType
     * @property {number|null} [playId] MatchToHallResultRes playId
     */

    /**
     * Constructs a new MatchToHallResultRes.
     * @exports MatchToHallResultRes
     * @classdesc Represents a MatchToHallResultRes.
     * @implements IMatchToHallResultRes
     * @constructor
     * @param {IMatchToHallResultRes=} [p] Properties to set
     */
    function MatchToHallResultRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MatchToHallResultRes userId.
     * @member {number|Long} userId
     * @memberof MatchToHallResultRes
     * @instance
     */
    MatchToHallResultRes.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MatchToHallResultRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof MatchToHallResultRes
     * @instance
     */
    MatchToHallResultRes.prototype.isSuccess = false;

    /**
     * MatchToHallResultRes tips.
     * @member {string} tips
     * @memberof MatchToHallResultRes
     * @instance
     */
    MatchToHallResultRes.prototype.tips = "";

    /**
     * MatchToHallResultRes gamePort.
     * @member {number} gamePort
     * @memberof MatchToHallResultRes
     * @instance
     */
    MatchToHallResultRes.prototype.gamePort = 0;

    /**
     * MatchToHallResultRes readGameIp.
     * @member {string} readGameIp
     * @memberof MatchToHallResultRes
     * @instance
     */
    MatchToHallResultRes.prototype.readGameIp = "";

    /**
     * MatchToHallResultRes playType.
     * @member {number} playType
     * @memberof MatchToHallResultRes
     * @instance
     */
    MatchToHallResultRes.prototype.playType = 0;

    /**
     * MatchToHallResultRes playId.
     * @member {number} playId
     * @memberof MatchToHallResultRes
     * @instance
     */
    MatchToHallResultRes.prototype.playId = 0;

    /**
     * Creates a new MatchToHallResultRes instance using the specified properties.
     * @function create
     * @memberof MatchToHallResultRes
     * @static
     * @param {IMatchToHallResultRes=} [properties] Properties to set
     * @returns {MatchToHallResultRes} MatchToHallResultRes instance
     */
    MatchToHallResultRes.create = function create(properties) {
        return new MatchToHallResultRes(properties);
    };

    /**
     * Encodes the specified MatchToHallResultRes message. Does not implicitly {@link MatchToHallResultRes.verify|verify} messages.
     * @function encode
     * @memberof MatchToHallResultRes
     * @static
     * @param {IMatchToHallResultRes} m MatchToHallResultRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchToHallResultRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.userId);
        w.uint32(16).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(26).string(m.tips);
        if (m.gamePort != null && m.hasOwnProperty("gamePort"))
            w.uint32(32).int32(m.gamePort);
        if (m.readGameIp != null && m.hasOwnProperty("readGameIp"))
            w.uint32(42).string(m.readGameIp);
        if (m.playType != null && m.hasOwnProperty("playType"))
            w.uint32(48).int32(m.playType);
        if (m.playId != null && m.hasOwnProperty("playId"))
            w.uint32(56).int32(m.playId);
        return w;
    };

    /**
     * Decodes a MatchToHallResultRes message from the specified reader or buffer.
     * @function decode
     * @memberof MatchToHallResultRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MatchToHallResultRes} MatchToHallResultRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchToHallResultRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MatchToHallResultRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.userId = r.int64();
                break;
            case 2:
                m.isSuccess = r.bool();
                break;
            case 3:
                m.tips = r.string();
                break;
            case 4:
                m.gamePort = r.int32();
                break;
            case 5:
                m.readGameIp = r.string();
                break;
            case 6:
                m.playType = r.int32();
                break;
            case 7:
                m.playId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: m });
        if (!m.hasOwnProperty("isSuccess"))
            throw $util.ProtocolError("missing required 'isSuccess'", { instance: m });
        return m;
    };

    return MatchToHallResultRes;
})();

$root.PlayInfo = (function() {

    /**
     * Properties of a PlayInfo.
     * @exports IPlayInfo
     * @interface IPlayInfo
     * @property {number|Long} userId PlayInfo userId
     * @property {boolean} isRobot PlayInfo isRobot
     * @property {string|null} [hallIp] PlayInfo hallIp
     * @property {number|null} [hallPort] PlayInfo hallPort
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
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayInfo userId.
     * @member {number|Long} userId
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayInfo isRobot.
     * @member {boolean} isRobot
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.isRobot = false;

    /**
     * PlayInfo hallIp.
     * @member {string} hallIp
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.hallIp = "";

    /**
     * PlayInfo hallPort.
     * @member {number} hallPort
     * @memberof PlayInfo
     * @instance
     */
    PlayInfo.prototype.hallPort = 0;

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
        w.uint32(8).int64(m.userId);
        w.uint32(16).bool(m.isRobot);
        if (m.hallIp != null && m.hasOwnProperty("hallIp"))
            w.uint32(26).string(m.hallIp);
        if (m.hallPort != null && m.hasOwnProperty("hallPort"))
            w.uint32(32).int32(m.hallPort);
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
                m.userId = r.int64();
                break;
            case 2:
                m.isRobot = r.bool();
                break;
            case 3:
                m.hallIp = r.string();
                break;
            case 4:
                m.hallPort = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: m });
        if (!m.hasOwnProperty("isRobot"))
            throw $util.ProtocolError("missing required 'isRobot'", { instance: m });
        return m;
    };

    return PlayInfo;
})();

$root.MatchToGameStartReq = (function() {

    /**
     * Properties of a MatchToGameStartReq.
     * @exports IMatchToGameStartReq
     * @interface IMatchToGameStartReq
     * @property {Array.<IPlayInfo>|null} [playInfo] MatchToGameStartReq playInfo
     * @property {number} playType MatchToGameStartReq playType
     * @property {number} playId MatchToGameStartReq playId
     * @property {string} matchIp MatchToGameStartReq matchIp
     * @property {number} matchPort MatchToGameStartReq matchPort
     * @property {string|null} [extend] MatchToGameStartReq extend
     */

    /**
     * Constructs a new MatchToGameStartReq.
     * @exports MatchToGameStartReq
     * @classdesc Represents a MatchToGameStartReq.
     * @implements IMatchToGameStartReq
     * @constructor
     * @param {IMatchToGameStartReq=} [p] Properties to set
     */
    function MatchToGameStartReq(p) {
        this.playInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MatchToGameStartReq playInfo.
     * @member {Array.<IPlayInfo>} playInfo
     * @memberof MatchToGameStartReq
     * @instance
     */
    MatchToGameStartReq.prototype.playInfo = $util.emptyArray;

    /**
     * MatchToGameStartReq playType.
     * @member {number} playType
     * @memberof MatchToGameStartReq
     * @instance
     */
    MatchToGameStartReq.prototype.playType = 0;

    /**
     * MatchToGameStartReq playId.
     * @member {number} playId
     * @memberof MatchToGameStartReq
     * @instance
     */
    MatchToGameStartReq.prototype.playId = 0;

    /**
     * MatchToGameStartReq matchIp.
     * @member {string} matchIp
     * @memberof MatchToGameStartReq
     * @instance
     */
    MatchToGameStartReq.prototype.matchIp = "";

    /**
     * MatchToGameStartReq matchPort.
     * @member {number} matchPort
     * @memberof MatchToGameStartReq
     * @instance
     */
    MatchToGameStartReq.prototype.matchPort = 0;

    /**
     * MatchToGameStartReq extend.
     * @member {string} extend
     * @memberof MatchToGameStartReq
     * @instance
     */
    MatchToGameStartReq.prototype.extend = "";

    /**
     * Creates a new MatchToGameStartReq instance using the specified properties.
     * @function create
     * @memberof MatchToGameStartReq
     * @static
     * @param {IMatchToGameStartReq=} [properties] Properties to set
     * @returns {MatchToGameStartReq} MatchToGameStartReq instance
     */
    MatchToGameStartReq.create = function create(properties) {
        return new MatchToGameStartReq(properties);
    };

    /**
     * Encodes the specified MatchToGameStartReq message. Does not implicitly {@link MatchToGameStartReq.verify|verify} messages.
     * @function encode
     * @memberof MatchToGameStartReq
     * @static
     * @param {IMatchToGameStartReq} m MatchToGameStartReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchToGameStartReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playInfo != null && m.playInfo.length) {
            for (var i = 0; i < m.playInfo.length; ++i)
                $root.PlayInfo.encode(m.playInfo[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.playId);
        w.uint32(34).string(m.matchIp);
        w.uint32(40).int32(m.matchPort);
        if (m.extend != null && m.hasOwnProperty("extend"))
            w.uint32(50).string(m.extend);
        return w;
    };

    /**
     * Decodes a MatchToGameStartReq message from the specified reader or buffer.
     * @function decode
     * @memberof MatchToGameStartReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MatchToGameStartReq} MatchToGameStartReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchToGameStartReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MatchToGameStartReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playInfo && m.playInfo.length))
                    m.playInfo = [];
                m.playInfo.push($root.PlayInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.playId = r.int32();
                break;
            case 4:
                m.matchIp = r.string();
                break;
            case 5:
                m.matchPort = r.int32();
                break;
            case 6:
                m.extend = r.string();
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
        if (!m.hasOwnProperty("matchIp"))
            throw $util.ProtocolError("missing required 'matchIp'", { instance: m });
        if (!m.hasOwnProperty("matchPort"))
            throw $util.ProtocolError("missing required 'matchPort'", { instance: m });
        return m;
    };

    return MatchToGameStartReq;
})();

$root.PushMatchGameFinish = (function() {

    /**
     * Properties of a PushMatchGameFinish.
     * @exports IPushMatchGameFinish
     * @interface IPushMatchGameFinish
     * @property {Array.<number|Long>|null} [userId] PushMatchGameFinish userId
     * @property {number} playType PushMatchGameFinish playType
     * @property {number} playId PushMatchGameFinish playId
     */

    /**
     * Constructs a new PushMatchGameFinish.
     * @exports PushMatchGameFinish
     * @classdesc Represents a PushMatchGameFinish.
     * @implements IPushMatchGameFinish
     * @constructor
     * @param {IPushMatchGameFinish=} [p] Properties to set
     */
    function PushMatchGameFinish(p) {
        this.userId = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushMatchGameFinish userId.
     * @member {Array.<number|Long>} userId
     * @memberof PushMatchGameFinish
     * @instance
     */
    PushMatchGameFinish.prototype.userId = $util.emptyArray;

    /**
     * PushMatchGameFinish playType.
     * @member {number} playType
     * @memberof PushMatchGameFinish
     * @instance
     */
    PushMatchGameFinish.prototype.playType = 0;

    /**
     * PushMatchGameFinish playId.
     * @member {number} playId
     * @memberof PushMatchGameFinish
     * @instance
     */
    PushMatchGameFinish.prototype.playId = 0;

    /**
     * Creates a new PushMatchGameFinish instance using the specified properties.
     * @function create
     * @memberof PushMatchGameFinish
     * @static
     * @param {IPushMatchGameFinish=} [properties] Properties to set
     * @returns {PushMatchGameFinish} PushMatchGameFinish instance
     */
    PushMatchGameFinish.create = function create(properties) {
        return new PushMatchGameFinish(properties);
    };

    /**
     * Encodes the specified PushMatchGameFinish message. Does not implicitly {@link PushMatchGameFinish.verify|verify} messages.
     * @function encode
     * @memberof PushMatchGameFinish
     * @static
     * @param {IPushMatchGameFinish} m PushMatchGameFinish message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushMatchGameFinish.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.userId != null && m.userId.length) {
            for (var i = 0; i < m.userId.length; ++i)
                w.uint32(8).int64(m.userId[i]);
        }
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.playId);
        return w;
    };

    /**
     * Decodes a PushMatchGameFinish message from the specified reader or buffer.
     * @function decode
     * @memberof PushMatchGameFinish
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushMatchGameFinish} PushMatchGameFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushMatchGameFinish.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushMatchGameFinish();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.userId && m.userId.length))
                    m.userId = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.userId.push(r.int64());
                } else
                    m.userId.push(r.int64());
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
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

    return PushMatchGameFinish;
})();

$root.GameToMatchGetRobotReq = (function() {

    /**
     * Properties of a GameToMatchGetRobotReq.
     * @exports IGameToMatchGetRobotReq
     * @interface IGameToMatchGetRobotReq
     * @property {number} robotCount GameToMatchGetRobotReq robotCount
     * @property {string} gameIp GameToMatchGetRobotReq gameIp
     * @property {number} gamePort GameToMatchGetRobotReq gamePort
     * @property {number|null} [roomId] GameToMatchGetRobotReq roomId
     * @property {number|null} [type] GameToMatchGetRobotReq type
     */

    /**
     * Constructs a new GameToMatchGetRobotReq.
     * @exports GameToMatchGetRobotReq
     * @classdesc Represents a GameToMatchGetRobotReq.
     * @implements IGameToMatchGetRobotReq
     * @constructor
     * @param {IGameToMatchGetRobotReq=} [p] Properties to set
     */
    function GameToMatchGetRobotReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameToMatchGetRobotReq robotCount.
     * @member {number} robotCount
     * @memberof GameToMatchGetRobotReq
     * @instance
     */
    GameToMatchGetRobotReq.prototype.robotCount = 0;

    /**
     * GameToMatchGetRobotReq gameIp.
     * @member {string} gameIp
     * @memberof GameToMatchGetRobotReq
     * @instance
     */
    GameToMatchGetRobotReq.prototype.gameIp = "";

    /**
     * GameToMatchGetRobotReq gamePort.
     * @member {number} gamePort
     * @memberof GameToMatchGetRobotReq
     * @instance
     */
    GameToMatchGetRobotReq.prototype.gamePort = 0;

    /**
     * GameToMatchGetRobotReq roomId.
     * @member {number} roomId
     * @memberof GameToMatchGetRobotReq
     * @instance
     */
    GameToMatchGetRobotReq.prototype.roomId = 0;

    /**
     * GameToMatchGetRobotReq type.
     * @member {number} type
     * @memberof GameToMatchGetRobotReq
     * @instance
     */
    GameToMatchGetRobotReq.prototype.type = 0;

    /**
     * Creates a new GameToMatchGetRobotReq instance using the specified properties.
     * @function create
     * @memberof GameToMatchGetRobotReq
     * @static
     * @param {IGameToMatchGetRobotReq=} [properties] Properties to set
     * @returns {GameToMatchGetRobotReq} GameToMatchGetRobotReq instance
     */
    GameToMatchGetRobotReq.create = function create(properties) {
        return new GameToMatchGetRobotReq(properties);
    };

    /**
     * Encodes the specified GameToMatchGetRobotReq message. Does not implicitly {@link GameToMatchGetRobotReq.verify|verify} messages.
     * @function encode
     * @memberof GameToMatchGetRobotReq
     * @static
     * @param {IGameToMatchGetRobotReq} m GameToMatchGetRobotReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameToMatchGetRobotReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.robotCount);
        w.uint32(18).string(m.gameIp);
        w.uint32(24).int32(m.gamePort);
        if (m.roomId != null && m.hasOwnProperty("roomId"))
            w.uint32(32).int32(m.roomId);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(40).int32(m.type);
        return w;
    };

    /**
     * Decodes a GameToMatchGetRobotReq message from the specified reader or buffer.
     * @function decode
     * @memberof GameToMatchGetRobotReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameToMatchGetRobotReq} GameToMatchGetRobotReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameToMatchGetRobotReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameToMatchGetRobotReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.robotCount = r.int32();
                break;
            case 2:
                m.gameIp = r.string();
                break;
            case 3:
                m.gamePort = r.int32();
                break;
            case 4:
                m.roomId = r.int32();
                break;
            case 5:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("robotCount"))
            throw $util.ProtocolError("missing required 'robotCount'", { instance: m });
        if (!m.hasOwnProperty("gameIp"))
            throw $util.ProtocolError("missing required 'gameIp'", { instance: m });
        if (!m.hasOwnProperty("gamePort"))
            throw $util.ProtocolError("missing required 'gamePort'", { instance: m });
        return m;
    };

    return GameToMatchGetRobotReq;
})();

$root.MatchToGameReturnRobot = (function() {

    /**
     * Properties of a MatchToGameReturnRobot.
     * @exports IMatchToGameReturnRobot
     * @interface IMatchToGameReturnRobot
     * @property {Array.<number|Long>|null} [playerId] MatchToGameReturnRobot playerId
     * @property {number|null} [roomId] MatchToGameReturnRobot roomId
     * @property {number|null} [type] MatchToGameReturnRobot type
     */

    /**
     * Constructs a new MatchToGameReturnRobot.
     * @exports MatchToGameReturnRobot
     * @classdesc Represents a MatchToGameReturnRobot.
     * @implements IMatchToGameReturnRobot
     * @constructor
     * @param {IMatchToGameReturnRobot=} [p] Properties to set
     */
    function MatchToGameReturnRobot(p) {
        this.playerId = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MatchToGameReturnRobot playerId.
     * @member {Array.<number|Long>} playerId
     * @memberof MatchToGameReturnRobot
     * @instance
     */
    MatchToGameReturnRobot.prototype.playerId = $util.emptyArray;

    /**
     * MatchToGameReturnRobot roomId.
     * @member {number} roomId
     * @memberof MatchToGameReturnRobot
     * @instance
     */
    MatchToGameReturnRobot.prototype.roomId = 0;

    /**
     * MatchToGameReturnRobot type.
     * @member {number} type
     * @memberof MatchToGameReturnRobot
     * @instance
     */
    MatchToGameReturnRobot.prototype.type = 0;

    /**
     * Creates a new MatchToGameReturnRobot instance using the specified properties.
     * @function create
     * @memberof MatchToGameReturnRobot
     * @static
     * @param {IMatchToGameReturnRobot=} [properties] Properties to set
     * @returns {MatchToGameReturnRobot} MatchToGameReturnRobot instance
     */
    MatchToGameReturnRobot.create = function create(properties) {
        return new MatchToGameReturnRobot(properties);
    };

    /**
     * Encodes the specified MatchToGameReturnRobot message. Does not implicitly {@link MatchToGameReturnRobot.verify|verify} messages.
     * @function encode
     * @memberof MatchToGameReturnRobot
     * @static
     * @param {IMatchToGameReturnRobot} m MatchToGameReturnRobot message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchToGameReturnRobot.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerId != null && m.playerId.length) {
            for (var i = 0; i < m.playerId.length; ++i)
                w.uint32(8).int64(m.playerId[i]);
        }
        if (m.roomId != null && m.hasOwnProperty("roomId"))
            w.uint32(16).int32(m.roomId);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(24).int32(m.type);
        return w;
    };

    /**
     * Decodes a MatchToGameReturnRobot message from the specified reader or buffer.
     * @function decode
     * @memberof MatchToGameReturnRobot
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MatchToGameReturnRobot} MatchToGameReturnRobot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchToGameReturnRobot.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MatchToGameReturnRobot();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerId && m.playerId.length))
                    m.playerId = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.playerId.push(r.int64());
                } else
                    m.playerId.push(r.int64());
                break;
            case 2:
                m.roomId = r.int32();
                break;
            case 3:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return MatchToGameReturnRobot;
})();

$root.GameToMatchGiveBackRobot = (function() {

    /**
     * Properties of a GameToMatchGiveBackRobot.
     * @exports IGameToMatchGiveBackRobot
     * @interface IGameToMatchGiveBackRobot
     * @property {Array.<number|Long>|null} [playerId] GameToMatchGiveBackRobot playerId
     */

    /**
     * Constructs a new GameToMatchGiveBackRobot.
     * @exports GameToMatchGiveBackRobot
     * @classdesc Represents a GameToMatchGiveBackRobot.
     * @implements IGameToMatchGiveBackRobot
     * @constructor
     * @param {IGameToMatchGiveBackRobot=} [p] Properties to set
     */
    function GameToMatchGiveBackRobot(p) {
        this.playerId = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameToMatchGiveBackRobot playerId.
     * @member {Array.<number|Long>} playerId
     * @memberof GameToMatchGiveBackRobot
     * @instance
     */
    GameToMatchGiveBackRobot.prototype.playerId = $util.emptyArray;

    /**
     * Creates a new GameToMatchGiveBackRobot instance using the specified properties.
     * @function create
     * @memberof GameToMatchGiveBackRobot
     * @static
     * @param {IGameToMatchGiveBackRobot=} [properties] Properties to set
     * @returns {GameToMatchGiveBackRobot} GameToMatchGiveBackRobot instance
     */
    GameToMatchGiveBackRobot.create = function create(properties) {
        return new GameToMatchGiveBackRobot(properties);
    };

    /**
     * Encodes the specified GameToMatchGiveBackRobot message. Does not implicitly {@link GameToMatchGiveBackRobot.verify|verify} messages.
     * @function encode
     * @memberof GameToMatchGiveBackRobot
     * @static
     * @param {IGameToMatchGiveBackRobot} m GameToMatchGiveBackRobot message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameToMatchGiveBackRobot.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerId != null && m.playerId.length) {
            for (var i = 0; i < m.playerId.length; ++i)
                w.uint32(8).int64(m.playerId[i]);
        }
        return w;
    };

    /**
     * Decodes a GameToMatchGiveBackRobot message from the specified reader or buffer.
     * @function decode
     * @memberof GameToMatchGiveBackRobot
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameToMatchGiveBackRobot} GameToMatchGiveBackRobot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameToMatchGiveBackRobot.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameToMatchGiveBackRobot();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerId && m.playerId.length))
                    m.playerId = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.playerId.push(r.int64());
                } else
                    m.playerId.push(r.int64());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GameToMatchGiveBackRobot;
})();

$root.GameToHallBackHall = (function() {

    /**
     * Properties of a GameToHallBackHall.
     * @exports IGameToHallBackHall
     * @interface IGameToHallBackHall
     * @property {number|Long} playerId GameToHallBackHall playerId
     * @property {number} playType GameToHallBackHall playType
     * @property {string} gameIp GameToHallBackHall gameIp
     * @property {number} gamePort GameToHallBackHall gamePort
     */

    /**
     * Constructs a new GameToHallBackHall.
     * @exports GameToHallBackHall
     * @classdesc Represents a GameToHallBackHall.
     * @implements IGameToHallBackHall
     * @constructor
     * @param {IGameToHallBackHall=} [p] Properties to set
     */
    function GameToHallBackHall(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameToHallBackHall playerId.
     * @member {number|Long} playerId
     * @memberof GameToHallBackHall
     * @instance
     */
    GameToHallBackHall.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameToHallBackHall playType.
     * @member {number} playType
     * @memberof GameToHallBackHall
     * @instance
     */
    GameToHallBackHall.prototype.playType = 0;

    /**
     * GameToHallBackHall gameIp.
     * @member {string} gameIp
     * @memberof GameToHallBackHall
     * @instance
     */
    GameToHallBackHall.prototype.gameIp = "";

    /**
     * GameToHallBackHall gamePort.
     * @member {number} gamePort
     * @memberof GameToHallBackHall
     * @instance
     */
    GameToHallBackHall.prototype.gamePort = 0;

    /**
     * Creates a new GameToHallBackHall instance using the specified properties.
     * @function create
     * @memberof GameToHallBackHall
     * @static
     * @param {IGameToHallBackHall=} [properties] Properties to set
     * @returns {GameToHallBackHall} GameToHallBackHall instance
     */
    GameToHallBackHall.create = function create(properties) {
        return new GameToHallBackHall(properties);
    };

    /**
     * Encodes the specified GameToHallBackHall message. Does not implicitly {@link GameToHallBackHall.verify|verify} messages.
     * @function encode
     * @memberof GameToHallBackHall
     * @static
     * @param {IGameToHallBackHall} m GameToHallBackHall message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameToHallBackHall.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        w.uint32(16).int32(m.playType);
        w.uint32(26).string(m.gameIp);
        w.uint32(32).int32(m.gamePort);
        return w;
    };

    /**
     * Decodes a GameToHallBackHall message from the specified reader or buffer.
     * @function decode
     * @memberof GameToHallBackHall
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameToHallBackHall} GameToHallBackHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameToHallBackHall.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameToHallBackHall();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.int64();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.gameIp = r.string();
                break;
            case 4:
                m.gamePort = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("gameIp"))
            throw $util.ProtocolError("missing required 'gameIp'", { instance: m });
        if (!m.hasOwnProperty("gamePort"))
            throw $util.ProtocolError("missing required 'gamePort'", { instance: m });
        return m;
    };

    return GameToHallBackHall;
})();

$root.GameToHallLoginRoom = (function() {

    /**
     * Properties of a GameToHallLoginRoom.
     * @exports IGameToHallLoginRoom
     * @interface IGameToHallLoginRoom
     * @property {number|Long} playerId GameToHallLoginRoom playerId
     * @property {number} playType GameToHallLoginRoom playType
     */

    /**
     * Constructs a new GameToHallLoginRoom.
     * @exports GameToHallLoginRoom
     * @classdesc Represents a GameToHallLoginRoom.
     * @implements IGameToHallLoginRoom
     * @constructor
     * @param {IGameToHallLoginRoom=} [p] Properties to set
     */
    function GameToHallLoginRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameToHallLoginRoom playerId.
     * @member {number|Long} playerId
     * @memberof GameToHallLoginRoom
     * @instance
     */
    GameToHallLoginRoom.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameToHallLoginRoom playType.
     * @member {number} playType
     * @memberof GameToHallLoginRoom
     * @instance
     */
    GameToHallLoginRoom.prototype.playType = 0;

    /**
     * Creates a new GameToHallLoginRoom instance using the specified properties.
     * @function create
     * @memberof GameToHallLoginRoom
     * @static
     * @param {IGameToHallLoginRoom=} [properties] Properties to set
     * @returns {GameToHallLoginRoom} GameToHallLoginRoom instance
     */
    GameToHallLoginRoom.create = function create(properties) {
        return new GameToHallLoginRoom(properties);
    };

    /**
     * Encodes the specified GameToHallLoginRoom message. Does not implicitly {@link GameToHallLoginRoom.verify|verify} messages.
     * @function encode
     * @memberof GameToHallLoginRoom
     * @static
     * @param {IGameToHallLoginRoom} m GameToHallLoginRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameToHallLoginRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        w.uint32(16).int32(m.playType);
        return w;
    };

    /**
     * Decodes a GameToHallLoginRoom message from the specified reader or buffer.
     * @function decode
     * @memberof GameToHallLoginRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameToHallLoginRoom} GameToHallLoginRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameToHallLoginRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameToHallLoginRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.int64();
                break;
            case 2:
                m.playType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        return m;
    };

    return GameToHallLoginRoom;
})();

$root.GameSyncCurrency = (function() {

    /**
     * Properties of a GameSyncCurrency.
     * @exports IGameSyncCurrency
     * @interface IGameSyncCurrency
     * @property {number|Long} playerId GameSyncCurrency playerId
     */

    /**
     * Constructs a new GameSyncCurrency.
     * @exports GameSyncCurrency
     * @classdesc Represents a GameSyncCurrency.
     * @implements IGameSyncCurrency
     * @constructor
     * @param {IGameSyncCurrency=} [p] Properties to set
     */
    function GameSyncCurrency(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameSyncCurrency playerId.
     * @member {number|Long} playerId
     * @memberof GameSyncCurrency
     * @instance
     */
    GameSyncCurrency.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GameSyncCurrency instance using the specified properties.
     * @function create
     * @memberof GameSyncCurrency
     * @static
     * @param {IGameSyncCurrency=} [properties] Properties to set
     * @returns {GameSyncCurrency} GameSyncCurrency instance
     */
    GameSyncCurrency.create = function create(properties) {
        return new GameSyncCurrency(properties);
    };

    /**
     * Encodes the specified GameSyncCurrency message. Does not implicitly {@link GameSyncCurrency.verify|verify} messages.
     * @function encode
     * @memberof GameSyncCurrency
     * @static
     * @param {IGameSyncCurrency} m GameSyncCurrency message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameSyncCurrency.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        return w;
    };

    /**
     * Decodes a GameSyncCurrency message from the specified reader or buffer.
     * @function decode
     * @memberof GameSyncCurrency
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameSyncCurrency} GameSyncCurrency
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameSyncCurrency.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameSyncCurrency();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.int64();
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

    return GameSyncCurrency;
})();

$root.GameSyncSettlement = (function() {

    /**
     * Properties of a GameSyncSettlement.
     * @exports IGameSyncSettlement
     * @interface IGameSyncSettlement
     * @property {number|Long} playerId GameSyncSettlement playerId
     * @property {number} gameType GameSyncSettlement gameType
     * @property {number} settlement GameSyncSettlement settlement
     */

    /**
     * Constructs a new GameSyncSettlement.
     * @exports GameSyncSettlement
     * @classdesc Represents a GameSyncSettlement.
     * @implements IGameSyncSettlement
     * @constructor
     * @param {IGameSyncSettlement=} [p] Properties to set
     */
    function GameSyncSettlement(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameSyncSettlement playerId.
     * @member {number|Long} playerId
     * @memberof GameSyncSettlement
     * @instance
     */
    GameSyncSettlement.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameSyncSettlement gameType.
     * @member {number} gameType
     * @memberof GameSyncSettlement
     * @instance
     */
    GameSyncSettlement.prototype.gameType = 0;

    /**
     * GameSyncSettlement settlement.
     * @member {number} settlement
     * @memberof GameSyncSettlement
     * @instance
     */
    GameSyncSettlement.prototype.settlement = 0;

    /**
     * Creates a new GameSyncSettlement instance using the specified properties.
     * @function create
     * @memberof GameSyncSettlement
     * @static
     * @param {IGameSyncSettlement=} [properties] Properties to set
     * @returns {GameSyncSettlement} GameSyncSettlement instance
     */
    GameSyncSettlement.create = function create(properties) {
        return new GameSyncSettlement(properties);
    };

    /**
     * Encodes the specified GameSyncSettlement message. Does not implicitly {@link GameSyncSettlement.verify|verify} messages.
     * @function encode
     * @memberof GameSyncSettlement
     * @static
     * @param {IGameSyncSettlement} m GameSyncSettlement message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameSyncSettlement.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        w.uint32(16).int32(m.gameType);
        w.uint32(24).int32(m.settlement);
        return w;
    };

    /**
     * Decodes a GameSyncSettlement message from the specified reader or buffer.
     * @function decode
     * @memberof GameSyncSettlement
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameSyncSettlement} GameSyncSettlement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameSyncSettlement.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameSyncSettlement();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.int64();
                break;
            case 2:
                m.gameType = r.int32();
                break;
            case 3:
                m.settlement = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("gameType"))
            throw $util.ProtocolError("missing required 'gameType'", { instance: m });
        if (!m.hasOwnProperty("settlement"))
            throw $util.ProtocolError("missing required 'settlement'", { instance: m });
        return m;
    };

    return GameSyncSettlement;
})();

module.exports = $root;

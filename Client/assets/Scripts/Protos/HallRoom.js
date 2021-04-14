/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.HallRoom || ($protobuf.roots.HallRoom = {});

$root.H2R2HReload = (function() {

    /**
     * Properties of a H2R2HReload.
     * @exports IH2R2HReload
     * @interface IH2R2HReload
     * @property {number|Long} playerId H2R2HReload playerId
     */

    /**
     * Constructs a new H2R2HReload.
     * @exports H2R2HReload
     * @classdesc Represents a H2R2HReload.
     * @implements IH2R2HReload
     * @constructor
     * @param {IH2R2HReload=} [p] Properties to set
     */
    function H2R2HReload(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * H2R2HReload playerId.
     * @member {number|Long} playerId
     * @memberof H2R2HReload
     * @instance
     */
    H2R2HReload.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new H2R2HReload instance using the specified properties.
     * @function create
     * @memberof H2R2HReload
     * @static
     * @param {IH2R2HReload=} [properties] Properties to set
     * @returns {H2R2HReload} H2R2HReload instance
     */
    H2R2HReload.create = function create(properties) {
        return new H2R2HReload(properties);
    };

    /**
     * Encodes the specified H2R2HReload message. Does not implicitly {@link H2R2HReload.verify|verify} messages.
     * @function encode
     * @memberof H2R2HReload
     * @static
     * @param {IH2R2HReload} m H2R2HReload message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    H2R2HReload.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        return w;
    };

    /**
     * Decodes a H2R2HReload message from the specified reader or buffer.
     * @function decode
     * @memberof H2R2HReload
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {H2R2HReload} H2R2HReload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    H2R2HReload.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.H2R2HReload();
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

    return H2R2HReload;
})();

$root.MatchRoomPlayer = (function() {

    /**
     * Properties of a MatchRoomPlayer.
     * @exports IMatchRoomPlayer
     * @interface IMatchRoomPlayer
     * @property {number|Long} playerId MatchRoomPlayer playerId
     * @property {boolean} isRobot MatchRoomPlayer isRobot
     * @property {number} setCardPercentage MatchRoomPlayer setCardPercentage
     */

    /**
     * Constructs a new MatchRoomPlayer.
     * @exports MatchRoomPlayer
     * @classdesc Represents a MatchRoomPlayer.
     * @implements IMatchRoomPlayer
     * @constructor
     * @param {IMatchRoomPlayer=} [p] Properties to set
     */
    function MatchRoomPlayer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MatchRoomPlayer playerId.
     * @member {number|Long} playerId
     * @memberof MatchRoomPlayer
     * @instance
     */
    MatchRoomPlayer.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MatchRoomPlayer isRobot.
     * @member {boolean} isRobot
     * @memberof MatchRoomPlayer
     * @instance
     */
    MatchRoomPlayer.prototype.isRobot = false;

    /**
     * MatchRoomPlayer setCardPercentage.
     * @member {number} setCardPercentage
     * @memberof MatchRoomPlayer
     * @instance
     */
    MatchRoomPlayer.prototype.setCardPercentage = 0;

    /**
     * Creates a new MatchRoomPlayer instance using the specified properties.
     * @function create
     * @memberof MatchRoomPlayer
     * @static
     * @param {IMatchRoomPlayer=} [properties] Properties to set
     * @returns {MatchRoomPlayer} MatchRoomPlayer instance
     */
    MatchRoomPlayer.create = function create(properties) {
        return new MatchRoomPlayer(properties);
    };

    /**
     * Encodes the specified MatchRoomPlayer message. Does not implicitly {@link MatchRoomPlayer.verify|verify} messages.
     * @function encode
     * @memberof MatchRoomPlayer
     * @static
     * @param {IMatchRoomPlayer} m MatchRoomPlayer message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchRoomPlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        w.uint32(16).bool(m.isRobot);
        w.uint32(24).int32(m.setCardPercentage);
        return w;
    };

    /**
     * Decodes a MatchRoomPlayer message from the specified reader or buffer.
     * @function decode
     * @memberof MatchRoomPlayer
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MatchRoomPlayer} MatchRoomPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchRoomPlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MatchRoomPlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.int64();
                break;
            case 2:
                m.isRobot = r.bool();
                break;
            case 3:
                m.setCardPercentage = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("isRobot"))
            throw $util.ProtocolError("missing required 'isRobot'", { instance: m });
        if (!m.hasOwnProperty("setCardPercentage"))
            throw $util.ProtocolError("missing required 'setCardPercentage'", { instance: m });
        return m;
    };

    return MatchRoomPlayer;
})();

$root.H2RAutoMatch = (function() {

    /**
     * Properties of a H2RAutoMatch.
     * @exports IH2RAutoMatch
     * @interface IH2RAutoMatch
     * @property {number} playType H2RAutoMatch playType
     * @property {string} roomType H2RAutoMatch roomType
     * @property {string} roomLevel H2RAutoMatch roomLevel
     * @property {number} baseScore H2RAutoMatch baseScore
     * @property {number} choushui H2RAutoMatch choushui
     * @property {number|Long} maxGold H2RAutoMatch maxGold
     * @property {number|Long} minGold H2RAutoMatch minGold
     * @property {Array.<IMatchRoomPlayer>|null} [player] H2RAutoMatch player
     * @property {Array.<number>|null} [strategy] H2RAutoMatch strategy
     * @property {number} endType H2RAutoMatch endType
     * @property {number} playId H2RAutoMatch playId
     * @property {string} configScript H2RAutoMatch configScript
     */

    /**
     * Constructs a new H2RAutoMatch.
     * @exports H2RAutoMatch
     * @classdesc Represents a H2RAutoMatch.
     * @implements IH2RAutoMatch
     * @constructor
     * @param {IH2RAutoMatch=} [p] Properties to set
     */
    function H2RAutoMatch(p) {
        this.player = [];
        this.strategy = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * H2RAutoMatch playType.
     * @member {number} playType
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.playType = 0;

    /**
     * H2RAutoMatch roomType.
     * @member {string} roomType
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.roomType = "";

    /**
     * H2RAutoMatch roomLevel.
     * @member {string} roomLevel
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.roomLevel = "";

    /**
     * H2RAutoMatch baseScore.
     * @member {number} baseScore
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.baseScore = 0;

    /**
     * H2RAutoMatch choushui.
     * @member {number} choushui
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.choushui = 0;

    /**
     * H2RAutoMatch maxGold.
     * @member {number|Long} maxGold
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.maxGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * H2RAutoMatch minGold.
     * @member {number|Long} minGold
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.minGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * H2RAutoMatch player.
     * @member {Array.<IMatchRoomPlayer>} player
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.player = $util.emptyArray;

    /**
     * H2RAutoMatch strategy.
     * @member {Array.<number>} strategy
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.strategy = $util.emptyArray;

    /**
     * H2RAutoMatch endType.
     * @member {number} endType
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.endType = 0;

    /**
     * H2RAutoMatch playId.
     * @member {number} playId
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.playId = 0;

    /**
     * H2RAutoMatch configScript.
     * @member {string} configScript
     * @memberof H2RAutoMatch
     * @instance
     */
    H2RAutoMatch.prototype.configScript = "";

    /**
     * Creates a new H2RAutoMatch instance using the specified properties.
     * @function create
     * @memberof H2RAutoMatch
     * @static
     * @param {IH2RAutoMatch=} [properties] Properties to set
     * @returns {H2RAutoMatch} H2RAutoMatch instance
     */
    H2RAutoMatch.create = function create(properties) {
        return new H2RAutoMatch(properties);
    };

    /**
     * Encodes the specified H2RAutoMatch message. Does not implicitly {@link H2RAutoMatch.verify|verify} messages.
     * @function encode
     * @memberof H2RAutoMatch
     * @static
     * @param {IH2RAutoMatch} m H2RAutoMatch message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    H2RAutoMatch.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        w.uint32(18).string(m.roomType);
        w.uint32(26).string(m.roomLevel);
        w.uint32(32).int32(m.baseScore);
        w.uint32(40).int32(m.choushui);
        w.uint32(48).int64(m.maxGold);
        w.uint32(56).int64(m.minGold);
        if (m.player != null && m.player.length) {
            for (var i = 0; i < m.player.length; ++i)
                $root.MatchRoomPlayer.encode(m.player[i], w.uint32(66).fork()).ldelim();
        }
        if (m.strategy != null && m.strategy.length) {
            for (var i = 0; i < m.strategy.length; ++i)
                w.uint32(72).int32(m.strategy[i]);
        }
        w.uint32(80).int32(m.endType);
        w.uint32(88).int32(m.playId);
        w.uint32(98).string(m.configScript);
        return w;
    };

    /**
     * Decodes a H2RAutoMatch message from the specified reader or buffer.
     * @function decode
     * @memberof H2RAutoMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {H2RAutoMatch} H2RAutoMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    H2RAutoMatch.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.H2RAutoMatch();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.roomType = r.string();
                break;
            case 3:
                m.roomLevel = r.string();
                break;
            case 4:
                m.baseScore = r.int32();
                break;
            case 5:
                m.choushui = r.int32();
                break;
            case 6:
                m.maxGold = r.int64();
                break;
            case 7:
                m.minGold = r.int64();
                break;
            case 8:
                if (!(m.player && m.player.length))
                    m.player = [];
                m.player.push($root.MatchRoomPlayer.decode(r, r.uint32()));
                break;
            case 9:
                if (!(m.strategy && m.strategy.length))
                    m.strategy = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.strategy.push(r.int32());
                } else
                    m.strategy.push(r.int32());
                break;
            case 10:
                m.endType = r.int32();
                break;
            case 11:
                m.playId = r.int32();
                break;
            case 12:
                m.configScript = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("roomType"))
            throw $util.ProtocolError("missing required 'roomType'", { instance: m });
        if (!m.hasOwnProperty("roomLevel"))
            throw $util.ProtocolError("missing required 'roomLevel'", { instance: m });
        if (!m.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
        if (!m.hasOwnProperty("choushui"))
            throw $util.ProtocolError("missing required 'choushui'", { instance: m });
        if (!m.hasOwnProperty("maxGold"))
            throw $util.ProtocolError("missing required 'maxGold'", { instance: m });
        if (!m.hasOwnProperty("minGold"))
            throw $util.ProtocolError("missing required 'minGold'", { instance: m });
        if (!m.hasOwnProperty("endType"))
            throw $util.ProtocolError("missing required 'endType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        if (!m.hasOwnProperty("configScript"))
            throw $util.ProtocolError("missing required 'configScript'", { instance: m });
        return m;
    };

    return H2RAutoMatch;
})();

$root.R2HAssignmentPlayers = (function() {

    /**
     * Properties of a R2HAssignmentPlayers.
     * @exports IR2HAssignmentPlayers
     * @interface IR2HAssignmentPlayers
     * @property {number} roomId R2HAssignmentPlayers roomId
     * @property {number} playType R2HAssignmentPlayers playType
     * @property {string} roomType R2HAssignmentPlayers roomType
     * @property {number} baseScore R2HAssignmentPlayers baseScore
     * @property {Array.<number|Long>|null} [playerIds] R2HAssignmentPlayers playerIds
     * @property {number} scene R2HAssignmentPlayers scene
     */

    /**
     * Constructs a new R2HAssignmentPlayers.
     * @exports R2HAssignmentPlayers
     * @classdesc Represents a R2HAssignmentPlayers.
     * @implements IR2HAssignmentPlayers
     * @constructor
     * @param {IR2HAssignmentPlayers=} [p] Properties to set
     */
    function R2HAssignmentPlayers(p) {
        this.playerIds = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * R2HAssignmentPlayers roomId.
     * @member {number} roomId
     * @memberof R2HAssignmentPlayers
     * @instance
     */
    R2HAssignmentPlayers.prototype.roomId = 0;

    /**
     * R2HAssignmentPlayers playType.
     * @member {number} playType
     * @memberof R2HAssignmentPlayers
     * @instance
     */
    R2HAssignmentPlayers.prototype.playType = 0;

    /**
     * R2HAssignmentPlayers roomType.
     * @member {string} roomType
     * @memberof R2HAssignmentPlayers
     * @instance
     */
    R2HAssignmentPlayers.prototype.roomType = "";

    /**
     * R2HAssignmentPlayers baseScore.
     * @member {number} baseScore
     * @memberof R2HAssignmentPlayers
     * @instance
     */
    R2HAssignmentPlayers.prototype.baseScore = 0;

    /**
     * R2HAssignmentPlayers playerIds.
     * @member {Array.<number|Long>} playerIds
     * @memberof R2HAssignmentPlayers
     * @instance
     */
    R2HAssignmentPlayers.prototype.playerIds = $util.emptyArray;

    /**
     * R2HAssignmentPlayers scene.
     * @member {number} scene
     * @memberof R2HAssignmentPlayers
     * @instance
     */
    R2HAssignmentPlayers.prototype.scene = 0;

    /**
     * Creates a new R2HAssignmentPlayers instance using the specified properties.
     * @function create
     * @memberof R2HAssignmentPlayers
     * @static
     * @param {IR2HAssignmentPlayers=} [properties] Properties to set
     * @returns {R2HAssignmentPlayers} R2HAssignmentPlayers instance
     */
    R2HAssignmentPlayers.create = function create(properties) {
        return new R2HAssignmentPlayers(properties);
    };

    /**
     * Encodes the specified R2HAssignmentPlayers message. Does not implicitly {@link R2HAssignmentPlayers.verify|verify} messages.
     * @function encode
     * @memberof R2HAssignmentPlayers
     * @static
     * @param {IR2HAssignmentPlayers} m R2HAssignmentPlayers message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    R2HAssignmentPlayers.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.roomId);
        w.uint32(16).int32(m.playType);
        w.uint32(26).string(m.roomType);
        w.uint32(32).int32(m.baseScore);
        if (m.playerIds != null && m.playerIds.length) {
            for (var i = 0; i < m.playerIds.length; ++i)
                w.uint32(40).int64(m.playerIds[i]);
        }
        w.uint32(48).int32(m.scene);
        return w;
    };

    /**
     * Decodes a R2HAssignmentPlayers message from the specified reader or buffer.
     * @function decode
     * @memberof R2HAssignmentPlayers
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {R2HAssignmentPlayers} R2HAssignmentPlayers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    R2HAssignmentPlayers.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.R2HAssignmentPlayers();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomId = r.int32();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.roomType = r.string();
                break;
            case 4:
                m.baseScore = r.int32();
                break;
            case 5:
                if (!(m.playerIds && m.playerIds.length))
                    m.playerIds = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.playerIds.push(r.int64());
                } else
                    m.playerIds.push(r.int64());
                break;
            case 6:
                m.scene = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("roomType"))
            throw $util.ProtocolError("missing required 'roomType'", { instance: m });
        if (!m.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
        if (!m.hasOwnProperty("scene"))
            throw $util.ProtocolError("missing required 'scene'", { instance: m });
        return m;
    };

    return R2HAssignmentPlayers;
})();

$root.H2RAssignmentPlayers = (function() {

    /**
     * Properties of a H2RAssignmentPlayers.
     * @exports IH2RAssignmentPlayers
     * @interface IH2RAssignmentPlayers
     * @property {number} roomId H2RAssignmentPlayers roomId
     * @property {number} playType H2RAssignmentPlayers playType
     * @property {number} baseScore H2RAssignmentPlayers baseScore
     * @property {string} roomType H2RAssignmentPlayers roomType
     * @property {Array.<IMatchRoomPlayer>|null} [players] H2RAssignmentPlayers players
     * @property {Array.<number>|null} [strategy] H2RAssignmentPlayers strategy
     * @property {number} scene H2RAssignmentPlayers scene
     */

    /**
     * Constructs a new H2RAssignmentPlayers.
     * @exports H2RAssignmentPlayers
     * @classdesc Represents a H2RAssignmentPlayers.
     * @implements IH2RAssignmentPlayers
     * @constructor
     * @param {IH2RAssignmentPlayers=} [p] Properties to set
     */
    function H2RAssignmentPlayers(p) {
        this.players = [];
        this.strategy = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * H2RAssignmentPlayers roomId.
     * @member {number} roomId
     * @memberof H2RAssignmentPlayers
     * @instance
     */
    H2RAssignmentPlayers.prototype.roomId = 0;

    /**
     * H2RAssignmentPlayers playType.
     * @member {number} playType
     * @memberof H2RAssignmentPlayers
     * @instance
     */
    H2RAssignmentPlayers.prototype.playType = 0;

    /**
     * H2RAssignmentPlayers baseScore.
     * @member {number} baseScore
     * @memberof H2RAssignmentPlayers
     * @instance
     */
    H2RAssignmentPlayers.prototype.baseScore = 0;

    /**
     * H2RAssignmentPlayers roomType.
     * @member {string} roomType
     * @memberof H2RAssignmentPlayers
     * @instance
     */
    H2RAssignmentPlayers.prototype.roomType = "";

    /**
     * H2RAssignmentPlayers players.
     * @member {Array.<IMatchRoomPlayer>} players
     * @memberof H2RAssignmentPlayers
     * @instance
     */
    H2RAssignmentPlayers.prototype.players = $util.emptyArray;

    /**
     * H2RAssignmentPlayers strategy.
     * @member {Array.<number>} strategy
     * @memberof H2RAssignmentPlayers
     * @instance
     */
    H2RAssignmentPlayers.prototype.strategy = $util.emptyArray;

    /**
     * H2RAssignmentPlayers scene.
     * @member {number} scene
     * @memberof H2RAssignmentPlayers
     * @instance
     */
    H2RAssignmentPlayers.prototype.scene = 0;

    /**
     * Creates a new H2RAssignmentPlayers instance using the specified properties.
     * @function create
     * @memberof H2RAssignmentPlayers
     * @static
     * @param {IH2RAssignmentPlayers=} [properties] Properties to set
     * @returns {H2RAssignmentPlayers} H2RAssignmentPlayers instance
     */
    H2RAssignmentPlayers.create = function create(properties) {
        return new H2RAssignmentPlayers(properties);
    };

    /**
     * Encodes the specified H2RAssignmentPlayers message. Does not implicitly {@link H2RAssignmentPlayers.verify|verify} messages.
     * @function encode
     * @memberof H2RAssignmentPlayers
     * @static
     * @param {IH2RAssignmentPlayers} m H2RAssignmentPlayers message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    H2RAssignmentPlayers.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.roomId);
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.baseScore);
        w.uint32(34).string(m.roomType);
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.MatchRoomPlayer.encode(m.players[i], w.uint32(42).fork()).ldelim();
        }
        if (m.strategy != null && m.strategy.length) {
            for (var i = 0; i < m.strategy.length; ++i)
                w.uint32(56).int32(m.strategy[i]);
        }
        w.uint32(64).int32(m.scene);
        return w;
    };

    /**
     * Decodes a H2RAssignmentPlayers message from the specified reader or buffer.
     * @function decode
     * @memberof H2RAssignmentPlayers
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {H2RAssignmentPlayers} H2RAssignmentPlayers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    H2RAssignmentPlayers.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.H2RAssignmentPlayers();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomId = r.int32();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.baseScore = r.int32();
                break;
            case 4:
                m.roomType = r.string();
                break;
            case 5:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.MatchRoomPlayer.decode(r, r.uint32()));
                break;
            case 7:
                if (!(m.strategy && m.strategy.length))
                    m.strategy = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.strategy.push(r.int32());
                } else
                    m.strategy.push(r.int32());
                break;
            case 8:
                m.scene = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
        if (!m.hasOwnProperty("roomType"))
            throw $util.ProtocolError("missing required 'roomType'", { instance: m });
        if (!m.hasOwnProperty("scene"))
            throw $util.ProtocolError("missing required 'scene'", { instance: m });
        return m;
    };

    return H2RAssignmentPlayers;
})();

$root.R2HAssignmentResult = (function() {

    /**
     * Properties of a R2HAssignmentResult.
     * @exports IR2HAssignmentResult
     * @interface IR2HAssignmentResult
     * @property {number} roomId R2HAssignmentResult roomId
     * @property {number} playType R2HAssignmentResult playType
     * @property {number} baseScore R2HAssignmentResult baseScore
     * @property {string} roomType R2HAssignmentResult roomType
     * @property {Array.<IMatchRoomPlayer>|null} [players] R2HAssignmentResult players
     * @property {boolean} result R2HAssignmentResult result
     * @property {string} tips R2HAssignmentResult tips
     * @property {boolean} isRoomNotExist R2HAssignmentResult isRoomNotExist
     * @property {number} sceneType R2HAssignmentResult sceneType
     */

    /**
     * Constructs a new R2HAssignmentResult.
     * @exports R2HAssignmentResult
     * @classdesc Represents a R2HAssignmentResult.
     * @implements IR2HAssignmentResult
     * @constructor
     * @param {IR2HAssignmentResult=} [p] Properties to set
     */
    function R2HAssignmentResult(p) {
        this.players = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * R2HAssignmentResult roomId.
     * @member {number} roomId
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.roomId = 0;

    /**
     * R2HAssignmentResult playType.
     * @member {number} playType
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.playType = 0;

    /**
     * R2HAssignmentResult baseScore.
     * @member {number} baseScore
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.baseScore = 0;

    /**
     * R2HAssignmentResult roomType.
     * @member {string} roomType
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.roomType = "";

    /**
     * R2HAssignmentResult players.
     * @member {Array.<IMatchRoomPlayer>} players
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.players = $util.emptyArray;

    /**
     * R2HAssignmentResult result.
     * @member {boolean} result
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.result = false;

    /**
     * R2HAssignmentResult tips.
     * @member {string} tips
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.tips = "";

    /**
     * R2HAssignmentResult isRoomNotExist.
     * @member {boolean} isRoomNotExist
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.isRoomNotExist = false;

    /**
     * R2HAssignmentResult sceneType.
     * @member {number} sceneType
     * @memberof R2HAssignmentResult
     * @instance
     */
    R2HAssignmentResult.prototype.sceneType = 0;

    /**
     * Creates a new R2HAssignmentResult instance using the specified properties.
     * @function create
     * @memberof R2HAssignmentResult
     * @static
     * @param {IR2HAssignmentResult=} [properties] Properties to set
     * @returns {R2HAssignmentResult} R2HAssignmentResult instance
     */
    R2HAssignmentResult.create = function create(properties) {
        return new R2HAssignmentResult(properties);
    };

    /**
     * Encodes the specified R2HAssignmentResult message. Does not implicitly {@link R2HAssignmentResult.verify|verify} messages.
     * @function encode
     * @memberof R2HAssignmentResult
     * @static
     * @param {IR2HAssignmentResult} m R2HAssignmentResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    R2HAssignmentResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.roomId);
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.baseScore);
        w.uint32(34).string(m.roomType);
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.MatchRoomPlayer.encode(m.players[i], w.uint32(42).fork()).ldelim();
        }
        w.uint32(48).bool(m.result);
        w.uint32(58).string(m.tips);
        w.uint32(64).bool(m.isRoomNotExist);
        w.uint32(72).int32(m.sceneType);
        return w;
    };

    /**
     * Decodes a R2HAssignmentResult message from the specified reader or buffer.
     * @function decode
     * @memberof R2HAssignmentResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {R2HAssignmentResult} R2HAssignmentResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    R2HAssignmentResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.R2HAssignmentResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomId = r.int32();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.baseScore = r.int32();
                break;
            case 4:
                m.roomType = r.string();
                break;
            case 5:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.MatchRoomPlayer.decode(r, r.uint32()));
                break;
            case 6:
                m.result = r.bool();
                break;
            case 7:
                m.tips = r.string();
                break;
            case 8:
                m.isRoomNotExist = r.bool();
                break;
            case 9:
                m.sceneType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
        if (!m.hasOwnProperty("roomType"))
            throw $util.ProtocolError("missing required 'roomType'", { instance: m });
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        if (!m.hasOwnProperty("isRoomNotExist"))
            throw $util.ProtocolError("missing required 'isRoomNotExist'", { instance: m });
        if (!m.hasOwnProperty("sceneType"))
            throw $util.ProtocolError("missing required 'sceneType'", { instance: m });
        return m;
    };

    return R2HAssignmentResult;
})();

$root.R2HRemoveRoom = (function() {

    /**
     * Properties of a R2HRemoveRoom.
     * @exports IR2HRemoveRoom
     * @interface IR2HRemoveRoom
     * @property {number} roomServerId R2HRemoveRoom roomServerId
     * @property {number} roomId R2HRemoveRoom roomId
     */

    /**
     * Constructs a new R2HRemoveRoom.
     * @exports R2HRemoveRoom
     * @classdesc Represents a R2HRemoveRoom.
     * @implements IR2HRemoveRoom
     * @constructor
     * @param {IR2HRemoveRoom=} [p] Properties to set
     */
    function R2HRemoveRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * R2HRemoveRoom roomServerId.
     * @member {number} roomServerId
     * @memberof R2HRemoveRoom
     * @instance
     */
    R2HRemoveRoom.prototype.roomServerId = 0;

    /**
     * R2HRemoveRoom roomId.
     * @member {number} roomId
     * @memberof R2HRemoveRoom
     * @instance
     */
    R2HRemoveRoom.prototype.roomId = 0;

    /**
     * Creates a new R2HRemoveRoom instance using the specified properties.
     * @function create
     * @memberof R2HRemoveRoom
     * @static
     * @param {IR2HRemoveRoom=} [properties] Properties to set
     * @returns {R2HRemoveRoom} R2HRemoveRoom instance
     */
    R2HRemoveRoom.create = function create(properties) {
        return new R2HRemoveRoom(properties);
    };

    /**
     * Encodes the specified R2HRemoveRoom message. Does not implicitly {@link R2HRemoveRoom.verify|verify} messages.
     * @function encode
     * @memberof R2HRemoveRoom
     * @static
     * @param {IR2HRemoveRoom} m R2HRemoveRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    R2HRemoveRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.roomServerId);
        w.uint32(16).int32(m.roomId);
        return w;
    };

    /**
     * Decodes a R2HRemoveRoom message from the specified reader or buffer.
     * @function decode
     * @memberof R2HRemoveRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {R2HRemoveRoom} R2HRemoveRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    R2HRemoveRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.R2HRemoveRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomServerId = r.int32();
                break;
            case 2:
                m.roomId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomServerId"))
            throw $util.ProtocolError("missing required 'roomServerId'", { instance: m });
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        return m;
    };

    return R2HRemoveRoom;
})();

$root.H2RJoinHall = (function() {

    /**
     * Properties of a H2RJoinHall.
     * @exports IH2RJoinHall
     * @interface IH2RJoinHall
     * @property {number|Long} recievePlayerId H2RJoinHall recievePlayerId
     * @property {number|Long} loginPlayerId H2RJoinHall loginPlayerId
     */

    /**
     * Constructs a new H2RJoinHall.
     * @exports H2RJoinHall
     * @classdesc Represents a H2RJoinHall.
     * @implements IH2RJoinHall
     * @constructor
     * @param {IH2RJoinHall=} [p] Properties to set
     */
    function H2RJoinHall(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * H2RJoinHall recievePlayerId.
     * @member {number|Long} recievePlayerId
     * @memberof H2RJoinHall
     * @instance
     */
    H2RJoinHall.prototype.recievePlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * H2RJoinHall loginPlayerId.
     * @member {number|Long} loginPlayerId
     * @memberof H2RJoinHall
     * @instance
     */
    H2RJoinHall.prototype.loginPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new H2RJoinHall instance using the specified properties.
     * @function create
     * @memberof H2RJoinHall
     * @static
     * @param {IH2RJoinHall=} [properties] Properties to set
     * @returns {H2RJoinHall} H2RJoinHall instance
     */
    H2RJoinHall.create = function create(properties) {
        return new H2RJoinHall(properties);
    };

    /**
     * Encodes the specified H2RJoinHall message. Does not implicitly {@link H2RJoinHall.verify|verify} messages.
     * @function encode
     * @memberof H2RJoinHall
     * @static
     * @param {IH2RJoinHall} m H2RJoinHall message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    H2RJoinHall.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.recievePlayerId);
        w.uint32(16).int64(m.loginPlayerId);
        return w;
    };

    /**
     * Decodes a H2RJoinHall message from the specified reader or buffer.
     * @function decode
     * @memberof H2RJoinHall
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {H2RJoinHall} H2RJoinHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    H2RJoinHall.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.H2RJoinHall();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.recievePlayerId = r.int64();
                break;
            case 2:
                m.loginPlayerId = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("recievePlayerId"))
            throw $util.ProtocolError("missing required 'recievePlayerId'", { instance: m });
        if (!m.hasOwnProperty("loginPlayerId"))
            throw $util.ProtocolError("missing required 'loginPlayerId'", { instance: m });
        return m;
    };

    return H2RJoinHall;
})();

$root.RoomEndPlayer = (function() {

    /**
     * Properties of a RoomEndPlayer.
     * @exports IRoomEndPlayer
     * @interface IRoomEndPlayer
     * @property {number|Long} playerId RoomEndPlayer playerId
     * @property {boolean} isRobot RoomEndPlayer isRobot
     * @property {number|Long} score RoomEndPlayer score
     */

    /**
     * Constructs a new RoomEndPlayer.
     * @exports RoomEndPlayer
     * @classdesc Represents a RoomEndPlayer.
     * @implements IRoomEndPlayer
     * @constructor
     * @param {IRoomEndPlayer=} [p] Properties to set
     */
    function RoomEndPlayer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomEndPlayer playerId.
     * @member {number|Long} playerId
     * @memberof RoomEndPlayer
     * @instance
     */
    RoomEndPlayer.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoomEndPlayer isRobot.
     * @member {boolean} isRobot
     * @memberof RoomEndPlayer
     * @instance
     */
    RoomEndPlayer.prototype.isRobot = false;

    /**
     * RoomEndPlayer score.
     * @member {number|Long} score
     * @memberof RoomEndPlayer
     * @instance
     */
    RoomEndPlayer.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new RoomEndPlayer instance using the specified properties.
     * @function create
     * @memberof RoomEndPlayer
     * @static
     * @param {IRoomEndPlayer=} [properties] Properties to set
     * @returns {RoomEndPlayer} RoomEndPlayer instance
     */
    RoomEndPlayer.create = function create(properties) {
        return new RoomEndPlayer(properties);
    };

    /**
     * Encodes the specified RoomEndPlayer message. Does not implicitly {@link RoomEndPlayer.verify|verify} messages.
     * @function encode
     * @memberof RoomEndPlayer
     * @static
     * @param {IRoomEndPlayer} m RoomEndPlayer message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomEndPlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        w.uint32(16).bool(m.isRobot);
        w.uint32(24).int64(m.score);
        return w;
    };

    /**
     * Decodes a RoomEndPlayer message from the specified reader or buffer.
     * @function decode
     * @memberof RoomEndPlayer
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomEndPlayer} RoomEndPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomEndPlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomEndPlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.int64();
                break;
            case 2:
                m.isRobot = r.bool();
                break;
            case 3:
                m.score = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("isRobot"))
            throw $util.ProtocolError("missing required 'isRobot'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        return m;
    };

    return RoomEndPlayer;
})();

$root.R2HRoomEnd = (function() {

    /**
     * Properties of a R2HRoomEnd.
     * @exports IR2HRoomEnd
     * @interface IR2HRoomEnd
     * @property {number} roomId R2HRoomEnd roomId
     * @property {number} playType R2HRoomEnd playType
     * @property {number} baseScore R2HRoomEnd baseScore
     * @property {boolean} isGold R2HRoomEnd isGold
     * @property {Array.<IRoomEndPlayer>|null} [roomEndPlayers] R2HRoomEnd roomEndPlayers
     * @property {number} sceneType R2HRoomEnd sceneType
     * @property {number} goldRoomType R2HRoomEnd goldRoomType
     */

    /**
     * Constructs a new R2HRoomEnd.
     * @exports R2HRoomEnd
     * @classdesc Represents a R2HRoomEnd.
     * @implements IR2HRoomEnd
     * @constructor
     * @param {IR2HRoomEnd=} [p] Properties to set
     */
    function R2HRoomEnd(p) {
        this.roomEndPlayers = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * R2HRoomEnd roomId.
     * @member {number} roomId
     * @memberof R2HRoomEnd
     * @instance
     */
    R2HRoomEnd.prototype.roomId = 0;

    /**
     * R2HRoomEnd playType.
     * @member {number} playType
     * @memberof R2HRoomEnd
     * @instance
     */
    R2HRoomEnd.prototype.playType = 0;

    /**
     * R2HRoomEnd baseScore.
     * @member {number} baseScore
     * @memberof R2HRoomEnd
     * @instance
     */
    R2HRoomEnd.prototype.baseScore = 0;

    /**
     * R2HRoomEnd isGold.
     * @member {boolean} isGold
     * @memberof R2HRoomEnd
     * @instance
     */
    R2HRoomEnd.prototype.isGold = false;

    /**
     * R2HRoomEnd roomEndPlayers.
     * @member {Array.<IRoomEndPlayer>} roomEndPlayers
     * @memberof R2HRoomEnd
     * @instance
     */
    R2HRoomEnd.prototype.roomEndPlayers = $util.emptyArray;

    /**
     * R2HRoomEnd sceneType.
     * @member {number} sceneType
     * @memberof R2HRoomEnd
     * @instance
     */
    R2HRoomEnd.prototype.sceneType = 0;

    /**
     * R2HRoomEnd goldRoomType.
     * @member {number} goldRoomType
     * @memberof R2HRoomEnd
     * @instance
     */
    R2HRoomEnd.prototype.goldRoomType = 0;

    /**
     * Creates a new R2HRoomEnd instance using the specified properties.
     * @function create
     * @memberof R2HRoomEnd
     * @static
     * @param {IR2HRoomEnd=} [properties] Properties to set
     * @returns {R2HRoomEnd} R2HRoomEnd instance
     */
    R2HRoomEnd.create = function create(properties) {
        return new R2HRoomEnd(properties);
    };

    /**
     * Encodes the specified R2HRoomEnd message. Does not implicitly {@link R2HRoomEnd.verify|verify} messages.
     * @function encode
     * @memberof R2HRoomEnd
     * @static
     * @param {IR2HRoomEnd} m R2HRoomEnd message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    R2HRoomEnd.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.roomId);
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.baseScore);
        w.uint32(32).bool(m.isGold);
        if (m.roomEndPlayers != null && m.roomEndPlayers.length) {
            for (var i = 0; i < m.roomEndPlayers.length; ++i)
                $root.RoomEndPlayer.encode(m.roomEndPlayers[i], w.uint32(42).fork()).ldelim();
        }
        w.uint32(48).int32(m.sceneType);
        w.uint32(56).int32(m.goldRoomType);
        return w;
    };

    /**
     * Decodes a R2HRoomEnd message from the specified reader or buffer.
     * @function decode
     * @memberof R2HRoomEnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {R2HRoomEnd} R2HRoomEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    R2HRoomEnd.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.R2HRoomEnd();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomId = r.int32();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.baseScore = r.int32();
                break;
            case 4:
                m.isGold = r.bool();
                break;
            case 5:
                if (!(m.roomEndPlayers && m.roomEndPlayers.length))
                    m.roomEndPlayers = [];
                m.roomEndPlayers.push($root.RoomEndPlayer.decode(r, r.uint32()));
                break;
            case 6:
                m.sceneType = r.int32();
                break;
            case 7:
                m.goldRoomType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
        if (!m.hasOwnProperty("isGold"))
            throw $util.ProtocolError("missing required 'isGold'", { instance: m });
        if (!m.hasOwnProperty("sceneType"))
            throw $util.ProtocolError("missing required 'sceneType'", { instance: m });
        if (!m.hasOwnProperty("goldRoomType"))
            throw $util.ProtocolError("missing required 'goldRoomType'", { instance: m });
        return m;
    };

    return R2HRoomEnd;
})();

$root.RoomEndRobot = (function() {

    /**
     * Properties of a RoomEndRobot.
     * @exports IRoomEndRobot
     * @interface IRoomEndRobot
     * @property {number|Long} robotId RoomEndRobot robotId
     * @property {number|Long} score RoomEndRobot score
     */

    /**
     * Constructs a new RoomEndRobot.
     * @exports RoomEndRobot
     * @classdesc Represents a RoomEndRobot.
     * @implements IRoomEndRobot
     * @constructor
     * @param {IRoomEndRobot=} [p] Properties to set
     */
    function RoomEndRobot(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomEndRobot robotId.
     * @member {number|Long} robotId
     * @memberof RoomEndRobot
     * @instance
     */
    RoomEndRobot.prototype.robotId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoomEndRobot score.
     * @member {number|Long} score
     * @memberof RoomEndRobot
     * @instance
     */
    RoomEndRobot.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new RoomEndRobot instance using the specified properties.
     * @function create
     * @memberof RoomEndRobot
     * @static
     * @param {IRoomEndRobot=} [properties] Properties to set
     * @returns {RoomEndRobot} RoomEndRobot instance
     */
    RoomEndRobot.create = function create(properties) {
        return new RoomEndRobot(properties);
    };

    /**
     * Encodes the specified RoomEndRobot message. Does not implicitly {@link RoomEndRobot.verify|verify} messages.
     * @function encode
     * @memberof RoomEndRobot
     * @static
     * @param {IRoomEndRobot} m RoomEndRobot message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomEndRobot.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.robotId);
        w.uint32(16).int64(m.score);
        return w;
    };

    /**
     * Decodes a RoomEndRobot message from the specified reader or buffer.
     * @function decode
     * @memberof RoomEndRobot
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomEndRobot} RoomEndRobot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomEndRobot.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomEndRobot();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.robotId = r.int64();
                break;
            case 2:
                m.score = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("robotId"))
            throw $util.ProtocolError("missing required 'robotId'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        return m;
    };

    return RoomEndRobot;
})();

$root.R2HAIBack = (function() {

    /**
     * Properties of a R2HAIBack.
     * @exports IR2HAIBack
     * @interface IR2HAIBack
     * @property {number} roomId R2HAIBack roomId
     * @property {number} playType R2HAIBack playType
     * @property {number} baseScore R2HAIBack baseScore
     * @property {Array.<IRoomEndRobot>|null} [robot] R2HAIBack robot
     * @property {number} sceneType R2HAIBack sceneType
     * @property {string} goldRoomType R2HAIBack goldRoomType
     */

    /**
     * Constructs a new R2HAIBack.
     * @exports R2HAIBack
     * @classdesc Represents a R2HAIBack.
     * @implements IR2HAIBack
     * @constructor
     * @param {IR2HAIBack=} [p] Properties to set
     */
    function R2HAIBack(p) {
        this.robot = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * R2HAIBack roomId.
     * @member {number} roomId
     * @memberof R2HAIBack
     * @instance
     */
    R2HAIBack.prototype.roomId = 0;

    /**
     * R2HAIBack playType.
     * @member {number} playType
     * @memberof R2HAIBack
     * @instance
     */
    R2HAIBack.prototype.playType = 0;

    /**
     * R2HAIBack baseScore.
     * @member {number} baseScore
     * @memberof R2HAIBack
     * @instance
     */
    R2HAIBack.prototype.baseScore = 0;

    /**
     * R2HAIBack robot.
     * @member {Array.<IRoomEndRobot>} robot
     * @memberof R2HAIBack
     * @instance
     */
    R2HAIBack.prototype.robot = $util.emptyArray;

    /**
     * R2HAIBack sceneType.
     * @member {number} sceneType
     * @memberof R2HAIBack
     * @instance
     */
    R2HAIBack.prototype.sceneType = 0;

    /**
     * R2HAIBack goldRoomType.
     * @member {string} goldRoomType
     * @memberof R2HAIBack
     * @instance
     */
    R2HAIBack.prototype.goldRoomType = "";

    /**
     * Creates a new R2HAIBack instance using the specified properties.
     * @function create
     * @memberof R2HAIBack
     * @static
     * @param {IR2HAIBack=} [properties] Properties to set
     * @returns {R2HAIBack} R2HAIBack instance
     */
    R2HAIBack.create = function create(properties) {
        return new R2HAIBack(properties);
    };

    /**
     * Encodes the specified R2HAIBack message. Does not implicitly {@link R2HAIBack.verify|verify} messages.
     * @function encode
     * @memberof R2HAIBack
     * @static
     * @param {IR2HAIBack} m R2HAIBack message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    R2HAIBack.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.roomId);
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.baseScore);
        if (m.robot != null && m.robot.length) {
            for (var i = 0; i < m.robot.length; ++i)
                $root.RoomEndRobot.encode(m.robot[i], w.uint32(34).fork()).ldelim();
        }
        w.uint32(40).int32(m.sceneType);
        w.uint32(50).string(m.goldRoomType);
        return w;
    };

    /**
     * Decodes a R2HAIBack message from the specified reader or buffer.
     * @function decode
     * @memberof R2HAIBack
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {R2HAIBack} R2HAIBack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    R2HAIBack.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.R2HAIBack();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomId = r.int32();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.baseScore = r.int32();
                break;
            case 4:
                if (!(m.robot && m.robot.length))
                    m.robot = [];
                m.robot.push($root.RoomEndRobot.decode(r, r.uint32()));
                break;
            case 5:
                m.sceneType = r.int32();
                break;
            case 6:
                m.goldRoomType = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
        if (!m.hasOwnProperty("sceneType"))
            throw $util.ProtocolError("missing required 'sceneType'", { instance: m });
        if (!m.hasOwnProperty("goldRoomType"))
            throw $util.ProtocolError("missing required 'goldRoomType'", { instance: m });
        return m;
    };

    return R2HAIBack;
})();

$root.R2HJoinRoom = (function() {

    /**
     * Properties of a R2HJoinRoom.
     * @exports IR2HJoinRoom
     * @interface IR2HJoinRoom
     * @property {number|Long} roleid R2HJoinRoom roleid
     * @property {number} sceneType R2HJoinRoom sceneType
     * @property {number} playId R2HJoinRoom playId
     */

    /**
     * Constructs a new R2HJoinRoom.
     * @exports R2HJoinRoom
     * @classdesc Represents a R2HJoinRoom.
     * @implements IR2HJoinRoom
     * @constructor
     * @param {IR2HJoinRoom=} [p] Properties to set
     */
    function R2HJoinRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * R2HJoinRoom roleid.
     * @member {number|Long} roleid
     * @memberof R2HJoinRoom
     * @instance
     */
    R2HJoinRoom.prototype.roleid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * R2HJoinRoom sceneType.
     * @member {number} sceneType
     * @memberof R2HJoinRoom
     * @instance
     */
    R2HJoinRoom.prototype.sceneType = 0;

    /**
     * R2HJoinRoom playId.
     * @member {number} playId
     * @memberof R2HJoinRoom
     * @instance
     */
    R2HJoinRoom.prototype.playId = 0;

    /**
     * Creates a new R2HJoinRoom instance using the specified properties.
     * @function create
     * @memberof R2HJoinRoom
     * @static
     * @param {IR2HJoinRoom=} [properties] Properties to set
     * @returns {R2HJoinRoom} R2HJoinRoom instance
     */
    R2HJoinRoom.create = function create(properties) {
        return new R2HJoinRoom(properties);
    };

    /**
     * Encodes the specified R2HJoinRoom message. Does not implicitly {@link R2HJoinRoom.verify|verify} messages.
     * @function encode
     * @memberof R2HJoinRoom
     * @static
     * @param {IR2HJoinRoom} m R2HJoinRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    R2HJoinRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.roleid);
        w.uint32(16).int32(m.sceneType);
        w.uint32(24).int32(m.playId);
        return w;
    };

    /**
     * Decodes a R2HJoinRoom message from the specified reader or buffer.
     * @function decode
     * @memberof R2HJoinRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {R2HJoinRoom} R2HJoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    R2HJoinRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.R2HJoinRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roleid = r.int64();
                break;
            case 2:
                m.sceneType = r.int32();
                break;
            case 3:
                m.playId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roleid"))
            throw $util.ProtocolError("missing required 'roleid'", { instance: m });
        if (!m.hasOwnProperty("sceneType"))
            throw $util.ProtocolError("missing required 'sceneType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        return m;
    };

    return R2HJoinRoom;
})();

$root.H2RBroadcast = (function() {

    /**
     * Properties of a H2RBroadcast.
     * @exports IH2RBroadcast
     * @interface IH2RBroadcast
     * @property {string} content H2RBroadcast content
     */

    /**
     * Constructs a new H2RBroadcast.
     * @exports H2RBroadcast
     * @classdesc Represents a H2RBroadcast.
     * @implements IH2RBroadcast
     * @constructor
     * @param {IH2RBroadcast=} [p] Properties to set
     */
    function H2RBroadcast(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * H2RBroadcast content.
     * @member {string} content
     * @memberof H2RBroadcast
     * @instance
     */
    H2RBroadcast.prototype.content = "";

    /**
     * Creates a new H2RBroadcast instance using the specified properties.
     * @function create
     * @memberof H2RBroadcast
     * @static
     * @param {IH2RBroadcast=} [properties] Properties to set
     * @returns {H2RBroadcast} H2RBroadcast instance
     */
    H2RBroadcast.create = function create(properties) {
        return new H2RBroadcast(properties);
    };

    /**
     * Encodes the specified H2RBroadcast message. Does not implicitly {@link H2RBroadcast.verify|verify} messages.
     * @function encode
     * @memberof H2RBroadcast
     * @static
     * @param {IH2RBroadcast} m H2RBroadcast message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    H2RBroadcast.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.content);
        return w;
    };

    /**
     * Decodes a H2RBroadcast message from the specified reader or buffer.
     * @function decode
     * @memberof H2RBroadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {H2RBroadcast} H2RBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    H2RBroadcast.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.H2RBroadcast();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.content = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: m });
        return m;
    };

    return H2RBroadcast;
})();

$root.R2HRoomMatchResult = (function() {

    /**
     * Properties of a R2HRoomMatchResult.
     * @exports IR2HRoomMatchResult
     * @interface IR2HRoomMatchResult
     * @property {number} playType R2HRoomMatchResult playType
     * @property {number} baseScore R2HRoomMatchResult baseScore
     * @property {boolean} isGold R2HRoomMatchResult isGold
     * @property {Array.<IMatchRoomPlayer>|null} [playerIds] R2HRoomMatchResult playerIds
     * @property {boolean} result R2HRoomMatchResult result
     * @property {string} tips R2HRoomMatchResult tips
     * @property {number} roomId R2HRoomMatchResult roomId
     * @property {string} goldType R2HRoomMatchResult goldType
     * @property {number} sceneType R2HRoomMatchResult sceneType
     */

    /**
     * Constructs a new R2HRoomMatchResult.
     * @exports R2HRoomMatchResult
     * @classdesc Represents a R2HRoomMatchResult.
     * @implements IR2HRoomMatchResult
     * @constructor
     * @param {IR2HRoomMatchResult=} [p] Properties to set
     */
    function R2HRoomMatchResult(p) {
        this.playerIds = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * R2HRoomMatchResult playType.
     * @member {number} playType
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.playType = 0;

    /**
     * R2HRoomMatchResult baseScore.
     * @member {number} baseScore
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.baseScore = 0;

    /**
     * R2HRoomMatchResult isGold.
     * @member {boolean} isGold
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.isGold = false;

    /**
     * R2HRoomMatchResult playerIds.
     * @member {Array.<IMatchRoomPlayer>} playerIds
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.playerIds = $util.emptyArray;

    /**
     * R2HRoomMatchResult result.
     * @member {boolean} result
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.result = false;

    /**
     * R2HRoomMatchResult tips.
     * @member {string} tips
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.tips = "";

    /**
     * R2HRoomMatchResult roomId.
     * @member {number} roomId
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.roomId = 0;

    /**
     * R2HRoomMatchResult goldType.
     * @member {string} goldType
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.goldType = "";

    /**
     * R2HRoomMatchResult sceneType.
     * @member {number} sceneType
     * @memberof R2HRoomMatchResult
     * @instance
     */
    R2HRoomMatchResult.prototype.sceneType = 0;

    /**
     * Creates a new R2HRoomMatchResult instance using the specified properties.
     * @function create
     * @memberof R2HRoomMatchResult
     * @static
     * @param {IR2HRoomMatchResult=} [properties] Properties to set
     * @returns {R2HRoomMatchResult} R2HRoomMatchResult instance
     */
    R2HRoomMatchResult.create = function create(properties) {
        return new R2HRoomMatchResult(properties);
    };

    /**
     * Encodes the specified R2HRoomMatchResult message. Does not implicitly {@link R2HRoomMatchResult.verify|verify} messages.
     * @function encode
     * @memberof R2HRoomMatchResult
     * @static
     * @param {IR2HRoomMatchResult} m R2HRoomMatchResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    R2HRoomMatchResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        w.uint32(16).int32(m.baseScore);
        w.uint32(24).bool(m.isGold);
        if (m.playerIds != null && m.playerIds.length) {
            for (var i = 0; i < m.playerIds.length; ++i)
                $root.MatchRoomPlayer.encode(m.playerIds[i], w.uint32(34).fork()).ldelim();
        }
        w.uint32(40).bool(m.result);
        w.uint32(50).string(m.tips);
        w.uint32(56).int32(m.roomId);
        w.uint32(66).string(m.goldType);
        w.uint32(72).int32(m.sceneType);
        return w;
    };

    /**
     * Decodes a R2HRoomMatchResult message from the specified reader or buffer.
     * @function decode
     * @memberof R2HRoomMatchResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {R2HRoomMatchResult} R2HRoomMatchResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    R2HRoomMatchResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.R2HRoomMatchResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.baseScore = r.int32();
                break;
            case 3:
                m.isGold = r.bool();
                break;
            case 4:
                if (!(m.playerIds && m.playerIds.length))
                    m.playerIds = [];
                m.playerIds.push($root.MatchRoomPlayer.decode(r, r.uint32()));
                break;
            case 5:
                m.result = r.bool();
                break;
            case 6:
                m.tips = r.string();
                break;
            case 7:
                m.roomId = r.int32();
                break;
            case 8:
                m.goldType = r.string();
                break;
            case 9:
                m.sceneType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
        if (!m.hasOwnProperty("isGold"))
            throw $util.ProtocolError("missing required 'isGold'", { instance: m });
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        if (!m.hasOwnProperty("goldType"))
            throw $util.ProtocolError("missing required 'goldType'", { instance: m });
        if (!m.hasOwnProperty("sceneType"))
            throw $util.ProtocolError("missing required 'sceneType'", { instance: m });
        return m;
    };

    return R2HRoomMatchResult;
})();

$root.H2RSendGm = (function() {

    /**
     * Properties of a H2RSendGm.
     * @exports IH2RSendGm
     * @interface IH2RSendGm
     * @property {string} script H2RSendGm script
     */

    /**
     * Constructs a new H2RSendGm.
     * @exports H2RSendGm
     * @classdesc Represents a H2RSendGm.
     * @implements IH2RSendGm
     * @constructor
     * @param {IH2RSendGm=} [p] Properties to set
     */
    function H2RSendGm(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * H2RSendGm script.
     * @member {string} script
     * @memberof H2RSendGm
     * @instance
     */
    H2RSendGm.prototype.script = "";

    /**
     * Creates a new H2RSendGm instance using the specified properties.
     * @function create
     * @memberof H2RSendGm
     * @static
     * @param {IH2RSendGm=} [properties] Properties to set
     * @returns {H2RSendGm} H2RSendGm instance
     */
    H2RSendGm.create = function create(properties) {
        return new H2RSendGm(properties);
    };

    /**
     * Encodes the specified H2RSendGm message. Does not implicitly {@link H2RSendGm.verify|verify} messages.
     * @function encode
     * @memberof H2RSendGm
     * @static
     * @param {IH2RSendGm} m H2RSendGm message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    H2RSendGm.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.script);
        return w;
    };

    /**
     * Decodes a H2RSendGm message from the specified reader or buffer.
     * @function decode
     * @memberof H2RSendGm
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {H2RSendGm} H2RSendGm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    H2RSendGm.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.H2RSendGm();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.script = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("script"))
            throw $util.ProtocolError("missing required 'script'", { instance: m });
        return m;
    };

    return H2RSendGm;
})();

module.exports = $root;

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Slot || ($protobuf.roots.Slot = {});

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {string} playerId PlayerInfo playerId
     * @property {string|null} [gold] PlayerInfo gold
     * @property {string|null} [head] PlayerInfo head
     * @property {string|null} [headbox] PlayerInfo headbox
     * @property {number|null} [vipLv] PlayerInfo vipLv
     */

    /**
     * Constructs a new PlayerInfo.
     * @exports PlayerInfo
     * @classdesc Represents a PlayerInfo.
     * @implements IPlayerInfo
     * @constructor
     * @param {IPlayerInfo=} [p] Properties to set
     */
    function PlayerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerInfo playerId.
     * @member {string} playerId
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.playerId = "";

    /**
     * PlayerInfo gold.
     * @member {string} gold
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.gold = "";

    /**
     * PlayerInfo head.
     * @member {string} head
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.head = "";

    /**
     * PlayerInfo headbox.
     * @member {string} headbox
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.headbox = "";

    /**
     * PlayerInfo vipLv.
     * @member {number} vipLv
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.vipLv = 0;

    /**
     * Creates a new PlayerInfo instance using the specified properties.
     * @function create
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo=} [properties] Properties to set
     * @returns {PlayerInfo} PlayerInfo instance
     */
    PlayerInfo.create = function create(properties) {
        return new PlayerInfo(properties);
    };

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo} m PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.gold != null && m.hasOwnProperty("gold"))
            w.uint32(18).string(m.gold);
        if (m.head != null && m.hasOwnProperty("head"))
            w.uint32(26).string(m.head);
        if (m.headbox != null && m.hasOwnProperty("headbox"))
            w.uint32(34).string(m.headbox);
        if (m.vipLv != null && m.hasOwnProperty("vipLv"))
            w.uint32(40).int32(m.vipLv);
        return w;
    };

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerInfo} PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.gold = r.string();
                break;
            case 3:
                m.head = r.string();
                break;
            case 4:
                m.headbox = r.string();
                break;
            case 5:
                m.vipLv = r.int32();
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

    return PlayerInfo;
})();

/**
 * GameStatus enum.
 * @exports GameStatus
 * @enum {string}
 * @property {number} NORMAL=1 NORMAL value
 * @property {number} FREE=2 FREE value
 */
$root.GameStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "NORMAL"] = 1;
    values[valuesById[2] = "FREE"] = 2;
    return values;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {number} playId RoomInfo playId
     * @property {GameStatus} status RoomInfo status
     * @property {number|null} [freeTimes] RoomInfo freeTimes
     * @property {number} baseScore RoomInfo baseScore
     * @property {number} baseScoreTimes RoomInfo baseScoreTimes
     * @property {number} baseScoreMaxTimes RoomInfo baseScoreMaxTimes
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
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomInfo playId.
     * @member {number} playId
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.playId = 0;

    /**
     * RoomInfo status.
     * @member {GameStatus} status
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.status = 1;

    /**
     * RoomInfo freeTimes.
     * @member {number} freeTimes
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.freeTimes = 0;

    /**
     * RoomInfo baseScore.
     * @member {number} baseScore
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.baseScore = 0;

    /**
     * RoomInfo baseScoreTimes.
     * @member {number} baseScoreTimes
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.baseScoreTimes = 0;

    /**
     * RoomInfo baseScoreMaxTimes.
     * @member {number} baseScoreMaxTimes
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.baseScoreMaxTimes = 0;

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
        w.uint32(8).int32(m.playId);
        w.uint32(16).int32(m.status);
        if (m.freeTimes != null && m.hasOwnProperty("freeTimes"))
            w.uint32(24).int32(m.freeTimes);
        w.uint32(32).int32(m.baseScore);
        w.uint32(40).int32(m.baseScoreTimes);
        w.uint32(48).int32(m.baseScoreMaxTimes);
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
                m.playId = r.int32();
                break;
            case 2:
                m.status = r.int32();
                break;
            case 3:
                m.freeTimes = r.int32();
                break;
            case 4:
                m.baseScore = r.int32();
                break;
            case 5:
                m.baseScoreTimes = r.int32();
                break;
            case 6:
                m.baseScoreMaxTimes = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
        if (!m.hasOwnProperty("baseScoreTimes"))
            throw $util.ProtocolError("missing required 'baseScoreTimes'", { instance: m });
        if (!m.hasOwnProperty("baseScoreMaxTimes"))
            throw $util.ProtocolError("missing required 'baseScoreMaxTimes'", { instance: m });
        return m;
    };

    return RoomInfo;
})();

$root.PositionArr = (function() {

    /**
     * Properties of a PositionArr.
     * @exports IPositionArr
     * @interface IPositionArr
     * @property {Array.<number>|null} [symbolId] PositionArr symbolId
     */

    /**
     * Constructs a new PositionArr.
     * @exports PositionArr
     * @classdesc Represents a PositionArr.
     * @implements IPositionArr
     * @constructor
     * @param {IPositionArr=} [p] Properties to set
     */
    function PositionArr(p) {
        this.symbolId = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PositionArr symbolId.
     * @member {Array.<number>} symbolId
     * @memberof PositionArr
     * @instance
     */
    PositionArr.prototype.symbolId = $util.emptyArray;

    /**
     * Creates a new PositionArr instance using the specified properties.
     * @function create
     * @memberof PositionArr
     * @static
     * @param {IPositionArr=} [properties] Properties to set
     * @returns {PositionArr} PositionArr instance
     */
    PositionArr.create = function create(properties) {
        return new PositionArr(properties);
    };

    /**
     * Encodes the specified PositionArr message. Does not implicitly {@link PositionArr.verify|verify} messages.
     * @function encode
     * @memberof PositionArr
     * @static
     * @param {IPositionArr} m PositionArr message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PositionArr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.symbolId != null && m.symbolId.length) {
            for (var i = 0; i < m.symbolId.length; ++i)
                w.uint32(8).int32(m.symbolId[i]);
        }
        return w;
    };

    /**
     * Decodes a PositionArr message from the specified reader or buffer.
     * @function decode
     * @memberof PositionArr
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PositionArr} PositionArr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PositionArr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PositionArr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.symbolId && m.symbolId.length))
                    m.symbolId = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.symbolId.push(r.int32());
                } else
                    m.symbolId.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PositionArr;
})();

$root.PositionInfo = (function() {

    /**
     * Properties of a PositionInfo.
     * @exports IPositionInfo
     * @interface IPositionInfo
     * @property {Array.<IPositionArr>|null} [arrInfo] PositionInfo arrInfo
     */

    /**
     * Constructs a new PositionInfo.
     * @exports PositionInfo
     * @classdesc Represents a PositionInfo.
     * @implements IPositionInfo
     * @constructor
     * @param {IPositionInfo=} [p] Properties to set
     */
    function PositionInfo(p) {
        this.arrInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PositionInfo arrInfo.
     * @member {Array.<IPositionArr>} arrInfo
     * @memberof PositionInfo
     * @instance
     */
    PositionInfo.prototype.arrInfo = $util.emptyArray;

    /**
     * Creates a new PositionInfo instance using the specified properties.
     * @function create
     * @memberof PositionInfo
     * @static
     * @param {IPositionInfo=} [properties] Properties to set
     * @returns {PositionInfo} PositionInfo instance
     */
    PositionInfo.create = function create(properties) {
        return new PositionInfo(properties);
    };

    /**
     * Encodes the specified PositionInfo message. Does not implicitly {@link PositionInfo.verify|verify} messages.
     * @function encode
     * @memberof PositionInfo
     * @static
     * @param {IPositionInfo} m PositionInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PositionInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.arrInfo != null && m.arrInfo.length) {
            for (var i = 0; i < m.arrInfo.length; ++i)
                $root.PositionArr.encode(m.arrInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PositionInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PositionInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PositionInfo} PositionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PositionInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PositionInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.arrInfo && m.arrInfo.length))
                    m.arrInfo = [];
                m.arrInfo.push($root.PositionArr.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PositionInfo;
})();

$root.LineInfo = (function() {

    /**
     * Properties of a LineInfo.
     * @exports ILineInfo
     * @interface ILineInfo
     * @property {number} lineId LineInfo lineId
     * @property {number} count LineInfo count
     * @property {number} gold LineInfo gold
     */

    /**
     * Constructs a new LineInfo.
     * @exports LineInfo
     * @classdesc Represents a LineInfo.
     * @implements ILineInfo
     * @constructor
     * @param {ILineInfo=} [p] Properties to set
     */
    function LineInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LineInfo lineId.
     * @member {number} lineId
     * @memberof LineInfo
     * @instance
     */
    LineInfo.prototype.lineId = 0;

    /**
     * LineInfo count.
     * @member {number} count
     * @memberof LineInfo
     * @instance
     */
    LineInfo.prototype.count = 0;

    /**
     * LineInfo gold.
     * @member {number} gold
     * @memberof LineInfo
     * @instance
     */
    LineInfo.prototype.gold = 0;

    /**
     * Creates a new LineInfo instance using the specified properties.
     * @function create
     * @memberof LineInfo
     * @static
     * @param {ILineInfo=} [properties] Properties to set
     * @returns {LineInfo} LineInfo instance
     */
    LineInfo.create = function create(properties) {
        return new LineInfo(properties);
    };

    /**
     * Encodes the specified LineInfo message. Does not implicitly {@link LineInfo.verify|verify} messages.
     * @function encode
     * @memberof LineInfo
     * @static
     * @param {ILineInfo} m LineInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LineInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.lineId);
        w.uint32(16).int32(m.count);
        w.uint32(24).int32(m.gold);
        return w;
    };

    /**
     * Decodes a LineInfo message from the specified reader or buffer.
     * @function decode
     * @memberof LineInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LineInfo} LineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LineInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LineInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.lineId = r.int32();
                break;
            case 2:
                m.count = r.int32();
                break;
            case 3:
                m.gold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("lineId"))
            throw $util.ProtocolError("missing required 'lineId'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return LineInfo;
})();

/**
 * SettlementType enum.
 * @exports SettlementType
 * @enum {string}
 * @property {number} SLOT_MAIN=1 SLOT_MAIN value
 * @property {number} SLOT_BONUS=2 SLOT_BONUS value
 * @property {number} SLOT_FREE=3 SLOT_FREE value
 */
$root.SettlementType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "SLOT_MAIN"] = 1;
    values[valuesById[2] = "SLOT_BONUS"] = 2;
    values[valuesById[3] = "SLOT_FREE"] = 3;
    return values;
})();

$root.SettlementFreeData = (function() {

    /**
     * Properties of a SettlementFreeData.
     * @exports ISettlementFreeData
     * @interface ISettlementFreeData
     * @property {number} freeTimes SettlementFreeData freeTimes
     */

    /**
     * Constructs a new SettlementFreeData.
     * @exports SettlementFreeData
     * @classdesc Represents a SettlementFreeData.
     * @implements ISettlementFreeData
     * @constructor
     * @param {ISettlementFreeData=} [p] Properties to set
     */
    function SettlementFreeData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SettlementFreeData freeTimes.
     * @member {number} freeTimes
     * @memberof SettlementFreeData
     * @instance
     */
    SettlementFreeData.prototype.freeTimes = 0;

    /**
     * Creates a new SettlementFreeData instance using the specified properties.
     * @function create
     * @memberof SettlementFreeData
     * @static
     * @param {ISettlementFreeData=} [properties] Properties to set
     * @returns {SettlementFreeData} SettlementFreeData instance
     */
    SettlementFreeData.create = function create(properties) {
        return new SettlementFreeData(properties);
    };

    /**
     * Encodes the specified SettlementFreeData message. Does not implicitly {@link SettlementFreeData.verify|verify} messages.
     * @function encode
     * @memberof SettlementFreeData
     * @static
     * @param {ISettlementFreeData} m SettlementFreeData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettlementFreeData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.freeTimes);
        return w;
    };

    /**
     * Decodes a SettlementFreeData message from the specified reader or buffer.
     * @function decode
     * @memberof SettlementFreeData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SettlementFreeData} SettlementFreeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettlementFreeData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SettlementFreeData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.freeTimes = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("freeTimes"))
            throw $util.ProtocolError("missing required 'freeTimes'", { instance: m });
        return m;
    };

    return SettlementFreeData;
})();

$root.SettlementInfo = (function() {

    /**
     * Properties of a SettlementInfo.
     * @exports ISettlementInfo
     * @interface ISettlementInfo
     * @property {SettlementType} type SettlementInfo type
     * @property {number|null} [rewardGold] SettlementInfo rewardGold
     * @property {Array.<ILineInfo>|null} [lineList] SettlementInfo lineList
     * @property {number|null} [bonusDataId] SettlementInfo bonusDataId
     * @property {ISettlementFreeData|null} [freeData] SettlementInfo freeData
     * @property {boolean} isFreeSpinsEnd SettlementInfo isFreeSpinsEnd
     * @property {number} freeRewardGoldAll SettlementInfo freeRewardGoldAll
     */

    /**
     * Constructs a new SettlementInfo.
     * @exports SettlementInfo
     * @classdesc Represents a SettlementInfo.
     * @implements ISettlementInfo
     * @constructor
     * @param {ISettlementInfo=} [p] Properties to set
     */
    function SettlementInfo(p) {
        this.lineList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SettlementInfo type.
     * @member {SettlementType} type
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.type = 1;

    /**
     * SettlementInfo rewardGold.
     * @member {number} rewardGold
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.rewardGold = 0;

    /**
     * SettlementInfo lineList.
     * @member {Array.<ILineInfo>} lineList
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.lineList = $util.emptyArray;

    /**
     * SettlementInfo bonusDataId.
     * @member {number} bonusDataId
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.bonusDataId = 0;

    /**
     * SettlementInfo freeData.
     * @member {ISettlementFreeData|null|undefined} freeData
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.freeData = null;

    /**
     * SettlementInfo isFreeSpinsEnd.
     * @member {boolean} isFreeSpinsEnd
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.isFreeSpinsEnd = false;

    /**
     * SettlementInfo freeRewardGoldAll.
     * @member {number} freeRewardGoldAll
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.freeRewardGoldAll = 0;

    /**
     * Creates a new SettlementInfo instance using the specified properties.
     * @function create
     * @memberof SettlementInfo
     * @static
     * @param {ISettlementInfo=} [properties] Properties to set
     * @returns {SettlementInfo} SettlementInfo instance
     */
    SettlementInfo.create = function create(properties) {
        return new SettlementInfo(properties);
    };

    /**
     * Encodes the specified SettlementInfo message. Does not implicitly {@link SettlementInfo.verify|verify} messages.
     * @function encode
     * @memberof SettlementInfo
     * @static
     * @param {ISettlementInfo} m SettlementInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettlementInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.rewardGold != null && m.hasOwnProperty("rewardGold"))
            w.uint32(16).int32(m.rewardGold);
        if (m.lineList != null && m.lineList.length) {
            for (var i = 0; i < m.lineList.length; ++i)
                $root.LineInfo.encode(m.lineList[i], w.uint32(26).fork()).ldelim();
        }
        if (m.bonusDataId != null && m.hasOwnProperty("bonusDataId"))
            w.uint32(32).int32(m.bonusDataId);
        if (m.freeData != null && m.hasOwnProperty("freeData"))
            $root.SettlementFreeData.encode(m.freeData, w.uint32(42).fork()).ldelim();
        w.uint32(48).bool(m.isFreeSpinsEnd);
        w.uint32(56).int32(m.freeRewardGoldAll);
        return w;
    };

    /**
     * Decodes a SettlementInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SettlementInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SettlementInfo} SettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettlementInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SettlementInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.rewardGold = r.int32();
                break;
            case 3:
                if (!(m.lineList && m.lineList.length))
                    m.lineList = [];
                m.lineList.push($root.LineInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.bonusDataId = r.int32();
                break;
            case 5:
                m.freeData = $root.SettlementFreeData.decode(r, r.uint32());
                break;
            case 6:
                m.isFreeSpinsEnd = r.bool();
                break;
            case 7:
                m.freeRewardGoldAll = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("isFreeSpinsEnd"))
            throw $util.ProtocolError("missing required 'isFreeSpinsEnd'", { instance: m });
        if (!m.hasOwnProperty("freeRewardGoldAll"))
            throw $util.ProtocolError("missing required 'freeRewardGoldAll'", { instance: m });
        return m;
    };

    return SettlementInfo;
})();

/**
 * SlotRoundStep enum.
 * @exports SlotRoundStep
 * @enum {string}
 * @property {number} SLOT_INIT=1 SLOT_INIT value
 * @property {number} SLOT_SETTLEMENT=2 SLOT_SETTLEMENT value
 */
$root.SlotRoundStep = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "SLOT_INIT"] = 1;
    values[valuesById[2] = "SLOT_SETTLEMENT"] = 2;
    return values;
})();

$root.PushRoundResult = (function() {

    /**
     * Properties of a PushRoundResult.
     * @exports IPushRoundResult
     * @interface IPushRoundResult
     * @property {boolean} isSuccess PushRoundResult isSuccess
     * @property {string|null} [tips] PushRoundResult tips
     * @property {SlotRoundStep|null} [roundStep] PushRoundResult roundStep
     * @property {IPositionInfo|null} [symbolList] PushRoundResult symbolList
     * @property {ISettlementInfo|null} [settlementInfo] PushRoundResult settlementInfo
     */

    /**
     * Constructs a new PushRoundResult.
     * @exports PushRoundResult
     * @classdesc Represents a PushRoundResult.
     * @implements IPushRoundResult
     * @constructor
     * @param {IPushRoundResult=} [p] Properties to set
     */
    function PushRoundResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushRoundResult isSuccess.
     * @member {boolean} isSuccess
     * @memberof PushRoundResult
     * @instance
     */
    PushRoundResult.prototype.isSuccess = false;

    /**
     * PushRoundResult tips.
     * @member {string} tips
     * @memberof PushRoundResult
     * @instance
     */
    PushRoundResult.prototype.tips = "";

    /**
     * PushRoundResult roundStep.
     * @member {SlotRoundStep} roundStep
     * @memberof PushRoundResult
     * @instance
     */
    PushRoundResult.prototype.roundStep = 1;

    /**
     * PushRoundResult symbolList.
     * @member {IPositionInfo|null|undefined} symbolList
     * @memberof PushRoundResult
     * @instance
     */
    PushRoundResult.prototype.symbolList = null;

    /**
     * PushRoundResult settlementInfo.
     * @member {ISettlementInfo|null|undefined} settlementInfo
     * @memberof PushRoundResult
     * @instance
     */
    PushRoundResult.prototype.settlementInfo = null;

    /**
     * Creates a new PushRoundResult instance using the specified properties.
     * @function create
     * @memberof PushRoundResult
     * @static
     * @param {IPushRoundResult=} [properties] Properties to set
     * @returns {PushRoundResult} PushRoundResult instance
     */
    PushRoundResult.create = function create(properties) {
        return new PushRoundResult(properties);
    };

    /**
     * Encodes the specified PushRoundResult message. Does not implicitly {@link PushRoundResult.verify|verify} messages.
     * @function encode
     * @memberof PushRoundResult
     * @static
     * @param {IPushRoundResult} m PushRoundResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRoundResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.roundStep != null && m.hasOwnProperty("roundStep"))
            w.uint32(24).int32(m.roundStep);
        if (m.symbolList != null && m.hasOwnProperty("symbolList"))
            $root.PositionInfo.encode(m.symbolList, w.uint32(34).fork()).ldelim();
        if (m.settlementInfo != null && m.hasOwnProperty("settlementInfo"))
            $root.SettlementInfo.encode(m.settlementInfo, w.uint32(42).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a PushRoundResult message from the specified reader or buffer.
     * @function decode
     * @memberof PushRoundResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRoundResult} PushRoundResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRoundResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRoundResult();
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
                m.roundStep = r.int32();
                break;
            case 4:
                m.symbolList = $root.PositionInfo.decode(r, r.uint32());
                break;
            case 5:
                m.settlementInfo = $root.SettlementInfo.decode(r, r.uint32());
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

    return PushRoundResult;
})();

$root.SymbolTimes = (function() {

    /**
     * Properties of a SymbolTimes.
     * @exports ISymbolTimes
     * @interface ISymbolTimes
     * @property {number} symbolId SymbolTimes symbolId
     * @property {number} count3 SymbolTimes count3
     * @property {number} count4 SymbolTimes count4
     * @property {number} count5 SymbolTimes count5
     */

    /**
     * Constructs a new SymbolTimes.
     * @exports SymbolTimes
     * @classdesc Represents a SymbolTimes.
     * @implements ISymbolTimes
     * @constructor
     * @param {ISymbolTimes=} [p] Properties to set
     */
    function SymbolTimes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SymbolTimes symbolId.
     * @member {number} symbolId
     * @memberof SymbolTimes
     * @instance
     */
    SymbolTimes.prototype.symbolId = 0;

    /**
     * SymbolTimes count3.
     * @member {number} count3
     * @memberof SymbolTimes
     * @instance
     */
    SymbolTimes.prototype.count3 = 0;

    /**
     * SymbolTimes count4.
     * @member {number} count4
     * @memberof SymbolTimes
     * @instance
     */
    SymbolTimes.prototype.count4 = 0;

    /**
     * SymbolTimes count5.
     * @member {number} count5
     * @memberof SymbolTimes
     * @instance
     */
    SymbolTimes.prototype.count5 = 0;

    /**
     * Creates a new SymbolTimes instance using the specified properties.
     * @function create
     * @memberof SymbolTimes
     * @static
     * @param {ISymbolTimes=} [properties] Properties to set
     * @returns {SymbolTimes} SymbolTimes instance
     */
    SymbolTimes.create = function create(properties) {
        return new SymbolTimes(properties);
    };

    /**
     * Encodes the specified SymbolTimes message. Does not implicitly {@link SymbolTimes.verify|verify} messages.
     * @function encode
     * @memberof SymbolTimes
     * @static
     * @param {ISymbolTimes} m SymbolTimes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SymbolTimes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.symbolId);
        w.uint32(16).int32(m.count3);
        w.uint32(24).int32(m.count4);
        w.uint32(32).int32(m.count5);
        return w;
    };

    /**
     * Decodes a SymbolTimes message from the specified reader or buffer.
     * @function decode
     * @memberof SymbolTimes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SymbolTimes} SymbolTimes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SymbolTimes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SymbolTimes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.symbolId = r.int32();
                break;
            case 2:
                m.count3 = r.int32();
                break;
            case 3:
                m.count4 = r.int32();
                break;
            case 4:
                m.count5 = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("symbolId"))
            throw $util.ProtocolError("missing required 'symbolId'", { instance: m });
        if (!m.hasOwnProperty("count3"))
            throw $util.ProtocolError("missing required 'count3'", { instance: m });
        if (!m.hasOwnProperty("count4"))
            throw $util.ProtocolError("missing required 'count4'", { instance: m });
        if (!m.hasOwnProperty("count5"))
            throw $util.ProtocolError("missing required 'count5'", { instance: m });
        return m;
    };

    return SymbolTimes;
})();

$root.PushRoomInfo = (function() {

    /**
     * Properties of a PushRoomInfo.
     * @exports IPushRoomInfo
     * @interface IPushRoomInfo
     * @property {IPlayerInfo} playerInfo PushRoomInfo playerInfo
     * @property {IRoomInfo} roomInfo PushRoomInfo roomInfo
     * @property {IPushRoundResult|null} [roundResult] PushRoomInfo roundResult
     * @property {Array.<ISymbolTimes>|null} [symbolTimes] PushRoomInfo symbolTimes
     */

    /**
     * Constructs a new PushRoomInfo.
     * @exports PushRoomInfo
     * @classdesc Represents a PushRoomInfo.
     * @implements IPushRoomInfo
     * @constructor
     * @param {IPushRoomInfo=} [p] Properties to set
     */
    function PushRoomInfo(p) {
        this.symbolTimes = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushRoomInfo playerInfo.
     * @member {IPlayerInfo} playerInfo
     * @memberof PushRoomInfo
     * @instance
     */
    PushRoomInfo.prototype.playerInfo = null;

    /**
     * PushRoomInfo roomInfo.
     * @member {IRoomInfo} roomInfo
     * @memberof PushRoomInfo
     * @instance
     */
    PushRoomInfo.prototype.roomInfo = null;

    /**
     * PushRoomInfo roundResult.
     * @member {IPushRoundResult|null|undefined} roundResult
     * @memberof PushRoomInfo
     * @instance
     */
    PushRoomInfo.prototype.roundResult = null;

    /**
     * PushRoomInfo symbolTimes.
     * @member {Array.<ISymbolTimes>} symbolTimes
     * @memberof PushRoomInfo
     * @instance
     */
    PushRoomInfo.prototype.symbolTimes = $util.emptyArray;

    /**
     * Creates a new PushRoomInfo instance using the specified properties.
     * @function create
     * @memberof PushRoomInfo
     * @static
     * @param {IPushRoomInfo=} [properties] Properties to set
     * @returns {PushRoomInfo} PushRoomInfo instance
     */
    PushRoomInfo.create = function create(properties) {
        return new PushRoomInfo(properties);
    };

    /**
     * Encodes the specified PushRoomInfo message. Does not implicitly {@link PushRoomInfo.verify|verify} messages.
     * @function encode
     * @memberof PushRoomInfo
     * @static
     * @param {IPushRoomInfo} m PushRoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRoomInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.PlayerInfo.encode(m.playerInfo, w.uint32(10).fork()).ldelim();
        $root.RoomInfo.encode(m.roomInfo, w.uint32(18).fork()).ldelim();
        if (m.roundResult != null && m.hasOwnProperty("roundResult"))
            $root.PushRoundResult.encode(m.roundResult, w.uint32(26).fork()).ldelim();
        if (m.symbolTimes != null && m.symbolTimes.length) {
            for (var i = 0; i < m.symbolTimes.length; ++i)
                $root.SymbolTimes.encode(m.symbolTimes[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushRoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushRoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRoomInfo} PushRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRoomInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRoomInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerInfo = $root.PlayerInfo.decode(r, r.uint32());
                break;
            case 2:
                m.roomInfo = $root.RoomInfo.decode(r, r.uint32());
                break;
            case 3:
                m.roundResult = $root.PushRoundResult.decode(r, r.uint32());
                break;
            case 4:
                if (!(m.symbolTimes && m.symbolTimes.length))
                    m.symbolTimes = [];
                m.symbolTimes.push($root.SymbolTimes.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerInfo"))
            throw $util.ProtocolError("missing required 'playerInfo'", { instance: m });
        if (!m.hasOwnProperty("roomInfo"))
            throw $util.ProtocolError("missing required 'roomInfo'", { instance: m });
        return m;
    };

    return PushRoomInfo;
})();

$root.PushRoundEnd = (function() {

    /**
     * Properties of a PushRoundEnd.
     * @exports IPushRoundEnd
     * @interface IPushRoundEnd
     * @property {IRoomInfo} roomInfo PushRoundEnd roomInfo
     * @property {SlotRoundStep} roundStep PushRoundEnd roundStep
     */

    /**
     * Constructs a new PushRoundEnd.
     * @exports PushRoundEnd
     * @classdesc Represents a PushRoundEnd.
     * @implements IPushRoundEnd
     * @constructor
     * @param {IPushRoundEnd=} [p] Properties to set
     */
    function PushRoundEnd(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushRoundEnd roomInfo.
     * @member {IRoomInfo} roomInfo
     * @memberof PushRoundEnd
     * @instance
     */
    PushRoundEnd.prototype.roomInfo = null;

    /**
     * PushRoundEnd roundStep.
     * @member {SlotRoundStep} roundStep
     * @memberof PushRoundEnd
     * @instance
     */
    PushRoundEnd.prototype.roundStep = 1;

    /**
     * Creates a new PushRoundEnd instance using the specified properties.
     * @function create
     * @memberof PushRoundEnd
     * @static
     * @param {IPushRoundEnd=} [properties] Properties to set
     * @returns {PushRoundEnd} PushRoundEnd instance
     */
    PushRoundEnd.create = function create(properties) {
        return new PushRoundEnd(properties);
    };

    /**
     * Encodes the specified PushRoundEnd message. Does not implicitly {@link PushRoundEnd.verify|verify} messages.
     * @function encode
     * @memberof PushRoundEnd
     * @static
     * @param {IPushRoundEnd} m PushRoundEnd message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRoundEnd.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.RoomInfo.encode(m.roomInfo, w.uint32(10).fork()).ldelim();
        w.uint32(16).int32(m.roundStep);
        return w;
    };

    /**
     * Decodes a PushRoundEnd message from the specified reader or buffer.
     * @function decode
     * @memberof PushRoundEnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRoundEnd} PushRoundEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRoundEnd.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRoundEnd();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomInfo = $root.RoomInfo.decode(r, r.uint32());
                break;
            case 2:
                m.roundStep = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomInfo"))
            throw $util.ProtocolError("missing required 'roomInfo'", { instance: m });
        if (!m.hasOwnProperty("roundStep"))
            throw $util.ProtocolError("missing required 'roundStep'", { instance: m });
        return m;
    };

    return PushRoundEnd;
})();

$root.BonusPickRewardRequest = (function() {

    /**
     * Properties of a BonusPickRewardRequest.
     * @exports IBonusPickRewardRequest
     * @interface IBonusPickRewardRequest
     * @property {number} index BonusPickRewardRequest index
     */

    /**
     * Constructs a new BonusPickRewardRequest.
     * @exports BonusPickRewardRequest
     * @classdesc Represents a BonusPickRewardRequest.
     * @implements IBonusPickRewardRequest
     * @constructor
     * @param {IBonusPickRewardRequest=} [p] Properties to set
     */
    function BonusPickRewardRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BonusPickRewardRequest index.
     * @member {number} index
     * @memberof BonusPickRewardRequest
     * @instance
     */
    BonusPickRewardRequest.prototype.index = 0;

    /**
     * Creates a new BonusPickRewardRequest instance using the specified properties.
     * @function create
     * @memberof BonusPickRewardRequest
     * @static
     * @param {IBonusPickRewardRequest=} [properties] Properties to set
     * @returns {BonusPickRewardRequest} BonusPickRewardRequest instance
     */
    BonusPickRewardRequest.create = function create(properties) {
        return new BonusPickRewardRequest(properties);
    };

    /**
     * Encodes the specified BonusPickRewardRequest message. Does not implicitly {@link BonusPickRewardRequest.verify|verify} messages.
     * @function encode
     * @memberof BonusPickRewardRequest
     * @static
     * @param {IBonusPickRewardRequest} m BonusPickRewardRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BonusPickRewardRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        return w;
    };

    /**
     * Decodes a BonusPickRewardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BonusPickRewardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BonusPickRewardRequest} BonusPickRewardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BonusPickRewardRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BonusPickRewardRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
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

    return BonusPickRewardRequest;
})();

/**
 * BonusRewardType enum.
 * @exports BonusRewardType
 * @enum {string}
 * @property {number} BONUS_GLOD=1 BONUS_GLOD value
 * @property {number} BONUS_COUNT=2 BONUS_COUNT value
 */
$root.BonusRewardType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "BONUS_GLOD"] = 1;
    values[valuesById[2] = "BONUS_COUNT"] = 2;
    return values;
})();

$root.BonusReward = (function() {

    /**
     * Properties of a BonusReward.
     * @exports IBonusReward
     * @interface IBonusReward
     * @property {BonusRewardType} rewardType BonusReward rewardType
     * @property {number} result BonusReward result
     */

    /**
     * Constructs a new BonusReward.
     * @exports BonusReward
     * @classdesc Represents a BonusReward.
     * @implements IBonusReward
     * @constructor
     * @param {IBonusReward=} [p] Properties to set
     */
    function BonusReward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BonusReward rewardType.
     * @member {BonusRewardType} rewardType
     * @memberof BonusReward
     * @instance
     */
    BonusReward.prototype.rewardType = 1;

    /**
     * BonusReward result.
     * @member {number} result
     * @memberof BonusReward
     * @instance
     */
    BonusReward.prototype.result = 0;

    /**
     * Creates a new BonusReward instance using the specified properties.
     * @function create
     * @memberof BonusReward
     * @static
     * @param {IBonusReward=} [properties] Properties to set
     * @returns {BonusReward} BonusReward instance
     */
    BonusReward.create = function create(properties) {
        return new BonusReward(properties);
    };

    /**
     * Encodes the specified BonusReward message. Does not implicitly {@link BonusReward.verify|verify} messages.
     * @function encode
     * @memberof BonusReward
     * @static
     * @param {IBonusReward} m BonusReward message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BonusReward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.rewardType);
        w.uint32(16).int32(m.result);
        return w;
    };

    /**
     * Decodes a BonusReward message from the specified reader or buffer.
     * @function decode
     * @memberof BonusReward
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BonusReward} BonusReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BonusReward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BonusReward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rewardType = r.int32();
                break;
            case 2:
                m.result = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rewardType"))
            throw $util.ProtocolError("missing required 'rewardType'", { instance: m });
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return BonusReward;
})();

$root.BonusPickRewardPush = (function() {

    /**
     * Properties of a BonusPickRewardPush.
     * @exports IBonusPickRewardPush
     * @interface IBonusPickRewardPush
     * @property {boolean} optionResult BonusPickRewardPush optionResult
     * @property {IBonusReward} reward BonusPickRewardPush reward
     * @property {number} curPickTimes BonusPickRewardPush curPickTimes
     * @property {number|null} [curerrorTimes] BonusPickRewardPush curerrorTimes
     * @property {boolean} isEnd BonusPickRewardPush isEnd
     * @property {number} goldAll BonusPickRewardPush goldAll
     * @property {number} index BonusPickRewardPush index
     * @property {Array.<IBonusReward>|null} [leftRewardList] BonusPickRewardPush leftRewardList
     */

    /**
     * Constructs a new BonusPickRewardPush.
     * @exports BonusPickRewardPush
     * @classdesc Represents a BonusPickRewardPush.
     * @implements IBonusPickRewardPush
     * @constructor
     * @param {IBonusPickRewardPush=} [p] Properties to set
     */
    function BonusPickRewardPush(p) {
        this.leftRewardList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BonusPickRewardPush optionResult.
     * @member {boolean} optionResult
     * @memberof BonusPickRewardPush
     * @instance
     */
    BonusPickRewardPush.prototype.optionResult = false;

    /**
     * BonusPickRewardPush reward.
     * @member {IBonusReward} reward
     * @memberof BonusPickRewardPush
     * @instance
     */
    BonusPickRewardPush.prototype.reward = null;

    /**
     * BonusPickRewardPush curPickTimes.
     * @member {number} curPickTimes
     * @memberof BonusPickRewardPush
     * @instance
     */
    BonusPickRewardPush.prototype.curPickTimes = 0;

    /**
     * BonusPickRewardPush curerrorTimes.
     * @member {number} curerrorTimes
     * @memberof BonusPickRewardPush
     * @instance
     */
    BonusPickRewardPush.prototype.curerrorTimes = 0;

    /**
     * BonusPickRewardPush isEnd.
     * @member {boolean} isEnd
     * @memberof BonusPickRewardPush
     * @instance
     */
    BonusPickRewardPush.prototype.isEnd = false;

    /**
     * BonusPickRewardPush goldAll.
     * @member {number} goldAll
     * @memberof BonusPickRewardPush
     * @instance
     */
    BonusPickRewardPush.prototype.goldAll = 0;

    /**
     * BonusPickRewardPush index.
     * @member {number} index
     * @memberof BonusPickRewardPush
     * @instance
     */
    BonusPickRewardPush.prototype.index = 0;

    /**
     * BonusPickRewardPush leftRewardList.
     * @member {Array.<IBonusReward>} leftRewardList
     * @memberof BonusPickRewardPush
     * @instance
     */
    BonusPickRewardPush.prototype.leftRewardList = $util.emptyArray;

    /**
     * Creates a new BonusPickRewardPush instance using the specified properties.
     * @function create
     * @memberof BonusPickRewardPush
     * @static
     * @param {IBonusPickRewardPush=} [properties] Properties to set
     * @returns {BonusPickRewardPush} BonusPickRewardPush instance
     */
    BonusPickRewardPush.create = function create(properties) {
        return new BonusPickRewardPush(properties);
    };

    /**
     * Encodes the specified BonusPickRewardPush message. Does not implicitly {@link BonusPickRewardPush.verify|verify} messages.
     * @function encode
     * @memberof BonusPickRewardPush
     * @static
     * @param {IBonusPickRewardPush} m BonusPickRewardPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BonusPickRewardPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.optionResult);
        $root.BonusReward.encode(m.reward, w.uint32(18).fork()).ldelim();
        w.uint32(24).int32(m.curPickTimes);
        if (m.curerrorTimes != null && m.hasOwnProperty("curerrorTimes"))
            w.uint32(32).int32(m.curerrorTimes);
        w.uint32(40).bool(m.isEnd);
        w.uint32(48).int32(m.goldAll);
        w.uint32(56).int32(m.index);
        if (m.leftRewardList != null && m.leftRewardList.length) {
            for (var i = 0; i < m.leftRewardList.length; ++i)
                $root.BonusReward.encode(m.leftRewardList[i], w.uint32(66).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BonusPickRewardPush message from the specified reader or buffer.
     * @function decode
     * @memberof BonusPickRewardPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BonusPickRewardPush} BonusPickRewardPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BonusPickRewardPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BonusPickRewardPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.optionResult = r.bool();
                break;
            case 2:
                m.reward = $root.BonusReward.decode(r, r.uint32());
                break;
            case 3:
                m.curPickTimes = r.int32();
                break;
            case 4:
                m.curerrorTimes = r.int32();
                break;
            case 5:
                m.isEnd = r.bool();
                break;
            case 6:
                m.goldAll = r.int32();
                break;
            case 7:
                m.index = r.int32();
                break;
            case 8:
                if (!(m.leftRewardList && m.leftRewardList.length))
                    m.leftRewardList = [];
                m.leftRewardList.push($root.BonusReward.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("optionResult"))
            throw $util.ProtocolError("missing required 'optionResult'", { instance: m });
        if (!m.hasOwnProperty("reward"))
            throw $util.ProtocolError("missing required 'reward'", { instance: m });
        if (!m.hasOwnProperty("curPickTimes"))
            throw $util.ProtocolError("missing required 'curPickTimes'", { instance: m });
        if (!m.hasOwnProperty("isEnd"))
            throw $util.ProtocolError("missing required 'isEnd'", { instance: m });
        if (!m.hasOwnProperty("goldAll"))
            throw $util.ProtocolError("missing required 'goldAll'", { instance: m });
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        return m;
    };

    return BonusPickRewardPush;
})();

$root.PushBonusNextStepData = (function() {

    /**
     * Properties of a PushBonusNextStepData.
     * @exports IPushBonusNextStepData
     * @interface IPushBonusNextStepData
     * @property {number} bonusId PushBonusNextStepData bonusId
     * @property {number} bonusMaxStep PushBonusNextStepData bonusMaxStep
     * @property {number} bonusStep PushBonusNextStepData bonusStep
     * @property {number} rewardOptionNum PushBonusNextStepData rewardOptionNum
     * @property {number} maxPickTimes PushBonusNextStepData maxPickTimes
     * @property {number|null} [maxErrorTimes] PushBonusNextStepData maxErrorTimes
     * @property {number} leftPickTimes PushBonusNextStepData leftPickTimes
     * @property {Array.<IBonusPickRewardPush>|null} [initData] PushBonusNextStepData initData
     */

    /**
     * Constructs a new PushBonusNextStepData.
     * @exports PushBonusNextStepData
     * @classdesc Represents a PushBonusNextStepData.
     * @implements IPushBonusNextStepData
     * @constructor
     * @param {IPushBonusNextStepData=} [p] Properties to set
     */
    function PushBonusNextStepData(p) {
        this.initData = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushBonusNextStepData bonusId.
     * @member {number} bonusId
     * @memberof PushBonusNextStepData
     * @instance
     */
    PushBonusNextStepData.prototype.bonusId = 0;

    /**
     * PushBonusNextStepData bonusMaxStep.
     * @member {number} bonusMaxStep
     * @memberof PushBonusNextStepData
     * @instance
     */
    PushBonusNextStepData.prototype.bonusMaxStep = 0;

    /**
     * PushBonusNextStepData bonusStep.
     * @member {number} bonusStep
     * @memberof PushBonusNextStepData
     * @instance
     */
    PushBonusNextStepData.prototype.bonusStep = 0;

    /**
     * PushBonusNextStepData rewardOptionNum.
     * @member {number} rewardOptionNum
     * @memberof PushBonusNextStepData
     * @instance
     */
    PushBonusNextStepData.prototype.rewardOptionNum = 0;

    /**
     * PushBonusNextStepData maxPickTimes.
     * @member {number} maxPickTimes
     * @memberof PushBonusNextStepData
     * @instance
     */
    PushBonusNextStepData.prototype.maxPickTimes = 0;

    /**
     * PushBonusNextStepData maxErrorTimes.
     * @member {number} maxErrorTimes
     * @memberof PushBonusNextStepData
     * @instance
     */
    PushBonusNextStepData.prototype.maxErrorTimes = 0;

    /**
     * PushBonusNextStepData leftPickTimes.
     * @member {number} leftPickTimes
     * @memberof PushBonusNextStepData
     * @instance
     */
    PushBonusNextStepData.prototype.leftPickTimes = 0;

    /**
     * PushBonusNextStepData initData.
     * @member {Array.<IBonusPickRewardPush>} initData
     * @memberof PushBonusNextStepData
     * @instance
     */
    PushBonusNextStepData.prototype.initData = $util.emptyArray;

    /**
     * Creates a new PushBonusNextStepData instance using the specified properties.
     * @function create
     * @memberof PushBonusNextStepData
     * @static
     * @param {IPushBonusNextStepData=} [properties] Properties to set
     * @returns {PushBonusNextStepData} PushBonusNextStepData instance
     */
    PushBonusNextStepData.create = function create(properties) {
        return new PushBonusNextStepData(properties);
    };

    /**
     * Encodes the specified PushBonusNextStepData message. Does not implicitly {@link PushBonusNextStepData.verify|verify} messages.
     * @function encode
     * @memberof PushBonusNextStepData
     * @static
     * @param {IPushBonusNextStepData} m PushBonusNextStepData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushBonusNextStepData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.bonusId);
        w.uint32(16).int32(m.bonusMaxStep);
        w.uint32(24).int32(m.bonusStep);
        w.uint32(32).int32(m.rewardOptionNum);
        w.uint32(40).int32(m.maxPickTimes);
        if (m.maxErrorTimes != null && m.hasOwnProperty("maxErrorTimes"))
            w.uint32(48).int32(m.maxErrorTimes);
        w.uint32(56).int32(m.leftPickTimes);
        if (m.initData != null && m.initData.length) {
            for (var i = 0; i < m.initData.length; ++i)
                $root.BonusPickRewardPush.encode(m.initData[i], w.uint32(66).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushBonusNextStepData message from the specified reader or buffer.
     * @function decode
     * @memberof PushBonusNextStepData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushBonusNextStepData} PushBonusNextStepData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushBonusNextStepData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushBonusNextStepData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bonusId = r.int32();
                break;
            case 2:
                m.bonusMaxStep = r.int32();
                break;
            case 3:
                m.bonusStep = r.int32();
                break;
            case 4:
                m.rewardOptionNum = r.int32();
                break;
            case 5:
                m.maxPickTimes = r.int32();
                break;
            case 6:
                m.maxErrorTimes = r.int32();
                break;
            case 7:
                m.leftPickTimes = r.int32();
                break;
            case 8:
                if (!(m.initData && m.initData.length))
                    m.initData = [];
                m.initData.push($root.BonusPickRewardPush.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bonusId"))
            throw $util.ProtocolError("missing required 'bonusId'", { instance: m });
        if (!m.hasOwnProperty("bonusMaxStep"))
            throw $util.ProtocolError("missing required 'bonusMaxStep'", { instance: m });
        if (!m.hasOwnProperty("bonusStep"))
            throw $util.ProtocolError("missing required 'bonusStep'", { instance: m });
        if (!m.hasOwnProperty("rewardOptionNum"))
            throw $util.ProtocolError("missing required 'rewardOptionNum'", { instance: m });
        if (!m.hasOwnProperty("maxPickTimes"))
            throw $util.ProtocolError("missing required 'maxPickTimes'", { instance: m });
        if (!m.hasOwnProperty("leftPickTimes"))
            throw $util.ProtocolError("missing required 'leftPickTimes'", { instance: m });
        return m;
    };

    return PushBonusNextStepData;
})();

$root.BaseScoreTimeReq = (function() {

    /**
     * Properties of a BaseScoreTimeReq.
     * @exports IBaseScoreTimeReq
     * @interface IBaseScoreTimeReq
     * @property {number} playId BaseScoreTimeReq playId
     * @property {number} baseScoreTimes BaseScoreTimeReq baseScoreTimes
     */

    /**
     * Constructs a new BaseScoreTimeReq.
     * @exports BaseScoreTimeReq
     * @classdesc Represents a BaseScoreTimeReq.
     * @implements IBaseScoreTimeReq
     * @constructor
     * @param {IBaseScoreTimeReq=} [p] Properties to set
     */
    function BaseScoreTimeReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BaseScoreTimeReq playId.
     * @member {number} playId
     * @memberof BaseScoreTimeReq
     * @instance
     */
    BaseScoreTimeReq.prototype.playId = 0;

    /**
     * BaseScoreTimeReq baseScoreTimes.
     * @member {number} baseScoreTimes
     * @memberof BaseScoreTimeReq
     * @instance
     */
    BaseScoreTimeReq.prototype.baseScoreTimes = 0;

    /**
     * Creates a new BaseScoreTimeReq instance using the specified properties.
     * @function create
     * @memberof BaseScoreTimeReq
     * @static
     * @param {IBaseScoreTimeReq=} [properties] Properties to set
     * @returns {BaseScoreTimeReq} BaseScoreTimeReq instance
     */
    BaseScoreTimeReq.create = function create(properties) {
        return new BaseScoreTimeReq(properties);
    };

    /**
     * Encodes the specified BaseScoreTimeReq message. Does not implicitly {@link BaseScoreTimeReq.verify|verify} messages.
     * @function encode
     * @memberof BaseScoreTimeReq
     * @static
     * @param {IBaseScoreTimeReq} m BaseScoreTimeReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BaseScoreTimeReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playId);
        w.uint32(16).int32(m.baseScoreTimes);
        return w;
    };

    /**
     * Decodes a BaseScoreTimeReq message from the specified reader or buffer.
     * @function decode
     * @memberof BaseScoreTimeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BaseScoreTimeReq} BaseScoreTimeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BaseScoreTimeReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BaseScoreTimeReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playId = r.int32();
                break;
            case 2:
                m.baseScoreTimes = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        if (!m.hasOwnProperty("baseScoreTimes"))
            throw $util.ProtocolError("missing required 'baseScoreTimes'", { instance: m });
        return m;
    };

    return BaseScoreTimeReq;
})();

$root.BaseScoreTimeResp = (function() {

    /**
     * Properties of a BaseScoreTimeResp.
     * @exports IBaseScoreTimeResp
     * @interface IBaseScoreTimeResp
     * @property {boolean} isSuccess BaseScoreTimeResp isSuccess
     */

    /**
     * Constructs a new BaseScoreTimeResp.
     * @exports BaseScoreTimeResp
     * @classdesc Represents a BaseScoreTimeResp.
     * @implements IBaseScoreTimeResp
     * @constructor
     * @param {IBaseScoreTimeResp=} [p] Properties to set
     */
    function BaseScoreTimeResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BaseScoreTimeResp isSuccess.
     * @member {boolean} isSuccess
     * @memberof BaseScoreTimeResp
     * @instance
     */
    BaseScoreTimeResp.prototype.isSuccess = false;

    /**
     * Creates a new BaseScoreTimeResp instance using the specified properties.
     * @function create
     * @memberof BaseScoreTimeResp
     * @static
     * @param {IBaseScoreTimeResp=} [properties] Properties to set
     * @returns {BaseScoreTimeResp} BaseScoreTimeResp instance
     */
    BaseScoreTimeResp.create = function create(properties) {
        return new BaseScoreTimeResp(properties);
    };

    /**
     * Encodes the specified BaseScoreTimeResp message. Does not implicitly {@link BaseScoreTimeResp.verify|verify} messages.
     * @function encode
     * @memberof BaseScoreTimeResp
     * @static
     * @param {IBaseScoreTimeResp} m BaseScoreTimeResp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BaseScoreTimeResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        return w;
    };

    /**
     * Decodes a BaseScoreTimeResp message from the specified reader or buffer.
     * @function decode
     * @memberof BaseScoreTimeResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BaseScoreTimeResp} BaseScoreTimeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BaseScoreTimeResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BaseScoreTimeResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
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

    return BaseScoreTimeResp;
})();

module.exports = $root;

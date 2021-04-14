/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.HallBattle || ($protobuf.roots.HallBattle = {});

$root.ChessRoleData = (function() {

    /**
     * Properties of a ChessRoleData.
     * @exports IChessRoleData
     * @interface IChessRoleData
     * @property {string} playerId ChessRoleData playerId
     * @property {number} sex ChessRoleData sex
     * @property {string} nickName ChessRoleData nickName
     * @property {string} roleIcon ChessRoleData roleIcon
     * @property {string} ip ChessRoleData ip
     */

    /**
     * Constructs a new ChessRoleData.
     * @exports ChessRoleData
     * @classdesc Represents a ChessRoleData.
     * @implements IChessRoleData
     * @constructor
     * @param {IChessRoleData=} [p] Properties to set
     */
    function ChessRoleData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChessRoleData playerId.
     * @member {string} playerId
     * @memberof ChessRoleData
     * @instance
     */
    ChessRoleData.prototype.playerId = "";

    /**
     * ChessRoleData sex.
     * @member {number} sex
     * @memberof ChessRoleData
     * @instance
     */
    ChessRoleData.prototype.sex = 0;

    /**
     * ChessRoleData nickName.
     * @member {string} nickName
     * @memberof ChessRoleData
     * @instance
     */
    ChessRoleData.prototype.nickName = "";

    /**
     * ChessRoleData roleIcon.
     * @member {string} roleIcon
     * @memberof ChessRoleData
     * @instance
     */
    ChessRoleData.prototype.roleIcon = "";

    /**
     * ChessRoleData ip.
     * @member {string} ip
     * @memberof ChessRoleData
     * @instance
     */
    ChessRoleData.prototype.ip = "";

    /**
     * Creates a new ChessRoleData instance using the specified properties.
     * @function create
     * @memberof ChessRoleData
     * @static
     * @param {IChessRoleData=} [properties] Properties to set
     * @returns {ChessRoleData} ChessRoleData instance
     */
    ChessRoleData.create = function create(properties) {
        return new ChessRoleData(properties);
    };

    /**
     * Encodes the specified ChessRoleData message. Does not implicitly {@link ChessRoleData.verify|verify} messages.
     * @function encode
     * @memberof ChessRoleData
     * @static
     * @param {IChessRoleData} m ChessRoleData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChessRoleData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.sex);
        w.uint32(26).string(m.nickName);
        w.uint32(34).string(m.roleIcon);
        w.uint32(42).string(m.ip);
        return w;
    };

    /**
     * Decodes a ChessRoleData message from the specified reader or buffer.
     * @function decode
     * @memberof ChessRoleData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChessRoleData} ChessRoleData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChessRoleData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChessRoleData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.sex = r.int32();
                break;
            case 3:
                m.nickName = r.string();
                break;
            case 4:
                m.roleIcon = r.string();
                break;
            case 5:
                m.ip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("sex"))
            throw $util.ProtocolError("missing required 'sex'", { instance: m });
        if (!m.hasOwnProperty("nickName"))
            throw $util.ProtocolError("missing required 'nickName'", { instance: m });
        if (!m.hasOwnProperty("roleIcon"))
            throw $util.ProtocolError("missing required 'roleIcon'", { instance: m });
        if (!m.hasOwnProperty("ip"))
            throw $util.ProtocolError("missing required 'ip'", { instance: m });
        return m;
    };

    return ChessRoleData;
})();

$root.CoinBaseRoomLevelData = (function() {

    /**
     * Properties of a CoinBaseRoomLevelData.
     * @exports ICoinBaseRoomLevelData
     * @interface ICoinBaseRoomLevelData
     * @property {string} levelName CoinBaseRoomLevelData levelName
     * @property {number} score CoinBaseRoomLevelData score
     * @property {number} minCoin CoinBaseRoomLevelData minCoin
     * @property {number} maxCoin CoinBaseRoomLevelData maxCoin
     * @property {number} onlinePlayers CoinBaseRoomLevelData onlinePlayers
     */

    /**
     * Constructs a new CoinBaseRoomLevelData.
     * @exports CoinBaseRoomLevelData
     * @classdesc Represents a CoinBaseRoomLevelData.
     * @implements ICoinBaseRoomLevelData
     * @constructor
     * @param {ICoinBaseRoomLevelData=} [p] Properties to set
     */
    function CoinBaseRoomLevelData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CoinBaseRoomLevelData levelName.
     * @member {string} levelName
     * @memberof CoinBaseRoomLevelData
     * @instance
     */
    CoinBaseRoomLevelData.prototype.levelName = "";

    /**
     * CoinBaseRoomLevelData score.
     * @member {number} score
     * @memberof CoinBaseRoomLevelData
     * @instance
     */
    CoinBaseRoomLevelData.prototype.score = 0;

    /**
     * CoinBaseRoomLevelData minCoin.
     * @member {number} minCoin
     * @memberof CoinBaseRoomLevelData
     * @instance
     */
    CoinBaseRoomLevelData.prototype.minCoin = 0;

    /**
     * CoinBaseRoomLevelData maxCoin.
     * @member {number} maxCoin
     * @memberof CoinBaseRoomLevelData
     * @instance
     */
    CoinBaseRoomLevelData.prototype.maxCoin = 0;

    /**
     * CoinBaseRoomLevelData onlinePlayers.
     * @member {number} onlinePlayers
     * @memberof CoinBaseRoomLevelData
     * @instance
     */
    CoinBaseRoomLevelData.prototype.onlinePlayers = 0;

    /**
     * Creates a new CoinBaseRoomLevelData instance using the specified properties.
     * @function create
     * @memberof CoinBaseRoomLevelData
     * @static
     * @param {ICoinBaseRoomLevelData=} [properties] Properties to set
     * @returns {CoinBaseRoomLevelData} CoinBaseRoomLevelData instance
     */
    CoinBaseRoomLevelData.create = function create(properties) {
        return new CoinBaseRoomLevelData(properties);
    };

    /**
     * Encodes the specified CoinBaseRoomLevelData message. Does not implicitly {@link CoinBaseRoomLevelData.verify|verify} messages.
     * @function encode
     * @memberof CoinBaseRoomLevelData
     * @static
     * @param {ICoinBaseRoomLevelData} m CoinBaseRoomLevelData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CoinBaseRoomLevelData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.levelName);
        w.uint32(16).int32(m.score);
        w.uint32(24).int32(m.minCoin);
        w.uint32(32).int32(m.maxCoin);
        w.uint32(40).int32(m.onlinePlayers);
        return w;
    };

    /**
     * Decodes a CoinBaseRoomLevelData message from the specified reader or buffer.
     * @function decode
     * @memberof CoinBaseRoomLevelData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CoinBaseRoomLevelData} CoinBaseRoomLevelData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CoinBaseRoomLevelData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CoinBaseRoomLevelData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.levelName = r.string();
                break;
            case 2:
                m.score = r.int32();
                break;
            case 3:
                m.minCoin = r.int32();
                break;
            case 4:
                m.maxCoin = r.int32();
                break;
            case 5:
                m.onlinePlayers = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("levelName"))
            throw $util.ProtocolError("missing required 'levelName'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        if (!m.hasOwnProperty("minCoin"))
            throw $util.ProtocolError("missing required 'minCoin'", { instance: m });
        if (!m.hasOwnProperty("maxCoin"))
            throw $util.ProtocolError("missing required 'maxCoin'", { instance: m });
        if (!m.hasOwnProperty("onlinePlayers"))
            throw $util.ProtocolError("missing required 'onlinePlayers'", { instance: m });
        return m;
    };

    return CoinBaseRoomLevelData;
})();

$root.CoinBaseRoomTypeData = (function() {

    /**
     * Properties of a CoinBaseRoomTypeData.
     * @exports ICoinBaseRoomTypeData
     * @interface ICoinBaseRoomTypeData
     * @property {string} roomName CoinBaseRoomTypeData roomName
     * @property {Array.<ICoinBaseRoomLevelData>|null} [levelData] CoinBaseRoomTypeData levelData
     */

    /**
     * Constructs a new CoinBaseRoomTypeData.
     * @exports CoinBaseRoomTypeData
     * @classdesc Represents a CoinBaseRoomTypeData.
     * @implements ICoinBaseRoomTypeData
     * @constructor
     * @param {ICoinBaseRoomTypeData=} [p] Properties to set
     */
    function CoinBaseRoomTypeData(p) {
        this.levelData = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CoinBaseRoomTypeData roomName.
     * @member {string} roomName
     * @memberof CoinBaseRoomTypeData
     * @instance
     */
    CoinBaseRoomTypeData.prototype.roomName = "";

    /**
     * CoinBaseRoomTypeData levelData.
     * @member {Array.<ICoinBaseRoomLevelData>} levelData
     * @memberof CoinBaseRoomTypeData
     * @instance
     */
    CoinBaseRoomTypeData.prototype.levelData = $util.emptyArray;

    /**
     * Creates a new CoinBaseRoomTypeData instance using the specified properties.
     * @function create
     * @memberof CoinBaseRoomTypeData
     * @static
     * @param {ICoinBaseRoomTypeData=} [properties] Properties to set
     * @returns {CoinBaseRoomTypeData} CoinBaseRoomTypeData instance
     */
    CoinBaseRoomTypeData.create = function create(properties) {
        return new CoinBaseRoomTypeData(properties);
    };

    /**
     * Encodes the specified CoinBaseRoomTypeData message. Does not implicitly {@link CoinBaseRoomTypeData.verify|verify} messages.
     * @function encode
     * @memberof CoinBaseRoomTypeData
     * @static
     * @param {ICoinBaseRoomTypeData} m CoinBaseRoomTypeData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CoinBaseRoomTypeData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.roomName);
        if (m.levelData != null && m.levelData.length) {
            for (var i = 0; i < m.levelData.length; ++i)
                $root.CoinBaseRoomLevelData.encode(m.levelData[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a CoinBaseRoomTypeData message from the specified reader or buffer.
     * @function decode
     * @memberof CoinBaseRoomTypeData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CoinBaseRoomTypeData} CoinBaseRoomTypeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CoinBaseRoomTypeData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CoinBaseRoomTypeData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomName = r.string();
                break;
            case 2:
                if (!(m.levelData && m.levelData.length))
                    m.levelData = [];
                m.levelData.push($root.CoinBaseRoomLevelData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomName"))
            throw $util.ProtocolError("missing required 'roomName'", { instance: m });
        return m;
    };

    return CoinBaseRoomTypeData;
})();

$root.CoinRoomTypeData = (function() {

    /**
     * Properties of a CoinRoomTypeData.
     * @exports ICoinRoomTypeData
     * @interface ICoinRoomTypeData
     * @property {string} bigPlayName CoinRoomTypeData bigPlayName
     * @property {number} typeId CoinRoomTypeData typeId
     * @property {string} playName CoinRoomTypeData playName
     * @property {string} introduce CoinRoomTypeData introduce
     * @property {Array.<ICoinBaseRoomTypeData>|null} [baseRooms] CoinRoomTypeData baseRooms
     */

    /**
     * Constructs a new CoinRoomTypeData.
     * @exports CoinRoomTypeData
     * @classdesc Represents a CoinRoomTypeData.
     * @implements ICoinRoomTypeData
     * @constructor
     * @param {ICoinRoomTypeData=} [p] Properties to set
     */
    function CoinRoomTypeData(p) {
        this.baseRooms = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CoinRoomTypeData bigPlayName.
     * @member {string} bigPlayName
     * @memberof CoinRoomTypeData
     * @instance
     */
    CoinRoomTypeData.prototype.bigPlayName = "";

    /**
     * CoinRoomTypeData typeId.
     * @member {number} typeId
     * @memberof CoinRoomTypeData
     * @instance
     */
    CoinRoomTypeData.prototype.typeId = 0;

    /**
     * CoinRoomTypeData playName.
     * @member {string} playName
     * @memberof CoinRoomTypeData
     * @instance
     */
    CoinRoomTypeData.prototype.playName = "";

    /**
     * CoinRoomTypeData introduce.
     * @member {string} introduce
     * @memberof CoinRoomTypeData
     * @instance
     */
    CoinRoomTypeData.prototype.introduce = "";

    /**
     * CoinRoomTypeData baseRooms.
     * @member {Array.<ICoinBaseRoomTypeData>} baseRooms
     * @memberof CoinRoomTypeData
     * @instance
     */
    CoinRoomTypeData.prototype.baseRooms = $util.emptyArray;

    /**
     * Creates a new CoinRoomTypeData instance using the specified properties.
     * @function create
     * @memberof CoinRoomTypeData
     * @static
     * @param {ICoinRoomTypeData=} [properties] Properties to set
     * @returns {CoinRoomTypeData} CoinRoomTypeData instance
     */
    CoinRoomTypeData.create = function create(properties) {
        return new CoinRoomTypeData(properties);
    };

    /**
     * Encodes the specified CoinRoomTypeData message. Does not implicitly {@link CoinRoomTypeData.verify|verify} messages.
     * @function encode
     * @memberof CoinRoomTypeData
     * @static
     * @param {ICoinRoomTypeData} m CoinRoomTypeData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CoinRoomTypeData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.bigPlayName);
        w.uint32(16).int32(m.typeId);
        w.uint32(26).string(m.playName);
        w.uint32(34).string(m.introduce);
        if (m.baseRooms != null && m.baseRooms.length) {
            for (var i = 0; i < m.baseRooms.length; ++i)
                $root.CoinBaseRoomTypeData.encode(m.baseRooms[i], w.uint32(42).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a CoinRoomTypeData message from the specified reader or buffer.
     * @function decode
     * @memberof CoinRoomTypeData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CoinRoomTypeData} CoinRoomTypeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CoinRoomTypeData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CoinRoomTypeData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bigPlayName = r.string();
                break;
            case 2:
                m.typeId = r.int32();
                break;
            case 3:
                m.playName = r.string();
                break;
            case 4:
                m.introduce = r.string();
                break;
            case 5:
                if (!(m.baseRooms && m.baseRooms.length))
                    m.baseRooms = [];
                m.baseRooms.push($root.CoinBaseRoomTypeData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bigPlayName"))
            throw $util.ProtocolError("missing required 'bigPlayName'", { instance: m });
        if (!m.hasOwnProperty("typeId"))
            throw $util.ProtocolError("missing required 'typeId'", { instance: m });
        if (!m.hasOwnProperty("playName"))
            throw $util.ProtocolError("missing required 'playName'", { instance: m });
        if (!m.hasOwnProperty("introduce"))
            throw $util.ProtocolError("missing required 'introduce'", { instance: m });
        return m;
    };

    return CoinRoomTypeData;
})();

$root.CoinRoomBigTypeData = (function() {

    /**
     * Properties of a CoinRoomBigTypeData.
     * @exports ICoinRoomBigTypeData
     * @interface ICoinRoomBigTypeData
     * @property {Array.<ICoinRoomTypeData>|null} [typeData] CoinRoomBigTypeData typeData
     */

    /**
     * Constructs a new CoinRoomBigTypeData.
     * @exports CoinRoomBigTypeData
     * @classdesc Represents a CoinRoomBigTypeData.
     * @implements ICoinRoomBigTypeData
     * @constructor
     * @param {ICoinRoomBigTypeData=} [p] Properties to set
     */
    function CoinRoomBigTypeData(p) {
        this.typeData = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CoinRoomBigTypeData typeData.
     * @member {Array.<ICoinRoomTypeData>} typeData
     * @memberof CoinRoomBigTypeData
     * @instance
     */
    CoinRoomBigTypeData.prototype.typeData = $util.emptyArray;

    /**
     * Creates a new CoinRoomBigTypeData instance using the specified properties.
     * @function create
     * @memberof CoinRoomBigTypeData
     * @static
     * @param {ICoinRoomBigTypeData=} [properties] Properties to set
     * @returns {CoinRoomBigTypeData} CoinRoomBigTypeData instance
     */
    CoinRoomBigTypeData.create = function create(properties) {
        return new CoinRoomBigTypeData(properties);
    };

    /**
     * Encodes the specified CoinRoomBigTypeData message. Does not implicitly {@link CoinRoomBigTypeData.verify|verify} messages.
     * @function encode
     * @memberof CoinRoomBigTypeData
     * @static
     * @param {ICoinRoomBigTypeData} m CoinRoomBigTypeData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CoinRoomBigTypeData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.typeData != null && m.typeData.length) {
            for (var i = 0; i < m.typeData.length; ++i)
                $root.CoinRoomTypeData.encode(m.typeData[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a CoinRoomBigTypeData message from the specified reader or buffer.
     * @function decode
     * @memberof CoinRoomBigTypeData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CoinRoomBigTypeData} CoinRoomBigTypeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CoinRoomBigTypeData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CoinRoomBigTypeData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.typeData && m.typeData.length))
                    m.typeData = [];
                m.typeData.push($root.CoinRoomTypeData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CoinRoomBigTypeData;
})();

$root.PushConstance = (function() {

    /**
     * Properties of a PushConstance.
     * @exports IPushConstance
     * @interface IPushConstance
     * @property {IChessRoleData} roleData PushConstance roleData
     * @property {ICoinRoomBigTypeData} roomData PushConstance roomData
     * @property {number} countdown1 PushConstance countdown1
     * @property {number} countdown2 PushConstance countdown2
     * @property {number} countdown3 PushConstance countdown3
     * @property {number} countdown4 PushConstance countdown4
     * @property {number} countdown5 PushConstance countdown5
     */

    /**
     * Constructs a new PushConstance.
     * @exports PushConstance
     * @classdesc Represents a PushConstance.
     * @implements IPushConstance
     * @constructor
     * @param {IPushConstance=} [p] Properties to set
     */
    function PushConstance(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushConstance roleData.
     * @member {IChessRoleData} roleData
     * @memberof PushConstance
     * @instance
     */
    PushConstance.prototype.roleData = null;

    /**
     * PushConstance roomData.
     * @member {ICoinRoomBigTypeData} roomData
     * @memberof PushConstance
     * @instance
     */
    PushConstance.prototype.roomData = null;

    /**
     * PushConstance countdown1.
     * @member {number} countdown1
     * @memberof PushConstance
     * @instance
     */
    PushConstance.prototype.countdown1 = 0;

    /**
     * PushConstance countdown2.
     * @member {number} countdown2
     * @memberof PushConstance
     * @instance
     */
    PushConstance.prototype.countdown2 = 0;

    /**
     * PushConstance countdown3.
     * @member {number} countdown3
     * @memberof PushConstance
     * @instance
     */
    PushConstance.prototype.countdown3 = 0;

    /**
     * PushConstance countdown4.
     * @member {number} countdown4
     * @memberof PushConstance
     * @instance
     */
    PushConstance.prototype.countdown4 = 0;

    /**
     * PushConstance countdown5.
     * @member {number} countdown5
     * @memberof PushConstance
     * @instance
     */
    PushConstance.prototype.countdown5 = 0;

    /**
     * Creates a new PushConstance instance using the specified properties.
     * @function create
     * @memberof PushConstance
     * @static
     * @param {IPushConstance=} [properties] Properties to set
     * @returns {PushConstance} PushConstance instance
     */
    PushConstance.create = function create(properties) {
        return new PushConstance(properties);
    };

    /**
     * Encodes the specified PushConstance message. Does not implicitly {@link PushConstance.verify|verify} messages.
     * @function encode
     * @memberof PushConstance
     * @static
     * @param {IPushConstance} m PushConstance message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushConstance.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.ChessRoleData.encode(m.roleData, w.uint32(10).fork()).ldelim();
        $root.CoinRoomBigTypeData.encode(m.roomData, w.uint32(18).fork()).ldelim();
        w.uint32(24).int32(m.countdown1);
        w.uint32(32).int32(m.countdown2);
        w.uint32(40).int32(m.countdown3);
        w.uint32(48).int32(m.countdown4);
        w.uint32(56).int32(m.countdown5);
        return w;
    };

    /**
     * Decodes a PushConstance message from the specified reader or buffer.
     * @function decode
     * @memberof PushConstance
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushConstance} PushConstance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushConstance.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushConstance();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roleData = $root.ChessRoleData.decode(r, r.uint32());
                break;
            case 2:
                m.roomData = $root.CoinRoomBigTypeData.decode(r, r.uint32());
                break;
            case 3:
                m.countdown1 = r.int32();
                break;
            case 4:
                m.countdown2 = r.int32();
                break;
            case 5:
                m.countdown3 = r.int32();
                break;
            case 6:
                m.countdown4 = r.int32();
                break;
            case 7:
                m.countdown5 = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roleData"))
            throw $util.ProtocolError("missing required 'roleData'", { instance: m });
        if (!m.hasOwnProperty("roomData"))
            throw $util.ProtocolError("missing required 'roomData'", { instance: m });
        if (!m.hasOwnProperty("countdown1"))
            throw $util.ProtocolError("missing required 'countdown1'", { instance: m });
        if (!m.hasOwnProperty("countdown2"))
            throw $util.ProtocolError("missing required 'countdown2'", { instance: m });
        if (!m.hasOwnProperty("countdown3"))
            throw $util.ProtocolError("missing required 'countdown3'", { instance: m });
        if (!m.hasOwnProperty("countdown4"))
            throw $util.ProtocolError("missing required 'countdown4'", { instance: m });
        if (!m.hasOwnProperty("countdown5"))
            throw $util.ProtocolError("missing required 'countdown5'", { instance: m });
        return m;
    };

    return PushConstance;
})();

$root.Req_AutoMatch = (function() {

    /**
     * Properties of a Req_AutoMatch.
     * @exports IReq_AutoMatch
     * @interface IReq_AutoMatch
     * @property {number} roomId Req_AutoMatch roomId
     * @property {number|null} [playType] Req_AutoMatch playType
     */

    /**
     * Constructs a new Req_AutoMatch.
     * @exports Req_AutoMatch
     * @classdesc Represents a Req_AutoMatch.
     * @implements IReq_AutoMatch
     * @constructor
     * @param {IReq_AutoMatch=} [p] Properties to set
     */
    function Req_AutoMatch(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_AutoMatch roomId.
     * @member {number} roomId
     * @memberof Req_AutoMatch
     * @instance
     */
    Req_AutoMatch.prototype.roomId = 0;

    /**
     * Req_AutoMatch playType.
     * @member {number} playType
     * @memberof Req_AutoMatch
     * @instance
     */
    Req_AutoMatch.prototype.playType = 0;

    /**
     * Creates a new Req_AutoMatch instance using the specified properties.
     * @function create
     * @memberof Req_AutoMatch
     * @static
     * @param {IReq_AutoMatch=} [properties] Properties to set
     * @returns {Req_AutoMatch} Req_AutoMatch instance
     */
    Req_AutoMatch.create = function create(properties) {
        return new Req_AutoMatch(properties);
    };

    /**
     * Encodes the specified Req_AutoMatch message. Does not implicitly {@link Req_AutoMatch.verify|verify} messages.
     * @function encode
     * @memberof Req_AutoMatch
     * @static
     * @param {IReq_AutoMatch} m Req_AutoMatch message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_AutoMatch.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.roomId);
        if (m.playType != null && m.hasOwnProperty("playType"))
            w.uint32(16).int32(m.playType);
        return w;
    };

    /**
     * Decodes a Req_AutoMatch message from the specified reader or buffer.
     * @function decode
     * @memberof Req_AutoMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_AutoMatch} Req_AutoMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_AutoMatch.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_AutoMatch();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomId = r.int32();
                break;
            case 2:
                m.playType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        return m;
    };

    return Req_AutoMatch;
})();

$root.Rsq_AutoMatch = (function() {

    /**
     * Properties of a Rsq_AutoMatch.
     * @exports IRsq_AutoMatch
     * @interface IRsq_AutoMatch
     * @property {boolean} result Rsq_AutoMatch result
     * @property {string|null} [tip] Rsq_AutoMatch tip
     */

    /**
     * Constructs a new Rsq_AutoMatch.
     * @exports Rsq_AutoMatch
     * @classdesc Represents a Rsq_AutoMatch.
     * @implements IRsq_AutoMatch
     * @constructor
     * @param {IRsq_AutoMatch=} [p] Properties to set
     */
    function Rsq_AutoMatch(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsq_AutoMatch result.
     * @member {boolean} result
     * @memberof Rsq_AutoMatch
     * @instance
     */
    Rsq_AutoMatch.prototype.result = false;

    /**
     * Rsq_AutoMatch tip.
     * @member {string} tip
     * @memberof Rsq_AutoMatch
     * @instance
     */
    Rsq_AutoMatch.prototype.tip = "";

    /**
     * Creates a new Rsq_AutoMatch instance using the specified properties.
     * @function create
     * @memberof Rsq_AutoMatch
     * @static
     * @param {IRsq_AutoMatch=} [properties] Properties to set
     * @returns {Rsq_AutoMatch} Rsq_AutoMatch instance
     */
    Rsq_AutoMatch.create = function create(properties) {
        return new Rsq_AutoMatch(properties);
    };

    /**
     * Encodes the specified Rsq_AutoMatch message. Does not implicitly {@link Rsq_AutoMatch.verify|verify} messages.
     * @function encode
     * @memberof Rsq_AutoMatch
     * @static
     * @param {IRsq_AutoMatch} m Rsq_AutoMatch message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsq_AutoMatch.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.result);
        if (m.tip != null && m.hasOwnProperty("tip"))
            w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a Rsq_AutoMatch message from the specified reader or buffer.
     * @function decode
     * @memberof Rsq_AutoMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsq_AutoMatch} Rsq_AutoMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsq_AutoMatch.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsq_AutoMatch();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.bool();
                break;
            case 2:
                m.tip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return Rsq_AutoMatch;
})();

$root.Rsq_EnterRoom = (function() {

    /**
     * Properties of a Rsq_EnterRoom.
     * @exports IRsq_EnterRoom
     * @interface IRsq_EnterRoom
     * @property {string} ip Rsq_EnterRoom ip
     * @property {number} port Rsq_EnterRoom port
     */

    /**
     * Constructs a new Rsq_EnterRoom.
     * @exports Rsq_EnterRoom
     * @classdesc Represents a Rsq_EnterRoom.
     * @implements IRsq_EnterRoom
     * @constructor
     * @param {IRsq_EnterRoom=} [p] Properties to set
     */
    function Rsq_EnterRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsq_EnterRoom ip.
     * @member {string} ip
     * @memberof Rsq_EnterRoom
     * @instance
     */
    Rsq_EnterRoom.prototype.ip = "";

    /**
     * Rsq_EnterRoom port.
     * @member {number} port
     * @memberof Rsq_EnterRoom
     * @instance
     */
    Rsq_EnterRoom.prototype.port = 0;

    /**
     * Creates a new Rsq_EnterRoom instance using the specified properties.
     * @function create
     * @memberof Rsq_EnterRoom
     * @static
     * @param {IRsq_EnterRoom=} [properties] Properties to set
     * @returns {Rsq_EnterRoom} Rsq_EnterRoom instance
     */
    Rsq_EnterRoom.create = function create(properties) {
        return new Rsq_EnterRoom(properties);
    };

    /**
     * Encodes the specified Rsq_EnterRoom message. Does not implicitly {@link Rsq_EnterRoom.verify|verify} messages.
     * @function encode
     * @memberof Rsq_EnterRoom
     * @static
     * @param {IRsq_EnterRoom} m Rsq_EnterRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsq_EnterRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.ip);
        w.uint32(16).int32(m.port);
        return w;
    };

    /**
     * Decodes a Rsq_EnterRoom message from the specified reader or buffer.
     * @function decode
     * @memberof Rsq_EnterRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsq_EnterRoom} Rsq_EnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsq_EnterRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsq_EnterRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.ip = r.string();
                break;
            case 2:
                m.port = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("ip"))
            throw $util.ProtocolError("missing required 'ip'", { instance: m });
        if (!m.hasOwnProperty("port"))
            throw $util.ProtocolError("missing required 'port'", { instance: m });
        return m;
    };

    return Rsq_EnterRoom;
})();

module.exports = $root;

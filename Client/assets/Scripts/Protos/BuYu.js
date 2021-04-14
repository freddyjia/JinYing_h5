/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.BuYu || ($protobuf.roots.BuYu = {});

$root.BuYuPlayerInfo = (function() {

    /**
     * Properties of a BuYuPlayerInfo.
     * @exports IBuYuPlayerInfo
     * @interface IBuYuPlayerInfo
     * @property {string} playerId BuYuPlayerInfo playerId
     * @property {number} seatid BuYuPlayerInfo seatid
     * @property {number} gold BuYuPlayerInfo gold
     * @property {number} ptType BuYuPlayerInfo ptType
     * @property {number} type BuYuPlayerInfo type
     */

    /**
     * Constructs a new BuYuPlayerInfo.
     * @exports BuYuPlayerInfo
     * @classdesc Represents a BuYuPlayerInfo.
     * @implements IBuYuPlayerInfo
     * @constructor
     * @param {IBuYuPlayerInfo=} [p] Properties to set
     */
    function BuYuPlayerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BuYuPlayerInfo playerId.
     * @member {string} playerId
     * @memberof BuYuPlayerInfo
     * @instance
     */
    BuYuPlayerInfo.prototype.playerId = "";

    /**
     * BuYuPlayerInfo seatid.
     * @member {number} seatid
     * @memberof BuYuPlayerInfo
     * @instance
     */
    BuYuPlayerInfo.prototype.seatid = 0;

    /**
     * BuYuPlayerInfo gold.
     * @member {number} gold
     * @memberof BuYuPlayerInfo
     * @instance
     */
    BuYuPlayerInfo.prototype.gold = 0;

    /**
     * BuYuPlayerInfo ptType.
     * @member {number} ptType
     * @memberof BuYuPlayerInfo
     * @instance
     */
    BuYuPlayerInfo.prototype.ptType = 0;

    /**
     * BuYuPlayerInfo type.
     * @member {number} type
     * @memberof BuYuPlayerInfo
     * @instance
     */
    BuYuPlayerInfo.prototype.type = 0;

    /**
     * Creates a new BuYuPlayerInfo instance using the specified properties.
     * @function create
     * @memberof BuYuPlayerInfo
     * @static
     * @param {IBuYuPlayerInfo=} [properties] Properties to set
     * @returns {BuYuPlayerInfo} BuYuPlayerInfo instance
     */
    BuYuPlayerInfo.create = function create(properties) {
        return new BuYuPlayerInfo(properties);
    };

    /**
     * Encodes the specified BuYuPlayerInfo message. Does not implicitly {@link BuYuPlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof BuYuPlayerInfo
     * @static
     * @param {IBuYuPlayerInfo} m BuYuPlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BuYuPlayerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.seatid);
        w.uint32(24).int32(m.gold);
        w.uint32(32).int32(m.ptType);
        w.uint32(40).int32(m.type);
        return w;
    };

    /**
     * Decodes a BuYuPlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BuYuPlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BuYuPlayerInfo} BuYuPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BuYuPlayerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BuYuPlayerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.seatid = r.int32();
                break;
            case 3:
                m.gold = r.int32();
                break;
            case 4:
                m.ptType = r.int32();
                break;
            case 5:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        if (!m.hasOwnProperty("ptType"))
            throw $util.ProtocolError("missing required 'ptType'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    return BuYuPlayerInfo;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {Array.<IBuYuPlayerInfo>|null} [playerInfos] RoomInfo playerInfos
     * @property {string} serverTime RoomInfo serverTime
     * @property {number} RoomID RoomInfo RoomID
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
        this.playerInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomInfo playerInfos.
     * @member {Array.<IBuYuPlayerInfo>} playerInfos
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.playerInfos = $util.emptyArray;

    /**
     * RoomInfo serverTime.
     * @member {string} serverTime
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.serverTime = "";

    /**
     * RoomInfo RoomID.
     * @member {number} RoomID
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.RoomID = 0;

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
        if (m.playerInfos != null && m.playerInfos.length) {
            for (var i = 0; i < m.playerInfos.length; ++i)
                $root.BuYuPlayerInfo.encode(m.playerInfos[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(18).string(m.serverTime);
        w.uint32(24).int32(m.RoomID);
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
                if (!(m.playerInfos && m.playerInfos.length))
                    m.playerInfos = [];
                m.playerInfos.push($root.BuYuPlayerInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.serverTime = r.string();
                break;
            case 3:
                m.RoomID = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("serverTime"))
            throw $util.ProtocolError("missing required 'serverTime'", { instance: m });
        if (!m.hasOwnProperty("RoomID"))
            throw $util.ProtocolError("missing required 'RoomID'", { instance: m });
        return m;
    };

    return RoomInfo;
})();

$root.PlayerJoin = (function() {

    /**
     * Properties of a PlayerJoin.
     * @exports IPlayerJoin
     * @interface IPlayerJoin
     * @property {IBuYuPlayerInfo} playerInfos PlayerJoin playerInfos
     */

    /**
     * Constructs a new PlayerJoin.
     * @exports PlayerJoin
     * @classdesc Represents a PlayerJoin.
     * @implements IPlayerJoin
     * @constructor
     * @param {IPlayerJoin=} [p] Properties to set
     */
    function PlayerJoin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerJoin playerInfos.
     * @member {IBuYuPlayerInfo} playerInfos
     * @memberof PlayerJoin
     * @instance
     */
    PlayerJoin.prototype.playerInfos = null;

    /**
     * Creates a new PlayerJoin instance using the specified properties.
     * @function create
     * @memberof PlayerJoin
     * @static
     * @param {IPlayerJoin=} [properties] Properties to set
     * @returns {PlayerJoin} PlayerJoin instance
     */
    PlayerJoin.create = function create(properties) {
        return new PlayerJoin(properties);
    };

    /**
     * Encodes the specified PlayerJoin message. Does not implicitly {@link PlayerJoin.verify|verify} messages.
     * @function encode
     * @memberof PlayerJoin
     * @static
     * @param {IPlayerJoin} m PlayerJoin message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerJoin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.BuYuPlayerInfo.encode(m.playerInfos, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a PlayerJoin message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerJoin} PlayerJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerJoin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerJoin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerInfos = $root.BuYuPlayerInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerInfos"))
            throw $util.ProtocolError("missing required 'playerInfos'", { instance: m });
        return m;
    };

    return PlayerJoin;
})();

$root.PlayerLeave = (function() {

    /**
     * Properties of a PlayerLeave.
     * @exports IPlayerLeave
     * @interface IPlayerLeave
     * @property {string} playerId PlayerLeave playerId
     * @property {number} seatid PlayerLeave seatid
     */

    /**
     * Constructs a new PlayerLeave.
     * @exports PlayerLeave
     * @classdesc Represents a PlayerLeave.
     * @implements IPlayerLeave
     * @constructor
     * @param {IPlayerLeave=} [p] Properties to set
     */
    function PlayerLeave(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerLeave playerId.
     * @member {string} playerId
     * @memberof PlayerLeave
     * @instance
     */
    PlayerLeave.prototype.playerId = "";

    /**
     * PlayerLeave seatid.
     * @member {number} seatid
     * @memberof PlayerLeave
     * @instance
     */
    PlayerLeave.prototype.seatid = 0;

    /**
     * Creates a new PlayerLeave instance using the specified properties.
     * @function create
     * @memberof PlayerLeave
     * @static
     * @param {IPlayerLeave=} [properties] Properties to set
     * @returns {PlayerLeave} PlayerLeave instance
     */
    PlayerLeave.create = function create(properties) {
        return new PlayerLeave(properties);
    };

    /**
     * Encodes the specified PlayerLeave message. Does not implicitly {@link PlayerLeave.verify|verify} messages.
     * @function encode
     * @memberof PlayerLeave
     * @static
     * @param {IPlayerLeave} m PlayerLeave message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerLeave.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.seatid);
        return w;
    };

    /**
     * Decodes a PlayerLeave message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerLeave} PlayerLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerLeave.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerLeave();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.seatid = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        return m;
    };

    return PlayerLeave;
})();

$root.AsycFishInfo = (function() {

    /**
     * Properties of an AsycFishInfo.
     * @exports IAsycFishInfo
     * @interface IAsycFishInfo
     * @property {number} FishID AsycFishInfo FishID
     * @property {number} GroupID AsycFishInfo GroupID
     * @property {number} GroupDataID AsycFishInfo GroupDataID
     * @property {number} PathIdx AsycFishInfo PathIdx
     * @property {number} PosIdx AsycFishInfo PosIdx
     * @property {number} FishTime AsycFishInfo FishTime
     */

    /**
     * Constructs a new AsycFishInfo.
     * @exports AsycFishInfo
     * @classdesc Represents an AsycFishInfo.
     * @implements IAsycFishInfo
     * @constructor
     * @param {IAsycFishInfo=} [p] Properties to set
     */
    function AsycFishInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AsycFishInfo FishID.
     * @member {number} FishID
     * @memberof AsycFishInfo
     * @instance
     */
    AsycFishInfo.prototype.FishID = 0;

    /**
     * AsycFishInfo GroupID.
     * @member {number} GroupID
     * @memberof AsycFishInfo
     * @instance
     */
    AsycFishInfo.prototype.GroupID = 0;

    /**
     * AsycFishInfo GroupDataID.
     * @member {number} GroupDataID
     * @memberof AsycFishInfo
     * @instance
     */
    AsycFishInfo.prototype.GroupDataID = 0;

    /**
     * AsycFishInfo PathIdx.
     * @member {number} PathIdx
     * @memberof AsycFishInfo
     * @instance
     */
    AsycFishInfo.prototype.PathIdx = 0;

    /**
     * AsycFishInfo PosIdx.
     * @member {number} PosIdx
     * @memberof AsycFishInfo
     * @instance
     */
    AsycFishInfo.prototype.PosIdx = 0;

    /**
     * AsycFishInfo FishTime.
     * @member {number} FishTime
     * @memberof AsycFishInfo
     * @instance
     */
    AsycFishInfo.prototype.FishTime = 0;

    /**
     * Creates a new AsycFishInfo instance using the specified properties.
     * @function create
     * @memberof AsycFishInfo
     * @static
     * @param {IAsycFishInfo=} [properties] Properties to set
     * @returns {AsycFishInfo} AsycFishInfo instance
     */
    AsycFishInfo.create = function create(properties) {
        return new AsycFishInfo(properties);
    };

    /**
     * Encodes the specified AsycFishInfo message. Does not implicitly {@link AsycFishInfo.verify|verify} messages.
     * @function encode
     * @memberof AsycFishInfo
     * @static
     * @param {IAsycFishInfo} m AsycFishInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AsycFishInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.FishID);
        w.uint32(16).int32(m.GroupID);
        w.uint32(24).int32(m.GroupDataID);
        w.uint32(32).int32(m.PathIdx);
        w.uint32(40).int32(m.PosIdx);
        w.uint32(53).float(m.FishTime);
        return w;
    };

    /**
     * Decodes an AsycFishInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AsycFishInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AsycFishInfo} AsycFishInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AsycFishInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AsycFishInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.FishID = r.int32();
                break;
            case 2:
                m.GroupID = r.int32();
                break;
            case 3:
                m.GroupDataID = r.int32();
                break;
            case 4:
                m.PathIdx = r.int32();
                break;
            case 5:
                m.PosIdx = r.int32();
                break;
            case 6:
                m.FishTime = r.float();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("FishID"))
            throw $util.ProtocolError("missing required 'FishID'", { instance: m });
        if (!m.hasOwnProperty("GroupID"))
            throw $util.ProtocolError("missing required 'GroupID'", { instance: m });
        if (!m.hasOwnProperty("GroupDataID"))
            throw $util.ProtocolError("missing required 'GroupDataID'", { instance: m });
        if (!m.hasOwnProperty("PathIdx"))
            throw $util.ProtocolError("missing required 'PathIdx'", { instance: m });
        if (!m.hasOwnProperty("PosIdx"))
            throw $util.ProtocolError("missing required 'PosIdx'", { instance: m });
        if (!m.hasOwnProperty("FishTime"))
            throw $util.ProtocolError("missing required 'FishTime'", { instance: m });
        return m;
    };

    return AsycFishInfo;
})();

$root.AppearFishInfo = (function() {

    /**
     * Properties of an AppearFishInfo.
     * @exports IAppearFishInfo
     * @interface IAppearFishInfo
     * @property {number} GroupID AppearFishInfo GroupID
     * @property {number} Startid AppearFishInfo Startid
     * @property {number} PathIdx AppearFishInfo PathIdx
     * @property {string} serverTime AppearFishInfo serverTime
     */

    /**
     * Constructs a new AppearFishInfo.
     * @exports AppearFishInfo
     * @classdesc Represents an AppearFishInfo.
     * @implements IAppearFishInfo
     * @constructor
     * @param {IAppearFishInfo=} [p] Properties to set
     */
    function AppearFishInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AppearFishInfo GroupID.
     * @member {number} GroupID
     * @memberof AppearFishInfo
     * @instance
     */
    AppearFishInfo.prototype.GroupID = 0;

    /**
     * AppearFishInfo Startid.
     * @member {number} Startid
     * @memberof AppearFishInfo
     * @instance
     */
    AppearFishInfo.prototype.Startid = 0;

    /**
     * AppearFishInfo PathIdx.
     * @member {number} PathIdx
     * @memberof AppearFishInfo
     * @instance
     */
    AppearFishInfo.prototype.PathIdx = 0;

    /**
     * AppearFishInfo serverTime.
     * @member {string} serverTime
     * @memberof AppearFishInfo
     * @instance
     */
    AppearFishInfo.prototype.serverTime = "";

    /**
     * Creates a new AppearFishInfo instance using the specified properties.
     * @function create
     * @memberof AppearFishInfo
     * @static
     * @param {IAppearFishInfo=} [properties] Properties to set
     * @returns {AppearFishInfo} AppearFishInfo instance
     */
    AppearFishInfo.create = function create(properties) {
        return new AppearFishInfo(properties);
    };

    /**
     * Encodes the specified AppearFishInfo message. Does not implicitly {@link AppearFishInfo.verify|verify} messages.
     * @function encode
     * @memberof AppearFishInfo
     * @static
     * @param {IAppearFishInfo} m AppearFishInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppearFishInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.GroupID);
        w.uint32(16).int32(m.Startid);
        w.uint32(24).int32(m.PathIdx);
        w.uint32(34).string(m.serverTime);
        return w;
    };

    /**
     * Decodes an AppearFishInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AppearFishInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AppearFishInfo} AppearFishInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppearFishInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AppearFishInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.GroupID = r.int32();
                break;
            case 2:
                m.Startid = r.int32();
                break;
            case 3:
                m.PathIdx = r.int32();
                break;
            case 4:
                m.serverTime = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("GroupID"))
            throw $util.ProtocolError("missing required 'GroupID'", { instance: m });
        if (!m.hasOwnProperty("Startid"))
            throw $util.ProtocolError("missing required 'Startid'", { instance: m });
        if (!m.hasOwnProperty("PathIdx"))
            throw $util.ProtocolError("missing required 'PathIdx'", { instance: m });
        if (!m.hasOwnProperty("serverTime"))
            throw $util.ProtocolError("missing required 'serverTime'", { instance: m });
        return m;
    };

    return AppearFishInfo;
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

$root.SheetBuleet = (function() {

    /**
     * Properties of a SheetBuleet.
     * @exports ISheetBuleet
     * @interface ISheetBuleet
     * @property {number} angle SheetBuleet angle
     * @property {number} dirX SheetBuleet dirX
     * @property {number} dirY SheetBuleet dirY
     * @property {number} LockFishID SheetBuleet LockFishID
     */

    /**
     * Constructs a new SheetBuleet.
     * @exports SheetBuleet
     * @classdesc Represents a SheetBuleet.
     * @implements ISheetBuleet
     * @constructor
     * @param {ISheetBuleet=} [p] Properties to set
     */
    function SheetBuleet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SheetBuleet angle.
     * @member {number} angle
     * @memberof SheetBuleet
     * @instance
     */
    SheetBuleet.prototype.angle = 0;

    /**
     * SheetBuleet dirX.
     * @member {number} dirX
     * @memberof SheetBuleet
     * @instance
     */
    SheetBuleet.prototype.dirX = 0;

    /**
     * SheetBuleet dirY.
     * @member {number} dirY
     * @memberof SheetBuleet
     * @instance
     */
    SheetBuleet.prototype.dirY = 0;

    /**
     * SheetBuleet LockFishID.
     * @member {number} LockFishID
     * @memberof SheetBuleet
     * @instance
     */
    SheetBuleet.prototype.LockFishID = 0;

    /**
     * Creates a new SheetBuleet instance using the specified properties.
     * @function create
     * @memberof SheetBuleet
     * @static
     * @param {ISheetBuleet=} [properties] Properties to set
     * @returns {SheetBuleet} SheetBuleet instance
     */
    SheetBuleet.create = function create(properties) {
        return new SheetBuleet(properties);
    };

    /**
     * Encodes the specified SheetBuleet message. Does not implicitly {@link SheetBuleet.verify|verify} messages.
     * @function encode
     * @memberof SheetBuleet
     * @static
     * @param {ISheetBuleet} m SheetBuleet message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SheetBuleet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(13).float(m.angle);
        w.uint32(21).float(m.dirX);
        w.uint32(29).float(m.dirY);
        w.uint32(32).int32(m.LockFishID);
        return w;
    };

    /**
     * Decodes a SheetBuleet message from the specified reader or buffer.
     * @function decode
     * @memberof SheetBuleet
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SheetBuleet} SheetBuleet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SheetBuleet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SheetBuleet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.angle = r.float();
                break;
            case 2:
                m.dirX = r.float();
                break;
            case 3:
                m.dirY = r.float();
                break;
            case 4:
                m.LockFishID = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("angle"))
            throw $util.ProtocolError("missing required 'angle'", { instance: m });
        if (!m.hasOwnProperty("dirX"))
            throw $util.ProtocolError("missing required 'dirX'", { instance: m });
        if (!m.hasOwnProperty("dirY"))
            throw $util.ProtocolError("missing required 'dirY'", { instance: m });
        if (!m.hasOwnProperty("LockFishID"))
            throw $util.ProtocolError("missing required 'LockFishID'", { instance: m });
        return m;
    };

    return SheetBuleet;
})();

$root.SheetBuleetBack = (function() {

    /**
     * Properties of a SheetBuleetBack.
     * @exports ISheetBuleetBack
     * @interface ISheetBuleetBack
     * @property {number} bulletID SheetBuleetBack bulletID
     * @property {number} seatid SheetBuleetBack seatid
     * @property {number} angle SheetBuleetBack angle
     * @property {number} LockFishID SheetBuleetBack LockFishID
     * @property {number} dirX SheetBuleetBack dirX
     * @property {number} dirY SheetBuleetBack dirY
     * @property {string} serverTime SheetBuleetBack serverTime
     * @property {number} bulletGold SheetBuleetBack bulletGold
     * @property {number} type SheetBuleetBack type
     * @property {number} playerGold SheetBuleetBack playerGold
     */

    /**
     * Constructs a new SheetBuleetBack.
     * @exports SheetBuleetBack
     * @classdesc Represents a SheetBuleetBack.
     * @implements ISheetBuleetBack
     * @constructor
     * @param {ISheetBuleetBack=} [p] Properties to set
     */
    function SheetBuleetBack(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SheetBuleetBack bulletID.
     * @member {number} bulletID
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.bulletID = 0;

    /**
     * SheetBuleetBack seatid.
     * @member {number} seatid
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.seatid = 0;

    /**
     * SheetBuleetBack angle.
     * @member {number} angle
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.angle = 0;

    /**
     * SheetBuleetBack LockFishID.
     * @member {number} LockFishID
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.LockFishID = 0;

    /**
     * SheetBuleetBack dirX.
     * @member {number} dirX
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.dirX = 0;

    /**
     * SheetBuleetBack dirY.
     * @member {number} dirY
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.dirY = 0;

    /**
     * SheetBuleetBack serverTime.
     * @member {string} serverTime
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.serverTime = "";

    /**
     * SheetBuleetBack bulletGold.
     * @member {number} bulletGold
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.bulletGold = 0;

    /**
     * SheetBuleetBack type.
     * @member {number} type
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.type = 0;

    /**
     * SheetBuleetBack playerGold.
     * @member {number} playerGold
     * @memberof SheetBuleetBack
     * @instance
     */
    SheetBuleetBack.prototype.playerGold = 0;

    /**
     * Creates a new SheetBuleetBack instance using the specified properties.
     * @function create
     * @memberof SheetBuleetBack
     * @static
     * @param {ISheetBuleetBack=} [properties] Properties to set
     * @returns {SheetBuleetBack} SheetBuleetBack instance
     */
    SheetBuleetBack.create = function create(properties) {
        return new SheetBuleetBack(properties);
    };

    /**
     * Encodes the specified SheetBuleetBack message. Does not implicitly {@link SheetBuleetBack.verify|verify} messages.
     * @function encode
     * @memberof SheetBuleetBack
     * @static
     * @param {ISheetBuleetBack} m SheetBuleetBack message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SheetBuleetBack.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.bulletID);
        w.uint32(16).int32(m.seatid);
        w.uint32(29).float(m.angle);
        w.uint32(32).int32(m.LockFishID);
        w.uint32(45).float(m.dirX);
        w.uint32(53).float(m.dirY);
        w.uint32(58).string(m.serverTime);
        w.uint32(64).int32(m.bulletGold);
        w.uint32(72).int32(m.type);
        w.uint32(80).int32(m.playerGold);
        return w;
    };

    /**
     * Decodes a SheetBuleetBack message from the specified reader or buffer.
     * @function decode
     * @memberof SheetBuleetBack
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SheetBuleetBack} SheetBuleetBack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SheetBuleetBack.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SheetBuleetBack();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bulletID = r.int32();
                break;
            case 2:
                m.seatid = r.int32();
                break;
            case 3:
                m.angle = r.float();
                break;
            case 4:
                m.LockFishID = r.int32();
                break;
            case 5:
                m.dirX = r.float();
                break;
            case 6:
                m.dirY = r.float();
                break;
            case 7:
                m.serverTime = r.string();
                break;
            case 8:
                m.bulletGold = r.int32();
                break;
            case 9:
                m.type = r.int32();
                break;
            case 10:
                m.playerGold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bulletID"))
            throw $util.ProtocolError("missing required 'bulletID'", { instance: m });
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        if (!m.hasOwnProperty("angle"))
            throw $util.ProtocolError("missing required 'angle'", { instance: m });
        if (!m.hasOwnProperty("LockFishID"))
            throw $util.ProtocolError("missing required 'LockFishID'", { instance: m });
        if (!m.hasOwnProperty("dirX"))
            throw $util.ProtocolError("missing required 'dirX'", { instance: m });
        if (!m.hasOwnProperty("dirY"))
            throw $util.ProtocolError("missing required 'dirY'", { instance: m });
        if (!m.hasOwnProperty("serverTime"))
            throw $util.ProtocolError("missing required 'serverTime'", { instance: m });
        if (!m.hasOwnProperty("bulletGold"))
            throw $util.ProtocolError("missing required 'bulletGold'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("playerGold"))
            throw $util.ProtocolError("missing required 'playerGold'", { instance: m });
        return m;
    };

    return SheetBuleetBack;
})();

$root.SyncBulletData = (function() {

    /**
     * Properties of a SyncBulletData.
     * @exports ISyncBulletData
     * @interface ISyncBulletData
     * @property {number} bulletID SyncBulletData bulletID
     * @property {number} bulletType SyncBulletData bulletType
     * @property {number} time SyncBulletData time
     * @property {number} seatid SyncBulletData seatid
     * @property {number} angle SyncBulletData angle
     * @property {number} LockFishID SyncBulletData LockFishID
     * @property {number} dirX SyncBulletData dirX
     * @property {number} dirY SyncBulletData dirY
     * @property {number} type SyncBulletData type
     */

    /**
     * Constructs a new SyncBulletData.
     * @exports SyncBulletData
     * @classdesc Represents a SyncBulletData.
     * @implements ISyncBulletData
     * @constructor
     * @param {ISyncBulletData=} [p] Properties to set
     */
    function SyncBulletData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SyncBulletData bulletID.
     * @member {number} bulletID
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.bulletID = 0;

    /**
     * SyncBulletData bulletType.
     * @member {number} bulletType
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.bulletType = 0;

    /**
     * SyncBulletData time.
     * @member {number} time
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.time = 0;

    /**
     * SyncBulletData seatid.
     * @member {number} seatid
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.seatid = 0;

    /**
     * SyncBulletData angle.
     * @member {number} angle
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.angle = 0;

    /**
     * SyncBulletData LockFishID.
     * @member {number} LockFishID
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.LockFishID = 0;

    /**
     * SyncBulletData dirX.
     * @member {number} dirX
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.dirX = 0;

    /**
     * SyncBulletData dirY.
     * @member {number} dirY
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.dirY = 0;

    /**
     * SyncBulletData type.
     * @member {number} type
     * @memberof SyncBulletData
     * @instance
     */
    SyncBulletData.prototype.type = 0;

    /**
     * Creates a new SyncBulletData instance using the specified properties.
     * @function create
     * @memberof SyncBulletData
     * @static
     * @param {ISyncBulletData=} [properties] Properties to set
     * @returns {SyncBulletData} SyncBulletData instance
     */
    SyncBulletData.create = function create(properties) {
        return new SyncBulletData(properties);
    };

    /**
     * Encodes the specified SyncBulletData message. Does not implicitly {@link SyncBulletData.verify|verify} messages.
     * @function encode
     * @memberof SyncBulletData
     * @static
     * @param {ISyncBulletData} m SyncBulletData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncBulletData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.bulletID);
        w.uint32(16).int32(m.bulletType);
        w.uint32(24).int32(m.time);
        w.uint32(32).int32(m.seatid);
        w.uint32(45).float(m.angle);
        w.uint32(48).int32(m.LockFishID);
        w.uint32(61).float(m.dirX);
        w.uint32(69).float(m.dirY);
        w.uint32(72).int32(m.type);
        return w;
    };

    /**
     * Decodes a SyncBulletData message from the specified reader or buffer.
     * @function decode
     * @memberof SyncBulletData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SyncBulletData} SyncBulletData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncBulletData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SyncBulletData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bulletID = r.int32();
                break;
            case 2:
                m.bulletType = r.int32();
                break;
            case 3:
                m.time = r.int32();
                break;
            case 4:
                m.seatid = r.int32();
                break;
            case 5:
                m.angle = r.float();
                break;
            case 6:
                m.LockFishID = r.int32();
                break;
            case 7:
                m.dirX = r.float();
                break;
            case 8:
                m.dirY = r.float();
                break;
            case 9:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bulletID"))
            throw $util.ProtocolError("missing required 'bulletID'", { instance: m });
        if (!m.hasOwnProperty("bulletType"))
            throw $util.ProtocolError("missing required 'bulletType'", { instance: m });
        if (!m.hasOwnProperty("time"))
            throw $util.ProtocolError("missing required 'time'", { instance: m });
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        if (!m.hasOwnProperty("angle"))
            throw $util.ProtocolError("missing required 'angle'", { instance: m });
        if (!m.hasOwnProperty("LockFishID"))
            throw $util.ProtocolError("missing required 'LockFishID'", { instance: m });
        if (!m.hasOwnProperty("dirX"))
            throw $util.ProtocolError("missing required 'dirX'", { instance: m });
        if (!m.hasOwnProperty("dirY"))
            throw $util.ProtocolError("missing required 'dirY'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    return SyncBulletData;
})();

$root.SyncBullet = (function() {

    /**
     * Properties of a SyncBullet.
     * @exports ISyncBullet
     * @interface ISyncBullet
     * @property {Array.<ISyncBulletData>|null} [bullets] SyncBullet bullets
     */

    /**
     * Constructs a new SyncBullet.
     * @exports SyncBullet
     * @classdesc Represents a SyncBullet.
     * @implements ISyncBullet
     * @constructor
     * @param {ISyncBullet=} [p] Properties to set
     */
    function SyncBullet(p) {
        this.bullets = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SyncBullet bullets.
     * @member {Array.<ISyncBulletData>} bullets
     * @memberof SyncBullet
     * @instance
     */
    SyncBullet.prototype.bullets = $util.emptyArray;

    /**
     * Creates a new SyncBullet instance using the specified properties.
     * @function create
     * @memberof SyncBullet
     * @static
     * @param {ISyncBullet=} [properties] Properties to set
     * @returns {SyncBullet} SyncBullet instance
     */
    SyncBullet.create = function create(properties) {
        return new SyncBullet(properties);
    };

    /**
     * Encodes the specified SyncBullet message. Does not implicitly {@link SyncBullet.verify|verify} messages.
     * @function encode
     * @memberof SyncBullet
     * @static
     * @param {ISyncBullet} m SyncBullet message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncBullet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bullets != null && m.bullets.length) {
            for (var i = 0; i < m.bullets.length; ++i)
                $root.SyncBulletData.encode(m.bullets[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SyncBullet message from the specified reader or buffer.
     * @function decode
     * @memberof SyncBullet
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SyncBullet} SyncBullet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncBullet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SyncBullet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.bullets && m.bullets.length))
                    m.bullets = [];
                m.bullets.push($root.SyncBulletData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return SyncBullet;
})();

$root.BulletBoom = (function() {

    /**
     * Properties of a BulletBoom.
     * @exports IBulletBoom
     * @interface IBulletBoom
     * @property {number} bulletID BulletBoom bulletID
     * @property {number} FishID BulletBoom FishID
     * @property {boolean} isDead BulletBoom isDead
     * @property {number} gold BulletBoom gold
     * @property {number} seatid BulletBoom seatid
     * @property {string} playerId BulletBoom playerId
     * @property {number} playerGold BulletBoom playerGold
     */

    /**
     * Constructs a new BulletBoom.
     * @exports BulletBoom
     * @classdesc Represents a BulletBoom.
     * @implements IBulletBoom
     * @constructor
     * @param {IBulletBoom=} [p] Properties to set
     */
    function BulletBoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BulletBoom bulletID.
     * @member {number} bulletID
     * @memberof BulletBoom
     * @instance
     */
    BulletBoom.prototype.bulletID = 0;

    /**
     * BulletBoom FishID.
     * @member {number} FishID
     * @memberof BulletBoom
     * @instance
     */
    BulletBoom.prototype.FishID = 0;

    /**
     * BulletBoom isDead.
     * @member {boolean} isDead
     * @memberof BulletBoom
     * @instance
     */
    BulletBoom.prototype.isDead = false;

    /**
     * BulletBoom gold.
     * @member {number} gold
     * @memberof BulletBoom
     * @instance
     */
    BulletBoom.prototype.gold = 0;

    /**
     * BulletBoom seatid.
     * @member {number} seatid
     * @memberof BulletBoom
     * @instance
     */
    BulletBoom.prototype.seatid = 0;

    /**
     * BulletBoom playerId.
     * @member {string} playerId
     * @memberof BulletBoom
     * @instance
     */
    BulletBoom.prototype.playerId = "";

    /**
     * BulletBoom playerGold.
     * @member {number} playerGold
     * @memberof BulletBoom
     * @instance
     */
    BulletBoom.prototype.playerGold = 0;

    /**
     * Creates a new BulletBoom instance using the specified properties.
     * @function create
     * @memberof BulletBoom
     * @static
     * @param {IBulletBoom=} [properties] Properties to set
     * @returns {BulletBoom} BulletBoom instance
     */
    BulletBoom.create = function create(properties) {
        return new BulletBoom(properties);
    };

    /**
     * Encodes the specified BulletBoom message. Does not implicitly {@link BulletBoom.verify|verify} messages.
     * @function encode
     * @memberof BulletBoom
     * @static
     * @param {IBulletBoom} m BulletBoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BulletBoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.bulletID);
        w.uint32(16).int32(m.FishID);
        w.uint32(24).bool(m.isDead);
        w.uint32(32).int32(m.gold);
        w.uint32(40).int32(m.seatid);
        w.uint32(50).string(m.playerId);
        w.uint32(56).int32(m.playerGold);
        return w;
    };

    /**
     * Decodes a BulletBoom message from the specified reader or buffer.
     * @function decode
     * @memberof BulletBoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BulletBoom} BulletBoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BulletBoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BulletBoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bulletID = r.int32();
                break;
            case 2:
                m.FishID = r.int32();
                break;
            case 3:
                m.isDead = r.bool();
                break;
            case 4:
                m.gold = r.int32();
                break;
            case 5:
                m.seatid = r.int32();
                break;
            case 6:
                m.playerId = r.string();
                break;
            case 7:
                m.playerGold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bulletID"))
            throw $util.ProtocolError("missing required 'bulletID'", { instance: m });
        if (!m.hasOwnProperty("FishID"))
            throw $util.ProtocolError("missing required 'FishID'", { instance: m });
        if (!m.hasOwnProperty("isDead"))
            throw $util.ProtocolError("missing required 'isDead'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("playerGold"))
            throw $util.ProtocolError("missing required 'playerGold'", { instance: m });
        return m;
    };

    return BulletBoom;
})();

$root.SpecialDead = (function() {

    /**
     * Properties of a SpecialDead.
     * @exports ISpecialDead
     * @interface ISpecialDead
     * @property {Array.<number>|null} [FishIds] SpecialDead FishIds
     * @property {Array.<number>|null} [Golds] SpecialDead Golds
     * @property {number} type SpecialDead type
     * @property {number} seatid SpecialDead seatid
     */

    /**
     * Constructs a new SpecialDead.
     * @exports SpecialDead
     * @classdesc Represents a SpecialDead.
     * @implements ISpecialDead
     * @constructor
     * @param {ISpecialDead=} [p] Properties to set
     */
    function SpecialDead(p) {
        this.FishIds = [];
        this.Golds = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SpecialDead FishIds.
     * @member {Array.<number>} FishIds
     * @memberof SpecialDead
     * @instance
     */
    SpecialDead.prototype.FishIds = $util.emptyArray;

    /**
     * SpecialDead Golds.
     * @member {Array.<number>} Golds
     * @memberof SpecialDead
     * @instance
     */
    SpecialDead.prototype.Golds = $util.emptyArray;

    /**
     * SpecialDead type.
     * @member {number} type
     * @memberof SpecialDead
     * @instance
     */
    SpecialDead.prototype.type = 0;

    /**
     * SpecialDead seatid.
     * @member {number} seatid
     * @memberof SpecialDead
     * @instance
     */
    SpecialDead.prototype.seatid = 0;

    /**
     * Creates a new SpecialDead instance using the specified properties.
     * @function create
     * @memberof SpecialDead
     * @static
     * @param {ISpecialDead=} [properties] Properties to set
     * @returns {SpecialDead} SpecialDead instance
     */
    SpecialDead.create = function create(properties) {
        return new SpecialDead(properties);
    };

    /**
     * Encodes the specified SpecialDead message. Does not implicitly {@link SpecialDead.verify|verify} messages.
     * @function encode
     * @memberof SpecialDead
     * @static
     * @param {ISpecialDead} m SpecialDead message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpecialDead.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.FishIds != null && m.FishIds.length) {
            for (var i = 0; i < m.FishIds.length; ++i)
                w.uint32(8).int32(m.FishIds[i]);
        }
        if (m.Golds != null && m.Golds.length) {
            for (var i = 0; i < m.Golds.length; ++i)
                w.uint32(16).int32(m.Golds[i]);
        }
        w.uint32(24).int32(m.type);
        w.uint32(32).int32(m.seatid);
        return w;
    };

    /**
     * Decodes a SpecialDead message from the specified reader or buffer.
     * @function decode
     * @memberof SpecialDead
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SpecialDead} SpecialDead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpecialDead.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SpecialDead();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.FishIds && m.FishIds.length))
                    m.FishIds = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.FishIds.push(r.int32());
                } else
                    m.FishIds.push(r.int32());
                break;
            case 2:
                if (!(m.Golds && m.Golds.length))
                    m.Golds = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.Golds.push(r.int32());
                } else
                    m.Golds.push(r.int32());
                break;
            case 3:
                m.type = r.int32();
                break;
            case 4:
                m.seatid = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        return m;
    };

    return SpecialDead;
})();

$root.PTUpDown = (function() {

    /**
     * Properties of a PTUpDown.
     * @exports IPTUpDown
     * @interface IPTUpDown
     * @property {number} PtType PTUpDown PtType
     */

    /**
     * Constructs a new PTUpDown.
     * @exports PTUpDown
     * @classdesc Represents a PTUpDown.
     * @implements IPTUpDown
     * @constructor
     * @param {IPTUpDown=} [p] Properties to set
     */
    function PTUpDown(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PTUpDown PtType.
     * @member {number} PtType
     * @memberof PTUpDown
     * @instance
     */
    PTUpDown.prototype.PtType = 0;

    /**
     * Creates a new PTUpDown instance using the specified properties.
     * @function create
     * @memberof PTUpDown
     * @static
     * @param {IPTUpDown=} [properties] Properties to set
     * @returns {PTUpDown} PTUpDown instance
     */
    PTUpDown.create = function create(properties) {
        return new PTUpDown(properties);
    };

    /**
     * Encodes the specified PTUpDown message. Does not implicitly {@link PTUpDown.verify|verify} messages.
     * @function encode
     * @memberof PTUpDown
     * @static
     * @param {IPTUpDown} m PTUpDown message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PTUpDown.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.PtType);
        return w;
    };

    /**
     * Decodes a PTUpDown message from the specified reader or buffer.
     * @function decode
     * @memberof PTUpDown
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PTUpDown} PTUpDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PTUpDown.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PTUpDown();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.PtType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("PtType"))
            throw $util.ProtocolError("missing required 'PtType'", { instance: m });
        return m;
    };

    return PTUpDown;
})();

$root.PTUpDownBack = (function() {

    /**
     * Properties of a PTUpDownBack.
     * @exports IPTUpDownBack
     * @interface IPTUpDownBack
     * @property {number} seatid PTUpDownBack seatid
     * @property {number} PtType PTUpDownBack PtType
     */

    /**
     * Constructs a new PTUpDownBack.
     * @exports PTUpDownBack
     * @classdesc Represents a PTUpDownBack.
     * @implements IPTUpDownBack
     * @constructor
     * @param {IPTUpDownBack=} [p] Properties to set
     */
    function PTUpDownBack(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PTUpDownBack seatid.
     * @member {number} seatid
     * @memberof PTUpDownBack
     * @instance
     */
    PTUpDownBack.prototype.seatid = 0;

    /**
     * PTUpDownBack PtType.
     * @member {number} PtType
     * @memberof PTUpDownBack
     * @instance
     */
    PTUpDownBack.prototype.PtType = 0;

    /**
     * Creates a new PTUpDownBack instance using the specified properties.
     * @function create
     * @memberof PTUpDownBack
     * @static
     * @param {IPTUpDownBack=} [properties] Properties to set
     * @returns {PTUpDownBack} PTUpDownBack instance
     */
    PTUpDownBack.create = function create(properties) {
        return new PTUpDownBack(properties);
    };

    /**
     * Encodes the specified PTUpDownBack message. Does not implicitly {@link PTUpDownBack.verify|verify} messages.
     * @function encode
     * @memberof PTUpDownBack
     * @static
     * @param {IPTUpDownBack} m PTUpDownBack message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PTUpDownBack.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.seatid);
        w.uint32(16).int32(m.PtType);
        return w;
    };

    /**
     * Decodes a PTUpDownBack message from the specified reader or buffer.
     * @function decode
     * @memberof PTUpDownBack
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PTUpDownBack} PTUpDownBack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PTUpDownBack.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PTUpDownBack();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.seatid = r.int32();
                break;
            case 2:
                m.PtType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        if (!m.hasOwnProperty("PtType"))
            throw $util.ProtocolError("missing required 'PtType'", { instance: m });
        return m;
    };

    return PTUpDownBack;
})();

$root.FishBossTip = (function() {

    /**
     * Properties of a FishBossTip.
     * @exports IFishBossTip
     * @interface IFishBossTip
     * @property {number} typeTips FishBossTip typeTips
     */

    /**
     * Constructs a new FishBossTip.
     * @exports FishBossTip
     * @classdesc Represents a FishBossTip.
     * @implements IFishBossTip
     * @constructor
     * @param {IFishBossTip=} [p] Properties to set
     */
    function FishBossTip(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FishBossTip typeTips.
     * @member {number} typeTips
     * @memberof FishBossTip
     * @instance
     */
    FishBossTip.prototype.typeTips = 0;

    /**
     * Creates a new FishBossTip instance using the specified properties.
     * @function create
     * @memberof FishBossTip
     * @static
     * @param {IFishBossTip=} [properties] Properties to set
     * @returns {FishBossTip} FishBossTip instance
     */
    FishBossTip.create = function create(properties) {
        return new FishBossTip(properties);
    };

    /**
     * Encodes the specified FishBossTip message. Does not implicitly {@link FishBossTip.verify|verify} messages.
     * @function encode
     * @memberof FishBossTip
     * @static
     * @param {IFishBossTip} m FishBossTip message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FishBossTip.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.typeTips);
        return w;
    };

    /**
     * Decodes a FishBossTip message from the specified reader or buffer.
     * @function decode
     * @memberof FishBossTip
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FishBossTip} FishBossTip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FishBossTip.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FishBossTip();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.typeTips = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("typeTips"))
            throw $util.ProtocolError("missing required 'typeTips'", { instance: m });
        return m;
    };

    return FishBossTip;
})();

$root.FireReq = (function() {

    /**
     * Properties of a FireReq.
     * @exports IFireReq
     * @interface IFireReq
     * @property {number} type FireReq type
     */

    /**
     * Constructs a new FireReq.
     * @exports FireReq
     * @classdesc Represents a FireReq.
     * @implements IFireReq
     * @constructor
     * @param {IFireReq=} [p] Properties to set
     */
    function FireReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FireReq type.
     * @member {number} type
     * @memberof FireReq
     * @instance
     */
    FireReq.prototype.type = 0;

    /**
     * Creates a new FireReq instance using the specified properties.
     * @function create
     * @memberof FireReq
     * @static
     * @param {IFireReq=} [properties] Properties to set
     * @returns {FireReq} FireReq instance
     */
    FireReq.create = function create(properties) {
        return new FireReq(properties);
    };

    /**
     * Encodes the specified FireReq message. Does not implicitly {@link FireReq.verify|verify} messages.
     * @function encode
     * @memberof FireReq
     * @static
     * @param {IFireReq} m FireReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        return w;
    };

    /**
     * Decodes a FireReq message from the specified reader or buffer.
     * @function decode
     * @memberof FireReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FireReq} FireReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FireReq();
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

    return FireReq;
})();

$root.FireRsp = (function() {

    /**
     * Properties of a FireRsp.
     * @exports IFireRsp
     * @interface IFireRsp
     * @property {number} type FireRsp type
     * @property {number} seatid FireRsp seatid
     */

    /**
     * Constructs a new FireRsp.
     * @exports FireRsp
     * @classdesc Represents a FireRsp.
     * @implements IFireRsp
     * @constructor
     * @param {IFireRsp=} [p] Properties to set
     */
    function FireRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FireRsp type.
     * @member {number} type
     * @memberof FireRsp
     * @instance
     */
    FireRsp.prototype.type = 0;

    /**
     * FireRsp seatid.
     * @member {number} seatid
     * @memberof FireRsp
     * @instance
     */
    FireRsp.prototype.seatid = 0;

    /**
     * Creates a new FireRsp instance using the specified properties.
     * @function create
     * @memberof FireRsp
     * @static
     * @param {IFireRsp=} [properties] Properties to set
     * @returns {FireRsp} FireRsp instance
     */
    FireRsp.create = function create(properties) {
        return new FireRsp(properties);
    };

    /**
     * Encodes the specified FireRsp message. Does not implicitly {@link FireRsp.verify|verify} messages.
     * @function encode
     * @memberof FireRsp
     * @static
     * @param {IFireRsp} m FireRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        w.uint32(16).int32(m.seatid);
        return w;
    };

    /**
     * Decodes a FireRsp message from the specified reader or buffer.
     * @function decode
     * @memberof FireRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FireRsp} FireRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FireRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.seatid = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        return m;
    };

    return FireRsp;
})();

$root.BulletGoldBack = (function() {

    /**
     * Properties of a BulletGoldBack.
     * @exports IBulletGoldBack
     * @interface IBulletGoldBack
     * @property {number} gold BulletGoldBack gold
     * @property {number} seatid BulletGoldBack seatid
     * @property {string} playerId BulletGoldBack playerId
     * @property {number} playerGold BulletGoldBack playerGold
     */

    /**
     * Constructs a new BulletGoldBack.
     * @exports BulletGoldBack
     * @classdesc Represents a BulletGoldBack.
     * @implements IBulletGoldBack
     * @constructor
     * @param {IBulletGoldBack=} [p] Properties to set
     */
    function BulletGoldBack(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BulletGoldBack gold.
     * @member {number} gold
     * @memberof BulletGoldBack
     * @instance
     */
    BulletGoldBack.prototype.gold = 0;

    /**
     * BulletGoldBack seatid.
     * @member {number} seatid
     * @memberof BulletGoldBack
     * @instance
     */
    BulletGoldBack.prototype.seatid = 0;

    /**
     * BulletGoldBack playerId.
     * @member {string} playerId
     * @memberof BulletGoldBack
     * @instance
     */
    BulletGoldBack.prototype.playerId = "";

    /**
     * BulletGoldBack playerGold.
     * @member {number} playerGold
     * @memberof BulletGoldBack
     * @instance
     */
    BulletGoldBack.prototype.playerGold = 0;

    /**
     * Creates a new BulletGoldBack instance using the specified properties.
     * @function create
     * @memberof BulletGoldBack
     * @static
     * @param {IBulletGoldBack=} [properties] Properties to set
     * @returns {BulletGoldBack} BulletGoldBack instance
     */
    BulletGoldBack.create = function create(properties) {
        return new BulletGoldBack(properties);
    };

    /**
     * Encodes the specified BulletGoldBack message. Does not implicitly {@link BulletGoldBack.verify|verify} messages.
     * @function encode
     * @memberof BulletGoldBack
     * @static
     * @param {IBulletGoldBack} m BulletGoldBack message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BulletGoldBack.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.gold);
        w.uint32(16).int32(m.seatid);
        w.uint32(26).string(m.playerId);
        w.uint32(32).int32(m.playerGold);
        return w;
    };

    /**
     * Decodes a BulletGoldBack message from the specified reader or buffer.
     * @function decode
     * @memberof BulletGoldBack
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BulletGoldBack} BulletGoldBack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BulletGoldBack.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BulletGoldBack();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gold = r.int32();
                break;
            case 2:
                m.seatid = r.int32();
                break;
            case 3:
                m.playerId = r.string();
                break;
            case 4:
                m.playerGold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        if (!m.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: m });
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("playerGold"))
            throw $util.ProtocolError("missing required 'playerGold'", { instance: m });
        return m;
    };

    return BulletGoldBack;
})();

$root.FishPos = (function() {

    /**
     * Properties of a FishPos.
     * @exports IFishPos
     * @interface IFishPos
     * @property {number} fishid FishPos fishid
     * @property {number} x FishPos x
     * @property {number} y FishPos y
     * @property {number} rotation FishPos rotation
     * @property {number} boxx FishPos boxx
     * @property {number} boxy FishPos boxy
     * @property {number} time FishPos time
     */

    /**
     * Constructs a new FishPos.
     * @exports FishPos
     * @classdesc Represents a FishPos.
     * @implements IFishPos
     * @constructor
     * @param {IFishPos=} [p] Properties to set
     */
    function FishPos(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FishPos fishid.
     * @member {number} fishid
     * @memberof FishPos
     * @instance
     */
    FishPos.prototype.fishid = 0;

    /**
     * FishPos x.
     * @member {number} x
     * @memberof FishPos
     * @instance
     */
    FishPos.prototype.x = 0;

    /**
     * FishPos y.
     * @member {number} y
     * @memberof FishPos
     * @instance
     */
    FishPos.prototype.y = 0;

    /**
     * FishPos rotation.
     * @member {number} rotation
     * @memberof FishPos
     * @instance
     */
    FishPos.prototype.rotation = 0;

    /**
     * FishPos boxx.
     * @member {number} boxx
     * @memberof FishPos
     * @instance
     */
    FishPos.prototype.boxx = 0;

    /**
     * FishPos boxy.
     * @member {number} boxy
     * @memberof FishPos
     * @instance
     */
    FishPos.prototype.boxy = 0;

    /**
     * FishPos time.
     * @member {number} time
     * @memberof FishPos
     * @instance
     */
    FishPos.prototype.time = 0;

    /**
     * Creates a new FishPos instance using the specified properties.
     * @function create
     * @memberof FishPos
     * @static
     * @param {IFishPos=} [properties] Properties to set
     * @returns {FishPos} FishPos instance
     */
    FishPos.create = function create(properties) {
        return new FishPos(properties);
    };

    /**
     * Encodes the specified FishPos message. Does not implicitly {@link FishPos.verify|verify} messages.
     * @function encode
     * @memberof FishPos
     * @static
     * @param {IFishPos} m FishPos message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FishPos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.fishid);
        w.uint32(21).float(m.x);
        w.uint32(29).float(m.y);
        w.uint32(37).float(m.rotation);
        w.uint32(45).float(m.boxx);
        w.uint32(53).float(m.boxy);
        w.uint32(61).float(m.time);
        return w;
    };

    /**
     * Decodes a FishPos message from the specified reader or buffer.
     * @function decode
     * @memberof FishPos
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FishPos} FishPos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FishPos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FishPos();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.fishid = r.int32();
                break;
            case 2:
                m.x = r.float();
                break;
            case 3:
                m.y = r.float();
                break;
            case 4:
                m.rotation = r.float();
                break;
            case 5:
                m.boxx = r.float();
                break;
            case 6:
                m.boxy = r.float();
                break;
            case 7:
                m.time = r.float();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("fishid"))
            throw $util.ProtocolError("missing required 'fishid'", { instance: m });
        if (!m.hasOwnProperty("x"))
            throw $util.ProtocolError("missing required 'x'", { instance: m });
        if (!m.hasOwnProperty("y"))
            throw $util.ProtocolError("missing required 'y'", { instance: m });
        if (!m.hasOwnProperty("rotation"))
            throw $util.ProtocolError("missing required 'rotation'", { instance: m });
        if (!m.hasOwnProperty("boxx"))
            throw $util.ProtocolError("missing required 'boxx'", { instance: m });
        if (!m.hasOwnProperty("boxy"))
            throw $util.ProtocolError("missing required 'boxy'", { instance: m });
        if (!m.hasOwnProperty("time"))
            throw $util.ProtocolError("missing required 'time'", { instance: m });
        return m;
    };

    return FishPos;
})();

$root.bulletPos = (function() {

    /**
     * Properties of a bulletPos.
     * @exports IbulletPos
     * @interface IbulletPos
     * @property {number} bulletId bulletPos bulletId
     * @property {number} x bulletPos x
     * @property {number} y bulletPos y
     * @property {number} rotation bulletPos rotation
     */

    /**
     * Constructs a new bulletPos.
     * @exports bulletPos
     * @classdesc Represents a bulletPos.
     * @implements IbulletPos
     * @constructor
     * @param {IbulletPos=} [p] Properties to set
     */
    function bulletPos(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * bulletPos bulletId.
     * @member {number} bulletId
     * @memberof bulletPos
     * @instance
     */
    bulletPos.prototype.bulletId = 0;

    /**
     * bulletPos x.
     * @member {number} x
     * @memberof bulletPos
     * @instance
     */
    bulletPos.prototype.x = 0;

    /**
     * bulletPos y.
     * @member {number} y
     * @memberof bulletPos
     * @instance
     */
    bulletPos.prototype.y = 0;

    /**
     * bulletPos rotation.
     * @member {number} rotation
     * @memberof bulletPos
     * @instance
     */
    bulletPos.prototype.rotation = 0;

    /**
     * Creates a new bulletPos instance using the specified properties.
     * @function create
     * @memberof bulletPos
     * @static
     * @param {IbulletPos=} [properties] Properties to set
     * @returns {bulletPos} bulletPos instance
     */
    bulletPos.create = function create(properties) {
        return new bulletPos(properties);
    };

    /**
     * Encodes the specified bulletPos message. Does not implicitly {@link bulletPos.verify|verify} messages.
     * @function encode
     * @memberof bulletPos
     * @static
     * @param {IbulletPos} m bulletPos message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    bulletPos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.bulletId);
        w.uint32(21).float(m.x);
        w.uint32(29).float(m.y);
        w.uint32(37).float(m.rotation);
        return w;
    };

    /**
     * Decodes a bulletPos message from the specified reader or buffer.
     * @function decode
     * @memberof bulletPos
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {bulletPos} bulletPos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    bulletPos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.bulletPos();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bulletId = r.int32();
                break;
            case 2:
                m.x = r.float();
                break;
            case 3:
                m.y = r.float();
                break;
            case 4:
                m.rotation = r.float();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bulletId"))
            throw $util.ProtocolError("missing required 'bulletId'", { instance: m });
        if (!m.hasOwnProperty("x"))
            throw $util.ProtocolError("missing required 'x'", { instance: m });
        if (!m.hasOwnProperty("y"))
            throw $util.ProtocolError("missing required 'y'", { instance: m });
        if (!m.hasOwnProperty("rotation"))
            throw $util.ProtocolError("missing required 'rotation'", { instance: m });
        return m;
    };

    return bulletPos;
})();

$root.FishPoss = (function() {

    /**
     * Properties of a FishPoss.
     * @exports IFishPoss
     * @interface IFishPoss
     * @property {Array.<IFishPos>|null} [list] FishPoss list
     * @property {Array.<IbulletPos>|null} [list2] FishPoss list2
     */

    /**
     * Constructs a new FishPoss.
     * @exports FishPoss
     * @classdesc Represents a FishPoss.
     * @implements IFishPoss
     * @constructor
     * @param {IFishPoss=} [p] Properties to set
     */
    function FishPoss(p) {
        this.list = [];
        this.list2 = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FishPoss list.
     * @member {Array.<IFishPos>} list
     * @memberof FishPoss
     * @instance
     */
    FishPoss.prototype.list = $util.emptyArray;

    /**
     * FishPoss list2.
     * @member {Array.<IbulletPos>} list2
     * @memberof FishPoss
     * @instance
     */
    FishPoss.prototype.list2 = $util.emptyArray;

    /**
     * Creates a new FishPoss instance using the specified properties.
     * @function create
     * @memberof FishPoss
     * @static
     * @param {IFishPoss=} [properties] Properties to set
     * @returns {FishPoss} FishPoss instance
     */
    FishPoss.create = function create(properties) {
        return new FishPoss(properties);
    };

    /**
     * Encodes the specified FishPoss message. Does not implicitly {@link FishPoss.verify|verify} messages.
     * @function encode
     * @memberof FishPoss
     * @static
     * @param {IFishPoss} m FishPoss message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FishPoss.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.list != null && m.list.length) {
            for (var i = 0; i < m.list.length; ++i)
                $root.FishPos.encode(m.list[i], w.uint32(10).fork()).ldelim();
        }
        if (m.list2 != null && m.list2.length) {
            for (var i = 0; i < m.list2.length; ++i)
                $root.bulletPos.encode(m.list2[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a FishPoss message from the specified reader or buffer.
     * @function decode
     * @memberof FishPoss
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FishPoss} FishPoss
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FishPoss.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FishPoss();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.list && m.list.length))
                    m.list = [];
                m.list.push($root.FishPos.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.list2 && m.list2.length))
                    m.list2 = [];
                m.list2.push($root.bulletPos.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return FishPoss;
})();

$root.reqRoomInfo = (function() {

    /**
     * Properties of a reqRoomInfo.
     * @exports IreqRoomInfo
     * @interface IreqRoomInfo
     * @property {number} RoomID reqRoomInfo RoomID
     */

    /**
     * Constructs a new reqRoomInfo.
     * @exports reqRoomInfo
     * @classdesc Represents a reqRoomInfo.
     * @implements IreqRoomInfo
     * @constructor
     * @param {IreqRoomInfo=} [p] Properties to set
     */
    function reqRoomInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * reqRoomInfo RoomID.
     * @member {number} RoomID
     * @memberof reqRoomInfo
     * @instance
     */
    reqRoomInfo.prototype.RoomID = 0;

    /**
     * Creates a new reqRoomInfo instance using the specified properties.
     * @function create
     * @memberof reqRoomInfo
     * @static
     * @param {IreqRoomInfo=} [properties] Properties to set
     * @returns {reqRoomInfo} reqRoomInfo instance
     */
    reqRoomInfo.create = function create(properties) {
        return new reqRoomInfo(properties);
    };

    /**
     * Encodes the specified reqRoomInfo message. Does not implicitly {@link reqRoomInfo.verify|verify} messages.
     * @function encode
     * @memberof reqRoomInfo
     * @static
     * @param {IreqRoomInfo} m reqRoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    reqRoomInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.RoomID);
        return w;
    };

    /**
     * Decodes a reqRoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof reqRoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {reqRoomInfo} reqRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    reqRoomInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqRoomInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.RoomID = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("RoomID"))
            throw $util.ProtocolError("missing required 'RoomID'", { instance: m });
        return m;
    };

    return reqRoomInfo;
})();

$root.rspRoomInfo = (function() {

    /**
     * Properties of a rspRoomInfo.
     * @exports IrspRoomInfo
     * @interface IrspRoomInfo
     * @property {Array.<IBuYuPlayerInfo>|null} [playerInfos] rspRoomInfo playerInfos
     * @property {string} serverTime rspRoomInfo serverTime
     * @property {number} RoomID rspRoomInfo RoomID
     */

    /**
     * Constructs a new rspRoomInfo.
     * @exports rspRoomInfo
     * @classdesc Represents a rspRoomInfo.
     * @implements IrspRoomInfo
     * @constructor
     * @param {IrspRoomInfo=} [p] Properties to set
     */
    function rspRoomInfo(p) {
        this.playerInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * rspRoomInfo playerInfos.
     * @member {Array.<IBuYuPlayerInfo>} playerInfos
     * @memberof rspRoomInfo
     * @instance
     */
    rspRoomInfo.prototype.playerInfos = $util.emptyArray;

    /**
     * rspRoomInfo serverTime.
     * @member {string} serverTime
     * @memberof rspRoomInfo
     * @instance
     */
    rspRoomInfo.prototype.serverTime = "";

    /**
     * rspRoomInfo RoomID.
     * @member {number} RoomID
     * @memberof rspRoomInfo
     * @instance
     */
    rspRoomInfo.prototype.RoomID = 0;

    /**
     * Creates a new rspRoomInfo instance using the specified properties.
     * @function create
     * @memberof rspRoomInfo
     * @static
     * @param {IrspRoomInfo=} [properties] Properties to set
     * @returns {rspRoomInfo} rspRoomInfo instance
     */
    rspRoomInfo.create = function create(properties) {
        return new rspRoomInfo(properties);
    };

    /**
     * Encodes the specified rspRoomInfo message. Does not implicitly {@link rspRoomInfo.verify|verify} messages.
     * @function encode
     * @memberof rspRoomInfo
     * @static
     * @param {IrspRoomInfo} m rspRoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    rspRoomInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerInfos != null && m.playerInfos.length) {
            for (var i = 0; i < m.playerInfos.length; ++i)
                $root.BuYuPlayerInfo.encode(m.playerInfos[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(18).string(m.serverTime);
        w.uint32(24).int32(m.RoomID);
        return w;
    };

    /**
     * Decodes a rspRoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof rspRoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {rspRoomInfo} rspRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    rspRoomInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.rspRoomInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerInfos && m.playerInfos.length))
                    m.playerInfos = [];
                m.playerInfos.push($root.BuYuPlayerInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.serverTime = r.string();
                break;
            case 3:
                m.RoomID = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("serverTime"))
            throw $util.ProtocolError("missing required 'serverTime'", { instance: m });
        if (!m.hasOwnProperty("RoomID"))
            throw $util.ProtocolError("missing required 'RoomID'", { instance: m });
        return m;
    };

    return rspRoomInfo;
})();

$root.ChangeTable = (function() {

    /**
     * Properties of a ChangeTable.
     * @exports IChangeTable
     * @interface IChangeTable
     */

    /**
     * Constructs a new ChangeTable.
     * @exports ChangeTable
     * @classdesc Represents a ChangeTable.
     * @implements IChangeTable
     * @constructor
     * @param {IChangeTable=} [p] Properties to set
     */
    function ChangeTable(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ChangeTable instance using the specified properties.
     * @function create
     * @memberof ChangeTable
     * @static
     * @param {IChangeTable=} [properties] Properties to set
     * @returns {ChangeTable} ChangeTable instance
     */
    ChangeTable.create = function create(properties) {
        return new ChangeTable(properties);
    };

    /**
     * Encodes the specified ChangeTable message. Does not implicitly {@link ChangeTable.verify|verify} messages.
     * @function encode
     * @memberof ChangeTable
     * @static
     * @param {IChangeTable} m ChangeTable message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeTable.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ChangeTable message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChangeTable} ChangeTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeTable.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChangeTable();
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

    return ChangeTable;
})();

module.exports = $root;

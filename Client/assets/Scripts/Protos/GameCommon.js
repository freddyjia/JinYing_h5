/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.GameCommon || ($protobuf.roots.GameCommon = {});

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

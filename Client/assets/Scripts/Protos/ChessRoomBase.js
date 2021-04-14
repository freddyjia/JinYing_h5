/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.ChessRoomBase || ($protobuf.roots.ChessRoomBase = {});

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {number} pos PlayerInfo pos
     * @property {string} id PlayerInfo id
     * @property {number} sex PlayerInfo sex
     * @property {string} name PlayerInfo name
     * @property {string} headUrl PlayerInfo headUrl
     * @property {number} vip PlayerInfo vip
     * @property {boolean} isJudge PlayerInfo isJudge
     * @property {number} gold PlayerInfo gold
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
     * PlayerInfo pos.
     * @member {number} pos
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.pos = 0;

    /**
     * PlayerInfo id.
     * @member {string} id
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.id = "";

    /**
     * PlayerInfo sex.
     * @member {number} sex
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.sex = 0;

    /**
     * PlayerInfo name.
     * @member {string} name
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.name = "";

    /**
     * PlayerInfo headUrl.
     * @member {string} headUrl
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.headUrl = "";

    /**
     * PlayerInfo vip.
     * @member {number} vip
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.vip = 0;

    /**
     * PlayerInfo isJudge.
     * @member {boolean} isJudge
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isJudge = false;

    /**
     * PlayerInfo gold.
     * @member {number} gold
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.gold = 0;

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
        w.uint32(8).int32(m.pos);
        w.uint32(18).string(m.id);
        w.uint32(24).int32(m.sex);
        w.uint32(34).string(m.name);
        w.uint32(42).string(m.headUrl);
        w.uint32(48).int32(m.vip);
        w.uint32(56).bool(m.isJudge);
        w.uint32(64).int32(m.gold);
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
                m.pos = r.int32();
                break;
            case 2:
                m.id = r.string();
                break;
            case 3:
                m.sex = r.int32();
                break;
            case 4:
                m.name = r.string();
                break;
            case 5:
                m.headUrl = r.string();
                break;
            case 6:
                m.vip = r.int32();
                break;
            case 7:
                m.isJudge = r.bool();
                break;
            case 8:
                m.gold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("sex"))
            throw $util.ProtocolError("missing required 'sex'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("headUrl"))
            throw $util.ProtocolError("missing required 'headUrl'", { instance: m });
        if (!m.hasOwnProperty("vip"))
            throw $util.ProtocolError("missing required 'vip'", { instance: m });
        if (!m.hasOwnProperty("isJudge"))
            throw $util.ProtocolError("missing required 'isJudge'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return PlayerInfo;
})();

$root.PlayerStatus = (function() {

    /**
     * Properties of a PlayerStatus.
     * @exports IPlayerStatus
     * @interface IPlayerStatus
     * @property {string} playerId PlayerStatus playerId
     * @property {number} status PlayerStatus status
     */

    /**
     * Constructs a new PlayerStatus.
     * @exports PlayerStatus
     * @classdesc Represents a PlayerStatus.
     * @implements IPlayerStatus
     * @constructor
     * @param {IPlayerStatus=} [p] Properties to set
     */
    function PlayerStatus(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerStatus playerId.
     * @member {string} playerId
     * @memberof PlayerStatus
     * @instance
     */
    PlayerStatus.prototype.playerId = "";

    /**
     * PlayerStatus status.
     * @member {number} status
     * @memberof PlayerStatus
     * @instance
     */
    PlayerStatus.prototype.status = 0;

    /**
     * Creates a new PlayerStatus instance using the specified properties.
     * @function create
     * @memberof PlayerStatus
     * @static
     * @param {IPlayerStatus=} [properties] Properties to set
     * @returns {PlayerStatus} PlayerStatus instance
     */
    PlayerStatus.create = function create(properties) {
        return new PlayerStatus(properties);
    };

    /**
     * Encodes the specified PlayerStatus message. Does not implicitly {@link PlayerStatus.verify|verify} messages.
     * @function encode
     * @memberof PlayerStatus
     * @static
     * @param {IPlayerStatus} m PlayerStatus message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerStatus.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.status);
        return w;
    };

    /**
     * Decodes a PlayerStatus message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerStatus} PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerStatus.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerStatus();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.status = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    return PlayerStatus;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {string} name RoomInfo name
     * @property {number} score RoomInfo score
     * @property {number} playerCnt RoomInfo playerCnt
     * @property {Array.<IPlayerInfo>|null} [playerInfo] RoomInfo playerInfo
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
        this.playerInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomInfo name.
     * @member {string} name
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.name = "";

    /**
     * RoomInfo score.
     * @member {number} score
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.score = 0;

    /**
     * RoomInfo playerCnt.
     * @member {number} playerCnt
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.playerCnt = 0;

    /**
     * RoomInfo playerInfo.
     * @member {Array.<IPlayerInfo>} playerInfo
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.playerInfo = $util.emptyArray;

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
        w.uint32(10).string(m.name);
        w.uint32(16).int32(m.score);
        w.uint32(24).int32(m.playerCnt);
        if (m.playerInfo != null && m.playerInfo.length) {
            for (var i = 0; i < m.playerInfo.length; ++i)
                $root.PlayerInfo.encode(m.playerInfo[i], w.uint32(34).fork()).ldelim();
        }
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
                m.name = r.string();
                break;
            case 2:
                m.score = r.int32();
                break;
            case 3:
                m.playerCnt = r.int32();
                break;
            case 4:
                if (!(m.playerInfo && m.playerInfo.length))
                    m.playerInfo = [];
                m.playerInfo.push($root.PlayerInfo.decode(r, r.uint32()));
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
        if (!m.hasOwnProperty("playerCnt"))
            throw $util.ProtocolError("missing required 'playerCnt'", { instance: m });
        return m;
    };

    return RoomInfo;
})();

$root.TingGroupInfo = (function() {

    /**
     * Properties of a TingGroupInfo.
     * @exports ITingGroupInfo
     * @interface ITingGroupInfo
     * @property {number} num TingGroupInfo num
     * @property {number|null} [id] TingGroupInfo id
     * @property {number|null} [fan] TingGroupInfo fan
     */

    /**
     * Constructs a new TingGroupInfo.
     * @exports TingGroupInfo
     * @classdesc Represents a TingGroupInfo.
     * @implements ITingGroupInfo
     * @constructor
     * @param {ITingGroupInfo=} [p] Properties to set
     */
    function TingGroupInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TingGroupInfo num.
     * @member {number} num
     * @memberof TingGroupInfo
     * @instance
     */
    TingGroupInfo.prototype.num = 0;

    /**
     * TingGroupInfo id.
     * @member {number} id
     * @memberof TingGroupInfo
     * @instance
     */
    TingGroupInfo.prototype.id = 0;

    /**
     * TingGroupInfo fan.
     * @member {number} fan
     * @memberof TingGroupInfo
     * @instance
     */
    TingGroupInfo.prototype.fan = 0;

    /**
     * Creates a new TingGroupInfo instance using the specified properties.
     * @function create
     * @memberof TingGroupInfo
     * @static
     * @param {ITingGroupInfo=} [properties] Properties to set
     * @returns {TingGroupInfo} TingGroupInfo instance
     */
    TingGroupInfo.create = function create(properties) {
        return new TingGroupInfo(properties);
    };

    /**
     * Encodes the specified TingGroupInfo message. Does not implicitly {@link TingGroupInfo.verify|verify} messages.
     * @function encode
     * @memberof TingGroupInfo
     * @static
     * @param {ITingGroupInfo} m TingGroupInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TingGroupInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.num);
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(16).int32(m.id);
        if (m.fan != null && m.hasOwnProperty("fan"))
            w.uint32(24).int32(m.fan);
        return w;
    };

    /**
     * Decodes a TingGroupInfo message from the specified reader or buffer.
     * @function decode
     * @memberof TingGroupInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TingGroupInfo} TingGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TingGroupInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TingGroupInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.num = r.int32();
                break;
            case 2:
                m.id = r.int32();
                break;
            case 3:
                m.fan = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    return TingGroupInfo;
})();

$root.SuggestTingData = (function() {

    /**
     * Properties of a SuggestTingData.
     * @exports ISuggestTingData
     * @interface ISuggestTingData
     * @property {number} canPutCards SuggestTingData canPutCards
     * @property {Array.<ITingGroupInfo>|null} [tingCard] SuggestTingData tingCard
     */

    /**
     * Constructs a new SuggestTingData.
     * @exports SuggestTingData
     * @classdesc Represents a SuggestTingData.
     * @implements ISuggestTingData
     * @constructor
     * @param {ISuggestTingData=} [p] Properties to set
     */
    function SuggestTingData(p) {
        this.tingCard = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SuggestTingData canPutCards.
     * @member {number} canPutCards
     * @memberof SuggestTingData
     * @instance
     */
    SuggestTingData.prototype.canPutCards = 0;

    /**
     * SuggestTingData tingCard.
     * @member {Array.<ITingGroupInfo>} tingCard
     * @memberof SuggestTingData
     * @instance
     */
    SuggestTingData.prototype.tingCard = $util.emptyArray;

    /**
     * Creates a new SuggestTingData instance using the specified properties.
     * @function create
     * @memberof SuggestTingData
     * @static
     * @param {ISuggestTingData=} [properties] Properties to set
     * @returns {SuggestTingData} SuggestTingData instance
     */
    SuggestTingData.create = function create(properties) {
        return new SuggestTingData(properties);
    };

    /**
     * Encodes the specified SuggestTingData message. Does not implicitly {@link SuggestTingData.verify|verify} messages.
     * @function encode
     * @memberof SuggestTingData
     * @static
     * @param {ISuggestTingData} m SuggestTingData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SuggestTingData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.canPutCards);
        if (m.tingCard != null && m.tingCard.length) {
            for (var i = 0; i < m.tingCard.length; ++i)
                $root.TingGroupInfo.encode(m.tingCard[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SuggestTingData message from the specified reader or buffer.
     * @function decode
     * @memberof SuggestTingData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SuggestTingData} SuggestTingData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SuggestTingData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SuggestTingData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.canPutCards = r.int32();
                break;
            case 2:
                if (!(m.tingCard && m.tingCard.length))
                    m.tingCard = [];
                m.tingCard.push($root.TingGroupInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("canPutCards"))
            throw $util.ProtocolError("missing required 'canPutCards'", { instance: m });
        return m;
    };

    return SuggestTingData;
})();

$root.CardGroupInfo = (function() {

    /**
     * Properties of a CardGroupInfo.
     * @exports ICardGroupInfo
     * @interface ICardGroupInfo
     * @property {number|null} [id] CardGroupInfo id
     * @property {string|null} [uId] CardGroupInfo uId
     * @property {number|null} [type] CardGroupInfo type
     * @property {Array.<number>|null} [cards] CardGroupInfo cards
     * @property {string|null} [fromId] CardGroupInfo fromId
     * @property {number|null} [fromCardId] CardGroupInfo fromCardId
     */

    /**
     * Constructs a new CardGroupInfo.
     * @exports CardGroupInfo
     * @classdesc Represents a CardGroupInfo.
     * @implements ICardGroupInfo
     * @constructor
     * @param {ICardGroupInfo=} [p] Properties to set
     */
    function CardGroupInfo(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CardGroupInfo id.
     * @member {number} id
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.id = 0;

    /**
     * CardGroupInfo uId.
     * @member {string} uId
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.uId = "";

    /**
     * CardGroupInfo type.
     * @member {number} type
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.type = 0;

    /**
     * CardGroupInfo cards.
     * @member {Array.<number>} cards
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.cards = $util.emptyArray;

    /**
     * CardGroupInfo fromId.
     * @member {string} fromId
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.fromId = "";

    /**
     * CardGroupInfo fromCardId.
     * @member {number} fromCardId
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.fromCardId = 0;

    /**
     * Creates a new CardGroupInfo instance using the specified properties.
     * @function create
     * @memberof CardGroupInfo
     * @static
     * @param {ICardGroupInfo=} [properties] Properties to set
     * @returns {CardGroupInfo} CardGroupInfo instance
     */
    CardGroupInfo.create = function create(properties) {
        return new CardGroupInfo(properties);
    };

    /**
     * Encodes the specified CardGroupInfo message. Does not implicitly {@link CardGroupInfo.verify|verify} messages.
     * @function encode
     * @memberof CardGroupInfo
     * @static
     * @param {ICardGroupInfo} m CardGroupInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardGroupInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).int32(m.id);
        if (m.uId != null && m.hasOwnProperty("uId"))
            w.uint32(18).string(m.uId);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(24).int32(m.type);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                w.uint32(32).int32(m.cards[i]);
        }
        if (m.fromId != null && m.hasOwnProperty("fromId"))
            w.uint32(42).string(m.fromId);
        if (m.fromCardId != null && m.hasOwnProperty("fromCardId"))
            w.uint32(48).int32(m.fromCardId);
        return w;
    };

    /**
     * Decodes a CardGroupInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CardGroupInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CardGroupInfo} CardGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardGroupInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CardGroupInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
                break;
            case 2:
                m.uId = r.string();
                break;
            case 3:
                m.type = r.int32();
                break;
            case 4:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.cards.push(r.int32());
                } else
                    m.cards.push(r.int32());
                break;
            case 5:
                m.fromId = r.string();
                break;
            case 6:
                m.fromCardId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CardGroupInfo;
})();

$root.RoomPlayerCardInfo = (function() {

    /**
     * Properties of a RoomPlayerCardInfo.
     * @exports IRoomPlayerCardInfo
     * @interface IRoomPlayerCardInfo
     * @property {string} uId RoomPlayerCardInfo uId
     * @property {Array.<ITingGroupInfo>|null} [tingInfo] RoomPlayerCardInfo tingInfo
     * @property {Array.<number>|null} [mingIds] RoomPlayerCardInfo mingIds
     * @property {number|null} [handCnt] RoomPlayerCardInfo handCnt
     * @property {Array.<number>|null} [husIds] RoomPlayerCardInfo husIds
     * @property {Array.<number>|null} [puts] RoomPlayerCardInfo puts
     * @property {boolean} isMing RoomPlayerCardInfo isMing
     * @property {Array.<ICardGroupInfo>|null} [eats] RoomPlayerCardInfo eats
     * @property {number} cardId RoomPlayerCardInfo cardId
     */

    /**
     * Constructs a new RoomPlayerCardInfo.
     * @exports RoomPlayerCardInfo
     * @classdesc Represents a RoomPlayerCardInfo.
     * @implements IRoomPlayerCardInfo
     * @constructor
     * @param {IRoomPlayerCardInfo=} [p] Properties to set
     */
    function RoomPlayerCardInfo(p) {
        this.tingInfo = [];
        this.mingIds = [];
        this.husIds = [];
        this.puts = [];
        this.eats = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomPlayerCardInfo uId.
     * @member {string} uId
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.uId = "";

    /**
     * RoomPlayerCardInfo tingInfo.
     * @member {Array.<ITingGroupInfo>} tingInfo
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.tingInfo = $util.emptyArray;

    /**
     * RoomPlayerCardInfo mingIds.
     * @member {Array.<number>} mingIds
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.mingIds = $util.emptyArray;

    /**
     * RoomPlayerCardInfo handCnt.
     * @member {number} handCnt
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.handCnt = 0;

    /**
     * RoomPlayerCardInfo husIds.
     * @member {Array.<number>} husIds
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.husIds = $util.emptyArray;

    /**
     * RoomPlayerCardInfo puts.
     * @member {Array.<number>} puts
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.puts = $util.emptyArray;

    /**
     * RoomPlayerCardInfo isMing.
     * @member {boolean} isMing
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.isMing = false;

    /**
     * RoomPlayerCardInfo eats.
     * @member {Array.<ICardGroupInfo>} eats
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.eats = $util.emptyArray;

    /**
     * RoomPlayerCardInfo cardId.
     * @member {number} cardId
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.cardId = 0;

    /**
     * Creates a new RoomPlayerCardInfo instance using the specified properties.
     * @function create
     * @memberof RoomPlayerCardInfo
     * @static
     * @param {IRoomPlayerCardInfo=} [properties] Properties to set
     * @returns {RoomPlayerCardInfo} RoomPlayerCardInfo instance
     */
    RoomPlayerCardInfo.create = function create(properties) {
        return new RoomPlayerCardInfo(properties);
    };

    /**
     * Encodes the specified RoomPlayerCardInfo message. Does not implicitly {@link RoomPlayerCardInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomPlayerCardInfo
     * @static
     * @param {IRoomPlayerCardInfo} m RoomPlayerCardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomPlayerCardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        if (m.tingInfo != null && m.tingInfo.length) {
            for (var i = 0; i < m.tingInfo.length; ++i)
                $root.TingGroupInfo.encode(m.tingInfo[i], w.uint32(18).fork()).ldelim();
        }
        if (m.mingIds != null && m.mingIds.length) {
            for (var i = 0; i < m.mingIds.length; ++i)
                w.uint32(24).int32(m.mingIds[i]);
        }
        if (m.handCnt != null && m.hasOwnProperty("handCnt"))
            w.uint32(32).int32(m.handCnt);
        if (m.husIds != null && m.husIds.length) {
            for (var i = 0; i < m.husIds.length; ++i)
                w.uint32(40).int32(m.husIds[i]);
        }
        if (m.puts != null && m.puts.length) {
            for (var i = 0; i < m.puts.length; ++i)
                w.uint32(48).int32(m.puts[i]);
        }
        w.uint32(56).bool(m.isMing);
        if (m.eats != null && m.eats.length) {
            for (var i = 0; i < m.eats.length; ++i)
                $root.CardGroupInfo.encode(m.eats[i], w.uint32(66).fork()).ldelim();
        }
        w.uint32(72).int32(m.cardId);
        return w;
    };

    /**
     * Decodes a RoomPlayerCardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomPlayerCardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomPlayerCardInfo} RoomPlayerCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomPlayerCardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPlayerCardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                if (!(m.tingInfo && m.tingInfo.length))
                    m.tingInfo = [];
                m.tingInfo.push($root.TingGroupInfo.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.mingIds && m.mingIds.length))
                    m.mingIds = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.mingIds.push(r.int32());
                } else
                    m.mingIds.push(r.int32());
                break;
            case 4:
                m.handCnt = r.int32();
                break;
            case 5:
                if (!(m.husIds && m.husIds.length))
                    m.husIds = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.husIds.push(r.int32());
                } else
                    m.husIds.push(r.int32());
                break;
            case 6:
                if (!(m.puts && m.puts.length))
                    m.puts = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.puts.push(r.int32());
                } else
                    m.puts.push(r.int32());
                break;
            case 7:
                m.isMing = r.bool();
                break;
            case 8:
                if (!(m.eats && m.eats.length))
                    m.eats = [];
                m.eats.push($root.CardGroupInfo.decode(r, r.uint32()));
                break;
            case 9:
                m.cardId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("isMing"))
            throw $util.ProtocolError("missing required 'isMing'", { instance: m });
        if (!m.hasOwnProperty("cardId"))
            throw $util.ProtocolError("missing required 'cardId'", { instance: m });
        return m;
    };

    return RoomPlayerCardInfo;
})();

$root.SynStandCardsData = (function() {

    /**
     * Properties of a SynStandCardsData.
     * @exports ISynStandCardsData
     * @interface ISynStandCardsData
     * @property {string} id SynStandCardsData id
     * @property {Array.<number>|null} [addCards] SynStandCardsData addCards
     * @property {Array.<number>|null} [deleteCards] SynStandCardsData deleteCards
     */

    /**
     * Constructs a new SynStandCardsData.
     * @exports SynStandCardsData
     * @classdesc Represents a SynStandCardsData.
     * @implements ISynStandCardsData
     * @constructor
     * @param {ISynStandCardsData=} [p] Properties to set
     */
    function SynStandCardsData(p) {
        this.addCards = [];
        this.deleteCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SynStandCardsData id.
     * @member {string} id
     * @memberof SynStandCardsData
     * @instance
     */
    SynStandCardsData.prototype.id = "";

    /**
     * SynStandCardsData addCards.
     * @member {Array.<number>} addCards
     * @memberof SynStandCardsData
     * @instance
     */
    SynStandCardsData.prototype.addCards = $util.emptyArray;

    /**
     * SynStandCardsData deleteCards.
     * @member {Array.<number>} deleteCards
     * @memberof SynStandCardsData
     * @instance
     */
    SynStandCardsData.prototype.deleteCards = $util.emptyArray;

    /**
     * Creates a new SynStandCardsData instance using the specified properties.
     * @function create
     * @memberof SynStandCardsData
     * @static
     * @param {ISynStandCardsData=} [properties] Properties to set
     * @returns {SynStandCardsData} SynStandCardsData instance
     */
    SynStandCardsData.create = function create(properties) {
        return new SynStandCardsData(properties);
    };

    /**
     * Encodes the specified SynStandCardsData message. Does not implicitly {@link SynStandCardsData.verify|verify} messages.
     * @function encode
     * @memberof SynStandCardsData
     * @static
     * @param {ISynStandCardsData} m SynStandCardsData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SynStandCardsData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.id);
        if (m.addCards != null && m.addCards.length) {
            for (var i = 0; i < m.addCards.length; ++i)
                w.uint32(16).int32(m.addCards[i]);
        }
        if (m.deleteCards != null && m.deleteCards.length) {
            for (var i = 0; i < m.deleteCards.length; ++i)
                w.uint32(24).int32(m.deleteCards[i]);
        }
        return w;
    };

    /**
     * Decodes a SynStandCardsData message from the specified reader or buffer.
     * @function decode
     * @memberof SynStandCardsData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SynStandCardsData} SynStandCardsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SynStandCardsData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SynStandCardsData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                if (!(m.addCards && m.addCards.length))
                    m.addCards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.addCards.push(r.int32());
                } else
                    m.addCards.push(r.int32());
                break;
            case 3:
                if (!(m.deleteCards && m.deleteCards.length))
                    m.deleteCards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.deleteCards.push(r.int32());
                } else
                    m.deleteCards.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    return SynStandCardsData;
})();

$root.BuHuaPlayer = (function() {

    /**
     * Properties of a BuHuaPlayer.
     * @exports IBuHuaPlayer
     * @interface IBuHuaPlayer
     * @property {string} uId BuHuaPlayer uId
     * @property {Array.<number>|null} [cards] BuHuaPlayer cards
     * @property {Array.<number>|null} [huaCards] BuHuaPlayer huaCards
     */

    /**
     * Constructs a new BuHuaPlayer.
     * @exports BuHuaPlayer
     * @classdesc Represents a BuHuaPlayer.
     * @implements IBuHuaPlayer
     * @constructor
     * @param {IBuHuaPlayer=} [p] Properties to set
     */
    function BuHuaPlayer(p) {
        this.cards = [];
        this.huaCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BuHuaPlayer uId.
     * @member {string} uId
     * @memberof BuHuaPlayer
     * @instance
     */
    BuHuaPlayer.prototype.uId = "";

    /**
     * BuHuaPlayer cards.
     * @member {Array.<number>} cards
     * @memberof BuHuaPlayer
     * @instance
     */
    BuHuaPlayer.prototype.cards = $util.emptyArray;

    /**
     * BuHuaPlayer huaCards.
     * @member {Array.<number>} huaCards
     * @memberof BuHuaPlayer
     * @instance
     */
    BuHuaPlayer.prototype.huaCards = $util.emptyArray;

    /**
     * Creates a new BuHuaPlayer instance using the specified properties.
     * @function create
     * @memberof BuHuaPlayer
     * @static
     * @param {IBuHuaPlayer=} [properties] Properties to set
     * @returns {BuHuaPlayer} BuHuaPlayer instance
     */
    BuHuaPlayer.create = function create(properties) {
        return new BuHuaPlayer(properties);
    };

    /**
     * Encodes the specified BuHuaPlayer message. Does not implicitly {@link BuHuaPlayer.verify|verify} messages.
     * @function encode
     * @memberof BuHuaPlayer
     * @static
     * @param {IBuHuaPlayer} m BuHuaPlayer message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BuHuaPlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                w.uint32(16).int32(m.cards[i]);
        }
        if (m.huaCards != null && m.huaCards.length) {
            for (var i = 0; i < m.huaCards.length; ++i)
                w.uint32(24).int32(m.huaCards[i]);
        }
        return w;
    };

    /**
     * Decodes a BuHuaPlayer message from the specified reader or buffer.
     * @function decode
     * @memberof BuHuaPlayer
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BuHuaPlayer} BuHuaPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BuHuaPlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BuHuaPlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.cards.push(r.int32());
                } else
                    m.cards.push(r.int32());
                break;
            case 3:
                if (!(m.huaCards && m.huaCards.length))
                    m.huaCards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.huaCards.push(r.int32());
                } else
                    m.huaCards.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        return m;
    };

    return BuHuaPlayer;
})();

$root.BuHuaNum = (function() {

    /**
     * Properties of a BuHuaNum.
     * @exports IBuHuaNum
     * @interface IBuHuaNum
     * @property {Array.<IBuHuaPlayer>|null} [buahuaPlayers] BuHuaNum buahuaPlayers
     */

    /**
     * Constructs a new BuHuaNum.
     * @exports BuHuaNum
     * @classdesc Represents a BuHuaNum.
     * @implements IBuHuaNum
     * @constructor
     * @param {IBuHuaNum=} [p] Properties to set
     */
    function BuHuaNum(p) {
        this.buahuaPlayers = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BuHuaNum buahuaPlayers.
     * @member {Array.<IBuHuaPlayer>} buahuaPlayers
     * @memberof BuHuaNum
     * @instance
     */
    BuHuaNum.prototype.buahuaPlayers = $util.emptyArray;

    /**
     * Creates a new BuHuaNum instance using the specified properties.
     * @function create
     * @memberof BuHuaNum
     * @static
     * @param {IBuHuaNum=} [properties] Properties to set
     * @returns {BuHuaNum} BuHuaNum instance
     */
    BuHuaNum.create = function create(properties) {
        return new BuHuaNum(properties);
    };

    /**
     * Encodes the specified BuHuaNum message. Does not implicitly {@link BuHuaNum.verify|verify} messages.
     * @function encode
     * @memberof BuHuaNum
     * @static
     * @param {IBuHuaNum} m BuHuaNum message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BuHuaNum.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.buahuaPlayers != null && m.buahuaPlayers.length) {
            for (var i = 0; i < m.buahuaPlayers.length; ++i)
                $root.BuHuaPlayer.encode(m.buahuaPlayers[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BuHuaNum message from the specified reader or buffer.
     * @function decode
     * @memberof BuHuaNum
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BuHuaNum} BuHuaNum
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BuHuaNum.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BuHuaNum();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.buahuaPlayers && m.buahuaPlayers.length))
                    m.buahuaPlayers = [];
                m.buahuaPlayers.push($root.BuHuaPlayer.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BuHuaNum;
})();

$root.GuoHuInfo = (function() {

    /**
     * Properties of a GuoHuInfo.
     * @exports IGuoHuInfo
     * @interface IGuoHuInfo
     * @property {string} uId GuoHuInfo uId
     * @property {number} counts GuoHuInfo counts
     */

    /**
     * Constructs a new GuoHuInfo.
     * @exports GuoHuInfo
     * @classdesc Represents a GuoHuInfo.
     * @implements IGuoHuInfo
     * @constructor
     * @param {IGuoHuInfo=} [p] Properties to set
     */
    function GuoHuInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GuoHuInfo uId.
     * @member {string} uId
     * @memberof GuoHuInfo
     * @instance
     */
    GuoHuInfo.prototype.uId = "";

    /**
     * GuoHuInfo counts.
     * @member {number} counts
     * @memberof GuoHuInfo
     * @instance
     */
    GuoHuInfo.prototype.counts = 0;

    /**
     * Creates a new GuoHuInfo instance using the specified properties.
     * @function create
     * @memberof GuoHuInfo
     * @static
     * @param {IGuoHuInfo=} [properties] Properties to set
     * @returns {GuoHuInfo} GuoHuInfo instance
     */
    GuoHuInfo.create = function create(properties) {
        return new GuoHuInfo(properties);
    };

    /**
     * Encodes the specified GuoHuInfo message. Does not implicitly {@link GuoHuInfo.verify|verify} messages.
     * @function encode
     * @memberof GuoHuInfo
     * @static
     * @param {IGuoHuInfo} m GuoHuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuoHuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).int32(m.counts);
        return w;
    };

    /**
     * Decodes a GuoHuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GuoHuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GuoHuInfo} GuoHuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuoHuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GuoHuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.counts = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("counts"))
            throw $util.ProtocolError("missing required 'counts'", { instance: m });
        return m;
    };

    return GuoHuInfo;
})();

$root.TingInfo = (function() {

    /**
     * Properties of a TingInfo.
     * @exports ITingInfo
     * @interface ITingInfo
     * @property {string} uId TingInfo uId
     * @property {boolean} isTing TingInfo isTing
     */

    /**
     * Constructs a new TingInfo.
     * @exports TingInfo
     * @classdesc Represents a TingInfo.
     * @implements ITingInfo
     * @constructor
     * @param {ITingInfo=} [p] Properties to set
     */
    function TingInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TingInfo uId.
     * @member {string} uId
     * @memberof TingInfo
     * @instance
     */
    TingInfo.prototype.uId = "";

    /**
     * TingInfo isTing.
     * @member {boolean} isTing
     * @memberof TingInfo
     * @instance
     */
    TingInfo.prototype.isTing = false;

    /**
     * Creates a new TingInfo instance using the specified properties.
     * @function create
     * @memberof TingInfo
     * @static
     * @param {ITingInfo=} [properties] Properties to set
     * @returns {TingInfo} TingInfo instance
     */
    TingInfo.create = function create(properties) {
        return new TingInfo(properties);
    };

    /**
     * Encodes the specified TingInfo message. Does not implicitly {@link TingInfo.verify|verify} messages.
     * @function encode
     * @memberof TingInfo
     * @static
     * @param {ITingInfo} m TingInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TingInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).bool(m.isTing);
        return w;
    };

    /**
     * Decodes a TingInfo message from the specified reader or buffer.
     * @function decode
     * @memberof TingInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TingInfo} TingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TingInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TingInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.isTing = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("isTing"))
            throw $util.ProtocolError("missing required 'isTing'", { instance: m });
        return m;
    };

    return TingInfo;
})();

$root.MenuInfo = (function() {

    /**
     * Properties of a MenuInfo.
     * @exports IMenuInfo
     * @interface IMenuInfo
     * @property {number} types MenuInfo types
     * @property {boolean|null} [isShow] MenuInfo isShow
     * @property {Array.<ICardGroupInfo>|null} [gangInfo] MenuInfo gangInfo
     * @property {Array.<ICardGroupInfo>|null} [chiInfo] MenuInfo chiInfo
     * @property {ICardGroupInfo|null} [pengInfo] MenuInfo pengInfo
     * @property {Array.<ISuggestTingData>|null} [suggestTing] MenuInfo suggestTing
     */

    /**
     * Constructs a new MenuInfo.
     * @exports MenuInfo
     * @classdesc Represents a MenuInfo.
     * @implements IMenuInfo
     * @constructor
     * @param {IMenuInfo=} [p] Properties to set
     */
    function MenuInfo(p) {
        this.gangInfo = [];
        this.chiInfo = [];
        this.suggestTing = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MenuInfo types.
     * @member {number} types
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.types = 0;

    /**
     * MenuInfo isShow.
     * @member {boolean} isShow
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.isShow = false;

    /**
     * MenuInfo gangInfo.
     * @member {Array.<ICardGroupInfo>} gangInfo
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.gangInfo = $util.emptyArray;

    /**
     * MenuInfo chiInfo.
     * @member {Array.<ICardGroupInfo>} chiInfo
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.chiInfo = $util.emptyArray;

    /**
     * MenuInfo pengInfo.
     * @member {ICardGroupInfo|null|undefined} pengInfo
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.pengInfo = null;

    /**
     * MenuInfo suggestTing.
     * @member {Array.<ISuggestTingData>} suggestTing
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.suggestTing = $util.emptyArray;

    /**
     * Creates a new MenuInfo instance using the specified properties.
     * @function create
     * @memberof MenuInfo
     * @static
     * @param {IMenuInfo=} [properties] Properties to set
     * @returns {MenuInfo} MenuInfo instance
     */
    MenuInfo.create = function create(properties) {
        return new MenuInfo(properties);
    };

    /**
     * Encodes the specified MenuInfo message. Does not implicitly {@link MenuInfo.verify|verify} messages.
     * @function encode
     * @memberof MenuInfo
     * @static
     * @param {IMenuInfo} m MenuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MenuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.types);
        if (m.isShow != null && m.hasOwnProperty("isShow"))
            w.uint32(16).bool(m.isShow);
        if (m.gangInfo != null && m.gangInfo.length) {
            for (var i = 0; i < m.gangInfo.length; ++i)
                $root.CardGroupInfo.encode(m.gangInfo[i], w.uint32(26).fork()).ldelim();
        }
        if (m.chiInfo != null && m.chiInfo.length) {
            for (var i = 0; i < m.chiInfo.length; ++i)
                $root.CardGroupInfo.encode(m.chiInfo[i], w.uint32(34).fork()).ldelim();
        }
        if (m.pengInfo != null && m.hasOwnProperty("pengInfo"))
            $root.CardGroupInfo.encode(m.pengInfo, w.uint32(42).fork()).ldelim();
        if (m.suggestTing != null && m.suggestTing.length) {
            for (var i = 0; i < m.suggestTing.length; ++i)
                $root.SuggestTingData.encode(m.suggestTing[i], w.uint32(50).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a MenuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MenuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MenuInfo} MenuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MenuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MenuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.types = r.int32();
                break;
            case 2:
                m.isShow = r.bool();
                break;
            case 3:
                if (!(m.gangInfo && m.gangInfo.length))
                    m.gangInfo = [];
                m.gangInfo.push($root.CardGroupInfo.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.chiInfo && m.chiInfo.length))
                    m.chiInfo = [];
                m.chiInfo.push($root.CardGroupInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.pengInfo = $root.CardGroupInfo.decode(r, r.uint32());
                break;
            case 6:
                if (!(m.suggestTing && m.suggestTing.length))
                    m.suggestTing = [];
                m.suggestTing.push($root.SuggestTingData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("types"))
            throw $util.ProtocolError("missing required 'types'", { instance: m });
        return m;
    };

    return MenuInfo;
})();

$root.RoundInfo = (function() {

    /**
     * Properties of a RoundInfo.
     * @exports IRoundInfo
     * @interface IRoundInfo
     * @property {string} fanName RoundInfo fanName
     * @property {number} fanCnt RoundInfo fanCnt
     */

    /**
     * Constructs a new RoundInfo.
     * @exports RoundInfo
     * @classdesc Represents a RoundInfo.
     * @implements IRoundInfo
     * @constructor
     * @param {IRoundInfo=} [p] Properties to set
     */
    function RoundInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoundInfo fanName.
     * @member {string} fanName
     * @memberof RoundInfo
     * @instance
     */
    RoundInfo.prototype.fanName = "";

    /**
     * RoundInfo fanCnt.
     * @member {number} fanCnt
     * @memberof RoundInfo
     * @instance
     */
    RoundInfo.prototype.fanCnt = 0;

    /**
     * Creates a new RoundInfo instance using the specified properties.
     * @function create
     * @memberof RoundInfo
     * @static
     * @param {IRoundInfo=} [properties] Properties to set
     * @returns {RoundInfo} RoundInfo instance
     */
    RoundInfo.create = function create(properties) {
        return new RoundInfo(properties);
    };

    /**
     * Encodes the specified RoundInfo message. Does not implicitly {@link RoundInfo.verify|verify} messages.
     * @function encode
     * @memberof RoundInfo
     * @static
     * @param {IRoundInfo} m RoundInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoundInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.fanName);
        w.uint32(16).int32(m.fanCnt);
        return w;
    };

    /**
     * Decodes a RoundInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoundInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoundInfo} RoundInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoundInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoundInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.fanName = r.string();
                break;
            case 2:
                m.fanCnt = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("fanName"))
            throw $util.ProtocolError("missing required 'fanName'", { instance: m });
        if (!m.hasOwnProperty("fanCnt"))
            throw $util.ProtocolError("missing required 'fanCnt'", { instance: m });
        return m;
    };

    return RoundInfo;
})();

$root.MaInfo = (function() {

    /**
     * Properties of a MaInfo.
     * @exports IMaInfo
     * @interface IMaInfo
     * @property {number} card MaInfo card
     * @property {number} type MaInfo type
     */

    /**
     * Constructs a new MaInfo.
     * @exports MaInfo
     * @classdesc Represents a MaInfo.
     * @implements IMaInfo
     * @constructor
     * @param {IMaInfo=} [p] Properties to set
     */
    function MaInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MaInfo card.
     * @member {number} card
     * @memberof MaInfo
     * @instance
     */
    MaInfo.prototype.card = 0;

    /**
     * MaInfo type.
     * @member {number} type
     * @memberof MaInfo
     * @instance
     */
    MaInfo.prototype.type = 0;

    /**
     * Creates a new MaInfo instance using the specified properties.
     * @function create
     * @memberof MaInfo
     * @static
     * @param {IMaInfo=} [properties] Properties to set
     * @returns {MaInfo} MaInfo instance
     */
    MaInfo.create = function create(properties) {
        return new MaInfo(properties);
    };

    /**
     * Encodes the specified MaInfo message. Does not implicitly {@link MaInfo.verify|verify} messages.
     * @function encode
     * @memberof MaInfo
     * @static
     * @param {IMaInfo} m MaInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.card);
        w.uint32(16).int32(m.type);
        return w;
    };

    /**
     * Decodes a MaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MaInfo} MaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MaInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.card = r.int32();
                break;
            case 2:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("card"))
            throw $util.ProtocolError("missing required 'card'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    return MaInfo;
})();

$root.GuangDongLaiziInfo = (function() {

    /**
     * Properties of a GuangDongLaiziInfo.
     * @exports IGuangDongLaiziInfo
     * @interface IGuangDongLaiziInfo
     * @property {number|null} [turnCard] GuangDongLaiziInfo turnCard
     * @property {number} laiziCard GuangDongLaiziInfo laiziCard
     */

    /**
     * Constructs a new GuangDongLaiziInfo.
     * @exports GuangDongLaiziInfo
     * @classdesc Represents a GuangDongLaiziInfo.
     * @implements IGuangDongLaiziInfo
     * @constructor
     * @param {IGuangDongLaiziInfo=} [p] Properties to set
     */
    function GuangDongLaiziInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GuangDongLaiziInfo turnCard.
     * @member {number} turnCard
     * @memberof GuangDongLaiziInfo
     * @instance
     */
    GuangDongLaiziInfo.prototype.turnCard = 0;

    /**
     * GuangDongLaiziInfo laiziCard.
     * @member {number} laiziCard
     * @memberof GuangDongLaiziInfo
     * @instance
     */
    GuangDongLaiziInfo.prototype.laiziCard = 0;

    /**
     * Creates a new GuangDongLaiziInfo instance using the specified properties.
     * @function create
     * @memberof GuangDongLaiziInfo
     * @static
     * @param {IGuangDongLaiziInfo=} [properties] Properties to set
     * @returns {GuangDongLaiziInfo} GuangDongLaiziInfo instance
     */
    GuangDongLaiziInfo.create = function create(properties) {
        return new GuangDongLaiziInfo(properties);
    };

    /**
     * Encodes the specified GuangDongLaiziInfo message. Does not implicitly {@link GuangDongLaiziInfo.verify|verify} messages.
     * @function encode
     * @memberof GuangDongLaiziInfo
     * @static
     * @param {IGuangDongLaiziInfo} m GuangDongLaiziInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuangDongLaiziInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.turnCard != null && m.hasOwnProperty("turnCard"))
            w.uint32(8).int32(m.turnCard);
        w.uint32(16).int32(m.laiziCard);
        return w;
    };

    /**
     * Decodes a GuangDongLaiziInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GuangDongLaiziInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GuangDongLaiziInfo} GuangDongLaiziInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuangDongLaiziInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GuangDongLaiziInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.turnCard = r.int32();
                break;
            case 2:
                m.laiziCard = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("laiziCard"))
            throw $util.ProtocolError("missing required 'laiziCard'", { instance: m });
        return m;
    };

    return GuangDongLaiziInfo;
})();

$root.FuzhouLaiziInfo = (function() {

    /**
     * Properties of a FuzhouLaiziInfo.
     * @exports IFuzhouLaiziInfo
     * @interface IFuzhouLaiziInfo
     * @property {number} goldCard FuzhouLaiziInfo goldCard
     */

    /**
     * Constructs a new FuzhouLaiziInfo.
     * @exports FuzhouLaiziInfo
     * @classdesc Represents a FuzhouLaiziInfo.
     * @implements IFuzhouLaiziInfo
     * @constructor
     * @param {IFuzhouLaiziInfo=} [p] Properties to set
     */
    function FuzhouLaiziInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FuzhouLaiziInfo goldCard.
     * @member {number} goldCard
     * @memberof FuzhouLaiziInfo
     * @instance
     */
    FuzhouLaiziInfo.prototype.goldCard = 0;

    /**
     * Creates a new FuzhouLaiziInfo instance using the specified properties.
     * @function create
     * @memberof FuzhouLaiziInfo
     * @static
     * @param {IFuzhouLaiziInfo=} [properties] Properties to set
     * @returns {FuzhouLaiziInfo} FuzhouLaiziInfo instance
     */
    FuzhouLaiziInfo.create = function create(properties) {
        return new FuzhouLaiziInfo(properties);
    };

    /**
     * Encodes the specified FuzhouLaiziInfo message. Does not implicitly {@link FuzhouLaiziInfo.verify|verify} messages.
     * @function encode
     * @memberof FuzhouLaiziInfo
     * @static
     * @param {IFuzhouLaiziInfo} m FuzhouLaiziInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FuzhouLaiziInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.goldCard);
        return w;
    };

    /**
     * Decodes a FuzhouLaiziInfo message from the specified reader or buffer.
     * @function decode
     * @memberof FuzhouLaiziInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FuzhouLaiziInfo} FuzhouLaiziInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FuzhouLaiziInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FuzhouLaiziInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.goldCard = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("goldCard"))
            throw $util.ProtocolError("missing required 'goldCard'", { instance: m });
        return m;
    };

    return FuzhouLaiziInfo;
})();

$root.MaCardInfo = (function() {

    /**
     * Properties of a MaCardInfo.
     * @exports IMaCardInfo
     * @interface IMaCardInfo
     * @property {string} uId MaCardInfo uId
     * @property {number} num MaCardInfo num
     */

    /**
     * Constructs a new MaCardInfo.
     * @exports MaCardInfo
     * @classdesc Represents a MaCardInfo.
     * @implements IMaCardInfo
     * @constructor
     * @param {IMaCardInfo=} [p] Properties to set
     */
    function MaCardInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MaCardInfo uId.
     * @member {string} uId
     * @memberof MaCardInfo
     * @instance
     */
    MaCardInfo.prototype.uId = "";

    /**
     * MaCardInfo num.
     * @member {number} num
     * @memberof MaCardInfo
     * @instance
     */
    MaCardInfo.prototype.num = 0;

    /**
     * Creates a new MaCardInfo instance using the specified properties.
     * @function create
     * @memberof MaCardInfo
     * @static
     * @param {IMaCardInfo=} [properties] Properties to set
     * @returns {MaCardInfo} MaCardInfo instance
     */
    MaCardInfo.create = function create(properties) {
        return new MaCardInfo(properties);
    };

    /**
     * Encodes the specified MaCardInfo message. Does not implicitly {@link MaCardInfo.verify|verify} messages.
     * @function encode
     * @memberof MaCardInfo
     * @static
     * @param {IMaCardInfo} m MaCardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MaCardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).int32(m.num);
        return w;
    };

    /**
     * Decodes a MaCardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MaCardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MaCardInfo} MaCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MaCardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MaCardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.num = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    return MaCardInfo;
})();

$root.PlayerMaInfo = (function() {

    /**
     * Properties of a PlayerMaInfo.
     * @exports IPlayerMaInfo
     * @interface IPlayerMaInfo
     * @property {string} uId PlayerMaInfo uId
     * @property {Array.<IMaInfo>|null} [maInfos] PlayerMaInfo maInfos
     */

    /**
     * Constructs a new PlayerMaInfo.
     * @exports PlayerMaInfo
     * @classdesc Represents a PlayerMaInfo.
     * @implements IPlayerMaInfo
     * @constructor
     * @param {IPlayerMaInfo=} [p] Properties to set
     */
    function PlayerMaInfo(p) {
        this.maInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerMaInfo uId.
     * @member {string} uId
     * @memberof PlayerMaInfo
     * @instance
     */
    PlayerMaInfo.prototype.uId = "";

    /**
     * PlayerMaInfo maInfos.
     * @member {Array.<IMaInfo>} maInfos
     * @memberof PlayerMaInfo
     * @instance
     */
    PlayerMaInfo.prototype.maInfos = $util.emptyArray;

    /**
     * Creates a new PlayerMaInfo instance using the specified properties.
     * @function create
     * @memberof PlayerMaInfo
     * @static
     * @param {IPlayerMaInfo=} [properties] Properties to set
     * @returns {PlayerMaInfo} PlayerMaInfo instance
     */
    PlayerMaInfo.create = function create(properties) {
        return new PlayerMaInfo(properties);
    };

    /**
     * Encodes the specified PlayerMaInfo message. Does not implicitly {@link PlayerMaInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerMaInfo
     * @static
     * @param {IPlayerMaInfo} m PlayerMaInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerMaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        if (m.maInfos != null && m.maInfos.length) {
            for (var i = 0; i < m.maInfos.length; ++i)
                $root.MaInfo.encode(m.maInfos[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PlayerMaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerMaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerMaInfo} PlayerMaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerMaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerMaInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                if (!(m.maInfos && m.maInfos.length))
                    m.maInfos = [];
                m.maInfos.push($root.MaInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        return m;
    };

    return PlayerMaInfo;
})();

$root.ChaHuaZhuInfo = (function() {

    /**
     * Properties of a ChaHuaZhuInfo.
     * @exports IChaHuaZhuInfo
     * @interface IChaHuaZhuInfo
     * @property {string} uId ChaHuaZhuInfo uId
     * @property {string} score ChaHuaZhuInfo score
     */

    /**
     * Constructs a new ChaHuaZhuInfo.
     * @exports ChaHuaZhuInfo
     * @classdesc Represents a ChaHuaZhuInfo.
     * @implements IChaHuaZhuInfo
     * @constructor
     * @param {IChaHuaZhuInfo=} [p] Properties to set
     */
    function ChaHuaZhuInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChaHuaZhuInfo uId.
     * @member {string} uId
     * @memberof ChaHuaZhuInfo
     * @instance
     */
    ChaHuaZhuInfo.prototype.uId = "";

    /**
     * ChaHuaZhuInfo score.
     * @member {string} score
     * @memberof ChaHuaZhuInfo
     * @instance
     */
    ChaHuaZhuInfo.prototype.score = "";

    /**
     * Creates a new ChaHuaZhuInfo instance using the specified properties.
     * @function create
     * @memberof ChaHuaZhuInfo
     * @static
     * @param {IChaHuaZhuInfo=} [properties] Properties to set
     * @returns {ChaHuaZhuInfo} ChaHuaZhuInfo instance
     */
    ChaHuaZhuInfo.create = function create(properties) {
        return new ChaHuaZhuInfo(properties);
    };

    /**
     * Encodes the specified ChaHuaZhuInfo message. Does not implicitly {@link ChaHuaZhuInfo.verify|verify} messages.
     * @function encode
     * @memberof ChaHuaZhuInfo
     * @static
     * @param {IChaHuaZhuInfo} m ChaHuaZhuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChaHuaZhuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(18).string(m.score);
        return w;
    };

    /**
     * Decodes a ChaHuaZhuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ChaHuaZhuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChaHuaZhuInfo} ChaHuaZhuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChaHuaZhuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChaHuaZhuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.score = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        return m;
    };

    return ChaHuaZhuInfo;
})();

$root.BeGangInfo = (function() {

    /**
     * Properties of a BeGangInfo.
     * @exports IBeGangInfo
     * @interface IBeGangInfo
     * @property {string} id BeGangInfo id
     * @property {string} gold BeGangInfo gold
     */

    /**
     * Constructs a new BeGangInfo.
     * @exports BeGangInfo
     * @classdesc Represents a BeGangInfo.
     * @implements IBeGangInfo
     * @constructor
     * @param {IBeGangInfo=} [p] Properties to set
     */
    function BeGangInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BeGangInfo id.
     * @member {string} id
     * @memberof BeGangInfo
     * @instance
     */
    BeGangInfo.prototype.id = "";

    /**
     * BeGangInfo gold.
     * @member {string} gold
     * @memberof BeGangInfo
     * @instance
     */
    BeGangInfo.prototype.gold = "";

    /**
     * Creates a new BeGangInfo instance using the specified properties.
     * @function create
     * @memberof BeGangInfo
     * @static
     * @param {IBeGangInfo=} [properties] Properties to set
     * @returns {BeGangInfo} BeGangInfo instance
     */
    BeGangInfo.create = function create(properties) {
        return new BeGangInfo(properties);
    };

    /**
     * Encodes the specified BeGangInfo message. Does not implicitly {@link BeGangInfo.verify|verify} messages.
     * @function encode
     * @memberof BeGangInfo
     * @static
     * @param {IBeGangInfo} m BeGangInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BeGangInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.id);
        w.uint32(18).string(m.gold);
        return w;
    };

    /**
     * Decodes a BeGangInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BeGangInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BeGangInfo} BeGangInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BeGangInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BeGangInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                m.gold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return BeGangInfo;
})();

$root.BeHuInfo = (function() {

    /**
     * Properties of a BeHuInfo.
     * @exports IBeHuInfo
     * @interface IBeHuInfo
     * @property {string} uId BeHuInfo uId
     * @property {string} loseGold BeHuInfo loseGold
     */

    /**
     * Constructs a new BeHuInfo.
     * @exports BeHuInfo
     * @classdesc Represents a BeHuInfo.
     * @implements IBeHuInfo
     * @constructor
     * @param {IBeHuInfo=} [p] Properties to set
     */
    function BeHuInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BeHuInfo uId.
     * @member {string} uId
     * @memberof BeHuInfo
     * @instance
     */
    BeHuInfo.prototype.uId = "";

    /**
     * BeHuInfo loseGold.
     * @member {string} loseGold
     * @memberof BeHuInfo
     * @instance
     */
    BeHuInfo.prototype.loseGold = "";

    /**
     * Creates a new BeHuInfo instance using the specified properties.
     * @function create
     * @memberof BeHuInfo
     * @static
     * @param {IBeHuInfo=} [properties] Properties to set
     * @returns {BeHuInfo} BeHuInfo instance
     */
    BeHuInfo.create = function create(properties) {
        return new BeHuInfo(properties);
    };

    /**
     * Encodes the specified BeHuInfo message. Does not implicitly {@link BeHuInfo.verify|verify} messages.
     * @function encode
     * @memberof BeHuInfo
     * @static
     * @param {IBeHuInfo} m BeHuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BeHuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(18).string(m.loseGold);
        return w;
    };

    /**
     * Decodes a BeHuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BeHuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BeHuInfo} BeHuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BeHuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BeHuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.loseGold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("loseGold"))
            throw $util.ProtocolError("missing required 'loseGold'", { instance: m });
        return m;
    };

    return BeHuInfo;
})();

$root.HuInfo = (function() {

    /**
     * Properties of a HuInfo.
     * @exports IHuInfo
     * @interface IHuInfo
     * @property {string} uId HuInfo uId
     * @property {boolean} isReal HuInfo isReal
     * @property {string} getGold HuInfo getGold
     */

    /**
     * Constructs a new HuInfo.
     * @exports HuInfo
     * @classdesc Represents a HuInfo.
     * @implements IHuInfo
     * @constructor
     * @param {IHuInfo=} [p] Properties to set
     */
    function HuInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HuInfo uId.
     * @member {string} uId
     * @memberof HuInfo
     * @instance
     */
    HuInfo.prototype.uId = "";

    /**
     * HuInfo isReal.
     * @member {boolean} isReal
     * @memberof HuInfo
     * @instance
     */
    HuInfo.prototype.isReal = false;

    /**
     * HuInfo getGold.
     * @member {string} getGold
     * @memberof HuInfo
     * @instance
     */
    HuInfo.prototype.getGold = "";

    /**
     * Creates a new HuInfo instance using the specified properties.
     * @function create
     * @memberof HuInfo
     * @static
     * @param {IHuInfo=} [properties] Properties to set
     * @returns {HuInfo} HuInfo instance
     */
    HuInfo.create = function create(properties) {
        return new HuInfo(properties);
    };

    /**
     * Encodes the specified HuInfo message. Does not implicitly {@link HuInfo.verify|verify} messages.
     * @function encode
     * @memberof HuInfo
     * @static
     * @param {IHuInfo} m HuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).bool(m.isReal);
        w.uint32(26).string(m.getGold);
        return w;
    };

    /**
     * Decodes a HuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HuInfo} HuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.isReal = r.bool();
                break;
            case 3:
                m.getGold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("isReal"))
            throw $util.ProtocolError("missing required 'isReal'", { instance: m });
        if (!m.hasOwnProperty("getGold"))
            throw $util.ProtocolError("missing required 'getGold'", { instance: m });
        return m;
    };

    return HuInfo;
})();

$root.GapInfo = (function() {

    /**
     * Properties of a GapInfo.
     * @exports IGapInfo
     * @interface IGapInfo
     * @property {string} uId GapInfo uId
     * @property {number} type GapInfo type
     */

    /**
     * Constructs a new GapInfo.
     * @exports GapInfo
     * @classdesc Represents a GapInfo.
     * @implements IGapInfo
     * @constructor
     * @param {IGapInfo=} [p] Properties to set
     */
    function GapInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GapInfo uId.
     * @member {string} uId
     * @memberof GapInfo
     * @instance
     */
    GapInfo.prototype.uId = "";

    /**
     * GapInfo type.
     * @member {number} type
     * @memberof GapInfo
     * @instance
     */
    GapInfo.prototype.type = 0;

    /**
     * Creates a new GapInfo instance using the specified properties.
     * @function create
     * @memberof GapInfo
     * @static
     * @param {IGapInfo=} [properties] Properties to set
     * @returns {GapInfo} GapInfo instance
     */
    GapInfo.create = function create(properties) {
        return new GapInfo(properties);
    };

    /**
     * Encodes the specified GapInfo message. Does not implicitly {@link GapInfo.verify|verify} messages.
     * @function encode
     * @memberof GapInfo
     * @static
     * @param {IGapInfo} m GapInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GapInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).int32(m.type);
        return w;
    };

    /**
     * Decodes a GapInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GapInfo} GapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GapInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GapInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    return GapInfo;
})();

$root.PlayerCardInfo = (function() {

    /**
     * Properties of a PlayerCardInfo.
     * @exports IPlayerCardInfo
     * @interface IPlayerCardInfo
     * @property {string} playerId PlayerCardInfo playerId
     * @property {Array.<number>|null} [card] PlayerCardInfo card
     */

    /**
     * Constructs a new PlayerCardInfo.
     * @exports PlayerCardInfo
     * @classdesc Represents a PlayerCardInfo.
     * @implements IPlayerCardInfo
     * @constructor
     * @param {IPlayerCardInfo=} [p] Properties to set
     */
    function PlayerCardInfo(p) {
        this.card = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerCardInfo playerId.
     * @member {string} playerId
     * @memberof PlayerCardInfo
     * @instance
     */
    PlayerCardInfo.prototype.playerId = "";

    /**
     * PlayerCardInfo card.
     * @member {Array.<number>} card
     * @memberof PlayerCardInfo
     * @instance
     */
    PlayerCardInfo.prototype.card = $util.emptyArray;

    /**
     * Creates a new PlayerCardInfo instance using the specified properties.
     * @function create
     * @memberof PlayerCardInfo
     * @static
     * @param {IPlayerCardInfo=} [properties] Properties to set
     * @returns {PlayerCardInfo} PlayerCardInfo instance
     */
    PlayerCardInfo.create = function create(properties) {
        return new PlayerCardInfo(properties);
    };

    /**
     * Encodes the specified PlayerCardInfo message. Does not implicitly {@link PlayerCardInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerCardInfo
     * @static
     * @param {IPlayerCardInfo} m PlayerCardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerCardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.card != null && m.card.length) {
            for (var i = 0; i < m.card.length; ++i)
                w.uint32(16).int32(m.card[i]);
        }
        return w;
    };

    /**
     * Decodes a PlayerCardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerCardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerCardInfo} PlayerCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerCardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerCardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                if (!(m.card && m.card.length))
                    m.card = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.card.push(r.int32());
                } else
                    m.card.push(r.int32());
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

    return PlayerCardInfo;
})();

module.exports = $root;

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.QiangZhuangNiuNiu || ($protobuf.roots.QiangZhuangNiuNiu = {});

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {string} playerId PlayerInfo playerId
     * @property {string} gold PlayerInfo gold
     * @property {string} head PlayerInfo head
     * @property {string} headbox PlayerInfo headbox
     * @property {number} vipLv PlayerInfo vipLv
     * @property {boolean} isBanker PlayerInfo isBanker
     * @property {number} pos PlayerInfo pos
     * @property {string} name PlayerInfo name
     * @property {boolean} isPlay PlayerInfo isPlay
     * @property {number|null} [grapMutiple] PlayerInfo grapMutiple
     * @property {number|null} [mutiple] PlayerInfo mutiple
     * @property {string|null} [city] PlayerInfo city
     * @property {string|null} [province] PlayerInfo province
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
     * PlayerInfo isBanker.
     * @member {boolean} isBanker
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isBanker = false;

    /**
     * PlayerInfo pos.
     * @member {number} pos
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.pos = 0;

    /**
     * PlayerInfo name.
     * @member {string} name
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.name = "";

    /**
     * PlayerInfo isPlay.
     * @member {boolean} isPlay
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isPlay = false;

    /**
     * PlayerInfo grapMutiple.
     * @member {number} grapMutiple
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.grapMutiple = 0;

    /**
     * PlayerInfo mutiple.
     * @member {number} mutiple
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.mutiple = 0;

    /**
     * PlayerInfo city.
     * @member {string} city
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.city = "";

    /**
     * PlayerInfo province.
     * @member {string} province
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.province = "";

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
        w.uint32(18).string(m.gold);
        w.uint32(26).string(m.head);
        w.uint32(34).string(m.headbox);
        w.uint32(40).int32(m.vipLv);
        w.uint32(48).bool(m.isBanker);
        w.uint32(56).int32(m.pos);
        w.uint32(66).string(m.name);
        w.uint32(72).bool(m.isPlay);
        if (m.grapMutiple != null && m.hasOwnProperty("grapMutiple"))
            w.uint32(80).int32(m.grapMutiple);
        if (m.mutiple != null && m.hasOwnProperty("mutiple"))
            w.uint32(88).int32(m.mutiple);
        if (m.city != null && m.hasOwnProperty("city"))
            w.uint32(106).string(m.city);
        if (m.province != null && m.hasOwnProperty("province"))
            w.uint32(114).string(m.province);
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
            case 6:
                m.isBanker = r.bool();
                break;
            case 7:
                m.pos = r.int32();
                break;
            case 8:
                m.name = r.string();
                break;
            case 9:
                m.isPlay = r.bool();
                break;
            case 10:
                m.grapMutiple = r.int32();
                break;
            case 11:
                m.mutiple = r.int32();
                break;
            case 13:
                m.city = r.string();
                break;
            case 14:
                m.province = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        if (!m.hasOwnProperty("head"))
            throw $util.ProtocolError("missing required 'head'", { instance: m });
        if (!m.hasOwnProperty("headbox"))
            throw $util.ProtocolError("missing required 'headbox'", { instance: m });
        if (!m.hasOwnProperty("vipLv"))
            throw $util.ProtocolError("missing required 'vipLv'", { instance: m });
        if (!m.hasOwnProperty("isBanker"))
            throw $util.ProtocolError("missing required 'isBanker'", { instance: m });
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("isPlay"))
            throw $util.ProtocolError("missing required 'isPlay'", { instance: m });
        return m;
    };

    return PlayerInfo;
})();

/**
 * GameStatus enum.
 * @exports GameStatus
 * @enum {string}
 * @property {number} Start=1 Start value
 * @property {number} DisPlay=2 DisPlay value
 * @property {number} GrapBank=3 GrapBank value
 * @property {number} EnsureBank=4 EnsureBank value
 * @property {number} Bet=5 Bet value
 * @property {number} Deal=6 Deal value
 * @property {number} Settlement=7 Settlement value
 * @property {number} Stop=8 Stop value
 */
$root.GameStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Start"] = 1;
    values[valuesById[2] = "DisPlay"] = 2;
    values[valuesById[3] = "GrapBank"] = 3;
    values[valuesById[4] = "EnsureBank"] = 4;
    values[valuesById[5] = "Bet"] = 5;
    values[valuesById[6] = "Deal"] = 6;
    values[valuesById[7] = "Settlement"] = 7;
    values[valuesById[8] = "Stop"] = 8;
    return values;
})();

/**
 * NiuNiuType enum.
 * @exports NiuNiuType
 * @enum {string}
 * @property {number} WUNIU=0 WUNIU value
 * @property {number} NIUYI=1 NIUYI value
 * @property {number} NIUER=2 NIUER value
 * @property {number} NIUSAN=3 NIUSAN value
 * @property {number} NIUSI=4 NIUSI value
 * @property {number} NIUWU=5 NIUWU value
 * @property {number} NIULIU=6 NIULIU value
 * @property {number} NIUQI=7 NIUQI value
 * @property {number} NIUBA=8 NIUBA value
 * @property {number} NIUJIU=9 NIUJIU value
 * @property {number} NIUNIU=10 NIUNIU value
 * @property {number} ZHADAN=11 ZHADAN value
 * @property {number} WUHUANIU=12 WUHUANIU value
 */
$root.NiuNiuType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "WUNIU"] = 0;
    values[valuesById[1] = "NIUYI"] = 1;
    values[valuesById[2] = "NIUER"] = 2;
    values[valuesById[3] = "NIUSAN"] = 3;
    values[valuesById[4] = "NIUSI"] = 4;
    values[valuesById[5] = "NIUWU"] = 5;
    values[valuesById[6] = "NIULIU"] = 6;
    values[valuesById[7] = "NIUQI"] = 7;
    values[valuesById[8] = "NIUBA"] = 8;
    values[valuesById[9] = "NIUJIU"] = 9;
    values[valuesById[10] = "NIUNIU"] = 10;
    values[valuesById[11] = "ZHADAN"] = 11;
    values[valuesById[12] = "WUHUANIU"] = 12;
    return values;
})();

$root.CardInfo = (function() {

    /**
     * Properties of a CardInfo.
     * @exports ICardInfo
     * @interface ICardInfo
     * @property {number} id CardInfo id
     * @property {CardColor} cardColor CardInfo cardColor
     * @property {CardSize} cardSize CardInfo cardSize
     */

    /**
     * Constructs a new CardInfo.
     * @exports CardInfo
     * @classdesc Represents a CardInfo.
     * @implements ICardInfo
     * @constructor
     * @param {ICardInfo=} [p] Properties to set
     */
    function CardInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CardInfo id.
     * @member {number} id
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.id = 0;

    /**
     * CardInfo cardColor.
     * @member {CardColor} cardColor
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.cardColor = 1;

    /**
     * CardInfo cardSize.
     * @member {CardSize} cardSize
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.cardSize = 3;

    /**
     * Creates a new CardInfo instance using the specified properties.
     * @function create
     * @memberof CardInfo
     * @static
     * @param {ICardInfo=} [properties] Properties to set
     * @returns {CardInfo} CardInfo instance
     */
    CardInfo.create = function create(properties) {
        return new CardInfo(properties);
    };

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @function encode
     * @memberof CardInfo
     * @static
     * @param {ICardInfo} m CardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.cardColor);
        w.uint32(24).int32(m.cardSize);
        return w;
    };

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CardInfo} CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
                break;
            case 2:
                m.cardColor = r.int32();
                break;
            case 3:
                m.cardSize = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("cardColor"))
            throw $util.ProtocolError("missing required 'cardColor'", { instance: m });
        if (!m.hasOwnProperty("cardSize"))
            throw $util.ProtocolError("missing required 'cardSize'", { instance: m });
        return m;
    };

    return CardInfo;
})();

$root.DealInfo = (function() {

    /**
     * Properties of a DealInfo.
     * @exports IDealInfo
     * @interface IDealInfo
     * @property {string} playerId DealInfo playerId
     * @property {Array.<ICardInfo>|null} [cards] DealInfo cards
     * @property {Array.<ICardInfo>|null} [niucards] DealInfo niucards
     * @property {NiuNiuType} result DealInfo result
     * @property {boolean} blnWin DealInfo blnWin
     * @property {string} gold DealInfo gold
     * @property {number} niuMutiple DealInfo niuMutiple
     * @property {number} playResult DealInfo playResult
     */

    /**
     * Constructs a new DealInfo.
     * @exports DealInfo
     * @classdesc Represents a DealInfo.
     * @implements IDealInfo
     * @constructor
     * @param {IDealInfo=} [p] Properties to set
     */
    function DealInfo(p) {
        this.cards = [];
        this.niucards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DealInfo playerId.
     * @member {string} playerId
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.playerId = "";

    /**
     * DealInfo cards.
     * @member {Array.<ICardInfo>} cards
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.cards = $util.emptyArray;

    /**
     * DealInfo niucards.
     * @member {Array.<ICardInfo>} niucards
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.niucards = $util.emptyArray;

    /**
     * DealInfo result.
     * @member {NiuNiuType} result
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.result = 0;

    /**
     * DealInfo blnWin.
     * @member {boolean} blnWin
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.blnWin = false;

    /**
     * DealInfo gold.
     * @member {string} gold
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.gold = "";

    /**
     * DealInfo niuMutiple.
     * @member {number} niuMutiple
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.niuMutiple = 0;

    /**
     * DealInfo playResult.
     * @member {number} playResult
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.playResult = 0;

    /**
     * Creates a new DealInfo instance using the specified properties.
     * @function create
     * @memberof DealInfo
     * @static
     * @param {IDealInfo=} [properties] Properties to set
     * @returns {DealInfo} DealInfo instance
     */
    DealInfo.create = function create(properties) {
        return new DealInfo(properties);
    };

    /**
     * Encodes the specified DealInfo message. Does not implicitly {@link DealInfo.verify|verify} messages.
     * @function encode
     * @memberof DealInfo
     * @static
     * @param {IDealInfo} m DealInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DealInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                $root.CardInfo.encode(m.cards[i], w.uint32(18).fork()).ldelim();
        }
        if (m.niucards != null && m.niucards.length) {
            for (var i = 0; i < m.niucards.length; ++i)
                $root.CardInfo.encode(m.niucards[i], w.uint32(26).fork()).ldelim();
        }
        w.uint32(32).int32(m.result);
        w.uint32(40).bool(m.blnWin);
        w.uint32(50).string(m.gold);
        w.uint32(56).int32(m.niuMutiple);
        w.uint32(64).int32(m.playResult);
        return w;
    };

    /**
     * Decodes a DealInfo message from the specified reader or buffer.
     * @function decode
     * @memberof DealInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DealInfo} DealInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DealInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DealInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                m.cards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.niucards && m.niucards.length))
                    m.niucards = [];
                m.niucards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.result = r.int32();
                break;
            case 5:
                m.blnWin = r.bool();
                break;
            case 6:
                m.gold = r.string();
                break;
            case 7:
                m.niuMutiple = r.int32();
                break;
            case 8:
                m.playResult = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        if (!m.hasOwnProperty("blnWin"))
            throw $util.ProtocolError("missing required 'blnWin'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        if (!m.hasOwnProperty("niuMutiple"))
            throw $util.ProtocolError("missing required 'niuMutiple'", { instance: m });
        if (!m.hasOwnProperty("playResult"))
            throw $util.ProtocolError("missing required 'playResult'", { instance: m });
        return m;
    };

    return DealInfo;
})();

$root.PushRoomInitData = (function() {

    /**
     * Properties of a PushRoomInitData.
     * @exports IPushRoomInitData
     * @interface IPushRoomInitData
     * @property {number} baseCoin PushRoomInitData baseCoin
     * @property {Array.<IPlayerInfo>|null} [players] PushRoomInitData players
     * @property {GameStatus} status PushRoomInitData status
     * @property {number} waitTime PushRoomInitData waitTime
     * @property {Array.<number>|null} [mutiple] PushRoomInitData mutiple
     * @property {Array.<IDealInfo>|null} [dealInfo] PushRoomInitData dealInfo
     * @property {boolean|null} [isByStander] PushRoomInitData isByStander
     */

    /**
     * Constructs a new PushRoomInitData.
     * @exports PushRoomInitData
     * @classdesc Represents a PushRoomInitData.
     * @implements IPushRoomInitData
     * @constructor
     * @param {IPushRoomInitData=} [p] Properties to set
     */
    function PushRoomInitData(p) {
        this.players = [];
        this.mutiple = [];
        this.dealInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushRoomInitData baseCoin.
     * @member {number} baseCoin
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.baseCoin = 0;

    /**
     * PushRoomInitData players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.players = $util.emptyArray;

    /**
     * PushRoomInitData status.
     * @member {GameStatus} status
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.status = 1;

    /**
     * PushRoomInitData waitTime.
     * @member {number} waitTime
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.waitTime = 0;

    /**
     * PushRoomInitData mutiple.
     * @member {Array.<number>} mutiple
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.mutiple = $util.emptyArray;

    /**
     * PushRoomInitData dealInfo.
     * @member {Array.<IDealInfo>} dealInfo
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.dealInfo = $util.emptyArray;

    /**
     * PushRoomInitData isByStander.
     * @member {boolean} isByStander
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.isByStander = false;

    /**
     * Creates a new PushRoomInitData instance using the specified properties.
     * @function create
     * @memberof PushRoomInitData
     * @static
     * @param {IPushRoomInitData=} [properties] Properties to set
     * @returns {PushRoomInitData} PushRoomInitData instance
     */
    PushRoomInitData.create = function create(properties) {
        return new PushRoomInitData(properties);
    };

    /**
     * Encodes the specified PushRoomInitData message. Does not implicitly {@link PushRoomInitData.verify|verify} messages.
     * @function encode
     * @memberof PushRoomInitData
     * @static
     * @param {IPushRoomInitData} m PushRoomInitData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRoomInitData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.baseCoin);
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerInfo.encode(m.players[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(24).int32(m.status);
        w.uint32(32).int32(m.waitTime);
        if (m.mutiple != null && m.mutiple.length) {
            for (var i = 0; i < m.mutiple.length; ++i)
                w.uint32(40).int32(m.mutiple[i]);
        }
        if (m.dealInfo != null && m.dealInfo.length) {
            for (var i = 0; i < m.dealInfo.length; ++i)
                $root.DealInfo.encode(m.dealInfo[i], w.uint32(50).fork()).ldelim();
        }
        if (m.isByStander != null && m.hasOwnProperty("isByStander"))
            w.uint32(56).bool(m.isByStander);
        return w;
    };

    /**
     * Decodes a PushRoomInitData message from the specified reader or buffer.
     * @function decode
     * @memberof PushRoomInitData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRoomInitData} PushRoomInitData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRoomInitData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRoomInitData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.baseCoin = r.int32();
                break;
            case 2:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.status = r.int32();
                break;
            case 4:
                m.waitTime = r.int32();
                break;
            case 5:
                if (!(m.mutiple && m.mutiple.length))
                    m.mutiple = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.mutiple.push(r.int32());
                } else
                    m.mutiple.push(r.int32());
                break;
            case 6:
                if (!(m.dealInfo && m.dealInfo.length))
                    m.dealInfo = [];
                m.dealInfo.push($root.DealInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.isByStander = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("baseCoin"))
            throw $util.ProtocolError("missing required 'baseCoin'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("waitTime"))
            throw $util.ProtocolError("missing required 'waitTime'", { instance: m });
        return m;
    };

    return PushRoomInitData;
})();

$root.PushPlayerInfo = (function() {

    /**
     * Properties of a PushPlayerInfo.
     * @exports IPushPlayerInfo
     * @interface IPushPlayerInfo
     * @property {IPlayerInfo} player PushPlayerInfo player
     */

    /**
     * Constructs a new PushPlayerInfo.
     * @exports PushPlayerInfo
     * @classdesc Represents a PushPlayerInfo.
     * @implements IPushPlayerInfo
     * @constructor
     * @param {IPushPlayerInfo=} [p] Properties to set
     */
    function PushPlayerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushPlayerInfo player.
     * @member {IPlayerInfo} player
     * @memberof PushPlayerInfo
     * @instance
     */
    PushPlayerInfo.prototype.player = null;

    /**
     * Creates a new PushPlayerInfo instance using the specified properties.
     * @function create
     * @memberof PushPlayerInfo
     * @static
     * @param {IPushPlayerInfo=} [properties] Properties to set
     * @returns {PushPlayerInfo} PushPlayerInfo instance
     */
    PushPlayerInfo.create = function create(properties) {
        return new PushPlayerInfo(properties);
    };

    /**
     * Encodes the specified PushPlayerInfo message. Does not implicitly {@link PushPlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof PushPlayerInfo
     * @static
     * @param {IPushPlayerInfo} m PushPlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushPlayerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.PlayerInfo.encode(m.player, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a PushPlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushPlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushPlayerInfo} PushPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushPlayerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushPlayerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.player = $root.PlayerInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("player"))
            throw $util.ProtocolError("missing required 'player'", { instance: m });
        return m;
    };

    return PushPlayerInfo;
})();

$root.PushPlayerLeave = (function() {

    /**
     * Properties of a PushPlayerLeave.
     * @exports IPushPlayerLeave
     * @interface IPushPlayerLeave
     * @property {string} playerId PushPlayerLeave playerId
     */

    /**
     * Constructs a new PushPlayerLeave.
     * @exports PushPlayerLeave
     * @classdesc Represents a PushPlayerLeave.
     * @implements IPushPlayerLeave
     * @constructor
     * @param {IPushPlayerLeave=} [p] Properties to set
     */
    function PushPlayerLeave(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushPlayerLeave playerId.
     * @member {string} playerId
     * @memberof PushPlayerLeave
     * @instance
     */
    PushPlayerLeave.prototype.playerId = "";

    /**
     * Creates a new PushPlayerLeave instance using the specified properties.
     * @function create
     * @memberof PushPlayerLeave
     * @static
     * @param {IPushPlayerLeave=} [properties] Properties to set
     * @returns {PushPlayerLeave} PushPlayerLeave instance
     */
    PushPlayerLeave.create = function create(properties) {
        return new PushPlayerLeave(properties);
    };

    /**
     * Encodes the specified PushPlayerLeave message. Does not implicitly {@link PushPlayerLeave.verify|verify} messages.
     * @function encode
     * @memberof PushPlayerLeave
     * @static
     * @param {IPushPlayerLeave} m PushPlayerLeave message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushPlayerLeave.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        return w;
    };

    /**
     * Decodes a PushPlayerLeave message from the specified reader or buffer.
     * @function decode
     * @memberof PushPlayerLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushPlayerLeave} PushPlayerLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushPlayerLeave.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushPlayerLeave();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
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

    return PushPlayerLeave;
})();

$root.PushRoomStatus = (function() {

    /**
     * Properties of a PushRoomStatus.
     * @exports IPushRoomStatus
     * @interface IPushRoomStatus
     * @property {GameStatus} status PushRoomStatus status
     * @property {number} waitTime PushRoomStatus waitTime
     * @property {Array.<number>|null} [mutiple] PushRoomStatus mutiple
     * @property {Array.<IDealInfo>|null} [dealInfo] PushRoomStatus dealInfo
     * @property {number|null} [contineTime] PushRoomStatus contineTime
     * @property {Array.<string>|null} [playerId] PushRoomStatus playerId
     * @property {string|null} [bankerId] PushRoomStatus bankerId
     * @property {Array.<string>|null} [joinPlayerId] PushRoomStatus joinPlayerId
     * @property {Array.<IPlayerInfo>|null} [players] PushRoomStatus players
     */

    /**
     * Constructs a new PushRoomStatus.
     * @exports PushRoomStatus
     * @classdesc Represents a PushRoomStatus.
     * @implements IPushRoomStatus
     * @constructor
     * @param {IPushRoomStatus=} [p] Properties to set
     */
    function PushRoomStatus(p) {
        this.mutiple = [];
        this.dealInfo = [];
        this.playerId = [];
        this.joinPlayerId = [];
        this.players = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushRoomStatus status.
     * @member {GameStatus} status
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.status = 1;

    /**
     * PushRoomStatus waitTime.
     * @member {number} waitTime
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.waitTime = 0;

    /**
     * PushRoomStatus mutiple.
     * @member {Array.<number>} mutiple
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.mutiple = $util.emptyArray;

    /**
     * PushRoomStatus dealInfo.
     * @member {Array.<IDealInfo>} dealInfo
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.dealInfo = $util.emptyArray;

    /**
     * PushRoomStatus contineTime.
     * @member {number} contineTime
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.contineTime = 0;

    /**
     * PushRoomStatus playerId.
     * @member {Array.<string>} playerId
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.playerId = $util.emptyArray;

    /**
     * PushRoomStatus bankerId.
     * @member {string} bankerId
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.bankerId = "";

    /**
     * PushRoomStatus joinPlayerId.
     * @member {Array.<string>} joinPlayerId
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.joinPlayerId = $util.emptyArray;

    /**
     * PushRoomStatus players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.players = $util.emptyArray;

    /**
     * Creates a new PushRoomStatus instance using the specified properties.
     * @function create
     * @memberof PushRoomStatus
     * @static
     * @param {IPushRoomStatus=} [properties] Properties to set
     * @returns {PushRoomStatus} PushRoomStatus instance
     */
    PushRoomStatus.create = function create(properties) {
        return new PushRoomStatus(properties);
    };

    /**
     * Encodes the specified PushRoomStatus message. Does not implicitly {@link PushRoomStatus.verify|verify} messages.
     * @function encode
     * @memberof PushRoomStatus
     * @static
     * @param {IPushRoomStatus} m PushRoomStatus message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRoomStatus.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.status);
        w.uint32(16).int32(m.waitTime);
        if (m.mutiple != null && m.mutiple.length) {
            for (var i = 0; i < m.mutiple.length; ++i)
                w.uint32(24).int32(m.mutiple[i]);
        }
        if (m.dealInfo != null && m.dealInfo.length) {
            for (var i = 0; i < m.dealInfo.length; ++i)
                $root.DealInfo.encode(m.dealInfo[i], w.uint32(34).fork()).ldelim();
        }
        if (m.contineTime != null && m.hasOwnProperty("contineTime"))
            w.uint32(40).int32(m.contineTime);
        if (m.playerId != null && m.playerId.length) {
            for (var i = 0; i < m.playerId.length; ++i)
                w.uint32(50).string(m.playerId[i]);
        }
        if (m.bankerId != null && m.hasOwnProperty("bankerId"))
            w.uint32(58).string(m.bankerId);
        if (m.joinPlayerId != null && m.joinPlayerId.length) {
            for (var i = 0; i < m.joinPlayerId.length; ++i)
                w.uint32(66).string(m.joinPlayerId[i]);
        }
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerInfo.encode(m.players[i], w.uint32(74).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushRoomStatus message from the specified reader or buffer.
     * @function decode
     * @memberof PushRoomStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRoomStatus} PushRoomStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRoomStatus.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRoomStatus();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.status = r.int32();
                break;
            case 2:
                m.waitTime = r.int32();
                break;
            case 3:
                if (!(m.mutiple && m.mutiple.length))
                    m.mutiple = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.mutiple.push(r.int32());
                } else
                    m.mutiple.push(r.int32());
                break;
            case 4:
                if (!(m.dealInfo && m.dealInfo.length))
                    m.dealInfo = [];
                m.dealInfo.push($root.DealInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.contineTime = r.int32();
                break;
            case 6:
                if (!(m.playerId && m.playerId.length))
                    m.playerId = [];
                m.playerId.push(r.string());
                break;
            case 7:
                m.bankerId = r.string();
                break;
            case 8:
                if (!(m.joinPlayerId && m.joinPlayerId.length))
                    m.joinPlayerId = [];
                m.joinPlayerId.push(r.string());
                break;
            case 9:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("waitTime"))
            throw $util.ProtocolError("missing required 'waitTime'", { instance: m });
        return m;
    };

    return PushRoomStatus;
})();

$root.ActionReq = (function() {

    /**
     * Properties of an ActionReq.
     * @exports IActionReq
     * @interface IActionReq
     * @property {GameStatus} status ActionReq status
     * @property {number|null} [multiple] ActionReq multiple
     */

    /**
     * Constructs a new ActionReq.
     * @exports ActionReq
     * @classdesc Represents an ActionReq.
     * @implements IActionReq
     * @constructor
     * @param {IActionReq=} [p] Properties to set
     */
    function ActionReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionReq status.
     * @member {GameStatus} status
     * @memberof ActionReq
     * @instance
     */
    ActionReq.prototype.status = 1;

    /**
     * ActionReq multiple.
     * @member {number} multiple
     * @memberof ActionReq
     * @instance
     */
    ActionReq.prototype.multiple = 0;

    /**
     * Creates a new ActionReq instance using the specified properties.
     * @function create
     * @memberof ActionReq
     * @static
     * @param {IActionReq=} [properties] Properties to set
     * @returns {ActionReq} ActionReq instance
     */
    ActionReq.create = function create(properties) {
        return new ActionReq(properties);
    };

    /**
     * Encodes the specified ActionReq message. Does not implicitly {@link ActionReq.verify|verify} messages.
     * @function encode
     * @memberof ActionReq
     * @static
     * @param {IActionReq} m ActionReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.status);
        if (m.multiple != null && m.hasOwnProperty("multiple"))
            w.uint32(16).int32(m.multiple);
        return w;
    };

    /**
     * Decodes an ActionReq message from the specified reader or buffer.
     * @function decode
     * @memberof ActionReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionReq} ActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.status = r.int32();
                break;
            case 2:
                m.multiple = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    return ActionReq;
})();

$root.ActionRes = (function() {

    /**
     * Properties of an ActionRes.
     * @exports IActionRes
     * @interface IActionRes
     * @property {boolean} success ActionRes success
     * @property {string|null} [tips] ActionRes tips
     */

    /**
     * Constructs a new ActionRes.
     * @exports ActionRes
     * @classdesc Represents an ActionRes.
     * @implements IActionRes
     * @constructor
     * @param {IActionRes=} [p] Properties to set
     */
    function ActionRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionRes success.
     * @member {boolean} success
     * @memberof ActionRes
     * @instance
     */
    ActionRes.prototype.success = false;

    /**
     * ActionRes tips.
     * @member {string} tips
     * @memberof ActionRes
     * @instance
     */
    ActionRes.prototype.tips = "";

    /**
     * Creates a new ActionRes instance using the specified properties.
     * @function create
     * @memberof ActionRes
     * @static
     * @param {IActionRes=} [properties] Properties to set
     * @returns {ActionRes} ActionRes instance
     */
    ActionRes.create = function create(properties) {
        return new ActionRes(properties);
    };

    /**
     * Encodes the specified ActionRes message. Does not implicitly {@link ActionRes.verify|verify} messages.
     * @function encode
     * @memberof ActionRes
     * @static
     * @param {IActionRes} m ActionRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes an ActionRes message from the specified reader or buffer.
     * @function decode
     * @memberof ActionRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionRes} ActionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        return m;
    };

    return ActionRes;
})();

$root.PushAction = (function() {

    /**
     * Properties of a PushAction.
     * @exports IPushAction
     * @interface IPushAction
     * @property {string} playerId PushAction playerId
     * @property {GameStatus} status PushAction status
     * @property {number|null} [multiple] PushAction multiple
     */

    /**
     * Constructs a new PushAction.
     * @exports PushAction
     * @classdesc Represents a PushAction.
     * @implements IPushAction
     * @constructor
     * @param {IPushAction=} [p] Properties to set
     */
    function PushAction(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushAction playerId.
     * @member {string} playerId
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.playerId = "";

    /**
     * PushAction status.
     * @member {GameStatus} status
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.status = 1;

    /**
     * PushAction multiple.
     * @member {number} multiple
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.multiple = 0;

    /**
     * Creates a new PushAction instance using the specified properties.
     * @function create
     * @memberof PushAction
     * @static
     * @param {IPushAction=} [properties] Properties to set
     * @returns {PushAction} PushAction instance
     */
    PushAction.create = function create(properties) {
        return new PushAction(properties);
    };

    /**
     * Encodes the specified PushAction message. Does not implicitly {@link PushAction.verify|verify} messages.
     * @function encode
     * @memberof PushAction
     * @static
     * @param {IPushAction} m PushAction message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushAction.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.status);
        if (m.multiple != null && m.hasOwnProperty("multiple"))
            w.uint32(24).int32(m.multiple);
        return w;
    };

    /**
     * Decodes a PushAction message from the specified reader or buffer.
     * @function decode
     * @memberof PushAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushAction} PushAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushAction.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushAction();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.status = r.int32();
                break;
            case 3:
                m.multiple = r.int32();
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

    return PushAction;
})();

$root.ChatReq = (function() {

    /**
     * Properties of a ChatReq.
     * @exports IChatReq
     * @interface IChatReq
     * @property {number} chatId ChatReq chatId
     */

    /**
     * Constructs a new ChatReq.
     * @exports ChatReq
     * @classdesc Represents a ChatReq.
     * @implements IChatReq
     * @constructor
     * @param {IChatReq=} [p] Properties to set
     */
    function ChatReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChatReq chatId.
     * @member {number} chatId
     * @memberof ChatReq
     * @instance
     */
    ChatReq.prototype.chatId = 0;

    /**
     * Creates a new ChatReq instance using the specified properties.
     * @function create
     * @memberof ChatReq
     * @static
     * @param {IChatReq=} [properties] Properties to set
     * @returns {ChatReq} ChatReq instance
     */
    ChatReq.create = function create(properties) {
        return new ChatReq(properties);
    };

    /**
     * Encodes the specified ChatReq message. Does not implicitly {@link ChatReq.verify|verify} messages.
     * @function encode
     * @memberof ChatReq
     * @static
     * @param {IChatReq} m ChatReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.chatId);
        return w;
    };

    /**
     * Decodes a ChatReq message from the specified reader or buffer.
     * @function decode
     * @memberof ChatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChatReq} ChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChatReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.chatId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("chatId"))
            throw $util.ProtocolError("missing required 'chatId'", { instance: m });
        return m;
    };

    return ChatReq;
})();

$root.PushChat = (function() {

    /**
     * Properties of a PushChat.
     * @exports IPushChat
     * @interface IPushChat
     * @property {number} chatId PushChat chatId
     * @property {string} playerId PushChat playerId
     */

    /**
     * Constructs a new PushChat.
     * @exports PushChat
     * @classdesc Represents a PushChat.
     * @implements IPushChat
     * @constructor
     * @param {IPushChat=} [p] Properties to set
     */
    function PushChat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushChat chatId.
     * @member {number} chatId
     * @memberof PushChat
     * @instance
     */
    PushChat.prototype.chatId = 0;

    /**
     * PushChat playerId.
     * @member {string} playerId
     * @memberof PushChat
     * @instance
     */
    PushChat.prototype.playerId = "";

    /**
     * Creates a new PushChat instance using the specified properties.
     * @function create
     * @memberof PushChat
     * @static
     * @param {IPushChat=} [properties] Properties to set
     * @returns {PushChat} PushChat instance
     */
    PushChat.create = function create(properties) {
        return new PushChat(properties);
    };

    /**
     * Encodes the specified PushChat message. Does not implicitly {@link PushChat.verify|verify} messages.
     * @function encode
     * @memberof PushChat
     * @static
     * @param {IPushChat} m PushChat message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushChat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.chatId);
        w.uint32(18).string(m.playerId);
        return w;
    };

    /**
     * Decodes a PushChat message from the specified reader or buffer.
     * @function decode
     * @memberof PushChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushChat} PushChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushChat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushChat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.chatId = r.int32();
                break;
            case 2:
                m.playerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("chatId"))
            throw $util.ProtocolError("missing required 'chatId'", { instance: m });
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        return m;
    };

    return PushChat;
})();

/**
 * CardColor enum.
 * @exports CardColor
 * @enum {string}
 * @property {number} Spade=1 Spade value
 * @property {number} Red=2 Red value
 * @property {number} Plum=3 Plum value
 * @property {number} Block=4 Block value
 * @property {number} Evil=5 Evil value
 */
$root.CardColor = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Spade"] = 1;
    values[valuesById[2] = "Red"] = 2;
    values[valuesById[3] = "Plum"] = 3;
    values[valuesById[4] = "Block"] = 4;
    values[valuesById[5] = "Evil"] = 5;
    return values;
})();

/**
 * CardSize enum.
 * @exports CardSize
 * @enum {string}
 * @property {number} C3=3 C3 value
 * @property {number} C4=4 C4 value
 * @property {number} C5=5 C5 value
 * @property {number} C6=6 C6 value
 * @property {number} C7=7 C7 value
 * @property {number} C8=8 C8 value
 * @property {number} C9=9 C9 value
 * @property {number} C10=10 C10 value
 * @property {number} CJ=11 CJ value
 * @property {number} CQ=12 CQ value
 * @property {number} CK=13 CK value
 * @property {number} CA=14 CA value
 * @property {number} C2=15 C2 value
 * @property {number} CSMALL=16 CSMALL value
 * @property {number} CBIG=17 CBIG value
 */
$root.CardSize = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[3] = "C3"] = 3;
    values[valuesById[4] = "C4"] = 4;
    values[valuesById[5] = "C5"] = 5;
    values[valuesById[6] = "C6"] = 6;
    values[valuesById[7] = "C7"] = 7;
    values[valuesById[8] = "C8"] = 8;
    values[valuesById[9] = "C9"] = 9;
    values[valuesById[10] = "C10"] = 10;
    values[valuesById[11] = "CJ"] = 11;
    values[valuesById[12] = "CQ"] = 12;
    values[valuesById[13] = "CK"] = 13;
    values[valuesById[14] = "CA"] = 14;
    values[valuesById[15] = "C2"] = 15;
    values[valuesById[16] = "CSMALL"] = 16;
    values[valuesById[17] = "CBIG"] = 17;
    return values;
})();

module.exports = $root;

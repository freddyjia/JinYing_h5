/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.ZhaJinHua || ($protobuf.roots.ZhaJinHua = {});

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
     * @property {boolean|null} [isBanker] PlayerInfo isBanker
     * @property {number|null} [pos] PlayerInfo pos
     * @property {string|null} [name] PlayerInfo name
     * @property {string|null} [city] PlayerInfo city
     * @property {string|null} [province] PlayerInfo province
     * @property {boolean|null} [isPlay] PlayerInfo isPlay
     * @property {boolean|null} [isOpen] PlayerInfo isOpen
     * @property {boolean|null} [isGiveup] PlayerInfo isGiveup
     * @property {boolean|null} [isBattleFail] PlayerInfo isBattleFail
     * @property {number|null} [betMoney] PlayerInfo betMoney
     * @property {boolean|null} [isAuto] PlayerInfo isAuto
     * @property {boolean|null} [isAllIn] PlayerInfo isAllIn
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
     * PlayerInfo isPlay.
     * @member {boolean} isPlay
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isPlay = false;

    /**
     * PlayerInfo isOpen.
     * @member {boolean} isOpen
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isOpen = false;

    /**
     * PlayerInfo isGiveup.
     * @member {boolean} isGiveup
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isGiveup = false;

    /**
     * PlayerInfo isBattleFail.
     * @member {boolean} isBattleFail
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isBattleFail = false;

    /**
     * PlayerInfo betMoney.
     * @member {number} betMoney
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.betMoney = 0;

    /**
     * PlayerInfo isAuto.
     * @member {boolean} isAuto
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isAuto = false;

    /**
     * PlayerInfo isAllIn.
     * @member {boolean} isAllIn
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isAllIn = false;

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
        if (m.isBanker != null && m.hasOwnProperty("isBanker"))
            w.uint32(48).bool(m.isBanker);
        if (m.pos != null && m.hasOwnProperty("pos"))
            w.uint32(56).int32(m.pos);
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(66).string(m.name);
        if (m.city != null && m.hasOwnProperty("city"))
            w.uint32(74).string(m.city);
        if (m.province != null && m.hasOwnProperty("province"))
            w.uint32(82).string(m.province);
        if (m.isPlay != null && m.hasOwnProperty("isPlay"))
            w.uint32(88).bool(m.isPlay);
        if (m.isOpen != null && m.hasOwnProperty("isOpen"))
            w.uint32(96).bool(m.isOpen);
        if (m.isGiveup != null && m.hasOwnProperty("isGiveup"))
            w.uint32(104).bool(m.isGiveup);
        if (m.isBattleFail != null && m.hasOwnProperty("isBattleFail"))
            w.uint32(112).bool(m.isBattleFail);
        if (m.betMoney != null && m.hasOwnProperty("betMoney"))
            w.uint32(120).int32(m.betMoney);
        if (m.isAuto != null && m.hasOwnProperty("isAuto"))
            w.uint32(128).bool(m.isAuto);
        if (m.isAllIn != null && m.hasOwnProperty("isAllIn"))
            w.uint32(136).bool(m.isAllIn);
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
                m.city = r.string();
                break;
            case 10:
                m.province = r.string();
                break;
            case 11:
                m.isPlay = r.bool();
                break;
            case 12:
                m.isOpen = r.bool();
                break;
            case 13:
                m.isGiveup = r.bool();
                break;
            case 14:
                m.isBattleFail = r.bool();
                break;
            case 15:
                m.betMoney = r.int32();
                break;
            case 16:
                m.isAuto = r.bool();
                break;
            case 17:
                m.isAllIn = r.bool();
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
 * @property {number} Start=1 Start value
 * @property {number} EnsureBank=2 EnsureBank value
 * @property {number} PlayerAction=3 PlayerAction value
 * @property {number} Battle=4 Battle value
 * @property {number} All=5 All value
 * @property {number} Settlement=6 Settlement value
 * @property {number} Stop=7 Stop value
 */
$root.GameStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Start"] = 1;
    values[valuesById[2] = "EnsureBank"] = 2;
    values[valuesById[3] = "PlayerAction"] = 3;
    values[valuesById[4] = "Battle"] = 4;
    values[valuesById[5] = "All"] = 5;
    values[valuesById[6] = "Settlement"] = 6;
    values[valuesById[7] = "Stop"] = 7;
    return values;
})();

/**
 * ActionType enum.
 * @exports ActionType
 * @enum {string}
 * @property {number} Giveup=1 Giveup value
 * @property {number} Follow=2 Follow value
 * @property {number} AllIn=3 AllIn value
 * @property {number} AllSelf=4 AllSelf value
 * @property {number} AutoFollow=5 AutoFollow value
 * @property {number} Open=6 Open value
 * @property {number} Compare=7 Compare value
 * @property {number} AddFollow=8 AddFollow value
 */
$root.ActionType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Giveup"] = 1;
    values[valuesById[2] = "Follow"] = 2;
    values[valuesById[3] = "AllIn"] = 3;
    values[valuesById[4] = "AllSelf"] = 4;
    values[valuesById[5] = "AutoFollow"] = 5;
    values[valuesById[6] = "Open"] = 6;
    values[valuesById[7] = "Compare"] = 7;
    values[valuesById[8] = "AddFollow"] = 8;
    return values;
})();

/**
 * ZhaJinHuaResultType enum.
 * @exports ZhaJinHuaResultType
 * @enum {string}
 * @property {number} SingleType=0 SingleType value
 * @property {number} PairType=1 PairType value
 * @property {number} ShunZiType=2 ShunZiType value
 * @property {number} JinHuaType=3 JinHuaType value
 * @property {number} JinShunType=4 JinShunType value
 * @property {number} BaoZiType=5 BaoZiType value
 */
$root.ZhaJinHuaResultType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SingleType"] = 0;
    values[valuesById[1] = "PairType"] = 1;
    values[valuesById[2] = "ShunZiType"] = 2;
    values[valuesById[3] = "JinHuaType"] = 3;
    values[valuesById[4] = "JinShunType"] = 4;
    values[valuesById[5] = "BaoZiType"] = 5;
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

$root.CardResult = (function() {

    /**
     * Properties of a CardResult.
     * @exports ICardResult
     * @interface ICardResult
     * @property {Array.<ICardInfo>|null} [cardInfo] CardResult cardInfo
     * @property {ZhaJinHuaResultType} resultType CardResult resultType
     */

    /**
     * Constructs a new CardResult.
     * @exports CardResult
     * @classdesc Represents a CardResult.
     * @implements ICardResult
     * @constructor
     * @param {ICardResult=} [p] Properties to set
     */
    function CardResult(p) {
        this.cardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CardResult cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof CardResult
     * @instance
     */
    CardResult.prototype.cardInfo = $util.emptyArray;

    /**
     * CardResult resultType.
     * @member {ZhaJinHuaResultType} resultType
     * @memberof CardResult
     * @instance
     */
    CardResult.prototype.resultType = 0;

    /**
     * Creates a new CardResult instance using the specified properties.
     * @function create
     * @memberof CardResult
     * @static
     * @param {ICardResult=} [properties] Properties to set
     * @returns {CardResult} CardResult instance
     */
    CardResult.create = function create(properties) {
        return new CardResult(properties);
    };

    /**
     * Encodes the specified CardResult message. Does not implicitly {@link CardResult.verify|verify} messages.
     * @function encode
     * @memberof CardResult
     * @static
     * @param {ICardResult} m CardResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).int32(m.resultType);
        return w;
    };

    /**
     * Decodes a CardResult message from the specified reader or buffer.
     * @function decode
     * @memberof CardResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CardResult} CardResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CardResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.resultType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("resultType"))
            throw $util.ProtocolError("missing required 'resultType'", { instance: m });
        return m;
    };

    return CardResult;
})();

$root.DealInfo = (function() {

    /**
     * Properties of a DealInfo.
     * @exports IDealInfo
     * @interface IDealInfo
     * @property {string} playerId DealInfo playerId
     * @property {boolean} blnWin DealInfo blnWin
     * @property {string} gold DealInfo gold
     * @property {number} playResult DealInfo playResult
     * @property {ICardResult|null} [cardResult] DealInfo cardResult
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
     * DealInfo playResult.
     * @member {number} playResult
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.playResult = 0;

    /**
     * DealInfo cardResult.
     * @member {ICardResult|null|undefined} cardResult
     * @memberof DealInfo
     * @instance
     */
    DealInfo.prototype.cardResult = null;

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
        w.uint32(16).bool(m.blnWin);
        w.uint32(26).string(m.gold);
        w.uint32(32).int32(m.playResult);
        if (m.cardResult != null && m.hasOwnProperty("cardResult"))
            $root.CardResult.encode(m.cardResult, w.uint32(42).fork()).ldelim();
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
                m.blnWin = r.bool();
                break;
            case 3:
                m.gold = r.string();
                break;
            case 4:
                m.playResult = r.int32();
                break;
            case 5:
                m.cardResult = $root.CardResult.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("blnWin"))
            throw $util.ProtocolError("missing required 'blnWin'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        if (!m.hasOwnProperty("playResult"))
            throw $util.ProtocolError("missing required 'playResult'", { instance: m });
        return m;
    };

    return DealInfo;
})();

$root.ActionPlayerInfo = (function() {

    /**
     * Properties of an ActionPlayerInfo.
     * @exports IActionPlayerInfo
     * @interface IActionPlayerInfo
     * @property {string} playerId ActionPlayerInfo playerId
     * @property {Array.<ActionType>|null} [actionButton] ActionPlayerInfo actionButton
     */

    /**
     * Constructs a new ActionPlayerInfo.
     * @exports ActionPlayerInfo
     * @classdesc Represents an ActionPlayerInfo.
     * @implements IActionPlayerInfo
     * @constructor
     * @param {IActionPlayerInfo=} [p] Properties to set
     */
    function ActionPlayerInfo(p) {
        this.actionButton = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionPlayerInfo playerId.
     * @member {string} playerId
     * @memberof ActionPlayerInfo
     * @instance
     */
    ActionPlayerInfo.prototype.playerId = "";

    /**
     * ActionPlayerInfo actionButton.
     * @member {Array.<ActionType>} actionButton
     * @memberof ActionPlayerInfo
     * @instance
     */
    ActionPlayerInfo.prototype.actionButton = $util.emptyArray;

    /**
     * Creates a new ActionPlayerInfo instance using the specified properties.
     * @function create
     * @memberof ActionPlayerInfo
     * @static
     * @param {IActionPlayerInfo=} [properties] Properties to set
     * @returns {ActionPlayerInfo} ActionPlayerInfo instance
     */
    ActionPlayerInfo.create = function create(properties) {
        return new ActionPlayerInfo(properties);
    };

    /**
     * Encodes the specified ActionPlayerInfo message. Does not implicitly {@link ActionPlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof ActionPlayerInfo
     * @static
     * @param {IActionPlayerInfo} m ActionPlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionPlayerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.actionButton != null && m.actionButton.length) {
            for (var i = 0; i < m.actionButton.length; ++i)
                w.uint32(16).int32(m.actionButton[i]);
        }
        return w;
    };

    /**
     * Decodes an ActionPlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ActionPlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionPlayerInfo} ActionPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionPlayerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionPlayerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                if (!(m.actionButton && m.actionButton.length))
                    m.actionButton = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.actionButton.push(r.int32());
                } else
                    m.actionButton.push(r.int32());
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

    return ActionPlayerInfo;
})();

$root.PushRoomInitData = (function() {

    /**
     * Properties of a PushRoomInitData.
     * @exports IPushRoomInitData
     * @interface IPushRoomInitData
     * @property {number} baseCoin PushRoomInitData baseCoin
     * @property {Array.<number>|null} [betItems] PushRoomInitData betItems
     * @property {Array.<IPlayerInfo>|null} [players] PushRoomInitData players
     * @property {GameStatus} status PushRoomInitData status
     * @property {number} waitTime PushRoomInitData waitTime
     * @property {string|null} [totalReward] PushRoomInitData totalReward
     * @property {Array.<IDealInfo>|null} [dealInfo] PushRoomInitData dealInfo
     * @property {number|null} [round] PushRoomInitData round
     * @property {number|null} [openMutiple] PushRoomInitData openMutiple
     * @property {IActionPlayerInfo|null} [actionPlayerInfo] PushRoomInitData actionPlayerInfo
     * @property {number|null} [betMutiple] PushRoomInitData betMutiple
     * @property {number} totalRound PushRoomInitData totalRound
     * @property {string|null} [currentPlayerId] PushRoomInitData currentPlayerId
     * @property {string} coinUnit PushRoomInitData coinUnit
     * @property {number} totalWaitTime PushRoomInitData totalWaitTime
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
        this.betItems = [];
        this.players = [];
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
     * PushRoomInitData betItems.
     * @member {Array.<number>} betItems
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.betItems = $util.emptyArray;

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
     * PushRoomInitData totalReward.
     * @member {string} totalReward
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.totalReward = "";

    /**
     * PushRoomInitData dealInfo.
     * @member {Array.<IDealInfo>} dealInfo
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.dealInfo = $util.emptyArray;

    /**
     * PushRoomInitData round.
     * @member {number} round
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.round = 0;

    /**
     * PushRoomInitData openMutiple.
     * @member {number} openMutiple
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.openMutiple = 0;

    /**
     * PushRoomInitData actionPlayerInfo.
     * @member {IActionPlayerInfo|null|undefined} actionPlayerInfo
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.actionPlayerInfo = null;

    /**
     * PushRoomInitData betMutiple.
     * @member {number} betMutiple
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.betMutiple = 0;

    /**
     * PushRoomInitData totalRound.
     * @member {number} totalRound
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.totalRound = 0;

    /**
     * PushRoomInitData currentPlayerId.
     * @member {string} currentPlayerId
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.currentPlayerId = "";

    /**
     * PushRoomInitData coinUnit.
     * @member {string} coinUnit
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.coinUnit = "";

    /**
     * PushRoomInitData totalWaitTime.
     * @member {number} totalWaitTime
     * @memberof PushRoomInitData
     * @instance
     */
    PushRoomInitData.prototype.totalWaitTime = 0;

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
        if (m.betItems != null && m.betItems.length) {
            for (var i = 0; i < m.betItems.length; ++i)
                w.uint32(16).int32(m.betItems[i]);
        }
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerInfo.encode(m.players[i], w.uint32(26).fork()).ldelim();
        }
        w.uint32(32).int32(m.status);
        w.uint32(40).int32(m.waitTime);
        if (m.totalReward != null && m.hasOwnProperty("totalReward"))
            w.uint32(50).string(m.totalReward);
        if (m.dealInfo != null && m.dealInfo.length) {
            for (var i = 0; i < m.dealInfo.length; ++i)
                $root.DealInfo.encode(m.dealInfo[i], w.uint32(58).fork()).ldelim();
        }
        if (m.round != null && m.hasOwnProperty("round"))
            w.uint32(64).int32(m.round);
        if (m.openMutiple != null && m.hasOwnProperty("openMutiple"))
            w.uint32(72).int32(m.openMutiple);
        if (m.actionPlayerInfo != null && m.hasOwnProperty("actionPlayerInfo"))
            $root.ActionPlayerInfo.encode(m.actionPlayerInfo, w.uint32(82).fork()).ldelim();
        if (m.betMutiple != null && m.hasOwnProperty("betMutiple"))
            w.uint32(88).int32(m.betMutiple);
        w.uint32(96).int32(m.totalRound);
        if (m.currentPlayerId != null && m.hasOwnProperty("currentPlayerId"))
            w.uint32(106).string(m.currentPlayerId);
        w.uint32(114).string(m.coinUnit);
        w.uint32(120).int32(m.totalWaitTime);
        if (m.isByStander != null && m.hasOwnProperty("isByStander"))
            w.uint32(128).bool(m.isByStander);
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
                if (!(m.betItems && m.betItems.length))
                    m.betItems = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.betItems.push(r.int32());
                } else
                    m.betItems.push(r.int32());
                break;
            case 3:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.status = r.int32();
                break;
            case 5:
                m.waitTime = r.int32();
                break;
            case 6:
                m.totalReward = r.string();
                break;
            case 7:
                if (!(m.dealInfo && m.dealInfo.length))
                    m.dealInfo = [];
                m.dealInfo.push($root.DealInfo.decode(r, r.uint32()));
                break;
            case 8:
                m.round = r.int32();
                break;
            case 9:
                m.openMutiple = r.int32();
                break;
            case 10:
                m.actionPlayerInfo = $root.ActionPlayerInfo.decode(r, r.uint32());
                break;
            case 11:
                m.betMutiple = r.int32();
                break;
            case 12:
                m.totalRound = r.int32();
                break;
            case 13:
                m.currentPlayerId = r.string();
                break;
            case 14:
                m.coinUnit = r.string();
                break;
            case 15:
                m.totalWaitTime = r.int32();
                break;
            case 16:
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
        if (!m.hasOwnProperty("totalRound"))
            throw $util.ProtocolError("missing required 'totalRound'", { instance: m });
        if (!m.hasOwnProperty("coinUnit"))
            throw $util.ProtocolError("missing required 'coinUnit'", { instance: m });
        if (!m.hasOwnProperty("totalWaitTime"))
            throw $util.ProtocolError("missing required 'totalWaitTime'", { instance: m });
        return m;
    };

    return PushRoomInitData;
})();

$root.BattleResult = (function() {

    /**
     * Properties of a BattleResult.
     * @exports IBattleResult
     * @interface IBattleResult
     * @property {string} oriplayerId BattleResult oriplayerId
     * @property {string} tarplayerId BattleResult tarplayerId
     * @property {string} winPlayerId BattleResult winPlayerId
     */

    /**
     * Constructs a new BattleResult.
     * @exports BattleResult
     * @classdesc Represents a BattleResult.
     * @implements IBattleResult
     * @constructor
     * @param {IBattleResult=} [p] Properties to set
     */
    function BattleResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BattleResult oriplayerId.
     * @member {string} oriplayerId
     * @memberof BattleResult
     * @instance
     */
    BattleResult.prototype.oriplayerId = "";

    /**
     * BattleResult tarplayerId.
     * @member {string} tarplayerId
     * @memberof BattleResult
     * @instance
     */
    BattleResult.prototype.tarplayerId = "";

    /**
     * BattleResult winPlayerId.
     * @member {string} winPlayerId
     * @memberof BattleResult
     * @instance
     */
    BattleResult.prototype.winPlayerId = "";

    /**
     * Creates a new BattleResult instance using the specified properties.
     * @function create
     * @memberof BattleResult
     * @static
     * @param {IBattleResult=} [properties] Properties to set
     * @returns {BattleResult} BattleResult instance
     */
    BattleResult.create = function create(properties) {
        return new BattleResult(properties);
    };

    /**
     * Encodes the specified BattleResult message. Does not implicitly {@link BattleResult.verify|verify} messages.
     * @function encode
     * @memberof BattleResult
     * @static
     * @param {IBattleResult} m BattleResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.oriplayerId);
        w.uint32(18).string(m.tarplayerId);
        w.uint32(26).string(m.winPlayerId);
        return w;
    };

    /**
     * Decodes a BattleResult message from the specified reader or buffer.
     * @function decode
     * @memberof BattleResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BattleResult} BattleResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BattleResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.oriplayerId = r.string();
                break;
            case 2:
                m.tarplayerId = r.string();
                break;
            case 3:
                m.winPlayerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("oriplayerId"))
            throw $util.ProtocolError("missing required 'oriplayerId'", { instance: m });
        if (!m.hasOwnProperty("tarplayerId"))
            throw $util.ProtocolError("missing required 'tarplayerId'", { instance: m });
        if (!m.hasOwnProperty("winPlayerId"))
            throw $util.ProtocolError("missing required 'winPlayerId'", { instance: m });
        return m;
    };

    return BattleResult;
})();

$root.AllResult = (function() {

    /**
     * Properties of an AllResult.
     * @exports IAllResult
     * @interface IAllResult
     * @property {string} playerId AllResult playerId
     * @property {boolean} isWin AllResult isWin
     */

    /**
     * Constructs a new AllResult.
     * @exports AllResult
     * @classdesc Represents an AllResult.
     * @implements IAllResult
     * @constructor
     * @param {IAllResult=} [p] Properties to set
     */
    function AllResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AllResult playerId.
     * @member {string} playerId
     * @memberof AllResult
     * @instance
     */
    AllResult.prototype.playerId = "";

    /**
     * AllResult isWin.
     * @member {boolean} isWin
     * @memberof AllResult
     * @instance
     */
    AllResult.prototype.isWin = false;

    /**
     * Creates a new AllResult instance using the specified properties.
     * @function create
     * @memberof AllResult
     * @static
     * @param {IAllResult=} [properties] Properties to set
     * @returns {AllResult} AllResult instance
     */
    AllResult.create = function create(properties) {
        return new AllResult(properties);
    };

    /**
     * Encodes the specified AllResult message. Does not implicitly {@link AllResult.verify|verify} messages.
     * @function encode
     * @memberof AllResult
     * @static
     * @param {IAllResult} m AllResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).bool(m.isWin);
        return w;
    };

    /**
     * Decodes an AllResult message from the specified reader or buffer.
     * @function decode
     * @memberof AllResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AllResult} AllResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AllResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.isWin = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("isWin"))
            throw $util.ProtocolError("missing required 'isWin'", { instance: m });
        return m;
    };

    return AllResult;
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
     * @property {number} round PushRoomStatus round
     * @property {string|null} [totalReward] PushRoomStatus totalReward
     * @property {string|null} [bankerId] PushRoomStatus bankerId
     * @property {Array.<IPlayerInfo>|null} [joinPlayer] PushRoomStatus joinPlayer
     * @property {Array.<IDealInfo>|null} [dealInfo] PushRoomStatus dealInfo
     * @property {IActionPlayerInfo|null} [actionPlayerInfo] PushRoomStatus actionPlayerInfo
     * @property {number|null} [betMutiple] PushRoomStatus betMutiple
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
        this.joinPlayer = [];
        this.dealInfo = [];
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
     * PushRoomStatus round.
     * @member {number} round
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.round = 0;

    /**
     * PushRoomStatus totalReward.
     * @member {string} totalReward
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.totalReward = "";

    /**
     * PushRoomStatus bankerId.
     * @member {string} bankerId
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.bankerId = "";

    /**
     * PushRoomStatus joinPlayer.
     * @member {Array.<IPlayerInfo>} joinPlayer
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.joinPlayer = $util.emptyArray;

    /**
     * PushRoomStatus dealInfo.
     * @member {Array.<IDealInfo>} dealInfo
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.dealInfo = $util.emptyArray;

    /**
     * PushRoomStatus actionPlayerInfo.
     * @member {IActionPlayerInfo|null|undefined} actionPlayerInfo
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.actionPlayerInfo = null;

    /**
     * PushRoomStatus betMutiple.
     * @member {number} betMutiple
     * @memberof PushRoomStatus
     * @instance
     */
    PushRoomStatus.prototype.betMutiple = 0;

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
        w.uint32(24).int32(m.round);
        if (m.totalReward != null && m.hasOwnProperty("totalReward"))
            w.uint32(34).string(m.totalReward);
        if (m.bankerId != null && m.hasOwnProperty("bankerId"))
            w.uint32(42).string(m.bankerId);
        if (m.joinPlayer != null && m.joinPlayer.length) {
            for (var i = 0; i < m.joinPlayer.length; ++i)
                $root.PlayerInfo.encode(m.joinPlayer[i], w.uint32(50).fork()).ldelim();
        }
        if (m.dealInfo != null && m.dealInfo.length) {
            for (var i = 0; i < m.dealInfo.length; ++i)
                $root.DealInfo.encode(m.dealInfo[i], w.uint32(58).fork()).ldelim();
        }
        if (m.actionPlayerInfo != null && m.hasOwnProperty("actionPlayerInfo"))
            $root.ActionPlayerInfo.encode(m.actionPlayerInfo, w.uint32(66).fork()).ldelim();
        if (m.betMutiple != null && m.hasOwnProperty("betMutiple"))
            w.uint32(72).int32(m.betMutiple);
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
                m.round = r.int32();
                break;
            case 4:
                m.totalReward = r.string();
                break;
            case 5:
                m.bankerId = r.string();
                break;
            case 6:
                if (!(m.joinPlayer && m.joinPlayer.length))
                    m.joinPlayer = [];
                m.joinPlayer.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 7:
                if (!(m.dealInfo && m.dealInfo.length))
                    m.dealInfo = [];
                m.dealInfo.push($root.DealInfo.decode(r, r.uint32()));
                break;
            case 8:
                m.actionPlayerInfo = $root.ActionPlayerInfo.decode(r, r.uint32());
                break;
            case 9:
                m.betMutiple = r.int32();
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
        if (!m.hasOwnProperty("round"))
            throw $util.ProtocolError("missing required 'round'", { instance: m });
        return m;
    };

    return PushRoomStatus;
})();

$root.ActionReq = (function() {

    /**
     * Properties of an ActionReq.
     * @exports IActionReq
     * @interface IActionReq
     * @property {ActionType} action ActionReq action
     * @property {number|null} [betMutiple] ActionReq betMutiple
     * @property {string|null} [battlePlayerId] ActionReq battlePlayerId
     * @property {boolean|null} [autoFollow] ActionReq autoFollow
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
     * ActionReq action.
     * @member {ActionType} action
     * @memberof ActionReq
     * @instance
     */
    ActionReq.prototype.action = 1;

    /**
     * ActionReq betMutiple.
     * @member {number} betMutiple
     * @memberof ActionReq
     * @instance
     */
    ActionReq.prototype.betMutiple = 0;

    /**
     * ActionReq battlePlayerId.
     * @member {string} battlePlayerId
     * @memberof ActionReq
     * @instance
     */
    ActionReq.prototype.battlePlayerId = "";

    /**
     * ActionReq autoFollow.
     * @member {boolean} autoFollow
     * @memberof ActionReq
     * @instance
     */
    ActionReq.prototype.autoFollow = false;

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
        w.uint32(8).int32(m.action);
        if (m.betMutiple != null && m.hasOwnProperty("betMutiple"))
            w.uint32(16).int32(m.betMutiple);
        if (m.battlePlayerId != null && m.hasOwnProperty("battlePlayerId"))
            w.uint32(26).string(m.battlePlayerId);
        if (m.autoFollow != null && m.hasOwnProperty("autoFollow"))
            w.uint32(32).bool(m.autoFollow);
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
                m.action = r.int32();
                break;
            case 2:
                m.betMutiple = r.int32();
                break;
            case 3:
                m.battlePlayerId = r.string();
                break;
            case 4:
                m.autoFollow = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("action"))
            throw $util.ProtocolError("missing required 'action'", { instance: m });
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
     * @property {ICardResult|null} [cardResult] ActionRes cardResult
     * @property {IActionPlayerInfo|null} [actionPlayerInfo] ActionRes actionPlayerInfo
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
     * ActionRes cardResult.
     * @member {ICardResult|null|undefined} cardResult
     * @memberof ActionRes
     * @instance
     */
    ActionRes.prototype.cardResult = null;

    /**
     * ActionRes actionPlayerInfo.
     * @member {IActionPlayerInfo|null|undefined} actionPlayerInfo
     * @memberof ActionRes
     * @instance
     */
    ActionRes.prototype.actionPlayerInfo = null;

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
        if (m.cardResult != null && m.hasOwnProperty("cardResult"))
            $root.CardResult.encode(m.cardResult, w.uint32(26).fork()).ldelim();
        if (m.actionPlayerInfo != null && m.hasOwnProperty("actionPlayerInfo"))
            $root.ActionPlayerInfo.encode(m.actionPlayerInfo, w.uint32(34).fork()).ldelim();
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
            case 3:
                m.cardResult = $root.CardResult.decode(r, r.uint32());
                break;
            case 4:
                m.actionPlayerInfo = $root.ActionPlayerInfo.decode(r, r.uint32());
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
     * @property {IPlayerInfo} player PushAction player
     * @property {ActionType} action PushAction action
     * @property {string|null} [totalReward] PushAction totalReward
     * @property {IBattleResult|null} [battleResult] PushAction battleResult
     * @property {IAllResult|null} [allResult] PushAction allResult
     * @property {number|null} [round] PushAction round
     * @property {number|null} [betMoney] PushAction betMoney
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
     * PushAction player.
     * @member {IPlayerInfo} player
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.player = null;

    /**
     * PushAction action.
     * @member {ActionType} action
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.action = 1;

    /**
     * PushAction totalReward.
     * @member {string} totalReward
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.totalReward = "";

    /**
     * PushAction battleResult.
     * @member {IBattleResult|null|undefined} battleResult
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.battleResult = null;

    /**
     * PushAction allResult.
     * @member {IAllResult|null|undefined} allResult
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.allResult = null;

    /**
     * PushAction round.
     * @member {number} round
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.round = 0;

    /**
     * PushAction betMoney.
     * @member {number} betMoney
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.betMoney = 0;

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
        $root.PlayerInfo.encode(m.player, w.uint32(10).fork()).ldelim();
        w.uint32(16).int32(m.action);
        if (m.totalReward != null && m.hasOwnProperty("totalReward"))
            w.uint32(26).string(m.totalReward);
        if (m.battleResult != null && m.hasOwnProperty("battleResult"))
            $root.BattleResult.encode(m.battleResult, w.uint32(34).fork()).ldelim();
        if (m.allResult != null && m.hasOwnProperty("allResult"))
            $root.AllResult.encode(m.allResult, w.uint32(42).fork()).ldelim();
        if (m.round != null && m.hasOwnProperty("round"))
            w.uint32(48).int32(m.round);
        if (m.betMoney != null && m.hasOwnProperty("betMoney"))
            w.uint32(56).int32(m.betMoney);
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
                m.player = $root.PlayerInfo.decode(r, r.uint32());
                break;
            case 2:
                m.action = r.int32();
                break;
            case 3:
                m.totalReward = r.string();
                break;
            case 4:
                m.battleResult = $root.BattleResult.decode(r, r.uint32());
                break;
            case 5:
                m.allResult = $root.AllResult.decode(r, r.uint32());
                break;
            case 6:
                m.round = r.int32();
                break;
            case 7:
                m.betMoney = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("player"))
            throw $util.ProtocolError("missing required 'player'", { instance: m });
        if (!m.hasOwnProperty("action"))
            throw $util.ProtocolError("missing required 'action'", { instance: m });
        return m;
    };

    return PushAction;
})();

$root.PushAIInfo = (function() {

    /**
     * Properties of a PushAIInfo.
     * @exports IPushAIInfo
     * @interface IPushAIInfo
     * @property {string|null} [des] PushAIInfo des
     * @property {string|null} [playerId] PushAIInfo playerId
     */

    /**
     * Constructs a new PushAIInfo.
     * @exports PushAIInfo
     * @classdesc Represents a PushAIInfo.
     * @implements IPushAIInfo
     * @constructor
     * @param {IPushAIInfo=} [p] Properties to set
     */
    function PushAIInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushAIInfo des.
     * @member {string} des
     * @memberof PushAIInfo
     * @instance
     */
    PushAIInfo.prototype.des = "";

    /**
     * PushAIInfo playerId.
     * @member {string} playerId
     * @memberof PushAIInfo
     * @instance
     */
    PushAIInfo.prototype.playerId = "";

    /**
     * Creates a new PushAIInfo instance using the specified properties.
     * @function create
     * @memberof PushAIInfo
     * @static
     * @param {IPushAIInfo=} [properties] Properties to set
     * @returns {PushAIInfo} PushAIInfo instance
     */
    PushAIInfo.create = function create(properties) {
        return new PushAIInfo(properties);
    };

    /**
     * Encodes the specified PushAIInfo message. Does not implicitly {@link PushAIInfo.verify|verify} messages.
     * @function encode
     * @memberof PushAIInfo
     * @static
     * @param {IPushAIInfo} m PushAIInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushAIInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.des != null && m.hasOwnProperty("des"))
            w.uint32(10).string(m.des);
        if (m.playerId != null && m.hasOwnProperty("playerId"))
            w.uint32(18).string(m.playerId);
        return w;
    };

    /**
     * Decodes a PushAIInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushAIInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushAIInfo} PushAIInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushAIInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushAIInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.des = r.string();
                break;
            case 2:
                m.playerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushAIInfo;
})();

$root.PushChangeRoom = (function() {

    /**
     * Properties of a PushChangeRoom.
     * @exports IPushChangeRoom
     * @interface IPushChangeRoom
     */

    /**
     * Constructs a new PushChangeRoom.
     * @exports PushChangeRoom
     * @classdesc Represents a PushChangeRoom.
     * @implements IPushChangeRoom
     * @constructor
     * @param {IPushChangeRoom=} [p] Properties to set
     */
    function PushChangeRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new PushChangeRoom instance using the specified properties.
     * @function create
     * @memberof PushChangeRoom
     * @static
     * @param {IPushChangeRoom=} [properties] Properties to set
     * @returns {PushChangeRoom} PushChangeRoom instance
     */
    PushChangeRoom.create = function create(properties) {
        return new PushChangeRoom(properties);
    };

    /**
     * Encodes the specified PushChangeRoom message. Does not implicitly {@link PushChangeRoom.verify|verify} messages.
     * @function encode
     * @memberof PushChangeRoom
     * @static
     * @param {IPushChangeRoom} m PushChangeRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushChangeRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a PushChangeRoom message from the specified reader or buffer.
     * @function decode
     * @memberof PushChangeRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushChangeRoom} PushChangeRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushChangeRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushChangeRoom();
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

    return PushChangeRoom;
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

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.RedBlackBattle || ($protobuf.roots.RedBlackBattle = {});

/**
 * RBBattleState enum.
 * @exports RBBattleState
 * @enum {string}
 * @property {number} WaitingStartState=1 WaitingStartState value
 * @property {number} BetState=2 BetState value
 * @property {number} StopBetState=3 StopBetState value
 * @property {number} SettlementState=4 SettlementState value
 * @property {number} WaitingNextGame=5 WaitingNextGame value
 */
$root.RBBattleState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "WaitingStartState"] = 1;
    values[valuesById[2] = "BetState"] = 2;
    values[valuesById[3] = "StopBetState"] = 3;
    values[valuesById[4] = "SettlementState"] = 4;
    values[valuesById[5] = "WaitingNextGame"] = 5;
    return values;
})();

/**
 * RBCardType enum.
 * @exports RBCardType
 * @enum {string}
 * @property {number} SingleType=0 SingleType value
 * @property {number} PairType=1 PairType value
 * @property {number} ShunziType=2 ShunziType value
 * @property {number} JinhuaType=3 JinhuaType value
 * @property {number} JinshunType=4 JinshunType value
 * @property {number} BaoziType=5 BaoziType value
 */
$root.RBCardType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SingleType"] = 0;
    values[valuesById[1] = "PairType"] = 1;
    values[valuesById[2] = "ShunziType"] = 2;
    values[valuesById[3] = "JinhuaType"] = 3;
    values[valuesById[4] = "JinshunType"] = 4;
    values[valuesById[5] = "BaoziType"] = 5;
    return values;
})();

/**
 * RBBetArea enum.
 * @exports RBBetArea
 * @enum {string}
 * @property {number} RedArea=1 RedArea value
 * @property {number} BlackArea=2 BlackArea value
 * @property {number} MultipleArea=3 MultipleArea value
 */
$root.RBBetArea = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "RedArea"] = 1;
    values[valuesById[2] = "BlackArea"] = 2;
    values[valuesById[3] = "MultipleArea"] = 3;
    return values;
})();

$root.CardInfo = (function() {

    /**
     * Properties of a CardInfo.
     * @exports ICardInfo
     * @interface ICardInfo
     * @property {number} id CardInfo id
     * @property {CardColor} color CardInfo color
     * @property {CardSize} size CardInfo size
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
     * CardInfo color.
     * @member {CardColor} color
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.color = 1;

    /**
     * CardInfo size.
     * @member {CardSize} size
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.size = 3;

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
        w.uint32(16).int32(m.color);
        w.uint32(24).int32(m.size);
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
                m.color = r.int32();
                break;
            case 3:
                m.size = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("color"))
            throw $util.ProtocolError("missing required 'color'", { instance: m });
        if (!m.hasOwnProperty("size"))
            throw $util.ProtocolError("missing required 'size'", { instance: m });
        return m;
    };

    return CardInfo;
})();

$root.RBRoleInfo = (function() {

    /**
     * Properties of a RBRoleInfo.
     * @exports IRBRoleInfo
     * @interface IRBRoleInfo
     * @property {string} playerId RBRoleInfo playerId
     * @property {string} userName RBRoleInfo userName
     * @property {string} headImageUrl RBRoleInfo headImageUrl
     * @property {string} headbox RBRoleInfo headbox
     * @property {number} vipLv RBRoleInfo vipLv
     * @property {string} gold RBRoleInfo gold
     * @property {string|null} [city] RBRoleInfo city
     * @property {string|null} [province] RBRoleInfo province
     */

    /**
     * Constructs a new RBRoleInfo.
     * @exports RBRoleInfo
     * @classdesc Represents a RBRoleInfo.
     * @implements IRBRoleInfo
     * @constructor
     * @param {IRBRoleInfo=} [p] Properties to set
     */
    function RBRoleInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RBRoleInfo playerId.
     * @member {string} playerId
     * @memberof RBRoleInfo
     * @instance
     */
    RBRoleInfo.prototype.playerId = "";

    /**
     * RBRoleInfo userName.
     * @member {string} userName
     * @memberof RBRoleInfo
     * @instance
     */
    RBRoleInfo.prototype.userName = "";

    /**
     * RBRoleInfo headImageUrl.
     * @member {string} headImageUrl
     * @memberof RBRoleInfo
     * @instance
     */
    RBRoleInfo.prototype.headImageUrl = "";

    /**
     * RBRoleInfo headbox.
     * @member {string} headbox
     * @memberof RBRoleInfo
     * @instance
     */
    RBRoleInfo.prototype.headbox = "";

    /**
     * RBRoleInfo vipLv.
     * @member {number} vipLv
     * @memberof RBRoleInfo
     * @instance
     */
    RBRoleInfo.prototype.vipLv = 0;

    /**
     * RBRoleInfo gold.
     * @member {string} gold
     * @memberof RBRoleInfo
     * @instance
     */
    RBRoleInfo.prototype.gold = "";

    /**
     * RBRoleInfo city.
     * @member {string} city
     * @memberof RBRoleInfo
     * @instance
     */
    RBRoleInfo.prototype.city = "";

    /**
     * RBRoleInfo province.
     * @member {string} province
     * @memberof RBRoleInfo
     * @instance
     */
    RBRoleInfo.prototype.province = "";

    /**
     * Creates a new RBRoleInfo instance using the specified properties.
     * @function create
     * @memberof RBRoleInfo
     * @static
     * @param {IRBRoleInfo=} [properties] Properties to set
     * @returns {RBRoleInfo} RBRoleInfo instance
     */
    RBRoleInfo.create = function create(properties) {
        return new RBRoleInfo(properties);
    };

    /**
     * Encodes the specified RBRoleInfo message. Does not implicitly {@link RBRoleInfo.verify|verify} messages.
     * @function encode
     * @memberof RBRoleInfo
     * @static
     * @param {IRBRoleInfo} m RBRoleInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBRoleInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(18).string(m.userName);
        w.uint32(26).string(m.headImageUrl);
        w.uint32(34).string(m.headbox);
        w.uint32(40).int32(m.vipLv);
        w.uint32(50).string(m.gold);
        if (m.city != null && m.hasOwnProperty("city"))
            w.uint32(58).string(m.city);
        if (m.province != null && m.hasOwnProperty("province"))
            w.uint32(66).string(m.province);
        return w;
    };

    /**
     * Decodes a RBRoleInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RBRoleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBRoleInfo} RBRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBRoleInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBRoleInfo();
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
            case 7:
                m.city = r.string();
                break;
            case 8:
                m.province = r.string();
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

    return RBRoleInfo;
})();

$root.RBBetAreaInfo = (function() {

    /**
     * Properties of a RBBetAreaInfo.
     * @exports IRBBetAreaInfo
     * @interface IRBBetAreaInfo
     * @property {RBBetArea} areaType RBBetAreaInfo areaType
     * @property {string} betCount RBBetAreaInfo betCount
     * @property {boolean|null} [betByClever] RBBetAreaInfo betByClever
     */

    /**
     * Constructs a new RBBetAreaInfo.
     * @exports RBBetAreaInfo
     * @classdesc Represents a RBBetAreaInfo.
     * @implements IRBBetAreaInfo
     * @constructor
     * @param {IRBBetAreaInfo=} [p] Properties to set
     */
    function RBBetAreaInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RBBetAreaInfo areaType.
     * @member {RBBetArea} areaType
     * @memberof RBBetAreaInfo
     * @instance
     */
    RBBetAreaInfo.prototype.areaType = 1;

    /**
     * RBBetAreaInfo betCount.
     * @member {string} betCount
     * @memberof RBBetAreaInfo
     * @instance
     */
    RBBetAreaInfo.prototype.betCount = "";

    /**
     * RBBetAreaInfo betByClever.
     * @member {boolean} betByClever
     * @memberof RBBetAreaInfo
     * @instance
     */
    RBBetAreaInfo.prototype.betByClever = false;

    /**
     * Creates a new RBBetAreaInfo instance using the specified properties.
     * @function create
     * @memberof RBBetAreaInfo
     * @static
     * @param {IRBBetAreaInfo=} [properties] Properties to set
     * @returns {RBBetAreaInfo} RBBetAreaInfo instance
     */
    RBBetAreaInfo.create = function create(properties) {
        return new RBBetAreaInfo(properties);
    };

    /**
     * Encodes the specified RBBetAreaInfo message. Does not implicitly {@link RBBetAreaInfo.verify|verify} messages.
     * @function encode
     * @memberof RBBetAreaInfo
     * @static
     * @param {IRBBetAreaInfo} m RBBetAreaInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBBetAreaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.areaType);
        w.uint32(18).string(m.betCount);
        if (m.betByClever != null && m.hasOwnProperty("betByClever"))
            w.uint32(24).bool(m.betByClever);
        return w;
    };

    /**
     * Decodes a RBBetAreaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RBBetAreaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBBetAreaInfo} RBBetAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBBetAreaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBBetAreaInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.areaType = r.int32();
                break;
            case 2:
                m.betCount = r.string();
                break;
            case 3:
                m.betByClever = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("areaType"))
            throw $util.ProtocolError("missing required 'areaType'", { instance: m });
        if (!m.hasOwnProperty("betCount"))
            throw $util.ProtocolError("missing required 'betCount'", { instance: m });
        return m;
    };

    return RBBetAreaInfo;
})();

$root.RBCardGoup = (function() {

    /**
     * Properties of a RBCardGoup.
     * @exports IRBCardGoup
     * @interface IRBCardGoup
     * @property {Array.<ICardInfo>|null} [cardInfoList] RBCardGoup cardInfoList
     * @property {RBCardType} cardType RBCardGoup cardType
     */

    /**
     * Constructs a new RBCardGoup.
     * @exports RBCardGoup
     * @classdesc Represents a RBCardGoup.
     * @implements IRBCardGoup
     * @constructor
     * @param {IRBCardGoup=} [p] Properties to set
     */
    function RBCardGoup(p) {
        this.cardInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RBCardGoup cardInfoList.
     * @member {Array.<ICardInfo>} cardInfoList
     * @memberof RBCardGoup
     * @instance
     */
    RBCardGoup.prototype.cardInfoList = $util.emptyArray;

    /**
     * RBCardGoup cardType.
     * @member {RBCardType} cardType
     * @memberof RBCardGoup
     * @instance
     */
    RBCardGoup.prototype.cardType = 0;

    /**
     * Creates a new RBCardGoup instance using the specified properties.
     * @function create
     * @memberof RBCardGoup
     * @static
     * @param {IRBCardGoup=} [properties] Properties to set
     * @returns {RBCardGoup} RBCardGoup instance
     */
    RBCardGoup.create = function create(properties) {
        return new RBCardGoup(properties);
    };

    /**
     * Encodes the specified RBCardGoup message. Does not implicitly {@link RBCardGoup.verify|verify} messages.
     * @function encode
     * @memberof RBCardGoup
     * @static
     * @param {IRBCardGoup} m RBCardGoup message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBCardGoup.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cardInfoList != null && m.cardInfoList.length) {
            for (var i = 0; i < m.cardInfoList.length; ++i)
                $root.CardInfo.encode(m.cardInfoList[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(24).int32(m.cardType);
        return w;
    };

    /**
     * Decodes a RBCardGoup message from the specified reader or buffer.
     * @function decode
     * @memberof RBCardGoup
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBCardGoup} RBCardGoup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBCardGoup.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBCardGoup();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.cardInfoList && m.cardInfoList.length))
                    m.cardInfoList = [];
                m.cardInfoList.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.cardType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("cardType"))
            throw $util.ProtocolError("missing required 'cardType'", { instance: m });
        return m;
    };

    return RBCardGoup;
})();

$root.HistoryCardInfo = (function() {

    /**
     * Properties of a HistoryCardInfo.
     * @exports IHistoryCardInfo
     * @interface IHistoryCardInfo
     * @property {RBCardType} cardType HistoryCardInfo cardType
     * @property {boolean} luckyHit HistoryCardInfo luckyHit
     * @property {WinStatus} winStatus HistoryCardInfo winStatus
     */

    /**
     * Constructs a new HistoryCardInfo.
     * @exports HistoryCardInfo
     * @classdesc Represents a HistoryCardInfo.
     * @implements IHistoryCardInfo
     * @constructor
     * @param {IHistoryCardInfo=} [p] Properties to set
     */
    function HistoryCardInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HistoryCardInfo cardType.
     * @member {RBCardType} cardType
     * @memberof HistoryCardInfo
     * @instance
     */
    HistoryCardInfo.prototype.cardType = 0;

    /**
     * HistoryCardInfo luckyHit.
     * @member {boolean} luckyHit
     * @memberof HistoryCardInfo
     * @instance
     */
    HistoryCardInfo.prototype.luckyHit = false;

    /**
     * HistoryCardInfo winStatus.
     * @member {WinStatus} winStatus
     * @memberof HistoryCardInfo
     * @instance
     */
    HistoryCardInfo.prototype.winStatus = 1;

    /**
     * Creates a new HistoryCardInfo instance using the specified properties.
     * @function create
     * @memberof HistoryCardInfo
     * @static
     * @param {IHistoryCardInfo=} [properties] Properties to set
     * @returns {HistoryCardInfo} HistoryCardInfo instance
     */
    HistoryCardInfo.create = function create(properties) {
        return new HistoryCardInfo(properties);
    };

    /**
     * Encodes the specified HistoryCardInfo message. Does not implicitly {@link HistoryCardInfo.verify|verify} messages.
     * @function encode
     * @memberof HistoryCardInfo
     * @static
     * @param {IHistoryCardInfo} m HistoryCardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HistoryCardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.cardType);
        w.uint32(16).bool(m.luckyHit);
        w.uint32(24).int32(m.winStatus);
        return w;
    };

    /**
     * Decodes a HistoryCardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HistoryCardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HistoryCardInfo} HistoryCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HistoryCardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HistoryCardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.cardType = r.int32();
                break;
            case 2:
                m.luckyHit = r.bool();
                break;
            case 3:
                m.winStatus = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("cardType"))
            throw $util.ProtocolError("missing required 'cardType'", { instance: m });
        if (!m.hasOwnProperty("luckyHit"))
            throw $util.ProtocolError("missing required 'luckyHit'", { instance: m });
        if (!m.hasOwnProperty("winStatus"))
            throw $util.ProtocolError("missing required 'winStatus'", { instance: m });
        return m;
    };

    return HistoryCardInfo;
})();

$root.RBHistoryRecord = (function() {

    /**
     * Properties of a RBHistoryRecord.
     * @exports IRBHistoryRecord
     * @interface IRBHistoryRecord
     * @property {Array.<IHistoryCardInfo>|null} [cardInfoList] RBHistoryRecord cardInfoList
     * @property {Array.<WinStatus>|null} [victoryList] RBHistoryRecord victoryList
     * @property {number} redWinningRate RBHistoryRecord redWinningRate
     * @property {number} blackWinningRate RBHistoryRecord blackWinningRate
     */

    /**
     * Constructs a new RBHistoryRecord.
     * @exports RBHistoryRecord
     * @classdesc Represents a RBHistoryRecord.
     * @implements IRBHistoryRecord
     * @constructor
     * @param {IRBHistoryRecord=} [p] Properties to set
     */
    function RBHistoryRecord(p) {
        this.cardInfoList = [];
        this.victoryList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RBHistoryRecord cardInfoList.
     * @member {Array.<IHistoryCardInfo>} cardInfoList
     * @memberof RBHistoryRecord
     * @instance
     */
    RBHistoryRecord.prototype.cardInfoList = $util.emptyArray;

    /**
     * RBHistoryRecord victoryList.
     * @member {Array.<WinStatus>} victoryList
     * @memberof RBHistoryRecord
     * @instance
     */
    RBHistoryRecord.prototype.victoryList = $util.emptyArray;

    /**
     * RBHistoryRecord redWinningRate.
     * @member {number} redWinningRate
     * @memberof RBHistoryRecord
     * @instance
     */
    RBHistoryRecord.prototype.redWinningRate = 0;

    /**
     * RBHistoryRecord blackWinningRate.
     * @member {number} blackWinningRate
     * @memberof RBHistoryRecord
     * @instance
     */
    RBHistoryRecord.prototype.blackWinningRate = 0;

    /**
     * Creates a new RBHistoryRecord instance using the specified properties.
     * @function create
     * @memberof RBHistoryRecord
     * @static
     * @param {IRBHistoryRecord=} [properties] Properties to set
     * @returns {RBHistoryRecord} RBHistoryRecord instance
     */
    RBHistoryRecord.create = function create(properties) {
        return new RBHistoryRecord(properties);
    };

    /**
     * Encodes the specified RBHistoryRecord message. Does not implicitly {@link RBHistoryRecord.verify|verify} messages.
     * @function encode
     * @memberof RBHistoryRecord
     * @static
     * @param {IRBHistoryRecord} m RBHistoryRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBHistoryRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cardInfoList != null && m.cardInfoList.length) {
            for (var i = 0; i < m.cardInfoList.length; ++i)
                $root.HistoryCardInfo.encode(m.cardInfoList[i], w.uint32(10).fork()).ldelim();
        }
        if (m.victoryList != null && m.victoryList.length) {
            for (var i = 0; i < m.victoryList.length; ++i)
                w.uint32(16).int32(m.victoryList[i]);
        }
        w.uint32(24).int32(m.redWinningRate);
        w.uint32(32).int32(m.blackWinningRate);
        return w;
    };

    /**
     * Decodes a RBHistoryRecord message from the specified reader or buffer.
     * @function decode
     * @memberof RBHistoryRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBHistoryRecord} RBHistoryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBHistoryRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBHistoryRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.cardInfoList && m.cardInfoList.length))
                    m.cardInfoList = [];
                m.cardInfoList.push($root.HistoryCardInfo.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.victoryList && m.victoryList.length))
                    m.victoryList = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.victoryList.push(r.int32());
                } else
                    m.victoryList.push(r.int32());
                break;
            case 3:
                m.redWinningRate = r.int32();
                break;
            case 4:
                m.blackWinningRate = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("redWinningRate"))
            throw $util.ProtocolError("missing required 'redWinningRate'", { instance: m });
        if (!m.hasOwnProperty("blackWinningRate"))
            throw $util.ProtocolError("missing required 'blackWinningRate'", { instance: m });
        return m;
    };

    return RBHistoryRecord;
})();

$root.UpdateRBHistoryRecord = (function() {

    /**
     * Properties of an UpdateRBHistoryRecord.
     * @exports IUpdateRBHistoryRecord
     * @interface IUpdateRBHistoryRecord
     * @property {WinStatus} newWinStatus UpdateRBHistoryRecord newWinStatus
     * @property {IHistoryCardInfo} newCardInfo UpdateRBHistoryRecord newCardInfo
     * @property {number} redWinningRate UpdateRBHistoryRecord redWinningRate
     * @property {number} blackWinningRate UpdateRBHistoryRecord blackWinningRate
     * @property {boolean} isClear UpdateRBHistoryRecord isClear
     */

    /**
     * Constructs a new UpdateRBHistoryRecord.
     * @exports UpdateRBHistoryRecord
     * @classdesc Represents an UpdateRBHistoryRecord.
     * @implements IUpdateRBHistoryRecord
     * @constructor
     * @param {IUpdateRBHistoryRecord=} [p] Properties to set
     */
    function UpdateRBHistoryRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UpdateRBHistoryRecord newWinStatus.
     * @member {WinStatus} newWinStatus
     * @memberof UpdateRBHistoryRecord
     * @instance
     */
    UpdateRBHistoryRecord.prototype.newWinStatus = 1;

    /**
     * UpdateRBHistoryRecord newCardInfo.
     * @member {IHistoryCardInfo} newCardInfo
     * @memberof UpdateRBHistoryRecord
     * @instance
     */
    UpdateRBHistoryRecord.prototype.newCardInfo = null;

    /**
     * UpdateRBHistoryRecord redWinningRate.
     * @member {number} redWinningRate
     * @memberof UpdateRBHistoryRecord
     * @instance
     */
    UpdateRBHistoryRecord.prototype.redWinningRate = 0;

    /**
     * UpdateRBHistoryRecord blackWinningRate.
     * @member {number} blackWinningRate
     * @memberof UpdateRBHistoryRecord
     * @instance
     */
    UpdateRBHistoryRecord.prototype.blackWinningRate = 0;

    /**
     * UpdateRBHistoryRecord isClear.
     * @member {boolean} isClear
     * @memberof UpdateRBHistoryRecord
     * @instance
     */
    UpdateRBHistoryRecord.prototype.isClear = false;

    /**
     * Creates a new UpdateRBHistoryRecord instance using the specified properties.
     * @function create
     * @memberof UpdateRBHistoryRecord
     * @static
     * @param {IUpdateRBHistoryRecord=} [properties] Properties to set
     * @returns {UpdateRBHistoryRecord} UpdateRBHistoryRecord instance
     */
    UpdateRBHistoryRecord.create = function create(properties) {
        return new UpdateRBHistoryRecord(properties);
    };

    /**
     * Encodes the specified UpdateRBHistoryRecord message. Does not implicitly {@link UpdateRBHistoryRecord.verify|verify} messages.
     * @function encode
     * @memberof UpdateRBHistoryRecord
     * @static
     * @param {IUpdateRBHistoryRecord} m UpdateRBHistoryRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateRBHistoryRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.newWinStatus);
        $root.HistoryCardInfo.encode(m.newCardInfo, w.uint32(18).fork()).ldelim();
        w.uint32(32).int32(m.redWinningRate);
        w.uint32(40).int32(m.blackWinningRate);
        w.uint32(48).bool(m.isClear);
        return w;
    };

    /**
     * Decodes an UpdateRBHistoryRecord message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateRBHistoryRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UpdateRBHistoryRecord} UpdateRBHistoryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateRBHistoryRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UpdateRBHistoryRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.newWinStatus = r.int32();
                break;
            case 2:
                m.newCardInfo = $root.HistoryCardInfo.decode(r, r.uint32());
                break;
            case 4:
                m.redWinningRate = r.int32();
                break;
            case 5:
                m.blackWinningRate = r.int32();
                break;
            case 6:
                m.isClear = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("newWinStatus"))
            throw $util.ProtocolError("missing required 'newWinStatus'", { instance: m });
        if (!m.hasOwnProperty("newCardInfo"))
            throw $util.ProtocolError("missing required 'newCardInfo'", { instance: m });
        if (!m.hasOwnProperty("redWinningRate"))
            throw $util.ProtocolError("missing required 'redWinningRate'", { instance: m });
        if (!m.hasOwnProperty("blackWinningRate"))
            throw $util.ProtocolError("missing required 'blackWinningRate'", { instance: m });
        if (!m.hasOwnProperty("isClear"))
            throw $util.ProtocolError("missing required 'isClear'", { instance: m });
        return m;
    };

    return UpdateRBHistoryRecord;
})();

$root.RBSeatInfo = (function() {

    /**
     * Properties of a RBSeatInfo.
     * @exports IRBSeatInfo
     * @interface IRBSeatInfo
     * @property {number} seatId RBSeatInfo seatId
     * @property {boolean} hasPlayer RBSeatInfo hasPlayer
     * @property {IRBRoleInfo|null} [roleInfo] RBSeatInfo roleInfo
     */

    /**
     * Constructs a new RBSeatInfo.
     * @exports RBSeatInfo
     * @classdesc Represents a RBSeatInfo.
     * @implements IRBSeatInfo
     * @constructor
     * @param {IRBSeatInfo=} [p] Properties to set
     */
    function RBSeatInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RBSeatInfo seatId.
     * @member {number} seatId
     * @memberof RBSeatInfo
     * @instance
     */
    RBSeatInfo.prototype.seatId = 0;

    /**
     * RBSeatInfo hasPlayer.
     * @member {boolean} hasPlayer
     * @memberof RBSeatInfo
     * @instance
     */
    RBSeatInfo.prototype.hasPlayer = false;

    /**
     * RBSeatInfo roleInfo.
     * @member {IRBRoleInfo|null|undefined} roleInfo
     * @memberof RBSeatInfo
     * @instance
     */
    RBSeatInfo.prototype.roleInfo = null;

    /**
     * Creates a new RBSeatInfo instance using the specified properties.
     * @function create
     * @memberof RBSeatInfo
     * @static
     * @param {IRBSeatInfo=} [properties] Properties to set
     * @returns {RBSeatInfo} RBSeatInfo instance
     */
    RBSeatInfo.create = function create(properties) {
        return new RBSeatInfo(properties);
    };

    /**
     * Encodes the specified RBSeatInfo message. Does not implicitly {@link RBSeatInfo.verify|verify} messages.
     * @function encode
     * @memberof RBSeatInfo
     * @static
     * @param {IRBSeatInfo} m RBSeatInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBSeatInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.seatId);
        w.uint32(16).bool(m.hasPlayer);
        if (m.roleInfo != null && m.hasOwnProperty("roleInfo"))
            $root.RBRoleInfo.encode(m.roleInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a RBSeatInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RBSeatInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBSeatInfo} RBSeatInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBSeatInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBSeatInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.seatId = r.int32();
                break;
            case 2:
                m.hasPlayer = r.bool();
                break;
            case 3:
                m.roleInfo = $root.RBRoleInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("seatId"))
            throw $util.ProtocolError("missing required 'seatId'", { instance: m });
        if (!m.hasOwnProperty("hasPlayer"))
            throw $util.ProtocolError("missing required 'hasPlayer'", { instance: m });
        return m;
    };

    return RBSeatInfo;
})();

$root.RBSeatSettlementInfo = (function() {

    /**
     * Properties of a RBSeatSettlementInfo.
     * @exports IRBSeatSettlementInfo
     * @interface IRBSeatSettlementInfo
     * @property {number} seatId RBSeatSettlementInfo seatId
     * @property {string} winGold RBSeatSettlementInfo winGold
     */

    /**
     * Constructs a new RBSeatSettlementInfo.
     * @exports RBSeatSettlementInfo
     * @classdesc Represents a RBSeatSettlementInfo.
     * @implements IRBSeatSettlementInfo
     * @constructor
     * @param {IRBSeatSettlementInfo=} [p] Properties to set
     */
    function RBSeatSettlementInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RBSeatSettlementInfo seatId.
     * @member {number} seatId
     * @memberof RBSeatSettlementInfo
     * @instance
     */
    RBSeatSettlementInfo.prototype.seatId = 0;

    /**
     * RBSeatSettlementInfo winGold.
     * @member {string} winGold
     * @memberof RBSeatSettlementInfo
     * @instance
     */
    RBSeatSettlementInfo.prototype.winGold = "";

    /**
     * Creates a new RBSeatSettlementInfo instance using the specified properties.
     * @function create
     * @memberof RBSeatSettlementInfo
     * @static
     * @param {IRBSeatSettlementInfo=} [properties] Properties to set
     * @returns {RBSeatSettlementInfo} RBSeatSettlementInfo instance
     */
    RBSeatSettlementInfo.create = function create(properties) {
        return new RBSeatSettlementInfo(properties);
    };

    /**
     * Encodes the specified RBSeatSettlementInfo message. Does not implicitly {@link RBSeatSettlementInfo.verify|verify} messages.
     * @function encode
     * @memberof RBSeatSettlementInfo
     * @static
     * @param {IRBSeatSettlementInfo} m RBSeatSettlementInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBSeatSettlementInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.seatId);
        w.uint32(18).string(m.winGold);
        return w;
    };

    /**
     * Decodes a RBSeatSettlementInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RBSeatSettlementInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBSeatSettlementInfo} RBSeatSettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBSeatSettlementInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBSeatSettlementInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.seatId = r.int32();
                break;
            case 2:
                m.winGold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("seatId"))
            throw $util.ProtocolError("missing required 'seatId'", { instance: m });
        if (!m.hasOwnProperty("winGold"))
            throw $util.ProtocolError("missing required 'winGold'", { instance: m });
        return m;
    };

    return RBSeatSettlementInfo;
})();

$root.InitRBRoomDataRes = (function() {

    /**
     * Properties of an InitRBRoomDataRes.
     * @exports IInitRBRoomDataRes
     * @interface IInitRBRoomDataRes
     * @property {Array.<IRBSeatInfo>|null} [seatInfoList] InitRBRoomDataRes seatInfoList
     * @property {IRBHistoryRecord} historyRecord InitRBRoomDataRes historyRecord
     * @property {Array.<IRBBetAreaInfo>|null} [betAreaInfoList] InitRBRoomDataRes betAreaInfoList
     * @property {Array.<IRBBetAreaInfo>|null} [selfBetInfo] InitRBRoomDataRes selfBetInfo
     * @property {IRBRoleInfo} myRoleInfo InitRBRoomDataRes myRoleInfo
     * @property {RBBattleState} state InitRBRoomDataRes state
     * @property {number} waitTime InitRBRoomDataRes waitTime
     * @property {number} bigBet InitRBRoomDataRes bigBet
     * @property {number} betBaseLimit InitRBRoomDataRes betBaseLimit
     * @property {number} redCoinLimit InitRBRoomDataRes redCoinLimit
     * @property {number} blackCoinLimit InitRBRoomDataRes blackCoinLimit
     * @property {number} luckyCoinLimit InitRBRoomDataRes luckyCoinLimit
     */

    /**
     * Constructs a new InitRBRoomDataRes.
     * @exports InitRBRoomDataRes
     * @classdesc Represents an InitRBRoomDataRes.
     * @implements IInitRBRoomDataRes
     * @constructor
     * @param {IInitRBRoomDataRes=} [p] Properties to set
     */
    function InitRBRoomDataRes(p) {
        this.seatInfoList = [];
        this.betAreaInfoList = [];
        this.selfBetInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InitRBRoomDataRes seatInfoList.
     * @member {Array.<IRBSeatInfo>} seatInfoList
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.seatInfoList = $util.emptyArray;

    /**
     * InitRBRoomDataRes historyRecord.
     * @member {IRBHistoryRecord} historyRecord
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.historyRecord = null;

    /**
     * InitRBRoomDataRes betAreaInfoList.
     * @member {Array.<IRBBetAreaInfo>} betAreaInfoList
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.betAreaInfoList = $util.emptyArray;

    /**
     * InitRBRoomDataRes selfBetInfo.
     * @member {Array.<IRBBetAreaInfo>} selfBetInfo
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.selfBetInfo = $util.emptyArray;

    /**
     * InitRBRoomDataRes myRoleInfo.
     * @member {IRBRoleInfo} myRoleInfo
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.myRoleInfo = null;

    /**
     * InitRBRoomDataRes state.
     * @member {RBBattleState} state
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.state = 1;

    /**
     * InitRBRoomDataRes waitTime.
     * @member {number} waitTime
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.waitTime = 0;

    /**
     * InitRBRoomDataRes bigBet.
     * @member {number} bigBet
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.bigBet = 0;

    /**
     * InitRBRoomDataRes betBaseLimit.
     * @member {number} betBaseLimit
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.betBaseLimit = 0;

    /**
     * InitRBRoomDataRes redCoinLimit.
     * @member {number} redCoinLimit
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.redCoinLimit = 0;

    /**
     * InitRBRoomDataRes blackCoinLimit.
     * @member {number} blackCoinLimit
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.blackCoinLimit = 0;

    /**
     * InitRBRoomDataRes luckyCoinLimit.
     * @member {number} luckyCoinLimit
     * @memberof InitRBRoomDataRes
     * @instance
     */
    InitRBRoomDataRes.prototype.luckyCoinLimit = 0;

    /**
     * Creates a new InitRBRoomDataRes instance using the specified properties.
     * @function create
     * @memberof InitRBRoomDataRes
     * @static
     * @param {IInitRBRoomDataRes=} [properties] Properties to set
     * @returns {InitRBRoomDataRes} InitRBRoomDataRes instance
     */
    InitRBRoomDataRes.create = function create(properties) {
        return new InitRBRoomDataRes(properties);
    };

    /**
     * Encodes the specified InitRBRoomDataRes message. Does not implicitly {@link InitRBRoomDataRes.verify|verify} messages.
     * @function encode
     * @memberof InitRBRoomDataRes
     * @static
     * @param {IInitRBRoomDataRes} m InitRBRoomDataRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InitRBRoomDataRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.seatInfoList != null && m.seatInfoList.length) {
            for (var i = 0; i < m.seatInfoList.length; ++i)
                $root.RBSeatInfo.encode(m.seatInfoList[i], w.uint32(10).fork()).ldelim();
        }
        $root.RBHistoryRecord.encode(m.historyRecord, w.uint32(18).fork()).ldelim();
        if (m.betAreaInfoList != null && m.betAreaInfoList.length) {
            for (var i = 0; i < m.betAreaInfoList.length; ++i)
                $root.RBBetAreaInfo.encode(m.betAreaInfoList[i], w.uint32(26).fork()).ldelim();
        }
        if (m.selfBetInfo != null && m.selfBetInfo.length) {
            for (var i = 0; i < m.selfBetInfo.length; ++i)
                $root.RBBetAreaInfo.encode(m.selfBetInfo[i], w.uint32(34).fork()).ldelim();
        }
        $root.RBRoleInfo.encode(m.myRoleInfo, w.uint32(42).fork()).ldelim();
        w.uint32(48).int32(m.state);
        w.uint32(56).int32(m.waitTime);
        w.uint32(64).int32(m.bigBet);
        w.uint32(72).int32(m.betBaseLimit);
        w.uint32(80).int32(m.redCoinLimit);
        w.uint32(88).int32(m.blackCoinLimit);
        w.uint32(96).int32(m.luckyCoinLimit);
        return w;
    };

    /**
     * Decodes an InitRBRoomDataRes message from the specified reader or buffer.
     * @function decode
     * @memberof InitRBRoomDataRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InitRBRoomDataRes} InitRBRoomDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InitRBRoomDataRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InitRBRoomDataRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.seatInfoList && m.seatInfoList.length))
                    m.seatInfoList = [];
                m.seatInfoList.push($root.RBSeatInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.historyRecord = $root.RBHistoryRecord.decode(r, r.uint32());
                break;
            case 3:
                if (!(m.betAreaInfoList && m.betAreaInfoList.length))
                    m.betAreaInfoList = [];
                m.betAreaInfoList.push($root.RBBetAreaInfo.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.selfBetInfo && m.selfBetInfo.length))
                    m.selfBetInfo = [];
                m.selfBetInfo.push($root.RBBetAreaInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.myRoleInfo = $root.RBRoleInfo.decode(r, r.uint32());
                break;
            case 6:
                m.state = r.int32();
                break;
            case 7:
                m.waitTime = r.int32();
                break;
            case 8:
                m.bigBet = r.int32();
                break;
            case 9:
                m.betBaseLimit = r.int32();
                break;
            case 10:
                m.redCoinLimit = r.int32();
                break;
            case 11:
                m.blackCoinLimit = r.int32();
                break;
            case 12:
                m.luckyCoinLimit = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("historyRecord"))
            throw $util.ProtocolError("missing required 'historyRecord'", { instance: m });
        if (!m.hasOwnProperty("myRoleInfo"))
            throw $util.ProtocolError("missing required 'myRoleInfo'", { instance: m });
        if (!m.hasOwnProperty("state"))
            throw $util.ProtocolError("missing required 'state'", { instance: m });
        if (!m.hasOwnProperty("waitTime"))
            throw $util.ProtocolError("missing required 'waitTime'", { instance: m });
        if (!m.hasOwnProperty("bigBet"))
            throw $util.ProtocolError("missing required 'bigBet'", { instance: m });
        if (!m.hasOwnProperty("betBaseLimit"))
            throw $util.ProtocolError("missing required 'betBaseLimit'", { instance: m });
        if (!m.hasOwnProperty("redCoinLimit"))
            throw $util.ProtocolError("missing required 'redCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("blackCoinLimit"))
            throw $util.ProtocolError("missing required 'blackCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("luckyCoinLimit"))
            throw $util.ProtocolError("missing required 'luckyCoinLimit'", { instance: m });
        return m;
    };

    return InitRBRoomDataRes;
})();

$root.UpdateRBRoomDataRes = (function() {

    /**
     * Properties of an UpdateRBRoomDataRes.
     * @exports IUpdateRBRoomDataRes
     * @interface IUpdateRBRoomDataRes
     * @property {Array.<IRBSeatInfo>|null} [seatInfoList] UpdateRBRoomDataRes seatInfoList
     */

    /**
     * Constructs a new UpdateRBRoomDataRes.
     * @exports UpdateRBRoomDataRes
     * @classdesc Represents an UpdateRBRoomDataRes.
     * @implements IUpdateRBRoomDataRes
     * @constructor
     * @param {IUpdateRBRoomDataRes=} [p] Properties to set
     */
    function UpdateRBRoomDataRes(p) {
        this.seatInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UpdateRBRoomDataRes seatInfoList.
     * @member {Array.<IRBSeatInfo>} seatInfoList
     * @memberof UpdateRBRoomDataRes
     * @instance
     */
    UpdateRBRoomDataRes.prototype.seatInfoList = $util.emptyArray;

    /**
     * Creates a new UpdateRBRoomDataRes instance using the specified properties.
     * @function create
     * @memberof UpdateRBRoomDataRes
     * @static
     * @param {IUpdateRBRoomDataRes=} [properties] Properties to set
     * @returns {UpdateRBRoomDataRes} UpdateRBRoomDataRes instance
     */
    UpdateRBRoomDataRes.create = function create(properties) {
        return new UpdateRBRoomDataRes(properties);
    };

    /**
     * Encodes the specified UpdateRBRoomDataRes message. Does not implicitly {@link UpdateRBRoomDataRes.verify|verify} messages.
     * @function encode
     * @memberof UpdateRBRoomDataRes
     * @static
     * @param {IUpdateRBRoomDataRes} m UpdateRBRoomDataRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateRBRoomDataRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.seatInfoList != null && m.seatInfoList.length) {
            for (var i = 0; i < m.seatInfoList.length; ++i)
                $root.RBSeatInfo.encode(m.seatInfoList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an UpdateRBRoomDataRes message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateRBRoomDataRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UpdateRBRoomDataRes} UpdateRBRoomDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateRBRoomDataRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UpdateRBRoomDataRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.seatInfoList && m.seatInfoList.length))
                    m.seatInfoList = [];
                m.seatInfoList.push($root.RBSeatInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return UpdateRBRoomDataRes;
})();

$root.ChangeBattleStateRes = (function() {

    /**
     * Properties of a ChangeBattleStateRes.
     * @exports IChangeBattleStateRes
     * @interface IChangeBattleStateRes
     * @property {RBBattleState} battleState ChangeBattleStateRes battleState
     * @property {boolean} hasCountDown ChangeBattleStateRes hasCountDown
     * @property {number|null} [countDown] ChangeBattleStateRes countDown
     */

    /**
     * Constructs a new ChangeBattleStateRes.
     * @exports ChangeBattleStateRes
     * @classdesc Represents a ChangeBattleStateRes.
     * @implements IChangeBattleStateRes
     * @constructor
     * @param {IChangeBattleStateRes=} [p] Properties to set
     */
    function ChangeBattleStateRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChangeBattleStateRes battleState.
     * @member {RBBattleState} battleState
     * @memberof ChangeBattleStateRes
     * @instance
     */
    ChangeBattleStateRes.prototype.battleState = 1;

    /**
     * ChangeBattleStateRes hasCountDown.
     * @member {boolean} hasCountDown
     * @memberof ChangeBattleStateRes
     * @instance
     */
    ChangeBattleStateRes.prototype.hasCountDown = false;

    /**
     * ChangeBattleStateRes countDown.
     * @member {number} countDown
     * @memberof ChangeBattleStateRes
     * @instance
     */
    ChangeBattleStateRes.prototype.countDown = 0;

    /**
     * Creates a new ChangeBattleStateRes instance using the specified properties.
     * @function create
     * @memberof ChangeBattleStateRes
     * @static
     * @param {IChangeBattleStateRes=} [properties] Properties to set
     * @returns {ChangeBattleStateRes} ChangeBattleStateRes instance
     */
    ChangeBattleStateRes.create = function create(properties) {
        return new ChangeBattleStateRes(properties);
    };

    /**
     * Encodes the specified ChangeBattleStateRes message. Does not implicitly {@link ChangeBattleStateRes.verify|verify} messages.
     * @function encode
     * @memberof ChangeBattleStateRes
     * @static
     * @param {IChangeBattleStateRes} m ChangeBattleStateRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeBattleStateRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.battleState);
        w.uint32(16).bool(m.hasCountDown);
        if (m.countDown != null && m.hasOwnProperty("countDown"))
            w.uint32(24).int32(m.countDown);
        return w;
    };

    /**
     * Decodes a ChangeBattleStateRes message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeBattleStateRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChangeBattleStateRes} ChangeBattleStateRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeBattleStateRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChangeBattleStateRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.battleState = r.int32();
                break;
            case 2:
                m.hasCountDown = r.bool();
                break;
            case 3:
                m.countDown = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("battleState"))
            throw $util.ProtocolError("missing required 'battleState'", { instance: m });
        if (!m.hasOwnProperty("hasCountDown"))
            throw $util.ProtocolError("missing required 'hasCountDown'", { instance: m });
        return m;
    };

    return ChangeBattleStateRes;
})();

$root.PushRBBattleSettlementRes = (function() {

    /**
     * Properties of a PushRBBattleSettlementRes.
     * @exports IPushRBBattleSettlementRes
     * @interface IPushRBBattleSettlementRes
     * @property {IRBCardGoup} redSideCardGroup PushRBBattleSettlementRes redSideCardGroup
     * @property {IRBCardGoup} blackSideCardGroup PushRBBattleSettlementRes blackSideCardGroup
     * @property {WinStatus} winState PushRBBattleSettlementRes winState
     * @property {boolean|null} [winLuckyArea] PushRBBattleSettlementRes winLuckyArea
     * @property {Array.<IRBSeatSettlementInfo>|null} [seatSettlementInfoList] PushRBBattleSettlementRes seatSettlementInfoList
     * @property {boolean} isMePlayed PushRBBattleSettlementRes isMePlayed
     * @property {IUpdateRBHistoryRecord} updateRecord PushRBBattleSettlementRes updateRecord
     * @property {Array.<ISettlementRoleInfo>|null} [settlementRoleInfo] PushRBBattleSettlementRes settlementRoleInfo
     */

    /**
     * Constructs a new PushRBBattleSettlementRes.
     * @exports PushRBBattleSettlementRes
     * @classdesc Represents a PushRBBattleSettlementRes.
     * @implements IPushRBBattleSettlementRes
     * @constructor
     * @param {IPushRBBattleSettlementRes=} [p] Properties to set
     */
    function PushRBBattleSettlementRes(p) {
        this.seatSettlementInfoList = [];
        this.settlementRoleInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushRBBattleSettlementRes redSideCardGroup.
     * @member {IRBCardGoup} redSideCardGroup
     * @memberof PushRBBattleSettlementRes
     * @instance
     */
    PushRBBattleSettlementRes.prototype.redSideCardGroup = null;

    /**
     * PushRBBattleSettlementRes blackSideCardGroup.
     * @member {IRBCardGoup} blackSideCardGroup
     * @memberof PushRBBattleSettlementRes
     * @instance
     */
    PushRBBattleSettlementRes.prototype.blackSideCardGroup = null;

    /**
     * PushRBBattleSettlementRes winState.
     * @member {WinStatus} winState
     * @memberof PushRBBattleSettlementRes
     * @instance
     */
    PushRBBattleSettlementRes.prototype.winState = 1;

    /**
     * PushRBBattleSettlementRes winLuckyArea.
     * @member {boolean} winLuckyArea
     * @memberof PushRBBattleSettlementRes
     * @instance
     */
    PushRBBattleSettlementRes.prototype.winLuckyArea = false;

    /**
     * PushRBBattleSettlementRes seatSettlementInfoList.
     * @member {Array.<IRBSeatSettlementInfo>} seatSettlementInfoList
     * @memberof PushRBBattleSettlementRes
     * @instance
     */
    PushRBBattleSettlementRes.prototype.seatSettlementInfoList = $util.emptyArray;

    /**
     * PushRBBattleSettlementRes isMePlayed.
     * @member {boolean} isMePlayed
     * @memberof PushRBBattleSettlementRes
     * @instance
     */
    PushRBBattleSettlementRes.prototype.isMePlayed = false;

    /**
     * PushRBBattleSettlementRes updateRecord.
     * @member {IUpdateRBHistoryRecord} updateRecord
     * @memberof PushRBBattleSettlementRes
     * @instance
     */
    PushRBBattleSettlementRes.prototype.updateRecord = null;

    /**
     * PushRBBattleSettlementRes settlementRoleInfo.
     * @member {Array.<ISettlementRoleInfo>} settlementRoleInfo
     * @memberof PushRBBattleSettlementRes
     * @instance
     */
    PushRBBattleSettlementRes.prototype.settlementRoleInfo = $util.emptyArray;

    /**
     * Creates a new PushRBBattleSettlementRes instance using the specified properties.
     * @function create
     * @memberof PushRBBattleSettlementRes
     * @static
     * @param {IPushRBBattleSettlementRes=} [properties] Properties to set
     * @returns {PushRBBattleSettlementRes} PushRBBattleSettlementRes instance
     */
    PushRBBattleSettlementRes.create = function create(properties) {
        return new PushRBBattleSettlementRes(properties);
    };

    /**
     * Encodes the specified PushRBBattleSettlementRes message. Does not implicitly {@link PushRBBattleSettlementRes.verify|verify} messages.
     * @function encode
     * @memberof PushRBBattleSettlementRes
     * @static
     * @param {IPushRBBattleSettlementRes} m PushRBBattleSettlementRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRBBattleSettlementRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.RBCardGoup.encode(m.redSideCardGroup, w.uint32(10).fork()).ldelim();
        $root.RBCardGoup.encode(m.blackSideCardGroup, w.uint32(18).fork()).ldelim();
        w.uint32(24).int32(m.winState);
        if (m.winLuckyArea != null && m.hasOwnProperty("winLuckyArea"))
            w.uint32(32).bool(m.winLuckyArea);
        if (m.seatSettlementInfoList != null && m.seatSettlementInfoList.length) {
            for (var i = 0; i < m.seatSettlementInfoList.length; ++i)
                $root.RBSeatSettlementInfo.encode(m.seatSettlementInfoList[i], w.uint32(42).fork()).ldelim();
        }
        w.uint32(48).bool(m.isMePlayed);
        $root.UpdateRBHistoryRecord.encode(m.updateRecord, w.uint32(58).fork()).ldelim();
        if (m.settlementRoleInfo != null && m.settlementRoleInfo.length) {
            for (var i = 0; i < m.settlementRoleInfo.length; ++i)
                $root.SettlementRoleInfo.encode(m.settlementRoleInfo[i], w.uint32(66).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushRBBattleSettlementRes message from the specified reader or buffer.
     * @function decode
     * @memberof PushRBBattleSettlementRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRBBattleSettlementRes} PushRBBattleSettlementRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRBBattleSettlementRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRBBattleSettlementRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.redSideCardGroup = $root.RBCardGoup.decode(r, r.uint32());
                break;
            case 2:
                m.blackSideCardGroup = $root.RBCardGoup.decode(r, r.uint32());
                break;
            case 3:
                m.winState = r.int32();
                break;
            case 4:
                m.winLuckyArea = r.bool();
                break;
            case 5:
                if (!(m.seatSettlementInfoList && m.seatSettlementInfoList.length))
                    m.seatSettlementInfoList = [];
                m.seatSettlementInfoList.push($root.RBSeatSettlementInfo.decode(r, r.uint32()));
                break;
            case 6:
                m.isMePlayed = r.bool();
                break;
            case 7:
                m.updateRecord = $root.UpdateRBHistoryRecord.decode(r, r.uint32());
                break;
            case 8:
                if (!(m.settlementRoleInfo && m.settlementRoleInfo.length))
                    m.settlementRoleInfo = [];
                m.settlementRoleInfo.push($root.SettlementRoleInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("redSideCardGroup"))
            throw $util.ProtocolError("missing required 'redSideCardGroup'", { instance: m });
        if (!m.hasOwnProperty("blackSideCardGroup"))
            throw $util.ProtocolError("missing required 'blackSideCardGroup'", { instance: m });
        if (!m.hasOwnProperty("winState"))
            throw $util.ProtocolError("missing required 'winState'", { instance: m });
        if (!m.hasOwnProperty("isMePlayed"))
            throw $util.ProtocolError("missing required 'isMePlayed'", { instance: m });
        if (!m.hasOwnProperty("updateRecord"))
            throw $util.ProtocolError("missing required 'updateRecord'", { instance: m });
        return m;
    };

    return PushRBBattleSettlementRes;
})();

$root.BetRedBlackReq = (function() {

    /**
     * Properties of a BetRedBlackReq.
     * @exports IBetRedBlackReq
     * @interface IBetRedBlackReq
     * @property {CommonChipType} chipType BetRedBlackReq chipType
     * @property {RBBetArea} areaType BetRedBlackReq areaType
     */

    /**
     * Constructs a new BetRedBlackReq.
     * @exports BetRedBlackReq
     * @classdesc Represents a BetRedBlackReq.
     * @implements IBetRedBlackReq
     * @constructor
     * @param {IBetRedBlackReq=} [p] Properties to set
     */
    function BetRedBlackReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetRedBlackReq chipType.
     * @member {CommonChipType} chipType
     * @memberof BetRedBlackReq
     * @instance
     */
    BetRedBlackReq.prototype.chipType = 100;

    /**
     * BetRedBlackReq areaType.
     * @member {RBBetArea} areaType
     * @memberof BetRedBlackReq
     * @instance
     */
    BetRedBlackReq.prototype.areaType = 1;

    /**
     * Creates a new BetRedBlackReq instance using the specified properties.
     * @function create
     * @memberof BetRedBlackReq
     * @static
     * @param {IBetRedBlackReq=} [properties] Properties to set
     * @returns {BetRedBlackReq} BetRedBlackReq instance
     */
    BetRedBlackReq.create = function create(properties) {
        return new BetRedBlackReq(properties);
    };

    /**
     * Encodes the specified BetRedBlackReq message. Does not implicitly {@link BetRedBlackReq.verify|verify} messages.
     * @function encode
     * @memberof BetRedBlackReq
     * @static
     * @param {IBetRedBlackReq} m BetRedBlackReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetRedBlackReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.chipType);
        w.uint32(16).int32(m.areaType);
        return w;
    };

    /**
     * Decodes a BetRedBlackReq message from the specified reader or buffer.
     * @function decode
     * @memberof BetRedBlackReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetRedBlackReq} BetRedBlackReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetRedBlackReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetRedBlackReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.chipType = r.int32();
                break;
            case 2:
                m.areaType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("chipType"))
            throw $util.ProtocolError("missing required 'chipType'", { instance: m });
        if (!m.hasOwnProperty("areaType"))
            throw $util.ProtocolError("missing required 'areaType'", { instance: m });
        return m;
    };

    return BetRedBlackReq;
})();

$root.BetRedBlackRes = (function() {

    /**
     * Properties of a BetRedBlackRes.
     * @exports IBetRedBlackRes
     * @interface IBetRedBlackRes
     * @property {boolean} success BetRedBlackRes success
     * @property {string|null} [tips] BetRedBlackRes tips
     */

    /**
     * Constructs a new BetRedBlackRes.
     * @exports BetRedBlackRes
     * @classdesc Represents a BetRedBlackRes.
     * @implements IBetRedBlackRes
     * @constructor
     * @param {IBetRedBlackRes=} [p] Properties to set
     */
    function BetRedBlackRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetRedBlackRes success.
     * @member {boolean} success
     * @memberof BetRedBlackRes
     * @instance
     */
    BetRedBlackRes.prototype.success = false;

    /**
     * BetRedBlackRes tips.
     * @member {string} tips
     * @memberof BetRedBlackRes
     * @instance
     */
    BetRedBlackRes.prototype.tips = "";

    /**
     * Creates a new BetRedBlackRes instance using the specified properties.
     * @function create
     * @memberof BetRedBlackRes
     * @static
     * @param {IBetRedBlackRes=} [properties] Properties to set
     * @returns {BetRedBlackRes} BetRedBlackRes instance
     */
    BetRedBlackRes.create = function create(properties) {
        return new BetRedBlackRes(properties);
    };

    /**
     * Encodes the specified BetRedBlackRes message. Does not implicitly {@link BetRedBlackRes.verify|verify} messages.
     * @function encode
     * @memberof BetRedBlackRes
     * @static
     * @param {IBetRedBlackRes} m BetRedBlackRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetRedBlackRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a BetRedBlackRes message from the specified reader or buffer.
     * @function decode
     * @memberof BetRedBlackRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetRedBlackRes} BetRedBlackRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetRedBlackRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetRedBlackRes();
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

    return BetRedBlackRes;
})();

$root.UserBetRedBlack = (function() {

    /**
     * Properties of a UserBetRedBlack.
     * @exports IUserBetRedBlack
     * @interface IUserBetRedBlack
     * @property {string} playerId UserBetRedBlack playerId
     * @property {CommonChipType} chipType UserBetRedBlack chipType
     * @property {RBBetArea} betArea UserBetRedBlack betArea
     * @property {string} gold UserBetRedBlack gold
     */

    /**
     * Constructs a new UserBetRedBlack.
     * @exports UserBetRedBlack
     * @classdesc Represents a UserBetRedBlack.
     * @implements IUserBetRedBlack
     * @constructor
     * @param {IUserBetRedBlack=} [p] Properties to set
     */
    function UserBetRedBlack(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserBetRedBlack playerId.
     * @member {string} playerId
     * @memberof UserBetRedBlack
     * @instance
     */
    UserBetRedBlack.prototype.playerId = "";

    /**
     * UserBetRedBlack chipType.
     * @member {CommonChipType} chipType
     * @memberof UserBetRedBlack
     * @instance
     */
    UserBetRedBlack.prototype.chipType = 100;

    /**
     * UserBetRedBlack betArea.
     * @member {RBBetArea} betArea
     * @memberof UserBetRedBlack
     * @instance
     */
    UserBetRedBlack.prototype.betArea = 1;

    /**
     * UserBetRedBlack gold.
     * @member {string} gold
     * @memberof UserBetRedBlack
     * @instance
     */
    UserBetRedBlack.prototype.gold = "";

    /**
     * Creates a new UserBetRedBlack instance using the specified properties.
     * @function create
     * @memberof UserBetRedBlack
     * @static
     * @param {IUserBetRedBlack=} [properties] Properties to set
     * @returns {UserBetRedBlack} UserBetRedBlack instance
     */
    UserBetRedBlack.create = function create(properties) {
        return new UserBetRedBlack(properties);
    };

    /**
     * Encodes the specified UserBetRedBlack message. Does not implicitly {@link UserBetRedBlack.verify|verify} messages.
     * @function encode
     * @memberof UserBetRedBlack
     * @static
     * @param {IUserBetRedBlack} m UserBetRedBlack message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserBetRedBlack.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.chipType);
        w.uint32(24).int32(m.betArea);
        w.uint32(34).string(m.gold);
        return w;
    };

    /**
     * Decodes a UserBetRedBlack message from the specified reader or buffer.
     * @function decode
     * @memberof UserBetRedBlack
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserBetRedBlack} UserBetRedBlack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserBetRedBlack.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserBetRedBlack();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.chipType = r.int32();
                break;
            case 3:
                m.betArea = r.int32();
                break;
            case 4:
                m.gold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("chipType"))
            throw $util.ProtocolError("missing required 'chipType'", { instance: m });
        if (!m.hasOwnProperty("betArea"))
            throw $util.ProtocolError("missing required 'betArea'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return UserBetRedBlack;
})();

$root.PushUserBetRedBlackRes = (function() {

    /**
     * Properties of a PushUserBetRedBlackRes.
     * @exports IPushUserBetRedBlackRes
     * @interface IPushUserBetRedBlackRes
     * @property {Array.<IRBBetAreaInfo>|null} [betAreaInfoList] PushUserBetRedBlackRes betAreaInfoList
     * @property {Array.<IUserBetRedBlack>|null} [betList] PushUserBetRedBlackRes betList
     */

    /**
     * Constructs a new PushUserBetRedBlackRes.
     * @exports PushUserBetRedBlackRes
     * @classdesc Represents a PushUserBetRedBlackRes.
     * @implements IPushUserBetRedBlackRes
     * @constructor
     * @param {IPushUserBetRedBlackRes=} [p] Properties to set
     */
    function PushUserBetRedBlackRes(p) {
        this.betAreaInfoList = [];
        this.betList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushUserBetRedBlackRes betAreaInfoList.
     * @member {Array.<IRBBetAreaInfo>} betAreaInfoList
     * @memberof PushUserBetRedBlackRes
     * @instance
     */
    PushUserBetRedBlackRes.prototype.betAreaInfoList = $util.emptyArray;

    /**
     * PushUserBetRedBlackRes betList.
     * @member {Array.<IUserBetRedBlack>} betList
     * @memberof PushUserBetRedBlackRes
     * @instance
     */
    PushUserBetRedBlackRes.prototype.betList = $util.emptyArray;

    /**
     * Creates a new PushUserBetRedBlackRes instance using the specified properties.
     * @function create
     * @memberof PushUserBetRedBlackRes
     * @static
     * @param {IPushUserBetRedBlackRes=} [properties] Properties to set
     * @returns {PushUserBetRedBlackRes} PushUserBetRedBlackRes instance
     */
    PushUserBetRedBlackRes.create = function create(properties) {
        return new PushUserBetRedBlackRes(properties);
    };

    /**
     * Encodes the specified PushUserBetRedBlackRes message. Does not implicitly {@link PushUserBetRedBlackRes.verify|verify} messages.
     * @function encode
     * @memberof PushUserBetRedBlackRes
     * @static
     * @param {IPushUserBetRedBlackRes} m PushUserBetRedBlackRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushUserBetRedBlackRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.betAreaInfoList != null && m.betAreaInfoList.length) {
            for (var i = 0; i < m.betAreaInfoList.length; ++i)
                $root.RBBetAreaInfo.encode(m.betAreaInfoList[i], w.uint32(10).fork()).ldelim();
        }
        if (m.betList != null && m.betList.length) {
            for (var i = 0; i < m.betList.length; ++i)
                $root.UserBetRedBlack.encode(m.betList[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushUserBetRedBlackRes message from the specified reader or buffer.
     * @function decode
     * @memberof PushUserBetRedBlackRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushUserBetRedBlackRes} PushUserBetRedBlackRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushUserBetRedBlackRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushUserBetRedBlackRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.betAreaInfoList && m.betAreaInfoList.length))
                    m.betAreaInfoList = [];
                m.betAreaInfoList.push($root.RBBetAreaInfo.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.betList && m.betList.length))
                    m.betList = [];
                m.betList.push($root.UserBetRedBlack.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushUserBetRedBlackRes;
})();

$root.RBRoomExitReq = (function() {

    /**
     * Properties of a RBRoomExitReq.
     * @exports IRBRoomExitReq
     * @interface IRBRoomExitReq
     */

    /**
     * Constructs a new RBRoomExitReq.
     * @exports RBRoomExitReq
     * @classdesc Represents a RBRoomExitReq.
     * @implements IRBRoomExitReq
     * @constructor
     * @param {IRBRoomExitReq=} [p] Properties to set
     */
    function RBRoomExitReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RBRoomExitReq instance using the specified properties.
     * @function create
     * @memberof RBRoomExitReq
     * @static
     * @param {IRBRoomExitReq=} [properties] Properties to set
     * @returns {RBRoomExitReq} RBRoomExitReq instance
     */
    RBRoomExitReq.create = function create(properties) {
        return new RBRoomExitReq(properties);
    };

    /**
     * Encodes the specified RBRoomExitReq message. Does not implicitly {@link RBRoomExitReq.verify|verify} messages.
     * @function encode
     * @memberof RBRoomExitReq
     * @static
     * @param {IRBRoomExitReq} m RBRoomExitReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBRoomExitReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RBRoomExitReq message from the specified reader or buffer.
     * @function decode
     * @memberof RBRoomExitReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBRoomExitReq} RBRoomExitReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBRoomExitReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBRoomExitReq();
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

    return RBRoomExitReq;
})();

$root.RBRoomExitRes = (function() {

    /**
     * Properties of a RBRoomExitRes.
     * @exports IRBRoomExitRes
     * @interface IRBRoomExitRes
     * @property {boolean} success RBRoomExitRes success
     * @property {string|null} [errReason] RBRoomExitRes errReason
     */

    /**
     * Constructs a new RBRoomExitRes.
     * @exports RBRoomExitRes
     * @classdesc Represents a RBRoomExitRes.
     * @implements IRBRoomExitRes
     * @constructor
     * @param {IRBRoomExitRes=} [p] Properties to set
     */
    function RBRoomExitRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RBRoomExitRes success.
     * @member {boolean} success
     * @memberof RBRoomExitRes
     * @instance
     */
    RBRoomExitRes.prototype.success = false;

    /**
     * RBRoomExitRes errReason.
     * @member {string} errReason
     * @memberof RBRoomExitRes
     * @instance
     */
    RBRoomExitRes.prototype.errReason = "";

    /**
     * Creates a new RBRoomExitRes instance using the specified properties.
     * @function create
     * @memberof RBRoomExitRes
     * @static
     * @param {IRBRoomExitRes=} [properties] Properties to set
     * @returns {RBRoomExitRes} RBRoomExitRes instance
     */
    RBRoomExitRes.create = function create(properties) {
        return new RBRoomExitRes(properties);
    };

    /**
     * Encodes the specified RBRoomExitRes message. Does not implicitly {@link RBRoomExitRes.verify|verify} messages.
     * @function encode
     * @memberof RBRoomExitRes
     * @static
     * @param {IRBRoomExitRes} m RBRoomExitRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBRoomExitRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.errReason != null && m.hasOwnProperty("errReason"))
            w.uint32(18).string(m.errReason);
        return w;
    };

    /**
     * Decodes a RBRoomExitRes message from the specified reader or buffer.
     * @function decode
     * @memberof RBRoomExitRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBRoomExitRes} RBRoomExitRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBRoomExitRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBRoomExitRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.errReason = r.string();
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

    return RBRoomExitRes;
})();

$root.RBRankingListReq = (function() {

    /**
     * Properties of a RBRankingListReq.
     * @exports IRBRankingListReq
     * @interface IRBRankingListReq
     */

    /**
     * Constructs a new RBRankingListReq.
     * @exports RBRankingListReq
     * @classdesc Represents a RBRankingListReq.
     * @implements IRBRankingListReq
     * @constructor
     * @param {IRBRankingListReq=} [p] Properties to set
     */
    function RBRankingListReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RBRankingListReq instance using the specified properties.
     * @function create
     * @memberof RBRankingListReq
     * @static
     * @param {IRBRankingListReq=} [properties] Properties to set
     * @returns {RBRankingListReq} RBRankingListReq instance
     */
    RBRankingListReq.create = function create(properties) {
        return new RBRankingListReq(properties);
    };

    /**
     * Encodes the specified RBRankingListReq message. Does not implicitly {@link RBRankingListReq.verify|verify} messages.
     * @function encode
     * @memberof RBRankingListReq
     * @static
     * @param {IRBRankingListReq} m RBRankingListReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBRankingListReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RBRankingListReq message from the specified reader or buffer.
     * @function decode
     * @memberof RBRankingListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBRankingListReq} RBRankingListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBRankingListReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBRankingListReq();
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

    return RBRankingListReq;
})();

$root.RBRankingListRes = (function() {

    /**
     * Properties of a RBRankingListRes.
     * @exports IRBRankingListRes
     * @interface IRBRankingListRes
     * @property {Array.<IRBRoleInfo>|null} [rankingList] RBRankingListRes rankingList
     */

    /**
     * Constructs a new RBRankingListRes.
     * @exports RBRankingListRes
     * @classdesc Represents a RBRankingListRes.
     * @implements IRBRankingListRes
     * @constructor
     * @param {IRBRankingListRes=} [p] Properties to set
     */
    function RBRankingListRes(p) {
        this.rankingList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RBRankingListRes rankingList.
     * @member {Array.<IRBRoleInfo>} rankingList
     * @memberof RBRankingListRes
     * @instance
     */
    RBRankingListRes.prototype.rankingList = $util.emptyArray;

    /**
     * Creates a new RBRankingListRes instance using the specified properties.
     * @function create
     * @memberof RBRankingListRes
     * @static
     * @param {IRBRankingListRes=} [properties] Properties to set
     * @returns {RBRankingListRes} RBRankingListRes instance
     */
    RBRankingListRes.create = function create(properties) {
        return new RBRankingListRes(properties);
    };

    /**
     * Encodes the specified RBRankingListRes message. Does not implicitly {@link RBRankingListRes.verify|verify} messages.
     * @function encode
     * @memberof RBRankingListRes
     * @static
     * @param {IRBRankingListRes} m RBRankingListRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RBRankingListRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.rankingList != null && m.rankingList.length) {
            for (var i = 0; i < m.rankingList.length; ++i)
                $root.RBRoleInfo.encode(m.rankingList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RBRankingListRes message from the specified reader or buffer.
     * @function decode
     * @memberof RBRankingListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RBRankingListRes} RBRankingListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RBRankingListRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RBRankingListRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.rankingList && m.rankingList.length))
                    m.rankingList = [];
                m.rankingList.push($root.RBRoleInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RBRankingListRes;
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

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.BaiJiaLe || ($protobuf.roots.BaiJiaLe = {});

/**
 * GameState enum.
 * @exports GameState
 * @enum {string}
 * @property {number} WaitingStartState=1 WaitingStartState value
 * @property {number} BetState=2 BetState value
 * @property {number} StopBetState=3 StopBetState value
 * @property {number} DealState=4 DealState value
 * @property {number} SettlementState=5 SettlementState value
 * @property {number} WaitingNextGame=6 WaitingNextGame value
 * @property {number} WashCard=7 WashCard value
 */
$root.GameState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "WaitingStartState"] = 1;
    values[valuesById[2] = "BetState"] = 2;
    values[valuesById[3] = "StopBetState"] = 3;
    values[valuesById[4] = "DealState"] = 4;
    values[valuesById[5] = "SettlementState"] = 5;
    values[valuesById[6] = "WaitingNextGame"] = 6;
    values[valuesById[7] = "WashCard"] = 7;
    return values;
})();

$root.BaiJiaLeWinStatus = (function() {

    /**
     * Properties of a BaiJiaLeWinStatus.
     * @exports IBaiJiaLeWinStatus
     * @interface IBaiJiaLeWinStatus
     * @property {boolean} isBrankerDouble BaiJiaLeWinStatus isBrankerDouble
     * @property {boolean} isPlayerDouble BaiJiaLeWinStatus isPlayerDouble
     * @property {boolean} isLuckSix BaiJiaLeWinStatus isLuckSix
     * @property {WinStatus} winState BaiJiaLeWinStatus winState
     */

    /**
     * Constructs a new BaiJiaLeWinStatus.
     * @exports BaiJiaLeWinStatus
     * @classdesc Represents a BaiJiaLeWinStatus.
     * @implements IBaiJiaLeWinStatus
     * @constructor
     * @param {IBaiJiaLeWinStatus=} [p] Properties to set
     */
    function BaiJiaLeWinStatus(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BaiJiaLeWinStatus isBrankerDouble.
     * @member {boolean} isBrankerDouble
     * @memberof BaiJiaLeWinStatus
     * @instance
     */
    BaiJiaLeWinStatus.prototype.isBrankerDouble = false;

    /**
     * BaiJiaLeWinStatus isPlayerDouble.
     * @member {boolean} isPlayerDouble
     * @memberof BaiJiaLeWinStatus
     * @instance
     */
    BaiJiaLeWinStatus.prototype.isPlayerDouble = false;

    /**
     * BaiJiaLeWinStatus isLuckSix.
     * @member {boolean} isLuckSix
     * @memberof BaiJiaLeWinStatus
     * @instance
     */
    BaiJiaLeWinStatus.prototype.isLuckSix = false;

    /**
     * BaiJiaLeWinStatus winState.
     * @member {WinStatus} winState
     * @memberof BaiJiaLeWinStatus
     * @instance
     */
    BaiJiaLeWinStatus.prototype.winState = 1;

    /**
     * Creates a new BaiJiaLeWinStatus instance using the specified properties.
     * @function create
     * @memberof BaiJiaLeWinStatus
     * @static
     * @param {IBaiJiaLeWinStatus=} [properties] Properties to set
     * @returns {BaiJiaLeWinStatus} BaiJiaLeWinStatus instance
     */
    BaiJiaLeWinStatus.create = function create(properties) {
        return new BaiJiaLeWinStatus(properties);
    };

    /**
     * Encodes the specified BaiJiaLeWinStatus message. Does not implicitly {@link BaiJiaLeWinStatus.verify|verify} messages.
     * @function encode
     * @memberof BaiJiaLeWinStatus
     * @static
     * @param {IBaiJiaLeWinStatus} m BaiJiaLeWinStatus message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BaiJiaLeWinStatus.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isBrankerDouble);
        w.uint32(16).bool(m.isPlayerDouble);
        w.uint32(24).bool(m.isLuckSix);
        w.uint32(32).int32(m.winState);
        return w;
    };

    /**
     * Decodes a BaiJiaLeWinStatus message from the specified reader or buffer.
     * @function decode
     * @memberof BaiJiaLeWinStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BaiJiaLeWinStatus} BaiJiaLeWinStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BaiJiaLeWinStatus.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BaiJiaLeWinStatus();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isBrankerDouble = r.bool();
                break;
            case 2:
                m.isPlayerDouble = r.bool();
                break;
            case 3:
                m.isLuckSix = r.bool();
                break;
            case 4:
                m.winState = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isBrankerDouble"))
            throw $util.ProtocolError("missing required 'isBrankerDouble'", { instance: m });
        if (!m.hasOwnProperty("isPlayerDouble"))
            throw $util.ProtocolError("missing required 'isPlayerDouble'", { instance: m });
        if (!m.hasOwnProperty("isLuckSix"))
            throw $util.ProtocolError("missing required 'isLuckSix'", { instance: m });
        if (!m.hasOwnProperty("winState"))
            throw $util.ProtocolError("missing required 'winState'", { instance: m });
        return m;
    };

    return BaiJiaLeWinStatus;
})();

/**
 * BetArea enum.
 * @exports BetArea
 * @enum {string}
 * @property {number} BrankerArea=1 BrankerArea value
 * @property {number} PlayerArea=2 PlayerArea value
 * @property {number} DrawArea=3 DrawArea value
 * @property {number} BrankerDouble=4 BrankerDouble value
 * @property {number} PlayerDouble=5 PlayerDouble value
 * @property {number} LuckSix=6 LuckSix value
 */
$root.BetArea = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "BrankerArea"] = 1;
    values[valuesById[2] = "PlayerArea"] = 2;
    values[valuesById[3] = "DrawArea"] = 3;
    values[valuesById[4] = "BrankerDouble"] = 4;
    values[valuesById[5] = "PlayerDouble"] = 5;
    values[valuesById[6] = "LuckSix"] = 6;
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

$root.BaiJiaLeRoleInfo = (function() {

    /**
     * Properties of a BaiJiaLeRoleInfo.
     * @exports IBaiJiaLeRoleInfo
     * @interface IBaiJiaLeRoleInfo
     * @property {string} playerId BaiJiaLeRoleInfo playerId
     * @property {string} userName BaiJiaLeRoleInfo userName
     * @property {string} headImageUrl BaiJiaLeRoleInfo headImageUrl
     * @property {string} headbox BaiJiaLeRoleInfo headbox
     * @property {number} vipLv BaiJiaLeRoleInfo vipLv
     * @property {string} gold BaiJiaLeRoleInfo gold
     * @property {string|null} [city] BaiJiaLeRoleInfo city
     * @property {string|null} [province] BaiJiaLeRoleInfo province
     */

    /**
     * Constructs a new BaiJiaLeRoleInfo.
     * @exports BaiJiaLeRoleInfo
     * @classdesc Represents a BaiJiaLeRoleInfo.
     * @implements IBaiJiaLeRoleInfo
     * @constructor
     * @param {IBaiJiaLeRoleInfo=} [p] Properties to set
     */
    function BaiJiaLeRoleInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BaiJiaLeRoleInfo playerId.
     * @member {string} playerId
     * @memberof BaiJiaLeRoleInfo
     * @instance
     */
    BaiJiaLeRoleInfo.prototype.playerId = "";

    /**
     * BaiJiaLeRoleInfo userName.
     * @member {string} userName
     * @memberof BaiJiaLeRoleInfo
     * @instance
     */
    BaiJiaLeRoleInfo.prototype.userName = "";

    /**
     * BaiJiaLeRoleInfo headImageUrl.
     * @member {string} headImageUrl
     * @memberof BaiJiaLeRoleInfo
     * @instance
     */
    BaiJiaLeRoleInfo.prototype.headImageUrl = "";

    /**
     * BaiJiaLeRoleInfo headbox.
     * @member {string} headbox
     * @memberof BaiJiaLeRoleInfo
     * @instance
     */
    BaiJiaLeRoleInfo.prototype.headbox = "";

    /**
     * BaiJiaLeRoleInfo vipLv.
     * @member {number} vipLv
     * @memberof BaiJiaLeRoleInfo
     * @instance
     */
    BaiJiaLeRoleInfo.prototype.vipLv = 0;

    /**
     * BaiJiaLeRoleInfo gold.
     * @member {string} gold
     * @memberof BaiJiaLeRoleInfo
     * @instance
     */
    BaiJiaLeRoleInfo.prototype.gold = "";

    /**
     * BaiJiaLeRoleInfo city.
     * @member {string} city
     * @memberof BaiJiaLeRoleInfo
     * @instance
     */
    BaiJiaLeRoleInfo.prototype.city = "";

    /**
     * BaiJiaLeRoleInfo province.
     * @member {string} province
     * @memberof BaiJiaLeRoleInfo
     * @instance
     */
    BaiJiaLeRoleInfo.prototype.province = "";

    /**
     * Creates a new BaiJiaLeRoleInfo instance using the specified properties.
     * @function create
     * @memberof BaiJiaLeRoleInfo
     * @static
     * @param {IBaiJiaLeRoleInfo=} [properties] Properties to set
     * @returns {BaiJiaLeRoleInfo} BaiJiaLeRoleInfo instance
     */
    BaiJiaLeRoleInfo.create = function create(properties) {
        return new BaiJiaLeRoleInfo(properties);
    };

    /**
     * Encodes the specified BaiJiaLeRoleInfo message. Does not implicitly {@link BaiJiaLeRoleInfo.verify|verify} messages.
     * @function encode
     * @memberof BaiJiaLeRoleInfo
     * @static
     * @param {IBaiJiaLeRoleInfo} m BaiJiaLeRoleInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BaiJiaLeRoleInfo.encode = function encode(m, w) {
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
     * Decodes a BaiJiaLeRoleInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BaiJiaLeRoleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BaiJiaLeRoleInfo} BaiJiaLeRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BaiJiaLeRoleInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BaiJiaLeRoleInfo();
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

    return BaiJiaLeRoleInfo;
})();

$root.WinMsg = (function() {

    /**
     * Properties of a WinMsg.
     * @exports IWinMsg
     * @interface IWinMsg
     * @property {BetArea} betArea WinMsg betArea
     * @property {string} winCount WinMsg winCount
     */

    /**
     * Constructs a new WinMsg.
     * @exports WinMsg
     * @classdesc Represents a WinMsg.
     * @implements IWinMsg
     * @constructor
     * @param {IWinMsg=} [p] Properties to set
     */
    function WinMsg(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * WinMsg betArea.
     * @member {BetArea} betArea
     * @memberof WinMsg
     * @instance
     */
    WinMsg.prototype.betArea = 1;

    /**
     * WinMsg winCount.
     * @member {string} winCount
     * @memberof WinMsg
     * @instance
     */
    WinMsg.prototype.winCount = "";

    /**
     * Creates a new WinMsg instance using the specified properties.
     * @function create
     * @memberof WinMsg
     * @static
     * @param {IWinMsg=} [properties] Properties to set
     * @returns {WinMsg} WinMsg instance
     */
    WinMsg.create = function create(properties) {
        return new WinMsg(properties);
    };

    /**
     * Encodes the specified WinMsg message. Does not implicitly {@link WinMsg.verify|verify} messages.
     * @function encode
     * @memberof WinMsg
     * @static
     * @param {IWinMsg} m WinMsg message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WinMsg.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.betArea);
        w.uint32(18).string(m.winCount);
        return w;
    };

    /**
     * Decodes a WinMsg message from the specified reader or buffer.
     * @function decode
     * @memberof WinMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {WinMsg} WinMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WinMsg.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WinMsg();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.betArea = r.int32();
                break;
            case 2:
                m.winCount = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("betArea"))
            throw $util.ProtocolError("missing required 'betArea'", { instance: m });
        if (!m.hasOwnProperty("winCount"))
            throw $util.ProtocolError("missing required 'winCount'", { instance: m });
        return m;
    };

    return WinMsg;
})();

$root.BetMsg = (function() {

    /**
     * Properties of a BetMsg.
     * @exports IBetMsg
     * @interface IBetMsg
     * @property {BetArea} betArea BetMsg betArea
     * @property {string} betCount BetMsg betCount
     */

    /**
     * Constructs a new BetMsg.
     * @exports BetMsg
     * @classdesc Represents a BetMsg.
     * @implements IBetMsg
     * @constructor
     * @param {IBetMsg=} [p] Properties to set
     */
    function BetMsg(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetMsg betArea.
     * @member {BetArea} betArea
     * @memberof BetMsg
     * @instance
     */
    BetMsg.prototype.betArea = 1;

    /**
     * BetMsg betCount.
     * @member {string} betCount
     * @memberof BetMsg
     * @instance
     */
    BetMsg.prototype.betCount = "";

    /**
     * Creates a new BetMsg instance using the specified properties.
     * @function create
     * @memberof BetMsg
     * @static
     * @param {IBetMsg=} [properties] Properties to set
     * @returns {BetMsg} BetMsg instance
     */
    BetMsg.create = function create(properties) {
        return new BetMsg(properties);
    };

    /**
     * Encodes the specified BetMsg message. Does not implicitly {@link BetMsg.verify|verify} messages.
     * @function encode
     * @memberof BetMsg
     * @static
     * @param {IBetMsg} m BetMsg message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetMsg.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.betArea);
        w.uint32(18).string(m.betCount);
        return w;
    };

    /**
     * Decodes a BetMsg message from the specified reader or buffer.
     * @function decode
     * @memberof BetMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetMsg} BetMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetMsg.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetMsg();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.betArea = r.int32();
                break;
            case 2:
                m.betCount = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("betArea"))
            throw $util.ProtocolError("missing required 'betArea'", { instance: m });
        if (!m.hasOwnProperty("betCount"))
            throw $util.ProtocolError("missing required 'betCount'", { instance: m });
        return m;
    };

    return BetMsg;
})();

$root.PlayerBetMsg = (function() {

    /**
     * Properties of a PlayerBetMsg.
     * @exports IPlayerBetMsg
     * @interface IPlayerBetMsg
     * @property {string} playerId PlayerBetMsg playerId
     * @property {Array.<IBetMsg>|null} [betList] PlayerBetMsg betList
     * @property {string} gold PlayerBetMsg gold
     */

    /**
     * Constructs a new PlayerBetMsg.
     * @exports PlayerBetMsg
     * @classdesc Represents a PlayerBetMsg.
     * @implements IPlayerBetMsg
     * @constructor
     * @param {IPlayerBetMsg=} [p] Properties to set
     */
    function PlayerBetMsg(p) {
        this.betList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerBetMsg playerId.
     * @member {string} playerId
     * @memberof PlayerBetMsg
     * @instance
     */
    PlayerBetMsg.prototype.playerId = "";

    /**
     * PlayerBetMsg betList.
     * @member {Array.<IBetMsg>} betList
     * @memberof PlayerBetMsg
     * @instance
     */
    PlayerBetMsg.prototype.betList = $util.emptyArray;

    /**
     * PlayerBetMsg gold.
     * @member {string} gold
     * @memberof PlayerBetMsg
     * @instance
     */
    PlayerBetMsg.prototype.gold = "";

    /**
     * Creates a new PlayerBetMsg instance using the specified properties.
     * @function create
     * @memberof PlayerBetMsg
     * @static
     * @param {IPlayerBetMsg=} [properties] Properties to set
     * @returns {PlayerBetMsg} PlayerBetMsg instance
     */
    PlayerBetMsg.create = function create(properties) {
        return new PlayerBetMsg(properties);
    };

    /**
     * Encodes the specified PlayerBetMsg message. Does not implicitly {@link PlayerBetMsg.verify|verify} messages.
     * @function encode
     * @memberof PlayerBetMsg
     * @static
     * @param {IPlayerBetMsg} m PlayerBetMsg message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerBetMsg.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.betList != null && m.betList.length) {
            for (var i = 0; i < m.betList.length; ++i)
                $root.BetMsg.encode(m.betList[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(26).string(m.gold);
        return w;
    };

    /**
     * Decodes a PlayerBetMsg message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerBetMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerBetMsg} PlayerBetMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerBetMsg.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerBetMsg();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                if (!(m.betList && m.betList.length))
                    m.betList = [];
                m.betList.push($root.BetMsg.decode(r, r.uint32()));
                break;
            case 3:
                m.gold = r.string();
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
        return m;
    };

    return PlayerBetMsg;
})();

$root.HistoryCardInfo = (function() {

    /**
     * Properties of a HistoryCardInfo.
     * @exports IHistoryCardInfo
     * @interface IHistoryCardInfo
     * @property {Array.<number>|null} [brankerCards] HistoryCardInfo brankerCards
     * @property {Array.<number>|null} [playerCards] HistoryCardInfo playerCards
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
        this.brankerCards = [];
        this.playerCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HistoryCardInfo brankerCards.
     * @member {Array.<number>} brankerCards
     * @memberof HistoryCardInfo
     * @instance
     */
    HistoryCardInfo.prototype.brankerCards = $util.emptyArray;

    /**
     * HistoryCardInfo playerCards.
     * @member {Array.<number>} playerCards
     * @memberof HistoryCardInfo
     * @instance
     */
    HistoryCardInfo.prototype.playerCards = $util.emptyArray;

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
        if (m.brankerCards != null && m.brankerCards.length) {
            for (var i = 0; i < m.brankerCards.length; ++i)
                w.uint32(8).int32(m.brankerCards[i]);
        }
        if (m.playerCards != null && m.playerCards.length) {
            for (var i = 0; i < m.playerCards.length; ++i)
                w.uint32(16).int32(m.playerCards[i]);
        }
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
                if (!(m.brankerCards && m.brankerCards.length))
                    m.brankerCards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.brankerCards.push(r.int32());
                } else
                    m.brankerCards.push(r.int32());
                break;
            case 2:
                if (!(m.playerCards && m.playerCards.length))
                    m.playerCards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.playerCards.push(r.int32());
                } else
                    m.playerCards.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return HistoryCardInfo;
})();

$root.HistoryRecord = (function() {

    /**
     * Properties of a HistoryRecord.
     * @exports IHistoryRecord
     * @interface IHistoryRecord
     * @property {Array.<IBaiJiaLeWinStatus>|null} [victoryList] HistoryRecord victoryList
     * @property {number} brankerWinCount HistoryRecord brankerWinCount
     * @property {number} playerWinCount HistoryRecord playerWinCount
     * @property {number} drawCount HistoryRecord drawCount
     * @property {number} zhuangdui HistoryRecord zhuangdui
     * @property {number} xiandui HistoryRecord xiandui
     */

    /**
     * Constructs a new HistoryRecord.
     * @exports HistoryRecord
     * @classdesc Represents a HistoryRecord.
     * @implements IHistoryRecord
     * @constructor
     * @param {IHistoryRecord=} [p] Properties to set
     */
    function HistoryRecord(p) {
        this.victoryList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HistoryRecord victoryList.
     * @member {Array.<IBaiJiaLeWinStatus>} victoryList
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.victoryList = $util.emptyArray;

    /**
     * HistoryRecord brankerWinCount.
     * @member {number} brankerWinCount
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.brankerWinCount = 0;

    /**
     * HistoryRecord playerWinCount.
     * @member {number} playerWinCount
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.playerWinCount = 0;

    /**
     * HistoryRecord drawCount.
     * @member {number} drawCount
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.drawCount = 0;

    /**
     * HistoryRecord zhuangdui.
     * @member {number} zhuangdui
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.zhuangdui = 0;

    /**
     * HistoryRecord xiandui.
     * @member {number} xiandui
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.xiandui = 0;

    /**
     * Creates a new HistoryRecord instance using the specified properties.
     * @function create
     * @memberof HistoryRecord
     * @static
     * @param {IHistoryRecord=} [properties] Properties to set
     * @returns {HistoryRecord} HistoryRecord instance
     */
    HistoryRecord.create = function create(properties) {
        return new HistoryRecord(properties);
    };

    /**
     * Encodes the specified HistoryRecord message. Does not implicitly {@link HistoryRecord.verify|verify} messages.
     * @function encode
     * @memberof HistoryRecord
     * @static
     * @param {IHistoryRecord} m HistoryRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HistoryRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.victoryList != null && m.victoryList.length) {
            for (var i = 0; i < m.victoryList.length; ++i)
                $root.BaiJiaLeWinStatus.encode(m.victoryList[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).int32(m.brankerWinCount);
        w.uint32(24).int32(m.playerWinCount);
        w.uint32(32).int32(m.drawCount);
        w.uint32(40).int32(m.zhuangdui);
        w.uint32(48).int32(m.xiandui);
        return w;
    };

    /**
     * Decodes a HistoryRecord message from the specified reader or buffer.
     * @function decode
     * @memberof HistoryRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HistoryRecord} HistoryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HistoryRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HistoryRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.victoryList && m.victoryList.length))
                    m.victoryList = [];
                m.victoryList.push($root.BaiJiaLeWinStatus.decode(r, r.uint32()));
                break;
            case 2:
                m.brankerWinCount = r.int32();
                break;
            case 3:
                m.playerWinCount = r.int32();
                break;
            case 4:
                m.drawCount = r.int32();
                break;
            case 5:
                m.zhuangdui = r.int32();
                break;
            case 6:
                m.xiandui = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("brankerWinCount"))
            throw $util.ProtocolError("missing required 'brankerWinCount'", { instance: m });
        if (!m.hasOwnProperty("playerWinCount"))
            throw $util.ProtocolError("missing required 'playerWinCount'", { instance: m });
        if (!m.hasOwnProperty("drawCount"))
            throw $util.ProtocolError("missing required 'drawCount'", { instance: m });
        if (!m.hasOwnProperty("zhuangdui"))
            throw $util.ProtocolError("missing required 'zhuangdui'", { instance: m });
        if (!m.hasOwnProperty("xiandui"))
            throw $util.ProtocolError("missing required 'xiandui'", { instance: m });
        return m;
    };

    return HistoryRecord;
})();

$root.UpdateHistoryRecord = (function() {

    /**
     * Properties of an UpdateHistoryRecord.
     * @exports IUpdateHistoryRecord
     * @interface IUpdateHistoryRecord
     * @property {IBaiJiaLeWinStatus} newWinStatus UpdateHistoryRecord newWinStatus
     * @property {number} brankerWinCount UpdateHistoryRecord brankerWinCount
     * @property {number} playerWinCount UpdateHistoryRecord playerWinCount
     * @property {number} drawCount UpdateHistoryRecord drawCount
     * @property {number} zhuangdui UpdateHistoryRecord zhuangdui
     * @property {number} xiandui UpdateHistoryRecord xiandui
     * @property {boolean} isClear UpdateHistoryRecord isClear
     */

    /**
     * Constructs a new UpdateHistoryRecord.
     * @exports UpdateHistoryRecord
     * @classdesc Represents an UpdateHistoryRecord.
     * @implements IUpdateHistoryRecord
     * @constructor
     * @param {IUpdateHistoryRecord=} [p] Properties to set
     */
    function UpdateHistoryRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UpdateHistoryRecord newWinStatus.
     * @member {IBaiJiaLeWinStatus} newWinStatus
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.newWinStatus = null;

    /**
     * UpdateHistoryRecord brankerWinCount.
     * @member {number} brankerWinCount
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.brankerWinCount = 0;

    /**
     * UpdateHistoryRecord playerWinCount.
     * @member {number} playerWinCount
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.playerWinCount = 0;

    /**
     * UpdateHistoryRecord drawCount.
     * @member {number} drawCount
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.drawCount = 0;

    /**
     * UpdateHistoryRecord zhuangdui.
     * @member {number} zhuangdui
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.zhuangdui = 0;

    /**
     * UpdateHistoryRecord xiandui.
     * @member {number} xiandui
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.xiandui = 0;

    /**
     * UpdateHistoryRecord isClear.
     * @member {boolean} isClear
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.isClear = false;

    /**
     * Creates a new UpdateHistoryRecord instance using the specified properties.
     * @function create
     * @memberof UpdateHistoryRecord
     * @static
     * @param {IUpdateHistoryRecord=} [properties] Properties to set
     * @returns {UpdateHistoryRecord} UpdateHistoryRecord instance
     */
    UpdateHistoryRecord.create = function create(properties) {
        return new UpdateHistoryRecord(properties);
    };

    /**
     * Encodes the specified UpdateHistoryRecord message. Does not implicitly {@link UpdateHistoryRecord.verify|verify} messages.
     * @function encode
     * @memberof UpdateHistoryRecord
     * @static
     * @param {IUpdateHistoryRecord} m UpdateHistoryRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateHistoryRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.BaiJiaLeWinStatus.encode(m.newWinStatus, w.uint32(10).fork()).ldelim();
        w.uint32(16).int32(m.brankerWinCount);
        w.uint32(24).int32(m.playerWinCount);
        w.uint32(32).int32(m.drawCount);
        w.uint32(40).int32(m.zhuangdui);
        w.uint32(48).int32(m.xiandui);
        w.uint32(56).bool(m.isClear);
        return w;
    };

    /**
     * Decodes an UpdateHistoryRecord message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateHistoryRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UpdateHistoryRecord} UpdateHistoryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateHistoryRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UpdateHistoryRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.newWinStatus = $root.BaiJiaLeWinStatus.decode(r, r.uint32());
                break;
            case 2:
                m.brankerWinCount = r.int32();
                break;
            case 3:
                m.playerWinCount = r.int32();
                break;
            case 4:
                m.drawCount = r.int32();
                break;
            case 5:
                m.zhuangdui = r.int32();
                break;
            case 6:
                m.xiandui = r.int32();
                break;
            case 7:
                m.isClear = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("newWinStatus"))
            throw $util.ProtocolError("missing required 'newWinStatus'", { instance: m });
        if (!m.hasOwnProperty("brankerWinCount"))
            throw $util.ProtocolError("missing required 'brankerWinCount'", { instance: m });
        if (!m.hasOwnProperty("playerWinCount"))
            throw $util.ProtocolError("missing required 'playerWinCount'", { instance: m });
        if (!m.hasOwnProperty("drawCount"))
            throw $util.ProtocolError("missing required 'drawCount'", { instance: m });
        if (!m.hasOwnProperty("zhuangdui"))
            throw $util.ProtocolError("missing required 'zhuangdui'", { instance: m });
        if (!m.hasOwnProperty("xiandui"))
            throw $util.ProtocolError("missing required 'xiandui'", { instance: m });
        if (!m.hasOwnProperty("isClear"))
            throw $util.ProtocolError("missing required 'isClear'", { instance: m });
        return m;
    };

    return UpdateHistoryRecord;
})();

$root.SeatInfo = (function() {

    /**
     * Properties of a SeatInfo.
     * @exports ISeatInfo
     * @interface ISeatInfo
     * @property {number} seatId SeatInfo seatId
     * @property {boolean} hasPlayer SeatInfo hasPlayer
     * @property {IBaiJiaLeRoleInfo|null} [roleInfo] SeatInfo roleInfo
     */

    /**
     * Constructs a new SeatInfo.
     * @exports SeatInfo
     * @classdesc Represents a SeatInfo.
     * @implements ISeatInfo
     * @constructor
     * @param {ISeatInfo=} [p] Properties to set
     */
    function SeatInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SeatInfo seatId.
     * @member {number} seatId
     * @memberof SeatInfo
     * @instance
     */
    SeatInfo.prototype.seatId = 0;

    /**
     * SeatInfo hasPlayer.
     * @member {boolean} hasPlayer
     * @memberof SeatInfo
     * @instance
     */
    SeatInfo.prototype.hasPlayer = false;

    /**
     * SeatInfo roleInfo.
     * @member {IBaiJiaLeRoleInfo|null|undefined} roleInfo
     * @memberof SeatInfo
     * @instance
     */
    SeatInfo.prototype.roleInfo = null;

    /**
     * Creates a new SeatInfo instance using the specified properties.
     * @function create
     * @memberof SeatInfo
     * @static
     * @param {ISeatInfo=} [properties] Properties to set
     * @returns {SeatInfo} SeatInfo instance
     */
    SeatInfo.create = function create(properties) {
        return new SeatInfo(properties);
    };

    /**
     * Encodes the specified SeatInfo message. Does not implicitly {@link SeatInfo.verify|verify} messages.
     * @function encode
     * @memberof SeatInfo
     * @static
     * @param {ISeatInfo} m SeatInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SeatInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.seatId);
        w.uint32(16).bool(m.hasPlayer);
        if (m.roleInfo != null && m.hasOwnProperty("roleInfo"))
            $root.BaiJiaLeRoleInfo.encode(m.roleInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a SeatInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SeatInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SeatInfo} SeatInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SeatInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SeatInfo();
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
                m.roleInfo = $root.BaiJiaLeRoleInfo.decode(r, r.uint32());
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

    return SeatInfo;
})();

$root.SeatSettlementInfo = (function() {

    /**
     * Properties of a SeatSettlementInfo.
     * @exports ISeatSettlementInfo
     * @interface ISeatSettlementInfo
     * @property {string} playerId SeatSettlementInfo playerId
     * @property {Array.<IWinMsg>|null} [winMsgList] SeatSettlementInfo winMsgList
     * @property {string} winGold SeatSettlementInfo winGold
     * @property {string} allWinGold SeatSettlementInfo allWinGold
     * @property {string} gold SeatSettlementInfo gold
     */

    /**
     * Constructs a new SeatSettlementInfo.
     * @exports SeatSettlementInfo
     * @classdesc Represents a SeatSettlementInfo.
     * @implements ISeatSettlementInfo
     * @constructor
     * @param {ISeatSettlementInfo=} [p] Properties to set
     */
    function SeatSettlementInfo(p) {
        this.winMsgList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SeatSettlementInfo playerId.
     * @member {string} playerId
     * @memberof SeatSettlementInfo
     * @instance
     */
    SeatSettlementInfo.prototype.playerId = "";

    /**
     * SeatSettlementInfo winMsgList.
     * @member {Array.<IWinMsg>} winMsgList
     * @memberof SeatSettlementInfo
     * @instance
     */
    SeatSettlementInfo.prototype.winMsgList = $util.emptyArray;

    /**
     * SeatSettlementInfo winGold.
     * @member {string} winGold
     * @memberof SeatSettlementInfo
     * @instance
     */
    SeatSettlementInfo.prototype.winGold = "";

    /**
     * SeatSettlementInfo allWinGold.
     * @member {string} allWinGold
     * @memberof SeatSettlementInfo
     * @instance
     */
    SeatSettlementInfo.prototype.allWinGold = "";

    /**
     * SeatSettlementInfo gold.
     * @member {string} gold
     * @memberof SeatSettlementInfo
     * @instance
     */
    SeatSettlementInfo.prototype.gold = "";

    /**
     * Creates a new SeatSettlementInfo instance using the specified properties.
     * @function create
     * @memberof SeatSettlementInfo
     * @static
     * @param {ISeatSettlementInfo=} [properties] Properties to set
     * @returns {SeatSettlementInfo} SeatSettlementInfo instance
     */
    SeatSettlementInfo.create = function create(properties) {
        return new SeatSettlementInfo(properties);
    };

    /**
     * Encodes the specified SeatSettlementInfo message. Does not implicitly {@link SeatSettlementInfo.verify|verify} messages.
     * @function encode
     * @memberof SeatSettlementInfo
     * @static
     * @param {ISeatSettlementInfo} m SeatSettlementInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SeatSettlementInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.winMsgList != null && m.winMsgList.length) {
            for (var i = 0; i < m.winMsgList.length; ++i)
                $root.WinMsg.encode(m.winMsgList[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(26).string(m.winGold);
        w.uint32(34).string(m.allWinGold);
        w.uint32(42).string(m.gold);
        return w;
    };

    /**
     * Decodes a SeatSettlementInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SeatSettlementInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SeatSettlementInfo} SeatSettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SeatSettlementInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SeatSettlementInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                if (!(m.winMsgList && m.winMsgList.length))
                    m.winMsgList = [];
                m.winMsgList.push($root.WinMsg.decode(r, r.uint32()));
                break;
            case 3:
                m.winGold = r.string();
                break;
            case 4:
                m.allWinGold = r.string();
                break;
            case 5:
                m.gold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("winGold"))
            throw $util.ProtocolError("missing required 'winGold'", { instance: m });
        if (!m.hasOwnProperty("allWinGold"))
            throw $util.ProtocolError("missing required 'allWinGold'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return SeatSettlementInfo;
})();

$root.RestCardsData = (function() {

    /**
     * Properties of a RestCardsData.
     * @exports IRestCardsData
     * @interface IRestCardsData
     * @property {number} restcardsIndex RestCardsData restcardsIndex
     * @property {number} redCardIndex RestCardsData redCardIndex
     */

    /**
     * Constructs a new RestCardsData.
     * @exports RestCardsData
     * @classdesc Represents a RestCardsData.
     * @implements IRestCardsData
     * @constructor
     * @param {IRestCardsData=} [p] Properties to set
     */
    function RestCardsData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RestCardsData restcardsIndex.
     * @member {number} restcardsIndex
     * @memberof RestCardsData
     * @instance
     */
    RestCardsData.prototype.restcardsIndex = 0;

    /**
     * RestCardsData redCardIndex.
     * @member {number} redCardIndex
     * @memberof RestCardsData
     * @instance
     */
    RestCardsData.prototype.redCardIndex = 0;

    /**
     * Creates a new RestCardsData instance using the specified properties.
     * @function create
     * @memberof RestCardsData
     * @static
     * @param {IRestCardsData=} [properties] Properties to set
     * @returns {RestCardsData} RestCardsData instance
     */
    RestCardsData.create = function create(properties) {
        return new RestCardsData(properties);
    };

    /**
     * Encodes the specified RestCardsData message. Does not implicitly {@link RestCardsData.verify|verify} messages.
     * @function encode
     * @memberof RestCardsData
     * @static
     * @param {IRestCardsData} m RestCardsData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RestCardsData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.restcardsIndex);
        w.uint32(16).int32(m.redCardIndex);
        return w;
    };

    /**
     * Decodes a RestCardsData message from the specified reader or buffer.
     * @function decode
     * @memberof RestCardsData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RestCardsData} RestCardsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RestCardsData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RestCardsData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.restcardsIndex = r.int32();
                break;
            case 2:
                m.redCardIndex = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("restcardsIndex"))
            throw $util.ProtocolError("missing required 'restcardsIndex'", { instance: m });
        if (!m.hasOwnProperty("redCardIndex"))
            throw $util.ProtocolError("missing required 'redCardIndex'", { instance: m });
        return m;
    };

    return RestCardsData;
})();

$root.UpdateRoomDataRes = (function() {

    /**
     * Properties of an UpdateRoomDataRes.
     * @exports IUpdateRoomDataRes
     * @interface IUpdateRoomDataRes
     * @property {Array.<ISeatInfo>|null} [seatInfoList] UpdateRoomDataRes seatInfoList
     */

    /**
     * Constructs a new UpdateRoomDataRes.
     * @exports UpdateRoomDataRes
     * @classdesc Represents an UpdateRoomDataRes.
     * @implements IUpdateRoomDataRes
     * @constructor
     * @param {IUpdateRoomDataRes=} [p] Properties to set
     */
    function UpdateRoomDataRes(p) {
        this.seatInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UpdateRoomDataRes seatInfoList.
     * @member {Array.<ISeatInfo>} seatInfoList
     * @memberof UpdateRoomDataRes
     * @instance
     */
    UpdateRoomDataRes.prototype.seatInfoList = $util.emptyArray;

    /**
     * Creates a new UpdateRoomDataRes instance using the specified properties.
     * @function create
     * @memberof UpdateRoomDataRes
     * @static
     * @param {IUpdateRoomDataRes=} [properties] Properties to set
     * @returns {UpdateRoomDataRes} UpdateRoomDataRes instance
     */
    UpdateRoomDataRes.create = function create(properties) {
        return new UpdateRoomDataRes(properties);
    };

    /**
     * Encodes the specified UpdateRoomDataRes message. Does not implicitly {@link UpdateRoomDataRes.verify|verify} messages.
     * @function encode
     * @memberof UpdateRoomDataRes
     * @static
     * @param {IUpdateRoomDataRes} m UpdateRoomDataRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateRoomDataRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.seatInfoList != null && m.seatInfoList.length) {
            for (var i = 0; i < m.seatInfoList.length; ++i)
                $root.SeatInfo.encode(m.seatInfoList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an UpdateRoomDataRes message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateRoomDataRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UpdateRoomDataRes} UpdateRoomDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateRoomDataRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UpdateRoomDataRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.seatInfoList && m.seatInfoList.length))
                    m.seatInfoList = [];
                m.seatInfoList.push($root.SeatInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return UpdateRoomDataRes;
})();

$root.ChangeBattleStateRes = (function() {

    /**
     * Properties of a ChangeBattleStateRes.
     * @exports IChangeBattleStateRes
     * @interface IChangeBattleStateRes
     * @property {GameState} battleState ChangeBattleStateRes battleState
     * @property {boolean} hasCountDown ChangeBattleStateRes hasCountDown
     * @property {number|null} [countDown] ChangeBattleStateRes countDown
     * @property {number|null} [totalTime] ChangeBattleStateRes totalTime
     * @property {IRestCardsData|null} [cardsData] ChangeBattleStateRes cardsData
     * @property {boolean|null} [isNeedBurningCard] ChangeBattleStateRes isNeedBurningCard
     * @property {number|null} [burningCardNum] ChangeBattleStateRes burningCardNum
     * @property {ICardInfo|null} [fristCard] ChangeBattleStateRes fristCard
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
     * @member {GameState} battleState
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
     * ChangeBattleStateRes totalTime.
     * @member {number} totalTime
     * @memberof ChangeBattleStateRes
     * @instance
     */
    ChangeBattleStateRes.prototype.totalTime = 0;

    /**
     * ChangeBattleStateRes cardsData.
     * @member {IRestCardsData|null|undefined} cardsData
     * @memberof ChangeBattleStateRes
     * @instance
     */
    ChangeBattleStateRes.prototype.cardsData = null;

    /**
     * ChangeBattleStateRes isNeedBurningCard.
     * @member {boolean} isNeedBurningCard
     * @memberof ChangeBattleStateRes
     * @instance
     */
    ChangeBattleStateRes.prototype.isNeedBurningCard = false;

    /**
     * ChangeBattleStateRes burningCardNum.
     * @member {number} burningCardNum
     * @memberof ChangeBattleStateRes
     * @instance
     */
    ChangeBattleStateRes.prototype.burningCardNum = 0;

    /**
     * ChangeBattleStateRes fristCard.
     * @member {ICardInfo|null|undefined} fristCard
     * @memberof ChangeBattleStateRes
     * @instance
     */
    ChangeBattleStateRes.prototype.fristCard = null;

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
        if (m.totalTime != null && m.hasOwnProperty("totalTime"))
            w.uint32(32).int32(m.totalTime);
        if (m.cardsData != null && m.hasOwnProperty("cardsData"))
            $root.RestCardsData.encode(m.cardsData, w.uint32(42).fork()).ldelim();
        if (m.isNeedBurningCard != null && m.hasOwnProperty("isNeedBurningCard"))
            w.uint32(48).bool(m.isNeedBurningCard);
        if (m.burningCardNum != null && m.hasOwnProperty("burningCardNum"))
            w.uint32(56).int32(m.burningCardNum);
        if (m.fristCard != null && m.hasOwnProperty("fristCard"))
            $root.CardInfo.encode(m.fristCard, w.uint32(66).fork()).ldelim();
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
            case 4:
                m.totalTime = r.int32();
                break;
            case 5:
                m.cardsData = $root.RestCardsData.decode(r, r.uint32());
                break;
            case 6:
                m.isNeedBurningCard = r.bool();
                break;
            case 7:
                m.burningCardNum = r.int32();
                break;
            case 8:
                m.fristCard = $root.CardInfo.decode(r, r.uint32());
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

$root.PushBattleDealRes = (function() {

    /**
     * Properties of a PushBattleDealRes.
     * @exports IPushBattleDealRes
     * @interface IPushBattleDealRes
     * @property {Array.<ICardInfo>|null} [brankerCardInfo] PushBattleDealRes brankerCardInfo
     * @property {Array.<ICardInfo>|null} [playerCardInfo] PushBattleDealRes playerCardInfo
     * @property {boolean} isPlayEffects PushBattleDealRes isPlayEffects
     * @property {IRestCardsData} cardsData PushBattleDealRes cardsData
     */

    /**
     * Constructs a new PushBattleDealRes.
     * @exports PushBattleDealRes
     * @classdesc Represents a PushBattleDealRes.
     * @implements IPushBattleDealRes
     * @constructor
     * @param {IPushBattleDealRes=} [p] Properties to set
     */
    function PushBattleDealRes(p) {
        this.brankerCardInfo = [];
        this.playerCardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushBattleDealRes brankerCardInfo.
     * @member {Array.<ICardInfo>} brankerCardInfo
     * @memberof PushBattleDealRes
     * @instance
     */
    PushBattleDealRes.prototype.brankerCardInfo = $util.emptyArray;

    /**
     * PushBattleDealRes playerCardInfo.
     * @member {Array.<ICardInfo>} playerCardInfo
     * @memberof PushBattleDealRes
     * @instance
     */
    PushBattleDealRes.prototype.playerCardInfo = $util.emptyArray;

    /**
     * PushBattleDealRes isPlayEffects.
     * @member {boolean} isPlayEffects
     * @memberof PushBattleDealRes
     * @instance
     */
    PushBattleDealRes.prototype.isPlayEffects = false;

    /**
     * PushBattleDealRes cardsData.
     * @member {IRestCardsData} cardsData
     * @memberof PushBattleDealRes
     * @instance
     */
    PushBattleDealRes.prototype.cardsData = null;

    /**
     * Creates a new PushBattleDealRes instance using the specified properties.
     * @function create
     * @memberof PushBattleDealRes
     * @static
     * @param {IPushBattleDealRes=} [properties] Properties to set
     * @returns {PushBattleDealRes} PushBattleDealRes instance
     */
    PushBattleDealRes.create = function create(properties) {
        return new PushBattleDealRes(properties);
    };

    /**
     * Encodes the specified PushBattleDealRes message. Does not implicitly {@link PushBattleDealRes.verify|verify} messages.
     * @function encode
     * @memberof PushBattleDealRes
     * @static
     * @param {IPushBattleDealRes} m PushBattleDealRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushBattleDealRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.brankerCardInfo != null && m.brankerCardInfo.length) {
            for (var i = 0; i < m.brankerCardInfo.length; ++i)
                $root.CardInfo.encode(m.brankerCardInfo[i], w.uint32(10).fork()).ldelim();
        }
        if (m.playerCardInfo != null && m.playerCardInfo.length) {
            for (var i = 0; i < m.playerCardInfo.length; ++i)
                $root.CardInfo.encode(m.playerCardInfo[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(24).bool(m.isPlayEffects);
        $root.RestCardsData.encode(m.cardsData, w.uint32(34).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a PushBattleDealRes message from the specified reader or buffer.
     * @function decode
     * @memberof PushBattleDealRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushBattleDealRes} PushBattleDealRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushBattleDealRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushBattleDealRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.brankerCardInfo && m.brankerCardInfo.length))
                    m.brankerCardInfo = [];
                m.brankerCardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.playerCardInfo && m.playerCardInfo.length))
                    m.playerCardInfo = [];
                m.playerCardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.isPlayEffects = r.bool();
                break;
            case 4:
                m.cardsData = $root.RestCardsData.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isPlayEffects"))
            throw $util.ProtocolError("missing required 'isPlayEffects'", { instance: m });
        if (!m.hasOwnProperty("cardsData"))
            throw $util.ProtocolError("missing required 'cardsData'", { instance: m });
        return m;
    };

    return PushBattleDealRes;
})();

$root.PushBattleSettlementRes = (function() {

    /**
     * Properties of a PushBattleSettlementRes.
     * @exports IPushBattleSettlementRes
     * @interface IPushBattleSettlementRes
     * @property {IBaiJiaLeWinStatus} winState PushBattleSettlementRes winState
     * @property {Array.<ISeatSettlementInfo>|null} [seatSettlementInfoList] PushBattleSettlementRes seatSettlementInfoList
     * @property {boolean} isMePlayed PushBattleSettlementRes isMePlayed
     * @property {IUpdateHistoryRecord} updateRecord PushBattleSettlementRes updateRecord
     * @property {Array.<ISettlementRoleInfo>|null} [settlementRoleInfo] PushBattleSettlementRes settlementRoleInfo
     * @property {string} ontherWinGold PushBattleSettlementRes ontherWinGold
     * @property {string} allWinGold PushBattleSettlementRes allWinGold
     */

    /**
     * Constructs a new PushBattleSettlementRes.
     * @exports PushBattleSettlementRes
     * @classdesc Represents a PushBattleSettlementRes.
     * @implements IPushBattleSettlementRes
     * @constructor
     * @param {IPushBattleSettlementRes=} [p] Properties to set
     */
    function PushBattleSettlementRes(p) {
        this.seatSettlementInfoList = [];
        this.settlementRoleInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushBattleSettlementRes winState.
     * @member {IBaiJiaLeWinStatus} winState
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.winState = null;

    /**
     * PushBattleSettlementRes seatSettlementInfoList.
     * @member {Array.<ISeatSettlementInfo>} seatSettlementInfoList
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.seatSettlementInfoList = $util.emptyArray;

    /**
     * PushBattleSettlementRes isMePlayed.
     * @member {boolean} isMePlayed
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.isMePlayed = false;

    /**
     * PushBattleSettlementRes updateRecord.
     * @member {IUpdateHistoryRecord} updateRecord
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.updateRecord = null;

    /**
     * PushBattleSettlementRes settlementRoleInfo.
     * @member {Array.<ISettlementRoleInfo>} settlementRoleInfo
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.settlementRoleInfo = $util.emptyArray;

    /**
     * PushBattleSettlementRes ontherWinGold.
     * @member {string} ontherWinGold
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.ontherWinGold = "";

    /**
     * PushBattleSettlementRes allWinGold.
     * @member {string} allWinGold
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.allWinGold = "";

    /**
     * Creates a new PushBattleSettlementRes instance using the specified properties.
     * @function create
     * @memberof PushBattleSettlementRes
     * @static
     * @param {IPushBattleSettlementRes=} [properties] Properties to set
     * @returns {PushBattleSettlementRes} PushBattleSettlementRes instance
     */
    PushBattleSettlementRes.create = function create(properties) {
        return new PushBattleSettlementRes(properties);
    };

    /**
     * Encodes the specified PushBattleSettlementRes message. Does not implicitly {@link PushBattleSettlementRes.verify|verify} messages.
     * @function encode
     * @memberof PushBattleSettlementRes
     * @static
     * @param {IPushBattleSettlementRes} m PushBattleSettlementRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushBattleSettlementRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.BaiJiaLeWinStatus.encode(m.winState, w.uint32(10).fork()).ldelim();
        if (m.seatSettlementInfoList != null && m.seatSettlementInfoList.length) {
            for (var i = 0; i < m.seatSettlementInfoList.length; ++i)
                $root.SeatSettlementInfo.encode(m.seatSettlementInfoList[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(24).bool(m.isMePlayed);
        $root.UpdateHistoryRecord.encode(m.updateRecord, w.uint32(34).fork()).ldelim();
        if (m.settlementRoleInfo != null && m.settlementRoleInfo.length) {
            for (var i = 0; i < m.settlementRoleInfo.length; ++i)
                $root.SettlementRoleInfo.encode(m.settlementRoleInfo[i], w.uint32(42).fork()).ldelim();
        }
        w.uint32(50).string(m.ontherWinGold);
        w.uint32(58).string(m.allWinGold);
        return w;
    };

    /**
     * Decodes a PushBattleSettlementRes message from the specified reader or buffer.
     * @function decode
     * @memberof PushBattleSettlementRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushBattleSettlementRes} PushBattleSettlementRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushBattleSettlementRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushBattleSettlementRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.winState = $root.BaiJiaLeWinStatus.decode(r, r.uint32());
                break;
            case 2:
                if (!(m.seatSettlementInfoList && m.seatSettlementInfoList.length))
                    m.seatSettlementInfoList = [];
                m.seatSettlementInfoList.push($root.SeatSettlementInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.isMePlayed = r.bool();
                break;
            case 4:
                m.updateRecord = $root.UpdateHistoryRecord.decode(r, r.uint32());
                break;
            case 5:
                if (!(m.settlementRoleInfo && m.settlementRoleInfo.length))
                    m.settlementRoleInfo = [];
                m.settlementRoleInfo.push($root.SettlementRoleInfo.decode(r, r.uint32()));
                break;
            case 6:
                m.ontherWinGold = r.string();
                break;
            case 7:
                m.allWinGold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("winState"))
            throw $util.ProtocolError("missing required 'winState'", { instance: m });
        if (!m.hasOwnProperty("isMePlayed"))
            throw $util.ProtocolError("missing required 'isMePlayed'", { instance: m });
        if (!m.hasOwnProperty("updateRecord"))
            throw $util.ProtocolError("missing required 'updateRecord'", { instance: m });
        if (!m.hasOwnProperty("ontherWinGold"))
            throw $util.ProtocolError("missing required 'ontherWinGold'", { instance: m });
        if (!m.hasOwnProperty("allWinGold"))
            throw $util.ProtocolError("missing required 'allWinGold'", { instance: m });
        return m;
    };

    return PushBattleSettlementRes;
})();

$root.BetReq = (function() {

    /**
     * Properties of a BetReq.
     * @exports IBetReq
     * @interface IBetReq
     * @property {number} betValue BetReq betValue
     * @property {BetArea} areaType BetReq areaType
     */

    /**
     * Constructs a new BetReq.
     * @exports BetReq
     * @classdesc Represents a BetReq.
     * @implements IBetReq
     * @constructor
     * @param {IBetReq=} [p] Properties to set
     */
    function BetReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetReq betValue.
     * @member {number} betValue
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.betValue = 0;

    /**
     * BetReq areaType.
     * @member {BetArea} areaType
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.areaType = 1;

    /**
     * Creates a new BetReq instance using the specified properties.
     * @function create
     * @memberof BetReq
     * @static
     * @param {IBetReq=} [properties] Properties to set
     * @returns {BetReq} BetReq instance
     */
    BetReq.create = function create(properties) {
        return new BetReq(properties);
    };

    /**
     * Encodes the specified BetReq message. Does not implicitly {@link BetReq.verify|verify} messages.
     * @function encode
     * @memberof BetReq
     * @static
     * @param {IBetReq} m BetReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.betValue);
        w.uint32(16).int32(m.areaType);
        return w;
    };

    /**
     * Decodes a BetReq message from the specified reader or buffer.
     * @function decode
     * @memberof BetReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetReq} BetReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.betValue = r.int32();
                break;
            case 2:
                m.areaType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("betValue"))
            throw $util.ProtocolError("missing required 'betValue'", { instance: m });
        if (!m.hasOwnProperty("areaType"))
            throw $util.ProtocolError("missing required 'areaType'", { instance: m });
        return m;
    };

    return BetReq;
})();

$root.BetRes = (function() {

    /**
     * Properties of a BetRes.
     * @exports IBetRes
     * @interface IBetRes
     * @property {boolean} success BetRes success
     * @property {string|null} [tips] BetRes tips
     */

    /**
     * Constructs a new BetRes.
     * @exports BetRes
     * @classdesc Represents a BetRes.
     * @implements IBetRes
     * @constructor
     * @param {IBetRes=} [p] Properties to set
     */
    function BetRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetRes success.
     * @member {boolean} success
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.success = false;

    /**
     * BetRes tips.
     * @member {string} tips
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.tips = "";

    /**
     * Creates a new BetRes instance using the specified properties.
     * @function create
     * @memberof BetRes
     * @static
     * @param {IBetRes=} [properties] Properties to set
     * @returns {BetRes} BetRes instance
     */
    BetRes.create = function create(properties) {
        return new BetRes(properties);
    };

    /**
     * Encodes the specified BetRes message. Does not implicitly {@link BetRes.verify|verify} messages.
     * @function encode
     * @memberof BetRes
     * @static
     * @param {IBetRes} m BetRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a BetRes message from the specified reader or buffer.
     * @function decode
     * @memberof BetRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetRes} BetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetRes();
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

    return BetRes;
})();

$root.PushUserBetRes = (function() {

    /**
     * Properties of a PushUserBetRes.
     * @exports IPushUserBetRes
     * @interface IPushUserBetRes
     * @property {Array.<IPlayerBetMsg>|null} [otherPlayerBetList] PushUserBetRes otherPlayerBetList
     */

    /**
     * Constructs a new PushUserBetRes.
     * @exports PushUserBetRes
     * @classdesc Represents a PushUserBetRes.
     * @implements IPushUserBetRes
     * @constructor
     * @param {IPushUserBetRes=} [p] Properties to set
     */
    function PushUserBetRes(p) {
        this.otherPlayerBetList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushUserBetRes otherPlayerBetList.
     * @member {Array.<IPlayerBetMsg>} otherPlayerBetList
     * @memberof PushUserBetRes
     * @instance
     */
    PushUserBetRes.prototype.otherPlayerBetList = $util.emptyArray;

    /**
     * Creates a new PushUserBetRes instance using the specified properties.
     * @function create
     * @memberof PushUserBetRes
     * @static
     * @param {IPushUserBetRes=} [properties] Properties to set
     * @returns {PushUserBetRes} PushUserBetRes instance
     */
    PushUserBetRes.create = function create(properties) {
        return new PushUserBetRes(properties);
    };

    /**
     * Encodes the specified PushUserBetRes message. Does not implicitly {@link PushUserBetRes.verify|verify} messages.
     * @function encode
     * @memberof PushUserBetRes
     * @static
     * @param {IPushUserBetRes} m PushUserBetRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushUserBetRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.otherPlayerBetList != null && m.otherPlayerBetList.length) {
            for (var i = 0; i < m.otherPlayerBetList.length; ++i)
                $root.PlayerBetMsg.encode(m.otherPlayerBetList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushUserBetRes message from the specified reader or buffer.
     * @function decode
     * @memberof PushUserBetRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushUserBetRes} PushUserBetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushUserBetRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushUserBetRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.otherPlayerBetList && m.otherPlayerBetList.length))
                    m.otherPlayerBetList = [];
                m.otherPlayerBetList.push($root.PlayerBetMsg.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushUserBetRes;
})();

$root.PushBetInfos = (function() {

    /**
     * Properties of a PushBetInfos.
     * @exports IPushBetInfos
     * @interface IPushBetInfos
     * @property {Array.<IPlayerBetMsg>|null} [betAreaInfoList] PushBetInfos betAreaInfoList
     * @property {Array.<IPlayerBetMsg>|null} [selfBetInfo] PushBetInfos selfBetInfo
     */

    /**
     * Constructs a new PushBetInfos.
     * @exports PushBetInfos
     * @classdesc Represents a PushBetInfos.
     * @implements IPushBetInfos
     * @constructor
     * @param {IPushBetInfos=} [p] Properties to set
     */
    function PushBetInfos(p) {
        this.betAreaInfoList = [];
        this.selfBetInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushBetInfos betAreaInfoList.
     * @member {Array.<IPlayerBetMsg>} betAreaInfoList
     * @memberof PushBetInfos
     * @instance
     */
    PushBetInfos.prototype.betAreaInfoList = $util.emptyArray;

    /**
     * PushBetInfos selfBetInfo.
     * @member {Array.<IPlayerBetMsg>} selfBetInfo
     * @memberof PushBetInfos
     * @instance
     */
    PushBetInfos.prototype.selfBetInfo = $util.emptyArray;

    /**
     * Creates a new PushBetInfos instance using the specified properties.
     * @function create
     * @memberof PushBetInfos
     * @static
     * @param {IPushBetInfos=} [properties] Properties to set
     * @returns {PushBetInfos} PushBetInfos instance
     */
    PushBetInfos.create = function create(properties) {
        return new PushBetInfos(properties);
    };

    /**
     * Encodes the specified PushBetInfos message. Does not implicitly {@link PushBetInfos.verify|verify} messages.
     * @function encode
     * @memberof PushBetInfos
     * @static
     * @param {IPushBetInfos} m PushBetInfos message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushBetInfos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.betAreaInfoList != null && m.betAreaInfoList.length) {
            for (var i = 0; i < m.betAreaInfoList.length; ++i)
                $root.PlayerBetMsg.encode(m.betAreaInfoList[i], w.uint32(10).fork()).ldelim();
        }
        if (m.selfBetInfo != null && m.selfBetInfo.length) {
            for (var i = 0; i < m.selfBetInfo.length; ++i)
                $root.PlayerBetMsg.encode(m.selfBetInfo[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushBetInfos message from the specified reader or buffer.
     * @function decode
     * @memberof PushBetInfos
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushBetInfos} PushBetInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushBetInfos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushBetInfos();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.betAreaInfoList && m.betAreaInfoList.length))
                    m.betAreaInfoList = [];
                m.betAreaInfoList.push($root.PlayerBetMsg.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.selfBetInfo && m.selfBetInfo.length))
                    m.selfBetInfo = [];
                m.selfBetInfo.push($root.PlayerBetMsg.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushBetInfos;
})();

$root.RoomExitReq = (function() {

    /**
     * Properties of a RoomExitReq.
     * @exports IRoomExitReq
     * @interface IRoomExitReq
     */

    /**
     * Constructs a new RoomExitReq.
     * @exports RoomExitReq
     * @classdesc Represents a RoomExitReq.
     * @implements IRoomExitReq
     * @constructor
     * @param {IRoomExitReq=} [p] Properties to set
     */
    function RoomExitReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RoomExitReq instance using the specified properties.
     * @function create
     * @memberof RoomExitReq
     * @static
     * @param {IRoomExitReq=} [properties] Properties to set
     * @returns {RoomExitReq} RoomExitReq instance
     */
    RoomExitReq.create = function create(properties) {
        return new RoomExitReq(properties);
    };

    /**
     * Encodes the specified RoomExitReq message. Does not implicitly {@link RoomExitReq.verify|verify} messages.
     * @function encode
     * @memberof RoomExitReq
     * @static
     * @param {IRoomExitReq} m RoomExitReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomExitReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RoomExitReq message from the specified reader or buffer.
     * @function decode
     * @memberof RoomExitReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomExitReq} RoomExitReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomExitReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomExitReq();
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

    return RoomExitReq;
})();

$root.RoomExitRes = (function() {

    /**
     * Properties of a RoomExitRes.
     * @exports IRoomExitRes
     * @interface IRoomExitRes
     * @property {boolean} success RoomExitRes success
     * @property {string|null} [errReason] RoomExitRes errReason
     */

    /**
     * Constructs a new RoomExitRes.
     * @exports RoomExitRes
     * @classdesc Represents a RoomExitRes.
     * @implements IRoomExitRes
     * @constructor
     * @param {IRoomExitRes=} [p] Properties to set
     */
    function RoomExitRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomExitRes success.
     * @member {boolean} success
     * @memberof RoomExitRes
     * @instance
     */
    RoomExitRes.prototype.success = false;

    /**
     * RoomExitRes errReason.
     * @member {string} errReason
     * @memberof RoomExitRes
     * @instance
     */
    RoomExitRes.prototype.errReason = "";

    /**
     * Creates a new RoomExitRes instance using the specified properties.
     * @function create
     * @memberof RoomExitRes
     * @static
     * @param {IRoomExitRes=} [properties] Properties to set
     * @returns {RoomExitRes} RoomExitRes instance
     */
    RoomExitRes.create = function create(properties) {
        return new RoomExitRes(properties);
    };

    /**
     * Encodes the specified RoomExitRes message. Does not implicitly {@link RoomExitRes.verify|verify} messages.
     * @function encode
     * @memberof RoomExitRes
     * @static
     * @param {IRoomExitRes} m RoomExitRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomExitRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.errReason != null && m.hasOwnProperty("errReason"))
            w.uint32(18).string(m.errReason);
        return w;
    };

    /**
     * Decodes a RoomExitRes message from the specified reader or buffer.
     * @function decode
     * @memberof RoomExitRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomExitRes} RoomExitRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomExitRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomExitRes();
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

    return RoomExitRes;
})();

$root.AllRoomInfoReq = (function() {

    /**
     * Properties of an AllRoomInfoReq.
     * @exports IAllRoomInfoReq
     * @interface IAllRoomInfoReq
     * @property {number} type AllRoomInfoReq type
     */

    /**
     * Constructs a new AllRoomInfoReq.
     * @exports AllRoomInfoReq
     * @classdesc Represents an AllRoomInfoReq.
     * @implements IAllRoomInfoReq
     * @constructor
     * @param {IAllRoomInfoReq=} [p] Properties to set
     */
    function AllRoomInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AllRoomInfoReq type.
     * @member {number} type
     * @memberof AllRoomInfoReq
     * @instance
     */
    AllRoomInfoReq.prototype.type = 0;

    /**
     * Creates a new AllRoomInfoReq instance using the specified properties.
     * @function create
     * @memberof AllRoomInfoReq
     * @static
     * @param {IAllRoomInfoReq=} [properties] Properties to set
     * @returns {AllRoomInfoReq} AllRoomInfoReq instance
     */
    AllRoomInfoReq.create = function create(properties) {
        return new AllRoomInfoReq(properties);
    };

    /**
     * Encodes the specified AllRoomInfoReq message. Does not implicitly {@link AllRoomInfoReq.verify|verify} messages.
     * @function encode
     * @memberof AllRoomInfoReq
     * @static
     * @param {IAllRoomInfoReq} m AllRoomInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllRoomInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        return w;
    };

    /**
     * Decodes an AllRoomInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof AllRoomInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AllRoomInfoReq} AllRoomInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllRoomInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AllRoomInfoReq();
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

    return AllRoomInfoReq;
})();

$root.AllRoomInfo = (function() {

    /**
     * Properties of an AllRoomInfo.
     * @exports IAllRoomInfo
     * @interface IAllRoomInfo
     * @property {number} type AllRoomInfo type
     * @property {string} roomName AllRoomInfo roomName
     * @property {string} limitRed AllRoomInfo limitRed
     * @property {IHistoryRecord} historyRecord AllRoomInfo historyRecord
     * @property {number} maxPlayers AllRoomInfo maxPlayers
     * @property {number} currPlayers AllRoomInfo currPlayers
     * @property {number} roomBaseId AllRoomInfo roomBaseId
     * @property {number} restTime AllRoomInfo restTime
     * @property {number} totalTime AllRoomInfo totalTime
     * @property {GameState} currState AllRoomInfo currState
     * @property {boolean} isPrivate AllRoomInfo isPrivate
     * @property {Array.<ISeatInfo>|null} [seatInfoList] AllRoomInfo seatInfoList
     */

    /**
     * Constructs a new AllRoomInfo.
     * @exports AllRoomInfo
     * @classdesc Represents an AllRoomInfo.
     * @implements IAllRoomInfo
     * @constructor
     * @param {IAllRoomInfo=} [p] Properties to set
     */
    function AllRoomInfo(p) {
        this.seatInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AllRoomInfo type.
     * @member {number} type
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.type = 0;

    /**
     * AllRoomInfo roomName.
     * @member {string} roomName
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.roomName = "";

    /**
     * AllRoomInfo limitRed.
     * @member {string} limitRed
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.limitRed = "";

    /**
     * AllRoomInfo historyRecord.
     * @member {IHistoryRecord} historyRecord
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.historyRecord = null;

    /**
     * AllRoomInfo maxPlayers.
     * @member {number} maxPlayers
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.maxPlayers = 0;

    /**
     * AllRoomInfo currPlayers.
     * @member {number} currPlayers
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.currPlayers = 0;

    /**
     * AllRoomInfo roomBaseId.
     * @member {number} roomBaseId
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.roomBaseId = 0;

    /**
     * AllRoomInfo restTime.
     * @member {number} restTime
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.restTime = 0;

    /**
     * AllRoomInfo totalTime.
     * @member {number} totalTime
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.totalTime = 0;

    /**
     * AllRoomInfo currState.
     * @member {GameState} currState
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.currState = 1;

    /**
     * AllRoomInfo isPrivate.
     * @member {boolean} isPrivate
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.isPrivate = false;

    /**
     * AllRoomInfo seatInfoList.
     * @member {Array.<ISeatInfo>} seatInfoList
     * @memberof AllRoomInfo
     * @instance
     */
    AllRoomInfo.prototype.seatInfoList = $util.emptyArray;

    /**
     * Creates a new AllRoomInfo instance using the specified properties.
     * @function create
     * @memberof AllRoomInfo
     * @static
     * @param {IAllRoomInfo=} [properties] Properties to set
     * @returns {AllRoomInfo} AllRoomInfo instance
     */
    AllRoomInfo.create = function create(properties) {
        return new AllRoomInfo(properties);
    };

    /**
     * Encodes the specified AllRoomInfo message. Does not implicitly {@link AllRoomInfo.verify|verify} messages.
     * @function encode
     * @memberof AllRoomInfo
     * @static
     * @param {IAllRoomInfo} m AllRoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllRoomInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        w.uint32(18).string(m.roomName);
        w.uint32(26).string(m.limitRed);
        $root.HistoryRecord.encode(m.historyRecord, w.uint32(34).fork()).ldelim();
        w.uint32(40).int32(m.maxPlayers);
        w.uint32(48).int32(m.currPlayers);
        w.uint32(56).int32(m.roomBaseId);
        w.uint32(64).int32(m.restTime);
        w.uint32(72).int32(m.totalTime);
        w.uint32(80).int32(m.currState);
        w.uint32(88).bool(m.isPrivate);
        if (m.seatInfoList != null && m.seatInfoList.length) {
            for (var i = 0; i < m.seatInfoList.length; ++i)
                $root.SeatInfo.encode(m.seatInfoList[i], w.uint32(98).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an AllRoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AllRoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AllRoomInfo} AllRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllRoomInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AllRoomInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.roomName = r.string();
                break;
            case 3:
                m.limitRed = r.string();
                break;
            case 4:
                m.historyRecord = $root.HistoryRecord.decode(r, r.uint32());
                break;
            case 5:
                m.maxPlayers = r.int32();
                break;
            case 6:
                m.currPlayers = r.int32();
                break;
            case 7:
                m.roomBaseId = r.int32();
                break;
            case 8:
                m.restTime = r.int32();
                break;
            case 9:
                m.totalTime = r.int32();
                break;
            case 10:
                m.currState = r.int32();
                break;
            case 11:
                m.isPrivate = r.bool();
                break;
            case 12:
                if (!(m.seatInfoList && m.seatInfoList.length))
                    m.seatInfoList = [];
                m.seatInfoList.push($root.SeatInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("roomName"))
            throw $util.ProtocolError("missing required 'roomName'", { instance: m });
        if (!m.hasOwnProperty("limitRed"))
            throw $util.ProtocolError("missing required 'limitRed'", { instance: m });
        if (!m.hasOwnProperty("historyRecord"))
            throw $util.ProtocolError("missing required 'historyRecord'", { instance: m });
        if (!m.hasOwnProperty("maxPlayers"))
            throw $util.ProtocolError("missing required 'maxPlayers'", { instance: m });
        if (!m.hasOwnProperty("currPlayers"))
            throw $util.ProtocolError("missing required 'currPlayers'", { instance: m });
        if (!m.hasOwnProperty("roomBaseId"))
            throw $util.ProtocolError("missing required 'roomBaseId'", { instance: m });
        if (!m.hasOwnProperty("restTime"))
            throw $util.ProtocolError("missing required 'restTime'", { instance: m });
        if (!m.hasOwnProperty("totalTime"))
            throw $util.ProtocolError("missing required 'totalTime'", { instance: m });
        if (!m.hasOwnProperty("currState"))
            throw $util.ProtocolError("missing required 'currState'", { instance: m });
        if (!m.hasOwnProperty("isPrivate"))
            throw $util.ProtocolError("missing required 'isPrivate'", { instance: m });
        return m;
    };

    return AllRoomInfo;
})();

$root.AllRoomInfoRes = (function() {

    /**
     * Properties of an AllRoomInfoRes.
     * @exports IAllRoomInfoRes
     * @interface IAllRoomInfoRes
     * @property {Array.<IAllRoomInfo>|null} [roomInfoList] AllRoomInfoRes roomInfoList
     */

    /**
     * Constructs a new AllRoomInfoRes.
     * @exports AllRoomInfoRes
     * @classdesc Represents an AllRoomInfoRes.
     * @implements IAllRoomInfoRes
     * @constructor
     * @param {IAllRoomInfoRes=} [p] Properties to set
     */
    function AllRoomInfoRes(p) {
        this.roomInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AllRoomInfoRes roomInfoList.
     * @member {Array.<IAllRoomInfo>} roomInfoList
     * @memberof AllRoomInfoRes
     * @instance
     */
    AllRoomInfoRes.prototype.roomInfoList = $util.emptyArray;

    /**
     * Creates a new AllRoomInfoRes instance using the specified properties.
     * @function create
     * @memberof AllRoomInfoRes
     * @static
     * @param {IAllRoomInfoRes=} [properties] Properties to set
     * @returns {AllRoomInfoRes} AllRoomInfoRes instance
     */
    AllRoomInfoRes.create = function create(properties) {
        return new AllRoomInfoRes(properties);
    };

    /**
     * Encodes the specified AllRoomInfoRes message. Does not implicitly {@link AllRoomInfoRes.verify|verify} messages.
     * @function encode
     * @memberof AllRoomInfoRes
     * @static
     * @param {IAllRoomInfoRes} m AllRoomInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllRoomInfoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.roomInfoList != null && m.roomInfoList.length) {
            for (var i = 0; i < m.roomInfoList.length; ++i)
                $root.AllRoomInfo.encode(m.roomInfoList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an AllRoomInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof AllRoomInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AllRoomInfoRes} AllRoomInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllRoomInfoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AllRoomInfoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.roomInfoList && m.roomInfoList.length))
                    m.roomInfoList = [];
                m.roomInfoList.push($root.AllRoomInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return AllRoomInfoRes;
})();

$root.InitRoomDataRes = (function() {

    /**
     * Properties of an InitRoomDataRes.
     * @exports IInitRoomDataRes
     * @interface IInitRoomDataRes
     * @property {Array.<ISeatInfo>|null} [seatInfoList] InitRoomDataRes seatInfoList
     * @property {IHistoryRecord} historyRecord InitRoomDataRes historyRecord
     * @property {Array.<IPlayerBetMsg>|null} [allPlayerBetMsgs] InitRoomDataRes allPlayerBetMsgs
     * @property {Array.<IPlayerBetMsg>|null} [selfBetInfo] InitRoomDataRes selfBetInfo
     * @property {IBaiJiaLeRoleInfo} myRoleInfo InitRoomDataRes myRoleInfo
     * @property {GameState} state InitRoomDataRes state
     * @property {number} waitTime InitRoomDataRes waitTime
     * @property {number} bigBet InitRoomDataRes bigBet
     * @property {number} betBaseLimit InitRoomDataRes betBaseLimit
     * @property {number} betCoinLimit InitRoomDataRes betCoinLimit
     * @property {number} bankerCoinLimit InitRoomDataRes bankerCoinLimit
     * @property {number} playerCoinLimit InitRoomDataRes playerCoinLimit
     * @property {number} drawCoinLimit InitRoomDataRes drawCoinLimit
     * @property {number} bankerDoubleCoinLimit InitRoomDataRes bankerDoubleCoinLimit
     * @property {number} playerDoubleCoinLimit InitRoomDataRes playerDoubleCoinLimit
     * @property {number} lucksixLimit InitRoomDataRes lucksixLimit
     * @property {Array.<number>|null} [betCoins] InitRoomDataRes betCoins
     * @property {string} roomName InitRoomDataRes roomName
     * @property {number} roomType InitRoomDataRes roomType
     * @property {IRestCardsData} cardsData InitRoomDataRes cardsData
     * @property {number} allTime InitRoomDataRes allTime
     * @property {boolean|null} [isNeedBurningCard] InitRoomDataRes isNeedBurningCard
     * @property {number|null} [burningCardNum] InitRoomDataRes burningCardNum
     * @property {ICardInfo|null} [fristCard] InitRoomDataRes fristCard
     */

    /**
     * Constructs a new InitRoomDataRes.
     * @exports InitRoomDataRes
     * @classdesc Represents an InitRoomDataRes.
     * @implements IInitRoomDataRes
     * @constructor
     * @param {IInitRoomDataRes=} [p] Properties to set
     */
    function InitRoomDataRes(p) {
        this.seatInfoList = [];
        this.allPlayerBetMsgs = [];
        this.selfBetInfo = [];
        this.betCoins = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InitRoomDataRes seatInfoList.
     * @member {Array.<ISeatInfo>} seatInfoList
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.seatInfoList = $util.emptyArray;

    /**
     * InitRoomDataRes historyRecord.
     * @member {IHistoryRecord} historyRecord
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.historyRecord = null;

    /**
     * InitRoomDataRes allPlayerBetMsgs.
     * @member {Array.<IPlayerBetMsg>} allPlayerBetMsgs
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.allPlayerBetMsgs = $util.emptyArray;

    /**
     * InitRoomDataRes selfBetInfo.
     * @member {Array.<IPlayerBetMsg>} selfBetInfo
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.selfBetInfo = $util.emptyArray;

    /**
     * InitRoomDataRes myRoleInfo.
     * @member {IBaiJiaLeRoleInfo} myRoleInfo
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.myRoleInfo = null;

    /**
     * InitRoomDataRes state.
     * @member {GameState} state
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.state = 1;

    /**
     * InitRoomDataRes waitTime.
     * @member {number} waitTime
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.waitTime = 0;

    /**
     * InitRoomDataRes bigBet.
     * @member {number} bigBet
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.bigBet = 0;

    /**
     * InitRoomDataRes betBaseLimit.
     * @member {number} betBaseLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.betBaseLimit = 0;

    /**
     * InitRoomDataRes betCoinLimit.
     * @member {number} betCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.betCoinLimit = 0;

    /**
     * InitRoomDataRes bankerCoinLimit.
     * @member {number} bankerCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.bankerCoinLimit = 0;

    /**
     * InitRoomDataRes playerCoinLimit.
     * @member {number} playerCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.playerCoinLimit = 0;

    /**
     * InitRoomDataRes drawCoinLimit.
     * @member {number} drawCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.drawCoinLimit = 0;

    /**
     * InitRoomDataRes bankerDoubleCoinLimit.
     * @member {number} bankerDoubleCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.bankerDoubleCoinLimit = 0;

    /**
     * InitRoomDataRes playerDoubleCoinLimit.
     * @member {number} playerDoubleCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.playerDoubleCoinLimit = 0;

    /**
     * InitRoomDataRes lucksixLimit.
     * @member {number} lucksixLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.lucksixLimit = 0;

    /**
     * InitRoomDataRes betCoins.
     * @member {Array.<number>} betCoins
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.betCoins = $util.emptyArray;

    /**
     * InitRoomDataRes roomName.
     * @member {string} roomName
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.roomName = "";

    /**
     * InitRoomDataRes roomType.
     * @member {number} roomType
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.roomType = 0;

    /**
     * InitRoomDataRes cardsData.
     * @member {IRestCardsData} cardsData
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.cardsData = null;

    /**
     * InitRoomDataRes allTime.
     * @member {number} allTime
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.allTime = 0;

    /**
     * InitRoomDataRes isNeedBurningCard.
     * @member {boolean} isNeedBurningCard
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.isNeedBurningCard = false;

    /**
     * InitRoomDataRes burningCardNum.
     * @member {number} burningCardNum
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.burningCardNum = 0;

    /**
     * InitRoomDataRes fristCard.
     * @member {ICardInfo|null|undefined} fristCard
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.fristCard = null;

    /**
     * Creates a new InitRoomDataRes instance using the specified properties.
     * @function create
     * @memberof InitRoomDataRes
     * @static
     * @param {IInitRoomDataRes=} [properties] Properties to set
     * @returns {InitRoomDataRes} InitRoomDataRes instance
     */
    InitRoomDataRes.create = function create(properties) {
        return new InitRoomDataRes(properties);
    };

    /**
     * Encodes the specified InitRoomDataRes message. Does not implicitly {@link InitRoomDataRes.verify|verify} messages.
     * @function encode
     * @memberof InitRoomDataRes
     * @static
     * @param {IInitRoomDataRes} m InitRoomDataRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InitRoomDataRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.seatInfoList != null && m.seatInfoList.length) {
            for (var i = 0; i < m.seatInfoList.length; ++i)
                $root.SeatInfo.encode(m.seatInfoList[i], w.uint32(10).fork()).ldelim();
        }
        $root.HistoryRecord.encode(m.historyRecord, w.uint32(18).fork()).ldelim();
        if (m.allPlayerBetMsgs != null && m.allPlayerBetMsgs.length) {
            for (var i = 0; i < m.allPlayerBetMsgs.length; ++i)
                $root.PlayerBetMsg.encode(m.allPlayerBetMsgs[i], w.uint32(26).fork()).ldelim();
        }
        if (m.selfBetInfo != null && m.selfBetInfo.length) {
            for (var i = 0; i < m.selfBetInfo.length; ++i)
                $root.PlayerBetMsg.encode(m.selfBetInfo[i], w.uint32(34).fork()).ldelim();
        }
        $root.BaiJiaLeRoleInfo.encode(m.myRoleInfo, w.uint32(42).fork()).ldelim();
        w.uint32(48).int32(m.state);
        w.uint32(56).int32(m.waitTime);
        w.uint32(64).int32(m.bigBet);
        w.uint32(72).int32(m.betBaseLimit);
        w.uint32(80).int32(m.betCoinLimit);
        w.uint32(88).int32(m.bankerCoinLimit);
        w.uint32(96).int32(m.playerCoinLimit);
        w.uint32(104).int32(m.drawCoinLimit);
        w.uint32(112).int32(m.bankerDoubleCoinLimit);
        w.uint32(120).int32(m.playerDoubleCoinLimit);
        w.uint32(128).int32(m.lucksixLimit);
        if (m.betCoins != null && m.betCoins.length) {
            for (var i = 0; i < m.betCoins.length; ++i)
                w.uint32(136).int32(m.betCoins[i]);
        }
        w.uint32(146).string(m.roomName);
        w.uint32(152).int32(m.roomType);
        $root.RestCardsData.encode(m.cardsData, w.uint32(162).fork()).ldelim();
        w.uint32(168).int32(m.allTime);
        if (m.isNeedBurningCard != null && m.hasOwnProperty("isNeedBurningCard"))
            w.uint32(176).bool(m.isNeedBurningCard);
        if (m.burningCardNum != null && m.hasOwnProperty("burningCardNum"))
            w.uint32(184).int32(m.burningCardNum);
        if (m.fristCard != null && m.hasOwnProperty("fristCard"))
            $root.CardInfo.encode(m.fristCard, w.uint32(194).fork()).ldelim();
        return w;
    };

    /**
     * Decodes an InitRoomDataRes message from the specified reader or buffer.
     * @function decode
     * @memberof InitRoomDataRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InitRoomDataRes} InitRoomDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InitRoomDataRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InitRoomDataRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.seatInfoList && m.seatInfoList.length))
                    m.seatInfoList = [];
                m.seatInfoList.push($root.SeatInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.historyRecord = $root.HistoryRecord.decode(r, r.uint32());
                break;
            case 3:
                if (!(m.allPlayerBetMsgs && m.allPlayerBetMsgs.length))
                    m.allPlayerBetMsgs = [];
                m.allPlayerBetMsgs.push($root.PlayerBetMsg.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.selfBetInfo && m.selfBetInfo.length))
                    m.selfBetInfo = [];
                m.selfBetInfo.push($root.PlayerBetMsg.decode(r, r.uint32()));
                break;
            case 5:
                m.myRoleInfo = $root.BaiJiaLeRoleInfo.decode(r, r.uint32());
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
                m.betCoinLimit = r.int32();
                break;
            case 11:
                m.bankerCoinLimit = r.int32();
                break;
            case 12:
                m.playerCoinLimit = r.int32();
                break;
            case 13:
                m.drawCoinLimit = r.int32();
                break;
            case 14:
                m.bankerDoubleCoinLimit = r.int32();
                break;
            case 15:
                m.playerDoubleCoinLimit = r.int32();
                break;
            case 16:
                m.lucksixLimit = r.int32();
                break;
            case 17:
                if (!(m.betCoins && m.betCoins.length))
                    m.betCoins = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.betCoins.push(r.int32());
                } else
                    m.betCoins.push(r.int32());
                break;
            case 18:
                m.roomName = r.string();
                break;
            case 19:
                m.roomType = r.int32();
                break;
            case 20:
                m.cardsData = $root.RestCardsData.decode(r, r.uint32());
                break;
            case 21:
                m.allTime = r.int32();
                break;
            case 22:
                m.isNeedBurningCard = r.bool();
                break;
            case 23:
                m.burningCardNum = r.int32();
                break;
            case 24:
                m.fristCard = $root.CardInfo.decode(r, r.uint32());
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
        if (!m.hasOwnProperty("betCoinLimit"))
            throw $util.ProtocolError("missing required 'betCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("bankerCoinLimit"))
            throw $util.ProtocolError("missing required 'bankerCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("playerCoinLimit"))
            throw $util.ProtocolError("missing required 'playerCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("drawCoinLimit"))
            throw $util.ProtocolError("missing required 'drawCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("bankerDoubleCoinLimit"))
            throw $util.ProtocolError("missing required 'bankerDoubleCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("playerDoubleCoinLimit"))
            throw $util.ProtocolError("missing required 'playerDoubleCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("lucksixLimit"))
            throw $util.ProtocolError("missing required 'lucksixLimit'", { instance: m });
        if (!m.hasOwnProperty("roomName"))
            throw $util.ProtocolError("missing required 'roomName'", { instance: m });
        if (!m.hasOwnProperty("roomType"))
            throw $util.ProtocolError("missing required 'roomType'", { instance: m });
        if (!m.hasOwnProperty("cardsData"))
            throw $util.ProtocolError("missing required 'cardsData'", { instance: m });
        if (!m.hasOwnProperty("allTime"))
            throw $util.ProtocolError("missing required 'allTime'", { instance: m });
        return m;
    };

    return InitRoomDataRes;
})();

$root.SitDownReq = (function() {

    /**
     * Properties of a SitDownReq.
     * @exports ISitDownReq
     * @interface ISitDownReq
     * @property {number} seatId SitDownReq seatId
     */

    /**
     * Constructs a new SitDownReq.
     * @exports SitDownReq
     * @classdesc Represents a SitDownReq.
     * @implements ISitDownReq
     * @constructor
     * @param {ISitDownReq=} [p] Properties to set
     */
    function SitDownReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SitDownReq seatId.
     * @member {number} seatId
     * @memberof SitDownReq
     * @instance
     */
    SitDownReq.prototype.seatId = 0;

    /**
     * Creates a new SitDownReq instance using the specified properties.
     * @function create
     * @memberof SitDownReq
     * @static
     * @param {ISitDownReq=} [properties] Properties to set
     * @returns {SitDownReq} SitDownReq instance
     */
    SitDownReq.create = function create(properties) {
        return new SitDownReq(properties);
    };

    /**
     * Encodes the specified SitDownReq message. Does not implicitly {@link SitDownReq.verify|verify} messages.
     * @function encode
     * @memberof SitDownReq
     * @static
     * @param {ISitDownReq} m SitDownReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SitDownReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.seatId);
        return w;
    };

    /**
     * Decodes a SitDownReq message from the specified reader or buffer.
     * @function decode
     * @memberof SitDownReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SitDownReq} SitDownReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SitDownReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SitDownReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.seatId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("seatId"))
            throw $util.ProtocolError("missing required 'seatId'", { instance: m });
        return m;
    };

    return SitDownReq;
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

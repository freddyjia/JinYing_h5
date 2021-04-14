/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.LongHuDou || ($protobuf.roots.LongHuDou = {});

/**
 * GameState enum.
 * @exports GameState
 * @enum {string}
 * @property {number} WaitingStartState=1 WaitingStartState value
 * @property {number} BetState=2 BetState value
 * @property {number} StopBetState=3 StopBetState value
 * @property {number} SettlementState=4 SettlementState value
 * @property {number} WaitingNextGame=5 WaitingNextGame value
 */
$root.GameState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "WaitingStartState"] = 1;
    values[valuesById[2] = "BetState"] = 2;
    values[valuesById[3] = "StopBetState"] = 3;
    values[valuesById[4] = "SettlementState"] = 4;
    values[valuesById[5] = "WaitingNextGame"] = 5;
    return values;
})();

/**
 * BetArea enum.
 * @exports BetArea
 * @enum {string}
 * @property {number} HuArea=1 HuArea value
 * @property {number} LongArea=2 LongArea value
 * @property {number} DrawArea=3 DrawArea value
 */
$root.BetArea = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "HuArea"] = 1;
    values[valuesById[2] = "LongArea"] = 2;
    values[valuesById[3] = "DrawArea"] = 3;
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

$root.LHDRoleInfo = (function() {

    /**
     * Properties of a LHDRoleInfo.
     * @exports ILHDRoleInfo
     * @interface ILHDRoleInfo
     * @property {string} playerId LHDRoleInfo playerId
     * @property {string} userName LHDRoleInfo userName
     * @property {string} headImageUrl LHDRoleInfo headImageUrl
     * @property {string} headbox LHDRoleInfo headbox
     * @property {number} vipLv LHDRoleInfo vipLv
     * @property {string} gold LHDRoleInfo gold
     * @property {string|null} [city] LHDRoleInfo city
     * @property {string|null} [province] LHDRoleInfo province
     */

    /**
     * Constructs a new LHDRoleInfo.
     * @exports LHDRoleInfo
     * @classdesc Represents a LHDRoleInfo.
     * @implements ILHDRoleInfo
     * @constructor
     * @param {ILHDRoleInfo=} [p] Properties to set
     */
    function LHDRoleInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LHDRoleInfo playerId.
     * @member {string} playerId
     * @memberof LHDRoleInfo
     * @instance
     */
    LHDRoleInfo.prototype.playerId = "";

    /**
     * LHDRoleInfo userName.
     * @member {string} userName
     * @memberof LHDRoleInfo
     * @instance
     */
    LHDRoleInfo.prototype.userName = "";

    /**
     * LHDRoleInfo headImageUrl.
     * @member {string} headImageUrl
     * @memberof LHDRoleInfo
     * @instance
     */
    LHDRoleInfo.prototype.headImageUrl = "";

    /**
     * LHDRoleInfo headbox.
     * @member {string} headbox
     * @memberof LHDRoleInfo
     * @instance
     */
    LHDRoleInfo.prototype.headbox = "";

    /**
     * LHDRoleInfo vipLv.
     * @member {number} vipLv
     * @memberof LHDRoleInfo
     * @instance
     */
    LHDRoleInfo.prototype.vipLv = 0;

    /**
     * LHDRoleInfo gold.
     * @member {string} gold
     * @memberof LHDRoleInfo
     * @instance
     */
    LHDRoleInfo.prototype.gold = "";

    /**
     * LHDRoleInfo city.
     * @member {string} city
     * @memberof LHDRoleInfo
     * @instance
     */
    LHDRoleInfo.prototype.city = "";

    /**
     * LHDRoleInfo province.
     * @member {string} province
     * @memberof LHDRoleInfo
     * @instance
     */
    LHDRoleInfo.prototype.province = "";

    /**
     * Creates a new LHDRoleInfo instance using the specified properties.
     * @function create
     * @memberof LHDRoleInfo
     * @static
     * @param {ILHDRoleInfo=} [properties] Properties to set
     * @returns {LHDRoleInfo} LHDRoleInfo instance
     */
    LHDRoleInfo.create = function create(properties) {
        return new LHDRoleInfo(properties);
    };

    /**
     * Encodes the specified LHDRoleInfo message. Does not implicitly {@link LHDRoleInfo.verify|verify} messages.
     * @function encode
     * @memberof LHDRoleInfo
     * @static
     * @param {ILHDRoleInfo} m LHDRoleInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LHDRoleInfo.encode = function encode(m, w) {
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
     * Decodes a LHDRoleInfo message from the specified reader or buffer.
     * @function decode
     * @memberof LHDRoleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LHDRoleInfo} LHDRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LHDRoleInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LHDRoleInfo();
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

    return LHDRoleInfo;
})();

$root.BetAreaInfo = (function() {

    /**
     * Properties of a BetAreaInfo.
     * @exports IBetAreaInfo
     * @interface IBetAreaInfo
     * @property {BetArea} areaType BetAreaInfo areaType
     * @property {string} betCount BetAreaInfo betCount
     * @property {boolean|null} [betByClever] BetAreaInfo betByClever
     */

    /**
     * Constructs a new BetAreaInfo.
     * @exports BetAreaInfo
     * @classdesc Represents a BetAreaInfo.
     * @implements IBetAreaInfo
     * @constructor
     * @param {IBetAreaInfo=} [p] Properties to set
     */
    function BetAreaInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetAreaInfo areaType.
     * @member {BetArea} areaType
     * @memberof BetAreaInfo
     * @instance
     */
    BetAreaInfo.prototype.areaType = 1;

    /**
     * BetAreaInfo betCount.
     * @member {string} betCount
     * @memberof BetAreaInfo
     * @instance
     */
    BetAreaInfo.prototype.betCount = "";

    /**
     * BetAreaInfo betByClever.
     * @member {boolean} betByClever
     * @memberof BetAreaInfo
     * @instance
     */
    BetAreaInfo.prototype.betByClever = false;

    /**
     * Creates a new BetAreaInfo instance using the specified properties.
     * @function create
     * @memberof BetAreaInfo
     * @static
     * @param {IBetAreaInfo=} [properties] Properties to set
     * @returns {BetAreaInfo} BetAreaInfo instance
     */
    BetAreaInfo.create = function create(properties) {
        return new BetAreaInfo(properties);
    };

    /**
     * Encodes the specified BetAreaInfo message. Does not implicitly {@link BetAreaInfo.verify|verify} messages.
     * @function encode
     * @memberof BetAreaInfo
     * @static
     * @param {IBetAreaInfo} m BetAreaInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetAreaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.areaType);
        w.uint32(18).string(m.betCount);
        if (m.betByClever != null && m.hasOwnProperty("betByClever"))
            w.uint32(24).bool(m.betByClever);
        return w;
    };

    /**
     * Decodes a BetAreaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BetAreaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetAreaInfo} BetAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetAreaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetAreaInfo();
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

    return BetAreaInfo;
})();

$root.HistoryCardInfo = (function() {

    /**
     * Properties of a HistoryCardInfo.
     * @exports IHistoryCardInfo
     * @interface IHistoryCardInfo
     * @property {number} longSize HistoryCardInfo longSize
     * @property {number} huSize HistoryCardInfo huSize
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
     * HistoryCardInfo longSize.
     * @member {number} longSize
     * @memberof HistoryCardInfo
     * @instance
     */
    HistoryCardInfo.prototype.longSize = 0;

    /**
     * HistoryCardInfo huSize.
     * @member {number} huSize
     * @memberof HistoryCardInfo
     * @instance
     */
    HistoryCardInfo.prototype.huSize = 0;

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
        w.uint32(8).int32(m.longSize);
        w.uint32(16).int32(m.huSize);
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
                m.longSize = r.int32();
                break;
            case 2:
                m.huSize = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("longSize"))
            throw $util.ProtocolError("missing required 'longSize'", { instance: m });
        if (!m.hasOwnProperty("huSize"))
            throw $util.ProtocolError("missing required 'huSize'", { instance: m });
        return m;
    };

    return HistoryCardInfo;
})();

$root.HistoryRecord = (function() {

    /**
     * Properties of a HistoryRecord.
     * @exports IHistoryRecord
     * @interface IHistoryRecord
     * @property {Array.<WinStatus>|null} [winStatus] HistoryRecord winStatus
     * @property {Array.<WinStatus>|null} [victoryList] HistoryRecord victoryList
     * @property {number} redWinningRate HistoryRecord redWinningRate
     * @property {number} blackWinningRate HistoryRecord blackWinningRate
     * @property {Array.<IHistoryCardInfo>|null} [recordArray] HistoryRecord recordArray
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
        this.winStatus = [];
        this.victoryList = [];
        this.recordArray = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HistoryRecord winStatus.
     * @member {Array.<WinStatus>} winStatus
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.winStatus = $util.emptyArray;

    /**
     * HistoryRecord victoryList.
     * @member {Array.<WinStatus>} victoryList
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.victoryList = $util.emptyArray;

    /**
     * HistoryRecord redWinningRate.
     * @member {number} redWinningRate
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.redWinningRate = 0;

    /**
     * HistoryRecord blackWinningRate.
     * @member {number} blackWinningRate
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.blackWinningRate = 0;

    /**
     * HistoryRecord recordArray.
     * @member {Array.<IHistoryCardInfo>} recordArray
     * @memberof HistoryRecord
     * @instance
     */
    HistoryRecord.prototype.recordArray = $util.emptyArray;

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
        if (m.winStatus != null && m.winStatus.length) {
            for (var i = 0; i < m.winStatus.length; ++i)
                w.uint32(8).int32(m.winStatus[i]);
        }
        if (m.victoryList != null && m.victoryList.length) {
            for (var i = 0; i < m.victoryList.length; ++i)
                w.uint32(16).int32(m.victoryList[i]);
        }
        w.uint32(24).int32(m.redWinningRate);
        w.uint32(32).int32(m.blackWinningRate);
        if (m.recordArray != null && m.recordArray.length) {
            for (var i = 0; i < m.recordArray.length; ++i)
                $root.HistoryCardInfo.encode(m.recordArray[i], w.uint32(42).fork()).ldelim();
        }
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
                if (!(m.winStatus && m.winStatus.length))
                    m.winStatus = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.winStatus.push(r.int32());
                } else
                    m.winStatus.push(r.int32());
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
            case 5:
                if (!(m.recordArray && m.recordArray.length))
                    m.recordArray = [];
                m.recordArray.push($root.HistoryCardInfo.decode(r, r.uint32()));
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

    return HistoryRecord;
})();

$root.UpdateHistoryRecord = (function() {

    /**
     * Properties of an UpdateHistoryRecord.
     * @exports IUpdateHistoryRecord
     * @interface IUpdateHistoryRecord
     * @property {WinStatus} newWinStatus UpdateHistoryRecord newWinStatus
     * @property {number} redWinningRate UpdateHistoryRecord redWinningRate
     * @property {number} blackWinningRate UpdateHistoryRecord blackWinningRate
     * @property {boolean} isClear UpdateHistoryRecord isClear
     * @property {IHistoryCardInfo} newRecord UpdateHistoryRecord newRecord
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
     * @member {WinStatus} newWinStatus
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.newWinStatus = 1;

    /**
     * UpdateHistoryRecord redWinningRate.
     * @member {number} redWinningRate
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.redWinningRate = 0;

    /**
     * UpdateHistoryRecord blackWinningRate.
     * @member {number} blackWinningRate
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.blackWinningRate = 0;

    /**
     * UpdateHistoryRecord isClear.
     * @member {boolean} isClear
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.isClear = false;

    /**
     * UpdateHistoryRecord newRecord.
     * @member {IHistoryCardInfo} newRecord
     * @memberof UpdateHistoryRecord
     * @instance
     */
    UpdateHistoryRecord.prototype.newRecord = null;

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
        w.uint32(8).int32(m.newWinStatus);
        w.uint32(16).int32(m.redWinningRate);
        w.uint32(24).int32(m.blackWinningRate);
        w.uint32(32).bool(m.isClear);
        $root.HistoryCardInfo.encode(m.newRecord, w.uint32(42).fork()).ldelim();
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
                m.newWinStatus = r.int32();
                break;
            case 2:
                m.redWinningRate = r.int32();
                break;
            case 3:
                m.blackWinningRate = r.int32();
                break;
            case 4:
                m.isClear = r.bool();
                break;
            case 5:
                m.newRecord = $root.HistoryCardInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("newWinStatus"))
            throw $util.ProtocolError("missing required 'newWinStatus'", { instance: m });
        if (!m.hasOwnProperty("redWinningRate"))
            throw $util.ProtocolError("missing required 'redWinningRate'", { instance: m });
        if (!m.hasOwnProperty("blackWinningRate"))
            throw $util.ProtocolError("missing required 'blackWinningRate'", { instance: m });
        if (!m.hasOwnProperty("isClear"))
            throw $util.ProtocolError("missing required 'isClear'", { instance: m });
        if (!m.hasOwnProperty("newRecord"))
            throw $util.ProtocolError("missing required 'newRecord'", { instance: m });
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
     * @property {ILHDRoleInfo|null} [roleInfo] SeatInfo roleInfo
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
     * @member {ILHDRoleInfo|null|undefined} roleInfo
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
            $root.LHDRoleInfo.encode(m.roleInfo, w.uint32(26).fork()).ldelim();
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
                m.roleInfo = $root.LHDRoleInfo.decode(r, r.uint32());
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
     * @property {number} seatId SeatSettlementInfo seatId
     * @property {string} winGold SeatSettlementInfo winGold
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
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SeatSettlementInfo seatId.
     * @member {number} seatId
     * @memberof SeatSettlementInfo
     * @instance
     */
    SeatSettlementInfo.prototype.seatId = 0;

    /**
     * SeatSettlementInfo winGold.
     * @member {string} winGold
     * @memberof SeatSettlementInfo
     * @instance
     */
    SeatSettlementInfo.prototype.winGold = "";

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
        w.uint32(8).int32(m.seatId);
        w.uint32(18).string(m.winGold);
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

    return SeatSettlementInfo;
})();

$root.InitRoomDataRes = (function() {

    /**
     * Properties of an InitRoomDataRes.
     * @exports IInitRoomDataRes
     * @interface IInitRoomDataRes
     * @property {Array.<ISeatInfo>|null} [seatInfoList] InitRoomDataRes seatInfoList
     * @property {IHistoryRecord} historyRecord InitRoomDataRes historyRecord
     * @property {Array.<IBetAreaInfo>|null} [betAreaInfoList] InitRoomDataRes betAreaInfoList
     * @property {Array.<IBetAreaInfo>|null} [selfBetInfo] InitRoomDataRes selfBetInfo
     * @property {ILHDRoleInfo} myRoleInfo InitRoomDataRes myRoleInfo
     * @property {GameState} state InitRoomDataRes state
     * @property {number} waitTime InitRoomDataRes waitTime
     * @property {number} bigBet InitRoomDataRes bigBet
     * @property {number} betBaseLimit InitRoomDataRes betBaseLimit
     * @property {number} longCoinLimit InitRoomDataRes longCoinLimit
     * @property {number} huCoinLimit InitRoomDataRes huCoinLimit
     * @property {number} drawCoinLimit InitRoomDataRes drawCoinLimit
     * @property {Array.<CommonChipType>|null} [chipType] InitRoomDataRes chipType
     * @property {boolean|null} [isShowAllIn] InitRoomDataRes isShowAllIn
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
        this.betAreaInfoList = [];
        this.selfBetInfo = [];
        this.chipType = [];
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
     * InitRoomDataRes betAreaInfoList.
     * @member {Array.<IBetAreaInfo>} betAreaInfoList
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.betAreaInfoList = $util.emptyArray;

    /**
     * InitRoomDataRes selfBetInfo.
     * @member {Array.<IBetAreaInfo>} selfBetInfo
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.selfBetInfo = $util.emptyArray;

    /**
     * InitRoomDataRes myRoleInfo.
     * @member {ILHDRoleInfo} myRoleInfo
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
     * InitRoomDataRes longCoinLimit.
     * @member {number} longCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.longCoinLimit = 0;

    /**
     * InitRoomDataRes huCoinLimit.
     * @member {number} huCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.huCoinLimit = 0;

    /**
     * InitRoomDataRes drawCoinLimit.
     * @member {number} drawCoinLimit
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.drawCoinLimit = 0;

    /**
     * InitRoomDataRes chipType.
     * @member {Array.<CommonChipType>} chipType
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.chipType = $util.emptyArray;

    /**
     * InitRoomDataRes isShowAllIn.
     * @member {boolean} isShowAllIn
     * @memberof InitRoomDataRes
     * @instance
     */
    InitRoomDataRes.prototype.isShowAllIn = false;

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
        if (m.betAreaInfoList != null && m.betAreaInfoList.length) {
            for (var i = 0; i < m.betAreaInfoList.length; ++i)
                $root.BetAreaInfo.encode(m.betAreaInfoList[i], w.uint32(26).fork()).ldelim();
        }
        if (m.selfBetInfo != null && m.selfBetInfo.length) {
            for (var i = 0; i < m.selfBetInfo.length; ++i)
                $root.BetAreaInfo.encode(m.selfBetInfo[i], w.uint32(34).fork()).ldelim();
        }
        $root.LHDRoleInfo.encode(m.myRoleInfo, w.uint32(42).fork()).ldelim();
        w.uint32(48).int32(m.state);
        w.uint32(56).int32(m.waitTime);
        w.uint32(64).int32(m.bigBet);
        w.uint32(72).int32(m.betBaseLimit);
        w.uint32(80).int32(m.longCoinLimit);
        w.uint32(88).int32(m.huCoinLimit);
        w.uint32(96).int32(m.drawCoinLimit);
        if (m.chipType != null && m.chipType.length) {
            for (var i = 0; i < m.chipType.length; ++i)
                w.uint32(104).int32(m.chipType[i]);
        }
        if (m.isShowAllIn != null && m.hasOwnProperty("isShowAllIn"))
            w.uint32(112).bool(m.isShowAllIn);
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
                if (!(m.betAreaInfoList && m.betAreaInfoList.length))
                    m.betAreaInfoList = [];
                m.betAreaInfoList.push($root.BetAreaInfo.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.selfBetInfo && m.selfBetInfo.length))
                    m.selfBetInfo = [];
                m.selfBetInfo.push($root.BetAreaInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.myRoleInfo = $root.LHDRoleInfo.decode(r, r.uint32());
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
                m.longCoinLimit = r.int32();
                break;
            case 11:
                m.huCoinLimit = r.int32();
                break;
            case 12:
                m.drawCoinLimit = r.int32();
                break;
            case 13:
                if (!(m.chipType && m.chipType.length))
                    m.chipType = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.chipType.push(r.int32());
                } else
                    m.chipType.push(r.int32());
                break;
            case 14:
                m.isShowAllIn = r.bool();
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
        if (!m.hasOwnProperty("longCoinLimit"))
            throw $util.ProtocolError("missing required 'longCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("huCoinLimit"))
            throw $util.ProtocolError("missing required 'huCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("drawCoinLimit"))
            throw $util.ProtocolError("missing required 'drawCoinLimit'", { instance: m });
        return m;
    };

    return InitRoomDataRes;
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

$root.PushBattleSettlementRes = (function() {

    /**
     * Properties of a PushBattleSettlementRes.
     * @exports IPushBattleSettlementRes
     * @interface IPushBattleSettlementRes
     * @property {ICardInfo} longCardInfo PushBattleSettlementRes longCardInfo
     * @property {ICardInfo} huCardInfo PushBattleSettlementRes huCardInfo
     * @property {WinStatus} winState PushBattleSettlementRes winState
     * @property {Array.<ISeatSettlementInfo>|null} [seatSettlementInfoList] PushBattleSettlementRes seatSettlementInfoList
     * @property {boolean} isMePlayed PushBattleSettlementRes isMePlayed
     * @property {IUpdateHistoryRecord} updateRecord PushBattleSettlementRes updateRecord
     * @property {Array.<ISettlementRoleInfo>|null} [settlementRoleInfo] PushBattleSettlementRes settlementRoleInfo
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
     * PushBattleSettlementRes longCardInfo.
     * @member {ICardInfo} longCardInfo
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.longCardInfo = null;

    /**
     * PushBattleSettlementRes huCardInfo.
     * @member {ICardInfo} huCardInfo
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.huCardInfo = null;

    /**
     * PushBattleSettlementRes winState.
     * @member {WinStatus} winState
     * @memberof PushBattleSettlementRes
     * @instance
     */
    PushBattleSettlementRes.prototype.winState = 1;

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
        $root.CardInfo.encode(m.longCardInfo, w.uint32(10).fork()).ldelim();
        $root.CardInfo.encode(m.huCardInfo, w.uint32(18).fork()).ldelim();
        w.uint32(24).int32(m.winState);
        if (m.seatSettlementInfoList != null && m.seatSettlementInfoList.length) {
            for (var i = 0; i < m.seatSettlementInfoList.length; ++i)
                $root.SeatSettlementInfo.encode(m.seatSettlementInfoList[i], w.uint32(34).fork()).ldelim();
        }
        w.uint32(40).bool(m.isMePlayed);
        $root.UpdateHistoryRecord.encode(m.updateRecord, w.uint32(50).fork()).ldelim();
        if (m.settlementRoleInfo != null && m.settlementRoleInfo.length) {
            for (var i = 0; i < m.settlementRoleInfo.length; ++i)
                $root.SettlementRoleInfo.encode(m.settlementRoleInfo[i], w.uint32(58).fork()).ldelim();
        }
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
                m.longCardInfo = $root.CardInfo.decode(r, r.uint32());
                break;
            case 2:
                m.huCardInfo = $root.CardInfo.decode(r, r.uint32());
                break;
            case 3:
                m.winState = r.int32();
                break;
            case 4:
                if (!(m.seatSettlementInfoList && m.seatSettlementInfoList.length))
                    m.seatSettlementInfoList = [];
                m.seatSettlementInfoList.push($root.SeatSettlementInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.isMePlayed = r.bool();
                break;
            case 6:
                m.updateRecord = $root.UpdateHistoryRecord.decode(r, r.uint32());
                break;
            case 7:
                if (!(m.settlementRoleInfo && m.settlementRoleInfo.length))
                    m.settlementRoleInfo = [];
                m.settlementRoleInfo.push($root.SettlementRoleInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("longCardInfo"))
            throw $util.ProtocolError("missing required 'longCardInfo'", { instance: m });
        if (!m.hasOwnProperty("huCardInfo"))
            throw $util.ProtocolError("missing required 'huCardInfo'", { instance: m });
        if (!m.hasOwnProperty("winState"))
            throw $util.ProtocolError("missing required 'winState'", { instance: m });
        if (!m.hasOwnProperty("isMePlayed"))
            throw $util.ProtocolError("missing required 'isMePlayed'", { instance: m });
        if (!m.hasOwnProperty("updateRecord"))
            throw $util.ProtocolError("missing required 'updateRecord'", { instance: m });
        return m;
    };

    return PushBattleSettlementRes;
})();

$root.BetReq = (function() {

    /**
     * Properties of a BetReq.
     * @exports IBetReq
     * @interface IBetReq
     * @property {CommonChipType|null} [chipType] BetReq chipType
     * @property {BetArea} areaType BetReq areaType
     * @property {boolean|null} [isAllIn] BetReq isAllIn
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
     * BetReq chipType.
     * @member {CommonChipType} chipType
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.chipType = 100;

    /**
     * BetReq areaType.
     * @member {BetArea} areaType
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.areaType = 1;

    /**
     * BetReq isAllIn.
     * @member {boolean} isAllIn
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.isAllIn = false;

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
        if (m.chipType != null && m.hasOwnProperty("chipType"))
            w.uint32(8).int32(m.chipType);
        w.uint32(16).int32(m.areaType);
        if (m.isAllIn != null && m.hasOwnProperty("isAllIn"))
            w.uint32(24).bool(m.isAllIn);
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
                m.chipType = r.int32();
                break;
            case 2:
                m.areaType = r.int32();
                break;
            case 3:
                m.isAllIn = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
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
     * @property {number|null} [betMoney] BetRes betMoney
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
     * BetRes betMoney.
     * @member {number} betMoney
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.betMoney = 0;

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
        if (m.betMoney != null && m.hasOwnProperty("betMoney"))
            w.uint32(24).int32(m.betMoney);
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
            case 3:
                m.betMoney = r.int32();
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

$root.UserBet = (function() {

    /**
     * Properties of a UserBet.
     * @exports IUserBet
     * @interface IUserBet
     * @property {string} playerId UserBet playerId
     * @property {CommonChipType|null} [chipType] UserBet chipType
     * @property {BetArea} betArea UserBet betArea
     * @property {string} gold UserBet gold
     * @property {boolean} isAllIn UserBet isAllIn
     */

    /**
     * Constructs a new UserBet.
     * @exports UserBet
     * @classdesc Represents a UserBet.
     * @implements IUserBet
     * @constructor
     * @param {IUserBet=} [p] Properties to set
     */
    function UserBet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserBet playerId.
     * @member {string} playerId
     * @memberof UserBet
     * @instance
     */
    UserBet.prototype.playerId = "";

    /**
     * UserBet chipType.
     * @member {CommonChipType} chipType
     * @memberof UserBet
     * @instance
     */
    UserBet.prototype.chipType = 100;

    /**
     * UserBet betArea.
     * @member {BetArea} betArea
     * @memberof UserBet
     * @instance
     */
    UserBet.prototype.betArea = 1;

    /**
     * UserBet gold.
     * @member {string} gold
     * @memberof UserBet
     * @instance
     */
    UserBet.prototype.gold = "";

    /**
     * UserBet isAllIn.
     * @member {boolean} isAllIn
     * @memberof UserBet
     * @instance
     */
    UserBet.prototype.isAllIn = false;

    /**
     * Creates a new UserBet instance using the specified properties.
     * @function create
     * @memberof UserBet
     * @static
     * @param {IUserBet=} [properties] Properties to set
     * @returns {UserBet} UserBet instance
     */
    UserBet.create = function create(properties) {
        return new UserBet(properties);
    };

    /**
     * Encodes the specified UserBet message. Does not implicitly {@link UserBet.verify|verify} messages.
     * @function encode
     * @memberof UserBet
     * @static
     * @param {IUserBet} m UserBet message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserBet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.chipType != null && m.hasOwnProperty("chipType"))
            w.uint32(16).int32(m.chipType);
        w.uint32(24).int32(m.betArea);
        w.uint32(34).string(m.gold);
        w.uint32(40).bool(m.isAllIn);
        return w;
    };

    /**
     * Decodes a UserBet message from the specified reader or buffer.
     * @function decode
     * @memberof UserBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserBet} UserBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserBet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserBet();
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
            case 5:
                m.isAllIn = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("betArea"))
            throw $util.ProtocolError("missing required 'betArea'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        if (!m.hasOwnProperty("isAllIn"))
            throw $util.ProtocolError("missing required 'isAllIn'", { instance: m });
        return m;
    };

    return UserBet;
})();

$root.PushUserBetRes = (function() {

    /**
     * Properties of a PushUserBetRes.
     * @exports IPushUserBetRes
     * @interface IPushUserBetRes
     * @property {Array.<IBetAreaInfo>|null} [betAreaInfoList] PushUserBetRes betAreaInfoList
     * @property {Array.<IUserBet>|null} [betList] PushUserBetRes betList
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
        this.betAreaInfoList = [];
        this.betList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushUserBetRes betAreaInfoList.
     * @member {Array.<IBetAreaInfo>} betAreaInfoList
     * @memberof PushUserBetRes
     * @instance
     */
    PushUserBetRes.prototype.betAreaInfoList = $util.emptyArray;

    /**
     * PushUserBetRes betList.
     * @member {Array.<IUserBet>} betList
     * @memberof PushUserBetRes
     * @instance
     */
    PushUserBetRes.prototype.betList = $util.emptyArray;

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
        if (m.betAreaInfoList != null && m.betAreaInfoList.length) {
            for (var i = 0; i < m.betAreaInfoList.length; ++i)
                $root.BetAreaInfo.encode(m.betAreaInfoList[i], w.uint32(10).fork()).ldelim();
        }
        if (m.betList != null && m.betList.length) {
            for (var i = 0; i < m.betList.length; ++i)
                $root.UserBet.encode(m.betList[i], w.uint32(18).fork()).ldelim();
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
                if (!(m.betAreaInfoList && m.betAreaInfoList.length))
                    m.betAreaInfoList = [];
                m.betAreaInfoList.push($root.BetAreaInfo.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.betList && m.betList.length))
                    m.betList = [];
                m.betList.push($root.UserBet.decode(r, r.uint32()));
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

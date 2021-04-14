/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MarkSix || ($protobuf.roots.MarkSix = {});

/**
 * MarkSixType enum.
 * @exports MarkSixType
 * @enum {string}
 * @property {number} TeMa=1 TeMa value
 * @property {number} TeMa_LIANGMIAN=2 TeMa_LIANGMIAN value
 * @property {number} SeBo=3 SeBo value
 * @property {number} ZhengMa=4 ZhengMa value
 * @property {number} ZongHe=5 ZongHe value
 * @property {number} ZhengMa16=6 ZhengMa16 value
 * @property {number} ZhengMaTe=7 ZhengMaTe value
 * @property {number} LianMa=8 LianMa value
 * @property {number} TeXiao=9 TeXiao value
 * @property {number} TeWuXing=10 TeWuXing value
 * @property {number} LianBuZhong=11 LianBuZhong value
 * @property {number} ShengXiaoLianZhong=12 ShengXiaoLianZhong value
 * @property {number} LianWeiPeng=13 LianWeiPeng value
 */
$root.MarkSixType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "TeMa"] = 1;
    values[valuesById[2] = "TeMa_LIANGMIAN"] = 2;
    values[valuesById[3] = "SeBo"] = 3;
    values[valuesById[4] = "ZhengMa"] = 4;
    values[valuesById[5] = "ZongHe"] = 5;
    values[valuesById[6] = "ZhengMa16"] = 6;
    values[valuesById[7] = "ZhengMaTe"] = 7;
    values[valuesById[8] = "LianMa"] = 8;
    values[valuesById[9] = "TeXiao"] = 9;
    values[valuesById[10] = "TeWuXing"] = 10;
    values[valuesById[11] = "LianBuZhong"] = 11;
    values[valuesById[12] = "ShengXiaoLianZhong"] = 12;
    values[valuesById[13] = "LianWeiPeng"] = 13;
    return values;
})();

$root.LotteryItem = (function() {

    /**
     * Properties of a LotteryItem.
     * @exports ILotteryItem
     * @interface ILotteryItem
     * @property {number} order LotteryItem order
     * @property {number} number LotteryItem number
     * @property {string} shengxiao LotteryItem shengxiao
     * @property {boolean} isTeMa LotteryItem isTeMa
     * @property {string|null} [wuxing] LotteryItem wuxing
     */

    /**
     * Constructs a new LotteryItem.
     * @exports LotteryItem
     * @classdesc Represents a LotteryItem.
     * @implements ILotteryItem
     * @constructor
     * @param {ILotteryItem=} [p] Properties to set
     */
    function LotteryItem(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LotteryItem order.
     * @member {number} order
     * @memberof LotteryItem
     * @instance
     */
    LotteryItem.prototype.order = 0;

    /**
     * LotteryItem number.
     * @member {number} number
     * @memberof LotteryItem
     * @instance
     */
    LotteryItem.prototype.number = 0;

    /**
     * LotteryItem shengxiao.
     * @member {string} shengxiao
     * @memberof LotteryItem
     * @instance
     */
    LotteryItem.prototype.shengxiao = "";

    /**
     * LotteryItem isTeMa.
     * @member {boolean} isTeMa
     * @memberof LotteryItem
     * @instance
     */
    LotteryItem.prototype.isTeMa = false;

    /**
     * LotteryItem wuxing.
     * @member {string} wuxing
     * @memberof LotteryItem
     * @instance
     */
    LotteryItem.prototype.wuxing = "";

    /**
     * Creates a new LotteryItem instance using the specified properties.
     * @function create
     * @memberof LotteryItem
     * @static
     * @param {ILotteryItem=} [properties] Properties to set
     * @returns {LotteryItem} LotteryItem instance
     */
    LotteryItem.create = function create(properties) {
        return new LotteryItem(properties);
    };

    /**
     * Encodes the specified LotteryItem message. Does not implicitly {@link LotteryItem.verify|verify} messages.
     * @function encode
     * @memberof LotteryItem
     * @static
     * @param {ILotteryItem} m LotteryItem message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LotteryItem.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.order);
        w.uint32(16).int32(m.number);
        w.uint32(26).string(m.shengxiao);
        w.uint32(32).bool(m.isTeMa);
        if (m.wuxing != null && m.hasOwnProperty("wuxing"))
            w.uint32(42).string(m.wuxing);
        return w;
    };

    /**
     * Decodes a LotteryItem message from the specified reader or buffer.
     * @function decode
     * @memberof LotteryItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LotteryItem} LotteryItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LotteryItem.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LotteryItem();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.order = r.int32();
                break;
            case 2:
                m.number = r.int32();
                break;
            case 3:
                m.shengxiao = r.string();
                break;
            case 4:
                m.isTeMa = r.bool();
                break;
            case 5:
                m.wuxing = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("order"))
            throw $util.ProtocolError("missing required 'order'", { instance: m });
        if (!m.hasOwnProperty("number"))
            throw $util.ProtocolError("missing required 'number'", { instance: m });
        if (!m.hasOwnProperty("shengxiao"))
            throw $util.ProtocolError("missing required 'shengxiao'", { instance: m });
        if (!m.hasOwnProperty("isTeMa"))
            throw $util.ProtocolError("missing required 'isTeMa'", { instance: m });
        return m;
    };

    return LotteryItem;
})();

$root.LotteryRecord = (function() {

    /**
     * Properties of a LotteryRecord.
     * @exports ILotteryRecord
     * @interface ILotteryRecord
     * @property {string} periodNo LotteryRecord periodNo
     * @property {Array.<ILotteryItem>|null} [item] LotteryRecord item
     */

    /**
     * Constructs a new LotteryRecord.
     * @exports LotteryRecord
     * @classdesc Represents a LotteryRecord.
     * @implements ILotteryRecord
     * @constructor
     * @param {ILotteryRecord=} [p] Properties to set
     */
    function LotteryRecord(p) {
        this.item = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LotteryRecord periodNo.
     * @member {string} periodNo
     * @memberof LotteryRecord
     * @instance
     */
    LotteryRecord.prototype.periodNo = "";

    /**
     * LotteryRecord item.
     * @member {Array.<ILotteryItem>} item
     * @memberof LotteryRecord
     * @instance
     */
    LotteryRecord.prototype.item = $util.emptyArray;

    /**
     * Creates a new LotteryRecord instance using the specified properties.
     * @function create
     * @memberof LotteryRecord
     * @static
     * @param {ILotteryRecord=} [properties] Properties to set
     * @returns {LotteryRecord} LotteryRecord instance
     */
    LotteryRecord.create = function create(properties) {
        return new LotteryRecord(properties);
    };

    /**
     * Encodes the specified LotteryRecord message. Does not implicitly {@link LotteryRecord.verify|verify} messages.
     * @function encode
     * @memberof LotteryRecord
     * @static
     * @param {ILotteryRecord} m LotteryRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LotteryRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.periodNo);
        if (m.item != null && m.item.length) {
            for (var i = 0; i < m.item.length; ++i)
                $root.LotteryItem.encode(m.item[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a LotteryRecord message from the specified reader or buffer.
     * @function decode
     * @memberof LotteryRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LotteryRecord} LotteryRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LotteryRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LotteryRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.periodNo = r.string();
                break;
            case 2:
                if (!(m.item && m.item.length))
                    m.item = [];
                m.item.push($root.LotteryItem.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("periodNo"))
            throw $util.ProtocolError("missing required 'periodNo'", { instance: m });
        return m;
    };

    return LotteryRecord;
})();

$root.RequestJoinRoom = (function() {

    /**
     * Properties of a RequestJoinRoom.
     * @exports IRequestJoinRoom
     * @interface IRequestJoinRoom
     */

    /**
     * Constructs a new RequestJoinRoom.
     * @exports RequestJoinRoom
     * @classdesc Represents a RequestJoinRoom.
     * @implements IRequestJoinRoom
     * @constructor
     * @param {IRequestJoinRoom=} [p] Properties to set
     */
    function RequestJoinRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RequestJoinRoom instance using the specified properties.
     * @function create
     * @memberof RequestJoinRoom
     * @static
     * @param {IRequestJoinRoom=} [properties] Properties to set
     * @returns {RequestJoinRoom} RequestJoinRoom instance
     */
    RequestJoinRoom.create = function create(properties) {
        return new RequestJoinRoom(properties);
    };

    /**
     * Encodes the specified RequestJoinRoom message. Does not implicitly {@link RequestJoinRoom.verify|verify} messages.
     * @function encode
     * @memberof RequestJoinRoom
     * @static
     * @param {IRequestJoinRoom} m RequestJoinRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestJoinRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RequestJoinRoom message from the specified reader or buffer.
     * @function decode
     * @memberof RequestJoinRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RequestJoinRoom} RequestJoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestJoinRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RequestJoinRoom();
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

    return RequestJoinRoom;
})();

$root.SuccessBetInfo = (function() {

    /**
     * Properties of a SuccessBetInfo.
     * @exports ISuccessBetInfo
     * @interface ISuccessBetInfo
     * @property {MarkSixType} markSixType SuccessBetInfo markSixType
     * @property {number} betMoney SuccessBetInfo betMoney
     * @property {Array.<number>|null} [num] SuccessBetInfo num
     * @property {number|null} [betIndex] SuccessBetInfo betIndex
     * @property {number|null} [subType] SuccessBetInfo subType
     */

    /**
     * Constructs a new SuccessBetInfo.
     * @exports SuccessBetInfo
     * @classdesc Represents a SuccessBetInfo.
     * @implements ISuccessBetInfo
     * @constructor
     * @param {ISuccessBetInfo=} [p] Properties to set
     */
    function SuccessBetInfo(p) {
        this.num = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SuccessBetInfo markSixType.
     * @member {MarkSixType} markSixType
     * @memberof SuccessBetInfo
     * @instance
     */
    SuccessBetInfo.prototype.markSixType = 1;

    /**
     * SuccessBetInfo betMoney.
     * @member {number} betMoney
     * @memberof SuccessBetInfo
     * @instance
     */
    SuccessBetInfo.prototype.betMoney = 0;

    /**
     * SuccessBetInfo num.
     * @member {Array.<number>} num
     * @memberof SuccessBetInfo
     * @instance
     */
    SuccessBetInfo.prototype.num = $util.emptyArray;

    /**
     * SuccessBetInfo betIndex.
     * @member {number} betIndex
     * @memberof SuccessBetInfo
     * @instance
     */
    SuccessBetInfo.prototype.betIndex = 0;

    /**
     * SuccessBetInfo subType.
     * @member {number} subType
     * @memberof SuccessBetInfo
     * @instance
     */
    SuccessBetInfo.prototype.subType = 0;

    /**
     * Creates a new SuccessBetInfo instance using the specified properties.
     * @function create
     * @memberof SuccessBetInfo
     * @static
     * @param {ISuccessBetInfo=} [properties] Properties to set
     * @returns {SuccessBetInfo} SuccessBetInfo instance
     */
    SuccessBetInfo.create = function create(properties) {
        return new SuccessBetInfo(properties);
    };

    /**
     * Encodes the specified SuccessBetInfo message. Does not implicitly {@link SuccessBetInfo.verify|verify} messages.
     * @function encode
     * @memberof SuccessBetInfo
     * @static
     * @param {ISuccessBetInfo} m SuccessBetInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SuccessBetInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.markSixType);
        w.uint32(16).int32(m.betMoney);
        if (m.num != null && m.num.length) {
            for (var i = 0; i < m.num.length; ++i)
                w.uint32(24).int32(m.num[i]);
        }
        if (m.betIndex != null && m.hasOwnProperty("betIndex"))
            w.uint32(32).int32(m.betIndex);
        if (m.subType != null && m.hasOwnProperty("subType"))
            w.uint32(40).int32(m.subType);
        return w;
    };

    /**
     * Decodes a SuccessBetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SuccessBetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SuccessBetInfo} SuccessBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SuccessBetInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SuccessBetInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.markSixType = r.int32();
                break;
            case 2:
                m.betMoney = r.int32();
                break;
            case 3:
                if (!(m.num && m.num.length))
                    m.num = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.num.push(r.int32());
                } else
                    m.num.push(r.int32());
                break;
            case 4:
                m.betIndex = r.int32();
                break;
            case 5:
                m.subType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("markSixType"))
            throw $util.ProtocolError("missing required 'markSixType'", { instance: m });
        if (!m.hasOwnProperty("betMoney"))
            throw $util.ProtocolError("missing required 'betMoney'", { instance: m });
        return m;
    };

    return SuccessBetInfo;
})();

$root.BetLimitInfo = (function() {

    /**
     * Properties of a BetLimitInfo.
     * @exports IBetLimitInfo
     * @interface IBetLimitInfo
     * @property {MarkSixType} markSixType BetLimitInfo markSixType
     * @property {string} typeLimit BetLimitInfo typeLimit
     */

    /**
     * Constructs a new BetLimitInfo.
     * @exports BetLimitInfo
     * @classdesc Represents a BetLimitInfo.
     * @implements IBetLimitInfo
     * @constructor
     * @param {IBetLimitInfo=} [p] Properties to set
     */
    function BetLimitInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetLimitInfo markSixType.
     * @member {MarkSixType} markSixType
     * @memberof BetLimitInfo
     * @instance
     */
    BetLimitInfo.prototype.markSixType = 1;

    /**
     * BetLimitInfo typeLimit.
     * @member {string} typeLimit
     * @memberof BetLimitInfo
     * @instance
     */
    BetLimitInfo.prototype.typeLimit = "";

    /**
     * Creates a new BetLimitInfo instance using the specified properties.
     * @function create
     * @memberof BetLimitInfo
     * @static
     * @param {IBetLimitInfo=} [properties] Properties to set
     * @returns {BetLimitInfo} BetLimitInfo instance
     */
    BetLimitInfo.create = function create(properties) {
        return new BetLimitInfo(properties);
    };

    /**
     * Encodes the specified BetLimitInfo message. Does not implicitly {@link BetLimitInfo.verify|verify} messages.
     * @function encode
     * @memberof BetLimitInfo
     * @static
     * @param {IBetLimitInfo} m BetLimitInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetLimitInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.markSixType);
        w.uint32(18).string(m.typeLimit);
        return w;
    };

    /**
     * Decodes a BetLimitInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BetLimitInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetLimitInfo} BetLimitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetLimitInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetLimitInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.markSixType = r.int32();
                break;
            case 2:
                m.typeLimit = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("markSixType"))
            throw $util.ProtocolError("missing required 'markSixType'", { instance: m });
        if (!m.hasOwnProperty("typeLimit"))
            throw $util.ProtocolError("missing required 'typeLimit'", { instance: m });
        return m;
    };

    return BetLimitInfo;
})();

$root.ResponseJoinRoom = (function() {

    /**
     * Properties of a ResponseJoinRoom.
     * @exports IResponseJoinRoom
     * @interface IResponseJoinRoom
     * @property {ILotteryRecord} record ResponseJoinRoom record
     * @property {string} nextPreiodNo ResponseJoinRoom nextPreiodNo
     * @property {string|null} [stopBetTime] ResponseJoinRoom stopBetTime
     * @property {string|null} [lotteryTime] ResponseJoinRoom lotteryTime
     * @property {string} refreshTime ResponseJoinRoom refreshTime
     * @property {number} status ResponseJoinRoom status
     * @property {Array.<ISuccessBetInfo>|null} [successBetInfo] ResponseJoinRoom successBetInfo
     * @property {string} baseLimit ResponseJoinRoom baseLimit
     * @property {Array.<IBetLimitInfo>|null} [betLimitInfo] ResponseJoinRoom betLimitInfo
     * @property {string} betLimit ResponseJoinRoom betLimit
     * @property {string} betMinLimit ResponseJoinRoom betMinLimit
     */

    /**
     * Constructs a new ResponseJoinRoom.
     * @exports ResponseJoinRoom
     * @classdesc Represents a ResponseJoinRoom.
     * @implements IResponseJoinRoom
     * @constructor
     * @param {IResponseJoinRoom=} [p] Properties to set
     */
    function ResponseJoinRoom(p) {
        this.successBetInfo = [];
        this.betLimitInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ResponseJoinRoom record.
     * @member {ILotteryRecord} record
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.record = null;

    /**
     * ResponseJoinRoom nextPreiodNo.
     * @member {string} nextPreiodNo
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.nextPreiodNo = "";

    /**
     * ResponseJoinRoom stopBetTime.
     * @member {string} stopBetTime
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.stopBetTime = "";

    /**
     * ResponseJoinRoom lotteryTime.
     * @member {string} lotteryTime
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.lotteryTime = "";

    /**
     * ResponseJoinRoom refreshTime.
     * @member {string} refreshTime
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.refreshTime = "";

    /**
     * ResponseJoinRoom status.
     * @member {number} status
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.status = 0;

    /**
     * ResponseJoinRoom successBetInfo.
     * @member {Array.<ISuccessBetInfo>} successBetInfo
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.successBetInfo = $util.emptyArray;

    /**
     * ResponseJoinRoom baseLimit.
     * @member {string} baseLimit
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.baseLimit = "";

    /**
     * ResponseJoinRoom betLimitInfo.
     * @member {Array.<IBetLimitInfo>} betLimitInfo
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.betLimitInfo = $util.emptyArray;

    /**
     * ResponseJoinRoom betLimit.
     * @member {string} betLimit
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.betLimit = "";

    /**
     * ResponseJoinRoom betMinLimit.
     * @member {string} betMinLimit
     * @memberof ResponseJoinRoom
     * @instance
     */
    ResponseJoinRoom.prototype.betMinLimit = "";

    /**
     * Creates a new ResponseJoinRoom instance using the specified properties.
     * @function create
     * @memberof ResponseJoinRoom
     * @static
     * @param {IResponseJoinRoom=} [properties] Properties to set
     * @returns {ResponseJoinRoom} ResponseJoinRoom instance
     */
    ResponseJoinRoom.create = function create(properties) {
        return new ResponseJoinRoom(properties);
    };

    /**
     * Encodes the specified ResponseJoinRoom message. Does not implicitly {@link ResponseJoinRoom.verify|verify} messages.
     * @function encode
     * @memberof ResponseJoinRoom
     * @static
     * @param {IResponseJoinRoom} m ResponseJoinRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseJoinRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.LotteryRecord.encode(m.record, w.uint32(10).fork()).ldelim();
        w.uint32(18).string(m.nextPreiodNo);
        if (m.stopBetTime != null && m.hasOwnProperty("stopBetTime"))
            w.uint32(26).string(m.stopBetTime);
        if (m.lotteryTime != null && m.hasOwnProperty("lotteryTime"))
            w.uint32(34).string(m.lotteryTime);
        w.uint32(42).string(m.refreshTime);
        w.uint32(48).int32(m.status);
        if (m.successBetInfo != null && m.successBetInfo.length) {
            for (var i = 0; i < m.successBetInfo.length; ++i)
                $root.SuccessBetInfo.encode(m.successBetInfo[i], w.uint32(58).fork()).ldelim();
        }
        w.uint32(66).string(m.baseLimit);
        if (m.betLimitInfo != null && m.betLimitInfo.length) {
            for (var i = 0; i < m.betLimitInfo.length; ++i)
                $root.BetLimitInfo.encode(m.betLimitInfo[i], w.uint32(74).fork()).ldelim();
        }
        w.uint32(82).string(m.betLimit);
        w.uint32(90).string(m.betMinLimit);
        return w;
    };

    /**
     * Decodes a ResponseJoinRoom message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseJoinRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ResponseJoinRoom} ResponseJoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseJoinRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ResponseJoinRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.record = $root.LotteryRecord.decode(r, r.uint32());
                break;
            case 2:
                m.nextPreiodNo = r.string();
                break;
            case 3:
                m.stopBetTime = r.string();
                break;
            case 4:
                m.lotteryTime = r.string();
                break;
            case 5:
                m.refreshTime = r.string();
                break;
            case 6:
                m.status = r.int32();
                break;
            case 7:
                if (!(m.successBetInfo && m.successBetInfo.length))
                    m.successBetInfo = [];
                m.successBetInfo.push($root.SuccessBetInfo.decode(r, r.uint32()));
                break;
            case 8:
                m.baseLimit = r.string();
                break;
            case 9:
                if (!(m.betLimitInfo && m.betLimitInfo.length))
                    m.betLimitInfo = [];
                m.betLimitInfo.push($root.BetLimitInfo.decode(r, r.uint32()));
                break;
            case 10:
                m.betLimit = r.string();
                break;
            case 11:
                m.betMinLimit = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("record"))
            throw $util.ProtocolError("missing required 'record'", { instance: m });
        if (!m.hasOwnProperty("nextPreiodNo"))
            throw $util.ProtocolError("missing required 'nextPreiodNo'", { instance: m });
        if (!m.hasOwnProperty("refreshTime"))
            throw $util.ProtocolError("missing required 'refreshTime'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("baseLimit"))
            throw $util.ProtocolError("missing required 'baseLimit'", { instance: m });
        if (!m.hasOwnProperty("betLimit"))
            throw $util.ProtocolError("missing required 'betLimit'", { instance: m });
        if (!m.hasOwnProperty("betMinLimit"))
            throw $util.ProtocolError("missing required 'betMinLimit'", { instance: m });
        return m;
    };

    return ResponseJoinRoom;
})();

$root.RequestAllOdds = (function() {

    /**
     * Properties of a RequestAllOdds.
     * @exports IRequestAllOdds
     * @interface IRequestAllOdds
     */

    /**
     * Constructs a new RequestAllOdds.
     * @exports RequestAllOdds
     * @classdesc Represents a RequestAllOdds.
     * @implements IRequestAllOdds
     * @constructor
     * @param {IRequestAllOdds=} [p] Properties to set
     */
    function RequestAllOdds(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RequestAllOdds instance using the specified properties.
     * @function create
     * @memberof RequestAllOdds
     * @static
     * @param {IRequestAllOdds=} [properties] Properties to set
     * @returns {RequestAllOdds} RequestAllOdds instance
     */
    RequestAllOdds.create = function create(properties) {
        return new RequestAllOdds(properties);
    };

    /**
     * Encodes the specified RequestAllOdds message. Does not implicitly {@link RequestAllOdds.verify|verify} messages.
     * @function encode
     * @memberof RequestAllOdds
     * @static
     * @param {IRequestAllOdds} m RequestAllOdds message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestAllOdds.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RequestAllOdds message from the specified reader or buffer.
     * @function decode
     * @memberof RequestAllOdds
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RequestAllOdds} RequestAllOdds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestAllOdds.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RequestAllOdds();
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

    return RequestAllOdds;
})();

$root.OddsInfo = (function() {

    /**
     * Properties of an OddsInfo.
     * @exports IOddsInfo
     * @interface IOddsInfo
     * @property {MarkSixType} markSixType OddsInfo markSixType
     * @property {number|null} [bo] OddsInfo bo
     * @property {number|null} [temaliangmiantype] OddsInfo temaliangmiantype
     * @property {number|null} [sebotype] OddsInfo sebotype
     * @property {number|null} [zonghetype] OddsInfo zonghetype
     * @property {number|null} [temawuxingtype] OddsInfo temawuxingtype
     * @property {number|null} [zhengma1to6] OddsInfo zhengma1to6
     * @property {number|null} [zhengma1to6type] OddsInfo zhengma1to6type
     * @property {number|null} [lianmatype] OddsInfo lianmatype
     * @property {number|null} [zhengmate1to6] OddsInfo zhengmate1to6
     * @property {number|null} [texiaotype] OddsInfo texiaotype
     * @property {number} odds OddsInfo odds
     * @property {number|null} [lianbuzhongtype] OddsInfo lianbuzhongtype
     * @property {number|null} [shengxiaolianzhongtype] OddsInfo shengxiaolianzhongtype
     * @property {number|null} [lianweipengtype] OddsInfo lianweipengtype
     * @property {number|null} [weitype] OddsInfo weitype
     */

    /**
     * Constructs a new OddsInfo.
     * @exports OddsInfo
     * @classdesc Represents an OddsInfo.
     * @implements IOddsInfo
     * @constructor
     * @param {IOddsInfo=} [p] Properties to set
     */
    function OddsInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * OddsInfo markSixType.
     * @member {MarkSixType} markSixType
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.markSixType = 1;

    /**
     * OddsInfo bo.
     * @member {number} bo
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.bo = 0;

    /**
     * OddsInfo temaliangmiantype.
     * @member {number} temaliangmiantype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.temaliangmiantype = 0;

    /**
     * OddsInfo sebotype.
     * @member {number} sebotype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.sebotype = 0;

    /**
     * OddsInfo zonghetype.
     * @member {number} zonghetype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.zonghetype = 0;

    /**
     * OddsInfo temawuxingtype.
     * @member {number} temawuxingtype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.temawuxingtype = 0;

    /**
     * OddsInfo zhengma1to6.
     * @member {number} zhengma1to6
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.zhengma1to6 = 0;

    /**
     * OddsInfo zhengma1to6type.
     * @member {number} zhengma1to6type
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.zhengma1to6type = 0;

    /**
     * OddsInfo lianmatype.
     * @member {number} lianmatype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.lianmatype = 0;

    /**
     * OddsInfo zhengmate1to6.
     * @member {number} zhengmate1to6
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.zhengmate1to6 = 0;

    /**
     * OddsInfo texiaotype.
     * @member {number} texiaotype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.texiaotype = 0;

    /**
     * OddsInfo odds.
     * @member {number} odds
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.odds = 0;

    /**
     * OddsInfo lianbuzhongtype.
     * @member {number} lianbuzhongtype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.lianbuzhongtype = 0;

    /**
     * OddsInfo shengxiaolianzhongtype.
     * @member {number} shengxiaolianzhongtype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.shengxiaolianzhongtype = 0;

    /**
     * OddsInfo lianweipengtype.
     * @member {number} lianweipengtype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.lianweipengtype = 0;

    /**
     * OddsInfo weitype.
     * @member {number} weitype
     * @memberof OddsInfo
     * @instance
     */
    OddsInfo.prototype.weitype = 0;

    /**
     * Creates a new OddsInfo instance using the specified properties.
     * @function create
     * @memberof OddsInfo
     * @static
     * @param {IOddsInfo=} [properties] Properties to set
     * @returns {OddsInfo} OddsInfo instance
     */
    OddsInfo.create = function create(properties) {
        return new OddsInfo(properties);
    };

    /**
     * Encodes the specified OddsInfo message. Does not implicitly {@link OddsInfo.verify|verify} messages.
     * @function encode
     * @memberof OddsInfo
     * @static
     * @param {IOddsInfo} m OddsInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OddsInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.markSixType);
        if (m.bo != null && m.hasOwnProperty("bo"))
            w.uint32(16).int32(m.bo);
        if (m.temaliangmiantype != null && m.hasOwnProperty("temaliangmiantype"))
            w.uint32(24).int32(m.temaliangmiantype);
        if (m.sebotype != null && m.hasOwnProperty("sebotype"))
            w.uint32(32).int32(m.sebotype);
        if (m.zonghetype != null && m.hasOwnProperty("zonghetype"))
            w.uint32(40).int32(m.zonghetype);
        if (m.temawuxingtype != null && m.hasOwnProperty("temawuxingtype"))
            w.uint32(48).int32(m.temawuxingtype);
        if (m.zhengma1to6 != null && m.hasOwnProperty("zhengma1to6"))
            w.uint32(56).int32(m.zhengma1to6);
        if (m.zhengma1to6type != null && m.hasOwnProperty("zhengma1to6type"))
            w.uint32(64).int32(m.zhengma1to6type);
        if (m.lianmatype != null && m.hasOwnProperty("lianmatype"))
            w.uint32(72).int32(m.lianmatype);
        if (m.zhengmate1to6 != null && m.hasOwnProperty("zhengmate1to6"))
            w.uint32(80).int32(m.zhengmate1to6);
        if (m.texiaotype != null && m.hasOwnProperty("texiaotype"))
            w.uint32(88).int32(m.texiaotype);
        w.uint32(97).double(m.odds);
        if (m.lianbuzhongtype != null && m.hasOwnProperty("lianbuzhongtype"))
            w.uint32(104).int32(m.lianbuzhongtype);
        if (m.shengxiaolianzhongtype != null && m.hasOwnProperty("shengxiaolianzhongtype"))
            w.uint32(112).int32(m.shengxiaolianzhongtype);
        if (m.lianweipengtype != null && m.hasOwnProperty("lianweipengtype"))
            w.uint32(120).int32(m.lianweipengtype);
        if (m.weitype != null && m.hasOwnProperty("weitype"))
            w.uint32(128).int32(m.weitype);
        return w;
    };

    /**
     * Decodes an OddsInfo message from the specified reader or buffer.
     * @function decode
     * @memberof OddsInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OddsInfo} OddsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OddsInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OddsInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.markSixType = r.int32();
                break;
            case 2:
                m.bo = r.int32();
                break;
            case 3:
                m.temaliangmiantype = r.int32();
                break;
            case 4:
                m.sebotype = r.int32();
                break;
            case 5:
                m.zonghetype = r.int32();
                break;
            case 6:
                m.temawuxingtype = r.int32();
                break;
            case 7:
                m.zhengma1to6 = r.int32();
                break;
            case 8:
                m.zhengma1to6type = r.int32();
                break;
            case 9:
                m.lianmatype = r.int32();
                break;
            case 10:
                m.zhengmate1to6 = r.int32();
                break;
            case 11:
                m.texiaotype = r.int32();
                break;
            case 12:
                m.odds = r.double();
                break;
            case 13:
                m.lianbuzhongtype = r.int32();
                break;
            case 14:
                m.shengxiaolianzhongtype = r.int32();
                break;
            case 15:
                m.lianweipengtype = r.int32();
                break;
            case 16:
                m.weitype = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("markSixType"))
            throw $util.ProtocolError("missing required 'markSixType'", { instance: m });
        if (!m.hasOwnProperty("odds"))
            throw $util.ProtocolError("missing required 'odds'", { instance: m });
        return m;
    };

    return OddsInfo;
})();

$root.WuXingInfo = (function() {

    /**
     * Properties of a WuXingInfo.
     * @exports IWuXingInfo
     * @interface IWuXingInfo
     * @property {number|null} [wuxing] WuXingInfo wuxing
     * @property {Array.<number>|null} [num] WuXingInfo num
     */

    /**
     * Constructs a new WuXingInfo.
     * @exports WuXingInfo
     * @classdesc Represents a WuXingInfo.
     * @implements IWuXingInfo
     * @constructor
     * @param {IWuXingInfo=} [p] Properties to set
     */
    function WuXingInfo(p) {
        this.num = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * WuXingInfo wuxing.
     * @member {number} wuxing
     * @memberof WuXingInfo
     * @instance
     */
    WuXingInfo.prototype.wuxing = 0;

    /**
     * WuXingInfo num.
     * @member {Array.<number>} num
     * @memberof WuXingInfo
     * @instance
     */
    WuXingInfo.prototype.num = $util.emptyArray;

    /**
     * Creates a new WuXingInfo instance using the specified properties.
     * @function create
     * @memberof WuXingInfo
     * @static
     * @param {IWuXingInfo=} [properties] Properties to set
     * @returns {WuXingInfo} WuXingInfo instance
     */
    WuXingInfo.create = function create(properties) {
        return new WuXingInfo(properties);
    };

    /**
     * Encodes the specified WuXingInfo message. Does not implicitly {@link WuXingInfo.verify|verify} messages.
     * @function encode
     * @memberof WuXingInfo
     * @static
     * @param {IWuXingInfo} m WuXingInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WuXingInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.wuxing != null && m.hasOwnProperty("wuxing"))
            w.uint32(8).int32(m.wuxing);
        if (m.num != null && m.num.length) {
            for (var i = 0; i < m.num.length; ++i)
                w.uint32(16).int32(m.num[i]);
        }
        return w;
    };

    /**
     * Decodes a WuXingInfo message from the specified reader or buffer.
     * @function decode
     * @memberof WuXingInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {WuXingInfo} WuXingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WuXingInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WuXingInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.wuxing = r.int32();
                break;
            case 2:
                if (!(m.num && m.num.length))
                    m.num = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.num.push(r.int32());
                } else
                    m.num.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return WuXingInfo;
})();

$root.ShengXiaoInfo = (function() {

    /**
     * Properties of a ShengXiaoInfo.
     * @exports IShengXiaoInfo
     * @interface IShengXiaoInfo
     * @property {number|null} [shengxiao] ShengXiaoInfo shengxiao
     * @property {Array.<number>|null} [num] ShengXiaoInfo num
     */

    /**
     * Constructs a new ShengXiaoInfo.
     * @exports ShengXiaoInfo
     * @classdesc Represents a ShengXiaoInfo.
     * @implements IShengXiaoInfo
     * @constructor
     * @param {IShengXiaoInfo=} [p] Properties to set
     */
    function ShengXiaoInfo(p) {
        this.num = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ShengXiaoInfo shengxiao.
     * @member {number} shengxiao
     * @memberof ShengXiaoInfo
     * @instance
     */
    ShengXiaoInfo.prototype.shengxiao = 0;

    /**
     * ShengXiaoInfo num.
     * @member {Array.<number>} num
     * @memberof ShengXiaoInfo
     * @instance
     */
    ShengXiaoInfo.prototype.num = $util.emptyArray;

    /**
     * Creates a new ShengXiaoInfo instance using the specified properties.
     * @function create
     * @memberof ShengXiaoInfo
     * @static
     * @param {IShengXiaoInfo=} [properties] Properties to set
     * @returns {ShengXiaoInfo} ShengXiaoInfo instance
     */
    ShengXiaoInfo.create = function create(properties) {
        return new ShengXiaoInfo(properties);
    };

    /**
     * Encodes the specified ShengXiaoInfo message. Does not implicitly {@link ShengXiaoInfo.verify|verify} messages.
     * @function encode
     * @memberof ShengXiaoInfo
     * @static
     * @param {IShengXiaoInfo} m ShengXiaoInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShengXiaoInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.shengxiao != null && m.hasOwnProperty("shengxiao"))
            w.uint32(8).int32(m.shengxiao);
        if (m.num != null && m.num.length) {
            for (var i = 0; i < m.num.length; ++i)
                w.uint32(24).int32(m.num[i]);
        }
        return w;
    };

    /**
     * Decodes a ShengXiaoInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ShengXiaoInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ShengXiaoInfo} ShengXiaoInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShengXiaoInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ShengXiaoInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.shengxiao = r.int32();
                break;
            case 3:
                if (!(m.num && m.num.length))
                    m.num = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.num.push(r.int32());
                } else
                    m.num.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ShengXiaoInfo;
})();

$root.ResponseAllOdds = (function() {

    /**
     * Properties of a ResponseAllOdds.
     * @exports IResponseAllOdds
     * @interface IResponseAllOdds
     * @property {string} refreshTime ResponseAllOdds refreshTime
     * @property {Array.<IOddsInfo>|null} [temaOdds] ResponseAllOdds temaOdds
     * @property {Array.<IOddsInfo>|null} [temaliangmianOdds] ResponseAllOdds temaliangmianOdds
     * @property {Array.<IOddsInfo>|null} [seboOdds] ResponseAllOdds seboOdds
     * @property {Array.<IOddsInfo>|null} [zhengmaOdds] ResponseAllOdds zhengmaOdds
     * @property {Array.<IOddsInfo>|null} [zongheOdds] ResponseAllOdds zongheOdds
     * @property {Array.<IOddsInfo>|null} [zhengma16Odds] ResponseAllOdds zhengma16Odds
     * @property {Array.<IOddsInfo>|null} [zhengmateOdds] ResponseAllOdds zhengmateOdds
     * @property {Array.<IOddsInfo>|null} [lianmaOdds] ResponseAllOdds lianmaOdds
     * @property {Array.<IOddsInfo>|null} [texiaoOdds] ResponseAllOdds texiaoOdds
     * @property {Array.<IOddsInfo>|null} [wuxingOdds] ResponseAllOdds wuxingOdds
     * @property {Array.<IWuXingInfo>|null} [wuxingInfo] ResponseAllOdds wuxingInfo
     * @property {Array.<IShengXiaoInfo>|null} [shengxiaoInfo] ResponseAllOdds shengxiaoInfo
     * @property {Array.<IOddsInfo>|null} [lianbuzhongOdds] ResponseAllOdds lianbuzhongOdds
     * @property {Array.<IOddsInfo>|null} [shengxiaolianzhongOdds] ResponseAllOdds shengxiaolianzhongOdds
     * @property {Array.<IOddsInfo>|null} [lianweipengOdds] ResponseAllOdds lianweipengOdds
     */

    /**
     * Constructs a new ResponseAllOdds.
     * @exports ResponseAllOdds
     * @classdesc Represents a ResponseAllOdds.
     * @implements IResponseAllOdds
     * @constructor
     * @param {IResponseAllOdds=} [p] Properties to set
     */
    function ResponseAllOdds(p) {
        this.temaOdds = [];
        this.temaliangmianOdds = [];
        this.seboOdds = [];
        this.zhengmaOdds = [];
        this.zongheOdds = [];
        this.zhengma16Odds = [];
        this.zhengmateOdds = [];
        this.lianmaOdds = [];
        this.texiaoOdds = [];
        this.wuxingOdds = [];
        this.wuxingInfo = [];
        this.shengxiaoInfo = [];
        this.lianbuzhongOdds = [];
        this.shengxiaolianzhongOdds = [];
        this.lianweipengOdds = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ResponseAllOdds refreshTime.
     * @member {string} refreshTime
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.refreshTime = "";

    /**
     * ResponseAllOdds temaOdds.
     * @member {Array.<IOddsInfo>} temaOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.temaOdds = $util.emptyArray;

    /**
     * ResponseAllOdds temaliangmianOdds.
     * @member {Array.<IOddsInfo>} temaliangmianOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.temaliangmianOdds = $util.emptyArray;

    /**
     * ResponseAllOdds seboOdds.
     * @member {Array.<IOddsInfo>} seboOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.seboOdds = $util.emptyArray;

    /**
     * ResponseAllOdds zhengmaOdds.
     * @member {Array.<IOddsInfo>} zhengmaOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.zhengmaOdds = $util.emptyArray;

    /**
     * ResponseAllOdds zongheOdds.
     * @member {Array.<IOddsInfo>} zongheOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.zongheOdds = $util.emptyArray;

    /**
     * ResponseAllOdds zhengma16Odds.
     * @member {Array.<IOddsInfo>} zhengma16Odds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.zhengma16Odds = $util.emptyArray;

    /**
     * ResponseAllOdds zhengmateOdds.
     * @member {Array.<IOddsInfo>} zhengmateOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.zhengmateOdds = $util.emptyArray;

    /**
     * ResponseAllOdds lianmaOdds.
     * @member {Array.<IOddsInfo>} lianmaOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.lianmaOdds = $util.emptyArray;

    /**
     * ResponseAllOdds texiaoOdds.
     * @member {Array.<IOddsInfo>} texiaoOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.texiaoOdds = $util.emptyArray;

    /**
     * ResponseAllOdds wuxingOdds.
     * @member {Array.<IOddsInfo>} wuxingOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.wuxingOdds = $util.emptyArray;

    /**
     * ResponseAllOdds wuxingInfo.
     * @member {Array.<IWuXingInfo>} wuxingInfo
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.wuxingInfo = $util.emptyArray;

    /**
     * ResponseAllOdds shengxiaoInfo.
     * @member {Array.<IShengXiaoInfo>} shengxiaoInfo
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.shengxiaoInfo = $util.emptyArray;

    /**
     * ResponseAllOdds lianbuzhongOdds.
     * @member {Array.<IOddsInfo>} lianbuzhongOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.lianbuzhongOdds = $util.emptyArray;

    /**
     * ResponseAllOdds shengxiaolianzhongOdds.
     * @member {Array.<IOddsInfo>} shengxiaolianzhongOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.shengxiaolianzhongOdds = $util.emptyArray;

    /**
     * ResponseAllOdds lianweipengOdds.
     * @member {Array.<IOddsInfo>} lianweipengOdds
     * @memberof ResponseAllOdds
     * @instance
     */
    ResponseAllOdds.prototype.lianweipengOdds = $util.emptyArray;

    /**
     * Creates a new ResponseAllOdds instance using the specified properties.
     * @function create
     * @memberof ResponseAllOdds
     * @static
     * @param {IResponseAllOdds=} [properties] Properties to set
     * @returns {ResponseAllOdds} ResponseAllOdds instance
     */
    ResponseAllOdds.create = function create(properties) {
        return new ResponseAllOdds(properties);
    };

    /**
     * Encodes the specified ResponseAllOdds message. Does not implicitly {@link ResponseAllOdds.verify|verify} messages.
     * @function encode
     * @memberof ResponseAllOdds
     * @static
     * @param {IResponseAllOdds} m ResponseAllOdds message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseAllOdds.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.refreshTime);
        if (m.temaOdds != null && m.temaOdds.length) {
            for (var i = 0; i < m.temaOdds.length; ++i)
                $root.OddsInfo.encode(m.temaOdds[i], w.uint32(18).fork()).ldelim();
        }
        if (m.temaliangmianOdds != null && m.temaliangmianOdds.length) {
            for (var i = 0; i < m.temaliangmianOdds.length; ++i)
                $root.OddsInfo.encode(m.temaliangmianOdds[i], w.uint32(26).fork()).ldelim();
        }
        if (m.seboOdds != null && m.seboOdds.length) {
            for (var i = 0; i < m.seboOdds.length; ++i)
                $root.OddsInfo.encode(m.seboOdds[i], w.uint32(34).fork()).ldelim();
        }
        if (m.zhengmaOdds != null && m.zhengmaOdds.length) {
            for (var i = 0; i < m.zhengmaOdds.length; ++i)
                $root.OddsInfo.encode(m.zhengmaOdds[i], w.uint32(42).fork()).ldelim();
        }
        if (m.zongheOdds != null && m.zongheOdds.length) {
            for (var i = 0; i < m.zongheOdds.length; ++i)
                $root.OddsInfo.encode(m.zongheOdds[i], w.uint32(50).fork()).ldelim();
        }
        if (m.zhengma16Odds != null && m.zhengma16Odds.length) {
            for (var i = 0; i < m.zhengma16Odds.length; ++i)
                $root.OddsInfo.encode(m.zhengma16Odds[i], w.uint32(58).fork()).ldelim();
        }
        if (m.zhengmateOdds != null && m.zhengmateOdds.length) {
            for (var i = 0; i < m.zhengmateOdds.length; ++i)
                $root.OddsInfo.encode(m.zhengmateOdds[i], w.uint32(66).fork()).ldelim();
        }
        if (m.lianmaOdds != null && m.lianmaOdds.length) {
            for (var i = 0; i < m.lianmaOdds.length; ++i)
                $root.OddsInfo.encode(m.lianmaOdds[i], w.uint32(74).fork()).ldelim();
        }
        if (m.texiaoOdds != null && m.texiaoOdds.length) {
            for (var i = 0; i < m.texiaoOdds.length; ++i)
                $root.OddsInfo.encode(m.texiaoOdds[i], w.uint32(82).fork()).ldelim();
        }
        if (m.wuxingOdds != null && m.wuxingOdds.length) {
            for (var i = 0; i < m.wuxingOdds.length; ++i)
                $root.OddsInfo.encode(m.wuxingOdds[i], w.uint32(90).fork()).ldelim();
        }
        if (m.wuxingInfo != null && m.wuxingInfo.length) {
            for (var i = 0; i < m.wuxingInfo.length; ++i)
                $root.WuXingInfo.encode(m.wuxingInfo[i], w.uint32(98).fork()).ldelim();
        }
        if (m.shengxiaoInfo != null && m.shengxiaoInfo.length) {
            for (var i = 0; i < m.shengxiaoInfo.length; ++i)
                $root.ShengXiaoInfo.encode(m.shengxiaoInfo[i], w.uint32(106).fork()).ldelim();
        }
        if (m.lianbuzhongOdds != null && m.lianbuzhongOdds.length) {
            for (var i = 0; i < m.lianbuzhongOdds.length; ++i)
                $root.OddsInfo.encode(m.lianbuzhongOdds[i], w.uint32(114).fork()).ldelim();
        }
        if (m.shengxiaolianzhongOdds != null && m.shengxiaolianzhongOdds.length) {
            for (var i = 0; i < m.shengxiaolianzhongOdds.length; ++i)
                $root.OddsInfo.encode(m.shengxiaolianzhongOdds[i], w.uint32(122).fork()).ldelim();
        }
        if (m.lianweipengOdds != null && m.lianweipengOdds.length) {
            for (var i = 0; i < m.lianweipengOdds.length; ++i)
                $root.OddsInfo.encode(m.lianweipengOdds[i], w.uint32(130).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a ResponseAllOdds message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseAllOdds
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ResponseAllOdds} ResponseAllOdds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseAllOdds.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ResponseAllOdds();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.refreshTime = r.string();
                break;
            case 2:
                if (!(m.temaOdds && m.temaOdds.length))
                    m.temaOdds = [];
                m.temaOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.temaliangmianOdds && m.temaliangmianOdds.length))
                    m.temaliangmianOdds = [];
                m.temaliangmianOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.seboOdds && m.seboOdds.length))
                    m.seboOdds = [];
                m.seboOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 5:
                if (!(m.zhengmaOdds && m.zhengmaOdds.length))
                    m.zhengmaOdds = [];
                m.zhengmaOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 6:
                if (!(m.zongheOdds && m.zongheOdds.length))
                    m.zongheOdds = [];
                m.zongheOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 7:
                if (!(m.zhengma16Odds && m.zhengma16Odds.length))
                    m.zhengma16Odds = [];
                m.zhengma16Odds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 8:
                if (!(m.zhengmateOdds && m.zhengmateOdds.length))
                    m.zhengmateOdds = [];
                m.zhengmateOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 9:
                if (!(m.lianmaOdds && m.lianmaOdds.length))
                    m.lianmaOdds = [];
                m.lianmaOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 10:
                if (!(m.texiaoOdds && m.texiaoOdds.length))
                    m.texiaoOdds = [];
                m.texiaoOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 11:
                if (!(m.wuxingOdds && m.wuxingOdds.length))
                    m.wuxingOdds = [];
                m.wuxingOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 12:
                if (!(m.wuxingInfo && m.wuxingInfo.length))
                    m.wuxingInfo = [];
                m.wuxingInfo.push($root.WuXingInfo.decode(r, r.uint32()));
                break;
            case 13:
                if (!(m.shengxiaoInfo && m.shengxiaoInfo.length))
                    m.shengxiaoInfo = [];
                m.shengxiaoInfo.push($root.ShengXiaoInfo.decode(r, r.uint32()));
                break;
            case 14:
                if (!(m.lianbuzhongOdds && m.lianbuzhongOdds.length))
                    m.lianbuzhongOdds = [];
                m.lianbuzhongOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 15:
                if (!(m.shengxiaolianzhongOdds && m.shengxiaolianzhongOdds.length))
                    m.shengxiaolianzhongOdds = [];
                m.shengxiaolianzhongOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            case 16:
                if (!(m.lianweipengOdds && m.lianweipengOdds.length))
                    m.lianweipengOdds = [];
                m.lianweipengOdds.push($root.OddsInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("refreshTime"))
            throw $util.ProtocolError("missing required 'refreshTime'", { instance: m });
        return m;
    };

    return ResponseAllOdds;
})();

$root.PingRes = (function() {

    /**
     * Properties of a PingRes.
     * @exports IPingRes
     * @interface IPingRes
     * @property {string} currentTime PingRes currentTime
     */

    /**
     * Constructs a new PingRes.
     * @exports PingRes
     * @classdesc Represents a PingRes.
     * @implements IPingRes
     * @constructor
     * @param {IPingRes=} [p] Properties to set
     */
    function PingRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PingRes currentTime.
     * @member {string} currentTime
     * @memberof PingRes
     * @instance
     */
    PingRes.prototype.currentTime = "";

    /**
     * Creates a new PingRes instance using the specified properties.
     * @function create
     * @memberof PingRes
     * @static
     * @param {IPingRes=} [properties] Properties to set
     * @returns {PingRes} PingRes instance
     */
    PingRes.create = function create(properties) {
        return new PingRes(properties);
    };

    /**
     * Encodes the specified PingRes message. Does not implicitly {@link PingRes.verify|verify} messages.
     * @function encode
     * @memberof PingRes
     * @static
     * @param {IPingRes} m PingRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PingRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.currentTime);
        return w;
    };

    /**
     * Decodes a PingRes message from the specified reader or buffer.
     * @function decode
     * @memberof PingRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PingRes} PingRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PingRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PingRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.currentTime = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("currentTime"))
            throw $util.ProtocolError("missing required 'currentTime'", { instance: m });
        return m;
    };

    return PingRes;
})();

$root.RequstMarkSixRecord = (function() {

    /**
     * Properties of a RequstMarkSixRecord.
     * @exports IRequstMarkSixRecord
     * @interface IRequstMarkSixRecord
     */

    /**
     * Constructs a new RequstMarkSixRecord.
     * @exports RequstMarkSixRecord
     * @classdesc Represents a RequstMarkSixRecord.
     * @implements IRequstMarkSixRecord
     * @constructor
     * @param {IRequstMarkSixRecord=} [p] Properties to set
     */
    function RequstMarkSixRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RequstMarkSixRecord instance using the specified properties.
     * @function create
     * @memberof RequstMarkSixRecord
     * @static
     * @param {IRequstMarkSixRecord=} [properties] Properties to set
     * @returns {RequstMarkSixRecord} RequstMarkSixRecord instance
     */
    RequstMarkSixRecord.create = function create(properties) {
        return new RequstMarkSixRecord(properties);
    };

    /**
     * Encodes the specified RequstMarkSixRecord message. Does not implicitly {@link RequstMarkSixRecord.verify|verify} messages.
     * @function encode
     * @memberof RequstMarkSixRecord
     * @static
     * @param {IRequstMarkSixRecord} m RequstMarkSixRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequstMarkSixRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RequstMarkSixRecord message from the specified reader or buffer.
     * @function decode
     * @memberof RequstMarkSixRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RequstMarkSixRecord} RequstMarkSixRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequstMarkSixRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RequstMarkSixRecord();
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

    return RequstMarkSixRecord;
})();

$root.ResponseMarkSixRecord = (function() {

    /**
     * Properties of a ResponseMarkSixRecord.
     * @exports IResponseMarkSixRecord
     * @interface IResponseMarkSixRecord
     * @property {Array.<ILotteryRecord>|null} [record] ResponseMarkSixRecord record
     */

    /**
     * Constructs a new ResponseMarkSixRecord.
     * @exports ResponseMarkSixRecord
     * @classdesc Represents a ResponseMarkSixRecord.
     * @implements IResponseMarkSixRecord
     * @constructor
     * @param {IResponseMarkSixRecord=} [p] Properties to set
     */
    function ResponseMarkSixRecord(p) {
        this.record = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ResponseMarkSixRecord record.
     * @member {Array.<ILotteryRecord>} record
     * @memberof ResponseMarkSixRecord
     * @instance
     */
    ResponseMarkSixRecord.prototype.record = $util.emptyArray;

    /**
     * Creates a new ResponseMarkSixRecord instance using the specified properties.
     * @function create
     * @memberof ResponseMarkSixRecord
     * @static
     * @param {IResponseMarkSixRecord=} [properties] Properties to set
     * @returns {ResponseMarkSixRecord} ResponseMarkSixRecord instance
     */
    ResponseMarkSixRecord.create = function create(properties) {
        return new ResponseMarkSixRecord(properties);
    };

    /**
     * Encodes the specified ResponseMarkSixRecord message. Does not implicitly {@link ResponseMarkSixRecord.verify|verify} messages.
     * @function encode
     * @memberof ResponseMarkSixRecord
     * @static
     * @param {IResponseMarkSixRecord} m ResponseMarkSixRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseMarkSixRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.record != null && m.record.length) {
            for (var i = 0; i < m.record.length; ++i)
                $root.LotteryRecord.encode(m.record[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a ResponseMarkSixRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseMarkSixRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ResponseMarkSixRecord} ResponseMarkSixRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseMarkSixRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ResponseMarkSixRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.record && m.record.length))
                    m.record = [];
                m.record.push($root.LotteryRecord.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ResponseMarkSixRecord;
})();

$root.RequestMarkSixBetRecord = (function() {

    /**
     * Properties of a RequestMarkSixBetRecord.
     * @exports IRequestMarkSixBetRecord
     * @interface IRequestMarkSixBetRecord
     * @property {string|null} [periodNo] RequestMarkSixBetRecord periodNo
     */

    /**
     * Constructs a new RequestMarkSixBetRecord.
     * @exports RequestMarkSixBetRecord
     * @classdesc Represents a RequestMarkSixBetRecord.
     * @implements IRequestMarkSixBetRecord
     * @constructor
     * @param {IRequestMarkSixBetRecord=} [p] Properties to set
     */
    function RequestMarkSixBetRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RequestMarkSixBetRecord periodNo.
     * @member {string} periodNo
     * @memberof RequestMarkSixBetRecord
     * @instance
     */
    RequestMarkSixBetRecord.prototype.periodNo = "";

    /**
     * Creates a new RequestMarkSixBetRecord instance using the specified properties.
     * @function create
     * @memberof RequestMarkSixBetRecord
     * @static
     * @param {IRequestMarkSixBetRecord=} [properties] Properties to set
     * @returns {RequestMarkSixBetRecord} RequestMarkSixBetRecord instance
     */
    RequestMarkSixBetRecord.create = function create(properties) {
        return new RequestMarkSixBetRecord(properties);
    };

    /**
     * Encodes the specified RequestMarkSixBetRecord message. Does not implicitly {@link RequestMarkSixBetRecord.verify|verify} messages.
     * @function encode
     * @memberof RequestMarkSixBetRecord
     * @static
     * @param {IRequestMarkSixBetRecord} m RequestMarkSixBetRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestMarkSixBetRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.periodNo != null && m.hasOwnProperty("periodNo"))
            w.uint32(10).string(m.periodNo);
        return w;
    };

    /**
     * Decodes a RequestMarkSixBetRecord message from the specified reader or buffer.
     * @function decode
     * @memberof RequestMarkSixBetRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RequestMarkSixBetRecord} RequestMarkSixBetRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestMarkSixBetRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RequestMarkSixBetRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.periodNo = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RequestMarkSixBetRecord;
})();

$root.UnSettlementBetRecord = (function() {

    /**
     * Properties of an UnSettlementBetRecord.
     * @exports IUnSettlementBetRecord
     * @interface IUnSettlementBetRecord
     * @property {string} periodNo UnSettlementBetRecord periodNo
     * @property {string} desc UnSettlementBetRecord desc
     * @property {string} odds UnSettlementBetRecord odds
     * @property {string} betMoney UnSettlementBetRecord betMoney
     * @property {string} wouldWinMoney UnSettlementBetRecord wouldWinMoney
     */

    /**
     * Constructs a new UnSettlementBetRecord.
     * @exports UnSettlementBetRecord
     * @classdesc Represents an UnSettlementBetRecord.
     * @implements IUnSettlementBetRecord
     * @constructor
     * @param {IUnSettlementBetRecord=} [p] Properties to set
     */
    function UnSettlementBetRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UnSettlementBetRecord periodNo.
     * @member {string} periodNo
     * @memberof UnSettlementBetRecord
     * @instance
     */
    UnSettlementBetRecord.prototype.periodNo = "";

    /**
     * UnSettlementBetRecord desc.
     * @member {string} desc
     * @memberof UnSettlementBetRecord
     * @instance
     */
    UnSettlementBetRecord.prototype.desc = "";

    /**
     * UnSettlementBetRecord odds.
     * @member {string} odds
     * @memberof UnSettlementBetRecord
     * @instance
     */
    UnSettlementBetRecord.prototype.odds = "";

    /**
     * UnSettlementBetRecord betMoney.
     * @member {string} betMoney
     * @memberof UnSettlementBetRecord
     * @instance
     */
    UnSettlementBetRecord.prototype.betMoney = "";

    /**
     * UnSettlementBetRecord wouldWinMoney.
     * @member {string} wouldWinMoney
     * @memberof UnSettlementBetRecord
     * @instance
     */
    UnSettlementBetRecord.prototype.wouldWinMoney = "";

    /**
     * Creates a new UnSettlementBetRecord instance using the specified properties.
     * @function create
     * @memberof UnSettlementBetRecord
     * @static
     * @param {IUnSettlementBetRecord=} [properties] Properties to set
     * @returns {UnSettlementBetRecord} UnSettlementBetRecord instance
     */
    UnSettlementBetRecord.create = function create(properties) {
        return new UnSettlementBetRecord(properties);
    };

    /**
     * Encodes the specified UnSettlementBetRecord message. Does not implicitly {@link UnSettlementBetRecord.verify|verify} messages.
     * @function encode
     * @memberof UnSettlementBetRecord
     * @static
     * @param {IUnSettlementBetRecord} m UnSettlementBetRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnSettlementBetRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.periodNo);
        w.uint32(18).string(m.desc);
        w.uint32(26).string(m.odds);
        w.uint32(34).string(m.betMoney);
        w.uint32(42).string(m.wouldWinMoney);
        return w;
    };

    /**
     * Decodes an UnSettlementBetRecord message from the specified reader or buffer.
     * @function decode
     * @memberof UnSettlementBetRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UnSettlementBetRecord} UnSettlementBetRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnSettlementBetRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UnSettlementBetRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.periodNo = r.string();
                break;
            case 2:
                m.desc = r.string();
                break;
            case 3:
                m.odds = r.string();
                break;
            case 4:
                m.betMoney = r.string();
                break;
            case 5:
                m.wouldWinMoney = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("periodNo"))
            throw $util.ProtocolError("missing required 'periodNo'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        if (!m.hasOwnProperty("odds"))
            throw $util.ProtocolError("missing required 'odds'", { instance: m });
        if (!m.hasOwnProperty("betMoney"))
            throw $util.ProtocolError("missing required 'betMoney'", { instance: m });
        if (!m.hasOwnProperty("wouldWinMoney"))
            throw $util.ProtocolError("missing required 'wouldWinMoney'", { instance: m });
        return m;
    };

    return UnSettlementBetRecord;
})();

$root.SettlementMarkSixRecord = (function() {

    /**
     * Properties of a SettlementMarkSixRecord.
     * @exports ISettlementMarkSixRecord
     * @interface ISettlementMarkSixRecord
     * @property {string} periodNo SettlementMarkSixRecord periodNo
     * @property {string} desc SettlementMarkSixRecord desc
     * @property {string} odds SettlementMarkSixRecord odds
     * @property {string} betMoney SettlementMarkSixRecord betMoney
     * @property {string} winResult SettlementMarkSixRecord winResult
     */

    /**
     * Constructs a new SettlementMarkSixRecord.
     * @exports SettlementMarkSixRecord
     * @classdesc Represents a SettlementMarkSixRecord.
     * @implements ISettlementMarkSixRecord
     * @constructor
     * @param {ISettlementMarkSixRecord=} [p] Properties to set
     */
    function SettlementMarkSixRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SettlementMarkSixRecord periodNo.
     * @member {string} periodNo
     * @memberof SettlementMarkSixRecord
     * @instance
     */
    SettlementMarkSixRecord.prototype.periodNo = "";

    /**
     * SettlementMarkSixRecord desc.
     * @member {string} desc
     * @memberof SettlementMarkSixRecord
     * @instance
     */
    SettlementMarkSixRecord.prototype.desc = "";

    /**
     * SettlementMarkSixRecord odds.
     * @member {string} odds
     * @memberof SettlementMarkSixRecord
     * @instance
     */
    SettlementMarkSixRecord.prototype.odds = "";

    /**
     * SettlementMarkSixRecord betMoney.
     * @member {string} betMoney
     * @memberof SettlementMarkSixRecord
     * @instance
     */
    SettlementMarkSixRecord.prototype.betMoney = "";

    /**
     * SettlementMarkSixRecord winResult.
     * @member {string} winResult
     * @memberof SettlementMarkSixRecord
     * @instance
     */
    SettlementMarkSixRecord.prototype.winResult = "";

    /**
     * Creates a new SettlementMarkSixRecord instance using the specified properties.
     * @function create
     * @memberof SettlementMarkSixRecord
     * @static
     * @param {ISettlementMarkSixRecord=} [properties] Properties to set
     * @returns {SettlementMarkSixRecord} SettlementMarkSixRecord instance
     */
    SettlementMarkSixRecord.create = function create(properties) {
        return new SettlementMarkSixRecord(properties);
    };

    /**
     * Encodes the specified SettlementMarkSixRecord message. Does not implicitly {@link SettlementMarkSixRecord.verify|verify} messages.
     * @function encode
     * @memberof SettlementMarkSixRecord
     * @static
     * @param {ISettlementMarkSixRecord} m SettlementMarkSixRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettlementMarkSixRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.periodNo);
        w.uint32(18).string(m.desc);
        w.uint32(26).string(m.odds);
        w.uint32(34).string(m.betMoney);
        w.uint32(42).string(m.winResult);
        return w;
    };

    /**
     * Decodes a SettlementMarkSixRecord message from the specified reader or buffer.
     * @function decode
     * @memberof SettlementMarkSixRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SettlementMarkSixRecord} SettlementMarkSixRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettlementMarkSixRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SettlementMarkSixRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.periodNo = r.string();
                break;
            case 2:
                m.desc = r.string();
                break;
            case 3:
                m.odds = r.string();
                break;
            case 4:
                m.betMoney = r.string();
                break;
            case 5:
                m.winResult = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("periodNo"))
            throw $util.ProtocolError("missing required 'periodNo'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        if (!m.hasOwnProperty("odds"))
            throw $util.ProtocolError("missing required 'odds'", { instance: m });
        if (!m.hasOwnProperty("betMoney"))
            throw $util.ProtocolError("missing required 'betMoney'", { instance: m });
        if (!m.hasOwnProperty("winResult"))
            throw $util.ProtocolError("missing required 'winResult'", { instance: m });
        return m;
    };

    return SettlementMarkSixRecord;
})();

$root.ResponseMarkSixBetRecord = (function() {

    /**
     * Properties of a ResponseMarkSixBetRecord.
     * @exports IResponseMarkSixBetRecord
     * @interface IResponseMarkSixBetRecord
     * @property {boolean} isSuccess ResponseMarkSixBetRecord isSuccess
     * @property {string|null} [tips] ResponseMarkSixBetRecord tips
     * @property {Array.<IUnSettlementBetRecord>|null} [unsettlement] ResponseMarkSixBetRecord unsettlement
     * @property {Array.<ISettlementMarkSixRecord>|null} [settlement] ResponseMarkSixBetRecord settlement
     * @property {Array.<string>|null} [periodNo] ResponseMarkSixBetRecord periodNo
     */

    /**
     * Constructs a new ResponseMarkSixBetRecord.
     * @exports ResponseMarkSixBetRecord
     * @classdesc Represents a ResponseMarkSixBetRecord.
     * @implements IResponseMarkSixBetRecord
     * @constructor
     * @param {IResponseMarkSixBetRecord=} [p] Properties to set
     */
    function ResponseMarkSixBetRecord(p) {
        this.unsettlement = [];
        this.settlement = [];
        this.periodNo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ResponseMarkSixBetRecord isSuccess.
     * @member {boolean} isSuccess
     * @memberof ResponseMarkSixBetRecord
     * @instance
     */
    ResponseMarkSixBetRecord.prototype.isSuccess = false;

    /**
     * ResponseMarkSixBetRecord tips.
     * @member {string} tips
     * @memberof ResponseMarkSixBetRecord
     * @instance
     */
    ResponseMarkSixBetRecord.prototype.tips = "";

    /**
     * ResponseMarkSixBetRecord unsettlement.
     * @member {Array.<IUnSettlementBetRecord>} unsettlement
     * @memberof ResponseMarkSixBetRecord
     * @instance
     */
    ResponseMarkSixBetRecord.prototype.unsettlement = $util.emptyArray;

    /**
     * ResponseMarkSixBetRecord settlement.
     * @member {Array.<ISettlementMarkSixRecord>} settlement
     * @memberof ResponseMarkSixBetRecord
     * @instance
     */
    ResponseMarkSixBetRecord.prototype.settlement = $util.emptyArray;

    /**
     * ResponseMarkSixBetRecord periodNo.
     * @member {Array.<string>} periodNo
     * @memberof ResponseMarkSixBetRecord
     * @instance
     */
    ResponseMarkSixBetRecord.prototype.periodNo = $util.emptyArray;

    /**
     * Creates a new ResponseMarkSixBetRecord instance using the specified properties.
     * @function create
     * @memberof ResponseMarkSixBetRecord
     * @static
     * @param {IResponseMarkSixBetRecord=} [properties] Properties to set
     * @returns {ResponseMarkSixBetRecord} ResponseMarkSixBetRecord instance
     */
    ResponseMarkSixBetRecord.create = function create(properties) {
        return new ResponseMarkSixBetRecord(properties);
    };

    /**
     * Encodes the specified ResponseMarkSixBetRecord message. Does not implicitly {@link ResponseMarkSixBetRecord.verify|verify} messages.
     * @function encode
     * @memberof ResponseMarkSixBetRecord
     * @static
     * @param {IResponseMarkSixBetRecord} m ResponseMarkSixBetRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseMarkSixBetRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.unsettlement != null && m.unsettlement.length) {
            for (var i = 0; i < m.unsettlement.length; ++i)
                $root.UnSettlementBetRecord.encode(m.unsettlement[i], w.uint32(26).fork()).ldelim();
        }
        if (m.settlement != null && m.settlement.length) {
            for (var i = 0; i < m.settlement.length; ++i)
                $root.SettlementMarkSixRecord.encode(m.settlement[i], w.uint32(34).fork()).ldelim();
        }
        if (m.periodNo != null && m.periodNo.length) {
            for (var i = 0; i < m.periodNo.length; ++i)
                w.uint32(42).string(m.periodNo[i]);
        }
        return w;
    };

    /**
     * Decodes a ResponseMarkSixBetRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseMarkSixBetRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ResponseMarkSixBetRecord} ResponseMarkSixBetRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseMarkSixBetRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ResponseMarkSixBetRecord();
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
                if (!(m.unsettlement && m.unsettlement.length))
                    m.unsettlement = [];
                m.unsettlement.push($root.UnSettlementBetRecord.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.settlement && m.settlement.length))
                    m.settlement = [];
                m.settlement.push($root.SettlementMarkSixRecord.decode(r, r.uint32()));
                break;
            case 5:
                if (!(m.periodNo && m.periodNo.length))
                    m.periodNo = [];
                m.periodNo.push(r.string());
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

    return ResponseMarkSixBetRecord;
})();

$root.PushOpenStatus = (function() {

    /**
     * Properties of a PushOpenStatus.
     * @exports IPushOpenStatus
     * @interface IPushOpenStatus
     * @property {number} status PushOpenStatus status
     * @property {string|null} [stopBetTime] PushOpenStatus stopBetTime
     * @property {string|null} [lotteryTime] PushOpenStatus lotteryTime
     * @property {ILotteryRecord|null} [record] PushOpenStatus record
     * @property {string|null} [nextPreiodNo] PushOpenStatus nextPreiodNo
     */

    /**
     * Constructs a new PushOpenStatus.
     * @exports PushOpenStatus
     * @classdesc Represents a PushOpenStatus.
     * @implements IPushOpenStatus
     * @constructor
     * @param {IPushOpenStatus=} [p] Properties to set
     */
    function PushOpenStatus(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushOpenStatus status.
     * @member {number} status
     * @memberof PushOpenStatus
     * @instance
     */
    PushOpenStatus.prototype.status = 0;

    /**
     * PushOpenStatus stopBetTime.
     * @member {string} stopBetTime
     * @memberof PushOpenStatus
     * @instance
     */
    PushOpenStatus.prototype.stopBetTime = "";

    /**
     * PushOpenStatus lotteryTime.
     * @member {string} lotteryTime
     * @memberof PushOpenStatus
     * @instance
     */
    PushOpenStatus.prototype.lotteryTime = "";

    /**
     * PushOpenStatus record.
     * @member {ILotteryRecord|null|undefined} record
     * @memberof PushOpenStatus
     * @instance
     */
    PushOpenStatus.prototype.record = null;

    /**
     * PushOpenStatus nextPreiodNo.
     * @member {string} nextPreiodNo
     * @memberof PushOpenStatus
     * @instance
     */
    PushOpenStatus.prototype.nextPreiodNo = "";

    /**
     * Creates a new PushOpenStatus instance using the specified properties.
     * @function create
     * @memberof PushOpenStatus
     * @static
     * @param {IPushOpenStatus=} [properties] Properties to set
     * @returns {PushOpenStatus} PushOpenStatus instance
     */
    PushOpenStatus.create = function create(properties) {
        return new PushOpenStatus(properties);
    };

    /**
     * Encodes the specified PushOpenStatus message. Does not implicitly {@link PushOpenStatus.verify|verify} messages.
     * @function encode
     * @memberof PushOpenStatus
     * @static
     * @param {IPushOpenStatus} m PushOpenStatus message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushOpenStatus.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.status);
        if (m.stopBetTime != null && m.hasOwnProperty("stopBetTime"))
            w.uint32(18).string(m.stopBetTime);
        if (m.lotteryTime != null && m.hasOwnProperty("lotteryTime"))
            w.uint32(26).string(m.lotteryTime);
        if (m.record != null && m.hasOwnProperty("record"))
            $root.LotteryRecord.encode(m.record, w.uint32(34).fork()).ldelim();
        if (m.nextPreiodNo != null && m.hasOwnProperty("nextPreiodNo"))
            w.uint32(42).string(m.nextPreiodNo);
        return w;
    };

    /**
     * Decodes a PushOpenStatus message from the specified reader or buffer.
     * @function decode
     * @memberof PushOpenStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushOpenStatus} PushOpenStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushOpenStatus.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushOpenStatus();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.status = r.int32();
                break;
            case 2:
                m.stopBetTime = r.string();
                break;
            case 3:
                m.lotteryTime = r.string();
                break;
            case 4:
                m.record = $root.LotteryRecord.decode(r, r.uint32());
                break;
            case 5:
                m.nextPreiodNo = r.string();
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

    return PushOpenStatus;
})();

$root.PushOddsRefreshTime = (function() {

    /**
     * Properties of a PushOddsRefreshTime.
     * @exports IPushOddsRefreshTime
     * @interface IPushOddsRefreshTime
     * @property {string} refreshTime PushOddsRefreshTime refreshTime
     */

    /**
     * Constructs a new PushOddsRefreshTime.
     * @exports PushOddsRefreshTime
     * @classdesc Represents a PushOddsRefreshTime.
     * @implements IPushOddsRefreshTime
     * @constructor
     * @param {IPushOddsRefreshTime=} [p] Properties to set
     */
    function PushOddsRefreshTime(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushOddsRefreshTime refreshTime.
     * @member {string} refreshTime
     * @memberof PushOddsRefreshTime
     * @instance
     */
    PushOddsRefreshTime.prototype.refreshTime = "";

    /**
     * Creates a new PushOddsRefreshTime instance using the specified properties.
     * @function create
     * @memberof PushOddsRefreshTime
     * @static
     * @param {IPushOddsRefreshTime=} [properties] Properties to set
     * @returns {PushOddsRefreshTime} PushOddsRefreshTime instance
     */
    PushOddsRefreshTime.create = function create(properties) {
        return new PushOddsRefreshTime(properties);
    };

    /**
     * Encodes the specified PushOddsRefreshTime message. Does not implicitly {@link PushOddsRefreshTime.verify|verify} messages.
     * @function encode
     * @memberof PushOddsRefreshTime
     * @static
     * @param {IPushOddsRefreshTime} m PushOddsRefreshTime message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushOddsRefreshTime.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.refreshTime);
        return w;
    };

    /**
     * Decodes a PushOddsRefreshTime message from the specified reader or buffer.
     * @function decode
     * @memberof PushOddsRefreshTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushOddsRefreshTime} PushOddsRefreshTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushOddsRefreshTime.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushOddsRefreshTime();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.refreshTime = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("refreshTime"))
            throw $util.ProtocolError("missing required 'refreshTime'", { instance: m });
        return m;
    };

    return PushOddsRefreshTime;
})();

$root.RequestLeaveMarkSix = (function() {

    /**
     * Properties of a RequestLeaveMarkSix.
     * @exports IRequestLeaveMarkSix
     * @interface IRequestLeaveMarkSix
     */

    /**
     * Constructs a new RequestLeaveMarkSix.
     * @exports RequestLeaveMarkSix
     * @classdesc Represents a RequestLeaveMarkSix.
     * @implements IRequestLeaveMarkSix
     * @constructor
     * @param {IRequestLeaveMarkSix=} [p] Properties to set
     */
    function RequestLeaveMarkSix(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RequestLeaveMarkSix instance using the specified properties.
     * @function create
     * @memberof RequestLeaveMarkSix
     * @static
     * @param {IRequestLeaveMarkSix=} [properties] Properties to set
     * @returns {RequestLeaveMarkSix} RequestLeaveMarkSix instance
     */
    RequestLeaveMarkSix.create = function create(properties) {
        return new RequestLeaveMarkSix(properties);
    };

    /**
     * Encodes the specified RequestLeaveMarkSix message. Does not implicitly {@link RequestLeaveMarkSix.verify|verify} messages.
     * @function encode
     * @memberof RequestLeaveMarkSix
     * @static
     * @param {IRequestLeaveMarkSix} m RequestLeaveMarkSix message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestLeaveMarkSix.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RequestLeaveMarkSix message from the specified reader or buffer.
     * @function decode
     * @memberof RequestLeaveMarkSix
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RequestLeaveMarkSix} RequestLeaveMarkSix
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestLeaveMarkSix.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RequestLeaveMarkSix();
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

    return RequestLeaveMarkSix;
})();

$root.BetInfo = (function() {

    /**
     * Properties of a BetInfo.
     * @exports IBetInfo
     * @interface IBetInfo
     * @property {Array.<number>|null} [num] BetInfo num
     * @property {number|null} [betIndex] BetInfo betIndex
     * @property {number} odds BetInfo odds
     * @property {number|null} [subType] BetInfo subType
     */

    /**
     * Constructs a new BetInfo.
     * @exports BetInfo
     * @classdesc Represents a BetInfo.
     * @implements IBetInfo
     * @constructor
     * @param {IBetInfo=} [p] Properties to set
     */
    function BetInfo(p) {
        this.num = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetInfo num.
     * @member {Array.<number>} num
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.num = $util.emptyArray;

    /**
     * BetInfo betIndex.
     * @member {number} betIndex
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.betIndex = 0;

    /**
     * BetInfo odds.
     * @member {number} odds
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.odds = 0;

    /**
     * BetInfo subType.
     * @member {number} subType
     * @memberof BetInfo
     * @instance
     */
    BetInfo.prototype.subType = 0;

    /**
     * Creates a new BetInfo instance using the specified properties.
     * @function create
     * @memberof BetInfo
     * @static
     * @param {IBetInfo=} [properties] Properties to set
     * @returns {BetInfo} BetInfo instance
     */
    BetInfo.create = function create(properties) {
        return new BetInfo(properties);
    };

    /**
     * Encodes the specified BetInfo message. Does not implicitly {@link BetInfo.verify|verify} messages.
     * @function encode
     * @memberof BetInfo
     * @static
     * @param {IBetInfo} m BetInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.num != null && m.num.length) {
            for (var i = 0; i < m.num.length; ++i)
                w.uint32(8).int32(m.num[i]);
        }
        if (m.betIndex != null && m.hasOwnProperty("betIndex"))
            w.uint32(16).int32(m.betIndex);
        w.uint32(25).double(m.odds);
        if (m.subType != null && m.hasOwnProperty("subType"))
            w.uint32(32).int32(m.subType);
        return w;
    };

    /**
     * Decodes a BetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetInfo} BetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.num && m.num.length))
                    m.num = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.num.push(r.int32());
                } else
                    m.num.push(r.int32());
                break;
            case 2:
                m.betIndex = r.int32();
                break;
            case 3:
                m.odds = r.double();
                break;
            case 4:
                m.subType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("odds"))
            throw $util.ProtocolError("missing required 'odds'", { instance: m });
        return m;
    };

    return BetInfo;
})();

$root.RequestBet = (function() {

    /**
     * Properties of a RequestBet.
     * @exports IRequestBet
     * @interface IRequestBet
     * @property {MarkSixType} markSixType RequestBet markSixType
     * @property {number} betMoney RequestBet betMoney
     * @property {Array.<IBetInfo>|null} [betInfo] RequestBet betInfo
     */

    /**
     * Constructs a new RequestBet.
     * @exports RequestBet
     * @classdesc Represents a RequestBet.
     * @implements IRequestBet
     * @constructor
     * @param {IRequestBet=} [p] Properties to set
     */
    function RequestBet(p) {
        this.betInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RequestBet markSixType.
     * @member {MarkSixType} markSixType
     * @memberof RequestBet
     * @instance
     */
    RequestBet.prototype.markSixType = 1;

    /**
     * RequestBet betMoney.
     * @member {number} betMoney
     * @memberof RequestBet
     * @instance
     */
    RequestBet.prototype.betMoney = 0;

    /**
     * RequestBet betInfo.
     * @member {Array.<IBetInfo>} betInfo
     * @memberof RequestBet
     * @instance
     */
    RequestBet.prototype.betInfo = $util.emptyArray;

    /**
     * Creates a new RequestBet instance using the specified properties.
     * @function create
     * @memberof RequestBet
     * @static
     * @param {IRequestBet=} [properties] Properties to set
     * @returns {RequestBet} RequestBet instance
     */
    RequestBet.create = function create(properties) {
        return new RequestBet(properties);
    };

    /**
     * Encodes the specified RequestBet message. Does not implicitly {@link RequestBet.verify|verify} messages.
     * @function encode
     * @memberof RequestBet
     * @static
     * @param {IRequestBet} m RequestBet message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestBet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.markSixType);
        w.uint32(16).int32(m.betMoney);
        if (m.betInfo != null && m.betInfo.length) {
            for (var i = 0; i < m.betInfo.length; ++i)
                $root.BetInfo.encode(m.betInfo[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RequestBet message from the specified reader or buffer.
     * @function decode
     * @memberof RequestBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RequestBet} RequestBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestBet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RequestBet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.markSixType = r.int32();
                break;
            case 2:
                m.betMoney = r.int32();
                break;
            case 3:
                if (!(m.betInfo && m.betInfo.length))
                    m.betInfo = [];
                m.betInfo.push($root.BetInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("markSixType"))
            throw $util.ProtocolError("missing required 'markSixType'", { instance: m });
        if (!m.hasOwnProperty("betMoney"))
            throw $util.ProtocolError("missing required 'betMoney'", { instance: m });
        return m;
    };

    return RequestBet;
})();

$root.ResponseBet = (function() {

    /**
     * Properties of a ResponseBet.
     * @exports IResponseBet
     * @interface IResponseBet
     * @property {boolean} isSuccess ResponseBet isSuccess
     * @property {string|null} [msg] ResponseBet msg
     * @property {number|null} [failType] ResponseBet failType
     */

    /**
     * Constructs a new ResponseBet.
     * @exports ResponseBet
     * @classdesc Represents a ResponseBet.
     * @implements IResponseBet
     * @constructor
     * @param {IResponseBet=} [p] Properties to set
     */
    function ResponseBet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ResponseBet isSuccess.
     * @member {boolean} isSuccess
     * @memberof ResponseBet
     * @instance
     */
    ResponseBet.prototype.isSuccess = false;

    /**
     * ResponseBet msg.
     * @member {string} msg
     * @memberof ResponseBet
     * @instance
     */
    ResponseBet.prototype.msg = "";

    /**
     * ResponseBet failType.
     * @member {number} failType
     * @memberof ResponseBet
     * @instance
     */
    ResponseBet.prototype.failType = 0;

    /**
     * Creates a new ResponseBet instance using the specified properties.
     * @function create
     * @memberof ResponseBet
     * @static
     * @param {IResponseBet=} [properties] Properties to set
     * @returns {ResponseBet} ResponseBet instance
     */
    ResponseBet.create = function create(properties) {
        return new ResponseBet(properties);
    };

    /**
     * Encodes the specified ResponseBet message. Does not implicitly {@link ResponseBet.verify|verify} messages.
     * @function encode
     * @memberof ResponseBet
     * @static
     * @param {IResponseBet} m ResponseBet message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseBet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.msg != null && m.hasOwnProperty("msg"))
            w.uint32(18).string(m.msg);
        if (m.failType != null && m.hasOwnProperty("failType"))
            w.uint32(24).int32(m.failType);
        return w;
    };

    /**
     * Decodes a ResponseBet message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ResponseBet} ResponseBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseBet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ResponseBet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.msg = r.string();
                break;
            case 3:
                m.failType = r.int32();
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

    return ResponseBet;
})();

module.exports = $root;

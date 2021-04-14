/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Vip || ($protobuf.roots.Vip = {});

$root.VipInfoListPush = (function() {

    /**
     * Properties of a VipInfoListPush.
     * @exports IVipInfoListPush
     * @interface IVipInfoListPush
     * @property {number} vipLevel VipInfoListPush vipLevel
     * @property {number|Long} vipExp VipInfoListPush vipExp
     * @property {number|Long} nextLevelExp VipInfoListPush nextLevelExp
     * @property {number|Long} interalValue VipInfoListPush interalValue
     * @property {number|Long} alreadyGetRebateCount VipInfoListPush alreadyGetRebateCount
     * @property {number|Long} currentRebateProportion VipInfoListPush currentRebateProportion
     * @property {number|Long} nextLevelRebateProportion VipInfoListPush nextLevelRebateProportion
     */

    /**
     * Constructs a new VipInfoListPush.
     * @exports VipInfoListPush
     * @classdesc Represents a VipInfoListPush.
     * @implements IVipInfoListPush
     * @constructor
     * @param {IVipInfoListPush=} [p] Properties to set
     */
    function VipInfoListPush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * VipInfoListPush vipLevel.
     * @member {number} vipLevel
     * @memberof VipInfoListPush
     * @instance
     */
    VipInfoListPush.prototype.vipLevel = 0;

    /**
     * VipInfoListPush vipExp.
     * @member {number|Long} vipExp
     * @memberof VipInfoListPush
     * @instance
     */
    VipInfoListPush.prototype.vipExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * VipInfoListPush nextLevelExp.
     * @member {number|Long} nextLevelExp
     * @memberof VipInfoListPush
     * @instance
     */
    VipInfoListPush.prototype.nextLevelExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * VipInfoListPush interalValue.
     * @member {number|Long} interalValue
     * @memberof VipInfoListPush
     * @instance
     */
    VipInfoListPush.prototype.interalValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * VipInfoListPush alreadyGetRebateCount.
     * @member {number|Long} alreadyGetRebateCount
     * @memberof VipInfoListPush
     * @instance
     */
    VipInfoListPush.prototype.alreadyGetRebateCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * VipInfoListPush currentRebateProportion.
     * @member {number|Long} currentRebateProportion
     * @memberof VipInfoListPush
     * @instance
     */
    VipInfoListPush.prototype.currentRebateProportion = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * VipInfoListPush nextLevelRebateProportion.
     * @member {number|Long} nextLevelRebateProportion
     * @memberof VipInfoListPush
     * @instance
     */
    VipInfoListPush.prototype.nextLevelRebateProportion = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new VipInfoListPush instance using the specified properties.
     * @function create
     * @memberof VipInfoListPush
     * @static
     * @param {IVipInfoListPush=} [properties] Properties to set
     * @returns {VipInfoListPush} VipInfoListPush instance
     */
    VipInfoListPush.create = function create(properties) {
        return new VipInfoListPush(properties);
    };

    /**
     * Encodes the specified VipInfoListPush message. Does not implicitly {@link VipInfoListPush.verify|verify} messages.
     * @function encode
     * @memberof VipInfoListPush
     * @static
     * @param {IVipInfoListPush} m VipInfoListPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VipInfoListPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.vipLevel);
        w.uint32(16).int64(m.vipExp);
        w.uint32(24).int64(m.nextLevelExp);
        w.uint32(32).int64(m.interalValue);
        w.uint32(40).int64(m.alreadyGetRebateCount);
        w.uint32(48).int64(m.currentRebateProportion);
        w.uint32(56).int64(m.nextLevelRebateProportion);
        return w;
    };

    /**
     * Decodes a VipInfoListPush message from the specified reader or buffer.
     * @function decode
     * @memberof VipInfoListPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {VipInfoListPush} VipInfoListPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VipInfoListPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.VipInfoListPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.vipLevel = r.int32();
                break;
            case 2:
                m.vipExp = r.int64();
                break;
            case 3:
                m.nextLevelExp = r.int64();
                break;
            case 4:
                m.interalValue = r.int64();
                break;
            case 5:
                m.alreadyGetRebateCount = r.int64();
                break;
            case 6:
                m.currentRebateProportion = r.int64();
                break;
            case 7:
                m.nextLevelRebateProportion = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("vipLevel"))
            throw $util.ProtocolError("missing required 'vipLevel'", { instance: m });
        if (!m.hasOwnProperty("vipExp"))
            throw $util.ProtocolError("missing required 'vipExp'", { instance: m });
        if (!m.hasOwnProperty("nextLevelExp"))
            throw $util.ProtocolError("missing required 'nextLevelExp'", { instance: m });
        if (!m.hasOwnProperty("interalValue"))
            throw $util.ProtocolError("missing required 'interalValue'", { instance: m });
        if (!m.hasOwnProperty("alreadyGetRebateCount"))
            throw $util.ProtocolError("missing required 'alreadyGetRebateCount'", { instance: m });
        if (!m.hasOwnProperty("currentRebateProportion"))
            throw $util.ProtocolError("missing required 'currentRebateProportion'", { instance: m });
        if (!m.hasOwnProperty("nextLevelRebateProportion"))
            throw $util.ProtocolError("missing required 'nextLevelRebateProportion'", { instance: m });
        return m;
    };

    return VipInfoListPush;
})();

$root.IntegralDetail = (function() {

    /**
     * Properties of an IntegralDetail.
     * @exports IIntegralDetail
     * @interface IIntegralDetail
     * @property {number|Long} evenTime IntegralDetail evenTime
     * @property {number} eventType IntegralDetail eventType
     * @property {number} eventIntegralChangeCount IntegralDetail eventIntegralChangeCount
     */

    /**
     * Constructs a new IntegralDetail.
     * @exports IntegralDetail
     * @classdesc Represents an IntegralDetail.
     * @implements IIntegralDetail
     * @constructor
     * @param {IIntegralDetail=} [p] Properties to set
     */
    function IntegralDetail(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * IntegralDetail evenTime.
     * @member {number|Long} evenTime
     * @memberof IntegralDetail
     * @instance
     */
    IntegralDetail.prototype.evenTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * IntegralDetail eventType.
     * @member {number} eventType
     * @memberof IntegralDetail
     * @instance
     */
    IntegralDetail.prototype.eventType = 0;

    /**
     * IntegralDetail eventIntegralChangeCount.
     * @member {number} eventIntegralChangeCount
     * @memberof IntegralDetail
     * @instance
     */
    IntegralDetail.prototype.eventIntegralChangeCount = 0;

    /**
     * Creates a new IntegralDetail instance using the specified properties.
     * @function create
     * @memberof IntegralDetail
     * @static
     * @param {IIntegralDetail=} [properties] Properties to set
     * @returns {IntegralDetail} IntegralDetail instance
     */
    IntegralDetail.create = function create(properties) {
        return new IntegralDetail(properties);
    };

    /**
     * Encodes the specified IntegralDetail message. Does not implicitly {@link IntegralDetail.verify|verify} messages.
     * @function encode
     * @memberof IntegralDetail
     * @static
     * @param {IIntegralDetail} m IntegralDetail message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IntegralDetail.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.evenTime);
        w.uint32(16).int32(m.eventType);
        w.uint32(24).int32(m.eventIntegralChangeCount);
        return w;
    };

    /**
     * Decodes an IntegralDetail message from the specified reader or buffer.
     * @function decode
     * @memberof IntegralDetail
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IntegralDetail} IntegralDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IntegralDetail.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IntegralDetail();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.evenTime = r.int64();
                break;
            case 2:
                m.eventType = r.int32();
                break;
            case 3:
                m.eventIntegralChangeCount = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("evenTime"))
            throw $util.ProtocolError("missing required 'evenTime'", { instance: m });
        if (!m.hasOwnProperty("eventType"))
            throw $util.ProtocolError("missing required 'eventType'", { instance: m });
        if (!m.hasOwnProperty("eventIntegralChangeCount"))
            throw $util.ProtocolError("missing required 'eventIntegralChangeCount'", { instance: m });
        return m;
    };

    return IntegralDetail;
})();

$root.IntegralDetailPush = (function() {

    /**
     * Properties of an IntegralDetailPush.
     * @exports IIntegralDetailPush
     * @interface IIntegralDetailPush
     * @property {Array.<IIntegralDetail>|null} [detailList] IntegralDetailPush detailList
     */

    /**
     * Constructs a new IntegralDetailPush.
     * @exports IntegralDetailPush
     * @classdesc Represents an IntegralDetailPush.
     * @implements IIntegralDetailPush
     * @constructor
     * @param {IIntegralDetailPush=} [p] Properties to set
     */
    function IntegralDetailPush(p) {
        this.detailList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * IntegralDetailPush detailList.
     * @member {Array.<IIntegralDetail>} detailList
     * @memberof IntegralDetailPush
     * @instance
     */
    IntegralDetailPush.prototype.detailList = $util.emptyArray;

    /**
     * Creates a new IntegralDetailPush instance using the specified properties.
     * @function create
     * @memberof IntegralDetailPush
     * @static
     * @param {IIntegralDetailPush=} [properties] Properties to set
     * @returns {IntegralDetailPush} IntegralDetailPush instance
     */
    IntegralDetailPush.create = function create(properties) {
        return new IntegralDetailPush(properties);
    };

    /**
     * Encodes the specified IntegralDetailPush message. Does not implicitly {@link IntegralDetailPush.verify|verify} messages.
     * @function encode
     * @memberof IntegralDetailPush
     * @static
     * @param {IIntegralDetailPush} m IntegralDetailPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IntegralDetailPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.detailList != null && m.detailList.length) {
            for (var i = 0; i < m.detailList.length; ++i)
                $root.IntegralDetail.encode(m.detailList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an IntegralDetailPush message from the specified reader or buffer.
     * @function decode
     * @memberof IntegralDetailPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IntegralDetailPush} IntegralDetailPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IntegralDetailPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IntegralDetailPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.detailList && m.detailList.length))
                    m.detailList = [];
                m.detailList.push($root.IntegralDetail.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return IntegralDetailPush;
})();

$root.ExchangeIntegralRecord = (function() {

    /**
     * Properties of an ExchangeIntegralRecord.
     * @exports IExchangeIntegralRecord
     * @interface IExchangeIntegralRecord
     * @property {number|Long} evenTime ExchangeIntegralRecord evenTime
     * @property {number} gold ExchangeIntegralRecord gold
     */

    /**
     * Constructs a new ExchangeIntegralRecord.
     * @exports ExchangeIntegralRecord
     * @classdesc Represents an ExchangeIntegralRecord.
     * @implements IExchangeIntegralRecord
     * @constructor
     * @param {IExchangeIntegralRecord=} [p] Properties to set
     */
    function ExchangeIntegralRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExchangeIntegralRecord evenTime.
     * @member {number|Long} evenTime
     * @memberof ExchangeIntegralRecord
     * @instance
     */
    ExchangeIntegralRecord.prototype.evenTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ExchangeIntegralRecord gold.
     * @member {number} gold
     * @memberof ExchangeIntegralRecord
     * @instance
     */
    ExchangeIntegralRecord.prototype.gold = 0;

    /**
     * Creates a new ExchangeIntegralRecord instance using the specified properties.
     * @function create
     * @memberof ExchangeIntegralRecord
     * @static
     * @param {IExchangeIntegralRecord=} [properties] Properties to set
     * @returns {ExchangeIntegralRecord} ExchangeIntegralRecord instance
     */
    ExchangeIntegralRecord.create = function create(properties) {
        return new ExchangeIntegralRecord(properties);
    };

    /**
     * Encodes the specified ExchangeIntegralRecord message. Does not implicitly {@link ExchangeIntegralRecord.verify|verify} messages.
     * @function encode
     * @memberof ExchangeIntegralRecord
     * @static
     * @param {IExchangeIntegralRecord} m ExchangeIntegralRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeIntegralRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.evenTime);
        w.uint32(16).int32(m.gold);
        return w;
    };

    /**
     * Decodes an ExchangeIntegralRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeIntegralRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExchangeIntegralRecord} ExchangeIntegralRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeIntegralRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExchangeIntegralRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.evenTime = r.int64();
                break;
            case 2:
                m.gold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("evenTime"))
            throw $util.ProtocolError("missing required 'evenTime'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return ExchangeIntegralRecord;
})();

$root.ExchangeIntegralRecordPush = (function() {

    /**
     * Properties of an ExchangeIntegralRecordPush.
     * @exports IExchangeIntegralRecordPush
     * @interface IExchangeIntegralRecordPush
     * @property {Array.<IExchangeIntegralRecord>|null} [detailList] ExchangeIntegralRecordPush detailList
     */

    /**
     * Constructs a new ExchangeIntegralRecordPush.
     * @exports ExchangeIntegralRecordPush
     * @classdesc Represents an ExchangeIntegralRecordPush.
     * @implements IExchangeIntegralRecordPush
     * @constructor
     * @param {IExchangeIntegralRecordPush=} [p] Properties to set
     */
    function ExchangeIntegralRecordPush(p) {
        this.detailList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExchangeIntegralRecordPush detailList.
     * @member {Array.<IExchangeIntegralRecord>} detailList
     * @memberof ExchangeIntegralRecordPush
     * @instance
     */
    ExchangeIntegralRecordPush.prototype.detailList = $util.emptyArray;

    /**
     * Creates a new ExchangeIntegralRecordPush instance using the specified properties.
     * @function create
     * @memberof ExchangeIntegralRecordPush
     * @static
     * @param {IExchangeIntegralRecordPush=} [properties] Properties to set
     * @returns {ExchangeIntegralRecordPush} ExchangeIntegralRecordPush instance
     */
    ExchangeIntegralRecordPush.create = function create(properties) {
        return new ExchangeIntegralRecordPush(properties);
    };

    /**
     * Encodes the specified ExchangeIntegralRecordPush message. Does not implicitly {@link ExchangeIntegralRecordPush.verify|verify} messages.
     * @function encode
     * @memberof ExchangeIntegralRecordPush
     * @static
     * @param {IExchangeIntegralRecordPush} m ExchangeIntegralRecordPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeIntegralRecordPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.detailList != null && m.detailList.length) {
            for (var i = 0; i < m.detailList.length; ++i)
                $root.ExchangeIntegralRecord.encode(m.detailList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an ExchangeIntegralRecordPush message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeIntegralRecordPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExchangeIntegralRecordPush} ExchangeIntegralRecordPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeIntegralRecordPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExchangeIntegralRecordPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.detailList && m.detailList.length))
                    m.detailList = [];
                m.detailList.push($root.ExchangeIntegralRecord.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ExchangeIntegralRecordPush;
})();

$root.ExchangeIntegralGoldResult = (function() {

    /**
     * Properties of an ExchangeIntegralGoldResult.
     * @exports IExchangeIntegralGoldResult
     * @interface IExchangeIntegralGoldResult
     * @property {boolean} isSuc ExchangeIntegralGoldResult isSuc
     * @property {string} tips ExchangeIntegralGoldResult tips
     * @property {IExchangeIntegralRecord|null} [record] ExchangeIntegralGoldResult record
     * @property {number|Long|null} [interalValue] ExchangeIntegralGoldResult interalValue
     * @property {number|Long|null} [alreadyGetRebateCount] ExchangeIntegralGoldResult alreadyGetRebateCount
     */

    /**
     * Constructs a new ExchangeIntegralGoldResult.
     * @exports ExchangeIntegralGoldResult
     * @classdesc Represents an ExchangeIntegralGoldResult.
     * @implements IExchangeIntegralGoldResult
     * @constructor
     * @param {IExchangeIntegralGoldResult=} [p] Properties to set
     */
    function ExchangeIntegralGoldResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExchangeIntegralGoldResult isSuc.
     * @member {boolean} isSuc
     * @memberof ExchangeIntegralGoldResult
     * @instance
     */
    ExchangeIntegralGoldResult.prototype.isSuc = false;

    /**
     * ExchangeIntegralGoldResult tips.
     * @member {string} tips
     * @memberof ExchangeIntegralGoldResult
     * @instance
     */
    ExchangeIntegralGoldResult.prototype.tips = "";

    /**
     * ExchangeIntegralGoldResult record.
     * @member {IExchangeIntegralRecord|null|undefined} record
     * @memberof ExchangeIntegralGoldResult
     * @instance
     */
    ExchangeIntegralGoldResult.prototype.record = null;

    /**
     * ExchangeIntegralGoldResult interalValue.
     * @member {number|Long} interalValue
     * @memberof ExchangeIntegralGoldResult
     * @instance
     */
    ExchangeIntegralGoldResult.prototype.interalValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ExchangeIntegralGoldResult alreadyGetRebateCount.
     * @member {number|Long} alreadyGetRebateCount
     * @memberof ExchangeIntegralGoldResult
     * @instance
     */
    ExchangeIntegralGoldResult.prototype.alreadyGetRebateCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ExchangeIntegralGoldResult instance using the specified properties.
     * @function create
     * @memberof ExchangeIntegralGoldResult
     * @static
     * @param {IExchangeIntegralGoldResult=} [properties] Properties to set
     * @returns {ExchangeIntegralGoldResult} ExchangeIntegralGoldResult instance
     */
    ExchangeIntegralGoldResult.create = function create(properties) {
        return new ExchangeIntegralGoldResult(properties);
    };

    /**
     * Encodes the specified ExchangeIntegralGoldResult message. Does not implicitly {@link ExchangeIntegralGoldResult.verify|verify} messages.
     * @function encode
     * @memberof ExchangeIntegralGoldResult
     * @static
     * @param {IExchangeIntegralGoldResult} m ExchangeIntegralGoldResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeIntegralGoldResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuc);
        w.uint32(18).string(m.tips);
        if (m.record != null && m.hasOwnProperty("record"))
            $root.ExchangeIntegralRecord.encode(m.record, w.uint32(26).fork()).ldelim();
        if (m.interalValue != null && m.hasOwnProperty("interalValue"))
            w.uint32(32).int64(m.interalValue);
        if (m.alreadyGetRebateCount != null && m.hasOwnProperty("alreadyGetRebateCount"))
            w.uint32(40).int64(m.alreadyGetRebateCount);
        return w;
    };

    /**
     * Decodes an ExchangeIntegralGoldResult message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeIntegralGoldResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExchangeIntegralGoldResult} ExchangeIntegralGoldResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeIntegralGoldResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExchangeIntegralGoldResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuc = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            case 3:
                m.record = $root.ExchangeIntegralRecord.decode(r, r.uint32());
                break;
            case 4:
                m.interalValue = r.int64();
                break;
            case 5:
                m.alreadyGetRebateCount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isSuc"))
            throw $util.ProtocolError("missing required 'isSuc'", { instance: m });
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        return m;
    };

    return ExchangeIntegralGoldResult;
})();

module.exports = $root;

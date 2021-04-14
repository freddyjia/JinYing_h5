/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Promoter || ($protobuf.roots.Promoter = {});

/**
 * RewardState enum.
 * @exports RewardState
 * @enum {string}
 * @property {number} UnIssue=0 UnIssue value
 * @property {number} Issued=1 Issued value
 */
$root.RewardState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UnIssue"] = 0;
    values[valuesById[1] = "Issued"] = 1;
    return values;
})();

$root.LevelInfo = (function() {

    /**
     * Properties of a LevelInfo.
     * @exports ILevelInfo
     * @interface ILevelInfo
     * @property {number} level LevelInfo level
     * @property {string} levelName LevelInfo levelName
     * @property {number} areaMin LevelInfo areaMin
     * @property {number} areaMax LevelInfo areaMax
     * @property {string} desc LevelInfo desc
     * @property {string} icon LevelInfo icon
     * @property {number} firstTaxRate LevelInfo firstTaxRate
     * @property {number} secondTaxRate LevelInfo secondTaxRate
     * @property {number} thirdaxRate LevelInfo thirdaxRate
     */

    /**
     * Constructs a new LevelInfo.
     * @exports LevelInfo
     * @classdesc Represents a LevelInfo.
     * @implements ILevelInfo
     * @constructor
     * @param {ILevelInfo=} [p] Properties to set
     */
    function LevelInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LevelInfo level.
     * @member {number} level
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.level = 0;

    /**
     * LevelInfo levelName.
     * @member {string} levelName
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.levelName = "";

    /**
     * LevelInfo areaMin.
     * @member {number} areaMin
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.areaMin = 0;

    /**
     * LevelInfo areaMax.
     * @member {number} areaMax
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.areaMax = 0;

    /**
     * LevelInfo desc.
     * @member {string} desc
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.desc = "";

    /**
     * LevelInfo icon.
     * @member {string} icon
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.icon = "";

    /**
     * LevelInfo firstTaxRate.
     * @member {number} firstTaxRate
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.firstTaxRate = 0;

    /**
     * LevelInfo secondTaxRate.
     * @member {number} secondTaxRate
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.secondTaxRate = 0;

    /**
     * LevelInfo thirdaxRate.
     * @member {number} thirdaxRate
     * @memberof LevelInfo
     * @instance
     */
    LevelInfo.prototype.thirdaxRate = 0;

    /**
     * Creates a new LevelInfo instance using the specified properties.
     * @function create
     * @memberof LevelInfo
     * @static
     * @param {ILevelInfo=} [properties] Properties to set
     * @returns {LevelInfo} LevelInfo instance
     */
    LevelInfo.create = function create(properties) {
        return new LevelInfo(properties);
    };

    /**
     * Encodes the specified LevelInfo message. Does not implicitly {@link LevelInfo.verify|verify} messages.
     * @function encode
     * @memberof LevelInfo
     * @static
     * @param {ILevelInfo} m LevelInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LevelInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.level);
        w.uint32(18).string(m.levelName);
        w.uint32(24).int32(m.areaMin);
        w.uint32(32).int32(m.areaMax);
        w.uint32(42).string(m.desc);
        w.uint32(50).string(m.icon);
        w.uint32(56).int32(m.firstTaxRate);
        w.uint32(64).int32(m.secondTaxRate);
        w.uint32(72).int32(m.thirdaxRate);
        return w;
    };

    /**
     * Decodes a LevelInfo message from the specified reader or buffer.
     * @function decode
     * @memberof LevelInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LevelInfo} LevelInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LevelInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LevelInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.level = r.int32();
                break;
            case 2:
                m.levelName = r.string();
                break;
            case 3:
                m.areaMin = r.int32();
                break;
            case 4:
                m.areaMax = r.int32();
                break;
            case 5:
                m.desc = r.string();
                break;
            case 6:
                m.icon = r.string();
                break;
            case 7:
                m.firstTaxRate = r.int32();
                break;
            case 8:
                m.secondTaxRate = r.int32();
                break;
            case 9:
                m.thirdaxRate = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("level"))
            throw $util.ProtocolError("missing required 'level'", { instance: m });
        if (!m.hasOwnProperty("levelName"))
            throw $util.ProtocolError("missing required 'levelName'", { instance: m });
        if (!m.hasOwnProperty("areaMin"))
            throw $util.ProtocolError("missing required 'areaMin'", { instance: m });
        if (!m.hasOwnProperty("areaMax"))
            throw $util.ProtocolError("missing required 'areaMax'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        if (!m.hasOwnProperty("icon"))
            throw $util.ProtocolError("missing required 'icon'", { instance: m });
        if (!m.hasOwnProperty("firstTaxRate"))
            throw $util.ProtocolError("missing required 'firstTaxRate'", { instance: m });
        if (!m.hasOwnProperty("secondTaxRate"))
            throw $util.ProtocolError("missing required 'secondTaxRate'", { instance: m });
        if (!m.hasOwnProperty("thirdaxRate"))
            throw $util.ProtocolError("missing required 'thirdaxRate'", { instance: m });
        return m;
    };

    return LevelInfo;
})();

$root.GetLevelInfoRes = (function() {

    /**
     * Properties of a GetLevelInfoRes.
     * @exports IGetLevelInfoRes
     * @interface IGetLevelInfoRes
     * @property {Array.<ILevelInfo>|null} [levelInfos] GetLevelInfoRes levelInfos
     */

    /**
     * Constructs a new GetLevelInfoRes.
     * @exports GetLevelInfoRes
     * @classdesc Represents a GetLevelInfoRes.
     * @implements IGetLevelInfoRes
     * @constructor
     * @param {IGetLevelInfoRes=} [p] Properties to set
     */
    function GetLevelInfoRes(p) {
        this.levelInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetLevelInfoRes levelInfos.
     * @member {Array.<ILevelInfo>} levelInfos
     * @memberof GetLevelInfoRes
     * @instance
     */
    GetLevelInfoRes.prototype.levelInfos = $util.emptyArray;

    /**
     * Creates a new GetLevelInfoRes instance using the specified properties.
     * @function create
     * @memberof GetLevelInfoRes
     * @static
     * @param {IGetLevelInfoRes=} [properties] Properties to set
     * @returns {GetLevelInfoRes} GetLevelInfoRes instance
     */
    GetLevelInfoRes.create = function create(properties) {
        return new GetLevelInfoRes(properties);
    };

    /**
     * Encodes the specified GetLevelInfoRes message. Does not implicitly {@link GetLevelInfoRes.verify|verify} messages.
     * @function encode
     * @memberof GetLevelInfoRes
     * @static
     * @param {IGetLevelInfoRes} m GetLevelInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetLevelInfoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.levelInfos != null && m.levelInfos.length) {
            for (var i = 0; i < m.levelInfos.length; ++i)
                $root.LevelInfo.encode(m.levelInfos[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GetLevelInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetLevelInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetLevelInfoRes} GetLevelInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetLevelInfoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetLevelInfoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.levelInfos && m.levelInfos.length))
                    m.levelInfos = [];
                m.levelInfos.push($root.LevelInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GetLevelInfoRes;
})();

$root.GetMinePerformanceInfoResp = (function() {

    /**
     * Properties of a GetMinePerformanceInfoResp.
     * @exports IGetMinePerformanceInfoResp
     * @interface IGetMinePerformanceInfoResp
     * @property {number} performanceToday GetMinePerformanceInfoResp performanceToday
     * @property {number} incomeToday GetMinePerformanceInfoResp incomeToday
     * @property {number} oneLevelSubordinatesNum GetMinePerformanceInfoResp oneLevelSubordinatesNum
     * @property {number|Long} curLevelExp GetMinePerformanceInfoResp curLevelExp
     */

    /**
     * Constructs a new GetMinePerformanceInfoResp.
     * @exports GetMinePerformanceInfoResp
     * @classdesc Represents a GetMinePerformanceInfoResp.
     * @implements IGetMinePerformanceInfoResp
     * @constructor
     * @param {IGetMinePerformanceInfoResp=} [p] Properties to set
     */
    function GetMinePerformanceInfoResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetMinePerformanceInfoResp performanceToday.
     * @member {number} performanceToday
     * @memberof GetMinePerformanceInfoResp
     * @instance
     */
    GetMinePerformanceInfoResp.prototype.performanceToday = 0;

    /**
     * GetMinePerformanceInfoResp incomeToday.
     * @member {number} incomeToday
     * @memberof GetMinePerformanceInfoResp
     * @instance
     */
    GetMinePerformanceInfoResp.prototype.incomeToday = 0;

    /**
     * GetMinePerformanceInfoResp oneLevelSubordinatesNum.
     * @member {number} oneLevelSubordinatesNum
     * @memberof GetMinePerformanceInfoResp
     * @instance
     */
    GetMinePerformanceInfoResp.prototype.oneLevelSubordinatesNum = 0;

    /**
     * GetMinePerformanceInfoResp curLevelExp.
     * @member {number|Long} curLevelExp
     * @memberof GetMinePerformanceInfoResp
     * @instance
     */
    GetMinePerformanceInfoResp.prototype.curLevelExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetMinePerformanceInfoResp instance using the specified properties.
     * @function create
     * @memberof GetMinePerformanceInfoResp
     * @static
     * @param {IGetMinePerformanceInfoResp=} [properties] Properties to set
     * @returns {GetMinePerformanceInfoResp} GetMinePerformanceInfoResp instance
     */
    GetMinePerformanceInfoResp.create = function create(properties) {
        return new GetMinePerformanceInfoResp(properties);
    };

    /**
     * Encodes the specified GetMinePerformanceInfoResp message. Does not implicitly {@link GetMinePerformanceInfoResp.verify|verify} messages.
     * @function encode
     * @memberof GetMinePerformanceInfoResp
     * @static
     * @param {IGetMinePerformanceInfoResp} m GetMinePerformanceInfoResp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMinePerformanceInfoResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.performanceToday);
        w.uint32(16).int32(m.incomeToday);
        w.uint32(24).int32(m.oneLevelSubordinatesNum);
        w.uint32(32).int64(m.curLevelExp);
        return w;
    };

    /**
     * Decodes a GetMinePerformanceInfoResp message from the specified reader or buffer.
     * @function decode
     * @memberof GetMinePerformanceInfoResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetMinePerformanceInfoResp} GetMinePerformanceInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMinePerformanceInfoResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetMinePerformanceInfoResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.performanceToday = r.int32();
                break;
            case 2:
                m.incomeToday = r.int32();
                break;
            case 3:
                m.oneLevelSubordinatesNum = r.int32();
                break;
            case 4:
                m.curLevelExp = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("performanceToday"))
            throw $util.ProtocolError("missing required 'performanceToday'", { instance: m });
        if (!m.hasOwnProperty("incomeToday"))
            throw $util.ProtocolError("missing required 'incomeToday'", { instance: m });
        if (!m.hasOwnProperty("oneLevelSubordinatesNum"))
            throw $util.ProtocolError("missing required 'oneLevelSubordinatesNum'", { instance: m });
        if (!m.hasOwnProperty("curLevelExp"))
            throw $util.ProtocolError("missing required 'curLevelExp'", { instance: m });
        return m;
    };

    return GetMinePerformanceInfoResp;
})();

$root.GetMinePlayersInfoReq = (function() {

    /**
     * Properties of a GetMinePlayersInfoReq.
     * @exports IGetMinePlayersInfoReq
     * @interface IGetMinePlayersInfoReq
     * @property {string} dateKey GetMinePlayersInfoReq dateKey
     * @property {number} pageIndex GetMinePlayersInfoReq pageIndex
     */

    /**
     * Constructs a new GetMinePlayersInfoReq.
     * @exports GetMinePlayersInfoReq
     * @classdesc Represents a GetMinePlayersInfoReq.
     * @implements IGetMinePlayersInfoReq
     * @constructor
     * @param {IGetMinePlayersInfoReq=} [p] Properties to set
     */
    function GetMinePlayersInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetMinePlayersInfoReq dateKey.
     * @member {string} dateKey
     * @memberof GetMinePlayersInfoReq
     * @instance
     */
    GetMinePlayersInfoReq.prototype.dateKey = "";

    /**
     * GetMinePlayersInfoReq pageIndex.
     * @member {number} pageIndex
     * @memberof GetMinePlayersInfoReq
     * @instance
     */
    GetMinePlayersInfoReq.prototype.pageIndex = 0;

    /**
     * Creates a new GetMinePlayersInfoReq instance using the specified properties.
     * @function create
     * @memberof GetMinePlayersInfoReq
     * @static
     * @param {IGetMinePlayersInfoReq=} [properties] Properties to set
     * @returns {GetMinePlayersInfoReq} GetMinePlayersInfoReq instance
     */
    GetMinePlayersInfoReq.create = function create(properties) {
        return new GetMinePlayersInfoReq(properties);
    };

    /**
     * Encodes the specified GetMinePlayersInfoReq message. Does not implicitly {@link GetMinePlayersInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetMinePlayersInfoReq
     * @static
     * @param {IGetMinePlayersInfoReq} m GetMinePlayersInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMinePlayersInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.dateKey);
        w.uint32(16).int32(m.pageIndex);
        return w;
    };

    /**
     * Decodes a GetMinePlayersInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetMinePlayersInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetMinePlayersInfoReq} GetMinePlayersInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMinePlayersInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetMinePlayersInfoReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.dateKey = r.string();
                break;
            case 2:
                m.pageIndex = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("dateKey"))
            throw $util.ProtocolError("missing required 'dateKey'", { instance: m });
        if (!m.hasOwnProperty("pageIndex"))
            throw $util.ProtocolError("missing required 'pageIndex'", { instance: m });
        return m;
    };

    return GetMinePlayersInfoReq;
})();

$root.SubordinateIncomeInfo = (function() {

    /**
     * Properties of a SubordinateIncomeInfo.
     * @exports ISubordinateIncomeInfo
     * @interface ISubordinateIncomeInfo
     * @property {number|Long} subordinateId SubordinateIncomeInfo subordinateId
     * @property {string} subordinateName SubordinateIncomeInfo subordinateName
     * @property {number} performanceForMeFromSubordinateId SubordinateIncomeInfo performanceForMeFromSubordinateId
     * @property {number} performanceFromSubordinateIdOneAndTwoLevel SubordinateIncomeInfo performanceFromSubordinateIdOneAndTwoLevel
     * @property {number} incomeForMeToday SubordinateIncomeInfo incomeForMeToday
     */

    /**
     * Constructs a new SubordinateIncomeInfo.
     * @exports SubordinateIncomeInfo
     * @classdesc Represents a SubordinateIncomeInfo.
     * @implements ISubordinateIncomeInfo
     * @constructor
     * @param {ISubordinateIncomeInfo=} [p] Properties to set
     */
    function SubordinateIncomeInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SubordinateIncomeInfo subordinateId.
     * @member {number|Long} subordinateId
     * @memberof SubordinateIncomeInfo
     * @instance
     */
    SubordinateIncomeInfo.prototype.subordinateId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SubordinateIncomeInfo subordinateName.
     * @member {string} subordinateName
     * @memberof SubordinateIncomeInfo
     * @instance
     */
    SubordinateIncomeInfo.prototype.subordinateName = "";

    /**
     * SubordinateIncomeInfo performanceForMeFromSubordinateId.
     * @member {number} performanceForMeFromSubordinateId
     * @memberof SubordinateIncomeInfo
     * @instance
     */
    SubordinateIncomeInfo.prototype.performanceForMeFromSubordinateId = 0;

    /**
     * SubordinateIncomeInfo performanceFromSubordinateIdOneAndTwoLevel.
     * @member {number} performanceFromSubordinateIdOneAndTwoLevel
     * @memberof SubordinateIncomeInfo
     * @instance
     */
    SubordinateIncomeInfo.prototype.performanceFromSubordinateIdOneAndTwoLevel = 0;

    /**
     * SubordinateIncomeInfo incomeForMeToday.
     * @member {number} incomeForMeToday
     * @memberof SubordinateIncomeInfo
     * @instance
     */
    SubordinateIncomeInfo.prototype.incomeForMeToday = 0;

    /**
     * Creates a new SubordinateIncomeInfo instance using the specified properties.
     * @function create
     * @memberof SubordinateIncomeInfo
     * @static
     * @param {ISubordinateIncomeInfo=} [properties] Properties to set
     * @returns {SubordinateIncomeInfo} SubordinateIncomeInfo instance
     */
    SubordinateIncomeInfo.create = function create(properties) {
        return new SubordinateIncomeInfo(properties);
    };

    /**
     * Encodes the specified SubordinateIncomeInfo message. Does not implicitly {@link SubordinateIncomeInfo.verify|verify} messages.
     * @function encode
     * @memberof SubordinateIncomeInfo
     * @static
     * @param {ISubordinateIncomeInfo} m SubordinateIncomeInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubordinateIncomeInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.subordinateId);
        w.uint32(18).string(m.subordinateName);
        w.uint32(24).int32(m.performanceForMeFromSubordinateId);
        w.uint32(32).int32(m.performanceFromSubordinateIdOneAndTwoLevel);
        w.uint32(40).int32(m.incomeForMeToday);
        return w;
    };

    /**
     * Decodes a SubordinateIncomeInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SubordinateIncomeInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SubordinateIncomeInfo} SubordinateIncomeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubordinateIncomeInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SubordinateIncomeInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.subordinateId = r.int64();
                break;
            case 2:
                m.subordinateName = r.string();
                break;
            case 3:
                m.performanceForMeFromSubordinateId = r.int32();
                break;
            case 4:
                m.performanceFromSubordinateIdOneAndTwoLevel = r.int32();
                break;
            case 5:
                m.incomeForMeToday = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("subordinateId"))
            throw $util.ProtocolError("missing required 'subordinateId'", { instance: m });
        if (!m.hasOwnProperty("subordinateName"))
            throw $util.ProtocolError("missing required 'subordinateName'", { instance: m });
        if (!m.hasOwnProperty("performanceForMeFromSubordinateId"))
            throw $util.ProtocolError("missing required 'performanceForMeFromSubordinateId'", { instance: m });
        if (!m.hasOwnProperty("performanceFromSubordinateIdOneAndTwoLevel"))
            throw $util.ProtocolError("missing required 'performanceFromSubordinateIdOneAndTwoLevel'", { instance: m });
        if (!m.hasOwnProperty("incomeForMeToday"))
            throw $util.ProtocolError("missing required 'incomeForMeToday'", { instance: m });
        return m;
    };

    return SubordinateIncomeInfo;
})();

$root.GetMinePlayersInfoRes = (function() {

    /**
     * Properties of a GetMinePlayersInfoRes.
     * @exports IGetMinePlayersInfoRes
     * @interface IGetMinePlayersInfoRes
     * @property {number} totalPage GetMinePlayersInfoRes totalPage
     * @property {Array.<ISubordinateIncomeInfo>|null} [subordinateIncomeInfoList] GetMinePlayersInfoRes subordinateIncomeInfoList
     * @property {number} performanceAllToday GetMinePlayersInfoRes performanceAllToday
     * @property {number} incomeAllToday GetMinePlayersInfoRes incomeAllToday
     * @property {number} performanceOneLevelNum GetMinePlayersInfoRes performanceOneLevelNum
     */

    /**
     * Constructs a new GetMinePlayersInfoRes.
     * @exports GetMinePlayersInfoRes
     * @classdesc Represents a GetMinePlayersInfoRes.
     * @implements IGetMinePlayersInfoRes
     * @constructor
     * @param {IGetMinePlayersInfoRes=} [p] Properties to set
     */
    function GetMinePlayersInfoRes(p) {
        this.subordinateIncomeInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetMinePlayersInfoRes totalPage.
     * @member {number} totalPage
     * @memberof GetMinePlayersInfoRes
     * @instance
     */
    GetMinePlayersInfoRes.prototype.totalPage = 0;

    /**
     * GetMinePlayersInfoRes subordinateIncomeInfoList.
     * @member {Array.<ISubordinateIncomeInfo>} subordinateIncomeInfoList
     * @memberof GetMinePlayersInfoRes
     * @instance
     */
    GetMinePlayersInfoRes.prototype.subordinateIncomeInfoList = $util.emptyArray;

    /**
     * GetMinePlayersInfoRes performanceAllToday.
     * @member {number} performanceAllToday
     * @memberof GetMinePlayersInfoRes
     * @instance
     */
    GetMinePlayersInfoRes.prototype.performanceAllToday = 0;

    /**
     * GetMinePlayersInfoRes incomeAllToday.
     * @member {number} incomeAllToday
     * @memberof GetMinePlayersInfoRes
     * @instance
     */
    GetMinePlayersInfoRes.prototype.incomeAllToday = 0;

    /**
     * GetMinePlayersInfoRes performanceOneLevelNum.
     * @member {number} performanceOneLevelNum
     * @memberof GetMinePlayersInfoRes
     * @instance
     */
    GetMinePlayersInfoRes.prototype.performanceOneLevelNum = 0;

    /**
     * Creates a new GetMinePlayersInfoRes instance using the specified properties.
     * @function create
     * @memberof GetMinePlayersInfoRes
     * @static
     * @param {IGetMinePlayersInfoRes=} [properties] Properties to set
     * @returns {GetMinePlayersInfoRes} GetMinePlayersInfoRes instance
     */
    GetMinePlayersInfoRes.create = function create(properties) {
        return new GetMinePlayersInfoRes(properties);
    };

    /**
     * Encodes the specified GetMinePlayersInfoRes message. Does not implicitly {@link GetMinePlayersInfoRes.verify|verify} messages.
     * @function encode
     * @memberof GetMinePlayersInfoRes
     * @static
     * @param {IGetMinePlayersInfoRes} m GetMinePlayersInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMinePlayersInfoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.totalPage);
        if (m.subordinateIncomeInfoList != null && m.subordinateIncomeInfoList.length) {
            for (var i = 0; i < m.subordinateIncomeInfoList.length; ++i)
                $root.SubordinateIncomeInfo.encode(m.subordinateIncomeInfoList[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(24).int32(m.performanceAllToday);
        w.uint32(32).int32(m.incomeAllToday);
        w.uint32(40).int32(m.performanceOneLevelNum);
        return w;
    };

    /**
     * Decodes a GetMinePlayersInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetMinePlayersInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetMinePlayersInfoRes} GetMinePlayersInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMinePlayersInfoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetMinePlayersInfoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.totalPage = r.int32();
                break;
            case 2:
                if (!(m.subordinateIncomeInfoList && m.subordinateIncomeInfoList.length))
                    m.subordinateIncomeInfoList = [];
                m.subordinateIncomeInfoList.push($root.SubordinateIncomeInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.performanceAllToday = r.int32();
                break;
            case 4:
                m.incomeAllToday = r.int32();
                break;
            case 5:
                m.performanceOneLevelNum = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("totalPage"))
            throw $util.ProtocolError("missing required 'totalPage'", { instance: m });
        if (!m.hasOwnProperty("performanceAllToday"))
            throw $util.ProtocolError("missing required 'performanceAllToday'", { instance: m });
        if (!m.hasOwnProperty("incomeAllToday"))
            throw $util.ProtocolError("missing required 'incomeAllToday'", { instance: m });
        if (!m.hasOwnProperty("performanceOneLevelNum"))
            throw $util.ProtocolError("missing required 'performanceOneLevelNum'", { instance: m });
        return m;
    };

    return GetMinePlayersInfoRes;
})();

$root.IncomeDayInfo = (function() {

    /**
     * Properties of an IncomeDayInfo.
     * @exports IIncomeDayInfo
     * @interface IIncomeDayInfo
     * @property {number|Long} date IncomeDayInfo date
     * @property {number} incomeOneLevelToday IncomeDayInfo incomeOneLevelToday
     * @property {number} incomeTwoAndThreeLevelToday IncomeDayInfo incomeTwoAndThreeLevelToday
     * @property {number} incomeToday IncomeDayInfo incomeToday
     */

    /**
     * Constructs a new IncomeDayInfo.
     * @exports IncomeDayInfo
     * @classdesc Represents an IncomeDayInfo.
     * @implements IIncomeDayInfo
     * @constructor
     * @param {IIncomeDayInfo=} [p] Properties to set
     */
    function IncomeDayInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * IncomeDayInfo date.
     * @member {number|Long} date
     * @memberof IncomeDayInfo
     * @instance
     */
    IncomeDayInfo.prototype.date = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * IncomeDayInfo incomeOneLevelToday.
     * @member {number} incomeOneLevelToday
     * @memberof IncomeDayInfo
     * @instance
     */
    IncomeDayInfo.prototype.incomeOneLevelToday = 0;

    /**
     * IncomeDayInfo incomeTwoAndThreeLevelToday.
     * @member {number} incomeTwoAndThreeLevelToday
     * @memberof IncomeDayInfo
     * @instance
     */
    IncomeDayInfo.prototype.incomeTwoAndThreeLevelToday = 0;

    /**
     * IncomeDayInfo incomeToday.
     * @member {number} incomeToday
     * @memberof IncomeDayInfo
     * @instance
     */
    IncomeDayInfo.prototype.incomeToday = 0;

    /**
     * Creates a new IncomeDayInfo instance using the specified properties.
     * @function create
     * @memberof IncomeDayInfo
     * @static
     * @param {IIncomeDayInfo=} [properties] Properties to set
     * @returns {IncomeDayInfo} IncomeDayInfo instance
     */
    IncomeDayInfo.create = function create(properties) {
        return new IncomeDayInfo(properties);
    };

    /**
     * Encodes the specified IncomeDayInfo message. Does not implicitly {@link IncomeDayInfo.verify|verify} messages.
     * @function encode
     * @memberof IncomeDayInfo
     * @static
     * @param {IIncomeDayInfo} m IncomeDayInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IncomeDayInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.date);
        w.uint32(16).int32(m.incomeOneLevelToday);
        w.uint32(24).int32(m.incomeTwoAndThreeLevelToday);
        w.uint32(32).int32(m.incomeToday);
        return w;
    };

    /**
     * Decodes an IncomeDayInfo message from the specified reader or buffer.
     * @function decode
     * @memberof IncomeDayInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IncomeDayInfo} IncomeDayInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IncomeDayInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IncomeDayInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.date = r.int64();
                break;
            case 2:
                m.incomeOneLevelToday = r.int32();
                break;
            case 3:
                m.incomeTwoAndThreeLevelToday = r.int32();
                break;
            case 4:
                m.incomeToday = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("date"))
            throw $util.ProtocolError("missing required 'date'", { instance: m });
        if (!m.hasOwnProperty("incomeOneLevelToday"))
            throw $util.ProtocolError("missing required 'incomeOneLevelToday'", { instance: m });
        if (!m.hasOwnProperty("incomeTwoAndThreeLevelToday"))
            throw $util.ProtocolError("missing required 'incomeTwoAndThreeLevelToday'", { instance: m });
        if (!m.hasOwnProperty("incomeToday"))
            throw $util.ProtocolError("missing required 'incomeToday'", { instance: m });
        return m;
    };

    return IncomeDayInfo;
})();

$root.GetMineDayIncomeInfo = (function() {

    /**
     * Properties of a GetMineDayIncomeInfo.
     * @exports IGetMineDayIncomeInfo
     * @interface IGetMineDayIncomeInfo
     * @property {number} pageIndex GetMineDayIncomeInfo pageIndex
     */

    /**
     * Constructs a new GetMineDayIncomeInfo.
     * @exports GetMineDayIncomeInfo
     * @classdesc Represents a GetMineDayIncomeInfo.
     * @implements IGetMineDayIncomeInfo
     * @constructor
     * @param {IGetMineDayIncomeInfo=} [p] Properties to set
     */
    function GetMineDayIncomeInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetMineDayIncomeInfo pageIndex.
     * @member {number} pageIndex
     * @memberof GetMineDayIncomeInfo
     * @instance
     */
    GetMineDayIncomeInfo.prototype.pageIndex = 0;

    /**
     * Creates a new GetMineDayIncomeInfo instance using the specified properties.
     * @function create
     * @memberof GetMineDayIncomeInfo
     * @static
     * @param {IGetMineDayIncomeInfo=} [properties] Properties to set
     * @returns {GetMineDayIncomeInfo} GetMineDayIncomeInfo instance
     */
    GetMineDayIncomeInfo.create = function create(properties) {
        return new GetMineDayIncomeInfo(properties);
    };

    /**
     * Encodes the specified GetMineDayIncomeInfo message. Does not implicitly {@link GetMineDayIncomeInfo.verify|verify} messages.
     * @function encode
     * @memberof GetMineDayIncomeInfo
     * @static
     * @param {IGetMineDayIncomeInfo} m GetMineDayIncomeInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMineDayIncomeInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.pageIndex);
        return w;
    };

    /**
     * Decodes a GetMineDayIncomeInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GetMineDayIncomeInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetMineDayIncomeInfo} GetMineDayIncomeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMineDayIncomeInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetMineDayIncomeInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.pageIndex = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pageIndex"))
            throw $util.ProtocolError("missing required 'pageIndex'", { instance: m });
        return m;
    };

    return GetMineDayIncomeInfo;
})();

$root.MineDayIncomeInfoResp = (function() {

    /**
     * Properties of a MineDayIncomeInfoResp.
     * @exports IMineDayIncomeInfoResp
     * @interface IMineDayIncomeInfoResp
     * @property {number} totalPage MineDayIncomeInfoResp totalPage
     * @property {Array.<IIncomeDayInfo>|null} [incomeDayInfoList] MineDayIncomeInfoResp incomeDayInfoList
     */

    /**
     * Constructs a new MineDayIncomeInfoResp.
     * @exports MineDayIncomeInfoResp
     * @classdesc Represents a MineDayIncomeInfoResp.
     * @implements IMineDayIncomeInfoResp
     * @constructor
     * @param {IMineDayIncomeInfoResp=} [p] Properties to set
     */
    function MineDayIncomeInfoResp(p) {
        this.incomeDayInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MineDayIncomeInfoResp totalPage.
     * @member {number} totalPage
     * @memberof MineDayIncomeInfoResp
     * @instance
     */
    MineDayIncomeInfoResp.prototype.totalPage = 0;

    /**
     * MineDayIncomeInfoResp incomeDayInfoList.
     * @member {Array.<IIncomeDayInfo>} incomeDayInfoList
     * @memberof MineDayIncomeInfoResp
     * @instance
     */
    MineDayIncomeInfoResp.prototype.incomeDayInfoList = $util.emptyArray;

    /**
     * Creates a new MineDayIncomeInfoResp instance using the specified properties.
     * @function create
     * @memberof MineDayIncomeInfoResp
     * @static
     * @param {IMineDayIncomeInfoResp=} [properties] Properties to set
     * @returns {MineDayIncomeInfoResp} MineDayIncomeInfoResp instance
     */
    MineDayIncomeInfoResp.create = function create(properties) {
        return new MineDayIncomeInfoResp(properties);
    };

    /**
     * Encodes the specified MineDayIncomeInfoResp message. Does not implicitly {@link MineDayIncomeInfoResp.verify|verify} messages.
     * @function encode
     * @memberof MineDayIncomeInfoResp
     * @static
     * @param {IMineDayIncomeInfoResp} m MineDayIncomeInfoResp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MineDayIncomeInfoResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.totalPage);
        if (m.incomeDayInfoList != null && m.incomeDayInfoList.length) {
            for (var i = 0; i < m.incomeDayInfoList.length; ++i)
                $root.IncomeDayInfo.encode(m.incomeDayInfoList[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a MineDayIncomeInfoResp message from the specified reader or buffer.
     * @function decode
     * @memberof MineDayIncomeInfoResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MineDayIncomeInfoResp} MineDayIncomeInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MineDayIncomeInfoResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MineDayIncomeInfoResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.totalPage = r.int32();
                break;
            case 2:
                if (!(m.incomeDayInfoList && m.incomeDayInfoList.length))
                    m.incomeDayInfoList = [];
                m.incomeDayInfoList.push($root.IncomeDayInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("totalPage"))
            throw $util.ProtocolError("missing required 'totalPage'", { instance: m });
        return m;
    };

    return MineDayIncomeInfoResp;
})();

$root.GetMinePromoteInfoRes = (function() {

    /**
     * Properties of a GetMinePromoteInfoRes.
     * @exports IGetMinePromoteInfoRes
     * @interface IGetMinePromoteInfoRes
     * @property {number} teamNum GetMinePromoteInfoRes teamNum
     * @property {number} directPlayerNum GetMinePromoteInfoRes directPlayerNum
     * @property {number} dailyAdd GetMinePromoteInfoRes dailyAdd
     * @property {number} activeNum GetMinePromoteInfoRes activeNum
     */

    /**
     * Constructs a new GetMinePromoteInfoRes.
     * @exports GetMinePromoteInfoRes
     * @classdesc 1、主要显示内容：团队人数、直属下级、今日新增人数、今日登陆人数
     * @implements IGetMinePromoteInfoRes
     * @constructor
     * @param {IGetMinePromoteInfoRes=} [p] Properties to set
     */
    function GetMinePromoteInfoRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetMinePromoteInfoRes teamNum.
     * @member {number} teamNum
     * @memberof GetMinePromoteInfoRes
     * @instance
     */
    GetMinePromoteInfoRes.prototype.teamNum = 0;

    /**
     * GetMinePromoteInfoRes directPlayerNum.
     * @member {number} directPlayerNum
     * @memberof GetMinePromoteInfoRes
     * @instance
     */
    GetMinePromoteInfoRes.prototype.directPlayerNum = 0;

    /**
     * GetMinePromoteInfoRes dailyAdd.
     * @member {number} dailyAdd
     * @memberof GetMinePromoteInfoRes
     * @instance
     */
    GetMinePromoteInfoRes.prototype.dailyAdd = 0;

    /**
     * GetMinePromoteInfoRes activeNum.
     * @member {number} activeNum
     * @memberof GetMinePromoteInfoRes
     * @instance
     */
    GetMinePromoteInfoRes.prototype.activeNum = 0;

    /**
     * Creates a new GetMinePromoteInfoRes instance using the specified properties.
     * @function create
     * @memberof GetMinePromoteInfoRes
     * @static
     * @param {IGetMinePromoteInfoRes=} [properties] Properties to set
     * @returns {GetMinePromoteInfoRes} GetMinePromoteInfoRes instance
     */
    GetMinePromoteInfoRes.create = function create(properties) {
        return new GetMinePromoteInfoRes(properties);
    };

    /**
     * Encodes the specified GetMinePromoteInfoRes message. Does not implicitly {@link GetMinePromoteInfoRes.verify|verify} messages.
     * @function encode
     * @memberof GetMinePromoteInfoRes
     * @static
     * @param {IGetMinePromoteInfoRes} m GetMinePromoteInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMinePromoteInfoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.teamNum);
        w.uint32(16).int32(m.directPlayerNum);
        w.uint32(24).int32(m.dailyAdd);
        w.uint32(32).int32(m.activeNum);
        return w;
    };

    /**
     * Decodes a GetMinePromoteInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetMinePromoteInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetMinePromoteInfoRes} GetMinePromoteInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMinePromoteInfoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetMinePromoteInfoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.teamNum = r.int32();
                break;
            case 2:
                m.directPlayerNum = r.int32();
                break;
            case 3:
                m.dailyAdd = r.int32();
                break;
            case 4:
                m.activeNum = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("teamNum"))
            throw $util.ProtocolError("missing required 'teamNum'", { instance: m });
        if (!m.hasOwnProperty("directPlayerNum"))
            throw $util.ProtocolError("missing required 'directPlayerNum'", { instance: m });
        if (!m.hasOwnProperty("dailyAdd"))
            throw $util.ProtocolError("missing required 'dailyAdd'", { instance: m });
        if (!m.hasOwnProperty("activeNum"))
            throw $util.ProtocolError("missing required 'activeNum'", { instance: m });
        return m;
    };

    return GetMinePromoteInfoRes;
})();

$root.GetMineRewardsInfoRes = (function() {

    /**
     * Properties of a GetMineRewardsInfoRes.
     * @exports IGetMineRewardsInfoRes
     * @interface IGetMineRewardsInfoRes
     * @property {number|Long} totalReward GetMineRewardsInfoRes totalReward
     * @property {number|Long} totalDeposited GetMineRewardsInfoRes totalDeposited
     * @property {number|Long} canDeposit GetMineRewardsInfoRes canDeposit
     */

    /**
     * Constructs a new GetMineRewardsInfoRes.
     * @exports GetMineRewardsInfoRes
     * @classdesc Represents a GetMineRewardsInfoRes.
     * @implements IGetMineRewardsInfoRes
     * @constructor
     * @param {IGetMineRewardsInfoRes=} [p] Properties to set
     */
    function GetMineRewardsInfoRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetMineRewardsInfoRes totalReward.
     * @member {number|Long} totalReward
     * @memberof GetMineRewardsInfoRes
     * @instance
     */
    GetMineRewardsInfoRes.prototype.totalReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GetMineRewardsInfoRes totalDeposited.
     * @member {number|Long} totalDeposited
     * @memberof GetMineRewardsInfoRes
     * @instance
     */
    GetMineRewardsInfoRes.prototype.totalDeposited = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GetMineRewardsInfoRes canDeposit.
     * @member {number|Long} canDeposit
     * @memberof GetMineRewardsInfoRes
     * @instance
     */
    GetMineRewardsInfoRes.prototype.canDeposit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetMineRewardsInfoRes instance using the specified properties.
     * @function create
     * @memberof GetMineRewardsInfoRes
     * @static
     * @param {IGetMineRewardsInfoRes=} [properties] Properties to set
     * @returns {GetMineRewardsInfoRes} GetMineRewardsInfoRes instance
     */
    GetMineRewardsInfoRes.create = function create(properties) {
        return new GetMineRewardsInfoRes(properties);
    };

    /**
     * Encodes the specified GetMineRewardsInfoRes message. Does not implicitly {@link GetMineRewardsInfoRes.verify|verify} messages.
     * @function encode
     * @memberof GetMineRewardsInfoRes
     * @static
     * @param {IGetMineRewardsInfoRes} m GetMineRewardsInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMineRewardsInfoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.totalReward);
        w.uint32(16).int64(m.totalDeposited);
        w.uint32(24).int64(m.canDeposit);
        return w;
    };

    /**
     * Decodes a GetMineRewardsInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetMineRewardsInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetMineRewardsInfoRes} GetMineRewardsInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMineRewardsInfoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetMineRewardsInfoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.totalReward = r.int64();
                break;
            case 2:
                m.totalDeposited = r.int64();
                break;
            case 3:
                m.canDeposit = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("totalReward"))
            throw $util.ProtocolError("missing required 'totalReward'", { instance: m });
        if (!m.hasOwnProperty("totalDeposited"))
            throw $util.ProtocolError("missing required 'totalDeposited'", { instance: m });
        if (!m.hasOwnProperty("canDeposit"))
            throw $util.ProtocolError("missing required 'canDeposit'", { instance: m });
        return m;
    };

    return GetMineRewardsInfoRes;
})();

$root.GetTakeRewardsInfoReq = (function() {

    /**
     * Properties of a GetTakeRewardsInfoReq.
     * @exports IGetTakeRewardsInfoReq
     * @interface IGetTakeRewardsInfoReq
     * @property {number} pageIndex GetTakeRewardsInfoReq pageIndex
     */

    /**
     * Constructs a new GetTakeRewardsInfoReq.
     * @exports GetTakeRewardsInfoReq
     * @classdesc Represents a GetTakeRewardsInfoReq.
     * @implements IGetTakeRewardsInfoReq
     * @constructor
     * @param {IGetTakeRewardsInfoReq=} [p] Properties to set
     */
    function GetTakeRewardsInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetTakeRewardsInfoReq pageIndex.
     * @member {number} pageIndex
     * @memberof GetTakeRewardsInfoReq
     * @instance
     */
    GetTakeRewardsInfoReq.prototype.pageIndex = 0;

    /**
     * Creates a new GetTakeRewardsInfoReq instance using the specified properties.
     * @function create
     * @memberof GetTakeRewardsInfoReq
     * @static
     * @param {IGetTakeRewardsInfoReq=} [properties] Properties to set
     * @returns {GetTakeRewardsInfoReq} GetTakeRewardsInfoReq instance
     */
    GetTakeRewardsInfoReq.create = function create(properties) {
        return new GetTakeRewardsInfoReq(properties);
    };

    /**
     * Encodes the specified GetTakeRewardsInfoReq message. Does not implicitly {@link GetTakeRewardsInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetTakeRewardsInfoReq
     * @static
     * @param {IGetTakeRewardsInfoReq} m GetTakeRewardsInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetTakeRewardsInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.pageIndex);
        return w;
    };

    /**
     * Decodes a GetTakeRewardsInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetTakeRewardsInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetTakeRewardsInfoReq} GetTakeRewardsInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetTakeRewardsInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetTakeRewardsInfoReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.pageIndex = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pageIndex"))
            throw $util.ProtocolError("missing required 'pageIndex'", { instance: m });
        return m;
    };

    return GetTakeRewardsInfoReq;
})();

$root.TakeRewardInfo = (function() {

    /**
     * Properties of a TakeRewardInfo.
     * @exports ITakeRewardInfo
     * @interface ITakeRewardInfo
     * @property {number|Long} date TakeRewardInfo date
     * @property {number} depositNum TakeRewardInfo depositNum
     * @property {RewardState} state TakeRewardInfo state
     */

    /**
     * Constructs a new TakeRewardInfo.
     * @exports TakeRewardInfo
     * @classdesc Represents a TakeRewardInfo.
     * @implements ITakeRewardInfo
     * @constructor
     * @param {ITakeRewardInfo=} [p] Properties to set
     */
    function TakeRewardInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TakeRewardInfo date.
     * @member {number|Long} date
     * @memberof TakeRewardInfo
     * @instance
     */
    TakeRewardInfo.prototype.date = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TakeRewardInfo depositNum.
     * @member {number} depositNum
     * @memberof TakeRewardInfo
     * @instance
     */
    TakeRewardInfo.prototype.depositNum = 0;

    /**
     * TakeRewardInfo state.
     * @member {RewardState} state
     * @memberof TakeRewardInfo
     * @instance
     */
    TakeRewardInfo.prototype.state = 0;

    /**
     * Creates a new TakeRewardInfo instance using the specified properties.
     * @function create
     * @memberof TakeRewardInfo
     * @static
     * @param {ITakeRewardInfo=} [properties] Properties to set
     * @returns {TakeRewardInfo} TakeRewardInfo instance
     */
    TakeRewardInfo.create = function create(properties) {
        return new TakeRewardInfo(properties);
    };

    /**
     * Encodes the specified TakeRewardInfo message. Does not implicitly {@link TakeRewardInfo.verify|verify} messages.
     * @function encode
     * @memberof TakeRewardInfo
     * @static
     * @param {ITakeRewardInfo} m TakeRewardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TakeRewardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.date);
        w.uint32(16).int32(m.depositNum);
        w.uint32(24).int32(m.state);
        return w;
    };

    /**
     * Decodes a TakeRewardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof TakeRewardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TakeRewardInfo} TakeRewardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TakeRewardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TakeRewardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.date = r.int64();
                break;
            case 2:
                m.depositNum = r.int32();
                break;
            case 3:
                m.state = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("date"))
            throw $util.ProtocolError("missing required 'date'", { instance: m });
        if (!m.hasOwnProperty("depositNum"))
            throw $util.ProtocolError("missing required 'depositNum'", { instance: m });
        if (!m.hasOwnProperty("state"))
            throw $util.ProtocolError("missing required 'state'", { instance: m });
        return m;
    };

    return TakeRewardInfo;
})();

$root.GetTakeRewardsInfoRes = (function() {

    /**
     * Properties of a GetTakeRewardsInfoRes.
     * @exports IGetTakeRewardsInfoRes
     * @interface IGetTakeRewardsInfoRes
     * @property {number} totalPage GetTakeRewardsInfoRes totalPage
     * @property {Array.<ITakeRewardInfo>|null} [takeRewardInfos] GetTakeRewardsInfoRes takeRewardInfos
     */

    /**
     * Constructs a new GetTakeRewardsInfoRes.
     * @exports GetTakeRewardsInfoRes
     * @classdesc Represents a GetTakeRewardsInfoRes.
     * @implements IGetTakeRewardsInfoRes
     * @constructor
     * @param {IGetTakeRewardsInfoRes=} [p] Properties to set
     */
    function GetTakeRewardsInfoRes(p) {
        this.takeRewardInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetTakeRewardsInfoRes totalPage.
     * @member {number} totalPage
     * @memberof GetTakeRewardsInfoRes
     * @instance
     */
    GetTakeRewardsInfoRes.prototype.totalPage = 0;

    /**
     * GetTakeRewardsInfoRes takeRewardInfos.
     * @member {Array.<ITakeRewardInfo>} takeRewardInfos
     * @memberof GetTakeRewardsInfoRes
     * @instance
     */
    GetTakeRewardsInfoRes.prototype.takeRewardInfos = $util.emptyArray;

    /**
     * Creates a new GetTakeRewardsInfoRes instance using the specified properties.
     * @function create
     * @memberof GetTakeRewardsInfoRes
     * @static
     * @param {IGetTakeRewardsInfoRes=} [properties] Properties to set
     * @returns {GetTakeRewardsInfoRes} GetTakeRewardsInfoRes instance
     */
    GetTakeRewardsInfoRes.create = function create(properties) {
        return new GetTakeRewardsInfoRes(properties);
    };

    /**
     * Encodes the specified GetTakeRewardsInfoRes message. Does not implicitly {@link GetTakeRewardsInfoRes.verify|verify} messages.
     * @function encode
     * @memberof GetTakeRewardsInfoRes
     * @static
     * @param {IGetTakeRewardsInfoRes} m GetTakeRewardsInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetTakeRewardsInfoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.totalPage);
        if (m.takeRewardInfos != null && m.takeRewardInfos.length) {
            for (var i = 0; i < m.takeRewardInfos.length; ++i)
                $root.TakeRewardInfo.encode(m.takeRewardInfos[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GetTakeRewardsInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetTakeRewardsInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetTakeRewardsInfoRes} GetTakeRewardsInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetTakeRewardsInfoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetTakeRewardsInfoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.totalPage = r.int32();
                break;
            case 2:
                if (!(m.takeRewardInfos && m.takeRewardInfos.length))
                    m.takeRewardInfos = [];
                m.takeRewardInfos.push($root.TakeRewardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("totalPage"))
            throw $util.ProtocolError("missing required 'totalPage'", { instance: m });
        return m;
    };

    return GetTakeRewardsInfoRes;
})();

$root.ApplyDepositReq = (function() {

    /**
     * Properties of an ApplyDepositReq.
     * @exports IApplyDepositReq
     * @interface IApplyDepositReq
     * @property {number} depositNum ApplyDepositReq depositNum
     */

    /**
     * Constructs a new ApplyDepositReq.
     * @exports ApplyDepositReq
     * @classdesc Represents an ApplyDepositReq.
     * @implements IApplyDepositReq
     * @constructor
     * @param {IApplyDepositReq=} [p] Properties to set
     */
    function ApplyDepositReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ApplyDepositReq depositNum.
     * @member {number} depositNum
     * @memberof ApplyDepositReq
     * @instance
     */
    ApplyDepositReq.prototype.depositNum = 0;

    /**
     * Creates a new ApplyDepositReq instance using the specified properties.
     * @function create
     * @memberof ApplyDepositReq
     * @static
     * @param {IApplyDepositReq=} [properties] Properties to set
     * @returns {ApplyDepositReq} ApplyDepositReq instance
     */
    ApplyDepositReq.create = function create(properties) {
        return new ApplyDepositReq(properties);
    };

    /**
     * Encodes the specified ApplyDepositReq message. Does not implicitly {@link ApplyDepositReq.verify|verify} messages.
     * @function encode
     * @memberof ApplyDepositReq
     * @static
     * @param {IApplyDepositReq} m ApplyDepositReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyDepositReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.depositNum);
        return w;
    };

    /**
     * Decodes an ApplyDepositReq message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyDepositReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ApplyDepositReq} ApplyDepositReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyDepositReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ApplyDepositReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.depositNum = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("depositNum"))
            throw $util.ProtocolError("missing required 'depositNum'", { instance: m });
        return m;
    };

    return ApplyDepositReq;
})();

$root.ApplyDepositRes = (function() {

    /**
     * Properties of an ApplyDepositRes.
     * @exports IApplyDepositRes
     * @interface IApplyDepositRes
     * @property {boolean} success ApplyDepositRes success
     * @property {string|null} [tip] ApplyDepositRes tip
     * @property {IGetMineRewardsInfoRes|null} [infoRes] ApplyDepositRes infoRes
     * @property {number|Long|null} [curLevelExp] ApplyDepositRes curLevelExp
     * @property {ITakeRewardInfo|null} [takeRewardInfos] ApplyDepositRes takeRewardInfos
     */

    /**
     * Constructs a new ApplyDepositRes.
     * @exports ApplyDepositRes
     * @classdesc Represents an ApplyDepositRes.
     * @implements IApplyDepositRes
     * @constructor
     * @param {IApplyDepositRes=} [p] Properties to set
     */
    function ApplyDepositRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ApplyDepositRes success.
     * @member {boolean} success
     * @memberof ApplyDepositRes
     * @instance
     */
    ApplyDepositRes.prototype.success = false;

    /**
     * ApplyDepositRes tip.
     * @member {string} tip
     * @memberof ApplyDepositRes
     * @instance
     */
    ApplyDepositRes.prototype.tip = "";

    /**
     * ApplyDepositRes infoRes.
     * @member {IGetMineRewardsInfoRes|null|undefined} infoRes
     * @memberof ApplyDepositRes
     * @instance
     */
    ApplyDepositRes.prototype.infoRes = null;

    /**
     * ApplyDepositRes curLevelExp.
     * @member {number|Long} curLevelExp
     * @memberof ApplyDepositRes
     * @instance
     */
    ApplyDepositRes.prototype.curLevelExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ApplyDepositRes takeRewardInfos.
     * @member {ITakeRewardInfo|null|undefined} takeRewardInfos
     * @memberof ApplyDepositRes
     * @instance
     */
    ApplyDepositRes.prototype.takeRewardInfos = null;

    /**
     * Creates a new ApplyDepositRes instance using the specified properties.
     * @function create
     * @memberof ApplyDepositRes
     * @static
     * @param {IApplyDepositRes=} [properties] Properties to set
     * @returns {ApplyDepositRes} ApplyDepositRes instance
     */
    ApplyDepositRes.create = function create(properties) {
        return new ApplyDepositRes(properties);
    };

    /**
     * Encodes the specified ApplyDepositRes message. Does not implicitly {@link ApplyDepositRes.verify|verify} messages.
     * @function encode
     * @memberof ApplyDepositRes
     * @static
     * @param {IApplyDepositRes} m ApplyDepositRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyDepositRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tip != null && m.hasOwnProperty("tip"))
            w.uint32(18).string(m.tip);
        if (m.infoRes != null && m.hasOwnProperty("infoRes"))
            $root.GetMineRewardsInfoRes.encode(m.infoRes, w.uint32(26).fork()).ldelim();
        if (m.curLevelExp != null && m.hasOwnProperty("curLevelExp"))
            w.uint32(32).int64(m.curLevelExp);
        if (m.takeRewardInfos != null && m.hasOwnProperty("takeRewardInfos"))
            $root.TakeRewardInfo.encode(m.takeRewardInfos, w.uint32(42).fork()).ldelim();
        return w;
    };

    /**
     * Decodes an ApplyDepositRes message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyDepositRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ApplyDepositRes} ApplyDepositRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyDepositRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ApplyDepositRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tip = r.string();
                break;
            case 3:
                m.infoRes = $root.GetMineRewardsInfoRes.decode(r, r.uint32());
                break;
            case 4:
                m.curLevelExp = r.int64();
                break;
            case 5:
                m.takeRewardInfos = $root.TakeRewardInfo.decode(r, r.uint32());
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

    return ApplyDepositRes;
})();

$root.UploadLeaderIDReq = (function() {

    /**
     * Properties of an UploadLeaderIDReq.
     * @exports IUploadLeaderIDReq
     * @interface IUploadLeaderIDReq
     * @property {string} leaderPlayerId UploadLeaderIDReq leaderPlayerId
     */

    /**
     * Constructs a new UploadLeaderIDReq.
     * @exports UploadLeaderIDReq
     * @classdesc Represents an UploadLeaderIDReq.
     * @implements IUploadLeaderIDReq
     * @constructor
     * @param {IUploadLeaderIDReq=} [p] Properties to set
     */
    function UploadLeaderIDReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UploadLeaderIDReq leaderPlayerId.
     * @member {string} leaderPlayerId
     * @memberof UploadLeaderIDReq
     * @instance
     */
    UploadLeaderIDReq.prototype.leaderPlayerId = "";

    /**
     * Creates a new UploadLeaderIDReq instance using the specified properties.
     * @function create
     * @memberof UploadLeaderIDReq
     * @static
     * @param {IUploadLeaderIDReq=} [properties] Properties to set
     * @returns {UploadLeaderIDReq} UploadLeaderIDReq instance
     */
    UploadLeaderIDReq.create = function create(properties) {
        return new UploadLeaderIDReq(properties);
    };

    /**
     * Encodes the specified UploadLeaderIDReq message. Does not implicitly {@link UploadLeaderIDReq.verify|verify} messages.
     * @function encode
     * @memberof UploadLeaderIDReq
     * @static
     * @param {IUploadLeaderIDReq} m UploadLeaderIDReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UploadLeaderIDReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.leaderPlayerId);
        return w;
    };

    /**
     * Decodes an UploadLeaderIDReq message from the specified reader or buffer.
     * @function decode
     * @memberof UploadLeaderIDReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UploadLeaderIDReq} UploadLeaderIDReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UploadLeaderIDReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UploadLeaderIDReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.leaderPlayerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("leaderPlayerId"))
            throw $util.ProtocolError("missing required 'leaderPlayerId'", { instance: m });
        return m;
    };

    return UploadLeaderIDReq;
})();

$root.UploadLeaderIDRes = (function() {

    /**
     * Properties of an UploadLeaderIDRes.
     * @exports IUploadLeaderIDRes
     * @interface IUploadLeaderIDRes
     * @property {boolean} success UploadLeaderIDRes success
     * @property {string|null} [leaderId] UploadLeaderIDRes leaderId
     */

    /**
     * Constructs a new UploadLeaderIDRes.
     * @exports UploadLeaderIDRes
     * @classdesc Represents an UploadLeaderIDRes.
     * @implements IUploadLeaderIDRes
     * @constructor
     * @param {IUploadLeaderIDRes=} [p] Properties to set
     */
    function UploadLeaderIDRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UploadLeaderIDRes success.
     * @member {boolean} success
     * @memberof UploadLeaderIDRes
     * @instance
     */
    UploadLeaderIDRes.prototype.success = false;

    /**
     * UploadLeaderIDRes leaderId.
     * @member {string} leaderId
     * @memberof UploadLeaderIDRes
     * @instance
     */
    UploadLeaderIDRes.prototype.leaderId = "";

    /**
     * Creates a new UploadLeaderIDRes instance using the specified properties.
     * @function create
     * @memberof UploadLeaderIDRes
     * @static
     * @param {IUploadLeaderIDRes=} [properties] Properties to set
     * @returns {UploadLeaderIDRes} UploadLeaderIDRes instance
     */
    UploadLeaderIDRes.create = function create(properties) {
        return new UploadLeaderIDRes(properties);
    };

    /**
     * Encodes the specified UploadLeaderIDRes message. Does not implicitly {@link UploadLeaderIDRes.verify|verify} messages.
     * @function encode
     * @memberof UploadLeaderIDRes
     * @static
     * @param {IUploadLeaderIDRes} m UploadLeaderIDRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UploadLeaderIDRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.leaderId != null && m.hasOwnProperty("leaderId"))
            w.uint32(18).string(m.leaderId);
        return w;
    };

    /**
     * Decodes an UploadLeaderIDRes message from the specified reader or buffer.
     * @function decode
     * @memberof UploadLeaderIDRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UploadLeaderIDRes} UploadLeaderIDRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UploadLeaderIDRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UploadLeaderIDRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.leaderId = r.string();
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

    return UploadLeaderIDRes;
})();

module.exports = $root;

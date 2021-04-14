/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.HallData || ($protobuf.roots.HallData = {});

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

$root.PushChannelAsset = (function() {

    /**
     * Properties of a PushChannelAsset.
     * @exports IPushChannelAsset
     * @interface IPushChannelAsset
     * @property {string} channelAsset PushChannelAsset channelAsset
     */

    /**
     * Constructs a new PushChannelAsset.
     * @exports PushChannelAsset
     * @classdesc Represents a PushChannelAsset.
     * @implements IPushChannelAsset
     * @constructor
     * @param {IPushChannelAsset=} [p] Properties to set
     */
    function PushChannelAsset(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushChannelAsset channelAsset.
     * @member {string} channelAsset
     * @memberof PushChannelAsset
     * @instance
     */
    PushChannelAsset.prototype.channelAsset = "";

    /**
     * Creates a new PushChannelAsset instance using the specified properties.
     * @function create
     * @memberof PushChannelAsset
     * @static
     * @param {IPushChannelAsset=} [properties] Properties to set
     * @returns {PushChannelAsset} PushChannelAsset instance
     */
    PushChannelAsset.create = function create(properties) {
        return new PushChannelAsset(properties);
    };

    /**
     * Encodes the specified PushChannelAsset message. Does not implicitly {@link PushChannelAsset.verify|verify} messages.
     * @function encode
     * @memberof PushChannelAsset
     * @static
     * @param {IPushChannelAsset} m PushChannelAsset message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushChannelAsset.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.channelAsset);
        return w;
    };

    /**
     * Decodes a PushChannelAsset message from the specified reader or buffer.
     * @function decode
     * @memberof PushChannelAsset
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushChannelAsset} PushChannelAsset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushChannelAsset.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushChannelAsset();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.channelAsset = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("channelAsset"))
            throw $util.ProtocolError("missing required 'channelAsset'", { instance: m });
        return m;
    };

    return PushChannelAsset;
})();

module.exports = $root;

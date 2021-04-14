/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.AnimalRandom || ($protobuf.roots.AnimalRandom = {});

/**
 * Step enum.
 * @exports Step
 * @enum {string}
 * @property {number} xiazhu=1 xiazhu value
 * @property {number} jiesuan=2 jiesuan value
 */
$root.Step = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "xiazhu"] = 1;
    values[valuesById[2] = "jiesuan"] = 2;
    return values;
})();

/**
 * ShowAnimalEnum enum.
 * @exports ShowAnimalEnum
 * @enum {string}
 * @property {number} notAnimalEnum=0 notAnimalEnum value
 * @property {number} yanzi=1 yanzi value
 * @property {number} gezi=2 gezi value
 * @property {number} kongque=3 kongque value
 * @property {number} laoying=4 laoying value
 * @property {number} tuzi=5 tuzi value
 * @property {number} houzi=6 houzi value
 * @property {number} xiongmao=7 xiongmao value
 * @property {number} shizi=8 shizi value
 * @property {number} jinsha=9 jinsha value
 * @property {number} yingsha=10 yingsha value
 * @property {number} tongchi=11 tongchi value
 * @property {number} tongpei=12 tongpei value
 */
$root.ShowAnimalEnum = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "notAnimalEnum"] = 0;
    values[valuesById[1] = "yanzi"] = 1;
    values[valuesById[2] = "gezi"] = 2;
    values[valuesById[3] = "kongque"] = 3;
    values[valuesById[4] = "laoying"] = 4;
    values[valuesById[5] = "tuzi"] = 5;
    values[valuesById[6] = "houzi"] = 6;
    values[valuesById[7] = "xiongmao"] = 7;
    values[valuesById[8] = "shizi"] = 8;
    values[valuesById[9] = "jinsha"] = 9;
    values[valuesById[10] = "yingsha"] = 10;
    values[valuesById[11] = "tongchi"] = 11;
    values[valuesById[12] = "tongpei"] = 12;
    return values;
})();

/**
 * addChipAnimalEnum enum.
 * @exports addChipAnimalEnum
 * @enum {string}
 * @property {number} notAnimalEnum_addChip=0 notAnimalEnum_addChip value
 * @property {number} yanzi_addChip=1 yanzi_addChip value
 * @property {number} gezi_addChip=2 gezi_addChip value
 * @property {number} kongque_addChip=3 kongque_addChip value
 * @property {number} laoying_addChip=4 laoying_addChip value
 * @property {number} tuzi_addChip=5 tuzi_addChip value
 * @property {number} houzi_addChip=6 houzi_addChip value
 * @property {number} xiongmao_addChip=7 xiongmao_addChip value
 * @property {number} shizi_addChip=8 shizi_addChip value
 * @property {number} jinsha_addChip=9 jinsha_addChip value
 * @property {number} feiqin_addChip=101 feiqin_addChip value
 * @property {number} zoushou_addChip=201 zoushou_addChip value
 */
$root.addChipAnimalEnum = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "notAnimalEnum_addChip"] = 0;
    values[valuesById[1] = "yanzi_addChip"] = 1;
    values[valuesById[2] = "gezi_addChip"] = 2;
    values[valuesById[3] = "kongque_addChip"] = 3;
    values[valuesById[4] = "laoying_addChip"] = 4;
    values[valuesById[5] = "tuzi_addChip"] = 5;
    values[valuesById[6] = "houzi_addChip"] = 6;
    values[valuesById[7] = "xiongmao_addChip"] = 7;
    values[valuesById[8] = "shizi_addChip"] = 8;
    values[valuesById[9] = "jinsha_addChip"] = 9;
    values[valuesById[101] = "feiqin_addChip"] = 101;
    values[valuesById[201] = "zoushou_addChip"] = 201;
    return values;
})();

/**
 * ResultBigType enum.
 * @exports ResultBigType
 * @enum {string}
 * @property {number} notResultBigType=0 notResultBigType value
 * @property {number} feiqin=1 feiqin value
 * @property {number} zoushou=2 zoushou value
 */
$root.ResultBigType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "notResultBigType"] = 0;
    values[valuesById[1] = "feiqin"] = 1;
    values[valuesById[2] = "zoushou"] = 2;
    return values;
})();

$root.StepInfo = (function() {

    /**
     * Properties of a StepInfo.
     * @exports IStepInfo
     * @interface IStepInfo
     * @property {Step} step StepInfo step
     * @property {number} remain StepInfo remain
     */

    /**
     * Constructs a new StepInfo.
     * @exports StepInfo
     * @classdesc Represents a StepInfo.
     * @implements IStepInfo
     * @constructor
     * @param {IStepInfo=} [p] Properties to set
     */
    function StepInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * StepInfo step.
     * @member {Step} step
     * @memberof StepInfo
     * @instance
     */
    StepInfo.prototype.step = 1;

    /**
     * StepInfo remain.
     * @member {number} remain
     * @memberof StepInfo
     * @instance
     */
    StepInfo.prototype.remain = 0;

    /**
     * Creates a new StepInfo instance using the specified properties.
     * @function create
     * @memberof StepInfo
     * @static
     * @param {IStepInfo=} [properties] Properties to set
     * @returns {StepInfo} StepInfo instance
     */
    StepInfo.create = function create(properties) {
        return new StepInfo(properties);
    };

    /**
     * Encodes the specified StepInfo message. Does not implicitly {@link StepInfo.verify|verify} messages.
     * @function encode
     * @memberof StepInfo
     * @static
     * @param {IStepInfo} m StepInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StepInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.step);
        w.uint32(16).int32(m.remain);
        return w;
    };

    /**
     * Decodes a StepInfo message from the specified reader or buffer.
     * @function decode
     * @memberof StepInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {StepInfo} StepInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StepInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.StepInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.step = r.int32();
                break;
            case 2:
                m.remain = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("step"))
            throw $util.ProtocolError("missing required 'step'", { instance: m });
        if (!m.hasOwnProperty("remain"))
            throw $util.ProtocolError("missing required 'remain'", { instance: m });
        return m;
    };

    return StepInfo;
})();

$root.SingleBetInfo = (function() {

    /**
     * Properties of a SingleBetInfo.
     * @exports ISingleBetInfo
     * @interface ISingleBetInfo
     * @property {addChipAnimalEnum} animalEnum SingleBetInfo animalEnum
     * @property {string} BetGold SingleBetInfo BetGold
     */

    /**
     * Constructs a new SingleBetInfo.
     * @exports SingleBetInfo
     * @classdesc Represents a SingleBetInfo.
     * @implements ISingleBetInfo
     * @constructor
     * @param {ISingleBetInfo=} [p] Properties to set
     */
    function SingleBetInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SingleBetInfo animalEnum.
     * @member {addChipAnimalEnum} animalEnum
     * @memberof SingleBetInfo
     * @instance
     */
    SingleBetInfo.prototype.animalEnum = 0;

    /**
     * SingleBetInfo BetGold.
     * @member {string} BetGold
     * @memberof SingleBetInfo
     * @instance
     */
    SingleBetInfo.prototype.BetGold = "";

    /**
     * Creates a new SingleBetInfo instance using the specified properties.
     * @function create
     * @memberof SingleBetInfo
     * @static
     * @param {ISingleBetInfo=} [properties] Properties to set
     * @returns {SingleBetInfo} SingleBetInfo instance
     */
    SingleBetInfo.create = function create(properties) {
        return new SingleBetInfo(properties);
    };

    /**
     * Encodes the specified SingleBetInfo message. Does not implicitly {@link SingleBetInfo.verify|verify} messages.
     * @function encode
     * @memberof SingleBetInfo
     * @static
     * @param {ISingleBetInfo} m SingleBetInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleBetInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(16).int32(m.animalEnum);
        w.uint32(26).string(m.BetGold);
        return w;
    };

    /**
     * Decodes a SingleBetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SingleBetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SingleBetInfo} SingleBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleBetInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SingleBetInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 2:
                m.animalEnum = r.int32();
                break;
            case 3:
                m.BetGold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("animalEnum"))
            throw $util.ProtocolError("missing required 'animalEnum'", { instance: m });
        if (!m.hasOwnProperty("BetGold"))
            throw $util.ProtocolError("missing required 'BetGold'", { instance: m });
        return m;
    };

    return SingleBetInfo;
})();

$root.PlayerBetInfo = (function() {

    /**
     * Properties of a PlayerBetInfo.
     * @exports IPlayerBetInfo
     * @interface IPlayerBetInfo
     * @property {string} playerId PlayerBetInfo playerId
     * @property {Array.<ISingleBetInfo>|null} [singleBetInfo] PlayerBetInfo singleBetInfo
     * @property {number} gold PlayerBetInfo gold
     */

    /**
     * Constructs a new PlayerBetInfo.
     * @exports PlayerBetInfo
     * @classdesc Represents a PlayerBetInfo.
     * @implements IPlayerBetInfo
     * @constructor
     * @param {IPlayerBetInfo=} [p] Properties to set
     */
    function PlayerBetInfo(p) {
        this.singleBetInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerBetInfo playerId.
     * @member {string} playerId
     * @memberof PlayerBetInfo
     * @instance
     */
    PlayerBetInfo.prototype.playerId = "";

    /**
     * PlayerBetInfo singleBetInfo.
     * @member {Array.<ISingleBetInfo>} singleBetInfo
     * @memberof PlayerBetInfo
     * @instance
     */
    PlayerBetInfo.prototype.singleBetInfo = $util.emptyArray;

    /**
     * PlayerBetInfo gold.
     * @member {number} gold
     * @memberof PlayerBetInfo
     * @instance
     */
    PlayerBetInfo.prototype.gold = 0;

    /**
     * Creates a new PlayerBetInfo instance using the specified properties.
     * @function create
     * @memberof PlayerBetInfo
     * @static
     * @param {IPlayerBetInfo=} [properties] Properties to set
     * @returns {PlayerBetInfo} PlayerBetInfo instance
     */
    PlayerBetInfo.create = function create(properties) {
        return new PlayerBetInfo(properties);
    };

    /**
     * Encodes the specified PlayerBetInfo message. Does not implicitly {@link PlayerBetInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerBetInfo
     * @static
     * @param {IPlayerBetInfo} m PlayerBetInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerBetInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.singleBetInfo != null && m.singleBetInfo.length) {
            for (var i = 0; i < m.singleBetInfo.length; ++i)
                $root.SingleBetInfo.encode(m.singleBetInfo[i], w.uint32(18).fork()).ldelim();
        }
        w.uint32(32).int32(m.gold);
        return w;
    };

    /**
     * Decodes a PlayerBetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerBetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerBetInfo} PlayerBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerBetInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerBetInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                if (!(m.singleBetInfo && m.singleBetInfo.length))
                    m.singleBetInfo = [];
                m.singleBetInfo.push($root.SingleBetInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.gold = r.int32();
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

    return PlayerBetInfo;
})();

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {string} playerId PlayerInfo playerId
     * @property {string|null} [name] PlayerInfo name
     * @property {string|null} [headUrl] PlayerInfo headUrl
     * @property {string|null} [gold] PlayerInfo gold
     * @property {string|null} [headBox] PlayerInfo headBox
     * @property {string} vipLevel PlayerInfo vipLevel
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
     * PlayerInfo gold.
     * @member {string} gold
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.gold = "";

    /**
     * PlayerInfo headBox.
     * @member {string} headBox
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.headBox = "";

    /**
     * PlayerInfo vipLevel.
     * @member {string} vipLevel
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.vipLevel = "";

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
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(18).string(m.name);
        if (m.headUrl != null && m.hasOwnProperty("headUrl"))
            w.uint32(26).string(m.headUrl);
        if (m.gold != null && m.hasOwnProperty("gold"))
            w.uint32(34).string(m.gold);
        if (m.headBox != null && m.hasOwnProperty("headBox"))
            w.uint32(42).string(m.headBox);
        w.uint32(50).string(m.vipLevel);
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
                m.name = r.string();
                break;
            case 3:
                m.headUrl = r.string();
                break;
            case 4:
                m.gold = r.string();
                break;
            case 5:
                m.headBox = r.string();
                break;
            case 6:
                m.vipLevel = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("vipLevel"))
            throw $util.ProtocolError("missing required 'vipLevel'", { instance: m });
        return m;
    };

    return PlayerInfo;
})();

$root.MasterInfo = (function() {

    /**
     * Properties of a MasterInfo.
     * @exports IMasterInfo
     * @interface IMasterInfo
     * @property {IPlayerInfo} playerInfo MasterInfo playerInfo
     * @property {number} currentRoun MasterInfo currentRoun
     * @property {boolean} isRequestQuit MasterInfo isRequestQuit
     */

    /**
     * Constructs a new MasterInfo.
     * @exports MasterInfo
     * @classdesc Represents a MasterInfo.
     * @implements IMasterInfo
     * @constructor
     * @param {IMasterInfo=} [p] Properties to set
     */
    function MasterInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MasterInfo playerInfo.
     * @member {IPlayerInfo} playerInfo
     * @memberof MasterInfo
     * @instance
     */
    MasterInfo.prototype.playerInfo = null;

    /**
     * MasterInfo currentRoun.
     * @member {number} currentRoun
     * @memberof MasterInfo
     * @instance
     */
    MasterInfo.prototype.currentRoun = 0;

    /**
     * MasterInfo isRequestQuit.
     * @member {boolean} isRequestQuit
     * @memberof MasterInfo
     * @instance
     */
    MasterInfo.prototype.isRequestQuit = false;

    /**
     * Creates a new MasterInfo instance using the specified properties.
     * @function create
     * @memberof MasterInfo
     * @static
     * @param {IMasterInfo=} [properties] Properties to set
     * @returns {MasterInfo} MasterInfo instance
     */
    MasterInfo.create = function create(properties) {
        return new MasterInfo(properties);
    };

    /**
     * Encodes the specified MasterInfo message. Does not implicitly {@link MasterInfo.verify|verify} messages.
     * @function encode
     * @memberof MasterInfo
     * @static
     * @param {IMasterInfo} m MasterInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MasterInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.PlayerInfo.encode(m.playerInfo, w.uint32(10).fork()).ldelim();
        w.uint32(16).int32(m.currentRoun);
        w.uint32(24).bool(m.isRequestQuit);
        return w;
    };

    /**
     * Decodes a MasterInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MasterInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MasterInfo} MasterInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MasterInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MasterInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerInfo = $root.PlayerInfo.decode(r, r.uint32());
                break;
            case 2:
                m.currentRoun = r.int32();
                break;
            case 3:
                m.isRequestQuit = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerInfo"))
            throw $util.ProtocolError("missing required 'playerInfo'", { instance: m });
        if (!m.hasOwnProperty("currentRoun"))
            throw $util.ProtocolError("missing required 'currentRoun'", { instance: m });
        if (!m.hasOwnProperty("isRequestQuit"))
            throw $util.ProtocolError("missing required 'isRequestQuit'", { instance: m });
        return m;
    };

    return MasterInfo;
})();

$root.AreaBeyInfo = (function() {

    /**
     * Properties of an AreaBeyInfo.
     * @exports IAreaBeyInfo
     * @interface IAreaBeyInfo
     * @property {addChipAnimalEnum} animalEnum AreaBeyInfo animalEnum
     * @property {string} totalBetGold AreaBeyInfo totalBetGold
     */

    /**
     * Constructs a new AreaBeyInfo.
     * @exports AreaBeyInfo
     * @classdesc Represents an AreaBeyInfo.
     * @implements IAreaBeyInfo
     * @constructor
     * @param {IAreaBeyInfo=} [p] Properties to set
     */
    function AreaBeyInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AreaBeyInfo animalEnum.
     * @member {addChipAnimalEnum} animalEnum
     * @memberof AreaBeyInfo
     * @instance
     */
    AreaBeyInfo.prototype.animalEnum = 0;

    /**
     * AreaBeyInfo totalBetGold.
     * @member {string} totalBetGold
     * @memberof AreaBeyInfo
     * @instance
     */
    AreaBeyInfo.prototype.totalBetGold = "";

    /**
     * Creates a new AreaBeyInfo instance using the specified properties.
     * @function create
     * @memberof AreaBeyInfo
     * @static
     * @param {IAreaBeyInfo=} [properties] Properties to set
     * @returns {AreaBeyInfo} AreaBeyInfo instance
     */
    AreaBeyInfo.create = function create(properties) {
        return new AreaBeyInfo(properties);
    };

    /**
     * Encodes the specified AreaBeyInfo message. Does not implicitly {@link AreaBeyInfo.verify|verify} messages.
     * @function encode
     * @memberof AreaBeyInfo
     * @static
     * @param {IAreaBeyInfo} m AreaBeyInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AreaBeyInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.animalEnum);
        w.uint32(18).string(m.totalBetGold);
        return w;
    };

    /**
     * Decodes an AreaBeyInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AreaBeyInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AreaBeyInfo} AreaBeyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AreaBeyInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AreaBeyInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.animalEnum = r.int32();
                break;
            case 2:
                m.totalBetGold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("animalEnum"))
            throw $util.ProtocolError("missing required 'animalEnum'", { instance: m });
        if (!m.hasOwnProperty("totalBetGold"))
            throw $util.ProtocolError("missing required 'totalBetGold'", { instance: m });
        return m;
    };

    return AreaBeyInfo;
})();

$root.ClearingInfo = (function() {

    /**
     * Properties of a ClearingInfo.
     * @exports IClearingInfo
     * @interface IClearingInfo
     * @property {number} firstIndex ClearingInfo firstIndex
     * @property {ResultBigType} firstResultBigType ClearingInfo firstResultBigType
     * @property {number} senondIndex ClearingInfo senondIndex
     * @property {number} myWinGold ClearingInfo myWinGold
     * @property {number} BankerWinGold ClearingInfo BankerWinGold
     * @property {Array.<ISettlementRoleInfo>|null} [settlementRoleInfo] ClearingInfo settlementRoleInfo
     * @property {boolean} hasBet ClearingInfo hasBet
     * @property {Array.<IAreaBeyInfo>|null} [betInfos] ClearingInfo betInfos
     */

    /**
     * Constructs a new ClearingInfo.
     * @exports ClearingInfo
     * @classdesc Represents a ClearingInfo.
     * @implements IClearingInfo
     * @constructor
     * @param {IClearingInfo=} [p] Properties to set
     */
    function ClearingInfo(p) {
        this.settlementRoleInfo = [];
        this.betInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClearingInfo firstIndex.
     * @member {number} firstIndex
     * @memberof ClearingInfo
     * @instance
     */
    ClearingInfo.prototype.firstIndex = 0;

    /**
     * ClearingInfo firstResultBigType.
     * @member {ResultBigType} firstResultBigType
     * @memberof ClearingInfo
     * @instance
     */
    ClearingInfo.prototype.firstResultBigType = 0;

    /**
     * ClearingInfo senondIndex.
     * @member {number} senondIndex
     * @memberof ClearingInfo
     * @instance
     */
    ClearingInfo.prototype.senondIndex = 0;

    /**
     * ClearingInfo myWinGold.
     * @member {number} myWinGold
     * @memberof ClearingInfo
     * @instance
     */
    ClearingInfo.prototype.myWinGold = 0;

    /**
     * ClearingInfo BankerWinGold.
     * @member {number} BankerWinGold
     * @memberof ClearingInfo
     * @instance
     */
    ClearingInfo.prototype.BankerWinGold = 0;

    /**
     * ClearingInfo settlementRoleInfo.
     * @member {Array.<ISettlementRoleInfo>} settlementRoleInfo
     * @memberof ClearingInfo
     * @instance
     */
    ClearingInfo.prototype.settlementRoleInfo = $util.emptyArray;

    /**
     * ClearingInfo hasBet.
     * @member {boolean} hasBet
     * @memberof ClearingInfo
     * @instance
     */
    ClearingInfo.prototype.hasBet = false;

    /**
     * ClearingInfo betInfos.
     * @member {Array.<IAreaBeyInfo>} betInfos
     * @memberof ClearingInfo
     * @instance
     */
    ClearingInfo.prototype.betInfos = $util.emptyArray;

    /**
     * Creates a new ClearingInfo instance using the specified properties.
     * @function create
     * @memberof ClearingInfo
     * @static
     * @param {IClearingInfo=} [properties] Properties to set
     * @returns {ClearingInfo} ClearingInfo instance
     */
    ClearingInfo.create = function create(properties) {
        return new ClearingInfo(properties);
    };

    /**
     * Encodes the specified ClearingInfo message. Does not implicitly {@link ClearingInfo.verify|verify} messages.
     * @function encode
     * @memberof ClearingInfo
     * @static
     * @param {IClearingInfo} m ClearingInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClearingInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.firstIndex);
        w.uint32(16).int32(m.firstResultBigType);
        w.uint32(24).int32(m.senondIndex);
        w.uint32(32).int32(m.myWinGold);
        w.uint32(40).int32(m.BankerWinGold);
        if (m.settlementRoleInfo != null && m.settlementRoleInfo.length) {
            for (var i = 0; i < m.settlementRoleInfo.length; ++i)
                $root.SettlementRoleInfo.encode(m.settlementRoleInfo[i], w.uint32(50).fork()).ldelim();
        }
        w.uint32(56).bool(m.hasBet);
        if (m.betInfos != null && m.betInfos.length) {
            for (var i = 0; i < m.betInfos.length; ++i)
                $root.AreaBeyInfo.encode(m.betInfos[i], w.uint32(66).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a ClearingInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ClearingInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClearingInfo} ClearingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClearingInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClearingInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.firstIndex = r.int32();
                break;
            case 2:
                m.firstResultBigType = r.int32();
                break;
            case 3:
                m.senondIndex = r.int32();
                break;
            case 4:
                m.myWinGold = r.int32();
                break;
            case 5:
                m.BankerWinGold = r.int32();
                break;
            case 6:
                if (!(m.settlementRoleInfo && m.settlementRoleInfo.length))
                    m.settlementRoleInfo = [];
                m.settlementRoleInfo.push($root.SettlementRoleInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.hasBet = r.bool();
                break;
            case 8:
                if (!(m.betInfos && m.betInfos.length))
                    m.betInfos = [];
                m.betInfos.push($root.AreaBeyInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("firstIndex"))
            throw $util.ProtocolError("missing required 'firstIndex'", { instance: m });
        if (!m.hasOwnProperty("firstResultBigType"))
            throw $util.ProtocolError("missing required 'firstResultBigType'", { instance: m });
        if (!m.hasOwnProperty("senondIndex"))
            throw $util.ProtocolError("missing required 'senondIndex'", { instance: m });
        if (!m.hasOwnProperty("myWinGold"))
            throw $util.ProtocolError("missing required 'myWinGold'", { instance: m });
        if (!m.hasOwnProperty("BankerWinGold"))
            throw $util.ProtocolError("missing required 'BankerWinGold'", { instance: m });
        if (!m.hasOwnProperty("hasBet"))
            throw $util.ProtocolError("missing required 'hasBet'", { instance: m });
        return m;
    };

    return ClearingInfo;
})();

$root.RoomInfoPush = (function() {

    /**
     * Properties of a RoomInfoPush.
     * @exports IRoomInfoPush
     * @interface IRoomInfoPush
     * @property {Array.<IPlayerInfo>|null} [onlinePlayerInfos] RoomInfoPush onlinePlayerInfos
     * @property {IMasterInfo} masterInfo RoomInfoPush masterInfo
     * @property {Array.<ShowAnimalEnum>|null} [last8Result] RoomInfoPush last8Result
     * @property {IPlayerInfo} myInfo RoomInfoPush myInfo
     * @property {Array.<IPlayerBetInfo>|null} [betInfos] RoomInfoPush betInfos
     * @property {IStepInfo} stepInfo RoomInfoPush stepInfo
     * @property {IClearingInfo|null} [clearingInfo] RoomInfoPush clearingInfo
     * @property {number} lastRoundAnimalIndex RoomInfoPush lastRoundAnimalIndex
     * @property {number} betBaseLimit RoomInfoPush betBaseLimit
     * @property {number} roundBetCoinLimit RoomInfoPush roundBetCoinLimit
     * @property {number} bankerGoldLimit RoomInfoPush bankerGoldLimit
     * @property {number|null} [animalKeyLimit_1] RoomInfoPush animalKeyLimit_1
     * @property {number|null} [animalKeyLimit_2] RoomInfoPush animalKeyLimit_2
     * @property {number|null} [animalKeyLimit_3] RoomInfoPush animalKeyLimit_3
     * @property {number|null} [animalKeyLimit_4] RoomInfoPush animalKeyLimit_4
     * @property {number|null} [animalKeyLimit_5] RoomInfoPush animalKeyLimit_5
     * @property {number|null} [animalKeyLimit_6] RoomInfoPush animalKeyLimit_6
     * @property {number|null} [animalKeyLimit_7] RoomInfoPush animalKeyLimit_7
     * @property {number|null} [animalKeyLimit_8] RoomInfoPush animalKeyLimit_8
     * @property {number|null} [animalKeyLimit_9] RoomInfoPush animalKeyLimit_9
     * @property {number|null} [animalKeyLimit_101] RoomInfoPush animalKeyLimit_101
     * @property {number|null} [animalKeyLimit_201] RoomInfoPush animalKeyLimit_201
     */

    /**
     * Constructs a new RoomInfoPush.
     * @exports RoomInfoPush
     * @classdesc Represents a RoomInfoPush.
     * @implements IRoomInfoPush
     * @constructor
     * @param {IRoomInfoPush=} [p] Properties to set
     */
    function RoomInfoPush(p) {
        this.onlinePlayerInfos = [];
        this.last8Result = [];
        this.betInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomInfoPush onlinePlayerInfos.
     * @member {Array.<IPlayerInfo>} onlinePlayerInfos
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.onlinePlayerInfos = $util.emptyArray;

    /**
     * RoomInfoPush masterInfo.
     * @member {IMasterInfo} masterInfo
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.masterInfo = null;

    /**
     * RoomInfoPush last8Result.
     * @member {Array.<ShowAnimalEnum>} last8Result
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.last8Result = $util.emptyArray;

    /**
     * RoomInfoPush myInfo.
     * @member {IPlayerInfo} myInfo
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.myInfo = null;

    /**
     * RoomInfoPush betInfos.
     * @member {Array.<IPlayerBetInfo>} betInfos
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.betInfos = $util.emptyArray;

    /**
     * RoomInfoPush stepInfo.
     * @member {IStepInfo} stepInfo
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.stepInfo = null;

    /**
     * RoomInfoPush clearingInfo.
     * @member {IClearingInfo|null|undefined} clearingInfo
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.clearingInfo = null;

    /**
     * RoomInfoPush lastRoundAnimalIndex.
     * @member {number} lastRoundAnimalIndex
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.lastRoundAnimalIndex = 0;

    /**
     * RoomInfoPush betBaseLimit.
     * @member {number} betBaseLimit
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.betBaseLimit = 0;

    /**
     * RoomInfoPush roundBetCoinLimit.
     * @member {number} roundBetCoinLimit
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.roundBetCoinLimit = 0;

    /**
     * RoomInfoPush bankerGoldLimit.
     * @member {number} bankerGoldLimit
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.bankerGoldLimit = 0;

    /**
     * RoomInfoPush animalKeyLimit_1.
     * @member {number} animalKeyLimit_1
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_1 = 0;

    /**
     * RoomInfoPush animalKeyLimit_2.
     * @member {number} animalKeyLimit_2
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_2 = 0;

    /**
     * RoomInfoPush animalKeyLimit_3.
     * @member {number} animalKeyLimit_3
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_3 = 0;

    /**
     * RoomInfoPush animalKeyLimit_4.
     * @member {number} animalKeyLimit_4
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_4 = 0;

    /**
     * RoomInfoPush animalKeyLimit_5.
     * @member {number} animalKeyLimit_5
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_5 = 0;

    /**
     * RoomInfoPush animalKeyLimit_6.
     * @member {number} animalKeyLimit_6
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_6 = 0;

    /**
     * RoomInfoPush animalKeyLimit_7.
     * @member {number} animalKeyLimit_7
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_7 = 0;

    /**
     * RoomInfoPush animalKeyLimit_8.
     * @member {number} animalKeyLimit_8
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_8 = 0;

    /**
     * RoomInfoPush animalKeyLimit_9.
     * @member {number} animalKeyLimit_9
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_9 = 0;

    /**
     * RoomInfoPush animalKeyLimit_101.
     * @member {number} animalKeyLimit_101
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_101 = 0;

    /**
     * RoomInfoPush animalKeyLimit_201.
     * @member {number} animalKeyLimit_201
     * @memberof RoomInfoPush
     * @instance
     */
    RoomInfoPush.prototype.animalKeyLimit_201 = 0;

    /**
     * Creates a new RoomInfoPush instance using the specified properties.
     * @function create
     * @memberof RoomInfoPush
     * @static
     * @param {IRoomInfoPush=} [properties] Properties to set
     * @returns {RoomInfoPush} RoomInfoPush instance
     */
    RoomInfoPush.create = function create(properties) {
        return new RoomInfoPush(properties);
    };

    /**
     * Encodes the specified RoomInfoPush message. Does not implicitly {@link RoomInfoPush.verify|verify} messages.
     * @function encode
     * @memberof RoomInfoPush
     * @static
     * @param {IRoomInfoPush} m RoomInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfoPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.onlinePlayerInfos != null && m.onlinePlayerInfos.length) {
            for (var i = 0; i < m.onlinePlayerInfos.length; ++i)
                $root.PlayerInfo.encode(m.onlinePlayerInfos[i], w.uint32(10).fork()).ldelim();
        }
        $root.MasterInfo.encode(m.masterInfo, w.uint32(18).fork()).ldelim();
        if (m.last8Result != null && m.last8Result.length) {
            for (var i = 0; i < m.last8Result.length; ++i)
                w.uint32(24).int32(m.last8Result[i]);
        }
        $root.PlayerInfo.encode(m.myInfo, w.uint32(34).fork()).ldelim();
        if (m.betInfos != null && m.betInfos.length) {
            for (var i = 0; i < m.betInfos.length; ++i)
                $root.PlayerBetInfo.encode(m.betInfos[i], w.uint32(42).fork()).ldelim();
        }
        $root.StepInfo.encode(m.stepInfo, w.uint32(50).fork()).ldelim();
        if (m.clearingInfo != null && m.hasOwnProperty("clearingInfo"))
            $root.ClearingInfo.encode(m.clearingInfo, w.uint32(58).fork()).ldelim();
        w.uint32(64).int32(m.lastRoundAnimalIndex);
        w.uint32(72).int32(m.betBaseLimit);
        w.uint32(80).int32(m.roundBetCoinLimit);
        w.uint32(88).int32(m.bankerGoldLimit);
        if (m.animalKeyLimit_1 != null && m.hasOwnProperty("animalKeyLimit_1"))
            w.uint32(96).int32(m.animalKeyLimit_1);
        if (m.animalKeyLimit_2 != null && m.hasOwnProperty("animalKeyLimit_2"))
            w.uint32(104).int32(m.animalKeyLimit_2);
        if (m.animalKeyLimit_3 != null && m.hasOwnProperty("animalKeyLimit_3"))
            w.uint32(112).int32(m.animalKeyLimit_3);
        if (m.animalKeyLimit_4 != null && m.hasOwnProperty("animalKeyLimit_4"))
            w.uint32(120).int32(m.animalKeyLimit_4);
        if (m.animalKeyLimit_5 != null && m.hasOwnProperty("animalKeyLimit_5"))
            w.uint32(128).int32(m.animalKeyLimit_5);
        if (m.animalKeyLimit_6 != null && m.hasOwnProperty("animalKeyLimit_6"))
            w.uint32(136).int32(m.animalKeyLimit_6);
        if (m.animalKeyLimit_7 != null && m.hasOwnProperty("animalKeyLimit_7"))
            w.uint32(144).int32(m.animalKeyLimit_7);
        if (m.animalKeyLimit_8 != null && m.hasOwnProperty("animalKeyLimit_8"))
            w.uint32(152).int32(m.animalKeyLimit_8);
        if (m.animalKeyLimit_9 != null && m.hasOwnProperty("animalKeyLimit_9"))
            w.uint32(160).int32(m.animalKeyLimit_9);
        if (m.animalKeyLimit_101 != null && m.hasOwnProperty("animalKeyLimit_101"))
            w.uint32(168).int32(m.animalKeyLimit_101);
        if (m.animalKeyLimit_201 != null && m.hasOwnProperty("animalKeyLimit_201"))
            w.uint32(176).int32(m.animalKeyLimit_201);
        return w;
    };

    /**
     * Decodes a RoomInfoPush message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomInfoPush} RoomInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfoPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomInfoPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.onlinePlayerInfos && m.onlinePlayerInfos.length))
                    m.onlinePlayerInfos = [];
                m.onlinePlayerInfos.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.masterInfo = $root.MasterInfo.decode(r, r.uint32());
                break;
            case 3:
                if (!(m.last8Result && m.last8Result.length))
                    m.last8Result = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.last8Result.push(r.int32());
                } else
                    m.last8Result.push(r.int32());
                break;
            case 4:
                m.myInfo = $root.PlayerInfo.decode(r, r.uint32());
                break;
            case 5:
                if (!(m.betInfos && m.betInfos.length))
                    m.betInfos = [];
                m.betInfos.push($root.PlayerBetInfo.decode(r, r.uint32()));
                break;
            case 6:
                m.stepInfo = $root.StepInfo.decode(r, r.uint32());
                break;
            case 7:
                m.clearingInfo = $root.ClearingInfo.decode(r, r.uint32());
                break;
            case 8:
                m.lastRoundAnimalIndex = r.int32();
                break;
            case 9:
                m.betBaseLimit = r.int32();
                break;
            case 10:
                m.roundBetCoinLimit = r.int32();
                break;
            case 11:
                m.bankerGoldLimit = r.int32();
                break;
            case 12:
                m.animalKeyLimit_1 = r.int32();
                break;
            case 13:
                m.animalKeyLimit_2 = r.int32();
                break;
            case 14:
                m.animalKeyLimit_3 = r.int32();
                break;
            case 15:
                m.animalKeyLimit_4 = r.int32();
                break;
            case 16:
                m.animalKeyLimit_5 = r.int32();
                break;
            case 17:
                m.animalKeyLimit_6 = r.int32();
                break;
            case 18:
                m.animalKeyLimit_7 = r.int32();
                break;
            case 19:
                m.animalKeyLimit_8 = r.int32();
                break;
            case 20:
                m.animalKeyLimit_9 = r.int32();
                break;
            case 21:
                m.animalKeyLimit_101 = r.int32();
                break;
            case 22:
                m.animalKeyLimit_201 = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("masterInfo"))
            throw $util.ProtocolError("missing required 'masterInfo'", { instance: m });
        if (!m.hasOwnProperty("myInfo"))
            throw $util.ProtocolError("missing required 'myInfo'", { instance: m });
        if (!m.hasOwnProperty("stepInfo"))
            throw $util.ProtocolError("missing required 'stepInfo'", { instance: m });
        if (!m.hasOwnProperty("lastRoundAnimalIndex"))
            throw $util.ProtocolError("missing required 'lastRoundAnimalIndex'", { instance: m });
        if (!m.hasOwnProperty("betBaseLimit"))
            throw $util.ProtocolError("missing required 'betBaseLimit'", { instance: m });
        if (!m.hasOwnProperty("roundBetCoinLimit"))
            throw $util.ProtocolError("missing required 'roundBetCoinLimit'", { instance: m });
        if (!m.hasOwnProperty("bankerGoldLimit"))
            throw $util.ProtocolError("missing required 'bankerGoldLimit'", { instance: m });
        return m;
    };

    return RoomInfoPush;
})();

$root.BetReq = (function() {

    /**
     * Properties of a BetReq.
     * @exports IBetReq
     * @interface IBetReq
     * @property {addChipAnimalEnum} animalEnum BetReq animalEnum
     * @property {number} betMoney BetReq betMoney
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
     * BetReq animalEnum.
     * @member {addChipAnimalEnum} animalEnum
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.animalEnum = 0;

    /**
     * BetReq betMoney.
     * @member {number} betMoney
     * @memberof BetReq
     * @instance
     */
    BetReq.prototype.betMoney = 0;

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
        w.uint32(8).int32(m.animalEnum);
        w.uint32(16).int32(m.betMoney);
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
                m.animalEnum = r.int32();
                break;
            case 2:
                m.betMoney = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("animalEnum"))
            throw $util.ProtocolError("missing required 'animalEnum'", { instance: m });
        if (!m.hasOwnProperty("betMoney"))
            throw $util.ProtocolError("missing required 'betMoney'", { instance: m });
        return m;
    };

    return BetReq;
})();

$root.BetRsp = (function() {

    /**
     * Properties of a BetRsp.
     * @exports IBetRsp
     * @interface IBetRsp
     * @property {boolean} success BetRsp success
     * @property {string} tip BetRsp tip
     */

    /**
     * Constructs a new BetRsp.
     * @exports BetRsp
     * @classdesc Represents a BetRsp.
     * @implements IBetRsp
     * @constructor
     * @param {IBetRsp=} [p] Properties to set
     */
    function BetRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetRsp success.
     * @member {boolean} success
     * @memberof BetRsp
     * @instance
     */
    BetRsp.prototype.success = false;

    /**
     * BetRsp tip.
     * @member {string} tip
     * @memberof BetRsp
     * @instance
     */
    BetRsp.prototype.tip = "";

    /**
     * Creates a new BetRsp instance using the specified properties.
     * @function create
     * @memberof BetRsp
     * @static
     * @param {IBetRsp=} [properties] Properties to set
     * @returns {BetRsp} BetRsp instance
     */
    BetRsp.create = function create(properties) {
        return new BetRsp(properties);
    };

    /**
     * Encodes the specified BetRsp message. Does not implicitly {@link BetRsp.verify|verify} messages.
     * @function encode
     * @memberof BetRsp
     * @static
     * @param {IBetRsp} m BetRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a BetRsp message from the specified reader or buffer.
     * @function decode
     * @memberof BetRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetRsp} BetRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("tip"))
            throw $util.ProtocolError("missing required 'tip'", { instance: m });
        return m;
    };

    return BetRsp;
})();

$root.SingleReqBet = (function() {

    /**
     * Properties of a SingleReqBet.
     * @exports ISingleReqBet
     * @interface ISingleReqBet
     * @property {addChipAnimalEnum} animalEnum SingleReqBet animalEnum
     * @property {number} betMoney SingleReqBet betMoney
     */

    /**
     * Constructs a new SingleReqBet.
     * @exports SingleReqBet
     * @classdesc Represents a SingleReqBet.
     * @implements ISingleReqBet
     * @constructor
     * @param {ISingleReqBet=} [p] Properties to set
     */
    function SingleReqBet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SingleReqBet animalEnum.
     * @member {addChipAnimalEnum} animalEnum
     * @memberof SingleReqBet
     * @instance
     */
    SingleReqBet.prototype.animalEnum = 0;

    /**
     * SingleReqBet betMoney.
     * @member {number} betMoney
     * @memberof SingleReqBet
     * @instance
     */
    SingleReqBet.prototype.betMoney = 0;

    /**
     * Creates a new SingleReqBet instance using the specified properties.
     * @function create
     * @memberof SingleReqBet
     * @static
     * @param {ISingleReqBet=} [properties] Properties to set
     * @returns {SingleReqBet} SingleReqBet instance
     */
    SingleReqBet.create = function create(properties) {
        return new SingleReqBet(properties);
    };

    /**
     * Encodes the specified SingleReqBet message. Does not implicitly {@link SingleReqBet.verify|verify} messages.
     * @function encode
     * @memberof SingleReqBet
     * @static
     * @param {ISingleReqBet} m SingleReqBet message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleReqBet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.animalEnum);
        w.uint32(16).int32(m.betMoney);
        return w;
    };

    /**
     * Decodes a SingleReqBet message from the specified reader or buffer.
     * @function decode
     * @memberof SingleReqBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SingleReqBet} SingleReqBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleReqBet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SingleReqBet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.animalEnum = r.int32();
                break;
            case 2:
                m.betMoney = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("animalEnum"))
            throw $util.ProtocolError("missing required 'animalEnum'", { instance: m });
        if (!m.hasOwnProperty("betMoney"))
            throw $util.ProtocolError("missing required 'betMoney'", { instance: m });
        return m;
    };

    return SingleReqBet;
})();

$root.BetMultiReq = (function() {

    /**
     * Properties of a BetMultiReq.
     * @exports IBetMultiReq
     * @interface IBetMultiReq
     * @property {Array.<ISingleReqBet>|null} [singleBet] BetMultiReq singleBet
     */

    /**
     * Constructs a new BetMultiReq.
     * @exports BetMultiReq
     * @classdesc Represents a BetMultiReq.
     * @implements IBetMultiReq
     * @constructor
     * @param {IBetMultiReq=} [p] Properties to set
     */
    function BetMultiReq(p) {
        this.singleBet = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetMultiReq singleBet.
     * @member {Array.<ISingleReqBet>} singleBet
     * @memberof BetMultiReq
     * @instance
     */
    BetMultiReq.prototype.singleBet = $util.emptyArray;

    /**
     * Creates a new BetMultiReq instance using the specified properties.
     * @function create
     * @memberof BetMultiReq
     * @static
     * @param {IBetMultiReq=} [properties] Properties to set
     * @returns {BetMultiReq} BetMultiReq instance
     */
    BetMultiReq.create = function create(properties) {
        return new BetMultiReq(properties);
    };

    /**
     * Encodes the specified BetMultiReq message. Does not implicitly {@link BetMultiReq.verify|verify} messages.
     * @function encode
     * @memberof BetMultiReq
     * @static
     * @param {IBetMultiReq} m BetMultiReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetMultiReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.singleBet != null && m.singleBet.length) {
            for (var i = 0; i < m.singleBet.length; ++i)
                $root.SingleReqBet.encode(m.singleBet[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BetMultiReq message from the specified reader or buffer.
     * @function decode
     * @memberof BetMultiReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetMultiReq} BetMultiReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetMultiReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetMultiReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.singleBet && m.singleBet.length))
                    m.singleBet = [];
                m.singleBet.push($root.SingleReqBet.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BetMultiReq;
})();

$root.BetMultiRsp = (function() {

    /**
     * Properties of a BetMultiRsp.
     * @exports IBetMultiRsp
     * @interface IBetMultiRsp
     * @property {boolean} success BetMultiRsp success
     * @property {string} tip BetMultiRsp tip
     */

    /**
     * Constructs a new BetMultiRsp.
     * @exports BetMultiRsp
     * @classdesc Represents a BetMultiRsp.
     * @implements IBetMultiRsp
     * @constructor
     * @param {IBetMultiRsp=} [p] Properties to set
     */
    function BetMultiRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetMultiRsp success.
     * @member {boolean} success
     * @memberof BetMultiRsp
     * @instance
     */
    BetMultiRsp.prototype.success = false;

    /**
     * BetMultiRsp tip.
     * @member {string} tip
     * @memberof BetMultiRsp
     * @instance
     */
    BetMultiRsp.prototype.tip = "";

    /**
     * Creates a new BetMultiRsp instance using the specified properties.
     * @function create
     * @memberof BetMultiRsp
     * @static
     * @param {IBetMultiRsp=} [properties] Properties to set
     * @returns {BetMultiRsp} BetMultiRsp instance
     */
    BetMultiRsp.create = function create(properties) {
        return new BetMultiRsp(properties);
    };

    /**
     * Encodes the specified BetMultiRsp message. Does not implicitly {@link BetMultiRsp.verify|verify} messages.
     * @function encode
     * @memberof BetMultiRsp
     * @static
     * @param {IBetMultiRsp} m BetMultiRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetMultiRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a BetMultiRsp message from the specified reader or buffer.
     * @function decode
     * @memberof BetMultiRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetMultiRsp} BetMultiRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetMultiRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetMultiRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("tip"))
            throw $util.ProtocolError("missing required 'tip'", { instance: m });
        return m;
    };

    return BetMultiRsp;
})();

$root.BetInfoPush = (function() {

    /**
     * Properties of a BetInfoPush.
     * @exports IBetInfoPush
     * @interface IBetInfoPush
     * @property {Array.<IPlayerBetInfo>|null} [playerBetInfo] BetInfoPush playerBetInfo
     */

    /**
     * Constructs a new BetInfoPush.
     * @exports BetInfoPush
     * @classdesc Represents a BetInfoPush.
     * @implements IBetInfoPush
     * @constructor
     * @param {IBetInfoPush=} [p] Properties to set
     */
    function BetInfoPush(p) {
        this.playerBetInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BetInfoPush playerBetInfo.
     * @member {Array.<IPlayerBetInfo>} playerBetInfo
     * @memberof BetInfoPush
     * @instance
     */
    BetInfoPush.prototype.playerBetInfo = $util.emptyArray;

    /**
     * Creates a new BetInfoPush instance using the specified properties.
     * @function create
     * @memberof BetInfoPush
     * @static
     * @param {IBetInfoPush=} [properties] Properties to set
     * @returns {BetInfoPush} BetInfoPush instance
     */
    BetInfoPush.create = function create(properties) {
        return new BetInfoPush(properties);
    };

    /**
     * Encodes the specified BetInfoPush message. Does not implicitly {@link BetInfoPush.verify|verify} messages.
     * @function encode
     * @memberof BetInfoPush
     * @static
     * @param {IBetInfoPush} m BetInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetInfoPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerBetInfo != null && m.playerBetInfo.length) {
            for (var i = 0; i < m.playerBetInfo.length; ++i)
                $root.PlayerBetInfo.encode(m.playerBetInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BetInfoPush message from the specified reader or buffer.
     * @function decode
     * @memberof BetInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BetInfoPush} BetInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetInfoPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BetInfoPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerBetInfo && m.playerBetInfo.length))
                    m.playerBetInfo = [];
                m.playerBetInfo.push($root.PlayerBetInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BetInfoPush;
})();

$root.ApplyBankReq = (function() {

    /**
     * Properties of an ApplyBankReq.
     * @exports IApplyBankReq
     * @interface IApplyBankReq
     */

    /**
     * Constructs a new ApplyBankReq.
     * @exports ApplyBankReq
     * @classdesc Represents an ApplyBankReq.
     * @implements IApplyBankReq
     * @constructor
     * @param {IApplyBankReq=} [p] Properties to set
     */
    function ApplyBankReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ApplyBankReq instance using the specified properties.
     * @function create
     * @memberof ApplyBankReq
     * @static
     * @param {IApplyBankReq=} [properties] Properties to set
     * @returns {ApplyBankReq} ApplyBankReq instance
     */
    ApplyBankReq.create = function create(properties) {
        return new ApplyBankReq(properties);
    };

    /**
     * Encodes the specified ApplyBankReq message. Does not implicitly {@link ApplyBankReq.verify|verify} messages.
     * @function encode
     * @memberof ApplyBankReq
     * @static
     * @param {IApplyBankReq} m ApplyBankReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyBankReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes an ApplyBankReq message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyBankReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ApplyBankReq} ApplyBankReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyBankReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ApplyBankReq();
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

    return ApplyBankReq;
})();

$root.ApplyBankRsp = (function() {

    /**
     * Properties of an ApplyBankRsp.
     * @exports IApplyBankRsp
     * @interface IApplyBankRsp
     * @property {boolean} success ApplyBankRsp success
     * @property {string} tip ApplyBankRsp tip
     */

    /**
     * Constructs a new ApplyBankRsp.
     * @exports ApplyBankRsp
     * @classdesc Represents an ApplyBankRsp.
     * @implements IApplyBankRsp
     * @constructor
     * @param {IApplyBankRsp=} [p] Properties to set
     */
    function ApplyBankRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ApplyBankRsp success.
     * @member {boolean} success
     * @memberof ApplyBankRsp
     * @instance
     */
    ApplyBankRsp.prototype.success = false;

    /**
     * ApplyBankRsp tip.
     * @member {string} tip
     * @memberof ApplyBankRsp
     * @instance
     */
    ApplyBankRsp.prototype.tip = "";

    /**
     * Creates a new ApplyBankRsp instance using the specified properties.
     * @function create
     * @memberof ApplyBankRsp
     * @static
     * @param {IApplyBankRsp=} [properties] Properties to set
     * @returns {ApplyBankRsp} ApplyBankRsp instance
     */
    ApplyBankRsp.create = function create(properties) {
        return new ApplyBankRsp(properties);
    };

    /**
     * Encodes the specified ApplyBankRsp message. Does not implicitly {@link ApplyBankRsp.verify|verify} messages.
     * @function encode
     * @memberof ApplyBankRsp
     * @static
     * @param {IApplyBankRsp} m ApplyBankRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyBankRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes an ApplyBankRsp message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyBankRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ApplyBankRsp} ApplyBankRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyBankRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ApplyBankRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("tip"))
            throw $util.ProtocolError("missing required 'tip'", { instance: m });
        return m;
    };

    return ApplyBankRsp;
})();

$root.StepInfoPush = (function() {

    /**
     * Properties of a StepInfoPush.
     * @exports IStepInfoPush
     * @interface IStepInfoPush
     * @property {IStepInfo} stepInfo StepInfoPush stepInfo
     */

    /**
     * Constructs a new StepInfoPush.
     * @exports StepInfoPush
     * @classdesc Represents a StepInfoPush.
     * @implements IStepInfoPush
     * @constructor
     * @param {IStepInfoPush=} [p] Properties to set
     */
    function StepInfoPush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * StepInfoPush stepInfo.
     * @member {IStepInfo} stepInfo
     * @memberof StepInfoPush
     * @instance
     */
    StepInfoPush.prototype.stepInfo = null;

    /**
     * Creates a new StepInfoPush instance using the specified properties.
     * @function create
     * @memberof StepInfoPush
     * @static
     * @param {IStepInfoPush=} [properties] Properties to set
     * @returns {StepInfoPush} StepInfoPush instance
     */
    StepInfoPush.create = function create(properties) {
        return new StepInfoPush(properties);
    };

    /**
     * Encodes the specified StepInfoPush message. Does not implicitly {@link StepInfoPush.verify|verify} messages.
     * @function encode
     * @memberof StepInfoPush
     * @static
     * @param {IStepInfoPush} m StepInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StepInfoPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.StepInfo.encode(m.stepInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a StepInfoPush message from the specified reader or buffer.
     * @function decode
     * @memberof StepInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {StepInfoPush} StepInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StepInfoPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.StepInfoPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.stepInfo = $root.StepInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("stepInfo"))
            throw $util.ProtocolError("missing required 'stepInfo'", { instance: m });
        return m;
    };

    return StepInfoPush;
})();

$root.leaveRoomReq = (function() {

    /**
     * Properties of a leaveRoomReq.
     * @exports IleaveRoomReq
     * @interface IleaveRoomReq
     */

    /**
     * Constructs a new leaveRoomReq.
     * @exports leaveRoomReq
     * @classdesc Represents a leaveRoomReq.
     * @implements IleaveRoomReq
     * @constructor
     * @param {IleaveRoomReq=} [p] Properties to set
     */
    function leaveRoomReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new leaveRoomReq instance using the specified properties.
     * @function create
     * @memberof leaveRoomReq
     * @static
     * @param {IleaveRoomReq=} [properties] Properties to set
     * @returns {leaveRoomReq} leaveRoomReq instance
     */
    leaveRoomReq.create = function create(properties) {
        return new leaveRoomReq(properties);
    };

    /**
     * Encodes the specified leaveRoomReq message. Does not implicitly {@link leaveRoomReq.verify|verify} messages.
     * @function encode
     * @memberof leaveRoomReq
     * @static
     * @param {IleaveRoomReq} m leaveRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    leaveRoomReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a leaveRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof leaveRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {leaveRoomReq} leaveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    leaveRoomReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.leaveRoomReq();
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

    return leaveRoomReq;
})();

$root.leaveRoomRsp = (function() {

    /**
     * Properties of a leaveRoomRsp.
     * @exports IleaveRoomRsp
     * @interface IleaveRoomRsp
     * @property {boolean} success leaveRoomRsp success
     */

    /**
     * Constructs a new leaveRoomRsp.
     * @exports leaveRoomRsp
     * @classdesc Represents a leaveRoomRsp.
     * @implements IleaveRoomRsp
     * @constructor
     * @param {IleaveRoomRsp=} [p] Properties to set
     */
    function leaveRoomRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * leaveRoomRsp success.
     * @member {boolean} success
     * @memberof leaveRoomRsp
     * @instance
     */
    leaveRoomRsp.prototype.success = false;

    /**
     * Creates a new leaveRoomRsp instance using the specified properties.
     * @function create
     * @memberof leaveRoomRsp
     * @static
     * @param {IleaveRoomRsp=} [properties] Properties to set
     * @returns {leaveRoomRsp} leaveRoomRsp instance
     */
    leaveRoomRsp.create = function create(properties) {
        return new leaveRoomRsp(properties);
    };

    /**
     * Encodes the specified leaveRoomRsp message. Does not implicitly {@link leaveRoomRsp.verify|verify} messages.
     * @function encode
     * @memberof leaveRoomRsp
     * @static
     * @param {IleaveRoomRsp} m leaveRoomRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    leaveRoomRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        return w;
    };

    /**
     * Decodes a leaveRoomRsp message from the specified reader or buffer.
     * @function decode
     * @memberof leaveRoomRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {leaveRoomRsp} leaveRoomRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    leaveRoomRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.leaveRoomRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
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

    return leaveRoomRsp;
})();

$root.BankChangePush = (function() {

    /**
     * Properties of a BankChangePush.
     * @exports IBankChangePush
     * @interface IBankChangePush
     * @property {IMasterInfo} masterInfo BankChangePush masterInfo
     */

    /**
     * Constructs a new BankChangePush.
     * @exports BankChangePush
     * @classdesc Represents a BankChangePush.
     * @implements IBankChangePush
     * @constructor
     * @param {IBankChangePush=} [p] Properties to set
     */
    function BankChangePush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BankChangePush masterInfo.
     * @member {IMasterInfo} masterInfo
     * @memberof BankChangePush
     * @instance
     */
    BankChangePush.prototype.masterInfo = null;

    /**
     * Creates a new BankChangePush instance using the specified properties.
     * @function create
     * @memberof BankChangePush
     * @static
     * @param {IBankChangePush=} [properties] Properties to set
     * @returns {BankChangePush} BankChangePush instance
     */
    BankChangePush.create = function create(properties) {
        return new BankChangePush(properties);
    };

    /**
     * Encodes the specified BankChangePush message. Does not implicitly {@link BankChangePush.verify|verify} messages.
     * @function encode
     * @memberof BankChangePush
     * @static
     * @param {IBankChangePush} m BankChangePush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BankChangePush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.MasterInfo.encode(m.masterInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a BankChangePush message from the specified reader or buffer.
     * @function decode
     * @memberof BankChangePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BankChangePush} BankChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BankChangePush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BankChangePush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.masterInfo = $root.MasterInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("masterInfo"))
            throw $util.ProtocolError("missing required 'masterInfo'", { instance: m });
        return m;
    };

    return BankChangePush;
})();

$root.PlayerLeavePush = (function() {

    /**
     * Properties of a PlayerLeavePush.
     * @exports IPlayerLeavePush
     * @interface IPlayerLeavePush
     * @property {Array.<string>|null} [players] PlayerLeavePush players
     */

    /**
     * Constructs a new PlayerLeavePush.
     * @exports PlayerLeavePush
     * @classdesc Represents a PlayerLeavePush.
     * @implements IPlayerLeavePush
     * @constructor
     * @param {IPlayerLeavePush=} [p] Properties to set
     */
    function PlayerLeavePush(p) {
        this.players = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerLeavePush players.
     * @member {Array.<string>} players
     * @memberof PlayerLeavePush
     * @instance
     */
    PlayerLeavePush.prototype.players = $util.emptyArray;

    /**
     * Creates a new PlayerLeavePush instance using the specified properties.
     * @function create
     * @memberof PlayerLeavePush
     * @static
     * @param {IPlayerLeavePush=} [properties] Properties to set
     * @returns {PlayerLeavePush} PlayerLeavePush instance
     */
    PlayerLeavePush.create = function create(properties) {
        return new PlayerLeavePush(properties);
    };

    /**
     * Encodes the specified PlayerLeavePush message. Does not implicitly {@link PlayerLeavePush.verify|verify} messages.
     * @function encode
     * @memberof PlayerLeavePush
     * @static
     * @param {IPlayerLeavePush} m PlayerLeavePush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerLeavePush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                w.uint32(10).string(m.players[i]);
        }
        return w;
    };

    /**
     * Decodes a PlayerLeavePush message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerLeavePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerLeavePush} PlayerLeavePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerLeavePush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerLeavePush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push(r.string());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerLeavePush;
})();

$root.ClearingInfoPush = (function() {

    /**
     * Properties of a ClearingInfoPush.
     * @exports IClearingInfoPush
     * @interface IClearingInfoPush
     * @property {IClearingInfo} clearingInfo ClearingInfoPush clearingInfo
     */

    /**
     * Constructs a new ClearingInfoPush.
     * @exports ClearingInfoPush
     * @classdesc Represents a ClearingInfoPush.
     * @implements IClearingInfoPush
     * @constructor
     * @param {IClearingInfoPush=} [p] Properties to set
     */
    function ClearingInfoPush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClearingInfoPush clearingInfo.
     * @member {IClearingInfo} clearingInfo
     * @memberof ClearingInfoPush
     * @instance
     */
    ClearingInfoPush.prototype.clearingInfo = null;

    /**
     * Creates a new ClearingInfoPush instance using the specified properties.
     * @function create
     * @memberof ClearingInfoPush
     * @static
     * @param {IClearingInfoPush=} [properties] Properties to set
     * @returns {ClearingInfoPush} ClearingInfoPush instance
     */
    ClearingInfoPush.create = function create(properties) {
        return new ClearingInfoPush(properties);
    };

    /**
     * Encodes the specified ClearingInfoPush message. Does not implicitly {@link ClearingInfoPush.verify|verify} messages.
     * @function encode
     * @memberof ClearingInfoPush
     * @static
     * @param {IClearingInfoPush} m ClearingInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClearingInfoPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.ClearingInfo.encode(m.clearingInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a ClearingInfoPush message from the specified reader or buffer.
     * @function decode
     * @memberof ClearingInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClearingInfoPush} ClearingInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClearingInfoPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClearingInfoPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clearingInfo = $root.ClearingInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("clearingInfo"))
            throw $util.ProtocolError("missing required 'clearingInfo'", { instance: m });
        return m;
    };

    return ClearingInfoPush;
})();

$root.quitBankerReq = (function() {

    /**
     * Properties of a quitBankerReq.
     * @exports IquitBankerReq
     * @interface IquitBankerReq
     */

    /**
     * Constructs a new quitBankerReq.
     * @exports quitBankerReq
     * @classdesc Represents a quitBankerReq.
     * @implements IquitBankerReq
     * @constructor
     * @param {IquitBankerReq=} [p] Properties to set
     */
    function quitBankerReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new quitBankerReq instance using the specified properties.
     * @function create
     * @memberof quitBankerReq
     * @static
     * @param {IquitBankerReq=} [properties] Properties to set
     * @returns {quitBankerReq} quitBankerReq instance
     */
    quitBankerReq.create = function create(properties) {
        return new quitBankerReq(properties);
    };

    /**
     * Encodes the specified quitBankerReq message. Does not implicitly {@link quitBankerReq.verify|verify} messages.
     * @function encode
     * @memberof quitBankerReq
     * @static
     * @param {IquitBankerReq} m quitBankerReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    quitBankerReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a quitBankerReq message from the specified reader or buffer.
     * @function decode
     * @memberof quitBankerReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {quitBankerReq} quitBankerReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    quitBankerReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.quitBankerReq();
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

    return quitBankerReq;
})();

$root.quitBankerRsp = (function() {

    /**
     * Properties of a quitBankerRsp.
     * @exports IquitBankerRsp
     * @interface IquitBankerRsp
     * @property {boolean} success quitBankerRsp success
     * @property {string} tip quitBankerRsp tip
     */

    /**
     * Constructs a new quitBankerRsp.
     * @exports quitBankerRsp
     * @classdesc Represents a quitBankerRsp.
     * @implements IquitBankerRsp
     * @constructor
     * @param {IquitBankerRsp=} [p] Properties to set
     */
    function quitBankerRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * quitBankerRsp success.
     * @member {boolean} success
     * @memberof quitBankerRsp
     * @instance
     */
    quitBankerRsp.prototype.success = false;

    /**
     * quitBankerRsp tip.
     * @member {string} tip
     * @memberof quitBankerRsp
     * @instance
     */
    quitBankerRsp.prototype.tip = "";

    /**
     * Creates a new quitBankerRsp instance using the specified properties.
     * @function create
     * @memberof quitBankerRsp
     * @static
     * @param {IquitBankerRsp=} [properties] Properties to set
     * @returns {quitBankerRsp} quitBankerRsp instance
     */
    quitBankerRsp.create = function create(properties) {
        return new quitBankerRsp(properties);
    };

    /**
     * Encodes the specified quitBankerRsp message. Does not implicitly {@link quitBankerRsp.verify|verify} messages.
     * @function encode
     * @memberof quitBankerRsp
     * @static
     * @param {IquitBankerRsp} m quitBankerRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    quitBankerRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a quitBankerRsp message from the specified reader or buffer.
     * @function decode
     * @memberof quitBankerRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {quitBankerRsp} quitBankerRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    quitBankerRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.quitBankerRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("tip"))
            throw $util.ProtocolError("missing required 'tip'", { instance: m });
        return m;
    };

    return quitBankerRsp;
})();

$root.kitOutpush = (function() {

    /**
     * Properties of a kitOutpush.
     * @exports IkitOutpush
     * @interface IkitOutpush
     */

    /**
     * Constructs a new kitOutpush.
     * @exports kitOutpush
     * @classdesc Represents a kitOutpush.
     * @implements IkitOutpush
     * @constructor
     * @param {IkitOutpush=} [p] Properties to set
     */
    function kitOutpush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new kitOutpush instance using the specified properties.
     * @function create
     * @memberof kitOutpush
     * @static
     * @param {IkitOutpush=} [properties] Properties to set
     * @returns {kitOutpush} kitOutpush instance
     */
    kitOutpush.create = function create(properties) {
        return new kitOutpush(properties);
    };

    /**
     * Encodes the specified kitOutpush message. Does not implicitly {@link kitOutpush.verify|verify} messages.
     * @function encode
     * @memberof kitOutpush
     * @static
     * @param {IkitOutpush} m kitOutpush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    kitOutpush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a kitOutpush message from the specified reader or buffer.
     * @function decode
     * @memberof kitOutpush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {kitOutpush} kitOutpush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    kitOutpush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.kitOutpush();
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

    return kitOutpush;
})();

$root.onlinePlayerInfoReq = (function() {

    /**
     * Properties of an onlinePlayerInfoReq.
     * @exports IonlinePlayerInfoReq
     * @interface IonlinePlayerInfoReq
     */

    /**
     * Constructs a new onlinePlayerInfoReq.
     * @exports onlinePlayerInfoReq
     * @classdesc Represents an onlinePlayerInfoReq.
     * @implements IonlinePlayerInfoReq
     * @constructor
     * @param {IonlinePlayerInfoReq=} [p] Properties to set
     */
    function onlinePlayerInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new onlinePlayerInfoReq instance using the specified properties.
     * @function create
     * @memberof onlinePlayerInfoReq
     * @static
     * @param {IonlinePlayerInfoReq=} [properties] Properties to set
     * @returns {onlinePlayerInfoReq} onlinePlayerInfoReq instance
     */
    onlinePlayerInfoReq.create = function create(properties) {
        return new onlinePlayerInfoReq(properties);
    };

    /**
     * Encodes the specified onlinePlayerInfoReq message. Does not implicitly {@link onlinePlayerInfoReq.verify|verify} messages.
     * @function encode
     * @memberof onlinePlayerInfoReq
     * @static
     * @param {IonlinePlayerInfoReq} m onlinePlayerInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    onlinePlayerInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes an onlinePlayerInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof onlinePlayerInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {onlinePlayerInfoReq} onlinePlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    onlinePlayerInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.onlinePlayerInfoReq();
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

    return onlinePlayerInfoReq;
})();

$root.onlinePlayerInfoRsp = (function() {

    /**
     * Properties of an onlinePlayerInfoRsp.
     * @exports IonlinePlayerInfoRsp
     * @interface IonlinePlayerInfoRsp
     * @property {Array.<IPlayerInfo>|null} [playerInfos] onlinePlayerInfoRsp playerInfos
     */

    /**
     * Constructs a new onlinePlayerInfoRsp.
     * @exports onlinePlayerInfoRsp
     * @classdesc Represents an onlinePlayerInfoRsp.
     * @implements IonlinePlayerInfoRsp
     * @constructor
     * @param {IonlinePlayerInfoRsp=} [p] Properties to set
     */
    function onlinePlayerInfoRsp(p) {
        this.playerInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * onlinePlayerInfoRsp playerInfos.
     * @member {Array.<IPlayerInfo>} playerInfos
     * @memberof onlinePlayerInfoRsp
     * @instance
     */
    onlinePlayerInfoRsp.prototype.playerInfos = $util.emptyArray;

    /**
     * Creates a new onlinePlayerInfoRsp instance using the specified properties.
     * @function create
     * @memberof onlinePlayerInfoRsp
     * @static
     * @param {IonlinePlayerInfoRsp=} [properties] Properties to set
     * @returns {onlinePlayerInfoRsp} onlinePlayerInfoRsp instance
     */
    onlinePlayerInfoRsp.create = function create(properties) {
        return new onlinePlayerInfoRsp(properties);
    };

    /**
     * Encodes the specified onlinePlayerInfoRsp message. Does not implicitly {@link onlinePlayerInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof onlinePlayerInfoRsp
     * @static
     * @param {IonlinePlayerInfoRsp} m onlinePlayerInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    onlinePlayerInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerInfos != null && m.playerInfos.length) {
            for (var i = 0; i < m.playerInfos.length; ++i)
                $root.PlayerInfo.encode(m.playerInfos[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an onlinePlayerInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof onlinePlayerInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {onlinePlayerInfoRsp} onlinePlayerInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    onlinePlayerInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.onlinePlayerInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerInfos && m.playerInfos.length))
                    m.playerInfos = [];
                m.playerInfos.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return onlinePlayerInfoRsp;
})();

$root.wantBeBankerListReq = (function() {

    /**
     * Properties of a wantBeBankerListReq.
     * @exports IwantBeBankerListReq
     * @interface IwantBeBankerListReq
     */

    /**
     * Constructs a new wantBeBankerListReq.
     * @exports wantBeBankerListReq
     * @classdesc Represents a wantBeBankerListReq.
     * @implements IwantBeBankerListReq
     * @constructor
     * @param {IwantBeBankerListReq=} [p] Properties to set
     */
    function wantBeBankerListReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new wantBeBankerListReq instance using the specified properties.
     * @function create
     * @memberof wantBeBankerListReq
     * @static
     * @param {IwantBeBankerListReq=} [properties] Properties to set
     * @returns {wantBeBankerListReq} wantBeBankerListReq instance
     */
    wantBeBankerListReq.create = function create(properties) {
        return new wantBeBankerListReq(properties);
    };

    /**
     * Encodes the specified wantBeBankerListReq message. Does not implicitly {@link wantBeBankerListReq.verify|verify} messages.
     * @function encode
     * @memberof wantBeBankerListReq
     * @static
     * @param {IwantBeBankerListReq} m wantBeBankerListReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    wantBeBankerListReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a wantBeBankerListReq message from the specified reader or buffer.
     * @function decode
     * @memberof wantBeBankerListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {wantBeBankerListReq} wantBeBankerListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    wantBeBankerListReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.wantBeBankerListReq();
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

    return wantBeBankerListReq;
})();

$root.wantBeBankerListRsp = (function() {

    /**
     * Properties of a wantBeBankerListRsp.
     * @exports IwantBeBankerListRsp
     * @interface IwantBeBankerListRsp
     * @property {Array.<IPlayerInfo>|null} [playerInfos] wantBeBankerListRsp playerInfos
     */

    /**
     * Constructs a new wantBeBankerListRsp.
     * @exports wantBeBankerListRsp
     * @classdesc Represents a wantBeBankerListRsp.
     * @implements IwantBeBankerListRsp
     * @constructor
     * @param {IwantBeBankerListRsp=} [p] Properties to set
     */
    function wantBeBankerListRsp(p) {
        this.playerInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * wantBeBankerListRsp playerInfos.
     * @member {Array.<IPlayerInfo>} playerInfos
     * @memberof wantBeBankerListRsp
     * @instance
     */
    wantBeBankerListRsp.prototype.playerInfos = $util.emptyArray;

    /**
     * Creates a new wantBeBankerListRsp instance using the specified properties.
     * @function create
     * @memberof wantBeBankerListRsp
     * @static
     * @param {IwantBeBankerListRsp=} [properties] Properties to set
     * @returns {wantBeBankerListRsp} wantBeBankerListRsp instance
     */
    wantBeBankerListRsp.create = function create(properties) {
        return new wantBeBankerListRsp(properties);
    };

    /**
     * Encodes the specified wantBeBankerListRsp message. Does not implicitly {@link wantBeBankerListRsp.verify|verify} messages.
     * @function encode
     * @memberof wantBeBankerListRsp
     * @static
     * @param {IwantBeBankerListRsp} m wantBeBankerListRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    wantBeBankerListRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerInfos != null && m.playerInfos.length) {
            for (var i = 0; i < m.playerInfos.length; ++i)
                $root.PlayerInfo.encode(m.playerInfos[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a wantBeBankerListRsp message from the specified reader or buffer.
     * @function decode
     * @memberof wantBeBankerListRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {wantBeBankerListRsp} wantBeBankerListRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    wantBeBankerListRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.wantBeBankerListRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerInfos && m.playerInfos.length))
                    m.playerInfos = [];
                m.playerInfos.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return wantBeBankerListRsp;
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

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Brocast || ($protobuf.roots.Brocast = {});

/**
 * SenderType enum.
 * @exports SenderType
 * @enum {string}
 * @property {number} sys=0 sys value
 * @property {number} gm=1 gm value
 * @property {number} robotMsg=2 robotMsg value
 */
$root.SenderType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "sys"] = 0;
    values[valuesById[1] = "gm"] = 1;
    values[valuesById[2] = "robotMsg"] = 2;
    return values;
})();

$root.BrocastPush = (function() {

    /**
     * Properties of a BrocastPush.
     * @exports IBrocastPush
     * @interface IBrocastPush
     * @property {SenderType} senderType BrocastPush senderType
     * @property {string} name BrocastPush name
     * @property {string} timeMs BrocastPush timeMs
     * @property {number} vip BrocastPush vip
     * @property {string} contenStr1 BrocastPush contenStr1
     * @property {string} contenPhoto1 BrocastPush contenPhoto1
     * @property {string} contenStr2 BrocastPush contenStr2
     * @property {string} contenPhoto2 BrocastPush contenPhoto2
     * @property {string} contenStr3 BrocastPush contenStr3
     */

    /**
     * Constructs a new BrocastPush.
     * @exports BrocastPush
     * @classdesc Represents a BrocastPush.
     * @implements IBrocastPush
     * @constructor
     * @param {IBrocastPush=} [p] Properties to set
     */
    function BrocastPush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BrocastPush senderType.
     * @member {SenderType} senderType
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.senderType = 0;

    /**
     * BrocastPush name.
     * @member {string} name
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.name = "";

    /**
     * BrocastPush timeMs.
     * @member {string} timeMs
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.timeMs = "";

    /**
     * BrocastPush vip.
     * @member {number} vip
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.vip = 0;

    /**
     * BrocastPush contenStr1.
     * @member {string} contenStr1
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.contenStr1 = "";

    /**
     * BrocastPush contenPhoto1.
     * @member {string} contenPhoto1
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.contenPhoto1 = "";

    /**
     * BrocastPush contenStr2.
     * @member {string} contenStr2
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.contenStr2 = "";

    /**
     * BrocastPush contenPhoto2.
     * @member {string} contenPhoto2
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.contenPhoto2 = "";

    /**
     * BrocastPush contenStr3.
     * @member {string} contenStr3
     * @memberof BrocastPush
     * @instance
     */
    BrocastPush.prototype.contenStr3 = "";

    /**
     * Creates a new BrocastPush instance using the specified properties.
     * @function create
     * @memberof BrocastPush
     * @static
     * @param {IBrocastPush=} [properties] Properties to set
     * @returns {BrocastPush} BrocastPush instance
     */
    BrocastPush.create = function create(properties) {
        return new BrocastPush(properties);
    };

    /**
     * Encodes the specified BrocastPush message. Does not implicitly {@link BrocastPush.verify|verify} messages.
     * @function encode
     * @memberof BrocastPush
     * @static
     * @param {IBrocastPush} m BrocastPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BrocastPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.senderType);
        w.uint32(18).string(m.name);
        w.uint32(34).string(m.timeMs);
        w.uint32(40).int32(m.vip);
        w.uint32(58).string(m.contenStr1);
        w.uint32(66).string(m.contenPhoto1);
        w.uint32(74).string(m.contenStr2);
        w.uint32(82).string(m.contenPhoto2);
        w.uint32(90).string(m.contenStr3);
        return w;
    };

    /**
     * Decodes a BrocastPush message from the specified reader or buffer.
     * @function decode
     * @memberof BrocastPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BrocastPush} BrocastPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BrocastPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BrocastPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.senderType = r.int32();
                break;
            case 2:
                m.name = r.string();
                break;
            case 4:
                m.timeMs = r.string();
                break;
            case 5:
                m.vip = r.int32();
                break;
            case 7:
                m.contenStr1 = r.string();
                break;
            case 8:
                m.contenPhoto1 = r.string();
                break;
            case 9:
                m.contenStr2 = r.string();
                break;
            case 10:
                m.contenPhoto2 = r.string();
                break;
            case 11:
                m.contenStr3 = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("senderType"))
            throw $util.ProtocolError("missing required 'senderType'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("timeMs"))
            throw $util.ProtocolError("missing required 'timeMs'", { instance: m });
        if (!m.hasOwnProperty("vip"))
            throw $util.ProtocolError("missing required 'vip'", { instance: m });
        if (!m.hasOwnProperty("contenStr1"))
            throw $util.ProtocolError("missing required 'contenStr1'", { instance: m });
        if (!m.hasOwnProperty("contenPhoto1"))
            throw $util.ProtocolError("missing required 'contenPhoto1'", { instance: m });
        if (!m.hasOwnProperty("contenStr2"))
            throw $util.ProtocolError("missing required 'contenStr2'", { instance: m });
        if (!m.hasOwnProperty("contenPhoto2"))
            throw $util.ProtocolError("missing required 'contenPhoto2'", { instance: m });
        if (!m.hasOwnProperty("contenStr3"))
            throw $util.ProtocolError("missing required 'contenStr3'", { instance: m });
        return m;
    };

    return BrocastPush;
})();

$root.BrocastPushText = (function() {

    /**
     * Properties of a BrocastPushText.
     * @exports IBrocastPushText
     * @interface IBrocastPushText
     * @property {SenderType} senderType BrocastPushText senderType
     * @property {string} name BrocastPushText name
     * @property {string} timeMs BrocastPushText timeMs
     * @property {string} content BrocastPushText content
     * @property {number} vip BrocastPushText vip
     */

    /**
     * Constructs a new BrocastPushText.
     * @exports BrocastPushText
     * @classdesc Represents a BrocastPushText.
     * @implements IBrocastPushText
     * @constructor
     * @param {IBrocastPushText=} [p] Properties to set
     */
    function BrocastPushText(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BrocastPushText senderType.
     * @member {SenderType} senderType
     * @memberof BrocastPushText
     * @instance
     */
    BrocastPushText.prototype.senderType = 0;

    /**
     * BrocastPushText name.
     * @member {string} name
     * @memberof BrocastPushText
     * @instance
     */
    BrocastPushText.prototype.name = "";

    /**
     * BrocastPushText timeMs.
     * @member {string} timeMs
     * @memberof BrocastPushText
     * @instance
     */
    BrocastPushText.prototype.timeMs = "";

    /**
     * BrocastPushText content.
     * @member {string} content
     * @memberof BrocastPushText
     * @instance
     */
    BrocastPushText.prototype.content = "";

    /**
     * BrocastPushText vip.
     * @member {number} vip
     * @memberof BrocastPushText
     * @instance
     */
    BrocastPushText.prototype.vip = 0;

    /**
     * Creates a new BrocastPushText instance using the specified properties.
     * @function create
     * @memberof BrocastPushText
     * @static
     * @param {IBrocastPushText=} [properties] Properties to set
     * @returns {BrocastPushText} BrocastPushText instance
     */
    BrocastPushText.create = function create(properties) {
        return new BrocastPushText(properties);
    };

    /**
     * Encodes the specified BrocastPushText message. Does not implicitly {@link BrocastPushText.verify|verify} messages.
     * @function encode
     * @memberof BrocastPushText
     * @static
     * @param {IBrocastPushText} m BrocastPushText message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BrocastPushText.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.senderType);
        w.uint32(18).string(m.name);
        w.uint32(26).string(m.content);
        w.uint32(34).string(m.timeMs);
        w.uint32(40).int32(m.vip);
        return w;
    };

    /**
     * Decodes a BrocastPushText message from the specified reader or buffer.
     * @function decode
     * @memberof BrocastPushText
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BrocastPushText} BrocastPushText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BrocastPushText.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BrocastPushText();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.senderType = r.int32();
                break;
            case 2:
                m.name = r.string();
                break;
            case 4:
                m.timeMs = r.string();
                break;
            case 3:
                m.content = r.string();
                break;
            case 5:
                m.vip = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("senderType"))
            throw $util.ProtocolError("missing required 'senderType'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("timeMs"))
            throw $util.ProtocolError("missing required 'timeMs'", { instance: m });
        if (!m.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: m });
        if (!m.hasOwnProperty("vip"))
            throw $util.ProtocolError("missing required 'vip'", { instance: m });
        return m;
    };

    return BrocastPushText;
})();

$root.GamePushBrocastToHall = (function() {

    /**
     * Properties of a GamePushBrocastToHall.
     * @exports IGamePushBrocastToHall
     * @interface IGamePushBrocastToHall
     * @property {number} sysBrocastType GamePushBrocastToHall sysBrocastType
     * @property {string} playerId GamePushBrocastToHall playerId
     * @property {Array.<string>|null} [snedPlayerIds] GamePushBrocastToHall snedPlayerIds
     * @property {number} condition GamePushBrocastToHall condition
     * @property {number} niuniuResultType GamePushBrocastToHall niuniuResultType
     * @property {number|null} [dealySeconds] GamePushBrocastToHall dealySeconds
     * @property {number|null} [paobei] GamePushBrocastToHall paobei
     * @property {string|null} [fishName] GamePushBrocastToHall fishName
     * @property {string|null} [otherParam] GamePushBrocastToHall otherParam
     */

    /**
     * Constructs a new GamePushBrocastToHall.
     * @exports GamePushBrocastToHall
     * @classdesc Represents a GamePushBrocastToHall.
     * @implements IGamePushBrocastToHall
     * @constructor
     * @param {IGamePushBrocastToHall=} [p] Properties to set
     */
    function GamePushBrocastToHall(p) {
        this.snedPlayerIds = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GamePushBrocastToHall sysBrocastType.
     * @member {number} sysBrocastType
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.sysBrocastType = 0;

    /**
     * GamePushBrocastToHall playerId.
     * @member {string} playerId
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.playerId = "";

    /**
     * GamePushBrocastToHall snedPlayerIds.
     * @member {Array.<string>} snedPlayerIds
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.snedPlayerIds = $util.emptyArray;

    /**
     * GamePushBrocastToHall condition.
     * @member {number} condition
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.condition = 0;

    /**
     * GamePushBrocastToHall niuniuResultType.
     * @member {number} niuniuResultType
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.niuniuResultType = 0;

    /**
     * GamePushBrocastToHall dealySeconds.
     * @member {number} dealySeconds
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.dealySeconds = 0;

    /**
     * GamePushBrocastToHall paobei.
     * @member {number} paobei
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.paobei = 0;

    /**
     * GamePushBrocastToHall fishName.
     * @member {string} fishName
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.fishName = "";

    /**
     * GamePushBrocastToHall otherParam.
     * @member {string} otherParam
     * @memberof GamePushBrocastToHall
     * @instance
     */
    GamePushBrocastToHall.prototype.otherParam = "";

    /**
     * Creates a new GamePushBrocastToHall instance using the specified properties.
     * @function create
     * @memberof GamePushBrocastToHall
     * @static
     * @param {IGamePushBrocastToHall=} [properties] Properties to set
     * @returns {GamePushBrocastToHall} GamePushBrocastToHall instance
     */
    GamePushBrocastToHall.create = function create(properties) {
        return new GamePushBrocastToHall(properties);
    };

    /**
     * Encodes the specified GamePushBrocastToHall message. Does not implicitly {@link GamePushBrocastToHall.verify|verify} messages.
     * @function encode
     * @memberof GamePushBrocastToHall
     * @static
     * @param {IGamePushBrocastToHall} m GamePushBrocastToHall message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamePushBrocastToHall.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.sysBrocastType);
        w.uint32(18).string(m.playerId);
        if (m.snedPlayerIds != null && m.snedPlayerIds.length) {
            for (var i = 0; i < m.snedPlayerIds.length; ++i)
                w.uint32(26).string(m.snedPlayerIds[i]);
        }
        w.uint32(32).int32(m.condition);
        w.uint32(40).int32(m.niuniuResultType);
        if (m.dealySeconds != null && m.hasOwnProperty("dealySeconds"))
            w.uint32(48).int32(m.dealySeconds);
        if (m.paobei != null && m.hasOwnProperty("paobei"))
            w.uint32(56).int32(m.paobei);
        if (m.fishName != null && m.hasOwnProperty("fishName"))
            w.uint32(66).string(m.fishName);
        if (m.otherParam != null && m.hasOwnProperty("otherParam"))
            w.uint32(74).string(m.otherParam);
        return w;
    };

    /**
     * Decodes a GamePushBrocastToHall message from the specified reader or buffer.
     * @function decode
     * @memberof GamePushBrocastToHall
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GamePushBrocastToHall} GamePushBrocastToHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamePushBrocastToHall.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePushBrocastToHall();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.sysBrocastType = r.int32();
                break;
            case 2:
                m.playerId = r.string();
                break;
            case 3:
                if (!(m.snedPlayerIds && m.snedPlayerIds.length))
                    m.snedPlayerIds = [];
                m.snedPlayerIds.push(r.string());
                break;
            case 4:
                m.condition = r.int32();
                break;
            case 5:
                m.niuniuResultType = r.int32();
                break;
            case 6:
                m.dealySeconds = r.int32();
                break;
            case 7:
                m.paobei = r.int32();
                break;
            case 8:
                m.fishName = r.string();
                break;
            case 9:
                m.otherParam = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("sysBrocastType"))
            throw $util.ProtocolError("missing required 'sysBrocastType'", { instance: m });
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("condition"))
            throw $util.ProtocolError("missing required 'condition'", { instance: m });
        if (!m.hasOwnProperty("niuniuResultType"))
            throw $util.ProtocolError("missing required 'niuniuResultType'", { instance: m });
        return m;
    };

    return GamePushBrocastToHall;
})();

module.exports = $root;

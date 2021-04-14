/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Login || ($protobuf.roots.Login = {});

$root.LoginReq = (function() {

    /**
     * Properties of a LoginReq.
     * @exports ILoginReq
     * @interface ILoginReq
     * @property {string} uid LoginReq uid
     * @property {string} token LoginReq token
     * @property {string|null} [platform] LoginReq platform
     * @property {string|null} [clientVersion] LoginReq clientVersion
     * @property {string|null} [phoneName] LoginReq phoneName
     * @property {string|null} [phoneModelNo] LoginReq phoneModelNo
     * @property {string|null} [ip] LoginReq ip
     * @property {string|null} [imei] LoginReq imei
     * @property {string|null} [mac] LoginReq mac
     * @property {string|null} [os] LoginReq os
     * @property {number|null} [appVersion] LoginReq appVersion
     * @property {string|null} [packageName] LoginReq packageName
     * @property {string|null} [osTime] LoginReq osTime
     * @property {string|null} [md5String] LoginReq md5String
     * @property {string|null} [channelId] LoginReq channelId
     * @property {boolean|null} [isH5] LoginReq isH5
     */

    /**
     * Constructs a new LoginReq.
     * @exports LoginReq
     * @classdesc Represents a LoginReq.
     * @implements ILoginReq
     * @constructor
     * @param {ILoginReq=} [p] Properties to set
     */
    function LoginReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginReq uid.
     * @member {string} uid
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.uid = "";

    /**
     * LoginReq token.
     * @member {string} token
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.token = "";

    /**
     * LoginReq platform.
     * @member {string} platform
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.platform = "";

    /**
     * LoginReq clientVersion.
     * @member {string} clientVersion
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.clientVersion = "";

    /**
     * LoginReq phoneName.
     * @member {string} phoneName
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.phoneName = "";

    /**
     * LoginReq phoneModelNo.
     * @member {string} phoneModelNo
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.phoneModelNo = "";

    /**
     * LoginReq ip.
     * @member {string} ip
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.ip = "";

    /**
     * LoginReq imei.
     * @member {string} imei
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.imei = "";

    /**
     * LoginReq mac.
     * @member {string} mac
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.mac = "";

    /**
     * LoginReq os.
     * @member {string} os
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.os = "";

    /**
     * LoginReq appVersion.
     * @member {number} appVersion
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.appVersion = 0;

    /**
     * LoginReq packageName.
     * @member {string} packageName
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.packageName = "";

    /**
     * LoginReq osTime.
     * @member {string} osTime
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.osTime = "";

    /**
     * LoginReq md5String.
     * @member {string} md5String
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.md5String = "";

    /**
     * LoginReq channelId.
     * @member {string} channelId
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.channelId = "";

    /**
     * LoginReq isH5.
     * @member {boolean} isH5
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.isH5 = false;

    /**
     * Creates a new LoginReq instance using the specified properties.
     * @function create
     * @memberof LoginReq
     * @static
     * @param {ILoginReq=} [properties] Properties to set
     * @returns {LoginReq} LoginReq instance
     */
    LoginReq.create = function create(properties) {
        return new LoginReq(properties);
    };

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @function encode
     * @memberof LoginReq
     * @static
     * @param {ILoginReq} m LoginReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uid);
        w.uint32(18).string(m.token);
        if (m.platform != null && m.hasOwnProperty("platform"))
            w.uint32(26).string(m.platform);
        if (m.clientVersion != null && m.hasOwnProperty("clientVersion"))
            w.uint32(34).string(m.clientVersion);
        if (m.phoneName != null && m.hasOwnProperty("phoneName"))
            w.uint32(58).string(m.phoneName);
        if (m.phoneModelNo != null && m.hasOwnProperty("phoneModelNo"))
            w.uint32(66).string(m.phoneModelNo);
        if (m.ip != null && m.hasOwnProperty("ip"))
            w.uint32(74).string(m.ip);
        if (m.imei != null && m.hasOwnProperty("imei"))
            w.uint32(82).string(m.imei);
        if (m.mac != null && m.hasOwnProperty("mac"))
            w.uint32(90).string(m.mac);
        if (m.os != null && m.hasOwnProperty("os"))
            w.uint32(98).string(m.os);
        if (m.appVersion != null && m.hasOwnProperty("appVersion"))
            w.uint32(104).int32(m.appVersion);
        if (m.packageName != null && m.hasOwnProperty("packageName"))
            w.uint32(114).string(m.packageName);
        if (m.osTime != null && m.hasOwnProperty("osTime"))
            w.uint32(122).string(m.osTime);
        if (m.md5String != null && m.hasOwnProperty("md5String"))
            w.uint32(130).string(m.md5String);
        if (m.channelId != null && m.hasOwnProperty("channelId"))
            w.uint32(138).string(m.channelId);
        if (m.isH5 != null && m.hasOwnProperty("isH5"))
            w.uint32(144).bool(m.isH5);
        return w;
    };

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof LoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginReq} LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.token = r.string();
                break;
            case 3:
                m.platform = r.string();
                break;
            case 4:
                m.clientVersion = r.string();
                break;
            case 7:
                m.phoneName = r.string();
                break;
            case 8:
                m.phoneModelNo = r.string();
                break;
            case 9:
                m.ip = r.string();
                break;
            case 10:
                m.imei = r.string();
                break;
            case 11:
                m.mac = r.string();
                break;
            case 12:
                m.os = r.string();
                break;
            case 13:
                m.appVersion = r.int32();
                break;
            case 14:
                m.packageName = r.string();
                break;
            case 15:
                m.osTime = r.string();
                break;
            case 16:
                m.md5String = r.string();
                break;
            case 17:
                m.channelId = r.string();
                break;
            case 18:
                m.isH5 = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: m });
        if (!m.hasOwnProperty("token"))
            throw $util.ProtocolError("missing required 'token'", { instance: m });
        return m;
    };

    return LoginReq;
})();

$root.LoginRes = (function() {

    /**
     * Properties of a LoginRes.
     * @exports ILoginRes
     * @interface ILoginRes
     * @property {boolean} success LoginRes success
     * @property {string} errMsg LoginRes errMsg
     */

    /**
     * Constructs a new LoginRes.
     * @exports LoginRes
     * @classdesc Represents a LoginRes.
     * @implements ILoginRes
     * @constructor
     * @param {ILoginRes=} [p] Properties to set
     */
    function LoginRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginRes success.
     * @member {boolean} success
     * @memberof LoginRes
     * @instance
     */
    LoginRes.prototype.success = false;

    /**
     * LoginRes errMsg.
     * @member {string} errMsg
     * @memberof LoginRes
     * @instance
     */
    LoginRes.prototype.errMsg = "";

    /**
     * Creates a new LoginRes instance using the specified properties.
     * @function create
     * @memberof LoginRes
     * @static
     * @param {ILoginRes=} [properties] Properties to set
     * @returns {LoginRes} LoginRes instance
     */
    LoginRes.create = function create(properties) {
        return new LoginRes(properties);
    };

    /**
     * Encodes the specified LoginRes message. Does not implicitly {@link LoginRes.verify|verify} messages.
     * @function encode
     * @memberof LoginRes
     * @static
     * @param {ILoginRes} m LoginRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.errMsg);
        return w;
    };

    /**
     * Decodes a LoginRes message from the specified reader or buffer.
     * @function decode
     * @memberof LoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginRes} LoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.errMsg = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        if (!m.hasOwnProperty("errMsg"))
            throw $util.ProtocolError("missing required 'errMsg'", { instance: m });
        return m;
    };

    return LoginRes;
})();

$root.Kick = (function() {

    /**
     * Properties of a Kick.
     * @exports IKick
     * @interface IKick
     * @property {string} reason Kick reason
     */

    /**
     * Constructs a new Kick.
     * @exports Kick
     * @classdesc Represents a Kick.
     * @implements IKick
     * @constructor
     * @param {IKick=} [p] Properties to set
     */
    function Kick(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Kick reason.
     * @member {string} reason
     * @memberof Kick
     * @instance
     */
    Kick.prototype.reason = "";

    /**
     * Creates a new Kick instance using the specified properties.
     * @function create
     * @memberof Kick
     * @static
     * @param {IKick=} [properties] Properties to set
     * @returns {Kick} Kick instance
     */
    Kick.create = function create(properties) {
        return new Kick(properties);
    };

    /**
     * Encodes the specified Kick message. Does not implicitly {@link Kick.verify|verify} messages.
     * @function encode
     * @memberof Kick
     * @static
     * @param {IKick} m Kick message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Kick.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.reason);
        return w;
    };

    /**
     * Decodes a Kick message from the specified reader or buffer.
     * @function decode
     * @memberof Kick
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Kick} Kick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Kick.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Kick();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.reason = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("reason"))
            throw $util.ProtocolError("missing required 'reason'", { instance: m });
        return m;
    };

    return Kick;
})();

$root.ReConnect = (function() {

    /**
     * Properties of a ReConnect.
     * @exports IReConnect
     * @interface IReConnect
     * @property {number|Long} playerID ReConnect playerID
     */

    /**
     * Constructs a new ReConnect.
     * @exports ReConnect
     * @classdesc Represents a ReConnect.
     * @implements IReConnect
     * @constructor
     * @param {IReConnect=} [p] Properties to set
     */
    function ReConnect(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReConnect playerID.
     * @member {number|Long} playerID
     * @memberof ReConnect
     * @instance
     */
    ReConnect.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReConnect instance using the specified properties.
     * @function create
     * @memberof ReConnect
     * @static
     * @param {IReConnect=} [properties] Properties to set
     * @returns {ReConnect} ReConnect instance
     */
    ReConnect.create = function create(properties) {
        return new ReConnect(properties);
    };

    /**
     * Encodes the specified ReConnect message. Does not implicitly {@link ReConnect.verify|verify} messages.
     * @function encode
     * @memberof ReConnect
     * @static
     * @param {IReConnect} m ReConnect message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReConnect.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        return w;
    };

    /**
     * Decodes a ReConnect message from the specified reader or buffer.
     * @function decode
     * @memberof ReConnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReConnect} ReConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReConnect.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReConnect();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerID = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerID"))
            throw $util.ProtocolError("missing required 'playerID'", { instance: m });
        return m;
    };

    return ReConnect;
})();

$root.PlayerShouldReconnectBattle = (function() {

    /**
     * Properties of a PlayerShouldReconnectBattle.
     * @exports IPlayerShouldReconnectBattle
     * @interface IPlayerShouldReconnectBattle
     * @property {boolean} shouldReconnectBattle PlayerShouldReconnectBattle shouldReconnectBattle
     * @property {boolean|null} [canReconnect] PlayerShouldReconnectBattle canReconnect
     * @property {number|null} [leftSeconds] PlayerShouldReconnectBattle leftSeconds
     * @property {string|null} [tips] PlayerShouldReconnectBattle tips
     */

    /**
     * Constructs a new PlayerShouldReconnectBattle.
     * @exports PlayerShouldReconnectBattle
     * @classdesc Represents a PlayerShouldReconnectBattle.
     * @implements IPlayerShouldReconnectBattle
     * @constructor
     * @param {IPlayerShouldReconnectBattle=} [p] Properties to set
     */
    function PlayerShouldReconnectBattle(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerShouldReconnectBattle shouldReconnectBattle.
     * @member {boolean} shouldReconnectBattle
     * @memberof PlayerShouldReconnectBattle
     * @instance
     */
    PlayerShouldReconnectBattle.prototype.shouldReconnectBattle = false;

    /**
     * PlayerShouldReconnectBattle canReconnect.
     * @member {boolean} canReconnect
     * @memberof PlayerShouldReconnectBattle
     * @instance
     */
    PlayerShouldReconnectBattle.prototype.canReconnect = false;

    /**
     * PlayerShouldReconnectBattle leftSeconds.
     * @member {number} leftSeconds
     * @memberof PlayerShouldReconnectBattle
     * @instance
     */
    PlayerShouldReconnectBattle.prototype.leftSeconds = 0;

    /**
     * PlayerShouldReconnectBattle tips.
     * @member {string} tips
     * @memberof PlayerShouldReconnectBattle
     * @instance
     */
    PlayerShouldReconnectBattle.prototype.tips = "";

    /**
     * Creates a new PlayerShouldReconnectBattle instance using the specified properties.
     * @function create
     * @memberof PlayerShouldReconnectBattle
     * @static
     * @param {IPlayerShouldReconnectBattle=} [properties] Properties to set
     * @returns {PlayerShouldReconnectBattle} PlayerShouldReconnectBattle instance
     */
    PlayerShouldReconnectBattle.create = function create(properties) {
        return new PlayerShouldReconnectBattle(properties);
    };

    /**
     * Encodes the specified PlayerShouldReconnectBattle message. Does not implicitly {@link PlayerShouldReconnectBattle.verify|verify} messages.
     * @function encode
     * @memberof PlayerShouldReconnectBattle
     * @static
     * @param {IPlayerShouldReconnectBattle} m PlayerShouldReconnectBattle message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerShouldReconnectBattle.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.shouldReconnectBattle);
        if (m.canReconnect != null && m.hasOwnProperty("canReconnect"))
            w.uint32(16).bool(m.canReconnect);
        if (m.leftSeconds != null && m.hasOwnProperty("leftSeconds"))
            w.uint32(29).fixed32(m.leftSeconds);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(34).string(m.tips);
        return w;
    };

    /**
     * Decodes a PlayerShouldReconnectBattle message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerShouldReconnectBattle
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerShouldReconnectBattle} PlayerShouldReconnectBattle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerShouldReconnectBattle.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerShouldReconnectBattle();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.shouldReconnectBattle = r.bool();
                break;
            case 2:
                m.canReconnect = r.bool();
                break;
            case 3:
                m.leftSeconds = r.fixed32();
                break;
            case 4:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("shouldReconnectBattle"))
            throw $util.ProtocolError("missing required 'shouldReconnectBattle'", { instance: m });
        return m;
    };

    return PlayerShouldReconnectBattle;
})();

$root.ForceLogout = (function() {

    /**
     * Properties of a ForceLogout.
     * @exports IForceLogout
     * @interface IForceLogout
     * @property {string|null} [reason] ForceLogout reason
     */

    /**
     * Constructs a new ForceLogout.
     * @exports ForceLogout
     * @classdesc Represents a ForceLogout.
     * @implements IForceLogout
     * @constructor
     * @param {IForceLogout=} [p] Properties to set
     */
    function ForceLogout(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ForceLogout reason.
     * @member {string} reason
     * @memberof ForceLogout
     * @instance
     */
    ForceLogout.prototype.reason = "";

    /**
     * Creates a new ForceLogout instance using the specified properties.
     * @function create
     * @memberof ForceLogout
     * @static
     * @param {IForceLogout=} [properties] Properties to set
     * @returns {ForceLogout} ForceLogout instance
     */
    ForceLogout.create = function create(properties) {
        return new ForceLogout(properties);
    };

    /**
     * Encodes the specified ForceLogout message. Does not implicitly {@link ForceLogout.verify|verify} messages.
     * @function encode
     * @memberof ForceLogout
     * @static
     * @param {IForceLogout} m ForceLogout message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForceLogout.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.reason != null && m.hasOwnProperty("reason"))
            w.uint32(10).string(m.reason);
        return w;
    };

    /**
     * Decodes a ForceLogout message from the specified reader or buffer.
     * @function decode
     * @memberof ForceLogout
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ForceLogout} ForceLogout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForceLogout.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ForceLogout();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.reason = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ForceLogout;
})();

$root.ReconnectHallResult = (function() {

    /**
     * Properties of a ReconnectHallResult.
     * @exports IReconnectHallResult
     * @interface IReconnectHallResult
     * @property {boolean} success ReconnectHallResult success
     * @property {string|null} [tips] ReconnectHallResult tips
     */

    /**
     * Constructs a new ReconnectHallResult.
     * @exports ReconnectHallResult
     * @classdesc Represents a ReconnectHallResult.
     * @implements IReconnectHallResult
     * @constructor
     * @param {IReconnectHallResult=} [p] Properties to set
     */
    function ReconnectHallResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReconnectHallResult success.
     * @member {boolean} success
     * @memberof ReconnectHallResult
     * @instance
     */
    ReconnectHallResult.prototype.success = false;

    /**
     * ReconnectHallResult tips.
     * @member {string} tips
     * @memberof ReconnectHallResult
     * @instance
     */
    ReconnectHallResult.prototype.tips = "";

    /**
     * Creates a new ReconnectHallResult instance using the specified properties.
     * @function create
     * @memberof ReconnectHallResult
     * @static
     * @param {IReconnectHallResult=} [properties] Properties to set
     * @returns {ReconnectHallResult} ReconnectHallResult instance
     */
    ReconnectHallResult.create = function create(properties) {
        return new ReconnectHallResult(properties);
    };

    /**
     * Encodes the specified ReconnectHallResult message. Does not implicitly {@link ReconnectHallResult.verify|verify} messages.
     * @function encode
     * @memberof ReconnectHallResult
     * @static
     * @param {IReconnectHallResult} m ReconnectHallResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReconnectHallResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a ReconnectHallResult message from the specified reader or buffer.
     * @function decode
     * @memberof ReconnectHallResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReconnectHallResult} ReconnectHallResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReconnectHallResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReconnectHallResult();
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

    return ReconnectHallResult;
})();

$root.GameStatusInfo = (function() {

    /**
     * Properties of a GameStatusInfo.
     * @exports IGameStatusInfo
     * @interface IGameStatusInfo
     * @property {boolean} isGameStatus GameStatusInfo isGameStatus
     * @property {number|null} [playType] GameStatusInfo playType
     * @property {number|null} [playId] GameStatusInfo playId
     */

    /**
     * Constructs a new GameStatusInfo.
     * @exports GameStatusInfo
     * @classdesc Represents a GameStatusInfo.
     * @implements IGameStatusInfo
     * @constructor
     * @param {IGameStatusInfo=} [p] Properties to set
     */
    function GameStatusInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameStatusInfo isGameStatus.
     * @member {boolean} isGameStatus
     * @memberof GameStatusInfo
     * @instance
     */
    GameStatusInfo.prototype.isGameStatus = false;

    /**
     * GameStatusInfo playType.
     * @member {number} playType
     * @memberof GameStatusInfo
     * @instance
     */
    GameStatusInfo.prototype.playType = 0;

    /**
     * GameStatusInfo playId.
     * @member {number} playId
     * @memberof GameStatusInfo
     * @instance
     */
    GameStatusInfo.prototype.playId = 0;

    /**
     * Creates a new GameStatusInfo instance using the specified properties.
     * @function create
     * @memberof GameStatusInfo
     * @static
     * @param {IGameStatusInfo=} [properties] Properties to set
     * @returns {GameStatusInfo} GameStatusInfo instance
     */
    GameStatusInfo.create = function create(properties) {
        return new GameStatusInfo(properties);
    };

    /**
     * Encodes the specified GameStatusInfo message. Does not implicitly {@link GameStatusInfo.verify|verify} messages.
     * @function encode
     * @memberof GameStatusInfo
     * @static
     * @param {IGameStatusInfo} m GameStatusInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameStatusInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isGameStatus);
        if (m.playType != null && m.hasOwnProperty("playType"))
            w.uint32(16).int32(m.playType);
        if (m.playId != null && m.hasOwnProperty("playId"))
            w.uint32(24).int32(m.playId);
        return w;
    };

    /**
     * Decodes a GameStatusInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GameStatusInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameStatusInfo} GameStatusInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameStatusInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameStatusInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isGameStatus = r.bool();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.playId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isGameStatus"))
            throw $util.ProtocolError("missing required 'isGameStatus'", { instance: m });
        return m;
    };

    return GameStatusInfo;
})();

module.exports = $root;

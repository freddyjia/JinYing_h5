/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.LiveVideo || ($protobuf.roots.LiveVideo = {});

$root.PushRoomInfo = (function() {

    /**
     * Properties of a PushRoomInfo.
     * @exports IPushRoomInfo
     * @interface IPushRoomInfo
     */

    /**
     * Constructs a new PushRoomInfo.
     * @exports PushRoomInfo
     * @classdesc Represents a PushRoomInfo.
     * @implements IPushRoomInfo
     * @constructor
     * @param {IPushRoomInfo=} [p] Properties to set
     */
    function PushRoomInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new PushRoomInfo instance using the specified properties.
     * @function create
     * @memberof PushRoomInfo
     * @static
     * @param {IPushRoomInfo=} [properties] Properties to set
     * @returns {PushRoomInfo} PushRoomInfo instance
     */
    PushRoomInfo.create = function create(properties) {
        return new PushRoomInfo(properties);
    };

    /**
     * Encodes the specified PushRoomInfo message. Does not implicitly {@link PushRoomInfo.verify|verify} messages.
     * @function encode
     * @memberof PushRoomInfo
     * @static
     * @param {IPushRoomInfo} m PushRoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRoomInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a PushRoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushRoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRoomInfo} PushRoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRoomInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRoomInfo();
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

    return PushRoomInfo;
})();

$root.LoginThirdGameReq = (function() {

    /**
     * Properties of a LoginThirdGameReq.
     * @exports ILoginThirdGameReq
     * @interface ILoginThirdGameReq
     * @property {string} platform LoginThirdGameReq platform
     * @property {string} ip LoginThirdGameReq ip
     */

    /**
     * Constructs a new LoginThirdGameReq.
     * @exports LoginThirdGameReq
     * @classdesc Represents a LoginThirdGameReq.
     * @implements ILoginThirdGameReq
     * @constructor
     * @param {ILoginThirdGameReq=} [p] Properties to set
     */
    function LoginThirdGameReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginThirdGameReq platform.
     * @member {string} platform
     * @memberof LoginThirdGameReq
     * @instance
     */
    LoginThirdGameReq.prototype.platform = "";

    /**
     * LoginThirdGameReq ip.
     * @member {string} ip
     * @memberof LoginThirdGameReq
     * @instance
     */
    LoginThirdGameReq.prototype.ip = "";

    /**
     * Creates a new LoginThirdGameReq instance using the specified properties.
     * @function create
     * @memberof LoginThirdGameReq
     * @static
     * @param {ILoginThirdGameReq=} [properties] Properties to set
     * @returns {LoginThirdGameReq} LoginThirdGameReq instance
     */
    LoginThirdGameReq.create = function create(properties) {
        return new LoginThirdGameReq(properties);
    };

    /**
     * Encodes the specified LoginThirdGameReq message. Does not implicitly {@link LoginThirdGameReq.verify|verify} messages.
     * @function encode
     * @memberof LoginThirdGameReq
     * @static
     * @param {ILoginThirdGameReq} m LoginThirdGameReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginThirdGameReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.platform);
        w.uint32(18).string(m.ip);
        return w;
    };

    /**
     * Decodes a LoginThirdGameReq message from the specified reader or buffer.
     * @function decode
     * @memberof LoginThirdGameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginThirdGameReq} LoginThirdGameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginThirdGameReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginThirdGameReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.platform = r.string();
                break;
            case 2:
                m.ip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("platform"))
            throw $util.ProtocolError("missing required 'platform'", { instance: m });
        if (!m.hasOwnProperty("ip"))
            throw $util.ProtocolError("missing required 'ip'", { instance: m });
        return m;
    };

    return LoginThirdGameReq;
})();

$root.LoginThirdGameRsp = (function() {

    /**
     * Properties of a LoginThirdGameRsp.
     * @exports ILoginThirdGameRsp
     * @interface ILoginThirdGameRsp
     * @property {string|null} [gameUrl] LoginThirdGameRsp gameUrl
     */

    /**
     * Constructs a new LoginThirdGameRsp.
     * @exports LoginThirdGameRsp
     * @classdesc Represents a LoginThirdGameRsp.
     * @implements ILoginThirdGameRsp
     * @constructor
     * @param {ILoginThirdGameRsp=} [p] Properties to set
     */
    function LoginThirdGameRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginThirdGameRsp gameUrl.
     * @member {string} gameUrl
     * @memberof LoginThirdGameRsp
     * @instance
     */
    LoginThirdGameRsp.prototype.gameUrl = "";

    /**
     * Creates a new LoginThirdGameRsp instance using the specified properties.
     * @function create
     * @memberof LoginThirdGameRsp
     * @static
     * @param {ILoginThirdGameRsp=} [properties] Properties to set
     * @returns {LoginThirdGameRsp} LoginThirdGameRsp instance
     */
    LoginThirdGameRsp.create = function create(properties) {
        return new LoginThirdGameRsp(properties);
    };

    /**
     * Encodes the specified LoginThirdGameRsp message. Does not implicitly {@link LoginThirdGameRsp.verify|verify} messages.
     * @function encode
     * @memberof LoginThirdGameRsp
     * @static
     * @param {ILoginThirdGameRsp} m LoginThirdGameRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginThirdGameRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameUrl != null && m.hasOwnProperty("gameUrl"))
            w.uint32(10).string(m.gameUrl);
        return w;
    };

    /**
     * Decodes a LoginThirdGameRsp message from the specified reader or buffer.
     * @function decode
     * @memberof LoginThirdGameRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginThirdGameRsp} LoginThirdGameRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginThirdGameRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginThirdGameRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameUrl = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return LoginThirdGameRsp;
})();

module.exports = $root;

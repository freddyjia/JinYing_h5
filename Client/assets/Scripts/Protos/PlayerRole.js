/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.PlayerRole || ($protobuf.roots.PlayerRole = {});

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {number|Long} playerID PlayerInfo playerID
     * @property {string|null} [username] PlayerInfo username
     * @property {string|null} [headImageUrl] PlayerInfo headImageUrl
     * @property {number|null} [vipLv] PlayerInfo vipLv
     * @property {string|null} [nameSign] PlayerInfo nameSign
     * @property {boolean|null} [isFirstChargePackage] PlayerInfo isFirstChargePackage
     * @property {string|null} [headbox] PlayerInfo headbox
     * @property {boolean|null} [isChangeName] PlayerInfo isChangeName
     * @property {string|null} [mobileNum] PlayerInfo mobileNum
     * @property {number|Long|null} [leaderID] PlayerInfo leaderID
     * @property {string|null} [totalCharge] PlayerInfo totalCharge
     * @property {number|null} [promoterTipFrequency] PlayerInfo promoterTipFrequency
     * @property {number|null} [bpromoterTipFrequency] PlayerInfo bpromoterTipFrequency
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
     * PlayerInfo playerID.
     * @member {number|Long} playerID
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerInfo username.
     * @member {string} username
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.username = "";

    /**
     * PlayerInfo headImageUrl.
     * @member {string} headImageUrl
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.headImageUrl = "";

    /**
     * PlayerInfo vipLv.
     * @member {number} vipLv
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.vipLv = 0;

    /**
     * PlayerInfo nameSign.
     * @member {string} nameSign
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.nameSign = "";

    /**
     * PlayerInfo isFirstChargePackage.
     * @member {boolean} isFirstChargePackage
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isFirstChargePackage = false;

    /**
     * PlayerInfo headbox.
     * @member {string} headbox
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.headbox = "";

    /**
     * PlayerInfo isChangeName.
     * @member {boolean} isChangeName
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isChangeName = false;

    /**
     * PlayerInfo mobileNum.
     * @member {string} mobileNum
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.mobileNum = "";

    /**
     * PlayerInfo leaderID.
     * @member {number|Long} leaderID
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.leaderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerInfo totalCharge.
     * @member {string} totalCharge
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.totalCharge = "";

    /**
     * PlayerInfo promoterTipFrequency.
     * @member {number} promoterTipFrequency
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.promoterTipFrequency = 0;

    /**
     * PlayerInfo bpromoterTipFrequency.
     * @member {number} bpromoterTipFrequency
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.bpromoterTipFrequency = 0;

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
        w.uint32(8).int64(m.playerID);
        if (m.username != null && m.hasOwnProperty("username"))
            w.uint32(18).string(m.username);
        if (m.headImageUrl != null && m.hasOwnProperty("headImageUrl"))
            w.uint32(26).string(m.headImageUrl);
        if (m.vipLv != null && m.hasOwnProperty("vipLv"))
            w.uint32(32).int32(m.vipLv);
        if (m.nameSign != null && m.hasOwnProperty("nameSign"))
            w.uint32(42).string(m.nameSign);
        if (m.isFirstChargePackage != null && m.hasOwnProperty("isFirstChargePackage"))
            w.uint32(48).bool(m.isFirstChargePackage);
        if (m.headbox != null && m.hasOwnProperty("headbox"))
            w.uint32(58).string(m.headbox);
        if (m.isChangeName != null && m.hasOwnProperty("isChangeName"))
            w.uint32(64).bool(m.isChangeName);
        if (m.mobileNum != null && m.hasOwnProperty("mobileNum"))
            w.uint32(74).string(m.mobileNum);
        if (m.leaderID != null && m.hasOwnProperty("leaderID"))
            w.uint32(80).int64(m.leaderID);
        if (m.totalCharge != null && m.hasOwnProperty("totalCharge"))
            w.uint32(90).string(m.totalCharge);
        if (m.promoterTipFrequency != null && m.hasOwnProperty("promoterTipFrequency"))
            w.uint32(96).int32(m.promoterTipFrequency);
        if (m.bpromoterTipFrequency != null && m.hasOwnProperty("bpromoterTipFrequency"))
            w.uint32(104).int32(m.bpromoterTipFrequency);
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
                m.playerID = r.int64();
                break;
            case 2:
                m.username = r.string();
                break;
            case 3:
                m.headImageUrl = r.string();
                break;
            case 4:
                m.vipLv = r.int32();
                break;
            case 5:
                m.nameSign = r.string();
                break;
            case 6:
                m.isFirstChargePackage = r.bool();
                break;
            case 7:
                m.headbox = r.string();
                break;
            case 8:
                m.isChangeName = r.bool();
                break;
            case 9:
                m.mobileNum = r.string();
                break;
            case 10:
                m.leaderID = r.int64();
                break;
            case 11:
                m.totalCharge = r.string();
                break;
            case 12:
                m.promoterTipFrequency = r.int32();
                break;
            case 13:
                m.bpromoterTipFrequency = r.int32();
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

    return PlayerInfo;
})();

$root.PlayerInfoRes = (function() {

    /**
     * Properties of a PlayerInfoRes.
     * @exports IPlayerInfoRes
     * @interface IPlayerInfoRes
     * @property {IPlayerInfo} playerInfo PlayerInfoRes playerInfo
     */

    /**
     * Constructs a new PlayerInfoRes.
     * @exports PlayerInfoRes
     * @classdesc Represents a PlayerInfoRes.
     * @implements IPlayerInfoRes
     * @constructor
     * @param {IPlayerInfoRes=} [p] Properties to set
     */
    function PlayerInfoRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerInfoRes playerInfo.
     * @member {IPlayerInfo} playerInfo
     * @memberof PlayerInfoRes
     * @instance
     */
    PlayerInfoRes.prototype.playerInfo = null;

    /**
     * Creates a new PlayerInfoRes instance using the specified properties.
     * @function create
     * @memberof PlayerInfoRes
     * @static
     * @param {IPlayerInfoRes=} [properties] Properties to set
     * @returns {PlayerInfoRes} PlayerInfoRes instance
     */
    PlayerInfoRes.create = function create(properties) {
        return new PlayerInfoRes(properties);
    };

    /**
     * Encodes the specified PlayerInfoRes message. Does not implicitly {@link PlayerInfoRes.verify|verify} messages.
     * @function encode
     * @memberof PlayerInfoRes
     * @static
     * @param {IPlayerInfoRes} m PlayerInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerInfoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.PlayerInfo.encode(m.playerInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a PlayerInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerInfoRes} PlayerInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerInfoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerInfoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerInfo = $root.PlayerInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerInfo"))
            throw $util.ProtocolError("missing required 'playerInfo'", { instance: m });
        return m;
    };

    return PlayerInfoRes;
})();

$root.DefaultPlayerRoleOptionRes = (function() {

    /**
     * Properties of a DefaultPlayerRoleOptionRes.
     * @exports IDefaultPlayerRoleOptionRes
     * @interface IDefaultPlayerRoleOptionRes
     * @property {boolean} success DefaultPlayerRoleOptionRes success
     * @property {string} tips DefaultPlayerRoleOptionRes tips
     */

    /**
     * Constructs a new DefaultPlayerRoleOptionRes.
     * @exports DefaultPlayerRoleOptionRes
     * @classdesc Represents a DefaultPlayerRoleOptionRes.
     * @implements IDefaultPlayerRoleOptionRes
     * @constructor
     * @param {IDefaultPlayerRoleOptionRes=} [p] Properties to set
     */
    function DefaultPlayerRoleOptionRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DefaultPlayerRoleOptionRes success.
     * @member {boolean} success
     * @memberof DefaultPlayerRoleOptionRes
     * @instance
     */
    DefaultPlayerRoleOptionRes.prototype.success = false;

    /**
     * DefaultPlayerRoleOptionRes tips.
     * @member {string} tips
     * @memberof DefaultPlayerRoleOptionRes
     * @instance
     */
    DefaultPlayerRoleOptionRes.prototype.tips = "";

    /**
     * Creates a new DefaultPlayerRoleOptionRes instance using the specified properties.
     * @function create
     * @memberof DefaultPlayerRoleOptionRes
     * @static
     * @param {IDefaultPlayerRoleOptionRes=} [properties] Properties to set
     * @returns {DefaultPlayerRoleOptionRes} DefaultPlayerRoleOptionRes instance
     */
    DefaultPlayerRoleOptionRes.create = function create(properties) {
        return new DefaultPlayerRoleOptionRes(properties);
    };

    /**
     * Encodes the specified DefaultPlayerRoleOptionRes message. Does not implicitly {@link DefaultPlayerRoleOptionRes.verify|verify} messages.
     * @function encode
     * @memberof DefaultPlayerRoleOptionRes
     * @static
     * @param {IDefaultPlayerRoleOptionRes} m DefaultPlayerRoleOptionRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DefaultPlayerRoleOptionRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a DefaultPlayerRoleOptionRes message from the specified reader or buffer.
     * @function decode
     * @memberof DefaultPlayerRoleOptionRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DefaultPlayerRoleOptionRes} DefaultPlayerRoleOptionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DefaultPlayerRoleOptionRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DefaultPlayerRoleOptionRes();
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
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        return m;
    };

    return DefaultPlayerRoleOptionRes;
})();

$root.ModifyPlayerNameReq = (function() {

    /**
     * Properties of a ModifyPlayerNameReq.
     * @exports IModifyPlayerNameReq
     * @interface IModifyPlayerNameReq
     * @property {string} newName ModifyPlayerNameReq newName
     */

    /**
     * Constructs a new ModifyPlayerNameReq.
     * @exports ModifyPlayerNameReq
     * @classdesc Represents a ModifyPlayerNameReq.
     * @implements IModifyPlayerNameReq
     * @constructor
     * @param {IModifyPlayerNameReq=} [p] Properties to set
     */
    function ModifyPlayerNameReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ModifyPlayerNameReq newName.
     * @member {string} newName
     * @memberof ModifyPlayerNameReq
     * @instance
     */
    ModifyPlayerNameReq.prototype.newName = "";

    /**
     * Creates a new ModifyPlayerNameReq instance using the specified properties.
     * @function create
     * @memberof ModifyPlayerNameReq
     * @static
     * @param {IModifyPlayerNameReq=} [properties] Properties to set
     * @returns {ModifyPlayerNameReq} ModifyPlayerNameReq instance
     */
    ModifyPlayerNameReq.create = function create(properties) {
        return new ModifyPlayerNameReq(properties);
    };

    /**
     * Encodes the specified ModifyPlayerNameReq message. Does not implicitly {@link ModifyPlayerNameReq.verify|verify} messages.
     * @function encode
     * @memberof ModifyPlayerNameReq
     * @static
     * @param {IModifyPlayerNameReq} m ModifyPlayerNameReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyPlayerNameReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.newName);
        return w;
    };

    /**
     * Decodes a ModifyPlayerNameReq message from the specified reader or buffer.
     * @function decode
     * @memberof ModifyPlayerNameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ModifyPlayerNameReq} ModifyPlayerNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyPlayerNameReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ModifyPlayerNameReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.newName = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("newName"))
            throw $util.ProtocolError("missing required 'newName'", { instance: m });
        return m;
    };

    return ModifyPlayerNameReq;
})();

$root.ModifyPlayerHeadReq = (function() {

    /**
     * Properties of a ModifyPlayerHeadReq.
     * @exports IModifyPlayerHeadReq
     * @interface IModifyPlayerHeadReq
     * @property {string|null} [newHeadId] ModifyPlayerHeadReq newHeadId
     * @property {string|null} [headImageUrl] ModifyPlayerHeadReq headImageUrl
     */

    /**
     * Constructs a new ModifyPlayerHeadReq.
     * @exports ModifyPlayerHeadReq
     * @classdesc Represents a ModifyPlayerHeadReq.
     * @implements IModifyPlayerHeadReq
     * @constructor
     * @param {IModifyPlayerHeadReq=} [p] Properties to set
     */
    function ModifyPlayerHeadReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ModifyPlayerHeadReq newHeadId.
     * @member {string} newHeadId
     * @memberof ModifyPlayerHeadReq
     * @instance
     */
    ModifyPlayerHeadReq.prototype.newHeadId = "";

    /**
     * ModifyPlayerHeadReq headImageUrl.
     * @member {string} headImageUrl
     * @memberof ModifyPlayerHeadReq
     * @instance
     */
    ModifyPlayerHeadReq.prototype.headImageUrl = "";

    /**
     * Creates a new ModifyPlayerHeadReq instance using the specified properties.
     * @function create
     * @memberof ModifyPlayerHeadReq
     * @static
     * @param {IModifyPlayerHeadReq=} [properties] Properties to set
     * @returns {ModifyPlayerHeadReq} ModifyPlayerHeadReq instance
     */
    ModifyPlayerHeadReq.create = function create(properties) {
        return new ModifyPlayerHeadReq(properties);
    };

    /**
     * Encodes the specified ModifyPlayerHeadReq message. Does not implicitly {@link ModifyPlayerHeadReq.verify|verify} messages.
     * @function encode
     * @memberof ModifyPlayerHeadReq
     * @static
     * @param {IModifyPlayerHeadReq} m ModifyPlayerHeadReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyPlayerHeadReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.newHeadId != null && m.hasOwnProperty("newHeadId"))
            w.uint32(10).string(m.newHeadId);
        if (m.headImageUrl != null && m.hasOwnProperty("headImageUrl"))
            w.uint32(18).string(m.headImageUrl);
        return w;
    };

    /**
     * Decodes a ModifyPlayerHeadReq message from the specified reader or buffer.
     * @function decode
     * @memberof ModifyPlayerHeadReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ModifyPlayerHeadReq} ModifyPlayerHeadReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyPlayerHeadReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ModifyPlayerHeadReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.newHeadId = r.string();
                break;
            case 2:
                m.headImageUrl = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ModifyPlayerHeadReq;
})();

$root.GetPlayerInfoReq = (function() {

    /**
     * Properties of a GetPlayerInfoReq.
     * @exports IGetPlayerInfoReq
     * @interface IGetPlayerInfoReq
     * @property {number|Long} playerID GetPlayerInfoReq playerID
     */

    /**
     * Constructs a new GetPlayerInfoReq.
     * @exports GetPlayerInfoReq
     * @classdesc Represents a GetPlayerInfoReq.
     * @implements IGetPlayerInfoReq
     * @constructor
     * @param {IGetPlayerInfoReq=} [p] Properties to set
     */
    function GetPlayerInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetPlayerInfoReq playerID.
     * @member {number|Long} playerID
     * @memberof GetPlayerInfoReq
     * @instance
     */
    GetPlayerInfoReq.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GetPlayerInfoReq instance using the specified properties.
     * @function create
     * @memberof GetPlayerInfoReq
     * @static
     * @param {IGetPlayerInfoReq=} [properties] Properties to set
     * @returns {GetPlayerInfoReq} GetPlayerInfoReq instance
     */
    GetPlayerInfoReq.create = function create(properties) {
        return new GetPlayerInfoReq(properties);
    };

    /**
     * Encodes the specified GetPlayerInfoReq message. Does not implicitly {@link GetPlayerInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetPlayerInfoReq
     * @static
     * @param {IGetPlayerInfoReq} m GetPlayerInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPlayerInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        return w;
    };

    /**
     * Decodes a GetPlayerInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetPlayerInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetPlayerInfoReq} GetPlayerInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPlayerInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetPlayerInfoReq();
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

    return GetPlayerInfoReq;
})();

$root.SignNameReq = (function() {

    /**
     * Properties of a SignNameReq.
     * @exports ISignNameReq
     * @interface ISignNameReq
     * @property {string} sign SignNameReq sign
     */

    /**
     * Constructs a new SignNameReq.
     * @exports SignNameReq
     * @classdesc Represents a SignNameReq.
     * @implements ISignNameReq
     * @constructor
     * @param {ISignNameReq=} [p] Properties to set
     */
    function SignNameReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SignNameReq sign.
     * @member {string} sign
     * @memberof SignNameReq
     * @instance
     */
    SignNameReq.prototype.sign = "";

    /**
     * Creates a new SignNameReq instance using the specified properties.
     * @function create
     * @memberof SignNameReq
     * @static
     * @param {ISignNameReq=} [properties] Properties to set
     * @returns {SignNameReq} SignNameReq instance
     */
    SignNameReq.create = function create(properties) {
        return new SignNameReq(properties);
    };

    /**
     * Encodes the specified SignNameReq message. Does not implicitly {@link SignNameReq.verify|verify} messages.
     * @function encode
     * @memberof SignNameReq
     * @static
     * @param {ISignNameReq} m SignNameReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignNameReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.sign);
        return w;
    };

    /**
     * Decodes a SignNameReq message from the specified reader or buffer.
     * @function decode
     * @memberof SignNameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignNameReq} SignNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignNameReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignNameReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.sign = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("sign"))
            throw $util.ProtocolError("missing required 'sign'", { instance: m });
        return m;
    };

    return SignNameReq;
})();

$root.UploadHeadImage = (function() {

    /**
     * Properties of an UploadHeadImage.
     * @exports IUploadHeadImage
     * @interface IUploadHeadImage
     * @property {Uint8Array} headImageData UploadHeadImage headImageData
     */

    /**
     * Constructs a new UploadHeadImage.
     * @exports UploadHeadImage
     * @classdesc Represents an UploadHeadImage.
     * @implements IUploadHeadImage
     * @constructor
     * @param {IUploadHeadImage=} [p] Properties to set
     */
    function UploadHeadImage(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UploadHeadImage headImageData.
     * @member {Uint8Array} headImageData
     * @memberof UploadHeadImage
     * @instance
     */
    UploadHeadImage.prototype.headImageData = $util.newBuffer([]);

    /**
     * Creates a new UploadHeadImage instance using the specified properties.
     * @function create
     * @memberof UploadHeadImage
     * @static
     * @param {IUploadHeadImage=} [properties] Properties to set
     * @returns {UploadHeadImage} UploadHeadImage instance
     */
    UploadHeadImage.create = function create(properties) {
        return new UploadHeadImage(properties);
    };

    /**
     * Encodes the specified UploadHeadImage message. Does not implicitly {@link UploadHeadImage.verify|verify} messages.
     * @function encode
     * @memberof UploadHeadImage
     * @static
     * @param {IUploadHeadImage} m UploadHeadImage message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UploadHeadImage.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).bytes(m.headImageData);
        return w;
    };

    /**
     * Decodes an UploadHeadImage message from the specified reader or buffer.
     * @function decode
     * @memberof UploadHeadImage
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UploadHeadImage} UploadHeadImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UploadHeadImage.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UploadHeadImage();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.headImageData = r.bytes();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("headImageData"))
            throw $util.ProtocolError("missing required 'headImageData'", { instance: m });
        return m;
    };

    return UploadHeadImage;
})();

$root.ChangeHeadBox = (function() {

    /**
     * Properties of a ChangeHeadBox.
     * @exports IChangeHeadBox
     * @interface IChangeHeadBox
     * @property {string} headbox ChangeHeadBox headbox
     */

    /**
     * Constructs a new ChangeHeadBox.
     * @exports ChangeHeadBox
     * @classdesc Represents a ChangeHeadBox.
     * @implements IChangeHeadBox
     * @constructor
     * @param {IChangeHeadBox=} [p] Properties to set
     */
    function ChangeHeadBox(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChangeHeadBox headbox.
     * @member {string} headbox
     * @memberof ChangeHeadBox
     * @instance
     */
    ChangeHeadBox.prototype.headbox = "";

    /**
     * Creates a new ChangeHeadBox instance using the specified properties.
     * @function create
     * @memberof ChangeHeadBox
     * @static
     * @param {IChangeHeadBox=} [properties] Properties to set
     * @returns {ChangeHeadBox} ChangeHeadBox instance
     */
    ChangeHeadBox.create = function create(properties) {
        return new ChangeHeadBox(properties);
    };

    /**
     * Encodes the specified ChangeHeadBox message. Does not implicitly {@link ChangeHeadBox.verify|verify} messages.
     * @function encode
     * @memberof ChangeHeadBox
     * @static
     * @param {IChangeHeadBox} m ChangeHeadBox message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeHeadBox.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.headbox);
        return w;
    };

    /**
     * Decodes a ChangeHeadBox message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeHeadBox
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChangeHeadBox} ChangeHeadBox
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeHeadBox.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChangeHeadBox();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.headbox = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("headbox"))
            throw $util.ProtocolError("missing required 'headbox'", { instance: m });
        return m;
    };

    return ChangeHeadBox;
})();

$root.GetSafeBoxInfoReq = (function() {

    /**
     * Properties of a GetSafeBoxInfoReq.
     * @exports IGetSafeBoxInfoReq
     * @interface IGetSafeBoxInfoReq
     */

    /**
     * Constructs a new GetSafeBoxInfoReq.
     * @exports GetSafeBoxInfoReq
     * @classdesc Represents a GetSafeBoxInfoReq.
     * @implements IGetSafeBoxInfoReq
     * @constructor
     * @param {IGetSafeBoxInfoReq=} [p] Properties to set
     */
    function GetSafeBoxInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetSafeBoxInfoReq instance using the specified properties.
     * @function create
     * @memberof GetSafeBoxInfoReq
     * @static
     * @param {IGetSafeBoxInfoReq=} [properties] Properties to set
     * @returns {GetSafeBoxInfoReq} GetSafeBoxInfoReq instance
     */
    GetSafeBoxInfoReq.create = function create(properties) {
        return new GetSafeBoxInfoReq(properties);
    };

    /**
     * Encodes the specified GetSafeBoxInfoReq message. Does not implicitly {@link GetSafeBoxInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetSafeBoxInfoReq
     * @static
     * @param {IGetSafeBoxInfoReq} m GetSafeBoxInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetSafeBoxInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetSafeBoxInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetSafeBoxInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetSafeBoxInfoReq} GetSafeBoxInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetSafeBoxInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetSafeBoxInfoReq();
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

    return GetSafeBoxInfoReq;
})();

$root.GetSafeBoxInfoRsp = (function() {

    /**
     * Properties of a GetSafeBoxInfoRsp.
     * @exports IGetSafeBoxInfoRsp
     * @interface IGetSafeBoxInfoRsp
     * @property {number} money GetSafeBoxInfoRsp money
     */

    /**
     * Constructs a new GetSafeBoxInfoRsp.
     * @exports GetSafeBoxInfoRsp
     * @classdesc Represents a GetSafeBoxInfoRsp.
     * @implements IGetSafeBoxInfoRsp
     * @constructor
     * @param {IGetSafeBoxInfoRsp=} [p] Properties to set
     */
    function GetSafeBoxInfoRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetSafeBoxInfoRsp money.
     * @member {number} money
     * @memberof GetSafeBoxInfoRsp
     * @instance
     */
    GetSafeBoxInfoRsp.prototype.money = 0;

    /**
     * Creates a new GetSafeBoxInfoRsp instance using the specified properties.
     * @function create
     * @memberof GetSafeBoxInfoRsp
     * @static
     * @param {IGetSafeBoxInfoRsp=} [properties] Properties to set
     * @returns {GetSafeBoxInfoRsp} GetSafeBoxInfoRsp instance
     */
    GetSafeBoxInfoRsp.create = function create(properties) {
        return new GetSafeBoxInfoRsp(properties);
    };

    /**
     * Encodes the specified GetSafeBoxInfoRsp message. Does not implicitly {@link GetSafeBoxInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof GetSafeBoxInfoRsp
     * @static
     * @param {IGetSafeBoxInfoRsp} m GetSafeBoxInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetSafeBoxInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.money);
        return w;
    };

    /**
     * Decodes a GetSafeBoxInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetSafeBoxInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetSafeBoxInfoRsp} GetSafeBoxInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetSafeBoxInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetSafeBoxInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.money = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: m });
        return m;
    };

    return GetSafeBoxInfoRsp;
})();

$root.TakeOutSafeBoxMoneyReq = (function() {

    /**
     * Properties of a TakeOutSafeBoxMoneyReq.
     * @exports ITakeOutSafeBoxMoneyReq
     * @interface ITakeOutSafeBoxMoneyReq
     * @property {number} money TakeOutSafeBoxMoneyReq money
     */

    /**
     * Constructs a new TakeOutSafeBoxMoneyReq.
     * @exports TakeOutSafeBoxMoneyReq
     * @classdesc Represents a TakeOutSafeBoxMoneyReq.
     * @implements ITakeOutSafeBoxMoneyReq
     * @constructor
     * @param {ITakeOutSafeBoxMoneyReq=} [p] Properties to set
     */
    function TakeOutSafeBoxMoneyReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TakeOutSafeBoxMoneyReq money.
     * @member {number} money
     * @memberof TakeOutSafeBoxMoneyReq
     * @instance
     */
    TakeOutSafeBoxMoneyReq.prototype.money = 0;

    /**
     * Creates a new TakeOutSafeBoxMoneyReq instance using the specified properties.
     * @function create
     * @memberof TakeOutSafeBoxMoneyReq
     * @static
     * @param {ITakeOutSafeBoxMoneyReq=} [properties] Properties to set
     * @returns {TakeOutSafeBoxMoneyReq} TakeOutSafeBoxMoneyReq instance
     */
    TakeOutSafeBoxMoneyReq.create = function create(properties) {
        return new TakeOutSafeBoxMoneyReq(properties);
    };

    /**
     * Encodes the specified TakeOutSafeBoxMoneyReq message. Does not implicitly {@link TakeOutSafeBoxMoneyReq.verify|verify} messages.
     * @function encode
     * @memberof TakeOutSafeBoxMoneyReq
     * @static
     * @param {ITakeOutSafeBoxMoneyReq} m TakeOutSafeBoxMoneyReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TakeOutSafeBoxMoneyReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.money);
        return w;
    };

    /**
     * Decodes a TakeOutSafeBoxMoneyReq message from the specified reader or buffer.
     * @function decode
     * @memberof TakeOutSafeBoxMoneyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TakeOutSafeBoxMoneyReq} TakeOutSafeBoxMoneyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TakeOutSafeBoxMoneyReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TakeOutSafeBoxMoneyReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.money = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: m });
        return m;
    };

    return TakeOutSafeBoxMoneyReq;
})();

$root.TakeOutSafeBoxMoneyRsp = (function() {

    /**
     * Properties of a TakeOutSafeBoxMoneyRsp.
     * @exports ITakeOutSafeBoxMoneyRsp
     * @interface ITakeOutSafeBoxMoneyRsp
     * @property {boolean} success TakeOutSafeBoxMoneyRsp success
     * @property {string} tip TakeOutSafeBoxMoneyRsp tip
     */

    /**
     * Constructs a new TakeOutSafeBoxMoneyRsp.
     * @exports TakeOutSafeBoxMoneyRsp
     * @classdesc Represents a TakeOutSafeBoxMoneyRsp.
     * @implements ITakeOutSafeBoxMoneyRsp
     * @constructor
     * @param {ITakeOutSafeBoxMoneyRsp=} [p] Properties to set
     */
    function TakeOutSafeBoxMoneyRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TakeOutSafeBoxMoneyRsp success.
     * @member {boolean} success
     * @memberof TakeOutSafeBoxMoneyRsp
     * @instance
     */
    TakeOutSafeBoxMoneyRsp.prototype.success = false;

    /**
     * TakeOutSafeBoxMoneyRsp tip.
     * @member {string} tip
     * @memberof TakeOutSafeBoxMoneyRsp
     * @instance
     */
    TakeOutSafeBoxMoneyRsp.prototype.tip = "";

    /**
     * Creates a new TakeOutSafeBoxMoneyRsp instance using the specified properties.
     * @function create
     * @memberof TakeOutSafeBoxMoneyRsp
     * @static
     * @param {ITakeOutSafeBoxMoneyRsp=} [properties] Properties to set
     * @returns {TakeOutSafeBoxMoneyRsp} TakeOutSafeBoxMoneyRsp instance
     */
    TakeOutSafeBoxMoneyRsp.create = function create(properties) {
        return new TakeOutSafeBoxMoneyRsp(properties);
    };

    /**
     * Encodes the specified TakeOutSafeBoxMoneyRsp message. Does not implicitly {@link TakeOutSafeBoxMoneyRsp.verify|verify} messages.
     * @function encode
     * @memberof TakeOutSafeBoxMoneyRsp
     * @static
     * @param {ITakeOutSafeBoxMoneyRsp} m TakeOutSafeBoxMoneyRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TakeOutSafeBoxMoneyRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a TakeOutSafeBoxMoneyRsp message from the specified reader or buffer.
     * @function decode
     * @memberof TakeOutSafeBoxMoneyRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TakeOutSafeBoxMoneyRsp} TakeOutSafeBoxMoneyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TakeOutSafeBoxMoneyRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TakeOutSafeBoxMoneyRsp();
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

    return TakeOutSafeBoxMoneyRsp;
})();

$root.SaveMoneyToSaveBoxMoneyReq = (function() {

    /**
     * Properties of a SaveMoneyToSaveBoxMoneyReq.
     * @exports ISaveMoneyToSaveBoxMoneyReq
     * @interface ISaveMoneyToSaveBoxMoneyReq
     * @property {number} money SaveMoneyToSaveBoxMoneyReq money
     */

    /**
     * Constructs a new SaveMoneyToSaveBoxMoneyReq.
     * @exports SaveMoneyToSaveBoxMoneyReq
     * @classdesc Represents a SaveMoneyToSaveBoxMoneyReq.
     * @implements ISaveMoneyToSaveBoxMoneyReq
     * @constructor
     * @param {ISaveMoneyToSaveBoxMoneyReq=} [p] Properties to set
     */
    function SaveMoneyToSaveBoxMoneyReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SaveMoneyToSaveBoxMoneyReq money.
     * @member {number} money
     * @memberof SaveMoneyToSaveBoxMoneyReq
     * @instance
     */
    SaveMoneyToSaveBoxMoneyReq.prototype.money = 0;

    /**
     * Creates a new SaveMoneyToSaveBoxMoneyReq instance using the specified properties.
     * @function create
     * @memberof SaveMoneyToSaveBoxMoneyReq
     * @static
     * @param {ISaveMoneyToSaveBoxMoneyReq=} [properties] Properties to set
     * @returns {SaveMoneyToSaveBoxMoneyReq} SaveMoneyToSaveBoxMoneyReq instance
     */
    SaveMoneyToSaveBoxMoneyReq.create = function create(properties) {
        return new SaveMoneyToSaveBoxMoneyReq(properties);
    };

    /**
     * Encodes the specified SaveMoneyToSaveBoxMoneyReq message. Does not implicitly {@link SaveMoneyToSaveBoxMoneyReq.verify|verify} messages.
     * @function encode
     * @memberof SaveMoneyToSaveBoxMoneyReq
     * @static
     * @param {ISaveMoneyToSaveBoxMoneyReq} m SaveMoneyToSaveBoxMoneyReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SaveMoneyToSaveBoxMoneyReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.money);
        return w;
    };

    /**
     * Decodes a SaveMoneyToSaveBoxMoneyReq message from the specified reader or buffer.
     * @function decode
     * @memberof SaveMoneyToSaveBoxMoneyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SaveMoneyToSaveBoxMoneyReq} SaveMoneyToSaveBoxMoneyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SaveMoneyToSaveBoxMoneyReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SaveMoneyToSaveBoxMoneyReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.money = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: m });
        return m;
    };

    return SaveMoneyToSaveBoxMoneyReq;
})();

$root.SaveMoneyToSaveBoxMoneyRsp = (function() {

    /**
     * Properties of a SaveMoneyToSaveBoxMoneyRsp.
     * @exports ISaveMoneyToSaveBoxMoneyRsp
     * @interface ISaveMoneyToSaveBoxMoneyRsp
     * @property {boolean} success SaveMoneyToSaveBoxMoneyRsp success
     * @property {string} tip SaveMoneyToSaveBoxMoneyRsp tip
     */

    /**
     * Constructs a new SaveMoneyToSaveBoxMoneyRsp.
     * @exports SaveMoneyToSaveBoxMoneyRsp
     * @classdesc Represents a SaveMoneyToSaveBoxMoneyRsp.
     * @implements ISaveMoneyToSaveBoxMoneyRsp
     * @constructor
     * @param {ISaveMoneyToSaveBoxMoneyRsp=} [p] Properties to set
     */
    function SaveMoneyToSaveBoxMoneyRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SaveMoneyToSaveBoxMoneyRsp success.
     * @member {boolean} success
     * @memberof SaveMoneyToSaveBoxMoneyRsp
     * @instance
     */
    SaveMoneyToSaveBoxMoneyRsp.prototype.success = false;

    /**
     * SaveMoneyToSaveBoxMoneyRsp tip.
     * @member {string} tip
     * @memberof SaveMoneyToSaveBoxMoneyRsp
     * @instance
     */
    SaveMoneyToSaveBoxMoneyRsp.prototype.tip = "";

    /**
     * Creates a new SaveMoneyToSaveBoxMoneyRsp instance using the specified properties.
     * @function create
     * @memberof SaveMoneyToSaveBoxMoneyRsp
     * @static
     * @param {ISaveMoneyToSaveBoxMoneyRsp=} [properties] Properties to set
     * @returns {SaveMoneyToSaveBoxMoneyRsp} SaveMoneyToSaveBoxMoneyRsp instance
     */
    SaveMoneyToSaveBoxMoneyRsp.create = function create(properties) {
        return new SaveMoneyToSaveBoxMoneyRsp(properties);
    };

    /**
     * Encodes the specified SaveMoneyToSaveBoxMoneyRsp message. Does not implicitly {@link SaveMoneyToSaveBoxMoneyRsp.verify|verify} messages.
     * @function encode
     * @memberof SaveMoneyToSaveBoxMoneyRsp
     * @static
     * @param {ISaveMoneyToSaveBoxMoneyRsp} m SaveMoneyToSaveBoxMoneyRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SaveMoneyToSaveBoxMoneyRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a SaveMoneyToSaveBoxMoneyRsp message from the specified reader or buffer.
     * @function decode
     * @memberof SaveMoneyToSaveBoxMoneyRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SaveMoneyToSaveBoxMoneyRsp} SaveMoneyToSaveBoxMoneyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SaveMoneyToSaveBoxMoneyRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SaveMoneyToSaveBoxMoneyRsp();
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

    return SaveMoneyToSaveBoxMoneyRsp;
})();

$root.GetAnnounInfoReq = (function() {

    /**
     * Properties of a GetAnnounInfoReq.
     * @exports IGetAnnounInfoReq
     * @interface IGetAnnounInfoReq
     */

    /**
     * Constructs a new GetAnnounInfoReq.
     * @exports GetAnnounInfoReq
     * @classdesc Represents a GetAnnounInfoReq.
     * @implements IGetAnnounInfoReq
     * @constructor
     * @param {IGetAnnounInfoReq=} [p] Properties to set
     */
    function GetAnnounInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetAnnounInfoReq instance using the specified properties.
     * @function create
     * @memberof GetAnnounInfoReq
     * @static
     * @param {IGetAnnounInfoReq=} [properties] Properties to set
     * @returns {GetAnnounInfoReq} GetAnnounInfoReq instance
     */
    GetAnnounInfoReq.create = function create(properties) {
        return new GetAnnounInfoReq(properties);
    };

    /**
     * Encodes the specified GetAnnounInfoReq message. Does not implicitly {@link GetAnnounInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetAnnounInfoReq
     * @static
     * @param {IGetAnnounInfoReq} m GetAnnounInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAnnounInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetAnnounInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetAnnounInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetAnnounInfoReq} GetAnnounInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAnnounInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetAnnounInfoReq();
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

    return GetAnnounInfoReq;
})();

$root.AnnounInfo = (function() {

    /**
     * Properties of an AnnounInfo.
     * @exports IAnnounInfo
     * @interface IAnnounInfo
     * @property {string} title AnnounInfo title
     * @property {string} timeMs AnnounInfo timeMs
     * @property {string} sendPlayerName AnnounInfo sendPlayerName
     * @property {boolean} read AnnounInfo read
     * @property {string} id AnnounInfo id
     * @property {string} photoUrl AnnounInfo photoUrl
     * @property {string} content AnnounInfo content
     */

    /**
     * Constructs a new AnnounInfo.
     * @exports AnnounInfo
     * @classdesc Represents an AnnounInfo.
     * @implements IAnnounInfo
     * @constructor
     * @param {IAnnounInfo=} [p] Properties to set
     */
    function AnnounInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AnnounInfo title.
     * @member {string} title
     * @memberof AnnounInfo
     * @instance
     */
    AnnounInfo.prototype.title = "";

    /**
     * AnnounInfo timeMs.
     * @member {string} timeMs
     * @memberof AnnounInfo
     * @instance
     */
    AnnounInfo.prototype.timeMs = "";

    /**
     * AnnounInfo sendPlayerName.
     * @member {string} sendPlayerName
     * @memberof AnnounInfo
     * @instance
     */
    AnnounInfo.prototype.sendPlayerName = "";

    /**
     * AnnounInfo read.
     * @member {boolean} read
     * @memberof AnnounInfo
     * @instance
     */
    AnnounInfo.prototype.read = false;

    /**
     * AnnounInfo id.
     * @member {string} id
     * @memberof AnnounInfo
     * @instance
     */
    AnnounInfo.prototype.id = "";

    /**
     * AnnounInfo photoUrl.
     * @member {string} photoUrl
     * @memberof AnnounInfo
     * @instance
     */
    AnnounInfo.prototype.photoUrl = "";

    /**
     * AnnounInfo content.
     * @member {string} content
     * @memberof AnnounInfo
     * @instance
     */
    AnnounInfo.prototype.content = "";

    /**
     * Creates a new AnnounInfo instance using the specified properties.
     * @function create
     * @memberof AnnounInfo
     * @static
     * @param {IAnnounInfo=} [properties] Properties to set
     * @returns {AnnounInfo} AnnounInfo instance
     */
    AnnounInfo.create = function create(properties) {
        return new AnnounInfo(properties);
    };

    /**
     * Encodes the specified AnnounInfo message. Does not implicitly {@link AnnounInfo.verify|verify} messages.
     * @function encode
     * @memberof AnnounInfo
     * @static
     * @param {IAnnounInfo} m AnnounInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AnnounInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.title);
        w.uint32(18).string(m.timeMs);
        w.uint32(26).string(m.sendPlayerName);
        w.uint32(32).bool(m.read);
        w.uint32(42).string(m.id);
        w.uint32(50).string(m.photoUrl);
        w.uint32(58).string(m.content);
        return w;
    };

    /**
     * Decodes an AnnounInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AnnounInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AnnounInfo} AnnounInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AnnounInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AnnounInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.title = r.string();
                break;
            case 2:
                m.timeMs = r.string();
                break;
            case 3:
                m.sendPlayerName = r.string();
                break;
            case 4:
                m.read = r.bool();
                break;
            case 5:
                m.id = r.string();
                break;
            case 6:
                m.photoUrl = r.string();
                break;
            case 7:
                m.content = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("title"))
            throw $util.ProtocolError("missing required 'title'", { instance: m });
        if (!m.hasOwnProperty("timeMs"))
            throw $util.ProtocolError("missing required 'timeMs'", { instance: m });
        if (!m.hasOwnProperty("sendPlayerName"))
            throw $util.ProtocolError("missing required 'sendPlayerName'", { instance: m });
        if (!m.hasOwnProperty("read"))
            throw $util.ProtocolError("missing required 'read'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("photoUrl"))
            throw $util.ProtocolError("missing required 'photoUrl'", { instance: m });
        if (!m.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: m });
        return m;
    };

    return AnnounInfo;
})();

$root.GetAnnounInfoRsp = (function() {

    /**
     * Properties of a GetAnnounInfoRsp.
     * @exports IGetAnnounInfoRsp
     * @interface IGetAnnounInfoRsp
     * @property {Array.<IAnnounInfo>|null} [announInfo] GetAnnounInfoRsp announInfo
     */

    /**
     * Constructs a new GetAnnounInfoRsp.
     * @exports GetAnnounInfoRsp
     * @classdesc Represents a GetAnnounInfoRsp.
     * @implements IGetAnnounInfoRsp
     * @constructor
     * @param {IGetAnnounInfoRsp=} [p] Properties to set
     */
    function GetAnnounInfoRsp(p) {
        this.announInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetAnnounInfoRsp announInfo.
     * @member {Array.<IAnnounInfo>} announInfo
     * @memberof GetAnnounInfoRsp
     * @instance
     */
    GetAnnounInfoRsp.prototype.announInfo = $util.emptyArray;

    /**
     * Creates a new GetAnnounInfoRsp instance using the specified properties.
     * @function create
     * @memberof GetAnnounInfoRsp
     * @static
     * @param {IGetAnnounInfoRsp=} [properties] Properties to set
     * @returns {GetAnnounInfoRsp} GetAnnounInfoRsp instance
     */
    GetAnnounInfoRsp.create = function create(properties) {
        return new GetAnnounInfoRsp(properties);
    };

    /**
     * Encodes the specified GetAnnounInfoRsp message. Does not implicitly {@link GetAnnounInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof GetAnnounInfoRsp
     * @static
     * @param {IGetAnnounInfoRsp} m GetAnnounInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAnnounInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.announInfo != null && m.announInfo.length) {
            for (var i = 0; i < m.announInfo.length; ++i)
                $root.AnnounInfo.encode(m.announInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GetAnnounInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetAnnounInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetAnnounInfoRsp} GetAnnounInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAnnounInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetAnnounInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.announInfo && m.announInfo.length))
                    m.announInfo = [];
                m.announInfo.push($root.AnnounInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GetAnnounInfoRsp;
})();

$root.ReaAnnounInfoReq = (function() {

    /**
     * Properties of a ReaAnnounInfoReq.
     * @exports IReaAnnounInfoReq
     * @interface IReaAnnounInfoReq
     * @property {string} id ReaAnnounInfoReq id
     */

    /**
     * Constructs a new ReaAnnounInfoReq.
     * @exports ReaAnnounInfoReq
     * @classdesc Represents a ReaAnnounInfoReq.
     * @implements IReaAnnounInfoReq
     * @constructor
     * @param {IReaAnnounInfoReq=} [p] Properties to set
     */
    function ReaAnnounInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReaAnnounInfoReq id.
     * @member {string} id
     * @memberof ReaAnnounInfoReq
     * @instance
     */
    ReaAnnounInfoReq.prototype.id = "";

    /**
     * Creates a new ReaAnnounInfoReq instance using the specified properties.
     * @function create
     * @memberof ReaAnnounInfoReq
     * @static
     * @param {IReaAnnounInfoReq=} [properties] Properties to set
     * @returns {ReaAnnounInfoReq} ReaAnnounInfoReq instance
     */
    ReaAnnounInfoReq.create = function create(properties) {
        return new ReaAnnounInfoReq(properties);
    };

    /**
     * Encodes the specified ReaAnnounInfoReq message. Does not implicitly {@link ReaAnnounInfoReq.verify|verify} messages.
     * @function encode
     * @memberof ReaAnnounInfoReq
     * @static
     * @param {IReaAnnounInfoReq} m ReaAnnounInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReaAnnounInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.id);
        return w;
    };

    /**
     * Decodes a ReaAnnounInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof ReaAnnounInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReaAnnounInfoReq} ReaAnnounInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReaAnnounInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReaAnnounInfoReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    return ReaAnnounInfoReq;
})();

$root.ReaAnnounInfoRsp = (function() {

    /**
     * Properties of a ReaAnnounInfoRsp.
     * @exports IReaAnnounInfoRsp
     * @interface IReaAnnounInfoRsp
     */

    /**
     * Constructs a new ReaAnnounInfoRsp.
     * @exports ReaAnnounInfoRsp
     * @classdesc Represents a ReaAnnounInfoRsp.
     * @implements IReaAnnounInfoRsp
     * @constructor
     * @param {IReaAnnounInfoRsp=} [p] Properties to set
     */
    function ReaAnnounInfoRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReaAnnounInfoRsp instance using the specified properties.
     * @function create
     * @memberof ReaAnnounInfoRsp
     * @static
     * @param {IReaAnnounInfoRsp=} [properties] Properties to set
     * @returns {ReaAnnounInfoRsp} ReaAnnounInfoRsp instance
     */
    ReaAnnounInfoRsp.create = function create(properties) {
        return new ReaAnnounInfoRsp(properties);
    };

    /**
     * Encodes the specified ReaAnnounInfoRsp message. Does not implicitly {@link ReaAnnounInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof ReaAnnounInfoRsp
     * @static
     * @param {IReaAnnounInfoRsp} m ReaAnnounInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReaAnnounInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ReaAnnounInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof ReaAnnounInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReaAnnounInfoRsp} ReaAnnounInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReaAnnounInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReaAnnounInfoRsp();
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

    return ReaAnnounInfoRsp;
})();

/**
 * RedPointType enum.
 * @exports RedPointType
 * @enum {string}
 * @property {number} Announ=0 Announ value
 * @property {number} Active_Reward=1 Active_Reward value
 */
$root.RedPointType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Announ"] = 0;
    values[valuesById[1] = "Active_Reward"] = 1;
    return values;
})();

$root.AnnounReadPointPush = (function() {

    /**
     * Properties of an AnnounReadPointPush.
     * @exports IAnnounReadPointPush
     * @interface IAnnounReadPointPush
     * @property {boolean|null} [hasRedPoint] AnnounReadPointPush hasRedPoint
     * @property {RedPointType|null} [redPointType] AnnounReadPointPush redPointType
     */

    /**
     * Constructs a new AnnounReadPointPush.
     * @exports AnnounReadPointPush
     * @classdesc Represents an AnnounReadPointPush.
     * @implements IAnnounReadPointPush
     * @constructor
     * @param {IAnnounReadPointPush=} [p] Properties to set
     */
    function AnnounReadPointPush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AnnounReadPointPush hasRedPoint.
     * @member {boolean} hasRedPoint
     * @memberof AnnounReadPointPush
     * @instance
     */
    AnnounReadPointPush.prototype.hasRedPoint = false;

    /**
     * AnnounReadPointPush redPointType.
     * @member {RedPointType} redPointType
     * @memberof AnnounReadPointPush
     * @instance
     */
    AnnounReadPointPush.prototype.redPointType = 0;

    /**
     * Creates a new AnnounReadPointPush instance using the specified properties.
     * @function create
     * @memberof AnnounReadPointPush
     * @static
     * @param {IAnnounReadPointPush=} [properties] Properties to set
     * @returns {AnnounReadPointPush} AnnounReadPointPush instance
     */
    AnnounReadPointPush.create = function create(properties) {
        return new AnnounReadPointPush(properties);
    };

    /**
     * Encodes the specified AnnounReadPointPush message. Does not implicitly {@link AnnounReadPointPush.verify|verify} messages.
     * @function encode
     * @memberof AnnounReadPointPush
     * @static
     * @param {IAnnounReadPointPush} m AnnounReadPointPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AnnounReadPointPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.hasRedPoint != null && m.hasOwnProperty("hasRedPoint"))
            w.uint32(8).bool(m.hasRedPoint);
        if (m.redPointType != null && m.hasOwnProperty("redPointType"))
            w.uint32(16).int32(m.redPointType);
        return w;
    };

    /**
     * Decodes an AnnounReadPointPush message from the specified reader or buffer.
     * @function decode
     * @memberof AnnounReadPointPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AnnounReadPointPush} AnnounReadPointPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AnnounReadPointPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AnnounReadPointPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.hasRedPoint = r.bool();
                break;
            case 2:
                m.redPointType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return AnnounReadPointPush;
})();

$root.BankruptcyPush = (function() {

    /**
     * Properties of a BankruptcyPush.
     * @exports IBankruptcyPush
     * @interface IBankruptcyPush
     * @property {number} remain BankruptcyPush remain
     */

    /**
     * Constructs a new BankruptcyPush.
     * @exports BankruptcyPush
     * @classdesc Represents a BankruptcyPush.
     * @implements IBankruptcyPush
     * @constructor
     * @param {IBankruptcyPush=} [p] Properties to set
     */
    function BankruptcyPush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BankruptcyPush remain.
     * @member {number} remain
     * @memberof BankruptcyPush
     * @instance
     */
    BankruptcyPush.prototype.remain = 0;

    /**
     * Creates a new BankruptcyPush instance using the specified properties.
     * @function create
     * @memberof BankruptcyPush
     * @static
     * @param {IBankruptcyPush=} [properties] Properties to set
     * @returns {BankruptcyPush} BankruptcyPush instance
     */
    BankruptcyPush.create = function create(properties) {
        return new BankruptcyPush(properties);
    };

    /**
     * Encodes the specified BankruptcyPush message. Does not implicitly {@link BankruptcyPush.verify|verify} messages.
     * @function encode
     * @memberof BankruptcyPush
     * @static
     * @param {IBankruptcyPush} m BankruptcyPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BankruptcyPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.remain);
        return w;
    };

    /**
     * Decodes a BankruptcyPush message from the specified reader or buffer.
     * @function decode
     * @memberof BankruptcyPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BankruptcyPush} BankruptcyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BankruptcyPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BankruptcyPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.remain = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("remain"))
            throw $util.ProtocolError("missing required 'remain'", { instance: m });
        return m;
    };

    return BankruptcyPush;
})();

$root.BankruptcyREQ = (function() {

    /**
     * Properties of a BankruptcyREQ.
     * @exports IBankruptcyREQ
     * @interface IBankruptcyREQ
     */

    /**
     * Constructs a new BankruptcyREQ.
     * @exports BankruptcyREQ
     * @classdesc Represents a BankruptcyREQ.
     * @implements IBankruptcyREQ
     * @constructor
     * @param {IBankruptcyREQ=} [p] Properties to set
     */
    function BankruptcyREQ(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new BankruptcyREQ instance using the specified properties.
     * @function create
     * @memberof BankruptcyREQ
     * @static
     * @param {IBankruptcyREQ=} [properties] Properties to set
     * @returns {BankruptcyREQ} BankruptcyREQ instance
     */
    BankruptcyREQ.create = function create(properties) {
        return new BankruptcyREQ(properties);
    };

    /**
     * Encodes the specified BankruptcyREQ message. Does not implicitly {@link BankruptcyREQ.verify|verify} messages.
     * @function encode
     * @memberof BankruptcyREQ
     * @static
     * @param {IBankruptcyREQ} m BankruptcyREQ message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BankruptcyREQ.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a BankruptcyREQ message from the specified reader or buffer.
     * @function decode
     * @memberof BankruptcyREQ
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BankruptcyREQ} BankruptcyREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BankruptcyREQ.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BankruptcyREQ();
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

    return BankruptcyREQ;
})();

$root.BankruptcyRsp = (function() {

    /**
     * Properties of a BankruptcyRsp.
     * @exports IBankruptcyRsp
     * @interface IBankruptcyRsp
     * @property {boolean} success BankruptcyRsp success
     * @property {string} tip BankruptcyRsp tip
     * @property {number} failType BankruptcyRsp failType
     */

    /**
     * Constructs a new BankruptcyRsp.
     * @exports BankruptcyRsp
     * @classdesc Represents a BankruptcyRsp.
     * @implements IBankruptcyRsp
     * @constructor
     * @param {IBankruptcyRsp=} [p] Properties to set
     */
    function BankruptcyRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BankruptcyRsp success.
     * @member {boolean} success
     * @memberof BankruptcyRsp
     * @instance
     */
    BankruptcyRsp.prototype.success = false;

    /**
     * BankruptcyRsp tip.
     * @member {string} tip
     * @memberof BankruptcyRsp
     * @instance
     */
    BankruptcyRsp.prototype.tip = "";

    /**
     * BankruptcyRsp failType.
     * @member {number} failType
     * @memberof BankruptcyRsp
     * @instance
     */
    BankruptcyRsp.prototype.failType = 0;

    /**
     * Creates a new BankruptcyRsp instance using the specified properties.
     * @function create
     * @memberof BankruptcyRsp
     * @static
     * @param {IBankruptcyRsp=} [properties] Properties to set
     * @returns {BankruptcyRsp} BankruptcyRsp instance
     */
    BankruptcyRsp.create = function create(properties) {
        return new BankruptcyRsp(properties);
    };

    /**
     * Encodes the specified BankruptcyRsp message. Does not implicitly {@link BankruptcyRsp.verify|verify} messages.
     * @function encode
     * @memberof BankruptcyRsp
     * @static
     * @param {IBankruptcyRsp} m BankruptcyRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BankruptcyRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        w.uint32(24).int32(m.failType);
        return w;
    };

    /**
     * Decodes a BankruptcyRsp message from the specified reader or buffer.
     * @function decode
     * @memberof BankruptcyRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BankruptcyRsp} BankruptcyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BankruptcyRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BankruptcyRsp();
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
                m.failType = r.int32();
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
        if (!m.hasOwnProperty("failType"))
            throw $util.ProtocolError("missing required 'failType'", { instance: m });
        return m;
    };

    return BankruptcyRsp;
})();

$root.BankruptcyRemainREQ = (function() {

    /**
     * Properties of a BankruptcyRemainREQ.
     * @exports IBankruptcyRemainREQ
     * @interface IBankruptcyRemainREQ
     */

    /**
     * Constructs a new BankruptcyRemainREQ.
     * @exports BankruptcyRemainREQ
     * @classdesc Represents a BankruptcyRemainREQ.
     * @implements IBankruptcyRemainREQ
     * @constructor
     * @param {IBankruptcyRemainREQ=} [p] Properties to set
     */
    function BankruptcyRemainREQ(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new BankruptcyRemainREQ instance using the specified properties.
     * @function create
     * @memberof BankruptcyRemainREQ
     * @static
     * @param {IBankruptcyRemainREQ=} [properties] Properties to set
     * @returns {BankruptcyRemainREQ} BankruptcyRemainREQ instance
     */
    BankruptcyRemainREQ.create = function create(properties) {
        return new BankruptcyRemainREQ(properties);
    };

    /**
     * Encodes the specified BankruptcyRemainREQ message. Does not implicitly {@link BankruptcyRemainREQ.verify|verify} messages.
     * @function encode
     * @memberof BankruptcyRemainREQ
     * @static
     * @param {IBankruptcyRemainREQ} m BankruptcyRemainREQ message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BankruptcyRemainREQ.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a BankruptcyRemainREQ message from the specified reader or buffer.
     * @function decode
     * @memberof BankruptcyRemainREQ
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BankruptcyRemainREQ} BankruptcyRemainREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BankruptcyRemainREQ.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BankruptcyRemainREQ();
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

    return BankruptcyRemainREQ;
})();

$root.BankruptcyRemainRsp = (function() {

    /**
     * Properties of a BankruptcyRemainRsp.
     * @exports IBankruptcyRemainRsp
     * @interface IBankruptcyRemainRsp
     * @property {number} remain BankruptcyRemainRsp remain
     * @property {number} allRemainGold BankruptcyRemainRsp allRemainGold
     */

    /**
     * Constructs a new BankruptcyRemainRsp.
     * @exports BankruptcyRemainRsp
     * @classdesc Represents a BankruptcyRemainRsp.
     * @implements IBankruptcyRemainRsp
     * @constructor
     * @param {IBankruptcyRemainRsp=} [p] Properties to set
     */
    function BankruptcyRemainRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BankruptcyRemainRsp remain.
     * @member {number} remain
     * @memberof BankruptcyRemainRsp
     * @instance
     */
    BankruptcyRemainRsp.prototype.remain = 0;

    /**
     * BankruptcyRemainRsp allRemainGold.
     * @member {number} allRemainGold
     * @memberof BankruptcyRemainRsp
     * @instance
     */
    BankruptcyRemainRsp.prototype.allRemainGold = 0;

    /**
     * Creates a new BankruptcyRemainRsp instance using the specified properties.
     * @function create
     * @memberof BankruptcyRemainRsp
     * @static
     * @param {IBankruptcyRemainRsp=} [properties] Properties to set
     * @returns {BankruptcyRemainRsp} BankruptcyRemainRsp instance
     */
    BankruptcyRemainRsp.create = function create(properties) {
        return new BankruptcyRemainRsp(properties);
    };

    /**
     * Encodes the specified BankruptcyRemainRsp message. Does not implicitly {@link BankruptcyRemainRsp.verify|verify} messages.
     * @function encode
     * @memberof BankruptcyRemainRsp
     * @static
     * @param {IBankruptcyRemainRsp} m BankruptcyRemainRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BankruptcyRemainRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.remain);
        w.uint32(16).int32(m.allRemainGold);
        return w;
    };

    /**
     * Decodes a BankruptcyRemainRsp message from the specified reader or buffer.
     * @function decode
     * @memberof BankruptcyRemainRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BankruptcyRemainRsp} BankruptcyRemainRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BankruptcyRemainRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BankruptcyRemainRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.remain = r.int32();
                break;
            case 2:
                m.allRemainGold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("remain"))
            throw $util.ProtocolError("missing required 'remain'", { instance: m });
        if (!m.hasOwnProperty("allRemainGold"))
            throw $util.ProtocolError("missing required 'allRemainGold'", { instance: m });
        return m;
    };

    return BankruptcyRemainRsp;
})();

$root.ServerGameReqBankruptyInfo = (function() {

    /**
     * Properties of a ServerGameReqBankruptyInfo.
     * @exports IServerGameReqBankruptyInfo
     * @interface IServerGameReqBankruptyInfo
     * @property {string} playerId ServerGameReqBankruptyInfo playerId
     */

    /**
     * Constructs a new ServerGameReqBankruptyInfo.
     * @exports ServerGameReqBankruptyInfo
     * @classdesc Represents a ServerGameReqBankruptyInfo.
     * @implements IServerGameReqBankruptyInfo
     * @constructor
     * @param {IServerGameReqBankruptyInfo=} [p] Properties to set
     */
    function ServerGameReqBankruptyInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ServerGameReqBankruptyInfo playerId.
     * @member {string} playerId
     * @memberof ServerGameReqBankruptyInfo
     * @instance
     */
    ServerGameReqBankruptyInfo.prototype.playerId = "";

    /**
     * Creates a new ServerGameReqBankruptyInfo instance using the specified properties.
     * @function create
     * @memberof ServerGameReqBankruptyInfo
     * @static
     * @param {IServerGameReqBankruptyInfo=} [properties] Properties to set
     * @returns {ServerGameReqBankruptyInfo} ServerGameReqBankruptyInfo instance
     */
    ServerGameReqBankruptyInfo.create = function create(properties) {
        return new ServerGameReqBankruptyInfo(properties);
    };

    /**
     * Encodes the specified ServerGameReqBankruptyInfo message. Does not implicitly {@link ServerGameReqBankruptyInfo.verify|verify} messages.
     * @function encode
     * @memberof ServerGameReqBankruptyInfo
     * @static
     * @param {IServerGameReqBankruptyInfo} m ServerGameReqBankruptyInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerGameReqBankruptyInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        return w;
    };

    /**
     * Decodes a ServerGameReqBankruptyInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ServerGameReqBankruptyInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ServerGameReqBankruptyInfo} ServerGameReqBankruptyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerGameReqBankruptyInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ServerGameReqBankruptyInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        return m;
    };

    return ServerGameReqBankruptyInfo;
})();

$root.ZhuCeSongJinPush = (function() {

    /**
     * Properties of a ZhuCeSongJinPush.
     * @exports IZhuCeSongJinPush
     * @interface IZhuCeSongJinPush
     * @property {boolean} hasZhuCeSong ZhuCeSongJinPush hasZhuCeSong
     */

    /**
     * Constructs a new ZhuCeSongJinPush.
     * @exports ZhuCeSongJinPush
     * @classdesc Represents a ZhuCeSongJinPush.
     * @implements IZhuCeSongJinPush
     * @constructor
     * @param {IZhuCeSongJinPush=} [p] Properties to set
     */
    function ZhuCeSongJinPush(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ZhuCeSongJinPush hasZhuCeSong.
     * @member {boolean} hasZhuCeSong
     * @memberof ZhuCeSongJinPush
     * @instance
     */
    ZhuCeSongJinPush.prototype.hasZhuCeSong = false;

    /**
     * Creates a new ZhuCeSongJinPush instance using the specified properties.
     * @function create
     * @memberof ZhuCeSongJinPush
     * @static
     * @param {IZhuCeSongJinPush=} [properties] Properties to set
     * @returns {ZhuCeSongJinPush} ZhuCeSongJinPush instance
     */
    ZhuCeSongJinPush.create = function create(properties) {
        return new ZhuCeSongJinPush(properties);
    };

    /**
     * Encodes the specified ZhuCeSongJinPush message. Does not implicitly {@link ZhuCeSongJinPush.verify|verify} messages.
     * @function encode
     * @memberof ZhuCeSongJinPush
     * @static
     * @param {IZhuCeSongJinPush} m ZhuCeSongJinPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZhuCeSongJinPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.hasZhuCeSong);
        return w;
    };

    /**
     * Decodes a ZhuCeSongJinPush message from the specified reader or buffer.
     * @function decode
     * @memberof ZhuCeSongJinPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ZhuCeSongJinPush} ZhuCeSongJinPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZhuCeSongJinPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ZhuCeSongJinPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.hasZhuCeSong = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("hasZhuCeSong"))
            throw $util.ProtocolError("missing required 'hasZhuCeSong'", { instance: m });
        return m;
    };

    return ZhuCeSongJinPush;
})();

$root.ZhuCeSongJinREQ = (function() {

    /**
     * Properties of a ZhuCeSongJinREQ.
     * @exports IZhuCeSongJinREQ
     * @interface IZhuCeSongJinREQ
     */

    /**
     * Constructs a new ZhuCeSongJinREQ.
     * @exports ZhuCeSongJinREQ
     * @classdesc Represents a ZhuCeSongJinREQ.
     * @implements IZhuCeSongJinREQ
     * @constructor
     * @param {IZhuCeSongJinREQ=} [p] Properties to set
     */
    function ZhuCeSongJinREQ(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ZhuCeSongJinREQ instance using the specified properties.
     * @function create
     * @memberof ZhuCeSongJinREQ
     * @static
     * @param {IZhuCeSongJinREQ=} [properties] Properties to set
     * @returns {ZhuCeSongJinREQ} ZhuCeSongJinREQ instance
     */
    ZhuCeSongJinREQ.create = function create(properties) {
        return new ZhuCeSongJinREQ(properties);
    };

    /**
     * Encodes the specified ZhuCeSongJinREQ message. Does not implicitly {@link ZhuCeSongJinREQ.verify|verify} messages.
     * @function encode
     * @memberof ZhuCeSongJinREQ
     * @static
     * @param {IZhuCeSongJinREQ} m ZhuCeSongJinREQ message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZhuCeSongJinREQ.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ZhuCeSongJinREQ message from the specified reader or buffer.
     * @function decode
     * @memberof ZhuCeSongJinREQ
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ZhuCeSongJinREQ} ZhuCeSongJinREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZhuCeSongJinREQ.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ZhuCeSongJinREQ();
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

    return ZhuCeSongJinREQ;
})();

$root.ZhuCeSongJinRsp = (function() {

    /**
     * Properties of a ZhuCeSongJinRsp.
     * @exports IZhuCeSongJinRsp
     * @interface IZhuCeSongJinRsp
     * @property {boolean} success ZhuCeSongJinRsp success
     * @property {string} tip ZhuCeSongJinRsp tip
     * @property {number} money ZhuCeSongJinRsp money
     */

    /**
     * Constructs a new ZhuCeSongJinRsp.
     * @exports ZhuCeSongJinRsp
     * @classdesc Represents a ZhuCeSongJinRsp.
     * @implements IZhuCeSongJinRsp
     * @constructor
     * @param {IZhuCeSongJinRsp=} [p] Properties to set
     */
    function ZhuCeSongJinRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ZhuCeSongJinRsp success.
     * @member {boolean} success
     * @memberof ZhuCeSongJinRsp
     * @instance
     */
    ZhuCeSongJinRsp.prototype.success = false;

    /**
     * ZhuCeSongJinRsp tip.
     * @member {string} tip
     * @memberof ZhuCeSongJinRsp
     * @instance
     */
    ZhuCeSongJinRsp.prototype.tip = "";

    /**
     * ZhuCeSongJinRsp money.
     * @member {number} money
     * @memberof ZhuCeSongJinRsp
     * @instance
     */
    ZhuCeSongJinRsp.prototype.money = 0;

    /**
     * Creates a new ZhuCeSongJinRsp instance using the specified properties.
     * @function create
     * @memberof ZhuCeSongJinRsp
     * @static
     * @param {IZhuCeSongJinRsp=} [properties] Properties to set
     * @returns {ZhuCeSongJinRsp} ZhuCeSongJinRsp instance
     */
    ZhuCeSongJinRsp.create = function create(properties) {
        return new ZhuCeSongJinRsp(properties);
    };

    /**
     * Encodes the specified ZhuCeSongJinRsp message. Does not implicitly {@link ZhuCeSongJinRsp.verify|verify} messages.
     * @function encode
     * @memberof ZhuCeSongJinRsp
     * @static
     * @param {IZhuCeSongJinRsp} m ZhuCeSongJinRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZhuCeSongJinRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        w.uint32(24).int32(m.money);
        return w;
    };

    /**
     * Decodes a ZhuCeSongJinRsp message from the specified reader or buffer.
     * @function decode
     * @memberof ZhuCeSongJinRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ZhuCeSongJinRsp} ZhuCeSongJinRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZhuCeSongJinRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ZhuCeSongJinRsp();
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
                m.money = r.int32();
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
        if (!m.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: m });
        return m;
    };

    return ZhuCeSongJinRsp;
})();

$root.XinShouJinREQ = (function() {

    /**
     * Properties of a XinShouJinREQ.
     * @exports IXinShouJinREQ
     * @interface IXinShouJinREQ
     */

    /**
     * Constructs a new XinShouJinREQ.
     * @exports XinShouJinREQ
     * @classdesc Represents a XinShouJinREQ.
     * @implements IXinShouJinREQ
     * @constructor
     * @param {IXinShouJinREQ=} [p] Properties to set
     */
    function XinShouJinREQ(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new XinShouJinREQ instance using the specified properties.
     * @function create
     * @memberof XinShouJinREQ
     * @static
     * @param {IXinShouJinREQ=} [properties] Properties to set
     * @returns {XinShouJinREQ} XinShouJinREQ instance
     */
    XinShouJinREQ.create = function create(properties) {
        return new XinShouJinREQ(properties);
    };

    /**
     * Encodes the specified XinShouJinREQ message. Does not implicitly {@link XinShouJinREQ.verify|verify} messages.
     * @function encode
     * @memberof XinShouJinREQ
     * @static
     * @param {IXinShouJinREQ} m XinShouJinREQ message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XinShouJinREQ.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a XinShouJinREQ message from the specified reader or buffer.
     * @function decode
     * @memberof XinShouJinREQ
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {XinShouJinREQ} XinShouJinREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XinShouJinREQ.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.XinShouJinREQ();
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

    return XinShouJinREQ;
})();

$root.XinShouJinRsp = (function() {

    /**
     * Properties of a XinShouJinRsp.
     * @exports IXinShouJinRsp
     * @interface IXinShouJinRsp
     * @property {boolean} success XinShouJinRsp success
     * @property {string} tip XinShouJinRsp tip
     * @property {number} money XinShouJinRsp money
     */

    /**
     * Constructs a new XinShouJinRsp.
     * @exports XinShouJinRsp
     * @classdesc Represents a XinShouJinRsp.
     * @implements IXinShouJinRsp
     * @constructor
     * @param {IXinShouJinRsp=} [p] Properties to set
     */
    function XinShouJinRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * XinShouJinRsp success.
     * @member {boolean} success
     * @memberof XinShouJinRsp
     * @instance
     */
    XinShouJinRsp.prototype.success = false;

    /**
     * XinShouJinRsp tip.
     * @member {string} tip
     * @memberof XinShouJinRsp
     * @instance
     */
    XinShouJinRsp.prototype.tip = "";

    /**
     * XinShouJinRsp money.
     * @member {number} money
     * @memberof XinShouJinRsp
     * @instance
     */
    XinShouJinRsp.prototype.money = 0;

    /**
     * Creates a new XinShouJinRsp instance using the specified properties.
     * @function create
     * @memberof XinShouJinRsp
     * @static
     * @param {IXinShouJinRsp=} [properties] Properties to set
     * @returns {XinShouJinRsp} XinShouJinRsp instance
     */
    XinShouJinRsp.create = function create(properties) {
        return new XinShouJinRsp(properties);
    };

    /**
     * Encodes the specified XinShouJinRsp message. Does not implicitly {@link XinShouJinRsp.verify|verify} messages.
     * @function encode
     * @memberof XinShouJinRsp
     * @static
     * @param {IXinShouJinRsp} m XinShouJinRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XinShouJinRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        w.uint32(24).int32(m.money);
        return w;
    };

    /**
     * Decodes a XinShouJinRsp message from the specified reader or buffer.
     * @function decode
     * @memberof XinShouJinRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {XinShouJinRsp} XinShouJinRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XinShouJinRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.XinShouJinRsp();
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
                m.money = r.int32();
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
        if (!m.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: m });
        return m;
    };

    return XinShouJinRsp;
})();

$root.XinShouUpStepREQ = (function() {

    /**
     * Properties of a XinShouUpStepREQ.
     * @exports IXinShouUpStepREQ
     * @interface IXinShouUpStepREQ
     * @property {number} step XinShouUpStepREQ step
     */

    /**
     * Constructs a new XinShouUpStepREQ.
     * @exports XinShouUpStepREQ
     * @classdesc Represents a XinShouUpStepREQ.
     * @implements IXinShouUpStepREQ
     * @constructor
     * @param {IXinShouUpStepREQ=} [p] Properties to set
     */
    function XinShouUpStepREQ(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * XinShouUpStepREQ step.
     * @member {number} step
     * @memberof XinShouUpStepREQ
     * @instance
     */
    XinShouUpStepREQ.prototype.step = 0;

    /**
     * Creates a new XinShouUpStepREQ instance using the specified properties.
     * @function create
     * @memberof XinShouUpStepREQ
     * @static
     * @param {IXinShouUpStepREQ=} [properties] Properties to set
     * @returns {XinShouUpStepREQ} XinShouUpStepREQ instance
     */
    XinShouUpStepREQ.create = function create(properties) {
        return new XinShouUpStepREQ(properties);
    };

    /**
     * Encodes the specified XinShouUpStepREQ message. Does not implicitly {@link XinShouUpStepREQ.verify|verify} messages.
     * @function encode
     * @memberof XinShouUpStepREQ
     * @static
     * @param {IXinShouUpStepREQ} m XinShouUpStepREQ message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XinShouUpStepREQ.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.step);
        return w;
    };

    /**
     * Decodes a XinShouUpStepREQ message from the specified reader or buffer.
     * @function decode
     * @memberof XinShouUpStepREQ
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {XinShouUpStepREQ} XinShouUpStepREQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XinShouUpStepREQ.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.XinShouUpStepREQ();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.step = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("step"))
            throw $util.ProtocolError("missing required 'step'", { instance: m });
        return m;
    };

    return XinShouUpStepREQ;
})();

$root.XinShouUpStepRsp = (function() {

    /**
     * Properties of a XinShouUpStepRsp.
     * @exports IXinShouUpStepRsp
     * @interface IXinShouUpStepRsp
     * @property {boolean} success XinShouUpStepRsp success
     */

    /**
     * Constructs a new XinShouUpStepRsp.
     * @exports XinShouUpStepRsp
     * @classdesc Represents a XinShouUpStepRsp.
     * @implements IXinShouUpStepRsp
     * @constructor
     * @param {IXinShouUpStepRsp=} [p] Properties to set
     */
    function XinShouUpStepRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * XinShouUpStepRsp success.
     * @member {boolean} success
     * @memberof XinShouUpStepRsp
     * @instance
     */
    XinShouUpStepRsp.prototype.success = false;

    /**
     * Creates a new XinShouUpStepRsp instance using the specified properties.
     * @function create
     * @memberof XinShouUpStepRsp
     * @static
     * @param {IXinShouUpStepRsp=} [properties] Properties to set
     * @returns {XinShouUpStepRsp} XinShouUpStepRsp instance
     */
    XinShouUpStepRsp.create = function create(properties) {
        return new XinShouUpStepRsp(properties);
    };

    /**
     * Encodes the specified XinShouUpStepRsp message. Does not implicitly {@link XinShouUpStepRsp.verify|verify} messages.
     * @function encode
     * @memberof XinShouUpStepRsp
     * @static
     * @param {IXinShouUpStepRsp} m XinShouUpStepRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XinShouUpStepRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        return w;
    };

    /**
     * Decodes a XinShouUpStepRsp message from the specified reader or buffer.
     * @function decode
     * @memberof XinShouUpStepRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {XinShouUpStepRsp} XinShouUpStepRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XinShouUpStepRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.XinShouUpStepRsp();
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

    return XinShouUpStepRsp;
})();

$root.XinShouJinAndStepPush = (function() {

    /**
     * Properties of a XinShouJinAndStepPush.
     * @exports IXinShouJinAndStepPush
     * @interface IXinShouJinAndStepPush
     * @property {Array.<number>|null} [step] XinShouJinAndStepPush step
     * @property {boolean} canGetXinShouJin XinShouJinAndStepPush canGetXinShouJin
     * @property {number} money XinShouJinAndStepPush money
     */

    /**
     * Constructs a new XinShouJinAndStepPush.
     * @exports XinShouJinAndStepPush
     * @classdesc Represents a XinShouJinAndStepPush.
     * @implements IXinShouJinAndStepPush
     * @constructor
     * @param {IXinShouJinAndStepPush=} [p] Properties to set
     */
    function XinShouJinAndStepPush(p) {
        this.step = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * XinShouJinAndStepPush step.
     * @member {Array.<number>} step
     * @memberof XinShouJinAndStepPush
     * @instance
     */
    XinShouJinAndStepPush.prototype.step = $util.emptyArray;

    /**
     * XinShouJinAndStepPush canGetXinShouJin.
     * @member {boolean} canGetXinShouJin
     * @memberof XinShouJinAndStepPush
     * @instance
     */
    XinShouJinAndStepPush.prototype.canGetXinShouJin = false;

    /**
     * XinShouJinAndStepPush money.
     * @member {number} money
     * @memberof XinShouJinAndStepPush
     * @instance
     */
    XinShouJinAndStepPush.prototype.money = 0;

    /**
     * Creates a new XinShouJinAndStepPush instance using the specified properties.
     * @function create
     * @memberof XinShouJinAndStepPush
     * @static
     * @param {IXinShouJinAndStepPush=} [properties] Properties to set
     * @returns {XinShouJinAndStepPush} XinShouJinAndStepPush instance
     */
    XinShouJinAndStepPush.create = function create(properties) {
        return new XinShouJinAndStepPush(properties);
    };

    /**
     * Encodes the specified XinShouJinAndStepPush message. Does not implicitly {@link XinShouJinAndStepPush.verify|verify} messages.
     * @function encode
     * @memberof XinShouJinAndStepPush
     * @static
     * @param {IXinShouJinAndStepPush} m XinShouJinAndStepPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XinShouJinAndStepPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.step != null && m.step.length) {
            for (var i = 0; i < m.step.length; ++i)
                w.uint32(8).int32(m.step[i]);
        }
        w.uint32(16).bool(m.canGetXinShouJin);
        w.uint32(24).int32(m.money);
        return w;
    };

    /**
     * Decodes a XinShouJinAndStepPush message from the specified reader or buffer.
     * @function decode
     * @memberof XinShouJinAndStepPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {XinShouJinAndStepPush} XinShouJinAndStepPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XinShouJinAndStepPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.XinShouJinAndStepPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.step && m.step.length))
                    m.step = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.step.push(r.int32());
                } else
                    m.step.push(r.int32());
                break;
            case 2:
                m.canGetXinShouJin = r.bool();
                break;
            case 3:
                m.money = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("canGetXinShouJin"))
            throw $util.ProtocolError("missing required 'canGetXinShouJin'", { instance: m });
        if (!m.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: m });
        return m;
    };

    return XinShouJinAndStepPush;
})();

$root.BindingMoblieNumeReq = (function() {

    /**
     * Properties of a BindingMoblieNumeReq.
     * @exports IBindingMoblieNumeReq
     * @interface IBindingMoblieNumeReq
     * @property {string} mobileNum BindingMoblieNumeReq mobileNum
     * @property {string} pwd BindingMoblieNumeReq pwd
     * @property {string} confirmPwd BindingMoblieNumeReq confirmPwd
     * @property {string} checkCode BindingMoblieNumeReq checkCode
     */

    /**
     * Constructs a new BindingMoblieNumeReq.
     * @exports BindingMoblieNumeReq
     * @classdesc Represents a BindingMoblieNumeReq.
     * @implements IBindingMoblieNumeReq
     * @constructor
     * @param {IBindingMoblieNumeReq=} [p] Properties to set
     */
    function BindingMoblieNumeReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BindingMoblieNumeReq mobileNum.
     * @member {string} mobileNum
     * @memberof BindingMoblieNumeReq
     * @instance
     */
    BindingMoblieNumeReq.prototype.mobileNum = "";

    /**
     * BindingMoblieNumeReq pwd.
     * @member {string} pwd
     * @memberof BindingMoblieNumeReq
     * @instance
     */
    BindingMoblieNumeReq.prototype.pwd = "";

    /**
     * BindingMoblieNumeReq confirmPwd.
     * @member {string} confirmPwd
     * @memberof BindingMoblieNumeReq
     * @instance
     */
    BindingMoblieNumeReq.prototype.confirmPwd = "";

    /**
     * BindingMoblieNumeReq checkCode.
     * @member {string} checkCode
     * @memberof BindingMoblieNumeReq
     * @instance
     */
    BindingMoblieNumeReq.prototype.checkCode = "";

    /**
     * Creates a new BindingMoblieNumeReq instance using the specified properties.
     * @function create
     * @memberof BindingMoblieNumeReq
     * @static
     * @param {IBindingMoblieNumeReq=} [properties] Properties to set
     * @returns {BindingMoblieNumeReq} BindingMoblieNumeReq instance
     */
    BindingMoblieNumeReq.create = function create(properties) {
        return new BindingMoblieNumeReq(properties);
    };

    /**
     * Encodes the specified BindingMoblieNumeReq message. Does not implicitly {@link BindingMoblieNumeReq.verify|verify} messages.
     * @function encode
     * @memberof BindingMoblieNumeReq
     * @static
     * @param {IBindingMoblieNumeReq} m BindingMoblieNumeReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BindingMoblieNumeReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.mobileNum);
        w.uint32(18).string(m.pwd);
        w.uint32(26).string(m.confirmPwd);
        w.uint32(34).string(m.checkCode);
        return w;
    };

    /**
     * Decodes a BindingMoblieNumeReq message from the specified reader or buffer.
     * @function decode
     * @memberof BindingMoblieNumeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BindingMoblieNumeReq} BindingMoblieNumeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BindingMoblieNumeReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BindingMoblieNumeReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.mobileNum = r.string();
                break;
            case 2:
                m.pwd = r.string();
                break;
            case 3:
                m.confirmPwd = r.string();
                break;
            case 4:
                m.checkCode = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("mobileNum"))
            throw $util.ProtocolError("missing required 'mobileNum'", { instance: m });
        if (!m.hasOwnProperty("pwd"))
            throw $util.ProtocolError("missing required 'pwd'", { instance: m });
        if (!m.hasOwnProperty("confirmPwd"))
            throw $util.ProtocolError("missing required 'confirmPwd'", { instance: m });
        if (!m.hasOwnProperty("checkCode"))
            throw $util.ProtocolError("missing required 'checkCode'", { instance: m });
        return m;
    };

    return BindingMoblieNumeReq;
})();

$root.BindingMoblieNumeRes = (function() {

    /**
     * Properties of a BindingMoblieNumeRes.
     * @exports IBindingMoblieNumeRes
     * @interface IBindingMoblieNumeRes
     * @property {boolean} isSuc BindingMoblieNumeRes isSuc
     * @property {string|null} [mobileNum] BindingMoblieNumeRes mobileNum
     * @property {string|null} [pwd] BindingMoblieNumeRes pwd
     * @property {string|null} [failTips] BindingMoblieNumeRes failTips
     */

    /**
     * Constructs a new BindingMoblieNumeRes.
     * @exports BindingMoblieNumeRes
     * @classdesc Represents a BindingMoblieNumeRes.
     * @implements IBindingMoblieNumeRes
     * @constructor
     * @param {IBindingMoblieNumeRes=} [p] Properties to set
     */
    function BindingMoblieNumeRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BindingMoblieNumeRes isSuc.
     * @member {boolean} isSuc
     * @memberof BindingMoblieNumeRes
     * @instance
     */
    BindingMoblieNumeRes.prototype.isSuc = false;

    /**
     * BindingMoblieNumeRes mobileNum.
     * @member {string} mobileNum
     * @memberof BindingMoblieNumeRes
     * @instance
     */
    BindingMoblieNumeRes.prototype.mobileNum = "";

    /**
     * BindingMoblieNumeRes pwd.
     * @member {string} pwd
     * @memberof BindingMoblieNumeRes
     * @instance
     */
    BindingMoblieNumeRes.prototype.pwd = "";

    /**
     * BindingMoblieNumeRes failTips.
     * @member {string} failTips
     * @memberof BindingMoblieNumeRes
     * @instance
     */
    BindingMoblieNumeRes.prototype.failTips = "";

    /**
     * Creates a new BindingMoblieNumeRes instance using the specified properties.
     * @function create
     * @memberof BindingMoblieNumeRes
     * @static
     * @param {IBindingMoblieNumeRes=} [properties] Properties to set
     * @returns {BindingMoblieNumeRes} BindingMoblieNumeRes instance
     */
    BindingMoblieNumeRes.create = function create(properties) {
        return new BindingMoblieNumeRes(properties);
    };

    /**
     * Encodes the specified BindingMoblieNumeRes message. Does not implicitly {@link BindingMoblieNumeRes.verify|verify} messages.
     * @function encode
     * @memberof BindingMoblieNumeRes
     * @static
     * @param {IBindingMoblieNumeRes} m BindingMoblieNumeRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BindingMoblieNumeRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuc);
        if (m.mobileNum != null && m.hasOwnProperty("mobileNum"))
            w.uint32(18).string(m.mobileNum);
        if (m.pwd != null && m.hasOwnProperty("pwd"))
            w.uint32(26).string(m.pwd);
        if (m.failTips != null && m.hasOwnProperty("failTips"))
            w.uint32(34).string(m.failTips);
        return w;
    };

    /**
     * Decodes a BindingMoblieNumeRes message from the specified reader or buffer.
     * @function decode
     * @memberof BindingMoblieNumeRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BindingMoblieNumeRes} BindingMoblieNumeRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BindingMoblieNumeRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BindingMoblieNumeRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuc = r.bool();
                break;
            case 2:
                m.mobileNum = r.string();
                break;
            case 3:
                m.pwd = r.string();
                break;
            case 4:
                m.failTips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isSuc"))
            throw $util.ProtocolError("missing required 'isSuc'", { instance: m });
        return m;
    };

    return BindingMoblieNumeRes;
})();

$root.HeadFrameListPush = (function() {

    /**
     * Properties of a HeadFrameListPush.
     * @exports IHeadFrameListPush
     * @interface IHeadFrameListPush
     * @property {Array.<number>|null} [headFrameList] HeadFrameListPush headFrameList
     */

    /**
     * Constructs a new HeadFrameListPush.
     * @exports HeadFrameListPush
     * @classdesc Represents a HeadFrameListPush.
     * @implements IHeadFrameListPush
     * @constructor
     * @param {IHeadFrameListPush=} [p] Properties to set
     */
    function HeadFrameListPush(p) {
        this.headFrameList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HeadFrameListPush headFrameList.
     * @member {Array.<number>} headFrameList
     * @memberof HeadFrameListPush
     * @instance
     */
    HeadFrameListPush.prototype.headFrameList = $util.emptyArray;

    /**
     * Creates a new HeadFrameListPush instance using the specified properties.
     * @function create
     * @memberof HeadFrameListPush
     * @static
     * @param {IHeadFrameListPush=} [properties] Properties to set
     * @returns {HeadFrameListPush} HeadFrameListPush instance
     */
    HeadFrameListPush.create = function create(properties) {
        return new HeadFrameListPush(properties);
    };

    /**
     * Encodes the specified HeadFrameListPush message. Does not implicitly {@link HeadFrameListPush.verify|verify} messages.
     * @function encode
     * @memberof HeadFrameListPush
     * @static
     * @param {IHeadFrameListPush} m HeadFrameListPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeadFrameListPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.headFrameList != null && m.headFrameList.length) {
            for (var i = 0; i < m.headFrameList.length; ++i)
                w.uint32(8).int32(m.headFrameList[i]);
        }
        return w;
    };

    /**
     * Decodes a HeadFrameListPush message from the specified reader or buffer.
     * @function decode
     * @memberof HeadFrameListPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HeadFrameListPush} HeadFrameListPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeadFrameListPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HeadFrameListPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.headFrameList && m.headFrameList.length))
                    m.headFrameList = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.headFrameList.push(r.int32());
                } else
                    m.headFrameList.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return HeadFrameListPush;
})();

$root.BatteryListPush = (function() {

    /**
     * Properties of a BatteryListPush.
     * @exports IBatteryListPush
     * @interface IBatteryListPush
     * @property {Array.<number>|null} [batteryList] BatteryListPush batteryList
     */

    /**
     * Constructs a new BatteryListPush.
     * @exports BatteryListPush
     * @classdesc Represents a BatteryListPush.
     * @implements IBatteryListPush
     * @constructor
     * @param {IBatteryListPush=} [p] Properties to set
     */
    function BatteryListPush(p) {
        this.batteryList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BatteryListPush batteryList.
     * @member {Array.<number>} batteryList
     * @memberof BatteryListPush
     * @instance
     */
    BatteryListPush.prototype.batteryList = $util.emptyArray;

    /**
     * Creates a new BatteryListPush instance using the specified properties.
     * @function create
     * @memberof BatteryListPush
     * @static
     * @param {IBatteryListPush=} [properties] Properties to set
     * @returns {BatteryListPush} BatteryListPush instance
     */
    BatteryListPush.create = function create(properties) {
        return new BatteryListPush(properties);
    };

    /**
     * Encodes the specified BatteryListPush message. Does not implicitly {@link BatteryListPush.verify|verify} messages.
     * @function encode
     * @memberof BatteryListPush
     * @static
     * @param {IBatteryListPush} m BatteryListPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BatteryListPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.batteryList != null && m.batteryList.length) {
            for (var i = 0; i < m.batteryList.length; ++i)
                w.uint32(8).int32(m.batteryList[i]);
        }
        return w;
    };

    /**
     * Decodes a BatteryListPush message from the specified reader or buffer.
     * @function decode
     * @memberof BatteryListPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BatteryListPush} BatteryListPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BatteryListPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BatteryListPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.batteryList && m.batteryList.length))
                    m.batteryList = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.batteryList.push(r.int32());
                } else
                    m.batteryList.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BatteryListPush;
})();

module.exports = $root;

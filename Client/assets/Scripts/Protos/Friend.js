/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Friend || ($protobuf.roots.Friend = {});

/**
 * FriendOnlineStatus enum.
 * @exports FriendOnlineStatus
 * @enum {string}
 * @property {number} Online=1 Online value
 * @property {number} OnBattle=2 OnBattle value
 * @property {number} Offline=3 Offline value
 */
$root.FriendOnlineStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Online"] = 1;
    values[valuesById[2] = "OnBattle"] = 2;
    values[valuesById[3] = "Offline"] = 3;
    return values;
})();

/**
 * FriendStatus enum.
 * @exports FriendStatus
 * @enum {string}
 * @property {number} Status_Apply=1 Status_Apply value
 * @property {number} Status_Friend=2 Status_Friend value
 * @property {number} Status_NoFriend=3 Status_NoFriend value
 */
$root.FriendStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Status_Apply"] = 1;
    values[valuesById[2] = "Status_Friend"] = 2;
    values[valuesById[3] = "Status_NoFriend"] = 3;
    return values;
})();

$root.Friend = (function() {

    /**
     * Properties of a Friend.
     * @exports IFriend
     * @interface IFriend
     * @property {number|Long} playerID Friend playerID
     * @property {string} username Friend username
     * @property {string} headImageUrl Friend headImageUrl
     * @property {number} vipLv Friend vipLv
     * @property {FriendOnlineStatus|null} [status] Friend status
     * @property {number|Long} gold Friend gold
     * @property {boolean|null} [haveChat] Friend haveChat
     * @property {FriendStatus|null} [friendStatus] Friend friendStatus
     */

    /**
     * Constructs a new Friend.
     * @exports Friend
     * @classdesc Represents a Friend.
     * @implements IFriend
     * @constructor
     * @param {IFriend=} [p] Properties to set
     */
    function Friend(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Friend playerID.
     * @member {number|Long} playerID
     * @memberof Friend
     * @instance
     */
    Friend.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Friend username.
     * @member {string} username
     * @memberof Friend
     * @instance
     */
    Friend.prototype.username = "";

    /**
     * Friend headImageUrl.
     * @member {string} headImageUrl
     * @memberof Friend
     * @instance
     */
    Friend.prototype.headImageUrl = "";

    /**
     * Friend vipLv.
     * @member {number} vipLv
     * @memberof Friend
     * @instance
     */
    Friend.prototype.vipLv = 0;

    /**
     * Friend status.
     * @member {FriendOnlineStatus} status
     * @memberof Friend
     * @instance
     */
    Friend.prototype.status = 1;

    /**
     * Friend gold.
     * @member {number|Long} gold
     * @memberof Friend
     * @instance
     */
    Friend.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Friend haveChat.
     * @member {boolean} haveChat
     * @memberof Friend
     * @instance
     */
    Friend.prototype.haveChat = false;

    /**
     * Friend friendStatus.
     * @member {FriendStatus} friendStatus
     * @memberof Friend
     * @instance
     */
    Friend.prototype.friendStatus = 1;

    /**
     * Creates a new Friend instance using the specified properties.
     * @function create
     * @memberof Friend
     * @static
     * @param {IFriend=} [properties] Properties to set
     * @returns {Friend} Friend instance
     */
    Friend.create = function create(properties) {
        return new Friend(properties);
    };

    /**
     * Encodes the specified Friend message. Does not implicitly {@link Friend.verify|verify} messages.
     * @function encode
     * @memberof Friend
     * @static
     * @param {IFriend} m Friend message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Friend.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        w.uint32(18).string(m.username);
        w.uint32(26).string(m.headImageUrl);
        w.uint32(32).int32(m.vipLv);
        if (m.status != null && m.hasOwnProperty("status"))
            w.uint32(40).int32(m.status);
        w.uint32(48).int64(m.gold);
        if (m.haveChat != null && m.hasOwnProperty("haveChat"))
            w.uint32(56).bool(m.haveChat);
        if (m.friendStatus != null && m.hasOwnProperty("friendStatus"))
            w.uint32(64).int32(m.friendStatus);
        return w;
    };

    /**
     * Decodes a Friend message from the specified reader or buffer.
     * @function decode
     * @memberof Friend
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Friend} Friend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Friend.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Friend();
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
                m.status = r.int32();
                break;
            case 6:
                m.gold = r.int64();
                break;
            case 7:
                m.haveChat = r.bool();
                break;
            case 8:
                m.friendStatus = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerID"))
            throw $util.ProtocolError("missing required 'playerID'", { instance: m });
        if (!m.hasOwnProperty("username"))
            throw $util.ProtocolError("missing required 'username'", { instance: m });
        if (!m.hasOwnProperty("headImageUrl"))
            throw $util.ProtocolError("missing required 'headImageUrl'", { instance: m });
        if (!m.hasOwnProperty("vipLv"))
            throw $util.ProtocolError("missing required 'vipLv'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return Friend;
})();

$root.ApplyFriend = (function() {

    /**
     * Properties of an ApplyFriend.
     * @exports IApplyFriend
     * @interface IApplyFriend
     * @property {number|Long} playerID ApplyFriend playerID
     * @property {string} username ApplyFriend username
     * @property {string} headImageUrl ApplyFriend headImageUrl
     * @property {number} vipLv ApplyFriend vipLv
     */

    /**
     * Constructs a new ApplyFriend.
     * @exports ApplyFriend
     * @classdesc Represents an ApplyFriend.
     * @implements IApplyFriend
     * @constructor
     * @param {IApplyFriend=} [p] Properties to set
     */
    function ApplyFriend(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ApplyFriend playerID.
     * @member {number|Long} playerID
     * @memberof ApplyFriend
     * @instance
     */
    ApplyFriend.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ApplyFriend username.
     * @member {string} username
     * @memberof ApplyFriend
     * @instance
     */
    ApplyFriend.prototype.username = "";

    /**
     * ApplyFriend headImageUrl.
     * @member {string} headImageUrl
     * @memberof ApplyFriend
     * @instance
     */
    ApplyFriend.prototype.headImageUrl = "";

    /**
     * ApplyFriend vipLv.
     * @member {number} vipLv
     * @memberof ApplyFriend
     * @instance
     */
    ApplyFriend.prototype.vipLv = 0;

    /**
     * Creates a new ApplyFriend instance using the specified properties.
     * @function create
     * @memberof ApplyFriend
     * @static
     * @param {IApplyFriend=} [properties] Properties to set
     * @returns {ApplyFriend} ApplyFriend instance
     */
    ApplyFriend.create = function create(properties) {
        return new ApplyFriend(properties);
    };

    /**
     * Encodes the specified ApplyFriend message. Does not implicitly {@link ApplyFriend.verify|verify} messages.
     * @function encode
     * @memberof ApplyFriend
     * @static
     * @param {IApplyFriend} m ApplyFriend message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyFriend.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        w.uint32(18).string(m.username);
        w.uint32(26).string(m.headImageUrl);
        w.uint32(32).int32(m.vipLv);
        return w;
    };

    /**
     * Decodes an ApplyFriend message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyFriend
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ApplyFriend} ApplyFriend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyFriend.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ApplyFriend();
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
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerID"))
            throw $util.ProtocolError("missing required 'playerID'", { instance: m });
        if (!m.hasOwnProperty("username"))
            throw $util.ProtocolError("missing required 'username'", { instance: m });
        if (!m.hasOwnProperty("headImageUrl"))
            throw $util.ProtocolError("missing required 'headImageUrl'", { instance: m });
        if (!m.hasOwnProperty("vipLv"))
            throw $util.ProtocolError("missing required 'vipLv'", { instance: m });
        return m;
    };

    return ApplyFriend;
})();

$root.FriendListPush = (function() {

    /**
     * Properties of a FriendListPush.
     * @exports IFriendListPush
     * @interface IFriendListPush
     * @property {Array.<IFriend>|null} [friendList] FriendListPush friendList
     * @property {Array.<IApplyFriend>|null} [applyList] FriendListPush applyList
     * @property {Array.<IFriend>|null} [recommandList] FriendListPush recommandList
     */

    /**
     * Constructs a new FriendListPush.
     * @exports FriendListPush
     * @classdesc Represents a FriendListPush.
     * @implements IFriendListPush
     * @constructor
     * @param {IFriendListPush=} [p] Properties to set
     */
    function FriendListPush(p) {
        this.friendList = [];
        this.applyList = [];
        this.recommandList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FriendListPush friendList.
     * @member {Array.<IFriend>} friendList
     * @memberof FriendListPush
     * @instance
     */
    FriendListPush.prototype.friendList = $util.emptyArray;

    /**
     * FriendListPush applyList.
     * @member {Array.<IApplyFriend>} applyList
     * @memberof FriendListPush
     * @instance
     */
    FriendListPush.prototype.applyList = $util.emptyArray;

    /**
     * FriendListPush recommandList.
     * @member {Array.<IFriend>} recommandList
     * @memberof FriendListPush
     * @instance
     */
    FriendListPush.prototype.recommandList = $util.emptyArray;

    /**
     * Creates a new FriendListPush instance using the specified properties.
     * @function create
     * @memberof FriendListPush
     * @static
     * @param {IFriendListPush=} [properties] Properties to set
     * @returns {FriendListPush} FriendListPush instance
     */
    FriendListPush.create = function create(properties) {
        return new FriendListPush(properties);
    };

    /**
     * Encodes the specified FriendListPush message. Does not implicitly {@link FriendListPush.verify|verify} messages.
     * @function encode
     * @memberof FriendListPush
     * @static
     * @param {IFriendListPush} m FriendListPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FriendListPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.friendList != null && m.friendList.length) {
            for (var i = 0; i < m.friendList.length; ++i)
                $root.Friend.encode(m.friendList[i], w.uint32(10).fork()).ldelim();
        }
        if (m.applyList != null && m.applyList.length) {
            for (var i = 0; i < m.applyList.length; ++i)
                $root.ApplyFriend.encode(m.applyList[i], w.uint32(18).fork()).ldelim();
        }
        if (m.recommandList != null && m.recommandList.length) {
            for (var i = 0; i < m.recommandList.length; ++i)
                $root.Friend.encode(m.recommandList[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a FriendListPush message from the specified reader or buffer.
     * @function decode
     * @memberof FriendListPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FriendListPush} FriendListPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FriendListPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendListPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.friendList && m.friendList.length))
                    m.friendList = [];
                m.friendList.push($root.Friend.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.applyList && m.applyList.length))
                    m.applyList = [];
                m.applyList.push($root.ApplyFriend.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.recommandList && m.recommandList.length))
                    m.recommandList = [];
                m.recommandList.push($root.Friend.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return FriendListPush;
})();

$root.FriendListModifyPush = (function() {

    /**
     * Properties of a FriendListModifyPush.
     * @exports IFriendListModifyPush
     * @interface IFriendListModifyPush
     * @property {Array.<IFriend>|null} [updateFriendList] FriendListModifyPush updateFriendList
     * @property {Array.<number|Long>|null} [deleteFriendList] FriendListModifyPush deleteFriendList
     * @property {Array.<IApplyFriend>|null} [updateApplyList] FriendListModifyPush updateApplyList
     * @property {Array.<number|Long>|null} [deleteApplyIdList] FriendListModifyPush deleteApplyIdList
     */

    /**
     * Constructs a new FriendListModifyPush.
     * @exports FriendListModifyPush
     * @classdesc Represents a FriendListModifyPush.
     * @implements IFriendListModifyPush
     * @constructor
     * @param {IFriendListModifyPush=} [p] Properties to set
     */
    function FriendListModifyPush(p) {
        this.updateFriendList = [];
        this.deleteFriendList = [];
        this.updateApplyList = [];
        this.deleteApplyIdList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FriendListModifyPush updateFriendList.
     * @member {Array.<IFriend>} updateFriendList
     * @memberof FriendListModifyPush
     * @instance
     */
    FriendListModifyPush.prototype.updateFriendList = $util.emptyArray;

    /**
     * FriendListModifyPush deleteFriendList.
     * @member {Array.<number|Long>} deleteFriendList
     * @memberof FriendListModifyPush
     * @instance
     */
    FriendListModifyPush.prototype.deleteFriendList = $util.emptyArray;

    /**
     * FriendListModifyPush updateApplyList.
     * @member {Array.<IApplyFriend>} updateApplyList
     * @memberof FriendListModifyPush
     * @instance
     */
    FriendListModifyPush.prototype.updateApplyList = $util.emptyArray;

    /**
     * FriendListModifyPush deleteApplyIdList.
     * @member {Array.<number|Long>} deleteApplyIdList
     * @memberof FriendListModifyPush
     * @instance
     */
    FriendListModifyPush.prototype.deleteApplyIdList = $util.emptyArray;

    /**
     * Creates a new FriendListModifyPush instance using the specified properties.
     * @function create
     * @memberof FriendListModifyPush
     * @static
     * @param {IFriendListModifyPush=} [properties] Properties to set
     * @returns {FriendListModifyPush} FriendListModifyPush instance
     */
    FriendListModifyPush.create = function create(properties) {
        return new FriendListModifyPush(properties);
    };

    /**
     * Encodes the specified FriendListModifyPush message. Does not implicitly {@link FriendListModifyPush.verify|verify} messages.
     * @function encode
     * @memberof FriendListModifyPush
     * @static
     * @param {IFriendListModifyPush} m FriendListModifyPush message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FriendListModifyPush.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.updateFriendList != null && m.updateFriendList.length) {
            for (var i = 0; i < m.updateFriendList.length; ++i)
                $root.Friend.encode(m.updateFriendList[i], w.uint32(10).fork()).ldelim();
        }
        if (m.deleteFriendList != null && m.deleteFriendList.length) {
            for (var i = 0; i < m.deleteFriendList.length; ++i)
                w.uint32(16).int64(m.deleteFriendList[i]);
        }
        if (m.updateApplyList != null && m.updateApplyList.length) {
            for (var i = 0; i < m.updateApplyList.length; ++i)
                $root.ApplyFriend.encode(m.updateApplyList[i], w.uint32(26).fork()).ldelim();
        }
        if (m.deleteApplyIdList != null && m.deleteApplyIdList.length) {
            for (var i = 0; i < m.deleteApplyIdList.length; ++i)
                w.uint32(32).int64(m.deleteApplyIdList[i]);
        }
        return w;
    };

    /**
     * Decodes a FriendListModifyPush message from the specified reader or buffer.
     * @function decode
     * @memberof FriendListModifyPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FriendListModifyPush} FriendListModifyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FriendListModifyPush.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendListModifyPush();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.updateFriendList && m.updateFriendList.length))
                    m.updateFriendList = [];
                m.updateFriendList.push($root.Friend.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.deleteFriendList && m.deleteFriendList.length))
                    m.deleteFriendList = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.deleteFriendList.push(r.int64());
                } else
                    m.deleteFriendList.push(r.int64());
                break;
            case 3:
                if (!(m.updateApplyList && m.updateApplyList.length))
                    m.updateApplyList = [];
                m.updateApplyList.push($root.ApplyFriend.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.deleteApplyIdList && m.deleteApplyIdList.length))
                    m.deleteApplyIdList = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.deleteApplyIdList.push(r.int64());
                } else
                    m.deleteApplyIdList.push(r.int64());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return FriendListModifyPush;
})();

$root.GetRecommandFriendReq = (function() {

    /**
     * Properties of a GetRecommandFriendReq.
     * @exports IGetRecommandFriendReq
     * @interface IGetRecommandFriendReq
     */

    /**
     * Constructs a new GetRecommandFriendReq.
     * @exports GetRecommandFriendReq
     * @classdesc Represents a GetRecommandFriendReq.
     * @implements IGetRecommandFriendReq
     * @constructor
     * @param {IGetRecommandFriendReq=} [p] Properties to set
     */
    function GetRecommandFriendReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetRecommandFriendReq instance using the specified properties.
     * @function create
     * @memberof GetRecommandFriendReq
     * @static
     * @param {IGetRecommandFriendReq=} [properties] Properties to set
     * @returns {GetRecommandFriendReq} GetRecommandFriendReq instance
     */
    GetRecommandFriendReq.create = function create(properties) {
        return new GetRecommandFriendReq(properties);
    };

    /**
     * Encodes the specified GetRecommandFriendReq message. Does not implicitly {@link GetRecommandFriendReq.verify|verify} messages.
     * @function encode
     * @memberof GetRecommandFriendReq
     * @static
     * @param {IGetRecommandFriendReq} m GetRecommandFriendReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetRecommandFriendReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetRecommandFriendReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetRecommandFriendReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetRecommandFriendReq} GetRecommandFriendReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetRecommandFriendReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetRecommandFriendReq();
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

    return GetRecommandFriendReq;
})();

$root.GetRecommandFriendRes = (function() {

    /**
     * Properties of a GetRecommandFriendRes.
     * @exports IGetRecommandFriendRes
     * @interface IGetRecommandFriendRes
     * @property {Array.<IFriend>|null} [recommandList] GetRecommandFriendRes recommandList
     */

    /**
     * Constructs a new GetRecommandFriendRes.
     * @exports GetRecommandFriendRes
     * @classdesc Represents a GetRecommandFriendRes.
     * @implements IGetRecommandFriendRes
     * @constructor
     * @param {IGetRecommandFriendRes=} [p] Properties to set
     */
    function GetRecommandFriendRes(p) {
        this.recommandList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetRecommandFriendRes recommandList.
     * @member {Array.<IFriend>} recommandList
     * @memberof GetRecommandFriendRes
     * @instance
     */
    GetRecommandFriendRes.prototype.recommandList = $util.emptyArray;

    /**
     * Creates a new GetRecommandFriendRes instance using the specified properties.
     * @function create
     * @memberof GetRecommandFriendRes
     * @static
     * @param {IGetRecommandFriendRes=} [properties] Properties to set
     * @returns {GetRecommandFriendRes} GetRecommandFriendRes instance
     */
    GetRecommandFriendRes.create = function create(properties) {
        return new GetRecommandFriendRes(properties);
    };

    /**
     * Encodes the specified GetRecommandFriendRes message. Does not implicitly {@link GetRecommandFriendRes.verify|verify} messages.
     * @function encode
     * @memberof GetRecommandFriendRes
     * @static
     * @param {IGetRecommandFriendRes} m GetRecommandFriendRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetRecommandFriendRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.recommandList != null && m.recommandList.length) {
            for (var i = 0; i < m.recommandList.length; ++i)
                $root.Friend.encode(m.recommandList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GetRecommandFriendRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetRecommandFriendRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetRecommandFriendRes} GetRecommandFriendRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetRecommandFriendRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetRecommandFriendRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.recommandList && m.recommandList.length))
                    m.recommandList = [];
                m.recommandList.push($root.Friend.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GetRecommandFriendRes;
})();

$root.DeleteFriendReq = (function() {

    /**
     * Properties of a DeleteFriendReq.
     * @exports IDeleteFriendReq
     * @interface IDeleteFriendReq
     * @property {number|Long} playerID DeleteFriendReq playerID
     */

    /**
     * Constructs a new DeleteFriendReq.
     * @exports DeleteFriendReq
     * @classdesc Represents a DeleteFriendReq.
     * @implements IDeleteFriendReq
     * @constructor
     * @param {IDeleteFriendReq=} [p] Properties to set
     */
    function DeleteFriendReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DeleteFriendReq playerID.
     * @member {number|Long} playerID
     * @memberof DeleteFriendReq
     * @instance
     */
    DeleteFriendReq.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new DeleteFriendReq instance using the specified properties.
     * @function create
     * @memberof DeleteFriendReq
     * @static
     * @param {IDeleteFriendReq=} [properties] Properties to set
     * @returns {DeleteFriendReq} DeleteFriendReq instance
     */
    DeleteFriendReq.create = function create(properties) {
        return new DeleteFriendReq(properties);
    };

    /**
     * Encodes the specified DeleteFriendReq message. Does not implicitly {@link DeleteFriendReq.verify|verify} messages.
     * @function encode
     * @memberof DeleteFriendReq
     * @static
     * @param {IDeleteFriendReq} m DeleteFriendReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteFriendReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        return w;
    };

    /**
     * Decodes a DeleteFriendReq message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteFriendReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DeleteFriendReq} DeleteFriendReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteFriendReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DeleteFriendReq();
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

    return DeleteFriendReq;
})();

$root.DeleteFriendRes = (function() {

    /**
     * Properties of a DeleteFriendRes.
     * @exports IDeleteFriendRes
     * @interface IDeleteFriendRes
     * @property {boolean} isSuccess DeleteFriendRes isSuccess
     * @property {string|null} [tips] DeleteFriendRes tips
     */

    /**
     * Constructs a new DeleteFriendRes.
     * @exports DeleteFriendRes
     * @classdesc Represents a DeleteFriendRes.
     * @implements IDeleteFriendRes
     * @constructor
     * @param {IDeleteFriendRes=} [p] Properties to set
     */
    function DeleteFriendRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DeleteFriendRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof DeleteFriendRes
     * @instance
     */
    DeleteFriendRes.prototype.isSuccess = false;

    /**
     * DeleteFriendRes tips.
     * @member {string} tips
     * @memberof DeleteFriendRes
     * @instance
     */
    DeleteFriendRes.prototype.tips = "";

    /**
     * Creates a new DeleteFriendRes instance using the specified properties.
     * @function create
     * @memberof DeleteFriendRes
     * @static
     * @param {IDeleteFriendRes=} [properties] Properties to set
     * @returns {DeleteFriendRes} DeleteFriendRes instance
     */
    DeleteFriendRes.create = function create(properties) {
        return new DeleteFriendRes(properties);
    };

    /**
     * Encodes the specified DeleteFriendRes message. Does not implicitly {@link DeleteFriendRes.verify|verify} messages.
     * @function encode
     * @memberof DeleteFriendRes
     * @static
     * @param {IDeleteFriendRes} m DeleteFriendRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteFriendRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a DeleteFriendRes message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteFriendRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DeleteFriendRes} DeleteFriendRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteFriendRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DeleteFriendRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.tips = r.string();
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

    return DeleteFriendRes;
})();

$root.ProcessApplyFriendReq = (function() {

    /**
     * Properties of a ProcessApplyFriendReq.
     * @exports IProcessApplyFriendReq
     * @interface IProcessApplyFriendReq
     * @property {number|Long} playerID ProcessApplyFriendReq playerID
     * @property {boolean} blnAccept ProcessApplyFriendReq blnAccept
     */

    /**
     * Constructs a new ProcessApplyFriendReq.
     * @exports ProcessApplyFriendReq
     * @classdesc Represents a ProcessApplyFriendReq.
     * @implements IProcessApplyFriendReq
     * @constructor
     * @param {IProcessApplyFriendReq=} [p] Properties to set
     */
    function ProcessApplyFriendReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ProcessApplyFriendReq playerID.
     * @member {number|Long} playerID
     * @memberof ProcessApplyFriendReq
     * @instance
     */
    ProcessApplyFriendReq.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ProcessApplyFriendReq blnAccept.
     * @member {boolean} blnAccept
     * @memberof ProcessApplyFriendReq
     * @instance
     */
    ProcessApplyFriendReq.prototype.blnAccept = false;

    /**
     * Creates a new ProcessApplyFriendReq instance using the specified properties.
     * @function create
     * @memberof ProcessApplyFriendReq
     * @static
     * @param {IProcessApplyFriendReq=} [properties] Properties to set
     * @returns {ProcessApplyFriendReq} ProcessApplyFriendReq instance
     */
    ProcessApplyFriendReq.create = function create(properties) {
        return new ProcessApplyFriendReq(properties);
    };

    /**
     * Encodes the specified ProcessApplyFriendReq message. Does not implicitly {@link ProcessApplyFriendReq.verify|verify} messages.
     * @function encode
     * @memberof ProcessApplyFriendReq
     * @static
     * @param {IProcessApplyFriendReq} m ProcessApplyFriendReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessApplyFriendReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        w.uint32(16).bool(m.blnAccept);
        return w;
    };

    /**
     * Decodes a ProcessApplyFriendReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProcessApplyFriendReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ProcessApplyFriendReq} ProcessApplyFriendReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessApplyFriendReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ProcessApplyFriendReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerID = r.int64();
                break;
            case 2:
                m.blnAccept = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerID"))
            throw $util.ProtocolError("missing required 'playerID'", { instance: m });
        if (!m.hasOwnProperty("blnAccept"))
            throw $util.ProtocolError("missing required 'blnAccept'", { instance: m });
        return m;
    };

    return ProcessApplyFriendReq;
})();

$root.ProcessApplyFriendRes = (function() {

    /**
     * Properties of a ProcessApplyFriendRes.
     * @exports IProcessApplyFriendRes
     * @interface IProcessApplyFriendRes
     * @property {boolean} isSuccess ProcessApplyFriendRes isSuccess
     * @property {string|null} [tips] ProcessApplyFriendRes tips
     */

    /**
     * Constructs a new ProcessApplyFriendRes.
     * @exports ProcessApplyFriendRes
     * @classdesc Represents a ProcessApplyFriendRes.
     * @implements IProcessApplyFriendRes
     * @constructor
     * @param {IProcessApplyFriendRes=} [p] Properties to set
     */
    function ProcessApplyFriendRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ProcessApplyFriendRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof ProcessApplyFriendRes
     * @instance
     */
    ProcessApplyFriendRes.prototype.isSuccess = false;

    /**
     * ProcessApplyFriendRes tips.
     * @member {string} tips
     * @memberof ProcessApplyFriendRes
     * @instance
     */
    ProcessApplyFriendRes.prototype.tips = "";

    /**
     * Creates a new ProcessApplyFriendRes instance using the specified properties.
     * @function create
     * @memberof ProcessApplyFriendRes
     * @static
     * @param {IProcessApplyFriendRes=} [properties] Properties to set
     * @returns {ProcessApplyFriendRes} ProcessApplyFriendRes instance
     */
    ProcessApplyFriendRes.create = function create(properties) {
        return new ProcessApplyFriendRes(properties);
    };

    /**
     * Encodes the specified ProcessApplyFriendRes message. Does not implicitly {@link ProcessApplyFriendRes.verify|verify} messages.
     * @function encode
     * @memberof ProcessApplyFriendRes
     * @static
     * @param {IProcessApplyFriendRes} m ProcessApplyFriendRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessApplyFriendRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a ProcessApplyFriendRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProcessApplyFriendRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ProcessApplyFriendRes} ProcessApplyFriendRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessApplyFriendRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ProcessApplyFriendRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.tips = r.string();
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

    return ProcessApplyFriendRes;
})();

$root.ApplyFriendReq = (function() {

    /**
     * Properties of an ApplyFriendReq.
     * @exports IApplyFriendReq
     * @interface IApplyFriendReq
     * @property {number|Long} playerID ApplyFriendReq playerID
     */

    /**
     * Constructs a new ApplyFriendReq.
     * @exports ApplyFriendReq
     * @classdesc Represents an ApplyFriendReq.
     * @implements IApplyFriendReq
     * @constructor
     * @param {IApplyFriendReq=} [p] Properties to set
     */
    function ApplyFriendReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ApplyFriendReq playerID.
     * @member {number|Long} playerID
     * @memberof ApplyFriendReq
     * @instance
     */
    ApplyFriendReq.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ApplyFriendReq instance using the specified properties.
     * @function create
     * @memberof ApplyFriendReq
     * @static
     * @param {IApplyFriendReq=} [properties] Properties to set
     * @returns {ApplyFriendReq} ApplyFriendReq instance
     */
    ApplyFriendReq.create = function create(properties) {
        return new ApplyFriendReq(properties);
    };

    /**
     * Encodes the specified ApplyFriendReq message. Does not implicitly {@link ApplyFriendReq.verify|verify} messages.
     * @function encode
     * @memberof ApplyFriendReq
     * @static
     * @param {IApplyFriendReq} m ApplyFriendReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyFriendReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        return w;
    };

    /**
     * Decodes an ApplyFriendReq message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyFriendReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ApplyFriendReq} ApplyFriendReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyFriendReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ApplyFriendReq();
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

    return ApplyFriendReq;
})();

$root.ApplyFriendRes = (function() {

    /**
     * Properties of an ApplyFriendRes.
     * @exports IApplyFriendRes
     * @interface IApplyFriendRes
     * @property {boolean} isSuccess ApplyFriendRes isSuccess
     * @property {string|null} [tips] ApplyFriendRes tips
     */

    /**
     * Constructs a new ApplyFriendRes.
     * @exports ApplyFriendRes
     * @classdesc Represents an ApplyFriendRes.
     * @implements IApplyFriendRes
     * @constructor
     * @param {IApplyFriendRes=} [p] Properties to set
     */
    function ApplyFriendRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ApplyFriendRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof ApplyFriendRes
     * @instance
     */
    ApplyFriendRes.prototype.isSuccess = false;

    /**
     * ApplyFriendRes tips.
     * @member {string} tips
     * @memberof ApplyFriendRes
     * @instance
     */
    ApplyFriendRes.prototype.tips = "";

    /**
     * Creates a new ApplyFriendRes instance using the specified properties.
     * @function create
     * @memberof ApplyFriendRes
     * @static
     * @param {IApplyFriendRes=} [properties] Properties to set
     * @returns {ApplyFriendRes} ApplyFriendRes instance
     */
    ApplyFriendRes.create = function create(properties) {
        return new ApplyFriendRes(properties);
    };

    /**
     * Encodes the specified ApplyFriendRes message. Does not implicitly {@link ApplyFriendRes.verify|verify} messages.
     * @function encode
     * @memberof ApplyFriendRes
     * @static
     * @param {IApplyFriendRes} m ApplyFriendRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyFriendRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes an ApplyFriendRes message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyFriendRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ApplyFriendRes} ApplyFriendRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyFriendRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ApplyFriendRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.tips = r.string();
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

    return ApplyFriendRes;
})();

$root.SearchUserReq = (function() {

    /**
     * Properties of a SearchUserReq.
     * @exports ISearchUserReq
     * @interface ISearchUserReq
     * @property {number|Long} playerID SearchUserReq playerID
     */

    /**
     * Constructs a new SearchUserReq.
     * @exports SearchUserReq
     * @classdesc Represents a SearchUserReq.
     * @implements ISearchUserReq
     * @constructor
     * @param {ISearchUserReq=} [p] Properties to set
     */
    function SearchUserReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SearchUserReq playerID.
     * @member {number|Long} playerID
     * @memberof SearchUserReq
     * @instance
     */
    SearchUserReq.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new SearchUserReq instance using the specified properties.
     * @function create
     * @memberof SearchUserReq
     * @static
     * @param {ISearchUserReq=} [properties] Properties to set
     * @returns {SearchUserReq} SearchUserReq instance
     */
    SearchUserReq.create = function create(properties) {
        return new SearchUserReq(properties);
    };

    /**
     * Encodes the specified SearchUserReq message. Does not implicitly {@link SearchUserReq.verify|verify} messages.
     * @function encode
     * @memberof SearchUserReq
     * @static
     * @param {ISearchUserReq} m SearchUserReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchUserReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        return w;
    };

    /**
     * Decodes a SearchUserReq message from the specified reader or buffer.
     * @function decode
     * @memberof SearchUserReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SearchUserReq} SearchUserReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchUserReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SearchUserReq();
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

    return SearchUserReq;
})();

$root.SearchUserRes = (function() {

    /**
     * Properties of a SearchUserRes.
     * @exports ISearchUserRes
     * @interface ISearchUserRes
     * @property {boolean} isSuccess SearchUserRes isSuccess
     * @property {string|null} [tips] SearchUserRes tips
     * @property {IFriend|null} [searchUser] SearchUserRes searchUser
     */

    /**
     * Constructs a new SearchUserRes.
     * @exports SearchUserRes
     * @classdesc Represents a SearchUserRes.
     * @implements ISearchUserRes
     * @constructor
     * @param {ISearchUserRes=} [p] Properties to set
     */
    function SearchUserRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SearchUserRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof SearchUserRes
     * @instance
     */
    SearchUserRes.prototype.isSuccess = false;

    /**
     * SearchUserRes tips.
     * @member {string} tips
     * @memberof SearchUserRes
     * @instance
     */
    SearchUserRes.prototype.tips = "";

    /**
     * SearchUserRes searchUser.
     * @member {IFriend|null|undefined} searchUser
     * @memberof SearchUserRes
     * @instance
     */
    SearchUserRes.prototype.searchUser = null;

    /**
     * Creates a new SearchUserRes instance using the specified properties.
     * @function create
     * @memberof SearchUserRes
     * @static
     * @param {ISearchUserRes=} [properties] Properties to set
     * @returns {SearchUserRes} SearchUserRes instance
     */
    SearchUserRes.create = function create(properties) {
        return new SearchUserRes(properties);
    };

    /**
     * Encodes the specified SearchUserRes message. Does not implicitly {@link SearchUserRes.verify|verify} messages.
     * @function encode
     * @memberof SearchUserRes
     * @static
     * @param {ISearchUserRes} m SearchUserRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchUserRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.searchUser != null && m.hasOwnProperty("searchUser"))
            $root.Friend.encode(m.searchUser, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a SearchUserRes message from the specified reader or buffer.
     * @function decode
     * @memberof SearchUserRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SearchUserRes} SearchUserRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchUserRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SearchUserRes();
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
                m.searchUser = $root.Friend.decode(r, r.uint32());
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

    return SearchUserRes;
})();

module.exports = $root;

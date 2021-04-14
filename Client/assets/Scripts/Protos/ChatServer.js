/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.ChatServer || ($protobuf.roots.ChatServer = {});

$root.ChatServerData = (function() {

    /**
     * Properties of a ChatServerData.
     * @exports IChatServerData
     * @interface IChatServerData
     * @property {string} serverId ChatServerData serverId
     * @property {number|Long} senderId ChatServerData senderId
     * @property {IChat} chatContent ChatServerData chatContent
     */

    /**
     * Constructs a new ChatServerData.
     * @exports ChatServerData
     * @classdesc Represents a ChatServerData.
     * @implements IChatServerData
     * @constructor
     * @param {IChatServerData=} [p] Properties to set
     */
    function ChatServerData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChatServerData serverId.
     * @member {string} serverId
     * @memberof ChatServerData
     * @instance
     */
    ChatServerData.prototype.serverId = "";

    /**
     * ChatServerData senderId.
     * @member {number|Long} senderId
     * @memberof ChatServerData
     * @instance
     */
    ChatServerData.prototype.senderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ChatServerData chatContent.
     * @member {IChat} chatContent
     * @memberof ChatServerData
     * @instance
     */
    ChatServerData.prototype.chatContent = null;

    /**
     * Creates a new ChatServerData instance using the specified properties.
     * @function create
     * @memberof ChatServerData
     * @static
     * @param {IChatServerData=} [properties] Properties to set
     * @returns {ChatServerData} ChatServerData instance
     */
    ChatServerData.create = function create(properties) {
        return new ChatServerData(properties);
    };

    /**
     * Encodes the specified ChatServerData message. Does not implicitly {@link ChatServerData.verify|verify} messages.
     * @function encode
     * @memberof ChatServerData
     * @static
     * @param {IChatServerData} m ChatServerData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatServerData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.serverId);
        w.uint32(16).int64(m.senderId);
        $root.Chat.encode(m.chatContent, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a ChatServerData message from the specified reader or buffer.
     * @function decode
     * @memberof ChatServerData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChatServerData} ChatServerData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatServerData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChatServerData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.serverId = r.string();
                break;
            case 2:
                m.senderId = r.int64();
                break;
            case 3:
                m.chatContent = $root.Chat.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("serverId"))
            throw $util.ProtocolError("missing required 'serverId'", { instance: m });
        if (!m.hasOwnProperty("senderId"))
            throw $util.ProtocolError("missing required 'senderId'", { instance: m });
        if (!m.hasOwnProperty("chatContent"))
            throw $util.ProtocolError("missing required 'chatContent'", { instance: m });
        return m;
    };

    return ChatServerData;
})();

$root.Chat = (function() {

    /**
     * Properties of a Chat.
     * @exports IChat
     * @interface IChat
     * @property {number|Long|null} [senderID] Chat senderID
     * @property {number|Long} receiverID Chat receiverID
     * @property {string} content Chat content
     * @property {number|Long|null} [time] Chat time
     * @property {boolean|null} [isRead] Chat isRead
     */

    /**
     * Constructs a new Chat.
     * @exports Chat
     * @classdesc Represents a Chat.
     * @implements IChat
     * @constructor
     * @param {IChat=} [p] Properties to set
     */
    function Chat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Chat senderID.
     * @member {number|Long} senderID
     * @memberof Chat
     * @instance
     */
    Chat.prototype.senderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Chat receiverID.
     * @member {number|Long} receiverID
     * @memberof Chat
     * @instance
     */
    Chat.prototype.receiverID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Chat content.
     * @member {string} content
     * @memberof Chat
     * @instance
     */
    Chat.prototype.content = "";

    /**
     * Chat time.
     * @member {number|Long} time
     * @memberof Chat
     * @instance
     */
    Chat.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Chat isRead.
     * @member {boolean} isRead
     * @memberof Chat
     * @instance
     */
    Chat.prototype.isRead = false;

    /**
     * Creates a new Chat instance using the specified properties.
     * @function create
     * @memberof Chat
     * @static
     * @param {IChat=} [properties] Properties to set
     * @returns {Chat} Chat instance
     */
    Chat.create = function create(properties) {
        return new Chat(properties);
    };

    /**
     * Encodes the specified Chat message. Does not implicitly {@link Chat.verify|verify} messages.
     * @function encode
     * @memberof Chat
     * @static
     * @param {IChat} m Chat message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Chat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.senderID != null && m.hasOwnProperty("senderID"))
            w.uint32(8).int64(m.senderID);
        w.uint32(16).int64(m.receiverID);
        w.uint32(26).string(m.content);
        if (m.time != null && m.hasOwnProperty("time"))
            w.uint32(32).int64(m.time);
        if (m.isRead != null && m.hasOwnProperty("isRead"))
            w.uint32(40).bool(m.isRead);
        return w;
    };

    /**
     * Decodes a Chat message from the specified reader or buffer.
     * @function decode
     * @memberof Chat
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Chat} Chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Chat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Chat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.senderID = r.int64();
                break;
            case 2:
                m.receiverID = r.int64();
                break;
            case 3:
                m.content = r.string();
                break;
            case 4:
                m.time = r.int64();
                break;
            case 5:
                m.isRead = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("receiverID"))
            throw $util.ProtocolError("missing required 'receiverID'", { instance: m });
        if (!m.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: m });
        return m;
    };

    return Chat;
})();

$root.SendChatReq = (function() {

    /**
     * Properties of a SendChatReq.
     * @exports ISendChatReq
     * @interface ISendChatReq
     * @property {number|Long} receiverID SendChatReq receiverID
     * @property {string} content SendChatReq content
     */

    /**
     * Constructs a new SendChatReq.
     * @exports SendChatReq
     * @classdesc Represents a SendChatReq.
     * @implements ISendChatReq
     * @constructor
     * @param {ISendChatReq=} [p] Properties to set
     */
    function SendChatReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SendChatReq receiverID.
     * @member {number|Long} receiverID
     * @memberof SendChatReq
     * @instance
     */
    SendChatReq.prototype.receiverID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SendChatReq content.
     * @member {string} content
     * @memberof SendChatReq
     * @instance
     */
    SendChatReq.prototype.content = "";

    /**
     * Creates a new SendChatReq instance using the specified properties.
     * @function create
     * @memberof SendChatReq
     * @static
     * @param {ISendChatReq=} [properties] Properties to set
     * @returns {SendChatReq} SendChatReq instance
     */
    SendChatReq.create = function create(properties) {
        return new SendChatReq(properties);
    };

    /**
     * Encodes the specified SendChatReq message. Does not implicitly {@link SendChatReq.verify|verify} messages.
     * @function encode
     * @memberof SendChatReq
     * @static
     * @param {ISendChatReq} m SendChatReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.receiverID);
        w.uint32(18).string(m.content);
        return w;
    };

    /**
     * Decodes a SendChatReq message from the specified reader or buffer.
     * @function decode
     * @memberof SendChatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SendChatReq} SendChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SendChatReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.receiverID = r.int64();
                break;
            case 2:
                m.content = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("receiverID"))
            throw $util.ProtocolError("missing required 'receiverID'", { instance: m });
        if (!m.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: m });
        return m;
    };

    return SendChatReq;
})();

$root.SendChatRes = (function() {

    /**
     * Properties of a SendChatRes.
     * @exports ISendChatRes
     * @interface ISendChatRes
     * @property {boolean} success SendChatRes success
     * @property {string|null} [tips] SendChatRes tips
     * @property {IChat|null} [chat] SendChatRes chat
     */

    /**
     * Constructs a new SendChatRes.
     * @exports SendChatRes
     * @classdesc Represents a SendChatRes.
     * @implements ISendChatRes
     * @constructor
     * @param {ISendChatRes=} [p] Properties to set
     */
    function SendChatRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SendChatRes success.
     * @member {boolean} success
     * @memberof SendChatRes
     * @instance
     */
    SendChatRes.prototype.success = false;

    /**
     * SendChatRes tips.
     * @member {string} tips
     * @memberof SendChatRes
     * @instance
     */
    SendChatRes.prototype.tips = "";

    /**
     * SendChatRes chat.
     * @member {IChat|null|undefined} chat
     * @memberof SendChatRes
     * @instance
     */
    SendChatRes.prototype.chat = null;

    /**
     * Creates a new SendChatRes instance using the specified properties.
     * @function create
     * @memberof SendChatRes
     * @static
     * @param {ISendChatRes=} [properties] Properties to set
     * @returns {SendChatRes} SendChatRes instance
     */
    SendChatRes.create = function create(properties) {
        return new SendChatRes(properties);
    };

    /**
     * Encodes the specified SendChatRes message. Does not implicitly {@link SendChatRes.verify|verify} messages.
     * @function encode
     * @memberof SendChatRes
     * @static
     * @param {ISendChatRes} m SendChatRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.chat != null && m.hasOwnProperty("chat"))
            $root.Chat.encode(m.chat, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a SendChatRes message from the specified reader or buffer.
     * @function decode
     * @memberof SendChatRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SendChatRes} SendChatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SendChatRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            case 3:
                m.chat = $root.Chat.decode(r, r.uint32());
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

    return SendChatRes;
})();

$root.ReadChatReq = (function() {

    /**
     * Properties of a ReadChatReq.
     * @exports IReadChatReq
     * @interface IReadChatReq
     * @property {number|Long} playerID ReadChatReq playerID
     */

    /**
     * Constructs a new ReadChatReq.
     * @exports ReadChatReq
     * @classdesc Represents a ReadChatReq.
     * @implements IReadChatReq
     * @constructor
     * @param {IReadChatReq=} [p] Properties to set
     */
    function ReadChatReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReadChatReq playerID.
     * @member {number|Long} playerID
     * @memberof ReadChatReq
     * @instance
     */
    ReadChatReq.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReadChatReq instance using the specified properties.
     * @function create
     * @memberof ReadChatReq
     * @static
     * @param {IReadChatReq=} [properties] Properties to set
     * @returns {ReadChatReq} ReadChatReq instance
     */
    ReadChatReq.create = function create(properties) {
        return new ReadChatReq(properties);
    };

    /**
     * Encodes the specified ReadChatReq message. Does not implicitly {@link ReadChatReq.verify|verify} messages.
     * @function encode
     * @memberof ReadChatReq
     * @static
     * @param {IReadChatReq} m ReadChatReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadChatReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        return w;
    };

    /**
     * Decodes a ReadChatReq message from the specified reader or buffer.
     * @function decode
     * @memberof ReadChatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReadChatReq} ReadChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadChatReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReadChatReq();
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

    return ReadChatReq;
})();

$root.PushChatRes = (function() {

    /**
     * Properties of a PushChatRes.
     * @exports IPushChatRes
     * @interface IPushChatRes
     * @property {Array.<IChat>|null} [chat] PushChatRes chat
     */

    /**
     * Constructs a new PushChatRes.
     * @exports PushChatRes
     * @classdesc Represents a PushChatRes.
     * @implements IPushChatRes
     * @constructor
     * @param {IPushChatRes=} [p] Properties to set
     */
    function PushChatRes(p) {
        this.chat = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushChatRes chat.
     * @member {Array.<IChat>} chat
     * @memberof PushChatRes
     * @instance
     */
    PushChatRes.prototype.chat = $util.emptyArray;

    /**
     * Creates a new PushChatRes instance using the specified properties.
     * @function create
     * @memberof PushChatRes
     * @static
     * @param {IPushChatRes=} [properties] Properties to set
     * @returns {PushChatRes} PushChatRes instance
     */
    PushChatRes.create = function create(properties) {
        return new PushChatRes(properties);
    };

    /**
     * Encodes the specified PushChatRes message. Does not implicitly {@link PushChatRes.verify|verify} messages.
     * @function encode
     * @memberof PushChatRes
     * @static
     * @param {IPushChatRes} m PushChatRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushChatRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.chat != null && m.chat.length) {
            for (var i = 0; i < m.chat.length; ++i)
                $root.Chat.encode(m.chat[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushChatRes message from the specified reader or buffer.
     * @function decode
     * @memberof PushChatRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushChatRes} PushChatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushChatRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushChatRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.chat && m.chat.length))
                    m.chat = [];
                m.chat.push($root.Chat.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushChatRes;
})();

$root.MarkReadChatReq = (function() {

    /**
     * Properties of a MarkReadChatReq.
     * @exports IMarkReadChatReq
     * @interface IMarkReadChatReq
     * @property {number|Long} playerID MarkReadChatReq playerID
     */

    /**
     * Constructs a new MarkReadChatReq.
     * @exports MarkReadChatReq
     * @classdesc Represents a MarkReadChatReq.
     * @implements IMarkReadChatReq
     * @constructor
     * @param {IMarkReadChatReq=} [p] Properties to set
     */
    function MarkReadChatReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MarkReadChatReq playerID.
     * @member {number|Long} playerID
     * @memberof MarkReadChatReq
     * @instance
     */
    MarkReadChatReq.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new MarkReadChatReq instance using the specified properties.
     * @function create
     * @memberof MarkReadChatReq
     * @static
     * @param {IMarkReadChatReq=} [properties] Properties to set
     * @returns {MarkReadChatReq} MarkReadChatReq instance
     */
    MarkReadChatReq.create = function create(properties) {
        return new MarkReadChatReq(properties);
    };

    /**
     * Encodes the specified MarkReadChatReq message. Does not implicitly {@link MarkReadChatReq.verify|verify} messages.
     * @function encode
     * @memberof MarkReadChatReq
     * @static
     * @param {IMarkReadChatReq} m MarkReadChatReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MarkReadChatReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerID);
        return w;
    };

    /**
     * Decodes a MarkReadChatReq message from the specified reader or buffer.
     * @function decode
     * @memberof MarkReadChatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MarkReadChatReq} MarkReadChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MarkReadChatReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MarkReadChatReq();
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

    return MarkReadChatReq;
})();

$root.SendBroadcastReq = (function() {

    /**
     * Properties of a SendBroadcastReq.
     * @exports ISendBroadcastReq
     * @interface ISendBroadcastReq
     * @property {string} content SendBroadcastReq content
     */

    /**
     * Constructs a new SendBroadcastReq.
     * @exports SendBroadcastReq
     * @classdesc Represents a SendBroadcastReq.
     * @implements ISendBroadcastReq
     * @constructor
     * @param {ISendBroadcastReq=} [p] Properties to set
     */
    function SendBroadcastReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SendBroadcastReq content.
     * @member {string} content
     * @memberof SendBroadcastReq
     * @instance
     */
    SendBroadcastReq.prototype.content = "";

    /**
     * Creates a new SendBroadcastReq instance using the specified properties.
     * @function create
     * @memberof SendBroadcastReq
     * @static
     * @param {ISendBroadcastReq=} [properties] Properties to set
     * @returns {SendBroadcastReq} SendBroadcastReq instance
     */
    SendBroadcastReq.create = function create(properties) {
        return new SendBroadcastReq(properties);
    };

    /**
     * Encodes the specified SendBroadcastReq message. Does not implicitly {@link SendBroadcastReq.verify|verify} messages.
     * @function encode
     * @memberof SendBroadcastReq
     * @static
     * @param {ISendBroadcastReq} m SendBroadcastReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendBroadcastReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.content);
        return w;
    };

    /**
     * Decodes a SendBroadcastReq message from the specified reader or buffer.
     * @function decode
     * @memberof SendBroadcastReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SendBroadcastReq} SendBroadcastReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendBroadcastReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SendBroadcastReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.content = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: m });
        return m;
    };

    return SendBroadcastReq;
})();

/**
 * BroadcastType enum.
 * @exports BroadcastType
 * @enum {string}
 * @property {number} SystemType=1 SystemType value
 * @property {number} PlayerType=2 PlayerType value
 */
$root.BroadcastType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "SystemType"] = 1;
    values[valuesById[2] = "PlayerType"] = 2;
    return values;
})();

$root.BroadcastData = (function() {

    /**
     * Properties of a BroadcastData.
     * @exports IBroadcastData
     * @interface IBroadcastData
     * @property {BroadcastType} broadcastType BroadcastData broadcastType
     * @property {number|Long|null} [playerID] BroadcastData playerID
     * @property {string|null} [username] BroadcastData username
     * @property {string} content BroadcastData content
     * @property {string} time BroadcastData time
     * @property {number|null} [linkId] BroadcastData linkId
     */

    /**
     * Constructs a new BroadcastData.
     * @exports BroadcastData
     * @classdesc Represents a BroadcastData.
     * @implements IBroadcastData
     * @constructor
     * @param {IBroadcastData=} [p] Properties to set
     */
    function BroadcastData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BroadcastData broadcastType.
     * @member {BroadcastType} broadcastType
     * @memberof BroadcastData
     * @instance
     */
    BroadcastData.prototype.broadcastType = 1;

    /**
     * BroadcastData playerID.
     * @member {number|Long} playerID
     * @memberof BroadcastData
     * @instance
     */
    BroadcastData.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BroadcastData username.
     * @member {string} username
     * @memberof BroadcastData
     * @instance
     */
    BroadcastData.prototype.username = "";

    /**
     * BroadcastData content.
     * @member {string} content
     * @memberof BroadcastData
     * @instance
     */
    BroadcastData.prototype.content = "";

    /**
     * BroadcastData time.
     * @member {string} time
     * @memberof BroadcastData
     * @instance
     */
    BroadcastData.prototype.time = "";

    /**
     * BroadcastData linkId.
     * @member {number} linkId
     * @memberof BroadcastData
     * @instance
     */
    BroadcastData.prototype.linkId = 0;

    /**
     * Creates a new BroadcastData instance using the specified properties.
     * @function create
     * @memberof BroadcastData
     * @static
     * @param {IBroadcastData=} [properties] Properties to set
     * @returns {BroadcastData} BroadcastData instance
     */
    BroadcastData.create = function create(properties) {
        return new BroadcastData(properties);
    };

    /**
     * Encodes the specified BroadcastData message. Does not implicitly {@link BroadcastData.verify|verify} messages.
     * @function encode
     * @memberof BroadcastData
     * @static
     * @param {IBroadcastData} m BroadcastData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BroadcastData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.broadcastType);
        if (m.playerID != null && m.hasOwnProperty("playerID"))
            w.uint32(16).int64(m.playerID);
        if (m.username != null && m.hasOwnProperty("username"))
            w.uint32(26).string(m.username);
        w.uint32(34).string(m.content);
        w.uint32(42).string(m.time);
        if (m.linkId != null && m.hasOwnProperty("linkId"))
            w.uint32(48).int32(m.linkId);
        return w;
    };

    /**
     * Decodes a BroadcastData message from the specified reader or buffer.
     * @function decode
     * @memberof BroadcastData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BroadcastData} BroadcastData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BroadcastData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BroadcastData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.broadcastType = r.int32();
                break;
            case 2:
                m.playerID = r.int64();
                break;
            case 3:
                m.username = r.string();
                break;
            case 4:
                m.content = r.string();
                break;
            case 5:
                m.time = r.string();
                break;
            case 6:
                m.linkId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("broadcastType"))
            throw $util.ProtocolError("missing required 'broadcastType'", { instance: m });
        if (!m.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: m });
        if (!m.hasOwnProperty("time"))
            throw $util.ProtocolError("missing required 'time'", { instance: m });
        return m;
    };

    return BroadcastData;
})();

$root.PushBroadcast = (function() {

    /**
     * Properties of a PushBroadcast.
     * @exports IPushBroadcast
     * @interface IPushBroadcast
     * @property {Array.<IBroadcastData>|null} [broadcastdata] PushBroadcast broadcastdata
     */

    /**
     * Constructs a new PushBroadcast.
     * @exports PushBroadcast
     * @classdesc Represents a PushBroadcast.
     * @implements IPushBroadcast
     * @constructor
     * @param {IPushBroadcast=} [p] Properties to set
     */
    function PushBroadcast(p) {
        this.broadcastdata = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushBroadcast broadcastdata.
     * @member {Array.<IBroadcastData>} broadcastdata
     * @memberof PushBroadcast
     * @instance
     */
    PushBroadcast.prototype.broadcastdata = $util.emptyArray;

    /**
     * Creates a new PushBroadcast instance using the specified properties.
     * @function create
     * @memberof PushBroadcast
     * @static
     * @param {IPushBroadcast=} [properties] Properties to set
     * @returns {PushBroadcast} PushBroadcast instance
     */
    PushBroadcast.create = function create(properties) {
        return new PushBroadcast(properties);
    };

    /**
     * Encodes the specified PushBroadcast message. Does not implicitly {@link PushBroadcast.verify|verify} messages.
     * @function encode
     * @memberof PushBroadcast
     * @static
     * @param {IPushBroadcast} m PushBroadcast message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushBroadcast.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.broadcastdata != null && m.broadcastdata.length) {
            for (var i = 0; i < m.broadcastdata.length; ++i)
                $root.BroadcastData.encode(m.broadcastdata[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushBroadcast message from the specified reader or buffer.
     * @function decode
     * @memberof PushBroadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushBroadcast} PushBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushBroadcast.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushBroadcast();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.broadcastdata && m.broadcastdata.length))
                    m.broadcastdata = [];
                m.broadcastdata.push($root.BroadcastData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushBroadcast;
})();

module.exports = $root;

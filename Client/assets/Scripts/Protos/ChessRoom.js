/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.ChessRoom || ($protobuf.roots.ChessRoom = {});

$root.Req_CommonEmpty = (function() {

    /**
     * Properties of a Req_CommonEmpty.
     * @exports IReq_CommonEmpty
     * @interface IReq_CommonEmpty
     */

    /**
     * Constructs a new Req_CommonEmpty.
     * @exports Req_CommonEmpty
     * @classdesc Represents a Req_CommonEmpty.
     * @implements IReq_CommonEmpty
     * @constructor
     * @param {IReq_CommonEmpty=} [p] Properties to set
     */
    function Req_CommonEmpty(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new Req_CommonEmpty instance using the specified properties.
     * @function create
     * @memberof Req_CommonEmpty
     * @static
     * @param {IReq_CommonEmpty=} [properties] Properties to set
     * @returns {Req_CommonEmpty} Req_CommonEmpty instance
     */
    Req_CommonEmpty.create = function create(properties) {
        return new Req_CommonEmpty(properties);
    };

    /**
     * Encodes the specified Req_CommonEmpty message. Does not implicitly {@link Req_CommonEmpty.verify|verify} messages.
     * @function encode
     * @memberof Req_CommonEmpty
     * @static
     * @param {IReq_CommonEmpty} m Req_CommonEmpty message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_CommonEmpty.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a Req_CommonEmpty message from the specified reader or buffer.
     * @function decode
     * @memberof Req_CommonEmpty
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_CommonEmpty} Req_CommonEmpty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_CommonEmpty.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_CommonEmpty();
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

    return Req_CommonEmpty;
})();

$root.Rsp_CommonResult = (function() {

    /**
     * Properties of a Rsp_CommonResult.
     * @exports IRsp_CommonResult
     * @interface IRsp_CommonResult
     * @property {boolean} result Rsp_CommonResult result
     * @property {string|null} [tips] Rsp_CommonResult tips
     */

    /**
     * Constructs a new Rsp_CommonResult.
     * @exports Rsp_CommonResult
     * @classdesc Represents a Rsp_CommonResult.
     * @implements IRsp_CommonResult
     * @constructor
     * @param {IRsp_CommonResult=} [p] Properties to set
     */
    function Rsp_CommonResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_CommonResult result.
     * @member {boolean} result
     * @memberof Rsp_CommonResult
     * @instance
     */
    Rsp_CommonResult.prototype.result = false;

    /**
     * Rsp_CommonResult tips.
     * @member {string} tips
     * @memberof Rsp_CommonResult
     * @instance
     */
    Rsp_CommonResult.prototype.tips = "";

    /**
     * Creates a new Rsp_CommonResult instance using the specified properties.
     * @function create
     * @memberof Rsp_CommonResult
     * @static
     * @param {IRsp_CommonResult=} [properties] Properties to set
     * @returns {Rsp_CommonResult} Rsp_CommonResult instance
     */
    Rsp_CommonResult.create = function create(properties) {
        return new Rsp_CommonResult(properties);
    };

    /**
     * Encodes the specified Rsp_CommonResult message. Does not implicitly {@link Rsp_CommonResult.verify|verify} messages.
     * @function encode
     * @memberof Rsp_CommonResult
     * @static
     * @param {IRsp_CommonResult} m Rsp_CommonResult message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_CommonResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.result);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a Rsp_CommonResult message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_CommonResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_CommonResult} Rsp_CommonResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_CommonResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_CommonResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return Rsp_CommonResult;
})();

$root.Req_Enter = (function() {

    /**
     * Properties of a Req_Enter.
     * @exports IReq_Enter
     * @interface IReq_Enter
     * @property {number} id Req_Enter id
     */

    /**
     * Constructs a new Req_Enter.
     * @exports Req_Enter
     * @classdesc Represents a Req_Enter.
     * @implements IReq_Enter
     * @constructor
     * @param {IReq_Enter=} [p] Properties to set
     */
    function Req_Enter(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_Enter id.
     * @member {number} id
     * @memberof Req_Enter
     * @instance
     */
    Req_Enter.prototype.id = 0;

    /**
     * Creates a new Req_Enter instance using the specified properties.
     * @function create
     * @memberof Req_Enter
     * @static
     * @param {IReq_Enter=} [properties] Properties to set
     * @returns {Req_Enter} Req_Enter instance
     */
    Req_Enter.create = function create(properties) {
        return new Req_Enter(properties);
    };

    /**
     * Encodes the specified Req_Enter message. Does not implicitly {@link Req_Enter.verify|verify} messages.
     * @function encode
     * @memberof Req_Enter
     * @static
     * @param {IReq_Enter} m Req_Enter message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_Enter.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        return w;
    };

    /**
     * Decodes a Req_Enter message from the specified reader or buffer.
     * @function decode
     * @memberof Req_Enter
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_Enter} Req_Enter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_Enter.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_Enter();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
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

    return Req_Enter;
})();

$root.Rsp_EnterSucc = (function() {

    /**
     * Properties of a Rsp_EnterSucc.
     * @exports IRsp_EnterSucc
     * @interface IRsp_EnterSucc
     * @property {IRoomInfo} roomInfo Rsp_EnterSucc roomInfo
     */

    /**
     * Constructs a new Rsp_EnterSucc.
     * @exports Rsp_EnterSucc
     * @classdesc Represents a Rsp_EnterSucc.
     * @implements IRsp_EnterSucc
     * @constructor
     * @param {IRsp_EnterSucc=} [p] Properties to set
     */
    function Rsp_EnterSucc(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_EnterSucc roomInfo.
     * @member {IRoomInfo} roomInfo
     * @memberof Rsp_EnterSucc
     * @instance
     */
    Rsp_EnterSucc.prototype.roomInfo = null;

    /**
     * Creates a new Rsp_EnterSucc instance using the specified properties.
     * @function create
     * @memberof Rsp_EnterSucc
     * @static
     * @param {IRsp_EnterSucc=} [properties] Properties to set
     * @returns {Rsp_EnterSucc} Rsp_EnterSucc instance
     */
    Rsp_EnterSucc.create = function create(properties) {
        return new Rsp_EnterSucc(properties);
    };

    /**
     * Encodes the specified Rsp_EnterSucc message. Does not implicitly {@link Rsp_EnterSucc.verify|verify} messages.
     * @function encode
     * @memberof Rsp_EnterSucc
     * @static
     * @param {IRsp_EnterSucc} m Rsp_EnterSucc message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_EnterSucc.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.RoomInfo.encode(m.roomInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a Rsp_EnterSucc message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_EnterSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_EnterSucc} Rsp_EnterSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_EnterSucc.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_EnterSucc();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.roomInfo = $root.RoomInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("roomInfo"))
            throw $util.ProtocolError("missing required 'roomInfo'", { instance: m });
        return m;
    };

    return Rsp_EnterSucc;
})();

$root.Rsp_Exit = (function() {

    /**
     * Properties of a Rsp_Exit.
     * @exports IRsp_Exit
     * @interface IRsp_Exit
     * @property {string} uId Rsp_Exit uId
     * @property {string|null} [tip] Rsp_Exit tip
     */

    /**
     * Constructs a new Rsp_Exit.
     * @exports Rsp_Exit
     * @classdesc Represents a Rsp_Exit.
     * @implements IRsp_Exit
     * @constructor
     * @param {IRsp_Exit=} [p] Properties to set
     */
    function Rsp_Exit(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_Exit uId.
     * @member {string} uId
     * @memberof Rsp_Exit
     * @instance
     */
    Rsp_Exit.prototype.uId = "";

    /**
     * Rsp_Exit tip.
     * @member {string} tip
     * @memberof Rsp_Exit
     * @instance
     */
    Rsp_Exit.prototype.tip = "";

    /**
     * Creates a new Rsp_Exit instance using the specified properties.
     * @function create
     * @memberof Rsp_Exit
     * @static
     * @param {IRsp_Exit=} [properties] Properties to set
     * @returns {Rsp_Exit} Rsp_Exit instance
     */
    Rsp_Exit.create = function create(properties) {
        return new Rsp_Exit(properties);
    };

    /**
     * Encodes the specified Rsp_Exit message. Does not implicitly {@link Rsp_Exit.verify|verify} messages.
     * @function encode
     * @memberof Rsp_Exit
     * @static
     * @param {IRsp_Exit} m Rsp_Exit message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_Exit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        if (m.tip != null && m.hasOwnProperty("tip"))
            w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a Rsp_Exit message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_Exit
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_Exit} Rsp_Exit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_Exit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_Exit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.tip = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        return m;
    };

    return Rsp_Exit;
})();

$root.Rsp_Ting = (function() {

    /**
     * Properties of a Rsp_Ting.
     * @exports IRsp_Ting
     * @interface IRsp_Ting
     * @property {string} id Rsp_Ting id
     * @property {Array.<ITingGroupInfo>|null} [tingData] Rsp_Ting tingData
     */

    /**
     * Constructs a new Rsp_Ting.
     * @exports Rsp_Ting
     * @classdesc Represents a Rsp_Ting.
     * @implements IRsp_Ting
     * @constructor
     * @param {IRsp_Ting=} [p] Properties to set
     */
    function Rsp_Ting(p) {
        this.tingData = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_Ting id.
     * @member {string} id
     * @memberof Rsp_Ting
     * @instance
     */
    Rsp_Ting.prototype.id = "";

    /**
     * Rsp_Ting tingData.
     * @member {Array.<ITingGroupInfo>} tingData
     * @memberof Rsp_Ting
     * @instance
     */
    Rsp_Ting.prototype.tingData = $util.emptyArray;

    /**
     * Creates a new Rsp_Ting instance using the specified properties.
     * @function create
     * @memberof Rsp_Ting
     * @static
     * @param {IRsp_Ting=} [properties] Properties to set
     * @returns {Rsp_Ting} Rsp_Ting instance
     */
    Rsp_Ting.create = function create(properties) {
        return new Rsp_Ting(properties);
    };

    /**
     * Encodes the specified Rsp_Ting message. Does not implicitly {@link Rsp_Ting.verify|verify} messages.
     * @function encode
     * @memberof Rsp_Ting
     * @static
     * @param {IRsp_Ting} m Rsp_Ting message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_Ting.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.id);
        if (m.tingData != null && m.tingData.length) {
            for (var i = 0; i < m.tingData.length; ++i)
                $root.TingGroupInfo.encode(m.tingData[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_Ting message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_Ting
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_Ting} Rsp_Ting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_Ting.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_Ting();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                if (!(m.tingData && m.tingData.length))
                    m.tingData = [];
                m.tingData.push($root.TingGroupInfo.decode(r, r.uint32()));
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

    return Rsp_Ting;
})();

$root.Rsp_RoomInit = (function() {

    /**
     * Properties of a Rsp_RoomInit.
     * @exports IRsp_RoomInit
     * @interface IRsp_RoomInit
     * @property {boolean} showAnim Rsp_RoomInit showAnim
     * @property {number} dice1 Rsp_RoomInit dice1
     * @property {number} dice2 Rsp_RoomInit dice2
     * @property {number} maxCardCnt Rsp_RoomInit maxCardCnt
     * @property {number} maxHandCardCnt Rsp_RoomInit maxHandCardCnt
     * @property {number} leftCardCnt Rsp_RoomInit leftCardCnt
     * @property {string|null} [pointerId] Rsp_RoomInit pointerId
     * @property {Array.<IRoomPlayerCardInfo>|null} [playerCards] Rsp_RoomInit playerCards
     */

    /**
     * Constructs a new Rsp_RoomInit.
     * @exports Rsp_RoomInit
     * @classdesc Represents a Rsp_RoomInit.
     * @implements IRsp_RoomInit
     * @constructor
     * @param {IRsp_RoomInit=} [p] Properties to set
     */
    function Rsp_RoomInit(p) {
        this.playerCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_RoomInit showAnim.
     * @member {boolean} showAnim
     * @memberof Rsp_RoomInit
     * @instance
     */
    Rsp_RoomInit.prototype.showAnim = false;

    /**
     * Rsp_RoomInit dice1.
     * @member {number} dice1
     * @memberof Rsp_RoomInit
     * @instance
     */
    Rsp_RoomInit.prototype.dice1 = 0;

    /**
     * Rsp_RoomInit dice2.
     * @member {number} dice2
     * @memberof Rsp_RoomInit
     * @instance
     */
    Rsp_RoomInit.prototype.dice2 = 0;

    /**
     * Rsp_RoomInit maxCardCnt.
     * @member {number} maxCardCnt
     * @memberof Rsp_RoomInit
     * @instance
     */
    Rsp_RoomInit.prototype.maxCardCnt = 0;

    /**
     * Rsp_RoomInit maxHandCardCnt.
     * @member {number} maxHandCardCnt
     * @memberof Rsp_RoomInit
     * @instance
     */
    Rsp_RoomInit.prototype.maxHandCardCnt = 0;

    /**
     * Rsp_RoomInit leftCardCnt.
     * @member {number} leftCardCnt
     * @memberof Rsp_RoomInit
     * @instance
     */
    Rsp_RoomInit.prototype.leftCardCnt = 0;

    /**
     * Rsp_RoomInit pointerId.
     * @member {string} pointerId
     * @memberof Rsp_RoomInit
     * @instance
     */
    Rsp_RoomInit.prototype.pointerId = "";

    /**
     * Rsp_RoomInit playerCards.
     * @member {Array.<IRoomPlayerCardInfo>} playerCards
     * @memberof Rsp_RoomInit
     * @instance
     */
    Rsp_RoomInit.prototype.playerCards = $util.emptyArray;

    /**
     * Creates a new Rsp_RoomInit instance using the specified properties.
     * @function create
     * @memberof Rsp_RoomInit
     * @static
     * @param {IRsp_RoomInit=} [properties] Properties to set
     * @returns {Rsp_RoomInit} Rsp_RoomInit instance
     */
    Rsp_RoomInit.create = function create(properties) {
        return new Rsp_RoomInit(properties);
    };

    /**
     * Encodes the specified Rsp_RoomInit message. Does not implicitly {@link Rsp_RoomInit.verify|verify} messages.
     * @function encode
     * @memberof Rsp_RoomInit
     * @static
     * @param {IRsp_RoomInit} m Rsp_RoomInit message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_RoomInit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.showAnim);
        w.uint32(16).int32(m.dice1);
        w.uint32(24).int32(m.dice2);
        w.uint32(32).int32(m.maxCardCnt);
        w.uint32(40).int32(m.maxHandCardCnt);
        w.uint32(48).int32(m.leftCardCnt);
        if (m.pointerId != null && m.hasOwnProperty("pointerId"))
            w.uint32(58).string(m.pointerId);
        if (m.playerCards != null && m.playerCards.length) {
            for (var i = 0; i < m.playerCards.length; ++i)
                $root.RoomPlayerCardInfo.encode(m.playerCards[i], w.uint32(66).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_RoomInit message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_RoomInit
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_RoomInit} Rsp_RoomInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_RoomInit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_RoomInit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.showAnim = r.bool();
                break;
            case 2:
                m.dice1 = r.int32();
                break;
            case 3:
                m.dice2 = r.int32();
                break;
            case 4:
                m.maxCardCnt = r.int32();
                break;
            case 5:
                m.maxHandCardCnt = r.int32();
                break;
            case 6:
                m.leftCardCnt = r.int32();
                break;
            case 7:
                m.pointerId = r.string();
                break;
            case 8:
                if (!(m.playerCards && m.playerCards.length))
                    m.playerCards = [];
                m.playerCards.push($root.RoomPlayerCardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("showAnim"))
            throw $util.ProtocolError("missing required 'showAnim'", { instance: m });
        if (!m.hasOwnProperty("dice1"))
            throw $util.ProtocolError("missing required 'dice1'", { instance: m });
        if (!m.hasOwnProperty("dice2"))
            throw $util.ProtocolError("missing required 'dice2'", { instance: m });
        if (!m.hasOwnProperty("maxCardCnt"))
            throw $util.ProtocolError("missing required 'maxCardCnt'", { instance: m });
        if (!m.hasOwnProperty("maxHandCardCnt"))
            throw $util.ProtocolError("missing required 'maxHandCardCnt'", { instance: m });
        if (!m.hasOwnProperty("leftCardCnt"))
            throw $util.ProtocolError("missing required 'leftCardCnt'", { instance: m });
        return m;
    };

    return Rsp_RoomInit;
})();

$root.Rsp_ForceTing = (function() {

    /**
     * Properties of a Rsp_ForceTing.
     * @exports IRsp_ForceTing
     * @interface IRsp_ForceTing
     * @property {Array.<ITingInfo>|null} [info] Rsp_ForceTing info
     */

    /**
     * Constructs a new Rsp_ForceTing.
     * @exports Rsp_ForceTing
     * @classdesc Represents a Rsp_ForceTing.
     * @implements IRsp_ForceTing
     * @constructor
     * @param {IRsp_ForceTing=} [p] Properties to set
     */
    function Rsp_ForceTing(p) {
        this.info = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_ForceTing info.
     * @member {Array.<ITingInfo>} info
     * @memberof Rsp_ForceTing
     * @instance
     */
    Rsp_ForceTing.prototype.info = $util.emptyArray;

    /**
     * Creates a new Rsp_ForceTing instance using the specified properties.
     * @function create
     * @memberof Rsp_ForceTing
     * @static
     * @param {IRsp_ForceTing=} [properties] Properties to set
     * @returns {Rsp_ForceTing} Rsp_ForceTing instance
     */
    Rsp_ForceTing.create = function create(properties) {
        return new Rsp_ForceTing(properties);
    };

    /**
     * Encodes the specified Rsp_ForceTing message. Does not implicitly {@link Rsp_ForceTing.verify|verify} messages.
     * @function encode
     * @memberof Rsp_ForceTing
     * @static
     * @param {IRsp_ForceTing} m Rsp_ForceTing message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_ForceTing.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.info != null && m.info.length) {
            for (var i = 0; i < m.info.length; ++i)
                $root.TingInfo.encode(m.info[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_ForceTing message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_ForceTing
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_ForceTing} Rsp_ForceTing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_ForceTing.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_ForceTing();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.info && m.info.length))
                    m.info = [];
                m.info.push($root.TingInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_ForceTing;
})();

$root.Rsp_SynTingData = (function() {

    /**
     * Properties of a Rsp_SynTingData.
     * @exports IRsp_SynTingData
     * @interface IRsp_SynTingData
     * @property {Array.<ITingGroupInfo>|null} [tingData] Rsp_SynTingData tingData
     */

    /**
     * Constructs a new Rsp_SynTingData.
     * @exports Rsp_SynTingData
     * @classdesc Represents a Rsp_SynTingData.
     * @implements IRsp_SynTingData
     * @constructor
     * @param {IRsp_SynTingData=} [p] Properties to set
     */
    function Rsp_SynTingData(p) {
        this.tingData = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_SynTingData tingData.
     * @member {Array.<ITingGroupInfo>} tingData
     * @memberof Rsp_SynTingData
     * @instance
     */
    Rsp_SynTingData.prototype.tingData = $util.emptyArray;

    /**
     * Creates a new Rsp_SynTingData instance using the specified properties.
     * @function create
     * @memberof Rsp_SynTingData
     * @static
     * @param {IRsp_SynTingData=} [properties] Properties to set
     * @returns {Rsp_SynTingData} Rsp_SynTingData instance
     */
    Rsp_SynTingData.create = function create(properties) {
        return new Rsp_SynTingData(properties);
    };

    /**
     * Encodes the specified Rsp_SynTingData message. Does not implicitly {@link Rsp_SynTingData.verify|verify} messages.
     * @function encode
     * @memberof Rsp_SynTingData
     * @static
     * @param {IRsp_SynTingData} m Rsp_SynTingData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_SynTingData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.tingData != null && m.tingData.length) {
            for (var i = 0; i < m.tingData.length; ++i)
                $root.TingGroupInfo.encode(m.tingData[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_SynTingData message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_SynTingData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_SynTingData} Rsp_SynTingData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_SynTingData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_SynTingData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.tingData && m.tingData.length))
                    m.tingData = [];
                m.tingData.push($root.TingGroupInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_SynTingData;
})();

$root.Rsp_GuoHu = (function() {

    /**
     * Properties of a Rsp_GuoHu.
     * @exports IRsp_GuoHu
     * @interface IRsp_GuoHu
     * @property {Array.<IGuoHuInfo>|null} [info] Rsp_GuoHu info
     */

    /**
     * Constructs a new Rsp_GuoHu.
     * @exports Rsp_GuoHu
     * @classdesc Represents a Rsp_GuoHu.
     * @implements IRsp_GuoHu
     * @constructor
     * @param {IRsp_GuoHu=} [p] Properties to set
     */
    function Rsp_GuoHu(p) {
        this.info = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_GuoHu info.
     * @member {Array.<IGuoHuInfo>} info
     * @memberof Rsp_GuoHu
     * @instance
     */
    Rsp_GuoHu.prototype.info = $util.emptyArray;

    /**
     * Creates a new Rsp_GuoHu instance using the specified properties.
     * @function create
     * @memberof Rsp_GuoHu
     * @static
     * @param {IRsp_GuoHu=} [properties] Properties to set
     * @returns {Rsp_GuoHu} Rsp_GuoHu instance
     */
    Rsp_GuoHu.create = function create(properties) {
        return new Rsp_GuoHu(properties);
    };

    /**
     * Encodes the specified Rsp_GuoHu message. Does not implicitly {@link Rsp_GuoHu.verify|verify} messages.
     * @function encode
     * @memberof Rsp_GuoHu
     * @static
     * @param {IRsp_GuoHu} m Rsp_GuoHu message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_GuoHu.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.info != null && m.info.length) {
            for (var i = 0; i < m.info.length; ++i)
                $root.GuoHuInfo.encode(m.info[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_GuoHu message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_GuoHu
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_GuoHu} Rsp_GuoHu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_GuoHu.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_GuoHu();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.info && m.info.length))
                    m.info = [];
                m.info.push($root.GuoHuInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_GuoHu;
})();

$root.Req_SelectGap = (function() {

    /**
     * Properties of a Req_SelectGap.
     * @exports IReq_SelectGap
     * @interface IReq_SelectGap
     * @property {number} type Req_SelectGap type
     */

    /**
     * Constructs a new Req_SelectGap.
     * @exports Req_SelectGap
     * @classdesc Represents a Req_SelectGap.
     * @implements IReq_SelectGap
     * @constructor
     * @param {IReq_SelectGap=} [p] Properties to set
     */
    function Req_SelectGap(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_SelectGap type.
     * @member {number} type
     * @memberof Req_SelectGap
     * @instance
     */
    Req_SelectGap.prototype.type = 0;

    /**
     * Creates a new Req_SelectGap instance using the specified properties.
     * @function create
     * @memberof Req_SelectGap
     * @static
     * @param {IReq_SelectGap=} [properties] Properties to set
     * @returns {Req_SelectGap} Req_SelectGap instance
     */
    Req_SelectGap.create = function create(properties) {
        return new Req_SelectGap(properties);
    };

    /**
     * Encodes the specified Req_SelectGap message. Does not implicitly {@link Req_SelectGap.verify|verify} messages.
     * @function encode
     * @memberof Req_SelectGap
     * @static
     * @param {IReq_SelectGap} m Req_SelectGap message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_SelectGap.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        return w;
    };

    /**
     * Decodes a Req_SelectGap message from the specified reader or buffer.
     * @function decode
     * @memberof Req_SelectGap
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_SelectGap} Req_SelectGap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_SelectGap.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_SelectGap();
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

    return Req_SelectGap;
})();

$root.Rsp_SelectGap = (function() {

    /**
     * Properties of a Rsp_SelectGap.
     * @exports IRsp_SelectGap
     * @interface IRsp_SelectGap
     * @property {boolean} result Rsp_SelectGap result
     * @property {string|null} [tips] Rsp_SelectGap tips
     */

    /**
     * Constructs a new Rsp_SelectGap.
     * @exports Rsp_SelectGap
     * @classdesc Represents a Rsp_SelectGap.
     * @implements IRsp_SelectGap
     * @constructor
     * @param {IRsp_SelectGap=} [p] Properties to set
     */
    function Rsp_SelectGap(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_SelectGap result.
     * @member {boolean} result
     * @memberof Rsp_SelectGap
     * @instance
     */
    Rsp_SelectGap.prototype.result = false;

    /**
     * Rsp_SelectGap tips.
     * @member {string} tips
     * @memberof Rsp_SelectGap
     * @instance
     */
    Rsp_SelectGap.prototype.tips = "";

    /**
     * Creates a new Rsp_SelectGap instance using the specified properties.
     * @function create
     * @memberof Rsp_SelectGap
     * @static
     * @param {IRsp_SelectGap=} [properties] Properties to set
     * @returns {Rsp_SelectGap} Rsp_SelectGap instance
     */
    Rsp_SelectGap.create = function create(properties) {
        return new Rsp_SelectGap(properties);
    };

    /**
     * Encodes the specified Rsp_SelectGap message. Does not implicitly {@link Rsp_SelectGap.verify|verify} messages.
     * @function encode
     * @memberof Rsp_SelectGap
     * @static
     * @param {IRsp_SelectGap} m Rsp_SelectGap message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_SelectGap.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.result);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a Rsp_SelectGap message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_SelectGap
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_SelectGap} Rsp_SelectGap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_SelectGap.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_SelectGap();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return Rsp_SelectGap;
})();

$root.Rsp_SelectGapTip = (function() {

    /**
     * Properties of a Rsp_SelectGapTip.
     * @exports IRsp_SelectGapTip
     * @interface IRsp_SelectGapTip
     * @property {Array.<number>|null} [types] Rsp_SelectGapTip types
     */

    /**
     * Constructs a new Rsp_SelectGapTip.
     * @exports Rsp_SelectGapTip
     * @classdesc Represents a Rsp_SelectGapTip.
     * @implements IRsp_SelectGapTip
     * @constructor
     * @param {IRsp_SelectGapTip=} [p] Properties to set
     */
    function Rsp_SelectGapTip(p) {
        this.types = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_SelectGapTip types.
     * @member {Array.<number>} types
     * @memberof Rsp_SelectGapTip
     * @instance
     */
    Rsp_SelectGapTip.prototype.types = $util.emptyArray;

    /**
     * Creates a new Rsp_SelectGapTip instance using the specified properties.
     * @function create
     * @memberof Rsp_SelectGapTip
     * @static
     * @param {IRsp_SelectGapTip=} [properties] Properties to set
     * @returns {Rsp_SelectGapTip} Rsp_SelectGapTip instance
     */
    Rsp_SelectGapTip.create = function create(properties) {
        return new Rsp_SelectGapTip(properties);
    };

    /**
     * Encodes the specified Rsp_SelectGapTip message. Does not implicitly {@link Rsp_SelectGapTip.verify|verify} messages.
     * @function encode
     * @memberof Rsp_SelectGapTip
     * @static
     * @param {IRsp_SelectGapTip} m Rsp_SelectGapTip message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_SelectGapTip.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.types != null && m.types.length) {
            for (var i = 0; i < m.types.length; ++i)
                w.uint32(8).int32(m.types[i]);
        }
        return w;
    };

    /**
     * Decodes a Rsp_SelectGapTip message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_SelectGapTip
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_SelectGapTip} Rsp_SelectGapTip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_SelectGapTip.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_SelectGapTip();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.types && m.types.length))
                    m.types = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.types.push(r.int32());
                } else
                    m.types.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_SelectGapTip;
})();

$root.Rsp_GapTipBroadcast = (function() {

    /**
     * Properties of a Rsp_GapTipBroadcast.
     * @exports IRsp_GapTipBroadcast
     * @interface IRsp_GapTipBroadcast
     * @property {Array.<IGapInfo>|null} [gapInfoList] Rsp_GapTipBroadcast gapInfoList
     */

    /**
     * Constructs a new Rsp_GapTipBroadcast.
     * @exports Rsp_GapTipBroadcast
     * @classdesc Represents a Rsp_GapTipBroadcast.
     * @implements IRsp_GapTipBroadcast
     * @constructor
     * @param {IRsp_GapTipBroadcast=} [p] Properties to set
     */
    function Rsp_GapTipBroadcast(p) {
        this.gapInfoList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_GapTipBroadcast gapInfoList.
     * @member {Array.<IGapInfo>} gapInfoList
     * @memberof Rsp_GapTipBroadcast
     * @instance
     */
    Rsp_GapTipBroadcast.prototype.gapInfoList = $util.emptyArray;

    /**
     * Creates a new Rsp_GapTipBroadcast instance using the specified properties.
     * @function create
     * @memberof Rsp_GapTipBroadcast
     * @static
     * @param {IRsp_GapTipBroadcast=} [properties] Properties to set
     * @returns {Rsp_GapTipBroadcast} Rsp_GapTipBroadcast instance
     */
    Rsp_GapTipBroadcast.create = function create(properties) {
        return new Rsp_GapTipBroadcast(properties);
    };

    /**
     * Encodes the specified Rsp_GapTipBroadcast message. Does not implicitly {@link Rsp_GapTipBroadcast.verify|verify} messages.
     * @function encode
     * @memberof Rsp_GapTipBroadcast
     * @static
     * @param {IRsp_GapTipBroadcast} m Rsp_GapTipBroadcast message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_GapTipBroadcast.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gapInfoList != null && m.gapInfoList.length) {
            for (var i = 0; i < m.gapInfoList.length; ++i)
                $root.GapInfo.encode(m.gapInfoList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_GapTipBroadcast message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_GapTipBroadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_GapTipBroadcast} Rsp_GapTipBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_GapTipBroadcast.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_GapTipBroadcast();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.gapInfoList && m.gapInfoList.length))
                    m.gapInfoList = [];
                m.gapInfoList.push($root.GapInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_GapTipBroadcast;
})();

$root.Rsp_BuHua = (function() {

    /**
     * Properties of a Rsp_BuHua.
     * @exports IRsp_BuHua
     * @interface IRsp_BuHua
     * @property {Array.<IBuHuaNum>|null} [buHua] Rsp_BuHua buHua
     */

    /**
     * Constructs a new Rsp_BuHua.
     * @exports Rsp_BuHua
     * @classdesc Represents a Rsp_BuHua.
     * @implements IRsp_BuHua
     * @constructor
     * @param {IRsp_BuHua=} [p] Properties to set
     */
    function Rsp_BuHua(p) {
        this.buHua = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_BuHua buHua.
     * @member {Array.<IBuHuaNum>} buHua
     * @memberof Rsp_BuHua
     * @instance
     */
    Rsp_BuHua.prototype.buHua = $util.emptyArray;

    /**
     * Creates a new Rsp_BuHua instance using the specified properties.
     * @function create
     * @memberof Rsp_BuHua
     * @static
     * @param {IRsp_BuHua=} [properties] Properties to set
     * @returns {Rsp_BuHua} Rsp_BuHua instance
     */
    Rsp_BuHua.create = function create(properties) {
        return new Rsp_BuHua(properties);
    };

    /**
     * Encodes the specified Rsp_BuHua message. Does not implicitly {@link Rsp_BuHua.verify|verify} messages.
     * @function encode
     * @memberof Rsp_BuHua
     * @static
     * @param {IRsp_BuHua} m Rsp_BuHua message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_BuHua.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.buHua != null && m.buHua.length) {
            for (var i = 0; i < m.buHua.length; ++i)
                $root.BuHuaNum.encode(m.buHua[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_BuHua message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_BuHua
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_BuHua} Rsp_BuHua
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_BuHua.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_BuHua();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.buHua && m.buHua.length))
                    m.buHua = [];
                m.buHua.push($root.BuHuaNum.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_BuHua;
})();

$root.Rsp_AskChangeCards = (function() {

    /**
     * Properties of a Rsp_AskChangeCards.
     * @exports IRsp_AskChangeCards
     * @interface IRsp_AskChangeCards
     * @property {Array.<number>|null} [cards] Rsp_AskChangeCards cards
     */

    /**
     * Constructs a new Rsp_AskChangeCards.
     * @exports Rsp_AskChangeCards
     * @classdesc Represents a Rsp_AskChangeCards.
     * @implements IRsp_AskChangeCards
     * @constructor
     * @param {IRsp_AskChangeCards=} [p] Properties to set
     */
    function Rsp_AskChangeCards(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_AskChangeCards cards.
     * @member {Array.<number>} cards
     * @memberof Rsp_AskChangeCards
     * @instance
     */
    Rsp_AskChangeCards.prototype.cards = $util.emptyArray;

    /**
     * Creates a new Rsp_AskChangeCards instance using the specified properties.
     * @function create
     * @memberof Rsp_AskChangeCards
     * @static
     * @param {IRsp_AskChangeCards=} [properties] Properties to set
     * @returns {Rsp_AskChangeCards} Rsp_AskChangeCards instance
     */
    Rsp_AskChangeCards.create = function create(properties) {
        return new Rsp_AskChangeCards(properties);
    };

    /**
     * Encodes the specified Rsp_AskChangeCards message. Does not implicitly {@link Rsp_AskChangeCards.verify|verify} messages.
     * @function encode
     * @memberof Rsp_AskChangeCards
     * @static
     * @param {IRsp_AskChangeCards} m Rsp_AskChangeCards message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_AskChangeCards.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                w.uint32(8).int32(m.cards[i]);
        }
        return w;
    };

    /**
     * Decodes a Rsp_AskChangeCards message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_AskChangeCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_AskChangeCards} Rsp_AskChangeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_AskChangeCards.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_AskChangeCards();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.cards.push(r.int32());
                } else
                    m.cards.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_AskChangeCards;
})();

$root.Rsp_PutOrGetCard = (function() {

    /**
     * Properties of a Rsp_PutOrGetCard.
     * @exports IRsp_PutOrGetCard
     * @interface IRsp_PutOrGetCard
     * @property {boolean} isGet Rsp_PutOrGetCard isGet
     * @property {string} uId Rsp_PutOrGetCard uId
     * @property {number|null} [card] Rsp_PutOrGetCard card
     * @property {boolean|null} [isHuaCard] Rsp_PutOrGetCard isHuaCard
     * @property {boolean|null} [isNeedPlayHua] Rsp_PutOrGetCard isNeedPlayHua
     * @property {Array.<IMenuInfo>|null} [menuInfos] Rsp_PutOrGetCard menuInfos
     */

    /**
     * Constructs a new Rsp_PutOrGetCard.
     * @exports Rsp_PutOrGetCard
     * @classdesc Represents a Rsp_PutOrGetCard.
     * @implements IRsp_PutOrGetCard
     * @constructor
     * @param {IRsp_PutOrGetCard=} [p] Properties to set
     */
    function Rsp_PutOrGetCard(p) {
        this.menuInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_PutOrGetCard isGet.
     * @member {boolean} isGet
     * @memberof Rsp_PutOrGetCard
     * @instance
     */
    Rsp_PutOrGetCard.prototype.isGet = false;

    /**
     * Rsp_PutOrGetCard uId.
     * @member {string} uId
     * @memberof Rsp_PutOrGetCard
     * @instance
     */
    Rsp_PutOrGetCard.prototype.uId = "";

    /**
     * Rsp_PutOrGetCard card.
     * @member {number} card
     * @memberof Rsp_PutOrGetCard
     * @instance
     */
    Rsp_PutOrGetCard.prototype.card = 0;

    /**
     * Rsp_PutOrGetCard isHuaCard.
     * @member {boolean} isHuaCard
     * @memberof Rsp_PutOrGetCard
     * @instance
     */
    Rsp_PutOrGetCard.prototype.isHuaCard = false;

    /**
     * Rsp_PutOrGetCard isNeedPlayHua.
     * @member {boolean} isNeedPlayHua
     * @memberof Rsp_PutOrGetCard
     * @instance
     */
    Rsp_PutOrGetCard.prototype.isNeedPlayHua = false;

    /**
     * Rsp_PutOrGetCard menuInfos.
     * @member {Array.<IMenuInfo>} menuInfos
     * @memberof Rsp_PutOrGetCard
     * @instance
     */
    Rsp_PutOrGetCard.prototype.menuInfos = $util.emptyArray;

    /**
     * Creates a new Rsp_PutOrGetCard instance using the specified properties.
     * @function create
     * @memberof Rsp_PutOrGetCard
     * @static
     * @param {IRsp_PutOrGetCard=} [properties] Properties to set
     * @returns {Rsp_PutOrGetCard} Rsp_PutOrGetCard instance
     */
    Rsp_PutOrGetCard.create = function create(properties) {
        return new Rsp_PutOrGetCard(properties);
    };

    /**
     * Encodes the specified Rsp_PutOrGetCard message. Does not implicitly {@link Rsp_PutOrGetCard.verify|verify} messages.
     * @function encode
     * @memberof Rsp_PutOrGetCard
     * @static
     * @param {IRsp_PutOrGetCard} m Rsp_PutOrGetCard message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_PutOrGetCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isGet);
        w.uint32(18).string(m.uId);
        if (m.card != null && m.hasOwnProperty("card"))
            w.uint32(24).int32(m.card);
        if (m.isHuaCard != null && m.hasOwnProperty("isHuaCard"))
            w.uint32(32).bool(m.isHuaCard);
        if (m.isNeedPlayHua != null && m.hasOwnProperty("isNeedPlayHua"))
            w.uint32(40).bool(m.isNeedPlayHua);
        if (m.menuInfos != null && m.menuInfos.length) {
            for (var i = 0; i < m.menuInfos.length; ++i)
                $root.MenuInfo.encode(m.menuInfos[i], w.uint32(50).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_PutOrGetCard message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_PutOrGetCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_PutOrGetCard} Rsp_PutOrGetCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_PutOrGetCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_PutOrGetCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isGet = r.bool();
                break;
            case 2:
                m.uId = r.string();
                break;
            case 3:
                m.card = r.int32();
                break;
            case 4:
                m.isHuaCard = r.bool();
                break;
            case 5:
                m.isNeedPlayHua = r.bool();
                break;
            case 6:
                if (!(m.menuInfos && m.menuInfos.length))
                    m.menuInfos = [];
                m.menuInfos.push($root.MenuInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isGet"))
            throw $util.ProtocolError("missing required 'isGet'", { instance: m });
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        return m;
    };

    return Rsp_PutOrGetCard;
})();

$root.Rsp_MenuInfo = (function() {

    /**
     * Properties of a Rsp_MenuInfo.
     * @exports IRsp_MenuInfo
     * @interface IRsp_MenuInfo
     * @property {Array.<IMenuInfo>|null} [menuInfos] Rsp_MenuInfo menuInfos
     */

    /**
     * Constructs a new Rsp_MenuInfo.
     * @exports Rsp_MenuInfo
     * @classdesc Represents a Rsp_MenuInfo.
     * @implements IRsp_MenuInfo
     * @constructor
     * @param {IRsp_MenuInfo=} [p] Properties to set
     */
    function Rsp_MenuInfo(p) {
        this.menuInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_MenuInfo menuInfos.
     * @member {Array.<IMenuInfo>} menuInfos
     * @memberof Rsp_MenuInfo
     * @instance
     */
    Rsp_MenuInfo.prototype.menuInfos = $util.emptyArray;

    /**
     * Creates a new Rsp_MenuInfo instance using the specified properties.
     * @function create
     * @memberof Rsp_MenuInfo
     * @static
     * @param {IRsp_MenuInfo=} [properties] Properties to set
     * @returns {Rsp_MenuInfo} Rsp_MenuInfo instance
     */
    Rsp_MenuInfo.create = function create(properties) {
        return new Rsp_MenuInfo(properties);
    };

    /**
     * Encodes the specified Rsp_MenuInfo message. Does not implicitly {@link Rsp_MenuInfo.verify|verify} messages.
     * @function encode
     * @memberof Rsp_MenuInfo
     * @static
     * @param {IRsp_MenuInfo} m Rsp_MenuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_MenuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.menuInfos != null && m.menuInfos.length) {
            for (var i = 0; i < m.menuInfos.length; ++i)
                $root.MenuInfo.encode(m.menuInfos[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_MenuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_MenuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_MenuInfo} Rsp_MenuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_MenuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_MenuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.menuInfos && m.menuInfos.length))
                    m.menuInfos = [];
                m.menuInfos.push($root.MenuInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_MenuInfo;
})();

$root.Req_PutCard = (function() {

    /**
     * Properties of a Req_PutCard.
     * @exports IReq_PutCard
     * @interface IReq_PutCard
     * @property {number} id Req_PutCard id
     */

    /**
     * Constructs a new Req_PutCard.
     * @exports Req_PutCard
     * @classdesc Represents a Req_PutCard.
     * @implements IReq_PutCard
     * @constructor
     * @param {IReq_PutCard=} [p] Properties to set
     */
    function Req_PutCard(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_PutCard id.
     * @member {number} id
     * @memberof Req_PutCard
     * @instance
     */
    Req_PutCard.prototype.id = 0;

    /**
     * Creates a new Req_PutCard instance using the specified properties.
     * @function create
     * @memberof Req_PutCard
     * @static
     * @param {IReq_PutCard=} [properties] Properties to set
     * @returns {Req_PutCard} Req_PutCard instance
     */
    Req_PutCard.create = function create(properties) {
        return new Req_PutCard(properties);
    };

    /**
     * Encodes the specified Req_PutCard message. Does not implicitly {@link Req_PutCard.verify|verify} messages.
     * @function encode
     * @memberof Req_PutCard
     * @static
     * @param {IReq_PutCard} m Req_PutCard message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_PutCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        return w;
    };

    /**
     * Decodes a Req_PutCard message from the specified reader or buffer.
     * @function decode
     * @memberof Req_PutCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_PutCard} Req_PutCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_PutCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_PutCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
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

    return Req_PutCard;
})();

$root.Rsp_CanPutCard = (function() {

    /**
     * Properties of a Rsp_CanPutCard.
     * @exports IRsp_CanPutCard
     * @interface IRsp_CanPutCard
     * @property {boolean} forceTing Rsp_CanPutCard forceTing
     */

    /**
     * Constructs a new Rsp_CanPutCard.
     * @exports Rsp_CanPutCard
     * @classdesc Represents a Rsp_CanPutCard.
     * @implements IRsp_CanPutCard
     * @constructor
     * @param {IRsp_CanPutCard=} [p] Properties to set
     */
    function Rsp_CanPutCard(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_CanPutCard forceTing.
     * @member {boolean} forceTing
     * @memberof Rsp_CanPutCard
     * @instance
     */
    Rsp_CanPutCard.prototype.forceTing = false;

    /**
     * Creates a new Rsp_CanPutCard instance using the specified properties.
     * @function create
     * @memberof Rsp_CanPutCard
     * @static
     * @param {IRsp_CanPutCard=} [properties] Properties to set
     * @returns {Rsp_CanPutCard} Rsp_CanPutCard instance
     */
    Rsp_CanPutCard.create = function create(properties) {
        return new Rsp_CanPutCard(properties);
    };

    /**
     * Encodes the specified Rsp_CanPutCard message. Does not implicitly {@link Rsp_CanPutCard.verify|verify} messages.
     * @function encode
     * @memberof Rsp_CanPutCard
     * @static
     * @param {IRsp_CanPutCard} m Rsp_CanPutCard message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_CanPutCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.forceTing);
        return w;
    };

    /**
     * Decodes a Rsp_CanPutCard message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_CanPutCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_CanPutCard} Rsp_CanPutCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_CanPutCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_CanPutCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.forceTing = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("forceTing"))
            throw $util.ProtocolError("missing required 'forceTing'", { instance: m });
        return m;
    };

    return Rsp_CanPutCard;
})();

$root.Rsp_PutCard = (function() {

    /**
     * Properties of a Rsp_PutCard.
     * @exports IRsp_PutCard
     * @interface IRsp_PutCard
     * @property {boolean} result Rsp_PutCard result
     * @property {string|null} [tips] Rsp_PutCard tips
     * @property {number|null} [deleteId] Rsp_PutCard deleteId
     */

    /**
     * Constructs a new Rsp_PutCard.
     * @exports Rsp_PutCard
     * @classdesc Represents a Rsp_PutCard.
     * @implements IRsp_PutCard
     * @constructor
     * @param {IRsp_PutCard=} [p] Properties to set
     */
    function Rsp_PutCard(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_PutCard result.
     * @member {boolean} result
     * @memberof Rsp_PutCard
     * @instance
     */
    Rsp_PutCard.prototype.result = false;

    /**
     * Rsp_PutCard tips.
     * @member {string} tips
     * @memberof Rsp_PutCard
     * @instance
     */
    Rsp_PutCard.prototype.tips = "";

    /**
     * Rsp_PutCard deleteId.
     * @member {number} deleteId
     * @memberof Rsp_PutCard
     * @instance
     */
    Rsp_PutCard.prototype.deleteId = 0;

    /**
     * Creates a new Rsp_PutCard instance using the specified properties.
     * @function create
     * @memberof Rsp_PutCard
     * @static
     * @param {IRsp_PutCard=} [properties] Properties to set
     * @returns {Rsp_PutCard} Rsp_PutCard instance
     */
    Rsp_PutCard.create = function create(properties) {
        return new Rsp_PutCard(properties);
    };

    /**
     * Encodes the specified Rsp_PutCard message. Does not implicitly {@link Rsp_PutCard.verify|verify} messages.
     * @function encode
     * @memberof Rsp_PutCard
     * @static
     * @param {IRsp_PutCard} m Rsp_PutCard message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_PutCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.result);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.deleteId != null && m.hasOwnProperty("deleteId"))
            w.uint32(24).int32(m.deleteId);
        return w;
    };

    /**
     * Decodes a Rsp_PutCard message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_PutCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_PutCard} Rsp_PutCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_PutCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_PutCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            case 3:
                m.deleteId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return Rsp_PutCard;
})();

$root.Rsp_Gameover = (function() {

    /**
     * Properties of a Rsp_Gameover.
     * @exports IRsp_Gameover
     * @interface IRsp_Gameover
     * @property {string} uId Rsp_Gameover uId
     * @property {Array.<number>|null} [cards] Rsp_Gameover cards
     */

    /**
     * Constructs a new Rsp_Gameover.
     * @exports Rsp_Gameover
     * @classdesc Represents a Rsp_Gameover.
     * @implements IRsp_Gameover
     * @constructor
     * @param {IRsp_Gameover=} [p] Properties to set
     */
    function Rsp_Gameover(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_Gameover uId.
     * @member {string} uId
     * @memberof Rsp_Gameover
     * @instance
     */
    Rsp_Gameover.prototype.uId = "";

    /**
     * Rsp_Gameover cards.
     * @member {Array.<number>} cards
     * @memberof Rsp_Gameover
     * @instance
     */
    Rsp_Gameover.prototype.cards = $util.emptyArray;

    /**
     * Creates a new Rsp_Gameover instance using the specified properties.
     * @function create
     * @memberof Rsp_Gameover
     * @static
     * @param {IRsp_Gameover=} [properties] Properties to set
     * @returns {Rsp_Gameover} Rsp_Gameover instance
     */
    Rsp_Gameover.create = function create(properties) {
        return new Rsp_Gameover(properties);
    };

    /**
     * Encodes the specified Rsp_Gameover message. Does not implicitly {@link Rsp_Gameover.verify|verify} messages.
     * @function encode
     * @memberof Rsp_Gameover
     * @static
     * @param {IRsp_Gameover} m Rsp_Gameover message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_Gameover.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                w.uint32(16).int32(m.cards[i]);
        }
        return w;
    };

    /**
     * Decodes a Rsp_Gameover message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_Gameover
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_Gameover} Rsp_Gameover
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_Gameover.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_Gameover();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.cards.push(r.int32());
                } else
                    m.cards.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        return m;
    };

    return Rsp_Gameover;
})();

$root.Rsp_Result = (function() {

    /**
     * Properties of a Rsp_Result.
     * @exports IRsp_Result
     * @interface IRsp_Result
     * @property {boolean} hasNext Rsp_Result hasNext
     * @property {string|null} [winId] Rsp_Result winId
     * @property {boolean} hasEx Rsp_Result hasEx
     * @property {IRoundInfo} info Rsp_Result info
     * @property {string} maxFanName Rsp_Result maxFanName
     * @property {number} winCards Rsp_Result winCards
     * @property {number} huCard Rsp_Result huCard
     */

    /**
     * Constructs a new Rsp_Result.
     * @exports Rsp_Result
     * @classdesc Represents a Rsp_Result.
     * @implements IRsp_Result
     * @constructor
     * @param {IRsp_Result=} [p] Properties to set
     */
    function Rsp_Result(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_Result hasNext.
     * @member {boolean} hasNext
     * @memberof Rsp_Result
     * @instance
     */
    Rsp_Result.prototype.hasNext = false;

    /**
     * Rsp_Result winId.
     * @member {string} winId
     * @memberof Rsp_Result
     * @instance
     */
    Rsp_Result.prototype.winId = "";

    /**
     * Rsp_Result hasEx.
     * @member {boolean} hasEx
     * @memberof Rsp_Result
     * @instance
     */
    Rsp_Result.prototype.hasEx = false;

    /**
     * Rsp_Result info.
     * @member {IRoundInfo} info
     * @memberof Rsp_Result
     * @instance
     */
    Rsp_Result.prototype.info = null;

    /**
     * Rsp_Result maxFanName.
     * @member {string} maxFanName
     * @memberof Rsp_Result
     * @instance
     */
    Rsp_Result.prototype.maxFanName = "";

    /**
     * Rsp_Result winCards.
     * @member {number} winCards
     * @memberof Rsp_Result
     * @instance
     */
    Rsp_Result.prototype.winCards = 0;

    /**
     * Rsp_Result huCard.
     * @member {number} huCard
     * @memberof Rsp_Result
     * @instance
     */
    Rsp_Result.prototype.huCard = 0;

    /**
     * Creates a new Rsp_Result instance using the specified properties.
     * @function create
     * @memberof Rsp_Result
     * @static
     * @param {IRsp_Result=} [properties] Properties to set
     * @returns {Rsp_Result} Rsp_Result instance
     */
    Rsp_Result.create = function create(properties) {
        return new Rsp_Result(properties);
    };

    /**
     * Encodes the specified Rsp_Result message. Does not implicitly {@link Rsp_Result.verify|verify} messages.
     * @function encode
     * @memberof Rsp_Result
     * @static
     * @param {IRsp_Result} m Rsp_Result message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_Result.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.hasNext);
        if (m.winId != null && m.hasOwnProperty("winId"))
            w.uint32(26).string(m.winId);
        w.uint32(32).bool(m.hasEx);
        $root.RoundInfo.encode(m.info, w.uint32(42).fork()).ldelim();
        w.uint32(50).string(m.maxFanName);
        w.uint32(56).int32(m.winCards);
        w.uint32(64).int32(m.huCard);
        return w;
    };

    /**
     * Decodes a Rsp_Result message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_Result
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_Result} Rsp_Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_Result.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_Result();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.hasNext = r.bool();
                break;
            case 3:
                m.winId = r.string();
                break;
            case 4:
                m.hasEx = r.bool();
                break;
            case 5:
                m.info = $root.RoundInfo.decode(r, r.uint32());
                break;
            case 6:
                m.maxFanName = r.string();
                break;
            case 7:
                m.winCards = r.int32();
                break;
            case 8:
                m.huCard = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("hasNext"))
            throw $util.ProtocolError("missing required 'hasNext'", { instance: m });
        if (!m.hasOwnProperty("hasEx"))
            throw $util.ProtocolError("missing required 'hasEx'", { instance: m });
        if (!m.hasOwnProperty("info"))
            throw $util.ProtocolError("missing required 'info'", { instance: m });
        if (!m.hasOwnProperty("maxFanName"))
            throw $util.ProtocolError("missing required 'maxFanName'", { instance: m });
        if (!m.hasOwnProperty("winCards"))
            throw $util.ProtocolError("missing required 'winCards'", { instance: m });
        if (!m.hasOwnProperty("huCard"))
            throw $util.ProtocolError("missing required 'huCard'", { instance: m });
        return m;
    };

    return Rsp_Result;
})();

$root.Rsp_OutRoom = (function() {

    /**
     * Properties of a Rsp_OutRoom.
     * @exports IRsp_OutRoom
     * @interface IRsp_OutRoom
     * @property {boolean} result Rsp_OutRoom result
     * @property {string|null} [tips] Rsp_OutRoom tips
     */

    /**
     * Constructs a new Rsp_OutRoom.
     * @exports Rsp_OutRoom
     * @classdesc Represents a Rsp_OutRoom.
     * @implements IRsp_OutRoom
     * @constructor
     * @param {IRsp_OutRoom=} [p] Properties to set
     */
    function Rsp_OutRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_OutRoom result.
     * @member {boolean} result
     * @memberof Rsp_OutRoom
     * @instance
     */
    Rsp_OutRoom.prototype.result = false;

    /**
     * Rsp_OutRoom tips.
     * @member {string} tips
     * @memberof Rsp_OutRoom
     * @instance
     */
    Rsp_OutRoom.prototype.tips = "";

    /**
     * Creates a new Rsp_OutRoom instance using the specified properties.
     * @function create
     * @memberof Rsp_OutRoom
     * @static
     * @param {IRsp_OutRoom=} [properties] Properties to set
     * @returns {Rsp_OutRoom} Rsp_OutRoom instance
     */
    Rsp_OutRoom.create = function create(properties) {
        return new Rsp_OutRoom(properties);
    };

    /**
     * Encodes the specified Rsp_OutRoom message. Does not implicitly {@link Rsp_OutRoom.verify|verify} messages.
     * @function encode
     * @memberof Rsp_OutRoom
     * @static
     * @param {IRsp_OutRoom} m Rsp_OutRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_OutRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.result);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a Rsp_OutRoom message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_OutRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_OutRoom} Rsp_OutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_OutRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_OutRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return Rsp_OutRoom;
})();

$root.Rsp_EnterRoom = (function() {

    /**
     * Properties of a Rsp_EnterRoom.
     * @exports IRsp_EnterRoom
     * @interface IRsp_EnterRoom
     * @property {boolean} result Rsp_EnterRoom result
     * @property {string|null} [tips] Rsp_EnterRoom tips
     */

    /**
     * Constructs a new Rsp_EnterRoom.
     * @exports Rsp_EnterRoom
     * @classdesc Represents a Rsp_EnterRoom.
     * @implements IRsp_EnterRoom
     * @constructor
     * @param {IRsp_EnterRoom=} [p] Properties to set
     */
    function Rsp_EnterRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_EnterRoom result.
     * @member {boolean} result
     * @memberof Rsp_EnterRoom
     * @instance
     */
    Rsp_EnterRoom.prototype.result = false;

    /**
     * Rsp_EnterRoom tips.
     * @member {string} tips
     * @memberof Rsp_EnterRoom
     * @instance
     */
    Rsp_EnterRoom.prototype.tips = "";

    /**
     * Creates a new Rsp_EnterRoom instance using the specified properties.
     * @function create
     * @memberof Rsp_EnterRoom
     * @static
     * @param {IRsp_EnterRoom=} [properties] Properties to set
     * @returns {Rsp_EnterRoom} Rsp_EnterRoom instance
     */
    Rsp_EnterRoom.create = function create(properties) {
        return new Rsp_EnterRoom(properties);
    };

    /**
     * Encodes the specified Rsp_EnterRoom message. Does not implicitly {@link Rsp_EnterRoom.verify|verify} messages.
     * @function encode
     * @memberof Rsp_EnterRoom
     * @static
     * @param {IRsp_EnterRoom} m Rsp_EnterRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_EnterRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.result);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a Rsp_EnterRoom message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_EnterRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_EnterRoom} Rsp_EnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_EnterRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_EnterRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return Rsp_EnterRoom;
})();

$root.Req_Round = (function() {

    /**
     * Properties of a Req_Round.
     * @exports IReq_Round
     * @interface IReq_Round
     */

    /**
     * Constructs a new Req_Round.
     * @exports Req_Round
     * @classdesc Represents a Req_Round.
     * @implements IReq_Round
     * @constructor
     * @param {IReq_Round=} [p] Properties to set
     */
    function Req_Round(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new Req_Round instance using the specified properties.
     * @function create
     * @memberof Req_Round
     * @static
     * @param {IReq_Round=} [properties] Properties to set
     * @returns {Req_Round} Req_Round instance
     */
    Req_Round.create = function create(properties) {
        return new Req_Round(properties);
    };

    /**
     * Encodes the specified Req_Round message. Does not implicitly {@link Req_Round.verify|verify} messages.
     * @function encode
     * @memberof Req_Round
     * @static
     * @param {IReq_Round} m Req_Round message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_Round.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a Req_Round message from the specified reader or buffer.
     * @function decode
     * @memberof Req_Round
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_Round} Req_Round
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_Round.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_Round();
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

    return Req_Round;
})();

$root.Rsp_Round = (function() {

    /**
     * Properties of a Rsp_Round.
     * @exports IRsp_Round
     * @interface IRsp_Round
     * @property {Array.<IRoundInfo>|null} [info] Rsp_Round info
     * @property {string} totalScore Rsp_Round totalScore
     * @property {number} totalFan Rsp_Round totalFan
     */

    /**
     * Constructs a new Rsp_Round.
     * @exports Rsp_Round
     * @classdesc Represents a Rsp_Round.
     * @implements IRsp_Round
     * @constructor
     * @param {IRsp_Round=} [p] Properties to set
     */
    function Rsp_Round(p) {
        this.info = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_Round info.
     * @member {Array.<IRoundInfo>} info
     * @memberof Rsp_Round
     * @instance
     */
    Rsp_Round.prototype.info = $util.emptyArray;

    /**
     * Rsp_Round totalScore.
     * @member {string} totalScore
     * @memberof Rsp_Round
     * @instance
     */
    Rsp_Round.prototype.totalScore = "";

    /**
     * Rsp_Round totalFan.
     * @member {number} totalFan
     * @memberof Rsp_Round
     * @instance
     */
    Rsp_Round.prototype.totalFan = 0;

    /**
     * Creates a new Rsp_Round instance using the specified properties.
     * @function create
     * @memberof Rsp_Round
     * @static
     * @param {IRsp_Round=} [properties] Properties to set
     * @returns {Rsp_Round} Rsp_Round instance
     */
    Rsp_Round.create = function create(properties) {
        return new Rsp_Round(properties);
    };

    /**
     * Encodes the specified Rsp_Round message. Does not implicitly {@link Rsp_Round.verify|verify} messages.
     * @function encode
     * @memberof Rsp_Round
     * @static
     * @param {IRsp_Round} m Rsp_Round message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_Round.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.info != null && m.info.length) {
            for (var i = 0; i < m.info.length; ++i)
                $root.RoundInfo.encode(m.info[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(18).string(m.totalScore);
        w.uint32(24).int32(m.totalFan);
        return w;
    };

    /**
     * Decodes a Rsp_Round message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_Round
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_Round} Rsp_Round
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_Round.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_Round();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.info && m.info.length))
                    m.info = [];
                m.info.push($root.RoundInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.totalScore = r.string();
                break;
            case 3:
                m.totalFan = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("totalScore"))
            throw $util.ProtocolError("missing required 'totalScore'", { instance: m });
        if (!m.hasOwnProperty("totalFan"))
            throw $util.ProtocolError("missing required 'totalFan'", { instance: m });
        return m;
    };

    return Rsp_Round;
})();

$root.Rsp_OpenLaizi = (function() {

    /**
     * Properties of a Rsp_OpenLaizi.
     * @exports IRsp_OpenLaizi
     * @interface IRsp_OpenLaizi
     * @property {number} type Rsp_OpenLaizi type
     * @property {IGuangDongLaiziInfo|null} [gLaiziInfo] Rsp_OpenLaizi gLaiziInfo
     * @property {IFuzhouLaiziInfo|null} [fLaiziInfo] Rsp_OpenLaizi fLaiziInfo
     */

    /**
     * Constructs a new Rsp_OpenLaizi.
     * @exports Rsp_OpenLaizi
     * @classdesc Represents a Rsp_OpenLaizi.
     * @implements IRsp_OpenLaizi
     * @constructor
     * @param {IRsp_OpenLaizi=} [p] Properties to set
     */
    function Rsp_OpenLaizi(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_OpenLaizi type.
     * @member {number} type
     * @memberof Rsp_OpenLaizi
     * @instance
     */
    Rsp_OpenLaizi.prototype.type = 0;

    /**
     * Rsp_OpenLaizi gLaiziInfo.
     * @member {IGuangDongLaiziInfo|null|undefined} gLaiziInfo
     * @memberof Rsp_OpenLaizi
     * @instance
     */
    Rsp_OpenLaizi.prototype.gLaiziInfo = null;

    /**
     * Rsp_OpenLaizi fLaiziInfo.
     * @member {IFuzhouLaiziInfo|null|undefined} fLaiziInfo
     * @memberof Rsp_OpenLaizi
     * @instance
     */
    Rsp_OpenLaizi.prototype.fLaiziInfo = null;

    /**
     * Creates a new Rsp_OpenLaizi instance using the specified properties.
     * @function create
     * @memberof Rsp_OpenLaizi
     * @static
     * @param {IRsp_OpenLaizi=} [properties] Properties to set
     * @returns {Rsp_OpenLaizi} Rsp_OpenLaizi instance
     */
    Rsp_OpenLaizi.create = function create(properties) {
        return new Rsp_OpenLaizi(properties);
    };

    /**
     * Encodes the specified Rsp_OpenLaizi message. Does not implicitly {@link Rsp_OpenLaizi.verify|verify} messages.
     * @function encode
     * @memberof Rsp_OpenLaizi
     * @static
     * @param {IRsp_OpenLaizi} m Rsp_OpenLaizi message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_OpenLaizi.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.gLaiziInfo != null && m.hasOwnProperty("gLaiziInfo"))
            $root.GuangDongLaiziInfo.encode(m.gLaiziInfo, w.uint32(18).fork()).ldelim();
        if (m.fLaiziInfo != null && m.hasOwnProperty("fLaiziInfo"))
            $root.FuzhouLaiziInfo.encode(m.fLaiziInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a Rsp_OpenLaizi message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_OpenLaizi
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_OpenLaizi} Rsp_OpenLaizi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_OpenLaizi.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_OpenLaizi();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.gLaiziInfo = $root.GuangDongLaiziInfo.decode(r, r.uint32());
                break;
            case 3:
                m.fLaiziInfo = $root.FuzhouLaiziInfo.decode(r, r.uint32());
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

    return Rsp_OpenLaizi;
})();

$root.Rsp_SendLaizi = (function() {

    /**
     * Properties of a Rsp_SendLaizi.
     * @exports IRsp_SendLaizi
     * @interface IRsp_SendLaizi
     * @property {number} type Rsp_SendLaizi type
     * @property {IGuangDongLaiziInfo|null} [gLaiziInfo] Rsp_SendLaizi gLaiziInfo
     * @property {IFuzhouLaiziInfo|null} [fLaiziInfo] Rsp_SendLaizi fLaiziInfo
     */

    /**
     * Constructs a new Rsp_SendLaizi.
     * @exports Rsp_SendLaizi
     * @classdesc Represents a Rsp_SendLaizi.
     * @implements IRsp_SendLaizi
     * @constructor
     * @param {IRsp_SendLaizi=} [p] Properties to set
     */
    function Rsp_SendLaizi(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_SendLaizi type.
     * @member {number} type
     * @memberof Rsp_SendLaizi
     * @instance
     */
    Rsp_SendLaizi.prototype.type = 0;

    /**
     * Rsp_SendLaizi gLaiziInfo.
     * @member {IGuangDongLaiziInfo|null|undefined} gLaiziInfo
     * @memberof Rsp_SendLaizi
     * @instance
     */
    Rsp_SendLaizi.prototype.gLaiziInfo = null;

    /**
     * Rsp_SendLaizi fLaiziInfo.
     * @member {IFuzhouLaiziInfo|null|undefined} fLaiziInfo
     * @memberof Rsp_SendLaizi
     * @instance
     */
    Rsp_SendLaizi.prototype.fLaiziInfo = null;

    /**
     * Creates a new Rsp_SendLaizi instance using the specified properties.
     * @function create
     * @memberof Rsp_SendLaizi
     * @static
     * @param {IRsp_SendLaizi=} [properties] Properties to set
     * @returns {Rsp_SendLaizi} Rsp_SendLaizi instance
     */
    Rsp_SendLaizi.create = function create(properties) {
        return new Rsp_SendLaizi(properties);
    };

    /**
     * Encodes the specified Rsp_SendLaizi message. Does not implicitly {@link Rsp_SendLaizi.verify|verify} messages.
     * @function encode
     * @memberof Rsp_SendLaizi
     * @static
     * @param {IRsp_SendLaizi} m Rsp_SendLaizi message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_SendLaizi.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.gLaiziInfo != null && m.hasOwnProperty("gLaiziInfo"))
            $root.GuangDongLaiziInfo.encode(m.gLaiziInfo, w.uint32(18).fork()).ldelim();
        if (m.fLaiziInfo != null && m.hasOwnProperty("fLaiziInfo"))
            $root.FuzhouLaiziInfo.encode(m.fLaiziInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a Rsp_SendLaizi message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_SendLaizi
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_SendLaizi} Rsp_SendLaizi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_SendLaizi.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_SendLaizi();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.gLaiziInfo = $root.GuangDongLaiziInfo.decode(r, r.uint32());
                break;
            case 3:
                m.fLaiziInfo = $root.FuzhouLaiziInfo.decode(r, r.uint32());
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

    return Rsp_SendLaizi;
})();

$root.Rsp_SendMa = (function() {

    /**
     * Properties of a Rsp_SendMa.
     * @exports IRsp_SendMa
     * @interface IRsp_SendMa
     * @property {Array.<IMaCardInfo>|null} [maCardInfos] Rsp_SendMa maCardInfos
     */

    /**
     * Constructs a new Rsp_SendMa.
     * @exports Rsp_SendMa
     * @classdesc Represents a Rsp_SendMa.
     * @implements IRsp_SendMa
     * @constructor
     * @param {IRsp_SendMa=} [p] Properties to set
     */
    function Rsp_SendMa(p) {
        this.maCardInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_SendMa maCardInfos.
     * @member {Array.<IMaCardInfo>} maCardInfos
     * @memberof Rsp_SendMa
     * @instance
     */
    Rsp_SendMa.prototype.maCardInfos = $util.emptyArray;

    /**
     * Creates a new Rsp_SendMa instance using the specified properties.
     * @function create
     * @memberof Rsp_SendMa
     * @static
     * @param {IRsp_SendMa=} [properties] Properties to set
     * @returns {Rsp_SendMa} Rsp_SendMa instance
     */
    Rsp_SendMa.create = function create(properties) {
        return new Rsp_SendMa(properties);
    };

    /**
     * Encodes the specified Rsp_SendMa message. Does not implicitly {@link Rsp_SendMa.verify|verify} messages.
     * @function encode
     * @memberof Rsp_SendMa
     * @static
     * @param {IRsp_SendMa} m Rsp_SendMa message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_SendMa.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.maCardInfos != null && m.maCardInfos.length) {
            for (var i = 0; i < m.maCardInfos.length; ++i)
                $root.MaCardInfo.encode(m.maCardInfos[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_SendMa message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_SendMa
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_SendMa} Rsp_SendMa
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_SendMa.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_SendMa();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.maCardInfos && m.maCardInfos.length))
                    m.maCardInfos = [];
                m.maCardInfos.push($root.MaCardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_SendMa;
})();

$root.Rsp_OpenMa = (function() {

    /**
     * Properties of a Rsp_OpenMa.
     * @exports IRsp_OpenMa
     * @interface IRsp_OpenMa
     * @property {Array.<IPlayerMaInfo>|null} [info] Rsp_OpenMa info
     */

    /**
     * Constructs a new Rsp_OpenMa.
     * @exports Rsp_OpenMa
     * @classdesc Represents a Rsp_OpenMa.
     * @implements IRsp_OpenMa
     * @constructor
     * @param {IRsp_OpenMa=} [p] Properties to set
     */
    function Rsp_OpenMa(p) {
        this.info = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_OpenMa info.
     * @member {Array.<IPlayerMaInfo>} info
     * @memberof Rsp_OpenMa
     * @instance
     */
    Rsp_OpenMa.prototype.info = $util.emptyArray;

    /**
     * Creates a new Rsp_OpenMa instance using the specified properties.
     * @function create
     * @memberof Rsp_OpenMa
     * @static
     * @param {IRsp_OpenMa=} [properties] Properties to set
     * @returns {Rsp_OpenMa} Rsp_OpenMa instance
     */
    Rsp_OpenMa.create = function create(properties) {
        return new Rsp_OpenMa(properties);
    };

    /**
     * Encodes the specified Rsp_OpenMa message. Does not implicitly {@link Rsp_OpenMa.verify|verify} messages.
     * @function encode
     * @memberof Rsp_OpenMa
     * @static
     * @param {IRsp_OpenMa} m Rsp_OpenMa message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_OpenMa.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.info != null && m.info.length) {
            for (var i = 0; i < m.info.length; ++i)
                $root.PlayerMaInfo.encode(m.info[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_OpenMa message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_OpenMa
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_OpenMa} Rsp_OpenMa
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_OpenMa.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_OpenMa();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.info && m.info.length))
                    m.info = [];
                m.info.push($root.PlayerMaInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_OpenMa;
})();

$root.Rsp_ChaHuaZhu = (function() {

    /**
     * Properties of a Rsp_ChaHuaZhu.
     * @exports IRsp_ChaHuaZhu
     * @interface IRsp_ChaHuaZhu
     * @property {number} type Rsp_ChaHuaZhu type
     * @property {string} payId Rsp_ChaHuaZhu payId
     * @property {string} allPay Rsp_ChaHuaZhu allPay
     * @property {Array.<IChaHuaZhuInfo>|null} [winners] Rsp_ChaHuaZhu winners
     */

    /**
     * Constructs a new Rsp_ChaHuaZhu.
     * @exports Rsp_ChaHuaZhu
     * @classdesc Represents a Rsp_ChaHuaZhu.
     * @implements IRsp_ChaHuaZhu
     * @constructor
     * @param {IRsp_ChaHuaZhu=} [p] Properties to set
     */
    function Rsp_ChaHuaZhu(p) {
        this.winners = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_ChaHuaZhu type.
     * @member {number} type
     * @memberof Rsp_ChaHuaZhu
     * @instance
     */
    Rsp_ChaHuaZhu.prototype.type = 0;

    /**
     * Rsp_ChaHuaZhu payId.
     * @member {string} payId
     * @memberof Rsp_ChaHuaZhu
     * @instance
     */
    Rsp_ChaHuaZhu.prototype.payId = "";

    /**
     * Rsp_ChaHuaZhu allPay.
     * @member {string} allPay
     * @memberof Rsp_ChaHuaZhu
     * @instance
     */
    Rsp_ChaHuaZhu.prototype.allPay = "";

    /**
     * Rsp_ChaHuaZhu winners.
     * @member {Array.<IChaHuaZhuInfo>} winners
     * @memberof Rsp_ChaHuaZhu
     * @instance
     */
    Rsp_ChaHuaZhu.prototype.winners = $util.emptyArray;

    /**
     * Creates a new Rsp_ChaHuaZhu instance using the specified properties.
     * @function create
     * @memberof Rsp_ChaHuaZhu
     * @static
     * @param {IRsp_ChaHuaZhu=} [properties] Properties to set
     * @returns {Rsp_ChaHuaZhu} Rsp_ChaHuaZhu instance
     */
    Rsp_ChaHuaZhu.create = function create(properties) {
        return new Rsp_ChaHuaZhu(properties);
    };

    /**
     * Encodes the specified Rsp_ChaHuaZhu message. Does not implicitly {@link Rsp_ChaHuaZhu.verify|verify} messages.
     * @function encode
     * @memberof Rsp_ChaHuaZhu
     * @static
     * @param {IRsp_ChaHuaZhu} m Rsp_ChaHuaZhu message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_ChaHuaZhu.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        w.uint32(18).string(m.payId);
        w.uint32(26).string(m.allPay);
        if (m.winners != null && m.winners.length) {
            for (var i = 0; i < m.winners.length; ++i)
                $root.ChaHuaZhuInfo.encode(m.winners[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_ChaHuaZhu message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_ChaHuaZhu
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_ChaHuaZhu} Rsp_ChaHuaZhu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_ChaHuaZhu.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_ChaHuaZhu();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.payId = r.string();
                break;
            case 3:
                m.allPay = r.string();
                break;
            case 4:
                if (!(m.winners && m.winners.length))
                    m.winners = [];
                m.winners.push($root.ChaHuaZhuInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("payId"))
            throw $util.ProtocolError("missing required 'payId'", { instance: m });
        if (!m.hasOwnProperty("allPay"))
            throw $util.ProtocolError("missing required 'allPay'", { instance: m });
        return m;
    };

    return Rsp_ChaHuaZhu;
})();

$root.Rsp_GangorEatBroadcast = (function() {

    /**
     * Properties of a Rsp_GangorEatBroadcast.
     * @exports IRsp_GangorEatBroadcast
     * @interface IRsp_GangorEatBroadcast
     * @property {number} type Rsp_GangorEatBroadcast type
     * @property {ICardGroupInfo|null} [cardInfo] Rsp_GangorEatBroadcast cardInfo
     * @property {number|null} [gangGold] Rsp_GangorEatBroadcast gangGold
     * @property {Array.<IBeGangInfo>|null} [beGangInfo] Rsp_GangorEatBroadcast beGangInfo
     * @property {Array.<number>|null} [deleteIds] Rsp_GangorEatBroadcast deleteIds
     * @property {Array.<IMenuInfo>|null} [menuInfo] Rsp_GangorEatBroadcast menuInfo
     * @property {string|null} [actionPlayerId] Rsp_GangorEatBroadcast actionPlayerId
     */

    /**
     * Constructs a new Rsp_GangorEatBroadcast.
     * @exports Rsp_GangorEatBroadcast
     * @classdesc Represents a Rsp_GangorEatBroadcast.
     * @implements IRsp_GangorEatBroadcast
     * @constructor
     * @param {IRsp_GangorEatBroadcast=} [p] Properties to set
     */
    function Rsp_GangorEatBroadcast(p) {
        this.beGangInfo = [];
        this.deleteIds = [];
        this.menuInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_GangorEatBroadcast type.
     * @member {number} type
     * @memberof Rsp_GangorEatBroadcast
     * @instance
     */
    Rsp_GangorEatBroadcast.prototype.type = 0;

    /**
     * Rsp_GangorEatBroadcast cardInfo.
     * @member {ICardGroupInfo|null|undefined} cardInfo
     * @memberof Rsp_GangorEatBroadcast
     * @instance
     */
    Rsp_GangorEatBroadcast.prototype.cardInfo = null;

    /**
     * Rsp_GangorEatBroadcast gangGold.
     * @member {number} gangGold
     * @memberof Rsp_GangorEatBroadcast
     * @instance
     */
    Rsp_GangorEatBroadcast.prototype.gangGold = 0;

    /**
     * Rsp_GangorEatBroadcast beGangInfo.
     * @member {Array.<IBeGangInfo>} beGangInfo
     * @memberof Rsp_GangorEatBroadcast
     * @instance
     */
    Rsp_GangorEatBroadcast.prototype.beGangInfo = $util.emptyArray;

    /**
     * Rsp_GangorEatBroadcast deleteIds.
     * @member {Array.<number>} deleteIds
     * @memberof Rsp_GangorEatBroadcast
     * @instance
     */
    Rsp_GangorEatBroadcast.prototype.deleteIds = $util.emptyArray;

    /**
     * Rsp_GangorEatBroadcast menuInfo.
     * @member {Array.<IMenuInfo>} menuInfo
     * @memberof Rsp_GangorEatBroadcast
     * @instance
     */
    Rsp_GangorEatBroadcast.prototype.menuInfo = $util.emptyArray;

    /**
     * Rsp_GangorEatBroadcast actionPlayerId.
     * @member {string} actionPlayerId
     * @memberof Rsp_GangorEatBroadcast
     * @instance
     */
    Rsp_GangorEatBroadcast.prototype.actionPlayerId = "";

    /**
     * Creates a new Rsp_GangorEatBroadcast instance using the specified properties.
     * @function create
     * @memberof Rsp_GangorEatBroadcast
     * @static
     * @param {IRsp_GangorEatBroadcast=} [properties] Properties to set
     * @returns {Rsp_GangorEatBroadcast} Rsp_GangorEatBroadcast instance
     */
    Rsp_GangorEatBroadcast.create = function create(properties) {
        return new Rsp_GangorEatBroadcast(properties);
    };

    /**
     * Encodes the specified Rsp_GangorEatBroadcast message. Does not implicitly {@link Rsp_GangorEatBroadcast.verify|verify} messages.
     * @function encode
     * @memberof Rsp_GangorEatBroadcast
     * @static
     * @param {IRsp_GangorEatBroadcast} m Rsp_GangorEatBroadcast message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_GangorEatBroadcast.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.cardInfo != null && m.hasOwnProperty("cardInfo"))
            $root.CardGroupInfo.encode(m.cardInfo, w.uint32(18).fork()).ldelim();
        if (m.gangGold != null && m.hasOwnProperty("gangGold"))
            w.uint32(24).int32(m.gangGold);
        if (m.beGangInfo != null && m.beGangInfo.length) {
            for (var i = 0; i < m.beGangInfo.length; ++i)
                $root.BeGangInfo.encode(m.beGangInfo[i], w.uint32(34).fork()).ldelim();
        }
        if (m.deleteIds != null && m.deleteIds.length) {
            for (var i = 0; i < m.deleteIds.length; ++i)
                w.uint32(40).int32(m.deleteIds[i]);
        }
        if (m.menuInfo != null && m.menuInfo.length) {
            for (var i = 0; i < m.menuInfo.length; ++i)
                $root.MenuInfo.encode(m.menuInfo[i], w.uint32(50).fork()).ldelim();
        }
        if (m.actionPlayerId != null && m.hasOwnProperty("actionPlayerId"))
            w.uint32(58).string(m.actionPlayerId);
        return w;
    };

    /**
     * Decodes a Rsp_GangorEatBroadcast message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_GangorEatBroadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_GangorEatBroadcast} Rsp_GangorEatBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_GangorEatBroadcast.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_GangorEatBroadcast();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.cardInfo = $root.CardGroupInfo.decode(r, r.uint32());
                break;
            case 3:
                m.gangGold = r.int32();
                break;
            case 4:
                if (!(m.beGangInfo && m.beGangInfo.length))
                    m.beGangInfo = [];
                m.beGangInfo.push($root.BeGangInfo.decode(r, r.uint32()));
                break;
            case 5:
                if (!(m.deleteIds && m.deleteIds.length))
                    m.deleteIds = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.deleteIds.push(r.int32());
                } else
                    m.deleteIds.push(r.int32());
                break;
            case 6:
                if (!(m.menuInfo && m.menuInfo.length))
                    m.menuInfo = [];
                m.menuInfo.push($root.MenuInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.actionPlayerId = r.string();
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

    return Rsp_GangorEatBroadcast;
})();

$root.Rsp_HuBroadcast = (function() {

    /**
     * Properties of a Rsp_HuBroadcast.
     * @exports IRsp_HuBroadcast
     * @interface IRsp_HuBroadcast
     * @property {number} type Rsp_HuBroadcast type
     * @property {string|null} [huUId] Rsp_HuBroadcast huUId
     * @property {number|null} [outCardId] Rsp_HuBroadcast outCardId
     * @property {boolean|null} [isGetCard] Rsp_HuBroadcast isGetCard
     * @property {boolean} isGangShangKaiHua Rsp_HuBroadcast isGangShangKaiHua
     * @property {Array.<IHuInfo>|null} [huInfo] Rsp_HuBroadcast huInfo
     * @property {Array.<IBeHuInfo>|null} [beHuInfo] Rsp_HuBroadcast beHuInfo
     * @property {boolean} isLastHu Rsp_HuBroadcast isLastHu
     */

    /**
     * Constructs a new Rsp_HuBroadcast.
     * @exports Rsp_HuBroadcast
     * @classdesc Represents a Rsp_HuBroadcast.
     * @implements IRsp_HuBroadcast
     * @constructor
     * @param {IRsp_HuBroadcast=} [p] Properties to set
     */
    function Rsp_HuBroadcast(p) {
        this.huInfo = [];
        this.beHuInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_HuBroadcast type.
     * @member {number} type
     * @memberof Rsp_HuBroadcast
     * @instance
     */
    Rsp_HuBroadcast.prototype.type = 0;

    /**
     * Rsp_HuBroadcast huUId.
     * @member {string} huUId
     * @memberof Rsp_HuBroadcast
     * @instance
     */
    Rsp_HuBroadcast.prototype.huUId = "";

    /**
     * Rsp_HuBroadcast outCardId.
     * @member {number} outCardId
     * @memberof Rsp_HuBroadcast
     * @instance
     */
    Rsp_HuBroadcast.prototype.outCardId = 0;

    /**
     * Rsp_HuBroadcast isGetCard.
     * @member {boolean} isGetCard
     * @memberof Rsp_HuBroadcast
     * @instance
     */
    Rsp_HuBroadcast.prototype.isGetCard = false;

    /**
     * Rsp_HuBroadcast isGangShangKaiHua.
     * @member {boolean} isGangShangKaiHua
     * @memberof Rsp_HuBroadcast
     * @instance
     */
    Rsp_HuBroadcast.prototype.isGangShangKaiHua = false;

    /**
     * Rsp_HuBroadcast huInfo.
     * @member {Array.<IHuInfo>} huInfo
     * @memberof Rsp_HuBroadcast
     * @instance
     */
    Rsp_HuBroadcast.prototype.huInfo = $util.emptyArray;

    /**
     * Rsp_HuBroadcast beHuInfo.
     * @member {Array.<IBeHuInfo>} beHuInfo
     * @memberof Rsp_HuBroadcast
     * @instance
     */
    Rsp_HuBroadcast.prototype.beHuInfo = $util.emptyArray;

    /**
     * Rsp_HuBroadcast isLastHu.
     * @member {boolean} isLastHu
     * @memberof Rsp_HuBroadcast
     * @instance
     */
    Rsp_HuBroadcast.prototype.isLastHu = false;

    /**
     * Creates a new Rsp_HuBroadcast instance using the specified properties.
     * @function create
     * @memberof Rsp_HuBroadcast
     * @static
     * @param {IRsp_HuBroadcast=} [properties] Properties to set
     * @returns {Rsp_HuBroadcast} Rsp_HuBroadcast instance
     */
    Rsp_HuBroadcast.create = function create(properties) {
        return new Rsp_HuBroadcast(properties);
    };

    /**
     * Encodes the specified Rsp_HuBroadcast message. Does not implicitly {@link Rsp_HuBroadcast.verify|verify} messages.
     * @function encode
     * @memberof Rsp_HuBroadcast
     * @static
     * @param {IRsp_HuBroadcast} m Rsp_HuBroadcast message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_HuBroadcast.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.huUId != null && m.hasOwnProperty("huUId"))
            w.uint32(18).string(m.huUId);
        if (m.outCardId != null && m.hasOwnProperty("outCardId"))
            w.uint32(24).int32(m.outCardId);
        if (m.isGetCard != null && m.hasOwnProperty("isGetCard"))
            w.uint32(32).bool(m.isGetCard);
        w.uint32(40).bool(m.isGangShangKaiHua);
        if (m.huInfo != null && m.huInfo.length) {
            for (var i = 0; i < m.huInfo.length; ++i)
                $root.HuInfo.encode(m.huInfo[i], w.uint32(50).fork()).ldelim();
        }
        if (m.beHuInfo != null && m.beHuInfo.length) {
            for (var i = 0; i < m.beHuInfo.length; ++i)
                $root.BeHuInfo.encode(m.beHuInfo[i], w.uint32(58).fork()).ldelim();
        }
        w.uint32(64).bool(m.isLastHu);
        return w;
    };

    /**
     * Decodes a Rsp_HuBroadcast message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_HuBroadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_HuBroadcast} Rsp_HuBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_HuBroadcast.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_HuBroadcast();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.huUId = r.string();
                break;
            case 3:
                m.outCardId = r.int32();
                break;
            case 4:
                m.isGetCard = r.bool();
                break;
            case 5:
                m.isGangShangKaiHua = r.bool();
                break;
            case 6:
                if (!(m.huInfo && m.huInfo.length))
                    m.huInfo = [];
                m.huInfo.push($root.HuInfo.decode(r, r.uint32()));
                break;
            case 7:
                if (!(m.beHuInfo && m.beHuInfo.length))
                    m.beHuInfo = [];
                m.beHuInfo.push($root.BeHuInfo.decode(r, r.uint32()));
                break;
            case 8:
                m.isLastHu = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("isGangShangKaiHua"))
            throw $util.ProtocolError("missing required 'isGangShangKaiHua'", { instance: m });
        if (!m.hasOwnProperty("isLastHu"))
            throw $util.ProtocolError("missing required 'isLastHu'", { instance: m });
        return m;
    };

    return Rsp_HuBroadcast;
})();

$root.Req_ChangeCards = (function() {

    /**
     * Properties of a Req_ChangeCards.
     * @exports IReq_ChangeCards
     * @interface IReq_ChangeCards
     * @property {Array.<number>|null} [cards] Req_ChangeCards cards
     */

    /**
     * Constructs a new Req_ChangeCards.
     * @exports Req_ChangeCards
     * @classdesc Represents a Req_ChangeCards.
     * @implements IReq_ChangeCards
     * @constructor
     * @param {IReq_ChangeCards=} [p] Properties to set
     */
    function Req_ChangeCards(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_ChangeCards cards.
     * @member {Array.<number>} cards
     * @memberof Req_ChangeCards
     * @instance
     */
    Req_ChangeCards.prototype.cards = $util.emptyArray;

    /**
     * Creates a new Req_ChangeCards instance using the specified properties.
     * @function create
     * @memberof Req_ChangeCards
     * @static
     * @param {IReq_ChangeCards=} [properties] Properties to set
     * @returns {Req_ChangeCards} Req_ChangeCards instance
     */
    Req_ChangeCards.create = function create(properties) {
        return new Req_ChangeCards(properties);
    };

    /**
     * Encodes the specified Req_ChangeCards message. Does not implicitly {@link Req_ChangeCards.verify|verify} messages.
     * @function encode
     * @memberof Req_ChangeCards
     * @static
     * @param {IReq_ChangeCards} m Req_ChangeCards message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_ChangeCards.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                w.uint32(8).int32(m.cards[i]);
        }
        return w;
    };

    /**
     * Decodes a Req_ChangeCards message from the specified reader or buffer.
     * @function decode
     * @memberof Req_ChangeCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_ChangeCards} Req_ChangeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_ChangeCards.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_ChangeCards();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.cards.push(r.int32());
                } else
                    m.cards.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Req_ChangeCards;
})();

$root.Rsp_ChangeCards = (function() {

    /**
     * Properties of a Rsp_ChangeCards.
     * @exports IRsp_ChangeCards
     * @interface IRsp_ChangeCards
     * @property {boolean} result Rsp_ChangeCards result
     * @property {string|null} [tips] Rsp_ChangeCards tips
     */

    /**
     * Constructs a new Rsp_ChangeCards.
     * @exports Rsp_ChangeCards
     * @classdesc Represents a Rsp_ChangeCards.
     * @implements IRsp_ChangeCards
     * @constructor
     * @param {IRsp_ChangeCards=} [p] Properties to set
     */
    function Rsp_ChangeCards(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_ChangeCards result.
     * @member {boolean} result
     * @memberof Rsp_ChangeCards
     * @instance
     */
    Rsp_ChangeCards.prototype.result = false;

    /**
     * Rsp_ChangeCards tips.
     * @member {string} tips
     * @memberof Rsp_ChangeCards
     * @instance
     */
    Rsp_ChangeCards.prototype.tips = "";

    /**
     * Creates a new Rsp_ChangeCards instance using the specified properties.
     * @function create
     * @memberof Rsp_ChangeCards
     * @static
     * @param {IRsp_ChangeCards=} [properties] Properties to set
     * @returns {Rsp_ChangeCards} Rsp_ChangeCards instance
     */
    Rsp_ChangeCards.create = function create(properties) {
        return new Rsp_ChangeCards(properties);
    };

    /**
     * Encodes the specified Rsp_ChangeCards message. Does not implicitly {@link Rsp_ChangeCards.verify|verify} messages.
     * @function encode
     * @memberof Rsp_ChangeCards
     * @static
     * @param {IRsp_ChangeCards} m Rsp_ChangeCards message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_ChangeCards.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.result);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a Rsp_ChangeCards message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_ChangeCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_ChangeCards} Rsp_ChangeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_ChangeCards.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_ChangeCards();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return Rsp_ChangeCards;
})();

$root.Req_SelectMenu = (function() {

    /**
     * Properties of a Req_SelectMenu.
     * @exports IReq_SelectMenu
     * @interface IReq_SelectMenu
     * @property {number} type Req_SelectMenu type
     * @property {number|null} [index] Req_SelectMenu index
     */

    /**
     * Constructs a new Req_SelectMenu.
     * @exports Req_SelectMenu
     * @classdesc Represents a Req_SelectMenu.
     * @implements IReq_SelectMenu
     * @constructor
     * @param {IReq_SelectMenu=} [p] Properties to set
     */
    function Req_SelectMenu(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_SelectMenu type.
     * @member {number} type
     * @memberof Req_SelectMenu
     * @instance
     */
    Req_SelectMenu.prototype.type = 0;

    /**
     * Req_SelectMenu index.
     * @member {number} index
     * @memberof Req_SelectMenu
     * @instance
     */
    Req_SelectMenu.prototype.index = 0;

    /**
     * Creates a new Req_SelectMenu instance using the specified properties.
     * @function create
     * @memberof Req_SelectMenu
     * @static
     * @param {IReq_SelectMenu=} [properties] Properties to set
     * @returns {Req_SelectMenu} Req_SelectMenu instance
     */
    Req_SelectMenu.create = function create(properties) {
        return new Req_SelectMenu(properties);
    };

    /**
     * Encodes the specified Req_SelectMenu message. Does not implicitly {@link Req_SelectMenu.verify|verify} messages.
     * @function encode
     * @memberof Req_SelectMenu
     * @static
     * @param {IReq_SelectMenu} m Req_SelectMenu message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_SelectMenu.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.index != null && m.hasOwnProperty("index"))
            w.uint32(16).int32(m.index);
        return w;
    };

    /**
     * Decodes a Req_SelectMenu message from the specified reader or buffer.
     * @function decode
     * @memberof Req_SelectMenu
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_SelectMenu} Req_SelectMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_SelectMenu.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_SelectMenu();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.index = r.int32();
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

    return Req_SelectMenu;
})();

$root.Rsp_SelectMenu = (function() {

    /**
     * Properties of a Rsp_SelectMenu.
     * @exports IRsp_SelectMenu
     * @interface IRsp_SelectMenu
     * @property {number} type Rsp_SelectMenu type
     * @property {boolean} result Rsp_SelectMenu result
     * @property {string|null} [tips] Rsp_SelectMenu tips
     */

    /**
     * Constructs a new Rsp_SelectMenu.
     * @exports Rsp_SelectMenu
     * @classdesc Represents a Rsp_SelectMenu.
     * @implements IRsp_SelectMenu
     * @constructor
     * @param {IRsp_SelectMenu=} [p] Properties to set
     */
    function Rsp_SelectMenu(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_SelectMenu type.
     * @member {number} type
     * @memberof Rsp_SelectMenu
     * @instance
     */
    Rsp_SelectMenu.prototype.type = 0;

    /**
     * Rsp_SelectMenu result.
     * @member {boolean} result
     * @memberof Rsp_SelectMenu
     * @instance
     */
    Rsp_SelectMenu.prototype.result = false;

    /**
     * Rsp_SelectMenu tips.
     * @member {string} tips
     * @memberof Rsp_SelectMenu
     * @instance
     */
    Rsp_SelectMenu.prototype.tips = "";

    /**
     * Creates a new Rsp_SelectMenu instance using the specified properties.
     * @function create
     * @memberof Rsp_SelectMenu
     * @static
     * @param {IRsp_SelectMenu=} [properties] Properties to set
     * @returns {Rsp_SelectMenu} Rsp_SelectMenu instance
     */
    Rsp_SelectMenu.create = function create(properties) {
        return new Rsp_SelectMenu(properties);
    };

    /**
     * Encodes the specified Rsp_SelectMenu message. Does not implicitly {@link Rsp_SelectMenu.verify|verify} messages.
     * @function encode
     * @memberof Rsp_SelectMenu
     * @static
     * @param {IRsp_SelectMenu} m Rsp_SelectMenu message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_SelectMenu.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        w.uint32(16).bool(m.result);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(26).string(m.tips);
        return w;
    };

    /**
     * Decodes a Rsp_SelectMenu message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_SelectMenu
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_SelectMenu} Rsp_SelectMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_SelectMenu.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_SelectMenu();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.result = r.bool();
                break;
            case 3:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return Rsp_SelectMenu;
})();

$root.Req_AutoPlay = (function() {

    /**
     * Properties of a Req_AutoPlay.
     * @exports IReq_AutoPlay
     * @interface IReq_AutoPlay
     * @property {boolean} isAuto Req_AutoPlay isAuto
     */

    /**
     * Constructs a new Req_AutoPlay.
     * @exports Req_AutoPlay
     * @classdesc Represents a Req_AutoPlay.
     * @implements IReq_AutoPlay
     * @constructor
     * @param {IReq_AutoPlay=} [p] Properties to set
     */
    function Req_AutoPlay(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_AutoPlay isAuto.
     * @member {boolean} isAuto
     * @memberof Req_AutoPlay
     * @instance
     */
    Req_AutoPlay.prototype.isAuto = false;

    /**
     * Creates a new Req_AutoPlay instance using the specified properties.
     * @function create
     * @memberof Req_AutoPlay
     * @static
     * @param {IReq_AutoPlay=} [properties] Properties to set
     * @returns {Req_AutoPlay} Req_AutoPlay instance
     */
    Req_AutoPlay.create = function create(properties) {
        return new Req_AutoPlay(properties);
    };

    /**
     * Encodes the specified Req_AutoPlay message. Does not implicitly {@link Req_AutoPlay.verify|verify} messages.
     * @function encode
     * @memberof Req_AutoPlay
     * @static
     * @param {IReq_AutoPlay} m Req_AutoPlay message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_AutoPlay.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isAuto);
        return w;
    };

    /**
     * Decodes a Req_AutoPlay message from the specified reader or buffer.
     * @function decode
     * @memberof Req_AutoPlay
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_AutoPlay} Req_AutoPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_AutoPlay.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_AutoPlay();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isAuto = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isAuto"))
            throw $util.ProtocolError("missing required 'isAuto'", { instance: m });
        return m;
    };

    return Req_AutoPlay;
})();

$root.Rsp_AutoPlay = (function() {

    /**
     * Properties of a Rsp_AutoPlay.
     * @exports IRsp_AutoPlay
     * @interface IRsp_AutoPlay
     * @property {boolean} isAuto Rsp_AutoPlay isAuto
     * @property {string} playerId Rsp_AutoPlay playerId
     */

    /**
     * Constructs a new Rsp_AutoPlay.
     * @exports Rsp_AutoPlay
     * @classdesc Represents a Rsp_AutoPlay.
     * @implements IRsp_AutoPlay
     * @constructor
     * @param {IRsp_AutoPlay=} [p] Properties to set
     */
    function Rsp_AutoPlay(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_AutoPlay isAuto.
     * @member {boolean} isAuto
     * @memberof Rsp_AutoPlay
     * @instance
     */
    Rsp_AutoPlay.prototype.isAuto = false;

    /**
     * Rsp_AutoPlay playerId.
     * @member {string} playerId
     * @memberof Rsp_AutoPlay
     * @instance
     */
    Rsp_AutoPlay.prototype.playerId = "";

    /**
     * Creates a new Rsp_AutoPlay instance using the specified properties.
     * @function create
     * @memberof Rsp_AutoPlay
     * @static
     * @param {IRsp_AutoPlay=} [properties] Properties to set
     * @returns {Rsp_AutoPlay} Rsp_AutoPlay instance
     */
    Rsp_AutoPlay.create = function create(properties) {
        return new Rsp_AutoPlay(properties);
    };

    /**
     * Encodes the specified Rsp_AutoPlay message. Does not implicitly {@link Rsp_AutoPlay.verify|verify} messages.
     * @function encode
     * @memberof Rsp_AutoPlay
     * @static
     * @param {IRsp_AutoPlay} m Rsp_AutoPlay message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_AutoPlay.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isAuto);
        w.uint32(18).string(m.playerId);
        return w;
    };

    /**
     * Decodes a Rsp_AutoPlay message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_AutoPlay
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_AutoPlay} Rsp_AutoPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_AutoPlay.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_AutoPlay();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isAuto = r.bool();
                break;
            case 2:
                m.playerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isAuto"))
            throw $util.ProtocolError("missing required 'isAuto'", { instance: m });
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        return m;
    };

    return Rsp_AutoPlay;
})();

$root.Req_SureGameOver = (function() {

    /**
     * Properties of a Req_SureGameOver.
     * @exports IReq_SureGameOver
     * @interface IReq_SureGameOver
     * @property {boolean} iscontinue Req_SureGameOver iscontinue
     */

    /**
     * Constructs a new Req_SureGameOver.
     * @exports Req_SureGameOver
     * @classdesc Represents a Req_SureGameOver.
     * @implements IReq_SureGameOver
     * @constructor
     * @param {IReq_SureGameOver=} [p] Properties to set
     */
    function Req_SureGameOver(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Req_SureGameOver iscontinue.
     * @member {boolean} iscontinue
     * @memberof Req_SureGameOver
     * @instance
     */
    Req_SureGameOver.prototype.iscontinue = false;

    /**
     * Creates a new Req_SureGameOver instance using the specified properties.
     * @function create
     * @memberof Req_SureGameOver
     * @static
     * @param {IReq_SureGameOver=} [properties] Properties to set
     * @returns {Req_SureGameOver} Req_SureGameOver instance
     */
    Req_SureGameOver.create = function create(properties) {
        return new Req_SureGameOver(properties);
    };

    /**
     * Encodes the specified Req_SureGameOver message. Does not implicitly {@link Req_SureGameOver.verify|verify} messages.
     * @function encode
     * @memberof Req_SureGameOver
     * @static
     * @param {IReq_SureGameOver} m Req_SureGameOver message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Req_SureGameOver.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.iscontinue);
        return w;
    };

    /**
     * Decodes a Req_SureGameOver message from the specified reader or buffer.
     * @function decode
     * @memberof Req_SureGameOver
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Req_SureGameOver} Req_SureGameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Req_SureGameOver.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Req_SureGameOver();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.iscontinue = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("iscontinue"))
            throw $util.ProtocolError("missing required 'iscontinue'", { instance: m });
        return m;
    };

    return Req_SureGameOver;
})();

$root.Rsq_SureGameOver = (function() {

    /**
     * Properties of a Rsq_SureGameOver.
     * @exports IRsq_SureGameOver
     * @interface IRsq_SureGameOver
     * @property {string} uId Rsq_SureGameOver uId
     * @property {boolean} result Rsq_SureGameOver result
     * @property {string} tips Rsq_SureGameOver tips
     */

    /**
     * Constructs a new Rsq_SureGameOver.
     * @exports Rsq_SureGameOver
     * @classdesc Represents a Rsq_SureGameOver.
     * @implements IRsq_SureGameOver
     * @constructor
     * @param {IRsq_SureGameOver=} [p] Properties to set
     */
    function Rsq_SureGameOver(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsq_SureGameOver uId.
     * @member {string} uId
     * @memberof Rsq_SureGameOver
     * @instance
     */
    Rsq_SureGameOver.prototype.uId = "";

    /**
     * Rsq_SureGameOver result.
     * @member {boolean} result
     * @memberof Rsq_SureGameOver
     * @instance
     */
    Rsq_SureGameOver.prototype.result = false;

    /**
     * Rsq_SureGameOver tips.
     * @member {string} tips
     * @memberof Rsq_SureGameOver
     * @instance
     */
    Rsq_SureGameOver.prototype.tips = "";

    /**
     * Creates a new Rsq_SureGameOver instance using the specified properties.
     * @function create
     * @memberof Rsq_SureGameOver
     * @static
     * @param {IRsq_SureGameOver=} [properties] Properties to set
     * @returns {Rsq_SureGameOver} Rsq_SureGameOver instance
     */
    Rsq_SureGameOver.create = function create(properties) {
        return new Rsq_SureGameOver(properties);
    };

    /**
     * Encodes the specified Rsq_SureGameOver message. Does not implicitly {@link Rsq_SureGameOver.verify|verify} messages.
     * @function encode
     * @memberof Rsq_SureGameOver
     * @static
     * @param {IRsq_SureGameOver} m Rsq_SureGameOver message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsq_SureGameOver.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).bool(m.result);
        w.uint32(26).string(m.tips);
        return w;
    };

    /**
     * Decodes a Rsq_SureGameOver message from the specified reader or buffer.
     * @function decode
     * @memberof Rsq_SureGameOver
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsq_SureGameOver} Rsq_SureGameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsq_SureGameOver.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsq_SureGameOver();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.result = r.bool();
                break;
            case 3:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        return m;
    };

    return Rsq_SureGameOver;
})();

$root.Rsq_RoomSyn = (function() {

    /**
     * Properties of a Rsq_RoomSyn.
     * @exports IRsq_RoomSyn
     * @interface IRsq_RoomSyn
     * @property {Array.<IPlayerStatus>|null} [playerStatus] Rsq_RoomSyn playerStatus
     */

    /**
     * Constructs a new Rsq_RoomSyn.
     * @exports Rsq_RoomSyn
     * @classdesc Represents a Rsq_RoomSyn.
     * @implements IRsq_RoomSyn
     * @constructor
     * @param {IRsq_RoomSyn=} [p] Properties to set
     */
    function Rsq_RoomSyn(p) {
        this.playerStatus = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsq_RoomSyn playerStatus.
     * @member {Array.<IPlayerStatus>} playerStatus
     * @memberof Rsq_RoomSyn
     * @instance
     */
    Rsq_RoomSyn.prototype.playerStatus = $util.emptyArray;

    /**
     * Creates a new Rsq_RoomSyn instance using the specified properties.
     * @function create
     * @memberof Rsq_RoomSyn
     * @static
     * @param {IRsq_RoomSyn=} [properties] Properties to set
     * @returns {Rsq_RoomSyn} Rsq_RoomSyn instance
     */
    Rsq_RoomSyn.create = function create(properties) {
        return new Rsq_RoomSyn(properties);
    };

    /**
     * Encodes the specified Rsq_RoomSyn message. Does not implicitly {@link Rsq_RoomSyn.verify|verify} messages.
     * @function encode
     * @memberof Rsq_RoomSyn
     * @static
     * @param {IRsq_RoomSyn} m Rsq_RoomSyn message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsq_RoomSyn.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerStatus != null && m.playerStatus.length) {
            for (var i = 0; i < m.playerStatus.length; ++i)
                $root.PlayerStatus.encode(m.playerStatus[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsq_RoomSyn message from the specified reader or buffer.
     * @function decode
     * @memberof Rsq_RoomSyn
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsq_RoomSyn} Rsq_RoomSyn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsq_RoomSyn.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsq_RoomSyn();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerStatus && m.playerStatus.length))
                    m.playerStatus = [];
                m.playerStatus.push($root.PlayerStatus.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsq_RoomSyn;
})();

$root.Rsp_SynOtherCards = (function() {

    /**
     * Properties of a Rsp_SynOtherCards.
     * @exports IRsp_SynOtherCards
     * @interface IRsp_SynOtherCards
     * @property {Array.<IPlayerCardInfo>|null} [playerCards] Rsp_SynOtherCards playerCards
     */

    /**
     * Constructs a new Rsp_SynOtherCards.
     * @exports Rsp_SynOtherCards
     * @classdesc Represents a Rsp_SynOtherCards.
     * @implements IRsp_SynOtherCards
     * @constructor
     * @param {IRsp_SynOtherCards=} [p] Properties to set
     */
    function Rsp_SynOtherCards(p) {
        this.playerCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_SynOtherCards playerCards.
     * @member {Array.<IPlayerCardInfo>} playerCards
     * @memberof Rsp_SynOtherCards
     * @instance
     */
    Rsp_SynOtherCards.prototype.playerCards = $util.emptyArray;

    /**
     * Creates a new Rsp_SynOtherCards instance using the specified properties.
     * @function create
     * @memberof Rsp_SynOtherCards
     * @static
     * @param {IRsp_SynOtherCards=} [properties] Properties to set
     * @returns {Rsp_SynOtherCards} Rsp_SynOtherCards instance
     */
    Rsp_SynOtherCards.create = function create(properties) {
        return new Rsp_SynOtherCards(properties);
    };

    /**
     * Encodes the specified Rsp_SynOtherCards message. Does not implicitly {@link Rsp_SynOtherCards.verify|verify} messages.
     * @function encode
     * @memberof Rsp_SynOtherCards
     * @static
     * @param {IRsp_SynOtherCards} m Rsp_SynOtherCards message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_SynOtherCards.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerCards != null && m.playerCards.length) {
            for (var i = 0; i < m.playerCards.length; ++i)
                $root.PlayerCardInfo.encode(m.playerCards[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_SynOtherCards message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_SynOtherCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_SynOtherCards} Rsp_SynOtherCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_SynOtherCards.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_SynOtherCards();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerCards && m.playerCards.length))
                    m.playerCards = [];
                m.playerCards.push($root.PlayerCardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_SynOtherCards;
})();

$root.Rsp_SynChangeCards = (function() {

    /**
     * Properties of a Rsp_SynChangeCards.
     * @exports IRsp_SynChangeCards
     * @interface IRsp_SynChangeCards
     * @property {number} type Rsp_SynChangeCards type
     * @property {Array.<ISynStandCardsData>|null} [cardsData] Rsp_SynChangeCards cardsData
     */

    /**
     * Constructs a new Rsp_SynChangeCards.
     * @exports Rsp_SynChangeCards
     * @classdesc Represents a Rsp_SynChangeCards.
     * @implements IRsp_SynChangeCards
     * @constructor
     * @param {IRsp_SynChangeCards=} [p] Properties to set
     */
    function Rsp_SynChangeCards(p) {
        this.cardsData = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_SynChangeCards type.
     * @member {number} type
     * @memberof Rsp_SynChangeCards
     * @instance
     */
    Rsp_SynChangeCards.prototype.type = 0;

    /**
     * Rsp_SynChangeCards cardsData.
     * @member {Array.<ISynStandCardsData>} cardsData
     * @memberof Rsp_SynChangeCards
     * @instance
     */
    Rsp_SynChangeCards.prototype.cardsData = $util.emptyArray;

    /**
     * Creates a new Rsp_SynChangeCards instance using the specified properties.
     * @function create
     * @memberof Rsp_SynChangeCards
     * @static
     * @param {IRsp_SynChangeCards=} [properties] Properties to set
     * @returns {Rsp_SynChangeCards} Rsp_SynChangeCards instance
     */
    Rsp_SynChangeCards.create = function create(properties) {
        return new Rsp_SynChangeCards(properties);
    };

    /**
     * Encodes the specified Rsp_SynChangeCards message. Does not implicitly {@link Rsp_SynChangeCards.verify|verify} messages.
     * @function encode
     * @memberof Rsp_SynChangeCards
     * @static
     * @param {IRsp_SynChangeCards} m Rsp_SynChangeCards message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_SynChangeCards.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.cardsData != null && m.cardsData.length) {
            for (var i = 0; i < m.cardsData.length; ++i)
                $root.SynStandCardsData.encode(m.cardsData[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Rsp_SynChangeCards message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_SynChangeCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_SynChangeCards} Rsp_SynChangeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_SynChangeCards.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_SynChangeCards();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                if (!(m.cardsData && m.cardsData.length))
                    m.cardsData = [];
                m.cardsData.push($root.SynStandCardsData.decode(r, r.uint32()));
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

    return Rsp_SynChangeCards;
})();

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {number} pos PlayerInfo pos
     * @property {string} id PlayerInfo id
     * @property {number} sex PlayerInfo sex
     * @property {string} name PlayerInfo name
     * @property {string} headUrl PlayerInfo headUrl
     * @property {number} vip PlayerInfo vip
     * @property {boolean} isJudge PlayerInfo isJudge
     * @property {number} gold PlayerInfo gold
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
     * PlayerInfo pos.
     * @member {number} pos
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.pos = 0;

    /**
     * PlayerInfo id.
     * @member {string} id
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.id = "";

    /**
     * PlayerInfo sex.
     * @member {number} sex
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.sex = 0;

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
     * PlayerInfo vip.
     * @member {number} vip
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.vip = 0;

    /**
     * PlayerInfo isJudge.
     * @member {boolean} isJudge
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isJudge = false;

    /**
     * PlayerInfo gold.
     * @member {number} gold
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.gold = 0;

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
        w.uint32(8).int32(m.pos);
        w.uint32(18).string(m.id);
        w.uint32(24).int32(m.sex);
        w.uint32(34).string(m.name);
        w.uint32(42).string(m.headUrl);
        w.uint32(48).int32(m.vip);
        w.uint32(56).bool(m.isJudge);
        w.uint32(64).int32(m.gold);
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
                m.pos = r.int32();
                break;
            case 2:
                m.id = r.string();
                break;
            case 3:
                m.sex = r.int32();
                break;
            case 4:
                m.name = r.string();
                break;
            case 5:
                m.headUrl = r.string();
                break;
            case 6:
                m.vip = r.int32();
                break;
            case 7:
                m.isJudge = r.bool();
                break;
            case 8:
                m.gold = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("sex"))
            throw $util.ProtocolError("missing required 'sex'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("headUrl"))
            throw $util.ProtocolError("missing required 'headUrl'", { instance: m });
        if (!m.hasOwnProperty("vip"))
            throw $util.ProtocolError("missing required 'vip'", { instance: m });
        if (!m.hasOwnProperty("isJudge"))
            throw $util.ProtocolError("missing required 'isJudge'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return PlayerInfo;
})();

$root.PlayerStatus = (function() {

    /**
     * Properties of a PlayerStatus.
     * @exports IPlayerStatus
     * @interface IPlayerStatus
     * @property {string} playerId PlayerStatus playerId
     * @property {number} status PlayerStatus status
     */

    /**
     * Constructs a new PlayerStatus.
     * @exports PlayerStatus
     * @classdesc Represents a PlayerStatus.
     * @implements IPlayerStatus
     * @constructor
     * @param {IPlayerStatus=} [p] Properties to set
     */
    function PlayerStatus(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerStatus playerId.
     * @member {string} playerId
     * @memberof PlayerStatus
     * @instance
     */
    PlayerStatus.prototype.playerId = "";

    /**
     * PlayerStatus status.
     * @member {number} status
     * @memberof PlayerStatus
     * @instance
     */
    PlayerStatus.prototype.status = 0;

    /**
     * Creates a new PlayerStatus instance using the specified properties.
     * @function create
     * @memberof PlayerStatus
     * @static
     * @param {IPlayerStatus=} [properties] Properties to set
     * @returns {PlayerStatus} PlayerStatus instance
     */
    PlayerStatus.create = function create(properties) {
        return new PlayerStatus(properties);
    };

    /**
     * Encodes the specified PlayerStatus message. Does not implicitly {@link PlayerStatus.verify|verify} messages.
     * @function encode
     * @memberof PlayerStatus
     * @static
     * @param {IPlayerStatus} m PlayerStatus message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerStatus.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        w.uint32(16).int32(m.status);
        return w;
    };

    /**
     * Decodes a PlayerStatus message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerStatus} PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerStatus.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerStatus();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                m.status = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    return PlayerStatus;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {string} name RoomInfo name
     * @property {number} score RoomInfo score
     * @property {number} playerCnt RoomInfo playerCnt
     * @property {Array.<IPlayerInfo>|null} [playerInfo] RoomInfo playerInfo
     */

    /**
     * Constructs a new RoomInfo.
     * @exports RoomInfo
     * @classdesc Represents a RoomInfo.
     * @implements IRoomInfo
     * @constructor
     * @param {IRoomInfo=} [p] Properties to set
     */
    function RoomInfo(p) {
        this.playerInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomInfo name.
     * @member {string} name
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.name = "";

    /**
     * RoomInfo score.
     * @member {number} score
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.score = 0;

    /**
     * RoomInfo playerCnt.
     * @member {number} playerCnt
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.playerCnt = 0;

    /**
     * RoomInfo playerInfo.
     * @member {Array.<IPlayerInfo>} playerInfo
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.playerInfo = $util.emptyArray;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @function create
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo=} [properties] Properties to set
     * @returns {RoomInfo} RoomInfo instance
     */
    RoomInfo.create = function create(properties) {
        return new RoomInfo(properties);
    };

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} m RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        w.uint32(16).int32(m.score);
        w.uint32(24).int32(m.playerCnt);
        if (m.playerInfo != null && m.playerInfo.length) {
            for (var i = 0; i < m.playerInfo.length; ++i)
                $root.PlayerInfo.encode(m.playerInfo[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.name = r.string();
                break;
            case 2:
                m.score = r.int32();
                break;
            case 3:
                m.playerCnt = r.int32();
                break;
            case 4:
                if (!(m.playerInfo && m.playerInfo.length))
                    m.playerInfo = [];
                m.playerInfo.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        if (!m.hasOwnProperty("playerCnt"))
            throw $util.ProtocolError("missing required 'playerCnt'", { instance: m });
        return m;
    };

    return RoomInfo;
})();

$root.TingGroupInfo = (function() {

    /**
     * Properties of a TingGroupInfo.
     * @exports ITingGroupInfo
     * @interface ITingGroupInfo
     * @property {number} num TingGroupInfo num
     * @property {number|null} [id] TingGroupInfo id
     * @property {number|null} [fan] TingGroupInfo fan
     */

    /**
     * Constructs a new TingGroupInfo.
     * @exports TingGroupInfo
     * @classdesc Represents a TingGroupInfo.
     * @implements ITingGroupInfo
     * @constructor
     * @param {ITingGroupInfo=} [p] Properties to set
     */
    function TingGroupInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TingGroupInfo num.
     * @member {number} num
     * @memberof TingGroupInfo
     * @instance
     */
    TingGroupInfo.prototype.num = 0;

    /**
     * TingGroupInfo id.
     * @member {number} id
     * @memberof TingGroupInfo
     * @instance
     */
    TingGroupInfo.prototype.id = 0;

    /**
     * TingGroupInfo fan.
     * @member {number} fan
     * @memberof TingGroupInfo
     * @instance
     */
    TingGroupInfo.prototype.fan = 0;

    /**
     * Creates a new TingGroupInfo instance using the specified properties.
     * @function create
     * @memberof TingGroupInfo
     * @static
     * @param {ITingGroupInfo=} [properties] Properties to set
     * @returns {TingGroupInfo} TingGroupInfo instance
     */
    TingGroupInfo.create = function create(properties) {
        return new TingGroupInfo(properties);
    };

    /**
     * Encodes the specified TingGroupInfo message. Does not implicitly {@link TingGroupInfo.verify|verify} messages.
     * @function encode
     * @memberof TingGroupInfo
     * @static
     * @param {ITingGroupInfo} m TingGroupInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TingGroupInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.num);
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(16).int32(m.id);
        if (m.fan != null && m.hasOwnProperty("fan"))
            w.uint32(24).int32(m.fan);
        return w;
    };

    /**
     * Decodes a TingGroupInfo message from the specified reader or buffer.
     * @function decode
     * @memberof TingGroupInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TingGroupInfo} TingGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TingGroupInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TingGroupInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.num = r.int32();
                break;
            case 2:
                m.id = r.int32();
                break;
            case 3:
                m.fan = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    return TingGroupInfo;
})();

$root.SuggestTingData = (function() {

    /**
     * Properties of a SuggestTingData.
     * @exports ISuggestTingData
     * @interface ISuggestTingData
     * @property {number} canPutCards SuggestTingData canPutCards
     * @property {Array.<ITingGroupInfo>|null} [tingCard] SuggestTingData tingCard
     */

    /**
     * Constructs a new SuggestTingData.
     * @exports SuggestTingData
     * @classdesc Represents a SuggestTingData.
     * @implements ISuggestTingData
     * @constructor
     * @param {ISuggestTingData=} [p] Properties to set
     */
    function SuggestTingData(p) {
        this.tingCard = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SuggestTingData canPutCards.
     * @member {number} canPutCards
     * @memberof SuggestTingData
     * @instance
     */
    SuggestTingData.prototype.canPutCards = 0;

    /**
     * SuggestTingData tingCard.
     * @member {Array.<ITingGroupInfo>} tingCard
     * @memberof SuggestTingData
     * @instance
     */
    SuggestTingData.prototype.tingCard = $util.emptyArray;

    /**
     * Creates a new SuggestTingData instance using the specified properties.
     * @function create
     * @memberof SuggestTingData
     * @static
     * @param {ISuggestTingData=} [properties] Properties to set
     * @returns {SuggestTingData} SuggestTingData instance
     */
    SuggestTingData.create = function create(properties) {
        return new SuggestTingData(properties);
    };

    /**
     * Encodes the specified SuggestTingData message. Does not implicitly {@link SuggestTingData.verify|verify} messages.
     * @function encode
     * @memberof SuggestTingData
     * @static
     * @param {ISuggestTingData} m SuggestTingData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SuggestTingData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.canPutCards);
        if (m.tingCard != null && m.tingCard.length) {
            for (var i = 0; i < m.tingCard.length; ++i)
                $root.TingGroupInfo.encode(m.tingCard[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SuggestTingData message from the specified reader or buffer.
     * @function decode
     * @memberof SuggestTingData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SuggestTingData} SuggestTingData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SuggestTingData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SuggestTingData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.canPutCards = r.int32();
                break;
            case 2:
                if (!(m.tingCard && m.tingCard.length))
                    m.tingCard = [];
                m.tingCard.push($root.TingGroupInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("canPutCards"))
            throw $util.ProtocolError("missing required 'canPutCards'", { instance: m });
        return m;
    };

    return SuggestTingData;
})();

$root.CardGroupInfo = (function() {

    /**
     * Properties of a CardGroupInfo.
     * @exports ICardGroupInfo
     * @interface ICardGroupInfo
     * @property {number|null} [id] CardGroupInfo id
     * @property {string|null} [uId] CardGroupInfo uId
     * @property {number|null} [type] CardGroupInfo type
     * @property {Array.<number>|null} [cards] CardGroupInfo cards
     * @property {string|null} [fromId] CardGroupInfo fromId
     * @property {number|null} [fromCardId] CardGroupInfo fromCardId
     */

    /**
     * Constructs a new CardGroupInfo.
     * @exports CardGroupInfo
     * @classdesc Represents a CardGroupInfo.
     * @implements ICardGroupInfo
     * @constructor
     * @param {ICardGroupInfo=} [p] Properties to set
     */
    function CardGroupInfo(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CardGroupInfo id.
     * @member {number} id
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.id = 0;

    /**
     * CardGroupInfo uId.
     * @member {string} uId
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.uId = "";

    /**
     * CardGroupInfo type.
     * @member {number} type
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.type = 0;

    /**
     * CardGroupInfo cards.
     * @member {Array.<number>} cards
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.cards = $util.emptyArray;

    /**
     * CardGroupInfo fromId.
     * @member {string} fromId
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.fromId = "";

    /**
     * CardGroupInfo fromCardId.
     * @member {number} fromCardId
     * @memberof CardGroupInfo
     * @instance
     */
    CardGroupInfo.prototype.fromCardId = 0;

    /**
     * Creates a new CardGroupInfo instance using the specified properties.
     * @function create
     * @memberof CardGroupInfo
     * @static
     * @param {ICardGroupInfo=} [properties] Properties to set
     * @returns {CardGroupInfo} CardGroupInfo instance
     */
    CardGroupInfo.create = function create(properties) {
        return new CardGroupInfo(properties);
    };

    /**
     * Encodes the specified CardGroupInfo message. Does not implicitly {@link CardGroupInfo.verify|verify} messages.
     * @function encode
     * @memberof CardGroupInfo
     * @static
     * @param {ICardGroupInfo} m CardGroupInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardGroupInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).int32(m.id);
        if (m.uId != null && m.hasOwnProperty("uId"))
            w.uint32(18).string(m.uId);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(24).int32(m.type);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                w.uint32(32).int32(m.cards[i]);
        }
        if (m.fromId != null && m.hasOwnProperty("fromId"))
            w.uint32(42).string(m.fromId);
        if (m.fromCardId != null && m.hasOwnProperty("fromCardId"))
            w.uint32(48).int32(m.fromCardId);
        return w;
    };

    /**
     * Decodes a CardGroupInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CardGroupInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CardGroupInfo} CardGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardGroupInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CardGroupInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
                break;
            case 2:
                m.uId = r.string();
                break;
            case 3:
                m.type = r.int32();
                break;
            case 4:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.cards.push(r.int32());
                } else
                    m.cards.push(r.int32());
                break;
            case 5:
                m.fromId = r.string();
                break;
            case 6:
                m.fromCardId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CardGroupInfo;
})();

$root.RoomPlayerCardInfo = (function() {

    /**
     * Properties of a RoomPlayerCardInfo.
     * @exports IRoomPlayerCardInfo
     * @interface IRoomPlayerCardInfo
     * @property {string} uId RoomPlayerCardInfo uId
     * @property {Array.<ITingGroupInfo>|null} [tingInfo] RoomPlayerCardInfo tingInfo
     * @property {Array.<number>|null} [mingIds] RoomPlayerCardInfo mingIds
     * @property {number|null} [handCnt] RoomPlayerCardInfo handCnt
     * @property {Array.<number>|null} [husIds] RoomPlayerCardInfo husIds
     * @property {Array.<number>|null} [puts] RoomPlayerCardInfo puts
     * @property {boolean} isMing RoomPlayerCardInfo isMing
     * @property {Array.<ICardGroupInfo>|null} [eats] RoomPlayerCardInfo eats
     * @property {number} cardId RoomPlayerCardInfo cardId
     */

    /**
     * Constructs a new RoomPlayerCardInfo.
     * @exports RoomPlayerCardInfo
     * @classdesc Represents a RoomPlayerCardInfo.
     * @implements IRoomPlayerCardInfo
     * @constructor
     * @param {IRoomPlayerCardInfo=} [p] Properties to set
     */
    function RoomPlayerCardInfo(p) {
        this.tingInfo = [];
        this.mingIds = [];
        this.husIds = [];
        this.puts = [];
        this.eats = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoomPlayerCardInfo uId.
     * @member {string} uId
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.uId = "";

    /**
     * RoomPlayerCardInfo tingInfo.
     * @member {Array.<ITingGroupInfo>} tingInfo
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.tingInfo = $util.emptyArray;

    /**
     * RoomPlayerCardInfo mingIds.
     * @member {Array.<number>} mingIds
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.mingIds = $util.emptyArray;

    /**
     * RoomPlayerCardInfo handCnt.
     * @member {number} handCnt
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.handCnt = 0;

    /**
     * RoomPlayerCardInfo husIds.
     * @member {Array.<number>} husIds
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.husIds = $util.emptyArray;

    /**
     * RoomPlayerCardInfo puts.
     * @member {Array.<number>} puts
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.puts = $util.emptyArray;

    /**
     * RoomPlayerCardInfo isMing.
     * @member {boolean} isMing
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.isMing = false;

    /**
     * RoomPlayerCardInfo eats.
     * @member {Array.<ICardGroupInfo>} eats
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.eats = $util.emptyArray;

    /**
     * RoomPlayerCardInfo cardId.
     * @member {number} cardId
     * @memberof RoomPlayerCardInfo
     * @instance
     */
    RoomPlayerCardInfo.prototype.cardId = 0;

    /**
     * Creates a new RoomPlayerCardInfo instance using the specified properties.
     * @function create
     * @memberof RoomPlayerCardInfo
     * @static
     * @param {IRoomPlayerCardInfo=} [properties] Properties to set
     * @returns {RoomPlayerCardInfo} RoomPlayerCardInfo instance
     */
    RoomPlayerCardInfo.create = function create(properties) {
        return new RoomPlayerCardInfo(properties);
    };

    /**
     * Encodes the specified RoomPlayerCardInfo message. Does not implicitly {@link RoomPlayerCardInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomPlayerCardInfo
     * @static
     * @param {IRoomPlayerCardInfo} m RoomPlayerCardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomPlayerCardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        if (m.tingInfo != null && m.tingInfo.length) {
            for (var i = 0; i < m.tingInfo.length; ++i)
                $root.TingGroupInfo.encode(m.tingInfo[i], w.uint32(18).fork()).ldelim();
        }
        if (m.mingIds != null && m.mingIds.length) {
            for (var i = 0; i < m.mingIds.length; ++i)
                w.uint32(24).int32(m.mingIds[i]);
        }
        if (m.handCnt != null && m.hasOwnProperty("handCnt"))
            w.uint32(32).int32(m.handCnt);
        if (m.husIds != null && m.husIds.length) {
            for (var i = 0; i < m.husIds.length; ++i)
                w.uint32(40).int32(m.husIds[i]);
        }
        if (m.puts != null && m.puts.length) {
            for (var i = 0; i < m.puts.length; ++i)
                w.uint32(48).int32(m.puts[i]);
        }
        w.uint32(56).bool(m.isMing);
        if (m.eats != null && m.eats.length) {
            for (var i = 0; i < m.eats.length; ++i)
                $root.CardGroupInfo.encode(m.eats[i], w.uint32(66).fork()).ldelim();
        }
        w.uint32(72).int32(m.cardId);
        return w;
    };

    /**
     * Decodes a RoomPlayerCardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomPlayerCardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoomPlayerCardInfo} RoomPlayerCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomPlayerCardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPlayerCardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                if (!(m.tingInfo && m.tingInfo.length))
                    m.tingInfo = [];
                m.tingInfo.push($root.TingGroupInfo.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.mingIds && m.mingIds.length))
                    m.mingIds = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.mingIds.push(r.int32());
                } else
                    m.mingIds.push(r.int32());
                break;
            case 4:
                m.handCnt = r.int32();
                break;
            case 5:
                if (!(m.husIds && m.husIds.length))
                    m.husIds = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.husIds.push(r.int32());
                } else
                    m.husIds.push(r.int32());
                break;
            case 6:
                if (!(m.puts && m.puts.length))
                    m.puts = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.puts.push(r.int32());
                } else
                    m.puts.push(r.int32());
                break;
            case 7:
                m.isMing = r.bool();
                break;
            case 8:
                if (!(m.eats && m.eats.length))
                    m.eats = [];
                m.eats.push($root.CardGroupInfo.decode(r, r.uint32()));
                break;
            case 9:
                m.cardId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("isMing"))
            throw $util.ProtocolError("missing required 'isMing'", { instance: m });
        if (!m.hasOwnProperty("cardId"))
            throw $util.ProtocolError("missing required 'cardId'", { instance: m });
        return m;
    };

    return RoomPlayerCardInfo;
})();

$root.SynStandCardsData = (function() {

    /**
     * Properties of a SynStandCardsData.
     * @exports ISynStandCardsData
     * @interface ISynStandCardsData
     * @property {string} id SynStandCardsData id
     * @property {Array.<number>|null} [addCards] SynStandCardsData addCards
     * @property {Array.<number>|null} [deleteCards] SynStandCardsData deleteCards
     */

    /**
     * Constructs a new SynStandCardsData.
     * @exports SynStandCardsData
     * @classdesc Represents a SynStandCardsData.
     * @implements ISynStandCardsData
     * @constructor
     * @param {ISynStandCardsData=} [p] Properties to set
     */
    function SynStandCardsData(p) {
        this.addCards = [];
        this.deleteCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SynStandCardsData id.
     * @member {string} id
     * @memberof SynStandCardsData
     * @instance
     */
    SynStandCardsData.prototype.id = "";

    /**
     * SynStandCardsData addCards.
     * @member {Array.<number>} addCards
     * @memberof SynStandCardsData
     * @instance
     */
    SynStandCardsData.prototype.addCards = $util.emptyArray;

    /**
     * SynStandCardsData deleteCards.
     * @member {Array.<number>} deleteCards
     * @memberof SynStandCardsData
     * @instance
     */
    SynStandCardsData.prototype.deleteCards = $util.emptyArray;

    /**
     * Creates a new SynStandCardsData instance using the specified properties.
     * @function create
     * @memberof SynStandCardsData
     * @static
     * @param {ISynStandCardsData=} [properties] Properties to set
     * @returns {SynStandCardsData} SynStandCardsData instance
     */
    SynStandCardsData.create = function create(properties) {
        return new SynStandCardsData(properties);
    };

    /**
     * Encodes the specified SynStandCardsData message. Does not implicitly {@link SynStandCardsData.verify|verify} messages.
     * @function encode
     * @memberof SynStandCardsData
     * @static
     * @param {ISynStandCardsData} m SynStandCardsData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SynStandCardsData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.id);
        if (m.addCards != null && m.addCards.length) {
            for (var i = 0; i < m.addCards.length; ++i)
                w.uint32(16).int32(m.addCards[i]);
        }
        if (m.deleteCards != null && m.deleteCards.length) {
            for (var i = 0; i < m.deleteCards.length; ++i)
                w.uint32(24).int32(m.deleteCards[i]);
        }
        return w;
    };

    /**
     * Decodes a SynStandCardsData message from the specified reader or buffer.
     * @function decode
     * @memberof SynStandCardsData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SynStandCardsData} SynStandCardsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SynStandCardsData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SynStandCardsData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                if (!(m.addCards && m.addCards.length))
                    m.addCards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.addCards.push(r.int32());
                } else
                    m.addCards.push(r.int32());
                break;
            case 3:
                if (!(m.deleteCards && m.deleteCards.length))
                    m.deleteCards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.deleteCards.push(r.int32());
                } else
                    m.deleteCards.push(r.int32());
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

    return SynStandCardsData;
})();

$root.BuHuaPlayer = (function() {

    /**
     * Properties of a BuHuaPlayer.
     * @exports IBuHuaPlayer
     * @interface IBuHuaPlayer
     * @property {string} uId BuHuaPlayer uId
     * @property {Array.<number>|null} [cards] BuHuaPlayer cards
     * @property {Array.<number>|null} [huaCards] BuHuaPlayer huaCards
     */

    /**
     * Constructs a new BuHuaPlayer.
     * @exports BuHuaPlayer
     * @classdesc Represents a BuHuaPlayer.
     * @implements IBuHuaPlayer
     * @constructor
     * @param {IBuHuaPlayer=} [p] Properties to set
     */
    function BuHuaPlayer(p) {
        this.cards = [];
        this.huaCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BuHuaPlayer uId.
     * @member {string} uId
     * @memberof BuHuaPlayer
     * @instance
     */
    BuHuaPlayer.prototype.uId = "";

    /**
     * BuHuaPlayer cards.
     * @member {Array.<number>} cards
     * @memberof BuHuaPlayer
     * @instance
     */
    BuHuaPlayer.prototype.cards = $util.emptyArray;

    /**
     * BuHuaPlayer huaCards.
     * @member {Array.<number>} huaCards
     * @memberof BuHuaPlayer
     * @instance
     */
    BuHuaPlayer.prototype.huaCards = $util.emptyArray;

    /**
     * Creates a new BuHuaPlayer instance using the specified properties.
     * @function create
     * @memberof BuHuaPlayer
     * @static
     * @param {IBuHuaPlayer=} [properties] Properties to set
     * @returns {BuHuaPlayer} BuHuaPlayer instance
     */
    BuHuaPlayer.create = function create(properties) {
        return new BuHuaPlayer(properties);
    };

    /**
     * Encodes the specified BuHuaPlayer message. Does not implicitly {@link BuHuaPlayer.verify|verify} messages.
     * @function encode
     * @memberof BuHuaPlayer
     * @static
     * @param {IBuHuaPlayer} m BuHuaPlayer message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BuHuaPlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                w.uint32(16).int32(m.cards[i]);
        }
        if (m.huaCards != null && m.huaCards.length) {
            for (var i = 0; i < m.huaCards.length; ++i)
                w.uint32(24).int32(m.huaCards[i]);
        }
        return w;
    };

    /**
     * Decodes a BuHuaPlayer message from the specified reader or buffer.
     * @function decode
     * @memberof BuHuaPlayer
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BuHuaPlayer} BuHuaPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BuHuaPlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BuHuaPlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.cards.push(r.int32());
                } else
                    m.cards.push(r.int32());
                break;
            case 3:
                if (!(m.huaCards && m.huaCards.length))
                    m.huaCards = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.huaCards.push(r.int32());
                } else
                    m.huaCards.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        return m;
    };

    return BuHuaPlayer;
})();

$root.BuHuaNum = (function() {

    /**
     * Properties of a BuHuaNum.
     * @exports IBuHuaNum
     * @interface IBuHuaNum
     * @property {Array.<IBuHuaPlayer>|null} [buahuaPlayers] BuHuaNum buahuaPlayers
     */

    /**
     * Constructs a new BuHuaNum.
     * @exports BuHuaNum
     * @classdesc Represents a BuHuaNum.
     * @implements IBuHuaNum
     * @constructor
     * @param {IBuHuaNum=} [p] Properties to set
     */
    function BuHuaNum(p) {
        this.buahuaPlayers = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BuHuaNum buahuaPlayers.
     * @member {Array.<IBuHuaPlayer>} buahuaPlayers
     * @memberof BuHuaNum
     * @instance
     */
    BuHuaNum.prototype.buahuaPlayers = $util.emptyArray;

    /**
     * Creates a new BuHuaNum instance using the specified properties.
     * @function create
     * @memberof BuHuaNum
     * @static
     * @param {IBuHuaNum=} [properties] Properties to set
     * @returns {BuHuaNum} BuHuaNum instance
     */
    BuHuaNum.create = function create(properties) {
        return new BuHuaNum(properties);
    };

    /**
     * Encodes the specified BuHuaNum message. Does not implicitly {@link BuHuaNum.verify|verify} messages.
     * @function encode
     * @memberof BuHuaNum
     * @static
     * @param {IBuHuaNum} m BuHuaNum message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BuHuaNum.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.buahuaPlayers != null && m.buahuaPlayers.length) {
            for (var i = 0; i < m.buahuaPlayers.length; ++i)
                $root.BuHuaPlayer.encode(m.buahuaPlayers[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a BuHuaNum message from the specified reader or buffer.
     * @function decode
     * @memberof BuHuaNum
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BuHuaNum} BuHuaNum
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BuHuaNum.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BuHuaNum();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.buahuaPlayers && m.buahuaPlayers.length))
                    m.buahuaPlayers = [];
                m.buahuaPlayers.push($root.BuHuaPlayer.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BuHuaNum;
})();

$root.GuoHuInfo = (function() {

    /**
     * Properties of a GuoHuInfo.
     * @exports IGuoHuInfo
     * @interface IGuoHuInfo
     * @property {string} uId GuoHuInfo uId
     * @property {number} counts GuoHuInfo counts
     */

    /**
     * Constructs a new GuoHuInfo.
     * @exports GuoHuInfo
     * @classdesc Represents a GuoHuInfo.
     * @implements IGuoHuInfo
     * @constructor
     * @param {IGuoHuInfo=} [p] Properties to set
     */
    function GuoHuInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GuoHuInfo uId.
     * @member {string} uId
     * @memberof GuoHuInfo
     * @instance
     */
    GuoHuInfo.prototype.uId = "";

    /**
     * GuoHuInfo counts.
     * @member {number} counts
     * @memberof GuoHuInfo
     * @instance
     */
    GuoHuInfo.prototype.counts = 0;

    /**
     * Creates a new GuoHuInfo instance using the specified properties.
     * @function create
     * @memberof GuoHuInfo
     * @static
     * @param {IGuoHuInfo=} [properties] Properties to set
     * @returns {GuoHuInfo} GuoHuInfo instance
     */
    GuoHuInfo.create = function create(properties) {
        return new GuoHuInfo(properties);
    };

    /**
     * Encodes the specified GuoHuInfo message. Does not implicitly {@link GuoHuInfo.verify|verify} messages.
     * @function encode
     * @memberof GuoHuInfo
     * @static
     * @param {IGuoHuInfo} m GuoHuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuoHuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).int32(m.counts);
        return w;
    };

    /**
     * Decodes a GuoHuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GuoHuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GuoHuInfo} GuoHuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuoHuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GuoHuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.counts = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("counts"))
            throw $util.ProtocolError("missing required 'counts'", { instance: m });
        return m;
    };

    return GuoHuInfo;
})();

$root.TingInfo = (function() {

    /**
     * Properties of a TingInfo.
     * @exports ITingInfo
     * @interface ITingInfo
     * @property {string} uId TingInfo uId
     * @property {boolean} isTing TingInfo isTing
     */

    /**
     * Constructs a new TingInfo.
     * @exports TingInfo
     * @classdesc Represents a TingInfo.
     * @implements ITingInfo
     * @constructor
     * @param {ITingInfo=} [p] Properties to set
     */
    function TingInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TingInfo uId.
     * @member {string} uId
     * @memberof TingInfo
     * @instance
     */
    TingInfo.prototype.uId = "";

    /**
     * TingInfo isTing.
     * @member {boolean} isTing
     * @memberof TingInfo
     * @instance
     */
    TingInfo.prototype.isTing = false;

    /**
     * Creates a new TingInfo instance using the specified properties.
     * @function create
     * @memberof TingInfo
     * @static
     * @param {ITingInfo=} [properties] Properties to set
     * @returns {TingInfo} TingInfo instance
     */
    TingInfo.create = function create(properties) {
        return new TingInfo(properties);
    };

    /**
     * Encodes the specified TingInfo message. Does not implicitly {@link TingInfo.verify|verify} messages.
     * @function encode
     * @memberof TingInfo
     * @static
     * @param {ITingInfo} m TingInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TingInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).bool(m.isTing);
        return w;
    };

    /**
     * Decodes a TingInfo message from the specified reader or buffer.
     * @function decode
     * @memberof TingInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TingInfo} TingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TingInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TingInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.isTing = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("isTing"))
            throw $util.ProtocolError("missing required 'isTing'", { instance: m });
        return m;
    };

    return TingInfo;
})();

$root.MenuInfo = (function() {

    /**
     * Properties of a MenuInfo.
     * @exports IMenuInfo
     * @interface IMenuInfo
     * @property {number} types MenuInfo types
     * @property {boolean|null} [isShow] MenuInfo isShow
     * @property {Array.<ICardGroupInfo>|null} [gangInfo] MenuInfo gangInfo
     * @property {Array.<ICardGroupInfo>|null} [chiInfo] MenuInfo chiInfo
     * @property {ICardGroupInfo|null} [pengInfo] MenuInfo pengInfo
     * @property {Array.<ISuggestTingData>|null} [suggestTing] MenuInfo suggestTing
     */

    /**
     * Constructs a new MenuInfo.
     * @exports MenuInfo
     * @classdesc Represents a MenuInfo.
     * @implements IMenuInfo
     * @constructor
     * @param {IMenuInfo=} [p] Properties to set
     */
    function MenuInfo(p) {
        this.gangInfo = [];
        this.chiInfo = [];
        this.suggestTing = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MenuInfo types.
     * @member {number} types
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.types = 0;

    /**
     * MenuInfo isShow.
     * @member {boolean} isShow
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.isShow = false;

    /**
     * MenuInfo gangInfo.
     * @member {Array.<ICardGroupInfo>} gangInfo
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.gangInfo = $util.emptyArray;

    /**
     * MenuInfo chiInfo.
     * @member {Array.<ICardGroupInfo>} chiInfo
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.chiInfo = $util.emptyArray;

    /**
     * MenuInfo pengInfo.
     * @member {ICardGroupInfo|null|undefined} pengInfo
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.pengInfo = null;

    /**
     * MenuInfo suggestTing.
     * @member {Array.<ISuggestTingData>} suggestTing
     * @memberof MenuInfo
     * @instance
     */
    MenuInfo.prototype.suggestTing = $util.emptyArray;

    /**
     * Creates a new MenuInfo instance using the specified properties.
     * @function create
     * @memberof MenuInfo
     * @static
     * @param {IMenuInfo=} [properties] Properties to set
     * @returns {MenuInfo} MenuInfo instance
     */
    MenuInfo.create = function create(properties) {
        return new MenuInfo(properties);
    };

    /**
     * Encodes the specified MenuInfo message. Does not implicitly {@link MenuInfo.verify|verify} messages.
     * @function encode
     * @memberof MenuInfo
     * @static
     * @param {IMenuInfo} m MenuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MenuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.types);
        if (m.isShow != null && m.hasOwnProperty("isShow"))
            w.uint32(16).bool(m.isShow);
        if (m.gangInfo != null && m.gangInfo.length) {
            for (var i = 0; i < m.gangInfo.length; ++i)
                $root.CardGroupInfo.encode(m.gangInfo[i], w.uint32(26).fork()).ldelim();
        }
        if (m.chiInfo != null && m.chiInfo.length) {
            for (var i = 0; i < m.chiInfo.length; ++i)
                $root.CardGroupInfo.encode(m.chiInfo[i], w.uint32(34).fork()).ldelim();
        }
        if (m.pengInfo != null && m.hasOwnProperty("pengInfo"))
            $root.CardGroupInfo.encode(m.pengInfo, w.uint32(42).fork()).ldelim();
        if (m.suggestTing != null && m.suggestTing.length) {
            for (var i = 0; i < m.suggestTing.length; ++i)
                $root.SuggestTingData.encode(m.suggestTing[i], w.uint32(50).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a MenuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MenuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MenuInfo} MenuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MenuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MenuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.types = r.int32();
                break;
            case 2:
                m.isShow = r.bool();
                break;
            case 3:
                if (!(m.gangInfo && m.gangInfo.length))
                    m.gangInfo = [];
                m.gangInfo.push($root.CardGroupInfo.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.chiInfo && m.chiInfo.length))
                    m.chiInfo = [];
                m.chiInfo.push($root.CardGroupInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.pengInfo = $root.CardGroupInfo.decode(r, r.uint32());
                break;
            case 6:
                if (!(m.suggestTing && m.suggestTing.length))
                    m.suggestTing = [];
                m.suggestTing.push($root.SuggestTingData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("types"))
            throw $util.ProtocolError("missing required 'types'", { instance: m });
        return m;
    };

    return MenuInfo;
})();

$root.RoundInfo = (function() {

    /**
     * Properties of a RoundInfo.
     * @exports IRoundInfo
     * @interface IRoundInfo
     * @property {string} fanName RoundInfo fanName
     * @property {number} fanCnt RoundInfo fanCnt
     */

    /**
     * Constructs a new RoundInfo.
     * @exports RoundInfo
     * @classdesc Represents a RoundInfo.
     * @implements IRoundInfo
     * @constructor
     * @param {IRoundInfo=} [p] Properties to set
     */
    function RoundInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoundInfo fanName.
     * @member {string} fanName
     * @memberof RoundInfo
     * @instance
     */
    RoundInfo.prototype.fanName = "";

    /**
     * RoundInfo fanCnt.
     * @member {number} fanCnt
     * @memberof RoundInfo
     * @instance
     */
    RoundInfo.prototype.fanCnt = 0;

    /**
     * Creates a new RoundInfo instance using the specified properties.
     * @function create
     * @memberof RoundInfo
     * @static
     * @param {IRoundInfo=} [properties] Properties to set
     * @returns {RoundInfo} RoundInfo instance
     */
    RoundInfo.create = function create(properties) {
        return new RoundInfo(properties);
    };

    /**
     * Encodes the specified RoundInfo message. Does not implicitly {@link RoundInfo.verify|verify} messages.
     * @function encode
     * @memberof RoundInfo
     * @static
     * @param {IRoundInfo} m RoundInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoundInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.fanName);
        w.uint32(16).int32(m.fanCnt);
        return w;
    };

    /**
     * Decodes a RoundInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoundInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoundInfo} RoundInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoundInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoundInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.fanName = r.string();
                break;
            case 2:
                m.fanCnt = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("fanName"))
            throw $util.ProtocolError("missing required 'fanName'", { instance: m });
        if (!m.hasOwnProperty("fanCnt"))
            throw $util.ProtocolError("missing required 'fanCnt'", { instance: m });
        return m;
    };

    return RoundInfo;
})();

$root.MaInfo = (function() {

    /**
     * Properties of a MaInfo.
     * @exports IMaInfo
     * @interface IMaInfo
     * @property {number} card MaInfo card
     * @property {number} type MaInfo type
     */

    /**
     * Constructs a new MaInfo.
     * @exports MaInfo
     * @classdesc Represents a MaInfo.
     * @implements IMaInfo
     * @constructor
     * @param {IMaInfo=} [p] Properties to set
     */
    function MaInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MaInfo card.
     * @member {number} card
     * @memberof MaInfo
     * @instance
     */
    MaInfo.prototype.card = 0;

    /**
     * MaInfo type.
     * @member {number} type
     * @memberof MaInfo
     * @instance
     */
    MaInfo.prototype.type = 0;

    /**
     * Creates a new MaInfo instance using the specified properties.
     * @function create
     * @memberof MaInfo
     * @static
     * @param {IMaInfo=} [properties] Properties to set
     * @returns {MaInfo} MaInfo instance
     */
    MaInfo.create = function create(properties) {
        return new MaInfo(properties);
    };

    /**
     * Encodes the specified MaInfo message. Does not implicitly {@link MaInfo.verify|verify} messages.
     * @function encode
     * @memberof MaInfo
     * @static
     * @param {IMaInfo} m MaInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.card);
        w.uint32(16).int32(m.type);
        return w;
    };

    /**
     * Decodes a MaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MaInfo} MaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MaInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.card = r.int32();
                break;
            case 2:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("card"))
            throw $util.ProtocolError("missing required 'card'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    return MaInfo;
})();

$root.GuangDongLaiziInfo = (function() {

    /**
     * Properties of a GuangDongLaiziInfo.
     * @exports IGuangDongLaiziInfo
     * @interface IGuangDongLaiziInfo
     * @property {number|null} [turnCard] GuangDongLaiziInfo turnCard
     * @property {number} laiziCard GuangDongLaiziInfo laiziCard
     */

    /**
     * Constructs a new GuangDongLaiziInfo.
     * @exports GuangDongLaiziInfo
     * @classdesc Represents a GuangDongLaiziInfo.
     * @implements IGuangDongLaiziInfo
     * @constructor
     * @param {IGuangDongLaiziInfo=} [p] Properties to set
     */
    function GuangDongLaiziInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GuangDongLaiziInfo turnCard.
     * @member {number} turnCard
     * @memberof GuangDongLaiziInfo
     * @instance
     */
    GuangDongLaiziInfo.prototype.turnCard = 0;

    /**
     * GuangDongLaiziInfo laiziCard.
     * @member {number} laiziCard
     * @memberof GuangDongLaiziInfo
     * @instance
     */
    GuangDongLaiziInfo.prototype.laiziCard = 0;

    /**
     * Creates a new GuangDongLaiziInfo instance using the specified properties.
     * @function create
     * @memberof GuangDongLaiziInfo
     * @static
     * @param {IGuangDongLaiziInfo=} [properties] Properties to set
     * @returns {GuangDongLaiziInfo} GuangDongLaiziInfo instance
     */
    GuangDongLaiziInfo.create = function create(properties) {
        return new GuangDongLaiziInfo(properties);
    };

    /**
     * Encodes the specified GuangDongLaiziInfo message. Does not implicitly {@link GuangDongLaiziInfo.verify|verify} messages.
     * @function encode
     * @memberof GuangDongLaiziInfo
     * @static
     * @param {IGuangDongLaiziInfo} m GuangDongLaiziInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuangDongLaiziInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.turnCard != null && m.hasOwnProperty("turnCard"))
            w.uint32(8).int32(m.turnCard);
        w.uint32(16).int32(m.laiziCard);
        return w;
    };

    /**
     * Decodes a GuangDongLaiziInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GuangDongLaiziInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GuangDongLaiziInfo} GuangDongLaiziInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuangDongLaiziInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GuangDongLaiziInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.turnCard = r.int32();
                break;
            case 2:
                m.laiziCard = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("laiziCard"))
            throw $util.ProtocolError("missing required 'laiziCard'", { instance: m });
        return m;
    };

    return GuangDongLaiziInfo;
})();

$root.FuzhouLaiziInfo = (function() {

    /**
     * Properties of a FuzhouLaiziInfo.
     * @exports IFuzhouLaiziInfo
     * @interface IFuzhouLaiziInfo
     * @property {number} goldCard FuzhouLaiziInfo goldCard
     */

    /**
     * Constructs a new FuzhouLaiziInfo.
     * @exports FuzhouLaiziInfo
     * @classdesc Represents a FuzhouLaiziInfo.
     * @implements IFuzhouLaiziInfo
     * @constructor
     * @param {IFuzhouLaiziInfo=} [p] Properties to set
     */
    function FuzhouLaiziInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FuzhouLaiziInfo goldCard.
     * @member {number} goldCard
     * @memberof FuzhouLaiziInfo
     * @instance
     */
    FuzhouLaiziInfo.prototype.goldCard = 0;

    /**
     * Creates a new FuzhouLaiziInfo instance using the specified properties.
     * @function create
     * @memberof FuzhouLaiziInfo
     * @static
     * @param {IFuzhouLaiziInfo=} [properties] Properties to set
     * @returns {FuzhouLaiziInfo} FuzhouLaiziInfo instance
     */
    FuzhouLaiziInfo.create = function create(properties) {
        return new FuzhouLaiziInfo(properties);
    };

    /**
     * Encodes the specified FuzhouLaiziInfo message. Does not implicitly {@link FuzhouLaiziInfo.verify|verify} messages.
     * @function encode
     * @memberof FuzhouLaiziInfo
     * @static
     * @param {IFuzhouLaiziInfo} m FuzhouLaiziInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FuzhouLaiziInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.goldCard);
        return w;
    };

    /**
     * Decodes a FuzhouLaiziInfo message from the specified reader or buffer.
     * @function decode
     * @memberof FuzhouLaiziInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FuzhouLaiziInfo} FuzhouLaiziInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FuzhouLaiziInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FuzhouLaiziInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.goldCard = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("goldCard"))
            throw $util.ProtocolError("missing required 'goldCard'", { instance: m });
        return m;
    };

    return FuzhouLaiziInfo;
})();

$root.MaCardInfo = (function() {

    /**
     * Properties of a MaCardInfo.
     * @exports IMaCardInfo
     * @interface IMaCardInfo
     * @property {string} uId MaCardInfo uId
     * @property {number} num MaCardInfo num
     */

    /**
     * Constructs a new MaCardInfo.
     * @exports MaCardInfo
     * @classdesc Represents a MaCardInfo.
     * @implements IMaCardInfo
     * @constructor
     * @param {IMaCardInfo=} [p] Properties to set
     */
    function MaCardInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MaCardInfo uId.
     * @member {string} uId
     * @memberof MaCardInfo
     * @instance
     */
    MaCardInfo.prototype.uId = "";

    /**
     * MaCardInfo num.
     * @member {number} num
     * @memberof MaCardInfo
     * @instance
     */
    MaCardInfo.prototype.num = 0;

    /**
     * Creates a new MaCardInfo instance using the specified properties.
     * @function create
     * @memberof MaCardInfo
     * @static
     * @param {IMaCardInfo=} [properties] Properties to set
     * @returns {MaCardInfo} MaCardInfo instance
     */
    MaCardInfo.create = function create(properties) {
        return new MaCardInfo(properties);
    };

    /**
     * Encodes the specified MaCardInfo message. Does not implicitly {@link MaCardInfo.verify|verify} messages.
     * @function encode
     * @memberof MaCardInfo
     * @static
     * @param {IMaCardInfo} m MaCardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MaCardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).int32(m.num);
        return w;
    };

    /**
     * Decodes a MaCardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MaCardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MaCardInfo} MaCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MaCardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MaCardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.num = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    return MaCardInfo;
})();

$root.PlayerMaInfo = (function() {

    /**
     * Properties of a PlayerMaInfo.
     * @exports IPlayerMaInfo
     * @interface IPlayerMaInfo
     * @property {string} uId PlayerMaInfo uId
     * @property {Array.<IMaInfo>|null} [maInfos] PlayerMaInfo maInfos
     */

    /**
     * Constructs a new PlayerMaInfo.
     * @exports PlayerMaInfo
     * @classdesc Represents a PlayerMaInfo.
     * @implements IPlayerMaInfo
     * @constructor
     * @param {IPlayerMaInfo=} [p] Properties to set
     */
    function PlayerMaInfo(p) {
        this.maInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerMaInfo uId.
     * @member {string} uId
     * @memberof PlayerMaInfo
     * @instance
     */
    PlayerMaInfo.prototype.uId = "";

    /**
     * PlayerMaInfo maInfos.
     * @member {Array.<IMaInfo>} maInfos
     * @memberof PlayerMaInfo
     * @instance
     */
    PlayerMaInfo.prototype.maInfos = $util.emptyArray;

    /**
     * Creates a new PlayerMaInfo instance using the specified properties.
     * @function create
     * @memberof PlayerMaInfo
     * @static
     * @param {IPlayerMaInfo=} [properties] Properties to set
     * @returns {PlayerMaInfo} PlayerMaInfo instance
     */
    PlayerMaInfo.create = function create(properties) {
        return new PlayerMaInfo(properties);
    };

    /**
     * Encodes the specified PlayerMaInfo message. Does not implicitly {@link PlayerMaInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerMaInfo
     * @static
     * @param {IPlayerMaInfo} m PlayerMaInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerMaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        if (m.maInfos != null && m.maInfos.length) {
            for (var i = 0; i < m.maInfos.length; ++i)
                $root.MaInfo.encode(m.maInfos[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PlayerMaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerMaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerMaInfo} PlayerMaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerMaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerMaInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                if (!(m.maInfos && m.maInfos.length))
                    m.maInfos = [];
                m.maInfos.push($root.MaInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        return m;
    };

    return PlayerMaInfo;
})();

$root.ChaHuaZhuInfo = (function() {

    /**
     * Properties of a ChaHuaZhuInfo.
     * @exports IChaHuaZhuInfo
     * @interface IChaHuaZhuInfo
     * @property {string} uId ChaHuaZhuInfo uId
     * @property {string} score ChaHuaZhuInfo score
     */

    /**
     * Constructs a new ChaHuaZhuInfo.
     * @exports ChaHuaZhuInfo
     * @classdesc Represents a ChaHuaZhuInfo.
     * @implements IChaHuaZhuInfo
     * @constructor
     * @param {IChaHuaZhuInfo=} [p] Properties to set
     */
    function ChaHuaZhuInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChaHuaZhuInfo uId.
     * @member {string} uId
     * @memberof ChaHuaZhuInfo
     * @instance
     */
    ChaHuaZhuInfo.prototype.uId = "";

    /**
     * ChaHuaZhuInfo score.
     * @member {string} score
     * @memberof ChaHuaZhuInfo
     * @instance
     */
    ChaHuaZhuInfo.prototype.score = "";

    /**
     * Creates a new ChaHuaZhuInfo instance using the specified properties.
     * @function create
     * @memberof ChaHuaZhuInfo
     * @static
     * @param {IChaHuaZhuInfo=} [properties] Properties to set
     * @returns {ChaHuaZhuInfo} ChaHuaZhuInfo instance
     */
    ChaHuaZhuInfo.create = function create(properties) {
        return new ChaHuaZhuInfo(properties);
    };

    /**
     * Encodes the specified ChaHuaZhuInfo message. Does not implicitly {@link ChaHuaZhuInfo.verify|verify} messages.
     * @function encode
     * @memberof ChaHuaZhuInfo
     * @static
     * @param {IChaHuaZhuInfo} m ChaHuaZhuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChaHuaZhuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(18).string(m.score);
        return w;
    };

    /**
     * Decodes a ChaHuaZhuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ChaHuaZhuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChaHuaZhuInfo} ChaHuaZhuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChaHuaZhuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChaHuaZhuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.score = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        return m;
    };

    return ChaHuaZhuInfo;
})();

$root.BeGangInfo = (function() {

    /**
     * Properties of a BeGangInfo.
     * @exports IBeGangInfo
     * @interface IBeGangInfo
     * @property {string} id BeGangInfo id
     * @property {string} gold BeGangInfo gold
     */

    /**
     * Constructs a new BeGangInfo.
     * @exports BeGangInfo
     * @classdesc Represents a BeGangInfo.
     * @implements IBeGangInfo
     * @constructor
     * @param {IBeGangInfo=} [p] Properties to set
     */
    function BeGangInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BeGangInfo id.
     * @member {string} id
     * @memberof BeGangInfo
     * @instance
     */
    BeGangInfo.prototype.id = "";

    /**
     * BeGangInfo gold.
     * @member {string} gold
     * @memberof BeGangInfo
     * @instance
     */
    BeGangInfo.prototype.gold = "";

    /**
     * Creates a new BeGangInfo instance using the specified properties.
     * @function create
     * @memberof BeGangInfo
     * @static
     * @param {IBeGangInfo=} [properties] Properties to set
     * @returns {BeGangInfo} BeGangInfo instance
     */
    BeGangInfo.create = function create(properties) {
        return new BeGangInfo(properties);
    };

    /**
     * Encodes the specified BeGangInfo message. Does not implicitly {@link BeGangInfo.verify|verify} messages.
     * @function encode
     * @memberof BeGangInfo
     * @static
     * @param {IBeGangInfo} m BeGangInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BeGangInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.id);
        w.uint32(18).string(m.gold);
        return w;
    };

    /**
     * Decodes a BeGangInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BeGangInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BeGangInfo} BeGangInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BeGangInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BeGangInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                m.gold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: m });
        return m;
    };

    return BeGangInfo;
})();

$root.BeHuInfo = (function() {

    /**
     * Properties of a BeHuInfo.
     * @exports IBeHuInfo
     * @interface IBeHuInfo
     * @property {string} uId BeHuInfo uId
     * @property {string} loseGold BeHuInfo loseGold
     */

    /**
     * Constructs a new BeHuInfo.
     * @exports BeHuInfo
     * @classdesc Represents a BeHuInfo.
     * @implements IBeHuInfo
     * @constructor
     * @param {IBeHuInfo=} [p] Properties to set
     */
    function BeHuInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BeHuInfo uId.
     * @member {string} uId
     * @memberof BeHuInfo
     * @instance
     */
    BeHuInfo.prototype.uId = "";

    /**
     * BeHuInfo loseGold.
     * @member {string} loseGold
     * @memberof BeHuInfo
     * @instance
     */
    BeHuInfo.prototype.loseGold = "";

    /**
     * Creates a new BeHuInfo instance using the specified properties.
     * @function create
     * @memberof BeHuInfo
     * @static
     * @param {IBeHuInfo=} [properties] Properties to set
     * @returns {BeHuInfo} BeHuInfo instance
     */
    BeHuInfo.create = function create(properties) {
        return new BeHuInfo(properties);
    };

    /**
     * Encodes the specified BeHuInfo message. Does not implicitly {@link BeHuInfo.verify|verify} messages.
     * @function encode
     * @memberof BeHuInfo
     * @static
     * @param {IBeHuInfo} m BeHuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BeHuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(18).string(m.loseGold);
        return w;
    };

    /**
     * Decodes a BeHuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BeHuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BeHuInfo} BeHuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BeHuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BeHuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.loseGold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("loseGold"))
            throw $util.ProtocolError("missing required 'loseGold'", { instance: m });
        return m;
    };

    return BeHuInfo;
})();

$root.HuInfo = (function() {

    /**
     * Properties of a HuInfo.
     * @exports IHuInfo
     * @interface IHuInfo
     * @property {string} uId HuInfo uId
     * @property {boolean} isReal HuInfo isReal
     * @property {string} getGold HuInfo getGold
     */

    /**
     * Constructs a new HuInfo.
     * @exports HuInfo
     * @classdesc Represents a HuInfo.
     * @implements IHuInfo
     * @constructor
     * @param {IHuInfo=} [p] Properties to set
     */
    function HuInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HuInfo uId.
     * @member {string} uId
     * @memberof HuInfo
     * @instance
     */
    HuInfo.prototype.uId = "";

    /**
     * HuInfo isReal.
     * @member {boolean} isReal
     * @memberof HuInfo
     * @instance
     */
    HuInfo.prototype.isReal = false;

    /**
     * HuInfo getGold.
     * @member {string} getGold
     * @memberof HuInfo
     * @instance
     */
    HuInfo.prototype.getGold = "";

    /**
     * Creates a new HuInfo instance using the specified properties.
     * @function create
     * @memberof HuInfo
     * @static
     * @param {IHuInfo=} [properties] Properties to set
     * @returns {HuInfo} HuInfo instance
     */
    HuInfo.create = function create(properties) {
        return new HuInfo(properties);
    };

    /**
     * Encodes the specified HuInfo message. Does not implicitly {@link HuInfo.verify|verify} messages.
     * @function encode
     * @memberof HuInfo
     * @static
     * @param {IHuInfo} m HuInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HuInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).bool(m.isReal);
        w.uint32(26).string(m.getGold);
        return w;
    };

    /**
     * Decodes a HuInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HuInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HuInfo} HuInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HuInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HuInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.isReal = r.bool();
                break;
            case 3:
                m.getGold = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("isReal"))
            throw $util.ProtocolError("missing required 'isReal'", { instance: m });
        if (!m.hasOwnProperty("getGold"))
            throw $util.ProtocolError("missing required 'getGold'", { instance: m });
        return m;
    };

    return HuInfo;
})();

$root.GapInfo = (function() {

    /**
     * Properties of a GapInfo.
     * @exports IGapInfo
     * @interface IGapInfo
     * @property {string} uId GapInfo uId
     * @property {number} type GapInfo type
     */

    /**
     * Constructs a new GapInfo.
     * @exports GapInfo
     * @classdesc Represents a GapInfo.
     * @implements IGapInfo
     * @constructor
     * @param {IGapInfo=} [p] Properties to set
     */
    function GapInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GapInfo uId.
     * @member {string} uId
     * @memberof GapInfo
     * @instance
     */
    GapInfo.prototype.uId = "";

    /**
     * GapInfo type.
     * @member {number} type
     * @memberof GapInfo
     * @instance
     */
    GapInfo.prototype.type = 0;

    /**
     * Creates a new GapInfo instance using the specified properties.
     * @function create
     * @memberof GapInfo
     * @static
     * @param {IGapInfo=} [properties] Properties to set
     * @returns {GapInfo} GapInfo instance
     */
    GapInfo.create = function create(properties) {
        return new GapInfo(properties);
    };

    /**
     * Encodes the specified GapInfo message. Does not implicitly {@link GapInfo.verify|verify} messages.
     * @function encode
     * @memberof GapInfo
     * @static
     * @param {IGapInfo} m GapInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GapInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uId);
        w.uint32(16).int32(m.type);
        return w;
    };

    /**
     * Decodes a GapInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GapInfo} GapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GapInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GapInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uId = r.string();
                break;
            case 2:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uId"))
            throw $util.ProtocolError("missing required 'uId'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    return GapInfo;
})();

$root.PlayerCardInfo = (function() {

    /**
     * Properties of a PlayerCardInfo.
     * @exports IPlayerCardInfo
     * @interface IPlayerCardInfo
     * @property {string} playerId PlayerCardInfo playerId
     * @property {Array.<number>|null} [card] PlayerCardInfo card
     */

    /**
     * Constructs a new PlayerCardInfo.
     * @exports PlayerCardInfo
     * @classdesc Represents a PlayerCardInfo.
     * @implements IPlayerCardInfo
     * @constructor
     * @param {IPlayerCardInfo=} [p] Properties to set
     */
    function PlayerCardInfo(p) {
        this.card = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerCardInfo playerId.
     * @member {string} playerId
     * @memberof PlayerCardInfo
     * @instance
     */
    PlayerCardInfo.prototype.playerId = "";

    /**
     * PlayerCardInfo card.
     * @member {Array.<number>} card
     * @memberof PlayerCardInfo
     * @instance
     */
    PlayerCardInfo.prototype.card = $util.emptyArray;

    /**
     * Creates a new PlayerCardInfo instance using the specified properties.
     * @function create
     * @memberof PlayerCardInfo
     * @static
     * @param {IPlayerCardInfo=} [properties] Properties to set
     * @returns {PlayerCardInfo} PlayerCardInfo instance
     */
    PlayerCardInfo.create = function create(properties) {
        return new PlayerCardInfo(properties);
    };

    /**
     * Encodes the specified PlayerCardInfo message. Does not implicitly {@link PlayerCardInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerCardInfo
     * @static
     * @param {IPlayerCardInfo} m PlayerCardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerCardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        if (m.card != null && m.card.length) {
            for (var i = 0; i < m.card.length; ++i)
                w.uint32(16).int32(m.card[i]);
        }
        return w;
    };

    /**
     * Decodes a PlayerCardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerCardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerCardInfo} PlayerCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerCardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerCardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            case 2:
                if (!(m.card && m.card.length))
                    m.card = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.card.push(r.int32());
                } else
                    m.card.push(r.int32());
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

    return PlayerCardInfo;
})();

module.exports = $root;

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Withdraw || ($protobuf.roots.Withdraw = {});

$root.TakeMoneyReq = (function() {

    /**
     * Properties of a TakeMoneyReq.
     * @exports ITakeMoneyReq
     * @interface ITakeMoneyReq
     * @property {number} amount TakeMoneyReq amount
     * @property {string} account TakeMoneyReq account
     * @property {number} type TakeMoneyReq type
     * @property {string} name TakeMoneyReq name
     * @property {number} bankId TakeMoneyReq bankId
     * @property {string} tel TakeMoneyReq tel
     */

    /**
     * Constructs a new TakeMoneyReq.
     * @exports TakeMoneyReq
     * @classdesc Represents a TakeMoneyReq.
     * @implements ITakeMoneyReq
     * @constructor
     * @param {ITakeMoneyReq=} [p] Properties to set
     */
    function TakeMoneyReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TakeMoneyReq amount.
     * @member {number} amount
     * @memberof TakeMoneyReq
     * @instance
     */
    TakeMoneyReq.prototype.amount = 0;

    /**
     * TakeMoneyReq account.
     * @member {string} account
     * @memberof TakeMoneyReq
     * @instance
     */
    TakeMoneyReq.prototype.account = "";

    /**
     * TakeMoneyReq type.
     * @member {number} type
     * @memberof TakeMoneyReq
     * @instance
     */
    TakeMoneyReq.prototype.type = 0;

    /**
     * TakeMoneyReq name.
     * @member {string} name
     * @memberof TakeMoneyReq
     * @instance
     */
    TakeMoneyReq.prototype.name = "";

    /**
     * TakeMoneyReq bankId.
     * @member {number} bankId
     * @memberof TakeMoneyReq
     * @instance
     */
    TakeMoneyReq.prototype.bankId = 0;

    /**
     * TakeMoneyReq tel.
     * @member {string} tel
     * @memberof TakeMoneyReq
     * @instance
     */
    TakeMoneyReq.prototype.tel = "";

    /**
     * Creates a new TakeMoneyReq instance using the specified properties.
     * @function create
     * @memberof TakeMoneyReq
     * @static
     * @param {ITakeMoneyReq=} [properties] Properties to set
     * @returns {TakeMoneyReq} TakeMoneyReq instance
     */
    TakeMoneyReq.create = function create(properties) {
        return new TakeMoneyReq(properties);
    };

    /**
     * Encodes the specified TakeMoneyReq message. Does not implicitly {@link TakeMoneyReq.verify|verify} messages.
     * @function encode
     * @memberof TakeMoneyReq
     * @static
     * @param {ITakeMoneyReq} m TakeMoneyReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TakeMoneyReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.amount);
        w.uint32(18).string(m.account);
        w.uint32(24).int32(m.type);
        w.uint32(34).string(m.name);
        w.uint32(40).int32(m.bankId);
        w.uint32(50).string(m.tel);
        return w;
    };

    /**
     * Decodes a TakeMoneyReq message from the specified reader or buffer.
     * @function decode
     * @memberof TakeMoneyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TakeMoneyReq} TakeMoneyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TakeMoneyReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TakeMoneyReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.amount = r.int32();
                break;
            case 2:
                m.account = r.string();
                break;
            case 3:
                m.type = r.int32();
                break;
            case 4:
                m.name = r.string();
                break;
            case 5:
                m.bankId = r.int32();
                break;
            case 6:
                m.tel = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("amount"))
            throw $util.ProtocolError("missing required 'amount'", { instance: m });
        if (!m.hasOwnProperty("account"))
            throw $util.ProtocolError("missing required 'account'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("bankId"))
            throw $util.ProtocolError("missing required 'bankId'", { instance: m });
        if (!m.hasOwnProperty("tel"))
            throw $util.ProtocolError("missing required 'tel'", { instance: m });
        return m;
    };

    return TakeMoneyReq;
})();

$root.TakeMoneyRsp = (function() {

    /**
     * Properties of a TakeMoneyRsp.
     * @exports ITakeMoneyRsp
     * @interface ITakeMoneyRsp
     * @property {boolean} success TakeMoneyRsp success
     * @property {string} tip TakeMoneyRsp tip
     */

    /**
     * Constructs a new TakeMoneyRsp.
     * @exports TakeMoneyRsp
     * @classdesc Represents a TakeMoneyRsp.
     * @implements ITakeMoneyRsp
     * @constructor
     * @param {ITakeMoneyRsp=} [p] Properties to set
     */
    function TakeMoneyRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TakeMoneyRsp success.
     * @member {boolean} success
     * @memberof TakeMoneyRsp
     * @instance
     */
    TakeMoneyRsp.prototype.success = false;

    /**
     * TakeMoneyRsp tip.
     * @member {string} tip
     * @memberof TakeMoneyRsp
     * @instance
     */
    TakeMoneyRsp.prototype.tip = "";

    /**
     * Creates a new TakeMoneyRsp instance using the specified properties.
     * @function create
     * @memberof TakeMoneyRsp
     * @static
     * @param {ITakeMoneyRsp=} [properties] Properties to set
     * @returns {TakeMoneyRsp} TakeMoneyRsp instance
     */
    TakeMoneyRsp.create = function create(properties) {
        return new TakeMoneyRsp(properties);
    };

    /**
     * Encodes the specified TakeMoneyRsp message. Does not implicitly {@link TakeMoneyRsp.verify|verify} messages.
     * @function encode
     * @memberof TakeMoneyRsp
     * @static
     * @param {ITakeMoneyRsp} m TakeMoneyRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TakeMoneyRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a TakeMoneyRsp message from the specified reader or buffer.
     * @function decode
     * @memberof TakeMoneyRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TakeMoneyRsp} TakeMoneyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TakeMoneyRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TakeMoneyRsp();
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

    return TakeMoneyRsp;
})();

$root.GetTakeMoneyRecordReq = (function() {

    /**
     * Properties of a GetTakeMoneyRecordReq.
     * @exports IGetTakeMoneyRecordReq
     * @interface IGetTakeMoneyRecordReq
     */

    /**
     * Constructs a new GetTakeMoneyRecordReq.
     * @exports GetTakeMoneyRecordReq
     * @classdesc Represents a GetTakeMoneyRecordReq.
     * @implements IGetTakeMoneyRecordReq
     * @constructor
     * @param {IGetTakeMoneyRecordReq=} [p] Properties to set
     */
    function GetTakeMoneyRecordReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetTakeMoneyRecordReq instance using the specified properties.
     * @function create
     * @memberof GetTakeMoneyRecordReq
     * @static
     * @param {IGetTakeMoneyRecordReq=} [properties] Properties to set
     * @returns {GetTakeMoneyRecordReq} GetTakeMoneyRecordReq instance
     */
    GetTakeMoneyRecordReq.create = function create(properties) {
        return new GetTakeMoneyRecordReq(properties);
    };

    /**
     * Encodes the specified GetTakeMoneyRecordReq message. Does not implicitly {@link GetTakeMoneyRecordReq.verify|verify} messages.
     * @function encode
     * @memberof GetTakeMoneyRecordReq
     * @static
     * @param {IGetTakeMoneyRecordReq} m GetTakeMoneyRecordReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetTakeMoneyRecordReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetTakeMoneyRecordReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetTakeMoneyRecordReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetTakeMoneyRecordReq} GetTakeMoneyRecordReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetTakeMoneyRecordReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetTakeMoneyRecordReq();
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

    return GetTakeMoneyRecordReq;
})();

$root.TakeMoneyRecord = (function() {

    /**
     * Properties of a TakeMoneyRecord.
     * @exports ITakeMoneyRecord
     * @interface ITakeMoneyRecord
     * @property {string} timeMs TakeMoneyRecord timeMs
     * @property {number} money TakeMoneyRecord money
     * @property {number} type TakeMoneyRecord type
     * @property {string} account TakeMoneyRecord account
     * @property {number} status TakeMoneyRecord status
     * @property {string} resultDesc TakeMoneyRecord resultDesc
     * @property {string} serviceCharge TakeMoneyRecord serviceCharge
     * @property {string} realMoney TakeMoneyRecord realMoney
     */

    /**
     * Constructs a new TakeMoneyRecord.
     * @exports TakeMoneyRecord
     * @classdesc Represents a TakeMoneyRecord.
     * @implements ITakeMoneyRecord
     * @constructor
     * @param {ITakeMoneyRecord=} [p] Properties to set
     */
    function TakeMoneyRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TakeMoneyRecord timeMs.
     * @member {string} timeMs
     * @memberof TakeMoneyRecord
     * @instance
     */
    TakeMoneyRecord.prototype.timeMs = "";

    /**
     * TakeMoneyRecord money.
     * @member {number} money
     * @memberof TakeMoneyRecord
     * @instance
     */
    TakeMoneyRecord.prototype.money = 0;

    /**
     * TakeMoneyRecord type.
     * @member {number} type
     * @memberof TakeMoneyRecord
     * @instance
     */
    TakeMoneyRecord.prototype.type = 0;

    /**
     * TakeMoneyRecord account.
     * @member {string} account
     * @memberof TakeMoneyRecord
     * @instance
     */
    TakeMoneyRecord.prototype.account = "";

    /**
     * TakeMoneyRecord status.
     * @member {number} status
     * @memberof TakeMoneyRecord
     * @instance
     */
    TakeMoneyRecord.prototype.status = 0;

    /**
     * TakeMoneyRecord resultDesc.
     * @member {string} resultDesc
     * @memberof TakeMoneyRecord
     * @instance
     */
    TakeMoneyRecord.prototype.resultDesc = "";

    /**
     * TakeMoneyRecord serviceCharge.
     * @member {string} serviceCharge
     * @memberof TakeMoneyRecord
     * @instance
     */
    TakeMoneyRecord.prototype.serviceCharge = "";

    /**
     * TakeMoneyRecord realMoney.
     * @member {string} realMoney
     * @memberof TakeMoneyRecord
     * @instance
     */
    TakeMoneyRecord.prototype.realMoney = "";

    /**
     * Creates a new TakeMoneyRecord instance using the specified properties.
     * @function create
     * @memberof TakeMoneyRecord
     * @static
     * @param {ITakeMoneyRecord=} [properties] Properties to set
     * @returns {TakeMoneyRecord} TakeMoneyRecord instance
     */
    TakeMoneyRecord.create = function create(properties) {
        return new TakeMoneyRecord(properties);
    };

    /**
     * Encodes the specified TakeMoneyRecord message. Does not implicitly {@link TakeMoneyRecord.verify|verify} messages.
     * @function encode
     * @memberof TakeMoneyRecord
     * @static
     * @param {ITakeMoneyRecord} m TakeMoneyRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TakeMoneyRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.timeMs);
        w.uint32(16).int32(m.money);
        w.uint32(24).int32(m.type);
        w.uint32(34).string(m.account);
        w.uint32(40).int32(m.status);
        w.uint32(50).string(m.resultDesc);
        w.uint32(58).string(m.serviceCharge);
        w.uint32(66).string(m.realMoney);
        return w;
    };

    /**
     * Decodes a TakeMoneyRecord message from the specified reader or buffer.
     * @function decode
     * @memberof TakeMoneyRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TakeMoneyRecord} TakeMoneyRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TakeMoneyRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TakeMoneyRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.timeMs = r.string();
                break;
            case 2:
                m.money = r.int32();
                break;
            case 3:
                m.type = r.int32();
                break;
            case 4:
                m.account = r.string();
                break;
            case 5:
                m.status = r.int32();
                break;
            case 6:
                m.resultDesc = r.string();
                break;
            case 7:
                m.serviceCharge = r.string();
                break;
            case 8:
                m.realMoney = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("timeMs"))
            throw $util.ProtocolError("missing required 'timeMs'", { instance: m });
        if (!m.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("account"))
            throw $util.ProtocolError("missing required 'account'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("resultDesc"))
            throw $util.ProtocolError("missing required 'resultDesc'", { instance: m });
        if (!m.hasOwnProperty("serviceCharge"))
            throw $util.ProtocolError("missing required 'serviceCharge'", { instance: m });
        if (!m.hasOwnProperty("realMoney"))
            throw $util.ProtocolError("missing required 'realMoney'", { instance: m });
        return m;
    };

    return TakeMoneyRecord;
})();

$root.GetTakeMoneyRecordRsp = (function() {

    /**
     * Properties of a GetTakeMoneyRecordRsp.
     * @exports IGetTakeMoneyRecordRsp
     * @interface IGetTakeMoneyRecordRsp
     * @property {Array.<ITakeMoneyRecord>|null} [takeMoneyRecord] GetTakeMoneyRecordRsp takeMoneyRecord
     */

    /**
     * Constructs a new GetTakeMoneyRecordRsp.
     * @exports GetTakeMoneyRecordRsp
     * @classdesc Represents a GetTakeMoneyRecordRsp.
     * @implements IGetTakeMoneyRecordRsp
     * @constructor
     * @param {IGetTakeMoneyRecordRsp=} [p] Properties to set
     */
    function GetTakeMoneyRecordRsp(p) {
        this.takeMoneyRecord = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetTakeMoneyRecordRsp takeMoneyRecord.
     * @member {Array.<ITakeMoneyRecord>} takeMoneyRecord
     * @memberof GetTakeMoneyRecordRsp
     * @instance
     */
    GetTakeMoneyRecordRsp.prototype.takeMoneyRecord = $util.emptyArray;

    /**
     * Creates a new GetTakeMoneyRecordRsp instance using the specified properties.
     * @function create
     * @memberof GetTakeMoneyRecordRsp
     * @static
     * @param {IGetTakeMoneyRecordRsp=} [properties] Properties to set
     * @returns {GetTakeMoneyRecordRsp} GetTakeMoneyRecordRsp instance
     */
    GetTakeMoneyRecordRsp.create = function create(properties) {
        return new GetTakeMoneyRecordRsp(properties);
    };

    /**
     * Encodes the specified GetTakeMoneyRecordRsp message. Does not implicitly {@link GetTakeMoneyRecordRsp.verify|verify} messages.
     * @function encode
     * @memberof GetTakeMoneyRecordRsp
     * @static
     * @param {IGetTakeMoneyRecordRsp} m GetTakeMoneyRecordRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetTakeMoneyRecordRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.takeMoneyRecord != null && m.takeMoneyRecord.length) {
            for (var i = 0; i < m.takeMoneyRecord.length; ++i)
                $root.TakeMoneyRecord.encode(m.takeMoneyRecord[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GetTakeMoneyRecordRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetTakeMoneyRecordRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetTakeMoneyRecordRsp} GetTakeMoneyRecordRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetTakeMoneyRecordRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetTakeMoneyRecordRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.takeMoneyRecord && m.takeMoneyRecord.length))
                    m.takeMoneyRecord = [];
                m.takeMoneyRecord.push($root.TakeMoneyRecord.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GetTakeMoneyRecordRsp;
})();

$root.BangZhiFuBaoReq = (function() {

    /**
     * Properties of a BangZhiFuBaoReq.
     * @exports IBangZhiFuBaoReq
     * @interface IBangZhiFuBaoReq
     * @property {string} account BangZhiFuBaoReq account
     * @property {string} name BangZhiFuBaoReq name
     */

    /**
     * Constructs a new BangZhiFuBaoReq.
     * @exports BangZhiFuBaoReq
     * @classdesc Represents a BangZhiFuBaoReq.
     * @implements IBangZhiFuBaoReq
     * @constructor
     * @param {IBangZhiFuBaoReq=} [p] Properties to set
     */
    function BangZhiFuBaoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BangZhiFuBaoReq account.
     * @member {string} account
     * @memberof BangZhiFuBaoReq
     * @instance
     */
    BangZhiFuBaoReq.prototype.account = "";

    /**
     * BangZhiFuBaoReq name.
     * @member {string} name
     * @memberof BangZhiFuBaoReq
     * @instance
     */
    BangZhiFuBaoReq.prototype.name = "";

    /**
     * Creates a new BangZhiFuBaoReq instance using the specified properties.
     * @function create
     * @memberof BangZhiFuBaoReq
     * @static
     * @param {IBangZhiFuBaoReq=} [properties] Properties to set
     * @returns {BangZhiFuBaoReq} BangZhiFuBaoReq instance
     */
    BangZhiFuBaoReq.create = function create(properties) {
        return new BangZhiFuBaoReq(properties);
    };

    /**
     * Encodes the specified BangZhiFuBaoReq message. Does not implicitly {@link BangZhiFuBaoReq.verify|verify} messages.
     * @function encode
     * @memberof BangZhiFuBaoReq
     * @static
     * @param {IBangZhiFuBaoReq} m BangZhiFuBaoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BangZhiFuBaoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.account);
        w.uint32(18).string(m.name);
        return w;
    };

    /**
     * Decodes a BangZhiFuBaoReq message from the specified reader or buffer.
     * @function decode
     * @memberof BangZhiFuBaoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BangZhiFuBaoReq} BangZhiFuBaoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BangZhiFuBaoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BangZhiFuBaoReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.account = r.string();
                break;
            case 2:
                m.name = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("account"))
            throw $util.ProtocolError("missing required 'account'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        return m;
    };

    return BangZhiFuBaoReq;
})();

$root.BangZhiFuBaoRsp = (function() {

    /**
     * Properties of a BangZhiFuBaoRsp.
     * @exports IBangZhiFuBaoRsp
     * @interface IBangZhiFuBaoRsp
     * @property {boolean} success BangZhiFuBaoRsp success
     * @property {string} tip BangZhiFuBaoRsp tip
     */

    /**
     * Constructs a new BangZhiFuBaoRsp.
     * @exports BangZhiFuBaoRsp
     * @classdesc Represents a BangZhiFuBaoRsp.
     * @implements IBangZhiFuBaoRsp
     * @constructor
     * @param {IBangZhiFuBaoRsp=} [p] Properties to set
     */
    function BangZhiFuBaoRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BangZhiFuBaoRsp success.
     * @member {boolean} success
     * @memberof BangZhiFuBaoRsp
     * @instance
     */
    BangZhiFuBaoRsp.prototype.success = false;

    /**
     * BangZhiFuBaoRsp tip.
     * @member {string} tip
     * @memberof BangZhiFuBaoRsp
     * @instance
     */
    BangZhiFuBaoRsp.prototype.tip = "";

    /**
     * Creates a new BangZhiFuBaoRsp instance using the specified properties.
     * @function create
     * @memberof BangZhiFuBaoRsp
     * @static
     * @param {IBangZhiFuBaoRsp=} [properties] Properties to set
     * @returns {BangZhiFuBaoRsp} BangZhiFuBaoRsp instance
     */
    BangZhiFuBaoRsp.create = function create(properties) {
        return new BangZhiFuBaoRsp(properties);
    };

    /**
     * Encodes the specified BangZhiFuBaoRsp message. Does not implicitly {@link BangZhiFuBaoRsp.verify|verify} messages.
     * @function encode
     * @memberof BangZhiFuBaoRsp
     * @static
     * @param {IBangZhiFuBaoRsp} m BangZhiFuBaoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BangZhiFuBaoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a BangZhiFuBaoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof BangZhiFuBaoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BangZhiFuBaoRsp} BangZhiFuBaoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BangZhiFuBaoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BangZhiFuBaoRsp();
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

    return BangZhiFuBaoRsp;
})();

$root.GetZhiFuBaoInfoReq = (function() {

    /**
     * Properties of a GetZhiFuBaoInfoReq.
     * @exports IGetZhiFuBaoInfoReq
     * @interface IGetZhiFuBaoInfoReq
     */

    /**
     * Constructs a new GetZhiFuBaoInfoReq.
     * @exports GetZhiFuBaoInfoReq
     * @classdesc Represents a GetZhiFuBaoInfoReq.
     * @implements IGetZhiFuBaoInfoReq
     * @constructor
     * @param {IGetZhiFuBaoInfoReq=} [p] Properties to set
     */
    function GetZhiFuBaoInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetZhiFuBaoInfoReq instance using the specified properties.
     * @function create
     * @memberof GetZhiFuBaoInfoReq
     * @static
     * @param {IGetZhiFuBaoInfoReq=} [properties] Properties to set
     * @returns {GetZhiFuBaoInfoReq} GetZhiFuBaoInfoReq instance
     */
    GetZhiFuBaoInfoReq.create = function create(properties) {
        return new GetZhiFuBaoInfoReq(properties);
    };

    /**
     * Encodes the specified GetZhiFuBaoInfoReq message. Does not implicitly {@link GetZhiFuBaoInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetZhiFuBaoInfoReq
     * @static
     * @param {IGetZhiFuBaoInfoReq} m GetZhiFuBaoInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhiFuBaoInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetZhiFuBaoInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetZhiFuBaoInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetZhiFuBaoInfoReq} GetZhiFuBaoInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhiFuBaoInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetZhiFuBaoInfoReq();
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

    return GetZhiFuBaoInfoReq;
})();

$root.GetZhiFuBaoInfoRsp = (function() {

    /**
     * Properties of a GetZhiFuBaoInfoRsp.
     * @exports IGetZhiFuBaoInfoRsp
     * @interface IGetZhiFuBaoInfoRsp
     * @property {string} account GetZhiFuBaoInfoRsp account
     * @property {string} name GetZhiFuBaoInfoRsp name
     * @property {string} handlingFee GetZhiFuBaoInfoRsp handlingFee
     */

    /**
     * Constructs a new GetZhiFuBaoInfoRsp.
     * @exports GetZhiFuBaoInfoRsp
     * @classdesc Represents a GetZhiFuBaoInfoRsp.
     * @implements IGetZhiFuBaoInfoRsp
     * @constructor
     * @param {IGetZhiFuBaoInfoRsp=} [p] Properties to set
     */
    function GetZhiFuBaoInfoRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetZhiFuBaoInfoRsp account.
     * @member {string} account
     * @memberof GetZhiFuBaoInfoRsp
     * @instance
     */
    GetZhiFuBaoInfoRsp.prototype.account = "";

    /**
     * GetZhiFuBaoInfoRsp name.
     * @member {string} name
     * @memberof GetZhiFuBaoInfoRsp
     * @instance
     */
    GetZhiFuBaoInfoRsp.prototype.name = "";

    /**
     * GetZhiFuBaoInfoRsp handlingFee.
     * @member {string} handlingFee
     * @memberof GetZhiFuBaoInfoRsp
     * @instance
     */
    GetZhiFuBaoInfoRsp.prototype.handlingFee = "";

    /**
     * Creates a new GetZhiFuBaoInfoRsp instance using the specified properties.
     * @function create
     * @memberof GetZhiFuBaoInfoRsp
     * @static
     * @param {IGetZhiFuBaoInfoRsp=} [properties] Properties to set
     * @returns {GetZhiFuBaoInfoRsp} GetZhiFuBaoInfoRsp instance
     */
    GetZhiFuBaoInfoRsp.create = function create(properties) {
        return new GetZhiFuBaoInfoRsp(properties);
    };

    /**
     * Encodes the specified GetZhiFuBaoInfoRsp message. Does not implicitly {@link GetZhiFuBaoInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof GetZhiFuBaoInfoRsp
     * @static
     * @param {IGetZhiFuBaoInfoRsp} m GetZhiFuBaoInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetZhiFuBaoInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.account);
        w.uint32(18).string(m.name);
        w.uint32(26).string(m.handlingFee);
        return w;
    };

    /**
     * Decodes a GetZhiFuBaoInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetZhiFuBaoInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetZhiFuBaoInfoRsp} GetZhiFuBaoInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetZhiFuBaoInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetZhiFuBaoInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.account = r.string();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.handlingFee = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("account"))
            throw $util.ProtocolError("missing required 'account'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("handlingFee"))
            throw $util.ProtocolError("missing required 'handlingFee'", { instance: m });
        return m;
    };

    return GetZhiFuBaoInfoRsp;
})();

$root.BangBankCardReq = (function() {

    /**
     * Properties of a BangBankCardReq.
     * @exports IBangBankCardReq
     * @interface IBangBankCardReq
     * @property {string} account BangBankCardReq account
     * @property {string} name BangBankCardReq name
     * @property {string} idCard BangBankCardReq idCard
     * @property {string} kaihuhang BangBankCardReq kaihuhang
     * @property {string} kaihuAddress BangBankCardReq kaihuAddress
     * @property {string} bankName BangBankCardReq bankName
     * @property {string} tel BangBankCardReq tel
     * @property {number} bankId BangBankCardReq bankId
     */

    /**
     * Constructs a new BangBankCardReq.
     * @exports BangBankCardReq
     * @classdesc Represents a BangBankCardReq.
     * @implements IBangBankCardReq
     * @constructor
     * @param {IBangBankCardReq=} [p] Properties to set
     */
    function BangBankCardReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BangBankCardReq account.
     * @member {string} account
     * @memberof BangBankCardReq
     * @instance
     */
    BangBankCardReq.prototype.account = "";

    /**
     * BangBankCardReq name.
     * @member {string} name
     * @memberof BangBankCardReq
     * @instance
     */
    BangBankCardReq.prototype.name = "";

    /**
     * BangBankCardReq idCard.
     * @member {string} idCard
     * @memberof BangBankCardReq
     * @instance
     */
    BangBankCardReq.prototype.idCard = "";

    /**
     * BangBankCardReq kaihuhang.
     * @member {string} kaihuhang
     * @memberof BangBankCardReq
     * @instance
     */
    BangBankCardReq.prototype.kaihuhang = "";

    /**
     * BangBankCardReq kaihuAddress.
     * @member {string} kaihuAddress
     * @memberof BangBankCardReq
     * @instance
     */
    BangBankCardReq.prototype.kaihuAddress = "";

    /**
     * BangBankCardReq bankName.
     * @member {string} bankName
     * @memberof BangBankCardReq
     * @instance
     */
    BangBankCardReq.prototype.bankName = "";

    /**
     * BangBankCardReq tel.
     * @member {string} tel
     * @memberof BangBankCardReq
     * @instance
     */
    BangBankCardReq.prototype.tel = "";

    /**
     * BangBankCardReq bankId.
     * @member {number} bankId
     * @memberof BangBankCardReq
     * @instance
     */
    BangBankCardReq.prototype.bankId = 0;

    /**
     * Creates a new BangBankCardReq instance using the specified properties.
     * @function create
     * @memberof BangBankCardReq
     * @static
     * @param {IBangBankCardReq=} [properties] Properties to set
     * @returns {BangBankCardReq} BangBankCardReq instance
     */
    BangBankCardReq.create = function create(properties) {
        return new BangBankCardReq(properties);
    };

    /**
     * Encodes the specified BangBankCardReq message. Does not implicitly {@link BangBankCardReq.verify|verify} messages.
     * @function encode
     * @memberof BangBankCardReq
     * @static
     * @param {IBangBankCardReq} m BangBankCardReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BangBankCardReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.account);
        w.uint32(18).string(m.name);
        w.uint32(26).string(m.idCard);
        w.uint32(34).string(m.kaihuhang);
        w.uint32(42).string(m.kaihuAddress);
        w.uint32(50).string(m.bankName);
        w.uint32(58).string(m.tel);
        w.uint32(64).int32(m.bankId);
        return w;
    };

    /**
     * Decodes a BangBankCardReq message from the specified reader or buffer.
     * @function decode
     * @memberof BangBankCardReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BangBankCardReq} BangBankCardReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BangBankCardReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BangBankCardReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.account = r.string();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.idCard = r.string();
                break;
            case 4:
                m.kaihuhang = r.string();
                break;
            case 5:
                m.kaihuAddress = r.string();
                break;
            case 6:
                m.bankName = r.string();
                break;
            case 7:
                m.tel = r.string();
                break;
            case 8:
                m.bankId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("account"))
            throw $util.ProtocolError("missing required 'account'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("idCard"))
            throw $util.ProtocolError("missing required 'idCard'", { instance: m });
        if (!m.hasOwnProperty("kaihuhang"))
            throw $util.ProtocolError("missing required 'kaihuhang'", { instance: m });
        if (!m.hasOwnProperty("kaihuAddress"))
            throw $util.ProtocolError("missing required 'kaihuAddress'", { instance: m });
        if (!m.hasOwnProperty("bankName"))
            throw $util.ProtocolError("missing required 'bankName'", { instance: m });
        if (!m.hasOwnProperty("tel"))
            throw $util.ProtocolError("missing required 'tel'", { instance: m });
        if (!m.hasOwnProperty("bankId"))
            throw $util.ProtocolError("missing required 'bankId'", { instance: m });
        return m;
    };

    return BangBankCardReq;
})();

$root.BangBankCardRsp = (function() {

    /**
     * Properties of a BangBankCardRsp.
     * @exports IBangBankCardRsp
     * @interface IBangBankCardRsp
     * @property {boolean} success BangBankCardRsp success
     * @property {string} tip BangBankCardRsp tip
     */

    /**
     * Constructs a new BangBankCardRsp.
     * @exports BangBankCardRsp
     * @classdesc Represents a BangBankCardRsp.
     * @implements IBangBankCardRsp
     * @constructor
     * @param {IBangBankCardRsp=} [p] Properties to set
     */
    function BangBankCardRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BangBankCardRsp success.
     * @member {boolean} success
     * @memberof BangBankCardRsp
     * @instance
     */
    BangBankCardRsp.prototype.success = false;

    /**
     * BangBankCardRsp tip.
     * @member {string} tip
     * @memberof BangBankCardRsp
     * @instance
     */
    BangBankCardRsp.prototype.tip = "";

    /**
     * Creates a new BangBankCardRsp instance using the specified properties.
     * @function create
     * @memberof BangBankCardRsp
     * @static
     * @param {IBangBankCardRsp=} [properties] Properties to set
     * @returns {BangBankCardRsp} BangBankCardRsp instance
     */
    BangBankCardRsp.create = function create(properties) {
        return new BangBankCardRsp(properties);
    };

    /**
     * Encodes the specified BangBankCardRsp message. Does not implicitly {@link BangBankCardRsp.verify|verify} messages.
     * @function encode
     * @memberof BangBankCardRsp
     * @static
     * @param {IBangBankCardRsp} m BangBankCardRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BangBankCardRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tip);
        return w;
    };

    /**
     * Decodes a BangBankCardRsp message from the specified reader or buffer.
     * @function decode
     * @memberof BangBankCardRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BangBankCardRsp} BangBankCardRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BangBankCardRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BangBankCardRsp();
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

    return BangBankCardRsp;
})();

$root.GetBankCardInfoReq = (function() {

    /**
     * Properties of a GetBankCardInfoReq.
     * @exports IGetBankCardInfoReq
     * @interface IGetBankCardInfoReq
     */

    /**
     * Constructs a new GetBankCardInfoReq.
     * @exports GetBankCardInfoReq
     * @classdesc Represents a GetBankCardInfoReq.
     * @implements IGetBankCardInfoReq
     * @constructor
     * @param {IGetBankCardInfoReq=} [p] Properties to set
     */
    function GetBankCardInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetBankCardInfoReq instance using the specified properties.
     * @function create
     * @memberof GetBankCardInfoReq
     * @static
     * @param {IGetBankCardInfoReq=} [properties] Properties to set
     * @returns {GetBankCardInfoReq} GetBankCardInfoReq instance
     */
    GetBankCardInfoReq.create = function create(properties) {
        return new GetBankCardInfoReq(properties);
    };

    /**
     * Encodes the specified GetBankCardInfoReq message. Does not implicitly {@link GetBankCardInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetBankCardInfoReq
     * @static
     * @param {IGetBankCardInfoReq} m GetBankCardInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetBankCardInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetBankCardInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetBankCardInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetBankCardInfoReq} GetBankCardInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetBankCardInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetBankCardInfoReq();
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

    return GetBankCardInfoReq;
})();

$root.GetBankCardInfoRsp = (function() {

    /**
     * Properties of a GetBankCardInfoRsp.
     * @exports IGetBankCardInfoRsp
     * @interface IGetBankCardInfoRsp
     * @property {string} account GetBankCardInfoRsp account
     * @property {string} name GetBankCardInfoRsp name
     * @property {string} idCard GetBankCardInfoRsp idCard
     * @property {string} kaihuhang GetBankCardInfoRsp kaihuhang
     * @property {string} kaihuAddress GetBankCardInfoRsp kaihuAddress
     * @property {string} bankName GetBankCardInfoRsp bankName
     * @property {string} tel GetBankCardInfoRsp tel
     * @property {number} bankId GetBankCardInfoRsp bankId
     * @property {string} handlingFee GetBankCardInfoRsp handlingFee
     */

    /**
     * Constructs a new GetBankCardInfoRsp.
     * @exports GetBankCardInfoRsp
     * @classdesc Represents a GetBankCardInfoRsp.
     * @implements IGetBankCardInfoRsp
     * @constructor
     * @param {IGetBankCardInfoRsp=} [p] Properties to set
     */
    function GetBankCardInfoRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetBankCardInfoRsp account.
     * @member {string} account
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.account = "";

    /**
     * GetBankCardInfoRsp name.
     * @member {string} name
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.name = "";

    /**
     * GetBankCardInfoRsp idCard.
     * @member {string} idCard
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.idCard = "";

    /**
     * GetBankCardInfoRsp kaihuhang.
     * @member {string} kaihuhang
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.kaihuhang = "";

    /**
     * GetBankCardInfoRsp kaihuAddress.
     * @member {string} kaihuAddress
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.kaihuAddress = "";

    /**
     * GetBankCardInfoRsp bankName.
     * @member {string} bankName
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.bankName = "";

    /**
     * GetBankCardInfoRsp tel.
     * @member {string} tel
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.tel = "";

    /**
     * GetBankCardInfoRsp bankId.
     * @member {number} bankId
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.bankId = 0;

    /**
     * GetBankCardInfoRsp handlingFee.
     * @member {string} handlingFee
     * @memberof GetBankCardInfoRsp
     * @instance
     */
    GetBankCardInfoRsp.prototype.handlingFee = "";

    /**
     * Creates a new GetBankCardInfoRsp instance using the specified properties.
     * @function create
     * @memberof GetBankCardInfoRsp
     * @static
     * @param {IGetBankCardInfoRsp=} [properties] Properties to set
     * @returns {GetBankCardInfoRsp} GetBankCardInfoRsp instance
     */
    GetBankCardInfoRsp.create = function create(properties) {
        return new GetBankCardInfoRsp(properties);
    };

    /**
     * Encodes the specified GetBankCardInfoRsp message. Does not implicitly {@link GetBankCardInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof GetBankCardInfoRsp
     * @static
     * @param {IGetBankCardInfoRsp} m GetBankCardInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetBankCardInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.account);
        w.uint32(18).string(m.name);
        w.uint32(26).string(m.idCard);
        w.uint32(34).string(m.kaihuhang);
        w.uint32(42).string(m.kaihuAddress);
        w.uint32(50).string(m.bankName);
        w.uint32(58).string(m.tel);
        w.uint32(64).int32(m.bankId);
        w.uint32(74).string(m.handlingFee);
        return w;
    };

    /**
     * Decodes a GetBankCardInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetBankCardInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetBankCardInfoRsp} GetBankCardInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetBankCardInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetBankCardInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.account = r.string();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.idCard = r.string();
                break;
            case 4:
                m.kaihuhang = r.string();
                break;
            case 5:
                m.kaihuAddress = r.string();
                break;
            case 6:
                m.bankName = r.string();
                break;
            case 7:
                m.tel = r.string();
                break;
            case 8:
                m.bankId = r.int32();
                break;
            case 9:
                m.handlingFee = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("account"))
            throw $util.ProtocolError("missing required 'account'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("idCard"))
            throw $util.ProtocolError("missing required 'idCard'", { instance: m });
        if (!m.hasOwnProperty("kaihuhang"))
            throw $util.ProtocolError("missing required 'kaihuhang'", { instance: m });
        if (!m.hasOwnProperty("kaihuAddress"))
            throw $util.ProtocolError("missing required 'kaihuAddress'", { instance: m });
        if (!m.hasOwnProperty("bankName"))
            throw $util.ProtocolError("missing required 'bankName'", { instance: m });
        if (!m.hasOwnProperty("tel"))
            throw $util.ProtocolError("missing required 'tel'", { instance: m });
        if (!m.hasOwnProperty("bankId"))
            throw $util.ProtocolError("missing required 'bankId'", { instance: m });
        if (!m.hasOwnProperty("handlingFee"))
            throw $util.ProtocolError("missing required 'handlingFee'", { instance: m });
        return m;
    };

    return GetBankCardInfoRsp;
})();

$root.BankInfoPro = (function() {

    /**
     * Properties of a BankInfoPro.
     * @exports IBankInfoPro
     * @interface IBankInfoPro
     * @property {number} bankId BankInfoPro bankId
     * @property {string} bankName BankInfoPro bankName
     */

    /**
     * Constructs a new BankInfoPro.
     * @exports BankInfoPro
     * @classdesc Represents a BankInfoPro.
     * @implements IBankInfoPro
     * @constructor
     * @param {IBankInfoPro=} [p] Properties to set
     */
    function BankInfoPro(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BankInfoPro bankId.
     * @member {number} bankId
     * @memberof BankInfoPro
     * @instance
     */
    BankInfoPro.prototype.bankId = 0;

    /**
     * BankInfoPro bankName.
     * @member {string} bankName
     * @memberof BankInfoPro
     * @instance
     */
    BankInfoPro.prototype.bankName = "";

    /**
     * Creates a new BankInfoPro instance using the specified properties.
     * @function create
     * @memberof BankInfoPro
     * @static
     * @param {IBankInfoPro=} [properties] Properties to set
     * @returns {BankInfoPro} BankInfoPro instance
     */
    BankInfoPro.create = function create(properties) {
        return new BankInfoPro(properties);
    };

    /**
     * Encodes the specified BankInfoPro message. Does not implicitly {@link BankInfoPro.verify|verify} messages.
     * @function encode
     * @memberof BankInfoPro
     * @static
     * @param {IBankInfoPro} m BankInfoPro message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BankInfoPro.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.bankId);
        w.uint32(18).string(m.bankName);
        return w;
    };

    /**
     * Decodes a BankInfoPro message from the specified reader or buffer.
     * @function decode
     * @memberof BankInfoPro
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BankInfoPro} BankInfoPro
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BankInfoPro.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BankInfoPro();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bankId = r.int32();
                break;
            case 2:
                m.bankName = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bankId"))
            throw $util.ProtocolError("missing required 'bankId'", { instance: m });
        if (!m.hasOwnProperty("bankName"))
            throw $util.ProtocolError("missing required 'bankName'", { instance: m });
        return m;
    };

    return BankInfoPro;
})();

$root.GetCanUseBankInfoReq = (function() {

    /**
     * Properties of a GetCanUseBankInfoReq.
     * @exports IGetCanUseBankInfoReq
     * @interface IGetCanUseBankInfoReq
     */

    /**
     * Constructs a new GetCanUseBankInfoReq.
     * @exports GetCanUseBankInfoReq
     * @classdesc Represents a GetCanUseBankInfoReq.
     * @implements IGetCanUseBankInfoReq
     * @constructor
     * @param {IGetCanUseBankInfoReq=} [p] Properties to set
     */
    function GetCanUseBankInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetCanUseBankInfoReq instance using the specified properties.
     * @function create
     * @memberof GetCanUseBankInfoReq
     * @static
     * @param {IGetCanUseBankInfoReq=} [properties] Properties to set
     * @returns {GetCanUseBankInfoReq} GetCanUseBankInfoReq instance
     */
    GetCanUseBankInfoReq.create = function create(properties) {
        return new GetCanUseBankInfoReq(properties);
    };

    /**
     * Encodes the specified GetCanUseBankInfoReq message. Does not implicitly {@link GetCanUseBankInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetCanUseBankInfoReq
     * @static
     * @param {IGetCanUseBankInfoReq} m GetCanUseBankInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCanUseBankInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetCanUseBankInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetCanUseBankInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetCanUseBankInfoReq} GetCanUseBankInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCanUseBankInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetCanUseBankInfoReq();
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

    return GetCanUseBankInfoReq;
})();

$root.GetCanUseBankInfoRsp = (function() {

    /**
     * Properties of a GetCanUseBankInfoRsp.
     * @exports IGetCanUseBankInfoRsp
     * @interface IGetCanUseBankInfoRsp
     * @property {Array.<IBankInfoPro>|null} [bankInfos] GetCanUseBankInfoRsp bankInfos
     */

    /**
     * Constructs a new GetCanUseBankInfoRsp.
     * @exports GetCanUseBankInfoRsp
     * @classdesc Represents a GetCanUseBankInfoRsp.
     * @implements IGetCanUseBankInfoRsp
     * @constructor
     * @param {IGetCanUseBankInfoRsp=} [p] Properties to set
     */
    function GetCanUseBankInfoRsp(p) {
        this.bankInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetCanUseBankInfoRsp bankInfos.
     * @member {Array.<IBankInfoPro>} bankInfos
     * @memberof GetCanUseBankInfoRsp
     * @instance
     */
    GetCanUseBankInfoRsp.prototype.bankInfos = $util.emptyArray;

    /**
     * Creates a new GetCanUseBankInfoRsp instance using the specified properties.
     * @function create
     * @memberof GetCanUseBankInfoRsp
     * @static
     * @param {IGetCanUseBankInfoRsp=} [properties] Properties to set
     * @returns {GetCanUseBankInfoRsp} GetCanUseBankInfoRsp instance
     */
    GetCanUseBankInfoRsp.create = function create(properties) {
        return new GetCanUseBankInfoRsp(properties);
    };

    /**
     * Encodes the specified GetCanUseBankInfoRsp message. Does not implicitly {@link GetCanUseBankInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof GetCanUseBankInfoRsp
     * @static
     * @param {IGetCanUseBankInfoRsp} m GetCanUseBankInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCanUseBankInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bankInfos != null && m.bankInfos.length) {
            for (var i = 0; i < m.bankInfos.length; ++i)
                $root.BankInfoPro.encode(m.bankInfos[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GetCanUseBankInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetCanUseBankInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetCanUseBankInfoRsp} GetCanUseBankInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCanUseBankInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetCanUseBankInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.bankInfos && m.bankInfos.length))
                    m.bankInfos = [];
                m.bankInfos.push($root.BankInfoPro.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GetCanUseBankInfoRsp;
})();

$root.GetWithdrawPassageReq = (function() {

    /**
     * Properties of a GetWithdrawPassageReq.
     * @exports IGetWithdrawPassageReq
     * @interface IGetWithdrawPassageReq
     */

    /**
     * Constructs a new GetWithdrawPassageReq.
     * @exports GetWithdrawPassageReq
     * @classdesc Represents a GetWithdrawPassageReq.
     * @implements IGetWithdrawPassageReq
     * @constructor
     * @param {IGetWithdrawPassageReq=} [p] Properties to set
     */
    function GetWithdrawPassageReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new GetWithdrawPassageReq instance using the specified properties.
     * @function create
     * @memberof GetWithdrawPassageReq
     * @static
     * @param {IGetWithdrawPassageReq=} [properties] Properties to set
     * @returns {GetWithdrawPassageReq} GetWithdrawPassageReq instance
     */
    GetWithdrawPassageReq.create = function create(properties) {
        return new GetWithdrawPassageReq(properties);
    };

    /**
     * Encodes the specified GetWithdrawPassageReq message. Does not implicitly {@link GetWithdrawPassageReq.verify|verify} messages.
     * @function encode
     * @memberof GetWithdrawPassageReq
     * @static
     * @param {IGetWithdrawPassageReq} m GetWithdrawPassageReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetWithdrawPassageReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a GetWithdrawPassageReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetWithdrawPassageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetWithdrawPassageReq} GetWithdrawPassageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetWithdrawPassageReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetWithdrawPassageReq();
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

    return GetWithdrawPassageReq;
})();

$root.GetWithdrawPassageRsp = (function() {

    /**
     * Properties of a GetWithdrawPassageRsp.
     * @exports IGetWithdrawPassageRsp
     * @interface IGetWithdrawPassageRsp
     * @property {boolean} hasAli GetWithdrawPassageRsp hasAli
     * @property {boolean} hasBank GetWithdrawPassageRsp hasBank
     */

    /**
     * Constructs a new GetWithdrawPassageRsp.
     * @exports GetWithdrawPassageRsp
     * @classdesc Represents a GetWithdrawPassageRsp.
     * @implements IGetWithdrawPassageRsp
     * @constructor
     * @param {IGetWithdrawPassageRsp=} [p] Properties to set
     */
    function GetWithdrawPassageRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GetWithdrawPassageRsp hasAli.
     * @member {boolean} hasAli
     * @memberof GetWithdrawPassageRsp
     * @instance
     */
    GetWithdrawPassageRsp.prototype.hasAli = false;

    /**
     * GetWithdrawPassageRsp hasBank.
     * @member {boolean} hasBank
     * @memberof GetWithdrawPassageRsp
     * @instance
     */
    GetWithdrawPassageRsp.prototype.hasBank = false;

    /**
     * Creates a new GetWithdrawPassageRsp instance using the specified properties.
     * @function create
     * @memberof GetWithdrawPassageRsp
     * @static
     * @param {IGetWithdrawPassageRsp=} [properties] Properties to set
     * @returns {GetWithdrawPassageRsp} GetWithdrawPassageRsp instance
     */
    GetWithdrawPassageRsp.create = function create(properties) {
        return new GetWithdrawPassageRsp(properties);
    };

    /**
     * Encodes the specified GetWithdrawPassageRsp message. Does not implicitly {@link GetWithdrawPassageRsp.verify|verify} messages.
     * @function encode
     * @memberof GetWithdrawPassageRsp
     * @static
     * @param {IGetWithdrawPassageRsp} m GetWithdrawPassageRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetWithdrawPassageRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.hasAli);
        w.uint32(16).bool(m.hasBank);
        return w;
    };

    /**
     * Decodes a GetWithdrawPassageRsp message from the specified reader or buffer.
     * @function decode
     * @memberof GetWithdrawPassageRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GetWithdrawPassageRsp} GetWithdrawPassageRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetWithdrawPassageRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GetWithdrawPassageRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.hasAli = r.bool();
                break;
            case 2:
                m.hasBank = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("hasAli"))
            throw $util.ProtocolError("missing required 'hasAli'", { instance: m });
        if (!m.hasOwnProperty("hasBank"))
            throw $util.ProtocolError("missing required 'hasBank'", { instance: m });
        return m;
    };

    return GetWithdrawPassageRsp;
})();

$root.withDrawCreateOrder = (function() {

    /**
     * Properties of a withDrawCreateOrder.
     * @exports IwithDrawCreateOrder
     * @interface IwithDrawCreateOrder
     * @property {string} playerid withDrawCreateOrder playerid
     * @property {string} account withDrawCreateOrder account
     * @property {string} name withDrawCreateOrder name
     * @property {number} type withDrawCreateOrder type
     * @property {number} bankid withDrawCreateOrder bankid
     * @property {string} tel withDrawCreateOrder tel
     * @property {number} takeMoney withDrawCreateOrder takeMoney
     * @property {string} host withDrawCreateOrder host
     * @property {number} port withDrawCreateOrder port
     * @property {boolean} shenhe withDrawCreateOrder shenhe
     * @property {number} shouxufei withDrawCreateOrder shouxufei
     * @property {string} note withDrawCreateOrder note
     */

    /**
     * Constructs a new withDrawCreateOrder.
     * @exports withDrawCreateOrder
     * @classdesc Represents a withDrawCreateOrder.
     * @implements IwithDrawCreateOrder
     * @constructor
     * @param {IwithDrawCreateOrder=} [p] Properties to set
     */
    function withDrawCreateOrder(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * withDrawCreateOrder playerid.
     * @member {string} playerid
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.playerid = "";

    /**
     * withDrawCreateOrder account.
     * @member {string} account
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.account = "";

    /**
     * withDrawCreateOrder name.
     * @member {string} name
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.name = "";

    /**
     * withDrawCreateOrder type.
     * @member {number} type
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.type = 0;

    /**
     * withDrawCreateOrder bankid.
     * @member {number} bankid
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.bankid = 0;

    /**
     * withDrawCreateOrder tel.
     * @member {string} tel
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.tel = "";

    /**
     * withDrawCreateOrder takeMoney.
     * @member {number} takeMoney
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.takeMoney = 0;

    /**
     * withDrawCreateOrder host.
     * @member {string} host
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.host = "";

    /**
     * withDrawCreateOrder port.
     * @member {number} port
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.port = 0;

    /**
     * withDrawCreateOrder shenhe.
     * @member {boolean} shenhe
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.shenhe = false;

    /**
     * withDrawCreateOrder shouxufei.
     * @member {number} shouxufei
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.shouxufei = 0;

    /**
     * withDrawCreateOrder note.
     * @member {string} note
     * @memberof withDrawCreateOrder
     * @instance
     */
    withDrawCreateOrder.prototype.note = "";

    /**
     * Creates a new withDrawCreateOrder instance using the specified properties.
     * @function create
     * @memberof withDrawCreateOrder
     * @static
     * @param {IwithDrawCreateOrder=} [properties] Properties to set
     * @returns {withDrawCreateOrder} withDrawCreateOrder instance
     */
    withDrawCreateOrder.create = function create(properties) {
        return new withDrawCreateOrder(properties);
    };

    /**
     * Encodes the specified withDrawCreateOrder message. Does not implicitly {@link withDrawCreateOrder.verify|verify} messages.
     * @function encode
     * @memberof withDrawCreateOrder
     * @static
     * @param {IwithDrawCreateOrder} m withDrawCreateOrder message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    withDrawCreateOrder.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerid);
        w.uint32(18).string(m.account);
        w.uint32(26).string(m.name);
        w.uint32(32).int32(m.type);
        w.uint32(40).int32(m.bankid);
        w.uint32(50).string(m.tel);
        w.uint32(56).int32(m.takeMoney);
        w.uint32(66).string(m.host);
        w.uint32(72).int32(m.port);
        w.uint32(80).bool(m.shenhe);
        w.uint32(89).double(m.shouxufei);
        w.uint32(98).string(m.note);
        return w;
    };

    /**
     * Decodes a withDrawCreateOrder message from the specified reader or buffer.
     * @function decode
     * @memberof withDrawCreateOrder
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {withDrawCreateOrder} withDrawCreateOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    withDrawCreateOrder.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.withDrawCreateOrder();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerid = r.string();
                break;
            case 2:
                m.account = r.string();
                break;
            case 3:
                m.name = r.string();
                break;
            case 4:
                m.type = r.int32();
                break;
            case 5:
                m.bankid = r.int32();
                break;
            case 6:
                m.tel = r.string();
                break;
            case 7:
                m.takeMoney = r.int32();
                break;
            case 8:
                m.host = r.string();
                break;
            case 9:
                m.port = r.int32();
                break;
            case 10:
                m.shenhe = r.bool();
                break;
            case 11:
                m.shouxufei = r.double();
                break;
            case 12:
                m.note = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerid"))
            throw $util.ProtocolError("missing required 'playerid'", { instance: m });
        if (!m.hasOwnProperty("account"))
            throw $util.ProtocolError("missing required 'account'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("bankid"))
            throw $util.ProtocolError("missing required 'bankid'", { instance: m });
        if (!m.hasOwnProperty("tel"))
            throw $util.ProtocolError("missing required 'tel'", { instance: m });
        if (!m.hasOwnProperty("takeMoney"))
            throw $util.ProtocolError("missing required 'takeMoney'", { instance: m });
        if (!m.hasOwnProperty("host"))
            throw $util.ProtocolError("missing required 'host'", { instance: m });
        if (!m.hasOwnProperty("port"))
            throw $util.ProtocolError("missing required 'port'", { instance: m });
        if (!m.hasOwnProperty("shenhe"))
            throw $util.ProtocolError("missing required 'shenhe'", { instance: m });
        if (!m.hasOwnProperty("shouxufei"))
            throw $util.ProtocolError("missing required 'shouxufei'", { instance: m });
        if (!m.hasOwnProperty("note"))
            throw $util.ProtocolError("missing required 'note'", { instance: m });
        return m;
    };

    return withDrawCreateOrder;
})();

$root.withDrawOrder = (function() {

    /**
     * Properties of a withDrawOrder.
     * @exports IwithDrawOrder
     * @interface IwithDrawOrder
     * @property {string} playerid withDrawOrder playerid
     * @property {string} orderID withDrawOrder orderID
     * @property {boolean} backGold withDrawOrder backGold
     * @property {number} amount withDrawOrder amount
     * @property {boolean} email withDrawOrder email
     * @property {string|null} [content] withDrawOrder content
     * @property {string|null} [photoUrl] withDrawOrder photoUrl
     * @property {string|null} [sendPlayerName] withDrawOrder sendPlayerName
     * @property {string|null} [title] withDrawOrder title
     * @property {string|null} [toPlayerId] withDrawOrder toPlayerId
     */

    /**
     * Constructs a new withDrawOrder.
     * @exports withDrawOrder
     * @classdesc Represents a withDrawOrder.
     * @implements IwithDrawOrder
     * @constructor
     * @param {IwithDrawOrder=} [p] Properties to set
     */
    function withDrawOrder(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * withDrawOrder playerid.
     * @member {string} playerid
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.playerid = "";

    /**
     * withDrawOrder orderID.
     * @member {string} orderID
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.orderID = "";

    /**
     * withDrawOrder backGold.
     * @member {boolean} backGold
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.backGold = false;

    /**
     * withDrawOrder amount.
     * @member {number} amount
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.amount = 0;

    /**
     * withDrawOrder email.
     * @member {boolean} email
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.email = false;

    /**
     * withDrawOrder content.
     * @member {string} content
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.content = "";

    /**
     * withDrawOrder photoUrl.
     * @member {string} photoUrl
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.photoUrl = "";

    /**
     * withDrawOrder sendPlayerName.
     * @member {string} sendPlayerName
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.sendPlayerName = "";

    /**
     * withDrawOrder title.
     * @member {string} title
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.title = "";

    /**
     * withDrawOrder toPlayerId.
     * @member {string} toPlayerId
     * @memberof withDrawOrder
     * @instance
     */
    withDrawOrder.prototype.toPlayerId = "";

    /**
     * Creates a new withDrawOrder instance using the specified properties.
     * @function create
     * @memberof withDrawOrder
     * @static
     * @param {IwithDrawOrder=} [properties] Properties to set
     * @returns {withDrawOrder} withDrawOrder instance
     */
    withDrawOrder.create = function create(properties) {
        return new withDrawOrder(properties);
    };

    /**
     * Encodes the specified withDrawOrder message. Does not implicitly {@link withDrawOrder.verify|verify} messages.
     * @function encode
     * @memberof withDrawOrder
     * @static
     * @param {IwithDrawOrder} m withDrawOrder message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    withDrawOrder.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerid);
        w.uint32(18).string(m.orderID);
        w.uint32(24).bool(m.backGold);
        w.uint32(32).int32(m.amount);
        w.uint32(40).bool(m.email);
        if (m.content != null && m.hasOwnProperty("content"))
            w.uint32(50).string(m.content);
        if (m.photoUrl != null && m.hasOwnProperty("photoUrl"))
            w.uint32(58).string(m.photoUrl);
        if (m.sendPlayerName != null && m.hasOwnProperty("sendPlayerName"))
            w.uint32(66).string(m.sendPlayerName);
        if (m.title != null && m.hasOwnProperty("title"))
            w.uint32(74).string(m.title);
        if (m.toPlayerId != null && m.hasOwnProperty("toPlayerId"))
            w.uint32(82).string(m.toPlayerId);
        return w;
    };

    /**
     * Decodes a withDrawOrder message from the specified reader or buffer.
     * @function decode
     * @memberof withDrawOrder
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {withDrawOrder} withDrawOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    withDrawOrder.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.withDrawOrder();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerid = r.string();
                break;
            case 2:
                m.orderID = r.string();
                break;
            case 3:
                m.backGold = r.bool();
                break;
            case 4:
                m.amount = r.int32();
                break;
            case 5:
                m.email = r.bool();
                break;
            case 6:
                m.content = r.string();
                break;
            case 7:
                m.photoUrl = r.string();
                break;
            case 8:
                m.sendPlayerName = r.string();
                break;
            case 9:
                m.title = r.string();
                break;
            case 10:
                m.toPlayerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerid"))
            throw $util.ProtocolError("missing required 'playerid'", { instance: m });
        if (!m.hasOwnProperty("orderID"))
            throw $util.ProtocolError("missing required 'orderID'", { instance: m });
        if (!m.hasOwnProperty("backGold"))
            throw $util.ProtocolError("missing required 'backGold'", { instance: m });
        if (!m.hasOwnProperty("amount"))
            throw $util.ProtocolError("missing required 'amount'", { instance: m });
        if (!m.hasOwnProperty("email"))
            throw $util.ProtocolError("missing required 'email'", { instance: m });
        return m;
    };

    return withDrawOrder;
})();

module.exports = $root;

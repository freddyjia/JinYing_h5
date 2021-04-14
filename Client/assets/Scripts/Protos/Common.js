/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Common || ($protobuf.roots.Common = {});

/**
 * DefaultButtonOption enum.
 * @exports DefaultButtonOption
 * @enum {string}
 * @property {number} ButtonClose=0 ButtonClose value
 * @property {number} ButtonOpenUI=1 ButtonOpenUI value
 * @property {number} ButtonSendScript=2 ButtonSendScript value
 * @property {number} ButtonCharge=3 ButtonCharge value
 */
$root.DefaultButtonOption = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ButtonClose"] = 0;
    values[valuesById[1] = "ButtonOpenUI"] = 1;
    values[valuesById[2] = "ButtonSendScript"] = 2;
    values[valuesById[3] = "ButtonCharge"] = 3;
    return values;
})();

/**
 * OpenUIType enum.
 * @exports OpenUIType
 * @enum {string}
 * @property {number} OpenNone=0 OpenNone value
 * @property {number} OpenRoleInfo=1 OpenRoleInfo value
 */
$root.OpenUIType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "OpenNone"] = 0;
    values[valuesById[1] = "OpenRoleInfo"] = 1;
    return values;
})();

$root.ChargeButtonData = (function() {

    /**
     * Properties of a ChargeButtonData.
     * @exports IChargeButtonData
     * @interface IChargeButtonData
     * @property {string} goodsId ChargeButtonData goodsId
     * @property {string} name ChargeButtonData name
     * @property {number} number ChargeButtonData number
     * @property {number|Long} price ChargeButtonData price
     */

    /**
     * Constructs a new ChargeButtonData.
     * @exports ChargeButtonData
     * @classdesc Represents a ChargeButtonData.
     * @implements IChargeButtonData
     * @constructor
     * @param {IChargeButtonData=} [p] Properties to set
     */
    function ChargeButtonData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChargeButtonData goodsId.
     * @member {string} goodsId
     * @memberof ChargeButtonData
     * @instance
     */
    ChargeButtonData.prototype.goodsId = "";

    /**
     * ChargeButtonData name.
     * @member {string} name
     * @memberof ChargeButtonData
     * @instance
     */
    ChargeButtonData.prototype.name = "";

    /**
     * ChargeButtonData number.
     * @member {number} number
     * @memberof ChargeButtonData
     * @instance
     */
    ChargeButtonData.prototype.number = 0;

    /**
     * ChargeButtonData price.
     * @member {number|Long} price
     * @memberof ChargeButtonData
     * @instance
     */
    ChargeButtonData.prototype.price = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ChargeButtonData instance using the specified properties.
     * @function create
     * @memberof ChargeButtonData
     * @static
     * @param {IChargeButtonData=} [properties] Properties to set
     * @returns {ChargeButtonData} ChargeButtonData instance
     */
    ChargeButtonData.create = function create(properties) {
        return new ChargeButtonData(properties);
    };

    /**
     * Encodes the specified ChargeButtonData message. Does not implicitly {@link ChargeButtonData.verify|verify} messages.
     * @function encode
     * @memberof ChargeButtonData
     * @static
     * @param {IChargeButtonData} m ChargeButtonData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChargeButtonData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.goodsId);
        w.uint32(18).string(m.name);
        w.uint32(24).int32(m.number);
        w.uint32(32).int64(m.price);
        return w;
    };

    /**
     * Decodes a ChargeButtonData message from the specified reader or buffer.
     * @function decode
     * @memberof ChargeButtonData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChargeButtonData} ChargeButtonData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChargeButtonData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChargeButtonData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.goodsId = r.string();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.number = r.int32();
                break;
            case 4:
                m.price = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("goodsId"))
            throw $util.ProtocolError("missing required 'goodsId'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("number"))
            throw $util.ProtocolError("missing required 'number'", { instance: m });
        if (!m.hasOwnProperty("price"))
            throw $util.ProtocolError("missing required 'price'", { instance: m });
        return m;
    };

    return ChargeButtonData;
})();

$root.SendScriptButtonData = (function() {

    /**
     * Properties of a SendScriptButtonData.
     * @exports ISendScriptButtonData
     * @interface ISendScriptButtonData
     * @property {number} scriptType SendScriptButtonData scriptType
     * @property {string} scriptContent SendScriptButtonData scriptContent
     */

    /**
     * Constructs a new SendScriptButtonData.
     * @exports SendScriptButtonData
     * @classdesc Represents a SendScriptButtonData.
     * @implements ISendScriptButtonData
     * @constructor
     * @param {ISendScriptButtonData=} [p] Properties to set
     */
    function SendScriptButtonData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SendScriptButtonData scriptType.
     * @member {number} scriptType
     * @memberof SendScriptButtonData
     * @instance
     */
    SendScriptButtonData.prototype.scriptType = 0;

    /**
     * SendScriptButtonData scriptContent.
     * @member {string} scriptContent
     * @memberof SendScriptButtonData
     * @instance
     */
    SendScriptButtonData.prototype.scriptContent = "";

    /**
     * Creates a new SendScriptButtonData instance using the specified properties.
     * @function create
     * @memberof SendScriptButtonData
     * @static
     * @param {ISendScriptButtonData=} [properties] Properties to set
     * @returns {SendScriptButtonData} SendScriptButtonData instance
     */
    SendScriptButtonData.create = function create(properties) {
        return new SendScriptButtonData(properties);
    };

    /**
     * Encodes the specified SendScriptButtonData message. Does not implicitly {@link SendScriptButtonData.verify|verify} messages.
     * @function encode
     * @memberof SendScriptButtonData
     * @static
     * @param {ISendScriptButtonData} m SendScriptButtonData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendScriptButtonData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.scriptType);
        w.uint32(18).string(m.scriptContent);
        return w;
    };

    /**
     * Decodes a SendScriptButtonData message from the specified reader or buffer.
     * @function decode
     * @memberof SendScriptButtonData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SendScriptButtonData} SendScriptButtonData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendScriptButtonData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SendScriptButtonData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.scriptType = r.int32();
                break;
            case 2:
                m.scriptContent = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("scriptType"))
            throw $util.ProtocolError("missing required 'scriptType'", { instance: m });
        if (!m.hasOwnProperty("scriptContent"))
            throw $util.ProtocolError("missing required 'scriptContent'", { instance: m });
        return m;
    };

    return SendScriptButtonData;
})();

$root.DefaultButton = (function() {

    /**
     * Properties of a DefaultButton.
     * @exports IDefaultButton
     * @interface IDefaultButton
     * @property {DefaultButtonOption} option DefaultButton option
     * @property {string} buttonName DefaultButton buttonName
     * @property {OpenUIType|null} [openUiType] DefaultButton openUiType
     * @property {ISendScriptButtonData|null} [script] DefaultButton script
     * @property {IChargeButtonData|null} [chargeData] DefaultButton chargeData
     */

    /**
     * Constructs a new DefaultButton.
     * @exports DefaultButton
     * @classdesc Represents a DefaultButton.
     * @implements IDefaultButton
     * @constructor
     * @param {IDefaultButton=} [p] Properties to set
     */
    function DefaultButton(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DefaultButton option.
     * @member {DefaultButtonOption} option
     * @memberof DefaultButton
     * @instance
     */
    DefaultButton.prototype.option = 0;

    /**
     * DefaultButton buttonName.
     * @member {string} buttonName
     * @memberof DefaultButton
     * @instance
     */
    DefaultButton.prototype.buttonName = "";

    /**
     * DefaultButton openUiType.
     * @member {OpenUIType} openUiType
     * @memberof DefaultButton
     * @instance
     */
    DefaultButton.prototype.openUiType = 0;

    /**
     * DefaultButton script.
     * @member {ISendScriptButtonData|null|undefined} script
     * @memberof DefaultButton
     * @instance
     */
    DefaultButton.prototype.script = null;

    /**
     * DefaultButton chargeData.
     * @member {IChargeButtonData|null|undefined} chargeData
     * @memberof DefaultButton
     * @instance
     */
    DefaultButton.prototype.chargeData = null;

    /**
     * Creates a new DefaultButton instance using the specified properties.
     * @function create
     * @memberof DefaultButton
     * @static
     * @param {IDefaultButton=} [properties] Properties to set
     * @returns {DefaultButton} DefaultButton instance
     */
    DefaultButton.create = function create(properties) {
        return new DefaultButton(properties);
    };

    /**
     * Encodes the specified DefaultButton message. Does not implicitly {@link DefaultButton.verify|verify} messages.
     * @function encode
     * @memberof DefaultButton
     * @static
     * @param {IDefaultButton} m DefaultButton message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DefaultButton.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.option);
        w.uint32(18).string(m.buttonName);
        if (m.openUiType != null && m.hasOwnProperty("openUiType"))
            w.uint32(24).int32(m.openUiType);
        if (m.script != null && m.hasOwnProperty("script"))
            $root.SendScriptButtonData.encode(m.script, w.uint32(34).fork()).ldelim();
        if (m.chargeData != null && m.hasOwnProperty("chargeData"))
            $root.ChargeButtonData.encode(m.chargeData, w.uint32(42).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a DefaultButton message from the specified reader or buffer.
     * @function decode
     * @memberof DefaultButton
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DefaultButton} DefaultButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DefaultButton.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DefaultButton();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.option = r.int32();
                break;
            case 2:
                m.buttonName = r.string();
                break;
            case 3:
                m.openUiType = r.int32();
                break;
            case 4:
                m.script = $root.SendScriptButtonData.decode(r, r.uint32());
                break;
            case 5:
                m.chargeData = $root.ChargeButtonData.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("option"))
            throw $util.ProtocolError("missing required 'option'", { instance: m });
        if (!m.hasOwnProperty("buttonName"))
            throw $util.ProtocolError("missing required 'buttonName'", { instance: m });
        return m;
    };

    return DefaultButton;
})();

$root.CommonTipsRes = (function() {

    /**
     * Properties of a CommonTipsRes.
     * @exports ICommonTipsRes
     * @interface ICommonTipsRes
     * @property {string} tips CommonTipsRes tips
     * @property {Array.<IDefaultButton>|null} [buttonList] CommonTipsRes buttonList
     */

    /**
     * Constructs a new CommonTipsRes.
     * @exports CommonTipsRes
     * @classdesc Represents a CommonTipsRes.
     * @implements ICommonTipsRes
     * @constructor
     * @param {ICommonTipsRes=} [p] Properties to set
     */
    function CommonTipsRes(p) {
        this.buttonList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CommonTipsRes tips.
     * @member {string} tips
     * @memberof CommonTipsRes
     * @instance
     */
    CommonTipsRes.prototype.tips = "";

    /**
     * CommonTipsRes buttonList.
     * @member {Array.<IDefaultButton>} buttonList
     * @memberof CommonTipsRes
     * @instance
     */
    CommonTipsRes.prototype.buttonList = $util.emptyArray;

    /**
     * Creates a new CommonTipsRes instance using the specified properties.
     * @function create
     * @memberof CommonTipsRes
     * @static
     * @param {ICommonTipsRes=} [properties] Properties to set
     * @returns {CommonTipsRes} CommonTipsRes instance
     */
    CommonTipsRes.create = function create(properties) {
        return new CommonTipsRes(properties);
    };

    /**
     * Encodes the specified CommonTipsRes message. Does not implicitly {@link CommonTipsRes.verify|verify} messages.
     * @function encode
     * @memberof CommonTipsRes
     * @static
     * @param {ICommonTipsRes} m CommonTipsRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommonTipsRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.tips);
        if (m.buttonList != null && m.buttonList.length) {
            for (var i = 0; i < m.buttonList.length; ++i)
                $root.DefaultButton.encode(m.buttonList[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a CommonTipsRes message from the specified reader or buffer.
     * @function decode
     * @memberof CommonTipsRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CommonTipsRes} CommonTipsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommonTipsRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CommonTipsRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.tips = r.string();
                break;
            case 2:
                if (!(m.buttonList && m.buttonList.length))
                    m.buttonList = [];
                m.buttonList.push($root.DefaultButton.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        return m;
    };

    return CommonTipsRes;
})();

$root.CommonUpTipsRes = (function() {

    /**
     * Properties of a CommonUpTipsRes.
     * @exports ICommonUpTipsRes
     * @interface ICommonUpTipsRes
     * @property {boolean} success CommonUpTipsRes success
     * @property {string} tips CommonUpTipsRes tips
     */

    /**
     * Constructs a new CommonUpTipsRes.
     * @exports CommonUpTipsRes
     * @classdesc Represents a CommonUpTipsRes.
     * @implements ICommonUpTipsRes
     * @constructor
     * @param {ICommonUpTipsRes=} [p] Properties to set
     */
    function CommonUpTipsRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CommonUpTipsRes success.
     * @member {boolean} success
     * @memberof CommonUpTipsRes
     * @instance
     */
    CommonUpTipsRes.prototype.success = false;

    /**
     * CommonUpTipsRes tips.
     * @member {string} tips
     * @memberof CommonUpTipsRes
     * @instance
     */
    CommonUpTipsRes.prototype.tips = "";

    /**
     * Creates a new CommonUpTipsRes instance using the specified properties.
     * @function create
     * @memberof CommonUpTipsRes
     * @static
     * @param {ICommonUpTipsRes=} [properties] Properties to set
     * @returns {CommonUpTipsRes} CommonUpTipsRes instance
     */
    CommonUpTipsRes.create = function create(properties) {
        return new CommonUpTipsRes(properties);
    };

    /**
     * Encodes the specified CommonUpTipsRes message. Does not implicitly {@link CommonUpTipsRes.verify|verify} messages.
     * @function encode
     * @memberof CommonUpTipsRes
     * @static
     * @param {ICommonUpTipsRes} m CommonUpTipsRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommonUpTipsRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a CommonUpTipsRes message from the specified reader or buffer.
     * @function decode
     * @memberof CommonUpTipsRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CommonUpTipsRes} CommonUpTipsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommonUpTipsRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CommonUpTipsRes();
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

    return CommonUpTipsRes;
})();

$root.DefaultResultRes = (function() {

    /**
     * Properties of a DefaultResultRes.
     * @exports IDefaultResultRes
     * @interface IDefaultResultRes
     * @property {boolean} success DefaultResultRes success
     * @property {string} tips DefaultResultRes tips
     * @property {Array.<ICurrencyStruct>|null} [currencyPrice] DefaultResultRes currencyPrice
     */

    /**
     * Constructs a new DefaultResultRes.
     * @exports DefaultResultRes
     * @classdesc Represents a DefaultResultRes.
     * @implements IDefaultResultRes
     * @constructor
     * @param {IDefaultResultRes=} [p] Properties to set
     */
    function DefaultResultRes(p) {
        this.currencyPrice = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DefaultResultRes success.
     * @member {boolean} success
     * @memberof DefaultResultRes
     * @instance
     */
    DefaultResultRes.prototype.success = false;

    /**
     * DefaultResultRes tips.
     * @member {string} tips
     * @memberof DefaultResultRes
     * @instance
     */
    DefaultResultRes.prototype.tips = "";

    /**
     * DefaultResultRes currencyPrice.
     * @member {Array.<ICurrencyStruct>} currencyPrice
     * @memberof DefaultResultRes
     * @instance
     */
    DefaultResultRes.prototype.currencyPrice = $util.emptyArray;

    /**
     * Creates a new DefaultResultRes instance using the specified properties.
     * @function create
     * @memberof DefaultResultRes
     * @static
     * @param {IDefaultResultRes=} [properties] Properties to set
     * @returns {DefaultResultRes} DefaultResultRes instance
     */
    DefaultResultRes.create = function create(properties) {
        return new DefaultResultRes(properties);
    };

    /**
     * Encodes the specified DefaultResultRes message. Does not implicitly {@link DefaultResultRes.verify|verify} messages.
     * @function encode
     * @memberof DefaultResultRes
     * @static
     * @param {IDefaultResultRes} m DefaultResultRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DefaultResultRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        w.uint32(18).string(m.tips);
        if (m.currencyPrice != null && m.currencyPrice.length) {
            for (var i = 0; i < m.currencyPrice.length; ++i)
                $root.CurrencyStruct.encode(m.currencyPrice[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a DefaultResultRes message from the specified reader or buffer.
     * @function decode
     * @memberof DefaultResultRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DefaultResultRes} DefaultResultRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DefaultResultRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DefaultResultRes();
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
                if (!(m.currencyPrice && m.currencyPrice.length))
                    m.currencyPrice = [];
                m.currencyPrice.push($root.CurrencyStruct.decode(r, r.uint32()));
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

    return DefaultResultRes;
})();

$root.EmptyReq = (function() {

    /**
     * Properties of an EmptyReq.
     * @exports IEmptyReq
     * @interface IEmptyReq
     */

    /**
     * Constructs a new EmptyReq.
     * @exports EmptyReq
     * @classdesc Represents an EmptyReq.
     * @implements IEmptyReq
     * @constructor
     * @param {IEmptyReq=} [p] Properties to set
     */
    function EmptyReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new EmptyReq instance using the specified properties.
     * @function create
     * @memberof EmptyReq
     * @static
     * @param {IEmptyReq=} [properties] Properties to set
     * @returns {EmptyReq} EmptyReq instance
     */
    EmptyReq.create = function create(properties) {
        return new EmptyReq(properties);
    };

    /**
     * Encodes the specified EmptyReq message. Does not implicitly {@link EmptyReq.verify|verify} messages.
     * @function encode
     * @memberof EmptyReq
     * @static
     * @param {IEmptyReq} m EmptyReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmptyReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes an EmptyReq message from the specified reader or buffer.
     * @function decode
     * @memberof EmptyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EmptyReq} EmptyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmptyReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EmptyReq();
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

    return EmptyReq;
})();

/**
 * ExitType enum.
 * @exports ExitType
 * @enum {string}
 * @property {number} EXIT_IMMEDIATELY=1 EXIT_IMMEDIATELY value
 * @property {number} EXIT_DELAY=2 EXIT_DELAY value
 */
$root.ExitType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "EXIT_IMMEDIATELY"] = 1;
    values[valuesById[2] = "EXIT_DELAY"] = 2;
    return values;
})();

/**
 * GameEventType enum.
 * @exports GameEventType
 * @enum {string}
 * @property {number} INTERRAL_CHANGE_EVENT=1 INTERRAL_CHANGE_EVENT value
 */
$root.GameEventType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "INTERRAL_CHANGE_EVENT"] = 1;
    return values;
})();

$root.IntegralChangeEvent = (function() {

    /**
     * Properties of an IntegralChangeEvent.
     * @exports IIntegralChangeEvent
     * @interface IIntegralChangeEvent
     * @property {number|Long} eventUserId IntegralChangeEvent eventUserId
     * @property {number} eventIntegralChangeCount IntegralChangeEvent eventIntegralChangeCount
     */

    /**
     * Constructs a new IntegralChangeEvent.
     * @exports IntegralChangeEvent
     * @classdesc Represents an IntegralChangeEvent.
     * @implements IIntegralChangeEvent
     * @constructor
     * @param {IIntegralChangeEvent=} [p] Properties to set
     */
    function IntegralChangeEvent(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * IntegralChangeEvent eventUserId.
     * @member {number|Long} eventUserId
     * @memberof IntegralChangeEvent
     * @instance
     */
    IntegralChangeEvent.prototype.eventUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * IntegralChangeEvent eventIntegralChangeCount.
     * @member {number} eventIntegralChangeCount
     * @memberof IntegralChangeEvent
     * @instance
     */
    IntegralChangeEvent.prototype.eventIntegralChangeCount = 0;

    /**
     * Creates a new IntegralChangeEvent instance using the specified properties.
     * @function create
     * @memberof IntegralChangeEvent
     * @static
     * @param {IIntegralChangeEvent=} [properties] Properties to set
     * @returns {IntegralChangeEvent} IntegralChangeEvent instance
     */
    IntegralChangeEvent.create = function create(properties) {
        return new IntegralChangeEvent(properties);
    };

    /**
     * Encodes the specified IntegralChangeEvent message. Does not implicitly {@link IntegralChangeEvent.verify|verify} messages.
     * @function encode
     * @memberof IntegralChangeEvent
     * @static
     * @param {IIntegralChangeEvent} m IntegralChangeEvent message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IntegralChangeEvent.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.eventUserId);
        w.uint32(16).int32(m.eventIntegralChangeCount);
        return w;
    };

    /**
     * Decodes an IntegralChangeEvent message from the specified reader or buffer.
     * @function decode
     * @memberof IntegralChangeEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IntegralChangeEvent} IntegralChangeEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IntegralChangeEvent.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IntegralChangeEvent();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.eventUserId = r.int64();
                break;
            case 2:
                m.eventIntegralChangeCount = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("eventUserId"))
            throw $util.ProtocolError("missing required 'eventUserId'", { instance: m });
        if (!m.hasOwnProperty("eventIntegralChangeCount"))
            throw $util.ProtocolError("missing required 'eventIntegralChangeCount'", { instance: m });
        return m;
    };

    return IntegralChangeEvent;
})();

$root.IntegralChangeEventData = (function() {

    /**
     * Properties of an IntegralChangeEventData.
     * @exports IIntegralChangeEventData
     * @interface IIntegralChangeEventData
     * @property {number|Long} eventTime IntegralChangeEventData eventTime
     * @property {number} eventSecondType IntegralChangeEventData eventSecondType
     * @property {number} eventBiFirstChangeType IntegralChangeEventData eventBiFirstChangeType
     * @property {number} eventBiSecondChangeType IntegralChangeEventData eventBiSecondChangeType
     * @property {Array.<IIntegralChangeEvent>|null} [eventList] IntegralChangeEventData eventList
     */

    /**
     * Constructs a new IntegralChangeEventData.
     * @exports IntegralChangeEventData
     * @classdesc Represents an IntegralChangeEventData.
     * @implements IIntegralChangeEventData
     * @constructor
     * @param {IIntegralChangeEventData=} [p] Properties to set
     */
    function IntegralChangeEventData(p) {
        this.eventList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * IntegralChangeEventData eventTime.
     * @member {number|Long} eventTime
     * @memberof IntegralChangeEventData
     * @instance
     */
    IntegralChangeEventData.prototype.eventTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * IntegralChangeEventData eventSecondType.
     * @member {number} eventSecondType
     * @memberof IntegralChangeEventData
     * @instance
     */
    IntegralChangeEventData.prototype.eventSecondType = 0;

    /**
     * IntegralChangeEventData eventBiFirstChangeType.
     * @member {number} eventBiFirstChangeType
     * @memberof IntegralChangeEventData
     * @instance
     */
    IntegralChangeEventData.prototype.eventBiFirstChangeType = 0;

    /**
     * IntegralChangeEventData eventBiSecondChangeType.
     * @member {number} eventBiSecondChangeType
     * @memberof IntegralChangeEventData
     * @instance
     */
    IntegralChangeEventData.prototype.eventBiSecondChangeType = 0;

    /**
     * IntegralChangeEventData eventList.
     * @member {Array.<IIntegralChangeEvent>} eventList
     * @memberof IntegralChangeEventData
     * @instance
     */
    IntegralChangeEventData.prototype.eventList = $util.emptyArray;

    /**
     * Creates a new IntegralChangeEventData instance using the specified properties.
     * @function create
     * @memberof IntegralChangeEventData
     * @static
     * @param {IIntegralChangeEventData=} [properties] Properties to set
     * @returns {IntegralChangeEventData} IntegralChangeEventData instance
     */
    IntegralChangeEventData.create = function create(properties) {
        return new IntegralChangeEventData(properties);
    };

    /**
     * Encodes the specified IntegralChangeEventData message. Does not implicitly {@link IntegralChangeEventData.verify|verify} messages.
     * @function encode
     * @memberof IntegralChangeEventData
     * @static
     * @param {IIntegralChangeEventData} m IntegralChangeEventData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IntegralChangeEventData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.eventTime);
        w.uint32(16).int32(m.eventSecondType);
        w.uint32(24).int32(m.eventBiFirstChangeType);
        w.uint32(32).int32(m.eventBiSecondChangeType);
        if (m.eventList != null && m.eventList.length) {
            for (var i = 0; i < m.eventList.length; ++i)
                $root.IntegralChangeEvent.encode(m.eventList[i], w.uint32(42).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an IntegralChangeEventData message from the specified reader or buffer.
     * @function decode
     * @memberof IntegralChangeEventData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IntegralChangeEventData} IntegralChangeEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IntegralChangeEventData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IntegralChangeEventData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.eventTime = r.int64();
                break;
            case 2:
                m.eventSecondType = r.int32();
                break;
            case 3:
                m.eventBiFirstChangeType = r.int32();
                break;
            case 4:
                m.eventBiSecondChangeType = r.int32();
                break;
            case 5:
                if (!(m.eventList && m.eventList.length))
                    m.eventList = [];
                m.eventList.push($root.IntegralChangeEvent.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("eventTime"))
            throw $util.ProtocolError("missing required 'eventTime'", { instance: m });
        if (!m.hasOwnProperty("eventSecondType"))
            throw $util.ProtocolError("missing required 'eventSecondType'", { instance: m });
        if (!m.hasOwnProperty("eventBiFirstChangeType"))
            throw $util.ProtocolError("missing required 'eventBiFirstChangeType'", { instance: m });
        if (!m.hasOwnProperty("eventBiSecondChangeType"))
            throw $util.ProtocolError("missing required 'eventBiSecondChangeType'", { instance: m });
        return m;
    };

    return IntegralChangeEventData;
})();

$root.GameReportEventToHall = (function() {

    /**
     * Properties of a GameReportEventToHall.
     * @exports IGameReportEventToHall
     * @interface IGameReportEventToHall
     * @property {IIntegralChangeEventData} integralEventData GameReportEventToHall integralEventData
     */

    /**
     * Constructs a new GameReportEventToHall.
     * @exports GameReportEventToHall
     * @classdesc Represents a GameReportEventToHall.
     * @implements IGameReportEventToHall
     * @constructor
     * @param {IGameReportEventToHall=} [p] Properties to set
     */
    function GameReportEventToHall(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameReportEventToHall integralEventData.
     * @member {IIntegralChangeEventData} integralEventData
     * @memberof GameReportEventToHall
     * @instance
     */
    GameReportEventToHall.prototype.integralEventData = null;

    /**
     * Creates a new GameReportEventToHall instance using the specified properties.
     * @function create
     * @memberof GameReportEventToHall
     * @static
     * @param {IGameReportEventToHall=} [properties] Properties to set
     * @returns {GameReportEventToHall} GameReportEventToHall instance
     */
    GameReportEventToHall.create = function create(properties) {
        return new GameReportEventToHall(properties);
    };

    /**
     * Encodes the specified GameReportEventToHall message. Does not implicitly {@link GameReportEventToHall.verify|verify} messages.
     * @function encode
     * @memberof GameReportEventToHall
     * @static
     * @param {IGameReportEventToHall} m GameReportEventToHall message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameReportEventToHall.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.IntegralChangeEventData.encode(m.integralEventData, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a GameReportEventToHall message from the specified reader or buffer.
     * @function decode
     * @memberof GameReportEventToHall
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameReportEventToHall} GameReportEventToHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameReportEventToHall.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameReportEventToHall();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.integralEventData = $root.IntegralChangeEventData.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("integralEventData"))
            throw $util.ProtocolError("missing required 'integralEventData'", { instance: m });
        return m;
    };

    return GameReportEventToHall;
})();

$root.GameReportMissionEventToHall = (function() {

    /**
     * Properties of a GameReportMissionEventToHall.
     * @exports IGameReportMissionEventToHall
     * @interface IGameReportMissionEventToHall
     * @property {number} missionType GameReportMissionEventToHall missionType
     * @property {number} playType GameReportMissionEventToHall playType
     * @property {number} playId GameReportMissionEventToHall playId
     * @property {string|null} [param] GameReportMissionEventToHall param
     * @property {number|Long} playerId GameReportMissionEventToHall playerId
     */

    /**
     * Constructs a new GameReportMissionEventToHall.
     * @exports GameReportMissionEventToHall
     * @classdesc Represents a GameReportMissionEventToHall.
     * @implements IGameReportMissionEventToHall
     * @constructor
     * @param {IGameReportMissionEventToHall=} [p] Properties to set
     */
    function GameReportMissionEventToHall(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameReportMissionEventToHall missionType.
     * @member {number} missionType
     * @memberof GameReportMissionEventToHall
     * @instance
     */
    GameReportMissionEventToHall.prototype.missionType = 0;

    /**
     * GameReportMissionEventToHall playType.
     * @member {number} playType
     * @memberof GameReportMissionEventToHall
     * @instance
     */
    GameReportMissionEventToHall.prototype.playType = 0;

    /**
     * GameReportMissionEventToHall playId.
     * @member {number} playId
     * @memberof GameReportMissionEventToHall
     * @instance
     */
    GameReportMissionEventToHall.prototype.playId = 0;

    /**
     * GameReportMissionEventToHall param.
     * @member {string} param
     * @memberof GameReportMissionEventToHall
     * @instance
     */
    GameReportMissionEventToHall.prototype.param = "";

    /**
     * GameReportMissionEventToHall playerId.
     * @member {number|Long} playerId
     * @memberof GameReportMissionEventToHall
     * @instance
     */
    GameReportMissionEventToHall.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GameReportMissionEventToHall instance using the specified properties.
     * @function create
     * @memberof GameReportMissionEventToHall
     * @static
     * @param {IGameReportMissionEventToHall=} [properties] Properties to set
     * @returns {GameReportMissionEventToHall} GameReportMissionEventToHall instance
     */
    GameReportMissionEventToHall.create = function create(properties) {
        return new GameReportMissionEventToHall(properties);
    };

    /**
     * Encodes the specified GameReportMissionEventToHall message. Does not implicitly {@link GameReportMissionEventToHall.verify|verify} messages.
     * @function encode
     * @memberof GameReportMissionEventToHall
     * @static
     * @param {IGameReportMissionEventToHall} m GameReportMissionEventToHall message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameReportMissionEventToHall.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.missionType);
        w.uint32(16).int32(m.playType);
        w.uint32(24).int32(m.playId);
        if (m.param != null && m.hasOwnProperty("param"))
            w.uint32(34).string(m.param);
        w.uint32(40).int64(m.playerId);
        return w;
    };

    /**
     * Decodes a GameReportMissionEventToHall message from the specified reader or buffer.
     * @function decode
     * @memberof GameReportMissionEventToHall
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameReportMissionEventToHall} GameReportMissionEventToHall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameReportMissionEventToHall.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameReportMissionEventToHall();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.missionType = r.int32();
                break;
            case 2:
                m.playType = r.int32();
                break;
            case 3:
                m.playId = r.int32();
                break;
            case 4:
                m.param = r.string();
                break;
            case 5:
                m.playerId = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("missionType"))
            throw $util.ProtocolError("missing required 'missionType'", { instance: m });
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        return m;
    };

    return GameReportMissionEventToHall;
})();

/**
 * CurrencyType enum.
 * @exports CurrencyType
 * @enum {string}
 * @property {number} RedEnvelops=0 RedEnvelops value
 * @property {number} Gold=1 Gold value
 * @property {number} safeBox=2 safeBox value
 * @property {number} Integral=3 Integral value
 */
$root.CurrencyType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RedEnvelops"] = 0;
    values[valuesById[1] = "Gold"] = 1;
    values[valuesById[2] = "safeBox"] = 2;
    values[valuesById[3] = "Integral"] = 3;
    return values;
})();

$root.CurrencyStruct = (function() {

    /**
     * Properties of a CurrencyStruct.
     * @exports ICurrencyStruct
     * @interface ICurrencyStruct
     * @property {CurrencyType} curType CurrencyStruct curType
     * @property {string} count CurrencyStruct count
     */

    /**
     * Constructs a new CurrencyStruct.
     * @exports CurrencyStruct
     * @classdesc Represents a CurrencyStruct.
     * @implements ICurrencyStruct
     * @constructor
     * @param {ICurrencyStruct=} [p] Properties to set
     */
    function CurrencyStruct(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CurrencyStruct curType.
     * @member {CurrencyType} curType
     * @memberof CurrencyStruct
     * @instance
     */
    CurrencyStruct.prototype.curType = 0;

    /**
     * CurrencyStruct count.
     * @member {string} count
     * @memberof CurrencyStruct
     * @instance
     */
    CurrencyStruct.prototype.count = "";

    /**
     * Creates a new CurrencyStruct instance using the specified properties.
     * @function create
     * @memberof CurrencyStruct
     * @static
     * @param {ICurrencyStruct=} [properties] Properties to set
     * @returns {CurrencyStruct} CurrencyStruct instance
     */
    CurrencyStruct.create = function create(properties) {
        return new CurrencyStruct(properties);
    };

    /**
     * Encodes the specified CurrencyStruct message. Does not implicitly {@link CurrencyStruct.verify|verify} messages.
     * @function encode
     * @memberof CurrencyStruct
     * @static
     * @param {ICurrencyStruct} m CurrencyStruct message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CurrencyStruct.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.curType);
        w.uint32(18).string(m.count);
        return w;
    };

    /**
     * Decodes a CurrencyStruct message from the specified reader or buffer.
     * @function decode
     * @memberof CurrencyStruct
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CurrencyStruct} CurrencyStruct
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CurrencyStruct.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CurrencyStruct();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.curType = r.int32();
                break;
            case 2:
                m.count = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("curType"))
            throw $util.ProtocolError("missing required 'curType'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        return m;
    };

    return CurrencyStruct;
})();

$root.SyncCurrencyRes = (function() {

    /**
     * Properties of a SyncCurrencyRes.
     * @exports ISyncCurrencyRes
     * @interface ISyncCurrencyRes
     * @property {Array.<ICurrencyStruct>|null} [curStruct] SyncCurrencyRes curStruct
     * @property {CurrencyRefreshType} refreshType SyncCurrencyRes refreshType
     */

    /**
     * Constructs a new SyncCurrencyRes.
     * @exports SyncCurrencyRes
     * @classdesc Represents a SyncCurrencyRes.
     * @implements ISyncCurrencyRes
     * @constructor
     * @param {ISyncCurrencyRes=} [p] Properties to set
     */
    function SyncCurrencyRes(p) {
        this.curStruct = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SyncCurrencyRes curStruct.
     * @member {Array.<ICurrencyStruct>} curStruct
     * @memberof SyncCurrencyRes
     * @instance
     */
    SyncCurrencyRes.prototype.curStruct = $util.emptyArray;

    /**
     * SyncCurrencyRes refreshType.
     * @member {CurrencyRefreshType} refreshType
     * @memberof SyncCurrencyRes
     * @instance
     */
    SyncCurrencyRes.prototype.refreshType = 1;

    /**
     * Creates a new SyncCurrencyRes instance using the specified properties.
     * @function create
     * @memberof SyncCurrencyRes
     * @static
     * @param {ISyncCurrencyRes=} [properties] Properties to set
     * @returns {SyncCurrencyRes} SyncCurrencyRes instance
     */
    SyncCurrencyRes.create = function create(properties) {
        return new SyncCurrencyRes(properties);
    };

    /**
     * Encodes the specified SyncCurrencyRes message. Does not implicitly {@link SyncCurrencyRes.verify|verify} messages.
     * @function encode
     * @memberof SyncCurrencyRes
     * @static
     * @param {ISyncCurrencyRes} m SyncCurrencyRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncCurrencyRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.curStruct != null && m.curStruct.length) {
            for (var i = 0; i < m.curStruct.length; ++i)
                $root.CurrencyStruct.encode(m.curStruct[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).int32(m.refreshType);
        return w;
    };

    /**
     * Decodes a SyncCurrencyRes message from the specified reader or buffer.
     * @function decode
     * @memberof SyncCurrencyRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SyncCurrencyRes} SyncCurrencyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncCurrencyRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SyncCurrencyRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.curStruct && m.curStruct.length))
                    m.curStruct = [];
                m.curStruct.push($root.CurrencyStruct.decode(r, r.uint32()));
                break;
            case 2:
                m.refreshType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("refreshType"))
            throw $util.ProtocolError("missing required 'refreshType'", { instance: m });
        return m;
    };

    return SyncCurrencyRes;
})();

/**
 * CurrencyRefreshType enum.
 * @exports CurrencyRefreshType
 * @enum {string}
 * @property {number} REFRESH_TYPE_RECHAGE=1 REFRESH_TYPE_RECHAGE value
 * @property {number} REFRESH_TYPE_HALL_COMMON=2 REFRESH_TYPE_HALL_COMMON value
 * @property {number} REFRESH_TYPE_CACHE=3 REFRESH_TYPE_CACHE value
 * @property {number} REFRESH_TYPE_GAME_COMMON=4 REFRESH_TYPE_GAME_COMMON value
 */
$root.CurrencyRefreshType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "REFRESH_TYPE_RECHAGE"] = 1;
    values[valuesById[2] = "REFRESH_TYPE_HALL_COMMON"] = 2;
    values[valuesById[3] = "REFRESH_TYPE_CACHE"] = 3;
    values[valuesById[4] = "REFRESH_TYPE_GAME_COMMON"] = 4;
    return values;
})();

$root.SyncHallToGameCurrencyRes = (function() {

    /**
     * Properties of a SyncHallToGameCurrencyRes.
     * @exports ISyncHallToGameCurrencyRes
     * @interface ISyncHallToGameCurrencyRes
     * @property {Array.<ICurrencyStruct>|null} [curStruct] SyncHallToGameCurrencyRes curStruct
     */

    /**
     * Constructs a new SyncHallToGameCurrencyRes.
     * @exports SyncHallToGameCurrencyRes
     * @classdesc Represents a SyncHallToGameCurrencyRes.
     * @implements ISyncHallToGameCurrencyRes
     * @constructor
     * @param {ISyncHallToGameCurrencyRes=} [p] Properties to set
     */
    function SyncHallToGameCurrencyRes(p) {
        this.curStruct = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SyncHallToGameCurrencyRes curStruct.
     * @member {Array.<ICurrencyStruct>} curStruct
     * @memberof SyncHallToGameCurrencyRes
     * @instance
     */
    SyncHallToGameCurrencyRes.prototype.curStruct = $util.emptyArray;

    /**
     * Creates a new SyncHallToGameCurrencyRes instance using the specified properties.
     * @function create
     * @memberof SyncHallToGameCurrencyRes
     * @static
     * @param {ISyncHallToGameCurrencyRes=} [properties] Properties to set
     * @returns {SyncHallToGameCurrencyRes} SyncHallToGameCurrencyRes instance
     */
    SyncHallToGameCurrencyRes.create = function create(properties) {
        return new SyncHallToGameCurrencyRes(properties);
    };

    /**
     * Encodes the specified SyncHallToGameCurrencyRes message. Does not implicitly {@link SyncHallToGameCurrencyRes.verify|verify} messages.
     * @function encode
     * @memberof SyncHallToGameCurrencyRes
     * @static
     * @param {ISyncHallToGameCurrencyRes} m SyncHallToGameCurrencyRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncHallToGameCurrencyRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.curStruct != null && m.curStruct.length) {
            for (var i = 0; i < m.curStruct.length; ++i)
                $root.CurrencyStruct.encode(m.curStruct[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SyncHallToGameCurrencyRes message from the specified reader or buffer.
     * @function decode
     * @memberof SyncHallToGameCurrencyRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SyncHallToGameCurrencyRes} SyncHallToGameCurrencyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncHallToGameCurrencyRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SyncHallToGameCurrencyRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.curStruct && m.curStruct.length))
                    m.curStruct = [];
                m.curStruct.push($root.CurrencyStruct.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return SyncHallToGameCurrencyRes;
})();

module.exports = $root;

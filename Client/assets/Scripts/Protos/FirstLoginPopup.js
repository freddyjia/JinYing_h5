/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.FirstLoginPopup || ($protobuf.roots.FirstLoginPopup = {});

/**
 * PopUpType enum.
 * @exports PopUpType
 * @enum {string}
 * @property {number} Sign=1 Sign value
 */
$root.PopUpType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Sign"] = 1;
    return values;
})();

$root.PopupData = (function() {

    /**
     * Properties of a PopupData.
     * @exports IPopupData
     * @interface IPopupData
     * @property {number} index PopupData index
     * @property {PopUpType} type PopupData type
     * @property {boolean} isPopUp PopupData isPopUp
     */

    /**
     * Constructs a new PopupData.
     * @exports PopupData
     * @classdesc Represents a PopupData.
     * @implements IPopupData
     * @constructor
     * @param {IPopupData=} [p] Properties to set
     */
    function PopupData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PopupData index.
     * @member {number} index
     * @memberof PopupData
     * @instance
     */
    PopupData.prototype.index = 0;

    /**
     * PopupData type.
     * @member {PopUpType} type
     * @memberof PopupData
     * @instance
     */
    PopupData.prototype.type = 1;

    /**
     * PopupData isPopUp.
     * @member {boolean} isPopUp
     * @memberof PopupData
     * @instance
     */
    PopupData.prototype.isPopUp = false;

    /**
     * Creates a new PopupData instance using the specified properties.
     * @function create
     * @memberof PopupData
     * @static
     * @param {IPopupData=} [properties] Properties to set
     * @returns {PopupData} PopupData instance
     */
    PopupData.create = function create(properties) {
        return new PopupData(properties);
    };

    /**
     * Encodes the specified PopupData message. Does not implicitly {@link PopupData.verify|verify} messages.
     * @function encode
     * @memberof PopupData
     * @static
     * @param {IPopupData} m PopupData message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PopupData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).int32(m.type);
        w.uint32(24).bool(m.isPopUp);
        return w;
    };

    /**
     * Decodes a PopupData message from the specified reader or buffer.
     * @function decode
     * @memberof PopupData
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PopupData} PopupData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PopupData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PopupData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.type = r.int32();
                break;
            case 3:
                m.isPopUp = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("isPopUp"))
            throw $util.ProtocolError("missing required 'isPopUp'", { instance: m });
        return m;
    };

    return PopupData;
})();

$root.LoginPopUpSync = (function() {

    /**
     * Properties of a LoginPopUpSync.
     * @exports ILoginPopUpSync
     * @interface ILoginPopUpSync
     * @property {Array.<IPopupData>|null} [popupData] LoginPopUpSync popupData
     */

    /**
     * Constructs a new LoginPopUpSync.
     * @exports LoginPopUpSync
     * @classdesc Represents a LoginPopUpSync.
     * @implements ILoginPopUpSync
     * @constructor
     * @param {ILoginPopUpSync=} [p] Properties to set
     */
    function LoginPopUpSync(p) {
        this.popupData = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginPopUpSync popupData.
     * @member {Array.<IPopupData>} popupData
     * @memberof LoginPopUpSync
     * @instance
     */
    LoginPopUpSync.prototype.popupData = $util.emptyArray;

    /**
     * Creates a new LoginPopUpSync instance using the specified properties.
     * @function create
     * @memberof LoginPopUpSync
     * @static
     * @param {ILoginPopUpSync=} [properties] Properties to set
     * @returns {LoginPopUpSync} LoginPopUpSync instance
     */
    LoginPopUpSync.create = function create(properties) {
        return new LoginPopUpSync(properties);
    };

    /**
     * Encodes the specified LoginPopUpSync message. Does not implicitly {@link LoginPopUpSync.verify|verify} messages.
     * @function encode
     * @memberof LoginPopUpSync
     * @static
     * @param {ILoginPopUpSync} m LoginPopUpSync message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginPopUpSync.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.popupData != null && m.popupData.length) {
            for (var i = 0; i < m.popupData.length; ++i)
                $root.PopupData.encode(m.popupData[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a LoginPopUpSync message from the specified reader or buffer.
     * @function decode
     * @memberof LoginPopUpSync
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginPopUpSync} LoginPopUpSync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginPopUpSync.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPopUpSync();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.popupData && m.popupData.length))
                    m.popupData = [];
                m.popupData.push($root.PopupData.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return LoginPopUpSync;
})();

$root.LoginPopUpClose = (function() {

    /**
     * Properties of a LoginPopUpClose.
     * @exports ILoginPopUpClose
     * @interface ILoginPopUpClose
     * @property {PopUpType} type LoginPopUpClose type
     */

    /**
     * Constructs a new LoginPopUpClose.
     * @exports LoginPopUpClose
     * @classdesc Represents a LoginPopUpClose.
     * @implements ILoginPopUpClose
     * @constructor
     * @param {ILoginPopUpClose=} [p] Properties to set
     */
    function LoginPopUpClose(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginPopUpClose type.
     * @member {PopUpType} type
     * @memberof LoginPopUpClose
     * @instance
     */
    LoginPopUpClose.prototype.type = 1;

    /**
     * Creates a new LoginPopUpClose instance using the specified properties.
     * @function create
     * @memberof LoginPopUpClose
     * @static
     * @param {ILoginPopUpClose=} [properties] Properties to set
     * @returns {LoginPopUpClose} LoginPopUpClose instance
     */
    LoginPopUpClose.create = function create(properties) {
        return new LoginPopUpClose(properties);
    };

    /**
     * Encodes the specified LoginPopUpClose message. Does not implicitly {@link LoginPopUpClose.verify|verify} messages.
     * @function encode
     * @memberof LoginPopUpClose
     * @static
     * @param {ILoginPopUpClose} m LoginPopUpClose message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginPopUpClose.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        return w;
    };

    /**
     * Decodes a LoginPopUpClose message from the specified reader or buffer.
     * @function decode
     * @memberof LoginPopUpClose
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginPopUpClose} LoginPopUpClose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginPopUpClose.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPopUpClose();
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

    return LoginPopUpClose;
})();

module.exports = $root;

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.LoginPopMenu || ($protobuf.roots.LoginPopMenu = {});

$root.Rsp_PopMenu = (function() {

    /**
     * Properties of a Rsp_PopMenu.
     * @exports IRsp_PopMenu
     * @interface IRsp_PopMenu
     * @property {boolean|null} [hasNewPlayerGift] Rsp_PopMenu hasNewPlayerGift
     */

    /**
     * Constructs a new Rsp_PopMenu.
     * @exports Rsp_PopMenu
     * @classdesc Represents a Rsp_PopMenu.
     * @implements IRsp_PopMenu
     * @constructor
     * @param {IRsp_PopMenu=} [p] Properties to set
     */
    function Rsp_PopMenu(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Rsp_PopMenu hasNewPlayerGift.
     * @member {boolean} hasNewPlayerGift
     * @memberof Rsp_PopMenu
     * @instance
     */
    Rsp_PopMenu.prototype.hasNewPlayerGift = false;

    /**
     * Creates a new Rsp_PopMenu instance using the specified properties.
     * @function create
     * @memberof Rsp_PopMenu
     * @static
     * @param {IRsp_PopMenu=} [properties] Properties to set
     * @returns {Rsp_PopMenu} Rsp_PopMenu instance
     */
    Rsp_PopMenu.create = function create(properties) {
        return new Rsp_PopMenu(properties);
    };

    /**
     * Encodes the specified Rsp_PopMenu message. Does not implicitly {@link Rsp_PopMenu.verify|verify} messages.
     * @function encode
     * @memberof Rsp_PopMenu
     * @static
     * @param {IRsp_PopMenu} m Rsp_PopMenu message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rsp_PopMenu.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.hasNewPlayerGift != null && m.hasOwnProperty("hasNewPlayerGift"))
            w.uint32(8).bool(m.hasNewPlayerGift);
        return w;
    };

    /**
     * Decodes a Rsp_PopMenu message from the specified reader or buffer.
     * @function decode
     * @memberof Rsp_PopMenu
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Rsp_PopMenu} Rsp_PopMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rsp_PopMenu.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Rsp_PopMenu();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.hasNewPlayerGift = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Rsp_PopMenu;
})();

module.exports = $root;

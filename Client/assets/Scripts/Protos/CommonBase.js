/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.CommonBase || ($protobuf.roots.CommonBase = {});

$root.CommonResponse = (function() {

    /**
     * Properties of a CommonResponse.
     * @exports ICommonResponse
     * @interface ICommonResponse
     * @property {boolean} success CommonResponse success
     * @property {string|null} [reason] CommonResponse reason
     */

    /**
     * Constructs a new CommonResponse.
     * @exports CommonResponse
     * @classdesc Represents a CommonResponse.
     * @implements ICommonResponse
     * @constructor
     * @param {ICommonResponse=} [p] Properties to set
     */
    function CommonResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CommonResponse success.
     * @member {boolean} success
     * @memberof CommonResponse
     * @instance
     */
    CommonResponse.prototype.success = false;

    /**
     * CommonResponse reason.
     * @member {string} reason
     * @memberof CommonResponse
     * @instance
     */
    CommonResponse.prototype.reason = "";

    /**
     * Creates a new CommonResponse instance using the specified properties.
     * @function create
     * @memberof CommonResponse
     * @static
     * @param {ICommonResponse=} [properties] Properties to set
     * @returns {CommonResponse} CommonResponse instance
     */
    CommonResponse.create = function create(properties) {
        return new CommonResponse(properties);
    };

    /**
     * Encodes the specified CommonResponse message. Does not implicitly {@link CommonResponse.verify|verify} messages.
     * @function encode
     * @memberof CommonResponse
     * @static
     * @param {ICommonResponse} m CommonResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommonResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.reason != null && m.hasOwnProperty("reason"))
            w.uint32(18).string(m.reason);
        return w;
    };

    /**
     * Decodes a CommonResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CommonResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CommonResponse} CommonResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommonResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CommonResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.reason = r.string();
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

    return CommonResponse;
})();

module.exports = $root;

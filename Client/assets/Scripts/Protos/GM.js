/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.GM || ($protobuf.roots.GM = {});

$root.ClientGMCommand = (function() {

    /**
     * Properties of a ClientGMCommand.
     * @exports IClientGMCommand
     * @interface IClientGMCommand
     * @property {string} command ClientGMCommand command
     */

    /**
     * Constructs a new ClientGMCommand.
     * @exports ClientGMCommand
     * @classdesc Represents a ClientGMCommand.
     * @implements IClientGMCommand
     * @constructor
     * @param {IClientGMCommand=} [p] Properties to set
     */
    function ClientGMCommand(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClientGMCommand command.
     * @member {string} command
     * @memberof ClientGMCommand
     * @instance
     */
    ClientGMCommand.prototype.command = "";

    /**
     * Creates a new ClientGMCommand instance using the specified properties.
     * @function create
     * @memberof ClientGMCommand
     * @static
     * @param {IClientGMCommand=} [properties] Properties to set
     * @returns {ClientGMCommand} ClientGMCommand instance
     */
    ClientGMCommand.create = function create(properties) {
        return new ClientGMCommand(properties);
    };

    /**
     * Encodes the specified ClientGMCommand message. Does not implicitly {@link ClientGMCommand.verify|verify} messages.
     * @function encode
     * @memberof ClientGMCommand
     * @static
     * @param {IClientGMCommand} m ClientGMCommand message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientGMCommand.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.command);
        return w;
    };

    /**
     * Decodes a ClientGMCommand message from the specified reader or buffer.
     * @function decode
     * @memberof ClientGMCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClientGMCommand} ClientGMCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientGMCommand.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClientGMCommand();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.command = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("command"))
            throw $util.ProtocolError("missing required 'command'", { instance: m });
        return m;
    };

    return ClientGMCommand;
})();

module.exports = $root;

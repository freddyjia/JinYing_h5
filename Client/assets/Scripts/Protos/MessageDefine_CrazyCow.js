/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_CrazyCow || ($protobuf.roots.MessageDefine_CrazyCow = {});

/**
 * CrazyCowMsgDefine enum.
 * @exports CrazyCowMsgDefine
 * @enum {string}
 * @property {number} MSG_CrazyCow_REQ_RANK=19001 MSG_CrazyCow_REQ_RANK value
 * @property {number} MSG_CrazyCow_REQ_MY_SCORE=19002 MSG_CrazyCow_REQ_MY_SCORE value
 */
$root.CrazyCowMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[19001] = "MSG_CrazyCow_REQ_RANK"] = 19001;
    values[valuesById[19002] = "MSG_CrazyCow_REQ_MY_SCORE"] = 19002;
    return values;
})();

module.exports = $root;

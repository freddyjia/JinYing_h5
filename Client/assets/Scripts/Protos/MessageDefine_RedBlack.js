/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_RedBlack || ($protobuf.roots.MessageDefine_RedBlack = {});

/**
 * RedBlackMsgDefine enum.
 * @exports RedBlackMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_REDBLACK_INIT=9200 MSG_PUSH_REDBLACK_INIT value
 * @property {number} MSG_PUSH_REDBLACK_STATE=9201 MSG_PUSH_REDBLACK_STATE value
 * @property {number} MSG_PUSH_REDBLACK_OTHER_BET=9202 MSG_PUSH_REDBLACK_OTHER_BET value
 * @property {number} MSG_REDBLACK_BET_REQ=9203 MSG_REDBLACK_BET_REQ value
 * @property {number} MSG_UPDATE_REDBLACK_ROOM=9206 MSG_UPDATE_REDBLACK_ROOM value
 * @property {number} MSG_PUSH_REDBLACK_SETTLEMENT=9207 MSG_PUSH_REDBLACK_SETTLEMENT value
 * @property {number} MSG_GAME_LOGIN_RED_BLACK=9208 MSG_GAME_LOGIN_RED_BLACK value
 * @property {number} MSG_REDBLACK_LEAVE_REQ=9205 MSG_REDBLACK_LEAVE_REQ value
 * @property {number} MSG_COMMON_RANK_LIST=9209 MSG_COMMON_RANK_LIST value
 */
$root.RedBlackMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[9200] = "MSG_PUSH_REDBLACK_INIT"] = 9200;
    values[valuesById[9201] = "MSG_PUSH_REDBLACK_STATE"] = 9201;
    values[valuesById[9202] = "MSG_PUSH_REDBLACK_OTHER_BET"] = 9202;
    values[valuesById[9203] = "MSG_REDBLACK_BET_REQ"] = 9203;
    values[valuesById[9206] = "MSG_UPDATE_REDBLACK_ROOM"] = 9206;
    values[valuesById[9207] = "MSG_PUSH_REDBLACK_SETTLEMENT"] = 9207;
    values[valuesById[9208] = "MSG_GAME_LOGIN_RED_BLACK"] = 9208;
    values[valuesById[9205] = "MSG_REDBLACK_LEAVE_REQ"] = 9205;
    values[valuesById[9209] = "MSG_COMMON_RANK_LIST"] = 9209;
    return values;
})();

module.exports = $root;

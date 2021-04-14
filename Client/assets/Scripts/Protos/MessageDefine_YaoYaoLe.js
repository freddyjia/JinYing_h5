/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_YaoYaoLe || ($protobuf.roots.MessageDefine_YaoYaoLe = {});

/**
 * YaoyapleMsgDefine enum.
 * @exports YaoyapleMsgDefine
 * @enum {string}
 * @property {number} MSG_Yaoyaple_PUSH_ROOM_INFO=9800 MSG_Yaoyaple_PUSH_ROOM_INFO value
 * @property {number} MSG_Yaoyaple_REQ_ADDCHIP=9801 MSG_Yaoyaple_REQ_ADDCHIP value
 * @property {number} MSG_Yaoyaple_PUSH_BETS_INFO=9802 MSG_Yaoyaple_PUSH_BETS_INFO value
 * @property {number} MSG_Yaoyaple_PUSH_STEP_INFO=9803 MSG_Yaoyaple_PUSH_STEP_INFO value
 * @property {number} MSG_Yaoyaple_PUSH__SIT_INFO=9805 MSG_Yaoyaple_PUSH__SIT_INFO value
 * @property {number} MSG_Yaoyaple_PUSH_CLEARING_INFO=9806 MSG_Yaoyaple_PUSH_CLEARING_INFO value
 * @property {number} MSG_Yaoyaple_PUSH_KIT_OUT_ROOM=9807 MSG_Yaoyaple_PUSH_KIT_OUT_ROOM value
 * @property {number} MSG_Yaoyaple_REQ_ONLINE_PLAYER_INFO=9808 MSG_Yaoyaple_REQ_ONLINE_PLAYER_INFO value
 * @property {number} MSG_GAME_LOGIN_YAO_YAO_LE=9809 MSG_GAME_LOGIN_YAO_YAO_LE value
 * @property {number} MSG_Yaoyaple_REQ_LEAVE_ROOM=9804 MSG_Yaoyaple_REQ_LEAVE_ROOM value
 * @property {number} MSG_COMMON_RANK_LIST=9810 MSG_COMMON_RANK_LIST value
 */
$root.YaoyapleMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[9800] = "MSG_Yaoyaple_PUSH_ROOM_INFO"] = 9800;
    values[valuesById[9801] = "MSG_Yaoyaple_REQ_ADDCHIP"] = 9801;
    values[valuesById[9802] = "MSG_Yaoyaple_PUSH_BETS_INFO"] = 9802;
    values[valuesById[9803] = "MSG_Yaoyaple_PUSH_STEP_INFO"] = 9803;
    values[valuesById[9805] = "MSG_Yaoyaple_PUSH__SIT_INFO"] = 9805;
    values[valuesById[9806] = "MSG_Yaoyaple_PUSH_CLEARING_INFO"] = 9806;
    values[valuesById[9807] = "MSG_Yaoyaple_PUSH_KIT_OUT_ROOM"] = 9807;
    values[valuesById[9808] = "MSG_Yaoyaple_REQ_ONLINE_PLAYER_INFO"] = 9808;
    values[valuesById[9809] = "MSG_GAME_LOGIN_YAO_YAO_LE"] = 9809;
    values[valuesById[9804] = "MSG_Yaoyaple_REQ_LEAVE_ROOM"] = 9804;
    values[valuesById[9810] = "MSG_COMMON_RANK_LIST"] = 9810;
    return values;
})();

module.exports = $root;

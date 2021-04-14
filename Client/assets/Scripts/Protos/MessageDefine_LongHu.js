/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_LongHu || ($protobuf.roots.MessageDefine_LongHu = {});

/**
 * LongHuMsgDefine enum.
 * @exports LongHuMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_LONGHU_INIT=9300 MSG_PUSH_LONGHU_INIT value
 * @property {number} MSG_PUSH_LONGHU_STATE=9301 MSG_PUSH_LONGHU_STATE value
 * @property {number} MSG_PUSH_LONGHU_OTHER_BET=9302 MSG_PUSH_LONGHU_OTHER_BET value
 * @property {number} MSG_LONGHU_BET_REQ=9303 MSG_LONGHU_BET_REQ value
 * @property {number} MSG_UPDATE_LONGHU_ROOM=9305 MSG_UPDATE_LONGHU_ROOM value
 * @property {number} MSG_PUSH_LONGHU_SETTLEMENT=9306 MSG_PUSH_LONGHU_SETTLEMENT value
 * @property {number} MSG_GAME_LOGIN_LONG_HU=9307 MSG_GAME_LOGIN_LONG_HU value
 * @property {number} MSG_LONGHU_LEAVE_REQ=9304 MSG_LONGHU_LEAVE_REQ value
 * @property {number} MSG_COMMON_RANK_LIST=9309 MSG_COMMON_RANK_LIST value
 */
$root.LongHuMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[9300] = "MSG_PUSH_LONGHU_INIT"] = 9300;
    values[valuesById[9301] = "MSG_PUSH_LONGHU_STATE"] = 9301;
    values[valuesById[9302] = "MSG_PUSH_LONGHU_OTHER_BET"] = 9302;
    values[valuesById[9303] = "MSG_LONGHU_BET_REQ"] = 9303;
    values[valuesById[9305] = "MSG_UPDATE_LONGHU_ROOM"] = 9305;
    values[valuesById[9306] = "MSG_PUSH_LONGHU_SETTLEMENT"] = 9306;
    values[valuesById[9307] = "MSG_GAME_LOGIN_LONG_HU"] = 9307;
    values[valuesById[9304] = "MSG_LONGHU_LEAVE_REQ"] = 9304;
    values[valuesById[9309] = "MSG_COMMON_RANK_LIST"] = 9309;
    return values;
})();

module.exports = $root;

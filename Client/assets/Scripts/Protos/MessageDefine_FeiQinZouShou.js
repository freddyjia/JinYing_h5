/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_FeiQinZouShou || ($protobuf.roots.MessageDefine_FeiQinZouShou = {});

/**
 * AnimalRandomMsgDefine enum.
 * @exports AnimalRandomMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_ROOM_INFO=9500 MSG_PUSH_ROOM_INFO value
 * @property {number} MSG_REQ_ADDCHIP=9501 MSG_REQ_ADDCHIP value
 * @property {number} MSG_PUSH_Animal_BET_INFO=9512 MSG_PUSH_Animal_BET_INFO value
 * @property {number} MSG_REQ_BE_BANKER=9502 MSG_REQ_BE_BANKER value
 * @property {number} MSG_PUSH_STEP_INFO=9503 MSG_PUSH_STEP_INFO value
 * @property {number} MSG_PUSH_BANKER_CHANGE=9505 MSG_PUSH_BANKER_CHANGE value
 * @property {number} MSG_PUSH_Animal_PLAYER_LEAVE=9506 MSG_PUSH_Animal_PLAYER_LEAVE value
 * @property {number} MSG_PUSH_CLEARING_INFO=9507 MSG_PUSH_CLEARING_INFO value
 * @property {number} MSG_REQ_QUIT_BANKERQUIT=9508 MSG_REQ_QUIT_BANKERQUIT value
 * @property {number} MSG_PUSH_KIT_OUT_ROOM=9509 MSG_PUSH_KIT_OUT_ROOM value
 * @property {number} MSG_REQ_ONLINE_PLAYER_INFO=9510 MSG_REQ_ONLINE_PLAYER_INFO value
 * @property {number} MSG_REQ_WANT_TO_BANKER_INFO=9511 MSG_REQ_WANT_TO_BANKER_INFO value
 * @property {number} MSG_REQ_Multi_ADDCHIP=9513 MSG_REQ_Multi_ADDCHIP value
 * @property {number} MSG_REQ_LEAVE_ROOM=9504 MSG_REQ_LEAVE_ROOM value
 * @property {number} MSG_GAME_LOGIN_ANIMAL=9514 MSG_GAME_LOGIN_ANIMAL value
 * @property {number} MSG_COMMON_RANK_LIST=9515 MSG_COMMON_RANK_LIST value
 */
$root.AnimalRandomMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[9500] = "MSG_PUSH_ROOM_INFO"] = 9500;
    values[valuesById[9501] = "MSG_REQ_ADDCHIP"] = 9501;
    values[valuesById[9512] = "MSG_PUSH_Animal_BET_INFO"] = 9512;
    values[valuesById[9502] = "MSG_REQ_BE_BANKER"] = 9502;
    values[valuesById[9503] = "MSG_PUSH_STEP_INFO"] = 9503;
    values[valuesById[9505] = "MSG_PUSH_BANKER_CHANGE"] = 9505;
    values[valuesById[9506] = "MSG_PUSH_Animal_PLAYER_LEAVE"] = 9506;
    values[valuesById[9507] = "MSG_PUSH_CLEARING_INFO"] = 9507;
    values[valuesById[9508] = "MSG_REQ_QUIT_BANKERQUIT"] = 9508;
    values[valuesById[9509] = "MSG_PUSH_KIT_OUT_ROOM"] = 9509;
    values[valuesById[9510] = "MSG_REQ_ONLINE_PLAYER_INFO"] = 9510;
    values[valuesById[9511] = "MSG_REQ_WANT_TO_BANKER_INFO"] = 9511;
    values[valuesById[9513] = "MSG_REQ_Multi_ADDCHIP"] = 9513;
    values[valuesById[9504] = "MSG_REQ_LEAVE_ROOM"] = 9504;
    values[valuesById[9514] = "MSG_GAME_LOGIN_ANIMAL"] = 9514;
    values[valuesById[9515] = "MSG_COMMON_RANK_LIST"] = 9515;
    return values;
})();

module.exports = $root;

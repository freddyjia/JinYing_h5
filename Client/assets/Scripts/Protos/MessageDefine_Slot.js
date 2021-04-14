/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_Slot || ($protobuf.roots.MessageDefine_Slot = {});

/**
 * SLOTMsgDefine enum.
 * @exports SLOTMsgDefine
 * @enum {string}
 * @property {number} MSG_SLOT_ACTION=13001 MSG_SLOT_ACTION value
 * @property {number} MSG_SLOT_PICK_REWARD=13002 MSG_SLOT_PICK_REWARD value
 * @property {number} MSG_SLOT_PUSH_BONUS_STEP=13005 MSG_SLOT_PUSH_BONUS_STEP value
 * @property {number} MSG_SLOT_PUSH_ROOM_INFO=13006 MSG_SLOT_PUSH_ROOM_INFO value
 * @property {number} MSG_SLOT_ROUND_END=13003 MSG_SLOT_ROUND_END value
 * @property {number} MSG_SLOT_BASE_SCORE_TIME=13004 MSG_SLOT_BASE_SCORE_TIME value
 * @property {number} MSG_GAME_LOGIN_SLOT=13007 MSG_GAME_LOGIN_SLOT value
 * @property {number} MSG_GAME_LOGOUT_SLOT=13008 MSG_GAME_LOGOUT_SLOT value
 */
$root.SLOTMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[13001] = "MSG_SLOT_ACTION"] = 13001;
    values[valuesById[13002] = "MSG_SLOT_PICK_REWARD"] = 13002;
    values[valuesById[13005] = "MSG_SLOT_PUSH_BONUS_STEP"] = 13005;
    values[valuesById[13006] = "MSG_SLOT_PUSH_ROOM_INFO"] = 13006;
    values[valuesById[13003] = "MSG_SLOT_ROUND_END"] = 13003;
    values[valuesById[13004] = "MSG_SLOT_BASE_SCORE_TIME"] = 13004;
    values[valuesById[13007] = "MSG_GAME_LOGIN_SLOT"] = 13007;
    values[valuesById[13008] = "MSG_GAME_LOGOUT_SLOT"] = 13008;
    return values;
})();

module.exports = $root;

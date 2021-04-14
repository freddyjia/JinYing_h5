/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_BaiJiaLe || ($protobuf.roots.MessageDefine_BaiJiaLe = {});

/**
 * BaiJiaLeMsgDefine enum.
 * @exports BaiJiaLeMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_BAIJIALE_INIT=1212001 MSG_PUSH_BAIJIALE_INIT value
 * @property {number} MSG_PUSH_BAIJIALE_STATE=1212002 MSG_PUSH_BAIJIALE_STATE value
 * @property {number} MSG_PUSH_BAIJIALE_OTHER_BET=1212003 MSG_PUSH_BAIJIALE_OTHER_BET value
 * @property {number} MSG_BAIJIALE_BET_REQ=1212004 MSG_BAIJIALE_BET_REQ value
 * @property {number} MSG_UPDATE_BAIJIALE_ROOM=1212005 MSG_UPDATE_BAIJIALE_ROOM value
 * @property {number} MSG_PUSH_BAIJIALE_SETTLEMENT=1212006 MSG_PUSH_BAIJIALE_SETTLEMENT value
 * @property {number} MSG_GAME_LOGIN_BAIJIALE=1212007 MSG_GAME_LOGIN_BAIJIALE value
 * @property {number} MSG_BAIJIALE_LEAVE_REQ=1212008 MSG_BAIJIALE_LEAVE_REQ value
 * @property {number} MSG_COMMON_RANK_LIST=1212009 MSG_COMMON_RANK_LIST value
 * @property {number} MSG_ALL_ROOM_INFO_REQ=1212010 MSG_ALL_ROOM_INFO_REQ value
 * @property {number} MSG_PUSH_BAIJIALE_DEAL=1212011 MSG_PUSH_BAIJIALE_DEAL value
 * @property {number} MSG_DEAL_REQ=1212012 MSG_DEAL_REQ value
 * @property {number} MSG_PRE_BET_REQ=1212013 MSG_PRE_BET_REQ value
 * @property {number} MSG_CONFIRM_BET_REQ=1212014 MSG_CONFIRM_BET_REQ value
 * @property {number} MSG_CLEAR_BET_REQ=1212015 MSG_CLEAR_BET_REQ value
 * @property {number} MSG_PUSH_BET_INFOS=1212016 MSG_PUSH_BET_INFOS value
 * @property {number} MSG_SIT_DOWN_REQ=1212017 MSG_SIT_DOWN_REQ value
 */
$root.BaiJiaLeMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1212001] = "MSG_PUSH_BAIJIALE_INIT"] = 1212001;
    values[valuesById[1212002] = "MSG_PUSH_BAIJIALE_STATE"] = 1212002;
    values[valuesById[1212003] = "MSG_PUSH_BAIJIALE_OTHER_BET"] = 1212003;
    values[valuesById[1212004] = "MSG_BAIJIALE_BET_REQ"] = 1212004;
    values[valuesById[1212005] = "MSG_UPDATE_BAIJIALE_ROOM"] = 1212005;
    values[valuesById[1212006] = "MSG_PUSH_BAIJIALE_SETTLEMENT"] = 1212006;
    values[valuesById[1212007] = "MSG_GAME_LOGIN_BAIJIALE"] = 1212007;
    values[valuesById[1212008] = "MSG_BAIJIALE_LEAVE_REQ"] = 1212008;
    values[valuesById[1212009] = "MSG_COMMON_RANK_LIST"] = 1212009;
    values[valuesById[1212010] = "MSG_ALL_ROOM_INFO_REQ"] = 1212010;
    values[valuesById[1212011] = "MSG_PUSH_BAIJIALE_DEAL"] = 1212011;
    values[valuesById[1212012] = "MSG_DEAL_REQ"] = 1212012;
    values[valuesById[1212013] = "MSG_PRE_BET_REQ"] = 1212013;
    values[valuesById[1212014] = "MSG_CONFIRM_BET_REQ"] = 1212014;
    values[valuesById[1212015] = "MSG_CLEAR_BET_REQ"] = 1212015;
    values[valuesById[1212016] = "MSG_PUSH_BET_INFOS"] = 1212016;
    values[valuesById[1212017] = "MSG_SIT_DOWN_REQ"] = 1212017;
    return values;
})();

module.exports = $root;

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_BaiRenNiuNiu || ($protobuf.roots.MessageDefine_BaiRenNiuNiu = {});

/**
 * BaiRenNiuNiuMsgDefine enum.
 * @exports BaiRenNiuNiuMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_ROOM_INIT_DATA=9100 MSG_PUSH_ROOM_INIT_DATA value
 * @property {number} MSG_BET_REQ=9101 MSG_BET_REQ value
 * @property {number} MSG_BANKER_LIST_REQ=9103 MSG_BANKER_LIST_REQ value
 * @property {number} MSG_PUSH_DEAL=9104 MSG_PUSH_DEAL value
 * @property {number} MSG_PUSH_BET_INFO=9105 MSG_PUSH_BET_INFO value
 * @property {number} MSG_PUSH_STATE=9106 MSG_PUSH_STATE value
 * @property {number} MSG_PUSH_PLAYER_LEAVE=9107 MSG_PUSH_PLAYER_LEAVE value
 * @property {number} MSG_BANKER_REQ=9108 MSG_BANKER_REQ value
 * @property {number} MSG_CANCEL_BANKER=9109 MSG_CANCEL_BANKER value
 * @property {number} MSG_PUSH_BANKER=9110 MSG_PUSH_BANKER value
 * @property {number} MSG_PUSH_SEAT=9111 MSG_PUSH_SEAT value
 * @property {number} MSG_MEMBER_LIST=9112 MSG_MEMBER_LIST value
 * @property {number} MSG_LEAVE_REQ=9102 MSG_LEAVE_REQ value
 * @property {number} MSG_GAME_LOGIN_BAI_REN_NIU=9113 MSG_GAME_LOGIN_BAI_REN_NIU value
 * @property {number} MSG_COMMON_RANK_LIST=9115 MSG_COMMON_RANK_LIST value
 */
$root.BaiRenNiuNiuMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[9100] = "MSG_PUSH_ROOM_INIT_DATA"] = 9100;
    values[valuesById[9101] = "MSG_BET_REQ"] = 9101;
    values[valuesById[9103] = "MSG_BANKER_LIST_REQ"] = 9103;
    values[valuesById[9104] = "MSG_PUSH_DEAL"] = 9104;
    values[valuesById[9105] = "MSG_PUSH_BET_INFO"] = 9105;
    values[valuesById[9106] = "MSG_PUSH_STATE"] = 9106;
    values[valuesById[9107] = "MSG_PUSH_PLAYER_LEAVE"] = 9107;
    values[valuesById[9108] = "MSG_BANKER_REQ"] = 9108;
    values[valuesById[9109] = "MSG_CANCEL_BANKER"] = 9109;
    values[valuesById[9110] = "MSG_PUSH_BANKER"] = 9110;
    values[valuesById[9111] = "MSG_PUSH_SEAT"] = 9111;
    values[valuesById[9112] = "MSG_MEMBER_LIST"] = 9112;
    values[valuesById[9102] = "MSG_LEAVE_REQ"] = 9102;
    values[valuesById[9113] = "MSG_GAME_LOGIN_BAI_REN_NIU"] = 9113;
    values[valuesById[9115] = "MSG_COMMON_RANK_LIST"] = 9115;
    return values;
})();

module.exports = $root;

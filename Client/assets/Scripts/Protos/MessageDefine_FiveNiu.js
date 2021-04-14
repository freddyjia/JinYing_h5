/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_FiveNiu || ($protobuf.roots.MessageDefine_FiveNiu = {});

/**
 * FiveNiuMsgDefine enum.
 * @exports FiveNiuMsgDefine
 * @enum {string}
 * @property {number} MSG_FIVENIU_INIT=11001 MSG_FIVENIU_INIT value
 * @property {number} MSG_PUSH_FIVENIU_PLAYERINFO=11002 MSG_PUSH_FIVENIU_PLAYERINFO value
 * @property {number} MSG_PUSH_FIVENIU_PLAYER_LEAVE=11003 MSG_PUSH_FIVENIU_PLAYER_LEAVE value
 * @property {number} MSG_PUSH_FIVENIU_ROOMSTATUS=11004 MSG_PUSH_FIVENIU_ROOMSTATUS value
 * @property {number} MSG_FIVENIU_ACTION=11005 MSG_FIVENIU_ACTION value
 * @property {number} MSG_PUSH_FIVENIU_ACTION=11006 MSG_PUSH_FIVENIU_ACTION value
 * @property {number} MSG_FIVENIU_CHAT=11007 MSG_FIVENIU_CHAT value
 * @property {number} MSG_PUSH_FIVENIU_CHAT=11008 MSG_PUSH_FIVENIU_CHAT value
 * @property {number} MSG_GAME_LOGIN_FIVE_NIU=11009 MSG_GAME_LOGIN_FIVE_NIU value
 * @property {number} MSG_GAME_LOGOUT_FIVE_NIU=11010 MSG_GAME_LOGOUT_FIVE_NIU value
 */
$root.FiveNiuMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[11001] = "MSG_FIVENIU_INIT"] = 11001;
    values[valuesById[11002] = "MSG_PUSH_FIVENIU_PLAYERINFO"] = 11002;
    values[valuesById[11003] = "MSG_PUSH_FIVENIU_PLAYER_LEAVE"] = 11003;
    values[valuesById[11004] = "MSG_PUSH_FIVENIU_ROOMSTATUS"] = 11004;
    values[valuesById[11005] = "MSG_FIVENIU_ACTION"] = 11005;
    values[valuesById[11006] = "MSG_PUSH_FIVENIU_ACTION"] = 11006;
    values[valuesById[11007] = "MSG_FIVENIU_CHAT"] = 11007;
    values[valuesById[11008] = "MSG_PUSH_FIVENIU_CHAT"] = 11008;
    values[valuesById[11009] = "MSG_GAME_LOGIN_FIVE_NIU"] = 11009;
    values[valuesById[11010] = "MSG_GAME_LOGOUT_FIVE_NIU"] = 11010;
    return values;
})();

module.exports = $root;

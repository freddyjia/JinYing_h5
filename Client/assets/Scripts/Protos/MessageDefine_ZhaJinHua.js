/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_ZhaJinHua || ($protobuf.roots.MessageDefine_ZhaJinHua = {});

/**
 * ZhaJinHuaMsgDefine enum.
 * @exports ZhaJinHuaMsgDefine
 * @enum {string}
 * @property {number} MSG_ZHAJINHUA_INIT=10001 MSG_ZHAJINHUA_INIT value
 * @property {number} MSG_PUSH_ZHAJINHUA_PLAYERINFO=10002 MSG_PUSH_ZHAJINHUA_PLAYERINFO value
 * @property {number} MSG_PUSH_ZHAJINHUA_PLAYER_LEAVE=10003 MSG_PUSH_ZHAJINHUA_PLAYER_LEAVE value
 * @property {number} MSG_PUSH_ZHAJINHUA_ROOMSTATUS=10004 MSG_PUSH_ZHAJINHUA_ROOMSTATUS value
 * @property {number} MSG_ZHAJINHUA_ACTION=10005 MSG_ZHAJINHUA_ACTION value
 * @property {number} MSG_PUSH_ZHAJINHUA_ACTION=10006 MSG_PUSH_ZHAJINHUA_ACTION value
 * @property {number} MSG_GAME_LOGIN_ZHA_JIN_HUA=10007 MSG_GAME_LOGIN_ZHA_JIN_HUA value
 * @property {number} MSG_GAME_LOGOUT_ZHA_JIN_HUA=10008 MSG_GAME_LOGOUT_ZHA_JIN_HUA value
 * @property {number} MSG_ZHAJINHUA_AIINFO=10009 MSG_ZHAJINHUA_AIINFO value
 * @property {number} MSG_ZHAJINHUA_CHANGE_TABLE=10010 MSG_ZHAJINHUA_CHANGE_TABLE value
 * @property {number} MSG_PUSH_CHANGE_ROOM=10011 MSG_PUSH_CHANGE_ROOM value
 */
$root.ZhaJinHuaMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[10001] = "MSG_ZHAJINHUA_INIT"] = 10001;
    values[valuesById[10002] = "MSG_PUSH_ZHAJINHUA_PLAYERINFO"] = 10002;
    values[valuesById[10003] = "MSG_PUSH_ZHAJINHUA_PLAYER_LEAVE"] = 10003;
    values[valuesById[10004] = "MSG_PUSH_ZHAJINHUA_ROOMSTATUS"] = 10004;
    values[valuesById[10005] = "MSG_ZHAJINHUA_ACTION"] = 10005;
    values[valuesById[10006] = "MSG_PUSH_ZHAJINHUA_ACTION"] = 10006;
    values[valuesById[10007] = "MSG_GAME_LOGIN_ZHA_JIN_HUA"] = 10007;
    values[valuesById[10008] = "MSG_GAME_LOGOUT_ZHA_JIN_HUA"] = 10008;
    values[valuesById[10009] = "MSG_ZHAJINHUA_AIINFO"] = 10009;
    values[valuesById[10010] = "MSG_ZHAJINHUA_CHANGE_TABLE"] = 10010;
    values[valuesById[10011] = "MSG_PUSH_CHANGE_ROOM"] = 10011;
    return values;
})();

module.exports = $root;

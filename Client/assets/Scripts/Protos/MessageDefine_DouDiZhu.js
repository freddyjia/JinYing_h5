/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_DouDiZhu || ($protobuf.roots.MessageDefine_DouDiZhu = {});

/**
 * DouDiZhuMsgDefine enum.
 * @exports DouDiZhuMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_DOUDIZHU_INIT=8900 MSG_PUSH_DOUDIZHU_INIT value
 * @property {number} MSG_PUSH_HANDCARD=8901 MSG_PUSH_HANDCARD value
 * @property {number} MSG_PUSH_COUNT_DOWN=8902 MSG_PUSH_COUNT_DOWN value
 * @property {number} MSG_REQUEST_ACTION=8903 MSG_REQUEST_ACTION value
 * @property {number} MSG_PUSH_FINAL_LANDLORD_INFO=8904 MSG_PUSH_FINAL_LANDLORD_INFO value
 * @property {number} MSG_PUSH_SETTLEMENT_INFO=8905 MSG_PUSH_SETTLEMENT_INFO value
 * @property {number} MSG_KICK_OUT_ROOM=8906 MSG_KICK_OUT_ROOM value
 * @property {number} MSG_PUSH_ACTION=8907 MSG_PUSH_ACTION value
 * @property {number} MSG_PUSH_REJOIN_INFO=8908 MSG_PUSH_REJOIN_INFO value
 * @property {number} MSG_REQUST_REFRESH_THREECARD=8911 MSG_REQUST_REFRESH_THREECARD value
 * @property {number} MSG_GAME_LOGIN_DOU_DI_ZHU=8909 MSG_GAME_LOGIN_DOU_DI_ZHU value
 * @property {number} MSG_GAME_LOGOUT_DOU_DI_ZHU=8910 MSG_GAME_LOGOUT_DOU_DI_ZHU value
 */
$root.DouDiZhuMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[8900] = "MSG_PUSH_DOUDIZHU_INIT"] = 8900;
    values[valuesById[8901] = "MSG_PUSH_HANDCARD"] = 8901;
    values[valuesById[8902] = "MSG_PUSH_COUNT_DOWN"] = 8902;
    values[valuesById[8903] = "MSG_REQUEST_ACTION"] = 8903;
    values[valuesById[8904] = "MSG_PUSH_FINAL_LANDLORD_INFO"] = 8904;
    values[valuesById[8905] = "MSG_PUSH_SETTLEMENT_INFO"] = 8905;
    values[valuesById[8906] = "MSG_KICK_OUT_ROOM"] = 8906;
    values[valuesById[8907] = "MSG_PUSH_ACTION"] = 8907;
    values[valuesById[8908] = "MSG_PUSH_REJOIN_INFO"] = 8908;
    values[valuesById[8911] = "MSG_REQUST_REFRESH_THREECARD"] = 8911;
    values[valuesById[8909] = "MSG_GAME_LOGIN_DOU_DI_ZHU"] = 8909;
    values[valuesById[8910] = "MSG_GAME_LOGOUT_DOU_DI_ZHU"] = 8910;
    return values;
})();

module.exports = $root;

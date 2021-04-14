/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_PaoDeKuai || ($protobuf.roots.MessageDefine_PaoDeKuai = {});

/**
 * PaoDeKuaiMsgDefine enum.
 * @exports PaoDeKuaiMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_PAODEKUAI_INIT=111001 MSG_PUSH_PAODEKUAI_INIT value
 * @property {number} MSG_PUSH_HANDCARD=111002 MSG_PUSH_HANDCARD value
 * @property {number} MSG_PUSH_COUNT_DOWN=111003 MSG_PUSH_COUNT_DOWN value
 * @property {number} MSG_REQUEST_ACTION=111004 MSG_REQUEST_ACTION value
 * @property {number} MSG_PUSH_BANKER_INFO=111005 MSG_PUSH_BANKER_INFO value
 * @property {number} MSG_PUSH_SETTLEMENT_INFO=111006 MSG_PUSH_SETTLEMENT_INFO value
 * @property {number} MSG_KICK_OUT_ROOM=111007 MSG_KICK_OUT_ROOM value
 * @property {number} MSG_PUSH_ACTION=111008 MSG_PUSH_ACTION value
 * @property {number} MSG_PUSH_REJOIN_INFO=111009 MSG_PUSH_REJOIN_INFO value
 * @property {number} MSG_PUSH_BOMB_REWARD=111010 MSG_PUSH_BOMB_REWARD value
 * @property {number} MSG_PUSH_AI_TEST_INFO=111011 MSG_PUSH_AI_TEST_INFO value
 * @property {number} MSG_GAME_LOGIN_PAODEKUAI=111012 MSG_GAME_LOGIN_PAODEKUAI value
 * @property {number} MSG_GAME_LOGOUT_PAODEKUAI=111013 MSG_GAME_LOGOUT_PAODEKUAI value
 */
$root.PaoDeKuaiMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[111001] = "MSG_PUSH_PAODEKUAI_INIT"] = 111001;
    values[valuesById[111002] = "MSG_PUSH_HANDCARD"] = 111002;
    values[valuesById[111003] = "MSG_PUSH_COUNT_DOWN"] = 111003;
    values[valuesById[111004] = "MSG_REQUEST_ACTION"] = 111004;
    values[valuesById[111005] = "MSG_PUSH_BANKER_INFO"] = 111005;
    values[valuesById[111006] = "MSG_PUSH_SETTLEMENT_INFO"] = 111006;
    values[valuesById[111007] = "MSG_KICK_OUT_ROOM"] = 111007;
    values[valuesById[111008] = "MSG_PUSH_ACTION"] = 111008;
    values[valuesById[111009] = "MSG_PUSH_REJOIN_INFO"] = 111009;
    values[valuesById[111010] = "MSG_PUSH_BOMB_REWARD"] = 111010;
    values[valuesById[111011] = "MSG_PUSH_AI_TEST_INFO"] = 111011;
    values[valuesById[111012] = "MSG_GAME_LOGIN_PAODEKUAI"] = 111012;
    values[valuesById[111013] = "MSG_GAME_LOGOUT_PAODEKUAI"] = 111013;
    return values;
})();

module.exports = $root;

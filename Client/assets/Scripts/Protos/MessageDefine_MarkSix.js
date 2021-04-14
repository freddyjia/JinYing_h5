/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_MarkSix || ($protobuf.roots.MessageDefine_MarkSix = {});

/**
 * MarkSixMsgDefine enum.
 * @exports MarkSixMsgDefine
 * @enum {string}
 * @property {number} MSG_MarkSix_Join_Room=9900 MSG_MarkSix_Join_Room value
 * @property {number} MSG_MarkSix_LotteryRecord=9901 MSG_MarkSix_LotteryRecord value
 * @property {number} MSG_MarkSix_BetRecord=9902 MSG_MarkSix_BetRecord value
 * @property {number} MSG_MarkSix_Bet=9903 MSG_MarkSix_Bet value
 * @property {number} MSG_MarkSix_Odds=9904 MSG_MarkSix_Odds value
 * @property {number} MSG_MarkSix_Leave=9905 MSG_MarkSix_Leave value
 * @property {number} MSG_MarkSix_Odds_Refresh_Time=9906 MSG_MarkSix_Odds_Refresh_Time value
 * @property {number} MSG_MarkSix_Open_Status=9907 MSG_MarkSix_Open_Status value
 */
$root.MarkSixMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[9900] = "MSG_MarkSix_Join_Room"] = 9900;
    values[valuesById[9901] = "MSG_MarkSix_LotteryRecord"] = 9901;
    values[valuesById[9902] = "MSG_MarkSix_BetRecord"] = 9902;
    values[valuesById[9903] = "MSG_MarkSix_Bet"] = 9903;
    values[valuesById[9904] = "MSG_MarkSix_Odds"] = 9904;
    values[valuesById[9905] = "MSG_MarkSix_Leave"] = 9905;
    values[valuesById[9906] = "MSG_MarkSix_Odds_Refresh_Time"] = 9906;
    values[valuesById[9907] = "MSG_MarkSix_Open_Status"] = 9907;
    return values;
})();

module.exports = $root;

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_BuYu || ($protobuf.roots.MessageDefine_BuYu = {});

/**
 * BuYuMsgDefine enum.
 * @exports BuYuMsgDefine
 * @enum {string}
 * @property {number} MSG_BuYu_PUSH_ROOM_INFO=12001 MSG_BuYu_PUSH_ROOM_INFO value
 * @property {number} MSG_BuYu_PUSH_ASYC_Fish=12002 MSG_BuYu_PUSH_ASYC_Fish value
 * @property {number} MSG_BuYu_PUSH_appear_Fish=12003 MSG_BuYu_PUSH_appear_Fish value
 * @property {number} MSG_BuYu_PUSH_KIT_OUT_ROOM=12005 MSG_BuYu_PUSH_KIT_OUT_ROOM value
 * @property {number} MSG_BuYu_REQ_Sheet_Bullet=12006 MSG_BuYu_REQ_Sheet_Bullet value
 * @property {number} MSG_BuYu_PUSH_Sheet_BulletBack=12007 MSG_BuYu_PUSH_Sheet_BulletBack value
 * @property {number} MSG_BuYu_PUSH_SyncBullets=12008 MSG_BuYu_PUSH_SyncBullets value
 * @property {number} MSG_BuYu_PUSH_Player_Join=12009 MSG_BuYu_PUSH_Player_Join value
 * @property {number} MSG_BuYu_PUSH_Player_Leave=12010 MSG_BuYu_PUSH_Player_Leave value
 * @property {number} MSG_BuYu_PUSH_Bullet_Boom=12011 MSG_BuYu_PUSH_Bullet_Boom value
 * @property {number} MSG_BuYu_REQ_PTUpDown=12012 MSG_BuYu_REQ_PTUpDown value
 * @property {number} MSG_BuYu_PUSH_PTUpDown=12013 MSG_BuYu_PUSH_PTUpDown value
 * @property {number} MSG_BuYu_PUSH_Tip=12014 MSG_BuYu_PUSH_Tip value
 * @property {number} MSG_BuYu_PUSH_SpecialDead=12015 MSG_BuYu_PUSH_SpecialDead value
 * @property {number} MSG_BuYu_REQ_FIRE_POWER=12016 MSG_BuYu_REQ_FIRE_POWER value
 * @property {number} MSG_BuYu_PUSH_FIRE_POWER=12017 MSG_BuYu_PUSH_FIRE_POWER value
 * @property {number} MSG_BuYu_PUSH_FishPoss=12018 MSG_BuYu_PUSH_FishPoss value
 * @property {number} MSG_BuYu_PUSH_Bullet_Gold_Back=12019 MSG_BuYu_PUSH_Bullet_Gold_Back value
 * @property {number} MSG_BuYu_REQ_ROOM_INFO=12020 MSG_BuYu_REQ_ROOM_INFO value
 * @property {number} MSG_BuYu_REQ_LEAVE_ROOM=12004 MSG_BuYu_REQ_LEAVE_ROOM value
 * @property {number} MSG_COMMON_RANK_LIST=12021 MSG_COMMON_RANK_LIST value
 * @property {number} MSG_BuYu_REQ_Change_Table=12022 MSG_BuYu_REQ_Change_Table value
 * @property {number} MSG_BuYu_PUSH_Change_Table=12023 MSG_BuYu_PUSH_Change_Table value
 */
$root.BuYuMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[12001] = "MSG_BuYu_PUSH_ROOM_INFO"] = 12001;
    values[valuesById[12002] = "MSG_BuYu_PUSH_ASYC_Fish"] = 12002;
    values[valuesById[12003] = "MSG_BuYu_PUSH_appear_Fish"] = 12003;
    values[valuesById[12005] = "MSG_BuYu_PUSH_KIT_OUT_ROOM"] = 12005;
    values[valuesById[12006] = "MSG_BuYu_REQ_Sheet_Bullet"] = 12006;
    values[valuesById[12007] = "MSG_BuYu_PUSH_Sheet_BulletBack"] = 12007;
    values[valuesById[12008] = "MSG_BuYu_PUSH_SyncBullets"] = 12008;
    values[valuesById[12009] = "MSG_BuYu_PUSH_Player_Join"] = 12009;
    values[valuesById[12010] = "MSG_BuYu_PUSH_Player_Leave"] = 12010;
    values[valuesById[12011] = "MSG_BuYu_PUSH_Bullet_Boom"] = 12011;
    values[valuesById[12012] = "MSG_BuYu_REQ_PTUpDown"] = 12012;
    values[valuesById[12013] = "MSG_BuYu_PUSH_PTUpDown"] = 12013;
    values[valuesById[12014] = "MSG_BuYu_PUSH_Tip"] = 12014;
    values[valuesById[12015] = "MSG_BuYu_PUSH_SpecialDead"] = 12015;
    values[valuesById[12016] = "MSG_BuYu_REQ_FIRE_POWER"] = 12016;
    values[valuesById[12017] = "MSG_BuYu_PUSH_FIRE_POWER"] = 12017;
    values[valuesById[12018] = "MSG_BuYu_PUSH_FishPoss"] = 12018;
    values[valuesById[12019] = "MSG_BuYu_PUSH_Bullet_Gold_Back"] = 12019;
    values[valuesById[12020] = "MSG_BuYu_REQ_ROOM_INFO"] = 12020;
    values[valuesById[12004] = "MSG_BuYu_REQ_LEAVE_ROOM"] = 12004;
    values[valuesById[12021] = "MSG_COMMON_RANK_LIST"] = 12021;
    values[valuesById[12022] = "MSG_BuYu_REQ_Change_Table"] = 12022;
    values[valuesById[12023] = "MSG_BuYu_PUSH_Change_Table"] = 12023;
    return values;
})();

module.exports = $root;

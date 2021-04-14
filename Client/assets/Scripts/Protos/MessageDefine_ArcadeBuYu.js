/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_ArcadeBuYu || ($protobuf.roots.MessageDefine_ArcadeBuYu = {});

/**
 * ArcadeBuYuMsgDefine enum.
 * @exports ArcadeBuYuMsgDefine
 * @enum {string}
 * @property {number} MSG_BuYu_PUSH_ROOM_INFO=14001 MSG_BuYu_PUSH_ROOM_INFO value
 * @property {number} MSG_BuYu_PUSH_ASYC_Fish=14002 MSG_BuYu_PUSH_ASYC_Fish value
 * @property {number} MSG_BuYu_PUSH_appear_Fish=14003 MSG_BuYu_PUSH_appear_Fish value
 * @property {number} MSG_BuYu_PUSH_KIT_OUT_ROOM=14005 MSG_BuYu_PUSH_KIT_OUT_ROOM value
 * @property {number} MSG_BuYu_REQ_Sheet_Bullet=14006 MSG_BuYu_REQ_Sheet_Bullet value
 * @property {number} MSG_BuYu_PUSH_Sheet_BulletBack=14007 MSG_BuYu_PUSH_Sheet_BulletBack value
 * @property {number} MSG_BuYu_PUSH_SyncBullets=14008 MSG_BuYu_PUSH_SyncBullets value
 * @property {number} MSG_BuYu_PUSH_Player_Join=14009 MSG_BuYu_PUSH_Player_Join value
 * @property {number} MSG_BuYu_PUSH_Player_Leave=14010 MSG_BuYu_PUSH_Player_Leave value
 * @property {number} MSG_BuYu_PUSH_Bullet_Boom=14011 MSG_BuYu_PUSH_Bullet_Boom value
 * @property {number} MSG_BuYu_REQ_PTUpDown=14012 MSG_BuYu_REQ_PTUpDown value
 * @property {number} MSG_BuYu_PUSH_PTUpDown=14013 MSG_BuYu_PUSH_PTUpDown value
 * @property {number} MSG_BuYu_PUSH_Tip=14014 MSG_BuYu_PUSH_Tip value
 * @property {number} MSG_BuYu_PUSH_SpecialDead=14015 MSG_BuYu_PUSH_SpecialDead value
 * @property {number} MSG_BuYu_REQ_FIRE_POWER=14016 MSG_BuYu_REQ_FIRE_POWER value
 * @property {number} MSG_BuYu_PUSH_FIRE_POWER=14017 MSG_BuYu_PUSH_FIRE_POWER value
 * @property {number} MSG_BuYu_PUSH_FishPoss=14018 MSG_BuYu_PUSH_FishPoss value
 * @property {number} MSG_BuYu_PUSH_Bullet_Gold_Back=14019 MSG_BuYu_PUSH_Bullet_Gold_Back value
 * @property {number} MSG_BuYu_REQ_ROOM_INFO=14020 MSG_BuYu_REQ_ROOM_INFO value
 * @property {number} MSG_BuYu_REQ_LEAVE_ROOM=14004 MSG_BuYu_REQ_LEAVE_ROOM value
 * @property {number} MSG_COMMON_RANK_LIST=14021 MSG_COMMON_RANK_LIST value
 * @property {number} MSG_BuYu_REQ_Change_Table=14022 MSG_BuYu_REQ_Change_Table value
 * @property {number} MSG_BuYu_PUSH_Change_Table=14023 MSG_BuYu_PUSH_Change_Table value
 * @property {number} MSG_BuYu_REQ_SpeedUpDown=14024 MSG_BuYu_REQ_SpeedUpDown value
 * @property {number} MSG_BuYu_PUSH_SpeedUpDown=14025 MSG_BuYu_PUSH_SpeedUpDown value
 */
$root.ArcadeBuYuMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[14001] = "MSG_BuYu_PUSH_ROOM_INFO"] = 14001;
    values[valuesById[14002] = "MSG_BuYu_PUSH_ASYC_Fish"] = 14002;
    values[valuesById[14003] = "MSG_BuYu_PUSH_appear_Fish"] = 14003;
    values[valuesById[14005] = "MSG_BuYu_PUSH_KIT_OUT_ROOM"] = 14005;
    values[valuesById[14006] = "MSG_BuYu_REQ_Sheet_Bullet"] = 14006;
    values[valuesById[14007] = "MSG_BuYu_PUSH_Sheet_BulletBack"] = 14007;
    values[valuesById[14008] = "MSG_BuYu_PUSH_SyncBullets"] = 14008;
    values[valuesById[14009] = "MSG_BuYu_PUSH_Player_Join"] = 14009;
    values[valuesById[14010] = "MSG_BuYu_PUSH_Player_Leave"] = 14010;
    values[valuesById[14011] = "MSG_BuYu_PUSH_Bullet_Boom"] = 14011;
    values[valuesById[14012] = "MSG_BuYu_REQ_PTUpDown"] = 14012;
    values[valuesById[14013] = "MSG_BuYu_PUSH_PTUpDown"] = 14013;
    values[valuesById[14014] = "MSG_BuYu_PUSH_Tip"] = 14014;
    values[valuesById[14015] = "MSG_BuYu_PUSH_SpecialDead"] = 14015;
    values[valuesById[14016] = "MSG_BuYu_REQ_FIRE_POWER"] = 14016;
    values[valuesById[14017] = "MSG_BuYu_PUSH_FIRE_POWER"] = 14017;
    values[valuesById[14018] = "MSG_BuYu_PUSH_FishPoss"] = 14018;
    values[valuesById[14019] = "MSG_BuYu_PUSH_Bullet_Gold_Back"] = 14019;
    values[valuesById[14020] = "MSG_BuYu_REQ_ROOM_INFO"] = 14020;
    values[valuesById[14004] = "MSG_BuYu_REQ_LEAVE_ROOM"] = 14004;
    values[valuesById[14021] = "MSG_COMMON_RANK_LIST"] = 14021;
    values[valuesById[14022] = "MSG_BuYu_REQ_Change_Table"] = 14022;
    values[valuesById[14023] = "MSG_BuYu_PUSH_Change_Table"] = 14023;
    values[valuesById[14024] = "MSG_BuYu_REQ_SpeedUpDown"] = 14024;
    values[valuesById[14025] = "MSG_BuYu_PUSH_SpeedUpDown"] = 14025;
    return values;
})();

module.exports = $root;

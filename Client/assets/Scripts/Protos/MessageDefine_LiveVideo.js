/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_LiveVideo || ($protobuf.roots.MessageDefine_LiveVideo = {});

/**
 * LiveVideoMsgDefine enum.
 * @exports LiveVideoMsgDefine
 * @enum {string}
 * @property {number} MSG_LiveVideo_LOGIN_ROOM=117001 MSG_LiveVideo_LOGIN_ROOM value
 * @property {number} MSG_LiveVideo_PUSH_ROOM_INFO=117002 MSG_LiveVideo_PUSH_ROOM_INFO value
 * @property {number} MSG_LiveVideo_LEAVE_ROOM=117003 MSG_LiveVideo_LEAVE_ROOM value
 * @property {number} MSG_LiveVideo_LOGIN_THIRD_GAME=117004 MSG_LiveVideo_LOGIN_THIRD_GAME value
 */
$root.LiveVideoMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[117001] = "MSG_LiveVideo_LOGIN_ROOM"] = 117001;
    values[valuesById[117002] = "MSG_LiveVideo_PUSH_ROOM_INFO"] = 117002;
    values[valuesById[117003] = "MSG_LiveVideo_LEAVE_ROOM"] = 117003;
    values[valuesById[117004] = "MSG_LiveVideo_LOGIN_THIRD_GAME"] = 117004;
    return values;
})();

module.exports = $root;

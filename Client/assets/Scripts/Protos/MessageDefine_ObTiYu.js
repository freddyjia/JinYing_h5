/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.MessageDefine_ObTiYu || ($protobuf.roots.MessageDefine_ObTiYu = {});

/**
 * ObTiYuMsgDefine enum.
 * @exports ObTiYuMsgDefine
 * @enum {string}
 * @property {number} MSG_ObTiYu_LOGIN_ROOM=115001 MSG_ObTiYu_LOGIN_ROOM value
 * @property {number} MSG_ObTiYu_PUSH_ROOM_INFO=115002 MSG_ObTiYu_PUSH_ROOM_INFO value
 * @property {number} MSG_ObTiYu_LEAVE_ROOM=115003 MSG_ObTiYu_LEAVE_ROOM value
 * @property {number} MSG_ObTiYu_LOGIN_THIRD_GAME=115004 MSG_ObTiYu_LOGIN_THIRD_GAME value
 */
$root.ObTiYuMsgDefine = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[115001] = "MSG_ObTiYu_LOGIN_ROOM"] = 115001;
    values[valuesById[115002] = "MSG_ObTiYu_PUSH_ROOM_INFO"] = 115002;
    values[valuesById[115003] = "MSG_ObTiYu_LEAVE_ROOM"] = 115003;
    values[valuesById[115004] = "MSG_ObTiYu_LOGIN_THIRD_GAME"] = 115004;
    return values;
})();

module.exports = $root;

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.DouDiZhu_backup || ($protobuf.roots.DouDiZhu_backup = {});

/**
 * MemberType enum.
 * @exports MemberType
 * @enum {string}
 * @property {number} Landlord=1 Landlord value
 * @property {number} Farmer=2 Farmer value
 */
$root.MemberType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Landlord"] = 1;
    values[valuesById[2] = "Farmer"] = 2;
    return values;
})();

/**
 * PlayCardType enum.
 * @exports PlayCardType
 * @enum {string}
 * @property {number} None=0 None value
 * @property {number} Single=1 Single value
 * @property {number} Double=2 Double value
 * @property {number} Three=3 Three value
 * @property {number} SingleLine=4 SingleLine value
 * @property {number} DoubleLine=5 DoubleLine value
 * @property {number} ThreeLine=6 ThreeLine value
 * @property {number} ThreeTakeOne=7 ThreeTakeOne value
 * @property {number} ThreeTakeTwo=8 ThreeTakeTwo value
 * @property {number} ThreeTakeOneLine=9 ThreeTakeOneLine value
 * @property {number} ThreeTakeTwoLine=10 ThreeTakeTwoLine value
 * @property {number} FourTakeOne=11 FourTakeOne value
 * @property {number} FourTakeTwo=12 FourTakeTwo value
 * @property {number} Bomb=13 Bomb value
 * @property {number} KingBomb=14 KingBomb value
 */
$root.PlayCardType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "None"] = 0;
    values[valuesById[1] = "Single"] = 1;
    values[valuesById[2] = "Double"] = 2;
    values[valuesById[3] = "Three"] = 3;
    values[valuesById[4] = "SingleLine"] = 4;
    values[valuesById[5] = "DoubleLine"] = 5;
    values[valuesById[6] = "ThreeLine"] = 6;
    values[valuesById[7] = "ThreeTakeOne"] = 7;
    values[valuesById[8] = "ThreeTakeTwo"] = 8;
    values[valuesById[9] = "ThreeTakeOneLine"] = 9;
    values[valuesById[10] = "ThreeTakeTwoLine"] = 10;
    values[valuesById[11] = "FourTakeOne"] = 11;
    values[valuesById[12] = "FourTakeTwo"] = 12;
    values[valuesById[13] = "Bomb"] = 13;
    values[valuesById[14] = "KingBomb"] = 14;
    return values;
})();

$root.CardInfo = (function() {

    /**
     * Properties of a CardInfo.
     * @exports ICardInfo
     * @interface ICardInfo
     * @property {number} id CardInfo id
     * @property {CardColor} color CardInfo color
     * @property {CardSize} size CardInfo size
     */

    /**
     * Constructs a new CardInfo.
     * @exports CardInfo
     * @classdesc Represents a CardInfo.
     * @implements ICardInfo
     * @constructor
     * @param {ICardInfo=} [p] Properties to set
     */
    function CardInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CardInfo id.
     * @member {number} id
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.id = 0;

    /**
     * CardInfo color.
     * @member {CardColor} color
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.color = 1;

    /**
     * CardInfo size.
     * @member {CardSize} size
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.size = 3;

    /**
     * Creates a new CardInfo instance using the specified properties.
     * @function create
     * @memberof CardInfo
     * @static
     * @param {ICardInfo=} [properties] Properties to set
     * @returns {CardInfo} CardInfo instance
     */
    CardInfo.create = function create(properties) {
        return new CardInfo(properties);
    };

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @function encode
     * @memberof CardInfo
     * @static
     * @param {ICardInfo} m CardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.color);
        w.uint32(24).int32(m.size);
        return w;
    };

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CardInfo} CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
                break;
            case 2:
                m.color = r.int32();
                break;
            case 3:
                m.size = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("color"))
            throw $util.ProtocolError("missing required 'color'", { instance: m });
        if (!m.hasOwnProperty("size"))
            throw $util.ProtocolError("missing required 'size'", { instance: m });
        return m;
    };

    return CardInfo;
})();

$root.DouDiZhuMember = (function() {

    /**
     * Properties of a DouDiZhuMember.
     * @exports IDouDiZhuMember
     * @interface IDouDiZhuMember
     * @property {string|null} [playerID] DouDiZhuMember playerID
     * @property {string|null} [userName] DouDiZhuMember userName
     * @property {string|null} [headImageUrl] DouDiZhuMember headImageUrl
     * @property {string|null} [headbox] DouDiZhuMember headbox
     * @property {number|null} [vipLv] DouDiZhuMember vipLv
     * @property {string|null} [gold] DouDiZhuMember gold
     * @property {number} index DouDiZhuMember index
     * @property {MemberType|null} [type] DouDiZhuMember type
     * @property {Array.<ICardInfo>|null} [handcard] DouDiZhuMember handcard
     * @property {number|null} [cardCount] DouDiZhuMember cardCount
     * @property {boolean|null} [isTrusteeship] DouDiZhuMember isTrusteeship
     * @property {boolean|null} [isJiao] DouDiZhuMember isJiao
     */

    /**
     * Constructs a new DouDiZhuMember.
     * @exports DouDiZhuMember
     * @classdesc Represents a DouDiZhuMember.
     * @implements IDouDiZhuMember
     * @constructor
     * @param {IDouDiZhuMember=} [p] Properties to set
     */
    function DouDiZhuMember(p) {
        this.handcard = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DouDiZhuMember playerID.
     * @member {string} playerID
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.playerID = "";

    /**
     * DouDiZhuMember userName.
     * @member {string} userName
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.userName = "";

    /**
     * DouDiZhuMember headImageUrl.
     * @member {string} headImageUrl
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.headImageUrl = "";

    /**
     * DouDiZhuMember headbox.
     * @member {string} headbox
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.headbox = "";

    /**
     * DouDiZhuMember vipLv.
     * @member {number} vipLv
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.vipLv = 0;

    /**
     * DouDiZhuMember gold.
     * @member {string} gold
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.gold = "";

    /**
     * DouDiZhuMember index.
     * @member {number} index
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.index = 0;

    /**
     * DouDiZhuMember type.
     * @member {MemberType} type
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.type = 1;

    /**
     * DouDiZhuMember handcard.
     * @member {Array.<ICardInfo>} handcard
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.handcard = $util.emptyArray;

    /**
     * DouDiZhuMember cardCount.
     * @member {number} cardCount
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.cardCount = 0;

    /**
     * DouDiZhuMember isTrusteeship.
     * @member {boolean} isTrusteeship
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.isTrusteeship = false;

    /**
     * DouDiZhuMember isJiao.
     * @member {boolean} isJiao
     * @memberof DouDiZhuMember
     * @instance
     */
    DouDiZhuMember.prototype.isJiao = false;

    /**
     * Creates a new DouDiZhuMember instance using the specified properties.
     * @function create
     * @memberof DouDiZhuMember
     * @static
     * @param {IDouDiZhuMember=} [properties] Properties to set
     * @returns {DouDiZhuMember} DouDiZhuMember instance
     */
    DouDiZhuMember.create = function create(properties) {
        return new DouDiZhuMember(properties);
    };

    /**
     * Encodes the specified DouDiZhuMember message. Does not implicitly {@link DouDiZhuMember.verify|verify} messages.
     * @function encode
     * @memberof DouDiZhuMember
     * @static
     * @param {IDouDiZhuMember} m DouDiZhuMember message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DouDiZhuMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerID != null && m.hasOwnProperty("playerID"))
            w.uint32(10).string(m.playerID);
        if (m.userName != null && m.hasOwnProperty("userName"))
            w.uint32(18).string(m.userName);
        if (m.headImageUrl != null && m.hasOwnProperty("headImageUrl"))
            w.uint32(26).string(m.headImageUrl);
        if (m.headbox != null && m.hasOwnProperty("headbox"))
            w.uint32(34).string(m.headbox);
        if (m.vipLv != null && m.hasOwnProperty("vipLv"))
            w.uint32(40).int32(m.vipLv);
        if (m.gold != null && m.hasOwnProperty("gold"))
            w.uint32(50).string(m.gold);
        w.uint32(56).int32(m.index);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(64).int32(m.type);
        if (m.handcard != null && m.handcard.length) {
            for (var i = 0; i < m.handcard.length; ++i)
                $root.CardInfo.encode(m.handcard[i], w.uint32(74).fork()).ldelim();
        }
        if (m.cardCount != null && m.hasOwnProperty("cardCount"))
            w.uint32(80).int32(m.cardCount);
        if (m.isTrusteeship != null && m.hasOwnProperty("isTrusteeship"))
            w.uint32(88).bool(m.isTrusteeship);
        if (m.isJiao != null && m.hasOwnProperty("isJiao"))
            w.uint32(96).bool(m.isJiao);
        return w;
    };

    /**
     * Decodes a DouDiZhuMember message from the specified reader or buffer.
     * @function decode
     * @memberof DouDiZhuMember
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DouDiZhuMember} DouDiZhuMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DouDiZhuMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DouDiZhuMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerID = r.string();
                break;
            case 2:
                m.userName = r.string();
                break;
            case 3:
                m.headImageUrl = r.string();
                break;
            case 4:
                m.headbox = r.string();
                break;
            case 5:
                m.vipLv = r.int32();
                break;
            case 6:
                m.gold = r.string();
                break;
            case 7:
                m.index = r.int32();
                break;
            case 8:
                m.type = r.int32();
                break;
            case 9:
                if (!(m.handcard && m.handcard.length))
                    m.handcard = [];
                m.handcard.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 10:
                m.cardCount = r.int32();
                break;
            case 11:
                m.isTrusteeship = r.bool();
                break;
            case 12:
                m.isJiao = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        return m;
    };

    return DouDiZhuMember;
})();

$root.PushDouDiZhuInit = (function() {

    /**
     * Properties of a PushDouDiZhuInit.
     * @exports IPushDouDiZhuInit
     * @interface IPushDouDiZhuInit
     * @property {number} playType PushDouDiZhuInit playType
     * @property {number} playId PushDouDiZhuInit playId
     * @property {number} roomId PushDouDiZhuInit roomId
     * @property {Array.<IDouDiZhuMember>|null} [member] PushDouDiZhuInit member
     */

    /**
     * Constructs a new PushDouDiZhuInit.
     * @exports PushDouDiZhuInit
     * @classdesc Represents a PushDouDiZhuInit.
     * @implements IPushDouDiZhuInit
     * @constructor
     * @param {IPushDouDiZhuInit=} [p] Properties to set
     */
    function PushDouDiZhuInit(p) {
        this.member = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushDouDiZhuInit playType.
     * @member {number} playType
     * @memberof PushDouDiZhuInit
     * @instance
     */
    PushDouDiZhuInit.prototype.playType = 0;

    /**
     * PushDouDiZhuInit playId.
     * @member {number} playId
     * @memberof PushDouDiZhuInit
     * @instance
     */
    PushDouDiZhuInit.prototype.playId = 0;

    /**
     * PushDouDiZhuInit roomId.
     * @member {number} roomId
     * @memberof PushDouDiZhuInit
     * @instance
     */
    PushDouDiZhuInit.prototype.roomId = 0;

    /**
     * PushDouDiZhuInit member.
     * @member {Array.<IDouDiZhuMember>} member
     * @memberof PushDouDiZhuInit
     * @instance
     */
    PushDouDiZhuInit.prototype.member = $util.emptyArray;

    /**
     * Creates a new PushDouDiZhuInit instance using the specified properties.
     * @function create
     * @memberof PushDouDiZhuInit
     * @static
     * @param {IPushDouDiZhuInit=} [properties] Properties to set
     * @returns {PushDouDiZhuInit} PushDouDiZhuInit instance
     */
    PushDouDiZhuInit.create = function create(properties) {
        return new PushDouDiZhuInit(properties);
    };

    /**
     * Encodes the specified PushDouDiZhuInit message. Does not implicitly {@link PushDouDiZhuInit.verify|verify} messages.
     * @function encode
     * @memberof PushDouDiZhuInit
     * @static
     * @param {IPushDouDiZhuInit} m PushDouDiZhuInit message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushDouDiZhuInit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        w.uint32(16).int32(m.playId);
        w.uint32(24).int32(m.roomId);
        if (m.member != null && m.member.length) {
            for (var i = 0; i < m.member.length; ++i)
                $root.DouDiZhuMember.encode(m.member[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushDouDiZhuInit message from the specified reader or buffer.
     * @function decode
     * @memberof PushDouDiZhuInit
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushDouDiZhuInit} PushDouDiZhuInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushDouDiZhuInit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushDouDiZhuInit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playType = r.int32();
                break;
            case 2:
                m.playId = r.int32();
                break;
            case 3:
                m.roomId = r.int32();
                break;
            case 4:
                if (!(m.member && m.member.length))
                    m.member = [];
                m.member.push($root.DouDiZhuMember.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playType"))
            throw $util.ProtocolError("missing required 'playType'", { instance: m });
        if (!m.hasOwnProperty("playId"))
            throw $util.ProtocolError("missing required 'playId'", { instance: m });
        if (!m.hasOwnProperty("roomId"))
            throw $util.ProtocolError("missing required 'roomId'", { instance: m });
        return m;
    };

    return PushDouDiZhuInit;
})();

$root.PlayCardInfo = (function() {

    /**
     * Properties of a PlayCardInfo.
     * @exports IPlayCardInfo
     * @interface IPlayCardInfo
     * @property {PlayCardType} playCardType PlayCardInfo playCardType
     * @property {Array.<ICardInfo>|null} [cardInfo] PlayCardInfo cardInfo
     * @property {number|null} [maxCardSize] PlayCardInfo maxCardSize
     */

    /**
     * Constructs a new PlayCardInfo.
     * @exports PlayCardInfo
     * @classdesc Represents a PlayCardInfo.
     * @implements IPlayCardInfo
     * @constructor
     * @param {IPlayCardInfo=} [p] Properties to set
     */
    function PlayCardInfo(p) {
        this.cardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayCardInfo playCardType.
     * @member {PlayCardType} playCardType
     * @memberof PlayCardInfo
     * @instance
     */
    PlayCardInfo.prototype.playCardType = 0;

    /**
     * PlayCardInfo cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof PlayCardInfo
     * @instance
     */
    PlayCardInfo.prototype.cardInfo = $util.emptyArray;

    /**
     * PlayCardInfo maxCardSize.
     * @member {number} maxCardSize
     * @memberof PlayCardInfo
     * @instance
     */
    PlayCardInfo.prototype.maxCardSize = 0;

    /**
     * Creates a new PlayCardInfo instance using the specified properties.
     * @function create
     * @memberof PlayCardInfo
     * @static
     * @param {IPlayCardInfo=} [properties] Properties to set
     * @returns {PlayCardInfo} PlayCardInfo instance
     */
    PlayCardInfo.create = function create(properties) {
        return new PlayCardInfo(properties);
    };

    /**
     * Encodes the specified PlayCardInfo message. Does not implicitly {@link PlayCardInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayCardInfo
     * @static
     * @param {IPlayCardInfo} m PlayCardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayCardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playCardType);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(18).fork()).ldelim();
        }
        if (m.maxCardSize != null && m.hasOwnProperty("maxCardSize"))
            w.uint32(24).int32(m.maxCardSize);
        return w;
    };

    /**
     * Decodes a PlayCardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayCardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayCardInfo} PlayCardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayCardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayCardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playCardType = r.int32();
                break;
            case 2:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.maxCardSize = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playCardType"))
            throw $util.ProtocolError("missing required 'playCardType'", { instance: m });
        return m;
    };

    return PlayCardInfo;
})();

$root.HandCard = (function() {

    /**
     * Properties of a HandCard.
     * @exports IHandCard
     * @interface IHandCard
     * @property {number} index HandCard index
     * @property {number} CardCount HandCard CardCount
     * @property {Array.<ICardInfo>|null} [cardInfo] HandCard cardInfo
     */

    /**
     * Constructs a new HandCard.
     * @exports HandCard
     * @classdesc Represents a HandCard.
     * @implements IHandCard
     * @constructor
     * @param {IHandCard=} [p] Properties to set
     */
    function HandCard(p) {
        this.cardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HandCard index.
     * @member {number} index
     * @memberof HandCard
     * @instance
     */
    HandCard.prototype.index = 0;

    /**
     * HandCard CardCount.
     * @member {number} CardCount
     * @memberof HandCard
     * @instance
     */
    HandCard.prototype.CardCount = 0;

    /**
     * HandCard cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof HandCard
     * @instance
     */
    HandCard.prototype.cardInfo = $util.emptyArray;

    /**
     * Creates a new HandCard instance using the specified properties.
     * @function create
     * @memberof HandCard
     * @static
     * @param {IHandCard=} [properties] Properties to set
     * @returns {HandCard} HandCard instance
     */
    HandCard.create = function create(properties) {
        return new HandCard(properties);
    };

    /**
     * Encodes the specified HandCard message. Does not implicitly {@link HandCard.verify|verify} messages.
     * @function encode
     * @memberof HandCard
     * @static
     * @param {IHandCard} m HandCard message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).int32(m.CardCount);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a HandCard message from the specified reader or buffer.
     * @function decode
     * @memberof HandCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HandCard} HandCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HandCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.CardCount = r.int32();
                break;
            case 3:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("CardCount"))
            throw $util.ProtocolError("missing required 'CardCount'", { instance: m });
        return m;
    };

    return HandCard;
})();

$root.PushHandCard = (function() {

    /**
     * Properties of a PushHandCard.
     * @exports IPushHandCard
     * @interface IPushHandCard
     * @property {boolean} perspective PushHandCard perspective
     * @property {Array.<IHandCard>|null} [handcard] PushHandCard handcard
     */

    /**
     * Constructs a new PushHandCard.
     * @exports PushHandCard
     * @classdesc Represents a PushHandCard.
     * @implements IPushHandCard
     * @constructor
     * @param {IPushHandCard=} [p] Properties to set
     */
    function PushHandCard(p) {
        this.handcard = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushHandCard perspective.
     * @member {boolean} perspective
     * @memberof PushHandCard
     * @instance
     */
    PushHandCard.prototype.perspective = false;

    /**
     * PushHandCard handcard.
     * @member {Array.<IHandCard>} handcard
     * @memberof PushHandCard
     * @instance
     */
    PushHandCard.prototype.handcard = $util.emptyArray;

    /**
     * Creates a new PushHandCard instance using the specified properties.
     * @function create
     * @memberof PushHandCard
     * @static
     * @param {IPushHandCard=} [properties] Properties to set
     * @returns {PushHandCard} PushHandCard instance
     */
    PushHandCard.create = function create(properties) {
        return new PushHandCard(properties);
    };

    /**
     * Encodes the specified PushHandCard message. Does not implicitly {@link PushHandCard.verify|verify} messages.
     * @function encode
     * @memberof PushHandCard
     * @static
     * @param {IPushHandCard} m PushHandCard message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushHandCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.perspective);
        if (m.handcard != null && m.handcard.length) {
            for (var i = 0; i < m.handcard.length; ++i)
                $root.HandCard.encode(m.handcard[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushHandCard message from the specified reader or buffer.
     * @function decode
     * @memberof PushHandCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushHandCard} PushHandCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushHandCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushHandCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.perspective = r.bool();
                break;
            case 2:
                if (!(m.handcard && m.handcard.length))
                    m.handcard = [];
                m.handcard.push($root.HandCard.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("perspective"))
            throw $util.ProtocolError("missing required 'perspective'", { instance: m });
        return m;
    };

    return PushHandCard;
})();

/**
 * DouDiZhuActionType enum.
 * @exports DouDiZhuActionType
 * @enum {string}
 * @property {number} JIAO=1 JIAO value
 * @property {number} QIANG=2 QIANG value
 * @property {number} CHU=3 CHU value
 * @property {number} TRUSTEESHIP=4 TRUSTEESHIP value
 * @property {number} LEAVE=5 LEAVE value
 */
$root.DouDiZhuActionType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "JIAO"] = 1;
    values[valuesById[2] = "QIANG"] = 2;
    values[valuesById[3] = "CHU"] = 3;
    values[valuesById[4] = "TRUSTEESHIP"] = 4;
    values[valuesById[5] = "LEAVE"] = 5;
    return values;
})();

$root.PushCountDown = (function() {

    /**
     * Properties of a PushCountDown.
     * @exports IPushCountDown
     * @interface IPushCountDown
     * @property {number} index PushCountDown index
     * @property {number} countdown PushCountDown countdown
     * @property {DouDiZhuActionType} countdownType PushCountDown countdownType
     * @property {boolean|null} [canPlay] PushCountDown canPlay
     * @property {Array.<IPlayCardInfo>|null} [tips] PushCountDown tips
     */

    /**
     * Constructs a new PushCountDown.
     * @exports PushCountDown
     * @classdesc Represents a PushCountDown.
     * @implements IPushCountDown
     * @constructor
     * @param {IPushCountDown=} [p] Properties to set
     */
    function PushCountDown(p) {
        this.tips = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushCountDown index.
     * @member {number} index
     * @memberof PushCountDown
     * @instance
     */
    PushCountDown.prototype.index = 0;

    /**
     * PushCountDown countdown.
     * @member {number} countdown
     * @memberof PushCountDown
     * @instance
     */
    PushCountDown.prototype.countdown = 0;

    /**
     * PushCountDown countdownType.
     * @member {DouDiZhuActionType} countdownType
     * @memberof PushCountDown
     * @instance
     */
    PushCountDown.prototype.countdownType = 1;

    /**
     * PushCountDown canPlay.
     * @member {boolean} canPlay
     * @memberof PushCountDown
     * @instance
     */
    PushCountDown.prototype.canPlay = false;

    /**
     * PushCountDown tips.
     * @member {Array.<IPlayCardInfo>} tips
     * @memberof PushCountDown
     * @instance
     */
    PushCountDown.prototype.tips = $util.emptyArray;

    /**
     * Creates a new PushCountDown instance using the specified properties.
     * @function create
     * @memberof PushCountDown
     * @static
     * @param {IPushCountDown=} [properties] Properties to set
     * @returns {PushCountDown} PushCountDown instance
     */
    PushCountDown.create = function create(properties) {
        return new PushCountDown(properties);
    };

    /**
     * Encodes the specified PushCountDown message. Does not implicitly {@link PushCountDown.verify|verify} messages.
     * @function encode
     * @memberof PushCountDown
     * @static
     * @param {IPushCountDown} m PushCountDown message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushCountDown.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).int32(m.countdown);
        w.uint32(24).int32(m.countdownType);
        if (m.canPlay != null && m.hasOwnProperty("canPlay"))
            w.uint32(32).bool(m.canPlay);
        if (m.tips != null && m.tips.length) {
            for (var i = 0; i < m.tips.length; ++i)
                $root.PlayCardInfo.encode(m.tips[i], w.uint32(42).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushCountDown message from the specified reader or buffer.
     * @function decode
     * @memberof PushCountDown
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushCountDown} PushCountDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushCountDown.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushCountDown();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.countdown = r.int32();
                break;
            case 3:
                m.countdownType = r.int32();
                break;
            case 4:
                m.canPlay = r.bool();
                break;
            case 5:
                if (!(m.tips && m.tips.length))
                    m.tips = [];
                m.tips.push($root.PlayCardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("countdown"))
            throw $util.ProtocolError("missing required 'countdown'", { instance: m });
        if (!m.hasOwnProperty("countdownType"))
            throw $util.ProtocolError("missing required 'countdownType'", { instance: m });
        return m;
    };

    return PushCountDown;
})();

$root.DouDiZhuActionReq = (function() {

    /**
     * Properties of a DouDiZhuActionReq.
     * @exports IDouDiZhuActionReq
     * @interface IDouDiZhuActionReq
     * @property {DouDiZhuActionType} actionType DouDiZhuActionReq actionType
     * @property {boolean|null} [jiao] DouDiZhuActionReq jiao
     * @property {boolean|null} [qiang] DouDiZhuActionReq qiang
     * @property {Array.<ICardInfo>|null} [cardInfo] DouDiZhuActionReq cardInfo
     * @property {boolean|null} [isTrusteeship] DouDiZhuActionReq isTrusteeship
     */

    /**
     * Constructs a new DouDiZhuActionReq.
     * @exports DouDiZhuActionReq
     * @classdesc Represents a DouDiZhuActionReq.
     * @implements IDouDiZhuActionReq
     * @constructor
     * @param {IDouDiZhuActionReq=} [p] Properties to set
     */
    function DouDiZhuActionReq(p) {
        this.cardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DouDiZhuActionReq actionType.
     * @member {DouDiZhuActionType} actionType
     * @memberof DouDiZhuActionReq
     * @instance
     */
    DouDiZhuActionReq.prototype.actionType = 1;

    /**
     * DouDiZhuActionReq jiao.
     * @member {boolean} jiao
     * @memberof DouDiZhuActionReq
     * @instance
     */
    DouDiZhuActionReq.prototype.jiao = false;

    /**
     * DouDiZhuActionReq qiang.
     * @member {boolean} qiang
     * @memberof DouDiZhuActionReq
     * @instance
     */
    DouDiZhuActionReq.prototype.qiang = false;

    /**
     * DouDiZhuActionReq cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof DouDiZhuActionReq
     * @instance
     */
    DouDiZhuActionReq.prototype.cardInfo = $util.emptyArray;

    /**
     * DouDiZhuActionReq isTrusteeship.
     * @member {boolean} isTrusteeship
     * @memberof DouDiZhuActionReq
     * @instance
     */
    DouDiZhuActionReq.prototype.isTrusteeship = false;

    /**
     * Creates a new DouDiZhuActionReq instance using the specified properties.
     * @function create
     * @memberof DouDiZhuActionReq
     * @static
     * @param {IDouDiZhuActionReq=} [properties] Properties to set
     * @returns {DouDiZhuActionReq} DouDiZhuActionReq instance
     */
    DouDiZhuActionReq.create = function create(properties) {
        return new DouDiZhuActionReq(properties);
    };

    /**
     * Encodes the specified DouDiZhuActionReq message. Does not implicitly {@link DouDiZhuActionReq.verify|verify} messages.
     * @function encode
     * @memberof DouDiZhuActionReq
     * @static
     * @param {IDouDiZhuActionReq} m DouDiZhuActionReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DouDiZhuActionReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.actionType);
        if (m.jiao != null && m.hasOwnProperty("jiao"))
            w.uint32(16).bool(m.jiao);
        if (m.qiang != null && m.hasOwnProperty("qiang"))
            w.uint32(24).bool(m.qiang);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(34).fork()).ldelim();
        }
        if (m.isTrusteeship != null && m.hasOwnProperty("isTrusteeship"))
            w.uint32(40).bool(m.isTrusteeship);
        return w;
    };

    /**
     * Decodes a DouDiZhuActionReq message from the specified reader or buffer.
     * @function decode
     * @memberof DouDiZhuActionReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DouDiZhuActionReq} DouDiZhuActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DouDiZhuActionReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DouDiZhuActionReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.actionType = r.int32();
                break;
            case 2:
                m.jiao = r.bool();
                break;
            case 3:
                m.qiang = r.bool();
                break;
            case 4:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.isTrusteeship = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("actionType"))
            throw $util.ProtocolError("missing required 'actionType'", { instance: m });
        return m;
    };

    return DouDiZhuActionReq;
})();

$root.DouDiZhuActionRes = (function() {

    /**
     * Properties of a DouDiZhuActionRes.
     * @exports IDouDiZhuActionRes
     * @interface IDouDiZhuActionRes
     * @property {boolean} isSuccess DouDiZhuActionRes isSuccess
     * @property {string} tips DouDiZhuActionRes tips
     */

    /**
     * Constructs a new DouDiZhuActionRes.
     * @exports DouDiZhuActionRes
     * @classdesc Represents a DouDiZhuActionRes.
     * @implements IDouDiZhuActionRes
     * @constructor
     * @param {IDouDiZhuActionRes=} [p] Properties to set
     */
    function DouDiZhuActionRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DouDiZhuActionRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof DouDiZhuActionRes
     * @instance
     */
    DouDiZhuActionRes.prototype.isSuccess = false;

    /**
     * DouDiZhuActionRes tips.
     * @member {string} tips
     * @memberof DouDiZhuActionRes
     * @instance
     */
    DouDiZhuActionRes.prototype.tips = "";

    /**
     * Creates a new DouDiZhuActionRes instance using the specified properties.
     * @function create
     * @memberof DouDiZhuActionRes
     * @static
     * @param {IDouDiZhuActionRes=} [properties] Properties to set
     * @returns {DouDiZhuActionRes} DouDiZhuActionRes instance
     */
    DouDiZhuActionRes.create = function create(properties) {
        return new DouDiZhuActionRes(properties);
    };

    /**
     * Encodes the specified DouDiZhuActionRes message. Does not implicitly {@link DouDiZhuActionRes.verify|verify} messages.
     * @function encode
     * @memberof DouDiZhuActionRes
     * @static
     * @param {IDouDiZhuActionRes} m DouDiZhuActionRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DouDiZhuActionRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a DouDiZhuActionRes message from the specified reader or buffer.
     * @function decode
     * @memberof DouDiZhuActionRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DouDiZhuActionRes} DouDiZhuActionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DouDiZhuActionRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DouDiZhuActionRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isSuccess"))
            throw $util.ProtocolError("missing required 'isSuccess'", { instance: m });
        if (!m.hasOwnProperty("tips"))
            throw $util.ProtocolError("missing required 'tips'", { instance: m });
        return m;
    };

    return DouDiZhuActionRes;
})();

$root.ActionJiaoRes = (function() {

    /**
     * Properties of an ActionJiaoRes.
     * @exports IActionJiaoRes
     * @interface IActionJiaoRes
     * @property {number} index ActionJiaoRes index
     * @property {boolean} isJiao ActionJiaoRes isJiao
     * @property {number} mutiple ActionJiaoRes mutiple
     */

    /**
     * Constructs a new ActionJiaoRes.
     * @exports ActionJiaoRes
     * @classdesc Represents an ActionJiaoRes.
     * @implements IActionJiaoRes
     * @constructor
     * @param {IActionJiaoRes=} [p] Properties to set
     */
    function ActionJiaoRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionJiaoRes index.
     * @member {number} index
     * @memberof ActionJiaoRes
     * @instance
     */
    ActionJiaoRes.prototype.index = 0;

    /**
     * ActionJiaoRes isJiao.
     * @member {boolean} isJiao
     * @memberof ActionJiaoRes
     * @instance
     */
    ActionJiaoRes.prototype.isJiao = false;

    /**
     * ActionJiaoRes mutiple.
     * @member {number} mutiple
     * @memberof ActionJiaoRes
     * @instance
     */
    ActionJiaoRes.prototype.mutiple = 0;

    /**
     * Creates a new ActionJiaoRes instance using the specified properties.
     * @function create
     * @memberof ActionJiaoRes
     * @static
     * @param {IActionJiaoRes=} [properties] Properties to set
     * @returns {ActionJiaoRes} ActionJiaoRes instance
     */
    ActionJiaoRes.create = function create(properties) {
        return new ActionJiaoRes(properties);
    };

    /**
     * Encodes the specified ActionJiaoRes message. Does not implicitly {@link ActionJiaoRes.verify|verify} messages.
     * @function encode
     * @memberof ActionJiaoRes
     * @static
     * @param {IActionJiaoRes} m ActionJiaoRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionJiaoRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).bool(m.isJiao);
        w.uint32(24).int32(m.mutiple);
        return w;
    };

    /**
     * Decodes an ActionJiaoRes message from the specified reader or buffer.
     * @function decode
     * @memberof ActionJiaoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionJiaoRes} ActionJiaoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionJiaoRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionJiaoRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.isJiao = r.bool();
                break;
            case 3:
                m.mutiple = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("isJiao"))
            throw $util.ProtocolError("missing required 'isJiao'", { instance: m });
        if (!m.hasOwnProperty("mutiple"))
            throw $util.ProtocolError("missing required 'mutiple'", { instance: m });
        return m;
    };

    return ActionJiaoRes;
})();

$root.ActionQiangRes = (function() {

    /**
     * Properties of an ActionQiangRes.
     * @exports IActionQiangRes
     * @interface IActionQiangRes
     * @property {number} index ActionQiangRes index
     * @property {boolean} isQiang ActionQiangRes isQiang
     * @property {number} mutiple ActionQiangRes mutiple
     */

    /**
     * Constructs a new ActionQiangRes.
     * @exports ActionQiangRes
     * @classdesc Represents an ActionQiangRes.
     * @implements IActionQiangRes
     * @constructor
     * @param {IActionQiangRes=} [p] Properties to set
     */
    function ActionQiangRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionQiangRes index.
     * @member {number} index
     * @memberof ActionQiangRes
     * @instance
     */
    ActionQiangRes.prototype.index = 0;

    /**
     * ActionQiangRes isQiang.
     * @member {boolean} isQiang
     * @memberof ActionQiangRes
     * @instance
     */
    ActionQiangRes.prototype.isQiang = false;

    /**
     * ActionQiangRes mutiple.
     * @member {number} mutiple
     * @memberof ActionQiangRes
     * @instance
     */
    ActionQiangRes.prototype.mutiple = 0;

    /**
     * Creates a new ActionQiangRes instance using the specified properties.
     * @function create
     * @memberof ActionQiangRes
     * @static
     * @param {IActionQiangRes=} [properties] Properties to set
     * @returns {ActionQiangRes} ActionQiangRes instance
     */
    ActionQiangRes.create = function create(properties) {
        return new ActionQiangRes(properties);
    };

    /**
     * Encodes the specified ActionQiangRes message. Does not implicitly {@link ActionQiangRes.verify|verify} messages.
     * @function encode
     * @memberof ActionQiangRes
     * @static
     * @param {IActionQiangRes} m ActionQiangRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionQiangRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).bool(m.isQiang);
        w.uint32(24).int32(m.mutiple);
        return w;
    };

    /**
     * Decodes an ActionQiangRes message from the specified reader or buffer.
     * @function decode
     * @memberof ActionQiangRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionQiangRes} ActionQiangRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionQiangRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionQiangRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.isQiang = r.bool();
                break;
            case 3:
                m.mutiple = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("isQiang"))
            throw $util.ProtocolError("missing required 'isQiang'", { instance: m });
        if (!m.hasOwnProperty("mutiple"))
            throw $util.ProtocolError("missing required 'mutiple'", { instance: m });
        return m;
    };

    return ActionQiangRes;
})();

$root.ActionTrusteeship = (function() {

    /**
     * Properties of an ActionTrusteeship.
     * @exports IActionTrusteeship
     * @interface IActionTrusteeship
     * @property {number} index ActionTrusteeship index
     * @property {boolean} isTrusteeship ActionTrusteeship isTrusteeship
     */

    /**
     * Constructs a new ActionTrusteeship.
     * @exports ActionTrusteeship
     * @classdesc Represents an ActionTrusteeship.
     * @implements IActionTrusteeship
     * @constructor
     * @param {IActionTrusteeship=} [p] Properties to set
     */
    function ActionTrusteeship(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionTrusteeship index.
     * @member {number} index
     * @memberof ActionTrusteeship
     * @instance
     */
    ActionTrusteeship.prototype.index = 0;

    /**
     * ActionTrusteeship isTrusteeship.
     * @member {boolean} isTrusteeship
     * @memberof ActionTrusteeship
     * @instance
     */
    ActionTrusteeship.prototype.isTrusteeship = false;

    /**
     * Creates a new ActionTrusteeship instance using the specified properties.
     * @function create
     * @memberof ActionTrusteeship
     * @static
     * @param {IActionTrusteeship=} [properties] Properties to set
     * @returns {ActionTrusteeship} ActionTrusteeship instance
     */
    ActionTrusteeship.create = function create(properties) {
        return new ActionTrusteeship(properties);
    };

    /**
     * Encodes the specified ActionTrusteeship message. Does not implicitly {@link ActionTrusteeship.verify|verify} messages.
     * @function encode
     * @memberof ActionTrusteeship
     * @static
     * @param {IActionTrusteeship} m ActionTrusteeship message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionTrusteeship.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).bool(m.isTrusteeship);
        return w;
    };

    /**
     * Decodes an ActionTrusteeship message from the specified reader or buffer.
     * @function decode
     * @memberof ActionTrusteeship
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionTrusteeship} ActionTrusteeship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionTrusteeship.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionTrusteeship();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.isTrusteeship = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("isTrusteeship"))
            throw $util.ProtocolError("missing required 'isTrusteeship'", { instance: m });
        return m;
    };

    return ActionTrusteeship;
})();

$root.ActionPlayCard = (function() {

    /**
     * Properties of an ActionPlayCard.
     * @exports IActionPlayCard
     * @interface IActionPlayCard
     * @property {number} index ActionPlayCard index
     * @property {PlayCardType} playCardType ActionPlayCard playCardType
     * @property {Array.<ICardInfo>|null} [cardInfo] ActionPlayCard cardInfo
     * @property {number|null} [maxCardSize] ActionPlayCard maxCardSize
     * @property {number|null} [mutiple] ActionPlayCard mutiple
     */

    /**
     * Constructs a new ActionPlayCard.
     * @exports ActionPlayCard
     * @classdesc Represents an ActionPlayCard.
     * @implements IActionPlayCard
     * @constructor
     * @param {IActionPlayCard=} [p] Properties to set
     */
    function ActionPlayCard(p) {
        this.cardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionPlayCard index.
     * @member {number} index
     * @memberof ActionPlayCard
     * @instance
     */
    ActionPlayCard.prototype.index = 0;

    /**
     * ActionPlayCard playCardType.
     * @member {PlayCardType} playCardType
     * @memberof ActionPlayCard
     * @instance
     */
    ActionPlayCard.prototype.playCardType = 0;

    /**
     * ActionPlayCard cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof ActionPlayCard
     * @instance
     */
    ActionPlayCard.prototype.cardInfo = $util.emptyArray;

    /**
     * ActionPlayCard maxCardSize.
     * @member {number} maxCardSize
     * @memberof ActionPlayCard
     * @instance
     */
    ActionPlayCard.prototype.maxCardSize = 0;

    /**
     * ActionPlayCard mutiple.
     * @member {number} mutiple
     * @memberof ActionPlayCard
     * @instance
     */
    ActionPlayCard.prototype.mutiple = 0;

    /**
     * Creates a new ActionPlayCard instance using the specified properties.
     * @function create
     * @memberof ActionPlayCard
     * @static
     * @param {IActionPlayCard=} [properties] Properties to set
     * @returns {ActionPlayCard} ActionPlayCard instance
     */
    ActionPlayCard.create = function create(properties) {
        return new ActionPlayCard(properties);
    };

    /**
     * Encodes the specified ActionPlayCard message. Does not implicitly {@link ActionPlayCard.verify|verify} messages.
     * @function encode
     * @memberof ActionPlayCard
     * @static
     * @param {IActionPlayCard} m ActionPlayCard message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionPlayCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).int32(m.playCardType);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(26).fork()).ldelim();
        }
        if (m.maxCardSize != null && m.hasOwnProperty("maxCardSize"))
            w.uint32(32).int32(m.maxCardSize);
        if (m.mutiple != null && m.hasOwnProperty("mutiple"))
            w.uint32(40).int32(m.mutiple);
        return w;
    };

    /**
     * Decodes an ActionPlayCard message from the specified reader or buffer.
     * @function decode
     * @memberof ActionPlayCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionPlayCard} ActionPlayCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionPlayCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionPlayCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.playCardType = r.int32();
                break;
            case 3:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.maxCardSize = r.int32();
                break;
            case 5:
                m.mutiple = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("playCardType"))
            throw $util.ProtocolError("missing required 'playCardType'", { instance: m });
        return m;
    };

    return ActionPlayCard;
})();

$root.PushAction = (function() {

    /**
     * Properties of a PushAction.
     * @exports IPushAction
     * @interface IPushAction
     * @property {DouDiZhuActionType} actionType PushAction actionType
     * @property {IActionJiaoRes|null} [jiao] PushAction jiao
     * @property {IActionQiangRes|null} [qiang] PushAction qiang
     * @property {IActionTrusteeship|null} [trusteeship] PushAction trusteeship
     * @property {IActionPlayCard|null} [playCard] PushAction playCard
     */

    /**
     * Constructs a new PushAction.
     * @exports PushAction
     * @classdesc Represents a PushAction.
     * @implements IPushAction
     * @constructor
     * @param {IPushAction=} [p] Properties to set
     */
    function PushAction(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushAction actionType.
     * @member {DouDiZhuActionType} actionType
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.actionType = 1;

    /**
     * PushAction jiao.
     * @member {IActionJiaoRes|null|undefined} jiao
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.jiao = null;

    /**
     * PushAction qiang.
     * @member {IActionQiangRes|null|undefined} qiang
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.qiang = null;

    /**
     * PushAction trusteeship.
     * @member {IActionTrusteeship|null|undefined} trusteeship
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.trusteeship = null;

    /**
     * PushAction playCard.
     * @member {IActionPlayCard|null|undefined} playCard
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.playCard = null;

    /**
     * Creates a new PushAction instance using the specified properties.
     * @function create
     * @memberof PushAction
     * @static
     * @param {IPushAction=} [properties] Properties to set
     * @returns {PushAction} PushAction instance
     */
    PushAction.create = function create(properties) {
        return new PushAction(properties);
    };

    /**
     * Encodes the specified PushAction message. Does not implicitly {@link PushAction.verify|verify} messages.
     * @function encode
     * @memberof PushAction
     * @static
     * @param {IPushAction} m PushAction message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushAction.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.actionType);
        if (m.jiao != null && m.hasOwnProperty("jiao"))
            $root.ActionJiaoRes.encode(m.jiao, w.uint32(18).fork()).ldelim();
        if (m.qiang != null && m.hasOwnProperty("qiang"))
            $root.ActionQiangRes.encode(m.qiang, w.uint32(26).fork()).ldelim();
        if (m.trusteeship != null && m.hasOwnProperty("trusteeship"))
            $root.ActionTrusteeship.encode(m.trusteeship, w.uint32(34).fork()).ldelim();
        if (m.playCard != null && m.hasOwnProperty("playCard"))
            $root.ActionPlayCard.encode(m.playCard, w.uint32(42).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a PushAction message from the specified reader or buffer.
     * @function decode
     * @memberof PushAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushAction} PushAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushAction.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushAction();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.actionType = r.int32();
                break;
            case 2:
                m.jiao = $root.ActionJiaoRes.decode(r, r.uint32());
                break;
            case 3:
                m.qiang = $root.ActionQiangRes.decode(r, r.uint32());
                break;
            case 4:
                m.trusteeship = $root.ActionTrusteeship.decode(r, r.uint32());
                break;
            case 5:
                m.playCard = $root.ActionPlayCard.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("actionType"))
            throw $util.ProtocolError("missing required 'actionType'", { instance: m });
        return m;
    };

    return PushAction;
})();

$root.PushFinalLandlordInfo = (function() {

    /**
     * Properties of a PushFinalLandlordInfo.
     * @exports IPushFinalLandlordInfo
     * @interface IPushFinalLandlordInfo
     * @property {number|null} [landlordIndex] PushFinalLandlordInfo landlordIndex
     * @property {Array.<ICardInfo>|null} [cardInfo] PushFinalLandlordInfo cardInfo
     */

    /**
     * Constructs a new PushFinalLandlordInfo.
     * @exports PushFinalLandlordInfo
     * @classdesc Represents a PushFinalLandlordInfo.
     * @implements IPushFinalLandlordInfo
     * @constructor
     * @param {IPushFinalLandlordInfo=} [p] Properties to set
     */
    function PushFinalLandlordInfo(p) {
        this.cardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushFinalLandlordInfo landlordIndex.
     * @member {number} landlordIndex
     * @memberof PushFinalLandlordInfo
     * @instance
     */
    PushFinalLandlordInfo.prototype.landlordIndex = 0;

    /**
     * PushFinalLandlordInfo cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof PushFinalLandlordInfo
     * @instance
     */
    PushFinalLandlordInfo.prototype.cardInfo = $util.emptyArray;

    /**
     * Creates a new PushFinalLandlordInfo instance using the specified properties.
     * @function create
     * @memberof PushFinalLandlordInfo
     * @static
     * @param {IPushFinalLandlordInfo=} [properties] Properties to set
     * @returns {PushFinalLandlordInfo} PushFinalLandlordInfo instance
     */
    PushFinalLandlordInfo.create = function create(properties) {
        return new PushFinalLandlordInfo(properties);
    };

    /**
     * Encodes the specified PushFinalLandlordInfo message. Does not implicitly {@link PushFinalLandlordInfo.verify|verify} messages.
     * @function encode
     * @memberof PushFinalLandlordInfo
     * @static
     * @param {IPushFinalLandlordInfo} m PushFinalLandlordInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushFinalLandlordInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.landlordIndex != null && m.hasOwnProperty("landlordIndex"))
            w.uint32(8).int32(m.landlordIndex);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushFinalLandlordInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushFinalLandlordInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushFinalLandlordInfo} PushFinalLandlordInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushFinalLandlordInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushFinalLandlordInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.landlordIndex = r.int32();
                break;
            case 2:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushFinalLandlordInfo;
})();

$root.SettlementInfo = (function() {

    /**
     * Properties of a SettlementInfo.
     * @exports ISettlementInfo
     * @interface ISettlementInfo
     * @property {number} index SettlementInfo index
     * @property {number} result SettlementInfo result
     */

    /**
     * Constructs a new SettlementInfo.
     * @exports SettlementInfo
     * @classdesc Represents a SettlementInfo.
     * @implements ISettlementInfo
     * @constructor
     * @param {ISettlementInfo=} [p] Properties to set
     */
    function SettlementInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SettlementInfo index.
     * @member {number} index
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.index = 0;

    /**
     * SettlementInfo result.
     * @member {number} result
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.result = 0;

    /**
     * Creates a new SettlementInfo instance using the specified properties.
     * @function create
     * @memberof SettlementInfo
     * @static
     * @param {ISettlementInfo=} [properties] Properties to set
     * @returns {SettlementInfo} SettlementInfo instance
     */
    SettlementInfo.create = function create(properties) {
        return new SettlementInfo(properties);
    };

    /**
     * Encodes the specified SettlementInfo message. Does not implicitly {@link SettlementInfo.verify|verify} messages.
     * @function encode
     * @memberof SettlementInfo
     * @static
     * @param {ISettlementInfo} m SettlementInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettlementInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        w.uint32(16).int32(m.result);
        return w;
    };

    /**
     * Decodes a SettlementInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SettlementInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SettlementInfo} SettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettlementInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SettlementInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.result = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        if (!m.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: m });
        return m;
    };

    return SettlementInfo;
})();

$root.PushSettlementInfo = (function() {

    /**
     * Properties of a PushSettlementInfo.
     * @exports IPushSettlementInfo
     * @interface IPushSettlementInfo
     * @property {Array.<ISettlementInfo>|null} [settlementInfo] PushSettlementInfo settlementInfo
     * @property {number} countdown PushSettlementInfo countdown
     * @property {Array.<IHandCard>|null} [handcard] PushSettlementInfo handcard
     * @property {boolean} isSpring PushSettlementInfo isSpring
     */

    /**
     * Constructs a new PushSettlementInfo.
     * @exports PushSettlementInfo
     * @classdesc Represents a PushSettlementInfo.
     * @implements IPushSettlementInfo
     * @constructor
     * @param {IPushSettlementInfo=} [p] Properties to set
     */
    function PushSettlementInfo(p) {
        this.settlementInfo = [];
        this.handcard = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushSettlementInfo settlementInfo.
     * @member {Array.<ISettlementInfo>} settlementInfo
     * @memberof PushSettlementInfo
     * @instance
     */
    PushSettlementInfo.prototype.settlementInfo = $util.emptyArray;

    /**
     * PushSettlementInfo countdown.
     * @member {number} countdown
     * @memberof PushSettlementInfo
     * @instance
     */
    PushSettlementInfo.prototype.countdown = 0;

    /**
     * PushSettlementInfo handcard.
     * @member {Array.<IHandCard>} handcard
     * @memberof PushSettlementInfo
     * @instance
     */
    PushSettlementInfo.prototype.handcard = $util.emptyArray;

    /**
     * PushSettlementInfo isSpring.
     * @member {boolean} isSpring
     * @memberof PushSettlementInfo
     * @instance
     */
    PushSettlementInfo.prototype.isSpring = false;

    /**
     * Creates a new PushSettlementInfo instance using the specified properties.
     * @function create
     * @memberof PushSettlementInfo
     * @static
     * @param {IPushSettlementInfo=} [properties] Properties to set
     * @returns {PushSettlementInfo} PushSettlementInfo instance
     */
    PushSettlementInfo.create = function create(properties) {
        return new PushSettlementInfo(properties);
    };

    /**
     * Encodes the specified PushSettlementInfo message. Does not implicitly {@link PushSettlementInfo.verify|verify} messages.
     * @function encode
     * @memberof PushSettlementInfo
     * @static
     * @param {IPushSettlementInfo} m PushSettlementInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushSettlementInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.settlementInfo != null && m.settlementInfo.length) {
            for (var i = 0; i < m.settlementInfo.length; ++i)
                $root.SettlementInfo.encode(m.settlementInfo[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).int32(m.countdown);
        if (m.handcard != null && m.handcard.length) {
            for (var i = 0; i < m.handcard.length; ++i)
                $root.HandCard.encode(m.handcard[i], w.uint32(26).fork()).ldelim();
        }
        w.uint32(32).bool(m.isSpring);
        return w;
    };

    /**
     * Decodes a PushSettlementInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushSettlementInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushSettlementInfo} PushSettlementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushSettlementInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushSettlementInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.settlementInfo && m.settlementInfo.length))
                    m.settlementInfo = [];
                m.settlementInfo.push($root.SettlementInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.countdown = r.int32();
                break;
            case 3:
                if (!(m.handcard && m.handcard.length))
                    m.handcard = [];
                m.handcard.push($root.HandCard.decode(r, r.uint32()));
                break;
            case 4:
                m.isSpring = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("countdown"))
            throw $util.ProtocolError("missing required 'countdown'", { instance: m });
        if (!m.hasOwnProperty("isSpring"))
            throw $util.ProtocolError("missing required 'isSpring'", { instance: m });
        return m;
    };

    return PushSettlementInfo;
})();

$root.PushKickOutRoom = (function() {

    /**
     * Properties of a PushKickOutRoom.
     * @exports IPushKickOutRoom
     * @interface IPushKickOutRoom
     */

    /**
     * Constructs a new PushKickOutRoom.
     * @exports PushKickOutRoom
     * @classdesc Represents a PushKickOutRoom.
     * @implements IPushKickOutRoom
     * @constructor
     * @param {IPushKickOutRoom=} [p] Properties to set
     */
    function PushKickOutRoom(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new PushKickOutRoom instance using the specified properties.
     * @function create
     * @memberof PushKickOutRoom
     * @static
     * @param {IPushKickOutRoom=} [properties] Properties to set
     * @returns {PushKickOutRoom} PushKickOutRoom instance
     */
    PushKickOutRoom.create = function create(properties) {
        return new PushKickOutRoom(properties);
    };

    /**
     * Encodes the specified PushKickOutRoom message. Does not implicitly {@link PushKickOutRoom.verify|verify} messages.
     * @function encode
     * @memberof PushKickOutRoom
     * @static
     * @param {IPushKickOutRoom} m PushKickOutRoom message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushKickOutRoom.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a PushKickOutRoom message from the specified reader or buffer.
     * @function decode
     * @memberof PushKickOutRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushKickOutRoom} PushKickOutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushKickOutRoom.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushKickOutRoom();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushKickOutRoom;
})();

$root.PushRejoinInfo = (function() {

    /**
     * Properties of a PushRejoinInfo.
     * @exports IPushRejoinInfo
     * @interface IPushRejoinInfo
     * @property {boolean} perspective PushRejoinInfo perspective
     * @property {Array.<IDouDiZhuMember>|null} [member] PushRejoinInfo member
     * @property {Array.<ICardInfo>|null} [cardInfo] PushRejoinInfo cardInfo
     * @property {Array.<ICardInfo>|null} [playedCards] PushRejoinInfo playedCards
     * @property {IActionPlayCard|null} [playCard] PushRejoinInfo playCard
     * @property {boolean|null} [canPlay] PushRejoinInfo canPlay
     * @property {boolean|null} [isTrusteeship] PushRejoinInfo isTrusteeship
     */

    /**
     * Constructs a new PushRejoinInfo.
     * @exports PushRejoinInfo
     * @classdesc Represents a PushRejoinInfo.
     * @implements IPushRejoinInfo
     * @constructor
     * @param {IPushRejoinInfo=} [p] Properties to set
     */
    function PushRejoinInfo(p) {
        this.member = [];
        this.cardInfo = [];
        this.playedCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushRejoinInfo perspective.
     * @member {boolean} perspective
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.perspective = false;

    /**
     * PushRejoinInfo member.
     * @member {Array.<IDouDiZhuMember>} member
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.member = $util.emptyArray;

    /**
     * PushRejoinInfo cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.cardInfo = $util.emptyArray;

    /**
     * PushRejoinInfo playedCards.
     * @member {Array.<ICardInfo>} playedCards
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.playedCards = $util.emptyArray;

    /**
     * PushRejoinInfo playCard.
     * @member {IActionPlayCard|null|undefined} playCard
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.playCard = null;

    /**
     * PushRejoinInfo canPlay.
     * @member {boolean} canPlay
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.canPlay = false;

    /**
     * PushRejoinInfo isTrusteeship.
     * @member {boolean} isTrusteeship
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.isTrusteeship = false;

    /**
     * Creates a new PushRejoinInfo instance using the specified properties.
     * @function create
     * @memberof PushRejoinInfo
     * @static
     * @param {IPushRejoinInfo=} [properties] Properties to set
     * @returns {PushRejoinInfo} PushRejoinInfo instance
     */
    PushRejoinInfo.create = function create(properties) {
        return new PushRejoinInfo(properties);
    };

    /**
     * Encodes the specified PushRejoinInfo message. Does not implicitly {@link PushRejoinInfo.verify|verify} messages.
     * @function encode
     * @memberof PushRejoinInfo
     * @static
     * @param {IPushRejoinInfo} m PushRejoinInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRejoinInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.perspective);
        if (m.member != null && m.member.length) {
            for (var i = 0; i < m.member.length; ++i)
                $root.DouDiZhuMember.encode(m.member[i], w.uint32(18).fork()).ldelim();
        }
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(26).fork()).ldelim();
        }
        if (m.playedCards != null && m.playedCards.length) {
            for (var i = 0; i < m.playedCards.length; ++i)
                $root.CardInfo.encode(m.playedCards[i], w.uint32(34).fork()).ldelim();
        }
        if (m.playCard != null && m.hasOwnProperty("playCard"))
            $root.ActionPlayCard.encode(m.playCard, w.uint32(42).fork()).ldelim();
        if (m.canPlay != null && m.hasOwnProperty("canPlay"))
            w.uint32(48).bool(m.canPlay);
        if (m.isTrusteeship != null && m.hasOwnProperty("isTrusteeship"))
            w.uint32(56).bool(m.isTrusteeship);
        return w;
    };

    /**
     * Decodes a PushRejoinInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushRejoinInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushRejoinInfo} PushRejoinInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRejoinInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushRejoinInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.perspective = r.bool();
                break;
            case 2:
                if (!(m.member && m.member.length))
                    m.member = [];
                m.member.push($root.DouDiZhuMember.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.playedCards && m.playedCards.length))
                    m.playedCards = [];
                m.playedCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.playCard = $root.ActionPlayCard.decode(r, r.uint32());
                break;
            case 6:
                m.canPlay = r.bool();
                break;
            case 7:
                m.isTrusteeship = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("perspective"))
            throw $util.ProtocolError("missing required 'perspective'", { instance: m });
        return m;
    };

    return PushRejoinInfo;
})();

/**
 * CardColor enum.
 * @exports CardColor
 * @enum {string}
 * @property {number} Spade=1 Spade value
 * @property {number} Red=2 Red value
 * @property {number} Plum=3 Plum value
 * @property {number} Block=4 Block value
 * @property {number} Evil=5 Evil value
 */
$root.CardColor = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Spade"] = 1;
    values[valuesById[2] = "Red"] = 2;
    values[valuesById[3] = "Plum"] = 3;
    values[valuesById[4] = "Block"] = 4;
    values[valuesById[5] = "Evil"] = 5;
    return values;
})();

/**
 * CardSize enum.
 * @exports CardSize
 * @enum {string}
 * @property {number} C3=3 C3 value
 * @property {number} C4=4 C4 value
 * @property {number} C5=5 C5 value
 * @property {number} C6=6 C6 value
 * @property {number} C7=7 C7 value
 * @property {number} C8=8 C8 value
 * @property {number} C9=9 C9 value
 * @property {number} C10=10 C10 value
 * @property {number} CJ=11 CJ value
 * @property {number} CQ=12 CQ value
 * @property {number} CK=13 CK value
 * @property {number} CA=14 CA value
 * @property {number} C2=15 C2 value
 * @property {number} CSMALL=16 CSMALL value
 * @property {number} CBIG=17 CBIG value
 */
$root.CardSize = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[3] = "C3"] = 3;
    values[valuesById[4] = "C4"] = 4;
    values[valuesById[5] = "C5"] = 5;
    values[valuesById[6] = "C6"] = 6;
    values[valuesById[7] = "C7"] = 7;
    values[valuesById[8] = "C8"] = 8;
    values[valuesById[9] = "C9"] = 9;
    values[valuesById[10] = "C10"] = 10;
    values[valuesById[11] = "CJ"] = 11;
    values[valuesById[12] = "CQ"] = 12;
    values[valuesById[13] = "CK"] = 13;
    values[valuesById[14] = "CA"] = 14;
    values[valuesById[15] = "C2"] = 15;
    values[valuesById[16] = "CSMALL"] = 16;
    values[valuesById[17] = "CBIG"] = 17;
    return values;
})();

module.exports = $root;

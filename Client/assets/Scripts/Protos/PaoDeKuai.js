/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.PaoDeKuai || ($protobuf.roots.PaoDeKuai = {});

/**
 * MemberType enum.
 * @exports MemberType
 * @enum {string}
 * @property {number} Banker=1 Banker value
 * @property {number} Player=2 Player value
 */
$root.MemberType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Banker"] = 1;
    values[valuesById[2] = "Player"] = 2;
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
 * @property {number} ThreeTakeLine=9 ThreeTakeLine value
 * @property {number} FourTakeOne=10 FourTakeOne value
 * @property {number} FourTakeTwo=11 FourTakeTwo value
 * @property {number} FourTakeThree=12 FourTakeThree value
 * @property {number} Bomb=13 Bomb value
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
    values[valuesById[9] = "ThreeTakeLine"] = 9;
    values[valuesById[10] = "FourTakeOne"] = 10;
    values[valuesById[11] = "FourTakeTwo"] = 11;
    values[valuesById[12] = "FourTakeThree"] = 12;
    values[valuesById[13] = "Bomb"] = 13;
    return values;
})();

/**
 * PaoDeKuaiActionType enum.
 * @exports PaoDeKuaiActionType
 * @enum {string}
 * @property {number} CHU=1 CHU value
 * @property {number} TRUSTEESHIP=2 TRUSTEESHIP value
 * @property {number} LEAVE=3 LEAVE value
 */
$root.PaoDeKuaiActionType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "CHU"] = 1;
    values[valuesById[2] = "TRUSTEESHIP"] = 2;
    values[valuesById[3] = "LEAVE"] = 3;
    return values;
})();

/**
 * CloseType enum.
 * @exports CloseType
 * @enum {string}
 * @property {number} Normal=1 Normal value
 * @property {number} CloseAll=2 CloseAll value
 * @property {number} CloseSingle=3 CloseSingle value
 * @property {number} ReverseCloseed=4 ReverseCloseed value
 * @property {number} BeClosed=5 BeClosed value
 * @property {number} Contract=6 Contract value
 */
$root.CloseType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Normal"] = 1;
    values[valuesById[2] = "CloseAll"] = 2;
    values[valuesById[3] = "CloseSingle"] = 3;
    values[valuesById[4] = "ReverseCloseed"] = 4;
    values[valuesById[5] = "BeClosed"] = 5;
    values[valuesById[6] = "Contract"] = 6;
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

$root.PaoDeKuaiMember = (function() {

    /**
     * Properties of a PaoDeKuaiMember.
     * @exports IPaoDeKuaiMember
     * @interface IPaoDeKuaiMember
     * @property {string|null} [playerID] PaoDeKuaiMember playerID
     * @property {string|null} [userName] PaoDeKuaiMember userName
     * @property {string|null} [headImageUrl] PaoDeKuaiMember headImageUrl
     * @property {string|null} [headbox] PaoDeKuaiMember headbox
     * @property {number|null} [vipLv] PaoDeKuaiMember vipLv
     * @property {string|null} [gold] PaoDeKuaiMember gold
     * @property {number} index PaoDeKuaiMember index
     * @property {MemberType|null} [type] PaoDeKuaiMember type
     * @property {Array.<ICardInfo>|null} [handcard] PaoDeKuaiMember handcard
     * @property {number|null} [cardCount] PaoDeKuaiMember cardCount
     * @property {boolean|null} [isTrusteeship] PaoDeKuaiMember isTrusteeship
     * @property {string|null} [city] PaoDeKuaiMember city
     * @property {string|null} [province] PaoDeKuaiMember province
     * @property {boolean|null} [isShowCard] PaoDeKuaiMember isShowCard
     */

    /**
     * Constructs a new PaoDeKuaiMember.
     * @exports PaoDeKuaiMember
     * @classdesc Represents a PaoDeKuaiMember.
     * @implements IPaoDeKuaiMember
     * @constructor
     * @param {IPaoDeKuaiMember=} [p] Properties to set
     */
    function PaoDeKuaiMember(p) {
        this.handcard = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PaoDeKuaiMember playerID.
     * @member {string} playerID
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.playerID = "";

    /**
     * PaoDeKuaiMember userName.
     * @member {string} userName
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.userName = "";

    /**
     * PaoDeKuaiMember headImageUrl.
     * @member {string} headImageUrl
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.headImageUrl = "";

    /**
     * PaoDeKuaiMember headbox.
     * @member {string} headbox
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.headbox = "";

    /**
     * PaoDeKuaiMember vipLv.
     * @member {number} vipLv
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.vipLv = 0;

    /**
     * PaoDeKuaiMember gold.
     * @member {string} gold
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.gold = "";

    /**
     * PaoDeKuaiMember index.
     * @member {number} index
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.index = 0;

    /**
     * PaoDeKuaiMember type.
     * @member {MemberType} type
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.type = 1;

    /**
     * PaoDeKuaiMember handcard.
     * @member {Array.<ICardInfo>} handcard
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.handcard = $util.emptyArray;

    /**
     * PaoDeKuaiMember cardCount.
     * @member {number} cardCount
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.cardCount = 0;

    /**
     * PaoDeKuaiMember isTrusteeship.
     * @member {boolean} isTrusteeship
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.isTrusteeship = false;

    /**
     * PaoDeKuaiMember city.
     * @member {string} city
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.city = "";

    /**
     * PaoDeKuaiMember province.
     * @member {string} province
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.province = "";

    /**
     * PaoDeKuaiMember isShowCard.
     * @member {boolean} isShowCard
     * @memberof PaoDeKuaiMember
     * @instance
     */
    PaoDeKuaiMember.prototype.isShowCard = false;

    /**
     * Creates a new PaoDeKuaiMember instance using the specified properties.
     * @function create
     * @memberof PaoDeKuaiMember
     * @static
     * @param {IPaoDeKuaiMember=} [properties] Properties to set
     * @returns {PaoDeKuaiMember} PaoDeKuaiMember instance
     */
    PaoDeKuaiMember.create = function create(properties) {
        return new PaoDeKuaiMember(properties);
    };

    /**
     * Encodes the specified PaoDeKuaiMember message. Does not implicitly {@link PaoDeKuaiMember.verify|verify} messages.
     * @function encode
     * @memberof PaoDeKuaiMember
     * @static
     * @param {IPaoDeKuaiMember} m PaoDeKuaiMember message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PaoDeKuaiMember.encode = function encode(m, w) {
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
        if (m.city != null && m.hasOwnProperty("city"))
            w.uint32(98).string(m.city);
        if (m.province != null && m.hasOwnProperty("province"))
            w.uint32(106).string(m.province);
        if (m.isShowCard != null && m.hasOwnProperty("isShowCard"))
            w.uint32(112).bool(m.isShowCard);
        return w;
    };

    /**
     * Decodes a PaoDeKuaiMember message from the specified reader or buffer.
     * @function decode
     * @memberof PaoDeKuaiMember
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PaoDeKuaiMember} PaoDeKuaiMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PaoDeKuaiMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PaoDeKuaiMember();
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
                m.city = r.string();
                break;
            case 13:
                m.province = r.string();
                break;
            case 14:
                m.isShowCard = r.bool();
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

    return PaoDeKuaiMember;
})();

$root.PushPaoDeKuaiInit = (function() {

    /**
     * Properties of a PushPaoDeKuaiInit.
     * @exports IPushPaoDeKuaiInit
     * @interface IPushPaoDeKuaiInit
     * @property {number} playType PushPaoDeKuaiInit playType
     * @property {number} playId PushPaoDeKuaiInit playId
     * @property {number} roomId PushPaoDeKuaiInit roomId
     * @property {Array.<IPaoDeKuaiMember>|null} [member] PushPaoDeKuaiInit member
     */

    /**
     * Constructs a new PushPaoDeKuaiInit.
     * @exports PushPaoDeKuaiInit
     * @classdesc Represents a PushPaoDeKuaiInit.
     * @implements IPushPaoDeKuaiInit
     * @constructor
     * @param {IPushPaoDeKuaiInit=} [p] Properties to set
     */
    function PushPaoDeKuaiInit(p) {
        this.member = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushPaoDeKuaiInit playType.
     * @member {number} playType
     * @memberof PushPaoDeKuaiInit
     * @instance
     */
    PushPaoDeKuaiInit.prototype.playType = 0;

    /**
     * PushPaoDeKuaiInit playId.
     * @member {number} playId
     * @memberof PushPaoDeKuaiInit
     * @instance
     */
    PushPaoDeKuaiInit.prototype.playId = 0;

    /**
     * PushPaoDeKuaiInit roomId.
     * @member {number} roomId
     * @memberof PushPaoDeKuaiInit
     * @instance
     */
    PushPaoDeKuaiInit.prototype.roomId = 0;

    /**
     * PushPaoDeKuaiInit member.
     * @member {Array.<IPaoDeKuaiMember>} member
     * @memberof PushPaoDeKuaiInit
     * @instance
     */
    PushPaoDeKuaiInit.prototype.member = $util.emptyArray;

    /**
     * Creates a new PushPaoDeKuaiInit instance using the specified properties.
     * @function create
     * @memberof PushPaoDeKuaiInit
     * @static
     * @param {IPushPaoDeKuaiInit=} [properties] Properties to set
     * @returns {PushPaoDeKuaiInit} PushPaoDeKuaiInit instance
     */
    PushPaoDeKuaiInit.create = function create(properties) {
        return new PushPaoDeKuaiInit(properties);
    };

    /**
     * Encodes the specified PushPaoDeKuaiInit message. Does not implicitly {@link PushPaoDeKuaiInit.verify|verify} messages.
     * @function encode
     * @memberof PushPaoDeKuaiInit
     * @static
     * @param {IPushPaoDeKuaiInit} m PushPaoDeKuaiInit message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushPaoDeKuaiInit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.playType);
        w.uint32(16).int32(m.playId);
        w.uint32(24).int32(m.roomId);
        if (m.member != null && m.member.length) {
            for (var i = 0; i < m.member.length; ++i)
                $root.PaoDeKuaiMember.encode(m.member[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushPaoDeKuaiInit message from the specified reader or buffer.
     * @function decode
     * @memberof PushPaoDeKuaiInit
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushPaoDeKuaiInit} PushPaoDeKuaiInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushPaoDeKuaiInit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushPaoDeKuaiInit();
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
                m.member.push($root.PaoDeKuaiMember.decode(r, r.uint32()));
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

    return PushPaoDeKuaiInit;
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
     * @property {number} firstPlayIndex PushHandCard firstPlayIndex
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
     * PushHandCard firstPlayIndex.
     * @member {number} firstPlayIndex
     * @memberof PushHandCard
     * @instance
     */
    PushHandCard.prototype.firstPlayIndex = 0;

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
        w.uint32(24).int32(m.firstPlayIndex);
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
            case 3:
                m.firstPlayIndex = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("perspective"))
            throw $util.ProtocolError("missing required 'perspective'", { instance: m });
        if (!m.hasOwnProperty("firstPlayIndex"))
            throw $util.ProtocolError("missing required 'firstPlayIndex'", { instance: m });
        return m;
    };

    return PushHandCard;
})();

$root.PushCountDown = (function() {

    /**
     * Properties of a PushCountDown.
     * @exports IPushCountDown
     * @interface IPushCountDown
     * @property {number} index PushCountDown index
     * @property {number} countdown PushCountDown countdown
     * @property {PaoDeKuaiActionType} countdownType PushCountDown countdownType
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
     * @member {PaoDeKuaiActionType} countdownType
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

$root.PaoDeKuaiActionReq = (function() {

    /**
     * Properties of a PaoDeKuaiActionReq.
     * @exports IPaoDeKuaiActionReq
     * @interface IPaoDeKuaiActionReq
     * @property {PaoDeKuaiActionType} actionType PaoDeKuaiActionReq actionType
     * @property {Array.<ICardInfo>|null} [cardInfo] PaoDeKuaiActionReq cardInfo
     * @property {boolean|null} [isTrusteeship] PaoDeKuaiActionReq isTrusteeship
     */

    /**
     * Constructs a new PaoDeKuaiActionReq.
     * @exports PaoDeKuaiActionReq
     * @classdesc Represents a PaoDeKuaiActionReq.
     * @implements IPaoDeKuaiActionReq
     * @constructor
     * @param {IPaoDeKuaiActionReq=} [p] Properties to set
     */
    function PaoDeKuaiActionReq(p) {
        this.cardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PaoDeKuaiActionReq actionType.
     * @member {PaoDeKuaiActionType} actionType
     * @memberof PaoDeKuaiActionReq
     * @instance
     */
    PaoDeKuaiActionReq.prototype.actionType = 1;

    /**
     * PaoDeKuaiActionReq cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof PaoDeKuaiActionReq
     * @instance
     */
    PaoDeKuaiActionReq.prototype.cardInfo = $util.emptyArray;

    /**
     * PaoDeKuaiActionReq isTrusteeship.
     * @member {boolean} isTrusteeship
     * @memberof PaoDeKuaiActionReq
     * @instance
     */
    PaoDeKuaiActionReq.prototype.isTrusteeship = false;

    /**
     * Creates a new PaoDeKuaiActionReq instance using the specified properties.
     * @function create
     * @memberof PaoDeKuaiActionReq
     * @static
     * @param {IPaoDeKuaiActionReq=} [properties] Properties to set
     * @returns {PaoDeKuaiActionReq} PaoDeKuaiActionReq instance
     */
    PaoDeKuaiActionReq.create = function create(properties) {
        return new PaoDeKuaiActionReq(properties);
    };

    /**
     * Encodes the specified PaoDeKuaiActionReq message. Does not implicitly {@link PaoDeKuaiActionReq.verify|verify} messages.
     * @function encode
     * @memberof PaoDeKuaiActionReq
     * @static
     * @param {IPaoDeKuaiActionReq} m PaoDeKuaiActionReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PaoDeKuaiActionReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.actionType);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(18).fork()).ldelim();
        }
        if (m.isTrusteeship != null && m.hasOwnProperty("isTrusteeship"))
            w.uint32(24).bool(m.isTrusteeship);
        return w;
    };

    /**
     * Decodes a PaoDeKuaiActionReq message from the specified reader or buffer.
     * @function decode
     * @memberof PaoDeKuaiActionReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PaoDeKuaiActionReq} PaoDeKuaiActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PaoDeKuaiActionReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PaoDeKuaiActionReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.actionType = r.int32();
                break;
            case 2:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 3:
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

    return PaoDeKuaiActionReq;
})();

$root.PaoDeKuaiActionRes = (function() {

    /**
     * Properties of a PaoDeKuaiActionRes.
     * @exports IPaoDeKuaiActionRes
     * @interface IPaoDeKuaiActionRes
     * @property {boolean} isSuccess PaoDeKuaiActionRes isSuccess
     * @property {string} tips PaoDeKuaiActionRes tips
     */

    /**
     * Constructs a new PaoDeKuaiActionRes.
     * @exports PaoDeKuaiActionRes
     * @classdesc Represents a PaoDeKuaiActionRes.
     * @implements IPaoDeKuaiActionRes
     * @constructor
     * @param {IPaoDeKuaiActionRes=} [p] Properties to set
     */
    function PaoDeKuaiActionRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PaoDeKuaiActionRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof PaoDeKuaiActionRes
     * @instance
     */
    PaoDeKuaiActionRes.prototype.isSuccess = false;

    /**
     * PaoDeKuaiActionRes tips.
     * @member {string} tips
     * @memberof PaoDeKuaiActionRes
     * @instance
     */
    PaoDeKuaiActionRes.prototype.tips = "";

    /**
     * Creates a new PaoDeKuaiActionRes instance using the specified properties.
     * @function create
     * @memberof PaoDeKuaiActionRes
     * @static
     * @param {IPaoDeKuaiActionRes=} [properties] Properties to set
     * @returns {PaoDeKuaiActionRes} PaoDeKuaiActionRes instance
     */
    PaoDeKuaiActionRes.create = function create(properties) {
        return new PaoDeKuaiActionRes(properties);
    };

    /**
     * Encodes the specified PaoDeKuaiActionRes message. Does not implicitly {@link PaoDeKuaiActionRes.verify|verify} messages.
     * @function encode
     * @memberof PaoDeKuaiActionRes
     * @static
     * @param {IPaoDeKuaiActionRes} m PaoDeKuaiActionRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PaoDeKuaiActionRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a PaoDeKuaiActionRes message from the specified reader or buffer.
     * @function decode
     * @memberof PaoDeKuaiActionRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PaoDeKuaiActionRes} PaoDeKuaiActionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PaoDeKuaiActionRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PaoDeKuaiActionRes();
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

    return PaoDeKuaiActionRes;
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
     * @property {PaoDeKuaiActionType} actionType PushAction actionType
     * @property {IActionTrusteeship|null} [trusteeship] PushAction trusteeship
     * @property {IActionPlayCard|null} [playCard] PushAction playCard
     * @property {number|null} [reqPlayerIndex] PushAction reqPlayerIndex
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
     * @member {PaoDeKuaiActionType} actionType
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.actionType = 1;

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
     * PushAction reqPlayerIndex.
     * @member {number} reqPlayerIndex
     * @memberof PushAction
     * @instance
     */
    PushAction.prototype.reqPlayerIndex = 0;

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
        if (m.trusteeship != null && m.hasOwnProperty("trusteeship"))
            $root.ActionTrusteeship.encode(m.trusteeship, w.uint32(18).fork()).ldelim();
        if (m.playCard != null && m.hasOwnProperty("playCard"))
            $root.ActionPlayCard.encode(m.playCard, w.uint32(26).fork()).ldelim();
        if (m.reqPlayerIndex != null && m.hasOwnProperty("reqPlayerIndex"))
            w.uint32(32).int32(m.reqPlayerIndex);
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
                m.trusteeship = $root.ActionTrusteeship.decode(r, r.uint32());
                break;
            case 3:
                m.playCard = $root.ActionPlayCard.decode(r, r.uint32());
                break;
            case 4:
                m.reqPlayerIndex = r.int32();
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
     * @property {number|null} [banker] PushFinalLandlordInfo banker
     * @property {ICardInfo|null} [cardInfo] PushFinalLandlordInfo cardInfo
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
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushFinalLandlordInfo banker.
     * @member {number} banker
     * @memberof PushFinalLandlordInfo
     * @instance
     */
    PushFinalLandlordInfo.prototype.banker = 0;

    /**
     * PushFinalLandlordInfo cardInfo.
     * @member {ICardInfo|null|undefined} cardInfo
     * @memberof PushFinalLandlordInfo
     * @instance
     */
    PushFinalLandlordInfo.prototype.cardInfo = null;

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
        if (m.banker != null && m.hasOwnProperty("banker"))
            w.uint32(8).int32(m.banker);
        if (m.cardInfo != null && m.hasOwnProperty("cardInfo"))
            $root.CardInfo.encode(m.cardInfo, w.uint32(18).fork()).ldelim();
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
                m.banker = r.int32();
                break;
            case 2:
                m.cardInfo = $root.CardInfo.decode(r, r.uint32());
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
     * @property {CloseType|null} [closeType] SettlementInfo closeType
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
     * SettlementInfo closeType.
     * @member {CloseType} closeType
     * @memberof SettlementInfo
     * @instance
     */
    SettlementInfo.prototype.closeType = 1;

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
        if (m.closeType != null && m.hasOwnProperty("closeType"))
            w.uint32(24).int32(m.closeType);
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
            case 3:
                m.closeType = r.int32();
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
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("countdown"))
            throw $util.ProtocolError("missing required 'countdown'", { instance: m });
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
     * @property {Array.<IPaoDeKuaiMember>|null} [member] PushRejoinInfo member
     * @property {Array.<ICardInfo>|null} [playedCards] PushRejoinInfo playedCards
     * @property {IActionPlayCard|null} [playCard] PushRejoinInfo playCard
     * @property {boolean|null} [canPlay] PushRejoinInfo canPlay
     * @property {boolean|null} [isTrusteeship] PushRejoinInfo isTrusteeship
     * @property {number|null} [firstPlayIndex] PushRejoinInfo firstPlayIndex
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
     * @member {Array.<IPaoDeKuaiMember>} member
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.member = $util.emptyArray;

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
     * PushRejoinInfo firstPlayIndex.
     * @member {number} firstPlayIndex
     * @memberof PushRejoinInfo
     * @instance
     */
    PushRejoinInfo.prototype.firstPlayIndex = 0;

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
                $root.PaoDeKuaiMember.encode(m.member[i], w.uint32(18).fork()).ldelim();
        }
        if (m.playedCards != null && m.playedCards.length) {
            for (var i = 0; i < m.playedCards.length; ++i)
                $root.CardInfo.encode(m.playedCards[i], w.uint32(26).fork()).ldelim();
        }
        if (m.playCard != null && m.hasOwnProperty("playCard"))
            $root.ActionPlayCard.encode(m.playCard, w.uint32(34).fork()).ldelim();
        if (m.canPlay != null && m.hasOwnProperty("canPlay"))
            w.uint32(40).bool(m.canPlay);
        if (m.isTrusteeship != null && m.hasOwnProperty("isTrusteeship"))
            w.uint32(48).bool(m.isTrusteeship);
        if (m.firstPlayIndex != null && m.hasOwnProperty("firstPlayIndex"))
            w.uint32(56).int32(m.firstPlayIndex);
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
                m.member.push($root.PaoDeKuaiMember.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.playedCards && m.playedCards.length))
                    m.playedCards = [];
                m.playedCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.playCard = $root.ActionPlayCard.decode(r, r.uint32());
                break;
            case 5:
                m.canPlay = r.bool();
                break;
            case 6:
                m.isTrusteeship = r.bool();
                break;
            case 7:
                m.firstPlayIndex = r.int32();
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

$root.PushBombReward = (function() {

    /**
     * Properties of a PushBombReward.
     * @exports IPushBombReward
     * @interface IPushBombReward
     * @property {Array.<ISettlementInfo>|null} [settlementInfo] PushBombReward settlementInfo
     */

    /**
     * Constructs a new PushBombReward.
     * @exports PushBombReward
     * @classdesc Represents a PushBombReward.
     * @implements IPushBombReward
     * @constructor
     * @param {IPushBombReward=} [p] Properties to set
     */
    function PushBombReward(p) {
        this.settlementInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushBombReward settlementInfo.
     * @member {Array.<ISettlementInfo>} settlementInfo
     * @memberof PushBombReward
     * @instance
     */
    PushBombReward.prototype.settlementInfo = $util.emptyArray;

    /**
     * Creates a new PushBombReward instance using the specified properties.
     * @function create
     * @memberof PushBombReward
     * @static
     * @param {IPushBombReward=} [properties] Properties to set
     * @returns {PushBombReward} PushBombReward instance
     */
    PushBombReward.create = function create(properties) {
        return new PushBombReward(properties);
    };

    /**
     * Encodes the specified PushBombReward message. Does not implicitly {@link PushBombReward.verify|verify} messages.
     * @function encode
     * @memberof PushBombReward
     * @static
     * @param {IPushBombReward} m PushBombReward message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushBombReward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.settlementInfo != null && m.settlementInfo.length) {
            for (var i = 0; i < m.settlementInfo.length; ++i)
                $root.SettlementInfo.encode(m.settlementInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PushBombReward message from the specified reader or buffer.
     * @function decode
     * @memberof PushBombReward
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushBombReward} PushBombReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushBombReward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushBombReward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.settlementInfo && m.settlementInfo.length))
                    m.settlementInfo = [];
                m.settlementInfo.push($root.SettlementInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PushBombReward;
})();

$root.PushAITestInfo = (function() {

    /**
     * Properties of a PushAITestInfo.
     * @exports IPushAITestInfo
     * @interface IPushAITestInfo
     * @property {number} index PushAITestInfo index
     * @property {string|null} [des] PushAITestInfo des
     */

    /**
     * Constructs a new PushAITestInfo.
     * @exports PushAITestInfo
     * @classdesc Represents a PushAITestInfo.
     * @implements IPushAITestInfo
     * @constructor
     * @param {IPushAITestInfo=} [p] Properties to set
     */
    function PushAITestInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PushAITestInfo index.
     * @member {number} index
     * @memberof PushAITestInfo
     * @instance
     */
    PushAITestInfo.prototype.index = 0;

    /**
     * PushAITestInfo des.
     * @member {string} des
     * @memberof PushAITestInfo
     * @instance
     */
    PushAITestInfo.prototype.des = "";

    /**
     * Creates a new PushAITestInfo instance using the specified properties.
     * @function create
     * @memberof PushAITestInfo
     * @static
     * @param {IPushAITestInfo=} [properties] Properties to set
     * @returns {PushAITestInfo} PushAITestInfo instance
     */
    PushAITestInfo.create = function create(properties) {
        return new PushAITestInfo(properties);
    };

    /**
     * Encodes the specified PushAITestInfo message. Does not implicitly {@link PushAITestInfo.verify|verify} messages.
     * @function encode
     * @memberof PushAITestInfo
     * @static
     * @param {IPushAITestInfo} m PushAITestInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushAITestInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.index);
        if (m.des != null && m.hasOwnProperty("des"))
            w.uint32(18).string(m.des);
        return w;
    };

    /**
     * Decodes a PushAITestInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushAITestInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PushAITestInfo} PushAITestInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushAITestInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PushAITestInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.int32();
                break;
            case 2:
                m.des = r.string();
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

    return PushAITestInfo;
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

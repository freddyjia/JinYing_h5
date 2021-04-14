import * as $protobuf from "protobufjs";
/** Properties of a Rsp_PopMenu. */
export interface IRsp_PopMenu {

    /** Rsp_PopMenu hasNewPlayerGift */
    hasNewPlayerGift?: (boolean|null);
}

/** Represents a Rsp_PopMenu. */
export class Rsp_PopMenu implements IRsp_PopMenu {

    /**
     * Constructs a new Rsp_PopMenu.
     * @param [p] Properties to set
     */
    constructor(p?: IRsp_PopMenu);

    /** Rsp_PopMenu hasNewPlayerGift. */
    public hasNewPlayerGift: boolean;

    /**
     * Creates a new Rsp_PopMenu instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rsp_PopMenu instance
     */
    public static create(properties?: IRsp_PopMenu): Rsp_PopMenu;

    /**
     * Encodes the specified Rsp_PopMenu message. Does not implicitly {@link Rsp_PopMenu.verify|verify} messages.
     * @param m Rsp_PopMenu message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRsp_PopMenu, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rsp_PopMenu message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Rsp_PopMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Rsp_PopMenu;
}

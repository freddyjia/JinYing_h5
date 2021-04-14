import * as $protobuf from "protobufjs";
/** PopUpType enum. */
export enum PopUpType {
    Sign = 1
}

/** Properties of a PopupData. */
export interface IPopupData {

    /** PopupData index */
    index: number;

    /** PopupData type */
    type: PopUpType;

    /** PopupData isPopUp */
    isPopUp: boolean;
}

/** Represents a PopupData. */
export class PopupData implements IPopupData {

    /**
     * Constructs a new PopupData.
     * @param [p] Properties to set
     */
    constructor(p?: IPopupData);

    /** PopupData index. */
    public index: number;

    /** PopupData type. */
    public type: PopUpType;

    /** PopupData isPopUp. */
    public isPopUp: boolean;

    /**
     * Creates a new PopupData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PopupData instance
     */
    public static create(properties?: IPopupData): PopupData;

    /**
     * Encodes the specified PopupData message. Does not implicitly {@link PopupData.verify|verify} messages.
     * @param m PopupData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPopupData, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PopupData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PopupData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PopupData;
}

/** Properties of a LoginPopUpSync. */
export interface ILoginPopUpSync {

    /** LoginPopUpSync popupData */
    popupData?: (IPopupData[]|null);
}

/** Represents a LoginPopUpSync. */
export class LoginPopUpSync implements ILoginPopUpSync {

    /**
     * Constructs a new LoginPopUpSync.
     * @param [p] Properties to set
     */
    constructor(p?: ILoginPopUpSync);

    /** LoginPopUpSync popupData. */
    public popupData: IPopupData[];

    /**
     * Creates a new LoginPopUpSync instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginPopUpSync instance
     */
    public static create(properties?: ILoginPopUpSync): LoginPopUpSync;

    /**
     * Encodes the specified LoginPopUpSync message. Does not implicitly {@link LoginPopUpSync.verify|verify} messages.
     * @param m LoginPopUpSync message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILoginPopUpSync, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginPopUpSync message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LoginPopUpSync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LoginPopUpSync;
}

/** Properties of a LoginPopUpClose. */
export interface ILoginPopUpClose {

    /** LoginPopUpClose type */
    type: PopUpType;
}

/** Represents a LoginPopUpClose. */
export class LoginPopUpClose implements ILoginPopUpClose {

    /**
     * Constructs a new LoginPopUpClose.
     * @param [p] Properties to set
     */
    constructor(p?: ILoginPopUpClose);

    /** LoginPopUpClose type. */
    public type: PopUpType;

    /**
     * Creates a new LoginPopUpClose instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginPopUpClose instance
     */
    public static create(properties?: ILoginPopUpClose): LoginPopUpClose;

    /**
     * Encodes the specified LoginPopUpClose message. Does not implicitly {@link LoginPopUpClose.verify|verify} messages.
     * @param m LoginPopUpClose message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ILoginPopUpClose, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginPopUpClose message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns LoginPopUpClose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): LoginPopUpClose;
}

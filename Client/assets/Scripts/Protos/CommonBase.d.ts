import * as $protobuf from "protobufjs";
/** Properties of a CommonResponse. */
export interface ICommonResponse {

    /** CommonResponse success */
    success: boolean;

    /** CommonResponse reason */
    reason?: (string|null);
}

/** Represents a CommonResponse. */
export class CommonResponse implements ICommonResponse {

    /**
     * Constructs a new CommonResponse.
     * @param [p] Properties to set
     */
    constructor(p?: ICommonResponse);

    /** CommonResponse success. */
    public success: boolean;

    /** CommonResponse reason. */
    public reason: string;

    /**
     * Creates a new CommonResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommonResponse instance
     */
    public static create(properties?: ICommonResponse): CommonResponse;

    /**
     * Encodes the specified CommonResponse message. Does not implicitly {@link CommonResponse.verify|verify} messages.
     * @param m CommonResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICommonResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommonResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CommonResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CommonResponse;
}

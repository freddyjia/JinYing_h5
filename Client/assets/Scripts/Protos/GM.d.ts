import * as $protobuf from "protobufjs";
/** Properties of a ClientGMCommand. */
export interface IClientGMCommand {

    /** ClientGMCommand command */
    command: string;
}

/** Represents a ClientGMCommand. */
export class ClientGMCommand implements IClientGMCommand {

    /**
     * Constructs a new ClientGMCommand.
     * @param [p] Properties to set
     */
    constructor(p?: IClientGMCommand);

    /** ClientGMCommand command. */
    public command: string;

    /**
     * Creates a new ClientGMCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientGMCommand instance
     */
    public static create(properties?: IClientGMCommand): ClientGMCommand;

    /**
     * Encodes the specified ClientGMCommand message. Does not implicitly {@link ClientGMCommand.verify|verify} messages.
     * @param m ClientGMCommand message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClientGMCommand, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientGMCommand message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClientGMCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ClientGMCommand;
}

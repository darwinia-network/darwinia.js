import {HexString} from "@polkadot/util/types";
import {u8aConcat, u8aToU8a} from "@polkadot/util";
import {blake2AsU8a, xxhashAsU8a} from "@polkadot/util-crypto";

export function identity(data: HexString | Uint8Array): Uint8Array {
    return u8aToU8a(data);
}

export function twox64Concat(data: HexString | Uint8Array): Uint8Array {
    return u8aConcat(
        xxhashAsU8a(data, 64), u8aToU8a(data)
    );
}

export function blake2128Concat(data: HexString | Uint8Array): Uint8Array {
    return u8aConcat(blake2AsU8a(data, 128), u8aToU8a(data));
}
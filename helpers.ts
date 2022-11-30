import { blake2AsU8a, xxhashAsU8a } from '@polkadot/util-crypto';
import { u8aConcat, u8aToU8a, u8aToHex } from '@polkadot/util';
import { TypeRegistry } from "@polkadot/types";
import { HexString } from '@polkadot/util/types';

import { ethers, providers } from "ethers";
type BaseProvider = providers.BaseProvider;

export async function getStorageRaw(provider: BaseProvider, storageKey: Uint8Array): Promise<Uint8Array> {
    const contractAddress = "0x0000000000000000000000000000000000000400";
    const abi = [
        "function state_storage(bytes) view returns (bytes)"
    ];
    const contract = new ethers.Contract(contractAddress, abi, provider);
    return await contract.state_storage(storageKey);
}

export function blake2_128Concat(data: HexString | Uint8Array): Uint8Array { // eslint-disable-line camelcase
    return u8aConcat(blake2AsU8a(data, 128), u8aToU8a(data));
}

export interface ValueMeta {
    valueType: string,
    optional: boolean,
    fallback: Uint8Array,
}

export async function getStorage(provider: BaseProvider, prefix: string, method: string, valueMeta: ValueMeta, key?: Uint8Array): Promise<string | null> {
    // Build storage key
    let storageKey = u8aConcat(
        xxhashAsU8a(prefix, 128), xxhashAsU8a(method, 128)
    );
    if (key) {
        storageKey = u8aConcat(storageKey, key)
    }
    console.debug(`storage key: ${u8aToHex(storageKey)}`);

    // Fetch storage data
    let data = await getStorageRaw(provider, storageKey);
    console.debug(`        raw: ${data}`);

    // Process storage data
    if (data.toString() == "0x" && !valueMeta.optional) {
        data = valueMeta.fallback;
    }

    if (data.toString() == "0x") {
        return null;
    } else {
        const registry = new TypeRegistry();
        return registry.createType(valueMeta.valueType, data).toString();
    }
}
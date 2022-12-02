import {blake2AsU8a, xxhashAsU8a} from '@polkadot/util-crypto';
import {u8aConcat, u8aToHex, u8aToU8a} from '@polkadot/util';
import {Metadata, TypeRegistry, Vec} from '@polkadot/types';
import {HexString} from '@polkadot/util/types';

import {ethers, providers} from "ethers";
import {StorageEntryMetadataV14, StorageHasherV14} from "@polkadot/types/interfaces/metadata/types";
import {SiLookupTypeId} from "@polkadot/types/interfaces";

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

export async function getStorage(provider: BaseProvider, registry: TypeRegistry, prefix: string, method: string, valueMeta: ValueMeta, key?: Uint8Array): Promise<string | null> {
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
        return registry.createType(valueMeta.valueType, data).toString();
    }
}

export function getStorageEntry(metadata: Metadata, prefix: string, method: string): StorageEntryMetadataV14 | null {
    for (const pallet of metadata.asV14.pallets) {
        if (pallet.name.toString() == prefix) {
            const storage = pallet.storage.unwrap();
            for (const item of storage.items) {
                if (item.name.toString() == method) {
                    return item;
                }
            }
        }
    }
    return null;
}

function buildFullStorageKey(input: Array<unknown>, hashers: Vec<StorageHasherV14>, keyTypeId: SiLookupTypeId, metadata: Metadata, partialStorageKey: Uint8Array) {
    let storageKey = partialStorageKey;

    let keys = hashers.length === 1
        ? [keyTypeId]
        : metadata.registry.lookup.getSiType(keyTypeId).def.asTuple;

    for (let i = 0; i < keys.length; i++) {
        const theKeyObj = input[i];
        const theHasher = hashers[i];
        const theKeyTypeId = keys[i];

        // get the scale encoded key data by encoding the input
        const theKeyType = metadata.registry.createLookupType(theKeyTypeId);
        const theKeyDataEncoded = metadata.registry.createType(theKeyType, theKeyObj).toU8a();

        // apply hasher
        if (theHasher.toString() == "Blake2_128Concat") {
            const theKeyDataAppliedHasher = blake2_128Concat(theKeyDataEncoded);
            storageKey = u8aConcat(storageKey, theKeyDataAppliedHasher);
        } else {
            throw `The hasher ${theHasher.toString()} is not support. Contact Aki for help`;
        }
    }
    return storageKey;
}

export async function getStorage1(provider: BaseProvider, metadata: Metadata, prefix: string, method: string, input?: Array<unknown>): Promise<string | null> {
    // 0. FIND STORAGE ENTRY FROM METADATA
    const storageEntry = getStorageEntry(metadata, prefix, method);
    if (!storageEntry) {
        throw "Can not find the storage entry from metadata";
    }

    // 1. GET STORAGE KEY & THE RESULT TYPE
    let storageKey = u8aConcat(
        xxhashAsU8a(prefix, 128), xxhashAsU8a(method, 128)
    );
    let valueType;

    if (storageEntry.type.isPlain) {
        valueType = metadata.registry.createLookupType(storageEntry.type.asPlain);
    } else if (storageEntry.type.isMap) {
        const {hashers, key, value} = storageEntry.type.asMap;

        if (!input || input.length != hashers.length) {
            throw "The `input` param is not correct";
        }

        storageKey = buildFullStorageKey(input, hashers, key, metadata, storageKey);
        valueType = metadata.registry.createLookupType(value);
    } else {
        throw "Only support plain and map type";
    }
    console.debug(`storage key: ${u8aToHex(storageKey)}`);

    // 2. GET RAW STORAGE DATA BY STORAGE KEY
    let raw = await getStorageRaw(provider, storageKey);
    console.debug(`        raw: ${raw}`);
    if (raw.toString() == "0x" && storageEntry.modifier.isDefault) {
        raw = storageEntry.fallback
    }

    // 3. DECODE THE RAW STORAGE DATA BY THE RESULT TYPE
    if (raw.toString() == "0x") {
        return null;
    } else {
        return metadata.registry.createType(valueType, raw).toString();
    }
}
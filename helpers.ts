import {blake2AsU8a, xxhashAsU8a} from '@polkadot/util-crypto';
import {u8aConcat, u8aToHex, u8aToU8a} from '@polkadot/util';
import {Metadata, Vec} from '@polkadot/types';
import {HexString} from '@polkadot/util/types';

import {ethers, providers} from "ethers";
import {StorageEntryMetadataV14, StorageHasherV14} from "@polkadot/types/interfaces/metadata/types";
import {SiLookupTypeId} from "@polkadot/types/interfaces";
import {identity, twox64Concat, blake2128Concat} from "./hashers";

type BaseProvider = providers.BaseProvider;

export async function getStorageRaw(provider: BaseProvider, storageKey: Uint8Array): Promise<Uint8Array> {
    const contractAddress = "0x0000000000000000000000000000000000000400";
    const abi = [
        "function state_storage(bytes) view returns (bytes)"
    ];
    const contract = new ethers.Contract(contractAddress, abi, provider);
    return await contract.state_storage(storageKey);
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

function buildStorageKey(metadata: Metadata, prefix: string, method: string, keyTypeId?: SiLookupTypeId, hashers?: Array<StorageHasherV14>, input?: Array<unknown>): Uint8Array {
    let storageKey = u8aConcat(
        xxhashAsU8a(prefix, 128), xxhashAsU8a(method, 128)
    );
    if (keyTypeId && hashers && input) {
        let keyTypeIds = hashers.length === 1
            ? [keyTypeId]
            : metadata.registry.lookup.getSiType(keyTypeId).def.asTuple;

        for (let i = 0; i < keyTypeIds.length; i++) {
            const theKeyTypeId = keyTypeIds[i];
            const theHasher = hashers[i].toString();
            const theKeyItem = input[i];

            // get the scale encoded input data by encoding the input
            const theKeyType = metadata.registry.createLookupType(theKeyTypeId);
            const theKeyItemEncoded = metadata.registry.createType(theKeyType, theKeyItem).toU8a();

            // apply hasher
            let theKeyItemAppliedHasher;
            if (theHasher == "Blake2_128Concat") {
                theKeyItemAppliedHasher = blake2128Concat(theKeyItemEncoded);
            } else if (theHasher == "Twox64Concat") {
                theKeyItemAppliedHasher = twox64Concat(theKeyItemEncoded);
            } else if (theHasher == "Identity") {
                theKeyItemAppliedHasher = identity(theKeyItemEncoded);
            } else {
                throw `The hasher ${theHasher} is not support. Contact Aki for help`;
            }
            storageKey = u8aConcat(storageKey, theKeyItemAppliedHasher);
        }
    }
    return storageKey;
}

export async function getStorage(provider: BaseProvider, metadata: Metadata, prefix: string, method: string, ...input: Array<unknown>): Promise<string | null> {
    // 0. FIND STORAGE ENTRY FROM METADATA
    const storageEntry = getStorageEntry(metadata, prefix, method);
    if (!storageEntry) {
        throw "Can not find the storage entry from metadata";
    }

    // 1. GET STORAGE KEY & THE RESULT TYPE
    let storageKey, valueType;
    if (storageEntry.type.isPlain) {
        storageKey = buildStorageKey(metadata, prefix, method);
        valueType = metadata.registry.createLookupType(storageEntry.type.asPlain);
    } else if (storageEntry.type.isMap) {
        const {hashers, key, value} = storageEntry.type.asMap;
        if (input.length != hashers.length) {
            throw "The `input` param is not correct";
        }
        storageKey = buildStorageKey(metadata, prefix, method, key, hashers, input);
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
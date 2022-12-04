import {Metadata, TypeRegistry} from '@polkadot/types';
import {StorageEntryMetadataV14, StorageHasherV14} from "@polkadot/types/interfaces/metadata/types";
import {SiLookupTypeId} from "@polkadot/types/interfaces";
import {u8aConcat} from "@polkadot/util";
import {xxhashAsU8a} from "@polkadot/util-crypto";
import {blake2128Concat, identity, twox64Concat} from "./hashers";
import {HexString} from "@polkadot/util/types";

export function buildMetadata(metaStatic: Uint8Array | HexString) {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metaStatic);
    registry.setMetadata(metadata);
    return metadata;
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

export function buildStorageKey(metadata: Metadata, prefix: string, method: string, keyTypeId?: SiLookupTypeId, hashers?: Array<StorageHasherV14>, input?: Array<unknown>): Uint8Array {
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
                throw new Error(`The hasher ${theHasher} is not support. Contact Aki for help`);
            }
            storageKey = u8aConcat(storageKey, theKeyItemAppliedHasher);
        }
    }
    return storageKey;
}
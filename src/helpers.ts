import { Metadata, TypeRegistry } from '@polkadot/types';
import { StorageEntryMetadataV14, StorageHasherV14 } from "@polkadot/types/interfaces/metadata/types";
import { SiLookupTypeId } from "@polkadot/types/interfaces";
import { u8aConcat } from "@polkadot/util";
import { xxhashAsU8a } from "@polkadot/util-crypto";
import { blake2128Concat, identity, twox64Concat } from "./hashers";
import { HexString } from "@polkadot/util/types";
import { camelToSnakeCase } from './utils';
import { AnyJson } from '@polkadot/types-codec/types';
import { BytesLike, ethers } from "ethers";

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

export type CallMeta = {
    callIndex: [number, number],
    argLookupTypes: string[],
    callsVariantLookupType: string,
};

export function getCallMeta(metadata: Metadata, palletName: string, callName: string): CallMeta {
    // get pallet
    const pallet = metadata.asLatest.pallets.find(pallet => {
        return pallet.name.toString() == palletName;
    });
    if (!pallet) {
        throw `Can not find pallet ${palletName} in metadata`;
    }

    // get call which is a variant item from pallet
    const calls = pallet.calls.unwrap();
    const callsType = metadata.registry.lookup.getSiType(calls.type);
    const call = callsType.def.asVariant.variants.find(v => {
        return v.name.toString() == callName;
    });
    if (!call) {
        throw `Can not find ${callName} dispatch call in ${palletName} pallet`;
    }

    return {
        callIndex: [pallet.index.toNumber(), call.index.toNumber()],
        argLookupTypes: call.fields.map(field => {
            return metadata.registry.createLookupType(field.type);
        }),
        callsVariantLookupType: metadata.registry.createLookupType(calls.type)
    };
}

// example: 
// {
//     callIndex: [9, 0],
//     args: {
//         keys: {
//             aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
//         },
//         proof: "0x"
//     }
// },
export type CallAsParam = {
    callIndex: [number, number],
    args: any
}

export function buildRuntimeCall(metadata: Metadata, palletName: string, callName: string, args: object): CallAsParam {
    callName = camelToSnakeCase(callName);

    const { callIndex, } = getCallMeta(metadata, palletName, callName);
    return {
        callIndex: [callIndex[0], callIndex[1]],
        args: args
    }
}

export function decodeCall(metadata: Metadata, palletName: string, callName: string, argsBytes: BytesLike): CallAsParam {
    const { callIndex, callsVariantLookupType } = getCallMeta(metadata, palletName, camelToSnakeCase(callName));

    const callBytes = ethers.utils.concat([ethers.utils.hexlify(callIndex[1]), argsBytes]);
    const decoded = metadata.registry.createType(callsVariantLookupType, callBytes).toJSON();

    return {
        callIndex: callIndex,
        args: (decoded as { [index: string]: AnyJson; })[callName]
    }
}

export function encodeCall(metadata: Metadata, palletName: string, callName: string, args: { [key: string]: any }): BytesLike {
    callName = camelToSnakeCase(callName);

    const { callIndex, callsVariantLookupType } = getCallMeta(metadata, palletName, callName);

    const callNameWithArgs: { [key: string]: any } = {};
    callNameWithArgs[callName] = args;

    const encodedCall =
        u8aConcat(
            [callIndex[0]],
            metadata.registry.createType(callsVariantLookupType, callNameWithArgs).toU8a()
        );

    return encodedCall;
}

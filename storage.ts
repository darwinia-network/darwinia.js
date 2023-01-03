import {u8aToHex} from '@polkadot/util';
import {ethers, providers} from "ethers";
import {buildMetadata, buildStorageKey, getStorageEntry} from "./helpers";
import {HexString} from "@polkadot/util/types";
import { Metadata } from '@polkadot/types';

type BaseProvider = providers.BaseProvider;

export async function getStorageRaw(provider: BaseProvider, storageKey: Uint8Array): Promise<Uint8Array> {
    const contractAddress = "0x0000000000000000000000000000000000000400";
    const abi = [
        "function state_storage(bytes) view returns (bytes)"
    ];
    const contract = new ethers.Contract(contractAddress, abi, provider);
    return await contract.state_storage(storageKey);
}

export type GetStorage = (prefix: string, method: string, ...input: Array<unknown>) => Promise<string | null>;

export function getStorage(provider: BaseProvider, metadata: Metadata) {
    return async (prefix: string, method: string, ...input: Array<unknown>): Promise<string | null> => {
        // 0. FIND STORAGE ENTRY FROM METADATA
        const storageEntry = getStorageEntry(metadata, prefix, method);
        if (!
            storageEntry
        ) {
            throw new Error("Can not find the storage entry from metadata");
        }

        // 1. GET STORAGE KEY & THE RESULT TYPE
        let storageKey, valueType;
        if (storageEntry.type.isPlain) {
            storageKey = buildStorageKey(metadata, prefix, method);
            valueType = metadata.registry.createLookupType(storageEntry.type.asPlain);
        } else if (storageEntry.type.isMap) {
            const {hashers, key, value} = storageEntry.type.asMap;
            if (input.length != hashers.length) {
                throw new Error("The `input` param is not correct");
            }
            storageKey = buildStorageKey(metadata, prefix, method, key, hashers, input);
            valueType = metadata.registry.createLookupType(value);
        } else {
            throw new Error("Only support plain and map type");
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
}

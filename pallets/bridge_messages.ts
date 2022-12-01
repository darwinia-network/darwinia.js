import { HexString } from '@polkadot/util/types';
import { MessageKey } from '@polkadot/types/interfaces';
import { u8aToU8a } from '@polkadot/util';
import { providers } from "ethers";
type BaseProvider = providers.BaseProvider;


import { ValueMeta, getStorage, blake2_128Concat } from "../helpers";
import {TypeRegistry} from "@polkadot/types";

async function inboundLanes(provider: BaseProvider, registry: TypeRegistry, prefix: string, laneId: HexString | Uint8Array): Promise<string | null> {
    const key = blake2_128Concat(laneId);
    const valueMeta: ValueMeta = {
        valueType: 'InboundLaneData',
        optional: false,
        fallback: u8aToU8a("0x000000000000000000")
    }
    return await getStorage(provider, registry, prefix, 'InboundLanes', valueMeta, key);
}

async function outboundLanes(provider: BaseProvider, registry: TypeRegistry, prefix: string, laneId: HexString | Uint8Array): Promise<string | null> {
    const key = blake2_128Concat(laneId);
    const valueMeta: ValueMeta = {
        valueType: 'OutboundLaneData',
        optional: false,
        fallback: u8aToU8a("0x010000000000000000000000000000000000000000000000")
    }
    return await getStorage(provider, registry, prefix, 'OutboundLanes', valueMeta, key);
}

async function outboundMessages(provider: BaseProvider, registry: TypeRegistry, prefix: string, messageKey: MessageKey): Promise<string | null> {
    const key = blake2_128Concat(messageKey.toU8a());
    const valueMeta: ValueMeta = {
        valueType: 'MessageData',
        optional: true,
        fallback: u8aToU8a("0x00")
    }
    return await getStorage(provider, registry, prefix, 'OutboundMessages', valueMeta, key);
}

async function palletOperatingMode(provider: BaseProvider, registry: TypeRegistry, prefix: string): Promise<string | null> {
    const valueMeta: ValueMeta = {
        valueType: 'OperatingMode',
        optional: false,
        fallback: u8aToU8a("0x00")
    }
    return await getStorage(provider, registry, prefix, 'PalletOperatingMode', valueMeta);
}

async function palletOwner(provider: BaseProvider, registry: TypeRegistry, prefix: string): Promise<string | null> {
    const valueMeta: ValueMeta = {
        valueType: 'AccountId32',
        optional: true,
        fallback: u8aToU8a("0x00")
    }
    return await getStorage(provider, registry, prefix, 'PalletOwner', valueMeta);
}

export const bridgeMessages = {
    inboundLanes,
    outboundLanes,
    outboundMessages,
    palletOperatingMode,
    palletOwner
};
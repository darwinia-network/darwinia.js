import { HexString } from '@polkadot/util/types';
import { MessageKey } from '@polkadot/types/interfaces';
import { u8aToU8a } from '@polkadot/util';
import { providers } from "ethers";
type BaseProvider = providers.BaseProvider;


import {getStorage} from "../helpers";
import {Metadata, TypeRegistry} from "@polkadot/types";

async function inboundLanes(provider: BaseProvider, metadata: Metadata, prefix: string, laneId: HexString | Uint8Array): Promise<string | null> {
    return await getStorage(provider, metadata, prefix, 'InboundLanes', laneId);
}

async function outboundLanes(provider: BaseProvider, metadata: Metadata, prefix: string, laneId: HexString | Uint8Array): Promise<string | null> {
    return await getStorage(provider, metadata, prefix, 'OutboundLanes', laneId);
}

async function outboundMessages(provider: BaseProvider, metadata: Metadata, prefix: string, messageKey: unknown): Promise<string | null> {
    return await getStorage(provider, metadata, prefix, 'OutboundMessages', messageKey);
}

async function palletOperatingMode(provider: BaseProvider, metadata: Metadata, prefix: string): Promise<string | null> {
    return await getStorage(provider, metadata, prefix, 'PalletOperatingMode');
}

async function palletOwner(provider: BaseProvider, metadata: Metadata, prefix: string): Promise<string | null> {
    return await getStorage(provider, metadata, prefix, 'PalletOwner');
}

export const bridgeMessages = {
    inboundLanes,
    outboundLanes,
    outboundMessages,
    palletOperatingMode,
    palletOwner
};
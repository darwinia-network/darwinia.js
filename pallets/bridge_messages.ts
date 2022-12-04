import {HexString} from '@polkadot/util/types';
import {providers} from "ethers";
import {getStorage} from "../storage";
import {Metadata} from "@polkadot/types";

type BaseProvider = providers.BaseProvider;


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
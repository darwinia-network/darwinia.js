import {HexString} from '@polkadot/util/types';
import {GetStorage} from "../storage";

async function inboundLanes(getStorage: GetStorage, prefix: string, laneId: HexString | Uint8Array): Promise<string | null> {
    return await getStorage(prefix, 'InboundLanes', laneId);
}

async function outboundLanes(getStorage: GetStorage, prefix: string, laneId: HexString | Uint8Array): Promise<string | null> {
    return await getStorage(prefix, 'OutboundLanes', laneId);
}

async function outboundMessages(getStorage: GetStorage, prefix: string, messageKey: unknown): Promise<string | null> {
    return await getStorage(prefix, 'OutboundMessages', messageKey);
}

async function palletOperatingMode(getStorage: GetStorage, prefix: string): Promise<string | null> {
    return await getStorage(prefix, 'PalletOperatingMode');
}

async function palletOwner(getStorage: GetStorage, prefix: string): Promise<string | null> {
    return await getStorage(prefix, 'PalletOwner');
}

export const bridgeMessages = {
    inboundLanes,
    outboundLanes,
    outboundMessages,
    palletOperatingMode,
    palletOwner
};
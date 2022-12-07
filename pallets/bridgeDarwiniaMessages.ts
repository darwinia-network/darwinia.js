import {GetStorage} from "../storage";

export const bridgeDarwiniaMessages = {
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaMessages', 'PalletOwner');
    },
    palletOperatingMode: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaMessages', 'PalletOperatingMode');
    },
    inboundLanes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaMessages', 'InboundLanes', param0);
    },
    outboundLanes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaMessages', 'OutboundLanes', param0);
    },
    outboundMessages: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaMessages', 'OutboundMessages', param0);
    },
};
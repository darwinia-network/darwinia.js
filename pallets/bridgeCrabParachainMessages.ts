import {GetStorage} from "../storage";

export const bridgeCrabParachainMessages = {
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabParachainMessages', 'PalletOwner');
    },
    palletOperatingMode: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabParachainMessages', 'PalletOperatingMode');
    },
    inboundLanes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeCrabParachainMessages', 'InboundLanes', param0);
    },
    outboundLanes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeCrabParachainMessages', 'OutboundLanes', param0);
    },
    outboundMessages: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeCrabParachainMessages', 'OutboundMessages', param0);
    },
};
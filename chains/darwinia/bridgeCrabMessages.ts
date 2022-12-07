import {GetStorage} from "../../storage";

export default {
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabMessages', 'PalletOwner');
    },
    palletOperatingMode: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeCrabMessages', 'PalletOperatingMode');
    },
    inboundLanes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeCrabMessages', 'InboundLanes', param0);
    },
    outboundLanes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeCrabMessages', 'OutboundLanes', param0);
    },
    outboundMessages: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeCrabMessages', 'OutboundMessages', param0);
    },
};
import {GetStorage} from "../../storage";

export default {
    palletOwner: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaParachainMessages', 'PalletOwner');
    },
    palletOperatingMode: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaParachainMessages', 'PalletOperatingMode');
    },
    inboundLanes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaParachainMessages', 'InboundLanes', param0);
    },
    outboundLanes: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaParachainMessages', 'OutboundLanes', param0);
    },
    outboundMessages: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('BridgeDarwiniaParachainMessages', 'OutboundMessages', param0);
    },
};
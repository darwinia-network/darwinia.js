import {GetStorage} from "../../storage";

export default {
    relayersMap: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('DarwiniaParachainFeeMarket', 'RelayersMap', param0);
    },
    relayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaParachainFeeMarket', 'Relayers');
    },
    assignedRelayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaParachainFeeMarket', 'AssignedRelayers');
    },
    orders: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('DarwiniaParachainFeeMarket', 'Orders', param0);
    },
    collateralSlashProtect: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaParachainFeeMarket', 'CollateralSlashProtect');
    },
    assignedRelayersNumber: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaParachainFeeMarket', 'AssignedRelayersNumber');
    },
};
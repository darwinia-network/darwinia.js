import {GetStorage} from "../storage";

export default {
    relayersMap: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('DarwiniaFeeMarket', 'RelayersMap', param0);
    },
    relayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaFeeMarket', 'Relayers');
    },
    assignedRelayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaFeeMarket', 'AssignedRelayers');
    },
    orders: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('DarwiniaFeeMarket', 'Orders', param0);
    },
    collateralSlashProtect: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaFeeMarket', 'CollateralSlashProtect');
    },
    assignedRelayersNumber: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('DarwiniaFeeMarket', 'AssignedRelayersNumber');
    },
};
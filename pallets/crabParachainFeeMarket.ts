import {GetStorage} from "../storage";

export const crabParachainFeeMarket = {
    relayersMap: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('CrabParachainFeeMarket', 'RelayersMap', param0);
    },
    relayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('CrabParachainFeeMarket', 'Relayers');
    },
    assignedRelayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('CrabParachainFeeMarket', 'AssignedRelayers');
    },
    orders: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('CrabParachainFeeMarket', 'Orders', param0);
    },
    collateralSlashProtect: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('CrabParachainFeeMarket', 'CollateralSlashProtect');
    },
    assignedRelayersNumber: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('CrabParachainFeeMarket', 'AssignedRelayersNumber');
    },
};
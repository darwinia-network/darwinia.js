import {GetStorage} from "../../storage";

export default {

    /**
     */
    relayersMap: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('FeeMarket', 'RelayersMap', param0);
    },

    /**
     */
    relayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('FeeMarket', 'Relayers');
    },

    /**
     */
    assignedRelayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('FeeMarket', 'AssignedRelayers');
    },

    /**
     */
    orders: async (getStorage: GetStorage, param0: unknown /* ([U8; 4], U64) */): Promise<string | null> => {
        return await getStorage('FeeMarket', 'Orders', param0);
    },

    /**
     */
    collateralSlashProtect: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('FeeMarket', 'CollateralSlashProtect');
    },

    /**
     */
    assignedRelayersNumber: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('FeeMarket', 'AssignedRelayersNumber');
    },
};
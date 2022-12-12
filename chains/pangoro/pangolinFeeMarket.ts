import {GetStorage} from "../../storage";

export const getPangolinFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
        */
        relayersMap: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'RelayersMap', param0);
        },

        /**
        */
        relayers: async (): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'Relayers');
        },

        /**
        */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'AssignedRelayers');
        },

        /**
        */
        orders: async (param0: unknown /* ([U8; 4], U64) */): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'Orders', param0);
        },

        /**
        */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'CollateralSlashProtect');
        },

        /**
        */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'AssignedRelayersNumber');
        },
    };
};
import {GetStorage} from "../../storage";

export const getDarwiniaFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
        */
        relayersMap: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('DarwiniaFeeMarket', 'RelayersMap', param0);
        },

        /**
        */
        relayers: async (): Promise<string | null> => {
            return await getStorage('DarwiniaFeeMarket', 'Relayers');
        },

        /**
        */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('DarwiniaFeeMarket', 'AssignedRelayers');
        },

        /**
        */
        orders: async (param0: unknown /* ([U8; 4], U64) */): Promise<string | null> => {
            return await getStorage('DarwiniaFeeMarket', 'Orders', param0);
        },

        /**
        */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('DarwiniaFeeMarket', 'CollateralSlashProtect');
        },

        /**
        */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('DarwiniaFeeMarket', 'AssignedRelayersNumber');
        },
    };
};
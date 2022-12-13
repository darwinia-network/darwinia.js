import {GetStorage} from "../../storage";

export const getDarwiniaParachainFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
        */
        relayersMap: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'RelayersMap', param0);
        },

        /**
        */
        relayers: async (): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'Relayers');
        },

        /**
        */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'AssignedRelayers');
        },

        /**
        */
        orders: async (param0: unknown /* ([U8; 4], U64) */): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'Orders', param0);
        },

        /**
        */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'CollateralSlashProtect');
        },

        /**
        */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('DarwiniaParachainFeeMarket', 'AssignedRelayersNumber');
        },
    };
};
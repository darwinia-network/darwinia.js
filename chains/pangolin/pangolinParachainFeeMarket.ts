import {GetStorage} from "../../storage";

export const getPangolinParachainFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
        */
        relayersMap: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('PangolinParachainFeeMarket', 'RelayersMap', param0);
        },

        /**
        */
        relayers: async (): Promise<string | null> => {
            return await getStorage('PangolinParachainFeeMarket', 'Relayers');
        },

        /**
        */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('PangolinParachainFeeMarket', 'AssignedRelayers');
        },

        /**
        */
        orders: async (param0: unknown /* ([U8; 4], U64) */): Promise<string | null> => {
            return await getStorage('PangolinParachainFeeMarket', 'Orders', param0);
        },

        /**
        */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('PangolinParachainFeeMarket', 'CollateralSlashProtect');
        },

        /**
        */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('PangolinParachainFeeMarket', 'AssignedRelayersNumber');
        },
    };
};
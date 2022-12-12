import {GetStorage} from "../../storage";

export const getPangolinParachainAlphaFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
        */
        relayersMap: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('PangolinParachainAlphaFeeMarket', 'RelayersMap', param0);
        },

        /**
        */
        relayers: async (): Promise<string | null> => {
            return await getStorage('PangolinParachainAlphaFeeMarket', 'Relayers');
        },

        /**
        */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('PangolinParachainAlphaFeeMarket', 'AssignedRelayers');
        },

        /**
        */
        orders: async (param0: unknown /* ([U8; 4], U64) */): Promise<string | null> => {
            return await getStorage('PangolinParachainAlphaFeeMarket', 'Orders', param0);
        },

        /**
        */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('PangolinParachainAlphaFeeMarket', 'CollateralSlashProtect');
        },

        /**
        */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('PangolinParachainAlphaFeeMarket', 'AssignedRelayersNumber');
        },
    };
};
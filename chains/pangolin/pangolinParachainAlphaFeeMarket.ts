import {GetStorage} from "../../storage";

export default {

    /**
     */
    relayersMap: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
        return await getStorage('PangolinParachainAlphaFeeMarket', 'RelayersMap', param0);
    },

    /**
     */
    relayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('PangolinParachainAlphaFeeMarket', 'Relayers');
    },

    /**
     */
    assignedRelayers: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('PangolinParachainAlphaFeeMarket', 'AssignedRelayers');
    },

    /**
     */
    orders: async (getStorage: GetStorage, param0: unknown /* ([U8; 4], U64) */): Promise<string | null> => {
        return await getStorage('PangolinParachainAlphaFeeMarket', 'Orders', param0);
    },

    /**
     */
    collateralSlashProtect: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('PangolinParachainAlphaFeeMarket', 'CollateralSlashProtect');
    },

    /**
     */
    assignedRelayersNumber: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('PangolinParachainAlphaFeeMarket', 'AssignedRelayersNumber');
    },
};
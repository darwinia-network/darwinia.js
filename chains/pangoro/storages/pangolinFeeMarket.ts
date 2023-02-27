import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `PangolinFeeMarket`'s storages.
 * 
 * `PangolinFeeMarket`'s calls: {@link: module:pangoro/pangolinFeeMarket/calls}
 *
 * @module pangoro/pangolinFeeMarket/storages
 */
export const getPangolinFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @returns {Promise<string | null>} Relayer: {id: [U8; 20], collateral: U128, fee: U128}
         */
        relayersMap: async (param0: unknown): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'RelayersMap', param0);
        },

        /**
         *
         * @returns {Promise<string | null>} Vec<[U8; 20]>
         */
        relayers: async (): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'Relayers');
        },

        /**
         *
         * @returns {Promise<string | null>} Vec<{id: [U8; 20], collateral: U128, fee: U128}>
         */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'AssignedRelayers');
        },

        /**
         *
         * @param {unknown} param0 ([U8; 4], U64)
         * @returns {Promise<string | null>} Order: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{0/None: , 1/Some: U32}>, collateral_per_assigned_relayer: U128, assigned_relayers: Vec<{id: [U8; 20], fee: U128, valid_range: {start: U32, end: U32}}>}
         */
        orders: async (param0: unknown): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'Orders', param0);
        },

        /**
         *
         * @returns {Promise<string | null>} U128
         */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'CollateralSlashProtect');
        },

        /**
         *
         * @returns {Promise<string | null>} U32
         */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('PangolinFeeMarket', 'AssignedRelayersNumber');
        },
    };
};

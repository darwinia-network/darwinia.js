import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `CrabParachainFeeMarket`'s storages.
 * 
 * `CrabParachainFeeMarket`'s calls: {@link: module:crab/crabParachainFeeMarket/calls}
 *
 * @module crab/crabParachainFeeMarket/storages
 */
export const getCrabParachainFeeMarket = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @param {unknown} param0 AccountId32: [U8; 32]
         * @returns {Promise<string | null>} Relayer: {id: [U8; 32], collateral: U128, fee: U128}
         */
        relayersMap: async (param0: unknown): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'RelayersMap', param0);
        },

        /**
         *
         * @returns {Promise<string | null>} Vec<[U8; 32]>
         */
        relayers: async (): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'Relayers');
        },

        /**
         *
         * @returns {Promise<string | null>} Vec<{id: [U8; 32], collateral: U128, fee: U128}>
         */
        assignedRelayers: async (): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'AssignedRelayers');
        },

        /**
         *
         * @param {unknown} param0 ([U8; 4], U64)
         * @returns {Promise<string | null>} Order: {lane: [U8; 4], message: U64, sent_time: U32, confirm_time: Enum<{0/None: , 1/Some: U32}>, locked_collateral: U128, assigned_relayers: Vec<{id: [U8; 32], fee: U128, valid_range: {start: U32, end: U32}}>}
         */
        orders: async (param0: unknown): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'Orders', param0);
        },

        /**
         *
         * @returns {Promise<string | null>} U128
         */
        collateralSlashProtect: async (): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'CollateralSlashProtect');
        },

        /**
         *
         * @returns {Promise<string | null>} U32
         */
        assignedRelayersNumber: async (): Promise<string | null> => {
            return await getStorage('CrabParachainFeeMarket', 'AssignedRelayersNumber');
        },
    };
};

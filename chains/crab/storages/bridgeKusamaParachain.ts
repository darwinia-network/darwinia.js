import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module crab/bridgeKusamaParachain/storages
 */
export const getBridgeKusamaParachain = (getStorage: GetStorage) => {
    return {

        /**
         * Best parachain heads.
         *
         * @param {unknown} param0 ParaId: U32
         * @returns {Promise<string | null>} BestParaHead: {at_relay_block_number: U32, head_hash: [U8; 32], next_imported_hash_position: U32}
         */
        bestParaHeads: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeKusamaParachain', 'BestParaHeads', param0);
        },

        /**
         * Parachain heads which have been imported into the pallet.
         *
         * @param {unknown} param0 ParaId: U32
         * @param {unknown} param1 H256: [U8; 32]
         * @returns {Promise<string | null>} ParaHead: Vec<U8>
         */
        importedParaHeads: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('BridgeKusamaParachain', 'ImportedParaHeads', param0, param1);
        },

        /**
         * A ring buffer of imported parachain head hashes. Ordered by the insertion time.
         *
         * @param {unknown} param0 ParaId: U32
         * @param {unknown} param1 U32
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        importedParaHashes: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('BridgeKusamaParachain', 'ImportedParaHashes', param0, param1);
        },
    };
};

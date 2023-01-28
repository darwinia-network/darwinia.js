import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `BridgeRococoParachain`'s storages.
 * 
 * `BridgeRococoParachain`'s calls: {@link: module:pangolin/bridgeRococoParachain/calls}
 *
 * @module pangolin/bridgeRococoParachain/storages
 */
export const getBridgeRococoParachain = (getStorage: GetStorage) => {
    return {

        /**
         * Optional pallet owner.
         *
         * Pallet owner has a right to halt all pallet operations and then resume them. If it is
         * `None`, then there are no direct ways to halt/resume pallet operations, but other
         * runtime methods may still be used to do that (i.e. democracy::referendum to update halt
         * flag directly or call the `halt_operations`).
         *
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        palletOwner: async (): Promise<string | null> => {
            return await getStorage('BridgeRococoParachain', 'PalletOwner');
        },

        /**
         * The current operating mode of the pallet.
         *
         * Depending on the mode either all, or no transactions will be allowed.
         *
         * @returns {Promise<string | null>} BasicOperatingMode: Enum<{0/Normal: , 1/Halted: }>
         */
        palletOperatingMode: async (): Promise<string | null> => {
            return await getStorage('BridgeRococoParachain', 'PalletOperatingMode');
        },

        /**
         * Parachains info.
         *
         * Contains the following info:
         * - best parachain head hash
         * - the head of the `ImportedParaHashes` ring buffer
         *
         * @param {unknown} param0 ParaId: U32
         * @returns {Promise<string | null>} ParaInfo: {best_head_hash: {at_relay_block_number: U32, head_hash: [U8; 32]}, next_imported_hash_position: U32}
         */
        parasInfo: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgeRococoParachain', 'ParasInfo', param0);
        },

        /**
         * Parachain heads which have been imported into the pallet.
         *
         * @param {unknown} param0 ParaId: U32
         * @param {unknown} param1 H256: [U8; 32]
         * @returns {Promise<string | null>} ParaHead: Vec<U8>
         */
        importedParaHeads: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('BridgeRococoParachain', 'ImportedParaHeads', param0, param1);
        },

        /**
         * A ring buffer of imported parachain head hashes. Ordered by the insertion time.
         *
         * @param {unknown} param0 ParaId: U32
         * @param {unknown} param1 U32
         * @returns {Promise<string | null>} H256: [U8; 32]
         */
        importedParaHashes: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('BridgeRococoParachain', 'ImportedParaHashes', param0, param1);
        },
    };
};

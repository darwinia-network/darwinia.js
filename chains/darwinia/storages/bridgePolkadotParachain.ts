import {GetStorage} from "../../../src/storage";

export const getBridgePolkadotParachain = (getStorage: GetStorage) => {
    return {

        /**
         * Best parachain heads.
         *
         * @param param0: ParaId: U32
         * @return BestParaHead: {at_relay_block_number: U32, head_hash: [U8; 32], next_imported_hash_position: U32}
         */
        bestParaHeads: async (param0: unknown): Promise<string | null> => {
            return await getStorage('BridgePolkadotParachain', 'BestParaHeads', param0);
        },

        /**
         * Parachain heads which have been imported into the pallet.
         *
         * @param param0: ParaId: U32
         * @param param1: H256: [U8; 32]
         * @return ParaHead: Vec<U8>
         */
        importedParaHeads: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('BridgePolkadotParachain', 'ImportedParaHeads', param0, param1);
        },

        /**
         * A ring buffer of imported parachain head hashes. Ordered by the insertion time.
         *
         * @param param0: ParaId: U32
         * @param param1: U32
         * @return H256: [U8; 32]
         */
        importedParaHashes: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('BridgePolkadotParachain', 'ImportedParaHashes', param0, param1);
        },
    };
};

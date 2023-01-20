import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module pangoro/transactionPause/storages
 */
export const getTransactionPause = (getStorage: GetStorage) => {
    return {

        /**
         * The paused transaction map
         *
         * map (PalletNameBytes, FunctionNameBytes) => Option<()>
         *
         * @param {unknown} param0 (Vec<U8>, Vec<U8>)
         * @returns {Promise<string | null>} ()
         */
        pausedTransactions: async (param0: unknown): Promise<string | null> => {
            return await getStorage('TransactionPause', 'PausedTransactions', param0);
        },
    };
};

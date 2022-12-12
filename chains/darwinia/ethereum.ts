import {GetStorage} from "../../storage";

export default {

    /**
     * Current building block&#39;s transactions and receipts.
     */
    pending: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Ethereum', 'Pending');
    },

    /**
     * The current Ethereum block.
     */
    currentBlock: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Ethereum', 'CurrentBlock');
    },

    /**
     * The current Ethereum receipts.
     */
    currentReceipts: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Ethereum', 'CurrentReceipts');
    },

    /**
     * The current transaction statuses.
     */
    currentTransactionStatuses: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Ethereum', 'CurrentTransactionStatuses');
    },

    /**
     * Remaining ring balance for dvm account.
     */
    remainingRingBalance: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Ethereum', 'RemainingRingBalance', param0);
    },

    /**
     * Remaining kton balance for dvm account.
     */
    remainingKtonBalance: async (getStorage: GetStorage, param0: unknown /* sp_core::crypto::AccountId32: [U8;32] */): Promise<string | null> => {
        return await getStorage('Ethereum', 'RemainingKtonBalance', param0);
    },

    /**
     * Mapping for block number and hashes.
     */
    blockHash: async (getStorage: GetStorage, param0: unknown /* primitive_types::U256: [U64;4] */): Promise<string | null> => {
        return await getStorage('Ethereum', 'BlockHash', param0);
    },
};
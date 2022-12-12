import {GetStorage} from "../../storage";

export const getEthereum = (getStorage: GetStorage) => {
    return {

        /**
        * Current building block&#39;s transactions and receipts.
        */
        pending: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'Pending');
        },

        /**
        * The current Ethereum block.
        */
        currentBlock: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentBlock');
        },

        /**
        * The current Ethereum receipts.
        */
        currentReceipts: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentReceipts');
        },

        /**
        * The current transaction statuses.
        */
        currentTransactionStatuses: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentTransactionStatuses');
        },

        /**
        * Remaining ring balance for dvm account.
        */
        remainingRingBalance: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Ethereum', 'RemainingRingBalance', param0);
        },

        /**
        * Remaining kton balance for dvm account.
        */
        remainingKtonBalance: async (param0: unknown /* AccountId32: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Ethereum', 'RemainingKtonBalance', param0);
        },

        /**
        * Mapping for block number and hashes.
        */
        blockHash: async (param0: unknown /* U256: [U64; 4] */): Promise<string | null> => {
            return await getStorage('Ethereum', 'BlockHash', param0);
        },
    };
};
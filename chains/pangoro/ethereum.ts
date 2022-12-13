import {GetStorage} from "../../storage";

export const getEthereum = (getStorage: GetStorage) => {
    return {

        /**
        * Current building block&#39;s transactions and receipts.
        *
        * @return Vec<(Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>, {transaction_hash: [U8; 32], transaction_index: U32, from: [U8; 20], to: Enum<{"0/None", "1/Some"}>, contract_address: Enum<{"0/None", "1/Some"}>, logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>, logs_bloom: [U8; 256]}, Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>)>
        */
        pending: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'Pending');
        },

        /**
        * The current Ethereum block.
        *
        * @return Block: {header: {parent_hash: [U8; 32], ommers_hash: [U8; 32], beneficiary: [U8; 20], state_root: [U8; 32], transactions_root: [U8; 32], receipts_root: [U8; 32], logs_bloom: [U8; 256], difficulty: [U64; 4], number: [U64; 4], gas_limit: [U64; 4], gas_used: [U64; 4], timestamp: U64, extra_data: Vec<U8>, mix_hash: [U8; 32], nonce: [U8; 8]}, transactions: Vec<Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>>, ommers: Vec<{parent_hash: [U8; 32], ommers_hash: [U8; 32], beneficiary: [U8; 20], state_root: [U8; 32], transactions_root: [U8; 32], receipts_root: [U8; 32], logs_bloom: [U8; 256], difficulty: [U64; 4], number: [U64; 4], gas_limit: [U64; 4], gas_used: [U64; 4], timestamp: U64, extra_data: Vec<U8>, mix_hash: [U8; 32], nonce: [U8; 8]}>}
        */
        currentBlock: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentBlock');
        },

        /**
        * The current Ethereum receipts.
        *
        * @return Vec<Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>>
        */
        currentReceipts: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentReceipts');
        },

        /**
        * The current transaction statuses.
        *
        * @return Vec<{transaction_hash: [U8; 32], transaction_index: U32, from: [U8; 20], to: Enum<{"0/None", "1/Some"}>, contract_address: Enum<{"0/None", "1/Some"}>, logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>, logs_bloom: [U8; 256]}>
        */
        currentTransactionStatuses: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentTransactionStatuses');
        },

        /**
        * Remaining ring balance for dvm account.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return U128
        */
        remainingRingBalance: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Ethereum', 'RemainingRingBalance', param0);
        },

        /**
        * Remaining kton balance for dvm account.
        *
        * @param param0: AccountId32: [U8; 32]
        * @return U128
        */
        remainingKtonBalance: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Ethereum', 'RemainingKtonBalance', param0);
        },

        /**
        * Mapping for block number and hashes.
        *
        * @param param0: U256: [U64; 4]
        * @return H256: [U8; 32]
        */
        blockHash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Ethereum', 'BlockHash', param0);
        },
    };
};
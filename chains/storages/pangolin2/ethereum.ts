import {GetStorage} from "../../../storage";

export const getEthereum = (getStorage: GetStorage) => {
    return {

        /**
        * Current building block&#39;s transactions and receipts.
        *
        * @return Vec<(Enum<{Legacy: {nonce: [U64; 4], gas_price: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, signature: {v: U64, r: [U8; 32], s: [U8; 32]}}, EIP2930: {chain_id: U64, nonce: [U64; 4], gas_price: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Vec<{address: [U8; 20], storage_keys: Vec<[U8; 32]>}>, odd_y_parity: Bool, r: [U8; 32], s: [U8; 32]}, EIP1559: {chain_id: U64, nonce: [U64; 4], max_priority_fee_per_gas: [U64; 4], max_fee_per_gas: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Vec<{address: [U8; 20], storage_keys: Vec<[U8; 32]>}>, odd_y_parity: Bool, r: [U8; 32], s: [U8; 32]}}>, {transaction_hash: [U8; 32], transaction_index: U32, from: [U8; 20], to: Enum<{None: , Some: [U8; 20]}>, contract_address: Enum<{None: , Some: [U8; 20]}>, logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>, logs_bloom: [U8; 256]}, Enum<{Legacy: {status_code: U8, used_gas: [U64; 4], logs_bloom: [U8; 256], logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>}, EIP2930: {status_code: U8, used_gas: [U64; 4], logs_bloom: [U8; 256], logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>}, EIP1559: {status_code: U8, used_gas: [U64; 4], logs_bloom: [U8; 256], logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>}}>)>
        */
        pending: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'Pending');
        },

        /**
        * The current Ethereum block.
        *
        * @return Block: {header: {parent_hash: [U8; 32], ommers_hash: [U8; 32], beneficiary: [U8; 20], state_root: [U8; 32], transactions_root: [U8; 32], receipts_root: [U8; 32], logs_bloom: [U8; 256], difficulty: [U64; 4], number: [U64; 4], gas_limit: [U64; 4], gas_used: [U64; 4], timestamp: U64, extra_data: Vec<U8>, mix_hash: [U8; 32], nonce: [U8; 8]}, transactions: Vec<Enum<{Legacy: {nonce: [U64; 4], gas_price: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, signature: {v: U64, r: [U8; 32], s: [U8; 32]}}, EIP2930: {chain_id: U64, nonce: [U64; 4], gas_price: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Vec<{address: [U8; 20], storage_keys: Vec<[U8; 32]>}>, odd_y_parity: Bool, r: [U8; 32], s: [U8; 32]}, EIP1559: {chain_id: U64, nonce: [U64; 4], max_priority_fee_per_gas: [U64; 4], max_fee_per_gas: [U64; 4], gas_limit: [U64; 4], action: Enum<{Call: [U8; 20], Create: }>, value: [U64; 4], input: Vec<U8>, access_list: Vec<{address: [U8; 20], storage_keys: Vec<[U8; 32]>}>, odd_y_parity: Bool, r: [U8; 32], s: [U8; 32]}}>>, ommers: Vec<{parent_hash: [U8; 32], ommers_hash: [U8; 32], beneficiary: [U8; 20], state_root: [U8; 32], transactions_root: [U8; 32], receipts_root: [U8; 32], logs_bloom: [U8; 256], difficulty: [U64; 4], number: [U64; 4], gas_limit: [U64; 4], gas_used: [U64; 4], timestamp: U64, extra_data: Vec<U8>, mix_hash: [U8; 32], nonce: [U8; 8]}>}
        */
        currentBlock: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentBlock');
        },

        /**
        * The current Ethereum receipts.
        *
        * @return Vec<Enum<{Legacy: {status_code: U8, used_gas: [U64; 4], logs_bloom: [U8; 256], logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>}, EIP2930: {status_code: U8, used_gas: [U64; 4], logs_bloom: [U8; 256], logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>}, EIP1559: {status_code: U8, used_gas: [U64; 4], logs_bloom: [U8; 256], logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>}}>>
        */
        currentReceipts: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentReceipts');
        },

        /**
        * The current transaction statuses.
        *
        * @return Vec<{transaction_hash: [U8; 32], transaction_index: U32, from: [U8; 20], to: Enum<{None: , Some: [U8; 20]}>, contract_address: Enum<{None: , Some: [U8; 20]}>, logs: Vec<{address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}>, logs_bloom: [U8; 256]}>
        */
        currentTransactionStatuses: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentTransactionStatuses');
        },

        /**
        *
        * @param param0: U256: [U64; 4]
        * @return H256: [U8; 32]
        */
        blockHash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Ethereum', 'BlockHash', param0);
        },
    };
};

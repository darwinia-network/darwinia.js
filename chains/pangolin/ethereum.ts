import {GetStorage} from "../../storage";

export const getEthereum = (getStorage: GetStorage) => {
    return {

        /**
        * Current building block&#39;s transactions and receipts.

        * @return Vec&lt;(Enum&lt;{&#34;0/Legacy&#34;, &#34;1/EIP2930&#34;, &#34;2/EIP1559&#34;}&gt;, {transaction_hash: [U8; 32], transaction_index: U32, from: [U8; 20], to: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;, contract_address: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;, logs: Vec&lt;{address: [U8; 20], topics: Vec&lt;[U8; 32]&gt;, data: Vec&lt;U8&gt;}&gt;, logs_bloom: [U8; 256]}, Enum&lt;{&#34;0/Legacy&#34;, &#34;1/EIP2930&#34;, &#34;2/EIP1559&#34;}&gt;)&gt;
        */
        pending: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'Pending');
        },

        /**
        * The current Ethereum block.

        * @return Block: {header: {parent_hash: [U8; 32], ommers_hash: [U8; 32], beneficiary: [U8; 20], state_root: [U8; 32], transactions_root: [U8; 32], receipts_root: [U8; 32], logs_bloom: [U8; 256], difficulty: [U64; 4], number: [U64; 4], gas_limit: [U64; 4], gas_used: [U64; 4], timestamp: U64, extra_data: Vec&lt;U8&gt;, mix_hash: [U8; 32], nonce: [U8; 8]}, transactions: Vec&lt;Enum&lt;{&#34;0/Legacy&#34;, &#34;1/EIP2930&#34;, &#34;2/EIP1559&#34;}&gt;&gt;, ommers: Vec&lt;{parent_hash: [U8; 32], ommers_hash: [U8; 32], beneficiary: [U8; 20], state_root: [U8; 32], transactions_root: [U8; 32], receipts_root: [U8; 32], logs_bloom: [U8; 256], difficulty: [U64; 4], number: [U64; 4], gas_limit: [U64; 4], gas_used: [U64; 4], timestamp: U64, extra_data: Vec&lt;U8&gt;, mix_hash: [U8; 32], nonce: [U8; 8]}&gt;}
        */
        currentBlock: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentBlock');
        },

        /**
        * The current Ethereum receipts.

        * @return Vec&lt;Enum&lt;{&#34;0/Legacy&#34;, &#34;1/EIP2930&#34;, &#34;2/EIP1559&#34;}&gt;&gt;
        */
        currentReceipts: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentReceipts');
        },

        /**
        * The current transaction statuses.

        * @return Vec&lt;{transaction_hash: [U8; 32], transaction_index: U32, from: [U8; 20], to: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;, contract_address: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;, logs: Vec&lt;{address: [U8; 20], topics: Vec&lt;[U8; 32]&gt;, data: Vec&lt;U8&gt;}&gt;, logs_bloom: [U8; 256]}&gt;
        */
        currentTransactionStatuses: async (): Promise<string | null> => {
            return await getStorage('Ethereum', 'CurrentTransactionStatuses');
        },

        /**
        * Remaining ring balance for dvm account.

        * @param param0: AccountId32: [U8; 32]
        * @return U128
        */
        remainingRingBalance: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Ethereum', 'RemainingRingBalance', param0);
        },

        /**
        * Remaining kton balance for dvm account.

        * @param param0: AccountId32: [U8; 32]
        * @return U128
        */
        remainingKtonBalance: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Ethereum', 'RemainingKtonBalance', param0);
        },

        /**
        * Mapping for block number and hashes.

        * @param param0: U256: [U64; 4]
        * @return H256: [U8; 32]
        */
        blockHash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Ethereum', 'BlockHash', param0);
        },
    };
};
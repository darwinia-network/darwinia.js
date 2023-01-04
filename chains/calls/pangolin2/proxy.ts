import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getProxy = (dispatch: Dispatch) => {
    return {
        /**
         * @param _real: [U8; 20]
         * @param _force_proxy_type: Enum<{"0/None", "1/Some"}>
         * @param _call: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
	 */
        proxy: async (signer: ethers.Signer, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, _real, _force_proxy_type, _call);
        },

        /**
         * @param _delegate: [U8; 20]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>
         * @param _delay: U32
	 */
        addProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, _delegate, _proxy_type, _delay);
        },

        /**
         * @param _delegate: [U8; 20]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>
         * @param _delay: U32
	 */
        removeProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxy', false, _delegate, _proxy_type, _delay);
        },

        /**
	 */
        removeProxies: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxies', false);
        },

        /**
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>
         * @param _delay: U32
         * @param _index: U16
	 */
        createPure: async (signer: ethers.Signer, _proxy_type: unknown, _delay: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'createPure', false, _proxy_type, _delay, _index);
        },

        /**
         * @param _spawner: [U8; 20]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>
         * @param _index: U16
         * @param _height: Compact<U32>
         * @param _ext_index: Compact<U32>
	 */
        killPure: async (signer: ethers.Signer, _spawner: unknown, _proxy_type: unknown, _index: unknown, _height: unknown, _ext_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'killPure', false, _spawner, _proxy_type, _index, _height, _ext_index);
        },

        /**
         * @param _real: [U8; 20]
         * @param _call_hash: [U8; 32]
	 */
        announce: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'announce', false, _real, _call_hash);
        },

        /**
         * @param _real: [U8; 20]
         * @param _call_hash: [U8; 32]
	 */
        removeAnnouncement: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', false, _real, _call_hash);
        },

        /**
         * @param _delegate: [U8; 20]
         * @param _call_hash: [U8; 32]
	 */
        rejectAnnouncement: async (signer: ethers.Signer, _delegate: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', false, _delegate, _call_hash);
        },

        /**
         * @param _delegate: [U8; 20]
         * @param _real: [U8; 20]
         * @param _force_proxy_type: Enum<{"0/None", "1/Some"}>
         * @param _call: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
	 */
        proxyAnnounced: async (signer: ethers.Signer, _delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, _delegate, _real, _force_proxy_type, _call);
        },


    }
}

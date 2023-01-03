import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getProxy = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 20]
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
	 */
        proxy: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>
         * @param param2: U32
	 */
        addProxy: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>
         * @param param2: U32
	 */
        removeProxy: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxy', false, param0, param1, param2);
        },

        /**
	 */
        removeProxies: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeProxies', false);
        },

        /**
         * @param param0: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>
         * @param param1: U32
         * @param param2: U16
	 */
        createPure: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'createPure', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>
         * @param param2: U16
         * @param param3: Compact<U32>
         * @param param4: Compact<U32>
	 */
        killPure: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'killPure', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 32]
	 */
        announce: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'announce', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 32]
	 */
        removeAnnouncement: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 32]
	 */
        rejectAnnouncement: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 20]
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
	 */
        proxyAnnounced: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, param0, param1, param2, param3);
        },


    }
}

import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getProxy = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
	 */
        proxy: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>
         * @param param2: U32
	 */
        addProxy: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>
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
         * @param param0: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>
         * @param param1: U32
         * @param param2: U16
	 */
        anonymous: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'anonymous', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>
         * @param param2: U16
         * @param param3: Compact<U32>
         * @param param4: Compact<U32>
	 */
        killAnonymous: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'killAnonymous', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: [U8; 32]
	 */
        announce: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'announce', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: [U8; 32]
	 */
        removeAnnouncement: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: [U8; 32]
	 */
        rejectAnnouncement: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', false, param0, param1);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: [U8; 32]
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
	 */
        proxyAnnounced: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, param0, param1, param2, param3);
        },


    }
}

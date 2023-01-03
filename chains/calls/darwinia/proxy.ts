import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getProxy = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
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
         * @param param3: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
	 */
        proxyAnnounced: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, param0, param1, param2, param3);
        },


    }
}

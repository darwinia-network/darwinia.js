import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getProxy = (dispatch: Dispatch) => {
    return {
        /**
         * @param _real: [U8; 32]
         * @param _force_proxy_type: Enum<{"0/None", "1/Some"}>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
	 */
        proxy: async (signer: ethers.Signer, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, _real, _force_proxy_type, _call);
        },

        /**
         * @param _delegate: [U8; 32]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>
         * @param _delay: U32
	 */
        addProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, _delegate, _proxy_type, _delay);
        },

        /**
         * @param _delegate: [U8; 32]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>
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
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>
         * @param _delay: U32
         * @param _index: U16
	 */
        anonymous: async (signer: ethers.Signer, _proxy_type: unknown, _delay: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'anonymous', false, _proxy_type, _delay, _index);
        },

        /**
         * @param _spawner: [U8; 32]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/IdentityJudgement", "5/EthereumBridge"}>
         * @param _index: U16
         * @param _height: Compact<U32>
         * @param _ext_index: Compact<U32>
	 */
        killAnonymous: async (signer: ethers.Signer, _spawner: unknown, _proxy_type: unknown, _index: unknown, _height: unknown, _ext_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'killAnonymous', false, _spawner, _proxy_type, _index, _height, _ext_index);
        },

        /**
         * @param _real: [U8; 32]
         * @param _call_hash: [U8; 32]
	 */
        announce: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'announce', false, _real, _call_hash);
        },

        /**
         * @param _real: [U8; 32]
         * @param _call_hash: [U8; 32]
	 */
        removeAnnouncement: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', false, _real, _call_hash);
        },

        /**
         * @param _delegate: [U8; 32]
         * @param _call_hash: [U8; 32]
	 */
        rejectAnnouncement: async (signer: ethers.Signer, _delegate: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', false, _delegate, _call_hash);
        },

        /**
         * @param _delegate: [U8; 32]
         * @param _real: [U8; 32]
         * @param _force_proxy_type: Enum<{"0/None", "1/Some"}>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
	 */
        proxyAnnounced: async (signer: ethers.Signer, _delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, _delegate, _real, _force_proxy_type, _call);
        },


    }
}

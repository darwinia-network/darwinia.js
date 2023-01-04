import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getProxy = (dispatch: Dispatch) => {
    return {
        /**
         * @param _real: [U8; 32]
         * @param _force_proxy_type: Enum<{"0/None", "1/Some"}>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
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
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
	 */
        proxyAnnounced: async (signer: ethers.Signer, _delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, _delegate, _real, _force_proxy_type, _call);
        },


    }
}

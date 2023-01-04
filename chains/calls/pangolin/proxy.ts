import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getProxy = (dispatch: Dispatch) => {
    return {
        /**
         * @param _real: [U8; 32]
         * @param _force_proxy_type: Enum<{"0/None", "1/Some"}>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
	 */
        proxy: async (signer: ethers.Signer, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, _real, _force_proxy_type, _call);
        },

        /**
         * @param _delegate: [U8; 32]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>
         * @param _delay: U32
	 */
        addProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, _delegate, _proxy_type, _delay);
        },

        /**
         * @param _delegate: [U8; 32]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>
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
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>
         * @param _delay: U32
         * @param _index: U16
	 */
        anonymous: async (signer: ethers.Signer, _proxy_type: unknown, _delay: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'anonymous', false, _proxy_type, _delay, _index);
        },

        /**
         * @param _spawner: [U8; 32]
         * @param _proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>
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
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
	 */
        proxyAnnounced: async (signer: ethers.Signer, _delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, _delegate, _real, _force_proxy_type, _call);
        },


    }
}

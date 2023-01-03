import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getProxy = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
	 */
        proxy: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>
         * @param param2: U32
	 */
        addProxy: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>
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
         * @param param0: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>
         * @param param1: U32
         * @param param2: U16
	 */
        anonymous: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'anonymous', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/Staking", "4/EthereumBridge"}>
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
         * @param param3: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
	 */
        proxyAnnounced: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, param0, param1, param2, param3);
        },


    }
}

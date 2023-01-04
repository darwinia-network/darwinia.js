import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getRecovery = (dispatch: Dispatch) => {
    return {
        /**
         * @param _account: [U8; 32]
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
	 */
        asRecovered: async (signer: ethers.Signer, _account: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'asRecovered', false, _account, _call);
        },

        /**
         * @param _lost: [U8; 32]
         * @param _rescuer: [U8; 32]
	 */
        setRecovered: async (signer: ethers.Signer, _lost: unknown, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'setRecovered', false, _lost, _rescuer);
        },

        /**
         * @param _friends: Vec<[U8; 32]>
         * @param _threshold: U16
         * @param _delay_period: U32
	 */
        createRecovery: async (signer: ethers.Signer, _friends: unknown, _threshold: unknown, _delay_period: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'createRecovery', false, _friends, _threshold, _delay_period);
        },

        /**
         * @param _account: [U8; 32]
	 */
        initiateRecovery: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'initiateRecovery', false, _account);
        },

        /**
         * @param _lost: [U8; 32]
         * @param _rescuer: [U8; 32]
	 */
        vouchRecovery: async (signer: ethers.Signer, _lost: unknown, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'vouchRecovery', false, _lost, _rescuer);
        },

        /**
         * @param _account: [U8; 32]
	 */
        claimRecovery: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'claimRecovery', false, _account);
        },

        /**
         * @param _rescuer: [U8; 32]
	 */
        closeRecovery: async (signer: ethers.Signer, _rescuer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'closeRecovery', false, _rescuer);
        },

        /**
	 */
        removeRecovery: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'removeRecovery', false);
        },

        /**
         * @param _account: [U8; 32]
	 */
        cancelRecovered: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Recovery', 'cancelRecovered', false, _account);
        },


    }
}

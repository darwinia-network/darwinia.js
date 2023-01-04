import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getRecovery = (dispatch: Dispatch) => {
    return {
        /**
         * @param _account: [U8; 32]
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
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

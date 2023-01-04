import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getRecovery = (dispatch: Dispatch) => {
    return {
        /**
         * @param _account: [U8; 32]
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
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

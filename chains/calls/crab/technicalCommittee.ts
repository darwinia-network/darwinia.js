import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTechnicalCommittee = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<[U8; 32]>
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: U32
	 */
        setMembers: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'setMembers', false, param0, param1, param2);
        },

        /**
         * @param param0: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
         * @param param1: Compact<U32>
	 */
        execute: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'execute', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
         * @param param2: Compact<U32>
	 */
        propose: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'propose', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Compact<U32>
         * @param param2: Bool
	 */
        vote: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'vote', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Compact<U32>
         * @param param2: Compact<U64>
         * @param param3: Compact<U32>
	 */
        close: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'close', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: [U8; 32]
	 */
        disapproveProposal: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'disapproveProposal', false, param0);
        },


    }
}

import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getCouncil = (dispatch: Dispatch) => {
    return {
        /**
         * @param _new_members: Vec<[U8; 32]>
         * @param _prime: Enum<{"0/None", "1/Some"}>
         * @param _old_count: U32
	 */
        setMembers: async (signer: ethers.Signer, _new_members: unknown, _prime: unknown, _old_count: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'setMembers', false, _new_members, _prime, _old_count);
        },

        /**
         * @param _proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
         * @param _length_bound: Compact<U32>
	 */
        execute: async (signer: ethers.Signer, _proposal: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'execute', false, _proposal, _length_bound);
        },

        /**
         * @param _threshold: Compact<U32>
         * @param _proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
         * @param _length_bound: Compact<U32>
	 */
        propose: async (signer: ethers.Signer, _threshold: unknown, _proposal: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'propose', false, _threshold, _proposal, _length_bound);
        },

        /**
         * @param _proposal: [U8; 32]
         * @param _index: Compact<U32>
         * @param _approve: Bool
	 */
        vote: async (signer: ethers.Signer, _proposal: unknown, _index: unknown, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'vote', false, _proposal, _index, _approve);
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _index: Compact<U32>
         * @param _proposal_weight_bound: Compact<U64>
         * @param _length_bound: Compact<U32>
	 */
        close: async (signer: ethers.Signer, _proposal_hash: unknown, _index: unknown, _proposal_weight_bound: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'close', false, _proposal_hash, _index, _proposal_weight_bound, _length_bound);
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        disapproveProposal: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'disapproveProposal', false, _proposal_hash);
        },


    }
}

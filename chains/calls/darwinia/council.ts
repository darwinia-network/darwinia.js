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
         * @param _proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
         * @param _length_bound: Compact<U32>
	 */
        execute: async (signer: ethers.Signer, _proposal: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'execute', false, _proposal, _length_bound);
        },

        /**
         * @param _threshold: Compact<U32>
         * @param _proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
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

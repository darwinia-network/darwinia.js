import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTechnicalCommittee = (dispatch: Dispatch) => {
    return {
        /**
         * @param _new_members: Vec<[U8; 20]>
         * @param _prime: Enum<{"0/None", "1/Some"}>
         * @param _old_count: U32
	 */
        setMembers: async (signer: ethers.Signer, _new_members: unknown, _prime: unknown, _old_count: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'setMembers', false, _new_members, _prime, _old_count);
        },

        /**
         * @param _proposal: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
         * @param _length_bound: Compact<U32>
	 */
        execute: async (signer: ethers.Signer, _proposal: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'execute', false, _proposal, _length_bound);
        },

        /**
         * @param _threshold: Compact<U32>
         * @param _proposal: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
         * @param _length_bound: Compact<U32>
	 */
        propose: async (signer: ethers.Signer, _threshold: unknown, _proposal: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'propose', false, _threshold, _proposal, _length_bound);
        },

        /**
         * @param _proposal: [U8; 32]
         * @param _index: Compact<U32>
         * @param _approve: Bool
	 */
        vote: async (signer: ethers.Signer, _proposal: unknown, _index: unknown, _approve: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'vote', false, _proposal, _index, _approve);
        },

        /**
         * @param _proposal_hash: [U8; 32]
         * @param _index: Compact<U32>
         * @param _proposal_weight_bound: Compact<{ref_time: U64}>
         * @param _length_bound: Compact<U32>
	 */
        close: async (signer: ethers.Signer, _proposal_hash: unknown, _index: unknown, _proposal_weight_bound: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'close', false, _proposal_hash, _index, _proposal_weight_bound, _length_bound);
        },

        /**
         * @param _proposal_hash: [U8; 32]
	 */
        disapproveProposal: async (signer: ethers.Signer, _proposal_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'disapproveProposal', false, _proposal_hash);
        },


    }
}

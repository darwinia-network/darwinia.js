import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getTechnicalCommittee = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<[U8; 20]>
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: U32
	 */
        setMembers: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'setMembers', false, param0, param1, param2);
        },

        /**
         * @param param0: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
         * @param param1: Compact<U32>
	 */
        execute: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalCommittee', 'execute', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
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
         * @param param2: Compact<{ref_time: U64}>
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

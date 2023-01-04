import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMultisig = (dispatch: Dispatch) => {
    return {
        /**
         * @param _other_signatories: Vec<[U8; 20]>
         * @param _call: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
	 */
        asMultiThreshold_1: async (signer: ethers.Signer, _other_signatories: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMultiThreshold_1', false, _other_signatories, _call);
        },

        /**
         * @param _threshold: U16
         * @param _other_signatories: Vec<[U8; 20]>
         * @param _maybe_timepoint: Enum<{"0/None", "1/Some"}>
         * @param _call: (Compact<U32>, Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>)
         * @param _store_call: Bool
         * @param _max_weight: {ref_time: U64}
	 */
        asMulti: async (signer: ethers.Signer, _threshold: unknown, _other_signatories: unknown, _maybe_timepoint: unknown, _call: unknown, _store_call: unknown, _max_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMulti', false, _threshold, _other_signatories, _maybe_timepoint, _call, _store_call, _max_weight);
        },

        /**
         * @param _threshold: U16
         * @param _other_signatories: Vec<[U8; 20]>
         * @param _maybe_timepoint: Enum<{"0/None", "1/Some"}>
         * @param _call_hash: [U8; 32]
         * @param _max_weight: {ref_time: U64}
	 */
        approveAsMulti: async (signer: ethers.Signer, _threshold: unknown, _other_signatories: unknown, _maybe_timepoint: unknown, _call_hash: unknown, _max_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'approveAsMulti', false, _threshold, _other_signatories, _maybe_timepoint, _call_hash, _max_weight);
        },

        /**
         * @param _threshold: U16
         * @param _other_signatories: Vec<[U8; 20]>
         * @param _timepoint: {height: U32, index: U32}
         * @param _call_hash: [U8; 32]
	 */
        cancelAsMulti: async (signer: ethers.Signer, _threshold: unknown, _other_signatories: unknown, _timepoint: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'cancelAsMulti', false, _threshold, _other_signatories, _timepoint, _call_hash);
        },


    }
}

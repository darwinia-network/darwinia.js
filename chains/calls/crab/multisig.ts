import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMultisig = (dispatch: Dispatch) => {
    return {
        /**
         * @param _other_signatories: Vec<[U8; 32]>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
	 */
        asMultiThreshold_1: async (signer: ethers.Signer, _other_signatories: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMultiThreshold_1', false, _other_signatories, _call);
        },

        /**
         * @param _threshold: U16
         * @param _other_signatories: Vec<[U8; 32]>
         * @param _maybe_timepoint: Enum<{"0/None", "1/Some"}>
         * @param _call: (Compact<U32>, Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>)
         * @param _store_call: Bool
         * @param _max_weight: U64
	 */
        asMulti: async (signer: ethers.Signer, _threshold: unknown, _other_signatories: unknown, _maybe_timepoint: unknown, _call: unknown, _store_call: unknown, _max_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMulti', false, _threshold, _other_signatories, _maybe_timepoint, _call, _store_call, _max_weight);
        },

        /**
         * @param _threshold: U16
         * @param _other_signatories: Vec<[U8; 32]>
         * @param _maybe_timepoint: Enum<{"0/None", "1/Some"}>
         * @param _call_hash: [U8; 32]
         * @param _max_weight: U64
	 */
        approveAsMulti: async (signer: ethers.Signer, _threshold: unknown, _other_signatories: unknown, _maybe_timepoint: unknown, _call_hash: unknown, _max_weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'approveAsMulti', false, _threshold, _other_signatories, _maybe_timepoint, _call_hash, _max_weight);
        },

        /**
         * @param _threshold: U16
         * @param _other_signatories: Vec<[U8; 32]>
         * @param _timepoint: {height: U32, index: U32}
         * @param _call_hash: [U8; 32]
	 */
        cancelAsMulti: async (signer: ethers.Signer, _threshold: unknown, _other_signatories: unknown, _timepoint: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'cancelAsMulti', false, _threshold, _other_signatories, _timepoint, _call_hash);
        },


    }
}

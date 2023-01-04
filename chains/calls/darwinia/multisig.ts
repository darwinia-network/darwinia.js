import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMultisig = (dispatch: Dispatch) => {
    return {
        /**
         * @param _other_signatories: Vec<[U8; 32]>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
	 */
        asMultiThreshold_1: async (signer: ethers.Signer, _other_signatories: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMultiThreshold_1', false, _other_signatories, _call);
        },

        /**
         * @param _threshold: U16
         * @param _other_signatories: Vec<[U8; 32]>
         * @param _maybe_timepoint: Enum<{"0/None", "1/Some"}>
         * @param _call: (Compact<U32>, Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>)
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

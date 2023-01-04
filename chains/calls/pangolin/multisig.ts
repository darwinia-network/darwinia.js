import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMultisig = (dispatch: Dispatch) => {
    return {
        /**
         * @param _other_signatories: Vec<[U8; 32]>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
	 */
        asMultiThreshold_1: async (signer: ethers.Signer, _other_signatories: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMultiThreshold_1', false, _other_signatories, _call);
        },

        /**
         * @param _threshold: U16
         * @param _other_signatories: Vec<[U8; 32]>
         * @param _maybe_timepoint: Enum<{"0/None", "1/Some"}>
         * @param _call: (Compact<U32>, Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>)
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

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
         * @param _proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
         * @param _length_bound: Compact<U32>
	 */
        execute: async (signer: ethers.Signer, _proposal: unknown, _length_bound: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'execute', false, _proposal, _length_bound);
        },

        /**
         * @param _threshold: Compact<U32>
         * @param _proposal: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
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

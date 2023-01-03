import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getCouncil = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<[U8; 32]>
         * @param param1: Enum<{"0/None", "1/Some"}>
         * @param param2: U32
	 */
        setMembers: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'setMembers', false, param0, param1, param2);
        },

        /**
         * @param param0: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
         * @param param1: Compact<U32>
	 */
        execute: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'execute', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
         * @param param2: Compact<U32>
	 */
        propose: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'propose', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Compact<U32>
         * @param param2: Bool
	 */
        vote: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'vote', false, param0, param1, param2);
        },

        /**
         * @param param0: [U8; 32]
         * @param param1: Compact<U32>
         * @param param2: Compact<U64>
         * @param param3: Compact<U32>
	 */
        close: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'close', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: [U8; 32]
	 */
        disapproveProposal: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Council', 'disapproveProposal', false, param0);
        },


    }
}

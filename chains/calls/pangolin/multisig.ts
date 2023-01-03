import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMultisig = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<[U8; 32]>
         * @param param1: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>
	 */
        asMultiThreshold_1: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMultiThreshold_1', false, param0, param1);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 32]>
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: (Compact<U32>, Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "58/MessageGadget", "66/EcdsaAuthority", "14/ImOnline", "17/Democracy", "18/Council", "19/TechnicalCommittee", "20/PhragmenElection", "21/TechnicalMembership", "22/Treasury", "50/KtonTreasury", "51/Tips", "52/Bounties", "23/Sudo", "25/Vesting", "26/Utility", "27/Identity", "28/Society", "29/Recovery", "30/Scheduler", "67/Preimage", "31/Proxy", "32/Multisig", "40/EVM", "41/Ethereum", "59/BaseFee", "45/BridgePangoroGrandpa", "43/BridgePangoroMessages", "60/BridgeRococoGrandpa", "61/BridgeRococoParachains", "63/BridgePangolinParachainMessages", "53/PangoroFeeMarket", "64/PangolinParachainFeeMarket", "54/TransactionPause", "68/BridgeMoonbaseRelayGrandpa", "69/BridgeMoonbaseRelayParachains", "71/BridgePangolinParachainAlphaMessages", "72/PangolinParachainAlphaFeeMarket", "65/ToPangolinParachainBacking"}>)
         * @param param4: Bool
         * @param param5: U64
	 */
        asMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMulti', false, param0, param1, param2, param3, param4, param5);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 32]>
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: [U8; 32]
         * @param param4: U64
	 */
        approveAsMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'approveAsMulti', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 32]>
         * @param param2: {height: U32, index: U32}
         * @param param3: [U8; 32]
	 */
        cancelAsMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'cancelAsMulti', false, param0, param1, param2, param3);
        },


    }
}

import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getSudo = (dispatch: Dispatch) => {
    return {
        /**
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "30/MessageGadget", "32/EcdsaAuthority", "14/ImOnline", "24/Treasury", "16/Sudo", "21/Scheduler", "33/Preimage", "19/BridgePangolinGrandpa", "17/BridgePangolinMessages", "22/PangolinFeeMarket", "23/TransactionPause", "25/EVM", "26/Ethereum", "31/BaseFee"}>
	 */
        sudo: async (signer: ethers.Signer, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Sudo', 'sudo', false, _call);
        },

        /**
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "30/MessageGadget", "32/EcdsaAuthority", "14/ImOnline", "24/Treasury", "16/Sudo", "21/Scheduler", "33/Preimage", "19/BridgePangolinGrandpa", "17/BridgePangolinMessages", "22/PangolinFeeMarket", "23/TransactionPause", "25/EVM", "26/Ethereum", "31/BaseFee"}>
         * @param _weight: U64
	 */
        sudoUncheckedWeight: async (signer: ethers.Signer, _call: unknown, _weight: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Sudo', 'sudoUncheckedWeight', false, _call, _weight);
        },

        /**
         * @param _new: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        setKey: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Sudo', 'setKey', false, _new);
        },

        /**
         * @param _who: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "8/ElectionProviderMultiPhase", "9/Staking", "12/Session", "13/Grandpa", "30/MessageGadget", "32/EcdsaAuthority", "14/ImOnline", "24/Treasury", "16/Sudo", "21/Scheduler", "33/Preimage", "19/BridgePangolinGrandpa", "17/BridgePangolinMessages", "22/PangolinFeeMarket", "23/TransactionPause", "25/EVM", "26/Ethereum", "31/BaseFee"}>
	 */
        sudoAs: async (signer: ethers.Signer, _who: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Sudo', 'sudoAs', false, _who, _call);
        },


    }
}

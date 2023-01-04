import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getUtility = (dispatch: Dispatch) => {
    return {
        /**
         * @param _calls: Vec<Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>>
	 */
        batch: async (signer: ethers.Signer, _calls: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'batch', false, _calls);
        },

        /**
         * @param _index: U16
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
	 */
        asDerivative: async (signer: ethers.Signer, _index: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'asDerivative', false, _index, _call);
        },

        /**
         * @param _calls: Vec<Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>>
	 */
        batchAll: async (signer: ethers.Signer, _calls: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'batchAll', false, _calls);
        },

        /**
         * @param _as_origin: Enum<{"0/system", "16/Council", "17/TechnicalCommittee", "48/Ethereum", "4/Void"}>
         * @param _call: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Balances", "5/Kton", "7/Authorship", "38/ElectionProviderMultiPhase", "8/Staking", "11/Session", "13/Grandpa", "14/ImOnline", "50/MessageGadget", "51/EcdsaAuthority", "37/Democracy", "16/Council", "17/TechnicalCommittee", "18/PhragmenElection", "19/TechnicalMembership", "20/Treasury", "40/Tips", "41/Bounties", "27/Sudo", "21/Vesting", "22/Utility", "23/Identity", "24/Society", "25/Recovery", "26/Scheduler", "52/Preimage", "28/Proxy", "29/Multisig", "47/EVM", "48/Ethereum", "49/BaseFee", "43/BridgeCrabGrandpa", "44/BridgeCrabMessages", "53/BridgePolkadotGrandpa", "54/BridgePolkadotParachain", "56/BridgeDarwiniaParachainMessages", "45/FeeMarket", "57/DarwiniaParachainFeeMarket"}>
	 */
        dispatchAs: async (signer: ethers.Signer, _as_origin: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'dispatchAs', false, _as_origin, _call);
        },


    }
}

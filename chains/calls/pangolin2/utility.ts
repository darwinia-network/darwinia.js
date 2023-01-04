import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getUtility = (dispatch: Dispatch) => {
    return {
        /**
         * @param _calls: Vec<Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>>
	 */
        batch: async (signer: ethers.Signer, _calls: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'batch', false, _calls);
        },

        /**
         * @param _index: U16
         * @param _call: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
	 */
        asDerivative: async (signer: ethers.Signer, _index: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'asDerivative', false, _index, _call);
        },

        /**
         * @param _calls: Vec<Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>>
	 */
        batchAll: async (signer: ethers.Signer, _calls: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'batchAll', false, _calls);
        },

        /**
         * @param _as_origin: Enum<{"0/system", "13/Council", "14/TechnicalCommittee", "28/PolkadotXcm", "29/CumulusXcm", "31/Ethereum", "39/MessageTransact", "7/Void"}>
         * @param _call: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
	 */
        dispatchAs: async (signer: ethers.Signer, _as_origin: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'dispatchAs', false, _as_origin, _call);
        },

        /**
         * @param _calls: Vec<Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>>
	 */
        forceBatch: async (signer: ethers.Signer, _calls: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Utility', 'forceBatch', false, _calls);
        },


    }
}

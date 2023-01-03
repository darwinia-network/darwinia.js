import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMultisig = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<[U8; 20]>
         * @param param1: Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>
	 */
        asMultiThreshold_1: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMultiThreshold_1', false, param0, param1);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 20]>
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: (Compact<U32>, Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>)
         * @param param4: Bool
         * @param param5: {ref_time: U64}
	 */
        asMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMulti', false, param0, param1, param2, param3, param4, param5);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 20]>
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: [U8; 32]
         * @param param4: {ref_time: U64}
	 */
        approveAsMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'approveAsMulti', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 20]>
         * @param param2: {height: U32, index: U32}
         * @param param3: [U8; 32]
	 */
        cancelAsMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'cancelAsMulti', false, param0, param1, param2, param3);
        },


    }
}

import {GetStorage} from "../../../storage";

export const getMultisig = (getStorage: GetStorage) => {
    return {

        /**
        * The set of open multisig operations.
        *
        * @param param0: AccountId20: [U8; 20]
        * @param param1: [U8; 32]
        * @return Multisig: {when: {height: U32, index: U32}, deposit: U128, depositor: [U8; 20], approvals: Vec<[U8; 20]>}
        */
        multisigs: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Multisigs', param0, param1);
        },

        /**
        *
        * @param param0: [U8; 32]
        * @return ((Compact<U32>, Enum<{"0/System", "1/ParachainSystem", "2/Timestamp", "3/ParachainInfo", "5/Balances", "34/Assets", "40/Deposit", "41/AccountMigration", "7/Authorship", "8/Staking", "9/Session", "12/Democracy", "13/Council", "14/TechnicalCommittee", "15/PhragmenElection", "16/TechnicalMembership", "17/Treasury", "18/Tips", "19/Sudo", "20/Vesting", "21/Utility", "22/Identity", "23/Scheduler", "24/Preimage", "25/Proxy", "26/Multisig", "27/XcmpQueue", "28/PolkadotXcm", "29/CumulusXcm", "30/DmpQueue", "31/Ethereum", "32/Evm", "33/BaseFee", "39/MessageTransact"}>), [U8; 20], U128)
        */
        calls: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Calls', param0);
        },
    };
};

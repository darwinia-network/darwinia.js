import {GetStorage} from "../../../storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         *
         * @param param0: U32
         * @return Vec<Enum<{0/None: , 1/Some: {maybe_id: Enum<{0/None: , 1/Some: Vec<U8>}>, priority: U8, call: Enum<{0/Value: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 34/Assets, 20/Vesting, 40/Deposit, 41/AccountMigration, 7/Authorship, 8/Staking, 9/Session, 42/MessageGadget, 43/EcdsaAuthority, 12/Democracy, 13/Council, 14/TechnicalCommittee, 15/PhragmenElection, 16/TechnicalMembership, 17/Treasury, 18/Tips, 19/Sudo, 21/Utility, 22/Identity, 23/Scheduler, 24/Preimage, 25/Proxy, 26/Multisig, 27/XcmpQueue, 28/PolkadotXcm, 29/CumulusXcm, 30/DmpQueue, 31/Ethereum, 32/Evm, 33/BaseFee, 39/MessageTransact}>, 1/Hash: [U8; 32]}>, maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>, origin: Enum<{0/system: Enum<{0/Root, 1/Signed, 2/None}>, 13/Council: Enum<{0/Members, 1/Member, 2/_Phantom}>, 14/TechnicalCommittee: Enum<{0/Members, 1/Member, 2/_Phantom}>, 28/PolkadotXcm: Enum<{0/Xcm, 1/Response}>, 29/CumulusXcm: Enum<{0/Relay, 1/SiblingParachain}>, 31/Ethereum: Enum<{0/EthereumTransaction}>, 39/MessageTransact: Enum<{0/MessageTransact}>, 7/Void: Enum<{}>}>}}>>
         */
        agenda: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Scheduler', 'Agenda', param0);
        },

        /**
         * Lookup from identity to the block number and index of the task.
         *
         * @param param0: Vec<U8>
         * @return (U32, U32)
         */
        lookup: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Scheduler', 'Lookup', param0);
        },
    };
};

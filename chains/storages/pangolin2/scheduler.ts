import {GetStorage} from "../../../storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
        * Items to be executed, indexed by the block number that they should be executed on.
        *
        * @param param0: U32
        * @return Vec<Enum<{None: , Some: {maybe_id: Enum<{None: , Some: Vec<U8>}>, priority: U8, call: Enum<{Value: Enum<{System, ParachainSystem, Timestamp, ParachainInfo, Balances, Assets, Deposit, AccountMigration, Authorship, Staking, Session, Democracy, Council, TechnicalCommittee, PhragmenElection, TechnicalMembership, Treasury, Tips, Sudo, Vesting, Utility, Identity, Scheduler, Preimage, Proxy, Multisig, XcmpQueue, PolkadotXcm, CumulusXcm, DmpQueue, Ethereum, Evm, BaseFee, MessageTransact}>, Hash: [U8; 32]}>, maybe_periodic: Enum<{None: , Some: (U32, U32)}>, origin: Enum<{system: Enum<{Root, Signed, None}>, Council: Enum<{Members, Member, _Phantom}>, TechnicalCommittee: Enum<{Members, Member, _Phantom}>, PolkadotXcm: Enum<{Xcm, Response}>, CumulusXcm: Enum<{Relay, SiblingParachain}>, Ethereum: Enum<{EthereumTransaction}>, MessageTransact: Enum<{MessageTransact}>, Void: Enum<{}>}>}}>>
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

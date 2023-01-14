import {GetStorage} from "../../../storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         *
         * @param param0: U32
         * @return Vec<Enum<{0/None: , 1/Some: {maybe_id: Enum<{0/None: , 1/Some: Vec<U8>}>, priority: U8, call: Enum<{0/Value: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Indices, 23/Balances, 24/Kton, 6/Authorship, 38/ElectionProviderMultiPhase, 25/Staking, 9/Session, 11/Grandpa, 12/ImOnline, 36/Democracy, 14/Council, 15/TechnicalCommittee, 26/PhragmenElection, 16/TechnicalMembership, 32/Treasury, 44/Tips, 45/Bounties, 17/Utility, 18/Identity, 19/Society, 20/Recovery, 21/Scheduler, 58/Preimage, 41/Vesting, 33/Proxy, 34/Multisig, 39/EVM, 40/Ethereum, 51/BaseFee, 48/BridgeDarwiniaMessages, 47/BridgeDarwiniaGrandpa, 52/BridgeKusamaGrandpa, 53/BridgeKusamaParachain, 56/BridgeCrabParachainMessages, 49/DarwiniaFeeMarket, 55/CrabParachainFeeMarket}>, 1/Hash: [U8; 32]}>, maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>, origin: Enum<{0/system: Enum<{0/Root, 1/Signed, 2/None}>, 14/Council: Enum<{0/Members, 1/Member, 2/_Phantom}>, 15/TechnicalCommittee: Enum<{0/Members, 1/Member, 2/_Phantom}>, 40/Ethereum: Enum<{0/EthereumTransaction}>, 4/Void: Enum<{}>}>}}>>
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

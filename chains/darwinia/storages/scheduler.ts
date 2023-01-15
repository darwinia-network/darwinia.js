import {GetStorage} from "../../../src/storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         *
         * @param param0: U32
         * @return Vec<Enum<{0/None: , 1/Some: {maybe_id: Enum<{0/None: , 1/Some: Vec<U8>}>, priority: U8, call: Enum<{0/Value: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 38/ElectionProviderMultiPhase, 8/Staking, 11/Session, 13/Grandpa, 14/ImOnline, 50/MessageGadget, 51/EcdsaAuthority, 37/Democracy, 16/Council, 17/TechnicalCommittee, 18/PhragmenElection, 19/TechnicalMembership, 20/Treasury, 40/Tips, 41/Bounties, 27/Sudo, 21/Vesting, 22/Utility, 23/Identity, 24/Society, 25/Recovery, 26/Scheduler, 52/Preimage, 28/Proxy, 29/Multisig, 47/EVM, 48/Ethereum, 49/BaseFee, 43/BridgeCrabGrandpa, 44/BridgeCrabMessages, 53/BridgePolkadotGrandpa, 54/BridgePolkadotParachain, 56/BridgeDarwiniaParachainMessages, 45/FeeMarket, 57/DarwiniaParachainFeeMarket}>, 1/Hash: [U8; 32]}>, maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>, origin: Enum<{0/system: Enum<{0/Root, 1/Signed, 2/None}>, 16/Council: Enum<{0/Members, 1/Member, 2/_Phantom}>, 17/TechnicalCommittee: Enum<{0/Members, 1/Member, 2/_Phantom}>, 48/Ethereum: Enum<{0/EthereumTransaction}>, 4/Void: Enum<{}>}>}}>>
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

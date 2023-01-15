import {GetStorage} from "../../../src/storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         *
         * @param param0: U32
         * @return Vec<Enum<{0/None: , 1/Some: {maybe_id: Enum<{0/None: , 1/Some: Vec<U8>}>, priority: U8, call: Enum<{0/Value: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 8/ElectionProviderMultiPhase, 9/Staking, 12/Session, 13/Grandpa, 58/MessageGadget, 66/EcdsaAuthority, 14/ImOnline, 17/Democracy, 18/Council, 19/TechnicalCommittee, 20/PhragmenElection, 21/TechnicalMembership, 22/Treasury, 50/KtonTreasury, 51/Tips, 52/Bounties, 23/Sudo, 25/Vesting, 26/Utility, 27/Identity, 28/Society, 29/Recovery, 30/Scheduler, 67/Preimage, 31/Proxy, 32/Multisig, 40/EVM, 41/Ethereum, 59/BaseFee, 45/BridgePangoroGrandpa, 43/BridgePangoroMessages, 60/BridgeRococoGrandpa, 61/BridgeRococoParachains, 63/BridgePangolinParachainMessages, 53/PangoroFeeMarket, 64/PangolinParachainFeeMarket, 54/TransactionPause, 68/BridgeMoonbaseRelayGrandpa, 69/BridgeMoonbaseRelayParachains, 71/BridgePangolinParachainAlphaMessages, 72/PangolinParachainAlphaFeeMarket, 65/ToPangolinParachainBacking}>, 1/Hash: [U8; 32]}>, maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>, origin: Enum<{0/system: Enum<{0/Root, 1/Signed, 2/None}>, 18/Council: Enum<{0/Members, 1/Member, 2/_Phantom}>, 19/TechnicalCommittee: Enum<{0/Members, 1/Member, 2/_Phantom}>, 41/Ethereum: Enum<{0/EthereumTransaction}>, 4/Void: Enum<{}>}>}}>>
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

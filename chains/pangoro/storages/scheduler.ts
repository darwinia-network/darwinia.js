import {GetStorage} from "../../../src/storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         *
         * @param param0: U32
         * @return Vec<Enum<{0/None: , 1/Some: {maybe_id: Enum<{0/None: , 1/Some: Vec<U8>}>, priority: U8, call: Enum<{0/Value: Enum<{0/System, 2/Babe, 3/Timestamp, 4/Balances, 5/Kton, 7/Authorship, 8/ElectionProviderMultiPhase, 9/Staking, 12/Session, 13/Grandpa, 30/MessageGadget, 32/EcdsaAuthority, 14/ImOnline, 24/Treasury, 16/Sudo, 21/Scheduler, 33/Preimage, 19/BridgePangolinGrandpa, 17/BridgePangolinMessages, 22/PangolinFeeMarket, 23/TransactionPause, 25/EVM, 26/Ethereum, 31/BaseFee}>, 1/Hash: [U8; 32]}>, maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>, origin: Enum<{0/system: Enum<{0/Root, 1/Signed, 2/None}>, 26/Ethereum: Enum<{0/EthereumTransaction}>, 2/Void: Enum<{}>}>}}>>
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

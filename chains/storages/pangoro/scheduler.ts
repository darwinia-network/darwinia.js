import {GetStorage} from "../../../storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
        * Items to be executed, indexed by the block number that they should be executed on.
        *
        * @param param0: U32
        * @return Vec<Enum<{None: , Some: {maybe_id: Enum<{None: , Some: Vec<U8>}>, priority: U8, call: Enum<{Value: Enum<{System, Babe, Timestamp, Balances, Kton, Authorship, ElectionProviderMultiPhase, Staking, Session, Grandpa, MessageGadget, EcdsaAuthority, ImOnline, Treasury, Sudo, Scheduler, Preimage, BridgePangolinGrandpa, BridgePangolinMessages, PangolinFeeMarket, TransactionPause, EVM, Ethereum, BaseFee}>, Hash: [U8; 32]}>, maybe_periodic: Enum<{None: , Some: (U32, U32)}>, origin: Enum<{system: Enum<{Root, Signed, None}>, Ethereum: Enum<{EthereumTransaction}>, Void: Enum<{}>}>}}>>
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

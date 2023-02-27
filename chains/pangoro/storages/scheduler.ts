import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Scheduler`'s storages.
 * 
 * `Scheduler`'s calls: {@link: module:pangoro/scheduler/calls}
 *
 * @module pangoro/scheduler/storages
 */
export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @returns {Promise<string | null>} U32
         */
        incompleteSince: async (): Promise<string | null> => {
            return await getStorage('Scheduler', 'IncompleteSince');
        },

        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         *
         * @param {unknown} param0 U32
         * @returns {Promise<string | null>} BoundedVec: Vec<Enum<{0/None: , 1/Some: {maybe_id: Enum<{0/None: , 1/Some: [U8; 32]}>, priority: U8, call: Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>, maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>, origin: Enum<{0/system: Enum<{0/Root, 1/Signed, 2/None}>, 19/Council: Enum<{0/Members, 1/Member, 2/_Phantom}>, 20/TechnicalCommittee: Enum<{0/Members, 1/Member, 2/_Phantom}>, 33/PolkadotXcm: Enum<{0/Xcm, 1/Response}>, 34/CumulusXcm: Enum<{0/Relay, 1/SiblingParachain}>, 36/Ethereum: Enum<{0/EthereumTransaction}>, 38/MessageTransact: Enum<{0/MessageTransact}>, 7/Void: Enum<{}>}>}}>>
         */
        agenda: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Scheduler', 'Agenda', param0);
        },

        /**
         * Lookup from a name to the block number and index of the task.
         *
         * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
         * identities.
         *
         * @param {unknown} param0 [U8; 32]
         * @returns {Promise<string | null>} (U32, U32)
         */
        lookup: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Scheduler', 'Lookup', param0);
        },
    };
};

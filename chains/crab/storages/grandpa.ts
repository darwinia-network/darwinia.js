import {GetStorage} from "../../../src/storage";

export const getGrandpa = (getStorage: GetStorage) => {
    return {

        /**
         * State of the current authority set.
         *
         * @return StoredState: Enum<{0/Live: , 1/PendingPause: {scheduled_at: U32, delay: U32}, 2/Paused: , 3/PendingResume: {scheduled_at: U32, delay: U32}}>
         */
        state: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'State');
        },

        /**
         * Pending change: (signaled at, scheduled change).
         *
         * @return StoredPendingChange: {scheduled_at: U32, delay: U32, next_authorities: Vec<([U8; 32], U64)>, forced: Enum<{0/None: , 1/Some: U32}>}
         */
        pendingChange: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'PendingChange');
        },

        /**
         * next block number where we can force a change.
         *
         * @return U32
         */
        nextForced: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'NextForced');
        },

        /**
         * `true` if we are currently stalled.
         *
         * @return (U32, U32)
         */
        stalled: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'Stalled');
        },

        /**
         * The number of changes (both in terms of keys and underlying economic responsibilities)
         * in the "set" of Grandpa validators from genesis.
         *
         * @return U64
         */
        currentSetId: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'CurrentSetId');
        },

        /**
         * A mapping from grandpa set ID to the index of the *most recent* session for which its
         * members were responsible.
         *
         * TWOX-NOTE: `SetId` is not under user control.
         *
         * @param param0: U64
         * @return U32
         */
        setIdSession: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Grandpa', 'SetIdSession', param0);
        },
    };
};

import {GetStorage} from "../../storage";

export const getGrandpa = (getStorage: GetStorage) => {
    return {

        /**
        * State of the current authority set.
        */
        state: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'State');
        },

        /**
        * Pending change: (signaled at, scheduled change).
        */
        pendingChange: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'PendingChange');
        },

        /**
        * next block number where we can force a change.
        */
        nextForced: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'NextForced');
        },

        /**
        * `true` if we are currently stalled.
        */
        stalled: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'Stalled');
        },

        /**
        * The number of changes (both in terms of keys and underlying economic responsibilities)
        * in the &#34;set&#34; of Grandpa validators from genesis.
        */
        currentSetId: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'CurrentSetId');
        },

        /**
        * A mapping from grandpa set ID to the index of the *most recent* session for which its
        * members were responsible.
        *
        * TWOX-NOTE: `SetId` is not under user control.
        */
        setIdSession: async (param0: unknown /* U64 */): Promise<string | null> => {
            return await getStorage('Grandpa', 'SetIdSession', param0);
        },
    };
};
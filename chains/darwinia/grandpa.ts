import {GetStorage} from "../../storage";

export const getGrandpa = (getStorage: GetStorage) => {
    return {

        /**
        * State of the current authority set.

        * @return StoredState: Enum&lt;{&#34;0/Live&#34;, &#34;1/PendingPause&#34;, &#34;2/Paused&#34;, &#34;3/PendingResume&#34;}&gt;
        */
        state: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'State');
        },

        /**
        * Pending change: (signaled at, scheduled change).

        * @return StoredPendingChange: {scheduled_at: U32, delay: U32, next_authorities: Vec&lt;([U8; 32], U64)&gt;, forced: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;}
        */
        pendingChange: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'PendingChange');
        },

        /**
        * next block number where we can force a change.

        * @return U32
        */
        nextForced: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'NextForced');
        },

        /**
        * `true` if we are currently stalled.

        * @return (U32, U32)
        */
        stalled: async (): Promise<string | null> => {
            return await getStorage('Grandpa', 'Stalled');
        },

        /**
        * The number of changes (both in terms of keys and underlying economic responsibilities)
        * in the &#34;set&#34; of Grandpa validators from genesis.

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

        * @param param0: U64
        * @return U32
        */
        setIdSession: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Grandpa', 'SetIdSession', param0);
        },
    };
};
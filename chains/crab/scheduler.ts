import {GetStorage} from "../../storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
        * Items to be executed, indexed by the block number that they should be executed on.
        */
        agenda: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('Scheduler', 'Agenda', param0);
        },

        /**
        * Lookup from identity to the block number and index of the task.
        */
        lookup: async (param0: unknown /* Vec&lt;U8&gt; */): Promise<string | null> => {
            return await getStorage('Scheduler', 'Lookup', param0);
        },
    };
};
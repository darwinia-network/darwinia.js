import {GetStorage} from "../../storage";

export default {

    /**
     * Items to be executed, indexed by the block number that they should be executed on.
     */
    agenda: async (getStorage: GetStorage, param0: unknown /* : U32 */): Promise<string | null> => {
        return await getStorage('Scheduler', 'Agenda', param0);
    },

    /**
     * Lookup from identity to the block number and index of the task.
     */
    lookup: async (getStorage: GetStorage, param0: unknown /* : Vec&lt;U8&gt; */): Promise<string | null> => {
        return await getStorage('Scheduler', 'Lookup', param0);
    },
};
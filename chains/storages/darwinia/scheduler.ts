import {GetStorage} from "../../../storage";

export const getScheduler = (getStorage: GetStorage) => {
    return {

        /**
        * Items to be executed, indexed by the block number that they should be executed on.
        *
        * @param param0: U32
        * @return Vec<Enum<{"0/None", "1/Some"}>>
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

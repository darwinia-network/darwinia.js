import {GetStorage} from "../../../src/storage";

export const getTimestamp = (getStorage: GetStorage) => {
    return {

        /**
         * Current time for the current block.
         *
         * @return U64
         */
        now: async (): Promise<string | null> => {
            return await getStorage('Timestamp', 'Now');
        },

        /**
         * Did the timestamp get updated in this block?
         *
         * @return Bool
         */
        didUpdate: async (): Promise<string | null> => {
            return await getStorage('Timestamp', 'DidUpdate');
        },
    };
};

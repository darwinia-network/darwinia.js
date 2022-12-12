import {GetStorage} from "../../storage";

export const getTimestamp = (getStorage: GetStorage) => {
    return {

        /**
        * Current time for the current block.
        */
        now: async (): Promise<string | null> => {
            return await getStorage('Timestamp', 'Now');
        },

        /**
        * Did the timestamp get updated in this block?
        */
        didUpdate: async (): Promise<string | null> => {
            return await getStorage('Timestamp', 'DidUpdate');
        },
    };
};
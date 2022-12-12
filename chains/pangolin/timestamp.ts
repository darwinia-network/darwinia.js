import {GetStorage} from "../../storage";

export default {

    /**
     * Current time for the current block.
     */
    now: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Timestamp', 'Now');
    },

    /**
     * Did the timestamp get updated in this block?
     */
    didUpdate: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Timestamp', 'DidUpdate');
    },
};
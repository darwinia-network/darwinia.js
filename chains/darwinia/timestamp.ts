import {GetStorage} from "../../storage";

export default {
    now: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Timestamp', 'Now');
    },
    didUpdate: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Timestamp', 'DidUpdate');
    },
};
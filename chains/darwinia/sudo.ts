import {GetStorage} from "../../storage";

export default {
    key: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Sudo', 'Key');
    },
};
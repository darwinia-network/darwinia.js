import {GetStorage} from "../../storage";

export default {

    /**
     * The `AccountId` of the sudo key.
     */
    key: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Sudo', 'Key');
    },
};
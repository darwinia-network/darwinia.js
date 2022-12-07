import {GetStorage} from "../../storage";

export default {
    accounts: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Indices', 'Accounts', param0);
    },
};
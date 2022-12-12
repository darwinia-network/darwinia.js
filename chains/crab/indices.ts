import {GetStorage} from "../../storage";

export default {

    /**
     * The lookup from index to account.
     */
    accounts: async (getStorage: GetStorage, param0: unknown /* U32 */): Promise<string | null> => {
        return await getStorage('Indices', 'Accounts', param0);
    },
};
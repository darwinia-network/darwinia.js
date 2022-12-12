import {GetStorage} from "../../storage";

export const getIndices = (getStorage: GetStorage) => {
    return {

        /**
        * The lookup from index to account.
        */
        accounts: async (param0: unknown /* U32 */): Promise<string | null> => {
            return await getStorage('Indices', 'Accounts', param0);
        },
    };
};
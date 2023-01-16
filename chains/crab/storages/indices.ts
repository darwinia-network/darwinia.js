import { GetStorage } from "../../../src/storage";

export const getIndices = (getStorage: GetStorage) => {
    return {

        /**
         * The lookup from index to account.
         *
         * @param param0: U32
         * @return ([U8; 32], U128, Bool)
         */
        accounts: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Indices', 'Accounts', param0);
        },
    };
};

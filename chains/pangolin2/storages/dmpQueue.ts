import { GetStorage } from "../../../src/storage";

export const getDmpQueue = (getStorage: GetStorage) => {
    return {

        /**
         * The configuration.
         *
         * @return ConfigData: {max_individual: {ref_time: Compact<U64>, proof_size: Compact<U64>}}
         */
        configuration: async (): Promise<string | null> => {
            return await getStorage('DmpQueue', 'Configuration');
        },

        /**
         * The page index.
         *
         * @return PageIndexData: {begin_used: U32, end_used: U32, overweight_count: U64}
         */
        pageIndex: async (): Promise<string | null> => {
            return await getStorage('DmpQueue', 'PageIndex');
        },

        /**
         * The queue pages.
         *
         * @param param0: U32
         * @return Vec<(U32, Vec<U8>)>
         */
        pages: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DmpQueue', 'Pages', param0);
        },

        /**
         * The overweight messages.
         *
         * @param param0: U64
         * @return (U32, Vec<U8>)
         */
        overweight: async (param0: unknown): Promise<string | null> => {
            return await getStorage('DmpQueue', 'Overweight', param0);
        },
    };
};

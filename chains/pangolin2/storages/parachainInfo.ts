import { GetStorage } from "../../../src/storage";

export const getParachainInfo = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @return Id: U32
         */
        parachainId: async (): Promise<string | null> => {
            return await getStorage('ParachainInfo', 'ParachainId');
        },
    };
};

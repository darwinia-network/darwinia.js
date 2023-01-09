import {GetStorage} from "../../../storage";

export const getSudo = (getStorage: GetStorage) => {
    return {

        /**
         * The `AccountId` of the sudo key.
         *
         * @return AccountId32: [U8; 32]
         */
        key: async (): Promise<string | null> => {
            return await getStorage('Sudo', 'Key');
        },
    };
};

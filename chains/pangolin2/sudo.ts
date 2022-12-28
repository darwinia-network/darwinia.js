import {GetStorage} from "../../storage";

export const getSudo = (getStorage: GetStorage) => {
    return {

        /**
        * The `AccountId` of the sudo key.
        *
        * @return AccountId20: [U8; 20]
        */
        key: async (): Promise<string | null> => {
            return await getStorage('Sudo', 'Key');
        },
    };
};
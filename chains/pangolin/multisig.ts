import {GetStorage} from "../../storage";

export const getMultisig = (getStorage: GetStorage) => {
    return {

        /**
        * The set of open multisig operations.
        */
        multisigs: async (param0: unknown /* AccountId32: [U8; 32] */, param1: unknown /* [U8; 32] */): Promise<string | null> => {
            return await getStorage('Multisig', 'Multisigs', param0, param1);
        },

        /**
        */
        calls: async (param0: unknown /* [U8; 32] */): Promise<string | null> => {
            return await getStorage('Multisig', 'Calls', param0);
        },
    };
};
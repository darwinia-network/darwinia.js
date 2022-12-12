import {GetStorage} from "../../storage";

export default {

    /**
     * The set of open multisig operations.
     */
    multisigs: async (getStorage: GetStorage, param0: unknown /* AccountId32: [U8; 32] */, param1: unknown /* [U8; 32] */): Promise<string | null> => {
        return await getStorage('Multisig', 'Multisigs', param0, param1);
    },

    /**
     */
    calls: async (getStorage: GetStorage, param0: unknown /* [U8; 32] */): Promise<string | null> => {
        return await getStorage('Multisig', 'Calls', param0);
    },
};
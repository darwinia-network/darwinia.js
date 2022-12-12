import {GetStorage} from "../../storage";

export default {

    /**
     */
    accountCodes: async (getStorage: GetStorage, param0: unknown /* primitive_types::H160: [U8;20] */): Promise<string | null> => {
        return await getStorage('EVM', 'AccountCodes', param0);
    },

    /**
     */
    accountStorages: async (getStorage: GetStorage, param0: unknown /* primitive_types::H160: [U8;20] */, param1: unknown /* primitive_types::H256: [U8;32] */): Promise<string | null> => {
        return await getStorage('EVM', 'AccountStorages', param0, param1);
    },
};
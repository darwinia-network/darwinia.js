import { GetStorage } from "../../../src/storage";

export const getMultisig = (getStorage: GetStorage) => {
    return {

        /**
         * The set of open multisig operations.
         *
         * @param param0: AccountId20: [U8; 20]
         * @param param1: [U8; 32]
         * @return Multisig: {when: {height: U32, index: U32}, deposit: U128, depositor: [U8; 20], approvals: Vec<[U8; 20]>}
         */
        multisigs: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Multisigs', param0, param1);
        },
    };
};

import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Multisig`'s storages.
 * 
 * `Multisig`'s calls: {@link: module:pangolin/multisig/calls}
 *
 * @module pangolin/multisig/storages
 */
export const getMultisig = (getStorage: GetStorage) => {
    return {

        /**
         * The set of open multisig operations.
         *
         * @param {unknown} param0 AccountId20: [U8; 20]
         * @param {unknown} param1 [U8; 32]
         * @returns {Promise<string | null>} Multisig: {when: {height: U32, index: U32}, deposit: U128, depositor: [U8; 20], approvals: Vec<[U8; 20]>}
         */
        multisigs: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Multisigs', param0, param1);
        },
    };
};

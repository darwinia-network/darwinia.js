import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module pangoro/messageGadget/storages
 */
export const getMessageGadget = (getStorage: GetStorage) => {
    return {

        /**
         *
         * @returns {Promise<string | null>} H160: [U8; 20]
         */
        commitmentContract: async (): Promise<string | null> => {
            return await getStorage('MessageGadget', 'CommitmentContract');
        },
    };
};

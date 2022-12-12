import {GetStorage} from "../../storage";

export const getPreimage = (getStorage: GetStorage) => {
    return {

        /**
        * The request status of a given hash.
        */
        statusFor: async (param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Preimage', 'StatusFor', param0);
        },

        /**
        * The preimages stored by this pallet.
        */
        preimageFor: async (param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
            return await getStorage('Preimage', 'PreimageFor', param0);
        },
    };
};
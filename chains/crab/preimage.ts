import {GetStorage} from "../../storage";

export default {

    /**
     * The request status of a given hash.
     */
    statusFor: async (getStorage: GetStorage, param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Preimage', 'StatusFor', param0);
    },

    /**
     * The preimages stored by this pallet.
     */
    preimageFor: async (getStorage: GetStorage, param0: unknown /* H256: [U8; 32] */): Promise<string | null> => {
        return await getStorage('Preimage', 'PreimageFor', param0);
    },
};
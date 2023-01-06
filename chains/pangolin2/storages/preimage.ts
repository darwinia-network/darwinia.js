import {GetStorage} from "../../../storage";

export const getPreimage = (getStorage: GetStorage) => {
    return {

        /**
         * The request status of a given hash.
         *
         * @param param0: H256: [U8; 32]
         * @return RequestStatus: Enum<{0/Unrequested: Enum<{0/None: , 1/Some: ([U8; 20], U128)}>, 1/Requested: U32}>
         */
        statusFor: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Preimage', 'StatusFor', param0);
        },

        /**
         * The preimages stored by this pallet.
         *
         * @param param0: H256: [U8; 32]
         * @return BoundedVec: Vec<U8>
         */
        preimageFor: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Preimage', 'PreimageFor', param0);
        },
    };
};

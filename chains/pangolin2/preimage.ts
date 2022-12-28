import {GetStorage} from "../../storage";

export const getPreimage = (getStorage: GetStorage) => {
    return {

        /**
        * The request status of a given hash.
        *
        * @param param0: H256: [U8; 32]
        * @return RequestStatus: Enum<{"0/Unrequested", "1/Requested"}>
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
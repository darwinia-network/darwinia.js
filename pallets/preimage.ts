import {GetStorage} from "../storage";

export const preimage = {
    statusFor: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Preimage', 'StatusFor', param0);
    },
    preimageFor: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Preimage', 'PreimageFor', param0);
    },
};
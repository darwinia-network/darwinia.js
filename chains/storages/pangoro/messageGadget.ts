import {GetStorage} from "../../../storage";

export const getMessageGadget = (getStorage: GetStorage) => {
    return {

        /**
        *
        * @return H160: [U8; 20]
        */
        commitmentContract: async (): Promise<string | null> => {
            return await getStorage('MessageGadget', 'CommitmentContract');
        },
    };
};

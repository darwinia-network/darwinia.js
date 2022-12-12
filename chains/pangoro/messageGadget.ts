import {GetStorage} from "../../storage";

export const getMessageGadget = (getStorage: GetStorage) => {
    return {

        /**
        */
        commitmentContract: async (): Promise<string | null> => {
            return await getStorage('MessageGadget', 'CommitmentContract');
        },
    };
};
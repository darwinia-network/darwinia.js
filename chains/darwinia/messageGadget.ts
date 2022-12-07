import {GetStorage} from "../../storage";

export default {
    commitmentContract: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('MessageGadget', 'CommitmentContract');
    },
};
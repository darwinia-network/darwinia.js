import {GetStorage} from "../../storage";

export default {

    /**
     * The current membership, stored as an ordered Vec.
     */
    members: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalMembership', 'Members');
    },

    /**
     * The current prime member, if one exists.
     */
    prime: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalMembership', 'Prime');
    },
};
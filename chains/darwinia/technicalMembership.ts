import {GetStorage} from "../../storage";

export const getTechnicalMembership = (getStorage: GetStorage) => {
    return {

        /**
        * The current membership, stored as an ordered Vec.
        */
        members: async (): Promise<string | null> => {
            return await getStorage('TechnicalMembership', 'Members');
        },

        /**
        * The current prime member, if one exists.
        */
        prime: async (): Promise<string | null> => {
            return await getStorage('TechnicalMembership', 'Prime');
        },
    };
};
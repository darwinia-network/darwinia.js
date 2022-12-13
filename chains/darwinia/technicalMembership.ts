import {GetStorage} from "../../storage";

export const getTechnicalMembership = (getStorage: GetStorage) => {
    return {

        /**
        * The current membership, stored as an ordered Vec.

        * @return Vec&lt;[U8; 32]&gt;
        */
        members: async (): Promise<string | null> => {
            return await getStorage('TechnicalMembership', 'Members');
        },

        /**
        * The current prime member, if one exists.

        * @return AccountId32: [U8; 32]
        */
        prime: async (): Promise<string | null> => {
            return await getStorage('TechnicalMembership', 'Prime');
        },
    };
};
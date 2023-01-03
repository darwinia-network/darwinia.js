import {GetStorage} from "../../../storage";

export const getTechnicalMembership = (getStorage: GetStorage) => {
    return {

        /**
        * The current membership, stored as an ordered Vec.
        *
        * @return BoundedVec: Vec<[U8; 20]>
        */
        members: async (): Promise<string | null> => {
            return await getStorage('TechnicalMembership', 'Members');
        },

        /**
        * The current prime member, if one exists.
        *
        * @return AccountId20: [U8; 20]
        */
        prime: async (): Promise<string | null> => {
            return await getStorage('TechnicalMembership', 'Prime');
        },
    };
};

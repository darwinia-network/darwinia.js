import {GetStorage} from "../storage";

export const technicalMembership = {
    members: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalMembership', 'Members');
    },
    prime: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('TechnicalMembership', 'Prime');
    },
};
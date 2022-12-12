import {GetStorage} from "../../storage";

export default {

    /**
     * The current authorities set
     */
    authorities: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Beefy', 'Authorities');
    },

    /**
     * The current validator set id
     */
    validatorSetId: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Beefy', 'ValidatorSetId');
    },

    /**
     * Authorities set scheduled to be used with the next session
     */
    nextAuthorities: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('Beefy', 'NextAuthorities');
    },
};
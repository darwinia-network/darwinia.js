import {GetStorage} from "../../storage";

export const getBeefy = (getStorage: GetStorage) => {
    return {

        /**
        * The current authorities set
        */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'Authorities');
        },

        /**
        * The current validator set id
        */
        validatorSetId: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'ValidatorSetId');
        },

        /**
        * Authorities set scheduled to be used with the next session
        */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'NextAuthorities');
        },
    };
};
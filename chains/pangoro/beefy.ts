import {GetStorage} from "../../storage";

export const getBeefy = (getStorage: GetStorage) => {
    return {

        /**
        * The current authorities set

        * @return Vec&lt;[U8; 33]&gt;
        */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'Authorities');
        },

        /**
        * The current validator set id

        * @return U64
        */
        validatorSetId: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'ValidatorSetId');
        },

        /**
        * Authorities set scheduled to be used with the next session

        * @return Vec&lt;[U8; 33]&gt;
        */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'NextAuthorities');
        },
    };
};
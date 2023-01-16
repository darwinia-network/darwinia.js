import { GetStorage } from "../../../src/storage";

export const getBeefy = (getStorage: GetStorage) => {
    return {

        /**
         * The current authorities set
         *
         * @return Vec<[U8; 33]>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'Authorities');
        },

        /**
         * The current validator set id
         *
         * @return U64
         */
        validatorSetId: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'ValidatorSetId');
        },

        /**
         * Authorities set scheduled to be used with the next session
         *
         * @return Vec<[U8; 33]>
         */
        nextAuthorities: async (): Promise<string | null> => {
            return await getStorage('Beefy', 'NextAuthorities');
        },
    };
};

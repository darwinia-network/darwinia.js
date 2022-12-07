import {GetStorage} from "../../storage";

export default {
    authorities: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('EcdsaAuthority', 'Authorities');
    },
    nextAuthorities: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('EcdsaAuthority', 'NextAuthorities');
    },
    nonce: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('EcdsaAuthority', 'Nonce');
    },
    authoritiesChangeToSign: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('EcdsaAuthority', 'AuthoritiesChangeToSign');
    },
    newMessageRootToSign: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('EcdsaAuthority', 'NewMessageRootToSign');
    },
    previousMessageRoot: async (getStorage: GetStorage): Promise<string | null> => {
        return await getStorage('EcdsaAuthority', 'PreviousMessageRoot');
    },
};
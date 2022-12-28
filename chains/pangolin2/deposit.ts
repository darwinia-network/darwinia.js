import {GetStorage} from "../../storage";

export const getDeposit = (getStorage: GetStorage) => {
    return {

        /**
        * All deposits.
        *
        * The items must be sorted by the id.
        *
        * @param param0: AccountId20: [U8; 20]
        * @return BoundedVec: Vec<{id: U16, value: U128, start_time: U128, expired_time: U128, in_use: Bool}>
        */
        deposits: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Deposit', 'Deposits', param0);
        },
    };
};
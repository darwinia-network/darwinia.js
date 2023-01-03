import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getEVM = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 20]
         * @param param1: [U8; 20]
         * @param param2: Vec<U8>
         * @param param3: [U64; 4]
         * @param param4: U64
         * @param param5: [U64; 4]
         * @param param6: Enum<{"0/None", "1/Some"}>
         * @param param7: Enum<{"0/None", "1/Some"}>
         * @param param8: Vec<([U8; 20], Vec<[U8; 32]>)>
	 */
        call: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown, param6: unknown, param7: unknown, param8: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EVM', 'call', false, param0, param1, param2, param3, param4, param5, param6, param7, param8);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Vec<U8>
         * @param param2: [U64; 4]
         * @param param3: U64
         * @param param4: [U64; 4]
         * @param param5: Enum<{"0/None", "1/Some"}>
         * @param param6: Enum<{"0/None", "1/Some"}>
         * @param param7: Vec<([U8; 20], Vec<[U8; 32]>)>
	 */
        create: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown, param6: unknown, param7: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EVM', 'create', false, param0, param1, param2, param3, param4, param5, param6, param7);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Vec<U8>
         * @param param2: [U8; 32]
         * @param param3: [U64; 4]
         * @param param4: U64
         * @param param5: [U64; 4]
         * @param param6: Enum<{"0/None", "1/Some"}>
         * @param param7: Enum<{"0/None", "1/Some"}>
         * @param param8: Vec<([U8; 20], Vec<[U8; 32]>)>
	 */
        create2: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown, param6: unknown, param7: unknown, param8: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EVM', 'create2', false, param0, param1, param2, param3, param4, param5, param6, param7, param8);
        },


    }
}

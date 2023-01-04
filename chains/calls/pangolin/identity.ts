import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getIdentity = (dispatch: Dispatch) => {
    return {
        /**
         * @param _account: [U8; 32]
	 */
        addRegistrar: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', false, _account);
        },

        /**
         * @param _info: {additional: Vec<(Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>)>, display: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, legal: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, web: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, riot: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, email: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, pgp_fingerprint: Enum<{"0/None", "1/Some"}>, image: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, twitter: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>}
	 */
        setIdentity: async (signer: ethers.Signer, _info: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setIdentity', false, _info);
        },

        /**
         * @param _subs: Vec<([U8; 32], Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>)>
	 */
        setSubs: async (signer: ethers.Signer, _subs: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setSubs', false, _subs);
        },

        /**
	 */
        clearIdentity: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', false);
        },

        /**
         * @param _reg_index: Compact<U32>
         * @param _max_fee: Compact<U128>
	 */
        requestJudgement: async (signer: ethers.Signer, _reg_index: unknown, _max_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', false, _reg_index, _max_fee);
        },

        /**
         * @param _reg_index: U32
	 */
        cancelRequest: async (signer: ethers.Signer, _reg_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', false, _reg_index);
        },

        /**
         * @param _index: Compact<U32>
         * @param _fee: Compact<U128>
	 */
        setFee: async (signer: ethers.Signer, _index: unknown, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFee', false, _index, _fee);
        },

        /**
         * @param _index: Compact<U32>
         * @param _new: [U8; 32]
	 */
        setAccountId: async (signer: ethers.Signer, _index: unknown, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setAccountId', false, _index, _new);
        },

        /**
         * @param _index: Compact<U32>
         * @param _fields: U64
	 */
        setFields: async (signer: ethers.Signer, _index: unknown, _fields: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFields', false, _index, _fields);
        },

        /**
         * @param _reg_index: Compact<U32>
         * @param _target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _judgement: Enum<{"0/Unknown", "1/FeePaid", "2/Reasonable", "3/KnownGood", "4/OutOfDate", "5/LowQuality", "6/Erroneous"}>
	 */
        provideJudgement: async (signer: ethers.Signer, _reg_index: unknown, _target: unknown, _judgement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', false, _reg_index, _target, _judgement);
        },

        /**
         * @param _target: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        killIdentity: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'killIdentity', false, _target);
        },

        /**
         * @param _sub: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _data: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>
	 */
        addSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addSub', false, _sub, _data);
        },

        /**
         * @param _sub: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
         * @param _data: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>
	 */
        renameSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'renameSub', false, _sub, _data);
        },

        /**
         * @param _sub: Enum<{"0/Id", "1/Index", "2/Raw", "3/Address32", "4/Address20"}>
	 */
        removeSub: async (signer: ethers.Signer, _sub: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'removeSub', false, _sub);
        },

        /**
	 */
        quitSub: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'quitSub', false);
        },


    }
}

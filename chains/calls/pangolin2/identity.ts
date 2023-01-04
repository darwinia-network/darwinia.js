import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getIdentity = (dispatch: Dispatch) => {
    return {
        /**
         * @param _account: [U8; 20]
	 */
        addRegistrar: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', false, _account);
        },

        /**
         * @param _info: {additional: Vec<(Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>)>, display: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, legal: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, web: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, riot: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, email: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, pgp_fingerprint: Enum<{None: , Some: [U8; 20]}>, image: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>, twitter: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>}
	 */
        setIdentity: async (signer: ethers.Signer, _info: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setIdentity', false, _info);
        },

        /**
         * @param _subs: Vec<([U8; 20], Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>)>
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
         * @param _new: [U8; 20]
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
         * @param _target: [U8; 20]
         * @param _judgement: Enum<{Unknown: , FeePaid: U128, Reasonable: , KnownGood: , OutOfDate: , LowQuality: , Erroneous: }>
         * @param _identity: [U8; 32]
	 */
        provideJudgement: async (signer: ethers.Signer, _reg_index: unknown, _target: unknown, _judgement: unknown, _identity: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', false, _reg_index, _target, _judgement, _identity);
        },

        /**
         * @param _target: [U8; 20]
	 */
        killIdentity: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'killIdentity', false, _target);
        },

        /**
         * @param _sub: [U8; 20]
         * @param _data: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>
	 */
        addSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addSub', false, _sub, _data);
        },

        /**
         * @param _sub: [U8; 20]
         * @param _data: Enum<{None: , Raw0: [undefined; 0], Raw1: [U8; 1], Raw2: [U8; 2], Raw3: [U8; 3], Raw4: [U8; 4], Raw5: [U8; 5], Raw6: [U8; 6], Raw7: [U8; 7], Raw8: [U8; 8], Raw9: [U8; 9], Raw10: [U8; 10], Raw11: [U8; 11], Raw12: [U8; 12], Raw13: [U8; 13], Raw14: [U8; 14], Raw15: [U8; 15], Raw16: [U8; 16], Raw17: [U8; 17], Raw18: [U8; 18], Raw19: [U8; 19], Raw20: [U8; 20], Raw21: [U8; 21], Raw22: [U8; 22], Raw23: [U8; 23], Raw24: [U8; 24], Raw25: [U8; 25], Raw26: [U8; 26], Raw27: [U8; 27], Raw28: [U8; 28], Raw29: [U8; 29], Raw30: [U8; 30], Raw31: [U8; 31], Raw32: [U8; 32], BlakeTwo256: [U8; 32], Sha256: [U8; 32], Keccak256: [U8; 32], ShaThree256: [U8; 32]}>
	 */
        renameSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'renameSub', false, _sub, _data);
        },

        /**
         * @param _sub: [U8; 20]
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

import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getIdentity = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _account: [U8; 20]
	 */
        addRegistrar: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', false, _account);
        },

        addRegistrarD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', true, data);
        },

        addRegistrarCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'addRegistrar', {
                account: _account,
            });
        },

        /**
         * @param _info: {additional: Vec<(Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>)>, display: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, legal: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, web: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, riot: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, email: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, pgp_fingerprint: Enum<{0/None: , 1/Some: [U8; 20]}>, image: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, twitter: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>}
	 */
        setIdentity: async (signer: ethers.Signer, _info: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setIdentity', false, _info);
        },

        setIdentityD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setIdentity', true, data);
        },

        setIdentityCall: (_info: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setIdentity', {
                info: _info,
            });
        },

        /**
         * @param _subs: Vec<([U8; 20], Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>)>
	 */
        setSubs: async (signer: ethers.Signer, _subs: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setSubs', false, _subs);
        },

        setSubsD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setSubs', true, data);
        },

        setSubsCall: (_subs: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setSubs', {
                subs: _subs,
            });
        },

        /**
	 */
        clearIdentity: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', false);
        },

        clearIdentityD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', true, data);
        },

        clearIdentityCall: () => {
            return buildRuntimeCall(metadata, 'Identity', 'clearIdentity', {
            });
        },

        /**
         * @param _reg_index: Compact<U32>
         * @param _max_fee: Compact<U128>
	 */
        requestJudgement: async (signer: ethers.Signer, _reg_index: unknown, _max_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', false, _reg_index, _max_fee);
        },

        requestJudgementD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', true, data);
        },

        requestJudgementCall: (_reg_index: unknown, _max_fee: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'requestJudgement', {
                reg_index: _reg_index,
                max_fee: _max_fee,
            });
        },

        /**
         * @param _reg_index: U32
	 */
        cancelRequest: async (signer: ethers.Signer, _reg_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', false, _reg_index);
        },

        cancelRequestD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', true, data);
        },

        cancelRequestCall: (_reg_index: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'cancelRequest', {
                reg_index: _reg_index,
            });
        },

        /**
         * @param _index: Compact<U32>
         * @param _fee: Compact<U128>
	 */
        setFee: async (signer: ethers.Signer, _index: unknown, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFee', false, _index, _fee);
        },

        setFeeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFee', true, data);
        },

        setFeeCall: (_index: unknown, _fee: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setFee', {
                index: _index,
                fee: _fee,
            });
        },

        /**
         * @param _index: Compact<U32>
         * @param _new: [U8; 20]
	 */
        setAccountId: async (signer: ethers.Signer, _index: unknown, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setAccountId', false, _index, _new);
        },

        setAccountIdD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setAccountId', true, data);
        },

        setAccountIdCall: (_index: unknown, _new: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setAccountId', {
                index: _index,
                new: _new,
            });
        },

        /**
         * @param _index: Compact<U32>
         * @param _fields: U64
	 */
        setFields: async (signer: ethers.Signer, _index: unknown, _fields: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFields', false, _index, _fields);
        },

        setFieldsD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFields', true, data);
        },

        setFieldsCall: (_index: unknown, _fields: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setFields', {
                index: _index,
                fields: _fields,
            });
        },

        /**
         * @param _reg_index: Compact<U32>
         * @param _target: [U8; 20]
         * @param _judgement: Enum<{0/Unknown: , 1/FeePaid: U128, 2/Reasonable: , 3/KnownGood: , 4/OutOfDate: , 5/LowQuality: , 6/Erroneous: }>
         * @param _identity: [U8; 32]
	 */
        provideJudgement: async (signer: ethers.Signer, _reg_index: unknown, _target: unknown, _judgement: unknown, _identity: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', false, _reg_index, _target, _judgement, _identity);
        },

        provideJudgementD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', true, data);
        },

        provideJudgementCall: (_reg_index: unknown, _target: unknown, _judgement: unknown, _identity: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'provideJudgement', {
                reg_index: _reg_index,
                target: _target,
                judgement: _judgement,
                identity: _identity,
            });
        },

        /**
         * @param _target: [U8; 20]
	 */
        killIdentity: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'killIdentity', false, _target);
        },

        killIdentityD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'killIdentity', true, data);
        },

        killIdentityCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'killIdentity', {
                target: _target,
            });
        },

        /**
         * @param _sub: [U8; 20]
         * @param _data: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>
	 */
        addSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addSub', false, _sub, _data);
        },

        addSubD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addSub', true, data);
        },

        addSubCall: (_sub: unknown, _data: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'addSub', {
                sub: _sub,
                data: _data,
            });
        },

        /**
         * @param _sub: [U8; 20]
         * @param _data: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>
	 */
        renameSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'renameSub', false, _sub, _data);
        },

        renameSubD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'renameSub', true, data);
        },

        renameSubCall: (_sub: unknown, _data: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'renameSub', {
                sub: _sub,
                data: _data,
            });
        },

        /**
         * @param _sub: [U8; 20]
	 */
        removeSub: async (signer: ethers.Signer, _sub: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'removeSub', false, _sub);
        },

        removeSubD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'removeSub', true, data);
        },

        removeSubCall: (_sub: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'removeSub', {
                sub: _sub,
            });
        },

        /**
	 */
        quitSub: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'quitSub', false);
        },

        quitSubD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'quitSub', true, data);
        },

        quitSubCall: () => {
            return buildRuntimeCall(metadata, 'Identity', 'quitSub', {
            });
        },

    }
}

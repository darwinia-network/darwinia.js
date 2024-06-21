/**
 * This is the doc comment for pallet `Identity`'s calls. 
 * 
 * `Identity`'s storages: {@link: module:koi/identity/storages}
 *
 * @module koi/identity/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getIdentity = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::add_registrar`].
         *
         * @param {unknown} _account [U8; 20]
         * @instance
         */
        addRegistrar: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', false, {
                account: _account,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/addRegistrar}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        addRegistrarH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAddRegistrarCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'addRegistrar', {
                account: _account,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAddRegistrarCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAddRegistrarCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'addRegistrar', argsBytes)
        },

        /**
         * See [`Pallet::set_identity`].
         *
         * @param {unknown} _info {additional: Vec<(Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>)>, display: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, legal: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, web: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, riot: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, email: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, pgp_fingerprint: Enum<{0/None: , 1/Some: [U8; 20]}>, image: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, twitter: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>}
         * @instance
         */
        setIdentity: async (signer: ethers.Signer, _info: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setIdentity', false, {
                info: _info,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/setIdentity}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setIdentityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setIdentity', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetIdentityCall: (_info: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setIdentity', {
                info: _info,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetIdentityCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetIdentityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'setIdentity', argsBytes)
        },

        /**
         * See [`Pallet::set_subs`].
         *
         * @param {unknown} _subs Vec<([U8; 20], Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>)>
         * @instance
         */
        setSubs: async (signer: ethers.Signer, _subs: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setSubs', false, {
                subs: _subs,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/setSubs}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setSubsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setSubs', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetSubsCall: (_subs: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setSubs', {
                subs: _subs,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetSubsCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetSubsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'setSubs', argsBytes)
        },

        /**
         * See [`Pallet::clear_identity`].
         *
         * @instance
         */
        clearIdentity: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', false, {
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/clearIdentity}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        clearIdentityH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildClearIdentityCall: () => {
            return buildRuntimeCall(metadata, 'Identity', 'clearIdentity', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildClearIdentityCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildClearIdentityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'clearIdentity', argsBytes)
        },

        /**
         * See [`Pallet::request_judgement`].
         *
         * @param {unknown} _reg_index Compact<U32>
         * @param {unknown} _max_fee Compact<U128>
         * @instance
         */
        requestJudgement: async (signer: ethers.Signer, _reg_index: unknown, _max_fee: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', false, {
                reg_index: _reg_index,
                max_fee: _max_fee,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/requestJudgement}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        requestJudgementH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRequestJudgementCall: (_reg_index: unknown, _max_fee: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'requestJudgement', {
                reg_index: _reg_index,
                max_fee: _max_fee,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRequestJudgementCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRequestJudgementCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'requestJudgement', argsBytes)
        },

        /**
         * See [`Pallet::cancel_request`].
         *
         * @param {unknown} _reg_index U32
         * @instance
         */
        cancelRequest: async (signer: ethers.Signer, _reg_index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', false, {
                reg_index: _reg_index,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/cancelRequest}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cancelRequestH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCancelRequestCall: (_reg_index: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'cancelRequest', {
                reg_index: _reg_index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCancelRequestCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCancelRequestCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'cancelRequest', argsBytes)
        },

        /**
         * See [`Pallet::set_fee`].
         *
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _fee Compact<U128>
         * @instance
         */
        setFee: async (signer: ethers.Signer, _index: unknown, _fee: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setFee', false, {
                index: _index,
                fee: _fee,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/setFee}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setFeeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setFee', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetFeeCall: (_index: unknown, _fee: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setFee', {
                index: _index,
                fee: _fee,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetFeeCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetFeeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'setFee', argsBytes)
        },

        /**
         * See [`Pallet::set_account_id`].
         *
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _new [U8; 20]
         * @instance
         */
        setAccountId: async (signer: ethers.Signer, _index: unknown, _new: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setAccountId', false, {
                index: _index,
                new: _new,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/setAccountId}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setAccountIdH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setAccountId', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetAccountIdCall: (_index: unknown, _new: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setAccountId', {
                index: _index,
                new: _new,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetAccountIdCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetAccountIdCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'setAccountId', argsBytes)
        },

        /**
         * See [`Pallet::set_fields`].
         *
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _fields U64
         * @instance
         */
        setFields: async (signer: ethers.Signer, _index: unknown, _fields: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setFields', false, {
                index: _index,
                fields: _fields,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/setFields}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setFieldsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'setFields', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetFieldsCall: (_index: unknown, _fields: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setFields', {
                index: _index,
                fields: _fields,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetFieldsCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetFieldsCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'setFields', argsBytes)
        },

        /**
         * See [`Pallet::provide_judgement`].
         *
         * @param {unknown} _reg_index Compact<U32>
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _judgement Enum<{0/Unknown: , 1/FeePaid: U128, 2/Reasonable: , 3/KnownGood: , 4/OutOfDate: , 5/LowQuality: , 6/Erroneous: }>
         * @param {unknown} _identity [U8; 32]
         * @instance
         */
        provideJudgement: async (signer: ethers.Signer, _reg_index: unknown, _target: unknown, _judgement: unknown, _identity: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', false, {
                reg_index: _reg_index,
                target: _target,
                judgement: _judgement,
                identity: _identity,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/provideJudgement}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        provideJudgementH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProvideJudgementCall: (_reg_index: unknown, _target: unknown, _judgement: unknown, _identity: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'provideJudgement', {
                reg_index: _reg_index,
                target: _target,
                judgement: _judgement,
                identity: _identity,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProvideJudgementCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildProvideJudgementCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'provideJudgement', argsBytes)
        },

        /**
         * See [`Pallet::kill_identity`].
         *
         * @param {unknown} _target [U8; 20]
         * @instance
         */
        killIdentity: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'killIdentity', false, {
                target: _target,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/killIdentity}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        killIdentityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'killIdentity', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildKillIdentityCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'killIdentity', {
                target: _target,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildKillIdentityCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildKillIdentityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'killIdentity', argsBytes)
        },

        /**
         * See [`Pallet::add_sub`].
         *
         * @param {unknown} _sub [U8; 20]
         * @param {unknown} _data Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>
         * @instance
         */
        addSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'addSub', false, {
                sub: _sub,
                data: _data,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/addSub}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        addSubH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'addSub', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAddSubCall: (_sub: unknown, _data: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'addSub', {
                sub: _sub,
                data: _data,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAddSubCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAddSubCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'addSub', argsBytes)
        },

        /**
         * See [`Pallet::rename_sub`].
         *
         * @param {unknown} _sub [U8; 20]
         * @param {unknown} _data Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>
         * @instance
         */
        renameSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'renameSub', false, {
                sub: _sub,
                data: _data,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/renameSub}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        renameSubH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'renameSub', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRenameSubCall: (_sub: unknown, _data: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'renameSub', {
                sub: _sub,
                data: _data,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRenameSubCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRenameSubCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'renameSub', argsBytes)
        },

        /**
         * See [`Pallet::remove_sub`].
         *
         * @param {unknown} _sub [U8; 20]
         * @instance
         */
        removeSub: async (signer: ethers.Signer, _sub: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'removeSub', false, {
                sub: _sub,
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/removeSub}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeSubH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'removeSub', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveSubCall: (_sub: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'removeSub', {
                sub: _sub,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveSubCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveSubCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'removeSub', argsBytes)
        },

        /**
         * See [`Pallet::quit_sub`].
         *
         * @instance
         */
        quitSub: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'quitSub', false, {
           });
        },

        /**
         * Similar to {@link: koi/identity/calls/quitSub}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        quitSubH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Identity', 'quitSub', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildQuitSubCall: () => {
            return buildRuntimeCall(metadata, 'Identity', 'quitSub', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildQuitSubCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildQuitSubCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Identity', 'quitSub', argsBytes)
        },

    }
}


/**
 * This is the doc comment for pallet `Identity`'s calls. 
 * 
 * `Identity`'s storages: {@link: module:pangoro/identity/storages}
 *
 * @module pangoro/identity/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getIdentity = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Add a registrar to the system.
         * 
         * The dispatch origin for this call must be `T::RegistrarOrigin`.
         * 
         * - `account`: the account of the registrar.
         * 
         * Emits `RegistrarAdded` if successful.
         * 
         * ## Complexity
         * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
         *
         * @param {unknown} _account [U8; 20]
         * @instance
         */
        addRegistrar: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', false, {
                account: _account,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/addRegistrar}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        addRegistrarH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Set an account's identity information and reserve the appropriate deposit.
         * 
         * If the account already has identity information, the deposit is taken as part payment
         * for the new deposit.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * - `info`: The identity information.
         * 
         * Emits `IdentitySet` if successful.
         * 
         * ## Complexity
         * - `O(X + X' + R)`
         *   - where `X` additional-field-count (deposit-bounded and code-bounded)
         *   - where `R` judgements-count (registrar-count-bounded)
         *
         * @param {unknown} _info {additional: Vec<(Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>)>, display: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, legal: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, web: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, riot: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, email: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, pgp_fingerprint: Enum<{0/None: , 1/Some: [U8; 20]}>, image: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, twitter: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>}
         * @instance
         */
        setIdentity: async (signer: ethers.Signer, _info: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setIdentity', false, {
                info: _info,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/setIdentity}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setIdentityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Set the sub-accounts of the sender.
         * 
         * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
         * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a registered
         * identity.
         * 
         * - `subs`: The identity's (new) sub-accounts.
         * 
         * ## Complexity
         * - `O(P + S)`
         *   - where `P` old-subs-count (hard- and deposit-bounded).
         *   - where `S` subs-count (hard- and deposit-bounded).
         *
         * @param {unknown} _subs Vec<([U8; 20], Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>)>
         * @instance
         */
        setSubs: async (signer: ethers.Signer, _subs: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setSubs', false, {
                subs: _subs,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/setSubs}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setSubsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Clear an account's identity info and all sub-accounts and return all deposits.
         * 
         * Payment: All reserved balances on the account are returned.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a registered
         * identity.
         * 
         * Emits `IdentityCleared` if successful.
         * 
         * ## Complexity
         * - `O(R + S + X)`
         *   - where `R` registrar-count (governance-bounded).
         *   - where `S` subs-count (hard- and deposit-bounded).
         *   - where `X` additional-field-count (deposit-bounded and code-bounded).
         *
         * @instance
         */
        clearIdentity: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', false, {
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/clearIdentity}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        clearIdentityH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
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
         * Request a judgement from a registrar.
         * 
         * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
         * given.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a
         * registered identity.
         * 
         * - `reg_index`: The index of the registrar whose judgement is requested.
         * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
         * 
         * ```nocompile
         * Self::registrars().get(reg_index).unwrap().fee
         * ```
         * 
         * Emits `JudgementRequested` if successful.
         * 
         * ## Complexity
         * - `O(R + X)`.
         *   - where `R` registrar-count (governance-bounded).
         *   - where `X` additional-field-count (deposit-bounded and code-bounded).
         *
         * @param {unknown} _reg_index Compact<U32>
         * @param {unknown} _max_fee Compact<U128>
         * @instance
         */
        requestJudgement: async (signer: ethers.Signer, _reg_index: unknown, _max_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', false, {
                reg_index: _reg_index,
                max_fee: _max_fee,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/requestJudgement}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        requestJudgementH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Cancel a previous request.
         * 
         * Payment: A previously reserved deposit is returned on success.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a
         * registered identity.
         * 
         * - `reg_index`: The index of the registrar whose judgement is no longer requested.
         * 
         * Emits `JudgementUnrequested` if successful.
         * 
         * ## Complexity
         * - `O(R + X)`.
         *   - where `R` registrar-count (governance-bounded).
         *   - where `X` additional-field-count (deposit-bounded and code-bounded).
         *
         * @param {unknown} _reg_index U32
         * @instance
         */
        cancelRequest: async (signer: ethers.Signer, _reg_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', false, {
                reg_index: _reg_index,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/cancelRequest}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cancelRequestH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Set the fee required for a judgement to be requested from a registrar.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must be the account
         * of the registrar whose index is `index`.
         * 
         * - `index`: the index of the registrar whose fee is to be set.
         * - `fee`: the new fee.
         * 
         * ## Complexity
         * - `O(R)`.
         *   - where `R` registrar-count (governance-bounded).
         *
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _fee Compact<U128>
         * @instance
         */
        setFee: async (signer: ethers.Signer, _index: unknown, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFee', false, {
                index: _index,
                fee: _fee,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/setFee}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setFeeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Change the account associated with a registrar.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must be the account
         * of the registrar whose index is `index`.
         * 
         * - `index`: the index of the registrar whose fee is to be set.
         * - `new`: the new account ID.
         * 
         * ## Complexity
         * - `O(R)`.
         *   - where `R` registrar-count (governance-bounded).
         *
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _new [U8; 20]
         * @instance
         */
        setAccountId: async (signer: ethers.Signer, _index: unknown, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setAccountId', false, {
                index: _index,
                new: _new,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/setAccountId}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setAccountIdH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Set the field information for a registrar.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must be the account
         * of the registrar whose index is `index`.
         * 
         * - `index`: the index of the registrar whose fee is to be set.
         * - `fields`: the fields that the registrar concerns themselves with.
         * 
         * ## Complexity
         * - `O(R)`.
         *   - where `R` registrar-count (governance-bounded).
         *
         * @param {unknown} _index Compact<U32>
         * @param {unknown} _fields U64
         * @instance
         */
        setFields: async (signer: ethers.Signer, _index: unknown, _fields: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFields', false, {
                index: _index,
                fields: _fields,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/setFields}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setFieldsH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Provide a judgement for an account's identity.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must be the account
         * of the registrar whose index is `reg_index`.
         * 
         * - `reg_index`: the index of the registrar whose judgement is being made.
         * - `target`: the account whose identity the judgement is upon. This must be an account
         *   with a registered identity.
         * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
         * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
         * 
         * Emits `JudgementGiven` if successful.
         * 
         * ## Complexity
         * - `O(R + X)`.
         *   - where `R` registrar-count (governance-bounded).
         *   - where `X` additional-field-count (deposit-bounded and code-bounded).
         *
         * @param {unknown} _reg_index Compact<U32>
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _judgement Enum<{0/Unknown: , 1/FeePaid: U128, 2/Reasonable: , 3/KnownGood: , 4/OutOfDate: , 5/LowQuality: , 6/Erroneous: }>
         * @param {unknown} _identity [U8; 32]
         * @instance
         */
        provideJudgement: async (signer: ethers.Signer, _reg_index: unknown, _target: unknown, _judgement: unknown, _identity: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', false, {
                reg_index: _reg_index,
                target: _target,
                judgement: _judgement,
                identity: _identity,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/provideJudgement}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        provideJudgementH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Remove an account's identity and sub-account information and slash the deposits.
         * 
         * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
         * `Slash`. Verification request deposits are not returned; they should be cancelled
         * manually using `cancel_request`.
         * 
         * The dispatch origin for this call must match `T::ForceOrigin`.
         * 
         * - `target`: the account whose identity the judgement is upon. This must be an account
         *   with a registered identity.
         * 
         * Emits `IdentityKilled` if successful.
         * 
         * ## Complexity
         * - `O(R + S + X)`
         *   - where `R` registrar-count (governance-bounded).
         *   - where `S` subs-count (hard- and deposit-bounded).
         *   - where `X` additional-field-count (deposit-bounded and code-bounded).
         *
         * @param {unknown} _target [U8; 20]
         * @instance
         */
        killIdentity: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'killIdentity', false, {
                target: _target,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/killIdentity}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        killIdentityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Add the given account to the sender's subs.
         * 
         * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         * to the sender.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a registered
         * sub identity of `sub`.
         *
         * @param {unknown} _sub [U8; 20]
         * @param {unknown} _data Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>
         * @instance
         */
        addSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addSub', false, {
                sub: _sub,
                data: _data,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/addSub}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        addSubH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Alter the associated name of the given sub-account.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a registered
         * sub identity of `sub`.
         *
         * @param {unknown} _sub [U8; 20]
         * @param {unknown} _data Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>
         * @instance
         */
        renameSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'renameSub', false, {
                sub: _sub,
                data: _data,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/renameSub}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        renameSubH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Remove the given account from the sender's subs.
         * 
         * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         * to the sender.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a registered
         * sub identity of `sub`.
         *
         * @param {unknown} _sub [U8; 20]
         * @instance
         */
        removeSub: async (signer: ethers.Signer, _sub: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'removeSub', false, {
                sub: _sub,
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/removeSub}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeSubH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
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
         * Remove the sender as a sub-account.
         * 
         * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         * to the sender (*not* the original depositor).
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a registered
         * super-identity.
         * 
         * NOTE: This should not normally be used, but is provided in the case that the non-
         * controller of an account is maliciously registered as a sub-account.
         *
         * @instance
         */
        quitSub: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'quitSub', false, {
           });
        },

        /**
         * Similar to {@link: pangoro/identity/calls/quitSub}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        quitSubH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
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


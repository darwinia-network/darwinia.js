import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

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
         * # <weight>
         * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
         * - One storage mutation (codec `O(R)`).
         * - One event.
         * # </weight>
         *
         * @param _account: [U8; 32]
         */
        addRegistrar: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', false, _account);
        },

        addRegistrarD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', true, data);
        },

        addRegistrarCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'addRegistrar', {
                account: _account,
            });
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
         * # <weight>
         * - `O(X + X' + R)`
         *   - where `X` additional-field-count (deposit-bounded and code-bounded)
         *   - where `R` judgements-count (registrar-count-bounded)
         * - One balance reserve operation.
         * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
         * - One event.
         * # </weight>
         *
         * @param _info: {additional: Vec<(Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>)>, display: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, legal: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, web: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, riot: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, email: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, pgp_fingerprint: Enum<{0/None: , 1/Some: [U8; 20]}>, image: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>, twitter: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>}
         */
        setIdentity: async (signer: ethers.Signer, _info: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setIdentity', false, _info);
        },

        setIdentityD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setIdentity', true, data);
        },

        setIdentityCall: (_info: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setIdentity', {
                info: _info,
            });
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
         * # <weight>
         * - `O(P + S)`
         *   - where `P` old-subs-count (hard- and deposit-bounded).
         *   - where `S` subs-count (hard- and deposit-bounded).
         * - At most one balance operations.
         * - DB:
         *   - `P + S` storage mutations (codec complexity `O(1)`)
         *   - One storage read (codec complexity `O(P)`).
         *   - One storage write (codec complexity `O(S)`).
         *   - One storage-exists (`IdentityOf::contains_key`).
         * # </weight>
         *
         * @param _subs: Vec<([U8; 32], Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>)>
         */
        setSubs: async (signer: ethers.Signer, _subs: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setSubs', false, _subs);
        },

        setSubsD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setSubs', true, data);
        },

        setSubsCall: (_subs: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setSubs', {
                subs: _subs,
            });
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
         * # <weight>
         * - `O(R + S + X)`
         *   - where `R` registrar-count (governance-bounded).
         *   - where `S` subs-count (hard- and deposit-bounded).
         *   - where `X` additional-field-count (deposit-bounded and code-bounded).
         * - One balance-unreserve operation.
         * - `2` storage reads and `S + 2` storage deletions.
         * - One event.
         * # </weight>
         *
         */
        clearIdentity: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', false);
        },

        clearIdentityD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', true);
        },

        clearIdentityCall: () => {
            return buildRuntimeCall(metadata, 'Identity', 'clearIdentity', {
            });
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
         * # <weight>
         * - `O(R + X)`.
         * - One balance-reserve operation.
         * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
         * - One event.
         * # </weight>
         *
         * @param _reg_index: Compact<U32>
         * @param _max_fee: Compact<U128>
         */
        requestJudgement: async (signer: ethers.Signer, _reg_index: unknown, _max_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', false, _reg_index, _max_fee);
        },

        requestJudgementD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', true, data);
        },

        requestJudgementCall: (_reg_index: unknown, _max_fee: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'requestJudgement', {
                reg_index: _reg_index,
                max_fee: _max_fee,
            });
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
         * # <weight>
         * - `O(R + X)`.
         * - One balance-reserve operation.
         * - One storage mutation `O(R + X)`.
         * - One event
         * # </weight>
         *
         * @param _reg_index: U32
         */
        cancelRequest: async (signer: ethers.Signer, _reg_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', false, _reg_index);
        },

        cancelRequestD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', true, data);
        },

        cancelRequestCall: (_reg_index: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'cancelRequest', {
                reg_index: _reg_index,
            });
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
         * # <weight>
         * - `O(R)`.
         * - One storage mutation `O(R)`.
         * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
         * # </weight>
         *
         * @param _index: Compact<U32>
         * @param _fee: Compact<U128>
         */
        setFee: async (signer: ethers.Signer, _index: unknown, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFee', false, _index, _fee);
        },

        setFeeD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFee', true, data);
        },

        setFeeCall: (_index: unknown, _fee: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setFee', {
                index: _index,
                fee: _fee,
            });
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
         * # <weight>
         * - `O(R)`.
         * - One storage mutation `O(R)`.
         * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
         * # </weight>
         *
         * @param _index: Compact<U32>
         * @param _new: [U8; 32]
         */
        setAccountId: async (signer: ethers.Signer, _index: unknown, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setAccountId', false, _index, _new);
        },

        setAccountIdD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setAccountId', true, data);
        },

        setAccountIdCall: (_index: unknown, _new: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setAccountId', {
                index: _index,
                new: _new,
            });
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
         * # <weight>
         * - `O(R)`.
         * - One storage mutation `O(R)`.
         * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
         * # </weight>
         *
         * @param _index: Compact<U32>
         * @param _fields: U64
         */
        setFields: async (signer: ethers.Signer, _index: unknown, _fields: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFields', false, _index, _fields);
        },

        setFieldsD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFields', true, data);
        },

        setFieldsCall: (_index: unknown, _fields: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'setFields', {
                index: _index,
                fields: _fields,
            });
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
         * 
         * Emits `JudgementGiven` if successful.
         * 
         * # <weight>
         * - `O(R + X)`.
         * - One balance-transfer operation.
         * - Up to one account-lookup operation.
         * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
         * - One event.
         * # </weight>
         *
         * @param _reg_index: Compact<U32>
         * @param _target: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _judgement: Enum<{0/Unknown: , 1/FeePaid: U128, 2/Reasonable: , 3/KnownGood: , 4/OutOfDate: , 5/LowQuality: , 6/Erroneous: }>
         */
        provideJudgement: async (signer: ethers.Signer, _reg_index: unknown, _target: unknown, _judgement: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', false, _reg_index, _target, _judgement);
        },

        provideJudgementD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', true, data);
        },

        provideJudgementCall: (_reg_index: unknown, _target: unknown, _judgement: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'provideJudgement', {
                reg_index: _reg_index,
                target: _target,
                judgement: _judgement,
            });
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
         * # <weight>
         * - `O(R + S + X)`.
         * - One balance-reserve operation.
         * - `S + 2` storage mutations.
         * - One event.
         * # </weight>
         *
         * @param _target: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         */
        killIdentity: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'killIdentity', false, _target);
        },

        killIdentityD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'killIdentity', true, data);
        },

        killIdentityCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'killIdentity', {
                target: _target,
            });
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
         * @param _sub: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _data: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>
         */
        addSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addSub', false, _sub, _data);
        },

        addSubD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addSub', true, data);
        },

        addSubCall: (_sub: unknown, _data: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'addSub', {
                sub: _sub,
                data: _data,
            });
        },

        /**
         * Alter the associated name of the given sub-account.
         * 
         * The dispatch origin for this call must be _Signed_ and the sender must have a registered
         * sub identity of `sub`.
         *
         * @param _sub: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _data: Enum<{0/None: , 1/Raw0: [undefined; 0], 2/Raw1: [U8; 1], 3/Raw2: [U8; 2], 4/Raw3: [U8; 3], 5/Raw4: [U8; 4], 6/Raw5: [U8; 5], 7/Raw6: [U8; 6], 8/Raw7: [U8; 7], 9/Raw8: [U8; 8], 10/Raw9: [U8; 9], 11/Raw10: [U8; 10], 12/Raw11: [U8; 11], 13/Raw12: [U8; 12], 14/Raw13: [U8; 13], 15/Raw14: [U8; 14], 16/Raw15: [U8; 15], 17/Raw16: [U8; 16], 18/Raw17: [U8; 17], 19/Raw18: [U8; 18], 20/Raw19: [U8; 19], 21/Raw20: [U8; 20], 22/Raw21: [U8; 21], 23/Raw22: [U8; 22], 24/Raw23: [U8; 23], 25/Raw24: [U8; 24], 26/Raw25: [U8; 25], 27/Raw26: [U8; 26], 28/Raw27: [U8; 27], 29/Raw28: [U8; 28], 30/Raw29: [U8; 29], 31/Raw30: [U8; 30], 32/Raw31: [U8; 31], 33/Raw32: [U8; 32], 34/BlakeTwo256: [U8; 32], 35/Sha256: [U8; 32], 36/Keccak256: [U8; 32], 37/ShaThree256: [U8; 32]}>
         */
        renameSub: async (signer: ethers.Signer, _sub: unknown, _data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'renameSub', false, _sub, _data);
        },

        renameSubD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'renameSub', true, data);
        },

        renameSubCall: (_sub: unknown, _data: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'renameSub', {
                sub: _sub,
                data: _data,
            });
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
         * @param _sub: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         */
        removeSub: async (signer: ethers.Signer, _sub: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'removeSub', false, _sub);
        },

        removeSubD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'removeSub', true, data);
        },

        removeSubCall: (_sub: unknown) => {
            return buildRuntimeCall(metadata, 'Identity', 'removeSub', {
                sub: _sub,
            });
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
         */
        quitSub: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'quitSub', false);
        },

        quitSubD: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'quitSub', true);
        },

        quitSubCall: () => {
            return buildRuntimeCall(metadata, 'Identity', 'quitSub', {
            });
        },

    }
}

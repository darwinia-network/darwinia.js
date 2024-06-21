/**
 * This is the doc comment for pallet `Referenda`'s calls. 
 * 
 * `Referenda`'s storages: {@link: module:darwinia/referenda/storages}
 *
 * @module darwinia/referenda/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getReferenda = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::submit`].
         *
         * @param {unknown} _proposal_origin Enum<{0/system: Enum<{0/Root: , 1/Signed: [U8; 20], 2/None: }>, 19/Council: Enum<{0/Members: (U32, U32), 1/Member: [U8; 20], 2/_Phantom: }>, 20/TechnicalCommittee: Enum<{0/Members: (U32, U32), 1/Member: [U8; 20], 2/_Phantom: }>, 50/Origins: Enum<{0/WhitelistedCaller: , 1/GeneralAdmin: , 2/ReferendumCanceller: , 3/ReferendumKiller: , 4/MediumSpender: , 5/BigSpender: }>, 33/PolkadotXcm: Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, 1/Response: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}}>, 34/CumulusXcm: Enum<{0/Relay: , 1/SiblingParachain: U32}>, 44/EthereumXcm: Enum<{0/XcmEthereumTransaction: [U8; 20]}>, 36/Ethereum: Enum<{0/EthereumTransaction: [U8; 20]}>, 38/EthTxForwarder: Enum<{0/ForwardEth: [U8; 20]}>, 9/Void: Enum<{}>}>
         * @param {unknown} _proposal Enum<{0/Legacy: {hash: [U8; 32]}, 1/Inline: Vec<U8>, 2/Lookup: {hash: [U8; 32], len: U32}}>
         * @param {unknown} _enactment_moment Enum<{0/At: U32, 1/After: U32}>
         * @instance
         */
        submit: async (signer: ethers.Signer, _proposal_origin: unknown, _proposal: unknown, _enactment_moment: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'submit', false, {
                proposal_origin: _proposal_origin,
                proposal: _proposal,
                enactment_moment: _enactment_moment,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/submit}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        submitH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'submit', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitCall: (_proposal_origin: unknown, _proposal: unknown, _enactment_moment: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'submit', {
                proposal_origin: _proposal_origin,
                proposal: _proposal,
                enactment_moment: _enactment_moment,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSubmitCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSubmitCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'submit', argsBytes)
        },

        /**
         * See [`Pallet::place_decision_deposit`].
         *
         * @param {unknown} _index U32
         * @instance
         */
        placeDecisionDeposit: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'placeDecisionDeposit', false, {
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/placeDecisionDeposit}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        placeDecisionDepositH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'placeDecisionDeposit', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildPlaceDecisionDepositCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'placeDecisionDeposit', {
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildPlaceDecisionDepositCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildPlaceDecisionDepositCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'placeDecisionDeposit', argsBytes)
        },

        /**
         * See [`Pallet::refund_decision_deposit`].
         *
         * @param {unknown} _index U32
         * @instance
         */
        refundDecisionDeposit: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'refundDecisionDeposit', false, {
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/refundDecisionDeposit}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        refundDecisionDepositH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'refundDecisionDeposit', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRefundDecisionDepositCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'refundDecisionDeposit', {
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRefundDecisionDepositCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRefundDecisionDepositCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'refundDecisionDeposit', argsBytes)
        },

        /**
         * See [`Pallet::cancel`].
         *
         * @param {unknown} _index U32
         * @instance
         */
        cancel: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'cancel', false, {
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/cancel}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        cancelH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'cancel', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCancelCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'cancel', {
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCancelCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCancelCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'cancel', argsBytes)
        },

        /**
         * See [`Pallet::kill`].
         *
         * @param {unknown} _index U32
         * @instance
         */
        kill: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'kill', false, {
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/kill}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        killH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'kill', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildKillCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'kill', {
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildKillCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildKillCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'kill', argsBytes)
        },

        /**
         * See [`Pallet::nudge_referendum`].
         *
         * @param {unknown} _index U32
         * @instance
         */
        nudgeReferendum: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'nudgeReferendum', false, {
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/nudgeReferendum}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        nudgeReferendumH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'nudgeReferendum', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildNudgeReferendumCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'nudgeReferendum', {
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildNudgeReferendumCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildNudgeReferendumCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'nudgeReferendum', argsBytes)
        },

        /**
         * See [`Pallet::one_fewer_deciding`].
         *
         * @param {unknown} _track U16
         * @instance
         */
        oneFewerDeciding: async (signer: ethers.Signer, _track: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'oneFewerDeciding', false, {
                track: _track,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/oneFewerDeciding}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        oneFewerDecidingH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'oneFewerDeciding', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildOneFewerDecidingCall: (_track: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'oneFewerDeciding', {
                track: _track,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildOneFewerDecidingCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildOneFewerDecidingCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'oneFewerDeciding', argsBytes)
        },

        /**
         * See [`Pallet::refund_submission_deposit`].
         *
         * @param {unknown} _index U32
         * @instance
         */
        refundSubmissionDeposit: async (signer: ethers.Signer, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'refundSubmissionDeposit', false, {
                index: _index,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/refundSubmissionDeposit}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        refundSubmissionDepositH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'refundSubmissionDeposit', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRefundSubmissionDepositCall: (_index: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'refundSubmissionDeposit', {
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRefundSubmissionDepositCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRefundSubmissionDepositCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'refundSubmissionDeposit', argsBytes)
        },

        /**
         * See [`Pallet::set_metadata`].
         *
         * @param {unknown} _index U32
         * @param {unknown} _maybe_hash Enum<{0/None: , 1/Some: [U8; 32]}>
         * @instance
         */
        setMetadata: async (signer: ethers.Signer, _index: unknown, _maybe_hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'setMetadata', false, {
                index: _index,
                maybe_hash: _maybe_hash,
           });
        },

        /**
         * Similar to {@link: darwinia/referenda/calls/setMetadata}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        setMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Referenda', 'setMetadata', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildSetMetadataCall: (_index: unknown, _maybe_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Referenda', 'setMetadata', {
                index: _index,
                maybe_hash: _maybe_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildSetMetadataCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildSetMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Referenda', 'setMetadata', argsBytes)
        },

    }
}


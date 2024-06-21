/**
 * This is the doc comment for pallet `ConvictionVoting`'s calls. 
 * 
 * `ConvictionVoting`'s storages: {@link: module:crab/convictionVoting/storages}
 *
 * @module crab/convictionVoting/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getConvictionVoting = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * See [`Pallet::vote`].
         *
         * @param {unknown} _poll_index Compact<U32>
         * @param {unknown} _vote Enum<{0/Standard: {vote: U8, balance: U128}, 1/Split: {aye: U128, nay: U128}, 2/SplitAbstain: {aye: U128, nay: U128, abstain: U128}}>
         * @instance
         */
        vote: async (signer: ethers.Signer, _poll_index: unknown, _vote: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'vote', false, {
                poll_index: _poll_index,
                vote: _vote,
           });
        },

        /**
         * Similar to {@link: crab/convictionVoting/calls/vote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        voteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'vote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCall: (_poll_index: unknown, _vote: unknown) => {
            return buildRuntimeCall(metadata, 'ConvictionVoting', 'vote', {
                poll_index: _poll_index,
                vote: _vote,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ConvictionVoting', 'vote', argsBytes)
        },

        /**
         * See [`Pallet::delegate`].
         *
         * @param {unknown} _class U16
         * @param {unknown} _to [U8; 20]
         * @param {unknown} _conviction Enum<{0/None: , 1/Locked1x: , 2/Locked2x: , 3/Locked3x: , 4/Locked4x: , 5/Locked5x: , 6/Locked6x: }>
         * @param {unknown} _balance U128
         * @instance
         */
        delegate: async (signer: ethers.Signer, _class: unknown, _to: unknown, _conviction: unknown, _balance: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'delegate', false, {
                class: _class,
                to: _to,
                conviction: _conviction,
                balance: _balance,
           });
        },

        /**
         * Similar to {@link: crab/convictionVoting/calls/delegate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        delegateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'delegate', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildDelegateCall: (_class: unknown, _to: unknown, _conviction: unknown, _balance: unknown) => {
            return buildRuntimeCall(metadata, 'ConvictionVoting', 'delegate', {
                class: _class,
                to: _to,
                conviction: _conviction,
                balance: _balance,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildDelegateCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildDelegateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ConvictionVoting', 'delegate', argsBytes)
        },

        /**
         * See [`Pallet::undelegate`].
         *
         * @param {unknown} _class U16
         * @instance
         */
        undelegate: async (signer: ethers.Signer, _class: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'undelegate', false, {
                class: _class,
           });
        },

        /**
         * Similar to {@link: crab/convictionVoting/calls/undelegate}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        undelegateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'undelegate', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUndelegateCall: (_class: unknown) => {
            return buildRuntimeCall(metadata, 'ConvictionVoting', 'undelegate', {
                class: _class,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUndelegateCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUndelegateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ConvictionVoting', 'undelegate', argsBytes)
        },

        /**
         * See [`Pallet::unlock`].
         *
         * @param {unknown} _class U16
         * @param {unknown} _target [U8; 20]
         * @instance
         */
        unlock: async (signer: ethers.Signer, _class: unknown, _target: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'unlock', false, {
                class: _class,
                target: _target,
           });
        },

        /**
         * Similar to {@link: crab/convictionVoting/calls/unlock}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        unlockH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'unlock', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildUnlockCall: (_class: unknown, _target: unknown) => {
            return buildRuntimeCall(metadata, 'ConvictionVoting', 'unlock', {
                class: _class,
                target: _target,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildUnlockCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildUnlockCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ConvictionVoting', 'unlock', argsBytes)
        },

        /**
         * See [`Pallet::remove_vote`].
         *
         * @param {unknown} _class Enum<{0/None: , 1/Some: U16}>
         * @param {unknown} _index U32
         * @instance
         */
        removeVote: async (signer: ethers.Signer, _class: unknown, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'removeVote', false, {
                class: _class,
                index: _index,
           });
        },

        /**
         * Similar to {@link: crab/convictionVoting/calls/removeVote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeVoteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'removeVote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveVoteCall: (_class: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'ConvictionVoting', 'removeVote', {
                class: _class,
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ConvictionVoting', 'removeVote', argsBytes)
        },

        /**
         * See [`Pallet::remove_other_vote`].
         *
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _class U16
         * @param {unknown} _index U32
         * @instance
         */
        removeOtherVote: async (signer: ethers.Signer, _target: unknown, _class: unknown, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'removeOtherVote', false, {
                target: _target,
                class: _class,
                index: _index,
           });
        },

        /**
         * Similar to {@link: crab/convictionVoting/calls/removeOtherVote}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeOtherVoteH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'ConvictionVoting', 'removeOtherVote', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveOtherVoteCall: (_target: unknown, _class: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'ConvictionVoting', 'removeOtherVote', {
                target: _target,
                class: _class,
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveOtherVoteCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveOtherVoteCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ConvictionVoting', 'removeOtherVote', argsBytes)
        },

    }
}


import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getBalances = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Transfer some liquid free balance to another account.
         * 
         * `transfer` will set the `FreeBalance` of the sender and receiver.
         * If the sender's account is below the existential deposit as a result
         * of the transfer, the account will be reaped.
         * 
         * The dispatch origin for this call must be `Signed` by the transactor.
         * 
         * # <weight>
         * - Dependent on arguments but not critical, given proper implementations for input config
         *   types. See related functions below.
         * - It contains a limited number of reads and writes internally and no complex
         *   computation.
         * 
         * Related functions:
         * 
         *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
         *   - Transferring balances to accounts that did not exist before will cause
         *     `T::OnNewAccount::on_new_account` to be called.
         *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
         *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
         *     that the transfer will not kill the origin account.
         * 
         * # </weight>
         *
         * @param _dest: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _value: Compact<U128>
         */
        transfer: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transfer', false, _dest, _value);
        },

        transferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transfer', true, data);
        },

        transferCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transfer', {
                dest: _dest,
                value: _value,
            });
        },

        /**
         * Set the balances of a given account.
         * 
         * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
         * also alter the total issuance of the system (`TotalIssuance`) appropriately.
         * If the new free or reserved balance is below the existential deposit,
         * it will reset the account nonce (`frame_system::AccountNonce`).
         * 
         * The dispatch origin for this call is `root`.
         *
         * @param _who: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _new_free: Compact<U128>
         * @param _new_reserved: Compact<U128>
         */
        setBalance: async (signer: ethers.Signer, _who: unknown, _new_free: unknown, _new_reserved: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'setBalance', false, _who, _new_free, _new_reserved);
        },

        setBalanceD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'setBalance', true, data);
        },

        setBalanceCall: (_who: unknown, _new_free: unknown, _new_reserved: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'setBalance', {
                who: _who,
                new_free: _new_free,
                new_reserved: _new_reserved,
            });
        },

        /**
         * Exactly as `transfer`, except the origin must be root and the source account may be
         * specified.
         * # <weight>
         * - Same as transfer, but additional read and write because the source account is not
         *   assumed to be in the overlay.
         * # </weight>
         *
         * @param _source: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _dest: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _value: Compact<U128>
         */
        forceTransfer: async (signer: ethers.Signer, _source: unknown, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceTransfer', false, _source, _dest, _value);
        },

        forceTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceTransfer', true, data);
        },

        forceTransferCall: (_source: unknown, _dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'forceTransfer', {
                source: _source,
                dest: _dest,
                value: _value,
            });
        },

        /**
         * Same as the [`transfer`] call, but with a check that the transfer will not kill the
         * origin account.
         * 
         * 99% of the time you want [`transfer`] instead.
         * 
         * [`transfer`]: struct.Pallet.html#method.transfer
         *
         * @param _dest: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _value: Compact<U128>
         */
        transferKeepAlive: async (signer: ethers.Signer, _dest: unknown, _value: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferKeepAlive', false, _dest, _value);
        },

        transferKeepAliveD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferKeepAlive', true, data);
        },

        transferKeepAliveCall: (_dest: unknown, _value: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transferKeepAlive', {
                dest: _dest,
                value: _value,
            });
        },

        /**
         * Transfer the entire transferable balance from the caller account.
         * 
         * NOTE: This function only attempts to transfer _transferable_ balances. This means that
         * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
         * transferred by this function. To ensure that this function results in a killed account,
         * you might need to prepare the account by removing any reference counters, storage
         * deposits, etc...
         * 
         * The dispatch origin of this call must be Signed.
         * 
         * - `dest`: The recipient of the transfer.
         * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
         *   of the funds the account has, causing the sender account to be killed (false), or
         *   transfer everything except at least the existential deposit, which will guarantee to
         *   keep the sender account alive (true). # <weight>
         * - O(1). Just like transfer, but reading the user's transferable balance first.
         *   #</weight>
         *
         * @param _dest: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _keep_alive: Bool
         */
        transferAll: async (signer: ethers.Signer, _dest: unknown, _keep_alive: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferAll', false, _dest, _keep_alive);
        },

        transferAllD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'transferAll', true, data);
        },

        transferAllCall: (_dest: unknown, _keep_alive: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'transferAll', {
                dest: _dest,
                keep_alive: _keep_alive,
            });
        },

        /**
         * Unreserve some balance from a user by force.
         * 
         * Can only be called by ROOT.
         *
         * @param _who: Enum<{0/Id: [U8; 32], 1/Index: Compact<()>, 2/Raw: Vec<U8>, 3/Address32: [U8; 32], 4/Address20: [U8; 20]}>
         * @param _amount: U128
         */
        forceUnreserve: async (signer: ethers.Signer, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceUnreserve', false, _who, _amount);
        },

        forceUnreserveD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Balances', 'forceUnreserve', true, data);
        },

        forceUnreserveCall: (_who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Balances', 'forceUnreserve', {
                who: _who,
                amount: _amount,
            });
        },

    }
}

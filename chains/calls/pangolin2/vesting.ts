import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getVesting = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
	 */
        vest: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vest', false);
        },

        vestD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vest', true, data);
        },

        vestCall: () => {
            return buildRuntimeCall(metadata, 'Vesting', 'vest', {
            });
        },

        /**
         * @param _target: [U8; 20]
	 */
        vestOther: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestOther', false, _target);
        },

        vestOtherD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestOther', true, data);
        },

        vestOtherCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'vestOther', {
                target: _target,
            });
        },

        /**
         * @param _target: [U8; 20]
         * @param _schedule: {locked: U128, per_block: U128, starting_block: U32}
	 */
        vestedTransfer: async (signer: ethers.Signer, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', false, _target, _schedule);
        },

        vestedTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'vestedTransfer', true, data);
        },

        vestedTransferCall: (_target: unknown, _schedule: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'vestedTransfer', {
                target: _target,
                schedule: _schedule,
            });
        },

        /**
         * @param _source: [U8; 20]
         * @param _target: [U8; 20]
         * @param _schedule: {locked: U128, per_block: U128, starting_block: U32}
	 */
        forceVestedTransfer: async (signer: ethers.Signer, _source: unknown, _target: unknown, _schedule: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', false, _source, _target, _schedule);
        },

        forceVestedTransferD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'forceVestedTransfer', true, data);
        },

        forceVestedTransferCall: (_source: unknown, _target: unknown, _schedule: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'forceVestedTransfer', {
                source: _source,
                target: _target,
                schedule: _schedule,
            });
        },

        /**
         * @param _schedule1_index: U32
         * @param _schedule2_index: U32
	 */
        mergeSchedules: async (signer: ethers.Signer, _schedule1_index: unknown, _schedule2_index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', false, _schedule1_index, _schedule2_index);
        },

        mergeSchedulesD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Vesting', 'mergeSchedules', true, data);
        },

        mergeSchedulesCall: (_schedule1_index: unknown, _schedule2_index: unknown) => {
            return buildRuntimeCall(metadata, 'Vesting', 'mergeSchedules', {
                schedule1_index: _schedule1_index,
                schedule2_index: _schedule2_index,
            });
        },

    }
}

import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getTimestamp = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _now: Compact<U64>
	 */
        set: async (signer: ethers.Signer, _now: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Timestamp', 'set', false, _now);
        },

        setD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Timestamp', 'set', true, data);
        },

        setCall: (_now: unknown) => {
            return buildRuntimeCall(metadata, 'Timestamp', 'set', {
                now: _now,
            });
        },

    }
}

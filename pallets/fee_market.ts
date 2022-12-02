import {providers} from "ethers";
import {Metadata} from "@polkadot/types";

import {getStorage1} from "../helpers";

type BaseProvider = providers.BaseProvider;

async function assignedRelayers(provider: BaseProvider, metadata: Metadata, prefix: string): Promise<string | null> {
    return await getStorage1(provider, metadata, prefix, 'AssignedRelayers');
}

async function orders(provider: BaseProvider, metadata: Metadata, prefix: string, input: [[Uint8Array, number]]): Promise<string | null> {
    return await getStorage1(provider, metadata, prefix, 'Orders', input);
}

export const feeMarket = {
    assignedRelayers,
    orders
};
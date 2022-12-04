import {providers} from "ethers";
import {Metadata} from "@polkadot/types";

import {getStorage} from "../storage";

type BaseProvider = providers.BaseProvider;

async function assignedRelayers(provider: BaseProvider, metadata: Metadata, prefix: string): Promise<string | null> {
    return await getStorage(provider, metadata, prefix, 'AssignedRelayers');
}

async function orders(provider: BaseProvider, metadata: Metadata, prefix: string, input: [Array<number>, number]): Promise<string | null> {
    return await getStorage(provider, metadata, prefix, 'Orders', input);
}

export const feeMarket = {
    assignedRelayers,
    orders
};
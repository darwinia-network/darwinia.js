import { u8aToU8a } from '@polkadot/util';
import { TypeRegistry } from "@polkadot/types";
import { providers } from "ethers";
type BaseProvider = providers.BaseProvider;

import { ValueMeta, getStorage, blake2_128Concat } from "../helpers";

async function assignedRelayers(provider: BaseProvider, registry: TypeRegistry, prefix: string): Promise<string | null> {
    const valueMeta: ValueMeta = {
        valueType: 'Vec<PalletFeeMarketRelayer>',
        optional: true,
        fallback: u8aToU8a("0x00")
    }
    return await getStorage(provider, registry, prefix, 'AssignedRelayers', valueMeta);
}

export const feeMarket = {
    assignedRelayers
};
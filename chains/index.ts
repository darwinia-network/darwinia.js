import * as s from "./storages";
import * as c from "./calls";
import * as m from "./metadatas";

import { Metadata } from "@polkadot/types";
import { providers } from "ethers";

export const staticMetadata = m;
export const clientBuilder = {
    buildPangolin2Client: (provider: providers.BaseProvider, metadata: Metadata) => {
        return {
            calls: c.buildPangolin2CallsClient(provider, metadata),
            storages: s.buildPangolin2StoragesClient(provider, metadata)
        };
    },
    buildPangolinClient: (provider: providers.BaseProvider, metadata: Metadata) => {
        return {
            calls: c.buildPangolinCallsClient(provider, metadata),
            storages: s.buildPangolinStoragesClient(provider, metadata)
        };
    },
    buildPangoroClient: (provider: providers.BaseProvider, metadata: Metadata) => {
        return {
            calls: c.buildPangoroCallsClient(provider, metadata),
            storages: s.buildPangoroStoragesClient(provider, metadata)
        };
    },
    buildCrabClient: (provider: providers.BaseProvider, metadata: Metadata) => {
        return {
            calls: c.buildCrabCallsClient(provider, metadata),
            storages: s.buildCrabStoragesClient(provider, metadata)
        };
    },
    buildDarwiniaClient: (provider: providers.BaseProvider, metadata: Metadata) => {
        return {
            calls: c.buildDarwiniaCallsClient(provider, metadata),
            storages: s.buildDarwiniaStoragesClient(provider, metadata)
        };
    }
};

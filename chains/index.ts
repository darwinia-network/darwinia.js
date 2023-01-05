import * as s from "./storages";
import * as c from "./calls";
import * as m from "./metadatas";

import { providers } from "ethers";
import { buildMetadata } from "../helpers";

export const staticMetadata = m;
export const clientBuilder = {
    buildPangolin2Client: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(staticMetadata.pangolin2MetaStatic);
        return {
            calls: c.buildPangolin2CallsClient(provider, metadata),
            storages: s.buildPangolin2StoragesClient(provider, metadata)
        };
    },
    buildPangolinClient: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(staticMetadata.pangolinMetaStatic);
        return {
            calls: c.buildPangolinCallsClient(provider, metadata),
            storages: s.buildPangolinStoragesClient(provider, metadata)
        };
    },
    buildPangoroClient: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(staticMetadata.pangoroMetaStatic);
        return {
            calls: c.buildPangoroCallsClient(provider, metadata),
            storages: s.buildPangoroStoragesClient(provider, metadata)
        };
    },
    buildCrabClient: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(staticMetadata.crabMetaStatic);
        return {
            calls: c.buildCrabCallsClient(provider, metadata),
            storages: s.buildCrabStoragesClient(provider, metadata)
        };
    },
    buildDarwiniaClient: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(staticMetadata.darwiniaMetaStatic);
        return {
            calls: c.buildDarwiniaCallsClient(provider, metadata),
            storages: s.buildDarwiniaStoragesClient(provider, metadata)
        };
    }
};

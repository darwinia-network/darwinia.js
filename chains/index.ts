import { pangolin2StaticMetadata, buildPangolin2CallsClient, buildPangolin2StoragesClient } from "./pangolin2";
export { pangolin2StaticMetadata } from "./pangolin2";
import { pangolinStaticMetadata, buildPangolinCallsClient, buildPangolinStoragesClient } from "./pangolin";
export { pangolinStaticMetadata } from "./pangolin";
import { pangoroStaticMetadata, buildPangoroCallsClient, buildPangoroStoragesClient } from "./pangoro";
export { pangoroStaticMetadata } from "./pangoro";
import { crabStaticMetadata, buildCrabCallsClient, buildCrabStoragesClient } from "./crab";
export { crabStaticMetadata } from "./crab";
import { darwiniaStaticMetadata, buildDarwiniaCallsClient, buildDarwiniaStoragesClient } from "./darwinia";
export { darwiniaStaticMetadata } from "./darwinia";

import { providers } from "ethers";
import { buildMetadata } from "../index";

export const clientBuilder = {
    buildPangolin2Client: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(pangolin2StaticMetadata);
        return {
            calls: buildPangolin2CallsClient(provider, metadata),
            storages: buildPangolin2StoragesClient(provider, metadata),
            metadata: metadata
        };
    },
    buildPangolinClient: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(pangolinStaticMetadata);
        return {
            calls: buildPangolinCallsClient(provider, metadata),
            storages: buildPangolinStoragesClient(provider, metadata),
            metadata: metadata
        };
    },
    buildPangoroClient: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(pangoroStaticMetadata);
        return {
            calls: buildPangoroCallsClient(provider, metadata),
            storages: buildPangoroStoragesClient(provider, metadata),
            metadata: metadata
        };
    },
    buildCrabClient: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(crabStaticMetadata);
        return {
            calls: buildCrabCallsClient(provider, metadata),
            storages: buildCrabStoragesClient(provider, metadata),
            metadata: metadata
        };
    },
    buildDarwiniaClient: (provider: providers.BaseProvider) => {
        const metadata = buildMetadata(darwiniaStaticMetadata);
        return {
            calls: buildDarwiniaCallsClient(provider, metadata),
            storages: buildDarwiniaStoragesClient(provider, metadata),
            metadata: metadata
        };
    }
};

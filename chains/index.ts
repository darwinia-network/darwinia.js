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
  buildPangolinClient: (provider: providers.BaseProvider) => {
    const metadata = buildMetadata(pangolinStaticMetadata);
    return {
      calls: buildPangolinCallsClient(provider, metadata),
      storages: buildPangolinStoragesClient(provider, metadata),
      metadata: metadata,
      provider: provider
    };
  },
  buildPangoroClient: (provider: providers.BaseProvider) => {
    const metadata = buildMetadata(pangoroStaticMetadata);
    return {
      calls: buildPangoroCallsClient(provider, metadata),
      storages: buildPangoroStoragesClient(provider, metadata),
      metadata: metadata,
      provider: provider
    };
  },
  buildCrabClient: (provider: providers.BaseProvider) => {
    const metadata = buildMetadata(crabStaticMetadata);
    return {
      calls: buildCrabCallsClient(provider, metadata),
      storages: buildCrabStoragesClient(provider, metadata),
      metadata: metadata,
      provider: provider
    };
  },
  buildDarwiniaClient: (provider: providers.BaseProvider) => {
    const metadata = buildMetadata(darwiniaStaticMetadata);
    return {
      calls: buildDarwiniaCallsClient(provider, metadata),
      storages: buildDarwiniaStoragesClient(provider, metadata),
      metadata: metadata,
      provider: provider
    };
  }
};

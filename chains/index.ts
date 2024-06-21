import { koiStaticMetadata, buildKoiCallsClient, buildKoiStoragesClient } from "./koi";
export { koiStaticMetadata } from "./koi";

import { crabStaticMetadata, buildCrabCallsClient, buildCrabStoragesClient } from "./crab";
export { crabStaticMetadata } from "./crab";

import { darwiniaStaticMetadata, buildDarwiniaCallsClient, buildDarwiniaStoragesClient } from "./darwinia";
export { darwiniaStaticMetadata } from "./darwinia";

import type { providers } from "ethers";
import { buildMetadata } from "../index";

export const clientBuilder = {
  buildKoiClient: (provider: providers.BaseProvider) => {
    const metadata = buildMetadata(koiStaticMetadata);
    return {
      calls: buildKoiCallsClient(provider, metadata),
      storages: buildKoiStoragesClient(provider, metadata),
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

// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainUpgradesRaw, ChainUpgrades } from './types';

import BN from 'bn.js';
import { hexToU8a } from '@polkadot/util';

import darwiniaCrab from './darwinia-crab';

function rawToFinal ({ genesisHash, versions }: ChainUpgradesRaw): ChainUpgrades {
  return {
    genesisHash: hexToU8a(genesisHash),
    versions: versions.map(([blockNumber, specVersion]) => ({
      blockNumber: new BN(blockNumber),
      specVersion: new BN(specVersion)
    }))
  };
}

// Type overrides for specific spec types & versions as given in runtimeVersion
const upgrades: ChainUpgrades[] = [
  rawToFinal(darwiniaCrab)
];

export default upgrades;

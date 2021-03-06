// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  rpc: {

  },
  types: {
    RelayHeaderId: 'EthereumBlockNumber',
    RelayHeaderParcel: 'EthereumRelayHeaderParcel',
    RelayProofs: 'EthereumRelayProofs',
    RelayAffirmationId: {
      relayHeaderId: 'EthereumBlockNumber',
      round: 'u32',
      index: 'u32'
    },
    RelayAffirmationT: {
      relayer: 'AccountId',
      relayHeaderParcels: 'EthereumRelayHeaderParcel',
      bond: 'Balance',
      maybeExtendedRelayAffirmationId: 'Option<RelayAffirmationId>',
      verified: 'bool'
    },
    RelayVotingState: {
      ayes: 'Vec<AccountId>',
      nays: 'Vec<AccountId>'
    }
  }
};

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable sort-keys */

export default {
  rpc: { },
  types: {
    MillauBalance: 'u64',
    MillauBlockHash: 'H512',
    MillauBlockNumber: 'u64',
    MillauHeader: {
      parent_Hash: 'MillauBlockHash',
      number: 'Compact<MillauBlockNumber>',
      state_root: 'MillauBlockHash',
      extrinsics_root: 'MillauBlockHash',
      digest: 'MillauDigest'
    },
    MillauDigest: {
      logs: 'Vec<MillauDigestItem>'
    },
    MillauDigestItem: {
      _enum: {
        Other: 'Vec<u8>',
        AuthoritiesChange: 'Vec<AuthorityId>',
        ChangesTrieRoot: 'MillauBlockHash',
        SealV0: 'SealV0',
        Consensus: 'Consensus',
        Seal: 'Seal',
        PreRuntime: 'PreRuntime'
      }
    },

    // Address: 'AccountId',
    // LookupSource: 'AccountId',
    AccountSigner: 'MultiSigner',
    SpecVersion: 'u32',
    RelayerId: 'AccountId',
    SourceAccountId: 'AccountId',
    ImportedHeader: {
      header: 'BridgedHeader',
      requires_justification: 'bool',
      is_finalized: 'bool',
      signal_hash: 'Option<BridgedBlockHash>'
    },
    AuthoritySet: {
      authorities: 'AuthorityList',
      set_id: 'SetId'
    },
    Id: '[u8; 4]',
    ChainId: 'Id',
    LaneId: 'Id',
    MessageNonce: 'u64',
    MessageId: '(Id, u64)',
    MessageKey: {
      lane_id: 'LaneId',
      nonce: 'MessageNonce'
    },
    InboundRelayer: 'AccountId',
    InboundLaneData: {
      relayers: 'Vec<(MessageNonce, MessageNonce, RelayerId)>',
      last_confirmed_nonce: 'MessageNonce'
    },
    OutboundLaneData: {
      latest_generated_nonce: 'MessageNonce',
      latest_received_nonce: 'MessageNonce',
      oldest_unpruned_nonce: 'MessageNonce'
    },
    MessageData: {
      payload: 'MessagePayload',
      fee: 'Fee'
    },
    MessagePayload: 'Vec<u8>',
    BridgedOpaqueCall: 'Vec<u8>',
    OutboundMessageFee: 'Fee',
    OutboundPayload: {
      spec_version: 'SpecVersion',
      weight: 'Weight',
      origin: 'CallOrigin',
      call: 'BridgedOpaqueCall'
    },
    CallOrigin: {
      _enum: {
        SourceRoot: '()',
        TargetAccount: '(SourceAccountId, MultiSigner, MultiSignature)',
        SourceAccount: 'SourceAccountId'
      }
    },
    MultiSigner: {
      _enum: {
        Ed25519: 'H256',
        Sr25519: 'H256',
        Ecdsa: '[u8;33]'
      }
    },
    MessagesProofOf: {
      bridged_header_hash: 'BridgedBlockHash',
      storage_proof: 'Vec<StorageProofItem>',
      lane: 'LaneId',
      nonces_start: 'MessageNonce',
      nonces_end: 'MessageNonce'
    },
    StorageProofItem: 'Vec<u8>',
    MessagesDeliveryProofOf: {
      bridged_header_hash: 'BridgedBlockHash',
      storage_proof: 'Vec<StorageProofItem>',
      lane: 'LaneId'
    },
    UnrewardedRelayersState: {
      unrewarded_relayer_entries: 'MessageNonce',
      messages_in_oldest_entry: 'MessageNonce',
      total_messages: 'MessageNonce'
    },
    AncestryProof: '()',
    MessageFeeData: {
      lane_id: 'LaneId',
      payload: 'OutboundPayload'
    },
    Precommit: {
      target_hash: 'BridgedBlockHash',
      target_number: 'BridgedBlockNumber'
    },
    // AuthoritySignature: '[u8;64]',
    // AuthorityId: '[u8;32]',
    SignedPrecommit: {
      precommit: 'Precommit',
      signature: 'AuthoritySignature',
      id: 'AuthorityId'
    },
    Commit: {
      target_hash: 'BridgedBlockHash',
      target_number: 'BridgedBlockNumber',
      precommits: 'Vec<SignedPrecommit>'
    },
    GrandpaJustification: {
      round: 'u64',
      commit: 'Commit',
      votes_ancestries: 'Vec<BridgedHeader>'
    },
    Fee: 'MillauBalance',
    // Balance: 'MillauBalance',
    // Hash: 'MillauBlockHash',
    // BlockHash: 'MillauBlockHash',
    // BlockNumber: 'MillauBlockNumber',
    BridgedBlockHash: 'MillauBlockHash',
    BridgedBlockNumber: 'MillauBlockNumber',
    BridgedHeader: 'MillauHeader',
    Parameter: {
      _enum: {
        MillauToRialtoConversionRate: 'u128'
      }
    }
  }
};

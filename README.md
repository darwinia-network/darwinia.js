# darwinia-storage

A library to help fetch internal substrate storages via ethereum json-rpc `eth.call`.

You can use this lib to fetch all Darwinia storages allowed by [StateStorage precompile](https://docs.darwinia.network/builder/solidity-precompiles).

## Install
```shell
npm install darwinia-storage --save
```

## Usage

The returns of this lib's functions are all json string or null.
```js
// Prepare web3 provider and metadata
const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");
const registry = new TypeRegistry();
const metadata = new Metadata(registry, metaStatic);
registry.setMetadata(metadata);

// There are two ways to fetch a storage.
//  1. use storage specific functions already defined in this lib.
const outboundMessages1 = await bridgeMessages.outboundMessages(provider, metadata, "BridgeDarwiniaMessages", {laneId: "0x00000000", nonce: 10});

//  2. use the general function `getStorage`.
const outboundMessages2 = await getStorage(provider, metadata, "BridgeDarwiniaMessages", "OutboundMessages", {laneId: "0x00000000", nonce: 10});
```

[examples.ts](./examples.ts)
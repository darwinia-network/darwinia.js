# darwinia-storage

A library to help fetch internal substrate storages via ethereum json-rpc `eth.call`.

You can use this lib to fetch all Darwinia storages allowed by [StateStorage precompile](https://docs.darwinia.network/builder/solidity-precompiles).

## Install
```shell
npm install darwinia-storage --save
```

## Usage

The returns of this lib's functions are all json string or null.


```typescript
import {ethers} from "ethers";
import { getStorage, buildCrabClient } from "darwinia-storage";

async function main(): Promise<void> {
    // web3 provider(eth compatible api endpoint)
    const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");

    // read from file or network(see the curl command below)
    const crabMetadataStatic = "0x...";

    // a general storage function for a specific chain
    const getCrabStorage = getStorage(provider, crabMetadataStatic);

    // There are two ways to fetch a storage.
    //
    //  1. use storage specific functions predefined in this lib.
    const crab = buildCrabClient(getCrabStorage);
    let result = await crab.bridgeDarwiniaMessages.outboundMessages(
        {
            laneId: "0x00000000",
            nonce: 10
        } // input has one item for map which is a struct:
    );
    console.log(`${result}\n`);

    //  2. the general way.
    result = await getCrabStorage(
        "BridgeDarwiniaMessages", 
        "OutboundMessages",
        {
            laneId: "0x00000000",
            nonce: 10
        }
    );
    console.log(`${result}\n`);
}

main();
```
more examples in [examples.ts](./examples.ts)

### Get the metadata static hex string from darwinia node
```shell
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","id":"1","method":"state_getMetadata","params":[]}' \
     https://darwinia-crab.api.onfinality.io/public/
```


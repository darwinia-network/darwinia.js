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
import {bridgeMessages, feeMarket, getStorage} from "darwinia-storage";

async function main(): Promise<void> {
    // web3 provider, provided by sdk users
    const provider = new ethers.providers.JsonRpcProvider("https://darwinia-crab.api.onfinality.io/public/");
    const metaStatic = ...; // read from file or network
    const getCrabStorage = getStorage(provider, metaStatic);

    // There are two ways to fetch a storage.
    //  1. use storage specific functions already defined in this lib.
    let r = await bridgeMessages.outboundMessages(
        getCrabStorage, 
        "BridgeDarwiniaMessages", // module name, capitalized camelized words
        // input has one item for map which is a struct:
        {
            laneId: "0x00000000",
            nonce: 10
        }
    );
    console.log(`${r}\n`);

    r = await feeMarket.orders(
        getCrabStorage, 
        "DarwiniaFeeMarket",
        // input has one item for map which is a tuple: 
        [[1, 1, 1, 1], 11]
    );
    console.log(`${r}\n`);

    //  2. the general way.
    r = await getCrabStorage(
        "BridgeDarwiniaMessages", 
        "OutboundMessages",
        // input has one item for map which is a struct:
        {
            laneId: "0x00000000",
            nonce: 10
        }
    );
    console.log(`${r}\n`);
    
    r = await getCrabStorage(
        "Recovery", // module name, capitalized camelized words
        'ActiveRecoveries', // storage name, capitalized camelized words
        // input has two item for double map:
        '0x9adf3c6e5e6fbef52a5146b0a759b014387ab60099fd28ee6e884869d9c6a32d', // the first item is a hex string `0x...`
        '0x9adf3c6e5e6fbef52a5146b0a759b014387ab60099fd28ee6e884869d9c6a32d' // the second item is a hex string `0x...`
    );
    console.log(r);
}

main();
```

more in [examples.ts](./examples.ts)
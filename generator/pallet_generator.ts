// let ejs = require('ejs');
// const fs = require('fs');
// const axios = require('axios');
// const a = require('darwinia-storage');
import ejs from 'ejs';
import fs from 'fs';
import type { HexString } from '@polkadot/util/types';
import axios from 'axios';
import {buildMetadata} from '../helpers';

async function getMetadata(url: string): Promise<HexString> {
    const response = await axios.post(url, {
        jsonrpc: '2.0',
        id: + new Date(),
        method: 'state_getMetadata',
        params: [],
    }, {
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.data.result;
}

async function main() {
    const template = fs.readFileSync('./generator/pallet.ts.ejs', 'utf8');

    const metaStatic = await getMetadata("https://darwiniacrab-rpc.dwellir.com");
    const metadata = buildMetadata(metaStatic);
    metadata.asV14.pallets.forEach((pallet) => {
        if(pallet.storage.isSome) {
            const storage = pallet.storage.unwrap();
            const prefix = storage.prefix.toString();
            const entries = storage.items;
            let result = ejs.render(template, {prefix, entries});
            console.log(result);
        }
    })
}

main();

// try {
//     // const data = fs.readFileSync('./generator/pallet.ts.ejs', 'utf8');
//     getMetadata("https://darwiniacrab-rpc.dwellir.com").then(function(metaStactic) {
//         buildMetadata(metaStactic)
//     }).catch(function(err) {
//         console.error(err);
//     });
// } catch (err) {
//     console.error(err);
// }
// let people = ['geddy', 'neil', 'alex'];
// let html = ejs.render('<%= people.join(", "); %>', {people: people});
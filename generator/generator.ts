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

function checkallre(str: string){
    const str1 = str.replace(/ /g, "")
    return /^[A-Z]*$/.test(str1)
}

async function main() {
    const chain = process.env["CHAIN"] || "crab";
    const endpoint = process.env["ENDPOINT"] || "https://darwiniacrab-rpc.dwellir.com";

    const template = fs.readFileSync('./generator/pallet.ts.ejs', 'utf8');
    const indexTemplate = fs.readFileSync('./generator/index.ts.ejs', 'utf8');

    const metaStatic = await getMetadata(endpoint);
    const metadata = buildMetadata(metaStatic);
    const moduleNames: String[] = [];
    metadata.asV14.pallets.forEach((pallet) => {
        if(pallet.storage.isSome) {
            const storage = pallet.storage.unwrap();
            const prefix = storage.prefix.toString();
            const entries = storage.items;
            let moduleName;
            if(checkallre(prefix)) {
                moduleName = prefix.toLowerCase();
            } else {
                moduleName = prefix.charAt(0).toLowerCase() + prefix.slice(1);
            }

            const result = ejs.render(template, {prefix, moduleName, entries});
            fs.writeFileSync(`./chains/${chain}/${moduleName}.ts`, result);

            moduleNames.push(moduleName);
        }
    })

    const result = ejs.render(indexTemplate, {moduleNames});
    fs.writeFileSync(`./chains/${chain}/index.ts`, result);
}

main();
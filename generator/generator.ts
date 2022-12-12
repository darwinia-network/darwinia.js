import ejs from 'ejs';
import fs from 'fs';
import type { HexString } from '@polkadot/util/types';
import axios from 'axios';
import { buildMetadata } from '../helpers';
import { StorageEntryMetadataV14, StorageHasherV14 } from "@polkadot/types/interfaces/metadata/types";
import { SiLookupTypeId } from "@polkadot/types/interfaces";
import { Metadata, Vec } from "@polkadot/types";

async function getMetadata(url: string): Promise<HexString> {
    const response = await axios.post(url, {
        jsonrpc: '2.0',
        id: + new Date(),
        method: 'state_getMetadata',
        params: [],
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'deflate',
        },
    })
    return response.data.result;
}

function isFullUppercaseWord(str: string){
    const str1 = str.replace(/ /g, "")
    return /^[A-Z]*$/.test(str1)
}

function getModuleName(prefix: string) {
    if (isFullUppercaseWord(prefix)) { // if all chars are uppercase, low all of them.
        return prefix.toLowerCase();
    } else {
        return prefix.charAt(0).toLowerCase() + prefix.slice(1);
    }
}

interface StorageMap {
    readonly hashers: Vec<StorageHasherV14>;
    readonly key: SiLookupTypeId;
    readonly value: SiLookupTypeId;
}


function buildInputTypes(entries: Vec<StorageEntryMetadataV14>, metadata: Metadata): Map<string, string[] | null> {
    const result = new Map<string, string[] | null>();
    entries.forEach(entry => {
        if(entry.type.isMap) {
            const map = entry.type.asMap;
            result.set(entry.name.toString(), getInputTypes(map, metadata));
        } else {
            result.set(entry.name.toString(), null);
        }
    });
    return result;
}

function getInputTypes(map: StorageMap, metadata: Metadata): string[] {
    const inputTypeIds = map.hashers.length === 1
        ? [map.key]
        : metadata.registry.lookup.getSiType(map.key).def.asTuple;

    return inputTypeIds.map((inputTypeId) => {
        const type = metadata.registry.lookup.getSiType(inputTypeId);
        const typeName = type.path.map(p => {
            return p.toString();
        });
        if(typeName.length == 0) {
            return `${getType(inputTypeId, metadata)}`;
        } else {
            return `${typeName[typeName.length - 1]}: ${getType(inputTypeId, metadata)}`;
        }
    });
}

function getType(typeId: SiLookupTypeId, metadata: Metadata): string {
    const type = metadata.registry.lookup.getSiType(typeId);
    if(type.def.isPrimitive) {
        return type.def.asPrimitive.toString();
    } else if (type.def.isArray) {
        let result = [];
        for (let i = 0; i < type.def.asArray.len.toNumber(); i++) {
            result.push(getType(type.def.asArray.type, metadata));
        }
        // return `[${result.join(",")}]`;
        return `[${result[0]}; ${result.length}]`;
    } else if (type.def.isComposite) {
        let result = [];
        let fields = type.def.asComposite.fields.values();
        for (const field of fields) {
            let name = field.name.isNone ? "field" : field.name.unwrap();
            result.push([name, getType(field.type, metadata)]);
        }

        if(result.length == 1 && result[0][0] == 'field') {
            return `${result[0][1]}`
        }

        if(result[0][0] == 'field') {
            const str = result.map((item) => {
                return item[1]
            }).join(', ');

            return `(${str})`;
        } else {
            const str = result.map((item) => {
                return `${item[0]}: ${item[1]}`
            }).join(', ');

            return `\{${str}\}`; 
        }
    } else if(type.def.isSequence) {
        const typeName = getType(type.def.asSequence.type, metadata);
        return `Vec<${typeName}>`
    } else if(type.def.isTuple) {
        const str = type.def.asTuple.map(a => {
            return getType(a, metadata);
        }).join(", ");
        return `(${str})`;
    } else {
        throw new Error(`unimplemented: ${type.def.toHuman}`);
    }
}

async function main() {
    const chain = process.env["CHAIN"] || "crab";
    const endpoint = process.env["ENDPOINT"] || "https://darwiniacrab-rpc.dwellir.com";

    // Prepare templates
    const template = fs.readFileSync('./generator/pallet.ts.ejs', 'utf8');
    const indexTemplate = fs.readFileSync('./generator/index.ts.ejs', 'utf8');

    // Prepare metadata
    const metaStatic = await getMetadata(endpoint);
    const metadata = buildMetadata(metaStatic);

    // Generate files according to the pallet name
    const moduleNames: String[] = [];
    metadata.asV14.pallets.forEach((pallet) => {
        if (!pallet.storage.isSome) {
            return;
        }

        const storage = pallet.storage.unwrap();
        const prefix = storage.prefix.toString();
        const entries = storage.items;
        const moduleName = getModuleName(prefix);

        const entryInputTypes = buildInputTypes(entries, metadata);

        // Generate file for a pallet
        const result = ejs.render(template, {prefix, moduleName, entries, entryInputTypes});
        fs.writeFileSync(`./chains/${chain}/${moduleName}.ts`, result);

        moduleNames.push(moduleName);
    })

    // Generate the index.ts
    const result = ejs.render(indexTemplate, {moduleNames});
    fs.writeFileSync(`./chains/${chain}/index.ts`, result);
}

main();
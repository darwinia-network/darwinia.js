import ejs from 'ejs';
import fs from 'fs';
import type { HexString } from '@polkadot/util/types';
import axios from 'axios';
import { buildMetadata } from '../helpers';
import { StorageEntryMetadataV14, StorageHasherV14 } from "@polkadot/types/interfaces/metadata/types";
import { Si1Field, SiLookupTypeId } from "@polkadot/types/interfaces";
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

const snakeCaseToCamel = (str: string) => {
    return str.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
    });
}

function isFullUppercaseWord(str: string) {
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

function formatSiType(tid: SiLookupTypeId, metadata: Metadata): string {
    const t = metadata.registry.lookup.getSiType(tid)
    const typeName = t.path.map(p => {
        return p.toString();
    });
    if (typeName.length == 0) {
        return `${getType(tid, metadata)}`;
    } else {
        return `${typeName[typeName.length - 1]}: ${getType(tid, metadata)}`;
    }
}

function buildOutputType(entries: Vec<StorageEntryMetadataV14>, metadata: Metadata): string[] {
    return entries.map(entry => {
        const v = entry.type.isMap
            ? entry.type.asMap.value
            : entry.type.asPlain;

        const tStr = formatSiType(v, metadata);
        // console.log(tStr);
        return tStr;
    });
}

function buildInputTypes(entries: Vec<StorageEntryMetadataV14>, metadata: Metadata): Map<string, string[] | null> {
    const result = new Map<string, string[] | null>();
    entries.forEach(entry => {
        if (entry.type.isMap) {
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
        if (typeName.length == 0) {
            return `${getType(inputTypeId, metadata)}`;
        } else {
            return `${typeName[typeName.length - 1]}: ${getType(inputTypeId, metadata)}`;
        }
    });
}

function buildFields(fields: IterableIterator<Si1Field>, metadata: Metadata) {
    let result = [];
    for (const field of fields) {
        let name = field.name.isNone ? "field" : field.name.unwrap();
        result.push([name, getType(field.type, metadata)]);
    }

    if (result.length == 0) {
        return ""
    }

    if (result.length == 1 && result[0][0] == 'field') {
        return `${result[0][1]}`
    }

    if (result[0][0] == 'field') {
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
}

function getType(typeId: SiLookupTypeId, metadata: Metadata): string {
    const type = metadata.registry.lookup.getSiType(typeId);
    if (type.def.isPrimitive) {
        return type.def.asPrimitive.toString();
    } else if (type.def.isArray) {
        let result = [];
        for (let i = 0; i < type.def.asArray.len.toNumber(); i++) {
            result.push(getType(type.def.asArray.type, metadata));
        }
        // return `[${result.join(",")}]`;
        return `[${result[0]}; ${result.length}]`;
    } else if (type.def.isComposite) {
        let fields = type.def.asComposite.fields.values();
        return buildFields(fields, metadata);
    } else if (type.def.isSequence) {
        const typeName = getType(type.def.asSequence.type, metadata);
        return `Vec<${typeName}>`
    } else if (type.def.isTuple) {
        const str = type.def.asTuple.map(a => {
            return getType(a, metadata);
        }).join(", ");
        return `(${str})`;
    } else if (type.def.isVariant) {
        let str = "Enum<\{";
        if (type.def.isBasic) {
            str = str + type.def.asVariant.variants.map(v => {
                return `"${v.name}"`
            }).join(", ");
        } else {
            str = str + type.def.asVariant.variants.map(v => {
                // const itemStr = buildFields(v.fields.values(), metadata);
                // return `"${v.index}/${v.name}": ${itemStr}`
                return `"${v.index}/${v.name}"`
            }).join(", ");
        }
        str = str + "\}>";
        return str;
    } else if (type.def.isCompact) {
        const innerTypeName = getType(type.def.asCompact.type, metadata);
        return `Compact<${innerTypeName}>`;
    } else if (type.def.isBitSequence) {
        const bitStoreType = getType(type.def.asBitSequence.bitStoreType, metadata);
        return `BitVec<${bitStoreType}>`;
    } else {
        throw new Error(`unimplemented: ${type.def.toString()}`);
    }
}

async function generateCalls(chainName: string, metadata: Metadata) {
    const callsRoot = "./chains/calls";
    fs.rmSync(`${callsRoot}/${chainName}`, { recursive: true, force: true });
    fs.mkdirSync(`${callsRoot}/${chainName}`);

    const palletCallsTemplate = fs.readFileSync('./generator/palletCalls.ts.ejs', 'utf8');
    const callsIndexTemplate = fs.readFileSync('./generator/callsIndex.ts.ejs', 'utf8');

    const moduleNames: String[] = [];
    const prefixs: String[] = [];
    metadata.asLatest.pallets.forEach((pallet) => {
        if (pallet.calls.isNone) {
            return;
        }

        const prefix = pallet.name.toString();
        const moduleName = getModuleName(prefix);

        const palletCalls: [string, string[]][] = [];
        const calls = pallet.calls.unwrap();
        const callsType = metadata.registry.lookup.getSiType(calls.type);
        callsType.def.asVariant.variants.forEach(call => {
            const callName = snakeCaseToCamel(call.name.toString());

            const callParams: string[] = [];
            call.fields.forEach(field => {
                const paramTypeString = getType(field.type, metadata);
                callParams.push(paramTypeString);
            });

            palletCalls.push([callName, callParams])
        });

        const result = ejs.render(palletCallsTemplate, { prefix, moduleName, palletCalls });
        fs.writeFileSync(`${callsRoot}/${chainName}/${moduleName}.ts`, result);

        moduleNames.push(moduleName);
        prefixs.push(prefix);
    });

    // Generate the index.ts
    const result = ejs.render(callsIndexTemplate, { chainName, moduleNames, prefixs });
    fs.writeFileSync(`${callsRoot}/${chainName}/index.ts`, result);
}

function generateStorages(chainName: string, metadata: Metadata) {
    const storagesRoot = "./chains/storages";

    // Remove old files
    fs.rmSync(`${storagesRoot}/${chainName}`, { recursive: true, force: true });

    // Create dir
    fs.mkdirSync(`${storagesRoot}/${chainName}`);

    // Prepare templates
    const template = fs.readFileSync('./generator/pallet.ts.ejs', 'utf8');
    const indexTemplate = fs.readFileSync('./generator/index.ts.ejs', 'utf8');

    // Generate files according to the pallet name
    const moduleNames: String[] = [];
    const prefixs: String[] = [];
    metadata.asV14.pallets.forEach((pallet) => {
        if (!pallet.storage.isSome) {
            return;
        }

        const storage = pallet.storage.unwrap();
        const prefix = storage.prefix.toString();
        const entries = storage.items;
        const moduleName = getModuleName(prefix);

        const entryInputTypes = buildInputTypes(entries, metadata);

        const outputTypes = buildOutputType(entries, metadata);

        // Generate file for a pallet
        const result = ejs.render(template, { prefix, moduleName, entries, entryInputTypes, outputTypes });
        fs.writeFileSync(`${storagesRoot}/${chainName}/${moduleName}.ts`, result);

        moduleNames.push(moduleName);
        prefixs.push(prefix);
    })

    // Generate the index.ts
    const result = ejs.render(indexTemplate, { chainName, moduleNames, prefixs });
    fs.writeFileSync(`${storagesRoot}/${chainName}/index.ts`, result);
}

function generateMetadatas(chainName: string, metaStatic: string) {
    const metadatasRoot = "./chains/metadatas";
    const metadataTemplate = fs.readFileSync('./generator/metadata.ts.ejs', 'utf8');
    const metaResult = ejs.render(metadataTemplate, { metaStatic });
    fs.writeFileSync(`${metadatasRoot}/${chainName}Metadata.ts`, metaResult);
}

async function main() {
    const chainName = process.env["CHAIN"] || "pangolin";
    const endpoint = process.env["ENDPOINT"] || "https://pangolin-rpc.darwinia.network";

    // Prepare metadata
    const metaStatic = await getMetadata(endpoint);
    const metadata = buildMetadata(metaStatic);

    generateStorages(chainName, metadata);
    generateCalls(chainName, metadata);
    generateMetadatas(chainName, metaStatic);
}

main();

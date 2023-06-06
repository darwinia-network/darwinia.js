import { Si1Field, SiLookupTypeId } from "@polkadot/types/interfaces";
import { Metadata, Vec } from "@polkadot/types";
import axios from "axios";
import type { HexString } from "@polkadot/util/types";
import { buildMetadata } from "../index";

function buildFields(
  level: number,
  fields: IterableIterator<Si1Field>,
  metadata: Metadata
) {
  let result = [];
  for (const field of fields) {
    let name = field.name.isNone ? "field" : field.name.unwrap();
    result.push([name, doGetType(level, field.type, metadata)]);
  }

  if (result.length == 0) {
    return "";
  }

  if (result.length == 1 && result[0][0] == "field") {
    return `${result[0][1]}`;
  }

  if (result[0][0] == "field") {
    const str = result
      .map((item) => {
        return item[1];
      })
      .join(", ");

    return `(${str})`;
  } else {
    const str = result
      .map((item) => {
        return `${item[0]}: ${item[1]}`;
      })
      .join(", ");

    return `\{${str}\}`;
  }
}

function getType(typeId: SiLookupTypeId, metadata: Metadata): string {
  // console.log("START------------------------....................");
  let level = 0;
  const result = doGetType(level, typeId, metadata);
  // console.log("END--------------------------....................");
  return result;
}

function doGetType(
  level: number,
  typeId: SiLookupTypeId,
  metadata: Metadata
): string {
  const type = metadata.registry.lookup.getSiType(typeId);

  if (type.def.isPrimitive) {
    return type.def.asPrimitive.toString();
  } else if (type.def.isArray) {
    let result = [];
    for (let i = 0; i < type.def.asArray.len.toNumber(); i++) {
      result.push(doGetType(level, type.def.asArray.type, metadata));
    }
    // return `[${result.join(",")}]`;
    if (result[0] == "u8" || result[0] == "U8") {
      if (result.length == 1) {
        return `Byte`;
      } else if (result.length > 1 && result.length <= 32) {
        return `Bytes${result.length}`;
      } else {
        return `HexString`;
      }
    } else {
      return `[${result[0]}; ${result.length}]`;
    }
  } else if (type.def.isComposite) {
    let fields = type.def.asComposite.fields.values();
    return buildFields(level, fields, metadata);
  } else if (type.def.isSequence) {
    const typeName = doGetType(level, type.def.asSequence.type, metadata);
    return `Vec<${typeName}>`;
  } else if (type.def.isTuple) {
    const str = type.def.asTuple
      .map((a) => {
        return doGetType(level, a, metadata);
      })
      .join(", ");
    return `(${str})`;
  } else if (type.def.isVariant) {
    let str = "Enum<{";
    if (type.def.isBasic) {
      str =
        str +
        type.def.asVariant.variants
          .map((v) => {
            return `${v.name}`;
          })
          .join(", ");
    } else {
      level = level + 1;

      str =
        str +
        type.def.asVariant.variants
          .map((v) => {
            if (level > 2) {
              return `${v.index}/${v.name}`;
              // return v.name;
            } else {
              const itemStr = buildFields(level, v.fields.values(), metadata);
              return `${v.index}/${v.name}: ${itemStr}`;
              // return `${v.name}: ${itemStr}`
            }
            // return `"${v.index}/${v.name}": "${itemStr}"`
            // return `"${v.index}/${v.name}"`
          })
          .join(", ");
    }
    str = str + "}>";
    return str;
  } else if (type.def.isCompact) {
    const innerTypeName = doGetType(level, type.def.asCompact.type, metadata);
    return `Compact<${innerTypeName}>`;
  } else if (type.def.isBitSequence) {
    const bitStoreType = doGetType(
      level,
      type.def.asBitSequence.bitStoreType,
      metadata
    );
    return `BitVec<${bitStoreType}>`;
  } else {
    throw new Error(`unimplemented: ${type.def.toString()}`);
  }
}

async function getMetadata(url: string): Promise<HexString> {
  const response = await axios.post(
    url,
    {
      jsonrpc: "2.0",
      id: +new Date(),
      method: "state_getMetadata",
      params: [],
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "deflate",
      },
    }
  );
  return response.data.result;
}

const snakeCaseToCamel = (str: string) => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function isFullUppercaseWord(str: string) {
  const str1 = str.replace(/ /g, "");
  return /^[A-Z]*$/.test(str1);
}

async function main(): Promise<void> {
  const chainName = "pangolin";
  const endpoint = "https://pangolin-rpc.darwinia.network";

  // Prepare metadata
  const metaStatic = await getMetadata(endpoint);

  const metadata = buildMetadata(metaStatic);
  console.log(metadata);

  // struct
  // {"unrewardedRelayerEntries":"u64","messagesInOldestEntry":"u64","totalMessages":"u64","lastDeliveredNonce":"u64"}
  const siType = metadata.asLatest.lookup.getTypeDef(459);
  console.log(siType.type);
  let value = metadata.registry.createType(siType.type, {
    unrewardedRelayerEntries: 1,
    messagesInOldestEntry: 2,
    totalMessages: 3,
    lastDeliveredNonce: 4,
  });
  console.log(value.toU8a());
  console.log(value.toHuman());

  // // option
  // // {
  // //   info: 9,
  // //   lookupIndex: 173,
  // //   lookupName: undefined,
  // //   type: 'Option<u128>',
  // //   docs: [],
  // //   namespace: 'Option',
  // //   sub: {
  // //     info: 10,
  // //     lookupIndex: 6,
  // //     type: 'u128',
  // //     docs: [],
  // //     namespace: '',
  // //     lookupNameRoot: undefined
  // //   }
  // // }
  // const siType = metadata.asLatest.lookup.getTypeDef(173);
  // // const paramTypeString = getType(6, metadata);
  // let value = metadata.registry.createType(siType.type, 111);
  // console.log(value.toU8a());
  // value = metadata.registry.createType(siType.type, null);
  // console.log(value.toU8a());

  // metadata.asLatest.pallets.forEach((pallet) => {
  //   if (pallet.calls.isNone) {
  //     return;
  //   }
  //
  //   const calls = pallet.calls.unwrap();
  //   const callsType = metadata.registry.lookup.getSiType(calls.type);
  //   callsType.def.asVariant.variants.forEach(call => {
  //     const callName = snakeCaseToCamel(call.name.toString());
  //     console.log(callName);
  //
  //     call.fields.forEach(field => {
  //       console.log(field.type.toString());
  //       const paramTypeString = getType(field.type, metadata);
  //       console.log(paramTypeString);
  //       const paramName = field.name.unwrap().toString();
  //     });
  //
  //   });
  //
  // });
}

main().catch((err) => console.log(err));

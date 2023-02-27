import { buildMetadata, decodeCall, getCallMeta, getEventMeta, EventData, EventMeta } from "../index";
import { staticMetadataForTest } from "./metadata_for_test";

describe('metadata', () => {
  test('call can be decoded from scale codec bytes', () => {
    const metadata = buildMetadata(staticMetadataForTest);
    const result =
      decodeCall(metadata, 'Session', 'setKeys', "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00");

    expect(result).toStrictEqual(
      {
        callIndex: [9, 0],
        args: {
          keys: {
            aura: '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'
          },
          proof: '0x'
        }
      }
    );

  });

  test('call meta can be got from metadata', () => {
    const metadata = buildMetadata(staticMetadataForTest);
    const result = getCallMeta(metadata, 'System', 'remark_with_event');

    expect(result).toStrictEqual(
      {
        callIndex: [0, 8],
        args: ['Lookup12'],
        belongsTo: 'Lookup144'
      }
    );

  });

  test('event meta can be got from metadata', () => {
    const metadata = buildMetadata(staticMetadataForTest);
    const result = getEventMeta(metadata, 'System', 'ExtrinsicSuccess');

    console.log(result);
    expect(result).toStrictEqual({
      palletName: 'System',
      eventName: 'ExtrinsicSuccess',
      eventIndex: [0, 0],
      fields: [
        {
          name: 'dispatch_info',
          typeName: 'DispatchInfo',
          lookupType: 'Lookup21'
        }
      ],
      belongsTo: 'Lookup20'
    } as EventMeta);

  });
});

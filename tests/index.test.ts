import { buildMetadata, decodeCall, getCallMeta, getEventMeta } from "../index";
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

        expect(result).toStrictEqual(
            {
                eventIndex: [0, 0],
                fields: ['Lookup21'],
                belongsTo: 'Lookup20'
            }
        );

    });
});

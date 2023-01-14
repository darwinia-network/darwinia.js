import { buildMetadata, decodeCall } from "../index";
import { staticMetadataForTest } from "./metadata_for_test";

describe('call', () => {
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
});

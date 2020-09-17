import {Arianee, NETWORK} from "@arianee/arianeejs";

const ArianeeEvent = require('../ArianeeEvent-i18n.json');

describe("Hash of event should not change", () => {

    it('ArianeeEvent-i18n', async (done) => {
        const expectedHash = "0xdec1ea70d84a4551d4a3da1d647d485a69dfcd006eda45945c3b5ecacd69cf58";

        const content = {
            "$schema": "https://cert.arianee.org/version1/ArianeeEvent-i18n.json",
            "eventType": "Service",
            "language": "fr-FR",
            "title": "mon titre",
            "description": "ma description",
            "externalContents": [{
                  "type": "website",
                  "title": "title",
                  "url": "https://arianee.org",
                  "order": "1"
            }],
            "i18n": [{
                  "language": "fr-Fr",
                  "title": "my title",
                  "description": "my description",

                  "externalContents": [{
                        "type": "website",
                        "title": "my title",
                        "url": "https://arianee.org",
                        "order": "1"
                  }]
            }],
            "medias": [{
                  "mediaType": "picture",
                  "type": "product",
                  "url": "https://arianee.org",
                  "hash": "12345",
                  "order": "1"
            }],
            "attributes": [{
                  "type": "color",
                  "value": "red"
            }],
            "valuePrice": "100",
            "currencyPrice": "EUR",
            "location": "paris"

        };
        const arianee = await new Arianee().init(NETWORK.arianeeTestnet);
        const wallet = arianee.fromRandomMnemonic();
        const hash = await wallet.utils.cert(ArianeeEvent, content);
        expect(hash).toBe(expectedHash);
        done();
    })

});


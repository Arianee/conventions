import {isObjectMatchingModel} from 'isobjectmatchingmodel';
import {Arianee, NETWORK} from "@arianee/arianeejs";
const ArianeeProductCertificate =  require('../../../version8/ArianeeProductCertificate-i18n.json');
const PreviousVersionArianeeProductCertificate = require('../../../version7/ArianeeProductCertificate-i18n.json');

describe("version 8", () => {
    it('should create the same imprint',async ()=>{
        const expectedHash = '0xa40830ba988ca7067c89b4f2d935d86b66991ecec0f582054a920b33a4eae8f9'
        const content = {
            "$schema": "https://cert.arianee.org/version8/ArianeeProductCertificate-i18n.json",
            "name": "Ma super zoé",
            "serialnumber": [],
            "description": "ma description Le Lorem Ips, comme Aldus PageMaker.",
            "subDescription": ["dress"]
        }

        const arianee = await new Arianee().init(NETWORK.arianeeTestnet);

        const wallet = arianee.fromRandomMnemonic();
        const hash = await wallet.utils.cert(ArianeeProductCertificate, content);
         expect(hash).toBe(expectedHash);
    })
});
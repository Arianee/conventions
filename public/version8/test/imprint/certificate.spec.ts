import {isObjectMatchingModel} from 'isobjectmatchingmodel';
import {Arianee, NETWORK} from "@arianee/arianeejs";
const ArianeeProductCertificate =  require('../../../version8/ArianeeProductCertificate-i18n.json');

describe("version 8", () => {
    it('should create the same imprint',async ()=>{
        const expectedHash = '0x19f3626f8a85b8d09076d877826f44a1ccce7516c1492eb92a6457cec28c26b0'
        const content = {
            "$schema": "https://cert.arianee.org/version8/ArianeeProductCertificate-i18n.json",
            "name": "Ma super zoé",
            "serialnumber": [],
            "description": "ma description Le Lorem Ips, comme Aldus PageMaker.",
            "subCategory": "dress",
            "category": "clothes"
        }

        const arianee = await new Arianee().init(NETWORK.arianeeTestnet);

        const wallet = arianee.fromRandomMnemonic();
        const hash = await wallet.utils.cert(ArianeeProductCertificate, content);
        
        expect(hash).toBe(expectedHash);
    })
});
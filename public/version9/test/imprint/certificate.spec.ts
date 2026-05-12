import {isObjectMatchingModel} from 'isobjectmatchingmodel';
import {Arianee, NETWORK} from "@arianee/arianeejs";
const ArianeeProductCertificate =  require('../../../version9/ArianeeProductCertificate-i18n.json');

describe("version 9", () => {
    it('should create the same imprint',async ()=>{
        const expectedHash = '0x63a847a21e4ec8075855c58a8261d81946153f930609f701ef5c16553176f564'
        const content = {
            "$schema": "https://cert.arianee.org/version9/ArianeeProductCertificate-i18n.json",
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

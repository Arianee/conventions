import {Arianee, NETWORK} from "@arianee/arianeejs";
import {isObjectMatchingModel} from 'isobjectmatchingmodel';

const ArianeeProductCertificate = require('../../ArianeeProductCertificate-i18n.json');
const PreviousVersionArianeeProductCertificate = require('../../../version2/ArianeeProductCertificate-i18n.json');

describe("version 5", () => {

    it('should create the same imprint',async ()=>{
        const expectedHash = '0x836f66b47dbbcc4725bddc85afc82ead87f4b345a785bdef7343c6bf00d33c5b'
        const content = {
            "$schema": "https://cert.arianee.org/version5/ArianeeProductCertificate-i18n.json",
            "name": "Ma super zoé",
            "serialnumber": [],
            "description": "ma description Le Lorem Ips, comme Aldus PageMaker.",
            "subDescription": [],
            "medias": [{
                "mediaType": "picture",
                "type": "product",
                "url": "https://bdharianeestef.firebaseapp.com/pub/-M-Q2DMel5Gh4BCGrjf3_arianeeResized"
            }, {
                "mediaType": "picture",
                "type": "itemBackgroundPicture",
                "url": "https://bdharianeestef.firebaseapp.com/pub/-LtAe_pzkNcyKVnaC2aB"
            }],
            "attributes": [],
            "materials": [],
            "size": [],
            "productCertification": []
        };
        const arianee = await new Arianee().init(NETWORK.arianeeTestnet);
        const wallet = arianee.fromRandomMnemonic();
        const hash = await wallet.utils.cert(ArianeeProductCertificate, content);
        expect(hash).toBe(expectedHash);
    })

    it("should contain all properties from previous version", () => {
        const d = isObjectMatchingModel(PreviousVersionArianeeProductCertificate,ArianeeProductCertificate);
        expect(d).toBeTruthy();
    })
});

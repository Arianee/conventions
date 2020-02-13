import {Arianee, NETWORK} from "@arianee/arianeejs";

const ArianeeAsset = require('../public/version1/ArianeeAsset.json');
const ArianeeProductCertificate = require('../public/version1/ArianeeProductCertificate-i18n.json');

describe("Hash of certificate should not change", () => {
    it('ArianeeAsset', async (done) => {
        const expectedHash = "0xd98c122902dc4c0b41424ff7d4c5a4bb2d8326af09021d58efe12f975cb5be53";

        const content = {
            "$schema": "https://cert.arianee.org/version1/ArianeeAsset.json",
            "name": "Mon certificate De test",
            "v": "0.1",
            "serialnumber": [{"type": "serialnumber", "value": "12342"}],
            "brand": "My Brand",
            "model": "Mon Model",
            "description": "Ma description",
            "type": "SmartAsset",
            "brandLogoHeader": "https://bdharianeestef.firebaseapp.com/pub/-Lzqa6YvOtc4ZeMF2Phb_arianeeResized",
            "picture": "https://www.fillmurray.com/200/300",
            "pictures": [],
            "attributes": [],
            "size": [],
            "externalContents": []
        };
        const arianee = await new Arianee().init(NETWORK.arianeeTestnet);

        const wallet = arianee.fromRandomMnemonic();
        const hash = await wallet.utils.cert(ArianeeAsset, content);
        expect(hash).toBe(expectedHash);

        done();
    });

    it('ArianeeProductCertificate-i18n', async (done) => {
        const expectedHash = "0x30cf30b589a602d5d9667a344f69471e20e11c4689cd089377bf70da3c85804d";

        const content = {
            "$schema": "https://cert.arianee.org/version1/ArianeeProductCertificate-i18n.json",
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
        done();
    })

});

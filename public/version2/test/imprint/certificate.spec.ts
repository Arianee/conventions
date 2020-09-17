import {Arianee, NETWORK} from "@arianee/arianeejs";
import * as _ from 'lodash';
import {isObjectMatchingModel} from 'isobjectmatchingmodel';

const ArianeeProductCertificate = require('../../ArianeeProductCertificate-i18n.json');
const PreviousVersionArianeeProductCertificate = require('../../../version1/ArianeeProductCertificate-i18n.json');

describe("Hash of certificate should not change", () => {
    it('1/ DEV ArianeeProductCertificate-i18n', async (done) => {
        const expectedHash = "0x1b13ce3a9607dc0530de54d9e0fe3d0cec9afb996f6c5be8f5461ae97aaeb1c2";

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

    it('2/ ArianeeProductCertificate-i18n', async (done) => {
        const expectedHash = "0xd27ef40285b335776bc16f14244003b3f1147342bf8454113fca2de4e6508a02";

        const content = {
            "$schema": "https://cert.arianee.org/version1/ArianeeProductCertificate-i18n.json",
            "name": "The Navyclock 3",
            "sku": "NAC-BB-LS20-06  [CHINA TESTING]",
            "gtin": "0 00 12345 60001 2",
            "brandInternalId": "NYC12345",
            "category": "accessory",
            "intended": "womens",
            "serialnumber": [{"type": "serialnumber", "value": "DL8529044810"}, {
                "type": "casenumber",
                "value": "85290CA12"
            }, {"type": "movementnumber", "value": "85QR18"}],
            "subBrand": "Arianee watches",
            "model": "Limited serie 2020",
            "language": "en-US",
            "description": "<b>Description</b>\nThe Navyclock [CHINA TESTING]  by Arianee watch, small model, quartz movement. Case in 18k pink gold, beaded crown in 18k pink gold set with a synthetic cabochon-shaped spinel, strap in leather. \n\n<b>Case dimensions</b>\ndiameter: 29.5 mm, thickness: 6.35 mm, water-resistant to 3 bar (approx. 30 meters/100 feet).",
            "subDescription": [{
                "type": "other",
                "title": "The Navyclock watchmaking process",
                "content": "The Navyclock preserves the perfectly pitched classical elegance and signature Arianee features. The brand has been producing its own in-house movements since 2017. The movements boast a host of features but are designed to be thin by incorporating various complications into the mainplate.",
                "order": 1
            }, {
                "type": "service",
                "title": "Customer service information",
                "content": "The Navyclock is rarely down. When it happens you can be sure our network will be here for you. ",
                "order": 2
            }],
            "externalContents": [{
                "type": "website",
                "title": "Website",
                "url": "https://www.arianee.org/",
                "order": 1
            }, {
                "type": "other",
                "title": "About Arianee",
                "url": "https://www.arianee.org/about-arianee",
                "order": 3
            }, {
                "type": "other",
                "title": "History of Watches",
                "url": "https://en.wikipedia.org/wiki/History_of_watches",
                "order": 2
            }],
            "i18n": [{
                "language": "fr-FR",
                "description": "<b>Description</b>\nLa montre The Navyclock d'Arianee est un petit modèle utilisant le mouvement à quartz. Boitier en or rose 18 carats, Couronne perlée en or rose 18 carats sertie d'un spinelle synthétique en forme de cabochon, bracelet en cuir.\n\n<b>Dimensions</b>\ndiamètre: 29.5 mm, épaisseur: 6.35 mm, étanche à 3 bar (environ 30 mètres/100 pieds).",
                "subDescription": [],
                "name": "The Navyclock 3 French",
                "externalContents": [{
                    "type": "website",
                    "title": "Site",
                    "url": "https://www.arianee.org/",
                    "order": 1
                }, {
                    "type": "other",
                    "title": "Arianee",
                    "url": "https://www.arianee.org/about-arianee",
                    "order": 3
                }, {
                    "type": "other",
                    "title": "L'Histoires des montres ",
                    "url": "https://fr.wikipedia.org/wiki/Montre_(horlogerie)",
                    "order": 2
                }]
            }, {
                "language": "zh-CN",
                "description": "<b>描述</b>\nThe Navyclock by Arianee 手表，小型款，石英机芯. 18k玫瑰金表壳，18k玫瑰金串珠状表冠，镶有凸圆形人造合成尖晶石，皮革表带.\n\n<b>外壳尺寸</b>\n直径：29.5毫米，厚度：6.35毫米，防水深度达3巴（约30米/ 100英尺\n",
                "subDescription": [],
                "name": "The Navyclock 3 Chineese",
                "externalContents": [{
                    "type": "website",
                    "title": " 网站",
                    "url": "https://www.arianee.org/",
                    "order": 1
                }, {
                    "type": "other",
                    "title": " 关于 Arianee",
                    "url": "https://www.arianee.org/about-arianee",
                    "order": 3
                }, {
                    "type": "other",
                    "title": " 手表的历史",
                    "url": "https://zh.wikipedia.org/wiki/%E6%89%8B%E8%A1%A8",
                    "order": 2
                }]
            }],
            "msrp": [{"msrp": "35000", "currency": "EUR", "msrpCountry": "Europe"}, {
                "msrp": "32000",
                "currency": "GBP",
                "msrpCountry": "United Kingdom"
            }, {"msrp": "40000", "currency": "USD", "msrpCountry": "USA"}],
            "medias": [{
                "mediaType": "picture",
                "type": "product",
                "url": "https://bdharianeetest.firebaseapp.com/pub/-Lzfbb6qGXMN3LVhPRWG_arianeeResized",
                "order": 1
            }, {
                "mediaType": "picture",
                "type": "product",
                "url": "https://bdharianeetest.firebaseapp.com/pub/-LzfbcJwhZPNES_2NK1h_arianeeResized",
                "order": 3
            }, {
                "mediaType": "picture",
                "type": "product",
                "url": "https://bdharianeetest.firebaseapp.com/pub/-LzfbdNMkhOxvu5n_cPv_arianeeResized",
                "order": 2
            }],
            "attributes": [{"type": "color", "value": "Gold"}],
            "materials": [],
            "size": [{"type": "depth", "value": "6", "unit": "in"}, {"type": "depth", "value": "3,6", "unit": "cm"}],
            "manufacturingCountry": "Switzerland",
            "facilityId": "12345bgtbe",
            "productCertification": [{"name": "fairtrade"}]
        };

        const arianee = await new Arianee().init(NETWORK.arianeeTestnet);
        const wallet = arianee.fromRandomMnemonic();
        const hash = await wallet.utils.cert(ArianeeProductCertificate, content);
        expect(hash).toBe(expectedHash);
        done();
    })

});

describe("version", () => {
    it("should contain all properties from previous version", () => {
        const d = isObjectMatchingModel(PreviousVersionArianeeProductCertificate,ArianeeProductCertificate);
        expect(d).toBeTruthy();
    })
});

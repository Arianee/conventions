import {Arianee, NETWORK} from "@arianee/arianeejs";

const ArianeeMessage = require('../public/version1/ArianeeMessage-i18n.json');

describe("Hash of message should not change", () => {

    it('ArianeeMessage-i18n', async (done) => {
        const expectedHash = "0xa39558edebc4fae7cc525ddc16f8811f6255f18bb4a67985ceb35362af6a5022";

        const content = {
            "$schema": "https://cert.arianee.org/version1/ArianeeMessage-i18n.json",
            "language": "en-US",
            "title": "The Navyclock 3",
            "content": "<b>Description</b>\nThe Navyclock [CHINA TESTING]  by Arianee watch, small model, quartz movement. Case in 18k pink gold, beaded crown in 18k pink gold set with a synthetic cabochon-shaped spinel, strap in leather. \n\n<b>Case dimensions</b>\ndiameter: 29.5 mm, thickness: 6.35 mm, water-resistant to 3 bar (approx. 30 meters/100 feet).",
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
                "title": "french title",
                "content": "<b>Description</b>\nLa montre The Navyclock d'Arianee est un petit modèle utilisant le mouvement à quartz. Boitier en or rose 18 carats, Couronne perlée en or rose 18 carats sertie d'un spinelle synthétique en forme de cabochon, bracelet en cuir.\n\n<b>Dimensions</b>\ndiamètre: 29.5 mm, épaisseur: 6.35 mm, étanche à 3 bar (environ 30 mètres/100 pieds).",
                "subDescription": [],
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
                "title": "chinese title",
                "content": "<b>描述</b>\nThe Navyclock by Arianee 手表，小型款，石英机芯. 18k玫瑰金表壳，18k玫瑰金串珠状表冠，镶有凸圆形人造合成尖晶石，皮革表带.\n\n<b>外壳尺寸</b>\n直径：29.5毫米，厚度：6.35毫米，防水深度达3巴（约30米/ 100英尺\n",
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
            }]
        };

        const arianee = await new Arianee().init(NETWORK.arianeeTestnet);
        const wallet = arianee.fromRandomMnemonic();
        const hash = await wallet.utils.cert(ArianeeMessage, content);
        expect(hash).toBe(expectedHash);
        done();
    })

});

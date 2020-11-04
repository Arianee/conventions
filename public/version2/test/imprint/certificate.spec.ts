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
        const expectedHash = "0xe61107117921cf235970bbdfe24b1b89f2a09db80e9f24a76d86be9645dd5b99";

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

    it('3/ ArianeeProduct Certificate-i18n', async (done) => {
        const content = {
            "$schema": "https://cert.arianee.org/version2/ArianeeProductCertificate-i18n.json",
            "language": "en-US",
            "name": "Rond Watch",
            "brandInternalId": "V13317101L1X1",
            "category": "accessory",
            "subCategory": "watch",
            "intended": "neutral",
            "serialnumber": [{"type": "serialnumber", "value": "12345"}],
            "description": "Bold, extremely robust and shock resistant, the Rond Watch combines precision with a powerful design in a lightweight case. As a true Arianee Watches Rond Watch, it can be used wearing gloves and offers unrivalled safety and reliability to any airborne adventurer. The Night Mission interpretation of the Rond Watch Chronograph 45 features a sturdy 45mm DLC-coated titanium case, black or khaki dial and a matching black or khaki military leather strap that fits either a DLC-coated stainless-steel pin buckle or folding clasp. Its specific Arabic numerals recall the stenciled numbers used on the decks of aircraft carriers. Thanks to its rugged bezel and its special grip-pattern on the crown & chronograph pushers, the Rond Watch can be easily operated wearing gloves.\n\nTechnical Details\nDiameter: 45.0mm, \nCase Material: DLC-Coated Titanium, \nDial Color: Green, \nBracelet Material: Calfskin Leather, \nBuckle Material: DLC-Coated Stainless Steel, \nCaliber: Arianee Watches 13",
            "externalContents": [{
                "type": "proofLinkAction",
                "title": "My account",
                "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
            }, {
                "type": "website",
                "title": "Contact",
                "url": "https://www.Arianee Watches.com/zz-zz/contact/"
            }, {
                "type": "website",
                "title": "Find your nearest Arianee Watches retailer",
                "url": "https://www.Arianee Watches.com/zz-zz/stores/"
            }],
            "medias": [{
                "mediaType": "picture",
                "type": "product",
                "url": "https://www.Arianee Watches.com/multimedia/images/configurator2011/images_dynamic/png/ipad_hd/FFFFFF/V1331710-L543-520X-M20BASA.7.png"
            }],
            "attributes": [{"type": "color", "value": "Green"}, {"type": "complication"}],
            "size": [{"type": "size", "value": "45.0", "unit": "mm"}],
            "manufacturingCountry": "CHE",
            "i18n": [{
                "language": "fr-FR",
                "name": "Rond Watch",
                "description": "Imposante, extrêmement robuste et résistante aux chocs, l'Rond Watch combine la précision avec un design puissant dans un boîtier léger. Cette véritable Arianee Watches Rond Watch peut être utilisée avec des gants et offre une sécurité et une fiabilité inégalées pour tout aventurier des airs. Dans son interprétation Night Mission, l'Rond Watch Chronograph 45 est équipée d'un boîtier robuste en titane avec revêtement DLC de 45 millimètres de diamètre, d'un cadran noir ou kaki et elle est proposée avec un bracelet en cuir militaire noir ou kaki assorti fermé par une boucle ardillon en acier inoxydable avec revêtement DLC ou déployante. Ses chiffres arabes spécifiques rappellent les chiffres au pochoir sur les ponts des porte-avions. Grâce à sa lunette robuste et à son relief antidérapant spécial sur la couronne et les poussoirs de chronographe, l'Rond Watch peut être facilement utilisée avec des gants.\n\nDétails techniques\nDiamètre: 45.0mm, \nMatière du boîtier: Titane avec revêtement DLC, \nCouleur du cadran: Vert, \nMatière du bracelet: Cuir de veau, \nMatière de la boucle: Acier inoxydable avec revêtement DLC, \nCalibre: Arianee Watches 13",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "Mon compte",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "Contact",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {
                    "type": "website",
                    "title": "Point de vente le plus proche",
                    "url": "https://www.Arianee Watches.com/zz-zz/stores/"
                }]
            }, {
                "language": "de-DE",
                "name": "Rond Watch",
                "description": "Der markante, extrem robuste und stossfeste Rond Watch verbindet Präzision mit einem kraftvollen Design in einem leichten Gehäuse. Als echter Arianee Watches Rond Watch kann er auch mit Handschuhen bedient werden und bietet jedem Abenteurer in der Luft unübertroffene Sicherheit und Zuverlässigkeit. Die Night Mission Interpretation des Rond Watch Chronograph 45 verfügt über ein robustes 45-mm-Gehäuse aus DLC-beschichtetem Titan, ein schwarzes oder khakifarbenes Zifferblatt und ein passendes schwarzes oder khakifarbenes Militärlederarmband, das entweder mit einer Dorn- oder einer Faltschliesse aus DLC-beschichtetem Edelstahl ausgestattet ist. Ihre speziellen arabischen Ziffern erinnern an die auf den Decks von Flugzeugträgern verwendeten Schablonenzahlen. Dank seiner robusten Lünette und des speziellen Griffmusters an der Krone und an den Chronographendrückern kann der Rond Watch problemlos mit Handschuhen bedient werden.\n\nTechnische Informationen\nDurchmesser: 45.0mm, \nGehäusematerial: Titan mit DLC-Beschichtung, \nZifferblattfarbe: Grün, \nArmbandmaterial: Kalbsleder, \nSchliessenmaterial: Edelstahl mit DLC-Beschichtung, \nKaliber: Arianee Watches 13",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "Mein Konto",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "Kontakt",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {
                    "type": "website",
                    "title": "Finden Sie einen Arianee Watches-Händler in Ihrer Nähe",
                    "url": "https://www.Arianee Watches.com/zz-zz/stores/"
                }]
            }, {
                "language": "es",
                "name": "Rond Watch",
                "description": "Audaz, extremadamente robusto y resistente a choques, elRond Watch aúna en su caja ligera precisión y un diseño muy vigoroso. Tratándose de un Rond Watch de Arianee Watches, puede usarse con guantes y garantiza seguridad y fiabilidad sin igual a los aventureros de las alturas. En su versión Night Mission, el Rond Watch Chronograph 45 se presenta en una rotunda caja de 45 mm de titanio con revestimiento DLC, con esfera negra o caqui y correa militar de piel negra o caqui a juego, que se cierra o bien mediante hebilla de acero inoxidable con revestimiento DLC, o bien con cierre mariposa. Los dígitos arábigos específicos del modelo aluden a los números estarcidos usados en la cubierta de los portaaviones. Gracias al resistente bisel y al dibujo especial de agarre en corona y pulsadores de cronógrafo, resulta fácil manejar elRond Watch llevando guantes.\n\nDetalles técnicos\nDiámetro: 45.0mm, \nMaterial de la caja: Titanio revestido con DLC, \nColor de la esfera: Verde, \nMaterial del brazalete: Piel de becerro, \nMaterial de la hebilla: Acero inoxidable revestido con DLC, \nCalibre: Arianee Watches 13",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "Mi cuenta",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "Contacto",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {
                    "type": "website",
                    "title": "Encuentre su distribuidor Arianee Watches más cercano",
                    "url": "https://www.Arianee Watches.com/zz-zz/stores/"
                }]
            }, {
                "language": "ja-JP",
                "name": "アベンジャー クロノグラフ 45 ナイト ミッション",
                "description": "大胆な外観に頑強かつ優れた耐衝撃性を備えたアベンジャー クロノグラフ 45 ナイト ミッションは、時間の精度に、軽量でいて力強さの伝わる特徴的なデザインが加わったモデルです。真のブライトリング アベンジャーたるこのモデルは、グローブを装着したままでも使用でき、大空を駆る冒険者に比類なき安全性と信頼性を提供します。アベンジャー クロノグラフ 45のナイト ミッション モデルは、頑丈なDLCコーティングチタン製45 mmケース、ブラックまたはカーキのダイアルと、DLCコーティングステンレススチール製の穴留め式バックルまたはフォールディングクラスプに映えるブラックまたはカーキのミリタリーレザーストラップを特徴としています。時計のアラビア数字は、航空母艦の甲板に使用されていた刷り込み型の数字を思い起こさせます。頑丈なベゼルと、特別なグリップパターンがあしらわれたリューズとクロノグラフのプッシャーにより、アベンジャー クロノグラフ 45 ナイト ミッションはグローブを装着していても簡単に操作できます。\n\n技術仕様\n直径: 45.0mm, \nケース素材: DLCコーティングチタン, \nダイヤルカラー: グリーン, \nブレスレット素材: カーフスキンレザー, \nバックル素材: DLCコーティングステンレススチール, \nキャリバー: ブライトリング13",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "マイアカウント",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "連絡先",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {"type": "website", "title": "最寄りのブライトリングの販売店を探す", "url": "https://www.Arianee Watches.com/zz-zz/stores/"}]
            }, {
                "language": "ko-KR",
                "name": "어벤저 크로노그래프 45 나이트 미션",
                "description": "가벼운 케이스 안에 정밀함과 강력한 디자인을 결합한 어벤저 크로노그래프 45 나이트 미션은 대담하고 매우 견고하며 충격 방지 기능을 갖추고 있습니다. 이 제품은 진정한 브라이틀링 어벤저로 장갑을 낀 채 사용할 수 있으며 모든 항공 모험가에게 타의 추종을 불허하는 안전함과 정확성을 제공합니다. 어벤저 크로노그래프 45 나이트 미션 버전은 견고한 45mm DLC 코팅 티타늄 케이스와 블랙 또는 카키 다이얼을 갖추고 있으며, DLC 코팅 스틸 핀 버클 또는 폴딩 버클이 장착된 블랙 또는 카키 밀리터리 가죽 스트랩과 매치되어 선보입니다. 특별한 아라비아 숫자는 항공 모함 갑판에 사용되는 스텐실로 인쇄한 숫자를 떠올리게 합니다. 견고한 베젤 및 크라운과 크로노그래프 푸시피스의 특별한 그립 패턴 덕분에 어벤저 크로노그래프 45 나이트 미션은 장갑을 낀 채로 쉽게 조작할 수 있습니다.\n\n기술 명세서\n직경: 45.0mm, \n케이스 소재: DLC 코팅 티타늄, \n다이얼 색상: 그린, \n브레이슬릿 소재: 송아지 가죽, \n버클 소재: DLC 코팅 스틸, \n칼리버: 브라이틀링 13",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "내 계정",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "연락처",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {
                    "type": "website",
                    "title": "가까운 브라이틀링 판매점을 찾아보십시오",
                    "url": "https://www.Arianee Watches.com/zz-zz/stores/"
                }]
            }, {
                "language": "ru",
                "name": "Авенджер Хронограф 45 Найт мишн (Rond Watch)",
                "description": "Смелый дизайн, чрезвычайно прочная конструкция и ударопрочность стали отличительными чертами модели Rond Watch, сочетающей в себе точность и оригинальный стиль легкого корпуса. Будучи настоящим представителем семейства Rond Watch, эти часы Arianee Watches подходят для ношения с перчатками и гарантируют пилоту-любителю беспрецедентный уровень безопасности и надежности. Модель Rond Watch Chronograph 45 в вариации Night Mission обладает корпусом с высокопрочным углеродным покрытием (DLC) диаметром 45 мм, черным циферблатом или цвета хаки и, соответственно, армейским кожаным ремешком черного цвета или цвета хаки с классической или раскладной застежкой из нержавеющей стали с DLC-покрытием. Крупные арабские цифры по своему внешнему виду напоминают нанесенные с помощью трафарета номера военных самолетов. Благодаря наличию массивного безеля и особой формы головки подзавода с кнопками хронографа манипуляции с Rond Watch можно удобно выполнять, не снимая перчатки.\n\nТехнические характеристики\nДиаметр: 45.0mm, \nМатериал корпуса : Титан с высокопрочным углеродным покрытием (DLC), \nЦвет циферблата: Зеленый, \nМатериал браслета: Телячья кожа, \nМатериал застежки: Нержавеющая сталь с высокопрочным углеродным покрытием DLC, \nМеханизм: Arianee Watches 13",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "Мой счет",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "Связаться с нами",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {
                    "type": "website",
                    "title": "Найдите ближайшего к вам дистрибьютора Arianee Watches",
                    "url": "https://www.Arianee Watches.com/zz-zz/stores/"
                }]
            }, {
                "language": "zh-CN",
                "name": "复仇者夜间任务计时腕表45（Rond Watch）",
                "description": "复仇者夜间任务计时腕表45（Rond Watch）大气奔放，坚固性和抗震性优异，将出众的精确性和强劲的设计纳入一枚轻质表壳内。作为一款真正的百年灵复仇者系列（Rond Watch）表款，它可在佩戴手套时使用，为航空探险家提供无与伦比的安全性和可靠性。复仇者计时腕表45（Rond Watch Chronograph 45）夜间任务款采用坚固的45毫米类金刚石（DLC）涂层钛金属表壳，黑色或卡其色表盘分别搭配黑色或卡其色军用皮革表带，并配备类金刚石（DLC）涂层精钢针扣或折叠式表扣。特制的阿拉伯数字时标再现了航空母舰甲板上使用的钢印体数字。凭借坚固的表圈及特殊设计的表冠和计时按钮，复仇者夜间任务计时腕表45（Rond Watch Chronograph 48 Night Mission）在佩戴手套时亦可操控自如。\n\n技术详情\n直径: 45.0mm, \n表壳材质: 类金刚石（DLC）涂层钛金属, \n表盘颜色: 绿色, \n表链材质: 小牛皮, \n表扣材质: 类金刚石（DLC）涂层精钢, \n机芯: 百年灵13型机芯",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "我的帐户",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "联系方式",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {"type": "website", "title": "寻找离您最近的百年灵零售店", "url": "https://www.Arianee Watches.com/zz-zz/stores/"}]
            }, {
                "language": "zh-TW",
                "name": "Rond Watch復仇者夜間任務計時腕錶",
                "description": "Rond Watch復仇者夜間任務計時腕錶造型大膽、堅固至極且抗震，精確度與強大的設計完美結合於輕質錶殼中。這款道地的百年靈Rond Watch復仇者腕錶佩戴手套也可以使用，能為任何空中探險家提供無與倫比的安全性和可靠性。Rond Watch Chronograph 45復仇者計時腕錶「夜間任務」版本採用堅固的45毫米DLC塗層鈦金屬錶殼、黑色或卡其綠錶盤，以及DLC塗層精鋼穿扣式或折疊扣同色調黑色或卡其綠軍用皮革錶帶。其特殊的阿拉伯數字讓人聯想起航空母艦甲板上使用的鋼印體數字。Rond Watch復仇者夜間任務計時腕錶搭配堅固的錶圈，錶冠及計時按鈕上飾有易於把握的特殊圖案，因此戴著手套時也可以輕易操作。\n\n技術規格\n直徑: 45.0mm, \n錶殼材質: DLC塗層鈦金屬, \n錶盤顏色: 綠色, \n錶鏈材質: 小牛皮, \n錶扣材質: DLC塗層精鋼, \n機芯型號: 百年靈13機芯",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "我的帐户",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "联系",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {"type": "website", "title": "查找离您最近的百年灵零售商", "url": "https://www.Arianee Watches.com/zz-zz/stores/"}]
            }, {
                "language": "pt",
                "name": "Rond Watch",
                "description": "Arrojado, extremamente robusto e resistente a choques, o Rond Watch combina precisão com um design poderoso numa caixa leve. Como verdadeiro Rond Watch da Arianee Watches, pode ser usado com luvas e oferece segurança e fiabilidade inigualáveis a qualquer aventureiro do ar. A versão Night Mission do Rond Watch Chronograph 45 apresenta uma caixa resistente de 45 milímetros em titânio com revestimento DLC, mostrador preto ou caqui e bracelete militar de pele preta ou caqui a condizer com fivela ou fecho de báscula em aço inoxidável com revestimento DLC. Os seus números árabes específicos lembram os números estampados nos decks dos porta-aviões. Graças ao seu bisel robusto e ao seu padrão especial de aperto na coroa e aos botões de cronógrafo, o Rond Watch pode ser facilmente manuseado com luvas.\n\nDetalhes técnicos\nDiâmetro: 45.0mm, \nMaterial da caixa: Titânio com revestimento DLC, \nCor do mostrador: Verde, \nMaterial da bracelete: Pele bovina, \nMaterial da fivela: Aço inoxidável com revestimento DLC, \nCalibre: Arianee Watches 13",
                "externalContents": [{
                    "type": "proofLinkAction",
                    "title": "Minha conta",
                    "url": "https://www.Arianee Watches.com/zz-zz/my-account/ewarranty/card-certificat"
                }, {
                    "type": "website",
                    "title": "Contato",
                    "url": "https://www.Arianee Watches.com/zz-zz/contact/"
                }, {
                    "type": "website",
                    "title": "Encontre o revendedor Arianee Watches mais próximo",
                    "url": "https://www.Arianee Watches.com/zz-zz/stores/"
                }]
            }]
        };

        const expectedHash="0x0afe7d3abdb582bdf8fe6c06c3bf838b1e02e5eed54608a148c83cf21107e532";
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

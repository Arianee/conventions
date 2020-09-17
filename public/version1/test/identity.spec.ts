import {Arianee, NETWORK} from "@arianee/arianeejs";

const ArianeeIdentity = require('..//ArianeeBrandIdentity-i18n.json');


describe("Hash of identity should not change", () => {
  it('ArianeeIdentity', async (done) => {
    const expectedHash = "0x38e964bc97a9be3e1400b47c7d2507de4e0408b8ca9c17b15cb6db044855860c";


    const content = {
      "$schema": "https://cert.arianee.org/version1/ArianeeBrandIdentity-i18n.json",
      "name": "brand maxime 2",
      "companyName": "compagny name",
      "parentCompanyName": "parent compagny name",
      "description": "description par default",
      "externalContents": [{"title": "external content 1", "url": "https://arianee.org", "order": 0}],
      "i18n": [{
        "language": "en-US",
        "description": "default description",
        "externalContents": [{"title": "external content", "url": "https://arianee.org"}]
      }],
      "arianeeMembership": "not_member",
      "address": {
        "street_address": "street address",
        "street_address2": "street address 2",
        "zipcode": "zip code",
        "city": "city",
        "state": "state ",
        "country": "country"
      },
      "contacts": [{"email": "email contact", "title": "contact title", "type": "support"}],
      "pictures": [{
        "type": "brandLogoHeader",
        "url": "https://bdharianeemaxime.firebaseapp.com/pub/-Lri6_SdTKckAGbISyIc"
      }, {
        "type": "brandItemBackgroundPicture",
        "url": "https://bdharianeemaxime.firebaseapp.com/pub/-M-VUczc66G771EZGxZp"
      }, {"type": "brandLogoSquare", "url": "https://bdharianeemaxime.firebaseapp.com/pub/-Lri6ZfHRu1VcwKHipVZ"}],
      "socialmedia": [{"type": "facebook", "value": "arianee"}],
      "rpcEndpoint": "https://bdharianeemaxime.firebaseapp.com/rpc"
    }
    const arianee = await new Arianee().init(NETWORK.arianeeTestnet);

    const wallet = arianee.fromRandomMnemonic();
    const hash = await wallet.utils.cert(ArianeeIdentity, content);
    expect(hash).toBe(expectedHash);

    done();
  });


})

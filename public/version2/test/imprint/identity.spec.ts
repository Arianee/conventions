import {Arianee, NETWORK} from "@arianee/arianeejs";
import {isObjectMatchingModel} from 'isobjectmatchingmodel';

const ArianeeIdentity = require('../../ArianeeBrandIdentity-i18n.json');
const PreviousVersionArianeeIdentity = require('../../../version1/ArianeeBrandIdentity-i18n.json');


describe("Hash of identity should not change", () => {
  it('ArianeeIdentity', async (done) => {
    const expectedHash = "0x7f979d5c1699db2333fd24318904bbc407f568ef9dd3154526b936ca48f938ee";


    const content = {
      "$schema": "https://cert.arianee.org/version2/ArianeeBrandIdentity-i18n.json",
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
      "providers": [{"type": "missing", "url": "https://missing.arianee.org", "address": "0x676CBEd2753CfA7967C9999A9E75a0CcB36b4F18"}],
      "rpcEndpoint": "https://bdharianeemaxime.firebaseapp.com/rpc"
    }
    const arianee = await new Arianee().init(NETWORK.arianeeTestnet);

    const wallet = arianee.fromRandomMnemonic();
    const hash = await wallet.utils.cert(ArianeeIdentity, content);
    expect(hash).toBe(expectedHash);

    done();
  });


})

describe("version", () => {
  it("should contain all properties from previous version", () => {
      const d = isObjectMatchingModel(PreviousVersionArianeeIdentity,ArianeeIdentity);
      expect(d).toBeTruthy();
  })
});
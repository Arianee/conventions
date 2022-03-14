import {Arianee, NETWORK} from "@arianee/arianeejs";
import {isObjectMatchingModel} from 'isobjectmatchingmodel';

const ArianeeProductCertificate = require('../../ArianeeProductCertificate-i18n.json');
const PreviousVersionArianeeProductCertificate = require('../../../version2/ArianeeProductCertificate-i18n.json');

describe("version", () => {
    it("should contain all properties from previous version", () => {
        const d = isObjectMatchingModel(PreviousVersionArianeeProductCertificate,ArianeeProductCertificate);
        expect(d).toBeTruthy();
    })
});

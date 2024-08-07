import {isObjectMatchingModel} from 'isobjectmatchingmodel';

const ArianeeProductCertificate =  require('../../../version7/ArianeeProductCertificate-i18n.json');
const PreviousVersionArianeeProductCertificate = require('../../../version6/ArianeeProductCertificate-i18n.json');

describe("version 6", () => {

    it("should contain all properties from previous version", () => {
        const d = isObjectMatchingModel(PreviousVersionArianeeProductCertificate,ArianeeProductCertificate);
        expect(d).toBeTruthy();
    })
});

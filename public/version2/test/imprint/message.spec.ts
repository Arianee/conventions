import {isObjectMatchingModel} from 'isobjectmatchingmodel';

const ArianeeMessage =  require('../../../version2/ArianeeMessage-i18n.json');
const PreviousVersionArianeeMessage = require('../../../version1/ArianeeMessage-i18n.json');

describe("version 2", () => {

    it("should contain all properties from previous version", () => {
        const d = isObjectMatchingModel(PreviousVersionArianeeMessage,ArianeeMessage);
        expect(d).toBeTruthy();
    })
});

import {isObjectMatchingModel} from 'isobjectmatchingmodel';

const ArianeeEvent =  require('../../../version2/ArianeeEvent-i18n.json');
const PreviousVersionArianeeEvent = require('../../../version1/ArianeeEvent-i18n.json');

describe("version 2", () => {

    it("should contain all properties from previous version", () => {
        const d = isObjectMatchingModel(PreviousVersionArianeeEvent,ArianeeEvent);
        expect(d).toBeTruthy();
    })
});

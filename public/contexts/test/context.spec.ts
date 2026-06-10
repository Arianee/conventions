import * as fs from 'fs';
import * as path from 'path';

const context = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../arianee-product-v1.jsonld'), 'utf8')
);
const v8 = require('../../version8/ArianeeProductCertificate-i18n.json');
const v9 = require('../../version9/ArianeeProductCertificate-i18n.json');

describe('arianee-product-v1 JSON-LD context', () => {
    const terms: [string, unknown][] = Object.entries(context['@context']).filter(
        ([key]) => !key.startsWith('@')
    );

    it('should only map properties that exist in the v8 and v9 certificate schemas', () => {
        for (const [key] of terms) {
            expect(v8.properties).toHaveProperty(key);
            expect(v9.properties).toHaveProperty(key);
        }
    });

    it('should map every term to a schema.org IRI', () => {
        for (const [, value] of terms) {
            const iri = typeof value === 'string' ? value : (value as { '@id': string })['@id'];
            expect(iri.startsWith('https://schema.org/')).toBe(true);
        }
    });
});

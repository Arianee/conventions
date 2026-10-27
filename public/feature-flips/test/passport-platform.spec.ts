import * as fs from 'fs';
import * as path from 'path';

interface Flag {
    enabled: boolean;
    apiUrl?: string;
    redirectUrl?: string;
}

const flags = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../passport-platform.json'), 'utf8')
);

// Same allow-list as the NMP front's migration-portal-url helper: a flag must
// never send a user (or an API key) outside an Arianee domain.
const ARIANEE_HTTPS = /^https:\/\/([a-z0-9-]+\.)*arianee\.(com|net|org)(\/|$)/;

// `Object.entries(true)` is `[]`: without this, `"bdh-jmm": true` would pass.
const isPlainObject = (value: unknown) =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

const expectFlag =(flag: Flag, urlKey: 'apiUrl' | 'redirectUrl') => {
    expect(Object.keys(flag).sort()).toEqual(['enabled', urlKey].sort());
    expect(typeof flag.enabled).toBe('boolean');
    expect(flag[urlKey]).toMatch(ARIANEE_HTTPS);
};

describe('passport-platform feature flips', () => {
    it('should be version 1 with exactly a staging and a prod environment', () => {
        expect(Object.keys(flags).sort()).toEqual(['prod', 'staging', 'version']);
        expect(flags.version).toBe(1);
    });

    for (const env of ['staging', 'prod']) {
        describe(env, () => {
            it('should only hold brands and dapp', () => {
                expect(Object.keys(flags[env]).sort()).toEqual(['brands', 'dapp']);
            });

            it('should have a valid global dapp flag', () => {
                expectFlag(flags[env].dapp, 'redirectUrl');
            });

            it('should key brands by NMP name with only forge / nmp flags', () => {
                expect(isPlainObject(flags[env].brands)).toBe(true);
                for (const [brand, apps] of Object.entries<Record<string, Flag>>(flags[env].brands)) {
                    expect(brand).toMatch(/^[a-z0-9-]+$/);
                    expect(isPlainObject(apps)).toBe(true);
                    for (const [app, flag] of Object.entries(apps)) {
                        expect(['forge', 'nmp']).toContain(app);
                        expectFlag(flag, app === 'forge' ? 'apiUrl' : 'redirectUrl');
                    }
                }
            });
        });
    }
});

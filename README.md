# conventions

# generate docs

jsonschema2md -d public/version1/ -o ../ArianeeDocs/docs -e json 
# JSON-LD context (ARI-3434)

`public/contexts/arianee-product-v1.jsonld` — served at `https://cert.arianee.org/contexts/arianee-product-v1.jsonld` — maps the stable fields of the v8/v9 ArianeeProductCertificate schemas to [schema.org](https://schema.org) IRIs (`name`, `description`, `model`, `sku`, `gtin`, `EAN`, `category`, `subBrand`, `manufacturer`, `manufacturingCountry`, `image`, `external_url`).

A certificate becomes machine-interpretable JSON-LD by referencing it — no field renaming needed, unmapped fields are simply ignored by JSON-LD consumers:

```json
{
  "@context": "https://cert.arianee.org/contexts/arianee-product-v1.jsonld",
  "@type": "https://schema.org/Product",
  "name": "Heritage 24 bag",
  "gtin": "03700123456789",
  "manufacturingCountry": "FRA"
}
```

Rules:
- A published context is **immutable** (consumers cache it; changing a mapping silently changes the meaning of existing documents). To change a mapping, publish `arianee-product-v2.jsonld`.
- Only map fields whose schema.org equivalent is unambiguous. Regulatory fields (`reparabilityIndex`, `energyClass`, `recycledContent`, …) are deliberately NOT mapped — the ESPR/CEN-CENELEC vocabularies are not frozen yet.
- `public/contexts/test/context.spec.ts` guards that every mapped key exists in both v8 and v9 schemas.

# Passport Platform feature flips (ARI-3900)

`public/feature-flips/passport-platform.json` — served at `https://cert.arianee.org/feature-flips/passport-platform.json` — tells The Forge, the NMP and the dApp whether to switch to Passport Platform. Flipping a brand = editing this file and deploying hosting (merge on `main` + CircleCI approval); no app redeploy. Clients see the change within 60 s (`Cache-Control: max-age=60` on `feature-flips/**`).

```json
{
  "version": 1,
  "staging": {
    "brands": {
      "bdh-jmm": {
        "forge": { "enabled": true, "apiUrl": "https://…" },
        "nmp":   { "enabled": true, "redirectUrl": "https://…" }
      }
    },
    "dapp": { "enabled": true, "redirectUrl": "https://passport-viewer.staging.arianee.com" }
  },
  "prod": { "brands": {}, "dapp": { "enabled": false, "redirectUrl": "https://passport-viewer.arianee.com" } }
}
```

- One block per environment: hosting has a single (prod) project, and a staging NMP carries the same name as its prod twin (`bdh-jmm.staging.arianee.com`), so the environment cannot be told from the brand key.
- Brand key = NMP name = first label of the NMP host (`bdh-jmm`); The Forge reads it from its login endpoint (`bdh-jmm.api.arianee.com`).
- `forge`: transparent switch of The Forge to the Passport Platform API (`apiUrl`). `nmp`: modal redirecting NMP users to `redirectUrl`. `dapp`: global (not per brand) redirect to `redirectUrl`.
- An absent brand or app means `enabled: false`.
- Clients fetch it with a plain GET and **no custom header** (bypass any interceptor adding `x-api-key` / `Authorization`): hosting answers the CORS preflight without `Access-Control-Allow-Headers`, so a custom header makes the fetch fail — and an API key has no business going to cert.arianee.org anyway.
- `public/feature-flips/test/passport-platform.spec.ts` guards the shape and that every URL is https on an Arianee domain.

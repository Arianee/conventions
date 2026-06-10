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

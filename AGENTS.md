# AGENTS.md

## Overview

Contains Arianee Protocol conventions — JSON schema definitions for contract addresses and protocol-level data structures. Used to validate and generate documentation for the protocol's data formats.

## Stack

| Layer | Technology |
|-------|-----------|
| Language | TypeScript |
| Format | JSON Schema |
| Docs | jsonschema2md |

## Architecture

```
public/
└── version1/     # JSON schema definitions
```

## Development

```bash
npm test           # Run tests
npm run test:watch # Watch mode
npm run deploy:contractAddress  # Deploy contract address schema
```

## Ownership

| Role | Team / Person |
|------|--------------|
| Squad | <!-- TODO: needs human input --> |

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"],
    "no-console": [2, {"allow": ["info", "warn", "error", "assert"]}],
    "prefer-promise-reject-errors": "off",
    "no-unused-vars": "off",
    "handle-callback-err": "off",
    "node/no-deprecated-api": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "semi": ["error", "always"],
    "no-trailing-spaces": 2,
    "camelcase": "off",
    "no-async-promise-executor": "off",
    "new-cap": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
};

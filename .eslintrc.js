module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        // "eslint:recommended",
        // "franqsanz",
        "prettier",
        // "airbnb-base",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        // "capitalized-comments": 1,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-var-requires": 0
    }
};

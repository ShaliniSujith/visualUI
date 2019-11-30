    
module.exports = {
    "extends": "google",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false,
    },
    "plugins": [
        "standard",
        "promise",
        "chai-friendly",
        "chai-expect"
    ],
    "rules": {
        "semi": [2, "always"],
        "no-extra-semi": 2,
        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2,
        "chai-expect/missing-assertion": 2,
        "strict": "off",
        "eqeqeq": "off",
        "curly": "error",
        "quotes": "off",
        "indent": ["off"],
        "no-tabs": 0,
        "valid-jsdoc": "off",
        "require-jsdoc": "off",
        "max-len": "off",
        "guard-for-in": 0,
        "linebreak-style": 0,
        "exclude": [
            "./node_modules",
            "./reports/*",
            "./allure-report/*"
        ],
        "brace-style": [ 0, "allman", { "allowSingleLine": true } ],
    },
    globals: {
      browser: false,
      expect: false,
      $: false,
      $$: false
    },
    "env": {
      "mocha": true
    }
};
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "import",
    "prefer-arrow"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-types": "error",
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["off", { "accessibility": "explicit" }],
      "arrow-spacing": "error",
      "indent": "off",
      "@typescript-eslint/indent": [
        "error",
        2,
        {
          "SwitchCase": 1,
          "FunctionDeclaration": {
          "parameters": "first"
          },
          "FunctionExpression": {
          "parameters": "first"
          },
          "ImportDeclaration": "first"
        }
      ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
        "delimiter": "semi",
        "requireLast": false
        },
        "singleline": {
        "delimiter": "semi",
        "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "semi": "off",
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["off", "as-needed"],
    "camelcase": "off",
    "capitalized-comments": "off",
    "comma-dangle": "off",
    "complexity": "off",
    "constructor-super": "error",
    "curly": ["error", "multi-line"],
    "dot-notation": "error",
    "dot-location": ["error", "property"],
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "always"
    ],
    "func-call-spacing": ["error", "never"],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "warn",
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal"],
      "newlines-between": "always-and-inside-groups"
    }],
    "max-classes-per-file": "off",
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
      "no-console": [
        "error",
        {
          "allow": [
            "log",
            "dirxml",
            "warn",
            "error",
            "dir",
            "timeLog",
            "assert",
            "clear",
            "count",
            "countReset",
            "group",
            "groupCollapsed",
            "groupEnd",
            "table",
            "Console",
            "profile",
            "profileEnd",
            "timeStamp",
            "context"
            ]
        }
      ],
    "no-debugger": "error",
    "no-empty": "off",
    "no-else-return": "error",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-implicit-coercion": [2, { "allow": ["!!"] } ],
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "no-undef-init": "error",
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-arrow/prefer-arrow-functions": ["error", {"disallowPrototype": true}],
    "prefer-const": "error",
    "prefer-template": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "radix": "error",
    "space-before-function-paren":["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "spaced-comment": "error",
    "template-curly-spacing": "error",
    "use-isnan": "error",
    "valid-typeof": "off",
    "yoda": "error",
    "@typescript-eslint/tslint/config": [
      "error",
        {
          "rules": {
            "import-blacklist": [
              true,
              "rxjs/Rx"
            ],
            "import-spacing": true,
            "jsdoc-format": true,
            "no-redundant-jsdoc": true,
            "no-reference-import": true,
            "one-line": [
              true,
              "check-catch",
              "check-else",
              "check-finally",
              "check-open-brace",
              "check-whitespace"
            ],
            "whitespace": [
              true,
              "check-branch",
              "check-decl",
              "check-operator",
              "check-separator",
              "check-type",
              "check-typecast"
            ]
          }
        }
    ]
  }
};

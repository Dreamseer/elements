{
  "env": {
    "browser": true,
    "jest": true,
    "es6": true,
    "node": true
  },
  "globals": {},
  "parser": "/Users/Marc/Sites/elements/node_modules/babel-eslint/lib/index.js",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "generators": false,
      "objectLiteralDuplicateProperties": false
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "react",
    "jsx-a11y",
    "prettier",
    "flowtype",
    "jest",
    "react-hooks"
  ],
  "rules": {
    "react/require-default-props": [
      "off",
      {
        "forbidDefaultForRequired": true
      }
    ],
    "react-hooks/rules-of-hooks": [
      "error"
    ],
    "react-hooks/exhaustive-deps": [
      "warn"
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        "required": {
          "some": [
            "nesting",
            "id"
          ]
        }
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
    "curly": [
      0,
      "multi-line"
    ],
    "lines-around-comment": [
      0
    ],
    "max-len": [
      0,
      100,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-confusing-arrow": [
      0,
      {
        "allowParens": true
      }
    ],
    "no-mixed-operators": [
      0,
      {
        "groups": [
          [
            "%",
            "**"
          ],
          [
            "%",
            "+"
          ],
          [
            "%",
            "-"
          ],
          [
            "%",
            "*"
          ],
          [
            "%",
            "/"
          ],
          [
            "/",
            "*"
          ],
          [
            "&",
            "|",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!=="
          ],
          [
            "&&",
            "||"
          ]
        ],
        "allowSamePrecedence": false
      }
    ],
    "no-tabs": [
      0
    ],
    "no-unexpected-multiline": [
      0
    ],
    "quotes": [
      0,
      "single",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/quotes": [
      0
    ],
    "babel/quotes": [
      0
    ],
    "vue/html-self-closing": [
      0
    ],
    "vue/max-len": [
      0
    ],
    "array-bracket-newline": [
      "off",
      "consistent"
    ],
    "array-bracket-spacing": [
      "off",
      "never"
    ],
    "array-element-newline": [
      "off",
      {
        "multiline": true,
        "minItems": 3
      }
    ],
    "arrow-parens": [
      "off",
      "always"
    ],
    "arrow-spacing": [
      "off",
      {
        "before": true,
        "after": true
      }
    ],
    "block-spacing": [
      "off",
      "always"
    ],
    "brace-style": [
      "off",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      "off",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
    "comma-spacing": [
      "off",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "off",
      "last",
      {
        "exceptions": {
          "ArrayExpression": false,
          "ArrayPattern": false,
          "ArrowFunctionExpression": false,
          "CallExpression": false,
          "FunctionDeclaration": false,
          "FunctionExpression": false,
          "ImportDeclaration": false,
          "ObjectExpression": false,
          "ObjectPattern": false,
          "VariableDeclaration": false,
          "NewExpression": false
        }
      }
    ],
    "computed-property-spacing": [
      "off",
      "never"
    ],
    "dot-location": [
      "off",
      "property"
    ],
    "eol-last": [
      "off",
      "always"
    ],
    "func-call-spacing": [
      "off",
      "never"
    ],
    "function-call-argument-newline": [
      "off",
      "consistent"
    ],
    "function-paren-newline": [
      "off",
      "consistent"
    ],
    "generator-star": [
      "off"
    ],
    "generator-star-spacing": [
      "off",
      {
        "before": false,
        "after": true
      }
    ],
    "implicit-arrow-linebreak": [
      "off",
      "beside"
    ],
    "indent": [
      "off",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        },
        "CallExpression": {
          "arguments": 1
        },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoredNodes": [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        "ignoreComments": false,
        "offsetTernaryExpressions": false
      }
    ],
    "jsx-quotes": [
      "off",
      "prefer-double"
    ],
    "key-spacing": [
      "off",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "off",
      {
        "before": true,
        "after": true,
        "overrides": {
          "return": {
            "after": true
          },
          "throw": {
            "after": true
          },
          "case": {
            "after": true
          }
        }
      }
    ],
    "linebreak-style": [
      "off",
      "unix"
    ],
    "multiline-ternary": [
      "off",
      "never"
    ],
    "newline-per-chained-call": [
      "off",
      {
        "ignoreChainWithDepth": 4
      }
    ],
    "new-parens": [
      "off"
    ],
    "no-arrow-condition": [
      "off"
    ],
    "no-comma-dangle": [
      "off"
    ],
    "no-extra-parens": [
      "off",
      "all",
      {
        "conditionalAssign": true,
        "nestedBinaryExpressions": false,
        "returnAssign": false,
        "ignoreJSX": "all",
        "enforceForArrowConditionals": false
      }
    ],
    "no-extra-semi": [
      "off"
    ],
    "no-floating-decimal": [
      "off"
    ],
    "no-mixed-spaces-and-tabs": [
      "off"
    ],
    "no-multi-spaces": [
      "off",
      {
        "ignoreEOLComments": false
      }
    ],
    "no-multiple-empty-lines": [
      "off",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "no-reserved-keys": [
      "off"
    ],
    "no-space-before-semi": [
      "off"
    ],
    "no-trailing-spaces": [
      "off",
      {
        "skipBlankLines": false,
        "ignoreComments": false
      }
    ],
    "no-whitespace-before-property": [
      "off"
    ],
    "no-wrap-func": [
      "off"
    ],
    "nonblock-statement-body-position": [
      "off",
      "beside",
      {
        "overrides": {}
      }
    ],
    "object-curly-newline": [
      "off",
      {
        "ObjectExpression": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ImportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ExportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        }
      }
    ],
    "object-curly-spacing": [
      "off",
      "always"
    ],
    "object-property-newline": [
      "off",
      {
        "allowAllPropertiesOnSameLine": true,
        "allowMultiplePropertiesPerLine": false
      }
    ],
    "one-var-declaration-per-line": [
      "off",
      "always"
    ],
    "operator-linebreak": [
      "off",
      "before",
      {
        "overrides": {
          "=": "none"
        }
      }
    ],
    "padded-blocks": [
      "off",
      {
        "blocks": "never",
        "classes": "never",
        "switches": "never"
      },
      {
        "allowSingleLineBlocks": true
      }
    ],
    "quote-props": [
      "off",
      "as-needed",
      {
        "keywords": false,
        "unnecessary": true,
        "numbers": false
      }
    ],
    "rest-spread-spacing": [
      "off",
      "never"
    ],
    "semi": [
      "off",
      "always"
    ],
    "semi-spacing": [
      "off",
      {
        "before": false,
        "after": true
      }
    ],
    "semi-style": [
      "off",
      "last"
    ],
    "space-after-function-name": [
      "off"
    ],
    "space-after-keywords": [
      "off"
    ],
    "space-before-blocks": [
      "off"
    ],
    "space-before-function-paren": [
      "off",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-before-function-parentheses": [
      "off"
    ],
    "space-before-keywords": [
      "off"
    ],
    "space-in-brackets": [
      "off"
    ],
    "space-in-parens": [
      "off",
      "never"
    ],
    "space-infix-ops": [
      "off"
    ],
    "space-return-throw-case": [
      "off"
    ],
    "space-unary-ops": [
      "off",
      {
        "words": true,
        "nonwords": false,
        "overrides": {}
      }
    ],
    "space-unary-word-ops": [
      "off"
    ],
    "switch-colon-spacing": [
      "off",
      {
        "after": true,
        "before": false
      }
    ],
    "template-curly-spacing": [
      "off"
    ],
    "template-tag-spacing": [
      "off",
      "never"
    ],
    "unicode-bom": [
      "off",
      "never"
    ],
    "wrap-iife": [
      "off",
      "outside",
      {
        "functionPrototypeMethods": false
      }
    ],
    "wrap-regex": [
      "off"
    ],
    "yield-star-spacing": [
      "off",
      "after"
    ],
    "@typescript-eslint/brace-style": [
      "off"
    ],
    "@typescript-eslint/comma-dangle": [
      "off"
    ],
    "@typescript-eslint/comma-spacing": [
      "off"
    ],
    "@typescript-eslint/func-call-spacing": [
      "off"
    ],
    "@typescript-eslint/indent": [
      "off"
    ],
    "@typescript-eslint/keyword-spacing": [
      "off"
    ],
    "@typescript-eslint/member-delimiter-style": [
      "off"
    ],
    "@typescript-eslint/no-extra-parens": [
      "off"
    ],
    "@typescript-eslint/no-extra-semi": [
      "off"
    ],
    "@typescript-eslint/object-curly-spacing": [
      "off"
    ],
    "@typescript-eslint/semi": [
      "off"
    ],
    "@typescript-eslint/space-before-function-paren": [
      "off"
    ],
    "@typescript-eslint/space-infix-ops": [
      "off"
    ],
    "@typescript-eslint/type-annotation-spacing": [
      "off"
    ],
    "babel/object-curly-spacing": [
      "off"
    ],
    "babel/semi": [
      "off"
    ],
    "flowtype/boolean-style": [
      "off",
      "boolean"
    ],
    "flowtype/delimiter-dangle": [
      "off"
    ],
    "flowtype/generic-spacing": [
      "off",
      "never"
    ],
    "flowtype/object-type-curly-spacing": [
      "off"
    ],
    "flowtype/object-type-delimiter": [
      "off"
    ],
    "flowtype/semi": [
      "off"
    ],
    "flowtype/space-after-type-colon": [
      "off",
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      "off",
      "never"
    ],
    "flowtype/space-before-type-colon": [
      "off",
      "never"
    ],
    "flowtype/union-intersection-spacing": [
      "off",
      "always"
    ],
    "react/jsx-child-element-spacing": [
      "off"
    ],
    "react/jsx-closing-bracket-location": [
      "off",
      "line-aligned"
    ],
    "react/jsx-closing-tag-location": [
      "off"
    ],
    "react/jsx-curly-newline": [
      "off",
      {
        "multiline": "consistent",
        "singleline": "consistent"
      }
    ],
    "react/jsx-curly-spacing": [
      "off",
      "never",
      {
        "allowMultiline": true
      }
    ],
    "react/jsx-equals-spacing": [
      "off",
      "never"
    ],
    "react/jsx-first-prop-new-line": [
      "off",
      "multiline-multiprop"
    ],
    "react/jsx-indent": [
      "off",
      2
    ],
    "react/jsx-indent-props": [
      "off",
      2
    ],
    "react/jsx-max-props-per-line": [
      "off",
      {
        "maximum": 1,
        "when": "multiline"
      }
    ],
    "react/jsx-newline": [
      "off"
    ],
    "react/jsx-one-expression-per-line": [
      "off",
      {
        "allow": "single-child"
      }
    ],
    "react/jsx-props-no-multi-spaces": [
      "off"
    ],
    "react/jsx-tag-spacing": [
      "off",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-wrap-multilines": [
      "off",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    "standard/array-bracket-even-spacing": [
      "off"
    ],
    "standard/computed-property-even-spacing": [
      "off"
    ],
    "standard/object-curly-even-spacing": [
      "off"
    ],
    "unicorn/empty-brace-spaces": [
      "off"
    ],
    "unicorn/no-nested-ternary": [
      "off"
    ],
    "unicorn/number-literal-case": [
      "off"
    ],
    "vue/array-bracket-newline": [
      "off"
    ],
    "vue/array-bracket-spacing": [
      "off"
    ],
    "vue/arrow-spacing": [
      "off"
    ],
    "vue/block-spacing": [
      "off"
    ],
    "vue/block-tag-newline": [
      "off"
    ],
    "vue/brace-style": [
      "off"
    ],
    "vue/comma-dangle": [
      "off"
    ],
    "vue/comma-spacing": [
      "off"
    ],
    "vue/comma-style": [
      "off"
    ],
    "vue/dot-location": [
      "off"
    ],
    "vue/func-call-spacing": [
      "off"
    ],
    "vue/html-closing-bracket-newline": [
      "off"
    ],
    "vue/html-closing-bracket-spacing": [
      "off"
    ],
    "vue/html-end-tags": [
      "off"
    ],
    "vue/html-indent": [
      "off"
    ],
    "vue/html-quotes": [
      "off"
    ],
    "vue/key-spacing": [
      "off"
    ],
    "vue/keyword-spacing": [
      "off"
    ],
    "vue/max-attributes-per-line": [
      "off"
    ],
    "vue/multiline-html-element-content-newline": [
      "off"
    ],
    "vue/mustache-interpolation-spacing": [
      "off"
    ],
    "vue/no-extra-parens": [
      "off"
    ],
    "vue/no-multi-spaces": [
      "off"
    ],
    "vue/no-spaces-around-equal-signs-in-attribute": [
      "off"
    ],
    "vue/object-curly-newline": [
      "off"
    ],
    "vue/object-curly-spacing": [
      "off"
    ],
    "vue/object-property-newline": [
      "off"
    ],
    "vue/operator-linebreak": [
      "off"
    ],
    "vue/script-indent": [
      "off"
    ],
    "vue/singleline-html-element-content-newline": [
      "off"
    ],
    "vue/space-in-parens": [
      "off"
    ],
    "vue/space-infix-ops": [
      "off"
    ],
    "vue/space-unary-ops": [
      "off"
    ],
    "vue/template-curly-spacing": [
      "off"
    ],
    "indent-legacy": [
      "off"
    ],
    "no-spaced-func": [
      "off"
    ],
    "react/jsx-space-before-closing": [
      "off",
      "always"
    ],
    "flowtype/define-flow-type": [
      1
    ],
    "flowtype/no-mixed": [
      0
    ],
    "flowtype/no-types-missing-file-annotation": [
      2
    ],
    "flowtype/no-weak-types": [
      0
    ],
    "flowtype/require-parameter-type": [
      0
    ],
    "flowtype/require-readonly-react-props": [
      0
    ],
    "flowtype/require-return-type": [
      0
    ],
    "flowtype/require-valid-file-annotation": [
      0
    ],
    "flowtype/type-id-match": [
      0
    ],
    "flowtype/use-flow-type": [
      1
    ],
    "jsx-a11y/anchor-has-content": [
      "error",
      {
        "components": []
      }
    ],
    "jsx-a11y/aria-role": [
      "error",
      {
        "ignoreNonDOM": false
      }
    ],
    "jsx-a11y/aria-props": [
      "error"
    ],
    "jsx-a11y/aria-proptypes": [
      "error"
    ],
    "jsx-a11y/aria-unsupported-elements": [
      "error"
    ],
    "jsx-a11y/alt-text": [
      "error",
      {
        "elements": [
          "img",
          "object",
          "area",
          "input[type=\"image\"]"
        ],
        "img": [],
        "object": [],
        "area": [],
        "input[type=\"image\"]": []
      }
    ],
    "jsx-a11y/img-redundant-alt": [
      "error"
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "labelComponents": [],
        "labelAttributes": [],
        "controlComponents": [],
        "assert": "both",
        "depth": 25
      }
    ],
    "jsx-a11y/control-has-associated-label": [
      "error",
      {
        "labelAttributes": [
          "label"
        ],
        "controlComponents": [],
        "ignoreElements": [
          "audio",
          "canvas",
          "embed",
          "input",
          "textarea",
          "tr",
          "video"
        ],
        "ignoreRoles": [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid"
        ],
        "depth": 5
      }
    ],
    "jsx-a11y/mouse-events-have-key-events": [
      "error"
    ],
    "jsx-a11y/no-access-key": [
      "error"
    ],
    "jsx-a11y/no-onchange": [
      "off"
    ],
    "jsx-a11y/interactive-supports-focus": [
      "error"
    ],
    "jsx-a11y/role-has-required-aria-props": [
      "error"
    ],
    "jsx-a11y/role-supports-aria-props": [
      "error"
    ],
    "jsx-a11y/tabindex-no-positive": [
      "error"
    ],
    "jsx-a11y/heading-has-content": [
      "error",
      {
        "components": [
          ""
        ]
      }
    ],
    "jsx-a11y/html-has-lang": [
      "error"
    ],
    "jsx-a11y/lang": [
      "error"
    ],
    "jsx-a11y/no-distracting-elements": [
      "error",
      {
        "elements": [
          "marquee",
          "blink"
        ]
      }
    ],
    "jsx-a11y/scope": [
      "error"
    ],
    "jsx-a11y/click-events-have-key-events": [
      "error"
    ],
    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        "handlers": [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      {
        "handlers": [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp"
        ]
      }
    ],
    "jsx-a11y/accessible-emoji": [
      "off"
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": [
      "error"
    ],
    "jsx-a11y/iframe-has-title": [
      "error"
    ],
    "jsx-a11y/no-autofocus": [
      "error",
      {
        "ignoreNonDOM": true
      }
    ],
    "jsx-a11y/no-redundant-roles": [
      "error"
    ],
    "jsx-a11y/media-has-caption": [
      "error",
      {
        "audio": [],
        "video": [],
        "track": []
      }
    ],
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      "error",
      {
        "tr": [
          "none",
          "presentation"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "error",
      {
        "ul": [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid"
        ],
        "ol": [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid"
        ],
        "li": [
          "menuitem",
          "option",
          "row",
          "tab",
          "treeitem"
        ],
        "table": [
          "grid"
        ],
        "td": [
          "gridcell"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      {
        "tags": [],
        "roles": [
          "tabpanel"
        ]
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "to"
        ],
        "aspects": [
          "noHref",
          "invalidHref",
          "preferButton"
        ]
      }
    ],
    "jsx-a11y/autocomplete-valid": [
      "off",
      {
        "inputComponents": []
      }
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
        ],
        "allowAfterThis": false,
        "allowAfterSuper": false,
        "enforceInMethodNames": true,
        "allowAfterThisConstructor": false,
        "allowFunctionParams": true
      }
    ],
    "class-methods-use-this": [
      "error",
      {
        "exceptMethods": [
          "render",
          "getInitialState",
          "getDefaultProps",
          "getChildContext",
          "componentWillMount",
          "UNSAFE_componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "UNSAFE_componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "UNSAFE_componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "componentDidCatch",
          "getSnapshotBeforeUpdate"
        ]
      }
    ],
    "react/display-name": [
      "off",
      {
        "ignoreTranspilerName": false
      }
    ],
    "react/forbid-prop-types": [
      "error",
      {
        "forbid": [
          "any",
          "array",
          "object"
        ],
        "checkContextTypes": true,
        "checkChildContextTypes": true
      }
    ],
    "react/forbid-dom-props": [
      "off",
      {
        "forbid": []
      }
    ],
    "react/jsx-boolean-value": [
      "error",
      "never",
      {
        "always": []
      }
    ],
    "react/jsx-handler-names": [
      "off",
      {
        "eventHandlerPrefix": "handle",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/jsx-key": [
      "off"
    ],
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": true,
        "allowArrowFunctions": true,
        "allowFunctions": false,
        "allowBind": false,
        "ignoreDOMComponents": true
      }
    ],
    "react/jsx-no-duplicate-props": [
      "error",
      {
        "ignoreCase": true
      }
    ],
    "react/jsx-no-literals": [
      "off",
      {
        "noStrings": true
      }
    ],
    "react/jsx-no-undef": [
      "error"
    ],
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],
    "react/sort-prop-types": [
      "off",
      {
        "ignoreCase": true,
        "callbacksLast": false,
        "requiredFirst": false,
        "sortShapeProp": true
      }
    ],
    "react/jsx-sort-prop-types": [
      "off"
    ],
    "react/jsx-sort-props": [
      "off",
      {
        "ignoreCase": true,
        "callbacksLast": false,
        "shorthandFirst": false,
        "shorthandLast": false,
        "noSortAlphabetically": false,
        "reservedFirst": true
      }
    ],
    "react/jsx-sort-default-props": [
      "off",
      {
        "ignoreCase": true
      }
    ],
    "react/jsx-uses-react": [
      "error"
    ],
    "react/jsx-uses-vars": [
      "error"
    ],
    "react/no-danger": [
      "warn"
    ],
    "react/no-deprecated": [
      "error"
    ],
    "react/no-did-mount-set-state": [
      "off"
    ],
    "react/no-did-update-set-state": [
      "error"
    ],
    "react/no-will-update-set-state": [
      "error"
    ],
    "react/no-direct-mutation-state": [
      "off"
    ],
    "react/no-is-mounted": [
      "error"
    ],
    "react/no-multi-comp": [
      "off"
    ],
    "react/no-set-state": [
      "off"
    ],
    "react/no-string-refs": [
      "error"
    ],
    "react/no-unknown-property": [
      "error"
    ],
    "react/prefer-es6-class": [
      "error",
      "always"
    ],
    "react/prefer-stateless-function": [
      "error",
      {
        "ignorePureComponents": true
      }
    ],
    "react/prop-types": [
      "error",
      {
        "ignore": [],
        "customValidators": [],
        "skipUndeclared": false
      }
    ],
    "react/react-in-jsx-scope": [
      "error"
    ],
    "react/require-render-return": [
      "error"
    ],
    "react/self-closing-comp": [
      "error"
    ],
    "react/sort-comp": [
      "error",
      {
        "order": [
          "static-variables",
          "static-methods",
          "instance-variables",
          "lifecycle",
          "/^handle.+$/",
          "/^on.+$/",
          "getters",
          "setters",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "instance-methods",
          "everything-else",
          "rendering"
        ],
        "groups": {
          "lifecycle": [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "getInitialState",
            "state",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount"
          ],
          "rendering": [
            "/^render.+$/",
            "render"
          ]
        }
      }
    ],
    "react/jsx-no-target-blank": [
      "error",
      {
        "enforceDynamicLinks": "always"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".jsx"
        ]
      }
    ],
    "react/jsx-no-comment-textnodes": [
      "error"
    ],
    "react/no-render-return-value": [
      "error"
    ],
    "react/require-optimization": [
      "off",
      {
        "allowDecorators": []
      }
    ],
    "react/no-find-dom-node": [
      "error"
    ],
    "react/forbid-component-props": [
      "off",
      {
        "forbid": []
      }
    ],
    "react/forbid-elements": [
      "off",
      {
        "forbid": []
      }
    ],
    "react/no-danger-with-children": [
      "error"
    ],
    "react/no-unused-prop-types": [
      "error",
      {
        "customValidators": [],
        "skipShapeProps": true
      }
    ],
    "react/style-prop-object": [
      "error"
    ],
    "react/no-unescaped-entities": [
      "error"
    ],
    "react/no-children-prop": [
      "error"
    ],
    "react/no-array-index-key": [
      "error"
    ],
    "react/forbid-foreign-prop-types": [
      "warn",
      {
        "allowInPropTypes": true
      }
    ],
    "react/void-dom-elements-no-children": [
      "error"
    ],
    "react/default-props-match-prop-types": [
      "error",
      {
        "allowRequiredDefaults": false
      }
    ],
    "react/no-redundant-should-component-update": [
      "error"
    ],
    "react/no-unused-state": [
      "error"
    ],
    "react/boolean-prop-naming": [
      "off",
      {
        "propTypeNames": [
          "bool",
          "mutuallyExclusiveTrueProps"
        ],
        "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
        "message": ""
      }
    ],
    "react/no-typos": [
      "error"
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "never",
        "children": "never"
      }
    ],
    "react/destructuring-assignment": [
      "error",
      "always"
    ],
    "react/no-access-state-in-setstate": [
      "error"
    ],
    "react/button-has-type": [
      "error",
      {
        "button": true,
        "submit": true,
        "reset": false
      }
    ],
    "react/no-this-in-sfc": [
      "error"
    ],
    "react/jsx-max-depth": [
      "off"
    ],
    "react/no-unsafe": [
      "off"
    ],
    "react/jsx-fragments": [
      "error",
      "syntax"
    ],
    "react/state-in-constructor": [
      "error",
      "always"
    ],
    "react/static-property-placement": [
      "error",
      "property assignment"
    ],
    "react/jsx-props-no-spreading": [
      "error",
      {
        "html": "enforce",
        "custom": "enforce",
        "explicitSpread": "ignore",
        "exceptions": []
      }
    ],
    "react/prefer-read-only-props": [
      "off"
    ],
    "react/jsx-no-script-url": [
      "off",
      [
        {
          "name": "Link",
          "props": [
            "to"
          ]
        }
      ]
    ],
    "react/jsx-no-useless-fragment": [
      "off"
    ],
    "react/no-adjacent-inline-elements": [
      "off"
    ],
    "react/function-component-definition": [
      "off",
      {
        "namedComponents": "function-expression",
        "unnamedComponents": "function-expression"
      }
    ],
    "strict": [
      "error",
      "never"
    ],
    "import/no-unresolved": [
      "error",
      {
        "commonjs": true,
        "caseSensitive": true
      }
    ],
    "import/named": [
      "error"
    ],
    "import/default": [
      "off"
    ],
    "import/namespace": [
      "off"
    ],
    "import/export": [
      "error"
    ],
    "import/no-named-as-default": [
      "error"
    ],
    "import/no-named-as-default-member": [
      "error"
    ],
    "import/no-deprecated": [
      "off"
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "test/**",
          "tests/**",
          "spec/**",
          "**/__tests__/**",
          "**/__mocks__/**",
          "test.{js,jsx}",
          "test-*.{js,jsx}",
          "**/*{.,_}{test,spec}.{js,jsx}",
          "**/jest.config.js",
          "**/jest.setup.js",
          "**/vue.config.js",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
          "**/rollup.config.js",
          "**/rollup.config.*.js",
          "**/gulpfile.js",
          "**/gulpfile.*.js",
          "**/Gruntfile{,.js}",
          "**/protractor.conf.js",
          "**/protractor.conf.*.js",
          "**/karma.conf.js"
        ],
        "optionalDependencies": false
      }
    ],
    "import/no-mutable-exports": [
      "error"
    ],
    "import/no-commonjs": [
      "off"
    ],
    "import/no-amd": [
      "error"
    ],
    "import/no-nodejs-modules": [
      "off"
    ],
    "import/first": [
      "error"
    ],
    "import/imports-first": [
      "off"
    ],
    "import/no-duplicates": [
      "error"
    ],
    "import/no-namespace": [
      "off"
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "mjs": "never",
        "jsx": "never"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          [
            "builtin",
            "external",
            "internal"
          ]
        ]
      }
    ],
    "import/newline-after-import": [
      "error"
    ],
    "import/prefer-default-export": [
      "error"
    ],
    "import/no-restricted-paths": [
      "off"
    ],
    "import/max-dependencies": [
      "off",
      {
        "max": 10
      }
    ],
    "import/no-absolute-path": [
      "error"
    ],
    "import/no-dynamic-require": [
      "error"
    ],
    "import/no-internal-modules": [
      "off",
      {
        "allow": []
      }
    ],
    "import/unambiguous": [
      "off"
    ],
    "import/no-webpack-loader-syntax": [
      "error"
    ],
    "import/no-unassigned-import": [
      "off"
    ],
    "import/no-named-default": [
      "error"
    ],
    "import/no-anonymous-default-export": [
      "off",
      {
        "allowArray": false,
        "allowArrowFunction": false,
        "allowAnonymousClass": false,
        "allowAnonymousFunction": false,
        "allowLiteral": false,
        "allowObject": false
      }
    ],
    "import/exports-last": [
      "off"
    ],
    "import/group-exports": [
      "off"
    ],
    "import/no-default-export": [
      "off"
    ],
    "import/no-named-export": [
      "off"
    ],
    "import/no-self-import": [
      "error"
    ],
    "import/no-cycle": [
      "error",
      {
        "maxDepth": "∞",
        "ignoreExternal": false
      }
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        "commonjs": true
      }
    ],
    "import/dynamic-import-chunkname": [
      "off",
      {
        "importFunctions": [],
        "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+"
      }
    ],
    "import/no-relative-parent-imports": [
      "off"
    ],
    "import/no-unused-modules": [
      "off",
      {
        "ignoreExports": [],
        "missingExports": true,
        "unusedExports": true
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        "requireReturnForObjectLiteral": false
      }
    ],
    "constructor-super": [
      "error"
    ],
    "no-class-assign": [
      "error"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-duplicate-imports": [
      "off"
    ],
    "no-new-symbol": [
      "error"
    ],
    "no-restricted-exports": [
      "off",
      {
        "restrictedNamedExports": [
          "default",
          "then"
        ]
      }
    ],
    "no-restricted-imports": [
      "off",
      {
        "paths": [],
        "patterns": []
      }
    ],
    "no-this-before-super": [
      "error"
    ],
    "no-useless-computed-key": [
      "error"
    ],
    "no-useless-constructor": [
      "error"
    ],
    "no-useless-rename": [
      "error",
      {
        "ignoreDestructuring": false,
        "ignoreImport": false,
        "ignoreExport": false
      }
    ],
    "no-var": [
      "error"
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        "ignoreConstructors": false,
        "avoidQuotes": true
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": true
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": true,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "prefer-numeric-literals": [
      "error"
    ],
    "prefer-reflect": [
      "off"
    ],
    "prefer-rest-params": [
      "error"
    ],
    "prefer-spread": [
      "error"
    ],
    "prefer-template": [
      "error"
    ],
    "require-yield": [
      "error"
    ],
    "sort-imports": [
      "off",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ]
      }
    ],
    "symbol-description": [
      "error"
    ],
    "init-declarations": [
      "off"
    ],
    "no-catch-shadow": [
      "off"
    ],
    "no-delete-var": [
      "error"
    ],
    "no-label-var": [
      "error"
    ],
    "no-restricted-globals": [
      "error",
      {
        "name": "isFinite",
        "message": "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"
      },
      {
        "name": "isNaN",
        "message": "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"
      },
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      "defaultstatus",
      "event",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top"
    ],
    "no-shadow": [
      "error"
    ],
    "no-shadow-restricted-names": [
      "error"
    ],
    "no-undef": [
      "error"
    ],
    "no-undef-init": [
      "error"
    ],
    "no-undefined": [
      "off"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": true,
        "classes": true,
        "variables": true
      }
    ],
    "camelcase": [
      "error",
      {
        "properties": "never",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "capitalized-comments": [
      "off",
      "never",
      {
        "line": {
          "ignorePattern": ".*",
          "ignoreInlineComments": true,
          "ignoreConsecutiveComments": true
        },
        "block": {
          "ignorePattern": ".*",
          "ignoreInlineComments": true,
          "ignoreConsecutiveComments": true
        }
      }
    ],
    "consistent-this": [
      "off"
    ],
    "func-name-matching": [
      "off",
      "always",
      {
        "includeCommonJSModuleExports": false,
        "considerPropertyDescriptor": true
      }
    ],
    "func-names": [
      "warn"
    ],
    "func-style": [
      "off",
      "expression"
    ],
    "id-blacklist": [
      "off"
    ],
    "id-denylist": [
      "off"
    ],
    "id-length": [
      "off"
    ],
    "id-match": [
      "off"
    ],
    "line-comment-position": [
      "off",
      {
        "position": "above",
        "ignorePattern": "",
        "applyDefaultPatterns": true
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": false
      }
    ],
    "lines-around-directive": [
      "error",
      {
        "before": "always",
        "after": "always"
      }
    ],
    "max-depth": [
      "off",
      4
    ],
    "max-lines": [
      "off",
      {
        "max": 300,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-lines-per-function": [
      "off",
      {
        "max": 50,
        "skipBlankLines": true,
        "skipComments": true,
        "IIFEs": true
      }
    ],
    "max-nested-callbacks": [
      "off"
    ],
    "max-params": [
      "off",
      3
    ],
    "max-statements": [
      "off",
      10
    ],
    "max-statements-per-line": [
      "off",
      {
        "max": 1
      }
    ],
    "multiline-comment-style": [
      "off",
      "starred-block"
    ],
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "newIsCapExceptions": [],
        "capIsNew": false,
        "capIsNewExceptions": [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List"
        ],
        "properties": true
      }
    ],
    "newline-after-var": [
      "off"
    ],
    "newline-before-return": [
      "off"
    ],
    "no-array-constructor": [
      "error"
    ],
    "no-bitwise": [
      "error"
    ],
    "no-continue": [
      "error"
    ],
    "no-inline-comments": [
      "off"
    ],
    "no-lonely-if": [
      "error"
    ],
    "no-multi-assign": [
      "error"
    ],
    "no-negated-condition": [
      "off"
    ],
    "no-nested-ternary": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "no-plusplus": [
      "error"
    ],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "ForOfStatement",
        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "no-ternary": [
      "off"
    ],
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": false
      }
    ],
    "one-var": [
      "error",
      "never"
    ],
    "operator-assignment": [
      "error",
      "always"
    ],
    "padding-line-between-statements": [
      "off"
    ],
    "prefer-exponentiation-operator": [
      "off"
    ],
    "prefer-object-spread": [
      "error"
    ],
    "require-jsdoc": [
      "off"
    ],
    "sort-keys": [
      "off",
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ],
    "sort-vars": [
      "off"
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!",
            "/"
          ]
        },
        "block": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!",
            ":",
            "::"
          ],
          "balanced": true
        }
      }
    ],
    "callback-return": [
      "off"
    ],
    "global-require": [
      "error"
    ],
    "handle-callback-err": [
      "off"
    ],
    "no-buffer-constructor": [
      "error"
    ],
    "no-mixed-requires": [
      "off",
      false
    ],
    "no-new-require": [
      "error"
    ],
    "no-path-concat": [
      "error"
    ],
    "no-process-env": [
      "off"
    ],
    "no-process-exit": [
      "off"
    ],
    "no-restricted-modules": [
      "off"
    ],
    "no-sync": [
      "off"
    ],
    "for-direction": [
      "error"
    ],
    "getter-return": [
      "error",
      {
        "allowImplicit": true
      }
    ],
    "no-async-promise-executor": [
      "error"
    ],
    "no-await-in-loop": [
      "error"
    ],
    "no-compare-neg-zero": [
      "error"
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "no-console": [
      "warn"
    ],
    "no-constant-condition": [
      "warn"
    ],
    "no-control-regex": [
      "error"
    ],
    "no-debugger": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "no-dupe-else-if": [
      "off"
    ],
    "no-dupe-keys": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-empty-character-class": [
      "error"
    ],
    "no-ex-assign": [
      "error"
    ],
    "no-extra-boolean-cast": [
      "error"
    ],
    "no-func-assign": [
      "error"
    ],
    "no-import-assign": [
      "off"
    ],
    "no-inner-declarations": [
      "error"
    ],
    "no-invalid-regexp": [
      "error"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-loss-of-precision": [
      "off"
    ],
    "no-misleading-character-class": [
      "error"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-promise-executor-return": [
      "off"
    ],
    "no-prototype-builtins": [
      "error"
    ],
    "no-regex-spaces": [
      "error"
    ],
    "no-setter-return": [
      "off"
    ],
    "no-sparse-arrays": [
      "error"
    ],
    "no-template-curly-in-string": [
      "error"
    ],
    "no-unreachable": [
      "error"
    ],
    "no-unreachable-loop": [
      "off",
      {
        "ignore": []
      }
    ],
    "no-unsafe-finally": [
      "error"
    ],
    "no-unsafe-negation": [
      "error"
    ],
    "no-useless-backreference": [
      "off"
    ],
    "no-negated-in-lhs": [
      "off"
    ],
    "require-atomic-updates": [
      "off"
    ],
    "use-isnan": [
      "error"
    ],
    "valid-jsdoc": [
      "off"
    ],
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true
      }
    ],
    "accessor-pairs": [
      "off"
    ],
    "array-callback-return": [
      "error",
      {
        "allowImplicit": true,
        "checkForEach": false
      }
    ],
    "block-scoped-var": [
      "error"
    ],
    "complexity": [
      "off",
      11
    ],
    "consistent-return": [
      "error"
    ],
    "default-case": [
      "error",
      {
        "commentPattern": "^no default$"
      }
    ],
    "default-case-last": [
      "off"
    ],
    "default-param-last": [
      "off"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true,
        "allowPattern": ""
      }
    ],
    "eqeqeq": [
      "error",
      "always",
      {
        "null": "ignore"
      }
    ],
    "grouped-accessor-pairs": [
      "off"
    ],
    "guard-for-in": [
      "error"
    ],
    "max-classes-per-file": [
      "error",
      1
    ],
    "no-alert": [
      "warn"
    ],
    "no-caller": [
      "error"
    ],
    "no-case-declarations": [
      "error"
    ],
    "no-constructor-return": [
      "off"
    ],
    "no-div-regex": [
      "off"
    ],
    "no-else-return": [
      "error",
      {
        "allowElseIf": false
      }
    ],
    "no-empty-function": [
      "error",
      {
        "allow": [
          "arrowFunctions",
          "functions",
          "methods"
        ]
      }
    ],
    "no-empty-pattern": [
      "error"
    ],
    "no-eq-null": [
      "off"
    ],
    "no-eval": [
      "error"
    ],
    "no-extend-native": [
      "error"
    ],
    "no-extra-bind": [
      "error"
    ],
    "no-extra-label": [
      "error"
    ],
    "no-fallthrough": [
      "error"
    ],
    "no-global-assign": [
      "error",
      {
        "exceptions": []
      }
    ],
    "no-native-reassign": [
      "off"
    ],
    "no-implicit-coercion": [
      "off",
      {
        "boolean": false,
        "number": true,
        "string": true,
        "allow": []
      }
    ],
    "no-implicit-globals": [
      "off"
    ],
    "no-implied-eval": [
      "error"
    ],
    "no-invalid-this": [
      "off"
    ],
    "no-iterator": [
      "error"
    ],
    "no-labels": [
      "error",
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": [
      "error"
    ],
    "no-loop-func": [
      "error"
    ],
    "no-magic-numbers": [
      "off",
      {
        "ignore": [],
        "ignoreArrayIndexes": true,
        "enforceConst": true,
        "detectObjects": false
      }
    ],
    "no-multi-str": [
      "error"
    ],
    "no-new": [
      "error"
    ],
    "no-new-func": [
      "error"
    ],
    "no-new-wrappers": [
      "error"
    ],
    "no-octal": [
      "error"
    ],
    "no-octal-escape": [
      "error"
    ],
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext"
        ]
      }
    ],
    "no-proto": [
      "error"
    ],
    "no-redeclare": [
      "error"
    ],
    "no-restricted-properties": [
      "error",
      {
        "object": "arguments",
        "property": "callee",
        "message": "arguments.callee is deprecated"
      },
      {
        "object": "global",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "self",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "window",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "global",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "object": "self",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "object": "window",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "property": "__defineGetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "property": "__defineSetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "object": "Math",
        "property": "pow",
        "message": "Use the exponentiation operator (**) instead."
      }
    ],
    "no-return-assign": [
      "error",
      "always"
    ],
    "no-return-await": [
      "error"
    ],
    "no-script-url": [
      "error"
    ],
    "no-self-assign": [
      "error",
      {
        "props": true
      }
    ],
    "no-self-compare": [
      "error"
    ],
    "no-sequences": [
      "error"
    ],
    "no-throw-literal": [
      "error"
    ],
    "no-unmodified-loop-condition": [
      "off"
    ],
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": false,
        "allowTernary": false,
        "allowTaggedTemplates": false,
        "enforceForJSX": false
      }
    ],
    "no-unused-labels": [
      "error"
    ],
    "no-useless-call": [
      "off"
    ],
    "no-useless-catch": [
      "error"
    ],
    "no-useless-concat": [
      "error"
    ],
    "no-useless-escape": [
      "error"
    ],
    "no-useless-return": [
      "error"
    ],
    "no-void": [
      "error"
    ],
    "no-warning-comments": [
      "off",
      {
        "terms": [
          "todo",
          "fixme",
          "xxx"
        ],
        "location": "start"
      }
    ],
    "no-with": [
      "error"
    ],
    "prefer-promise-reject-errors": [
      "error",
      {
        "allowEmptyReject": true
      }
    ],
    "prefer-named-capture-group": [
      "off"
    ],
    "prefer-regex-literals": [
      "off"
    ],
    "radix": [
      "error"
    ],
    "require-await": [
      "off"
    ],
    "require-unicode-regexp": [
      "off"
    ],
    "vars-on-top": [
      "error"
    ],
    "yoda": [
      "error"
    ]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".json"
        ]
      }
    },
    "react": {
      "pragma": "React",
      "version": "detect"
    },
    "propWrapperFunctions": [
      "forbidExtraProps",
      "exact",
      "Object.freeze"
    ],
    "import/extensions": [
      ".js",
      ".mjs",
      ".jsx"
    ],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  },
  "ignorePatterns": []
}

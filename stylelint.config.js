module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
      "stylelint-scss"
    ],
    "rules": {
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "tailwind",
            "apply",
            "responsive",
            "variants",
            "selector-nested-pattern",
            "screen",
            "mixin",
            "use",
            "include"
          ]
        }
      ],
      "selector-nested-pattern": "^&",
      "indentation": 2,
      "no-descending-specificity": null,
      "no-eol-whitespace": null,
      "declaration-empty-line-before": null,
      "value-keyword-case": null
    }
  }
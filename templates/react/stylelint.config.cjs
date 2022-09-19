module.exports = {
  // customSyntax: 'postcss-less',
  extends: [
    // 'stylelint-config-recommended-scss',
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'selector-type-no-unknown': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    // 取消禁止重複定義，這樣可以在css module中單獨定義變量
    'no-duplicate-selectors': null,
    // 禁止出現空區塊
    'block-no-empty': null,
    'declaration-empty-line-before': 'never',
    // 在聲明的塊中中禁止出現重複的屬性
    'declaration-block-no-duplicate-properties': true,
    // 禁止使用可以縮寫卻不縮寫的屬性
    'declaration-block-no-redundant-longhand-properties': true,
    // 禁止在簡寫屬性中使用冗餘值
    'shorthand-property-no-redundant-values': true,
    // 指定十六進制顏色是否使用縮寫
    'color-hex-length': 'short',
    // 禁止空註釋
    'comment-no-empty': true,
    // 指定字體名稱是否需要使用引號引起來 | 期待每一個不是關鍵字的字體名都使用引號引起來
    'font-family-name-quotes': 'always-unless-keyword',
    // 要求使用數字或命名的 (可能的情況下) font-weight 值
    // 'font-weight-notation': 'numeric',
    // 要求或禁止 url 使用引號
    'function-url-quotes': 'always',
    // 禁止屬性使用瀏覽器引擎前綴
    'property-no-vendor-prefix': true,
    // 禁止給值添加瀏覽器引擎前綴
    'value-no-vendor-prefix': true,
    // 禁止使用瀏覽器引擎前綴
    'selector-no-vendor-prefix': true,
    // 禁止低優先級的選擇器出現在高優先級的選擇器之後
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['layer', 'apply', 'screen', 'define-mixin', 'mixin'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          // CSS Modules composition
          // https://github.com/css-modules/css-modules#composition
          'composes',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // CSS Modules: global scope
          // https://github.com/css-modules/css-modules#exceptions
          'global',
          'local',
        ],
      },
    ],
    'rule-empty-line-before': [
      // 要求或禁止在規則聲明之前有空行
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-empty-line-before': [
      // 要求或禁止在 at 規則之前有空行
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'comment-empty-line-before': [
      // 要求或禁止在註釋之前有空行
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
  },
};

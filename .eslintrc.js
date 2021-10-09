/*eslint-env node*/
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {

    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    /**
     * Best Practices
     */
    'no-multi-spaces': 2, // 禁止多个空格
    'no-multi-str': 2, // 禁止多行字符串

    /**
     * Variables
     */
    'no-undefined': 2, // 禁止用undefined作为标识符

    /**
     * Stylistic Issues
     */
    'block-spacing': 2, // 强制在开括号前和闭括号后有空格
    'comma-spacing': [2, { 'before': false, 'after': true }], // 逗号后加空格
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'keyword-spacing': 2, // 强制关键字周围空格的一致性
    'key-spacing': 2, // 强制在对象字面量的键和值之间使用一致的空格
    'eol-last': [2, 'always'], // 文件末尾空行
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 1 }], // 禁止多行空行
    'no-trailing-spaces': 2, // 禁用行尾空白
    'object-curly-spacing': [2, 'always'], // 强制在大括号中使用一致的空格
    'semi': [2, 'never'], // 不用分号
    'semi-spacing': [2, { 'before': false, 'after': true }], // 强制分号前后有空格
    'space-in-parens': [2, 'never'], // 禁止圆括号内有空白

    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
  }
}

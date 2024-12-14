module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  plugins: [
    "no-multiple-refs",
    "vue"
  ],
  rules: {
    "no-multiple-refs/no-multiple-refs": "error"
  },
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
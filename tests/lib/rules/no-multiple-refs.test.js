'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-multiple-refs');

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
});

ruleTester.run('no-multiple-refs', rule, {
  // valid cases
  valid: [
    {
      filename: 'test.vue',
      code: `
        <template>
          <div>
            <div ref="myRef"></div>
          </div>
        </template>
        <script>
        export default {
          methods: {
            test() {
              const ref = this.$refs.myRef;
              ref.$refs.child;
            }
          }
        }
        </script>
      `
    },
    {
      filename: 'test.vue',
      code: `
        <script>
        export default {
          methods: {
            test() {
              this.$refs.foo;
            }
          }
        }
        </script>
      `
    }
  ],
  // fault cases
  invalid: [
    {
      filename: 'test.vue',
      code: `
        <script>
        export default {
          methods: {
            test() {
              this.$refs.foo.$refs.bar;
            }
          }
        }
        </script>
      `,
      errors: [
        {
          message: 'Disallow multiple $refs in a single line',
          type: 'MemberExpression'
        }
      ]
    }
  ]
});
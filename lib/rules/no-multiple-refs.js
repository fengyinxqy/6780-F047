// lib/rules/no-multiple-refs.js
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow multiple $refs in a single line',
      category: 'Vue',
      recommended: true
    },
    fixable: null,
    schema: []
  },

  create(context) {
    const reported = new Set();

    return {
      MemberExpression(node) {
        // only report the first time
        if (reported.has(node.loc.start.line)) {
          return;
        }

        let current = node;
        let refsCount = 0;

        while (current && current.type === 'MemberExpression') {
          if (current.property && current.property.name === '$refs') {
            refsCount++;
          }
          current = current.object;
        }

        if (refsCount > 1) {
          context.report({
            node,
            message: 'Disallow multiple $refs in a single line'
          });
          reported.add(node.loc.start.line);
        }
      }
    };
  }
};
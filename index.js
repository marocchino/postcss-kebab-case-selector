var postcss = require('postcss');

module.exports = postcss.plugin('postcss-kebab-case-selector', function (opts) {
    opts = opts || {};

    return root => {
        root.walkRules(rule => {
            rule.selector = rule.selector
                .replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)
                .replace(/_/g, '-')
                .replace(/-+/g, '-')
                .replace(/(\.|#)-/g, '$1')
                .replace(/-(\d)/g, '$1');
        });
    };
});

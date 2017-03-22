var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('change CamelCase', () => {
    return run('.CamelCase { }', '.camel-case { }', { });
});
it('change camelCase', () => {
    return run('.camelCase { }', '.camel-case { }', { });
});
it('change snake_case', () => {
    return run('.snake_case_01 { }', '.snake-case01 { }', { });
});
it('change snake_case', () => {
    return run('.snake_case-01 { }', '.snake-case01 { }', { });
});
it('change snake_case', () => {
    return run('.snake_case01 { }', '.snake-case01 { }', { });
});
it('change snake_Case', () => {
    return run('.snake_Case { }', '.snake-case { }', { });
});
it('change kebab--case', () => {
    return run('#kebab--case { }', '#kebab-case { }', { });
});

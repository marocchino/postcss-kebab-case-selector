# PostCSS Kebab Case Selector [![Build Status][ci-img]][ci]

[PostCSS] plugin that normalize all css name to kebab case.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/marocchino/postcss-kebab-case-selector.svg
[ci]:      https://travis-ci.org/marocchino/postcss-kebab-case-selector

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-kebab-case-selector') ])
```

See [PostCSS] docs for examples for your environment.

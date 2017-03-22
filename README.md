# PostCSS Kebab Case Selector [![Build Status][ci-img]][ci]

[PostCSS] plugin that normalize all css name to kebab case.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/marocchino/postcss-kebab-case-selector.svg
[ci]:      https://travis-ci.org/marocchino/postcss-kebab-case-selector

```css
/* Input example */
.foo--bar {
}
.FooBar {
}
.fooBar {
}
.foo--bar_01 {
}
.foo-bar-01 {
}
```

```css
/* Output example */
.foo-bar {
}
.foo-bar {
}
.foo-bar {
}
.foo-bar01 {
}
.foo-bar01 {
}
```

## Usage

```js
postcss([ require('postcss-kebab-case-selector') ])
```

See [PostCSS] docs for examples for your environment.

# eslint-config-brudi

Base [Eslint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) of brudi

## Installation

Install the package with

`npm install eslint-config-ns --save-dev`

or

`yarn add eslint-config-ns -D`

## eslint Setup

Now add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@brudi/brudi"],
  }
}
```

or to the `.eslintrc` or `.eslintrc.js`:

```js
module.exports = {
  extends: ["@brudi/brudi"],
};
```

## ESLint and Prettier

- works together with prettier, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- the ESLint rules are based on the great work of [airbnb's eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - they also have a smaller more compact one: [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- made for React environment but can be used on a eg. node-server environment as well)
- handles jest for tests as well
- `env`: Browser and Node environment
- `globals`: added some related jest variables
- `parser`: usage of babel (used babel-eslint parser)

Note: you can still overwrite the `env`, `globals` and `parser` in your local
`.eslintrc.js`.

## License

© brudi, 2019. Licensed under an
[Apache-2](https://github.com/brudi/brudi-hui/blob/master/LICENSE) license.
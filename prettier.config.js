module.exports = {
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
}

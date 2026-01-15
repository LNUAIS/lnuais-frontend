// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  // plugins
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // basics
  pluginSearchDirs: false,
  printWidth: 100,
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",

  // html / jsx-ish behavior
  htmlWhitespaceSensitivity: "css",

  // keep one attribute per line when it gets long
  singleAttributePerLine: false,

  // line endings
  endOfLine: "lf",
};

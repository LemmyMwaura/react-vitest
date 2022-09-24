module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: [true, false],
      },
    ],
    "linebreak-style": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/semi": 0,
    "react/jsx-no-target-blank": 0,
    "react/function-component-definition": 0,
  },
};

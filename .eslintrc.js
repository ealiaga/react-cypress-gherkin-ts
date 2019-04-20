module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "arbnb",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {}
};
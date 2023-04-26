//@ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["react-app", "react-app/jest"],
  ignorePatterns: ["/build", "/node_modules"],
};

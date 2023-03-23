module.exports = {
  env: {
    es2021: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  ignorePatterns: [".eslint*", "jest.*", "webpack*"],
  rules: {
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        patterns: ["../**", "./**"],
      },
    ],
    "@typescript-eslint/require-await": "off",
  },
  overrides: [
    {
      files: ["src/domain/**/*"],
      rules: {
        "@typescript-eslint/no-restricted-imports": [
          "error",
          {
            patterns: [
              "src/*",
              "@application/*",
              "@infrastructure/*",
              "tests/*",
            ],
          },
        ],
      },
    },
    {
      files: ["src/application/**/*"],
      rules: {
        "@typescript-eslint/no-restricted-imports": [
          "error",
          {
            patterns: ["src/*", "@infrastructure/*", "tests/*"],
          },
        ],
      },
    },
    {
      files: ["src/infrastructure/**/*"],
      rules: {
        "@typescript-eslint/no-restricted-imports": [
          "error",
          {
            patterns: ["src/*", "tests/*"],
          },
        ],
      },
    },
  ],
};

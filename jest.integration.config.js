const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
  preset: "ts-jest",
  // collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.ts(x)?"],
  testEnvironment: "node",
  testMatch: ["**/tests/integration/**/?(*.)spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-plugin-must-assert"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
  },
};

module.exports = config;

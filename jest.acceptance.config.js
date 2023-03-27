const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
  preset: "ts-jest",
  // collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.ts(x)?"],
  testEnvironment: "node",
  testMatch: ["**/tests/acceptance/**/?(*.)spec.ts?(x)"],
  setupFilesAfterEnv: ["jest-plugin-must-assert"],
  maxWorkers: 1,
  moduleNameMapper: {
    "@infrastructure/adaptors": [
      "<rootDir>/tests/testDoubles/acceptanceTestAdaptors.ts",
    ],
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
  },
};

module.exports = config;

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  rootDir: ".",

  testRegex: [".*\\.spec\\.ts$"],

  testEnvironment: "node",

  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },

  transformIgnorePatterns: [
    "/node_modules/(?!(uuid)/)",
  ],
};

export default config;
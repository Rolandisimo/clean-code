module.exports = {
  preset: "ts-jest",
  collectCoverage: false,
  collectCoverageFrom: [
    "!**/node_modules/**",
  ],
  coverageReporters: ["text"],
  reporters: ["default"],
  moduleDirectories: [
    "node_modules"
  ],
  globals: {
    "ts-jest": {
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/,
        ignoreCodes: [6133]
      }
    }
  },
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"]
};

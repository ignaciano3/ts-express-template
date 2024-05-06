module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test).ts?(x)",
    "**/*.steps.ts",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["/node_modules/"],
};

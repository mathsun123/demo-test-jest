module.exports = {
  moduleNameMapper: { "\\.(css|less)$": "identity-obj-proxy" },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  transform: {
    "^.+\\.js$": "babel-jest", // Use babel-jest for JavaScript files
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report",
      "includeFailureMsg": true,
      "includeConsoleLog": true,
    }]
  ],
};

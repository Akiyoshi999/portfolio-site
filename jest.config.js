const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customeJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

module.exports = {
  testEnvironment: "jsdom",
};

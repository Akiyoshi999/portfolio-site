const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // テスト環境の next.config.jsと.envファイルを読み込む
  dir: "./",
});

// Jest に渡すカスタム設定を追加する
const customeJestConfig = {
  // 各テストの実行前に渡すオプションを追加
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // TypeScript の設定で baseUrl をルートディレクトリに設定している場合、alias を動作させるためには以下のようにする必要があります
  moduleDirectories: ["node_modules", "<rootDir>/"],
  //   testEnvironment: "jest-environment-jsdom",
};

module.exports = {
  testEnvironment: "jsdom",
};

module.exports = {
  preset: 'ts-jest',
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json"
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "((\\.|/)(test))\\.ts?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
};

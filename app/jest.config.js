module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testEnvironment: "jsdom",
  roots: ["src", "__tests__"],
  testMatch: ["<rootDir>/**/*.(test).{js,jsx,ts,tsx}"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^__tests__/(.*)": "<rootDir>/__tests__/$1",
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.spec.ts',
    '!src/app/**/*.module.ts',
    '!src/app/**/index.ts',
    '!src/app/**/*.interface.ts',
    '!src/app/**/*.enum.ts',
    '!src/app/**/*.model.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary', 'lcov'],
  // Coverage thresholds disabled for now - can be increased as tests are added
  // coverageThreshold: {
  //   global: {
  //     branches: 10,
  //     functions: 10,
  //     lines: 10,
  //     statements: 10,
  //   },
  // },
  testMatch: ['**/src/**/*.spec.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/cypress/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$|@angular|@ngrx|ngx-)',
  ],
  testTimeout: 30000,
};
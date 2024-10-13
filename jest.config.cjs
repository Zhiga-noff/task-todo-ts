module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transformIgnorePatterns: ['/node_modules/'],

    moduleNameMapper: {
        '\\.module\\.scss$': 'identity-obj-proxy',  // Мокирование стилей для модульных файлов SCSS
        '\\.scss$': 'identity-obj-proxy',          // Мокирование обычных SCSS файлов
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

};

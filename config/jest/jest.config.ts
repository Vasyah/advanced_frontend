/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
	// All imported modules in your tests should be mocked automatically
	// automock: false,

	// Stop running tests after `n` failures
	// bail: 0,

	// The directory where Jest should store its cached dependency information
	// cacheDirectory: "/private/var/folders/mj/sm94yqrx2ll8p2tr7t30sh64k76j4l/T/jest_a43amr",

	// Automatically clear mock calls, instances and results before every test
	clearMocks: true,
	// An array of file extensions your modules use
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],

	// The root directory that Jest should scan for tests and modules within
	rootDir: '../../',

	// The glob patterns Jest uses to detect test files
	testMatch: [
		'**/__tests__/**/*.[jt]s?(x)',
		'**/?(*.)+(spec|test).[tj]s?(x)',
	],

	// The test environment that will be used for testing
	testEnvironment: 'jsdom',
	// для работы тестов с абсолютными импортами
	modulePaths: [
		'<rootDir>src',
	],
	// для подхватывания методов DOM для тестирования
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	// маппер позволяет для файлов с указанным расширением делать заглушки
	moduleNameMapper: {
		'\\.s?css$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
	},
};

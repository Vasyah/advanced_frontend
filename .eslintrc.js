const path = require('path');

module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},

	extends: ['airbnb', 'airbnb-typescript', 'plugin:i18next/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: path.resolve(__dirname, 'tsconfig.eslint.json'),
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', '@typescript-eslint', 'i18next'],
	rules: {
		semi: 'off',
		'@typescript-eslint/semi': 'off',
		// отступы
		indent: ['error', 'tab'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-tabs': 'off',
		'import/prefer-default-export': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'no-promise-executor-return': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-underscore-dangle': 'off',
		'no-return-assign': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/no-unused-prop-types': 'warn',
		'react/function-component-definition': 'off',
		'react/require-default-props': 'off',
		'react/destructuring-assignment': 'warn',
		'react/react-in-jsx-scope': 'off',
		'no-useless-escape': 'off',
		'max-len': ['error', { code: 140, ignoreComments: true }],
		'import/no-extraneous-dependencies': 'off',
		'i18next/no-literal-string': 'off',
	},
};

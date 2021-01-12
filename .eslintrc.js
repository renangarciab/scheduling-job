module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'react-hooks', 'jest'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.jsx', '.js'] },
		],
		'no-unused-vars': [
			'warn',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false },
		],
		'no-shadow': [
			'warn',
			{ builtinGlobals: false, hoist: 'functions', allow: [] },
		],
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};

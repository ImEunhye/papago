module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"for-direction": [
			"error"
		],
		"getter-return": [
			"error"
		],
		"no-async-promise-executor": [
			"error"
		],
		"no-class-assign": [
			"error"
		],
		"no-compare-neg-zero": [
			"error"
		],
		"no-cond-assign": [
			"error",
			"always"
		],
		"no-const-assign": [
			"error"
		],
		"no-dupe-args": [
			"error"
		],
		"camelcase": [
			"error",
			{
				"properties": "always"
			}
		],
		"no-var": [
			"error"
		],
		"object-curly-spacing": [
			"error",
			"always",
			{
				"arraysInObjects": true,
				"objectsInObjects": true
			}
		],
		"padding-line-between-statements": [
			"error"
		]
	},
	"env": {
		"es6": true
	}
};

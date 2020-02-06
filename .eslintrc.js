module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true,
		"jquery": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {
		"indent": [
			0,
			"error",
			"tab"
		],
		"linebreak-style": 0,
		[
			
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
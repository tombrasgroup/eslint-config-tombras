module.exports = {
	root: true,
	parserOptions: {
		parser: "babel-eslint",
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/essential",
		"plugin:prettier/recommended",
	],
	env: {
		"browser": true,
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				trailingComma: "all",
			},
		]
	}
};